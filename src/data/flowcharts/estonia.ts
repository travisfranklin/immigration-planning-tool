/**
 * Estonia Immigration Process Flowcharts
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const estoniaFlowcharts: Record<string, FlowchartDefinition> = {
 'ee_digital_nomad': {
 programId: 'ee_digital_nomad',
 countryCode: 'EE',
 programName: 'Digital Nomad Visa',
 totalEstimatedDuration: '1-2 months',
 complexity: 'low',
 successRate: '95%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) -->remote[Remote Work/Freelance]
 remote --> Income{ EUR 3,500/month<br/>Income?}
 Income -->|Yes| docs[Gather Documents]
 Income -->|No| End1([Not Eligible])
 docs --> submit-application[Submit Application]
 submit-application --> processing[Processing 30 Days]
 processing --> Visa[Digital Nomad Visa<br/>1 Year]
 Visa --> arrival[Travel to Estonia]
 arrival --> Success([Work from Tallinn!])`,
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
          id: "Income",
          type: "decision",
          position: {
            x: 260,
            y: 20
          },
          data: {
            label: " EUR 3,500/month<br/>Income?",
            stepId: "Income",
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
          id: "application",
          type: "process",
          position: {
            x: 744,
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
            x: 744,
            y: 248
          },
          data: {
            label: "Processing 30 Days",
            stepId: "processing",
            nodeType: "process"
          }
        },
        {
          id: "Visa",
          type: "process",
          position: {
            x: 744,
            y: 428
          },
          data: {
            label: "Digital Nomad Visa<br/>1 Year",
            stepId: "Visa",
            nodeType: "process"
          }
        },
        {
          id: "arrival",
          type: "process",
          position: {
            x: 744,
            y: 608
          },
          data: {
            label: "Travel to Estonia",
            stepId: "arrival",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "start",
          position: {
            x: 764,
            y: 788
          },
          data: {
            label: "Work from Tallinn!",
            stepId: "Success",
            nodeType: "start"
          }
        }
      ],
      edges: [
        {
          id: "Income-docs",
          source: "Income",
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
          id: "Income-End1",
          source: "Income",
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
          id: "processing-Visa",
          source: "processing",
          target: "Visa",
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
        }
      ]
    },
    steps: [
 {
 id: 'remote',
 title: 'Verify Remote Work',
 description: 'Confirm remote employment or freelance contracts',
 estimatedDuration: '1 week',
 documents: ['Employment contract or freelance contracts', 'Proof of income ( EUR 3,500/month)'],
 notes: ['Most tech-forward country in EU!', 'E-government services', 'Tallinn startup ecosystem'],
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
 description: 'Get visa and travel to Estonia',
 estimatedDuration: '30 days',
 documents: ['All documents', 'Application fee'],
 notes: ['Valid for 1 year, renewable', 'Can convert to other visa for PR/citizenship path'],
 },
 ],
 },
 'ee_e_residency_business': {
 programId: 'ee_e_residency_business',
 countryCode: 'EE',
 programName: 'E-Residency + Business Visa',
 totalEstimatedDuration: '2-4 months',
 complexity: 'medium',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start]) --> ERes[Apply for E-Residency]
 ERes --> Card[Receive E-Residency Card]
 Card --> Company[Register Estonian Company]
 Company --> Operate[Operate Remotely]
 Operate --> Relocate{Want to<br/>Relocate?}
 Relocate -->|Yes| Visa[Apply for Business Visa]
 Relocate -->|No| Remote([Stay Remote])
 Visa --> Docs[Gather Documents]
 Docs --> Submit[Submit Application]
 Submit --> Process[Processing 30-90 Days]
 Process --> Permit[Residence Permit<br/>1 Year]
 Permit --> Success([Live in Estonia!])`,
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
          id: "Card",
          type: "process",
          position: {
            x: 260,
            y: 20
          },
          data: {
            label: "Receive E-Residency Card",
            stepId: "Card",
            nodeType: "process"
          }
        },
        {
          id: "Company",
          type: "process",
          position: {
            x: 260,
            y: 200
          },
          data: {
            label: "Register Estonian Company",
            stepId: "Company",
            nodeType: "process"
          }
        },
        {
          id: "Operate",
          type: "process",
          position: {
            x: 260,
            y: 380
          },
          data: {
            label: "Operate Remotely",
            stepId: "Operate",
            nodeType: "process"
          }
        },
        {
          id: "Relocate",
          type: "decision",
          position: {
            x: 296,
            y: 560
          },
          data: {
            label: "Want to<br/>Relocate?",
            stepId: "Relocate",
            nodeType: "decision"
          }
        },
        {
          id: "Visa",
          type: "process",
          position: {
            x: 260,
            y: 788
          },
          data: {
            label: "Apply for Business Visa",
            stepId: "Visa",
            nodeType: "process"
          }
        },
        {
          id: "Remote",
          type: "start",
          position: {
            x: 540,
            y: 798
          },
          data: {
            label: "Stay Remote",
            stepId: "Remote",
            nodeType: "start"
          }
        },
        {
          id: "Docs",
          type: "document",
          position: {
            x: 260,
            y: 968
          },
          data: {
            label: "Gather Documents",
            stepId: "Docs",
            nodeType: "document"
          }
        },
        {
          id: "Submit",
          type: "process",
          position: {
            x: 260,
            y: 1148
          },
          data: {
            label: "Submit Application",
            stepId: "Submit",
            nodeType: "process"
          }
        },
        {
          id: "Process",
          type: "process",
          position: {
            x: 260,
            y: 1328
          },
          data: {
            label: "Processing 30-90 Days",
            stepId: "Process",
            nodeType: "process"
          }
        },
        {
          id: "Permit",
          type: "process",
          position: {
            x: 260,
            y: 1508
          },
          data: {
            label: "Residence Permit<br/>1 Year",
            stepId: "Permit",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "start",
          position: {
            x: 280,
            y: 1688
          },
          data: {
            label: "Live in Estonia!",
            stepId: "Success",
            nodeType: "start"
          }
        }
      ],
      edges: [
        {
          id: "Card-Company",
          source: "Card",
          target: "Company",
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
          id: "Company-Operate",
          source: "Company",
          target: "Operate",
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
          id: "Operate-Relocate",
          source: "Operate",
          target: "Relocate",
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
          id: "Relocate-Visa",
          source: "Relocate",
          target: "Visa",
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
          id: "Relocate-Remote",
          source: "Relocate",
          target: "Remote",
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
          id: "Visa-Docs",
          source: "Visa",
          target: "Docs",
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
          id: "Docs-Submit",
          source: "Docs",
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
          id: "Submit-Process",
          source: "Submit",
          target: "Process",
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
          id: "Process-Permit",
          source: "Process",
          target: "Permit",
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
          id: "Permit-Success",
          source: "Permit",
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
 id: 'e-residency',
 title: 'Get E-Residency',
 description: 'Apply for E-Residency (UNIQUE program!)',
 estimatedDuration: '4-6 weeks',
 documents: ['E-Residency application', 'Fee ( EUR 100- EUR 200)', 'ID documents'],
 notes: ['UNIQUE E-Residency program!', 'Run Estonian company remotely', 'E-government services'],
 },
 {
 id: 'company',
 title: 'Register Company',
 description: 'Register Estonian company online',
 estimatedDuration: '1-2 weeks',
 documents: ['E-Residency card', 'Company registration documents', 'Business plan'],
 notes: ['Can operate remotely first', 'Then relocate when ready'],
 },
 {
 id: 'visa',
 title: 'Apply for Business Visa',
 description: 'Apply for residence permit to relocate',
 estimatedDuration: '30-90 days',
 documents: ['All documents', 'Proof of funds ( EUR 5,000)', 'Company documents'],
 notes: ['Most tech-forward country!', 'PR in 5 years, citizenship in 8 years'],
 },
 ],
 },

 'ee_startup_visa': {
 programId: 'ee_startup_visa',
 countryCode: 'EE',
 programName: 'Startup Visa',
 totalEstimatedDuration: '2-4 months',
 complexity: 'medium',
 successRate: '80%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->business-idea[Develop Innovative<br/>Startup Idea]
 business-idea --> check-funds{Have EUR 16,000<br/>minimum capital?}
 check-funds -->|Yes| prepare-business-plan[Prepare Detailed<br/>Business Plan]
 check-funds -->|No| End1([Not Eligible])
 prepare-business-plan -->submit-to-committee[Submit to Startup Estonia<br/>Committee]
 submit-to-committee -->committee-review[Committee Review<br/>30-45 Days]
 committee-review --> decision1{Approved?}
 decision1 -->|Yes| gather-documents[Gather Required Documents]
 decision1 -->|Rejected| consider-resubmission[Consider Resubmission]
 consider-resubmission --> End2([Process Ended])
 gather-documents -->submit-visa[Submit Visa Application<br/>to Police]
 submit-visa -->visa-processing[Processing<br/>30-60 Days]
 visa-processing --> decision2{Decision}
 decision2 -->|Approved| receive-permit[Receive Residence Permit]
 decision2 -->|Rejected| consider-appeal[Consider Appeal]
 receive-permit -->travel-to-estonia[Travel to Estonia]
 travel-to-estonia -->register-business[Register Business<br/>and Get ID Card]
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
            label: "Have EUR 16,000<br/>minimum capital?",
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
          id: "committee",
          type: "process",
          position: {
            x: 748,
            y: 44
          },
          data: {
            label: "Submit to Startup Estonia<br/>Committee",
            stepId: "committee",
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
            label: "Committee Review<br/>30-45 Days",
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
            label: "Submit Visa Application<br/>to Police",
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
            label: "Processing<br/>30-60 Days",
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
          id: "estonia",
          type: "process",
          position: {
            x: 3048,
            y: 44
          },
          data: {
            label: "Travel to Estonia",
            stepId: "estonia",
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
            label: "Register Business<br/>and Get ID Card",
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
          id: "committee-committee",
          source: "committee",
          target: "committee",
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
 description: 'Create an innovative, scalable business concept suitable for Estonia\'s tech ecosystem',
 estimatedDuration: '1-2 months',
 documents: [
 'Business concept description',
 'Market research and analysis',
 'Competitive landscape overview',
 'Innovation and scalability potential',
 ],
 notes: [
 'Estonia is the most tech-forward country in EU!',
 'Focus on tech, fintech, e-government, or other innovation sectors',
 'Tallinn has vibrant startup ecosystem (Skype, Wise, Bolt originated here)',
 'E-government services make business operations seamless',
 'Business must be innovative and have growth potential',
 'Consider joining Startup Estonia community',
 ],
 },
 {
 id: 'prepare-business-plan',
 title: 'Prepare Detailed Business Plan',
 description: 'Create comprehensive business plan for Startup Estonia Committee approval',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Executive summary',
 'Detailed business plan (15-30 pages)',
 'Financial projections (3-5 years)',
 'Proof of EUR 16,000 minimum capital (bank statements)',
 'Team information (if co-founders)',
 'Market analysis and go-to-market strategy',
 ],
 notes: [
 'Minimum EUR 16,000 in capital required (includes living expenses)',
 'Business plan must demonstrate innovation and scalability',
 'Include clear revenue model and growth strategy',
 'Show understanding of Estonian/EU market',
 'Can include co-founders (each needs separate visa)',
 'Highlight how you\'ll leverage Estonia\'s e-government infrastructure',
 ],
 },
 {
 id: 'submit-to-committee',
 title: 'Submit to Startup Estonia Committee',
 description: 'Apply to Startup Estonia Committee for approval',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Completed Startup Estonia application form',
 'Business plan',
 'Financial projections',
 'Proof of funds',
 'Team CVs and background',
 'Pitch deck (optional but recommended)',
 ],
 notes: [
 'Startup Estonia Committee evaluates all applications',
 'Committee includes experienced entrepreneurs and investors',
 'Application submitted online via Startup Estonia portal',
 'May include pitch presentation (online or in-person)',
 'Application portal: https://www.startupestonia.ee/visa',
 'Free application process',
 ],
 },
 {
 id: 'committee-review',
 title: 'Committee Review (30-45 Days)',
 description: 'Startup Estonia Committee evaluates your startup business plan',
 estimatedDuration: '30-45 days',
 documents: [],
 notes: [
 'Review typically takes 30-45 days',
 'Committee meets regularly to review applications',
 'May include interview or pitch session',
 'Committee assesses innovation, scalability, team, and market potential',
 'Approval letter required for visa application',
 'Can reapply if rejected (with improved plan)',
 'High approval rate for quality applications',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for residence permit application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 3 months beyond intended stay)',
 'Startup Estonia Committee approval letter',
 'Business plan',
 'Proof of EUR 16,000 minimum capital',
 'Passport-style photographs',
 'Proof of health insurance',
 'Proof of accommodation in Estonia',
 'Criminal record certificate (from country of residence)',
 ],
 notes: [
 'All documents must be in Estonian or English',
 'Certified translations required for other languages',
 'Apostille required for documents from non-EU countries',
 'Digital copies acceptable for online application',
 'Keep originals for potential verification',
 ],
 },
 {
 id: 'submit-visa',
 title: 'Submit Visa Application to Police',
 description: 'Complete and submit residence permit application to Estonian Police and Border Guard Board',
 estimatedDuration: '1-2 days',
 documents: [
 'Completed online application form',
 'All supporting documents uploaded',
 'Application fee payment (EUR 160 for residence permit)',
 ],
 notes: [
 'Apply online via Estonian Police portal',
 'Application fee: EUR 160 for residence permit (2025)',
 'Pay online via credit card or bank transfer',
 'May need to visit Estonian embassy for biometrics',
 'Processing starts after complete application submitted',
 ],
 },
 {
 id: 'visa-processing',
 title: 'Processing (30-60 Days)',
 description: 'Estonian Police and Border Guard Board reviews your application',
 estimatedDuration: '30-60 days',
 documents: [],
 notes: [
 'Processing time: typically 30-60 days (faster than most EU countries)',
 'Police may request additional documents',
 'Check application status online',
 'Startup Estonia approval is key factor',
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
 'Decision letter from Police',
 'Residence permit card',
 ],
 notes: [
 'Initial permit valid for 18 months',
 'Renewable for 3-year periods if business is progressing',
 'Can bring family members',
 'Permit allows you to work on your startup',
 'Can also work for other employers',
 'Fast processing compared to other EU countries',
 ],
 },
 {
 id: 'travel-to-estonia',
 title: 'Travel to Estonia',
 description: 'Enter Estonia with your residence permit',
 estimatedDuration: '1-2 days',
 documents: [
 'Passport with residence permit',
 'Startup Estonia approval letter',
 'Business plan',
 'Proof of accommodation',
 ],
 notes: [
 'Main airport: Tallinn Airport (TLL)',
 'No visa required for Schengen area travel',
 'Can enter Estonia immediately upon receiving permit',
 'Register at local government office within 1 month',
 'Most tech-forward country in EU!',
 ],
 },
 {
 id: 'register-business',
 title: 'Register Business and Get ID Card',
 description: 'Complete business registration and obtain Estonian ID card',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Business registration form',
 'Company articles of association',
 'Proof of business address',
 'Bank account information',
 ],
 notes: [
 'Register business online via e-Business Register',
 'Get Estonian ID card (digital identity)',
 'Open Estonian business bank account',
 'Register with Estonian Tax and Customs Board',
 'Access to e-government services (99% of government services online!)',
 'Join Startup Estonia community and events',
 'Access to Estonian startup ecosystem and EU funding',
 'PR eligible after 5 years, citizenship after 8 years',
 ],
 },
 {
 id: 'consider-resubmission',
 title: 'Consider Resubmission',
 description: 'If rejected by Startup Estonia Committee, evaluate options for reapplication',
 estimatedDuration: '1-2 months',
 documents: [
 'Rejection feedback from committee',
 'Revised business plan',
 ],
 notes: [
 'Review rejection reasons carefully',
 'Improve business plan based on feedback',
 'Strengthen financial projections and market analysis',
 'May need to pivot business model',
 'Can reapply after improvements',
 'Consider joining Startup Estonia mentorship programs',
 ],
 },
 {
 id: 'consider-appeal',
 title: 'Consider Appeal',
 description: 'If visa rejected, evaluate appeal options',
 estimatedDuration: '1-2 months',
 documents: [
 'Rejection decision from Police',
 'Appeal form',
 'Additional supporting evidence',
 ],
 notes: [
 'Appeal deadline: 30 days from decision',
 'Submit appeal to Administrative Court',
 'Provide additional evidence or clarifications',
 'Consider legal consultation',
 'Can reapply with stronger application',
 'Alternative: consider E-Residency + Business Visa or Digital Nomad Visa',
 ],
 },
 ],
 },

 'ee_eu_blue_card': {
 programId: 'ee_eu_blue_card',
 countryCode: 'EE',
 programName: 'EU Blue Card',
 totalEstimatedDuration: '2-3 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer<br/>from Estonian Employer]
 job-offer --> check-salary{"Salary >= EUR 2,000/month<br/>(EUR 24,000/year)?"}
 check-salary -->|Yes| check-education{Higher Education<br/>Qualification?}
 check-salary -->|No| End1([Not Eligible])
 check-education -->|Yes| gather-documents[Gather Required Documents]
 check-education -->|No| End2([Not Eligible])
 gather-documents -->submit-visa[Submit Application<br/>to Police]
 submit-visa -->visa-processing[Processing<br/>30-60 Days]
 visa-processing --> decision{Decision}
 decision -->|Approved| receive-permit[Receive EU Blue Card]
 decision -->|Rejected| consider-appeal[Consider Appeal]
 receive-permit -->travel-to-estonia[Travel to Estonia]
 travel-to-estonia -->register-police[Register and Get<br/>ID Card]
 register-police --> Success([Process Complete])
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
            label: "Salary >= EUR 2,000/month<br/>EUR 24,000/year?",
            stepId: "salary",
            nodeType: "decision"
          }
        },
        {
          id: "education",
          type: "decision",
          position: {
            x: 500,
            y: 20
          },
          data: {
            label: "Higher Education<br/>Qualification?",
            stepId: "education",
            nodeType: "decision"
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
          id: "documents",
          type: "document",
          position: {
            x: 708,
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
            x: 484,
            y: 282
          },
          data: {
            label: "Not Eligible",
            stepId: "End2",
            nodeType: "start"
          }
        },
        {
          id: "visa",
          type: "process",
          position: {
            x: 988,
            y: 44
          },
          data: {
            label: "Submit Application<br/>to Police",
            stepId: "visa",
            nodeType: "process"
          }
        },
        {
          id: "processing",
          type: "process",
          position: {
            x: 1298,
            y: 44
          },
          data: {
            label: "Processing<br/>30-60 Days",
            stepId: "processing",
            nodeType: "process"
          }
        },
        {
          id: "decision",
          type: "decision",
          position: {
            x: 1334,
            y: 248
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
            x: 1578,
            y: 44
          },
          data: {
            label: "Receive EU Blue Card",
            stepId: "permit",
            nodeType: "process"
          }
        },
        {
          id: "appeal",
          type: "process",
          position: {
            x: 1858,
            y: 44
          },
          data: {
            label: "Consider Appeal",
            stepId: "appeal",
            nodeType: "process"
          }
        },
        {
          id: "estonia",
          type: "process",
          position: {
            x: 2138,
            y: 44
          },
          data: {
            label: "Travel to Estonia",
            stepId: "estonia",
            nodeType: "process"
          }
        },
        {
          id: "police",
          type: "process",
          position: {
            x: 2418,
            y: 44
          },
          data: {
            label: "Register and Get<br/>ID Card",
            stepId: "police",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "end",
          position: {
            x: 2438,
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
            x: 1878,
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
          id: "education-End2",
          source: "education",
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
          id: "police-Success",
          source: "police",
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
 title: 'Secure Job Offer from Estonian Employer',
 description: 'Obtain a binding job offer from an Estonian employer',
 estimatedDuration: '1-2 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation (minimum EUR 2,000/month = EUR 24,000/year)',
 'Employer information',
 ],
 notes: [
 'Most tech-forward country in EU!',
 'Minimum EUR 24,000/year (EUR 2,000/month)',
 'Much lower salary threshold than most EU countries',
 'Tallinn has vibrant tech ecosystem (Skype, Wise, Bolt)',
 'Popular sectors: IT, fintech, e-government, tech',
 'English widely spoken in tech sector',
 'E-government services make everything seamless',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documents for EU Blue Card application',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport (valid for at least 3 months)',
 'Employment contract',
 'Higher education qualification (certified copy)',
 'Passport-style photographs',
 'Proof of health insurance',
 'Proof of accommodation in Estonia',
 'Criminal record certificate',
 ],
 notes: [
 'Documents must be in Estonian or English',
 'Educational qualifications must be recognized',
 'Apostille required for non-EU documents',
 'Criminal background check must be recent (within 6 months)',
 'Digital copies acceptable for online application',
 ],
 },
 {
 id: 'submit-visa',
 title: 'Submit Application to Police',
 description: 'Submit EU Blue Card application to Estonian Police and Border Guard Board',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents',
 'Application fee payment (EUR 160)',
 ],
 notes: [
 'Apply online via Estonian Police portal',
 'Application fee: EUR 160 (2025)',
 'May need to visit Estonian embassy for biometrics',
 'Processing starts after complete application',
 'Fast processing compared to other EU countries',
 ],
 },
 {
 id: 'visa-processing',
 title: 'Processing (30-60 Days)',
 description: 'Wait for Police to process your EU Blue Card application',
 estimatedDuration: '30-60 days',
 documents: [],
 notes: [
 'Processing time: 30-60 days (fast!)',
 'May be contacted for additional information',
 'Track application status online',
 'E-government services make process smooth',
 'Decision communicated via email',
 ],
 },
 {
 id: 'receive-permit',
 title: 'Receive EU Blue Card',
 description: 'Receive approval and collect your EU Blue Card',
 estimatedDuration: '1 week',
 documents: [
 'Approval notification',
 'EU Blue Card',
 ],
 notes: [
 'Card initially valid for 2 years',
 'Renewable if employment continues',
 'Can work throughout EU after 18 months',
 'Family members can join',
 'PR eligible after 5 years',
 'Citizenship after 8 years',
 'Most tech-forward country in EU!',
 ],
 },
 {
 id: 'travel-to-estonia',
 title: 'Travel to Estonia',
 description: 'Travel to Estonia with your EU Blue Card',
 estimatedDuration: '1-3 days',
 documents: [
 'Valid passport with EU Blue Card',
 'Employment contract',
 'Proof of accommodation',
 ],
 notes: [
 'Main airport: Tallinn Airport (TLL)',
 'Register at local government within 1 month',
 'English widely spoken in Tallinn',
 'EU member state - Schengen benefits',
 'E-government services available immediately',
 ],
 },
 {
 id: 'register-police',
 title: 'Register and Get Estonian ID Card',
 description: 'Complete registration and receive Estonian ID card',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Passport with EU Blue Card',
 'Employment contract',
 'Proof of accommodation',
 ],
 notes: [
 'Register at local government office within 1 month',
 'Get Estonian ID card (digital identity)',
 'Open Estonian bank account',
 'Register with tax authorities',
 'Access to e-government services (99% of services online!)',
 'Access to Estonian healthcare system',
 'Join Tallinn tech community',
 'PR after 5 years, citizenship after 8 years',
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
 'Appeal deadline: 30 days from decision',
 'Submit appeal to Administrative Court',
 'Consider legal consultation',
 'Can reapply with stronger application',
 'Alternative: consider Estonia Startup Visa or E-Residency + Business Visa',
 ],
 },
 ],
 },

 'ee_family_reunification': {
 programId: 'ee_family_reunification',
 countryCode: 'EE',
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
 permit -->travel[Travel to Estonia]
 travel -->register[Register at Police]
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
            label: "Travel to Estonia",
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
            label: "Register at Police",
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
 notes: ['Sponsor must have valid permit', 'Spouse, children, parents eligible', 'E-residency available'],
 },
 {
 id: 'docs',
 title: 'Gather Documents',
 description: 'Collect required documents',
 estimatedDuration: '2-3 weeks',
 documents: ['Passport', 'Marriage/birth certificate', 'Proof of accommodation', 'Proof of income', 'Health insurance'],
 notes: ['All documents must be apostilled', 'Digital-first process'],
 },
 {
 id: 'submit',
 title: 'Submit Application',
 description: 'Submit to Estonian Police and Border Guard',
 estimatedDuration: '1 week',
 documents: ['All documents', 'Application fee (EUR 160)'],
 notes: ['Processing: 30-60 days'],
 },
 {
 id: 'process',
 title: 'Processing',
 description: 'Police reviews application',
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
 title: 'Travel to Estonia',
 description: 'Travel with permit',
 estimatedDuration: '1-3 days',
 documents: ['Passport with permit'],
 notes: ['Main airport: Tallinn (TLL)'],
 },
 {
 id: 'register',
 title: 'Register at Police',
 description: 'Register within 1 month',
 estimatedDuration: '1 week',
 documents: ['Proof of address'],
 notes: ['Register within 1 month', 'Digital society', 'PR in 5 years'],
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

