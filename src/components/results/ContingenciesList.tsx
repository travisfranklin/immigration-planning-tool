/**
 * ContingenciesList Component
 *
 * Displays contingency plans with bold, minimal styling
 *
 * Design Principles:
 * - Sharp corners (no border-radius)
 * - Bold typography
 * - High contrast colors
 * - 2px borders
 * - Numbered badges
 * - Minimal, functional design
 */

import type { Contingency } from '../../types/viability';

interface ContingenciesListProps {
  contingencies: Contingency[];
}

/**
 * Get color classes based on timeframe
 */
const getTimeframeColor = (timeframe: string): string => {
  if (timeframe.toLowerCase().includes('before')) {
    return 'bg-primary border-primary text-white';
  }
  if (timeframe.toLowerCase().includes('during')) {
    return 'bg-warning border-warning text-black';
  }
  if (timeframe.toLowerCase().includes('after')) {
    return 'bg-success border-success text-black';
  }
  return 'bg-gray-200 border-gray-400 text-black';
};

export const ContingenciesList: React.FC<ContingenciesListProps> = ({ contingencies }) => {
  if (contingencies.length === 0) {
    return (
      <div className="bg-white border-2 border-black p-6">
        <h3 className="text-h3 font-bold text-black mb-4 uppercase tracking-wide">Contingency Plans</h3>
        <div className="bg-success border-2 border-success p-6 text-center">
          <div className="w-12 h-12 bg-black mx-auto mb-3 flex items-center justify-center">
            <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-black font-bold uppercase text-body">No contingency plans needed</p>
          <p className="text-body-sm text-black mt-2">
            Your profile is well-aligned with this immigration path
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border-2 border-black p-6">
      <h3 className="text-h3 font-bold text-black mb-4 uppercase tracking-wide">Contingency Plans</h3>
      <p className="text-body-sm text-gray-700 mb-6">
        Prepare for these scenarios to ensure a smooth immigration process
      </p>

      <div className="space-y-4">
        {contingencies.map((contingency, index) => (
          <div
            key={contingency.id}
            className="border-2 border-black p-4"
          >
            {/* Contingency Header */}
            <div className="flex items-start gap-3 mb-3">
              {/* Numbered Badge - Sharp, Bold */}
              <div className="flex items-center justify-center w-10 h-10 border-2 border-black bg-white font-bold text-body flex-shrink-0">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-black mb-2 uppercase tracking-wide text-body">
                  {contingency.scenario}
                </h4>
                <p className="text-body-sm text-gray-700">{contingency.description}</p>
              </div>
            </div>

            {/* Action Plan - Bold Highlight */}
            <div className="ml-13 space-y-3">
              <div className="bg-primary border-2 border-primary p-4">
                <p className="text-label uppercase font-bold text-white mb-2">Action Plan</p>
                <p className="text-body-sm text-white">{contingency.action}</p>
              </div>

              {/* Timeframe Badge */}
              {contingency.timeframe && (
                <div className="flex items-center gap-3">
                  <span className="text-label uppercase font-bold text-black">Timeline:</span>
                  <span className={`text-label px-3 py-1 border-2 font-bold uppercase ${getTimeframeColor(contingency.timeframe)}`}>
                    {contingency.timeframe}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Summary - Bold Tip */}
      <div className="mt-6 pt-6 border-t-2 border-black">
        <div className="bg-accent border-2 border-accent p-4">
          <p className="text-body-sm text-black">
            <span className="font-bold uppercase">Tip:</span> Review these contingency plans regularly and update them as your situation changes.
          </p>
        </div>
      </div>
    </div>
  );
};

