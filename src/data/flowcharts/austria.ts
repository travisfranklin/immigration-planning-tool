/**
 * Austria Immigration Process Flowcharts
 * Defines the step-by-step process for each Austrian visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const austriaFlowcharts: Record<string, FlowchartDefinition> = {
 'at_eu_blue_card': {
 programId: 'at_eu_blue_card',
 countryCode: 'AT',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer]
 job-offer --> Salary{"Salary >= EUR 51,500?"}
 Salary -->|Yes| gather-documents[Gather Required Documents]
 Salary -->|No| End1([Not Eligible])
 gather-documents --> submit-application[Submit Application]
 submit-application --> processing[Wait for Processing<br/>8 weeks]
 processing --> Decision{Decision}
 Decision -->|Approved| Visa[Receive Blue Card]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Visa --> arrival[Travel to Austria]
 arrival --> Register[Register at MA35]
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
 description: 'Obtain a binding job offer from an Austrian employer',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 51,500/year)',
 ],
 notes: [
 'Employer must be registered in Austria',
 'Contract must be for at least 12 months',
 'Salary threshold updated annually',
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
 'Proof of accommodation in Austria',
 'CV/Resume',
 ],
 notes: [
 'All documents must be translated to German by certified translator',
 'Degree must be recognized as equivalent to Austrian degree',
 'Health insurance must meet Austrian requirements',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit your Blue Card application to the Austrian embassy/consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 160-200)',
 ],
 notes: [
 'Book appointment in advance',
 'Bring original documents and copies',
 'Some documents may need apostille',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Embassy processes your application',
 estimatedDuration: '8 weeks',
 documents: [],
 notes: [
 'Processing time is typically 8 weeks',
 'May be contacted for additional documents',
 'Background checks conducted',
 ],
 },
 {
 id: 'arrival',
 title: 'Arrival and Registration',
 description: 'Travel to Austria and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport with visa',
 'Employment contract',
 'Proof of accommodation',
 'Health insurance card',
 ],
 notes: [
 'Register at MA35 (Vienna) or local immigration office',
 'Must register within 3 days of arrival',
 'Receive residence permit card',
 ],
 },
 ],
 },
 'at_red_white_red': {
 programId: 'at_red_white_red',
 countryCode: 'AT',
 programName: 'Red-White-Red Card',
 totalEstimatedDuration: '3-5 months',
 complexity: 'high',
 successRate: '75%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> Category[Choose Category]
 Category -->points-calculation{Calculate Points}
 points-calculation -->|>= 70 points| job-offer[Secure Job Offer]
 points-calculation -->|< 70 points| End1([Not Eligible])
 job-offer --> Salary{"Salary >= EUR 38,700?"}
 Salary -->|Yes| gather-documents[Gather Required Documents]
 Salary -->|No| End1
 gather-documents --> submit-application[Submit Application]
 submit-application --> processing[Wait for Processing<br/>8 weeks]
 processing --> Decision{Decision}
 Decision -->|Approved| Visa[Receive RWR Card]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Visa --> arrival[Travel to Austria]
 arrival --> Register[Register at MA35]
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
 id: 'points-calculation',
 title: 'Calculate Points',
 description: 'Assess your eligibility using the points-based system',
 estimatedDuration: '1 week',
 documents: [
 'Educational certificates',
 'Work experience documentation',
 'Language certificates (German)',
 'Age verification',
 ],
 notes: [
 'Minimum 70 points required',
 'Points awarded for: education, work experience, language skills, age',
 'Use official points calculator on migration.gv.at',
 'Higher education = more points',
 'German language skills highly valued',
 ],
 },
 {
 id: 'job-offer',
 title: 'Secure Job Offer',
 description: 'Obtain job offer matching your qualifications',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 38,700/year)',
 ],
 notes: [
 'Job must match your qualifications',
 'Employer must demonstrate need for foreign worker',
 'Salary threshold lower than EU Blue Card',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Valid passport',
 'Completed application form',
 'Photos (biometric)',
 'Degree certificates (apostilled)',
 'Employment contract',
 'Points calculation documentation',
 'Language certificates',
 'Proof of health insurance',
 'Proof of accommodation',
 ],
 notes: [
 'All documents in German or with certified translation',
 'Degree recognition may be required',
 'Language certificates must be from recognized institutions',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit RWR Card application',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee ( EUR 160-200)',
 ],
 notes: [
 'Apply at Austrian embassy/consulate',
 'Book appointment in advance',
 'Bring originals and copies',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Application review and decision',
 estimatedDuration: '8 weeks',
 documents: [],
 notes: [
 'Points verification conducted',
 'Employer may be contacted',
 'Background checks performed',
 ],
 },
 {
 id: 'arrival',
 title: 'Arrival and Registration',
 description: 'Travel to Austria and register',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport with visa',
 'Employment contract',
 'Proof of accommodation',
 ],
 notes: [
 'Register at MA35 or local office within 3 days',
 'Receive residence permit card',
 'Can apply for PR after 21 months with German skills',
 ],
 },
 ],
 },

 'at_startup': {
 programId: 'at_startup',
 countryCode: 'AT',
 programName: 'Startup Visa (Start-up Founders)',
 totalEstimatedDuration: '2-4 months',
 complexity: 'high',
 successRate: '70%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->business-idea[Develop Innovative Business Idea]
 business-idea -->business-plan[Create Detailed Business Plan]
 business-plan -->funding[Secure Funding EUR 50,000+]
 funding -->gather-documents[Gather Required Documents]
 gather-documents -->submit-application[Submit Application]
 submit-application -->processing[Wait for Processing<br/>8-12 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive Startup Visa]
 decision -->|Rejected| End1([Application Denied])
 receive-visa -->travel[Travel to Austria]
 travel -->registration[Register at MA35]
 registration --> Success([Process Complete])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style receive-visa fill:#e1e5ff
`,
 steps: [
 {
 id: 'business-idea',
 title: 'Develop Innovative Business Idea',
 description: 'Develop an innovative business concept that meets Austrian startup criteria',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Business concept description',
 'Market analysis',
 'Competitive analysis',
 ],
 notes: [
 'Idea must be innovative and viable',
 'Should address a market need',
 'Consider scalability potential',
 ],
 },
 {
 id: 'business-plan',
 title: 'Create Detailed Business Plan',
 description: 'Prepare a comprehensive business plan for your startup',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Executive summary',
 'Financial projections (3-5 years)',
 'Marketing strategy',
 'Organizational structure',
 'Risk analysis',
 ],
 notes: [
 'Plan must be in German or English',
 'Include realistic financial forecasts',
 'Show understanding of target market',
 ],
 },
 {
 id: 'funding',
 title: 'Secure Funding',
 description: 'Obtain minimum EUR 50,000 in startup capital',
 estimatedDuration: '4-8 weeks',
 documents: [
 'Bank statements showing funds',
 'Investment agreements (if applicable)',
 'Proof of capital source',
 ],
 notes: [
 'Minimum EUR 50,000 required',
 'Funds must be available in Austria',
 'Can be personal savings or investment',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation for the application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport',
 'Completed application form',
 'Business plan',
 'Proof of funding',
 'CV/Resume',
 'Proof of accommodation in Austria',
 'Health insurance',
 ],
 notes: [
 'All documents must be certified copies',
 'Non-German documents need translation',
 'Apostille required for foreign documents',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit your startup visa application',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee (EUR 160-200)',
 ],
 notes: [
 'Submit to Austrian embassy/consulate',
 'Book appointment in advance',
 'Bring original documents and copies',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Embassy processes your application',
 estimatedDuration: '8-12 weeks',
 documents: [],
 notes: [
 'Processing time varies by location',
 'May be contacted for additional information',
 'Background checks conducted',
 ],
 },
 {
 id: 'receive-visa',
 title: 'Receive Startup Visa',
 description: 'Receive your approved startup visa',
 estimatedDuration: '1 week',
 documents: [
 'Passport with visa stamp',
 ],
 notes: [
 'Visa valid for 2 years',
 'Can be renewed if business is progressing',
 'Leads to permanent residency',
 ],
 },
 {
 id: 'travel',
 title: 'Travel to Austria',
 description: 'Travel to Austria with your startup visa',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with visa',
 'Proof of accommodation',
 'Travel documents',
 ],
 notes: [
 'Must enter Austria within 6 months of visa issuance',
 'Keep all documents for registration',
 ],
 },
 {
 id: 'registration',
 title: 'Register at MA35',
 description: 'Complete registration at MA35 (Vienna) or local immigration office',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with visa',
 'Proof of accommodation',
 'Health insurance',
 ],
 notes: [
 'Must register within 3 days of arrival',
 'Receive residence permit card',
 'Can then register business',
 ],
 },
 ],
 },

 'at_self_employed': {
 programId: 'at_self_employed',
 countryCode: 'AT',
 programName: 'Self-Employment Visa (Self-employed Key Workers)',
 totalEstimatedDuration: '2-4 months',
 complexity: 'high',
 successRate: '65%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->business-plan[Create Business Plan]
 business-plan -->capital[Secure Capital EUR 30,000+]
 capital -->qualifications[Verify Professional Qualifications]
 qualifications -->gather-documents[Gather Required Documents]
 gather-documents -->submit-application[Submit Application]
 submit-application -->processing[Wait for Processing<br/>8-12 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive Self-Employment Visa]
 decision -->|Rejected| End1([Application Denied])
 receive-visa -->travel[Travel to Austria]
 travel -->registration[Register at MA35]
 registration --> Success([Process Complete])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style receive-visa fill:#e1e5ff
`,
 steps: [
 {
 id: 'business-plan',
 title: 'Create Business Plan',
 description: 'Develop a comprehensive business plan for your self-employment',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Executive summary',
 'Financial projections',
 'Service/product description',
 'Market analysis',
 ],
 notes: [
 'Plan must demonstrate economic benefit to Austria',
 'Include realistic financial forecasts',
 'Show market demand for services',
 ],
 },
 {
 id: 'capital',
 title: 'Secure Capital',
 description: 'Obtain minimum EUR 30,000 in startup capital',
 estimatedDuration: '4-8 weeks',
 documents: [
 'Bank statements',
 'Proof of capital source',
 'Investment agreements (if applicable)',
 ],
 notes: [
 'Minimum EUR 30,000 required',
 'Funds must be available in Austria',
 'Can be personal savings or investment',
 ],
 },
 {
 id: 'qualifications',
 title: 'Verify Professional Qualifications',
 description: 'Ensure your qualifications meet Austrian requirements',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Educational certificates',
 'Professional licenses/certifications',
 'Work experience documentation',
 'Language certificates (German B1+)',
 ],
 notes: [
 'Qualifications must be recognized in Austria',
 'May need to obtain Austrian recognition',
 'German language skills important',
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
 'Business plan',
 'Proof of capital',
 'CV/Resume',
 'Proof of accommodation',
 'Health insurance',
 'Professional qualifications',
 ],
 notes: [
 'All documents must be certified copies',
 'Non-German documents need translation',
 'Apostille required for foreign documents',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit your self-employment visa application',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee (EUR 160-200)',
 ],
 notes: [
 'Submit to Austrian embassy/consulate',
 'Book appointment in advance',
 'Bring original documents and copies',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Embassy processes your application',
 estimatedDuration: '8-12 weeks',
 documents: [],
 notes: [
 'Processing time varies by location',
 'May be contacted for additional information',
 'Background checks conducted',
 ],
 },
 {
 id: 'receive-visa',
 title: 'Receive Self-Employment Visa',
 description: 'Receive your approved self-employment visa',
 estimatedDuration: '1 week',
 documents: [
 'Passport with visa stamp',
 ],
 notes: [
 'Visa valid for 2 years',
 'Can be renewed if business is progressing',
 'Leads to permanent residency',
 ],
 },
 {
 id: 'travel',
 title: 'Travel to Austria',
 description: 'Travel to Austria with your visa',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with visa',
 'Proof of accommodation',
 'Travel documents',
 ],
 notes: [
 'Must enter Austria within 6 months of visa issuance',
 'Keep all documents for registration',
 ],
 },
 {
 id: 'registration',
 title: 'Register at MA35',
 description: 'Complete registration at MA35 or local immigration office',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with visa',
 'Proof of accommodation',
 'Health insurance',
 ],
 notes: [
 'Must register within 3 days of arrival',
 'Receive residence permit card',
 'Can then register business',
 ],
 },
 ],
 },

 'at_family_reunification': {
 programId: 'at_family_reunification',
 countryCode: 'AT',
 programName: 'Family Reunification',
 totalEstimatedDuration: '3-6 months',
 complexity: 'medium',
 successRate: '75%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->sponsor-check[Verify Sponsor Eligibility]
 sponsor-check -->income-check{Sponsor Income Sufficient?}
 income-check -->|Yes| housing-check[Verify Housing Requirements]
 income-check -->|No| End1([Not Eligible])
 housing-check --> housing-ok{Housing Adequate?}
 housing-ok -->|Yes| gather-documents[Gather Required Documents]
 housing-ok -->|No| End2([Not Eligible])
 gather-documents -->submit-application[Submit Application]
 submit-application -->processing[Wait for Processing<br/>12 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive Family Reunification Visa]
 decision -->|Rejected| End3([Application Denied])
 receive-visa -->travel[Travel to Austria]
 travel -->registration[Register at MA35]
 registration --> Success([Process Complete])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style End3 fill:#ffe1e1
 style receive-visa fill:#e1e5ff
`,
 steps: [
 {
 id: 'sponsor-check',
 title: 'Verify Sponsor Eligibility',
 description: 'Confirm that your family member in Austria meets sponsorship requirements',
 estimatedDuration: '1 week',
 documents: [
 'Sponsor\'s residence permit or citizenship certificate',
 'Proof of relationship (birth certificate, marriage certificate)',
 'Sponsor\'s employment contract or income documentation',
 ],
 notes: [
 'Sponsor must be Austrian resident or citizen',
 'Sponsor must have stable income',
 'Relationship must be documented',
 ],
 },
 {
 id: 'income-check',
 title: 'Verify Sponsor Income',
 description: 'Ensure sponsor has adequate income to support family member',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Last 3 months of pay stubs',
 'Employment contract',
 'Tax returns (last 2 years)',
 'Bank statements',
 ],
 notes: [
 'Income must be above minimum threshold',
 'Threshold varies by family size',
 'Self-employed must show business registration',
 ],
 },
 {
 id: 'housing-check',
 title: 'Verify Housing Requirements',
 description: 'Confirm adequate housing for family member',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Lease or property ownership document',
 'Proof of housing size (floor plan)',
 'Utility bills showing residence',
 ],
 notes: [
 'Housing must meet minimum size requirements',
 'Typically 1 room per person',
 'Must be in sponsor\'s name or with permission',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation for the application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport',
 'Completed application form',
 'Proof of relationship',
 'Sponsor\'s residence permit/citizenship',
 'Sponsor\'s income documentation',
 'Housing documentation',
 'Health insurance',
 'Police clearance certificate',
 ],
 notes: [
 'All documents must be certified copies',
 'Non-German documents need translation',
 'Apostille required for foreign documents',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit your family reunification visa application',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee (EUR 160-200)',
 ],
 notes: [
 'Submit to Austrian embassy/consulate in home country',
 'Book appointment in advance',
 'Bring original documents and copies',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Embassy processes your application',
 estimatedDuration: '12 weeks',
 documents: [],
 notes: [
 'Processing time typically 12 weeks',
 'May be contacted for additional information',
 'Background checks conducted',
 ],
 },
 {
 id: 'receive-visa',
 title: 'Receive Family Reunification Visa',
 description: 'Receive your approved family reunification visa',
 estimatedDuration: '1 week',
 documents: [
 'Passport with visa stamp',
 ],
 notes: [
 'Visa valid for 2 years',
 'Can be renewed if family situation remains',
 'Leads to permanent residency',
 ],
 },
 {
 id: 'travel',
 title: 'Travel to Austria',
 description: 'Travel to Austria to join your family',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with visa',
 'Sponsor\'s contact information',
 'Travel documents',
 ],
 notes: [
 'Must enter Austria within 6 months of visa issuance',
 'Sponsor should arrange accommodation',
 ],
 },
 {
 id: 'registration',
 title: 'Register at MA35',
 description: 'Complete registration at MA35 or local immigration office',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with visa',
 'Proof of accommodation',
 'Sponsor\'s residence permit',
 ],
 notes: [
 'Must register within 3 days of arrival',
 'Receive residence permit card',
 'Can then access social services',
 ],
 },
 ],
 },
};

