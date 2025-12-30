/**
 * Country Configurations
 * 
 * Country-specific values used by step templates.
 * These configurations contain the data that varies between countries
 * but is consistently needed across multiple step templates.
 */

import { CountryCode } from '../../../constants/countries';
import type { CountryConfig } from './types';

/**
 * Helper to create a default configuration for countries without detailed data
 */
function createDefaultConfig(
  code: CountryCode,
  name: string,
  language: string
): CountryConfig {
  return {
    code,
    name,
    currency: 'EUR',
    officialLanguage: language,
    passportValidity: '6+ months',
    requiresApostille: true,
    translationRequired: true,
    certifiedTranslationRequired: true,
    registrationAuthority: 'Local immigration office',
    registrationTimeframe: '30 days of arrival',
    applicationFeeRange: '100-200',
    standardProcessingTime: '2-3 months',
    prTimeframe: '5 years',
    citizenshipTimeframe: '8-10 years',
    advantages: [],
  };
}

/**
 * All country configurations indexed by country code
 */
export const COUNTRY_CONFIGS: Record<CountryCode, CountryConfig> = {
  [CountryCode.DE]: {
    code: CountryCode.DE,
    name: 'Germany',
    currency: 'EUR',
    officialLanguage: 'German',
    passportValidity: '6+ months',
    requiresApostille: true,
    translationRequired: true,
    certifiedTranslationRequired: true,
    registrationAuthority: 'Ausländerbehörde (Foreigners Office)',
    registrationAuthorityAbbrev: 'ABH',
    registrationTimeframe: '2 weeks of arrival',
    applicationFeeRange: '75-100',
    standardProcessingTime: '2-3 months',
    fastTrackProcessingTime: '4-6 weeks',
    prTimeframe: '21-33 months (Blue Card)',
    citizenshipTimeframe: '6-8 years',
    advantages: [
      'Strong economy and job market',
      'Central EU location',
      'Blue Card pathway to fast PR',
      'Family reunification rights',
    ],
  },

  [CountryCode.IE]: {
    code: CountryCode.IE,
    name: 'Ireland',
    currency: 'EUR',
    officialLanguage: 'English',
    passportValidity: '6+ months',
    requiresApostille: false,
    translationRequired: false,
    certifiedTranslationRequired: false,
    registrationAuthority: 'Irish Naturalisation and Immigration Service',
    registrationAuthorityAbbrev: 'INIS/IRP',
    registrationTimeframe: '90 days of arrival',
    applicationFeeRange: '1,000',
    registrationFee: '300',
    standardProcessingTime: '8 weeks',
    prTimeframe: '2 years (Critical Skills)',
    citizenshipTimeframe: '5 years',
    advantages: [
      'English-speaking country',
      'Strong tech sector',
      'Fastest path to PR in EU (2 years)',
      'No language test for visa',
    ],
  },

  [CountryCode.NL]: {
    code: CountryCode.NL,
    name: 'Netherlands',
    currency: 'EUR',
    officialLanguage: 'Dutch',
    passportValidity: '6+ months',
    requiresApostille: true,
    translationRequired: true,
    certifiedTranslationRequired: true,
    registrationAuthority: 'Immigration and Naturalisation Service',
    registrationAuthorityAbbrev: 'IND',
    registrationTimeframe: '5 days of arrival',
    applicationFeeRange: '210-350',
    standardProcessingTime: '4-8 weeks',
    prTimeframe: '5 years',
    citizenshipTimeframe: '5 years',
    advantages: [
      'High English proficiency',
      'Strong expat community',
      '30% tax ruling for skilled migrants',
      'Central location in Europe',
    ],
  },

  [CountryCode.ES]: {
    code: CountryCode.ES,
    name: 'Spain',
    currency: 'EUR',
    officialLanguage: 'Spanish',
    passportValidity: '6+ months',
    requiresApostille: true,
    translationRequired: true,
    certifiedTranslationRequired: true,
    registrationAuthority: 'Oficina de Extranjería',
    registrationTimeframe: '30 days of arrival',
    applicationFeeRange: '60-200',
    standardProcessingTime: '1-3 months',
    prTimeframe: '5 years',
    citizenshipTimeframe: '10 years (2 years for some nationalities)',
    advantages: [
      'High quality of life',
      'Affordable cost of living',
      'Digital nomad visa available',
      'Golden visa program',
    ],
    notes: ['NIE number required for most transactions'],
  },

  [CountryCode.PT]: {
    code: CountryCode.PT,
    name: 'Portugal',
    currency: 'EUR',
    officialLanguage: 'Portuguese',
    passportValidity: '6+ months',
    requiresApostille: true,
    translationRequired: true,
    certifiedTranslationRequired: true,
    registrationAuthority: 'Serviço de Estrangeiros e Fronteiras',
    registrationAuthorityAbbrev: 'SEF/AIMA',
    registrationTimeframe: '3 days of arrival',
    applicationFeeRange: '90-200',
    standardProcessingTime: '2-4 months',
    prTimeframe: '5 years',
    citizenshipTimeframe: '5 years',
    advantages: [
      'High quality of life',
      'Affordable healthcare',
      'D7 passive income visa',
      'Non-Habitual Resident tax regime',
    ],
  },

  [CountryCode.FR]: {
    code: CountryCode.FR,
    name: 'France',
    currency: 'EUR',
    officialLanguage: 'French',
    passportValidity: '6+ months',
    requiresApostille: true,
    translationRequired: true,
    certifiedTranslationRequired: true,
    registrationAuthority: 'Prefecture',
    registrationTimeframe: '3 months of arrival',
    applicationFeeRange: '99-269',
    standardProcessingTime: '2-3 months',
    prTimeframe: '5 years',
    citizenshipTimeframe: '5 years',
    advantages: [
      'Strong economy',
      'Rich culture and lifestyle',
      'Excellent healthcare system',
      'Central EU location',
    ],
  },

  [CountryCode.IT]: {
    code: CountryCode.IT,
    name: 'Italy',
    currency: 'EUR',
    officialLanguage: 'Italian',
    passportValidity: '6+ months',
    requiresApostille: true,
    translationRequired: true,
    certifiedTranslationRequired: true,
    registrationAuthority: 'Questura (Police Headquarters)',
    registrationTimeframe: '8 days of arrival',
    applicationFeeRange: '50-150',
    standardProcessingTime: '2-3 months',
    prTimeframe: '5 years',
    citizenshipTimeframe: '10 years (4 years for EU citizens)',
    advantages: [
      'Rich culture and history',
      'Excellent cuisine',
      'Good healthcare system',
      'Elective residence visa for retirees',
    ],
  },

  [CountryCode.AT]: createDefaultConfig(CountryCode.AT, 'Austria', 'German'),
  [CountryCode.BE]: createDefaultConfig(CountryCode.BE, 'Belgium', 'Dutch/French/German'),
  [CountryCode.BG]: createDefaultConfig(CountryCode.BG, 'Bulgaria', 'Bulgarian'),
  [CountryCode.HR]: createDefaultConfig(CountryCode.HR, 'Croatia', 'Croatian'),
  [CountryCode.CY]: createDefaultConfig(CountryCode.CY, 'Cyprus', 'Greek'),
  [CountryCode.CZ]: createDefaultConfig(CountryCode.CZ, 'Czech Republic', 'Czech'),
  [CountryCode.DK]: { ...createDefaultConfig(CountryCode.DK, 'Denmark', 'Danish'), currency: 'DKK' },
  [CountryCode.EE]: createDefaultConfig(CountryCode.EE, 'Estonia', 'Estonian'),
  [CountryCode.FI]: createDefaultConfig(CountryCode.FI, 'Finland', 'Finnish'),
  [CountryCode.GR]: createDefaultConfig(CountryCode.GR, 'Greece', 'Greek'),
  [CountryCode.HU]: { ...createDefaultConfig(CountryCode.HU, 'Hungary', 'Hungarian'), currency: 'HUF' },
  [CountryCode.LV]: createDefaultConfig(CountryCode.LV, 'Latvia', 'Latvian'),
  [CountryCode.LT]: createDefaultConfig(CountryCode.LT, 'Lithuania', 'Lithuanian'),
  [CountryCode.LU]: createDefaultConfig(CountryCode.LU, 'Luxembourg', 'Luxembourgish/French/German'),
  [CountryCode.MT]: createDefaultConfig(CountryCode.MT, 'Malta', 'Maltese/English'),
  [CountryCode.PL]: { ...createDefaultConfig(CountryCode.PL, 'Poland', 'Polish'), currency: 'PLN' },
  [CountryCode.RO]: { ...createDefaultConfig(CountryCode.RO, 'Romania', 'Romanian'), currency: 'RON' },
  [CountryCode.SK]: createDefaultConfig(CountryCode.SK, 'Slovakia', 'Slovak'),
  [CountryCode.SI]: createDefaultConfig(CountryCode.SI, 'Slovenia', 'Slovenian'),
  [CountryCode.SE]: { ...createDefaultConfig(CountryCode.SE, 'Sweden', 'Swedish'), currency: 'SEK' },
};

