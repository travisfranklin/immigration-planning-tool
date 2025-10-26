/**
 * Slovakia Immigration Process Flowcharts
 * Defines the step-by-step process for each Slovak visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const slovakiaFlowcharts: Record<string, FlowchartDefinition> = {
 'sk_eu_blue_card': {
 programId: 'sk_eu_blue_card',
 countryCode: 'SK',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer<br/>from Slovak Employer]
 job-offer --> CheckSalary{Salary >= EUR 1,500/month<br/>( EUR 18,000/year)?}
 CheckSalary -->|Yes| CheckEducation{Higher Education<br/>Degree?}
 CheckSalary -->|No| End1([Not Eligible])
 CheckEducation -->|Yes| gather-documents[Gather Required Documents]
 CheckEducation -->|No| End2([Not Eligible])
 gather-documents --> submit-application[Submit Application to<br/>Slovak Embassy or in Slovakia]
 submit-application --> processing[Processing<br/>30-60 Days]
 processing --> Decision{Decision}
 Decision -->|Approved| BlueCard[Receive EU Blue Card<br/>2-Year Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 BlueCard --> arrival[Travel to Slovakia]
 arrival --> registration[Register at Foreign Police<br/>within 3 Days]
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
 title: 'Secure Job Offer from Slovak Employer',
 description: 'Obtain a binding job offer from a registered Slovak employer',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 1,500/month = EUR 18,000/year)',
 'Employer registration documents',
 ],
 notes: [
 'Minimum salary: EUR 1,500/month ( EUR 18,000/year)',
 'Same as Hungary and Bulgaria',
 'Bratislava proximity to Vienna',
 'Low cost of living',
 'Employer must be registered in Slovakia',
 ],
 },
 {
 id: 'verify-education',
 title: 'Verify Higher Education Requirement',
 description: 'Ensure you have a higher education degree (Bachelor\'s or higher)',
 estimatedDuration: '1-2 weeks',
 documents: [
 'University degree (Bachelor\'s, Master\'s, or PhD)',
 'Diploma translation (if not in Slovak or English)',
 'Diploma apostille (Hague Convention)',
 ],
 notes: [
 'Bachelor\'s degree minimum',
 'Master\'s or PhD preferred',
 'Degree must be recognized in Slovakia',
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
 'Health insurance (valid in Slovakia)',
 'Proof of accommodation in Slovakia',
 'Passport-style photographs (2)',
 ],
 notes: [
 'All documents must be apostilled',
 'Translations to Slovak required for non-English documents',
 'Criminal background check must be recent (within 6 months)',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit your EU Blue Card application to Slovak authorities',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 100)',
 'Appointment confirmation',
 ],
 notes: [
 'Can submit at Slovak Embassy in US or in Slovakia',
 'Appointment required',
 'Bring original documents and copies',
 ],
 },
 {
 id: 'receive-card-register',
 title: 'Receive EU Blue Card and Register in Slovakia',
 description: 'Receive your EU Blue Card, travel to Slovakia, and complete registration',
 estimatedDuration: '30-60 days',
 documents: [
 'EU Blue Card',
 'All original documents',
 'Proof of accommodation',
 ],
 notes: [
 'Processing time: typically 30-60 days',
 'EU Blue Card valid for 2 years initially',
 'Register at Foreign Police within 3 days',
 'Bratislava proximity to Vienna',
 'Low cost of living',
 'Central European location',
 'PR after 5 years, citizenship after 8 years',
 ],
 },
 ],
 },
 'sk_startup_visa': {
 programId: 'sk_startup_visa',
 countryCode: 'SK',
 programName: 'Startup Visa',
 totalEstimatedDuration: '2-3 months',
 complexity: 'medium',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> BusinessIdea[Develop Innovative<br/>Business Idea]
 BusinessIdea --> Funds[Verify Minimum Funds<br/> EUR 5,000]
 Funds --> CheckFunds{Funds Sufficient?}
 CheckFunds -->|Yes| Program[Apply to Slovak<br/>Startup Program]
 CheckFunds -->|No| End1([Not Eligible])
 Program --> Acceptance{Accepted by<br/>Program?}
 Acceptance -->|Yes| GatherDocs[Gather Required Documents]
 Acceptance -->|No| End2([Not Eligible])
 GatherDocs --> Submit[Submit Application to<br/>Slovak Embassy or in Slovakia]
 Submit --> Processing[Processing<br/>30-60 Days]
 Processing --> Decision{Decision}
 Decision -->|Approved| Visa[Receive Startup Visa<br/>1-Year Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Visa --> Travel[Travel to Slovakia]
 Travel --> Register[Register Business &<br/>at Foreign Police]
 Register --> Success([Process Complete])
 Appeal --> End3([Process Ended])
 
 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style End3 fill:#ffe1e1
 style Visa fill:#e1e5ff
`,
 steps: [
 {
 id: 'develop-business-idea',
 title: 'Develop Innovative Business Idea',
 description: 'Create a compelling business plan for an innovative startup',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Business plan (detailed)',
 'Market analysis',
 'Financial projections',
 'Product/service description',
 ],
 notes: [
 'Must be innovative and scalable',
 'Tech startups preferred',
 'Bratislava startup ecosystem',
 ],
 },
 {
 id: 'verify-funds',
 title: 'Verify Minimum Funds',
 description: 'Ensure you have minimum EUR 5,000 in funds',
 estimatedDuration: '1 week',
 documents: [
 'Bank statements (last 3 months)',
 'Proof of funds ( EUR 5,000 minimum)',
 'Source of funds documentation',
 ],
 notes: [
 'Minimum EUR 5,000',
 'Same as Bulgaria and Hungary',
 'Low operating costs in Slovakia',
 ],
 },
 {
 id: 'apply-program',
 title: 'Apply to Slovak Startup Program',
 description: 'Get accepted by a Slovak startup program or incubator',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Business plan',
 'Pitch deck',
 'Team information',
 'Program application',
 ],
 notes: [
 'Bratislava startup ecosystem',
 'Low operating costs',
 'Proximity to Vienna',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the startup visa application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 6 months)',
 'Business plan',
 'Proof of funds ( EUR 5,000)',
 'Program acceptance letter',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Slovakia)',
 'Proof of accommodation in Slovakia',
 'Passport-style photographs (2)',
 ],
 notes: [
 'All documents must be apostilled',
 'Can bring co-founders',
 ],
 },
 {
 id: 'receive-visa-register',
 title: 'Receive Visa and Register Business in Slovakia',
 description: 'Receive your startup visa, travel to Slovakia, and register your business',
 estimatedDuration: '30-60 days',
 documents: [
 'Startup visa',
 'All original documents',
 'Business registration documents',
 ],
 notes: [
 'Processing time: typically 30-60 days',
 'Visa valid for 1 year initially',
 'Renewable',
 'Bratislava startup ecosystem',
 'Low cost of living',
 'Proximity to Vienna',
 'Central European location',
 'PR after 5 years, citizenship after 8 years',
 ],
 },
 ],
 },
};

