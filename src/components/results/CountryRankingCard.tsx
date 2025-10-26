import React from 'react';
import type { ViabilityScore } from '../../types/viability';
import { Badge } from '../Badge';
import type { BadgeVariant } from '../Badge';

interface CountryRankingCardProps {
  score: ViabilityScore;
  rank: number;
  onViewDetails: (countryCode: string) => void;
  onViewFlowchart?: (countryCode: string, programId: string) => void;
}

const getViabilityColor = (level: string): string => {
  switch (level) {
    case 'excellent':
      return 'bg-green-100 border-green-500 text-green-900';
    case 'good':
      return 'bg-blue-100 border-blue-500 text-blue-900';
    case 'moderate':
      return 'bg-yellow-100 border-yellow-500 text-yellow-900';
    case 'low':
      return 'bg-orange-100 border-orange-500 text-orange-900';
    case 'very_low':
      return 'bg-red-100 border-red-500 text-red-900';
    default:
      return 'bg-gray-100 border-gray-500 text-gray-900';
  }
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

const getScoreColor = (score: number): string => {
  if (score >= 80) return 'text-green-600';
  if (score >= 60) return 'text-blue-600';
  if (score >= 40) return 'text-yellow-600';
  if (score >= 20) return 'text-orange-600';
  return 'text-red-600';
};

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

export const CountryRankingCard: React.FC<CountryRankingCardProps> = ({
  score,
  rank,
  onViewDetails,
  onViewFlowchart,
}) => {
  const viabilityColorClass = getViabilityColor(score.viabilityLevel);
  const riskColorClass = getRiskColor(score.overallRiskLevel);

  return (
    <div className="bg-white rounded-lg shadow-md border-2 border-gray-200 p-6 hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 font-bold text-gray-700">
            #{rank}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-bold text-gray-900">{score.countryName}</h3>
              <Badge
                variant={getBadgeVariant(score.viabilityLevel, score.meetsHardRequirements)}
                icon={score.meetsHardRequirements ? '✓' : '⚠️'}
              >
                {score.meetsHardRequirements
                  ? score.viabilityLevel.replace('_', ' ')
                  : 'Not Eligible'
                }
              </Badge>
            </div>
            <p className="text-sm text-gray-600">{score.recommendedProgram?.programName}</p>
          </div>
        </div>
        <div className={`px-4 py-2 rounded-lg border-2 font-semibold ${viabilityColorClass}`}>
          {score.overallScore}/100
        </div>
      </div>

      {/* Viability Level */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            {score.meetsHardRequirements ? 'Viability Level' : 'Overall Score'}
          </span>
          <span className={`text-sm font-semibold capitalize ${getScoreColor(score.overallScore)}`}>
            {score.viabilityLevel.replace('_', ' ')}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${
              score.overallScore >= 80
                ? 'bg-green-500'
                : score.overallScore >= 60
                ? 'bg-blue-500'
                : score.overallScore >= 40
                ? 'bg-yellow-500'
                : score.overallScore >= 20
                ? 'bg-orange-500'
                : 'bg-red-500'
            }`}
            style={{ width: `${score.overallScore}%` }}
          />
        </div>
        {!score.meetsHardRequirements && (
          <p className="text-xs text-gray-600 mt-1">
            Score capped at 25 due to missing requirements
            {score.competitiveScore > 25 && (
              <span className="text-gray-500"> (Competitive score: {score.competitiveScore})</span>
            )}
          </p>
        )}
      </div>

      {/* Missing Requirements */}
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
              <div className={`text-lg font-bold ${getScoreColor(value)}`}>{value}</div>
              <div className="text-xs text-gray-600 capitalize">{component}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Info */}
      {score.recommendedProgram && (
        <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-semibold text-blue-900">Recommended Program</span>
            <span className="text-xs px-2 py-1 bg-blue-200 text-blue-800 rounded capitalize">
              {score.recommendedProgram.programType.replace('_', ' ')}
            </span>
          </div>
          <p className="text-sm text-blue-800">{score.recommendedProgram.matchReason}</p>
          {score.userPreferenceBoost !== 0 && (
            <p className="text-xs text-blue-700 mt-1">
              Preference boost: {score.userPreferenceBoost > 0 ? '+' : ''}
              {score.userPreferenceBoost} points
            </p>
          )}
        </div>
      )}

      {/* Risk Level */}
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Overall Risk</span>
          <span className={`text-sm font-semibold capitalize ${riskColorClass}`}>
            {score.overallRiskLevel}
          </span>
        </div>
        {score.riskFactors.length > 0 && (
          <p className="text-xs text-gray-600 mt-1">
            {score.riskFactors.length} risk factor{score.riskFactors.length !== 1 ? 's' : ''}{' '}
            identified
          </p>
        )}
      </div>

      {/* Timeline */}
      {score.estimatedTimelineMonths && (
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Estimated Timeline</span>
            <span className="text-sm text-gray-900">
              {score.estimatedTimelineMonths} month{score.estimatedTimelineMonths !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      )}

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
      <div className="grid grid-cols-1 gap-2 mt-2">
        <button
          onClick={() => onViewDetails(score.countryCode)}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          View Full Details
        </button>
        {onViewFlowchart && score.recommendedProgram && (
          <button
            onClick={() => onViewFlowchart(score.countryCode, score.recommendedProgram!.programId)}
            className="w-full px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center justify-center gap-2"
          >
            <span>📋</span>
            <span>View Flowchart</span>
          </button>
        )}
      </div>
    </div>
  );
};

