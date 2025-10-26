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
      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>

      {/* Step Description */}
      <p className="text-gray-600 mb-4">{step.description}</p>

      {/* Estimated Duration */}
      {step.estimatedDuration && (
        <div className="mb-4 pb-4 border-b border-gray-200">
          <p className="text-sm font-semibold text-gray-700">Estimated Duration</p>
          <p className="text-sm text-gray-600 mt-1">{step.estimatedDuration}</p>
        </div>
      )}

      {/* Required Documents */}
      {step.documents && step.documents.length > 0 && (
        <div className="mb-4 pb-4 border-b border-gray-200">
          <p className="text-sm font-semibold text-gray-700 mb-2">Required Documents</p>
          <ul className="space-y-1">
            {step.documents.map((doc, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Notes */}
      {step.notes && step.notes.length > 0 && (
        <div className="mb-4 pb-4 border-b border-gray-200">
          <p className="text-sm font-semibold text-gray-700 mb-2">Important Notes</p>
          <ul className="space-y-1">
            {step.notes.map((note, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-amber-600 mt-1">⚠️</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Conditional Information */}
      {step.isConditional && step.condition && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-sm font-semibold text-blue-900 mb-1">Conditional Step</p>
          <p className="text-sm text-blue-800">{step.condition}</p>
        </div>
      )}
    </div>
  );
}

