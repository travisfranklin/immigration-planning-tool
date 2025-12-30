/**
 * Flowchart Templates
 * 
 * Template-based system for creating flowchart definitions.
 * This allows reusable step templates with country-specific overrides
 * to reduce duplication and enable bulk updates.
 */

// Types
export type { 
  CountryConfig,
  StepTemplate,
  BaseStepOptions,
  FlowchartBuilderInput,
  StepDefinition,
  CommonStepId,
  ProgramType,
} from './types';

export { COMMON_STEP_IDS, PROGRAM_TYPES, isStepDefinition } from './types';

// Country configurations
export { COUNTRY_CONFIGS } from './country-configs';

// Step templates
export * from './steps';

