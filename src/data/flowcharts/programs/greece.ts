/**
 * Greece Immigration Programs
 *
 * Built using the template-based composition system.
 * Greece has 5 main programs:
 * 1. Golden Visa
 * 2. Digital Nomad Visa
 * 3. Work Permit
 * 4. Family Reunification
 * 5. Independent Means Visa
 */

import type { FlowchartDefinition } from '../../../types/flowchart';
import { buildFlowchart } from '../builders';
import { COMMON_STEP_IDS } from '../templates/types';

/**
 * Golden Visa - Residence by Investment
 */
export const goldenVisa: FlowchartDefinition = buildFlowchart({
  programId: 'gr_golden_visa',
  countryCode: 'GR',
  programName: 'Golden Visa',
  complexity: 'medium',
  successRate: '95%',
  totalEstimatedDuration: '2-3 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->investment[Purchase Property EUR 250,000]
  investment -->gather-documents[Gather Required Documents]
  gather-documents -->submit[Submit Application]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Golden Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Greece]
  travel -->register[Register with Authorities]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'investment',
      title: 'Purchase Property',
      description: 'Purchase real estate property in Greece worth EUR 250,000 minimum',
      estimatedDuration: '1-2 months',
      documents: ['Property deed', 'Sale agreement', 'Proof of payment (EUR 250,000)', 'Property valuation report'],
      notes: ['Minimum EUR 250,000 investment in real estate', 'Mediterranean lifestyle', 'Popular areas: Athens, Thessaloniki, islands'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeFinancial: true,
        additionalDocuments: ['Property documents', 'Criminal background check', 'Health insurance'],
        additionalNotes: ['Documents in Greek or English'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 2000 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '2-3 months' } },
    {
      id: 'visa',
      title: 'Receive Golden Visa',
      description: 'Collect your Golden Visa residence permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for 5 years', 'Renewable', 'No minimum stay requirement', 'Path to citizenship after 7 years'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Golden Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Decentralized Administration',
        additionalNotes: ['Register within 7 days of arrival', 'Get AFM (tax number)'],
      },
    },
  ],
});

/**
 * Digital Nomad Visa - For remote workers
 */
export const digitalNomadVisa: FlowchartDefinition = buildFlowchart({
  programId: 'gr_digital_nomad',
  countryCode: 'GR',
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
  visa -->travel[Travel to Greece]
  travel -->register[Register with Authorities]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'remote-work-verification',
      title: 'Verify Remote Work Status',
      description: 'Confirm remote employment or freelance contracts',
      estimatedDuration: '1 week',
      documents: ['Employment contract or freelance contracts', 'Proof of income (EUR 3,500/month)'],
      notes: ['Mediterranean lifestyle', 'Work from Greek islands', 'Must work for non-Greek company'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['Proof of remote work', 'Proof of income', 'Health insurance', 'Accommodation proof'],
        additionalNotes: ['Documents in Greek or English'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 75 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-60 days' } },
    {
      id: 'visa',
      title: 'Receive Digital Nomad Visa',
      description: 'Collect your digital nomad visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for 1 year', 'Renewable for 1 additional year', 'No Greek income tax on foreign earnings'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Digital Nomad Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Decentralized Administration',
        additionalNotes: ['Register within 7 days of arrival', 'Get AFM (tax number)'],
      },
    },
  ],
});

/**
 * Work Permit - Standard work visa
 */
export const workPermit: FlowchartDefinition = buildFlowchart({
  programId: 'gr_work_permit',
  countryCode: 'GR',
  programName: 'Work Permit',
  complexity: 'medium',
  successRate: '75%',
  totalEstimatedDuration: '3-5 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer -->gather-documents[Gather Required Documents]
  gather-documents -->submit[Submit Application]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Work Permit]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Greece]
  travel -->register[Register with Authorities]
  register --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 12000,
        additionalNotes: ['Mediterranean lifestyle', 'Growing tech scene in Athens', 'Employer must prove no suitable Greek/EU candidate'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['Educational qualifications', 'Criminal background check', 'Medical certificate'],
        additionalNotes: ['Documents in Greek or English', 'All documents must be apostilled'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 150 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '60-90 days' } },
    {
      id: 'visa',
      title: 'Receive Work Permit',
      description: 'Collect your work permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for duration of contract (max 2 years)', 'Renewable', 'Tied to employer initially'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'work permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Decentralized Administration',
        additionalNotes: ['Register within 7 days of arrival', 'Get AFM', 'Register with EFKA (social security)'],
      },
    },
  ],
});

/**
 * Family Reunification
 */
export const familyReunification: FlowchartDefinition = buildFlowchart({
  programId: 'gr_family_reunification',
  countryCode: 'GR',
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
  visa -->travel[Travel to Greece]
  travel -->register[Register with Authorities]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'sponsor-check',
      title: 'Check Eligibility',
      description: 'Verify sponsor has valid residence permit',
      estimatedDuration: '1 week',
      documents: ['Sponsor residence permit', 'Proof of relationship'],
      notes: ['Sponsor must have valid permit for at least 2 years', 'Spouse, children, parents eligible'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        additionalDocuments: ['Marriage/birth certificate', 'Proof of accommodation', 'Proof of income', 'Health insurance'],
        additionalNotes: ['All documents must be apostilled', 'Translations to Greek required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 150 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '60-90 days' } },
    {
      id: 'visa',
      title: 'Receive Family Visa',
      description: 'Collect visa from consulate',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Visa valid for 90 days', 'Must enter Greece and apply for residence permit'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'family reunification visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Decentralized Administration',
        additionalNotes: ['Register within 7 days of arrival', 'Apply for residence permit', 'Get AFM'],
      },
    },
  ],
});

/**
 * Independent Means Visa - For financially independent individuals
 */
export const independentMeansVisa: FlowchartDefinition = buildFlowchart({
  programId: 'gr_independent_means',
  countryCode: 'GR',
  programName: 'Independent Means Visa',
  complexity: 'low',
  successRate: '85%',
  totalEstimatedDuration: '2-3 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->income{Passive Income >= EUR 2,000/month?}
  income -->|Yes| gather-documents[Gather Required Documents]
  income -->|No| End1([Not Eligible])
  gather-documents -->submit[Submit Application]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Greece]
  travel -->register[Register with Authorities]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'income-verification',
      title: 'Verify Passive Income',
      description: 'Confirm you have sufficient passive income',
      estimatedDuration: '1 week',
      documents: ['Proof of passive income (EUR 2,000/month)', 'Bank statements (6 months)'],
      notes: ['Mediterranean lifestyle', 'No work permitted', 'Pension, investments, rental income qualify'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeFinancial: true,
        additionalDocuments: ['Proof of income source', 'Health insurance', 'Accommodation proof'],
        additionalNotes: ['Documents in Greek or English'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 150 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-60 days' } },
    {
      id: 'visa',
      title: 'Receive Independent Means Visa',
      description: 'Collect your visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for 1 year', 'Renewable', 'No work permitted'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Independent Means Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Decentralized Administration',
        additionalNotes: ['Register within 7 days of arrival', 'Get AFM'],
      },
    },
  ],
});

/**
 * Export all Greece flowcharts as a record for compatibility with existing system
 */
export const greeceFlowchartsNew: Record<string, FlowchartDefinition> = {
  golden_visa: goldenVisa,
  digital_nomad: digitalNomadVisa,
  work_permit: workPermit,
  family_reunification: familyReunification,
  independent_means: independentMeansVisa,
};

