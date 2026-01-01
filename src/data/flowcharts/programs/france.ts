/**
 * France Immigration Programs
 *
 * Built using the template-based composition system.
 * France has 6 main programs:
 * 1. EU Blue Card (Carte Bleue Européenne)
 * 2. Talent Passport – Qualified Employee (Passeport Talent)
 * 3. Skills and Talents Visa
 * 4. French Tech Visa
 * 5. Standard Work Visa
 * 6. Family Reunification
 */

import type { FlowchartDefinition } from '../../../types/flowchart';
import { buildFlowchart } from '../builders';
import { COMMON_STEP_IDS } from '../templates/types';

/**
 * EU Blue Card - For highly skilled workers with higher salary threshold and EU mobility
 */
export const euBlueCard: FlowchartDefinition = buildFlowchart({
  programId: 'fr_blue_card',
  countryCode: 'FR',
  programName: 'EU Blue Card',
  complexity: 'medium',
  successRate: '85%',
  totalEstimatedDuration: '2-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer --> CheckSalary{"Salary >= €59,373?"}
  CheckSalary -->|Yes| gather-documents[Gather Required Documents]
  CheckSalary -->|No| End1([Consider Talent Passport])
  gather-documents -->submit-application[Submit at Consulate]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive EU Blue Card]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to France]
  travel -->registration[Register with Prefecture]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 59373,
        additionalNotes: [
          'Salary must be at least €59,373/year (1.5x average gross salary)',
          'Contract must be for at least 12 months',
          'Job must match your qualifications',
        ],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        includeDegree: true,
        additionalDocuments: [
          'University degree (3+ years higher education) or proof of 5 years professional experience',
          'Proof of accommodation in France',
          'CV/Resume',
          'Criminal background check',
        ],
        additionalNotes: [
          'All documents must be translated to French by certified translator',
          'Degree must be recognized or equivalent to French qualification',
        ],
      },
    },
    {
      template: COMMON_STEP_IDS.SUBMIT_APPLICATION,
      options: {
        applicationFee: 225,
        additionalNotes: [
          'Apply at French consulate in your country of residence',
          'Book appointment well in advance',
        ],
      },
    },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '4-8 weeks' } },
    {
      id: 'visa',
      title: 'Receive EU Blue Card',
      description: 'Collect your EU Blue Card visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: [
        'Valid for up to 4 years',
        'Includes work authorization',
        'Family can join with Talent-Family permit',
        'EU mobility after 12 months (can move to another EU country)',
        'Can apply for PR after 5 years',
      ],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'EU Blue Card' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Prefecture',
        additionalNotes: [
          'Register within 3 months of arrival',
          'Get titre de séjour (residence permit)',
          'Register with CPAM for health insurance',
        ],
      },
    },
  ],
});

/**
 * Talent Passport – Qualified Employee - For skilled workers with master's degree
 */
export const talentPassport: FlowchartDefinition = buildFlowchart({
  programId: 'fr_talent_passport',
  countryCode: 'FR',
  programName: 'Talent Passport',
  complexity: 'medium',
  successRate: '85%',
  totalEstimatedDuration: '2-4 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->choose-category[Choose Talent Passport Category]
  choose-category -->job-offer[Secure Job Offer]
  job-offer -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit at Consulate]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Talent Passport]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to France]
  travel -->registration[Register with Prefecture]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'choose-category',
      title: 'Choose Talent Passport Category',
      description: 'Determine which category you qualify for',
      estimatedDuration: '1 week',
      documents: ['Employment contract or investment plan', 'Qualifications documentation'],
      notes: [
        'Categories: Skilled worker, Researcher, Investor, Company creator, Artist',
        'Each category has different requirements',
        'Skilled worker most common for US citizens',
      ],
    },
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        salaryThreshold: 53836,
        isConditional: true,
        condition: 'Required for skilled worker category',
        additionalNotes: ['Salary must be at least 1.5x French minimum wage', 'Contract should be for at least 12 months'],
      },
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['University degree certificate (apostilled)', 'Proof of accommodation', 'CV/Resume', 'Cover letter explaining project'],
        additionalNotes: ['All documents must be translated to French by certified translator'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 225 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '4-8 weeks' } },
    {
      id: 'visa',
      title: 'Receive Talent Passport',
      description: 'Collect your Talent Passport visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for up to 4 years', 'Includes work authorization', 'Family can join', 'Can apply for PR after 5 years'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Talent Passport' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Prefecture',
        additionalNotes: ['Register within 3 months', 'Get titre de séjour (residence permit)', 'Register with CPAM for health insurance'],
      },
    },
  ],
});

/**
 * Skills and Talents Visa - For exceptional individuals
 */
export const skillsTalentsVisa: FlowchartDefinition = buildFlowchart({
  programId: 'fr_skills_talents',
  countryCode: 'FR',
  programName: 'Skills and Talents Visa',
  complexity: 'high',
  successRate: '65%',
  totalEstimatedDuration: '3-5 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->achievements[Document Exceptional Achievements]
  achievements -->project-plan[Develop Project Plan]
  project-plan -->experience-verification{5+ Years Experience?}
  experience-verification -->|Yes| gather-documents[Gather Required Documents]
  experience-verification -->|No| End1([Not Eligible])
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to France]
  travel -->registration[Register with Prefecture]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'achievements',
      title: 'Document Exceptional Achievements',
      description: 'Compile evidence of exceptional talent in your field',
      estimatedDuration: '2-4 weeks',
      documents: ['Awards and recognitions', 'Publications or patents', 'Media coverage', 'Letters of recommendation'],
      notes: ['Must demonstrate exceptional talent', 'Recognition should be national or international'],
    },
    {
      id: 'project-plan',
      title: 'Develop Project Plan for France',
      description: 'Create detailed plan for your project in France',
      estimatedDuration: '2-3 weeks',
      documents: ['Project description (10-20 pages)', 'Timeline and milestones', 'Expected impact on French economy/culture'],
      notes: ['Project must benefit France', 'Should demonstrate innovation or cultural value', 'No job offer required'],
    },
    {
      id: 'experience-verification',
      title: 'Verify Experience Requirements',
      description: 'Confirm you have 5+ years relevant experience',
      estimatedDuration: '1 week',
      documents: ['CV/Resume', 'Employment letters', 'Contracts or project documentation'],
      notes: ['Minimum 5 years professional experience required', 'Experience must be relevant to proposed project'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        additionalDocuments: ['Project plan', 'Evidence of achievements', 'Financial plan'],
        additionalNotes: ['All documents must be translated to French'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 225 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '6-10 weeks' } },
    {
      id: 'visa',
      title: 'Receive Skills and Talents Visa',
      description: 'Collect your visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for 3 years', 'Renewable', 'Can work on your project', 'Family can join'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'Skills and Talents Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Prefecture',
        additionalNotes: ['Register within 3 months', 'Get titre de séjour'],
      },
    },
  ],
});

/**
 * French Tech Visa - For tech entrepreneurs and employees
 */
export const frenchTechVisa: FlowchartDefinition = buildFlowchart({
  programId: 'fr_french_tech',
  countryCode: 'FR',
  programName: 'French Tech Visa',
  complexity: 'medium',
  successRate: '80%',
  totalEstimatedDuration: '2-3 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->ecosystem[Join French Tech Ecosystem]
  ecosystem -->founder-or-employee[Determine Your Path]
  founder-or-employee -->incubator-support[Get Incubator Support]
  incubator-support -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit Application]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive French Tech Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to France]
  travel -->registration[Register with Prefecture]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'ecosystem',
      title: 'Join French Tech Ecosystem',
      description: 'Get validated by French Tech partner',
      estimatedDuration: '2-4 weeks',
      documents: ['Startup pitch deck', 'Business plan or employment offer'],
      notes: ['Must be part of French Tech ecosystem', 'Partner with incubator, accelerator, or French Tech company'],
    },
    {
      id: 'founder-or-employee',
      title: 'Determine Your Path',
      description: 'Choose founder or employee track',
      estimatedDuration: '1 day',
      documents: ['Business plan (founder) or job offer (employee)'],
      isConditional: true,
      condition: 'Different requirements for each category',
      notes: ['Founder: Starting tech company in France', 'Employee: Joining French Tech startup', 'Investor: Investing in French Tech company'],
    },
    {
      id: 'incubator-support',
      title: 'Get Incubator/Accelerator Support',
      description: 'Secure support from French Tech partner',
      estimatedDuration: '2-4 weeks',
      documents: ['Letter of support from incubator/accelerator', 'Partnership agreement'],
      notes: ['Partner must be recognized by La French Tech', 'Support letter is crucial for application'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeBusinessPlan: true,
        additionalDocuments: ['French Tech partner support letter', 'Proof of funds', 'Criminal background check'],
        additionalNotes: ['All documents must be translated to French'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 225 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '2-4 weeks' } },
    {
      id: 'visa',
      title: 'Receive French Tech Visa',
      description: 'Collect your French Tech visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for 4 years', 'Fast-track processing', 'Family can join', 'Work authorization included'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'French Tech Visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Prefecture',
        additionalNotes: ['Register within 3 months', 'Get titre de séjour', 'Access to French Tech network'],
      },
    },
  ],
});

/**
 * Standard Work Visa - For regular employment
 */
export const workVisa: FlowchartDefinition = buildFlowchart({
  programId: 'fr_work_visa',
  countryCode: 'FR',
  programName: 'Standard Work Visa',
  complexity: 'medium',
  successRate: '70%',
  totalEstimatedDuration: '3-5 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->job-offer[Secure Job Offer]
  job-offer -->labor-market-test[Labor Market Test]
  labor-market-test -->direccte-approval[DIRECCTE Approval]
  direccte-approval -->gather-documents[Gather Required Documents]
  gather-documents -->submit-application[Submit at Consulate]
  submit-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Work Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to France]
  travel -->registration[Register with Prefecture]
  registration --> Success([Process Complete])`,
  steps: [
    {
      template: COMMON_STEP_IDS.JOB_OFFER,
      options: {
        additionalNotes: ['Employer must be willing to sponsor', 'Job must match your qualifications'],
      },
    },
    {
      id: 'labor-market-test',
      title: 'Labor Market Test',
      description: 'Employer proves no suitable EU candidate available',
      estimatedDuration: '3-4 weeks',
      documents: ['Job posting records', 'Candidate screening documentation'],
      notes: ['Employer must advertise position for 3 weeks', 'Must demonstrate no qualified EU candidates', 'Some professions exempt'],
    },
    {
      id: 'direccte-approval',
      title: 'DIRECCTE Approval',
      description: 'Regional labor authority reviews and approves',
      estimatedDuration: '4-8 weeks',
      documents: ['Employment contract', 'Labor market test results', 'Company documents'],
      notes: ['DIRECCTE reviews job offer and labor market test', 'Can request additional information'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        includeEmployment: true,
        additionalDocuments: ['DIRECCTE approval', 'Criminal background check', 'Medical certificate'],
        additionalNotes: ['All documents must be translated to French'],
      },
    },
    { template: COMMON_STEP_IDS.SUBMIT_APPLICATION, options: { applicationFee: 225 } },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '4-8 weeks' } },
    {
      id: 'visa',
      title: 'Receive Work Visa',
      description: 'Collect your work visa',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Valid for duration of contract (max 1 year initially)', 'Renewable', 'Tied to employer'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'work visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Prefecture',
        additionalNotes: ['Register within 3 months', 'Get titre de séjour', 'Register with CPAM for health insurance'],
      },
    },
  ],
});

/**
 * Family Reunification
 */
export const familyReunification: FlowchartDefinition = buildFlowchart({
  programId: 'fr_family_reunification',
  countryCode: 'FR',
  programName: 'Family Reunification Visa',
  complexity: 'medium',
  successRate: '75%',
  totalEstimatedDuration: '4-8 months',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) -->sponsor-eligibility{Sponsor Eligible?}
  sponsor-eligibility -->|Yes| income-housing{Income Sufficient?}
  sponsor-eligibility -->|No| End1([Not Eligible])
  income-housing -->|Yes| language-test[Pass French Language Test]
  income-housing -->|No| End1
  language-test -->gather-documents[Gather Required Documents]
  gather-documents -->ofii-application[Submit Application]
  ofii-application -->processing[Wait for Processing]
  processing --> decision{Decision}
  decision -->|Approved| visa[Receive Visa]
  decision -->|Rejected| End2([Process Ended])
  visa -->travel[Travel to France]
  travel -->registration[Register with Prefecture]
  registration --> Success([Process Complete])`,
  steps: [
    {
      id: 'sponsor-eligibility',
      title: 'Verify Sponsor Eligibility',
      description: 'Confirm family member in France meets requirements',
      estimatedDuration: '1 week',
      documents: ['Sponsor residence permit or French passport', 'Sponsor income statements', 'Sponsor housing documents'],
      notes: ['Sponsor must have valid residence permit or be French citizen', 'Must have lived in France for 18+ months'],
    },
    {
      id: 'income-housing',
      title: 'Verify Income and Housing',
      description: 'Confirm sponsor meets financial requirements',
      estimatedDuration: '1-2 weeks',
      documents: ['Recent pay slips (3 months)', 'Tax returns', 'Housing lease or ownership documents', 'Housing adequacy certificate'],
      notes: ['Income must be at least minimum wage', 'Housing must be adequate for family size', 'May need housing inspection'],
    },
    {
      id: 'language-test',
      title: 'Pass French Language Test',
      description: 'Demonstrate A1 level French proficiency',
      estimatedDuration: '1-3 months',
      documents: ['DELF A1 certificate or TCF A1 results'],
      notes: ['A1 is basic level French', 'Test can be taken at Alliance Française', 'Some exemptions for children and elderly'],
    },
    {
      template: COMMON_STEP_IDS.GATHER_DOCUMENTS,
      options: {
        additionalDocuments: ['Relationship documents (apostilled)', 'Sponsor documents', 'Language test results', 'Criminal background check'],
        additionalNotes: ['All documents must be translated to French'],
      },
    },
    {
      id: 'ofii-application',
      title: 'Sponsor Submits OFII Application',
      description: 'Sponsor applies to OFII (French Immigration Office)',
      estimatedDuration: '1-2 weeks',
      documents: ['All gathered documents', 'Application form'],
      notes: ['Sponsor applies at local OFII office', 'OFII reviews housing and income'],
    },
    { template: COMMON_STEP_IDS.PROCESSING, options: { processingTime: '6-12 months' } },
    {
      id: 'visa',
      title: 'Receive Family Visa',
      description: 'Collect visa from consulate',
      estimatedDuration: '1-2 weeks',
      documents: ['Passport'],
      notes: ['Visa valid for 3 months', 'Must enter France and apply for residence permit'],
    },
    { template: COMMON_STEP_IDS.TRAVEL, options: { visaType: 'family reunification visa' } },
    {
      template: COMMON_STEP_IDS.REGISTRATION,
      options: {
        registrationAuthority: 'Prefecture',
        additionalNotes: ['Register within 3 months', 'Get titre de séjour', 'Complete civic integration contract'],
      },
    },
  ],
});

/**
 * Export all France flowcharts as a record for compatibility with existing system
 */
export const franceFlowchartsNew: Record<string, FlowchartDefinition> = {
  eu_blue_card: euBlueCard,
  talent_passport: talentPassport,
  skills_talents: skillsTalentsVisa,
  french_tech: frenchTechVisa,
  work_visa: workVisa,
  family_reunification: familyReunification,
};
