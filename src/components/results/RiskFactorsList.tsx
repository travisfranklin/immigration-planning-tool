import React from 'react';
import type { RiskFactor } from '../../types/viability';

interface RiskFactorsListProps {
  riskFactors: RiskFactor[];
  overallRiskLevel: 'low' | 'medium' | 'high';
}

const getSeverityColor = (severity: 'low' | 'medium' | 'high'): string => {
  switch (severity) {
    case 'low':
      return 'bg-warning border-warning text-black';
    case 'medium':
      return 'bg-warning border-warning text-black';
    case 'high':
      return 'bg-danger border-danger text-white';
    default:
      return 'bg-gray-200 border-gray-400 text-black';
  }
};

const getCategoryLabel = (category: string): string => {
  switch (category) {
    case 'financial':
      return 'Financial';
    case 'language':
      return 'Language';
    case 'employment':
      return 'Employment';
    case 'legal':
      return 'Legal';
    case 'family':
      return 'Family';
    default:
      return 'General';
  }
};

const getOverallRiskColor = (level: 'low' | 'medium' | 'high'): string => {
  switch (level) {
    case 'low':
      return 'text-success-dark';
    case 'medium':
      return 'text-warning';
    case 'high':
      return 'text-danger';
    default:
      return 'text-gray-200';
  }
};

export const RiskFactorsList: React.FC<RiskFactorsListProps> = ({
  riskFactors,
  overallRiskLevel,
}) => {
  if (riskFactors.length === 0) {
    return (
      <div className="">
        <h3 className="text-h3 font-bold text-black mb-4 uppercase tracking-wide">Risk Assessment</h3>
        <div className="bg-success border-2 border-success p-6 text-center">
          <div className="w-12 h-12 bg-black mx-auto mb-3 flex items-center justify-center">
            <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-black font-bold uppercase text-body">No significant risks identified</p>
          <p className="text-body-sm text-black mt-2">
            Your profile aligns well with this immigration path
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex items-center mb-6">
        <h3 className="text-h3 font-bold text-black uppercase tracking-wide">Risk Assessment:{' '}
          <span className={`uppercase ${getOverallRiskColor(overallRiskLevel)}`}>
            {overallRiskLevel}
          </span>
        </h3>
      </div>

      <div className="space-y-4">
        {riskFactors.map((risk) => (
          <div
            key={risk.id}
            className={`border-2 border-black`}
          >
            <div className={`w-full text-right text-label-sm px-2 py-1 font-bold uppercase ${
              getSeverityColor(risk.severity)
            }`}>
              {risk.severity}
            </div>
            <div className="p-4 bg-white">
              {/* Risk Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-1">
                  <div className="flex justify-between gap-2 mb-1">
                    <h4 className="font-bold uppercase text-body tracking-wide leading-none">{getCategoryLabel(risk.category)} Risk</h4>
                  </div>
                  <p className="text-body-sm">{risk.description}</p>
                </div>
              </div>

              {/* Mitigation */}
              <div className="pl-2 border-l-2 border-black">
                <p className="text-label font-bold uppercase">Recommended Action:</p>
                <p className="text-body-sm">{risk.mitigation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

