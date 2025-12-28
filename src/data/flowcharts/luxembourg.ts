/**
 * Luxembourg Immigration Process Flowcharts
 * Defines the step-by-step process for each Luxembourg visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const luxembourgFlowcharts: Record<string, FlowchartDefinition> = {
 'lu_eu_blue_card': {
 programId: 'lu_eu_blue_card',
 countryCode: 'LU',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer]
 job-offer --> Salary{"Salary >= EUR 63,408?"}
 Salary -->|Yes| gather-documents[Gather Required Documents]
 Salary -->|No| End1([Not Eligible])
 gather-documents -->work-authorization[Apply for Work Authorization]
 work-authorization --> WaitAuth[Wait for Authorization<br/>3-4 weeks]
 WaitAuth --> AuthDecision{Authorization Approved?}
 AuthDecision -->|Yes| visa-application[Apply for Visa]
 AuthDecision -->|No| End2([Application Denied])
 visa-application --> WaitVisa[Wait for Visa<br/>4-6 weeks]
 WaitVisa --> VisaDecision{Visa Approved?}
 VisaDecision -->|Approved| Visa[Receive Blue Card]
 VisaDecision -->|Rejected| Appeal[Consider Appeal]
 Visa -->arrival[Travel to Luxembourg]
 arrival --> registration[Register at Commune]
 registration --> Success([Process Complete])
 Appeal --> End2`,
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
          "id": "Salary",
          "type": "decision",
          "position": {
            "x": 260,
            "y": 20
          },
          "data": {
            "label": "Salary >= EUR 63,408?",
            "stepId": "Salary",
            "nodeType": "decision"
          }
        },
        {
          "id": "documents",
          "type": "document",
          "position": {
            "x": 484,
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
          "id": "authorization",
          "type": "process",
          "position": {
            "x": 484,
            "y": 248
          },
          "data": {
            "label": "Apply for Work Authorization",
            "stepId": "authorization",
            "nodeType": "process"
          }
        },
        {
          "id": "WaitAuth",
          "type": "process",
          "position": {
            "x": 484,
            "y": 452
          },
          "data": {
            "label": "Wait for Authorization<br/>3-4 weeks",
            "stepId": "WaitAuth",
            "nodeType": "process"
          }
        },
        {
          "id": "AuthDecision",
          "type": "decision",
          "position": {
            "x": 520,
            "y": 656
          },
          "data": {
            "label": "Authorization Approved?",
            "stepId": "AuthDecision",
            "nodeType": "decision"
          }
        },
        {
          "id": "application",
          "type": "process",
          "position": {
            "x": 764,
            "y": 44
          },
          "data": {
            "label": "Apply for Visa",
            "stepId": "application",
            "nodeType": "process"
          }
        },
        {
          "id": "End2",
          "type": "start",
          "position": {
            "x": 504,
            "y": 894
          },
          "data": {
            "label": "Application Denied",
            "stepId": "End2",
            "nodeType": "start"
          }
        },
        {
          "id": "WaitVisa",
          "type": "process",
          "position": {
            "x": 764,
            "y": 248
          },
          "data": {
            "label": "Wait for Visa<br/>4-6 weeks",
            "stepId": "WaitVisa",
            "nodeType": "process"
          }
        },
        {
          "id": "VisaDecision",
          "type": "decision",
          "position": {
            "x": 800,
            "y": 428
          },
          "data": {
            "label": "Visa Approved?",
            "stepId": "VisaDecision",
            "nodeType": "decision"
          }
        },
        {
          "id": "Visa",
          "type": "process",
          "position": {
            "x": 1044,
            "y": 680
          },
          "data": {
            "label": "Receive Blue Card",
            "stepId": "Visa",
            "nodeType": "process"
          }
        },
        {
          "id": "Appeal",
          "type": "process",
          "position": {
            "x": 764,
            "y": 680
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
            "x": 1044,
            "y": 884
          },
          "data": {
            "label": "Travel to Luxembourg",
            "stepId": "arrival",
            "nodeType": "process"
          }
        },
        {
          "id": "registration",
          "type": "process",
          "position": {
            "x": 1044,
            "y": 1064
          },
          "data": {
            "label": "Register at Commune",
            "stepId": "registration",
            "nodeType": "process"
          }
        },
        {
          "id": "Success",
          "type": "end",
          "position": {
            "x": 1064,
            "y": 1244
          },
          "data": {
            "label": "Process Complete",
            "stepId": "Success",
            "nodeType": "end"
          }
        }
      ],
      "edges": [
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
          "id": "authorization-WaitAuth",
          "source": "authorization",
          "target": "WaitAuth",
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
          "id": "WaitAuth-AuthDecision",
          "source": "WaitAuth",
          "target": "AuthDecision",
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
          "id": "AuthDecision-End2",
          "source": "AuthDecision",
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
          "id": "application-WaitVisa",
          "source": "application",
          "target": "WaitVisa",
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
          "id": "WaitVisa-VisaDecision",
          "source": "WaitVisa",
          "target": "VisaDecision",
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
          "id": "VisaDecision-Visa",
          "source": "VisaDecision",
          "target": "Visa",
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
          "id": "VisaDecision-Appeal",
          "source": "VisaDecision",
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
          "id": "Visa-arrival",
          "source": "Visa",
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
 description: 'Obtain binding job offer from Luxembourg employer',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 63,408/year)',
 'Company registration documents',
 ],
 notes: [
 'Highest EU Blue Card salary threshold in EU',
 'Strong financial services sector',
 'Employer must be registered in Luxembourg',
 'Contract must be for at least 12 months',
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
 'Passport photos (biometric)',
 'CV/Resume',
 ],
 notes: [
 'Documents must be in French, German, or Luxembourgish',
 'Certified translations required',
 'Degree must be recognized as equivalent',
 'All documents must be recent (within 6 months)',
 ],
 },
 {
 id: 'work-authorization',
 title: 'Apply for Work Authorization',
 description: 'Employer applies for work authorization (autorisation de travail)',
 estimatedDuration: '3-4 weeks',
 documents: [
 'All gathered documents',
 'Employer application form',
 'Proof of employer registration',
 'Business license',
 ],
 notes: [
 'Employer submits to Ministry of Foreign and European Affairs',
 'Authorization must be approved before visa application',
 'Processing typically takes 3-4 weeks',
 ],
 },
 {
 id: 'visa-application',
 title: 'Apply for Visa',
 description: 'Apply for long-stay visa (Type D)',
 estimatedDuration: '4-6 weeks',
 documents: [
 'Approved work authorization',
 'Passport',
 'Application form',
 'Photos',
 'Proof of accommodation in Luxembourg',
 'Application fee ( EUR 80)',
 ],
 notes: [
 'Apply at Luxembourg embassy/consulate',
 'Book appointment in advance',
 'Bring original documents and copies',
 'May require interview',
 ],
 },
 {
 id: 'arrival',
 title: 'Arrival and Registration',
 description: 'Travel to Luxembourg and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport with visa',
 'Work authorization',
 'Employment contract',
 'Proof of accommodation',
 'Health insurance card',
 ],
 notes: [
 'Register at local commune within 8 days',
 'Receive residence permit card',
 'Apply for social security number',
 'Open bank account',
 ],
 },
 ],
 },
 'lu_highly_qualified': {
 programId: 'lu_highly_qualified',
 countryCode: 'LU',
 programName: 'Highly Qualified Worker Permit',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '80%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> JobOffer[Secure Job Offer]
 JobOffer --> Salary{"Salary >= EUR 55,000?"}
 Salary -->|Yes| Qualifications{Highly Qualified?}
 Salary -->|No| End1([Not Eligible])
 Qualifications -->|Yes| GatherDocs[Gather Required Documents]
 Qualifications -->|No| End1
 GatherDocs --> WorkAuth[Apply for Work Authorization]
 WorkAuth --> Wait[Wait for Processing<br/>4-6 weeks]
 Wait --> Decision{Decision}
 Decision -->|Approved| Visa[Receive Work Permit and Visa]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Visa --> Travel[Travel to Luxembourg]
 Travel --> Register[Register at Commune]
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
          "id": "Salary",
          "type": "decision",
          "position": {
            "x": 260,
            "y": 20
          },
          "data": {
            "label": "Salary >= EUR 55,000?",
            "stepId": "Salary",
            "nodeType": "decision"
          }
        },
        {
          "id": "Qualifications",
          "type": "decision",
          "position": {
            "x": 500,
            "y": 248
          },
          "data": {
            "label": "Highly Qualified?",
            "stepId": "Qualifications",
            "nodeType": "decision"
          }
        },
        {
          "id": "End1",
          "type": "start",
          "position": {
            "x": 244,
            "y": 486
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
            "x": 484,
            "y": 476
          },
          "data": {
            "label": "Gather Required Documents",
            "stepId": "GatherDocs",
            "nodeType": "document"
          }
        },
        {
          "id": "WorkAuth",
          "type": "process",
          "position": {
            "x": 484,
            "y": 656
          },
          "data": {
            "label": "Apply for Work Authorization",
            "stepId": "WorkAuth",
            "nodeType": "process"
          }
        },
        {
          "id": "Wait",
          "type": "process",
          "position": {
            "x": 484,
            "y": 836
          },
          "data": {
            "label": "Wait for Processing<br/>4-6 weeks",
            "stepId": "Wait",
            "nodeType": "process"
          }
        },
        {
          "id": "Decision",
          "type": "decision",
          "position": {
            "x": 520,
            "y": 1016
          },
          "data": {
            "label": "Decision",
            "stepId": "Decision",
            "nodeType": "decision"
          }
        },
        {
          "id": "Visa",
          "type": "process",
          "position": {
            "x": 484,
            "y": 1244
          },
          "data": {
            "label": "Receive Work Permit and Visa",
            "stepId": "Visa",
            "nodeType": "process"
          }
        },
        {
          "id": "Appeal",
          "type": "process",
          "position": {
            "x": 764,
            "y": 1244
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
            "x": 484,
            "y": 1424
          },
          "data": {
            "label": "Travel to Luxembourg",
            "stepId": "Travel",
            "nodeType": "process"
          }
        },
        {
          "id": "Register",
          "type": "process",
          "position": {
            "x": 484,
            "y": 1604
          },
          "data": {
            "label": "Register at Commune",
            "stepId": "Register",
            "nodeType": "process"
          }
        },
        {
          "id": "Success",
          "type": "end",
          "position": {
            "x": 504,
            "y": 1784
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
            "x": 784,
            "y": 1434
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
          "id": "Salary-Qualifications",
          "source": "Salary",
          "target": "Qualifications",
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
          "id": "Qualifications-GatherDocs",
          "source": "Qualifications",
          "target": "GatherDocs",
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
          "id": "Qualifications-End1",
          "source": "Qualifications",
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
          "id": "GatherDocs-WorkAuth",
          "source": "GatherDocs",
          "target": "WorkAuth",
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
          "id": "WorkAuth-Wait",
          "source": "WorkAuth",
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
          "id": "Decision-Visa",
          "source": "Decision",
          "target": "Visa",
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
 title: 'Secure Job Offer',
 description: 'Obtain job offer from Luxembourg employer',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 55,000/year)',
 ],
 notes: [
 'Lower salary threshold than EU Blue Card',
 'Must demonstrate high qualifications',
 'Employer must show need for foreign worker',
 ],
 },
 {
 id: 'qualifications-assessment',
 title: 'Assess Qualifications',
 description: 'Verify you meet highly qualified criteria',
 estimatedDuration: '1 week',
 documents: [
 'University degree',
 'Professional certifications',
 'Work experience documentation',
 ],
 notes: [
 'Must have advanced degree or equivalent experience',
 'Specialized skills in demand sectors',
 'Finance, IT, engineering highly valued',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect necessary documentation',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Valid passport',
 'University degree (apostilled)',
 'Employment contract',
 'Proof of qualifications',
 'Criminal background check',
 'Medical certificate',
 'Proof of health insurance',
 ],
 notes: [
 'All documents in French, German, or Luxembourgish',
 'Certified translations required',
 'Degree recognition may be needed',
 ],
 },
 {
 id: 'work-authorization',
 title: 'Apply for Work Authorization',
 description: 'Employer submits application',
 estimatedDuration: '4-6 weeks',
 documents: [
 'All gathered documents',
 'Employer application',
 'Proof of qualifications',
 ],
 notes: [
 'Employer applies to Ministry',
 'Must demonstrate highly qualified status',
 'Processing takes 4-6 weeks',
 ],
 },
 {
 id: 'arrival',
 title: 'Arrival and Registration',
 description: 'Travel to Luxembourg and register',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport with visa',
 'Work authorization',
 'Employment contract',
 ],
 notes: [
 'Register at commune within 8 days',
 'Receive residence permit',
 'Can apply for PR after 5 years',
 ],
 },
 ],
 },

 'lu_investor': {
 programId: 'lu_investor',
 countryCode: 'LU',
 programName: 'Investor Visa (Business Investor Permit)',
 totalEstimatedDuration: '3-6 months',
 complexity: 'high',
 successRate: '75%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) -->funds{EUR 500K<br/>Investment Funds?}
 funds -->|Yes| plan[Develop Business Plan]
 funds -->|No| End1([Not Eligible])
 plan -->docs[Gather Documents]
 docs -->submit[Submit Application]
 submit -->process[Processing 3-6 Months]
 process --> decision{Decision}
 decision -->|Approved| invest[Make Investment]
 decision -->|Rejected| appeal[Consider Appeal]
 invest -->permit[Receive Residence Permit]
 permit -->travel[Travel to Luxembourg]
 travel -->register[Register at Commune]
 register --> Success([Complete])
 appeal --> End2([Process Ended])`,
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
          "id": "plan",
          "type": "process",
          "position": {
            "x": 260,
            "y": 20
          },
          "data": {
            "label": "Develop Business Plan",
            "stepId": "plan",
            "nodeType": "process"
          }
        },
        {
          "id": "End1",
          "type": "start",
          "position": {
            "x": 540,
            "y": 30
          },
          "data": {
            "label": "Not Eligible",
            "stepId": "End1",
            "nodeType": "start"
          }
        },
        {
          "id": "docs",
          "type": "document",
          "position": {
            "x": 260,
            "y": 200
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
            "y": 380
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
            "y": 560
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
            "x": 296,
            "y": 740
          },
          "data": {
            "label": "Decision",
            "stepId": "decision",
            "nodeType": "decision"
          }
        },
        {
          "id": "invest",
          "type": "process",
          "position": {
            "x": 260,
            "y": 968
          },
          "data": {
            "label": "Make Investment",
            "stepId": "invest",
            "nodeType": "process"
          }
        },
        {
          "id": "appeal",
          "type": "process",
          "position": {
            "x": 540,
            "y": 968
          },
          "data": {
            "label": "Consider Appeal",
            "stepId": "appeal",
            "nodeType": "process"
          }
        },
        {
          "id": "permit",
          "type": "process",
          "position": {
            "x": 260,
            "y": 1148
          },
          "data": {
            "label": "Receive Residence Permit",
            "stepId": "permit",
            "nodeType": "process"
          }
        },
        {
          "id": "travel",
          "type": "process",
          "position": {
            "x": 260,
            "y": 1328
          },
          "data": {
            "label": "Travel to Luxembourg",
            "stepId": "travel",
            "nodeType": "process"
          }
        },
        {
          "id": "register",
          "type": "process",
          "position": {
            "x": 260,
            "y": 1508
          },
          "data": {
            "label": "Register at Commune",
            "stepId": "register",
            "nodeType": "process"
          }
        },
        {
          "id": "Success",
          "type": "end",
          "position": {
            "x": 280,
            "y": 1688
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
            "x": 560,
            "y": 1158
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
          "id": "plan-docs",
          "source": "plan",
          "target": "docs",
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
          "id": "decision-invest",
          "source": "decision",
          "target": "invest",
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
          "id": "invest-permit",
          "source": "invest",
          "target": "permit",
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
 id: 'funds',
 title: 'Verify Investment Funds',
 description: 'Confirm EUR 500K investment funds available',
 estimatedDuration: '2-4 weeks',
 documents: ['Bank statements', 'Asset valuations', 'Source of funds documentation'],
 notes: ['EUR 500K minimum investment', 'Must invest in Luxembourg business', 'Highest GDP per capita in world!', 'PR in 5 years'],
 },
 {
 id: 'plan',
 title: 'Develop Business Plan',
 description: 'Create comprehensive business plan',
 estimatedDuration: '4-8 weeks',
 documents: ['Business plan', 'Market analysis', 'Financial projections', 'Job creation plan'],
 notes: ['Must create jobs in Luxembourg', 'Finance sector opportunities', 'Strategic EU location'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect all required documents',
 estimatedDuration: '4-6 weeks',
 documents: ['Passport', 'Proof of funds', 'Business plan', 'Criminal background check', 'CV', 'Proof of business experience'],
 notes: ['Documents in French, German, or Luxembourgish', 'Certified translations required'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Ministry of Foreign Affairs',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee'],
 notes: ['Comprehensive review process', 'Economic benefit assessment'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Wait for evaluation',
 estimatedDuration: '3-6 months',
 documents: [],
 notes: ['Thorough due diligence', 'Business viability assessment'],
 },
 {
 id: 'invest',
 title: 'Make Investment',
 description: 'Complete approved investment',
 estimatedDuration: '4-8 weeks',
 documents: ['Investment confirmation', 'Business registration', 'Transfer documentation'],
 notes: ['Must complete investment before permit', 'Register business in Luxembourg'],
 },
 {
 id: 'permit',
 title: 'Receive Residence Permit',
 description: 'Receive investor residence permit',
 estimatedDuration: '2-4 weeks',
 documents: ['Residence permit approval'],
 notes: ['Initial permit for 3 years', 'Renewable', 'Family included', 'PR in 5 years'],
 },
 {
 id: 'travel',
 title: 'Travel to Luxembourg',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Highest GDP per capita in world!', 'Strategic EU location'],
 },
 {
 id: 'register',
 title: 'Register at Commune',
 description: 'Complete registration',
 estimatedDuration: '2-4 weeks',
 documents: ['Passport', 'Residence permit', 'Proof of address', 'Business registration'],
 notes: ['Register within 8 days', 'Get social security number', 'PR in 5 years'],
 },
 {
 id: 'appeal',
 title: 'Consider Appeal',
 description: 'If rejected, evaluate options',
 estimatedDuration: '2-4 months',
 documents: ['Rejection decision', 'Additional evidence'],
 notes: ['Can reapply with stronger plan', 'Legal consultation recommended'],
 },
 ],
 },

 'lu_self_employed': {
 programId: 'lu_self_employed',
 countryCode: 'LU',
 programName: 'Self-Employed Permit',
 totalEstimatedDuration: '3-6 months',
 complexity: 'medium',
 successRate: '70%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) -->plan[Develop Business Plan]
 plan --> funds{EUR 15,000<br/>Funds?}
 funds -->|Yes| docs[Gather Documents]
 funds -->|No| End1([Not Eligible])
 docs -->submit[Submit Application]
 submit -->process[Processing 3-6 Months]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit -->travel[Travel to Luxembourg]
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
            "label": "EUR 15,000<br/>Funds?",
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
            "label": "Travel to Luxembourg",
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
 estimatedDuration: '4-8 weeks',
 documents: ['Business plan', 'Market analysis', 'Financial projections'],
 notes: ['EUR 15,000 minimum funds', 'Highest GDP per capita in world', 'PR in 5 years'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '4-6 weeks',
 documents: ['Passport', 'Business plan', 'Proof of funds', 'Criminal check', 'Health insurance', 'Qualifications'],
 notes: ['Documents in French, German, or Luxembourgish', 'Certified translations required'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Ministry of Foreign Affairs',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee'],
 notes: ['Processing: 3-6 months'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Ministry reviews application',
 estimatedDuration: '3-6 months',
 documents: [],
 notes: ['Business viability assessed', 'Economic benefit evaluated'],
 },
 {
 id: 'permit',
 title: 'Receive Permit',
 description: 'Receive self-employed permit',
 estimatedDuration: '2-4 weeks',
 documents: ['Residence permit'],
 notes: ['Valid for 3 years, renewable'],
 },
 {
 id: 'travel',
 title: 'Travel to Luxembourg',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Luxembourg (LUX)'],
 },
 {
 id: 'register',
 title: 'Register Business',
 description: 'Register business and at commune',
 estimatedDuration: '2-4 weeks',
 documents: ['Business registration', 'Proof of address'],
 notes: ['Register at commune within 8 days', 'Highest GDP per capita', 'PR in 5 years'],
 },
 {
 id: 'appeal',
 title: 'Consider Appeal',
 description: 'If rejected, evaluate options',
 estimatedDuration: '2-4 months',
 documents: ['Rejection decision', 'Appeal form'],
 notes: ['Can reapply with stronger plan'],
 },
 ],
 },

 'lu_family_reunification': {
 programId: 'lu_family_reunification',
 countryCode: 'LU',
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
 permit -->travel[Travel to Luxembourg]
 travel -->register[Register at Commune]
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
            "label": "Travel to Luxembourg",
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
            "label": "Register at Commune",
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
 estimatedDuration: '4-6 weeks',
 documents: ['Passport', 'Marriage/birth certificate', 'Proof of accommodation', 'Proof of income', 'Health insurance'],
 notes: ['All documents must be apostilled', 'Translations to French, German, or Luxembourgish'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Ministry of Foreign Affairs',
 estimatedDuration: '1-2 weeks',
 documents: ['All documents', 'Application fee'],
 notes: ['Processing: 3-6 months'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Ministry reviews application',
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
 notes: ['Same validity as sponsor permit'],
 },
 {
 id: 'travel',
 title: 'Travel to Luxembourg',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Luxembourg (LUX)'],
 },
 {
 id: 'register',
 title: 'Register at Commune',
 description: 'Register within 8 days',
 estimatedDuration: '1-2 weeks',
 documents: ['Proof of address'],
 notes: ['Register at commune within 8 days', 'PR in 5 years'],
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

