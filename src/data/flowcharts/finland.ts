/**
 * Finland Immigration Process Flowcharts
 * Defines the step-by-step process for each Finnish visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const finlandFlowcharts: Record<string, FlowchartDefinition> = {
 'fi_specialist': {
 programId: 'fi_specialist',
 countryCode: 'FI',
 programName: 'Residence Permit for Specialists',
 totalEstimatedDuration: '3-4 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer in Finland]
 job-offer --> CheckSalary{Salary >= 3000 EUR/month?}
 CheckSalary -->|Yes| gather-documents[Gather Required Documents]
 CheckSalary -->|No| End1([Not Eligible])
 gather-documents --> submit-application[Submit Application Online via Enter Finland]
 submit-application --> processing[Migri Processing 60-90 Days]
 processing --> Decision{Decision}
 Decision -->|Approved| Permit[Receive Residence Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Permit --> arrival[Travel to Finland]
 arrival --> registration[Register at Migri Office Get Finnish ID]
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
 title: 'Secure Job Offer in Finland',
 description: 'Obtain a binding job offer from a Finnish employer for a specialist position',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract',
 'Job description detailing specialist responsibilities',
 'Salary confirmation (minimum 3000 EUR/month = 36000 EUR/year)',
 'Employer information (business ID, contact details)',
 ],
 notes: [
 'Employer does NOT need to be on any special list',
 'No specific education requirement if you have sufficient professional experience',
 'Popular for tech workers, engineers, and other specialists',
 'Lower salary threshold than EU Blue Card (36000 EUR vs 45924 EUR)',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the residence permit application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 3 months beyond intended stay)',
 'Employment contract',
 'Proof of qualifications (diplomas, certificates, or proof of experience)',
 'Passport-style photograph',
 'Proof of health insurance',
 'Proof of accommodation in Finland (rental agreement or hotel booking)',
 ],
 notes: [
 'All documents must be in Finnish, Swedish, or English',
 'Certified translations required for other languages',
 'Digital copies acceptable for online application',
 'Keep originals for potential verification',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application Online via Enter Finland',
 description: 'Complete and submit your residence permit application through the Enter Finland portal',
 estimatedDuration: '1-2 days',
 documents: [
 'Completed online application form',
 'All supporting documents uploaded',
 'Application fee payment (520 EUR in 2025)',
 ],
 notes: [
 'Use Enter Finland portal: https://enterfinland.fi/',
 'Application fee: 520 EUR for first residence permit (2025)',
 'Pay online via credit card or bank transfer',
 'Save application reference number',
 'You may be asked to visit Finnish embassy/consulate for biometrics',
 ],
 },
 {
 id: 'processing',
 title: 'Migri Processing (60-90 Days)',
 description: 'Finnish Immigration Service (Migri) reviews your application',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: [
 'Processing time: typically 60-90 days',
 'Migri may request additional documents',
 'Check application status online via Enter Finland',
 'Employer may be contacted for verification',
 'No interview required in most cases',
 ],
 },
 {
 id: 'decision',
 title: 'Receive Decision',
 description: 'Get notification of approval or rejection',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Decision letter from Migri',
 'Residence permit card (if approved)',
 ],
 notes: [
 'Decision sent via email and postal mail',
 'If approved: residence permit card sent to Finnish address or embassy',
 'If rejected: appeal possible within 30 days',
 'Permit valid for up to 4 years',
 ],
 },
 {
 id: 'arrival-registration',
 title: 'Travel to Finland and Register',
 description: 'Enter Finland and complete registration with Migri',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with residence permit',
 'Employment contract',
 'Proof of accommodation',
 ],
 notes: [
 'Register at local Migri office within 3 months of arrival',
 'Get Finnish personal identity code (henkilötunnus)',
 'Open Finnish bank account (requires identity code)',
 'Register with local municipality (maistraatti)',
 'Apply for Kela card (social security)',
 'Can work immediately upon arrival',
 ],
 },
 ],
 },

 'fi_eu_blue_card': {
 programId: 'fi_eu_blue_card',
 countryCode: 'FI',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '3-4 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> JobOffer[Secure Highly Skilled Job Offer]
 JobOffer --> CheckSalary{Salary >= 3827 EUR/month?}
 CheckSalary -->|Yes| CheckEducation{Bachelor Degree or 5 Years Experience?}
 CheckSalary -->|No| End1([Not Eligible])
 CheckEducation -->|Yes| GatherDocs[Gather Required Documents]
 CheckEducation -->|No| End2([Not Eligible])
 GatherDocs --> Submit[Submit Application Online via Enter Finland]
 Submit --> Processing[Migri Processing 60-90 Days]
 Processing --> Decision{Decision}
 Decision -->|Approved| BlueCard[Receive EU Blue Card]
 Decision -->|Rejected| Appeal[Consider Appeal]
 BlueCard --> Travel[Travel to Finland]
 Travel --> Register[Register at Migri Office Get Finnish ID]
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
 title: 'Secure Highly Skilled Job Offer',
 description: 'Obtain a binding job offer for a highly skilled position in Finland',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract (minimum 12 months)',
 'Job description for highly skilled position',
 'Salary confirmation (minimum 3827 EUR/month = 45924 EUR/year)',
 'Employer information',
 ],
 notes: [
 'Higher salary threshold than Specialist permit (45924 EUR vs 36000 EUR)',
 'Must be highly skilled occupation (ISCO level 1-3)',
 'Bachelor degree required OR 5 years professional experience',
 'Lower threshold than Sweden/Denmark EU Blue Cards',
 'Can work for any employer after 2 years',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for EU Blue Card application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 3 months)',
 'Employment contract (minimum 12 months)',
 'Bachelor\'s degree or higher (or proof of 5 years experience)',
 'Passport-style photograph',
 'Proof of health insurance',
 'Proof of accommodation in Finland',
 ],
 notes: [
 'Degree must be equivalent to Finnish Bachelor\'s (minimum 3 years)',
 'Certified translations required for non-English/Finnish/Swedish documents',
 'Digital copies acceptable for online application',
 'Keep originals for verification',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application Online via Enter Finland',
 description: 'Complete and submit EU Blue Card application through Enter Finland portal',
 estimatedDuration: '1-2 days',
 documents: [
 'Completed online application form',
 'All supporting documents uploaded',
 'Application fee payment (520 EUR in 2025)',
 ],
 notes: [
 'Use Enter Finland portal: https://enterfinland.fi/',
 'Select "EU Blue Card" as permit type',
 'Application fee: 520 EUR (2025)',
 'Pay online via credit card or bank transfer',
 'May need to visit Finnish embassy/consulate for biometrics',
 ],
 },
 {
 id: 'processing',
 title: 'Migri Processing (60-90 Days)',
 description: 'Finnish Immigration Service reviews your EU Blue Card application',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: [
 'Processing time: typically 60-90 days',
 'Migri may request additional documents or clarifications',
 'Check status online via Enter Finland',
 'Employer may be contacted for verification',
 'Education credentials may be verified',
 ],
 },
 {
 id: 'decision',
 title: 'Receive EU Blue Card Decision',
 description: 'Get notification of approval or rejection',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Decision letter from Migri',
 'EU Blue Card residence permit (if approved)',
 ],
 notes: [
 'Decision sent via email and postal mail',
 'If approved: EU Blue Card sent to Finnish address or embassy',
 'If rejected: appeal possible within 30 days',
 'EU Blue Card valid for up to 4 years',
 'Allows mobility to other EU countries after 18 months',
 ],
 },
 {
 id: 'arrival-registration',
 title: 'Travel to Finland and Register',
 description: 'Enter Finland with EU Blue Card and complete registration',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with EU Blue Card',
 'Employment contract',
 'Proof of accommodation',
 ],
 notes: [
 'Register at local Migri office within 3 months',
 'Get Finnish personal identity code (henkilötunnus)',
 'Open Finnish bank account',
 'Register with local municipality',
 'Apply for Kela card (social security)',
 'Family members can join immediately',
 'Can work for any employer after 2 years',
 'PR eligible after 4 years, citizenship after 5 years',
 ],
 },
 ],
 },
};

