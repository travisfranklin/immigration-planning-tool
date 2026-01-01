/**
 * Portugal Immigration Programs
 *
 * Built using the template-based composition system.
 * Portugal has 5 main programs:
 * 1. D7 Visa (Passive Income)
 * 2. Golden Visa (Investment)
 * 3. Startup Visa
 * 4. Tech Visa
 * 5. Family Reunification
 */

import type { FlowchartDefinition } from '../../../types/flowchart';
import { buildFlowchart } from '../builders';
import { COMMON_STEP_IDS } from '../templates/types';

/**
 * D7 Visa - For passive income earners and retirees
 */
export const d7Visa: FlowchartDefinition = buildFlowchart({
  programId: 'pt_d7_visa',
  countryCode: 'PT',
  programName: 'D7 Visa',
  complexity: 'low',
  successRate: '95%',
  totalEstimatedDuration: '3-5 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->verify-income{Passive Income >= EUR 760/month?}
  verify-income -->|Yes| secure-accommodation[Secure Accommodation]
  verify-income -->|No| End1([Not Eligible])
  secure-accommodation -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit at Consulate]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive D7 Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Portugal]
  travel -->registration[Register with SEF]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'verify-income',
      title: 'Verify Passive Income Requirements',
      description: 'Ensure you have sufficient passive income to qualify',
      estimatedDuration: '1-2 weeks',
      documents: ['Bank statements (last 6 months)', 'Proof of passive income sources', 'Tax returns (last 2 years)'],
      notes: [
        'Minimum EUR 760/month (Portuguese minimum wage)',
        'Recommended: EUR 1,000-1,500/month for comfortable approval',
        'Income sources: pension, rental income, dividends, royalties, remote work',
      ],
    },
    {
      id: 'secure-accommodation',
      title: 'Secure Accommodation in Portugal',
      description: 'Obtain proof of accommodation in Portugal',
      estimatedDuration: '2-4 weeks',
      documents: ['Rental agreement (minimum 1 year) OR', 'Property purchase deed OR', 'Letter of invitation from Portuguese resident'],
      notes: ['Can rent or buy property', 'Popular areas: Lisbon, Porto, Algarve, Madeira'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeFinancial: true,
        additionalDocuments: ['Proof of accommodation', 'Criminal background check (apostilled)', 'Health insurance (EUR 30,000 coverage)'],
        additionalNotes: ['FBI check takes 8-12 weeks - start early!', 'All documents must be apostilled'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 90 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '4-8 weeks' } },
    {
      id: 'visa',
      title: 'Receive D7 Visa',
      description: 'Collect your D7 visa from consulate',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Visa valid for 4 months', 'Must enter Portugal and apply for residence permit', 'NHR tax regime may apply'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'D7 Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'SEF (Immigration Service)',
        additionalNotes: ['Apply for residence permit within 4 months', 'Get NIF (tax number)', 'Initial permit for 2 years, then 3-year renewals'],
      },
    },
  ],
});

/**
 * Golden Visa - For significant investors
 */
export const goldenVisa: FlowchartDefinition = buildFlowchart({
  programId: 'pt_golden_visa',
  countryCode: 'PT',
  programName: 'Golden Visa',
  complexity: 'medium',
  successRate: '90%',
  totalEstimatedDuration: '4-8 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->choose-investment[Choose Investment Type]
  choose-investment -->obtain-nif[Obtain NIF]
  obtain-nif -->make-investment[Complete Investment]
  make-investment -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| permit[Receive Golden Visa]
  decision -->|Rejected| End2([Process Ended])
  permit -->travel[Travel to Portugal]
  travel -->registration[Register with Authorities]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'choose-investment',
      title: 'Choose Investment Type',
      description: 'Select the type of investment that qualifies',
      estimatedDuration: '1-3 months',
      documents: ['Proof of funds', 'Source of funds documentation'],
      notes: [
        'Real Estate: EUR 500,000 (or EUR 400,000 in low-density areas)',
        'Capital Transfer: EUR 1,500,000',
        'Business Investment: EUR 500,000 (creating 5+ jobs)',
        'Research/Arts: EUR 250,000 donation',
      ],
    },
    {
      id: 'obtain-nif',
      title: 'Obtain NIF (Portuguese Tax Number)',
      description: 'Get your Portuguese tax identification number',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport copy', 'Proof of address', 'Power of attorney (if using representative)'],
      notes: ['Required for any financial transaction', 'Can be obtained remotely through lawyer'],
    },
    {
      id: 'make-investment',
      title: 'Complete Investment',
      description: 'Execute your chosen investment',
      estimatedDuration: '1-3 months',
      documents: ['Property deed (if real estate)', 'Bank transfer confirmation', 'Investment certificate'],
      notes: ['Use Portuguese lawyer for transactions', 'Investment must be maintained for 5 years'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeFinancial: true,
        additionalDocuments: ['Investment proof', 'NIF', 'Criminal background check (apostilled)'],
        additionalNotes: ['All documents must be apostilled and translated'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 5325 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '4-6 months' } },
    {
      id: 'permit',
      title: 'Receive Golden Visa',
      description: 'Collect your Golden Visa residence permit',
      estimatedDuration: '2-4 weeks',
      documents: ['Approval letter', 'Passport'],
      notes: ['Initial permit for 2 years', 'Only 7 days/year minimum stay', 'Can apply for citizenship after 5 years'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Golden Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'SEF (Immigration Service)',
        additionalNotes: ['Collect residence card', 'Get NIF if not already obtained', 'Open Portuguese bank account'],
      },
    },
  ],
});

/**
 * Startup Visa - For innovative entrepreneurs
 */
export const startupVisa: FlowchartDefinition = buildFlowchart({
  programId: 'pt_startup_visa',
  countryCode: 'PT',
  programName: 'Startup Visa',
  complexity: 'medium',
  successRate: '75%',
  totalEstimatedDuration: '3-5 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->business-idea[Develop Innovative Startup Idea]
  business-idea -->prepare-business-plan[Prepare Business Plan]
  prepare-business-plan -->submit-to-incubator[Apply to IAPMEI-Certified Incubator]
  submit-to-incubator --> incubator-approval{Incubator Approval?}
  incubator-approval -->|Yes| gather-documents[Gather Required Documents]
  incubator-approval -->|No| End1([Not Eligible])
  gather-documents -->submit-application[Submit Visa Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Startup Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Portugal]
  travel -->registration[Register and Launch]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'business-idea',
      title: 'Develop Innovative Startup Idea',
      description: 'Create an innovative, scalable business concept',
      estimatedDuration: '1-2 months',
      documents: ['Business concept description', 'Market research', 'Competitive landscape overview'],
      notes: [
        'Focus on tech, tourism tech, fintech, or other innovation sectors',
        'Lisbon and Porto have vibrant startup ecosystems',
        'Business must be innovative and have growth potential',
      ],
    },
    {
      id: 'prepare-business-plan',
      title: 'Prepare Detailed Business Plan',
      description: 'Create comprehensive business plan for incubator approval',
      estimatedDuration: '2-4 weeks',
      documents: ['Executive summary', 'Detailed business plan (15-30 pages)', 'Financial projections (3-5 years)', 'Proof of EUR 5,000-10,000 capital'],
      notes: ['Minimum EUR 5,000-10,000 in capital recommended', 'Lower capital requirement than most EU startup visas'],
    },
    {
      id: 'submit-to-incubator',
      title: 'Submit to IAPMEI-Certified Incubator',
      description: 'Apply to IAPMEI-certified startup incubator for approval',
      estimatedDuration: '1-2 weeks',
      documents: ['Completed incubator application form', 'Business plan', 'Pitch deck'],
      notes: ['List of certified incubators on IAPMEI website', 'Incubator provides support and mentorship'],
    },
    {
      id: 'incubator-approval',
      title: 'Receive Incubator Approval',
      description: 'Get approval letter from certified incubator',
      estimatedDuration: '2-4 weeks',
      documents: ['Incubator approval letter', 'Incubation agreement'],
      notes: ['Approval letter required for visa application', 'Incubator commits to supporting your startup'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        additionalDocuments: ['Incubator approval letter', 'Proof of capital', 'Criminal background check'],
        additionalNotes: ['All documents must be apostilled'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 90 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '4-8 weeks' } },
    {
      id: 'visa',
      title: 'Receive Startup Visa',
      description: 'Collect your startup visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial visa for 4 months', 'Apply for residence permit after arrival', 'Can bring family'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Startup Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'SEF (Immigration Service)',
        additionalNotes: ['Apply for residence permit', 'Register company in Portugal', 'Get NIF and open bank account'],
      },
    },
  ],
});

/**
 * Tech Visa - For tech professionals at certified companies
 */
export const techVisa: FlowchartDefinition = buildFlowchart({
  programId: 'pt_tech_visa',
  countryCode: 'PT',
  programName: 'Tech Visa',
  complexity: 'low',
  successRate: '90%',
  totalEstimatedDuration: '2-3 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Get Job Offer from IAPMEI-Certified Company]
  job-offer -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit Visa Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Tech Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Portugal]
  travel -->registration[Register with Authorities]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 15960,
        additionalNotes: [
          'Company MUST be certified by IAPMEI (Portuguese SME Agency)',
          'Lower salary threshold than most EU tech visas (EUR 15,960/year)',
          'Fast processing (30-60 days)',
          'List of certified companies: https://www.iapmei.pt/techvisa',
        ],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['Company IAPMEI certification', 'Educational qualifications', 'Criminal background check'],
        additionalNotes: ['All documents must be in Portuguese or English', 'Apostille required for non-EU documents'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 90 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-60 days' } },
    {
      id: 'visa',
      title: 'Receive Tech Visa',
      description: 'Collect your tech visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial visa for 4 months', 'Apply for residence permit after arrival', 'Growing tech scene in Lisbon and Porto'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Tech Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'SEF (Immigration Service)',
        additionalNotes: ['Apply for residence permit', 'Get NIF (tax number)', 'Register with Social Security'],
      },
    },
  ],
});

/**
 * Family Reunification
 */
export const familyReunification: FlowchartDefinition = buildFlowchart({
  programId: 'pt_family_reunification',
  countryCode: 'PT',
  programName: 'Family Reunification',
  complexity: 'medium',
  successRate: '85%',
  totalEstimatedDuration: '3-6 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->check-eligibility{Sponsor Eligible?}
  check-eligibility -->|Yes| relationship-proof[Prove Relationship]
  check-eligibility -->|No| End1([Not Eligible])
  relationship-proof -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| permit[Receive Permit]
  decision -->|Rejected| End2([Process Ended])
  permit -->travel[Travel to Portugal]
  travel -->registration[Register with SEF]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'check-eligibility',
      title: 'Check Sponsor Eligibility',
      description: 'Verify sponsor has valid residence permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Sponsor residence permit', 'Proof of relationship'],
      notes: ['Sponsor must have valid permit', 'Spouse, children eligible', 'Income requirement applies'],
    },
    {
      id: 'relationship-proof',
      title: 'Prove Family Relationship',
      description: 'Document your relationship to sponsor',
      estimatedDuration: '2-4 weeks',
      documents: ['Marriage certificate (if spouse)', 'Birth certificates (if parent/child)'],
      notes: ['All certificates must be apostilled', 'Translations to Portuguese required'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        additionalDocuments: ['Relationship documents (apostilled)', 'Sponsor documents', 'Proof of accommodation', 'Proof of income', 'Health insurance'],
        additionalNotes: ['All documents must be apostilled and translated'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 170 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '3-6 months' } },
    {
      id: 'permit',
      title: 'Receive Family Reunification Permit',
      description: 'Receive family reunification permit',
      estimatedDuration: '2-4 weeks',
      documents: ['Residence permit'],
      notes: ['Valid for 2 years, renewable', 'Work rights included'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'family reunification permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'SEF (Immigration Service)',
        additionalNotes: ['Collect residence card', 'Get NIF', 'Register at local municipality'],
      },
    },
  ],
});

/**
 * Export all Portugal flowcharts as a record for compatibility with existing system
 */
/**
 * EU Blue Card - For highly skilled workers
 * Added in Phase 3 data quality improvements
 */
export const euBlueCard: FlowchartDefinition = buildFlowchart({
  programId: 'pt_eu_blue_card',
  countryCode: 'PT',
  programName: 'EU Blue Card',
  complexity: 'medium',
  successRate: '80%',
  totalEstimatedDuration: '2-3 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer -->salary{Salary >= EUR 21,030/year?}
  salary -->|Yes| gather-documents[Gather Required Documents]
  salary -->|No| End1([Not Eligible])
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive EU Blue Card]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Portugal]
  travel -->registration[Register with SEF/AIMA]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 21030,
        additionalNotes: [
          'Must have university degree or 5+ years professional experience',
          'Contract for minimum 1 year',
          'Portugal has lowest EU Blue Card threshold in Western Europe',
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
      condition: 'Salary must be at least EUR 21,030/year (2025 threshold)',
      notes: ['1.5x average gross annual salary in Portugal'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        includeEducation: true,
        additionalDocuments: ['University degree or proof of 5+ years experience', 'Employment contract', 'Criminal record'],
        additionalNotes: ['Documents must be apostilled', 'Portuguese translations may be required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 90 } },
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
        'Path to citizenship after 5 years',
      ],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'EU Blue Card' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'SEF/AIMA (Immigration Service)',
        additionalNotes: ['Get NIF (tax number)', 'Register with Social Security', 'Open Portuguese bank account'],
      },
    },
  ],
});

/**
 * Digital Nomad Visa (D8) - For remote workers
 * Added in Phase 3 data quality improvements
 */
export const digitalNomadVisa: FlowchartDefinition = buildFlowchart({
  programId: 'pt_digital_nomad',
  countryCode: 'PT',
  programName: 'Digital Nomad Visa (D8)',
  complexity: 'low',
  successRate: '85%',
  totalEstimatedDuration: '1-2 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->remote-work{Work Remotely?}
  remote-work -->|Yes| income{Income >= EUR 3,480/month?}
  remote-work -->|No| End1([Not Eligible])
  income -->|Yes| gather-documents[Gather Required Documents]
  income -->|No| savings{Savings >= EUR 36,480?}
  savings -->|Yes| gather-documents
  savings -->|No| End1
  gather-documents -->submit-application[Submit at Consulate]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive D8 Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Portugal]
  travel -->registration[Register with SEF/AIMA]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'remote-work',
      title: 'Verify Remote Work Status',
      description: 'Confirm remote employment or freelance work for non-Portuguese company',
      estimatedDuration: '1 week',
      documents: ['Employment contract or freelance contracts'],
      notes: ['Must work for company outside Portugal', 'Popular among tech workers and creatives'],
    },
    {
      id: 'income',
      title: 'Verify Income Requirement',
      description: 'Prove monthly income of at least EUR 3,480 (4x minimum wage)',
      estimatedDuration: 'N/A',
      documents: ['Bank statements (6 months)', 'Employment contract or invoices'],
      isConditional: true,
      condition: 'Monthly income >= EUR 3,480 OR savings >= EUR 36,480',
      notes: ['Income from remote work outside Portugal', 'Can also qualify with savings'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeFinancial: true,
        additionalDocuments: ['Proof of remote work', 'Proof of income', 'Health insurance', 'Criminal record'],
        additionalNotes: ['Documents must be apostilled', 'Portuguese translations recommended'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 90 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-60 days' } },
    {
      id: 'visa',
      title: 'Receive D8 Digital Nomad Visa',
      description: 'Collect your digital nomad visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for 1 year', 'Renewable for 2 more years', 'Path to residency and citizenship'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'D8 Digital Nomad Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'SEF/AIMA (Immigration Service)',
        additionalNotes: ['Get NIF (tax number)', 'Consider NHR tax regime', 'Open Portuguese bank account'],
      },
    },
  ],
});

export const portugalFlowchartsNew: Record<string, FlowchartDefinition> = {
  d7_visa: d7Visa,
  golden_visa: goldenVisa,
  startup_visa: startupVisa,
  tech_visa: techVisa,
  family_reunification: familyReunification,
  eu_blue_card: euBlueCard,
  digital_nomad: digitalNomadVisa,
};
