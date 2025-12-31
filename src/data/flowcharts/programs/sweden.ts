/**
 * Sweden Immigration Programs
 *
 * Built using the template-based composition system.
 * Sweden has 5 main programs:
 * 1. Work Permit
 * 2. EU Blue Card
 * 3. Self-Employment
 * 4. Family Reunification
 * 5. Researcher Visa
 */

import type { FlowchartDefinition } from '../../../types/flowchart';
import { buildFlowchart } from '../builders';
import { COMMON_STEP_IDS } from '../templates/types';

/**
 * Work Permit - Standard work visa
 */
export const workPermit: FlowchartDefinition = buildFlowchart({
  programId: 'se_work_permit',
  countryCode: 'SE',
  programName: 'Work Permit',
  complexity: 'medium',
  successRate: '85%',
  totalEstimatedDuration: '2-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer --> salary{"Salary >= SEK 27,360/month?"}
  salary -->|Yes| gather-documents[Gather Required Documents]
  salary -->|No| End1([Not Eligible])
  gather-documents --> submit-application[Submit Application]
  submit-application --> processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Work Permit]
  decision -->|Rejected| End2([Process Ended])
  visa --> travel[Travel to Sweden]
  travel --> registration[Register with Migration Agency]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 328320,
        additionalNotes: ['High quality of life', 'Strong worker protections', 'Minimum salary requirement applies'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['Employment contract', 'Union agreement', 'Accommodation proof'],
        additionalNotes: ['Employer must offer terms equal to Swedish collective agreements'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 2000 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-120 days' } },
    {
      id: 'visa',
      title: 'Receive Work Permit',
      description: 'Collect your work permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for duration of contract (max 2 years)', 'Renewable', 'Can apply for permanent residence after 4 years'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'work permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Swedish Migration Agency',
        additionalNotes: ['Register with Tax Agency for personnummer', 'Get residence permit card'],
      },
    },
  ],
});

/**
 * EU Blue Card - For highly skilled workers
 */
export const euBlueCard: FlowchartDefinition = buildFlowchart({
  programId: 'se_eu_blue_card',
  countryCode: 'SE',
  programName: 'EU Blue Card',
  complexity: 'medium',
  successRate: '85%',
  totalEstimatedDuration: '2-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer --> salary{"Salary >= SEK 54,000/month?"}
  salary -->|Yes| gather-documents[Gather Required Documents]
  salary -->|No| End1([Not Eligible])
  gather-documents --> submit-application[Submit Application]
  submit-application --> processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Blue Card]
  decision -->|Rejected| End2([Process Ended])
  visa --> travel[Travel to Sweden]
  travel --> registration[Register with Migration Agency]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 648000,
        additionalNotes: ['High salary threshold', 'High quality of life', 'Strong worker protections'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['University degree (apostilled)', 'Criminal background check', 'Accommodation proof'],
        additionalNotes: ['Degree must be equivalent to Swedish higher education'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 2000 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-90 days' } },
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
        registrationAuthority: 'Swedish Migration Agency',
        additionalNotes: ['Register with Tax Agency for personnummer', 'Get residence permit card'],
      },
    },
  ],
});

/**
 * Self-Employment Visa
 */
export const selfEmployment: FlowchartDefinition = buildFlowchart({
  programId: 'se_self_employment',
  countryCode: 'SE',
  programName: 'Self-Employment Visa',
  complexity: 'high',
  successRate: '60%',
  totalEstimatedDuration: '4-8 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->business-plan[Create Business Plan]
  business-plan -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Self-Employment Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Sweden]
  travel -->registration[Register with Migration Agency]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'business-plan',
      title: 'Develop Business Plan',
      description: 'Create comprehensive business plan',
      estimatedDuration: '2-4 weeks',
      documents: ['Business plan', 'Market analysis', 'Financial projections'],
      notes: ['Must demonstrate viability for 2 years', 'High capital requirements', 'Strict requirements'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        includeFinancial: true,
        additionalDocuments: ['Proof of funds (SEK 200,000+)', 'Qualifications', 'Criminal background check'],
        additionalNotes: ['Must prove sufficient funds to support yourself and business'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 2000 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '90-180 days' } },
    {
      id: 'visa',
      title: 'Receive Self-Employment Visa',
      description: 'Collect your self-employment visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial permit for 2 years', 'Renewable', 'Must maintain business activity'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Self-Employment Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Swedish Migration Agency',
        additionalNotes: ['Register with Tax Agency for personnummer', 'Register business with Bolagsverket'],
      },
    },
  ],
});

/**
 * Family Reunification
 */
export const familyReunification: FlowchartDefinition = buildFlowchart({
  programId: 'se_family_reunification',
  countryCode: 'SE',
  programName: 'Family Reunification',
  complexity: 'medium',
  successRate: '80%',
  totalEstimatedDuration: '6-12 months',
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
  visa -->travel[Travel to Sweden]
  travel -->registration[Register with Migration Agency]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'sponsor-check',
      title: 'Check Eligibility',
      description: 'Verify sponsor has valid residence permit',
      estimatedDuration: '1 week',
      documents: ['Sponsor residence permit', 'Proof of relationship'],
      notes: ['Sponsor must have valid permit', 'Must meet maintenance requirement', 'Spouse, children, parents eligible'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        additionalDocuments: ['Marriage/birth certificate', 'Proof of accommodation', 'Proof of income', 'Health insurance'],
        additionalNotes: ['Maintenance requirement: sufficient income and housing'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 1500 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '6-12 months' } },
    {
      id: 'visa',
      title: 'Receive Family Visa',
      description: 'Collect visa from consulate',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Long processing times', 'Must enter Sweden and apply for residence permit'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'family reunification visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Swedish Migration Agency',
        additionalNotes: ['Register with Tax Agency for personnummer', 'Get residence permit card'],
      },
    },
  ],
});

/**
 * Researcher Visa
 */
export const researcher: FlowchartDefinition = buildFlowchart({
  programId: 'se_researcher',
  countryCode: 'SE',
  programName: 'Researcher Visa',
  complexity: 'medium',
  successRate: '90%',
  totalEstimatedDuration: '2-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->hosting-agreement[Secure Hosting Agreement]
  hosting-agreement -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Researcher Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Sweden]
  travel -->registration[Register with Migration Agency]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'hosting-agreement',
      title: 'Secure Hosting Agreement',
      description: 'Obtain hosting agreement from Swedish research institution',
      estimatedDuration: '1-3 months',
      documents: ['Hosting agreement', 'Research proposal', 'CV'],
      notes: ['Must be with approved research institution', 'PhD or equivalent required'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['PhD certificate', 'Hosting agreement', 'Criminal background check'],
        additionalNotes: ['Degree must be equivalent to Swedish PhD'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 1500 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-90 days' } },
    {
      id: 'visa',
      title: 'Receive Researcher Visa',
      description: 'Collect your researcher visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for duration of research (max 2 years)', 'Renewable', 'Can apply for permanent residence after 4 years'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Researcher Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Swedish Migration Agency',
        additionalNotes: ['Register with Tax Agency for personnummer', 'Get residence permit card'],
      },
    },
  ],
});

/**
 * Export all Sweden flowcharts as a record for compatibility with existing system
 */
export const swedenFlowchartsNew: Record<string, FlowchartDefinition> = {
  work_permit: workPermit,
  eu_blue_card: euBlueCard,
  self_employment: selfEmployment,
  family_reunification: familyReunification,
  researcher: researcher,
};

