# Croatia (HR) - Country Audit Report

**Audit Date:** 2025-12-30  
**Auditor:** Immigration Policy Specialist (Southern EU)  
**Status:** ✅ COMPLETE  
**Overall Score:** 78/100

---

## Executive Summary

Croatia's immigration program data requires significant updates. The EU Blue Card salary threshold and Digital Nomad Visa income requirements are both outdated. Additionally, the Digital Nomad Visa duration was extended to 18 months in 2025. Five programs were audited.

---

## Programs Audited

### 1. EU Blue Card (`hr_eu_blue_card`)

| Field | System Value | Official Value (2025) | Status |
|-------|--------------|----------------------|--------|
| Salary Threshold | €21,600/year (€1,800/month) | €24,845.64/year (~€2,070/month) | ❌ HIGH ERROR |
| Application Fee | €80 | €74.32 + €31.85 (biometric) = ~€106 | ⚠️ NEEDS UPDATE |
| Processing Time | 30-60 days | 30-60 days | ✅ MATCH |
| Validity | 2 years | Up to 2 years | ✅ MATCH |
| Registration | 3 days | Within 3 days | ✅ MATCH |

**Notes:**
- Croatia increased Blue Card threshold by 17% for 2025 (one of highest increases in EU)
- System shows €1,800/month but official 2025 threshold is €2,070.47/month
- Fee structure should include biometric card fee

---

### 2. Digital Nomad Visa (`hr_digital_nomad`)

| Field | System Value | Official Value (2025) | Status |
|-------|--------------|----------------------|--------|
| Income Threshold | €2,300/month | €3,295/month | ❌ HIGH ERROR |
| Validity | 1 year | 18 months (extended 2025) | ❌ HIGH ERROR |
| Application Fee | €70 | €100-150 | ⚠️ NEEDS UPDATE |
| Processing Time | 30 days | 30-60 days | ✅ ACCEPTABLE |
| Tax Status | No Croatian tax | Exempt on foreign income | ✅ MATCH |

**Notes:**
- **CRITICAL:** Income threshold increased from €2,300 to €3,295/month in 2025
- **CRITICAL:** Visa duration extended from 12 to 18 months in 2025
- Savings option: €59,310 for 18 months or €39,540 for 12 months
- Non-renewable (must leave for 6 months) — correctly noted

---

### 3. Work Permit (`hr_work_permit`)

| Field | System Value | Official Value | Status |
|-------|--------------|----------------|--------|
| Salary Threshold | €10,800/year (€900/month) | ~€10,800 | ✅ MATCH |
| Application Fee | €80 | ~€80 | ✅ ACCEPTABLE |
| Processing Time | 30-90 days | Varies | ✅ ACCEPTABLE |
| Validity | 1 year | Up to 1 year | ✅ MATCH |

**Notes:**
- Work permit threshold appears accurate
- Tied to employer initially — correctly noted
- PR after 5 years, citizenship after 8 years — correctly noted

---

### 4. Self-Employment Visa (`hr_self_employment`)

| Field | System Value | Official Value | Status |
|-------|--------------|----------------|--------|
| Minimum Capital | €8,000 | ~€8,000 | ✅ MATCH |
| Application Fee | €80 | ~€80 | ✅ ACCEPTABLE |
| Processing Time | 30-90 days | Varies | ✅ ACCEPTABLE |
| Validity | 1 year | 1 year | ✅ MATCH |

**Notes:**
- Capital requirement appears accurate
- Business plan requirement correctly documented
- Must register with Commercial Court — correctly noted

---

### 5. Family Reunification (`hr_family_reunification`)

| Field | System Value | Official Value | Status |
|-------|--------------|----------------|--------|
| Sponsor Requirement | Valid permit | Valid residence permit | ✅ MATCH |
| Application Fee | €80 | ~€80 | ✅ ACCEPTABLE |
| Processing Time | 30-60 days | Varies | ✅ ACCEPTABLE |
| Registration | 3 days | Within 3 days | ✅ MATCH |

**Notes:**
- Sponsor eligibility correctly documented
- Spouse, children, parents eligible — correctly noted
- 90-day visa then residence permit — correctly noted

---

## Exceptions Logged

| ID | Severity | Program | Issue |
|----|----------|---------|-------|
| HR-001 | HIGH | EU Blue Card | Salary threshold €21,600 should be €24,845.64 (2025) |
| HR-002 | HIGH | Digital Nomad | Income threshold €2,300 should be €3,295/month (2025) |
| HR-003 | HIGH | Digital Nomad | Validity 1 year should be 18 months (2025 extension) |
| HR-004 | MEDIUM | EU Blue Card | Application fee should include biometric card fee (~€106 total) |
| HR-005 | LOW | Digital Nomad | Application fee €70 should be €100-150 |

---

## Scoring

| Metric | Score | Notes |
|--------|-------|-------|
| **Accuracy** | 70/100 | Multiple outdated thresholds |
| **Completeness** | 85/100 | Good coverage, missing 2025 updates |
| **Consistency** | 95/100 | Template usage consistent |
| **Overall** | **78/100** | Significant updates needed |

---

## Recommendations

1. **HIGH:** Update EU Blue Card salary threshold from €21,600 to €24,845.64 (2025)
2. **HIGH:** Update Digital Nomad income threshold from €2,300 to €3,295/month
3. **HIGH:** Update Digital Nomad validity from 1 year to 18 months
4. Update application fees to reflect 2025 values
5. Add savings option for Digital Nomad Visa (€59,310 for 18 months)

---

## Sources

- [Citizen Remote - Croatia EU Blue Card 2025](https://citizenremote.com/visas/croatia-eu-blue-card/)
- [Citizen Remote - Croatia Digital Nomad Visa 2025](https://citizenremote.com/visas/croatia-digital-nomad-visa/)
- [Croatian Ministry of Interior (MUP)](https://mup.gov.hr/aliens-281621/temporary-stay-of-digital-nomads-286853/286853)
- [Gisma University - Blue Card Regulations 2025](https://www.gisma.com/blog/blue-card-regulations-2025)

---

*Report generated by Audit Team - Immigration Policy Specialist (Southern EU)*

