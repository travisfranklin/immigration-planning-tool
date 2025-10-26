/**
 * Tests for Viability Calculator - Scoring Threshold Logic
 */

import { describe, it, expect } from 'vitest';
import { calculateOverallScore, type OverallScoreResult } from './calculator';
import type { ComponentScore } from '../../types/viability';

describe('calculateOverallScore - Two-Stage Scoring', () => {
  const mockComponentScores: ComponentScore = {
    career: 85,
    financial: 90,
    education: 75,
    language: 80,
    family: 70,
  };

  const mockWeights = {
    career: 0.35,
    financial: 0.25,
    education: 0.30,
    language: 0.05,
    family: 0.05,
  };

  describe('Eligible Users', () => {
    it('should return full competitive score when user meets all requirements', () => {
      const eligibilityCheck = {
        isEligible: true,
        score: 100,
      };

      const result: OverallScoreResult = calculateOverallScore(
        mockComponentScores,
        mockWeights,
        eligibilityCheck
      );

      // Calculate expected competitive score
      const expectedCompetitiveScore = Math.round(
        85 * 0.35 + 90 * 0.25 + 75 * 0.30 + 80 * 0.05 + 70 * 0.05
      );

      expect(result.meetsHardRequirements).toBe(true);
      expect(result.competitiveScore).toBe(expectedCompetitiveScore);
      expect(result.overallScore).toBe(expectedCompetitiveScore);
    });

    it('should handle perfect scores', () => {
      const perfectScores: ComponentScore = {
        career: 100,
        financial: 100,
        education: 100,
        language: 100,
        family: 100,
      };

      const eligibilityCheck = {
        isEligible: true,
        score: 100,
      };

      const result = calculateOverallScore(
        perfectScores,
        mockWeights,
        eligibilityCheck
      );

      expect(result.meetsHardRequirements).toBe(true);
      expect(result.competitiveScore).toBe(100);
      expect(result.overallScore).toBe(100);
    });

    it('should handle low but eligible scores', () => {
      const lowScores: ComponentScore = {
        career: 30,
        financial: 40,
        education: 35,
        language: 25,
        family: 30,
      };

      const eligibilityCheck = {
        isEligible: true,
        score: 100,
      };

      const result = calculateOverallScore(
        lowScores,
        mockWeights,
        eligibilityCheck
      );

      const expectedCompetitiveScore = Math.round(
        30 * 0.35 + 40 * 0.25 + 35 * 0.30 + 25 * 0.05 + 30 * 0.05
      );

      expect(result.meetsHardRequirements).toBe(true);
      expect(result.competitiveScore).toBe(expectedCompetitiveScore);
      expect(result.overallScore).toBe(expectedCompetitiveScore);
    });
  });

  describe('Ineligible Users', () => {
    it('should cap overall score at 25 when user does not meet requirements', () => {
      const eligibilityCheck = {
        isEligible: false,
        score: 50, // Partial eligibility score
      };

      const result = calculateOverallScore(
        mockComponentScores,
        mockWeights,
        eligibilityCheck
      );

      expect(result.meetsHardRequirements).toBe(false);
      expect(result.competitiveScore).toBeGreaterThan(25); // Should still calculate competitive score
      expect(result.overallScore).toBe(25); // But overall score is capped
    });

    it('should use eligibility score if lower than 25', () => {
      const eligibilityCheck = {
        isEligible: false,
        score: 15, // Very low eligibility
      };

      const result = calculateOverallScore(
        mockComponentScores,
        mockWeights,
        eligibilityCheck
      );

      expect(result.meetsHardRequirements).toBe(false);
      expect(result.overallScore).toBe(15); // Uses eligibility score since it's < 25
    });

    it('should cap at 25 even with perfect component scores', () => {
      const perfectScores: ComponentScore = {
        career: 100,
        financial: 100,
        education: 100,
        language: 100,
        family: 100,
      };

      const eligibilityCheck = {
        isEligible: false,
        score: 50,
      };

      const result = calculateOverallScore(
        perfectScores,
        mockWeights,
        eligibilityCheck
      );

      expect(result.meetsHardRequirements).toBe(false);
      expect(result.competitiveScore).toBe(100); // Perfect competitive score
      expect(result.overallScore).toBe(25); // But capped at 25 due to ineligibility
    });

    it('should handle zero eligibility score', () => {
      const eligibilityCheck = {
        isEligible: false,
        score: 0,
      };

      const result = calculateOverallScore(
        mockComponentScores,
        mockWeights,
        eligibilityCheck
      );

      expect(result.meetsHardRequirements).toBe(false);
      expect(result.overallScore).toBe(0);
    });
  });

  describe('Edge Cases', () => {
    it('should handle zero component scores', () => {
      const zeroScores: ComponentScore = {
        career: 0,
        financial: 0,
        education: 0,
        language: 0,
        family: 0,
      };

      const eligibilityCheck = {
        isEligible: true,
        score: 100,
      };

      const result = calculateOverallScore(
        zeroScores,
        mockWeights,
        eligibilityCheck
      );

      expect(result.meetsHardRequirements).toBe(true);
      expect(result.competitiveScore).toBe(0);
      expect(result.overallScore).toBe(0);
    });

    it('should handle weights that sum to 1.0', () => {
      const weights = {
        career: 0.2,
        financial: 0.2,
        education: 0.2,
        language: 0.2,
        family: 0.2,
      };

      const eligibilityCheck = {
        isEligible: true,
        score: 100,
      };

      const result = calculateOverallScore(
        mockComponentScores,
        weights,
        eligibilityCheck
      );

      expect(result.meetsHardRequirements).toBe(true);
      expect(result.competitiveScore).toBeGreaterThan(0);
      expect(result.competitiveScore).toBeLessThanOrEqual(100);
    });

    it('should round competitive scores correctly', () => {
      const scores: ComponentScore = {
        career: 83,
        financial: 87,
        education: 79,
        language: 81,
        family: 75,
      };

      const eligibilityCheck = {
        isEligible: true,
        score: 100,
      };

      const result = calculateOverallScore(
        scores,
        mockWeights,
        eligibilityCheck
      );

      // Competitive score should be rounded to nearest integer
      expect(Number.isInteger(result.competitiveScore)).toBe(true);
      expect(Number.isInteger(result.overallScore)).toBe(true);
    });

    it('should never exceed 100 for competitive score', () => {
      // Even if weights somehow produce > 100
      const highScores: ComponentScore = {
        career: 100,
        financial: 100,
        education: 100,
        language: 100,
        family: 100,
      };

      const eligibilityCheck = {
        isEligible: true,
        score: 100,
      };

      const result = calculateOverallScore(
        highScores,
        mockWeights,
        eligibilityCheck
      );

      expect(result.competitiveScore).toBeLessThanOrEqual(100);
      expect(result.overallScore).toBeLessThanOrEqual(100);
    });

    it('should never go below 0 for competitive score', () => {
      const negativeScores: ComponentScore = {
        career: 0,
        financial: 0,
        education: 0,
        language: 0,
        family: 0,
      };

      const eligibilityCheck = {
        isEligible: true,
        score: 100,
      };

      const result = calculateOverallScore(
        negativeScores,
        mockWeights,
        eligibilityCheck
      );

      expect(result.competitiveScore).toBeGreaterThanOrEqual(0);
      expect(result.overallScore).toBeGreaterThanOrEqual(0);
    });
  });

  describe('Real-World Scenarios', () => {
    it('should handle Germany EU Blue Card scenario - eligible user', () => {
      // User with Bachelor's, good salary, job offer
      const scores: ComponentScore = {
        career: 90, // Has job offer, good occupation
        financial: 85, // Meets salary requirement
        education: 80, // Has Bachelor's
        language: 60, // Some German
        family: 50, // No family
      };

      const weights = {
        career: 0.35,
        financial: 0.25,
        education: 0.30,
        language: 0.05,
        family: 0.05,
      };

      const eligibilityCheck = {
        isEligible: true,
        score: 100,
      };

      const result = calculateOverallScore(scores, weights, eligibilityCheck);

      expect(result.meetsHardRequirements).toBe(true);
      expect(result.overallScore).toBeGreaterThan(70); // Should be "Good" viability
    });

    it('should handle Germany EU Blue Card scenario - ineligible user (no degree)', () => {
      // User with high school, good salary, job offer
      const scores: ComponentScore = {
        career: 90, // Has job offer
        financial: 85, // Meets salary
        education: 20, // Only high school
        language: 60,
        family: 50,
      };

      const weights = {
        career: 0.35,
        financial: 0.25,
        education: 0.30,
        language: 0.05,
        family: 0.05,
      };

      const eligibilityCheck = {
        isEligible: false, // Missing Bachelor's degree
        score: 50,
      };

      const result = calculateOverallScore(scores, weights, eligibilityCheck);

      expect(result.meetsHardRequirements).toBe(false);
      expect(result.overallScore).toBe(25); // Capped at 25
      expect(result.competitiveScore).toBeGreaterThan(50); // But competitive score is still calculated
    });
  });
});

