/**
 * Spain Immigration Process Flowcharts
 * Defines the step-by-step process for each Spanish visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const spainFlowcharts: Record<string, FlowchartDefinition> = {
 'golden-visa': {
 programId: 'golden-visa',
 countryCode: 'ES',
 programName: 'Golden Visa (Investor Visa)',
 totalEstimatedDuration: '2-4 months',
 complexity: 'medium',
 successRate: '95%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> Investment{Investment Type?}
 Investment -->|Real Estate| Property[Purchase Property EUR 500k+]
 Investment -->|Business| Business[Invest in Business EUR 1M+]
 Investment -->|Bonds| Bonds[Buy Government Bonds EUR 2M+]
 Property --> NIE[Obtain NIE Number]
 Business --> NIE
 Bonds --> NIE
 NIE --> GatherDocs[Gather Required Documents]
 GatherDocs --> Submit[Submit Application]
 Submit --> Wait[Wait for Processing<br/>4-8 weeks]
 Wait --> Decision{Decision}
 Decision -->|Approved| Visa[Receive Golden Visa]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Visa --> Travel[Travel to Spain]
 Travel --> Register[Register at Police Station]
 Register --> Success([Process Complete])
 Appeal --> End1([Process Ended])
 
 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style Visa fill:#e1e5ff
`,
 steps: [
 {
 id: 'investment-type',
 title: 'Choose Investment Type',
 description: 'Determine which investment option you will pursue',
 estimatedDuration: '1 week',
 documents: [
 'Financial statements',
 'Investment plan',
 ],
 notes: [
 'Option 1: EUR 500,000 in Spanish real estate',
 'Option 2: EUR 1,000,000 in Spanish company shares',
 'Option 3: EUR 2,000,000 in Spanish government bonds',
 'Option 4: EUR 1,000,000 in Spanish bank deposit',
 ],
 isConditional: true,
 condition: 'Different requirements for each investment type',
 },
 {
 id: 'property-purchase',
 title: 'Purchase Property (if applicable)',
 description: 'Complete real estate purchase of EUR 500,000 or more',
 estimatedDuration: '4-8 weeks',
 documents: [
 'Property deed (escritura)',
 'Proof of payment',
 'Property valuation',
 ],
 notes: [
 'Can be one property or multiple properties totaling EUR 500k+',
 'Property must be debt-free',
 'Use Spanish lawyer (abogado) for purchase',
 'Register property in Land Registry',
 ],
 isConditional: true,
 condition: 'Only if choosing real estate investment',
 },
 {
 id: 'nie-number',
 title: 'Obtain NIE Number',
 description: 'Get Spanish tax identification number',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport',
 'NIE application form (EX-15)',
 'Reason for NIE (investment)',
 ],
 notes: [
 'NIE: Número de Identificación de Extranjero',
 'Required for all financial transactions in Spain',
 'Can apply at Spanish consulate in US',
 'Fee: approximately EUR 10',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport',
 'Completed visa application form (EX-01)',
 'Passport-sized photos',
 'NIE number',
 'Proof of investment (property deed, share certificates, etc.)',
 'Proof of health insurance',
 'Criminal background check (apostilled)',
 'Medical certificate',
 'Proof of financial means',
 ],
 notes: [
 'All documents must be apostilled',
 'Health insurance must cover Spain',
 'FBI background check can take 8-12 weeks',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit to Spanish consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 60)',
 ],
 notes: [
 'Book appointment at Spanish consulate in US',
 'Bring original documents and copies',
 'Can also apply in Spain if already there',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Consulate processes application',
 estimatedDuration: '4-8 weeks',
 documents: [],
 notes: [
 'Fast processing for Golden Visa',
 'Usually approved if investment is verified',
 'May be contacted for additional documents',
 ],
 },
 {
 id: 'receive-visa',
 title: 'Receive Golden Visa',
 description: 'Collect approved visa',
 estimatedDuration: '1 week',
 documents: [
 'Approval letter',
 'Passport',
 ],
 notes: [
 'Initial visa valid for 1 year',
 'Renewable for 2-year periods',
 'Can apply for permanent residence after 5 years',
 'Family members can be included',
 ],
 },
 {
 id: 'travel-register',
 title: 'Travel and Register',
 description: 'Travel to Spain and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Golden Visa',
 'Passport',
 'Proof of investment',
 ],
 notes: [
 'Register at local police station (Comisaría)',
 'Obtain TIE card (residence card)',
 'No minimum stay requirement',
 'Must visit Spain at least once per year',
 ],
 },
 ],
 },

 'non-lucrative': {
 programId: 'non-lucrative',
 countryCode: 'ES',
 programName: 'Non-Lucrative Visa',
 totalEstimatedDuration: '3-5 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> Income{Passive Income >= EUR 28,800/year?}
 Income -->|Yes| Savings{Savings >= EUR 30,000?}
 Income -->|No| End1([Not Eligible])
 Savings -->|Yes| GatherDocs[Gather Required Documents]
 Savings -->|No| End2([Not Eligible])
 GatherDocs --> Submit[Submit Application]
 Submit --> Wait[Wait for Processing<br/>8-12 weeks]
 Wait --> Decision{Decision}
 Decision -->|Approved| Visa[Receive Non-Lucrative Visa]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Visa --> Travel[Travel to Spain]
 Travel --> Register[Register at Police Station]
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
 id: 'income-verification',
 title: 'Verify Passive Income',
 description: 'Confirm you have sufficient passive income',
 estimatedDuration: '1 week',
 documents: [
 'Bank statements (6 months)',
 'Investment account statements',
 'Pension statements',
 'Rental income documentation',
 ],
 notes: [
 'Minimum EUR 28,800/year (400% of IPREM)',
 'Must be passive income (not from employment)',
 'Can include: pensions, investments, rental income, dividends',
 'Add EUR 7,200/year for each dependent',
 ],
 },
 {
 id: 'savings-verification',
 title: 'Verify Savings',
 description: 'Confirm you have sufficient savings',
 estimatedDuration: '1 week',
 documents: [
 'Bank statements showing EUR 30,000+',
 ],
 notes: [
 'Recommended minimum EUR 30,000 in savings',
 'Shows financial stability',
 'Combined with passive income demonstrates self-sufficiency',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '4-6 weeks',
 documents: [
 'Valid passport',
 'Completed visa application form',
 'Passport-sized photos',
 'Proof of passive income',
 'Bank statements',
 'Private health insurance (full coverage in Spain)',
 'Criminal background check (apostilled)',
 'Medical certificate',
 'Proof of accommodation in Spain',
 ],
 notes: [
 'FBI background check takes 8-12 weeks - start early!',
 'Health insurance must be from Spanish provider or international with Spain coverage',
 'All documents must be apostilled',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit to Spanish consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 60)',
 ],
 notes: [
 'Book appointment at Spanish consulate',
 'Bring original documents and copies',
 'May be interviewed',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Consulate processes application',
 estimatedDuration: '8-12 weeks',
 documents: [],
 notes: [
 'Processing time varies by consulate',
 'May be contacted for additional documents',
 'Financial documentation is key',
 ],
 },
 {
 id: 'receive-visa',
 title: 'Receive Non-Lucrative Visa',
 description: 'Collect approved visa',
 estimatedDuration: '1 week',
 documents: [
 'Approval letter',
 'Passport',
 ],
 notes: [
 'Initial visa valid for 1 year',
 'Renewable for 2-year periods',
 'Cannot work in Spain',
 'Can receive foreign income',
 ],
 },
 {
 id: 'travel-register',
 title: 'Travel and Register',
 description: 'Travel to Spain and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Non-Lucrative Visa',
 'Passport',
 'Proof of accommodation',
 ],
 notes: [
 'Must enter Spain within 3 months of visa issuance',
 'Register at local police station within 30 days',
 'Obtain TIE card',
 'Must spend at least 183 days/year in Spain',
 ],
 },
 ],
 },

 'digital-nomad': {
 programId: 'digital-nomad',
 countryCode: 'ES',
 programName: 'Digital Nomad Visa',
 totalEstimatedDuration: '2-3 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> Remote{Remote Work?}
 Remote -->|Yes| Income{Income >= EUR 2,400/month?}
 Remote -->|No| End1([Not Eligible])
 Income -->|Yes| GatherDocs[Gather Required Documents]
 Income -->|No| End2([Not Eligible])
 GatherDocs --> Submit[Submit Application]
 Submit --> Wait[Wait for Processing<br/>4-8 weeks]
 Wait --> Decision{Decision}
 Decision -->|Approved| Visa[Receive Digital Nomad Visa]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Visa --> Travel[Travel to Spain]
 Travel --> Register[Register at Police Station]
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
 id: 'remote-work-verification',
 title: 'Verify Remote Work Status',
 description: 'Confirm you work remotely for non-Spanish company',
 estimatedDuration: '1 week',
 documents: [
 'Employment contract or freelance agreements',
 'Letter from employer confirming remote work',
 ],
 notes: [
 'Must work remotely for company outside Spain',
 'Can be employee or freelancer',
 'Cannot work for Spanish clients (max 20% of income)',
 ],
 },
 {
 id: 'income-verification',
 title: 'Verify Income Requirements',
 description: 'Confirm you meet minimum income threshold',
 estimatedDuration: '1 week',
 documents: [
 'Recent pay slips (3 months)',
 'Bank statements',
 'Tax returns',
 ],
 notes: [
 'Minimum EUR 2,400/month ( EUR 28,800/year)',
 'Income must be stable and ongoing',
 'Can be from employment or freelance work',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport',
 'Completed visa application form',
 'Passport-sized photos',
 'Employment contract or freelance agreements',
 'Proof of income ( EUR 2,400/month)',
 'Private health insurance',
 'Criminal background check (apostilled)',
 'Proof of accommodation in Spain',
 'University degree or 3+ years experience',
 ],
 notes: [
 'All documents must be apostilled',
 'Health insurance must cover Spain',
 'Degree or experience proves professional qualification',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit to Spanish consulate',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 80)',
 ],
 notes: [
 'Book appointment at Spanish consulate',
 'New visa type (introduced 2023)',
 'Fast processing',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Consulate processes application',
 estimatedDuration: '4-8 weeks',
 documents: [],
 notes: [
 'Faster processing than traditional work visa',
 'Usually approved if requirements met',
 'May be contacted for clarifications',
 ],
 },
 {
 id: 'receive-visa',
 title: 'Receive Digital Nomad Visa',
 description: 'Collect approved visa',
 estimatedDuration: '1 week',
 documents: [
 'Approval letter',
 'Passport',
 ],
 notes: [
 'Valid for 1 year',
 'Renewable up to 5 years total',
 'Can apply for permanent residence after 5 years',
 'Eligible for Beckham Law tax benefits (24% flat tax)',
 ],
 },
 {
 id: 'travel-register',
 title: 'Travel and Register',
 description: 'Travel to Spain and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Digital Nomad Visa',
 'Passport',
 'Proof of accommodation',
 ],
 notes: [
 'Register at local police station',
 'Obtain TIE card',
 'Apply for Beckham Law if eligible',
 'Can work from anywhere in Spain',
 ],
 },
 ],
 },

 'highly-qualified': {
 programId: 'highly-qualified',
 countryCode: 'ES',
 programName: 'Highly Qualified Professional Visa',
 totalEstimatedDuration: '2-4 months',
 complexity: 'medium',
 successRate: '80%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> JobOffer[Secure Job Offer]
 JobOffer --> Degree{Bachelor's Degree?}
 Degree -->|Yes| Salary{Salary >= EUR 30,000?}
 Degree -->|No| End1([Not Eligible])
 Salary -->|Yes| GatherDocs[Gather Required Documents]
 Salary -->|No| End2([Not Eligible])
 GatherDocs --> Submit[Submit Application]
 Submit --> Wait[Wait for Processing<br/>6-10 weeks]
 Wait --> Decision{Decision}
 Decision -->|Approved| Visa[Receive Work Visa]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Visa --> Travel[Travel to Spain]
 Travel --> Register[Register at Police Station]
 Register --> SocialSecurity[Register for Social Security]
 SocialSecurity --> Success([Process Complete])
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
 id: 'job-offer',
 title: 'Secure Job Offer',
 description: 'Obtain job offer from Spanish employer',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation',
 ],
 notes: [
 'Employer must be registered in Spain',
 'Job must match your qualifications',
 'Salary must meet minimum threshold',
 ],
 },
 {
 id: 'degree-verification',
 title: 'Verify Degree Requirements',
 description: 'Confirm you have required education',
 estimatedDuration: '1 week',
 documents: [
 'University degree certificate',
 'Transcript of records',
 ],
 notes: [
 'Bachelor degree minimum',
 'Degree must be relevant to job',
 'May need degree recognition (homologacion)',
 ],
 },
 {
 id: 'salary-verification',
 title: 'Verify Salary Requirements',
 description: 'Confirm salary meets minimum',
 estimatedDuration: '1 day',
 documents: [
 'Employment contract with salary details',
 ],
 notes: [
 'Minimum approximately EUR 30,000/year',
 'Varies by region and profession',
 'Must be competitive with Spanish market',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '3-4 weeks',
 documents: [
 'Valid passport',
 'Completed visa application form',
 'Passport-sized photos',
 'Employment contract',
 'University degree (apostilled)',
 'Transcript of records',
 'CV/Resume',
 'Private health insurance',
 'Criminal background check (apostilled)',
 'Medical certificate',
 ],
 notes: [
 'All documents must be apostilled',
 'Degree may need official recognition',
 'FBI background check takes 8-12 weeks',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit to Spanish consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 60)',
 ],
 notes: [
 'Book appointment at Spanish consulate',
 'Employer may need to submit documents in Spain',
 'Bring original documents and copies',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Consulate and immigration office process application',
 estimatedDuration: '6-10 weeks',
 documents: [],
 notes: [
 'Processing time varies',
 'May be contacted for additional documents',
 'Employer may be contacted',
 ],
 },
 {
 id: 'receive-visa',
 title: 'Receive Work Visa',
 description: 'Collect approved visa',
 estimatedDuration: '1 week',
 documents: [
 'Approval letter',
 'Passport',
 ],
 notes: [
 'Initial visa valid for 1 year',
 'Renewable for 2-year periods',
 'Tied to specific employer initially',
 ],
 },
 {
 id: 'travel-register',
 title: 'Travel and Register',
 description: 'Travel to Spain and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Work visa',
 'Passport',
 'Employment contract',
 ],
 notes: [
 'Register at local police station within 30 days',
 'Obtain TIE card',
 'Register for social security',
 ],
 },
 {
 id: 'social-security',
 title: 'Register for Social Security',
 description: 'Complete social security registration',
 estimatedDuration: '1 week',
 documents: [
 'TIE card',
 'Employment contract',
 ],
 notes: [
 'Employer typically handles registration',
 'Receive social security number',
 'Required to start work',
 ],
 },
 ],
 },

 'family-reunification': {
 programId: 'family-reunification',
 countryCode: 'ES',
 programName: 'Family Reunification Visa',
 totalEstimatedDuration: '4-6 months',
 complexity: 'medium',
 successRate: '75%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> Sponsor{Family in Spain?}
 Sponsor -->|Yes| Income{Sponsor Meets Requirements?}
 Sponsor -->|No| End1([Not Eligible])
 Income -->|Yes| Relationship[Prove Relationship]
 Income -->|No| End2([Not Eligible])
 Relationship --> GatherDocs[Gather Required Documents]
 GatherDocs --> Submit[Submit Application]
 Submit --> Wait[Wait for Processing<br/>12-16 weeks]
 Wait --> Decision{Decision}
 Decision -->|Approved| Visa[Receive Visa]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Visa --> Travel[Travel to Spain]
 Travel --> Register[Register at Police Station]
 Register --> Empadronamiento[Complete Empadronamiento]
 Empadronamiento --> Success([Process Complete])
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
 id: 'sponsor-eligibility',
 title: 'Verify Sponsor Eligibility',
 description: 'Confirm family member in Spain meets requirements',
 estimatedDuration: '1 week',
 documents: [
 'Sponsor residence permit or Spanish passport',
 'Sponsor income statements',
 'Sponsor housing documents',
 ],
 notes: [
 'Sponsor must have valid residence permit or be Spanish citizen',
 'Must have lived in Spain for 1+ year',
 'Must meet income and housing requirements',
 ],
 },
 {
 id: 'income-housing',
 title: 'Verify Income and Housing',
 description: 'Confirm sponsor meets financial requirements',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Recent pay slips (3 months)',
 'Tax returns',
 'Housing lease or ownership documents',
 ],
 notes: [
 'Income must be sufficient for family size',
 'Housing must be adequate',
 'Specific thresholds vary by region',
 ],
 },
 {
 id: 'relationship-proof',
 title: 'Prove Family Relationship',
 description: 'Document your relationship to sponsor',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Marriage certificate (if spouse)',
 'Birth certificates (if parent/child)',
 'Partnership registration (if partner)',
 'Photos together',
 ],
 notes: [
 'All certificates must be apostilled',
 'Relationship must be genuine',
 'May need to prove cohabitation history',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '4-6 weeks',
 documents: [
 'Valid passport',
 'Completed visa application form',
 'Passport-sized photos',
 'Relationship documents (apostilled)',
 'Sponsor documents',
 'Proof of accommodation',
 'Health insurance certificate',
 'Criminal background check (apostilled)',
 'Medical certificate',
 ],
 notes: [
 'All documents must be apostilled',
 'FBI background check takes 8-12 weeks',
 'Translations must be certified',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit to Spanish consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 60)',
 ],
 notes: [
 'Book appointment at Spanish consulate',
 'Bring original documents and copies',
 'May be interviewed',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Immigration office processes application',
 estimatedDuration: '12-16 weeks',
 documents: [],
 notes: [
 'Longer processing for family reunification',
 'May request additional documents',
 'Sponsor may be contacted',
 ],
 },
 {
 id: 'receive-visa',
 title: 'Receive Visa',
 description: 'Collect approved visa',
 estimatedDuration: '1 week',
 documents: [
 'Approval letter',
 'Passport',
 ],
 notes: [
 'Initial visa valid for 1 year',
 'Renewable for 2-year periods',
 'Allows work in Spain',
 ],
 },
 {
 id: 'travel-register',
 title: 'Travel and Register',
 description: 'Travel to Spain and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Visa',
 'Passport',
 'Relationship documents',
 ],
 notes: [
 'Register at local police station within 30 days',
 'Obtain TIE card',
 'Complete empadronamiento (municipal registration)',
 ],
 },
 {
 id: 'empadronamiento',
 title: 'Complete Empadronamiento',
 description: 'Register at local town hall',
 estimatedDuration: '1 week',
 documents: [
 'Passport',
 'TIE card',
 'Proof of address',
 ],
 notes: [
 'Empadronamiento: Municipal registration',
 'Required for accessing public services',
 'Free process at town hall (ayuntamiento)',
 ],
 },
 ],
 },
};
