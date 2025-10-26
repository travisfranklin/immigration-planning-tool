/**
 * Comprehensive Flowchart Data Validation Tests
 * Tests all 49 flowcharts across 27 EU countries
 */

import { describe, it, expect } from 'vitest';
import type { FlowchartDefinition } from '../../types/flowchart';
import { ALL_VISA_PROGRAMS } from '../visaPrograms';

// Import all flowchart files
import { germanyFlowcharts } from './germany';
import { netherlandsFlowcharts } from './netherlands';
import { franceFlowcharts } from './france';
import { spainFlowcharts } from './spain';
import { italyFlowcharts } from './italy';
import { austriaFlowcharts } from './austria';
import { belgiumFlowcharts } from './belgium';
import { luxembourgFlowcharts } from './luxembourg';
import { irelandFlowcharts } from './ireland';
import { swedenFlowcharts } from './sweden';
import { denmarkFlowcharts } from './denmark';
import { finlandFlowcharts } from './finland';
import { portugalFlowcharts } from './portugal';
import { greeceFlowcharts } from './greece';
import { cyprusFlowcharts } from './cyprus';
import { maltaFlowcharts } from './malta';
import { polandFlowcharts } from './poland';
import { czechFlowcharts } from './czech-republic';
import { hungaryFlowcharts } from './hungary';
import { romaniaFlowcharts } from './romania';
import { bulgariaFlowcharts } from './bulgaria';
import { slovakiaFlowcharts } from './slovakia';
import { sloveniaFlowcharts } from './slovenia';
import { croatiaFlowcharts } from './croatia';
import { estoniaFlowcharts } from './estonia';
import { latviaFlowcharts } from './latvia';
import { lithuaniaFlowcharts } from './lithuania';

// Aggregate all flowcharts
const ALL_FLOWCHARTS: Record<string, Record<string, FlowchartDefinition>> = {
 DE: germanyFlowcharts,
 NL: netherlandsFlowcharts,
 FR: franceFlowcharts,
 ES: spainFlowcharts,
 IT: italyFlowcharts,
 AT: austriaFlowcharts,
 BE: belgiumFlowcharts,
 LU: luxembourgFlowcharts,
 IE: irelandFlowcharts,
 SE: swedenFlowcharts,
 DK: denmarkFlowcharts,
 FI: finlandFlowcharts,
 PT: portugalFlowcharts,
 GR: greeceFlowcharts,
 CY: cyprusFlowcharts,
 MT: maltaFlowcharts,
 PL: polandFlowcharts,
 CZ: czechFlowcharts,
 HU: hungaryFlowcharts,
 RO: romaniaFlowcharts,
 BG: bulgariaFlowcharts,
 SK: slovakiaFlowcharts,
 SI: sloveniaFlowcharts,
 HR: croatiaFlowcharts,
 EE: estoniaFlowcharts,
 LV: latviaFlowcharts,
 LT: lithuaniaFlowcharts,
};

// Helper to get all flowcharts as a flat array
function getAllFlowchartsArray(): Array<{ countryCode: string; flowchart: FlowchartDefinition }> {
 const result: Array<{ countryCode: string; flowchart: FlowchartDefinition }> = [];
 
 Object.entries(ALL_FLOWCHARTS).forEach(([countryCode, flowcharts]) => {
 Object.values(flowcharts).forEach((flowchart) => {
 result.push({ countryCode, flowchart });
 });
 });
 
 return result;
}

// Helper to validate Mermaid diagram syntax (basic validation)
function hasValidMermaidSyntax(diagram: string): boolean {
 // Must start with flowchart keyword
 if (!diagram.trim().startsWith('flowchart')) {
 return false;
 }
 
 // Must have at least one node definition
 if (!diagram.includes('-->') && !diagram.includes('---')) {
 return false;
 }
 
 return true;
}

describe('Flowchart Data Validation', () => {
 const allFlowcharts = getAllFlowchartsArray();
 const allProgramIds = new Set(ALL_VISA_PROGRAMS.map(p => p.id));

 describe('Character Encoding', () => {
 it('should not contain smart quotes or other problematic characters', () => {
 const problematicChars = {
 '\u2019': 'right single quote',
 '\u2018': 'left single quote',
 '\u201C': 'left double quote',
 '\u201D': 'right double quote',
 '\u2013': 'en dash',
 '\u2014': 'em dash',
 };

 const errors: string[] = [];

 allFlowcharts.forEach(({ countryCode, flowchart }) => {
 // Check mermaid diagram
 for (const [char, name] of Object.entries(problematicChars)) {
 if (flowchart.mermaidDiagram.includes(char)) {
 errors.push(`${countryCode}/${flowchart.programId}: Mermaid diagram contains ${name} (${char})`);
 }
 }

 // Check program name
 for (const [char, name] of Object.entries(problematicChars)) {
 if (flowchart.programName.includes(char)) {
 errors.push(`${countryCode}/${flowchart.programId}: Program name contains ${name} (${char})`);
 }
 }

 // Check steps
 flowchart.steps.forEach((step, index) => {
 for (const [char, name] of Object.entries(problematicChars)) {
 if (step.title.includes(char)) {
 errors.push(`${countryCode}/${flowchart.programId}/step${index}: Title contains ${name} (${char})`);
 }
 if (step.description.includes(char)) {
 errors.push(`${countryCode}/${flowchart.programId}/step${index}: Description contains ${name} (${char})`);
 }
 step.documents?.forEach((doc, docIndex) => {
 if (doc.includes(char)) {
 errors.push(`${countryCode}/${flowchart.programId}/step${index}/doc${docIndex}: Document contains ${name} (${char})`);
 }
 });
 step.notes?.forEach((note, noteIndex) => {
 if (note.includes(char)) {
 errors.push(`${countryCode}/${flowchart.programId}/step${index}/note${noteIndex}: Note contains ${name} (${char})`);
 }
 });
 }
 });
 });

 if (errors.length > 0) {
 console.error('\n❌ Problematic characters found:');
 errors.forEach(error => console.error(` - ${error}`));
 console.error('\n');
 }

 expect(errors).toEqual([]);
 });
 });

 describe('Coverage', () => {
 it('should have exactly 27 countries with flowcharts', () => {
 expect(Object.keys(ALL_FLOWCHARTS)).toHaveLength(27);
 });

 it('should have at least 49 flowcharts total', () => {
 expect(allFlowcharts.length).toBeGreaterThanOrEqual(49);
 });

 it('should have flowcharts for all expected countries', () => {
 const expectedCountries = [
 'DE', 'NL', 'FR', 'ES', 'IT', // MVP
 'AT', 'BE', 'LU', 'IE', // Phase 8
 'SE', 'DK', 'FI', // Phase 9
 'PT', 'GR', 'CY', 'MT', // Phase 10
 'PL', 'CZ', 'HU', 'RO', 'BG', // Phase 11
 'SK', 'SI', 'HR', 'EE', 'LV', 'LT', // Phase 12
 ];
 
 expectedCountries.forEach(countryCode => {
 expect(ALL_FLOWCHARTS[countryCode]).toBeDefined();
 expect(Object.keys(ALL_FLOWCHARTS[countryCode]).length).toBeGreaterThan(0);
 });
 });
 });

 describe('Required Fields', () => {
 allFlowcharts.forEach(({ countryCode, flowchart }) => {
 describe(`${countryCode} - ${flowchart.programName}`, () => {
 it('should have programId', () => {
 expect(flowchart.programId).toBeDefined();
 expect(typeof flowchart.programId).toBe('string');
 expect(flowchart.programId.length).toBeGreaterThan(0);
 });

 it('should have countryCode', () => {
 expect(flowchart.countryCode).toBeDefined();
 expect(typeof flowchart.countryCode).toBe('string');
 expect(flowchart.countryCode).toBe(countryCode);
 });

 it('should have programName', () => {
 expect(flowchart.programName).toBeDefined();
 expect(typeof flowchart.programName).toBe('string');
 expect(flowchart.programName.length).toBeGreaterThan(0);
 });

 it('should have totalEstimatedDuration', () => {
 expect(flowchart.totalEstimatedDuration).toBeDefined();
 expect(typeof flowchart.totalEstimatedDuration).toBe('string');
 expect(flowchart.totalEstimatedDuration.length).toBeGreaterThan(0);
 });

 it('should have valid complexity level', () => {
 expect(flowchart.complexity).toBeDefined();
 expect(['low', 'medium', 'high']).toContain(flowchart.complexity);
 });

 it('should have mermaidDiagram', () => {
 expect(flowchart.mermaidDiagram).toBeDefined();
 expect(typeof flowchart.mermaidDiagram).toBe('string');
 expect(flowchart.mermaidDiagram.length).toBeGreaterThan(0);
 });

 it('should have steps array', () => {
 expect(flowchart.steps).toBeDefined();
 expect(Array.isArray(flowchart.steps)).toBe(true);
 expect(flowchart.steps.length).toBeGreaterThan(0);
 });

 it('should have valid successRate format if provided', () => {
 if (flowchart.successRate) {
 expect(typeof flowchart.successRate).toBe('string');
 // Should be in format like "85%" or "70-90%"
 expect(flowchart.successRate).toMatch(/^\d+(-\d+)?%$/);
 }
 });
 });
 });
 });

 describe('Program ID Validation', () => {
 it('should have no duplicate programIds across all flowcharts', () => {
 const programIds = allFlowcharts.map(({ flowchart }) => flowchart.programId);
 const uniqueIds = new Set(programIds);
 
 expect(programIds.length).toBe(uniqueIds.size);
 });

 allFlowcharts.forEach(({ countryCode, flowchart }) => {
 it(`${countryCode} - ${flowchart.programName} should have programId matching a visa program`, () => {
 expect(allProgramIds.has(flowchart.programId)).toBe(true);
 });
 });
 });

 describe('Mermaid Diagram Validation', () => {
 allFlowcharts.forEach(({ countryCode, flowchart }) => {
 it(`${countryCode} - ${flowchart.programName} should have valid Mermaid syntax`, () => {
 expect(hasValidMermaidSyntax(flowchart.mermaidDiagram)).toBe(true);
 });
 });
 });

 describe('Steps Validation', () => {
 allFlowcharts.forEach(({ countryCode, flowchart }) => {
 describe(`${countryCode} - ${flowchart.programName} steps`, () => {
 flowchart.steps.forEach((step, index) => {
 it(`step ${index + 1} should have required fields`, () => {
 expect(step.id).toBeDefined();
 expect(typeof step.id).toBe('string');
 expect(step.id.length).toBeGreaterThan(0);

 expect(step.title).toBeDefined();
 expect(typeof step.title).toBe('string');
 expect(step.title.length).toBeGreaterThan(0);

 expect(step.description).toBeDefined();
 expect(typeof step.description).toBe('string');
 expect(step.description.length).toBeGreaterThan(0);

 expect(step.estimatedDuration).toBeDefined();
 expect(typeof step.estimatedDuration).toBe('string');
 expect(step.estimatedDuration.length).toBeGreaterThan(0);

 expect(step.documents).toBeDefined();
 expect(Array.isArray(step.documents)).toBe(true);
 });

 it(`step ${index + 1} should have unique id within flowchart`, () => {
 const stepIds = flowchart.steps.map(s => s.id);
 const duplicates = stepIds.filter((id, idx) => stepIds.indexOf(id) !== idx);
 expect(duplicates).toHaveLength(0);
 });

 it(`step ${index + 1} notes should be array if provided`, () => {
 if (step.notes !== undefined) {
 expect(Array.isArray(step.notes)).toBe(true);
 }
 });
 });
 });
 });
 });

 describe('Country Code Consistency', () => {
 Object.entries(ALL_FLOWCHARTS).forEach(([countryCode, flowcharts]) => {
 Object.values(flowcharts).forEach((flowchart) => {
 it(`${countryCode} - ${flowchart.programName} should have matching countryCode`, () => {
 expect(flowchart.countryCode).toBe(countryCode);
 });
 });
 });
 });

 describe('Data Quality', () => {
 allFlowcharts.forEach(({ countryCode, flowchart }) => {
 it(`${countryCode} - ${flowchart.programName} should have at least 3 steps`, () => {
 expect(flowchart.steps.length).toBeGreaterThanOrEqual(3);
 });

 it(`${countryCode} - ${flowchart.programName} should have reasonable step count (<=15)`, () => {
 expect(flowchart.steps.length).toBeLessThanOrEqual(15);
 });
 });
 });

 describe('Node ID Matching for Interactive Flowcharts', () => {
 /**
  * This test suite ensures that mermaid diagram node IDs can be properly
  * extracted and matched to step IDs by the FlowchartViewer component.
  *
  * The FlowchartViewer uses this regex to extract step IDs from node IDs:
  * const match = nodeId.match(/^flowchart-(.+?)-\d+$/);
  *
  * This means:
  * - Mermaid node IDs must be in kebab-case (e.g., "job-offer", "gather-documents")
  * - They must match the step.id values exactly
  * - The FlowchartViewer will convert them to "flowchart-{stepId}-{number}" format
  */

 allFlowcharts.forEach(({ countryCode, flowchart }) => {
 describe(`${countryCode} - ${flowchart.programName} node ID matching`, () => {
 // Extract all node IDs from mermaid diagram
 function extractMermaidNodeIds(diagram: string): string[] {
 const nodeIds: string[] = [];
 // Match patterns like: "node-id[" or "node-id{" or "node-id(" or "node-id-->"
 const nodePattern = /\b([a-z0-9\-]+)\s*[\[\{\(]/g;
 let match;
 while ((match = nodePattern.exec(diagram)) !== null) {
 const nodeId = match[1];
 // Filter out common keywords and special nodes
 if (!['flowchart', 'td', 'lr', 'start', 'end', 'style'].includes(nodeId.toLowerCase())) {
 nodeIds.push(nodeId);
 }
 }
 return [...new Set(nodeIds)]; // Remove duplicates
 }

 const mermaidNodeIds = extractMermaidNodeIds(flowchart.mermaidDiagram);
 const stepIds = flowchart.steps.map(s => s.id);

 it('should have mermaid nodes that match step IDs', () => {
 const unmatchedNodes = mermaidNodeIds.filter(nodeId => !stepIds.includes(nodeId));

 if (unmatchedNodes.length > 0) {
 console.warn(
 `\n⚠️  ${countryCode} - ${flowchart.programName}:\n` +
 `   Unmatched mermaid nodes: ${unmatchedNodes.join(', ')}\n` +
 `   Step IDs: ${stepIds.join(', ')}\n`
 );
 }

 // This test documents which flowcharts need updating
 // It will fail for all countries except Germany until they're updated
 expect(unmatchedNodes.length).toBe(0);
 });

 it('should have all step IDs referenced in mermaid diagram', () => {
 const unreferencedSteps = stepIds.filter(stepId => !mermaidNodeIds.includes(stepId));

 if (unreferencedSteps.length > 0) {
 console.warn(
 `\n⚠️  ${countryCode} - ${flowchart.programName}:\n` +
 `   Unreferenced steps: ${unreferencedSteps.join(', ')}\n`
 );
 }

 expect(unreferencedSteps.length).toBe(0);
 });

 it('should use kebab-case for all node IDs', () => {
 const invalidNodes = mermaidNodeIds.filter(nodeId => !/^[a-z0-9\-]+$/.test(nodeId));

 if (invalidNodes.length > 0) {
 console.warn(
 `\n⚠️  ${countryCode} - ${flowchart.programName}:\n` +
 `   Non-kebab-case nodes: ${invalidNodes.join(', ')}\n` +
 `   Expected format: lowercase-with-hyphens\n`
 );
 }

 expect(invalidNodes.length).toBe(0);
 });
 });
 });
 });
});

