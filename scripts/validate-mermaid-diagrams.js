#!/usr/bin/env node

/**
 * Validate Mermaid Diagrams
 * Validates all Mermaid diagrams in flowchart files for syntax errors
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FLOWCHART_DIR = path.join(__dirname, '../src/data/flowcharts');

// Track validation results
const results = {
  total: 0,
  passed: 0,
  failed: 0,
  errors: []
};

/**
 * Extract mermaid diagrams from a TypeScript file
 */
function extractMermaidDiagrams(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const diagrams = [];

  // Match mermaidDiagram: ` ... `,
  const pattern = /mermaidDiagram:\s*`([^`]+)`/g;
  let match;

  // Also extract programId and programName for context
  const programIdPattern = /programId:\s*'([^']+)'/g;
  const programNamePattern = /programName:\s*'([^']+)'/g;

  const programIds = [];
  const programNames = [];

  let programIdMatch;
  while ((programIdMatch = programIdPattern.exec(content)) !== null) {
    programIds.push(programIdMatch[1]);
  }

  let programNameMatch;
  while ((programNameMatch = programNamePattern.exec(content)) !== null) {
    programNames.push(programNameMatch[1]);
  }

  let index = 0;
  while ((match = pattern.exec(content)) !== null) {
    diagrams.push({
      diagram: match[1],
      programId: programIds[index] || 'unknown',
      programName: programNames[index] || 'unknown',
      index
    });
    index++;
  }

  return diagrams;
}

/**
 * Extract all node IDs from a Mermaid diagram
 */
function extractNodeIds(diagram) {
  const nodeIds = new Set();

  // Match node definitions: nodeId[text], nodeId{text}, nodeId(text), nodeId([text])
  const nodeDefPattern = /\b([a-zA-Z0-9_-]+)\s*[\[\{\(]/g;
  let match;

  while ((match = nodeDefPattern.exec(diagram)) !== null) {
    const nodeId = match[1];
    // Filter out keywords
    if (!['flowchart', 'TD', 'LR', 'TB', 'BT', 'RL', 'style', 'class', 'classDef'].includes(nodeId)) {
      nodeIds.add(nodeId);
    }
  }

  return nodeIds;
}

/**
 * Extract all node references from a Mermaid diagram
 */
function extractNodeReferences(diagram) {
  const references = new Set();

  // Match arrow connections: nodeId --> or nodeId -->|label|
  const arrowPattern = /\b([a-zA-Z0-9_-]+)\s*(?:-->|---)/g;
  let match;

  while ((match = arrowPattern.exec(diagram)) !== null) {
    const nodeId = match[1];
    if (!['flowchart', 'TD', 'LR', 'TB', 'BT', 'RL'].includes(nodeId)) {
      references.add(nodeId);
    }
  }

  // Also match nodes after arrows: --> nodeId or -->|label| nodeId
  const afterArrowPattern = /(?:-->|---)\s*(?:\|[^|]+\|)?\s*([a-zA-Z0-9_-]+)/g;
  while ((match = afterArrowPattern.exec(diagram)) !== null) {
    const nodeId = match[1];
    if (!['flowchart', 'TD', 'LR', 'TB', 'BT', 'RL'].includes(nodeId)) {
      references.add(nodeId);
    }
  }

  // Match style references: style nodeId
  const stylePattern = /style\s+([a-zA-Z0-9_-]+)/g;
  while ((match = stylePattern.exec(diagram)) !== null) {
    references.add(match[1]);
  }

  return references;
}

/**
 * Validate a single Mermaid diagram
 */
function validateDiagram(diagram, programId, programName, fileName) {
  results.total++;
  const errors = [];

  // Extract node definitions and references
  const definedNodes = extractNodeIds(diagram);
  const referencedNodes = extractNodeReferences(diagram);

  // Check for undefined node references
  const undefinedNodes = [...referencedNodes].filter(ref => !definedNodes.has(ref));

  if (undefinedNodes.length > 0) {
    errors.push(`Undefined nodes referenced: ${undefinedNodes.join(', ')}`);
  }

  // Check for basic syntax requirements
  if (!diagram.trim().startsWith('flowchart')) {
    errors.push('Diagram must start with "flowchart"');
  }

  // Check for at least one connection
  if (!diagram.includes('-->') && !diagram.includes('---')) {
    errors.push('Diagram must have at least one connection (-->) or (---)');
  }

  if (errors.length > 0) {
    results.failed++;
    const errorInfo = {
      file: fileName,
      programId,
      programName,
      errors
    };
    results.errors.push(errorInfo);
    return { success: false, error: errorInfo };
  }

  results.passed++;
  return { success: true };
}

/**
 * Process a single flowchart file
 */
function processFile(filePath) {
  const fileName = path.basename(filePath);
  console.log(`\nProcessing: ${fileName}`);

  const diagrams = extractMermaidDiagrams(filePath);

  if (diagrams.length === 0) {
    console.log('  ⚠️  No diagrams found');
    return;
  }

  console.log(`  Found ${diagrams.length} diagram(s)`);

  for (const { diagram, programId, programName, index } of diagrams) {
    const result = validateDiagram(diagram, programId, programName, fileName);

    if (result.success) {
      console.log(`  ✅ ${programId} - ${programName}`);
    } else {
      console.log(`  ❌ ${programId} - ${programName}`);
      result.error.errors.forEach(err => {
        console.log(`     - ${err}`);
      });
    }
  }
}

/**
 * Main function
 */
function main() {
  console.log('🔍 Validating Mermaid diagrams...\n');

  const files = fs.readdirSync(FLOWCHART_DIR)
    .filter(f => f.endsWith('.ts') && !f.endsWith('.test.ts') && f !== 'index.ts')
    .sort()
    .map(f => path.join(FLOWCHART_DIR, f));

  for (const file of files) {
    processFile(file);
  }

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 VALIDATION SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total diagrams:  ${results.total}`);
  console.log(`✅ Passed:        ${results.passed}`);
  console.log(`❌ Failed:        ${results.failed}`);
  console.log('='.repeat(60));

  if (results.errors.length > 0) {
    console.log('\n❌ ERRORS FOUND:\n');
    results.errors.forEach((error, index) => {
      console.log(`${index + 1}. ${error.file} - ${error.programId}`);
      console.log(`   ${error.programName}`);
      console.log(`   Errors:`);
      error.errors.forEach(err => {
        console.log(`     - ${err}`);
      });
      console.log('');
    });

    process.exit(1);
  } else {
    console.log('\n✅ All diagrams are valid!\n');
    process.exit(0);
  }
}

try {
  main();
} catch (error) {
  console.error('Fatal error:', error);
  process.exit(1);
}

