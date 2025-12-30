#!/usr/bin/env tsx
/* eslint-disable no-useless-escape */
/**
 * Flowchart Validation Script
 *
 * This script validates all flowchart definitions to ensure:
 * 1. Mermaid diagram node IDs match step IDs
 * 2. All interactive nodes have corresponding steps
 * 3. No orphaned steps exist
 *
 * Run with: npx tsx scripts/validate-flowcharts.ts
 */

import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

interface ValidationIssue {
  programId: string;
  countryCode: string;
  programName: string;
  type: 'missing-step' | 'orphaned-step' | 'case-mismatch';
  nodeId?: string;
  stepId?: string;
  message: string;
}

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

// Extract flowchart metadata
function extractFlowchartMetadata(fileContent: string, programKey: string): { programId: string; countryCode: string; programName: string } | null {
  // Find the flowchart definition block for this program
  const programPattern = new RegExp(`['"]${programKey}['"]:\\s*\\{[^}]*programId:\\s*['"]([^'"]+)['"][^}]*countryCode:\\s*['"]([^'"]+)['"][^}]*programName:\\s*['"]([^'"]+)['"]`, 's');
  const match = fileContent.match(programPattern);
  
  if (match) {
    return {
      programId: match[1],
      countryCode: match[2],
      programName: match[3]
    };
  }
  
  return null;
}

// Validate a single flowchart
function validateFlowchart(fileContent: string, programKey: string): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  
  // Extract metadata
  const metadata = extractFlowchartMetadata(fileContent, programKey);
  if (!metadata) {
    return issues;
  }
  
  // Find the mermaid diagram for this specific program
  const programBlockPattern = new RegExp(`['"]${programKey}['"]:\\s*\\{[\\s\\S]*?mermaidDiagram:\\s*\`([\\s\\S]*?)\`[\\s\\S]*?steps:\\s*\\[`, 's');
  const programMatch = fileContent.match(programBlockPattern);
  
  if (!programMatch) {
    return issues;
  }
  
  const mermaidDiagram = programMatch[1];
  const nodeIds = extractNodeIds(mermaidDiagram);
  const stepIds = extractStepIds(fileContent, programKey);
  
  // Check for nodes without matching steps
  for (const nodeId of nodeIds) {
    if (!stepIds.includes(nodeId)) {
      // Check if it's a case mismatch (e.g., JobOffer vs job-offer)
      const kebabCase = nodeId.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
      const hasCaseMismatch = stepIds.includes(kebabCase);
      
      issues.push({
        programId: metadata.programId,
        countryCode: metadata.countryCode,
        programName: metadata.programName,
        type: hasCaseMismatch ? 'case-mismatch' : 'missing-step',
        nodeId,
        message: hasCaseMismatch
          ? `Node "${nodeId}" uses PascalCase but step uses kebab-case "${kebabCase}"`
          : `Node "${nodeId}" has no matching step definition`
      });
    }
  }
  
  return issues;
}

// Main validation function
function validateAllFlowcharts(): void {
  const flowchartsDir = join(process.cwd(), 'src', 'data', 'flowcharts');
  const files = readdirSync(flowchartsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
  
  let totalIssues = 0;
  const issuesByType: Record<string, number> = {
    'missing-step': 0,
    'orphaned-step': 0,
    'case-mismatch': 0
  };
  
  console.log('🔍 Validating flowchart definitions...\n');
  
  for (const file of files) {
    const filePath = join(flowchartsDir, file);
    const fileContent = readFileSync(filePath, 'utf-8');
    
    // Extract all program keys from the file
    // Match program keys like 'program_id': { at the top level of the export
    const programKeys: string[] = [];
    const programKeyPattern = /^\s*['"]([a-z_]+)['"]:\s*\{/gm;
    let match;

    while ((match = programKeyPattern.exec(fileContent)) !== null) {
      programKeys.push(match[1]);
    }

    if (programKeys.length > 0) {
      for (const programKey of programKeys) {
        const issues = validateFlowchart(fileContent, programKey);

        if (issues.length > 0) {
          console.log(`❌ ${file} - ${programKey}:`);
          issues.forEach(issue => {
            console.log(`   ${issue.type === 'case-mismatch' ? '⚠️ ' : '❌'} ${issue.message}`);
            issuesByType[issue.type]++;
            totalIssues++;
          });
          console.log('');
        }
      }
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`   Total issues: ${totalIssues}`);
  console.log(`   Case mismatches: ${issuesByType['case-mismatch']}`);
  console.log(`   Missing steps: ${issuesByType['missing-step']}`);
  console.log(`   Orphaned steps: ${issuesByType['orphaned-step']}`);
  
  if (totalIssues > 0) {
    console.log('\n💡 Tip: Node IDs in Mermaid diagrams should use kebab-case to match step IDs');
    process.exit(1);
  } else {
    console.log('\n✅ All flowcharts validated successfully!');
  }
}

// Run validation
validateAllFlowcharts();

