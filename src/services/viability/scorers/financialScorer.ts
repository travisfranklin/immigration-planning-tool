/**
 * Financial Scorer
 * Calculates financial component score based on income, savings, and cost of living
 */

import type { UserProfile } from '../../../types/user';
import type { VisaProgram } from '../../../types/viability';

/**
 * Cost of living estimates (annual, in EUR)
 * These are rough estimates for a single person
 */
const COST_OF_LIVING: Record<string, number> = {
  DE: 24000, // Germany
  NL: 26000, // Netherlands
  FR: 22000, // France
  ES: 18000, // Spain
  IT: 20000, // Italy
};

/**
 * Get cost of living multiplier for family size
 */
function getFamilyCostMultiplier(familyMembers: number): number {
  if (familyMembers === 0) return 1.0;
  if (familyMembers === 1) return 1.5; // Spouse
  if (familyMembers === 2) return 1.8; // Spouse + 1 child
  if (familyMembers === 3) return 2.0; // Spouse + 2 children
  return 2.0 + (familyMembers - 3) * 0.2; // Additional children
}

/**
 * Score based on annual income
 */
function scoreIncome(profile: UserProfile, program: VisaProgram): number {
  const income = profile.annualIncome;
  const minRequired = program.requirements.minSalary || program.requirements.minPassiveIncome || 0;
  
  // If there's a minimum requirement
  if (minRequired > 0) {
    if (income >= minRequired * 2) return 100;
    if (income >= minRequired * 1.5) return 90;
    if (income >= minRequired * 1.2) return 80;
    if (income >= minRequired) return 70;
    if (income >= minRequired * 0.8) return 50;
    if (income >= minRequired * 0.6) return 30;
    return 10;
  }
  
  // No specific requirement - score based on general income level
  if (income >= 150000) return 100;
  if (income >= 100000) return 95;
  if (income >= 75000) return 90;
  if (income >= 60000) return 85;
  if (income >= 50000) return 80;
  if (income >= 40000) return 70;
  if (income >= 30000) return 60;
  if (income >= 20000) return 50;
  
  return 30;
}

/**
 * Score based on savings amount
 */
function scoreSavings(profile: UserProfile, program: VisaProgram): number {
  const savings = profile.savingsAmount;
  const minRequired = program.requirements.minSavings || program.requirements.minInvestment || 0;
  
  // If there's a minimum requirement
  if (minRequired > 0) {
    if (savings >= minRequired * 2) return 100;
    if (savings >= minRequired * 1.5) return 90;
    if (savings >= minRequired * 1.2) return 80;
    if (savings >= minRequired) return 70;
    if (savings >= minRequired * 0.8) return 50;
    if (savings >= minRequired * 0.6) return 30;
    return 10;
  }
  
  // No specific requirement - score based on general savings level
  if (savings >= 500000) return 100;
  if (savings >= 250000) return 95;
  if (savings >= 100000) return 90;
  if (savings >= 75000) return 85;
  if (savings >= 50000) return 80;
  if (savings >= 30000) return 70;
  if (savings >= 20000) return 60;
  if (savings >= 10000) return 50;
  if (savings >= 5000) return 40;
  
  return 20;
}

/**
 * Score based on cost of living alignment
 * Can the user afford to live in this country?
 */
function scoreCostOfLiving(profile: UserProfile, program: VisaProgram): number {
  const countryCode = program.countryCode;
  const baseCost = COST_OF_LIVING[countryCode] || 22000;
  
  // Adjust for family size
  const familySize = profile.familyMembers.length;
  const multiplier = getFamilyCostMultiplier(familySize);
  const totalCost = baseCost * multiplier;
  
  const income = profile.annualIncome;
  
  // Calculate how many years of living expenses the user can cover
  const yearsOfExpenses = (income + profile.savingsAmount) / totalCost;
  
  if (yearsOfExpenses >= 5) return 100;
  if (yearsOfExpenses >= 3) return 90;
  if (yearsOfExpenses >= 2) return 80;
  if (yearsOfExpenses >= 1.5) return 70;
  if (yearsOfExpenses >= 1) return 60;
  if (yearsOfExpenses >= 0.75) return 50;
  if (yearsOfExpenses >= 0.5) return 40;
  
  return 20;
}

/**
 * Score based on investment capacity (for investor visas)
 */
function scoreInvestmentCapacity(profile: UserProfile, program: VisaProgram): number {
  if (program.type !== 'investor') {
    return 70; // Not applicable, return neutral score
  }
  
  const minInvestment = program.requirements.minInvestment || 0;
  const totalAssets = profile.savingsAmount;
  
  if (minInvestment === 0) return 70;
  
  // Can user afford the investment and still have reserves?
  if (totalAssets >= minInvestment * 2) return 100; // Can invest and have reserves
  if (totalAssets >= minInvestment * 1.5) return 90;
  if (totalAssets >= minInvestment * 1.2) return 80;
  if (totalAssets >= minInvestment) return 70;
  if (totalAssets >= minInvestment * 0.8) return 50;
  
  return 20;
}

/**
 * Score based on financial stability
 * Combination of income-to-savings ratio and employment status
 */
function scoreFinancialStability(profile: UserProfile): number {
  const income = profile.annualIncome;
  const savings = profile.savingsAmount;
  const employmentStatus = profile.employmentStatus;
  
  // Calculate savings-to-income ratio (months of expenses saved)
  const monthsOfSavings = income > 0 ? (savings / income) * 12 : 0;
  
  let stabilityScore = 50;
  
  // Adjust based on months of savings
  if (monthsOfSavings >= 24) stabilityScore += 30;
  else if (monthsOfSavings >= 12) stabilityScore += 20;
  else if (monthsOfSavings >= 6) stabilityScore += 10;
  else if (monthsOfSavings >= 3) stabilityScore += 5;
  else stabilityScore -= 10;
  
  // Adjust based on employment status
  if (employmentStatus === 'employed') stabilityScore += 20;
  else if (employmentStatus === 'self_employed') stabilityScore += 15;
  else if (employmentStatus === 'unemployed') stabilityScore -= 20;
  else if (employmentStatus === 'student') stabilityScore -= 10;
  
  return Math.max(0, Math.min(100, stabilityScore));
}

/**
 * Calculate overall financial score
 */
export function calculateFinancialScore(profile: UserProfile, program: VisaProgram): number {
  const incomeScore = scoreIncome(profile, program);
  const savingsScore = scoreSavings(profile, program);
  const costOfLivingScore = scoreCostOfLiving(profile, program);
  const investmentScore = scoreInvestmentCapacity(profile, program);
  const stabilityScore = scoreFinancialStability(profile);
  
  // Weight the sub-components
  // For investor visas, investment capacity is more important
  const isInvestorVisa = program.type === 'investor';
  
  const weights = isInvestorVisa
    ? {
        income: 0.15,
        savings: 0.20,
        costOfLiving: 0.15,
        investment: 0.35,
        stability: 0.15,
      }
    : {
        income: 0.30,
        savings: 0.25,
        costOfLiving: 0.20,
        investment: 0.05,
        stability: 0.20,
      };
  
  const totalScore = 
    incomeScore * weights.income +
    savingsScore * weights.savings +
    costOfLivingScore * weights.costOfLiving +
    investmentScore * weights.investment +
    stabilityScore * weights.stability;
  
  return Math.round(Math.max(0, Math.min(100, totalScore)));
}

/**
 * Get detailed breakdown of financial score
 */
export function getFinancialScoreBreakdown(profile: UserProfile, program: VisaProgram): {
  totalScore: number;
  components: Array<{ name: string; score: number; weight: number }>;
  costOfLiving: number;
  yearsOfExpenses: number;
} {
  const incomeScore = scoreIncome(profile, program);
  const savingsScore = scoreSavings(profile, program);
  const costOfLivingScore = scoreCostOfLiving(profile, program);
  const investmentScore = scoreInvestmentCapacity(profile, program);
  const stabilityScore = scoreFinancialStability(profile);
  
  const isInvestorVisa = program.type === 'investor';
  const weights = isInvestorVisa
    ? { income: 0.15, savings: 0.20, costOfLiving: 0.15, investment: 0.35, stability: 0.15 }
    : { income: 0.30, savings: 0.25, costOfLiving: 0.20, investment: 0.05, stability: 0.20 };
  
  const baseCost = COST_OF_LIVING[program.countryCode] || 22000;
  const multiplier = getFamilyCostMultiplier(profile.familyMembers.length);
  const totalCost = baseCost * multiplier;
  const yearsOfExpenses = (profile.annualIncome + profile.savingsAmount) / totalCost;
  
  return {
    totalScore: calculateFinancialScore(profile, program),
    components: [
      { name: 'Income', score: Math.round(incomeScore), weight: weights.income },
      { name: 'Savings', score: Math.round(savingsScore), weight: weights.savings },
      { name: 'Cost of Living', score: Math.round(costOfLivingScore), weight: weights.costOfLiving },
      { name: 'Investment Capacity', score: Math.round(investmentScore), weight: weights.investment },
      { name: 'Financial Stability', score: Math.round(stabilityScore), weight: weights.stability },
    ],
    costOfLiving: Math.round(totalCost),
    yearsOfExpenses: Math.round(yearsOfExpenses * 10) / 10,
  };
}

