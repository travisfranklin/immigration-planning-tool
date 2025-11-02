/**
 * ScoreDisplay Component
 * 
 * Custom score visualization with large numbers and bold progress indicator
 * 
 * Design Principles:
 * - Oversized numbers (64px monospace)
 * - Bold progress bar with sharp corners
 * - Color-coded by score range
 * - High contrast
 * - Minimal, functional design
 */

export interface ScoreDisplayProps {
  /** Score value (0-100) */
  score: number;
  /** Optional label */
  label?: string;
  /** Optional maximum value (default: 100) */
  maxScore?: number;
  /** Show progress bar */
  showProgress?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Optional className for custom styling */
  className?: string;
}

import { getScoreColorClasses, getScoreLabel } from '../../constants/viability';

/**
 * Get size classes
 */
function getSizeClasses(size: ScoreDisplayProps['size']): {
  number: string;
  label: string;
  progressHeight: string;
} {
  switch (size) {
    case 'sm':
      return {
        number: 'text-data-sm',
        label: 'text-label-sm',
        progressHeight: 'h-2',
      };
    case 'lg':
      return {
        number: 'text-data-lg',
        label: 'text-label',
        progressHeight: 'h-4',
      };
    case 'md':
    default:
      return {
        number: 'text-data',
        label: 'text-label',
        progressHeight: 'h-3',
      };
  }
}

export function ScoreDisplay({
  score,
  label,
  maxScore = 100,
  showProgress = true,
  size = 'md',
  className = '',
}: ScoreDisplayProps) {
  const colors = getScoreColorClasses(score);
  const sizes = getSizeClasses(size);
  const percentage = (score / maxScore) * 100;
  const scoreLabel = getScoreLabel(score);

  return (
    <div className={`${className}`}>
      {/* Label */}
      {label && (
        <div className={`${sizes.label} uppercase font-bold tracking-wide text-black mb-2`}>
          {label}
        </div>
      )}

      {/* Score Number */}
      <div className="flex items-baseline gap-2 mb-2">
        <span className={`${sizes.number} font-bold font-mono ${colors.text}`}>
          {score}
        </span>
        <span className="text-h4 font-bold text-gray-700">/{maxScore}</span>
        <span className={`${sizes.label} uppercase font-bold ${colors.text} ml-2`}>
          {scoreLabel}
        </span>
      </div>

      {/* Progress Bar */}
      {showProgress && (
        <div className={`w-full bg-gray-200 ${sizes.progressHeight} border-2 border-black`}>
          <div
            className={`${colors.bg} ${sizes.progressHeight} transition-all duration-500`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      )}
    </div>
  );
}

