/**
 * France Immigration Process Flowcharts
 * Defines the step-by-step process for each French visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const franceFlowcharts: Record<string, FlowchartDefinition> = {
 'talent_passport': {
 programId: 'fr_talent_passport',
 countryCode: 'FR',
 programName: 'Talent Passport (Passeport Talent)',
 totalEstimatedDuration: '2-4 months',
 complexity: 'medium',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->choose-category[Choose Category]
 choose-category -->job-offer{Job Offer or Investor?}
 job-offer -->|Skilled Worker| Salary{Salary >= EUR 53,836?}
 job-offer -->|Investor/Researcher| gather-documents[Gather Required Documents]
 Salary -->|Yes| gather-documents
 Salary -->|No| End1([Not Eligible])
 gather-documents -->submit-application[Submit Application]
 submit-application -->processing[Wait for Processing<br/>6-8 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive Talent Passport]
 decision -->|Rejected| End2([Process Ended])
 receive-visa -->travel[Travel to France]
 travel -->prefecture[Register at Prefecture]
 prefecture -->ofii[Complete OFII Process]
 ofii --> Success([Process Complete])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style receive-visa fill:#e1e5ff
`,
 steps: [
 {
 id: 'choose-category',
 title: 'Choose Talent Passport Category',
 description: 'Determine which category you qualify for',
 estimatedDuration: '1 week',
 documents: [
 'Employment contract or investment plan',
 'Qualifications documentation',
 ],
 notes: [
 'Categories: Skilled worker, Researcher, Investor, Company creator, Artist',
 'Each category has different requirements',
 'Skilled worker most common for US citizens',
 ],
 },
 {
 id: 'job-offer',
 title: 'Secure Job Offer (if applicable)',
 description: 'Obtain job offer from French employer',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation ( EUR 53,836+ per year)',
 ],
 notes: [
 'Salary must be at least 1.5x French minimum wage',
 'Contract should be for at least 12 months',
 'Employer does not need special authorization',
 ],
 isConditional: true,
 condition: 'Required for skilled worker category',
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '3-4 weeks',
 documents: [
 'Valid passport (valid for at least 3 months beyond stay)',
 'Completed long-stay visa application form',
 'Passport-sized photos (recent)',
 'Employment contract or investment documents',
 'University degree certificate (with apostille)',
 'Proof of accommodation in France',
 'Proof of health insurance',
 'CV/Resume',
 'Cover letter explaining project',
 ],
 notes: [
 'All documents must be translated to French by certified translator',
 'Degree must be recognized as equivalent to French degree',
 'Health insurance must meet French requirements',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit application to French consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 99)',
 ],
 notes: [
 'Book appointment at French consulate in US',
 'Appointments can be booked 3 months in advance',
 'Bring original documents and copies',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Consulate and prefecture process application',
 estimatedDuration: '6-8 weeks',
 documents: [],
 notes: [
 'Processing time varies by consulate',
 'May be contacted for additional documents',
 'Can take longer during peak seasons',
 ],
 },
 {
 id: 'receive-visa',
 title: 'Receive Talent Passport',
 description: 'Collect approved long-stay visa',
 estimatedDuration: '1 week',
 documents: [
 'Approval letter',
 'Passport',
 ],
 notes: [
 'Initial visa valid for up to 4 years',
 'Allows work in France',
 'Family members can be included',
 ],
 },
 {
 id: 'travel',
 title: 'Travel to France',
 description: 'Enter France with your Talent Passport',
 estimatedDuration: '1 day',
 documents: [
 'Talent Passport visa',
 'Passport',
 'Employment contract',
 ],
 notes: [
 'Must enter France within 3 months of visa issuance',
 'Keep all documents with you',
 ],
 },
 {
 id: 'prefecture',
 title: 'Register at Prefecture',
 description: 'Complete registration at local prefecture',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport with visa',
 'Proof of address',
 'Employment contract',
 ],
 notes: [
 'Must register within 3 months of arrival',
 'Book appointment online',
 'Receive residence permit card (titre de séjour)',
 ],
 },
 {
 id: 'ofii',
 title: 'Complete OFII Process',
 description: 'Medical examination and integration meeting',
 estimatedDuration: '1-2 months',
 documents: [
 'OFII form (provided with visa)',
 'Passport',
 'Proof of address',
 ],
 notes: [
 'OFII: French Office for Immigration and Integration',
 'Medical examination required',
 'Integration meeting covers French values and language',
 'Fee: EUR 200',
 ],
 },
 ],
 },

 'skills_talents': {
 programId: 'fr_skills_talents',
 countryCode: 'FR',
 programName: 'Skills and Talents Visa',
 totalEstimatedDuration: '3-5 months',
 complexity: 'high',
 successRate: '65%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->achievements[Document Achievements]
 achievements -->project-plan[Develop Project Plan]
 project-plan -->experience-verification{5+ Years Experience?}
 experience-verification -->|Yes| gather-documents[Gather Required Documents]
 experience-verification -->|No| End1([Not Eligible])
 gather-documents -->submit-application[Submit Application]
 submit-application -->processing[Wait for Processing<br/>8-12 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive Visa]
 decision -->|Rejected| End2([Process Ended])
 receive-visa -->travel-register[Travel and Register]
 travel-register --> Success([Process Complete])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style receive-visa fill:#e1e5ff
`,
 steps: [
 {
 id: 'achievements',
 title: 'Document Exceptional Achievements',
 description: 'Compile evidence of exceptional talent in your field',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Awards and recognitions',
 'Publications or patents',
 'Media coverage',
 'Letters of recommendation from experts',
 'Portfolio of work',
 ],
 notes: [
 'Must demonstrate exceptional talent or achievements',
 'Recognition should be national or international',
 'Quality over quantity',
 ],
 },
 {
 id: 'project-plan',
 title: 'Develop Project Plan for France',
 description: 'Create detailed plan for your project in France',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Project description (10-20 pages)',
 'Timeline and milestones',
 'Expected impact on French economy/culture',
 'Budget and funding sources',
 ],
 notes: [
 'Project must benefit France',
 'Should demonstrate innovation or cultural value',
 'No job offer required',
 ],
 },
 {
 id: 'experience-verification',
 title: 'Verify Experience Requirements',
 description: 'Confirm you have 5+ years relevant experience',
 estimatedDuration: '1 week',
 documents: [
 'CV/Resume',
 'Employment letters',
 'Contracts or project documentation',
 ],
 notes: [
 'Minimum 5 years professional experience required',
 'Experience must be relevant to proposed project',
 'Can include freelance or entrepreneurial work',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '4-6 weeks',
 documents: [
 'Valid passport',
 'Completed application form',
 'Passport-sized photos',
 'University degree certificate (apostilled)',
 'Project plan',
 'Achievement documentation',
 'Proof of financial resources',
 'Proof of accommodation',
 'Health insurance certificate',
 'Criminal background check',
 ],
 notes: [
 'All documents must be translated to French',
 'Financial resources must cover stay',
 'Strong recommendation letters crucial',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit to French consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 99)',
 ],
 notes: [
 'Book appointment at French consulate',
 'Bring comprehensive portfolio',
 'Be prepared to explain project',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Application reviewed by experts',
 estimatedDuration: '8-12 weeks',
 documents: [],
 notes: [
 'Longer processing due to expert review',
 'Project evaluated for merit and feasibility',
 'May be interviewed',
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
 'Valid for 3 years',
 'Renewable',
 'Allows work related to project',
 ],
 },
 {
 id: 'travel-register',
 title: 'Travel and Register',
 description: 'Travel to France and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Visa',
 'Passport',
 'Project documentation',
 ],
 notes: [
 'Register at prefecture within 3 months',
 'Complete OFII process',
 'Begin executing project',
 ],
 },
 ],
 },

 'french_tech': {
 programId: 'fr_french_tech',
 countryCode: 'FR',
 programName: 'French Tech Visa',
 totalEstimatedDuration: '2-3 months',
 complexity: 'medium',
 successRate: '80%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->ecosystem[Join French Tech Ecosystem]
 ecosystem --> category{Founder or Employee?}
 category -->|Founder| founder-or-employee[Determine Your Path]
 category -->|Employee| founder-or-employee
 founder-or-employee -->incubator-support[Get Incubator Support]
 incubator-support -->gather-documents[Gather Required Documents]
 gather-documents -->submit-application[Submit Application]
 submit-application -->processing[Wait for Processing<br/>4-8 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive French Tech Visa]
 decision -->|Rejected| End1([Process Ended])
 receive-visa -->travel-register[Travel and Launch]
 travel-register --> Success([Process Complete])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style receive-visa fill:#e1e5ff
`,
 steps: [
 {
 id: 'ecosystem',
 title: 'Join French Tech Ecosystem',
 description: 'Get validated by French Tech partner',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Startup pitch deck',
 'Business plan or employment offer',
 ],
 notes: [
 'Must be part of French Tech ecosystem',
 'Partner with incubator, accelerator, or French Tech company',
 'La French Tech maintains list of partners',
 ],
 },
 {
 id: 'founder-or-employee',
 title: 'Determine Your Path',
 description: 'Choose founder or employee track',
 estimatedDuration: '1 day',
 documents: [
 'Business plan (founder) or job offer (employee)',
 ],
 notes: [
 'Founder: Starting tech company in France',
 'Employee: Joining French Tech startup',
 'Investor: Investing in French Tech company',
 ],
 isConditional: true,
 condition: 'Different requirements for each category',
 },
 {
 id: 'incubator-support',
 title: 'Get Incubator/Accelerator Support',
 description: 'Secure support from French Tech partner',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Letter of support from incubator/accelerator',
 'Partnership agreement',
 ],
 notes: [
 'Partner must be recognized by La French Tech',
 'Support letter is crucial for application',
 'Partner validates your tech project',
 ],
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
 'Business plan or employment contract',
 'Letter of support from French Tech partner',
 'Proof of financial resources ( EUR 30,000+ recommended)',
 'University degree certificate',
 'Proof of accommodation',
 'Health insurance',
 ],
 notes: [
 'Financial resources important for founders',
 'Degree not strictly required but helpful',
 'All documents translated to French',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit to French consulate',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 99)',
 ],
 notes: [
 'Fast-track process for French Tech Visa',
 'Book appointment at consulate',
 'Bring letter of support',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Fast-track processing',
 estimatedDuration: '4-8 weeks',
 documents: [],
 notes: [
 'Faster than standard work visa',
 'French Tech support expedites process',
 'Usually approved if partner support is strong',
 ],
 },
 {
 id: 'receive-visa',
 title: 'Receive French Tech Visa',
 description: 'Collect approved visa',
 estimatedDuration: '1 week',
 documents: [
 'Approval letter',
 'Passport',
 ],
 notes: [
 'Valid for 4 years',
 'Renewable',
 'Family members can be included',
 'Allows work in tech sector',
 ],
 },
 {
 id: 'travel-register',
 title: 'Travel and Launch',
 description: 'Travel to France and start your tech journey',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Visa',
 'Passport',
 'Business plan or employment contract',
 ],
 notes: [
 'Register at prefecture',
 'Complete OFII process',
 'Join French Tech community events',
 'Access to French Tech resources and network',
 ],
 },
 ],
 },

 'work_visa': {
 programId: 'fr_work_visa',
 countryCode: 'FR',
 programName: 'Standard Work Visa',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '70%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer]
 job-offer -->labor-market-test[Labor Market Test]
 labor-market-test -->direccte-approval[DIRECCTE Approval]
 direccte-approval --> approved{Approved?}
 approved -->|Yes| gather-documents[Gather Required Documents]
 approved -->|No| End1([Not Eligible])
 gather-documents -->submit-application[Submit Visa Application]
 submit-application -->processing[Wait for Processing<br/>8-12 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive Work Visa]
 decision -->|Rejected| End2([Process Ended])
 receive-visa -->travel-register[Travel and Register]
 travel-register --> Success([Process Complete])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style receive-visa fill:#e1e5ff
`,
 steps: [
 {
 id: 'job-offer',
 title: 'Secure Job Offer',
 description: 'Obtain job offer from French employer',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary details',
 ],
 notes: [
 'Employer must be willing to sponsor',
 'Job must match your qualifications',
 'Salary must meet French standards',
 ],
 },
 {
 id: 'labor-market-test',
 title: 'Labor Market Test',
 description: 'Employer proves no suitable EU candidate available',
 estimatedDuration: '3-4 weeks',
 documents: [
 'Job posting records',
 'Candidate screening documentation',
 ],
 notes: [
 'Employer must advertise position for 3 weeks',
 'Must demonstrate no qualified EU candidates',
 'Some professions exempt from this requirement',
 ],
 },
 {
 id: 'direccte-approval',
 title: 'DIRECCTE Approval',
 description: 'Regional labor authority reviews and approves',
 estimatedDuration: '4-8 weeks',
 documents: [
 'Employment contract',
 'Labor market test results',
 'Company documents',
 ],
 notes: [
 'DIRECCTE: Regional Directorate for Enterprises, Competition, Consumer Affairs, Labor and Employment',
 'Reviews job offer and labor market test',
 'Can request additional information',
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
 'Employment contract',
 'DIRECCTE approval',
 'Educational certificates (apostilled)',
 'Proof of accommodation',
 'Health insurance',
 'CV/Resume',
 ],
 notes: [
 'All documents translated to French',
 'Apostille required for US documents',
 'Keep copies of everything',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Visa Application',
 description: 'Submit to French consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 99)',
 ],
 notes: [
 'Book appointment at French consulate',
 'Bring DIRECCTE approval',
 'Process can take longer than other visa types',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Consulate processes visa application',
 estimatedDuration: '8-12 weeks',
 documents: [],
 notes: [
 'Longer processing due to labor market test',
 'May be contacted for additional documents',
 'Processing time varies by consulate',
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
 'Renewable',
 'Tied to specific employer',
 ],
 },
 {
 id: 'travel-register',
 title: 'Travel and Register',
 description: 'Travel to France and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Visa',
 'Passport',
 'Employment contract',
 ],
 notes: [
 'Register at prefecture within 3 months',
 'Complete OFII process',
 'Begin employment',
 ],
 },
 ],
 },

 'family_reunification': {
 programId: 'fr_family_reunification',
 countryCode: 'FR',
 programName: 'Family Reunification Visa',
 totalEstimatedDuration: '4-8 months',
 complexity: 'medium',
 successRate: '75%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->sponsor-eligibility{Family in France?}
 sponsor-eligibility -->|Yes| income-housing{Sponsor Meets Requirements?}
 sponsor-eligibility -->|No| End1([Not Eligible])
 income-housing -->|Yes| language-test[Pass French Language Test]
 income-housing -->|No| End2([Not Eligible])
 language-test -->gather-documents[Gather Required Documents]
 gather-documents -->submit-application[Submit Application]
 submit-application -->processing[Wait for Processing<br/>12-16 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive Visa]
 decision -->|Rejected| End3([Process Ended])
 receive-visa -->travel[Travel to France]
 travel -->ofii-integration[Complete OFII Integration]
 ofii-integration --> Success([Process Complete])

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
 description: 'Confirm family member in France meets requirements',
 estimatedDuration: '1 week',
 documents: [
 'Sponsor residence permit or French passport',
 'Sponsor income statements',
 'Sponsor housing documents',
 ],
 notes: [
 'Sponsor must have valid residence permit or be French citizen',
 'Must have lived in France for 18+ months',
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
 'Housing adequacy certificate',
 ],
 notes: [
 'Income must be at least minimum wage',
 'Housing must be adequate for family size',
 'May need housing inspection',
 ],
 },
 {
 id: 'language-test',
 title: 'Pass French Language Test',
 description: 'Demonstrate A1 level French proficiency',
 estimatedDuration: '1-3 months',
 documents: [
 'DELF A1 certificate or TCF A1 results',
 ],
 notes: [
 'A1 is basic level French',
 'Test can be taken at Alliance Française or similar',
 'Some exemptions for children and elderly',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '4-6 weeks',
 documents: [
 'Valid passport',
 'Completed application form',
 'Passport-sized photos',
 'Marriage certificate or birth certificates (apostilled)',
 'French language certificate (A1)',
 'Sponsor documents (income, housing)',
 'Proof of relationship',
 'Health insurance',
 'Criminal background check',
 ],
 notes: [
 'All documents must be apostilled',
 'Translations must be certified',
 'Relationship must be proven genuine',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit to French consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 99)',
 ],
 notes: [
 'Book appointment at French consulate',
 'Bring all original documents',
 'May be interviewed',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Application reviewed by OFII and prefecture',
 estimatedDuration: '12-16 weeks',
 documents: [],
 notes: [
 'Longer processing time for family reunification',
 'OFII verifies housing and income',
 'May request additional documents',
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
 'Renewable',
 'Allows work in France',
 ],
 },
 {
 id: 'travel',
 title: 'Travel to France',
 description: 'Enter France with visa',
 estimatedDuration: '1 day',
 documents: [
 'Visa',
 'Passport',
 ],
 notes: [
 'Must enter within 3 months of visa issuance',
 'Keep all documents with you',
 ],
 },
 {
 id: 'ofii-integration',
 title: 'Complete OFII Integration',
 description: 'Medical exam and integration contract',
 estimatedDuration: '2-3 months',
 documents: [
 'OFII form',
 'Passport',
 'Proof of address',
 ],
 notes: [
 'Medical examination required',
 'Sign Republican Integration Contract (CIR)',
 'Attend civic training (4 days)',
 'French language training if needed',
 ],
 },
 ],
 },
};
