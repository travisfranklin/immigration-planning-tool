/**
 * Country Rules Types
 * Defines the structure for country-specific immigration rules
 */

export interface WorkVisaRequirements {
  minSalary: number;
  minEducationLevel: string;
  minLanguageProficiency: string;
  requiredOccupations?: string[];
  processingTimeWeeks: number;
  validityYears: number;
}

export interface PermanentResidencyRequirements {
  minYearsInCountry: number;
  minIncome: number;
  minLanguageProficiency: string;
  minEducationLevel: string;
  requiresJobOffer: boolean;
  processingTimeWeeks: number;
}

export interface CitizenshipRequirements {
  minYearsAsResident: number;
  minLanguageProficiency: string;
  requiresRenunciationOfUSCitizenship: boolean;
  processingTimeWeeks: number;
}

export interface CountryRules {
  countryCode: string;
  countryName: string;
  region: string;
  
  // Immigration Requirements
  workVisa: WorkVisaRequirements;
  permanentResidency: PermanentResidencyRequirements;
  citizenship: CitizenshipRequirements;
  
  // Additional Information
  officialLanguages: string[];
  costOfLiving: 'low' | 'medium' | 'high' | 'very_high';
  qualityOfLife: number; // 0-100
  economicStability: number; // 0-100
  
  // Special Conditions
  specialPrograms?: string[];
  notes?: string;
}

export interface CountryRulesDatabase {
  [countryCode: string]: CountryRules;
}

// Default country codes for MVP
export const MVP_COUNTRIES = ['DE', 'NL', 'FR', 'ES', 'IT'];

// Phase 8 countries (High-Demand Western Europe)
export const PHASE_8_COUNTRIES = ['AT', 'BE', 'LU', 'IE'];

// Phase 9 countries (Nordic Countries)
export const PHASE_9_COUNTRIES = ['SE', 'DK', 'FI'];

// Phase 10 countries (Mediterranean/Southern Europe)
export const PHASE_10_COUNTRIES = ['PT', 'GR', 'CY', 'MT'];

// Phase 11 countries (Eastern Europe - Tier 1)
export const PHASE_11_COUNTRIES = ['PL', 'CZ', 'HU', 'RO', 'BG'];

// Phase 12 countries (Eastern Europe Tier 2 + Baltics + Southern Europe - Final 6!)
export const PHASE_12_COUNTRIES = ['SK', 'SI', 'HR', 'EE', 'LV', 'LT'];

// All supported countries
export const ALL_COUNTRIES = [...MVP_COUNTRIES, ...PHASE_8_COUNTRIES, ...PHASE_9_COUNTRIES, ...PHASE_10_COUNTRIES, ...PHASE_11_COUNTRIES, ...PHASE_12_COUNTRIES];

export const COUNTRY_NAMES: Record<string, string> = {
  // MVP Countries
  DE: 'Germany',
  NL: 'Netherlands',
  FR: 'France',
  ES: 'Spain',
  IT: 'Italy',
  // Phase 8 Countries
  AT: 'Austria',
  BE: 'Belgium',
  LU: 'Luxembourg',
  IE: 'Ireland',
  // Phase 9 Countries (Nordic)
  SE: 'Sweden',
  DK: 'Denmark',
  FI: 'Finland',
  // Phase 10 Countries (Mediterranean/Southern Europe)
  PT: 'Portugal',
  GR: 'Greece',
  CY: 'Cyprus',
  MT: 'Malta',
  // Phase 11 Countries (Eastern Europe - Tier 1)
  PL: 'Poland',
  CZ: 'Czech Republic',
  HU: 'Hungary',
  RO: 'Romania',
  BG: 'Bulgaria',
  // Phase 12 Countries (Eastern Europe Tier 2 + Baltics + Southern Europe - Final 6!)
  SK: 'Slovakia',
  SI: 'Slovenia',
  HR: 'Croatia',
  EE: 'Estonia',
  LV: 'Latvia',
  LT: 'Lithuania',
};

