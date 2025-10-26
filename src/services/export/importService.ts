/**
 * Import Service
 * Handles importing user data from JSON files
 */

import type { UserProfile } from '../../types/user';
import type { ViabilityScore } from '../../types/viability';
import { validateExportData, type ExportData } from './exportService';
import { updateUserProfile } from '../storage/userProfileStore';
import { saveViabilityScore } from '../storage/viabilityScoreStore';

export interface ImportResult {
  success: boolean;
  message: string;
  profile?: UserProfile;
  viabilityScores?: ViabilityScore[];
  errors?: string[];
}

/**
 * Import data from JSON file
 */
export async function importFromJSON(file: File): Promise<ImportResult> {
  try {
    // Read file
    const text = await file.text();
    let data: unknown;

    try {
      data = JSON.parse(text);
    } catch {
      return {
        success: false,
        message: 'Invalid JSON file',
        errors: ['File is not valid JSON'],
      };
    }

    // Validate structure
    if (!validateExportData(data)) {
      return {
        success: false,
        message: 'Invalid data structure',
        errors: ['File does not contain valid immigration data'],
      };
    }

    const exportData = data as ExportData;
    const errors: string[] = [];

    // Import profile
    if (exportData.profile) {
      try {
        await updateUserProfile(exportData.profile.id, exportData.profile);
      } catch (error) {
        errors.push(`Failed to import profile: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }

    // Import viability scores
    if (exportData.viabilityScores && exportData.viabilityScores.length > 0) {
      for (const score of exportData.viabilityScores) {
        try {
          await saveViabilityScore(score);
        } catch (error) {
          errors.push(
            `Failed to import score for ${score.countryCode}: ${error instanceof Error ? error.message : 'Unknown error'}`
          );
        }
      }
    }

    if (errors.length > 0) {
      return {
        success: false,
        message: 'Import completed with errors',
        profile: exportData.profile || undefined,
        viabilityScores: exportData.viabilityScores,
        errors,
      };
    }

    return {
      success: true,
      message: 'Data imported successfully',
      profile: exportData.profile || undefined,
      viabilityScores: exportData.viabilityScores,
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to import data',
      errors: [error instanceof Error ? error.message : 'Unknown error'],
    };
  }
}

/**
 * Validate imported profile data
 */
export function validateProfile(profile: unknown): profile is UserProfile {
  if (typeof profile !== 'object' || profile === null) {
    return false;
  }

  const p = profile as UserProfile;

  return (
    typeof p.id === 'string' &&
    typeof p.firstName === 'string' &&
    typeof p.lastName === 'string' &&
    typeof p.educationLevel === 'string' &&
    typeof p.currentOccupation === 'string' &&
    Array.isArray(p.languages) &&
    Array.isArray(p.targetCountries)
  );
}

/**
 * Validate imported viability score data
 */
export function validateViabilityScore(score: unknown): score is ViabilityScore {
  if (typeof score !== 'object' || score === null) {
    return false;
  }

  const s = score as ViabilityScore;

  return (
    typeof s.id === 'string' &&
    typeof s.userId === 'string' &&
    typeof s.countryCode === 'string' &&
    typeof s.overallScore === 'number' &&
    typeof s.componentScores === 'object' &&
    Array.isArray(s.riskFactors) &&
    Array.isArray(s.contingencies)
  );
}

/**
 * Read file as text
 */
export function readFileAsText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      if (event.target?.result) {
        resolve(event.target.result as string);
      } else {
        reject(new Error('Failed to read file'));
      }
    };

    reader.onerror = () => {
      reject(new Error('Error reading file'));
    };

    reader.readAsText(file);
  });
}

/**
 * Validate file type
 */
export function validateFileType(file: File, allowedTypes: string[]): boolean {
  return allowedTypes.includes(file.type) || allowedTypes.some((type) => file.name.endsWith(type));
}

/**
 * Validate file size (max 10MB)
 */
export function validateFileSize(file: File, maxSizeMB: number = 10): boolean {
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  return file.size <= maxSizeBytes;
}

