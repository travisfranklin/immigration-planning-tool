/**
 * DataCard Component
 * 
 * Bold, data-driven card for displaying metrics with oversized numbers
 * 
 * Design Principles:
 * - Oversized numbers (64px monospace)
 * - Color coding by score range
 * - Sharp corners (no border-radius)
 * - 2px solid black border
 * - No shadows (flat, honest design)
 * - Generous padding (32px)
 * - Uppercase, bold labels
 * - High contrast
 */

import React from 'react';

export interface DataCardProps {
  /** Main title/label */
  title: string;
  /** Large metric value to display */
  value: number | string;
  /** Optional unit (e.g., "%", "pts", "days") */
  unit?: string;
  /** Optional subtitle/description */
  subtitle?: string;
  /** Optional color variant based on score range */
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
  /** Optional additional content below the main value */
  children?: React.ReactNode;
  /** Optional className for custom styling */
  className?: string;
}

/**
 * Get color classes based on variant
 */
function getVariantClasses(variant: DataCardProps['variant']): string {
  switch (variant) {
    case 'primary':
      // Electric Indigo - High scores, important milestones
      return 'text-primary border-primary';
    case 'success':
      // Aquamarine - Positive feedback, good scores
      return 'text-success border-success';
    case 'warning':
      // Orange Peel - Warnings, medium scores
      return 'text-warning border-warning';
    case 'danger':
      // Red-Orange - Errors, low scores
      return 'text-danger border-danger';
    case 'neutral':
    default:
      // Black - Neutral, default
      return 'text-black border-black';
  }
}

/**
 * Automatically determine variant based on numeric value (0-100 scale)
 */
// eslint-disable-next-line react-refresh/only-export-components
export function getVariantFromScore(score: number): DataCardProps['variant'] {
  if (score >= 80) return 'primary';  // High scores (80-100)
  if (score >= 60) return 'success';  // Good scores (60-79)
  if (score >= 40) return 'warning';  // Medium scores (40-59)
  if (score >= 0) return 'danger';    // Low scores (0-39)
  return 'neutral';
}

export function DataCard({
  title,
  value,
  unit,
  subtitle,
  variant = 'neutral',
  children,
  className = '',
}: DataCardProps) {
  const variantClasses = getVariantClasses(variant);

  return (
    <div className={`bg-white border-2 ${variantClasses} p-4 ${className}`}>
      {/* Title - Uppercase, bold */}
      <h3 className="text-label uppercase font-bold tracking-wide text-black mb-2">
        {title}
      </h3>

      {/* Main Value - Oversized, monospace */}
      <div className="flex items-baseline gap-1 mb-2">
        <span className={`text-data-lg font-bold font-mono ${variantClasses.split(' ')[0]}`}>
          {value}
        </span>
        {unit && (
          <span className={`text-h3 font-bold font-mono ${variantClasses.split(' ')[0]}`}>
            {unit}
          </span>
        )}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-body-sm text-gray-700 mb-3">
          {subtitle}
        </p>
      )}

      {/* Additional Content */}
      {children && (
        <div className="mt-3 pt-3 border-t-2 border-black">
          {children}
        </div>
      )}
    </div>
  );
}

