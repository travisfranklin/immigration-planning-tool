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
      <div className="bg-white border-2 border-black p-4">
        <div className="flex items-center gap-3">
          <h3 className="text-label font-bold text-black uppercase tracking-wide">Sources</h3>
          <span className="text-body-sm text-neutral-500">—</span>
          <p className="text-body-sm text-neutral-500">
            No official source available for this program
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border-2 border-black p-4">
      <div className="flex items-start gap-3">
        <h3 className="text-label font-bold text-black uppercase tracking-wide flex-shrink-0">Sources</h3>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {sources.map((source, index) => (
            <a
              key={source.url}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-body-sm text-primary hover:text-primary-700 transition-colors group"
            >
              <span className="font-medium text-black">{String(index + 1)}.</span>
              <span className="group-hover:underline">{source.label}</span>
              {/* External Link Icon */}
              <svg
                className="w-3.5 h-3.5 flex-shrink-0"
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
          ))}
        </div>
      </div>
    </div>
  );
};

