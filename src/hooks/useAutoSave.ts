/**
 * useAutoSave Hook
 * Provides debounced auto-save functionality for form data
 */

import { useState, useRef, useEffect, useCallback } from 'react';
import type { UserProfile } from '@/types/user';

interface UseAutoSaveReturn {
  save: (data: Partial<UserProfile>) => void;
  saveNow: () => Promise<void>;
  isSaving: boolean;
  lastSaved: number | null;
  saveError: Error | null;
}

type SaveFunction = (data: Partial<UserProfile>) => Promise<void>;

/**
 * Hook for debounced auto-save functionality
 * @param debounceDelay - Delay in milliseconds before saving (default: 1000)
 * @param onSave - Callback function to handle the save operation
 * @returns Object with save methods and state
 */
export function useAutoSave(
  debounceDelay: number = 1000,
  onSave?: SaveFunction
): UseAutoSaveReturn {
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<number | null>(null);
  const [saveError, setSaveError] = useState<Error | null>(null);

  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const pendingDataRef = useRef<Partial<UserProfile> | null>(null);
  const isMountedRef = useRef(true);
  const onSaveRef = useRef(onSave);

  // Update onSaveRef when onSave changes
  useEffect(() => {
    onSaveRef.current = onSave;
  }, [onSave]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  /**
   * Perform the actual save operation
   * This is a stable function that reads from refs, not a closure
   */
  const performSave = useCallback(async () => {
    // Skip if no data or no callback
    if (!pendingDataRef.current || !onSaveRef.current) {
      return;
    }

    // Only update state if mounted to avoid React warnings
    if (isMountedRef.current) {
      setIsSaving(true);
      setSaveError(null);
    }

    try {
      await onSaveRef.current(pendingDataRef.current);
      if (isMountedRef.current) {
        setLastSaved(Date.now());
        setSaveError(null);
        setIsSaving(false);
      }
    } catch (error) {
      if (isMountedRef.current) {
        setSaveError(error instanceof Error ? error : new Error('Save failed'));
        setIsSaving(false);
      }
    }
  }, []); // Empty deps - reads from refs which are always current

  /**
   * Queue a save with debouncing
   */
  const save = useCallback((data: Partial<UserProfile>) => {
    pendingDataRef.current = data;

    // Clear existing timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Set new timer
    debounceTimerRef.current = setTimeout(() => {
      performSave();
    }, debounceDelay);
  }, [debounceDelay, performSave]);

  /**
   * Immediately save without waiting for debounce
   */
  const saveNow = useCallback(async () => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    await performSave();
  }, [performSave]);

  return {
    save,
    saveNow,
    isSaving,
    lastSaved,
    saveError,
  };
}

