/**
 * Germany Immigration Programs
 * 
 * Defines German visa programs using the template-based composition system.
 * This file demonstrates the new architecture for creating flowcharts.
 */

import type { FlowchartDefinition } from '../../../types/flowchart';
import { buildFlowchart } from '../builders';
import { COMMON_STEP_IDS } from '../templates/types';

/**
 * EU Blue Card - Germany's premium work visa for highly skilled workers
 */
export const euBlueCard: FlowchartDefinition = buildFlowchart({
  programId: 'de_eu_blue_card',
  countryCode: 'DE',
  programName: 'EU Blue Card',
  complexity: 'medium',
  successRate: '85%',
  totalEstimatedDuration: '3-6 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer["Secure Job Offer"]
  job-offer --> CheckSalary{"Salary >= EUR 45,300?"}
  CheckSalary -->|Yes| gather-documents["Gather Required Documents"]
  CheckSalary -->|No| End1([Not Eligible])
  gather-documents --> submit-application["Submit Application"]
  submit-application --> processing["Wait for Processing"]
  processing --> decision{Decision}
  decision -->|Approved| travel["Travel to Germany"]
  decision -->|Rejected| End2([Process Ended])
  travel --> registration["Register at Local Office"]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 45300,
        shortageOccupationThreshold: 41041.80,
        additionalNotes: ['Contract must be for at least 12 months'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        includeDegree: true,
        additionalDocuments: [
          'Proof of accommodation in Germany',
          'CV/Resume',
        ],
        additionalNotes: [
          'Degree must be recognized as equivalent to German degree',
          'Health insurance must meet German requirements',
        ],
      },
    },
    {
      template: COMMON_STEP_IDS.SUBMIT_APPLICATION,
      options: {
        additionalNotes: [
          'Book appointment well in advance (can take 4-8 weeks)',
          'Some consulates allow online submission',
        ],
      },
    },
    {
      template: COMMON_STEP_IDS.PROCESSING,
    },
    // Custom decision step (not templated)
    {
      id: 'decision',
      title: 'Receive Decision',
      description: 'Get notification of approval or rejection',
      estimatedDuration: '1 week',
      documents: [],
      isConditional: true,
      condition: 'Application approved',
      notes: [
        'If approved, passport will be stamped with visa',
        'If rejected, you can appeal within 1 month',
        'Rejection reasons must be provided in writing',
      ],
    },
    {
      template: COMMON_STEP_IDS.TRAVEL,
      options: {
        visaType: 'Blue Card visa',
        additionalNotes: [
          'Must enter Germany within 3 months of visa issuance',
          'May be questioned at border control',
        ],
      },
    },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        additionalDocuments: [
          'Proof of accommodation (Wohnungsgeberbestätigung)',
          'Biometric photo',
        ],
        additionalNotes: [
          'Will receive residence permit card',
          'Card is valid for up to 4 years',
        ],
      },
    },
  ],
});

/**
 * Skilled Worker Visa - For qualified professionals with job offers
 */
export const skilledWorkerVisa: FlowchartDefinition = buildFlowchart({
  programId: 'de_work_visa',
  countryCode: 'DE',
  programName: 'Skilled Worker Visa',
  complexity: 'medium',
  successRate: '80%',
  totalEstimatedDuration: '3-6 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer --> recognition[Get Degree Recognition]
  recognition --> gather-documents[Gather Required Documents]
  gather-documents --> submit-application[Submit Application]
  submit-application --> processing[Wait for Processing<br/>2-3 months]
  processing --> decision{Decision}
  decision -->|Approved| travel[Receive Visa]
  decision -->|Rejected| End([Process Ended])
  travel --> registration[Travel to Germany]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        additionalNotes: [
          'No minimum salary requirement (unlike Blue Card)',
          'Job must match your qualifications',
        ],
      },
    },
    // Custom recognition step
    {
      id: 'recognition',
      title: 'Get Degree Recognition',
      description: 'Have your foreign qualifications recognized in Germany',
      estimatedDuration: '2-4 months',
      documents: [
        'University degree certificate',
        'Transcript of records',
        'Proof of professional experience',
      ],
      notes: [
        'Apply to ZAB (Central Office for Foreign Education)',
        'May require additional exams or training',
        'Recognition is mandatory for regulated professions',
      ],
    },
    { template: COMMON_STEP_IDS.GATHER_DOCUMENTS, options: { includeEmployment: true } },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION },
    { template: COMMON_STEP_IDS.PROCESSING },
    {
      id: 'decision',
      title: 'Receive Decision',
      description: 'Get notification of approval or rejection',
      estimatedDuration: '1 week',
      documents: [],
      isConditional: true,
      condition: 'Application approved',
      notes: [
        'If approved, passport will be stamped with visa',
        'If rejected, you can appeal within 1 month',
      ],
    },
    { template: COMMON_STEP_IDS.TRAVEL },
    { template: COMMON_STEP_IDS.REGISTRATION },
  ],
});

/**
 * Job Seeker Visa - For qualified professionals looking for work in Germany
 */
export const jobSeekerVisa: FlowchartDefinition = buildFlowchart({
  programId: 'de_job_seeker',
  countryCode: 'DE',
  programName: 'Job Seeker Visa',
  complexity: 'medium',
  successRate: '70%',
  totalEstimatedDuration: '6-12 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->degree-recognition[Have Recognized Degree]
  degree-recognition --> financial-proof{Sufficient Funds?}
  financial-proof -->|Yes| gather-documents[Gather Required Documents]
  financial-proof -->|No| End1([Not Eligible])
  gather-documents --> submit-application[Submit Application]
  submit-application --> processing[Wait for Processing<br/>4-8 weeks]
  processing --> decision{Decision}
  decision -->|Approved| travel[Receive Job Seeker Visa]
  decision -->|Rejected| End2([Process Ended])
  travel --> job-search[Search for Job<br/>6 months]
  job-search --> job-found{Job Offer?}
  job-found -->|Yes| conversion[Convert to Work Visa]
  job-found -->|No| extend-visa{Extend Visa?}
  extend-visa -->|Yes| job-search
  extend-visa -->|No| return-home[Return Home]
  conversion --> Success([Process Complete])
  return-home --> End2`,
  steps: [
    {
      id: 'degree-recognition',
      title: 'Verify Degree Recognition',
      description: 'Ensure your degree is recognized in Germany',
      estimatedDuration: '2-4 months',
      documents: [
        'University degree certificate',
        'Transcript of records',
        'Degree recognition certificate from ZAB',
      ],
      notes: [
        'Apply to ZAB (Central Office for Foreign Education)',
        'Recognition process can take 2-4 months',
        'Some degrees are automatically recognized',
      ],
    },
    {
      id: 'financial-proof',
      title: 'Prepare Financial Proof',
      description: 'Show sufficient funds to support yourself',
      estimatedDuration: '1-2 weeks',
      documents: [
        'Bank statements (last 3 months)',
        'Blocked account (Sperrkonto) with EUR 1,027/month',
        'Proof of health insurance',
      ],
      notes: [
        'Need approximately EUR 6,000-12,000 for 6 months',
        'Blocked account is recommended',
        'Must show ability to support yourself without working',
      ],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeFinancial: true,
        additionalDocuments: ['Motivation letter'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '4-8 weeks' } },
    {
      id: 'decision',
      title: 'Receive Decision',
      description: 'Get notification of approval or rejection',
      estimatedDuration: '1 week',
      documents: [],
      isConditional: true,
      condition: 'Application approved',
      notes: [
        'If approved, passport will be stamped with visa',
        'If rejected, you can appeal within 1 month',
      ],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'job seeker visa' } },
    {
      id: 'job-search',
      title: 'Search for Employment',
      description: 'Look for job matching your qualifications',
      estimatedDuration: 'Up to 6 months',
      documents: [],
      notes: [
        'Visa valid for 6 months',
        'Cannot work during this period (except trial work)',
        'Must find job matching your qualifications',
        'Can extend once if good prospects',
      ],
    },
    {
      id: 'job-found',
      title: 'Job Offer Decision',
      description: 'Evaluate if you have received a job offer',
      estimatedDuration: 'Ongoing',
      documents: [],
      isConditional: true,
      condition: 'Job offer received',
      notes: [
        'Must find job matching your qualifications',
        'Job must meet visa requirements',
      ],
    },
    {
      id: 'conversion',
      title: 'Convert to Work Visa',
      description: 'Convert job seeker visa to work visa',
      estimatedDuration: '4-8 weeks',
      documents: ['Job offer/contract', 'Employer documentation'],
      isConditional: true,
      condition: 'Job offer received',
      notes: [
        'Must convert before visa expires',
        'Can be done within Germany',
        'No need to return home',
      ],
    },
    {
      id: 'extend-visa',
      title: 'Visa Extension Decision',
      description: 'Decide whether to extend your job seeker visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Extension application', 'Proof of job search efforts'],
      isConditional: true,
      condition: 'Extension approved',
      notes: [
        'Can extend once if good prospects',
        'Must show active job search',
      ],
    },
    {
      id: 'return-home',
      title: 'Return Home',
      description: 'Return to home country if visa expires without job offer',
      estimatedDuration: 'N/A',
      documents: [],
      notes: [
        'Must leave Germany before visa expires',
        'Can reapply after returning home',
      ],
    },
  ],
});

/**
 * Freelance Visa (Freiberufler) - For self-employed professionals
 */
export const freelanceVisa: FlowchartDefinition = buildFlowchart({
  programId: 'de_freelance',
  countryCode: 'DE',
  programName: 'Freelance Visa (Freiberufler)',
  complexity: 'high',
  successRate: '60%',
  totalEstimatedDuration: '3-6 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->business-plan["Develop Business Plan"]
  business-plan --> client-commitments["Secure Client Commitments"]
  client-commitments --> financial-proof{Sufficient Funds?}
  financial-proof -->|Yes| gather-documents["Gather Required Documents"]
  financial-proof -->|No| End1([Not Eligible])
  gather-documents --> submit-application["Submit Application"]
  submit-application --> interview["Attend Interview"]
  interview --> processing["Wait for Decision"]
  processing --> decision{Decision}
  decision -->|Approved| travel["Travel to Germany"]
  decision -->|Rejected| End2([Process Ended])
  travel --> registration["Register Business"]
  registration --> Success([Start Freelancing])`,
  steps: [
    {
      id: 'business-plan',
      title: 'Develop Business Plan',
      description: 'Create comprehensive business plan',
      estimatedDuration: '2-4 weeks',
      documents: [
        'Detailed business plan (in German)',
        'Market analysis',
        'Financial projections (3 years)',
        'Portfolio of work',
      ],
      notes: [
        'Must demonstrate economic benefit to Germany',
        'Show how your work serves German market',
        'Include detailed financial projections',
        'Consider hiring German business consultant',
      ],
    },
    {
      id: 'client-commitments',
      title: 'Secure Client Commitments',
      description: 'Get letters of intent from potential clients',
      estimatedDuration: '1-3 months',
      documents: [
        'Letters of intent from German clients',
        'Contracts or agreements',
        'Proof of client relationships',
      ],
      notes: [
        'Having German clients strengthens application',
        'Show sustainable income potential',
        'International clients also acceptable',
      ],
    },
    {
      id: 'financial-proof',
      title: 'Prepare Financial Proof',
      description: 'Show sufficient startup capital',
      estimatedDuration: '1-2 weeks',
      documents: [
        'Bank statements',
        'Proof of savings (EUR 10,000+ recommended)',
        'Health insurance proof',
      ],
      notes: [
        'Need funds to support yourself initially',
        'Higher amounts improve approval chances',
        'Must show financial stability',
      ],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        includeFinancial: true,
        additionalDocuments: ['CV and portfolio', 'Relevant qualifications/certifications'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION },
    {
      id: 'interview',
      title: 'Attend Interview',
      description: 'Interview with embassy officials',
      estimatedDuration: '1-2 weeks',
      documents: [],
      notes: [
        'Be prepared to explain business plan in detail',
        'May need to present in German',
        'Demonstrate commitment and viability',
      ],
    },
    {
      template: COMMON_STEP_IDS.PROCESSING,
      options: {
        additionalNotes: ['Freelance visas are discretionary'],
      },
    },
    {
      id: 'decision',
      title: 'Receive Decision',
      description: 'Get notification of approval or rejection',
      estimatedDuration: '1 week',
      documents: [],
      isConditional: true,
      condition: 'Application approved',
      notes: [
        'If approved, passport will be stamped with visa',
        'If rejected, you can appeal within 1 month',
      ],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'freelance visa' } },
    {
      id: 'registration',
      title: 'Register Business',
      description: 'Register as freelancer with authorities',
      estimatedDuration: '2-4 weeks',
      documents: [
        'Passport',
        'Residence permit',
        'Business registration (Gewerbeanmeldung)',
        'Tax number application',
      ],
      notes: [
        'Register at local Finanzamt (tax office)',
        'Get tax number (Steuernummer)',
        'Register for health insurance',
        'May need to register with professional chamber',
      ],
    },
  ],
});

/**
 * Family Reunification Visa - For family members of residents
 */
export const familyReunificationVisa: FlowchartDefinition = buildFlowchart({
  programId: 'de_family_reunification',
  countryCode: 'DE',
  programName: 'Family Reunification Visa',
  complexity: 'medium',
  successRate: '85%',
  totalEstimatedDuration: '3-6 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->verify-sponsor{Sponsor in Germany?}
  verify-sponsor -->|Yes| relationship-proof[Determine Sponsor Type]
  verify-sponsor -->|No| End1([Not Eligible])
  relationship-proof --> language-requirement{Language Required?}
  language-requirement -->|Yes| financial-requirements[Obtain A1 Certificate]
  language-requirement -->|No| health-insurance[Arrange Insurance]
  financial-requirements --> health-insurance
  health-insurance --> gather-documents[Gather Documents]
  gather-documents --> submit-application[Submit Application]
  submit-application --> processing[Wait for Processing<br/>2-3 months]
  processing --> decision{Decision}
  decision -->|Approved| travel[Receive Visa]
  decision -->|Rejected| End2([Process Ended])
  travel --> registration[Travel to Germany]
  registration --> Success([Reunited in Germany])`,
  steps: [
    {
      id: 'verify-sponsor',
      title: 'Verify Sponsor Eligibility',
      description: 'Ensure sponsor meets requirements',
      estimatedDuration: '1 week',
      documents: [
        "Sponsor's residence permit",
        'Proof of relationship',
        "Sponsor's employment contract",
        "Sponsor's income proof",
      ],
      notes: [
        'Sponsor must have valid residence permit',
        'Sponsor must have adequate living space',
        'Sponsor must have sufficient income',
        'Different requirements for different family members',
      ],
    },
    {
      id: 'relationship-proof',
      title: 'Prove Relationship',
      description: 'Document family relationship',
      estimatedDuration: '1-2 weeks',
      documents: [
        'Marriage certificate (for spouse)',
        'Birth certificate (for children/parents)',
        'Partnership certificate (for registered partners)',
      ],
      notes: [
        'Documents must be apostilled',
        'Translations required (certified)',
        'Recent documents preferred',
      ],
    },
    {
      id: 'language-requirement',
      title: 'Meet Language Requirement',
      description: 'Obtain German language certificate if required',
      estimatedDuration: '2-6 months',
      documents: ['German A1 certificate (for spouses)'],
      isConditional: true,
      condition: 'Required for spouses (some exceptions apply)',
      notes: [
        'Spouses typically need A1 level',
        "Exceptions for highly skilled workers' families",
        "Exceptions for EU Blue Card holders' families",
        'Children under 16 exempt',
      ],
    },
    {
      id: 'financial-requirements',
      title: 'Meet Financial Requirements',
      description: 'Sponsor shows adequate income and housing',
      estimatedDuration: '1-2 weeks',
      documents: [
        "Sponsor's employment contract",
        "Sponsor's salary slips (last 3 months)",
        'Rental contract or property deed',
        'Proof of adequate living space',
      ],
      notes: [
        'Income must cover entire family',
        'Living space requirements vary by family size',
        'Typically need 12m² per person + 10m² base',
      ],
    },
    {
      id: 'health-insurance',
      title: 'Arrange Health Insurance',
      description: 'Obtain health insurance coverage',
      estimatedDuration: '1 week',
      documents: ['Health insurance confirmation'],
      notes: [
        "Can be added to sponsor's insurance",
        'Must cover from arrival date',
        'Private or public insurance accepted',
      ],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        additionalDocuments: [
          'Relationship proof',
          'Language certificate (if required)',
          "Sponsor's documents",
        ],
      },
    },
    {
      template: COMMON_STEP_IDS.SUBMIT_APPLICATION,
      options: {
        additionalNotes: [
          'Apply at embassy in country of residence',
          'Processing times vary by location',
        ],
      },
    },
    { template: COMMON_STEP_IDS.PROCESSING },
    {
      id: 'decision',
      title: 'Receive Decision',
      description: 'Get notification of approval or rejection',
      estimatedDuration: '1 week',
      documents: [],
      isConditional: true,
      condition: 'Application approved',
      notes: [
        'If approved, passport will be stamped with visa',
        'If rejected, you can appeal within 1 month',
      ],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'family reunification visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        additionalDocuments: ['Marriage/birth certificate'],
        additionalNotes: [
          'Register at local Bürgeramt within 2 weeks',
          'Apply for residence permit at Ausländerbehörde',
          'Enroll children in school if applicable',
        ],
      },
    },
  ],
});

/**
 * Export all Germany flowcharts as a record for compatibility with existing system
 */
export const germanyFlowchartsNew: Record<string, FlowchartDefinition> = {
  de_eu_blue_card: euBlueCard,
  de_work_visa: skilledWorkerVisa,
  de_job_seeker: jobSeekerVisa,
  de_freelance: freelanceVisa,
  de_family_reunification: familyReunificationVisa,
};
