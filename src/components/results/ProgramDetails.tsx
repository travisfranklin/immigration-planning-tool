/**
 * ProgramDetails Component
 * 
 * Displays detailed information about a selected visa program.
 * Used in the program header section below the tabs.
 * 
 * Design:
 * - Bold primary background for visual prominence
 * - Grid layout for key metrics
 * - Shows match reason and eligibility info
 */

import React from 'react';
import type { ProgramViabilityData } from '../../types/viability';

interface ProgramDetailsProps {
  program: ProgramViabilityData;
  isRecommended: boolean;
}

/**
 * Format program type for display
 */
function formatProgramType(type: string): string {
  return type.replace(/_/g, ' ');
}

export const ProgramDetails: React.FC<ProgramDetailsProps> = ({
  program,
  isRecommended,
}) => {
  return (
    <div className="bg-primary border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 py-8">
        {/* Program Header */}
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h2 className="text-label uppercase font-bold text-white">
            {isRecommended ? 'Recommended Visa Program' : 'Alternative Visa Program'}
          </h2>
          {!isRecommended && program.whyNotRecommended && (
            <span className="text-label-sm bg-white/20 text-white px-3 py-1">
              {program.whyNotRecommended}
            </span>
          )}
        </div>

        {/* Program Name */}
        <h3 className="text-h1 font-bold text-white mb-3 uppercase tracking-tight break-words">
          {program.programName}
        </h3>

        {/* Match Reason */}
        <p className="text-body-lg text-white mb-6">{program.matchReason}</p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-label-sm uppercase font-bold text-primary-200 mb-1">Type</div>
            <div className="text-body font-bold text-white capitalize">
              {formatProgramType(program.programType)}
            </div>
          </div>
          <div>
            <div className="text-label-sm uppercase font-bold text-primary-200 mb-1">Eligibility Score</div>
            <div className="text-body font-bold text-white">{program.eligibilityScore}/100</div>
          </div>
          <div>
            <div className="text-label-sm uppercase font-bold text-primary-200 mb-1">Job Offer Required</div>
            <div className="text-body font-bold text-white">
              {program.requiresJobOffer ? 'Yes' : 'No'}
            </div>
          </div>
          <div>
            <div className="text-label-sm uppercase font-bold text-primary-200 mb-1">Timeline</div>
            <div className="text-body font-bold text-white">{program.estimatedTimelineMonths} months</div>
          </div>
        </div>

        {/* Missing Requirements Warning (if not eligible) */}
        {!program.meetsHardRequirements && program.missingRequirements && program.missingRequirements.length > 0 && (
          <div className="mt-6 bg-white/10 border-2 border-white/30 p-4">
            <div className="text-label uppercase font-bold text-warning mb-2">
              ⚠ Missing Requirements
            </div>
            <ul className="list-disc list-inside text-body-sm text-white/90 space-y-1">
              {program.missingRequirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

