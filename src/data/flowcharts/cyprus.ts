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
 Start([Start Process]) --> job-offer[Secure Job Offer<br/>from Cyprus Employer]
 job-offer --> check-salary{Salary >= EUR 1,500/month<br/>( EUR 18,000/year)?}
 check-salary -->|Yes| gather-documents[Gather Required Documents]
 check-salary -->|No| End1([Not Eligible])
 gather-documents --> submit-application[Submit Application to<br/>Cyprus Immigration]
 submit-application --> processing[Processing<br/>60-90 Days]
 processing --> decision{Decision}
 decision -->|Approved| receive-permit[Receive Work Permit]
 decision -->|Rejected| consider-appeal[Consider Appeal]
 receive-permit --> travel[Travel to Cyprus]
 travel --> register[Register at Immigration<br/>Office]
 register --> Success([Process Complete])
 consider-appeal --> End2([Process Ended])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style receive-permit fill:#e1e5ff
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
 id: 'check-salary',
 title: 'Verify Salary Requirement',
 description: 'Ensure the job offer meets minimum salary threshold',
 estimatedDuration: '1 day',
 documents: [
 'Employment contract with salary details',
 ],
 notes: [
 'Minimum salary: EUR 1,500/month (EUR 18,000/year)',
 'Lower than most Western European countries',
 'Salary must be clearly stated in contract',
 ],
 isConditional: true,
 condition: 'Salary must be >= EUR 1,500/month',
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
 id: 'decision',
 title: 'Application Decision',
 description: 'Wait for decision on your work permit application',
 estimatedDuration: '1-2 weeks',
 documents: [],
 notes: [
 'Decision typically made within processing period',
 'Notification sent by email or post',
 'If rejected, reasons will be provided',
 ],
 },
 {
 id: 'receive-permit',
 title: 'Receive Work Permit',
 description: 'Collect your approved work permit',
 estimatedDuration: '1 week',
 documents: [
 'Passport',
 'Approval notification',
 ],
 notes: [
 'Work permit valid for 1-3 years',
 'Renewable',
 'Can now travel to Cyprus',
 ],
 },
 {
 id: 'consider-appeal',
 title: 'Consider Appeal',
 description: 'If rejected, consider appealing the decision',
 estimatedDuration: 'Varies',
 documents: [
 'Rejection letter',
 'Additional supporting documents',
 ],
 notes: [
 'Appeal must be filed within 30 days',
 'Consult immigration lawyer',
 'Success rate varies',
 ],
 },
 {
 id: 'travel',
 title: 'Travel to Cyprus',
 description: 'Book travel and relocate to Cyprus',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Valid passport',
 'Work permit',
 'Proof of accommodation',
 ],
 notes: [
 'Major airports: Larnaca (LCA) and Paphos (PFO)',
 'English is official language',
 'Warm climate year-round',
 'Strategic location (Europe/Asia/Africa)',
 ],
 },
 {
 id: 'register',
 title: 'Register at Immigration Office',
 description: 'Complete registration formalities in Cyprus',
 estimatedDuration: '1 day',
 documents: [
 'Work permit',
 'All original documents',
 'Proof of accommodation',
 ],
 notes: [
 'Register at local immigration office within 7 days of arrival',
 'Bring all original documents',
 'Family members can join',
 'PR after 5 years, citizenship after 7 years',
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
  Start([Start Process]) --> business-idea[Develop Innovative<br/>Business Idea]
  business-idea --> CheckFunds{Have EUR 20,000<br/>minimum funds?}
  CheckFunds -->|Yes| prepare-business-plan[Prepare Detailed<br/>Business Plan]
  CheckFunds -->|No| End1([Not Eligible])
  prepare-business-plan --> submit-to-ministry[Submit to Cyprus Deputy<br/>Ministry of Research]
  submit-to-ministry --> ministry-approval[Ministry Review<br/>30-60 Days]
  ministry-approval --> Decision1{Approved?}
  Decision1 -->|Yes| gather-documents[Gather Required Documents]
  Decision1 -->|Rejected| consider-resubmission[Consider Resubmission]
  consider-resubmission --> End2([Process Ended])
  gather-documents --> submit-visa[Submit Visa Application]
  submit-visa --> visa-processing[Processing<br/>60-90 Days]
  visa-processing --> Decision2{Decision}
  Decision2 -->|Approved| receive-visa[Receive Startup Visa]
  Decision2 -->|Rejected| consider-appeal[Consider Appeal]
  receive-visa --> travel-to-cyprus[Travel to Cyprus]
  travel-to-cyprus --> register-business[Register Business<br/>in Cyprus]
  register-business --> Success([Process Complete])
  consider-appeal --> End3([Process Ended])

  style Start fill:#e1f5e1
  style Success fill:#e1f5e1
  style End1 fill:#ffe1e1
  style End2 fill:#ffe1e1
  style End3 fill:#ffe1e1
  style receive-visa fill:#e1e5ff
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
      id: 'visa-processing',
      title: 'Visa Application Processing',
      description: 'Wait for Cyprus Immigration to process your startup visa application',
      estimatedDuration: '60-90 days',
      documents: [],
      notes: [
        'Processing time typically 60-90 days',
        'May be contacted for additional information',
        'Track application status online',
        'Biometrics already collected at submission',
        'Decision communicated via email and/or mail',
      ],
    },
    {
      id: 'receive-visa',
      title: 'Receive Startup Visa',
      description: 'Receive approval and collect your Cyprus Startup Visa',
      estimatedDuration: '1 week',
      documents: [
        'Approval notification',
        'Passport for visa stamping',
        'Visa fee payment receipt',
      ],
      notes: [
        'Visa initially valid for 1 year',
        'Renewable based on business progress',
        'Multiple entry visa',
        'Family members can apply for dependent visas',
        'Visa allows you to work for your own startup',
      ],
    },
    {
      id: 'travel-to-cyprus',
      title: 'Travel to Cyprus',
      description: 'Travel to Cyprus with your startup visa',
      estimatedDuration: '1-3 days',
      documents: [
        'Valid passport with startup visa',
        'Proof of accommodation',
        'Travel insurance',
        'Ministry approval letter (copy)',
      ],
      notes: [
        'Must register at immigration office within 7 days of arrival',
        'Bring all original documents',
        'English is official language - easy communication!',
        'Major airports: Larnaca (LCA) and Paphos (PFO)',
        'EU member state - Schengen-like benefits',
      ],
    },
    {
      id: 'register-business',
      title: 'Register Business in Cyprus',
      description: 'Complete business registration and immigration formalities',
      estimatedDuration: '2-4 weeks',
      documents: [
        'Business registration application',
        'Company articles of association',
        'Proof of registered office address',
        'Director/shareholder details',
        'Business bank account',
        'Tax registration (TIC number)',
      ],
      notes: [
        'Register business within 30 days of arrival',
        'Register at local immigration office within 7 days',
        'Register with Tax Department for TIC number',
        'Open business bank account',
        'Low corporate tax rate (12.5%)',
        'Access to EU market',
        'Growing startup ecosystem in Nicosia and Limassol',
        'PR eligible after 5 years, citizenship after 7 years',
        'Tax benefits for startups and R&D activities',
        'English is official language - business-friendly!',
      ],
    },
    {
      id: 'consider-resubmission',
      title: 'Consider Resubmission',
      description: 'Review rejection reasons and decide whether to revise and resubmit',
      estimatedDuration: '1-2 weeks',
      documents: [
        'Rejection letter with reasons',
        'Original application materials',
      ],
      notes: [
        'Review rejection reasons carefully',
        'Common issues: insufficient innovation, weak business plan, inadequate funding',
        'Can revise business plan and resubmit',
        'Consider consulting with Cyprus startup advisors',
        'Address all concerns raised by Ministry',
        'No limit on resubmissions, but improve application first',
      ],
    },
    {
      id: 'consider-appeal',
      title: 'Consider Appeal',
      description: 'Review visa rejection and consider appeal options',
      estimatedDuration: '1-2 weeks',
      documents: [
        'Visa rejection letter',
        'Original application documents',
        'Ministry approval letter',
      ],
      notes: [
        'Review rejection reasons carefully',
        'Appeal rights may be limited',
        'Consider reapplying with stronger documentation',
        'Consult with immigration lawyer if needed',
        'Common issues: incomplete documents, concerns about funds',
        'Having Ministry approval is strong foundation for reapplication',
      ],
    },
  ],
 },

 'cy_family_reunification': {
 programId: 'cy_family_reunification',
 countryCode: 'CY',
 programName: 'Family Reunification',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) --> check[Check Eligibility]
 check --> eligible{Sponsor<br/>Eligible?}
 eligible -->|Yes| docs[Gather Documents]
 eligible -->|No| End1([Not Eligible])
 docs --> submit[Submit Application]
 submit --> process[Processing 60-90 Days]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit --> travel[Travel to Cyprus]
 travel --> register[Register at Immigration]
 register --> Success([Complete])
 appeal --> End2([Process Ended])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style permit fill:#e1e5ff
`,
 steps: [
 {
 id: 'check',
 title: 'Check Eligibility',
 description: 'Verify sponsor has valid residence permit',
 estimatedDuration: '1 week',
 documents: ['Sponsor residence permit', 'Proof of relationship'],
 notes: ['Sponsor must have valid permit', 'Spouse, children, parents eligible'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Marriage/birth certificate', 'Proof of accommodation', 'Proof of income', 'Health insurance'],
 notes: ['All documents must be apostilled', 'Translations to Greek or English'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Cyprus Immigration',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee'],
 notes: ['Processing: 60-90 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Immigration reviews application',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: ['Relationship verified'],
 },
 {
 id: 'permit',
 title: 'Receive Permit',
 description: 'Receive family reunification permit',
 estimatedDuration: '1 week',
 documents: ['Residence permit'],
 notes: ['Same validity as sponsor permit'],
 },
 {
 id: 'travel',
 title: 'Travel to Cyprus',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airports: Larnaca (LCA), Paphos (PFO)'],
 },
 {
 id: 'register',
 title: 'Register at Immigration',
 description: 'Register within 7 days',
 estimatedDuration: '1 week',
 documents: ['Proof of address'],
 notes: ['Register within 7 days', 'PR in 5 years'],
 },
 {
 id: 'appeal',
 title: 'Consider Appeal',
 description: 'If rejected, evaluate options',
 estimatedDuration: '1-2 months',
 documents: ['Rejection decision', 'Appeal form'],
 notes: ['Can reapply with additional evidence'],
 },
 ],
 },

 'cy_digital_nomad': {
 programId: 'cy_digital_nomad',
 countryCode: 'CY',
 programName: 'Digital Nomad Visa',
 totalEstimatedDuration: '1-2 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) --> check[Check Eligibility]
 check --> income{EUR 3,500/mo<br/>Income?}
 income -->|Yes| docs[Gather Documents]
 income -->|No| End1([Not Eligible])
 docs --> submit[Submit Application]
 submit --> process[Processing 30-60 Days]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit --> travel[Travel to Cyprus]
 travel --> register[Register at Immigration]
 register --> Success([Complete])
 appeal --> End2([Process Ended])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style permit fill:#e1e5ff
`,
 steps: [
 {
 id: 'check',
 title: 'Check Eligibility',
 description: 'Verify remote work and income',
 estimatedDuration: '1 week',
 documents: ['Employment contract', 'Proof of income'],
 notes: ['EUR 3,500/month minimum', 'Work for non-Cyprus company', 'Mediterranean lifestyle'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Employment contract', 'Bank statements (6 months)', 'Health insurance', 'Criminal check'],
 notes: ['All documents in English or Greek'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit online to Cyprus authorities',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee (EUR 70)'],
 notes: ['Processing: 30-60 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Immigration reviews application',
 estimatedDuration: '30-60 days',
 documents: [],
 notes: ['Income and employment verified'],
 },
 {
 id: 'permit',
 title: 'Receive Permit',
 description: 'Receive digital nomad permit',
 estimatedDuration: '1 week',
 documents: ['Residence permit'],
 notes: ['Valid for 1 year, renewable up to 3 years'],
 },
 {
 id: 'travel',
 title: 'Travel to Cyprus',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airports: Larnaca (LCA), Paphos (PFO)', '300+ days of sunshine'],
 },
 {
 id: 'register',
 title: 'Register at Immigration',
 description: 'Register within 7 days',
 estimatedDuration: '1 week',
 documents: ['Proof of address'],
 notes: ['Register within 7 days', 'No local taxation on foreign income'],
 },
 {
 id: 'appeal',
 title: 'Consider Appeal',
 description: 'If rejected, evaluate options',
 estimatedDuration: '1-2 months',
 documents: ['Rejection decision', 'Appeal form'],
 notes: ['Can reapply with additional evidence'],
 },
 ],
 },
};

