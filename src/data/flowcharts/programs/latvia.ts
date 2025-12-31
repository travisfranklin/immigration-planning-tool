/**
 * Latvia Immigration Programs
 *
 * Built using the template-based composition system.
 * Latvia has 5 main programs:
 * 1. EU Blue Card
 * 2. Startup Visa
 * 3. Work Permit
 * 4. Self-Employment
 * 5. Family Reunification
 */

import type { FlowchartDefinition } from '../../../types/flowchart';
import { buildFlowchart } from '../builders';
import { COMMON_STEP_IDS } from '../templates/types';

/**
 * EU Blue Card - For highly skilled workers
 */
export const euBlueCard: FlowchartDefinition = buildFlowchart({
  programId: 'lv_eu_blue_card',
  countryCode: 'LV',
  programName: 'EU Blue Card',
  complexity: 'medium',
  successRate: '85%',
  totalEstimatedDuration: '2-3 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer --> salary{"Salary >= EUR 2,000/month?"}
  salary -->|Yes| gather-documents[Gather Required Documents]
  salary -->|No| End1([Not Eligible])
  gather-documents --> submit-application[Submit Application]
  submit-application --> processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Blue Card]
  decision -->|Rejected| End2([Process Ended])
  visa --> travel[Travel to Latvia]
  travel --> registration[Register with OCMA]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 24000,
        additionalNotes: ['Low EU Blue Card threshold', 'Riga is growing tech hub', 'Low cost of living', 'Gateway to Baltic region'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['University degree (apostilled)', 'Criminal background check', 'Accommodation proof'],
        additionalNotes: ['All documents must be apostilled', 'Translations to Latvian required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 100 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-60 days' } },
    {
      id: 'visa',
      title: 'Receive Blue Card',
      description: 'Collect your EU Blue Card',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial Blue Card valid for 5 years', 'Renewable', 'Can apply for permanent residence after 5 years'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'EU Blue Card' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'OCMA (Office of Citizenship and Migration Affairs)',
        additionalNotes: ['Register within 3 days of arrival', 'Get residence permit card'],
      },
    },
  ],
});

/**
 * Startup Visa - For innovative entrepreneurs
 */
export const startupVisa: FlowchartDefinition = buildFlowchart({
  programId: 'lv_startup_visa',
  countryCode: 'LV',
  programName: 'Startup Visa',
  complexity: 'high',
  successRate: '70%',
  totalEstimatedDuration: '2-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->business-idea[Develop Business Idea]
  business-idea -->business-plan[Create Business Plan]
  business-plan -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Startup Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Latvia]
  travel -->registration[Register with OCMA]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'business-idea',
      title: 'Develop Innovative Startup Idea',
      description: 'Create an innovative, scalable business concept',
      estimatedDuration: '1-2 months',
      documents: ['Business concept description', 'Market research', 'Innovation potential'],
      notes: ['Focus on tech, fintech, or innovation sectors', 'Riga has growing startup ecosystem'],
    },
    {
      id: 'business-plan',
      title: 'Prepare Business Plan',
      description: 'Create comprehensive business plan',
      estimatedDuration: '2-4 weeks',
      documents: ['Executive summary', 'Financial projections', 'Marketing strategy'],
      notes: ['Plan must be in English or Latvian', 'Include realistic financial forecasts'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        includeFinancial: true,
        additionalDocuments: ['Proof of funds', 'Criminal background check'],
        additionalNotes: ['All documents must be apostilled'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 100 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-60 days' } },
    {
      id: 'visa',
      title: 'Receive Startup Visa',
      description: 'Collect your startup visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial permit for 3 years', 'Renewable', 'Must maintain business activity'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Startup Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'OCMA (Office of Citizenship and Migration Affairs)',
        additionalNotes: ['Register within 3 days of arrival', 'Register business with Enterprise Register'],
      },
    },
  ],
});

/**
 * Work Permit - Standard work visa
 */
export const workPermit: FlowchartDefinition = buildFlowchart({
  programId: 'lv_work_permit',
  countryCode: 'LV',
  programName: 'Work Permit',
  complexity: 'medium',
  successRate: '80%',
  totalEstimatedDuration: '2-3 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Work Permit]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Latvia]
  travel -->registration[Register with OCMA]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 12000,
        additionalNotes: ['Riga is growing tech hub', 'Low cost of living', 'Employer must prove no suitable Latvian/EU candidate'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['Educational qualifications', 'Criminal background check', 'Medical certificate'],
        additionalNotes: ['All documents must be apostilled', 'Translations to Latvian required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 100 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-60 days' } },
    {
      id: 'visa',
      title: 'Receive Work Permit',
      description: 'Collect your work permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for duration of contract (max 5 years)', 'Renewable', 'Tied to employer initially'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'work permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'OCMA (Office of Citizenship and Migration Affairs)',
        additionalNotes: ['Register within 3 days of arrival', 'Get residence permit card'],
      },
    },
  ],
});

/**
 * Self-Employment Visa
 */
export const selfEmployment: FlowchartDefinition = buildFlowchart({
  programId: 'lv_self_employment',
  countryCode: 'LV',
  programName: 'Self-Employment Visa',
  complexity: 'high',
  successRate: '70%',
  totalEstimatedDuration: '2-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->business-plan[Create Business Plan]
  business-plan -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Self-Employment Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Latvia]
  travel -->registration[Register with OCMA]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'business-plan',
      title: 'Develop Business Plan',
      description: 'Create comprehensive business plan',
      estimatedDuration: '2-4 weeks',
      documents: ['Business plan', 'Market analysis', 'Financial projections'],
      notes: ['Must demonstrate viability', 'Low cost of living', 'Riga is growing business hub'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        includeFinancial: true,
        additionalDocuments: ['Proof of funds', 'Qualifications', 'Criminal background check'],
        additionalNotes: ['All documents must be apostilled', 'Translations to Latvian required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 100 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-60 days' } },
    {
      id: 'visa',
      title: 'Receive Self-Employment Visa',
      description: 'Collect your self-employment visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial permit for 1 year', 'Renewable', 'Must maintain business activity'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Self-Employment Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'OCMA (Office of Citizenship and Migration Affairs)',
        additionalNotes: ['Register within 3 days of arrival', 'Register business with Enterprise Register'],
      },
    },
  ],
});

/**
 * Family Reunification
 */
export const familyReunification: FlowchartDefinition = buildFlowchart({
  programId: 'lv_family_reunification',
  countryCode: 'LV',
  programName: 'Family Reunification',
  complexity: 'medium',
  successRate: '80%',
  totalEstimatedDuration: '2-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->sponsor-check{Sponsor Eligible?}
  sponsor-check -->|Yes| gather-documents[Gather Required Documents]
  sponsor-check -->|No| End1([Not Eligible])
  gather-documents -->submit-application[Submit at Consulate]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Latvia]
  travel -->registration[Register with OCMA]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'sponsor-check',
      title: 'Check Eligibility',
      description: 'Verify sponsor has valid residence permit',
      estimatedDuration: '1 week',
      documents: ['Sponsor residence permit', 'Proof of relationship'],
      notes: ['Sponsor must have valid permit', 'Spouse, children, parents eligible'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        additionalDocuments: ['Marriage/birth certificate', 'Proof of accommodation', 'Proof of income', 'Health insurance'],
        additionalNotes: ['All documents must be apostilled', 'Translations to Latvian required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 100 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-60 days' } },
    {
      id: 'visa',
      title: 'Receive Family Visa',
      description: 'Collect visa from consulate',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Visa valid for 90 days', 'Must enter Latvia and apply for residence permit'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'family reunification visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'OCMA (Office of Citizenship and Migration Affairs)',
        additionalNotes: ['Register within 3 days of arrival', 'Apply for residence permit'],
      },
    },
  ],
});

/**
 * Export all Latvia flowcharts as a record for compatibility with existing system
 */
export const latviaFlowchartsNew: Record<string, FlowchartDefinition> = {
  eu_blue_card: euBlueCard,
  startup_visa: startupVisa,
  work_permit: workPermit,
  self_employment: selfEmployment,
  family_reunification: familyReunification,
};

