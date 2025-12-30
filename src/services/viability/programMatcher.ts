/**
 * Program Matcher Service
 * Evaluates user eligibility for visa programs
 */

import type { UserProfile } from '../../types/user';
import type { VisaProgram, ProgramMatchResult } from '../../types/viability';
import { ALL_VISA_PROGRAMS } from '../../data/visaPrograms';

/**
 * Calculate age from date of birth
 */
function calculateAge(dateOfBirth: string): number {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

/**
 * Get education level rank (for comparison)
 */
function getEducationRank(level: string): number {
  const ranks: Record<string, number> = {
    high_school: 1,
    bachelor: 2,
    master: 3,
    phd: 4,
  };
  return ranks[level] || 0;
}

/**
 * Get language proficiency rank (for comparison)
 */
function getLanguageProficiencyRank(level: string): number {
  const ranks: Record<string, number> = {
    A1: 1,
    A2: 2,
    B1: 3,
    B2: 4,
    C1: 5,
    C2: 6,
  };
  return ranks[level] || 0;
}

/**
 * Check if user has family in a specific country
 */
function hasFamilyInCountry(profile: UserProfile, countryCode: string): boolean {
  // Check if any family member has immigration status in the target country
  return profile.familyMembers.some(member => 
    member.immigrationStatus?.includes(countryCode) ||
    member.citizenship === countryCode
  );
}

/**
 * Get user's language proficiency for a specific language
 */
function getLanguageProficiency(profile: UserProfile, language: string): string | null {
  const userLanguage = profile.languages.find(
    lang => lang.language && lang.language.toLowerCase() === language.toLowerCase()
  );
  return userLanguage?.proficiency || null;
}

/**
 * Check if user meets program requirements
 */
export function checkEligibility(
  profile: UserProfile,
  program: VisaProgram
): { isEligible: boolean; missingRequirements: string[]; recommendedPreparation: string[]; score: number } {
  const missing: string[] = []; // Hard requirements
  const recommended: string[] = []; // Soft requirements (preparation needed)
  let score = 100; // Start at 100, deduct for missing requirements
  
  const req = program.requirements;
  
  // Check citizenship requirements
  if (req.citizenship && !req.citizenship.includes(profile.citizenship)) {
    missing.push(`Must be citizen of: ${req.citizenship.join(', ')}`);
    return { isEligible: false, missingRequirements: missing, recommendedPreparation: recommended, score: 0 };
  }
  
  // Check age requirements
  if (profile.dateOfBirth) {
    const age = calculateAge(profile.dateOfBirth);
    
    if (req.minAge && age < req.minAge) {
      missing.push(`Minimum age: ${req.minAge} (you are ${age})`);
      score -= 30;
    }
    
    if (req.maxAge && age > req.maxAge) {
      missing.push(`Maximum age: ${req.maxAge} (you are ${age})`);
      score -= 30;
    }
  }
  
  // Check salary requirements
  if (req.minSalary && profile.annualIncome < req.minSalary) {
    const deficit = req.minSalary - profile.annualIncome;
    missing.push(`Minimum salary: €${req.minSalary.toLocaleString()} (you have €${profile.annualIncome.toLocaleString()})`);
    score -= Math.min(40, (deficit / req.minSalary) * 100);
  }
  
  // Check investment requirements
  if (req.minInvestment && profile.savingsAmount < req.minInvestment) {
    const deficit = req.minInvestment - profile.savingsAmount;
    missing.push(`Minimum investment: €${req.minInvestment.toLocaleString()} (you have €${profile.savingsAmount.toLocaleString()})`);
    score -= Math.min(50, (deficit / req.minInvestment) * 100);
  }
  
  // Check savings requirements
  if (req.minSavings && profile.savingsAmount < req.minSavings) {
    const deficit = req.minSavings - profile.savingsAmount;
    missing.push(`Minimum savings: €${req.minSavings.toLocaleString()} (you have €${profile.savingsAmount.toLocaleString()})`);
    score -= Math.min(30, (deficit / req.minSavings) * 100);
  }
  
  // Check passive income requirements
  if (req.minPassiveIncome && profile.annualIncome < req.minPassiveIncome) {
    missing.push(`Minimum passive income: €${req.minPassiveIncome.toLocaleString()}`);
    score -= 30;
  }
  
  // Check education requirements
  if (req.minEducationLevel) {
    const userRank = getEducationRank(profile.educationLevel);
    const requiredRank = getEducationRank(req.minEducationLevel);
    
    if (userRank < requiredRank) {
      missing.push(`Minimum education: ${req.minEducationLevel} (you have ${profile.educationLevel})`);
      score -= 40;
    }
  }
  
  // Check language requirements
  if (req.minLanguageProficiency) {
    // Determine which language to check based on country
    const countryLanguages: Record<string, string> = {
      // MVP Countries
      DE: 'German',
      NL: 'Dutch',
      FR: 'French',
      ES: 'Spanish',
      IT: 'Italian',
      // Phase 8 Countries
      AT: 'German',
      BE: 'Dutch',
      LU: 'French',
      IE: 'English',
      // Phase 9 Countries (Nordic)
      SE: 'Swedish',
      DK: 'Danish',
      FI: 'Finnish',
      // Phase 10 Countries (Mediterranean/Southern Europe)
      PT: 'Portuguese',
      GR: 'Greek',
      CY: 'Greek',
      MT: 'Maltese',
      // Phase 11 Countries (Eastern Europe - Tier 1)
      PL: 'Polish',
      CZ: 'Czech',
      HU: 'Hungarian',
      RO: 'Romanian',
      BG: 'Bulgarian',
      // Phase 12 Countries (Eastern Europe Tier 2 + Baltics)
      SK: 'Slovak',
      SI: 'Slovenian',
      HR: 'Croatian',
      EE: 'Estonian',
      LV: 'Latvian',
      LT: 'Lithuanian',
    };

    const requiredLanguage = countryLanguages[program.countryCode];

    // Only check if we have a language mapping for this country
    if (requiredLanguage) {
      const userProficiency = getLanguageProficiency(profile, requiredLanguage);

      if (!userProficiency) {
        missing.push(`Requires ${requiredLanguage} proficiency: ${req.minLanguageProficiency}`);
        score -= 25;
      } else {
        const userRank = getLanguageProficiencyRank(userProficiency);
        const requiredRank = getLanguageProficiencyRank(req.minLanguageProficiency);

        if (userRank < requiredRank) {
          missing.push(`Requires ${requiredLanguage} ${req.minLanguageProficiency} (you have ${userProficiency})`);
          score -= 20;
        }
      }
    }
  }
  
  // Check job offer requirement
  if (req.requiresJobOffer && !profile.hasJobOffer) {
    missing.push('Requires job offer');
    score -= 50;
  }
  
  // Check business plan requirement (SOFT REQUIREMENT)
  // Business plan can be prepared after deciding to pursue the visa
  if (req.requiresBusinessPlan && profile.employmentStatus !== 'self_employed') {
    recommended.push('Prepare business plan for application');
    score -= 30; // Deduct points but don't mark as ineligible
  }
  
  // Check years of experience
  if (req.minYearsExperience && profile.yearsOfExperience < req.minYearsExperience) {
    const deficit = req.minYearsExperience - profile.yearsOfExperience;
    missing.push(`Minimum experience: ${req.minYearsExperience} years (you have ${profile.yearsOfExperience})`);
    score -= Math.min(30, deficit * 10);
  }
  
  // Check family in country requirement
  if (req.requiresFamilyInCountry && !hasFamilyInCountry(profile, program.countryCode)) {
    missing.push('Requires family member already residing in the country');
    return { isEligible: false, missingRequirements: missing, recommendedPreparation: recommended, score: 0 };
  }

  // Ensure score is between 0 and 100
  score = Math.max(0, Math.min(100, score));

  // Consider eligible if score is above 50 AND no hard requirements missing
  // Soft requirements (in 'recommended') don't affect eligibility
  const isEligible = score >= 50 && missing.length === 0;

  // If not eligible due to missing hard requirements, eligibility score must be 0
  // The eligibility score represents how well you meet HARD requirements
  // If you don't meet them, you get 0, not a partial score
  const finalScore = isEligible ? score : 0;

  return { isEligible, missingRequirements: missing, recommendedPreparation: recommended, score: finalScore };
}

/**
 * Check if program aligns with user's immigration path preference
 */
function alignsWithImmigrationPath(program: VisaProgram, userPath: string): boolean {
  if (userPath === 'all') return true;
  
  const pathMapping: Record<string, string[]> = {
    work_visa: ['work', 'digital_nomad'],
    permanent_residency: ['work', 'entrepreneur', 'investor', 'digital_nomad'],
    citizenship: ['work', 'entrepreneur', 'investor'],
  };
  
  const allowedTypes = pathMapping[userPath] || [];
  return allowedTypes.includes(program.type);
}

/**
 * Check if program can be completed within user's timeline
 */
function alignsWithTimeline(program: VisaProgram, timelineMonths?: number): boolean {
  if (!timelineMonths) return true;
  
  const processingTimeMonths = program.processingTimeWeeks / 4;
  
  // Add buffer time for preparation (3-6 months depending on program complexity)
  const bufferMonths = program.requirements.requiresBusinessPlan ? 6 : 3;
  const totalTimeMonths = processingTimeMonths + bufferMonths;
  
  return totalTimeMonths <= timelineMonths;
}

/**
 * Match user to all eligible visa programs
 */
export function matchUserToPrograms(profile: UserProfile): ProgramMatchResult[] {
  const results: ProgramMatchResult[] = [];
  
  for (const program of ALL_VISA_PROGRAMS) {
    const eligibility = checkEligibility(profile, program);

    const matchReason = eligibility.isEligible
      ? `You meet ${Math.round(eligibility.score)}% of requirements`
      : `Missing ${eligibility.missingRequirements.length} key requirements`;

    results.push({
      program,
      isEligible: eligibility.isEligible,
      eligibilityScore: eligibility.score,
      missingRequirements: eligibility.missingRequirements,
      recommendedPreparation: eligibility.recommendedPreparation,
      matchReason,
      alignsWithUserPath: alignsWithImmigrationPath(program, profile.immigrationPath),
      alignsWithTimeline: alignsWithTimeline(program, profile.timelineMonths),
    });
  }
  
  // Sort by eligibility score (highest first)
  return results.sort((a, b) => b.eligibilityScore - a.eligibilityScore);
}

/**
 * Get best matching programs for a specific country
 * Note: Does not filter by timeline - timeline alignment is reflected in preference scoring
 */
export function getBestProgramsForCountry(
  profile: UserProfile,
  countryCode: string,
  limit: number = 3
): ProgramMatchResult[] {
  const allMatches = matchUserToPrograms(profile);

  return allMatches
    .filter(match => match.program.countryCode === countryCode)
    .slice(0, limit);
}

