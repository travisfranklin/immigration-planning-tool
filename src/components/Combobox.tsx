/**
 * Combobox Component
 * A combination of select dropdown and text input that allows users to:
 * - Select from predefined options
 * - Type to filter options
 * - Enter custom values not in the list
 */

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface ComboboxOption {
  value: string;
  label: string;
  category?: string;
}

interface ComboboxProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  options: ComboboxOption[];
  error?: string;
  helperText?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  id?: string;
}

export function Combobox({
  label,
  value,
  onChange,
  onBlur,
  options,
  error,
  helperText,
  placeholder = 'Type to search or enter custom value...',
  required = false,
  className = '',
  id,
}: ComboboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const comboboxId = id || `combobox-${Math.random().toString(36).substring(2, 11)}`;
  const optionClickedRef = useRef(false);

  // Update input value when prop value changes
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // Filter options based on input
  useEffect(() => {
    if (!inputValue) {
      setFilteredOptions(options);
      return;
    }

    const searchTerm = inputValue.toLowerCase();
    const filtered = options.filter(
      (option) =>
        option.label.toLowerCase().includes(searchTerm) ||
        option.value.toLowerCase().includes(searchTerm) ||
        option.category?.toLowerCase().includes(searchTerm)
    );
    setFilteredOptions(filtered);
  }, [inputValue, options]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        // Commit the current input value when clicking outside
        if (inputValue !== value) {
          onChange(inputValue);
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [inputValue, value, onChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setIsOpen(true);
  };

  const handleOptionClick = (option: ComboboxOption) => {
    optionClickedRef.current = true;
    setInputValue(option.value);
    onChange(option.value);
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const handleInputFocus = () => {
    optionClickedRef.current = false;
    setIsOpen(true);
  };

  const handleInputBlur = () => {
    // Delay to allow option click to register
    setTimeout(() => {
      // If an option was just clicked, don't call onChange again
      // because handleOptionClick already called it
      if (!optionClickedRef.current && inputValue !== value) {
        onChange(inputValue);
      }
      optionClickedRef.current = false;
      if (onBlur) {
        onBlur();
      }
    }, 200);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      setIsOpen(false);
      onChange(inputValue);
      inputRef.current?.blur();
    }
  };

  // Group options by category
  const groupedOptions = filteredOptions.reduce((acc, option) => {
    const category = option.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(option);
    return acc;
  }, {} as Record<string, ComboboxOption[]>);

  const hasResults = filteredOptions.length > 0;
  const showCustomOption = inputValue && !options.some(opt => opt.value.toLowerCase() === inputValue.toLowerCase());

  return (
    <div className="w-full" ref={containerRef}>
      {label && (
        <label htmlFor={comboboxId} className="block text-label uppercase font-bold tracking-wide text-black mb-1">
          {label}
          {required && <span className="text-danger ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <input
          ref={inputRef}
          id={comboboxId}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`
            w-full px-3 py-2 pr-10 border-2 text-body-sm
            focus:outline-none focus:border-4 focus:border-primary
            focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-opacity-30
            transition-all duration-fast
            bg-gray-200 text-black
            ${error ? 'border-danger focus:border-danger focus-visible:ring-danger focus-visible:ring-opacity-30' : 'border-black'}
            ${className}
          `}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={`${comboboxId}-listbox`}
          autoComplete="off"
        />

        {/* Dropdown icon - Heroicons chevron */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <ChevronDownIcon
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            strokeWidth={2.5}
          />
        </div>

        {/* Dropdown menu */}
        {isOpen && (
          <div
            id={`${comboboxId}-listbox`}
            role="listbox"
            className="absolute z-10 w-full mt-1 bg-white border-2 border-black max-h-60 overflow-auto"
          >
            {hasResults ? (
              Object.entries(groupedOptions).map(([category, categoryOptions]) => (
                <div key={category}>
                  {Object.keys(groupedOptions).length > 1 && (
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 bg-gray-50 sticky top-0">
                      {category}
                    </div>
                  )}
                  {categoryOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      role="option"
                      aria-selected={value === option.value}
                      onClick={() => handleOptionClick(option)}
                      className={`
                        w-full text-left px-3 py-2 hover:bg-primary-50 cursor-pointer
                        transition-colors
                        ${value === option.value ? 'bg-primary-100 text-primary-900' : 'text-gray-900'}
                      `}
                    >
                      <div className="font-medium">{option.label}</div>
                      {option.category && Object.keys(groupedOptions).length === 1 && (
                        <div className="text-xs text-gray-500">{option.category}</div>
                      )}
                    </button>
                  ))}
                </div>
              ))
            ) : (
              <div className="px-3 py-2 text-sm text-gray-500">
                No matching options found
              </div>
            )}

            {/* Custom value option */}
            {showCustomOption && (
              <>
                <div className="border-t border-gray-200 my-1"></div>
                <button
                  type="button"
                  onClick={() => {
                    onChange(inputValue);
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-primary-50 cursor-pointer transition-colors text-gray-900"
                >
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <span className="font-medium">Use custom: "{inputValue}"</span>
                  </div>
                </button>
              </>
            )}
          </div>
        )}
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

