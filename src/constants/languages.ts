/**
 * Language Constants
 * Centralized definitions for language proficiency levels and comparison logic
 */

export const LanguageProficiency = {
  A1: 'A1',
  A2: 'A2',
  B1: 'B1',
  B2: 'B2',
  C1: 'C1',
  C2: 'C2',
} as const;

export type LanguageProficiency = typeof LanguageProficiency[keyof typeof LanguageProficiency];

/**
 * Display labels for language proficiency levels
 */
export const LANGUAGE_PROFICIENCY_LABELS: Record<LanguageProficiency, string> = {
  [LanguageProficiency.A1]: 'A1 - Elementary (Beginner)',
  [LanguageProficiency.A2]: 'A2 - Elementary (Pre-Intermediate)',
  [LanguageProficiency.B1]: 'B1 - Intermediate',
  [LanguageProficiency.B2]: 'B2 - Upper Intermediate',
  [LanguageProficiency.C1]: 'C1 - Advanced',
  [LanguageProficiency.C2]: 'C2 - Mastery (Native-like)',
};

/**
 * Ranking of language proficiency levels (higher number = higher proficiency)
 */
export const LANGUAGE_PROFICIENCY_RANK: Record<LanguageProficiency, number> = {
  [LanguageProficiency.A1]: 1,
  [LanguageProficiency.A2]: 2,
  [LanguageProficiency.B1]: 3,
  [LanguageProficiency.B2]: 4,
  [LanguageProficiency.C1]: 5,
  [LanguageProficiency.C2]: 6,
};

/**
 * CEFR (Common European Framework of Reference) categories
 */
export const LANGUAGE_PROFICIENCY_CATEGORIES: Record<LanguageProficiency, string> = {
  [LanguageProficiency.A1]: 'Elementary',
  [LanguageProficiency.A2]: 'Elementary',
  [LanguageProficiency.B1]: 'Intermediate',
  [LanguageProficiency.B2]: 'Intermediate',
  [LanguageProficiency.C1]: 'Advanced',
  [LanguageProficiency.C2]: 'Advanced',
};

/**
 * Type guard to validate language proficiency levels
 */
export const isValidLanguageProficiency = (level: unknown): level is LanguageProficiency => {
  return typeof level === 'string' && level in LanguageProficiency;
};

/**
 * Get display label for language proficiency level
 */
export const getLanguageProficiencyLabel = (level: LanguageProficiency): string => {
  return LANGUAGE_PROFICIENCY_LABELS[level];
};

/**
 * Get rank for language proficiency level
 */
export const getLanguageProficiencyRank = (level: LanguageProficiency): number => {
  return LANGUAGE_PROFICIENCY_RANK[level];
};

/**
 * Check if user's language proficiency meets requirement
 */
export const meetsLanguageRequirement = (
  userLevel: LanguageProficiency | null | undefined,
  required: LanguageProficiency
): boolean => {
  if (!userLevel) return false;
  return LANGUAGE_PROFICIENCY_RANK[userLevel] >= LANGUAGE_PROFICIENCY_RANK[required];
};

/**
 * Compare two language proficiency levels
 * Returns: -1 if level1 < level2, 0 if equal, 1 if level1 > level2
 */
export const compareLanguageProficiency = (
  level1: LanguageProficiency,
  level2: LanguageProficiency
): number => {
  const rank1 = LANGUAGE_PROFICIENCY_RANK[level1];
  const rank2 = LANGUAGE_PROFICIENCY_RANK[level2];
  
  if (rank1 < rank2) return -1;
  if (rank1 > rank2) return 1;
  return 0;
};

/**
 * Get all language proficiency levels in ascending order
 */
export const getAllLanguageProficiencies = (): LanguageProficiency[] => {
  return Object.values(LanguageProficiency).sort(
    (a, b) => LANGUAGE_PROFICIENCY_RANK[a] - LANGUAGE_PROFICIENCY_RANK[b]
  );
};

/**
 * Get all proficiency levels in a specific category
 */
export const getProficienciesByCategory = (category: string): LanguageProficiency[] => {
  return Object.entries(LANGUAGE_PROFICIENCY_CATEGORIES)
    .filter(([, cat]) => cat === category)
    .map(([level]) => level as LanguageProficiency);
};

