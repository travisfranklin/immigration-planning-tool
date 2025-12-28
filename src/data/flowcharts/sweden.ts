/**
 * Sweden Immigration Process Flowcharts
 * Defines the step-by-step process for each Swedish visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const swedenFlowcharts: Record<string, FlowchartDefinition> = {
 'se_work_permit': {
 programId: 'se_work_permit',
 countryCode: 'SE',
 programName: 'Work Permit for Skilled Workers',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer]
 job-offer --> Advertise[Employer Advertises Position<br/>in EU for 10 Days]
 Advertise --> Salary{Salary Meets<br/>Collective Agreement?}
 Salary -->|Yes| gather-documents[Gather Required Documents]
 Salary -->|No| End1([Not Eligible])
 gather-documents -->employer-advertises[Employer Submits Application]
 employer-advertises -->processing[Wait for Processing<br/>2-4 months]
 processing --> Decision{Decision}
 Decision -->|Approved| Permit[Receive Work Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Permit --> arrival[Travel to Sweden]
 arrival --> registration[Register at Tax Agency<br/>Get Personal Number]
 registration --> Success([Process Complete])
 Appeal --> End2([Process Ended])`,
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
            "label": "Start Process",
            "stepId": "Start",
            "nodeType": "start"
          }
        },
        {
          "id": "Advertise",
          "type": "process",
          "position": {
            "x": 260,
            "y": 20
          },
          "data": {
            "label": "Employer Advertises Position<br/>in EU for 10 Days",
            "stepId": "Advertise",
            "nodeType": "process"
          }
        },
        {
          "id": "Salary",
          "type": "decision",
          "position": {
            "x": 296,
            "y": 200
          },
          "data": {
            "label": "Salary Meets<br/>Collective Agreement?",
            "stepId": "Salary",
            "nodeType": "decision"
          }
        },
        {
          "id": "documents",
          "type": "document",
          "position": {
            "x": 540,
            "y": 20
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
            "x": 280,
            "y": 462
          },
          "data": {
            "label": "Not Eligible",
            "stepId": "End1",
            "nodeType": "start"
          }
        },
        {
          "id": "advertises",
          "type": "process",
          "position": {
            "x": 820,
            "y": 20
          },
          "data": {
            "label": "Employer Submits Application",
            "stepId": "advertises",
            "nodeType": "process"
          }
        },
        {
          "id": "processing",
          "type": "process",
          "position": {
            "x": 820,
            "y": 224
          },
          "data": {
            "label": "Wait for Processing<br/>2-4 months",
            "stepId": "processing",
            "nodeType": "process"
          }
        },
        {
          "id": "Decision",
          "type": "decision",
          "position": {
            "x": 856,
            "y": 428
          },
          "data": {
            "label": "Decision",
            "stepId": "Decision",
            "nodeType": "decision"
          }
        },
        {
          "id": "Permit",
          "type": "process",
          "position": {
            "x": 820,
            "y": 656
          },
          "data": {
            "label": "Receive Work Permit",
            "stepId": "Permit",
            "nodeType": "process"
          }
        },
        {
          "id": "Appeal",
          "type": "process",
          "position": {
            "x": 1100,
            "y": 656
          },
          "data": {
            "label": "Consider Appeal",
            "stepId": "Appeal",
            "nodeType": "process"
          }
        },
        {
          "id": "arrival",
          "type": "process",
          "position": {
            "x": 820,
            "y": 836
          },
          "data": {
            "label": "Travel to Sweden",
            "stepId": "arrival",
            "nodeType": "process"
          }
        },
        {
          "id": "registration",
          "type": "process",
          "position": {
            "x": 820,
            "y": 1016
          },
          "data": {
            "label": "Register at Tax Agency<br/>Get Personal Number",
            "stepId": "registration",
            "nodeType": "process"
          }
        },
        {
          "id": "Success",
          "type": "end",
          "position": {
            "x": 840,
            "y": 1196
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
            "x": 1120,
            "y": 846
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
          "id": "Advertise-Salary",
          "source": "Advertise",
          "target": "Salary",
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
          "id": "Salary-End1",
          "source": "Salary",
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
          "id": "advertises-processing",
          "source": "advertises",
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
          "id": "Decision-Permit",
          "source": "Decision",
          "target": "Permit",
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
          "id": "Decision-Appeal",
          "source": "Decision",
          "target": "Appeal",
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
          "id": "Permit-arrival",
          "source": "Permit",
          "target": "arrival",
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
          "id": "arrival-registration",
          "source": "arrival",
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
        },
        {
          "id": "Appeal-End2",
          "source": "Appeal",
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
 title: 'Secure Job Offer',
 description: 'Obtain a binding job offer from a Swedish employer',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description detailing responsibilities',
 'Salary confirmation (minimum ~ EUR 13,800/year or ~13,000 SEK/month)',
 ],
 notes: [
 'Salary must meet Swedish collective agreement standards',
 'No specific occupation list - very flexible system',
 'Contract should be for at least 12 months',
 'Employer must be registered in Sweden',
 ],
 },
 {
 id: 'employer-advertises',
 title: 'Employer Advertises Position',
 description: 'Employer must advertise the position in the EU/EEA for 10 days',
 estimatedDuration: '2 weeks',
 documents: [
 'Job advertisement proof',
 'Documentation of advertising channels used',
 ],
 notes: [
 'Required by Swedish Migration Agency',
 'Must advertise in EU/EEA labor market',
 'Minimum 10 days advertising period',
 'Can proceed with application after 10 days',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation for the application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for entire permit period)',
 'Completed application form',
 'Passport-sized photos',
 'Employment contract',
 'Proof of qualifications/education',
 'Proof of health insurance',
 'CV/Resume',
 ],
 notes: [
 'Documents should be in Swedish or English',
 'No degree recognition required (unlike Germany)',
 'Health insurance can be Swedish or international',
 ],
 },
 {
 id: 'employer-submits',
 title: 'Employer Submits Application',
 description: 'Employer submits work permit application to Swedish Migration Agency',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 200)',
 'Employer declaration form',
 ],
 notes: [
 'Application submitted online by employer',
 'Employer pays the application fee',
 'You receive notification when submitted',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Swedish Migration Agency processes your application',
 estimatedDuration: '2-4 months',
 documents: [],
 notes: [
 'Average processing time is 3 months',
 'Can track status online with case number',
 'May be contacted for additional documents',
 'Trade unions are consulted during process',
 ],
 },
 {
 id: 'decision',
 title: 'Receive Decision',
 description: 'Get approval or rejection notification',
 estimatedDuration: '1 week',
 documents: [
 'Decision letter from Migration Agency',
 ],
 notes: [
 'Notification sent via email and post',
 'If approved, receive residence permit card',
 'Permit typically valid for 2 years initially',
 'Can appeal if rejected within 3 weeks',
 ],
 },
 {
 id: 'travel-register',
 title: 'Travel to Sweden and Register',
 description: 'Move to Sweden and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Residence permit card',
 'Passport',
 'Employment contract',
 'Proof of accommodation',
 ],
 notes: [
 'Register at Swedish Tax Agency (Skatteverket) within 1 week',
 'Receive personal number (personnummer) - essential for everything',
 'Open bank account (requires personal number)',
 'Register for Swedish ID card',
 ],
 },
 ],
 },

 'se_eu_blue_card': {
 programId: 'se_eu_blue_card',
 countryCode: 'SE',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> JobOffer[Secure Job Offer]
 JobOffer --> Check{"Salary >= EUR 56,400<br/>& Bachelor's Degree?"}
 Check -->|Yes| Advertise[Employer Advertises Position<br/>in EU for 10 Days]
 Check -->|No| End1([Not Eligible])
 Advertise --> GatherDocs[Gather Required Documents]
 GatherDocs --> EmployerApply[Employer Submits Application]
 EmployerApply --> Wait[Wait for Processing<br/>2-4 months]
 Wait --> Decision{Decision}
 Decision -->|Approved| BlueCard[Receive EU Blue Card]
 Decision -->|Rejected| Appeal[Consider Appeal]
 BlueCard --> Travel[Travel to Sweden]
 Travel --> Register[Register at Tax Agency<br/>Get Personal Number]
 Register --> Success([Process Complete])
 Appeal --> End2([Process Ended])`,
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
          "id": "Check",
          "type": "decision",
          "position": {
            "x": 260,
            "y": 20
          },
          "data": {
            "label": "Salary >= EUR 56,400<br/>& Bachelor's Degree?",
            "stepId": "Check",
            "nodeType": "decision"
          }
        },
        {
          "id": "Advertise",
          "type": "process",
          "position": {
            "x": 224,
            "y": 248
          },
          "data": {
            "label": "Employer Advertises Position<br/>in EU for 10 Days",
            "stepId": "Advertise",
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
          "id": "GatherDocs",
          "type": "document",
          "position": {
            "x": 224,
            "y": 428
          },
          "data": {
            "label": "Gather Required Documents",
            "stepId": "GatherDocs",
            "nodeType": "document"
          }
        },
        {
          "id": "EmployerApply",
          "type": "process",
          "position": {
            "x": 224,
            "y": 608
          },
          "data": {
            "label": "Employer Submits Application",
            "stepId": "EmployerApply",
            "nodeType": "process"
          }
        },
        {
          "id": "Wait",
          "type": "process",
          "position": {
            "x": 224,
            "y": 788
          },
          "data": {
            "label": "Wait for Processing<br/>2-4 months",
            "stepId": "Wait",
            "nodeType": "process"
          }
        },
        {
          "id": "Decision",
          "type": "decision",
          "position": {
            "x": 260,
            "y": 968
          },
          "data": {
            "label": "Decision",
            "stepId": "Decision",
            "nodeType": "decision"
          }
        },
        {
          "id": "BlueCard",
          "type": "process",
          "position": {
            "x": 224,
            "y": 1196
          },
          "data": {
            "label": "Receive EU Blue Card",
            "stepId": "BlueCard",
            "nodeType": "process"
          }
        },
        {
          "id": "Appeal",
          "type": "process",
          "position": {
            "x": 504,
            "y": 1196
          },
          "data": {
            "label": "Consider Appeal",
            "stepId": "Appeal",
            "nodeType": "process"
          }
        },
        {
          "id": "Travel",
          "type": "process",
          "position": {
            "x": 224,
            "y": 1376
          },
          "data": {
            "label": "Travel to Sweden",
            "stepId": "Travel",
            "nodeType": "process"
          }
        },
        {
          "id": "Register",
          "type": "process",
          "position": {
            "x": 224,
            "y": 1556
          },
          "data": {
            "label": "Register at Tax Agency<br/>Get Personal Number",
            "stepId": "Register",
            "nodeType": "process"
          }
        },
        {
          "id": "Success",
          "type": "end",
          "position": {
            "x": 244,
            "y": 1736
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
            "x": 524,
            "y": 1386
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
          "id": "Check-Advertise",
          "source": "Check",
          "target": "Advertise",
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
          "id": "Check-End1",
          "source": "Check",
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
          "id": "Advertise-GatherDocs",
          "source": "Advertise",
          "target": "GatherDocs",
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
          "id": "GatherDocs-EmployerApply",
          "source": "GatherDocs",
          "target": "EmployerApply",
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
          "id": "EmployerApply-Wait",
          "source": "EmployerApply",
          "target": "Wait",
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
          "id": "Wait-Decision",
          "source": "Wait",
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
          "id": "Decision-BlueCard",
          "source": "Decision",
          "target": "BlueCard",
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
          "id": "Decision-Appeal",
          "source": "Decision",
          "target": "Appeal",
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
          "id": "BlueCard-Travel",
          "source": "BlueCard",
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
          "id": "Travel-Register",
          "source": "Travel",
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
        },
        {
          "id": "Appeal-End2",
          "source": "Appeal",
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
 title: 'Secure High-Skilled Job Offer',
 description: 'Obtain a binding job offer from a Swedish employer with high salary',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description for skilled position',
 'Salary confirmation (minimum EUR 56,400/year or ~53,000 SEK/month)',
 'Bachelor\'s degree or higher',
 ],
 notes: [
 'Salary threshold is EUR 56,400/year (~53,000 SEK/month)',
 'Must have at least Bachelor\'s degree',
 'Degree must be relevant to the position',
 'Contract should be for at least 12 months',
 ],
 },
 {
 id: 'employer-advertises',
 title: 'Employer Advertises Position',
 description: 'Employer must advertise the position in the EU/EEA for 10 days',
 estimatedDuration: '2 weeks',
 documents: [
 'Job advertisement proof',
 'Documentation of advertising channels used',
 ],
 notes: [
 'Required even for EU Blue Card',
 'Must advertise in EU/EEA labor market',
 'Minimum 10 days advertising period',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation for the Blue Card application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for entire permit period)',
 'Completed EU Blue Card application form',
 'Passport-sized photos',
 'Employment contract',
 'Bachelor\'s degree certificate (or higher)',
 'Academic transcripts',
 'Proof of health insurance',
 'CV/Resume',
 ],
 notes: [
 'Documents should be in Swedish or English',
 'Degree should be from recognized institution',
 'May need to provide degree evaluation',
 ],
 },
 {
 id: 'employer-submits',
 title: 'Employer Submits Blue Card Application',
 description: 'Employer submits EU Blue Card application to Swedish Migration Agency',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 200)',
 'Employer declaration form',
 ],
 notes: [
 'Application submitted online by employer',
 'Specify EU Blue Card application type',
 'Employer pays the application fee',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Swedish Migration Agency processes your Blue Card application',
 estimatedDuration: '2-4 months',
 documents: [],
 notes: [
 'Average processing time is 3 months',
 'Can track status online',
 'May be contacted for additional documents',
 'Faster PR track than regular work permit (4 years)',
 ],
 },
 {
 id: 'decision',
 title: 'Receive EU Blue Card',
 description: 'Get approval and receive your EU Blue Card',
 estimatedDuration: '1 week',
 documents: [
 'Decision letter from Migration Agency',
 'EU Blue Card residence permit',
 ],
 notes: [
 'Blue Card typically valid for 2 years initially',
 'Can be renewed',
 'Allows easier mobility within EU',
 'Fast track to permanent residence (4 years)',
 ],
 },
 {
 id: 'travel-register',
 title: 'Travel to Sweden and Register',
 description: 'Move to Sweden and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'EU Blue Card',
 'Passport',
 'Employment contract',
 'Proof of accommodation',
 ],
 notes: [
 'Register at Swedish Tax Agency within 1 week',
 'Receive personal number (personnummer)',
 'Open bank account',
 'Register for Swedish ID card',
 'Family members can join you',
 ],
 },
 ],
 },

 'se_self_employment': {
 programId: 'se_self_employment',
 countryCode: 'SE',
 programName: 'Self-Employment Permit',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '70%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) -->plan[Develop Business Plan]
 plan --> funds{EUR 20,000<br/>Savings?}
 funds -->|Yes| docs[Gather Documents]
 funds -->|No| End1([Not Eligible])
 docs -->submit[Submit Application]
 submit -->process[Processing 2-4 Months]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit -->travel[Travel to Sweden]
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
            "label": "EUR 20,000<br/>Savings?",
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
            "label": "Processing 2-4 Months",
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
            "label": "Travel to Sweden",
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
 notes: ['Must demonstrate viability', 'EUR 20,000 minimum savings', 'PR in 5 years'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Business plan', 'Proof of funds', 'Qualifications'],
 notes: ['Documents in Swedish or English'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Swedish Migration Agency',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee'],
 notes: ['Processing: 2-4 months'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Migration Agency reviews application',
 estimatedDuration: '2-4 months',
 documents: [],
 notes: ['Business viability assessed'],
 },
 {
 id: 'permit',
 title: 'Receive Permit',
 description: 'Receive self-employment permit',
 estimatedDuration: '1 week',
 documents: ['Residence permit'],
 notes: ['Valid for 2 years, renewable'],
 },
 {
 id: 'travel',
 title: 'Travel to Sweden',
 description: 'Travel with permit',
 estimatedDuration: '1-2 days',
 documents: ['Passport with permit'],
 notes: ['Main airports: Stockholm (ARN), Gothenburg (GOT)'],
 },
 {
 id: 'register',
 title: 'Register Business',
 description: 'Register business and get personal number',
 estimatedDuration: '2-4 weeks',
 documents: ['Business registration', 'Proof of address'],
 notes: ['Register at Tax Agency', 'Get personnummer', 'PR in 5 years'],
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

 'se_family_reunification': {
 programId: 'se_family_reunification',
 countryCode: 'SE',
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
 permit -->travel[Travel to Sweden]
 travel -->register[Register at Tax Agency]
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
            "label": "Processing 3-6 Months",
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
            "label": "Travel to Sweden",
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
            "label": "Register at Tax Agency",
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
 notes: ['All documents must be apostilled', 'Translations to Swedish or English'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Swedish Migration Agency',
 estimatedDuration: '1-2 weeks',
 documents: ['All documents', 'Application fee (SEK 1,500)'],
 notes: ['Processing: 3-6 months'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Migration Agency reviews application',
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
 title: 'Travel to Sweden',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airports: Stockholm (ARN), Gothenburg (GOT)'],
 },
 {
 id: 'register',
 title: 'Register at Tax Agency',
 description: 'Register and get personnummer',
 estimatedDuration: '2-4 weeks',
 documents: ['Proof of address'],
 notes: ['Get personnummer', 'PR in 5 years'],
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

 'se_researcher': {
 programId: 'se_researcher',
 countryCode: 'SE',
 programName: 'Researcher Visa',
 totalEstimatedDuration: '2-4 months',
 complexity: 'medium',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) -->check[Check Eligibility]
 check --> hosting{Hosting<br/>Agreement?}
 hosting -->|Yes| docs[Gather Documents]
 hosting -->|No| End1([Not Eligible])
 docs -->submit[Submit Application]
 submit -->process[Processing 60-90 Days]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit -->travel[Travel to Sweden]
 travel -->register[Register and Start Research]
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
          "id": "hosting",
          "type": "decision",
          "position": {
            "x": 260,
            "y": 20
          },
          "data": {
            "label": "Hosting<br/>Agreement?",
            "stepId": "hosting",
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
            "label": "Processing 60-90 Days",
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
            "label": "Travel to Sweden",
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
            "label": "Register and Start Research",
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
          "id": "hosting-docs",
          "source": "hosting",
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
          "id": "hosting-End1",
          "source": "hosting",
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
 description: 'Verify hosting agreement with Swedish research institution',
 estimatedDuration: '2-4 weeks',
 documents: ['Hosting agreement', 'PhD or equivalent'],
 notes: ['Must have PhD or equivalent', 'Hosting agreement with approved institution', 'World-class research environment'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Hosting agreement', 'PhD certificate', 'CV', 'Research plan', 'Health insurance'],
 notes: ['Documents in Swedish or English'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Swedish Migration Agency',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee (SEK 2,000)'],
 notes: ['Processing: 60-90 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Migration Agency reviews application',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: ['Qualifications verified', 'Hosting agreement checked'],
 },
 {
 id: 'permit',
 title: 'Receive Permit',
 description: 'Receive researcher permit',
 estimatedDuration: '1-2 weeks',
 documents: ['Residence permit'],
 notes: ['Valid for duration of research (up to 2 years), renewable'],
 },
 {
 id: 'travel',
 title: 'Travel to Sweden',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airports: Stockholm (ARN), Gothenburg (GOT)', 'Nobel Prize country'],
 },
 {
 id: 'register',
 title: 'Register and Start Research',
 description: 'Register at Tax Agency and begin research',
 estimatedDuration: '2-4 weeks',
 documents: ['Proof of address', 'Hosting agreement'],
 notes: ['Get personnummer', 'Access to world-class facilities', 'PR in 5 years'],
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

