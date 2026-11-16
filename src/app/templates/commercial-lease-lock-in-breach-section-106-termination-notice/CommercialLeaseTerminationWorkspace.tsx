"use client";

import React, { useState } from "react";

interface Annotation {
  marker: string;
  title: string;
  explanation: string;
  statuteRef: string;
}

interface TemplateVariant {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  text: string;
  annotations: Annotation[];
}

const TEMPLATES: TemplateVariant[] = [
  {
    id: "sec106-rent-cam-tds",
    title: "1. Section 106 TPA Termination & Rent/CAM/TDS Notice",
    subtitle: "Standard commercial office, retail store or warehouse lease default with 18% GST and uncredited 194-I TDS",
    badge: "Core Commercial Notice",
    annotations: [
      {
        marker: "①",
        title: "Section 106 TPA Statutory 15-Day Termination Notice Window",
        explanation:
          "Under Section 106(1) of the Transfer of Property Act, 1882, a lease of immovable property for any purpose other than agriculture or manufacturing is terminable by 15 days' written notice expiring with the end of a month of tenancy, subject to contract terms.",
        statuteRef: "Section 106(1) Transfer of Property Act, 1882",
      },
      {
        marker: "②",
        title: "Commercial Rent 18% GST (SAC 997212) Statutory Arrears",
        explanation:
          "Commercial leasing constitutes a supply of service subject to 18% GST under SAC 997212. Non-payment forces the landlord to remit tax out-of-pocket, triggering mandatory interest under Section 50 of the CGST Act, 2017.",
        statuteRef: "CGST Act, 2017 s.50 & Notification No. 11/2017-CT(R)",
      },
      {
        marker: "③",
        title: "Section 194-I Uncredited TDS & Section 205 IT Act Immunity Demand",
        explanation:
          "Where the corporate tenant deducted 10% TDS from rent but failed to deposit it to the Central Government or reflect it on Form 26AS/AIS, the landlord demands immediate tax deposit and Form 16A generation under pain of Section 276B criminal prosecution.",
        statuteRef: "Income Tax Act, 1961 s.194-I, s.205 & s.276B",
      },
      {
        marker: "④",
        title: "Common Area Maintenance (CAM), DG Power & HVAC Reconciliation",
        explanation:
          "CAM dues, diesel generator (DG) backup unit tariffs, and chilled water / HVAC charges are contractual operational liabilities. Failure to clear them entitles the landlord to suspend utilities after due notice.",
        statuteRef: "Indian Contract Act, 1872 s.73 (Breach of Ancillary Covenants)",
      },
      {
        marker: "⑤",
        title: "Security Deposit Set-Off & Final Demand Deficit",
        explanation:
          "The landlord formally accounts for the interest-free refundable security deposit, offsets liquidated rent/utility arrears, and issues a demand for the remaining deficit balance.",
        statuteRef: "Order VIII Rule 6 CPC, 1908 (Equitable Set-Off)",
      },
      {
        marker: "⑥",
        title: "Eviction Warning, Mesne Profits & Order XV-A Striking of Defense",
        explanation:
          "Notifies the corporate tenant that failure to hand over vacant, peaceful possession upon expiry of 15 days converts their status into an unauthorized trespasser liable for double market mesne profits under Order XV-A CPC.",
        statuteRef: "CPC Order XV-A (Rule 1 & 2) & TPA s.111(h)",
      },
    ],
    text: `LEGAL NOTICE OF LEASE TERMINATION UNDER SECTION 106 OF THE TRANSFER OF PROPERTY ACT, 1882 AND FORMAL DEMAND FOR RENT ARREARS, CAM CHARGES, 18% GST AND UNCREDITED SECTION 194-I TDS

DISPATCHED VIA REGISTERED POST WITH A.D., SPEED POST, AND ELECTRONIC MAIL / WHATSAPP UNDER BSA SECTION 63

Date: [DATE OF DISPATCH]
Place: [CITY, STATE]

To,
1. [NAME OF CORPORATE TENANT / PRIVATE LIMITED COMPANY]
   Through its Managing Director / Directors / Authorized Signatory
   Registered Office: [COMPLETE REGISTERED OFFICE ADDRESS]
   Corporate Office: [OFFICE SUITE / UNIT NO., TOWER, COMMERCIAL COMPLEX, CITY, PIN]
   CIN: [COMPANY IDENTIFICATION NUMBER]
   GSTIN: [TENANT GST NUMBER]
   Email: [legal@tenantcompany.com / director@tenantcompany.com]

2. [NAME OF DIRECTORS / DESIGNATED PARTNERS / GUARANTORS]
   [Director Residential Address]

UNDER INSTRUCTIONS FROM AND ON BEHALF OF MY CLIENT:
[NAME OF COMMERCIAL LANDLORD / PROPERTY HOLDING ENTITY / ASSET MANAGEMENT COMPANY]
Having its Registered Office at: [LANDLORD REGISTERED ADDRESS]
PAN: [LANDLORD PAN] | GSTIN: [LANDLORD GSTIN]
(Hereinafter referred to as "My Client" or "Lessor")

Sir / Madam,

Under instructions from and on behalf of My Client above-named, I hereby serve upon you this formal Statutory Notice under Section 106 of the Transfer of Property Act, 1882 ① and the Indian Contract Act, 1872, in respect of the Demised Premises described hereinbelow:

1. THE DEMISED PREMISES & REGISTERED LEASE AGREEMENT:
That My Client is the sole absolute and lawful owner of Commercial Unit No. [UNIT / SUITE NUMBER], measuring approximately [SUPER BUILT-UP / CARPET AREA] sq. ft., situated on the [FLOOR NO.] Floor, [BUILDING / IT PARK / MALL NAME], [ROAD / SECTOR], [CITY, STATE - PIN CODE] (hereinafter referred to as the "Demised Premises"). Vide Registered Lease Deed dated [DATE OF LEASE DEED], registered as Document No. [REGISTRATION NO.] in Book No. [BOOK NO.] at the Office of the Sub-Registrar [SUB-REGISTRAR OFFICE NAME], My Client demised the said premises unto you on lease for a period of [LEASE TENURE, E.G., 5 YEARS] commencing from [COMMENCEMENT DATE] at an agreed monthly rent of Rs. [BASE MONTHLY RENT]/- plus applicable GST @ 18% ②.

2. CHRONIC MONETARY DEFAULT & ARREARS ACCUMULATION:
That under Clause [CLAUSE NO.] of the said Lease Deed, you were contractually and statutorily obligated to pay the monthly lease rent in advance on or before the [DUE DATE, E.G., 7th] day of each English calendar month, without any deduction except statutory TDS deductible under Section 194-I of the Income Tax Act, 1961. However, you have willfully failed, neglected, and defaulted in remitting the monthly rent for the past [NUMBER OF MONTHS, E.G., 4 MONTHS], spanning from [START MONTH/YEAR] to [END MONTH/YEAR].

3. UNCREDITED SECTION 194-I TDS & SECTION 205 IT ACT VIOLATION:
That for the financial period [E.G., FY 2025-26], you deducted 10% Tax Deducted at Source (TDS) under Section 194-I amounting to Rs. [TOTAL TDS WITHHELD]/- from the gross rents payable to My Client, but failed to deposit the same into the Central Government Treasury ③. As a direct consequence, the said tax credits do not reflect in My Client's Annual Information Statement (AIS) or Form 26AS. Under Section 205 of the Income Tax Act, 1961, you are called upon to immediately deposit the withheld TDS with penal interest under Section 201(1A) and furnish statutory Form 16A certificates, failing which My Client shall initiate criminal prosecution under Section 276B of the Income Tax Act.

4. COMMON AREA MAINTENANCE (CAM), HVAC & UTILITY DEFAULTS:
That under Clause [CAM CLAUSE NO.], you undertook to pay monthly Common Area Maintenance (CAM) charges @ Rs. [CAM RATE PER SQ FT] per sq. ft. along with DG backup electricity unit consumption and HVAC chiller BTU charges ④. You are in chronic arrears of CAM and utility bills amounting to Rs. [TOTAL CAM ARREARS]/- for the period [PERIOD OF CAM DEFAULT].

5. ITEMIZED LIQUIDATED STATEMENT OF OUTSTANDING DUES:
a. Gross Unpaid Lease Rent ([NUMBER] Months @ Rs. [RENT]): Rs. [AMOUNT]
b. Commercial Rent GST @ 18% (SAC 997212) payable: Rs. [AMOUNT]
c. CAM & DG Utility Arrears (incl. applicable taxes): Rs. [AMOUNT]
d. Uncredited Section 194-I TDS Non-Deposit: Rs. [AMOUNT]
e. Contractual Delay Interest @ 18% p.a. as per Clause [CLAUSE]: Rs. [AMOUNT]
-------------------------------------------------------------------------
TOTAL GROSS CONTRACTUAL ARREARS: Rs. [TOTAL GROSS]
Less: Interest-Free Refundable Security Deposit adjusted ⑤: (-) Rs. [SECURITY DEPOSIT]
-------------------------------------------------------------------------
NET DEFICIT BALANCE PAYABLE TO MY CLIENT: Rs. [NET DEFICIT DUE]/-

6. STATUTORY DETERMINATION & TERMINATION UNDER SECTION 106 TPA:
PLEASE TAKE NOTICE that by virtue of your persistent monetary breaches and repudiatory conduct, My Client hereby DETERMINES AND TERMINATES your tenancy in respect of the Demised Premises under Section 106 of the Transfer of Property Act, 1882 ① read with Clause [TERMINATION CLAUSE] of the Lease Deed. Your lease shall stand definitively terminated upon the expiry of 15 (fifteen) clear days from the date of receipt of this notice, or at the expiry of the current calendar month of tenancy, whichever is later.

7. VACANT POSSESSION DEMAND & PENAL MESNE PROFITS:
You are hereby called upon:
i. To pay unto My Client the net deficit sum of Rs. [NET DEFICIT DUE]/- within 15 (fifteen) days from receipt hereof via RTGS/NEFT to My Client's designated bank account [ACCOUNT NO., IFSC CODE, BANK NAME];
ii. To quietly yield and deliver vacant, peaceful, unencumbered physical possession of the Demised Premises to My Client on or before [TERMINATION DATE];
iii. To remove all your movable inventory, office automation equipment, and trade fixtures without damaging the permanent structure, flooring, ceiling, or MEP services.

PLEASE TAKE FURTHER NOTICE that if you fail to deliver vacant possession on or before the said date, your occupation thereafter shall be that of an unauthorized trespasser and hold-over tenant in wrongful possession. In such event, My Client shall immediately institute an Eviction Suit and invoke Order XV-A of the Code of Civil Procedure, 1908 ⑥ to strike off your defense unless full rent arrears are deposited in Court, alongside claiming penal mesne profits @ double the market rent (i.e. Rs. [DOUBLE RENT AMOUNT]/- per month) from [TERMINATION DATE] until physical restoration of possession, at your entire cost and legal consequences.

A copy of this notice is retained in my chambers for service tracking and production before the Commercial Court / Competent Forum.

Yours faithfully,

[ADVOCATE NAME & SIGNATURE]
Advocate & Legal Counsel for Lessor
Bar Council Enrolment No.: [ENROLMENT NO.]
Chamber Address: [ADVOCATE ADDRESS, CITY, STATE]
Contact: [PHONE NUMBER] | Email: [ADVOCATE EMAIL]`,
  },
  {
    id: "lock-in-breach-capex",
    title: "2. Lock-In Period Breach & Fit-Out CapEx Amortization Notice",
    subtitle: "For early corporate tenant abandonment during lock-in period, liquidated damages s.74, and fit-out clawback",
    badge: "Lock-In & CapEx Recovery",
    annotations: [
      {
        marker: "①",
        title: "Contractual Lock-In Period Validity & Enforceability",
        explanation:
          "Commercial lock-in periods (typically 36 to 60 months) represent reciprocal commercial covenants where the landlord undertakes specialized capital investments in exchange for guaranteed tenancy duration.",
        statuteRef: "Indian Contract Act, 1872 s.73 & s.74",
      },
      {
        marker: "②",
        title: "Section 74 Indian Contract Act Liquidated Damages Standard",
        explanation:
          "Under the Supreme Court ruling in Kailash Nath Associates v. DDA (2015), stipulated damages for lock-in breach are recoverable where they represent a genuine pre-estimate of loss arising from unexpired tenure and specialized fit-out outlays.",
        statuteRef: "Kailash Nath Associates v. DDA (2015) 4 SCC 136",
      },
      {
        marker: "③",
        title: "Bespoke Fit-Out CapEx Amortization Clawback",
        explanation:
          "Where the landlord funded customized HVAC ducts, acoustic partitions, electrical cabling, and executive cabins, early termination denies the landlord the agreed amortization period, entitling recovery of unamortized CapEx.",
        statuteRef: "Indian Contract Act, 1872 s.70 & s.73",
      },
      {
        marker: "④",
        title: "Security Deposit Absolute Forfeiture Clause",
        explanation:
          "The security deposit is formally forfeited and appropriated towards unexpired lock-in rent and restoration liabilities, rather than returned.",
        statuteRef: "Transfer of Property Act s.111(g) & Contract Act s.74",
      },
      {
        marker: "⑤",
        title: "Duty to Mitigate Losses vs Unexpired Lock-In Rent",
        explanation:
          "The landlord formally puts on record its efforts to identify replacement commercial tenants while holding the defaulting tenant liable for the vacancy gap and difference in lease rent.",
        statuteRef: "Indian Contract Act, 1872 s.73 Explanation",
      },
      {
        marker: "⑥",
        title: "Commercial Arbitration Invocation Under Vidya Drolia Doctrine",
        explanation:
          "Under the landmark Supreme Court Constitution Bench ruling in Vidya Drolia (2021), landlord-tenant disputes governed by the Transfer of Property Act are fully arbitrable where special rent control acts do not apply.",
        statuteRef: "Vidya Drolia v. Durga Trading Corp. (2021) 2 SCC 1",
      },
    ],
    text: `LEGAL NOTICE DEMANDING LIQUIDATED DAMAGES FOR UNEXPIRED LOCK-IN PERIOD, UNAMORTIZED FIT-OUT CAPEX CLAWBACK, SECURITY DEPOSIT FORFEITURE AND INITIATION OF ARBITRATION

DISPATCHED VIA REGISTERED SPEED POST & EMAIL UNDER BSA SECTION 63

Date: [DATE OF DISPATCH]
Place: [CITY, STATE]

To,
[CORPORATE TENANT NAME / ENTERPRISE ENTITY]
Represented by its Board of Directors / Chief Executive Officer
Registered Address: [REGISTERED OFFICE ADDRESS]
Corporate Office: [OFFICE SUITE, BUSINESS PARK, CITY, PIN]
CIN: [COMPANY IDENTIFICATION NUMBER]

UNDER INSTRUCTIONS FROM AND ON BEHALF OF:
[COMMERCIAL DEVELOPER / LANDLORD / REIT ENTITY]
Registered Office: [LANDLORD ADDRESS]
(Hereinafter referred to as "My Client" or "Lessor")

Sir / Madam,

Under instructions from and on behalf of My Client, I hereby issue this Statutory Legal Notice demanding liquidated damages and compensation on account of your deliberate, unilateral, and premature repudiation of the Mandatory Lock-In Period under the Registered Commercial Lease Deed dated [DATE OF LEASE DEED]:

1. THE RECIPROCAL LOCK-IN COVENANT:
That vide Clause [LOCK-IN CLAUSE NO.] of the Registered Lease Deed, both parties agreed to a strict, non-cancellable Lock-In Period of [E.G., 36 MONTHS] commencing from [LOCK-IN START DATE] and expiring on [LOCK-IN END DATE] ①. It was unequivocally understood that neither party would be entitled to terminate the lease prior to the expiry of the said lock-in term, as My Client undertook massive upfront capital expenditure ("CapEx") to customize the Demised Premises to your bespoke corporate specifications.

2. REPUDIATORY BREACH & UNILATERAL ABANDONMENT:
That vide your premature communication dated [DATE OF TENANT EXIT LETTER], you intimated an illegal intention to vacate the Demised Premises on [PROPOSED EXIT DATE], after serving only [MONTHS OCCUPIED, E.G., 14 MONTHS] of the mandatory 36-month lock-in term. You have deliberately abandoned the premises, leaving [UNEXPIRED MONTHS, E.G., 22 MONTHS] of the agreed lock-in tenure completely unfulfilled.

3. GENUINE PRE-ESTIMATE OF LOSS & LIQUIDATED DAMAGES (SECTION 74 CONTRACT ACT):
That your premature abandonment constitutes a repudiatory breach under Section 39 and Section 73/74 of the Indian Contract Act, 1872 ②. Clause [PENALTY CLAUSE] explicitly provides that upon any early exit during the lock-in period, you shall remain unconditionally liable to pay the entire unexpired lease rent for the balance lock-in period as genuine pre-estimated liquidated damages:
a. Unexpired Lock-In Tenure: [NUMBER] months (from [DATE] to [DATE])
b. Agreed Monthly Rent: Rs. [MONTHLY RENT]/- per month
c. Total Unexpired Lock-In Rent: Rs. [TOTAL UNEXPIRED RENT]/-

4. CLAWBACK OF BESPOKE FIT-OUT CAPEX EXPENDITURE:
That My Client disbursed a capital outlay of Rs. [TOTAL CAPEX DISBURSED]/- towards customized high-side HVAC, modular workstation pods, high-grade server room raised flooring, and electrical transformer augmentation ③. The agreed lease rental was structured to amortize this expenditure over the full [LOCK-IN PERIOD] months. Due to your early repudiation, an unamortized CapEx loss of Rs. [UNAMORTIZED CAPEX SUM]/- directly accrues to My Client.

5. FORFEITURE OF SECURITY DEPOSIT & NET RECOVERY CLAIM:
That under Clause [DEPOSIT FORFEITURE CLAUSE], My Client hereby exercises its statutory and contractual right to forfeit your Interest-Free Refundable Security Deposit of Rs. [SECURITY DEPOSIT AMOUNT]/- in its entirety ④:
a. Unexpired Lock-In Liquidated Damages: Rs. [UNEXPIRED RENT SUM]
b. Unamortized Fit-Out CapEx Clawback: Rs. [UNAMORTIZED CAPEX]
c. Rent & CAM Arrears up to date of abandonment: Rs. [ARREARS SUM]
-------------------------------------------------------------------------
TOTAL STATUTORY & CONTRACTUAL CLAIM: Rs. [TOTAL CLAIM]
Less: Security Deposit Forfeited & Appropriated: (-) Rs. [SECURITY DEPOSIT]
-------------------------------------------------------------------------
NET OUTSTANDING BALANCE DUE TO MY CLIENT: Rs. [NET BALANCE DUE]/-

6. INVOCATION OF DISPUTE RESOLUTION & ARBITRATION (VIDYA DROLIA DOCTRINE):
In terms of the Supreme Court ruling in Vidya Drolia v. Durga Trading Corp. (2021) 2 SCC 1 ⑥, contractual landlord-tenant disputes arising under registered leases are fully arbitrable. Clause [ARBITRATION CLAUSE] provides for reference of all claims to a Sole Arbitrator.

TAKE NOTICE that you are hereby called upon to pay the net liquidated damages of Rs. [NET BALANCE DUE]/- within 21 (twenty-one) days from receipt hereof, failing which this notice shall be treated as an invocation of Arbitration under Section 21 of the Arbitration and Conciliation Act, 1996, and My Client shall move the High Court under Section 11(6) for appointment of a Sole Arbitrator, alongside seeking pre-award interim security and asset freezing under Section 9 of the Act.

Yours faithfully,

[ADVOCATE NAME & SIGNATURE]
Advocate & Legal Counsel for Lessor
Chambers: [ADDRESS, CITY]`,
  },
  {
    id: "mesne-profits-holdover",
    title: "3. Unauthorized Holdover, Double-Rent Mesne Profits & Order XV-A Notice",
    subtitle: "For tenants refusing to vacate after lease termination/expiry, claiming penal market mesne profits under CPC",
    badge: "Holdover Eviction & Trespass",
    annotations: [
      {
        marker: "①",
        title: "Determination of Lease & Status as Tenant-at-Sufferance",
        explanation:
          "Upon expiry of the contractual lease term or termination under Section 106/111(h) TPA, the tenant's right of occupation is extinguished. Continuing in possession without landlord consent constitutes tenant-at-sufferance or trespasser.",
        statuteRef: "Transfer of Property Act s.111(a) & s.111(h)",
      },
      {
        marker: "②",
        title: "Section 2(12) CPC Definition of Mesne Profits",
        explanation:
          "Mesne profits represent those profits which the person in wrongful possession actually received or might with ordinary diligence have received from the property, together with interest on such profits.",
        statuteRef: "Code of Civil Procedure, 1908 s.2(12)",
      },
      {
        marker: "③",
        title: "Contractual Hold-Over Penalty (Double / Triple Rent Clause)",
        explanation:
          "Commercial leases routinely stipulate holdover liquidated damages @ 2x or 3x the last drawn rent to deter overstay. Courts uphold reasonable holdover damages reflecting escalated prevailing market rates.",
        statuteRef: "Indian Contract Act, 1872 s.74 & CPC Order XX Rule 12",
      },
      {
        marker: "④",
        title: "Order XV-A CPC Statutory Striking Off Defense",
        explanation:
          "Order XV-A of the CPC mandates that in any suit by a lessor for eviction, the defendant tenant must deposit all admitted and accrued rent into Court. Failure to deposit results in immediate striking off the written statement.",
        statuteRef: "CPC Order XV-A (As amended in Delhi, Maharashtra & States)",
      },
      {
        marker: "⑤",
        title: "Commercial Court Commercial Division Pecuniary Jurisdiction",
        explanation:
          "Where the commercial dispute exceeds Rs. 3 Lakhs (or state pecuniary floor), the suit is instituted before the Commercial Court under the Commercial Courts Act, 2015, enforcing strict 120-day timelines for pleadings.",
        statuteRef: "Commercial Courts Act, 2015 s.2(1)(c)(vii) & s.12A",
      },
      {
        marker: "⑥",
        title: "Criminal Trespass & Wrongful Restraint Warning",
        explanation:
          "Unlawful retention of commercial property after formal termination invites penal notices under Bharatiya Nyaya Sanhita, 2023 for criminal trespass and dishonest retention.",
        statuteRef: "Bharatiya Nyaya Sanhita, 2023 s.329 & s.316",
      },
    ],
    text: `FORMAL NOTICE OF WRONGFUL HOLDOVER TENANCY, DEMAND FOR IMMEDIATE VACANT POSSESSION, PENAL MESNE PROFITS UNDER SECTION 2(12) CPC AND PRE-LITIGATION NOTICE UNDER ORDER XV-A CPC

DISPATCHED VIA REGISTERED POST WITH A.D. & OFFICIAL CORPORATE EMAIL UNDER BSA SECTION 63

Date: [DATE]
Place: [CITY, STATE]

To,
[OVERSTAYING TENANT ENTITY / OCCUPANT]
Through its Chief Operating Officer / General Counsel / Partners
Address of Occupation: [UNIT NO., COMMERCIAL COMPLEX, STREET, CITY, PIN]
Registered Office: [REGISTERED OFFICE ADDRESS]

UNDER INSTRUCTIONS FROM:
[LANDLORD / COMMERCIAL PROPERTY OWNER]
[Office Address]

Sir / Madam,

Under instructions from My Client, I hereby issue this stern, final Legal Notice regarding your illegal, contumacious, and unauthorized holdover occupation of the Demised Premises described herein:

1. EXPIRY AND DETERMINATION OF LEASE:
That your lease in respect of the Commercial Premises bearing Unit No. [UNIT NUMBER], [BUILDING NAME], measuring [AREA] sq. ft., stood formally determined and expired on [DATE OF LEASE EXPIRY / DETERMINATION] ① by efflux of time under Section 111(a) of the Transfer of Property Act, 1882 [OR vide Statutory Termination Notice dated [NOTICE DATE] under Section 106 TPA].

2. STATUS AS UNAUTHORIZED TRESPASSER & TENANT-AT-SUFFERANCE:
That notwithstanding the lawful determination of your lease, you have failed and refused to hand over vacant physical keys and possession to My Client. My Client has not assented to your continued possession, nor has My Client accepted any rent after the expiry date. Consequently, your legal status is that of a mere tenant-at-sufferance and illegal trespasser in unauthorized occupation.

3. ACCRUAL OF PENAL MESNE PROFITS UNDER SECTION 2(12) CPC:
That under Section 2(12) of the Code of Civil Procedure, 1908 read with Clause [HOLDOVER CLAUSE] of the expired Lease Deed, you are liable to pay penal holdover charges / mesne profits @ [E.G., 200% / DOUBLE THE LAST DRAWN RENT], amounting to Rs. [PENAL MONTHLY RATE]/- per day/month for each day of wrongful retention ② ③.
a. Last Drawn Contractual Monthly Rent: Rs. [LAST DRAWN RENT]/-
b. Contractual Holdover Mesne Profit Rate: Rs. [DOUBLE RENT RATE]/- per month
c. Period of Unauthorized Holdover: [NUMBER OF DAYS/MONTHS] from [DATE] to [CURRENT DATE]
d. Accrued Penal Mesne Profits: Rs. [TOTAL ACCRUED MESNE PROFITS]/-

4. IMMEDIATE DEMAND FOR VACATION & MONETARY REMITTANCE:
My Client hereby gives you a FINAL OPPORTUNITY of 7 (seven) days from the receipt of this notice:
i. To peacefully vacate, hand over the vacant keys and unencumbered physical possession of the Demised Premises;
ii. To pay unto My Client the accrued mesne profits of Rs. [TOTAL ACCRUED MESNE PROFITS]/- along with outstanding electricity, water, and CAM dues.

5. CONSEQUENCES UNDER ORDER XV-A CPC & COMMERCIAL COURTS ACT:
TAKE STRICT NOTICE that if you fail to deliver possession within the said 7 days:
a. My Client shall immediately institute an Eviction & Mesne Profits Suit before the Commercial Court under the Commercial Courts Act, 2015 ⑤;
b. My Client shall move an application under Order XV-A of the Code of Civil Procedure, 1908 ④ seeking an immediate direction compelling you to deposit all arrears of rent and mesne profits into Court at the market rate, failing which your defense shall be struck off and an ex-parte decree of eviction shall be passed forthwith;
c. My Client reserves the right to lodge a criminal complaint for Criminal Trespass and Mischief under Sections 329 and 324 of the Bharatiya Nyaya Sanhita, 2023 ⑥.

Govern yourself accordingly.

Yours faithfully,

[ADVOCATE NAME & SIGNATURE]
Advocate for Lessor / Landlord`,
  },
  {
    id: "coworking-seat-license",
    title: "4. Co-Working & Managed Office Enterprise Seat Default Notice",
    subtitle: "For B2B enterprise desk defaults, license fee arrears, lock-in seat clawback and access deactivation",
    badge: "Co-Working / Managed Desk",
    annotations: [
      {
        marker: "①",
        title: "Pure License Agreement Nature (Section 52 Easements Act)",
        explanation:
          "Managed office and co-working agreements create a personal privilege / license under Section 52 of the Indian Easements Act, 1882, rather than a leasehold interest under the Transfer of Property Act.",
        statuteRef: "Indian Easements Act, 1882 s.52 & s.60",
      },
      {
        marker: "②",
        title: "Contractual Right of Access Revocation & Badge Suspension",
        explanation:
          "Upon non-payment of monthly seat membership fees, the operator possesses the contractual right to revoke digital keycards, biometric credentials, and internet bandwidth without courting civil trespass.",
        statuteRef: "Indian Contract Act, 1872 s.73",
      },
      {
        marker: "③",
        title: "Enterprise Seat Lock-In Commitment & Minimum Billable Seats",
        explanation:
          "Enterprise agreements require payment for the entire committed seat block (e.g. 50 or 200 seats) regardless of actual employee physical attendance.",
        statuteRef: "Indian Contract Act, 1872 s.74",
      },
      {
        marker: "④",
        title: "Unpaid IT Infrastructure & Dedicated Bandwidth Charges",
        explanation:
          "Demands reimbursement for dedicated fiber optic lines, VLAN setups, and server rack allocations incurred specifically for the enterprise member.",
        statuteRef: "Indian Contract Act, 1872 s.70",
      },
      {
        marker: "⑤",
        title: "Lien Over Client Hardware & Office Inventory",
        explanation:
          "The co-working operator exercises a contractual and bailee's lien over client workstations, laptops, and peripheral hardware situated inside the lockable private suite until dues are cleared.",
        statuteRef: "Indian Contract Act, 1872 s.170 & s.171",
      },
      {
        marker: "⑥",
        title: "Fast-Track Summary Suit Under Order XXXVII CPC",
        explanation:
          "Where dues arise from written Membership Agreements, signed master service orders, and tax invoices, recovery proceeds under Order XXXVII CPC summary procedure.",
        statuteRef: "Code of Civil Procedure, 1908 Order XXXVII Rule 1 & 2",
      },
    ],
    text: `LEGAL NOTICE FOR TERMINATION OF CO-WORKING / MANAGED OFFICE MEMBERSHIP AGREEMENT, RECOVERY OF UNPAID SEAT LICENSE FEES, DEDICATED BANDWIDTH CHARGES AND SEAT LOCK-IN DAMAGES

DISPATCHED VIA REGISTERED SPEED POST & DESIGNATED CORPORATE EMAIL

Date: [DATE]
Place: [CITY, STATE]

To,
[ENTERPRISE CLIENT / CO-WORKING MEMBER COMPANY]
Through its Managing Director / Chief Financial Officer
Registered Address: [REGISTERED OFFICE]
Facility In-Use: Suite No. [SUITE NO.], [NAME OF CO-WORKING FACILITY / MANAGED WORKSPACE], [CITY, PIN]
CIN / LLPIN: [CORPORATE ID] | GSTIN: [GST NUMBER]

UNDER INSTRUCTIONS FROM:
[CO-WORKING OPERATOR / MANAGED WORKSPACE PRIVATE LIMITED]
[Workspace Headquarters Address]
GSTIN: [OPERATOR GSTIN]

Sir / Madam,

Under instructions from My Client, I hereby issue this Legal Demand Notice on account of your chronic monetary default under the Master Managed Office / Co-Working Membership Agreement dated [DATE OF AGREEMENT]:

1. NATURE OF AGREEMENT: PURE REVOCABLE LICENSE:
That under the said Agreement, My Client granted you a revocable, non-exclusive license under Section 52 of the Indian Easements Act, 1882 ① to utilize [NUMBER OF WORKSPACES, E.G., 75 DEDICATED WORKSTATIONS] located in Private Suite No. [SUITE NO.], [CO-WORKING HUB NAME] along with access to common amenities, meeting pods, and enterprise high-speed internet.

2. CHRONIC SEAT MEMBERSHIP DEFAULT & GST LIABILITIES:
That you undertook to pay a monthly Membership Fee of Rs. [FEE PER SEAT]/- per seat, aggregating to Rs. [TOTAL MONTHLY INVOICE]/- plus 18% GST on or before the [DUE DATE] of each billing cycle. You have willfully defaulted in payment of Membership Invoices for the months of [LIST MONTHS], accumulating an outstanding principal arrears of Rs. [PRINCIPAL ARREARS]/- plus GST of Rs. [GST DUES]/-.

3. UNPAID IT INFRASTRUCTURE, RACK ALLOCATION & BANDWIDTH DUES:
That in addition to seat fees, you consumed dedicated 100 Mbps 1:1 leased line bandwidth, static IP allocations, and specialized conference credits aggregating to Rs. [IT ARREARS]/- ④, which remain entirely unpaid.

4. MINIMUM SEAT COMMITMENT & UNEXPIRED LOCK-IN CLAUSE:
That under Clause [LOCK-IN CLAUSE], you committed to a mandatory lock-in period of [E.G., 12 MONTHS] for the entire 75-seat block ③. Your failure to pay the monthly license fees entitles My Client to terminate the membership and claim the unexpired lock-in license fees amounting to Rs. [UNEXPIRED LOCK-IN DUES]/- as agreed liquidated damages.

5. SUMMARY STATEMENT OF CLAIM:
a. Unpaid Monthly Membership Invoices (Seats): Rs. [SEAT DUES]
b. Applicable GST @ 18%: Rs. [GST AMOUNT]
c. Dedicated Bandwidth & Ancillary Consumption: Rs. [IT DUES]
d. Unexpired Lock-In Seat Commitment: Rs. [LOCK IN CLAIM]
e. Contractual Delay Interest @ 18% p.a.: Rs. [INTEREST]
-------------------------------------------------------------------------
TOTAL CLAIM: Rs. [TOTAL AMOUNT]
Less: Security Deposit Held: (-) Rs. [DEPOSIT HELD]
-------------------------------------------------------------------------
NET DEMAND PAYABLE: Rs. [NET DEMAND]/-

6. TERMINATION, REVOCATION OF ACCESS & CONTRACTUAL LIEN:
TAKE NOTICE that My Client hereby TERMINATES your membership with immediate effect. You are called upon:
i. To pay the net demand of Rs. [NET DEMAND]/- within 7 (seven) days of receipt hereof;
ii. PLEASE NOTE that all biometric credentials, digital RFID keycards, meeting room booking access, and dedicated WiFi SSIDs stand revoked and deactivated ②.
iii. In terms of Clause [LIEN CLAUSE] of the Agreement and Section 171 of the Contract Act ⑤, My Client hereby exercises a contractual lien over all your desktop monitors, server equipment, and company property situated inside the private suite until all outstanding dues are cleared in full.

Failing payment within 7 days, My Client shall institute a Summary Suit under Order XXXVII of the CPC ⑥ to recover all dues with 18% commercial interest, holding your company and directors personally liable for all legal expenses.

Yours faithfully,

[ADVOCATE NAME & SIGNATURE]
Counsel for Co-Working Operator`,
  },
];

export default function CommercialLeaseTerminationWorkspace() {
  const [selectedId, setSelectedId] = useState<string>(TEMPLATES[0].id);
  const [copied, setCopied] = useState<boolean>(false);

  const selectedTemplate = TEMPLATES.find((t) => t.id === selectedId) || TEMPLATES[0];

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(selectedTemplate.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownloadWord = () => {
    const element = document.createElement("a");
    const file = new Blob([selectedTemplate.text], { type: "application/msword" });
    element.href = URL.createObjectURL(file);
    element.download = `${selectedTemplate.id}.doc`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Template Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {TEMPLATES.map((tmpl) => {
          const isSelected = tmpl.id === selectedId;
          return (
            <button
              key={tmpl.id}
              type="button"
              onClick={() => setSelectedId(tmpl.id)}
              className={`p-3.5 rounded-xl border text-left transition-all duration-150 flex flex-col justify-between ${
                isSelected
                  ? "bg-slate-900 border-[#DC2626] text-white shadow-md ring-2 ring-[#DC2626]/20"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
              }`}
            >
              <div>
                <span
                  className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-1.5 ${
                    isSelected ? "bg-red-950 text-red-400 border border-red-800" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {tmpl.badge}
                </span>
                <p className={`text-xs font-bold leading-snug line-clamp-2 ${isSelected ? "text-white" : "text-slate-900"}`}>
                  {tmpl.title}
                </p>
              </div>
              <p className={`text-[11px] mt-2 line-clamp-1 ${isSelected ? "text-slate-300" : "text-slate-500"}`}>
                {tmpl.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs sm:text-sm font-bold text-slate-800">
            Active Format: <span className="text-[#DC2626]">{selectedTemplate.title}</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
          >
            {copied ? "✓ Copied!" : "📋 Copy Notice Text"}
          </button>
          <button
            type="button"
            onClick={handleDownloadWord}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-300 cursor-pointer"
          >
            📥 Download .doc
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-300 cursor-pointer"
          >
            🖨️ Print / PDF
          </button>
        </div>
      </div>

      {/* Side-by-Side Annotated Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Notice Draft Preview */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="bg-slate-900 text-white px-4 sm:px-6 py-3 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
              Statutory Notice Draft Preview
            </span>
            <span className="text-[10px] bg-red-950 text-red-400 font-bold px-2 py-0.5 rounded-md border border-red-800">
              Annotated Footnotes ①–⑥
            </span>
          </div>
          <div className="p-4 sm:p-6 bg-slate-50/50">
            <pre className="font-mono text-xs sm:text-[13px] text-slate-800 whitespace-pre-wrap leading-relaxed select-all bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-inner overflow-x-auto max-h-[720px] overflow-y-auto">
              {selectedTemplate.text}
            </pre>
          </div>
          <div className="px-4 py-3 bg-slate-100 border-t border-slate-200 text-slate-500 text-[11px] flex items-center justify-between">
            <span>Replace uppercase text in [BRACKETS] with your lease details.</span>
            <span className="font-semibold text-slate-700">Commercial Landlord Form</span>
          </div>
        </div>

        {/* Right Column: Numbered Margin Annotations Guide */}
        <div className="lg:col-span-5 space-y-3.5">
          <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 shadow-xs">
            <p className="text-sm font-extrabold tracking-tight">
              Statutory Margin Annotations Guide
            </p>
            <p className="text-xs text-slate-300 mt-1">
              Why each numbered statutory clause is indispensable under Indian commercial tenancy laws:
            </p>
          </div>

          <ol className="space-y-3 list-none">
            {selectedTemplate.annotations.map((ann, i) => (
              <li
                key={i}
                className="bg-white rounded-xl border border-slate-200 p-3.5 sm:p-4 shadow-xs hover:border-slate-300 transition-colors"
              >
                <div className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {ann.marker}
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                      {ann.title}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {ann.explanation}
                    </p>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md mt-1">
                      Statute: {ann.statuteRef}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
