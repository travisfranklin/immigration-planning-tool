/**
 * Italy Immigration Programs
 *
 * Built using the template-based composition system.
 * Italy has 5 main programs:
 * 1. Golden Visa (Investor Visa)
 * 2. Self-Employment Visa
 * 3. Highly Skilled Worker Visa
 * 4. Digital Nomad Visa
 * 5. Family Reunification
 */

import type { FlowchartDefinition } from '../../../types/flowchart';
import { buildFlowchart } from '../builders';
import { COMMON_STEP_IDS } from '../templates/types';

/**
 * Golden Visa (Investor Visa) - For significant investors
 */
export const goldenVisa: FlowchartDefinition = buildFlowchart({
  programId: 'it_golden_visa',
  countryCode: 'IT',
  programName: 'Golden Visa (Investor Visa)',
  complexity: 'medium',
  successRate: '90%',
  totalEstimatedDuration: '3-6 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->investment-type[Choose Investment Type]
  investment-type -->investment[Complete Investment]
  investment -->nulla-osta[Obtain Nulla Osta]
  nulla-osta -->gather-documents[Gather Required Documents]
  gather-documents -->submit[Submit at Consulate]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Investor Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Italy]
  travel -->register[Register with Questura]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'investment-type',
      title: 'Choose Investment Type',
      description: 'Determine which investment option you will pursue',
      estimatedDuration: '1-2 weeks',
      documents: ['Financial statements', 'Investment plan'],
      isConditional: true,
      condition: 'Different requirements for each investment type',
      notes: [
        'Option 1: EUR 500,000 in Italian company shares',
        'Option 2: EUR 250,000 in innovative Italian startup',
        'Option 3: EUR 2,000,000 in Italian government bonds',
        'Option 4: EUR 1,000,000 in Italian philanthropic project',
      ],
    },
    {
      id: 'make-investment',
      title: 'Complete Investment',
      description: 'Execute your chosen investment',
      estimatedDuration: '4-8 weeks',
      documents: ['Investment agreement', 'Proof of payment', 'Company registration (if applicable)'],
      notes: ['Investment must be maintained for at least 2 years', 'Use Italian lawyer for investment process'],
    },
    {
      id: 'nulla-osta',
      title: 'Obtain Nulla Osta',
      description: 'Get clearance from Italian authorities',
      estimatedDuration: '4-6 weeks',
      documents: ['Investment documentation', 'Application form', 'Proof of funds origin'],
      notes: ['Nulla Osta: Clearance certificate', 'Issued by Committee for Investor Visa'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeFinancial: true,
        additionalDocuments: ['Nulla Osta', 'Investment proof', 'Criminal background check (apostilled)'],
        additionalNotes: ['All documents must be apostilled and translated to Italian'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 116 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '4-8 weeks' } },
    {
      id: 'visa',
      title: 'Receive Investor Visa',
      description: 'Collect your investor visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial visa for 2 years', 'Renewable for 3-year periods', 'Can apply for PR after 5 years', 'Family included'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Investor Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Questura (Police HQ)',
        additionalNotes: ['Apply for permesso di soggiorno within 8 days', 'Get codice fiscale (tax code)', 'Register at Anagrafe (civil registry)'],
      },
    },
  ],
});

/**
 * Self-Employment Visa - For entrepreneurs
 */
export const selfEmploymentVisa: FlowchartDefinition = buildFlowchart({
  programId: 'it_self_employment',
  countryCode: 'IT',
  programName: 'Self-Employment Visa',
  complexity: 'high',
  successRate: '70%',
  totalEstimatedDuration: '3-5 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->business-plan[Develop Business Plan]
  business-plan -->capital[Secure Startup Capital]
  capital -->nulla-osta[Obtain Nulla Osta]
  nulla-osta -->gather-documents[Gather Required Documents]
  gather-documents -->submit[Submit at Consulate]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Self-Employment Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Italy]
  travel -->register[Register with Questura]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'business-plan',
      title: 'Develop Business Plan',
      description: 'Create comprehensive business plan',
      estimatedDuration: '4-6 weeks',
      documents: ['Business plan (20-30 pages)', 'Market analysis', 'Financial projections (3 years)'],
      notes: ['Plan must demonstrate economic benefit to Italy', 'Should show job creation potential'],
    },
    {
      id: 'capital',
      title: 'Secure Startup Capital',
      description: 'Ensure sufficient funds for business',
      estimatedDuration: '2-4 weeks',
      documents: ['Bank statements showing EUR 30,000+', 'Proof of funds availability'],
      notes: ['Recommended minimum EUR 30,000', 'Must show funds for business and living expenses'],
    },
    {
      id: 'nulla-osta',
      title: 'Obtain Nulla Osta',
      description: 'Get clearance from Italian authorities',
      estimatedDuration: '6-8 weeks',
      documents: ['Business plan', 'Proof of financial resources', 'Professional qualifications'],
      notes: ['Issued by local Chamber of Commerce', 'Evaluates business viability', 'May require interview'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        includeFinancial: true,
        additionalDocuments: ['Nulla Osta', 'Professional qualifications', 'Criminal background check'],
        additionalNotes: ['All documents must be apostilled and translated'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 116 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '6-10 weeks' } },
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
        registrationAuthority: 'Questura (Police HQ)',
        additionalNotes: ['Apply for permesso di soggiorno within 8 days', 'Register business with Camera di Commercio', 'Get partita IVA (VAT number)'],
      },
    },
  ],
});

/**
 * Highly Skilled Worker Visa - For skilled workers (quota-based)
 */
export const highlySkilledVisa: FlowchartDefinition = buildFlowchart({
  programId: 'it_highly_skilled',
  countryCode: 'IT',
  programName: 'Highly Skilled Worker Visa',
  complexity: 'medium',
  successRate: '75%',
  totalEstimatedDuration: '3-5 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->quota[Check Quota Availability]
  quota -->job-offer[Secure Job Offer]
  job-offer -->nulla-osta[Employer Obtains Nulla Osta]
  nulla-osta -->gather-documents[Gather Required Documents]
  gather-documents -->submit[Submit at Consulate]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Work Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Italy]
  travel -->register[Register with Questura]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'quota-check',
      title: 'Check Quota Availability',
      description: 'Verify quota slots available for your nationality',
      estimatedDuration: '1 week',
      documents: ['Decreto Flussi announcement'],
      notes: [
        'Italy uses annual quota system (Decreto Flussi)',
        'Quotas announced yearly, usually in spring',
        'US citizens typically have dedicated quota',
        'Quotas fill quickly - apply early',
      ],
    },
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 25000,
        additionalNotes: ['Employer must be registered in Italy', 'Job must match your qualifications'],
      },
    },
    {
      id: 'nulla-osta',
      title: 'Employer Obtains Nulla Osta',
      description: 'Employer applies for work authorization',
      estimatedDuration: '4-8 weeks',
      documents: ['Employment contract', 'Company registration documents', 'Proof of salary payment ability'],
      notes: ['Employer submits to Sportello Unico', 'Must be done during quota window', 'Employer pays application fee'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['Nulla Osta', 'Criminal background check', 'Educational qualifications'],
        additionalNotes: ['All documents must be apostilled and translated'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 116 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '4-8 weeks' } },
    {
      id: 'visa',
      title: 'Receive Work Visa',
      description: 'Collect your work visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial visa for 2 years', 'Renewable', 'Tied to employer initially'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'work visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Questura (Police HQ)',
        additionalNotes: ['Apply for permesso di soggiorno within 8 days', 'Get codice fiscale', 'Register with INPS (social security)'],
      },
    },
  ],
});

/**
 * Digital Nomad Visa - For remote workers
 */
export const digitalNomadVisa: FlowchartDefinition = buildFlowchart({
  programId: 'it_digital_nomad',
  countryCode: 'IT',
  programName: 'Digital Nomad Visa',
  complexity: 'low',
  successRate: '85%',
  totalEstimatedDuration: '2-3 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->remote{Work Remotely?}
  remote -->|Yes| income{Income >= EUR 28,000/year?}
  remote -->|No| End1([Not Eligible])
  income -->|Yes| gather-documents[Gather Required Documents]
  income -->|No| End1
  gather-documents -->submit[Submit Application]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Digital Nomad Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Italy]
  travel -->register[Register with Questura]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'remote-work-verification',
      title: 'Verify Remote Work Status',
      description: 'Confirm you work remotely for non-Italian company',
      estimatedDuration: '1 week',
      documents: ['Employment contract or freelance agreements', 'Letter from employer confirming remote work'],
      notes: ['Must work remotely for company outside Italy', 'Can be employee or freelancer', 'New visa type introduced in 2024'],
    },
    {
      id: 'income-verification',
      title: 'Verify Income Requirements',
      description: 'Confirm you meet minimum income threshold',
      estimatedDuration: '1 week',
      documents: ['Recent pay slips (3 months)', 'Bank statements', 'Tax returns'],
      notes: ['Minimum EUR 28,000/year', 'Income must be stable and ongoing'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['University degree or professional experience proof', 'Health insurance', 'Criminal background check', 'Proof of accommodation'],
        additionalNotes: ['All documents must be apostilled', 'Health insurance must cover Italy'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 116 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '4-6 weeks' } },
    {
      id: 'visa',
      title: 'Receive Digital Nomad Visa',
      description: 'Collect your digital nomad visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial visa for 1 year', 'Renewable', 'Can apply for PR after 5 years', 'Family can join'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Digital Nomad Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Questura (Police HQ)',
        additionalNotes: ['Apply for permesso di soggiorno within 8 days', 'Get codice fiscale', 'Register at Anagrafe'],
      },
    },
  ],
});

/**
 * Family Reunification
 */
export const familyReunification: FlowchartDefinition = buildFlowchart({
  programId: 'it_family_reunification',
  countryCode: 'IT',
  programName: 'Family Reunification Visa',
  complexity: 'medium',
  successRate: '70%',
  totalEstimatedDuration: '5-8 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->sponsor{Sponsor Eligible?}
  sponsor -->|Yes| income{Income Sufficient?}
  sponsor -->|No| End1([Not Eligible])
  income -->|Yes| nulla-osta[Sponsor Obtains Nulla Osta]
  income -->|No| End1
  nulla-osta -->gather-documents[Gather Required Documents]
  gather-documents -->submit[Submit at Consulate]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Italy]
  travel -->register[Register with Questura]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'sponsor-eligibility',
      title: 'Verify Sponsor Eligibility',
      description: 'Confirm family member in Italy meets requirements',
      estimatedDuration: '1 week',
      documents: ['Sponsor residence permit or Italian passport', 'Sponsor income statements', 'Sponsor housing documents'],
      notes: ['Sponsor must have valid residence permit or be Italian citizen', 'Must have lived in Italy for 1+ year'],
    },
    {
      id: 'income-housing',
      title: 'Verify Income and Housing',
      description: 'Confirm sponsor meets financial requirements',
      estimatedDuration: '1-2 weeks',
      documents: ['Recent pay slips (6 months)', 'Tax returns (CUD)', 'Housing lease or ownership documents', 'Housing adequacy certificate'],
      notes: ['Income must exceed minimum threshold', 'Threshold varies by family size', 'Housing must meet minimum size requirements'],
    },
    {
      id: 'nulla-osta',
      title: 'Sponsor Obtains Nulla Osta',
      description: 'Sponsor applies for family reunification authorization',
      estimatedDuration: '8-12 weeks',
      documents: ['Sponsor documents', 'Relationship proof', 'Income and housing documentation'],
      notes: ['Sponsor applies at Sportello Unico', 'Longest step in process', 'Nulla Osta sent to consulate when approved'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        additionalDocuments: ['Relationship documents (apostilled)', 'Sponsor documents', 'Criminal background check'],
        additionalNotes: ['All documents must be apostilled and translated to Italian'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 116 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '4-8 weeks' } },
    {
      id: 'visa',
      title: 'Receive Family Visa',
      description: 'Collect visa from consulate',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Visa valid for 90 days', 'Must enter Italy and apply for permesso di soggiorno'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'family reunification visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Questura (Police HQ)',
        additionalNotes: ['Apply for permesso di soggiorno within 8 days', 'Get codice fiscale', 'Register at Anagrafe'],
      },
    },
  ],
});

/**
 * Export all Italy flowcharts as a record for compatibility with existing system
 */
export const italyFlowchartsNew: Record<string, FlowchartDefinition> = {
  golden_visa: goldenVisa,
  self_employment: selfEmploymentVisa,
  highly_skilled: highlySkilledVisa,
  digital_nomad: digitalNomadVisa,
  family_reunification: familyReunification,
};
