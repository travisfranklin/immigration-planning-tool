/**
 * ProcessTimeline Component
 * Modern vertical timeline with branching support for immigration processes
 * Follows German design principles: minimal, functional, high-contrast
 */

import React from 'react';
import type { ReactFlowData } from '../../types/flowchart';

interface ProcessTimelineProps {
  data: ReactFlowData;
  onNodeClick?: (nodeId: string) => void;
  selectedNodeId?: string | null;
}

interface TimelineNode {
  id: string;
  label: string;
  nodeType: string;
  stepId: string;
  children: string[];
  parents: string[];
  level: number;
}

export function ProcessTimeline({ data, onNodeClick, selectedNodeId }: ProcessTimelineProps) {
  const { nodes, edges } = data;

  // Build adjacency map for graph traversal
  const childrenMap = new Map<string, string[]>();
  const parentsMap = new Map<string, string[]>();
  const edgeLabels = new Map<string, string>();

  edges.forEach(edge => {
    if (!childrenMap.has(edge.source)) {
      childrenMap.set(edge.source, []);
    }
    childrenMap.get(edge.source)!.push(edge.target);

    if (!parentsMap.has(edge.target)) {
      parentsMap.set(edge.target, []);
    }
    parentsMap.get(edge.target)!.push(edge.source);

    if (edge.label) {
      edgeLabels.set(`${edge.source}-${edge.target}`, edge.label);
    }
  });

  // Find start node
  const startNode = nodes.find(n => n.data.nodeType === 'start');
  if (!startNode) return null;

  // Build timeline nodes with levels
  const timelineNodes: TimelineNode[] = [];
  const visited = new Set<string>();
  const queue: Array<{ id: string; level: number }> = [{ id: startNode.id, level: 0 }];

  while (queue.length > 0) {
    const { id, level } = queue.shift()!;
    if (visited.has(id)) continue;
    visited.add(id);

    const node = nodes.find(n => n.id === id);
    if (!node) continue;

    timelineNodes.push({
      id: node.id,
      label: node.data.label?.replace(/<br\s*\/?>/g, ' ') || '',
      nodeType: node.data.nodeType || 'process',
      stepId: node.data.stepId,
      children: childrenMap.get(id) || [],
      parents: parentsMap.get(id) || [],
      level,
    });

    const children = childrenMap.get(id) || [];
    children.forEach(childId => {
      if (!visited.has(childId)) {
        queue.push({ id: childId, level: level + 1 });
      }
    });
  }

  const renderNode = (node: TimelineNode, branchLabel?: string) => {
    const isSelected = selectedNodeId === node.id;
    const isDecision = node.nodeType === 'decision';
    const isStart = node.nodeType === 'start';
    const isEnd = node.nodeType === 'end';
    const isProcess = node.nodeType === 'process' || node.nodeType === 'document';

    const handleClick = () => {
      if (onNodeClick && node.stepId !== 'Start' && !isEnd) {
        onNodeClick(node.stepId);
      }
    };

    // Base styles following German design
    let nodeClasses = 'relative transition-all duration-200 ';
    let contentClasses = 'px-6 py-4 border-2 border-black font-medium ';
    let clickable = node.stepId !== 'Start' && !isEnd;

    if (clickable) {
      contentClasses += 'cursor-pointer hover:bg-gray-100 ';
    }

    if (isSelected) {
      contentClasses += 'bg-blue-50 border-blue-600 shadow-lg ';
    } else {
      contentClasses += 'bg-white ';
    }

    if (isStart || isEnd) {
      contentClasses += 'rounded-full text-center min-w-[200px] ';
    } else if (isDecision) {
      contentClasses += 'bg-yellow-50 border-yellow-600 font-bold ';
    } else {
      contentClasses += 'rounded-sm ';
    }

    return (
      <div className={nodeClasses}>
        {branchLabel && (
          <div className="absolute -top-6 left-0 text-xs font-bold uppercase tracking-wider text-gray-600">
            {branchLabel}
          </div>
        )}
        <div
          className={contentClasses}
          onClick={handleClick}
        >
          <div className="text-sm leading-relaxed">{node.label}</div>
        </div>
      </div>
    );
  };

  // Simplified linear rendering approach
  const renderTimeline = () => {
    const elements: JSX.Element[] = [];
    const rendered = new Set<string>();

    const processNode = (nodeId: string, branchLabel?: string): JSX.Element[] => {
      if (rendered.has(nodeId)) return [];
      rendered.add(nodeId);

      const node = timelineNodes.find(n => n.id === nodeId);
      if (!node) return [];

      const nodeElements: JSX.Element[] = [];
      const children = node.children;
      const isBranching = children.length > 1;

      // Render the node
      nodeElements.push(
        <div key={node.id} className="flex flex-col items-center w-full mb-4">
          <div className="w-full max-w-2xl">
            {renderNode(node, branchLabel)}
          </div>
        </div>
      );

      // Render connector if there are children
      if (children.length > 0 && !isBranching) {
        nodeElements.push(
          <div key={`connector-${node.id}`} className="flex justify-center w-full mb-4">
            <div className="w-0.5 h-12 bg-gray-900"></div>
          </div>
        );
      }

      // Handle branching
      if (isBranching) {
        // Show branching connector
        nodeElements.push(
          <div key={`branch-connector-${node.id}`} className="flex justify-center w-full mb-8">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-gray-900"></div>
              <div className="flex gap-4">
                {children.map(() => (
                  <div key={Math.random()} className="w-0.5 h-8 bg-gray-900"></div>
                ))}
              </div>
            </div>
          </div>
        );

        // Render branches in a grid
        nodeElements.push(
          <div key={`branches-${node.id}`} className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-8">
            {children.map(childId => {
              const edgeLabel = edgeLabels.get(`${node.id}-${childId}`);
              return (
                <div key={childId} className="flex flex-col items-center border-2 border-gray-300 rounded-lg p-6 bg-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-4">
                    {edgeLabel || 'Path'}
                  </div>
                  {processNode(childId)}
                </div>
              );
            })}
          </div>
        );
      } else if (children.length === 1) {
        // Single child - continue linear flow
        nodeElements.push(...processNode(children[0]));
      }

      return nodeElements;
    };

    elements.push(...processNode(startNode.id));
    return elements;
  };

  return (
    <div className="w-full h-full overflow-auto bg-gray-50">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {renderTimeline()}
        </div>
      </div>
    </div>
  );
}

