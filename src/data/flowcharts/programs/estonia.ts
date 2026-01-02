/**
 * Estonia Immigration Programs
 *
 * Built using the template-based composition system.
 * Estonia has 5 main programs:
 * 1. Digital Nomad Visa
 * 2. E-Residency Business
 * 3. Startup Visa
 * 4. EU Blue Card
 * 5. Family Reunification
 */

import type { FlowchartDefinition } from '../../../types/flowchart';
import { buildFlowchart } from '../builders';
import { COMMON_STEP_IDS } from '../templates/types';

/**
 * Digital Nomad Visa - For remote workers
 */
export const digitalNomadVisa: FlowchartDefinition = buildFlowchart({
  programId: 'ee_digital_nomad',
  countryCode: 'EE',
  programName: 'Digital Nomad Visa',
  complexity: 'low',
  successRate: '90%',
  totalEstimatedDuration: '1-2 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->remote-work-verification{Work Remotely?}
  remote-work-verification -->|Yes| income-verification{Income >= EUR 3,500/month?}
  remote-work-verification -->|No| End1([Not Eligible])
  income-verification -->|Yes| gather-documents[Gather Required Documents]
  income-verification -->|No| End1
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Digital Nomad Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Estonia]
  travel -->registration[Register with Police and Border Guard]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'remote-work-verification',
      title: 'Verify Remote Work Status',
      description: 'Confirm remote employment or freelance contracts',
      estimatedDuration: '1 week',
      documents: ['Employment contract or freelance contracts', 'Proof of income (EUR 3,500/month)'],
      notes: ['Most tech-forward country in EU!', 'E-government services', 'Tallinn startup ecosystem'],
    },
    {
      id: 'income-verification',
      title: 'Verify Income Requirement',
      description: 'Confirm monthly income of at least EUR 3,500',
      estimatedDuration: '1 week',
      documents: ['Bank statements', 'Pay stubs', 'Tax returns'],
      notes: ['Minimum EUR 3,500/month required', 'Must be from non-Estonian sources'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['Proof of remote work', 'Proof of income', 'Health insurance', 'Accommodation proof'],
        additionalNotes: ['Fast processing (30 days)', 'Apply online through Estonian e-services'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 100 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30 days' } },
    {
      id: 'visa',
      title: 'Receive Digital Nomad Visa',
      description: 'Collect your digital nomad visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for 1 year', 'Non-renewable (must leave for 6 months)', 'No Estonian income tax on foreign earnings'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Digital Nomad Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Police and Border Guard Board',
        additionalNotes: ['Register within 3 days of arrival', 'Get Estonian ID code'],
      },
    },
  ],
});

/**
 * E-Residency Business - Unique Estonian program
 */
export const eResidencyBusiness: FlowchartDefinition = buildFlowchart({
  programId: 'ee_e_residency_business',
  countryCode: 'EE',
  programName: 'E-Residency Business',
  complexity: 'low',
  successRate: '95%',
  totalEstimatedDuration: '2-3 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->e-residency[Apply for E-Residency]
  e-residency -->card[Receive E-Residency Card]
  card -->company[Register Estonian Company]
  company -->bank[Open Business Bank Account]
  bank --> Success([Process Complete])`,
  steps: [
    {
      id: 'e-residency',
      title: 'Apply for E-Residency',
      description: "Apply for Estonia's unique E-Residency program",
      estimatedDuration: '4-6 weeks',
      documents: ['E-Residency application', 'Fee (EUR 100-200)', 'ID documents', 'Passport copy'],
      notes: ['UNIQUE E-Residency program!', 'Run Estonian company remotely', 'Digital identity for non-residents'],
    },
    {
      id: 'card',
      title: 'Receive E-Residency Card',
      description: 'Collect your E-Residency card from pickup location',
      estimatedDuration: '1-2 weeks',
      documents: ['Approval notification', 'Passport', 'E-Residency card'],
      notes: ['Pick up at Estonian embassy or in Estonia', 'Digital ID card with chip', 'Enables digital signatures'],
    },
    {
      id: 'company',
      title: 'Register Estonian Company',
      description: 'Register your company online using E-Residency',
      estimatedDuration: '1-2 weeks',
      documents: ['E-Residency card', 'Company registration documents', 'Business plan', 'Registered office address in Estonia'],
      notes: ['Can register 100% online', 'No need to visit Estonia', 'Low corporate tax (0% on retained earnings)', 'EU company benefits'],
    },
    {
      id: 'bank',
      title: 'Open Business Bank Account',
      description: 'Open a business bank account for your Estonian company',
      estimatedDuration: '1-2 weeks',
      documents: ['E-Residency card', 'Company registration documents', 'Business plan', 'Proof of identity'],
      notes: ['Several fintech options available', 'Traditional banks may require in-person visit', 'Wise, Payoneer, LHV Bank popular choices'],
    },
  ],
});

/**
 * Startup Visa - For innovative entrepreneurs
 */
export const startupVisa: FlowchartDefinition = buildFlowchart({
  programId: 'ee_startup_visa',
  countryCode: 'EE',
  programName: 'Startup Visa',
  complexity: 'high',
  successRate: '70%',
  totalEstimatedDuration: '2-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->business-idea[Develop Business Idea]
  business-idea -->business-plan[Create Business Plan]
  business-plan -->startup-estonia[Apply to Startup Estonia]
  startup-estonia -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Startup Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Estonia]
  travel -->registration[Register with Police and Border Guard]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'business-idea',
      title: 'Develop Innovative Startup Idea',
      description: "Create an innovative, scalable business concept suitable for Estonia's tech ecosystem",
      estimatedDuration: '1-2 months',
      documents: ['Business concept description', 'Market research and analysis', 'Competitive landscape overview', 'Innovation and scalability potential'],
      notes: ['Estonia is the most tech-forward country in EU!', 'Tallinn has vibrant startup ecosystem (Skype, Wise, Bolt originated here)'],
    },
    {
      id: 'business-plan',
      title: 'Prepare Detailed Business Plan',
      description: 'Create comprehensive business plan for Startup Estonia Committee approval',
      estimatedDuration: '2-4 weeks',
      documents: ['Executive summary', 'Financial projections (3-5 years)', 'Marketing strategy', 'Organizational structure'],
      notes: ['Plan must be in English', 'Include realistic financial forecasts'],
    },
    {
      id: 'startup-estonia',
      title: 'Apply to Startup Estonia',
      description: 'Submit application to Startup Estonia Committee for endorsement',
      estimatedDuration: '2-4 weeks',
      documents: ['Business plan', 'Proof of funds', 'Team CVs'],
      notes: ['Committee evaluates innovation potential', 'Endorsement required for visa'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        includeFinancial: true,
        additionalDocuments: ['Startup Estonia endorsement', 'Criminal background check'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 160 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-60 days' } },
    {
      id: 'visa',
      title: 'Receive Startup Visa',
      description: 'Collect your startup visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial visa for 1 year', 'Renewable for up to 5 years', 'Must maintain business activity'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Startup Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Police and Border Guard Board',
        additionalNotes: ['Register within 3 days of arrival', 'Register business with Commercial Register'],
      },
    },
  ],
});

/**
 * EU Blue Card - For highly skilled workers
 */
export const euBlueCard: FlowchartDefinition = buildFlowchart({
  programId: 'ee_eu_blue_card',
  countryCode: 'EE',
  programName: 'EU Blue Card',
  complexity: 'medium',
  successRate: '85%',
  totalEstimatedDuration: '2-3 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer --> salary{"Salary >= EUR 2,000/month?"}
  salary -->|Yes| gather-documents[Gather Required Documents]
  salary -->|No| End1([Not Eligible])
  gather-documents --> submit-application[Submit Application]
  submit-application --> processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Blue Card]
  decision -->|Rejected| End2([Process Ended])
  visa --> travel[Travel to Estonia]
  travel --> registration[Register with Police and Border Guard]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 24000,
        additionalNotes: ['Most tech-forward country in EU!', 'Much lower salary threshold than most EU countries', 'Tallinn has vibrant tech ecosystem (Skype, Wise, Bolt)'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['University degree (apostilled)', 'Criminal background check', 'Accommodation proof'],
        additionalNotes: ['All documents must be apostilled', 'Digital-first process'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 160 } },
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
        registrationAuthority: 'Police and Border Guard Board',
        additionalNotes: ['Register within 3 days of arrival', 'Get Estonian ID code'],
      },
    },
  ],
});

/**
 * Family Reunification
 */
export const familyReunification: FlowchartDefinition = buildFlowchart({
  programId: 'ee_family_reunification',
  countryCode: 'EE',
  programName: 'Family Reunification Visa',
  complexity: 'medium',
  successRate: '80%',
  totalEstimatedDuration: '2-3 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->sponsor-check{Sponsor Eligible?}
  sponsor-check -->|Yes| gather-documents[Gather Required Documents]
  sponsor-check -->|No| End1([Not Eligible])
  gather-documents -->submit-application[Submit at Embassy]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Estonia]
  travel -->registration[Register with Police and Border Guard]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'sponsor-check',
      title: 'Check Eligibility',
      description: 'Verify sponsor has valid residence permit',
      estimatedDuration: '1 week',
      documents: ['Sponsor residence permit', 'Proof of relationship'],
      notes: ['Sponsor must have valid permit', 'Spouse, children, parents eligible', 'E-residency available'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        additionalDocuments: ['Marriage/birth certificate', 'Proof of accommodation', 'Proof of income', 'Health insurance'],
        additionalNotes: ['All documents must be apostilled', 'Digital-first process'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 160 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-60 days' } },
    {
      id: 'visa',
      title: 'Receive Family Visa',
      description: 'Collect visa from embassy',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Visa valid for 90 days', 'Must enter Estonia and apply for residence permit'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'family reunification visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Police and Border Guard Board',
        additionalNotes: ['Register within 3 days of arrival', 'Apply for residence permit', 'Get Estonian ID code'],
      },
    },
  ],
});

/**
 * Export all Estonia flowcharts as a record for compatibility with existing system
 */
export const estoniaFlowchartsNew: Record<string, FlowchartDefinition> = {
  ee_digital_nomad: digitalNomadVisa,
  ee_e_residency_business: eResidencyBusiness,
  ee_startup_visa: startupVisa,
  ee_eu_blue_card: euBlueCard,
  ee_family_reunification: familyReunification,
};

