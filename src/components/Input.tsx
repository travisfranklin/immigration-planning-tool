/**
 * Input Component
 *
 * Bold, minimalist input field following German functionalism
 *
 * Design Principles:
 * - Sharp corners (no border-radius)
 * - Thick borders (2px default, 4px focus)
 * - Clear focus states (accent color border)
 * - High contrast
 * - Uppercase, bold labels
 * - No decorative effects
 */

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function Input({
  label,
  error,
  helperText,
  className = '',
  id,
  ...props
}: InputProps) {
  const inputId = id || `input-${Math.random().toString(36).substring(2, 11)}`;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-label uppercase font-bold tracking-wide text-black mb-1">
          {label}
          {props.required && <span className="text-danger ml-1">*</span>}
        </label>
      )}

      <input
        id={inputId}
        className={`
          w-full px-3 py-2 border-2 text-body-sm
          focus:outline-none focus:border-4 focus:border-accent
          transition-all duration-fast
          ${error ? 'border-danger focus:border-danger' : 'border-black'}
          ${props.disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-white text-black'}
          ${className}
        `}
        {...props}
      />

      {error && (
        <p className="text-body-sm text-danger mt-1 font-medium">{error}</p>
      )}

      {helperText && !error && (
        <p className="text-body-sm text-gray-700 mt-1">{helperText}</p>
      )}
    </div>
  );
}

