/**
 * Denmark Immigration Process Flowcharts
 * Defines the step-by-step process for each Danish visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const denmarkFlowcharts: Record<string, FlowchartDefinition> = {
 'dk_fast_track': {
 programId: 'dk_fast_track',
 countryCode: 'DK',
 programName: 'Fast-Track Scheme',
 totalEstimatedDuration: '2-3 months',
 complexity: 'low',
 successRate: '95%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer from<br/>Certified Fast-Track Company]
 job-offer --> CheckSalary{Salary >= DKK 465,000<br/>or Recent Grad >= DKK 375,000?}
 CheckSalary -->|Yes| CheckCompany{Employer on<br/>Fast-Track List?}
 CheckSalary -->|No| End1([Not Eligible])
 CheckCompany -->|Yes| gather-documents[Gather Required Documents]
 CheckCompany -->|No| End2([Use Different Scheme])
 gather-documents -->submit-application[Submit Application Online]
 submit-application --> fast-processing[Fast-Track Processing<br/><=30 Days]
 processing --> Decision{Decision}
 Decision -->|Approved| Permit[Receive Residence Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Permit --> arrival[Travel to Denmark]
 arrival --> registration[Register at SIRI<br/>Get CPR Number]
 registration --> Success([Process Complete])
 Appeal --> End3([Process Ended])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#fff4e1
 style End3 fill:#ffe1e1
 style Permit fill:#e1e5ff
`,
 steps: [
 {
 id: 'job-offer',
 title: 'Secure Job Offer from Certified Fast-Track Company',
 description: 'Obtain a binding job offer from a Danish employer on the Fast-Track list',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract',
 'Job description detailing responsibilities',
 'Salary confirmation (DKK 465,000/year = EUR 62,400/year OR DKK 375,000/year = EUR 50,300/year for recent graduates)',
 'Confirmation employer is on Fast-Track list',
 ],
 notes: [
 'Employer must be certified by SIRI (Danish Immigration Service)',
 'Check Fast-Track company list: https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Fast-track',
 'Lower salary threshold (DKK 375,000) for graduates within 3 years',
 'Major companies: Maersk, Novo Nordisk, Vestas, LEGO, etc.',
 'Contract should be for at least 12 months',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation for the Fast-Track application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 3 months beyond permit)',
 'Completed application form',
 'Passport-sized photos (biometric)',
 'Employment contract',
 'Proof of qualifications/education (if applicable)',
 'CV/Resume',
 'Proof of health insurance (if not covered by employer)',
 ],
 notes: [
 'Documents should be in Danish or English',
 'No degree requirement for Fast-Track (unlike EU Blue Card)',
 'Employer handles most of the documentation',
 'Application fee: DKK 3,655 (~ EUR 490)',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application Online',
 description: 'Submit Fast-Track application through SIRI online portal',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents (digital copies)',
 'Application fee payment',
 'Employer certification documents',
 ],
 notes: [
 'Application submitted online via SIRI portal',
 'Employer must submit supporting documents',
 'You receive case number for tracking',
 'Can apply from outside Denmark',
 ],
 },
 {
 id: 'fast-processing',
 title: 'Fast-Track Processing',
 description: 'SIRI processes your application under Fast-Track scheme',
 estimatedDuration: '15-30 days',
 documents: [],
 notes: [
 'Guaranteed processing within 30 days',
 'Average processing time is 15-20 days',
 'Can track status online with case number',
 'May be contacted for additional documents (rare)',
 'Fastest work permit processing in Denmark',
 ],
 },
 {
 id: 'decision',
 title: 'Receive Decision',
 description: 'Get approval or rejection notification',
 estimatedDuration: '1 week',
 documents: [
 'Decision letter from SIRI',
 'Residence permit card (if approved)',
 ],
 notes: [
 'Notification sent via email and online portal',
 'If approved, receive residence permit card by mail',
 'Permit typically valid for duration of contract (up to 4 years)',
 'Can appeal if rejected within 8 weeks',
 'Success rate is very high (~95%) for Fast-Track',
 ],
 },
 {
 id: 'travel-register',
 title: 'Travel to Denmark and Register',
 description: 'Move to Denmark and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Residence permit card',
 'Passport',
 'Employment contract',
 'Proof of accommodation',
 ],
 notes: [
 'Register at SIRI within 5 days of arrival',
 'Receive CPR number (Civil Registration Number) - essential for everything',
 'Open bank account (requires CPR number)',
 'Register for health insurance (covered by employer)',
 'Apply for Danish tax card (Skattekort)',
 'Family members can join you immediately',
 ],
 },
 ],
 },

 'dk_pay_limit': {
 programId: 'dk_pay_limit',
 countryCode: 'DK',
 programName: 'Pay Limit Scheme',
 totalEstimatedDuration: '3-4 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> JobOffer[Secure Job Offer]
 JobOffer --> CheckSalary{Salary >=<br/>DKK 465,000/year?}
 CheckSalary -->|Yes| GatherDocs[Gather Required Documents]
 CheckSalary -->|No| End1([Not Eligible])
 GatherDocs --> Submit[Submit Application Online]
 Submit --> Processing[Standard Processing<br/>60-90 Days]
 Processing --> Decision{Decision}
 Decision -->|Approved| Permit[Receive Residence Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Permit --> Travel[Travel to Denmark]
 Travel --> Register[Register at SIRI<br/>Get CPR Number]
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
 title: 'Secure High-Salary Job Offer',
 description: 'Obtain a binding job offer from a Danish employer with high salary',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description detailing responsibilities',
 'Salary confirmation (minimum DKK 465,000/year = EUR 62,400/year)',
 ],
 notes: [
 'Salary threshold is DKK 465,000/year (~ EUR 62,400/year)',
 'No education requirement - most flexible Danish scheme',
 'No occupation list requirement',
 'Employer does NOT need to be on Fast-Track list',
 'Contract should be for at least 12 months',
 'Popular for senior professionals and executives',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation for the Pay Limit application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 3 months beyond permit)',
 'Completed application form',
 'Passport-sized photos (biometric)',
 'Employment contract',
 'Salary documentation (payslips, contract)',
 'CV/Resume',
 'Proof of health insurance',
 ],
 notes: [
 'Documents should be in Danish or English',
 'No degree or qualification requirement',
 'Salary is the only hard requirement',
 'Application fee: DKK 3,655 (~ EUR 490)',
 'Simpler documentation than EU Blue Card',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application Online',
 description: 'Submit Pay Limit Scheme application through SIRI online portal',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents (digital copies)',
 'Application fee payment',
 'Employer supporting documents',
 ],
 notes: [
 'Application submitted online via SIRI portal',
 'Employer must provide supporting documentation',
 'You receive case number for tracking',
 'Can apply from outside Denmark',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'SIRI processes your Pay Limit Scheme application',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: [
 'Average processing time is 60-90 days',
 'Longer than Fast-Track but still reasonable',
 'Can track status online with case number',
 'May be contacted for additional documents',
 'No labor market test required',
 ],
 },
 {
 id: 'decision',
 title: 'Receive Decision',
 description: 'Get approval or rejection notification',
 estimatedDuration: '1 week',
 documents: [
 'Decision letter from SIRI',
 'Residence permit card (if approved)',
 ],
 notes: [
 'Notification sent via email and online portal',
 'If approved, receive residence permit card by mail',
 'Permit typically valid for up to 4 years',
 'Can appeal if rejected within 8 weeks',
 'Success rate is high (~90%) if salary requirement met',
 ],
 },
 {
 id: 'travel-register',
 title: 'Travel to Denmark and Register',
 description: 'Move to Denmark and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Residence permit card',
 'Passport',
 'Employment contract',
 'Proof of accommodation',
 ],
 notes: [
 'Register at SIRI within 5 days of arrival',
 'Receive CPR number (Civil Registration Number)',
 'Open bank account (requires CPR number)',
 'Register for health insurance',
 'Apply for Danish tax card (Skattekort)',
 'Family members can join you',
 'Path to PR in 4 years, citizenship in 9 years',
 ],
 },
 ],
 },

 'dk_startup': {
  programId: 'dk_startup',
  countryCode: 'DK',
  programName: 'Startup Denmark',
  totalEstimatedDuration: '3-5 months',
  complexity: 'medium',
  successRate: '70%',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) --> business-idea[Develop Innovative<br/>Business Idea]
  business-idea --> check-funds{Have DKK 50,000<br/>minimum savings?}
  check-funds -->|Yes| prepare-business-plan[Prepare Detailed<br/>Business Plan]
  check-funds -->|No| End1([Not Eligible])
  prepare-business-plan --> submit-to-panel[Submit to Expert Panel]
  submit-to-panel --> panel-review[Expert Panel Review<br/>30-60 Days]
  panel-review --> decision1{Approved?}
  decision1 -->|Yes| gather-documents[Gather Required Documents]
  decision1 -->|Rejected| consider-resubmission[Consider Resubmission]
  consider-resubmission --> End2([Process Ended])
  gather-documents --> submit-visa[Submit Visa Application<br/>to SIRI]
  submit-visa --> visa-processing[Processing<br/>60-90 Days]
  visa-processing --> decision2{Decision}
  decision2 -->|Approved| receive-permit[Receive Residence Permit]
  decision2 -->|Rejected| consider-appeal[Consider Appeal]
  receive-permit --> travel-to-denmark[Travel to Denmark]
  travel-to-denmark --> register-business[Register Business<br/>and Get CPR Number]
  register-business --> Success([Process Complete])
  consider-appeal --> End3([Process Ended])

  style Start fill:#e1f5e1
  style Success fill:#e1f5e1
  style End1 fill:#ffe1e1
  style End2 fill:#ffe1e1
  style End3 fill:#ffe1e1
  style receive-permit fill:#e1e5ff
`,
  steps: [
    {
      id: 'business-idea',
      title: 'Develop Innovative Business Idea',
      description: 'Create an innovative, scalable business concept suitable for Danish startup ecosystem',
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
        'Copenhagen has vibrant startup scene',
        'English widely spoken in business',
        'Access to Nordic and EU markets',
        'High quality of life and work-life balance',
      ],
    },
    {
      id: 'prepare-business-plan',
      title: 'Prepare Detailed Business Plan',
      description: 'Create comprehensive business plan for expert panel approval',
      estimatedDuration: '3-4 weeks',
      documents: [
        'Executive summary',
        'Detailed business plan (15-30 pages)',
        'Financial projections (3-5 years)',
        'Market analysis',
        'Team composition and CVs',
        'Proof of savings (DKK 50,000 minimum = EUR 6,700)',
        'Innovation and scalability statement',
      ],
      notes: [
        'Minimum DKK 50,000 in savings required (EUR 6,700)',
        'Must demonstrate job creation potential',
        'Should show clear path to profitability',
        'Highlight innovation and competitive advantage',
        'English language plan accepted',
        'Copenhagen is major Nordic tech hub',
      ],
    },
    {
      id: 'submit-to-panel',
      title: 'Submit to Expert Panel',
      description: 'Submit business plan for evaluation by Danish expert panel',
      estimatedDuration: '1 week',
      documents: [
        'Complete business plan',
        'Application form',
        'Proof of savings',
        'Team member CVs and qualifications',
        'Letters of support (if any)',
      ],
      notes: [
        'Submit to Startup Denmark expert panel',
        'Panel consists of business experts and investors',
        'Evaluates innovation, scalability, and economic impact',
        'Processing time: 30-60 days',
        'May request additional information or presentation',
      ],
    },
    {
      id: 'panel-review',
      title: 'Expert Panel Review and Approval',
      description: 'Wait for expert panel evaluation and approval decision',
      estimatedDuration: '30-60 days',
      documents: [],
      notes: [
        'Panel evaluates innovation and economic potential',
        'May be invited for interview or presentation',
        'Approval letter required for visa application',
        'If rejected, can revise and resubmit',
        'Success rate approximately 70% for well-prepared applications',
      ],
    },
    {
      id: 'gather-documents',
      title: 'Gather Required Documents for Visa',
      description: 'Collect all necessary documents for Startup Denmark visa application',
      estimatedDuration: '2-3 weeks',
      documents: [
        'Valid passport (valid for at least 3 months)',
        'Expert panel approval letter',
        'Business plan',
        'Proof of savings (DKK 50,000+)',
        'Criminal background check',
        'Health insurance',
        'Proof of accommodation in Denmark',
        'Passport-style photographs (biometric)',
        'Educational certificates',
      ],
      notes: [
        'Documents should be in Danish or English',
        'Criminal background check must be recent (within 6 months)',
        'Health insurance must cover entire stay',
        'Accommodation can be rental or hotel initially',
        'Can include co-founders in application',
      ],
    },
    {
      id: 'submit-visa',
      title: 'Submit Visa Application to SIRI',
      description: 'Submit Startup Denmark visa application to Danish Immigration Service',
      estimatedDuration: '1 week',
      documents: [
        'All gathered documents',
        'Expert panel approval letter',
        'Application fee payment (DKK 3,655 = EUR 490)',
        'Appointment confirmation',
      ],
      notes: [
        'Submit online via SIRI portal',
        'Can submit at Danish Consulate or in Denmark',
        'Appointment required (book 2-4 weeks in advance)',
        'Biometrics collected',
        'Processing time: 60-90 days',
      ],
    },
    {
      id: 'visa-processing',
      title: 'Visa Application Processing',
      description: 'Wait for SIRI to process your Startup Denmark visa application',
      estimatedDuration: '60-90 days',
      documents: [],
      notes: [
        'Processing time typically 60-90 days',
        'May be contacted for additional information',
        'Track application status online with case number',
        'Biometrics already collected at submission',
        'Decision communicated via email and online portal',
      ],
    },
    {
      id: 'receive-permit',
      title: 'Receive Residence Permit',
      description: 'Receive approval and collect your Startup Denmark residence permit',
      estimatedDuration: '1 week',
      documents: [
        'Approval notification',
        'Residence permit card',
        'Permit fee payment receipt',
      ],
      notes: [
        'Permit initially valid for 2 years',
        'Renewable for 3 years based on business progress',
        'Multiple entry permit',
        'Family members can apply for dependent permits',
        'Permit allows you to work for your own startup',
      ],
    },
    {
      id: 'travel-to-denmark',
      title: 'Travel to Denmark',
      description: 'Travel to Denmark with your Startup Denmark residence permit',
      estimatedDuration: '1-3 days',
      documents: [
        'Valid passport with residence permit',
        'Proof of accommodation',
        'Travel insurance',
        'Expert panel approval letter (copy)',
      ],
      notes: [
        'Must register at SIRI within 5 days of arrival',
        'Bring all original documents',
        'English widely spoken in Copenhagen',
        'Main airport: Copenhagen Airport (CPH)',
        'EU member state - Schengen benefits',
      ],
    },
    {
      id: 'register-business',
      title: 'Register Business and Complete Formalities',
      description: 'Complete business registration and immigration formalities',
      estimatedDuration: '2-4 weeks',
      documents: [
        'Business registration application',
        'Company articles of association',
        'Proof of registered office address',
        'Director/shareholder details',
        'Business bank account',
        'CVR number (Danish business registration)',
      ],
      notes: [
        'Register business with Danish Business Authority',
        'Register at SIRI within 5 days of arrival',
        'Receive CPR number (Civil Registration Number) - essential',
        'Open business bank account (requires CPR number)',
        'Corporate tax rate: 22%',
        'Access to Nordic and EU markets',
        'Copenhagen is major Nordic tech hub',
        'PR eligible after 4 years, citizenship after 9 years',
        'High quality of life and work-life balance',
        'English widely spoken in business',
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
        'Consider consulting with Danish startup advisors',
        'Address all concerns raised by expert panel',
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
        'Expert panel approval letter',
      ],
      notes: [
        'Review rejection reasons carefully',
        'Can appeal within 8 weeks of decision',
        'Consider reapplying with stronger documentation',
        'Consult with immigration lawyer if needed',
        'Common issues: incomplete documents, concerns about funds',
        'Having expert panel approval is strong foundation for reapplication',
      ],
    },
  ],
 },
};

