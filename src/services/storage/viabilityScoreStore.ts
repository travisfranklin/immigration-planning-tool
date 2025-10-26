/**
 * Viability Score Store Service
 * Handles CRUD operations for viability scores in IndexedDB
 */

import type { ViabilityScore } from '../../types/viability';
import {
  addRecord,
  updateRecord,
  deleteRecord,
  getRecord,
  getAllRecords,
  queryByIndex,
  clearStore,
  STORE_NAMES,
} from './indexedDB';

/**
 * Normalize a viability score to ensure backward compatibility
 * Adds default values for fields that may not exist in older data
 */
function normalizeViabilityScore(score: ViabilityScore): ViabilityScore {
  return {
    ...score,
    // Ensure new fields have default values if missing
    meetsHardRequirements: score.meetsHardRequirements ?? true,
    missingRequirements: score.missingRequirements ?? [],
    competitiveScore: score.competitiveScore ?? score.overallScore,
  };
}

/**
 * Create a new viability score
 */
export async function createViabilityScore(
  score: Omit<ViabilityScore, 'id' | 'createdAt' | 'updatedAt'>
): Promise<ViabilityScore> {
  const now = Date.now();
  const id = `score_${now}_${Math.random().toString(36).substr(2, 9)}`;

  const newScore: ViabilityScore = {
    ...score,
    id,
    createdAt: now,
    updatedAt: now,
  };

  await addRecord(STORE_NAMES.VIABILITY_SCORES, newScore);
  return newScore;
}

/**
 * Get a viability score by ID
 */
export async function getViabilityScore(scoreId: string): Promise<ViabilityScore | undefined> {
  const score = await getRecord<ViabilityScore>(STORE_NAMES.VIABILITY_SCORES, scoreId);
  return score ? normalizeViabilityScore(score) : undefined;
}

/**
 * Get all viability scores
 */
export async function getAllViabilityScores(): Promise<ViabilityScore[]> {
  const scores = await getAllRecords<ViabilityScore>(STORE_NAMES.VIABILITY_SCORES);
  return scores.map(normalizeViabilityScore);
}

/**
 * Get viability scores for a specific user
 */
export async function getUserViabilityScores(userId: string): Promise<ViabilityScore[]> {
  const scores = await queryByIndex<ViabilityScore>(STORE_NAMES.VIABILITY_SCORES, 'userId', userId);
  return scores.map(normalizeViabilityScore);
}

/**
 * Get viability scores for a specific country
 */
export async function getCountryViabilityScores(countryCode: string): Promise<ViabilityScore[]> {
  const scores = await queryByIndex<ViabilityScore>(STORE_NAMES.VIABILITY_SCORES, 'countryCode', countryCode);
  return scores.map(normalizeViabilityScore);
}

/**
 * Get viability score for a user and country combination
 */
export async function getUserCountryViabilityScore(
  userId: string,
  countryCode: string
): Promise<ViabilityScore | undefined> {
  const userScores = await getUserViabilityScores(userId);
  return userScores.find((score) => score.countryCode === countryCode);
}

/**
 * Update a viability score
 */
export async function updateViabilityScore(
  scoreId: string,
  updates: Partial<ViabilityScore>
): Promise<ViabilityScore> {
  const existing = await getViabilityScore(scoreId);

  if (!existing) {
    throw new Error(`Viability score with ID ${scoreId} not found`);
  }

  const updated: ViabilityScore = {
    ...existing,
    ...updates,
    id: existing.id,
    createdAt: existing.createdAt,
    updatedAt: Date.now(),
  };

  await updateRecord(STORE_NAMES.VIABILITY_SCORES, updated);
  return updated;
}

/**
 * Delete a viability score
 */
export async function deleteViabilityScore(scoreId: string): Promise<void> {
  await deleteRecord(STORE_NAMES.VIABILITY_SCORES, scoreId);
}

/**
 * Delete all viability scores for a user
 */
export async function deleteUserViabilityScores(userId: string): Promise<void> {
  const scores = await getUserViabilityScores(userId);
  for (const score of scores) {
    await deleteViabilityScore(score.id);
  }
}

/**
 * Get ranking of countries by viability score for a user
 */
export async function getUserCountryRanking(userId: string): Promise<ViabilityScore[]> {
  const scores = await getUserViabilityScores(userId);
  return scores.sort((a, b) => b.overallScore - a.overallScore);
}

/**
 * Save or update a viability score
 * If scores already exist (by userId + countryCode), delete them first to avoid duplicates
 * Then save the new score
 */
export async function saveViabilityScore(score: ViabilityScore): Promise<ViabilityScore> {
  // Get all existing scores for this user and country
  const userScores = await getUserViabilityScores(score.userId);
  const existingScoresForCountry = userScores.filter(s => s.countryCode === score.countryCode);

  // Delete all existing scores for this country to prevent duplicates
  for (const existingScore of existingScoresForCountry) {
    await deleteViabilityScore(existingScore.id);
  }

  // Create new score - use the provided score directly since it already has an ID
  await addRecord(STORE_NAMES.VIABILITY_SCORES, score);
  return score;
}

/**
 * Clear all viability scores
 */
export async function clearAllViabilityScores(): Promise<void> {
  await clearStore(STORE_NAMES.VIABILITY_SCORES);
}
