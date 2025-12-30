/**
 * Denmark Immigration Programs
 *
 * Built using the template-based composition system.
 * Denmark has 5 main programs:
 * 1. Fast-Track Scheme
 * 2. Pay Limit Scheme
 * 3. Startup Visa
 * 4. EU Blue Card
 * 5. Family Reunification
 */

import type { FlowchartDefinition } from '../../../types/flowchart';
import { buildFlowchart } from '../builders';
import { COMMON_STEP_IDS } from '../templates/types';

/**
 * Fast-Track Scheme - For certified companies
 */
export const fastTrack: FlowchartDefinition = buildFlowchart({
  programId: 'dk_fast_track',
  countryCode: 'DK',
  programName: 'Fast-Track Scheme',
  complexity: 'low',
  successRate: '95%',
  totalEstimatedDuration: '2-4 weeks',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer from Fast-Track Company]
  job-offer --> Salary{"Salary >= DKK 465,000/year?"}
  Salary -->|Yes| gather-documents[Gather Required Documents]
  Salary -->|No| End1([Not Eligible])
  gather-documents --> submit-application[Submit Application]
  submit-application --> processing[Wait for Processing]
  processing --> Decision{Decision}
  Decision -->|Approved| Visa[Receive Residence Permit]
  Decision -->|Rejected| End2([Process Ended])
  Visa --> arrival[Travel to Denmark]
  arrival --> Register[Register with CPR]
  Register --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 62400,
        additionalNotes: ['Employer must be certified by SIRI', 'Lower threshold (EUR 50,300) for recent graduates', 'Major companies: Maersk, Novo Nordisk, Vestas, LEGO'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['Confirmation employer is on Fast-Track list', 'Educational qualifications', 'Criminal background check'],
        additionalNotes: ['All documents must be apostilled', 'Translations to Danish or English'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 490 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '10-14 days' } },
    {
      id: 'visa',
      title: 'Receive Residence Permit',
      description: 'Collect your residence permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for up to 4 years', 'Renewable', 'Can apply for permanent residence after 4 years'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'residence permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'CPR (Civil Registration System)',
        additionalNotes: ['Register within 5 days of arrival', 'Get CPR number', 'Register with SKAT (tax authority)'],
      },
    },
  ],
});

/**
 * Pay Limit Scheme - High salary, no education requirement
 */
export const payLimit: FlowchartDefinition = buildFlowchart({
  programId: 'dk_pay_limit',
  countryCode: 'DK',
  programName: 'Pay Limit Scheme',
  complexity: 'medium',
  successRate: '90%',
  totalEstimatedDuration: '1-2 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure High-Salary Job Offer]
  job-offer --> Salary{"Salary >= DKK 465,000/year?"}
  Salary -->|Yes| gather-documents[Gather Required Documents]
  Salary -->|No| End1([Not Eligible])
  gather-documents --> submit-application[Submit Application]
  submit-application --> processing[Wait for Processing]
  processing --> Decision{Decision}
  Decision -->|Approved| Visa[Receive Residence Permit]
  Decision -->|Rejected| End2([Process Ended])
  Visa --> arrival[Travel to Denmark]
  arrival --> Register[Register with CPR]
  Register --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 62400,
        additionalNotes: ['No education requirement - most flexible Danish scheme', 'No occupation list requirement', 'Employer does NOT need to be on Fast-Track list', 'Popular for senior professionals and executives'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['Criminal background check', 'Accommodation proof'],
        additionalNotes: ['All documents must be apostilled', 'Translations to Danish or English'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 490 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-60 days' } },
    {
      id: 'visa',
      title: 'Receive Residence Permit',
      description: 'Collect your residence permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for up to 4 years', 'Renewable', 'Can apply for permanent residence after 4 years'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'residence permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'CPR (Civil Registration System)',
        additionalNotes: ['Register within 5 days of arrival', 'Get CPR number', 'Register with SKAT'],
      },
    },
  ],
});

/**
 * Startup Visa - For innovative entrepreneurs
 */
export const startupVisa: FlowchartDefinition = buildFlowchart({
  programId: 'dk_startup',
  countryCode: 'DK',
  programName: 'Startup Visa',
  complexity: 'high',
  successRate: '60%',
  totalEstimatedDuration: '3-6 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->business-idea[Develop Business Idea]
  business-idea -->business-plan[Create Business Plan]
  business-plan -->expert-panel[Submit to Expert Panel]
  expert-panel -->gather-documents[Gather Required Documents]
  gather-documents -->submit[Submit Application]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Startup Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Denmark]
  travel -->register[Register with CPR]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'business-idea',
      title: 'Develop Innovative Business Idea',
      description: 'Create an innovative, scalable business concept suitable for Danish startup ecosystem',
      estimatedDuration: '1-2 months',
      documents: ['Business concept description', 'Market research', 'Competitive analysis', 'Innovation statement'],
      notes: ['Must be innovative and scalable', 'Copenhagen has vibrant startup scene', 'High quality of life and work-life balance'],
    },
    {
      id: 'business-plan',
      title: 'Prepare Detailed Business Plan',
      description: 'Create comprehensive business plan for expert panel approval',
      estimatedDuration: '3-4 weeks',
      documents: ['Executive summary', 'Financial projections (3-5 years)', 'Marketing strategy', 'Organizational structure'],
      notes: ['Plan must be in English or Danish', 'Include realistic financial forecasts'],
    },
    {
      id: 'expert-panel',
      title: 'Submit to Expert Panel',
      description: 'Submit business plan to Danish Business Authority expert panel',
      estimatedDuration: '4-8 weeks',
      documents: ['Business plan', 'Proof of funds', 'Team CVs'],
      notes: ['Expert panel evaluates innovation potential', 'Approval required for visa'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        includeFinancial: true,
        additionalDocuments: ['Expert panel approval', 'Criminal background check'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 490 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-60 days' } },
    {
      id: 'visa',
      title: 'Receive Startup Visa',
      description: 'Collect your startup visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial visa for 2 years', 'Renewable', 'Must maintain business activity'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Startup Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'CPR (Civil Registration System)',
        additionalNotes: ['Register within 5 days of arrival', 'Register business with Danish Business Authority'],
      },
    },
  ],
});

/**
 * EU Blue Card - For highly skilled workers
 */
export const euBlueCard: FlowchartDefinition = buildFlowchart({
  programId: 'dk_eu_blue_card',
  countryCode: 'DK',
  programName: 'EU Blue Card',
  complexity: 'medium',
  successRate: '85%',
  totalEstimatedDuration: '2-3 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer --> Salary{"Salary >= DKK 465,000/year?"}
  Salary -->|Yes| gather-documents[Gather Required Documents]
  Salary -->|No| End1([Not Eligible])
  gather-documents --> submit-application[Submit Application]
  submit-application --> processing[Wait for Processing]
  processing --> Decision{Decision}
  Decision -->|Approved| Visa[Receive Blue Card]
  Decision -->|Rejected| End2([Process Ended])
  Visa --> arrival[Travel to Denmark]
  arrival --> Register[Register with CPR]
  Register --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 62400,
        additionalNotes: ['Denmark has one of the highest EU Blue Card salary thresholds', 'Fast-Track processing available for certified companies', 'Popular sectors: IT, engineering, healthcare, finance'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['University degree (apostilled)', 'Criminal background check', 'Accommodation proof'],
        additionalNotes: ['All documents must be apostilled', 'Translations to Danish or English'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 490 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-60 days' } },
    {
      id: 'visa',
      title: 'Receive Blue Card',
      description: 'Collect your EU Blue Card',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial Blue Card valid for 2 years', 'Renewable', 'Can apply for permanent residence after 5 years'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'EU Blue Card' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'CPR (Civil Registration System)',
        additionalNotes: ['Register within 5 days of arrival', 'Get CPR number', 'Register with SKAT'],
      },
    },
  ],
});

/**
 * Family Reunification
 */
export const familyReunification: FlowchartDefinition = buildFlowchart({
  programId: 'dk_family_reunification',
  countryCode: 'DK',
  programName: 'Family Reunification Visa',
  complexity: 'high',
  successRate: '70%',
  totalEstimatedDuration: '3-6 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->sponsor{Sponsor Eligible?}
  sponsor -->|Yes| gather-documents[Gather Required Documents]
  sponsor -->|No| End1([Not Eligible])
  gather-documents -->submit[Submit at Embassy]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Denmark]
  travel -->register[Register with CPR]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'sponsor-check',
      title: 'Check Eligibility',
      description: 'Verify sponsor has valid residence permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Sponsor residence permit', 'Proof of relationship'],
      notes: ['Sponsor must have valid permit', 'Spouse, children eligible', 'Points system applies'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        additionalDocuments: ['Marriage/birth certificate', 'Proof of accommodation', 'Proof of income', 'Health insurance', 'Danish language test'],
        additionalNotes: ['All documents must be apostilled', 'Translations to Danish required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 490 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '3-6 months' } },
    {
      id: 'visa',
      title: 'Receive Family Visa',
      description: 'Collect visa from embassy',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Visa valid for 90 days', 'Must enter Denmark and apply for residence permit'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'family reunification visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'CPR (Civil Registration System)',
        additionalNotes: ['Register within 5 days of arrival', 'Apply for residence permit', 'Get CPR number'],
      },
    },
  ],
});

/**
 * Export all Denmark flowcharts as a record for compatibility with existing system
 */
export const denmarkFlowchartsNew: Record<string, FlowchartDefinition> = {
  fast_track: fastTrack,
  pay_limit: payLimit,
  startup_visa: startupVisa,
  eu_blue_card: euBlueCard,
  family_reunification: familyReunification,
};

