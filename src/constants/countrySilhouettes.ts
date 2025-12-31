/**
 * Country Silhouettes
 *
 * Helper functions for country silhouette availability
 * SVG files are imported directly in the CountrySilhouette component
 * Source: djaiss/mapsicon (MIT-style license)
 */

import type { CountryCode } from './countries';

/**
 * Countries with available silhouettes (MVP countries)
 */
const AVAILABLE_SILHOUETTES: CountryCode[] = ['DE', 'NL', 'FR', 'ES', 'IT'];

/**
 * Check if a country has a silhouette available
 */
export const hasCountrySilhouette = (countryCode: string): countryCode is CountryCode => {
  return AVAILABLE_SILHOUETTES.includes(countryCode as CountryCode);
};

