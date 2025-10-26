#!/usr/bin/env node

/**
 * Comprehensive Flowchart Node ID Fixer
 * Intelligently fixes all flowchart mermaid diagrams to use step IDs as node IDs
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

// Extract step IDs from flowchart definition using proper parsing
function extractStepIds(content, flowchartKey) {
  const stepIds = [];
  
  // Find the flowchart definition start
  const flowchartPattern = new RegExp(`'${flowchartKey}'\\s*:\\s*\\{`, 'g');
  const match = flowchartPattern.exec(content);
  if (!match) return [];
  
  const flowchartStart = match.index;
  
  // Find the steps array
  const stepsPattern = /steps:\s*\[/;
  const stepsMatch = stepsPattern.exec(content.substring(flowchartStart));
  if (!stepsMatch) return [];
  
  const stepsArrayStart = flowchartStart + stepsMatch.index + stepsMatch[0].length;
  
  // Find the closing bracket of steps array
  let bracketCount = 1;
  let i = stepsArrayStart;
  while (i < content.length && bracketCount > 0) {
    if (content[i] === '[') bracketCount++;
    if (content[i] === ']') bracketCount--;
    i++;
  }
  
  const stepsSection = content.substring(stepsArrayStart, i - 1);
  
  // Extract all id values
  const idPattern = /id:\s*['"]([^'"]+)['"]/g;
  let idMatch;
  while ((idMatch = idPattern.exec(stepsSection)) !== null) {
    stepIds.push(idMatch[1]);
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

// Create intelligent mapping from old node IDs to step IDs
function createNodeMapping(mermaidNodeIds, stepIds) {
  const mapping = {};
  const usedSteps = new Set();
  
  // First pass: exact kebab-case matches
  mermaidNodeIds.forEach(nodeId => {
    if (stepIds.includes(nodeId) && !usedSteps.has(nodeId)) {
      mapping[nodeId] = nodeId;
      usedSteps.add(nodeId);
    }
  });
  
  // Second pass: convert camelCase to kebab-case
  mermaidNodeIds.forEach(nodeId => {
    if (mapping[nodeId]) return; // Already mapped
    
    const kebabNodeId = toKebabCase(nodeId);
    if (stepIds.includes(kebabNodeId) && !usedSteps.has(kebabNodeId)) {
      mapping[nodeId] = kebabNodeId;
      usedSteps.add(kebabNodeId);
    }
  });
  
  // Third pass: fuzzy matching
  mermaidNodeIds.forEach(nodeId => {
    if (mapping[nodeId]) return; // Already mapped
    
    const kebabNodeId = toKebabCase(nodeId);
    const similar = stepIds.find(stepId => 
      !usedSteps.has(stepId) && (
        stepId.includes(kebabNodeId) || 
        kebabNodeId.includes(stepId) ||
        stepId.split('-').some(part => kebabNodeId.includes(part))
      )
    );
    
    if (similar) {
      mapping[nodeId] = similar;
      usedSteps.add(similar);
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
  const fileName = path.basename(filePath);
  console.log(`\nProcessing: ${fileName}`);
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;
  let changeCount = 0;
  
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
    if (stepIds.length === 0) return;
    
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
      const mapping = createNodeMapping(mermaidNodeIds, stepIds);
      const mappedCount = Object.keys(mapping).length;
      
      if (mappedCount > 0) {
        console.log(`  ✓ ${flowchartKey}: Mapping ${mappedCount} nodes`);
        const newDiagram = replaceMermaidNodeIds(oldDiagram, mapping);
        content = content.substring(0, mermaidStart + 17) + newDiagram + content.substring(mermaidEnd);
        modified = true;
        changeCount += mappedCount;
      }
    }
  });
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`  ✅ Updated (${changeCount} node mappings)`);
  } else {
    console.log(`  ✓ No changes needed`);
  }
}

// Main execution
function main() {
  console.log('🔧 Fixing all flowchart node IDs...\n');
  
  const files = fs.readdirSync(FLOWCHART_DIR)
    .filter(f => f.endsWith('.ts') && !f.endsWith('.test.ts'))
    .sort()
    .map(f => path.join(FLOWCHART_DIR, f));
  
  files.forEach(processFlowchartFile);
  
  console.log('\n✅ Done!');
}

main();

