/**
 * User Profile Store Service
 * Handles CRUD operations for user profiles in IndexedDB
 */

import type { UserProfile } from '../../types/user';
import {
  addRecord,
  updateRecord,
  deleteRecord,
  getRecord,
  getAllRecords,
  STORE_NAMES,
} from './indexedDB';

/**
 * Create a new user profile
 */
export async function createUserProfile(profile: Omit<UserProfile, 'id' | 'createdAt' | 'updatedAt'>): Promise<UserProfile> {
  const now = Date.now();
  const id = `user_${now}_${Math.random().toString(36).substr(2, 9)}`;

  const newProfile: UserProfile = {
    ...profile,
    id,
    createdAt: now,
    updatedAt: now,
  };

  await addRecord(STORE_NAMES.USER_PROFILES, newProfile);
  return newProfile;
}

/**
 * Get a user profile by ID
 */
export async function getUserProfile(userId: string): Promise<UserProfile | undefined> {
  return getRecord<UserProfile>(STORE_NAMES.USER_PROFILES, userId);
}

/**
 * Get all user profiles
 */
export async function getAllUserProfiles(): Promise<UserProfile[]> {
  return getAllRecords<UserProfile>(STORE_NAMES.USER_PROFILES);
}

/**
 * Update a user profile
 */
export async function updateUserProfile(userId: string, updates: Partial<UserProfile>): Promise<UserProfile> {
  const existing = await getUserProfile(userId);

  if (!existing) {
    throw new Error(`User profile with ID ${userId} not found`);
  }

  const updated: UserProfile = {
    ...existing,
    ...updates,
    id: existing.id,
    createdAt: existing.createdAt,
    updatedAt: Date.now(),
  };

  await updateRecord(STORE_NAMES.USER_PROFILES, updated);
  return updated;
}

/**
 * Delete a user profile
 */
export async function deleteUserProfile(userId: string): Promise<void> {
  await deleteRecord(STORE_NAMES.USER_PROFILES, userId);
}

/**
 * Update specific sections of a user profile
 */
export async function updateUserProfileSection(
  userId: string,
  section: keyof UserProfile,
  value: unknown
): Promise<UserProfile> {
  const updates: Record<string, unknown> = {};
  updates[section] = value;
  return updateUserProfile(userId, updates as Partial<UserProfile>);
}

/**
 * Check if a user profile exists
 */
export async function userProfileExists(userId: string): Promise<boolean> {
  const profile = await getUserProfile(userId);
  return profile !== undefined;
}

/**
 * Get the most recently created user profile
 */
export async function getLatestUserProfile(): Promise<UserProfile | undefined> {
  const profiles = await getAllUserProfiles();
  if (profiles.length === 0) return undefined;

  return profiles.reduce((latest, current) => {
    return current.createdAt > latest.createdAt ? current : latest;
  });
}

