/**
 * StepDetailsPanel Component
 * Displays detailed information about a selected flowchart step
 */

import type { FlowchartStep } from '../../types/flowchart';

interface StepDetailsPanelProps {
  step: FlowchartStep;
}

export function StepDetailsPanel({ step }: StepDetailsPanelProps) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 sticky top-6">
      {/* Step Title */}
      <h4 className="text-lg font-medium text-gray-900">{step.title}</h4>

      {/* Conditional Badge */}
      {step.isConditional && (
        <span className="px-2 py-1 text-xs font-medium text-yellow-700 bg-yellow-100 rounded conditional-badge">
          Conditional
        </span>
      )}

      {/* Step Description */}
      <p className="text-sm text-gray-600 mt-1">{step.description}</p>

      {/* Estimated Duration */}
      {step.estimatedDuration && (
        <div className="mb-4 pb-4 border-b border-gray-200">
          <p className="text-sm text-gray-500 mt-1">
            ⏱️ Estimated duration: {step.estimatedDuration}
          </p>
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

