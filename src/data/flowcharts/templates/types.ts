/**
 * Flowchart Templates - Type Definitions
 * 
 * Defines the core types for the template-based flowchart composition system.
 * This allows reusable step templates with country-specific overrides.
 */

import type { FlowchartStep } from '../../../types/flowchart';
import type { CountryCode } from '../../../constants/countries';

/**
 * Country-specific configuration values that differ between countries
 * but are needed consistently across step templates
 */
export interface CountryConfig {
  code: CountryCode;
  name: string;
  currency: string;
  officialLanguage: string;
  
  // Passport and document requirements
  passportValidity: string;
  requiresApostille: boolean;
  translationRequired: boolean;
  certifiedTranslationRequired: boolean;
  
  // Registration authorities
  registrationAuthority: string;
  registrationAuthorityAbbrev?: string;
  registrationTimeframe: string;
  
  // Common fees
  applicationFeeRange: string;
  registrationFee?: string;
  
  // Processing times
  standardProcessingTime: string;
  fastTrackProcessingTime?: string;
  
  // Path to permanent residency / citizenship
  prTimeframe: string;
  citizenshipTimeframe: string;
  
  // Country-specific advantages
  advantages: string[];
  
  // Additional country-specific notes
  notes?: string[];
}

/**
 * Step template function signature
 * Takes country config and optional overrides, returns a FlowchartStep
 */
export type StepTemplate<TOptions = Record<string, unknown>> = (
  config: CountryConfig,
  options?: TOptions
) => FlowchartStep;

/**
 * Options for customizing step templates
 */
export interface BaseStepOptions {
  /** Override the step ID */
  id?: string;
  /** Override the step title */
  title?: string;
  /** Override the step description */
  description?: string;
  /** Override estimated duration */
  estimatedDuration?: string;
  /** Additional documents to include */
  additionalDocuments?: string[];
  /** Documents to exclude from the default list */
  excludeDocuments?: string[];
  /** Additional notes to include */
  additionalNotes?: string[];
  /** Notes to exclude from the default list */
  excludeNotes?: string[];
}

/**
 * Common step IDs used across flowcharts
 * Using constants prevents typos and enables refactoring
 */
export const COMMON_STEP_IDS = {
  GATHER_DOCUMENTS: 'gather-documents',
  SUBMIT_APPLICATION: 'submit-application',
  PROCESSING: 'processing',
  DECISION: 'decision',
  TRAVEL: 'travel',
  REGISTRATION: 'registration',
  JOB_OFFER: 'job-offer',
  EMPLOYER_APPLICATION: 'employer-application',
  RECEIVE_PERMIT: 'receive-permit',
  APPEAL: 'appeal',
  BANK_ACCOUNT: 'bank-account',
  HEALTH_INSURANCE: 'health-insurance',
  FINANCIAL_PROOF: 'financial-proof',
  BUSINESS_PLAN: 'business-plan',
} as const;

export type CommonStepId = typeof COMMON_STEP_IDS[keyof typeof COMMON_STEP_IDS];

/**
 * Program type categories for grouping similar visa programs
 */
export const PROGRAM_TYPES = {
  WORK_VISA: 'work-visa',
  SKILLED_WORKER: 'skilled-worker',
  BLUE_CARD: 'blue-card',
  FREELANCE: 'freelance',
  STARTUP: 'startup',
  INVESTOR: 'investor',
  DIGITAL_NOMAD: 'digital-nomad',
  FAMILY_REUNIFICATION: 'family-reunification',
  STUDENT: 'student',
  GOLDEN_VISA: 'golden-visa',
} as const;

export type ProgramType = typeof PROGRAM_TYPES[keyof typeof PROGRAM_TYPES];

/**
 * Flowchart builder input - defines a flowchart using templates
 */
export interface FlowchartBuilderInput {
  programId: string;
  countryCode: CountryCode;
  programName: string;
  complexity: 'low' | 'medium' | 'high';
  successRate?: string;
  totalEstimatedDuration: string;
  programType?: ProgramType;
  
  /**
   * Steps can be defined as:
   * - A step template reference with options
   * - A complete FlowchartStep for custom steps
   */
  steps: Array<FlowchartStep | StepDefinition>;
  
  /**
   * Mermaid diagram - can be provided directly or generated
   */
  mermaidDiagram?: string;
}

/**
 * Step definition that references a template
 */
export interface StepDefinition {
  template: string;
  options?: BaseStepOptions & Record<string, unknown>;
}

/**
 * Type guard to check if a step is a template reference
 */
export function isStepDefinition(step: FlowchartStep | StepDefinition): step is StepDefinition {
  return 'template' in step;
}

