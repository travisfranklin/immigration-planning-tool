/**
 * Form State Utilities
 * Manages multi-step form state, validation, and data merging
 */

import type { UserProfile } from '@/types/user';

/**
 * Merge new form data with existing profile
 */
export function mergeFormData(
  existing: Partial<UserProfile>,
  newData: Partial<UserProfile>
): Partial<UserProfile> {
  return {
    ...existing,
    ...newData,
  };
}

/**
 * Calculate form completion progress as percentage (0-100)
 * Only counts fields that are required by validation rules
 */
export function calculateFormProgress(profile: Partial<UserProfile>): number {
  // Use the same required fields as validation
  const requiredFieldsByStep: Record<number, string[]> = {
    1: ['firstName', 'lastName', 'dateOfBirth', 'citizenship'],
    2: ['annualIncome', 'savingsAmount', 'employmentStatus'],
    3: ['educationLevel', 'fieldOfStudy', 'yearsOfExperience'],
    4: ['currentOccupation', 'occupationCode'],
    5: ['maritalStatus'],
    6: ['languages'],
    7: ['immigrationPath', 'timelineMonths'],
  };

  // Flatten all required fields
  const allRequiredFields = Object.values(requiredFieldsByStep).flat();

  const filledFields = allRequiredFields.filter((field) => {
    const value = (profile as unknown as Record<string, unknown>)[field];

    // Special handling for arrays
    if (Array.isArray(value)) {
      return value.length > 0;
    }

    // Check if value exists and is not empty
    // Note: 0 is a valid value for numeric fields, but we need to distinguish
    // between 0 (not filled) and actual numeric values
    if (value === undefined || value === null || value === '' || value === 0) {
      return false;
    }

    return true;
  });

  return Math.round((filledFields.length / allRequiredFields.length) * 100);
}

/**
 * Get data for a specific form step
 */
export function getFormStepData(
  profile: Partial<UserProfile>,
  step: number
): Partial<UserProfile> {
  switch (step) {
    case 1: // Personal Info
      return {
        firstName: profile.firstName,
        lastName: profile.lastName,
        dateOfBirth: profile.dateOfBirth,
        citizenship: profile.citizenship,
      };

    case 2: // Financial Info
      return {
        annualIncome: profile.annualIncome,
        savingsAmount: profile.savingsAmount,
        employmentStatus: profile.employmentStatus,
      };

    case 3: // Education
      return {
        educationLevel: profile.educationLevel,
        fieldOfStudy: profile.fieldOfStudy,
        yearsOfExperience: profile.yearsOfExperience,
      };

    case 4: // Career
      return {
        currentOccupation: profile.currentOccupation,
        occupationCode: profile.occupationCode,
      };

    case 5: // Family
      return {
        maritalStatus: profile.maritalStatus,
        familyMembers: profile.familyMembers,
      };

    case 6: // Language
      return {
        languages: profile.languages,
      };

    case 7: // Country Selection
      return {
        immigrationPath: profile.immigrationPath,
        timelineMonths: profile.timelineMonths,
        hasJobOffer: profile.hasJobOffer,
        jobOfferCountry: profile.jobOfferCountry,
      };

    default:
      return {};
  }
}

/**
 * Validate if a form step has all required fields
 */
export function isFormStepValid(
  step: number,
  profile: Partial<UserProfile>
): boolean {
  const requiredFields: Record<number, string[]> = {
    1: ['firstName', 'lastName', 'dateOfBirth', 'citizenship'],
    2: ['annualIncome', 'savingsAmount', 'employmentStatus'],
    3: ['educationLevel', 'fieldOfStudy', 'yearsOfExperience'],
    4: ['currentOccupation', 'occupationCode'],
    5: ['maritalStatus'],
    6: ['languages'],
    7: ['immigrationPath', 'timelineMonths'],
  };

  const fields = requiredFields[step];
  if (!fields) return false;

  return fields.every((field) => {
    const value = (profile as Record<string, unknown>)[field];
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    return value !== undefined && value !== null && value !== '';
  });
}

/**
 * Get an empty user profile with default values
 */
export function getEmptyUserProfile(): UserProfile {
  const now = Date.now();
  return {
    id: `profile_${now}_${Math.random().toString(36).substr(2, 9)}`,
    createdAt: now,
    updatedAt: now,
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    citizenship: '',
    annualIncome: 0,
    savingsAmount: 0,
    employmentStatus: '' as 'employed', // Empty string to track user selection
    educationLevel: '' as 'high_school', // Empty string to track user selection
    fieldOfStudy: '',
    yearsOfExperience: 0,
    currentOccupation: '',
    occupationCode: '',
    languages: [],
    maritalStatus: '' as 'single', // Empty string to track user selection
    familyMembers: [],
    targetCountries: [],
    immigrationPath: '' as 'work_visa', // Empty string to track user selection
    timelineMonths: undefined,
    hasJobOffer: false,
  };
}

