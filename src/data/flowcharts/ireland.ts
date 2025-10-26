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
 Start([Start Process]) --> JobOffer[Secure Job Offer]
 JobOffer --> Salary{Salary >= EUR 44,000?}
 Salary -->|Yes| CriticalSkills{Critical Skills List?}
 Salary -->|No| End1([Not Eligible])
 CriticalSkills -->|Yes| GatherDocs[Gather Required Documents]
 CriticalSkills -->|No| End1
 GatherDocs --> EmployerApp[Employer Applies for Permit]
 EmployerApp --> Wait[Wait for Processing<br/>8 weeks]
 Wait --> Decision{Decision}
 Decision -->|Approved| Permit[Receive Employment Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Permit --> Visa[Apply for Entry Visa]
 Visa --> Travel[Travel to Ireland]
 Travel --> Register[Register with GNIB/IRP]
 Register --> Success([Process Complete])
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
};

