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
 docs --> submit-application[Submit Application]
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
};

