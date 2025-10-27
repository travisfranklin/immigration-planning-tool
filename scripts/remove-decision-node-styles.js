#!/usr/bin/env node

/**
 * Remove Decision Node Style Commands
 * 
 * This script removes unnecessary `style` commands for decision nodes from all flowcharts.
 * Decision nodes are now automatically styled via CSS in src/index.css.
 * 
 * Usage: node scripts/remove-decision-node-styles.js [--dry-run]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FLOWCHARTS_DIR = path.join(__dirname, '../src/data/flowcharts');
const DRY_RUN = process.argv.includes('--dry-run');

// Statistics
const stats = {
  filesProcessed: 0,
  filesModified: 0,
  stylesRemoved: 0,
  errors: 0,
};

/**
 * Extract all decision node IDs from a Mermaid diagram
 * Decision nodes use curly braces: nodeId{text}
 */
function extractDecisionNodeIds(diagram) {
  const decisionIds = new Set();
  
  // Match decision node definitions: nodeId{text}
  const decisionPattern = /\b([a-zA-Z0-9_-]+)\s*\{[^}]+\}/g;
  let match;
  
  while ((match = decisionPattern.exec(diagram)) !== null) {
    const nodeId = match[1];
    if (!['flowchart', 'TD', 'LR', 'TB', 'BT', 'RL'].includes(nodeId)) {
      decisionIds.add(nodeId);
    }
  }
  
  return decisionIds;
}

/**
 * Remove style commands for decision nodes
 */
function removeDecisionNodeStyles(content, filePath) {
  const fileName = path.basename(filePath);
  let modified = false;
  let removedCount = 0;
  
  // Process each mermaidDiagram in the file
  const diagramPattern = /(mermaidDiagram:\s*`)([\s\S]*?)(`)/g;
  
  const newContent = content.replace(diagramPattern, (match, prefix, diagram, suffix) => {
    // Extract decision node IDs
    const decisionIds = extractDecisionNodeIds(diagram);
    
    if (decisionIds.size === 0) {
      return match; // No decision nodes, skip
    }
    
    // Remove style commands for decision nodes
    let modifiedDiagram = diagram;
    
    decisionIds.forEach(nodeId => {
      // Match style commands for this node
      // Pattern: style nodeId fill:#...,stroke:#...
      const stylePattern = new RegExp(
        `\\s*style\\s+${nodeId}\\s+fill:#[a-fA-F0-9]{3,6}(?:,stroke:#[a-fA-F0-9]{3,6})?(?:,stroke-width:\\d+px)?\\s*\\n?`,
        'g'
      );
      
      const beforeLength = modifiedDiagram.length;
      modifiedDiagram = modifiedDiagram.replace(stylePattern, '');
      const afterLength = modifiedDiagram.length;
      
      if (beforeLength !== afterLength) {
        removedCount++;
        modified = true;
        console.log(`  ✓ Removed style for decision node: ${nodeId}`);
      }
    });
    
    return prefix + modifiedDiagram + suffix;
  });
  
  if (modified) {
    stats.stylesRemoved += removedCount;
    console.log(`  📝 ${fileName}: Removed ${removedCount} decision node style(s)`);
  }
  
  return { content: newContent, modified };
}

/**
 * Process a single flowchart file
 */
function processFile(filePath) {
  const fileName = path.basename(filePath);
  
  try {
    stats.filesProcessed++;
    
    const content = fs.readFileSync(filePath, 'utf-8');
    const { content: newContent, modified } = removeDecisionNodeStyles(content, filePath);
    
    if (modified) {
      stats.filesModified++;
      
      if (!DRY_RUN) {
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`  ✅ Updated: ${fileName}`);
      } else {
        console.log(`  🔍 Would update: ${fileName} (dry run)`);
      }
    }
  } catch (error) {
    stats.errors++;
    console.error(`  ❌ Error processing ${fileName}:`, error.message);
  }
}

/**
 * Process all flowchart files
 */
function processAllFiles() {
  console.log('🔍 Scanning flowchart files...\n');
  
  const files = fs.readdirSync(FLOWCHARTS_DIR)
    .filter(file => file.endsWith('.ts') && file !== 'index.ts')
    .map(file => path.join(FLOWCHARTS_DIR, file));
  
  console.log(`Found ${files.length} flowchart files\n`);
  
  if (DRY_RUN) {
    console.log('🔍 DRY RUN MODE - No files will be modified\n');
  }
  
  files.forEach(processFile);
  
  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 Summary');
  console.log('='.repeat(60));
  console.log(`Files processed:     ${stats.filesProcessed}`);
  console.log(`Files modified:      ${stats.filesModified}`);
  console.log(`Styles removed:      ${stats.stylesRemoved}`);
  console.log(`Errors:              ${stats.errors}`);
  console.log('='.repeat(60));
  
  if (DRY_RUN) {
    console.log('\n💡 Run without --dry-run to apply changes');
  } else if (stats.filesModified > 0) {
    console.log('\n✅ Files updated successfully!');
    console.log('💡 Run tests to verify: npm test -- flowcharts.test.ts');
  } else {
    console.log('\n✨ No changes needed - all flowcharts are already clean!');
  }
}

// Run the script
processAllFiles();

