/**
 * Sweden Immigration Process Flowcharts
 * Defines the step-by-step process for each Swedish visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const swedenFlowcharts: Record<string, FlowchartDefinition> = {
 'se_work_permit': {
 programId: 'se_work_permit',
 countryCode: 'SE',
 programName: 'Work Permit for Skilled Workers',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer]
 job-offer --> Advertise[Employer Advertises Position<br/>in EU for 10 Days]
 Advertise --> Salary{Salary Meets<br/>Collective Agreement?}
 Salary -->|Yes| gather-documents[Gather Required Documents]
 Salary -->|No| End1([Not Eligible])
 gather-documents --> employer-advertises[Employer Submits Application]
 employer-application -->processing[Wait for Processing<br/>2-4 months]
 processing --> Decision{Decision}
 Decision -->|Approved| Permit[Receive Work Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Permit --> arrival[Travel to Sweden]
 arrival --> registration[Register at Tax Agency<br/>Get Personal Number]
 registration --> Success([Process Complete])
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
 title: 'Secure Job Offer',
 description: 'Obtain a binding job offer from a Swedish employer',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description detailing responsibilities',
 'Salary confirmation (minimum ~ EUR 13,800/year or ~13,000 SEK/month)',
 ],
 notes: [
 'Salary must meet Swedish collective agreement standards',
 'No specific occupation list - very flexible system',
 'Contract should be for at least 12 months',
 'Employer must be registered in Sweden',
 ],
 },
 {
 id: 'employer-advertises',
 title: 'Employer Advertises Position',
 description: 'Employer must advertise the position in the EU/EEA for 10 days',
 estimatedDuration: '2 weeks',
 documents: [
 'Job advertisement proof',
 'Documentation of advertising channels used',
 ],
 notes: [
 'Required by Swedish Migration Agency',
 'Must advertise in EU/EEA labor market',
 'Minimum 10 days advertising period',
 'Can proceed with application after 10 days',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation for the application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for entire permit period)',
 'Completed application form',
 'Passport-sized photos',
 'Employment contract',
 'Proof of qualifications/education',
 'Proof of health insurance',
 'CV/Resume',
 ],
 notes: [
 'Documents should be in Swedish or English',
 'No degree recognition required (unlike Germany)',
 'Health insurance can be Swedish or international',
 ],
 },
 {
 id: 'employer-submits',
 title: 'Employer Submits Application',
 description: 'Employer submits work permit application to Swedish Migration Agency',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 200)',
 'Employer declaration form',
 ],
 notes: [
 'Application submitted online by employer',
 'Employer pays the application fee',
 'You receive notification when submitted',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Swedish Migration Agency processes your application',
 estimatedDuration: '2-4 months',
 documents: [],
 notes: [
 'Average processing time is 3 months',
 'Can track status online with case number',
 'May be contacted for additional documents',
 'Trade unions are consulted during process',
 ],
 },
 {
 id: 'decision',
 title: 'Receive Decision',
 description: 'Get approval or rejection notification',
 estimatedDuration: '1 week',
 documents: [
 'Decision letter from Migration Agency',
 ],
 notes: [
 'Notification sent via email and post',
 'If approved, receive residence permit card',
 'Permit typically valid for 2 years initially',
 'Can appeal if rejected within 3 weeks',
 ],
 },
 {
 id: 'travel-register',
 title: 'Travel to Sweden and Register',
 description: 'Move to Sweden and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Residence permit card',
 'Passport',
 'Employment contract',
 'Proof of accommodation',
 ],
 notes: [
 'Register at Swedish Tax Agency (Skatteverket) within 1 week',
 'Receive personal number (personnummer) - essential for everything',
 'Open bank account (requires personal number)',
 'Register for Swedish ID card',
 ],
 },
 ],
 },

 'se_eu_blue_card': {
 programId: 'se_eu_blue_card',
 countryCode: 'SE',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> JobOffer[Secure Job Offer]
 JobOffer --> Check{Salary >= EUR 56,400<br/>& Bachelor's Degree?}
 Check -->|Yes| Advertise[Employer Advertises Position<br/>in EU for 10 Days]
 Check -->|No| End1([Not Eligible])
 Advertise --> GatherDocs[Gather Required Documents]
 GatherDocs --> EmployerApply[Employer Submits Application]
 EmployerApply --> Wait[Wait for Processing<br/>2-4 months]
 Wait --> Decision{Decision}
 Decision -->|Approved| BlueCard[Receive EU Blue Card]
 Decision -->|Rejected| Appeal[Consider Appeal]
 BlueCard --> Travel[Travel to Sweden]
 Travel --> Register[Register at Tax Agency<br/>Get Personal Number]
 Register --> Success([Process Complete])
 Appeal --> End2([Process Ended])
 
 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style BlueCard fill:#e1e5ff
`,
 steps: [
 {
 id: 'job-offer',
 title: 'Secure High-Skilled Job Offer',
 description: 'Obtain a binding job offer from a Swedish employer with high salary',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description for skilled position',
 'Salary confirmation (minimum EUR 56,400/year or ~53,000 SEK/month)',
 'Bachelor\'s degree or higher',
 ],
 notes: [
 'Salary threshold is EUR 56,400/year (~53,000 SEK/month)',
 'Must have at least Bachelor\'s degree',
 'Degree must be relevant to the position',
 'Contract should be for at least 12 months',
 ],
 },
 {
 id: 'employer-advertises',
 title: 'Employer Advertises Position',
 description: 'Employer must advertise the position in the EU/EEA for 10 days',
 estimatedDuration: '2 weeks',
 documents: [
 'Job advertisement proof',
 'Documentation of advertising channels used',
 ],
 notes: [
 'Required even for EU Blue Card',
 'Must advertise in EU/EEA labor market',
 'Minimum 10 days advertising period',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation for the Blue Card application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for entire permit period)',
 'Completed EU Blue Card application form',
 'Passport-sized photos',
 'Employment contract',
 'Bachelor\'s degree certificate (or higher)',
 'Academic transcripts',
 'Proof of health insurance',
 'CV/Resume',
 ],
 notes: [
 'Documents should be in Swedish or English',
 'Degree should be from recognized institution',
 'May need to provide degree evaluation',
 ],
 },
 {
 id: 'employer-submits',
 title: 'Employer Submits Blue Card Application',
 description: 'Employer submits EU Blue Card application to Swedish Migration Agency',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 200)',
 'Employer declaration form',
 ],
 notes: [
 'Application submitted online by employer',
 'Specify EU Blue Card application type',
 'Employer pays the application fee',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Swedish Migration Agency processes your Blue Card application',
 estimatedDuration: '2-4 months',
 documents: [],
 notes: [
 'Average processing time is 3 months',
 'Can track status online',
 'May be contacted for additional documents',
 'Faster PR track than regular work permit (4 years)',
 ],
 },
 {
 id: 'decision',
 title: 'Receive EU Blue Card',
 description: 'Get approval and receive your EU Blue Card',
 estimatedDuration: '1 week',
 documents: [
 'Decision letter from Migration Agency',
 'EU Blue Card residence permit',
 ],
 notes: [
 'Blue Card typically valid for 2 years initially',
 'Can be renewed',
 'Allows easier mobility within EU',
 'Fast track to permanent residence (4 years)',
 ],
 },
 {
 id: 'travel-register',
 title: 'Travel to Sweden and Register',
 description: 'Move to Sweden and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'EU Blue Card',
 'Passport',
 'Employment contract',
 'Proof of accommodation',
 ],
 notes: [
 'Register at Swedish Tax Agency within 1 week',
 'Receive personal number (personnummer)',
 'Open bank account',
 'Register for Swedish ID card',
 'Family members can join you',
 ],
 },
 ],
 },

 'se_self_employment': {
 programId: 'se_self_employment',
 countryCode: 'SE',
 programName: 'Self-Employment Permit',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '70%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) --> plan[Develop Business Plan]
 plan --> funds{EUR 20,000<br/>Savings?}
 funds -->|Yes| docs[Gather Documents]
 funds -->|No| End1([Not Eligible])
 docs --> submit[Submit Application]
 submit --> process[Processing 2-4 Months]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit --> travel[Travel to Sweden]
 travel --> register[Register Business]
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
 id: 'plan',
 title: 'Develop Business Plan',
 description: 'Create comprehensive business plan',
 estimatedDuration: '2-4 weeks',
 documents: ['Business plan', 'Market analysis', 'Financial projections'],
 notes: ['Must demonstrate viability', 'EUR 20,000 minimum savings', 'PR in 5 years'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Business plan', 'Proof of funds', 'Qualifications'],
 notes: ['Documents in Swedish or English'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Swedish Migration Agency',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee'],
 notes: ['Processing: 2-4 months'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Migration Agency reviews application',
 estimatedDuration: '2-4 months',
 documents: [],
 notes: ['Business viability assessed'],
 },
 {
 id: 'permit',
 title: 'Receive Permit',
 description: 'Receive self-employment permit',
 estimatedDuration: '1 week',
 documents: ['Residence permit'],
 notes: ['Valid for 2 years, renewable'],
 },
 {
 id: 'travel',
 title: 'Travel to Sweden',
 description: 'Travel with permit',
 estimatedDuration: '1-2 days',
 documents: ['Passport with permit'],
 notes: ['Main airports: Stockholm (ARN), Gothenburg (GOT)'],
 },
 {
 id: 'register',
 title: 'Register Business',
 description: 'Register business and get personal number',
 estimatedDuration: '2-4 weeks',
 documents: ['Business registration', 'Proof of address'],
 notes: ['Register at Tax Agency', 'Get personnummer', 'PR in 5 years'],
 },
 {
 id: 'appeal',
 title: 'Consider Appeal',
 description: 'If rejected, evaluate options',
 estimatedDuration: '1-2 months',
 documents: ['Rejection decision', 'Appeal form'],
 notes: ['Can reapply with stronger plan'],
 },
 ],
 },
};

