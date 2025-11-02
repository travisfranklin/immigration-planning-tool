import React from 'react';
import type { ViabilityScore } from '../../types/viability';
import { Badge } from '../Badge';
import type { BadgeVariant } from '../Badge';
import { DataCard } from '../DataCard';
import { getDataCardVariant } from '../../constants/viability';

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

export const CountryResultsTable: React.FC<CountryResultsTableProps> = ({
  scores,
  onViewDetails,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {scores.map((score, index) => {
        const rank = index + 1;

        return (
          <div key={score.id} className="relative">
            <DataCard
              title={`#${rank} ${score.countryCode} ${score.countryName}`}
              value={score.overallScore}
              unit="/100"
              subtitle={score.recommendedProgram?.programName || 'No program available'}
              variant={getDataCardVariant(score.overallScore)}
            >
            {/* Viability Badge */}
            <div className="mb-4">
              <Badge
                variant={getBadgeVariant(score.viabilityLevel, score.meetsHardRequirements)}
                icon={score.meetsHardRequirements ? '✓' : '⚠️'}
              >
                {score.meetsHardRequirements
                  ? score.viabilityLevel.replace('_', ' ')
                  : 'Not Eligible'}
              </Badge>
            </div>

            {/* Quick Stats */}
            <div className="space-y-2 text-body-sm mb-4">
              <div className="flex justify-between">
                <span className="text-gray-700 font-semibold">Timeline:</span>
                <span className="text-black">{score.estimatedTimelineMonths} months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-semibold">Risk:</span>
                <span className="text-black capitalize">{score.overallRiskLevel}</span>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(score.countryCode);
              }}
              className="w-full px-4 py-2 bg-primary text-white border-2 border-primary hover:bg-white hover:text-primary transition-colors font-bold uppercase text-label"
            >
              View Details →
            </button>
          </DataCard>
          </div>
        );
      })}
    </div>
  );
};

