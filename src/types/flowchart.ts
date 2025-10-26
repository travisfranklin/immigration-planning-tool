/**
 * Flowchart Type Definitions
 * Defines the structure for immigration process flowcharts
 */

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

export interface FlowchartDefinition {
  programId: string;
  countryCode: string;
  programName: string;
  mermaidDiagram: string; // Mermaid.js syntax
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

