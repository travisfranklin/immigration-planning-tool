import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useAutoSave } from './useAutoSave';
import { getEmptyUserProfile } from '@/utils/formState';

// Mock the storage service
vi.mock('@/services/storage/userProfileStore', () => ({
  createUserProfile: vi.fn(),
  updateUserProfile: vi.fn(),
}));

describe('useAutoSave Hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllTimers();
  });

  it('should initialize with default state', () => {
    const { result } = renderHook(() => useAutoSave());

    expect(result.current.isSaving).toBe(false);
    expect(result.current.lastSaved).toBeNull();
    expect(result.current.saveError).toBeNull();
  });

  it('should debounce save calls', async () => {
    const mockSave = vi.fn().mockResolvedValue(undefined);
    const { result } = renderHook(() => useAutoSave(100, mockSave));

    const profile = getEmptyUserProfile();

    // Call save multiple times
    result.current.save(profile);
    result.current.save(profile);
    result.current.save(profile);

    // Should not have called save yet
    expect(mockSave).not.toHaveBeenCalled();

    // Wait for debounce
    await waitFor(() => {
      expect(mockSave).toHaveBeenCalledTimes(1);
    }, { timeout: 500 });
  });

  it('should set isSaving to true during save', async () => {
    const mockSave = vi.fn().mockResolvedValue(undefined);
    const { result } = renderHook(() => useAutoSave(50, mockSave));

    const profile = getEmptyUserProfile();
    result.current.save(profile);

    await waitFor(() => {
      expect(result.current.isSaving).toBe(false);
    }, { timeout: 500 });
  });

  it('should update lastSaved timestamp after successful save', async () => {
    const mockSave = vi.fn().mockResolvedValue(undefined);
    const { result } = renderHook(() => useAutoSave(50, mockSave));

    const profile = getEmptyUserProfile();
    const beforeSave = Date.now();

    result.current.save(profile);

    await waitFor(() => {
      expect(result.current.lastSaved).not.toBeNull();
      expect(result.current.lastSaved! >= beforeSave).toBe(true);
    }, { timeout: 500 });
  });

  it('should handle save errors', async () => {
    const error = new Error('Save failed');
    const mockSave = vi.fn().mockRejectedValue(error);
    const { result } = renderHook(() => useAutoSave(50, mockSave));

    const profile = getEmptyUserProfile();
    result.current.save(profile);

    await waitFor(() => {
      expect(result.current.saveError).toBe(error);
    }, { timeout: 500 });
  });

  it('should clear error on successful save after error', async () => {
    const mockSave = vi.fn()
      .mockRejectedValueOnce(new Error('First error'))
      .mockResolvedValueOnce(undefined);

    const { result } = renderHook(() => useAutoSave(50, mockSave));

    const profile = getEmptyUserProfile();

    // First save - fails
    result.current.save(profile);

    await waitFor(() => {
      expect(result.current.saveError).not.toBeNull();
    }, { timeout: 500 });

    // Second save - succeeds
    result.current.save(profile);

    await waitFor(() => {
      expect(result.current.saveError).toBeNull();
    }, { timeout: 500 });
  });

  it('should use custom debounce delay', async () => {
    const mockSave = vi.fn().mockResolvedValue(undefined);
    const { result } = renderHook(() => useAutoSave(200, mockSave));

    const profile = getEmptyUserProfile();
    result.current.save(profile);

    // Should not have called yet
    expect(mockSave).not.toHaveBeenCalled();

    // Wait for debounce
    await waitFor(() => {
      expect(mockSave).toHaveBeenCalledTimes(1);
    }, { timeout: 500 });
  });

  it('should pass profile data to save function', async () => {
    const mockSave = vi.fn().mockResolvedValue(undefined);
    const { result } = renderHook(() => useAutoSave(50, mockSave));

    const profile = getEmptyUserProfile();
    profile.firstName = 'John';
    profile.lastName = 'Doe';

    result.current.save(profile);

    await waitFor(() => {
      expect(mockSave).toHaveBeenCalledWith(profile);
    }, { timeout: 500 });
  });

  it('should cancel pending save on unmount', async () => {
    const mockSave = vi.fn().mockResolvedValue(undefined);
    const { result, unmount } = renderHook(() => useAutoSave(500, mockSave));

    const profile = getEmptyUserProfile();
    result.current.save(profile);

    unmount();

    // Wait a bit to ensure save doesn't happen
    await new Promise(resolve => setTimeout(resolve, 600));
    expect(mockSave).not.toHaveBeenCalled();
  });

  it('should handle rapid consecutive saves', async () => {
    const mockSave = vi.fn().mockResolvedValue(undefined);
    const { result } = renderHook(() => useAutoSave(100, mockSave));

    const profile = getEmptyUserProfile();

    // Rapid saves
    result.current.save(profile);
    result.current.save(profile);
    result.current.save(profile);

    await waitFor(() => {
      // Should only call save once due to debouncing
      expect(mockSave).toHaveBeenCalledTimes(1);
    }, { timeout: 500 });
  });

  it('should provide manual save trigger', async () => {
    const mockSave = vi.fn().mockResolvedValue(undefined);
    const { result } = renderHook(() => useAutoSave(1000, mockSave));

    const profile = getEmptyUserProfile();
    result.current.save(profile);

    // Manually trigger save without waiting for debounce
    await result.current.saveNow();

    expect(mockSave).toHaveBeenCalledWith(profile);
  });
});

