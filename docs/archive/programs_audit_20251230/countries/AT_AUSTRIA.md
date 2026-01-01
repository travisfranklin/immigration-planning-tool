# Austria (AT) - Country Audit Report

**Audit Date:** 2025-12-30  
**Auditor:** Immigration Policy Specialist (Western EU)  
**Status:** ✅ COMPLETE  
**Overall Score:** 92/100

---

## Executive Summary

Austria's immigration program data has been verified against official government sources (migration.gv.at). The data is largely accurate with minor discrepancies in fee structures and some missing details. Five programs were audited.

---

## Programs Audited

### 1. EU Blue Card (`at_eu_blue_card`)

| Field | System Value | Official Value | Status |
|-------|--------------|----------------|--------|
| Salary Threshold | €51,500 | €51,500 (2025) | ✅ MATCH |
| Application Fee | €180 | €156 (app) + €26 (grant) + €20 (personalization) = €202 | ⚠️ DISCREPANCY |
| Processing Time | 8 weeks | Not specified (max 6 months by law) | ✅ ACCEPTABLE |
| Validity | 2 years | 24 months | ✅ MATCH |
| PR Eligibility | 33 months (21 with B1 German) | 21 months employment in 24 months | ⚠️ NEEDS CLARIFICATION |
| Registration Authority | MA35 | MA35 (Vienna) / Landeshauptmann (other regions) | ✅ ACCEPTABLE |

**Notes:**
- Salary threshold correctly updated for 2025
- Fee structure in system is simplified (€180) vs actual breakdown (€202 total)
- PR eligibility note could be more precise

---

### 2. Red-White-Red Card (`at_red_white_red`)

| Field | System Value | Official Value | Status |
|-------|--------------|----------------|--------|
| Points Minimum | 70 | 70 (Very Highly Qualified) | ✅ MATCH |
| Salary Threshold | €38,700 | Varies by category | ⚠️ NEEDS CONTEXT |
| Application Fee | €180 | €156 + €26 + €20 = €202 | ⚠️ DISCREPANCY |
| Processing Time | 8 weeks | AMS review within 3 weeks + residence authority | ✅ ACCEPTABLE |
| Validity | 2 years | 24 months | ✅ MATCH |
| Categories Listed | 3 | 3 (Very Highly Qualified, Shortage, Other Key Workers) | ✅ MATCH |

**Notes:**
- Points system correctly documented
- Salary threshold varies by category; €38,700 is for "Other Key Workers"
- Categories accurately described

---

### 3. Startup Visa (`at_startup`)

| Field | System Value | Official Value | Status |
|-------|--------------|----------------|--------|
| Minimum Capital | €50,000 | €30,000 (with 50% equity) + €50,000 bonus points | ⚠️ DISCREPANCY |
| Points Minimum | Not specified | 50 points | ❌ MISSING |
| Application Fee | €180 | €120 + €20 + €20 = €160 | ⚠️ DISCREPANCY |
| Processing Time | 8-12 weeks | AMS 3 weeks + residence authority | ✅ ACCEPTABLE |
| Validity | 2 years | 24 months | ✅ MATCH |

**Notes:**
- **CRITICAL:** System shows €50,000 as minimum funding, but official requirement is €30,000 minimum capital with 50% equity. The €50,000 is for BONUS POINTS (additional investment capital)
- Missing points-based eligibility system (50 points minimum required)
- Fee structure differs from official

---

### 4. Self-Employment Visa (`at_self_employed`)

| Field | System Value | Official Value | Status |
|-------|--------------|----------------|--------|
| Minimum Capital | €30,000 | €100,000 (investment transfer) | ❌ DISCREPANCY |
| Application Fee | €180 | €120 + €20 + €20 = €160 | ⚠️ DISCREPANCY |
| Processing Time | 8-12 weeks | AMS 3 weeks + residence authority | ✅ ACCEPTABLE |
| Validity | 2 years | 24 months | ✅ MATCH |
| Points System | None mentioned | No points system (correct) | ✅ MATCH |

**Notes:**
- **CRITICAL:** System shows €30,000 capital requirement, but official "Self-employed Key Workers" requires €100,000 minimum investment transfer OR job creation/know-how transfer
- The €30,000 figure appears to be confused with Startup Visa requirements
- Macroeconomic benefit requirement correctly mentioned

---

### 5. Family Reunification (`at_family_reunification`)

| Field | System Value | Official Value | Status |
|-------|--------------|----------------|--------|
| Application Fee | €180 | €80 (app) + €20 (grant) + €20 (personalization) = €120 | ⚠️ DISCREPANCY |
| Processing Time | 8-12 weeks | Max 6 months by law | ✅ ACCEPTABLE |
| Income Requirement | "Above minimum threshold" | €1,273.99 single / €2,009.85 couple + €196.57/child (2025) | ⚠️ MISSING SPECIFICS |
| Language Requirement | Not specified | German A1 required | ❌ MISSING |
| Spouse Age Requirement | Not specified | 21 years minimum | ❌ MISSING |

**Notes:**
- Missing German A1 language requirement for family members
- Missing specific income thresholds (2025 rates)
- Missing spouse/partner age requirement (21+)
- Fee structure differs significantly

---

## Exceptions Logged

| ID | Severity | Program | Issue |
|----|----------|---------|-------|
| AT-001 | MEDIUM | All Programs | Fee structures simplified/incorrect |
| AT-002 | HIGH | Startup Visa | Capital requirement incorrect (€50k vs €30k) |
| AT-003 | HIGH | Self-Employment | Capital requirement incorrect (€30k vs €100k) |
| AT-004 | MEDIUM | Startup Visa | Missing points system (50 points minimum) |
| AT-005 | MEDIUM | Family Reunification | Missing German A1 requirement |
| AT-006 | LOW | Family Reunification | Missing specific income thresholds |

---

## Scoring

| Metric | Score | Notes |
|--------|-------|-------|
| **Accuracy** | 85/100 | Capital requirements for Startup/Self-Employment incorrect |
| **Completeness** | 90/100 | Missing some requirements (language, points) |
| **Consistency** | 100/100 | Template usage consistent across programs |
| **Overall** | **92/100** | Good foundation, needs targeted corrections |

---

## Recommendations

1. **URGENT:** Correct Startup Visa capital requirement from €50,000 to €30,000 (with 50% equity)
2. **URGENT:** Correct Self-Employment Visa capital requirement from €30,000 to €100,000
3. Add points system details to Startup Visa (50 points minimum)
4. Add German A1 language requirement to Family Reunification
5. Update fee structures to reflect actual breakdown or add note about total costs
6. Add 2025 income thresholds to Family Reunification (€1,273.99 single, €2,009.85 couple)
7. Add spouse age requirement (21+) to Family Reunification

---

## Sources

- [migration.gv.at - EU Blue Card](https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/eu-blue-card/)
- [migration.gv.at - Start-up Founders](https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/start-up-founders/)
- [migration.gv.at - Self-employed Key Workers](https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/self-employed-key-workers/)
- [migration.gv.at - Family Reunification](https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/family-reunification/)
- [migration.gv.at - Very Highly Qualified Workers](https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/very-highly-qualified-workers/)

---

*Report generated by Audit Team - Immigration Policy Specialist (Western EU)*

