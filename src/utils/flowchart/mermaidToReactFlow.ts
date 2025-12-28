/**
 * Mermaid to React Flow Converter
 * Parses Mermaid flowchart syntax and converts to React Flow format
 */

import type { FlowchartNode, ReactFlowData } from '../../types/flowchart';
import type { Edge } from '@xyflow/react';

/**
 * Parse Mermaid diagram syntax and convert to React Flow format
 */
export function parseMermaidToReactFlow(mermaidDiagram: string): ReactFlowData {
  const nodes: FlowchartNode[] = [];
  const edges: Edge[] = [];
  const nodeMap = new Map<string, { label: string; type: string }>();

  // Split into lines and filter out empty lines and flowchart declaration
  const lines = mermaidDiagram
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('flowchart') && !line.startsWith('graph'));

  // First pass: Extract all nodes
  lines.forEach((line) => {
    // Match node definitions with various bracket types
    // Examples: Start([Start Process]), Step1["Gather Documents"], Decision{Eligible?}
    const nodePatterns = [
      /(\w+)\(\[(.+?)\]\)/, // ([...]) - Start/End nodes
      /(\w+)\[(.+?)\]/, // [...] - Regular nodes
      /(\w+)\{(.+?)\}/, // {...} - Decision nodes
      /(\w+)\("(.+?)"\)/, // ("...") - Quoted nodes
    ];

    for (const pattern of nodePatterns) {
      const match = line.match(pattern);
      if (match) {
        const [, id, label] = match;
        const type = getNodeType(line, label);
        nodeMap.set(id, { label: label.replace(/["[\](){}]/g, ''), type });
        break;
      }
    }
  });

  // Second pass: Extract edges
  lines.forEach((line) => {
    // Match edge definitions: A --> B, A -->|Yes| B, A --|No|--> B
    const edgePatterns = [
      /(\w+)\s*-->\s*\|(.+?)\|\s*(\w+)/, // A -->|Label| B
      /(\w+)\s*--\|(.+?)\|-->\s*(\w+)/, // A --|Label|--> B
      /(\w+)\s*-->\s*(\w+)/, // A --> B
    ];

    for (const pattern of edgePatterns) {
      const match = line.match(pattern);
      if (match) {
        const hasLabel = match.length === 4;
        const source = match[1];
        const label = hasLabel ? match[2] : undefined;
        const target = hasLabel ? match[3] : match[2];

        if (nodeMap.has(source) && nodeMap.has(target)) {
          edges.push({
            id: `${source}-${target}`,
            source,
            target,
            type: 'smoothstep',
            label,
            style: { stroke: '#1F2937', strokeWidth: 2 },
            labelStyle: { fill: '#1F2937', fontWeight: 500 },
          });
        }
        break;
      }
    }
  });

  // Create nodes from nodeMap
  nodeMap.forEach((nodeData, id) => {
    nodes.push({
      id,
      type: nodeData.type,
      position: { x: 0, y: 0 }, // Will be calculated by layout engine
      data: {
        label: nodeData.label,
        stepId: id,
        nodeType: nodeData.type as 'process' | 'decision' | 'start' | 'end' | 'document',
      },
    });
  });

  return { nodes, edges };
}

/**
 * Determine node type from Mermaid syntax
 */
function getNodeType(line: string, label: string): string {
  // Start/End nodes use ([...])
  if (line.includes('([') && line.includes('])')) {
    if (label.toLowerCase().includes('start')) return 'start';
    if (label.toLowerCase().includes('end') || label.toLowerCase().includes('complete')) return 'end';
    return 'start'; // Default to start for terminal nodes
  }

  // Decision nodes use {...}
  if (line.includes('{') && line.includes('}')) {
    return 'decision';
  }

  // Document nodes (check label content)
  if (
    label.toLowerCase().includes('document') ||
    label.toLowerCase().includes('gather') ||
    label.toLowerCase().includes('collect')
  ) {
    return 'document';
  }

  // Default to process node
  return 'process';
}

