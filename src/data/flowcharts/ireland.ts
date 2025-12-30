/**
 * Ireland Immigration Process Flowcharts
 * Defines the step-by-step process for each Irish visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const irelandFlowcharts: Record<string, FlowchartDefinition> = {
 'ie_critical_skills': {
 programId: 'ie_critical_skills',
 countryCode: 'IE',
 programName: 'Critical Skills Employment Permit',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '90%',
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
          id: "Salary",
          type: "decision",
          position: {
            x: 260,
            y: 20
          },
          data: {
            label: "Salary >= EUR 44,000?",
            stepId: "Salary",
            nodeType: "decision"
          }
        },
        {
          id: "CriticalSkills",
          type: "decision",
          position: {
            x: 540,
            y: 248
          },
          data: {
            label: "Critical Skills List?",
            stepId: "CriticalSkills",
            nodeType: "decision"
          }
        },
        {
          id: "End1",
          type: "start",
          position: {
            x: 244,
            y: 510
          },
          data: {
            label: "Not Eligible",
            stepId: "End1",
            nodeType: "start"
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
          id: "application",
          type: "process",
          position: {
            x: 748,
            y: 44
          },
          data: {
            label: "Employer Applies for Permit",
            stepId: "application",
            nodeType: "process"
          }
        },
        {
          id: "processing",
          type: "process",
          position: {
            x: 748,
            y: 272
          },
          data: {
            label: "Wait for Processing<br/>8 weeks",
            stepId: "processing",
            nodeType: "process"
          }
        },
        {
          id: "Decision",
          type: "decision",
          position: {
            x: 784,
            y: 476
          },
          data: {
            label: "Decision",
            stepId: "Decision",
            nodeType: "decision"
          }
        },
        {
          id: "Permit",
          type: "process",
          position: {
            x: 748,
            y: 704
          },
          data: {
            label: "Receive Employment Permit",
            stepId: "Permit",
            nodeType: "process"
          }
        },
        {
          id: "Appeal",
          type: "process",
          position: {
            x: 1028,
            y: 704
          },
          data: {
            label: "Consider Appeal",
            stepId: "Appeal",
            nodeType: "process"
          }
        },
        {
          id: "visa",
          type: "process",
          position: {
            x: 1288,
            y: 44
          },
          data: {
            label: "Apply for Entry Visa",
            stepId: "visa",
            nodeType: "process"
          }
        },
        {
          id: "arrival",
          type: "process",
          position: {
            x: 1288,
            y: 272
          },
          data: {
            label: "Travel to Ireland",
            stepId: "arrival",
            nodeType: "process"
          }
        },
        {
          id: "registration",
          type: "process",
          position: {
            x: 1288,
            y: 500
          },
          data: {
            label: "Register with GNIB/IRP",
            stepId: "registration",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "end",
          position: {
            x: 1308,
            y: 714
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
            x: 1048,
            y: 884
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
          id: "Salary-CriticalSkills",
          source: "Salary",
          target: "CriticalSkills",
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
          id: "Salary-End1",
          source: "Salary",
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
          id: "CriticalSkills-End1",
          source: "CriticalSkills",
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
          id: "processing-Decision",
          source: "processing",
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
          id: "Decision-Permit",
          source: "Decision",
          target: "Permit",
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
          id: "visa-arrival",
          source: "visa",
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
          id: "arrival-registration",
          source: "arrival",
          target: "registration",
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
          id: "registration-Success",
          source: "registration",
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
 id: 'job-offer',
 title: 'Secure Job Offer',
 description: 'Obtain job offer from Irish employer in critical skills occupation',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 44,000/year)',
 ],
 notes: [
 'Job must be on Critical Skills Occupations List',
 'English-speaking country - major advantage!',
 'Strong tech sector (Google, Facebook, Apple)',
 'Contract must be for at least 2 years',
 ],
 },
 {
 id: 'critical-skills-check',
 title: 'Verify Critical Skills Eligibility',
 description: 'Confirm occupation is on Critical Skills list',
 estimatedDuration: '1 week',
 documents: [
 'Job description',
 'Critical Skills Occupations List',
 ],
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
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (6+ months validity)',
 'University degree',
 'Employment contract',
 'Job description',
 'Proof of qualifications',
 'CV/Resume',
 'Passport photos',
 ],
 notes: [
 'No language requirement (English is official language)',
 'Degree must be relevant to job',
 'No apostille required for most documents',
 'Simpler process than most EU countries',
 ],
 },
 {
 id: 'employer-application',
 title: 'Employer Applies for Permit',
 description: 'Employer submits application to Department of Enterprise',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents',
 'Employer application form',
 'Application fee ( EUR 1,000)',
 ],
 notes: [
 'Employer applies online',
 'No labor market test required for Critical Skills',
 'Faster processing than General Employment Permit',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Department reviews application',
 estimatedDuration: '8 weeks',
 documents: [],
 notes: [
 'Processing typically 8 weeks',
 'Can track status online',
 'May be contacted for additional information',
 ],
 isConditional: true,
 condition: 'Application approved or rejected',
 },
 {
 id: 'Permit',
 title: 'Receive Employment Permit',
 description: 'Collect your approved Critical Skills Employment Permit',
 estimatedDuration: '1 week',
 documents: [
 'Approval letter',
 'Employment permit card',
 'Passport',
 ],
 notes: [
 'Permit valid for 2 years initially',
 'Renewable',
 'Can apply for Stamp 4 (PR) after 2 years - fastest in EU!',
 'Allows immediate family members to join',
 ],
 },
 {
 id: 'Appeal',
 title: 'Consider Appeal',
 description: 'If rejected, consider appealing the decision',
 estimatedDuration: 'Varies (2-4 months)',
 documents: [
 'Rejection letter',
 'Appeal form',
 'Additional supporting documents',
 'Legal representation (recommended)',
 ],
 notes: [
 'Appeal must be filed within 28 days of decision',
 'Consult Irish immigration lawyer',
 'Can reapply with stronger application instead',
 'Appeal processing takes 2-4 months',
 ],
 },
 {
 id: 'entry-visa',
 title: 'Apply for Entry Visa',
 description: 'Apply for visa to enter Ireland (if required)',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Approved employment permit',
 'Passport',
 'Application form',
 ],
 notes: [
 'US citizens do not need entry visa',
 'Can enter Ireland visa-free',
 'Must have employment permit before arrival',
 ],
 },
 {
 id: 'arrival',
 title: 'Travel to Ireland',
 description: 'Enter Ireland with your employment permit',
 estimatedDuration: '1 week',
 documents: [
 'Passport',
 'Employment permit',
 'Employment contract',
 'Proof of accommodation',
 ],
 notes: [
 'Must enter Ireland before permit expiration',
 'Keep all documents accessible during travel',
 'Prepare for registration upon arrival',
 ],
 },
 {
 id: 'registration',
 title: 'Register with GNIB/IRP',
 description: 'Complete registration and obtain Irish Residence Permit card',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport',
 'Employment permit',
 'Employment contract',
 'Proof of accommodation',
 'Registration fee ( EUR 300)',
 ],
 notes: [
 'Register with GNIB/IRP within 90 days of arrival',
 'Receive Irish Residence Permit (IRP card)',
 'Can apply for Stamp 4 (PR) after 2 years - fastest in EU!',
 'Can apply for citizenship after 5 years',
 'English-speaking country - major advantage!',
 ],
 },
 ],
 },
 'ie_step': {
 programId: 'ie_step',
 countryCode: 'IE',
 programName: 'STEP (Startup Entrepreneur Programme)',
 totalEstimatedDuration: '3-6 months',
 complexity: 'medium',
 successRate: '70%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> business-plan[Develop Business Plan]
 business-plan --> Funding{ EUR 50,000 Funding?}
 Funding -->|From Approved Source| Approval[Get Approved Source Validation]
 Funding -->|No| End1([Not Eligible])
 Approval --> gather-documents[Gather Required Documents]
 gather-documents --> application-submission[Submit Application]
 application-submission --> evaluation-interview[Business Plan Evaluation]
 evaluation-interview --> evaluation-interview[Attend Interview]
 evaluation-interview --> Decision{Decision}
 Decision -->|Approved| Permit[Receive STEP Approval]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Permit --> arrival[Travel to Ireland]
 arrival --> Register[Register with GNIB/IRP]
 Register --> LaunchBusiness[Launch Business]
 LaunchBusiness --> Success([Process Complete])
 Appeal --> End2([Process Ended])`,
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
          id: "Funding",
          type: "decision",
          position: {
            x: 260,
            y: 20
          },
          data: {
            label: " EUR 50,000 Funding?",
            stepId: "Funding",
            nodeType: "decision"
          }
        },
        {
          id: "Approval",
          type: "process",
          position: {
            x: 224,
            y: 248
          },
          data: {
            label: "Get Approved Source Validation",
            stepId: "Approval",
            nodeType: "process"
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
          id: "GatherDocs",
          type: "document",
          position: {
            x: 224,
            y: 428
          },
          data: {
            label: "Gather Required Documents",
            stepId: "GatherDocs",
            nodeType: "document"
          }
        },
        {
          id: "Submit",
          type: "process",
          position: {
            x: 224,
            y: 608
          },
          data: {
            label: "Submit Application",
            stepId: "Submit",
            nodeType: "process"
          }
        },
        {
          id: "Evaluation",
          type: "process",
          position: {
            x: 224,
            y: 788
          },
          data: {
            label: "Business Plan Evaluation",
            stepId: "Evaluation",
            nodeType: "process"
          }
        },
        {
          id: "Interview",
          type: "process",
          position: {
            x: 224,
            y: 968
          },
          data: {
            label: "Attend Interview",
            stepId: "Interview",
            nodeType: "process"
          }
        },
        {
          id: "Decision",
          type: "decision",
          position: {
            x: 260,
            y: 1148
          },
          data: {
            label: "Decision",
            stepId: "Decision",
            nodeType: "decision"
          }
        },
        {
          id: "Permit",
          type: "process",
          position: {
            x: 224,
            y: 1376
          },
          data: {
            label: "Receive STEP Approval",
            stepId: "Permit",
            nodeType: "process"
          }
        },
        {
          id: "Appeal",
          type: "process",
          position: {
            x: 504,
            y: 1376
          },
          data: {
            label: "Consider Appeal",
            stepId: "Appeal",
            nodeType: "process"
          }
        },
        {
          id: "Travel",
          type: "process",
          position: {
            x: 224,
            y: 1556
          },
          data: {
            label: "Travel to Ireland",
            stepId: "Travel",
            nodeType: "process"
          }
        },
        {
          id: "Register",
          type: "process",
          position: {
            x: 224,
            y: 1736
          },
          data: {
            label: "Register with GNIB/IRP",
            stepId: "Register",
            nodeType: "process"
          }
        },
        {
          id: "LaunchBusiness",
          type: "process",
          position: {
            x: 224,
            y: 1916
          },
          data: {
            label: "Launch Business",
            stepId: "LaunchBusiness",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "end",
          position: {
            x: 244,
            y: 2096
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
            x: 524,
            y: 1566
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
          id: "Funding-Approval",
          source: "Funding",
          target: "Approval",
          type: "smoothstep",
          label: "From Approved Source",
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
          id: "Funding-End1",
          source: "Funding",
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
          id: "Approval-GatherDocs",
          source: "Approval",
          target: "GatherDocs",
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
          id: "GatherDocs-Submit",
          source: "GatherDocs",
          target: "Submit",
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
          id: "Submit-Evaluation",
          source: "Submit",
          target: "Evaluation",
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
          id: "Evaluation-Interview",
          source: "Evaluation",
          target: "Interview",
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
          id: "Interview-Decision",
          source: "Interview",
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
          id: "Decision-Permit",
          source: "Decision",
          target: "Permit",
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
          id: "Permit-Travel",
          source: "Permit",
          target: "Travel",
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
          id: "Travel-Register",
          source: "Travel",
          target: "Register",
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
          id: "Register-LaunchBusiness",
          source: "Register",
          target: "LaunchBusiness",
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
          id: "LaunchBusiness-Success",
          source: "LaunchBusiness",
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
 id: 'business-plan',
 title: 'Develop Business Plan',
 description: 'Create comprehensive business plan for innovative startup',
 estimatedDuration: '4-8 weeks',
 documents: [
 'Detailed business plan',
 'Market analysis',
 'Financial projections',
 'Innovation description',
 ],
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
 documents: [
 'Proof of EUR 50,000 funding',
 'Letter from approved source',
 'Investment agreement',
 ],
 notes: [
 'Must be from approved source (not personal funds)',
 'Approved sources: Enterprise Ireland, County Enterprise Boards',
 'Business angels, venture capital firms',
 'Competitive Feasibility Fund',
 'Cannot use personal savings',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport',
 'Business plan',
 'Proof of funding from approved source',
 'Educational qualifications',
 'CV/Resume',
 'Proof of business experience',
 ],
 notes: [
 'Must demonstrate entrepreneurial experience',
 'Educational background in relevant field helpful',
 'Previous startup experience valued',
 ],
 },
 {
 id: 'application-submission',
 title: 'Submit Application',
 description: 'Submit STEP application to Enterprise Ireland',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents',
 'Application form',
 'Application fee ( EUR 350)',
 ],
 notes: [
 'Apply through Enterprise Ireland',
 'Applications reviewed quarterly',
 'Competitive selection process',
 ],
 },
 {
 id: 'evaluation-interview',
 title: 'Evaluation and Interview',
 description: 'Business plan evaluation and interview with panel',
 estimatedDuration: '4-8 weeks',
 documents: [
 'Presentation materials',
 'Supporting documents',
 ],
 notes: [
 'Panel evaluates innovation and potential',
 'Must demonstrate job creation potential',
 'Interview may be in-person or virtual',
 'Prepare to defend business model',
 ],
 isConditional: true,
 condition: 'Application approved or rejected',
 },
 {
 id: 'Approval',
 title: 'Get Approved Source Validation',
 description: 'Receive validation from approved funding source',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Validation letter from approved source',
 'Funding agreement',
 'Investment terms',
 ],
 notes: [
 'Approved source must validate your business plan',
 'Confirms EUR 50,000 funding commitment',
 'Required before STEP approval',
 ],
 },
 {
 id: 'Permit',
 title: 'Receive STEP Approval',
 description: 'Receive approval for STEP programme',
 estimatedDuration: '2-4 weeks',
 documents: [
 'STEP approval letter',
 'Residence permit authorization',
 'Passport',
 ],
 notes: [
 'Initial permit for 2 years',
 'Must create jobs and meet milestones',
 'Renewable if business progressing',
 'Can apply for PR after 5 years',
 ],
 },
 {
 id: 'Appeal',
 title: 'Consider Appeal',
 description: 'If rejected, consider appealing the decision',
 estimatedDuration: 'Varies (2-4 months)',
 documents: [
 'Rejection letter',
 'Appeal form',
 'Revised business plan',
 'Additional supporting documents',
 ],
 notes: [
 'Appeal must be filed within 28 days of decision',
 'Consult Irish immigration lawyer',
 'Can reapply in next quarterly round instead',
 'Appeal processing takes 2-4 months',
 ],
 },
 {
 id: 'arrival',
 title: 'Travel to Ireland',
 description: 'Enter Ireland with your STEP approval',
 estimatedDuration: '1 week',
 documents: [
 'Passport',
 'STEP approval letter',
 'Proof of accommodation',
 'Funding documentation',
 ],
 notes: [
 'Must enter Ireland before permit expiration',
 'Keep all documents accessible during travel',
 'Prepare for registration and business setup',
 ],
 },
 {
 id: 'Register',
 title: 'Register with GNIB/IRP',
 description: 'Complete registration and obtain Irish Residence Permit card',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport',
 'STEP approval letter',
 'Proof of accommodation',
 'Registration fee ( EUR 300)',
 ],
 notes: [
 'Register with GNIB/IRP within 90 days of arrival',
 'Receive Irish Residence Permit (IRP card)',
 'Stamp 0 initially, can upgrade to Stamp 4 after meeting milestones',
 ],
 },
 {
 id: 'LaunchBusiness',
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
 'Can apply for PR after 5 years',
 ],
 },
 ],
 },

 'ie_general_employment': {
 programId: 'ie_general_employment',
 countryCode: 'IE',
 programName: 'General Employment Permit',
 totalEstimatedDuration: '3-4 months',
 complexity: 'medium',
 successRate: '75%',
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
            label: "Salary >= EUR 30,000/year?",
            stepId: "salary",
            nodeType: "decision"
          }
        },
        {
          id: "test",
          type: "process",
          position: {
            x: 468,
            y: 44
          },
          data: {
            label: "Employer Conducts<br/>Labor Market Test",
            stepId: "test",
            nodeType: "process"
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
          id: "result",
          type: "decision",
          position: {
            x: 778,
            y: 20
          },
          data: {
            label: "No Suitable<br/>EEA Worker?",
            stepId: "result",
            nodeType: "decision"
          }
        },
        {
          id: "documents",
          type: "document",
          position: {
            x: 986,
            y: 44
          },
          data: {
            label: "Gather Required Documents",
            stepId: "documents",
            nodeType: "document"
          }
        },
        {
          id: "End2",
          type: "start",
          position: {
            x: 762,
            y: 258
          },
          data: {
            label: "Not Eligible",
            stepId: "End2",
            nodeType: "start"
          }
        },
        {
          id: "application",
          type: "process",
          position: {
            x: 1266,
            y: 44
          },
          data: {
            label: "Employer Applies<br/>for Permit",
            stepId: "application",
            nodeType: "process"
          }
        },
        {
          id: "processing",
          type: "process",
          position: {
            x: 1266,
            y: 248
          },
          data: {
            label: "Processing<br/>8-12 Weeks",
            stepId: "processing",
            nodeType: "process"
          }
        },
        {
          id: "decision",
          type: "decision",
          position: {
            x: 1302,
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
            x: 1546,
            y: 44
          },
          data: {
            label: "Receive Employment Permit",
            stepId: "permit",
            nodeType: "process"
          }
        },
        {
          id: "appeal",
          type: "process",
          position: {
            x: 2666,
            y: 44
          },
          data: {
            label: "Consider Appeal",
            stepId: "appeal",
            nodeType: "process"
          }
        },
        {
          id: "visa",
          type: "process",
          position: {
            x: 2106,
            y: 44
          },
          data: {
            label: "Apply for Entry Visa",
            stepId: "visa",
            nodeType: "process"
          }
        },
        {
          id: "ireland",
          type: "process",
          position: {
            x: 2386,
            y: 44
          },
          data: {
            label: "Travel to Ireland",
            stepId: "ireland",
            nodeType: "process"
          }
        },
        {
          id: "gnib",
          type: "process",
          position: {
            x: 1826,
            y: 44
          },
          data: {
            label: "Register with GNIB/IRP",
            stepId: "gnib",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "end",
          position: {
            x: 1846,
            y: 258
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
            x: 2686,
            y: 258
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
          id: "test-test",
          source: "test",
          target: "test",
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
          id: "result-End2",
          source: "result",
          target: "End2",
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
          id: "gnib-Success",
          source: "gnib",
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
 id: 'job-offer',
 title: 'Secure Job Offer from Irish Employer',
 description: 'Obtain a binding job offer from an Irish employer',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 30,000/year)',
 'Employer information',
 ],
 notes: [
 'English-speaking country - major advantage!',
 'Minimum EUR 30,000/year salary',
 'Popular sectors: IT, healthcare, finance, pharma',
 'Dublin and Cork are major tech hubs',
 'Labor market test required (employer must prove no suitable EEA worker)',
 'Path to PR after 5 years',
 ],
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
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for employment permit application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport',
 'Employment contract',
 'Educational qualifications',
 'CV/resume',
 'Labor market test evidence',
 'Employer registration details',
 ],
 notes: [
 'Documents must be in English',
 'Educational qualifications helpful',
 'Employer must be registered in Ireland',
 'Employer applies on your behalf',
 ],
 },
 {
 id: 'employer-application',
 title: 'Employer Applies for Permit',
 description: 'Employer submits employment permit application to Department of Enterprise',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents',
 'Application fee payment (EUR 1,000)',
 'Labor market test evidence',
 ],
 notes: [
 'Employer submits application online',
 'Application fee: EUR 1,000 (paid by employer)',
 'Processing time: 8-12 weeks',
 'Employer is responsible for application',
 ],
 },
 {
 id: 'processing',
 title: 'Processing (8-12 Weeks)',
 description: 'Wait for Department of Enterprise to process application',
 estimatedDuration: '8-12 weeks',
 documents: [],
 notes: [
 'Processing time: typically 8-12 weeks',
 'May request additional information',
 'Track application status online',
 'Labor market test is key factor',
 ],
 },
 {
 id: 'receive-permit',
 title: 'Receive Employment Permit',
 description: 'Receive approved employment permit',
 estimatedDuration: '1 week',
 documents: [
 'Employment permit approval',
 ],
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
 documents: [
 'Employment permit',
 'Passport',
 'Visa application form',
 'Passport photographs',
 ],
 notes: [
 'Apply at Irish embassy in your country',
 'Visa processing: 4-8 weeks',
 'Some nationalities visa-exempt',
 ],
 },
 {
 id: 'travel-to-ireland',
 title: 'Travel to Ireland',
 description: 'Travel to Ireland with entry visa',
 estimatedDuration: '1-3 days',
 documents: [
 'Passport with visa',
 'Employment permit',
 'Employment contract',
 ],
 notes: [
 'Main airport: Dublin Airport (DUB)',
 'English-speaking country',
 'EU member state',
 ],
 },
 {
 id: 'register-gnib',
 title: 'Register with GNIB/IRP',
 description: 'Register with immigration authorities and get IRP card',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport',
 'Employment permit',
 'Proof of address',
 ],
 notes: [
 'Register within 90 days of arrival',
 'Get Irish Residence Permit (IRP) card',
 'Open Irish bank account',
 'Get PPS number (tax number)',
 'Access to Irish healthcare',
 'PR after 5 years',
 'English-speaking country - easy integration!',
 ],
 },
 {
 id: 'consider-appeal',
 title: 'Consider Appeal',
 description: 'If rejected, evaluate appeal options',
 estimatedDuration: '1-2 months',
 documents: [
 'Rejection decision',
 'Appeal form',
 'Additional evidence',
 ],
 notes: [
 'Review rejection reasons',
 'Common issue: labor market test not satisfied',
 'Can reapply with stronger evidence',
 'Consider Critical Skills permit if eligible',
 'Legal consultation recommended',
 ],
 },
 ],
 },

 'ie_investor': {
 programId: 'ie_investor',
 countryCode: 'IE',
 programName: 'Investor Programme',
 totalEstimatedDuration: '4-6 months',
 complexity: 'high',
 successRate: '80%',
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
            label: "Start",
            stepId: "Start",
            nodeType: "start"
          }
        },
        {
          id: "choose",
          type: "process",
          position: {
            x: 260,
            y: 20
          },
          data: {
            label: "Choose Investment Option",
            stepId: "choose",
            nodeType: "process"
          }
        },
        {
          id: "End1",
          type: "start",
          position: {
            x: 540,
            y: 30
          },
          data: {
            label: "Not Eligible",
            stepId: "End1",
            nodeType: "start"
          }
        },
        {
          id: "docs",
          type: "document",
          position: {
            x: 260,
            y: 200
          },
          data: {
            label: "Gather Documents",
            stepId: "docs",
            nodeType: "document"
          }
        },
        {
          id: "submit",
          type: "process",
          position: {
            x: 260,
            y: 380
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
            x: 260,
            y: 560
          },
          data: {
            label: "Processing 4-6 Months",
            stepId: "process",
            nodeType: "process"
          }
        },
        {
          id: "decision",
          type: "decision",
          position: {
            x: 296,
            y: 740
          },
          data: {
            label: "Decision",
            stepId: "decision",
            nodeType: "decision"
          }
        },
        {
          id: "invest",
          type: "process",
          position: {
            x: 260,
            y: 968
          },
          data: {
            label: "Make Investment",
            stepId: "invest",
            nodeType: "process"
          }
        },
        {
          id: "appeal",
          type: "process",
          position: {
            x: 540,
            y: 968
          },
          data: {
            label: "Consider Appeal",
            stepId: "appeal",
            nodeType: "process"
          }
        },
        {
          id: "permit",
          type: "process",
          position: {
            x: 260,
            y: 1148
          },
          data: {
            label: "Receive Stamp 4 Permit",
            stepId: "permit",
            nodeType: "process"
          }
        },
        {
          id: "travel",
          type: "process",
          position: {
            x: 260,
            y: 1328
          },
          data: {
            label: "Travel to Ireland",
            stepId: "travel",
            nodeType: "process"
          }
        },
        {
          id: "register",
          type: "process",
          position: {
            x: 260,
            y: 1508
          },
          data: {
            label: "Register with GNIB/IRP",
            stepId: "register",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "end",
          position: {
            x: 280,
            y: 1688
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
            x: 560,
            y: 1158
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
          id: "choose-docs",
          source: "choose",
          target: "docs",
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
          id: "decision-invest",
          source: "decision",
          target: "invest",
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
          id: "invest-permit",
          source: "invest",
          target: "permit",
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
 id: 'funds',
 title: 'Verify Financial Requirements',
 description: 'Confirm EUR 2M net worth and EUR 1M investment funds',
 estimatedDuration: '2-4 weeks',
 documents: ['Bank statements', 'Asset valuations', 'Source of funds documentation'],
 notes: ['EUR 2M net worth required', 'EUR 1M investment in Irish enterprise', 'Fastest path to PR in EU (immediate Stamp 4!)', 'Citizenship in 5 years'],
 },
 {
 id: 'choose',
 title: 'Choose Investment Option',
 description: 'Select investment type',
 estimatedDuration: '2-4 weeks',
 documents: ['Investment proposal', 'Due diligence reports'],
 notes: ['Enterprise Investment: EUR 1M in Irish business (3+ years)', 'Investment Fund: EUR 1M in approved fund', 'REIT: EUR 2M in Irish REIT', 'Endowment: EUR 500K donation (arts/sports/culture)'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect all required documents',
 estimatedDuration: '4-6 weeks',
 documents: ['Passport', 'Proof of net worth', 'Source of funds', 'Investment plan', 'Criminal background check', 'CV'],
 notes: ['Comprehensive due diligence required', 'All funds must be legally sourced'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Irish Naturalisation and Immigration Service',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee (EUR 1,500)'],
 notes: ['Applications reviewed quarterly', 'Competitive process'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Wait for evaluation',
 estimatedDuration: '4-6 months',
 documents: [],
 notes: ['Thorough due diligence', 'May request additional information'],
 },
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
 notes: ['Immediate Stamp 4 (equivalent to PR!)', 'Can work without restriction', 'Family included', 'Citizenship in 5 years'],
 },
 {
 id: 'travel',
 title: 'Travel to Ireland',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with Stamp 4'],
 notes: ['English-speaking country!', 'EU member state'],
 },
 {
 id: 'register',
 title: 'Register with GNIB/IRP',
 description: 'Complete registration',
 estimatedDuration: '2-4 weeks',
 documents: ['Passport', 'Proof of address', 'Investment confirmation'],
 notes: ['Get IRP card', 'Immediate work rights', 'Citizenship in 5 years', 'English-speaking!'],
 },
 {
 id: 'appeal',
 title: 'Consider Appeal',
 description: 'If rejected, evaluate options',
 estimatedDuration: '2-4 months',
 documents: ['Rejection decision', 'Additional evidence'],
 notes: ['Can reapply with stronger application', 'Legal consultation recommended'],
 },
 ],
 },

 'ie_family_reunification': {
 programId: 'ie_family_reunification',
 countryCode: 'IE',
 programName: 'Family Reunification',
 totalEstimatedDuration: '6-12 months',
 complexity: 'medium',
 successRate: '80%',
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
            label: "Processing 6-12 Months",
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
            label: "Travel to Ireland",
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
            label: "Register at GNIB",
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
 estimatedDuration: '1-2 weeks',
 documents: ['Sponsor residence permit', 'Proof of relationship'],
 notes: ['Sponsor must have Stamp 1/4', 'Spouse, children eligible', 'Income requirement applies'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '4-6 weeks',
 documents: ['Passport', 'Marriage/birth certificate', 'Proof of accommodation', 'Proof of income (EUR 30,000/year)', 'Health insurance'],
 notes: ['All documents must be apostilled', 'Translations to English'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Irish Naturalisation and Immigration Service',
 estimatedDuration: '1-2 weeks',
 documents: ['All documents', 'Application fee (EUR 300)'],
 notes: ['Processing: 6-12 months'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'INIS reviews application',
 estimatedDuration: '6-12 months',
 documents: [],
 notes: ['Relationship verified', 'Income requirement checked'],
 },
 {
 id: 'permit',
 title: 'Receive Permit',
 description: 'Receive family reunification permit',
 estimatedDuration: '2-4 weeks',
 documents: ['Residence permit'],
 notes: ['Stamp 3 (no work) or Stamp 1 (with work)'],
 },
 {
 id: 'travel',
 title: 'Travel to Ireland',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Dublin (DUB)'],
 },
 {
 id: 'register',
 title: 'Register at GNIB',
 description: 'Register and get IRP card',
 estimatedDuration: '2-4 weeks',
 documents: ['Proof of address'],
 notes: ['Get Irish Residence Permit (IRP) card', 'PR in 5 years'],
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

