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
}

export function FlowchartViewer({ flowchart, onExport }: FlowchartViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedStep, setSelectedStep] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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

        setIsLoading(false);
      } catch (error) {
        console.error('Error rendering flowchart:', error);
        containerRef.current.innerHTML = '<p class="text-red-600">Error rendering flowchart</p>';
        setIsLoading(false);
      }
    };

    renderDiagram();
  }, [flowchart]);

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
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Process Flow</h3>
        {isLoading && (
          <div className="flex items-center justify-center h-64">
            <div className="text-gray-500">Loading flowchart...</div>
          </div>
        )}
        <div
          ref={containerRef}
          className="overflow-x-auto"
          style={{ minHeight: '400px' }}
        />
      </div>

      {/* Step Details */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Step-by-Step Guide</h3>
        <div className="space-y-4">
          {flowchart.steps.map((step, index) => (
            <div
              key={step.id}
              className={`border rounded-lg p-4 transition-colors ${
                selectedStep === step.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200'
              }`}
            >
              <button
                className="w-full text-left"
                onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
                aria-expanded={selectedStep === step.id}
                aria-controls={`step-details-${step.id}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                        {index + 1}
                      </span>
                      <h4 className="text-lg font-medium text-gray-900">{step.title}</h4>
                      {step.isConditional && (
                        <span className="px-2 py-1 text-xs font-medium text-yellow-700 bg-yellow-100 rounded conditional-badge">
                          Conditional
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-2 ml-10">{step.description}</p>
                    <p className="text-sm text-gray-500 mt-1 ml-10">
                      ⏱️ Estimated duration: {step.estimatedDuration}
                    </p>
                  </div>
                  <span className="text-gray-400 hover:text-gray-600">
                    {selectedStep === step.id ? '▼' : '▶'}
                  </span>
                </div>
              </button>

              {selectedStep === step.id && (
                <div
                  id={`step-details-${step.id}`}
                  className="mt-4 ml-10 space-y-3"
                  role="region"
                  aria-label={`Details for ${step.title}`}
                >
                  {step.documents.length > 0 && (
                    <div>
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">
                        Required Documents:
                      </h5>
                      <ul className="list-disc list-inside space-y-1">
                        {step.documents.map((doc, i) => (
                          <li key={i} className="text-sm text-gray-700">
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {step.notes && step.notes.length > 0 && (
                    <div>
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">
                        Important Notes:
                      </h5>
                      <ul className="list-disc list-inside space-y-1">
                        {step.notes.map((note, i) => (
                          <li key={i} className="text-sm text-gray-700">
                            {note}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {step.condition && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                      <p className="text-sm text-yellow-800">
                        <strong>Condition:</strong> {step.condition}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

