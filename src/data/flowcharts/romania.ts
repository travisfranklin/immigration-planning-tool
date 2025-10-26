/**
 * Romania Immigration Process Flowcharts
 * Defines the step-by-step process for each Romanian visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const romaniaFlowcharts: Record<string, FlowchartDefinition> = {
 'ro_eu_blue_card': {
 programId: 'ro_eu_blue_card',
 countryCode: 'RO',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer<br/>from Romanian Employer]
 job-offer --> CheckSalary{Salary >= EUR 1,600/month<br/>( EUR 19,200/year)?}
 CheckSalary -->|Yes| CheckEducation{Higher Education<br/>Degree?}
 CheckSalary -->|No| End1([Not Eligible])
 CheckEducation -->|Yes| gather-documents[Gather Required Documents]
 CheckEducation -->|No| End2([Not Eligible])
 gather-documents --> submit-application[Submit Application to<br/>Romanian Consulate or in Romania]
 submit-application --> processing[Processing<br/>30-60 Days]
 processing --> Decision{Decision}
 Decision -->|Approved| BlueCard[Receive EU Blue Card<br/>2-Year Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 BlueCard --> arrival[Travel to Romania]
 arrival --> registration[Register at Immigration<br/>Office within 3 Days]
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
 title: 'Secure Job Offer from Romanian Employer',
 description: 'Obtain a binding job offer from a registered Romanian employer',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 1,600/month = EUR 19,200/year)',
 'Employer registration documents',
 ],
 notes: [
 'Minimum salary: EUR 1,600/month ( EUR 19,200/year)',
 'Between Hungary ( EUR 1,500) and Poland/Czech ( EUR 1,800)',
 'Bucharest is major tech hub',
 'Fastest internet in EU!',
 'Employer must be registered in Romania',
 ],
 },
 {
 id: 'verify-education',
 title: 'Verify Higher Education Requirement',
 description: 'Ensure you have a higher education degree (Bachelor\'s or higher)',
 estimatedDuration: '1-2 weeks',
 documents: [
 'University degree (Bachelor\'s, Master\'s, or PhD)',
 'Diploma translation (if not in Romanian or English)',
 'Diploma apostille (Hague Convention)',
 ],
 notes: [
 'Bachelor\'s degree minimum',
 'Master\'s or PhD preferred',
 'Degree must be recognized in Romania',
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
 'Health insurance (valid in Romania)',
 'Proof of accommodation in Romania',
 'Passport-style photographs (2)',
 ],
 notes: [
 'All documents must be apostilled',
 'Translations to Romanian required for non-English documents',
 'Criminal background check must be recent (within 6 months)',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit your EU Blue Card application to Romanian authorities',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 100)',
 'Appointment confirmation',
 ],
 notes: [
 'Can submit at Romanian Consulate in US or in Romania',
 'Appointment required',
 'Bring original documents and copies',
 ],
 },
 {
 id: 'receive-card-register',
 title: 'Receive EU Blue Card and Register in Romania',
 description: 'Receive your EU Blue Card, travel to Romania, and complete registration',
 estimatedDuration: '30-60 days',
 documents: [
 'EU Blue Card',
 'All original documents',
 'Proof of accommodation',
 ],
 notes: [
 'Processing time: typically 30-60 days',
 'EU Blue Card valid for 2 years initially',
 'Register at Immigration Office within 3 days',
 'Bucharest is major tech hub',
 'Fastest internet in EU!',
 'Very low cost of living',
 'PR after 5 years, citizenship after 8 years',
 ],
 },
 ],
 },
 'ro_startup_visa': {
 programId: 'ro_startup_visa',
 countryCode: 'RO',
 programName: 'Startup Visa',
 totalEstimatedDuration: '2-3 months',
 complexity: 'medium',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> BusinessIdea[Develop Innovative<br/>Business Idea]
 BusinessIdea --> Funds[Verify Minimum Funds<br/> EUR 4,000 (RON 20,000)]
 Funds --> CheckFunds{Funds Sufficient?}
 CheckFunds -->|Yes| Program[Apply to Romanian<br/>Startup Program]
 CheckFunds -->|No| End1([Not Eligible])
 Program --> Acceptance{Accepted by<br/>Program?}
 Acceptance -->|Yes| GatherDocs[Gather Required Documents]
 Acceptance -->|No| End2([Not Eligible])
 GatherDocs --> Submit[Submit Application to<br/>Romanian Consulate or in Romania]
 Submit --> Processing[Processing<br/>30-60 Days]
 Processing --> Decision{Decision}
 Decision -->|Approved| Visa[Receive Startup Visa<br/>1-Year Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Visa --> Travel[Travel to Romania]
 Travel --> Register[Register Business &<br/>at Immigration Office]
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
 'Fastest internet in EU (great for tech!)',
 ],
 },
 {
 id: 'verify-funds',
 title: 'Verify Minimum Funds',
 description: 'Ensure you have minimum EUR 4,000 (RON 20,000) in funds',
 estimatedDuration: '1 week',
 documents: [
 'Bank statements (last 3 months)',
 'Proof of funds ( EUR 4,000 minimum)',
 'Source of funds documentation',
 ],
 notes: [
 'Minimum EUR 4,000 (RON 20,000)',
 'LOWEST startup visa funds in Phase 11!',
 'Lower than Poland ( EUR 4,500), Hungary ( EUR 5,000), Czech ( EUR 8,000)',
 ],
 },
 {
 id: 'apply-program',
 title: 'Apply to Romanian Startup Program',
 description: 'Get accepted by a Romanian startup program or incubator',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Business plan',
 'Pitch deck',
 'Team information',
 'Program application',
 ],
 notes: [
 'Bucharest startup ecosystem growing',
 'Very low operating costs',
 'Fastest internet in EU!',
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
 'Proof of funds ( EUR 4,000)',
 'Program acceptance letter',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Romania)',
 'Proof of accommodation in Romania',
 'Passport-style photographs (2)',
 ],
 notes: [
 'All documents must be apostilled',
 'Can bring co-founders',
 ],
 },
 {
 id: 'receive-visa-register',
 title: 'Receive Visa and Register Business in Romania',
 description: 'Receive your startup visa, travel to Romania, and register your business',
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
 'Bucharest startup ecosystem growing',
 'Fastest internet in EU!',
 'Very low cost of living',
 '16% flat tax',
 'PR after 5 years, citizenship after 8 years',
 ],
 },
 ],
 },
};

