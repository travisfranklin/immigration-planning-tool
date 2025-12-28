/**
 * InteractiveFlowchart Component
 * Displays a flowchart with clickable steps and a details panel
 */

import { useState, useEffect } from 'react';
import { FlowchartViewer } from './FlowchartViewer';
import { ReactFlowViewer } from './ReactFlowViewer';
import { StepDetailsPanel } from './StepDetailsPanel';
import type { FlowchartDefinition } from '../../types/flowchart';
import type { FlowchartProgress } from '../../types/flowchartProgress';
import { USE_REACT_FLOW } from '../../constants/featureFlags';
import { getFlowchartProgress, updateStepStatus, getStepStatus } from '../../services/flowchartProgress';
import { getLatestUserProfile } from '../../services/storage/userProfileStore';

interface InteractiveFlowchartProps {
  flowchart: FlowchartDefinition;
}

export function InteractiveFlowchart({ flowchart }: InteractiveFlowchartProps) {
  const [selectedStepId, setSelectedStepId] = useState<string | null>(null);
  const [progress, setProgress] = useState<FlowchartProgress | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  // Load user ID and progress on mount
  useEffect(() => {
    const loadProgress = async () => {
      const latestProfile = await getLatestUserProfile();
      const currentUserId = latestProfile?.id || null;
      setUserId(currentUserId);

      if (currentUserId) {
        const flowchartProgress = await getFlowchartProgress(currentUserId, flowchart.programId);
        setProgress(flowchartProgress);
      }
    };

    loadProgress();
  }, [flowchart.programId]);

  // Auto-select first step on mount
  useEffect(() => {
    if (flowchart.steps.length > 0 && !selectedStepId) {
      setSelectedStepId(flowchart.steps[0].id);
    }
  }, [flowchart, selectedStepId]);

  const selectedStep = flowchart.steps.find((step) => step.id === selectedStepId);
  const selectedStepStatus = selectedStep ? getStepStatus(progress, selectedStep.id) : 'pending';

  // Handle status change
  const handleStatusChange = async (stepId: string, status: 'pending' | 'in-progress' | 'completed') => {
    if (!userId) return;

    try {
      await updateStepStatus(userId, flowchart.programId, flowchart.countryCode, stepId, status);
      // Reload progress
      const updatedProgress = await getFlowchartProgress(userId, flowchart.programId);
      setProgress(updatedProgress);
    } catch (error) {
      console.error('Error updating step status:', error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Two-Column Layout: Flowchart + Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Flowchart */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            {USE_REACT_FLOW ? (
              <ReactFlowViewer
                flowchart={flowchart}
                selectedStepId={selectedStepId}
                onStepSelect={setSelectedStepId}
                progress={progress}
              />
            ) : (
              <FlowchartViewer
                flowchart={flowchart}
                selectedStepId={selectedStepId}
                onStepSelect={setSelectedStepId}
              />
            )}
          </div>
        </div>

        {/* Right Column: Step Details */}
        <div className="lg:col-span-1">
          {selectedStep ? (
            <StepDetailsPanel
              step={selectedStep}
              status={selectedStepStatus}
              onStatusChange={handleStatusChange}
            />
          ) : (
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 text-center">
              <p className="text-gray-500">Select a step to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

