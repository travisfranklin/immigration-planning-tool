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
        <div className="bg-white min-h-screen">
          <div className="flex items-center justify-center py-24">
            <LoadingSpinner message="Loading your profile..." />
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout currentPage="profile">
      {/* Page Header - Bold, Clean */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl">
            <h1 className="text-display font-extrabold text-black mb-6 leading-tight uppercase tracking-tight">
              Immigration Profile
            </h1>
            <p className="text-h3 text-gray-700 font-normal leading-relaxed">
              Complete your profile to determine your immigration viability.
              <span className="block mt-3 text-body-lg text-gray-500">
                All sections are accessible—click any section to expand and edit. Your data is saved automatically.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-gray-50 py-16 md:py-20">
        <ProfileFormAccordion onSave={handleSaveProfile} initialData={initialData} />
      </div>

      {/* View Results Button - Fixed Bottom Bar */}
      {initialData && (
        <div className="sticky bottom-0 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Button
              onClick={() => navigate('/results')}
              variant="secondary"
              size="lg"
              className="w-full"
            >
              VIEW IMMIGRATION VIABILITY RESULTS →
            </Button>
          </div>
        </div>
      )}
    </Layout>
  );
}

