/**
 * Education Constants
 * Centralized definitions for education levels and comparison logic
 */

export const EducationLevel = {
  HIGH_SCHOOL: 'high_school',
  BACHELOR: 'bachelor',
  MASTER: 'master',
  PHD: 'phd',
} as const;

export type EducationLevel = typeof EducationLevel[keyof typeof EducationLevel];

/**
 * Display labels for education levels
 */
export const EDUCATION_LEVEL_LABELS: Record<EducationLevel, string> = {
  [EducationLevel.HIGH_SCHOOL]: "High School",
  [EducationLevel.BACHELOR]: "Bachelor's Degree",
  [EducationLevel.MASTER]: "Master's Degree",
  [EducationLevel.PHD]: "PhD",
};

/**
 * Ranking of education levels (higher number = higher education)
 */
export const EDUCATION_LEVEL_RANK: Record<EducationLevel, number> = {
  [EducationLevel.HIGH_SCHOOL]: 1,
  [EducationLevel.BACHELOR]: 2,
  [EducationLevel.MASTER]: 3,
  [EducationLevel.PHD]: 4,
};

/**
 * Type guard to validate education levels
 */
export const isValidEducationLevel = (level: unknown): level is EducationLevel => {
  return typeof level === 'string' && level in EducationLevel;
};

/**
 * Get display label for education level
 */
export const getEducationLevelLabel = (level: EducationLevel): string => {
  return EDUCATION_LEVEL_LABELS[level];
};

/**
 * Get rank for education level
 */
export const getEducationLevelRank = (level: EducationLevel): number => {
  return EDUCATION_LEVEL_RANK[level];
};

/**
 * Check if user's education level meets requirement
 */
export const meetsEducationRequirement = (
  userLevel: EducationLevel | null | undefined,
  required: EducationLevel
): boolean => {
  if (!userLevel) return false;
  return EDUCATION_LEVEL_RANK[userLevel] >= EDUCATION_LEVEL_RANK[required];
};

/**
 * Compare two education levels
 * Returns: -1 if level1 < level2, 0 if equal, 1 if level1 > level2
 */
export const compareEducationLevels = (
  level1: EducationLevel,
  level2: EducationLevel
): number => {
  const rank1 = EDUCATION_LEVEL_RANK[level1];
  const rank2 = EDUCATION_LEVEL_RANK[level2];
  
  if (rank1 < rank2) return -1;
  if (rank1 > rank2) return 1;
  return 0;
};

/**
 * Get all education levels in ascending order
 */
export const getAllEducationLevels = (): EducationLevel[] => {
  return Object.values(EducationLevel).sort(
    (a, b) => EDUCATION_LEVEL_RANK[a] - EDUCATION_LEVEL_RANK[b]
  );
};

