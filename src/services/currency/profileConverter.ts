/**
 * Profile Currency Converter
 * Converts user profile financial data from USD to EUR for viability calculations.
 * 
 * Background: User profiles store financial data in USD (as collected in the form),
 * but visa program requirements are specified in EUR. This service converts the
 * profile's financial fields to EUR for accurate comparisons.
 */

import type { UserProfile } from '../../types/user';
import { getUsdToEurRate } from './currencyService';

/**
 * User profile with financial values converted to EUR
 * This type is the same as UserProfile but the financial fields are in EUR
 */
export type ProfileInEur = UserProfile;

/**
 * Convert a user profile's financial data from USD to EUR
 * Returns a new profile object with converted values (does not mutate original)
 */
export async function convertProfileToEur(profile: UserProfile): Promise<ProfileInEur> {
  const rate = await getUsdToEurRate();
  
  return {
    ...profile,
    // Convert financial fields from USD to EUR
    annualIncome: Math.round(profile.annualIncome * rate),
    savingsAmount: Math.round(profile.savingsAmount * rate),
  };
}

/**
 * Synchronous version for use when rate is already cached
 * Falls back to a reasonable estimate if rate fetch fails
 */
export function convertProfileToEurSync(profile: UserProfile, rate: number): ProfileInEur {
  return {
    ...profile,
    annualIncome: Math.round(profile.annualIncome * rate),
    savingsAmount: Math.round(profile.savingsAmount * rate),
  };
}

