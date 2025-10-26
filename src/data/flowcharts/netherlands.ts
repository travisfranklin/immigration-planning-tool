/**
 * Netherlands Immigration Process Flowcharts
 * Defines the step-by-step process for each Dutch visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const netherlandsFlowcharts: Record<string, FlowchartDefinition> = {
 'daft': {
 programId: 'nl_daft',
 countryCode: 'NL',
 programName: 'DAFT (Dutch-American Friendship Treaty)',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '95%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->citizenship-check{US Citizen?}
 citizenship-check -->|Yes| business-plan[Develop Business Plan]
 citizenship-check -->|No| End1([Not Eligible])
 business-plan -->capital[Secure EUR 4,500 Capital]
 capital -->bank-account[Open Dutch Bank Account]
 bank-account -->kvk-registration[Register with KVK]
 kvk-registration -->gather-documents[Gather Required Documents]
 gather-documents -->submit-application[Submit IND Application]
 submit-application -->processing[Wait for Processing<br/>4-8 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-permit[Receive Residence Permit]
 decision -->|Rejected| End2([Process Ended])
 receive-permit -->travel-register[Travel and Register]
 travel-register --> Success([Process Complete])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style receive-permit fill:#e1e5ff
`,
 steps: [
 {
 id: 'citizenship-check',
 title: 'Verify US Citizenship',
 description: 'Confirm you are a US citizen (required for DAFT)',
 estimatedDuration: '1 day',
 documents: [
 'Valid US passport',
 'US birth certificate or naturalization certificate',
 ],
 notes: [
 'DAFT is exclusively for US citizens',
 'This is a unique advantage of the Dutch-American Friendship Treaty',
 'No other nationality qualifies for this visa',
 ],
 },
 {
 id: 'business-plan',
 title: 'Develop Business Plan',
 description: 'Create a detailed business plan for your Dutch enterprise',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Business plan (in English or Dutch)',
 'Market analysis',
 'Financial projections (3 years)',
 'Description of services/products',
 ],
 notes: [
 'Plan should demonstrate viability',
 'No specific format required, but be thorough',
 'Consider hiring a consultant familiar with Dutch business culture',
 ],
 },
 {
 id: 'capital',
 title: 'Secure Startup Capital',
 description: 'Ensure you have minimum EUR 4,500 available',
 estimatedDuration: '1 week',
 documents: [
 'Bank statements showing EUR 4,500+',
 'Proof of funds availability',
 ],
 notes: [
 'Minimum investment is only EUR 4,500 (very accessible)',
 'Funds must be deposited in Dutch business bank account',
 'Additional capital recommended for living expenses',
 ],
 },
 {
 id: 'bank-account',
 title: 'Open Dutch Bank Account',
 description: 'Open a business bank account in the Netherlands',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport',
 'Proof of address',
 'Business plan',
 'Initial deposit ( EUR 4,500)',
 ],
 notes: [
 'Can be done remotely with some banks',
 'May need to visit Netherlands in person',
 'Popular banks: ABN AMRO, ING, Rabobank',
 ],
 },
 {
 id: 'kvk-registration',
 title: 'Register with Chamber of Commerce (KVK)',
 description: 'Register your business with the Dutch Chamber of Commerce',
 estimatedDuration: '1 week',
 documents: [
 'Business plan',
 'Proof of bank account',
 'Passport copy',
 'Proof of business address',
 ],
 notes: [
 'Can be done online or in person',
 'Costs approximately EUR 50',
 'You will receive a KVK number',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation for IND application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport',
 'Completed MVV/residence permit application form',
 'Passport-sized photos (recent)',
 'Business plan',
 'KVK registration certificate',
 'Bank statements ( EUR 4,500 deposit)',
 'Proof of accommodation in Netherlands',
 'Health insurance certificate',
 'Apostilled birth certificate',
 'Criminal background check (FBI)',
 ],
 notes: [
 'FBI background check can take 8-12 weeks - start early!',
 'Birth certificate needs apostille from US State Department',
 'All documents must be recent (within 6 months)',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit IND Application',
 description: 'Submit your residence permit application to IND',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 350)',
 ],
 notes: [
 'Apply through Dutch embassy/consulate in US',
 'Book appointment in advance',
 'Bring original documents and copies',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'IND processes your application',
 estimatedDuration: '4-8 weeks',
 documents: [],
 notes: [
 'Processing time is typically 4-8 weeks',
 'May be contacted for additional information',
 'Can track status online with IND',
 ],
 },
 {
 id: 'receive-permit',
 title: 'Receive Residence Permit',
 description: 'Collect your approved residence permit',
 estimatedDuration: '1 week',
 documents: [
 'Approval letter from IND',
 'Passport',
 ],
 notes: [
 'Initial permit valid for 2 years',
 'Renewable if business is still active',
 'Can apply for permanent residence after 5 years',
 ],
 },
 {
 id: 'travel-register',
 title: 'Travel and Register',
 description: 'Travel to Netherlands and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Residence permit',
 'Passport',
 'Proof of address',
 ],
 notes: [
 'Register at local municipality (gemeente) within 5 days',
 'Obtain BSN (citizen service number)',
 'Register for health insurance',
 'Open personal bank account if needed',
 ],
 },
 ],
 },

 'highly-skilled-migrant': {
 programId: 'nl_highly_skilled',
 countryCode: 'NL',
 programName: 'Highly Skilled Migrant Visa',
 totalEstimatedDuration: '1-3 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer]
 job-offer --> Sponsor{Recognized Sponsor?}
 Sponsor -->|Yes| salary-verification{Salary Meets Minimum?}
 Sponsor -->|No| End1([Not Eligible])
 salary-verification -->|Yes| gather-documents[Gather Required Documents]
 salary-verification -->|No| End2([Not Eligible])
 gather-documents -->employer-submission[Employer Submits to IND]
 employer-submission -->processing[Wait for Processing<br/>2-4 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-permit[Receive Residence Permit]
 decision -->|Rejected| End3([Process Ended])
 receive-permit -->30-percent-ruling[Apply for 30% Ruling]
 30-percent-ruling -->travel-register[Travel and Register]
 travel-register --> Success([Process Complete])

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
 title: 'Secure Job Offer from Recognized Sponsor',
 description: 'Obtain job offer from IND-recognized sponsor employer',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation',
 ],
 notes: [
 'Employer must be registered as recognized sponsor with IND',
 'Check IND public register for recognized sponsors',
 'Salary must meet minimum threshold',
 ],
 },
 {
 id: 'salary-verification',
 title: 'Verify Salary Requirements',
 description: 'Confirm salary meets minimum threshold',
 estimatedDuration: '1 day',
 documents: [
 'Employment contract with salary details',
 ],
 notes: [
 'Minimum EUR 60,360/year for age 30+',
 'Minimum EUR 44,208/year for under 30',
 'Salary thresholds updated annually',
 ],
 isConditional: true,
 condition: 'Age determines salary threshold',
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 6 months)',
 'Passport-sized photos',
 'Employment contract',
 'University degree certificate (with apostille)',
 'CV/Resume',
 'Proof of health insurance',
 ],
 notes: [
 'Degree must be recognized as equivalent to Dutch degree',
 'Apostille required for US documents',
 'Health insurance must meet Dutch requirements',
 ],
 },
 {
 id: 'employer-submission',
 title: 'Employer Submits Application',
 description: 'Recognized sponsor submits application to IND',
 estimatedDuration: '1 week',
 documents: [
 'All employee documents',
 'Employer declaration',
 'Application fee payment',
 ],
 notes: [
 'Employer handles the application process',
 'Application fee typically paid by employer',
 'Employee provides required documents to employer',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for IND Processing',
 description: 'IND processes the application',
 estimatedDuration: '2-4 weeks',
 documents: [],
 notes: [
 'One of the fastest visa processes in EU',
 'Processing typically takes 2-4 weeks',
 'May be contacted for additional documents',
 ],
 },
 {
 id: 'receive-permit',
 title: 'Receive Residence Permit',
 description: 'Collect approved residence permit',
 estimatedDuration: '1 week',
 documents: [
 'Approval letter',
 'Passport',
 ],
 notes: [
 'Initial permit valid for up to 5 years',
 'Tied to employment with sponsor',
 'Can switch employers (new sponsor must be recognized)',
 ],
 },
 {
 id: '30-percent-ruling',
 title: 'Apply for 30% Ruling (Optional)',
 description: 'Apply for tax benefit if eligible',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Employment contract',
 'Proof of residence outside Netherlands in prior 24 months',
 'Application form',
 ],
 notes: [
 '30% of salary tax-free if eligible',
 'Must have specific expertise not available in Dutch labor market',
 'Employer typically assists with application',
 ],
 isConditional: true,
 condition: 'Optional tax benefit for eligible workers',
 },
 {
 id: 'travel-register',
 title: 'Travel and Register',
 description: 'Travel to Netherlands and complete registration',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Residence permit',
 'Passport',
 'Proof of address',
 ],
 notes: [
 'Register at municipality within 5 days of arrival',
 'Obtain BSN (citizen service number)',
 'Register for health insurance',
 ],
 },
 ],
 },

 'orientation-year': {
 programId: 'nl_orientation_year',
 countryCode: 'NL',
 programName: 'Orientation Year for Graduates',
 totalEstimatedDuration: '2-3 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->university-verification{Top 200 University?}
 university-verification -->|Yes| timeline-check{Within 3 Years?}
 university-verification -->|No| End1([Not Eligible])
 timeline-check -->|Yes| age-verification{Under 30?}
 timeline-check -->|No| End2([Not Eligible])
 age-verification -->|Yes| gather-documents[Gather Required Documents]
 age-verification -->|No| End3([Not Eligible])
 gather-documents -->apostille[Get Diploma Apostille]
 apostille -->submit-application[Submit IND Application]
 submit-application -->processing[Wait for Processing<br/>4-6 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-permit[Receive Residence Permit]
 decision -->|Rejected| End4([Process Ended])
 receive-permit -->job-search[Search for Employment]
 job-search --> Success([Process Complete])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style End3 fill:#ffe1e1
 style End4 fill:#ffe1e1
 style receive-permit fill:#e1e5ff
`,
 steps: [
 {
 id: 'university-verification',
 title: 'Verify University Ranking',
 description: 'Confirm your university is in top 200 of recognized rankings',
 estimatedDuration: '1 day',
 documents: [
 'University diploma',
 'Transcript of records',
 ],
 notes: [
 'Check Times Higher Education, QS, or Shanghai rankings',
 'University must be in top 200 at time of graduation',
 'IND maintains list of qualifying universities',
 ],
 },
 {
 id: 'timeline-check',
 title: 'Verify Graduation Timeline',
 description: 'Confirm graduation was within last 3 years',
 estimatedDuration: '1 day',
 documents: [
 'Diploma with graduation date',
 ],
 notes: [
 'Must apply within 3 years of graduation',
 'Graduation date is when degree was officially conferred',
 'No exceptions to 3-year rule',
 ],
 },
 {
 id: 'age-verification',
 title: 'Verify Age Requirement',
 description: 'Confirm you are under 30 years old',
 estimatedDuration: '1 day',
 documents: [
 'Passport or birth certificate',
 ],
 notes: [
 'Must be under 30 at time of application',
 'Age calculated from date of birth',
 ],
 isConditional: true,
 condition: 'Must be under 30 years old',
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport',
 'Completed application form',
 'Passport-sized photos',
 'University diploma (original)',
 'Transcript of records',
 'Proof of sufficient funds ( EUR 1,200/month)',
 'Health insurance certificate',
 'Apostilled birth certificate',
 'Criminal background check',
 ],
 notes: [
 'Diploma must be apostilled',
 'Need proof of funds for 12 months',
 'Health insurance must meet Dutch requirements',
 ],
 },
 {
 id: 'apostille',
 title: 'Obtain Diploma Apostille',
 description: 'Get your diploma apostilled for international recognition',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Original diploma',
 'Apostille application',
 ],
 notes: [
 'Contact Secretary of State in state where university is located',
 'Can take 2-4 weeks',
 'Keep original diploma safe',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit IND Application',
 description: 'Submit application to Dutch embassy/consulate',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 350)',
 ],
 notes: [
 'Book appointment in advance',
 'Bring original documents and copies',
 'Application processed by IND',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'IND processes your application',
 estimatedDuration: '4-6 weeks',
 documents: [],
 notes: [
 'Processing typically takes 4-6 weeks',
 'May be contacted for additional documents',
 'Can track status online',
 ],
 },
 {
 id: 'receive-permit',
 title: 'Receive Residence Permit',
 description: 'Collect approved residence permit',
 estimatedDuration: '1 week',
 documents: [
 'Approval letter',
 'Passport',
 ],
 notes: [
 'Permit valid for 1 year',
 'Cannot be extended',
 'Must find work and switch to work permit within 1 year',
 ],
 },
 {
 id: 'job-search',
 title: 'Search for Employment',
 description: 'Find job and transition to work permit',
 estimatedDuration: 'Up to 12 months',
 documents: [
 'CV/Resume',
 'Job applications',
 ],
 notes: [
 'Can work full-time during orientation year',
 'No restrictions on type of work',
 'Must transition to work permit before year ends',
 'Can switch to highly skilled migrant visa if eligible',
 ],
 },
 ],
 },

 'self-employment': {
 programId: 'nl_self_employment',
 countryCode: 'NL',
 programName: 'Self-Employment Visa',
 totalEstimatedDuration: '3-6 months',
 complexity: 'high',
 successRate: '70%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->business-plan[Develop Business Plan]
 business-plan -->points-calculation[Calculate Points]
 points-calculation --> Threshold{>=30 Points?}
 Threshold -->|Yes| capital[Secure Capital]
 Threshold -->|No| End1([Not Eligible])
 capital -->kvk-registration[Register with KVK]
 kvk-registration -->gather-documents[Gather Required Documents]
 gather-documents -->submit-application[Submit IND Application]
 submit-application -->processing[Wait for Processing<br/>8-12 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-permit[Receive Residence Permit]
 decision -->|Rejected| End2([Process Ended])
 receive-permit -->travel-register[Travel and Start Business]
 travel-register --> Success([Process Complete])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style receive-permit fill:#e1e5ff
`,
 steps: [
 {
 id: 'business-plan',
 title: 'Develop Comprehensive Business Plan',
 description: 'Create detailed business plan for points-based assessment',
 estimatedDuration: '4-8 weeks',
 documents: [
 'Business plan (30-50 pages)',
 'Market analysis',
 'Financial projections (3-5 years)',
 'Marketing strategy',
 'Operational plan',
 ],
 notes: [
 'Plan evaluated on points system',
 'Must score at least 30 points out of 300',
 'Consider hiring Dutch business consultant',
 'Plan must demonstrate added value to Dutch economy',
 ],
 },
 {
 id: 'points-calculation',
 title: 'Calculate Points Score',
 description: 'Assess your application against points criteria',
 estimatedDuration: '1 week',
 documents: [
 'Business plan',
 'Personal experience documentation',
 'Financial statements',
 ],
 notes: [
 'Points awarded for: personal experience, business plan quality, added value',
 'Need minimum 30 points to qualify',
 'Maximum 300 points possible',
 'IND provides points calculator online',
 ],
 },
 {
 id: 'capital',
 title: 'Secure Startup Capital',
 description: 'Ensure sufficient funds for business and living',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Bank statements showing EUR 15,000+',
 'Proof of funds availability',
 ],
 notes: [
 'Minimum EUR 15,000 recommended',
 'Must show funds for business and living expenses',
 'Additional capital increases chances of approval',
 ],
 },
 {
 id: 'kvk-registration',
 title: 'Register with Chamber of Commerce',
 description: 'Register business with KVK',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Business plan',
 'Proof of business address',
 'Passport copy',
 ],
 notes: [
 'Can be done online or in person',
 'Costs approximately EUR 50',
 'Receive KVK number',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '3-4 weeks',
 documents: [
 'Valid passport',
 'Completed application form',
 'Passport-sized photos',
 'Business plan',
 'KVK registration',
 'Bank statements',
 'Proof of accommodation',
 'Health insurance certificate',
 'Apostilled birth certificate',
 'Criminal background check',
 'CV showing 3+ years experience',
 'References/recommendations',
 ],
 notes: [
 'All documents must be recent',
 'Business plan is most important document',
 'Experience must be relevant to proposed business',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit IND Application',
 description: 'Submit application to IND',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 1,250)',
 ],
 notes: [
 'Higher application fee than other visas',
 'Apply through Dutch embassy/consulate',
 'Book appointment well in advance',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'IND evaluates business plan and awards points',
 estimatedDuration: '8-12 weeks',
 documents: [],
 notes: [
 'Longer processing time due to points assessment',
 'Business plan reviewed by experts',
 'May be contacted for clarifications',
 ],
 },
 {
 id: 'receive-permit',
 title: 'Receive Residence Permit',
 description: 'Collect approved residence permit',
 estimatedDuration: '1 week',
 documents: [
 'Approval letter',
 'Passport',
 ],
 notes: [
 'Initial permit valid for 2 years',
 'Renewable if business is successful',
 'Must demonstrate business progress for renewal',
 ],
 },
 {
 id: 'travel-register',
 title: 'Travel and Start Business',
 description: 'Travel to Netherlands and launch business',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Residence permit',
 'Business plan',
 'KVK registration',
 ],
 notes: [
 'Register at municipality within 5 days',
 'Obtain BSN number',
 'Open business bank account',
 'Register for VAT if applicable',
 'Begin executing business plan',
 ],
 },
 ],
 },

 'family-reunification': {
 programId: 'nl_family_reunification',
 countryCode: 'NL',
 programName: 'Family Reunification Visa',
 totalEstimatedDuration: '3-6 months',
 complexity: 'medium',
 successRate: '80%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->sponsor-eligibility{Family in NL?}
 sponsor-eligibility -->|Yes| income-verification{Sponsor Meets Income?}
 sponsor-eligibility -->|No| End1([Not Eligible])
 income-verification -->|Yes| relationship-proof[Prove Relationship]
 income-verification -->|No| End2([Not Eligible])
 relationship-proof -->gather-documents[Gather Required Documents]
 gather-documents -->submit-mvv[Submit MVV Application]
 submit-mvv -->processing[Wait for Processing<br/>8-12 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-mvv[Receive MVV]
 decision -->|Rejected| End3([Process Ended])
 receive-mvv -->travel-residence-permit[Travel and Apply for Residence Permit]
 travel-residence-permit -->integration[Begin Integration Course]
 integration --> Success([Process Complete])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style End3 fill:#ffe1e1
 style receive-mvv fill:#e1e5ff
`,
 steps: [
 {
 id: 'sponsor-eligibility',
 title: 'Verify Sponsor Eligibility',
 description: 'Confirm family member in Netherlands meets requirements',
 estimatedDuration: '1 week',
 documents: [
 'Sponsor residence permit or Dutch passport',
 'Sponsor income statements',
 'Sponsor housing contract',
 ],
 notes: [
 'Sponsor must have valid residence permit or be Dutch citizen',
 'Sponsor must meet income requirements',
 'Sponsor must have adequate housing',
 ],
 },
 {
 id: 'income-verification',
 title: 'Verify Income Requirements',
 description: 'Confirm sponsor meets minimum income threshold',
 estimatedDuration: '1 week',
 documents: [
 'Sponsor employment contract',
 'Recent pay slips (3 months)',
 'Tax returns',
 ],
 notes: [
 'Income requirement varies by family size',
 'Must meet 100% of minimum wage',
 'Income must be stable and ongoing',
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
 'Communication records',
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
 'Completed MVV application form',
 'Passport-sized photos',
 'Relationship documents (apostilled)',
 'Sponsor documents',
 'Proof of accommodation',
 'Health insurance certificate',
 'Apostilled birth certificate',
 'Criminal background check',
 ],
 notes: [
 'All documents must be recent (within 6 months)',
 'Apostille required for US documents',
 'Translations must be certified',
 ],
 },
 {
 id: 'submit-mvv',
 title: 'Submit MVV Application',
 description: 'Submit provisional residence visa application',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 350)',
 ],
 notes: [
 'MVV is entry visa for family reunification',
 'Apply at Dutch embassy/consulate in US',
 'Book appointment in advance',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'IND processes MVV application',
 estimatedDuration: '8-12 weeks',
 documents: [],
 notes: [
 'Processing time typically 8-12 weeks',
 'May be contacted for additional documents',
 'Sponsor may be interviewed',
 ],
 },
 {
 id: 'receive-mvv',
 title: 'Receive MVV',
 description: 'Collect approved provisional residence visa',
 estimatedDuration: '1 week',
 documents: [
 'Approval letter',
 'Passport',
 ],
 notes: [
 'MVV valid for 90 days',
 'Must travel to Netherlands within validity period',
 'MVV allows entry to apply for residence permit',
 ],
 },
 {
 id: 'travel-residence-permit',
 title: 'Travel and Apply for Residence Permit',
 description: 'Travel to Netherlands and apply for residence permit',
 estimatedDuration: '2-4 weeks',
 documents: [
 'MVV',
 'Passport',
 'All original documents',
 ],
 notes: [
 'Apply for residence permit at IND within 90 days',
 'Register at municipality',
 'Obtain BSN number',
 ],
 },
 {
 id: 'integration',
 title: 'Begin Integration Course',
 description: 'Start Dutch language and integration course',
 estimatedDuration: 'Ongoing',
 documents: [
 'Integration course registration',
 ],
 notes: [
 'Required to pass integration exam within 3 years',
 'Course covers Dutch language and society',
 'Costs approximately EUR 6,000 (loan available)',
 'Exam required for permanent residence',
 ],
 },
 ],
 },
};

