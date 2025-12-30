# Exception Log

**Last Updated:** 2025-12-30
**Audit Phase:** Data Collection & Verification

---

## Summary

| Severity | Count |
|----------|-------|
| 🔴 Critical | 4 |
| 🟠 High | 21 |
| 🟡 Medium | 23 |
| 🔵 Low | 21 |
| **Total** | **69** |

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

