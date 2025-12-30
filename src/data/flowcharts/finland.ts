/**
 * Finland Immigration Process Flowcharts
 * Defines the step-by-step process for each Finnish visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const finlandFlowcharts: Record<string, FlowchartDefinition> = {
 'fi_specialist': {
 programId: 'fi_specialist',
 countryCode: 'FI',
 programName: 'Residence Permit for Specialists',
 totalEstimatedDuration: '3-4 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer in Finland]
 job-offer --> CheckSalary{"Salary >= 3000 EUR/month?"}
 CheckSalary -->|Yes| gather-documents[Gather Required Documents]
 CheckSalary -->|No| End1([Not Eligible])
 gather-documents -->submit-application[Submit Application Online via Enter Finland]
 submit-application -->processing[Migri Processing 60-90 Days]
 processing --> Decision{Decision}
 Decision -->|Approved| Permit[Receive Residence Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Permit -->arrival-registration[Travel to Finland]
 arrival-registration --> arrival-registration[Register at Migri Office Get Finnish ID]
 arrival-registration --> Success([Process Complete])
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
          id: "CheckSalary",
          type: "decision",
          position: {
            x: 260,
            y: 20
          },
          data: {
            label: "Salary >= 3000 EUR/month?",
            stepId: "CheckSalary",
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
            label: "Submit Application Online via Enter Finland",
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
            label: "Migri Processing 60-90 Days",
            stepId: "processing",
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
          id: "Permit",
          type: "process",
          position: {
            x: 748,
            y: 656
          },
          data: {
            label: "Receive Residence Permit",
            stepId: "Permit",
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
          id: "registration",
          type: "process",
          position: {
            x: 1028,
            y: 44
          },
          data: {
            label: "Register at Migri Office Get Finnish ID",
            stepId: "registration",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "end",
          position: {
            x: 1048,
            y: 258
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
            y: 836
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
          id: "CheckSalary-End1",
          source: "CheckSalary",
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
          id: "registration-registration",
          source: "registration",
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
 title: 'Secure Job Offer in Finland',
 description: 'Obtain a binding job offer from a Finnish employer for a specialist position',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract',
 'Job description detailing specialist responsibilities',
 'Salary confirmation (minimum 3000 EUR/month = 36000 EUR/year)',
 'Employer information (business ID, contact details)',
 ],
 notes: [
 'Employer does NOT need to be on any special list',
 'No specific education requirement if you have sufficient professional experience',
 'Popular for tech workers, engineers, and other specialists',
 'Lower salary threshold than EU Blue Card (36000 EUR vs 45924 EUR)',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the residence permit application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 3 months beyond intended stay)',
 'Employment contract',
 'Proof of qualifications (diplomas, certificates, or proof of experience)',
 'Passport-style photograph',
 'Proof of health insurance',
 'Proof of accommodation in Finland (rental agreement or hotel booking)',
 ],
 notes: [
 'All documents must be in Finnish, Swedish, or English',
 'Certified translations required for other languages',
 'Digital copies acceptable for online application',
 'Keep originals for potential verification',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application Online via Enter Finland',
 description: 'Complete and submit your residence permit application through the Enter Finland portal',
 estimatedDuration: '1-2 days',
 documents: [
 'Completed online application form',
 'All supporting documents uploaded',
 'Application fee payment (520 EUR in 2025)',
 ],
 notes: [
 'Use Enter Finland portal: https://enterfinland.fi/',
 'Application fee: 520 EUR for first residence permit (2025)',
 'Pay online via credit card or bank transfer',
 'Save application reference number',
 'You may be asked to visit Finnish embassy/consulate for biometrics',
 ],
 },
 {
 id: 'processing',
 title: 'Migri Processing (60-90 Days)',
 description: 'Finnish Immigration Service (Migri) reviews your application',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: [
 'Processing time: typically 60-90 days',
 'Migri may request additional documents',
 'Check application status online via Enter Finland',
 'Employer may be contacted for verification',
 'No interview required in most cases',
 ],
 },
 {
 id: 'decision',
 title: 'Receive Decision',
 description: 'Get notification of approval or rejection',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Decision letter from Migri',
 'Residence permit card (if approved)',
 ],
 notes: [
 'Decision sent via email and postal mail',
 'If approved: residence permit card sent to Finnish address or embassy',
 'If rejected: appeal possible within 30 days',
 'Permit valid for up to 4 years',
 ],
 },
 {
 id: 'arrival-registration',
 title: 'Travel to Finland and Register',
 description: 'Enter Finland and complete registration with Migri',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with residence permit',
 'Employment contract',
 'Proof of accommodation',
 ],
 notes: [
 'Register at local Migri office within 3 months of arrival',
 'Get Finnish personal identity code (henkilötunnus)',
 'Open Finnish bank account (requires identity code)',
 'Register with local municipality (maistraatti)',
 'Apply for Kela card (social security)',
 'Can work immediately upon arrival',
 ],
 },
 ],
 },

 'fi_eu_blue_card': {
 programId: 'fi_eu_blue_card',
 countryCode: 'FI',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '3-4 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> job-offer[Secure Highly Skilled Job Offer]
 job-offer --> CheckSalary{"Salary >= 3827 EUR/month?"}
 CheckSalary -->|Yes| CheckEducation{Bachelor Degree or 5 Years Experience?}
 CheckSalary -->|No| End1([Not Eligible])
 CheckEducation -->|Yes| gather-documents[Gather Required Documents]
 CheckEducation -->|No| End2([Not Eligible])
 gather-documents --> submit-application[Submit Application Online via Enter Finland]
 submit-application --> processing[Migri Processing 60-90 Days]
 processing --> decision{Decision}
 decision -->|Approved| blue-card[Receive EU Blue Card]
 decision -->|Rejected| appeal[Consider Appeal]
 blue-card --> arrival-registration[Travel to Finland and Register]
 arrival-registration --> Success([Process Complete])
 appeal --> End3([Process Ended])`,
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
          id: "CheckSalary",
          type: "decision",
          position: {
            x: 260,
            y: 20
          },
          data: {
            label: "Salary >= 3827 EUR/month?",
            stepId: "CheckSalary",
            nodeType: "decision"
          }
        },
        {
          id: "CheckEducation",
          type: "decision",
          position: {
            x: 260,
            y: 248
          },
          data: {
            label: "Bachelor Degree or 5 Years Experience?",
            stepId: "CheckEducation",
            nodeType: "decision"
          }
        },
        {
          id: "End1",
          type: "start",
          position: {
            x: 468,
            y: 282
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
            y: 476
          },
          data: {
            label: "Gather Required Documents",
            stepId: "GatherDocs",
            nodeType: "document"
          }
        },
        {
          id: "End2",
          type: "start",
          position: {
            x: 504,
            y: 486
          },
          data: {
            label: "Not Eligible",
            stepId: "End2",
            nodeType: "start"
          }
        },
        {
          id: "Submit",
          type: "process",
          position: {
            x: 224,
            y: 656
          },
          data: {
            label: "Submit Application Online via Enter Finland",
            stepId: "Submit",
            nodeType: "process"
          }
        },
        {
          id: "Processing",
          type: "process",
          position: {
            x: 224,
            y: 836
          },
          data: {
            label: "Migri Processing 60-90 Days",
            stepId: "Processing",
            nodeType: "process"
          }
        },
        {
          id: "Decision",
          type: "decision",
          position: {
            x: 260,
            y: 1016
          },
          data: {
            label: "Decision",
            stepId: "Decision",
            nodeType: "decision"
          }
        },
        {
          id: "BlueCard",
          type: "process",
          position: {
            x: 224,
            y: 1244
          },
          data: {
            label: "Receive EU Blue Card",
            stepId: "BlueCard",
            nodeType: "process"
          }
        },
        {
          id: "Appeal",
          type: "process",
          position: {
            x: 504,
            y: 1244
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
            y: 1424
          },
          data: {
            label: "Travel to Finland",
            stepId: "Travel",
            nodeType: "process"
          }
        },
        {
          id: "Register",
          type: "process",
          position: {
            x: 224,
            y: 1604
          },
          data: {
            label: "Register at Migri Office Get Finnish ID",
            stepId: "Register",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "end",
          position: {
            x: 244,
            y: 1784
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
            x: 524,
            y: 1434
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
          id: "CheckSalary-CheckEducation",
          source: "CheckSalary",
          target: "CheckEducation",
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
          id: "CheckSalary-End1",
          source: "CheckSalary",
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
          id: "CheckEducation-GatherDocs",
          source: "CheckEducation",
          target: "GatherDocs",
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
          id: "CheckEducation-End2",
          source: "CheckEducation",
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
          id: "Submit-Processing",
          source: "Submit",
          target: "Processing",
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
          id: "Processing-Decision",
          source: "Processing",
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
          id: "Decision-BlueCard",
          source: "Decision",
          target: "BlueCard",
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
          id: "BlueCard-Travel",
          source: "BlueCard",
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
          id: "Appeal-End3",
          source: "Appeal",
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
 title: 'Secure Highly Skilled Job Offer',
 description: 'Obtain a binding job offer for a highly skilled position in Finland',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract (minimum 12 months)',
 'Job description for highly skilled position',
 'Salary confirmation (minimum 3827 EUR/month = 45924 EUR/year)',
 'Employer information',
 ],
 notes: [
 'Higher salary threshold than Specialist permit (45924 EUR vs 36000 EUR)',
 'Must be highly skilled occupation (ISCO level 1-3)',
 'Bachelor degree required OR 5 years professional experience',
 'Lower threshold than Sweden/Denmark EU Blue Cards',
 'Can work for any employer after 2 years',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for EU Blue Card application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 3 months)',
 'Employment contract (minimum 12 months)',
 'Bachelor\'s degree or higher (or proof of 5 years experience)',
 'Passport-style photograph',
 'Proof of health insurance',
 'Proof of accommodation in Finland',
 ],
 notes: [
 'Degree must be equivalent to Finnish Bachelor\'s (minimum 3 years)',
 'Certified translations required for non-English/Finnish/Swedish documents',
 'Digital copies acceptable for online application',
 'Keep originals for verification',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application Online via Enter Finland',
 description: 'Complete and submit EU Blue Card application through Enter Finland portal',
 estimatedDuration: '1-2 days',
 documents: [
 'Completed online application form',
 'All supporting documents uploaded',
 'Application fee payment (520 EUR in 2025)',
 ],
 notes: [
 'Use Enter Finland portal: https://enterfinland.fi/',
 'Select "EU Blue Card" as permit type',
 'Application fee: 520 EUR (2025)',
 'Pay online via credit card or bank transfer',
 'May need to visit Finnish embassy/consulate for biometrics',
 ],
 },
 {
 id: 'processing',
 title: 'Migri Processing (60-90 Days)',
 description: 'Finnish Immigration Service reviews your EU Blue Card application',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: [
 'Processing time: typically 60-90 days',
 'Migri may request additional documents or clarifications',
 'Check status online via Enter Finland',
 'Employer may be contacted for verification',
 'Education credentials may be verified',
 ],
 },
 {
 id: 'decision',
 title: 'Receive EU Blue Card Decision',
 description: 'Get notification of approval or rejection',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Decision letter from Migri',
 'EU Blue Card residence permit (if approved)',
 ],
 notes: [
 'Decision sent via email and postal mail',
 'If approved: EU Blue Card sent to Finnish address or embassy',
 'If rejected: appeal possible within 30 days',
 'EU Blue Card valid for up to 4 years',
 'Allows mobility to other EU countries after 18 months',
 ],
 },
 {
 id: 'blue-card',
 title: 'Receive EU Blue Card',
 description: 'Receive your approved EU Blue Card residence permit',
 estimatedDuration: '1-2 weeks',
 documents: [
 'EU Blue Card residence permit',
 'Decision letter from Migri',
 ],
 notes: [
 'EU Blue Card sent to Finnish address or embassy',
 'Valid for up to 4 years',
 'Allows mobility to other EU countries after 18 months',
 'Can work for any employer after 2 years',
 'Family members can join immediately',
 ],
 },
 {
 id: 'appeal',
 title: 'Consider Appeal',
 description: 'Information about appealing a rejected EU Blue Card application',
 estimatedDuration: '30 days',
 documents: [
 'Rejection letter from Migri',
 'Appeal form',
 'Additional supporting documents',
 ],
 notes: [
 'Appeal must be submitted within 30 days of decision',
 'Submit to Administrative Court',
 'Consider consulting immigration lawyer',
 'May need to provide additional evidence',
 'Alternative: reapply with stronger application',
 ],
 },
 {
 id: 'arrival-registration',
 title: 'Travel to Finland and Register',
 description: 'Enter Finland with EU Blue Card and complete registration',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Passport with EU Blue Card',
 'Employment contract',
 'Proof of accommodation',
 ],
 notes: [
 'Register at local Migri office within 3 months',
 'Get Finnish personal identity code (henkilötunnus)',
 'Open Finnish bank account',
 'Register with local municipality',
 'Apply for Kela card (social security)',
 'Family members can join immediately',
 'Can work for any employer after 2 years',
 'PR eligible after 4 years, citizenship after 5 years',
 ],
 },
 ],
 },

 'fi_startup': {
 programId: 'fi_startup',
 countryCode: 'FI',
 programName: 'Startup Entrepreneur Permit',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '75%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->business-idea[Develop Innovative<br/>Startup Idea]
 business-idea --> check-funds{Have EUR 12,000<br/>minimum savings?}
 check-funds -->|Yes| prepare-business-plan[Prepare Detailed<br/>Business Plan]
 check-funds -->|No| End1([Not Eligible])
 prepare-business-plan -->submit-to-accelerator[Submit to Authorized<br/>Accelerator/Incubator]
 submit-to-accelerator -->accelerator-review[Accelerator Review<br/>30-60 Days]
 accelerator-review --> decision1{Approved?}
 decision1 -->|Yes| gather-documents[Gather Required Documents]
 decision1 -->|Rejected| consider-resubmission[Consider Resubmission]
 consider-resubmission --> End2([Process Ended])
 gather-documents -->submit-visa[Submit Visa Application<br/>to Migri]
 submit-visa -->visa-processing[Processing<br/>60-90 Days]
 visa-processing --> decision2{Decision}
 decision2 -->|Approved| receive-permit[Receive Residence Permit]
 decision2 -->|Rejected| consider-appeal[Consider Appeal]
 receive-permit -->travel-to-finland[Travel to Finland]
 travel-to-finland -->register-business[Register Business<br/>and Get Finnish ID]
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
          id: "funds",
          type: "decision",
          position: {
            x: 260,
            y: 20
          },
          data: {
            label: "Have EUR 12,000<br/>minimum savings?",
            stepId: "funds",
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
          id: "accelerator",
          type: "process",
          position: {
            x: 748,
            y: 44
          },
          data: {
            label: "Submit to Authorized<br/>Accelerator/Incubator",
            stepId: "accelerator",
            nodeType: "process"
          }
        },
        {
          id: "review",
          type: "process",
          position: {
            x: 1058,
            y: 44
          },
          data: {
            label: "Accelerator Review<br/>30-60 Days",
            stepId: "review",
            nodeType: "process"
          }
        },
        {
          id: "decision1",
          type: "decision",
          position: {
            x: 1094,
            y: 248
          },
          data: {
            label: "Approved?",
            stepId: "decision1",
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
            label: "Submit Visa Application<br/>to Migri",
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
          id: "decision2",
          type: "decision",
          position: {
            x: 2244,
            y: 248
          },
          data: {
            label: "Decision",
            stepId: "decision2",
            nodeType: "decision"
          }
        },
        {
          id: "permit",
          type: "process",
          position: {
            x: 2488,
            y: 44
          },
          data: {
            label: "Receive Residence Permit",
            stepId: "permit",
            nodeType: "process"
          }
        },
        {
          id: "appeal",
          type: "process",
          position: {
            x: 2768,
            y: 44
          },
          data: {
            label: "Consider Appeal",
            stepId: "appeal",
            nodeType: "process"
          }
        },
        {
          id: "finland",
          type: "process",
          position: {
            x: 3048,
            y: 44
          },
          data: {
            label: "Travel to Finland",
            stepId: "finland",
            nodeType: "process"
          }
        },
        {
          id: "business",
          type: "process",
          position: {
            x: 3328,
            y: 44
          },
          data: {
            label: "Register Business<br/>and Get Finnish ID",
            stepId: "business",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "end",
          position: {
            x: 3348,
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
            x: 2788,
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
          id: "funds-End1",
          source: "funds",
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
          id: "accelerator-accelerator",
          source: "accelerator",
          target: "accelerator",
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
          id: "review-decision1",
          source: "review",
          target: "decision1",
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
          id: "processing-decision2",
          source: "processing",
          target: "decision2",
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
 title: 'Develop Innovative Startup Idea',
 description: 'Create an innovative, scalable business concept suitable for the Finnish startup ecosystem',
 estimatedDuration: '1-2 months',
 documents: [
 'Business concept description',
 'Market research and analysis',
 'Competitive landscape overview',
 'Innovation and scalability potential',
 ],
 notes: [
 'Focus on tech, cleantech, health tech, or other innovation sectors',
 'Helsinki and Espoo have vibrant startup ecosystems',
 'Consider joining startup events and networking',
 'Research Finnish market opportunities',
 'Business must be innovative and have growth potential',
 ],
 },
 {
 id: 'prepare-business-plan',
 title: 'Prepare Detailed Business Plan',
 description: 'Create comprehensive business plan for accelerator approval',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Executive summary',
 'Detailed business plan (15-30 pages)',
 'Financial projections (3-5 years)',
 'Proof of EUR 12,000 minimum savings (bank statements)',
 'Team information (if co-founders)',
 'Market analysis and go-to-market strategy',
 ],
 notes: [
 'Minimum EUR 12,000 in savings required (EUR 1,000/month for 1 year)',
 'Business plan must demonstrate innovation and scalability',
 'Include clear revenue model and growth strategy',
 'Show understanding of Finnish market',
 'Can include co-founders (each needs separate permit)',
 ],
 },
 {
 id: 'submit-to-accelerator',
 title: 'Submit to Authorized Accelerator/Incubator',
 description: 'Apply to Business Finland or authorized startup accelerator for approval',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Completed accelerator application form',
 'Business plan',
 'Financial projections',
 'Proof of funds',
 'Team CVs and background',
 ],
 notes: [
 'Authorized accelerators include: NewCo Helsinki, Startup Sauna, Maria 01',
 'Business Finland also provides approvals',
 'Each accelerator has own application process',
 'Some accelerators offer mentorship and resources',
 'Application may include pitch presentation',
 ],
 },
 {
 id: 'accelerator-review',
 title: 'Accelerator Review (30-60 Days)',
 description: 'Authorized accelerator evaluates your startup business plan',
 estimatedDuration: '30-60 days',
 documents: [],
 notes: [
 'Review typically takes 30-60 days',
 'May include interview or pitch session',
 'Accelerator assesses innovation, scalability, and team',
 'Approval letter required for visa application',
 'Can reapply if rejected (with improved plan)',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for residence permit application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 3 months)',
 'Accelerator approval letter',
 'Business plan',
 'Proof of EUR 12,000 minimum savings',
 'Passport-style photograph',
 'Proof of health insurance',
 'Proof of accommodation in Finland',
 ],
 notes: [
 'All documents must be in Finnish, Swedish, or English',
 'Certified translations required for other languages',
 'Digital copies acceptable for online application',
 'Keep originals for potential verification',
 ],
 },
 {
 id: 'submit-visa',
 title: 'Submit Visa Application to Migri',
 description: 'Complete and submit residence permit application through Enter Finland portal',
 estimatedDuration: '1-2 days',
 documents: [
 'Completed online application form',
 'All supporting documents uploaded',
 'Application fee payment (520 EUR in 2025)',
 ],
 notes: [
 'Use Enter Finland portal: https://enterfinland.fi/',
 'Select "Startup Entrepreneur" as permit type',
 'Application fee: 520 EUR (2025)',
 'Pay online via credit card or bank transfer',
 'May need to visit Finnish embassy/consulate for biometrics',
 ],
 },
 {
 id: 'visa-processing',
 title: 'Processing (60-90 Days)',
 description: 'Finnish Immigration Service (Migri) reviews your application',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: [
 'Processing time: typically 60-90 days',
 'Migri may request additional documents',
 'Check application status online via Enter Finland',
 'Accelerator approval is key factor',
 'Financial sufficiency verified',
 ],
 },
 {
 id: 'receive-permit',
 title: 'Receive Residence Permit',
 description: 'Collect your approved startup entrepreneur residence permit',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Decision letter from Migri',
 'Residence permit card',
 ],
 notes: [
 'Initial permit valid for 2 years',
 'Renewable if business is progressing',
 'Can bring family members',
 'Permit allows you to work on your startup',
 'Can also work for other employers part-time',
 ],
 },
 {
 id: 'travel-to-finland',
 title: 'Travel to Finland',
 description: 'Enter Finland with your residence permit',
 estimatedDuration: '1-2 days',
 documents: [
 'Passport with residence permit',
 'Accelerator approval letter',
 'Business plan',
 'Proof of accommodation',
 ],
 notes: [
 'Main airports: Helsinki-Vantaa (HEL), Tampere, Turku',
 'No visa required for Schengen area travel',
 'Can enter Finland immediately upon receiving permit',
 'Register at local Migri office within 3 months',
 ],
 },
 {
 id: 'register-business',
 title: 'Register Business and Get Finnish ID',
 description: 'Complete business registration and obtain Finnish personal identity code',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Business registration form',
 'Company articles of association',
 'Proof of business address',
 'Bank account information',
 ],
 notes: [
 'Register business with Finnish Patent and Registration Office (PRH)',
 'Get Finnish personal identity code (henkilötunnus) from Migri',
 'Open Finnish business bank account',
 'Register with Finnish Tax Administration',
 'Join startup accelerator programs and networks',
 'Access to Finnish startup ecosystem and funding',
 'PR eligible after 4 years, citizenship after 5 years',
 ],
 },
 {
 id: 'consider-resubmission',
 title: 'Consider Resubmission',
 description: 'If rejected by accelerator, evaluate options for reapplication',
 estimatedDuration: '1-2 months',
 documents: [
 'Rejection feedback from accelerator',
 'Revised business plan',
 ],
 notes: [
 'Review rejection reasons carefully',
 'Improve business plan based on feedback',
 'Consider applying to different accelerator',
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
 'Rejection decision from Migri',
 'Appeal form',
 'Additional supporting evidence',
 ],
 notes: [
 'Appeal deadline: 30 days from decision',
 'Submit appeal to Administrative Court',
 'Provide additional evidence or clarifications',
 'Consider legal consultation',
 'Can reapply with stronger application',
 'Alternative: consider other Finnish visa programs',
 ],
 },
 ],
 },

 'fi_self_employment': {
 programId: 'fi_self_employment',
 countryCode: 'FI',
 programName: 'Self-Employment Permit',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '70%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) -->plan[Develop Business Plan]
 plan --> funds{EUR 17,500<br/>Savings?}
 funds -->|Yes| docs[Gather Documents]
 funds -->|No| End1([Not Eligible])
 docs -->submit[Submit Application]
 submit -->process[Processing 60-90 Days]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit -->travel[Travel to Finland]
 travel -->register[Register Business]
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
          id: "funds",
          type: "decision",
          position: {
            x: 260,
            y: 20
          },
          data: {
            label: "EUR 17,500<br/>Savings?",
            stepId: "funds",
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
            label: "Travel to Finland",
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
            label: "Register Business",
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
          id: "funds-docs",
          source: "funds",
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
          id: "funds-End1",
          source: "funds",
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
 id: 'plan',
 title: 'Develop Business Plan',
 description: 'Create comprehensive business plan',
 estimatedDuration: '2-4 weeks',
 documents: ['Business plan', 'Market analysis', 'Financial projections'],
 notes: ['Must demonstrate viability', 'EUR 17,500 minimum savings', 'PR in 4 years, citizenship in 5 years'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Business plan', 'Proof of funds', 'Qualifications', 'Health insurance'],
 notes: ['All documents in Finnish, Swedish, or English'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit via Enter Finland portal',
 estimatedDuration: '1-2 days',
 documents: ['All documents', 'Application fee (EUR 520)'],
 notes: ['Processing: 60-90 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Migri reviews application',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: ['Business viability assessed'],
 },
 {
 id: 'permit',
 title: 'Receive Permit',
 description: 'Receive self-employment permit',
 estimatedDuration: '1-2 weeks',
 documents: ['Residence permit'],
 notes: ['Valid for 1-2 years, renewable'],
 },
 {
 id: 'travel',
 title: 'Travel to Finland',
 description: 'Travel with permit',
 estimatedDuration: '1-2 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Helsinki (HEL)'],
 },
 {
 id: 'register',
 title: 'Register Business',
 description: 'Register business and get Finnish ID',
 estimatedDuration: '2-4 weeks',
 documents: ['Business registration', 'Proof of address'],
 notes: ['Register with PRH', 'Get henkilötunnus', 'PR in 4 years'],
 },
 {
 id: 'appeal',
 title: 'Consider Appeal',
 description: 'If rejected, evaluate options',
 estimatedDuration: '1-2 months',
 documents: ['Rejection decision', 'Appeal form'],
 notes: ['Can reapply with stronger plan'],
 },
 ],
 },

 'fi_family_reunification': {
 programId: 'fi_family_reunification',
 countryCode: 'FI',
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
 permit -->travel[Travel to Finland]
 travel -->register[Register at Maistraatti]
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
            label: "Processing 3-6 Months",
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
            label: "Travel to Finland",
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
            label: "Register at Maistraatti",
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
 notes: ['Sponsor must have valid permit', 'Spouse, children eligible', 'Income requirement applies'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '3-4 weeks',
 documents: ['Passport', 'Marriage/birth certificate', 'Proof of accommodation', 'Proof of income (EUR 1,400/month)', 'Health insurance'],
 notes: ['All documents must be apostilled', 'Translations to Finnish or Swedish'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Finnish Immigration Service',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee (EUR 520)'],
 notes: ['Processing: 3-6 months'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Immigration Service reviews application',
 estimatedDuration: '3-6 months',
 documents: [],
 notes: ['Relationship verified', 'Income requirement checked'],
 },
 {
 id: 'permit',
 title: 'Receive Permit',
 description: 'Receive family reunification permit',
 estimatedDuration: '1-2 weeks',
 documents: ['Residence permit'],
 notes: ['Valid for 1 year, renewable'],
 },
 {
 id: 'travel',
 title: 'Travel to Finland',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Helsinki (HEL)'],
 },
 {
 id: 'register',
 title: 'Register at Maistraatti',
 description: 'Register and get personal identity code',
 estimatedDuration: '1-2 weeks',
 documents: ['Proof of address'],
 notes: ['Get henkilötunnus', 'PR in 4 years'],
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

