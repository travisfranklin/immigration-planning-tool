/**
 * Finland Immigration Programs
 *
 * Built using the template-based composition system.
 * Finland has 5 main programs:
 * 1. Specialist Permit
 * 2. EU Blue Card
 * 3. Startup Entrepreneur Permit
 * 4. Self-Employment Permit
 * 5. Family Reunification
 */

import type { FlowchartDefinition } from '../../../types/flowchart';
import { buildFlowchart } from '../builders';
import { COMMON_STEP_IDS } from '../templates/types';

/**
 * Specialist Permit - For skilled workers
 */
export const specialistPermit: FlowchartDefinition = buildFlowchart({
  programId: 'fi_specialist',
  countryCode: 'FI',
  programName: 'Residence Permit for Specialists',
  complexity: 'medium',
  successRate: '85%',
  totalEstimatedDuration: '3-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer --> salary{"Salary >= EUR 3,000/month?"}
  salary -->|Yes| gather-documents[Gather Required Documents]
  salary -->|No| End1([Not Eligible])
  gather-documents --> submit-application[Submit Application]
  submit-application --> processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Specialist Permit]
  decision -->|Rejected| End2([Process Ended])
  visa --> travel[Travel to Finland]
  travel --> registration[Register with DVV]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 36000,
        additionalNotes: ['Employer does NOT need to be on any special list', 'No specific education requirement if you have sufficient professional experience', 'Lower salary threshold than EU Blue Card (EUR 36,000 vs EUR 45,924)'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['Educational qualifications or professional experience', 'Criminal background check', 'Accommodation proof'],
        additionalNotes: ['All documents in Finnish, Swedish, or English'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 520 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '60-90 days' } },
    {
      id: 'visa',
      title: 'Receive Specialist Permit',
      description: 'Collect your residence permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for up to 2 years', 'Renewable', 'Can apply for permanent residence after 4 years'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Specialist Permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'DVV (Digital and Population Data Services Agency)',
        additionalNotes: ['Register within 1 week of arrival', 'Get Finnish personal identity code'],
      },
    },
  ],
});

/**
 * EU Blue Card - For highly skilled workers
 */
export const euBlueCard: FlowchartDefinition = buildFlowchart({
  programId: 'fi_eu_blue_card',
  countryCode: 'FI',
  programName: 'EU Blue Card',
  complexity: 'medium',
  successRate: '85%',
  totalEstimatedDuration: '3-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer --> salary{"Salary >= EUR 3,827/month?"}
  salary -->|Yes| gather-documents[Gather Required Documents]
  salary -->|No| End1([Not Eligible])
  gather-documents --> submit-application[Submit Application]
  submit-application --> processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Blue Card]
  decision -->|Rejected| End2([Process Ended])
  visa --> travel[Travel to Finland]
  travel --> registration[Register with DVV]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 45924,
        additionalNotes: ['Higher salary threshold than Specialist permit (EUR 45,924 vs EUR 36,000)', 'Must be highly skilled occupation (ISCO level 1-3)', 'Bachelor degree required OR 5 years professional experience', 'Can work for any employer after 2 years'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['University degree (apostilled)', 'Criminal background check', 'Accommodation proof'],
        additionalNotes: ['All documents in Finnish, Swedish, or English'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 520 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '60-90 days' } },
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
        registrationAuthority: 'DVV (Digital and Population Data Services Agency)',
        additionalNotes: ['Register within 1 week of arrival', 'Get Finnish personal identity code'],
      },
    },
  ],
});

/**
 * Startup Entrepreneur Permit - For innovative entrepreneurs
 */
export const startupPermit: FlowchartDefinition = buildFlowchart({
  programId: 'fi_startup',
  countryCode: 'FI',
  programName: 'Startup Entrepreneur Permit',
  complexity: 'high',
  successRate: '65%',
  totalEstimatedDuration: '3-5 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->business-idea[Develop Business Idea]
  business-idea -->business-plan[Create Business Plan]
  business-plan -->accelerator[Apply to Accelerator]
  accelerator -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Startup Permit]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Finland]
  travel -->registration[Register with DVV]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'business-idea',
      title: 'Develop Innovative Startup Idea',
      description: 'Create an innovative, scalable business concept suitable for the Finnish startup ecosystem',
      estimatedDuration: '1-2 months',
      documents: ['Business concept description', 'Market research and analysis', 'Competitive landscape overview', 'Innovation and scalability potential'],
      notes: ['Focus on tech, cleantech, health tech, or other innovation sectors', 'Helsinki and Espoo have vibrant startup ecosystems'],
    },
    {
      id: 'business-plan',
      title: 'Prepare Detailed Business Plan',
      description: 'Create comprehensive business plan for accelerator approval',
      estimatedDuration: '2-4 weeks',
      documents: ['Executive summary', 'Financial projections (3-5 years)', 'Marketing strategy', 'Organizational structure'],
      notes: ['Plan must be in English or Finnish', 'Include realistic financial forecasts'],
    },
    {
      id: 'accelerator',
      title: 'Apply to Accelerator',
      description: 'Submit application to Business Finland or approved accelerator',
      estimatedDuration: '4-8 weeks',
      documents: ['Business plan', 'Proof of funds', 'Team CVs'],
      notes: ['Business Finland evaluates innovation potential', 'Endorsement required for visa'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        includeFinancial: true,
        additionalDocuments: ['Business Finland endorsement', 'Criminal background check'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 520 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '60-90 days' } },
    {
      id: 'visa',
      title: 'Receive Startup Permit',
      description: 'Collect your startup entrepreneur permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial permit for 2 years', 'Renewable', 'Must maintain business activity'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Startup Permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'DVV (Digital and Population Data Services Agency)',
        additionalNotes: ['Register within 1 week of arrival', 'Register business with Trade Register'],
      },
    },
  ],
});

/**
 * Self-Employment Permit
 */
export const selfEmploymentPermit: FlowchartDefinition = buildFlowchart({
  programId: 'fi_self_employment',
  countryCode: 'FI',
  programName: 'Self-Employment Permit',
  complexity: 'high',
  successRate: '65%',
  totalEstimatedDuration: '3-5 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->business-plan[Create Business Plan]
  business-plan -->capital[Secure Capital EUR 17,500]
  capital -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Self-Employment Permit]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Finland]
  travel -->registration[Register with DVV]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'business-plan',
      title: 'Develop Business Plan',
      description: 'Create comprehensive business plan',
      estimatedDuration: '2-4 weeks',
      documents: ['Business plan', 'Market analysis', 'Financial projections'],
      notes: ['Must demonstrate viability', 'EUR 17,500 minimum savings', 'PR in 4 years, citizenship in 5 years'],
    },
    {
      id: 'capital',
      title: 'Secure Capital',
      description: 'Obtain minimum EUR 17,500 in startup capital',
      estimatedDuration: '2-4 weeks',
      documents: ['Bank statements', 'Proof of capital source'],
      notes: ['Minimum EUR 17,500 required', 'Funds must be available'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        includeFinancial: true,
        additionalDocuments: ['Proof of funds', 'Qualifications', 'Health insurance'],
        additionalNotes: ['All documents in Finnish, Swedish, or English'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 520 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '60-90 days' } },
    {
      id: 'visa',
      title: 'Receive Self-Employment Permit',
      description: 'Collect your self-employment permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial permit for 1 year', 'Renewable', 'Must maintain business activity'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Self-Employment Permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'DVV (Digital and Population Data Services Agency)',
        additionalNotes: ['Register within 1 week of arrival', 'Register business with Trade Register'],
      },
    },
  ],
});

/**
 * Family Reunification
 */
export const familyReunification: FlowchartDefinition = buildFlowchart({
  programId: 'fi_family_reunification',
  countryCode: 'FI',
  programName: 'Family Reunification',
  complexity: 'medium',
  successRate: '75%',
  totalEstimatedDuration: '3-6 months',
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
  visa -->travel[Travel to Finland]
  travel -->registration[Register with DVV]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'sponsor-check',
      title: 'Check Eligibility',
      description: 'Verify sponsor has valid residence permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Sponsor residence permit', 'Proof of relationship'],
      notes: ['Sponsor must have valid permit', 'Spouse, children eligible', 'Income requirement applies'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        additionalDocuments: ['Marriage/birth certificate', 'Proof of accommodation', 'Proof of income (EUR 1,400/month)', 'Health insurance'],
        additionalNotes: ['All documents must be apostilled', 'Translations to Finnish or Swedish'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 520 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '3-6 months' } },
    {
      id: 'visa',
      title: 'Receive Family Visa',
      description: 'Collect visa from embassy',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Visa valid for 90 days', 'Must enter Finland and apply for residence permit'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'family reunification visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'DVV (Digital and Population Data Services Agency)',
        additionalNotes: ['Register within 1 week of arrival', 'Apply for residence permit', 'Get Finnish personal identity code'],
      },
    },
  ],
});

/**
 * Export all Finland flowcharts as a record for compatibility with existing system
 */
export const finlandFlowchartsNew: Record<string, FlowchartDefinition> = {
  specialist: specialistPermit,
  eu_blue_card: euBlueCard,
  startup: startupPermit,
  self_employment: selfEmploymentPermit,
  family_reunification: familyReunification,
};

