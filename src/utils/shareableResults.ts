/**
 * Shareable Results Utilities
 * Handles encoding/decoding of ViabilityScore data for URL sharing
 */

import LZ from 'lz-string';
import type { ViabilityScore } from '../types/viability';

/**
 * Version for shareable results format
 * Increment when making breaking changes to the data structure
 */
const SHAREABLE_RESULTS_VERSION = '1.0.0';

/**
 * Wrapper for shareable results with version info
 */
interface ShareableResultsData {
  version: string;
  score: ViabilityScore;
}

/**
 * Encode a ViabilityScore to a URL-safe compressed string
 * Uses LZ compression + URI encoding for minimal URL length
 *
 * @param score - The viability score to encode
 * @returns URL-safe compressed string
 * @throws Error if encoding fails
 */
export function encodeResultsToUrl(score: ViabilityScore): string {
  try {
    const data: ShareableResultsData = {
      version: SHAREABLE_RESULTS_VERSION,
      score,
    };

    const json = JSON.stringify(data);
    const compressed = LZ.compressToEncodedURIComponent(json);

    if (!compressed) {
      throw new Error('Compression failed');
    }

    return compressed;
  } catch (error) {
    console.error('Failed to encode results:', error);
    throw new Error('Failed to encode results for sharing');
  }
}

/**
 * Decode a URL-safe string back to ViabilityScore
 *
 * @param encoded - The encoded string from URL
 * @returns Decoded viability score
 * @throws Error if decoding fails or data is invalid
 */
export function decodeResultsFromUrl(encoded: string): ViabilityScore {
  try {
    const json = LZ.decompressFromEncodedURIComponent(encoded);

    if (!json) {
      throw new Error('Failed to decompress data');
    }

    const data = JSON.parse(json) as ShareableResultsData;

    // Version check (for future compatibility)
    if (data.version !== SHAREABLE_RESULTS_VERSION) {
      console.warn(`Version mismatch: expected ${SHAREABLE_RESULTS_VERSION}, got ${data.version}`);
      // For now, we'll still try to use the data
      // In the future, we can add migration logic here
    }

    return data.score;
  } catch (error) {
    console.error('Failed to decode results:', error);
    throw new Error('Invalid or corrupted shared results');
  }
}

/**
 * Type guard to validate ViabilityScore structure
 * Checks for required fields to ensure data integrity
 * 
 * @param data - Unknown data to validate
 * @returns True if data is a valid ViabilityScore
 */
export function isValidViabilityScore(data: unknown): data is ViabilityScore {
  if (!data || typeof data !== 'object') {
    return false;
  }
  
  const score = data as Record<string, unknown>;
  
  // Check required fields
  const hasRequiredFields = (
    typeof score.id === 'string' &&
    typeof score.userId === 'string' &&
    typeof score.countryCode === 'string' &&
    typeof score.countryName === 'string' &&
    typeof score.overallScore === 'number' &&
    typeof score.viabilityLevel === 'string' &&
    typeof score.componentScores === 'object' &&
    score.componentScores !== null &&
    Array.isArray(score.riskFactors) &&
    Array.isArray(score.contingencies)
  );
  
  if (!hasRequiredFields) {
    return false;
  }
  
  // Check component scores structure
  const componentScores = score.componentScores as Record<string, unknown>;
  const hasValidComponentScores = (
    typeof componentScores.career === 'number' &&
    typeof componentScores.financial === 'number' &&
    typeof componentScores.education === 'number' &&
    typeof componentScores.language === 'number' &&
    typeof componentScores.family === 'number'
  );
  
  return hasValidComponentScores;
}

/**
 * Generate a shareable URL for a result
 * 
 * @param score - The viability score to share
 * @returns Complete shareable URL
 */
export function generateShareUrl(score: ViabilityScore): string {
  const encoded = encodeResultsToUrl(score);
  const baseUrl = window.location.origin;
  return `${baseUrl}/result-detail/${score.countryCode}?results=${encoded}`;
}

/**
 * Copy text to clipboard with modern Clipboard API
 * Falls back gracefully if clipboard access is denied
 * 
 * @param text - Text to copy to clipboard
 * @returns Promise that resolves to true if successful, false otherwise
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    // Modern Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    
    return successful;
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
}

/**
 * Estimate the URL length for a given score
 * Useful for validation and debugging
 * 
 * @param score - The viability score
 * @returns Estimated URL length in characters
 */
export function estimateUrlLength(score: ViabilityScore): number {
  const encoded = encodeResultsToUrl(score);
  const baseUrl = window.location.origin;
  const fullUrl = `${baseUrl}/result-detail/${score.countryCode}?results=${encoded}`;
  return fullUrl.length;
}

/**
 * Check if a URL is likely to be too long for browsers
 * Most browsers support 2000+ characters, but we'll be conservative
 * 
 * @param score - The viability score
 * @returns True if URL might be too long
 */
export function isUrlTooLong(score: ViabilityScore): boolean {
  const MAX_SAFE_URL_LENGTH = 2000;
  return estimateUrlLength(score) > MAX_SAFE_URL_LENGTH;
}

