/**
 * StepDetailsPanel Component
 * Displays detailed information about a selected flowchart step
 */

import type { FlowchartStep } from '../../types/flowchart';

interface StepDetailsPanelProps {
  step: FlowchartStep;
  status?: 'pending' | 'in-progress' | 'completed';
  onStatusChange?: (stepId: string, status: 'pending' | 'in-progress' | 'completed') => void;
}

export function StepDetailsPanel({ step, status = 'pending', onStatusChange }: StepDetailsPanelProps) {
  const handleStatusChange = (newStatus: 'pending' | 'in-progress' | 'completed') => {
    if (onStatusChange) {
      onStatusChange(step.id, newStatus);
    }
  };

  const statusColors = {
    pending: 'bg-gray-100 text-gray-800 border-gray-300',
    'in-progress': 'bg-primary-100 text-primary border-primary',
    completed: 'bg-success-100 text-success border-success',
  };

  const statusLabels = {
    pending: 'Not Started',
    'in-progress': 'In Progress',
    completed: 'Completed',
  };
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 sticky top-6">
      {/* Step Title */}
      <h4 className="text-lg font-medium text-gray-900">{step.title}</h4>

      {/* Status Badge */}
      <div className="flex items-center gap-2 mt-2">
        <span className={`px-3 py-1 text-xs font-bold border-2 ${statusColors[status]}`}>
          {statusLabels[status]}
        </span>
        {step.isConditional && (
          <span className="px-2 py-1 text-xs font-medium text-warning bg-warning-100 border-2 border-warning">
            CONDITIONAL
          </span>
        )}
      </div>

      {/* Step Description */}
      <p className="text-sm text-gray-600 mt-3">{step.description}</p>

      {/* Estimated Duration */}
      {step.estimatedDuration && (
        <div className="mt-3 pb-3 border-b border-gray-200">
          <p className="text-sm text-gray-500 font-mono">
            Duration: {step.estimatedDuration}
          </p>
        </div>
      )}

      {/* Progress Controls */}
      {onStatusChange && (
        <div className="mt-4 pb-4 border-b border-gray-200">
          <h5 className="text-sm font-semibold text-gray-900 mb-2">Update Status:</h5>
          <div className="flex gap-2">
            <button
              onClick={() => handleStatusChange('pending')}
              className={`flex-1 px-3 py-2 text-xs font-bold border-2 transition-all ${
                status === 'pending'
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-900 border-gray-900 hover:bg-gray-100'
              }`}
            >
              NOT STARTED
            </button>
            <button
              onClick={() => handleStatusChange('in-progress')}
              className={`flex-1 px-3 py-2 text-xs font-bold border-2 transition-all ${
                status === 'in-progress'
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-primary border-primary hover:bg-primary-50'
              }`}
            >
              IN PROGRESS
            </button>
            <button
              onClick={() => handleStatusChange('completed')}
              className={`flex-1 px-3 py-2 text-xs font-bold border-2 transition-all ${
                status === 'completed'
                  ? 'bg-success text-white border-success'
                  : 'bg-white text-success border-success hover:bg-success-50'
              }`}
            >
              COMPLETED
            </button>
          </div>
        </div>
      )}

      {step.id && (
        <div
          id={`step-details-${step.id}`}
          className="mt-4 space-y-3"
          role="region"
          aria-label={`Details for ${step.title}`}
        >
          {step.documents.length > 0 && (
            <div>
              <h5 className="text-sm font-semibold text-gray-900 mb-2">
                Required Documents:
              </h5>
              <ul className="list-disc list-outside ml-3 space-y-1">
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
              <ul className="list-disc space-y-1 list-outside ml-3">
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
  );
}

