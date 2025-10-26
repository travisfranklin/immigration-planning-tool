/**
 * Luxembourg Immigration Process Flowcharts
 * Defines the step-by-step process for each Luxembourg visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const luxembourgFlowcharts: Record<string, FlowchartDefinition> = {
 'lu_eu_blue_card': {
 programId: 'lu_eu_blue_card',
 countryCode: 'LU',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer]
 job-offer --> Salary{Salary >= EUR 63,408?}
 Salary -->|Yes| gather-documents[Gather Required Documents]
 Salary -->|No| End1([Not Eligible])
 gather-documents --> work-authorization[Apply for Work Authorization]
 work-authorization --> WaitAuth[Wait for Authorization<br/>3-4 weeks]
 WaitAuth --> AuthDecision{Authorization Approved?}
 AuthDecision -->|Yes| visa-application[Apply for Visa]
 AuthDecision -->|No| End2([Application Denied])
 visa-application --> WaitVisa[Wait for Visa<br/>4-6 weeks]
 WaitVisa --> VisaDecision{Visa Approved?}
 VisaDecision -->|Approved| Visa[Receive Blue Card]
 VisaDecision -->|Rejected| Appeal[Consider Appeal]
 Visa --> arrival[Travel to Luxembourg]
 arrival --> registration[Register at Commune]
 registration --> Success([Process Complete])
 Appeal --> End2

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style Visa fill:#e1e5ff
`,
 steps: [
 {
 id: 'job-offer',
 title: 'Secure Job Offer',
 description: 'Obtain binding job offer from Luxembourg employer',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 63,408/year)',
 'Company registration documents',
 ],
 notes: [
 'Highest EU Blue Card salary threshold in EU',
 'Strong financial services sector',
 'Employer must be registered in Luxembourg',
 'Contract must be for at least 12 months',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Valid passport (6+ months validity)',
 'University degree (apostilled)',
 'Employment contract',
 'Proof of health insurance',
 'Criminal background check',
 'Medical certificate',
 'Passport photos (biometric)',
 'CV/Resume',
 ],
 notes: [
 'Documents must be in French, German, or Luxembourgish',
 'Certified translations required',
 'Degree must be recognized as equivalent',
 'All documents must be recent (within 6 months)',
 ],
 },
 {
 id: 'work-authorization',
 title: 'Apply for Work Authorization',
 description: 'Employer applies for work authorization (autorisation de travail)',
 estimatedDuration: '3-4 weeks',
 documents: [
 'All gathered documents',
 'Employer application form',
 'Proof of employer registration',
 'Business license',
 ],
 notes: [
 'Employer submits to Ministry of Foreign and European Affairs',
 'Authorization must be approved before visa application',
 'Processing typically takes 3-4 weeks',
 ],
 },
 {
 id: 'visa-application',
 title: 'Apply for Visa',
 description: 'Apply for long-stay visa (Type D)',
 estimatedDuration: '4-6 weeks',
 documents: [
 'Approved work authorization',
 'Passport',
 'Application form',
 'Photos',
 'Proof of accommodation in Luxembourg',
 'Application fee ( EUR 80)',
 ],
 notes: [
 'Apply at Luxembourg embassy/consulate',
 'Book appointment in advance',
 'Bring original documents and copies',
 'May require interview',
 ],
 },
 {
 id: 'arrival',
 title: 'Arrival and Registration',
 description: 'Travel to Luxembourg and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport with visa',
 'Work authorization',
 'Employment contract',
 'Proof of accommodation',
 'Health insurance card',
 ],
 notes: [
 'Register at local commune within 8 days',
 'Receive residence permit card',
 'Apply for social security number',
 'Open bank account',
 ],
 },
 ],
 },
 'lu_highly_qualified': {
 programId: 'lu_highly_qualified',
 countryCode: 'LU',
 programName: 'Highly Qualified Worker Permit',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '80%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> JobOffer[Secure Job Offer]
 JobOffer --> Salary{Salary >= EUR 55,000?}
 Salary -->|Yes| Qualifications{Highly Qualified?}
 Salary -->|No| End1([Not Eligible])
 Qualifications -->|Yes| GatherDocs[Gather Required Documents]
 Qualifications -->|No| End1
 GatherDocs --> WorkAuth[Apply for Work Authorization]
 WorkAuth --> Wait[Wait for Processing<br/>4-6 weeks]
 Wait --> Decision{Decision}
 Decision -->|Approved| Visa[Receive Work Permit & Visa]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Visa --> Travel[Travel to Luxembourg]
 Travel --> Register[Register at Commune]
 Register --> Success([Process Complete])
 Appeal --> End2([Process Ended])
 
 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style Visa fill:#e1e5ff
`,
 steps: [
 {
 id: 'job-offer',
 title: 'Secure Job Offer',
 description: 'Obtain job offer from Luxembourg employer',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 55,000/year)',
 ],
 notes: [
 'Lower salary threshold than EU Blue Card',
 'Must demonstrate high qualifications',
 'Employer must show need for foreign worker',
 ],
 },
 {
 id: 'qualifications-assessment',
 title: 'Assess Qualifications',
 description: 'Verify you meet highly qualified criteria',
 estimatedDuration: '1 week',
 documents: [
 'University degree',
 'Professional certifications',
 'Work experience documentation',
 ],
 notes: [
 'Must have advanced degree or equivalent experience',
 'Specialized skills in demand sectors',
 'Finance, IT, engineering highly valued',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect necessary documentation',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Valid passport',
 'University degree (apostilled)',
 'Employment contract',
 'Proof of qualifications',
 'Criminal background check',
 'Medical certificate',
 'Proof of health insurance',
 ],
 notes: [
 'All documents in French, German, or Luxembourgish',
 'Certified translations required',
 'Degree recognition may be needed',
 ],
 },
 {
 id: 'work-authorization',
 title: 'Apply for Work Authorization',
 description: 'Employer submits application',
 estimatedDuration: '4-6 weeks',
 documents: [
 'All gathered documents',
 'Employer application',
 'Proof of qualifications',
 ],
 notes: [
 'Employer applies to Ministry',
 'Must demonstrate highly qualified status',
 'Processing takes 4-6 weeks',
 ],
 },
 {
 id: 'arrival',
 title: 'Arrival and Registration',
 description: 'Travel to Luxembourg and register',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport with visa',
 'Work authorization',
 'Employment contract',
 ],
 notes: [
 'Register at commune within 8 days',
 'Receive residence permit',
 'Can apply for PR after 5 years',
 ],
 },
 ],
 },
};

