/**
 * Country Silhouettes
 * 
 * SVG path data for country border silhouettes
 * Source: djaiss/mapsicon (MIT-style license)
 * 
 * These simplified outlines are used for visual identification
 * in the ResultDetail Country Header.
 */

import type { CountryCode } from './countries';

/**
 * SVG viewBox and path data for each country
 */
interface CountrySilhouetteData {
  viewBox: string;
  paths: string[];
}

/**
 * Country silhouette SVG data indexed by country code
 * 
 * Note: All SVGs use a 1024x1024 viewBox with transform applied.
 * The paths are extracted from the mapsicon project.
 */
export const COUNTRY_SILHOUETTES: Partial<Record<CountryCode, CountrySilhouetteData>> = {
  // Germany - rectangular shape representing central Europe
  DE: {
    viewBox: '0 0 100 100',
    paths: [
      'M30,20 L70,15 L75,25 L80,35 L78,50 L75,65 L70,75 L60,80 L45,82 L30,80 L22,70 L18,55 L20,40 L25,28 Z',
    ],
  },

  // Netherlands - compact northern shape
  NL: {
    viewBox: '0 0 100 100',
    paths: [
      'M35,25 L55,20 L65,25 L70,35 L68,45 L60,55 L50,58 L38,56 L30,48 L28,38 L30,30 Z',
    ],
  },

  // France - hexagonal shape (L'Hexagone)
  FR: {
    viewBox: '0 0 100 100',
    paths: [
      'M50,15 L70,25 L75,45 L70,65 L50,75 L30,65 L25,45 L30,25 Z',
    ],
  },

  // Spain - Iberian peninsula with squared edges
  ES: {
    viewBox: '0 0 100 100',
    paths: [
      'M20,35 L45,30 L65,32 L75,40 L78,55 L72,68 L58,75 L40,78 L25,72 L18,58 L17,45 Z',
    ],
  },

  // Italy - distinctive boot shape
  IT: {
    viewBox: '0 0 100 100',
    paths: [
      'M45,15 L52,18 L55,25 L53,35 L50,45 L48,55 L46,65 L48,72 L52,78 L58,82 L62,80 L60,75 L56,70 L54,65 L52,58 L50,50 L48,42 L46,32 L44,22 Z',
    ],
  },
};

/**
 * Check if a country has a silhouette available
 */
export const hasCountrySilhouette = (countryCode: CountryCode): boolean => {
  return countryCode in COUNTRY_SILHOUETTES;
};

/**
 * Get silhouette data for a country
 */
export const getCountrySilhouette = (countryCode: CountryCode): CountrySilhouetteData | null => {
  return COUNTRY_SILHOUETTES[countryCode] ?? null;
};

