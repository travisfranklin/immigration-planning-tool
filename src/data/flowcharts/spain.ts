/**
 * Spain Immigration Process Flowcharts
 * Defines the step-by-step process for each Spanish visa program
 */

import type { FlowchartDefinition } from '../../types/flowchart';

export const spainFlowcharts: Record<string, FlowchartDefinition> = {
 'golden_visa': {
 programId: 'es_golden_visa',
 countryCode: 'ES',
 programName: 'Golden Visa (Investor Visa)',
 totalEstimatedDuration: '2-4 months',
 complexity: 'medium',
 successRate: '95%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->investment-type{Investment Type?}
 investment-type -->|Real Estate| property-purchase[Purchase Property EUR 500k+]
 investment-type -->|Business| business-investment[Invest in Business EUR 1M+]
 investment-type -->|Bonds| government-bonds[Buy Government Bonds EUR 2M+]
 property-purchase -->nie-number[Obtain NIE Number]
 business-investment -->nie-number
 government-bonds -->nie-number
 nie-number -->gather-documents[Gather Required Documents]
 gather-documents -->submit-application[Submit Application]
 submit-application -->processing[Wait for Processing<br/>4-8 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive Golden Visa]
 decision -->|Rejected| End1([Process Ended])
 receive-visa -->travel-register[Travel and Register]
 travel-register --> Success([Process Complete])`,
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
          id: "purchase",
          type: "process",
          position: {
            x: 260,
            y: 20
          },
          data: {
            label: "Purchase Property EUR 500k+",
            stepId: "purchase",
            nodeType: "process"
          }
        },
        {
          id: "investment",
          type: "process",
          position: {
            x: 540,
            y: 20
          },
          data: {
            label: "Invest in Business EUR 1M+",
            stepId: "investment",
            nodeType: "process"
          }
        },
        {
          id: "bonds",
          type: "process",
          position: {
            x: 820,
            y: 20
          },
          data: {
            label: "Buy Government Bonds EUR 2M+",
            stepId: "bonds",
            nodeType: "process"
          }
        },
        {
          id: "number",
          type: "process",
          position: {
            x: 1100,
            y: 20
          },
          data: {
            label: "Obtain NIE Number",
            stepId: "number",
            nodeType: "process"
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
          id: "application",
          type: "process",
          position: {
            x: 1660,
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
            x: 1660,
            y: 200
          },
          data: {
            label: "Wait for Processing<br/>4-8 weeks",
            stepId: "processing",
            nodeType: "process"
          }
        },
        {
          id: "decision",
          type: "decision",
          position: {
            x: 1696,
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
            x: 1940,
            y: 20
          },
          data: {
            label: "Receive Golden Visa",
            stepId: "visa",
            nodeType: "process"
          }
        },
        {
          id: "End1",
          type: "end",
          position: {
            x: 1680,
            y: 608
          },
          data: {
            label: "Process Ended",
            stepId: "End1",
            nodeType: "end"
          }
        },
        {
          id: "register",
          type: "process",
          position: {
            x: 2220,
            y: 20
          },
          data: {
            label: "Travel and Register",
            stepId: "register",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "end",
          position: {
            x: 2240,
            y: 210
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
        }
      ]
    },
    steps: [
 {
 id: 'investment-type',
 title: 'Choose Investment Type',
 description: 'Determine which investment option you will pursue',
 estimatedDuration: '1 week',
 documents: [
 'Financial statements',
 'Investment plan',
 ],
 notes: [
 'Option 1: EUR 500,000 in Spanish real estate',
 'Option 2: EUR 1,000,000 in Spanish company shares',
 'Option 3: EUR 2,000,000 in Spanish government bonds',
 'Option 4: EUR 1,000,000 in Spanish bank deposit',
 ],
 isConditional: true,
 condition: 'Different requirements for each investment type',
 },
 {
 id: 'property-purchase',
 title: 'Purchase Property (if applicable)',
 description: 'Complete real estate purchase of EUR 500,000 or more',
 estimatedDuration: '4-8 weeks',
 documents: [
 'Property deed (escritura)',
 'Proof of payment',
 'Property valuation',
 ],
 notes: [
 'Can be one property or multiple properties totaling EUR 500k+',
 'Property must be debt-free',
 'Use Spanish lawyer (abogado) for purchase',
 'Register property in Land Registry',
 ],
 isConditional: true,
 condition: 'Only if choosing real estate investment',
 },
 {
 id: 'business-investment',
 title: 'Invest in Spanish Business',
 description: 'Complete business investment of EUR 1,000,000 or more',
 estimatedDuration: '6-12 weeks',
 documents: [
 'Share certificates',
 'Proof of investment',
 'Business registration documents',
 'Investment agreement',
 ],
 notes: [
 'Minimum EUR 1,000,000 investment in Spanish company shares',
 'Can invest in existing business or new venture',
 'Must create jobs or contribute to economic interest',
 'Use Spanish lawyer and financial advisor',
 ],
 isConditional: true,
 condition: 'Only if choosing business investment',
 },
 {
 id: 'government-bonds',
 title: 'Purchase Spanish Government Bonds',
 description: 'Purchase EUR 2,000,000 in Spanish government bonds',
 estimatedDuration: '4-6 weeks',
 documents: [
 'Bond certificates',
 'Proof of purchase',
 'Bank statements',
 'Investment confirmation',
 ],
 notes: [
 'Minimum EUR 2,000,000 in Spanish government bonds',
 'Must be held for minimum period',
 'Work with Spanish bank or financial institution',
 'Lower risk but higher capital requirement',
 ],
 isConditional: true,
 condition: 'Only if choosing government bonds investment',
 },
 {
 id: 'nie-number',
 title: 'Obtain NIE Number',
 description: 'Get Spanish tax identification number',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Passport',
 'NIE application form (EX-15)',
 'Reason for NIE (investment)',
 ],
 notes: [
 'NIE: Número de Identificación de Extranjero',
 'Required for all financial transactions in Spain',
 'Can apply at Spanish consulate in US',
 'Fee: approximately EUR 10',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport',
 'Completed visa application form (EX-01)',
 'Passport-sized photos',
 'NIE number',
 'Proof of investment (property deed, share certificates, etc.)',
 'Proof of health insurance',
 'Criminal background check (apostilled)',
 'Medical certificate',
 'Proof of financial means',
 ],
 notes: [
 'All documents must be apostilled',
 'Health insurance must cover Spain',
 'FBI background check can take 8-12 weeks',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit to Spanish consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 60)',
 ],
 notes: [
 'Book appointment at Spanish consulate in US',
 'Bring original documents and copies',
 'Can also apply in Spain if already there',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Consulate processes application',
 estimatedDuration: '4-8 weeks',
 documents: [],
 notes: [
 'Fast processing for Golden Visa',
 'Usually approved if investment is verified',
 'May be contacted for additional documents',
 ],
 },
 {
 id: 'receive-visa',
 title: 'Receive Golden Visa',
 description: 'Collect approved visa',
 estimatedDuration: '1 week',
 documents: [
 'Approval letter',
 'Passport',
 ],
 notes: [
 'Initial visa valid for 1 year',
 'Renewable for 2-year periods',
 'Can apply for permanent residence after 5 years',
 'Family members can be included',
 ],
 },
 {
 id: 'travel-register',
 title: 'Travel and Register',
 description: 'Travel to Spain and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Golden Visa',
 'Passport',
 'Proof of investment',
 ],
 notes: [
 'Register at local police station (Comisaría)',
 'Obtain TIE card (residence card)',
 'No minimum stay requirement',
 'Must visit Spain at least once per year',
 ],
 },
 ],
 },

 'non_lucrative': {
 programId: 'es_non_lucrative',
 countryCode: 'ES',
 programName: 'Non-Lucrative Visa',
 totalEstimatedDuration: '3-5 months',
 complexity: 'low',
 successRate: '85%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->income-verification{"Passive Income >= EUR 28,800/year?"}
 income-verification -->|Yes| savings-verification{"Savings >= EUR 30,000?"}
 income-verification -->|No| End1([Not Eligible])
 savings-verification -->|Yes| gather-documents[Gather Required Documents]
 savings-verification -->|No| End2([Not Eligible])
 gather-documents -->submit-application[Submit Application]
 submit-application -->processing[Wait for Processing<br/>8-12 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive Non-Lucrative Visa]
 decision -->|Rejected| End3([Process Ended])
 receive-visa -->travel-register[Travel and Register]
 travel-register --> Success([Process Complete])`,
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
          id: "verification",
          type: "decision",
          position: {
            x: 260,
            y: 20
          },
          data: {
            label: "Savings >= EUR 30,000?",
            stepId: "verification",
            nodeType: "decision"
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
          id: "End2",
          type: "start",
          position: {
            x: 508,
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
            x: 748,
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
            x: 748,
            y: 248
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
          id: "visa",
          type: "process",
          position: {
            x: 1028,
            y: 44
          },
          data: {
            label: "Receive Non-Lucrative Visa",
            stepId: "visa",
            nodeType: "process"
          }
        },
        {
          id: "End3",
          type: "end",
          position: {
            x: 768,
            y: 656
          },
          data: {
            label: "Process Ended",
            stepId: "End3",
            nodeType: "end"
          }
        },
        {
          id: "register",
          type: "process",
          position: {
            x: 1308,
            y: 44
          },
          data: {
            label: "Travel and Register",
            stepId: "register",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "end",
          position: {
            x: 1328,
            y: 258
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
          id: "verification-End1",
          source: "verification",
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
          id: "verification-End2",
          source: "verification",
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
        }
      ]
    },
    steps: [
 {
 id: 'income-verification',
 title: 'Verify Passive Income',
 description: 'Confirm you have sufficient passive income',
 estimatedDuration: '1 week',
 documents: [
 'Bank statements (6 months)',
 'Investment account statements',
 'Pension statements',
 'Rental income documentation',
 ],
 notes: [
 'Minimum EUR 28,800/year (400% of IPREM)',
 'Must be passive income (not from employment)',
 'Can include: pensions, investments, rental income, dividends',
 'Add EUR 7,200/year for each dependent',
 ],
 },
 {
 id: 'savings-verification',
 title: 'Verify Savings',
 description: 'Confirm you have sufficient savings',
 estimatedDuration: '1 week',
 documents: [
 'Bank statements showing EUR 30,000+',
 ],
 notes: [
 'Recommended minimum EUR 30,000 in savings',
 'Shows financial stability',
 'Combined with passive income demonstrates self-sufficiency',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '4-6 weeks',
 documents: [
 'Valid passport',
 'Completed visa application form',
 'Passport-sized photos',
 'Proof of passive income',
 'Bank statements',
 'Private health insurance (full coverage in Spain)',
 'Criminal background check (apostilled)',
 'Medical certificate',
 'Proof of accommodation in Spain',
 ],
 notes: [
 'FBI background check takes 8-12 weeks - start early!',
 'Health insurance must be from Spanish provider or international with Spain coverage',
 'All documents must be apostilled',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit to Spanish consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 60)',
 ],
 notes: [
 'Book appointment at Spanish consulate',
 'Bring original documents and copies',
 'May be interviewed',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Consulate processes application',
 estimatedDuration: '8-12 weeks',
 documents: [],
 notes: [
 'Processing time varies by consulate',
 'May be contacted for additional documents',
 'Financial documentation is key',
 ],
 },
 {
 id: 'receive-visa',
 title: 'Receive Non-Lucrative Visa',
 description: 'Collect approved visa',
 estimatedDuration: '1 week',
 documents: [
 'Approval letter',
 'Passport',
 ],
 notes: [
 'Initial visa valid for 1 year',
 'Renewable for 2-year periods',
 'Cannot work in Spain',
 'Can receive foreign income',
 ],
 },
 {
 id: 'travel-register',
 title: 'Travel and Register',
 description: 'Travel to Spain and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Non-Lucrative Visa',
 'Passport',
 'Proof of accommodation',
 ],
 notes: [
 'Must enter Spain within 3 months of visa issuance',
 'Register at local police station within 30 days',
 'Obtain TIE card',
 'Must spend at least 183 days/year in Spain',
 ],
 },
 ],
 },

 'digital_nomad': {
 programId: 'es_digital_nomad',
 countryCode: 'ES',
 programName: 'Digital Nomad Visa',
 totalEstimatedDuration: '2-3 months',
 complexity: 'low',
 successRate: '90%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->remote-work-verification{Remote Work?}
 remote-work-verification -->|Yes| income-verification{"Income >= EUR 2,400/month?"}
 remote-work-verification -->|No| End1([Not Eligible])
 income-verification -->|Yes| gather-documents[Gather Required Documents]
 income-verification -->|No| End2([Not Eligible])
 gather-documents -->submit-application[Submit Application]
 submit-application -->processing[Wait for Processing<br/>4-8 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive Digital Nomad Visa]
 decision -->|Rejected| End3([Process Ended])
 receive-visa -->travel-register[Travel and Register]
 travel-register --> Success([Process Complete])`,
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
          id: "verification",
          type: "decision",
          position: {
            x: 260,
            y: 20
          },
          data: {
            label: "Income >= EUR 2,400/month?",
            stepId: "verification",
            nodeType: "decision"
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
          id: "End2",
          type: "start",
          position: {
            x: 508,
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
            x: 748,
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
            x: 748,
            y: 248
          },
          data: {
            label: "Wait for Processing<br/>4-8 weeks",
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
          id: "visa",
          type: "process",
          position: {
            x: 1028,
            y: 44
          },
          data: {
            label: "Receive Digital Nomad Visa",
            stepId: "visa",
            nodeType: "process"
          }
        },
        {
          id: "End3",
          type: "end",
          position: {
            x: 768,
            y: 656
          },
          data: {
            label: "Process Ended",
            stepId: "End3",
            nodeType: "end"
          }
        },
        {
          id: "register",
          type: "process",
          position: {
            x: 1308,
            y: 44
          },
          data: {
            label: "Travel and Register",
            stepId: "register",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "end",
          position: {
            x: 1328,
            y: 258
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
          id: "verification-End1",
          source: "verification",
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
          id: "verification-End2",
          source: "verification",
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
        }
      ]
    },
    steps: [
 {
 id: 'remote-work-verification',
 title: 'Verify Remote Work Status',
 description: 'Confirm you work remotely for non-Spanish company',
 estimatedDuration: '1 week',
 documents: [
 'Employment contract or freelance agreements',
 'Letter from employer confirming remote work',
 ],
 notes: [
 'Must work remotely for company outside Spain',
 'Can be employee or freelancer',
 'Cannot work for Spanish clients (max 20% of income)',
 ],
 },
 {
 id: 'income-verification',
 title: 'Verify Income Requirements',
 description: 'Confirm you meet minimum income threshold',
 estimatedDuration: '1 week',
 documents: [
 'Recent pay slips (3 months)',
 'Bank statements',
 'Tax returns',
 ],
 notes: [
 'Minimum EUR 2,400/month ( EUR 28,800/year)',
 'Income must be stable and ongoing',
 'Can be from employment or freelance work',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '2-3 weeks',
 documents: [
 'Valid passport',
 'Completed visa application form',
 'Passport-sized photos',
 'Employment contract or freelance agreements',
 'Proof of income ( EUR 2,400/month)',
 'Private health insurance',
 'Criminal background check (apostilled)',
 'Proof of accommodation in Spain',
 'University degree or 3+ years experience',
 ],
 notes: [
 'All documents must be apostilled',
 'Health insurance must cover Spain',
 'Degree or experience proves professional qualification',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit to Spanish consulate',
 estimatedDuration: '1 week',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 80)',
 ],
 notes: [
 'Book appointment at Spanish consulate',
 'New visa type (introduced 2023)',
 'Fast processing',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Consulate processes application',
 estimatedDuration: '4-8 weeks',
 documents: [],
 notes: [
 'Faster processing than traditional work visa',
 'Usually approved if requirements met',
 'May be contacted for clarifications',
 ],
 },
 {
 id: 'receive-visa',
 title: 'Receive Digital Nomad Visa',
 description: 'Collect approved visa',
 estimatedDuration: '1 week',
 documents: [
 'Approval letter',
 'Passport',
 ],
 notes: [
 'Valid for 1 year',
 'Renewable up to 5 years total',
 'Can apply for permanent residence after 5 years',
 'Eligible for Beckham Law tax benefits (24% flat tax)',
 ],
 },
 {
 id: 'travel-register',
 title: 'Travel and Register',
 description: 'Travel to Spain and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Digital Nomad Visa',
 'Passport',
 'Proof of accommodation',
 ],
 notes: [
 'Register at local police station',
 'Obtain TIE card',
 'Apply for Beckham Law if eligible',
 'Can work from anywhere in Spain',
 ],
 },
 ],
 },

 'highly_qualified': {
 programId: 'es_highly_qualified',
 countryCode: 'ES',
 programName: 'Highly Qualified Professional Visa',
 totalEstimatedDuration: '2-4 months',
 complexity: 'medium',
 successRate: '80%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->job-offer[Secure Job Offer]
 job-offer -->degree-verification{Bachelor's Degree?}
 degree-verification -->|Yes| salary-verification{"Salary >= EUR 30,000?"}
 degree-verification -->|No| End1([Not Eligible])
 salary-verification -->|Yes| gather-documents[Gather Required Documents]
 salary-verification -->|No| End2([Not Eligible])
 gather-documents -->submit-application[Submit Application]
 submit-application -->processing[Wait for Processing<br/>6-10 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive Work Visa]
 decision -->|Rejected| End3([Process Ended])
 receive-visa -->travel-register[Travel and Register]
 travel-register -->social-security[Register for Social Security]
 social-security --> Success([Process Complete])`,
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
          id: "verification",
          type: "decision",
          position: {
            x: 260,
            y: 20
          },
          data: {
            label: "Salary >= EUR 30,000?",
            stepId: "verification",
            nodeType: "decision"
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
          id: "End2",
          type: "start",
          position: {
            x: 508,
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
            x: 748,
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
            x: 748,
            y: 248
          },
          data: {
            label: "Wait for Processing<br/>6-10 weeks",
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
          id: "visa",
          type: "process",
          position: {
            x: 1028,
            y: 44
          },
          data: {
            label: "Receive Work Visa",
            stepId: "visa",
            nodeType: "process"
          }
        },
        {
          id: "End3",
          type: "end",
          position: {
            x: 768,
            y: 656
          },
          data: {
            label: "Process Ended",
            stepId: "End3",
            nodeType: "end"
          }
        },
        {
          id: "register",
          type: "process",
          position: {
            x: 1308,
            y: 44
          },
          data: {
            label: "Travel and Register",
            stepId: "register",
            nodeType: "process"
          }
        },
        {
          id: "security",
          type: "process",
          position: {
            x: 1588,
            y: 44
          },
          data: {
            label: "Register for Social Security",
            stepId: "security",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "end",
          position: {
            x: 1608,
            y: 258
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
          id: "verification-End1",
          source: "verification",
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
          id: "verification-End2",
          source: "verification",
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
          id: "security-Success",
          source: "security",
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
 id: 'job-offer',
 title: 'Secure Job Offer',
 description: 'Obtain job offer from Spanish employer',
 estimatedDuration: '1-3 months',
 documents: [
 'Signed employment contract',
 'Job description',
 'Salary confirmation',
 ],
 notes: [
 'Employer must be registered in Spain',
 'Job must match your qualifications',
 'Salary must meet minimum threshold',
 ],
 },
 {
 id: 'degree-verification',
 title: 'Verify Degree Requirements',
 description: 'Confirm you have required education',
 estimatedDuration: '1 week',
 documents: [
 'University degree certificate',
 'Transcript of records',
 ],
 notes: [
 'Bachelor degree minimum',
 'Degree must be relevant to job',
 'May need degree recognition (homologacion)',
 ],
 },
 {
 id: 'salary-verification',
 title: 'Verify Salary Requirements',
 description: 'Confirm salary meets minimum',
 estimatedDuration: '1 day',
 documents: [
 'Employment contract with salary details',
 ],
 notes: [
 'Minimum approximately EUR 30,000/year',
 'Varies by region and profession',
 'Must be competitive with Spanish market',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '3-4 weeks',
 documents: [
 'Valid passport',
 'Completed visa application form',
 'Passport-sized photos',
 'Employment contract',
 'University degree (apostilled)',
 'Transcript of records',
 'CV/Resume',
 'Private health insurance',
 'Criminal background check (apostilled)',
 'Medical certificate',
 ],
 notes: [
 'All documents must be apostilled',
 'Degree may need official recognition',
 'FBI background check takes 8-12 weeks',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit to Spanish consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 60)',
 ],
 notes: [
 'Book appointment at Spanish consulate',
 'Employer may need to submit documents in Spain',
 'Bring original documents and copies',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Consulate and immigration office process application',
 estimatedDuration: '6-10 weeks',
 documents: [],
 notes: [
 'Processing time varies',
 'May be contacted for additional documents',
 'Employer may be contacted',
 ],
 },
 {
 id: 'receive-visa',
 title: 'Receive Work Visa',
 description: 'Collect approved visa',
 estimatedDuration: '1 week',
 documents: [
 'Approval letter',
 'Passport',
 ],
 notes: [
 'Initial visa valid for 1 year',
 'Renewable for 2-year periods',
 'Tied to specific employer initially',
 ],
 },
 {
 id: 'travel-register',
 title: 'Travel and Register',
 description: 'Travel to Spain and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Work visa',
 'Passport',
 'Employment contract',
 ],
 notes: [
 'Register at local police station within 30 days',
 'Obtain TIE card',
 'Register for social security',
 ],
 },
 {
 id: 'social-security',
 title: 'Register for Social Security',
 description: 'Complete social security registration',
 estimatedDuration: '1 week',
 documents: [
 'TIE card',
 'Employment contract',
 ],
 notes: [
 'Employer typically handles registration',
 'Receive social security number',
 'Required to start work',
 ],
 },
 ],
 },

 'family_reunification': {
 programId: 'es_family_reunification',
 countryCode: 'ES',
 programName: 'Family Reunification Visa',
 totalEstimatedDuration: '4-6 months',
 complexity: 'medium',
 successRate: '75%',
 mermaidDiagram: `
flowchart TD
 Start([Start Process]) -->sponsor-eligibility{Family in Spain?}
 sponsor-eligibility -->|Yes| income-housing{Sponsor Meets Requirements?}
 sponsor-eligibility -->|No| End1([Not Eligible])
 income-housing -->|Yes| relationship-proof[Prove Relationship]
 income-housing -->|No| End2([Not Eligible])
 relationship-proof -->gather-documents[Gather Required Documents]
 gather-documents -->submit-application[Submit Application]
 submit-application -->processing[Wait for Processing<br/>12-16 weeks]
 processing --> decision{Decision}
 decision -->|Approved| receive-visa[Receive Visa]
 decision -->|Rejected| End3([Process Ended])
 receive-visa -->travel-register[Travel and Register]
 travel-register -->empadronamiento[Complete Empadronamiento]
 empadronamiento --> Success([Process Complete])`,
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
          id: "housing",
          type: "decision",
          position: {
            x: 260,
            y: 20
          },
          data: {
            label: "Sponsor Meets Requirements?",
            stepId: "housing",
            nodeType: "decision"
          }
        },
        {
          id: "End1",
          type: "start",
          position: {
            x: 468,
            y: 54
          },
          data: {
            label: "Not Eligible",
            stepId: "End1",
            nodeType: "start"
          }
        },
        {
          id: "proof",
          type: "process",
          position: {
            x: 708,
            y: 44
          },
          data: {
            label: "Prove Relationship",
            stepId: "proof",
            nodeType: "process"
          }
        },
        {
          id: "End2",
          type: "start",
          position: {
            x: 244,
            y: 258
          },
          data: {
            label: "Not Eligible",
            stepId: "End2",
            nodeType: "start"
          }
        },
        {
          id: "documents",
          type: "document",
          position: {
            x: 988,
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
            x: 1268,
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
            x: 1268,
            y: 248
          },
          data: {
            label: "Wait for Processing<br/>12-16 weeks",
            stepId: "processing",
            nodeType: "process"
          }
        },
        {
          id: "decision",
          type: "decision",
          position: {
            x: 1304,
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
            x: 1548,
            y: 44
          },
          data: {
            label: "Receive Visa",
            stepId: "visa",
            nodeType: "process"
          }
        },
        {
          id: "End3",
          type: "end",
          position: {
            x: 1288,
            y: 656
          },
          data: {
            label: "Process Ended",
            stepId: "End3",
            nodeType: "end"
          }
        },
        {
          id: "register",
          type: "process",
          position: {
            x: 1828,
            y: 44
          },
          data: {
            label: "Travel and Register",
            stepId: "register",
            nodeType: "process"
          }
        },
        {
          id: "empadronamiento",
          type: "process",
          position: {
            x: 1828,
            y: 248
          },
          data: {
            label: "Complete Empadronamiento",
            stepId: "empadronamiento",
            nodeType: "process"
          }
        },
        {
          id: "Success",
          type: "end",
          position: {
            x: 1848,
            y: 462
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
          id: "housing-End2",
          source: "housing",
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
          id: "register-empadronamiento",
          source: "register",
          target: "empadronamiento",
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
          id: "empadronamiento-Success",
          source: "empadronamiento",
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
 id: 'sponsor-eligibility',
 title: 'Verify Sponsor Eligibility',
 description: 'Confirm family member in Spain meets requirements',
 estimatedDuration: '1 week',
 documents: [
 'Sponsor residence permit or Spanish passport',
 'Sponsor income statements',
 'Sponsor housing documents',
 ],
 notes: [
 'Sponsor must have valid residence permit or be Spanish citizen',
 'Must have lived in Spain for 1+ year',
 'Must meet income and housing requirements',
 ],
 },
 {
 id: 'income-housing',
 title: 'Verify Income and Housing',
 description: 'Confirm sponsor meets financial requirements',
 estimatedDuration: '1-2 weeks',
 documents: [
 'Recent pay slips (3 months)',
 'Tax returns',
 'Housing lease or ownership documents',
 ],
 notes: [
 'Income must be sufficient for family size',
 'Housing must be adequate',
 'Specific thresholds vary by region',
 ],
 },
 {
 id: 'relationship-proof',
 title: 'Prove Family Relationship',
 description: 'Document your relationship to sponsor',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Marriage certificate (if spouse)',
 'Birth certificates (if parent/child)',
 'Partnership registration (if partner)',
 'Photos together',
 ],
 notes: [
 'All certificates must be apostilled',
 'Relationship must be genuine',
 'May need to prove cohabitation history',
 ],
 },
 {
 id: 'gather-documents',
 title: 'Gather Required Documents',
 description: 'Collect all necessary documentation',
 estimatedDuration: '4-6 weeks',
 documents: [
 'Valid passport',
 'Completed visa application form',
 'Passport-sized photos',
 'Relationship documents (apostilled)',
 'Sponsor documents',
 'Proof of accommodation',
 'Health insurance certificate',
 'Criminal background check (apostilled)',
 'Medical certificate',
 ],
 notes: [
 'All documents must be apostilled',
 'FBI background check takes 8-12 weeks',
 'Translations must be certified',
 ],
 },
 {
 id: 'submit-application',
 title: 'Submit Application',
 description: 'Submit to Spanish consulate',
 estimatedDuration: '1-2 weeks',
 documents: [
 'All gathered documents',
 'Application fee payment ( EUR 60)',
 ],
 notes: [
 'Book appointment at Spanish consulate',
 'Bring original documents and copies',
 'May be interviewed',
 ],
 },
 {
 id: 'processing',
 title: 'Wait for Processing',
 description: 'Immigration office processes application',
 estimatedDuration: '12-16 weeks',
 documents: [],
 notes: [
 'Longer processing for family reunification',
 'May request additional documents',
 'Sponsor may be contacted',
 ],
 },
 {
 id: 'receive-visa',
 title: 'Receive Visa',
 description: 'Collect approved visa',
 estimatedDuration: '1 week',
 documents: [
 'Approval letter',
 'Passport',
 ],
 notes: [
 'Initial visa valid for 1 year',
 'Renewable for 2-year periods',
 'Allows work in Spain',
 ],
 },
 {
 id: 'travel-register',
 title: 'Travel and Register',
 description: 'Travel to Spain and complete registration',
 estimatedDuration: '2-4 weeks',
 documents: [
 'Visa',
 'Passport',
 'Relationship documents',
 ],
 notes: [
 'Register at local police station within 30 days',
 'Obtain TIE card',
 'Complete empadronamiento (municipal registration)',
 ],
 },
 {
 id: 'empadronamiento',
 title: 'Complete Empadronamiento',
 description: 'Register at local town hall',
 estimatedDuration: '1 week',
 documents: [
 'Passport',
 'TIE card',
 'Proof of address',
 ],
 notes: [
 'Empadronamiento: Municipal registration',
 'Required for accessing public services',
 'Free process at town hall (ayuntamiento)',
 ],
 },
 ],
 },
};
