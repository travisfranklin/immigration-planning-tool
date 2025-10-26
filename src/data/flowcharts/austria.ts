/**
 * Austria Immigration Process Flowcharts
 * Defines the step-by-step process for each Austrian visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const austriaFlowcharts: Record<string, FlowchartDefinition> = {
 'at_eu_blue_card': {
 programId: 'at_eu_blue_card',
 countryCode: 'AT',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer]
 job-offer --> Salary{Salary >= EUR 51,500?}
 Salary -->|Yes| gather-documents[Gather Required Documents]
 Salary -->|No| End1([Not Eligible])
 gather-documents --> submit-application[Submit Application]
 submit-application --> processing[Wait for Processing<br/>8 weeks]
 processing --> Decision{Decision}
 Decision -->|Approved| Visa[Receive Blue Card]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Visa --> arrival[Travel to Austria]
 arrival --> Register[Register at MA35]
 Register --> Success([Process Complete])
 Appeal --> End2([Process Ended])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style Visa fill:#e1e5ff
`,
 steps: [
 {
 id: 'job-offer',
 title: 'Secure Job Offer',
 description: 'Obtain a binding job offer from an Austrian employer',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 51,500/year)',
 ],
 notes: [
 'Employer must be registered in Austria',
 'Contract must be for at least 12 months',
 'Salary threshold updated annually',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation for the application',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Valid passport (valid for at least 6 months)',
 'Completed application form',
 'Passport-sized photos (biometric)',
 'University degree certificate (with apostille)',
 'Employment contract',
 'Proof of health insurance',
 'Proof of accommodation in Austria',
 'CV/Resume',
 ],
 notes: [
 'All documents must be translated to German by certified translator',
 'Degree must be recognized as equivalent to Austrian degree',
 'Health insurance must meet Austrian requirements',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit your Blue Card application to the Austrian embassy/consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 160-200)',
 ],
 notes: [
 'Book appointment in advance',
 'Bring original documents and copies',
 'Some documents may need apostille',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Embassy processes your application',
 estimatedDuration: '8 weeks',
 documents: [],
 notes: [
 'Processing time is typically 8 weeks',
 'May be contacted for additional documents',
 'Background checks conducted',
 ],
 },
 {
 id: 'arrival',
 title: 'Arrival and Registration',
 description: 'Travel to Austria and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport with visa',
 'Employment contract',
 'Proof of accommodation',
 'Health insurance card',
 ],
 notes: [
 'Register at MA35 (Vienna) or local immigration office',
 'Must register within 3 days of arrival',
 'Receive residence permit card',
 ],
 },
 ],
 },
 'at_red_white_red': {
 programId: 'at_red_white_red',
 countryCode: 'AT',
 programName: 'Red-White-Red Card',
 totalEstimatedDuration: '3-5 months',
 complexity: 'high',
 successRate: '75%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> Category[Choose Category]
 Category -->points-calculation{Calculate Points}
 points-calculation -->|>= 70 points| job-offer[Secure Job Offer]
 points-calculation -->|< 70 points| End1([Not Eligible])
 job-offer --> Salary{Salary >= EUR 38,700?}
 Salary -->|Yes| gather-documents[Gather Required Documents]
 Salary -->|No| End1
 gather-documents --> submit-application[Submit Application]
 submit-application --> processing[Wait for Processing<br/>8 weeks]
 processing --> Decision{Decision}
 Decision -->|Approved| Visa[Receive RWR Card]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Visa --> arrival[Travel to Austria]
 arrival --> Register[Register at MA35]
 Register --> Success([Process Complete])
 Appeal --> End2([Process Ended])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style Visa fill:#e1e5ff
`,
 steps: [
 {
 id: 'points-calculation',
 title: 'Calculate Points',
 description: 'Assess your eligibility using the points-based system',
 estimatedDuration: '1 week',
 documents: [
 'Educational certificates',
 'Work experience documentation',
 'Language certificates (German)',
 'Age verification',
 ],
 notes: [
 'Minimum 70 points required',
 'Points awarded for: education, work experience, language skills, age',
 'Use official points calculator on migration.gv.at',
 'Higher education = more points',
 'German language skills highly valued',
 ],
 },
 {
 id: 'job-offer',
 title: 'Secure Job Offer',
 description: 'Obtain job offer matching your qualifications',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 38,700/year)',
 ],
 notes: [
 'Job must match your qualifications',
 'Employer must demonstrate need for foreign worker',
 'Salary threshold lower than EU Blue Card',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Valid passport',
 'Completed application form',
 'Photos (biometric)',
 'Degree certificates (apostilled)',
 'Employment contract',
 'Points calculation documentation',
 'Language certificates',
 'Proof of health insurance',
 'Proof of accommodation',
 ],
 notes: [
 'All documents in German or with certified translation',
 'Degree recognition may be required',
 'Language certificates must be from recognized institutions',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit RWR Card application',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee ( EUR 160-200)',
 ],
 notes: [
 'Apply at Austrian embassy/consulate',
 'Book appointment in advance',
 'Bring originals and copies',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Application review and decision',
 estimatedDuration: '8 weeks',
 documents: [],
 notes: [
 'Points verification conducted',
 'Employer may be contacted',
 'Background checks performed',
 ],
 },
 {
 id: 'arrival',
 title: 'Arrival and Registration',
 description: 'Travel to Austria and register',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport with visa',
 'Employment contract',
 'Proof of accommodation',
 ],
 notes: [
 'Register at MA35 or local office within 3 days',
 'Receive residence permit card',
 'Can apply for PR after 21 months with German skills',
 ],
 },
 ],
 },
};

