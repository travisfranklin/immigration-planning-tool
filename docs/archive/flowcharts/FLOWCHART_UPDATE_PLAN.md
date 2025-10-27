# Flowchart Node ID Alignment Plan

## Problem
The FlowchartViewer component uses a regex pattern to extract step IDs from mermaid node IDs:
```typescript
const match = nodeId.match(/^flowchart-(.+?)-\d+$/);
```

This expects node IDs to match the format: `flowchart-{stepId}-{number}`

However, most flowchart files have **mismatched node IDs** between:
- **Mermaid diagram nodes**: `JobOffer`, `GatherDocs`, `Category`, etc. (camelCase or abbreviated)
- **Step IDs in steps array**: `job-offer`, `gather-documents`, `choose-category`, etc. (kebab-case)

**Only Germany** currently has matching IDs (uses kebab-case in mermaid: `job-offer`, `gather-documents`, etc.)

## Solution
Update all flowchart files to use **kebab-case node IDs in mermaid diagrams** that match the step IDs.

## Mapping by Country

| Country | Current Mermaid Node | Target Step ID | Status |
|---------|---------------------|----------------|--------|
| Austria | `JobOffer` | `job-offer` | ❌ Needs update |
| Belgium | `Region` | `determine-region` | ❌ Needs update |
| Bulgaria | `JobOffer` | `job-offer` | ❌ Needs update |
| Croatia | `Job` | `job` | ❌ Needs update |
| Cyprus | `Investment` | `choose-investment` | ❌ Needs update |
| Czech Republic | `JobOffer` | `job-offer` | ❌ Needs update |
| Denmark | `JobOffer` | `job-offer` | ❌ Needs update |
| Estonia | `Remote` | `remote` | ❌ Needs update |
| France | `Category` | `choose-category` | ❌ Needs update |
| Germany | `job-offer` | `job-offer` | ✅ Already correct |
| Greece | `Investment` | `choose-property` | ❌ Needs update |
| Hungary | `JobOffer` | `job-offer` | ❌ Needs update |
| Ireland | `JobOffer` | `job-offer` | ❌ Needs update |
| Italy | `Investment` | `investment-type` | ❌ Needs update |
| Latvia | `Job` | `job` | ❌ Needs update |
| Lithuania | `Job` | `job` | ❌ Needs update |
| Luxembourg | `JobOffer` | `job-offer` | ❌ Needs update |
| Malta | `Income` | `verify-income-employment` | ❌ Needs update |
| Netherlands | `Citizenship` | `citizenship-check` | ❌ Needs update |
| Poland | `JobOffer` | `job-offer` | ❌ Needs update |
| Portugal | `Income` | `verify-income` | ❌ Needs update |
| Romania | `JobOffer` | `job-offer` | ❌ Needs update |
| Slovakia | `JobOffer` | `job-offer` | ❌ Needs update |
| Slovenia | `Job` | `job` | ❌ Needs update |
| Spain | `Investment` | `investment-type` | ❌ Needs update |
| Sweden | `JobOffer` | `job-offer` | ❌ Needs update |

## Update Process

For each file, replace ALL mermaid node IDs with their corresponding step IDs:

1. **Identify all step IDs** in the `steps` array
2. **Find corresponding mermaid nodes** in the diagram
3. **Replace node IDs** to match step IDs (convert to kebab-case)
4. **Update all references** to those nodes in the diagram flow

### Example: Austria
```typescript
// BEFORE
Start([Start Process]) --> JobOffer[Secure Job Offer]
JobOffer --> GatherDocs[Gather Required Documents]

// AFTER
Start([Start Process]) --> job-offer[Secure Job Offer]
job-offer --> gather-documents[Gather Required Documents]
```

## Implementation Strategy

1. **Batch updates by pattern**: Group countries with similar structures
2. **Use find-and-replace**: Systematically replace node IDs
3. **Verify step IDs exist**: Ensure every mermaid node has a matching step
4. **Test incrementally**: Update 3-4 countries, test, then continue

## Testing
After updates, verify:
- ✅ All nodes are clickable in flowchart viewer
- ✅ Clicking nodes triggers `onStepSelect` callback
- ✅ Step details panel updates when clicking nodes
- ✅ No console errors about unmatched node IDs

