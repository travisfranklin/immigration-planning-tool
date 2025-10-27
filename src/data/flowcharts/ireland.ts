/**
 * Ireland Immigration Process Flowcharts
 * Defines the step-by-step process for each Irish visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const irelandFlowcharts: Record<string, FlowchartDefinition> = {
 'ie_critical_skills': {
 programId: 'ie_critical_skills',
 countryCode: 'IE',
 programName: 'Critical Skills Employment Permit',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer]
 job-offer --> Salary{Salary >= EUR 44,000?}
 Salary -->|Yes| CriticalSkills{Critical Skills List?}
 Salary -->|No| End1([Not Eligible])
 CriticalSkills -->|Yes| gather-documents[Gather Required Documents]
 CriticalSkills -->|No| End1
 gather-documents -->employer-application[Employer Applies for Permit]
 employer-application -->processing[Wait for Processing<br/>8 weeks]
 processing --> Decision{Decision}
 Decision -->|Approved| Permit[Receive Employment Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Permit --> entry-visa[Apply for Entry Visa]
 visa-application -->arrival[Travel to Ireland]
 arrival --> registration[Register with GNIB/IRP]
 registration --> Success([Process Complete])
 Appeal --> End2([Process Ended])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style Permit fill:#e1e5ff
`,
 steps: [
 {
 id: 'job-offer',
 title: 'Secure Job Offer',
 description: 'Obtain job offer from Irish employer in critical skills occupation',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 44,000/year)',
 ],
 notes: [
 'Job must be on Critical Skills Occupations List',
 'English-speaking country - major advantage!',
 'Strong tech sector (Google, Facebook, Apple)',
 'Contract must be for at least 2 years',
 ],
 },
 {
 id: 'critical-skills-check',
 title: 'Verify Critical Skills Eligibility',
 description: 'Confirm occupation is on Critical Skills list',
 estimatedDuration: '1 week',
 documents: [
 'Job description',
 'Critical Skills Occupations List',
 ],
 notes: [
 'ICT: Software developers, data scientists, cybersecurity',
 'Engineering: All disciplines',
 'Healthcare: Doctors, nurses, specialists',
 'Finance: Financial analysts, accountants',
 'Science: Research scientists, lab technicians',
 'List updated regularly by government',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (6+ months validity)',
 'University degree',
 'Employment contract',
 'Job description',
 'Proof of qualifications',
 'CV/Resume',
 'Passport photos',
 ],
 notes: [
 'No language requirement (English is official language)',
 'Degree must be relevant to job',
 'No apostille required for most documents',
 'Simpler process than most EU countries',
 ],
 },
 {
 id: 'employer-application',
 title: 'Employer Applies for Permit',
 description: 'Employer submits application to Department of Enterprise',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents',
 'Employer application form',
 'Application fee ( EUR 1,000)',
 ],
 notes: [
 'Employer applies online',
 'No labor market test required for Critical Skills',
 'Faster processing than General Employment Permit',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Department reviews application',
 estimatedDuration: '8 weeks',
 documents: [],
 notes: [
 'Processing typically 8 weeks',
 'Can track status online',
 'May be contacted for additional information',
 ],
 },
 {
 id: 'entry-visa',
 title: 'Apply for Entry Visa',
 description: 'Apply for visa to enter Ireland (if required)',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Approved employment permit',
 'Passport',
 'Application form',
 ],
 notes: [
 'US citizens do not need entry visa',
 'Can enter Ireland visa-free',
 'Must have employment permit before arrival',
 ],
 },
 {
 id: 'arrival',
 title: 'Arrival and Registration',
 description: 'Travel to Ireland and register',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport',
 'Employment permit',
 'Employment contract',
 'Proof of accommodation',
 ],
 notes: [
 'Register with GNIB/IRP within 90 days',
 'Receive Irish Residence Permit (IRP card)',
 'Can apply for Stamp 4 (PR) after 2 years - fastest in EU!',
 'Can apply for citizenship after 5 years',
 ],
 },
 ],
 },
 'ie_step': {
 programId: 'ie_step',
 countryCode: 'IE',
 programName: 'STEP (Startup Entrepreneur Programme)',
 totalEstimatedDuration: '3-6 months',
 complexity: 'medium',
 successRate: '70%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> BusinessPlan[Develop Business Plan]
 BusinessPlan --> Funding{ EUR 50,000 Funding?}
 Funding -->|From Approved Source| Approval[Get Approved Source Validation]
 Funding -->|No| End1([Not Eligible])
 Approval --> GatherDocs[Gather Required Documents]
 GatherDocs --> Submit[Submit Application]
 Submit --> Evaluation[Business Plan Evaluation]
 Evaluation --> Interview[Attend Interview]
 Interview --> Decision{Decision}
 Decision -->|Approved| Permit[Receive STEP Approval]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Permit --> Travel[Travel to Ireland]
 Travel --> Register[Register with GNIB/IRP]
 Register --> LaunchBusiness[Launch Business]
 LaunchBusiness --> Success([Process Complete])
 Appeal --> End2([Process Ended])
 
 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style Permit fill:#e1e5ff
`,
 steps: [
 {
 id: 'business-plan',
 title: 'Develop Business Plan',
 description: 'Create comprehensive business plan for innovative startup',
 estimatedDuration: '4-8 weeks',
 documents: [
 'Detailed business plan',
 'Market analysis',
 'Financial projections',
 'Innovation description',
 ],
 notes: [
 'Must be innovative, high-potential startup',
 'Focus on scalability and job creation',
 'Technology, life sciences, and green tech favored',
 'Must demonstrate potential for international growth',
 ],
 },
 {
 id: 'funding-source',
 title: 'Secure Approved Funding',
 description: 'Obtain EUR 50,000 from approved source',
 estimatedDuration: '2-4 months',
 documents: [
 'Proof of EUR 50,000 funding',
 'Letter from approved source',
 'Investment agreement',
 ],
 notes: [
 'Must be from approved source (not personal funds)',
 'Approved sources: Enterprise Ireland, County Enterprise Boards',
 'Business angels, venture capital firms',
 'Competitive Feasibility Fund',
 'Cannot use personal savings',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport',
 'Business plan',
 'Proof of funding from approved source',
 'Educational qualifications',
 'CV/Resume',
 'Proof of business experience',
 ],
 notes: [
 'Must demonstrate entrepreneurial experience',
 'Educational background in relevant field helpful',
 'Previous startup experience valued',
 ],
 },
 {
 id: 'application-submission',
 title: 'Submit Application',
 description: 'Submit STEP application to Enterprise Ireland',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents',
 'Application form',
 'Application fee ( EUR 350)',
 ],
 notes: [
 'Apply through Enterprise Ireland',
 'Applications reviewed quarterly',
 'Competitive selection process',
 ],
 },
 {
 id: 'evaluation-interview',
 title: 'Evaluation and Interview',
 description: 'Business plan evaluation and interview with panel',
 estimatedDuration: '4-8 weeks',
 documents: [
 'Presentation materials',
 'Supporting documents',
 ],
 notes: [
 'Panel evaluates innovation and potential',
 'Must demonstrate job creation potential',
 'Interview may be in-person or virtual',
 'Prepare to defend business model',
 ],
 },
 {
 id: 'arrival',
 title: 'Arrival and Business Launch',
 description: 'Travel to Ireland and launch business',
 estimatedDuration: '4-8 weeks',
 documents: [
 'Passport',
 'STEP approval letter',
 'Business registration documents',
 ],
 notes: [
 'Register with GNIB/IRP',
 'Register business with Companies Registration Office',
 'Initial permit for 2 years',
 'Must create jobs and meet milestones',
 'Can apply for PR after 5 years',
 ],
 },
 ],
 },

 'ie_general_employment': {
 programId: 'ie_general_employment',
 countryCode: 'IE',
 programName: 'General Employment Permit',
 totalEstimatedDuration: '3-4 months',
 complexity: 'medium',
 successRate: '75%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> job-offer[Secure Job Offer<br/>from Irish Employer]
 job-offer --> check-salary{Salary >= EUR 30,000/year?}
 check-salary -->|Yes| labor-market-test[Employer Conducts<br/>Labor Market Test]
 check-salary -->|No| End1([Not Eligible])
 labor-market-test --> test-result{No Suitable<br/>EEA Worker?}
 test-result -->|Yes| gather-documents[Gather Required Documents]
 test-result -->|No| End2([Not Eligible])
 gather-documents --> employer-application[Employer Applies<br/>for Permit]
 employer-application --> processing[Processing<br/>8-12 Weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-permit[Receive Employment Permit]
 decision -->|Rejected| consider-appeal[Consider Appeal]
 receive-permit --> entry-visa[Apply for Entry Visa]
 entry-visa --> travel-to-ireland[Travel to Ireland]
 travel-to-ireland --> register-gnib[Register with GNIB/IRP]
 register-gnib --> Success([Process Complete])
 consider-appeal --> End3([Process Ended])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style End3 fill:#ffe1e1
 style receive-permit fill:#e1e5ff
`,
 steps: [
 {
 id: 'job-offer',
 title: 'Secure Job Offer from Irish Employer',
 description: 'Obtain a binding job offer from an Irish employer',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 30,000/year)',
 'Employer information',
 ],
 notes: [
 'English-speaking country - major advantage!',
 'Minimum EUR 30,000/year salary',
 'Popular sectors: IT, healthcare, finance, pharma',
 'Dublin and Cork are major tech hubs',
 'Labor market test required (employer must prove no suitable EEA worker)',
 'Path to PR after 5 years',
 ],
 },
 {
 id: 'labor-market-test',
 title: 'Employer Conducts Labor Market Test',
 description: 'Employer must advertise position and prove no suitable EEA worker available',
 estimatedDuration: '4-6 weeks',
 documents: [
 'Job advertisement on EURES portal',
 'Job advertisement in Irish media',
 'Evidence of advertising (28 days minimum)',
 'Summary of applications received',
 'Reasons for rejecting EEA candidates',
 ],
 notes: [
 'Employer must advertise for minimum 28 days',
 'Must advertise on EURES (EU job portal)',
 'Must advertise in Irish newspapers or job sites',
 'Must demonstrate no suitable EEA worker available',
 'This is the key requirement for General Employment Permit',
 'Critical Skills permit does NOT require labor market test',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for employment permit application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport',
 'Employment contract',
 'Educational qualifications',
 'CV/resume',
 'Labor market test evidence',
 'Employer registration details',
 ],
 notes: [
 'Documents must be in English',
 'Educational qualifications helpful',
 'Employer must be registered in Ireland',
 'Employer applies on your behalf',
 ],
 },
 {
 id: 'employer-application',
 title: 'Employer Applies for Permit',
 description: 'Employer submits employment permit application to Department of Enterprise',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents',
 'Application fee payment (EUR 1,000)',
 'Labor market test evidence',
 ],
 notes: [
 'Employer submits application online',
 'Application fee: EUR 1,000 (paid by employer)',
 'Processing time: 8-12 weeks',
 'Employer is responsible for application',
 ],
 },
 {
 id: 'processing',
 title: 'Processing (8-12 Weeks)',
 description: 'Wait for Department of Enterprise to process application',
 estimatedDuration: '8-12 weeks',
 documents: [],
 notes: [
 'Processing time: typically 8-12 weeks',
 'May request additional information',
 'Track application status online',
 'Labor market test is key factor',
 ],
 },
 {
 id: 'receive-permit',
 title: 'Receive Employment Permit',
 description: 'Receive approved employment permit',
 estimatedDuration: '1 week',
 documents: [
 'Employment permit approval',
 ],
 notes: [
 'Permit initially valid for 2 years',
 'Renewable if employment continues',
 'Family members can join',
 'PR eligible after 5 years',
 'English-speaking country!',
 ],
 },
 {
 id: 'entry-visa',
 title: 'Apply for Entry Visa',
 description: 'Apply for entry visa at Irish embassy/consulate',
 estimatedDuration: '4-8 weeks',
 documents: [
 'Employment permit',
 'Passport',
 'Visa application form',
 'Passport photographs',
 ],
 notes: [
 'Apply at Irish embassy in your country',
 'Visa processing: 4-8 weeks',
 'Some nationalities visa-exempt',
 ],
 },
 {
 id: 'travel-to-ireland',
 title: 'Travel to Ireland',
 description: 'Travel to Ireland with entry visa',
 estimatedDuration: '1-3 days',
 documents: [
 'Passport with visa',
 'Employment permit',
 'Employment contract',
 ],
 notes: [
 'Main airport: Dublin Airport (DUB)',
 'English-speaking country',
 'EU member state',
 ],
 },
 {
 id: 'register-gnib',
 title: 'Register with GNIB/IRP',
 description: 'Register with immigration authorities and get IRP card',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport',
 'Employment permit',
 'Proof of address',
 ],
 notes: [
 'Register within 90 days of arrival',
 'Get Irish Residence Permit (IRP) card',
 'Open Irish bank account',
 'Get PPS number (tax number)',
 'Access to Irish healthcare',
 'PR after 5 years',
 'English-speaking country - easy integration!',
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
 'Common issue: labor market test not satisfied',
 'Can reapply with stronger evidence',
 'Consider Critical Skills permit if eligible',
 'Legal consultation recommended',
 ],
 },
 ],
 },
};

