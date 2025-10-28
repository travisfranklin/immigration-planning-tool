/**
 * Progress Bar Helper Functions
 */

import type { ProgressBarProps } from '../components/ProgressBar';

/**
 * Automatically determine variant based on progress value
 */
export function getVariantFromProgress(value: number, max: number = 100): ProgressBarProps['variant'] {
  const percentage = (value / max) * 100;
  
  if (percentage >= 80) return 'primary';   // High progress (80-100%)
  if (percentage >= 60) return 'success';   // Good progress (60-79%)
  if (percentage >= 40) return 'warning';   // Medium progress (40-59%)
  if (percentage >= 0) return 'danger';     // Low progress (0-39%)
  return 'neutral';
}

