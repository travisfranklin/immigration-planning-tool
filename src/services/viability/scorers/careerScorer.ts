/**
 * Career Scorer
 * Calculates career component score based on occupation, experience, and employment status
 */

import type { UserProfile } from '../../../types/user';
import type { VisaProgram } from '../../../types/viability';

/**
 * Score based on years of experience
 * More experience = higher score
 */
function scoreExperience(yearsOfExperience: number, program: VisaProgram): number {
  const minRequired = program.requirements.minYearsExperience || 0;
  
  // If user doesn't meet minimum, score is low
  if (yearsOfExperience < minRequired) {
    return Math.max(0, (yearsOfExperience / minRequired) * 50);
  }
  
  // Score based on total experience
  if (yearsOfExperience >= 15) return 100;
  if (yearsOfExperience >= 10) return 90;
  if (yearsOfExperience >= 7) return 80;
  if (yearsOfExperience >= 5) return 70;
  if (yearsOfExperience >= 3) return 60;
  if (yearsOfExperience >= 1) return 50;
  
  return 40; // Less than 1 year
}

/**
 * Score based on employment status
 */
function scoreEmploymentStatus(employmentStatus: string, program: VisaProgram): number {
  // For entrepreneur programs, self-employment is best
  if (program.type === 'entrepreneur' || program.type === 'investor') {
    if (employmentStatus === 'self_employed') return 100;
    if (employmentStatus === 'employed') return 70; // Can transition
    if (employmentStatus === 'unemployed') return 50;
    if (employmentStatus === 'student') return 40;
  }
  
  // For work programs, employment is best
  if (program.type === 'work' || program.type === 'digital_nomad') {
    if (employmentStatus === 'employed') return 100;
    if (employmentStatus === 'self_employed') return 90;
    if (employmentStatus === 'unemployed') return 40;
    if (employmentStatus === 'student') return 30;
  }
  
  // For job seeker programs, unemployed is acceptable
  if (program.type === 'job_seeker') {
    if (employmentStatus === 'unemployed') return 100;
    if (employmentStatus === 'employed') return 80; // Looking to switch
    if (employmentStatus === 'self_employed') return 70;
    if (employmentStatus === 'student') return 90; // Recent graduate
  }
  
  // Default scoring
  if (employmentStatus === 'employed') return 80;
  if (employmentStatus === 'self_employed') return 75;
  if (employmentStatus === 'unemployed') return 50;
  if (employmentStatus === 'student') return 40;
  
  return 50;
}

/**
 * Score based on occupation demand
 * This is a simplified version - in production, you'd check against actual occupation demand data
 */
function scoreOccupationDemand(occupation: string): number {
  // High-demand occupations (tech, healthcare, engineering)
  const highDemandKeywords = [
    'software', 'engineer', 'developer', 'programmer', 'data scientist',
    'doctor', 'nurse', 'physician', 'healthcare',
    'teacher', 'professor', 'researcher',
    'architect', 'designer',
  ];
  
  const occupationLower = occupation.toLowerCase();
  const isHighDemand = highDemandKeywords.some(keyword => occupationLower.includes(keyword));
  
  if (isHighDemand) return 90;
  
  // Medium-demand occupations
  const mediumDemandKeywords = [
    'manager', 'analyst', 'consultant', 'accountant',
    'marketing', 'sales', 'business',
    'technician', 'specialist',
  ];
  
  const isMediumDemand = mediumDemandKeywords.some(keyword => occupationLower.includes(keyword));
  
  if (isMediumDemand) return 70;
  
  // Default for other occupations
  return 50;
}

/**
 * Score based on job offer status
 */
function scoreJobOffer(hasJobOffer: boolean, program: VisaProgram): number {
  if (program.requirements.requiresJobOffer) {
    return hasJobOffer ? 100 : 0; // Critical requirement
  }
  
  // For programs that don't require job offer, it's still a bonus
  return hasJobOffer ? 80 : 60;
}

/**
 * Score based on salary alignment with program requirements
 */
function scoreSalary(annualIncome: number, program: VisaProgram): number {
  const minSalary = program.requirements.minSalary;
  
  if (!minSalary) {
    // No salary requirement - score based on general income level
    if (annualIncome >= 100000) return 100;
    if (annualIncome >= 75000) return 90;
    if (annualIncome >= 50000) return 80;
    if (annualIncome >= 35000) return 70;
    if (annualIncome >= 25000) return 60;
    return 50;
  }
  
  // Has salary requirement
  if (annualIncome >= minSalary * 1.5) return 100; // Well above requirement
  if (annualIncome >= minSalary * 1.2) return 90;  // Above requirement
  if (annualIncome >= minSalary) return 80;        // Meets requirement
  if (annualIncome >= minSalary * 0.8) return 60;  // Close to requirement
  if (annualIncome >= minSalary * 0.6) return 40;  // Below requirement
  
  return 20; // Significantly below requirement
}

/**
 * Calculate overall career score
 */
export function calculateCareerScore(profile: UserProfile, program: VisaProgram): number {
  const experienceScore = scoreExperience(profile.yearsOfExperience, program);
  const employmentScore = scoreEmploymentStatus(profile.employmentStatus, program);
  const occupationScore = scoreOccupationDemand(profile.currentOccupation);
  const jobOfferScore = scoreJobOffer(profile.hasJobOffer, program);
  const salaryScore = scoreSalary(profile.annualIncome, program);
  
  // Weight the sub-components
  const weights = {
    experience: 0.20,
    employment: 0.15,
    occupation: 0.20,
    jobOffer: 0.25,
    salary: 0.20,
  };
  
  const totalScore = 
    experienceScore * weights.experience +
    employmentScore * weights.employment +
    occupationScore * weights.occupation +
    jobOfferScore * weights.jobOffer +
    salaryScore * weights.salary;
  
  return Math.round(Math.max(0, Math.min(100, totalScore)));
}

/**
 * Get detailed breakdown of career score
 */
export function getCareerScoreBreakdown(profile: UserProfile, program: VisaProgram): {
  totalScore: number;
  components: Array<{ name: string; score: number; weight: number }>;
} {
  const experienceScore = scoreExperience(profile.yearsOfExperience, program);
  const employmentScore = scoreEmploymentStatus(profile.employmentStatus, program);
  const occupationScore = scoreOccupationDemand(profile.currentOccupation);
  const jobOfferScore = scoreJobOffer(profile.hasJobOffer, program);
  const salaryScore = scoreSalary(profile.annualIncome, program);
  
  return {
    totalScore: calculateCareerScore(profile, program),
    components: [
      { name: 'Experience', score: Math.round(experienceScore), weight: 0.20 },
      { name: 'Employment Status', score: Math.round(employmentScore), weight: 0.15 },
      { name: 'Occupation Demand', score: Math.round(occupationScore), weight: 0.20 },
      { name: 'Job Offer', score: Math.round(jobOfferScore), weight: 0.25 },
      { name: 'Salary', score: Math.round(salaryScore), weight: 0.20 },
    ],
  };
}

