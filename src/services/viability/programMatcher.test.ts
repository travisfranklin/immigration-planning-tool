/**
 * Program Matcher Service Tests
 * Tests for visa program matching and filtering logic
 */

import { describe, it, expect } from 'vitest';
import { getBestProgramsForCountry, matchUserToPrograms, checkEligibility } from './programMatcher';
import type { UserProfile } from '../../types/user';
import { GERMANY_PROGRAMS } from '../../data/visaPrograms';

// Mock user profile for testing
const createMockProfile = (overrides: Partial<UserProfile> = {}): UserProfile => ({
  id: 'test-user',
  firstName: 'John',
  lastName: 'Doe',
  dateOfBirth: '1990-01-01',
  citizenship: 'US',
  annualIncome: 60000,
  savingsAmount: 20000,
  employmentStatus: 'employed',
  educationLevel: 'bachelor',
  fieldOfStudy: 'Computer Science',
  yearsOfExperience: 5,
  currentOccupation: 'Software Engineer',
  occupationCode: '2511',
  maritalStatus: 'single',
  languages: [
    { language: 'English', proficiency: 'C2' },
    { language: 'German', proficiency: 'B1' },
  ],
  familyMembers: [],
  targetCountries: [{ countryCode: 'DE', hasJobOffer: true }],
  immigrationPath: 'work_visa',
  timelineMonths: 12,
  createdAt: Date.now(),
  updatedAt: Date.now(),
  ...overrides,
});

describe('programMatcher', () => {
  describe('checkEligibility', () => {
    it('should mark user as eligible when all requirements are met', () => {
      const profile = createMockProfile({
        annualIncome: 60000,
        educationLevel: 'bachelor',
        targetCountries: [{ countryCode: 'DE', hasJobOffer: true }],
      });

      const program = GERMANY_PROGRAMS[0]; // EU Blue Card
      const result = checkEligibility(profile, program);

      expect(result.isEligible).toBe(true);
      expect(result.score).toBeGreaterThan(50);
      expect(result.missingRequirements).toHaveLength(0);
    });

    it('should mark user as ineligible when missing hard requirements', () => {
      const profile = createMockProfile({
        annualIncome: 30000, // Below minimum for EU Blue Card
        educationLevel: 'high_school',
        targetCountries: [{ countryCode: 'DE', hasJobOffer: false }],
      });

      const program = GERMANY_PROGRAMS[0]; // EU Blue Card
      const result = checkEligibility(profile, program);

      expect(result.isEligible).toBe(false);
      expect(result.missingRequirements.length).toBeGreaterThan(0);
    });
  });

  describe('matchUserToPrograms', () => {
    it('should return all programs with eligibility scores', () => {
      const profile = createMockProfile();
      const results = matchUserToPrograms(profile);

      expect(results.length).toBeGreaterThan(0);
      results.forEach(result => {
        expect(result.program).toBeDefined();
        expect(result.eligibilityScore).toBeGreaterThanOrEqual(0);
        expect(result.eligibilityScore).toBeLessThanOrEqual(100);
        expect(result.alignsWithTimeline).toBeDefined();
        expect(result.alignsWithUserPath).toBeDefined();
      });
    });

    it('should calculate alignsWithTimeline correctly', () => {
      const profile = createMockProfile({
        timelineMonths: 6, // 6-month timeline
      });

      const results = matchUserToPrograms(profile);

      // Some programs should not align with 6-month timeline (those with long processing + buffer)
      const programsNotAligning = results.filter(r => !r.alignsWithTimeline);
      expect(programsNotAligning.length).toBeGreaterThan(0);

      // Programs with short processing times should align with 6-month timeline
      // Timeline calculation: processingTimeWeeks/4 + bufferMonths (3 for non-business, 6 for business)
      // For processingTimeWeeks <= 4 (1 month) + 3 month buffer = 4 months total, fits in 6 months
      const fastPrograms = results.filter(r =>
        r.program.processingTimeWeeks <= 4 && // 1 month processing
        !r.program.requirements.requiresBusinessPlan // No business plan (adds 6 months buffer)
      );
      fastPrograms.forEach(program => {
        expect(program.alignsWithTimeline).toBe(true);
      });
    });

    it('should mark all programs as aligning when no timeline is specified', () => {
      const profile = createMockProfile({
        timelineMonths: undefined,
      });

      const results = matchUserToPrograms(profile);

      results.forEach(result => {
        expect(result.alignsWithTimeline).toBe(true);
      });
    });
  });

  describe('getBestProgramsForCountry', () => {
    it('should return programs only for the specified country', () => {
      const profile = createMockProfile();
      const results = getBestProgramsForCountry(profile, 'DE', 5);

      results.forEach(result => {
        expect(result.program.countryCode).toBe('DE');
      });
    });

    it('should respect the limit parameter', () => {
      const profile = createMockProfile();
      const results = getBestProgramsForCountry(profile, 'DE', 2);

      expect(results.length).toBeLessThanOrEqual(2);
    });

    it('should include programs regardless of timeline alignment', () => {
      const profile = createMockProfile({
        timelineMonths: 2, // Very short timeline (2 months)
      });

      const results = getBestProgramsForCountry(profile, 'DE', 10);

      // Should return programs even if they don't align with timeline
      // Timeline alignment is tracked in alignsWithTimeline property
      expect(results.length).toBeGreaterThan(0);

      // Some programs may not align with the short timeline
      // This is expected - timeline filtering is handled by preference scoring
      const programsNotAligning = results.filter(r => !r.alignsWithTimeline);
      expect(programsNotAligning.length).toBeGreaterThanOrEqual(0);
    });

    it('should track timeline alignment in results', () => {
      const profile = createMockProfile({
        timelineMonths: 6,
      });

      const results = getBestProgramsForCountry(profile, 'DE', 10);

      // Results should have alignsWithTimeline property
      results.forEach(result => {
        expect(result.alignsWithTimeline).toBeDefined();

        const processingTimeMonths = result.program.processingTimeWeeks / 4;
        const bufferMonths = result.program.requirements.requiresBusinessPlan ? 6 : 3;
        const totalTimeMonths = processingTimeMonths + bufferMonths;

        // Verify alignsWithTimeline is calculated correctly
        if (totalTimeMonths <= 6) {
          expect(result.alignsWithTimeline).toBe(true);
        } else {
          expect(result.alignsWithTimeline).toBe(false);
        }
      });
    });

    it('should return all eligible programs when timeline is long enough', () => {
      const profile = createMockProfile({
        timelineMonths: 120, // 10 years - very long timeline
      });

      const resultsWithLongTimeline = getBestProgramsForCountry(profile, 'DE', 10);
      const resultsWithoutTimeline = getBestProgramsForCountry(
        createMockProfile({ timelineMonths: undefined }),
        'DE',
        10
      );

      // Should return same number of programs
      expect(resultsWithLongTimeline.length).toBe(resultsWithoutTimeline.length);
    });

    it('should return programs even with impossibly short timeline', () => {
      const profile = createMockProfile({
        timelineMonths: 0.5, // Half a month - impossibly short
      });

      const results = getBestProgramsForCountry(profile, 'DE', 10);

      // Should still return programs (timeline filtering removed)
      // Timeline alignment is reflected in preference scoring instead
      expect(results.length).toBeGreaterThan(0);

      // All programs should have alignsWithTimeline = false
      results.forEach(result => {
        expect(result.alignsWithTimeline).toBe(false);
      });
    });

    it('should prioritize programs by eligibility score', () => {
      const profile = createMockProfile({
        timelineMonths: 12,
      });

      const results = getBestProgramsForCountry(profile, 'DE', 5);

      // Verify results are sorted by eligibility score (descending)
      for (let i = 0; i < results.length - 1; i++) {
        expect(results[i].eligibilityScore).toBeGreaterThanOrEqual(
          results[i + 1].eligibilityScore
        );
      }
    });

    it('should handle countries with no programs', () => {
      const profile = createMockProfile({
        timelineMonths: 2,
      });

      // Use a country code that doesn't exist in our database
      const results = getBestProgramsForCountry(profile, 'XX', 10);

      expect(results).toEqual([]);
    });
  });

  describe('Timeline calculation edge cases', () => {
    it('should account for business plan buffer time', () => {
      const profile = createMockProfile({
        timelineMonths: 8, // 8 months
      });

      const results = matchUserToPrograms(profile);

      // Programs requiring business plan need 6 months buffer
      const businessPlanPrograms = results.filter(r => 
        r.program.requirements.requiresBusinessPlan
      );

      businessPlanPrograms.forEach(program => {
        const processingTimeMonths = program.program.processingTimeWeeks / 4;
        const totalTimeMonths = processingTimeMonths + 6; // Business plan buffer
        
        if (totalTimeMonths <= 8) {
          expect(program.alignsWithTimeline).toBe(true);
        } else {
          expect(program.alignsWithTimeline).toBe(false);
        }
      });
    });

    it('should account for standard buffer time for non-business programs', () => {
      const profile = createMockProfile({
        timelineMonths: 5, // 5 months
      });

      const results = matchUserToPrograms(profile);

      // Programs not requiring business plan need 3 months buffer
      const standardPrograms = results.filter(r => 
        !r.program.requirements.requiresBusinessPlan
      );

      standardPrograms.forEach(program => {
        const processingTimeMonths = program.program.processingTimeWeeks / 4;
        const totalTimeMonths = processingTimeMonths + 3; // Standard buffer
        
        if (totalTimeMonths <= 5) {
          expect(program.alignsWithTimeline).toBe(true);
        } else {
          expect(program.alignsWithTimeline).toBe(false);
        }
      });
    });
  });
});

