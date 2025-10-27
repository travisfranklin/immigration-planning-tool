/**
 * FlowchartViewer Component
 * Renders immigration process flowcharts using Mermaid.js
 */

import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import type { FlowchartDefinition } from '../../types/flowchart';

interface FlowchartViewerProps {
  flowchart: FlowchartDefinition;
  onExport?: (format: 'png' | 'svg') => void;
  selectedStepId?: string | null;
  onStepSelect?: (stepId: string) => void;
}

export function FlowchartViewer({ flowchart, onExport, selectedStepId, onStepSelect }: FlowchartViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedStep, setSelectedStep] = useState<string | null>(null);
  const selectedStepRef = useRef<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Sync external selectedStepId with local state
  useEffect(() => {
    if (selectedStepId !== undefined) {
      setSelectedStep(selectedStepId);
      selectedStepRef.current = selectedStepId;
    }
  }, [selectedStepId]);

  useEffect(() => {
    // Initialize Mermaid
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis',
      },
    });
  }, []);

  useEffect(() => {
    const renderDiagram = async () => {
      if (!containerRef.current) return;

      setIsLoading(true);
      try {
        // Clear previous diagram
        containerRef.current.innerHTML = '';

        // Generate unique ID for this diagram
        const id = `mermaid-${flowchart.programId}-${Date.now()}`;

        // Render the diagram
        const { svg } = await mermaid.render(id, flowchart.mermaidDiagram);

        // Insert the SVG
        containerRef.current.innerHTML = svg;

        // Add click handlers to flowchart nodes
        if (onStepSelect) {
          const svgElement = containerRef.current.querySelector('svg');
          if (svgElement) {
            // Find all node groups in the diagram
            const nodeGroups = svgElement.querySelectorAll('g.node');

            nodeGroups.forEach((nodeGroup) => {
              const nodeId = nodeGroup.getAttribute('id') || '';

              // Extract step ID from node ID (e.g., "flowchart-submit-application-11" -> "submit-application")
              // Pattern: flowchart-{stepId}-{number}
              const match = nodeId.match(/^flowchart-(.+?)-\d+$/);
              if (!match) return;

              const extractedId = match[1];

              // Find the matching step
              const matchingStep = flowchart.steps.find(
                step => step.id === extractedId
              );

              if (matchingStep) {
                const htmlElement = nodeGroup as HTMLElement;
                htmlElement.style.cursor = 'pointer';

                // Add hover effect
                htmlElement.addEventListener('mouseenter', () => {
                  htmlElement.classList.add('node-hover');
                  // Find all child elements and update styling
                  const paths = htmlElement.querySelectorAll('path, rect, polygon');
                  paths.forEach((path) => {
                    const element = path as HTMLElement;
                    element.style.stroke = '#3b82f6';
                    element.style.strokeWidth = '2';
                  });
                  // Add subtle brightness to the entire node
                  htmlElement.style.filter = 'brightness(1.05)';
                });

                htmlElement.addEventListener('mouseleave', () => {
                  htmlElement.classList.remove('node-hover');
                  // Remove hover effect if not selected
                  if (selectedStepRef.current !== matchingStep.id) {
                    const paths = htmlElement.querySelectorAll('path, rect, polygon');
                    paths.forEach((path) => {
                      const element = path as HTMLElement;
                      element.style.stroke = '';
                      element.style.strokeWidth = '';
                    });
                    htmlElement.style.filter = '';
                  }
                });

                // Add click handler
                htmlElement.addEventListener('click', (e) => {
                  e.stopPropagation();
                  onStepSelect(matchingStep.id);
                });
              }
            });
          }
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error rendering flowchart:', error);
        containerRef.current.innerHTML = '<p class="text-red-600">Error rendering flowchart</p>';
        setIsLoading(false);
      }
    };

    renderDiagram();
  }, [flowchart, onStepSelect]);

  // Update selected node styling without re-rendering the diagram
  useEffect(() => {
    const svgElement = containerRef.current?.querySelector('svg');
    if (!svgElement) return;

    const nodeGroups = svgElement.querySelectorAll('g.node');
    nodeGroups.forEach((nodeGroup) => {
      const nodeId = nodeGroup.getAttribute('id') || '';
      const match = nodeId.match(/^flowchart-(.+?)-\d+$/);
      if (!match) return;

      const extractedId = match[1];
      const htmlElement = nodeGroup as HTMLElement;
      const paths = htmlElement.querySelectorAll('path, rect, polygon');

      if (selectedStep === extractedId) {
        // Apply selected styling - preserve original fill colors
        htmlElement.classList.add('node-selected');
        paths.forEach((path) => {
          const element = path as HTMLElement;
          element.style.stroke = '#1e40af';
          element.style.strokeWidth = '2.5';
          // Don't modify fill - preserve original semantic colors
        });
        // Add brightness to make selected node stand out
        htmlElement.style.filter = 'brightness(1.1)';
      } else {
        // Remove selected styling
        htmlElement.classList.remove('node-selected');
        paths.forEach((path) => {
          const element = path as HTMLElement;
          element.style.stroke = '';
          element.style.strokeWidth = '';
        });
        htmlElement.style.filter = '';
      }
    });
  }, [selectedStep]);

  const handleExport = (format: 'png' | 'svg') => {
    if (!containerRef.current) return;

    const svgElement = containerRef.current.querySelector('svg');
    if (!svgElement) return;

    if (format === 'svg') {
      // Export as SVG
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const blob = new Blob([svgData], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${flowchart.programId}-flowchart.svg`;
      link.click();
      URL.revokeObjectURL(url);
    } else {
      // Export as PNG
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const svgData = new XMLSerializer().serializeToString(svgElement);
      const img = new Image();
      const blob = new Blob([svgData], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        canvas.toBlob((pngBlob) => {
          if (!pngBlob) return;
          const pngUrl = URL.createObjectURL(pngBlob);
          const link = document.createElement('a');
          link.href = pngUrl;
          link.download = `${flowchart.programId}-flowchart.png`;
          link.click();
          URL.revokeObjectURL(pngUrl);
        });
        URL.revokeObjectURL(url);
      };

      img.src = url;
    }

    onExport?.(format);
  };

  return (
    <div className="space-y-6">
      {/* Flowchart Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{flowchart.programName}</h2>
            <p className="text-sm text-gray-600 mt-1">
              {flowchart.countryCode} • {flowchart.totalEstimatedDuration} • {flowchart.complexity} complexity
            </p>
            {flowchart.successRate && (
              <p className="text-sm text-green-600 mt-1">
                Success Rate: {flowchart.successRate}
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handleExport('svg')}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Export SVG
            </button>
            <button
              onClick={() => handleExport('png')}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Export PNG
            </button>
          </div>
        </div>
      </div>

      {/* Flowchart Diagram */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        {isLoading && (
          <div className="flex items-center justify-center h-64">
            <div className="text-gray-500">Loading flowchart...</div>
          </div>
        )}
        <div
          ref={containerRef}
          className="overflow-x-auto select-none"
          style={{ minHeight: '400px', userSelect: 'none' }}
        />
      </div>
    </div>
  );
}

