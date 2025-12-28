/**
 * Flowchart Node Components
 * Exports all custom node types for React Flow
 */

import { ProcessStepNode } from './ProcessStepNode';
import { DecisionNode } from './DecisionNode';
import { StartEndNode } from './StartEndNode';
import { DocumentNode } from './DocumentNode';

export { ProcessStepNode, DecisionNode, StartEndNode, DocumentNode };

/**
 * Node type mapping for React Flow
 */
export const nodeTypes = {
  process: ProcessStepNode,
  decision: DecisionNode,
  start: StartEndNode,
  end: StartEndNode,
  document: DocumentNode,
};

