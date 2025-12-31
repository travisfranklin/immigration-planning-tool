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
    <div className="bg-primary-dark border-t-4 border-b-4 border-black w-full max-w-full overflow-hidden">
      {/* Tabs Container - Touch swipeable on mobile, scrollable on desktop */}
      <div
        ref={scrollContainerRef}
        className="flex w-full max-w-full overflow-x-scroll overscroll-x-contain snap-x snap-mandatory touch-pan-x scrollbar-hide"
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
                  flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 font-bold uppercase text-xs sm:text-label tracking-wide
                  transition-colors whitespace-nowrap border-r-2 border-black/20 snap-start
                  ${isSelected
                    ? 'bg-white text-primary-dark'
                    : 'bg-primary-dark text-white hover:bg-primary-dark/80'
                  }
                `}
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {/* Recommended badge */}
                  {isRecommended && (
                    <span className={`text-xs px-1.5 sm:px-2 py-0.5 ${
                      isSelected ? 'bg-primary-dark text-white' : 'bg-white/20 text-white'
                    }`}>
                      ★
                    </span>
                  )}
                  <span>{program.programName}</span>
                  <span className={`text-xs sm:text-sm ${isSelected ? 'text-gray-600' : 'text-white/70'}`}>
                    {program.eligibilityScore}
                  </span>
                </div>
              </button>
            );
          })}
      </div>
    </div>
  );
};

