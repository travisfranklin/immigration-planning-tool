import React from 'react';
import type { ComponentScore } from '../../types/viability';
import { getScoreColorClass, getScoreTextColorClass } from '../../constants/viability';

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

  return (
    <div className="bg-white border-2 border-black p-6">
      <h3 className="text-h3 font-bold text-black mb-6 uppercase tracking-wide">Component Scores</h3>

      <div className="space-y-6">
        {components.map(([component, score]) => {
          const weight = programWeights?.[component];
          const weightedScore = weight ? score * weight : score;

          return (
            <div key={component} className="border-b-2 border-gray-200 pb-4 last:border-b-0 last:pb-0">
              {/* Component Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-bold text-black uppercase text-body tracking-wide">{componentLabels[component]}</h4>
                  <p className="text-body-sm text-gray-700">{componentDescriptions[component]}</p>
                </div>
                <div className="text-right ml-4">
                  <div className={`text-data-sm font-bold ${getScoreTextColorClass(score)}`}>{score}</div>
                  <div className="text-label-sm text-gray-700 uppercase">{getScoreLabel(score)}</div>
                </div>
              </div>

              {/* Progress Bar - Bold, Sharp */}
              <div className="w-full bg-gray-200 h-3 border-2 border-black mb-2">
                <div
                  className={`h-full ${getScoreColorClass(score)} transition-all duration-500`}
                  style={{ width: `${score}%` }}
                />
              </div>

              {/* Weight Info */}
              {weight !== undefined && (
                <div className="flex items-center justify-between text-body-sm text-gray-700">
                  <span>Weight: {Math.round(weight * 100)}%</span>
                  <span>Weighted Score: {Math.round(weightedScore)}</span>
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

