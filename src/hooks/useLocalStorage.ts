/**
 * useLocalStorage Hook
 * Generic hook for managing localStorage with React state
 */

import { useState, useEffect, useCallback } from 'react';

interface UseLocalStorageReturn<T> {
  value: T | null;
  loading: boolean;
  error: Error | null;
  setValue: (value: T) => void;
  removeValue: () => void;
}

export function useLocalStorage<T>(key: string, initialValue?: T): UseLocalStorageReturn<T> {
  const [value, setValue] = useState<T | null>(initialValue || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setValue(JSON.parse(item));
      } else if (initialValue !== undefined) {
        setValue(initialValue);
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load from localStorage'));
    } finally {
      setLoading(false);
    }
  }, [key, initialValue]);

  const setStorageValue = useCallback(
    (newValue: T) => {
      try {
        setValue(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue));
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to save to localStorage'));
      }
    },
    [key]
  );

  const removeStorageValue = useCallback(() => {
    try {
      setValue(null);
      window.localStorage.removeItem(key);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to remove from localStorage'));
    }
  }, [key]);

  return {
    value,
    loading,
    error,
    setValue: setStorageValue,
    removeValue: removeStorageValue,
  };
}

