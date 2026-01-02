/**
 * Malta Immigration Programs
 *
 * Built using the template-based composition system.
 * Malta has 7 main programs:
 * 1. Nomad Residence Permit
 * 2. MPRP (Malta Permanent Residence Programme)
 * 3. Startup Visa
 * 4. Family Reunification
 * 5. EU Blue Card
 * 6. Key Employee Initiative (KEI) - Fast-track for managerial/technical roles
 * 7. Specialist Employee Initiative (SEI) - Fast-track for skilled professionals
 *
 * Note: Malta uses KEI and SEI as national fast-track schemes alongside the EU Blue Card.
 * KEI requires €45,000/year salary for managerial/technical roles.
 * SEI requires €25,000/year salary for other skilled professionals.
 */

import type { FlowchartDefinition } from '../../../types/flowchart';
import { buildFlowchart } from '../builders';
import { COMMON_STEP_IDS } from '../templates/types';

/**
 * Nomad Residence Permit - For remote workers
 */
export const nomadResidence: FlowchartDefinition = buildFlowchart({
  programId: 'mt_nomad_residence',
  countryCode: 'MT',
  programName: 'Nomad Residence Permit',
  complexity: 'low',
  successRate: '90%',
  totalEstimatedDuration: '1-2 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->remote-work-verification{Work Remotely?}
  remote-work-verification -->|Yes| income{Income >= EUR 2,700/month?}
  remote-work-verification -->|No| End1([Not Eligible])
  income -->|Yes| gather-documents[Gather Required Documents]
  income -->|No| End1
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Nomad Permit]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Malta]
  travel -->registration[Register with Identity Malta]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'remote-work-verification',
      title: 'Verify Remote Work Status',
      description: 'Confirm remote employment or freelance contracts',
      estimatedDuration: '1 week',
      documents: ['Employment contract or freelance contracts', 'Proof of income (EUR 2,700/month)'],
      notes: ['Mediterranean lifestyle', 'English-speaking', 'Must work for non-Maltese company'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['Proof of remote work', 'Proof of income', 'Health insurance', 'Accommodation proof'],
        additionalNotes: ['Documents in English accepted'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 300 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-45 days' } },
    {
      id: 'visa',
      title: 'Receive Nomad Permit',
      description: 'Collect your nomad residence permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for 1 year', 'Renewable for 2 additional years', 'No Maltese income tax on foreign earnings'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Nomad Residence Permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Identity Malta',
        additionalNotes: ['Register within 7 days of arrival', 'Get e-Residence card'],
      },
    },
  ],
});

/**
 * MPRP - Malta Permanent Residence Programme
 */
export const mprp: FlowchartDefinition = buildFlowchart({
  programId: 'mt_mprp',
  countryCode: 'MT',
  programName: 'Malta Permanent Residence Programme',
  complexity: 'high',
  successRate: '95%',
  totalEstimatedDuration: '4-6 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->investment[Make Investment]
  investment -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive MPRP Certificate]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Malta]
  travel -->registration[Register with Identity Malta]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'investment',
      title: 'Make Investment',
      description: 'Purchase or rent property and make government contribution',
      estimatedDuration: '1-3 months',
      documents: ['Property deed or rental agreement', 'Government contribution (EUR 68,000-98,000)', 'Donation (EUR 2,000)'],
      notes: ['Property purchase: EUR 300,000+ or Rent: EUR 10,000+/year', 'Mediterranean lifestyle', 'English-speaking'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeFinancial: true,
        additionalDocuments: ['Property documents', 'Criminal background check', 'Health insurance', 'Proof of funds (EUR 500,000 assets)'],
        additionalNotes: ['Documents in English accepted'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 5500 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '4-6 months' } },
    {
      id: 'visa',
      title: 'Receive MPRP Certificate',
      description: 'Collect your permanent residence certificate',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Permanent residence', 'No minimum stay requirement', 'Includes family members'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'MPRP Certificate' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Identity Malta',
        additionalNotes: ['Register within 7 days of arrival', 'Get e-Residence card'],
      },
    },
  ],
});

/**
 * Startup Visa
 */
export const startupVisa: FlowchartDefinition = buildFlowchart({
  programId: 'mt_startup_visa',
  countryCode: 'MT',
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
  visa -->travel[Travel to Malta]
  travel -->registration[Register with Identity Malta]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'business-idea',
      title: 'Develop Innovative Startup Idea',
      description: 'Create an innovative, scalable business concept',
      estimatedDuration: '1-2 months',
      documents: ['Business concept description', 'Market research', 'Innovation potential'],
      notes: ['Focus on tech, fintech, gaming, or blockchain', 'Malta is blockchain-friendly'],
    },
    {
      id: 'business-plan',
      title: 'Prepare Business Plan',
      description: 'Create comprehensive business plan',
      estimatedDuration: '2-4 weeks',
      documents: ['Executive summary', 'Financial projections', 'Marketing strategy'],
      notes: ['Plan must be in English', 'Include realistic financial forecasts'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        includeFinancial: true,
        additionalDocuments: ['Proof of funds', 'Criminal background check'],
        additionalNotes: ['Documents in English accepted'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 300 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-60 days' } },
    {
      id: 'visa',
      title: 'Receive Startup Visa',
      description: 'Collect your startup visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial permit for 1 year', 'Renewable for 3 years', 'Must maintain business activity'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Startup Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Identity Malta',
        additionalNotes: ['Register within 7 days of arrival', 'Register business with Malta Business Registry'],
      },
    },
  ],
});

/**
 * Family Reunification
 */
export const familyReunification: FlowchartDefinition = buildFlowchart({
  programId: 'mt_family_reunification',
  countryCode: 'MT',
  programName: 'Family Reunification',
  complexity: 'medium',
  successRate: '80%',
  totalEstimatedDuration: '2-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->sponsor-check{Sponsor Eligible?}
  sponsor-check -->|Yes| gather-documents[Gather Required Documents]
  sponsor-check -->|No| End1([Not Eligible])
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Malta]
  travel -->registration[Register with Identity Malta]
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
        additionalNotes: ['Documents in English accepted'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 280 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-60 days' } },
    {
      id: 'visa',
      title: 'Receive Family Visa',
      description: 'Collect visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Visa valid for 90 days', 'Must enter Malta and apply for residence permit'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'family reunification visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Identity Malta',
        additionalNotes: ['Register within 7 days of arrival', 'Apply for residence permit'],
      },
    },
  ],
});

/**
 * Key Employee Initiative (KEI) - Fast-track for managerial/technical roles
 */
export const keyEmployeeInitiative: FlowchartDefinition = buildFlowchart({
  programId: 'mt_kei',
  countryCode: 'MT',
  programName: 'Key Employee Initiative (KEI)',
  complexity: 'low',
  successRate: '90%',
  totalEstimatedDuration: '2-3 weeks',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer -->salary{"Salary >= EUR 45,000/year?"}
  salary -->|Yes| role{"Managerial/Technical Role?"}
  salary -->|No| consider-sei[Consider SEI instead]
  role -->|Yes| gather-documents[Gather Required Documents]
  role -->|No| consider-sei
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Fast-Track Processing: 5-10 days]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Single Permit]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Malta]
  travel -->registration[Register with Identity Malta]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 45000,
        additionalNotes: [
          'Managerial or highly technical role required',
          'Degree OR 5+ years experience OR professional warrant accepted',
          'English-speaking country',
          'iGaming, fintech, and tech hub of Mediterranean',
        ],
      },
    },
    {
      id: 'salary',
      title: 'Salary Verification',
      description: 'Verify salary meets KEI threshold',
      estimatedDuration: 'N/A',
      documents: ['Employment contract showing salary'],
      isConditional: true,
      condition: 'Salary must be at least EUR 45,000/year',
      notes: ['If salary is lower, consider SEI (EUR 25,000 threshold)'],
    },
    {
      id: 'role',
      title: 'Role Verification',
      description: 'Verify role is managerial or highly technical',
      estimatedDuration: 'N/A',
      documents: ['Job description', 'Employment contract'],
      isConditional: true,
      condition: 'Role must be managerial or highly technical',
      notes: ['If not managerial/technical, consider SEI instead'],
    },
    {
      id: 'consider-sei',
      title: 'Consider SEI Instead',
      description: 'If salary or role does not meet KEI requirements, consider SEI',
      estimatedDuration: 'N/A',
      documents: [],
      notes: ['SEI has lower salary threshold (EUR 25,000)', 'SEI accepts broader range of professional roles'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: [
          'University degree OR proof of 5+ years experience OR professional warrant',
          'Employment contract',
          'Criminal background check',
        ],
        additionalNotes: ['Documents in English accepted - no translation needed'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 280 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '5-10 business days' } },
    {
      id: 'visa',
      title: 'Receive Single Permit',
      description: 'Collect your KEI Single Permit',
      estimatedDuration: '1-2 days',
      documents: ['Passport'],
      notes: ['Valid for 1-3 years', 'Renewable', 'Family can join', 'Path to PR after 5 years'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'KEI Single Permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Identity Malta',
        additionalNotes: ['Register within 7 days of arrival', 'Get e-Residence card'],
      },
    },
  ],
});

/**
 * Specialist Employee Initiative (SEI) - Fast-track for skilled professionals
 */
export const specialistEmployeeInitiative: FlowchartDefinition = buildFlowchart({
  programId: 'mt_sei',
  countryCode: 'MT',
  programName: 'Specialist Employee Initiative (SEI)',
  complexity: 'low',
  successRate: '90%',
  totalEstimatedDuration: '2-3 weeks',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer -->salary{"Salary >= EUR 25,000/year?"}
  salary -->|Yes| qualifications{"Professional Qualification or 3+ Years Experience?"}
  salary -->|No| End1([Not Eligible])
  qualifications -->|Yes| gather-documents[Gather Required Documents]
  qualifications -->|No| End1
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Fast-Track Processing: 5-10 days]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Single Permit]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Malta]
  travel -->registration[Register with Identity Malta]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 25000,
        additionalNotes: [
          'Lower salary threshold than KEI',
          'Professional qualification OR 3+ years experience required',
          'English-speaking country',
          'Growing sectors: iGaming, finance, tech',
        ],
      },
    },
    {
      id: 'qualifications',
      title: 'Qualifications Verification',
      description: 'Verify professional qualification or work experience',
      estimatedDuration: 'N/A',
      documents: ['Professional qualification OR proof of 3+ years relevant experience'],
      isConditional: true,
      condition: 'Must have professional qualification or at least 3 years of relevant experience',
      notes: ['More flexible than EU Blue Card requirements'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: [
          'Professional qualification OR proof of 3+ years experience',
          'Employment contract',
          'Criminal background check',
        ],
        additionalNotes: ['Documents in English accepted - no translation needed'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 280 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '5-10 business days' } },
    {
      id: 'visa',
      title: 'Receive Single Permit',
      description: 'Collect your SEI Single Permit',
      estimatedDuration: '1-2 days',
      documents: ['Passport'],
      notes: ['Valid for 1-3 years', 'Renewable', 'Family can join', 'Path to PR after 5 years'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'SEI Single Permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Identity Malta',
        additionalNotes: ['Register within 7 days of arrival', 'Get e-Residence card'],
      },
    },
  ],
});

/**
 * Export all Malta flowcharts as a record for compatibility with existing system
 */
/**
 * EU Blue Card - For highly skilled workers
 * Added in Phase 3 data quality improvements
 */
export const euBlueCard: FlowchartDefinition = buildFlowchart({
  programId: 'mt_eu_blue_card',
  countryCode: 'MT',
  programName: 'EU Blue Card',
  complexity: 'medium',
  successRate: '80%',
  totalEstimatedDuration: '2-3 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer -->salary{Salary >= EUR 34,956/year?}
  salary -->|Yes| gather-documents[Gather Required Documents]
  salary -->|No| End1([Not Eligible])
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive EU Blue Card]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Malta]
  travel -->registration[Register with Identity Malta]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 34956,
        additionalNotes: [
          'Must have university degree or 5+ years professional experience',
          'Contract for minimum 1 year',
          'Mediterranean island lifestyle',
          'English-speaking country',
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
      condition: 'Salary must be at least EUR 34,956/year (2025 threshold)',
      notes: ['1.5x average gross annual salary in Malta'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        includeEducation: true,
        additionalDocuments: ['University degree or proof of 5+ years experience', 'Employment contract', 'Police clearance'],
        additionalNotes: ['Documents must be apostilled', 'English is official language - no translation needed'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 300 } },
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
        registrationAuthority: 'Identity Malta Agency',
        additionalNotes: ['Register within 3 months', 'Get eResidence card', 'Register for tax ID'],
      },
    },
  ],
});

export const maltaFlowchartsNew: Record<string, FlowchartDefinition> = {
  nomad_residence: nomadResidence,
  mprp: mprp,
  startup_visa: startupVisa,
  family_reunification: familyReunification,
  kei: keyEmployeeInitiative,
  sei: specialistEmployeeInitiative,
  eu_blue_card: euBlueCard,
};