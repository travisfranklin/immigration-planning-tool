import React from 'react';
import type { ComponentScore } from '../../types/viability';
import {
  getScoreColorClass,
  getScoreLabel,
  COMPONENT_LABELS,
  COMPONENT_DESCRIPTIONS,
  type ComponentScoreType
} from '../../constants/viability';

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

export const ScoreBreakdown: React.FC<ScoreBreakdownProps> = ({
  componentScores,
  programWeights,
}) => {
  const components = Object.entries(componentScores) as [keyof ComponentScore, number][];
  const [hoveredComponent, setHoveredComponent] = React.useState<string | null>(null);

  return (
    <div className="bg-white border-2 border-black p-6">
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
              aria-label={`${COMPONENT_LABELS[component as ComponentScoreType]} score: ${score}. ${COMPONENT_DESCRIPTIONS[component as ComponentScoreType]}`}
            >
              {/* Component Header - Compact */}
              <div className="absolute top-0 left-0 w-full px-1">
                <div className="flex items-center justify-between mb-1 w-full h-3">
                  <div className={`text-data-xl text-6xl font-bold text-white flex gap-1 items-center tracking-tight mt-2`}>
                    {score}
                    <h4 className="font-bold uppercase text-label text-black opacity-75 tracking-wider font-sans">
                      {COMPONENT_LABELS[component as ComponentScoreType]}
                    </h4>
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
                className={`absolute flex items-center top-0 left-0 px-2 right-0 bottom-full h-5 bg-black text-white text-xs border-2 border-black z-10 transition-opacity font-bold ${
                  isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                role="tooltip"
                aria-hidden={!isHovered}
              >
                {COMPONENT_DESCRIPTIONS[component as ComponentScoreType]}
              </div>

              {/* Screen reader only description */}
              <span className="sr-only">{COMPONENT_DESCRIPTIONS[component as ComponentScoreType]}</span>

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

