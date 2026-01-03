/**
 * Tests for Profile Currency Converter
 * Tests conversion of user profile financial data from USD to EUR
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { convertProfileToEur, convertProfileToEurSync } from './profileConverter';
import { clearRateCache } from './currencyService';
import type { UserProfile } from '../../types/user';

// Mock fetch globally
const mockFetch = vi.fn();
global.fetch = mockFetch;

// Helper to create a mock user profile
function createMockProfile(overrides: Partial<UserProfile> = {}): UserProfile {
  return {
    id: 'test-id',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    firstName: 'Test',
    lastName: 'User',
    dateOfBirth: '1990-01-01',
    citizenship: 'US',
    educationLevel: 'bachelor',
    fieldOfStudy: 'Computer Science',
    yearsOfExperience: 5,
    currentOccupation: 'Software Developer',
    occupationCode: '2511',
    employmentStatus: 'employed',
    annualIncome: 100000, // $100,000 USD
    savingsAmount: 50000, // $50,000 USD
    maritalStatus: 'single',
    familyMembers: [],
    languages: [{ language: 'English', proficiency: 'C2' }],
    targetCountries: [
      { countryCode: 'DE', hasJobOffer: false },
      { countryCode: 'NL', hasJobOffer: false }
    ],
    immigrationPath: 'work_visa',
    timelineMonths: 12,
    ...overrides,
  };
}

describe('Profile Converter', () => {
  beforeEach(() => {
    clearRateCache();
    vi.clearAllMocks();
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('convertProfileToEur', () => {
    it('should convert annualIncome from USD to EUR', async () => {
      // ECB rate: 1 EUR = 1.10 USD, so 1 USD = 0.909 EUR
      const mockCsvResponse = `KEY,FREQ,CURRENCY,CURRENCY_DENOM,EXR_TYPE,EXR_SUFFIX,TIME_PERIOD,OBS_VALUE
EXR.D.USD.EUR.SP00.A,D,USD,EUR,SP00,A,2024-01-15,1.10`;

      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: () => Promise.resolve(mockCsvResponse),
      });

      const profile = createMockProfile({ annualIncome: 100000 });
      const convertedProfile = await convertProfileToEur(profile);

      // $100,000 * (1/1.10) ≈ €90,909
      expect(convertedProfile.annualIncome).toBe(Math.round(100000 / 1.1));
    });

    it('should convert savingsAmount from USD to EUR', async () => {
      const mockCsvResponse = `KEY,FREQ,CURRENCY,CURRENCY_DENOM,EXR_TYPE,EXR_SUFFIX,TIME_PERIOD,OBS_VALUE
EXR.D.USD.EUR.SP00.A,D,USD,EUR,SP00,A,2024-01-15,1.10`;

      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: () => Promise.resolve(mockCsvResponse),
      });

      const profile = createMockProfile({ savingsAmount: 50000 });
      const convertedProfile = await convertProfileToEur(profile);

      // $50,000 * (1/1.10) ≈ €45,455
      expect(convertedProfile.savingsAmount).toBe(Math.round(50000 / 1.1));
    });

    it('should not mutate the original profile', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: () => Promise.resolve(`KEY,FREQ,CURRENCY,CURRENCY_DENOM,EXR_TYPE,EXR_SUFFIX,TIME_PERIOD,OBS_VALUE
EXR.D.USD.EUR.SP00.A,D,USD,EUR,SP00,A,2024-01-15,1.10`),
      });

      const profile = createMockProfile({ annualIncome: 100000 });
      const originalIncome = profile.annualIncome;

      await convertProfileToEur(profile);

      expect(profile.annualIncome).toBe(originalIncome);
    });

    it('should preserve non-financial fields', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: () => Promise.resolve(`KEY,FREQ,CURRENCY,CURRENCY_DENOM,EXR_TYPE,EXR_SUFFIX,TIME_PERIOD,OBS_VALUE
EXR.D.USD.EUR.SP00.A,D,USD,EUR,SP00,A,2024-01-15,1.10`),
      });

      const profile = createMockProfile({
        firstName: 'John',
        lastName: 'Doe',
        educationLevel: 'master',
        yearsOfExperience: 10,
      });

      const convertedProfile = await convertProfileToEur(profile);

      expect(convertedProfile.firstName).toBe('John');
      expect(convertedProfile.lastName).toBe('Doe');
      expect(convertedProfile.educationLevel).toBe('master');
      expect(convertedProfile.yearsOfExperience).toBe(10);
    });

    it('should use fallback rate when API fails', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Network error'));

      const profile = createMockProfile({ annualIncome: 100000 });
      const convertedProfile = await convertProfileToEur(profile);

      // Fallback rate is 0.85
      expect(convertedProfile.annualIncome).toBe(Math.round(100000 * 0.85));
    });

    it('should handle zero financial values', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: () => Promise.resolve(`KEY,FREQ,CURRENCY,CURRENCY_DENOM,EXR_TYPE,EXR_SUFFIX,TIME_PERIOD,OBS_VALUE
EXR.D.USD.EUR.SP00.A,D,USD,EUR,SP00,A,2024-01-15,1.10`),
      });

      const profile = createMockProfile({ annualIncome: 0, savingsAmount: 0 });
      const convertedProfile = await convertProfileToEur(profile);

      expect(convertedProfile.annualIncome).toBe(0);
      expect(convertedProfile.savingsAmount).toBe(0);
    });
  });

  describe('convertProfileToEurSync', () => {
    it('should convert profile using provided rate', () => {
      const profile = createMockProfile({ annualIncome: 100000 });
      const rate = 0.90; // 1 USD = 0.90 EUR

      const convertedProfile = convertProfileToEurSync(profile, rate);

      expect(convertedProfile.annualIncome).toBe(90000); // $100,000 * 0.90 = €90,000
    });

    it('should round to nearest integer', () => {
      const profile = createMockProfile({ annualIncome: 99999 });
      const rate = 0.91;

      const convertedProfile = convertProfileToEurSync(profile, rate);

      expect(Number.isInteger(convertedProfile.annualIncome)).toBe(true);
    });
  });
});

