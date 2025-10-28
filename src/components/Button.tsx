/**
 * Button Component
 *
 * Bold, minimalist button following German functionalism and Scandinavian design
 *
 * Design Principles:
 * - Sharp corners (no border-radius)
 * - Bold, uppercase text
 * - Generous padding
 * - High contrast colors
 * - No shadows or decorative effects
 * - Functional hover states (color inversion)
 */

import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  // Primary - Electric Indigo background, snow text
  primary: 'bg-primary text-white border-2 border-primary hover:bg-white hover:text-primary',

  // Secondary - Snow background, black border and text
  secondary: 'bg-white text-black border-2 border-black hover:bg-black hover:text-white',

  // Danger - Red-Orange background, snow text
  danger: 'bg-danger text-white border-2 border-danger hover:bg-white hover:text-danger',

  // Success - Aquamarine background, black text
  success: 'bg-success text-black border-2 border-success hover:bg-white hover:text-success hover:border-success',

  // Warning - Orange Peel background, black text
  warning: 'bg-warning text-black border-2 border-warning hover:bg-white hover:text-warning hover:border-warning',

  // Ghost - Transparent background, black text
  ghost: 'bg-transparent text-black border-2 border-transparent hover:border-black',
};

const sizeClasses: Record<ButtonSize, string> = {
  // Generous padding following 8px spacing system
  sm: 'px-3 py-1 text-label',      // 24px x 8px, 12px text
  md: 'px-4 py-2 text-body-sm',    // 32px x 16px, 14px text
  lg: 'px-8 py-3 text-body',       // 64px x 24px, 16px text
};

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  // Base classes: sharp corners, bold uppercase text, no transitions
  const baseClasses = 'font-bold uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-fast';
  const variantClass = variantClasses[variant];
  const sizeClass = sizeClasses[size];

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseClasses} ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 border-2 border-current border-t-transparent animate-spin" />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}

