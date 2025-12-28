/**
 * Flowchart Type Definitions
 * Defines the structure for immigration process flowcharts
 */

import type { Node, Edge } from '@xyflow/react';

export interface FlowchartStep {
  id: string;
  title: string;
  description: string;
  estimatedDuration: string; // e.g., "2-4 weeks"
  documents: string[];
  notes?: string[];
  isConditional?: boolean;
  condition?: string;
}

/**
 * React Flow node data structure
 */
export interface FlowchartNodeData extends Record<string, unknown> {
  label: string;
  stepId: string; // Links to FlowchartStep
  status?: 'pending' | 'in-progress' | 'completed';
  estimatedDuration?: string;
  nodeType?: 'process' | 'decision' | 'start' | 'end' | 'document';
}

/**
 * React Flow node type
 */
export type FlowchartNode = Node<FlowchartNodeData, string | undefined>;

/**
 * React Flow data structure for flowcharts
 */
export interface ReactFlowData {
  nodes: FlowchartNode[];
  edges: Edge[];
}

export interface FlowchartDefinition {
  programId: string;
  countryCode: string;
  programName: string;
  mermaidDiagram: string; // Mermaid.js syntax (legacy, will be removed in Phase 5)
  reactFlowData?: ReactFlowData; // React Flow format (new, optional during migration)
  steps: FlowchartStep[];
  totalEstimatedDuration: string; // e.g., "6-12 months"
  complexity: 'low' | 'medium' | 'high';
  successRate?: string; // e.g., "85%"
}

export interface FlowchartCollection {
  [countryCode: string]: {
    [programId: string]: FlowchartDefinition;
  };
}

