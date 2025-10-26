/**
 * Education Scorer
 * Calculates education component score based on education level and field of study
 */

import type { UserProfile, EducationLevel } from '../../../types/user';
import type { VisaProgram } from '../../../types/viability';

/**
 * Get education level rank (for comparison)
 */
function getEducationRank(level: EducationLevel): number {
  const ranks: Record<EducationLevel, number> = {
    '': 0,
    high_school: 1,
    bachelor: 2,
    master: 3,
    phd: 4,
  };
  return ranks[level] || 0;
}

/**
 * Score based on education level
 */
function scoreEducationLevel(profile: UserProfile, program: VisaProgram): number {
  const userRank = getEducationRank(profile.educationLevel);
  const minRequired = program.requirements.minEducationLevel;
  
  if (!minRequired) {
    // No requirement - score based on general education level
    if (profile.educationLevel === 'phd') return 100;
    if (profile.educationLevel === 'master') return 90;
    if (profile.educationLevel === 'bachelor') return 80;
    if (profile.educationLevel === 'high_school') return 60;
    return 50;
  }
  
  const requiredRank = getEducationRank(minRequired);
  
  // User doesn't meet minimum
  if (userRank < requiredRank) {
    return Math.max(20, (userRank / requiredRank) * 60);
  }
  
  // User meets or exceeds minimum
  const excessRanks = userRank - requiredRank;
  return 70 + (excessRanks * 10); // 70 for meeting, +10 for each level above
}

/**
 * Score based on field of study relevance
 * This is a simplified version - in production, you'd match against occupation demand
 */
function scoreFieldOfStudy(fieldOfStudy: string, occupation: string): number {
  const field = fieldOfStudy.toLowerCase();
  const job = occupation.toLowerCase();
  
  // High-demand fields (STEM, Healthcare, Business)
  const highDemandFields = [
    'computer science', 'software', 'engineering', 'data science',
    'medicine', 'nursing', 'healthcare', 'pharmacy',
    'business', 'finance', 'economics', 'accounting',
    'mathematics', 'physics', 'chemistry', 'biology',
  ];
  
  const isHighDemand = highDemandFields.some(keyword => field.includes(keyword));
  
  // Check if field aligns with occupation
  const fieldAligns = field.includes(job) || job.includes(field);
  
  if (isHighDemand && fieldAligns) return 100;
  if (isHighDemand) return 85;
  if (fieldAligns) return 80;
  
  // Medium-demand fields
  const mediumDemandFields = [
    'education', 'teaching', 'law', 'architecture',
    'design', 'marketing', 'communications',
  ];
  
  const isMediumDemand = mediumDemandFields.some(keyword => field.includes(keyword));
  
  if (isMediumDemand && fieldAligns) return 80;
  if (isMediumDemand) return 70;
  
  // Other fields
  return 60;
}

/**
 * Score based on education-occupation alignment
 */
function scoreEducationOccupationAlignment(profile: UserProfile): number {
  const educationLevel = profile.educationLevel;
  const occupation = profile.currentOccupation.toLowerCase();
  
  // High-skill occupations that typically require advanced degrees
  const advancedDegreeOccupations = [
    'doctor', 'physician', 'surgeon', 'professor', 'researcher',
    'scientist', 'architect', 'lawyer', 'engineer',
  ];
  
  const requiresAdvancedDegree = advancedDegreeOccupations.some(keyword => 
    occupation.includes(keyword)
  );
  
  if (requiresAdvancedDegree) {
    if (educationLevel === 'phd' || educationLevel === 'master') return 100;
    if (educationLevel === 'bachelor') return 70;
    return 40;
  }
  
  // Professional occupations that typically require bachelor's
  const bachelorOccupations = [
    'developer', 'programmer', 'analyst', 'consultant',
    'manager', 'accountant', 'designer', 'teacher',
  ];
  
  const requiresBachelor = bachelorOccupations.some(keyword => 
    occupation.includes(keyword)
  );
  
  if (requiresBachelor) {
    if (educationLevel === 'phd' || educationLevel === 'master') return 100;
    if (educationLevel === 'bachelor') return 90;
    return 50;
  }
  
  // Other occupations
  if (educationLevel === 'phd' || educationLevel === 'master') return 90;
  if (educationLevel === 'bachelor') return 80;
  return 70;
}

/**
 * Calculate overall education score
 */
export function calculateEducationScore(profile: UserProfile, program: VisaProgram): number {
  const levelScore = scoreEducationLevel(profile, program);
  const fieldScore = scoreFieldOfStudy(profile.fieldOfStudy, profile.currentOccupation);
  const alignmentScore = scoreEducationOccupationAlignment(profile);
  
  // Weight the sub-components
  const weights = {
    level: 0.50,      // Education level is most important
    field: 0.30,      // Field of study relevance
    alignment: 0.20,  // Education-occupation alignment
  };
  
  const totalScore = 
    levelScore * weights.level +
    fieldScore * weights.field +
    alignmentScore * weights.alignment;
  
  return Math.round(Math.max(0, Math.min(100, totalScore)));
}

/**
 * Get detailed breakdown of education score
 */
export function getEducationScoreBreakdown(profile: UserProfile, program: VisaProgram): {
  totalScore: number;
  components: Array<{ name: string; score: number; weight: number }>;
} {
  const levelScore = scoreEducationLevel(profile, program);
  const fieldScore = scoreFieldOfStudy(profile.fieldOfStudy, profile.currentOccupation);
  const alignmentScore = scoreEducationOccupationAlignment(profile);
  
  return {
    totalScore: calculateEducationScore(profile, program),
    components: [
      { name: 'Education Level', score: Math.round(levelScore), weight: 0.50 },
      { name: 'Field of Study', score: Math.round(fieldScore), weight: 0.30 },
      { name: 'Education-Occupation Alignment', score: Math.round(alignmentScore), weight: 0.20 },
    ],
  };
}

