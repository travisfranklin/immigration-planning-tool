/**
 * Job Offer Step Template
 * 
 * Creates a standardized "secure job offer" step for work visa applications.
 */

import type { FlowchartStep } from '../../../../types/flowchart';
import type { CountryConfig, BaseStepOptions } from '../types';
import { COMMON_STEP_IDS } from '../types';

export interface JobOfferOptions extends BaseStepOptions {
  /** Minimum salary threshold */
  salaryThreshold?: number;
  /** Lower threshold for shortage occupations */
  shortageOccupationThreshold?: number;
  /** Whether employer needs to be recognized/approved */
  requiresRecognizedEmployer?: boolean;
  /** Whether job must be in shortage occupation list */
  requiresShortageOccupation?: boolean;
}

/**
 * Creates a job offer step
 */
export function createJobOfferStep(
  config: CountryConfig,
  options: JobOfferOptions = {}
): FlowchartStep {
  const documents = [
    'Signed employment contract or offer letter',
    'Job description with responsibilities',
    'Employer company registration documents',
  ];

  if (options.requiresRecognizedEmployer) {
    documents.push('Proof of employer recognition/sponsor license');
  }

  if (options.additionalDocuments) {
    documents.push(...options.additionalDocuments);
  }

  const notes: string[] = [];

  if (options.salaryThreshold) {
    notes.push(
      `Minimum salary: ${config.currency} ${options.salaryThreshold.toLocaleString()} per year`
    );
  }

  if (options.shortageOccupationThreshold) {
    notes.push(
      `Lower threshold of ${config.currency} ${options.shortageOccupationThreshold.toLocaleString()} for shortage occupations`
    );
  }

  if (options.requiresShortageOccupation) {
    notes.push('Position must be on the official shortage occupation list');
  }

  notes.push('Ensure contract includes required details: salary, role, duration');
  notes.push('Contract should be in local language or officially translated');

  if (options.additionalNotes) {
    notes.push(...options.additionalNotes);
  }

  return {
    id: options.id ?? COMMON_STEP_IDS.JOB_OFFER,
    title: options.title ?? 'Secure Job Offer',
    description: options.description ?? 
      `Obtain a job offer from an employer in ${config.name}. The position must meet the visa requirements for salary and qualifications.`,
    estimatedDuration: options.estimatedDuration ?? '1-3 months',
    documents,
    notes,
  };
}

