/**
 * Croatia Immigration Programs
 *
 * Built using the template-based composition system.
 * Croatia has 5 main programs:
 * 1. EU Blue Card
 * 2. Digital Nomad Visa
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
  programId: 'hr_eu_blue_card',
  countryCode: 'HR',
  programName: 'EU Blue Card',
  complexity: 'medium',
  successRate: '85%',
  totalEstimatedDuration: '2-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer --> salary{"Salary >= EUR 1,800/month?"}
  salary -->|Yes| gather-documents[Gather Required Documents]
  salary -->|No| End1([Not Eligible])
  gather-documents --> submit-application[Submit Application]
  submit-application --> processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Blue Card]
  decision -->|Rejected| End2([Process Ended])
  visa --> travel[Travel to Croatia]
  travel --> registration[Register with MUP]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 21600,
        additionalNotes: ['Adriatic Sea coastline!', 'Mediterranean lifestyle', 'Growing tech scene (Zagreb, Split)', 'EU newest member (2013)'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['University degree (apostilled)', 'Criminal background check', 'Accommodation proof'],
        additionalNotes: ['All documents must be apostilled', 'Translations to Croatian required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 80 } },
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
        registrationAuthority: 'MUP (Ministry of Interior)',
        additionalNotes: ['Register within 3 days of arrival', 'Get OIB (personal identification number)', 'Register with HZZO (health insurance)'],
      },
    },
  ],
});

/**
 * Digital Nomad Visa - For remote workers
 */
export const digitalNomadVisa: FlowchartDefinition = buildFlowchart({
  programId: 'hr_digital_nomad',
  countryCode: 'HR',
  programName: 'Digital Nomad Visa',
  complexity: 'low',
  successRate: '90%',
  totalEstimatedDuration: '1-2 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->remote-work-verification{Work Remotely?}
  remote-work-verification -->|Yes| income-verification{Income >= EUR 2,300/month?}
  remote-work-verification -->|No| End1([Not Eligible])
  income-verification -->|Yes| gather-documents[Gather Required Documents]
  income-verification -->|No| End1
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Digital Nomad Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Croatia]
  travel -->registration[Register with MUP]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'remote-work-verification',
      title: 'Verify Remote Work Status',
      description: 'Confirm you work remotely for non-Croatian company',
      estimatedDuration: '1 week',
      documents: ['Employment contract or freelance contracts', 'Proof of income (EUR 2,300/month)'],
      notes: ['Work from Adriatic Sea coastline!', 'Mediterranean lifestyle', 'Must work for company outside Croatia'],
    },
    {
      id: 'income-verification',
      title: 'Verify Income Requirement',
      description: 'Confirm monthly income of at least EUR 2,300',
      estimatedDuration: '1 week',
      documents: ['Bank statements', 'Pay stubs', 'Tax returns'],
      notes: ['Minimum EUR 2,300/month required', 'Must be from non-Croatian sources'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['Proof of remote work', 'Proof of income', 'Health insurance', 'Accommodation proof'],
        additionalNotes: ['Fast processing (30 days)', 'All documents must be apostilled'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 70 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30 days' } },
    {
      id: 'visa',
      title: 'Receive Digital Nomad Visa',
      description: 'Collect your digital nomad visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for 1 year', 'Non-renewable (must leave for 6 months)', 'No Croatian income tax on foreign earnings'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Digital Nomad Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'MUP (Ministry of Interior)',
        additionalNotes: ['Register within 3 days of arrival', 'Get OIB (personal identification number)'],
      },
    },
  ],
});

/**
 * Work Permit - Standard work visa
 */
export const workPermit: FlowchartDefinition = buildFlowchart({
  programId: 'hr_work_permit',
  countryCode: 'HR',
  programName: 'Work Permit',
  complexity: 'medium',
  successRate: '80%',
  totalEstimatedDuration: '2-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Work Permit]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Croatia]
  travel -->registration[Register with MUP]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 10800,
        additionalNotes: ['Adriatic Sea coastline!', 'Mediterranean lifestyle', 'Growing tech scene (Zagreb, Split)', 'PR after 5 years, citizenship after 8 years'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['Educational qualifications', 'Criminal record certificate', 'Accommodation proof'],
        additionalNotes: ['Documents must be apostilled', 'Translations to Croatian required'],
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
      notes: ['Valid for duration of contract (max 1 year)', 'Renewable', 'Tied to employer initially'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'work permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'MUP (Ministry of Interior)',
        additionalNotes: ['Register within 3 days of arrival', 'Get OIB', 'Register with HZZO'],
      },
    },
  ],
});

/**
 * Self-Employment Visa
 */
export const selfEmployment: FlowchartDefinition = buildFlowchart({
  programId: 'hr_self_employment',
  countryCode: 'HR',
  programName: 'Self-Employment Visa',
  complexity: 'high',
  successRate: '70%',
  totalEstimatedDuration: '3-5 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->business-plan[Create Business Plan]
  business-plan -->capital[Secure Capital EUR 8,000]
  capital -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Self-Employment Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Croatia]
  travel -->registration[Register with MUP]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'business-plan',
      title: 'Develop Business Plan',
      description: 'Create comprehensive business plan',
      estimatedDuration: '2-4 weeks',
      documents: ['Business plan', 'Market analysis', 'Financial projections'],
      notes: ['EUR 8,000 minimum investment', 'Adriatic coastline', 'Mediterranean lifestyle', 'PR in 5 years'],
    },
    {
      id: 'capital',
      title: 'Secure Capital',
      description: 'Obtain minimum EUR 8,000 in startup capital',
      estimatedDuration: '2-4 weeks',
      documents: ['Bank statements', 'Proof of capital source'],
      notes: ['Minimum EUR 8,000 required', 'Funds must be available in Croatia'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        includeFinancial: true,
        additionalDocuments: ['Proof of funds', 'Criminal check', 'Health insurance'],
        additionalNotes: ['Documents must be apostilled', 'Translations to Croatian required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 80 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-90 days' } },
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
        registrationAuthority: 'MUP (Ministry of Interior)',
        additionalNotes: ['Register within 3 days of arrival', 'Register business with Commercial Court', 'Get OIB'],
      },
    },
  ],
});

/**
 * Family Reunification
 */
export const familyReunification: FlowchartDefinition = buildFlowchart({
  programId: 'hr_family_reunification',
  countryCode: 'HR',
  programName: 'Family Reunification Visa',
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
  visa -->travel[Travel to Croatia]
  travel -->registration[Register with MUP]
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
        additionalNotes: ['All documents must be apostilled', 'Translations to Croatian required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 80 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-60 days' } },
    {
      id: 'visa',
      title: 'Receive Family Visa',
      description: 'Collect visa from consulate',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Visa valid for 90 days', 'Must enter Croatia and apply for residence permit'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'family reunification visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'MUP (Ministry of Interior)',
        additionalNotes: ['Register within 3 days of arrival', 'Apply for residence permit', 'Get OIB'],
      },
    },
  ],
});

/**
 * Export all Croatia flowcharts as a record for compatibility with existing system
 */
export const croatiaFlowchartsNew: Record<string, FlowchartDefinition> = {
  hr_eu_blue_card: euBlueCard,
  hr_digital_nomad: digitalNomadVisa,
  hr_work_permit: workPermit,
  hr_self_employment: selfEmployment,
  hr_family_reunification: familyReunification,
};

