/**
 * Croatia Immigration Process Flowcharts
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const croatiaFlowcharts: Record<string, FlowchartDefinition> = {
 'hr_eu_blue_card': {
 programId: 'hr_eu_blue_card',
 countryCode: 'HR',
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
 Card --> registration[Register in Croatia]
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
 description: 'Get job offer from Croatian employer ( EUR 1,800/month minimum)',
 estimatedDuration: '1-2 months',
 documents: ['Employment contract', 'Job description', 'Salary confirmation'],
 notes: ['Adriatic Sea coastline!', 'Mediterranean lifestyle', 'Growing tech scene (Zagreb, Split)'],
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
 notes: ['PR in 5 years, citizenship in 8 years'],
 },
 ],
 },
 'hr_digital_nomad': {
 programId: 'hr_digital_nomad',
 countryCode: 'HR',
 programName: 'Digital Nomad Visa',
 totalEstimatedDuration: '1-2 months',
 complexity: 'low',
 successRate: '95%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) --> Remote[Remote Work/Freelance]
 Remote --> Income{ EUR 2,300/month<br/>Income?}
 Income -->|Yes| Docs[Gather Documents]
 Income -->|No| End1([Not Eligible])
 Docs --> Submit[Submit Application]
 Submit --> Process[Processing 30 Days]
 Process --> Visa[Digital Nomad Visa<br/>1 Year]
 Visa --> Travel[Travel to Croatia]
 Travel --> Success([Work from Paradise!])
 
 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style Visa fill:#e1e5ff
`,
 steps: [
 {
 id: 'remote',
 title: 'Verify Remote Work',
 description: 'Confirm remote employment or freelance contracts',
 estimatedDuration: '1 week',
 documents: ['Employment contract or freelance contracts', 'Proof of income ( EUR 2,300/month)'],
 notes: ['Work from Adriatic Sea coastline!', 'Mediterranean lifestyle'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect all required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Proof of remote work', 'Proof of income', 'Health insurance', 'Accommodation proof'],
 notes: ['Fast processing (30 days)'],
 },
 {
 id: 'visa',
 title: 'Receive Visa & Travel',
 description: 'Get visa and travel to Croatia',
 estimatedDuration: '30 days',
 documents: ['All documents', 'Application fee'],
 notes: ['Valid for 1 year, renewable for 1 more year', 'Can convert to other visa for PR/citizenship path'],
 },
 ],
 },

 'hr_work_permit': {
 programId: 'hr_work_permit',
 countryCode: 'HR',
 programName: 'Work Permit',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> job-offer[Secure Job Offer<br/>from Croatian Employer]
 job-offer --> check-salary{Salary >= EUR 900/month?}
 check-salary -->|Yes| gather-documents[Gather Required Documents]
 check-salary -->|No| End1([Not Eligible])
 gather-documents --> submit-application[Submit Application]
 submit-application --> processing[Processing<br/>30-90 Days]
 processing --> decision{Decision}
 decision -->|Approved| receive-permit[Receive Work Permit]
 decision -->|Rejected| consider-appeal[Consider Appeal]
 receive-permit --> travel-to-croatia[Travel to Croatia]
 travel-to-croatia --> register[Register at Police]
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
 title: 'Secure Job Offer from Croatian Employer',
 description: 'Obtain a binding job offer from a Croatian employer',
 estimatedDuration: '1-2 months',
 documents: ['Signed employment contract', 'Job description', 'Salary confirmation (minimum EUR 900/month)', 'Employer information'],
 notes: ['Adriatic Sea coastline!', 'Mediterranean lifestyle', 'Growing tech scene (Zagreb, Split)', 'EU newest member (2013)', 'PR after 5 years, citizenship after 8 years'],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for work permit application',
 estimatedDuration: '2-3 weeks',
 documents: ['Valid passport', 'Employment contract', 'Educational qualifications', 'Criminal record certificate', 'Health insurance', 'Proof of accommodation', 'Passport photographs'],
 notes: ['Documents must be apostilled', 'Translations to Croatian required'],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit work permit application to Croatian authorities',
 estimatedDuration: '1 week',
 documents: ['All gathered documents', 'Application fee payment'],
 notes: ['Submit at Croatian consulate or in Croatia', 'Processing time: 30-90 days'],
 },
 {
 id: 'processing',
 title: 'Processing (30-90 Days)',
 description: 'Wait for authorities to process application',
 estimatedDuration: '30-90 days',
 documents: [],
 notes: ['Processing time: typically 30-90 days'],
 },
 {
 id: 'receive-permit',
 title: 'Receive Work Permit',
 description: 'Receive approved work permit',
 estimatedDuration: '1 week',
 documents: ['Work permit approval'],
 notes: ['Permit initially valid for 1 year', 'Renewable if employment continues'],
 },
 {
 id: 'travel-to-croatia',
 title: 'Travel to Croatia',
 description: 'Travel to Croatia with work permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with work permit', 'Employment contract'],
 notes: ['Main airports: Zagreb (ZAG), Split (SPU), Dubrovnik (DBV)'],
 },
 {
 id: 'register',
 title: 'Register at Police',
 description: 'Complete registration',
 estimatedDuration: '2-4 weeks',
 documents: ['Passport with work permit', 'Proof of accommodation'],
 notes: ['Register at local police within 3 days', 'Adriatic Sea coastline!', 'Mediterranean lifestyle', 'PR after 5 years, citizenship after 8 years'],
 },
 {
 id: 'consider-appeal',
 title: 'Consider Appeal',
 description: 'If rejected, evaluate appeal options',
 estimatedDuration: '1-2 months',
 documents: ['Rejection decision', 'Appeal form'],
 notes: ['Can reapply with stronger application', 'Alternative: Croatia EU Blue Card or Digital Nomad Visa'],
 },
 ],
 },

 'hr_self_employment': {
 programId: 'hr_self_employment',
 countryCode: 'HR',
 programName: 'Self-Employment Visa',
 totalEstimatedDuration: '2-4 months',
 complexity: 'medium',
 successRate: '75%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) --> plan[Develop Business Plan]
 plan --> funds{EUR 8,000<br/>Investment?}
 funds -->|Yes| docs[Gather Documents]
 funds -->|No| End1([Not Eligible])
 docs --> submit[Submit Application]
 submit --> process[Processing 30-90 Days]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit --> travel[Travel to Croatia]
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
 notes: ['EUR 8,000 minimum investment', 'Adriatic coastline', 'Mediterranean lifestyle', 'PR in 5 years'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Business plan', 'Proof of funds', 'Criminal check', 'Health insurance'],
 notes: ['Documents must be apostilled', 'Translations to Croatian required'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Croatian authorities',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee'],
 notes: ['Processing: 30-90 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Croatian Immigration reviews application',
 estimatedDuration: '30-90 days',
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
 title: 'Travel to Croatia',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airports: Zagreb (ZAG), Split (SPU)'],
 },
 {
 id: 'register',
 title: 'Register Business',
 description: 'Register business and at Police',
 estimatedDuration: '2-4 weeks',
 documents: ['Business registration', 'Proof of address'],
 notes: ['Register within 3 days', 'Adriatic coastline', 'PR in 5 years'],
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

