/**
 * Cyprus Immigration Process Flowcharts
 * Defines the step-by-step process for each Cyprus visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const cyprusFlowcharts: Record<string, FlowchartDefinition> = {
 'cy_golden_visa': {
 programId: 'cy_golden_visa',
 countryCode: 'CY',
 programName: 'Golden Visa (Permanent Residence)',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '95%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> investment{Investment Type?}
 investment -->|Real Estate EUR 300k| choose-investment[Purchase Property<br/> EUR 300,000 minimum]
 investment -->|Business EUR 300k| Business[Invest in Business<br/> EUR 300,000]
 investment -->|Combination| Combo[Combination of Investments<br/> EUR 300,000 total]
 choose-investment --> verify-income[Verify Annual Income<br/> EUR 50,000 minimum]
 Business -->verify-income
 Combo -->verify-income
 verify-income --> CheckIncome{Income Sufficient?}
 CheckIncome -->|Yes| gather-documents[Gather Required Documents]
 CheckIncome -->|No| End1([Not Eligible])
 gather-documents -->submit-application[Submit Application to<br/>Cyprus Immigration]
 submit-application --> receive-pr[Processing<br/>60-90 Days]
 receive-pr --> Decision{Decision}
 Decision -->|Approved| PR[Receive Permanent Residence<br/>Immediate PR!]
 Decision -->|Rejected| Appeal[Consider Appeal]
 PR --> arrival[Travel to Cyprus]
 arrival --> Success([Process Complete])
 Appeal --> End2([Process Ended])`,
 reactFlowData: {
      nodes: [
        {
          id: "Start",
          type: "start",
          position: {
            x: 20,
            y: 30
          },
          data: {
            label: "Start Process",
            stepId: "Start",
            nodeType: "start"
          }
        },
        {
          id: "investment",
          type: "process",
          position: {
            x: 260,
            y: 20
          },
          data: {
            label: "Purchase Property<br/> EUR 300,000 minimum",
            stepId: "investment",
            nodeType: "process"
          }
        },
        {
          id: "Business",
          type: "process",
          position: {
            x: 540,
            y: 20
          },
          data: {
            label: "Invest in Business<br/> EUR 300,000",
            stepId: "Business",
            nodeType: "process"
          }
        },
        {
          id: "Combo",
          type: "process",
          position: {
            x: 820,
            y: 20
          },
          data: {
            label: "Combination of Investments<br/> EUR 300,000 total",
            stepId: "Combo",
            nodeType: "process"
          }
        },
        {
          id: "income",
          type: "process",
          position: {
            x: 1100,
            y: 20
          },
          data: {
            label: "Verify Annual Income<br/> EUR 50,000 minimum",
            stepId: "income",
            nodeType: "process"
          }
        },
        {
          id: "CheckIncome",
          type: "decision",
          position: {
            x: 1136,
            y: 200
          },
          data: {
            label: "Income Sufficient?",
            stepId: "CheckIncome",
            nodeType: "decision"
          }
        },
        {
          id: "documents",
          type: "document",
          position: {
            x: 1380,
            y: 20
          },
          data: {
            label: "Gather Required Documents",
            stepId: "documents",
            nodeType: "document"
          }
        },
        {
          id: "End1",
          type: "start",
          position: {
            x: 1120,
            y: 438
          },
          data: {
            label: "Not Eligible",
            stepId: "End1",
            nodeType: "start"
          }
        },
        {
          id: "application",
          type: "process",
          position: {
            x: 1660,
            y: 20
          },
          data: {
            label: "Submit Application to<br/>Cyprus Immigration",
            stepId: "application",
            nodeType: "process"
          }
        },
        {
          id: "pr",
          type: "process",
          position: {
            x: 1940,
            y: 20
          },
          data: {
            label: "Processing<br/>60-90 Days",
            stepId: "pr",
            nodeType: "process"
          }
        },
        {
          id: "Decision",
          type: "decision",
          position: {
            x: 1976,
            y: 200
          },
          data: {
            label: "Decision",
            stepId: "Decision",
            nodeType: "decision"
          }
        },
        {
          id: "PR",
          type: "process",
          position: {
            x: 1940,
            y: 428
          },
          data: {
            label: "Receive Permanent Residence<br/>Immediate PR!",
            stepId: "PR",
            nodeType: "process"
          }
        },
        {
          id: "Appeal",
          type: "process",
          position: {
            x: 2220,
            y: 428
          },
          data: {
            label: "Consider Appeal",
            stepId: "Appeal",
            nodeType: "process"
          }
        },
        {
          id: "arrival",
          type: "process",
          position: {
            x: 1940,
            y: 608
          },
          data: {
            label: "Travel to Cyprus",
            stepId: "arrival",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "end",
          position: {
            x: 1960,
            y: 788
          },
          data: {
            label: "Process Complete",
            stepId: "Success",
            nodeType: "end"
          }
        },
        {
          id: "End2",
          type: "end",
          position: {
            x: 2240,
            y: 618
          },
          data: {
            label: "Process Ended",
            stepId: "End2",
            nodeType: "end"
          }
        }
      ],
      edges: [
        {
          id: "income-CheckIncome",
          source: "income",
          target: "CheckIncome",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "CheckIncome-End1",
          source: "CheckIncome",
          target: "End1",
          type: "smoothstep",
          label: "No",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "pr-Decision",
          source: "pr",
          target: "Decision",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "Decision-PR",
          source: "Decision",
          target: "PR",
          type: "smoothstep",
          label: "Approved",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "Decision-Appeal",
          source: "Decision",
          target: "Appeal",
          type: "smoothstep",
          label: "Rejected",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "PR-arrival",
          source: "PR",
          target: "arrival",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "arrival-Success",
          source: "arrival",
          target: "Success",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "Appeal-End2",
          source: "Appeal",
          target: "End2",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        }
      ]
    },
    steps: [
 {
 id: 'choose-investment',
 title: 'Purchase Property',
 description: 'Purchase real estate property in Cyprus worth EUR 300,000 minimum',
 estimatedDuration: '1-2 months',
 documents: [
 'Property deed',
 'Sale agreement',
 'Proof of payment (EUR 300,000)',
 'Property valuation report',
 'Proof of funds',
 'Title deed transfer documents',
 ],
 notes: [
 'Minimum EUR 300,000 investment in real estate',
 'Can be residential or commercial property',
 'Property must be purchased from developer or resale market',
 'VAT may apply (19% on new properties)',
 'Investment must be maintained for life of permit',
 'Popular areas: Limassol, Paphos, Nicosia, Larnaca',
 'Property can be rented out for income',
 ],
 },
 {
 id: 'Business',
 title: 'Invest in Business',
 description: 'Invest EUR 300,000 in a Cyprus business or company',
 estimatedDuration: '1-2 months',
 documents: [
 'Business registration documents',
 'Company incorporation certificate',
 'Proof of investment (EUR 300,000)',
 'Business plan',
 'Share certificates',
 'Bank statements showing investment',
 ],
 notes: [
 'Minimum EUR 300,000 investment in Cyprus business',
 'Can invest in existing business or start new one',
 'Business must be registered in Cyprus',
 'Must create jobs or contribute to Cyprus economy',
 'Investment must be maintained',
 'Can be shareholder or director',
 ],
 },
 {
 id: 'Combo',
 title: 'Combination of Investments',
 description: 'Combine real estate and business investments totaling EUR 300,000',
 estimatedDuration: '1-2 months',
 documents: [
 'Property deed (if applicable)',
 'Business registration (if applicable)',
 'Proof of total investment (EUR 300,000)',
 'Investment breakdown documentation',
 'Proof of funds',
 ],
 notes: [
 'Total investment must equal EUR 300,000 minimum',
 'Can combine real estate + business investments',
 'Example: EUR 150,000 property + EUR 150,000 business',
 'All investments must be in Cyprus',
 'Each investment component must be documented',
 'Provides flexibility in investment strategy',
 ],
 },
 {
 id: 'verify-income',
 title: 'Verify Annual Income Requirement',
 description: 'Prove you have EUR 50,000 annual income ( EUR 15,000 per dependent)',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Bank statements (last 6 months)',
 'Employment contract or business income proof',
 'Tax returns (last 2 years)',
 'Investment income statements',
 ],
 notes: [
 'Main applicant: EUR 50,000/year minimum',
 'Spouse: + EUR 15,000/year',
 'Each dependent: + EUR 10,000/year',
 'Income can be from employment, business, investments, or pension',
 'Must prove income is stable and recurring',
 ],
 },
 {
 id: 'CheckIncome',
 title: 'Assess Income Sufficiency',
 description: 'Verify that your annual income meets the minimum requirements',
 estimatedDuration: '1 week',
 documents: [
 'Income verification documents',
 'Financial statements',
 'Accountant certification (if self-employed)',
 ],
 notes: [
 'Minimum EUR 50,000/year for main applicant',
 'Additional EUR 15,000/year for spouse',
 'Additional EUR 10,000/year per dependent child',
 'Income must be verifiable and stable',
 'Can be from salary, business profits, investments, or pension',
 'If insufficient, consider reducing dependents or increasing income sources',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the Golden Visa application',
 estimatedDuration: '3-4 weeks',
 documents: [
 'Valid passport',
 'Proof of investment (property deed, business registration)',
 'Proof of annual income ( EUR 50,000+)',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Cyprus)',
 'Passport-style photographs',
 'Marriage certificate (if applicable)',
 'Birth certificates for dependents',
 ],
 notes: [
 'All documents must be apostilled (Hague Convention)',
 'Translations to English or Greek accepted (English is official!)',
 'Criminal background check must be recent (within 6 months)',
 'Family members included in application',
 'Health insurance must cover entire family',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application to Cyprus Immigration',
 description: 'Submit your Golden Visa application to Cyprus authorities',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 500)',
 'Appointment confirmation',
 ],
 notes: [
 'Can submit at Cyprus Embassy or in Cyprus',
 'Appointment may be required',
 'Biometrics collected',
 'Application fee is non-refundable',
 'English is official language - no translation issues!',
 ],
 },
 {
 id: 'receive-pr',
 title: 'Wait for Processing',
 description: 'Application is processed by Cyprus Immigration authorities',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: [
 'Processing time: typically 60-90 days',
 'One of fastest PR programs in EU!',
 'Background checks conducted',
 'Investment verification performed',
 'May be contacted for additional information',
 'High approval rate (95%+)',
 ],
 },
 {
 id: 'PR',
 title: 'Receive Permanent Residence',
 description: 'Receive your Cyprus Permanent Residence permit',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Approval notification',
 'Permanent Residence permit card',
 'Immigration stamp in passport',
 ],
 notes: [
 'Receive PERMANENT residence immediately (not temporary!)',
 'Renewable every 5 years (administrative renewal)',
 'No minimum stay requirement',
 'Can work and study in Cyprus',
 'Family members included in permit',
 'Citizenship eligible after 7 years',
 'English is official language',
 'Low corporate tax (12.5%)',
 'Strategic location (Europe/Asia/Africa)',
 'Access to Cyprus healthcare and education',
 ],
 },
 {
 id: 'arrival',
 title: 'Travel to Cyprus',
 description: 'Travel to Cyprus with your Permanent Residence permit',
 estimatedDuration: '1 week',
 documents: [
 'Passport with PR permit',
 'Permanent Residence card',
 'Proof of accommodation',
 'Health insurance',
 ],
 notes: [
 'No minimum stay requirement - can visit anytime',
 'Must visit Cyprus at least once every 2 years to maintain PR',
 'English is official language - easy communication',
 'Major airports: Larnaca (LCA) and Paphos (PFO)',
 'EU member state with excellent quality of life',
 'Warm Mediterranean climate year-round',
 'Strategic location between Europe, Asia, and Africa',
 ],
 },
 {
 id: 'Appeal',
 title: 'Consider Appeal',
 description: 'If application is rejected, consider filing an appeal',
 estimatedDuration: '2-4 months',
 documents: [
 'Rejection letter',
 'Additional supporting documents',
 'Legal representation (recommended)',
 ],
 notes: [
 'Rejection is rare (95% approval rate)',
 'Common rejection reasons: insufficient investment, income issues, criminal record',
 'Appeal must be filed within specified timeframe',
 'Consider consulting Cyprus immigration lawyer',
 'May reapply with corrected application',
 'Can address specific reasons for rejection',
 ],
 },
 ],
 },
 'cy_work_permit': {
 programId: 'cy_work_permit',
 countryCode: 'CY',
 programName: 'Work Permit',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> job-offer[Secure Job Offer<br/>from Cyprus Employer]
 job-offer --> check-salary{"Salary >= EUR 1,500/month<br/>( EUR 18,000/year)?"}
 check-salary -->|Yes| gather-documents[Gather Required Documents]
 check-salary -->|No| End1([Not Eligible])
 gather-documents --> submit-application[Submit Application to<br/>Cyprus Immigration]
 submit-application --> processing[Processing<br/>60-90 Days]
 processing --> decision{Decision}
 decision -->|Approved| receive-permit[Receive Work Permit]
 decision -->|Rejected| consider-appeal[Consider Appeal]
 receive-permit --> travel[Travel to Cyprus]
 travel --> register[Register at Immigration<br/>Office]
 register --> Success([Process Complete])
 consider-appeal --> End2([Process Ended])`,
 reactFlowData: {
      nodes: [
        {
          id: "Start",
          type: "start",
          position: {
            x: 20,
            y: 54
          },
          data: {
            label: "Start Process",
            stepId: "Start",
            nodeType: "start"
          }
        },
        {
          id: "salary",
          type: "decision",
          position: {
            x: 260,
            y: 20
          },
          data: {
            label: "Salary >= EUR 1,500/month<br/> EUR 18,000/year?",
            stepId: "salary",
            nodeType: "decision"
          }
        },
        {
          id: "documents",
          type: "document",
          position: {
            x: 468,
            y: 44
          },
          data: {
            label: "Gather Required Documents",
            stepId: "documents",
            nodeType: "document"
          }
        },
        {
          id: "End1",
          type: "start",
          position: {
            x: 244,
            y: 258
          },
          data: {
            label: "Not Eligible",
            stepId: "End1",
            nodeType: "start"
          }
        },
        {
          id: "application",
          type: "process",
          position: {
            x: 748,
            y: 44
          },
          data: {
            label: "Submit Application to<br/>Cyprus Immigration",
            stepId: "application",
            nodeType: "process"
          }
        },
        {
          id: "processing",
          type: "process",
          position: {
            x: 748,
            y: 248
          },
          data: {
            label: "Processing<br/>60-90 Days",
            stepId: "processing",
            nodeType: "process"
          }
        },
        {
          id: "decision",
          type: "decision",
          position: {
            x: 784,
            y: 428
          },
          data: {
            label: "Decision",
            stepId: "decision",
            nodeType: "decision"
          }
        },
        {
          id: "permit",
          type: "process",
          position: {
            x: 1028,
            y: 44
          },
          data: {
            label: "Receive Work Permit",
            stepId: "permit",
            nodeType: "process"
          }
        },
        {
          id: "appeal",
          type: "process",
          position: {
            x: 1308,
            y: 44
          },
          data: {
            label: "Consider Appeal",
            stepId: "appeal",
            nodeType: "process"
          }
        },
        {
          id: "travel",
          type: "process",
          position: {
            x: 1028,
            y: 248
          },
          data: {
            label: "Travel to Cyprus",
            stepId: "travel",
            nodeType: "process"
          }
        },
        {
          id: "register",
          type: "process",
          position: {
            x: 1028,
            y: 452
          },
          data: {
            label: "Register at Immigration<br/>Office",
            stepId: "register",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "end",
          position: {
            x: 1048,
            y: 656
          },
          data: {
            label: "Process Complete",
            stepId: "Success",
            nodeType: "end"
          }
        },
        {
          id: "End2",
          type: "end",
          position: {
            x: 1328,
            y: 258
          },
          data: {
            label: "Process Ended",
            stepId: "End2",
            nodeType: "end"
          }
        }
      ],
      edges: [
        {
          id: "salary-End1",
          source: "salary",
          target: "End1",
          type: "smoothstep",
          label: "No",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "application-processing",
          source: "application",
          target: "processing",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "processing-decision",
          source: "processing",
          target: "decision",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "permit-travel",
          source: "permit",
          target: "travel",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "travel-register",
          source: "travel",
          target: "register",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "register-Success",
          source: "register",
          target: "Success",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "appeal-End2",
          source: "appeal",
          target: "End2",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        }
      ]
    },
    steps: [
 {
 id: 'job-offer',
 title: 'Secure Job Offer from Cyprus Employer',
 description: 'Obtain a binding job offer from a registered Cyprus employer',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 1,500/month = EUR 18,000/year)',
 'Employer registration documents',
 ],
 notes: [
 'Employer must be registered in Cyprus',
 'Minimum salary: EUR 1,500/month ( EUR 18,000/year)',
 'English is official language - major advantage!',
 'Growing tech and finance sectors',
 'iGaming industry hub',
 'No specific occupation list',
 ],
 },
 {
 id: 'check-salary',
 title: 'Verify Salary Requirement',
 description: 'Ensure the job offer meets minimum salary threshold',
 estimatedDuration: '1 day',
 documents: [
 'Employment contract with salary details',
 ],
 notes: [
 'Minimum salary: EUR 1,500/month (EUR 18,000/year)',
 'Lower than most Western European countries',
 'Salary must be clearly stated in contract',
 ],
 isConditional: true,
 condition: 'Salary must be >= EUR 1,500/month',
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the work permit application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 6 months)',
 'Employment contract',
 'Proof of qualifications (diplomas, certificates)',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Cyprus)',
 'Proof of accommodation in Cyprus',
 'Passport-style photographs',
 ],
 notes: [
 'All documents must be apostilled',
 'English or Greek translations accepted (English is official!)',
 'Criminal background check must be recent (within 6 months)',
 'Health insurance must cover entire stay',
 'Accommodation can be rental or hotel initially',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application to Cyprus Immigration',
 description: 'Submit your work permit application to Cyprus authorities',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 150)',
 'Appointment confirmation',
 ],
 notes: [
 'Can submit at Cyprus Embassy or in Cyprus',
 'Appointment may be required',
 'Biometrics collected',
 'Employer may need to submit documents too',
 'English is official language - easy process!',
 ],
 },
 {
 id: 'processing',
 title: 'Processing Period',
 description: 'Wait for Cyprus Immigration to process your application',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: [
 'Processing time: typically 60-90 days',
 'May be contacted for additional documents',
 'Can check status online',
 'Employer may be contacted for verification',
 ],
 },
 {
 id: 'decision',
 title: 'Application Decision',
 description: 'Wait for decision on your work permit application',
 estimatedDuration: '1-2 weeks',
 documents: [],
 notes: [
 'Decision typically made within processing period',
 'Notification sent by email or post',
 'If rejected, reasons will be provided',
 ],
 },
 {
 id: 'receive-permit',
 title: 'Receive Work Permit',
 description: 'Collect your approved work permit',
 estimatedDuration: '1 week',
 documents: [
 'Passport',
 'Approval notification',
 ],
 notes: [
 'Work permit valid for 1-3 years',
 'Renewable',
 'Can now travel to Cyprus',
 ],
 },
 {
 id: 'consider-appeal',
 title: 'Consider Appeal',
 description: 'If rejected, consider appealing the decision',
 estimatedDuration: 'Varies',
 documents: [
 'Rejection letter',
 'Additional supporting documents',
 ],
 notes: [
 'Appeal must be filed within 30 days',
 'Consult immigration lawyer',
 'Success rate varies',
 ],
 },
 {
 id: 'travel',
 title: 'Travel to Cyprus',
 description: 'Book travel and relocate to Cyprus',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Valid passport',
 'Work permit',
 'Proof of accommodation',
 ],
 notes: [
 'Major airports: Larnaca (LCA) and Paphos (PFO)',
 'English is official language',
 'Warm climate year-round',
 'Strategic location (Europe/Asia/Africa)',
 ],
 },
 {
 id: 'register',
 title: 'Register at Immigration Office',
 description: 'Complete registration formalities in Cyprus',
 estimatedDuration: '1 day',
 documents: [
 'Work permit',
 'All original documents',
 'Proof of accommodation',
 ],
 notes: [
 'Register at local immigration office within 7 days of arrival',
 'Bring all original documents',
 'Family members can join',
 'PR after 5 years, citizenship after 7 years',
 'Low corporate tax (12.5%)',
 ],
 },
 ],
 },
 'cy_startup_visa': {
  programId: 'cy_startup_visa',
  countryCode: 'CY',
  programName: 'Startup Visa',
  totalEstimatedDuration: '3-5 months',
  complexity: 'medium',
  successRate: '80%',
  mermaidDiagram: `
flowchart TD
  Start([Start Process]) --> business-idea[Develop Innovative<br/>Business Idea]
  business-idea --> CheckFunds{Have EUR 20,000<br/>minimum funds?}
  CheckFunds -->|Yes| prepare-business-plan[Prepare Detailed<br/>Business Plan]
  CheckFunds -->|No| End1([Not Eligible])
  prepare-business-plan --> submit-to-ministry[Submit to Cyprus Deputy<br/>Ministry of Research]
  submit-to-ministry --> ministry-approval[Ministry Review<br/>30-60 Days]
  ministry-approval --> Decision1{Approved?}
  Decision1 -->|Yes| gather-documents[Gather Required Documents]
  Decision1 -->|Rejected| consider-resubmission[Consider Resubmission]
  consider-resubmission --> End2([Process Ended])
  gather-documents --> submit-visa[Submit Visa Application]
  submit-visa --> visa-processing[Processing<br/>60-90 Days]
  visa-processing --> Decision2{Decision}
  Decision2 -->|Approved| receive-visa[Receive Startup Visa]
  Decision2 -->|Rejected| consider-appeal[Consider Appeal]
  receive-visa --> travel-to-cyprus[Travel to Cyprus]
  travel-to-cyprus --> register-business[Register Business<br/>in Cyprus]
  register-business --> Success([Process Complete])
  consider-appeal --> End3([Process Ended])`,
  reactFlowData: {
      nodes: [
        {
          id: "Start",
          type: "start",
          position: {
            x: 20,
            y: 54
          },
          data: {
            label: "Start Process",
            stepId: "Start",
            nodeType: "start"
          }
        },
        {
          id: "CheckFunds",
          type: "decision",
          position: {
            x: 260,
            y: 20
          },
          data: {
            label: "Have EUR 20,000<br/>minimum funds?",
            stepId: "CheckFunds",
            nodeType: "decision"
          }
        },
        {
          id: "plan",
          type: "process",
          position: {
            x: 468,
            y: 44
          },
          data: {
            label: "Prepare Detailed<br/>Business Plan",
            stepId: "plan",
            nodeType: "process"
          }
        },
        {
          id: "End1",
          type: "start",
          position: {
            x: 244,
            y: 282
          },
          data: {
            label: "Not Eligible",
            stepId: "End1",
            nodeType: "start"
          }
        },
        {
          id: "ministry",
          type: "process",
          position: {
            x: 748,
            y: 44
          },
          data: {
            label: "Submit to Cyprus Deputy<br/>Ministry of Research",
            stepId: "ministry",
            nodeType: "process"
          }
        },
        {
          id: "approval",
          type: "process",
          position: {
            x: 1058,
            y: 44
          },
          data: {
            label: "Ministry Review<br/>30-60 Days",
            stepId: "approval",
            nodeType: "process"
          }
        },
        {
          id: "Decision1",
          type: "decision",
          position: {
            x: 1094,
            y: 248
          },
          data: {
            label: "Approved?",
            stepId: "Decision1",
            nodeType: "decision"
          }
        },
        {
          id: "documents",
          type: "document",
          position: {
            x: 1338,
            y: 44
          },
          data: {
            label: "Gather Required Documents",
            stepId: "documents",
            nodeType: "document"
          }
        },
        {
          id: "resubmission",
          type: "process",
          position: {
            x: 1618,
            y: 44
          },
          data: {
            label: "Consider Resubmission",
            stepId: "resubmission",
            nodeType: "process"
          }
        },
        {
          id: "End2",
          type: "end",
          position: {
            x: 1638,
            y: 282
          },
          data: {
            label: "Process Ended",
            stepId: "End2",
            nodeType: "end"
          }
        },
        {
          id: "visa",
          type: "process",
          position: {
            x: 1898,
            y: 44
          },
          data: {
            label: "Receive Startup Visa",
            stepId: "visa",
            nodeType: "process"
          }
        },
        {
          id: "processing",
          type: "process",
          position: {
            x: 2208,
            y: 44
          },
          data: {
            label: "Processing<br/>60-90 Days",
            stepId: "processing",
            nodeType: "process"
          }
        },
        {
          id: "Decision2",
          type: "decision",
          position: {
            x: 2244,
            y: 248
          },
          data: {
            label: "Decision",
            stepId: "Decision2",
            nodeType: "decision"
          }
        },
        {
          id: "appeal",
          type: "process",
          position: {
            x: 2488,
            y: 44
          },
          data: {
            label: "Consider Appeal",
            stepId: "appeal",
            nodeType: "process"
          }
        },
        {
          id: "cyprus",
          type: "process",
          position: {
            x: 2768,
            y: 44
          },
          data: {
            label: "Travel to Cyprus",
            stepId: "cyprus",
            nodeType: "process"
          }
        },
        {
          id: "business",
          type: "process",
          position: {
            x: 3048,
            y: 44
          },
          data: {
            label: "Register Business<br/>in Cyprus",
            stepId: "business",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "end",
          position: {
            x: 3068,
            y: 282
          },
          data: {
            label: "Process Complete",
            stepId: "Success",
            nodeType: "end"
          }
        },
        {
          id: "End3",
          type: "end",
          position: {
            x: 2508,
            y: 282
          },
          data: {
            label: "Process Ended",
            stepId: "End3",
            nodeType: "end"
          }
        }
      ],
      edges: [
        {
          id: "CheckFunds-End1",
          source: "CheckFunds",
          target: "End1",
          type: "smoothstep",
          label: "No",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "ministry-ministry",
          source: "ministry",
          target: "ministry",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "approval-Decision1",
          source: "approval",
          target: "Decision1",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "resubmission-End2",
          source: "resubmission",
          target: "End2",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "visa-visa",
          source: "visa",
          target: "visa",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "processing-Decision2",
          source: "processing",
          target: "Decision2",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "business-Success",
          source: "business",
          target: "Success",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "appeal-End3",
          source: "appeal",
          target: "End3",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        }
      ]
    },
    steps: [
    {
      id: 'business-idea',
      title: 'Develop Innovative Business Idea',
      description: 'Create an innovative, scalable business concept suitable for Cyprus startup ecosystem',
      estimatedDuration: '1-2 months',
      documents: [
        'Business concept description',
        'Market research',
        'Competitive analysis',
        'Innovation statement',
      ],
      notes: [
        'Must be innovative and scalable',
        'Technology, digital services, or innovative products preferred',
        'Should demonstrate EU market potential',
        'English is official language - major advantage!',
        'Cyprus offers access to EU, Middle East, and African markets',
      ],
    },
    {
      id: 'prepare-business-plan',
      title: 'Prepare Detailed Business Plan',
      description: 'Create comprehensive business plan for Ministry approval',
      estimatedDuration: '3-4 weeks',
      documents: [
        'Executive summary',
        'Detailed business plan (20-30 pages)',
        'Financial projections (3-5 years)',
        'Market analysis',
        'Team composition and CVs',
        'Proof of funds (EUR 20,000 minimum)',
        'Innovation and scalability statement',
      ],
      notes: [
        'Minimum EUR 20,000 in available funds required',
        'Must demonstrate job creation potential',
        'Should show clear path to profitability',
        'Highlight innovation and competitive advantage',
        'English language plan accepted (official language!)',
        'Consider Cyprus tax benefits (12.5% corporate tax)',
      ],
    },
    {
      id: 'submit-to-ministry',
      title: 'Submit to Cyprus Deputy Ministry of Research',
      description: 'Submit business plan for evaluation and approval',
      estimatedDuration: '1 week',
      documents: [
        'Complete business plan',
        'Application form',
        'Proof of funds',
        'Team member CVs and qualifications',
        'Letters of support (if any)',
      ],
      notes: [
        'Submit to Deputy Ministry of Research, Innovation and Digital Policy',
        'Application fee may apply',
        'Ministry evaluates innovation, scalability, and economic impact',
        'Processing time: 30-60 days',
        'May request additional information or presentation',
      ],
    },
    {
      id: 'ministry-approval',
      title: 'Receive Ministry Approval',
      description: 'Wait for Ministry evaluation and approval decision',
      estimatedDuration: '30-60 days',
      documents: [],
      notes: [
        'Ministry evaluates innovation and economic potential',
        'May be invited for interview or presentation',
        'Approval letter required for visa application',
        'If rejected, can revise and resubmit',
        'Success rate approximately 80% for well-prepared applications',
      ],
    },
    {
      id: 'gather-documents',
      title: 'Gather Required Documents for Visa',
      description: 'Collect all necessary documents for startup visa application',
      estimatedDuration: '2-3 weeks',
      documents: [
        'Valid passport (valid for at least 6 months)',
        'Ministry approval letter',
        'Business plan',
        'Proof of funds (EUR 20,000+)',
        'Criminal background check (FBI check for US citizens)',
        'Health insurance (valid in Cyprus)',
        'Proof of accommodation in Cyprus',
        'Passport-style photographs',
        'Educational certificates',
      ],
      notes: [
        'All documents must be apostilled',
        'English or Greek translations accepted (English is official!)',
        'Criminal background check must be recent (within 6 months)',
        'Health insurance must cover entire stay',
        'Accommodation can be rental or hotel initially',
        'Can include co-founders in application',
      ],
    },
    {
      id: 'submit-visa',
      title: 'Submit Visa Application',
      description: 'Submit startup visa application to Cyprus Immigration',
      estimatedDuration: '1 day',
      documents: [
        'All gathered documents',
        'Ministry approval letter',
        'Application fee payment (~EUR 150)',
        'Appointment confirmation',
      ],
      notes: [
        'Can submit at Cyprus Embassy or in Cyprus',
        'Appointment may be required',
        'Biometrics collected',
        'English is official language - easy process!',
        'Processing time: 60-90 days',
      ],
    },
    {
      id: 'visa-processing',
      title: 'Visa Application Processing',
      description: 'Wait for Cyprus Immigration to process your startup visa application',
      estimatedDuration: '60-90 days',
      documents: [],
      notes: [
        'Processing time typically 60-90 days',
        'May be contacted for additional information',
        'Track application status online',
        'Biometrics already collected at submission',
        'Decision communicated via email and/or mail',
      ],
    },
    {
      id: 'receive-visa',
      title: 'Receive Startup Visa',
      description: 'Receive approval and collect your Cyprus Startup Visa',
      estimatedDuration: '1 week',
      documents: [
        'Approval notification',
        'Passport for visa stamping',
        'Visa fee payment receipt',
      ],
      notes: [
        'Visa initially valid for 1 year',
        'Renewable based on business progress',
        'Multiple entry visa',
        'Family members can apply for dependent visas',
        'Visa allows you to work for your own startup',
      ],
    },
    {
      id: 'travel-to-cyprus',
      title: 'Travel to Cyprus',
      description: 'Travel to Cyprus with your startup visa',
      estimatedDuration: '1-3 days',
      documents: [
        'Valid passport with startup visa',
        'Proof of accommodation',
        'Travel insurance',
        'Ministry approval letter (copy)',
      ],
      notes: [
        'Must register at immigration office within 7 days of arrival',
        'Bring all original documents',
        'English is official language - easy communication!',
        'Major airports: Larnaca (LCA) and Paphos (PFO)',
        'EU member state - Schengen-like benefits',
      ],
    },
    {
      id: 'register-business',
      title: 'Register Business in Cyprus',
      description: 'Complete business registration and immigration formalities',
      estimatedDuration: '2-4 weeks',
      documents: [
        'Business registration application',
        'Company articles of association',
        'Proof of registered office address',
        'Director/shareholder details',
        'Business bank account',
        'Tax registration (TIC number)',
      ],
      notes: [
        'Register business within 30 days of arrival',
        'Register at local immigration office within 7 days',
        'Register with Tax Department for TIC number',
        'Open business bank account',
        'Low corporate tax rate (12.5%)',
        'Access to EU market',
        'Growing startup ecosystem in Nicosia and Limassol',
        'PR eligible after 5 years, citizenship after 7 years',
        'Tax benefits for startups and R&D activities',
        'English is official language - business-friendly!',
      ],
    },
    {
      id: 'consider-resubmission',
      title: 'Consider Resubmission',
      description: 'Review rejection reasons and decide whether to revise and resubmit',
      estimatedDuration: '1-2 weeks',
      documents: [
        'Rejection letter with reasons',
        'Original application materials',
      ],
      notes: [
        'Review rejection reasons carefully',
        'Common issues: insufficient innovation, weak business plan, inadequate funding',
        'Can revise business plan and resubmit',
        'Consider consulting with Cyprus startup advisors',
        'Address all concerns raised by Ministry',
        'No limit on resubmissions, but improve application first',
      ],
    },
    {
      id: 'consider-appeal',
      title: 'Consider Appeal',
      description: 'Review visa rejection and consider appeal options',
      estimatedDuration: '1-2 weeks',
      documents: [
        'Visa rejection letter',
        'Original application documents',
        'Ministry approval letter',
      ],
      notes: [
        'Review rejection reasons carefully',
        'Appeal rights may be limited',
        'Consider reapplying with stronger documentation',
        'Consult with immigration lawyer if needed',
        'Common issues: incomplete documents, concerns about funds',
        'Having Ministry approval is strong foundation for reapplication',
      ],
    },
  ],
 },

 'cy_family_reunification': {
 programId: 'cy_family_reunification',
 countryCode: 'CY',
 programName: 'Family Reunification',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) --> check[Check Eligibility]
 check --> eligible{Sponsor<br/>Eligible?}
 eligible -->|Yes| docs[Gather Documents]
 eligible -->|No| End1([Not Eligible])
 docs --> submit[Submit Application]
 submit --> process[Processing 60-90 Days]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit --> travel[Travel to Cyprus]
 travel --> register[Register at Immigration]
 register --> Success([Complete])
 appeal --> End2([Process Ended])`,
 reactFlowData: {
      nodes: [
        {
          id: "Start",
          type: "start",
          position: {
            x: 20,
            y: 54
          },
          data: {
            label: "Start",
            stepId: "Start",
            nodeType: "start"
          }
        },
        {
          id: "eligible",
          type: "decision",
          position: {
            x: 260,
            y: 20
          },
          data: {
            label: "Sponsor<br/>Eligible?",
            stepId: "eligible",
            nodeType: "decision"
          }
        },
        {
          id: "docs",
          type: "document",
          position: {
            x: 224,
            y: 248
          },
          data: {
            label: "Gather Documents",
            stepId: "docs",
            nodeType: "document"
          }
        },
        {
          id: "End1",
          type: "start",
          position: {
            x: 504,
            y: 258
          },
          data: {
            label: "Not Eligible",
            stepId: "End1",
            nodeType: "start"
          }
        },
        {
          id: "submit",
          type: "process",
          position: {
            x: 224,
            y: 428
          },
          data: {
            label: "Submit Application",
            stepId: "submit",
            nodeType: "process"
          }
        },
        {
          id: "process",
          type: "process",
          position: {
            x: 224,
            y: 608
          },
          data: {
            label: "Processing 60-90 Days",
            stepId: "process",
            nodeType: "process"
          }
        },
        {
          id: "decision",
          type: "decision",
          position: {
            x: 260,
            y: 788
          },
          data: {
            label: "Decision",
            stepId: "decision",
            nodeType: "decision"
          }
        },
        {
          id: "permit",
          type: "process",
          position: {
            x: 224,
            y: 1016
          },
          data: {
            label: "Receive Permit",
            stepId: "permit",
            nodeType: "process"
          }
        },
        {
          id: "appeal",
          type: "process",
          position: {
            x: 504,
            y: 1016
          },
          data: {
            label: "Consider Appeal",
            stepId: "appeal",
            nodeType: "process"
          }
        },
        {
          id: "travel",
          type: "process",
          position: {
            x: 224,
            y: 1196
          },
          data: {
            label: "Travel to Cyprus",
            stepId: "travel",
            nodeType: "process"
          }
        },
        {
          id: "register",
          type: "process",
          position: {
            x: 224,
            y: 1376
          },
          data: {
            label: "Register at Immigration",
            stepId: "register",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "end",
          position: {
            x: 244,
            y: 1556
          },
          data: {
            label: "Complete",
            stepId: "Success",
            nodeType: "end"
          }
        },
        {
          id: "End2",
          type: "end",
          position: {
            x: 524,
            y: 1206
          },
          data: {
            label: "Process Ended",
            stepId: "End2",
            nodeType: "end"
          }
        }
      ],
      edges: [
        {
          id: "eligible-docs",
          source: "eligible",
          target: "docs",
          type: "smoothstep",
          label: "Yes",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "eligible-End1",
          source: "eligible",
          target: "End1",
          type: "smoothstep",
          label: "No",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "docs-submit",
          source: "docs",
          target: "submit",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "submit-process",
          source: "submit",
          target: "process",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "process-decision",
          source: "process",
          target: "decision",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "decision-permit",
          source: "decision",
          target: "permit",
          type: "smoothstep",
          label: "Approved",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "decision-appeal",
          source: "decision",
          target: "appeal",
          type: "smoothstep",
          label: "Rejected",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "permit-travel",
          source: "permit",
          target: "travel",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "travel-register",
          source: "travel",
          target: "register",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "register-Success",
          source: "register",
          target: "Success",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "appeal-End2",
          source: "appeal",
          target: "End2",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        }
      ]
    },
    steps: [
 {
 id: 'check',
 title: 'Check Eligibility',
 description: 'Verify sponsor has valid residence permit',
 estimatedDuration: '1 week',
 documents: ['Sponsor residence permit', 'Proof of relationship'],
 notes: ['Sponsor must have valid permit', 'Spouse, children, parents eligible'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Marriage/birth certificate', 'Proof of accommodation', 'Proof of income', 'Health insurance'],
 notes: ['All documents must be apostilled', 'Translations to Greek or English'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Cyprus Immigration',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee'],
 notes: ['Processing: 60-90 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Immigration reviews application',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: ['Relationship verified'],
 },
 {
 id: 'permit',
 title: 'Receive Permit',
 description: 'Receive family reunification permit',
 estimatedDuration: '1 week',
 documents: ['Residence permit'],
 notes: ['Same validity as sponsor permit'],
 },
 {
 id: 'travel',
 title: 'Travel to Cyprus',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airports: Larnaca (LCA), Paphos (PFO)'],
 },
 {
 id: 'register',
 title: 'Register at Immigration',
 description: 'Register within 7 days',
 estimatedDuration: '1 week',
 documents: ['Proof of address'],
 notes: ['Register within 7 days', 'PR in 5 years'],
 },
 {
 id: 'appeal',
 title: 'Consider Appeal',
 description: 'If rejected, evaluate options',
 estimatedDuration: '1-2 months',
 documents: ['Rejection decision', 'Appeal form'],
 notes: ['Can reapply with additional evidence'],
 },
 ],
 },

 'cy_digital_nomad': {
 programId: 'cy_digital_nomad',
 countryCode: 'CY',
 programName: 'Digital Nomad Visa',
 totalEstimatedDuration: '1-2 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) --> check[Check Eligibility]
 check --> income{EUR 3,500/mo<br/>Income?}
 income -->|Yes| docs[Gather Documents]
 income -->|No| End1([Not Eligible])
 docs --> submit[Submit Application]
 submit --> process[Processing 30-60 Days]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit --> travel[Travel to Cyprus]
 travel --> register[Register at Immigration]
 register --> Success([Complete])
 appeal --> End2([Process Ended])`,
 reactFlowData: {
      nodes: [
        {
          id: "Start",
          type: "start",
          position: {
            x: 20,
            y: 54
          },
          data: {
            label: "Start",
            stepId: "Start",
            nodeType: "start"
          }
        },
        {
          id: "income",
          type: "decision",
          position: {
            x: 260,
            y: 20
          },
          data: {
            label: "EUR 3,500/mo<br/>Income?",
            stepId: "income",
            nodeType: "decision"
          }
        },
        {
          id: "docs",
          type: "document",
          position: {
            x: 224,
            y: 248
          },
          data: {
            label: "Gather Documents",
            stepId: "docs",
            nodeType: "document"
          }
        },
        {
          id: "End1",
          type: "start",
          position: {
            x: 504,
            y: 258
          },
          data: {
            label: "Not Eligible",
            stepId: "End1",
            nodeType: "start"
          }
        },
        {
          id: "submit",
          type: "process",
          position: {
            x: 224,
            y: 428
          },
          data: {
            label: "Submit Application",
            stepId: "submit",
            nodeType: "process"
          }
        },
        {
          id: "process",
          type: "process",
          position: {
            x: 224,
            y: 608
          },
          data: {
            label: "Processing 30-60 Days",
            stepId: "process",
            nodeType: "process"
          }
        },
        {
          id: "decision",
          type: "decision",
          position: {
            x: 260,
            y: 788
          },
          data: {
            label: "Decision",
            stepId: "decision",
            nodeType: "decision"
          }
        },
        {
          id: "permit",
          type: "process",
          position: {
            x: 224,
            y: 1016
          },
          data: {
            label: "Receive Permit",
            stepId: "permit",
            nodeType: "process"
          }
        },
        {
          id: "appeal",
          type: "process",
          position: {
            x: 504,
            y: 1016
          },
          data: {
            label: "Consider Appeal",
            stepId: "appeal",
            nodeType: "process"
          }
        },
        {
          id: "travel",
          type: "process",
          position: {
            x: 224,
            y: 1196
          },
          data: {
            label: "Travel to Cyprus",
            stepId: "travel",
            nodeType: "process"
          }
        },
        {
          id: "register",
          type: "process",
          position: {
            x: 224,
            y: 1376
          },
          data: {
            label: "Register at Immigration",
            stepId: "register",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "end",
          position: {
            x: 244,
            y: 1556
          },
          data: {
            label: "Complete",
            stepId: "Success",
            nodeType: "end"
          }
        },
        {
          id: "End2",
          type: "end",
          position: {
            x: 524,
            y: 1206
          },
          data: {
            label: "Process Ended",
            stepId: "End2",
            nodeType: "end"
          }
        }
      ],
      edges: [
        {
          id: "income-docs",
          source: "income",
          target: "docs",
          type: "smoothstep",
          label: "Yes",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "income-End1",
          source: "income",
          target: "End1",
          type: "smoothstep",
          label: "No",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "docs-submit",
          source: "docs",
          target: "submit",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "submit-process",
          source: "submit",
          target: "process",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "process-decision",
          source: "process",
          target: "decision",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "decision-permit",
          source: "decision",
          target: "permit",
          type: "smoothstep",
          label: "Approved",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "decision-appeal",
          source: "decision",
          target: "appeal",
          type: "smoothstep",
          label: "Rejected",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "permit-travel",
          source: "permit",
          target: "travel",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "travel-register",
          source: "travel",
          target: "register",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "register-Success",
          source: "register",
          target: "Success",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          id: "appeal-End2",
          source: "appeal",
          target: "End2",
          type: "smoothstep",
          style: {
            stroke: "#1F2937",
            strokeWidth: 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        }
      ]
    },
    steps: [
 {
 id: 'check',
 title: 'Check Eligibility',
 description: 'Verify remote work and income',
 estimatedDuration: '1 week',
 documents: ['Employment contract', 'Proof of income'],
 notes: ['EUR 3,500/month minimum', 'Work for non-Cyprus company', 'Mediterranean lifestyle'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Employment contract', 'Bank statements (6 months)', 'Health insurance', 'Criminal check'],
 notes: ['All documents in English or Greek'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit online to Cyprus authorities',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee (EUR 70)'],
 notes: ['Processing: 30-60 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Immigration reviews application',
 estimatedDuration: '30-60 days',
 documents: [],
 notes: ['Income and employment verified'],
 },
 {
 id: 'permit',
 title: 'Receive Permit',
 description: 'Receive digital nomad permit',
 estimatedDuration: '1 week',
 documents: ['Residence permit'],
 notes: ['Valid for 1 year, renewable up to 3 years'],
 },
 {
 id: 'travel',
 title: 'Travel to Cyprus',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airports: Larnaca (LCA), Paphos (PFO)', '300+ days of sunshine'],
 },
 {
 id: 'register',
 title: 'Register at Immigration',
 description: 'Register within 7 days',
 estimatedDuration: '1 week',
 documents: ['Proof of address'],
 notes: ['Register within 7 days', 'No local taxation on foreign income'],
 },
 {
 id: 'appeal',
 title: 'Consider Appeal',
 description: 'If rejected, evaluate options',
 estimatedDuration: '1-2 months',
 documents: ['Rejection decision', 'Appeal form'],
 notes: ['Can reapply with additional evidence'],
 },
 ],
 },
};

