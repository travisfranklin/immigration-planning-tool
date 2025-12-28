/**
 * StartEndNode Component
 * Start/End terminal node for React Flow flowcharts
 */

import { Handle, Position } from '@xyflow/react';
import type { FlowchartNodeData } from '../../../types/flowchart';

interface StartEndNodeProps {
  data: FlowchartNodeData;
  selected?: boolean;
}

export function StartEndNode({ data, selected }: StartEndNodeProps) {
  const isStart = data.nodeType === 'start' || data.label.toLowerCase().includes('start');

  return (
    <div
      className={`
        px-6 py-3 border-2 rounded-none min-w-[160px]
        ${isStart ? 'bg-success-100 border-success' : 'bg-danger-100 border-danger'}
        ${selected ? 'ring-2 ring-primary ring-offset-2' : ''}
        transition-all duration-200
      `}
    >
      {!isStart && <Handle type="target" position={Position.Top} className="w-3 h-3 bg-gray-900" />}

      <div className="font-bold text-body text-center text-gray-900">{data.label}</div>

      {isStart && <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-gray-900" />}
    </div>
  );
}

