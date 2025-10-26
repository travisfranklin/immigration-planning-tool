/**
 * Input Component
 * Reusable input field component with label and error support
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
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {props.required && <span className="text-danger-600 ml-1">*</span>}
        </label>
      )}

      <input
        id={inputId}
        className={`
          w-full px-3 py-2 border rounded-lg
          focus:outline-none focus:ring-2 focus:ring-primary-500
          transition-colors
          ${error ? 'border-danger-600 focus:ring-danger-500' : 'border-gray-300'}
          ${className}
        `}
        {...props}
      />

      {error && (
        <p className="text-sm text-danger-600 mt-1">{error}</p>
      )}

      {helperText && !error && (
        <p className="text-sm text-gray-500 mt-1">{helperText}</p>
      )}
    </div>
  );
}

