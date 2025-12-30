#!/usr/bin/env tsx
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, no-useless-escape */
/**
 * Add Missing Steps Script
 *
 * This script automatically adds missing step definitions for nodes that don't have matching steps.
 * It uses intelligent templates based on node IDs and labels.
 *
 * Run with: npx tsx scripts/add-missing-steps.ts
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

// Step templates for common node types
const stepTemplates: Record<string, (label: string, programName: string) => any> = {
  'processing': (label) => ({
    id: 'processing',
    title: 'Application Processing',
    description: 'Wait for authorities to process your application',
    estimatedDuration: label.includes('weeks') ? label.match(/\d+\s*weeks?/)?.[0] || '4-8 weeks' : '4-8 weeks',
    documents: [],
    notes: ['Processing times may vary', 'You may be contacted for additional information'],
  }),
  
  'submit-application': (label) => ({
    id: 'submit-application',
    title: 'Submit Application',
    description: 'Submit your completed application to the relevant authorities',
    estimatedDuration: '1 day',
    documents: ['Completed application form', 'All supporting documents', 'Application fee payment'],
    notes: ['Ensure all documents are complete', 'Keep copies of everything submitted'],
  }),
  
  'gather-documents': (label) => ({
    id: 'gather-documents',
    title: 'Gather Required Documents',
    description: 'Collect all necessary documentation for your application',
    estimatedDuration: '2-4 weeks',
    documents: ['Valid passport', 'Passport photographs', 'Proof of accommodation', 'Health insurance', 'Criminal background check'],
    notes: ['All documents may need to be translated', 'Some documents may require apostille'],
  }),
  
  'receive-visa': (label) => ({
    id: 'receive-visa',
    title: label || 'Receive Visa',
    description: 'Collect your approved visa or residence permit',
    estimatedDuration: '1 week',
    documents: ['Passport', 'Approval notification'],
    notes: ['Check validity dates', 'Note any conditions or restrictions'],
  }),
  
  'receive-permit': (label) => ({
    id: 'receive-permit',
    title: label || 'Receive Permit',
    description: 'Collect your approved residence permit',
    estimatedDuration: '1 week',
    documents: ['Passport', 'Approval notification'],
    notes: ['Check validity dates', 'Note any conditions or restrictions'],
  }),
  
  'receive-card': (label) => ({
    id: 'receive-card',
    title: label || 'Receive Card',
    description: 'Collect your approved residence card',
    estimatedDuration: '1 week',
    documents: ['Passport', 'Approval notification'],
    notes: ['Check validity dates', 'Keep card with you at all times'],
  }),
  
  'consider-appeal': (label) => ({
    id: 'consider-appeal',
    title: 'Consider Appeal',
    description: 'If rejected, consider appealing the decision',
    estimatedDuration: 'Varies',
    documents: ['Rejection letter', 'Additional supporting documents'],
    notes: ['Consult with immigration lawyer', 'Check appeal deadlines', 'Consider reapplying with stronger application'],
  }),
  
  'travel': (label) => ({
    id: 'travel',
    title: 'Travel and Arrival',
    description: 'Book travel and relocate to your destination',
    estimatedDuration: '1-2 weeks',
    documents: ['Valid passport', 'Visa/permit', 'Proof of accommodation'],
    notes: ['Arrange accommodation in advance', 'Plan for initial expenses'],
  }),
  
  'arrival': (label) => ({
    id: 'arrival',
    title: 'Arrival and Registration',
    description: 'Complete arrival formalities and register your residence',
    estimatedDuration: '1-2 weeks',
    documents: ['Passport', 'Visa/permit', 'Proof of address'],
    notes: ['Register within required timeframe', 'Keep all documentation'],
  }),
  
  'registration': (label) => ({
    id: 'registration',
    title: 'Residence Registration',
    description: 'Register your residence with local authorities',
    estimatedDuration: '1 week',
    documents: ['Passport', 'Residence permit', 'Proof of address', 'Rental contract'],
    notes: ['Must register within specified timeframe', 'Bring all original documents'],
  }),
  
  'renewal': (label) => ({
    id: 'renewal',
    title: 'Permit Renewal',
    description: 'Renew your residence permit before expiration',
    estimatedDuration: '2-3 months',
    documents: ['Current permit', 'Proof of continued eligibility', 'Updated documents'],
    notes: ['Apply before current permit expires', 'Requirements may have changed'],
  }),
};

// Extract node IDs from Mermaid diagram
function extractNodeIds(mermaidDiagram: string): string[] {
  const nodeIds: string[] = [];
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
  const programStartPattern = new RegExp(`['"]${programKey}['"]:\\s*\\{[\\s\\S]*?steps:\\s*\\[`, 's');
  const startMatch = fileContent.match(programStartPattern);
  
  if (!startMatch) return stepIds;
  
  const startIndex = startMatch.index! + startMatch[0].length;
  let bracketCount = 1;
  let endIndex = startIndex;
  
  while (bracketCount > 0 && endIndex < fileContent.length) {
    if (fileContent[endIndex] === '[') bracketCount++;
    if (fileContent[endIndex] === ']') bracketCount--;
    endIndex++;
  }
  
  const stepsBlock = fileContent.substring(startIndex, endIndex - 1);
  const stepPattern = /id:\s*['"]([^'"]+)['"]/g;
  let match;
  
  while ((match = stepPattern.exec(stepsBlock)) !== null) {
    stepIds.push(match[1]);
  }
  
  return stepIds;
}

console.log('🔧 Adding missing step definitions...\n');
console.log('This script will add step definitions for common missing nodes.');
console.log('Review the changes before committing.\n');

