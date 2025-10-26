/**
 * Country Constants
 * Centralized definitions for all EU countries
 */

export const CountryCode = {
  AT: 'AT', // Austria
  BE: 'BE', // Belgium
  BG: 'BG', // Bulgaria
  HR: 'HR', // Croatia
  CY: 'CY', // Cyprus
  CZ: 'CZ', // Czech Republic
  DK: 'DK', // Denmark
  EE: 'EE', // Estonia
  FI: 'FI', // Finland
  FR: 'FR', // France
  DE: 'DE', // Germany
  GR: 'GR', // Greece
  HU: 'HU', // Hungary
  IE: 'IE', // Ireland
  IT: 'IT', // Italy
  LV: 'LV', // Latvia
  LT: 'LT', // Lithuania
  LU: 'LU', // Luxembourg
  MT: 'MT', // Malta
  NL: 'NL', // Netherlands
  PL: 'PL', // Poland
  PT: 'PT', // Portugal
  RO: 'RO', // Romania
  SK: 'SK', // Slovakia
  SI: 'SI', // Slovenia
  ES: 'ES', // Spain
  SE: 'SE', // Sweden
} as const;

export type CountryCode = typeof CountryCode[keyof typeof CountryCode];

export const COUNTRY_DISPLAY_NAMES: Record<CountryCode, string> = {
  [CountryCode.AT]: 'Austria',
  [CountryCode.BE]: 'Belgium',
  [CountryCode.BG]: 'Bulgaria',
  [CountryCode.HR]: 'Croatia',
  [CountryCode.CY]: 'Cyprus',
  [CountryCode.CZ]: 'Czech Republic',
  [CountryCode.DK]: 'Denmark',
  [CountryCode.EE]: 'Estonia',
  [CountryCode.FI]: 'Finland',
  [CountryCode.FR]: 'France',
  [CountryCode.DE]: 'Germany',
  [CountryCode.GR]: 'Greece',
  [CountryCode.HU]: 'Hungary',
  [CountryCode.IE]: 'Ireland',
  [CountryCode.IT]: 'Italy',
  [CountryCode.LV]: 'Latvia',
  [CountryCode.LT]: 'Lithuania',
  [CountryCode.LU]: 'Luxembourg',
  [CountryCode.MT]: 'Malta',
  [CountryCode.NL]: 'Netherlands',
  [CountryCode.PL]: 'Poland',
  [CountryCode.PT]: 'Portugal',
  [CountryCode.RO]: 'Romania',
  [CountryCode.SK]: 'Slovakia',
  [CountryCode.SI]: 'Slovenia',
  [CountryCode.ES]: 'Spain',
  [CountryCode.SE]: 'Sweden',
};

export const ALL_COUNTRY_CODES = Object.values(CountryCode);

export const EU_COUNTRY_NAMES = Object.values(COUNTRY_DISPLAY_NAMES);

/**
 * Type guard to validate country codes
 */
export const isValidCountryCode = (code: unknown): code is CountryCode => {
  return typeof code === 'string' && code in CountryCode;
};

/**
 * Get country code from display name
 */
export const getCountryCodeFromName = (name: string): CountryCode | null => {
  const entry = Object.entries(COUNTRY_DISPLAY_NAMES).find(
    ([, displayName]) => displayName === name
  );
  return entry ? (entry[0] as CountryCode) : null;
};

/**
 * Get display name from country code
 */
export const getCountryDisplayName = (code: CountryCode): string => {
  return COUNTRY_DISPLAY_NAMES[code];
};

/**
 * MVP countries (Phase 1 launch)
 */
export const MVP_COUNTRY_CODES: CountryCode[] = [
  CountryCode.DE,
  CountryCode.NL,
  CountryCode.FR,
  CountryCode.ES,
  CountryCode.IT,
];

/**
 * Phase 2 countries
 */
export const PHASE_2_COUNTRY_CODES: CountryCode[] = [
  CountryCode.AT,
  CountryCode.BE,
  CountryCode.LU,
  CountryCode.IE,
];

/**
 * All other countries
 */
export const OTHER_COUNTRY_CODES: CountryCode[] = ALL_COUNTRY_CODES.filter(
  (code) => !MVP_COUNTRY_CODES.includes(code) && !PHASE_2_COUNTRY_CODES.includes(code)
);

