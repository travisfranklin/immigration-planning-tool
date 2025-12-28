/**
 * Fix Flowchart Syntax Script
 * Adds missing commas between mermaidDiagram and reactFlowData
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FLOWCHARTS_DIR = path.join(__dirname, '../src/data/flowcharts');

function fixFlowchartFile(filePath: string): boolean {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    const originalContent = content;

    // Remove quotes from property names in reactFlowData
    // This converts JSON format to TypeScript object literal format
    // Pattern: "propertyName": -> propertyName:
    content = content.replace(/"(nodes|edges|id|type|position|x|y|data|label|stepId|nodeType|status|source|target|style|stroke|strokeWidth)"\s*:/g, '$1:');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`✓ Fixed ${path.basename(filePath)}`);
      return true;
    } else {
      console.log(`- No changes needed for ${path.basename(filePath)}`);
      return false;
    }
  } catch (error) {
    console.error(`✗ Error fixing ${path.basename(filePath)}:`, error);
    return false;
  }
}

function main() {
  console.log('🔧 Fixing flowchart syntax errors...\n');

  const files = fs.readdirSync(FLOWCHARTS_DIR)
    .filter(file => file.endsWith('.ts') && file !== 'index.ts');

  let fixed = 0;
  let total = 0;

  for (const file of files) {
    const filePath = path.join(FLOWCHARTS_DIR, file);
    if (fixFlowchartFile(filePath)) {
      fixed++;
    }
    total++;
  }

  console.log(`\n✅ Fixed ${fixed}/${total} files`);
}

main();

