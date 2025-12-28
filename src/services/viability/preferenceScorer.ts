/**
 * User Preference Scorer
 * Calculates score adjustments based on user preferences
 */

import type { UserProfile } from '../../types/user';
import type { VisaProgram, ProgramMatchResult } from '../../types/viability';

/**
 * Calculate boost for target countries
 * Users who selected specific countries get a boost for those countries
 */
export function calculateTargetCountryBoost(
  program: VisaProgram,
  profile: UserProfile
): number {
  if (!profile.targetCountries || profile.targetCountries.length === 0) {
    return 0;
  }
  
  const isTargetCountry = profile.targetCountries.includes(program.countryCode);
  
  // Boost by 15 points if this is a target country
  return isTargetCountry ? 15 : 0;
}

/**
 * Calculate boost/penalty based on immigration path alignment
 */
export function calculateImmigrationPathBoost(
  program: VisaProgram,
  profile: UserProfile
): number {
  if (profile.immigrationPath === 'all') {
    return 0; // No preference, no adjustment
  }
  
  const pathMapping: Record<string, { boost: string[]; neutral: string[]; penalty: string[] }> = {
    work_visa: {
      boost: ['work', 'digital_nomad'],
      neutral: ['job_seeker'],
      penalty: ['investor', 'entrepreneur', 'family_reunification'],
    },
    permanent_residency: {
      boost: ['work', 'entrepreneur', 'investor'],
      neutral: ['digital_nomad'],
      penalty: ['job_seeker'],
    },
    citizenship: {
      boost: ['work', 'entrepreneur', 'investor'],
      neutral: [],
      penalty: ['job_seeker', 'digital_nomad'],
    },
  };
  
  const mapping = pathMapping[profile.immigrationPath];
  if (!mapping) return 0;
  
  if (mapping.boost.includes(program.type)) {
    return 10; // Boost programs that align with user's path
  }
  
  if (mapping.penalty.includes(program.type)) {
    return -15; // Penalize programs that don't align
  }
  
  return 0; // Neutral programs
}

/**
 * Calculate boost/penalty based on timeline alignment
 */
export function calculateTimelineBoost(
  program: VisaProgram,
  profile: UserProfile
): number {
  if (!profile.timelineMonths) {
    return 0;
  }
  
  const processingTimeMonths = program.processingTimeWeeks / 4;
  const bufferMonths = program.requirements.requiresBusinessPlan ? 6 : 3;
  const totalTimeMonths = processingTimeMonths + bufferMonths;
  
  // Short timeline (< 12 months)
  if (profile.timelineMonths < 12) {
    if (totalTimeMonths <= 6) {
      return 15; // Fast programs get big boost
    } else if (totalTimeMonths <= 12) {
      return 5; // Moderate programs get small boost
    } else {
      return -20; // Slow programs get penalty
    }
  }
  
  // Medium timeline (12-36 months)
  if (profile.timelineMonths <= 36) {
    if (totalTimeMonths <= 12) {
      return 5; // Fast programs get small boost
    } else if (totalTimeMonths <= 24) {
      return 0; // Moderate programs are neutral
    } else {
      return -10; // Slow programs get small penalty
    }
  }
  
  // Long timeline (> 36 months)
  return 0; // All programs are acceptable
}

/**
 * Calculate boost based on job offer status
 */
export function calculateJobOfferBoost(
  program: VisaProgram,
  profile: UserProfile
): number {
  if (!profile.hasJobOffer) {
    // No job offer - penalize programs that require one
    if (program.requirements.requiresJobOffer) {
      return -40; // Heavy penalty for programs requiring job offer
    }
    
    // Boost job seeker and entrepreneur programs
    if (program.type === 'job_seeker' || program.type === 'entrepreneur') {
      return 10;
    }
    
    return 0;
  }
  
  // Has job offer
  if (program.requirements.requiresJobOffer) {
    return 35; // Massive boost for programs requiring job offer
  }
  
  // Penalize job seeker visas (redundant if you already have a job)
  if (program.type === 'job_seeker') {
    return -25;
  }
  
  return 0;
}

/**
 * Calculate boost if job offer is in the same country as the program
 */
export function calculateJobOfferCountryBoost(
  program: VisaProgram,
  profile: UserProfile
): number {
  if (!profile.hasJobOffer || !profile.jobOfferCountry) {
    return 0;
  }
  
  // Massive boost if job offer is in this country
  if (profile.jobOfferCountry === program.countryCode) {
    return 25;
  }
  
  return 0;
}

/**
 * Calculate boost based on family members
 */
export function calculateFamilyBoost(
  program: VisaProgram,
  profile: UserProfile
): number {
  const hasDependents = profile.familyMembers.some(
    member => member.relationship === 'spouse' || member.relationship === 'child'
  );
  
  if (!hasDependents) {
    return 0;
  }
  
  // Boost family reunification programs if user has dependents
  if (program.type === 'family_reunification') {
    return 20;
  }
  
  // Boost programs with clear path to PR/citizenship (better for families)
  if (program.pathToPermanentResidency && program.pathToCitizenship) {
    return 5;
  }
  
  return 0;
}

/**
 * Calculate boost based on path to permanent residency/citizenship
 */
export function calculatePathBoost(
  program: VisaProgram,
  profile: UserProfile
): number {
  // If user wants PR or citizenship, boost programs with clear paths
  if (profile.immigrationPath === 'permanent_residency' || profile.immigrationPath === 'citizenship') {
    if (program.pathToPermanentResidency && program.pathToCitizenship) {
      return 10;
    } else if (program.pathToPermanentResidency) {
      return 5;
    } else {
      return -15; // Penalize programs without PR path
    }
  }
  
  return 0;
}

/**
 * Calculate total user preference boost for a program
 */
export function calculateTotalPreferenceBoost(
  program: VisaProgram,
  profile: UserProfile
): number {
  const targetCountryBoost = calculateTargetCountryBoost(program, profile);
  const immigrationPathBoost = calculateImmigrationPathBoost(program, profile);
  const timelineBoost = calculateTimelineBoost(program, profile);
  const jobOfferBoost = calculateJobOfferBoost(program, profile);
  const jobOfferCountryBoost = calculateJobOfferCountryBoost(program, profile);
  const familyBoost = calculateFamilyBoost(program, profile);
  const pathBoost = calculatePathBoost(program, profile);
  
  const total = 
    targetCountryBoost +
    immigrationPathBoost +
    timelineBoost +
    jobOfferBoost +
    jobOfferCountryBoost +
    familyBoost +
    pathBoost;
  
  // Cap the total boost/penalty at +/- 50 points
  return Math.max(-50, Math.min(50, total));
}

/**
 * Apply user preference adjustments to program match results
 */
export function applyPreferenceAdjustments(
  matches: ProgramMatchResult[],
  profile: UserProfile
): ProgramMatchResult[] {
  return matches.map(match => {
    const preferenceBoost = calculateTotalPreferenceBoost(match.program, profile);

    // Adjust eligibility score with preference boost
    const adjustedScore = Math.max(0, Math.min(100, match.eligibilityScore + preferenceBoost));

    // Update matchReason to reflect preference boost
    let newMatchReason = match.matchReason;
    if (match.isEligible && preferenceBoost !== 0) {
      const baseScore = Math.round(match.eligibilityScore);
      newMatchReason = `You meet ${baseScore}% of requirements`;
    }

    return {
      ...match,
      eligibilityScore: adjustedScore,
      matchReason: newMatchReason,
    };
  });
}

/**
 * Get explanation of preference adjustments
 */
export function getPreferenceExplanation(
  program: VisaProgram,
  profile: UserProfile
): string[] {
  const explanations: string[] = [];
  
  const targetCountryBoost = calculateTargetCountryBoost(program, profile);
  if (targetCountryBoost > 0) {
    explanations.push(`+${targetCountryBoost} points: Selected as target country`);
  }
  
  const immigrationPathBoost = calculateImmigrationPathBoost(program, profile);
  if (immigrationPathBoost > 0) {
    explanations.push(`+${immigrationPathBoost} points: Aligns with your immigration path`);
  } else if (immigrationPathBoost < 0) {
    explanations.push(`${immigrationPathBoost} points: Does not align with your immigration path`);
  }
  
  const timelineBoost = calculateTimelineBoost(program, profile);
  if (timelineBoost > 0) {
    explanations.push(`+${timelineBoost} points: Fits your timeline`);
  } else if (timelineBoost < 0) {
    explanations.push(`${timelineBoost} points: May not fit your timeline`);
  }
  
  const jobOfferBoost = calculateJobOfferBoost(program, profile);
  if (jobOfferBoost > 0) {
    explanations.push(`+${jobOfferBoost} points: You have a job offer`);
  } else if (jobOfferBoost < 0) {
    explanations.push(`${jobOfferBoost} points: Requires job offer (you don't have one)`);
  }
  
  const jobOfferCountryBoost = calculateJobOfferCountryBoost(program, profile);
  if (jobOfferCountryBoost > 0) {
    explanations.push(`+${jobOfferCountryBoost} points: Job offer in this country`);
  }
  
  const familyBoost = calculateFamilyBoost(program, profile);
  if (familyBoost > 0) {
    explanations.push(`+${familyBoost} points: Good for families`);
  }
  
  const pathBoost = calculatePathBoost(program, profile);
  if (pathBoost > 0) {
    explanations.push(`+${pathBoost} points: Clear path to PR/citizenship`);
  } else if (pathBoost < 0) {
    explanations.push(`${pathBoost} points: No clear path to PR/citizenship`);
  }
  
  return explanations;
}

