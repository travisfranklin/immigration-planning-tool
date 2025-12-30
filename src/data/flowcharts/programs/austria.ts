/**
 * Austria Immigration Programs
 *
 * Built using the template-based composition system.
 * Austria has 5 main programs:
 * 1. EU Blue Card
 * 2. Red-White-Red Card
 * 3. Startup Visa
 * 4. Self-Employment Visa
 * 5. Family Reunification
 */

import type { FlowchartDefinition } from '../../../types/flowchart';
import { buildFlowchart } from '../builders';
import { COMMON_STEP_IDS } from '../templates/types';

/**
 * EU Blue Card - For highly skilled workers
 */
export const euBlueCard: FlowchartDefinition = buildFlowchart({
  programId: 'at_eu_blue_card',
  countryCode: 'AT',
  programName: 'EU Blue Card',
  complexity: 'medium',
  successRate: '85%',
  totalEstimatedDuration: '3-5 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer --> Salary{"Salary >= EUR 51,500?"}
  Salary -->|Yes| gather-documents[Gather Required Documents]
  Salary -->|No| End1([Not Eligible])
  gather-documents --> submit-application[Submit Application]
  submit-application --> processing[Wait for Processing]
  processing --> Decision{Decision}
  Decision -->|Approved| Visa[Receive Blue Card]
  Decision -->|Rejected| End2([Process Ended])
  Visa --> arrival[Travel to Austria]
  arrival --> Register[Register at MA35]
  Register --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 51500,
        additionalNotes: ['Employer must be registered in Austria', 'Contract must be for at least 12 months', 'Salary threshold updated annually'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['University degree certificate (with apostille)', 'Proof of accommodation in Austria'],
        additionalNotes: ['All documents must be translated to German by certified translator', 'Degree must be recognized as equivalent to Austrian degree'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 180 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '8 weeks' } },
    {
      id: 'visa',
      title: 'Receive Blue Card',
      description: 'Collect your EU Blue Card',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial Blue Card valid for 2 years', 'Renewable', 'Can apply for permanent residence after 33 months (21 with B1 German)'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'EU Blue Card' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'MA35 (Immigration Authority)',
        additionalNotes: ['Register within 3 days of arrival', 'Get Meldezettel (registration certificate)', 'Apply for e-card (health insurance)'],
      },
    },
  ],
});

/**
 * Red-White-Red Card - Points-based skilled worker visa
 */
export const redWhiteRedCard: FlowchartDefinition = buildFlowchart({
  programId: 'at_red_white_red',
  countryCode: 'AT',
  programName: 'Red-White-Red Card',
  complexity: 'high',
  successRate: '75%',
  totalEstimatedDuration: '3-5 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) --> Category[Choose Category]
  Category -->points-calculation{Calculate Points}
  points-calculation -->|>= 70 points| job-offer[Secure Job Offer]
  points-calculation -->|< 70 points| End1([Not Eligible])
  job-offer --> Salary{"Salary >= EUR 38,700?"}
  Salary -->|Yes| gather-documents[Gather Required Documents]
  Salary -->|No| End1
  gather-documents --> submit-application[Submit Application]
  submit-application --> processing[Wait for Processing]
  processing --> Decision{Decision}
  Decision -->|Approved| Visa[Receive RWR Card]
  Decision -->|Rejected| End2([Process Ended])
  Visa --> arrival[Travel to Austria]
  arrival --> Register[Register at MA35]
  Register --> Success([Process Complete])`,
  steps: [
    {
      id: 'category',
      title: 'Choose Category',
      description: 'Select the appropriate Red-White-Red Card category based on your qualifications',
      estimatedDuration: '1 week',
      documents: ['Educational certificates', 'Work experience documentation', 'Professional qualifications'],
      notes: [
        'Three main categories: Very Highly Qualified Workers, Skilled Workers in Shortage Occupations, Other Key Workers',
        'Very Highly Qualified: minimum 70 points required',
        'Shortage Occupations: check current shortage list',
        'Each category has different requirements and salary thresholds',
      ],
    },
    {
      id: 'points-calculation',
      title: 'Calculate Points',
      description: 'Assess your eligibility using the points-based system',
      estimatedDuration: '1 week',
      documents: ['Educational certificates', 'Work experience documentation', 'Language certificates (German)', 'Age verification'],
      isConditional: true,
      condition: 'Minimum 70 points required for Very Highly Qualified Workers category',
      notes: [
        'Points awarded for: education, work experience, language skills, age',
        'Use official points calculator on migration.gv.at',
        'Higher education = more points',
        'German language skills highly valued',
      ],
    },
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 38700,
        additionalNotes: ['Job must match your qualifications', 'Employer must demonstrate need for foreign worker'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['Points calculation documentation', 'Language certificates'],
        additionalNotes: ['All documents must be translated to German'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 180 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '8 weeks' } },
    {
      id: 'visa',
      title: 'Receive RWR Card',
      description: 'Collect your Red-White-Red Card',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial card valid for 2 years', 'Renewable', 'After 2 years can apply for RWR Card Plus (open work permit)'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Red-White-Red Card' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'MA35 (Immigration Authority)',
        additionalNotes: ['Register within 3 days of arrival', 'Get Meldezettel', 'Apply for e-card'],
      },
    },
  ],
});

/**
 * Startup Visa - For innovative entrepreneurs
 */
export const startupVisa: FlowchartDefinition = buildFlowchart({
  programId: 'at_startup',
  countryCode: 'AT',
  programName: 'Startup Visa',
  complexity: 'high',
  successRate: '65%',
  totalEstimatedDuration: '4-6 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->business-idea[Develop Business Idea]
  business-idea -->business-plan[Create Business Plan]
  business-plan -->funding[Secure Funding EUR 50,000]
  funding -->gather-documents[Gather Required Documents]
  gather-documents -->submit[Submit Application]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Startup Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Austria]
  travel -->register[Register at MA35]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'business-idea',
      title: 'Develop Innovative Business Idea',
      description: 'Develop an innovative business concept that meets Austrian startup criteria',
      estimatedDuration: '2-4 weeks',
      documents: ['Business concept description', 'Market analysis', 'Competitive analysis'],
      notes: ['Idea must be innovative and viable', 'Should address a market need', 'Consider scalability potential'],
    },
    {
      id: 'business-plan',
      title: 'Create Detailed Business Plan',
      description: 'Prepare a comprehensive business plan for your startup',
      estimatedDuration: '2-4 weeks',
      documents: ['Executive summary', 'Financial projections (3-5 years)', 'Marketing strategy', 'Organizational structure', 'Risk analysis'],
      notes: ['Plan must be in German or English', 'Include realistic financial forecasts', 'Show understanding of target market'],
    },
    {
      id: 'funding',
      title: 'Secure Funding',
      description: 'Obtain minimum EUR 50,000 in startup capital',
      estimatedDuration: '4-8 weeks',
      documents: ['Bank statements showing funds', 'Investment agreements (if applicable)', 'Proof of capital source'],
      notes: ['Minimum EUR 50,000 required', 'Funds must be available in Austria', 'Can be personal savings or investment'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        includeFinancial: true,
        additionalDocuments: ['Proof of funding', 'Business registration documents'],
        additionalNotes: ['All documents must be translated to German'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 180 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '8-12 weeks' } },
    {
      id: 'visa',
      title: 'Receive Startup Visa',
      description: 'Collect your startup visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial visa for 2 years', 'Renewable', 'Must maintain business activity'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Startup Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'MA35 (Immigration Authority)',
        additionalNotes: ['Register within 3 days of arrival', 'Register business with Wirtschaftskammer', 'Get Gewerbeschein (trade license)'],
      },
    },
  ],
});

/**
 * Self-Employment Visa - For freelancers and self-employed
 */
export const selfEmploymentVisa: FlowchartDefinition = buildFlowchart({
  programId: 'at_self_employed',
  countryCode: 'AT',
  programName: 'Self-Employment Visa',
  complexity: 'high',
  successRate: '60%',
  totalEstimatedDuration: '4-6 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->business-plan[Create Business Plan]
  business-plan -->capital[Secure Capital EUR 30,000]
  capital -->qualifications[Verify Qualifications]
  qualifications -->gather-documents[Gather Required Documents]
  gather-documents -->submit[Submit Application]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Self-Employment Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Austria]
  travel -->register[Register at MA35]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'business-plan',
      title: 'Create Business Plan',
      description: 'Develop a comprehensive business plan for your self-employment',
      estimatedDuration: '2-4 weeks',
      documents: ['Executive summary', 'Financial projections', 'Service/product description', 'Market analysis'],
      notes: ['Plan must demonstrate economic benefit to Austria', 'Include realistic financial forecasts', 'Show market demand for services'],
    },
    {
      id: 'capital',
      title: 'Secure Capital',
      description: 'Obtain minimum EUR 30,000 in startup capital',
      estimatedDuration: '4-8 weeks',
      documents: ['Bank statements', 'Proof of capital source', 'Investment agreements (if applicable)'],
      notes: ['Minimum EUR 30,000 required', 'Funds must be available in Austria', 'Can be personal savings or investment'],
    },
    {
      id: 'qualifications',
      title: 'Verify Professional Qualifications',
      description: 'Ensure your qualifications meet Austrian requirements',
      estimatedDuration: '2-3 weeks',
      documents: ['Educational certificates', 'Professional licenses/certifications', 'Work experience documentation', 'Language certificates (German B1+)'],
      notes: ['Qualifications must be recognized in Austria', 'May need to obtain Austrian recognition', 'German language skills important'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        includeFinancial: true,
        additionalDocuments: ['Professional qualifications', 'Language certificates'],
        additionalNotes: ['All documents must be translated to German'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 180 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '8-12 weeks' } },
    {
      id: 'visa',
      title: 'Receive Self-Employment Visa',
      description: 'Collect your self-employment visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial visa for 2 years', 'Renewable', 'Must maintain business activity'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Self-Employment Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'MA35 (Immigration Authority)',
        additionalNotes: ['Register within 3 days of arrival', 'Register with SVS (social insurance)', 'Get Gewerbeschein'],
      },
    },
  ],
});

/**
 * Family Reunification
 */
export const familyReunification: FlowchartDefinition = buildFlowchart({
  programId: 'at_family_reunification',
  countryCode: 'AT',
  programName: 'Family Reunification Visa',
  complexity: 'medium',
  successRate: '80%',
  totalEstimatedDuration: '4-6 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->sponsor{Sponsor Eligible?}
  sponsor -->|Yes| income{Income Sufficient?}
  sponsor -->|No| End1([Not Eligible])
  income -->|Yes| housing{Housing Adequate?}
  income -->|No| End1
  housing -->|Yes| gather-documents[Gather Required Documents]
  housing -->|No| End1
  gather-documents -->submit[Submit at Consulate]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Austria]
  travel -->register[Register at MA35]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'sponsor-check',
      title: 'Verify Sponsor Eligibility',
      description: 'Confirm that your family member in Austria meets sponsorship requirements',
      estimatedDuration: '1 week',
      documents: ["Sponsor's residence permit or citizenship certificate", 'Proof of relationship (birth certificate, marriage certificate)', "Sponsor's employment contract or income documentation"],
      notes: ['Sponsor must be Austrian resident or citizen', 'Sponsor must have stable income', 'Relationship must be documented'],
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
      id: 'housing-check',
      title: 'Verify Housing Requirements',
      description: 'Confirm adequate housing for family member',
      estimatedDuration: '1-2 weeks',
      documents: ['Lease or property ownership document', 'Proof of housing size (floor plan)', 'Utility bills showing residence'],
      notes: ['Housing must meet minimum size requirements', 'Typically 1 room per person', "Must be in sponsor's name or with permission"],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        additionalDocuments: ['Relationship documents (apostilled)', 'Sponsor documents', 'Criminal background check'],
        additionalNotes: ['All documents must be translated to German'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 180 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '8-12 weeks' } },
    {
      id: 'visa',
      title: 'Receive Family Visa',
      description: 'Collect visa from consulate',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Visa valid for 90 days', 'Must enter Austria and apply for residence permit'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'family reunification visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'MA35 (Immigration Authority)',
        additionalNotes: ['Register within 3 days of arrival', 'Apply for residence permit', 'Get Meldezettel'],
      },
    },
  ],
});

/**
 * Export all Austria flowcharts as a record for compatibility with existing system
 */
export const austriaFlowchartsNew: Record<string, FlowchartDefinition> = {
  eu_blue_card: euBlueCard,
  red_white_red: redWhiteRedCard,
  startup: startupVisa,
  self_employed: selfEmploymentVisa,
  family_reunification: familyReunification,
};

