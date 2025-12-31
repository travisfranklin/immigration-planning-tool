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
  // Germany - distinctive shape with clear borders
  DE: {
    viewBox: '0 0 1024 1024',
    paths: [
      // Simplified Germany outline
      'M512 80c-60 0-120 30-160 70l-40 60-80 20-60 80-40 100 20 80-40 60-20 120 40 80 60 40 20 80 60 60 80 20 60-20 80 40 60-20 40 60 80-20 60-60 20-80 60-40-20-80 40-60 20-120-40-80 60-60-20-80-60-40-40-100-80-20-60-80-40-60c-40-40-100-70-160-70z',
    ],
  },
  
  // Netherlands - compact with distinctive coastline
  NL: {
    viewBox: '0 0 1024 1024',
    paths: [
      // Simplified Netherlands outline
      'M480 120c-80 20-140 80-180 140l-20 100 40 120-20 80 60 100 40 60 100 40 60-20 80 60 60-40 40-80-20-100 60-80-40-120 20-100-60-80-100-60-120-20z',
    ],
  },
  
  // France - hexagonal shape
  FR: {
    viewBox: '0 0 1024 1024',
    paths: [
      // Simplified France outline (L'Hexagone)
      'M512 60c-100 0-200 60-260 140l-80 160-20 200 80 180 140 120 140 40 140-40 140-120 80-180-20-200-80-160c-60-80-160-140-260-140z',
    ],
  },
  
  // Spain - Iberian peninsula
  ES: {
    viewBox: '0 0 1024 1024',
    paths: [
      // Simplified Spain outline
      'M200 200c-60 60-80 140-80 220l40 180 100 140 160 80 200 20 180-60 120-140 40-180-60-180-140-100-180-40-200 20-180 40z',
    ],
  },
  
  // Italy - boot shape
  IT: {
    viewBox: '0 0 1024 1024',
    paths: [
      // Simplified Italy outline (boot shape)
      'M480 60c-40 20-60 60-60 100l20 80-40 100 20 120 60 80 40 120 80 100 60 80 100 60 60 80-20 60 40 40 60-20 20-80-40-60 20-100-60-80 40-120-20-140-80-100-60-80-40-120-60-80c-40-40-80-60-140-60z',
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

