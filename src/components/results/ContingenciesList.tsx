import React from 'react';
import type { Contingency } from '../../types/viability';

interface ContingenciesListProps {
  contingencies: Contingency[];
}

const getTimeframeColor = (timeframe: string): string => {
  if (timeframe.toLowerCase().includes('before')) {
    return 'bg-blue-100 text-blue-800';
  }
  if (timeframe.toLowerCase().includes('during')) {
    return 'bg-yellow-100 text-yellow-800';
  }
  if (timeframe.toLowerCase().includes('after')) {
    return 'bg-green-100 text-green-800';
  }
  return 'bg-gray-100 text-gray-800';
};

export const ContingenciesList: React.FC<ContingenciesListProps> = ({ contingencies }) => {
  if (contingencies.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Contingency Plans</h3>
        <p className="text-gray-600">No contingency plans needed at this time.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Contingency Plans</h3>
      <p className="text-sm text-gray-600 mb-4">
        Prepare for these scenarios to ensure a smooth immigration process
      </p>

      <div className="space-y-4">
        {contingencies.map((contingency, index) => (
          <div
            key={contingency.id}
            className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
          >
            {/* Contingency Header */}
            <div className="flex items-start gap-3 mb-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold text-sm flex-shrink-0">
                {index + 1}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">{contingency.scenario}</h4>
                <p className="text-sm text-gray-600">{contingency.description}</p>
              </div>
            </div>

            {/* Action Plan */}
            <div className="ml-11 space-y-2">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                <p className="text-xs font-semibold text-blue-900 mb-1">Action Plan:</p>
                <p className="text-sm text-blue-800">{contingency.action}</p>
              </div>

              {/* Timeframe */}
              {contingency.timeframe && (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-700">Timeline:</span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${getTimeframeColor(contingency.timeframe)}`}>
                    {contingency.timeframe}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-4 pt-4 border-t border-gray-300">
        <p className="text-sm text-gray-600">
          💡 <strong>Tip:</strong> Review these contingency plans regularly and update them as your
          situation changes.
        </p>
      </div>
    </div>
  );
};

