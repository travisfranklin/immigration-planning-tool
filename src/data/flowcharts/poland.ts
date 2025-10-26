/**
 * Poland Immigration Process Flowcharts
 * Defines the step-by-step process for each Polish visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const polandFlowcharts: Record<string, FlowchartDefinition> = {
 'pl_eu_blue_card': {
 programId: 'pl_eu_blue_card',
 countryCode: 'PL',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer<br/>from Polish Employer]
 job-offer --> CheckSalary{Salary >= EUR 1,800/month<br/>( EUR 21,600/year)?}
 CheckSalary -->|Yes| CheckEducation{Higher Education<br/>Degree?}
 CheckSalary -->|No| End1([Not Eligible])
 CheckEducation -->|Yes| gather-documents[Gather Required Documents]
 CheckEducation -->|No| End2([Not Eligible])
 gather-documents -->submit-application[Submit Application to<br/>Polish Consulate or in Poland]
 submit-application --> processing[Processing<br/>30-60 Days]
 processing --> Decision{Decision}
 Decision -->|Approved| BlueCard[Receive EU Blue Card<br/>3-Year Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 BlueCard --> arrival[Travel to Poland]
 arrival --> registration[Register at Local<br/>Voivodeship Office]
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
 title: 'Secure Job Offer from Polish Employer',
 description: 'Obtain a binding job offer from a registered Polish employer',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 1,800/month = EUR 21,600/year)',
 'Employer registration documents',
 ],
 notes: [
 'Minimum salary: EUR 1,800/month ( EUR 21,600/year)',
 'Lower than Western Europe (e.g., Germany EUR 45,300/year)',
 'Growing tech sector in Warsaw, Kraków, Wrocław',
 'Employer must be registered in Poland',
 'English common in tech companies',
 ],
 },
 {
 id: 'verify-education',
 title: 'Verify Higher Education Requirement',
 description: 'Ensure you have a higher education degree (Bachelor\'s or higher)',
 estimatedDuration: '1-2 weeks',
 documents: [
 'University degree (Bachelor\'s, Master\'s, or PhD)',
 'Diploma translation (if not in Polish or English)',
 'Diploma apostille (Hague Convention)',
 ],
 notes: [
 'Bachelor\'s degree minimum',
 'Master\'s or PhD preferred',
 'Degree must be recognized in Poland',
 'Translation to Polish may be required',
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
 'Health insurance (valid in Poland)',
 'Proof of accommodation in Poland',
 'Passport-style photographs (2)',
 ],
 notes: [
 'All documents must be apostilled',
 'Translations to Polish required for non-English documents',
 'Criminal background check must be recent (within 6 months)',
 'Health insurance must cover entire stay',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit your EU Blue Card application to Polish authorities',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 100)',
 'Appointment confirmation',
 ],
 notes: [
 'Can submit at Polish Consulate in US or in Poland',
 'Appointment required (book 2-4 weeks in advance)',
 'Bring original documents and copies',
 'Biometrics collected at appointment',
 ],
 },
 {
 id: 'receive-card-register',
 title: 'Receive EU Blue Card and Register in Poland',
 description: 'Receive your EU Blue Card, travel to Poland, and complete registration',
 estimatedDuration: '30-60 days',
 documents: [
 'EU Blue Card',
 'All original documents',
 'Proof of accommodation',
 ],
 notes: [
 'Processing time: typically 30-60 days',
 'EU Blue Card valid for 3 years',
 'Register at local Voivodeship Office within 30 days of arrival',
 'Can work throughout EU after 18 months',
 'Family members can join',
 'PR after 5 years, citizenship after 5 years (with Polish language B1)',
 'Lower cost of living than Western Europe',
 'Growing tech sector',
 ],
 },
 ],
 },
 'pl_business_harbour': {
 programId: 'pl_business_harbour',
 countryCode: 'PL',
 programName: 'Poland Business Harbour (Startup Visa)',
 totalEstimatedDuration: '2-3 months',
 complexity: 'medium',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> BusinessIdea[Develop Innovative<br/>Business Idea]
 BusinessIdea --> Funds[Verify Minimum Funds<br/> EUR 4,500 (PLN 20,000)]
 Funds --> CheckFunds{Funds Sufficient?}
 CheckFunds -->|Yes| Accelerator[Apply to Polish<br/>Startup Accelerator]
 CheckFunds -->|No| End1([Not Eligible])
 Accelerator --> Acceptance{Accepted by<br/>Accelerator?}
 Acceptance -->|Yes| GatherDocs[Gather Required Documents]
 Acceptance -->|No| End2([Not Eligible])
 GatherDocs --> Submit[Submit Application to<br/>Polish Consulate or in Poland]
 Submit --> Processing[Processing<br/>30-60 Days]
 Processing --> Decision{Decision}
 Decision -->|Approved| Visa[Receive Startup Visa<br/>1-Year Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Visa --> Travel[Travel to Poland]
 Travel --> Register[Register Business &<br/>at Voivodeship Office]
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
 'Should demonstrate growth potential',
 'Can be in any sector (tech, fintech, biotech, etc.)',
 ],
 },
 {
 id: 'verify-funds',
 title: 'Verify Minimum Funds',
 description: 'Ensure you have minimum EUR 4,500 (PLN 20,000) in funds',
 estimatedDuration: '1 week',
 documents: [
 'Bank statements (last 3 months)',
 'Proof of funds ( EUR 4,500 minimum)',
 'Source of funds documentation',
 ],
 notes: [
 'Minimum EUR 4,500 (PLN 20,000)',
 'Lower than most EU startup visas',
 'Funds must be available for business use',
 'Can be personal savings or investment',
 ],
 },
 {
 id: 'apply-accelerator',
 title: 'Apply to Polish Startup Accelerator',
 description: 'Get accepted by a Polish startup accelerator or incubator',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Business plan',
 'Pitch deck',
 'Team information',
 'Accelerator application',
 ],
 notes: [
 'Must be accepted by recognized Polish accelerator',
 'Poland Business Harbour program partners with accelerators',
 'Growing startup ecosystem in Warsaw, Kraków',
 'Access to mentorship and networking',
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
 'Proof of funds ( EUR 4,500)',
 'Accelerator acceptance letter',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Poland)',
 'Proof of accommodation in Poland',
 'Passport-style photographs (2)',
 ],
 notes: [
 'All documents must be apostilled',
 'Translations to Polish required for non-English documents',
 'Criminal background check must be recent (within 6 months)',
 'Can bring co-founders',
 ],
 },
 {
 id: 'receive-visa-register',
 title: 'Receive Visa and Register Business in Poland',
 description: 'Receive your startup visa, travel to Poland, and register your business',
 estimatedDuration: '30-60 days',
 documents: [
 'Startup visa',
 'All original documents',
 'Business registration documents',
 ],
 notes: [
 'Processing time: typically 30-60 days',
 'Visa valid for 1 year initially',
 'Renewable for additional periods',
 'Register business within 30 days of arrival',
 'Register at local Voivodeship Office',
 'Access to accelerator resources',
 'Growing startup ecosystem',
 'Low cost of living',
 'Large market (38M people)',
 'PR after 5 years, citizenship after 5 years',
 ],
 },
 ],
 },
};

