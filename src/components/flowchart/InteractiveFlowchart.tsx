/**
 * InteractiveFlowchart Component
 * Displays a flowchart with clickable steps and a details panel
 */

import { useState, useEffect } from 'react';
import { FlowchartViewer } from './FlowchartViewer';
import { StepDetailsPanel } from './StepDetailsPanel';
import type { FlowchartDefinition } from '../../types/flowchart';

interface InteractiveFlowchartProps {
  flowchart: FlowchartDefinition;
}

export function InteractiveFlowchart({ flowchart }: InteractiveFlowchartProps) {
  const [selectedStepId, setSelectedStepId] = useState<string | null>(null);

  // Auto-select first step on mount
  useEffect(() => {
    if (flowchart.steps.length > 0 && !selectedStepId) {
      setSelectedStepId(flowchart.steps[0].id);
    }
  }, [flowchart, selectedStepId]);

  const selectedStep = flowchart.steps.find((step) => step.id === selectedStepId);

  return (
    <div className="space-y-6">
      {/* Two-Column Layout: Flowchart + Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Flowchart */}
        <div className="lg:col-span-2">
          <div className="bg-white border-2 border-black p-6">
            <FlowchartViewer
              flowchart={flowchart}
              selectedStepId={selectedStepId}
              onStepSelect={setSelectedStepId}
            />
          </div>
        </div>

        {/* Right Column: Step Details */}
        <div className="lg:col-span-1">
          {selectedStep ? (
            <StepDetailsPanel step={selectedStep} />
          ) : (
            <div className="bg-white border-2 border-black p-6 text-center">
              <p className="text-gray-500">Select a step to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

