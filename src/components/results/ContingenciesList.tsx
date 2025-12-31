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
    return 'bg-primary text-white';
  }
  if (timeframe.toLowerCase().includes('during')) {
    return 'bg-warning text-black';
  }
  if (timeframe.toLowerCase().includes('after')) {
    return 'bg-success text-black';
  }
  return 'bg-gray-200 text-black';
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
            className="border-2 border-black"
          >
            <div className="w-full bg-black min-h-6 flex justify-start items-center">
              {/* Numbered Badge - Sharp, Bold, Responsive */}
              <div className="flex items-center justify-center w-6 sm:w-10 sm:h-10 font-bold text-white flex-shrink-0">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h4 className="font-medium text-white uppercase tracking-wide leading-none">
                {contingency.scenario}
              </h4>
            </div>
            <div className="p-4">
              {/* Contingency Header */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 mb-3">
                <div className="flex-1 min-w-0">
                  <p className="text-body-sm text-gray-700">{contingency.description}</p>
                </div>
              </div>

              {/* Action Plan - Bold Highlight */}
              <div>
                <p className="text-label uppercase font-bold">Action Plan</p>
                <p className="text-body-sm">{contingency.action}</p>
              </div>
            </div>
            {/* Timeframe Badge */}
              {contingency.timeframe && (
                <div className={`border-t-2 border-black text-label p-1 font-bold uppercase w-full ${getTimeframeColor(contingency.timeframe)}`}>
                  {contingency.timeframe}
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

