/**
 * AlternativeProgramsList Component
 * 
 * Displays alternative visa programs using DataCard components.
 * Each program is clickable to view its flowchart if available.
 * 
 * Design:
 * - Uses DataCard for consistent styling with the rest of the app
 * - Color-coded by eligibility score
 * - Mobile-friendly with proper text wrapping
 * - Links to program flowcharts when available
 */

import React from 'react';
import { DataCard } from '../DataCard';
import { getDataCardVariant } from '../../constants/viability';
import { getFlowchart } from '../../data/flowcharts';
import { CountryCode, isValidCountryCode } from '../../constants/countries';
import type { VisaProgramType } from '../../types/viability';

export interface AlternativeProgram {
  programId: string;
  programName: string;
  programType: VisaProgramType;
  eligibilityScore: number;
  whyNotRecommended: string;
}

interface AlternativeProgramsListProps {
  programs: AlternativeProgram[];
  countryCode: string;
  onViewFlowchart?: (programId: string) => void;
}

/**
 * Format program type for display
 */
function formatProgramType(type: VisaProgramType): string {
  return type.replace(/_/g, ' ');
}

export const AlternativeProgramsList: React.FC<AlternativeProgramsListProps> = ({
  programs,
  countryCode,
  onViewFlowchart,
}) => {
  if (programs.length === 0) {
    return null;
  }

  // Check if flowchart exists for a program
  const hasFlowchart = (programId: string): boolean => {
    if (!isValidCountryCode(countryCode)) return false;
    const flowchart = getFlowchart(countryCode as CountryCode, programId);
    return !!flowchart;
  };

  return (
    <div className="bg-white border-2 border-black p-6">
      <h3 className="text-h3 font-bold text-black mb-4 uppercase tracking-wide">
        Alternative Programs
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {programs.map((program) => {
          const flowchartAvailable = hasFlowchart(program.programId);
          
          return (
            <DataCard
              key={program.programId}
              title={program.programName}
              value={program.eligibilityScore}
              unit="/100"
              subtitle={formatProgramType(program.programType)}
              variant={getDataCardVariant(program.eligibilityScore)}
              className="h-full"
            >
              {/* Why Not Recommended */}
              <p className="text-body-sm text-gray-700 mb-3 break-words">
                {program.whyNotRecommended}
              </p>
              
              {/* View Flowchart Button */}
              {flowchartAvailable && onViewFlowchart && (
                <button
                  onClick={() => onViewFlowchart(program.programId)}
                  className="w-full px-4 py-2 bg-primary text-white border-2 border-primary hover:bg-white hover:text-primary transition-colors font-bold uppercase text-label flex items-center justify-center gap-2"
                >
                  <span>📋</span>
                  <span>View Flowchart</span>
                </button>
              )}
              
              {/* No Flowchart Available Message */}
              {!flowchartAvailable && (
                <p className="text-body-sm text-gray-500 italic text-center">
                  Flowchart coming soon
                </p>
              )}
            </DataCard>
          );
        })}
      </div>
    </div>
  );
};

