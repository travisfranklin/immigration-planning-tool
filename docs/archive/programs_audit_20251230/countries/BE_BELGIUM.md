# Belgium (BE) - Country Audit Report

**Audit Date:** 2025-12-30  
**Auditor:** Immigration Policy Specialist (Western EU)  
**Status:** ✅ COMPLETE  
**Overall Score:** 88/100

---

## Executive Summary

Belgium's immigration program data has been verified against official government sources and industry publications. The data is largely accurate with some outdated salary thresholds for 2025 and regional variations that need clarification. Five programs were audited.

---

## Programs Audited

### 1. EU Blue Card (`be_eu_blue_card`)

| Field | System Value | Official Value (2025) | Status |
|-------|--------------|----------------------|--------|
| Brussels Threshold | €66,377 | €66,738 | ⚠️ OUTDATED |
| Flanders Threshold | €61,011 | €63,586 | ⚠️ OUTDATED |
| Wallonia Threshold | €56,112 | €66,738 | ⚠️ OUTDATED |
| Application Fee | €200 | Varies by region | ✅ ACCEPTABLE |
| Processing Time | 4-8 weeks | Varies | ✅ ACCEPTABLE |
| Validity | 13 months | 13 months | ✅ MATCH |
| Registration | Local Commune | Local Commune | ✅ MATCH |

**Notes:**
- All regional salary thresholds need updating to 2025 values
- Brussels and Wallonia now share same threshold (€66,738)
- Flanders uses different calculation (130% of average = €63,586)
- Junior Blue Card (<3 years experience) threshold: €53,390 (not mentioned in system)

---

### 2. Highly Skilled Worker - Single Permit (`be_highly_skilled`)

| Field | System Value | Official Value (2025) | Status |
|-------|--------------|----------------------|--------|
| Salary Threshold | €51,613 | €51,613 (Wallonia) / €48,912 (Flanders) | ⚠️ NEEDS REGIONAL CONTEXT |
| Junior Threshold | Not specified | €41,290 (Wallonia) / €39,129.60 (Flanders) | ❌ MISSING |
| Processing Time | 3-6 weeks | Varies | ✅ ACCEPTABLE |
| Validity | Duration of contract (max 3 years) | Correct | ✅ MATCH |

**Notes:**
- Salary threshold varies significantly by region
- Missing junior (under 30) reduced threshold
- Flanders uses 100% of average (€48,912) vs Wallonia (€51,613)

---

### 3. Professional Card - Self-Employment (`be_professional_card`)

| Field | System Value | Official Value | Status |
|-------|--------------|----------------|--------|
| Minimum Capital | €18,600 | Not specified (3 months living expenses) | ⚠️ NEEDS CLARIFICATION |
| Application Fee | €140 | €140 (application) + €90/year (validity) | ⚠️ INCOMPLETE |
| Processing Time | 8-12 weeks | Not specified | ✅ ACCEPTABLE |
| Validity | 5 years | 5 years maximum (usually 2 years initially) | ⚠️ NEEDS CLARIFICATION |

**Notes:**
- Capital requirement is not officially specified; €18,600 appears reasonable
- Fee structure should note annual validity fee (€90/year)
- Initial card typically granted for 2 years on probationary basis
- Must demonstrate economic usefulness to Brussels region

---

### 4. Startup Visa (`be_startup`)

| Field | System Value | Official Value | Status |
|-------|--------------|----------------|--------|
| Minimum Funding | €25,000 | Not officially specified | ⚠️ UNVERIFIED |
| Accelerator Requirement | Required | Required | ✅ MATCH |
| Application Fee | €200 | Varies | ✅ ACCEPTABLE |
| Validity | 1 year | 1 year | ✅ MATCH |

**Notes:**
- Belgium's startup visa program is less formalized than other countries
- Accelerator/incubator requirement correctly documented
- Funding requirement may vary; €25,000 is reasonable estimate

---

### 5. Family Reunification (`be_family_reunification`)

| Field | System Value | Official Value (2025) | Status |
|-------|--------------|----------------------|--------|
| Income Threshold | "Above minimum" | €5,000 gross/month (new 2025 rule) | ❌ MISSING SPECIFICS |
| Processing Time | 6-9 months | Varies | ✅ ACCEPTABLE |
| Application Fee | €200 | Varies | ✅ ACCEPTABLE |
| Fast-track Threshold | €5,000+/month | €5,000 gross/month | ✅ MATCH |

**Notes:**
- **CRITICAL:** New 2025 family reunification rules introduced stricter income requirements
- Minimum gross monthly income of €5,000 now required (effective August 2025)
- System mentions fast-track for €5,000+ earners but doesn't specify this is now the standard requirement
- Registration within 8 days correctly documented

---

## Exceptions Logged

| ID | Severity | Program | Issue |
|----|----------|---------|-------|
| BE-001 | HIGH | EU Blue Card | All regional salary thresholds outdated for 2025 |
| BE-002 | MEDIUM | Highly Skilled | Missing junior (under 30) reduced thresholds |
| BE-003 | MEDIUM | Highly Skilled | Regional threshold differences not clearly explained |
| BE-004 | LOW | Professional Card | Missing annual validity fee (€90/year) |
| BE-005 | HIGH | Family Reunification | Missing new 2025 income requirement (€5,000 gross/month) |

---

## Scoring

| Metric | Score | Notes |
|--------|-------|-------|
| **Accuracy** | 82/100 | Salary thresholds outdated; new 2025 rules not reflected |
| **Completeness** | 88/100 | Missing junior thresholds and regional variations |
| **Consistency** | 95/100 | Template usage consistent; regional complexity handled reasonably |
| **Overall** | **88/100** | Good foundation, needs 2025 threshold updates |

---

## Recommendations

1. **URGENT:** Update EU Blue Card salary thresholds to 2025 values (Brussels/Wallonia: €66,738, Flanders: €63,586)
2. **URGENT:** Update Family Reunification with new €5,000 gross/month income requirement
3. Add junior (under 30) salary thresholds for Blue Card and Highly Skilled permits
4. Clarify regional differences more explicitly in notes
5. Add annual validity fee (€90/year) to Professional Card
6. Note that Professional Card is initially granted for 2 years on probationary basis

---

## Sources

- [KPMG Flash Alert 2024-223 - Belgium 2025 Salary Thresholds](https://kpmg.com/xx/en/our-insights/gms-flash-alert/flash-alert-2024-223.html)
- [Expat Management Group - 2025 Immigration Salary Thresholds](https://www.expatmanagementgroup.com/insights/new-2025-immigration-salary-thresholds-in-wallonia-flanders)
- [Brussels Region - Professional Card](https://be.brussels/en/employment/job-brussels/employment-conditions/professional-card-non-european-nationals)
- [KPMG Flash Alert 2025-115 - Family Reunification Changes](https://assets.kpmg.com/content/dam/kpmgsites/xx/pdf/2025/06/fa25-115.pdf)

---

*Report generated by Audit Team - Immigration Policy Specialist (Western EU)*

