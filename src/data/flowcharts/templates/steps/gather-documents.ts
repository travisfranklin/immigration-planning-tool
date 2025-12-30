/**
 * Gather Documents Step Template
 * 
 * Creates a standardized "gather documents" step with country-specific
 * document requirements based on the country configuration.
 */

import type { FlowchartStep } from '../../../../types/flowchart';
import type { CountryConfig, BaseStepOptions } from '../types';
import { COMMON_STEP_IDS } from '../types';

export interface GatherDocumentsOptions extends BaseStepOptions {
  /** Include degree/qualification documents */
  includeDegree?: boolean;
  /** Include employment documents */
  includeEmployment?: boolean;
  /** Include financial documents */
  includeFinancial?: boolean;
  /** Include business plan documents (for entrepreneur visas) */
  includeBusinessPlan?: boolean;
}

/**
 * Creates a gather documents step with country-appropriate requirements
 */
export function createGatherDocumentsStep(
  config: CountryConfig,
  options: GatherDocumentsOptions = {}
): FlowchartStep {
  const baseDocuments = [
    `Valid passport (${config.passportValidity} validity required)`,
    'Completed application form',
    'Passport-sized photos (biometric format)',
    'Proof of health insurance coverage',
  ];

  // Add translation requirements based on country config
  const translationNotes: string[] = [];
  if (config.translationRequired) {
    translationNotes.push(
      config.certifiedTranslationRequired
        ? `All documents must be translated to ${config.officialLanguage} by a certified translator`
        : `Documents should be translated to ${config.officialLanguage}`
    );
  }

  // Add apostille note if required
  if (config.requiresApostille) {
    translationNotes.push('Documents from the US require apostille');
  }

  // Conditionally add document categories
  const conditionalDocuments: string[] = [];
  
  if (options.includeDegree !== false) {
    conditionalDocuments.push('University degree certificate');
    conditionalDocuments.push('Academic transcripts');
  }
  
  if (options.includeEmployment) {
    conditionalDocuments.push('Employment contract or job offer letter');
    conditionalDocuments.push('Employer information and registration');
  }
  
  if (options.includeFinancial) {
    conditionalDocuments.push('Bank statements (last 3-6 months)');
    conditionalDocuments.push('Proof of sufficient funds');
  }
  
  if (options.includeBusinessPlan) {
    conditionalDocuments.push('Business plan');
    conditionalDocuments.push('Financial projections');
    conditionalDocuments.push('Client letters of intent');
  }

  // Filter out excluded documents and add additional ones
  let documents = [...baseDocuments, ...conditionalDocuments];
  
  if (options.excludeDocuments) {
    documents = documents.filter(
      doc => !options.excludeDocuments?.some(exclude => 
        doc.toLowerCase().includes(exclude.toLowerCase())
      )
    );
  }
  
  if (options.additionalDocuments) {
    documents.push(...options.additionalDocuments);
  }

  // Build notes array
  let notes = [...translationNotes];
  
  if (options.excludeNotes) {
    notes = notes.filter(
      note => !options.excludeNotes?.some(exclude => 
        note.toLowerCase().includes(exclude.toLowerCase())
      )
    );
  }
  
  if (options.additionalNotes) {
    notes.push(...options.additionalNotes);
  }

  return {
    id: options.id ?? COMMON_STEP_IDS.GATHER_DOCUMENTS,
    title: options.title ?? 'Gather Required Documents',
    description: options.description ?? 
      'Collect and prepare all necessary documentation for your visa application. Ensure all documents are properly certified and translated as required.',
    estimatedDuration: options.estimatedDuration ?? '2-4 weeks',
    documents,
    notes: notes.length > 0 ? notes : undefined,
  };
}

