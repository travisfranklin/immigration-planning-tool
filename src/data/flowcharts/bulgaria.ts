/**
 * Bulgaria Immigration Process Flowcharts
 * Defines the step-by-step process for each Bulgarian visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const bulgariaFlowcharts: Record<string, FlowchartDefinition> = {
 'bg_eu_blue_card': {
 programId: 'bg_eu_blue_card',
 countryCode: 'BG',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '95%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> JobOffer[Secure Job Offer<br/>from Bulgarian Employer]
 JobOffer --> CheckSalary{Salary >= EUR 1,500/month<br/>( EUR 18,000/year)?}
 CheckSalary -->|Yes| CheckEducation{Higher Education<br/>Degree?}
 CheckSalary -->|No| End1([Not Eligible])
 CheckEducation -->|Yes| GatherDocs[Gather Required Documents]
 CheckEducation -->|No| End2([Not Eligible])
 GatherDocs --> Submit[Submit Application to<br/>Bulgarian Consulate or in Bulgaria]
 Submit --> Processing[Processing<br/>30-60 Days]
 Processing --> Decision{Decision}
 Decision -->|Approved| BlueCard[Receive EU Blue Card<br/>3-Year Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 BlueCard --> Travel[Travel to Bulgaria]
 Travel --> Register[Register at Migration<br/>Directorate within 3 Days]
 Register --> Success([Process Complete])
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
 title: 'Secure Job Offer from Bulgarian Employer',
 description: 'Obtain a binding job offer from a registered Bulgarian employer',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 1,500/month = EUR 18,000/year)',
 'Employer registration documents',
 ],
 notes: [
 'Minimum salary: EUR 1,500/month ( EUR 18,000/year)',
 'Same as Hungary, lower than Poland/Czech',
 'Sofia has growing tech scene',
 'LOWEST cost of living in EU!',
 '10% flat tax rate',
 ],
 },
 {
 id: 'verify-education',
 title: 'Verify Higher Education Requirement',
 description: 'Ensure you have a higher education degree (Bachelor\'s or higher)',
 estimatedDuration: '1-2 weeks',
 documents: [
 'University degree (Bachelor\'s, Master\'s, or PhD)',
 'Diploma translation (if not in Bulgarian or English)',
 'Diploma apostille (Hague Convention)',
 ],
 notes: [
 'Bachelor\'s degree minimum',
 'Master\'s or PhD preferred',
 'Degree must be recognized in Bulgaria',
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
 'Health insurance (valid in Bulgaria)',
 'Proof of accommodation in Bulgaria',
 'Passport-style photographs (2)',
 ],
 notes: [
 'All documents must be apostilled',
 'Translations to Bulgarian required for non-English documents',
 'Criminal background check must be recent (within 6 months)',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit your EU Blue Card application to Bulgarian authorities',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 100)',
 'Appointment confirmation',
 ],
 notes: [
 'Can submit at Bulgarian Consulate in US or in Bulgaria',
 'Appointment required',
 'Bring original documents and copies',
 ],
 },
 {
 id: 'receive-card-register',
 title: 'Receive EU Blue Card and Register in Bulgaria',
 description: 'Receive your EU Blue Card, travel to Bulgaria, and complete registration',
 estimatedDuration: '30-60 days',
 documents: [
 'EU Blue Card',
 'All original documents',
 'Proof of accommodation',
 ],
 notes: [
 'Processing time: typically 30-60 days',
 'EU Blue Card valid for 3 years',
 'Register at Migration Directorate within 3 days',
 'Sofia has growing tech scene',
 'LOWEST cost of living in EU!',
 '10% flat tax rate (lowest in EU!)',
 'Black Sea coast',
 'PR after 5 years, citizenship after 5 years',
 ],
 },
 ],
 },
 'bg_startup_visa': {
 programId: 'bg_startup_visa',
 countryCode: 'BG',
 programName: 'Startup Visa',
 totalEstimatedDuration: '2-3 months',
 complexity: 'medium',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> BusinessIdea[Develop Innovative<br/>Business Idea]
 BusinessIdea --> Funds[Verify Minimum Funds<br/> EUR 5,000 (BGN 10,000)]
 Funds --> CheckFunds{Funds Sufficient?}
 CheckFunds -->|Yes| Program[Apply to Bulgarian<br/>Startup Program]
 CheckFunds -->|No| End1([Not Eligible])
 Program --> Acceptance{Accepted by<br/>Program?}
 Acceptance -->|Yes| GatherDocs[Gather Required Documents]
 Acceptance -->|No| End2([Not Eligible])
 GatherDocs --> Submit[Submit Application to<br/>Bulgarian Consulate or in Bulgaria]
 Submit --> Processing[Processing<br/>30-60 Days]
 Processing --> Decision{Decision}
 Decision -->|Approved| Visa[Receive Startup Visa<br/>1-Year Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Visa --> Travel[Travel to Bulgaria]
 Travel --> Register[Register Business &<br/>at Migration Directorate]
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
 'LOWEST operating costs in EU!',
 ],
 },
 {
 id: 'verify-funds',
 title: 'Verify Minimum Funds',
 description: 'Ensure you have minimum EUR 5,000 (BGN 10,000) in funds',
 estimatedDuration: '1 week',
 documents: [
 'Bank statements (last 3 months)',
 'Proof of funds ( EUR 5,000 minimum)',
 'Source of funds documentation',
 ],
 notes: [
 'Minimum EUR 5,000 (BGN 10,000)',
 'Between Romania ( EUR 4,000) and Czech ( EUR 8,000)',
 'LOWEST operating costs in EU!',
 ],
 },
 {
 id: 'apply-program',
 title: 'Apply to Bulgarian Startup Program',
 description: 'Get accepted by a Bulgarian startup program or incubator',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Business plan',
 'Pitch deck',
 'Team information',
 'Program application',
 ],
 notes: [
 'Sofia startup scene growing',
 'LOWEST operating costs in EU!',
 '10% flat tax',
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
 'Health insurance (valid in Bulgaria)',
 'Proof of accommodation in Bulgaria',
 'Passport-style photographs (2)',
 ],
 notes: [
 'All documents must be apostilled',
 'Can bring co-founders',
 ],
 },
 {
 id: 'receive-visa-register',
 title: 'Receive Visa and Register Business in Bulgaria',
 description: 'Receive your startup visa, travel to Bulgaria, and register your business',
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
 'Sofia startup scene growing',
 'LOWEST cost of living in EU!',
 'LOWEST operating costs in EU!',
 '10% flat tax (lowest in EU!)',
 'Black Sea coast',
 'PR after 5 years, citizenship after 5 years',
 ],
 },
 ],
 },
};

