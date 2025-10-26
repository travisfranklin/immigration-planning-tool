/**
 * Portugal Immigration Process Flowcharts
 * Defines the step-by-step process for each Portuguese visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const portugalFlowcharts: Record<string, FlowchartDefinition> = {
 'pt_d7_visa': {
 programId: 'pt_d7_visa',
 countryCode: 'PT',
 programName: 'D7 Visa (Passive Income)',
 totalEstimatedDuration: '3-5 months',
 complexity: 'low',
 successRate: '95%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->verify-income[Verify Passive Income<br/>>= EUR 760/month]
 verify-income --> CheckIncome{Income Sufficient?}
 CheckIncome -->|Yes| secure-accommodation[Secure Accommodation<br/>in Portugal]
 CheckIncome -->|No| End1([Not Eligible])
 accommodation -->gather-documents[Gather Required Documents]
 gather-documents --> consulate-submission[Submit Application at<br/>Portuguese Consulate]
 consulate-submission --> sef-processing[SEF Processing<br/>60-90 Days]
 processing --> Decision{Decision}
 Decision -->|Approved| Visa[Receive D7 Visa]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Visa --> arrival[Travel to Portugal<br/>within 4 months]
 arrival --> registration[Register at SEF Office<br/>Get Residence Card]
 registration --> Success([Process Complete])
 Appeal --> End2([Process Ended])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style Visa fill:#e1e5ff
`,
 steps: [
 {
 id: 'verify-income',
 title: 'Verify Passive Income Requirements',
 description: 'Ensure you have sufficient passive income to qualify for the D7 Visa',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Bank statements (last 6 months showing EUR 760+/month)',
 'Proof of passive income sources (pension, rental income, dividends, etc.)',
 'Tax returns (last 2 years)',
 'Investment portfolio statements (if applicable)',
 ],
 notes: [
 'Minimum EUR 760/month (Portuguese minimum wage)',
 'Recommended: EUR 1,000- EUR 1,500/month for comfortable approval',
 'Income sources: pension, rental income, dividends, royalties, remote work',
 'Must prove income is stable and recurring',
 ],
 },
 {
 id: 'secure-accommodation',
 title: 'Secure Accommodation in Portugal',
 description: 'Obtain proof of accommodation in Portugal (rental or purchase)',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Rental agreement (minimum 1 year) OR',
 'Property purchase deed OR',
 'Letter of invitation from Portuguese resident with proof of ownership',
 ],
 notes: [
 'Can rent or buy property',
 'Popular areas: Lisbon, Porto, Algarve, Madeira',
 'Consider cost of living when choosing location',
 'Accommodation must be available before visa approval',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the D7 Visa application',
 estimatedDuration: '3-4 weeks',
 documents: [
 'Valid passport (valid for at least 3 months beyond intended stay)',
 'Proof of passive income (bank statements, pension letters, etc.)',
 'Proof of accommodation in Portugal',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Portugal, minimum EUR 30,000 coverage)',
 'Passport-style photographs (2)',
 'Completed visa application form',
 ],
 notes: [
 'All documents must be apostilled (Hague Convention)',
 'Translations to Portuguese required for non-English documents',
 'Criminal background check must be recent (within 3 months)',
 'Health insurance can be from US or Portuguese provider',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application at Portuguese Consulate',
 description: 'Submit your D7 Visa application at the Portuguese Consulate in the US',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Visa application fee payment (~ EUR 90)',
 'Appointment confirmation',
 ],
 notes: [
 'Must apply at Portuguese Consulate in your jurisdiction (e.g., SF, NYC, DC)',
 'Appointment required (book 2-4 weeks in advance)',
 'Bring original documents and copies',
 'Biometrics may be collected at appointment',
 ],
 },
 {
 id: 'sef-processing',
 title: 'SEF Processing Period',
 description: 'Wait for SEF (Portuguese Immigration Service) to process your application',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: [
 'Processing time: typically 60-90 days',
 'May be contacted for additional documents',
 'Can check status online via SEF portal',
 'Patience required - Portuguese bureaucracy can be slow',
 ],
 },
 {
 id: 'receive-visa-register',
 title: 'Receive D7 Visa and Register in Portugal',
 description: 'Receive your D7 Visa, travel to Portugal, and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'D7 Visa in passport',
 'All original documents',
 'Proof of accommodation',
 'NIF (Portuguese tax number - obtain upon arrival)',
 ],
 notes: [
 'Must travel to Portugal within 4 months of visa issuance',
 'Register at local SEF office within 3-4 months of arrival',
 'Receive residence card (valid for 2 years)',
 'Must spend 183+ days/year in Portugal to maintain residency',
 'Can apply for PR after 5 years, citizenship after 5 years (with A2 Portuguese)',
 ],
 },
 ],
 },
 'pt_golden_visa': {
 programId: 'pt_golden_visa',
 countryCode: 'PT',
 programName: 'Golden Visa (Investment)',
 totalEstimatedDuration: '4-8 months',
 complexity: 'medium',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> Investment{Investment Type?}
 Investment -->|Real Estate| Property[Purchase Property<br/> EUR 500k+ or EUR 400k in low-density]
 Investment -->|Capital Transfer| Capital[Transfer EUR 1.5M Capital]
 Investment -->|Business| Business[Invest EUR 500k in Business<br/>Create 5+ Jobs]
 Property --> NIF[Obtain NIF<br/>Portuguese Tax Number]
 Capital --> NIF
 Business --> NIF
 NIF --> GatherDocs[Gather Required Documents]
 GatherDocs --> Submit[Submit Application to SEF]
 Submit --> Processing[SEF Processing<br/>90-180 Days]
 Processing --> Decision{Decision}
 Decision -->|Approved| GoldenVisa[Receive Golden Visa]
 Decision -->|Rejected| Appeal[Consider Appeal]
 GoldenVisa --> Travel[Travel to Portugal<br/>7 days/year minimum]
 Travel --> Renew[Renew Every 2 Years]
 Renew --> Success([Process Complete])
 Appeal --> End1([Process Ended])
 
 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style GoldenVisa fill:#e1e5ff
`,
 steps: [
 {
 id: 'choose-investment',
 title: 'Choose Investment Type',
 description: 'Select the type of investment that qualifies for the Golden Visa',
 estimatedDuration: '1-3 months',
 documents: [
 'Proof of funds (bank statements, investment accounts)',
 'Source of funds documentation',
 ],
 notes: [
 'Real Estate: EUR 500,000 (or EUR 400,000 in low-density areas)',
 'Capital Transfer: EUR 1,500,000',
 'Business Investment: EUR 500,000 (creating 5+ jobs)',
 'Research/Arts: EUR 250,000 donation',
 'Most popular: Real estate investment',
 ],
 },
 {
 id: 'obtain-nif',
 title: 'Obtain NIF (Portuguese Tax Number)',
 description: 'Get your Portuguese tax identification number',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport copy',
 'Proof of address',
 'Power of attorney (if using representative)',
 ],
 notes: [
 'Required for any financial transaction in Portugal',
 'Can be obtained remotely through lawyer/representative',
 'Or in person at Portuguese tax office (Finanças)',
 'Essential before making investment',
 ],
 },
 {
 id: 'make-investment',
 title: 'Complete Investment',
 description: 'Execute your chosen investment (purchase property, transfer capital, etc.)',
 estimatedDuration: '1-3 months',
 documents: [
 'Property deed (if real estate)',
 'Bank transfer confirmation (if capital transfer)',
 'Business registration and job creation proof (if business)',
 'Investment certificate',
 ],
 notes: [
 'Use Portuguese lawyer for real estate transactions',
 'Ensure investment meets all Golden Visa requirements',
 'Keep all documentation for visa application',
 'Investment must be maintained for 5 years',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the Golden Visa application',
 estimatedDuration: '3-4 weeks',
 documents: [
 'Valid passport',
 'Proof of investment (property deed, bank transfers, etc.)',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Portugal)',
 'NIF (Portuguese tax number)',
 'Proof of accommodation in Portugal',
 'Passport-style photographs',
 ],
 notes: [
 'All documents must be apostilled',
 'Translations to Portuguese required',
 'Criminal background check must be recent (within 3 months)',
 'Family members can be included in application',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application to SEF',
 description: 'Submit your Golden Visa application to SEF (Portuguese Immigration Service)',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 5,000- EUR 6,000)',
 'Appointment confirmation',
 ],
 notes: [
 'Can submit in Portugal or at Portuguese Consulate',
 'Appointment required',
 'Biometrics collected at appointment',
 'Application fee is non-refundable',
 ],
 },
 {
 id: 'sef-processing-decision',
 title: 'SEF Processing and Receive Golden Visa',
 description: 'Wait for SEF processing and receive your Golden Visa residence permit',
 estimatedDuration: '90-180 days',
 documents: [],
 notes: [
 'Processing time: 90-180 days (can be longer)',
 'May be contacted for additional documents',
 'Once approved, receive residence card valid for 1 year',
 'Renewable for 2-year periods',
 'Only 7 days/year minimum stay required (most flexible in EU!)',
 'PR after 5 years, citizenship after 5 years (with A2 Portuguese)',
 'Family members included',
 ],
 },
 ],
 },
};

