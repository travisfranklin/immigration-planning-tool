/**
 * Cyprus Immigration Process Flowcharts
 * Defines the step-by-step process for each Cyprus visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const cyprusFlowcharts: Record<string, FlowchartDefinition> = {
 'cy_golden_visa': {
 programId: 'cy_golden_visa',
 countryCode: 'CY',
 programName: 'Golden Visa (Permanent Residence)',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '95%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> Investment{Investment Type?}
 Investment -->|Real Estate EUR 300k| Property[Purchase Property<br/> EUR 300,000 minimum]
 Investment -->|Business EUR 300k| Business[Invest in Business<br/> EUR 300,000]
 Investment -->|Combination| Combo[Combination of Investments<br/> EUR 300,000 total]
 Property --> Income[Verify Annual Income<br/> EUR 50,000 minimum]
 Business --> Income
 Combo --> Income
 Income --> CheckIncome{Income Sufficient?}
 CheckIncome -->|Yes| GatherDocs[Gather Required Documents]
 CheckIncome -->|No| End1([Not Eligible])
 GatherDocs --> Submit[Submit Application to<br/>Cyprus Immigration]
 Submit --> Processing[Processing<br/>60-90 Days]
 Processing --> Decision{Decision}
 Decision -->|Approved| PR[Receive Permanent Residence<br/>Immediate PR!]
 Decision -->|Rejected| Appeal[Consider Appeal]
 PR --> Travel[Travel to Cyprus]
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
 id: 'choose-investment',
 title: 'Choose and Complete Investment',
 description: 'Select and complete your EUR 300,000 investment in Cyprus',
 estimatedDuration: '1-2 months',
 documents: [
 'Property deed (if real estate)',
 'Business registration (if business investment)',
 'Proof of payment ( EUR 300,000)',
 'Investment certificate',
 'Proof of funds',
 ],
 notes: [
 'Minimum EUR 300,000 investment required',
 'Options: Real estate, business, or combination',
 'Real estate: Residential or commercial property',
 'Business: Must create jobs or contribute to economy',
 'Investment must be maintained',
 'Popular areas: Limassol, Paphos, Nicosia',
 ],
 },
 {
 id: 'verify-income',
 title: 'Verify Annual Income Requirement',
 description: 'Prove you have EUR 50,000 annual income ( EUR 15,000 per dependent)',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Bank statements (last 6 months)',
 'Employment contract or business income proof',
 'Tax returns (last 2 years)',
 'Investment income statements',
 ],
 notes: [
 'Main applicant: EUR 50,000/year minimum',
 'Spouse: + EUR 15,000/year',
 'Each dependent: + EUR 10,000/year',
 'Income can be from employment, business, investments, or pension',
 'Must prove income is stable and recurring',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the Golden Visa application',
 estimatedDuration: '3-4 weeks',
 documents: [
 'Valid passport',
 'Proof of investment (property deed, business registration)',
 'Proof of annual income ( EUR 50,000+)',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Cyprus)',
 'Passport-style photographs',
 'Marriage certificate (if applicable)',
 'Birth certificates for dependents',
 ],
 notes: [
 'All documents must be apostilled (Hague Convention)',
 'Translations to English or Greek accepted (English is official!)',
 'Criminal background check must be recent (within 6 months)',
 'Family members included in application',
 'Health insurance must cover entire family',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application to Cyprus Immigration',
 description: 'Submit your Golden Visa application to Cyprus authorities',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 500)',
 'Appointment confirmation',
 ],
 notes: [
 'Can submit at Cyprus Embassy or in Cyprus',
 'Appointment may be required',
 'Biometrics collected',
 'Application fee is non-refundable',
 'English is official language - no translation issues!',
 ],
 },
 {
 id: 'receive-pr',
 title: 'Receive Permanent Residence',
 description: 'Receive your Cyprus Permanent Residence permit',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: [
 'Processing time: typically 60-90 days',
 'One of fastest PR programs in EU!',
 'Receive PERMANENT residence immediately (not temporary!)',
 'Renewable every 5 years (administrative)',
 'No minimum stay requirement',
 'Can work and study in Cyprus',
 'Family members included',
 'Citizenship after 7 years',
 'English is official language',
 'Low corporate tax (12.5%)',
 'Strategic location (Europe/Asia/Africa)',
 ],
 },
 ],
 },
 'cy_work_permit': {
 programId: 'cy_work_permit',
 countryCode: 'CY',
 programName: 'Work Permit',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> JobOffer[Secure Job Offer<br/>from Cyprus Employer]
 JobOffer --> CheckSalary{Salary >= EUR 1,500/month<br/>( EUR 18,000/year)?}
 CheckSalary -->|Yes| GatherDocs[Gather Required Documents]
 CheckSalary -->|No| End1([Not Eligible])
 GatherDocs --> Submit[Submit Application to<br/>Cyprus Immigration]
 Submit --> Processing[Processing<br/>60-90 Days]
 Processing --> Decision{Decision}
 Decision -->|Approved| Permit[Receive Work Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Permit --> Travel[Travel to Cyprus]
 Travel --> Register[Register at Immigration<br/>Office]
 Register --> Success([Process Complete])
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
 title: 'Secure Job Offer from Cyprus Employer',
 description: 'Obtain a binding job offer from a registered Cyprus employer',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 1,500/month = EUR 18,000/year)',
 'Employer registration documents',
 ],
 notes: [
 'Employer must be registered in Cyprus',
 'Minimum salary: EUR 1,500/month ( EUR 18,000/year)',
 'English is official language - major advantage!',
 'Growing tech and finance sectors',
 'iGaming industry hub',
 'No specific occupation list',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the work permit application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 6 months)',
 'Employment contract',
 'Proof of qualifications (diplomas, certificates)',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Cyprus)',
 'Proof of accommodation in Cyprus',
 'Passport-style photographs',
 ],
 notes: [
 'All documents must be apostilled',
 'English or Greek translations accepted (English is official!)',
 'Criminal background check must be recent (within 6 months)',
 'Health insurance must cover entire stay',
 'Accommodation can be rental or hotel initially',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application to Cyprus Immigration',
 description: 'Submit your work permit application to Cyprus authorities',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 150)',
 'Appointment confirmation',
 ],
 notes: [
 'Can submit at Cyprus Embassy or in Cyprus',
 'Appointment may be required',
 'Biometrics collected',
 'Employer may need to submit documents too',
 'English is official language - easy process!',
 ],
 },
 {
 id: 'processing',
 title: 'Processing Period',
 description: 'Wait for Cyprus Immigration to process your application',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: [
 'Processing time: typically 60-90 days',
 'May be contacted for additional documents',
 'Can check status online',
 'Employer may be contacted for verification',
 ],
 },
 {
 id: 'receive-permit-register',
 title: 'Receive Work Permit and Register in Cyprus',
 description: 'Receive your work permit, travel to Cyprus, and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Work permit',
 'All original documents',
 'Proof of accommodation',
 ],
 notes: [
 'Work permit valid for 1-3 years',
 'Renewable',
 'Register at local immigration office within 7 days of arrival',
 'Family members can join',
 'PR after 5 years, citizenship after 7 years',
 'English is official language',
 'Warm climate year-round',
 'Strategic location (Europe/Asia/Africa)',
 'Low corporate tax (12.5%)',
 ],
 },
 ],
 },
};

