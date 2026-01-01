# Exception Log

**Last Updated:** 2025-12-30
**Audit Phase:** Phase 5 - Legal Review ✅ COMPLETE

---

## Summary

| Severity | Count |
|----------|-------|
| 🔴 Critical | 7 |
| 🟠 High | 44 |
| 🟡 Medium | 47 |
| 🔵 Low | 51 |
| **Total** | **149** |

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

#### [BG-001] EU Blue Card Salary Threshold Critically Outdated
- **Country:** BG
- **Program:** EU Blue Card (`bg_eu_blue_card`)
- **Severity:** 🔴 Critical
- **Field:** salaryThreshold
- **Current Value:** €18,000/year
- **Expected Value:** €9,933/year (2025) — reduced from €21,132 in 2024
- **Source:** https://www.gisma.com/blog/blue-card-regulations-2025-these-are-the-different-salary-requirements-for-skilled-migrant-workers-in-eu-countries
- **Recommendation:** Update to €9,933 — Bulgaria now has the LOWEST Blue Card threshold in the EU (113% reduction)
- **Date Found:** 2025-12-30

#### [BG-002] Self-Employment Capital Requirement Unverified
- **Country:** BG
- **Program:** Self-Employment Visa (`bg_self_employment`)
- **Severity:** 🔵 Low
- **Field:** capital
- **Current Value:** €30,000
- **Expected Value:** Not officially specified; €30,000 is reasonable estimate
- **Source:** Bulgarian Ministry of Foreign Affairs
- **Recommendation:** Verify against official Bulgarian government source or add disclaimer
- **Date Found:** 2025-12-30

#### [BG-003] Family Reunification Missing Specific Income Thresholds
- **Country:** BG
- **Program:** Family Reunification (`bg_family_reunification`)
- **Severity:** 🔵 Low
- **Field:** incomeThreshold
- **Current Value:** "Above minimum threshold"
- **Expected Value:** Specific income thresholds by family size
- **Source:** Bulgarian Ministry of Foreign Affairs
- **Recommendation:** Add specific income thresholds for different family compositions
- **Date Found:** 2025-12-30

### Croatia (HR)

#### [HR-001] EU Blue Card Salary Threshold Outdated
- **Country:** HR
- **Program:** EU Blue Card (`hr_eu_blue_card`)
- **Severity:** 🟠 High
- **Field:** salaryThreshold
- **Current Value:** €21,600/year (€1,800/month)
- **Expected Value:** €24,845.64/year (~€2,070.47/month) — 2025 threshold
- **Source:** https://citizenremote.com/visas/croatia-eu-blue-card/
- **Recommendation:** Update to €24,845.64/year — Croatia increased threshold by 17% for 2025
- **Date Found:** 2025-12-30

#### [HR-002] Digital Nomad Visa Income Threshold Outdated
- **Country:** HR
- **Program:** Digital Nomad Visa (`hr_digital_nomad`)
- **Severity:** 🟠 High
- **Field:** incomeThreshold
- **Current Value:** €2,300/month
- **Expected Value:** €3,295/month (2025)
- **Source:** https://citizenremote.com/visas/croatia-digital-nomad-visa/
- **Recommendation:** Update income threshold to €3,295/month
- **Date Found:** 2025-12-30

#### [HR-003] Digital Nomad Visa Duration Extended
- **Country:** HR
- **Program:** Digital Nomad Visa (`hr_digital_nomad`)
- **Severity:** 🟠 High
- **Field:** validity
- **Current Value:** 1 year
- **Expected Value:** 18 months (extended in 2025)
- **Source:** https://citizenremote.com/visas/croatia-digital-nomad-visa/
- **Recommendation:** Update validity to 18 months and add savings option (€59,310)
- **Date Found:** 2025-12-30

#### [HR-004] EU Blue Card Fee Structure Incomplete
- **Country:** HR
- **Program:** EU Blue Card (`hr_eu_blue_card`)
- **Severity:** 🟡 Medium
- **Field:** applicationFee
- **Current Value:** €80
- **Expected Value:** €74.32 (application) + €31.85 (biometric card) = ~€106 total
- **Source:** https://citizenremote.com/visas/croatia-eu-blue-card/
- **Recommendation:** Update fee to include biometric card cost
- **Date Found:** 2025-12-30

#### [HR-005] Digital Nomad Visa Fee Outdated
- **Country:** HR
- **Program:** Digital Nomad Visa (`hr_digital_nomad`)
- **Severity:** 🔵 Low
- **Field:** applicationFee
- **Current Value:** €70
- **Expected Value:** €100-150
- **Source:** https://citizenremote.com/visas/croatia-digital-nomad-visa/
- **Recommendation:** Update fee to €100-150 range
- **Date Found:** 2025-12-30

### Cyprus (CY)

#### [CY-001] Digital Nomad Visa Program Potentially Suspended
- **Country:** CY
- **Program:** Digital Nomad Visa (`cy_digital_nomad`)
- **Severity:** 🔴 Critical
- **Field:** Program Status
- **Current Value:** Active (implied)
- **Expected Value:** SUSPENDED - Quota of 500 visas reached in early 2024
- **Source:** https://immigrantinvest.com/blog/digital-nomad-visa-countries-en/
- **Recommendation:** Add warning/notice to program indicating potential suspension; verify current status with Cyprus Civil Registry
- **Date Found:** 2025-12-30

#### [CY-002] Golden Visa Income Requirement Discrepancy
- **Country:** CY
- **Program:** Golden Visa (`cy_golden_visa`)
- **Severity:** 🟠 High
- **Field:** Income from abroad requirement
- **Current Value:** €30,000/year (in notes)
- **Expected Value:** €50,000/year (per citizenremote.com Nov 2025)
- **Source:** https://citizenremote.com/visas/cyprus-golden-visa/
- **Recommendation:** Verify income requirement with official Cyprus government sources; update if confirmed
- **Date Found:** 2025-12-30

#### [CY-003] Work Permit Salary Threshold Unverified
- **Country:** CY
- **Program:** Work Permit (`cy_work_permit`)
- **Severity:** 🟡 Medium
- **Field:** salaryThreshold
- **Current Value:** €18,000/year
- **Expected Value:** No specific threshold found in official sources
- **Source:** Cyprus Civil Registry and Migration Department
- **Recommendation:** Verify threshold or add note that Cyprus work permits are employer-sponsored without fixed salary threshold
- **Date Found:** 2025-12-30

#### [CY-004] All Programs Currency Consistency
- **Country:** CY
- **Program:** All Programs
- **Severity:** 🔵 Low
- **Field:** Currency
- **Current Value:** EUR
- **Expected Value:** EUR
- **Source:** N/A
- **Recommendation:** No action needed - consistent EUR usage
- **Date Found:** 2025-12-30

### Czech Republic (CZ)

#### [CZ-001] EU Blue Card Salary Threshold Critically Outdated
- **Country:** CZ
- **Program:** EU Blue Card (`cz_eu_blue_card`)
- **Severity:** 🔴 Critical
- **Field:** salaryThreshold
- **Current Value:** €21,600/year (€1,800/month)
- **Expected Value:** CZK 69,248/month (~€2,770/month or ~€33,240/year) — effective May 1, 2025
- **Source:** https://citizenremote.com/visas/czech-republic-blue-card/, bal.com, arlettipartners.com
- **Recommendation:** Update salary threshold to CZK 69,248/month (~€2,770/month) — 54% increase from system value
- **Date Found:** 2025-12-30

#### [CZ-002] Application Fees Outdated Across All Programs
- **Country:** CZ
- **Program:** All Programs
- **Severity:** 🟠 High
- **Field:** applicationFee
- **Current Value:** €100 (all programs)
- **Expected Value:** CZK 5,000 (~€200) at embassy, CZK 2,500 (~€100) at Ministry of Interior
- **Source:** https://citizenremote.com/visas/czech-republic-blue-card/
- **Recommendation:** Update fees to reflect embassy vs. in-country application differences
- **Date Found:** 2025-12-30

#### [CZ-003] Self-Employment Capital Requirement Discrepancy
- **Country:** CZ
- **Program:** Self-Employment Visa (`cz_self_employment`)
- **Severity:** 🟡 Medium
- **Field:** capital
- **Current Value:** €10,000
- **Expected Value:** CZK 156,500 (~€6,260) proof of funds required
- **Source:** https://citizenremote.com/visas/czech-republic-freelance-visa/
- **Recommendation:** Update capital requirement to CZK 156,500 (~€6,260)
- **Date Found:** 2025-12-30

#### [CZ-004] Self-Employment Processing Time Range Extended
- **Country:** CZ
- **Program:** Self-Employment Visa (`cz_self_employment`)
- **Severity:** 🟡 Medium
- **Field:** processingTime
- **Current Value:** 60-90 days
- **Expected Value:** 60-120 days
- **Source:** https://citizenremote.com/visas/czech-republic-freelance-visa/
- **Recommendation:** Update processing time to 60-120 days
- **Date Found:** 2025-12-30

#### [CZ-005] Currency Consistency Issue
- **Country:** CZ
- **Program:** All Programs
- **Severity:** 🔵 Low
- **Field:** Currency
- **Current Value:** EUR
- **Expected Value:** CZK (Czech Koruna) — official sources use CZK
- **Source:** Czech Ministry of Interior
- **Recommendation:** Consider adding CZK values alongside EUR for accuracy
- **Date Found:** 2025-12-30

### Denmark (DK)

#### [DK-001] Salary Thresholds Outdated (2025 Update)
- **Country:** DK
- **Program:** Fast-Track, Pay Limit, EU Blue Card
- **Severity:** 🟠 High
- **Field:** salaryThreshold
- **Current Value:** DKK 465,000/year (€62,400)
- **Expected Value:** DKK 514,000/year (~€68,900) — effective January 1, 2025
- **Source:** https://kpmg.com/dk/en/insights/mobility/danish-immigration-updates-new-fees-and-requirements.html
- **Recommendation:** Update salary thresholds to DKK 514,000/year for all affected programs
- **Date Found:** 2025-12-30

#### [DK-002] Application Fees Outdated (2025 Update)
- **Country:** DK
- **Program:** All Programs (Main Applicant)
- **Severity:** 🟠 High
- **Field:** applicationFee
- **Current Value:** €490
- **Expected Value:** DKK 6,055 (~€810) — effective January 1, 2025
- **Source:** https://kpmg.com/dk/en/insights/mobility/danish-immigration-updates-new-fees-and-requirements.html
- **Recommendation:** Update application fee to DKK 6,055 (~€810) for main applicants
- **Date Found:** 2025-12-30

#### [DK-003] Family Reunification Fee Incorrect
- **Country:** DK
- **Program:** Family Reunification (`dk_family_reunification`)
- **Severity:** 🟡 Medium
- **Field:** applicationFee
- **Current Value:** €490
- **Expected Value:** DKK 2,380 (~€320) per family member — effective January 1, 2025
- **Source:** https://kpmg.com/dk/en/insights/mobility/danish-immigration-updates-new-fees-and-requirements.html
- **Recommendation:** Update family reunification fee to DKK 2,380 (~€320) per family member
- **Date Found:** 2025-12-30

#### [DK-004] Mermaid Diagrams Show Outdated Salary
- **Country:** DK
- **Program:** Fast-Track, Pay Limit, EU Blue Card
- **Severity:** 🟡 Medium
- **Field:** mermaidDiagram
- **Current Value:** Shows DKK 465,000/year
- **Expected Value:** Should show DKK 514,000/year
- **Source:** KPMG Denmark (Jan 2025)
- **Recommendation:** Update Mermaid diagrams to reflect new salary thresholds
- **Date Found:** 2025-12-30

#### [DK-005] Currency Display Inconsistency
- **Country:** DK
- **Program:** All Programs
- **Severity:** 🔵 Low
- **Field:** Currency
- **Current Value:** EUR (€62,400)
- **Expected Value:** DKK (official sources use Danish Kroner)
- **Source:** Danish Immigration Authorities (nyidanmark.dk)
- **Recommendation:** Consider adding DKK values alongside EUR for accuracy
- **Date Found:** 2025-12-30

### Estonia (EE)

#### [EE-001] Digital Nomad Visa Income Threshold Outdated
- **Country:** EE
- **Program:** Digital Nomad Visa (`ee_digital_nomad`)
- **Severity:** 🟠 High
- **Field:** incomeThreshold
- **Current Value:** €3,500/month
- **Expected Value:** €4,500/month (2025 update)
- **Source:** https://www.jobbatical.com/blog/estonia-digital-nomad-visa-guide-remote-work
- **Recommendation:** Update income threshold to €4,500/month
- **Date Found:** 2025-12-30

#### [EE-002] EU Blue Card Salary Threshold Outdated
- **Country:** EE
- **Program:** EU Blue Card (`ee_eu_blue_card`)
- **Severity:** 🟠 High
- **Field:** salaryThreshold
- **Current Value:** €24,000/year (€2,000/month)
- **Expected Value:** €30,336/year (€2,528/month) — 1.5x average gross salary
- **Source:** https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-estonia_en
- **Recommendation:** Update salary threshold to €30,336/year (€2,528/month)
- **Date Found:** 2025-12-30

#### [EE-003] EU Blue Card Application Fee Incorrect
- **Country:** EE
- **Program:** EU Blue Card (`ee_eu_blue_card`)
- **Severity:** 🟡 Medium
- **Field:** applicationFee
- **Current Value:** €160
- **Expected Value:** €125
- **Source:** EU Immigration Portal (Apr 2025)
- **Recommendation:** Update application fee to €125
- **Date Found:** 2025-12-30

#### [EE-004] EU Blue Card Validity Period Incorrect
- **Country:** EE
- **Program:** EU Blue Card (`ee_eu_blue_card`)
- **Severity:** 🔵 Low
- **Field:** validity
- **Current Value:** 2 years
- **Expected Value:** 27 months (standard period in Estonia)
- **Source:** EU Immigration Portal (Apr 2025)
- **Recommendation:** Update validity to 27 months
- **Date Found:** 2025-12-30

### Finland (FI)

#### [FI-001] Specialist Permit Salary Threshold Outdated
- **Country:** FI
- **Program:** Specialist Permit (`fi_specialist`)
- **Severity:** 🟠 High
- **Field:** salaryThreshold
- **Current Value:** €36,000/year (€3,000/month)
- **Expected Value:** €45,924/year (€3,827/month) — 2025 threshold
- **Source:** KPMG Flash Alert 2025-009 (Jan 2025), Migri.fi
- **Recommendation:** Update salary threshold to €45,924/year (€3,827/month)
- **Date Found:** 2025-12-30

#### [FI-002] Work Permit Application Fees Outdated
- **Country:** FI
- **Program:** Specialist, EU Blue Card
- **Severity:** 🟡 Medium
- **Field:** applicationFee
- **Current Value:** €520
- **Expected Value:** €380 (electronic) / €480 (paper) — 2025 fees
- **Source:** Migri.fi Processing Fees 2025
- **Recommendation:** Update application fees to reflect 2025 electronic/paper structure
- **Date Found:** 2025-12-30

#### [FI-003] Startup Entrepreneur Permit Fee Outdated
- **Country:** FI
- **Program:** Startup Entrepreneur Permit (`fi_startup`)
- **Severity:** 🟡 Medium
- **Field:** applicationFee
- **Current Value:** €520
- **Expected Value:** €450 (electronic) / €580 (paper) — 2025 fees
- **Source:** Migri.fi Processing Fees 2025
- **Recommendation:** Update startup permit fee to €450 (electronic) / €580 (paper)
- **Date Found:** 2025-12-30

#### [FI-004] Family Reunification Income Requirement Outdated
- **Country:** FI
- **Program:** Family Reunification (`fi_family_reunification`)
- **Severity:** 🟡 Medium
- **Field:** incomeThreshold
- **Current Value:** €1,400/month
- **Expected Value:** €1,600/month — new 2025 minimum (effective Jan 1, 2025)
- **Source:** KPMG Flash Alert 2025-009, Migri.fi
- **Recommendation:** Update income requirement to €1,600/month
- **Date Found:** 2025-12-30

#### [FI-005] Self-Employment Permit Fee Outdated
- **Country:** FI
- **Program:** Self-Employment Permit (`fi_self_employment`)
- **Severity:** 🔵 Low
- **Field:** applicationFee
- **Current Value:** €520
- **Expected Value:** €550 (electronic) / €700 (paper) — 2025 fees
- **Source:** Migri.fi Processing Fees 2025
- **Recommendation:** Update self-employment permit fee to €550 (electronic) / €700 (paper)
- **Date Found:** 2025-12-30

### France (FR)

#### [FR-001] Talent Passport Salary Threshold Outdated
- **Country:** FR
- **Program:** Talent Passport (`fr_talent_passport`)
- **Severity:** 🟠 High
- **Field:** salaryThreshold
- **Current Value:** €53,836/year
- **Expected Value:** €39,582/year — August 29, 2025 ministerial order (8% REDUCTION)
- **Source:** https://www.welcometofrance.com/en/update-on-salary-thresholds-for-talent-residence-permits
- **Recommendation:** Update salary threshold to €39,582/year — France REDUCED threshold to enhance attractiveness
- **Date Found:** 2025-12-30

#### [FR-002] EU Blue Card Salary Threshold Outdated
- **Country:** FR
- **Program:** EU Blue Card (implied in Talent Passport)
- **Severity:** 🟡 Medium
- **Field:** salaryThreshold
- **Current Value:** €53,836/year (implied)
- **Expected Value:** €59,373/year (1.5x €39,582) — August 29, 2025 ministerial order
- **Source:** https://www.welcometofrance.com/en/update-on-salary-thresholds-for-talent-residence-permits
- **Recommendation:** Update EU Blue Card salary threshold to €59,373/year
- **Date Found:** 2025-12-30

#### [FR-003] EU Blue Card Contract Duration Outdated
- **Country:** FR
- **Program:** EU Blue Card
- **Severity:** 🟡 Medium
- **Field:** contractDuration
- **Current Value:** 12 months minimum
- **Expected Value:** 6 months minimum (EU Blue Card Directive reform)
- **Source:** EU Blue Card Directive 2021/1883
- **Recommendation:** Update minimum contract duration to 6 months
- **Date Found:** 2025-12-30

#### [FR-004] Missing Reference to August 2025 Decree
- **Country:** FR
- **Program:** All Programs
- **Severity:** 🔵 Low
- **Field:** notes
- **Current Value:** No reference to 2025 decree
- **Expected Value:** Reference to August 29, 2025 ministerial order
- **Source:** Légifrance, Welcome to France
- **Recommendation:** Add note referencing the August 29, 2025 ministerial order for salary thresholds
- **Date Found:** 2025-12-30

### Germany (DE)

#### [DE-001] EU Blue Card General Salary Threshold Outdated
- **Country:** DE
- **Program:** EU Blue Card (`de_eu_blue_card`)
- **Severity:** 🟠 High
- **Field:** salaryThreshold
- **Current Value:** €45,300/year
- **Expected Value:** €48,300/year (2025)
- **Source:** https://www.jobbatical.com/blog/germany-latest-eu-blue-card-salaries-updated
- **Recommendation:** Update salary threshold to €48,300/year for 2025
- **Date Found:** 2025-12-30

#### [DE-002] EU Blue Card Shortage Occupation Salary Threshold Outdated
- **Country:** DE
- **Program:** EU Blue Card (`de_eu_blue_card`)
- **Severity:** 🟡 Medium
- **Field:** shortageOccupationThreshold
- **Current Value:** €41,041.80/year
- **Expected Value:** €43,759.80/year (2025)
- **Source:** https://www.germany.info/us-en/service/visa/residence-visa-922288
- **Recommendation:** Update shortage occupation threshold to €43,759.80/year
- **Date Found:** 2025-12-30

#### [DE-003] EU Blue Card Contract Duration Outdated
- **Country:** DE
- **Program:** EU Blue Card (`de_eu_blue_card`)
- **Severity:** 🟡 Medium
- **Field:** contractDuration
- **Current Value:** 12 months minimum
- **Expected Value:** 6 months minimum (EU Blue Card Directive reform)
- **Source:** https://www.jobbatical.com/blog/germany-latest-eu-blue-card-salaries-updated
- **Recommendation:** Update minimum contract duration to 6 months
- **Date Found:** 2025-12-30

#### [DE-004] Visa Fee Not Specified
- **Country:** DE
- **Program:** All Programs
- **Severity:** 🔵 Low
- **Field:** applicationFee
- **Current Value:** Not specified
- **Expected Value:** €75 visa fee
- **Source:** https://www.jobbatical.com/services/germany-skilled-worker-blue-collar-visa
- **Recommendation:** Add €75 visa fee to all program data
- **Date Found:** 2025-12-30

#### [DE-005] Chancenkarte (Opportunity Card) Missing
- **Country:** DE
- **Program:** Missing Program
- **Severity:** 🔵 Low
- **Field:** N/A
- **Current Value:** Program not in system
- **Expected Value:** Chancenkarte (Opportunity Card) launched June 2024
- **Source:** https://www.jobbatical.com/blog/germany-opportunity-card-chancenkarte
- **Recommendation:** Add Chancenkarte as new program for Germany
- **Date Found:** 2025-12-30

### Greece (GR)

#### [GR-001] Golden Visa Investment Threshold Critically Outdated
- **Country:** GR
- **Program:** Golden Visa (`gr_golden_visa`)
- **Severity:** 🔴 Critical
- **Field:** investmentThreshold
- **Current Value:** €250,000 (flat)
- **Expected Value:** Tiered: €800,000 (Athens, Thessaloniki, islands), €400,000 (other areas), €250,000 (heritage only)
- **Source:** https://harveylawcorporation.com/greek-golden-visa-new-regulations/
- **Recommendation:** Update to tiered investment system with location-based thresholds
- **Date Found:** 2025-12-30

#### [GR-002] EU Blue Card Program Missing
- **Country:** GR
- **Program:** Missing Program
- **Severity:** 🟠 High
- **Field:** N/A
- **Current Value:** Program not in system
- **Expected Value:** EU Blue Card with €31,918.83/year salary threshold
- **Source:** https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-greece_en
- **Recommendation:** Add EU Blue Card program for Greece
- **Date Found:** 2025-12-30

#### [GR-003] Digital Nomad Visa Missing Family Income Additions
- **Country:** GR
- **Program:** Digital Nomad Visa (`gr_digital_nomad`)
- **Severity:** 🟡 Medium
- **Field:** familyIncomeRequirements
- **Current Value:** €3,500/month (applicant only)
- **Expected Value:** €3,500/month + €700/spouse + €525/child
- **Source:** https://immigrantinvest.com/blog/countries-digital-nomad-visa/
- **Recommendation:** Add family member income additions to requirements
- **Date Found:** 2025-12-30

#### [GR-004] Golden Visa Missing Tier Details
- **Country:** GR
- **Program:** Golden Visa (`gr_golden_visa`)
- **Severity:** 🔵 Low
- **Field:** notes
- **Current Value:** Generic €250,000 description
- **Expected Value:** Detailed tier explanations with specific areas
- **Source:** https://getgoldenvisa.com/ultimate-guide-to-greece-golden-visa
- **Recommendation:** Add detailed tier information and area classifications
- **Date Found:** 2025-12-30

#### [GR-005] Digital Nomad Visa Missing Tax Exemption Info
- **Country:** GR
- **Program:** Digital Nomad Visa (`gr_digital_nomad`)
- **Severity:** 🔵 Low
- **Field:** notes
- **Current Value:** Basic tax note
- **Expected Value:** 7-year 50% tax reduction option for new residents
- **Source:** https://www.marlowbray.com/resource-articles/greece-2025-residency-updated-fip-digital-nomad-rules
- **Recommendation:** Add 7-year tax incentive information
- **Date Found:** 2025-12-30

### Hungary (HU)

#### [HU-001] EU Blue Card Salary Threshold Outdated
- **Country:** HU
- **Program:** EU Blue Card (`hu_eu_blue_card`)
- **Severity:** 🟠 High
- **Field:** salaryThreshold
- **Current Value:** €18,000/year (€1,500/month)
- **Expected Value:** 883,671 HUF/month (~€26,400/year or €2,200/month)
- **Source:** https://www.apply.eu/BlueCard/Hungary/
- **Recommendation:** Update salary threshold to 883,671 HUF/month (2025)
- **Date Found:** 2025-12-30

#### [HU-002] White Card Program Type Changed
- **Country:** HU
- **Program:** White Card (`hu_white_card`)
- **Severity:** 🟠 High
- **Field:** programType
- **Current Value:** Guest Worker program
- **Expected Value:** Digital Nomad visa (as of July 15, 2025)
- **Source:** https://www.oecd.org/en/publications/2025/11/international-migration-outlook-2025_355ae9fd/full-report/hungary_0717facf.html
- **Recommendation:** Rebrand as Digital Nomad Visa with updated requirements
- **Date Found:** 2025-12-30

#### [HU-003] White Card Income Requirements Increased
- **Country:** HU
- **Program:** White Card (`hu_white_card`)
- **Severity:** 🟡 Medium
- **Field:** incomeThreshold
- **Current Value:** €10,000/year
- **Expected Value:** Increased income requirements (July 2025 rules)
- **Source:** https://etias.com/articles/hungary-tightens-rules-on-guest-workers%E2%80%99-visas
- **Recommendation:** Update income thresholds per July 2025 regulations
- **Date Found:** 2025-12-30

#### [HU-004] EU Blue Card Missing HUF Currency
- **Country:** HU
- **Program:** EU Blue Card (`hu_eu_blue_card`)
- **Severity:** 🔵 Low
- **Field:** notes
- **Current Value:** EUR only
- **Expected Value:** Include HUF amounts for local context
- **Source:** https://www.oif.gov.hu/factsheets/eu-blue-card
- **Recommendation:** Add HUF currency amounts alongside EUR
- **Date Found:** 2025-12-30

#### [HU-005] Registration Authority Name Verification
- **Country:** HU
- **Program:** All Programs
- **Severity:** 🔵 Low
- **Field:** registrationAuthority
- **Current Value:** National Directorate-General for Aliens Policing
- **Expected Value:** Verify current official name
- **Source:** https://www.oif.gov.hu/
- **Recommendation:** Verify and update authority name if changed
- **Date Found:** 2025-12-30

### Ireland (IE)

#### [IE-001] General Employment Permit Salary Threshold Outdated
- **Country:** IE
- **Program:** General Employment Permit (`ie_general_employment`)
- **Severity:** 🟠 High
- **Field:** salaryThreshold
- **Current Value:** €30,000/year
- **Expected Value:** €34,000/year (effective January 2024)
- **Source:** https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/general-employment-permit/
- **Recommendation:** Update salary threshold to €34,000/year
- **Date Found:** 2025-12-30

#### [IE-002] Critical Skills Future Threshold Increase
- **Country:** IE
- **Program:** Critical Skills Employment Permit (`ie_critical_skills`)
- **Severity:** 🟡 Medium
- **Field:** notes
- **Current Value:** €44,000/year threshold
- **Expected Value:** Add note about upcoming increase to €40,904
- **Source:** https://enterprise.gov.ie/en/news-and-events/department-news/2025/december/20251202.html
- **Recommendation:** Add note about December 2025 announced threshold increase
- **Date Found:** 2025-12-30

#### [IE-003] GNIB Terminology Update
- **Country:** IE
- **Program:** All Programs
- **Severity:** 🔵 Low
- **Field:** registrationAuthority
- **Current Value:** GNIB/IRP
- **Expected Value:** IRP (Irish Residence Permit)
- **Source:** https://www.citizensinformation.ie/
- **Recommendation:** Update GNIB references to IRP
- **Date Found:** 2025-12-30

#### [IE-004] Investor Programme Status Verification
- **Country:** IE
- **Program:** Investor Programme (`ie_investor`)
- **Severity:** 🔵 Low
- **Field:** programStatus
- **Current Value:** Active
- **Expected Value:** Verify still accepting applications
- **Source:** https://www.irishimmigration.ie/
- **Recommendation:** Verify Investor Programme status
- **Date Found:** 2025-12-30

### Italy (IT)

#### [IT-001] Missing EU Blue Card Program
- **Country:** IT
- **Program:** EU Blue Card (missing)
- **Severity:** 🟠 High
- **Field:** program
- **Current Value:** Not in system
- **Expected Value:** EU Blue Card with €26,000-33,500/year threshold
- **Source:** https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-italy_en
- **Recommendation:** Add EU Blue Card program for Italy
- **Date Found:** 2025-12-30

#### [IT-002] Decreto Flussi Quota Information
- **Country:** IT
- **Program:** Highly Skilled Worker (`it_highly_skilled`)
- **Severity:** 🟡 Medium
- **Field:** notes
- **Current Value:** General quota information
- **Expected Value:** Add 2025 Decreto Flussi dates and quota numbers
- **Source:** https://www.interno.gov.it/
- **Recommendation:** Add specific 2025 quota dates and numbers
- **Date Found:** 2025-12-30

#### [IT-003] Nulla Osta Processing Times
- **Country:** IT
- **Program:** All Programs
- **Severity:** 🔵 Low
- **Field:** processingTime
- **Current Value:** Varies by program
- **Expected Value:** Clarify Nulla Osta processing times
- **Source:** https://www.esteri.it/
- **Recommendation:** Add specific Nulla Osta processing times
- **Date Found:** 2025-12-30

#### [IT-004] Digital Nomad Family Income Requirements
- **Country:** IT
- **Program:** Digital Nomad Visa (`it_digital_nomad`)
- **Severity:** 🔵 Low
- **Field:** familyIncome
- **Current Value:** €28,000/year (individual)
- **Expected Value:** Add family income requirements (spouse, children)
- **Source:** https://www.globalcitizensolutions.com/italy-digital-nomad-visa/
- **Recommendation:** Add family income thresholds
- **Date Found:** 2025-12-30

### Latvia (LV)

#### [LV-001] EU Blue Card Salary Threshold Minor Adjustment
- **Country:** LV
- **Program:** EU Blue Card (`lv_eu_blue_card`)
- **Severity:** 🔵 Low
- **Field:** salaryThreshold
- **Current Value:** €24,000/year
- **Expected Value:** €24,720/year
- **Source:** https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-latvia_en
- **Recommendation:** Update salary threshold to €24,720/year
- **Date Found:** 2025-12-30

#### [LV-002] Expedited Fee Options Missing
- **Country:** LV
- **Program:** All Programs
- **Severity:** 🔵 Low
- **Field:** applicationFee
- **Current Value:** €100
- **Expected Value:** Add expedited option (€400 for 5 days)
- **Source:** https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-latvia_en
- **Recommendation:** Add expedited processing fee options
- **Date Found:** 2025-12-30

#### [LV-003] Registration Requirement Clarification
- **Country:** LV
- **Program:** All Programs
- **Severity:** 🔵 Low
- **Field:** registrationNotes
- **Current Value:** Register within 3 days
- **Expected Value:** Clarify 3-day registration requirement
- **Source:** https://www.pmlp.gov.lv/
- **Recommendation:** Add details about 3-day registration requirement
- **Date Found:** 2025-12-30

### Lithuania (LT)

#### [LT-001] EU Blue Card Salary Threshold Formula
- **Country:** LT
- **Program:** EU Blue Card (`lt_eu_blue_card`)
- **Severity:** 🟡 Medium
- **Field:** salaryThreshold
- **Current Value:** €24,000/year
- **Expected Value:** 1.5x average gross monthly wage (~€30,000+/year)
- **Source:** https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-lithuania_en
- **Recommendation:** Update to dynamic formula based on average wage
- **Date Found:** 2025-12-30

#### [LT-002] Work Permit Reform Information
- **Country:** LT
- **Program:** Work Permit (`lt_work_permit`)
- **Severity:** 🔵 Low
- **Field:** notes
- **Current Value:** Standard information
- **Expected Value:** Add March 2025 reform details
- **Source:** https://corporateimmigrationpartners.com/lithuania-work-permit-process-simplified-with-key-reform/
- **Recommendation:** Add March 2025 work permit reform information
- **Date Found:** 2025-12-30

#### [LT-003] VFS Center Closures
- **Country:** LT
- **Program:** All Programs
- **Severity:** 🔵 Low
- **Field:** applicationNotes
- **Current Value:** No VFS information
- **Expected Value:** Note VFS center closures in UAE/India
- **Source:** https://newlandchase.com/lithuania-immigration-changes-for-2025/
- **Recommendation:** Add VFS center closure information for Indian nationals
- **Date Found:** 2025-12-30

#### [LT-004] Shortage Occupation Threshold
- **Country:** LT
- **Program:** EU Blue Card (`lt_eu_blue_card`)
- **Severity:** 🔵 Low
- **Field:** shortageOccupationThreshold
- **Current Value:** Not specified
- **Expected Value:** 1.2x average wage for shortage occupations
- **Source:** https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-lithuania_en
- **Recommendation:** Add shortage occupation threshold (1.2x average wage)
- **Date Found:** 2025-12-30

### Luxembourg (LU)

#### [LU-001] EU Blue Card Salary Threshold
- **Country:** LU
- **Program:** EU Blue Card (`lu_eu_blue_card`)
- **Severity:** 🟠 High
- **Field:** salaryThreshold
- **Current Value:** €54,000/year
- **Expected Value:** €63,408/year (Jan 2025+)
- **Source:** https://www.apply.eu/BlueCard/Luxembourg/
- **Recommendation:** Update salary threshold to €63,408/year
- **Date Found:** 2025-12-30

#### [LU-002] Highly Qualified Worker Salary Threshold
- **Country:** LU
- **Program:** Highly Qualified Worker (`lu_highly_qualified`)
- **Severity:** 🟠 High
- **Field:** salaryThreshold
- **Current Value:** €45,000/year
- **Expected Value:** ~€58,968/year
- **Source:** https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/ressortissant-tiers/hautement-qualifie/salarie-hautement-qualifie.html
- **Recommendation:** Update salary threshold to ~€58,968/year
- **Date Found:** 2025-12-30

#### [LU-003] Luxembourgish Language Notes
- **Country:** LU
- **Program:** All Programs
- **Severity:** 🔵 Low
- **Field:** notes
- **Current Value:** French/German mentioned
- **Expected Value:** Add Luxembourgish language information
- **Source:** General knowledge
- **Recommendation:** Add Luxembourgish as official language
- **Date Found:** 2025-12-30

#### [LU-004] Investor Job Creation Requirements
- **Country:** LU
- **Program:** Investor Visa (`lu_investor`)
- **Severity:** 🔵 Low
- **Field:** requirements
- **Current Value:** General job creation mentioned
- **Expected Value:** Specific job creation requirements
- **Source:** https://guichet.public.lu
- **Recommendation:** Clarify specific job creation requirements
- **Date Found:** 2025-12-30

### Malta (MT)

#### [MT-001] Missing EU Blue Card Program
- **Country:** MT
- **Program:** EU Blue Card
- **Severity:** 🟠 High
- **Field:** Program Missing
- **Current Value:** Not in system
- **Expected Value:** EU Blue Card (€34,956/year threshold, €300 fee, 90 days)
- **Source:** https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-malta_en
- **Recommendation:** Add EU Blue Card program to Malta
- **Date Found:** 2025-12-30

#### [MT-002] Highly Skilled Processing Time
- **Country:** MT
- **Program:** Highly Skilled Worker (`mt_highly_skilled`)
- **Severity:** 🔵 Low
- **Field:** processingTime
- **Current Value:** 30-60 days
- **Expected Value:** Max 90 days per official sources
- **Source:** EU Immigration Portal
- **Recommendation:** Update processing time reference
- **Date Found:** 2025-12-30

#### [MT-003] SIGMA 2025/26 Framework
- **Country:** MT
- **Program:** All Programs
- **Severity:** 🔵 Low
- **Field:** notes
- **Current Value:** No SIGMA reference
- **Expected Value:** Reference to SIGMA 2025/26 framework
- **Source:** https://identita.gov.mt/wp-content/uploads/2025/09/FAQs-Highly-Qualified-1.pdf
- **Recommendation:** Add SIGMA 2025/26 framework reference
- **Date Found:** 2025-12-30

#### [MT-004] Nomad Tax Benefits
- **Country:** MT
- **Program:** Nomad Residence Permit (`mt_nomad_residence`)
- **Severity:** 🔵 Low
- **Field:** notes
- **Current Value:** General tax note
- **Expected Value:** Clarify tax exemption on foreign earnings
- **Source:** Global Citizen Solutions
- **Recommendation:** Clarify nomad tax benefits
- **Date Found:** 2025-12-30

#### [MT-005] MPRP Donation Requirement
- **Country:** MT
- **Program:** MPRP (`mt_mprp`)
- **Severity:** 🔵 Low
- **Field:** requirements
- **Current Value:** €2,000 donation mentioned
- **Expected Value:** Confirm €2,000 donation to NGO
- **Source:** Official MPRP guidelines
- **Recommendation:** Verify donation requirement
- **Date Found:** 2025-12-30

### Netherlands (NL)

#### [NL-001] Highly Skilled Migrant Salary (30+)
- **Country:** NL
- **Program:** Highly Skilled Migrant (`nl_highly_skilled`)
- **Severity:** 🟠 High
- **Field:** salaryThreshold (30+)
- **Current Value:** €60,360/year
- **Expected Value:** €68,256/year (€5,688/month)
- **Source:** https://ind.nl/en/required-amounts-income-requirements
- **Recommendation:** Update salary threshold for 30+ to €68,256/year
- **Date Found:** 2025-12-30

#### [NL-002] Highly Skilled Migrant Salary (<30)
- **Country:** NL
- **Program:** Highly Skilled Migrant (`nl_highly_skilled`)
- **Severity:** 🟠 High
- **Field:** salaryThreshold (<30)
- **Current Value:** €44,208/year
- **Expected Value:** €49,680/year (€4,140/month)
- **Source:** https://ind.nl/en/required-amounts-income-requirements
- **Recommendation:** Update salary threshold for <30 to €49,680/year
- **Date Found:** 2025-12-30

#### [NL-003] Missing EU Blue Card Program
- **Country:** NL
- **Program:** EU Blue Card
- **Severity:** 🟠 High
- **Field:** Program Missing
- **Current Value:** Not in system
- **Expected Value:** EU Blue Card (€68,256/year, reduced €54,612/year)
- **Source:** https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-netherlands_en
- **Recommendation:** Add EU Blue Card program to Netherlands
- **Date Found:** 2025-12-30

#### [NL-004] IND Fee Schedule Reference
- **Country:** NL
- **Program:** All Programs
- **Severity:** 🔵 Low
- **Field:** fees
- **Current Value:** General fee information
- **Expected Value:** Reference 2025 IND fee schedule
- **Source:** https://ind.nl/en/news/fees-and-required-amounts-for-2025-known
- **Recommendation:** Add reference to 2025 IND fee schedule
- **Date Found:** 2025-12-30

#### [NL-005] Orientation Year Age Limit
- **Country:** NL
- **Program:** Orientation Year (`nl_orientation_year`)
- **Severity:** 🔵 Low
- **Field:** ageRequirement
- **Current Value:** Under 30
- **Expected Value:** Clarify age limit requirements
- **Source:** IND guidelines
- **Recommendation:** Clarify orientation year age requirements
- **Date Found:** 2025-12-30

### Poland (PL)

#### [PL-001] EU Blue Card Salary Threshold
- **Country:** PL
- **Program:** EU Blue Card (`pl_eu_blue_card`)
- **Severity:** 🟠 High
- **Field:** salaryThreshold
- **Current Value:** PLN 96,000/year (PLN 8,000/month)
- **Expected Value:** PLN 114,231/year (PLN 9,519.23/month)
- **Source:** https://crido.pl/en/blog-taxes/the-minimum-salary-threshold-for-blue-card-applicants-in-poland-in-2025-increases/
- **Recommendation:** Update Blue Card salary to PLN 114,231/year
- **Date Found:** 2025-12-30

#### [PL-002] Application Fee Increase
- **Country:** PL
- **Program:** All Programs
- **Severity:** 🟠 High
- **Field:** applicationFee
- **Current Value:** PLN 440
- **Expected Value:** Fees quadrupled per Dec 2025 update
- **Source:** https://www.visahq.com/news/2025-12-03/pl/work-permit-fees-quadruple-as-poland-harmonises-documentary-check-lists/
- **Recommendation:** Update application fees per Dec 2025 schedule
- **Date Found:** 2025-12-30

#### [PL-003] Work Permit Salary Clarification
- **Country:** PL
- **Program:** Work Permit (`pl_work_permit`)
- **Severity:** 🟡 Medium
- **Field:** salaryThreshold
- **Current Value:** PLN 36,000/year
- **Expected Value:** Market rate (no fixed minimum)
- **Source:** EU Immigration Portal
- **Recommendation:** Clarify work permit salary requirements
- **Date Found:** 2025-12-30

#### [PL-004] Business Harbour Program Status
- **Country:** PL
- **Program:** Business Harbour (`pl_business_harbour`)
- **Severity:** 🔵 Low
- **Field:** notes
- **Current Value:** General description
- **Expected Value:** Add program status note
- **Source:** Official Polish government sources
- **Recommendation:** Add Business Harbour program status note
- **Date Found:** 2025-12-30

#### [PL-005] Voivodeship Processing Variations
- **Country:** PL
- **Program:** All Programs
- **Severity:** 🔵 Low
- **Field:** processingTime
- **Current Value:** General processing times
- **Expected Value:** Add Voivodeship-specific variations
- **Source:** Official Polish government sources
- **Recommendation:** Add Voivodeship processing time variations
- **Date Found:** 2025-12-30

### Portugal (PT)

#### [PT-001] Missing EU Blue Card Program
- **Country:** PT
- **Program:** EU Blue Card
- **Severity:** 🟠 High
- **Field:** Program Missing
- **Current Value:** Not in system
- **Expected Value:** EU Blue Card (€21,030/year threshold)
- **Source:** https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-portugal_en
- **Recommendation:** Add EU Blue Card program to Portugal
- **Date Found:** 2025-12-30

#### [PT-002] Missing Digital Nomad (D8) Visa
- **Country:** PT
- **Program:** Digital Nomad Visa (D8)
- **Severity:** 🟠 High
- **Field:** Program Missing
- **Current Value:** Not in system
- **Expected Value:** D8 visa (€3,480/month income, €36,480 savings)
- **Source:** https://getgoldenvisa.com/portugal-digital-nomad-visa
- **Recommendation:** Add Digital Nomad D8 visa to Portugal
- **Date Found:** 2025-12-30

#### [PT-003] Golden Visa Real Estate Restrictions
- **Country:** PT
- **Program:** Golden Visa (`pt_golden_visa`)
- **Severity:** 🟡 Medium
- **Field:** notes
- **Current Value:** General real estate options
- **Expected Value:** Add Lisbon/Porto real estate restrictions
- **Source:** Official Portuguese government sources
- **Recommendation:** Add Golden Visa real estate restrictions
- **Date Found:** 2025-12-30

#### [PT-004] SEF to AIMA Reference
- **Country:** PT
- **Program:** All Programs
- **Severity:** 🔵 Low
- **Field:** registrationAuthority
- **Current Value:** SEF (Immigration Service)
- **Expected Value:** AIMA (new agency name)
- **Source:** Official Portuguese government sources
- **Recommendation:** Update SEF references to AIMA
- **Date Found:** 2025-12-30

#### [PT-005] NHR Tax Regime Changes
- **Country:** PT
- **Program:** D7 Visa (`pt_d7_visa`)
- **Severity:** 🔵 Low
- **Field:** notes
- **Current Value:** NHR tax regime may apply
- **Expected Value:** Add NHR tax regime changes/end date
- **Source:** Official Portuguese government sources
- **Recommendation:** Add NHR tax regime changes
- **Date Found:** 2025-12-30

### Romania (RO)

#### [RO-001] EU Blue Card Salary Threshold
- **Country:** RO
- **Program:** EU Blue Card (`ro_eu_blue_card`)
- **Severity:** 🟠 High
- **Field:** salaryThreshold
- **Current Value:** RON 120,000/year (RON 10,000/month)
- **Expected Value:** RON 162,936/year (RON 13,578/month or €2,743)
- **Source:** https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-romania_en
- **Recommendation:** Update Blue Card salary to RON 162,936/year
- **Date Found:** 2025-12-30

#### [RO-002] Missing Digital Nomad Visa
- **Country:** RO
- **Program:** Digital Nomad Visa
- **Severity:** 🟠 High
- **Field:** Program Missing
- **Current Value:** Not in system
- **Expected Value:** Digital Nomad visa (€3,800/month income)
- **Source:** https://nomadsembassy.com/romania-digital-nomad-visa/
- **Recommendation:** Add Digital Nomad visa to Romania
- **Date Found:** 2025-12-30

#### [RO-003] Work Permit Salary Clarification
- **Country:** RO
- **Program:** Work Permit (`ro_work_permit`)
- **Severity:** 🟡 Medium
- **Field:** salaryThreshold
- **Current Value:** RON 36,000/year
- **Expected Value:** Clarify minimum wage reference
- **Source:** Official Romanian government sources
- **Recommendation:** Clarify work permit salary requirements
- **Date Found:** 2025-12-30

#### [RO-004] 2025 Minimum Wage Reference
- **Country:** RO
- **Program:** All Programs
- **Severity:** 🔵 Low
- **Field:** notes
- **Current Value:** General salary notes
- **Expected Value:** Add 2025 minimum wage (RON 4,050)
- **Source:** https://corporateimmigrationpartners.com/romania-minimum-salary-increases-for-2025/
- **Recommendation:** Add 2025 minimum wage reference
- **Date Found:** 2025-12-30

#### [RO-005] Schengen Accession Note
- **Country:** RO
- **Program:** All Programs
- **Severity:** 🔵 Low
- **Field:** notes
- **Current Value:** No Schengen note
- **Expected Value:** Add Schengen accession note
- **Source:** Official EU sources
- **Recommendation:** Add Schengen accession note
- **Date Found:** 2025-12-30

### Slovakia (SK)

#### [SK-001] EU Blue Card Application Fee
- **Country:** SK
- **Program:** EU Blue Card (`sk_eu_blue_card`)
- **Severity:** 🟠 High
- **Field:** applicationFee
- **Current Value:** €165
- **Expected Value:** €250
- **Source:** EU Immigration Portal - Slovakia
- **Recommendation:** Update Blue Card fee to €250
- **Date Found:** 2025-12-30

#### [SK-002] EU Blue Card Salary Threshold
- **Country:** SK
- **Program:** EU Blue Card (`sk_eu_blue_card`)
- **Severity:** 🟡 Medium
- **Field:** salaryThreshold
- **Current Value:** €24,000/year (€2,000/month)
- **Expected Value:** €20,592/year (€1,716/month = 1.2× avg wage)
- **Source:** EU Immigration Portal - Slovakia
- **Recommendation:** Update salary to 1.2× average wage
- **Date Found:** 2025-12-30

#### [SK-003] EU Blue Card Processing Time
- **Country:** SK
- **Program:** EU Blue Card (`sk_eu_blue_card`)
- **Severity:** 🟡 Medium
- **Field:** processingTime
- **Current Value:** 30-90 days
- **Expected Value:** 30 days
- **Source:** EU Immigration Portal - Slovakia
- **Recommendation:** Update processing time to 30 days
- **Date Found:** 2025-12-30

#### [SK-004] EU Blue Card Validity Period
- **Country:** SK
- **Program:** EU Blue Card (`sk_eu_blue_card`)
- **Severity:** 🟡 Medium
- **Field:** validity
- **Current Value:** 3 years
- **Expected Value:** 5 years
- **Source:** EU Immigration Portal - Slovakia
- **Recommendation:** Update validity to 5 years
- **Date Found:** 2025-12-30

#### [SK-005] Average Wage Reference
- **Country:** SK
- **Program:** All Programs
- **Severity:** 🔵 Low
- **Field:** notes
- **Current Value:** General notes
- **Expected Value:** Add 2023 avg wage reference (€1,430)
- **Source:** Statistical Office of Slovak Republic
- **Recommendation:** Add average wage reference
- **Date Found:** 2025-12-30

### Slovenia (SI)

#### [SI-001] Digital Nomad Visa Missing
- **Country:** SI
- **Program:** Digital Nomad Visa
- **Severity:** 🟠 High
- **Field:** Missing program
- **Current Value:** Not in system
- **Expected Value:** Digital Nomad visa launched November 21, 2025 (12-month permit)
- **Source:** GOV.SI, Euronews
- **Recommendation:** Add Digital Nomad visa program
- **Date Found:** 2025-12-30

#### [SI-002] EU Blue Card Salary Threshold Clarification
- **Country:** SI
- **Program:** EU Blue Card (`si_eu_blue_card`)
- **Severity:** 🟡 Medium
- **Field:** salaryThreshold
- **Current Value:** €30,000/year (€2,500/month)
- **Expected Value:** 1.5× average gross annual salary (formula-based)
- **Source:** EU Immigration Portal - Slovenia
- **Recommendation:** Clarify salary is 1.5× avg gross annual salary
- **Date Found:** 2025-12-30

#### [SI-003] EU Blue Card In-Country Fee Option
- **Country:** SI
- **Program:** EU Blue Card (`si_eu_blue_card`)
- **Severity:** 🔵 Low
- **Field:** applicationFee
- **Current Value:** €102
- **Expected Value:** €102 (abroad) / €70 (in-country)
- **Source:** EU Immigration Portal - Slovenia
- **Recommendation:** Add note about in-country fee option
- **Date Found:** 2025-12-30

#### [SI-004] AJPES Registration Reference
- **Country:** SI
- **Program:** All Programs
- **Severity:** 🔵 Low
- **Field:** notes
- **Current Value:** General notes
- **Expected Value:** Add AJPES business registration reference
- **Source:** GOV.SI
- **Recommendation:** Add AJPES registration reference
- **Date Found:** 2025-12-30

### Spain (ES)

#### [ES-001] Golden Visa Program Abolished
- **Country:** ES
- **Program:** Golden Visa (`es_golden_visa`)
- **Severity:** 🔴 Critical
- **Field:** status
- **Current Value:** Active program in system
- **Expected Value:** Program abolished April 3, 2025
- **Source:** Spanish Government, GetGoldenVisa.com
- **Recommendation:** Remove or mark as discontinued
- **Date Found:** 2025-12-30

#### [ES-002] EU Blue Card Missing
- **Country:** ES
- **Program:** EU Blue Card
- **Severity:** 🔴 Critical
- **Field:** Missing program
- **Current Value:** Not in system
- **Expected Value:** EU Blue Card available (€38,844 salary, €73.26 fee, 3 years, 20 days)
- **Source:** EU Immigration Portal - Spain
- **Recommendation:** Add EU Blue Card program
- **Date Found:** 2025-12-30

#### [ES-003] Highly Qualified Salary Threshold Outdated
- **Country:** ES
- **Program:** Highly Qualified Professional (`es_highly_qualified`)
- **Severity:** 🟠 High
- **Field:** salaryThreshold
- **Current Value:** €30,000
- **Expected Value:** ~€40,077 (2025 Blue Card threshold)
- **Source:** Jobbatical - Spain EU Blue Card Guide
- **Recommendation:** Update salary threshold to 2025 value
- **Date Found:** 2025-12-30

#### [ES-004] EU Blue Card Reduced Threshold
- **Country:** ES
- **Program:** EU Blue Card
- **Severity:** 🟡 Medium
- **Field:** notes
- **Current Value:** N/A
- **Expected Value:** Add 0.8× reduced threshold for young workers (<3 years since graduation)
- **Source:** EU Immigration Portal - Spain
- **Recommendation:** Add reduced threshold note
- **Date Found:** 2025-12-30

#### [ES-005] Golden Visa Discontinuation Notice
- **Country:** ES
- **Program:** Golden Visa (`es_golden_visa`)
- **Severity:** 🟡 Medium
- **Field:** notes
- **Current Value:** Active program notes
- **Expected Value:** Add discontinuation notice with effective date
- **Source:** Spanish Government
- **Recommendation:** Add discontinuation notice
- **Date Found:** 2025-12-30

#### [ES-006] NIE/TIE Registration Reference
- **Country:** ES
- **Program:** All Programs
- **Severity:** 🔵 Low
- **Field:** notes
- **Current Value:** General notes
- **Expected Value:** Add NIE/TIE registration reference
- **Source:** Spanish Immigration Portal
- **Recommendation:** Add NIE/TIE reference
- **Date Found:** 2025-12-30

#### [ES-007] Beckham Law Tax Benefit Reference
- **Country:** ES
- **Program:** Digital Nomad Visa (`es_digital_nomad`)
- **Severity:** 🔵 Low
- **Field:** notes
- **Current Value:** Mentions Beckham Law
- **Expected Value:** Expand Beckham Law tax benefit details
- **Source:** Spanish Tax Authority
- **Recommendation:** Add Beckham Law details
- **Date Found:** 2025-12-30

### Sweden (SE)

#### [SE-001] EU Blue Card Salary Threshold Update Needed
- **Country:** SE
- **Program:** EU Blue Card (`se_eu_blue_card`)
- **Severity:** 🟡 Medium
- **Field:** salaryThreshold
- **Current Value:** SEK 54,000/month (SEK 648,000/year)
- **Expected Value:** 1.25× average gross salary (~SEK 55,650/month for 2023, updated July 2025)
- **Source:** https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-sweden_en
- **Recommendation:** Update to 1.25× formula (lowered from 1.5× in July 2025)
- **Date Found:** 2025-12-30

#### [SE-002] EU Blue Card Missing 4-Year PR Pathway Note
- **Country:** SE
- **Program:** EU Blue Card (`se_eu_blue_card`)
- **Severity:** 🟡 Medium
- **Field:** notes
- **Current Value:** No PR pathway mentioned
- **Expected Value:** After 4 years, applicant may apply for permanent residence
- **Source:** EU Immigration Portal - Sweden
- **Recommendation:** Add 4-year permanent residence pathway note
- **Date Found:** 2025-12-30

#### [SE-003] Missing Personnummer Registration Reference
- **Country:** SE
- **Program:** All Programs
- **Severity:** 🔵 Low
- **Field:** notes
- **Current Value:** No personnummer reference
- **Expected Value:** Reference to Swedish personal identity number (personnummer) registration
- **Source:** Swedish Tax Agency (Skatteverket)
- **Recommendation:** Add personnummer registration reference
- **Date Found:** 2025-12-30

#### [SE-004] Work Permit Missing Collective Agreement Requirement
- **Country:** SE
- **Program:** Work Permit (`se_work_permit`)
- **Severity:** 🔵 Low
- **Field:** notes
- **Current Value:** No collective agreement mentioned
- **Expected Value:** Employment terms must be at least equal to Swedish collective agreements
- **Source:** Swedish Migration Agency (Migrationsverket)
- **Recommendation:** Add collective agreement requirement note
- **Date Found:** 2025-12-30

#### [SE-005] EU Blue Card Missing 24-Month Employer Lock Note
- **Country:** SE
- **Program:** EU Blue Card (`se_eu_blue_card`)
- **Severity:** 🔵 Low
- **Field:** notes
- **Current Value:** No employer lock mentioned
- **Expected Value:** First 24 months: EU Blue Card valid only for employer and occupation specified
- **Source:** EU Immigration Portal - Sweden
- **Recommendation:** Add 24-month employer lock note
- **Date Found:** 2025-12-30

---

## Technical Review Exceptions

### [TECH-001] Flowchart Node-Step ID Mismatch (131 Programs)

- **Severity:** 🔴 Critical
- **Component:** Flowchart Definitions
- **Current Value:** 131 flowcharts have Mermaid node IDs that don't match step definitions
- **Expected Value:** All Mermaid node IDs should have corresponding step definitions
- **Impact:** Broken click handlers, missing step details, inconsistent UX
- **Recommendation:** Update Mermaid diagrams to use existing step IDs (submit→submit-application, register→registration)
- **Date Found:** 2025-12-30

### [TECH-002] PascalCase Node IDs (7 Countries)

- **Severity:** 🟠 High
- **Component:** Flowchart Mermaid Diagrams
- **Countries Affected:** AT, BE, LU, SE, DK, FI, IE
- **Current Value:** Node IDs use PascalCase (Visa, Register, Permit, Category)
- **Expected Value:** All node IDs should use kebab-case (visa, register, permit, category)
- **Recommendation:** Convert all PascalCase node IDs to kebab-case
- **Date Found:** 2025-12-30

### [TECH-003] ScoreDisplay Color Constant Mismatch (5 Tests)

- **Severity:** 🟠 High
- **Component:** ScoreDisplay Component Tests
- **Current Value:** Tests expect `text-primary`, `text-success`, `text-warning`
- **Expected Value:** Component uses `text-success-dark`, `text-primary-dark`, `text-warning-dark`
- **Recommendation:** Update test expectations to match current color scheme
- **Date Found:** 2025-12-30

### [TECH-004] Program Matcher Timeline Calculation

- **Severity:** 🟡 Medium
- **Component:** Program Matcher Service Tests
- **Test:** `should calculate alignsWithTimeline correctly`
- **Current Value:** Test expects `true`, receives `false`
- **Expected Value:** Timeline calculation should match test expectations
- **Recommendation:** Review timeline calculation logic and update test or implementation
- **Date Found:** 2025-12-30

---

## Content Exceptions (Phase 4)

### [CONTENT-001] Visa/Permit Terminology Inconsistency

- **Severity:** 🟠 High
- **Scope:** All 27 countries (135 programs)
- **Current Value:** Terms "visa," "permit," "card," and "residence permit" used interchangeably
- **Expected Value:** Consistent terminology with clear distinction
- **Recommendation:** Standardize: "Visa" = entry document, "Permit/Card" = residence document
- **Date Found:** 2025-12-30

### [CONTENT-002] Registration Authority Naming Inconsistency

- **Severity:** 🟡 Medium
- **Scope:** AT, IE, PT, DE (and others)
- **Current Value:** Inconsistent authority references (e.g., "MA35" vs "Immigration Authority")
- **Expected Value:** Format: "Full Name (Abbreviation)" on first mention
- **Recommendation:** Standardize all authority names
- **Date Found:** 2025-12-30

### [CONTENT-003] Salary Threshold Format Variations

- **Severity:** 🟡 Medium
- **Scope:** All countries with salary requirements
- **Current Value:** Mix of annual, monthly, with/without decimals
- **Expected Value:** Consistent format: "EUR X per year (EUR Y/month)"
- **Recommendation:** Normalize all salary displays
- **Date Found:** 2025-12-30

### [CONTENT-004] Immigration Terms Used Without Definitions

- **Severity:** 🟡 Medium
- **Scope:** All programs
- **Count:** 18 terms (Apostille, NIE, NIF, BSN, KVK, CPAM, etc.)
- **Recommendation:** Create glossary or add in-line definitions
- **Date Found:** 2025-12-30

### [CONTENT-005] Abbreviations Without Full Form

- **Severity:** 🔵 Low
- **Scope:** All programs
- **Examples:** PR, IRP, FBI, CV
- **Recommendation:** Expand all abbreviations on first use
- **Date Found:** 2025-12-30

### [CONTENT-006] Vague Timeline References

- **Severity:** 🟡 Medium
- **Scope:** Multiple programs
- **Current Value:** "Start early!", "Book well in advance", "ASAP"
- **Expected Value:** Specific timeframes (e.g., "8 weeks before travel")
- **Recommendation:** Replace vague terms with specific durations
- **Date Found:** 2025-12-30

### [CONTENT-007] Conditional Steps Without Clear Triggers

- **Severity:** 🟡 Medium
- **Programs:** FR Talent Passport, AT RWR Card, ES Golden Visa
- **Current Value:** Options listed but no guidance on selection
- **Expected Value:** Clear criteria for each path
- **Recommendation:** Add decision guidance for conditional steps
- **Date Found:** 2025-12-30

### [CONTENT-008] Missing Appeal/Rejection Guidance

- **Severity:** 🟠 High
- **Scope:** 24 of 27 countries
- **Current Value:** "Process Ended" with minimal guidance
- **Expected Value:** Appeal timeline, required documents, common reasons
- **Recommendation:** Expand rejection handling in all programs
- **Date Found:** 2025-12-30

### [CONTENT-009] Missing Cost Totals

- **Severity:** 🟡 Medium
- **Scope:** All programs
- **Current Value:** Only application fee listed
- **Expected Value:** Total cost estimate including translation, apostille, travel
- **Recommendation:** Add estimated total costs per program
- **Date Found:** 2025-12-30

---

## Legal Exceptions (Phase 5)

### [LEGAL-001] Disclaimer Not Visible on Result Pages

- **Severity:** 🟠 High
- **Pages Affected:** Results.tsx, ResultDetail.tsx, AllFlowcharts.tsx
- **Current Value:** Disclaimer only on Home page
- **Expected Value:** Disclaimer visible on all pages displaying immigration advice
- **Recommendation:** Add persistent footer disclaimer to Layout component
- **Date Found:** 2025-12-30

### [LEGAL-002] Shared Results Lack Disclaimer

- **Severity:** 🟠 High
- **Feature:** Shareable URL results (?results= parameter)
- **Current Value:** Recipients see immigration data with no disclaimer
- **Expected Value:** Shared views should include disclaimer notice
- **Recommendation:** Append disclaimer to shared result views
- **Date Found:** 2025-12-30

### [LEGAL-003] Unsubstantiated Success Rate Percentages

- **Severity:** 🟠 High
- **Scope:** All 135 programs
- **Current Value:** Success rates (60%-95%) displayed without citation
- **Expected Value:** Cited sources or methodology disclosure
- **Recommendation:** Either cite official sources or remove success rate claims
- **Date Found:** 2025-12-30

### [LEGAL-004] Directive Language in Step Instructions

- **Severity:** 🟡 Medium
- **Files:** spain.ts, portugal.ts, italy.ts
- **Current Value:** "Use Spanish lawyer for purchase"
- **Expected Value:** "Consider using a Spanish lawyer for property transactions"
- **Recommendation:** Reframe directive statements as suggestions
- **Date Found:** 2025-12-30

### [LEGAL-005] Definitive Eligibility Language

- **Severity:** 🟡 Medium
- **Scope:** All flowchart decision nodes
- **Current Value:** "Not Eligible" / "Eligible"
- **Expected Value:** "May not meet requirements" / "May meet basic requirements"
- **Recommendation:** Add qualifier to eligibility determinations
- **Date Found:** 2025-12-30

### [LEGAL-006] Privacy Notice Placement

- **Severity:** 🟡 Medium
- **Pages Affected:** Profile.tsx, Results.tsx
- **Current Value:** No privacy notice on data collection pages
- **Expected Value:** Brief privacy statement on pages handling personal data
- **Recommendation:** Add privacy notice to Profile and Results pages
- **Date Found:** 2025-12-30

### [LEGAL-007] No Terms of Service

- **Severity:** 🟡 Medium
- **Scope:** Application-wide
- **Current Value:** No formal Terms of Service document
- **Expected Value:** ToS page linked from footer/Settings
- **Recommendation:** Create formal Terms of Service page
- **Date Found:** 2025-12-30

### [LEGAL-008] Viability Score Terminology

- **Severity:** 🟡 Medium
- **Scope:** Application-wide
- **Current Value:** "Viability score" may imply professional assessment
- **Expected Value:** Clarify scores are for informational purposes only
- **Recommendation:** Add disclaimer near score display
- **Date Found:** 2025-12-30

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
