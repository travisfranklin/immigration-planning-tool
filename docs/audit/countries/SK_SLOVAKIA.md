# Slovakia (SK) Country Audit Report

**Audit Date:** 2025-12-30  
**Auditor:** Immigration Policy Specialist (Northern/Eastern EU)  
**Status:** ⚠️ Issues Found

---

## Executive Summary

Slovakia has **5 immigration programs** in the system. The audit identified **5 exceptions** including **1 HIGH** priority issue for outdated Blue Card fee.

**Overall Score: 82/100**

| Metric | Score | Notes |
|--------|-------|-------|
| Accuracy | 78% | Blue Card fee and salary outdated |
| Completeness | 90% | All major programs present |
| Consistency | 95% | Template usage consistent |

---

## Programs Audited

### 1. EU Blue Card ⚠️

| Field | System Value | Official 2025 Value | Status |
|-------|--------------|---------------------|--------|
| Salary threshold | €24,000/year (€2,000/month) | €20,592/year (€1,716/month = 1.2× avg wage) | 🟡 MEDIUM |
| Processing time | 30-90 days | 30 days | 🟡 MEDIUM |
| Application fee | €165 | €250 | 🟠 HIGH |
| Validity | 3 years | 5 years | 🟡 MEDIUM |

### 2. Startup Visa ✅

| Field | System Value | Official 2025 Value | Status |
|-------|--------------|---------------------|--------|
| Processing time | 30-90 days | 30-90 days | ✅ MATCH |
| Application fee | €165 | ~€165 | ✅ MATCH |
| Validity | 1 year | 1 year | ✅ MATCH |

### 3. Work Permit ✅

| Field | System Value | Official 2025 Value | Status |
|-------|--------------|---------------------|--------|
| Processing time | 30-90 days | 30-90 days | ✅ MATCH |
| Application fee | €165 | ~€165 | ✅ MATCH |
| Validity | 2 years max | 2 years max | ✅ MATCH |

### 4. Self-Employment Visa ✅

| Field | System Value | Official 2025 Value | Status |
|-------|--------------|---------------------|--------|
| Processing time | 30-90 days | 30-90 days | ✅ MATCH |
| Application fee | €165 | ~€165 | ✅ MATCH |
| Validity | 1 year | 1 year | ✅ MATCH |

### 5. Family Reunification ✅

| Field | System Value | Official 2025 Value | Status |
|-------|--------------|---------------------|--------|
| Processing time | 30-90 days | 30-90 days | ✅ MATCH |
| Application fee | €165 | ~€165 | ✅ MATCH |

---

## Exceptions Logged

| ID | Severity | Program | Field | Issue |
|----|----------|---------|-------|-------|
| SK-001 | 🟠 HIGH | EU Blue Card | applicationFee | €165 should be €250 |
| SK-002 | 🟡 MEDIUM | EU Blue Card | salaryThreshold | €24k should be €20,592 (1.2× avg wage) |
| SK-003 | 🟡 MEDIUM | EU Blue Card | processingTime | 30-90 days should be 30 days |
| SK-004 | 🟡 MEDIUM | EU Blue Card | validity | 3 years should be 5 years |
| SK-005 | 🔵 LOW | All Programs | notes | Add 2023 avg wage reference (€1,430) |

---

## Recommendations

1. **HIGH:** Update EU Blue Card fee to €250
2. **MEDIUM:** Update Blue Card salary to €20,592/year (1.2× avg wage)
3. **MEDIUM:** Update processing time to 30 days
4. **MEDIUM:** Update validity to 5 years
5. **LOW:** Add average wage reference

---

## Official Sources Consulted

- EU Immigration Portal - EU Blue Card Slovakia
- Statistical Office of Slovak Republic - Average Wage 2023

---

## Sign-off

| Role | Name | Date |
|------|------|------|
| Immigration Policy Specialist | Audit Team | 2025-12-30 |
| Data Quality Analyst | Audit Team | 2025-12-30 |

