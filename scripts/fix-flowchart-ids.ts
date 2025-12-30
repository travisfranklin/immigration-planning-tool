#!/usr/bin/env tsx
/**
 * Flowchart ID Fixer Script
 * 
 * This script automatically fixes ID mismatches between Mermaid diagrams and step definitions
 * by updating the Mermaid diagrams to use the correct kebab-case IDs from the steps array.
 * 
 * Run with: npx tsx scripts/fix-flowchart-ids.ts
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

// Extract node IDs from Mermaid diagram
function extractNodeIds(mermaidDiagram: string): string[] {
  const nodeIds: string[] = [];
  
  // Match process nodes: nodeId[Label] or nodeId([Label])
  // Exclude decision nodes: nodeId{Label} - these are conditional branches and don't need steps
  const processNodePattern = /\b([a-zA-Z][\w-]*)\s*[\[\(]/g;
  let match;
  
  while ((match = processNodePattern.exec(mermaidDiagram)) !== null) {
    const nodeId = match[1];
    // Skip common keywords and special nodes
    if (!['Start', 'End', 'Success', 'End1', 'End2', 'End3', 'End4'].includes(nodeId)) {
      nodeIds.push(nodeId);
    }
  }
  
  return [...new Set(nodeIds)]; // Remove duplicates
}

// Extract step IDs from steps array for a specific program
function extractStepIds(fileContent: string, programKey: string): string[] {
  const stepIds: string[] = [];

  // Find the steps array for this specific program
  // Match from 'programKey': { ... steps: [ to the closing ],
  const programStartPattern = new RegExp(`['"]${programKey}['"]:\\s*\\{[\\s\\S]*?steps:\\s*\\[`, 's');
  const startMatch = fileContent.match(programStartPattern);

  if (!startMatch) {
    return stepIds;
  }

  const startIndex = startMatch.index! + startMatch[0].length;

  // Find the matching closing bracket for the steps array
  let bracketCount = 1;
  let endIndex = startIndex;

  while (bracketCount > 0 && endIndex < fileContent.length) {
    if (fileContent[endIndex] === '[') bracketCount++;
    if (fileContent[endIndex] === ']') bracketCount--;
    endIndex++;
  }

  const stepsBlock = fileContent.substring(startIndex, endIndex - 1);

  // Match step id definitions like: id: 'step-id' or id: "step-id"
  const stepPattern = /id:\s*['"]([^'"]+)['"]/g;
  let match;

  while ((match = stepPattern.exec(stepsBlock)) !== null) {
    stepIds.push(match[1]);
  }

  return stepIds;
}

// Find best matching step ID for a node ID
function findMatchingStepId(nodeId: string, stepIds: string[]): string | null {
  // Direct match
  if (stepIds.includes(nodeId)) {
    return nodeId;
  }

  // Convert PascalCase/camelCase to kebab-case and check
  const kebabCase = nodeId
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
  if (stepIds.includes(kebabCase)) {
    return kebabCase;
  }

  // Try common mappings
  const commonMappings: Record<string, string[]> = {
    // Visa/Permit/Card related
    'Visa': ['receive-visa', 'visa', 'receive-blue-card', 'receive-permit', 'receive-card', 'visa-application'],
    'Card': ['receive-card', 'receive-blue-card', 'blue-card', 'e-residency-card', 'residence-card'],
    'Permit': ['receive-permit', 'work-permit', 'residence-permit', 'receive-permit-register'],
    'BlueCard': ['receive-blue-card', 'blue-card', 'receive-card'],
    'GoldenVisa': ['receive-golden-visa', 'golden-visa', 'visa-approval'],
    'WaitPermit': ['wait-permit', 'permit-processing', 'processing'],
    'WaitVisa': ['wait-visa', 'visa-processing', 'processing'],

    // Application process
    'Submit': ['submit-application', 'submit', 'application-submission'],
    'GatherDocs': ['gather-documents', 'docs', 'prepare-documents'],
    'Docs': ['gather-documents', 'prepare-documents', 'docs'],
    'Processing': ['processing', 'wait-processing', 'application-processing'],
    'Process': ['processing', 'wait-processing', 'application-processing'],
    'Wait': ['processing', 'wait-processing', 'waiting-period'],

    // Appeals and decisions
    'Appeal': ['consider-appeal', 'appeal', 'appeal-process'],

    // Registration and arrival
    'Register': ['register', 'registration', 'register-business', 'arrival-registration', 'residence-registration'],
    'registration': ['residence-registration', 'register', 'arrival-registration'],
    'Travel': ['travel', 'arrival', 'travel-to-hungary', 'travel-register'],
    'arrival': ['travel', 'arrival-registration', 'travel-register'],

    // Business related
    'BusinessIdea': ['develop-business-idea', 'business-idea'],
    'Funds': ['verify-funds', 'check-funds', 'capital'],
    'Program': ['apply-to-program', 'program-acceptance', 'program'],
    'Operate': ['operate-business', 'business-operations'],
    'Remote': ['remote-operations', 'operate-remotely'],

    // Employment related
    'EmployerApply': ['employer-applies', 'employer-application'],
    'Advertise': ['employer-advertises', 'job-advertisement'],

    // Property related
    'Property2': ['property-purchase', 'purchase-property', 'investment'],

    // Other
    'Continue': ['continue-search', 'job-search'],
    'Return': ['return-home', 'end-process'],
  };

  if (commonMappings[nodeId]) {
    for (const candidate of commonMappings[nodeId]) {
      if (stepIds.includes(candidate)) {
        return candidate;
      }
    }
  }

  // Try to find partial matches (fuzzy matching)
  const nodeIdLower = nodeId.toLowerCase();
  const nodeIdWithoutDashes = nodeIdLower.replace(/-/g, '');

  for (const stepId of stepIds) {
    const stepIdWithoutDashes = stepId.replace(/-/g, '');

    // Check if node ID is contained in step ID or vice versa
    if (stepIdWithoutDashes.includes(nodeIdWithoutDashes) ||
        nodeIdWithoutDashes.includes(stepIdWithoutDashes)) {
      return stepId;
    }
  }

  return null;
}

// Fix Mermaid diagram by replacing node IDs
function fixMermaidDiagram(mermaidDiagram: string, nodeIdMap: Map<string, string>): string {
  let fixed = mermaidDiagram;
  
  // Sort by length (longest first) to avoid partial replacements
  const sortedEntries = Array.from(nodeIdMap.entries()).sort((a, b) => b[0].length - a[0].length);
  
  for (const [oldId, newId] of sortedEntries) {
    if (oldId === newId) continue;
    
    // Replace node definitions: oldId[Label] or oldId([Label])
    fixed = fixed.replace(new RegExp(`\\b${oldId}\\[`, 'g'), `${newId}[`);
    fixed = fixed.replace(new RegExp(`\\b${oldId}\\(`, 'g'), `${newId}(`);
    
    // Replace node references in edges: --> oldId or oldId -->
    fixed = fixed.replace(new RegExp(`-->\\s*${oldId}\\b`, 'g'), `--> ${newId}`);
    fixed = fixed.replace(new RegExp(`\\b${oldId}\\s*-->`, 'g'), `${newId} -->`);
    
    // Replace node references in conditional edges: -->|label| oldId
    fixed = fixed.replace(new RegExp(`-->\\|[^|]+\\|\\s*${oldId}\\b`, 'g'), (match) => {
      return match.replace(oldId, newId);
    });
  }
  
  return fixed;
}

// Fix a single flowchart program
function fixFlowchart(fileContent: string, programKey: string): { fixed: string; changes: number; mappings: Map<string, string> } {
  // Find the mermaid diagram for this specific program
  const programBlockPattern = new RegExp(`(['"]${programKey}['"]:\\s*\\{[\\s\\S]*?mermaidDiagram:\\s*\`)([\\s\\S]*?)(\`[\\s\\S]*?steps:\\s*\\[)`, 's');
  const programMatch = fileContent.match(programBlockPattern);

  if (!programMatch) {
    return { fixed: fileContent, changes: 0, mappings: new Map() };
  }

  const mermaidDiagram = programMatch[2];
  const nodeIds = extractNodeIds(mermaidDiagram);
  const stepIds = extractStepIds(fileContent, programKey);

  // Build mapping of old IDs to new IDs
  const nodeIdMap = new Map<string, string>();
  for (const nodeId of nodeIds) {
    const matchingStepId = findMatchingStepId(nodeId, stepIds);
    if (matchingStepId && matchingStepId !== nodeId) {
      nodeIdMap.set(nodeId, matchingStepId);
    }
  }

  if (nodeIdMap.size === 0) {
    return { fixed: fileContent, changes: 0, mappings: new Map() };
  }

  // Fix the Mermaid diagram
  const fixedMermaid = fixMermaidDiagram(mermaidDiagram, nodeIdMap);

  // Replace in file content
  const fixed = fileContent.replace(programBlockPattern, `$1${fixedMermaid}$3`);

  return { fixed, changes: nodeIdMap.size, mappings: nodeIdMap };
}

// Main function
function main(): void {
  const flowchartsDir = join(process.cwd(), 'src', 'data', 'flowcharts');
  const files = readdirSync(flowchartsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

  let totalChanges = 0;
  let filesModified = 0;

  console.log('🔧 Fixing flowchart ID mismatches...\n');

  for (const file of files) {
    const filePath = join(flowchartsDir, file);
    let fileContent = readFileSync(filePath, 'utf-8');
    let fileChanges = 0;

    // Extract all program keys from the file
    const programKeys: string[] = [];
    const programKeyPattern = /^\s*['"]([a-z_]+)['"]:\s*\{/gm;
    let match;

    while ((match = programKeyPattern.exec(fileContent)) !== null) {
      programKeys.push(match[1]);
    }

    // Fix each program in the file (iterate until no more changes)
    for (const programKey of programKeys) {
      let programChanges = 0;
      let iteration = 0;
      const allMappings = new Map<string, string>();

      // Keep fixing until no more changes are found
      while (iteration < 20) { // Safety limit
        const { fixed, changes, mappings } = fixFlowchart(fileContent, programKey);
        if (changes === 0) break;

        fileContent = fixed;
        programChanges += changes;

        // Merge mappings
        for (const [old, new_] of mappings.entries()) {
          allMappings.set(old, new_);
        }

        iteration++;
      }

      if (programChanges > 0) {
        fileChanges += programChanges;
        const mappingStr = Array.from(allMappings.entries())
          .map(([old, new_]) => `${old} → ${new_}`)
          .join(', ');
        console.log(`✅ ${file} - ${programKey}: Fixed ${programChanges} node ID(s) (${mappingStr})`);
      }
    }

    // Write back to file if changes were made
    if (fileChanges > 0) {
      writeFileSync(filePath, fileContent, 'utf-8');
      filesModified++;
      totalChanges += fileChanges;
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Files modified: ${filesModified}`);
  console.log(`   Total node IDs fixed: ${totalChanges}`);

  if (totalChanges > 0) {
    console.log(`\n✨ All flowchart ID mismatches have been fixed!`);
    console.log(`   Run 'npm run validate:flowcharts' to verify.`);
  } else {
    console.log(`\n✅ No issues found - all flowcharts are already correct!`);
  }
}

main();

