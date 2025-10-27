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
 Start([Start Process]) --> job-offer[Secure Job Offer<br/>from Hungarian Employer]
 job-offer --> check-salary{Salary >= EUR 1,500/month<br/>( EUR 18,000/year)?}
 check-salary -->|Yes| check-education{Higher Education<br/>Degree?}
 check-salary -->|No| End1([Not Eligible])
 check-education -->|Yes| gather-documents[Gather Required Documents]
 check-education -->|No| End2([Not Eligible])
 gather-documents --> submit-application[Submit Application to<br/>Hungarian Consulate or in Hungary]
 submit-application --> processing[Processing<br/>30-60 Days]
 processing --> decision{Decision}
 decision -->|Approved| receive-blue-card[Receive EU Blue Card<br/>2-Year Permit]
 decision -->|Rejected| consider-appeal[Consider Appeal]
 receive-blue-card --> travel[Travel to Hungary]
 travel --> register[Register at Immigration<br/>Office within 3 Days]
 register --> Success([Process Complete])
 consider-appeal --> End3([Process Ended])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style End3 fill:#ffe1e1
 style receive-blue-card fill:#e1e5ff
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
 id: 'check-salary',
 title: 'Verify Salary Requirement',
 description: 'Ensure the job offer meets minimum salary threshold',
 estimatedDuration: '1 day',
 documents: ['Employment contract with salary details'],
 notes: ['Minimum salary: EUR 1,500/month (EUR 18,000/year)'],
 isConditional: true,
 condition: 'Salary must be >= EUR 1,500/month',
 },
 {
 id: 'check-education',
 title: 'Verify Higher Education Requirement',
 description: 'Ensure you have a higher education degree (Bachelor\'s or higher)',
 estimatedDuration: '1-2 weeks',
 documents: ['University degree (Bachelor\'s, Master\'s, or PhD)', 'Diploma translation', 'Diploma apostille'],
 notes: ['Bachelor\'s degree minimum', 'Master\'s or PhD preferred', 'Degree must be recognized in Hungary'],
 isConditional: true,
 condition: 'Must have higher education degree',
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the EU Blue Card application',
 estimatedDuration: '2-3 weeks',
 documents: ['Valid passport', 'Employment contract', 'Higher education degree', 'Criminal background check', 'Health insurance', 'Proof of accommodation', 'Passport photographs'],
 notes: ['All documents must be apostilled', 'Translations to Hungarian required'],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit your EU Blue Card application to Hungarian authorities',
 estimatedDuration: '1 day',
 documents: ['All gathered documents', 'Application fee payment (~EUR 100)', 'Appointment confirmation'],
 notes: ['Can submit at Hungarian Consulate in US or in Hungary', 'Appointment required', 'Biometrics collected'],
 },
 {
 id: 'processing',
 title: 'Processing Period',
 description: 'Wait for Hungarian authorities to process your application',
 estimatedDuration: '30-60 days',
 documents: [],
 notes: ['Processing time: typically 30-60 days'],
 },
 {
 id: 'decision',
 title: 'Application Decision',
 description: 'Wait for decision on your EU Blue Card application',
 estimatedDuration: '1 week',
 documents: [],
 notes: ['Decision notification sent by email or post'],
 },
 {
 id: 'receive-blue-card',
 title: 'Receive EU Blue Card',
 description: 'Collect your approved EU Blue Card',
 estimatedDuration: '1 week',
 documents: ['Passport', 'Approval notification'],
 notes: ['EU Blue Card valid for 2 years initially', 'Renewable', 'Can work throughout EU after 18 months'],
 },
 {
 id: 'consider-appeal',
 title: 'Consider Appeal',
 description: 'If rejected, consider appealing the decision',
 estimatedDuration: 'Varies',
 documents: ['Rejection letter', 'Additional supporting documents'],
 notes: ['Consult immigration lawyer'],
 },
 {
 id: 'travel',
 title: 'Travel to Hungary',
 description: 'Book travel and relocate to Hungary',
 estimatedDuration: '1-2 weeks',
 documents: ['Valid passport', 'EU Blue Card', 'Proof of accommodation'],
 notes: ['Budapest has growing tech scene', 'Very low cost of living', '9% corporate tax (one of lowest in EU)'],
 },
 {
 id: 'register',
 title: 'Register at Immigration Office',
 description: 'Complete registration formalities in Hungary',
 estimatedDuration: '1 day',
 documents: ['EU Blue Card', 'All original documents', 'Proof of accommodation'],
 notes: ['Register at Immigration Office within 3 days', 'Family members can join', 'PR after 5 years, citizenship after 8 years'],
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
 id: 'check-funds',
 title: 'Check Funds Sufficiency',
 description: 'Verify you have minimum EUR 5,000 (HUF 2,000,000)',
 estimatedDuration: '1 day',
 documents: ['Bank statements'],
 notes: ['Minimum EUR 5,000 required'],
 isConditional: true,
 condition: 'Funds must be >= EUR 5,000',
 },
 {
 id: 'apply-to-program',
 title: 'Apply to Hungarian Startup Program',
 description: 'Get accepted by a Hungarian startup program or incubator',
 estimatedDuration: '2-4 weeks',
 documents: ['Business plan', 'Pitch deck', 'Team information', 'Program application'],
 notes: ['Must be accepted by recognized Hungarian startup program', 'Budapest startup scene growing', '9% corporate tax (one of lowest in EU)'],
 },
 {
 id: 'program-acceptance',
 title: 'Program Acceptance Decision',
 description: 'Wait for acceptance decision from startup program',
 estimatedDuration: '2-4 weeks',
 documents: [],
 notes: ['Acceptance letter required for visa application'],
 isConditional: true,
 condition: 'Must be accepted by program',
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the White Card application',
 estimatedDuration: '2-3 weeks',
 documents: ['Valid passport', 'Business plan', 'Proof of funds (EUR 5,000)', 'Program acceptance letter', 'Criminal background check', 'Health insurance', 'Proof of accommodation', 'Passport photographs'],
 notes: ['All documents must be apostilled', 'Translations to Hungarian required'],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit White Card application to Hungarian authorities',
 estimatedDuration: '1 day',
 documents: ['All gathered documents', 'Application fee payment'],
 notes: ['Can submit at Hungarian Consulate or in Hungary'],
 },
 {
 id: 'processing',
 title: 'Processing Period',
 description: 'Wait for Hungarian authorities to process your application',
 estimatedDuration: '30-60 days',
 documents: [],
 notes: ['Processing time: typically 30-60 days'],
 },
 {
 id: 'decision',
 title: 'Application Decision',
 description: 'Wait for decision on your White Card application',
 estimatedDuration: '1 week',
 documents: [],
 notes: ['Decision notification sent by email or post'],
 },
 {
 id: 'receive-visa',
 title: 'Receive White Card',
 description: 'Collect your approved White Card',
 estimatedDuration: '1 week',
 documents: ['Passport', 'Approval notification'],
 notes: ['White Card valid for 1 year initially', 'Renewable'],
 },
 {
 id: 'consider-appeal',
 title: 'Consider Appeal',
 description: 'If rejected, consider appealing the decision',
 estimatedDuration: 'Varies',
 documents: ['Rejection letter', 'Additional supporting documents'],
 notes: ['Consult immigration lawyer'],
 },
 {
 id: 'travel',
 title: 'Travel to Hungary',
 description: 'Book travel and relocate to Hungary',
 estimatedDuration: '1-2 weeks',
 documents: ['Valid passport', 'White Card', 'Proof of accommodation'],
 notes: ['Budapest startup scene growing', 'Very low cost of living'],
 },
 {
 id: 'register-business',
 title: 'Register Business and at Immigration Office',
 description: 'Complete business registration and immigration formalities',
 estimatedDuration: '1-2 weeks',
 documents: ['White Card', 'Business registration documents', 'All original documents'],
 notes: ['Register business within 30 days of arrival', 'Register at Immigration Office', 'PR after 5 years, citizenship after 8 years'],
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
 Start([Start Process]) -->job-offer[Secure Job Offer<br/>from Hungarian Employer]
 job-offer --> check-salary{Salary >= HUF 300,000/month<br/>(EUR 750)?}
 check-salary -->|Yes| gather-documents[Gather Required Documents]
 check-salary -->|No| End1([Not Eligible])
 gather-documents -->submit-application[Submit Application]
 submit-application -->processing[Processing<br/>30-90 Days]
 processing --> decision{Decision}
 decision -->|Approved| receive-permit[Receive Work Permit]
 decision -->|Rejected| consider-appeal[Consider Appeal]
 receive-permit -->travel-to-hungary[Travel to Hungary]
 travel-to-hungary -->register[Register at<br/>Immigration Office]
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

 'hu_self_employment': {
 programId: 'hu_self_employment',
 countryCode: 'HU',
 programName: 'Self-Employment Visa',
 totalEstimatedDuration: '2-4 months',
 complexity: 'medium',
 successRate: '75%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) -->plan[Develop Business Plan]
 plan --> funds{EUR 7,000<br/>Investment?}
 funds -->|Yes| docs[Gather Documents]
 funds -->|No| End1([Not Eligible])
 docs -->submit[Submit Application]
 submit -->process[Processing 30-90 Days]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit -->travel[Travel to Hungary]
 travel -->register[Register Business]
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
 id: 'plan',
 title: 'Develop Business Plan',
 description: 'Create comprehensive business plan',
 estimatedDuration: '2-4 weeks',
 documents: ['Business plan', 'Market analysis', 'Financial projections'],
 notes: ['EUR 7,000 minimum investment', 'Budapest tech scene', '9% corporate tax', 'PR in 5 years'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Business plan', 'Proof of funds', 'Criminal check', 'Health insurance'],
 notes: ['Documents must be apostilled', 'Translations to Hungarian required'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Hungarian authorities',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee'],
 notes: ['Processing: 30-90 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Hungarian Immigration reviews application',
 estimatedDuration: '30-90 days',
 documents: [],
 notes: ['Business viability assessed'],
 },
 {
 id: 'permit',
 title: 'Receive Permit',
 description: 'Receive self-employment permit',
 estimatedDuration: '1 week',
 documents: ['Residence permit'],
 notes: ['Valid for 2 years, renewable'],
 },
 {
 id: 'travel',
 title: 'Travel to Hungary',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Budapest (BUD)'],
 },
 {
 id: 'register',
 title: 'Register Business',
 description: 'Register business and at Immigration Office',
 estimatedDuration: '2-4 weeks',
 documents: ['Business registration', 'Proof of address'],
 notes: ['Register within 3 days', 'Budapest tech scene', '9% corporate tax', 'PR in 5 years'],
 },
 {
 id: 'appeal',
 title: 'Consider Appeal',
 description: 'If rejected, evaluate options',
 estimatedDuration: '1-2 months',
 documents: ['Rejection decision', 'Appeal form'],
 notes: ['Can reapply with stronger plan'],
 },
 ],
 },

 'hu_family_reunification': {
 programId: 'hu_family_reunification',
 countryCode: 'HU',
 programName: 'Family Reunification',
 totalEstimatedDuration: '2-3 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) -->check[Check Eligibility]
 check --> eligible{Sponsor<br/>Eligible?}
 eligible -->|Yes| docs[Gather Documents]
 eligible -->|No| End1([Not Eligible])
 docs -->submit[Submit Application]
 submit -->process[Processing 30-60 Days]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit -->travel[Travel to Hungary]
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
 notes: ['All documents must be apostilled', 'Translations to Hungarian required'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Hungarian authorities',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee'],
 notes: ['Processing: 30-60 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Immigration reviews application',
 estimatedDuration: '30-60 days',
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
 title: 'Travel to Hungary',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Budapest (BUD)'],
 },
 {
 id: 'register',
 title: 'Register at Immigration',
 description: 'Register within 3 days',
 estimatedDuration: '1 week',
 documents: ['Proof of address'],
 notes: ['Register within 3 days', 'PR in 5 years'],
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

