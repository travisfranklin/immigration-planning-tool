import { describe, it, expect } from 'vitest';
import type { UserProfile } from '@/types/user';
import {
  mergeFormData,
  calculateFormProgress,
  getFormStepData,
  isFormStepValid,
  getEmptyUserProfile,
} from './formState';

describe('Form State Utilities', () => {
  const mockProfile: Partial<UserProfile> = {
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1990-01-01',
    citizenship: 'US',
    annualIncome: 50000,
    savingsAmount: 10000,
    employmentStatus: 'employed',
    educationLevel: 'bachelor',
    fieldOfStudy: 'Computer Science',
    yearsOfExperience: 5,
    currentOccupation: 'Software Engineer',
    occupationCode: '2511',
    maritalStatus: 'single',
    familyMembers: [],
    languages: [{ language: 'English', proficiency: 'C2' }],
    immigrationPath: 'work_visa',
    timelineMonths: 12,
    hasJobOffer: false,
  };

  describe('mergeFormData', () => {
    it('should merge new data with existing profile', () => {
      const existing: Partial<UserProfile> = { firstName: 'John' };
      const newData = { lastName: 'Doe' };

      const result = mergeFormData(existing, newData);

      expect(result.firstName).toBe('John');
      expect(result.lastName).toBe('Doe');
    });

    it('should overwrite existing fields', () => {
      const existing: Partial<UserProfile> = { firstName: 'John' };
      const newData = { firstName: 'Jane' };

      const result = mergeFormData(existing, newData);

      expect(result.firstName).toBe('Jane');
    });

    it('should handle empty existing data', () => {
      const newData = { firstName: 'John', lastName: 'Doe' };

      const result = mergeFormData({}, newData);

      expect(result.firstName).toBe('John');
      expect(result.lastName).toBe('Doe');
    });

    it('should preserve unmodified fields', () => {
      const existing: Partial<UserProfile> = {
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '1990-01-01',
      };
      const newData = { firstName: 'Jane' };

      const result = mergeFormData(existing, newData);

      expect(result.firstName).toBe('Jane');
      expect(result.lastName).toBe('Doe');
      expect(result.dateOfBirth).toBe('1990-01-01');
    });
  });

  describe('calculateFormProgress', () => {
    it('should return 0 for empty profile', () => {
      const progress = calculateFormProgress({});

      expect(progress).toBe(0);
    });

    it('should return 0 for profile with only default values', () => {
      const emptyProfile = getEmptyUserProfile();
      const progress = calculateFormProgress(emptyProfile);

      expect(progress).toBe(0);
    });

    it('should return 100 for complete profile with all required fields', () => {
      const completeProfile: Partial<UserProfile> = {
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '1990-01-01',
        citizenship: 'US',
        annualIncome: 50000,
        savingsAmount: 10000,
        employmentStatus: 'employed',
        educationLevel: 'bachelor',
        fieldOfStudy: 'Computer Science',
        yearsOfExperience: 5,
        currentOccupation: 'Software Engineer',
        occupationCode: '2511',
        maritalStatus: 'single',
        languages: [{ language: 'English', proficiency: 'C2' }],
        targetCountries: ['Germany'],
        immigrationPath: 'work_visa',
        timelineMonths: 12,
      };

      const progress = calculateFormProgress(completeProfile);

      expect(progress).toBe(100);
    });

    it('should increase with more filled fields', () => {
      const partial1: Partial<UserProfile> = { firstName: 'John' };
      const partial2: Partial<UserProfile> = {
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '1990-01-01',
      };

      const progress1 = calculateFormProgress(partial1);
      const progress2 = calculateFormProgress(partial2);

      expect(progress2).toBeGreaterThan(progress1);
    });

    it('should return percentage between 0 and 100', () => {
      const progress = calculateFormProgress(mockProfile);

      expect(progress).toBeGreaterThanOrEqual(0);
      expect(progress).toBeLessThanOrEqual(100);
    });

    it('should not count zero values as filled for numeric fields', () => {
      const profileWithZeros: Partial<UserProfile> = {
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '1990-01-01',
        citizenship: 'US',
        annualIncome: 0, // Zero should not be counted as filled
        savingsAmount: 0, // Zero should not be counted as filled
        employmentStatus: 'employed',
        educationLevel: 'bachelor',
        fieldOfStudy: 'Computer Science',
        yearsOfExperience: 0, // Zero should not be counted as filled
        currentOccupation: 'Software Engineer',
        occupationCode: '2511',
        maritalStatus: 'single',
        languages: [{ language: 'English', proficiency: 'C2' }],
        targetCountries: ['Germany'],
        immigrationPath: 'work_visa',
        timelineMonths: 0, // Zero should not be counted as filled
      };

      const progress = calculateFormProgress(profileWithZeros);

      // Should be less than 100 because numeric fields with 0 are not counted
      expect(progress).toBeLessThan(100);
    });
  });

  describe('getFormStepData', () => {
    it('should return personal info for step 1', () => {
      const data = getFormStepData(mockProfile, 1);

      expect(data.firstName).toBe('John');
      expect(data.lastName).toBe('Doe');
      expect(data.dateOfBirth).toBe('1990-01-01');
      expect(data.citizenship).toBe('US');
    });

    it('should return financial info for step 2', () => {
      const data = getFormStepData(mockProfile, 2);

      expect(data.annualIncome).toBe(50000);
      expect(data.savingsAmount).toBe(10000);
      expect(data.employmentStatus).toBe('employed');
    });

    it('should return education info for step 3', () => {
      const data = getFormStepData(mockProfile, 3);

      expect(data.educationLevel).toBe('bachelor');
      expect(data.fieldOfStudy).toBe('Computer Science');
      expect(data.yearsOfExperience).toBe(5);
    });

    it('should return career info for step 4', () => {
      const data = getFormStepData(mockProfile, 4);

      expect(data.currentOccupation).toBe('Software Engineer');
      expect(data.occupationCode).toBe('2511');
    });

    it('should return family info for step 5', () => {
      const data = getFormStepData(mockProfile, 5);

      expect(data.maritalStatus).toBe('single');
      expect(data.familyMembers).toEqual([]);
    });

    it('should return language info for step 6', () => {
      const data = getFormStepData(mockProfile, 6);

      expect(data.languages).toEqual([{ language: 'English', proficiency: 'C2' }]);
    });

    it('should return country info for step 7', () => {
      const data = getFormStepData(mockProfile, 7);

      expect(data.immigrationPath).toBe('work_visa');
      expect(data.timelineMonths).toBe(12);
      expect(data.hasJobOffer).toBe(false);
    });

    it('should return empty object for invalid step', () => {
      const data = getFormStepData(mockProfile, 99);

      expect(data).toEqual({});
    });
  });

  describe('isFormStepValid', () => {
    it('should validate step 1 with required fields', () => {
      const validData: Partial<UserProfile> = {
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '1990-01-01',
        citizenship: 'US',
      };

      const isValid = isFormStepValid(1, validData);

      expect(isValid).toBe(true);
    });

    it('should invalidate step 1 with missing firstName', () => {
      const invalidData: Partial<UserProfile> = {
        lastName: 'Doe',
        dateOfBirth: '1990-01-01',
        citizenship: 'US',
      };

      const isValid = isFormStepValid(1, invalidData);

      expect(isValid).toBe(false);
    });

    it('should validate step 2 with required fields', () => {
      const validData: Partial<UserProfile> = {
        annualIncome: 50000,
        savingsAmount: 10000,
        employmentStatus: 'employed',
      };

      const isValid = isFormStepValid(2, validData);

      expect(isValid).toBe(true);
    });

    it('should invalidate step 2 with missing annualIncome', () => {
      const invalidData: Partial<UserProfile> = {
        savingsAmount: 10000,
        employmentStatus: 'employed',
      };

      const isValid = isFormStepValid(2, invalidData);

      expect(isValid).toBe(false);
    });

    it('should validate all steps with complete profile', () => {
      for (let step = 1; step <= 7; step++) {
        const isValid = isFormStepValid(step, mockProfile);
        expect(isValid).toBe(true);
      }
    });

    it('should return false for invalid step number', () => {
      const isValid = isFormStepValid(99, mockProfile);

      expect(isValid).toBe(false);
    });
  });

  describe('getEmptyUserProfile', () => {
    it('should return a profile with all required fields', () => {
      const profile = getEmptyUserProfile();

      expect(profile).toHaveProperty('id');
      expect(profile).toHaveProperty('createdAt');
      expect(profile).toHaveProperty('updatedAt');
      expect(profile).toHaveProperty('firstName');
      expect(profile).toHaveProperty('lastName');
      expect(profile).toHaveProperty('dateOfBirth');
      expect(profile).toHaveProperty('citizenship');
    });

    it('should have empty/default values', () => {
      const profile = getEmptyUserProfile();

      expect(profile.firstName).toBe('');
      expect(profile.lastName).toBe('');
      expect(profile.languages).toEqual([]);
      expect(profile.familyMembers).toEqual([]);
    });

    it('should have unique IDs for each call', () => {
      const profile1 = getEmptyUserProfile();
      const profile2 = getEmptyUserProfile();

      expect(profile1.id).not.toBe(profile2.id);
    });

    it('should have timestamps', () => {
      const profile = getEmptyUserProfile();

      expect(profile.createdAt).toBeGreaterThan(0);
      expect(profile.updatedAt).toBeGreaterThan(0);
    });
  });
});

