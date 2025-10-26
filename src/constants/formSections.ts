/**
 * Form Section Constants
 * Centralized definitions for all form sections and steps
 */

export const FormSectionId = {
  PERSONAL: 'personal',
  FINANCIAL: 'financial',
  EDUCATION: 'education',
  CAREER: 'career',
  FAMILY: 'family',
  LANGUAGE: 'language',
  COUNTRIES: 'countries',
} as const;

export type FormSectionId = typeof FormSectionId[keyof typeof FormSectionId];

export interface FormSectionMetadata {
  title: string;
  description: string;
  stepNumber: number;
}

export const FORM_SECTION_METADATA: Record<FormSectionId, FormSectionMetadata> = {
  [FormSectionId.PERSONAL]: {
    title: 'Personal Information',
    description: 'Basic details about you',
    stepNumber: 1,
  },
  [FormSectionId.FINANCIAL]: {
    title: 'Financial Information',
    description: 'Income and savings',
    stepNumber: 2,
  },
  [FormSectionId.EDUCATION]: {
    title: 'Education',
    description: 'Academic background',
    stepNumber: 3,
  },
  [FormSectionId.CAREER]: {
    title: 'Career',
    description: 'Work experience and occupation',
    stepNumber: 4,
  },
  [FormSectionId.FAMILY]: {
    title: 'Family',
    description: 'Marital status and dependents',
    stepNumber: 5,
  },
  [FormSectionId.LANGUAGE]: {
    title: 'Language',
    description: 'Language proficiency',
    stepNumber: 6,
  },
  [FormSectionId.COUNTRIES]: {
    title: 'Country Selection',
    description: 'Target countries and preferences',
    stepNumber: 7,
  },
};

/**
 * Mapping from step number to section ID
 */
export const FORM_STEP_TO_SECTION: Record<number, FormSectionId> = {
  1: FormSectionId.PERSONAL,
  2: FormSectionId.FINANCIAL,
  3: FormSectionId.EDUCATION,
  4: FormSectionId.CAREER,
  5: FormSectionId.FAMILY,
  6: FormSectionId.LANGUAGE,
  7: FormSectionId.COUNTRIES,
};

/**
 * All valid form step numbers
 */
export const VALID_FORM_STEPS = [1, 2, 3, 4, 5, 6, 7] as const;

/**
 * Total number of form steps
 */
export const TOTAL_FORM_STEPS = 7;

/**
 * Type guard to validate form steps
 */
export const isValidFormStep = (step: unknown): step is number => {
  return typeof step === 'number' && step >= 1 && step <= TOTAL_FORM_STEPS;
};

/**
 * Type guard to validate form section IDs
 */
export const isValidFormSectionId = (id: unknown): id is FormSectionId => {
  return typeof id === 'string' && id in FormSectionId;
};

/**
 * Get section ID for a given step number
 */
export const getSectionIdForStep = (step: number): FormSectionId => {
  if (!isValidFormStep(step)) {
    throw new Error(`Invalid form step: ${step}. Must be between 1 and ${TOTAL_FORM_STEPS}`);
  }
  return FORM_STEP_TO_SECTION[step];
};

/**
 * Get step number for a given section ID
 */
export const getStepForSectionId = (sectionId: FormSectionId): number => {
  if (!isValidFormSectionId(sectionId)) {
    throw new Error(`Invalid form section ID: ${sectionId}`);
  }
  return FORM_SECTION_METADATA[sectionId].stepNumber;
};

/**
 * Get metadata for a given section ID
 */
export const getSectionMetadata = (sectionId: FormSectionId): FormSectionMetadata => {
  if (!isValidFormSectionId(sectionId)) {
    throw new Error(`Invalid form section ID: ${sectionId}`);
  }
  return FORM_SECTION_METADATA[sectionId];
};

/**
 * Get all form sections in order
 */
export const getAllFormSections = (): Array<{
  id: FormSectionId;
  metadata: FormSectionMetadata;
}> => {
  return Object.entries(FORM_SECTION_METADATA).map(([id, metadata]) => ({
    id: id as FormSectionId,
    metadata,
  }));
};



