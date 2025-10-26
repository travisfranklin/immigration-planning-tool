/**
 * Visa Program Type Constants
 * Centralized definitions for visa program types and metadata
 */

export const VisaProgramType = {
  WORK: 'work',
  ENTREPRENEUR: 'entrepreneur',
  INVESTOR: 'investor',
  DIGITAL_NOMAD: 'digital_nomad',
  FAMILY_REUNIFICATION: 'family_reunification',
  STUDENT: 'student',
  JOB_SEEKER: 'job_seeker',
  PASSIVE_INCOME: 'passive_income',
  OTHER: 'other',
} as const;

export type VisaProgramType = typeof VisaProgramType[keyof typeof VisaProgramType];

/**
 * Display labels for visa program types
 */
export const VISA_PROGRAM_TYPE_LABELS: Record<VisaProgramType, string> = {
  [VisaProgramType.WORK]: 'Work Visa',
  [VisaProgramType.ENTREPRENEUR]: 'Entrepreneur/Startup',
  [VisaProgramType.INVESTOR]: 'Investor Visa',
  [VisaProgramType.DIGITAL_NOMAD]: 'Digital Nomad',
  [VisaProgramType.FAMILY_REUNIFICATION]: 'Family Reunification',
  [VisaProgramType.STUDENT]: 'Student Visa',
  [VisaProgramType.JOB_SEEKER]: 'Job Seeker',
  [VisaProgramType.PASSIVE_INCOME]: 'Passive Income',
  [VisaProgramType.OTHER]: 'Other',
};

/**
 * Descriptions for visa program types
 */
export const VISA_PROGRAM_TYPE_DESCRIPTIONS: Record<VisaProgramType, string> = {
  [VisaProgramType.WORK]: 'For skilled workers with job offers or employment contracts',
  [VisaProgramType.ENTREPRENEUR]: 'For business owners and startup founders',
  [VisaProgramType.INVESTOR]: 'For high net worth individuals making significant investments',
  [VisaProgramType.DIGITAL_NOMAD]: 'For remote workers and freelancers',
  [VisaProgramType.FAMILY_REUNIFICATION]: 'For family members of residents or citizens',
  [VisaProgramType.STUDENT]: 'For students pursuing higher education',
  [VisaProgramType.JOB_SEEKER]: 'For recent graduates and job seekers',
  [VisaProgramType.PASSIVE_INCOME]: 'For retirees and those with passive income',
  [VisaProgramType.OTHER]: 'Other visa categories',
};

/**
 * Categories for visa program types
 */
export const VISA_PROGRAM_TYPE_CATEGORIES: Record<VisaProgramType, string> = {
  [VisaProgramType.WORK]: 'Employment',
  [VisaProgramType.ENTREPRENEUR]: 'Business',
  [VisaProgramType.INVESTOR]: 'Investment',
  [VisaProgramType.DIGITAL_NOMAD]: 'Remote Work',
  [VisaProgramType.FAMILY_REUNIFICATION]: 'Family',
  [VisaProgramType.STUDENT]: 'Education',
  [VisaProgramType.JOB_SEEKER]: 'Employment',
  [VisaProgramType.PASSIVE_INCOME]: 'Lifestyle',
  [VisaProgramType.OTHER]: 'Other',
};

/**
 * Type guard to validate visa program types
 */
export const isValidVisaProgramType = (type: unknown): type is VisaProgramType => {
  return typeof type === 'string' && type in VisaProgramType;
};

/**
 * Get display label for visa program type
 */
export const getVisaProgramTypeLabel = (type: VisaProgramType): string => {
  return VISA_PROGRAM_TYPE_LABELS[type];
};

/**
 * Get description for visa program type
 */
export const getVisaProgramTypeDescription = (type: VisaProgramType): string => {
  return VISA_PROGRAM_TYPE_DESCRIPTIONS[type];
};

/**
 * Get category for visa program type
 */
export const getVisaProgramTypeCategory = (type: VisaProgramType): string => {
  return VISA_PROGRAM_TYPE_CATEGORIES[type];
};

/**
 * Get all visa program types
 */
export const getAllVisaProgramTypes = (): VisaProgramType[] => {
  return Object.values(VisaProgramType);
};

/**
 * Get visa program types by category
 */
export const getVisaProgramTypesByCategory = (category: string): VisaProgramType[] => {
  return Object.entries(VISA_PROGRAM_TYPE_CATEGORIES)
    .filter(([, cat]) => cat === category)
    .map(([type]) => type as VisaProgramType);
};

/**
 * Get all categories
 */
export const getAllVisaProgramCategories = (): string[] => {
  return Array.from(new Set(Object.values(VISA_PROGRAM_TYPE_CATEGORIES)));
};

