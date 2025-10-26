import React from 'react';
import type { RiskFactor } from '../../types/viability';

interface RiskFactorsListProps {
  riskFactors: RiskFactor[];
  overallRiskLevel: 'low' | 'medium' | 'high';
}

const getSeverityColor = (severity: 'low' | 'medium' | 'high'): string => {
  switch (severity) {
    case 'low':
      return 'bg-yellow-100 border-yellow-500 text-yellow-900';
    case 'medium':
      return 'bg-orange-100 border-orange-500 text-orange-900';
    case 'high':
      return 'bg-red-100 border-red-500 text-red-900';
    default:
      return 'bg-gray-100 border-gray-500 text-gray-900';
  }
};

const getSeverityIcon = (severity: 'low' | 'medium' | 'high'): string => {
  switch (severity) {
    case 'low':
      return '⚠️';
    case 'medium':
      return '⚠️';
    case 'high':
      return '🚨';
    default:
      return '⚠️';
  }
};

const getCategoryIcon = (category: string): string => {
  switch (category) {
    case 'financial':
      return '💰';
    case 'language':
      return '🗣️';
    case 'employment':
      return '💼';
    case 'legal':
      return '📋';
    case 'family':
      return '👨‍👩‍👧‍👦';
    default:
      return '⚠️';
  }
};

const getOverallRiskColor = (level: 'low' | 'medium' | 'high'): string => {
  switch (level) {
    case 'low':
      return 'bg-green-100 border-green-500 text-green-900';
    case 'medium':
      return 'bg-yellow-100 border-yellow-500 text-yellow-900';
    case 'high':
      return 'bg-red-100 border-red-500 text-red-900';
    default:
      return 'bg-gray-100 border-gray-500 text-gray-900';
  }
};

export const RiskFactorsList: React.FC<RiskFactorsListProps> = ({
  riskFactors,
  overallRiskLevel,
}) => {
  if (riskFactors.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Risk Assessment</h3>
        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 text-center">
          <div className="text-4xl mb-2">✅</div>
          <p className="text-green-900 font-semibold">No significant risks identified</p>
          <p className="text-sm text-green-700 mt-1">
            Your profile aligns well with this immigration path
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">Risk Assessment</h3>
        <div className={`px-3 py-1 rounded-lg border-2 font-semibold capitalize ${getOverallRiskColor(overallRiskLevel)}`}>
          {overallRiskLevel} Risk
        </div>
      </div>

      <div className="space-y-3">
        {riskFactors.map((risk) => (
          <div
            key={risk.id}
            className={`border-2 rounded-lg p-4 ${getSeverityColor(risk.severity)}`}
          >
            {/* Risk Header */}
            <div className="flex items-start gap-3 mb-2">
              <span className="text-2xl">{getSeverityIcon(risk.severity)}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{getCategoryIcon(risk.category)}</span>
                  <h4 className="font-semibold capitalize">{risk.category} Risk</h4>
                  <span className={`text-xs px-2 py-1 rounded-full font-semibold uppercase ${
                    risk.severity === 'high'
                      ? 'bg-red-200 text-red-900'
                      : risk.severity === 'medium'
                      ? 'bg-orange-200 text-orange-900'
                      : 'bg-yellow-200 text-yellow-900'
                  }`}>
                    {risk.severity}
                  </span>
                </div>
                <p className="text-sm mb-2">{risk.description}</p>
              </div>
            </div>

            {/* Mitigation */}
            <div className="ml-11 pl-4 border-l-2 border-current">
              <p className="text-xs font-semibold mb-1">Recommended Action:</p>
              <p className="text-sm">{risk.mitigation}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-4 pt-4 border-t border-gray-300">
        <p className="text-sm text-gray-600">
          {riskFactors.filter((r) => r.severity === 'high').length} high-severity,{' '}
          {riskFactors.filter((r) => r.severity === 'medium').length} medium-severity, and{' '}
          {riskFactors.filter((r) => r.severity === 'low').length} low-severity risk
          {riskFactors.length !== 1 ? 's' : ''} identified
        </p>
      </div>
    </div>
  );
};

