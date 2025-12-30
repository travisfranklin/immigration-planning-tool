/**
 * Processing Step Template
 * 
 * Creates a standardized "processing/wait" step with country-specific
 * processing time estimates.
 */

import type { FlowchartStep } from '../../../../types/flowchart';
import type { CountryConfig, BaseStepOptions } from '../types';
import { COMMON_STEP_IDS } from '../types';

export interface ProcessingOptions extends BaseStepOptions {
  /** Override processing time (uses country default if not provided) */
  processingTime?: string;
  /** Is this fast-track processing? */
  fastTrack?: boolean;
  /** Additional documents that might be requested */
  additionalRequestDocuments?: string[];
}

/**
 * Creates a processing/wait step
 */
export function createProcessingStep(
  config: CountryConfig,
  options: ProcessingOptions = {}
): FlowchartStep {
  // Determine processing time
  let processingTime: string;
  if (options.processingTime) {
    processingTime = options.processingTime;
  } else if (options.fastTrack && config.fastTrackProcessingTime) {
    processingTime = config.fastTrackProcessingTime;
  } else {
    processingTime = config.standardProcessingTime;
  }

  const documents: string[] = [];
  
  if (options.additionalRequestDocuments) {
    documents.push(...options.additionalRequestDocuments);
  }

  const notes: string[] = [
    'Processing times may vary depending on application volume',
    'You may be contacted for additional documentation',
    'Check application status periodically through official channels',
  ];

  if (options.fastTrack) {
    notes.push('Fast-track processing requested - shorter processing time expected');
  }

  if (options.additionalNotes) {
    notes.push(...options.additionalNotes);
  }

  return {
    id: options.id ?? COMMON_STEP_IDS.PROCESSING,
    title: options.title ?? 'Application Processing',
    description: options.description ?? 
      `Wait for the authorities to process your application. Typical processing time is ${processingTime}.`,
    estimatedDuration: options.estimatedDuration ?? processingTime,
    documents,
    notes,
  };
}

