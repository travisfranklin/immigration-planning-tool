/**
 * Belgium Immigration Programs
 *
 * Built using the template-based composition system.
 * Belgium has 5 main programs:
 * 1. EU Blue Card
 * 2. Highly Skilled Worker (Single Permit)
 * 3. Professional Card (Self-Employment)
 * 4. Startup Visa
 * 5. Family Reunification
 */

import type { FlowchartDefinition } from '../../../types/flowchart';
import { buildFlowchart } from '../builders';
import { COMMON_STEP_IDS } from '../templates/types';

/**
 * EU Blue Card - For highly skilled workers
 */
export const euBlueCard: FlowchartDefinition = buildFlowchart({
  programId: 'be_eu_blue_card',
  countryCode: 'BE',
  programName: 'EU Blue Card',
  complexity: 'medium',
  successRate: '85%',
  totalEstimatedDuration: '3-5 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->determine-region[Determine Region]
  determine-region -->job-offer[Secure Job Offer]
  job-offer --> salary{"Salary >= Regional Threshold?"}
  salary -->|Yes| gather-documents[Gather Required Documents]
  salary -->|No| End1([Not Eligible])
  gather-documents --> submit-application[Submit Application]
  submit-application --> processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Blue Card]
  decision -->|Rejected| End2([Process Ended])
  visa --> travel[Travel to Belgium]
  travel --> registration[Register at Commune]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'determine-region',
      title: 'Determine Region',
      description: 'Identify which Belgian region you will work in',
      estimatedDuration: '1 week',
      documents: ['Job offer letter with work location'],
      notes: [
        'Belgium has 3 regions with different salary thresholds',
        'Brussels: EUR 66,377/year',
        'Flanders: EUR 61,011/year',
        'Wallonia: EUR 56,112/year',
      ],
    },
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 61011,
        additionalNotes: ['Salary threshold varies by region', 'Employer must be registered in Belgium', 'Contract must be for at least 12 months'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['University degree (apostilled)', 'Proof of qualifications'],
        additionalNotes: ['Documents may need translation to Dutch, French, or German depending on region'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 200 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '4-8 weeks' } },
    {
      id: 'visa',
      title: 'Receive Blue Card',
      description: 'Collect your EU Blue Card',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial Blue Card valid for 13 months', 'Renewable', 'Can apply for permanent residence after 5 years'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'EU Blue Card' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Local Commune',
        additionalNotes: ['Register within 8 days of arrival', 'Get Belgian ID card', 'Register with social security'],
      },
    },
  ],
});

/**
 * Highly Skilled Worker (Single Permit) - Fast-track for skilled workers
 */
export const highlySkilledWorker: FlowchartDefinition = buildFlowchart({
  programId: 'be_highly_skilled',
  countryCode: 'BE',
  programName: 'Highly Skilled Worker (Single Permit)',
  complexity: 'medium',
  successRate: '80%',
  totalEstimatedDuration: '2-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer --> salary{"Salary >= EUR 51,613?"}
  salary -->|Yes| gather-documents[Gather Required Documents]
  salary -->|No| End1([Not Eligible])
  gather-documents --> fast-track-application[Submit Fast-Track Application]
  fast-track-application --> processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Single Permit]
  decision -->|Rejected| End2([Process Ended])
  visa --> travel[Travel to Belgium]
  travel --> registration[Register at Commune]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 51613,
        additionalNotes: ['Lower salary threshold than EU Blue Card', 'Faster processing time', 'Employer must demonstrate high-skilled position'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['University degree (apostilled)', 'Proof of qualifications'],
        additionalNotes: ['Simplified documentation compared to standard work permit', 'Fast-track processing available'],
      },
    },
    {
      id: 'fast-track-application',
      title: 'Submit Fast-Track Application',
      description: 'Employer submits combined work permit and visa application',
      estimatedDuration: '1 week',
      documents: ['All gathered documents', 'Application fee payment (EUR 200)'],
      notes: ['Employer handles most of the application process', 'Combined work permit and residence permit'],
    },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '3-6 weeks' } },
    {
      id: 'visa',
      title: 'Receive Single Permit',
      description: 'Collect your Single Permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Combined work and residence permit', 'Valid for duration of contract (max 3 years)', 'Renewable'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Single Permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Local Commune',
        additionalNotes: ['Register within 8 days of arrival', 'Get Belgian ID card'],
      },
    },
  ],
});

/**
 * Professional Card (Self-Employment)
 */
export const professionalCard: FlowchartDefinition = buildFlowchart({
  programId: 'be_professional_card',
  countryCode: 'BE',
  programName: 'Professional Card (Self-Employment)',
  complexity: 'high',
  successRate: '65%',
  totalEstimatedDuration: '4-6 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->business-plan[Create Business Plan]
  business-plan -->capital[Secure Capital EUR 18,600]
  capital -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Professional Card]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Belgium]
  travel -->registration[Register at Commune]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'business-plan',
      title: 'Create Business Plan',
      description: 'Develop a comprehensive business plan for your self-employment',
      estimatedDuration: '2-4 weeks',
      documents: ['Executive summary', 'Financial projections (3 years)', 'Service/product description', 'Market analysis', 'Marketing strategy'],
      notes: ['Plan must demonstrate economic benefit to Belgium', 'Include realistic financial forecasts', 'Show market demand for services'],
    },
    {
      id: 'capital',
      title: 'Secure Capital',
      description: 'Obtain minimum EUR 18,600 in startup capital',
      estimatedDuration: '4-8 weeks',
      documents: ['Bank statements', 'Proof of capital source', 'Investment agreements (if applicable)'],
      notes: ['Minimum EUR 18,600 required (3 months living expenses)', 'Funds must be available in Belgium', 'Can be personal savings or investment'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        includeFinancial: true,
        additionalDocuments: ['Professional qualifications', 'Criminal background check'],
        additionalNotes: ['Documents may need translation depending on region'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 140 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '8-12 weeks' } },
    {
      id: 'visa',
      title: 'Receive Professional Card',
      description: 'Collect your Professional Card',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for 5 years', 'Renewable', 'Must maintain business activity'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Professional Card' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Local Commune',
        additionalNotes: ['Register within 8 days of arrival', 'Register business with Crossroads Bank for Enterprises', 'Get VAT number'],
      },
    },
  ],
});

/**
 * Startup Visa - For innovative entrepreneurs
 */
export const startupVisa: FlowchartDefinition = buildFlowchart({
  programId: 'be_startup',
  countryCode: 'BE',
  programName: 'Startup Visa',
  complexity: 'high',
  successRate: '60%',
  totalEstimatedDuration: '4-6 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->business-idea[Develop Business Idea]
  business-idea -->accelerator-search[Find Approved Accelerator]
  accelerator-search -->business-plan[Create Business Plan]
  business-plan -->funding[Secure Funding EUR 25,000]
  funding -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Startup Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Belgium]
  travel -->registration[Register at Commune]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'business-idea',
      title: 'Develop Innovative Business Idea',
      description: 'Develop an innovative business concept',
      estimatedDuration: '2-4 weeks',
      documents: ['Business concept description', 'Market analysis', 'Competitive analysis'],
      notes: ['Idea must be innovative and viable', 'Should address a market need', 'Consider scalability potential'],
    },
    {
      id: 'accelerator-search',
      title: 'Find Approved Accelerator/Incubator',
      description: 'Identify and contact approved Belgian accelerators or incubators',
      estimatedDuration: '2-4 weeks',
      documents: ['List of approved accelerators', 'Accelerator contact information'],
      notes: ['Must be recognized by Belgian authorities', 'Accelerator must provide mentorship and support', 'Check official list of approved programs'],
    },
    {
      id: 'business-plan',
      title: 'Create Detailed Business Plan',
      description: 'Prepare a comprehensive business plan',
      estimatedDuration: '2-4 weeks',
      documents: ['Executive summary', 'Financial projections (3-5 years)', 'Marketing strategy', 'Organizational structure'],
      notes: ['Plan must be in English, Dutch, French, or German', 'Include realistic financial forecasts'],
    },
    {
      id: 'funding',
      title: 'Secure Funding',
      description: 'Obtain minimum EUR 25,000 in startup capital',
      estimatedDuration: '4-8 weeks',
      documents: ['Bank statements showing funds', 'Investment agreements (if applicable)', 'Proof of capital source'],
      notes: ['Minimum EUR 25,000 required', 'Funds must be available in Belgium', 'Can be personal savings or investment'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        includeFinancial: true,
        additionalDocuments: ['Accelerator acceptance letter', 'Proof of funding'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 200 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '8-12 weeks' } },
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
        registrationAuthority: 'Local Commune',
        additionalNotes: ['Register within 8 days of arrival', 'Register business with Crossroads Bank for Enterprises'],
      },
    },
  ],
});

/**
 * Family Reunification
 */
export const familyReunification: FlowchartDefinition = buildFlowchart({
  programId: 'be_family_reunification',
  countryCode: 'BE',
  programName: 'Family Reunification Visa',
  complexity: 'medium',
  successRate: '75%',
  totalEstimatedDuration: '4-6 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->sponsor-check{Sponsor Eligible?}
  sponsor-check -->|Yes| income-check{Income Sufficient?}
  sponsor-check -->|No| End1([Not Eligible])
  income-check -->|Yes| housing-check{Housing Adequate?}
  income-check -->|No| End1
  housing-check -->|Yes| gather-documents[Gather Required Documents]
  housing-check -->|No| End1
  gather-documents -->submit-application[Submit at Consulate]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Belgium]
  travel -->registration[Register at Commune]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'sponsor-check',
      title: 'Verify Sponsor Eligibility',
      description: 'Confirm that your family member in Belgium meets sponsorship requirements',
      estimatedDuration: '1 week',
      documents: ["Sponsor's residence permit or citizenship certificate", 'Proof of relationship (birth certificate, marriage certificate)', "Sponsor's employment contract or income documentation"],
      notes: ['Sponsor must be Belgian resident or citizen', 'Sponsor must have stable income', 'Relationship must be documented'],
    },
    {
      id: 'income-check',
      title: 'Verify Sponsor Income',
      description: 'Ensure sponsor has adequate income to support family member',
      estimatedDuration: '1-2 weeks',
      documents: ['Last 3 months of pay stubs', 'Employment contract', 'Tax returns (last 2 years)', 'Bank statements'],
      notes: ['Income must be above minimum threshold', 'Threshold varies by family size', 'Fast-track available for Single Permit holders earning EUR 5,000+/month'],
    },
    {
      id: 'housing-check',
      title: 'Verify Housing Requirements',
      description: 'Confirm adequate housing for family member',
      estimatedDuration: '1-2 weeks',
      documents: ['Lease or property ownership document', 'Proof of housing size', 'Utility bills showing residence'],
      notes: ['Housing must meet minimum size requirements', 'Typically 1 room per person', "Must be in sponsor's name or with permission"],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        additionalDocuments: ['Relationship documents (apostilled)', 'Sponsor documents', 'Criminal background check'],
        additionalNotes: ['Documents may need translation depending on region'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 200 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '6-9 months' } },
    {
      id: 'visa',
      title: 'Receive Family Visa',
      description: 'Collect visa from consulate',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Visa valid for 90 days', 'Must enter Belgium and apply for residence permit'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'family reunification visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Local Commune',
        additionalNotes: ['Register within 8 days of arrival', 'Apply for residence permit', 'Get Belgian ID card'],
      },
    },
  ],
});

/**
 * Export all Belgium flowcharts as a record for compatibility with existing system
 */
export const belgiumFlowchartsNew: Record<string, FlowchartDefinition> = {
  eu_blue_card: euBlueCard,
  highly_skilled: highlySkilledWorker,
  professional_card: professionalCard,
  startup: startupVisa,
  family_reunification: familyReunification,
};

