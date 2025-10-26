/**
 * Italy Immigration Process Flowcharts
 * Defines the step-by-step process for each Italian visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const italyFlowcharts: Record<string, FlowchartDefinition> = {
 'golden_visa': {
 programId: 'it_golden_visa',
 countryCode: 'IT',
 programName: 'Golden Visa (Investor Visa)',
 totalEstimatedDuration: '3-6 months',
 complexity: 'medium',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->investment-type{Investment Type?}
 investment-type -->|Company| make-investment[Invest EUR 500k in Company]
 investment-type -->|Startup| make-investment
 investment-type -->|Bonds| make-investment
 make-investment -->nulla-osta[Obtain Nulla Osta]
 nulla-osta -->gather-documents[Gather Required Documents]
 gather-documents -->submit-visa[Submit Visa Application]
 submit-visa -->processing[Wait for Processing<br/>8-12 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive Investor Visa]
 decision -->|Rejected| End1([Process Ended])
 receive-visa --> travel[Travel and Apply at Questura]
 travel-questura --> permesso[Receive Permesso di Soggiorno]
 permesso-soggiorno --> Success([Process Complete])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style receive-visa fill:#e1e5ff
`,
 steps: [
 {
 id: 'investment-type',
 title: 'Choose Investment Type',
 description: 'Determine which investment option you will pursue',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Financial statements',
 'Investment plan',
 ],
 notes: [
 'Option 1: EUR 500,000 in Italian company shares',
 'Option 2: EUR 250,000 in innovative Italian startup',
 'Option 3: EUR 2,000,000 in Italian government bonds',
 'Option 4: EUR 1,000,000 in Italian philanthropic project',
 ],
 isConditional: true,
 condition: 'Different requirements for each investment type',
 },
 {
 id: 'make-investment',
 title: 'Complete Investment',
 description: 'Execute your chosen investment',
 estimatedDuration: '4-8 weeks',
 documents: [
 'Investment agreement',
 'Proof of payment',
 'Company registration (if applicable)',
 ],
 notes: [
 'Investment must be maintained for at least 2 years',
 'Use Italian lawyer for investment process',
 'Innovative startup must be certified by Italian government',
 ],
 },
 {
 id: 'nulla-osta',
 title: 'Obtain Nulla Osta',
 description: 'Get clearance from Italian authorities',
 estimatedDuration: '4-6 weeks',
 documents: [
 'Investment documentation',
 'Application form',
 'Proof of funds origin',
 ],
 notes: [
 'Nulla Osta: Clearance certificate',
 'Issued by Committee for Investor Visa',
 'Verifies investment meets requirements',
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
 'Nulla Osta certificate',
 'Investment documentation',
 'Proof of accommodation in Italy',
 'Health insurance certificate',
 'Criminal background check (apostilled)',
 'Proof of financial means',
 ],
 notes: [
 'All documents must be apostilled',
 'FBI background check takes 8-12 weeks',
 'Health insurance must cover Italy',
 ],
 },
 {
 id: 'submit-visa',
 title: 'Submit Visa Application',
 description: 'Submit to Italian consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 116)',
 ],
 notes: [
 'Book appointment at Italian consulate in US',
 'Bring original documents and copies',
 'Nulla Osta is key document',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Consulate processes visa application',
 estimatedDuration: '8-12 weeks',
 documents: [],
 notes: [
 'Processing time varies',
 'Usually approved if Nulla Osta is valid',
 'May be contacted for additional documents',
 ],
 },
 {
 id: 'receive-visa',
 title: 'Receive Investor Visa',
 description: 'Collect approved visa',
 estimatedDuration: '1 week',
 documents: [
 'Approval letter',
 'Passport',
 ],
 notes: [
 'Entry visa valid for 90 days',
 'Must enter Italy within validity period',
 'Will convert to residence permit in Italy',
 ],
 },
 {
 id: 'travel',
 title: 'Travel to Italy',
 description: 'Enter Italy with investor visa',
 estimatedDuration: '1 day',
 documents: [
 'Investor visa',
 'Passport',
 'Investment documentation',
 ],
 notes: [
 'Must enter within 90 days of visa issuance',
 'Keep all documents with you',
 ],
 },
 {
 id: 'questura',
 title: 'Apply at Questura',
 description: 'Apply for residence permit at local police headquarters',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport with visa',
 'Investment documentation',
 'Proof of accommodation',
 'Health insurance',
 ],
 notes: [
 'Must apply within 8 days of arrival',
 'Book appointment (kit postale)',
 'Questura: Local police headquarters',
 ],
 },
 {
 id: 'permesso',
 title: 'Receive Permesso di Soggiorno',
 description: 'Collect residence permit',
 estimatedDuration: '4-8 weeks',
 documents: [
 'Receipt from Questura',
 'Passport',
 ],
 notes: [
 'Permesso valid for 2 years',
 'Renewable if investment maintained',
 'Can apply for permanent residence after 5 years',
 'Family members can be included',
 ],
 },
 ],
 },

 'self_employment': {
 programId: 'it_self_employment',
 countryCode: 'IT',
 programName: 'Self-Employment Visa',
 totalEstimatedDuration: '3-5 months',
 complexity: 'high',
 successRate: '70%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->business-plan[Develop Business Plan]
 business-plan -->capital[Secure Capital EUR 30k+]
 capital -->nulla-osta[Obtain Nulla Osta]
 nulla-osta --> approved{Approved?}
 approved -->|Yes| gather-documents[Gather Required Documents]
 approved -->|No| End1([Not Eligible])
 gather-documents -->submit-visa[Submit Visa Application]
 submit-visa -->processing[Wait for Processing<br/>8-12 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive Self-Employment Visa]
 decision -->|Rejected| End2([Process Ended])
 receive-visa -->travel-questura[Travel and Apply at Questura]
 travel-questura -->partita-iva[Obtain Partita IVA]
 partita-iva --> Success([Process Complete])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style receive-visa fill:#e1e5ff
`,
 steps: [
 {
 id: 'business-plan',
 title: 'Develop Business Plan',
 description: 'Create comprehensive business plan',
 estimatedDuration: '4-6 weeks',
 documents: [
 'Business plan (20-30 pages)',
 'Market analysis',
 'Financial projections (3 years)',
 'Description of services/products',
 ],
 notes: [
 'Plan must demonstrate economic benefit to Italy',
 'Should show job creation potential',
 'Consider hiring Italian business consultant',
 ],
 },
 {
 id: 'capital',
 title: 'Secure Startup Capital',
 description: 'Ensure sufficient funds for business',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Bank statements showing EUR 30,000+',
 'Proof of funds availability',
 ],
 notes: [
 'Recommended minimum EUR 30,000',
 'Must show funds for business and living expenses',
 'Additional capital increases approval chances',
 ],
 },
 {
 id: 'nulla-osta',
 title: 'Obtain Nulla Osta',
 description: 'Get clearance from Italian authorities',
 estimatedDuration: '6-8 weeks',
 documents: [
 'Business plan',
 'Proof of financial resources',
 'Professional qualifications',
 ],
 notes: [
 'Issued by local Chamber of Commerce',
 'Evaluates business viability',
 'May require interview',
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
 'Nulla Osta certificate',
 'Business plan',
 'Bank statements',
 'Professional qualifications (apostilled)',
 'Proof of accommodation',
 'Health insurance',
 'Criminal background check (apostilled)',
 ],
 notes: [
 'All documents must be apostilled',
 'Professional qualifications important',
 'FBI background check takes 8-12 weeks',
 ],
 },
 {
 id: 'submit-visa',
 title: 'Submit Visa Application',
 description: 'Submit to Italian consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 116)',
 ],
 notes: [
 'Book appointment at Italian consulate',
 'Bring Nulla Osta certificate',
 'May be interviewed about business plan',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Consulate processes application',
 estimatedDuration: '8-12 weeks',
 documents: [],
 notes: [
 'Processing time varies',
 'Business plan is key factor',
 'May be contacted for clarifications',
 ],
 },
 {
 id: 'receive-visa',
 title: 'Receive Self-Employment Visa',
 description: 'Collect approved visa',
 estimatedDuration: '1 week',
 documents: [
 'Approval letter',
 'Passport',
 ],
 notes: [
 'Entry visa valid for 90 days',
 'Must enter Italy within validity period',
 'Will convert to residence permit',
 ],
 },
 {
 id: 'travel-questura',
 title: 'Travel and Apply at Questura',
 description: 'Travel to Italy and apply for residence permit',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Visa',
 'Passport',
 'Business plan',
 ],
 notes: [
 'Apply at Questura within 8 days',
 'Book kit postale appointment',
 'Bring all original documents',
 ],
 },
 {
 id: 'partita-iva',
 title: 'Obtain Partita IVA',
 description: 'Register for Italian VAT number',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Residence permit receipt',
 'Business registration documents',
 ],
 notes: [
 'Partita IVA: Italian VAT number',
 'Required to operate business',
 'Register at Agenzia delle Entrate (tax office)',
 'Can hire commercialista (accountant) to help',
 ],
 },
 ],
 },

 'highly_skilled': {
 programId: 'it_highly_skilled',
 countryCode: 'IT',
 programName: 'Highly Skilled Worker Visa',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '75%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->quota-check{Quota Available?}
 quota-check -->|Yes| job-offer[Secure Job Offer]
 quota-check -->|No| End1([Wait for Next Quota])
 job-offer -->nulla-osta[Employer Obtains Nulla Osta]
 nulla-osta --> approved{Approved?}
 approved -->|Yes| gather-documents[Gather Required Documents]
 approved -->|No| End2([Not Eligible])
 gather-documents -->submit-visa[Submit Visa Application]
 submit-visa -->processing[Wait for Processing<br/>8-12 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive Work Visa]
 decision -->|Rejected| End3([Process Ended])
 receive-visa -->travel-questura[Travel and Apply at Questura]
 travel-questura --> Success([Process Complete])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style End3 fill:#ffe1e1
 style receive-visa fill:#e1e5ff
`,
 steps: [
 {
 id: 'quota-check',
 title: 'Check Quota Availability',
 description: 'Verify quota slots available for your nationality',
 estimatedDuration: '1 week',
 documents: [
 'Decreto Flussi announcement',
 ],
 notes: [
 'Italy uses annual quota system (Decreto Flussi)',
 'Quotas announced yearly, usually in spring',
 'US citizens typically have dedicated quota',
 'Quotas fill quickly - apply early',
 ],
 },
 {
 id: 'job-offer',
 title: 'Secure Job Offer',
 description: 'Obtain job offer from Italian employer',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation ( EUR 25,000+ per year)',
 ],
 notes: [
 'Employer must be registered in Italy',
 'Job must match your qualifications',
 'Salary must meet minimum threshold',
 ],
 },
 {
 id: 'nulla-osta',
 title: 'Employer Obtains Nulla Osta',
 description: 'Employer applies for work authorization',
 estimatedDuration: '4-8 weeks',
 documents: [
 'Employment contract',
 'Company registration documents',
 'Proof of salary payment ability',
 ],
 notes: [
 'Employer submits to Sportello Unico',
 'Must be done during quota window',
 'Employer pays application fee',
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
 'Nulla Osta certificate',
 'Employment contract',
 'University degree (apostilled)',
 'CV/Resume',
 'Proof of accommodation',
 'Health insurance',
 'Criminal background check (apostilled)',
 ],
 notes: [
 'All documents must be apostilled',
 'Degree should match job requirements',
 'FBI background check takes 8-12 weeks',
 ],
 },
 {
 id: 'submit-visa',
 title: 'Submit Visa Application',
 description: 'Submit to Italian consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 116)',
 ],
 notes: [
 'Book appointment at Italian consulate',
 'Must apply within 6 months of Nulla Osta',
 'Bring original documents and copies',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Consulate processes visa application',
 estimatedDuration: '8-12 weeks',
 documents: [],
 notes: [
 'Processing time varies by consulate',
 'May be contacted for additional documents',
 'Nulla Osta is key approval factor',
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
 'Entry visa valid for 90 days',
 'Must enter Italy within validity period',
 'Will convert to residence permit',
 ],
 },
 {
 id: 'travel-questura',
 title: 'Travel and Apply at Questura',
 description: 'Travel to Italy and apply for residence permit',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Work visa',
 'Passport',
 'Employment contract',
 ],
 notes: [
 'Apply at Questura within 8 days',
 'Book kit postale appointment',
 'Receive permesso di soggiorno (valid 1-2 years)',
 'Can begin employment',
 ],
 },
 ],
 },

 'digital_nomad': {
 programId: 'it_digital_nomad',
 countryCode: 'IT',
 programName: 'Digital Nomad Visa',
 totalEstimatedDuration: '2-3 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->remote-work-verification{Remote Work?}
 remote-work-verification -->|Yes| income-verification{Income >= EUR 28,000/year?}
 remote-work-verification -->|No| End1([Not Eligible])
 income-verification -->|Yes| gather-documents[Gather Required Documents]
 income-verification -->|No| End2([Not Eligible])
 gather-documents -->submit-visa[Submit Visa Application]
 submit-visa -->processing[Wait for Processing<br/>6-10 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive Digital Nomad Visa]
 decision -->|Rejected| End3([Process Ended])
 receive-visa -->travel-questura[Travel and Apply at Questura]
 travel-questura --> Success([Process Complete])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style End3 fill:#ffe1e1
 style receive-visa fill:#e1e5ff
`,
 steps: [
 {
 id: 'remote-work-verification',
 title: 'Verify Remote Work Status',
 description: 'Confirm you work remotely for non-Italian company',
 estimatedDuration: '1 week',
 documents: [
 'Employment contract or freelance agreements',
 'Letter from employer confirming remote work',
 ],
 notes: [
 'Must work remotely for company outside Italy',
 'Can be employee or freelancer',
 'New visa type introduced in 2024',
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
 'Minimum EUR 28,000/year',
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
 'Proof of income ( EUR 28,000/year)',
 'Health insurance certificate',
 'Proof of accommodation in Italy',
 'Criminal background check (apostilled)',
 'University degree or proof of professional experience',
 ],
 notes: [
 'All documents must be apostilled',
 'Health insurance must cover Italy',
 'Accommodation can be rental or hotel',
 ],
 },
 {
 id: 'submit-visa',
 title: 'Submit Visa Application',
 description: 'Submit to Italian consulate',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 116)',
 ],
 notes: [
 'Book appointment at Italian consulate',
 'New visa type - consulates still learning process',
 'Bring proof of remote work',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Consulate processes application',
 estimatedDuration: '6-10 weeks',
 documents: [],
 notes: [
 'Processing time may vary (new visa type)',
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
 'Renewable',
 'Allows residence in Italy while working remotely',
 ],
 },
 {
 id: 'travel-questura',
 title: 'Travel and Apply at Questura',
 description: 'Travel to Italy and apply for residence permit',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Digital Nomad Visa',
 'Passport',
 'Proof of accommodation',
 ],
 notes: [
 'Apply at Questura within 8 days',
 'Receive permesso di soggiorno',
 'Can work from anywhere in Italy',
 'Favorable tax treatment may apply',
 ],
 },
 ],
 },

 'family_reunification': {
 programId: 'it_family_reunification',
 countryCode: 'IT',
 programName: 'Family Reunification Visa',
 totalEstimatedDuration: '5-8 months',
 complexity: 'medium',
 successRate: '70%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->sponsor-eligibility{Family in Italy?}
 sponsor-eligibility -->|Yes| income-housing{Sponsor Meets Requirements?}
 sponsor-eligibility -->|No| End1([Not Eligible])
 income-housing -->|Yes| nulla-osta[Sponsor Obtains Nulla Osta]
 income-housing -->|No| End2([Not Eligible])
 nulla-osta -->gather-documents[Gather Required Documents]
 gather-documents -->submit-visa[Submit Visa Application]
 submit-visa -->processing[Wait for Processing<br/>12-20 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive Visa]
 decision -->|Rejected| End3([Process Ended])
 receive-visa -->travel-questura[Travel and Apply at Questura]
 travel-questura -->integration-agreement[Sign Integration Agreement]
 integration-agreement --> Success([Process Complete])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style End3 fill:#ffe1e1
 style receive-visa fill:#e1e5ff
`,
 steps: [
 {
 id: 'sponsor-eligibility',
 title: 'Verify Sponsor Eligibility',
 description: 'Confirm family member in Italy meets requirements',
 estimatedDuration: '1 week',
 documents: [
 'Sponsor residence permit or Italian passport',
 'Sponsor income statements',
 'Sponsor housing documents',
 ],
 notes: [
 'Sponsor must have valid residence permit or be Italian citizen',
 'Must have lived in Italy for 1+ year',
 'Must meet income and housing requirements',
 ],
 },
 {
 id: 'income-housing',
 title: 'Verify Income and Housing',
 description: 'Confirm sponsor meets financial requirements',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Recent pay slips (6 months)',
 'Tax returns (CUD)',
 'Housing lease or ownership documents',
 'Housing adequacy certificate',
 ],
 notes: [
 'Income must exceed minimum threshold',
 'Threshold varies by family size',
 'Housing must meet minimum size requirements',
 ],
 },
 {
 id: 'nulla-osta',
 title: 'Sponsor Obtains Nulla Osta',
 description: 'Sponsor applies for family reunification authorization',
 estimatedDuration: '8-12 weeks',
 documents: [
 'Sponsor documents',
 'Relationship proof',
 'Income and housing documentation',
 ],
 notes: [
 'Sponsor applies at Sportello Unico',
 'Longest step in process',
 'Nulla Osta sent to consulate when approved',
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
 'Marriage certificate or birth certificates (apostilled)',
 'Proof of relationship',
 'Health insurance',
 'Criminal background check (apostilled)',
 ],
 notes: [
 'All documents must be apostilled',
 'FBI background check takes 8-12 weeks',
 'Relationship documents must be recent',
 ],
 },
 {
 id: 'submit-visa',
 title: 'Submit Visa Application',
 description: 'Submit to Italian consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 116)',
 ],
 notes: [
 'Book appointment at Italian consulate',
 'Nulla Osta must be sent to consulate first',
 'Bring original documents and copies',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Consulate processes visa application',
 estimatedDuration: '12-20 weeks',
 documents: [],
 notes: [
 'Longest processing time of all visa types',
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
 'Entry visa valid for 90 days',
 'Must enter Italy within validity period',
 'Will convert to residence permit',
 ],
 },
 {
 id: 'travel-questura',
 title: 'Travel and Apply at Questura',
 description: 'Travel to Italy and apply for residence permit',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Visa',
 'Passport',
 'Relationship documents',
 ],
 notes: [
 'Apply at Questura within 8 days',
 'Receive permesso di soggiorno (valid 2 years)',
 'Allows work in Italy',
 ],
 },
 {
 id: 'integration-agreement',
 title: 'Sign Integration Agreement',
 description: 'Sign agreement and attend integration course',
 estimatedDuration: 'Ongoing',
 documents: [
 'Residence permit',
 ],
 notes: [
 'Integration agreement (Accordo di Integrazione)',
 'Must earn points through Italian language and civic knowledge',
 'Free Italian language courses available',
 'Required for permit renewal',
 ],
 },
 ],
 },
};
