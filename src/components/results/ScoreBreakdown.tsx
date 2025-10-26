import React from 'react';
import type { ComponentScore } from '../../types/viability';

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

const getScoreColor = (score: number): string => {
  if (score >= 80) return 'bg-green-500';
  if (score >= 60) return 'bg-blue-500';
  if (score >= 40) return 'bg-yellow-500';
  if (score >= 20) return 'bg-orange-500';
  return 'bg-red-500';
};

const getScoreTextColor = (score: number): string => {
  if (score >= 80) return 'text-green-600';
  if (score >= 60) return 'text-blue-600';
  if (score >= 40) return 'text-yellow-600';
  if (score >= 20) return 'text-orange-600';
  return 'text-red-600';
};

const getScoreLabel = (score: number): string => {
  if (score >= 80) return 'Excellent';
  if (score >= 60) return 'Good';
  if (score >= 40) return 'Moderate';
  if (score >= 20) return 'Low';
  return 'Very Low';
};

const componentIcons: Record<string, string> = {
  career: '💼',
  financial: '💰',
  education: '🎓',
  language: '🗣️',
  family: '👨‍👩‍👧‍👦',
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
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Component Score Breakdown</h3>

      <div className="space-y-4">
        {components.map(([component, score]) => {
          const weight = programWeights?.[component];
          const weightedScore = weight ? score * weight : score;

          return (
            <div key={component} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
              {/* Component Header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{componentIcons[component]}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 capitalize">{component}</h4>
                    <p className="text-xs text-gray-600">{componentDescriptions[component]}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold ${getScoreTextColor(score)}`}>{score}</div>
                  <div className="text-xs text-gray-600">{getScoreLabel(score)}</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div
                  className={`h-3 rounded-full ${getScoreColor(score)} transition-all duration-500`}
                  style={{ width: `${score}%` }}
                />
              </div>

              {/* Weight Info */}
              {weight !== undefined && (
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>Weight: {Math.round(weight * 100)}%</span>
                  <span>Weighted Score: {Math.round(weightedScore)}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Overall Summary */}
      <div className="mt-6 pt-4 border-t border-gray-300">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-700">Average Score</span>
          <span className="text-xl font-bold text-gray-900">
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

