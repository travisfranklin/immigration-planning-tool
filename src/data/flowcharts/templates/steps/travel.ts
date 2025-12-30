/**
 * Travel Step Template
 * 
 * Creates a standardized "travel to country" step with country-specific
 * arrival requirements.
 */

import type { FlowchartStep } from '../../../../types/flowchart';
import type { CountryConfig, BaseStepOptions } from '../types';
import { COMMON_STEP_IDS } from '../types';

export interface TravelOptions extends BaseStepOptions {
  /** Type of visa/permit to travel with */
  visaType?: string;
  /** Include accommodation requirement */
  requiresAccommodation?: boolean;
}

/**
 * Creates a travel step
 */
export function createTravelStep(
  config: CountryConfig,
  options: TravelOptions = {}
): FlowchartStep {
  const documents = [
    'Valid passport with visa/permit',
    'Printed copies of all application documents',
    'Proof of health insurance valid in the EU',
  ];

  if (options.requiresAccommodation !== false) {
    documents.push('Accommodation proof for initial stay');
  }

  if (options.additionalDocuments) {
    documents.push(...options.additionalDocuments);
  }

  const notes = [
    `Enter ${config.name} within the visa validity period`,
    'Keep all documents accessible for border control',
    'Notify employer of your arrival date in advance',
  ];

  if (options.additionalNotes) {
    notes.push(...options.additionalNotes);
  }

  const visaType = options.visaType ?? 'your visa';

  return {
    id: options.id ?? COMMON_STEP_IDS.TRAVEL,
    title: options.title ?? `Travel to ${config.name}`,
    description: options.description ?? 
      `Travel to ${config.name} with ${visaType}. Make sure to have all required documents for border control.`,
    estimatedDuration: options.estimatedDuration ?? '1-2 days',
    documents,
    notes,
  };
}

