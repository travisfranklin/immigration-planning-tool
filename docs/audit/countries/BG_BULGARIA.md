# Bulgaria (BG) - Country Audit Report

**Audit Date:** 2025-12-30  
**Auditor:** Immigration Policy Specialist (Eastern EU)  
**Status:** ✅ COMPLETE  
**Overall Score:** 82/100

---

## Executive Summary

Bulgaria's immigration program data has been verified against official government sources and industry publications. The data contains a **critical error** in the EU Blue Card salary threshold which has been significantly reduced for 2025. Bulgaria now has the **lowest Blue Card threshold in the EU**. Five programs were audited.

---

## Programs Audited

### 1. EU Blue Card (`bg_eu_blue_card`)

| Field | System Value | Official Value (2025) | Status |
|-------|--------------|----------------------|--------|
| Salary Threshold | €18,000/year | €9,933/year | ❌ CRITICAL ERROR |
| Previous Threshold | — | €21,132 (2024) | — |
| Application Fee | €100 | ~€100 (varies) | ✅ ACCEPTABLE |
| Processing Time | 4-8 weeks | Varies | ✅ ACCEPTABLE |
| Validity | 4 years | Up to 4 years | ✅ MATCH |
| Registration | 5 days | Within 5 days | ✅ MATCH |

**Notes:**
- **CRITICAL:** Bulgaria reduced Blue Card threshold by 113% for 2025 (from €21,132 to €9,933)
- Bulgaria now has the **lowest EU Blue Card threshold in the entire EU**
- System shows €18,000 which is nearly double the actual 2025 requirement
- 10% flat tax rate correctly noted as advantage

---

### 2. Startup Visa (`bg_startup_visa`)

| Field | System Value | Official Value | Status |
|-------|--------------|----------------|--------|
| Minimum Funds | €5,000 (BGN 10,000) | ~€5,000 | ✅ MATCH |
| Accelerator Requirement | Required | Required | ✅ MATCH |
| Application Fee | €100 | ~€100 | ✅ ACCEPTABLE |
| Processing Time | 4-6 weeks | Varies | ✅ ACCEPTABLE |
| Validity | 1 year | 1 year | ✅ MATCH |

**Notes:**
- Bulgaria launched Digital Nomad/Freelancer Program in 2025
- Startup program requirements appear accurate
- Low operating costs correctly highlighted

---

### 3. Work Permit (`bg_work_permit`)

| Field | System Value | Official Value | Status |
|-------|--------------|----------------|--------|
| Salary Threshold | €9,000/year (€750/month) | ~€9,000 | ✅ MATCH |
| Labor Market Test | Required | Required | ✅ MATCH |
| Contract Duration | 12 months minimum | 12 months | ✅ MATCH |
| Application Fee | €100 | ~€100 | ✅ ACCEPTABLE |
| Processing Time | 4-8 weeks | Varies | ✅ ACCEPTABLE |

**Notes:**
- Work permit threshold appears accurate
- Labor market test requirement correctly documented
- Minimum wage in Bulgaria ~€500/month (2025)

---

### 4. Self-Employment Visa (`bg_self_employment`)

| Field | System Value | Official Value | Status |
|-------|--------------|----------------|--------|
| Minimum Capital | €30,000 | Not officially specified | ⚠️ UNVERIFIED |
| Application Fee | €100 | ~€100 | ✅ ACCEPTABLE |
| Processing Time | 6-10 weeks | Varies | ✅ ACCEPTABLE |
| Validity | 1 year | 1 year | ✅ MATCH |

**Notes:**
- Capital requirement not officially specified; €30,000 is reasonable estimate
- Must demonstrate economic benefit to Bulgaria
- BULSTAT registration required for self-employed

---

### 5. Family Reunification (`bg_family_reunification`)

| Field | System Value | Official Value | Status |
|-------|--------------|----------------|--------|
| Income Threshold | "Above minimum" | Not specified | ⚠️ NEEDS SPECIFICS |
| Application Fee | €100 | ~€100 | ✅ ACCEPTABLE |
| Processing Time | 4-8 weeks | Varies | ✅ ACCEPTABLE |
| Registration | 5 days | Within 5 days | ✅ MATCH |

**Notes:**
- Income threshold varies by family size
- Sponsor must be Bulgarian resident or citizen
- 90-day visa then apply for residence permit

---

## Exceptions Logged

| ID | Severity | Program | Issue |
|----|----------|---------|-------|
| BG-001 | CRITICAL | EU Blue Card | Salary threshold €18,000 should be €9,933 (2025) |
| BG-002 | LOW | Self-Employment | Capital requirement unverified against official source |
| BG-003 | LOW | Family Reunification | Missing specific income thresholds |

---

## Scoring

| Metric | Score | Notes |
|--------|-------|-------|
| **Accuracy** | 75/100 | Critical Blue Card threshold error |
| **Completeness** | 88/100 | Good coverage, some missing specifics |
| **Consistency** | 95/100 | Template usage consistent |
| **Overall** | **82/100** | Critical update needed for Blue Card |

---

## Recommendations

1. **CRITICAL:** Update EU Blue Card salary threshold from €18,000 to €9,933 (2025 value)
2. Add note that Bulgaria has the lowest Blue Card threshold in the EU
3. Verify self-employment capital requirement against official Bulgarian sources
4. Add specific income thresholds for family reunification
5. Consider adding Digital Nomad Visa program (launched 2025)

---

## Sources

- [Gisma University - Blue Card Regulations 2025](https://www.gisma.com/blog/blue-card-regulations-2025-these-are-the-different-salary-requirements-for-skilled-migrant-workers-in-eu-countries)
- [European Commission Immigration Portal - Bulgaria](https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal)
- [Bulgarian Ministry of Foreign Affairs - Visa Information](https://www.mfa.bg/en/services-travel/consular-services/travel-bulgaria/visa-bulgaria)

---

*Report generated by Audit Team - Immigration Policy Specialist (Eastern EU)*

