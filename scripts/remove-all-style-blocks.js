#!/usr/bin/env node

/**
 * Remove All Style Blocks from Mermaid Diagrams
 * 
 * This script removes all `style` command blocks from mermaid diagrams.
 * With centralized CSS styling, these are no longer needed.
 * 
 * Usage: node scripts/remove-all-style-blocks.js [--dry-run]
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
 * Remove all style blocks from a mermaid diagram
 */
function removeStyleBlocks(diagram) {
  let modified = false;
  let removedCount = 0;
  
  // Split diagram into lines
  const lines = diagram.split('\n');
  const filteredLines = [];
  let inStyleBlock = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Check if this is a style command
    if (line.startsWith('style ')) {
      modified = true;
      removedCount++;
      inStyleBlock = true;
      continue; // Skip this line
    }
    
    // Check if we're in a style block (empty lines after style commands)
    if (inStyleBlock && line === '') {
      // Skip empty lines immediately after style commands
      // But check if the next non-empty line is also a style command
      let nextNonEmptyIndex = i + 1;
      while (nextNonEmptyIndex < lines.length && lines[nextNonEmptyIndex].trim() === '') {
        nextNonEmptyIndex++;
      }
      
      if (nextNonEmptyIndex < lines.length && lines[nextNonEmptyIndex].trim().startsWith('style ')) {
        continue; // Skip this empty line
      } else {
        inStyleBlock = false;
        // Keep one empty line before the closing backtick
        if (i < lines.length - 1) {
          filteredLines.push(lines[i]);
        }
      }
    } else {
      inStyleBlock = false;
      filteredLines.push(lines[i]);
    }
  }
  
  // Remove trailing empty lines before the closing backtick
  while (filteredLines.length > 0 && filteredLines[filteredLines.length - 1].trim() === '') {
    filteredLines.pop();
  }
  
  return {
    diagram: filteredLines.join('\n'),
    modified,
    removedCount,
  };
}

/**
 * Process a single flowchart file
 */
function processFile(filePath) {
  const fileName = path.basename(filePath);
  
  try {
    stats.filesProcessed++;
    
    const content = fs.readFileSync(filePath, 'utf-8');
    let newContent = content;
    let fileModified = false;
    let totalRemoved = 0;
    
    // Process each mermaidDiagram in the file
    const diagramPattern = /(mermaidDiagram:\s*`)([\s\S]*?)(`)/g;
    
    newContent = content.replace(diagramPattern, (match, prefix, diagram, suffix) => {
      const { diagram: cleanedDiagram, modified, removedCount } = removeStyleBlocks(diagram);
      
      if (modified) {
        fileModified = true;
        totalRemoved += removedCount;
      }
      
      return prefix + cleanedDiagram + suffix;
    });
    
    if (fileModified) {
      stats.filesModified++;
      stats.stylesRemoved += totalRemoved;
      
      console.log(`  📝 ${fileName}: Removed ${totalRemoved} style command(s)`);
      
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

