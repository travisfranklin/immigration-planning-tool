/**
 * Bulgaria Immigration Process Flowcharts
 * Defines the step-by-step process for each Bulgarian visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const bulgariaFlowcharts: Record<string, FlowchartDefinition> = {
 'bg_eu_blue_card': {
 programId: 'bg_eu_blue_card',
 countryCode: 'BG',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '95%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> job-offer[Secure Job Offer<br/>from Bulgarian Employer]
 job-offer --> verify-education[Verify Higher Education<br/>Requirement]
 verify-education --> gather-documents[Gather Required Documents]
 gather-documents --> submit-application[Submit Application to<br/>Bulgarian Consulate or in Bulgaria]
 submit-application --> receive-card-register[Receive EU Blue Card<br/>and Register in Bulgaria]
 receive-card-register --> Success([Process Complete])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style receive-card-register fill:#e1e5ff
`,
 steps: [
 {
 id: 'job-offer',
 title: 'Secure Job Offer from Bulgarian Employer',
 description: 'Obtain a binding job offer from a registered Bulgarian employer',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 1,500/month = EUR 18,000/year)',
 'Employer registration documents',
 ],
 notes: [
 'Minimum salary: EUR 1,500/month ( EUR 18,000/year)',
 'Same as Hungary, lower than Poland/Czech',
 'Sofia has growing tech scene',
 'LOWEST cost of living in EU!',
 '10% flat tax rate',
 ],
 },
 {
 id: 'verify-education',
 title: 'Verify Higher Education Requirement',
 description: 'Ensure you have a higher education degree (Bachelor\'s or higher)',
 estimatedDuration: '1-2 weeks',
 documents: [
 'University degree (Bachelor\'s, Master\'s, or PhD)',
 'Diploma translation (if not in Bulgarian or English)',
 'Diploma apostille (Hague Convention)',
 ],
 notes: [
 'Bachelor\'s degree minimum',
 'Master\'s or PhD preferred',
 'Degree must be recognized in Bulgaria',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the EU Blue Card application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 6 months)',
 'Employment contract',
 'Higher education degree',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Bulgaria)',
 'Proof of accommodation in Bulgaria',
 'Passport-style photographs (2)',
 ],
 notes: [
 'All documents must be apostilled',
 'Translations to Bulgarian required for non-English documents',
 'Criminal background check must be recent (within 6 months)',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit your EU Blue Card application to Bulgarian authorities',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 100)',
 'Appointment confirmation',
 ],
 notes: [
 'Can submit at Bulgarian Consulate in US or in Bulgaria',
 'Appointment required',
 'Bring original documents and copies',
 ],
 },
 {
 id: 'receive-card-register',
 title: 'Receive EU Blue Card and Register in Bulgaria',
 description: 'Receive your EU Blue Card, travel to Bulgaria, and complete registration',
 estimatedDuration: '30-60 days',
 documents: [
 'EU Blue Card',
 'All original documents',
 'Proof of accommodation',
 ],
 notes: [
 'Processing time: typically 30-60 days',
 'EU Blue Card valid for 3 years',
 'Register at Migration Directorate within 3 days',
 'Sofia has growing tech scene',
 'LOWEST cost of living in EU!',
 '10% flat tax rate (lowest in EU!)',
 'Black Sea coast',
 'PR after 5 years, citizenship after 5 years',
 ],
 },
 ],
 },
 'bg_startup_visa': {
 programId: 'bg_startup_visa',
 countryCode: 'BG',
 programName: 'Startup Visa',
 totalEstimatedDuration: '2-3 months',
 complexity: 'medium',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> develop-business-idea[Develop Innovative<br/>Business Idea]
 develop-business-idea --> verify-funds[Verify Minimum Funds<br/>EUR 5,000 BGN 10,000]
 verify-funds --> apply-program[Apply to Bulgarian<br/>Startup Program]
 apply-program --> gather-documents[Gather Required Documents]
 gather-documents --> receive-visa-register[Receive Visa and<br/>Register Business in Bulgaria]
 receive-visa-register --> Success([Process Complete])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style receive-visa-register fill:#e1e5ff
`,
 steps: [
 {
 id: 'develop-business-idea',
 title: 'Develop Innovative Business Idea',
 description: 'Create a compelling business plan for an innovative startup',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Business plan (detailed)',
 'Market analysis',
 'Financial projections',
 'Product/service description',
 ],
 notes: [
 'Must be innovative and scalable',
 'Tech startups preferred',
 'LOWEST operating costs in EU!',
 ],
 },
 {
 id: 'verify-funds',
 title: 'Verify Minimum Funds',
 description: 'Ensure you have minimum EUR 5,000 (BGN 10,000) in funds',
 estimatedDuration: '1 week',
 documents: [
 'Bank statements (last 3 months)',
 'Proof of funds ( EUR 5,000 minimum)',
 'Source of funds documentation',
 ],
 notes: [
 'Minimum EUR 5,000 (BGN 10,000)',
 'Between Romania ( EUR 4,000) and Czech ( EUR 8,000)',
 'LOWEST operating costs in EU!',
 ],
 },
 {
 id: 'apply-program',
 title: 'Apply to Bulgarian Startup Program',
 description: 'Get accepted by a Bulgarian startup program or incubator',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Business plan',
 'Pitch deck',
 'Team information',
 'Program application',
 ],
 notes: [
 'Sofia startup scene growing',
 'LOWEST operating costs in EU!',
 '10% flat tax',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the startup visa application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 6 months)',
 'Business plan',
 'Proof of funds ( EUR 5,000)',
 'Program acceptance letter',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Bulgaria)',
 'Proof of accommodation in Bulgaria',
 'Passport-style photographs (2)',
 ],
 notes: [
 'All documents must be apostilled',
 'Can bring co-founders',
 ],
 },
 {
 id: 'receive-visa-register',
 title: 'Receive Visa and Register Business in Bulgaria',
 description: 'Receive your startup visa, travel to Bulgaria, and register your business',
 estimatedDuration: '30-60 days',
 documents: [
 'Startup visa',
 'All original documents',
 'Business registration documents',
 ],
 notes: [
 'Processing time: typically 30-60 days',
 'Visa valid for 1 year initially',
 'Renewable',
 'Sofia startup scene growing',
 'LOWEST cost of living in EU!',
 'LOWEST operating costs in EU!',
 '10% flat tax (lowest in EU!)',
 'Black Sea coast',
 'PR after 5 years, citizenship after 5 years',
 ],
 },
 ],
 },

 'bg_work_permit': {
 programId: 'bg_work_permit',
 countryCode: 'BG',
 programName: 'Work Permit (Type D Visa)',
 totalEstimatedDuration: '2-4 months',
 complexity: 'medium',
 successRate: '80%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer]
 job-offer --> Salary{"Salary >= EUR 9,000/year?"}
 Salary -->|Yes| gather-documents[Gather Required Documents]
 Salary -->|No| End1([Not Eligible])
 gather-documents -->submit-application[Submit Application]
 submit-application -->processing[Wait for Processing<br/>6-10 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive Work Permit Visa]
 decision -->|Rejected| End2([Application Denied])
 receive-visa -->travel[Travel to Bulgaria]
 travel -->registration[Register at Immigration Office]
 registration --> Success([Process Complete])

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
 description: 'Obtain a binding job offer from a Bulgarian employer',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 9,000/year)',
 ],
 notes: [
 'Employer must be registered in Bulgaria',
 'Contract must be for at least 12 months',
 'Very low salary threshold (€750/month)',
 'Employer must prove no suitable Bulgarian/EU candidate',
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
 'Employment contract',
 'Proof of qualifications',
 'Criminal background check',
 'Medical certificate',
 'Proof of accommodation',
 ],
 notes: [
 'All documents must be certified copies',
 'Non-Bulgarian documents need translation',
 'Apostille required for foreign documents',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit your work permit visa application',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee',
 ],
 notes: [
 'Submit to Bulgarian embassy/consulate',
 'Book appointment in advance',
 'Bring original documents and copies',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Embassy processes your application',
 estimatedDuration: '6-10 weeks',
 documents: [],
 notes: [
 'Processing time varies by location',
 'May be contacted for additional information',
 'Background checks conducted',
 ],
 },
 {
 id: 'receive-visa',
 title: 'Receive Work Permit Visa',
 description: 'Receive your approved work permit visa',
 estimatedDuration: '1 week',
 documents: [
 'Passport with visa stamp',
 ],
 notes: [
 'Visa valid for 1 year',
 'Can be renewed if employment continues',
 'Leads to permanent residency',
 ],
 },
 {
 id: 'travel',
 title: 'Travel to Bulgaria',
 description: 'Travel to Bulgaria with your work permit visa',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with visa',
 'Employment contract',
 'Proof of accommodation',
 'Travel documents',
 ],
 notes: [
 'Must enter Bulgaria within 6 months of visa issuance',
 'Keep all documents for registration',
 ],
 },
 {
 id: 'registration',
 title: 'Register at Immigration Office',
 description: 'Complete registration at local immigration office',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with visa',
 'Employment contract',
 'Proof of accommodation',
 ],
 notes: [
 'Must register within 3 days of arrival',
 'Receive residence permit card',
 'Can then start employment',
 ],
 },
 ],
 },

 'bg_self_employment': {
 programId: 'bg_self_employment',
 countryCode: 'BG',
 programName: 'Self-Employment Visa',
 totalEstimatedDuration: '2-4 months',
 complexity: 'high',
 successRate: '70%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->business-plan[Create Business Plan]
 business-plan -->capital[Secure Capital EUR 30,000+]
 capital -->gather-documents[Gather Required Documents]
 gather-documents -->submit-application[Submit Application]
 submit-application -->processing[Wait for Processing<br/>8-12 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive Self-Employment Visa]
 decision -->|Rejected| End1([Application Denied])
 receive-visa -->travel[Travel to Bulgaria]
 travel -->registration[Register at Immigration Office]
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
 'Financial projections (3 years)',
 'Service/product description',
 'Market analysis',
 'Marketing strategy',
 ],
 notes: [
 'Plan must demonstrate economic benefit to Bulgaria',
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
 'Funds must be available in Bulgaria',
 'Can be personal savings or investment',
 'Bulgaria has LOWEST cost of living in EU!',
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
 'Criminal background check',
 ],
 notes: [
 'All documents must be certified copies',
 'Non-Bulgarian documents need translation',
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
 'Application fee',
 ],
 notes: [
 'Submit to Bulgarian embassy/consulate',
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
 'Visa valid for 1 year',
 'Can be renewed if business is progressing',
 'Leads to permanent residency',
 ],
 },
 {
 id: 'travel',
 title: 'Travel to Bulgaria',
 description: 'Travel to Bulgaria with your visa',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with visa',
 'Proof of accommodation',
 'Travel documents',
 ],
 notes: [
 'Must enter Bulgaria within 6 months of visa issuance',
 'Keep all documents for registration',
 ],
 },
 {
 id: 'registration',
 title: 'Register at Immigration Office',
 description: 'Complete registration at local immigration office',
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

 'bg_family_reunification': {
 programId: 'bg_family_reunification',
 countryCode: 'BG',
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
 submit-application -->processing[Wait for Processing<br/>10 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive Family Reunification Visa]
 decision -->|Rejected| End3([Application Denied])
 receive-visa -->travel[Travel to Bulgaria]
 travel -->registration[Register at Immigration Office]
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
 description: 'Confirm that your family member in Bulgaria meets sponsorship requirements',
 estimatedDuration: '1 week',
 documents: [
 'Sponsor\'s residence permit or citizenship certificate',
 'Proof of relationship (birth certificate, marriage certificate)',
 'Sponsor\'s employment contract or income documentation',
 ],
 notes: [
 'Sponsor must be Bulgarian resident or citizen',
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
 description: 'Collect all necessary documentation',
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
 'Non-Bulgarian documents need translation',
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
 'Application fee',
 ],
 notes: [
 'Submit to Bulgarian embassy/consulate in home country',
 'Book appointment in advance',
 'Bring original documents and copies',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Embassy processes your application',
 estimatedDuration: '10 weeks',
 documents: [],
 notes: [
 'Processing time typically 10 weeks',
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
 'Visa valid for 1 year',
 'Can be renewed if family situation remains',
 'Leads to permanent residency',
 ],
 },
 {
 id: 'travel',
 title: 'Travel to Bulgaria',
 description: 'Travel to Bulgaria to join your family',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with visa',
 'Sponsor\'s contact information',
 'Travel documents',
 ],
 notes: [
 'Must enter Bulgaria within 6 months of visa issuance',
 'Sponsor should arrange accommodation',
 ],
 },
 {
 id: 'registration',
 title: 'Register at Immigration Office',
 description: 'Complete registration at local immigration office',
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

