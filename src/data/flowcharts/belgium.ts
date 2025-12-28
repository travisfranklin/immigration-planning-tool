/**
 * Belgium Immigration Process Flowcharts
 * Defines the step-by-step process for each Belgian visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const belgiumFlowcharts: Record<string, FlowchartDefinition> = {
 'be_eu_blue_card': {
 programId: 'be_eu_blue_card',
 countryCode: 'BE',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '80%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->determine-region[Determine Region]
 determine-region --> job-offer[Secure Job Offer]
 job-offer --> Salary{Salary Threshold Met?}
 Salary -->|Brussels: EUR 66,377| gather-documents[Gather Required Documents]
 Salary -->|Flanders: EUR 61,011| gather-documents
 Salary -->|Wallonia: EUR 56,112| gather-documents
 Salary -->|No| End1([Not Eligible])
 gather-documents --> work-permit[Apply for Work Permit]
 work-permit --> WaitPermit[Wait for Permit<br/>4-6 weeks]
 WaitPermit --> PermitDecision{Permit Approved?}
 PermitDecision -->|Yes| visa-application[Apply for Visa]
 PermitDecision -->|No| End2([Application Denied])
 visa-application --> WaitVisa[Wait for Visa<br/>4-6 weeks]
 WaitVisa --> VisaDecision{Visa Approved?}
 VisaDecision -->|Approved| Visa[Receive Blue Card]
 VisaDecision -->|Rejected| Appeal[Consider Appeal]
 Visa --> arrival[Travel to Belgium]
 arrival --> Register[Register at Commune]
 Register --> Success([Process Complete])
 Appeal --> End2`,
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
          id: "offer",
          type: "process",
          position: {
            x: 260,
            y: 20
          },
          data: {
            label: "Secure Job Offer",
            stepId: "offer",
            nodeType: "process"
          }
        },
        {
          id: "Salary",
          type: "decision",
          position: {
            x: 296,
            y: 200
          },
          data: {
            label: "Salary Threshold Met?",
            stepId: "Salary",
            nodeType: "decision"
          }
        },
        {
          id: "documents",
          type: "document",
          position: {
            x: 540,
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
            x: 280,
            y: 462
          },
          data: {
            label: "Not Eligible",
            stepId: "End1",
            nodeType: "start"
          }
        },
        {
          id: "permit",
          type: "process",
          position: {
            x: 540,
            y: 224
          },
          data: {
            label: "Apply for Work Permit",
            stepId: "permit",
            nodeType: "process"
          }
        },
        {
          id: "WaitPermit",
          type: "process",
          position: {
            x: 540,
            y: 452
          },
          data: {
            label: "Wait for Permit<br/>4-6 weeks",
            stepId: "WaitPermit",
            nodeType: "process"
          }
        },
        {
          id: "PermitDecision",
          type: "decision",
          position: {
            x: 576,
            y: 656
          },
          data: {
            label: "Permit Approved?",
            stepId: "PermitDecision",
            nodeType: "decision"
          }
        },
        {
          id: "application",
          type: "process",
          position: {
            x: 820,
            y: 20
          },
          data: {
            label: "Apply for Visa",
            stepId: "application",
            nodeType: "process"
          }
        },
        {
          id: "End2",
          type: "start",
          position: {
            x: 560,
            y: 894
          },
          data: {
            label: "Application Denied",
            stepId: "End2",
            nodeType: "start"
          }
        },
        {
          id: "WaitVisa",
          type: "process",
          position: {
            x: 820,
            y: 224
          },
          data: {
            label: "Wait for Visa<br/>4-6 weeks",
            stepId: "WaitVisa",
            nodeType: "process"
          }
        },
        {
          id: "VisaDecision",
          type: "decision",
          position: {
            x: 856,
            y: 428
          },
          data: {
            label: "Visa Approved?",
            stepId: "VisaDecision",
            nodeType: "decision"
          }
        },
        {
          id: "Visa",
          type: "process",
          position: {
            x: 1100,
            y: 680
          },
          data: {
            label: "Receive Blue Card",
            stepId: "Visa",
            nodeType: "process"
          }
        },
        {
          id: "Appeal",
          type: "process",
          position: {
            x: 820,
            y: 680
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
            x: 1100,
            y: 884
          },
          data: {
            label: "Travel to Belgium",
            stepId: "arrival",
            nodeType: "process"
          }
        },
        {
          id: "Register",
          type: "process",
          position: {
            x: 1100,
            y: 1064
          },
          data: {
            label: "Register at Commune",
            stepId: "Register",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "end",
          position: {
            x: 1120,
            y: 1244
          },
          data: {
            label: "Process Complete",
            stepId: "Success",
            nodeType: "end"
          }
        }
      ],
      edges: [
        {
          id: "offer-Salary",
          source: "offer",
          target: "Salary",
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
          id: "permit-WaitPermit",
          source: "permit",
          target: "WaitPermit",
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
          id: "WaitPermit-PermitDecision",
          source: "WaitPermit",
          target: "PermitDecision",
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
          id: "PermitDecision-End2",
          source: "PermitDecision",
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
          id: "application-WaitVisa",
          source: "application",
          target: "WaitVisa",
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
          id: "WaitVisa-VisaDecision",
          source: "WaitVisa",
          target: "VisaDecision",
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
          id: "VisaDecision-Visa",
          source: "VisaDecision",
          target: "Visa",
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
          id: "VisaDecision-Appeal",
          source: "VisaDecision",
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
          id: "Visa-arrival",
          source: "Visa",
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
          id: "arrival-Register",
          source: "arrival",
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
          id: "Register-Success",
          source: "Register",
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
 id: 'determine-region',
 title: 'Determine Region',
 description: 'Identify which Belgian region you will work in',
 estimatedDuration: '1 week',
 documents: [
 'Job offer letter with work location',
 ],
 notes: [
 'Belgium has 3 regions with different salary thresholds',
 'Brussels: EUR 66,377/year',
 'Flanders: EUR 61,011/year',
 'Wallonia: EUR 56,112/year',
 'Salary threshold determines eligibility',
 ],
 },
 {
 id: 'job-offer',
 title: 'Secure Job Offer',
 description: 'Obtain binding job offer from Belgian employer',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (region-specific)',
 'Company registration documents',
 ],
 notes: [
 'Employer must be registered in Belgium',
 'Contract must be for at least 12 months',
 'Salary must meet regional threshold',
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
 'Passport photos',
 ],
 notes: [
 'Documents must be in Dutch, French, or German',
 'Certified translations required',
 'Degree must be recognized as equivalent',
 ],
 },
 {
 id: 'work-permit',
 title: 'Apply for Work Permit',
 description: 'Employer applies for work permit (Permis de Travail)',
 estimatedDuration: '4-6 weeks',
 documents: [
 'All gathered documents',
 'Employer application form',
 'Proof of employer registration',
 ],
 notes: [
 'Employer submits application to regional authority',
 'Brussels: Brussels Economy and Employment',
 'Flanders: VDAB',
 'Wallonia: Forem',
 'Work permit must be approved before visa application',
 ],
 },
 {
 id: 'visa-application',
 title: 'Apply for Visa',
 description: 'Apply for long-stay visa (Type D)',
 estimatedDuration: '4-6 weeks',
 documents: [
 'Approved work permit',
 'Passport',
 'Application form',
 'Photos',
 'Proof of accommodation',
 'Application fee ( EUR 180-220)',
 ],
 notes: [
 'Apply at Belgian embassy/consulate in home country',
 'Book appointment in advance',
 'Bring original documents',
 ],
 },
 {
 id: 'Visa',
 title: 'Receive Blue Card',
 description: 'Receive your EU Blue Card approval and visa',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Approval notification',
 'EU Blue Card visa in passport (Type D)',
 'Approved work permit',
 ],
 notes: [
 'Blue Card is valid for up to 1 year initially',
 'Can be renewed for up to 3 years at a time',
 'Allows travel within Schengen area',
 'Must be converted to residence permit card upon arrival in Belgium',
 ],
 },
 {
 id: 'arrival',
 title: 'Travel to Belgium',
 description: 'Travel to Belgium with your Blue Card visa',
 estimatedDuration: '1 week',
 documents: [
 'Passport with Blue Card visa',
 'Work permit',
 'Employment contract',
 'Proof of accommodation',
 ],
 notes: [
 'Must enter Belgium before visa expiration',
 'Keep all documents accessible during travel',
 'Prepare for registration upon arrival',
 ],
 },
 {
 id: 'Register',
 title: 'Register at Commune',
 description: 'Complete registration at your local commune (municipality)',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport with visa',
 'Work permit',
 'Employment contract',
 'Proof of accommodation (rental contract or property deed)',
 'Passport photos',
 'Registration fee (varies by commune)',
 ],
 notes: [
 'Must register within 8 working days of arrival',
 'Commune is the local municipal administration',
 'Receive residence permit card (Blue Card)',
 'May need to provide proof of health insurance',
 'Receive Belgian ID number (Rijksregisternummer/Numéro de registre national)',
 'Book appointment online if required by your commune',
 ],
 },
 {
 id: 'Appeal',
 title: 'Consider Appeal',
 description: 'If visa application is rejected, consider filing an appeal',
 estimatedDuration: '2-4 months',
 documents: [
 'Rejection letter',
 'Additional supporting documents',
 'Legal representation (recommended)',
 ],
 notes: [
 'Appeal must be filed within specified timeframe (usually 30 days)',
 'Consider consulting an immigration lawyer',
 'Address specific reasons for rejection',
 'May reapply with stronger application instead',
 'Can appeal to the Council for Alien Law Litigation (Conseil du Contentieux des Étrangers)',
 ],
 },
 ],
 },
 'be_highly_skilled': {
 programId: 'be_highly_skilled',
 countryCode: 'BE',
 programName: 'Highly Skilled Worker Permit',
 totalEstimatedDuration: '2-4 months',
 complexity: 'medium',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer]
 job-offer --> Salary{"Salary >= EUR 51,613?"}
 Salary -->|Yes| gather-documents[Gather Required Documents]
 Salary -->|No| End1([Not Eligible])
 gather-documents --> fast-track-application[Fast-Track Application]
 fast-track-application --> Wait[Wait for Processing<br/>4 weeks]
 Wait --> Decision{Decision}
 Decision -->|Approved| Visa[Receive Work Permit and Visa]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Visa --> arrival[Travel to Belgium]
 arrival --> Register[Register at Commune]
 Register --> Success([Process Complete])
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
            label: "Salary >= EUR 51,613?",
            stepId: "Salary",
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
            label: "Fast-Track Application",
            stepId: "application",
            nodeType: "process"
          }
        },
        {
          id: "Wait",
          type: "process",
          position: {
            x: 748,
            y: 248
          },
          data: {
            label: "Wait for Processing<br/>4 weeks",
            stepId: "Wait",
            nodeType: "process"
          }
        },
        {
          id: "Decision",
          type: "decision",
          position: {
            x: 784,
            y: 428
          },
          data: {
            label: "Decision",
            stepId: "Decision",
            nodeType: "decision"
          }
        },
        {
          id: "Visa",
          type: "process",
          position: {
            x: 748,
            y: 656
          },
          data: {
            label: "Receive Work Permit and Visa",
            stepId: "Visa",
            nodeType: "process"
          }
        },
        {
          id: "Appeal",
          type: "process",
          position: {
            x: 1028,
            y: 656
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
            x: 748,
            y: 836
          },
          data: {
            label: "Travel to Belgium",
            stepId: "arrival",
            nodeType: "process"
          }
        },
        {
          id: "Register",
          type: "process",
          position: {
            x: 748,
            y: 1016
          },
          data: {
            label: "Register at Commune",
            stepId: "Register",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "end",
          position: {
            x: 768,
            y: 1196
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
            y: 846
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
          id: "application-Wait",
          source: "application",
          target: "Wait",
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
          id: "Wait-Decision",
          source: "Wait",
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
          id: "Decision-Visa",
          source: "Decision",
          target: "Visa",
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
          id: "Visa-arrival",
          source: "Visa",
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
          id: "arrival-Register",
          source: "arrival",
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
          id: "Register-Success",
          source: "Register",
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
 description: 'Obtain job offer from Belgian employer',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 51,613/year)',
 ],
 notes: [
 'Lower salary threshold than EU Blue Card',
 'Faster processing time',
 'Employer must demonstrate high-skilled position',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect necessary documentation',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport',
 'University degree (apostilled)',
 'Employment contract',
 'Proof of qualifications',
 'Criminal background check',
 'Medical certificate',
 ],
 notes: [
 'Simplified documentation compared to standard work permit',
 'Fast-track processing available',
 'Degree recognition may be required',
 ],
 },
 {
 id: 'fast-track-application',
 title: 'Submit Fast-Track Application',
 description: 'Employer submits combined work permit and visa application',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents',
 'Employer application',
 'Application fee',
 ],
 notes: [
 'Single application for both work permit and visa',
 'Faster than standard EU Blue Card process',
 'Employer submits on your behalf',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Application review and decision',
 estimatedDuration: '4 weeks',
 documents: [],
 notes: [
 'Faster processing than standard permits',
 'Background checks conducted',
 'Employer may be contacted',
 ],
 },
 {
 id: 'Visa',
 title: 'Receive Work Permit and Visa',
 description: 'Receive your approved work permit and visa',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Approval notification',
 'Work permit (Single Permit)',
 'Visa in passport (Type D)',
 ],
 notes: [
 'Single Permit combines work and residence authorization',
 'Valid for up to 1 year initially',
 'Can be renewed for up to 3 years at a time',
 'Allows travel within Schengen area',
 'Must be converted to residence permit card upon arrival',
 ],
 },
 {
 id: 'arrival',
 title: 'Travel to Belgium',
 description: 'Travel to Belgium with your work permit and visa',
 estimatedDuration: '1 week',
 documents: [
 'Passport with visa',
 'Work permit (Single Permit)',
 'Employment contract',
 'Proof of accommodation',
 ],
 notes: [
 'Must enter Belgium before visa expiration',
 'Keep all documents accessible during travel',
 'Prepare for registration upon arrival',
 ],
 },
 {
 id: 'Register',
 title: 'Register at Commune',
 description: 'Complete registration at your local commune (municipality)',
 estimatedDuration: '2 weeks',
 documents: [
 'Passport with visa',
 'Work permit (Single Permit)',
 'Employment contract',
 'Proof of accommodation (rental contract or property deed)',
 'Passport photos',
 'Registration fee (varies by commune)',
 ],
 notes: [
 'Must register within 8 working days of arrival',
 'Commune is the local municipal administration',
 'Receive residence permit card',
 'Receive Belgian ID number (Rijksregisternummer/Numéro de registre national)',
 'Can apply for permanent residence after 5 years',
 'Book appointment online if required by your commune',
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
 'Appeal must be filed within specified timeframe (usually 30 days)',
 'Consider consulting an immigration lawyer',
 'Address specific reasons for rejection (e.g., insufficient qualifications, salary issues)',
 'May reapply with stronger application instead',
 'Can appeal to the Council for Alien Law Litigation (Conseil du Contentieux des Étrangers)',
 ],
 },
 ],
 },

 'be_professional_card': {
 programId: 'be_professional_card',
 countryCode: 'BE',
 programName: 'Professional Card (Self-Employment)',
 totalEstimatedDuration: '3-5 months',
 complexity: 'high',
 successRate: '70%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->business-plan[Create Business Plan]
 business-plan -->capital[Secure Capital EUR 18,600+]
 capital -->gather-documents[Gather Required Documents]
 gather-documents -->regional-approval[Obtain Regional Approval]
 regional-approval -->submit-application[Submit Application]
 submit-application -->processing[Wait for Processing<br/>10-14 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-card[Receive Professional Card]
 decision -->|Rejected| End1([Application Denied])
 receive-card -->travel[Travel to Belgium]
 travel -->registration[Register at Commune]
 registration --> Success([Process Complete])`,
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
          id: "capital",
          type: "process",
          position: {
            x: 260,
            y: 20
          },
          data: {
            label: "Secure Capital EUR 18,600+",
            stepId: "capital",
            nodeType: "process"
          }
        },
        {
          id: "documents",
          type: "document",
          position: {
            x: 540,
            y: 20
          },
          data: {
            label: "Gather Required Documents",
            stepId: "documents",
            nodeType: "document"
          }
        },
        {
          id: "approval",
          type: "process",
          position: {
            x: 820,
            y: 20
          },
          data: {
            label: "Obtain Regional Approval",
            stepId: "approval",
            nodeType: "process"
          }
        },
        {
          id: "application",
          type: "process",
          position: {
            x: 1100,
            y: 20
          },
          data: {
            label: "Submit Application",
            stepId: "application",
            nodeType: "process"
          }
        },
        {
          id: "processing",
          type: "process",
          position: {
            x: 1100,
            y: 200
          },
          data: {
            label: "Wait for Processing<br/>10-14 weeks",
            stepId: "processing",
            nodeType: "process"
          }
        },
        {
          id: "decision",
          type: "decision",
          position: {
            x: 1136,
            y: 380
          },
          data: {
            label: "Decision",
            stepId: "decision",
            nodeType: "decision"
          }
        },
        {
          id: "card",
          type: "process",
          position: {
            x: 1380,
            y: 20
          },
          data: {
            label: "Receive Professional Card",
            stepId: "card",
            nodeType: "process"
          }
        },
        {
          id: "End1",
          type: "start",
          position: {
            x: 1120,
            y: 608
          },
          data: {
            label: "Application Denied",
            stepId: "End1",
            nodeType: "start"
          }
        },
        {
          id: "travel",
          type: "process",
          position: {
            x: 1380,
            y: 200
          },
          data: {
            label: "Travel to Belgium",
            stepId: "travel",
            nodeType: "process"
          }
        },
        {
          id: "registration",
          type: "process",
          position: {
            x: 1380,
            y: 404
          },
          data: {
            label: "Register at Commune",
            stepId: "registration",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "end",
          position: {
            x: 1400,
            y: 608
          },
          data: {
            label: "Process Complete",
            stepId: "Success",
            nodeType: "end"
          }
        }
      ],
      edges: [
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
          id: "decision-End1",
          source: "decision",
          target: "End1",
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
          id: "card-travel",
          source: "card",
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
          id: "travel-registration",
          source: "travel",
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
        }
      ]
    },
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
 'Plan must demonstrate economic benefit to Belgium',
 'Include realistic financial forecasts',
 'Show market demand for services',
 ],
 },
 {
 id: 'capital',
 title: 'Secure Capital',
 description: 'Obtain minimum EUR 18,600 in startup capital',
 estimatedDuration: '4-8 weeks',
 documents: [
 'Bank statements',
 'Proof of capital source',
 'Investment agreements (if applicable)',
 ],
 notes: [
 'Minimum EUR 18,600 required (3 months living expenses)',
 'Funds must be available in Belgium',
 'Can be personal savings or investment',
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
 'Non-Dutch/French/German documents need translation',
 'Apostille required for foreign documents',
 ],
 },
 {
 id: 'regional-approval',
 title: 'Obtain Regional Approval',
 description: 'Get approval from the appropriate Belgian region',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Business plan',
 'Proof of capital',
 'Regional application form',
 ],
 notes: [
 'Regional approval required before visa application',
 'Different regions may have different requirements',
 'Contact regional economic development office',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit your professional card application',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Regional approval letter',
 'Application fee',
 ],
 notes: [
 'Submit to Belgian embassy/consulate',
 'Book appointment in advance',
 'Bring original documents and copies',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Embassy processes your application',
 estimatedDuration: '10-14 weeks',
 documents: [],
 notes: [
 'Processing time varies by location',
 'May be contacted for additional information',
 'Background checks conducted',
 ],
 },
 {
 id: 'receive-card',
 title: 'Receive Professional Card',
 description: 'Receive your approved professional card',
 estimatedDuration: '1 week',
 documents: [
 'Passport with visa stamp',
 ],
 notes: [
 'Card valid for 1 year',
 'Can be renewed if business is progressing',
 'Leads to permanent residency',
 ],
 },
 {
 id: 'travel',
 title: 'Travel to Belgium',
 description: 'Travel to Belgium with your professional card',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with visa',
 'Proof of accommodation',
 'Travel documents',
 ],
 notes: [
 'Must enter Belgium within 6 months of visa issuance',
 'Keep all documents for registration',
 ],
 },
 {
 id: 'registration',
 title: 'Register at Commune',
 description: 'Complete registration at local commune',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with visa',
 'Proof of accommodation',
 'Health insurance',
 ],
 notes: [
 'Must register within 8 days of arrival',
 'Receive residence permit card',
 'Can then register business',
 ],
 },
 ],
 },

 'be_startup': {
 programId: 'be_startup',
 countryCode: 'BE',
 programName: 'Startup Visa',
 totalEstimatedDuration: '2-4 months',
 complexity: 'high',
 successRate: '65%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->business-idea[Develop Innovative Business Idea]
 business-idea -->accelerator-search[Find Approved Accelerator/Incubator]
 accelerator-search -->business-plan[Create Detailed Business Plan]
 business-plan -->capital[Secure Funding EUR 50,000+]
 capital -->accelerator-approval[Get Accelerator Recognition]
 accelerator-approval -->gather-documents[Gather Required Documents]
 gather-documents -->submit-application[Submit Application]
 submit-application -->processing[Wait for Processing<br/>8-12 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive Startup Visa]
 decision -->|Rejected| End1([Application Denied])
 receive-visa -->travel[Travel to Belgium]
 travel -->registration[Register at Commune]
 registration --> Success([Process Complete])`,
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
          id: "search",
          type: "process",
          position: {
            x: 260,
            y: 20
          },
          data: {
            label: "Find Approved Accelerator/Incubator",
            stepId: "search",
            nodeType: "process"
          }
        },
        {
          id: "plan",
          type: "process",
          position: {
            x: 540,
            y: 20
          },
          data: {
            label: "Create Detailed Business Plan",
            stepId: "plan",
            nodeType: "process"
          }
        },
        {
          id: "capital",
          type: "process",
          position: {
            x: 540,
            y: 200
          },
          data: {
            label: "Secure Funding EUR 50,000+",
            stepId: "capital",
            nodeType: "process"
          }
        },
        {
          id: "approval",
          type: "process",
          position: {
            x: 820,
            y: 20
          },
          data: {
            label: "Get Accelerator Recognition",
            stepId: "approval",
            nodeType: "process"
          }
        },
        {
          id: "documents",
          type: "document",
          position: {
            x: 1100,
            y: 20
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
            x: 1380,
            y: 20
          },
          data: {
            label: "Submit Application",
            stepId: "application",
            nodeType: "process"
          }
        },
        {
          id: "processing",
          type: "process",
          position: {
            x: 1380,
            y: 200
          },
          data: {
            label: "Wait for Processing<br/>8-12 weeks",
            stepId: "processing",
            nodeType: "process"
          }
        },
        {
          id: "decision",
          type: "decision",
          position: {
            x: 1416,
            y: 380
          },
          data: {
            label: "Decision",
            stepId: "decision",
            nodeType: "decision"
          }
        },
        {
          id: "visa",
          type: "process",
          position: {
            x: 1660,
            y: 20
          },
          data: {
            label: "Receive Startup Visa",
            stepId: "visa",
            nodeType: "process"
          }
        },
        {
          id: "End1",
          type: "start",
          position: {
            x: 1400,
            y: 608
          },
          data: {
            label: "Application Denied",
            stepId: "End1",
            nodeType: "start"
          }
        },
        {
          id: "travel",
          type: "process",
          position: {
            x: 1660,
            y: 200
          },
          data: {
            label: "Travel to Belgium",
            stepId: "travel",
            nodeType: "process"
          }
        },
        {
          id: "registration",
          type: "process",
          position: {
            x: 1660,
            y: 404
          },
          data: {
            label: "Register at Commune",
            stepId: "registration",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "end",
          position: {
            x: 1680,
            y: 608
          },
          data: {
            label: "Process Complete",
            stepId: "Success",
            nodeType: "end"
          }
        }
      ],
      edges: [
        {
          id: "plan-capital",
          source: "plan",
          target: "capital",
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
          id: "decision-End1",
          source: "decision",
          target: "End1",
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
          id: "visa-travel",
          source: "visa",
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
          id: "travel-registration",
          source: "travel",
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
        }
      ]
    },
    steps: [
 {
 id: 'business-idea',
 title: 'Develop Innovative Business Idea',
 description: 'Develop an innovative business concept',
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
 id: 'accelerator-search',
 title: 'Find Approved Accelerator/Incubator',
 description: 'Identify and contact approved Belgian accelerators or incubators',
 estimatedDuration: '2-4 weeks',
 documents: [
 'List of approved accelerators',
 'Accelerator contact information',
 ],
 notes: [
 'Must be recognized by Belgian authorities',
 'Accelerator must provide mentorship and support',
 'Check official list of approved programs',
 ],
 },
 {
 id: 'business-plan',
 title: 'Create Detailed Business Plan',
 description: 'Prepare a comprehensive business plan',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Executive summary',
 'Financial projections (3-5 years)',
 'Marketing strategy',
 'Organizational structure',
 'Risk analysis',
 ],
 notes: [
 'Plan must be in Dutch, French, or English',
 'Include realistic financial forecasts',
 'Show understanding of target market',
 ],
 },
 {
 id: 'capital',
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
 'Funds must be available in Belgium',
 'Can be personal savings or investment',
 ],
 },
 {
 id: 'accelerator-approval',
 title: 'Get Accelerator Recognition',
 description: 'Obtain formal recognition from approved accelerator/incubator',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Business plan',
 'Accelerator application',
 'Proof of funding',
 ],
 notes: [
 'Accelerator must provide letter of support',
 'Recognition is required for visa approval',
 'Accelerator provides mentorship and resources',
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
 'Accelerator recognition letter',
 'Proof of funding',
 'CV/Resume',
 'Proof of accommodation',
 'Health insurance',
 ],
 notes: [
 'All documents must be certified copies',
 'Non-Dutch/French/German documents need translation',
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
 'Application fee',
 ],
 notes: [
 'Submit to Belgian embassy/consulate',
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
 'Visa valid for 1 year',
 'Can be renewed if business is progressing',
 'Leads to permanent residency',
 ],
 },
 {
 id: 'travel',
 title: 'Travel to Belgium',
 description: 'Travel to Belgium with your startup visa',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with visa',
 'Proof of accommodation',
 'Travel documents',
 ],
 notes: [
 'Must enter Belgium within 6 months of visa issuance',
 'Keep all documents for registration',
 ],
 },
 {
 id: 'registration',
 title: 'Register at Commune',
 description: 'Complete registration at local commune',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with visa',
 'Proof of accommodation',
 'Health insurance',
 ],
 notes: [
 'Must register within 8 days of arrival',
 'Receive residence permit card',
 'Can then register business',
 ],
 },
 ],
 },

 'be_family_reunification': {
 programId: 'be_family_reunification',
 countryCode: 'BE',
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
 receive-visa -->travel[Travel to Belgium]
 travel -->registration[Register at Commune]
 registration --> Success([Process Complete])`,
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
          id: "check",
          type: "process",
          position: {
            x: 260,
            y: 44
          },
          data: {
            label: "Verify Housing Requirements",
            stepId: "check",
            nodeType: "process"
          }
        },
        {
          id: "End1",
          type: "start",
          position: {
            x: 280,
            y: 258
          },
          data: {
            label: "Not Eligible",
            stepId: "End1",
            nodeType: "start"
          }
        },
        {
          id: "ok",
          type: "decision",
          position: {
            x: 540,
            y: 20
          },
          data: {
            label: "Housing Adequate?",
            stepId: "ok",
            nodeType: "decision"
          }
        },
        {
          id: "documents",
          type: "document",
          position: {
            x: 748,
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
            x: 524,
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
            x: 1028,
            y: 44
          },
          data: {
            label: "Submit Application",
            stepId: "application",
            nodeType: "process"
          }
        },
        {
          id: "processing",
          type: "process",
          position: {
            x: 1028,
            y: 248
          },
          data: {
            label: "Wait for Processing<br/>12 weeks",
            stepId: "processing",
            nodeType: "process"
          }
        },
        {
          id: "decision",
          type: "decision",
          position: {
            x: 1064,
            y: 428
          },
          data: {
            label: "Decision",
            stepId: "decision",
            nodeType: "decision"
          }
        },
        {
          id: "visa",
          type: "process",
          position: {
            x: 1308,
            y: 44
          },
          data: {
            label: "Receive Family Reunification Visa",
            stepId: "visa",
            nodeType: "process"
          }
        },
        {
          id: "End3",
          type: "start",
          position: {
            x: 1048,
            y: 656
          },
          data: {
            label: "Application Denied",
            stepId: "End3",
            nodeType: "start"
          }
        },
        {
          id: "travel",
          type: "process",
          position: {
            x: 1308,
            y: 248
          },
          data: {
            label: "Travel to Belgium",
            stepId: "travel",
            nodeType: "process"
          }
        },
        {
          id: "registration",
          type: "process",
          position: {
            x: 1308,
            y: 452
          },
          data: {
            label: "Register at Commune",
            stepId: "registration",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "end",
          position: {
            x: 1328,
            y: 656
          },
          data: {
            label: "Process Complete",
            stepId: "Success",
            nodeType: "end"
          }
        }
      ],
      edges: [
        {
          id: "check-End1",
          source: "check",
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
          id: "ok-End2",
          source: "ok",
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
          id: "decision-End3",
          source: "decision",
          target: "End3",
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
          id: "visa-travel",
          source: "visa",
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
          id: "travel-registration",
          source: "travel",
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
        }
      ]
    },
    steps: [
 {
 id: 'sponsor-check',
 title: 'Verify Sponsor Eligibility',
 description: 'Confirm that your family member in Belgium meets sponsorship requirements',
 estimatedDuration: '1 week',
 documents: [
 'Sponsor\'s residence permit or citizenship certificate',
 'Proof of relationship (birth certificate, marriage certificate)',
 'Sponsor\'s employment contract or income documentation',
 ],
 notes: [
 'Sponsor must be Belgian resident or citizen',
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
 'Fast-track available for Single Permit holders earning €5,000+/month',
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
 id: 'housing-ok',
 title: 'Assess Housing Adequacy',
 description: 'Determine if housing meets Belgian family reunification standards',
 estimatedDuration: '1 week',
 documents: [
 'Housing inspection report (if required)',
 'Floor plan with room measurements',
 'Lease agreement or property deed',
 ],
 notes: [
 'Minimum housing standards apply based on family size',
 'Generally requires at least 12-14 m² per person',
 'Must have adequate sanitation and heating',
 'Housing must be suitable for long-term residence',
 'Local commune may conduct inspection',
 'If inadequate, sponsor must find larger accommodation before proceeding',
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
 'Non-Dutch/French/German documents need translation',
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
 'Submit to Belgian embassy/consulate in home country',
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
 'Visa valid for 1 year',
 'Can be renewed if family situation remains',
 'Leads to permanent residency',
 ],
 },
 {
 id: 'travel',
 title: 'Travel to Belgium',
 description: 'Travel to Belgium to join your family',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with visa',
 'Sponsor\'s contact information',
 'Travel documents',
 ],
 notes: [
 'Must enter Belgium within 6 months of visa issuance',
 'Sponsor should arrange accommodation',
 ],
 },
 {
 id: 'registration',
 title: 'Register at Commune',
 description: 'Complete registration at local commune',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with visa',
 'Proof of accommodation',
 'Sponsor\'s residence permit',
 ],
 notes: [
 'Must register within 8 days of arrival',
 'Receive residence permit card',
 'Can then access social services',
 ],
 },
 ],
 },
};

