/**
 * Centralized Mermaid.js Configuration
 * Defines global theme and styling for all flowcharts
 */

import type { MermaidConfig } from 'mermaid';

/**
 * Global Mermaid configuration with custom theme variables
 * This eliminates the need for repetitive style commands in individual diagrams
 */
export const mermaidConfig: MermaidConfig = {
  startOnLoad: true,
  theme: 'base', // Use 'base' theme to allow full customization
  securityLevel: 'loose',
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true,
    curve: 'basis',
  },
  themeVariables: {
    // Primary colors for different node types
    primaryColor: '#e1e5ff',        // Light blue for important nodes (permits, visas)
    primaryTextColor: '#1f2937',    // Dark gray text
    primaryBorderColor: '#6366f1',  // Indigo border
    
    // Secondary colors
    secondaryColor: '#f3f4f6',      // Light gray for regular steps
    secondaryTextColor: '#1f2937',  // Dark gray text
    secondaryBorderColor: '#9ca3af', // Gray border
    
    // Tertiary colors for decision nodes (diamonds)
    tertiaryColor: '#fff4cc',       // Flat yellow for decision points
    tertiaryTextColor: '#1f2937',   // Dark gray text
    tertiaryBorderColor: '#f59e0b', // Amber border
    
    // Success/Start nodes (rounded rectangles)
    successColor: '#e1f5e1',        // Light green
    successTextColor: '#1f2937',    // Dark gray text
    successBorderColor: '#10b981',  // Green border
    
    // Error/End nodes (rounded rectangles)
    errorColor: '#ffe1e1',          // Light red
    errorTextColor: '#1f2937',      // Dark gray text
    errorBorderColor: '#ef4444',    // Red border
    
    // Warning/Alternative end nodes
    warningColor: '#fff4e1',        // Light orange
    warningTextColor: '#1f2937',    // Dark gray text
    warningBorderColor: '#f59e0b',  // Orange border
    
    // Line/edge colors
    lineColor: '#6b7280',           // Gray for connecting lines
    
    // Font settings
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: '14px',
  },
};

/**
 * Node type to class name mapping
 * Used to apply consistent styling across all flowcharts
 */
export const nodeClassMap = {
  // Start/Success nodes - green
  start: 'node-success',
  success: 'node-success',
  
  // End/Error nodes - red
  end: 'node-error',
  error: 'node-error',
  
  // Important nodes (permits, visas, cards) - blue
  permit: 'node-primary',
  visa: 'node-primary',
  card: 'node-primary',
  
  // Decision nodes - yellow
  decision: 'node-decision',
  
  // Regular steps - default gray
  step: 'node-secondary',
} as const;

/**
 * Helper function to generate class definitions for Mermaid diagrams
 * This can be appended to diagrams that need custom styling beyond the theme
 */
export function generateMermaidClassDefs(): string {
  return `
    classDef node-success fill:#e1f5e1,stroke:#10b981,stroke-width:2px,color:#1f2937
    classDef node-error fill:#ffe1e1,stroke:#ef4444,stroke-width:2px,color:#1f2937
    classDef node-warning fill:#fff4e1,stroke:#f59e0b,stroke-width:2px,color:#1f2937
    classDef node-primary fill:#e1e5ff,stroke:#6366f1,stroke-width:2px,color:#1f2937
    classDef node-secondary fill:#f3f4f6,stroke:#9ca3af,stroke-width:2px,color:#1f2937
    classDef node-decision fill:#fff4cc,stroke:#f59e0b,stroke-width:2px,color:#1f2937
  `.trim();
}

/**
 * Color palette reference for documentation
 */
export const colorPalette = {
  success: {
    fill: '#e1f5e1',
    stroke: '#10b981',
    description: 'Light green - for Start and Success nodes',
  },
  error: {
    fill: '#ffe1e1',
    stroke: '#ef4444',
    description: 'Light red - for End and Error nodes',
  },
  warning: {
    fill: '#fff4e1',
    stroke: '#f59e0b',
    description: 'Light orange - for Alternative end nodes',
  },
  primary: {
    fill: '#e1e5ff',
    stroke: '#6366f1',
    description: 'Light blue - for Permits, Visas, Important nodes',
  },
  secondary: {
    fill: '#f3f4f6',
    stroke: '#9ca3af',
    description: 'Light gray - for Regular steps',
  },
  decision: {
    fill: '#fff4cc',
    stroke: '#f59e0b',
    description: 'Flat yellow - for Decision points (diamonds)',
  },
} as const;

