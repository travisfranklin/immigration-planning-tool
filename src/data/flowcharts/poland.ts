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
 Start([Start Process]) --> job-offer[Secure Job Offer<br/>from Polish Employer]
 job-offer --> check-salary{Salary >= EUR 1,800/month<br/>( EUR 21,600/year)?}
 check-salary -->|Yes| check-education{Higher Education<br/>Degree?}
 check-salary -->|No| End1([Not Eligible])
 check-education -->|Yes| gather-documents[Gather Required Documents]
 check-education -->|No| End2([Not Eligible])
 gather-documents --> submit-application[Submit Application to<br/>Polish Consulate or in Poland]
 submit-application --> processing[Processing<br/>30-60 Days]
 processing --> decision{Decision}
 decision -->|Approved| receive-blue-card[Receive EU Blue Card<br/>3-Year Permit]
 decision -->|Rejected| consider-appeal[Consider Appeal]
 receive-blue-card --> travel[Travel to Poland]
 travel --> register[Register at Local<br/>Voivodeship Office]
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
 id: 'check-salary',
 title: 'Verify Salary Requirement',
 description: 'Ensure the job offer meets minimum salary threshold',
 estimatedDuration: '1 day',
 documents: ['Employment contract with salary details'],
 notes: ['Minimum salary: EUR 1,800/month (EUR 21,600/year)'],
 isConditional: true,
 condition: 'Salary must be >= EUR 1,800/month',
 },
 {
 id: 'check-education',
 title: 'Verify Higher Education Requirement',
 description: 'Ensure you have a higher education degree (Bachelor\'s or higher)',
 estimatedDuration: '1-2 weeks',
 documents: ['University degree (Bachelor\'s, Master\'s, or PhD)', 'Diploma translation', 'Diploma apostille'],
 notes: ['Bachelor\'s degree minimum', 'Master\'s or PhD preferred', 'Degree must be recognized in Poland'],
 isConditional: true,
 condition: 'Must have higher education degree',
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the EU Blue Card application',
 estimatedDuration: '2-3 weeks',
 documents: ['Valid passport', 'Employment contract', 'Higher education degree', 'Criminal background check', 'Health insurance', 'Proof of accommodation', 'Passport photographs'],
 notes: ['All documents must be apostilled', 'Translations to Polish required'],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit your EU Blue Card application to Polish authorities',
 estimatedDuration: '1 day',
 documents: ['All gathered documents', 'Application fee payment (~EUR 100)', 'Appointment confirmation'],
 notes: ['Can submit at Polish Consulate in US or in Poland', 'Appointment required', 'Biometrics collected'],
 },
 {
 id: 'processing',
 title: 'Processing Period',
 description: 'Wait for Polish authorities to process your application',
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
 notes: ['EU Blue Card valid for 3 years', 'Renewable', 'Can work throughout EU after 18 months'],
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
 title: 'Travel to Poland',
 description: 'Book travel and relocate to Poland',
 estimatedDuration: '1-2 weeks',
 documents: ['Valid passport', 'EU Blue Card', 'Proof of accommodation'],
 notes: ['Lower cost of living than Western Europe', 'Growing tech sector'],
 },
 {
 id: 'register',
 title: 'Register at Voivodeship Office',
 description: 'Complete registration formalities in Poland',
 estimatedDuration: '1 day',
 documents: ['EU Blue Card', 'All original documents', 'Proof of accommodation'],
 notes: ['Register at local Voivodeship Office within 30 days', 'Family members can join', 'PR after 5 years, citizenship after 5 years (with Polish language B1)'],
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
 Start([Start Process]) --> develop-business-idea[Develop Innovative<br/>Business Idea]
 BusinessIdea --> verify-funds[Verify Minimum Funds<br/> EUR 4,500 (PLN 20,000)]
 Funds --> check-funds{Funds Sufficient?}
 CheckFunds -->|Yes| apply-to-accelerator[Apply to Polish<br/>Startup Accelerator]
 CheckFunds -->|No| End1([Not Eligible])
 Accelerator --> program-acceptance{Accepted by<br/>Accelerator?}
 Acceptance -->|Yes| gather-documents[Gather Required Documents]
 Acceptance -->|No| End2([Not Eligible])
 GatherDocs --> submit-application[Submit Application to<br/>Polish Consulate or in Poland]
 Submit --> processing[Processing<br/>30-60 Days]
 Processing --> decision{Decision}
 Decision -->|Approved| receive-visa[Receive Startup Visa<br/>1-Year Permit]
 Decision -->|Rejected| consider-appeal[Consider Appeal]
 Visa --> travel[Travel to Poland]
 Travel --> register-business[Register Business &<br/>at Voivodeship Office]
 Register --> Success([Process Complete])
 Appeal --> End3([Process Ended])
 
 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style End3 fill:#ffe1e1
 style receive-visa fill:#e1e5ff
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
 id: 'check-funds',
 title: 'Check Funds Sufficiency',
 description: 'Verify you have minimum EUR 4,500 (PLN 20,000)',
 estimatedDuration: '1 day',
 documents: ['Bank statements'],
 notes: ['Minimum EUR 4,500 required'],
 isConditional: true,
 condition: 'Funds must be >= EUR 4,500',
 },
 {
 id: 'apply-to-accelerator',
 title: 'Apply to Polish Startup Accelerator',
 description: 'Get accepted by a Polish startup accelerator or incubator',
 estimatedDuration: '2-4 weeks',
 documents: ['Business plan', 'Pitch deck', 'Team information', 'Accelerator application'],
 notes: ['Must be accepted by recognized Polish accelerator', 'Poland Business Harbour program partners with accelerators', 'Growing startup ecosystem in Warsaw, Kraków'],
 },
 {
 id: 'program-acceptance',
 title: 'Accelerator Acceptance Decision',
 description: 'Wait for acceptance decision from accelerator',
 estimatedDuration: '2-4 weeks',
 documents: [],
 notes: ['Acceptance letter required for visa application'],
 isConditional: true,
 condition: 'Must be accepted by accelerator',
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the startup visa application',
 estimatedDuration: '2-3 weeks',
 documents: ['Valid passport', 'Business plan', 'Proof of funds (EUR 4,500)', 'Accelerator acceptance letter', 'Criminal background check', 'Health insurance', 'Proof of accommodation', 'Passport photographs'],
 notes: ['All documents must be apostilled', 'Translations to Polish required'],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit startup visa application to Polish authorities',
 estimatedDuration: '1 day',
 documents: ['All gathered documents', 'Application fee payment'],
 notes: ['Can submit at Polish Consulate or in Poland'],
 },
 {
 id: 'processing',
 title: 'Processing Period',
 description: 'Wait for Polish authorities to process your application',
 estimatedDuration: '30-60 days',
 documents: [],
 notes: ['Processing time: typically 30-60 days'],
 },
 {
 id: 'decision',
 title: 'Application Decision',
 description: 'Wait for decision on your startup visa application',
 estimatedDuration: '1 week',
 documents: [],
 notes: ['Decision notification sent by email or post'],
 },
 {
 id: 'receive-visa',
 title: 'Receive Startup Visa',
 description: 'Collect your approved startup visa',
 estimatedDuration: '1 week',
 documents: ['Passport', 'Approval notification'],
 notes: ['Visa valid for 1 year initially', 'Renewable'],
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
 title: 'Travel to Poland',
 description: 'Book travel and relocate to Poland',
 estimatedDuration: '1-2 weeks',
 documents: ['Valid passport', 'Startup visa', 'Proof of accommodation'],
 notes: ['Growing startup ecosystem', 'Low cost of living', 'Large market (38M people)'],
 },
 {
 id: 'register-business',
 title: 'Register Business and at Voivodeship Office',
 description: 'Complete business registration and immigration formalities',
 estimatedDuration: '1-2 weeks',
 documents: ['Startup visa', 'Business registration documents', 'All original documents'],
 notes: ['Register business within 30 days of arrival', 'Register at local Voivodeship Office', 'PR after 5 years, citizenship after 5 years'],
 },
 ],
 },

 'pl_work_permit': {
 programId: 'pl_work_permit',
 countryCode: 'PL',
 programName: 'Work Permit',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer<br/>from Polish Employer]
 job-offer --> check-salary{Salary >= PLN 4,000/month<br/>(EUR 900)?}
 check-salary -->|Yes| gather-documents[Gather Required Documents]
 check-salary -->|No| End1([Not Eligible])
 gather-documents -->submit-application[Submit Application<br/>to Voivodeship Office]
 submit-application -->processing[Processing<br/>30-90 Days]
 processing --> decision{Decision}
 decision -->|Approved| receive-permit[Receive Work Permit]
 decision -->|Rejected| consider-appeal[Consider Appeal]
 receive-permit -->travel-to-poland[Travel to Poland]
 travel-to-poland -->register[Register at<br/>Voivodeship Office]
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
 title: 'Secure Job Offer from Polish Employer',
 description: 'Obtain a binding job offer from a Polish employer',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum PLN 4,000/month = EUR 900)',
 'Employer information',
 ],
 notes: [
 'Very low salary threshold (EUR 900/month)',
 'Most common work visa in Poland',
 'Growing tech sector in Warsaw, Kraków, Wrocław',
 'Lower cost of living than Western Europe',
 'English common in tech companies',
 'PR after 5 years, citizenship after 5 years (with Polish B1)',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for work permit application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 6 months)',
 'Employment contract',
 'Educational qualifications',
 'Criminal record certificate',
 'Health insurance',
 'Proof of accommodation in Poland',
 'Passport photographs',
 ],
 notes: [
 'Documents must be apostilled',
 'Translations to Polish required',
 'Criminal background check must be recent',
 'Health insurance must cover entire stay',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application to Voivodeship Office',
 description: 'Submit work permit application to Polish authorities',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents',
 'Application fee payment (approximately EUR 100)',
 ],
 notes: [
 'Submit at Voivodeship Office in Poland or Polish consulate',
 'Appointment required',
 'Processing time: 30-90 days',
 ],
 },
 {
 id: 'processing',
 title: 'Processing (30-90 Days)',
 description: 'Wait for authorities to process application',
 estimatedDuration: '30-90 days',
 documents: [],
 notes: [
 'Processing time: typically 30-90 days',
 'May request additional information',
 'Track application status online',
 ],
 },
 {
 id: 'receive-permit',
 title: 'Receive Work Permit',
 description: 'Receive approved work permit',
 estimatedDuration: '1 week',
 documents: [
 'Work permit approval',
 ],
 notes: [
 'Permit initially valid for 3 years',
 'Renewable if employment continues',
 'Family members can join',
 'PR eligible after 5 years',
 ],
 },
 {
 id: 'travel-to-poland',
 title: 'Travel to Poland',
 description: 'Travel to Poland with work permit',
 estimatedDuration: '1-3 days',
 documents: [
 'Passport with work permit',
 'Employment contract',
 ],
 notes: [
 'Main airports: Warsaw (WAW), Kraków (KRK)',
 'Register within 30 days of arrival',
 'EU member state',
 ],
 },
 {
 id: 'register',
 title: 'Register at Voivodeship Office',
 description: 'Complete registration and get residence card',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport with work permit',
 'Proof of accommodation',
 'Employment contract',
 ],
 notes: [
 'Register at local Voivodeship Office within 30 days',
 'Get residence card',
 'Get PESEL number (Polish ID number)',
 'Open Polish bank account',
 'Access to Polish healthcare',
 'Growing tech sector',
 'PR after 5 years, citizenship after 5 years (with Polish B1)',
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
 'Can reapply with stronger application',
 'Consider legal consultation',
 'Alternative: Poland EU Blue Card or Business Harbour',
 ],
 },
 ],
 },

 'pl_self_employment': {
 programId: 'pl_self_employment',
 countryCode: 'PL',
 programName: 'Self-Employment Visa',
 totalEstimatedDuration: '2-4 months',
 complexity: 'medium',
 successRate: '75%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) -->plan[Develop Business Plan]
 plan --> funds{EUR 8,000<br/>Investment?}
 funds -->|Yes| docs[Gather Documents]
 funds -->|No| End1([Not Eligible])
 docs -->submit[Submit Application]
 submit -->process[Processing 30-90 Days]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit -->travel[Travel to Poland]
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
 notes: ['EUR 8,000 minimum investment', 'Growing startup ecosystem', 'PR in 5 years'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Business plan', 'Proof of funds', 'Criminal check', 'Health insurance'],
 notes: ['Documents must be apostilled', 'Translations to Polish required'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Voivodeship Office',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee (EUR 100)'],
 notes: ['Processing: 30-90 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Polish authorities review application',
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
 notes: ['Valid for 3 years, renewable'],
 },
 {
 id: 'travel',
 title: 'Travel to Poland',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airports: Warsaw (WAW), Kraków (KRK)'],
 },
 {
 id: 'register',
 title: 'Register Business',
 description: 'Register business and at Voivodeship Office',
 estimatedDuration: '2-4 weeks',
 documents: ['Business registration', 'Proof of address'],
 notes: ['Register within 30 days', 'Get PESEL number', 'PR in 5 years'],
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

 'pl_family_reunification': {
 programId: 'pl_family_reunification',
 countryCode: 'PL',
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
 submit -->process[Processing 30-90 Days]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit -->travel[Travel to Poland]
 travel -->register[Register at Voivodeship]
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
 notes: ['All documents must be apostilled', 'Translations to Polish required'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Voivodeship Office',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee (EUR 100)'],
 notes: ['Processing: 30-90 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Voivodeship Office reviews application',
 estimatedDuration: '30-90 days',
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
 title: 'Travel to Poland',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airports: Warsaw (WAW), Kraków (KRK)'],
 },
 {
 id: 'register',
 title: 'Register at Voivodeship',
 description: 'Register within 30 days',
 estimatedDuration: '1-2 weeks',
 documents: ['Proof of address'],
 notes: ['Register within 30 days', 'Get PESEL number', 'PR in 5 years'],
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

