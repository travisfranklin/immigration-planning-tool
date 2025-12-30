/**
 * Registration Step Template
 * 
 * Creates a standardized "local registration" step with country-specific
 * registration authority and requirements.
 */

import type { FlowchartStep } from '../../../../types/flowchart';
import type { CountryConfig, BaseStepOptions } from '../types';
import { COMMON_STEP_IDS } from '../types';

export interface RegistrationOptions extends BaseStepOptions {
  /** Include residence registration */
  includeResidenceRegistration?: boolean;
  /** Include bank account setup */
  includeBankAccount?: boolean;
  /** Include tax registration */
  includeTaxRegistration?: boolean;
  /** Custom registration fee */
  registrationFee?: string;
}

/**
 * Creates a local registration step
 */
export function createRegistrationStep(
  config: CountryConfig,
  options: RegistrationOptions = {}
): FlowchartStep {
  const authority = config.registrationAuthorityAbbrev ?? config.registrationAuthority;
  
  const documents = [
    'Valid passport with visa',
    'Proof of accommodation (rental contract or hotel booking)',
    'Employment contract (if applicable)',
    'Health insurance certificate',
  ];

  if (options.additionalDocuments) {
    documents.push(...options.additionalDocuments);
  }

  const notes: string[] = [
    `Register within ${config.registrationTimeframe}`,
  ];

  if (config.registrationFee || options.registrationFee) {
    const fee = options.registrationFee ?? config.registrationFee;
    notes.push(`Registration fee: ${config.currency} ${fee}`);
  }

  if (options.includeResidenceRegistration !== false) {
    notes.push('Register your residence address with local authorities');
  }

  if (options.includeBankAccount) {
    notes.push('Open a local bank account for salary and payments');
  }

  if (options.includeTaxRegistration) {
    notes.push('Register with tax authorities for tax number');
  }

  if (options.additionalNotes) {
    notes.push(...options.additionalNotes);
  }

  return {
    id: options.id ?? COMMON_STEP_IDS.REGISTRATION,
    title: options.title ?? `Register at ${authority}`,
    description: options.description ?? 
      `Complete your registration with ${config.registrationAuthority}. This is required within ${config.registrationTimeframe}.`,
    estimatedDuration: options.estimatedDuration ?? '1-2 weeks',
    documents,
    notes,
  };
}

