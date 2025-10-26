/**
 * Denmark Immigration Process Flowcharts
 * Defines the step-by-step process for each Danish visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const denmarkFlowcharts: Record<string, FlowchartDefinition> = {
 'dk_fast_track': {
 programId: 'dk_fast_track',
 countryCode: 'DK',
 programName: 'Fast-Track Scheme',
 totalEstimatedDuration: '2-3 months',
 complexity: 'low',
 successRate: '95%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> JobOffer[Secure Job Offer from<br/>Certified Fast-Track Company]
 JobOffer --> CheckSalary{Salary >= DKK 465,000<br/>or Recent Grad >= DKK 375,000?}
 CheckSalary -->|Yes| CheckCompany{Employer on<br/>Fast-Track List?}
 CheckSalary -->|No| End1([Not Eligible])
 CheckCompany -->|Yes| GatherDocs[Gather Required Documents]
 CheckCompany -->|No| End2([Use Different Scheme])
 GatherDocs --> Submit[Submit Application Online]
 Submit --> FastProcess[Fast-Track Processing<br/><=30 Days]
 FastProcess --> Decision{Decision}
 Decision -->|Approved| Permit[Receive Residence Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Permit --> Travel[Travel to Denmark]
 Travel --> Register[Register at SIRI<br/>Get CPR Number]
 Register --> Success([Process Complete])
 Appeal --> End3([Process Ended])
 
 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#fff4e1
 style End3 fill:#ffe1e1
 style Permit fill:#e1e5ff
`,
 steps: [
 {
 id: 'job-offer',
 title: 'Secure Job Offer from Certified Fast-Track Company',
 description: 'Obtain a binding job offer from a Danish employer on the Fast-Track list',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract',
 'Job description detailing responsibilities',
 'Salary confirmation (DKK 465,000/year = EUR 62,400/year OR DKK 375,000/year = EUR 50,300/year for recent graduates)',
 'Confirmation employer is on Fast-Track list',
 ],
 notes: [
 'Employer must be certified by SIRI (Danish Immigration Service)',
 'Check Fast-Track company list: https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Fast-track',
 'Lower salary threshold (DKK 375,000) for graduates within 3 years',
 'Major companies: Maersk, Novo Nordisk, Vestas, LEGO, etc.',
 'Contract should be for at least 12 months',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation for the Fast-Track application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 3 months beyond permit)',
 'Completed application form',
 'Passport-sized photos (biometric)',
 'Employment contract',
 'Proof of qualifications/education (if applicable)',
 'CV/Resume',
 'Proof of health insurance (if not covered by employer)',
 ],
 notes: [
 'Documents should be in Danish or English',
 'No degree requirement for Fast-Track (unlike EU Blue Card)',
 'Employer handles most of the documentation',
 'Application fee: DKK 3,655 (~ EUR 490)',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application Online',
 description: 'Submit Fast-Track application through SIRI online portal',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents (digital copies)',
 'Application fee payment',
 'Employer certification documents',
 ],
 notes: [
 'Application submitted online via SIRI portal',
 'Employer must submit supporting documents',
 'You receive case number for tracking',
 'Can apply from outside Denmark',
 ],
 },
 {
 id: 'fast-processing',
 title: 'Fast-Track Processing',
 description: 'SIRI processes your application under Fast-Track scheme',
 estimatedDuration: '15-30 days',
 documents: [],
 notes: [
 'Guaranteed processing within 30 days',
 'Average processing time is 15-20 days',
 'Can track status online with case number',
 'May be contacted for additional documents (rare)',
 'Fastest work permit processing in Denmark',
 ],
 },
 {
 id: 'decision',
 title: 'Receive Decision',
 description: 'Get approval or rejection notification',
 estimatedDuration: '1 week',
 documents: [
 'Decision letter from SIRI',
 'Residence permit card (if approved)',
 ],
 notes: [
 'Notification sent via email and online portal',
 'If approved, receive residence permit card by mail',
 'Permit typically valid for duration of contract (up to 4 years)',
 'Can appeal if rejected within 8 weeks',
 'Success rate is very high (~95%) for Fast-Track',
 ],
 },
 {
 id: 'travel-register',
 title: 'Travel to Denmark and Register',
 description: 'Move to Denmark and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Residence permit card',
 'Passport',
 'Employment contract',
 'Proof of accommodation',
 ],
 notes: [
 'Register at SIRI within 5 days of arrival',
 'Receive CPR number (Civil Registration Number) - essential for everything',
 'Open bank account (requires CPR number)',
 'Register for health insurance (covered by employer)',
 'Apply for Danish tax card (Skattekort)',
 'Family members can join you immediately',
 ],
 },
 ],
 },

 'dk_pay_limit': {
 programId: 'dk_pay_limit',
 countryCode: 'DK',
 programName: 'Pay Limit Scheme',
 totalEstimatedDuration: '3-4 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> JobOffer[Secure Job Offer]
 JobOffer --> CheckSalary{Salary >=<br/>DKK 465,000/year?}
 CheckSalary -->|Yes| GatherDocs[Gather Required Documents]
 CheckSalary -->|No| End1([Not Eligible])
 GatherDocs --> Submit[Submit Application Online]
 Submit --> Processing[Standard Processing<br/>60-90 Days]
 Processing --> Decision{Decision}
 Decision -->|Approved| Permit[Receive Residence Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Permit --> Travel[Travel to Denmark]
 Travel --> Register[Register at SIRI<br/>Get CPR Number]
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
 title: 'Secure High-Salary Job Offer',
 description: 'Obtain a binding job offer from a Danish employer with high salary',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description detailing responsibilities',
 'Salary confirmation (minimum DKK 465,000/year = EUR 62,400/year)',
 ],
 notes: [
 'Salary threshold is DKK 465,000/year (~ EUR 62,400/year)',
 'No education requirement - most flexible Danish scheme',
 'No occupation list requirement',
 'Employer does NOT need to be on Fast-Track list',
 'Contract should be for at least 12 months',
 'Popular for senior professionals and executives',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation for the Pay Limit application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 3 months beyond permit)',
 'Completed application form',
 'Passport-sized photos (biometric)',
 'Employment contract',
 'Salary documentation (payslips, contract)',
 'CV/Resume',
 'Proof of health insurance',
 ],
 notes: [
 'Documents should be in Danish or English',
 'No degree or qualification requirement',
 'Salary is the only hard requirement',
 'Application fee: DKK 3,655 (~ EUR 490)',
 'Simpler documentation than EU Blue Card',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application Online',
 description: 'Submit Pay Limit Scheme application through SIRI online portal',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents (digital copies)',
 'Application fee payment',
 'Employer supporting documents',
 ],
 notes: [
 'Application submitted online via SIRI portal',
 'Employer must provide supporting documentation',
 'You receive case number for tracking',
 'Can apply from outside Denmark',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'SIRI processes your Pay Limit Scheme application',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: [
 'Average processing time is 60-90 days',
 'Longer than Fast-Track but still reasonable',
 'Can track status online with case number',
 'May be contacted for additional documents',
 'No labor market test required',
 ],
 },
 {
 id: 'decision',
 title: 'Receive Decision',
 description: 'Get approval or rejection notification',
 estimatedDuration: '1 week',
 documents: [
 'Decision letter from SIRI',
 'Residence permit card (if approved)',
 ],
 notes: [
 'Notification sent via email and online portal',
 'If approved, receive residence permit card by mail',
 'Permit typically valid for up to 4 years',
 'Can appeal if rejected within 8 weeks',
 'Success rate is high (~90%) if salary requirement met',
 ],
 },
 {
 id: 'travel-register',
 title: 'Travel to Denmark and Register',
 description: 'Move to Denmark and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Residence permit card',
 'Passport',
 'Employment contract',
 'Proof of accommodation',
 ],
 notes: [
 'Register at SIRI within 5 days of arrival',
 'Receive CPR number (Civil Registration Number)',
 'Open bank account (requires CPR number)',
 'Register for health insurance',
 'Apply for Danish tax card (Skattekort)',
 'Family members can join you',
 'Path to PR in 4 years, citizenship in 9 years',
 ],
 },
 ],
 },
};

