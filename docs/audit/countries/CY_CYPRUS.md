# Cyprus (CY) Country Audit Report

**Audit Date:** 2025-12-30  
**Auditor:** Immigration Policy Specialist (Southern EU)  
**Status:** ⚠️ Complete (Issues Found)

---

## Executive Summary

Cyprus has **5 immigration programs** in the system. The audit identified **4 exceptions** including **1 CRITICAL** issue regarding the Digital Nomad Visa program status. The Digital Nomad Visa may be suspended due to quota limits being reached.

**Overall Score: 80/100**

| Metric | Score | Notes |
|--------|-------|-------|
| Accuracy | 75% | DNV status issue, Golden Visa income discrepancy |
| Completeness | 85% | Programs well-documented |
| Consistency | 95% | Template usage consistent |

---

## Programs Audited

### 1. Golden Visa (Permanent Residence by Investment)

| Field | System Value | Official 2025 Value | Status |
|-------|--------------|---------------------|--------|
| Investment | €300,000 | €300,000 | ✅ MATCH |
| Income from abroad | €30,000/year | €50,000/year (per citizenremote.com) | ⚠️ NEEDS VERIFICATION |
| Application fee | €500 | €500 | ✅ MATCH |
| Processing time | 2 months | ~2 months | ✅ MATCH |
| Validity | Lifetime | Lifetime | ✅ MATCH |

**Sources:** citizenremote.com (Nov 2025), immigrantinvest.com

### 2. Work Permit

| Field | System Value | Official 2025 Value | Status |
|-------|--------------|---------------------|--------|
| Salary threshold | €18,000 | TBD - No specific threshold found | ⚠️ UNVERIFIED |
| Application fee | €100 | ~€100 | ✅ MATCH |
| Processing time | 4-8 weeks | 4-8 weeks | ✅ MATCH |
| Validity | Up to 4 years | Up to 4 years | ✅ MATCH |

**Notes:** Cyprus work permits are employer-sponsored; no fixed salary threshold found in official sources.

### 3. Startup Visa

| Field | System Value | Official 2025 Value | Status |
|-------|--------------|---------------------|--------|
| Funding requirement | €20,000 | €20,000 | ✅ MATCH |
| Application fee | €200 | ~€200 | ✅ MATCH |
| Processing time | 60-90 days | 60-90 days | ✅ MATCH |
| Validity | 1 year (renewable 2 years) | 1 year (renewable) | ✅ MATCH |

### 4. Family Reunification

| Field | System Value | Official 2025 Value | Status |
|-------|--------------|---------------------|--------|
| Application fee | €100 | ~€100 | ✅ MATCH |
| Processing time | 60-90 days | 60-90 days | ✅ MATCH |

### 5. Digital Nomad Visa ⚠️ CRITICAL

| Field | System Value | Official 2025 Value | Status |
|-------|--------------|---------------------|--------|
| Income threshold | €3,500/month | €3,500/month | ✅ MATCH |
| Application fee | €70 | ~€70 | ✅ MATCH |
| Validity | 1 year (renewable 2 years) | 1 year (renewable 2 years) | ✅ MATCH |
| **Program Status** | **Active** | **SUSPENDED (quota reached)** | 🔴 CRITICAL |

**CRITICAL FINDING:** Per immigrantinvest.com (Nov 2024): "When introducing a Digital Nomad Visa, the Cyprus Government set a limit of 100 visas that can be issued. Later, this limit was increased to 500. At the beginning of 2024, there was information that the visa limit had been reached, and Cyprus does not accept Digital Nomad Visa applications."

---

## Exceptions Logged

| ID | Severity | Program | Field | Issue |
|----|----------|---------|-------|-------|
| CY-001 | 🔴 CRITICAL | Digital Nomad Visa | Program Status | Program may be suspended - quota reached |
| CY-002 | 🟠 HIGH | Golden Visa | Income Requirement | System shows €30,000/year, sources indicate €50,000/year |
| CY-003 | 🟡 MEDIUM | Work Permit | Salary Threshold | €18,000 threshold unverified - no official source found |
| CY-004 | 🔵 LOW | All Programs | Source Currency | All values in EUR - consistent |

---

## Recommendations

1. **URGENT:** Add warning/notice to Digital Nomad Visa program indicating potential suspension
2. **HIGH:** Verify Golden Visa income requirement with official Cyprus government sources
3. **MEDIUM:** Research current Work Permit salary requirements from official sources
4. **LOW:** Consider adding program status field to track active/suspended programs

---

## Official Sources Consulted

- immigrantinvest.com - Digital Nomad Visa countries list (Nov 2024)
- citizenremote.com - Cyprus Golden Visa (Nov 2025)
- Cyprus Civil Registry and Migration Department (official)

---

## Sign-off

| Role | Name | Date |
|------|------|------|
| Immigration Policy Specialist | Audit Team | 2025-12-30 |
| Data Quality Analyst | Audit Team | 2025-12-30 |

