/**
 * useUserProfile Hook
 * Manages user profile state and operations
 */

import { useState, useEffect, useCallback } from 'react';
import type { UserProfile } from '../types/user';
import {
  createUserProfile,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  getLatestUserProfile,
} from '../services/storage/userProfileStore';

interface UseUserProfileReturn {
  profile: UserProfile | null;
  loading: boolean;
  error: Error | null;
  createProfile: (profile: Omit<UserProfile, 'id' | 'createdAt' | 'updatedAt'>) => Promise<UserProfile>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<UserProfile>;
  deleteProfile: () => Promise<void>;
  loadProfile: (userId: string) => Promise<void>;
  loadLatestProfile: () => Promise<void>;
}

export function useUserProfile(userId?: string): UseUserProfileReturn {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const loadProfile = useCallback(
    async (id: string) => {
      setLoading(true);
      setError(null);
      try {
        const loadedProfile = await getUserProfile(id);
        setProfile(loadedProfile || null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load profile'));
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const loadLatestProfile = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const latestProfile = await getLatestUserProfile();
      setProfile(latestProfile || null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load latest profile'));
    } finally {
      setLoading(false);
    }
  }, []);

  const createProfile = useCallback(
    async (profileData: Omit<UserProfile, 'id' | 'createdAt' | 'updatedAt'>) => {
      setLoading(true);
      setError(null);
      try {
        const newProfile = await createUserProfile(profileData);
        setProfile(newProfile);
        return newProfile;
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to create profile');
        setError(error);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const updateProfile = useCallback(
    async (updates: Partial<UserProfile>) => {
      if (!profile) {
        throw new Error('No profile loaded');
      }

      setLoading(true);
      setError(null);
      try {
        const updated = await updateUserProfile(profile.id, updates);
        setProfile(updated);
        return updated;
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to update profile');
        setError(error);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [profile]
  );

  const deleteProfile = useCallback(async () => {
    if (!profile) {
      throw new Error('No profile loaded');
    }

    setLoading(true);
    setError(null);
    try {
      await deleteUserProfile(profile.id);
      setProfile(null);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to delete profile');
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [profile]);

  // Load profile on mount if userId is provided
  useEffect(() => {
    if (userId) {
      loadProfile(userId);
    }
  }, [userId, loadProfile]);

  return {
    profile,
    loading,
    error,
    createProfile,
    updateProfile,
    deleteProfile,
    loadProfile,
    loadLatestProfile,
  };
}

