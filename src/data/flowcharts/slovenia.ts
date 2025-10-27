/**
 * Slovenia Immigration Process Flowcharts
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const sloveniaFlowcharts: Record<string, FlowchartDefinition> = {
 'si_eu_blue_card': {
 programId: 'si_eu_blue_card',
 countryCode: 'SI',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) -->job[Secure Job Offer<br/> EUR 2,000/month]
 job --> Edu{Higher Ed<br/>Degree?}
 Edu -->|Yes| docs[Gather Documents]
 Edu -->|No| End1([Not Eligible])
 docs --> submit[Submit Application]
 submit-application --> processing[Processing 30-60 Days]
 processing --> Decision{Decision}
 Decision -->|Approved| Card[EU Blue Card<br/>2 Years]
 Decision -->|Rejected| End2([Rejected])
 Card --> registration[Register in Slovenia]
 registration --> Success([Complete])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style Card fill:#e1e5ff
`,
 steps: [
 {
 id: 'job',
 title: 'Secure Job Offer',
 description: 'Get job offer from Slovenian employer ( EUR 2,000/month minimum)',
 estimatedDuration: '1-2 months',
 documents: ['Employment contract', 'Job description', 'Salary confirmation'],
 notes: ['Highest quality of life in Eastern Europe', 'Alpine beauty (Lake Bled!)', 'Ljubljana charm'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect all required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Degree', 'Criminal check', 'Health insurance', 'Accommodation proof'],
 notes: ['All documents must be apostilled'],
 },
 {
 id: 'submit',
 title: 'Submit & Receive',
 description: 'Submit application and receive EU Blue Card',
 estimatedDuration: '30-60 days',
 documents: ['All documents', 'Application fee'],
 notes: ['PR in 5 years, citizenship in 10 years'],
 },
 ],
 },
 'si_startup_visa': {
 programId: 'si_startup_visa',
 countryCode: 'SI',
 programName: 'Startup Visa',
 totalEstimatedDuration: '2-3 months',
 complexity: 'medium',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) --> Idea[Business Idea]
 Idea --> Funds{ EUR 8,000<br/>Funds?}
 Funds -->|Yes| Program[Apply to Startup Program]
 Funds -->|No| End1([Not Eligible])
 Program --> Accept{Accepted?}
 Accept -->|Yes| Docs[Gather Documents]
 Accept -->|No| End2([Not Eligible])
 Docs --> Submit[Submit Application]
 Submit --> Process[Processing 30-60 Days]
 Process --> Visa[Startup Visa<br/>1 Year]
 Visa --> Register[Register Business]
 Register --> Success([Complete])
 
 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style Visa fill:#e1e5ff
`,
 steps: [
 {
 id: 'idea',
 title: 'Develop Business Idea',
 description: 'Create innovative business plan',
 estimatedDuration: '2-4 weeks',
 documents: ['Business plan', 'Market analysis', 'Financial projections'],
 notes: ['Ljubljana startup scene', 'High quality of life'],
 },
 {
 id: 'program',
 title: 'Apply to Startup Program',
 description: 'Get accepted by Slovenian startup program',
 estimatedDuration: '2-4 weeks',
 documents: ['Business plan', 'Pitch deck', 'Team info'],
 notes: [' EUR 8,000 minimum funds required'],
 },
 {
 id: 'visa',
 title: 'Receive Visa & Register',
 description: 'Get visa and register business',
 estimatedDuration: '30-60 days',
 documents: ['All documents', 'Business registration'],
 notes: ['Alpine beauty!', 'PR in 5 years, citizenship in 10 years'],
 },
 ],
 },

 'si_work_permit': {
 programId: 'si_work_permit',
 countryCode: 'SI',
 programName: 'Work Permit (Single Permit)',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) --> job[Secure Job Offer<br/>EUR 1,200/month]
 job --> docs[Gather Documents]
 docs --> submit[Submit Application]
 submit --> process[Processing 30-90 Days]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Work Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit --> travel[Travel to Slovenia]
 travel --> register[Register]
 register --> Success([Complete])
 appeal --> End([Process Ended])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End fill:#ffe1e1
 style permit fill:#e1e5ff
`,
 steps: [
 {
 id: 'job',
 title: 'Secure Job Offer',
 description: 'Get job offer from Slovenian employer (EUR 1,200/month minimum)',
 estimatedDuration: '1-2 months',
 documents: ['Employment contract', 'Job description', 'Salary confirmation'],
 notes: ['Highest quality of life in Eastern Europe', 'Alpine beauty (Lake Bled!)', 'Ljubljana charm', 'PR in 5 years, citizenship in 10 years'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect all required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Employment contract', 'Criminal check', 'Health insurance', 'Accommodation proof'],
 notes: ['All documents must be apostilled'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit work permit application',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee'],
 notes: ['Processing: 30-90 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Wait for processing',
 estimatedDuration: '30-90 days',
 documents: [],
 notes: ['Track application status online'],
 },
 {
 id: 'permit',
 title: 'Receive Work Permit',
 description: 'Receive approved work permit',
 estimatedDuration: '1 week',
 documents: ['Work permit approval'],
 notes: ['Valid for 1-2 years, renewable'],
 },
 {
 id: 'travel',
 title: 'Travel to Slovenia',
 description: 'Travel with work permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Ljubljana (LJU)'],
 },
 {
 id: 'register',
 title: 'Register',
 description: 'Complete registration',
 estimatedDuration: '2-4 weeks',
 documents: ['Passport', 'Proof of accommodation'],
 notes: ['Register within 3 days', 'Alpine beauty!', 'Lake Bled!', 'PR in 5 years'],
 },
 {
 id: 'appeal',
 title: 'Consider Appeal',
 description: 'If rejected, evaluate options',
 estimatedDuration: '1-2 months',
 documents: ['Rejection decision', 'Appeal form'],
 notes: ['Can reapply', 'Alternative: Slovenia EU Blue Card or Startup Visa'],
 },
 ],
 },

 'si_self_employment': {
 programId: 'si_self_employment',
 countryCode: 'SI',
 programName: 'Self-Employment Visa',
 totalEstimatedDuration: '2-3 months',
 complexity: 'medium',
 successRate: '75%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) --> plan[Develop Business Plan]
 plan --> funds{EUR 8,000<br/>Funds?}
 funds -->|Yes| docs[Gather Documents]
 funds -->|No| End1([Not Eligible])
 docs --> submit[Submit Application]
 submit --> process[Processing 30-60 Days]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit --> travel[Travel to Slovenia]
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
 notes: ['EUR 8,000 minimum funds', 'Highest quality of life in Eastern Europe', 'Lake Bled', 'PR in 5 years'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Business plan', 'Proof of funds', 'Criminal check', 'Health insurance'],
 notes: ['All documents must be apostilled'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Slovenian authorities',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee'],
 notes: ['Processing: 30-60 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Slovenian Immigration reviews application',
 estimatedDuration: '30-60 days',
 documents: [],
 notes: ['Business viability assessed'],
 },
 {
 id: 'permit',
 title: 'Receive Permit',
 description: 'Receive self-employment permit',
 estimatedDuration: '1 week',
 documents: ['Residence permit'],
 notes: ['Valid for 1 year, renewable'],
 },
 {
 id: 'travel',
 title: 'Travel to Slovenia',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Ljubljana (LJU)'],
 },
 {
 id: 'register',
 title: 'Register Business',
 description: 'Register business',
 estimatedDuration: '2-4 weeks',
 documents: ['Business registration', 'Proof of address'],
 notes: ['Register within 3 days', 'Alpine beauty', 'Lake Bled', 'PR in 5 years'],
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

