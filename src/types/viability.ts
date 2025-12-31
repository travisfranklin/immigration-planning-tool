/**
 * Viability Score Types
 * Defines the structure for viability calculations and scoring
 */

import type { EducationLevel, LanguageProficiency } from './user';

export type ViabilityLevel = 'excellent' | 'good' | 'moderate' | 'low' | 'very_low';
export type VisaProgramType = 'work' | 'entrepreneur' | 'investor' | 'digital_nomad' | 'family_reunification' | 'student' | 'job_seeker' | 'passive-income' | 'other';

export interface ComponentScore {
  career: number; // 0-100
  financial: number; // 0-100
  education: number; // 0-100
  language: number; // 0-100
  family: number; // 0-100
}

export interface RiskFactor {
  id: string;
  category: 'financial' | 'legal' | 'language' | 'employment' | 'family' | 'other';
  severity: 'low' | 'medium' | 'high';
  description: string;
  mitigation?: string;
}

export interface Contingency {
  id: string;
  scenario: string;
  description: string;
  action: string;
  timeframe?: string;
}

/**
 * Full viability data for a specific visa program
 * Used for both recommended and alternative programs
 */
export interface ProgramViabilityData {
  // Program identification
  programId: string;
  programName: string;
  programType: VisaProgramType;

  // Scoring
  eligibilityScore: number; // 0-100
  componentScores: ComponentScore;
  overallScore: number; // Computed from componentScores with program weights

  // Match information
  matchReason: string;
  alignsWithUserPath: boolean;
  alignsWithTimeline: boolean;
  requiresJobOffer: boolean;

  // Risk assessment (program-specific)
  riskFactors: RiskFactor[];
  overallRiskLevel: 'low' | 'medium' | 'high';

  // Contingencies (program-specific)
  contingencies: Contingency[];

  // Eligibility details
  meetsHardRequirements: boolean;
  missingRequirements: string[];

  // Timeline
  estimatedTimelineMonths: number;

  // For alternatives: why this isn't the recommended program
  whyNotRecommended?: string;
}

export interface ViabilityScore {
  id: string;
  userId: string;
  countryCode: string;
  countryName: string;
  createdAt: number;
  updatedAt: number;

  // Component Scores
  componentScores: ComponentScore;

  // Overall Score
  overallScore: number; // 0-100 (capped at 25 if not eligible)
  viabilityLevel: ViabilityLevel;

  // Eligibility Information (NEW)
  meetsHardRequirements: boolean; // True if user meets all mandatory requirements
  missingRequirements: string[]; // List of requirements user doesn't meet
  competitiveScore: number; // 0-100, the weighted score regardless of eligibility

  // Risk Assessment
  riskFactors: RiskFactor[];
  overallRiskLevel: 'low' | 'medium' | 'high';

  // Contingencies
  contingencies: Contingency[];

  // Program-specific info (recommended program)
  recommendedProgram?: ProgramViabilityData;

  // Alternative programs (with full viability data)
  alternativePrograms?: ProgramViabilityData[];

  // User preference alignment
  userPreferenceBoost: number; // Points added based on target countries, timeline, etc.

  // Additional Info
  recommendedPath?: string;
  estimatedTimelineMonths?: number;
  notes?: string;
}

export interface ViabilityScoreResponse {
  scores: ViabilityScore[];
  ranking: Array<{
    countryCode: string;
    countryName: string;
    overallScore: number;
    viabilityLevel: ViabilityLevel;
  }>;
}

export interface ViabilityCalculationInput {
  userId: string;
  countryCode: string;
  componentScores: ComponentScore;
}

export const VIABILITY_WEIGHTS = {
  career: 0.30,
  financial: 0.25,
  education: 0.20,
  language: 0.15,
  family: 0.10,
};

export const VIABILITY_THRESHOLDS = {
  excellent: 80,
  good: 60,
  moderate: 40,
  low: 20,
  very_low: 0,
};

export function getViabilityLevel(score: number): ViabilityLevel {
  if (score >= VIABILITY_THRESHOLDS.excellent) return 'excellent';
  if (score >= VIABILITY_THRESHOLDS.good) return 'good';
  if (score >= VIABILITY_THRESHOLDS.moderate) return 'moderate';
  if (score >= VIABILITY_THRESHOLDS.low) return 'low';
  return 'very_low';
}

/**
 * Visa Program Definition
 * Represents a specific immigration program offered by a country
 */
export interface VisaProgramRequirements {
  minSalary?: number;
  minInvestment?: number;
  minSavings?: number;
  minEducationLevel?: EducationLevel;
  minLanguageProficiency?: LanguageProficiency;
  requiresJobOffer?: boolean;
  requiresBusinessPlan?: boolean;
  requiresEducation?: boolean; // For programs that require formal education
  allowedOccupations?: string[]; // ISCO codes
  citizenship?: string[]; // e.g., ['US'] for DAFT
  maxAge?: number;
  minAge?: number;
  requiresFamilyInCountry?: boolean; // For family reunification
  minYearsExperience?: number;
  minPassiveIncome?: number; // For non-lucrative/retirement visas
  minPoints?: number; // For points-based systems (e.g., Austria Red-White-Red Card)
}

export interface VisaProgram {
  id: string;
  countryCode: string;
  countryName: string;
  name: string;
  type: VisaProgramType;

  // Eligibility Requirements (Hard Requirements)
  requirements: VisaProgramRequirements;

  // Scoring Weights (for this specific program)
  weights: {
    career: number;
    financial: number;
    education: number;
    language: number;
    family: number;
  };

  // Additional Info
  processingTimeWeeks: number;
  validityYears: number;
  pathToPermanentResidency: boolean;
  pathToCitizenship: boolean;

  // Cost Information
  applicationFee?: number; // In EUR, represents total estimated cost

  // Metadata
  description: string;
  officialUrl?: string;
  notes?: string;
}

/**
 * Program Match Result
 * Result of matching a user to a visa program
 */
export interface ProgramMatchResult {
  program: VisaProgram;
  isEligible: boolean;
  eligibilityScore: number; // 0-100
  missingRequirements: string[]; // Hard requirements that make user ineligible
  recommendedPreparation: string[]; // Soft requirements user should prepare
  matchReason: string;
  alignsWithUserPath: boolean;
  alignsWithTimeline: boolean;
}

