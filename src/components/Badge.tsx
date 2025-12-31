/**
 * Badge Component
 *
 * Bold, minimalist status indicators following German functionalism
 *
 * Design Principles:
 * - Sharp corners (no border-radius)
 * - Bold colors from design system
 * - Uppercase text
 * - High contrast
 * - 2px border
 * - No decorative effects
 */

import React from 'react';

export type BadgeVariant =
  | 'not-eligible'
  | 'excellent'
  | 'good'
  | 'moderate'
  | 'low'
  | 'very-low'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  // Viability score variants
  'not-eligible': 'bg-danger text-white border-danger',
  'excellent': 'bg-success-dark text-black border-success-dark',  // Aquamarine (80-100)
  'good': 'bg-primary text-white border-primary',                 // Electric Indigo (60-79)
  'moderate': 'bg-warning text-black border-warning',             // Orange Peel (40-59)
  'low': 'bg-danger text-white border-danger',                    // Red-Orange (20-39)
  'very-low': 'bg-danger text-white border-danger',               // Red-Orange (0-19)

  // Generic status variants
  'success': 'bg-success text-black border-success',        // Aquamarine
  'warning': 'bg-warning text-black border-warning',        // Orange Peel
  'danger': 'bg-danger text-white border-danger',           // Red-Orange
  'info': 'bg-primary text-white border-primary',           // Electric Indigo
};

export function Badge({
  variant,
  children,
  icon,
  className = '',
  ariaLabel,
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center gap-1 px-2 py-1 border-2 text-label font-bold uppercase tracking-wide';
  const variantStyle = variantStyles[variant];

  return (
    <span
      className={`${baseStyles} ${variantStyle} ${className}`}
      role="status"
      aria-label={ariaLabel || `Status: ${children}`}
    >
      {icon && <span className="inline-flex items-center">{icon}</span>}
      {children}
    </span>
  );
}

