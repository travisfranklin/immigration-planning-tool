# Exception Log

**Last Updated:** 2025-12-30
**Audit Phase:** Data Collection & Verification

---

## Summary

| Severity | Count |
|----------|-------|
| 🔴 Critical | 0 |
| 🟠 High | 4 |
| 🟡 Medium | 5 |
| 🔵 Low | 2 |
| **Total** | **11** |

---

## Exceptions by Country

### Austria (AT)

#### [AT-001] Fee Structures Simplified/Incorrect
- **Country:** AT
- **Program:** All Programs
- **Severity:** 🟡 Medium
- **Field:** applicationFee
- **Current Value:** €180 (all programs)
- **Expected Value:** EU Blue Card: €202 (€156+€26+€20), Startup/Self-Employed: €160 (€120+€20+€20), Family: €120 (€80+€20+€20)
- **Source:** https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/
- **Recommendation:** Update fee values or add note explaining total cost breakdown
- **Date Found:** 2025-12-30

#### [AT-002] Startup Visa Capital Requirement Incorrect
- **Country:** AT
- **Program:** Startup Visa (`at_startup`)
- **Severity:** 🟠 High
- **Field:** funding (step)
- **Current Value:** €50,000 minimum funding required
- **Expected Value:** €30,000 minimum capital with 50% equity share. €50,000 is for BONUS POINTS (additional investment capital)
- **Source:** https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/start-up-founders/
- **Recommendation:** Change funding requirement to €30,000 and add note about €50,000 bonus points
- **Date Found:** 2025-12-30

#### [AT-003] Self-Employment Visa Capital Requirement Incorrect
- **Country:** AT
- **Program:** Self-Employment Visa (`at_self_employed`)
- **Severity:** 🟠 High
- **Field:** capital (step)
- **Current Value:** €30,000 minimum capital
- **Expected Value:** €100,000 minimum investment transfer (or job creation/know-how transfer)
- **Source:** https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/self-employed-key-workers/
- **Recommendation:** Update capital requirement to €100,000 and clarify macroeconomic benefit alternatives
- **Date Found:** 2025-12-30

#### [AT-004] Startup Visa Missing Points System
- **Country:** AT
- **Program:** Startup Visa (`at_startup`)
- **Severity:** 🟡 Medium
- **Field:** eligibility criteria
- **Current Value:** No points system mentioned
- **Expected Value:** 50 points minimum required (education, work experience, language, bonus points)
- **Source:** https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/start-up-founders/
- **Recommendation:** Add points calculation step similar to Red-White-Red Card
- **Date Found:** 2025-12-30

#### [AT-005] Family Reunification Missing German A1 Requirement
- **Country:** AT
- **Program:** Family Reunification (`at_family_reunification`)
- **Severity:** 🟡 Medium
- **Field:** language requirement
- **Current Value:** Not specified
- **Expected Value:** German A1 level required for most family members
- **Source:** https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/family-reunification/
- **Recommendation:** Add German A1 requirement step with exemptions noted
- **Date Found:** 2025-12-30

#### [AT-006] Family Reunification Missing Specific Income Thresholds
- **Country:** AT
- **Program:** Family Reunification (`at_family_reunification`)
- **Severity:** 🔵 Low
- **Field:** income requirement
- **Current Value:** "Above minimum threshold"
- **Expected Value:** €1,273.99 single / €2,009.85 couple + €196.57/child (2025 rates)
- **Source:** https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/family-reunification/
- **Recommendation:** Add specific 2025 income thresholds to notes
- **Date Found:** 2025-12-30

### Belgium (BE)

#### [BE-001] EU Blue Card Regional Salary Thresholds Outdated
- **Country:** BE
- **Program:** EU Blue Card (`be_eu_blue_card`)
- **Severity:** 🟠 High
- **Field:** salaryThreshold (regional)
- **Current Value:** Brussels: €66,377, Flanders: €61,011, Wallonia: €56,112
- **Expected Value:** Brussels/Wallonia: €66,738, Flanders: €63,586 (2025)
- **Source:** https://kpmg.com/xx/en/our-insights/gms-flash-alert/flash-alert-2024-223.html
- **Recommendation:** Update all regional thresholds to 2025 values
- **Date Found:** 2025-12-30

#### [BE-002] Highly Skilled Worker Missing Junior Thresholds
- **Country:** BE
- **Program:** Highly Skilled Worker (`be_highly_skilled`)
- **Severity:** 🟡 Medium
- **Field:** salaryThreshold (junior)
- **Current Value:** Not specified
- **Expected Value:** Wallonia: €41,290, Flanders: €39,129.60 (under 30)
- **Source:** https://www.expatmanagementgroup.com/insights/new-2025-immigration-salary-thresholds-in-wallonia-flanders
- **Recommendation:** Add junior (under 30) reduced salary thresholds
- **Date Found:** 2025-12-30

#### [BE-003] Highly Skilled Worker Regional Differences Not Clear
- **Country:** BE
- **Program:** Highly Skilled Worker (`be_highly_skilled`)
- **Severity:** 🟡 Medium
- **Field:** salaryThreshold
- **Current Value:** €51,613 (single value)
- **Expected Value:** Wallonia: €51,613, Flanders: €48,912 (regional variation)
- **Source:** https://www.expatmanagementgroup.com/insights/new-2025-immigration-salary-thresholds-in-wallonia-flanders
- **Recommendation:** Clarify regional threshold differences in notes
- **Date Found:** 2025-12-30

#### [BE-004] Professional Card Missing Annual Validity Fee
- **Country:** BE
- **Program:** Professional Card (`be_professional_card`)
- **Severity:** 🔵 Low
- **Field:** applicationFee
- **Current Value:** €140
- **Expected Value:** €140 (application) + €90/year (validity)
- **Source:** https://be.brussels/en/employment/job-brussels/employment-conditions/professional-card-non-european-nationals
- **Recommendation:** Add note about annual €90 validity fee
- **Date Found:** 2025-12-30

#### [BE-005] Family Reunification Missing 2025 Income Requirement
- **Country:** BE
- **Program:** Family Reunification (`be_family_reunification`)
- **Severity:** 🟠 High
- **Field:** incomeThreshold
- **Current Value:** "Above minimum" / €5,000+ for fast-track
- **Expected Value:** €5,000 gross/month minimum (new 2025 requirement effective August 2025)
- **Source:** https://assets.kpmg.com/content/dam/kpmgsites/xx/pdf/2025/06/fa25-115.pdf
- **Recommendation:** Update income requirement to reflect new 2025 rules
- **Date Found:** 2025-12-30

### Bulgaria (BG)
*Audit pending*

### Croatia (HR)
*Audit pending*

### Cyprus (CY)
*Audit pending*

### Czech Republic (CZ)
*Audit pending*

### Denmark (DK)
*Audit pending*

### Estonia (EE)
*Audit pending*

### Finland (FI)
*Audit pending*

### France (FR)
*Audit pending*

### Germany (DE)
*Audit pending*

### Greece (GR)
*Audit pending*

### Hungary (HU)
*Audit pending*

### Ireland (IE)
*Audit pending*

### Italy (IT)
*Audit pending*

### Latvia (LV)
*Audit pending*

### Lithuania (LT)
*Audit pending*

### Luxembourg (LU)
*Audit pending*

### Malta (MT)
*Audit pending*

### Netherlands (NL)
*Audit pending*

### Poland (PL)
*Audit pending*

### Portugal (PT)
*Audit pending*

### Romania (RO)
*Audit pending*

### Slovakia (SK)
*Audit pending*

### Slovenia (SI)
*Audit pending*

### Spain (ES)
*Audit pending*

### Sweden (SE)
*Audit pending*

---

## Exception Template

When logging exceptions, use the following format:

```markdown
#### [EXC-XXX] Title of Exception
- **Country:** XX
- **Program:** Program Name
- **Severity:** 🔴 Critical / 🟠 High / 🟡 Medium / 🔵 Low
- **Field:** Affected field or step
- **Current Value:** What the system shows
- **Expected Value:** What official sources indicate
- **Source:** URL or citation
- **Recommendation:** Suggested fix
- **Date Found:** YYYY-MM-DD
```

