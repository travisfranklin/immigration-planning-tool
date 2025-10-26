/**
 * Czech Republic Immigration Process Flowcharts
 * Defines the step-by-step process for each Czech visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const czechFlowcharts: Record<string, FlowchartDefinition> = {
 'cz_eu_blue_card': {
 programId: 'cz_eu_blue_card',
 countryCode: 'CZ',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '3-5 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer<br/>from Czech Employer]
 job-offer --> CheckSalary{Salary >= EUR 1,800/month<br/>( EUR 21,600/year)?}
 CheckSalary -->|Yes| CheckEducation{Higher Education<br/>Degree?}
 CheckSalary -->|No| End1([Not Eligible])
 CheckEducation -->|Yes| gather-documents[Gather Required Documents]
 CheckEducation -->|No| End2([Not Eligible])
 gather-documents -->submit-application[Submit Application to<br/>Czech Consulate or in Czech]
 submit-application --> processing[Processing<br/>60-90 Days]
 processing --> Decision{Decision}
 Decision -->|Approved| BlueCard[Receive EU Blue Card<br/>2-Year Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 BlueCard --> arrival[Travel to Czech Republic]
 arrival --> registration[Register at Foreign<br/>Police within 3 Days]
 registration --> Success([Process Complete])
 Appeal --> End3([Process Ended])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style End3 fill:#ffe1e1
 style BlueCard fill:#e1e5ff
`,
 steps: [
 {
 id: 'job-offer',
 title: 'Secure Job Offer from Czech Employer',
 description: 'Obtain a binding job offer from a registered Czech employer',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 1,800/month = EUR 21,600/year)',
 'Employer registration documents',
 ],
 notes: [
 'Minimum salary: EUR 1,800/month ( EUR 21,600/year)',
 'Same as Poland, lower than Western Europe',
 'Prague is major tech hub',
 'Employer must be registered in Czech Republic',
 'English widely spoken in tech companies',
 ],
 },
 {
 id: 'verify-education',
 title: 'Verify Higher Education Requirement',
 description: 'Ensure you have a higher education degree (Bachelor\'s or higher)',
 estimatedDuration: '1-2 weeks',
 documents: [
 'University degree (Bachelor\'s, Master\'s, or PhD)',
 'Diploma translation (if not in Czech or English)',
 'Diploma apostille (Hague Convention)',
 ],
 notes: [
 'Bachelor\'s degree minimum',
 'Master\'s or PhD preferred',
 'Degree must be recognized in Czech Republic',
 'Translation to Czech may be required',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the EU Blue Card application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 6 months)',
 'Employment contract',
 'Higher education degree',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Czech Republic)',
 'Proof of accommodation in Czech Republic',
 'Passport-style photographs (2)',
 ],
 notes: [
 'All documents must be apostilled',
 'Translations to Czech required for non-English documents',
 'Criminal background check must be recent (within 6 months)',
 'Health insurance must cover entire stay',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit your EU Blue Card application to Czech authorities',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 100)',
 'Appointment confirmation',
 ],
 notes: [
 'Can submit at Czech Consulate in US or in Czech Republic',
 'Appointment required (book 2-4 weeks in advance)',
 'Bring original documents and copies',
 'Biometrics collected at appointment',
 ],
 },
 {
 id: 'receive-card-register',
 title: 'Receive EU Blue Card and Register in Czech Republic',
 description: 'Receive your EU Blue Card, travel to Czech Republic, and complete registration',
 estimatedDuration: '60-90 days',
 documents: [
 'EU Blue Card',
 'All original documents',
 'Proof of accommodation',
 ],
 notes: [
 'Processing time: typically 60-90 days',
 'EU Blue Card valid for 2 years initially',
 'Register at Foreign Police within 3 days of arrival',
 'Can work throughout EU after 18 months',
 'Family members can join',
 'PR after 5 years, citizenship after 5 years',
 'Prague is major tech hub',
 'High quality of life',
 'Central European location',
 ],
 },
 ],
 },
 'cz_employee_card': {
 programId: 'cz_employee_card',
 countryCode: 'CZ',
 programName: 'Employee Card',
 totalEstimatedDuration: '3-5 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> JobOffer[Secure Job Offer<br/>from Czech Employer]
 JobOffer --> CheckSalary{Salary >= EUR 1,000/month<br/>( EUR 12,000/year)?}
 CheckSalary -->|Yes| GatherDocs[Gather Required Documents]
 CheckSalary -->|No| End1([Not Eligible])
 GatherDocs --> Submit[Submit Application to<br/>Czech Consulate or in Czech]
 Submit --> Processing[Processing<br/>60-90 Days]
 Processing --> Decision{Decision}
 Decision -->|Approved| EmployeeCard[Receive Employee Card<br/>2-Year Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 EmployeeCard --> Travel[Travel to Czech Republic]
 Travel --> Register[Register at Foreign<br/>Police within 3 Days]
 Register --> Success([Process Complete])
 Appeal --> End2([Process Ended])
 
 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style EmployeeCard fill:#e1e5ff
`,
 steps: [
 {
 id: 'job-offer',
 title: 'Secure Job Offer from Czech Employer',
 description: 'Obtain a binding job offer from a registered Czech employer',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 1,000/month = EUR 12,000/year)',
 'Employer registration documents',
 ],
 notes: [
 'Minimum salary: EUR 1,000/month ( EUR 12,000/year)',
 'Lower than EU Blue Card ( EUR 1,800/month)',
 'Prague is major tech hub',
 'Employer must be registered in Czech Republic',
 'English common in tech companies',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the Employee Card application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 6 months)',
 'Employment contract',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Czech Republic)',
 'Proof of accommodation in Czech Republic',
 'Passport-style photographs (2)',
 ],
 notes: [
 'All documents must be apostilled',
 'Translations to Czech required for non-English documents',
 'Criminal background check must be recent (within 6 months)',
 'No higher education degree required (unlike EU Blue Card)',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit your Employee Card application to Czech authorities',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 100)',
 'Appointment confirmation',
 ],
 notes: [
 'Can submit at Czech Consulate in US or in Czech Republic',
 'Appointment required (book 2-4 weeks in advance)',
 'Bring original documents and copies',
 'Biometrics collected at appointment',
 'Combines work permit and residence permit in one card',
 ],
 },
 {
 id: 'receive-card-register',
 title: 'Receive Employee Card and Register in Czech Republic',
 description: 'Receive your Employee Card, travel to Czech Republic, and complete registration',
 estimatedDuration: '60-90 days',
 documents: [
 'Employee Card',
 'All original documents',
 'Proof of accommodation',
 ],
 notes: [
 'Processing time: typically 60-90 days',
 'Employee Card valid for 2 years',
 'Register at Foreign Police within 3 days of arrival',
 'Combines work permit and residence permit',
 'Faster than separate applications',
 'Family members can join',
 'Renewable',
 'PR after 5 years, citizenship after 5 years',
 'Prague is major tech hub',
 'High quality of life',
 ],
 },
 ],
 },
};

