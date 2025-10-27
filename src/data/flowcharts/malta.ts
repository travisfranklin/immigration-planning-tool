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
 Employment -->gather-documents[Gather Required Documents]
 gather-documents -->submit-application[Submit Application to<br/>Residency Malta Agency]
 submit-application -->processing[Processing<br/>30-60 Days]
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

 'mt_startup_visa': {
 programId: 'mt_startup_visa',
 countryCode: 'MT',
 programName: 'Startup Visa',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '75%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> business-idea[Develop Innovative<br/>Startup Idea]
 business-idea --> check-funds{Have EUR 15,000-25,000<br/>minimum capital?}
 check-funds -->|Yes| prepare-business-plan[Prepare Detailed<br/>Business Plan]
 check-funds -->|No| End1([Not Eligible])
 prepare-business-plan --> submit-to-malta-enterprise[Submit to Malta Enterprise]
 submit-to-malta-enterprise --> enterprise-review[Malta Enterprise Review<br/>30-60 Days]
 enterprise-review --> decision1{Approved?}
 decision1 -->|Yes| gather-documents[Gather Required Documents]
 decision1 -->|Rejected| consider-resubmission[Consider Resubmission]
 consider-resubmission --> End2([Process Ended])
 gather-documents --> submit-visa[Submit Visa Application<br/>to Identity Malta]
 submit-visa --> visa-processing[Processing<br/>60-90 Days]
 visa-processing --> decision2{Decision}
 decision2 -->|Approved| receive-permit[Receive Residence Permit]
 decision2 -->|Rejected| consider-appeal[Consider Appeal]
 receive-permit --> travel-to-malta[Travel to Malta]
 travel-to-malta --> register-business[Register Business<br/>and Get ID Card]
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
 title: 'Develop Innovative Startup Idea',
 description: 'Create an innovative, scalable business concept suitable for Malta\'s business ecosystem',
 estimatedDuration: '1-2 months',
 documents: [
 'Business concept description',
 'Market research and analysis',
 'Competitive landscape overview',
 'Innovation and scalability potential',
 ],
 notes: [
 'English is official language - easy to do business!',
 'Focus on tech, gaming (iGaming hub of Europe), fintech, or other innovation sectors',
 'Malta has growing startup ecosystem',
 'EU market access from Malta',
 'Tax incentives for startups available',
 'Business must be innovative and have growth potential',
 'Small but well-connected business community',
 ],
 },
 {
 id: 'prepare-business-plan',
 title: 'Prepare Detailed Business Plan',
 description: 'Create comprehensive business plan for Malta Enterprise approval',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Executive summary',
 'Detailed business plan (15-30 pages)',
 'Financial projections (3-5 years)',
 'Proof of EUR 15,000-25,000 minimum capital (bank statements)',
 'Team information (if co-founders)',
 'Market analysis and go-to-market strategy',
 ],
 notes: [
 'Minimum EUR 15,000-25,000 in capital recommended',
 'Business plan must demonstrate innovation and scalability',
 'Include clear revenue model and growth strategy',
 'Show understanding of Maltese/EU market',
 'Can include co-founders (each needs separate visa)',
 'Highlight how you\'ll leverage Malta\'s strategic location',
 'English is official language - no translation needed!',
 ],
 },
 {
 id: 'submit-to-malta-enterprise',
 title: 'Submit to Malta Enterprise',
 description: 'Apply to Malta Enterprise for startup approval',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Completed Malta Enterprise application form',
 'Business plan',
 'Financial projections',
 'Proof of funds',
 'Team CVs and background',
 'Pitch deck (optional but recommended)',
 ],
 notes: [
 'Malta Enterprise is the national development agency',
 'Evaluates all startup visa applications',
 'Application submitted online or in person',
 'May include pitch presentation',
 'Malta Enterprise website: https://www.maltaenterprise.com/',
 'English is official language - easy process!',
 ],
 },
 {
 id: 'enterprise-review',
 title: 'Malta Enterprise Review (30-60 Days)',
 description: 'Malta Enterprise evaluates your startup business plan',
 estimatedDuration: '30-60 days',
 documents: [],
 notes: [
 'Review typically takes 30-60 days',
 'May include interview or pitch session',
 'Malta Enterprise assesses innovation, scalability, team, and market potential',
 'Approval letter required for visa application',
 'Can reapply if rejected (with improved plan)',
 'English is official language - easy communication!',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for residence permit application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 6 months)',
 'Malta Enterprise approval letter',
 'Business plan',
 'Proof of EUR 15,000-25,000 minimum capital',
 'Passport-style photographs',
 'Proof of health insurance (minimum EUR 30,000 coverage)',
 'Proof of accommodation in Malta',
 'Criminal record certificate (from country of residence)',
 ],
 notes: [
 'All documents must be apostilled',
 'English translations accepted (English is official language!)',
 'Criminal background check must be recent (within 6 months)',
 'Keep originals for potential verification',
 ],
 },
 {
 id: 'submit-visa',
 title: 'Submit Visa Application to Identity Malta',
 description: 'Complete and submit residence permit application to Identity Malta',
 estimatedDuration: '1-2 days',
 documents: [
 'Completed application form',
 'All supporting documents',
 'Application fee payment (EUR 300 approximately)',
 ],
 notes: [
 'Apply at Identity Malta office',
 'Application fee: approximately EUR 300 (2025)',
 'Biometrics collected at office',
 'May need to attend interview',
 'English is official language - easy process!',
 ],
 },
 {
 id: 'visa-processing',
 title: 'Processing (60-90 Days)',
 description: 'Identity Malta reviews your application',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: [
 'Processing time: typically 60-90 days',
 'Identity Malta may request additional documents',
 'Malta Enterprise approval is key factor',
 'Financial sufficiency verified',
 'Background check conducted',
 ],
 },
 {
 id: 'receive-permit',
 title: 'Receive Residence Permit',
 description: 'Collect your approved startup residence permit',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Decision letter from Identity Malta',
 'Residence permit card',
 ],
 notes: [
 'Initial permit valid for 1 year',
 'Renewable annually if business is progressing',
 'Can bring family members',
 'Permit allows you to work on your startup',
 'Can also work for other employers',
 'English is official language!',
 ],
 },
 {
 id: 'travel-to-malta',
 title: 'Travel to Malta',
 description: 'Enter Malta with your residence permit',
 estimatedDuration: '1-2 days',
 documents: [
 'Passport with residence permit',
 'Malta Enterprise approval letter',
 'Business plan',
 'Proof of accommodation',
 ],
 notes: [
 'Main airport: Malta International Airport (MLA)',
 'No visa required for Schengen area travel',
 'Can enter Malta immediately upon receiving permit',
 'Register at Identity Malta within 3 days of arrival',
 'English is official language - easy to settle!',
 ],
 },
 {
 id: 'register-business',
 title: 'Register Business and Get ID Card',
 description: 'Complete business registration and obtain Maltese ID card',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Business registration form',
 'Company articles of association',
 'Proof of business address',
 'Bank account information',
 ],
 notes: [
 'Register business with Malta Business Registry',
 'Get Maltese ID card from Identity Malta',
 'Open Maltese business bank account',
 'Register with Malta Tax Authority',
 'Join Malta startup community and networks',
 'Access to EU market from Malta',
 'Tax incentives for startups available',
 'PR eligible after 5 years, citizenship after 5 years',
 'English is official language - easy business operations!',
 ],
 },
 {
 id: 'consider-resubmission',
 title: 'Consider Resubmission',
 description: 'If rejected by Malta Enterprise, evaluate options for reapplication',
 estimatedDuration: '1-2 months',
 documents: [
 'Rejection feedback from Malta Enterprise',
 'Revised business plan',
 ],
 notes: [
 'Review rejection reasons carefully',
 'Improve business plan based on feedback',
 'Strengthen financial projections and market analysis',
 'May need to pivot business model',
 'Can reapply after improvements',
 'Consider Malta Enterprise mentorship programs',
 ],
 },
 {
 id: 'consider-appeal',
 title: 'Consider Appeal',
 description: 'If visa rejected, evaluate appeal options',
 estimatedDuration: '1-2 months',
 documents: [
 'Rejection decision from Identity Malta',
 'Appeal form',
 'Additional supporting evidence',
 ],
 notes: [
 'Appeal deadline: 30 days from decision',
 'Submit appeal to appropriate authority',
 'Provide additional evidence or clarifications',
 'Consider legal consultation',
 'Can reapply with stronger application',
 'Alternative: consider Malta Nomad Residence or MPRP',
 ],
 },
 ],
 },
};

