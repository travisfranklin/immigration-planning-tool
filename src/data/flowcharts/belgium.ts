/**
 * Belgium Immigration Process Flowcharts
 * Defines the step-by-step process for each Belgian visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const belgiumFlowcharts: Record<string, FlowchartDefinition> = {
 'be_eu_blue_card': {
 programId: 'be_eu_blue_card',
 countryCode: 'BE',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '80%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->determine-region[Determine Region]
 determine-region --> job-offer[Secure Job Offer]
 job-offer --> Salary{Salary Threshold Met?}
 Salary -->|Brussels: EUR 66,377| gather-documents[Gather Required Documents]
 Salary -->|Flanders: EUR 61,011| gather-documents
 Salary -->|Wallonia: EUR 56,112| gather-documents
 Salary -->|No| End1([Not Eligible])
 gather-documents --> work-permit[Apply for Work Permit]
 work-permit --> WaitPermit[Wait for Permit<br/>4-6 weeks]
 WaitPermit --> PermitDecision{Permit Approved?}
 PermitDecision -->|Yes| visa-application[Apply for Visa]
 PermitDecision -->|No| End2([Application Denied])
 visa-application --> WaitVisa[Wait for Visa<br/>4-6 weeks]
 WaitVisa --> VisaDecision{Visa Approved?}
 VisaDecision -->|Approved| Visa[Receive Blue Card]
 VisaDecision -->|Rejected| Appeal[Consider Appeal]
 Visa --> arrival[Travel to Belgium]
 arrival --> Register[Register at Commune]
 Register --> Success([Process Complete])
 Appeal --> End2

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style Visa fill:#e1e5ff
`,
 steps: [
 {
 id: 'determine-region',
 title: 'Determine Region',
 description: 'Identify which Belgian region you will work in',
 estimatedDuration: '1 week',
 documents: [
 'Job offer letter with work location',
 ],
 notes: [
 'Belgium has 3 regions with different salary thresholds',
 'Brussels: EUR 66,377/year',
 'Flanders: EUR 61,011/year',
 'Wallonia: EUR 56,112/year',
 'Salary threshold determines eligibility',
 ],
 },
 {
 id: 'job-offer',
 title: 'Secure Job Offer',
 description: 'Obtain binding job offer from Belgian employer',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (region-specific)',
 'Company registration documents',
 ],
 notes: [
 'Employer must be registered in Belgium',
 'Contract must be for at least 12 months',
 'Salary must meet regional threshold',
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
 'Passport photos',
 ],
 notes: [
 'Documents must be in Dutch, French, or German',
 'Certified translations required',
 'Degree must be recognized as equivalent',
 ],
 },
 {
 id: 'work-permit',
 title: 'Apply for Work Permit',
 description: 'Employer applies for work permit (Permis de Travail)',
 estimatedDuration: '4-6 weeks',
 documents: [
 'All gathered documents',
 'Employer application form',
 'Proof of employer registration',
 ],
 notes: [
 'Employer submits application to regional authority',
 'Brussels: Brussels Economy and Employment',
 'Flanders: VDAB',
 'Wallonia: Forem',
 'Work permit must be approved before visa application',
 ],
 },
 {
 id: 'visa-application',
 title: 'Apply for Visa',
 description: 'Apply for long-stay visa (Type D)',
 estimatedDuration: '4-6 weeks',
 documents: [
 'Approved work permit',
 'Passport',
 'Application form',
 'Photos',
 'Proof of accommodation',
 'Application fee ( EUR 180-220)',
 ],
 notes: [
 'Apply at Belgian embassy/consulate in home country',
 'Book appointment in advance',
 'Bring original documents',
 ],
 },
 {
 id: 'arrival',
 title: 'Arrival and Registration',
 description: 'Travel to Belgium and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport with visa',
 'Work permit',
 'Employment contract',
 'Proof of accommodation',
 ],
 notes: [
 'Register at local commune within 8 days',
 'Receive residence permit card',
 'Apply for Belgian ID card',
 ],
 },
 ],
 },
 'be_highly_skilled': {
 programId: 'be_highly_skilled',
 countryCode: 'BE',
 programName: 'Highly Skilled Worker Permit',
 totalEstimatedDuration: '2-4 months',
 complexity: 'medium',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer]
 job-offer --> Salary{Salary >= EUR 51,613?}
 Salary -->|Yes| gather-documents[Gather Required Documents]
 Salary -->|No| End1([Not Eligible])
 gather-documents --> fast-track-application[Fast-Track Application]
 fast-track-application --> Wait[Wait for Processing<br/>4 weeks]
 Wait --> Decision{Decision}
 Decision -->|Approved| Visa[Receive Work Permit & Visa]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Visa --> arrival[Travel to Belgium]
 arrival --> Register[Register at Commune]
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
 description: 'Obtain job offer from Belgian employer',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 51,613/year)',
 ],
 notes: [
 'Lower salary threshold than EU Blue Card',
 'Faster processing time',
 'Employer must demonstrate high-skilled position',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect necessary documentation',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport',
 'University degree (apostilled)',
 'Employment contract',
 'Proof of qualifications',
 'Criminal background check',
 'Medical certificate',
 ],
 notes: [
 'Simplified documentation compared to standard work permit',
 'Fast-track processing available',
 'Degree recognition may be required',
 ],
 },
 {
 id: 'fast-track-application',
 title: 'Submit Fast-Track Application',
 description: 'Employer submits combined work permit and visa application',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents',
 'Employer application',
 'Application fee',
 ],
 notes: [
 'Single application for both work permit and visa',
 'Faster than standard EU Blue Card process',
 'Employer submits on your behalf',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Application review and decision',
 estimatedDuration: '4 weeks',
 documents: [],
 notes: [
 'Faster processing than standard permits',
 'Background checks conducted',
 'Employer may be contacted',
 ],
 },
 {
 id: 'arrival',
 title: 'Arrival and Registration',
 description: 'Travel to Belgium and register',
 estimatedDuration: '2 weeks',
 documents: [
 'Passport with visa',
 'Work permit',
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

