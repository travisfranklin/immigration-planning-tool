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
 job-offer --> Salary{"Salary >= EUR 63,408?"}
 Salary -->|Yes| gather-documents[Gather Required Documents]
 Salary -->|No| End1([Not Eligible])
 gather-documents -->work-authorization[Apply for Work Authorization]
 work-authorization --> WaitAuth[Wait for Authorization<br/>3-4 weeks]
 WaitAuth --> AuthDecision{Authorization Approved?}
 AuthDecision -->|Yes| visa-application[Apply for Visa]
 AuthDecision -->|No| End2([Application Denied])
 visa-application --> WaitVisa[Wait for Visa<br/>4-6 weeks]
 WaitVisa --> VisaDecision{Visa Approved?}
 VisaDecision -->|Approved| Visa[Receive Blue Card]
 VisaDecision -->|Rejected| Appeal[Consider Appeal]
 Visa -->arrival[Travel to Luxembourg]
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
 JobOffer --> Salary{"Salary >= EUR 55,000?"}
 Salary -->|Yes| Qualifications{Highly Qualified?}
 Salary -->|No| End1([Not Eligible])
 Qualifications -->|Yes| GatherDocs[Gather Required Documents]
 Qualifications -->|No| End1
 GatherDocs --> WorkAuth[Apply for Work Authorization]
 WorkAuth --> Wait[Wait for Processing<br/>4-6 weeks]
 Wait --> Decision{Decision}
 Decision -->|Approved| Visa[Receive Work Permit and Visa]
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

 'lu_investor': {
 programId: 'lu_investor',
 countryCode: 'LU',
 programName: 'Investor Visa (Business Investor Permit)',
 totalEstimatedDuration: '3-6 months',
 complexity: 'high',
 successRate: '75%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) -->funds{EUR 500K<br/>Investment Funds?}
 funds -->|Yes| plan[Develop Business Plan]
 funds -->|No| End1([Not Eligible])
 plan -->docs[Gather Documents]
 docs -->submit[Submit Application]
 submit -->process[Processing 3-6 Months]
 process --> decision{Decision}
 decision -->|Approved| invest[Make Investment]
 decision -->|Rejected| appeal[Consider Appeal]
 invest -->permit[Receive Residence Permit]
 permit -->travel[Travel to Luxembourg]
 travel -->register[Register at Commune]
 register --> Success([Complete])
 appeal --> End2([Process Ended])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style permit fill:#e1e5ff
`,
 steps: [
 {
 id: 'funds',
 title: 'Verify Investment Funds',
 description: 'Confirm EUR 500K investment funds available',
 estimatedDuration: '2-4 weeks',
 documents: ['Bank statements', 'Asset valuations', 'Source of funds documentation'],
 notes: ['EUR 500K minimum investment', 'Must invest in Luxembourg business', 'Highest GDP per capita in world!', 'PR in 5 years'],
 },
 {
 id: 'plan',
 title: 'Develop Business Plan',
 description: 'Create comprehensive business plan',
 estimatedDuration: '4-8 weeks',
 documents: ['Business plan', 'Market analysis', 'Financial projections', 'Job creation plan'],
 notes: ['Must create jobs in Luxembourg', 'Finance sector opportunities', 'Strategic EU location'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect all required documents',
 estimatedDuration: '4-6 weeks',
 documents: ['Passport', 'Proof of funds', 'Business plan', 'Criminal background check', 'CV', 'Proof of business experience'],
 notes: ['Documents in French, German, or Luxembourgish', 'Certified translations required'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Ministry of Foreign Affairs',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee'],
 notes: ['Comprehensive review process', 'Economic benefit assessment'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Wait for evaluation',
 estimatedDuration: '3-6 months',
 documents: [],
 notes: ['Thorough due diligence', 'Business viability assessment'],
 },
 {
 id: 'invest',
 title: 'Make Investment',
 description: 'Complete approved investment',
 estimatedDuration: '4-8 weeks',
 documents: ['Investment confirmation', 'Business registration', 'Transfer documentation'],
 notes: ['Must complete investment before permit', 'Register business in Luxembourg'],
 },
 {
 id: 'permit',
 title: 'Receive Residence Permit',
 description: 'Receive investor residence permit',
 estimatedDuration: '2-4 weeks',
 documents: ['Residence permit approval'],
 notes: ['Initial permit for 3 years', 'Renewable', 'Family included', 'PR in 5 years'],
 },
 {
 id: 'travel',
 title: 'Travel to Luxembourg',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Highest GDP per capita in world!', 'Strategic EU location'],
 },
 {
 id: 'register',
 title: 'Register at Commune',
 description: 'Complete registration',
 estimatedDuration: '2-4 weeks',
 documents: ['Passport', 'Residence permit', 'Proof of address', 'Business registration'],
 notes: ['Register within 8 days', 'Get social security number', 'PR in 5 years'],
 },
 {
 id: 'appeal',
 title: 'Consider Appeal',
 description: 'If rejected, evaluate options',
 estimatedDuration: '2-4 months',
 documents: ['Rejection decision', 'Additional evidence'],
 notes: ['Can reapply with stronger plan', 'Legal consultation recommended'],
 },
 ],
 },

 'lu_self_employed': {
 programId: 'lu_self_employed',
 countryCode: 'LU',
 programName: 'Self-Employed Permit',
 totalEstimatedDuration: '3-6 months',
 complexity: 'medium',
 successRate: '70%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) -->plan[Develop Business Plan]
 plan --> funds{EUR 15,000<br/>Funds?}
 funds -->|Yes| docs[Gather Documents]
 funds -->|No| End1([Not Eligible])
 docs -->submit[Submit Application]
 submit -->process[Processing 3-6 Months]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit -->travel[Travel to Luxembourg]
 travel -->register[Register Business]
 register --> Success([Complete])
 appeal --> End2([Process Ended])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style permit fill:#e1e5ff
`,
 steps: [
 {
 id: 'plan',
 title: 'Develop Business Plan',
 description: 'Create comprehensive business plan',
 estimatedDuration: '4-8 weeks',
 documents: ['Business plan', 'Market analysis', 'Financial projections'],
 notes: ['EUR 15,000 minimum funds', 'Highest GDP per capita in world', 'PR in 5 years'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '4-6 weeks',
 documents: ['Passport', 'Business plan', 'Proof of funds', 'Criminal check', 'Health insurance', 'Qualifications'],
 notes: ['Documents in French, German, or Luxembourgish', 'Certified translations required'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Ministry of Foreign Affairs',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee'],
 notes: ['Processing: 3-6 months'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Ministry reviews application',
 estimatedDuration: '3-6 months',
 documents: [],
 notes: ['Business viability assessed', 'Economic benefit evaluated'],
 },
 {
 id: 'permit',
 title: 'Receive Permit',
 description: 'Receive self-employed permit',
 estimatedDuration: '2-4 weeks',
 documents: ['Residence permit'],
 notes: ['Valid for 3 years, renewable'],
 },
 {
 id: 'travel',
 title: 'Travel to Luxembourg',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Luxembourg (LUX)'],
 },
 {
 id: 'register',
 title: 'Register Business',
 description: 'Register business and at commune',
 estimatedDuration: '2-4 weeks',
 documents: ['Business registration', 'Proof of address'],
 notes: ['Register at commune within 8 days', 'Highest GDP per capita', 'PR in 5 years'],
 },
 {
 id: 'appeal',
 title: 'Consider Appeal',
 description: 'If rejected, evaluate options',
 estimatedDuration: '2-4 months',
 documents: ['Rejection decision', 'Appeal form'],
 notes: ['Can reapply with stronger plan'],
 },
 ],
 },

 'lu_family_reunification': {
 programId: 'lu_family_reunification',
 countryCode: 'LU',
 programName: 'Family Reunification',
 totalEstimatedDuration: '3-6 months',
 complexity: 'medium',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) -->check[Check Eligibility]
 check --> eligible{Sponsor<br/>Eligible?}
 eligible -->|Yes| docs[Gather Documents]
 eligible -->|No| End1([Not Eligible])
 docs -->submit[Submit Application]
 submit -->process[Processing 3-6 Months]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit -->travel[Travel to Luxembourg]
 travel -->register[Register at Commune]
 register --> Success([Complete])
 appeal --> End2([Process Ended])

 style Start fill:#e1f5e1
 style Success fill:#e1f5e1
 style End1 fill:#ffe1e1
 style End2 fill:#ffe1e1
 style permit fill:#e1e5ff
`,
 steps: [
 {
 id: 'check',
 title: 'Check Eligibility',
 description: 'Verify sponsor has valid residence permit',
 estimatedDuration: '1-2 weeks',
 documents: ['Sponsor residence permit', 'Proof of relationship'],
 notes: ['Sponsor must have valid permit', 'Spouse, children eligible', 'Income requirement applies'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '4-6 weeks',
 documents: ['Passport', 'Marriage/birth certificate', 'Proof of accommodation', 'Proof of income', 'Health insurance'],
 notes: ['All documents must be apostilled', 'Translations to French, German, or Luxembourgish'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Ministry of Foreign Affairs',
 estimatedDuration: '1-2 weeks',
 documents: ['All documents', 'Application fee'],
 notes: ['Processing: 3-6 months'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Ministry reviews application',
 estimatedDuration: '3-6 months',
 documents: [],
 notes: ['Relationship verified', 'Income requirement checked'],
 },
 {
 id: 'permit',
 title: 'Receive Permit',
 description: 'Receive family reunification permit',
 estimatedDuration: '2-4 weeks',
 documents: ['Residence permit'],
 notes: ['Same validity as sponsor permit'],
 },
 {
 id: 'travel',
 title: 'Travel to Luxembourg',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Luxembourg (LUX)'],
 },
 {
 id: 'register',
 title: 'Register at Commune',
 description: 'Register within 8 days',
 estimatedDuration: '1-2 weeks',
 documents: ['Proof of address'],
 notes: ['Register at commune within 8 days', 'PR in 5 years'],
 },
 {
 id: 'appeal',
 title: 'Consider Appeal',
 description: 'If rejected, evaluate options',
 estimatedDuration: '2-4 months',
 documents: ['Rejection decision', 'Appeal form'],
 notes: ['Can reapply with additional evidence'],
 },
 ],
 },
};

