#!/usr/bin/env tsx
/**
 * Batch Conversion Script: Mermaid to React Flow
 *
 * Converts all Mermaid flowcharts to React Flow format
 * Usage: npm run convert-flowcharts
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { parseMermaidToReactFlow } from '../src/utils/flowchart/mermaidToReactFlow';
import { applyDagreLayout } from '../src/utils/flowchart/layoutEngine';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FLOWCHARTS_DIR = path.join(__dirname, '../src/data/flowcharts');
const DRY_RUN = process.argv.includes('--dry-run');
const VERBOSE = process.argv.includes('--verbose');

interface ConversionStats {
  total: number;
  converted: number;
  skipped: number;
  errors: number;
  files: string[];
}

const stats: ConversionStats = {
  total: 0,
  converted: 0,
  skipped: 0,
  errors: 0,
  files: [],
};

function log(message: string, level: 'info' | 'success' | 'error' | 'warn' = 'info') {
  const colors = {
    info: '\x1b[36m',    // Cyan
    success: '\x1b[32m', // Green
    error: '\x1b[31m',   // Red
    warn: '\x1b[33m',    // Yellow
  };
  const reset = '\x1b[0m';
  console.log(`${colors[level]}${message}${reset}`);
}

function convertFlowchartFile(filePath: string): void {
  const fileName = path.basename(filePath);
  
  if (fileName === 'index.ts' || fileName.endsWith('.test.ts')) {
    if (VERBOSE) log(`Skipping ${fileName}`, 'warn');
    stats.skipped++;
    return;
  }

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Check if file already has reactFlowData
    if (content.includes('reactFlowData:')) {
      if (VERBOSE) log(`Skipping ${fileName} (already has reactFlowData)`, 'warn');
      stats.skipped++;
      return;
    }

    // Find all mermaidDiagram definitions and convert them
    const mermaidRegex = /mermaidDiagram:\s*`([^`]+)`,\s*\n\s*steps:/g;
    const matches = Array.from(content.matchAll(mermaidRegex));
    let updatedContent = content;
    let conversionsInFile = 0;
    let offset = 0; // Track position offset as we insert new content

    for (const match of matches) {
      const mermaidDiagram = match[1];
      const fullMatch = match[0];

      try {
        // Convert to React Flow format
        const parsedData = parseMermaidToReactFlow(mermaidDiagram);
        const layoutedData = applyDagreLayout(parsedData);

        // Format as TypeScript code with proper indentation
        const reactFlowCode = `reactFlowData: ${JSON.stringify(layoutedData, null, 2).replace(/\n/g, '\n    ')},\n    `;

        // Replace the match with mermaidDiagram + reactFlowData + steps
        const replacement = fullMatch.replace('steps:', `${reactFlowCode}steps:`);
        const insertPosition = match.index + offset;

        updatedContent =
          updatedContent.slice(0, insertPosition) +
          replacement +
          updatedContent.slice(insertPosition + fullMatch.length);

        // Update offset for next iteration
        offset += replacement.length - fullMatch.length;

        conversionsInFile++;
      } catch (error) {
        log(`Error converting diagram in ${fileName}: ${error}`, 'error');
        stats.errors++;
      }
    }

    if (conversionsInFile > 0) {
      if (!DRY_RUN) {
        fs.writeFileSync(filePath, updatedContent, 'utf-8');
        log(`✓ Converted ${conversionsInFile} flowchart(s) in ${fileName}`, 'success');
      } else {
        log(`[DRY RUN] Would convert ${conversionsInFile} flowchart(s) in ${fileName}`, 'info');
      }
      stats.converted++;
      stats.files.push(fileName);
    } else {
      if (VERBOSE) log(`No flowcharts to convert in ${fileName}`, 'warn');
      stats.skipped++;
    }
    
    stats.total++;
  } catch (error) {
    log(`Error processing ${fileName}: ${error}`, 'error');
    stats.errors++;
    stats.total++;
  }
}

function main() {
  log('='.repeat(60), 'info');
  log('Mermaid to React Flow Batch Conversion', 'info');
  log('='.repeat(60), 'info');
  
  if (DRY_RUN) {
    log('Running in DRY RUN mode (no files will be modified)', 'warn');
  }
  
  log('');
  
  // Get all TypeScript files in flowcharts directory
  const files = fs.readdirSync(FLOWCHARTS_DIR)
    .filter(file => file.endsWith('.ts'))
    .map(file => path.join(FLOWCHARTS_DIR, file));
  
  log(`Found ${files.length} files to process\n`, 'info');
  
  // Process each file
  files.forEach(convertFlowchartFile);
  
  // Print summary
  log('');
  log('='.repeat(60), 'info');
  log('Conversion Summary', 'info');
  log('='.repeat(60), 'info');
  log(`Total files processed: ${stats.total}`, 'info');
  log(`Successfully converted: ${stats.converted}`, 'success');
  log(`Skipped: ${stats.skipped}`, 'warn');
  log(`Errors: ${stats.errors}`, 'error');
  
  if (stats.files.length > 0) {
    log('\nConverted files:', 'info');
    stats.files.forEach(file => log(`  - ${file}`, 'info'));
  }
}

main();

