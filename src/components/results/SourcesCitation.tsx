/**
 * SourcesCitation Component
 *
 * Displays official government sources for the active visa program.
 * Updates dynamically when user selects different program tabs.
 *
 * Design Principles:
 * - Sharp corners (no border-radius)
 * - Bold typography
 * - 2px borders
 * - Numbered list structure (future-ready for multiple sources)
 * - Minimal, functional design (German/Scandinavian principles)
 */

import React, { useMemo } from 'react';
import { ALL_VISA_PROGRAMS } from '../../data/visaPrograms';

interface SourcesCitationProps {
  programId: string; // Active program ID (changes when user selects different tab)
}

/**
 * Source item interface for future expansion
 */
interface SourceItem {
  label: string;
  url: string;
}

export const SourcesCitation: React.FC<SourcesCitationProps> = ({ programId }) => {
  // Look up the program from ALL_VISA_PROGRAMS
  const program = useMemo(() => {
    return ALL_VISA_PROGRAMS.find((p) => p.id === programId);
  }, [programId]);

  // Build sources array (currently single source, future-ready for multiple)
  const sources: SourceItem[] = useMemo(() => {
    if (!program?.officialUrl) return [];
    return [
      {
        label: `${program.name} — Official Government Site`,
        url: program.officialUrl,
      },
    ];
  }, [program]);

  // No sources available
  if (sources.length === 0) {
    return (
      <div className="bg-white border-2 border-black p-6">
        <h3 className="text-h3 font-bold text-black mb-4 uppercase tracking-wide">Sources</h3>
        <div className="bg-neutral-100 border-2 border-neutral-300 p-6 text-center">
          <p className="text-body text-neutral-600">
            No official source available for this program.
          </p>
          <p className="text-body-sm text-neutral-500 mt-2">
            We recommend searching for official government immigration portals for the most accurate information.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border-2 border-black p-6">
      <h3 className="text-h3 font-bold text-black mb-4 uppercase tracking-wide">Sources</h3>
      <p className="text-body-sm text-gray-700 mb-6">
        Official government information for this program
      </p>

      <div className="space-y-4">
        {sources.map((source, index) => (
          <div key={source.url} className="border-2 border-black">
            {/* Source Header */}
            <div className="w-full bg-black min-h-6 flex justify-start items-center">
              {/* Numbered Badge */}
              <div className="flex items-center justify-center w-6 sm:w-10 sm:h-10 font-bold text-white flex-shrink-0">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h4 className="font-medium text-white uppercase tracking-wide leading-none pr-4">
                {source.label}
              </h4>
            </div>

            {/* Source Link */}
            <div className="p-4">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-700 font-medium transition-colors"
              >
                <span>Visit Official Source</span>
                {/* External Link Icon */}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <p className="text-body-sm text-gray-500 mt-2 break-all">{source.url}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

