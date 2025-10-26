/**
 * Malta Immigration Process Flowcharts
 * Defines the step-by-step process for each Malta visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const maltaFlowcharts: Record<string, FlowchartDefinition> = {
 'mt_nomad_residence': {
 programId: 'mt_nomad_residence',
 countryCode: 'MT',
 programName: 'Nomad Residence Permit',
 totalEstimatedDuration: '2-3 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->verify-income-employment[Verify Remote Income<br/>>= EUR 2,700/month]
 verify-income-employment --> CheckIncome{Income Sufficient?}
 CheckIncome -->|Yes| Employment[Verify Remote Employment/<br/>Self-Employment]
 CheckIncome -->|No| End1([Not Eligible])
 Employment --> gather-documents[Gather Required Documents]
 gather-documents --> submit-application[Submit Application to<br/>Residency Malta Agency]
 submit-application --> processing[Processing<br/>30-60 Days]
 processing --> Decision{Decision}
 Decision -->|Approved| Permit[Receive Nomad Residence Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Permit --> arrival[Travel to Malta]
 arrival --> registration[Register at Identity Malta]
 registration --> TaxBenefit[Enjoy 15% Flat Tax Rate<br/>on Foreign Income!]
 TaxBenefit --> Success([Process Complete])
 Appeal --> End2([Process Ended])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style Permit fill:#e1e5ff
 style TaxBenefit fill:#fff4e1
`,
 steps: [
 {
 id: 'verify-income-employment',
 title: 'Verify Income and Employment Requirements',
 description: 'Ensure you meet the income and employment requirements for the Nomad Residence Permit',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Employment contract (if employed remotely)',
 'Business registration (if self-employed)',
 'Bank statements (last 6 months showing EUR 2,700+/month)',
 'Tax returns (last 2 years)',
 'Client contracts (if freelancer)',
 ],
 notes: [
 'Minimum EUR 2,700/month ( EUR 32,400/year)',
 'Must work remotely for non-Maltese company OR be self-employed',
 'Income must be from outside Malta',
 'Must prove income is stable and recurring',
 'English is official language - easy process!',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the Nomad Residence Permit application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 6 months)',
 'Proof of remote employment or self-employment',
 'Proof of income ( EUR 2,700/month minimum)',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Malta, minimum EUR 30,000 coverage)',
 'Proof of accommodation in Malta (rental agreement or hotel booking)',
 'Passport-style photographs (2)',
 ],
 notes: [
 'All documents must be apostilled',
 'English translations accepted (English is official language!)',
 'Criminal background check must be recent (within 6 months)',
 'Health insurance must cover entire stay',
 'Accommodation can be rental or hotel initially',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application to Residency Malta Agency',
 description: 'Submit your Nomad Residence Permit application online or in person',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 300)',
 'Online application form',
 ],
 notes: [
 'Can apply online at nomad.residencymalta.gov.mt',
 'Or submit in person at Residency Malta Agency',
 'Bring original documents and copies',
 'Application fee is non-refundable',
 'English is official language - easy process!',
 ],
 },
 {
 id: 'processing',
 title: 'Processing Period',
 description: 'Wait for Residency Malta Agency to process your application',
 estimatedDuration: '30-60 days',
 documents: [],
 notes: [
 'Processing time: typically 30-60 days',
 'May be contacted for additional documents',
 'Can check status online',
 'Fast processing compared to other EU countries',
 ],
 },
 {
 id: 'receive-permit-register',
 title: 'Receive Permit and Register in Malta',
 description: 'Receive your Nomad Residence Permit, travel to Malta, and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Nomad Residence Permit',
 'All original documents',
 'Proof of accommodation',
 ],
 notes: [
 'Permit valid for 1 year initially',
 'Renewable for up to 3 years total',
 'Register at Identity Malta within 3 days of arrival',
 'Flat 15% tax rate on foreign income!',
 'English is official language',
 'EU member - Schengen access',
 'Warm climate year-round',
 'Good internet infrastructure',
 'Small but well-connected expat community',
 'Does NOT lead to PR (temporary program)',
 ],
 },
 ],
 },
 'mt_mprp': {
 programId: 'mt_mprp',
 countryCode: 'MT',
 programName: 'Malta Permanent Residence Programme (MPRP)',
 totalEstimatedDuration: '4-6 months',
 complexity: 'medium',
 successRate: '95%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> Property{Property Option?}
 Property -->|Purchase EUR 300k- EUR 350k| Buy[Purchase Property]
 Property -->|Rent EUR 10k- EUR 12k/year| Rent[Rent Property]
 Buy --> GovContribution[Government Contribution<br/> EUR 68,000]
 Rent --> GovContribution2[Government Contribution<br/> EUR 28,000]
 GovContribution --> Income[Verify Income/Assets<br/> EUR 100k/year OR EUR 500k assets]
 GovContribution2 --> Income
 Income --> CheckIncome{Sufficient?}
 CheckIncome -->|Yes| GatherDocs[Gather Required Documents]
 CheckIncome -->|No| End1([Not Eligible])
 GatherDocs --> Submit[Submit Application to<br/>Residency Malta Agency]
 Submit --> Processing[Processing<br/>120-180 Days]
 Processing --> Decision{Decision}
 Decision -->|Approved| PR[Receive Permanent Residence<br/>Immediate PR!]
 Decision -->|Rejected| Appeal[Consider Appeal]
 PR --> Travel[Travel to Malta]
 Travel --> Success([Process Complete])
 Appeal --> End2([Process Ended])
 
 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style PR fill:#e1e5ff
`,
 steps: [
 {
 id: 'choose-property-option',
 title: 'Choose Property Option and Make Government Contribution',
 description: 'Decide whether to purchase or rent property, and make required government contribution',
 estimatedDuration: '1-2 months',
 documents: [
 'Property purchase agreement (if buying) OR rental agreement (if renting)',
 'Proof of government contribution payment',
 'Proof of funds',
 ],
 notes: [
 'Option 1: Purchase property ( EUR 300k in South Malta or EUR 350k in North/Gozo)',
 'Option 2: Rent property ( EUR 10k/year in South Malta or EUR 12k/year in North/Gozo)',
 'Government contribution: EUR 68,000 (if buying) or EUR 28,000 (if renting)',
 'Additional EUR 7,500 donation to NGO required',
 'Property must be maintained for 5 years',
 'Popular areas: Sliema, St. Julian\'s, Valletta',
 ],
 },
 {
 id: 'verify-income-assets',
 title: 'Verify Income or Asset Requirements',
 description: 'Prove you have EUR 100,000 annual income OR EUR 500,000 in assets',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Bank statements (last 6 months)',
 'Employment contract or business income proof',
 'Tax returns (last 2 years)',
 'Investment portfolio statements',
 'Property valuations (if using assets)',
 ],
 notes: [
 'Option 1: EUR 100,000 annual income (from any source)',
 'Option 2: EUR 500,000 in assets (property, investments, etc.)',
 'Income/assets must be proven to be stable',
 'Can combine income and assets',
 'Must prove source of funds',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the MPRP application',
 estimatedDuration: '3-4 weeks',
 documents: [
 'Valid passport',
 'Property purchase/rental agreement',
 'Proof of government contribution payment',
 'Proof of income/assets ( EUR 100k/year or EUR 500k)',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Malta)',
 'Marriage certificate (if applicable)',
 'Birth certificates for dependents',
 'Passport-style photographs',
 ],
 notes: [
 'All documents must be apostilled',
 'English translations accepted (English is official language!)',
 'Criminal background check must be recent (within 6 months)',
 'Family members included in application',
 'Health insurance must cover entire family',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application to Residency Malta Agency',
 description: 'Submit your MPRP application to Residency Malta Agency',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 5,500)',
 'Appointment confirmation',
 ],
 notes: [
 'Must submit through licensed agent or directly to Residency Malta Agency',
 'Appointment required',
 'Biometrics collected',
 'Application fee is non-refundable',
 'English is official language - easy process!',
 ],
 },
 {
 id: 'receive-pr',
 title: 'Receive Permanent Residence',
 description: 'Receive your Malta Permanent Residence permit',
 estimatedDuration: '120-180 days',
 documents: [],
 notes: [
 'Processing time: typically 120-180 days (4-6 months)',
 'Receive PERMANENT residence immediately (not temporary!)',
 'Renewable every 5 years (administrative)',
 'No minimum stay requirement',
 'Can work and study in Malta',
 'Family members included',
 'Citizenship after 5 years (fast!)',
 'English is official language',
 'EU member - Schengen access',
 'Tax benefits available',
 'Strategic location (Europe/Africa/Middle East)',
 'Warm climate year-round',
 ],
 },
 ],
 },
};

