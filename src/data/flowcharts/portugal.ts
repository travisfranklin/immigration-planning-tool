/**
 * Portugal Immigration Process Flowcharts
 * Defines the step-by-step process for each Portuguese visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const portugalFlowcharts: Record<string, FlowchartDefinition> = {
 'pt_d7_visa': {
 programId: 'pt_d7_visa',
 countryCode: 'PT',
 programName: 'D7 Visa (Passive Income)',
 totalEstimatedDuration: '3-5 months',
 complexity: 'low',
 successRate: '95%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->verify-income[Verify Passive Income<br/>>= EUR 760/month]
 verify-income --> CheckIncome{Income Sufficient?}
 CheckIncome -->|Yes| secure-accommodation[Secure Accommodation<br/>in Portugal]
 CheckIncome -->|No| End1([Not Eligible])
 secure-accommodation -->gather-documents[Gather Required Documents]
 gather-documents --> consulate-submission[Submit Application at<br/>Portuguese Consulate]
 consulate-submission -->sef-processing[SEF Processing<br/>60-90 Days]
 sef-processing --> Decision{Decision}
 Decision -->|Approved| Visa[Receive D7 Visa]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Visa --> arrival[Travel to Portugal<br/>within 4 months]
 arrival --> registration[Register at SEF Office<br/>Get Residence Card]
 registration --> Success([Process Complete])
 Appeal --> End2([Process Ended])`,
 steps: [
 {
 id: 'verify-income',
 title: 'Verify Passive Income Requirements',
 description: 'Ensure you have sufficient passive income to qualify for the D7 Visa',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Bank statements (last 6 months showing EUR 760+/month)',
 'Proof of passive income sources (pension, rental income, dividends, etc.)',
 'Tax returns (last 2 years)',
 'Investment portfolio statements (if applicable)',
 ],
 notes: [
 'Minimum EUR 760/month (Portuguese minimum wage)',
 'Recommended: EUR 1,000- EUR 1,500/month for comfortable approval',
 'Income sources: pension, rental income, dividends, royalties, remote work',
 'Must prove income is stable and recurring',
 ],
 },
 {
 id: 'secure-accommodation',
 title: 'Secure Accommodation in Portugal',
 description: 'Obtain proof of accommodation in Portugal (rental or purchase)',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Rental agreement (minimum 1 year) OR',
 'Property purchase deed OR',
 'Letter of invitation from Portuguese resident with proof of ownership',
 ],
 notes: [
 'Can rent or buy property',
 'Popular areas: Lisbon, Porto, Algarve, Madeira',
 'Consider cost of living when choosing location',
 'Accommodation must be available before visa approval',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the D7 Visa application',
 estimatedDuration: '3-4 weeks',
 documents: [
 'Valid passport (valid for at least 3 months beyond intended stay)',
 'Proof of passive income (bank statements, pension letters, etc.)',
 'Proof of accommodation in Portugal',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Portugal, minimum EUR 30,000 coverage)',
 'Passport-style photographs (2)',
 'Completed visa application form',
 ],
 notes: [
 'All documents must be apostilled (Hague Convention)',
 'Translations to Portuguese required for non-English documents',
 'Criminal background check must be recent (within 3 months)',
 'Health insurance can be from US or Portuguese provider',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application at Portuguese Consulate',
 description: 'Submit your D7 Visa application at the Portuguese Consulate in the US',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Visa application fee payment (~ EUR 90)',
 'Appointment confirmation',
 ],
 notes: [
 'Must apply at Portuguese Consulate in your jurisdiction (e.g., SF, NYC, DC)',
 'Appointment required (book 2-4 weeks in advance)',
 'Bring original documents and copies',
 'Biometrics may be collected at appointment',
 ],
 },
 {
 id: 'sef-processing',
 title: 'SEF Processing Period',
 description: 'Wait for SEF (Portuguese Immigration Service) to process your application',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: [
 'Processing time: typically 60-90 days',
 'May be contacted for additional documents',
 'Can check status online via SEF portal',
 'Patience required - Portuguese bureaucracy can be slow',
 ],
 },
 {
 id: 'receive-visa-register',
 title: 'Receive D7 Visa and Register in Portugal',
 description: 'Receive your D7 Visa, travel to Portugal, and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'D7 Visa in passport',
 'All original documents',
 'Proof of accommodation',
 'NIF (Portuguese tax number - obtain upon arrival)',
 ],
 notes: [
 'Must travel to Portugal within 4 months of visa issuance',
 'Register at local SEF office within 3-4 months of arrival',
 'Receive residence card (valid for 2 years)',
 'Must spend 183+ days/year in Portugal to maintain residency',
 'Can apply for PR after 5 years, citizenship after 5 years (with A2 Portuguese)',
 ],
 },
 ],
 },
 'pt_golden_visa': {
 programId: 'pt_golden_visa',
 countryCode: 'PT',
 programName: 'Golden Visa (Investment)',
 totalEstimatedDuration: '4-8 months',
 complexity: 'medium',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> Investment{Investment Type?}
 Investment -->|Real Estate| Property[Purchase Property<br/> EUR 500k+ or EUR 400k in low-density]
 Investment -->|Capital Transfer| Capital[Transfer EUR 1.5M Capital]
 Investment -->|Business| Business[Invest EUR 500k in Business<br/>Create 5+ Jobs]
 Property --> NIF[Obtain NIF<br/>Portuguese Tax Number]
 Capital --> NIF
 Business --> NIF
 NIF --> GatherDocs[Gather Required Documents]
 GatherDocs --> Submit[Submit Application to SEF]
 Submit --> Processing[SEF Processing<br/>90-180 Days]
 Processing --> Decision{Decision}
 Decision -->|Approved| GoldenVisa[Receive Golden Visa]
 Decision -->|Rejected| Appeal[Consider Appeal]
 GoldenVisa --> Travel[Travel to Portugal<br/>7 days/year minimum]
 Travel --> Renew[Renew Every 2 Years]
 Renew --> Success([Process Complete])
 Appeal --> End1([Process Ended])`,
 steps: [
 {
 id: 'choose-investment',
 title: 'Choose Investment Type',
 description: 'Select the type of investment that qualifies for the Golden Visa',
 estimatedDuration: '1-3 months',
 documents: [
 'Proof of funds (bank statements, investment accounts)',
 'Source of funds documentation',
 ],
 notes: [
 'Real Estate: EUR 500,000 (or EUR 400,000 in low-density areas)',
 'Capital Transfer: EUR 1,500,000',
 'Business Investment: EUR 500,000 (creating 5+ jobs)',
 'Research/Arts: EUR 250,000 donation',
 'Most popular: Real estate investment',
 ],
 },
 {
 id: 'obtain-nif',
 title: 'Obtain NIF (Portuguese Tax Number)',
 description: 'Get your Portuguese tax identification number',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport copy',
 'Proof of address',
 'Power of attorney (if using representative)',
 ],
 notes: [
 'Required for any financial transaction in Portugal',
 'Can be obtained remotely through lawyer/representative',
 'Or in person at Portuguese tax office (Finanças)',
 'Essential before making investment',
 ],
 },
 {
 id: 'make-investment',
 title: 'Complete Investment',
 description: 'Execute your chosen investment (purchase property, transfer capital, etc.)',
 estimatedDuration: '1-3 months',
 documents: [
 'Property deed (if real estate)',
 'Bank transfer confirmation (if capital transfer)',
 'Business registration and job creation proof (if business)',
 'Investment certificate',
 ],
 notes: [
 'Use Portuguese lawyer for real estate transactions',
 'Ensure investment meets all Golden Visa requirements',
 'Keep all documentation for visa application',
 'Investment must be maintained for 5 years',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the Golden Visa application',
 estimatedDuration: '3-4 weeks',
 documents: [
 'Valid passport',
 'Proof of investment (property deed, bank transfers, etc.)',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Portugal)',
 'NIF (Portuguese tax number)',
 'Proof of accommodation in Portugal',
 'Passport-style photographs',
 ],
 notes: [
 'All documents must be apostilled',
 'Translations to Portuguese required',
 'Criminal background check must be recent (within 3 months)',
 'Family members can be included in application',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application to SEF',
 description: 'Submit your Golden Visa application to SEF (Portuguese Immigration Service)',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 5,000- EUR 6,000)',
 'Appointment confirmation',
 ],
 notes: [
 'Can submit in Portugal or at Portuguese Consulate',
 'Appointment required',
 'Biometrics collected at appointment',
 'Application fee is non-refundable',
 ],
 },
 {
 id: 'sef-processing-decision',
 title: 'SEF Processing and Receive Golden Visa',
 description: 'Wait for SEF processing and receive your Golden Visa residence permit',
 estimatedDuration: '90-180 days',
 documents: [],
 notes: [
 'Processing time: 90-180 days (can be longer)',
 'May be contacted for additional documents',
 'Once approved, receive residence card valid for 1 year',
 'Renewable for 2-year periods',
 'Only 7 days/year minimum stay required (most flexible in EU!)',
 'PR after 5 years, citizenship after 5 years (with A2 Portuguese)',
 'Family members included',
 ],
 },
 ],
 },

 'pt_startup_visa': {
 programId: 'pt_startup_visa',
 countryCode: 'PT',
 programName: 'Startup Visa',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '75%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->business-idea[Develop Innovative<br/>Startup Idea]
 business-idea --> check-funds{Have EUR 5,000-10,000<br/>minimum capital?}
 check-funds -->|Yes| prepare-business-plan[Prepare Detailed<br/>Business Plan]
 check-funds -->|No| End1([Not Eligible])
 prepare-business-plan -->submit-to-incubator[Submit to IAPMEI-Certified<br/>Incubator]
 submit-to-incubator -->incubator-review[Incubator Review<br/>30-60 Days]
 incubator-review --> decision1{Approved?}
 decision1 -->|Yes| gather-documents[Gather Required Documents]
 decision1 -->|Rejected| consider-resubmission[Consider Resubmission]
 consider-resubmission --> End2([Process Ended])
 gather-documents -->submit-visa[Submit Visa Application<br/>at Consulate]
 submit-visa -->visa-processing[SEF Processing<br/>60-90 Days]
 visa-processing --> decision2{Decision}
 decision2 -->|Approved| receive-visa[Receive Startup Visa]
 decision2 -->|Rejected| consider-appeal[Consider Appeal]
 receive-visa -->travel-to-portugal[Travel to Portugal]
 travel-to-portugal -->register-business[Register Business<br/>and Get Residence Card]
 register-business --> Success([Process Complete])
 consider-appeal --> End3([Process Ended])`,
 steps: [
 {
 id: 'business-idea',
 title: 'Develop Innovative Startup Idea',
 description: 'Create an innovative, scalable business concept suitable for the Portuguese startup ecosystem',
 estimatedDuration: '1-2 months',
 documents: [
 'Business concept description',
 'Market research and analysis',
 'Competitive landscape overview',
 'Innovation and scalability potential',
 ],
 notes: [
 'Focus on tech, tourism tech, fintech, or other innovation sectors',
 'Lisbon and Porto have vibrant startup ecosystems',
 'Consider joining startup events and networking',
 'Research Portuguese market opportunities',
 'Business must be innovative and have growth potential',
 'Portugal ranked #1 for quality of life for expats',
 ],
 },
 {
 id: 'prepare-business-plan',
 title: 'Prepare Detailed Business Plan',
 description: 'Create comprehensive business plan for incubator approval',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Executive summary',
 'Detailed business plan (15-30 pages)',
 'Financial projections (3-5 years)',
 'Proof of EUR 5,000-10,000 minimum capital (bank statements)',
 'Team information (if co-founders)',
 'Market analysis and go-to-market strategy',
 ],
 notes: [
 'Minimum EUR 5,000-10,000 in capital recommended',
 'Business plan must demonstrate innovation and scalability',
 'Include clear revenue model and growth strategy',
 'Show understanding of Portuguese market',
 'Can include co-founders (each needs separate visa)',
 'Lower capital requirement than most EU startup visas',
 ],
 },
 {
 id: 'submit-to-incubator',
 title: 'Submit to IAPMEI-Certified Incubator',
 description: 'Apply to IAPMEI-certified startup incubator for approval',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Completed incubator application form',
 'Business plan',
 'Financial projections',
 'Proof of funds',
 'Team CVs and background',
 ],
 notes: [
 'IAPMEI (Portuguese SME Agency) certifies incubators',
 'Certified incubators include: Beta-i, Startup Lisboa, Porto i/o',
 'Each incubator has own application process',
 'Some incubators offer mentorship and resources',
 'Application may include pitch presentation',
 'List of certified incubators: https://startupportugal.com/',
 ],
 },
 {
 id: 'incubator-review',
 title: 'Incubator Review (30-60 Days)',
 description: 'IAPMEI-certified incubator evaluates your startup business plan',
 estimatedDuration: '30-60 days',
 documents: [],
 notes: [
 'Review typically takes 30-60 days',
 'May include interview or pitch session',
 'Incubator assesses innovation, scalability, and team',
 'Approval letter required for visa application',
 'Can reapply if rejected (with improved plan)',
 'Incubator may offer workspace and mentorship',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for visa application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 3 months beyond intended stay)',
 'Incubator approval letter',
 'Business plan',
 'Proof of EUR 5,000-10,000 minimum capital',
 'Passport-style photographs',
 'Proof of health insurance',
 'Proof of accommodation in Portugal',
 'Criminal record certificate (from country of residence)',
 ],
 notes: [
 'All documents must be in Portuguese or English',
 'Certified translations required for other languages',
 'Apostille required for documents from non-EU countries',
 'Keep originals for consulate appointment',
 ],
 },
 {
 id: 'submit-visa',
 title: 'Submit Visa Application at Consulate',
 description: 'Submit application at Portuguese consulate in your country',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Completed visa application form',
 'All supporting documents',
 'Application fee payment (EUR 90 for visa)',
 ],
 notes: [
 'Book appointment at Portuguese consulate',
 'Application fee: EUR 90 for visa (2025)',
 'Biometrics collected at consulate',
 'May need to attend interview',
 'Processing starts after consulate submission',
 ],
 },
 {
 id: 'visa-processing',
 title: 'SEF Processing (60-90 Days)',
 description: 'Portuguese Immigration Service (SEF) reviews your application',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: [
 'Processing time: typically 60-90 days',
 'SEF may request additional documents',
 'Incubator approval is key factor',
 'Financial sufficiency verified',
 'Background check conducted',
 ],
 },
 {
 id: 'receive-visa',
 title: 'Receive Startup Visa',
 description: 'Collect your approved startup visa',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Decision letter from SEF',
 'Startup visa in passport',
 ],
 notes: [
 'Initial visa valid for 4 months (entry visa)',
 'Must enter Portugal within 4 months',
 'Exchange for residence permit after arrival',
 'Can bring family members',
 'Residence permit initially for 1 year, renewable for 2-year periods',
 ],
 },
 {
 id: 'travel-to-portugal',
 title: 'Travel to Portugal',
 description: 'Enter Portugal with your startup visa',
 estimatedDuration: '1-2 days',
 documents: [
 'Passport with startup visa',
 'Incubator approval letter',
 'Business plan',
 'Proof of accommodation',
 ],
 notes: [
 'Main airports: Lisbon (LIS), Porto (OPO), Faro (FAO)',
 'Must enter within 4 months of visa issuance',
 'Register at SEF office within 3 months of arrival',
 'Bring all original documents',
 ],
 },
 {
 id: 'register-business',
 title: 'Register Business and Get Residence Card',
 description: 'Complete business registration and obtain residence permit card',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Business registration form',
 'Company articles of association',
 'Proof of business address',
 'Bank account information',
 'NIF (tax identification number)',
 ],
 notes: [
 'Register business with Conservatória do Registo Comercial',
 'Get NIF (Número de Identificação Fiscal) from Finanças',
 'Open Portuguese business bank account',
 'Register at SEF office for residence card',
 'Get residence permit card (Título de Residência)',
 'Join startup incubator programs and networks',
 'Access to Portuguese startup ecosystem and EU funding',
 'PR eligible after 5 years, citizenship after 5 years (with A2 Portuguese)',
 ],
 },
 {
 id: 'consider-resubmission',
 title: 'Consider Resubmission',
 description: 'If rejected by incubator, evaluate options for reapplication',
 estimatedDuration: '1-2 months',
 documents: [
 'Rejection feedback from incubator',
 'Revised business plan',
 ],
 notes: [
 'Review rejection reasons carefully',
 'Improve business plan based on feedback',
 'Consider applying to different certified incubator',
 'Strengthen financial projections and market analysis',
 'May need to pivot business model',
 'Can reapply after improvements',
 ],
 },
 {
 id: 'consider-appeal',
 title: 'Consider Appeal',
 description: 'If visa rejected, evaluate appeal options',
 estimatedDuration: '1-2 months',
 documents: [
 'Rejection decision from SEF',
 'Appeal form',
 'Additional supporting evidence',
 ],
 notes: [
 'Appeal deadline: 30 days from decision',
 'Submit appeal to SEF',
 'Provide additional evidence or clarifications',
 'Consider legal consultation',
 'Can reapply with stronger application',
 'Alternative: consider Portugal Tech Visa or D7 Visa',
 ],
 },
 ],
 },

 'pt_tech_visa': {
 programId: 'pt_tech_visa',
 countryCode: 'PT',
 programName: 'Tech Visa',
 totalEstimatedDuration: '2-3 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer from<br/>IAPMEI-Certified Tech Company]
 job-offer --> check-salary{"Salary >= EUR 1,330/month<br/>(EUR 15,960/year)?"}
 check-salary -->|Yes| check-company{Company IAPMEI<br/>Certified?}
 check-salary -->|No| End1([Not Eligible])
 check-company -->|Yes| gather-documents[Gather Required Documents]
 check-company -->|No| End2([Company Must Get Certified])
 gather-documents -->submit-visa[Submit Visa Application<br/>at Consulate]
 submit-visa -->visa-processing[SEF Processing<br/>30-60 Days]
 visa-processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive Tech Visa]
 decision -->|Rejected| consider-appeal[Consider Appeal]
 receive-visa -->travel-to-portugal[Travel to Portugal]
 travel-to-portugal -->register-sef[Register at SEF<br/>Get Residence Card]
 register-sef --> Success([Process Complete])
 consider-appeal --> End3([Process Ended])`,
 steps: [
 {
 id: 'job-offer',
 title: 'Secure Job Offer from IAPMEI-Certified Tech Company',
 description: 'Obtain a binding job offer from an IAPMEI-certified Portuguese tech company',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract',
 'Job description for tech position',
 'Salary confirmation (minimum EUR 1,330/month = EUR 15,960/year)',
 'Company IAPMEI certification proof',
 'Employer information',
 ],
 notes: [
 'Company MUST be certified by IAPMEI (Portuguese SME Agency)',
 'Lower salary threshold than most EU tech visas (EUR 15,960/year)',
 'Growing tech scene in Lisbon and Porto',
 'Popular for software engineers, data scientists, product managers',
 'Fast processing (30-60 days) compared to other EU countries',
 'List of certified companies: https://www.iapmei.pt/techvisa',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for Tech Visa application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 3 months beyond intended stay)',
 'Employment contract from IAPMEI-certified company',
 'Company IAPMEI certification',
 'Passport-style photographs',
 'Proof of health insurance',
 'Proof of accommodation in Portugal',
 'Criminal record certificate (from country of residence)',
 'Educational qualifications (diplomas, certificates)',
 ],
 notes: [
 'All documents must be in Portuguese or English',
 'Certified translations required for other languages',
 'Apostille required for documents from non-EU countries',
 'Keep originals for consulate appointment',
 'Educational qualifications helpful but not strictly required',
 ],
 },
 {
 id: 'submit-visa',
 title: 'Submit Visa Application at Consulate',
 description: 'Submit application at Portuguese consulate in your country',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Completed visa application form',
 'All supporting documents',
 'Application fee payment (EUR 90 for visa)',
 ],
 notes: [
 'Book appointment at Portuguese consulate',
 'Application fee: EUR 90 for visa (2025)',
 'Biometrics collected at consulate',
 'May need to attend interview',
 'Processing starts after consulate submission',
 'Fast-track processing for Tech Visa',
 ],
 },
 {
 id: 'visa-processing',
 title: 'SEF Processing (30-60 Days)',
 description: 'Portuguese Immigration Service (SEF) reviews your application',
 estimatedDuration: '30-60 days',
 documents: [],
 notes: [
 'Processing time: typically 30-60 days (FAST!)',
 'Much faster than standard work visas',
 'SEF may request additional documents',
 'IAPMEI certification is key factor',
 'Background check conducted',
 'Employer may be contacted for verification',
 ],
 },
 {
 id: 'receive-visa',
 title: 'Receive Tech Visa',
 description: 'Collect your approved Tech Visa',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Decision letter from SEF',
 'Tech visa in passport',
 ],
 notes: [
 'Initial visa valid for 4 months (entry visa)',
 'Must enter Portugal within 4 months',
 'Exchange for residence permit after arrival',
 'Can bring family members',
 'Residence permit initially for 2 years, renewable',
 ],
 },
 {
 id: 'travel-to-portugal',
 title: 'Travel to Portugal',
 description: 'Enter Portugal with your Tech Visa',
 estimatedDuration: '1-2 days',
 documents: [
 'Passport with Tech Visa',
 'Employment contract',
 'Company IAPMEI certification',
 'Proof of accommodation',
 ],
 notes: [
 'Main airports: Lisbon (LIS), Porto (OPO), Faro (FAO)',
 'Must enter within 4 months of visa issuance',
 'Register at SEF office within 3 months of arrival',
 'Bring all original documents',
 'Can start working immediately upon arrival',
 ],
 },
 {
 id: 'register-sef',
 title: 'Register at SEF and Get Residence Card',
 description: 'Complete registration at SEF and obtain residence permit card',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport with visa',
 'Employment contract',
 'Proof of accommodation',
 'NIF (tax identification number)',
 ],
 notes: [
 'Register at SEF office within 3 months of arrival',
 'Get NIF (Número de Identificação Fiscal) from Finanças',
 'Get residence permit card (Título de Residência)',
 'Open Portuguese bank account',
 'Register with Social Security',
 'Can work immediately',
 'Access to Portuguese healthcare system',
 'PR eligible after 5 years, citizenship after 5 years (with A2 Portuguese)',
 'Non-habitual resident tax regime available (reduced tax for 10 years)',
 ],
 },
 {
 id: 'consider-appeal',
 title: 'Consider Appeal',
 description: 'If visa rejected, evaluate appeal options',
 estimatedDuration: '1-2 months',
 documents: [
 'Rejection decision from SEF',
 'Appeal form',
 'Additional supporting evidence',
 ],
 notes: [
 'Appeal deadline: 30 days from decision',
 'Submit appeal to SEF',
 'Provide additional evidence or clarifications',
 'Consider legal consultation',
 'Can reapply with stronger application',
 'Alternative: consider Portugal Startup Visa or D7 Visa',
 'Verify company IAPMEI certification is valid',
 ],
 },
 ],
 },

 'pt_family_reunification': {
 programId: 'pt_family_reunification',
 countryCode: 'PT',
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
 permit -->travel[Travel to Portugal]
 travel -->register[Register at SEF]
 register --> Success([Complete])
 appeal --> End2([Process Ended])`,
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
 estimatedDuration: '3-4 weeks',
 documents: ['Passport', 'Marriage/birth certificate', 'Proof of accommodation', 'Proof of income', 'Health insurance'],
 notes: ['All documents must be apostilled', 'Translations to Portuguese'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to SEF (Immigration Service)',
 estimatedDuration: '1-2 weeks',
 documents: ['All documents', 'Application fee (EUR 170)'],
 notes: ['Processing: 3-6 months'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'SEF reviews application',
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
 notes: ['Valid for 2 years, renewable'],
 },
 {
 id: 'travel',
 title: 'Travel to Portugal',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airports: Lisbon (LIS), Porto (OPO)'],
 },
 {
 id: 'register',
 title: 'Register at SEF',
 description: 'Register and get residence card',
 estimatedDuration: '2-4 weeks',
 documents: ['Proof of address'],
 notes: ['Get residence card', 'PR in 5 years', 'Citizenship in 5 years (with A2 Portuguese)'],
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

