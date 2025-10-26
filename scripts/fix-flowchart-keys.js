#!/usr/bin/env node

/**
 * Fix Flowchart Keys to Match ProgramIds
 * Renames flowchart keys to match their programId values
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FLOWCHART_DIR = path.join(__dirname, '../src/data/flowcharts');

function processFlowchartFile(filePath) {
  const fileName = path.basename(filePath);
  console.log(`\nProcessing: ${fileName}`);
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;
  
  // Find all flowchart definitions and their programIds
  const flowchartPattern = /^\s*'([^']+)':\s*\{[\s\S]*?programId:\s*'([^']+)'/gm;
  let match;
  const replacements = [];
  
  while ((match = flowchartPattern.exec(content)) !== null) {
    const flowchartKey = match[1];
    const programId = match[2];
    
    // Extract just the part after the country code (e.g., "eu_blue_card" from "de_eu_blue_card")
    const programIdWithoutCountry = programId.replace(/^[a-z]{2}_/, '');
    
    // If the flowchart key doesn't match the programId (without country), we need to fix it
    if (flowchartKey !== programId && flowchartKey !== programIdWithoutCountry) {
      console.log(`  ✓ Found mismatch: '${flowchartKey}' should be '${programIdWithoutCountry}'`);
      replacements.push({
        oldKey: flowchartKey,
        newKey: programIdWithoutCountry,
        programId: programId
      });
    }
  }
  
  // Apply replacements
  replacements.forEach(({ oldKey, newKey }) => {
    // Replace the key in the object definition
    const keyPattern = new RegExp(`^(\\s*)'${oldKey}'(:\\s*\\{)`, 'gm');
    content = content.replace(keyPattern, `$1'${newKey}'$2`);
    modified = true;
  });
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`  ✅ Updated (${replacements.length} keys renamed)`);
  } else {
    console.log(`  ✓ No changes needed`);
  }
}

function main() {
  console.log('🔧 Fixing flowchart keys to match programIds...\n');
  
  const files = fs.readdirSync(FLOWCHART_DIR)
    .filter(f => f.endsWith('.ts') && !f.endsWith('.test.ts'))
    .sort()
    .map(f => path.join(FLOWCHART_DIR, f));
  
  files.forEach(processFlowchartFile);
  
  console.log('\n✅ Done!');
}

main();

