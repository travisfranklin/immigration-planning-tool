/**
 * Czech Republic Immigration Process Flowcharts
 * Defines the step-by-step process for each Czech visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const czechFlowcharts: Record<string, FlowchartDefinition> = {
 'cz_eu_blue_card': {
 programId: 'cz_eu_blue_card',
 countryCode: 'CZ',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '3-5 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer<br/>from Czech Employer]
 job-offer --> CheckSalary{Salary >= EUR 1,800/month<br/>( EUR 21,600/year)?}
 CheckSalary -->|Yes| CheckEducation{Higher Education<br/>Degree?}
 CheckSalary -->|No| End1([Not Eligible])
 CheckEducation -->|Yes| gather-documents[Gather Required Documents]
 CheckEducation -->|No| End2([Not Eligible])
 gather-documents -->submit-application[Submit Application to<br/>Czech Consulate or in Czech]
 submit-application --> processing[Processing<br/>60-90 Days]
 processing --> Decision{Decision}
 Decision -->|Approved| BlueCard[Receive EU Blue Card<br/>2-Year Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 BlueCard --> arrival[Travel to Czech Republic]
 arrival --> registration[Register at Foreign<br/>Police within 3 Days]
 registration --> Success([Process Complete])
 Appeal --> End3([Process Ended])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style End3 fill:#ffe1e1
 style BlueCard fill:#e1e5ff
`,
 steps: [
 {
 id: 'job-offer',
 title: 'Secure Job Offer from Czech Employer',
 description: 'Obtain a binding job offer from a registered Czech employer',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 1,800/month = EUR 21,600/year)',
 'Employer registration documents',
 ],
 notes: [
 'Minimum salary: EUR 1,800/month ( EUR 21,600/year)',
 'Same as Poland, lower than Western Europe',
 'Prague is major tech hub',
 'Employer must be registered in Czech Republic',
 'English widely spoken in tech companies',
 ],
 },
 {
 id: 'verify-education',
 title: 'Verify Higher Education Requirement',
 description: 'Ensure you have a higher education degree (Bachelor\'s or higher)',
 estimatedDuration: '1-2 weeks',
 documents: [
 'University degree (Bachelor\'s, Master\'s, or PhD)',
 'Diploma translation (if not in Czech or English)',
 'Diploma apostille (Hague Convention)',
 ],
 notes: [
 'Bachelor\'s degree minimum',
 'Master\'s or PhD preferred',
 'Degree must be recognized in Czech Republic',
 'Translation to Czech may be required',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the EU Blue Card application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 6 months)',
 'Employment contract',
 'Higher education degree',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Czech Republic)',
 'Proof of accommodation in Czech Republic',
 'Passport-style photographs (2)',
 ],
 notes: [
 'All documents must be apostilled',
 'Translations to Czech required for non-English documents',
 'Criminal background check must be recent (within 6 months)',
 'Health insurance must cover entire stay',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit your EU Blue Card application to Czech authorities',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 100)',
 'Appointment confirmation',
 ],
 notes: [
 'Can submit at Czech Consulate in US or in Czech Republic',
 'Appointment required (book 2-4 weeks in advance)',
 'Bring original documents and copies',
 'Biometrics collected at appointment',
 ],
 },
 {
 id: 'receive-card-register',
 title: 'Receive EU Blue Card and Register in Czech Republic',
 description: 'Receive your EU Blue Card, travel to Czech Republic, and complete registration',
 estimatedDuration: '60-90 days',
 documents: [
 'EU Blue Card',
 'All original documents',
 'Proof of accommodation',
 ],
 notes: [
 'Processing time: typically 60-90 days',
 'EU Blue Card valid for 2 years initially',
 'Register at Foreign Police within 3 days of arrival',
 'Can work throughout EU after 18 months',
 'Family members can join',
 'PR after 5 years, citizenship after 5 years',
 'Prague is major tech hub',
 'High quality of life',
 'Central European location',
 ],
 },
 ],
 },
 'cz_employee_card': {
 programId: 'cz_employee_card',
 countryCode: 'CZ',
 programName: 'Employee Card',
 totalEstimatedDuration: '3-5 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> JobOffer[Secure Job Offer<br/>from Czech Employer]
 JobOffer --> CheckSalary{Salary >= EUR 1,000/month<br/>( EUR 12,000/year)?}
 CheckSalary -->|Yes| GatherDocs[Gather Required Documents]
 CheckSalary -->|No| End1([Not Eligible])
 GatherDocs --> Submit[Submit Application to<br/>Czech Consulate or in Czech]
 Submit --> Processing[Processing<br/>60-90 Days]
 Processing --> Decision{Decision}
 Decision -->|Approved| EmployeeCard[Receive Employee Card<br/>2-Year Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 EmployeeCard --> Travel[Travel to Czech Republic]
 Travel --> Register[Register at Foreign<br/>Police within 3 Days]
 Register --> Success([Process Complete])
 Appeal --> End2([Process Ended])
 
 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style EmployeeCard fill:#e1e5ff
`,
 steps: [
 {
 id: 'job-offer',
 title: 'Secure Job Offer from Czech Employer',
 description: 'Obtain a binding job offer from a registered Czech employer',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 1,000/month = EUR 12,000/year)',
 'Employer registration documents',
 ],
 notes: [
 'Minimum salary: EUR 1,000/month ( EUR 12,000/year)',
 'Lower than EU Blue Card ( EUR 1,800/month)',
 'Prague is major tech hub',
 'Employer must be registered in Czech Republic',
 'English common in tech companies',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the Employee Card application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 6 months)',
 'Employment contract',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Czech Republic)',
 'Proof of accommodation in Czech Republic',
 'Passport-style photographs (2)',
 ],
 notes: [
 'All documents must be apostilled',
 'Translations to Czech required for non-English documents',
 'Criminal background check must be recent (within 6 months)',
 'No higher education degree required (unlike EU Blue Card)',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit your Employee Card application to Czech authorities',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 100)',
 'Appointment confirmation',
 ],
 notes: [
 'Can submit at Czech Consulate in US or in Czech Republic',
 'Appointment required (book 2-4 weeks in advance)',
 'Bring original documents and copies',
 'Biometrics collected at appointment',
 'Combines work permit and residence permit in one card',
 ],
 },
 {
 id: 'receive-card-register',
 title: 'Receive Employee Card and Register in Czech Republic',
 description: 'Receive your Employee Card, travel to Czech Republic, and complete registration',
 estimatedDuration: '60-90 days',
 documents: [
 'Employee Card',
 'All original documents',
 'Proof of accommodation',
 ],
 notes: [
 'Processing time: typically 60-90 days',
 'Employee Card valid for 2 years',
 'Register at Foreign Police within 3 days of arrival',
 'Combines work permit and residence permit',
 'Faster than separate applications',
 'Family members can join',
 'Renewable',
 'PR after 5 years, citizenship after 5 years',
 'Prague is major tech hub',
 'High quality of life',
 ],
 },
 ],
 },
 'cz_startup_visa': {
  programId: 'cz_startup_visa',
  countryCode: 'CZ',
  programName: 'Startup Visa',
  totalEstimatedDuration: '2-4 months',
  complexity: 'medium',
  successRate: '75%',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) --> business-idea[Develop Innovative<br/>Business Idea]
  business-idea --> check-funds{Have EUR 8,000<br/>minimum funds?}
  check-funds -->|Yes| prepare-business-plan[Prepare Detailed<br/>Business Plan]
  check-funds -->|No| End1([Not Eligible])
  prepare-business-plan --> submit-to-czechinvest[Submit to CzechInvest<br/>or Startup Accelerator]
  submit-to-czechinvest --> czechinvest-review[CzechInvest Review<br/>30-45 Days]
  czechinvest-review --> decision1{Approved?}
  decision1 -->|Yes| gather-documents[Gather Required Documents]
  decision1 -->|Rejected| consider-resubmission[Consider Resubmission]
  consider-resubmission --> End2([Process Ended])
  gather-documents --> submit-visa[Submit Visa Application]
  submit-visa --> visa-processing[Processing<br/>30-60 Days]
  visa-processing --> decision2{Decision}
  decision2 -->|Approved| receive-visa[Receive Startup Visa]
  decision2 -->|Rejected| consider-appeal[Consider Appeal]
  receive-visa --> travel-to-czech[Travel to Czech Republic]
  travel-to-czech --> register-business[Register Business<br/>and at Foreign Police]
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
      description: 'Create an innovative, scalable business concept suitable for Czech startup ecosystem',
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
        'Prague has vibrant startup scene',
        'English widely spoken in business',
        'Access to EU market',
        'Lower costs than Western Europe',
      ],
    },
    {
      id: 'prepare-business-plan',
      title: 'Prepare Detailed Business Plan',
      description: 'Create comprehensive business plan for CzechInvest approval',
      estimatedDuration: '3-4 weeks',
      documents: [
        'Executive summary',
        'Detailed business plan (15-25 pages)',
        'Financial projections (3-5 years)',
        'Market analysis',
        'Team composition and CVs',
        'Proof of funds (EUR 8,000 minimum)',
        'Innovation and scalability statement',
      ],
      notes: [
        'Minimum EUR 8,000 in available funds required (CZK 200,000)',
        'Must demonstrate job creation potential',
        'Should show clear path to profitability',
        'Highlight innovation and competitive advantage',
        'English language plan accepted',
        'Prague is major tech hub in Central Europe',
      ],
    },
    {
      id: 'submit-to-czechinvest',
      title: 'Submit to CzechInvest or Startup Accelerator',
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
        'Submit to CzechInvest or authorized startup accelerator',
        'Application fee may apply',
        'CzechInvest evaluates innovation, scalability, and economic impact',
        'Processing time: 30-45 days',
        'May request additional information or presentation',
      ],
    },
    {
      id: 'czechinvest-review',
      title: 'CzechInvest Review and Approval',
      description: 'Wait for CzechInvest evaluation and approval decision',
      estimatedDuration: '30-45 days',
      documents: [],
      notes: [
        'CzechInvest evaluates innovation and economic potential',
        'May be invited for interview or presentation',
        'Approval letter required for visa application',
        'If rejected, can revise and resubmit',
        'Success rate approximately 75% for well-prepared applications',
      ],
    },
    {
      id: 'gather-documents',
      title: 'Gather Required Documents for Visa',
      description: 'Collect all necessary documents for startup visa application',
      estimatedDuration: '2-3 weeks',
      documents: [
        'Valid passport (valid for at least 6 months)',
        'CzechInvest approval letter',
        'Business plan',
        'Proof of funds (EUR 8,000+)',
        'Criminal background check (FBI check for US citizens)',
        'Health insurance (valid in Czech Republic)',
        'Proof of accommodation in Czech Republic',
        'Passport-style photographs (2)',
        'Educational certificates',
      ],
      notes: [
        'All documents must be apostilled',
        'Translations to Czech required for non-English documents',
        'Criminal background check must be recent (within 6 months)',
        'Health insurance must cover entire stay',
        'Accommodation can be rental or hotel initially',
        'Can include co-founders in application',
      ],
    },
    {
      id: 'submit-visa',
      title: 'Submit Visa Application',
      description: 'Submit startup visa application to Czech authorities',
      estimatedDuration: '1 day',
      documents: [
        'All gathered documents',
        'CzechInvest approval letter',
        'Application fee payment (~EUR 100)',
        'Appointment confirmation',
      ],
      notes: [
        'Can submit at Czech Consulate or in Czech Republic',
        'Appointment required (book 2-4 weeks in advance)',
        'Biometrics collected',
        'English widely spoken at consulates',
        'Processing time: 30-60 days',
      ],
    },
    {
      id: 'visa-processing',
      title: 'Visa Application Processing',
      description: 'Wait for Czech Immigration to process your startup visa application',
      estimatedDuration: '30-60 days',
      documents: [],
      notes: [
        'Processing time typically 30-60 days',
        'May be contacted for additional information',
        'Track application status online',
        'Biometrics already collected at submission',
        'Decision communicated via email and/or mail',
      ],
    },
    {
      id: 'receive-visa',
      title: 'Receive Startup Visa',
      description: 'Receive approval and collect your Czech Startup Visa',
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
      id: 'travel-to-czech',
      title: 'Travel to Czech Republic',
      description: 'Travel to Czech Republic with your startup visa',
      estimatedDuration: '1-3 days',
      documents: [
        'Valid passport with startup visa',
        'Proof of accommodation',
        'Travel insurance',
        'CzechInvest approval letter (copy)',
      ],
      notes: [
        'Must register at Foreign Police within 3 days of arrival',
        'Bring all original documents',
        'English widely spoken in Prague',
        'Main airport: Václav Havel Airport Prague (PRG)',
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
        'Tax registration (IČO number)',
      ],
      notes: [
        'Register business within 30 days of arrival',
        'Register at Foreign Police within 3 days of arrival',
        'Register with Trade Licensing Office',
        'Open business bank account',
        'Corporate tax rate: 19%',
        'Access to EU market',
        'Prague is major tech hub in Central Europe',
        'PR eligible after 5 years, citizenship after 5 years',
        'Lower operating costs than Western Europe',
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
        'Consider consulting with Czech startup advisors',
        'Address all concerns raised by CzechInvest',
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
        'CzechInvest approval letter',
      ],
      notes: [
        'Review rejection reasons carefully',
        'Appeal rights may be limited',
        'Consider reapplying with stronger documentation',
        'Consult with immigration lawyer if needed',
        'Common issues: incomplete documents, concerns about funds',
        'Having CzechInvest approval is strong foundation for reapplication',
      ],
    },
  ],
 },
};

