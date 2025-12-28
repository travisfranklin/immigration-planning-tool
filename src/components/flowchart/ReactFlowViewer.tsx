/**
 * ReactFlowViewer Component
 * Renders flowcharts using React Flow library
 */

import { useCallback, useState } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
  type Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import type { FlowchartDefinition } from '../../types/flowchart';
import { nodeTypes } from './nodes';
import { getReactFlowData } from '../../utils/flowchart';

interface ReactFlowViewerProps {
  flowchart: FlowchartDefinition;
  selectedStepId?: string | null;
  onStepSelect?: (stepId: string) => void;
}

export function ReactFlowViewer({
  flowchart,
  onStepSelect,
}: ReactFlowViewerProps) {
  const [isLoading] = useState(false);

  // Get React Flow data (from reactFlowData or convert from Mermaid)
  const flowData = getReactFlowData(flowchart);

  const [nodes, , onNodesChange] = useNodesState(flowData.nodes);
  const [edges, , onEdgesChange] = useEdgesState(flowData.edges);

  // Handle node click
  const onNodeClick = useCallback(
    (_event: React.MouseEvent, node: Node) => {
      if (onStepSelect) {
        onStepSelect(node.id);
      }
    },
    [onStepSelect]
  );

  // Prevent connection creation (read-only flowchart)
  const onConnect: OnConnect = useCallback(() => {
    // Do nothing - flowchart is read-only
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[600px] bg-gray-50">
        <div className="text-body text-gray-600">Loading flowchart...</div>
      </div>
    );
  }

  return (
    <div className="h-[600px] bg-white border-2 border-black">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange as OnNodesChange}
        onEdgesChange={onEdgesChange as OnEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.1}
        maxZoom={1.5}
        defaultEdgeOptions={{
          type: 'smoothstep',
          style: { stroke: '#1F2937', strokeWidth: 2 },
        }}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#E5E7EB" gap={16} />
        <Controls
          showZoom
          showFitView
          showInteractive={false}
          className="border-2 border-black rounded-none"
        />
        <MiniMap
          nodeColor={(node) => {
            switch (node.type) {
              case 'start':
                return '#75E3B3'; // Aquamarine
              case 'end':
                return '#FF4D00'; // Red-Orange
              case 'decision':
                return '#FF9B00'; // Orange Peel
              case 'document':
                return '#E0FC2F'; // Chartreuse
              default:
                return '#FFFFFF'; // White
            }
          }}
          className="border-2 border-black rounded-none"
          maskColor="rgba(0, 0, 0, 0.1)"
        />
      </ReactFlow>
    </div>
  );
}

