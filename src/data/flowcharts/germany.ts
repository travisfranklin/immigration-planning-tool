/**
 * Germany Immigration Process Flowcharts
 * Defines the step-by-step process for each German visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const germanyFlowcharts: Record<string, FlowchartDefinition> = {
 'eu_blue_card': {
 programId: 'de_eu_blue_card',
 countryCode: 'DE',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '3-6 months',
 complexity: 'medium',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer["Secure Job Offer"]
 job-offer --> CheckSalary{"Salary >= EUR 45,300?"}
 CheckSalary -->|Yes| gather-documents["Gather Required Documents"]
 CheckSalary -->|No| End1([Not Eligible])
 gather-documents --> submit-application["Submit Application"]
 submit-application --> processing["Wait for Processing"]
 processing --> decision{Decision}
 decision -->|Approved| travel["Travel to Germany"]
 decision -->|Rejected| End2([Process Ended])
 travel --> registration["Register at Local Office"]
 registration --> Success([Process Complete])`,
 steps: [
 {
 id: 'job-offer',
 title: 'Secure Job Offer',
 description: 'Obtain a binding job offer from a German employer',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description detailing responsibilities',
 'Salary confirmation (minimum EUR 45,300/year)',
 ],
 notes: [
 'Salary threshold is EUR 45,300 for most professions',
 'Lower threshold of EUR 41,041.80 for shortage occupations',
 'Contract must be for at least 12 months',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation for the application',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Valid passport (valid for at least 6 months)',
 'Completed application form',
 'Passport-sized photos (biometric)',
 'University degree certificate (with apostille)',
 'Employment contract',
 'Proof of health insurance',
 'Proof of accommodation in Germany',
 'CV/Resume',
 ],
 notes: [
 'All documents must be translated to German by certified translator',
 'Degree must be recognized as equivalent to German degree',
 'Health insurance must meet German requirements',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit your Blue Card application to the German embassy/consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 75-100)',
 ],
 notes: [
 'Book appointment well in advance (can take 4-8 weeks)',
 'Some consulates allow online submission',
 'Bring original documents and copies',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Embassy processes your application and conducts background checks',
 estimatedDuration: '2-3 months',
 documents: [],
 notes: [
 'Processing time varies by consulate',
 'May be contacted for additional documents',
 'Can track status online in some cases',
 ],
 },
 {
 id: 'decision',
 title: 'Receive Decision',
 description: 'Get notification of approval or rejection',
 estimatedDuration: '1 week',
 documents: [],
 isConditional: true,
 condition: 'Application approved',
 notes: [
 'If approved, passport will be stamped with visa',
 'If rejected, you can appeal within 1 month',
 'Rejection reasons must be provided in writing',
 ],
 },
 {
 id: 'travel',
 title: 'Travel to Germany',
 description: 'Enter Germany with your Blue Card visa',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with Blue Card visa',
 'Employment contract',
 'Proof of accommodation',
 'Health insurance documents',
 ],
 notes: [
 'Must enter Germany within 3 months of visa issuance',
 'Bring all original documents',
 'May be questioned at border control',
 ],
 },
 {
 id: 'registration',
 title: 'Register at Local Office',
 description: 'Complete registration at local Ausländerbehörde (foreigners office)',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport',
 'Employment contract',
 'Proof of accommodation (Wohnungsgeberbestätigung)',
 'Health insurance certificate',
 'Biometric photo',
 ],
 notes: [
 'Must register within 2 weeks of arrival',
 'Will receive residence permit card',
 'Card is valid for up to 4 years',
 ],
 },
 ],
 },

 'work_visa': {
 programId: 'de_work_visa',
 countryCode: 'DE',
 programName: 'Skilled Worker Visa',
 totalEstimatedDuration: '3-6 months',
 complexity: 'medium',
 successRate: '80%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer]
 job-offer --> recognition[Get Degree Recognition]
 recognition --> gather-documents[Gather Required Documents]
 gather-documents --> submit-application[Submit Application]
 submit-application --> processing[Wait for Processing<br/>2-3 months]
 processing --> decision{Decision}
 decision -->|Approved| travel[Receive Visa]
 decision -->|Rejected| End([Process Ended])
 travel --> registration[Travel to Germany]
 registration --> Success([Process Complete])`,
 steps: [
 {
 id: 'job-offer',
 title: 'Secure Job Offer',
 description: 'Obtain a job offer from a German employer',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description',
 ],
 notes: [
 'No minimum salary requirement (unlike Blue Card)',
 'Job must match your qualifications',
 ],
 },
 {
 id: 'recognition',
 title: 'Get Degree Recognition',
 description: 'Have your foreign qualifications recognized in Germany',
 estimatedDuration: '2-4 months',
 documents: [
 'University degree certificate',
 'Transcript of records',
 'Proof of professional experience',
 ],
 notes: [
 'Apply to ZAB (Central Office for Foreign Education)',
 'May require additional exams or training',
 'Recognition is mandatory for regulated professions',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Valid passport',
 'Application form',
 'Photos',
 'Degree recognition certificate',
 'Employment contract',
 'Health insurance proof',
 'Accommodation proof',
 'CV',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit to German embassy/consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Application review and background checks',
 estimatedDuration: '2-3 months',
 documents: [],
 },
 {
 id: 'decision',
 title: 'Receive Decision',
 description: 'Get approval or rejection notification',
 estimatedDuration: '1 week',
 documents: [],
 isConditional: true,
 condition: 'Application approved',
 },
 {
 id: 'travel',
 title: 'Travel to Germany',
 description: 'Enter Germany with your visa',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with visa',
 'Employment contract',
 'Accommodation proof',
 ],
 },
 {
 id: 'registration',
 title: 'Register at Local Office',
 description: 'Complete registration process',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport',
 'Employment contract',
 'Accommodation proof',
 'Health insurance',
 ],
 },
 ],
 },

 'job_seeker': {
 programId: 'de_job_seeker',
 countryCode: 'DE',
 programName: 'Job Seeker Visa',
 totalEstimatedDuration: '6-12 months',
 complexity: 'medium',
 successRate: '70%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->degree-recognition[Have Recognized Degree]
 degree-recognition --> financial-proof{Sufficient Funds?}
 financial-proof -->|Yes| gather-documents[Gather Required Documents]
 financial-proof -->|No| End1([Not Eligible])
 gather-documents --> submit-application[Submit Application]
 submit-application --> processing[Wait for Processing<br/>4-8 weeks]
 processing --> decision{Decision}
 decision -->|Approved| travel[Receive Job Seeker Visa]
 decision -->|Rejected| End2([Process Ended])
 travel --> job-search[Search for Job<br/>6 months]
 job-search --> JobFound{Job Offer?}
 JobFound -->|Yes| conversion[Convert to Work Visa]
 JobFound -->|No| Extend{Extend Visa?}
 Extend -->|Yes| job-search[Continue Search]
 Extend -->|No| Return[Return Home]
 conversion --> Success([Process Complete])
 job-search --> job-search
 Return --> End2`,
 steps: [
 {
 id: 'degree-recognition',
 title: 'Verify Degree Recognition',
 description: 'Ensure your degree is recognized in Germany',
 estimatedDuration: '2-4 months',
 documents: [
 'University degree certificate',
 'Transcript of records',
 'Degree recognition certificate from ZAB',
 ],
 notes: [
 'Apply to ZAB (Central Office for Foreign Education)',
 'Recognition process can take 2-4 months',
 'Some degrees are automatically recognized',
 ],
 },
 {
 id: 'financial-proof',
 title: 'Prepare Financial Proof',
 description: 'Show sufficient funds to support yourself',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Bank statements (last 3 months)',
 'Blocked account (Sperrkonto) with EUR 1,027/month',
 'Proof of health insurance',
 ],
 notes: [
 'Need approximately EUR 6,000-12,000 for 6 months',
 'Blocked account is recommended',
 'Must show ability to support yourself without working',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Valid passport',
 'Application form',
 'Photos',
 'Degree recognition certificate',
 'Financial proof',
 'Health insurance',
 'Accommodation proof',
 'CV',
 'Motivation letter',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit to German embassy/consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee ( EUR 75)',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Embassy processes application',
 estimatedDuration: '4-8 weeks',
 documents: [],
 },
 {
 id: 'decision',
 title: 'Receive Decision',
 description: 'Get approval or rejection',
 estimatedDuration: '1 week',
 documents: [],
 isConditional: true,
 condition: 'Application approved',
 },
 {
 id: 'travel',
 title: 'Travel to Germany',
 description: 'Enter Germany with job seeker visa',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with visa',
 'Financial proof',
 'Accommodation proof',
 ],
 },
 {
 id: 'job-search',
 title: 'Search for Employment',
 description: 'Look for job matching your qualifications',
 estimatedDuration: 'Up to 6 months',
 documents: [],
 notes: [
 'Visa valid for 6 months',
 'Cannot work during this period (except trial work)',
 'Must find job matching your qualifications',
 'Can extend once if good prospects',
 ],
 },
 {
 id: 'conversion',
 title: 'Convert to Work Visa',
 description: 'Convert job seeker visa to work visa',
 estimatedDuration: '4-8 weeks',
 documents: [
 'Job offer/contract',
 'Employer documentation',
 ],
 isConditional: true,
 condition: 'Job offer received',
 notes: [
 'Must convert before visa expires',
 'Can be done within Germany',
 'No need to return home',
 ],
 },
 ],
 },

 'freelance': {
 programId: 'de_freelance',
 countryCode: 'DE',
 programName: 'Freelance Visa (Freiberufler)',
 totalEstimatedDuration: '3-6 months',
 complexity: 'high',
 successRate: '60%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->business-plan["Develop Business Plan"]
 business-plan --> client-commitments["Secure Client Commitments"]
 client-commitments --> financial-proof{Sufficient Funds?}
 financial-proof -->|Yes| gather-documents["Gather Required Documents"]
 financial-proof -->|No| End1([Not Eligible])
 gather-documents --> submit-application["Submit Application"]
 submit-application --> interview["Attend Interview"]
 interview --> processing["Wait for Decision"]
 processing --> decision{Decision}
 decision -->|Approved| travel["Travel to Germany"]
 decision -->|Rejected| End2([Process Ended])
 travel --> registration["Register Business"]
 registration --> Success([Start Freelancing])`,
 steps: [
 {
 id: 'business-plan',
 title: 'Develop Business Plan',
 description: 'Create comprehensive business plan',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Detailed business plan (in German)',
 'Market analysis',
 'Financial projections (3 years)',
 'Portfolio of work',
 ],
 notes: [
 'Must demonstrate economic benefit to Germany',
 'Show how your work serves German market',
 'Include detailed financial projections',
 'Consider hiring German business consultant',
 ],
 },
 {
 id: 'client-commitments',
 title: 'Secure Client Commitments',
 description: 'Get letters of intent from potential clients',
 estimatedDuration: '1-3 months',
 documents: [
 'Letters of intent from German clients',
 'Contracts or agreements',
 'Proof of client relationships',
 ],
 notes: [
 'Having German clients strengthens application',
 'Show sustainable income potential',
 'International clients also acceptable',
 ],
 },
 {
 id: 'financial-proof',
 title: 'Prepare Financial Proof',
 description: 'Show sufficient startup capital',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Bank statements',
 'Proof of savings ( EUR 10,000+ recommended)',
 'Health insurance proof',
 ],
 notes: [
 'Need funds to support yourself initially',
 'Higher amounts improve approval chances',
 'Must show financial stability',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Valid passport',
 'Application form',
 'Photos',
 'Business plan',
 'Client commitments',
 'Financial proof',
 'Health insurance',
 'Accommodation proof',
 'CV and portfolio',
 'Relevant qualifications/certifications',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit to German embassy/consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee',
 ],
 },
 {
 id: 'interview',
 title: 'Attend Interview',
 description: 'Interview with embassy officials',
 estimatedDuration: '1-2 weeks',
 documents: [],
 notes: [
 'Be prepared to explain business plan in detail',
 'May need to present in German',
 'Demonstrate commitment and viability',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Decision',
 description: 'Application review by authorities',
 estimatedDuration: '2-3 months',
 documents: [],
 notes: [
 'May request additional information',
 'Processing time varies significantly',
 'Freelance visas are discretionary',
 ],
 },
 {
 id: 'decision',
 title: 'Receive Decision',
 description: 'Get approval or rejection',
 estimatedDuration: '1 week',
 documents: [],
 isConditional: true,
 condition: 'Application approved',
 },
 {
 id: 'travel',
 title: 'Travel to Germany',
 description: 'Enter Germany with freelance visa',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with visa',
 'Business plan',
 'Financial proof',
 ],
 },
 {
 id: 'registration',
 title: 'Register Business',
 description: 'Register as freelancer with authorities',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport',
 'Residence permit',
 'Business registration (Gewerbeanmeldung)',
 'Tax number application',
 ],
 notes: [
 'Register at local Finanzamt (tax office)',
 'Get tax number (Steuernummer)',
 'Register for health insurance',
 'May need to register with professional chamber',
 ],
 },
 ],
 },

 'family_reunification': {
 programId: 'de_family_reunification',
 countryCode: 'DE',
 programName: 'Family Reunification Visa',
 totalEstimatedDuration: '3-6 months',
 complexity: 'medium',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->verify-sponsor{Sponsor in Germany?}
 verify-sponsor -->|Yes| relationship-proof[Determine Sponsor Type]
 verify-sponsor -->|No| End1([Not Eligible])
 relationship-proof --> language-requirement{Language Required?}
 language-requirement -->|Yes| financial-requirements[Obtain A1 Certificate]
 language-requirement -->|No| health-insurance[Arrange Insurance]
 financial-requirements --> health-insurance
 health-insurance --> gather-documents[Gather Documents]
 gather-documents --> submit-application[Submit Application]
 submit-application --> processing[Wait for Processing<br/>2-3 months]
 processing --> decision{Decision}
 decision -->|Approved| travel[Receive Visa]
 decision -->|Rejected| End2([Process Ended])
 travel --> registration[Travel to Germany]
 registration --> Success([Reunited in Germany])`,
 steps: [
 {
 id: 'verify-sponsor',
 title: 'Verify Sponsor Eligibility',
 description: 'Ensure sponsor meets requirements',
 estimatedDuration: '1 week',
 documents: [
 'Sponsor\'s residence permit',
 'Proof of relationship',
 'Sponsor\'s employment contract',
 'Sponsor\'s income proof',
 ],
 notes: [
 'Sponsor must have valid residence permit',
 'Sponsor must have adequate living space',
 'Sponsor must have sufficient income',
 'Different requirements for different family members',
 ],
 },
 {
 id: 'relationship-proof',
 title: 'Prove Relationship',
 description: 'Document family relationship',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Marriage certificate (for spouse)',
 'Birth certificate (for children/parents)',
 'Partnership certificate (for registered partners)',
 ],
 notes: [
 'Documents must be apostilled',
 'Translations required (certified)',
 'Recent documents preferred',
 ],
 },
 {
 id: 'language-requirement',
 title: 'Meet Language Requirement',
 description: 'Obtain German language certificate if required',
 estimatedDuration: '2-6 months',
 documents: [
 'German A1 certificate (for spouses)',
 ],
 isConditional: true,
 condition: 'Required for spouses (some exceptions apply)',
 notes: [
 'Spouses typically need A1 level',
 'Exceptions for highly skilled workers\' families',
 'Exceptions for EU Blue Card holders\' families',
 'Children under 16 exempt',
 ],
 },
 {
 id: 'financial-requirements',
 title: 'Meet Financial Requirements',
 description: 'Sponsor shows adequate income and housing',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Sponsor\'s employment contract',
 'Sponsor\'s salary slips (last 3 months)',
 'Rental contract or property deed',
 'Proof of adequate living space',
 ],
 notes: [
 'Income must cover entire family',
 'Living space requirements vary by family size',
 'Typically need 12m² per person + 10m² base',
 ],
 },
 {
 id: 'health-insurance',
 title: 'Arrange Health Insurance',
 description: 'Obtain health insurance coverage',
 estimatedDuration: '1 week',
 documents: [
 'Health insurance confirmation',
 ],
 notes: [
 'Can be added to sponsor\'s insurance',
 'Must cover from arrival date',
 'Private or public insurance accepted',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather All Documents',
 description: 'Collect complete application package',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Valid passport',
 'Application form',
 'Photos',
 'Relationship proof',
 'Language certificate (if required)',
 'Sponsor\'s documents',
 'Financial proof',
 'Health insurance',
 'Accommodation proof',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit to German embassy/consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee ( EUR 75)',
 ],
 notes: [
 'Apply at embassy in country of residence',
 'May need appointment',
 'Processing times vary by location',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Embassy processes application',
 estimatedDuration: '2-3 months',
 documents: [],
 notes: [
 'Processing time varies significantly',
 'May request additional documents',
 'Can take longer in some countries',
 ],
 },
 {
 id: 'decision',
 title: 'Receive Decision',
 description: 'Get approval or rejection',
 estimatedDuration: '1 week',
 documents: [],
 isConditional: true,
 condition: 'Application approved',
 },
 {
 id: 'travel',
 title: 'Travel to Germany',
 description: 'Enter Germany with family reunification visa',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with visa',
 'Relationship documents',
 'Health insurance',
 ],
 },
 {
 id: 'registration',
 title: 'Register with Authorities',
 description: 'Complete registration process',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport',
 'Visa',
 'Rental contract',
 'Marriage/birth certificate',
 ],
 notes: [
 'Register at local Bürgeramt within 2 weeks',
 'Apply for residence permit at Ausländerbehörde',
 'Register for health insurance',
 'Enroll children in school if applicable',
 ],
 },
 ],
 },
};

