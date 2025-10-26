/**
 * Estonia Immigration Process Flowcharts
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const estoniaFlowcharts: Record<string, FlowchartDefinition> = {
 'ee_digital_nomad': {
 programId: 'ee_digital_nomad',
 countryCode: 'EE',
 programName: 'Digital Nomad Visa',
 totalEstimatedDuration: '1-2 months',
 complexity: 'low',
 successRate: '95%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) --> Remote[Remote Work/Freelance]
 Remote --> Income{ EUR 3,500/month<br/>Income?}
 Income -->|Yes| Docs[Gather Documents]
 Income -->|No| End1([Not Eligible])
 Docs --> Submit[Submit Application]
 Submit --> Process[Processing 30 Days]
 Process --> Visa[Digital Nomad Visa<br/>1 Year]
 Visa --> Travel[Travel to Estonia]
 Travel --> Success([Work from Tallinn!])
 
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
 documents: ['Employment contract or freelance contracts', 'Proof of income ( EUR 3,500/month)'],
 notes: ['Most tech-forward country in EU!', 'E-government services', 'Tallinn startup ecosystem'],
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
 description: 'Get visa and travel to Estonia',
 estimatedDuration: '30 days',
 documents: ['All documents', 'Application fee'],
 notes: ['Valid for 1 year, renewable', 'Can convert to other visa for PR/citizenship path'],
 },
 ],
 },
 'ee_e_residency_business': {
 programId: 'ee_e_residency_business',
 countryCode: 'EE',
 programName: 'E-Residency + Business Visa',
 totalEstimatedDuration: '2-4 months',
 complexity: 'medium',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) --> ERes[Apply for E-Residency]
 ERes --> Card[Receive E-Residency Card]
 Card --> Company[Register Estonian Company]
 Company --> Operate[Operate Remotely]
 Operate --> Relocate{Want to<br/>Relocate?}
 Relocate -->|Yes| Visa[Apply for Business Visa]
 Relocate -->|No| Remote([Stay Remote])
 Visa --> Docs[Gather Documents]
 Docs --> Submit[Submit Application]
 Submit --> Process[Processing 30-90 Days]
 Process --> Permit[Residence Permit<br/>1 Year]
 Permit --> Success([Live in Estonia!])
 
 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style Remote fill:#e1e5ff
 style Permit fill:#e1e5ff
`,
 steps: [
 {
 id: 'e-residency',
 title: 'Get E-Residency',
 description: 'Apply for E-Residency (UNIQUE program!)',
 estimatedDuration: '4-6 weeks',
 documents: ['E-Residency application', 'Fee ( EUR 100- EUR 200)', 'ID documents'],
 notes: ['UNIQUE E-Residency program!', 'Run Estonian company remotely', 'E-government services'],
 },
 {
 id: 'company',
 title: 'Register Company',
 description: 'Register Estonian company online',
 estimatedDuration: '1-2 weeks',
 documents: ['E-Residency card', 'Company registration documents', 'Business plan'],
 notes: ['Can operate remotely first', 'Then relocate when ready'],
 },
 {
 id: 'visa',
 title: 'Apply for Business Visa',
 description: 'Apply for residence permit to relocate',
 estimatedDuration: '30-90 days',
 documents: ['All documents', 'Proof of funds ( EUR 5,000)', 'Company documents'],
 notes: ['Most tech-forward country!', 'PR in 5 years, citizenship in 8 years'],
 },
 ],
 },
};

