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
 Start([Start Process]) --> job-offer[Secure Job Offer<br/>from Romanian Employer]
 job-offer --> check-salary{"Salary >= EUR 1,600/month<br/>( EUR 19,200/year)?"}
 check-salary -->|Yes| check-education{Higher Education<br/>Degree?}
 check-salary -->|No| End1([Not Eligible])
 check-education -->|Yes| gather-documents[Gather Required Documents]
 check-education -->|No| End2([Not Eligible])
 gather-documents --> submit-application[Submit Application to<br/>Romanian Consulate or in Romania]
 submit-application --> processing[Processing<br/>30-60 Days]
 processing --> decision{Decision}
 decision -->|Approved| receive-blue-card[Receive EU Blue Card<br/>2-Year Permit]
 decision -->|Rejected| consider-appeal[Consider Appeal]
 receive-blue-card --> travel[Travel to Romania]
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
 id: 'check-salary',
 title: 'Verify Salary Requirement',
 description: 'Ensure the job offer meets minimum salary threshold',
 estimatedDuration: '1 day',
 documents: ['Employment contract with salary details'],
 notes: ['Minimum salary: EUR 1,600/month (EUR 19,200/year)'],
 isConditional: true,
 condition: 'Salary must be >= EUR 1,600/month',
 },
 {
 id: 'check-education',
 title: 'Verify Higher Education Requirement',
 description: 'Ensure you have a higher education degree (Bachelor\'s or higher)',
 estimatedDuration: '1-2 weeks',
 documents: ['University degree (Bachelor\'s, Master\'s, or PhD)', 'Diploma translation', 'Diploma apostille'],
 notes: ['Bachelor\'s degree minimum', 'Master\'s or PhD preferred', 'Degree must be recognized in Romania'],
 isConditional: true,
 condition: 'Must have higher education degree',
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the EU Blue Card application',
 estimatedDuration: '2-3 weeks',
 documents: ['Valid passport', 'Employment contract', 'Higher education degree', 'Criminal background check', 'Health insurance', 'Proof of accommodation', 'Passport photographs'],
 notes: ['All documents must be apostilled', 'Translations to Romanian required'],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit your EU Blue Card application to Romanian authorities',
 estimatedDuration: '1 day',
 documents: ['All gathered documents', 'Application fee payment (~EUR 100)', 'Appointment confirmation'],
 notes: ['Can submit at Romanian Consulate in US or in Romania', 'Appointment required'],
 },
 {
 id: 'processing',
 title: 'Processing Period',
 description: 'Wait for Romanian authorities to process your application',
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
 notes: ['EU Blue Card valid for 2 years initially', 'Renewable'],
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
 title: 'Travel to Romania',
 description: 'Book travel and relocate to Romania',
 estimatedDuration: '1-2 weeks',
 documents: ['Valid passport', 'EU Blue Card', 'Proof of accommodation'],
 notes: ['Bucharest is major tech hub', 'Fastest internet in EU!', 'Very low cost of living'],
 },
 {
 id: 'register',
 title: 'Register at Immigration Office',
 description: 'Complete registration formalities in Romania',
 estimatedDuration: '1 day',
 documents: ['EU Blue Card', 'All original documents', 'Proof of accommodation'],
 notes: ['Register at Immigration Office within 3 days', 'PR after 5 years, citizenship after 8 years'],
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
 Start([Start Process]) --> develop-business-idea[Develop Innovative<br/>Business Idea]
 develop-business-idea --> verify-funds[Verify Minimum Funds<br/> EUR 4,000 (RON 20,000)]
 verify-funds --> check-funds{Funds Sufficient?}
 check-funds -->|Yes| apply-to-program[Apply to Romanian<br/>Startup Program]
 check-funds -->|No| End1([Not Eligible])
 apply-to-program --> program-acceptance{Accepted by<br/>Program?}
 program-acceptance -->|Yes| gather-documents[Gather Required Documents]
 program-acceptance -->|No| End2([Not Eligible])
 gather-documents --> submit-application[Submit Application to<br/>Romanian Consulate or in Romania]
 submit-application --> processing[Processing<br/>30-60 Days]
 processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive Startup Visa<br/>1-Year Permit]
 decision -->|Rejected| consider-appeal[Consider Appeal]
 receive-visa --> travel[Travel to Romania]
 travel --> register-business[Register Business and<br/>at Immigration Office]
 register-business --> Success([Process Complete])
 consider-appeal --> End3([Process Ended])
 
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
 id: 'check-funds',
 title: 'Check Funds Sufficiency',
 description: 'Verify you have minimum EUR 4,000 (RON 20,000)',
 estimatedDuration: '1 day',
 documents: ['Bank statements'],
 notes: ['Minimum EUR 4,000 required - LOWEST in EU!'],
 isConditional: true,
 condition: 'Funds must be >= EUR 4,000',
 },
 {
 id: 'apply-to-program',
 title: 'Apply to Romanian Startup Program',
 description: 'Get accepted by a Romanian startup program or incubator',
 estimatedDuration: '2-4 weeks',
 documents: ['Business plan', 'Pitch deck', 'Team information', 'Program application'],
 notes: ['Bucharest startup ecosystem growing', 'Very low operating costs', 'Fastest internet in EU!'],
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
 description: 'Collect all necessary documents for the startup visa application',
 estimatedDuration: '2-3 weeks',
 documents: ['Valid passport', 'Business plan', 'Proof of funds (EUR 4,000)', 'Program acceptance letter', 'Criminal background check', 'Health insurance', 'Proof of accommodation', 'Passport photographs'],
 notes: ['All documents must be apostilled', 'Can bring co-founders'],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit startup visa application to Romanian authorities',
 estimatedDuration: '1 day',
 documents: ['All gathered documents', 'Application fee payment'],
 notes: ['Can submit at Romanian Consulate or in Romania'],
 },
 {
 id: 'processing',
 title: 'Processing Period',
 description: 'Wait for Romanian authorities to process your application',
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
 title: 'Travel to Romania',
 description: 'Book travel and relocate to Romania',
 estimatedDuration: '1-2 weeks',
 documents: ['Valid passport', 'Startup visa', 'Proof of accommodation'],
 notes: ['Bucharest startup ecosystem growing', 'Fastest internet in EU!', 'Very low cost of living'],
 },
 {
 id: 'register-business',
 title: 'Register Business and at Immigration Office',
 description: 'Complete business registration and immigration formalities',
 estimatedDuration: '1-2 weeks',
 documents: ['Startup visa', 'Business registration documents', 'All original documents'],
 notes: ['Register business within 30 days of arrival', '16% flat tax', 'PR after 5 years, citizenship after 8 years'],
 },
 ],
 },

 'ro_work_permit': {
 programId: 'ro_work_permit',
 countryCode: 'RO',
 programName: 'Work Permit',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer<br/>from Romanian Employer]
 job-offer --> check-salary{"Salary >= RON 4,000/month<br/>(EUR 800)?"}
 check-salary -->|Yes| gather-documents[Gather Required Documents]
 check-salary -->|No| End1([Not Eligible])
 gather-documents -->submit-application[Submit Application]
 submit-application -->processing[Processing<br/>30-90 Days]
 processing --> decision{Decision}
 decision -->|Approved| receive-permit[Receive Work Permit]
 decision -->|Rejected| consider-appeal[Consider Appeal]
 receive-permit -->travel-to-romania[Travel to Romania]
 travel-to-romania -->register[Register at<br/>Immigration Office]
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
 title: 'Secure Job Offer from Romanian Employer',
 description: 'Obtain a binding job offer from a Romanian employer',
 estimatedDuration: '1-2 months',
 documents: ['Signed employment contract', 'Job description', 'Salary confirmation (minimum RON 4,000/month = EUR 800)', 'Employer information'],
 notes: ['Very low salary threshold (EUR 800/month)', 'Bucharest is major tech hub', 'Fastest internet in EU!', 'Very low cost of living', 'PR after 5 years, citizenship after 8 years'],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for work permit application',
 estimatedDuration: '2-3 weeks',
 documents: ['Valid passport', 'Employment contract', 'Educational qualifications', 'Criminal record certificate', 'Health insurance', 'Proof of accommodation', 'Passport photographs'],
 notes: ['Documents must be apostilled', 'Translations to Romanian required', 'Criminal background check must be recent'],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit work permit application to Romanian authorities',
 estimatedDuration: '1 week',
 documents: ['All gathered documents', 'Application fee payment (approximately EUR 100)'],
 notes: ['Submit at Romanian consulate or in Romania', 'Appointment required', 'Processing time: 30-90 days'],
 },
 {
 id: 'processing',
 title: 'Processing (30-90 Days)',
 description: 'Wait for authorities to process application',
 estimatedDuration: '30-90 days',
 documents: [],
 notes: ['Processing time: typically 30-90 days', 'May request additional information'],
 },
 {
 id: 'receive-permit',
 title: 'Receive Work Permit',
 description: 'Receive approved work permit',
 estimatedDuration: '1 week',
 documents: ['Work permit approval'],
 notes: ['Permit initially valid for 1 year', 'Renewable if employment continues', 'Family members can join'],
 },
 {
 id: 'travel-to-romania',
 title: 'Travel to Romania',
 description: 'Travel to Romania with work permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with work permit', 'Employment contract'],
 notes: ['Main airport: Bucharest (OTP)', 'Register within 3 days of arrival'],
 },
 {
 id: 'register',
 title: 'Register at Immigration Office',
 description: 'Complete registration and get residence card',
 estimatedDuration: '2-4 weeks',
 documents: ['Passport with work permit', 'Proof of accommodation', 'Employment contract'],
 notes: ['Register at Immigration Office within 3 days', 'Get residence card', 'Open Romanian bank account', 'Bucharest is major tech hub', 'Fastest internet in EU!', 'Very low cost of living', '16% flat tax', 'PR after 5 years, citizenship after 8 years'],
 },
 {
 id: 'consider-appeal',
 title: 'Consider Appeal',
 description: 'If rejected, evaluate appeal options',
 estimatedDuration: '1-2 months',
 documents: ['Rejection decision', 'Appeal form', 'Additional evidence'],
 notes: ['Review rejection reasons', 'Can reapply with stronger application', 'Alternative: Romania EU Blue Card or Startup Visa'],
 },
 ],
 },

 'ro_self_employment': {
 programId: 'ro_self_employment',
 countryCode: 'RO',
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
 permit -->travel[Travel to Romania]
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
 notes: ['EUR 7,000 minimum investment', 'Bucharest tech hub', 'Fastest internet in EU', 'PR in 5 years'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Business plan', 'Proof of funds', 'Criminal check', 'Health insurance'],
 notes: ['Documents must be apostilled', 'Translations to Romanian required'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Romanian authorities',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee (EUR 100)'],
 notes: ['Processing: 30-90 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Romanian Immigration reviews application',
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
 notes: ['Valid for 1 year, renewable'],
 },
 {
 id: 'travel',
 title: 'Travel to Romania',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Bucharest (OTP)'],
 },
 {
 id: 'register',
 title: 'Register Business',
 description: 'Register business and at Immigration Office',
 estimatedDuration: '2-4 weeks',
 documents: ['Business registration', 'Proof of address'],
 notes: ['Register within 3 days', 'Bucharest tech hub', 'Fastest internet in EU', 'PR in 5 years'],
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

 'ro_family_reunification': {
 programId: 'ro_family_reunification',
 countryCode: 'RO',
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
 permit -->travel[Travel to Romania]
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
 notes: ['All documents must be apostilled', 'Translations to Romanian required'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Romanian Immigration Office',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee (EUR 100)'],
 notes: ['Processing: 30-60 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Immigration Office reviews application',
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
 title: 'Travel to Romania',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Bucharest (OTP)'],
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

