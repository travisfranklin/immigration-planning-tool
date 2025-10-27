/**
 * Latvia Immigration Process Flowcharts
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const latviaFlowcharts: Record<string, FlowchartDefinition> = {
 'lv_eu_blue_card': {
 programId: 'lv_eu_blue_card',
 countryCode: 'LV',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) -->job[Secure Job Offer<br/> EUR 1,800/month]
 job --> Edu{Higher Ed<br/>Degree?}
 Edu -->|Yes| docs[Gather Documents]
 Edu -->|No| End1([Not Eligible])
 docs --> submit[Submit Application]
 submit-application --> processing[Processing 30-60 Days]
 processing --> Decision{Decision}
 Decision -->|Approved| Card[EU Blue Card<br/>2 Years]
 Decision -->|Rejected| End2([Rejected])
 Card --> registration[Register in Latvia]
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
 description: 'Get job offer from Latvian employer ( EUR 1,800/month minimum)',
 estimatedDuration: '1-2 months',
 documents: ['Employment contract', 'Job description', 'Salary confirmation'],
 notes: ['Riga tech scene', 'Low cost of living', 'Baltic Sea coast', 'Art Nouveau architecture'],
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
 'lv_startup_visa': {
 programId: 'lv_startup_visa',
 countryCode: 'LV',
 programName: 'Startup Visa',
 totalEstimatedDuration: '2-3 months',
 complexity: 'medium',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) --> Idea[Business Idea]
 Idea --> Funds{ EUR 6,000<br/>Funds?}
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
 notes: ['Riga tech scene', 'Low operating costs'],
 },
 {
 id: 'program',
 title: 'Apply to Startup Program',
 description: 'Get accepted by Latvian startup program',
 estimatedDuration: '2-4 weeks',
 documents: ['Business plan', 'Pitch deck', 'Team info'],
 notes: [' EUR 6,000 minimum funds required'],
 },
 {
 id: 'visa',
 title: 'Receive Visa & Register',
 description: 'Get visa and register business',
 estimatedDuration: '30-60 days',
 documents: ['All documents', 'Business registration'],
 notes: ['Baltic Sea coast', 'PR in 5 years, citizenship in 10 years'],
 },
 ],
 },

 'lv_work_permit': {
 programId: 'lv_work_permit',
 countryCode: 'LV',
 programName: 'Work Permit',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) --> job[Secure Job Offer<br/>EUR 900/month]
 job --> docs[Gather Documents]
 docs --> submit[Submit Application]
 submit --> process[Processing 30-90 Days]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Work Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit --> travel[Travel to Latvia]
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
 description: 'Get job offer from Latvian employer (EUR 900/month minimum)',
 estimatedDuration: '1-2 months',
 documents: ['Employment contract', 'Job description', 'Salary confirmation'],
 notes: ['Riga tech scene', 'Baltic Sea coast', 'Art Nouveau architecture', 'PR in 5 years, citizenship in 10 years'],
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
 title: 'Travel to Latvia',
 description: 'Travel with work permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Riga (RIX)'],
 },
 {
 id: 'register',
 title: 'Register',
 description: 'Complete registration',
 estimatedDuration: '2-4 weeks',
 documents: ['Passport', 'Proof of accommodation'],
 notes: ['Register within 7 days', 'Riga tech scene', 'Baltic Sea coast', 'PR in 5 years'],
 },
 {
 id: 'appeal',
 title: 'Consider Appeal',
 description: 'If rejected, evaluate options',
 estimatedDuration: '1-2 months',
 documents: ['Rejection decision', 'Appeal form'],
 notes: ['Can reapply', 'Alternative: Latvia EU Blue Card or Startup Visa'],
 },
 ],
 },

 'lv_self_employment': {
 programId: 'lv_self_employment',
 countryCode: 'LV',
 programName: 'Self-Employment Visa',
 totalEstimatedDuration: '2-3 months',
 complexity: 'medium',
 successRate: '75%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) --> plan[Develop Business Plan]
 plan --> funds{EUR 6,000<br/>Funds?}
 funds -->|Yes| docs[Gather Documents]
 funds -->|No| End1([Not Eligible])
 docs --> submit[Submit Application]
 submit --> process[Processing 30-60 Days]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit --> travel[Travel to Latvia]
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
 notes: ['EUR 6,000 minimum funds', 'Riga tech scene', 'Baltic Sea coast', 'PR in 5 years'],
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
 description: 'Submit to Latvian authorities',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee'],
 notes: ['Processing: 30-60 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Latvian Immigration reviews application',
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
 title: 'Travel to Latvia',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Riga (RIX)'],
 },
 {
 id: 'register',
 title: 'Register Business',
 description: 'Register business',
 estimatedDuration: '2-4 weeks',
 documents: ['Business registration', 'Proof of address'],
 notes: ['Register within 7 days', 'Riga tech scene', 'Baltic Sea coast', 'PR in 5 years'],
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

 'lv_family_reunification': {
 programId: 'lv_family_reunification',
 countryCode: 'LV',
 programName: 'Family Reunification',
 totalEstimatedDuration: '2-3 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) --> check[Check Eligibility]
 check --> eligible{Sponsor<br/>Eligible?}
 eligible -->|Yes| docs[Gather Documents]
 eligible -->|No| End1([Not Eligible])
 docs --> submit[Submit Application]
 submit --> process[Processing 30-60 Days]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit --> travel[Travel to Latvia]
 travel --> register[Register at OCMA]
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
 notes: ['All documents must be apostilled'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Office of Citizenship and Migration Affairs',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee'],
 notes: ['Processing: 30-60 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'OCMA reviews application',
 estimatedDuration: '30-60 days',
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
 title: 'Travel to Latvia',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Riga (RIX)'],
 },
 {
 id: 'register',
 title: 'Register at OCMA',
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
};

