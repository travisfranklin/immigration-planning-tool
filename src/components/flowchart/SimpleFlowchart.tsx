/**
 * Simple HTML/CSS-based Flowchart Renderer
 * Renders flowcharts using plain HTML without React Flow
 */

import React from 'react';
import type { ReactFlowData } from '../../types/flowchart';

interface SimpleFlowchartProps {
  data: ReactFlowData;
  onNodeClick?: (nodeId: string) => void;
  selectedNodeId?: string;
}

export function SimpleFlowchart({ data, onNodeClick, selectedNodeId }: SimpleFlowchartProps) {
  const { nodes, edges } = data;

  // Group nodes by their Y position to create rows
  const nodesByRow = new Map<number, typeof nodes>();
  nodes.forEach(node => {
    const y = node.position.y;
    if (!nodesByRow.has(y)) {
      nodesByRow.set(y, []);
    }
    nodesByRow.get(y)!.push(node);
  });

  // Sort rows by Y position
  const sortedRows = Array.from(nodesByRow.entries()).sort((a, b) => a[0] - b[0]);

  const getNodeStyle = (nodeType: string | undefined) => {
    const baseStyle = 'px-6 py-4 border-2 border-black font-bold text-center cursor-pointer transition-all hover:bg-gray-100';
    
    switch (nodeType) {
      case 'start':
      case 'end':
        return `${baseStyle} rounded-full min-w-[160px]`;
      case 'decision':
        return `${baseStyle} transform rotate-45 w-32 h-32 flex items-center justify-center`;
      case 'document':
        return `${baseStyle} min-w-[200px] relative`;
      case 'process':
      default:
        return `${baseStyle} min-w-[200px]`;
    }
  };

  const renderNodeContent = (node: typeof nodes[0]) => {
    const isSelected = selectedNodeId === node.id;
    const nodeType = node.data.nodeType;
    const label = node.data.label?.replace(/<br\s*\/?>/g, '\n') || '';

    const containerClass = `
      ${getNodeStyle(nodeType)}
      ${isSelected ? 'bg-blue-100 border-blue-600' : 'bg-white'}
    `;

    const handleClick = () => {
      if (onNodeClick) {
        onNodeClick(node.id);
      }
    };

    // For decision nodes, we need to rotate the content back
    if (nodeType === 'decision') {
      return (
        <div
          key={node.id}
          className={containerClass}
          onClick={handleClick}
        >
          <div className="transform -rotate-45 whitespace-pre-wrap text-sm">
            {label}
          </div>
        </div>
      );
    }

    return (
      <div
        key={node.id}
        className={containerClass}
        onClick={handleClick}
      >
        <div className="whitespace-pre-wrap">
          {label}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full overflow-auto bg-white p-8">
      <div className="flex flex-col items-center gap-8 min-w-max mx-auto">
        {sortedRows.map(([yPos, rowNodes], rowIndex) => (
          <div key={yPos} className="flex flex-col items-center gap-4 w-full">
            {/* Render nodes in this row */}
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {rowNodes
                .sort((a, b) => a.position.x - b.position.x)
                .map(node => (
                  <div key={node.id} className="flex flex-col items-center">
                    {renderNodeContent(node)}
                  </div>
                ))}
            </div>
            
            {/* Render connector to next row */}
            {rowIndex < sortedRows.length - 1 && (
              <div className="flex items-center justify-center">
                <div className="w-0.5 h-8 bg-gray-900"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

