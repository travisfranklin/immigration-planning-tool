/**
 * Czech Republic Immigration Programs
 *
 * Built using the template-based composition system.
 * Czech Republic has 5 main programs:
 * 1. EU Blue Card
 * 2. Employee Card
 * 3. Startup Visa
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
  programId: 'cz_eu_blue_card',
  countryCode: 'CZ',
  programName: 'EU Blue Card',
  complexity: 'medium',
  successRate: '85%',
  totalEstimatedDuration: '2-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer --> Salary{"Salary >= EUR 1,800/month?"}
  Salary -->|Yes| gather-documents[Gather Required Documents]
  Salary -->|No| End1([Not Eligible])
  gather-documents --> submit-application[Submit Application]
  submit-application --> processing[Wait for Processing]
  processing --> Decision{Decision}
  Decision -->|Approved| Visa[Receive Blue Card]
  Decision -->|Rejected| End2([Process Ended])
  Visa --> arrival[Travel to Czech Republic]
  arrival --> Register[Register with Foreign Police]
  Register --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 21600,
        additionalNotes: ['Prague is major tech hub', 'English widely spoken in tech companies', 'Same salary threshold as Poland, lower than Western Europe'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['University degree (apostilled)', 'Criminal background check', 'Accommodation proof'],
        additionalNotes: ['All documents must be apostilled', 'Translations to Czech required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 100 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '60-90 days' } },
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
        registrationAuthority: 'Foreign Police (Cizinecká policie)',
        additionalNotes: ['Register within 3 days of arrival', 'Get biometric residence card'],
      },
    },
  ],
});

/**
 * Employee Card - Standard work permit
 */
export const employeeCard: FlowchartDefinition = buildFlowchart({
  programId: 'cz_employee_card',
  countryCode: 'CZ',
  programName: 'Employee Card',
  complexity: 'medium',
  successRate: '80%',
  totalEstimatedDuration: '2-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer -->gather-documents[Gather Required Documents]
  gather-documents -->submit[Submit Application]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Employee Card]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Czech Republic]
  travel -->register[Register with Foreign Police]
  register --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 12000,
        additionalNotes: ['Lower threshold than EU Blue Card', 'Prague is major tech hub', 'English common in tech companies'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['Educational qualifications', 'Criminal background check', 'Accommodation proof'],
        additionalNotes: ['All documents must be apostilled', 'Translations to Czech required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 100 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '60-90 days' } },
    {
      id: 'visa',
      title: 'Receive Employee Card',
      description: 'Collect your Employee Card',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for duration of contract (max 2 years)', 'Renewable', 'Tied to employer initially'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Employee Card' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Foreign Police (Cizinecká policie)',
        additionalNotes: ['Register within 3 days of arrival', 'Get biometric residence card'],
      },
    },
  ],
});

/**
 * Startup Visa - For innovative entrepreneurs
 */
export const startupVisa: FlowchartDefinition = buildFlowchart({
  programId: 'cz_startup_visa',
  countryCode: 'CZ',
  programName: 'Startup Visa',
  complexity: 'high',
  successRate: '65%',
  totalEstimatedDuration: '3-5 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->business-idea[Develop Business Idea]
  business-idea -->business-plan[Create Business Plan]
  business-plan -->czechinvest[Apply to CzechInvest]
  czechinvest -->gather-documents[Gather Required Documents]
  gather-documents -->submit[Submit Application]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Startup Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Czech Republic]
  travel -->register[Register with Foreign Police]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'business-idea',
      title: 'Develop Innovative Business Idea',
      description: 'Create an innovative, scalable business concept suitable for Czech startup ecosystem',
      estimatedDuration: '1-2 months',
      documents: ['Business concept description', 'Market research', 'Competitive analysis', 'Innovation statement'],
      notes: ['Must be innovative and scalable', 'Prague has vibrant startup scene', 'Lower costs than Western Europe'],
    },
    {
      id: 'business-plan',
      title: 'Prepare Detailed Business Plan',
      description: 'Create comprehensive business plan for CzechInvest approval',
      estimatedDuration: '3-4 weeks',
      documents: ['Executive summary', 'Financial projections (3-5 years)', 'Marketing strategy', 'Organizational structure'],
      notes: ['Plan must be in English or Czech', 'Include realistic financial forecasts'],
    },
    {
      id: 'czechinvest',
      title: 'Apply to CzechInvest',
      description: 'Submit application to CzechInvest for startup endorsement',
      estimatedDuration: '4-6 weeks',
      documents: ['Business plan', 'Proof of funds', 'Team CVs'],
      notes: ['CzechInvest evaluates innovation potential', 'Endorsement required for visa'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        includeFinancial: true,
        additionalDocuments: ['CzechInvest endorsement', 'Criminal background check'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 100 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '60-90 days' } },
    {
      id: 'visa',
      title: 'Receive Startup Visa',
      description: 'Collect your startup visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial visa for 1 year', 'Renewable for up to 2 additional years', 'Must maintain business activity'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Startup Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Foreign Police (Cizinecká policie)',
        additionalNotes: ['Register within 3 days of arrival', 'Register business with Commercial Register'],
      },
    },
  ],
});

/**
 * Self-Employment Visa
 */
export const selfEmployment: FlowchartDefinition = buildFlowchart({
  programId: 'cz_self_employment',
  countryCode: 'CZ',
  programName: 'Self-Employment Visa',
  complexity: 'high',
  successRate: '65%',
  totalEstimatedDuration: '3-5 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->business-plan[Create Business Plan]
  business-plan -->capital[Secure Capital EUR 10,000]
  capital -->gather-documents[Gather Required Documents]
  gather-documents -->submit[Submit Application]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Self-Employment Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Czech Republic]
  travel -->register[Register with Foreign Police]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'business-plan',
      title: 'Develop Business Plan',
      description: 'Create comprehensive business plan',
      estimatedDuration: '2-4 weeks',
      documents: ['Business plan', 'Market analysis', 'Financial projections'],
      notes: ['EUR 10,000 minimum investment', 'Prague is major tech hub', 'PR in 5 years'],
    },
    {
      id: 'capital',
      title: 'Secure Capital',
      description: 'Obtain minimum EUR 10,000 in startup capital',
      estimatedDuration: '2-4 weeks',
      documents: ['Bank statements', 'Proof of capital source'],
      notes: ['Minimum EUR 10,000 required', 'Funds must be available in Czech Republic'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        includeFinancial: true,
        additionalDocuments: ['Proof of funds', 'Criminal check', 'Health insurance'],
        additionalNotes: ['All documents must be apostilled', 'Translations to Czech required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 100 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '60-90 days' } },
    {
      id: 'visa',
      title: 'Receive Self-Employment Visa',
      description: 'Collect your self-employment visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial visa for 1 year', 'Renewable', 'Must maintain business activity'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Self-Employment Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Foreign Police (Cizinecká policie)',
        additionalNotes: ['Register within 3 days of arrival', 'Register business with Trade Licensing Office'],
      },
    },
  ],
});

/**
 * Family Reunification
 */
export const familyReunification: FlowchartDefinition = buildFlowchart({
  programId: 'cz_family_reunification',
  countryCode: 'CZ',
  programName: 'Family Reunification Visa',
  complexity: 'medium',
  successRate: '80%',
  totalEstimatedDuration: '3-5 months',
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
  visa -->travel[Travel to Czech Republic]
  travel -->register[Register with Foreign Police]
  register --> Success([Process Complete])`,
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
        additionalNotes: ['All documents must be apostilled', 'Translations to Czech required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 100 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '60-90 days' } },
    {
      id: 'visa',
      title: 'Receive Family Visa',
      description: 'Collect visa from embassy',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Visa valid for 90 days', 'Must enter Czech Republic and apply for residence permit'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'family reunification visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Foreign Police (Cizinecká policie)',
        additionalNotes: ['Register within 3 days of arrival', 'Apply for residence permit'],
      },
    },
  ],
});

/**
 * Export all Czech Republic flowcharts as a record for compatibility with existing system
 */
export const czechRepublicFlowchartsNew: Record<string, FlowchartDefinition> = {
  eu_blue_card: euBlueCard,
  employee_card: employeeCard,
  startup_visa: startupVisa,
  self_employment: selfEmployment,
  family_reunification: familyReunification,
};

