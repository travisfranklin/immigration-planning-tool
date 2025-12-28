/**
 * Croatia Immigration Process Flowcharts
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const croatiaFlowcharts: Record<string, FlowchartDefinition> = {
 'hr_eu_blue_card': {
 programId: 'hr_eu_blue_card',
 countryCode: 'HR',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) -->job[Secure Job Offer<br/> EUR 1,800/month]
 job --> Edu{Higher Ed<br/>Degree?}
 Edu -->|Yes| docs[Gather Documents]
 Edu -->|No| End1([Not Eligible])
 docs -->submit[Submit Application]
 submit --> processing[Processing 30-60 Days]
 processing --> Decision{Decision}
 Decision -->|Approved| Card[EU Blue Card<br/>2 Years]
 Decision -->|Rejected| End2([Rejected])
 Card --> registration[Register in Croatia]
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
            "label": "Register in Croatia",
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
 description: 'Get job offer from Croatian employer ( EUR 1,800/month minimum)',
 estimatedDuration: '1-2 months',
 documents: ['Employment contract', 'Job description', 'Salary confirmation'],
 notes: ['Adriatic Sea coastline!', 'Mediterranean lifestyle', 'Growing tech scene (Zagreb, Split)'],
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
 notes: ['PR in 5 years, citizenship in 8 years'],
 },
 ],
 },
 'hr_digital_nomad': {
 programId: 'hr_digital_nomad',
 countryCode: 'HR',
 programName: 'Digital Nomad Visa',
 totalEstimatedDuration: '1-2 months',
 complexity: 'low',
 successRate: '95%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) --> Remote[Remote Work/Freelance]
 Remote --> Income{ EUR 2,300/month<br/>Income?}
 Income -->|Yes| Docs[Gather Documents]
 Income -->|No| End1([Not Eligible])
 Docs --> Submit[Submit Application]
 Submit --> Process[Processing 30 Days]
 Process --> Visa[Digital Nomad Visa<br/>1 Year]
 Visa --> Travel[Travel to Croatia]
 Travel --> Success([Work from Paradise!])`,
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
          "id": "Income",
          "type": "decision",
          "position": {
            "x": 260,
            "y": 20
          },
          "data": {
            "label": " EUR 2,300/month<br/>Income?",
            "stepId": "Income",
            "nodeType": "decision"
          }
        },
        {
          "id": "Docs",
          "type": "document",
          "position": {
            "x": 224,
            "y": 248
          },
          "data": {
            "label": "Gather Documents",
            "stepId": "Docs",
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
          "id": "Submit",
          "type": "process",
          "position": {
            "x": 224,
            "y": 428
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
            "y": 608
          },
          "data": {
            "label": "Processing 30 Days",
            "stepId": "Process",
            "nodeType": "process"
          }
        },
        {
          "id": "Visa",
          "type": "process",
          "position": {
            "x": 224,
            "y": 788
          },
          "data": {
            "label": "Digital Nomad Visa<br/>1 Year",
            "stepId": "Visa",
            "nodeType": "process"
          }
        },
        {
          "id": "Travel",
          "type": "process",
          "position": {
            "x": 224,
            "y": 968
          },
          "data": {
            "label": "Travel to Croatia",
            "stepId": "Travel",
            "nodeType": "process"
          }
        },
        {
          "id": "Success",
          "type": "start",
          "position": {
            "x": 244,
            "y": 1148
          },
          "data": {
            "label": "Work from Paradise!",
            "stepId": "Success",
            "nodeType": "start"
          }
        }
      ],
      "edges": [
        {
          "id": "Income-Docs",
          "source": "Income",
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
          "id": "Income-End1",
          "source": "Income",
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
          "id": "Visa-Travel",
          "source": "Visa",
          "target": "Travel",
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
          "id": "Travel-Success",
          "source": "Travel",
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
 id: 'remote',
 title: 'Verify Remote Work',
 description: 'Confirm remote employment or freelance contracts',
 estimatedDuration: '1 week',
 documents: ['Employment contract or freelance contracts', 'Proof of income ( EUR 2,300/month)'],
 notes: ['Work from Adriatic Sea coastline!', 'Mediterranean lifestyle'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect all required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Proof of remote work', 'Proof of income', 'Health insurance', 'Accommodation proof'],
 notes: ['Fast processing (30 days)'],
 },
 {
 id: 'visa',
 title: 'Receive Visa & Travel',
 description: 'Get visa and travel to Croatia',
 estimatedDuration: '30 days',
 documents: ['All documents', 'Application fee'],
 notes: ['Valid for 1 year, renewable for 1 more year', 'Can convert to other visa for PR/citizenship path'],
 },
 ],
 },

 'hr_work_permit': {
 programId: 'hr_work_permit',
 countryCode: 'HR',
 programName: 'Work Permit',
 totalEstimatedDuration: '2-4 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer<br/>from Croatian Employer]
 job-offer --> check-salary{"Salary >= EUR 900/month?"}
 check-salary -->|Yes| gather-documents[Gather Required Documents]
 check-salary -->|No| End1([Not Eligible])
 gather-documents -->submit-application[Submit Application]
 submit-application -->processing[Processing<br/>30-90 Days]
 processing --> decision{Decision}
 decision -->|Approved| receive-permit[Receive Work Permit]
 decision -->|Rejected| consider-appeal[Consider Appeal]
 receive-permit -->travel-to-croatia[Travel to Croatia]
 travel-to-croatia -->register[Register at Police]
 register --> Success([Process Complete])
 consider-appeal --> End2([Process Ended])`,
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
            "label": "Start Process",
            "stepId": "Start",
            "nodeType": "start"
          }
        },
        {
          "id": "salary",
          "type": "decision",
          "position": {
            "x": 260,
            "y": 20
          },
          "data": {
            "label": "Salary >= EUR 900/month?",
            "stepId": "salary",
            "nodeType": "decision"
          }
        },
        {
          "id": "documents",
          "type": "document",
          "position": {
            "x": 468,
            "y": 44
          },
          "data": {
            "label": "Gather Required Documents",
            "stepId": "documents",
            "nodeType": "document"
          }
        },
        {
          "id": "End1",
          "type": "start",
          "position": {
            "x": 244,
            "y": 258
          },
          "data": {
            "label": "Not Eligible",
            "stepId": "End1",
            "nodeType": "start"
          }
        },
        {
          "id": "application",
          "type": "process",
          "position": {
            "x": 748,
            "y": 44
          },
          "data": {
            "label": "Submit Application",
            "stepId": "application",
            "nodeType": "process"
          }
        },
        {
          "id": "processing",
          "type": "process",
          "position": {
            "x": 748,
            "y": 248
          },
          "data": {
            "label": "Processing<br/>30-90 Days",
            "stepId": "processing",
            "nodeType": "process"
          }
        },
        {
          "id": "decision",
          "type": "decision",
          "position": {
            "x": 784,
            "y": 428
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
            "x": 1028,
            "y": 44
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
            "x": 1588,
            "y": 44
          },
          "data": {
            "label": "Consider Appeal",
            "stepId": "appeal",
            "nodeType": "process"
          }
        },
        {
          "id": "croatia",
          "type": "process",
          "position": {
            "x": 1308,
            "y": 44
          },
          "data": {
            "label": "Travel to Croatia",
            "stepId": "croatia",
            "nodeType": "process"
          }
        },
        {
          "id": "register",
          "type": "process",
          "position": {
            "x": 1308,
            "y": 248
          },
          "data": {
            "label": "Register at Police",
            "stepId": "register",
            "nodeType": "process"
          }
        },
        {
          "id": "Success",
          "type": "end",
          "position": {
            "x": 1328,
            "y": 462
          },
          "data": {
            "label": "Process Complete",
            "stepId": "Success",
            "nodeType": "end"
          }
        },
        {
          "id": "End2",
          "type": "end",
          "position": {
            "x": 1608,
            "y": 258
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
          "id": "salary-End1",
          "source": "salary",
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
          "id": "application-processing",
          "source": "application",
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
          "id": "processing-decision",
          "source": "processing",
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
          "id": "croatia-register",
          "source": "croatia",
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
 id: 'job-offer',
 title: 'Secure Job Offer from Croatian Employer',
 description: 'Obtain a binding job offer from a Croatian employer',
 estimatedDuration: '1-2 months',
 documents: ['Signed employment contract', 'Job description', 'Salary confirmation (minimum EUR 900/month)', 'Employer information'],
 notes: ['Adriatic Sea coastline!', 'Mediterranean lifestyle', 'Growing tech scene (Zagreb, Split)', 'EU newest member (2013)', 'PR after 5 years, citizenship after 8 years'],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for work permit application',
 estimatedDuration: '2-3 weeks',
 documents: ['Valid passport', 'Employment contract', 'Educational qualifications', 'Criminal record certificate', 'Health insurance', 'Proof of accommodation', 'Passport photographs'],
 notes: ['Documents must be apostilled', 'Translations to Croatian required'],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit work permit application to Croatian authorities',
 estimatedDuration: '1 week',
 documents: ['All gathered documents', 'Application fee payment'],
 notes: ['Submit at Croatian consulate or in Croatia', 'Processing time: 30-90 days'],
 },
 {
 id: 'processing',
 title: 'Processing (30-90 Days)',
 description: 'Wait for authorities to process application',
 estimatedDuration: '30-90 days',
 documents: [],
 notes: ['Processing time: typically 30-90 days'],
 },
 {
 id: 'receive-permit',
 title: 'Receive Work Permit',
 description: 'Receive approved work permit',
 estimatedDuration: '1 week',
 documents: ['Work permit approval'],
 notes: ['Permit initially valid for 1 year', 'Renewable if employment continues'],
 },
 {
 id: 'travel-to-croatia',
 title: 'Travel to Croatia',
 description: 'Travel to Croatia with work permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with work permit', 'Employment contract'],
 notes: ['Main airports: Zagreb (ZAG), Split (SPU), Dubrovnik (DBV)'],
 },
 {
 id: 'register',
 title: 'Register at Police',
 description: 'Complete registration',
 estimatedDuration: '2-4 weeks',
 documents: ['Passport with work permit', 'Proof of accommodation'],
 notes: ['Register at local police within 3 days', 'Adriatic Sea coastline!', 'Mediterranean lifestyle', 'PR after 5 years, citizenship after 8 years'],
 },
 {
 id: 'consider-appeal',
 title: 'Consider Appeal',
 description: 'If rejected, evaluate appeal options',
 estimatedDuration: '1-2 months',
 documents: ['Rejection decision', 'Appeal form'],
 notes: ['Can reapply with stronger application', 'Alternative: Croatia EU Blue Card or Digital Nomad Visa'],
 },
 ],
 },

 'hr_self_employment': {
 programId: 'hr_self_employment',
 countryCode: 'HR',
 programName: 'Self-Employment Visa',
 totalEstimatedDuration: '2-4 months',
 complexity: 'medium',
 successRate: '75%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) -->plan[Develop Business Plan]
 plan --> funds{EUR 8,000<br/>Investment?}
 funds -->|Yes| docs[Gather Documents]
 funds -->|No| End1([Not Eligible])
 docs -->submit[Submit Application]
 submit -->process[Processing 30-90 Days]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit -->travel[Travel to Croatia]
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
            "label": "EUR 8,000<br/>Investment?",
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
            "label": "Processing 30-90 Days",
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
            "label": "Travel to Croatia",
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
 notes: ['EUR 8,000 minimum investment', 'Adriatic coastline', 'Mediterranean lifestyle', 'PR in 5 years'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Business plan', 'Proof of funds', 'Criminal check', 'Health insurance'],
 notes: ['Documents must be apostilled', 'Translations to Croatian required'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Croatian authorities',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee'],
 notes: ['Processing: 30-90 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Croatian Immigration reviews application',
 estimatedDuration: '30-90 days',
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
 title: 'Travel to Croatia',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airports: Zagreb (ZAG), Split (SPU)'],
 },
 {
 id: 'register',
 title: 'Register Business',
 description: 'Register business and at Police',
 estimatedDuration: '2-4 weeks',
 documents: ['Business registration', 'Proof of address'],
 notes: ['Register within 3 days', 'Adriatic coastline', 'PR in 5 years'],
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

 'hr_family_reunification': {
 programId: 'hr_family_reunification',
 countryCode: 'HR',
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
 permit -->travel[Travel to Croatia]
 travel -->register[Register at Police]
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
            "label": "Travel to Croatia",
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
            "label": "Register at Police",
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
 notes: ['All documents must be apostilled', 'Translations to Croatian required'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Croatian authorities',
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
 title: 'Travel to Croatia',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airports: Zagreb (ZAG), Split (SPU)'],
 },
 {
 id: 'register',
 title: 'Register at Police',
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

