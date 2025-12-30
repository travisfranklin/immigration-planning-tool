/**
 * Viability Calculator
 * Main service that calculates viability scores for all countries
 */

import type { UserProfile } from '../../types/user';
import type { ViabilityScore, ComponentScore, RiskFactor, Contingency } from '../../types/viability';
import type { VisaProgram } from '../../types/viability';
import { getViabilityLevel } from '../../types/viability';
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
  
  const bestProgram = bestMatch.program;

  // Calculate component scores using the best program
  const componentScores = calculateComponentScores(profile, bestProgram);

  // Prepare eligibility check data
  const eligibilityCheck = {
    isEligible: bestMatch.isEligible,
    score: bestMatch.eligibilityScore,
  };

  // Calculate overall score using program-specific weights and eligibility
  const scoreResult = calculateOverallScore(
    componentScores,
    bestProgram.weights,
    eligibilityCheck
  );

  // Calculate user preference boost
  const preferenceBoost = calculateTotalPreferenceBoost(bestProgram, profile);

  // Apply preference boost to overall score (only if eligible)
  // If not eligible, score is already capped at 25
  const overallScore = scoreResult.meetsHardRequirements
    ? Math.max(0, Math.min(100, scoreResult.overallScore + preferenceBoost))
    : scoreResult.overallScore; // Don't boost ineligible programs
  
  // Generate risk factors and contingencies
  const riskFactors = generateRiskFactors(profile, bestProgram, componentScores);
  const contingencies = generateContingencies(profile, bestProgram, riskFactors);
  const overallRiskLevel = determineOverallRiskLevel(riskFactors);
  
  // Get alternative programs
  const alternativePrograms = sortedMatches.slice(1, 4).map(match => ({
    programId: match.program.id,
    programName: match.program.name,
    programType: match.program.type,
    eligibilityScore: Math.round(match.eligibilityScore),
    whyNotRecommended: match.eligibilityScore < bestMatch.eligibilityScore
      ? `Lower overall score (${Math.round(match.eligibilityScore)} vs ${Math.round(bestMatch.eligibilityScore)})`
      : 'Alternative option',
  }));
  
  const now = Date.now();

  return {
    id: `score_${countryCode}_${now}_${Math.random().toString(36).substring(2, 11)}`,
    userId,
    countryCode,
    countryName: COUNTRY_NAMES[countryCode] || countryCode,
    createdAt: now,
    updatedAt: now,
    componentScores,
    overallScore,
    viabilityLevel: getViabilityLevel(overallScore),
    // Eligibility information (NEW)
    meetsHardRequirements: scoreResult.meetsHardRequirements,
    missingRequirements: bestMatch.missingRequirements,
    competitiveScore: scoreResult.competitiveScore,
    // Risk assessment
    riskFactors,
    overallRiskLevel,
    contingencies,
    recommendedProgram: {
      programId: bestProgram.id,
      programName: bestProgram.name,
      programType: bestProgram.type,
      eligibilityScore: Math.round(bestMatch.eligibilityScore),
      matchReason: bestMatch.matchReason,
      alignsWithUserPath: bestMatch.alignsWithUserPath,
      alignsWithTimeline: bestMatch.alignsWithTimeline,
      requiresJobOffer: bestProgram.requirements.requiresJobOffer || false,
    },
    alternativePrograms,
    userPreferenceBoost: preferenceBoost,
    estimatedTimelineMonths: Math.ceil(bestProgram.processingTimeWeeks / 4),
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

