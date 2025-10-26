/**
 * Greece Immigration Process Flowcharts
 * Defines the step-by-step process for each Greek visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const greeceFlowcharts: Record<string, FlowchartDefinition> = {
 'gr_golden_visa': {
 programId: 'gr_golden_visa',
 countryCode: 'GR',
 programName: 'Golden Visa (Investment)',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '95%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> Investment{Investment Type?}
 Investment -->|Real Estate EUR 250k| Property[Purchase Property<br/> EUR 250,000 minimum]
 Investment -->|Real Estate EUR 400k| Property2[Purchase Property<br/> EUR 400,000 in certain areas]
 Property --> TaxNumber[Obtain Greek Tax Number<br/>AFM]
 Property2 --> TaxNumber
 TaxNumber --> GatherDocs[Gather Required Documents]
 GatherDocs --> Submit[Submit Application to<br/>Greek Consulate or in Greece]
 Submit --> Processing[Processing<br/>60-90 Days]
 Processing --> Decision{Decision}
 Decision -->|Approved| GoldenVisa[Receive Golden Visa<br/>5-Year Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 GoldenVisa --> Travel[Travel to Greece<br/>No Minimum Stay Required!]
 Travel --> Renew[Renew Every 5 Years]
 Renew --> Success([Process Complete])
 Appeal --> End1([Process Ended])
 
 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style GoldenVisa fill:#e1e5ff
`,
 steps: [
 {
 id: 'choose-property',
 title: 'Choose and Purchase Property',
 description: 'Select and purchase real estate in Greece meeting Golden Visa requirements',
 estimatedDuration: '1-2 months',
 documents: [
 'Property deed (purchase agreement)',
 'Proof of funds (bank statements)',
 'Property valuation report',
 'Proof of payment ( EUR 250,000 or EUR 400,000)',
 ],
 notes: [
 'Minimum EUR 250,000 investment (LOWEST in EU!)',
 'Or EUR 400,000 in certain high-demand areas (new rules 2023)',
 'Can purchase multiple properties totaling the minimum',
 'Can rent out property for income',
 'Property must be maintained for 5 years',
 'Popular areas: Athens, Thessaloniki, Greek islands',
 ],
 },
 {
 id: 'obtain-afm',
 title: 'Obtain Greek Tax Number (AFM)',
 description: 'Get your Greek tax identification number',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport copy',
 'Proof of address',
 'Power of attorney (if using representative)',
 ],
 notes: [
 'Required for any financial transaction in Greece',
 'Can be obtained remotely through lawyer/representative',
 'Or in person at Greek tax office (DOY)',
 'Essential before making property purchase',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the Golden Visa application',
 estimatedDuration: '3-4 weeks',
 documents: [
 'Valid passport',
 'Property deed and proof of payment',
 'Greek tax number (AFM)',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Greece)',
 'Proof of accommodation in Greece',
 'Passport-style photographs',
 ],
 notes: [
 'All documents must be apostilled (Hague Convention)',
 'Translations to Greek required for non-English documents',
 'Criminal background check must be recent (within 6 months)',
 'Family members can be included in application',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit your Golden Visa application to Greek authorities',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 2,000)',
 'Appointment confirmation',
 ],
 notes: [
 'Can submit at Greek Consulate in US or in Greece',
 'Appointment required',
 'Biometrics collected at appointment',
 'Application fee is non-refundable',
 ],
 },
 {
 id: 'processing-decision',
 title: 'Processing and Receive Golden Visa',
 description: 'Wait for processing and receive your Greek Golden Visa',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: [
 'Processing time: typically 60-90 days',
 'May be contacted for additional documents',
 'Once approved, receive residence permit valid for 5 years',
 'Renewable every 5 years',
 'NO minimum stay requirement (unique advantage!)',
 'PR after 5 years, citizenship after 7 years',
 'Family members included',
 'Can work and study in Greece',
 ],
 },
 ],
 },
 'gr_digital_nomad': {
 programId: 'gr_digital_nomad',
 countryCode: 'GR',
 programName: 'Digital Nomad Visa',
 totalEstimatedDuration: '2-3 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> Income[Verify Remote Income<br/>>= EUR 3,500/month]
 Income --> CheckIncome{Income Sufficient?}
 CheckIncome -->|Yes| Employment[Verify Employment/<br/>Self-Employment]
 CheckIncome -->|No| End1([Not Eligible])
 Employment --> GatherDocs[Gather Required Documents]
 GatherDocs --> Submit[Submit Application at<br/>Greek Consulate]
 Submit --> Processing[Processing<br/>30-60 Days]
 Processing --> Decision{Decision}
 Decision -->|Approved| Visa[Receive Digital Nomad Visa]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Visa --> Travel[Travel to Greece]
 Travel --> Register[Register at Local<br/>Immigration Office]
 Register --> TaxBenefit[Enjoy 50% Tax Reduction<br/>First Year!]
 TaxBenefit --> Success([Process Complete])
 Appeal --> End2([Process Ended])
 
 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style Visa fill:#e1e5ff
 style TaxBenefit fill:#fff4e1
`,
 steps: [
 {
 id: 'verify-income-employment',
 title: 'Verify Income and Employment Requirements',
 description: 'Ensure you meet the income and employment requirements for the Digital Nomad Visa',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Employment contract (if employed remotely)',
 'Business registration (if self-employed)',
 'Bank statements (last 6 months showing EUR 3,500+/month)',
 'Tax returns (last 2 years)',
 'Client contracts (if freelancer)',
 ],
 notes: [
 'Minimum EUR 3,500/month ( EUR 42,000/year)',
 'Must work remotely for non-Greek company OR be self-employed',
 'Income must be from outside Greece',
 'Must prove income is stable and recurring',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the Digital Nomad Visa application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 6 months)',
 'Proof of remote employment or self-employment',
 'Proof of income ( EUR 3,500/month minimum)',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Greece, minimum EUR 30,000 coverage)',
 'Proof of accommodation in Greece (rental agreement or hotel booking)',
 'Passport-style photographs (2)',
 ],
 notes: [
 'All documents must be apostilled',
 'Translations to Greek required for non-English documents',
 'Criminal background check must be recent (within 6 months)',
 'Health insurance must cover entire stay',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application at Greek Consulate',
 description: 'Submit your Digital Nomad Visa application at the Greek Consulate in the US',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Visa application fee payment (~ EUR 75)',
 'Appointment confirmation',
 ],
 notes: [
 'Must apply at Greek Consulate in your jurisdiction',
 'Appointment required (book 2-4 weeks in advance)',
 'Bring original documents and copies',
 'Biometrics may be collected at appointment',
 ],
 },
 {
 id: 'processing',
 title: 'Processing Period',
 description: 'Wait for Greek authorities to process your application',
 estimatedDuration: '30-60 days',
 documents: [],
 notes: [
 'Processing time: typically 30-60 days',
 'May be contacted for additional documents',
 'Can check status with consulate',
 'Faster than most EU visa types',
 ],
 },
 {
 id: 'receive-visa-register',
 title: 'Receive Visa and Register in Greece',
 description: 'Receive your Digital Nomad Visa, travel to Greece, and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Digital Nomad Visa in passport',
 'All original documents',
 'Proof of accommodation',
 'Greek tax number (AFM - obtain upon arrival)',
 ],
 notes: [
 'Visa valid for 1 year initially',
 'Renewable for up to 2 more years (3 years total)',
 'Register at local immigration office within 30 days of arrival',
 '50% income tax reduction for first year!',
 'Can work from anywhere in Greece (including islands!)',
 'PR after 5 years, citizenship after 7 years',
 'Growing digital nomad community in Athens, Thessaloniki, Crete',
 ],
 },
 ],
 },
};

