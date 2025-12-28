/**
 * Flowchart Conversion Utility
 * Converts Mermaid flowcharts to React Flow format with layout
 */

import type { FlowchartDefinition, ReactFlowData } from '../../types/flowchart';
import { parseMermaidToReactFlow } from './mermaidToReactFlow';
import { applyDagreLayout } from './layoutEngine';

/**
 * Convert a flowchart definition from Mermaid to React Flow format
 */
export function convertMermaidFlowchartToReactFlow(
  flowchart: FlowchartDefinition
): ReactFlowData {
  // Parse Mermaid syntax to React Flow format
  const parsedData = parseMermaidToReactFlow(flowchart.mermaidDiagram);

  // Apply layout algorithm
  const layoutedData = applyDagreLayout(parsedData);

  return layoutedData;
}

/**
 * Get React Flow data from flowchart definition
 * Uses reactFlowData if available, otherwise converts from Mermaid
 */
export function getReactFlowData(flowchart: FlowchartDefinition): ReactFlowData {
  if (flowchart.reactFlowData) {
    return flowchart.reactFlowData;
  }

  // Fallback to converting from Mermaid
  return convertMermaidFlowchartToReactFlow(flowchart);
}

