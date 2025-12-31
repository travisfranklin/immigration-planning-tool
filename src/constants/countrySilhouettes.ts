/**
 * Country Silhouettes
 *
 * Helper functions for country silhouette availability
 * SVG files are imported directly in the CountrySilhouette component
 * Source: djaiss/mapsicon (MIT-style license)
 */

import type { CountryCode } from './countries';
import { ALL_COUNTRY_CODES } from './countries';

/**
 * All EU countries have silhouettes available
 */
const AVAILABLE_SILHOUETTES: CountryCode[] = ALL_COUNTRY_CODES;

/**
 * Check if a country has a silhouette available
 */
export const hasCountrySilhouette = (countryCode: string): countryCode is CountryCode => {
  return AVAILABLE_SILHOUETTES.includes(countryCode as CountryCode);
};

