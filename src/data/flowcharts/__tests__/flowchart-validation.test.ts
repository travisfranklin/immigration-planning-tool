/**
 * Flowchart Validation Tests
 *
 * Ensures all flowchart definitions have:
 * - Matching node IDs and step IDs
 * - No self-referencing loops (A --> A)
 * - No node redefinitions (A[Label1] ... A[Label2])
 * - Valid graph topology
 */

import { describe, it } from 'vitest';
import type { FlowchartDefinition } from '../../../types/flowchart';
import { ALL_FLOWCHARTS } from '../index';

// Extract node IDs from Mermaid diagram
function extractNodeIds(mermaidDiagram: string): string[] {
  const nodeIds: string[] = [];

  // Match process nodes: nodeId[Label] or nodeId([Label])
  // Exclude decision nodes: nodeId{Label} - these are conditional branches and don't need steps
  const processNodePattern = /\b([a-zA-Z][\w-]*)\s*[[(]/g;
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

/**
 * Detect self-referencing loops where a node points to itself (A --> A)
 * These create invalid circular references in the diagram
 */
function detectSelfLoops(mermaidDiagram: string): string[] {
  const selfLoops: string[] = [];

  // Split into lines and check each edge
  const lines = mermaidDiagram.split('\n');

  for (const line of lines) {
    // Match edge patterns: A --> B, A -->|label| B, A ---> B
    const edgePattern = /\b([\w-]+)\s*--+>(?:\|[^|]*\|)?\s*([\w-]+)/g;
    let match;

    while ((match = edgePattern.exec(line)) !== null) {
      const [, source, target] = match;
      if (source === target) {
        selfLoops.push(source);
      }
    }
  }

  return [...new Set(selfLoops)];
}

/**
 * Detect node redefinitions where the same node ID has different labels
 * e.g., A[Label1] and later A[Different Label]
 */
function detectNodeRedefinitions(mermaidDiagram: string): Array<{ nodeId: string; labels: string[] }> {
  const nodeLabels = new Map<string, Set<string>>();

  // Match node definitions: nodeId[Label] or nodeId([Label])
  // Captures: nodeId and the label content
  const nodePattern = /\b([\w-]+)\s*\[+([^\]]+)\]+/g;
  let match;

  while ((match = nodePattern.exec(mermaidDiagram)) !== null) {
    const [, nodeId, label] = match;
    // Skip special nodes
    if (['Start', 'End', 'Success', 'End1', 'End2', 'End3', 'End4'].includes(nodeId)) {
      continue;
    }

    if (!nodeLabels.has(nodeId)) {
      nodeLabels.set(nodeId, new Set());
    }
    nodeLabels.get(nodeId)!.add(label.trim());
  }

  // Find nodes with multiple different labels
  const redefinitions: Array<{ nodeId: string; labels: string[] }> = [];

  for (const [nodeId, labels] of nodeLabels) {
    if (labels.size > 1) {
      redefinitions.push({ nodeId, labels: [...labels] });
    }
  }

  return redefinitions;
}

describe('Flowchart Validation', () => {
  // Get all flowcharts from all countries
  const flowchartEntries = Object.entries(ALL_FLOWCHARTS).flatMap(([countryCode, programs]) =>
    Object.entries(programs).map(([programId, flowchart]) => ({
      countryCode,
      programId,
      flowchart: flowchart as FlowchartDefinition
    }))
  );

  describe('Node-Step ID Matching', () => {
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

  describe('Diagram Structure Validation', () => {
    for (const { countryCode, programId, flowchart } of flowchartEntries) {
      it(`${countryCode}/${programId} should have no self-referencing loops`, () => {
        const selfLoops = detectSelfLoops(flowchart.mermaidDiagram);

        if (selfLoops.length > 0) {
          throw new Error(
            `\n\nSelf-referencing loops found in ${flowchart.programName} (${programId}):\n\n` +
            `Nodes with self-loops:\n${selfLoops.map(node => `  - "${node}" --> "${node}"`).join('\n')}\n\n` +
            `💡 Tip: A node cannot point to itself. Use a decision node or intermediate step for loops.\n`
          );
        }
      });

      it(`${countryCode}/${programId} should have no node redefinitions`, () => {
        const redefinitions = detectNodeRedefinitions(flowchart.mermaidDiagram);

        if (redefinitions.length > 0) {
          throw new Error(
            `\n\nNode redefinitions found in ${flowchart.programName} (${programId}):\n\n` +
            `Nodes with multiple labels:\n${redefinitions
              .map(({ nodeId, labels }) => `  - "${nodeId}" has labels: ${labels.map(l => `"${l}"`).join(', ')}`)
              .join('\n')}\n\n` +
            `💡 Tip: Each node should be defined with a label only once. Subsequent references should use the node ID without brackets.\n`
          );
        }
      });
    }
  });
});
