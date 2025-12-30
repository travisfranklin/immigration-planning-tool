/**
 * Netherlands Immigration Programs
 *
 * Built using the template-based composition system.
 * Netherlands has 5 main programs:
 * 1. DAFT (Dutch-American Friendship Treaty)
 * 2. Highly Skilled Migrant
 * 3. Orientation Year (Zoekjaar)
 * 4. Self-Employment
 * 5. Family Reunification
 */

import type { FlowchartDefinition } from '../../../types/flowchart';
import { buildFlowchart } from '../builders';
import { COMMON_STEP_IDS } from '../templates/types';

/**
 * DAFT - Dutch-American Friendship Treaty (US citizens only)
 */
export const daftVisa: FlowchartDefinition = buildFlowchart({
  programId: 'nl_daft',
  countryCode: 'NL',
  programName: 'DAFT (Dutch-American Friendship Treaty)',
  complexity: 'low',
  successRate: '95%',
  totalEstimatedDuration: '2-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->citizenship-check{US Citizen?}
  citizenship-check -->|Yes| business-plan[Develop Business Plan]
  citizenship-check -->|No| End1([Not Eligible])
  business-plan -->capital[Secure EUR 4,500 Capital]
  capital -->bank-account[Open Dutch Bank Account]
  bank-account -->kvk-registration[Register with KVK]
  kvk-registration -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit IND Application]
  submit-application -->processing[Wait for Processing<br/>4-8 weeks]
  processing --> decision{Decision}
  decision -->|Approved| receive-permit[Receive Residence Permit]
  decision -->|Rejected| End2([Process Ended])
  receive-permit -->travel-register[Travel and Register]
  travel-register --> Success([Process Complete])`,
  steps: [
    {
      id: 'citizenship-check',
      title: 'Verify US Citizenship',
      description: 'Confirm you are a US citizen (required for DAFT)',
      estimatedDuration: '1 day',
      documents: ['Valid US passport', 'US birth certificate or naturalization certificate'],
      notes: [
        'DAFT is exclusively for US citizens',
        'This is a unique advantage of the Dutch-American Friendship Treaty',
        'No other nationality qualifies for this visa',
      ],
    },
    {
      id: 'business-plan',
      title: 'Develop Business Plan',
      description: 'Create a detailed business plan for your Dutch enterprise',
      estimatedDuration: '2-4 weeks',
      documents: ['Business plan (in English or Dutch)', 'Market analysis', 'Financial projections (3 years)', 'Description of services/products'],
      notes: [
        'Plan should demonstrate viability',
        'No specific format required, but be thorough',
        'Consider hiring a consultant familiar with Dutch business culture',
      ],
    },
    {
      id: 'capital',
      title: 'Secure Startup Capital',
      description: 'Ensure you have minimum EUR 4,500 available',
      estimatedDuration: '1 week',
      documents: ['Bank statements showing EUR 4,500+', 'Proof of funds availability'],
      notes: [
        'Minimum investment is only EUR 4,500 (very accessible)',
        'Funds must be deposited in Dutch business bank account',
        'Additional capital recommended for living expenses',
      ],
    },
    {
      id: 'bank-account',
      title: 'Open Dutch Bank Account',
      description: 'Open a business bank account in the Netherlands',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport', 'Proof of address', 'Business plan', 'Initial deposit (EUR 4,500)'],
      notes: ['Can be done remotely with some banks', 'May need to visit Netherlands in person', 'Popular banks: ABN AMRO, ING, Rabobank'],
    },
    {
      id: 'kvk-registration',
      title: 'Register with Chamber of Commerce (KVK)',
      description: 'Register your business with the Dutch Chamber of Commerce',
      estimatedDuration: '1 week',
      documents: ['Business plan', 'Proof of bank account', 'Passport copy', 'Proof of business address'],
      notes: ['Can be done online or in person', 'Costs approximately EUR 50', 'You will receive a KVK number'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        additionalDocuments: ['KVK registration', 'Dutch bank account proof', 'Proof of EUR 4,500 deposit'],
        additionalNotes: ['Documents can be in English or Dutch', 'DAFT has relatively simple requirements'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 350 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '4-8 weeks' } },
    {
      id: 'receive-permit',
      title: 'Receive Residence Permit',
      description: 'Collect your residence permit upon approval',
      estimatedDuration: '1-2 weeks',
      documents: ['Approval letter', 'Passport'],
      notes: ['Permit valid for 2 years initially', 'Can be renewed indefinitely', 'Can apply for PR after 5 years', 'Family can join'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'DAFT residence permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'municipality (gemeente)',
        additionalNotes: ['Register at local municipality', 'Obtain BSN (citizen service number)', 'Open personal bank account'],
      },
    },
  ],
});

/**
 * Highly Skilled Migrant (Kennismigrant)
 */
export const highlySkilledMigrant: FlowchartDefinition = buildFlowchart({
  programId: 'nl_highly_skilled',
  countryCode: 'NL',
  programName: 'Highly Skilled Migrant (Kennismigrant)',
  complexity: 'low',
  successRate: '90%',
  totalEstimatedDuration: '1-2 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Get Job Offer from Recognized Sponsor]
  job-offer --> salary{Meets Salary Threshold?}
  salary -->|Yes| gather-documents[Gather Required Documents]
  salary -->|No| End1([Not Eligible])
  gather-documents -->employer-submit[Employer Submits Application]
  employer-submit -->processing[Wait for IND Processing<br/>2-4 weeks]
  processing --> decision{Decision}
  decision -->|Approved| permit[Receive Residence Permit]
  decision -->|Rejected| End2([Process Ended])
  permit -->travel[Travel to Netherlands]
  travel -->register[Register at Municipality]
  register --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 44208,
        additionalNotes: [
          'Employer must be registered as recognized sponsor with IND',
          'Check IND public register for recognized sponsors',
          'Minimum EUR 60,360/year for age 30+',
          'Minimum EUR 44,208/year for under 30',
          'Salary thresholds updated annually',
        ],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['University degree certificate (with apostille)'],
        additionalNotes: [
          'Degree must be recognized as equivalent to Dutch degree',
          'Apostille required for US documents',
          'Health insurance must meet Dutch requirements',
        ],
      },
    },
    {
      id: 'employer-submission',
      title: 'Employer Submits Application',
      description: 'Recognized sponsor submits application to IND',
      estimatedDuration: '1 week',
      documents: ['All employee documents', 'Employer declaration', 'Application fee payment'],
      notes: ['Employer handles the application process', 'Application fee typically paid by employer'],
    },
    {
      template: COMMON_STEP_IDS.PROCESSING,
      options: {
        processingTime: '2-4 weeks',
        additionalNotes: ['One of the fastest visa processes in EU', 'May be contacted for additional documents'],
      },
    },
    {
      id: 'permit',
      title: 'Receive Residence Permit',
      description: 'Collect your residence permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Approval letter', 'Passport'],
      notes: ['Permit valid for duration of contract (max 5 years)', 'Can be renewed', 'Can apply for PR after 5 years', 'Family can join'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'highly skilled migrant permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'municipality (gemeente)',
        additionalNotes: ['Register at local municipality within 5 days', 'Obtain BSN (citizen service number)'],
      },
    },
  ],
});

/**
 * Orientation Year (Zoekjaar) - For recent graduates of top universities
 */
export const orientationYear: FlowchartDefinition = buildFlowchart({
  programId: 'nl_orientation_year',
  countryCode: 'NL',
  programName: 'Orientation Year (Zoekjaar)',
  complexity: 'low',
  successRate: '85%',
  totalEstimatedDuration: '2-3 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->university{Top 200 University?}
  university -->|Yes| timeline{Graduated within 3 Years?}
  university -->|No| End1([Not Eligible])
  timeline -->|Yes| age{Under 30?}
  timeline -->|No| End1
  age -->|Yes| gather-documents[Gather Required Documents]
  age -->|No| End1
  gather-documents -->submit[Submit Application]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| permit[Receive Permit]
  decision -->|Rejected| End2([Process Ended])
  permit -->travel[Travel to Netherlands]
  travel -->search[Search for Job<br/>1 Year]
  search --> Success([Process Complete])`,
  steps: [
    {
      id: 'university-verification',
      title: 'Verify University Ranking',
      description: 'Confirm your university is in top 200 of recognized rankings',
      estimatedDuration: '1 day',
      documents: ['University diploma', 'Transcript of records'],
      notes: [
        'Check Times Higher Education, QS, or Shanghai rankings',
        'University must be in top 200 at time of graduation',
        'IND maintains list of qualifying universities',
      ],
    },
    {
      id: 'timeline-check',
      title: 'Verify Graduation Timeline',
      description: 'Confirm graduation was within last 3 years',
      estimatedDuration: '1 day',
      documents: ['Diploma with graduation date'],
      notes: ['Must apply within 3 years of graduation', 'No exceptions to 3-year rule'],
    },
    {
      id: 'age-verification',
      title: 'Verify Age Requirement',
      description: 'Confirm you are under 30 years old',
      estimatedDuration: '1 day',
      documents: ['Passport or birth certificate'],
      isConditional: true,
      condition: 'Must be under 30 years old',
      notes: ['Must be under 30 at time of application'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeFinancial: true,
        additionalDocuments: ['University diploma (original, apostilled)', 'Transcript of records', 'Criminal background check'],
        additionalNotes: ['Need proof of funds for 12 months (EUR 1,200/month)', 'Diploma must be apostilled'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 350 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '4-6 weeks' } },
    {
      id: 'permit',
      title: 'Receive Orientation Year Permit',
      description: 'Collect your orientation year residence permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Approval letter', 'Passport'],
      notes: [
        'Permit valid for 1 year',
        'Can work without restrictions',
        'Can start a business',
        'Convert to work visa if you find job',
      ],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'orientation year permit' } },
    {
      id: 'job-search',
      title: 'Search for Employment',
      description: 'Look for job matching your qualifications',
      estimatedDuration: 'Up to 1 year',
      documents: [],
      notes: [
        'Full work rights during orientation year',
        'Can work any job, any hours',
        'Can start own business',
        'Convert to highly skilled migrant if you find qualifying job',
      ],
    },
  ],
});

/**
 * Self-Employment Visa (Points-based)
 */
export const selfEmploymentVisa: FlowchartDefinition = buildFlowchart({
  programId: 'nl_self_employment',
  countryCode: 'NL',
  programName: 'Self-Employment Visa',
  complexity: 'high',
  successRate: '50%',
  totalEstimatedDuration: '4-6 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->business-plan[Develop Business Plan]
  business-plan -->points{30+ Points?}
  points -->|Yes| capital[Secure Startup Capital]
  points -->|No| End1([Not Eligible])
  capital -->kvk[Register with KVK]
  kvk -->gather-documents[Gather Required Documents]
  gather-documents -->submit[Submit Application]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| permit[Receive Permit]
  decision -->|Rejected| End2([Process Ended])
  permit -->travel[Travel to Netherlands]
  travel -->register[Register and Start Business]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'business-plan',
      title: 'Develop Comprehensive Business Plan',
      description: 'Create detailed business plan for points-based assessment',
      estimatedDuration: '4-8 weeks',
      documents: ['Business plan (30-50 pages)', 'Market analysis', 'Financial projections (3-5 years)', 'Marketing strategy', 'Operational plan'],
      notes: [
        'Plan evaluated on points system',
        'Must score at least 30 points out of 300',
        'Consider hiring Dutch business consultant',
        'Plan must demonstrate added value to Dutch economy',
      ],
    },
    {
      id: 'points-calculation',
      title: 'Calculate Points Score',
      description: 'Assess your application against points criteria',
      estimatedDuration: '1 week',
      documents: ['Business plan', 'Personal experience documentation', 'Financial statements'],
      notes: [
        'Points awarded for: personal experience, business plan quality, added value',
        'Need minimum 30 points to qualify',
        'Maximum 300 points possible',
        'IND provides points calculator online',
      ],
    },
    {
      id: 'capital',
      title: 'Secure Startup Capital',
      description: 'Ensure sufficient funds for business and living',
      estimatedDuration: '2-4 weeks',
      documents: ['Bank statements showing EUR 15,000+', 'Proof of funds availability'],
      notes: ['Minimum EUR 15,000 recommended', 'Must show funds for business and living expenses'],
    },
    {
      id: 'kvk-registration',
      title: 'Register with Chamber of Commerce',
      description: 'Register business with KVK',
      estimatedDuration: '1-2 weeks',
      documents: ['Business plan', 'Proof of business address', 'Passport copy'],
      notes: ['Can be done online or in person', 'Costs approximately EUR 50', 'Receive KVK number'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        includeFinancial: true,
        additionalDocuments: ['KVK registration', 'Points score documentation'],
        additionalNotes: ['All documents must be apostilled', 'Certified translations required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 1500 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '3-4 months' } },
    {
      id: 'permit',
      title: 'Receive Residence Permit',
      description: 'Collect your self-employment residence permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Approval letter', 'Passport'],
      notes: ['Permit valid for 2 years initially', 'Must meet business plan goals', 'Renewable if successful'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'self-employment permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'municipality (gemeente)',
        additionalNotes: ['Register at local municipality', 'Obtain BSN', 'Complete business setup'],
      },
    },
  ],
});

/**
 * Family Reunification
 */
export const familyReunification: FlowchartDefinition = buildFlowchart({
  programId: 'nl_family_reunification',
  countryCode: 'NL',
  programName: 'Family Reunification',
  complexity: 'medium',
  successRate: '80%',
  totalEstimatedDuration: '3-6 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->sponsor{Sponsor Eligible?}
  sponsor -->|Yes| income{Income Requirement Met?}
  sponsor -->|No| End1([Not Eligible])
  income -->|Yes| relationship[Prove Relationship]
  income -->|No| End1
  relationship -->gather-documents[Gather Required Documents]
  gather-documents -->submit[Submit MVV Application]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| mvv[Receive MVV]
  decision -->|Rejected| End2([Process Ended])
  mvv -->travel[Travel to Netherlands]
  travel -->register[Register and Integration]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'sponsor-eligibility',
      title: 'Verify Sponsor Eligibility',
      description: 'Confirm family member in Netherlands meets requirements',
      estimatedDuration: '1 week',
      documents: ['Sponsor residence permit or Dutch passport', 'Sponsor income statements', 'Sponsor housing contract'],
      notes: [
        'Sponsor must have valid residence permit or be Dutch citizen',
        'Sponsor must meet income requirements',
        'Sponsor must have adequate housing',
      ],
    },
    {
      id: 'income-verification',
      title: 'Verify Income Requirements',
      description: 'Confirm sponsor meets minimum income threshold',
      estimatedDuration: '1 week',
      documents: ['Sponsor employment contract', 'Recent pay slips (3 months)', 'Tax returns'],
      notes: ['Income requirement varies by family size', 'Must meet 100% of minimum wage', 'Income must be stable and ongoing'],
    },
    {
      id: 'relationship-proof',
      title: 'Prove Family Relationship',
      description: 'Document your relationship to sponsor',
      estimatedDuration: '2-4 weeks',
      documents: ['Marriage certificate (if spouse)', 'Birth certificates (if parent/child)', 'Partnership registration (if partner)', 'Photos together', 'Communication records'],
      notes: ['All certificates must be apostilled', 'Relationship must be genuine', 'May need to prove cohabitation history'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        additionalDocuments: ['Relationship documents (apostilled)', 'Sponsor documents', 'Criminal background check'],
        additionalNotes: ['All documents must be recent (within 6 months)', 'Apostille required for US documents', 'Certified translations required'],
      },
    },
    {
      id: 'submit-mvv',
      title: 'Submit MVV Application',
      description: 'Submit provisional residence visa application',
      estimatedDuration: '1-2 weeks',
      documents: ['All gathered documents', 'Application fee payment (EUR 350)'],
      notes: ['Can apply at Dutch embassy or sponsor applies in Netherlands', 'MVV is entry visa to collect residence permit'],
    },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '3-6 months' } },
    {
      id: 'mvv',
      title: 'Receive MVV',
      description: 'Collect your provisional residence visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Approval letter', 'Passport'],
      notes: ['MVV valid for 90 days', 'Must travel to Netherlands within validity', 'Collect residence permit after arrival'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'MVV (provisional residence visa)' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'municipality (gemeente)',
        additionalNotes: ['Register at local municipality', 'Collect residence permit at IND', 'Begin civic integration requirements'],
      },
    },
    {
      id: 'integration',
      title: 'Civic Integration',
      description: 'Complete Dutch civic integration requirements',
      estimatedDuration: '3 years',
      documents: ['Integration exam results'],
      notes: [
        'Must pass civic integration exam within 3 years',
        'Exam covers Dutch language, culture, society',
        'Exemptions available for some nationalities',
      ],
    },
  ],
});

/**
 * Export all Netherlands flowcharts as a record for compatibility with existing system
 */
export const netherlandsFlowchartsNew: Record<string, FlowchartDefinition> = {
  daft: daftVisa,
  highly_skilled: highlySkilledMigrant,
  orientation_year: orientationYear,
  self_employment: selfEmploymentVisa,
  family_reunification: familyReunification,
};
