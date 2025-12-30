/**
 * Flowchart Builder
 * 
 * Utility to compose FlowchartDefinition objects from templates.
 * This is the main entry point for creating flowcharts using the template system.
 */

import type { FlowchartDefinition, FlowchartStep } from '../../../types/flowchart';
import type { CountryConfig, FlowchartBuilderInput, StepDefinition } from '../templates/types';
import { isStepDefinition, COMMON_STEP_IDS } from '../templates/types';
import { COUNTRY_CONFIGS } from '../templates/country-configs';
import {
  createGatherDocumentsStep,
  createSubmitApplicationStep,
  createProcessingStep,
  createTravelStep,
  createRegistrationStep,
  createJobOfferStep,
} from '../templates/steps';

/**
 * Registry of step template factories by template name
 */
const STEP_TEMPLATE_REGISTRY: Record<string, (config: CountryConfig, options?: Record<string, unknown>) => FlowchartStep> = {
  [COMMON_STEP_IDS.GATHER_DOCUMENTS]: createGatherDocumentsStep,
  [COMMON_STEP_IDS.SUBMIT_APPLICATION]: createSubmitApplicationStep,
  [COMMON_STEP_IDS.PROCESSING]: createProcessingStep,
  [COMMON_STEP_IDS.TRAVEL]: createTravelStep,
  [COMMON_STEP_IDS.REGISTRATION]: createRegistrationStep,
  [COMMON_STEP_IDS.JOB_OFFER]: createJobOfferStep,
};

/**
 * Resolve a step definition to a FlowchartStep
 */
function resolveStep(
  stepDef: FlowchartStep | StepDefinition,
  config: CountryConfig
): FlowchartStep {
  if (!isStepDefinition(stepDef)) {
    // Already a complete FlowchartStep
    return stepDef;
  }

  const templateFactory = STEP_TEMPLATE_REGISTRY[stepDef.template];
  if (!templateFactory) {
    throw new Error(`Unknown step template: ${stepDef.template}`);
  }

  return templateFactory(config, stepDef.options);
}

/**
 * Build a FlowchartDefinition from builder input
 * 
 * @example
 * ```ts
 * const flowchart = buildFlowchart({
 *   programId: 'de_blue_card',
 *   countryCode: 'DE',
 *   programName: 'EU Blue Card',
 *   complexity: 'medium',
 *   totalEstimatedDuration: '3-6 months',
 *   steps: [
 *     { template: 'job-offer', options: { salaryThreshold: 45300 } },
 *     { template: 'gather-documents', options: { includeEmployment: true } },
 *     { template: 'submit-application' },
 *     { template: 'processing' },
 *     { template: 'travel' },
 *     { template: 'registration' },
 *   ],
 *   mermaidDiagram: `...`,
 * });
 * ```
 */
export function buildFlowchart(input: FlowchartBuilderInput): FlowchartDefinition {
  const config = COUNTRY_CONFIGS[input.countryCode];
  if (!config) {
    throw new Error(`No configuration found for country: ${input.countryCode}`);
  }

  // Resolve all steps
  const steps = input.steps.map(stepDef => resolveStep(stepDef, config));

  // Generate mermaid diagram if not provided
  const mermaidDiagram = input.mermaidDiagram ?? generateDefaultDiagram(steps, config);

  return {
    programId: input.programId,
    countryCode: input.countryCode,
    programName: input.programName,
    totalEstimatedDuration: input.totalEstimatedDuration,
    complexity: input.complexity,
    successRate: input.successRate,
    mermaidDiagram,
    steps,
  };
}

/**
 * Generate a basic linear mermaid diagram from steps
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function generateDefaultDiagram(steps: FlowchartStep[], _config: CountryConfig): string {
  if (steps.length === 0) {
    return 'flowchart TD\n  Start([Start]) --> End([End])';
  }

  const lines: string[] = ['flowchart TD'];
  lines.push('  Start([Start Process]) --> ' + steps[0].id + '[' + steps[0].title + ']');

  for (let i = 0; i < steps.length - 1; i++) {
    const current = steps[i];
    const next = steps[i + 1];
    lines.push(`  ${current.id}[${current.title}] --> ${next.id}[${next.title}]`);
  }

  const lastStep = steps[steps.length - 1];
  lines.push(`  ${lastStep.id}[${lastStep.title}] --> Success([Process Complete])`);

  return lines.join('\n');
}

/**
 * Helper to create a work visa flowchart with common steps
 */
export function buildWorkVisaFlowchart(
  input: Omit<FlowchartBuilderInput, 'steps'> & {
    salaryThreshold: number;
    shortageOccupationThreshold?: number;
    requiresRecognizedEmployer?: boolean;
    additionalSteps?: Array<FlowchartStep | StepDefinition>;
  }
): FlowchartDefinition {
  const steps: Array<FlowchartStep | StepDefinition> = [
    { 
      template: COMMON_STEP_IDS.JOB_OFFER, 
      options: { 
        salaryThreshold: input.salaryThreshold,
        shortageOccupationThreshold: input.shortageOccupationThreshold,
        requiresRecognizedEmployer: input.requiresRecognizedEmployer,
      } 
    },
    { template: COMMON_STEP_IDS.GATHER_DOCUMENTS, options: { includeEmployment: true, includeDegree: true } },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION },
    { template: COMMON_STEP_IDS.PROCESSING },
    { template: COMMON_STEP_IDS.TRAVEL },
    { template: COMMON_STEP_IDS.REGISTRATION },
  ];

  if (input.additionalSteps) {
    steps.push(...input.additionalSteps);
  }

  return buildFlowchart({
    ...input,
    steps,
  });
}

