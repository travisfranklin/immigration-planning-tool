/**
 * Flowchart Layout Engine
 * Uses dagre to automatically layout flowchart nodes
 */

import dagre from 'dagre';
import type { FlowchartNode, ReactFlowData } from '../../types/flowchart';

/**
 * Apply dagre layout algorithm to position nodes
 */
export function applyDagreLayout(data: ReactFlowData): ReactFlowData {
  try {
    const { nodes, edges } = data;

    // Validate input
    if (!nodes || !Array.isArray(nodes) || nodes.length === 0) {
      console.warn('No nodes to layout, returning original data');
      return data;
    }

    if (!edges || !Array.isArray(edges)) {
      console.warn('No edges provided, using empty array');
      data.edges = [];
    }

    // Create a new directed graph
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));

  // Configure graph layout
  dagreGraph.setGraph({
    rankdir: 'TB', // Top to bottom
    align: 'UL', // Upper left alignment
    nodesep: 80, // Horizontal spacing between nodes
    ranksep: 100, // Vertical spacing between ranks
    marginx: 20,
    marginy: 20,
  });

  // Add nodes to dagre graph
  nodes.forEach((node) => {
    const width = getNodeWidth(node);
    const height = getNodeHeight(node);
    dagreGraph.setNode(node.id, { width, height });
  });

  // Add edges to dagre graph
  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  // Calculate layout
  dagre.layout(dagreGraph);

    // Apply calculated positions to nodes
    const layoutedNodes: FlowchartNode[] = nodes.map((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);

      // If dagre didn't calculate position, use original or default
      if (!nodeWithPosition) {
        console.warn(`No position calculated for node ${node.id}, using original position`);
        return node;
      }

      const width = getNodeWidth(node);
      const height = getNodeHeight(node);

      return {
        ...node,
        position: {
          x: nodeWithPosition.x - width / 2,
          y: nodeWithPosition.y - height / 2,
        },
      };
    });

    return {
      nodes: layoutedNodes,
      edges,
    };
  } catch (error) {
    console.error('Error in dagre layout:', error);
    // Return original data if layout fails
    return data;
  }
}

/**
 * Get node width based on type
 */
function getNodeWidth(node: FlowchartNode): number {
  switch (node.type) {
    case 'decision':
      return 128; // Diamond shape
    case 'start':
    case 'end':
      return 160; // Terminal nodes
    case 'document':
    case 'process':
    default:
      return 200; // Regular nodes
  }
}

/**
 * Get node height based on type
 */
function getNodeHeight(node: FlowchartNode): number {
  switch (node.type) {
    case 'decision':
      return 128; // Diamond shape
    case 'start':
    case 'end':
      return 60; // Terminal nodes
    case 'document':
    case 'process':
    default:
      return 80; // Regular nodes
  }
}

