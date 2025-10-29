/**
 * Select Component
 *
 * Bold, minimalist select/dropdown following German functionalism
 *
 * Design Principles:
 * - Sharp corners (no border-radius)
 * - Thick borders (2px default, 4px focus)
 * - Clear focus states (primary color border)
 * - High contrast
 * - Uppercase, bold labels
 * - Bold, geometric dropdown icon from Heroicons
 * - No decorative effects
 */

import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: SelectOption[];
  placeholder?: string;
}

export function Select({
  label,
  error,
  helperText,
  options,
  placeholder,
  className = '',
  id,
  ...props
}: SelectProps) {
  const selectId = id || `select-${Math.random().toString(36).substring(2, 11)}`;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={selectId} className="block text-label uppercase font-bold tracking-wide text-black mb-1">
          {label}
          {props.required && <span className="text-danger ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <select
          id={selectId}
          className={`
            w-full px-3 py-2 pr-10 border-2 text-body-sm
            focus:outline-none focus:border-4 focus:border-primary
            transition-all duration-fast
            appearance-none
            ${error ? 'border-danger focus:border-danger' : 'border-black'}
            ${props.disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-black'}
            ${className}
          `}
          {...props}
        >
          {placeholder && (
            <option value="">{placeholder}</option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Dropdown icon - Heroicons chevron */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <ChevronDownIcon className="w-6 h-6 text-black" strokeWidth={2.5} />
        </div>
      </div>

      {error && (
        <p className="text-body-sm text-danger mt-1 font-medium">{error}</p>
      )}

      {helperText && !error && (
        <p className="text-body-sm text-gray-700 mt-1">{helperText}</p>
      )}
    </div>
  );
}

