/**
 * Submit Application Step Template
 * 
 * Creates a standardized "submit application" step with country-specific
 * submission details based on the country configuration.
 */

import type { FlowchartStep } from '../../../../types/flowchart';
import type { CountryConfig, BaseStepOptions } from '../types';
import { COMMON_STEP_IDS } from '../types';

export interface SubmitApplicationOptions extends BaseStepOptions {
  /** Where to submit (embassy, consulate, online, etc.) */
  submissionLocation?: 'embassy' | 'consulate' | 'online' | 'in-country';
  /** Custom submission venue name */
  venueName?: string;
  /** Appointment required? */
  appointmentRequired?: boolean;
  /** Include biometrics step */
  biometricsRequired?: boolean;
}

/**
 * Creates a submit application step
 */
export function createSubmitApplicationStep(
  config: CountryConfig,
  options: SubmitApplicationOptions = {}
): FlowchartStep {
  const submissionLocation = options.submissionLocation ?? 'embassy';
  
  const locationDescriptions: Record<string, string> = {
    embassy: `${config.name} Embassy or Consulate`,
    consulate: `${config.name} Consulate`,
    online: 'official online portal',
    'in-country': `${config.registrationAuthorityAbbrev ?? config.registrationAuthority}`,
  };

  const venue = options.venueName ?? locationDescriptions[submissionLocation];

  const documents = [
    'All gathered documents (originals and copies)',
    'Completed application forms',
    'Application fee payment confirmation',
  ];

  if (options.appointmentRequired !== false) {
    documents.push('Appointment confirmation');
  }

  if (options.biometricsRequired) {
    documents.push('Biometrics appointment confirmation');
  }

  const notes: string[] = [
    `Application fee: ${config.currency} ${config.applicationFeeRange}`,
  ];

  if (options.appointmentRequired !== false) {
    notes.push('Book appointment well in advance as slots fill quickly');
  }

  if (options.biometricsRequired) {
    notes.push('Biometrics (fingerprints) will be collected at the appointment');
  }

  if (options.additionalDocuments) {
    documents.push(...options.additionalDocuments);
  }

  if (options.additionalNotes) {
    notes.push(...options.additionalNotes);
  }

  return {
    id: options.id ?? COMMON_STEP_IDS.SUBMIT_APPLICATION,
    title: options.title ?? 'Submit Application',
    description: options.description ?? 
      `Submit your completed application to the ${venue}. Ensure all documents are in order before your appointment.`,
    estimatedDuration: options.estimatedDuration ?? '1 day',
    documents,
    notes,
  };
}

