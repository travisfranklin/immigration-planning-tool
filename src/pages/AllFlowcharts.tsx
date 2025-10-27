/**
 * AllFlowcharts Page
 * Testing page to display all flowcharts and verify interaction with StepDetailsPanel
 */

import { useState, useCallback, useMemo, memo } from 'react';
import { Layout } from '../components';
import { FlowchartViewer } from '../components/flowchart/FlowchartViewer';
import { StepDetailsPanel } from '../components/flowchart/StepDetailsPanel';
import { ALL_FLOWCHARTS } from '../data/flowcharts';
import type { FlowchartDefinition } from '../types/flowchart';
import { UI_CONTAINER } from '../constants/uiStyles';

// Memoized FlowchartItem component to prevent unnecessary re-renders
interface FlowchartItemProps {
  countryCode: string;
  programId: string;
  flowchart: FlowchartDefinition;
  isActive: boolean;
  selectedStepId: string | null;
  onStepSelect: (flowchartId: string, stepId: string) => void;
}

const FlowchartItem = memo(function FlowchartItem({
  countryCode,
  programId,
  flowchart,
  isActive,
  selectedStepId,
  onStepSelect,
}: FlowchartItemProps) {
  const flowchartId = `${countryCode}-${programId}`;

  // Memoize the step select handler for this specific flowchart
  const handleStepSelect = useCallback(
    (stepId: string) => {
      onStepSelect(flowchartId, stepId);
    },
    [flowchartId, onStepSelect]
  );

  return (
    <div
      key={flowchartId}
      id={flowchartId}
      className={`bg-white rounded-lg shadow-md border-2 p-6 transition-all ${
        isActive ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'
      }`}
    >
      {/* Flowchart Header */}
      <div className="mb-4 pb-4 border-b border-gray-200">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {countryCode} - {flowchart.programName}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Program ID: <code className="bg-gray-100 px-2 py-0.5 rounded">{programId}</code>
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">
              <span className="font-medium">Duration:</span> {flowchart.totalEstimatedDuration}
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-medium">Complexity:</span>{' '}
              <span
                className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                  flowchart.complexity === 'low'
                    ? 'bg-green-100 text-green-800'
                    : flowchart.complexity === 'medium'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {flowchart.complexity}
              </span>
            </div>
            {flowchart.successRate && (
              <div className="text-sm text-gray-600">
                <span className="font-medium">Success Rate:</span> {flowchart.successRate}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Flowchart Viewer */}
      <FlowchartViewer
        flowchart={flowchart}
        selectedStepId={isActive ? selectedStepId : null}
        onStepSelect={handleStepSelect}
      />

      {/* Step Count */}
      <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-500">
        {flowchart.steps.length} steps defined
      </div>
    </div>
  );
});

export function AllFlowcharts() {
  const [selectedStepId, setSelectedStepId] = useState<string | null>(null);
  const [currentFlowchartId, setCurrentFlowchartId] = useState<string | null>(null);

  // Flatten all flowcharts into a single array with metadata (memoized)
  const allFlowcharts = useMemo(() => {
    const flowcharts: Array<{
      countryCode: string;
      programId: string;
      flowchart: FlowchartDefinition;
    }> = [];

    Object.entries(ALL_FLOWCHARTS).forEach(([countryCode, flowchartsMap]) => {
      Object.entries(flowchartsMap).forEach(([programId, flowchart]) => {
        flowcharts.push({ countryCode, programId, flowchart });
      });
    });

    // Sort by country code, then program ID
    flowcharts.sort((a, b) => {
      if (a.countryCode !== b.countryCode) {
        return a.countryCode.localeCompare(b.countryCode);
      }
      return a.programId.localeCompare(b.programId);
    });

    return flowcharts;
  }, []); // Empty dependency array since ALL_FLOWCHARTS is static

  // Handle step selection (memoized to prevent unnecessary re-renders)
  const handleStepSelect = useCallback((flowchartId: string, stepId: string) => {
    setCurrentFlowchartId(flowchartId);
    setSelectedStepId(stepId);
  }, []);

  // Get the selected step details
  const getSelectedStep = () => {
    if (!selectedStepId || !currentFlowchartId) return null;

    const flowchartData = allFlowcharts.find(
      (f) => `${f.countryCode}-${f.programId}` === currentFlowchartId
    );

    if (!flowchartData) return null;

    return flowchartData.flowchart.steps.find((step) => step.id === selectedStepId);
  };

  const selectedStep = getSelectedStep();

  return (
    <Layout currentPage="flowchart">
      <div className={UI_CONTAINER.lg}>
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            All Flowcharts - Testing Page
          </h1>
          <p className="text-gray-600">
            This page displays all {allFlowcharts.length} flowcharts for testing purposes.
            Click on any step in a flowchart to see the details panel update.
          </p>
        </div>

        {/* Two-Column Layout: Flowcharts + Details Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column: All Flowcharts (scrollable) */}
          <div className="lg:col-span-3 space-y-8">
            {allFlowcharts.map(({ countryCode, programId, flowchart }) => {
              const flowchartId = `${countryCode}-${programId}`;
              const isActive = currentFlowchartId === flowchartId;

              return (
                <FlowchartItem
                  key={flowchartId}
                  countryCode={countryCode}
                  programId={programId}
                  flowchart={flowchart}
                  isActive={isActive}
                  selectedStepId={selectedStepId}
                  onStepSelect={handleStepSelect}
                />
              );
            })}
          </div>

          {/* Right Column: Sticky Step Details Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              {selectedStep ? (
                <div>
                  <div className="mb-2 text-xs text-gray-500 font-medium uppercase tracking-wide">
                    Selected Step
                  </div>
                  <StepDetailsPanel step={selectedStep} />
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-xs text-blue-900">
                      <div className="font-medium mb-1">Debug Info:</div>
                      <div>Flowchart: {currentFlowchartId}</div>
                      <div>Step ID: {selectedStepId}</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 text-center">
                  <div className="text-gray-400 mb-2">
                    <svg
                      className="w-12 h-12 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Click on any step in a flowchart to view its details here
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Summary Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{allFlowcharts.length}</div>
              <div className="text-sm text-gray-600">Total Flowcharts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {Object.keys(ALL_FLOWCHARTS).length}
              </div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">
                {allFlowcharts.reduce((sum, f) => sum + f.flowchart.steps.length, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Steps</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">
                {Math.round(
                  allFlowcharts.reduce((sum, f) => sum + f.flowchart.steps.length, 0) /
                    allFlowcharts.length
                )}
              </div>
              <div className="text-sm text-gray-600">Avg Steps/Flowchart</div>
            </div>
          </div>
        </div>

        {/* Testing Instructions */}
        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Testing Instructions</h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-start gap-2">
              <span className="font-bold">1.</span>
              <span>Click on any step in any flowchart to select it</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">2.</span>
              <span>The StepDetailsPanel on the right should update with the step's details</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">3.</span>
              <span>The active flowchart should be highlighted with a blue border</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">4.</span>
              <span>The selected step should be highlighted in the flowchart diagram</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">5.</span>
              <span>Verify that all step IDs match between the diagram and step definitions</span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

