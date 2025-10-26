/**
 * Badge Component
 * Displays status indicators with different variants
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
  'not-eligible': 'text-danger-600',
  'excellent': 'text-emerald-600',
  'good': 'text-blue-600',
  'moderate': 'text-amber-600',
  'low': 'text-orange-600',
  'very-low': 'text-red-500',
  'success': 'text-emerald-500',
  'warning': 'text-amber-500',
  'danger': 'text-red-500',
  'info': 'text-blue-500',
};

export function Badge({ 
  variant, 
  children, 
  icon, 
  className = '',
  ariaLabel,
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-semibold uppercase tracking-wide';
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

