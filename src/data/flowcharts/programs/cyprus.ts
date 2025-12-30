/**
 * Cyprus Immigration Programs
 *
 * Built using the template-based composition system.
 * Cyprus has 5 main programs:
 * 1. Golden Visa (Permanent Residence by Investment)
 * 2. Work Permit
 * 3. Startup Visa
 * 4. Family Reunification
 * 5. Digital Nomad Visa
 */

import type { FlowchartDefinition } from '../../../types/flowchart';
import { buildFlowchart } from '../builders';
import { COMMON_STEP_IDS } from '../templates/types';

/**
 * Golden Visa - Permanent Residence by Investment
 */
export const goldenVisa: FlowchartDefinition = buildFlowchart({
  programId: 'cy_golden_visa',
  countryCode: 'CY',
  programName: 'Golden Visa (Permanent Residence by Investment)',
  complexity: 'medium',
  successRate: '95%',
  totalEstimatedDuration: '2-3 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->investment[Purchase Property EUR 300,000]
  investment -->gather-documents[Gather Required Documents]
  gather-documents -->submit[Submit Application]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Permanent Residence]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Cyprus]
  travel -->register[Register with Civil Registry]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'choose-investment',
      title: 'Purchase Property',
      description: 'Purchase real estate property in Cyprus worth EUR 300,000 minimum',
      estimatedDuration: '1-2 months',
      documents: ['Property deed', 'Sale agreement', 'Proof of payment (EUR 300,000)', 'Property valuation report', 'Proof of funds', 'Title deed transfer documents'],
      notes: ['Minimum EUR 300,000 investment in real estate', 'Can be residential or commercial property', 'Popular areas: Limassol, Paphos, Nicosia, Larnaca', 'Property can be rented out for income'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeFinancial: true,
        additionalDocuments: ['Property documents', 'Proof of EUR 30,000/year income from abroad', 'Criminal background check'],
        additionalNotes: ['English is official language - major advantage!', 'Documents in English or Greek'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 500 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '2 months' } },
    {
      id: 'visa',
      title: 'Receive Permanent Residence',
      description: 'Collect your permanent residence permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Lifetime permanent residence', 'Must visit Cyprus once every 2 years', 'No right to work in Cyprus', 'Can apply for citizenship after 7 years'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Permanent Residence' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Civil Registry and Migration Department',
        additionalNotes: ['Register within 7 days of arrival', 'Get ARC (Alien Registration Certificate)'],
      },
    },
  ],
});

/**
 * Work Permit - Standard work visa
 */
export const workPermit: FlowchartDefinition = buildFlowchart({
  programId: 'cy_work_permit',
  countryCode: 'CY',
  programName: 'Work Permit',
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
  decision -->|Approved| visa[Receive Work Permit]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Cyprus]
  travel -->register[Register with Civil Registry]
  register --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 18000,
        additionalNotes: ['English is official language - major advantage!', 'Growing tech and finance sectors', 'iGaming industry hub', 'No specific occupation list'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['University degree (if required)', 'Criminal background check', 'Medical certificate'],
        additionalNotes: ['Documents in English or Greek', 'All documents must be apostilled'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 100 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '4-8 weeks' } },
    {
      id: 'visa',
      title: 'Receive Work Permit',
      description: 'Collect your work permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for duration of contract (max 4 years)', 'Renewable', 'Can apply for PR after 5 years'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'work permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Civil Registry and Migration Department',
        additionalNotes: ['Register within 7 days of arrival', 'Get ARC', 'Register with Social Insurance Services'],
      },
    },
  ],
});

/**
 * Startup Visa - For innovative entrepreneurs
 */
export const startupVisa: FlowchartDefinition = buildFlowchart({
  programId: 'cy_startup_visa',
  countryCode: 'CY',
  programName: 'Startup Visa',
  complexity: 'high',
  successRate: '65%',
  totalEstimatedDuration: '3-5 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->business-idea[Develop Business Idea]
  business-idea -->business-plan[Create Business Plan]
  business-plan -->funding[Secure Funding EUR 20,000]
  funding -->gather-documents[Gather Required Documents]
  gather-documents -->submit[Submit Application]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Startup Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Cyprus]
  travel -->register[Register with Civil Registry]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'business-idea',
      title: 'Develop Innovative Business Idea',
      description: 'Create an innovative, scalable business concept suitable for Cyprus startup ecosystem',
      estimatedDuration: '1-2 months',
      documents: ['Business concept description', 'Market research', 'Competitive analysis', 'Innovation statement'],
      notes: ['Must be innovative and scalable', 'Technology, digital services preferred', 'Cyprus offers access to EU, Middle East, and African markets'],
    },
    {
      id: 'business-plan',
      title: 'Prepare Detailed Business Plan',
      description: 'Create comprehensive business plan for Ministry approval',
      estimatedDuration: '3-4 weeks',
      documents: ['Executive summary', 'Financial projections (3-5 years)', 'Marketing strategy', 'Organizational structure'],
      notes: ['Plan must be in English or Greek', 'Include realistic financial forecasts'],
    },
    {
      id: 'funding',
      title: 'Secure Funding',
      description: 'Obtain minimum EUR 20,000 in startup capital',
      estimatedDuration: '4-8 weeks',
      documents: ['Bank statements showing funds', 'Investment agreements (if applicable)', 'Proof of capital source'],
      notes: ['Minimum EUR 20,000 required', 'Funds must be available in Cyprus', 'Can be personal savings or investment'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        includeFinancial: true,
        additionalDocuments: ['Proof of funding', 'Criminal background check'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 200 } },
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
        registrationAuthority: 'Civil Registry and Migration Department',
        additionalNotes: ['Register within 7 days of arrival', 'Register business with Registrar of Companies'],
      },
    },
  ],
});

/**
 * Family Reunification
 */
export const familyReunification: FlowchartDefinition = buildFlowchart({
  programId: 'cy_family_reunification',
  countryCode: 'CY',
  programName: 'Family Reunification Visa',
  complexity: 'medium',
  successRate: '80%',
  totalEstimatedDuration: '3-5 months',
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
  visa -->travel[Travel to Cyprus]
  travel -->register[Register with Civil Registry]
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
        additionalNotes: ['All documents must be apostilled', 'Translations to Greek or English'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 100 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '60-90 days' } },
    {
      id: 'visa',
      title: 'Receive Family Visa',
      description: 'Collect visa from consulate',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Visa valid for 90 days', 'Must enter Cyprus and apply for residence permit'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'family reunification visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Civil Registry and Migration Department',
        additionalNotes: ['Register within 7 days of arrival', 'Apply for residence permit', 'Get ARC'],
      },
    },
  ],
});

/**
 * Digital Nomad Visa - For remote workers
 */
export const digitalNomadVisa: FlowchartDefinition = buildFlowchart({
  programId: 'cy_digital_nomad',
  countryCode: 'CY',
  programName: 'Digital Nomad Visa',
  complexity: 'low',
  successRate: '85%',
  totalEstimatedDuration: '1-2 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->remote{Work Remotely?}
  remote -->|Yes| income{Income >= EUR 3,500/month?}
  remote -->|No| End1([Not Eligible])
  income -->|Yes| gather-documents[Gather Required Documents]
  income -->|No| End1
  gather-documents -->submit[Submit Application]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Digital Nomad Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Cyprus]
  travel -->register[Register with Civil Registry]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'check-eligibility',
      title: 'Check Eligibility',
      description: 'Verify remote work and income',
      estimatedDuration: '1 week',
      documents: ['Employment contract', 'Proof of income'],
      notes: ['EUR 3,500/month minimum', 'Work for non-Cyprus company', 'Mediterranean lifestyle'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['Bank statements (6 months)', 'Health insurance', 'Criminal check'],
        additionalNotes: ['All documents in English or Greek'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 70 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-60 days' } },
    {
      id: 'visa',
      title: 'Receive Digital Nomad Visa',
      description: 'Collect your digital nomad visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for 1 year', 'Renewable for 2 additional years', 'No Cyprus income tax on foreign earnings'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Digital Nomad Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Civil Registry and Migration Department',
        additionalNotes: ['Register within 7 days of arrival', 'Get ARC'],
      },
    },
  ],
});

/**
 * Export all Cyprus flowcharts as a record for compatibility with existing system
 */
export const cyprusFlowchartsNew: Record<string, FlowchartDefinition> = {
  golden_visa: goldenVisa,
  work_permit: workPermit,
  startup_visa: startupVisa,
  family_reunification: familyReunification,
  digital_nomad: digitalNomadVisa,
};

