#!/usr/bin/env node

/**
 * Fix Remaining Failing Flowcharts
 * Specifically targets: hu_white_card, pl_business_harbour, ro_startup_visa
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FLOWCHART_DIR = path.join(__dirname, '../src/data/flowcharts');

// Mapping of PascalCase to kebab-case for startup visa flowcharts
const STARTUP_NODE_MAPPING = {
  'BusinessIdea': 'develop-business-idea',
  'Funds': 'verify-funds',
  'CheckFunds': 'check-funds',
  'Program': 'apply-to-program',
  'Accelerator': 'apply-to-accelerator',
  'Acceptance': 'program-acceptance',
  'GatherDocs': 'gather-documents',
  'Submit': 'submit-application',
  'Processing': 'processing',
  'Decision': 'decision',
  'Visa': 'receive-visa',
  'Appeal': 'consider-appeal',
  'Travel': 'travel',
  'Register': 'register-business',
};

function replaceMermaidNodeIds(diagram, mapping) {
  let updated = diagram;
  
  Object.entries(mapping).forEach(([oldId, newId]) => {
    // Replace node definitions: oldId[ or oldId{ or oldId(
    updated = updated.replace(new RegExp(`\\b${oldId}\\s*([\\[\\{\\(])`, 'g'), `${newId}$1`);
    
    // Replace node references: --> oldId or -->|label| oldId
    updated = updated.replace(new RegExp(`-->\\s*${oldId}\\b`, 'g'), `--> ${newId}`);
    updated = updated.replace(new RegExp(`-->\\|([^|]+)\\|\\s*${oldId}\\b`, 'g'), `-->|$1| ${newId}`);
    
    // Replace style references: style oldId
    updated = updated.replace(new RegExp(`style\\s+${oldId}\\b`, 'g'), `style ${newId}`);
  });
  
  return updated;
}

function fixFlowchart(filePath, flowchartId) {
  console.log(`\nFixing ${flowchartId} in ${path.basename(filePath)}...`);
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Find the flowchart
  const flowchartStart = content.indexOf(`'${flowchartId}':`);
  if (flowchartStart === -1) {
    console.log(`  ❌ Flowchart ${flowchartId} not found`);
    return;
  }
  
  // Find the mermaid diagram
  const mermaidStart = content.indexOf('mermaidDiagram: `', flowchartStart);
  const mermaidEnd = content.indexOf('`,', mermaidStart);
  
  if (mermaidStart === -1 || mermaidEnd === -1) {
    console.log(`  ❌ Mermaid diagram not found`);
    return;
  }
  
  const oldDiagram = content.substring(mermaidStart + 17, mermaidEnd);
  const newDiagram = replaceMermaidNodeIds(oldDiagram, STARTUP_NODE_MAPPING);
  
  if (oldDiagram !== newDiagram) {
    content = content.substring(0, mermaidStart + 17) + newDiagram + content.substring(mermaidEnd);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`  ✅ Updated Mermaid diagram`);
  } else {
    console.log(`  ✓ No changes needed`);
  }
}

console.log('🔧 Fixing remaining failing flowcharts...\n');

// Fix hu_white_card
fixFlowchart(path.join(FLOWCHART_DIR, 'hungary.ts'), 'hu_white_card');

// Fix pl_business_harbour
fixFlowchart(path.join(FLOWCHART_DIR, 'poland.ts'), 'pl_business_harbour');

// Fix ro_startup_visa
fixFlowchart(path.join(FLOWCHART_DIR, 'romania.ts'), 'ro_startup_visa');

console.log('\n✅ Done!');

