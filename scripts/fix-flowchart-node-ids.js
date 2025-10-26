#!/usr/bin/env node

/**
 * Automated Flowchart Node ID Fixer
 * Fixes all flowchart mermaid diagrams to use step IDs as node IDs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FLOWCHART_DIR = path.join(__dirname, '../src/data/flowcharts');

// Helper to convert camelCase to kebab-case
function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

// Extract step IDs from a flowchart definition
function extractStepIds(content, flowchartKey) {
  const stepIds = [];

  // Find the flowchart definition
  const flowchartStart = content.indexOf(`'${flowchartKey}':`);
  if (flowchartStart === -1) return [];

  // Find the next flowchart or end of object
  const nextFlowchart = content.indexOf(`'`, flowchartStart + 1);
  const nextComma = content.indexOf('},', flowchartStart);
  const flowchartEnd = Math.min(
    nextFlowchart > flowchartStart ? nextFlowchart : Infinity,
    nextComma > flowchartStart ? nextComma : Infinity
  );

  const flowchartSection = content.substring(flowchartStart, flowchartEnd);

  // Find the steps array
  const stepsStart = flowchartSection.indexOf('steps: [');
  if (stepsStart === -1) return [];

  // Find the closing bracket of steps array
  let bracketCount = 0;
  let inStepsArray = false;
  let stepsEnd = stepsStart;

  for (let i = stepsStart + 8; i < flowchartSection.length; i++) {
    const char = flowchartSection[i];
    if (char === '[') {
      bracketCount++;
      inStepsArray = true;
    } else if (char === ']') {
      if (bracketCount === 0 && inStepsArray) {
        stepsEnd = i;
        break;
      }
      bracketCount--;
    }
  }

  const stepsSection = flowchartSection.substring(stepsStart, stepsEnd);

  // Extract all id values
  const idPattern = /id:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = idPattern.exec(stepsSection)) !== null) {
    stepIds.push(match[1]);
  }

  return stepIds;
}

// Extract mermaid node IDs from diagram
function extractMermaidNodeIds(diagram) {
  const nodeIds = [];
  const nodePattern = /\b([a-z0-9\-]+)\s*[\[\{\(]/g;
  let match;
  
  while ((match = nodePattern.exec(diagram)) !== null) {
    const nodeId = match[1];
    if (!['flowchart', 'td', 'lr', 'start', 'end', 'style'].includes(nodeId.toLowerCase())) {
      nodeIds.push(nodeId);
    }
  }
  
  return [...new Set(nodeIds)];
}

// Create mapping from old node IDs to step IDs
function createNodeMapping(mermaidNodeIds, stepIds) {
  const mapping = {};
  
  // Try to match nodes to steps
  mermaidNodeIds.forEach(nodeId => {
    const kebabNodeId = toKebabCase(nodeId);
    
    // Direct match
    if (stepIds.includes(kebabNodeId)) {
      mapping[nodeId] = kebabNodeId;
      return;
    }
    
    // Try to find similar step
    const similar = stepIds.find(stepId => 
      stepId.includes(kebabNodeId) || kebabNodeId.includes(stepId)
    );
    
    if (similar) {
      mapping[nodeId] = similar;
    }
  });
  
  return mapping;
}

// Replace node IDs in mermaid diagram
function replaceMermaidNodeIds(diagram, mapping) {
  let updated = diagram;
  
  Object.entries(mapping).forEach(([oldId, newId]) => {
    // Replace node definitions: oldId[ or oldId{ or oldId(
    updated = updated.replace(new RegExp(`\\b${oldId}\\s*([\\[\\{\\(])`, 'g'), `${newId}$1`);
    
    // Replace node references: --> oldId or -->|label| oldId
    updated = updated.replace(new RegExp(`-->\\s*${oldId}\\b`, 'g'), `-->${newId}`);
    updated = updated.replace(new RegExp(`-->\\|([^|]+)\\|\\s*${oldId}\\b`, 'g'), `-->|$1| ${newId}`);
    
    // Replace style references: style oldId
    updated = updated.replace(new RegExp(`style\\s+${oldId}\\b`, 'g'), `style ${newId}`);
  });
  
  return updated;
}

// Process a single flowchart file
function processFlowchartFile(filePath) {
  console.log(`\nProcessing: ${path.basename(filePath)}`);
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;
  
  // Find all flowchart keys in the file
  const flowchartKeyPattern = /'([^']+)':\s*\{/g;
  let match;
  const flowchartKeys = [];
  
  while ((match = flowchartKeyPattern.exec(content)) !== null) {
    flowchartKeys.push(match[1]);
  }
  
  // Process each flowchart
  flowchartKeys.forEach(flowchartKey => {
    const stepIds = extractStepIds(content, flowchartKey);
    
    // Find the mermaid diagram for this flowchart
    const flowchartStart = content.indexOf(`'${flowchartKey}':`);
    const mermaidStart = content.indexOf('mermaidDiagram: `', flowchartStart);
    const mermaidEnd = content.indexOf('`,', mermaidStart);
    
    if (mermaidStart === -1 || mermaidEnd === -1) return;
    
    const oldDiagram = content.substring(mermaidStart + 17, mermaidEnd);
    const mermaidNodeIds = extractMermaidNodeIds(oldDiagram);
    
    // Check if there are unmatched nodes
    const unmatchedNodes = mermaidNodeIds.filter(nodeId => !stepIds.includes(nodeId));
    
    if (unmatchedNodes.length > 0) {
      console.log(`  Flowchart: ${flowchartKey}`);
      console.log(`    Unmatched nodes: ${unmatchedNodes.join(', ')}`);
      console.log(`    Step IDs: ${stepIds.join(', ')}`);
      
      const mapping = createNodeMapping(mermaidNodeIds, stepIds);
      console.log(`    Mapping: ${JSON.stringify(mapping)}`);
      
      const newDiagram = replaceMermaidNodeIds(oldDiagram, mapping);
      content = content.substring(0, mermaidStart + 17) + newDiagram + content.substring(mermaidEnd);
      modified = true;
    }
  });
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`  ✓ Updated`);
  } else {
    console.log(`  ✓ No changes needed`);
  }
}

// Main execution
function main() {
  console.log('🔧 Fixing flowchart node IDs...\n');
  
  const files = fs.readdirSync(FLOWCHART_DIR)
    .filter(f => f.endsWith('.ts') && !f.endsWith('.test.ts'))
    .map(f => path.join(FLOWCHART_DIR, f));
  
  files.forEach(processFlowchartFile);
  
  console.log('\n✅ Done!');
}

main();

