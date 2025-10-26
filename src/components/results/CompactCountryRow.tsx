import React, { useState } from 'react';
import type { ViabilityScore } from '../../types/viability';
import { Badge } from '../Badge';
import type { BadgeVariant } from '../Badge';

interface CompactCountryRowProps {
  score: ViabilityScore;
  rank: number;
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

export const CompactCountryRow: React.FC<CompactCountryRowProps> = ({
  score,
  rank,
  onViewDetails,
  onViewFlowchart,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleExpanded();
    } else if (e.key === 'Escape' && isExpanded) {
      setIsExpanded(false);
    }
  };

  return (
    <div
      className={`bg-white rounded-lg border-2 transition-all duration-300 ${
        isExpanded
          ? 'border-blue-500 shadow-lg'
          : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
      }`}
    >
      {/* Collapsed Header (always visible) */}
      <button
        onClick={toggleExpanded}
        onKeyDown={handleKeyDown}
        className="w-full px-4 sm:px-6 py-4 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
        aria-expanded={isExpanded}
        aria-controls={`country-details-${score.countryCode}`}
        aria-label={`${score.countryName}, rank ${rank}, score ${score.overallScore} out of 100. ${
          isExpanded ? 'Collapse' : 'Expand'
        } details.`}
      >
        <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
          {/* Rank Badge */}
          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 font-bold text-gray-700 text-sm sm:text-base">
            #{rank}
          </div>

          {/* Country Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h3 className="text-base sm:text-lg font-bold text-gray-900">{score.countryName}</h3>
              <Badge
                variant={getBadgeVariant(score.viabilityLevel, score.meetsHardRequirements)}
                icon={score.meetsHardRequirements ? '✓' : '⚠️'}
              >
                {score.meetsHardRequirements
                  ? score.viabilityLevel.replace('_', ' ')
                  : 'Not Eligible'}
              </Badge>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 truncate">
              {score.recommendedProgram?.programName || 'No program available'}
            </p>
          </div>

          {/* Score */}
          <div className="flex-shrink-0">
            <div className={`text-lg sm:text-xl font-bold ${getScoreColor(score.overallScore)}`}>
              {score.overallScore}/100
            </div>
          </div>

          {/* Chevron Icon */}
          <div className="flex-shrink-0">
            <svg
              className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform duration-300 ${
                isExpanded ? 'rotate-90' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div
          id={`country-details-${score.countryCode}`}
          className="px-4 sm:px-6 pb-4 animate-fadeIn"
        >
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            {/* Missing Requirements Warning */}
            {!score.meetsHardRequirements && score.missingRequirements?.length > 0 && (
              <div className="mb-4 p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-start gap-2">
                  <span className="text-red-600 text-lg">⚠️</span>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-red-900 mb-2">Missing Requirements</h4>
                    <ul className="text-sm text-red-800 space-y-1">
                      {score.missingRequirements?.map((req, index) => (
                        <li key={index} className="flex items-start gap-1">
                          <span className="text-red-600">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Component Scores */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Component Scores</h4>
              <div className="grid grid-cols-5 gap-2">
                {Object.entries(score.componentScores).map(([component, value]) => (
                  <div key={component} className="text-center">
                    <div className={`text-base sm:text-lg font-bold ${getScoreColor(value)}`}>
                      {value}
                    </div>
                    <div className="text-xs text-gray-600 capitalize">{component}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Risk Level</span>
                <span className={`text-sm font-semibold capitalize ${getRiskColor(score.overallRiskLevel)}`}>
                  {score.overallRiskLevel}
                  {score.riskFactors.length > 0 && (
                    <span className="text-gray-600 font-normal">
                      {' '}
                      ({score.riskFactors.length} risk{score.riskFactors.length !== 1 ? 's' : ''})
                    </span>
                  )}
                </span>
              </div>
              {score.estimatedTimelineMonths && (
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Timeline</span>
                  <span className="text-sm text-gray-900">
                    {score.estimatedTimelineMonths} month{score.estimatedTimelineMonths !== 1 ? 's' : ''}
                  </span>
                </div>
              )}
            </div>

            {/* Alternative Programs */}
            {score.alternativePrograms && score.alternativePrograms.length > 0 && (
              <div className="mb-4">
                <p className="text-xs text-gray-600">
                  +{score.alternativePrograms.length} alternative program
                  {score.alternativePrograms.length !== 1 ? 's' : ''} available
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onViewDetails(score.countryCode);
                }}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
              >
                View Full Details
              </button>
              {onViewFlowchart && score.recommendedProgram && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewFlowchart(score.countryCode, score.recommendedProgram!.programId);
                  }}
                  className="w-full px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center justify-center gap-2 text-sm"
                >
                  <span>📋</span>
                  <span>View Flowchart</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

