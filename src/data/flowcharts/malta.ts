/**
 * Malta Immigration Process Flowcharts
 * Defines the step-by-step process for each Malta visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const maltaFlowcharts: Record<string, FlowchartDefinition> = {
 'mt_nomad_residence': {
 programId: 'mt_nomad_residence',
 countryCode: 'MT',
 programName: 'Nomad Residence Permit',
 totalEstimatedDuration: '2-3 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->verify-income-employment[Verify Remote Income<br/>>= EUR 2,700/month]
 verify-income-employment --> CheckIncome{Income Sufficient?}
 CheckIncome -->|Yes| Employment[Verify Remote Employment/<br/>Self-Employment]
 CheckIncome -->|No| End1([Not Eligible])
 Employment -->gather-documents[Gather Required Documents]
 gather-documents -->submit-application[Submit Application to<br/>Residency Malta Agency]
 submit-application -->processing[Processing<br/>30-60 Days]
 processing --> Decision{Decision}
 Decision -->|Approved| Permit[Receive Nomad Residence Permit]
 Decision -->|Rejected| Appeal[Consider Appeal]
 Permit --> arrival[Travel to Malta]
 arrival --> registration[Register at Identity Malta]
 registration --> TaxBenefit[Enjoy 15% Flat Tax Rate<br/>on Foreign Income!]
 TaxBenefit --> Success([Process Complete])
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
          "id": "CheckIncome",
          "type": "decision",
          "position": {
            "x": 260,
            "y": 20
          },
          "data": {
            "label": "Income Sufficient?",
            "stepId": "CheckIncome",
            "nodeType": "decision"
          }
        },
        {
          "id": "Employment",
          "type": "process",
          "position": {
            "x": 224,
            "y": 248
          },
          "data": {
            "label": "Verify Remote Employment/<br/>Self-Employment",
            "stepId": "Employment",
            "nodeType": "process"
          }
        },
        {
          "id": "End1",
          "type": "start",
          "position": {
            "x": 508,
            "y": 258
          },
          "data": {
            "label": "Not Eligible",
            "stepId": "End1",
            "nodeType": "start"
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
          "id": "application",
          "type": "process",
          "position": {
            "x": 748,
            "y": 44
          },
          "data": {
            "label": "Submit Application to<br/>Residency Malta Agency",
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
            "label": "Processing<br/>30-60 Days",
            "stepId": "processing",
            "nodeType": "process"
          }
        },
        {
          "id": "Decision",
          "type": "decision",
          "position": {
            "x": 784,
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
            "x": 748,
            "y": 656
          },
          "data": {
            "label": "Receive Nomad Residence Permit",
            "stepId": "Permit",
            "nodeType": "process"
          }
        },
        {
          "id": "Appeal",
          "type": "process",
          "position": {
            "x": 1028,
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
            "x": 748,
            "y": 836
          },
          "data": {
            "label": "Travel to Malta",
            "stepId": "arrival",
            "nodeType": "process"
          }
        },
        {
          "id": "registration",
          "type": "process",
          "position": {
            "x": 748,
            "y": 1016
          },
          "data": {
            "label": "Register at Identity Malta",
            "stepId": "registration",
            "nodeType": "process"
          }
        },
        {
          "id": "TaxBenefit",
          "type": "process",
          "position": {
            "x": 748,
            "y": 1196
          },
          "data": {
            "label": "Enjoy 15% Flat Tax Rate<br/>on Foreign Income!",
            "stepId": "TaxBenefit",
            "nodeType": "process"
          }
        },
        {
          "id": "Success",
          "type": "end",
          "position": {
            "x": 768,
            "y": 1376
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
            "x": 1048,
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
          "id": "CheckIncome-Employment",
          "source": "CheckIncome",
          "target": "Employment",
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
          "id": "CheckIncome-End1",
          "source": "CheckIncome",
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
          "id": "registration-TaxBenefit",
          "source": "registration",
          "target": "TaxBenefit",
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
          "id": "TaxBenefit-Success",
          "source": "TaxBenefit",
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
 id: 'verify-income-employment',
 title: 'Verify Income and Employment Requirements',
 description: 'Ensure you meet the income and employment requirements for the Nomad Residence Permit',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Employment contract (if employed remotely)',
 'Business registration (if self-employed)',
 'Bank statements (last 6 months showing EUR 2,700+/month)',
 'Tax returns (last 2 years)',
 'Client contracts (if freelancer)',
 ],
 notes: [
 'Minimum EUR 2,700/month ( EUR 32,400/year)',
 'Must work remotely for non-Maltese company OR be self-employed',
 'Income must be from outside Malta',
 'Must prove income is stable and recurring',
 'English is official language - easy process!',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the Nomad Residence Permit application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 6 months)',
 'Proof of remote employment or self-employment',
 'Proof of income ( EUR 2,700/month minimum)',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Malta, minimum EUR 30,000 coverage)',
 'Proof of accommodation in Malta (rental agreement or hotel booking)',
 'Passport-style photographs (2)',
 ],
 notes: [
 'All documents must be apostilled',
 'English translations accepted (English is official language!)',
 'Criminal background check must be recent (within 6 months)',
 'Health insurance must cover entire stay',
 'Accommodation can be rental or hotel initially',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application to Residency Malta Agency',
 description: 'Submit your Nomad Residence Permit application online or in person',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 300)',
 'Online application form',
 ],
 notes: [
 'Can apply online at nomad.residencymalta.gov.mt',
 'Or submit in person at Residency Malta Agency',
 'Bring original documents and copies',
 'Application fee is non-refundable',
 'English is official language - easy process!',
 ],
 },
 {
 id: 'processing',
 title: 'Processing Period',
 description: 'Wait for Residency Malta Agency to process your application',
 estimatedDuration: '30-60 days',
 documents: [],
 notes: [
 'Processing time: typically 30-60 days',
 'May be contacted for additional documents',
 'Can check status online',
 'Fast processing compared to other EU countries',
 ],
 },
 {
 id: 'receive-permit-register',
 title: 'Receive Permit and Register in Malta',
 description: 'Receive your Nomad Residence Permit, travel to Malta, and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Nomad Residence Permit',
 'All original documents',
 'Proof of accommodation',
 ],
 notes: [
 'Permit valid for 1 year initially',
 'Renewable for up to 3 years total',
 'Register at Identity Malta within 3 days of arrival',
 'Flat 15% tax rate on foreign income!',
 'English is official language',
 'EU member - Schengen access',
 'Warm climate year-round',
 'Good internet infrastructure',
 'Small but well-connected expat community',
 'Does NOT lead to PR (temporary program)',
 ],
 },
 ],
 },
 'mt_mprp': {
 programId: 'mt_mprp',
 countryCode: 'MT',
 programName: 'Malta Permanent Residence Programme (MPRP)',
 totalEstimatedDuration: '4-6 months',
 complexity: 'medium',
 successRate: '95%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) --> Property{Property Option?}
 Property -->|Purchase EUR 300k- EUR 350k| Buy[Purchase Property]
 Property -->|Rent EUR 10k- EUR 12k/year| Rent[Rent Property]
 Buy --> GovContribution[Government Contribution<br/> EUR 68,000]
 Rent --> GovContribution2[Government Contribution<br/> EUR 28,000]
 GovContribution --> Income[Verify Income/Assets<br/> EUR 100k/year OR EUR 500k assets]
 GovContribution2 --> Income
 Income --> CheckIncome{Sufficient?}
 CheckIncome -->|Yes| GatherDocs[Gather Required Documents]
 CheckIncome -->|No| End1([Not Eligible])
 GatherDocs --> Submit[Submit Application to<br/>Residency Malta Agency]
 Submit --> Processing[Processing<br/>120-180 Days]
 Processing --> Decision{Decision}
 Decision -->|Approved| PR[Receive Permanent Residence<br/>Immediate PR!]
 Decision -->|Rejected| Appeal[Consider Appeal]
 PR --> Travel[Travel to Malta]
 Travel --> Success([Process Complete])
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
          "id": "Buy",
          "type": "process",
          "position": {
            "x": 260,
            "y": 20
          },
          "data": {
            "label": "Purchase Property",
            "stepId": "Buy",
            "nodeType": "process"
          }
        },
        {
          "id": "Rent",
          "type": "process",
          "position": {
            "x": 540,
            "y": 20
          },
          "data": {
            "label": "Rent Property",
            "stepId": "Rent",
            "nodeType": "process"
          }
        },
        {
          "id": "GovContribution",
          "type": "process",
          "position": {
            "x": 260,
            "y": 200
          },
          "data": {
            "label": "Government Contribution<br/> EUR 68,000",
            "stepId": "GovContribution",
            "nodeType": "process"
          }
        },
        {
          "id": "GovContribution2",
          "type": "process",
          "position": {
            "x": 540,
            "y": 200
          },
          "data": {
            "label": "Government Contribution<br/> EUR 28,000",
            "stepId": "GovContribution2",
            "nodeType": "process"
          }
        },
        {
          "id": "Income",
          "type": "process",
          "position": {
            "x": 260,
            "y": 380
          },
          "data": {
            "label": "Verify Income/Assets<br/> EUR 100k/year OR EUR 500k assets",
            "stepId": "Income",
            "nodeType": "process"
          }
        },
        {
          "id": "CheckIncome",
          "type": "decision",
          "position": {
            "x": 296,
            "y": 560
          },
          "data": {
            "label": "Sufficient?",
            "stepId": "CheckIncome",
            "nodeType": "decision"
          }
        },
        {
          "id": "GatherDocs",
          "type": "document",
          "position": {
            "x": 260,
            "y": 788
          },
          "data": {
            "label": "Gather Required Documents",
            "stepId": "GatherDocs",
            "nodeType": "document"
          }
        },
        {
          "id": "End1",
          "type": "start",
          "position": {
            "x": 540,
            "y": 798
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
            "x": 260,
            "y": 968
          },
          "data": {
            "label": "Submit Application to<br/>Residency Malta Agency",
            "stepId": "Submit",
            "nodeType": "process"
          }
        },
        {
          "id": "Processing",
          "type": "process",
          "position": {
            "x": 260,
            "y": 1148
          },
          "data": {
            "label": "Processing<br/>120-180 Days",
            "stepId": "Processing",
            "nodeType": "process"
          }
        },
        {
          "id": "Decision",
          "type": "decision",
          "position": {
            "x": 296,
            "y": 1328
          },
          "data": {
            "label": "Decision",
            "stepId": "Decision",
            "nodeType": "decision"
          }
        },
        {
          "id": "PR",
          "type": "process",
          "position": {
            "x": 260,
            "y": 1556
          },
          "data": {
            "label": "Receive Permanent Residence<br/>Immediate PR!",
            "stepId": "PR",
            "nodeType": "process"
          }
        },
        {
          "id": "Appeal",
          "type": "process",
          "position": {
            "x": 540,
            "y": 1556
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
            "x": 260,
            "y": 1736
          },
          "data": {
            "label": "Travel to Malta",
            "stepId": "Travel",
            "nodeType": "process"
          }
        },
        {
          "id": "Success",
          "type": "end",
          "position": {
            "x": 280,
            "y": 1916
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
            "x": 560,
            "y": 1746
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
          "id": "Buy-GovContribution",
          "source": "Buy",
          "target": "GovContribution",
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
          "id": "Rent-GovContribution2",
          "source": "Rent",
          "target": "GovContribution2",
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
          "id": "GovContribution-Income",
          "source": "GovContribution",
          "target": "Income",
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
          "id": "GovContribution2-Income",
          "source": "GovContribution2",
          "target": "Income",
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
          "id": "Income-CheckIncome",
          "source": "Income",
          "target": "CheckIncome",
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
          "id": "CheckIncome-GatherDocs",
          "source": "CheckIncome",
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
          "id": "CheckIncome-End1",
          "source": "CheckIncome",
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
          "id": "GatherDocs-Submit",
          "source": "GatherDocs",
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
          "id": "Submit-Processing",
          "source": "Submit",
          "target": "Processing",
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
          "id": "Processing-Decision",
          "source": "Processing",
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
          "id": "Decision-PR",
          "source": "Decision",
          "target": "PR",
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
          "id": "PR-Travel",
          "source": "PR",
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
 id: 'choose-property-option',
 title: 'Choose Property Option and Make Government Contribution',
 description: 'Decide whether to purchase or rent property, and make required government contribution',
 estimatedDuration: '1-2 months',
 documents: [
 'Property purchase agreement (if buying) OR rental agreement (if renting)',
 'Proof of government contribution payment',
 'Proof of funds',
 ],
 notes: [
 'Option 1: Purchase property ( EUR 300k in South Malta or EUR 350k in North/Gozo)',
 'Option 2: Rent property ( EUR 10k/year in South Malta or EUR 12k/year in North/Gozo)',
 'Government contribution: EUR 68,000 (if buying) or EUR 28,000 (if renting)',
 'Additional EUR 7,500 donation to NGO required',
 'Property must be maintained for 5 years',
 'Popular areas: Sliema, St. Julian\'s, Valletta',
 ],
 },
 {
 id: 'verify-income-assets',
 title: 'Verify Income or Asset Requirements',
 description: 'Prove you have EUR 100,000 annual income OR EUR 500,000 in assets',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Bank statements (last 6 months)',
 'Employment contract or business income proof',
 'Tax returns (last 2 years)',
 'Investment portfolio statements',
 'Property valuations (if using assets)',
 ],
 notes: [
 'Option 1: EUR 100,000 annual income (from any source)',
 'Option 2: EUR 500,000 in assets (property, investments, etc.)',
 'Income/assets must be proven to be stable',
 'Can combine income and assets',
 'Must prove source of funds',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for the MPRP application',
 estimatedDuration: '3-4 weeks',
 documents: [
 'Valid passport',
 'Property purchase/rental agreement',
 'Proof of government contribution payment',
 'Proof of income/assets ( EUR 100k/year or EUR 500k)',
 'Criminal background check (FBI check for US citizens)',
 'Health insurance (valid in Malta)',
 'Marriage certificate (if applicable)',
 'Birth certificates for dependents',
 'Passport-style photographs',
 ],
 notes: [
 'All documents must be apostilled',
 'English translations accepted (English is official language!)',
 'Criminal background check must be recent (within 6 months)',
 'Family members included in application',
 'Health insurance must cover entire family',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application to Residency Malta Agency',
 description: 'Submit your MPRP application to Residency Malta Agency',
 estimatedDuration: '1 day',
 documents: [
 'All gathered documents',
 'Application fee payment (~ EUR 5,500)',
 'Appointment confirmation',
 ],
 notes: [
 'Must submit through licensed agent or directly to Residency Malta Agency',
 'Appointment required',
 'Biometrics collected',
 'Application fee is non-refundable',
 'English is official language - easy process!',
 ],
 },
 {
 id: 'receive-pr',
 title: 'Receive Permanent Residence',
 description: 'Receive your Malta Permanent Residence permit',
 estimatedDuration: '120-180 days',
 documents: [],
 notes: [
 'Processing time: typically 120-180 days (4-6 months)',
 'Receive PERMANENT residence immediately (not temporary!)',
 'Renewable every 5 years (administrative)',
 'No minimum stay requirement',
 'Can work and study in Malta',
 'Family members included',
 'Citizenship after 5 years (fast!)',
 'English is official language',
 'EU member - Schengen access',
 'Tax benefits available',
 'Strategic location (Europe/Africa/Middle East)',
 'Warm climate year-round',
 ],
 },
 ],
 },

 'mt_startup_visa': {
 programId: 'mt_startup_visa',
 countryCode: 'MT',
 programName: 'Startup Visa',
 totalEstimatedDuration: '3-5 months',
 complexity: 'medium',
 successRate: '75%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->business-idea[Develop Innovative<br/>Startup Idea]
 business-idea --> check-funds{Have EUR 15,000-25,000<br/>minimum capital?}
 check-funds -->|Yes| prepare-business-plan[Prepare Detailed<br/>Business Plan]
 check-funds -->|No| End1([Not Eligible])
 prepare-business-plan -->submit-to-malta-enterprise[Submit to Malta Enterprise]
 submit-to-malta-enterprise -->enterprise-review[Malta Enterprise Review<br/>30-60 Days]
 enterprise-review --> decision1{Approved?}
 decision1 -->|Yes| gather-documents[Gather Required Documents]
 decision1 -->|Rejected| consider-resubmission[Consider Resubmission]
 consider-resubmission --> End2([Process Ended])
 gather-documents -->submit-visa[Submit Visa Application<br/>to Identity Malta]
 submit-visa -->visa-processing[Processing<br/>60-90 Days]
 visa-processing --> decision2{Decision}
 decision2 -->|Approved| receive-permit[Receive Residence Permit]
 decision2 -->|Rejected| consider-appeal[Consider Appeal]
 receive-permit -->travel-to-malta[Travel to Malta]
 travel-to-malta -->register-business[Register Business<br/>and Get ID Card]
 register-business --> Success([Process Complete])
 consider-appeal --> End3([Process Ended])`,
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
          "id": "funds",
          "type": "decision",
          "position": {
            "x": 260,
            "y": 20
          },
          "data": {
            "label": "Have EUR 15,000-25,000<br/>minimum capital?",
            "stepId": "funds",
            "nodeType": "decision"
          }
        },
        {
          "id": "plan",
          "type": "process",
          "position": {
            "x": 468,
            "y": 44
          },
          "data": {
            "label": "Prepare Detailed<br/>Business Plan",
            "stepId": "plan",
            "nodeType": "process"
          }
        },
        {
          "id": "End1",
          "type": "start",
          "position": {
            "x": 244,
            "y": 282
          },
          "data": {
            "label": "Not Eligible",
            "stepId": "End1",
            "nodeType": "start"
          }
        },
        {
          "id": "enterprise",
          "type": "process",
          "position": {
            "x": 748,
            "y": 44
          },
          "data": {
            "label": "Submit to Malta Enterprise",
            "stepId": "enterprise",
            "nodeType": "process"
          }
        },
        {
          "id": "review",
          "type": "process",
          "position": {
            "x": 1058,
            "y": 44
          },
          "data": {
            "label": "Malta Enterprise Review<br/>30-60 Days",
            "stepId": "review",
            "nodeType": "process"
          }
        },
        {
          "id": "decision1",
          "type": "decision",
          "position": {
            "x": 1094,
            "y": 248
          },
          "data": {
            "label": "Approved?",
            "stepId": "decision1",
            "nodeType": "decision"
          }
        },
        {
          "id": "documents",
          "type": "document",
          "position": {
            "x": 1338,
            "y": 44
          },
          "data": {
            "label": "Gather Required Documents",
            "stepId": "documents",
            "nodeType": "document"
          }
        },
        {
          "id": "resubmission",
          "type": "process",
          "position": {
            "x": 1618,
            "y": 44
          },
          "data": {
            "label": "Consider Resubmission",
            "stepId": "resubmission",
            "nodeType": "process"
          }
        },
        {
          "id": "End2",
          "type": "end",
          "position": {
            "x": 1638,
            "y": 282
          },
          "data": {
            "label": "Process Ended",
            "stepId": "End2",
            "nodeType": "end"
          }
        },
        {
          "id": "visa",
          "type": "process",
          "position": {
            "x": 1898,
            "y": 44
          },
          "data": {
            "label": "Submit Visa Application<br/>to Identity Malta",
            "stepId": "visa",
            "nodeType": "process"
          }
        },
        {
          "id": "processing",
          "type": "process",
          "position": {
            "x": 2208,
            "y": 44
          },
          "data": {
            "label": "Processing<br/>60-90 Days",
            "stepId": "processing",
            "nodeType": "process"
          }
        },
        {
          "id": "decision2",
          "type": "decision",
          "position": {
            "x": 2244,
            "y": 248
          },
          "data": {
            "label": "Decision",
            "stepId": "decision2",
            "nodeType": "decision"
          }
        },
        {
          "id": "permit",
          "type": "process",
          "position": {
            "x": 2488,
            "y": 44
          },
          "data": {
            "label": "Receive Residence Permit",
            "stepId": "permit",
            "nodeType": "process"
          }
        },
        {
          "id": "appeal",
          "type": "process",
          "position": {
            "x": 2768,
            "y": 44
          },
          "data": {
            "label": "Consider Appeal",
            "stepId": "appeal",
            "nodeType": "process"
          }
        },
        {
          "id": "malta",
          "type": "process",
          "position": {
            "x": 3048,
            "y": 44
          },
          "data": {
            "label": "Travel to Malta",
            "stepId": "malta",
            "nodeType": "process"
          }
        },
        {
          "id": "business",
          "type": "process",
          "position": {
            "x": 3328,
            "y": 44
          },
          "data": {
            "label": "Register Business<br/>and Get ID Card",
            "stepId": "business",
            "nodeType": "process"
          }
        },
        {
          "id": "Success",
          "type": "end",
          "position": {
            "x": 3348,
            "y": 282
          },
          "data": {
            "label": "Process Complete",
            "stepId": "Success",
            "nodeType": "end"
          }
        },
        {
          "id": "End3",
          "type": "end",
          "position": {
            "x": 2788,
            "y": 282
          },
          "data": {
            "label": "Process Ended",
            "stepId": "End3",
            "nodeType": "end"
          }
        }
      ],
      "edges": [
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
          "id": "enterprise-enterprise",
          "source": "enterprise",
          "target": "enterprise",
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
          "id": "review-decision1",
          "source": "review",
          "target": "decision1",
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
          "id": "resubmission-End2",
          "source": "resubmission",
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
        },
        {
          "id": "visa-visa",
          "source": "visa",
          "target": "visa",
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
          "id": "processing-decision2",
          "source": "processing",
          "target": "decision2",
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
          "id": "business-Success",
          "source": "business",
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
          "id": "appeal-End3",
          "source": "appeal",
          "target": "End3",
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
 id: 'business-idea',
 title: 'Develop Innovative Startup Idea',
 description: 'Create an innovative, scalable business concept suitable for Malta\'s business ecosystem',
 estimatedDuration: '1-2 months',
 documents: [
 'Business concept description',
 'Market research and analysis',
 'Competitive landscape overview',
 'Innovation and scalability potential',
 ],
 notes: [
 'English is official language - easy to do business!',
 'Focus on tech, gaming (iGaming hub of Europe), fintech, or other innovation sectors',
 'Malta has growing startup ecosystem',
 'EU market access from Malta',
 'Tax incentives for startups available',
 'Business must be innovative and have growth potential',
 'Small but well-connected business community',
 ],
 },
 {
 id: 'prepare-business-plan',
 title: 'Prepare Detailed Business Plan',
 description: 'Create comprehensive business plan for Malta Enterprise approval',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Executive summary',
 'Detailed business plan (15-30 pages)',
 'Financial projections (3-5 years)',
 'Proof of EUR 15,000-25,000 minimum capital (bank statements)',
 'Team information (if co-founders)',
 'Market analysis and go-to-market strategy',
 ],
 notes: [
 'Minimum EUR 15,000-25,000 in capital recommended',
 'Business plan must demonstrate innovation and scalability',
 'Include clear revenue model and growth strategy',
 'Show understanding of Maltese/EU market',
 'Can include co-founders (each needs separate visa)',
 'Highlight how you\'ll leverage Malta\'s strategic location',
 'English is official language - no translation needed!',
 ],
 },
 {
 id: 'submit-to-malta-enterprise',
 title: 'Submit to Malta Enterprise',
 description: 'Apply to Malta Enterprise for startup approval',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Completed Malta Enterprise application form',
 'Business plan',
 'Financial projections',
 'Proof of funds',
 'Team CVs and background',
 'Pitch deck (optional but recommended)',
 ],
 notes: [
 'Malta Enterprise is the national development agency',
 'Evaluates all startup visa applications',
 'Application submitted online or in person',
 'May include pitch presentation',
 'Malta Enterprise website: https://www.maltaenterprise.com/',
 'English is official language - easy process!',
 ],
 },
 {
 id: 'enterprise-review',
 title: 'Malta Enterprise Review (30-60 Days)',
 description: 'Malta Enterprise evaluates your startup business plan',
 estimatedDuration: '30-60 days',
 documents: [],
 notes: [
 'Review typically takes 30-60 days',
 'May include interview or pitch session',
 'Malta Enterprise assesses innovation, scalability, team, and market potential',
 'Approval letter required for visa application',
 'Can reapply if rejected (with improved plan)',
 'English is official language - easy communication!',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for residence permit application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 6 months)',
 'Malta Enterprise approval letter',
 'Business plan',
 'Proof of EUR 15,000-25,000 minimum capital',
 'Passport-style photographs',
 'Proof of health insurance (minimum EUR 30,000 coverage)',
 'Proof of accommodation in Malta',
 'Criminal record certificate (from country of residence)',
 ],
 notes: [
 'All documents must be apostilled',
 'English translations accepted (English is official language!)',
 'Criminal background check must be recent (within 6 months)',
 'Keep originals for potential verification',
 ],
 },
 {
 id: 'submit-visa',
 title: 'Submit Visa Application to Identity Malta',
 description: 'Complete and submit residence permit application to Identity Malta',
 estimatedDuration: '1-2 days',
 documents: [
 'Completed application form',
 'All supporting documents',
 'Application fee payment (EUR 300 approximately)',
 ],
 notes: [
 'Apply at Identity Malta office',
 'Application fee: approximately EUR 300 (2025)',
 'Biometrics collected at office',
 'May need to attend interview',
 'English is official language - easy process!',
 ],
 },
 {
 id: 'visa-processing',
 title: 'Processing (60-90 Days)',
 description: 'Identity Malta reviews your application',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: [
 'Processing time: typically 60-90 days',
 'Identity Malta may request additional documents',
 'Malta Enterprise approval is key factor',
 'Financial sufficiency verified',
 'Background check conducted',
 ],
 },
 {
 id: 'receive-permit',
 title: 'Receive Residence Permit',
 description: 'Collect your approved startup residence permit',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Decision letter from Identity Malta',
 'Residence permit card',
 ],
 notes: [
 'Initial permit valid for 1 year',
 'Renewable annually if business is progressing',
 'Can bring family members',
 'Permit allows you to work on your startup',
 'Can also work for other employers',
 'English is official language!',
 ],
 },
 {
 id: 'travel-to-malta',
 title: 'Travel to Malta',
 description: 'Enter Malta with your residence permit',
 estimatedDuration: '1-2 days',
 documents: [
 'Passport with residence permit',
 'Malta Enterprise approval letter',
 'Business plan',
 'Proof of accommodation',
 ],
 notes: [
 'Main airport: Malta International Airport (MLA)',
 'No visa required for Schengen area travel',
 'Can enter Malta immediately upon receiving permit',
 'Register at Identity Malta within 3 days of arrival',
 'English is official language - easy to settle!',
 ],
 },
 {
 id: 'register-business',
 title: 'Register Business and Get ID Card',
 description: 'Complete business registration and obtain Maltese ID card',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Business registration form',
 'Company articles of association',
 'Proof of business address',
 'Bank account information',
 ],
 notes: [
 'Register business with Malta Business Registry',
 'Get Maltese ID card from Identity Malta',
 'Open Maltese business bank account',
 'Register with Malta Tax Authority',
 'Join Malta startup community and networks',
 'Access to EU market from Malta',
 'Tax incentives for startups available',
 'PR eligible after 5 years, citizenship after 5 years',
 'English is official language - easy business operations!',
 ],
 },
 {
 id: 'consider-resubmission',
 title: 'Consider Resubmission',
 description: 'If rejected by Malta Enterprise, evaluate options for reapplication',
 estimatedDuration: '1-2 months',
 documents: [
 'Rejection feedback from Malta Enterprise',
 'Revised business plan',
 ],
 notes: [
 'Review rejection reasons carefully',
 'Improve business plan based on feedback',
 'Strengthen financial projections and market analysis',
 'May need to pivot business model',
 'Can reapply after improvements',
 'Consider Malta Enterprise mentorship programs',
 ],
 },
 {
 id: 'consider-appeal',
 title: 'Consider Appeal',
 description: 'If visa rejected, evaluate appeal options',
 estimatedDuration: '1-2 months',
 documents: [
 'Rejection decision from Identity Malta',
 'Appeal form',
 'Additional supporting evidence',
 ],
 notes: [
 'Appeal deadline: 30 days from decision',
 'Submit appeal to appropriate authority',
 'Provide additional evidence or clarifications',
 'Consider legal consultation',
 'Can reapply with stronger application',
 'Alternative: consider Malta Nomad Residence or MPRP',
 ],
 },
 ],
 },

 'mt_family_reunification': {
 programId: 'mt_family_reunification',
 countryCode: 'MT',
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
 permit -->travel[Travel to Malta]
 travel -->register[Register at Identity Malta]
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
            "label": "Travel to Malta",
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
            "label": "Register at Identity Malta",
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
 notes: ['Sponsor must have valid permit', 'Spouse, children eligible'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '3-4 weeks',
 documents: ['Passport', 'Marriage/birth certificate', 'Proof of accommodation', 'Proof of income', 'Health insurance'],
 notes: ['All documents must be apostilled', 'Translations to English or Maltese'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Identity Malta',
 estimatedDuration: '1-2 weeks',
 documents: ['All documents', 'Application fee (EUR 280)'],
 notes: ['Processing: 3-6 months'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Identity Malta reviews application',
 estimatedDuration: '3-6 months',
 documents: [],
 notes: ['Relationship verified'],
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
 title: 'Travel to Malta',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Malta (MLA)'],
 },
 {
 id: 'register',
 title: 'Register at Identity Malta',
 description: 'Register and get eResidence card',
 estimatedDuration: '2-4 weeks',
 documents: ['Proof of address'],
 notes: ['Get eResidence card', 'PR in 5 years'],
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

 'mt_highly_skilled': {
 programId: 'mt_highly_skilled',
 countryCode: 'MT',
 programName: 'Highly Skilled Worker',
 totalEstimatedDuration: '2-3 months',
 complexity: 'medium',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) -->check[Check Eligibility]
 check --> salary{EUR 45,000/yr<br/>Salary?}
 salary -->|Yes| docs[Gather Documents]
 salary -->|No| End1([Not Eligible])
 docs -->submit[Submit Application]
 submit -->process[Processing 60-90 Days]
 process --> decision{Decision}
 decision -->|Approved| permit[Receive Permit]
 decision -->|Rejected| appeal[Consider Appeal]
 permit -->travel[Travel to Malta]
 travel -->register[Register at Identity Malta]
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
          "id": "salary",
          "type": "decision",
          "position": {
            "x": 260,
            "y": 20
          },
          "data": {
            "label": "EUR 45,000/yr<br/>Salary?",
            "stepId": "salary",
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
            "label": "Travel to Malta",
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
            "label": "Register at Identity Malta",
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
          "id": "salary-docs",
          "source": "salary",
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
 description: 'Verify job offer and qualifications',
 estimatedDuration: '1-2 weeks',
 documents: ['Job offer', 'Qualifications'],
 notes: ['EUR 45,000/year minimum', 'Degree or 5+ years experience', 'English-speaking island'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Job offer', 'Degree/qualifications', 'CV', 'Criminal check', 'Health insurance'],
 notes: ['All documents in English or Maltese'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Jobsplus',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee (EUR 230)'],
 notes: ['Processing: 60-90 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Jobsplus reviews application',
 estimatedDuration: '60-90 days',
 documents: [],
 notes: ['Qualifications verified'],
 },
 {
 id: 'permit',
 title: 'Receive Permit',
 description: 'Receive highly skilled worker permit',
 estimatedDuration: '1-2 weeks',
 documents: ['Residence permit'],
 notes: ['Valid for 3 years, renewable'],
 },
 {
 id: 'travel',
 title: 'Travel to Malta',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Malta (MLA)', 'Mediterranean island', '300+ days of sunshine'],
 },
 {
 id: 'register',
 title: 'Register at Identity Malta',
 description: 'Register and get eResidence card',
 estimatedDuration: '2-4 weeks',
 documents: ['Proof of address', 'Employment contract'],
 notes: ['Get eResidence card', 'PR in 5 years', 'Citizenship in 5 years'],
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

