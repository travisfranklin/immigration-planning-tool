/**
 * Ireland Immigration Programs
 *
 * Built using the template-based composition system.
 * Ireland has 5 main programs:
 * 1. Critical Skills Employment Permit
 * 2. STEP (Startup Entrepreneur Programme)
 * 3. General Employment Permit
 * 4. Investor Programme
 * 5. Family Reunification
 */

import type { FlowchartDefinition } from '../../../types/flowchart';
import { buildFlowchart } from '../builders';
import { COMMON_STEP_IDS } from '../templates/types';

/**
 * Critical Skills Employment Permit - Fast-track for skilled professionals
 */
export const criticalSkillsPermit: FlowchartDefinition = buildFlowchart({
  programId: 'ie_critical_skills',
  countryCode: 'IE',
  programName: 'Critical Skills Employment Permit',
  complexity: 'low',
  successRate: '90%',
  totalEstimatedDuration: '2-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer --> Salary{"Salary >= EUR 44,000?"}
  Salary -->|Yes| CriticalSkills{Critical Skills List?}
  Salary -->|No| End1([Not Eligible])
  CriticalSkills -->|Yes| gather-documents[Gather Required Documents]
  CriticalSkills -->|No| End1
  gather-documents -->employer-application[Employer Applies for Permit]
  employer-application -->processing[Wait for Processing<br/>8 weeks]
  processing --> Decision{Decision}
  Decision -->|Approved| Permit[Receive Employment Permit]
  Decision -->|Rejected| Appeal[Consider Appeal]
  Permit -->entry-visa[Apply for Entry Visa]
  entry-visa -->arrival[Travel to Ireland]
  arrival --> registration[Register with GNIB/IRP]
  registration --> Success([Process Complete])
  Appeal --> End2([Process Ended])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 44000,
        additionalNotes: [
          'Job must be on Critical Skills Occupations List',
          'English-speaking country - major advantage!',
          'Strong tech sector (Google, Facebook, Apple)',
          'Contract must be for at least 2 years',
        ],
      },
    },
    {
      id: 'critical-skills-check',
      title: 'Verify Critical Skills Eligibility',
      description: 'Confirm occupation is on Critical Skills list',
      estimatedDuration: '1 week',
      documents: ['Job description', 'Critical Skills Occupations List'],
      notes: [
        'ICT: Software developers, data scientists, cybersecurity',
        'Engineering: All disciplines',
        'Healthcare: Doctors, nurses, specialists',
        'Finance: Financial analysts, accountants',
        'Science: Research scientists, lab technicians',
        'List updated regularly by government',
      ],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['University degree', 'Proof of qualifications'],
        additionalNotes: [
          'No language requirement (English is official language)',
          'Degree must be relevant to job',
          'No apostille required for most documents',
          'Simpler process than most EU countries',
        ],
      },
    },
    {
      id: 'employer-application',
      title: 'Employer Applies for Permit',
      description: 'Employer submits application to Department of Enterprise',
      estimatedDuration: '1 week',
      documents: ['All gathered documents', 'Employer application form', 'Application fee (EUR 1,000)'],
      notes: [
        'Employer applies online',
        'No labor market test required for Critical Skills',
        'Faster processing than General Employment Permit',
      ],
    },
    {
      template: COMMON_STEP_IDS.PROCESSING,
      options: {
        processingTime: '8 weeks',
        additionalNotes: ['Can track status online'],
      },
    },
    {
      id: 'permit',
      title: 'Receive Employment Permit',
      description: 'Collect your approved Critical Skills Employment Permit',
      estimatedDuration: '1 week',
      documents: ['Approval letter', 'Employment permit card', 'Passport'],
      notes: [
        'Permit valid for 2 years initially',
        'Renewable',
        'Can apply for Stamp 4 (PR) after 2 years - fastest in EU!',
        'Allows immediate family members to join',
      ],
    },
    {
      id: 'entry-visa',
      title: 'Apply for Entry Visa',
      description: 'Apply for visa to enter Ireland (if required)',
      estimatedDuration: '2-4 weeks',
      documents: ['Approved employment permit', 'Passport', 'Application form'],
      notes: [
        'US citizens do not need entry visa',
        'Can enter Ireland visa-free',
        'Must have employment permit before arrival',
      ],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'employment permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'GNIB/IRP',
        additionalNotes: [
          'Register within 90 days of arrival',
          'Receive Irish Residence Permit (IRP card)',
          'Can apply for Stamp 4 (PR) after 2 years - fastest in EU!',
          'Can apply for citizenship after 5 years',
          'English-speaking country - major advantage!',
        ],
      },
    },
  ],
});

/**
 * General Employment Permit - Standard work permit with labor market test
 */
export const generalEmploymentPermit: FlowchartDefinition = buildFlowchart({
  programId: 'ie_general_employment',
  countryCode: 'IE',
  programName: 'General Employment Permit',
  complexity: 'medium',
  successRate: '75%',
  totalEstimatedDuration: '3-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer<br/>from Irish Employer]
  job-offer --> check-salary{"Salary >= EUR 30,000/year?"}
  check-salary -->|Yes| labor-market-test[Employer Conducts<br/>Labor Market Test]
  check-salary -->|No| End1([Not Eligible])
  labor-market-test --> test-result{No Suitable<br/>EEA Worker?}
  test-result -->|Yes| gather-documents[Gather Required Documents]
  test-result -->|No| End2([Not Eligible])
  gather-documents -->employer-application[Employer Applies<br/>for Permit]
  employer-application -->processing[Processing<br/>8-12 Weeks]
  processing --> decision{Decision}
  decision -->|Approved| receive-permit[Receive Employment Permit]
  decision -->|Rejected| consider-appeal[Consider Appeal]
  receive-permit -->entry-visa[Apply for Entry Visa]
  entry-visa -->travel-to-ireland[Travel to Ireland]
  travel-to-ireland -->register-gnib[Register with GNIB/IRP]
  register-gnib --> Success([Process Complete])
  consider-appeal --> End3([Process Ended])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 30000,
        additionalNotes: [
          'English-speaking country - major advantage!',
          'Popular sectors: IT, healthcare, finance, pharma',
          'Dublin and Cork are major tech hubs',
          'Labor market test required',
          'Path to PR after 5 years',
        ],
      },
    },
    {
      id: 'labor-market-test',
      title: 'Employer Conducts Labor Market Test',
      description: 'Employer must advertise position and prove no suitable EEA worker available',
      estimatedDuration: '4-6 weeks',
      documents: [
        'Job advertisement on EURES portal',
        'Job advertisement in Irish media',
        'Evidence of advertising (28 days minimum)',
        'Summary of applications received',
        'Reasons for rejecting EEA candidates',
      ],
      notes: [
        'Employer must advertise for minimum 28 days',
        'Must advertise on EURES (EU job portal)',
        'Must advertise in Irish newspapers or job sites',
        'Must demonstrate no suitable EEA worker available',
        'This is the key requirement for General Employment Permit',
        'Critical Skills permit does NOT require labor market test',
      ],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['Labor market test evidence', 'Employer registration details'],
        additionalNotes: ['Documents must be in English', 'Employer applies on your behalf'],
      },
    },
    {
      id: 'employer-application',
      title: 'Employer Applies for Permit',
      description: 'Employer submits employment permit application to Department of Enterprise',
      estimatedDuration: '1 week',
      documents: ['All gathered documents', 'Application fee payment (EUR 1,000)', 'Labor market test evidence'],
      notes: [
        'Employer submits application online',
        'Application fee: EUR 1,000 (paid by employer)',
        'Processing time: 8-12 weeks',
        'Employer is responsible for application',
      ],
    },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '8-12 weeks' } },
    {
      id: 'receive-permit',
      title: 'Receive Employment Permit',
      description: 'Receive approved employment permit',
      estimatedDuration: '1 week',
      documents: ['Employment permit approval'],
      notes: [
        'Permit initially valid for 2 years',
        'Renewable if employment continues',
        'Family members can join',
        'PR eligible after 5 years',
        'English-speaking country!',
      ],
    },
    {
      id: 'entry-visa',
      title: 'Apply for Entry Visa',
      description: 'Apply for entry visa at Irish embassy/consulate',
      estimatedDuration: '4-8 weeks',
      documents: ['Employment permit', 'Passport', 'Visa application form', 'Passport photographs'],
      notes: ['Apply at Irish embassy in your country', 'Visa processing: 4-8 weeks', 'Some nationalities visa-exempt'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'entry visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'GNIB/IRP',
        additionalNotes: [
          'Register within 90 days of arrival',
          'Get Irish Residence Permit (IRP) card',
          'Open Irish bank account',
          'Get PPS number (tax number)',
          'Access to Irish healthcare',
          'PR after 5 years',
          'English-speaking country - easy integration!',
        ],
      },
    },
  ],
});

/**
 * STEP (Startup Entrepreneur Programme) - For innovative startups
 */
export const stepProgramme: FlowchartDefinition = buildFlowchart({
  programId: 'ie_step',
  countryCode: 'IE',
  programName: 'STEP (Startup Entrepreneur Programme)',
  complexity: 'medium',
  successRate: '70%',
  totalEstimatedDuration: '3-6 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) --> business-plan[Develop Business Plan]
  business-plan --> Funding{EUR 50,000 Funding?}
  Funding -->|From Approved Source| Approval[Get Approved Source Validation]
  Funding -->|No| End1([Not Eligible])
  Approval --> gather-documents[Gather Required Documents]
  gather-documents --> application-submission[Submit Application]
  application-submission --> evaluation-interview[Business Plan Evaluation]
  evaluation-interview --> Decision{Decision}
  Decision -->|Approved| Permit[Receive STEP Approval]
  Decision -->|Rejected| Appeal[Consider Appeal]
  Permit --> arrival[Travel to Ireland]
  arrival --> Register[Register with GNIB/IRP]
  Register --> LaunchBusiness[Launch Business]
  LaunchBusiness --> Success([Process Complete])
  Appeal --> End2([Process Ended])`,
  steps: [
    {
      id: 'business-plan',
      title: 'Develop Business Plan',
      description: 'Create comprehensive business plan for innovative startup',
      estimatedDuration: '4-8 weeks',
      documents: ['Detailed business plan', 'Market analysis', 'Financial projections', 'Innovation description'],
      notes: [
        'Must be innovative, high-potential startup',
        'Focus on scalability and job creation',
        'Technology, life sciences, and green tech favored',
        'Must demonstrate potential for international growth',
      ],
    },
    {
      id: 'funding-source',
      title: 'Secure Approved Funding',
      description: 'Obtain EUR 50,000 from approved source',
      estimatedDuration: '2-4 months',
      documents: ['Proof of EUR 50,000 funding', 'Letter from approved source', 'Investment agreement'],
      notes: [
        'Must be from approved source (not personal funds)',
        'Approved sources: Enterprise Ireland, County Enterprise Boards',
        'Business angels, venture capital firms',
        'Cannot use personal savings',
      ],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        additionalDocuments: ['Proof of funding from approved source', 'Proof of business experience'],
        additionalNotes: [
          'Must demonstrate entrepreneurial experience',
          'Educational background in relevant field helpful',
        ],
      },
    },
    {
      template: COMMON_STEP_IDS.SUBMIT_APPLICATION,
      options: {
        applicationFee: 350,
        additionalNotes: ['Apply through Enterprise Ireland', 'Applications reviewed quarterly', 'Competitive selection process'],
      },
    },
    {
      id: 'evaluation-interview',
      title: 'Evaluation and Interview',
      description: 'Business plan evaluation and interview with panel',
      estimatedDuration: '4-8 weeks',
      documents: ['Presentation materials', 'Supporting documents'],
      isConditional: true,
      condition: 'Application approved or rejected',
      notes: [
        'Panel evaluates innovation and potential',
        'Must demonstrate job creation potential',
        'Interview may be in-person or virtual',
        'Prepare to defend business model',
      ],
    },
    {
      id: 'permit',
      title: 'Receive STEP Approval',
      description: 'Receive approval for STEP programme',
      estimatedDuration: '2-4 weeks',
      documents: ['STEP approval letter', 'Residence permit authorization', 'Passport'],
      notes: [
        'Initial permit for 2 years',
        'Must create jobs and meet milestones',
        'Renewable if business progressing',
        'Can apply for PR after 5 years',
      ],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'STEP approval' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'GNIB/IRP',
        additionalNotes: [
          'Register within 90 days of arrival',
          'Receive Irish Residence Permit (IRP card)',
          'Stamp 0 initially, can upgrade to Stamp 4 after meeting milestones',
        ],
      },
    },
    {
      id: 'launch-business',
      title: 'Launch Business',
      description: 'Register and launch your startup in Ireland',
      estimatedDuration: '4-8 weeks',
      documents: [
        'Business registration documents',
        'Company name reservation',
        'Memorandum and Articles of Association',
        'Registered office address',
      ],
      notes: [
        'Register business with Companies Registration Office (CRO)',
        'Obtain Irish tax number',
        'Open Irish business bank account',
        'Must create jobs and meet milestones',
        'Regular reporting to Enterprise Ireland required',
      ],
    },
  ],
});

/**
 * Investor Programme - For high-net-worth investors
 */
export const investorProgramme: FlowchartDefinition = buildFlowchart({
  programId: 'ie_investor',
  countryCode: 'IE',
  programName: 'Investor Programme',
  complexity: 'high',
  successRate: '80%',
  totalEstimatedDuration: '4-6 months',
  mermaidDiagram: `
flowchart TD
  Start([Start]) -->funds{EUR 2M Net Worth<br/>+ EUR 1M Investment?}
  funds -->|Yes| choose[Choose Investment Option]
  funds -->|No| End1([Not Eligible])
  choose -->docs[Gather Documents]
  docs -->submit[Submit Application]
  submit -->process[Processing 4-6 Months]
  process --> decision{Decision}
  decision -->|Approved| invest[Make Investment]
  decision -->|Rejected| appeal[Consider Appeal]
  invest -->permit[Receive Stamp 4 Permit]
  permit -->travel[Travel to Ireland]
  travel -->register[Register with GNIB/IRP]
  register --> Success([Complete])
  appeal --> End2([Process Ended])`,
  steps: [
    {
      id: 'funds',
      title: 'Verify Financial Requirements',
      description: 'Confirm EUR 2M net worth and EUR 1M investment funds',
      estimatedDuration: '2-4 weeks',
      documents: ['Bank statements', 'Asset valuations', 'Source of funds documentation'],
      notes: [
        'EUR 2M net worth required',
        'EUR 1M investment in Irish enterprise',
        'Fastest path to PR in EU (immediate Stamp 4!)',
        'Citizenship in 5 years',
      ],
    },
    {
      id: 'choose',
      title: 'Choose Investment Option',
      description: 'Select investment type',
      estimatedDuration: '2-4 weeks',
      documents: ['Investment proposal', 'Due diligence reports'],
      notes: [
        'Enterprise Investment: EUR 1M in Irish business (3+ years)',
        'Investment Fund: EUR 1M in approved fund',
        'REIT: EUR 2M in Irish REIT',
        'Endowment: EUR 500K donation (arts/sports/culture)',
      ],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeFinancial: true,
        additionalDocuments: ['Investment plan', 'Criminal background check', 'Source of funds documentation'],
        additionalNotes: ['Comprehensive due diligence required', 'All funds must be legally sourced'],
      },
    },
    {
      template: COMMON_STEP_IDS.SUBMIT_APPLICATION,
      options: {
        applicationFee: 1500,
        additionalNotes: ['Submit to Irish Naturalisation and Immigration Service', 'Applications reviewed quarterly', 'Competitive process'],
      },
    },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '4-6 months' } },
    {
      id: 'invest',
      title: 'Make Investment',
      description: 'Complete approved investment',
      estimatedDuration: '4-8 weeks',
      documents: ['Investment confirmation', 'Transfer documentation'],
      notes: ['Must complete investment before permit issued', 'Investment held for minimum 3 years'],
    },
    {
      id: 'permit',
      title: 'Receive Stamp 4 Permit',
      description: 'Receive residence permit',
      estimatedDuration: '2-4 weeks',
      documents: ['Stamp 4 approval'],
      notes: [
        'Immediate Stamp 4 (equivalent to PR!)',
        'Can work without restriction',
        'Family included',
        'Citizenship in 5 years',
      ],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Stamp 4 permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'GNIB/IRP',
        additionalDocuments: ['Investment confirmation'],
        additionalNotes: ['Get IRP card', 'Immediate work rights', 'Citizenship in 5 years', 'English-speaking!'],
      },
    },
  ],
});

/**
 * Family Reunification - For family members of residents
 */
export const familyReunification: FlowchartDefinition = buildFlowchart({
  programId: 'ie_family_reunification',
  countryCode: 'IE',
  programName: 'Family Reunification',
  complexity: 'medium',
  successRate: '80%',
  totalEstimatedDuration: '6-12 months',
  mermaidDiagram: `
flowchart TD
  Start([Start]) -->check[Check Eligibility]
  check --> eligible{Sponsor<br/>Eligible?}
  eligible -->|Yes| docs[Gather Documents]
  eligible -->|No| End1([Not Eligible])
  docs -->submit[Submit Application]
  submit -->process[Processing 6-12 Months]
  process --> decision{Decision}
  decision -->|Approved| permit[Receive Permit]
  decision -->|Rejected| appeal[Consider Appeal]
  permit -->travel[Travel to Ireland]
  travel -->register[Register at GNIB]
  register --> Success([Complete])
  appeal --> End2([Process Ended])`,
  steps: [
    {
      id: 'check',
      title: 'Check Eligibility',
      description: 'Verify sponsor has valid residence permit',
      estimatedDuration: '1-2 weeks',
      documents: ['Sponsor residence permit', 'Proof of relationship'],
      notes: ['Sponsor must have Stamp 1/4', 'Spouse, children eligible', 'Income requirement applies'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        additionalDocuments: [
          'Marriage/birth certificate',
          'Proof of accommodation',
          'Proof of income (EUR 30,000/year)',
          'Health insurance',
        ],
        additionalNotes: ['All documents must be apostilled', 'Translations to English'],
      },
    },
    {
      template: COMMON_STEP_IDS.SUBMIT_APPLICATION,
      options: {
        applicationFee: 300,
        additionalNotes: ['Submit to Irish Naturalisation and Immigration Service', 'Processing: 6-12 months'],
      },
    },
    {
      template: COMMON_STEP_IDS.PROCESSING,
      options: {
        processingTime: '6-12 months',
        additionalNotes: ['Relationship verified', 'Income requirement checked'],
      },
    },
    {
      id: 'permit',
      title: 'Receive Permit',
      description: 'Receive family reunification permit',
      estimatedDuration: '2-4 weeks',
      documents: ['Residence permit'],
      notes: ['Stamp 3 (no work) or Stamp 1 (with work)'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'family reunification permit' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'GNIB',
        additionalNotes: ['Get Irish Residence Permit (IRP) card', 'PR in 5 years'],
      },
    },
  ],
});

/**
 * Export all Ireland flowcharts as a record for compatibility with existing system
 */
export const irelandFlowchartsNew: Record<string, FlowchartDefinition> = {
  ie_critical_skills: criticalSkillsPermit,
  ie_general_employment: generalEmploymentPermit,
  ie_step: stepProgramme,
  ie_investor: investorProgramme,
  ie_family_reunification: familyReunification,
};
