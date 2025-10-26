/**
 * Family Scorer
 * Calculates family component score based on marital status, dependents, and family ties
 */

import type { UserProfile } from '../../../types/user';
import type { VisaProgram } from '../../../types/viability';

/**
 * Check if user has family in a specific country
 */
function hasFamilyInCountry(profile: UserProfile, countryCode: string): boolean {
  return profile.familyMembers.some(member => 
    member.immigrationStatus?.includes(countryCode) ||
    member.citizenship === countryCode
  );
}

/**
 * Count dependents (spouse and children)
 */
function countDependents(profile: UserProfile): number {
  return profile.familyMembers.filter(member => 
    member.relationship === 'spouse' || member.relationship === 'child'
  ).length;
}

/**
 * Score based on family ties in the country
 * Having family in the country is a major advantage for family reunification visas
 */
function scoreFamilyTies(profile: UserProfile, program: VisaProgram): number {
  const hasFamily = hasFamilyInCountry(profile, program.countryCode);
  
  // For family reunification visas, this is critical
  if (program.type === 'family_reunification') {
    return hasFamily ? 100 : 0;
  }
  
  // For other visas, it's a bonus
  if (hasFamily) {
    return 90; // Strong bonus for having family in country
  }
  
  // Check if family is in EU (easier to visit/relocate)
  const hasEUFamily = profile.familyMembers.some(member => {
    const euCountries = ['DE', 'NL', 'FR', 'ES', 'IT', 'BE', 'AT', 'PT', 'GR', 'PL'];
    return euCountries.includes(member.citizenship || '');
  });
  
  if (hasEUFamily) {
    return 70; // Moderate bonus for EU family
  }
  
  return 50; // Neutral score
}

/**
 * Score based on marital status and family situation
 */
function scoreMaritalStatus(profile: UserProfile, program: VisaProgram): number {
  const maritalStatus = profile.maritalStatus;
  const dependentCount = countDependents(profile);
  
  // For family reunification, having family is essential
  if (program.type === 'family_reunification') {
    if (dependentCount > 0) return 100;
    if (maritalStatus === 'married') return 90;
    return 40;
  }
  
  // For other programs, consider family-friendliness
  const isFamilyFriendly = program.pathToPermanentResidency && program.pathToCitizenship;
  
  if (dependentCount === 0) {
    // Single/no dependents - easier to relocate
    if (maritalStatus === 'single') return 90;
    if (maritalStatus === 'divorced' || maritalStatus === 'widowed') return 85;
    if (maritalStatus === 'married') return 70; // Married but no dependents listed
    return 80;
  }
  
  // Has dependents
  if (isFamilyFriendly) {
    // Program is good for families
    if (dependentCount === 1) return 80;
    if (dependentCount === 2) return 75;
    if (dependentCount >= 3) return 70;
  } else {
    // Program is not ideal for families
    if (dependentCount === 1) return 60;
    if (dependentCount === 2) return 50;
    if (dependentCount >= 3) return 40;
  }
  
  return 70;
}

/**
 * Score based on family adaptability
 * Considers if family members speak the language or have relevant skills
 */
function scoreFamilyAdaptability(profile: UserProfile, program: VisaProgram): number {
  const dependentCount = countDependents(profile);
  
  if (dependentCount === 0) {
    return 80; // No dependents, neutral score
  }
  
  // Check if any family members have citizenship in EU
  const familyHasEUCitizenship = profile.familyMembers.some(member => {
    const euCountries = ['DE', 'NL', 'FR', 'ES', 'IT', 'BE', 'AT', 'PT', 'GR', 'PL'];
    return euCountries.includes(member.citizenship || '');
  });
  
  if (familyHasEUCitizenship) {
    return 100; // Family member has EU citizenship - huge advantage
  }
  
  // Check if family is in the target country
  const familyInCountry = hasFamilyInCountry(profile, program.countryCode);
  
  if (familyInCountry) {
    return 95; // Family already in country - very adaptable
  }
  
  // Default scoring based on family size
  // Smaller families are generally more adaptable
  if (dependentCount === 1) return 75;
  if (dependentCount === 2) return 70;
  if (dependentCount >= 3) return 65;
  
  return 70;
}

/**
 * Score based on financial capacity to support family
 * More dependents require more financial resources
 */
function scoreFamilyFinancialCapacity(profile: UserProfile): number {
  const dependentCount = countDependents(profile);
  
  if (dependentCount === 0) {
    return 80; // No dependents, neutral score
  }
  
  const income = profile.annualIncome;
  const savings = profile.savingsAmount;
  
  // Estimate required income per dependent (rough estimate)
  const incomePerDependent = 15000; // EUR per year
  const requiredIncome = incomePerDependent * dependentCount;
  
  // Estimate required savings per dependent
  const savingsPerDependent = 10000; // EUR
  const requiredSavings = savingsPerDependent * dependentCount;
  
  let score = 50;
  
  // Score based on income
  if (income >= requiredIncome * 2) score += 30;
  else if (income >= requiredIncome * 1.5) score += 20;
  else if (income >= requiredIncome) score += 10;
  else score -= 10;
  
  // Score based on savings
  if (savings >= requiredSavings * 2) score += 20;
  else if (savings >= requiredSavings * 1.5) score += 15;
  else if (savings >= requiredSavings) score += 10;
  else score -= 10;
  
  return Math.max(0, Math.min(100, score));
}

/**
 * Calculate overall family score
 */
export function calculateFamilyScore(profile: UserProfile, program: VisaProgram): number {
  const familyTiesScore = scoreFamilyTies(profile, program);
  const maritalStatusScore = scoreMaritalStatus(profile, program);
  const adaptabilityScore = scoreFamilyAdaptability(profile, program);
  const financialCapacityScore = scoreFamilyFinancialCapacity(profile);
  
  // Weight the sub-components
  const weights = {
    familyTies: 0.40,        // Family in country is most important
    maritalStatus: 0.25,     // Marital status and dependents
    adaptability: 0.20,      // Family adaptability
    financialCapacity: 0.15, // Ability to support family
  };
  
  const totalScore = 
    familyTiesScore * weights.familyTies +
    maritalStatusScore * weights.maritalStatus +
    adaptabilityScore * weights.adaptability +
    financialCapacityScore * weights.financialCapacity;
  
  return Math.round(Math.max(0, Math.min(100, totalScore)));
}

/**
 * Get detailed breakdown of family score
 */
export function getFamilyScoreBreakdown(profile: UserProfile, program: VisaProgram): {
  totalScore: number;
  components: Array<{ name: string; score: number; weight: number }>;
  hasFamilyInCountry: boolean;
  dependentCount: number;
} {
  const familyTiesScore = scoreFamilyTies(profile, program);
  const maritalStatusScore = scoreMaritalStatus(profile, program);
  const adaptabilityScore = scoreFamilyAdaptability(profile, program);
  const financialCapacityScore = scoreFamilyFinancialCapacity(profile);
  
  return {
    totalScore: calculateFamilyScore(profile, program),
    components: [
      { name: 'Family Ties in Country', score: Math.round(familyTiesScore), weight: 0.40 },
      { name: 'Marital Status', score: Math.round(maritalStatusScore), weight: 0.25 },
      { name: 'Family Adaptability', score: Math.round(adaptabilityScore), weight: 0.20 },
      { name: 'Financial Capacity', score: Math.round(financialCapacityScore), weight: 0.15 },
    ],
    hasFamilyInCountry: hasFamilyInCountry(profile, program.countryCode),
    dependentCount: countDependents(profile),
  };
}

