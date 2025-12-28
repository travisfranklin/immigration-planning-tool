/**
 * DocumentNode Component
 * Document collection step node for React Flow flowcharts
 */

import { Handle, Position } from '@xyflow/react';
import type { FlowchartNodeData } from '../../../types/flowchart';

interface DocumentNodeProps {
  data: FlowchartNodeData;
  selected?: boolean;
}

export function DocumentNode({ data, selected }: DocumentNodeProps) {
  const statusColors = {
    pending: 'bg-white border-gray-900',
    'in-progress': 'bg-accent-100 border-accent',
    completed: 'bg-success-100 border-success',
  } as const;

  const status = (data.status || 'pending') as 'pending' | 'in-progress' | 'completed';

  return (
    <div
      className={`
        px-4 py-3 border-2 rounded-none min-w-[200px]
        ${statusColors[status]}
        ${selected ? 'ring-2 ring-primary ring-offset-2' : ''}
        transition-all duration-200
      `}
    >
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-gray-900" />

      <div className="flex items-start gap-2">
        <span className="text-lg">📄</span>
        <div className="flex-1">
          <div className="font-bold text-body text-gray-900">{data.label}</div>
          {data.estimatedDuration && (
            <div className="text-body-sm text-gray-600 mt-1">{data.estimatedDuration}</div>
          )}
        </div>
      </div>

      {status === 'completed' && (
        <div className="absolute -top-2 -right-2 bg-success text-white w-6 h-6 flex items-center justify-center font-bold">
          ✓
        </div>
      )}

      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-gray-900" />
    </div>
  );
}

