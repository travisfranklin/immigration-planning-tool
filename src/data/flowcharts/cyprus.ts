/**
 * Cyprus Immigration Process Flowcharts
 * Defines the step-by-step process for each Cyprus visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const cyprusFlowcharts: Record<string, FlowchartDefinition> = {
 'cy_golden_visa': {
 programId: 'cy_golden_visa',
 countryCode: 'CY',
 programName: 'Golden Visa (Permanent Residence)',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '95%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> Investment{Investment Type?}
 Investment -->|Real Estate EUR 300k| choose-investment[Purchase Property<br/> EUR 300,000 minimum]
 Investment -->|Business EUR 300k| Business[Invest in Business<br/> EUR 300,000]
 Investment -->|Combination| Combo[Combination of Investments<br/> EUR 300,000 total]
 choose-investment --> verify-income[Verify Annual Income<br/> EUR 50,000 minimum]
 Business -->verify-income
 Combo -->verify-income
 income-verification --> CheckIncome{Income Sufficient?}
 CheckIncome -->|Yes| gather-documents[Gather Required Documents]
 CheckIncome -->|No| End1([Not Eligible])
 gather-documents -->submit-application[Submit Application to<br/>Cyprus Immigration]
 submit-application --> receive-pr[Processing<br/>60-90 Days]
 processing --> Decision{Decision}
 Decision -->|Approved| PR[Receive Permanent Residence<br/>Immediate PR!]
 Decision -->|Rejected| Appeal[Consider Appeal]
 PR --> arrival[Travel to Cyprus]
 arrival --> Success([Process Complete])
 Appeal --> End2([Process Ended])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style PR fill:#e1e5ff
`,
 steps: [
 {
 id: 'choose-investment',
 title: 'Choose and Complete Investment',
 description: 'Select and complete your EUR 300,000 investment in Cyprus',
 estimatedDuration: '1-2 months',
 documents: [
 'Property deed (if real estate)',
 'Business registration (if business investment)',
 'Proof of payment ( EUR 300,000)',
 'Investment certificate',
 'Proof of funds',
 ],
 notes: [
 'Minimum EUR 300,000 investment required',
 'Options: Real estate, business, or combination',
 'Real estate: Residential or commercial property',
 'Business: Must create jobs or contribute to economy',
 'Investment must be maintained',
 'Popular areas: Limassol, Paphos, Nicosia',
 ],
 },
 {
 id: 'verify-income',
 title: 'Verify Annual Income Requirement',
 description: 'Prove you have EUR 50,000 annual income ( EUR 15,000 per dependent)',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Bank statements (last 6 months)',
 'Employment contract or business income proof',
 'Tax returns (last 2 years)',
 'Investment income statements',
 ],
 notes: [
 'Main applicant: EUR 50,000/year minimum',
 'Spouse: + EUR 15,000/year',
 'Each dependent: + EUR 10,000/year',
 'Income can be from employment, business, investments, or pension',
 'Must prove income is stable and recurring',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the Golden Visa application',
 estimatedDuration: '3-4 weeks',
 documents: [
 'Valid passport',
 'Proof of investment (property deed, business registration)',
 'Proof of annual income ( EUR 50,000+)',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Cyprus)',
 'Passport-style photographs',
 'Marriage certificate (if applicable)',
 'Birth certificates for dependents',
 ],
 notes: [
 'All documents must be apostilled (Hague Convention)',
 'Translations to English or Greek accepted (English is official!)',
 'Criminal background check must be recent (within 6 months)',
 'Family members included in application',
 'Health insurance must cover entire family',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application to Cyprus Immigration',
 description: 'Submit your Golden Visa application to Cyprus authorities',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 500)',
 'Appointment confirmation',
 ],
 notes: [
 'Can submit at Cyprus Embassy or in Cyprus',
 'Appointment may be required',
 'Biometrics collected',
 'Application fee is non-refundable',
 'English is official language - no translation issues!',
 ],
 },
 {
 id: 'receive-pr',
 title: 'Receive Permanent Residence',
 description: 'Receive your Cyprus Permanent Residence permit',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: [
 'Processing time: typically 60-90 days',
 'One of fastest PR programs in EU!',
 'Receive PERMANENT residence immediately (not temporary!)',
 'Renewable every 5 years (administrative)',
 'No minimum stay requirement',
 'Can work and study in Cyprus',
 'Family members included',
 'Citizenship after 7 years',
 'English is official language',
 'Low corporate tax (12.5%)',
 'Strategic location (Europe/Asia/Africa)',
 ],
 },
 ],
 },
 'cy_work_permit': {
 programId: 'cy_work_permit',
 countryCode: 'CY',
 programName: 'Work Permit',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> JobOffer[Secure Job Offer<br/>from Cyprus Employer]
 JobOffer --> CheckSalary{Salary >= EUR 1,500/month<br/>( EUR 18,000/year)?}
 CheckSalary -->|Yes| GatherDocs[Gather Required Documents]
 CheckSalary -->|No| End1([Not Eligible])
 GatherDocs --> Submit[Submit Application to<br/>Cyprus Immigration]
 Submit --> Processing[Processing<br/>60-90 Days]
 Processing --> Decision{Decision}
 Decision -->|Approved| Permit[Receive Work Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Permit --> Travel[Travel to Cyprus]
 Travel --> Register[Register at Immigration<br/>Office]
 Register --> Success([Process Complete])
 Appeal --> End2([Process Ended])
 
 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style Permit fill:#e1e5ff
`,
 steps: [
 {
 id: 'job-offer',
 title: 'Secure Job Offer from Cyprus Employer',
 description: 'Obtain a binding job offer from a registered Cyprus employer',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 1,500/month = EUR 18,000/year)',
 'Employer registration documents',
 ],
 notes: [
 'Employer must be registered in Cyprus',
 'Minimum salary: EUR 1,500/month ( EUR 18,000/year)',
 'English is official language - major advantage!',
 'Growing tech and finance sectors',
 'iGaming industry hub',
 'No specific occupation list',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the work permit application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 6 months)',
 'Employment contract',
 'Proof of qualifications (diplomas, certificates)',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Cyprus)',
 'Proof of accommodation in Cyprus',
 'Passport-style photographs',
 ],
 notes: [
 'All documents must be apostilled',
 'English or Greek translations accepted (English is official!)',
 'Criminal background check must be recent (within 6 months)',
 'Health insurance must cover entire stay',
 'Accommodation can be rental or hotel initially',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application to Cyprus Immigration',
 description: 'Submit your work permit application to Cyprus authorities',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 150)',
 'Appointment confirmation',
 ],
 notes: [
 'Can submit at Cyprus Embassy or in Cyprus',
 'Appointment may be required',
 'Biometrics collected',
 'Employer may need to submit documents too',
 'English is official language - easy process!',
 ],
 },
 {
 id: 'processing',
 title: 'Processing Period',
 description: 'Wait for Cyprus Immigration to process your application',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: [
 'Processing time: typically 60-90 days',
 'May be contacted for additional documents',
 'Can check status online',
 'Employer may be contacted for verification',
 ],
 },
 {
 id: 'receive-permit-register',
 title: 'Receive Work Permit and Register in Cyprus',
 description: 'Receive your work permit, travel to Cyprus, and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Work permit',
 'All original documents',
 'Proof of accommodation',
 ],
 notes: [
 'Work permit valid for 1-3 years',
 'Renewable',
 'Register at local immigration office within 7 days of arrival',
 'Family members can join',
 'PR after 5 years, citizenship after 7 years',
 'English is official language',
 'Warm climate year-round',
 'Strategic location (Europe/Asia/Africa)',
 'Low corporate tax (12.5%)',
 ],
 },
 ],
 },
 'cy_startup_visa': {
  programId: 'cy_startup_visa',
  countryCode: 'CY',
  programName: 'Startup Visa',
  totalEstimatedDuration: '3-5 months',
  complexity: 'medium',
  successRate: '80%',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) --> BusinessIdea[Develop Innovative<br/>Business Idea]
  BusinessIdea --> CheckFunds{Have EUR 20,000<br/>minimum funds?}
  CheckFunds -->|Yes| PrepareBusinessPlan[Prepare Detailed<br/>Business Plan]
  CheckFunds -->|No| End1([Not Eligible])
  PrepareBusinessPlan --> SubmitToMinistry[Submit to Cyprus Deputy<br/>Ministry of Research]
  SubmitToMinistry --> MinistryReview[Ministry Review<br/>30-60 Days]
  MinistryReview --> Decision1{Approved?}
  Decision1 -->|Yes| GatherDocs[Gather Required Documents]
  Decision1 -->|Rejected| Appeal1[Consider Resubmission]
  Appeal1 --> End2([Process Ended])
  GatherDocs --> SubmitVisa[Submit Visa Application]
  SubmitVisa --> Processing[Processing<br/>60-90 Days]
  Processing --> Decision2{Decision}
  Decision2 -->|Approved| Visa[Receive Startup Visa]
  Decision2 -->|Rejected| Appeal2[Consider Appeal]
  Visa --> Travel[Travel to Cyprus]
  Travel --> RegisterBusiness[Register Business<br/>in Cyprus]
  RegisterBusiness --> Success([Process Complete])
  Appeal2 --> End3([Process Ended])

  style Start fill:#e1f5e1
  style Success fill:#e1f5e1
  style End1 fill:#ffe1e1
  style End2 fill:#ffe1e1
  style End3 fill:#ffe1e1
  style Visa fill:#e1e5ff
`,
  steps: [
    {
      id: 'business-idea',
      title: 'Develop Innovative Business Idea',
      description: 'Create an innovative, scalable business concept suitable for Cyprus startup ecosystem',
      estimatedDuration: '1-2 months',
      documents: [
        'Business concept description',
        'Market research',
        'Competitive analysis',
        'Innovation statement',
      ],
      notes: [
        'Must be innovative and scalable',
        'Technology, digital services, or innovative products preferred',
        'Should demonstrate EU market potential',
        'English is official language - major advantage!',
        'Cyprus offers access to EU, Middle East, and African markets',
      ],
    },
    {
      id: 'prepare-business-plan',
      title: 'Prepare Detailed Business Plan',
      description: 'Create comprehensive business plan for Ministry approval',
      estimatedDuration: '3-4 weeks',
      documents: [
        'Executive summary',
        'Detailed business plan (20-30 pages)',
        'Financial projections (3-5 years)',
        'Market analysis',
        'Team composition and CVs',
        'Proof of funds (EUR 20,000 minimum)',
        'Innovation and scalability statement',
      ],
      notes: [
        'Minimum EUR 20,000 in available funds required',
        'Must demonstrate job creation potential',
        'Should show clear path to profitability',
        'Highlight innovation and competitive advantage',
        'English language plan accepted (official language!)',
        'Consider Cyprus tax benefits (12.5% corporate tax)',
      ],
    },
    {
      id: 'submit-to-ministry',
      title: 'Submit to Cyprus Deputy Ministry of Research',
      description: 'Submit business plan for evaluation and approval',
      estimatedDuration: '1 week',
      documents: [
        'Complete business plan',
        'Application form',
        'Proof of funds',
        'Team member CVs and qualifications',
        'Letters of support (if any)',
      ],
      notes: [
        'Submit to Deputy Ministry of Research, Innovation and Digital Policy',
        'Application fee may apply',
        'Ministry evaluates innovation, scalability, and economic impact',
        'Processing time: 30-60 days',
        'May request additional information or presentation',
      ],
    },
    {
      id: 'ministry-approval',
      title: 'Receive Ministry Approval',
      description: 'Wait for Ministry evaluation and approval decision',
      estimatedDuration: '30-60 days',
      documents: [],
      notes: [
        'Ministry evaluates innovation and economic potential',
        'May be invited for interview or presentation',
        'Approval letter required for visa application',
        'If rejected, can revise and resubmit',
        'Success rate approximately 80% for well-prepared applications',
      ],
    },
    {
      id: 'gather-documents',
      title: 'Gather Required Documents for Visa',
      description: 'Collect all necessary documents for startup visa application',
      estimatedDuration: '2-3 weeks',
      documents: [
        'Valid passport (valid for at least 6 months)',
        'Ministry approval letter',
        'Business plan',
        'Proof of funds (EUR 20,000+)',
        'Criminal background check (FBI check for US citizens)',
        'Health insurance (valid in Cyprus)',
        'Proof of accommodation in Cyprus',
        'Passport-style photographs',
        'Educational certificates',
      ],
      notes: [
        'All documents must be apostilled',
        'English or Greek translations accepted (English is official!)',
        'Criminal background check must be recent (within 6 months)',
        'Health insurance must cover entire stay',
        'Accommodation can be rental or hotel initially',
        'Can include co-founders in application',
      ],
    },
    {
      id: 'submit-visa',
      title: 'Submit Visa Application',
      description: 'Submit startup visa application to Cyprus Immigration',
      estimatedDuration: '1 day',
      documents: [
        'All gathered documents',
        'Ministry approval letter',
        'Application fee payment (~EUR 150)',
        'Appointment confirmation',
      ],
      notes: [
        'Can submit at Cyprus Embassy or in Cyprus',
        'Appointment may be required',
        'Biometrics collected',
        'English is official language - easy process!',
        'Processing time: 60-90 days',
      ],
    },
    {
      id: 'receive-visa-register',
      title: 'Receive Visa and Register Business',
      description: 'Receive startup visa, travel to Cyprus, and register your business',
      estimatedDuration: '2-4 weeks',
      documents: [
        'Startup visa',
        'All original documents',
        'Business registration documents',
        'Proof of accommodation',
      ],
      notes: [
        'Visa initially valid for 1 year',
        'Renewable based on business progress',
        'Register business within 30 days of arrival',
        'Register at local immigration office within 7 days',
        'Family members can join',
        'English is official language',
        'Low corporate tax (12.5%)',
        'Access to EU market',
        'Growing startup ecosystem (Nicosia, Limassol)',
        'PR in 5 years, citizenship in 7 years',
        'Tax benefits for startups and R&D',
      ],
    },
  ],
 },
};

