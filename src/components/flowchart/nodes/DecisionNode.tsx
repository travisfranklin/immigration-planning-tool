/**
 * DecisionNode Component
 * Decision/conditional node for React Flow flowcharts (diamond shape)
 */

import { Handle, Position } from '@xyflow/react';
import type { FlowchartNodeData } from '../../../types/flowchart';

interface DecisionNodeProps {
  data: FlowchartNodeData;
  selected?: boolean;
}

export function DecisionNode({ data, selected }: DecisionNodeProps) {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-gray-900" />

      {/* Diamond shape */}
      <div
        className={`
          absolute w-full h-full rotate-45 
          bg-warning-100 border-2 border-warning rounded-none
          ${selected ? 'ring-2 ring-primary ring-offset-2' : ''}
          transition-all duration-200
        `}
      />

      {/* Content (not rotated) */}
      <div className="relative z-10 text-center px-2 max-w-[80px]">
        <div className="font-bold text-body-sm text-gray-900 leading-tight">{data.label}</div>
      </div>

      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-gray-900" />
      <Handle
        type="source"
        position={Position.Right}
        id="yes"
        className="w-3 h-3 bg-gray-900"
      />
      <Handle type="source" position={Position.Left} id="no" className="w-3 h-3 bg-gray-900" />
    </div>
  );
}

