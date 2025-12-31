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
 * Updated with tiered investment thresholds effective 2024
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
  Start([Start Process]) -->region{Choose Region}
  region -->|Athens/Thessaloniki/Islands| tier1[EUR 800,000 Investment]
  region -->|Other Areas| tier2[EUR 400,000 Investment]
  tier1 -->investment[Complete Property Purchase]
  tier2 -->investment
  investment -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Golden Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Greece]
  travel -->registration[Register with Authorities]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'region',
      title: 'Choose Investment Region',
      description: 'Select the region where you want to purchase property - thresholds vary by location',
      estimatedDuration: '1-2 weeks',
      documents: ['Property search documentation'],
      isConditional: true,
      condition: 'Investment threshold depends on region',
      notes: [
        'Tier 1 (EUR 800,000): Athens, Thessaloniki, Mykonos, Santorini, and other popular islands',
        'Tier 2 (EUR 400,000): Other mainland areas and less popular islands',
        'Thresholds increased significantly in 2024',
        'Consider location carefully - affects both investment and lifestyle',
      ],
    },
    {
      id: 'tier1',
      title: 'Tier 1 Investment (EUR 800,000)',
      description: 'High-demand areas: Athens, Thessaloniki, Mykonos, Santorini, and popular islands',
      estimatedDuration: 'N/A',
      documents: [],
      notes: ['Premium locations', 'Higher investment threshold'],
    },
    {
      id: 'tier2',
      title: 'Tier 2 Investment (EUR 400,000)',
      description: 'Other mainland areas and less popular islands',
      estimatedDuration: 'N/A',
      documents: [],
      notes: ['Lower investment threshold', 'More affordable options'],
    },
    {
      id: 'investment',
      title: 'Complete Property Purchase',
      description: 'Purchase real estate property meeting the threshold for your chosen region',
      estimatedDuration: '1-2 months',
      documents: ['Property deed', 'Sale agreement', 'Proof of payment', 'Property valuation report'],
      notes: [
        'Athens/Thessaloniki/Popular Islands: EUR 800,000 minimum',
        'Other areas: EUR 400,000 minimum',
        'Mediterranean lifestyle',
        'Property can be rented out for income',
      ],
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
  Start([Start Process]) -->remote-work-verification{Work Remotely?}
  remote-work-verification -->|Yes| income{Income >= EUR 3,500/month?}
  remote-work-verification -->|No| End1([Not Eligible])
  income -->|Yes| gather-documents[Gather Required Documents]
  income -->|No| End1
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Digital Nomad Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Greece]
  travel -->registration[Register with Authorities]
  registration --> Success([Process Complete])`,
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
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Work Permit]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Greece]
  travel -->registration[Register with Authorities]
  registration --> Success([Process Complete])`,
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
  Start([Start Process]) -->sponsor-check{Sponsor Eligible?}
  sponsor-check -->|Yes| gather-documents[Gather Required Documents]
  sponsor-check -->|No| End1([Not Eligible])
  gather-documents -->submit-application[Submit at Consulate]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Greece]
  travel -->registration[Register with Authorities]
  registration --> Success([Process Complete])`,
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
  Start([Start Process]) -->income-verification{Passive Income >= EUR 2,000/month?}
  income-verification -->|Yes| gather-documents[Gather Required Documents]
  income-verification -->|No| End1([Not Eligible])
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Greece]
  travel -->registration[Register with Authorities]
  registration --> Success([Process Complete])`,
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
 * EU Blue Card - For highly skilled workers
 * Added in Phase 3 data quality improvements
 */
export const euBlueCard: FlowchartDefinition = buildFlowchart({
  programId: 'gr_eu_blue_card',
  countryCode: 'GR',
  programName: 'EU Blue Card',
  complexity: 'medium',
  successRate: '80%',
  totalEstimatedDuration: '2-3 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer -->salary{Salary >= EUR 31,919/year?}
  salary -->|Yes| gather-documents[Gather Required Documents]
  salary -->|No| End1([Not Eligible])
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive EU Blue Card]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Greece]
  travel -->registration[Register with Authorities]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 31919,
        additionalNotes: [
          'Must have university degree or 5+ years professional experience',
          'Contract for minimum 1 year',
          'Mediterranean lifestyle',
        ],
      },
    },
    {
      id: 'salary',
      title: 'Salary Verification',
      description: 'Verify salary meets EU Blue Card threshold',
      estimatedDuration: 'N/A',
      documents: ['Employment contract showing salary'],
      isConditional: true,
      condition: 'Salary must be at least EUR 31,919/year (2025 threshold)',
      notes: ['1.5x average gross annual salary in Greece'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        includeEducation: true,
        additionalDocuments: ['University degree or proof of 5+ years experience', 'Employment contract'],
        additionalNotes: ['Documents must be apostilled', 'Greek translations required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 150 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '60-90 days' } },
    {
      id: 'visa',
      title: 'Receive EU Blue Card',
      description: 'Collect your EU Blue Card residence permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: [
        'Valid for up to 4 years',
        'Can work throughout EU after 18 months',
        'Path to permanent residency after 5 years',
      ],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'EU Blue Card' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Decentralized Administration',
        additionalNotes: ['Register within 7 days of arrival', 'Get AFM (tax number)', 'Register with EFKA (social security)'],
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
  eu_blue_card: euBlueCard,
};

