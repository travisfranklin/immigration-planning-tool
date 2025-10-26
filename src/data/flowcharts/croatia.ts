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
 Start([Start]) --> Job[Secure Job Offer<br/> EUR 1,800/month]
 Job --> Edu{Higher Ed<br/>Degree?}
 Edu -->|Yes| Docs[Gather Documents]
 Edu -->|No| End1([Not Eligible])
 Docs --> Submit[Submit Application]
 Submit --> Process[Processing 30-60 Days]
 Process --> Decision{Decision}
 Decision -->|Approved| Card[EU Blue Card<br/>2 Years]
 Decision -->|Rejected| End2([Rejected])
 Card --> Register[Register in Croatia]
 Register --> Success([Complete])
 
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
};

