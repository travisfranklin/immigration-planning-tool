/**
 * Viability Calculator
 * Main service that calculates viability scores for all countries
 */

import type { UserProfile } from '../../types/user';
import type { ViabilityScore, ComponentScore, RiskFactor, Contingency, ProgramViabilityData } from '../../types/viability';
import type { VisaProgram } from '../../types/viability';
import { getViabilityLevel } from '../../types/viability';
import type { ProgramMatchResult } from '../../types/viability';
import { COUNTRY_NAMES } from '../../types/country';
import { getBestProgramsForCountry } from './programMatcher';
import { applyPreferenceAdjustments, calculateTotalPreferenceBoost } from './preferenceScorer';
import { calculateCareerScore } from './scorers/careerScorer';
import { calculateFinancialScore } from './scorers/financialScorer';
import { calculateEducationScore } from './scorers/educationScorer';
import { calculateLanguageScore } from './scorers/languageScorer';
import { calculateFamilyScore } from './scorers/familyScorer';

/**
 * Calculate component scores for a specific program
 */
export function calculateComponentScores(
  profile: UserProfile,
  program: VisaProgram
): ComponentScore {
  return {
    career: calculateCareerScore(profile, program),
    financial: calculateFinancialScore(profile, program),
    education: calculateEducationScore(profile, program),
    language: calculateLanguageScore(profile, program),
    family: calculateFamilyScore(profile, program),
  };
}

/**
 * Result of overall score calculation
 */
export interface OverallScoreResult {
  overallScore: number; // Final score (capped at 25 if not eligible)
  competitiveScore: number; // Weighted average (0-100)
  meetsHardRequirements: boolean; // Eligibility status
}

/**
 * Calculate overall score from component scores using program-specific weights
 * Implements two-stage scoring: eligibility check + competitive scoring
 */
export function calculateOverallScore(
  componentScores: ComponentScore,
  programWeights: VisaProgram['weights'],
  eligibilityCheck: { isEligible: boolean; score: number }
): OverallScoreResult {
  // Calculate competitive score (weighted average of component scores)
  const competitiveScore =
    componentScores.career * programWeights.career +
    componentScores.financial * programWeights.financial +
    componentScores.education * programWeights.education +
    componentScores.language * programWeights.language +
    componentScores.family * programWeights.family;

  const roundedCompetitiveScore = Math.round(Math.max(0, Math.min(100, competitiveScore)));

  // Determine overall score based on eligibility
  let overallScore: number;

  if (eligibilityCheck.isEligible) {
    // User meets all hard requirements - use full competitive score
    overallScore = roundedCompetitiveScore;
  } else {
    // User doesn't meet hard requirements - cap at 25 (Very Low viability)
    // This prevents false hope for programs user doesn't qualify for
    overallScore = Math.min(25, eligibilityCheck.score);
  }

  return {
    overallScore,
    competitiveScore: roundedCompetitiveScore,
    meetsHardRequirements: eligibilityCheck.isEligible,
  };
}

/**
 * Generate risk factors based on profile and program
 */
export function generateRiskFactors(
  profile: UserProfile,
  program: { countryCode: string; requirements: { requiresJobOffer?: boolean; minEducationLevel?: string } },
  componentScores: ComponentScore
): RiskFactor[] {
  const risks: RiskFactor[] = [];
  
  // Financial risks
  if (componentScores.financial < 60) {
    risks.push({
      id: `risk_financial_${Date.now()}`,
      category: 'financial',
      severity: componentScores.financial < 40 ? 'high' : 'medium',
      description: 'Insufficient financial resources for comfortable living',
      mitigation: 'Increase savings or secure higher-paying job offer',
    });
  }
  
  // Language risks
  if (componentScores.language < 50) {
    risks.push({
      id: `risk_language_${Date.now()}`,
      category: 'language',
      severity: componentScores.language < 30 ? 'high' : 'medium',
      description: `Limited proficiency in ${COUNTRY_NAMES[program.countryCode]} language`,
      mitigation: 'Enroll in language courses before relocation',
    });
  }
  
  // Employment risks
  if (!profile.hasJobOffer && program.requirements.requiresJobOffer) {
    risks.push({
      id: `risk_employment_${Date.now()}`,
      category: 'employment',
      severity: 'high',
      description: 'No job offer (required for this visa program)',
      mitigation: 'Apply for jobs or consider alternative visa programs',
    });
  }
  
  // Legal/documentation risks
  if (componentScores.education < 60 && program.requirements.minEducationLevel) {
    risks.push({
      id: `risk_legal_${Date.now()}`,
      category: 'legal',
      severity: 'high',
      description: 'Education level may not meet visa requirements',
      mitigation: 'Pursue additional education or certifications',
    });
  }
  
  // Family risks
  if (profile.familyMembers.length > 0 && componentScores.family < 60) {
    risks.push({
      id: `risk_family_${Date.now()}`,
      category: 'family',
      severity: 'medium',
      description: 'Family relocation may be challenging',
      mitigation: 'Research family visa requirements and costs',
    });
  }
  
  return risks;
}

/**
 * Generate contingency plans based on profile and risks
 */
export function generateContingencies(
  profile: UserProfile,
  _program: VisaProgram,
  risks: RiskFactor[]
): Contingency[] {
  const contingencies: Contingency[] = [];
  
  // Job loss contingency
  if (profile.hasJobOffer) {
    contingencies.push({
      id: `contingency_job_loss_${Date.now()}`,
      scenario: 'Job offer falls through or job loss after arrival',
      description: 'Have backup plan if employment situation changes',
      action: 'Maintain 6-12 months of living expenses in savings',
      timeframe: 'Before relocation',
    });
  }
  
  // Language barrier contingency
  if (risks.some(r => r.category === 'language')) {
    contingencies.push({
      id: `contingency_language_${Date.now()}`,
      scenario: 'Difficulty adapting due to language barrier',
      description: 'Language challenges may affect daily life and work',
      action: 'Start language learning now, plan for intensive courses upon arrival',
      timeframe: '3-6 months before relocation',
    });
  }
  
  // Financial contingency
  if (risks.some(r => r.category === 'financial')) {
    contingencies.push({
      id: `contingency_financial_${Date.now()}`,
      scenario: 'Higher than expected cost of living',
      description: 'Living expenses may exceed estimates',
      action: 'Build emergency fund of 12+ months expenses',
      timeframe: 'Before relocation',
    });
  }
  
  // Visa rejection contingency
  contingencies.push({
    id: `contingency_visa_rejection_${Date.now()}`,
    scenario: 'Visa application is rejected',
    description: 'Application may be denied despite meeting requirements',
    action: 'Have alternative country/program options ready',
    timeframe: 'During application process',
  });
  
  return contingencies;
}

/**
 * Determine overall risk level
 */
function determineOverallRiskLevel(risks: RiskFactor[]): 'low' | 'medium' | 'high' {
  const highRisks = risks.filter(r => r.severity === 'high').length;
  const mediumRisks = risks.filter(r => r.severity === 'medium').length;

  if (highRisks >= 2) return 'high';
  if (highRisks >= 1 || mediumRisks >= 3) return 'medium';
  return 'low';
}

/**
 * Calculate full viability data for a single program
 */
function calculateProgramViabilityData(
  profile: UserProfile,
  match: ProgramMatchResult,
  bestMatch: ProgramMatchResult | null
): ProgramViabilityData {
  const program = match.program;

  // Calculate component scores for this program
  const componentScores = calculateComponentScores(profile, program);

  // Prepare eligibility check data
  const eligibilityCheck = {
    isEligible: match.isEligible,
    score: match.eligibilityScore,
  };

  // Calculate overall score using program-specific weights
  const scoreResult = calculateOverallScore(
    componentScores,
    program.weights,
    eligibilityCheck
  );

  // Calculate preference boost
  const preferenceBoost = calculateTotalPreferenceBoost(program, profile);

  // Apply preference boost only if eligible
  const overallScore = scoreResult.meetsHardRequirements
    ? Math.max(0, Math.min(100, scoreResult.overallScore + preferenceBoost))
    : scoreResult.overallScore;

  // Generate risk factors and contingencies for this program
  const riskFactors = generateRiskFactors(profile, program, componentScores);
  const contingencies = generateContingencies(profile, program, riskFactors);
  const overallRiskLevel = determineOverallRiskLevel(riskFactors);

  // Determine why this isn't recommended (for alternatives)
  let whyNotRecommended: string | undefined;
  if (bestMatch && match.program.id !== bestMatch.program.id) {
    if (match.eligibilityScore < bestMatch.eligibilityScore) {
      whyNotRecommended = `Lower overall score (${Math.round(match.eligibilityScore)} vs ${Math.round(bestMatch.eligibilityScore)})`;
    } else {
      whyNotRecommended = 'Alternative option';
    }
  }

  return {
    programId: program.id,
    programName: program.name,
    programType: program.type,
    eligibilityScore: Math.round(match.eligibilityScore),
    componentScores,
    overallScore,
    matchReason: match.matchReason,
    alignsWithUserPath: match.alignsWithUserPath,
    alignsWithTimeline: match.alignsWithTimeline,
    requiresJobOffer: program.requirements.requiresJobOffer || false,
    riskFactors,
    overallRiskLevel,
    contingencies,
    meetsHardRequirements: scoreResult.meetsHardRequirements,
    missingRequirements: match.missingRequirements,
    estimatedTimelineMonths: Math.ceil(program.processingTimeWeeks / 4),
    whyNotRecommended,
  };
}

/**
 * Calculate viability score for a specific country
 * Returns null if no programs are available for this country
 */
export async function calculateCountryViability(
  userId: string,
  profile: UserProfile,
  countryCode: string
): Promise<ViabilityScore | null> {
  // Get best matching programs for this country
  const programMatches = getBestProgramsForCountry(profile, countryCode, 5);

  // If no programs are available for this country, return null
  if (programMatches.length === 0) {
    return null;
  }

  // Apply user preference adjustments
  const adjustedMatches = applyPreferenceAdjustments(programMatches, profile);

  // Sort by adjusted score
  const sortedMatches = adjustedMatches.sort((a, b) => b.eligibilityScore - a.eligibilityScore);

  // Get the best program
  const bestMatch = sortedMatches[0];

  if (!bestMatch) {
    return null;
  }

  // Calculate full viability data for recommended program
  const recommendedProgram = calculateProgramViabilityData(profile, bestMatch, null);

  // Calculate full viability data for alternative programs (next 3)
  const alternativePrograms = sortedMatches.slice(1, 4).map(match =>
    calculateProgramViabilityData(profile, match, bestMatch)
  );

  // Calculate user preference boost for the recommended program
  const preferenceBoost = calculateTotalPreferenceBoost(bestMatch.program, profile);

  const now = Date.now();

  return {
    id: `score_${countryCode}_${now}_${Math.random().toString(36).substring(2, 11)}`,
    userId,
    countryCode,
    countryName: COUNTRY_NAMES[countryCode] || countryCode,
    createdAt: now,
    updatedAt: now,
    // Use the recommended program's component scores at the top level for backwards compatibility
    componentScores: recommendedProgram.componentScores,
    overallScore: recommendedProgram.overallScore,
    viabilityLevel: getViabilityLevel(recommendedProgram.overallScore),
    // Eligibility information
    meetsHardRequirements: recommendedProgram.meetsHardRequirements,
    missingRequirements: recommendedProgram.missingRequirements,
    competitiveScore: recommendedProgram.overallScore, // Use program's score
    // Risk assessment (from recommended program)
    riskFactors: recommendedProgram.riskFactors,
    overallRiskLevel: recommendedProgram.overallRiskLevel,
    contingencies: recommendedProgram.contingencies,
    // Programs with full viability data
    recommendedProgram,
    alternativePrograms,
    userPreferenceBoost: preferenceBoost,
    estimatedTimelineMonths: recommendedProgram.estimatedTimelineMonths,
  };
}

/**
 * Calculate viability scores for all countries
 * Excludes countries with no available visa programs
 */
export async function calculateAllCountryViabilities(
  userId: string,
  profile: UserProfile
): Promise<ViabilityScore[]> {
  const scores: ViabilityScore[] = [];

  // Import ALL_COUNTRIES instead of MVP_COUNTRIES to calculate for all 27 EU countries
  const { ALL_COUNTRIES } = await import('../../types/country');

  for (const countryCode of ALL_COUNTRIES) {
    const score = await calculateCountryViability(userId, profile, countryCode);
    // Only include countries that have visa programs available
    if (score !== null) {
      scores.push(score);
    }
  }

  // Sort by overall score (highest first)
  return scores.sort((a, b) => b.overallScore - a.overallScore);
}

