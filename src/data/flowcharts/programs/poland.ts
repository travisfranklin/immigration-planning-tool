/**
 * Poland Immigration Programs
 *
 * Built using the template-based composition system.
 * Poland has 5 main programs:
 * 1. EU Blue Card
 * 2. Poland Business Harbour
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
  programId: 'pl_eu_blue_card',
  countryCode: 'PL',
  programName: 'EU Blue Card',
  complexity: 'medium',
  successRate: '85%',
  totalEstimatedDuration: '2-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer --> salary{"Salary >= PLN 8,000/month?"}
  salary -->|Yes| gather-documents[Gather Required Documents]
  salary -->|No| End1([Not Eligible])
  gather-documents --> submit-application[Submit Application]
  submit-application --> processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Blue Card]
  decision -->|Rejected| End2([Process Ended])
  visa --> travel[Travel to Poland]
  travel --> registration[Register with Voivodeship Office]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 96000,
        additionalNotes: ['Growing tech hub', 'Low cost of living', 'Central European location'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['University degree (apostilled)', 'Criminal background check', 'Accommodation proof'],
        additionalNotes: ['All documents must be apostilled', 'Translations to Polish required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 440 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-90 days' } },
    {
      id: 'visa',
      title: 'Receive Blue Card',
      description: 'Collect your EU Blue Card',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial Blue Card valid for 3 years', 'Renewable', 'Can apply for permanent residence after 5 years'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'EU Blue Card' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Voivodeship Office',
        additionalNotes: ['Register within 4 days of arrival', 'Get residence permit card'],
      },
    },
  ],
});

/**
 * Poland Business Harbour - For IT professionals
 */
export const businessHarbour: FlowchartDefinition = buildFlowchart({
  programId: 'pl_business_harbour',
  countryCode: 'PL',
  programName: 'Poland Business Harbour',
  complexity: 'medium',
  successRate: '85%',
  totalEstimatedDuration: '2-4 weeks',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->it-verification{IT Professional?}
  it-verification -->|Yes| gather-documents[Gather Required Documents]
  it-verification -->|No| End1([Not Eligible])
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Business Harbour Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Poland]
  travel -->registration[Register with Voivodeship Office]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'it-verification',
      title: 'Verify IT Professional Status',
      description: 'Confirm IT professional qualifications',
      estimatedDuration: '1 week',
      documents: ['IT qualifications', 'Work experience proof', 'Job offer or contract'],
      notes: ['Fast-track for IT professionals', 'Popular for tech workers from Belarus, Ukraine, Russia'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['IT qualifications', 'Criminal background check'],
        additionalNotes: ['Simplified document requirements', 'Translations to Polish or English'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 80 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '7-14 days' } },
    {
      id: 'visa',
      title: 'Receive Business Harbour Visa',
      description: 'Collect your Business Harbour visa',
      estimatedDuration: '1 week',
      documents: ['Passport'],
      notes: ['Valid for 1 year', 'Renewable', 'Fast-track processing'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Business Harbour Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Voivodeship Office',
        additionalNotes: ['Register within 4 days of arrival'],
      },
    },
  ],
});

/**
 * Work Permit - Standard work visa
 */
export const workPermit: FlowchartDefinition = buildFlowchart({
  programId: 'pl_work_permit',
  countryCode: 'PL',
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
  visa -->travel[Travel to Poland]
  travel -->registration[Register with Voivodeship Office]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 36000,
        additionalNotes: ['Growing tech hub', 'Low cost of living', 'Employer must prove no suitable Polish/EU candidate'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['Educational qualifications', 'Criminal background check', 'Medical certificate'],
        additionalNotes: ['All documents must be apostilled', 'Translations to Polish required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 440 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-90 days' } },
    {
      id: 'visa',
      title: 'Receive Work Permit',
      description: 'Collect your work permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for duration of contract (max 3 years)', 'Renewable', 'Tied to employer initially'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'work permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Voivodeship Office',
        additionalNotes: ['Register within 4 days of arrival', 'Get residence permit card'],
      },
    },
  ],
});

/**
 * Self-Employment Visa
 */
export const selfEmployment: FlowchartDefinition = buildFlowchart({
  programId: 'pl_self_employment',
  countryCode: 'PL',
  programName: 'Self-Employment Visa',
  complexity: 'high',
  successRate: '70%',
  totalEstimatedDuration: '3-5 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->business-plan[Create Business Plan]
  business-plan -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Self-Employment Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Poland]
  travel -->registration[Register with Voivodeship Office]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'business-plan',
      title: 'Develop Business Plan',
      description: 'Create comprehensive business plan',
      estimatedDuration: '2-4 weeks',
      documents: ['Business plan', 'Market analysis', 'Financial projections'],
      notes: ['Must demonstrate viability', 'Low cost of living', 'Growing business hub'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        includeFinancial: true,
        additionalDocuments: ['Proof of funds', 'Qualifications', 'Criminal background check'],
        additionalNotes: ['All documents must be apostilled', 'Translations to Polish required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 440 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '60-120 days' } },
    {
      id: 'visa',
      title: 'Receive Self-Employment Visa',
      description: 'Collect your self-employment visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial permit for 3 years', 'Renewable', 'Must maintain business activity'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Self-Employment Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Voivodeship Office',
        additionalNotes: ['Register within 4 days of arrival', 'Register business with KRS'],
      },
    },
  ],
});

/**
 * Family Reunification
 */
export const familyReunification: FlowchartDefinition = buildFlowchart({
  programId: 'pl_family_reunification',
  countryCode: 'PL',
  programName: 'Family Reunification',
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
  visa -->travel[Travel to Poland]
  travel -->registration[Register with Voivodeship Office]
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
        additionalNotes: ['All documents must be apostilled', 'Translations to Polish required'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 440 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '30-90 days' } },
    {
      id: 'visa',
      title: 'Receive Family Visa',
      description: 'Collect visa from consulate',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Visa valid for 90 days', 'Must enter Poland and apply for residence permit'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'family reunification visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Voivodeship Office',
        additionalNotes: ['Register within 4 days of arrival', 'Apply for residence permit'],
      },
    },
  ],
});

/**
 * Export all Poland flowcharts as a record for compatibility with existing system
 */
export const polandFlowchartsNew: Record<string, FlowchartDefinition> = {
  pl_eu_blue_card: euBlueCard,
  pl_business_harbour: businessHarbour,
  pl_work_permit: workPermit,
  pl_self_employment: selfEmployment,
  pl_family_reunification: familyReunification,
};

