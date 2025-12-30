#!/usr/bin/env tsx
/**
 * Generate Missing Steps Script
 * 
 * This script generates template step definitions for nodes that don't have matching steps.
 * It creates a report that can be used to add the missing steps to each flowchart.
 * 
 * Run with: npx tsx scripts/generate-missing-steps.ts
 */

import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

// Extract node IDs from Mermaid diagram
function extractNodeIds(mermaidDiagram: string): string[] {
  const nodeIds: string[] = [];
  
  // Match process nodes: nodeId[Label] or nodeId([Label])
  // Exclude decision nodes: nodeId{Label}
  const processNodePattern = /\b([a-zA-Z][\w-]*)\s*[\[\(]/g;
  let match;
  
  while ((match = processNodePattern.exec(mermaidDiagram)) !== null) {
    const nodeId = match[1];
    if (!['Start', 'End', 'Success', 'End1', 'End2', 'End3', 'End4'].includes(nodeId)) {
      nodeIds.push(nodeId);
    }
  }
  
  return [...new Set(nodeIds)];
}

// Extract node label from Mermaid diagram
function extractNodeLabel(mermaidDiagram: string, nodeId: string): string {
  const labelPattern = new RegExp(`${nodeId}\\[([^\\]]+)\\]`);
  const match = mermaidDiagram.match(labelPattern);
  if (match) {
    return match[1].replace(/<br\/?>/g, ' ').trim();
  }
  return nodeId;
}

// Extract step IDs from steps array
function extractStepIds(fileContent: string, programKey: string): string[] {
  const stepIds: string[] = [];
  const programBlockPattern = new RegExp(`['"]${programKey}['"]:\\s*\\{[\\s\\S]*?steps:\\s*\\[([\\s\\S]*?)\\]\\s*,?\\s*\\}`, 's');
  const programMatch = fileContent.match(programBlockPattern);
  
  if (!programMatch) {
    return stepIds;
  }
  
  const stepsBlock = programMatch[1];
  const stepPattern = /id:\s*['"]([^'"]+)['"]/g;
  let match;
  
  while ((match = stepPattern.exec(stepsBlock)) !== null) {
    stepIds.push(match[1]);
  }
  
  return stepIds;
}

// Generate step template
function generateStepTemplate(nodeId: string, label: string): string {
  const title = label || nodeId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  return `    {
      id: '${nodeId}',
      title: '${title}',
      description: 'TODO: Add description',
      estimatedDuration: 'TODO: Add duration',
      documents: [
        // TODO: Add required documents
      ],
      notes: [
        // TODO: Add notes
      ],
    },`;
}

// Main function
function main(): void {
  const flowchartsDir = join(process.cwd(), 'src', 'data', 'flowcharts');
  const files = readdirSync(flowchartsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
  
  let totalMissing = 0;
  const report: string[] = [];
  
  console.log('📝 Generating missing step templates...\n');
  
  for (const file of files) {
    const filePath = join(flowchartsDir, file);
    const fileContent = readFileSync(filePath, 'utf-8');
    
    // Extract all program keys
    const programKeys: string[] = [];
    const programKeyPattern = /^\s*['"]([a-z_]+)['"]:\s*\{/gm;
    let match;
    
    while ((match = programKeyPattern.exec(fileContent)) !== null) {
      programKeys.push(match[1]);
    }
    
    for (const programKey of programKeys) {
      // Find the mermaid diagram
      const programBlockPattern = new RegExp(`['"]${programKey}['"]:\\s*\\{[\\s\\S]*?mermaidDiagram:\\s*\`([\\s\\S]*?)\``, 's');
      const programMatch = fileContent.match(programBlockPattern);
      
      if (!programMatch) continue;
      
      const mermaidDiagram = programMatch[1];
      const nodeIds = extractNodeIds(mermaidDiagram);
      const stepIds = extractStepIds(fileContent, programKey);
      
      const missingNodes = nodeIds.filter(nodeId => !stepIds.includes(nodeId));
      
      if (missingNodes.length > 0) {
        report.push(`\n## ${file} - ${programKey}`);
        report.push(`Missing ${missingNodes.length} step(s):\n`);
        
        for (const nodeId of missingNodes) {
          const label = extractNodeLabel(mermaidDiagram, nodeId);
          report.push(generateStepTemplate(nodeId, label));
          totalMissing++;
        }
        
        console.log(`❌ ${file} - ${programKey}: ${missingNodes.length} missing step(s)`);
      }
    }
  }
  
  // Write report to file
  const reportPath = join(process.cwd(), 'missing-steps-report.txt');
  writeFileSync(reportPath, report.join('\n'), 'utf-8');
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total missing steps: ${totalMissing}`);
  console.log(`   Report saved to: missing-steps-report.txt`);
}

main();

