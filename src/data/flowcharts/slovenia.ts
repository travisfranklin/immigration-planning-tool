/**
 * Slovenia Immigration Process Flowcharts
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const sloveniaFlowcharts: Record<string, FlowchartDefinition> = {
 'si_eu_blue_card': {
 programId: 'si_eu_blue_card',
 countryCode: 'SI',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) -->job[Secure Job Offer<br/> EUR 2,000/month]
 job --> Edu{Higher Ed<br/>Degree?}
 Edu -->|Yes| docs[Gather Documents]
 Edu -->|No| End1([Not Eligible])
 docs -->submit[Submit Application]
 submit --> processing[Processing 30-60 Days]
 processing --> Decision{Decision}
 Decision -->|Approved| Card[EU Blue Card<br/>2 Years]
 Decision -->|Rejected| End2([Rejected])
 Card --> registration[Register in Slovenia]
 registration --> Success([Complete])`,
 reactFlowData: {
      "nodes": [
        {
          "id": "Start",
          "type": "start",
          "position": {
            "x": 20,
            "y": 54
          },
          "data": {
            "label": "Start",
            "stepId": "Start",
            "nodeType": "start"
          }
        },
        {
          "id": "Edu",
          "type": "decision",
          "position": {
            "x": 260,
            "y": 20
          },
          "data": {
            "label": "Higher Ed<br/>Degree?",
            "stepId": "Edu",
            "nodeType": "decision"
          }
        },
        {
          "id": "docs",
          "type": "document",
          "position": {
            "x": 224,
            "y": 248
          },
          "data": {
            "label": "Gather Documents",
            "stepId": "docs",
            "nodeType": "document"
          }
        },
        {
          "id": "End1",
          "type": "start",
          "position": {
            "x": 504,
            "y": 258
          },
          "data": {
            "label": "Not Eligible",
            "stepId": "End1",
            "nodeType": "start"
          }
        },
        {
          "id": "submit",
          "type": "process",
          "position": {
            "x": 224,
            "y": 428
          },
          "data": {
            "label": "Submit Application",
            "stepId": "submit",
            "nodeType": "process"
          }
        },
        {
          "id": "processing",
          "type": "process",
          "position": {
            "x": 224,
            "y": 608
          },
          "data": {
            "label": "Processing 30-60 Days",
            "stepId": "processing",
            "nodeType": "process"
          }
        },
        {
          "id": "Decision",
          "type": "decision",
          "position": {
            "x": 260,
            "y": 788
          },
          "data": {
            "label": "Decision",
            "stepId": "Decision",
            "nodeType": "decision"
          }
        },
        {
          "id": "Card",
          "type": "process",
          "position": {
            "x": 224,
            "y": 1016
          },
          "data": {
            "label": "EU Blue Card<br/>2 Years",
            "stepId": "Card",
            "nodeType": "process"
          }
        },
        {
          "id": "End2",
          "type": "start",
          "position": {
            "x": 504,
            "y": 1026
          },
          "data": {
            "label": "Rejected",
            "stepId": "End2",
            "nodeType": "start"
          }
        },
        {
          "id": "registration",
          "type": "process",
          "position": {
            "x": 224,
            "y": 1196
          },
          "data": {
            "label": "Register in Slovenia",
            "stepId": "registration",
            "nodeType": "process"
          }
        },
        {
          "id": "Success",
          "type": "end",
          "position": {
            "x": 244,
            "y": 1376
          },
          "data": {
            "label": "Complete",
            "stepId": "Success",
            "nodeType": "end"
          }
        }
      ],
      "edges": [
        {
          "id": "Edu-docs",
          "source": "Edu",
          "target": "docs",
          "type": "smoothstep",
          "label": "Yes",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "Edu-End1",
          "source": "Edu",
          "target": "End1",
          "type": "smoothstep",
          "label": "No",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "docs-submit",
          "source": "docs",
          "target": "submit",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "submit-processing",
          "source": "submit",
          "target": "processing",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "processing-Decision",
          "source": "processing",
          "target": "Decision",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "Decision-Card",
          "source": "Decision",
          "target": "Card",
          "type": "smoothstep",
          "label": "Approved",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "Decision-End2",
          "source": "Decision",
          "target": "End2",
          "type": "smoothstep",
          "label": "Rejected",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "Card-registration",
          "source": "Card",
          "target": "registration",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "registration-Success",
          "source": "registration",
          "target": "Success",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
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
 id: 'job',
 title: 'Secure Job Offer',
 description: 'Get job offer from Slovenian employer ( EUR 2,000/month minimum)',
 estimatedDuration: '1-2 months',
 documents: ['Employment contract', 'Job description', 'Salary confirmation'],
 notes: ['Highest quality of life in Eastern Europe', 'Alpine beauty (Lake Bled!)', 'Ljubljana charm'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect all required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Degree', 'Criminal check', 'Health insurance', 'Accommodation proof'],
 notes: ['All documents must be apostilled'],
 },
 {
 id: 'submit',
 title: 'Submit & Receive',
 description: 'Submit application and receive EU Blue Card',
 estimatedDuration: '30-60 days',
 documents: ['All documents', 'Application fee'],
 notes: ['PR in 5 years, citizenship in 10 years'],
 },
 ],
 },
 'si_startup_visa': {
 programId: 'si_startup_visa',
 countryCode: 'SI',
 programName: 'Startup Visa',
 totalEstimatedDuration: '2-3 months',
 complexity: 'medium',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) --> Idea[Business Idea]
 Idea --> Funds{ EUR 8,000<br/>Funds?}
 Funds -->|Yes| Program[Apply to Startup Program]
 Funds -->|No| End1([Not Eligible])
 Program --> Accept{Accepted?}
 Accept -->|Yes| Docs[Gather Documents]
 Accept -->|No| End2([Not Eligible])
 Docs --> Submit[Submit Application]
 Submit --> Process[Processing 30-60 Days]
 Process --> Visa[Startup Visa<br/>1 Year]
 Visa --> Register[Register Business]
 Register --> Success([Complete])`,
 reactFlowData: {
      "nodes": [
        {
          "id": "Start",
          "type": "start",
          "position": {
            "x": 20,
            "y": 54
          },
          "data": {
            "label": "Start",
            "stepId": "Start",
            "nodeType": "start"
          }
        },
        {
          "id": "Funds",
          "type": "decision",
          "position": {
            "x": 260,
            "y": 20
          },
          "data": {
            "label": " EUR 8,000<br/>Funds?",
            "stepId": "Funds",
            "nodeType": "decision"
          }
        },
        {
          "id": "Program",
          "type": "process",
          "position": {
            "x": 224,
            "y": 248
          },
          "data": {
            "label": "Apply to Startup Program",
            "stepId": "Program",
            "nodeType": "process"
          }
        },
        {
          "id": "End1",
          "type": "start",
          "position": {
            "x": 504,
            "y": 258
          },
          "data": {
            "label": "Not Eligible",
            "stepId": "End1",
            "nodeType": "start"
          }
        },
        {
          "id": "Accept",
          "type": "decision",
          "position": {
            "x": 260,
            "y": 428
          },
          "data": {
            "label": "Accepted?",
            "stepId": "Accept",
            "nodeType": "decision"
          }
        },
        {
          "id": "Docs",
          "type": "document",
          "position": {
            "x": 224,
            "y": 656
          },
          "data": {
            "label": "Gather Documents",
            "stepId": "Docs",
            "nodeType": "document"
          }
        },
        {
          "id": "End2",
          "type": "start",
          "position": {
            "x": 504,
            "y": 666
          },
          "data": {
            "label": "Not Eligible",
            "stepId": "End2",
            "nodeType": "start"
          }
        },
        {
          "id": "Submit",
          "type": "process",
          "position": {
            "x": 224,
            "y": 836
          },
          "data": {
            "label": "Submit Application",
            "stepId": "Submit",
            "nodeType": "process"
          }
        },
        {
          "id": "Process",
          "type": "process",
          "position": {
            "x": 224,
            "y": 1016
          },
          "data": {
            "label": "Processing 30-60 Days",
            "stepId": "Process",
            "nodeType": "process"
          }
        },
        {
          "id": "Visa",
          "type": "process",
          "position": {
            "x": 224,
            "y": 1196
          },
          "data": {
            "label": "Startup Visa<br/>1 Year",
            "stepId": "Visa",
            "nodeType": "process"
          }
        },
        {
          "id": "Register",
          "type": "process",
          "position": {
            "x": 224,
            "y": 1376
          },
          "data": {
            "label": "Register Business",
            "stepId": "Register",
            "nodeType": "process"
          }
        },
        {
          "id": "Success",
          "type": "end",
          "position": {
            "x": 244,
            "y": 1556
          },
          "data": {
            "label": "Complete",
            "stepId": "Success",
            "nodeType": "end"
          }
        }
      ],
      "edges": [
        {
          "id": "Funds-Program",
          "source": "Funds",
          "target": "Program",
          "type": "smoothstep",
          "label": "Yes",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "Funds-End1",
          "source": "Funds",
          "target": "End1",
          "type": "smoothstep",
          "label": "No",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "Program-Accept",
          "source": "Program",
          "target": "Accept",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "Accept-Docs",
          "source": "Accept",
          "target": "Docs",
          "type": "smoothstep",
          "label": "Yes",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "Accept-End2",
          "source": "Accept",
          "target": "End2",
          "type": "smoothstep",
          "label": "No",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "Docs-Submit",
          "source": "Docs",
          "target": "Submit",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "Submit-Process",
          "source": "Submit",
          "target": "Process",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "Process-Visa",
          "source": "Process",
          "target": "Visa",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "Visa-Register",
          "source": "Visa",
          "target": "Register",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "Register-Success",
          "source": "Register",
          "target": "Success",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
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
 id: 'idea',
 title: 'Develop Business Idea',
 description: 'Create innovative business plan',
 estimatedDuration: '2-4 weeks',
 documents: ['Business plan', 'Market analysis', 'Financial projections'],
 notes: ['Ljubljana startup scene', 'High quality of life'],
 },
 {
 id: 'program',
 title: 'Apply to Startup Program',
 description: 'Get accepted by Slovenian startup program',
 estimatedDuration: '2-4 weeks',
 documents: ['Business plan', 'Pitch deck', 'Team info'],
 notes: [' EUR 8,000 minimum funds required'],
 },
 {
 id: 'visa',
 title: 'Receive Visa & Register',
 description: 'Get visa and register business',
 estimatedDuration: '30-60 days',
 documents: ['All documents', 'Business registration'],
 notes: ['Alpine beauty!', 'PR in 5 years, citizenship in 10 years'],
 },
 ],
 },

 'si_work_permit': {
 programId: 'si_work_permit',
 countryCode: 'SI',
 programName: 'Work Permit (Single Permit)',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) -->job[Secure Job Offer<br/>EUR 1,200/month]
 job -->docs[Gather Documents]
 docs -->submit[Submit Application]
 submit -->process[Processing 30-90 Days]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Work Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit -->travel[Travel to Slovenia]
 travel -->register[Register]
 register --> Success([Complete])
 appeal --> End([Process Ended])`,
 reactFlowData: {
      "nodes": [
        {
          "id": "Start",
          "type": "start",
          "position": {
            "x": 20,
            "y": 30
          },
          "data": {
            "label": "Start",
            "stepId": "Start",
            "nodeType": "start"
          }
        },
        {
          "id": "docs",
          "type": "document",
          "position": {
            "x": 260,
            "y": 20
          },
          "data": {
            "label": "Gather Documents",
            "stepId": "docs",
            "nodeType": "document"
          }
        },
        {
          "id": "submit",
          "type": "process",
          "position": {
            "x": 260,
            "y": 200
          },
          "data": {
            "label": "Submit Application",
            "stepId": "submit",
            "nodeType": "process"
          }
        },
        {
          "id": "process",
          "type": "process",
          "position": {
            "x": 260,
            "y": 380
          },
          "data": {
            "label": "Processing 30-90 Days",
            "stepId": "process",
            "nodeType": "process"
          }
        },
        {
          "id": "decision",
          "type": "decision",
          "position": {
            "x": 296,
            "y": 560
          },
          "data": {
            "label": "Decision",
            "stepId": "decision",
            "nodeType": "decision"
          }
        },
        {
          "id": "permit",
          "type": "process",
          "position": {
            "x": 260,
            "y": 788
          },
          "data": {
            "label": "Receive Work Permit",
            "stepId": "permit",
            "nodeType": "process"
          }
        },
        {
          "id": "appeal",
          "type": "process",
          "position": {
            "x": 540,
            "y": 788
          },
          "data": {
            "label": "Consider Appeal",
            "stepId": "appeal",
            "nodeType": "process"
          }
        },
        {
          "id": "travel",
          "type": "process",
          "position": {
            "x": 260,
            "y": 968
          },
          "data": {
            "label": "Travel to Slovenia",
            "stepId": "travel",
            "nodeType": "process"
          }
        },
        {
          "id": "register",
          "type": "process",
          "position": {
            "x": 260,
            "y": 1148
          },
          "data": {
            "label": "Register",
            "stepId": "register",
            "nodeType": "process"
          }
        },
        {
          "id": "Success",
          "type": "end",
          "position": {
            "x": 280,
            "y": 1328
          },
          "data": {
            "label": "Complete",
            "stepId": "Success",
            "nodeType": "end"
          }
        },
        {
          "id": "End",
          "type": "end",
          "position": {
            "x": 560,
            "y": 978
          },
          "data": {
            "label": "Process Ended",
            "stepId": "End",
            "nodeType": "end"
          }
        }
      ],
      "edges": [
        {
          "id": "docs-submit",
          "source": "docs",
          "target": "submit",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "submit-process",
          "source": "submit",
          "target": "process",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "process-decision",
          "source": "process",
          "target": "decision",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "decision-permit",
          "source": "decision",
          "target": "permit",
          "type": "smoothstep",
          "label": "Approved",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "decision-appeal",
          "source": "decision",
          "target": "appeal",
          "type": "smoothstep",
          "label": "Rejected",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "permit-travel",
          "source": "permit",
          "target": "travel",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "travel-register",
          "source": "travel",
          "target": "register",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "register-Success",
          "source": "register",
          "target": "Success",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "appeal-End",
          "source": "appeal",
          "target": "End",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
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
 id: 'job',
 title: 'Secure Job Offer',
 description: 'Get job offer from Slovenian employer (EUR 1,200/month minimum)',
 estimatedDuration: '1-2 months',
 documents: ['Employment contract', 'Job description', 'Salary confirmation'],
 notes: ['Highest quality of life in Eastern Europe', 'Alpine beauty (Lake Bled!)', 'Ljubljana charm', 'PR in 5 years, citizenship in 10 years'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect all required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Employment contract', 'Criminal check', 'Health insurance', 'Accommodation proof'],
 notes: ['All documents must be apostilled'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit work permit application',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee'],
 notes: ['Processing: 30-90 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Wait for processing',
 estimatedDuration: '30-90 days',
 documents: [],
 notes: ['Track application status online'],
 },
 {
 id: 'permit',
 title: 'Receive Work Permit',
 description: 'Receive approved work permit',
 estimatedDuration: '1 week',
 documents: ['Work permit approval'],
 notes: ['Valid for 1-2 years, renewable'],
 },
 {
 id: 'travel',
 title: 'Travel to Slovenia',
 description: 'Travel with work permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Ljubljana (LJU)'],
 },
 {
 id: 'register',
 title: 'Register',
 description: 'Complete registration',
 estimatedDuration: '2-4 weeks',
 documents: ['Passport', 'Proof of accommodation'],
 notes: ['Register within 3 days', 'Alpine beauty!', 'Lake Bled!', 'PR in 5 years'],
 },
 {
 id: 'appeal',
 title: 'Consider Appeal',
 description: 'If rejected, evaluate options',
 estimatedDuration: '1-2 months',
 documents: ['Rejection decision', 'Appeal form'],
 notes: ['Can reapply', 'Alternative: Slovenia EU Blue Card or Startup Visa'],
 },
 ],
 },

 'si_self_employment': {
 programId: 'si_self_employment',
 countryCode: 'SI',
 programName: 'Self-Employment Visa',
 totalEstimatedDuration: '2-3 months',
 complexity: 'medium',
 successRate: '75%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) -->plan[Develop Business Plan]
 plan --> funds{EUR 8,000<br/>Funds?}
 funds -->|Yes| docs[Gather Documents]
 funds -->|No| End1([Not Eligible])
 docs -->submit[Submit Application]
 submit -->process[Processing 30-60 Days]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit -->travel[Travel to Slovenia]
 travel -->register[Register Business]
 register --> Success([Complete])
 appeal --> End2([Process Ended])`,
 reactFlowData: {
      "nodes": [
        {
          "id": "Start",
          "type": "start",
          "position": {
            "x": 20,
            "y": 54
          },
          "data": {
            "label": "Start",
            "stepId": "Start",
            "nodeType": "start"
          }
        },
        {
          "id": "funds",
          "type": "decision",
          "position": {
            "x": 260,
            "y": 20
          },
          "data": {
            "label": "EUR 8,000<br/>Funds?",
            "stepId": "funds",
            "nodeType": "decision"
          }
        },
        {
          "id": "docs",
          "type": "document",
          "position": {
            "x": 224,
            "y": 248
          },
          "data": {
            "label": "Gather Documents",
            "stepId": "docs",
            "nodeType": "document"
          }
        },
        {
          "id": "End1",
          "type": "start",
          "position": {
            "x": 504,
            "y": 258
          },
          "data": {
            "label": "Not Eligible",
            "stepId": "End1",
            "nodeType": "start"
          }
        },
        {
          "id": "submit",
          "type": "process",
          "position": {
            "x": 224,
            "y": 428
          },
          "data": {
            "label": "Submit Application",
            "stepId": "submit",
            "nodeType": "process"
          }
        },
        {
          "id": "process",
          "type": "process",
          "position": {
            "x": 224,
            "y": 608
          },
          "data": {
            "label": "Processing 30-60 Days",
            "stepId": "process",
            "nodeType": "process"
          }
        },
        {
          "id": "decision",
          "type": "decision",
          "position": {
            "x": 260,
            "y": 788
          },
          "data": {
            "label": "Decision",
            "stepId": "decision",
            "nodeType": "decision"
          }
        },
        {
          "id": "permit",
          "type": "process",
          "position": {
            "x": 224,
            "y": 1016
          },
          "data": {
            "label": "Receive Permit",
            "stepId": "permit",
            "nodeType": "process"
          }
        },
        {
          "id": "appeal",
          "type": "process",
          "position": {
            "x": 504,
            "y": 1016
          },
          "data": {
            "label": "Consider Appeal",
            "stepId": "appeal",
            "nodeType": "process"
          }
        },
        {
          "id": "travel",
          "type": "process",
          "position": {
            "x": 224,
            "y": 1196
          },
          "data": {
            "label": "Travel to Slovenia",
            "stepId": "travel",
            "nodeType": "process"
          }
        },
        {
          "id": "register",
          "type": "process",
          "position": {
            "x": 224,
            "y": 1376
          },
          "data": {
            "label": "Register Business",
            "stepId": "register",
            "nodeType": "process"
          }
        },
        {
          "id": "Success",
          "type": "end",
          "position": {
            "x": 244,
            "y": 1556
          },
          "data": {
            "label": "Complete",
            "stepId": "Success",
            "nodeType": "end"
          }
        },
        {
          "id": "End2",
          "type": "end",
          "position": {
            "x": 524,
            "y": 1206
          },
          "data": {
            "label": "Process Ended",
            "stepId": "End2",
            "nodeType": "end"
          }
        }
      ],
      "edges": [
        {
          "id": "funds-docs",
          "source": "funds",
          "target": "docs",
          "type": "smoothstep",
          "label": "Yes",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "funds-End1",
          "source": "funds",
          "target": "End1",
          "type": "smoothstep",
          "label": "No",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "docs-submit",
          "source": "docs",
          "target": "submit",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "submit-process",
          "source": "submit",
          "target": "process",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "process-decision",
          "source": "process",
          "target": "decision",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "decision-permit",
          "source": "decision",
          "target": "permit",
          "type": "smoothstep",
          "label": "Approved",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "decision-appeal",
          "source": "decision",
          "target": "appeal",
          "type": "smoothstep",
          "label": "Rejected",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "permit-travel",
          "source": "permit",
          "target": "travel",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "travel-register",
          "source": "travel",
          "target": "register",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "register-Success",
          "source": "register",
          "target": "Success",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "appeal-End2",
          "source": "appeal",
          "target": "End2",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
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
 notes: ['EUR 8,000 minimum funds', 'Highest quality of life in Eastern Europe', 'Lake Bled', 'PR in 5 years'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Business plan', 'Proof of funds', 'Criminal check', 'Health insurance'],
 notes: ['All documents must be apostilled'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Slovenian authorities',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee'],
 notes: ['Processing: 30-60 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Slovenian Immigration reviews application',
 estimatedDuration: '30-60 days',
 documents: [],
 notes: ['Business viability assessed'],
 },
 {
 id: 'permit',
 title: 'Receive Permit',
 description: 'Receive self-employment permit',
 estimatedDuration: '1 week',
 documents: ['Residence permit'],
 notes: ['Valid for 1 year, renewable'],
 },
 {
 id: 'travel',
 title: 'Travel to Slovenia',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Ljubljana (LJU)'],
 },
 {
 id: 'register',
 title: 'Register Business',
 description: 'Register business',
 estimatedDuration: '2-4 weeks',
 documents: ['Business registration', 'Proof of address'],
 notes: ['Register within 3 days', 'Alpine beauty', 'Lake Bled', 'PR in 5 years'],
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

 'si_family_reunification': {
 programId: 'si_family_reunification',
 countryCode: 'SI',
 programName: 'Family Reunification',
 totalEstimatedDuration: '2-3 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) -->check[Check Eligibility]
 check --> eligible{Sponsor<br/>Eligible?}
 eligible -->|Yes| docs[Gather Documents]
 eligible -->|No| End1([Not Eligible])
 docs -->submit[Submit Application]
 submit -->process[Processing 30-60 Days]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit -->travel[Travel to Slovenia]
 travel -->register[Register at Administrative Unit]
 register --> Success([Complete])
 appeal --> End2([Process Ended])`,
 reactFlowData: {
      "nodes": [
        {
          "id": "Start",
          "type": "start",
          "position": {
            "x": 20,
            "y": 54
          },
          "data": {
            "label": "Start",
            "stepId": "Start",
            "nodeType": "start"
          }
        },
        {
          "id": "eligible",
          "type": "decision",
          "position": {
            "x": 260,
            "y": 20
          },
          "data": {
            "label": "Sponsor<br/>Eligible?",
            "stepId": "eligible",
            "nodeType": "decision"
          }
        },
        {
          "id": "docs",
          "type": "document",
          "position": {
            "x": 224,
            "y": 248
          },
          "data": {
            "label": "Gather Documents",
            "stepId": "docs",
            "nodeType": "document"
          }
        },
        {
          "id": "End1",
          "type": "start",
          "position": {
            "x": 504,
            "y": 258
          },
          "data": {
            "label": "Not Eligible",
            "stepId": "End1",
            "nodeType": "start"
          }
        },
        {
          "id": "submit",
          "type": "process",
          "position": {
            "x": 224,
            "y": 428
          },
          "data": {
            "label": "Submit Application",
            "stepId": "submit",
            "nodeType": "process"
          }
        },
        {
          "id": "process",
          "type": "process",
          "position": {
            "x": 224,
            "y": 608
          },
          "data": {
            "label": "Processing 30-60 Days",
            "stepId": "process",
            "nodeType": "process"
          }
        },
        {
          "id": "decision",
          "type": "decision",
          "position": {
            "x": 260,
            "y": 788
          },
          "data": {
            "label": "Decision",
            "stepId": "decision",
            "nodeType": "decision"
          }
        },
        {
          "id": "permit",
          "type": "process",
          "position": {
            "x": 224,
            "y": 1016
          },
          "data": {
            "label": "Receive Permit",
            "stepId": "permit",
            "nodeType": "process"
          }
        },
        {
          "id": "appeal",
          "type": "process",
          "position": {
            "x": 504,
            "y": 1016
          },
          "data": {
            "label": "Consider Appeal",
            "stepId": "appeal",
            "nodeType": "process"
          }
        },
        {
          "id": "travel",
          "type": "process",
          "position": {
            "x": 224,
            "y": 1196
          },
          "data": {
            "label": "Travel to Slovenia",
            "stepId": "travel",
            "nodeType": "process"
          }
        },
        {
          "id": "register",
          "type": "process",
          "position": {
            "x": 224,
            "y": 1376
          },
          "data": {
            "label": "Register at Administrative Unit",
            "stepId": "register",
            "nodeType": "process"
          }
        },
        {
          "id": "Success",
          "type": "end",
          "position": {
            "x": 244,
            "y": 1556
          },
          "data": {
            "label": "Complete",
            "stepId": "Success",
            "nodeType": "end"
          }
        },
        {
          "id": "End2",
          "type": "end",
          "position": {
            "x": 524,
            "y": 1206
          },
          "data": {
            "label": "Process Ended",
            "stepId": "End2",
            "nodeType": "end"
          }
        }
      ],
      "edges": [
        {
          "id": "eligible-docs",
          "source": "eligible",
          "target": "docs",
          "type": "smoothstep",
          "label": "Yes",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "eligible-End1",
          "source": "eligible",
          "target": "End1",
          "type": "smoothstep",
          "label": "No",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "docs-submit",
          "source": "docs",
          "target": "submit",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "submit-process",
          "source": "submit",
          "target": "process",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "process-decision",
          "source": "process",
          "target": "decision",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "decision-permit",
          "source": "decision",
          "target": "permit",
          "type": "smoothstep",
          "label": "Approved",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "decision-appeal",
          "source": "decision",
          "target": "appeal",
          "type": "smoothstep",
          "label": "Rejected",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "permit-travel",
          "source": "permit",
          "target": "travel",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "travel-register",
          "source": "travel",
          "target": "register",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "register-Success",
          "source": "register",
          "target": "Success",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
          },
          "labelStyle": {
            "fill": "#1F2937",
            "fontWeight": 500
          }
        },
        {
          "id": "appeal-End2",
          "source": "appeal",
          "target": "End2",
          "type": "smoothstep",
          "style": {
            "stroke": "#1F2937",
            "strokeWidth": 2
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
 notes: ['All documents must be apostilled'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Slovenian authorities',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee'],
 notes: ['Processing: 30-60 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Immigration reviews application',
 estimatedDuration: '30-60 days',
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
 title: 'Travel to Slovenia',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Ljubljana (LJU)'],
 },
 {
 id: 'register',
 title: 'Register at Administrative Unit',
 description: 'Register within 3 days',
 estimatedDuration: '1 week',
 documents: ['Proof of address'],
 notes: ['Register within 3 days', 'PR in 5 years'],
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

