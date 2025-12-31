/**
 * ProgramTabs Component
 * 
 * Horizontal scrollable tabs for selecting between visa programs.
 * Shows recommended program first, followed by alternatives.
 * 
 * Design:
 * - Primary-dark background with white text for active tab
 * - Horizontal scroll for mobile/many programs
 * - Clear visual distinction between recommended and alternatives
 */

import React, { useRef, useEffect } from 'react';
import type { ProgramViabilityData } from '../../types/viability';

interface ProgramTabsProps {
  recommendedProgram: ProgramViabilityData;
  alternativePrograms: ProgramViabilityData[];
  selectedProgramId: string;
  onSelectProgram: (programId: string) => void;
}

export const ProgramTabs: React.FC<ProgramTabsProps> = ({
  recommendedProgram,
  alternativePrograms,
  selectedProgramId,
  onSelectProgram,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const selectedTabRef = useRef<HTMLButtonElement>(null);

  // Combine all programs
  const allPrograms = [recommendedProgram, ...alternativePrograms];

  // Scroll selected tab into view when selection changes
  useEffect(() => {
    if (selectedTabRef.current && scrollContainerRef.current) {
      selectedTabRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [selectedProgramId]);

  return (
    <div className="bg-primary-dark border-t-4 border-b-4 border-black">
      <div className="max-w-7xl mx-auto">
        {/* Tabs Container - Horizontally scrollable */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {allPrograms.map((program, index) => {
            const isSelected = program.programId === selectedProgramId;
            const isRecommended = index === 0;

            return (
              <button
                key={program.programId}
                ref={isSelected ? selectedTabRef : null}
                onClick={() => onSelectProgram(program.programId)}
                className={`
                  flex-shrink-0 px-6 py-4 font-bold uppercase text-label tracking-wide
                  transition-colors whitespace-nowrap border-r-2 border-black/20
                  ${isSelected
                    ? 'bg-white text-primary-dark'
                    : 'bg-primary-dark text-white hover:bg-primary-dark/80'
                  }
                `}
              >
                <div className="flex items-center gap-2">
                  {/* Recommended badge */}
                  {isRecommended && (
                    <span className={`text-xs px-2 py-0.5 ${
                      isSelected ? 'bg-primary-dark text-white' : 'bg-white/20 text-white'
                    }`}>
                      ★
                    </span>
                  )}
                  <span className="break-words">{program.programName}</span>
                  <span className={`text-sm ${isSelected ? 'text-gray-600' : 'text-white/70'}`}>
                    {program.eligibilityScore}/100
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

