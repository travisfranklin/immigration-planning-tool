/**
 * Country Rules Store Service
 * Handles CRUD operations for country rules in IndexedDB
 */

import type { CountryRules } from '../../types/country';
import {
  addRecord,
  updateRecord,
  deleteRecord,
  getRecord,
  getAllRecords,
  STORE_NAMES,
} from './indexedDB';

/**
 * Add country rules to the database
 */
export async function addCountryRules(rules: CountryRules): Promise<CountryRules> {
  await addRecord(STORE_NAMES.COUNTRY_RULES, rules);
  return rules;
}

/**
 * Get country rules by country code
 */
export async function getCountryRules(countryCode: string): Promise<CountryRules | undefined> {
  return getRecord<CountryRules>(STORE_NAMES.COUNTRY_RULES, countryCode);
}

/**
 * Get all country rules
 */
export async function getAllCountryRules(): Promise<CountryRules[]> {
  return getAllRecords<CountryRules>(STORE_NAMES.COUNTRY_RULES);
}

/**
 * Update country rules
 */
export async function updateCountryRules(
  countryCode: string,
  updates: Partial<CountryRules>
): Promise<CountryRules> {
  const existing = await getCountryRules(countryCode);

  if (!existing) {
    throw new Error(`Country rules for ${countryCode} not found`);
  }

  const updated: CountryRules = {
    ...existing,
    ...updates,
    countryCode: existing.countryCode,
  };

  await updateRecord(STORE_NAMES.COUNTRY_RULES, updated);
  return updated;
}

/**
 * Delete country rules
 */
export async function deleteCountryRules(countryCode: string): Promise<void> {
  await deleteRecord(STORE_NAMES.COUNTRY_RULES, countryCode);
}

/**
 * Check if country rules exist
 */
export async function countryRulesExist(countryCode: string): Promise<boolean> {
  const rules = await getCountryRules(countryCode);
  return rules !== undefined;
}

/**
 * Get rules for multiple countries
 */
export async function getMultipleCountryRules(countryCodes: string[]): Promise<CountryRules[]> {
  const allRules = await getAllCountryRules();
  return allRules.filter((rule) => countryCodes.includes(rule.countryCode));
}

/**
 * Seed initial country rules (for MVP countries)
 */
export async function seedCountryRules(rulesArray: CountryRules[]): Promise<void> {
  for (const rules of rulesArray) {
    try {
      await addCountryRules(rules);
    } catch {
      // Rules might already exist, update instead
      await updateCountryRules(rules.countryCode, rules);
    }
  }
}

