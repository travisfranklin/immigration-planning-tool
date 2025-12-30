/**
 * Flowchart Validation Tests
 *
 * Ensures all flowchart definitions have matching node IDs and step IDs
 */

import { describe, it, expect } from 'vitest';
import type { FlowchartDefinition } from '../../../types/flowchart';
import { allFlowcharts } from '../index';

// Extract node IDs from Mermaid diagram
function extractNodeIds(mermaidDiagram: string): string[] {
  const nodeIds: string[] = [];

  // Match process nodes: nodeId[Label] or nodeId([Label])
  // Exclude decision nodes: nodeId{Label} - these are conditional branches and don't need steps
  const processNodePattern = /\b([a-zA-Z][\w-]*)\s*[\[\(]/g;
  let match;

  while ((match = processNodePattern.exec(mermaidDiagram)) !== null) {
    const nodeId = match[1];
    // Skip common keywords and special nodes
    if (!['Start', 'End', 'Success', 'End1', 'End2', 'End3', 'End4'].includes(nodeId)) {
      nodeIds.push(nodeId);
    }
  }

  return [...new Set(nodeIds)]; // Remove duplicates
}

describe('Flowchart Validation', () => {
  // Get all flowcharts from all countries
  const flowchartEntries = Object.entries(allFlowcharts).flatMap(([countryCode, programs]) =>
    Object.entries(programs).map(([programId, flowchart]) => ({
      countryCode,
      programId,
      flowchart: flowchart as FlowchartDefinition
    }))
  );

  for (const { countryCode, programId, flowchart } of flowchartEntries) {
    it(`${countryCode}/${programId} should have matching node IDs and step IDs`, () => {
      const nodeIds = extractNodeIds(flowchart.mermaidDiagram);
      const stepIds = flowchart.steps.map(step => step.id);

      // Check each node has a matching step
      const missingSteps: string[] = [];
      const caseMismatches: Array<{ nodeId: string; expectedStepId: string }> = [];

      for (const nodeId of nodeIds) {
        if (!stepIds.includes(nodeId)) {
          // Check if it's a case mismatch (e.g., JobOffer vs job-offer)
          const kebabCase = nodeId.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');

          if (stepIds.includes(kebabCase)) {
            caseMismatches.push({ nodeId, expectedStepId: kebabCase });
          } else {
            missingSteps.push(nodeId);
          }
        }
      }

      // Build error message
      const errors: string[] = [];

      if (caseMismatches.length > 0) {
        errors.push(
          `Case mismatches found:\n${caseMismatches
            .map(({ nodeId, expectedStepId }) =>
              `  - Node "${nodeId}" should use kebab-case "${expectedStepId}" to match step ID`
            )
            .join('\n')}`
        );
      }

      if (missingSteps.length > 0) {
        errors.push(
          `Missing step definitions for nodes:\n${missingSteps
            .map(nodeId => `  - "${nodeId}"`)
            .join('\n')}`
        );
      }

      if (errors.length > 0) {
        throw new Error(
          `\n\nFlowchart validation failed for ${flowchart.programName} (${programId}):\n\n${errors.join('\n\n')}\n\n` +
          `💡 Tip: All node IDs in Mermaid diagrams should use kebab-case and have matching step definitions.\n`
        );
      }
    });
  }
});

