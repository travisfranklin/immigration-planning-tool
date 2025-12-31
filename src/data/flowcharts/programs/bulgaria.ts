/**
 * Bulgaria Immigration Programs
 *
 * Built using the template-based composition system.
 * Bulgaria has 5 main programs:
 * 1. EU Blue Card
 * 2. Startup Visa
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
  programId: 'bg_eu_blue_card',
  countryCode: 'BG',
  programName: 'EU Blue Card',
  complexity: 'medium',
  successRate: '85%',
  totalEstimatedDuration: '2-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer --> salary{Salary >= EUR 9,933/year?}
  salary -->|Yes| verify-education{Higher Education?}
  salary -->|No| End1([Not Eligible])
  verify-education -->|Yes| gather-documents[Gather Required Documents]
  verify-education -->|No| End1
  gather-documents --> submit-application[Submit Application]
  submit-application --> processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Blue Card]
  decision -->|Rejected| End2([Process Ended])
  visa --> travel[Travel to Bulgaria]
  travel --> registration[Register with Migration Directorate]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 9933,
        additionalNotes: ['LOWEST salary threshold in EU!', 'LOWEST cost of living in EU!', '10% flat tax rate', 'Sofia has growing tech scene'],
      },
    },
    {
      id: 'verify-education',
      title: 'Verify Higher Education Requirement',
      description: "Ensure you have a higher education degree (Bachelor's or higher)",
      estimatedDuration: '1-2 weeks',
      documents: ["University degree (Bachelor's, Master's, or PhD)", 'Diploma translation (if not in Bulgarian or English)', 'Diploma apostille (Hague Convention)'],
      notes: ["Bachelor's degree minimum", "Master's or PhD preferred", 'Degree must be recognized in Bulgaria'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['University degree (apostilled)', 'Proof of qualifications'],
        additionalNotes: ['All documents must be certified copies', 'Non-Bulgarian documents need translation', 'Apostille required for foreign documents'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 100 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '4-8 weeks' } },
    {
      id: 'visa',
      title: 'Receive Blue Card',
      description: 'Collect your EU Blue Card',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial Blue Card valid for 4 years', 'Renewable', 'Can apply for permanent residence after 5 years'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'EU Blue Card' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Migration Directorate',
        additionalNotes: ['Register within 5 days of arrival', 'Get Bulgarian ID card', 'Register with social security'],
      },
    },
  ],
});

/**
 * Startup Visa - For innovative entrepreneurs
 */
export const startupVisa: FlowchartDefinition = buildFlowchart({
  programId: 'bg_startup_visa',
  countryCode: 'BG',
  programName: 'Startup Visa',
  complexity: 'medium',
  successRate: '70%',
  totalEstimatedDuration: '2-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->develop-business-idea[Develop Business Idea]
  develop-business-idea -->verify-funds[Verify Funds EUR 5,000]
  verify-funds -->apply-program[Apply to Startup Program]
  apply-program -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Startup Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Bulgaria]
  travel -->registration[Register with Migration Directorate]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'develop-business-idea',
      title: 'Develop Innovative Business Idea',
      description: 'Create a compelling business plan for an innovative startup',
      estimatedDuration: '2-4 weeks',
      documents: ['Business plan (detailed)', 'Market analysis', 'Financial projections', 'Product/service description'],
      notes: ['Must be innovative and scalable', 'Tech startups preferred', 'LOWEST operating costs in EU!'],
    },
    {
      id: 'verify-funds',
      title: 'Verify Minimum Funds',
      description: 'Ensure you have minimum EUR 5,000 (BGN 10,000) in funds',
      estimatedDuration: '1 week',
      documents: ['Bank statements (last 3 months)', 'Proof of funds (EUR 5,000 minimum)', 'Source of funds documentation'],
      notes: ['Minimum EUR 5,000 (BGN 10,000)', 'Between Romania (EUR 4,000) and Czech (EUR 8,000)', 'LOWEST operating costs in EU!'],
    },
    {
      id: 'apply-program',
      title: 'Apply to Startup Program',
      description: 'Apply to a recognized Bulgarian startup program or accelerator',
      estimatedDuration: '2-4 weeks',
      documents: ['Business plan', 'Application form', 'Proof of funds'],
      notes: ['Must be accepted by recognized program', 'Program provides mentorship and support'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        includeFinancial: true,
        additionalDocuments: ['Startup program acceptance letter', 'Proof of funds'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 100 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '4-6 weeks' } },
    {
      id: 'visa',
      title: 'Receive Startup Visa',
      description: 'Collect your startup visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial visa for 1 year', 'Renewable', 'Must maintain business activity'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Startup Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Migration Directorate',
        additionalNotes: ['Register within 5 days of arrival', 'Register business with Commercial Register'],
      },
    },
  ],
});

/**
 * Work Permit - Standard work visa
 */
export const workPermit: FlowchartDefinition = buildFlowchart({
  programId: 'bg_work_permit',
  countryCode: 'BG',
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
  visa -->travel[Travel to Bulgaria]
  travel -->registration[Register with Migration Directorate]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 9000,
        additionalNotes: ['Very low salary threshold (EUR 750/month)', 'Employer must prove no suitable Bulgarian/EU candidate', 'Contract must be for at least 12 months'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['Proof of qualifications', 'Criminal background check', 'Medical certificate', 'Proof of accommodation'],
        additionalNotes: ['All documents must be certified copies', 'Non-Bulgarian documents need translation', 'Apostille required for foreign documents'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 100 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '4-8 weeks' } },
    {
      id: 'visa',
      title: 'Receive Work Permit',
      description: 'Collect your work permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for duration of contract (max 1 year)', 'Renewable', 'Tied to employer initially'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'work permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Migration Directorate',
        additionalNotes: ['Register within 5 days of arrival', 'Get Bulgarian ID card'],
      },
    },
  ],
});

/**
 * Self-Employment Visa
 */
export const selfEmployment: FlowchartDefinition = buildFlowchart({
  programId: 'bg_self_employment',
  countryCode: 'BG',
  programName: 'Self-Employment Visa',
  complexity: 'high',
  successRate: '65%',
  totalEstimatedDuration: '3-5 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->business-plan[Create Business Plan]
  business-plan -->capital[Secure Capital EUR 30,000]
  capital -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Self-Employment Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Bulgaria]
  travel -->registration[Register with Migration Directorate]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'business-plan',
      title: 'Create Business Plan',
      description: 'Develop a comprehensive business plan for your self-employment',
      estimatedDuration: '2-4 weeks',
      documents: ['Executive summary', 'Financial projections (3 years)', 'Service/product description', 'Market analysis', 'Marketing strategy'],
      notes: ['Plan must demonstrate economic benefit to Bulgaria', 'Include realistic financial forecasts', 'Show market demand for services'],
    },
    {
      id: 'capital',
      title: 'Secure Capital',
      description: 'Obtain minimum EUR 30,000 in startup capital',
      estimatedDuration: '4-8 weeks',
      documents: ['Bank statements', 'Proof of capital source', 'Investment agreements (if applicable)'],
      notes: ['Minimum EUR 30,000 required', 'Funds must be available in Bulgaria', 'Bulgaria has LOWEST cost of living in EU!'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        includeFinancial: true,
        additionalDocuments: ['Professional qualifications', 'Criminal background check'],
        additionalNotes: ['All documents must be certified copies', 'Non-Bulgarian documents need translation'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 100 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '6-10 weeks' } },
    {
      id: 'visa',
      title: 'Receive Self-Employment Visa',
      description: 'Collect your self-employment visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial visa for 1 year', 'Renewable', 'Must maintain business activity'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Self-Employment Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Migration Directorate',
        additionalNotes: ['Register within 5 days of arrival', 'Register business with Commercial Register', 'Get tax registration'],
      },
    },
  ],
});

/**
 * Family Reunification
 */
export const familyReunification: FlowchartDefinition = buildFlowchart({
  programId: 'bg_family_reunification',
  countryCode: 'BG',
  programName: 'Family Reunification Visa',
  complexity: 'medium',
  successRate: '75%',
  totalEstimatedDuration: '3-5 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->sponsor-check{Sponsor Eligible?}
  sponsor-check -->|Yes| income-check{Income Sufficient?}
  sponsor-check -->|No| End1([Not Eligible])
  income-check -->|Yes| gather-documents[Gather Required Documents]
  income-check -->|No| End1
  gather-documents -->submit-application[Submit at Consulate]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Bulgaria]
  travel -->registration[Register with Migration Directorate]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'sponsor-check',
      title: 'Verify Sponsor Eligibility',
      description: 'Confirm that your family member in Bulgaria meets sponsorship requirements',
      estimatedDuration: '1 week',
      documents: ["Sponsor's residence permit or citizenship certificate", 'Proof of relationship (birth certificate, marriage certificate)', "Sponsor's employment contract or income documentation"],
      notes: ['Sponsor must be Bulgarian resident or citizen', 'Sponsor must have stable income', 'Relationship must be documented'],
    },
    {
      id: 'income-check',
      title: 'Verify Sponsor Income',
      description: 'Ensure sponsor has adequate income to support family member',
      estimatedDuration: '1-2 weeks',
      documents: ['Last 3 months of pay stubs', 'Employment contract', 'Tax returns (last 2 years)', 'Bank statements'],
      notes: ['Income must be above minimum threshold', 'Threshold varies by family size', 'Self-employed must show business registration'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        additionalDocuments: ['Relationship documents (apostilled)', 'Sponsor documents', 'Criminal background check'],
        additionalNotes: ['All documents must be certified copies', 'Non-Bulgarian documents need translation'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 100 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '4-8 weeks' } },
    {
      id: 'visa',
      title: 'Receive Family Visa',
      description: 'Collect visa from consulate',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Visa valid for 90 days', 'Must enter Bulgaria and apply for residence permit'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'family reunification visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Migration Directorate',
        additionalNotes: ['Register within 5 days of arrival', 'Apply for residence permit', 'Get Bulgarian ID card'],
      },
    },
  ],
});

/**
 * Export all Bulgaria flowcharts as a record for compatibility with existing system
 * Keys must match the program IDs from visaPrograms.ts (e.g., 'bg_startup_visa')
 */
export const bulgariaFlowchartsNew: Record<string, FlowchartDefinition> = {
  bg_eu_blue_card: euBlueCard,
  bg_startup_visa: startupVisa,
  bg_work_permit: workPermit,
  bg_self_employment: selfEmployment,
  bg_family_reunification: familyReunification,
};
