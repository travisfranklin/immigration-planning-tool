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
 Investment -->|Real Estate EUR 250k| choose-property[Purchase Property<br/> EUR 250,000 minimum]
 Investment -->|Real Estate EUR 400k| Property2[Purchase Property<br/> EUR 400,000 in certain areas]
 choose-property --> tax-number[Obtain Greek Tax Number<br/>AFM]
 Property2 --> tax-number
 tax-number -->gather-documents[Gather Required Documents]
 gather-documents -->submit-application[Submit Application to<br/>Greek Consulate or in Greece]
 submit-application -->processing-decision[Processing<br/>60-90 Days]
 processing-decision --> Decision{Decision}
 Decision -->|Approved| GoldenVisa[Receive Golden Visa<br/>5-Year Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 GoldenVisa --> arrival[Travel to Greece<br/>No Minimum Stay Required!]
 arrival --> renewal[Renew Every 5 Years]
 renewal --> Success([Process Complete])
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

 'gr_work_permit': {
 programId: 'gr_work_permit',
 countryCode: 'GR',
 programName: 'Work Permit',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '70%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer<br/>from Greek Employer]
 job-offer --> check-salary{Salary >= EUR 1,200/month<br/>(EUR 14,400/year)?}
 check-salary -->|Yes| labor-test[Employer Proves<br/>No Suitable Greek/EU Candidate]
 check-salary -->|No| End1([Not Eligible])
 labor-test --> test-result{Labor Test<br/>Passed?}
 test-result -->|Yes| gather-documents[Gather Required Documents]
 test-result -->|No| End2([Not Eligible])
 gather-documents -->submit-application[Submit Application<br/>to Greek Consulate]
 submit-application -->processing[Processing<br/>90-120 Days]
 processing --> decision{Decision}
 decision -->|Approved| receive-permit[Receive Work Permit<br/>and Residence Visa]
 decision -->|Rejected| consider-appeal[Consider Appeal]
 receive-permit -->travel-to-greece[Travel to Greece]
 travel-to-greece -->register-police[Register with Police<br/>Get Residence Card]
 register-police --> Success([Process Complete])
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
 id: 'job-offer',
 title: 'Secure Job Offer from Greek Employer',
 description: 'Obtain a binding job offer from a Greek employer',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 1,200/month = EUR 14,400/year)',
 'Employer information',
 ],
 notes: [
 'Minimum EUR 14,400/year (EUR 1,200/month)',
 'Growing tech sector in Athens and Thessaloniki',
 'Popular sectors: IT, tourism, shipping, healthcare',
 'Lower cost of living than Western Europe',
 'Employer must prove no suitable Greek/EU candidate',
 'PR eligible after 5 years, citizenship after 7 years',
 ],
 },
 {
 id: 'labor-test',
 title: 'Employer Proves No Suitable Greek/EU Candidate',
 description: 'Employer must demonstrate labor market need',
 estimatedDuration: '4-6 weeks',
 documents: [
 'Job advertisement evidence',
 'Summary of applications received',
 'Reasons for selecting non-EU candidate',
 'Labor market justification',
 ],
 notes: [
 'Employer must advertise position',
 'Must prove no suitable Greek or EU worker available',
 'This is key requirement for work permit',
 'Growing tech sector makes this easier for tech roles',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for work permit application',
 estimatedDuration: '3-4 weeks',
 documents: [
 'Valid passport (valid for at least 6 months)',
 'Employment contract',
 'Educational qualifications',
 'CV/resume',
 'Criminal record certificate',
 'Health insurance',
 'Proof of accommodation in Greece',
 'Passport photographs',
 ],
 notes: [
 'Documents must be in Greek or English',
 'Certified translations required',
 'Apostille required for non-EU documents',
 'Criminal background check must be recent',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application to Greek Consulate',
 description: 'Submit work permit application at Greek consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee payment (EUR 150 approximately)',
 'Appointment confirmation',
 ],
 notes: [
 'Apply at Greek consulate in your country',
 'Application fee: approximately EUR 150',
 'Appointment required',
 'Processing time: 90-120 days',
 ],
 },
 {
 id: 'processing',
 title: 'Processing (90-120 Days)',
 description: 'Wait for Greek immigration authorities to process application',
 estimatedDuration: '90-120 days',
 documents: [],
 notes: [
 'Processing time: typically 90-120 days',
 'May request additional information',
 'Labor market justification is key factor',
 'Background check conducted',
 ],
 },
 {
 id: 'receive-permit',
 title: 'Receive Work Permit and Residence Visa',
 description: 'Receive approved work permit and residence visa',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Work permit approval',
 'Residence visa in passport',
 ],
 notes: [
 'Permit initially valid for 1-2 years',
 'Renewable if employment continues',
 'Family members can join',
 'PR eligible after 5 years',
 'Citizenship after 7 years',
 ],
 },
 {
 id: 'travel-to-greece',
 title: 'Travel to Greece',
 description: 'Travel to Greece with work permit and visa',
 estimatedDuration: '1-3 days',
 documents: [
 'Passport with visa',
 'Work permit',
 'Employment contract',
 ],
 notes: [
 'Main airport: Athens International Airport (ATH)',
 'Register with police within 8 days of arrival',
 'EU member state',
 'Lower cost of living',
 ],
 },
 {
 id: 'register-police',
 title: 'Register with Police and Get Residence Card',
 description: 'Complete registration and receive residence card',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport with visa',
 'Work permit',
 'Proof of accommodation',
 'Employment contract',
 ],
 notes: [
 'Register with local police within 8 days',
 'Get residence card',
 'Get AFM (Greek tax number)',
 'Open Greek bank account',
 'Access to Greek healthcare',
 'Growing tech scene in Athens and Thessaloniki',
 'PR after 5 years, citizenship after 7 years',
 'Lower cost of living than Western Europe',
 ],
 },
 {
 id: 'consider-appeal',
 title: 'Consider Appeal',
 description: 'If rejected, evaluate appeal options',
 estimatedDuration: '1-2 months',
 documents: [
 'Rejection decision',
 'Appeal form',
 'Additional evidence',
 ],
 notes: [
 'Review rejection reasons',
 'Common issue: labor market test not satisfied',
 'Can reapply with stronger evidence',
 'Consider legal consultation',
 'Alternative: Greece Digital Nomad Visa or Golden Visa',
 ],
 },
 ],
 },

 'gr_family_reunification': {
 programId: 'gr_family_reunification',
 countryCode: 'GR',
 programName: 'Family Reunification',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) -->check[Check Eligibility]
 check --> eligible{Sponsor<br/>Eligible?}
 eligible -->|Yes| docs[Gather Documents]
 eligible -->|No| End1([Not Eligible])
 docs -->submit[Submit Application]
 submit -->process[Processing 60-90 Days]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit -->travel[Travel to Greece]
 travel -->register[Register at Immigration]
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
 notes: ['All documents must be apostilled', 'Translations to Greek required'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Greek Immigration',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee'],
 notes: ['Processing: 60-90 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Immigration reviews application',
 estimatedDuration: '60-90 days',
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
 title: 'Travel to Greece',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Athens (ATH)'],
 },
 {
 id: 'register',
 title: 'Register at Immigration',
 description: 'Register within 8 days',
 estimatedDuration: '1 week',
 documents: ['Proof of address'],
 notes: ['Register within 8 days', 'PR in 7 years'],
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

 'gr_independent_means': {
 programId: 'gr_independent_means',
 countryCode: 'GR',
 programName: 'Independent Means (Financially Independent)',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) -->check[Check Eligibility]
 check --> income{EUR 2,000/mo<br/>Income?}
 income -->|Yes| docs[Gather Documents]
 income -->|No| End1([Not Eligible])
 docs -->submit[Submit Application]
 submit -->process[Processing 60-90 Days]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit -->travel[Travel to Greece]
 travel -->register[Register at Immigration]
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
 description: 'Verify sufficient passive income',
 estimatedDuration: '1 week',
 documents: ['Bank statements', 'Proof of passive income'],
 notes: ['EUR 2,000/month minimum', 'Pension, investments, rental income', 'Mediterranean lifestyle'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Bank statements (12 months)', 'Proof of passive income', 'Health insurance', 'Criminal check', 'Proof of accommodation'],
 notes: ['All documents must be apostilled', 'Translations to Greek required'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Greek Consulate',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee'],
 notes: ['Processing: 60-90 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Consulate reviews application',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: ['Financial means verified'],
 },
 {
 id: 'permit',
 title: 'Receive Permit',
 description: 'Receive independent means permit',
 estimatedDuration: '1 week',
 documents: ['Residence permit'],
 notes: ['Valid for 2 years, renewable'],
 },
 {
 id: 'travel',
 title: 'Travel to Greece',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Athens (ATH)', 'Islands: Santorini, Mykonos, Crete'],
 },
 {
 id: 'register',
 title: 'Register at Immigration',
 description: 'Register within 8 days',
 estimatedDuration: '1 week',
 documents: ['Proof of address'],
 notes: ['Register within 8 days', 'PR in 7 years', 'No work allowed'],
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

