/**
 * Profile Page
 * Main page for user profile data collection and management
 */

import { useCallback, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import type { UserProfile } from '@/types/user';
import { ProfileFormAccordion } from '@/components/ProfileFormAccordion';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/Button';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { createUserProfile, getLatestUserProfile, updateUserProfile } from '@/services/storage/userProfileStore';

export function Profile() {
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState<Partial<UserProfile> | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const currentProfileIdRef = useRef<string | null>(null);
  const profileLoadedRef = useRef(false);

  // Load the latest profile from storage on mount
  useEffect(() => {
    const loadProfile = async () => {
      // Prevent loading the profile multiple times due to React Strict Mode
      if (profileLoadedRef.current) {
        return;
      }
      profileLoadedRef.current = true;

      try {
        const latestProfile = await getLatestUserProfile();
        if (latestProfile) {
          setInitialData(latestProfile);
          currentProfileIdRef.current = latestProfile.id;
        }
      } catch (error) {
        console.error('Failed to load profile:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProfile();
  }, []);

  const handleSaveProfile = useCallback(async (profile: Partial<UserProfile>) => {
    try {
      // If we have a current profile ID (from a previous save), use it
      if (currentProfileIdRef.current && !currentProfileIdRef.current.startsWith('profile_')) {
        // Update existing profile
        await updateUserProfile(currentProfileIdRef.current, profile);
      } else if (profile.id && !profile.id.startsWith('profile_')) {
        // Profile already has a real ID (loaded from storage)
        await updateUserProfile(profile.id, profile);
      } else if (profile.id && profile.id.startsWith('profile_')) {
        // This is a new profile from getEmptyUserProfile
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id, createdAt, updatedAt, ...profileData } = profile;
        const newProfile = await createUserProfile(profileData as Omit<UserProfile, 'id' | 'createdAt' | 'updatedAt'>);
        currentProfileIdRef.current = newProfile.id;
      }
    } catch (error) {
      console.error('Failed to save profile:', error);
    }
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center py-12">
            <LoadingSpinner message="Loading your profile..." />
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout currentPage="profile">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-6 sm:mb-8 px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Immigration Profile
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Complete your profile to determine your immigration viability. All sections are accessible - click any section to expand and edit.
          </p>
        </div>

        {/* Accordion Form */}
        <ProfileFormAccordion onSave={handleSaveProfile} initialData={initialData} />

        {/* View Results Button */}
        {initialData && (
          <div className="mt-6 sm:mt-8 px-4 sm:px-6">
            <Button
              onClick={() => navigate('/results')}
              variant="success"
              size="lg"
              className="w-full shadow-md"
            >
              📊 View Immigration Viability Results
            </Button>
          </div>
        )}

        {/* Help Text */}
        <div className="mt-6 sm:mt-8 px-4 sm:px-6 pb-8">
          <div className="p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-xs sm:text-sm text-blue-800">
              💡 <strong>Tip:</strong> Your data is saved locally in your browser.
              No information is sent to any server. You can update any section at any time.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

