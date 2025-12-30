/**
 * Luxembourg Immigration Programs
 *
 * Built using the template-based composition system.
 * Luxembourg has 5 main programs:
 * 1. EU Blue Card
 * 2. Highly Qualified Worker
 * 3. Investor Visa
 * 4. Self-Employed
 * 5. Family Reunification
 */

import type { FlowchartDefinition } from '../../../types/flowchart';
import { buildFlowchart } from '../builders';
import { COMMON_STEP_IDS } from '../templates/types';

/**
 * EU Blue Card - For highly skilled workers
 */
export const euBlueCard: FlowchartDefinition = buildFlowchart({
  programId: 'lu_eu_blue_card',
  countryCode: 'LU',
  programName: 'EU Blue Card',
  complexity: 'medium',
  successRate: '85%',
  totalEstimatedDuration: '2-3 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer --> Salary{"Salary >= EUR 4,500/month?"}
  Salary -->|Yes| gather-documents[Gather Required Documents]
  Salary -->|No| End1([Not Eligible])
  gather-documents --> submit-application[Submit Application]
  submit-application --> processing[Wait for Processing]
  processing --> Decision{Decision}
  Decision -->|Approved| Visa[Receive Blue Card]
  Decision -->|Rejected| End2([Process Ended])
  Visa --> arrival[Travel to Luxembourg]
  arrival --> Register[Register with Commune]
  Register --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 54000,
        additionalNotes: ['High salary threshold', 'Financial hub of Europe', 'Multilingual environment (French, German, Luxembourgish)'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['University degree (apostilled)', 'Criminal background check', 'Accommodation proof'],
        additionalNotes: ['All documents must be apostilled', 'Translations to French or German required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 80 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-90 days' } },
    {
      id: 'visa',
      title: 'Receive Blue Card',
      description: 'Collect your EU Blue Card',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial Blue Card valid for 4 years', 'Renewable', 'Can apply for permanent residence after 5 years'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'EU Blue Card' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Commune (Municipality)',
        additionalNotes: ['Register within 3 days of arrival', 'Get residence permit card'],
      },
    },
  ],
});

/**
 * Highly Qualified Worker
 */
export const highlyQualified: FlowchartDefinition = buildFlowchart({
  programId: 'lu_highly_qualified',
  countryCode: 'LU',
  programName: 'Highly Qualified Worker',
  complexity: 'medium',
  successRate: '85%',
  totalEstimatedDuration: '2-3 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer -->gather-documents[Gather Required Documents]
  gather-documents -->submit[Submit Application]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Work Permit]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Luxembourg]
  travel -->register[Register with Commune]
  register --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 45000,
        additionalNotes: ['Financial hub of Europe', 'Multilingual environment', 'High quality of life'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['University degree (apostilled)', 'Criminal background check', 'Accommodation proof'],
        additionalNotes: ['All documents must be apostilled', 'Translations to French or German required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 80 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-90 days' } },
    {
      id: 'visa',
      title: 'Receive Work Permit',
      description: 'Collect your work permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for 3 years', 'Renewable', 'Tied to employer initially'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'work permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Commune (Municipality)',
        additionalNotes: ['Register within 3 days of arrival', 'Get residence permit card'],
      },
    },
  ],
});

/**
 * Investor Visa
 */
export const investorVisa: FlowchartDefinition = buildFlowchart({
  programId: 'lu_investor',
  countryCode: 'LU',
  programName: 'Investor Visa',
  complexity: 'high',
  successRate: '75%',
  totalEstimatedDuration: '3-6 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->investment[Make Investment EUR 500,000]
  investment -->gather-documents[Gather Required Documents]
  gather-documents -->submit[Submit Application]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Investor Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Luxembourg]
  travel -->register[Register with Commune]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'investment',
      title: 'Make Investment',
      description: 'Invest EUR 500,000 in Luxembourg economy',
      estimatedDuration: '1-3 months',
      documents: ['Investment proof', 'Business plan', 'Source of funds'],
      notes: ['Minimum EUR 500,000 investment', 'Financial hub of Europe', 'Must create jobs or invest in existing business'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeFinancial: true,
        includeBusinessPlan: true,
        additionalDocuments: ['Investment proof', 'Criminal background check', 'Health insurance'],
        additionalNotes: ['All documents must be apostilled', 'Translations to French or German required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 80 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '60-120 days' } },
    {
      id: 'visa',
      title: 'Receive Investor Visa',
      description: 'Collect your investor visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for 3 years', 'Renewable', 'Path to permanent residence'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Investor Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Commune (Municipality)',
        additionalNotes: ['Register within 3 days of arrival', 'Register business with Trade Register'],
      },
    },
  ],
});

/**
 * Self-Employed Visa
 */
export const selfEmployed: FlowchartDefinition = buildFlowchart({
  programId: 'lu_self_employed',
  countryCode: 'LU',
  programName: 'Self-Employed Visa',
  complexity: 'high',
  successRate: '70%',
  totalEstimatedDuration: '3-5 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->business-plan[Create Business Plan]
  business-plan -->gather-documents[Gather Required Documents]
  gather-documents -->submit[Submit Application]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Self-Employed Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Luxembourg]
  travel -->register[Register with Commune]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'business-plan',
      title: 'Develop Business Plan',
      description: 'Create comprehensive business plan',
      estimatedDuration: '2-4 weeks',
      documents: ['Business plan', 'Market analysis', 'Financial projections'],
      notes: ['Must demonstrate viability', 'Financial hub of Europe', 'Multilingual environment'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        includeFinancial: true,
        additionalDocuments: ['Proof of funds', 'Qualifications', 'Criminal background check'],
        additionalNotes: ['All documents must be apostilled', 'Translations to French or German required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 80 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '60-90 days' } },
    {
      id: 'visa',
      title: 'Receive Self-Employed Visa',
      description: 'Collect your self-employed visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial permit for 1 year', 'Renewable', 'Must maintain business activity'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Self-Employed Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Commune (Municipality)',
        additionalNotes: ['Register within 3 days of arrival', 'Register business with Trade Register'],
      },
    },
  ],
});

/**
 * Family Reunification
 */
export const familyReunification: FlowchartDefinition = buildFlowchart({
  programId: 'lu_family_reunification',
  countryCode: 'LU',
  programName: 'Family Reunification',
  complexity: 'medium',
  successRate: '80%',
  totalEstimatedDuration: '2-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->sponsor{Sponsor Eligible?}
  sponsor -->|Yes| gather-documents[Gather Required Documents]
  sponsor -->|No| End1([Not Eligible])
  gather-documents -->submit[Submit at Consulate]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Luxembourg]
  travel -->register[Register with Commune]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'sponsor-check',
      title: 'Check Eligibility',
      description: 'Verify sponsor has valid residence permit',
      estimatedDuration: '1 week',
      documents: ['Sponsor residence permit', 'Proof of relationship'],
      notes: ['Sponsor must have valid permit for at least 1 year', 'Spouse, children, parents eligible'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        additionalDocuments: ['Marriage/birth certificate', 'Proof of accommodation', 'Proof of income', 'Health insurance'],
        additionalNotes: ['All documents must be apostilled', 'Translations to French or German required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 80 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-90 days' } },
    {
      id: 'visa',
      title: 'Receive Family Visa',
      description: 'Collect visa from consulate',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Visa valid for 90 days', 'Must enter Luxembourg and apply for residence permit'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'family reunification visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Commune (Municipality)',
        additionalNotes: ['Register within 3 days of arrival', 'Apply for residence permit'],
      },
    },
  ],
});

/**
 * Export all Luxembourg flowcharts as a record for compatibility with existing system
 */
export const luxembourgFlowchartsNew: Record<string, FlowchartDefinition> = {
  eu_blue_card: euBlueCard,
  highly_qualified: highlyQualified,
  investor: investorVisa,
  self_employed: selfEmployed,
  family_reunification: familyReunification,
};

