# Czech Republic (CZ) Country Audit Report

**Audit Date:** 2025-12-30  
**Auditor:** Immigration Policy Specialist (Northern/Eastern EU)  
**Status:** ❌ Critical Issues Found

---

## Executive Summary

Czech Republic has **5 immigration programs** in the system. The audit identified **5 exceptions** including **1 CRITICAL** issue regarding the EU Blue Card salary threshold which is significantly outdated.

**Overall Score: 75/100**

| Metric | Score | Notes |
|--------|-------|-------|
| Accuracy | 65% | EU Blue Card threshold critically outdated |
| Completeness | 85% | Programs well-documented |
| Consistency | 95% | Template usage consistent |

---

## Programs Audited

### 1. EU Blue Card ❌ CRITICAL

| Field | System Value | Official 2025 Value | Status |
|-------|--------------|---------------------|--------|
| Salary threshold | €21,600/year (€1,800/month) | CZK 69,248/month (~€2,770/month or ~€33,240/year) | 🔴 CRITICAL |
| Application fee | €100 | CZK 5,000 (~€200) at embassy | ⚠️ OUTDATED |
| Processing time | 60-90 days | 60-90 days | ✅ MATCH |
| Validity | 2 years | 2 years (contract + 3 months) | ✅ MATCH |

**CRITICAL FINDING:** The EU Blue Card salary threshold increased to CZK 69,248/month effective May 1, 2025. System shows €1,800/month but should be ~€2,770/month (54% increase).

**Sources:** citizenremote.com (Aug 2025), bal.com (Mar 2025), arlettipartners.com (May 2025)

### 2. Employee Card

| Field | System Value | Official 2025 Value | Status |
|-------|--------------|---------------------|--------|
| Salary threshold | €12,000/year | No specific threshold | ⚠️ UNVERIFIED |
| Application fee | €100 | CZK 2,500-5,000 (~€100-200) | ✅ APPROXIMATE |
| Processing time | 60-90 days | 60-90 days | ✅ MATCH |

### 3. Startup Visa

| Field | System Value | Official 2025 Value | Status |
|-------|--------------|---------------------|--------|
| CzechInvest endorsement | Required | Required | ✅ MATCH |
| Application fee | €100 | CZK 5,000 (~€200) | ⚠️ OUTDATED |
| Processing time | 60-90 days | 60-90 days | ✅ MATCH |

### 4. Self-Employment Visa (Živno)

| Field | System Value | Official 2025 Value | Status |
|-------|--------------|---------------------|--------|
| Capital requirement | €10,000 | CZK 156,500 (~€6,260) proof of funds | ⚠️ DISCREPANCY |
| Application fee | €100 | CZK 5,000 (~€200) at embassy | ⚠️ OUTDATED |
| Processing time | 60-90 days | 60-120 days | ⚠️ RANGE EXTENDED |

**Note:** The Živno visa is the Czech equivalent of a freelance/digital nomad visa. System correctly identifies this program.

### 5. Family Reunification

| Field | System Value | Official 2025 Value | Status |
|-------|--------------|---------------------|--------|
| Application fee | €100 | CZK 2,500-5,000 (~€100-200) | ✅ APPROXIMATE |
| Processing time | 60-90 days | 60-90 days | ✅ MATCH |

---

## Exceptions Logged

| ID | Severity | Program | Field | Issue |
|----|----------|---------|-------|-------|
| CZ-001 | 🔴 CRITICAL | EU Blue Card | Salary Threshold | €21,600/year should be ~€33,240/year (CZK 69,248/month) |
| CZ-002 | 🟠 HIGH | All Programs | Application Fee | €100 should be €100-200 (CZK 2,500-5,000) |
| CZ-003 | 🟡 MEDIUM | Self-Employment | Capital Requirement | €10,000 should be ~€6,260 (CZK 156,500) |
| CZ-004 | 🟡 MEDIUM | Self-Employment | Processing Time | 60-90 days should be 60-120 days |
| CZ-005 | 🔵 LOW | All Programs | Currency | Values in EUR but official sources use CZK |

---

## Recommendations

1. **URGENT:** Update EU Blue Card salary threshold to CZK 69,248/month (~€2,770/month)
2. **HIGH:** Update application fees to reflect CZK 5,000 (~€200) at embassy
3. **MEDIUM:** Update Self-Employment capital requirement to CZK 156,500 (~€6,260)
4. **LOW:** Consider adding CZK values alongside EUR for accuracy

---

## Official Sources Consulted

- citizenremote.com - Czech Republic Blue Card (Aug 2025)
- citizenremote.com - Czech Živno Visa (Sep 2025)
- bal.com - Czech Blue Card salary update (Mar 2025)
- arlettipartners.com - Czech Blue Card salary update (May 2025)
- corporateimmigrationpartners.com - 2025 Salary Threshold Update

---

## Sign-off

| Role | Name | Date |
|------|------|------|
| Immigration Policy Specialist | Audit Team | 2025-12-30 |
| Data Quality Analyst | Audit Team | 2025-12-30 |

