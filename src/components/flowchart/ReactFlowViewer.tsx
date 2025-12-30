/**
 * ReactFlowViewer Component
 * Renders flowcharts using React Flow library
 */

import React, { useCallback, useState, useEffect } from 'react';
import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
  type Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import type { FlowchartDefinition } from '../../types/flowchart';
import type { FlowchartProgress } from '../../types/flowchartProgress';
import { nodeTypes } from './nodes';
import { getReactFlowData } from '../../utils/flowchart';
import { getStepStatus } from '../../services/flowchartProgress';

interface ReactFlowViewerProps {
  flowchart: FlowchartDefinition;
  selectedStepId?: string | null;
  onStepSelect?: (stepId: string) => void;
  progress?: FlowchartProgress | null;
}

export function ReactFlowViewer({
  flowchart,
  onStepSelect,
  progress,
}: ReactFlowViewerProps) {
  const [isLoading] = useState(false);

  // Get React Flow data (from reactFlowData or convert from Mermaid)
  // Wrap in useMemo to avoid recalculating on every render
  const flowData = React.useMemo(() => {
    try {
      const data = getReactFlowData(flowchart);

      // Validate flowData
      if (!data || !data.nodes || !Array.isArray(data.nodes)) {
        console.error('Invalid flowchart data structure');
        return { nodes: [], edges: [] };
      }

      return data;
    } catch (err) {
      console.error('Error getting React Flow data:', err);
      // Return empty flowData to prevent hooks from breaking
      return { nodes: [], edges: [] };
    }
  }, [flowchart]);

  // Calculate height based on number of nodes (more nodes = taller flowchart)
  const nodeCount = flowData.nodes.length;
  const minHeight = 400;
  const maxHeight = 800;
  const heightPerNode = 40;
  const calculatedHeight = Math.min(maxHeight, Math.max(minHeight, nodeCount * heightPerNode));

  // Apply progress status to nodes
  const nodesWithProgress = flowData.nodes.map(node => ({
    ...node,
    data: {
      ...node.data,
      status: getStepStatus(progress || null, node.data.stepId),
    },
  }));

  const [nodes, setNodes, onNodesChange] = useNodesState(nodesWithProgress);
  const [edges, , onEdgesChange] = useEdgesState(flowData.edges);

  // Update nodes when progress changes
  useEffect(() => {
    const updatedNodes = flowData.nodes.map(node => ({
      ...node,
      data: {
        ...node.data,
        status: getStepStatus(progress || null, node.data.stepId),
      },
    }));
    setNodes(updatedNodes);
  }, [progress, flowData.nodes, setNodes]);

  // Handle node click
  const onNodeClick = useCallback(
    (_event: React.MouseEvent, node: Node) => {
      if (onStepSelect && node.data?.stepId) {
        onStepSelect(node.data.stepId as string);
      }
    },
    [onStepSelect]
  );

  // Prevent connection creation (read-only flowchart)
  const onConnect: OnConnect = useCallback(() => {
    // Do nothing - flowchart is read-only
  }, []);

  // Show error state if no nodes
  if (flowData.nodes.length === 0) {
    return (
      <div className="flex items-center justify-center bg-gray-50 p-8 border-2 border-black" style={{ height: `${calculatedHeight}px` }}>
        <div className="text-body text-danger">Error loading flowchart. Please try refreshing the page.</div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center bg-gray-50" style={{ height: `${calculatedHeight}px` }}>
        <div className="text-body text-gray-600">Loading flowchart...</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white border-2 border-black overflow-hidden" style={{ height: `${calculatedHeight}px` }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange as OnNodesChange}
        onEdgesChange={onEdgesChange as OnEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
        nodesConnectable={false}
        nodesFocusable={true}
        edgesFocusable={false}
        elementsSelectable={true}
        panOnDrag={false}
        panOnScroll={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        fitView
        fitViewOptions={{ padding: 0.1, maxZoom: 1, minZoom: 1 }}
        minZoom={1}
        maxZoom={1}
        defaultEdgeOptions={{
          type: 'smoothstep',
          style: { stroke: '#1F2937', strokeWidth: 2 },
        }}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#E5E7EB" gap={16} />
      </ReactFlow>
    </div>
  );
}

