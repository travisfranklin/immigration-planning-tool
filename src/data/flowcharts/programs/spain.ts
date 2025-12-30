/**
 * Spain Immigration Programs
 *
 * Built using the template-based composition system.
 * Spain has 5 main programs:
 * 1. Golden Visa (Investor Visa)
 * 2. Non-Lucrative Visa
 * 3. Digital Nomad Visa
 * 4. Highly Qualified Professional Visa
 * 5. Family Reunification
 */

import type { FlowchartDefinition } from '../../../types/flowchart';
import { buildFlowchart } from '../builders';
import { COMMON_STEP_IDS } from '../templates/types';

/**
 * Golden Visa (Investor Visa) - For significant investors
 */
export const goldenVisa: FlowchartDefinition = buildFlowchart({
  programId: 'es_golden_visa',
  countryCode: 'ES',
  programName: 'Golden Visa (Investor Visa)',
  complexity: 'medium',
  successRate: '95%',
  totalEstimatedDuration: '2-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->investment-type[Choose Investment Type]
  investment-type --> investment{Investment Complete?}
  investment -->|Yes| gather-documents[Gather Required Documents]
  investment -->|No| End1([Not Eligible])
  gather-documents -->submit[Submit Application]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| permit[Receive Golden Visa]
  decision -->|Rejected| End2([Process Ended])
  permit -->travel[Travel to Spain]
  travel -->register[Register with Authorities]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'investment-type',
      title: 'Choose Investment Type',
      description: 'Determine which investment option you will pursue',
      estimatedDuration: '1 week',
      documents: ['Financial statements', 'Investment plan'],
      isConditional: true,
      condition: 'Different requirements for each investment type',
      notes: [
        'Option 1: EUR 500,000 in Spanish real estate',
        'Option 2: EUR 1,000,000 in Spanish company shares',
        'Option 3: EUR 2,000,000 in Spanish government bonds',
        'Option 4: EUR 1,000,000 in Spanish bank deposit',
      ],
    },
    {
      id: 'property-purchase',
      title: 'Complete Investment',
      description: 'Complete real estate or financial investment',
      estimatedDuration: '4-12 weeks',
      documents: ['Property deed or investment certificates', 'Proof of payment', 'Valuation documents'],
      isConditional: true,
      condition: 'Depends on investment type chosen',
      notes: [
        'Real estate: Can be one or multiple properties totaling EUR 500k+',
        'Property must be debt-free',
        'Use Spanish lawyer (abogado) for purchase',
        'Register in Land Registry',
      ],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeFinancial: true,
        additionalDocuments: ['Investment proof', 'NIE (foreigner ID number)', 'Criminal background check (apostilled)'],
        additionalNotes: ['All documents must be apostilled and translated to Spanish', 'FBI check takes 8-12 weeks'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 1065 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '3-6 weeks' } },
    {
      id: 'permit',
      title: 'Receive Golden Visa',
      description: 'Collect your Golden Visa residence permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Approval letter', 'Passport'],
      notes: [
        'Initial visa valid for 2 years',
        'Renewable for 5-year periods',
        'No minimum stay required',
        'Can apply for PR after 5 years',
        'Family included',
      ],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Golden Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Oficina de Extranjería',
        additionalNotes: ['Get TIE (residence card)', 'Register at Empadronamiento (town hall)', 'Open Spanish bank account'],
      },
    },
  ],
});

/**
 * Non-Lucrative Visa - For retirees and passive income earners
 */
export const nonLucrativeVisa: FlowchartDefinition = buildFlowchart({
  programId: 'es_non_lucrative',
  countryCode: 'ES',
  programName: 'Non-Lucrative Visa',
  complexity: 'low',
  successRate: '85%',
  totalEstimatedDuration: '3-5 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->income{Passive Income >= EUR 28,800/year?}
  income -->|Yes| savings{Sufficient Savings?}
  income -->|No| End1([Not Eligible])
  savings -->|Yes| gather-documents[Gather Required Documents]
  savings -->|No| End1
  gather-documents -->submit[Submit at Consulate]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Spain]
  travel -->register[Register with Authorities]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'income-verification',
      title: 'Verify Passive Income',
      description: 'Confirm you have sufficient passive income',
      estimatedDuration: '1 week',
      documents: ['Bank statements (6 months)', 'Investment account statements', 'Pension statements', 'Rental income documentation'],
      notes: [
        'Minimum EUR 28,800/year (400% of IPREM)',
        'Must be passive income (not from employment)',
        'Can include: pensions, investments, rental income, dividends',
        'Add EUR 7,200/year for each dependent',
      ],
    },
    {
      id: 'savings-verification',
      title: 'Verify Savings',
      description: 'Confirm you have sufficient savings',
      estimatedDuration: '1 week',
      documents: ['Bank statements showing EUR 30,000+'],
      notes: ['Recommended minimum EUR 30,000 in savings', 'Shows financial stability'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeFinancial: true,
        additionalDocuments: ['Private health insurance (full coverage)', 'Criminal background check (apostilled)', 'Medical certificate', 'Proof of accommodation'],
        additionalNotes: ['FBI background check takes 8-12 weeks - start early!', 'All documents must be apostilled and translated'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { additionalNotes: ['Submit at Spanish consulate in US'] } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '4-8 weeks' } },
    {
      id: 'visa',
      title: 'Receive Non-Lucrative Visa',
      description: 'Collect your visa from consulate',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Visa valid for 90 days', 'Must enter Spain and apply for TIE within validity', 'Cannot work in Spain with this visa'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Non-Lucrative Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Oficina de Extranjería',
        additionalNotes: ['Get TIE (residence card) within 30 days', 'Register at Empadronamiento', 'Initial permit for 1 year, then 2-year renewals'],
      },
    },
  ],
});

/**
 * Digital Nomad Visa - For remote workers
 */
export const digitalNomadVisa: FlowchartDefinition = buildFlowchart({
  programId: 'es_digital_nomad',
  countryCode: 'ES',
  programName: 'Digital Nomad Visa',
  complexity: 'low',
  successRate: '90%',
  totalEstimatedDuration: '2-3 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->remote{Work Remotely?}
  remote -->|Yes| income{Income >= EUR 28,800/year?}
  remote -->|No| End1([Not Eligible])
  income -->|Yes| gather-documents[Gather Required Documents]
  income -->|No| End1
  gather-documents -->submit[Submit Application]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Spain]
  travel -->register[Register with Authorities]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'remote-work-verification',
      title: 'Verify Remote Work Status',
      description: 'Confirm you work remotely for non-Spanish company',
      estimatedDuration: '1 week',
      documents: ['Employment contract or freelance agreements', 'Letter from employer confirming remote work'],
      notes: [
        'Must work remotely for company outside Spain',
        'Can be employee or freelancer',
        'Cannot work for Spanish clients (max 20% of income)',
      ],
    },
    {
      id: 'income-verification',
      title: 'Verify Income Requirements',
      description: 'Confirm you meet minimum income threshold',
      estimatedDuration: '1 week',
      documents: ['Recent pay slips (3 months)', 'Bank statements', 'Tax returns'],
      notes: [
        'Minimum EUR 2,400/month (EUR 28,800/year)',
        'Income must be stable and ongoing',
        'Can be from employment or freelance work',
      ],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['University degree or 3+ years experience', 'Private health insurance', 'Criminal background check (apostilled)'],
        additionalNotes: ['All documents must be apostilled', 'Health insurance must cover Spain'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '2-4 weeks' } },
    {
      id: 'visa',
      title: 'Receive Digital Nomad Visa',
      description: 'Collect your visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Initial visa for 1 year', 'Renewable for 2-year periods', 'Can apply for PR after 5 years', 'Family can join'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Digital Nomad Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Oficina de Extranjería',
        additionalNotes: ['Get TIE within 30 days', 'Register at Empadronamiento', 'Benefit from Beckham Law tax regime'],
      },
    },
  ],
});

/**
 * Highly Qualified Professional Visa - For skilled workers
 */
export const highlyQualifiedVisa: FlowchartDefinition = buildFlowchart({
  programId: 'es_highly_qualified',
  countryCode: 'ES',
  programName: 'Highly Qualified Professional Visa',
  complexity: 'medium',
  successRate: '80%',
  totalEstimatedDuration: '2-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer --> degree{Relevant Degree?}
  degree -->|Yes| salary{Salary >= EUR 30,000?}
  degree -->|No| End1([Not Eligible])
  salary -->|Yes| gather-documents[Gather Required Documents]
  salary -->|No| End1
  gather-documents -->submit[Submit Application]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| permit[Receive Permit]
  decision -->|Rejected| End2([Process Ended])
  permit -->travel[Travel to Spain]
  travel -->register[Register with Authorities]
  register --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 30000,
        additionalNotes: ['Employer must be registered in Spain', 'Job must match your qualifications'],
      },
    },
    {
      id: 'degree-verification',
      title: 'Verify Degree Requirements',
      description: 'Confirm you have required education',
      estimatedDuration: '1 week',
      documents: ['University degree certificate', 'Transcript of records'],
      notes: ['Bachelor degree minimum', 'Degree must be relevant to job', 'May need degree recognition (homologacion)'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['Degree certificate (apostilled)', 'Criminal background check', 'Medical certificate'],
        additionalNotes: ['All documents must be apostilled and translated', 'Use certified translator'],
      },
    },
    {
      id: 'employer-application',
      title: 'Employer Submits Work Authorization',
      description: 'Employer applies for work authorization',
      estimatedDuration: '2-4 weeks',
      documents: ['Employment contract', 'Company documents', 'Work authorization application'],
      notes: ['Employer applies at Provincial Labor Office', 'Fast-track for highly qualified workers'],
    },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '4-6 weeks' } },
    {
      id: 'permit',
      title: 'Receive Work Permit',
      description: 'Collect your work and residence permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Approval letter', 'Passport'],
      notes: ['Permit valid for 1-2 years initially', 'Renewable', 'Can apply for PR after 5 years'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'highly qualified work permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Oficina de Extranjería',
        additionalNotes: ['Get TIE within 30 days', 'Register with Social Security', 'Get NIE number'],
      },
    },
  ],
});

/**
 * Family Reunification
 */
export const familyReunification: FlowchartDefinition = buildFlowchart({
  programId: 'es_family_reunification',
  countryCode: 'ES',
  programName: 'Family Reunification Visa',
  complexity: 'medium',
  successRate: '75%',
  totalEstimatedDuration: '4-6 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->sponsor{Sponsor Eligible?}
  sponsor -->|Yes| income{Income Sufficient?}
  sponsor -->|No| End1([Not Eligible])
  income -->|Yes| relationship[Prove Relationship]
  income -->|No| End1
  relationship -->gather-documents[Gather Required Documents]
  gather-documents -->submit[Submit Application]
  submit -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to Spain]
  travel -->register[Register with Authorities]
  register --> Success([Process Complete])`,
  steps: [
    {
      id: 'sponsor-eligibility',
      title: 'Verify Sponsor Eligibility',
      description: 'Confirm family member in Spain meets requirements',
      estimatedDuration: '1 week',
      documents: ['Sponsor residence permit or Spanish passport', 'Sponsor income statements', 'Sponsor housing documents'],
      notes: [
        'Sponsor must have valid residence permit or be Spanish citizen',
        'Must have lived in Spain for 1+ year',
        'Must meet income and housing requirements',
      ],
    },
    {
      id: 'income-housing',
      title: 'Verify Income and Housing',
      description: 'Confirm sponsor meets financial requirements',
      estimatedDuration: '1-2 weeks',
      documents: ['Recent pay slips (3 months)', 'Tax returns', 'Housing lease or ownership documents'],
      notes: ['Income must be sufficient for family size', 'Housing must be adequate', 'Specific thresholds vary by region'],
    },
    {
      id: 'relationship-proof',
      title: 'Prove Family Relationship',
      description: 'Document your relationship to sponsor',
      estimatedDuration: '2-4 weeks',
      documents: ['Marriage certificate (if spouse)', 'Birth certificates (if parent/child)', 'Partnership registration (if partner)'],
      notes: ['All certificates must be apostilled', 'Relationship must be genuine'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        additionalDocuments: ['Relationship documents (apostilled)', 'Sponsor documents', 'Criminal background check', 'Medical certificate'],
        additionalNotes: ['All documents must be apostilled and translated to Spanish'],
      },
    },
    {
      id: 'sponsor-application',
      title: 'Sponsor Submits Application',
      description: 'Sponsor applies for family reunification authorization',
      estimatedDuration: '1-2 weeks',
      documents: ['All gathered documents', 'Application form', 'Application fee'],
      notes: ['Sponsor applies at Oficina de Extranjería in Spain', 'Then applicant applies at consulate'],
    },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '6-8 weeks' } },
    {
      id: 'visa',
      title: 'Receive Family Visa',
      description: 'Collect visa from consulate',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Visa valid for 90 days', 'Must enter Spain and apply for TIE', 'Work rights depend on sponsor status'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'family reunification visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Oficina de Extranjería',
        additionalNotes: ['Get TIE within 30 days', 'Register at Empadronamiento', 'Can apply for PR after 5 years'],
      },
    },
  ],
});

/**
 * Export all Spain flowcharts as a record for compatibility with existing system
 */
export const spainFlowchartsNew: Record<string, FlowchartDefinition> = {
  golden_visa: goldenVisa,
  non_lucrative: nonLucrativeVisa,
  digital_nomad: digitalNomadVisa,
  highly_qualified: highlyQualifiedVisa,
  family_reunification: familyReunification,
};
