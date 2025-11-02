import React from 'react';
import type { ComponentScore } from '../../types/viability';
import { getScoreColorClass } from '../../constants/viability';

interface ScoreBreakdownProps {
  componentScores: ComponentScore;
  programWeights?: {
    career: number;
    financial: number;
    education: number;
    language: number;
    family: number;
  };
}

const getScoreLabel = (score: number): string => {
  if (score >= 80) return 'Excellent';
  if (score >= 60) return 'Good';
  if (score >= 40) return 'Moderate';
  if (score >= 20) return 'Low';
  return 'Very Low';
};

const componentLabels: Record<string, string> = {
  career: 'Career',
  financial: 'Financial',
  education: 'Education',
  language: 'Language',
  family: 'Family',
};

const componentDescriptions: Record<string, string> = {
  career: 'Work experience, occupation demand, job offer status',
  financial: 'Income, savings, cost of living alignment',
  education: 'Education level, field of study relevance',
  language: 'Language proficiency and learning potential',
  family: 'Family ties, marital status, adaptability',
};

export const ScoreBreakdown: React.FC<ScoreBreakdownProps> = ({
  componentScores,
  programWeights,
}) => {
  const components = Object.entries(componentScores) as [keyof ComponentScore, number][];
  const [hoveredComponent, setHoveredComponent] = React.useState<string | null>(null);

  return (
    <div className="bg-white border-2 border-black p-6">
      <h3 className="text-h3 font-bold text-black mb-6 uppercase tracking-wide">Component Scores</h3>
      <div className="mt-6 grid grid-cols-1">
        {components.map(([component, score]) => {
          const weight = programWeights?.[component];
          const weightedScore = weight ? score * weight : score;
          const isHovered = hoveredComponent === component;

          return (
            <div
              key={component}
              className="relative group"
              onMouseEnter={() => setHoveredComponent(component)}
              onMouseLeave={() => setHoveredComponent(null)}
              onFocus={() => setHoveredComponent(component)}
              onBlur={() => setHoveredComponent(null)}
              tabIndex={0}
              role="button"
              aria-label={`${componentLabels[component]} score: ${score}. ${componentDescriptions[component]}`}
            >
              {/* Component Header - Compact */}
              <div className="absolute top-0 left-0 w-full px-1">
                <div className="flex items-center justify-between mb-1 w-full h-3">
                  <div className={`text-data-xl text-6xl font-bold text-white flex gap-1 items-center tracking-tight mt-2`}>
                    {score}
                    <h4 className="font-bold uppercase text-label text-black opacity-75 tracking-wider font-sans">
                      {componentLabels[component]}
                    </h4>
                    {/* Info icon for tooltip indicator */}
                    <svg
                      className="w-3 h-3 text-gray-500 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-label-sm uppercase mt-2">{getScoreLabel(score)}</div>
                </div>
              </div>

              {/* Progress Bar - Compact */}
              <div className="w-full bg-gray-200 h-5 mb-2">
                <div
                  className={`h-full ${getScoreColorClass(score)} transition-all duration-500`}
                  style={{ width: `${score}%` }}
                />
              </div>

              {/* Tooltip - Shows on hover/focus, always accessible to screen readers */}
              <div
                className={`absolute left-0 right-0 bottom-full mb-2 px-3 py-2 bg-black text-white text-xs leading-tight border-2 border-black z-10 transition-opacity duration-200 ${
                  isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                role="tooltip"
                aria-hidden={!isHovered}
              >
                {componentDescriptions[component]}
                {/* Tooltip arrow */}
                <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black"></div>
              </div>

              {/* Screen reader only description */}
              <span className="sr-only">{componentDescriptions[component]}</span>

              {/* Weight Info - Compact */}
              {weight !== undefined && (
                <div className="text-xs text-gray-700 space-y-0.5 mt-2">
                  <div>Weight: {Math.round(weight * 100)}%</div>
                  <div>Weighted: {Math.round(weightedScore)}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Overall Summary */}
      <div className="mt-6 pt-4 border-t-2 border-black">
        <div className="flex items-center justify-between">
          <span className="font-bold text-black uppercase text-body tracking-wide">Average Score</span>
          <span className="text-h2 font-bold text-black">
            {Math.round(
              components.reduce((sum, [, score]) => sum + score, 0) / components.length
            )}
            /100
          </span>
        </div>
      </div>
    </div>
  );
};

