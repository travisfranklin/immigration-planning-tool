import React, { useState } from 'react';
import type { ViabilityScore } from '../../types/viability';
import { Badge } from '../Badge';
import type { BadgeVariant } from '../Badge';

interface CountryResultsTableProps {
  scores: ViabilityScore[];
  onViewDetails: (countryCode: string) => void;
  onViewFlowchart?: (countryCode: string, programId: string) => void;
}

const getBadgeVariant = (viabilityLevel: string, meetsRequirements: boolean): BadgeVariant => {
  if (!meetsRequirements) return 'not-eligible';

  switch (viabilityLevel) {
    case 'excellent':
      return 'excellent';
    case 'good':
      return 'good';
    case 'moderate':
      return 'moderate';
    case 'low':
      return 'low';
    case 'very_low':
      return 'very-low';
    default:
      return 'info';
  }
};

const getScoreColor = (score: number): string => {
  if (score >= 80) return 'text-green-600';
  if (score >= 60) return 'text-blue-600';
  if (score >= 40) return 'text-yellow-600';
  if (score >= 20) return 'text-orange-600';
  return 'text-red-600';
};

const getRiskColor = (level: string): string => {
  switch (level) {
    case 'low':
      return 'text-green-600';
    case 'medium':
      return 'text-yellow-600';
    case 'high':
      return 'text-red-600';
    default:
      return 'text-gray-600';
  }
};

export const CountryResultsTable: React.FC<CountryResultsTableProps> = ({
  scores,
  onViewDetails,
  onViewFlowchart,
}) => {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const toggleRow = (countryCode: string) => {
    setExpandedRow(expandedRow === countryCode ? null : countryCode);
  };

  const handleKeyDown = (e: React.KeyboardEvent, countryCode: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleRow(countryCode);
    } else if (e.key === 'Escape' && expandedRow === countryCode) {
      setExpandedRow(null);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
      {/* Desktop Table View (≥768px) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full" role="table">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Rank
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Country
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Score
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Viability
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Recommended Program
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Actions
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider w-12">
                {/* Expand column */}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {scores.map((score, index) => {
              const rank = index + 1;
              const isExpanded = expandedRow === score.countryCode;

              return (
                <React.Fragment key={score.id}>
                  {/* Main Row */}
                  <tr
                    className={`transition-colors ${
                      isExpanded ? 'bg-blue-50' : 'hover:bg-gray-50'
                    }`}
                  >
                    {/* Rank */}
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 font-bold text-gray-700 text-sm">
                        #{rank}
                      </div>
                    </td>

                    {/* Country */}
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{score.countryCode}</span>
                        <span className="font-semibold text-gray-900">{score.countryName}</span>
                      </div>
                    </td>

                    {/* Score */}
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className={`text-xl font-bold ${getScoreColor(score.overallScore)}`}>
                        {score.overallScore}/100
                      </div>
                    </td>

                    {/* Viability */}
                    <td className="px-4 py-4 whitespace-nowrap">
                      <Badge
                        variant={getBadgeVariant(score.viabilityLevel, score.meetsHardRequirements)}
                        icon={score.meetsHardRequirements ? '✓' : '⚠️'}
                      >
                        {score.meetsHardRequirements
                          ? score.viabilityLevel.replace('_', ' ')
                          : 'Not Eligible'}
                      </Badge>
                    </td>

                    {/* Program */}
                    <td className="px-4 py-4">
                      <div className="max-w-xs">
                        <p className="text-sm text-gray-900 truncate" title={score.recommendedProgram?.programName}>
                          {score.recommendedProgram?.programName || 'No program available'}
                        </p>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onViewDetails(score.countryCode);
                          }}
                          className="px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
                        >
                          Details
                        </button>
                        {onViewFlowchart && score.recommendedProgram && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onViewFlowchart(score.countryCode, score.recommendedProgram!.programId);
                            }}
                            className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                            title="View Flowchart"
                          >
                            📋
                          </button>
                        )}
                      </div>
                    </td>

                    {/* Expand Button */}
                    <td className="px-4 py-4 text-center">
                      <button
                        onClick={() => toggleRow(score.countryCode)}
                        onKeyDown={(e) => handleKeyDown(e, score.countryCode)}
                        className="p-1 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-expanded={isExpanded}
                        aria-controls={`details-${score.countryCode}`}
                        aria-label={`${isExpanded ? 'Collapse' : 'Expand'} details for ${score.countryName}`}
                      >
                        <svg
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            isExpanded ? 'rotate-90' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </td>
                  </tr>

                  {/* Expanded Details Row */}
                  {isExpanded && (
                    <tr>
                      <td colSpan={7} className="px-4 py-4 bg-blue-50">
                        <div id={`details-${score.countryCode}`} className="animate-fadeIn">
                          {/* Missing Requirements Warning */}
                          {!score.meetsHardRequirements && score.missingRequirements?.length > 0 && (
                            <div className="mb-4 p-3 bg-red-50 rounded-lg border border-red-200">
                              <h4 className="text-sm font-semibold text-red-900 mb-2">Missing Requirements</h4>
                              <ul className="space-y-1">
                                {score.missingRequirements.map((req, idx) => (
                                  <li key={idx} className="text-xs text-red-800 flex items-start gap-1">
                                    <span className="text-red-500 mt-0.5">•</span>
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Component Scores */}
                          <div className="mb-3">
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">Component Scores</h4>
                            <div className="grid grid-cols-5 gap-4">
                              {Object.entries(score.componentScores).map(([key, value]) => (
                                <div key={key} className="text-center">
                                  <div className="text-xs text-gray-600 capitalize mb-1">{key}</div>
                                  <div className={`text-lg font-semibold ${getScoreColor(value)}`}>{value}</div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Risk & Timeline */}
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="font-semibold text-gray-700">Risk:</span>{' '}
                              <span className={`capitalize ${getRiskColor(score.overallRiskLevel)}`}>
                                {score.overallRiskLevel}
                              </span>
                              <span className="text-gray-600"> ({score.riskFactors.length} risks)</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Timeline:</span>{' '}
                              <span className="text-gray-900">{score.estimatedTimelineMonths} months</span>
                            </div>
                            {score.alternativePrograms && score.alternativePrograms.length > 0 && (
                              <div>
                                <span className="font-semibold text-gray-700">Alternatives:</span>{' '}
                                <span className="text-gray-900">
                                  {score.alternativePrograms.length} program
                                  {score.alternativePrograms.length > 1 ? 's' : ''}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View (<768px) */}
      <div className="md:hidden divide-y divide-gray-200">
        {scores.map((score, index) => {
          const rank = index + 1;
          const isExpanded = expandedRow === score.countryCode;

          return (
            <div
              key={score.id}
              className={`p-4 transition-colors ${isExpanded ? 'bg-blue-50' : ''}`}
            >
              {/* Mobile Card Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  {/* Rank */}
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 font-bold text-gray-700 text-sm">
                    #{rank}
                  </div>

                  {/* Country & Score */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{score.countryCode}</span>
                      <h3 className="font-bold text-gray-900 truncate">{score.countryName}</h3>
                    </div>
                    <div className={`text-lg font-bold ${getScoreColor(score.overallScore)}`}>
                      {score.overallScore}/100
                    </div>
                  </div>
                </div>

                {/* Expand Button */}
                <button
                  onClick={() => toggleRow(score.countryCode)}
                  onKeyDown={(e) => handleKeyDown(e, score.countryCode)}
                  className="flex-shrink-0 p-1 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-expanded={isExpanded}
                  aria-controls={`details-mobile-${score.countryCode}`}
                  aria-label={`${isExpanded ? 'Collapse' : 'Expand'} details for ${score.countryName}`}
                >
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      isExpanded ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Viability Badge */}
              <div className="mb-3">
                <Badge
                  variant={getBadgeVariant(score.viabilityLevel, score.meetsHardRequirements)}
                  icon={score.meetsHardRequirements ? '✓' : '⚠️'}
                >
                  {score.meetsHardRequirements
                    ? score.viabilityLevel.replace('_', ' ')
                    : 'Not Eligible'}
                </Badge>
              </div>

              {/* Program */}
              <p className="text-sm text-gray-600 mb-3 truncate">
                {score.recommendedProgram?.programName || 'No program available'}
              </p>

              {/* Actions */}
              <div className="flex gap-2 mb-3">
                <button
                  onClick={() => onViewDetails(score.countryCode)}
                  className="flex-1 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  View Details
                </button>
                {onViewFlowchart && score.recommendedProgram && (
                  <button
                    onClick={() => onViewFlowchart(score.countryCode, score.recommendedProgram!.programId)}
                    className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    📋 Flowchart
                  </button>
                )}
              </div>

              {/* Expanded Details */}
              {isExpanded && (
                <div id={`details-mobile-${score.countryCode}`} className="pt-3 border-t border-gray-200 animate-fadeIn">
                  {/* Missing Requirements Warning */}
                  {!score.meetsHardRequirements && score.missingRequirements?.length > 0 && (
                    <div className="mb-3 p-3 bg-red-50 rounded-lg border border-red-200">
                      <h4 className="text-sm font-semibold text-red-900 mb-2">Missing Requirements</h4>
                      <ul className="space-y-1">
                        {score.missingRequirements.map((req, idx) => (
                          <li key={idx} className="text-xs text-red-800 flex items-start gap-1">
                            <span className="text-red-500 mt-0.5">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Component Scores */}
                  <div className="mb-3">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Component Scores</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(score.componentScores).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-xs text-gray-600 capitalize">{key}:</span>
                          <span className={`text-sm font-semibold ${getScoreColor(value)}`}>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Risk & Timeline */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Risk:</span>
                      <span className={`capitalize ${getRiskColor(score.overallRiskLevel)}`}>
                        {score.overallRiskLevel} ({score.riskFactors.length})
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Timeline:</span>
                      <span className="text-gray-900">{score.estimatedTimelineMonths} months</span>
                    </div>
                    {score.alternativePrograms && score.alternativePrograms.length > 0 && (
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-700">Alternatives:</span>
                        <span className="text-gray-900">{score.alternativePrograms.length}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

