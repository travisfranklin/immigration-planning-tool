/**
 * Hungary Immigration Process Flowcharts
 * Defines the step-by-step process for each Hungarian visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const hungaryFlowcharts: Record<string, FlowchartDefinition> = {
 'hu_eu_blue_card': {
 programId: 'hu_eu_blue_card',
 countryCode: 'HU',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer<br/>from Hungarian Employer]
 job-offer --> CheckSalary{Salary >= EUR 1,500/month<br/>( EUR 18,000/year)?}
 CheckSalary -->|Yes| CheckEducation{Higher Education<br/>Degree?}
 CheckSalary -->|No| End1([Not Eligible])
 CheckEducation -->|Yes| gather-documents[Gather Required Documents]
 CheckEducation -->|No| End2([Not Eligible])
 gather-documents -->submit-application[Submit Application to<br/>Hungarian Consulate or in Hungary]
 submit-application --> processing[Processing<br/>30-60 Days]
 processing --> Decision{Decision}
 Decision -->|Approved| BlueCard[Receive EU Blue Card<br/>2-Year Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 BlueCard --> arrival[Travel to Hungary]
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
 title: 'Secure Job Offer from Hungarian Employer',
 description: 'Obtain a binding job offer from a registered Hungarian employer',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 1,500/month = EUR 18,000/year)',
 'Employer registration documents',
 ],
 notes: [
 'Minimum salary: EUR 1,500/month ( EUR 18,000/year)',
 'Lower than Poland/Czech ( EUR 1,800/month)',
 'Budapest has growing tech scene',
 'Employer must be registered in Hungary',
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
 'Diploma translation (if not in Hungarian or English)',
 'Diploma apostille (Hague Convention)',
 ],
 notes: [
 'Bachelor\'s degree minimum',
 'Master\'s or PhD preferred',
 'Degree must be recognized in Hungary',
 'Translation to Hungarian may be required',
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
 'Health insurance (valid in Hungary)',
 'Proof of accommodation in Hungary',
 'Passport-style photographs (2)',
 ],
 notes: [
 'All documents must be apostilled',
 'Translations to Hungarian required for non-English documents',
 'Criminal background check must be recent (within 6 months)',
 'Health insurance must cover entire stay',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit your EU Blue Card application to Hungarian authorities',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 100)',
 'Appointment confirmation',
 ],
 notes: [
 'Can submit at Hungarian Consulate in US or in Hungary',
 'Appointment required (book 2-4 weeks in advance)',
 'Bring original documents and copies',
 'Biometrics collected at appointment',
 ],
 },
 {
 id: 'receive-card-register',
 title: 'Receive EU Blue Card and Register in Hungary',
 description: 'Receive your EU Blue Card, travel to Hungary, and complete registration',
 estimatedDuration: '30-60 days',
 documents: [
 'EU Blue Card',
 'All original documents',
 'Proof of accommodation',
 ],
 notes: [
 'Processing time: typically 30-60 days',
 'EU Blue Card valid for 2 years initially',
 'Register at Immigration Office within 3 days of arrival',
 'Can work throughout EU after 18 months',
 'Family members can join',
 'PR after 5 years, citizenship after 8 years',
 'Budapest has growing tech scene',
 'Very low cost of living',
 '9% corporate tax (one of lowest in EU)',
 ],
 },
 ],
 },
 'hu_white_card': {
 programId: 'hu_white_card',
 countryCode: 'HU',
 programName: 'White Card (Startup Visa)',
 totalEstimatedDuration: '2-3 months',
 complexity: 'medium',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> BusinessIdea[Develop Innovative<br/>Business Idea]
 BusinessIdea --> Funds[Verify Minimum Funds<br/> EUR 5,000 (HUF 2,000,000)]
 Funds --> CheckFunds{Funds Sufficient?}
 CheckFunds -->|Yes| Program[Apply to Hungarian<br/>Startup Program]
 CheckFunds -->|No| End1([Not Eligible])
 Program --> Acceptance{Accepted by<br/>Program?}
 Acceptance -->|Yes| GatherDocs[Gather Required Documents]
 Acceptance -->|No| End2([Not Eligible])
 GatherDocs --> Submit[Submit Application to<br/>Hungarian Consulate or in Hungary]
 Submit --> Processing[Processing<br/>30-60 Days]
 Processing --> Decision{Decision}
 Decision -->|Approved| Visa[Receive White Card<br/>1-Year Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Visa --> Travel[Travel to Hungary]
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
 'Should demonstrate growth potential',
 'Can be in any sector (tech, fintech, biotech, etc.)',
 ],
 },
 {
 id: 'verify-funds',
 title: 'Verify Minimum Funds',
 description: 'Ensure you have minimum EUR 5,000 (HUF 2,000,000) in funds',
 estimatedDuration: '1 week',
 documents: [
 'Bank statements (last 3 months)',
 'Proof of funds ( EUR 5,000 minimum)',
 'Source of funds documentation',
 ],
 notes: [
 'Minimum EUR 5,000 (HUF 2,000,000)',
 'Similar to Poland ( EUR 4,500), lower than Czech ( EUR 8,000)',
 'Funds must be available for business use',
 'Can be personal savings or investment',
 ],
 },
 {
 id: 'apply-program',
 title: 'Apply to Hungarian Startup Program',
 description: 'Get accepted by a Hungarian startup program or incubator',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Business plan',
 'Pitch deck',
 'Team information',
 'Program application',
 ],
 notes: [
 'Must be accepted by recognized Hungarian startup program',
 'Budapest startup scene growing',
 'Access to mentorship and networking',
 '9% corporate tax (one of lowest in EU)',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the White Card application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 6 months)',
 'Business plan',
 'Proof of funds ( EUR 5,000)',
 'Program acceptance letter',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Hungary)',
 'Proof of accommodation in Hungary',
 'Passport-style photographs (2)',
 ],
 notes: [
 'All documents must be apostilled',
 'Translations to Hungarian required for non-English documents',
 'Criminal background check must be recent (within 6 months)',
 'Can bring co-founders',
 ],
 },
 {
 id: 'receive-visa-register',
 title: 'Receive White Card and Register Business in Hungary',
 description: 'Receive your White Card, travel to Hungary, and register your business',
 estimatedDuration: '30-60 days',
 documents: [
 'White Card',
 'All original documents',
 'Business registration documents',
 ],
 notes: [
 'Processing time: typically 30-60 days',
 'White Card valid for 1 year initially',
 'Renewable for additional periods',
 'Register business within 30 days of arrival',
 'Register at Immigration Office',
 'Access to startup program resources',
 'Budapest startup scene growing',
 'Very low cost of living',
 '9% corporate tax (one of lowest in EU)',
 'PR after 5 years, citizenship after 8 years',
 ],
 },
 ],
 },

 'hu_work_permit': {
 programId: 'hu_work_permit',
 countryCode: 'HU',
 programName: 'Work Permit',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> job-offer[Secure Job Offer<br/>from Hungarian Employer]
 job-offer --> check-salary{Salary >= HUF 300,000/month<br/>(EUR 750)?}
 check-salary -->|Yes| gather-documents[Gather Required Documents]
 check-salary -->|No| End1([Not Eligible])
 gather-documents --> submit-application[Submit Application]
 submit-application --> processing[Processing<br/>30-90 Days]
 processing --> decision{Decision}
 decision -->|Approved| receive-permit[Receive Work Permit]
 decision -->|Rejected| consider-appeal[Consider Appeal]
 receive-permit --> travel-to-hungary[Travel to Hungary]
 travel-to-hungary --> register[Register at<br/>Immigration Office]
 register --> Success([Process Complete])
 consider-appeal --> End2([Process Ended])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style receive-permit fill:#e1e5ff
`,
 steps: [
 {
 id: 'job-offer',
 title: 'Secure Job Offer from Hungarian Employer',
 description: 'Obtain a binding job offer from a Hungarian employer',
 estimatedDuration: '1-2 months',
 documents: ['Signed employment contract', 'Job description', 'Salary confirmation (minimum HUF 300,000/month = EUR 750)', 'Employer information'],
 notes: ['Very low salary threshold (EUR 750/month)', 'Budapest has growing tech scene', 'Very low cost of living', '9% corporate tax', 'PR after 5 years, citizenship after 8 years'],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for work permit application',
 estimatedDuration: '2-3 weeks',
 documents: ['Valid passport', 'Employment contract', 'Educational qualifications', 'Criminal record certificate', 'Health insurance', 'Proof of accommodation', 'Passport photographs'],
 notes: ['Documents must be apostilled', 'Translations to Hungarian required'],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit work permit application to Hungarian authorities',
 estimatedDuration: '1 week',
 documents: ['All gathered documents', 'Application fee payment'],
 notes: ['Submit at Hungarian consulate or in Hungary', 'Processing time: 30-90 days'],
 },
 {
 id: 'processing',
 title: 'Processing (30-90 Days)',
 description: 'Wait for authorities to process application',
 estimatedDuration: '30-90 days',
 documents: [],
 notes: ['Processing time: typically 30-90 days'],
 },
 {
 id: 'receive-permit',
 title: 'Receive Work Permit',
 description: 'Receive approved work permit',
 estimatedDuration: '1 week',
 documents: ['Work permit approval'],
 notes: ['Permit initially valid for 2 years', 'Renewable if employment continues'],
 },
 {
 id: 'travel-to-hungary',
 title: 'Travel to Hungary',
 description: 'Travel to Hungary with work permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with work permit', 'Employment contract'],
 notes: ['Main airport: Budapest (BUD)'],
 },
 {
 id: 'register',
 title: 'Register at Immigration Office',
 description: 'Complete registration',
 estimatedDuration: '2-4 weeks',
 documents: ['Passport with work permit', 'Proof of accommodation'],
 notes: ['Register at Immigration Office within 3 days', 'Budapest has growing tech scene', 'Very low cost of living', '9% corporate tax', 'PR after 5 years, citizenship after 8 years'],
 },
 {
 id: 'consider-appeal',
 title: 'Consider Appeal',
 description: 'If rejected, evaluate appeal options',
 estimatedDuration: '1-2 months',
 documents: ['Rejection decision', 'Appeal form'],
 notes: ['Can reapply with stronger application', 'Alternative: Hungary EU Blue Card or White Card'],
 },
 ],
 },
};

