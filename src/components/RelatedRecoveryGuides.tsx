"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface GuideItem {
  title: string;
  href: string;
  tag: string;
  desc: string;
}

const CLUSTERS: Record<string, { heading: string; items: GuideItem[] }> = {
  employment: {
    heading: "Related Salary, F&F Settlement & Employment Legal Guides",
    items: [
      {
        title: "Salary Recovery in Payslip: Meaning & When It's Illegal",
        href: "/salary-recovery-in-payslip-meaning",
        tag: "Salary Recovery",
        desc: "Challenge illegal payslip deductions, notice recovery on gross CTC, bond clawbacks, and arbitrary damage debits under Wage Code.",
      },
      {
        title: "EPF Claim Rejected? EPF Scheme 2026 Timelines & Remedies",
        href: "/law/epf-scheme-2026-claim-rejection-remedies",
        tag: "EPF Recovery",
        desc: "Statutory escalation for rejected PF claims, member detail mismatches, missing exit dates, and employer non-deposit via EPFiGMS & notices.",
      },
      {
        title: "Experience Letter Not Given by Employer? Legal Action",
        href: "/experience-letter-not-given-legal-action",
        tag: "Legal Guide",
        desc: "Compel release of withheld experience certificates: legal notice, Model Standing Orders, and High Court precedents.",
      },
      {
        title: "Bonus or Incentive Not Received: Mail to HR (Template)",
        href: "/templates/bonus-incentive-not-received-mail",
        tag: "Email Template",
        desc: "Email templates for unpaid bonus, incentive or commission, including after resignation, with the legal points HR can't ignore.",
      },
      {
        title: "Relieving / Experience Letter Request Email Templates",
        href: "/templates/relieving-experience-letter-request-email",
        tag: "Email Template",
        desc: "Polite, firm, and final pre-litigation email formats to compel HR release of withheld relieving and experience letters.",
      },
      {
        title: "How to Recover Full & Final (F&F) Settlement from Employer",
        href: "/how-to-recover-full-and-final-settlement-from-employer",
        tag: "F&F Settlement",
        desc: "Enforce the 48-hour wage settlement rule, Samadhan portal complaint & Advocate Legal Notice.",
      },
      {
        title: "Legal Notice for Full & Final Settlement Delay (Format & Mail)",
        href: "/legal-notice-for-full-and-final-settlement-delay",
        tag: "Legal Notice",
        desc: "Copy-paste F&F reminder mail format and serve a 15-day statutory demand notice to HR/Directors.",
      },
      {
        title: "Salary Delay Law in India (7th–10th Payment Rule)",
        href: "/recovery/delayed-wages",
        tag: "Payment of Wages",
        desc: "Claim late salary payments plus up to 10x statutory compensation under Section 15.",
      },
      {
        title: "Employer Withholding Relieving Letter & Experience Certificate",
        href: "/employer-withholding-relieving-letter-legal-action",
        tag: "Exit Clearance",
        desc: "Force release of withheld relieving letters and experience certificates within 7–15 days.",
      },
      {
        title: "Legal Notice for Salary Withheld During Notice Period",
        href: "/legal-notice-for-salary-withheld-during-notice-period",
        tag: "Notice Period",
        desc: "Recover salary held back during notice period or challenge illegal notice pay recovery.",
      },
      {
        title: "Legal Steps to Recover Unpaid Salary from an Employer in India",
        href: "/what-are-the-legal-steps-to-recover-unpaid-salary-from-an-employer-in-india",
        tag: "Step-by-Step",
        desc: "Complete escalation hierarchy: Legal Notice, Labour Commissioner, Sec 33C(2) & Order 37 CPC.",
      },
      {
        title: "Notice Period Salary & PILON Recovery",
        href: "/recovery/notice-period-salary",
        tag: "Notice Pay",
        desc: "Challenge arbitrary buyout deductions and recover unpaid notice period wages.",
      },
    ],
  },
  consumer: {
    heading: "Related Consumer Refund, E-Commerce & Vendor Recovery Guides",
    items: [
      {
        title: "Marriage Hall or Banquet Booking Cancelled? Recovering Your Advance Deposit",
        href: "/marriage-hall-banquet-booking-cancellation-refund",
        tag: "Banquet Refund",
        desc: "Section 74 Contract Act limits on advance forfeiture, genuine pre-estimate of loss, and advocate recovery notice.",
      },
      {
        title: "Consumer Court Awards Tracker: Refund & Orders",
        href: "/reports/consumer-commission-awards-tracker",
        tag: "Awards Tracker",
        desc: "Monthly roundup of consumer court judgments against e-commerce sites, airlines, banks, and builders with exact refund amounts and links.",
      },
      {
        title: "Legal Notice Outcomes Study: Settlement Rates by Dispute Type",
        href: "/reports/legal-notice-outcomes-study",
        tag: "Data Study",
        desc: "Empirical outcomes study tracking pre-litigation settlement velocity and resolution rates by dispute type.",
      },
      {
        title: "Refund Delay Index India: Days to Refund by Company",
        href: "/reports/refund-delay-index-india",
        tag: "Data Study",
        desc: "Quarterly benchmark tracking median days to refund across consumer platforms before and after an advocate legal notice.",
      },
      {
        title: "Consumer Court Fee & Jurisdiction Calculator (2026)",
        href: "/tools/consumer-commission-fee-jurisdiction-calculator",
        tag: "Interactive Tool",
        desc: "Calculate District, State or National Consumer Commission filing fees and determine pecuniary jurisdiction under CPA 2019.",
      },
      {
        title: "National Consumer Helpline (1915) Complaint Guide",
        href: "/national-consumer-helpline-complaint-guide",
        tag: "NCH 1915 & INGRAM",
        desc: "How NCH 1915 and INGRAM complaints work, response times, and why the docket strengthens your legal notice and consumer court case.",
      },
      {
        title: "Wrong Electricity Bill Complaint Application (Format)",
        href: "/templates/wrong-electricity-bill-complaint-application",
        tag: "Utility Dispute",
        desc: "Statutory complaint formats for incorrect readings, jumping meters, and CGRF escalation under Section 42(5) of the Electricity Act, 2003.",
      },
      {
        title: "Appliance Warranty Replacement Refused? Legal Rights & Notice",
        href: "/appliance-warranty-replacement-refused",
        tag: "Warranty Law",
        desc: "Force brand replacement or full refund for defective TV, fridge, AC or washing machine under Consumer Protection Act 2019 and repeated failure rules.",
      },
      {
        title: "Jio, Airtel, Vi or Broadband Refund: Complaint Route",
        href: "/telecom-broadband-refund-complaint",
        tag: "Telecom & ISP",
        desc: "Jio, Airtel, Vi or broadband refund pending? The appellate authority route, TRAI rules and when to send a legal notice.",
      },
      {
        title: "Courier Lost Your Parcel? Compensation Rights in India",
        href: "/courier-lost-parcel-compensation-india",
        tag: "Courier & Logistics",
        desc: "Overturn arbitrary ₹100 liability caps, demand full invoice reimbursement, statutory interest, and court awards from Delhivery, Blue Dart or DTDC.",
      },
      {
        title: "Car Delivery Delay Complaint Letter (Free Format)",
        href: "/templates/car-delivery-delay-complaint-letter",
        tag: "Vehicle Template",
        desc: "Complaint letter to dealership for delayed car or bike delivery, demanding a firm date, cab compensation or 100% advance refund.",
      },
      {
        title: "Bike or EV Scooter Booking Refund Not Received?",
        href: "/bike-scooter-booking-refund-legal-notice",
        tag: "Two-Wheeler Refund",
        desc: "Dealer or EV maker not refunding a bike or scooter booking? Cancellation terms, consumer rights and a demand notice.",
      },
                  {
        title: "School & College Fee Refund Application (Formats)",
        href: "/templates/school-college-fee-refund-application",
        tag: "Refund Template",
        desc: "Ready fee-refund application formats in English and Hindi for school, college and hostel fees, with UGC and MoE rules to cite.",
      },
      {
        title: "College Holding Original Certificates: Getting Them Back",
        href: "/college-not-returning-original-documents",
        tag: "Original Documents",
        desc: "Compel release of withheld Class 10/12 mark sheets, degrees, and migration certificates under UGC Clause 5, AICTE rules, and High Court precedents.",
      },
{
        title: "Study-Abroad Consultant Refund: When They Don't Deliver",
        href: "/study-abroad-consultant-refund-legal-notice",
        tag: "Study Abroad Refund",
        desc: "Overturn 'non-refundable' clauses for failed admissions or rejected study visas under CPA 2019 Sections 2(11) and 47.",
      },
      {
        title: "UGC Fee Refund Policy: Withdrawal Rules for Colleges",
        href: "/law/ugc-fee-refund-policy",
        tag: "College Fee Refund",
        desc: "Statutory UGC 5-tier fee refund slabs, 15-day refund turnaround, ban on certificate retention, and advocate notice process.",
      },
      {
        title: "Insurance Ombudsman Complaint Format (Annexure VI-A)",
        href: "/templates/insurance-ombudsman-complaint-format",
        tag: "Ombudsman Template",
        desc: "Statutory Annexure VI-A complaint form for rejected health, life, and motor claims under Insurance Ombudsman Rules, 2017 with Word export.",
      },
      {
        title: "Sold the Wrong Policy? Free-Look Cancellation and Mis-Selling Refunds",
        href: "/insurance-mis-selling-free-look-refund",
        tag: "Insurance Recovery",
        desc: "Enforce 30-day free-look rights, overturn mis-sold FD insurance policies, and file IRDAI Bima Bharosa and Ombudsman claims.",
      },
      {
        title: "Health Insurance Claim Rejected? Reasons & How to Fight",
        href: "/health-insurance-claim-rejection-reasons-counter",
        tag: "Health Insurance",
        desc: "Overturn health claim repudiations for PED, daycare or medical necessity under Section 45 Insurance Act and Ombudsman rules.",
      },
      {
        title: "Flipkart Return Rejected or Refund Delayed Complaint Guide",
        href: "/flipkart-return-refund-complaint",
        tag: "E-Commerce",
        desc: "Escalate wrong/empty box deliveries via Grievance Officer, NCH 1915, e-Jagriti & Legal Notice.",
      },
      {
        title: "Legal Notice to Retailer for Wrong or Damaged Product Delivery",
        href: "/legal-notice-to-retailer-wrong-damaged-product-delivery",
        tag: "Defective Goods",
        desc: "Enforce marketplace fallback liability and claim 100% refund + mental harassment damages.",
      },
      {
        title: "Legal Notice to Vendor for Refund of Advance Payment",
        href: "/legal-notice-to-vendor-for-refund-of-advance-payment",
        tag: "Vendor Refund",
        desc: "Recover advance money paid to defaulting suppliers, contractors, or service vendors under Sec 73.",
      },
      {
        title: "Defective Car Replacement or Refund: Lemon Law India",
        href: "/manufacturing-defect-car-replacement-refund-lemon-law",
        tag: "Automotive Lemon Law",
        desc: "Force carmaker vehicle replacement or 100% invoice refund for manufacturing defects under Chapter VI CPA 2019.",
      },
      {
        title: "Can You Refuse New Car Delivery? PDI Defects & Rights",
        href: "/refuse-new-car-delivery-pdi-defects",
        tag: "Auto / PDI",
        desc: "Refuse scratched, repainted, or high-odometer cars at stockyard PDI under SOGA §41 and recover your full booking deposit.",
      },
      {
        title: "EV Service Delay or Battery Warranty Refused? Legal Steps",
        href: "/ev-service-delay-battery-warranty-legal-notice",
        tag: "EV Service / Warranty",
        desc: "Compel EV OEMs & service centres to return repaired scooters, replace defective battery packs, and pay daily conveyance.",
      },
      {
        title: "Bought a Used Car With Hidden Defects? Getting a Refund",
        href: "/used-car-platform-refund-dispute",
        tag: "Used Car Refund",
        desc: "Overturn 7-day return denials, undisclosed accident or flood damage, and meter tampering on Cars24, Spinny and dealers under CPA 2019.",
      },
      {
        title: "Legal Notice to Car Dealer for Delayed Delivery or Defective Vehicle",
        href: "/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle",
        tag: "Auto / PDI",
        desc: "Refuse defective cars at PDI, claim 100% booking refund, or demand replacement for lemon vehicles.",
      },
            {
        title: "Hospital Overbilling? How to Challenge & Get a Refund",
        href: "/hospital-overbilling-refund-legal-notice",
        tag: "Hospital Overbilling",
        desc: "Forensic bill audit steps, clinical establishment pricing rules, and advocate legal notices to recover inflated medical charges.",
      },
      {
        title: "Solar Installer Took Advance but Didn't Install? Refund Rights",
        href: "/rooftop-solar-installer-refund-legal-notice",
        tag: "Solar Vendor Refund",
        desc: "Recover advances for delayed or abandoned rooftop solar installations, PM Surya Ghar vendor defaults, and DISCOM net-metering delays.",
      },
      {
        title: "Legal Notice to Interior Designer or Home Contractor for Refund",
        href: "/legal-notice-to-interior-designer-contractor-refund",
        tag: "Home Renovation",
        desc: "Recover advances for incomplete interior work, delayed handovers, and substandard materials.",
      },
      {
        title: "Legal Notice to Wedding Venue or Event Planner for Booking Refund",
        href: "/legal-notice-to-event-planner-wedding-venue-refund",
        tag: "Event Refund",
        desc: "Strike down unfair 'non-refundable' banquet hall clauses under Section 2(46) Consumer Act.",
      },
      {
        title: "Can a Gym Keep Your Annual Fee? Challenging No-Refund Clauses Legally",
        href: "/gym-membership-cancellation-refund-legal-notice",
        tag: "Gym Fee Refund",
        desc: "Challenge unfair gym contracts under Section 2(46) CPA 2019 for closed branches, medical issues, and auto-debits.",
      },
      {
        title: "Legal Notice for Gym, Club or Coaching Fee Refund",
        href: "/legal-notice-to-gym-subscription-fee-refund",
        tag: "Membership Refund",
        desc: "Challenge illegal no-refund policies and recover unused membership or tuition fees.",
      },
    ],
  },
  property: {
    heading: "Related Security Deposit, Landlord, PG & Builder Refund Guides",
    items: [
      {
        title: "Commercial Landlord Withholding Office or Shop Deposit? How to Recover It Legally",
        href: "/commercial-lease-security-deposit-refund-legal-notice",
        tag: "Commercial Deposit",
        desc: "Overcome dilapidation deductions, fair wear and tear claims, arbitration clauses, and recover ₹5L–₹50L+ office/retail deposits via legal notice & Order 37.",
      },
      {
        title: "Builder Delayed Possession? Claim Monthly Delay Interest Under RERA",
        href: "/rera-delayed-possession-compensation-interest",
        tag: "RERA Delay Interest",
        desc: "Claim monthly delay interest at SBI MCLR + 2% under RERA Section 18 while retaining your flat, plus notice formats and execution procedure.",
      },
      {
        title: "Got a Smaller Flat Than Promised? Proportionate Refund Under RERA",
        href: "/carpet-area-shortfall-refund",
        tag: "Carpet Area Refund",
        desc: "Measure RERA Section 2(k) carpet area, reject illegal balcony/shaft loading, and claim proportionate price + GST + SBI MCLR+2% refund.",
      },
      {
        title: "Builder Stopped Assured Returns: Your Recovery Options",
        href: "/assured-return-builder-default-legal-notice",
        tag: "Assured Return Default",
        desc: "Decision tree for defaulted commercial & residential assured-return schemes: RERA Sec 18 refund, Sec 138/141 PDC bounce & Form 26AS summary suits.",
      },
      {
        title: "Plot Booking Cancelled but No Refund? Recovering Your Money",
        href: "/plot-booking-refund-legal-notice",
        tag: "Plot Booking Refund",
        desc: "Does RERA apply to plots? Permissible earnest money forfeiture limits (10% cap), unapproved layout remedies, and the 15-day notice to send.",
      },
      {
        title: "Flat Booking Cancellation Letter Format (Before Agreement)",
        href: "/templates/flat-booking-cancellation-letter",
        tag: "Cancellation Template",
        desc: "4 flat and plot booking cancellation letter formats (polite, firm RERA anti-forfeiture, final ultimatum & Sec 18 delay) with Word export.",
      },
      {
        title: "RERA Complaint Online: State-Wise Process, Fees & Format",
        href: "/rera-complaint-online-state-wise",
        tag: "RERA Online Guide",
        desc: "Step-by-step RERA complaint filing across major states: portals, ₹1,000–₹5,000 fees, Form M vs Form N formats & SBI MCLR+2% interest.",
      },
      {
        title: "RERA Refund Interest Calculator (SBI MCLR + 2% Section 18)",
        href: "/tools/rera-refund-interest-calculator",
        tag: "RERA Calculator",
        desc: "Compute per-instalment builder refund or delay possession interest at SBI highest MCLR + 2% (or UP RERA MCLR + 1%) with CSV export.",
      },
      {
        title: "Subvention Scheme Gone Wrong: Builder Defaulted on Pre-EMIs",
        href: "/subvention-scheme-pre-emi-builder-default",
        tag: "Subvention / Pre-EMI",
        desc: "Tripartite agreement rights, RBI upfront-disbursal violation shield, CIBIL protection & RERA Section 18 refund when a builder stops paying Pre-EMIs.",
      },
      {
        title: "Won at RERA but the Builder Won't Pay? Enforcing the Order",
        href: "/rera-refund-order-not-paid-recovery-certificate",
        tag: "Sec 40 RERA RC",
        desc: "Enforce unpaid RERA refund orders via Section 40(1) Recovery Certificates, District Collector attachment, Section 63 fines & HC Mandamus.",
      },
      {
        title: "Society Maintenance Recovery Notice Format (Free)",
        href: "/templates/society-maintenance-recovery-notice",
        tag: "Society Notice Format",
        desc: "Annotated 15-day maintenance arrears recovery notice format for CHS, AOA & RWAs with 21% simple interest & Section 101 route.",
      },
      {
        title: "Security Deposit Refund Letter to Landlord (Template)",
        href: "/templates/security-deposit-refund-letter-to-landlord",
        tag: "Letter Template",
        desc: "Live-fill deposit refund request letter and painting/wear-and-tear deduction challenge format (.doc/PDF) before serving a legal notice.",
      },
      {
        title: "PG Lock-In Period & Notice Period Rules: What's Legal",
        href: "/pg-lock-in-period-notice-period-rules",
        tag: "PG Lock-In & Notice",
        desc: "Enforceability of PG lock-in clauses under Sec 74 Contract Act, 30-day notice rules in Pune/Bengaluru, and illegal deposit cuts.",
      },
      {
        title: "Property Deal Fell Through? Token & Bayana Money Refund Rules",
        href: "/token-money-refund-property-deal",
        tag: "Token / Bayana",
        desc: "Enforce Section 74 forfeiture caps, Section 55(6)(b) statutory property charge, and recover token money when a deal fails.",
      },
      {
        title: "Model Tenancy Act: Security Deposit Cap & State Status",
        href: "/law/model-tenancy-act-security-deposit-rules",
        tag: "Model Tenancy Act",
        desc: "2-month residential deposit cap (Sec 11), same-day refund on key handover, Second Schedule wear-and-tear rules & state adoption status.",
      },
      {
        title: "Legal Notice to Tenant for Unpaid Rent & Eviction (Guide)",
        href: "/legal-notice-to-tenant-for-unpaid-rent-eviction",
        tag: "Tenant Eviction",
        desc: "Recover rent arrears and issue a 15-day termination notice under Section 106 TPA with mesne profits.",
      },
      {
        title: "NoBroker Money-Back Plan or Token Refund Stuck? Escalate It",
        href: "/legal-notice-to/nobroker",
        tag: "NoBroker Refund",
        desc: "Recover denied NoBroker Money-Back Plan fees, stuck property token advances, and held NoBroker Pay rent transfers.",
      },
      {
        title: "PG or Hostel Owner Not Returning Security Deposit Legal Notice",
        href: "/legal-notice-to-pg-owner-for-security-deposit-refund",
        tag: "PG / Hostel",
        desc: "Recover withheld PG deposits and challenge arbitrary electricity or notice-period deductions.",
      },
      {
        title: "Recover Rental Security Deposit from Landlord in India",
        href: "/recover-security-deposit-from-landlord-india",
        tag: "Tenant Rights",
        desc: "Enforce Model Tenancy Act timelines, Order 37 Summary Suits & 18% interest on withheld deposits.",
      },
      {
        title: "Challenge Unreasonable Landlord Painting & Repair Deductions",
        href: "/legal-notice-landlord-unreasonable-security-deposit-deductions",
        tag: "Deposit Deductions",
        desc: "Stop illegal 1-month painting charges and normal wear-and-tear deductions after vacating.",
      },
      {
        title: "Flat Booking Cancellation Refund Legal Notice to Builder",
        href: "/builder-booking-cancellation-refund-legal-notice",
        tag: "RERA / Builder",
        desc: "Recover forfeited token money and flat booking advances under RERA & Supreme Court rulings.",
      },
      {
        title: "Legal Notice to Cooperative Housing Society / RWA for Maintenance",
        href: "/legal-notice-to-cooperative-housing-society-maintenance-disputes",
        tag: "Society / RWA",
        desc: "Challenge illegal transfer fees, non-occupancy caps, and NOC withholding by RWAs.",
      },
      {
        title: "Should Rental Agreements Be Notarized or Registered in India?",
        href: "/should-rental-agreements-be-notarized-in-india",
        tag: "11-Month Lease",
        desc: "Understand Section 17 Registration Act validity and evidentiary power in deposit recovery.",
      },
    ],
  },
  banking: {
    heading: "Related Cheque Bounce, Banking Auto-Debit & Cyber Fraud Guides",
    items: [
      {
        title: "Section 25 PSS Act (e-NACH / ECS Bounce) Notice Format",
        href: "/templates/section-25-pss-act-nach-bounce-legal-notice-format",
        tag: "IND-02 Template",
        desc: "Court-tested s.25 PSS Act notice with UMRN, NPCI return memo & Suman Sethi dual-demand safeguard.",
      },
      {
        title: "Enterprise Collection SaaS vs Advocate-Backed Bulk Legal Desk (NBFCs)",
        href: "/credgenics-spocto-alternative-mid-market-nbfc-legal-notice-platform",
        tag: "IND-02 CFO Guide",
        desc: "Compare Credgenics/Spocto annual SaaS lock-in vs zero-lock-in Advocate Notice + Email/WATI WhatsApp/Speed Post RPAD + Reply Triage.",
      },
      {
        title: "Gold Loan Default & Auction Notice Compliance for NBFCs (RBI)",
        href: "/gold-loan-default-auction-statutory-notice-rbi-compliance-nbfc",
        tag: "Gold Loan s.176",
        desc: "Audit-proof Contract Act s.176 pre-auction notice, 75% LTV margin call, 14-day vernacular newspaper, taluka auction & deficit recovery.",
      },
      {
        title: "NBFC-MFI & Microfinance Delinquency Recovery (RBI Safe)",
        href: "/microfinance-mfi-jlg-group-loan-default-compliant-recovery",
        tag: "NBFC-MFI & JLG",
        desc: "RBI & MFIN-safe escalation for ₹75K–₹3L graduated MSME loans & ring-leader defaults via vernacular Speed Post RPAD & Lok Adalat.",
      },
      {
        title: "RBI Recovery Agent Directions & Digital Lending Compliance for NBFCs",
        href: "/rbi-recovery-agent-guidelines-compliant-legal-escalation-nbfc",
        tag: "RBI Compliance Guide",
        desc: "Replace 8 AM–7 PM telecalling liability and rogue agent risk with audit-safe tri-channel Advocate Legal Notices (Email + WhatsApp + RPAD).",
      },
      {
        title: "Small-Ticket Digital Loan & BNPL Recovery Economics (₹5K–₹1L)",
        href: "/small-ticket-digital-personal-loan-bnpl-recovery-economics",
        tag: "Fintech & BNPL",
        desc: "Unit-positive 3-wave playbook combining BSA s.63 digital advocate notices, 30-day CICRA pre-adverse alerts, selective RPAD & s.29B batch ODR.",
      },
      {
        title: "Supply-Chain Finance, Dealer Financing & Factoring Recovery",
        href: "/supply-chain-finance-channel-invoice-discounting-default-recovery",
        tag: "SCF & Factoring",
        desc: "Enforce Factoring Act s.8 assignment notices, s.19 CERSAI priority, anchor stop-supply covenants, Order 37 CPC & BNS s.318 dual-pledge fraud.",
      },
      {
        title: "Bank Loan Recall cum Guarantee Invocation Notice Format (RBI Compliant)",
        href: "/templates/bank-loan-recall-cum-guarantee-invocation-notice",
        tag: "Bank Notice Template",
        desc: "Advocate-vetted loan recall and Contract Act s.126/128 guarantee invocation draft with uncompounded RBI Penal Charges Schedule A and Word (.doc) export.",
      },
      {
        title: "SARFAESI, DRT Fee & Bank Recovery Forum Calculator India",
        href: "/tools/sarfaesi-drt-bank-recovery-forum-calculator",
        tag: "B2B Bank Calculator",
        desc: "Check SARFAESI s.31(h)/(i)/(j) & NBFC ₹20L rules, compute exact RDB Act Rule 7 DRT fees (₹1.5L cap), and plot the 60+15+30 day calendar.",
      },
      {
        title: "High-Velocity, RBI-Compliant Legal Recovery & Bulk Notice Automation for NBFCs, Fintechs, HFCs & MFIs",
        href: "/industries/nbfc-fintech-loan-recovery",
        tag: "IND-02 NBFC Hub",
        desc: "Multi-vertical hub covering PSS Act s.25 e-NACH bounces, Gold s.176, CV Form 36, NBFC ₹100Cr/₹20L & HFC ₹1L SARFAESI, Co-Lending DLG & bulk CSV notices.",
      },
      {
        title: "India NBFC & Digital Lending Legal Recovery Benchmarks (2026)",
        href: "/reports/nbfc-digital-lending-legal-recovery-benchmarks-india",
        tag: "IND-02 Benchmark",
        desc: "Empirical B2B benchmark study mapping SMA-0 to NPA DPD-bucket cure windows, Email vs. WhatsApp vs. RPAD service validity, and ₹999–₹1,449 ROI.",
      },
      {
        title: "Section 25 (PSS Act) e-NACH & AutoPay Bounce Deadline Calculator",
        href: "/tools/section-25-nach-bounce-limitation-calculator",
        tag: "IND-02 Calculator",
        desc: "Calculate exact 30-day notice cut-offs, electronic vs RPAD deemed-service dates, 15-day cure expiry & batch CSV Magistrate filing deadlines.",
      },
      {
        title: "Co-Lending & 5% DLG (FLDG) Default Recovery Legal Workflow",
        href: "/co-lending-fldg-dlg-default-recovery-workflow-bank-nbfc",
        tag: "IND-02 Co-Lending",
        desc: "Solve locus standi, Servicing POA, s.25 e-NACH payee mismatch & 5% DLG non-extinguishment traps in 80:20 Bank–NBFC co-lending.",
      },
      {
        title: "Unsecured SME Business Loan & Merchant Cash Advance (EDI) Recovery",
        href: "/unsecured-business-loan-sme-working-capital-default-nbfc",
        tag: "IND-02 SME & EDI",
        desc: "Dual PSS Act s.25 criminal notices + Commercial Court Order XXXVIII Rule 5 bank & GST-debtor attachment for ₹5L–₹75L SME defaults.",
      },
      {
        title: "NBFC SARFAESI Eligibility: ₹100 Cr Asset & ₹20 Lakh Debt Rule",
        href: "/nbfc-sarfaesi-eligibility-100-crore-asset-20-lakh-loan-rule",
        tag: "IND-02 NBFC Law",
        desc: "MoF S.O. 856(E)/652(E) dual-gate threshold analysis plus Arbitration s.21/s.9 & Order 34/37 alternatives for Base-Layer and sub-₹20L LAP lenders.",
      },
      {
        title: "Neutral ODR & Online Arbitration Clause Drafting (Post-CORE)",
        href: "/neutral-odr-online-arbitration-clause-drafting-fintech-nbfc",
        tag: "IND-02 NBFC Law",
        desc: "Drafting Section 12(5) & 5-Judge CORE-compliant institutional ODR clauses, Seat vs. Virtual Venue rules, and BSA s.63 notice proof for NBFCs.",
      },
      {
        title: "HFC Affordable Home Loan & Subvention NPA Recovery Playbook",
        href: "/housing-finance-company-hfc-affordable-home-loan-npa-recovery",
        tag: "IND-02 HFC SARFAESI",
        desc: "₹1 Lakh SARFAESI floor for RBI-registered HFCs, CERSAI s.26D perfection, stalled-builder tripartite defaults & Tier-2/3 informal-income cures.",
      },
      {
        title: "RBI Credit Bureau (CIC/CIBIL) Pre-Reporting Default Notice Compliance",
        href: "/cibil-cic-pre-reporting-default-notice-compliance-lenders",
        tag: "IND-02 CIC Nodal",
        desc: "Embed mandatory RBI pre-reporting alerts and Commercial CMR rank disclosures into Day-30 notices while staying insulated from ₹100/day Ombudsman penalties.",
      },
      {
        title: "Commercial Vehicle & Construction Equipment Finance Recovery for NBFCs",
        href: "/commercial-vehicle-construction-equipment-finance-recovery-nbfc",
        tag: "CV & CE Recovery",
        desc: "Pre-seizure recall, Section 9 ex-parte Court Receiver orders, MV Act s.51(5) Vahan Form 36 & post-auction Loss-on-Sale guarantor suits.",
      },
      {
        title: "Pre-Litigation Loan Recall & NPA Legal Recovery Infrastructure for Indian Banks",
        href: "/industries/banks-loan-recovery",
        tag: "IND-01 Bank Hub",
        desc: "Multi-track banking recovery hub covering SARFAESI s.13(2)/14, sub-₹20L DRT alternatives, Pre-Litigation Lok Adalat, PSS s.25 & bulk CSV notices.",
      },
      {
        title: "How Banks Can Reduce Recovery Costs Through Legal Outsourcing",
        href: "/how-banks-reduce-recovery-costs-through-legal-outsourcing",
        tag: "Legal Operations & Cost Optimization",
        desc: "Unit-economics B2B blueprint demonstrating how banks cut debt recovery costs by up to 70% via flat-rate legal outsourcing and tech pipelines.",
      },
      {
        title: "Legal Recovery Partners for Banks: Managing Defaulted Loan Portfolios",
        href: "/legal-recovery-partners-banks-managing-defaulted-loan-portfolios",
        tag: "NPA Portfolio Management",
        desc: "Institutional balance-sheet partnership for banks. Data-driven loan segmentation across SARFAESI, Section 25 PSSA, Lok Adalat, and Commercial Suits.",
      },
      {
        title: "Recovery of Multiple Defaulted Loan Accounts Through Legal Proceedings",
        href: "/recovery-multiple-defaulted-loan-accounts-legal-proceedings",
        tag: "Portfolio Loan Recovery",
        desc: "Batch Pre-Litigation Lok Adalat filings, Section 25 PSS Act complaints, and centralized master retainership agreements for banks & NBFCs.",
      },
      {
        title: "How Banks Can Recover Small-Ticket Personal Loans Legally",
        href: "/recover-small-ticket-personal-loans-legally-banks",
        tag: "Small-Ticket Loan Recovery",
        desc: "Cost-effective legal solutions for banks and FinTechs to recover loans under ₹2 Lakhs via low-cost notices and Pre-Litigation Lok Adalat.",
      },
      {
        title: "Bulk Legal Notice Services for Credit Card Recovery",
        href: "/bulk-legal-notice-services-credit-card-recovery",
        tag: "Bulk Card Recovery",
        desc: "Industrial-scale legal notice dispatch via Speed Post API, WhatsApp, and Email with Section 63 BSA certificates.",
      },
      {
        title: "Recovery of Long-Pending Credit Card Dues: Legal Process for Banks",
        href: "/recovery-long-pending-credit-card-dues-legal-process",
        tag: "Card Dues Recovery",
        desc: "Legal solutions for banks recovering aged credit card dues beyond 180+ DPD. Limitation extensions, acknowledgment of debt, and Lok Adalat OTS.",
      },
      {
        title: "Bank Account Frozen Due to Cyber Cell Notice? How to Unfreeze",
        href: "/bank-account-frozen-cyber-cell-legal-remedies",
        tag: "Cyber Cell Freeze",
        desc: "Statutory remedies for cyber cell debit freezes under Section 106 BNSS / 102 CrPC, securing police NOCs, and Magistrate de-freezing.",
      },
      {
        title: "Gaming App Wallet Balance Stuck After the Ban? Refunds",
        href: "/online-gaming-wallet-balance-refund",
        tag: "Gaming Wallet",
        desc: "Statutory escalation path for real-money gaming wallet balances stuck post-ban: platform duties, unutilised deposit rights, and advocate notices.",
      },
      {
        title: "Dispute With Your Broker? SEBI SCORES and SMART ODR Explained",
        href: "/sebi-smart-odr-broker-complaint",
        tag: "SEBI & Broker Dispute",
        desc: "Escalate unauthorized trades, forced square-offs, and stuck funds through SCORES 2.0 and the SMART ODR binding arbitration portal.",
      },
      {
        title: "Paid a 'Registration Fee' for a Job That Didn't Exist? Recover It",
        href: "/fake-job-offer-registration-fee-refund",
        tag: "Job Scam Fee",
        desc: "Statutory recovery roadmap for fake job offer fees, placement agency registration frauds, 1930 bank freeze, and advocate notices.",
      },
      {
        title: "Telegram Task Scam Money Recovery: Reporting & Legal Options",
        href: "/task-scam-telegram-money-recovery",
        tag: "Task Scam",
        desc: "Statutory escalation for Telegram task and review scams: 1930 NCRP reporting, mule account freeze, Section 503 BNSS, and bank liability.",
      },
      {
        title: "साइबर फ्रॉड का पैसा वापस कैसे मिलेगा? बैंक की जिम्मेदारी",
        href: "/hi/cyber-fraud-paisa-wapas-kaise-milega",
        tag: "साइबर फ्रॉड रिफंड",
        desc: "UPI या कार्ड फ्रॉड के बाद 1930, बैंक शिकायत और RBI के जीरो लायबिलिटी नियम — पैसा वापस पाने की पूरी प्रक्रिया हिंदी में।",
      },
      {
        title: "Wrong Account Money Transfer Refund Application (Format)",
        href: "/templates/wrong-account-transfer-refund-application",
        tag: "Bank Reversal Format",
        desc: "Ready application formats in English and Hindi to request reversal of money sent to a wrong account or UPI ID under Section 72 Contract Act.",
      },
      {
        title: "Stop UPI AutoPay and Recover Unwanted Subscription Debits",
        href: "/upi-autopay-subscription-refund",
        tag: "UPI AutoPay Refund",
        desc: "Cancel mandates in PhonePe/GPay, dispute unnotified debits under RBI 24-hour pre-alert rules, and trigger CCPA dark-pattern refunds.",
      },
      {
        title: "Insurance Premium Auto-Debited Without Consent? Refund",
        href: "/insurance-premium-auto-debited-without-consent",
        tag: "Bancassurance Refund",
        desc: "Recover unauthorized bancassurance debits, PMJJBY deductions, and forced loan insurance bundling with 100% refund under IRDAI and RBI rules.",
      },
      {
        title: "ATM Cash Not Dispensed but Debited? Refund & Penalty Guide",
        href: "/atm-cash-not-dispensed-compensation",
        tag: "ATM Failed Cash",
        desc: "Enforce T+5 calendar days auto-reversal, ₹100 per day statutory delay penalty, and filing Banking Ombudsman complaints.",
      },
      {
        title: "How to Complain to the RBI Ombudsman (Integrated Scheme)",
        href: "/law/rbi-ombudsman-complaint-guide",
        tag: "RBI Ombudsman",
        desc: "Eligibility, the 30-day bank notice rule, CMS portal step-by-step process, ₹20L/₹1L compensation caps, and legal notice format.",
      },
      {
        title: "RBI Zero Liability Rule: Unauthorised Transaction Refunds",
        href: "/law/rbi-zero-liability-unauthorised-transaction",
        tag: "RBI Zero Liability",
        desc: "Report within 3 working days for zero liability, 4–7 day limited liability caps, and mandatory 10-working-day shadow reversal.",
      },
      {
        title: "Money Debited but Transaction Failed? RBI TAT & ₹100/Day Rule",
        href: "/law/rbi-failed-transaction-tat-compensation",
        tag: "RBI ₹100/Day Rule",
        desc: "Enforce T+1 (UPI/IMPS) and T+5 (ATM/PoS/E-Commerce) auto-reversal deadlines plus mandatory ₹100/day delay compensation.",
      },
      {
        title: "RBI's 2027 Fraud Liability Rules: Banks Must Prove Fault",
        href: "/law/rbi-fraudulent-transaction-framework-2027",
        tag: "RBI 2027 Rules",
        desc: "How the 1 Jan 2027 RBI framework shifts the burden of proof to banks and pays 85% (up to ₹25,000) compensation on losses ≤ ₹50,000.",
      },
      {
        title: "Cheque Bounce Case and Civil Suit Together: Allowed?",
        href: "/cheque-bounce-and-civil-suit-together",
        tag: "Civil & Criminal",
        desc: "Simultaneous Section 138 NI Act complaint and Order 37 summary suit: Supreme Court parallel remedy rules, interim compensation & set-off.",
      },
      {
        title: "Company Cheque Bounce: When Directors Can Be Prosecuted (s.141)",
        href: "/cheque-bounce-case-against-company-directors",
        tag: "Section 141",
        desc: "When company directors can be prosecuted for cheque bounce: Aneeta Hada rule, mandatory averments, and notice procedure.",
      },
      {
        title: "Cheque Bounced 'Account Closed' or 'Signature Mismatch'",
        href: "/cheque-bounce-account-closed-signature-mismatch",
        tag: "Return Reasons",
        desc: "Section 138 applicability for Account Closed, Signature Differs, Refer to Drawer and CTS return reason codes under Supreme Court rulings.",
      },
      {
        title: "Stop Payment Cheque Bounce: Is Section 138 Attracted?",
        href: "/stop-payment-cheque-bounce-case",
        tag: "Stop Payment",
        desc: "When Section 138 applies to payment stopped by drawer return memos, narrow drawer defences, and statutory deadlines.",
      },
            {
        title: "Cheque Bounce Deadline Calculator (Section 138 NI Act)",
        href: "/tools/cheque-bounce-deadline-calculator",
        tag: "Interactive Tool",
        desc: "Instant statutory countdown: 30-day demand notice, 15-day cure period, and 1-month Section 142 complaint deadline.",
      },
{
        title: "New Cheque Bounce Rules: Supreme Court 2025 Guidelines",
        href: "/law/cheque-bounce-supreme-court-guidelines-2025",
        tag: "Supreme Court 2025",
        desc: "Nationwide directions in Sanjabij Tari: WhatsApp/email e-summons, blank cheque presumptions, cash loans over ₹20,000 & compounding costs.",
      },
      {
        title: "Legal Notice to Bank for Unauthorized ECS / NACH Debit Reversal",
        href: "/legal-notice-to-bank-unauthorized-ecs-nach-debit-reversal",
        tag: "ECS / NACH",
        desc: "Reverse unauthorized loan auto-debits, bounce charges & claim Rs 100/day RBI penalty.",
      },
      {
        title: "चेक बाउंस होने के कितने दिन बाद नोटिस दें? पूरी समय सीमा",
        href: "/hi/cheque-bounce-notice-kitne-din-mein",
        tag: "Hindi Guide",
        desc: "चेक बाउंस के बाद 30 दिन में नोटिस, 15 दिन भुगतान और 1 महीने में केस — धारा 138 की पूरी प्रक्रिया आसान हिंदी में।",
      },
      {
        title: "Cheque Bounce Notice Timeline (Sec 138 NI Act): 30 + 15 Day Rule",
        href: "/cheque-bounce-notice-timeline-section-138",
        tag: "Section 138",
        desc: "Exact statutory deadlines from bank return memo to 15-day demand notice and court filing.",
      },
      {
        title: "Multiple Cheque Bounce Cases from Same Transaction (Joint Trial)",
        href: "/multiple-cheque-bounce-cases-same-transaction",
        tag: "Multiple Cheques",
        desc: "Send a single consolidated Section 138 notice and club multiple bounced cheques under Sec 219.",
      },
      {
        title: "Recover Fraudulent UPI, Credit Card & SIM Swap Transaction Amount",
        href: "/recovery/fraud-transaction-amount",
        tag: "RBI Zero Liability",
        desc: "Enforce 10-day shadow credit reversal under the RBI Limited Liability Circular.",
      },
      {
        title: "Unauthorized Bank Charges, Penal Interest & Lien Removal",
        href: "/recovery/unauthorized-bank-deduction",
        tag: "Bank Dispute",
        desc: "Remove wrongful account freezes/liens and recover illegal bank deductions via RBI Ombudsman.",
      },
      {
        title: "Bounced Post-Dated Cheque (PDC) & Security Cheque Recovery",
        href: "/recovery/post-dated-cheque-amount",
        tag: "PDC Recovery",
        desc: "Enforce dishonoured security cheques and claim 20% interim compensation under Section 143A.",
      },
    ],
  },
  itSaas: {
    heading: "Related IT Services, SaaS, IP Copyright & Export Recovery Guides",
    items: [
      {
        title: "Clearing Aged Shipping Bills in RBI EDPMS: Write-Off & Caution-List Guide",
        href: "/rbi-edpms-unrealized-shipping-bill-write-off-caution-list-legal-notice",
        tag: "RBI EDPMS & FEMA",
        desc: "Satisfy AD-Bank Para C.23 'futile recovery / disproportionate cost' write-off norms and clear EDPMS Caution-Listing with formal Advocate Legal Notices.",
      },
      {
        title: "RBI FEMA 9-Month Export & SOFTEX Realization Deadline Calculator",
        href: "/tools/softex-fema-export-realization-deadline-calculator",
        tag: "FEMA & SOFTEX Tool",
        desc: "Calculate 9-month RBI EDPMS realization deadlines, 5% vs 10% AD-Bank self write-off caps, Form ETX extension dates & mandatory legal notice proof.",
      },
      {
        title: "Withholding Source Code vs 'Kill-Switch' Liability (IT Act s.43/66)",
        href: "/source-code-escrow-ip-withholding-clause-unpaid-it-invoices",
        tag: "IP Lien & Escrow",
        desc: "Lawful Git repository retention and staging suspension vs criminal kill-switch and database wiping liabilities under IT Act Sections 43 & 66.",
      },
      {
        title: "Client Poached Deployed Developer? Non-Solicitation Buyout Fee Recovery",
        href: "/client-poached-deployed-developer-non-solicitation-fee-recovery",
        tag: "Non-Solicitation Buyout",
        desc: "Enforce B2B recruitment conversion buyout fees (Contract Act s.74) when clients secretly hire your deployed engineers without triggering Section 27.",
      },
      {
        title: "US, UK & UAE Client Unpaid Software Invoice Recovery & SOFTEX Write-Off",
        href: "/us-uk-uae-client-unpaid-software-invoice-softex-fema-recovery",
        tag: "Cross-Border & SOFTEX",
        desc: "Solve offshore defaults on US LLCs, UK Ltds & UAE firms while serving statutory legal demand notices to clear open STPI SOFTEX bills in RBI EDPMS.",
      },
      {
        title: "ERP & CRM Implementation Milestone Dispute & Stalled Go-Live Recovery",
        href: "/erp-sap-oracle-salesforce-implementation-milestone-dispute-recovery",
        tag: "ERP & CRM Recovery",
        desc: "Overcome client legacy master-data delays, enforce Contract Act s.53/54 reciprocal promises, recover unapproved CR logs & execute Commercial s.12A.",
      },
      {
        title: "Software UAT Sign-Off Stalls, Scope Creep & Milestone Debt Recovery",
        href: "/software-uat-sign-off-delay-scope-creep-milestone-payment-recovery",
        tag: "UAT & Milestones",
        desc: "Enforce Deemed Acceptance via live traffic, Copyright Act s.19 IP liens, Contract Act s.70 scope creep segregation, and Order 37 summary suits.",
      },
      {
        title: "Enterprise Receivables & Contract Recovery for IT Services, B2B SaaS, ERP Implementers & Cloud Resellers",
        href: "/industries/it-saas-software-recovery",
        tag: "IND-05 Tech Hub",
        desc: "B2B creditor hub covering Copyright s.17/19 IP liens, Commercial Courts s.12A, Microsoft NCE cloud defaults, UAT stalls & STPI SOFTEX closure.",
      },
      {
        title: "IT Staff Augmentation & C2C Vendor Unpaid Invoice Recovery",
        href: "/it-staff-augmentation-dedicated-developer-monthly-invoice-recovery",
        tag: "Staff Aug & C2C",
        desc: "Overcome Tier-1 'Pay-When-Paid' back-to-back excuses using Jira timesheets, MSMED Act 45-day rules, Section 43B(h), and Order 37 summary suits.",
      },
      {
        title: "Legal Notice to International Client: Unpaid Invoices",
        href: "/legal-notice-to-international-client-unpaid-invoice-recovery",
        tag: "Cross-Border",
        desc: "Recover unpaid USD/GBP/EUR invoices from foreign tech buyers via cross-border legal demand notices and jurisdiction mapping.",
      },
      {
        title: "Unpaid Freelancer? Use Copyright Law as Leverage (Sec 19)",
        href: "/copyright-not-transferred-until-paid-freelancer",
        tag: "Copyright s.17/19",
        desc: "How Section 17 first ownership and Pine Labs Section 19 rules keep software copyright with the developer until full payment.",
      },
      {
        title: "Client Not Paying for Web Development? Legal Notice",
        href: "/web-development-client-not-paying-legal-notice",
        tag: "Software & Web",
        desc: "Section 19 Copyright lever, MSME 3x compound interest, host-level takedowns, and advocate demand notice for agencies.",
      },
      {
        title: "Section 43B(h): The MSME 45-Day Payment Rule for Buyers",
        href: "/law/section-43bh-msme-payment-rule",
        tag: "Sec 43B(h) Tax Rule",
        desc: "Enforce 15/45-day payment limits and March 31 buyer expense disallowance leverage for Udyam Micro & Small IT suppliers.",
      },
      {
        title: "Order XXXVII Summary Suit: The Fast Civil Route to Recover Money",
        href: "/law/order-37-summary-suit-money-recovery",
        tag: "Order 37 CPC",
        desc: "Fast-track money recovery on signed MSAs, written contracts, accepted invoices, and dishonoured cheques.",
      },
      {
        title: "Recover Unpaid Consultancy Fees & Retainers",
        href: "/recovery/consultancy-fees",
        tag: "Retainers & SOW",
        desc: "Enforce written consulting retainers, Section 70 quantum meruit claims, and advocate legal notices.",
      },
    ],
  },
  general: {
    heading: "Essential Money Recovery Laws, Timelines & Legal Notice Guides",
    items: [
      {
        title: "लीगल नोटिस कैसे भेजें: ऑनलाइन, ईमेल, व्हाट्सऐप और डाक से",
        href: "/hi/legal-notice-kaise-bheje",
        tag: "Hindi Guide",
        desc: "कंपनी, दोस्त या मकान मालिक को कानूनी नोटिस भेजने की पूरी प्रक्रिया, खर्च, वैध धाराएं और समय सीमा।",
      },
      {
        title: "Legal Notice Charges in India (2026): What It Costs",
        href: "/legal-notice-charges",
        tag: "Pricing Guide",
        desc: "Transparent breakdown of legal notice costs by dispute type, city, advocate vs platform fees, and postal charges.",
      },
      {
        title: "Client Not Paying for Web Development? Legal Notice",
        href: "/web-development-client-not-paying-legal-notice",
        tag: "Web & Software IP",
        desc: "Section 19 Copyright lever, MSME 3× compound interest, host-level DMCA takedowns, and legal notice for unpaid software developers.",
      },
      {
        title: "Upwork or Fiverr Client Not Paying? Options From India",
        href: "/upwork-fiverr-client-not-paying-india",
        tag: "Freelance & Agency",
        desc: "Platform escrow dispute rules, off-platform contract recovery, Section 19 copyright leverage, and legal notices for Indian freelancers.",
      },
      {
        title: "Unpaid Freelancer? Use Copyright Law as Leverage (Sec 19)",
        href: "/copyright-not-transferred-until-paid-freelancer",
        tag: "Freelancer IP",
        desc: "Why copyright never transfers to an unpaid client without a signed Section 19 assignment, and how to use takedowns to get paid.",
      },
      {
        title: "Brand or Agency Not Paying for Your Collaboration? Recover It",
        href: "/influencer-brand-deal-payment-not-received",
        tag: "Creator & Influencer",
        desc: "Recover delayed brand deal and influencer agency payouts: joint Brand-Agency notice, Copyright Sec 19 takedown, MSME 45-day rule & TDS proof.",
      },
      {
        title: "MSME Delayed Payment Demand Notice Format (With Interest)",
        href: "/templates/msme-delayed-payment-demand-notice",
        tag: "MSME Demand Notice",
        desc: "Copy-ready Udyam demand notice formats citing Sections 15–16 (3× RBI bank rate) & Sec 43B(h) tax disallowance, plus Sec 18 affidavit.",
      },
      {
        title: "Subcontractor Left Unpaid: Recovering From the Main Contractor",
        href: "/subcontractor-payment-recovery-india",
        tag: "Subcontractor Recovery",
        desc: "Defeat back-to-back / pay-when-paid clauses, recover retention money & RA bills via MSME ODR, Sec 43B(h), and arbitration.",
      },
      {
        title: "BNS 318 Cheating vs Civil Dispute: When Police Act",
        href: "/law/bns-318-cheating-vs-civil-dispute",
        tag: "BNS 318 / Cheating",
        desc: "Distinguish criminal cheating from civil loan default, dishonest intent from inception, and police complaint vs summary suit.",
      },
            {
        title: "3-Year Limit Expired? Acknowledgment & Part-Payment",
        href: "/limitation-extended-by-acknowledgment-part-payment",
        tag: "Limitation Act",
        desc: "How WhatsApp acknowledgments under Section 18 and part-payments under Section 19 restart the 3-year limitation clock.",
      },
{
        title: "Chit Fund or Kitty Party Money Not Returned? Legal Steps",
        href: "/chit-fund-kitty-party-money-not-returned",
        tag: "Chit & Kitty Default",
        desc: "Recover defaulted committee or chit money: BNS 316/318 breach of trust FIRs, BUDS Act property attachment, and Order 37 summary suits.",
      },
      {
        title: "Order XXXVII Summary Suit: The Fast Civil Route to Recover Money",
        href: "/law/order-37-summary-suit-money-recovery",
        tag: "Order 37 CPC",
        desc: "Fast-track money recovery under Order XXXVII CPC for promissory notes, cheques and written debt with 10-day leave to defend rule.",
      },
      {
        title: "Is a UPI Transfer Proof of a Loan? Evidence Explained",
        href: "/upi-transfer-as-proof-of-loan",
        tag: "UPI Loan Evidence",
        desc: "How courts treat Google Pay, PhonePe and bank transfers without an agreement, Section 63 BSA rules and Order 37 summary suits.",
      },
      {
        title: "Borrower Left India? How to Recover a Loan From Someone Abroad",
        href: "/recover-money-from-friend-living-abroad",
        tag: "Overseas Loan",
        desc: "Section 20 CPC Indian jurisdiction, Section 15(5) limitation pause, overseas notice service and Section 44A decree execution.",
      },
      {
        title: "Recover Money From Ex-Boyfriend or Girlfriend Legally",
        href: "/recover-money-from-ex-boyfriend-girlfriend",
        tag: "Ex-Partner Loan",
        desc: "Overturn gift claims, use WhatsApp & UPI proof under BSA 2023, and serve a 15-day statutory demand notice.",
      },
      {
        title: "Time Limit to File Money Recovery Case in India (3-Year Rule)",
        href: "/time-limit-to-file-money-recovery-case-india",
        tag: "Limitation Act",
        desc: "Learn the 3-year statutory limit, how UPI/WhatsApp restarts the clock & court timelines.",
      },
      {
        title: "What Happens If a Legal Notice Is Ignored or Refused in India?",
        href: "/what-to-do-if-legal-notice-is-ignored-india",
        tag: "Ignored Notice",
        desc: "Why refusing delivery counts as valid 'Deemed Service' under Section 27 and next court steps.",
      },
      {
        title: "How to Recover Money Lent Without a Written Agreement",
        href: "/how-to-recover-money-without-written-agreement",
        tag: "No Agreement",
        desc: "Use UPI transfers, bank statements, and WhatsApp chats under Section 10 Contract Act.",
      },
      {
        title: "Can WhatsApp Chat Be Used as Evidence in a Money Recovery Case?",
        href: "/can-whatsapp-chat-be-used-as-evidence-in-money-recovery-case",
        tag: "Sec 63 BSA / 65B",
        desc: "How WhatsApp messages, voice notes, and blue ticks prove debt in Indian courts.",
      },
      {
        title: "Legal Notice to Recover Friendly Loan from Friend or Relative",
        href: "/legal-notice-to-recovery-my-loan-from-friend",
        tag: "Friendly Loan",
        desc: "Draft and serve an Advocate Legal Notice to recover personal loans within 15 days.",
      },
      {
        title: "MSME ODR Portal Step by Step: From Registration to Award",
        href: "/msme-odr-portal-delayed-payment-guide",
        tag: "MSME ODR Guide",
        desc: "How to file a delayed-payment reference on the MSME ODR portal: eligibility, mediation, arbitration & enforcing the award.",
      },
      {
        title: "Distributor or Dealer Not Paying Dues? Legal Recovery",
        href: "/distributor-dealer-dues-recovery",
        tag: "Channel Recovery",
        desc: "Recover stuck distributor and dealer balances via signed ledger confirmations, security cheques (Sec 138), and MSME 3x interest.",
      },
      {
        title: "Section 80 CPC Notice to Government & PSUs: Rules & Format",
        href: "/law/section-80-cpc-notice-to-government",
        tag: "Section 80 CPC",
        desc: "Mandatory 2-month statutory notice before suing Central/State Government departments, Railways, or public officers for pending bills.",
      },
      {
        title: "MSME Delayed Payment Interest Calculator (3x Bank Rate)",
        href: "/tools/msme-delayed-payment-interest-calculator",
        tag: "MSME Tool",
        desc: "Calculate Section 16 monthly compound interest at 3x RBI Bank Rate with a downloadable CSV claim sheet.",
      },
      {
        title: "MSME Samadhaan Portal vs Legal Notice (45-Day Rule & 3x Interest)",
        href: "/msme-delayed-payment-recovery-samadhan-vs-legal-notice",
        tag: "MSME / B2B",
        desc: "Recover unpaid B2B invoices with 3x RBI compound interest under Section 16 MSMED Act.",
      },
      {
        title: "Section 43B(h): The MSME 45-Day Payment Rule for Buyers",
        href: "/law/section-43bh-msme-payment-rule",
        tag: "Sec 43B(h) Tax Rule",
        desc: "How Section 43B(h) disallows unpaid MSE invoices past 15/45 days and how suppliers use it as legal notice leverage.",
      },
      {
        title: "Exporters & Cross-Border Trade Debt Recovery (FEMA & ECGC)",
        href: "/industries/exporters-cross-border-trade-recovery",
        tag: "IND-15 Pillar Hub",
        desc: "International buyer default recovery, ECGC claim compliance, RBI EDPMS write-off & Customs Drawback Rule 18(2) shield.",
      },
      {
        title: "India Export Payment Defaults & EDPMS Report (2026–27)",
        href: "/reports/indian-exporter-payment-defaults-edpms-trends-report",
        tag: "IND-15 Benchmark Report",
        desc: "Empirical study for FIEO, EEPC, APEDA & AEPC exporters on CAD/DA/Open Account default risk, BEC fraud & Para C.24 EDPMS closure.",
      },
      {
        title: "Pharma, Medical Device & Surgical Distributor Debt Recovery",
        href: "/industries/pharma-medical-devices-recovery",
        tag: "B2B Pharma Hub",
        desc: "Institutional recovery for pharma super-stockists, cath-lab/ortho implant consignments, medical equipment EMIs & CDMO units.",
      },
      {
        title: "Logistics, 3PL, Transporter & Freight Debt Recovery",
        href: "/industries/logistics-freight-3pl-recovery",
        tag: "IND-09 Logistics Hub",
        desc: "Recover unpaid FTL/PTL freight ledgers, GPS-proven truck halting, CHA ICEGATE duty advances & 3PL storage arrears under s.170/222.",
      },
      {
        title: "How to Recover Money Without Going to Court in India",
        href: "/how-to-recover-money-without-going-to-court-india",
        tag: "Out-of-Court",
        desc: "Pre-litigation recovery via Advocate Legal Notice, Statutory Ombudsmen & ODR.",
      },
    ],
  },
  healthcareB2B: {
    heading: "Related Healthcare RCM, Statutory Notice & Institutional Recovery Guides",
    items: [
      {
        title: "The 2026–2027 Indian Hospital Receivables & TPA/CGHS Delay Index: DSO Benchmarks Across Private Healthcare",
        href: "/reports/healthcare-tpa-settlement-delay-hospital-receivables-india",
        tag: "Healthcare DSO Report",
        desc: "Empirical benchmark study of DSO, arbitrary TPA deductions (14.8%), CGHS arrears (218d), and IRDAI Bank Rate + 2% penal interest.",
      },
      {
        title: "Abandoned Long-Stay Patient & Unpaid ICU Bill: Hospital Protocol",
        href: "/hospital-long-stay-patient-abandonment-unpaid-bill-legal-protocol",
        tag: "Patient Abandonment",
        desc: "Police/DM intimation protocol, safe Govt hospital transfer, Section 24 Senior Citizens Act arrest levers, and Order XXXVII summary recovery.",
      },
      {
        title: "Home Healthcare, Home-ICU & Eldercare Unpaid Bill Recovery",
        href: "/home-healthcare-icu-at-home-eldercare-unpaid-billing-recovery",
        tag: "Home Healthcare",
        desc: "Recover 24x7 ICU shift arrears, unreturned ventilators under BNS s.316, and enforce child support on overseas NRI sponsors.",
      },
      {
        title: "Prosecuting Discharge Cheque Bounce & Stop Payment (s.138)",
        href: "/patient-cheque-bounce-stop-payment-at-hospital-discharge-section-138",
        tag: "Discharge Cheque",
        desc: "Prosecute patient and third-party relative dishonoured cheques under s.138, defeat coercion defenses, and secure 20% s.143A interim deposit.",
      },
      {
        title: "Visiting Consultant Doctor Unpaid Fee & Retainer Recovery",
        href: "/visiting-consultant-doctor-unpaid-professional-fee-from-hospital",
        tag: "Doctor Fee Recovery",
        desc: "Recover withheld surgical shares & retainers using Form 26AS Section 194J TDS admissions and CPC Order 37.",
      },
      {
        title: "Diagnostic Lab & Pathology Franchise B2B Dues Recovery",
        href: "/diagnostic-lab-pathology-collection-center-b2b-dues-recovery",
        tag: "Diagnostic Lab Recovery",
        desc: "Recover overdue B2B lab dues from defaulting PCC collection centers and nursing homes under Commercial Courts & NI Act.",
      },
      {
        title: "Ethical, Article-21 Compliant Debt & Claim Recovery for Hospitals, Doctors, Clinics & Diagnostic Chains",
        href: "/industries/hospitals-doctors-healthcare-recovery",
        tag: "IND-03 Healthcare Hub",
        desc: "Article-21 safe post-discharge undertakings, IRDAI Bank Rate + 2% TPA claims, CGHS s.80 notices, and B2B lab recovery.",
      },
      {
        title: "Promissory Note Format India (Advocate-Drafted Template)",
        href: "/templates/promissory-note-format-india",
        tag: "Promissory Note",
        desc: "Enforceable Section 4 NI Act promissory note structure adaptable for attendant co-guarantors and commercial credit.",
      },
      {
        title: "Section 80 CPC Notice to Government & PSUs: Rules & Format",
        href: "/law/section-80-cpc-notice-to-government",
        tag: "Section 80 CPC",
        desc: "Mandatory 60-day statutory notice before suing Central/State Ministries, CGHS, ECHS, or NHM agencies.",
      },
      {
        title: "Cheque Bounce Notice Timeline (Sec 138 NI Act): 30 + 15 Day Rule",
        href: "/cheque-bounce-notice-timeline-section-138",
        tag: "Section 138",
        desc: "Strict 30+15+30 day prosecution clock for dishonoured discharge cheques and diagnostic franchisee PDCs.",
      },
      {
        title: "Order XXXVII Summary Suit: The Fast Civil Route to Recover Money",
        href: "/law/order-37-summary-suit-money-recovery",
        tag: "Order 37 CPC",
        desc: "Fast-track civil recovery on written discharge undertakings, corporate credit letters, and Form 26AS 194J fees.",
      },
      {
        title: "CRO & NABL Testing Lab Debt Recovery: Failed BA/BE & Sample Specs",
        href: "/clinical-research-cro-testing-laboratory-nabl-unpaid-invoice-recovery",
        tag: "CRO & Lab Recovery",
        desc: "Enforce ISO 17025 scientific neutrality, hold final study reports, and recover unpaid trial milestones via Order XXXVII CPC.",
      },
      {
        title: "Bulk Recovery Cases All-in-One Affordable Solutions",
        href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
        tag: "CSV Batch Desk",
        desc: "Onboard 10 to 10,000+ aged TPA, corporate OHC, and patient receivables via tri-channel advocate dispatch.",
      },
    ],
  },
  construction: {
    heading: "Related Construction, EPC, Subcontractor & Government Recovery Guides",
    items: [
      {
        title: "Tiles, Sanitaryware, Glass, Plywood & Lift Builder Recovery",
        href: "/tiles-sanitaryware-plywood-glass-electricals-project-supply-recovery",
        tag: "IND-14 Finishing Supply",
        desc: "Escape mortgaged barter-flat traps via CERSAI/RERA audits and recover cash through MSMED Act s.15-18, Order XXXVII CPC & NI s.138.",
      },
      {
        title: "Construction Retention Money & DLP Interest Calculator",
        href: "/tools/construction-retention-dlp-escalation-claim-calculator",
        tag: "Interactive Tool",
        desc: "Compute split 3-year limitation clocks under Arts. 18 & 113, 18% statutory interest, and Commercial Courts Specified Value for retention releases.",
      },
      {
        title: "Enforcing Unpaid Arbitral Awards (s.36): 100% Deposit & IBC Leverage",
        href: "/executing-arbitral-award-section-36-against-developer-psu-india",
        tag: "Section 36 Execution",
        desc: "Section 34 filing gives no automatic stay. Enforce Section 36 execution, compel 100% court deposit, invoke NITI Aayog 75% PSU payout rules, or trigger IBC.",
      },
      {
        title: "Construction Prolongation, Idle Plant & Extra-Item Claims Guide",
        href: "/construction-price-escalation-extra-items-prolongation-claim-recovery",
        tag: "Prolongation Claims",
        desc: "Overcome 'No-Damages-for-Delay' clauses, enforce Section 55 ICA reservation notices, and quantify Hudson/Eichleay overheads & extra items.",
      },
      {
        title: "Section 21 Arbitration Notice: EPC & Commercial Invocation Checklist",
        href: "/section-21-arbitration-invocation-notice-construction-epc-guide",
        tag: "Arbitration Act s.21",
        desc: "Draft & serve a defect-free Section 21 notice under BSNL v. Nortel Networks 3-year limitation rules, bypass stalled pre-arbitral tiers & defeat captive PSU panels.",
      },
      {
        title: "Defeating 'Pay-When-Paid' & Back-to-Back Clauses in Subcontracts",
        href: "/pay-when-paid-back-to-back-clause-subcontractor-recovery-india",
        tag: "Subcontractor Law",
        desc: "Defeat abusive back-to-back payment terms under Indian Contract Act s.23/46, enforce the Prevention Doctrine & attach employer dues via garnishee orders.",
      },
      {
        title: "Countering Arbitrary 10% LD Deductions & Risk-and-Cost Terminations",
        href: "/wrongful-liquidated-damages-ld-termination-works-contract-remedy",
        tag: "LD & Termination Remedy",
        desc: "Reverse arbitrary 10% LD set-offs under Supreme Court Kailash Nath actual-loss rules, rebut illegal risk-and-cost terminations & protect bank guarantees.",
      },
      {
        title: "Post-DLP Retention Money Withheld? Contractor Legal Recovery Guide",
        href: "/retention-money-recovery-after-defect-liability-period-dlp-expiry",
        tag: "Retention Recovery",
        desc: "Recover 5%–10% retention money post-DLP expiry. Enforce Virtual Completion, counter fake snag lists under Contract Act s.73/74 & claim 18% interest.",
      },
      {
        title: "Why MSEFC Rejects Works Contracts & How Contractors Win",
        href: "/works-contract-excluded-from-msme-samadhaan-contractor-alternatives",
        tag: "Works Contract Law",
        desc: "Overcome MSEFC jurisdiction bars under Shree Gee & Sterling and Wilson via split supply POs, Commercial Courts & arbitration.",
      },
      {
        title: "Employer Refusing to Certify RA Bills? Contractor Recovery Guide",
        href: "/unpaid-ra-bills-uncertified-measurement-book-contractor-recovery",
        tag: "Uncertified RA Bills",
        desc: "Overcome PMC measurement stalling, invoke deemed certification, and repudiate coerced No-Claim Certificates under Supreme Court Kalathia rules.",
      },
      {
        title: "Construction, EPC & MEP Contractor Bill & Retention Recovery",
        href: "/industries/construction-epc-contractor-recovery",
        tag: "IND-07 EPC Hub",
        desc: "Recover uncertified RA bills, post-DLP retention money, extra-item claims & PSU dues with Section 9 PBG protection.",
      },
      {
        title: "Subcontractor Left Unpaid: Recovering From the Main Contractor",
        href: "/subcontractor-payment-recovery-india",
        tag: "Subcontractor Recovery",
        desc: "Defeat back-to-back / pay-when-paid clauses, recover retention money & RA bills via MSME ODR, Sec 43B(h), and arbitration.",
      },
      {
        title: "Recover Contractor Payments & Project Dues in India",
        href: "/recovery/contractor-payment",
        tag: "Contractor Recovery",
        desc: "Actionable options across Order 37 CPC summary suits, MSME Samadhaan, Section 138 cheques, and NCLT Section 9.",
      },
      {
        title: "Section 80 CPC Notice to Government & PSUs: Rules & Format",
        href: "/law/section-80-cpc-notice-to-government",
        tag: "Section 80 CPC",
        desc: "Mandatory 60-day statutory notice before suing Central/State Government departments, Railways, or public officers for pending bills.",
      },
      {
        title: "Order XXXVII Summary Suit: The Fast Civil Route to Recover Money",
        href: "/law/order-37-summary-suit-money-recovery",
        tag: "Order 37 CPC",
        desc: "Fast-track money recovery under Order XXXVII CPC for certified bills, cheques, and written contracts with 10-day leave to defend.",
      },
      {
        title: "Bulk Recovery Cases: All-in-One Institutional Solutions",
        href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
        tag: "Multi-Site CSV Desk",
        desc: "Batch notice onboarding and centralized reply triage for EPC SPVs, suppliers, and commercial recovery teams.",
      },
    ],
  },
  manufacturingB2B: {
    heading: "Related Manufacturing, OEM, MSME & Industrial Recovery Guides",
    items: [
      {
        title: "TMT & Structural Steel Trader Credit Default Recovery",
        href: "/tmt-steel-structural-iron-trader-credit-default-recovery-india",
        tag: "IND-14 Steel Playbook",
        desc: "Recover unpaid TMT, structural & HR coil steel bills using Dharamkanta slips, MTC proof, Order 37, Order 38 r.5 & NI Act s.138.",
      },
      {
        title: "Textile & Garment Buyer + Broker Joint Legal Notice Format",
        href: "/templates/textile-garment-buyer-and-broker-joint-demand-legal-notice",
        tag: "Notice Template",
        desc: "Editable demand notice serving Buyer (Noticee #1) & Introducing Broker / Adatiya (Noticee #2) with Bijak/LR schedule & s.43B(h).",
      },
      {
        title: "कपड़ा व्यापारी व गारमेंट उधार वसूली गाइड (Surat, Bhiwandi, Tirupur)",
        href: "/hi/kapda-vyapari-textile-garment-udhar-vasooli-legal-notice",
        tag: "Textile Hindi Guide",
        desc: "दलाल/पार्टी से फंसा कपड़ा पेमेंट कैसे वसूलें? MSME 45-दिन नियम, धारा 43B(h), Del Credere दलाल दायित्व व ₹999 नोटिस।",
      },
      {
        title: "फैक्ट्री व MSME व्यापारिक पेमेंट (GST बिल) रिकवरी गाइड",
        href: "/hi/factory-msme-b2b-udhar-bill-recovery-legal-notice",
        tag: "MSME B2B Bill Recovery",
        desc: "फैक्ट्री और कारखाने का फंसा हुआ GST बिल कानूनन कैसे वसूलें? 45-दिन नियम, धारा 43B(h) और ₹999 एडवोकेट लीगल नोटिस।",
      },
      {
        title: "Channel Credit Recovery for Industrial OEMs: Dealer Default & BG Enforcement",
        href: "/industrial-dealer-oem-authorized-distributor-credit-default-recovery",
        tag: "Dealer Credit Recovery",
        desc: "Enforce bank guarantees, contractual deposit set-off, Section 138 NI Act notices, and dealership terminations for industrial equipment OEMs.",
      },
      {
        title: "Buyer Cancelled Custom PO Mid-Manufacturing? Recover WIP & Profit",
        href: "/purchase-order-cancelled-mid-production-bespoke-goods-recovery",
        tag: "Bespoke PO Cancelled",
        desc: "Recover 100% of raw material plates and WIP plus 15% loss-of-profit under Section 39 & 73 ICA (*A.T. Brij Paul Singh* SC rule).",
      },
      {
        title: "Wrongful Performance Bank Guarantee (PBG) Invocation: Section 9 Injunction & Restitution",
        href: "/wrongful-performance-bank-guarantee-pbg-invocation-stay-recovery",
        tag: "PBG Injunction & Stay",
        desc: "Stay abusive PBG encashment under Section 9 egregious fraud/special equities and enforce Section 144 CPC restitution with 18% penal interest.",
      },
      {
        title: "Medium Enterprises Excluded from MSME Samadhaan: 4 Faster Legal Routes",
        href: "/medium-enterprise-udyam-excluded-from-msme-samadhaan-recovery-options",
        tag: "Medium Udyam Debt",
        desc: "Overcome Section 2(n) and 43B(h) exclusions for ₹50–250 Cr units via Order 37, Commercial Courts s.12A & IBC.",
      },
      {
        title: "Manufacturing, Machinery & OEM Supplier Debt Recovery India",
        href: "/industries/manufacturing-machinery-oem-recovery",
        tag: "IND-06 OEM Hub",
        desc: "Recover withheld commissioning balances, arbitrary OEM debit notes, cancelled tooling costs & CNC job-work dues.",
      },
      {
        title: "MSME Delayed Payment Interest Calculator (3x Bank Rate)",
        href: "/tools/msme-delayed-payment-interest-calculator",
        tag: "MSME Sec 16 Tool",
        desc: "Calculate Section 16 monthly compound interest at 3x RBI Bank Rate with a downloadable CSV claim sheet.",
      },
      {
        title: "Section 43B(h): The MSME 45-Day Payment Rule for Buyers",
        href: "/law/section-43bh-msme-payment-rule",
        tag: "Sec 43B(h) Tax Rule",
        desc: "How Section 43B(h) disallows unpaid MSE invoices past 15/45 days and creates year-end tax audit leverage.",
      },
      {
        title: "MSME Samadhaan Portal vs Legal Notice (45-Day Rule & 3x Interest)",
        href: "/msme-delayed-payment-recovery-samadhan-vs-legal-notice",
        tag: "MSME / ODR",
        desc: "Compare MSEFC statutory conciliation vs advocate legal notices for OEM and industrial invoice recovery.",
      },
      {
        title: "Order XXXVII Summary Suit: The Fast Civil Route to Recover Money",
        href: "/law/order-37-summary-suit-money-recovery",
        tag: "Order 37 CPC",
        desc: "Fast-track civil recovery for Medium enterprises, e-Way bills, signed LR proofs, and confirmed buyer ledgers.",
      },
      {
        title: "Bulk Recovery Cases: All-in-One Institutional Solutions",
        href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
        tag: "Multi-Buyer CSV Desk",
        desc: "Dispatch 10 to 10,000+ tri-channel advocate notices for industrial dealers, job-work buyers & OEM ledgers.",
      },
    ],
  },
  commercialProperty: {
    heading: "Related Real Estate Promoter, Commercial Lease & Bulk Recovery Guides",
    items: [
      {
        title: "JDA Revenue-Share Default Recovery & Escrow Enforcement",
        href: "/joint-development-agreement-jda-revenue-share-default-recovery",
        tag: "JDA Revenue Recovery",
        desc: "Enforce RERA Section 4(2)(l)(D) 70% project escrow audits and freeze unsold developer units under Section 9 arbitration.",
      },
      {
        title: "Mall & IT Park CAM, Chiller & DG Power Arrears Recovery",
        href: "/commercial-it-park-mall-cam-common-area-maintenance-arrears-recovery",
        tag: "CAM & HVAC Recovery",
        desc: "Enforce State Apartment Ownership Acts non-waiver covenants, lawful utility cutoffs, and Order XXXVII CPC recovery.",
      },
      {
        title: "Tenant Deducted 10% Rent TDS (194-I) & Didn't Deposit? Fix",
        href: "/commercial-tenant-deducted-tds-194i-not-deposited-form-26as-recovery",
        tag: "194-I TDS Recovery",
        desc: "Section 205 landlord immunity shield and Section 276B criminal prosecution legal notice against corporate tenants pocketing rent TDS.",
      },
      {
        title: "Post-OC Allottee Refusing Possession & CAM: RERA s.19(10)",
        href: "/builder-society-handover-ifms-corpus-maintenance-arrears-allottee-recovery",
        tag: "Post-OC Possession",
        desc: "Enforce RERA Section 19(10) 2-month possession deadline, holding charges, CAM arrears, IFMS corpus and pre-RWA handover deficits.",
      },
      {
        title: "RERA Section 19(6)–(7): Recovering Allottee Milestone Dues",
        href: "/rera-section-19-builder-recovery-from-defaulting-homebuyer-allottee",
        tag: "RERA Builder Rights",
        desc: "Promoter statutory rights under RERA s.19(6), 19(7), and 11(5) to recover slab defaults and execute lawful cancellations.",
      },
      {
        title: "Industrial Warehouse, 3PL Shed & Factory Lease Recovery",
        href: "/industrial-warehouse-3pl-shed-lease-rent-dilapidation-recovery",
        tag: "Warehouse Dilapidations",
        desc: "Recover Grade-A warehouse rent, FM2/VDF floor restoration, DISCOM HT power arrears, and toxic waste cleanup costs.",
      },
      {
        title: "Builders, Landlords & Co-Working Debt Recovery India",
        href: "/industries/builders-commercial-landlords-coworking-recovery",
        tag: "IND-08 Property Hub",
        desc: "Multi-track creditor hub covering RERA s.19(6)–(10) allottee dues, commercial lock-in breaches, CAM/HVAC arrears, 194-I TDS, and co-working licenses.",
      },
      {
        title: "Commercial Lease Section 106 Termination & Lock-In Notice (Format)",
        href: "/templates/commercial-lease-lock-in-breach-section-106-termination-notice",
        tag: "TPA §106 Notice Format",
        desc: "Interactive commercial notice workspace for unpaid rent, 18% GST, CAM, uncredited 194-I TDS, lock-in CapEx clawback & double mesne profits.",
      },
      {
        title: "Legal Notice to Tenant for Unpaid Rent & Eviction (Guide)",
        href: "/legal-notice-to-tenant-for-unpaid-rent-eviction",
        tag: "TPA s.106 Eviction",
        desc: "Recover commercial/residential rent arrears and serve a 15-day Section 106 termination notice with mesne profits.",
      },
      {
        title: "Society Maintenance Recovery Notice Format (Free)",
        href: "/templates/society-maintenance-recovery-notice",
        tag: "Maintenance Notice",
        desc: "Annotated 15-day maintenance arrears recovery notice format for condominium boards, societies, and RWAs.",
      },
      {
        title: "Recover Money from Tenant Who Damaged Property",
        href: "/send-a-legal-notice/recover-money-from-tenant-who-damaged-property",
        tag: "Dilapidation Claim",
        desc: "Enforce restoration liability, security deposit set-offs, and damage recovery against defaulting occupiers.",
      },
      {
        title: "CRO & NABL Testing Lab Debt Recovery: Failed BA/BE & Sample Specs",
        href: "/clinical-research-cro-testing-laboratory-nabl-unpaid-invoice-recovery",
        tag: "CRO & Lab Recovery",
        desc: "Enforce ISO 17025 scientific neutrality, hold final study reports, and recover unpaid trial milestones via Order XXXVII CPC.",
      },
      {
        title: "Bulk Recovery Cases All-in-One Affordable Solutions",
        href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
        tag: "Bulk CSV Desk",
        desc: "Dispatch 10 to 10,000+ RERA cure notices, CAM arrears demands, or co-working default notices via Email, WhatsApp & RPAD.",
      },
      {
        title: "Commercial Lease Lock-In Breach: Recover Rent & Fit-Out Cost",
        href: "/commercial-lease-lock-in-period-breach-unexpired-rent-recovery",
        tag: "Lock-In Breach SOP",
        desc: "Recover actual vacancy loss, custom fit-out CapEx amortization, brokerage & rent-free clawbacks under Contract Act s.74.",
      },
      {
        title: "Online Dispute Resolution (ODR) India Platform",
        href: "/online-dispute-resolution-india",
        tag: "Institutional ODR",
        desc: "Fast-track neutral commercial arbitration and digital settlement for post-Vidya Drolia property and lease disputes.",
      },
    ],
  },
  logistics: {
    heading: "Related Logistics, Commercial Invoice & MSME Recovery Guides",
    items: [
      {
        title: "Transporter Freight, Halting & Carrier-Lien Legal Notice Format",
        href: "/templates/transporter-freight-detention-carrier-lien-legal-notice",
        tag: "P1 Template Pack",
        desc: "Advocate-vetted legal notice templates for overdue bilty freight, GPS halting claims, and Section 171 carrier lien intimation.",
      },
      {
        title: "ट्रांसपोर्ट भाड़ा व हॉल्टिंग वसूली लीगल गाइड (POD Bilty Recovery)",
        href: "/hi/transport-bilty-truck-bhada-recovery-legal-notice",
        tag: "Hindi Vyapari Guide",
        desc: "कैरिज बाय रोड एक्ट 2007, क्लीन POD, जीपीएस हॉल्टिंग व ₹999 एडवोकेट लीगल नोटिस से ट्रांसपोर्ट भाड़ा वसूली की संपूर्ण गाइड।",
      },
      {
        title: "Logistics, 3PL, Transporter & Freight Debt Recovery",
        href: "/industries/logistics-freight-3pl-recovery",
        tag: "IND-09 Logistics Hub",
        desc: "Pillar hub for transporters, 3PL warehouses, CHAs & freight forwarders covering Carrier Lien, halting & ICEGATE advances.",
      },
      {
        title: "Dedicated Fleet Minimum-Km Shortfall & Early Termination Recovery",
        href: "/dedicated-fleet-contract-minimum-km-guarantee-shortfall-recovery",
        tag: "Dedicated Fleet Lock-In",
        desc: "Enforce Section 73/74 fixed standing hire, minimum-km guarantees, and unamortized vehicle loan CapEx against defaulting shippers.",
      },
      {
        title: "Transit Damage & Shortage Debit Note Defense Guide",
        href: "/shipper-fake-transit-damage-shortage-debit-note-defense-transporter",
        tag: "Debit Note Defense",
        desc: "Defeat illegal damage deductions using Clean POD estoppel, Raman Iron set-off law, and Marine Insurance double-recovery bar.",
      },
      {
        title: "3PL Warehouse Storage Bills & Dead-Stock Lien Auction Guide",
        href: "/3pl-warehouse-storage-fulfillment-unpaid-bill-lien-auction-guide",
        tag: "3PL Warehouse Lien",
        desc: "Execute Section 170 bailee lien, statutory valuation, 15-day auction notice, and CPC Order 37 deficit recovery for abandoned dead stock.",
      },
      {
        title: "Reefer Cold-Chain Freight Recovery & Spoilage Defense",
        href: "/cold-chain-reefer-transport-unpaid-freight-spoilage-counterclaim",
        tag: "Reefer Freight Recovery",
        desc: "Defeat bogus spoilage debit notes and warm-loading claims using Carriage by Road Act s.10/12 exceptions and BSA s.63 telematics logs.",
      },
      {
        title: "Unpaid Business Invoices Legal Recovery Guide",
        href: "/recovery/unpaid-invoices",
        tag: "B2B Invoices",
        desc: "Recover overdue GST freight bills, signed Bilties, and commercial purchase-order balances across India.",
      },
      {
        title: "Order XXXVII Summary Suit: Fast Civil Recovery",
        href: "/law/order-37-summary-suit-money-recovery",
        tag: "Order 37 CPC",
        desc: "Convert written transport contracts, signed PODs, and confirmed ledgers into expedited court decrees.",
      },
      {
        title: "Bulk Recovery Cases: All-in-One Institutional Solutions",
        href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
        tag: "CSV Batch Desk",
        desc: "Onboard 10 to 10,000+ defaulting shippers, consignors, or negative courier seller wallets in bulk.",
      },
      {
        title: "MSME Delayed Payment Interest Calculator (3x Bank Rate)",
        href: "/tools/msme-delayed-payment-interest-calculator",
        tag: "Interactive Tool",
        desc: "Compute Section 16 monthly compound interest at 3x RBI Bank Rate and Section 43B(h) tax disallowance.",
      },
      {
        title: "Section 43B(h): The MSME 45-Day Payment Rule for Buyers",
        href: "/law/section-43bh-msme-payment-rule",
        tag: "Sec 43B(h) Tax Rule",
        desc: "Leverage March 31 Income-tax disallowance and Form 3CD audit reporting to unlock overdue freight payments.",
      },
      {
        title: "MSME Samadhaan Portal vs Legal Notice (45-Day Rule)",
        href: "/msme-delayed-payment-recovery-samadhan-vs-legal-notice",
        tag: "MSME / B2B",
        desc: "Compare MSEFC conciliation timelines against immediate advocate notices and Section 138 cheque remedies.",
      },
    ],
  },
  commercialB2B: {
    heading: "Related Pharma, Medical Device & B2B Creditor Recovery Guides",
    items: [
      {
        title: "Surgical Consumables, Disposables & Medical Gas Vendor Recovery",
        href: "/surgical-consumables-ppe-hospital-linen-vendor-payment-recovery",
        tag: "Surgical & Hospital Supply",
        desc: "Overcome 180-day hospital store GRN payment stalls using Section 43B(h) corporate tax disallowance notices and MSMED Act 3x compound interest.",
      },
      {
        title: "Pharma & Surgical Stockist Unpaid Ledger Legal Notice Format",
        href: "/templates/pharma-surgical-stockist-ledger-demand-legal-notice",
        tag: "Pharma Stockist Template",
        desc: "Advocate-vetted demand notice for pharma/surgical ledgers: Order XXXVII invoice schedule, Drug License Form 20B/21B lock & s.20 NI Act security cheque notice.",
      },
      {
        title: "Veterinary Pharma, AYUSH & Nutraceutical Distributor Recovery",
        href: "/veterinary-pharma-nutraceutical-ayurvedic-distributor-recovery",
        tag: "Vet & AYUSH Pharma",
        desc: "Recover rural veterinary dealer ledgers, AYUSH stockist arrears & private-label nutraceutical batch dues via MSME ODR and NI Act s.138.",
      },
      {
        title: "PCD Pharma Franchise Recovery & Territory Monopoly Revocation Playbook",
        href: "/pcd-pharma-franchise-monopoly-distributor-default-recovery",
        tag: "PCD Pharma Monopoly",
        desc: "Revoke district monopoly rights cleanly, enforce NI Act s.142(2) home-bank jurisdiction, and recover overdue credit ledgers & MR bags.",
      },
      {
        title: "Cold-Chain Vaccine & Biologics Temperature Dispute Recovery",
        href: "/cold-chain-vaccine-biologics-temperature-dispute-invoice-recovery",
        tag: "Cold-Chain Biologics",
        desc: "Rebut sham 2–8°C excursion claims using BSA 2023 s.63 calibrated data-logger certificates and Sale of Goods Act risk transfer.",
      },
      {
        title: "API, Bulk Drug & Excipient Manufacturer Debt Recovery",
        href: "/api-bulk-drug-chemical-intermediate-b2b-invoice-recovery",
        tag: "API & Bulk Drugs",
        desc: "Defeat late pharmacopoeia QC rejection pretexts using retention sample protocols, Order 37 suits & IBC Section 8 notices.",
      },
      {
        title: "Pharma Expiry & Breakage Credit-Note Dispute Recovery",
        href: "/pharma-expired-goods-breakage-credit-note-dispute-stockist-recovery",
        tag: "Pharma Stockist Recovery",
        desc: "Defeat arbitrary expired stock dumps and breakage debits under CGST s.34 cut-off, CBIC Circular 72 & contractual caps.",
      },
      {
        title: "State Medical Corp (UPMSCL/BMSICL/RMSCL) & GeM Tender Recovery",
        href: "/state-medical-services-corporation-hospital-tender-payment-recovery",
        tag: "State Tender Recovery",
        desc: "Overrule tender no-interest clauses via MSMED s.16 (Silpi Industries), enforce 10-day GeM CRAC, and secure Article 226 stays against blacklisting.",
      },
      {
        title: "Medical Equipment, Reagent & Hospital AMC/CMC Recovery",
        href: "/medical-equipment-hospital-supply-amc-cmc-payment-default-recovery",
        tag: "MedTech & AMC",
        desc: "Enforce Retention of Title (Sale of Goods Act s.25), PCPNDT ultrasound safe seizure rules & reagent-rental shortfall recovery.",
      },
      {
        title: "Cardiac Stent & Ortho Implant Consignment Dues Recovery",
        href: "/cardiac-stent-orthopedic-implant-hospital-consignment-dues-recovery",
        tag: "Hospital Consignment",
        desc: "Enforce Sale of Goods Act s.24 for unbilled stent & joint consumption in OT, OT barcode stickers & BNS s.316.",
      },
      {
        title: "Pharma, Medical Device & Surgical Distributor Debt Recovery",
        href: "/industries/pharma-medical-devices-recovery",
        tag: "IND-04 Pillar Hub",
        desc: "End-to-end commercial debt recovery for pharma companies, super-stockists, implant consignors, equipment lessors & CDMO units.",
      },
      {
        title: "Pharmacy & Chemist Overdue Invoice Legal Notice",
        href: "/send-a-legal-notice/pharmacy-invoice-not-cleared",
        tag: "Chemist Ledger",
        desc: "Draft statutory demand notices for unpaid pharma wholesale bills, post-dated cheque dishonour & credit-note disputes.",
      },
      {
        title: "Distributor & Dealer Dues Recovery Desk",
        href: "/distributor-dealer-dues-recovery",
        tag: "Channel Recovery",
        desc: "Recover unpaid stockist and C&F agency balances via ledger reconciliation, Sec 138 NI Act, and Commercial Courts.",
      },
      {
        title: "Section 43B(h): The MSME 45-Day Payment Rule for Buyers",
        href: "/law/section-43bh-msme-payment-rule",
        tag: "Tax & MSEFC",
        desc: "Invoke Income Tax Act s.43B(h) disallowance and MSMED Act s.16 3x RBI compound interest against non-MSME buyers.",
      },
      {
        title: "MSME Delayed Payment Compound Interest Calculator",
        href: "/tools/msme-delayed-payment-interest-calculator",
        tag: "3x RBI Tool",
        desc: "Compute statutory 3x RBI bank rate compound interest under MSMED Act Section 16 for delayed pharma & MedTech invoices.",
      },
      {
        title: "Order 37 Summary Suit for Liquidated Invoice Recovery",
        href: "/law/order-37-summary-suit-money-recovery",
        tag: "Order 37 CPC",
        desc: "Fast-track admitted GST invoices, signed delivery challans, and hospital POs without a full-length civil trial.",
      },
      {
        title: "CRO & NABL Testing Lab Debt Recovery: Failed BA/BE & Sample Specs",
        href: "/clinical-research-cro-testing-laboratory-nabl-unpaid-invoice-recovery",
        tag: "CRO & Lab Recovery",
        desc: "Enforce ISO 17025 scientific neutrality, hold final study reports, and recover unpaid trial milestones via Order XXXVII CPC.",
      },
      {
        title: "Bulk Recovery Cases All-in-One Affordable Solutions",
        href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
        tag: "CSV Batch Desk",
        desc: "Upload multi-state chemist, hospital, and PCD franchise default ledgers for simultaneous advocate dispatch.",
      },
    ],
  },
  fmcgConsumer: {
    heading: "Related FMCG, Modern-Trade, C&F & Distributor Legal Guides",
    items: [
      {
        title: "Channel Credit & Recovery for FMCG, Consumer Durables & D2C Brands",
        href: "/industries/fmcg-distributors-super-stockist-recovery",
        tag: "IND-10 Pillar Hub",
        desc: "Recover overdue distributor ledgers, dispute arbitrary dark-store deductions, and enforce s.20/s.138 security cheques across India.",
      },
      {
        title: "Distributor or Dealer Not Paying Dues? Legal Recovery",
        href: "/distributor-dealer-dues-recovery",
        tag: "IND-10 Seed Guide",
        desc: "Signed ledger confirmations, security cheques, MSME 3x interest, and Order 37 summary suits.",
      },
      {
        title: "Filling & Prosecuting Blank Signed Dealer Security Cheques (s.20 & s.138)",
        href: "/blank-signed-security-cheque-section-20-138-ni-act-distributor-recovery",
        tag: "L1 Statute Deep-Dive",
        desc: "Authoritative SOP for quantifying running dealer ledgers and serving 7-day pre-deposit notices before presenting blank security cheques.",
      },
      {
        title: "Fighting Arbitrary Dark-Store GRN Shortages & Fill-Rate Penalties",
        href: "/quick-commerce-modern-trade-arbitrary-deductions-vendor-payment-recovery",
        tag: "G1 Operational Playbook",
        desc: "Challenge Quick-Commerce and Modern-Trade chargebacks using MSMED Act Section 2(b) 15-day deemed acceptance and Section 43B(h).",
      },
      {
        title: "Electronics, Mobile & Appliance Dealer Floor-Credit Default Recovery",
        href: "/consumer-durables-electronics-mobile-dealer-floor-credit-recovery",
        tag: "G1 Operational Playbook",
        desc: "Track unpaid IMEI/serial inventory, rebut oral price-drop support excuses, and obtain emergency stock attachment before liquidation.",
      },
      {
        title: "C&F Agent & Super-Stockist Security Deposit & F&F Settlement Recovery",
        href: "/cnf-agent-super-stockist-security-deposit-fnf-recovery-from-brand",
        tag: "G1 Operational Playbook",
        desc: "Enforce Contract Act Section 222 indemnity and recover withheld C&F security deposits and secondary trade scheme claims.",
      },
      {
        title: "Bulk Recovery Cases: All-in-One Institutional Solutions",
        href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
        tag: "CSV Batch Desk",
        desc: "Upload 10 to 10,000+ overdue dealer and retailer accounts for simultaneous advocate dispatch.",
      },
    ],
  },
  agencyMedia: {
    heading: "Related Agency, Media Buying, Copyright & Event Recovery Guides",
    items: [
      {
        title: "Sponsorship Fee Default: Conference & Sports IP Recovery",
        href: "/sponsorship-fee-default-conference-sports-festival-organizer-recovery",
        tag: "Order 37 CPC",
        desc: "Recover defaulted title branding and summit sponsorship tranches with BSA 2023 deliverable proof decks and summary suits.",
      },
      {
        title: "Advertising, Marketing, PR, Media & Event Debt Recovery",
        href: "/industries/advertising-marketing-media-event-recovery",
        tag: "IND-12 Pillar Hub",
        desc: "Dual-weapon monetary + 7-day Copyright Takedown recovery for agencies, media buyers, film houses & event organizers.",
      },
      {
        title: "Copyright Not Transferred Until Paid (Creative & IP Law)",
        href: "/copyright-not-transferred-until-paid-freelancer",
        tag: "Copyright s.19/51",
        desc: "Block defaulting clients from running unpaid creatives, reels, code, or brand assets across digital platforms.",
      },
      {
        title: "Pending Project Payment Legal Recovery Guide",
        href: "/recovery/pending-project-payment",
        tag: "Milestone Recovery",
        desc: "Recover stalled agency retainers, scope-creep deliverables, and post-launch client invoice defaults.",
      },
      {
        title: "Send Legal Notice for Business to Recover Unpaid Dues",
        href: "/send-a-legal-notice/for-business-to-recover-their-unpaid-dues",
        tag: "B2B Notice Portal",
        desc: "Dispatch advocate-vetted corporate demand notices to brand CMOs, CFOs, and defaulting corporate debtors.",
      },
      {
        title: "Section 43B(h): The MSME 45-Day Payment Rule for Buyers",
        href: "/law/section-43bh-msme-payment-rule",
        tag: "MSMED s.43B(h)",
        desc: "Leverage March 31 income-tax expense disallowance and 3x RBI interest for Udyam-registered agencies and studios.",
      },
      {
        title: "Bulk Recovery Cases: All-in-One Institutional Solutions",
        href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
        tag: "CSV Batch Desk",
        desc: "Upload 10 to 10,000+ defaulting advertisers, sponsors, or retainer accounts via CSV for tri-channel dispatch.",
      },
    ],
  },
  staffingB2B: {
    heading: "Related Staffing, Recruitment, Security & Facility Management Recovery Guides",
    items: [
      {
        title: "MEA Recruiting Agent: Foreign Employer Fee Recovery",
        href: "/overseas-manpower-recruiting-agent-foreign-employer-fee-recovery",
        tag: "MEA & eMigrate SOP",
        desc: "Recover unpaid overseas recruitment invoices, trade-test costs & airfare advances from GCC & European employers.",
      },
      {
        title: "Recruitment Backdoor-Hiring & Staffing Invoice Legal Notice Pack",
        href: "/templates/recruitment-backdoor-hiring-and-staffing-invoice-legal-notice",
        tag: "Commercial Notice Pack",
        desc: "Advocate-vetted statutory demand notice formats for candidate circumvention, ATS email proof, and monthly payroll arrears.",
      },
      {
        title: "Recruitment, Staffing, Manpower & FMS Debt Recovery India",
        href: "/industries/staffing-recruitment-manpower-recovery",
        tag: "IND-11 Pillar Hub",
        desc: "Corporate recovery framework for temp-staffing payroll defaults, backdoor hiring fees, and security agency arrears.",
      },
      {
        title: "PSARA Security Guard & Housekeeping Agency Arrears Recovery",
        href: "/security-guard-housekeeping-facility-management-unpaid-bill-recovery",
        tag: "PSARA & IFM Playbook",
        desc: "Counter bogus theft debit notes, overnight vendor replacements, and recover 4+ months of guarding arrears via MSMED Act.",
      },
      {
        title: "Temp Staffing Payroll, PF & GST Invoice Default Recovery",
        href: "/contract-staffing-temp-payroll-pf-esic-invoice-default-recovery",
        tag: "Payroll Recovery",
        desc: "Recover 92% pass-through wages, EPF, ESIC, and 18% GST outlays using CLRA Section 21(4) and IBC Section 8.",
      },
      {
        title: "Client Backdoor Hired Candidate? Placement Fee Recovery",
        href: "/backdoor-hiring-candidate-circumvention-placement-fee-recovery-india",
        tag: "Placement Fees",
        desc: "Enforce recruitment Terms of Business when clients reject CVs and covertly onboard candidates within 12 months.",
      },
      {
        title: "Client Absorbed Temp Staff Without Paying C2H Buyout Fee?",
        href: "/temp-to-perm-contract-employee-absorption-buyout-fee-recovery",
        tag: "C2H Buyout SOP",
        desc: "Recover 15%–25% CTC conversion fees and counter hostile workforce rebadging under Contract Act s.73/74.",
      },
      {
        title: "Client Withholding Placement Fee Citing 90-Day Replacement Guarantee? Recovery Guide",
        href: "/recruitment-agency-90-day-replacement-clause-abuse-fee-recovery",
        tag: "Replacement Clause",
        desc: "Neutralize uncooperative client replacement defenses and recover executive search placement invoices.",
      },
      {
        title: "Client Never Signed Recruitment Terms? Win Placement Fees",
        href: "/recruitment-terms-of-business-unsigned-email-acceptance-recovery",
        tag: "Unsigned Terms (s.8)",
        desc: "Enforce placement fees under Section 8 acceptance by conduct, Section 70 quantum meruit, and IT Act Section 10A.",
      },
      {
        title: "Bulk Recovery Cases: All-in-One Institutional Solutions",
        href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
        tag: "CSV Batch Desk",
        desc: "Upload 10 to 10,000+ defaulting client staffing or facility management accounts for automated dispatch.",
      },
    ],
  },
  hospitalityB2B: {
    heading: "Related Hotel BTC, Banquet, Corporate Travel & B2B Recovery Guides",
    items: [
      {
        title: "B2B DMC & Tour Operator Travel Agent Debt Recovery",
        href: "/b2b-dmc-destination-management-company-tour-operator-default-recovery",
        tag: "BNS s.336/340",
        desc: "Stop the Friday 6 PM fake NEFT/SWIFT UTR screenshot scam via BNS s.318/336/340 forgery FIR, NI s.138 & Order 37 CPC.",
      },
      {
        title: "Private Charter (Jet/Heli) & Luxury Coach Fleet Debt Recovery",
        href: "/charter-flight-luxury-coach-yacht-corporate-hire-payment-recovery",
        tag: "NSOP & Fleet SOP",
        desc: "Enforce DGCA NSOP Flight Tech-Logs, empty-leg ferry charges, campaign PDCs & GPS coach telemetry via Order 37 CPC.",
      },
      {
        title: "MICE Offsite Cancellation & Room-Block Attrition Recovery",
        href: "/mice-corporate-offsite-conference-attrition-last-minute-cancellation-recovery",
        tag: "Contract Act s.74",
        desc: "Enforce 75%–100% last-minute MICE cancellation slabs & 80% attrition clauses using PMS unsold occupancy logs.",
      },
      {
        title: "Industrial Canteen, Corporate Cafeteria & Hostel Mess Bill Recovery",
        href: "/industrial-canteen-corporate-cafeteria-institutional-caterer-bill-recovery",
        tag: "MSMED s.15–18 & s.43B(h)",
        desc: "Recover 90–120+ day unpaid factory, hospital & college mess bills and strike down un-sampled hygiene penalties under Contract Act s.74.",
      },
      {
        title: "Hotel 'Bill-to-Company' (BTC) Corporate Credit Default Recovery",
        href: "/hotel-btc-bill-to-company-corporate-credit-account-default-recovery",
        tag: "BTC City Ledger",
        desc: "Convert 90+ day corporate BTC emails, PMS Guest Registration Cards, and GSTR-2B ITC claims into Order 37 Summary Suits.",
      },
      {
        title: "OTA & B2B Bed-Bank Withheld Hotel Payout Recovery",
        href: "/ota-b2b-bedbank-withheld-hotel-payout-arbitrary-chargeback-recovery",
        tag: "OTA & Bed-Bank",
        desc: "Recover frozen OTA extranet settlements, expired Virtual Credit Cards (VCCs) & arbitrary guest-relocation penalties under MSMED Act s.15–18.",
      },
      {
        title: "Banquet & Wedding Balance Cheque Stop-Payment Recovery",
        href: "/banquet-hall-destination-wedding-post-event-balance-cheque-bounce",
        tag: "NI Act s.138 & s.143A",
        desc: "Recover stopped ₹10–25L post-event extra-pax & bar balance cheques with Event Captain slips, CCTV BSA s.63 proof & 20% interim relief.",
      },
      {
        title: "IATA Travel Agent (TMC): Flight Credit Default Recovery",
        href: "/iata-corporate-travel-agent-tmc-flight-ticket-credit-default-recovery",
        tag: "IATA BSP & TMC",
        desc: "Recover corporate flight, LCC wallet, and visa credit defaults via Order XXXVII CPC, Rule 5 bank attachment & MSMED s.16.",
      },
      {
        title: "Hotel BTC & IATA Travel Agent Credit Legal Notice Pack",
        href: "/templates/hotel-btc-and-iata-travel-agent-corporate-credit-legal-notice",
        tag: "Notice Template",
        desc: "Advocate-drafted notice pack with Guest Folio, BTC Voucher, 13-digit Airline Ticket & GDS PNR schedules plus GSTR-2B estoppel.",
      },
      {
        title: "Hotels, Banquets & Corporate Travel (TMC) Debt Recovery",
        href: "/industries/hotels-banquets-corporate-travel-recovery",
        tag: "IND-16 Pillar Hub",
        desc: "Recover aged City-Ledger BTC accounts, IATA BSP flown-PNR ticket defaults, stopped wedding cheques & MICE attrition dues.",
      },
      {
        title: "Private Schools, Universities & EdTech B2B Fee/Debt Recovery",
        href: "/industries/schools-universities-edtech-b2b-recovery",
        tag: "IND-17 Pillar Hub",
        desc: "RTE s.5(3) & HC-compliant parent fee recovery without withholding TCs, university hostel arrears & School Trust B2B dues.",
      },
      {
        title: "System Integrator & AV/Networking Project Payment Recovery",
        href: "/system-integrator-it-hardware-networking-campus-project-recovery",
        tag: "IND-18 Guide",
        desc: "Break the 45-day Redington/Ingram channel squeeze when client civil delays stall 30% installation milestones via Contract Act s.53/54 & MSMED s.16.",
      },
      {
        title: "MSO & ISP Partner: LCO Set-Top-Box & Arrears Recovery",
        href: "/cable-tv-mso-broadcaster-set-top-box-lco-arrears-recovery-tdsat",
        tag: "IND-18 MSO/LCO",
        desc: "TRAI 21-day Regulation 17 disconnection notices, TDSAT s.14 arrears petitions & BNS s.316 recovery for swapped STBs and ONTs.",
      },
      {
        title: "TDSAT vs Commercial Court: Telecom & ISP Recovery Forum",
        href: "/tdsat-vs-commercial-court-jurisdiction-telecom-isp-broadcasting-recovery",
        tag: "IND-18 Law",
        desc: "TRAI Act s.14 & s.15 jurisdiction map: MSO–LCO & telco interconnect disputes go to TDSAT; enterprise ILL subscriber debt goes to Commercial Court.",
      },
      {
        title: "MSP & IT AMC Unpaid Invoice + Firewall/CPE Recovery",
        href: "/managed-it-services-msp-annual-amc-sla-unreturned-firewall-recovery",
        tag: "IND-18 MSP Guide",
        desc: "IT Act s.43-safe M365/DNS credential handover while prosecuting unpaid AMC/SOC contracts (Order 37) and leased Fortinet/SonicWall CPE (BNS s.316).",
      },
      {
        title: "Telecom, Enterprise ISP, Data Center, CPaaS & MSP Recovery",
        href: "/industries/telecom-isp-datacenter-msp-recovery",
        tag: "IND-18 Pillar Hub",
        desc: "Recover ILL/MPLS lock-in CapEx, rack colocation arrears with DPDP-safe export notices, CPaaS bursts & BNS s.316 CPE hardware.",
      },      {
        title: "RTE-Safe School Fee Arrears Legal Notice to Parents",
        href: "/templates/school-compliant-parent-fee-recovery-legal-notice-format",
        tag: "IND-17 Template",
        desc: "Child-safe legal notice format keeping student TC and exam rights untouched while enforcing parent fee undertakings under Order 37 CPC.",
      },

      {
        title: "Section 138 Cheque Bounce Notice Timeline (30 + 15 Day Rule)",
        href: "/cheque-bounce-notice-timeline-section-138",
        tag: "NI Act s.138",
        desc: "Mandatory statutory demand and prosecution windows for stopped banquet checkout cheques and corporate security PDCs.",
      },
      {
        title: "Stop-Payment Cheque Bounce Legal Action Guide",
        href: "/stop-payment-cheque-bounce-case",
        tag: "Stop-Payment Law",
        desc: "Enforce criminal liability and 20% Section 143A interim compensation when wedding hosts or corporates block payment.",
      },
      {
        title: "Business Dues & Commercial Ledger Recovery Guide",
        href: "/recovery/business-dues",
        tag: "B2B Ledgers",
        desc: "Convert overdue corporate invoices, running accounts, and confirmed City Ledgers into rapid settlements.",
      },
      {
        title: "Order XXXVII Summary Suit: Fast Civil Recovery",
        href: "/law/order-37-summary-suit-money-recovery",
        tag: "Order 37 CPC",
        desc: "Fast-track liquidated BTC emails, PMS Guest Registration Cards, and GDS flown-ticket schedules without long trials.",
      },
      {
        title: "Bulk Recovery Cases: All-in-One Institutional Solutions",
        href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
        tag: "CSV Batch Desk",
        desc: "Dispatch 10 to 10,000+ overdue hotel folios, TMC corporate balances, or mess contractor bills in one unified portal.",
      },
    ],
  },
  educationB2B: {
    heading: "Related Education, School & EdTech B2B Recovery Guides",
    items: [
      {
        title: "Study-Abroad Aggregator Withholding Sub-Agent Commissions",
        href: "/study-abroad-master-aggregator-university-sub-agent-commission-dispute",
        tag: "Overseas EdTech B2B",
        desc: "Recover withheld university enrollment commissions from master aggregators via Contract Act s.213 accounting & Order XXXVII CPC.",
      },
      {
        title: "Corporate L&D, Upskilling & Assessment Vendor Invoice Recovery",
        href: "/corporate-training-l-and-d-executive-education-vendor-invoice-recovery",
        tag: "Corporate L&D B2B",
        desc: "Break enterprise HR budget freezes & 180-day portal lags via MSMED s.15–18, Income Tax s.43B(h), and attendance estoppel.",
      },
      {
        title: "School Bus Fleet Contractor Unpaid Trust Bill Recovery",
        href: "/school-bus-transport-fleet-contractor-unpaid-trust-dues-recovery",
        tag: "School Bus Fleet",
        desc: "Enforce 12-month standing charges, diesel escalation & fiduciary parent-fee admissions against School Trusts via MSMED s.15–18.",
      },
      {
        title: "Coaching Franchisee Royalty Default & Poaching Recovery",
        href: "/coaching-institute-franchise-royalty-and-installment-bounce-recovery",
        tag: "Coaching Franchise",
        desc: "Commercial Court s.9 injunctions for overnight rebranding, Copyright s.55 test-series seizure, NI s.138 & MoE 2024 pro-rata recovery.",
      },
      {
        title: "B2B EdTech, Smart-Class & School ERP Debt Recovery",
        href: "/edtech-b2b-smart-class-school-erp-robotics-lab-unpaid-dues-from-schools",
        tag: "EdTech B2B",
        desc: "Sue the Registered Society (Section 6) or Public Trust—not just the school name—and run bulk CSV notices across 200+ defaulting schools.",
      },
      {
        title: "How Private Schools Recover Unpaid Fees Without Withholding TC",
        href: "/how-private-schools-recover-unpaid-fees-without-withholding-tc",
        tag: "School Fee Recovery",
        desc: "RTE-compliant advocate civil recovery notices against earning parents without ever withholding Transfer Certificates.",
      },
      {
        title: "IT, Software & SaaS MSA Payment Default Legal Notice",
        href: "/templates/it-software-saas-msa-payment-default-legal-notice",
        tag: "SaaS Notice Template",
        desc: "Advocate-vetted MSA payment default & license suspension notice format with Section 63 BSA electronic log clauses.",
      },
      {
        title: "MSME Delayed Payment Interest Calculator (3x RBI Rate)",
        href: "/tools/msme-delayed-payment-interest-calculator",
        tag: "MSMED Calculator",
        desc: "Compute exact monthly compound interest at 3x RBI bank rate under Section 16 of the MSMED Act, 2006.",
      },
      {
        title: "Bulk Legal Recovery Notices (10 to 10,000+ Defaulters)",
        href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
        tag: "Bulk CSV Portal",
        desc: "Upload a single CSV of delinquent schools or commercial debtors for automated Email, WhatsApp & Speed Post RPAD notices.",
      },
    ],
  },
  telecomB2B: {
    heading: "Related Telecom, Enterprise ISP & B2B Recovery Guides",
    items: [
      {
        title: "WhatsApp BSP, Bulk SMS & Cloud Telephony Debt Recovery",
        href: "/cpaas-bulk-sms-whatsapp-bsp-cloud-telephony-postpaid-default-recovery",
        tag: "CPaaS & BSP B2B",
        desc: "Recover Meta conversation & DLT interconnect bursts using BSA 2023 s.63 Webhook/CDR logs & API-key custody clauses.",
      },
      {
        title: "Enterprise ILL / MPLS / SD-WAN Lock-In Breach Recovery",
        href: "/enterprise-leased-line-ill-mpls-sdwan-lock-in-breach-recovery-isp",
        tag: "Enterprise ISP B2B",
        desc: "Recover waived installation OTCs, unamortized last-mile fiber CapEx, bandwidth arrears & MUX CPE via Contract Act s.74.",
      },
      {
        title: "Order XXXVII CPC Summary Suit for Commercial Dues",
        href: "/law/order-37-summary-suit-money-recovery",
        tag: "Summary Suit",
        desc: "Fast-track decree on signed CAFs, Commissioning AT Reports, and acknowledged postpaid invoices without full trial.",
      },
      {
        title: "IT, Software & SaaS MSA Payment Default Legal Notice",
        href: "/templates/it-software-saas-msa-payment-default-legal-notice",
        tag: "SaaS / Tech Notice",
        desc: "Advocate-vetted MSA payment default & suspension notice template with BSA 2023 Section 63 electronic log clauses.",
      },
      {
        title: "MSME Delayed Payment Interest Calculator (3x RBI Rate)",
        href: "/tools/msme-delayed-payment-interest-calculator",
        tag: "MSMED Calculator",
        desc: "Compute statutory compound interest at 3x RBI bank rate under Section 16 of the MSMED Act for Udyam ISPs.",
      },
      {
        title: "B2B Vendor & Commercial Invoice Recovery Desk",
        href: "/services/vendor-and-invoice-recoveries",
        tag: "B2B Recovery",
        desc: "Structured pre-litigation legal notices and Commercial Court escalation for corporate receivables.",
      },
      {
        title: "Bulk Legal Recovery Notices (10 to 10,000+ Defaulters)",
        href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
        tag: "Bulk CSV Portal",
        desc: "Batch-process enterprise & SME postpaid telecom arrears via CSV with Email, WhatsApp & Speed Post RPAD.",
      },
    ],
  },
  solarEnergyB2B: {
    heading: "Solar EPC, RESCO PPA, EV Charging & Power Recovery Guides",
    items: [
      {
        title: "Solar EPC, RESCO PPA, EV Charging & Power Debt Recovery",
        href: "/industries/solar-renewable-ev-power-recovery",
        tag: "IND-19 Pillar Hub",
        desc: "Enforce OPEX/RESCO PPA buyouts via Arbitration s.9, C&I net-metering Deemed Commissioning & EV CPO fleet/charger recovery.",
      },
      {
        title: "OPEX / RESCO Solar PPA Tariff Default & Termination Buyout",
        href: "/opex-resco-solar-ppa-tariff-default-termination-buyout-repossession",
        tag: "IND-19 RESCO",
        desc: "Arbitration Act s.9 injunctions against free solar power draw, Receiver plant inspection & Termination Buyout enforcement.",
      },
      {
        title: "Solar Module, Inverter & BOS Distributor Credit Recovery",
        href: "/solar-panel-module-inverter-distributor-installer-credit-recovery",
        tag: "IND-19 OEM/BOS",
        desc: "Conditional OEM serial-number warranty hold, NI Act s.138/143A PDC enforcement & Sale of Goods s.56 Watt-Peak crash damages.",
      },
      {
        title: "DISCOM & SNA Solar Payment Delays: LPS Rules & SERC s.86(1)(f)",
        href: "/discom-kusum-state-nodal-agency-renewable-payment-delay-lps-rules",
        tag: "IND-19 DISCOM",
        desc: "Enforce PRAAPTI grid-access curbs under LPS Rules 2022, SERC s.86(1)(f) petitions & MSEFC/s.80 CPC for KUSUM SNA tenders.",
      },
      {
        title: "EV Charging CPO Fleet Billing & Charger Recovery",
        href: "/ev-charging-station-cpo-fleet-hub-landlord-revenue-share-recovery",
        tag: "IND-19 EV CPO",
        desc: "Enforce OCPP 1.6J/2.0.1 kWh logs under BSA s.63, Arbitration s.9 DC fast-charger repossession & BNS s.316 host-site notices.",
      },
      {
        title: "C&I Solar EPC Final Balance & Net-Metering Recovery",
        href: "/commercial-industrial-rooftop-solar-epc-net-metering-balance-recovery",
        tag: "IND-19 Solar EPC",
        desc: "Enforce Deemed Commissioning (Contract Act s.53/54), IEC 61724 soiling-adjusted PR proof & divisible Supply PO MSME leverage.",
      },
      {
        title: "STP, ETP, ZLD & Biogas Plant Payment Recovery",
        href: "/stp-etp-zld-water-treatment-biogas-turnkey-plant-payment-recovery",
        tag: "IND-19 Water-Tech",
        desc: "Defeat post-CTO final 25% retention holds & monthly O&M arrears with NABL lab proof, MSMED s.16 & s.43B(h).",
      },
      {
        title: "HT / LT Substation, Transformer & Panel Bill Recovery",
        href: "/electrical-ht-lt-substation-transformer-contractor-bill-recovery",
        tag: "IND-19 Electrical",
        desc: "Enforce CEIG Charging Approval, Contract Act s.70 energized benefit & Sale of Goods s.55 for custom APFC/PCC panels.",
      },
      {
        title: "Solar & Wind O&M, Module Cleaning Arrears Recovery",
        href: "/solar-wind-o-and-m-module-cleaning-contractor-arrears-recovery",
        tag: "IND-19 O&M",
        desc: "Rebut grid-curtailment SLA deductions with SCADA logs & recover leased cleaning robots via Arbitration s.9.",
      },
      {
        title: "Solar PPA Buyout & EPC Balance Legal Notice Pack",
        href: "/templates/solar-epc-and-resco-ppa-default-buyout-legal-notice",
        tag: "IND-19 Notice",
        desc: "Interactive notice workspace for RESCO PPA buyouts, remote inverter curtailment, CapEx EPC & EV CPO demands.",
      },
      {
        title: "Subcontractor & Turnkey EPC Payment Recovery India",
        href: "/subcontractor-payment-recovery-india",
        tag: "EPC Recovery",
        desc: "Defeat pay-when-paid clauses and wrongful retention holds on solar, HT/LT substation, and utility projects.",
      },
      {
        title: "Section 80 CPC Notice to Government & Nodal Agencies",
        href: "/law/section-80-cpc-notice-to-government",
        tag: "Government Claims",
        desc: "Mandatory 60-day statutory pre-suit notice protocol for delayed PM-KUSUM, State Nodal Agency & PSU solar payments.",
      },
      {
        title: "MSME Delayed Payment 3x RBI Interest Calculator",
        href: "/tools/msme-delayed-payment-interest-calculator",
        tag: "Interest Tool",
        desc: "Compute compound interest under MSMED s.16 for Udyam solar EPCs, BOS distributors, and power contractors.",
      },
    ],
  },
  agroInputsB2B: {
    heading: "Related Agri-Inputs, FPO, Dairy & Dealer Recovery Guides",
    items: [
      {
        title: "FPO (Farmer Producer Company) & Dairy B2B Buyer Recovery",
        href: "/fpo-farmer-producer-company-cooperative-dairy-b2b-buyer-recovery",
        tag: "FPO & Dairy B2B",
        desc: "Enforce APMC 24–72 hr mandi payment rules (CC to APMC Secretary), NI s.138 bounced PDCs, and Order XXXVII CPC recovery against corporate offtakers.",
      },
      {
        title: "Agrochemical & Seed Dealer Seasonal Credit Default Recovery",
        href: "/agrochemical-pesticide-seed-dealer-seasonal-credit-default-recovery",
        tag: "Agri-Inputs B2B",
        desc: "Defeat post-harvest oral 'poor germination / pesticide efficacy' excuses using Seeds Act / Insecticides Act sampling rules and NI s.138 PDCs.",
      },
      {
        title: "Distributor & Dealer Dues Recovery in India",
        href: "/distributor-dealer-dues-recovery",
        tag: "Channel Credit",
        desc: "Enforce dealer agreements, reconcile running trade ledgers, and recover overdue stockist balances across India.",
      },
      {
        title: "Section 138 Cheque Bounce Notice Timeline & Rules",
        href: "/cheque-bounce-notice-timeline-section-138",
        tag: "NI Act s.138",
        desc: "30-day statutory notice deadline, 15-day cure window, and criminal prosecution for bounced seasonal security PDCs.",
      },
      {
        title: "MSME Delayed Payment 3x RBI Interest Calculator",
        href: "/tools/msme-delayed-payment-interest-calculator",
        tag: "Calculator",
        desc: "Compute compound interest at 3x RBI bank rate for Udyam-registered seed, bio-stimulant, and agrochemical manufacturers.",
      },
      {
        title: "Baki Paise Vasooli ke Liye Legal Notice Kaise Bheje (Hindi)",
        href: "/hi/legal-notice-kaise-bheje",
        tag: "Hindi Guide",
        desc: "Vyapari aur Krishi Kendra dealers ko baki payment ke liye statutory legal notice bhejne ki step-by-step prakriya.",
      },
      {
        title: "Bulk Recovery Cases: 10 to 10,000+ Dealer Notice Desk",
        href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
        tag: "Enterprise Batch",
        desc: "Upload dealer overdue CSVs for synchronized pre-Kharif and pre-Rabi legal notice drives across districts.",
      },
    ],
  },
  equipmentRentalB2B: {
    heading: "Related Equipment Rental, Scaffolding & Contractor Recovery Guides",
    items: [
      {
        title: "Unreturned Rented Scaffolding & Formwork (BNS s.316)",
        href: "/unreturned-rented-scaffolding-shuttering-formwork-bns-316-recovery",
        tag: "BNS 316 FIR",
        desc: "Enforce BNS s.316 Criminal Breach of Trust, running hire meters & replacement value against defaulting contractors.",
      },
      {
        title: "BNS Section 318 Cheating vs. Civil Breach of Contract",
        href: "/law/bns-318-cheating-vs-civil-dispute",
        tag: "Criminal Law",
        desc: "Know when dishonest asset retention, site shifting, or scrap conversion crosses from civil breach into FIR territory.",
      },
      {
        title: "Contractor Payment & Work Order Recovery Guide",
        href: "/recovery/contractor-payment",
        tag: "Contractor Dues",
        desc: "Recover unpaid contractor bills, running hire invoices, and withheld security deposits across civil projects.",
      },
      {
        title: "MSME Delayed Payment 3x RBI Interest Calculator",
        href: "/tools/msme-delayed-payment-interest-calculator",
        tag: "Interest Tool",
        desc: "Compute statutory 3x RBI compound interest for Udyam-registered equipment and scaffolding rental yards.",
      },
      {
        title: "Bulk Legal Notice via Email, WhatsApp & Speed Post",
        href: "/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution",
        tag: "Bulk Dispatch",
        desc: "Send multi-channel legal notices with Police Station Email CC for overdue rental fleets and site defaults.",
      },
      {
        title: "Legal Notice Reply & Demand Format Workspace",
        href: "/templates/legal-notice-reply-format",
        tag: "Notice Template",
        desc: "Structure enforceable commercial demand clauses and statutory cure periods for B2B defaults.",
      },
    ],
  },
  professionalServicesB2B: {
    heading: "Related CA, Architect, Engineering, Law & Advisory Fee Recovery Guides",
    items: [
      {
        title: "CAs, Architects, Engineers & M&A Advisors Fee Recovery Hub",
        href: "/industries/ca-architects-consultants-professional-fee-recovery",
        tag: "IND-23 Pillar Hub",
        desc: "Council-ethics-safe recovery for CAs, architects, engineers, law firms, PCS, CRO/NABL labs, and debt/M&A deal advisors.",
      },
      {
        title: "Management Consulting, ESG & Cyber Audit Milestone Recovery",
        href: "/management-consulting-esg-iso-cyber-audit-advisory-milestone-recovery",
        tag: "Advisory & Audits",
        desc: "Enforce advisory milestone agreements, Order XXXVII CPC, and Section 43B(h) for withheld cyber audit, NABH, and subsidy fees.",
      },
      {
        title: "CA Unpaid Audit Fee Recovery: ICAI Clause (8) & Civil Law",
        href: "/chartered-accountant-ca-unpaid-audit-tax-retainer-recovery-icai-noc",
        tag: "ICAI Clause (8)",
        desc: "Block incoming auditors under ICAI Chapter VII for Balance-Sheet-provisioned undisputed audit fees without breaching R.D. Saxena rules.",
      },
      {
        title: "PCS, IBBI Registered Valuer & Insolvency RP Fee Recovery",
        href: "/company-secretary-pcs-registered-valuer-ip-insolvency-fee-recovery",
        tag: "ICSI & IBBI s.5(13)",
        desc: "Recover upfront MCA V3 SH-7 stamp duty advances via Contract Act s.69/222 & Order XXXVII CPC, and enforce CoC-ratified CIRP/Valuer fees u/s 5(13)/60(5) IBC.",
      },
      {
        title: "Structural, MEP, PMC & Engineering Consultant Fee Recovery",
        href: "/structural-mep-pmc-geotechnical-engineering-consultant-bill-recovery",
        tag: "Engineers & PMC",
        desc: "Invoke Contract Act ss.51–52 reciprocal promises before OC/EC sign-offs alongside MSMED s.16 (3x RBI), s.43B(h), and Order XXXVII CPC.",
      },
      {
        title: "Law Firm & IP Attorney Fee Recovery (R.D. Saxena Safe)",
        href: "/law-firm-litigation-counsel-ip-attorney-unpaid-corporate-fee-recovery",
        tag: "R.D. Saxena & Order 37",
        desc: "Recover unpaid corporate litigation fee memos and IPO patent disbursements via CPC Order III Rule 4(2) discharge orders and Order XXXVII CPC.",
      },
      {
        title: "Consultancy & Professional Retainer Fee Recovery",
        href: "/recovery/consultancy-fees",
        tag: "Consultancy Fees",
        desc: "Pre-litigation advocate notices and Order XXXVII CPC summary recovery for unpaid B2B advisory and retainer bills.",
      },
    ],
  },
  franchiseDealershipB2B: {
    heading: "Related Franchisor, Brand Licensor & OEM Dealership Recovery Guides",
    items: [
      {
        title: "Franchisors, Brand Licensors & EV/Auto OEM Network Recovery",
        href: "/industries/franchisors-brand-licensors-oem-dealership-recovery",
        tag: "Franchisor Hub",
        desc: "Commercial Courts Act s.2(1)(c)(ix) and Trade Marks Act s.135 recovery for QSR, retail & auto networks.",
      },
      {
        title: "The Rogue Holdover Franchisee Playbook: Stopping Signboard Misuse",
        href: "/terminated-rogue-franchisee-using-brand-signboard-royalty-recovery",
        tag: "Signboard Injunction",
        desc: "Compel immediate removal of exterior ACP glow-sign boards, delist rogue outlets from Swiggy and Zomato, and secure ad-interim injunctions.",
      },
      {
        title: "Franchisee POS Cash-Skimming & Sales Under-Reporting Recovery",
        href: "/franchisee-pos-cash-skimming-sales-underreporting-royalty-audit-recovery",
        tag: "POS Audit",
        desc: "Detect counter cash skimming and personal UPI QR evasion; reconstruct true gross sales using packaging consumption ratios.",
      },
      {
        title: "Distributor & Dealer Dues Recovery",
        href: "/distributor-dealer-dues-recovery",
        tag: "Dealer Dues",
        desc: "Fast-track recovery of unpaid dealer, distributor and stockist invoices and bounced cheques.",
      },
      {
        title: "Online Dispute Resolution (ODR) India",
        href: "/online-dispute-resolution-india",
        tag: "Fast Arbitration",
        desc: "Binding digital arbitration and conciliation for outstation franchise and commercial disputes.",
      },
      {
        title: "Bulk Recovery Cases & Institutional Solutions",
        href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
        tag: "Bulk CSV",
        desc: "Batch legal notice dispatch and recovery automation for 10 to 10,000+ defaulting retail outlets.",
      },
    ],
  },
};

function detectCluster(pathname: string): { heading: string; items: GuideItem[] } {
  const p = pathname.toLowerCase();
  if (
    p.includes("franchisors-brand-licensors-oem-dealership-recovery") ||
    p.includes("terminated-rogue-franchisee-using-brand-signboard") ||
    p.includes("franchisee-pos-cash-skimming") ||
    p.includes("fico-foco-franchise-investor") ||
    p.includes("ev-two-wheeler-three-wheeler-automobile-oem-dealer") ||
    p.includes("preschool-k12-edtech-franchise-royalty") ||
    p.includes("brand-licensing-merchandising-minimum-royalty") ||
    p.includes("central-kitchen-commissary-franchise-supply") ||
    p.includes("master-franchisee-regional-development") ||
    p.includes("franchisor-royalty-default-termination-signboard")
  ) {
    return CLUSTERS.franchiseDealershipB2B;
  }
  if (
    p.includes("ca-architects-consultants") ||
    p.includes("chartered-accountant-ca-unpaid") ||
    p.includes("architect-interior-consultant") ||
    p.includes("investment-banker-debt-syndication") ||
    p.includes("company-secretary-pcs") ||
    p.includes("structural-mep-pmc") ||
    p.includes("law-firm-litigation-counsel") ||
    p.includes("clinical-research-cro") ||
    p.includes("management-consulting-esg-iso-cyber") ||
    p.includes("ca-architect-advisor-professional-fee")
  ) {
    return CLUSTERS.professionalServicesB2B;
  }
  if (
    p.includes("equipment-rental-machinery") ||
    p.includes("equipment-rental-arrears-gate-pass") ||
    p.includes("unreturned-rented-scaffolding") ||
    p.includes("rented-crane-machinery") ||
    p.includes("laptop-macbook-workstation-rental") ||
    p.includes("diesel-generator-dg-set") ||
    p.includes("forklift-mhe-pallet") ||
    p.includes("medical-icu-equipment") ||
    p.includes("audio-visual-led-wall") ||
    p.includes("rented-machinery-criminal-recovery")
  ) {
    return CLUSTERS.equipmentRentalB2B;
  }
  if (
    p.includes("solar-renewable-ev-power") ||
    p.includes("opex-resco-solar-ppa") ||
    p.includes("rooftop-solar-epc-net-metering") ||
    p.includes("solar-panel-module-inverter") ||
    p.includes("discom-kusum-state-nodal") ||
    p.includes("ev-charging-station-cpo") ||
    p.includes("stp-etp-zld-water-treatment") ||
    p.includes("electrical-ht-lt-substation") ||
    p.includes("solar-wind-o-and-m") ||
    p.includes("solar-epc-and-resco-ppa-default")
  ) {
    return CLUSTERS.solarEnergyB2B;
  }
  if (
    p.includes("enterprise-leased-line-ill-mpls") ||
    p.includes("telecom-isp-datacenter") ||
    p.includes("tdsat-vs-commercial-court") ||
    p.includes("cpaas-bulk-sms") ||
    p.includes("data-center-colocation") ||
    p.includes("isp-datacenter-cpaas-suspension")
  ) {
    return CLUSTERS.telecomB2B;
  }
  if (
    p.includes("school-bus-transport-fleet") ||
    p.includes("coaching-institute-franchise") ||
    p.includes("edtech-b2b-smart-class") ||
    p.includes("schools-universities-edtech") ||
    p.includes("how-private-schools-recover") ||
    p.includes("corporate-training-l-and-d")
  ) {
    return CLUSTERS.educationB2B;
  }
  if (
    p.includes("cardiac-stent") ||
    p.includes("surgical-consumables") ||
    p.includes("orthopedic-implant") ||
    p.includes("consignment-dues") ||
    p.includes("cold-chain") ||
    p.includes("vaccine") ||
    p.includes("biologics") ||
    p.includes("api-bulk-drug") ||
    p.includes("bulk-drug") ||
    p.includes("exporters-cross-border-trade-recovery") ||
    p.includes("indian-exporter-payment-defaults-edpms-trends-report") ||
    p.includes("international-export-buyer-legal-demand-notice-fema-ecgc-format") ||
    p.includes("pharma") ||
    p.includes("veterinary") ||
    p.includes("nutraceutical") ||
    p.includes("ayurvedic") ||
    p.includes("medical-devices") ||
    p.includes("distributor-dealer")
  ) {
    return CLUSTERS.commercialB2B;
  }
  if (
    p.includes("staffing") ||
    p.includes("recruitment") ||
    p.includes("overseas-manpower") ||
    p.includes("temp-to-perm") ||
    p.includes("absorption-buyout") ||
    p.includes("security-guard-housekeeping") ||
    p.includes("facility-management") ||
    p.includes("backdoor-hiring") ||
    p.includes("unsigned-email-acceptance") ||
    p.includes("replacement-clause") ||
    p.includes("temp-payroll")
  ) {
    return CLUSTERS.staffingB2B;
  }
  if (
    p.includes("hotels-banquets-corporate-travel") ||
    p.includes("hotel-btc-bill-to-company") ||
    p.includes("iata-corporate-travel-agent") ||
    p.includes("banquet-hall-destination-wedding-post-event") ||
    p.includes("ota-b2b-bedbank") ||
    p.includes("mice-corporate-offsite") ||
    p.includes("industrial-canteen-corporate-cafeteria") ||
    p.includes("b2b-dmc-destination-management") ||
    p.includes("charter-flight-luxury-coach") ||
    p.includes("hotel-btc-and-iata-travel-agent") ||
    p.includes("ota-b2b-bedbank")
  ) {
    return CLUSTERS.hospitalityB2B;
  }
  if (
    p.includes("logistics") ||
    p.includes("freight") ||
    p.includes("3pl") ||
    p.includes("transporter") ||
    p.includes("bilty") ||
    p.includes("reefer") ||
    p.includes("halting")
  ) {
    return CLUSTERS.logistics;
  }
  if (
    p.includes("builders-commercial-landlords-coworking") ||
    p.includes("rera-section-19-builder") ||
    p.includes("commercial-lease-lock-in") ||
    p.includes("coworking-managed-office") ||
    p.includes("commercial-it-park-mall-cam") ||
    p.includes("industrial-warehouse-3pl-shed") ||
    p.includes("deducted-tds-194i") ||
    p.includes("commercial-property-section-106") ||
    p.includes("builder-society-handover-ifms") ||
    p.includes("joint-development-agreement-jda") ||
    p.includes("retail-mall-revenue-share-minimum-guarantee") ||
    p.includes("rera-section-19") ||
    p.includes("defaulting-homebuyer-allottee") ||
    p.includes("commercial-it-park-mall-cam")
  ) {
    return CLUSTERS.commercialProperty;
  }
  if (
    p.includes("industrial-dealer") ||
    p.includes("section-43bh") ||
    p.includes("authorized-distributor") ||
    p.includes("purchase-order-cancelled") ||
    p.includes("bespoke-goods") ||
    p.includes("tax-invoice-eway-bill") ||
    p.includes("eway-bill-grn") ||
    p.includes("wrongful-performance-bank-guarantee") ||
    p.includes("bank-guarantee-pbg") ||
    p.includes("cnc-machining") ||
    p.includes("medium-enterprise-udyam") ||
    p.includes("job-work-challan") ||
    p.includes("auto-ancillary") ||
    p.includes("custom-industrial-machinery") ||
    p.includes("manufacturing-machinery-oem") ||
    p.includes("factory-msme-b2b") ||
    p.includes("oem-deduction") ||
    p.includes("tooling-dies") ||
    p.includes("cnc-job-work") ||
    p.includes("machine-commissioning") ||
    p.includes("industrial-raw-material") ||
    p.includes("export-machinery") ||
    p.includes("garment-buying-house") ||
    p.includes("textile") ||
    p.includes("retail-fashion") ||
    p.includes("spinning-mill") ||
    p.includes("tmt-steel-structural")
  ) {
    return CLUSTERS.manufacturingB2B;
  }
  if (
    p.includes("executing-arbitral-award") ||
    p.includes("construction-retention-dlp") ||
    p.includes("section-21-arbitration") ||
    p.includes("construction-epc") ||
    p.includes("subcontractor-payment") ||
    p.includes("pay-when-paid") ||
    p.includes("contractor-payment") ||
    p.includes("section-80-cpc") ||
    p.includes("prolongation") ||
    p.includes("construction-price-escalation") ||
    p.includes("ra-bill") ||
    p.includes("retention-money") ||
    p.includes("works-contract") ||
    p.includes("liquidated-damages") ||
    p.includes("tender-payment-recovery-contractors") ||
    p.includes("nhai-cpwd-pwd") ||
    p.includes("ready-mix-concrete-rmc") ||
    p.includes("building-material-sariya-cement-rmc-udhar-recovery-notice") ||
    p.includes("ibc-section-8-by-building-material-suppliers") ||
    p.includes("bitumen-aggregates-fly-ash") ||
    p.includes("paint-waterproofing-construction-chemicals") ||
    p.includes("industrial-chemicals-solvents") ||
    p.includes("polymer-granules-plastic-raw-material") ||
    p.includes("rmc-steel-chemical-building-material-demand-legal-notice")
  ) {
    return CLUSTERS.construction;
  }
  if (
    p.includes("hospitals-doctors-healthcare-recovery") ||
    p.includes("hospital-unpaid-patient-bill") ||
    p.includes("hospital-tpa-insurance") ||
    p.includes("cghs-echs") ||
    p.includes("hospital-corporate-credit") ||
    p.includes("clinical-research-cro-testing-laboratory") ||
    p.includes("diagnostic-lab-pathology") ||
    p.includes("ivf-dental-cosmetic") ||
    p.includes("visiting-consultant-doctor") ||
    p.includes("patient-cheque-bounce") ||
    p.includes("home-healthcare-icu") ||
    p.includes("dialysis-oncology") ||
    p.includes("hospital-long-stay") ||
    p.includes("ambulance-air-ambulance") ||
    p.includes("hospital-tpa-delayed-claim") ||
    p.includes("hospital-discharge-pending-bill") ||
    p.includes("healthcare-tpa-settlement-delay")
  ) {
    return CLUSTERS.healthcareB2B;
  }
  if (
    p.includes("salary") ||
    p.includes("wages") ||
    p.includes("fnf") ||
    p.includes("full-and-final") ||
    p.includes("relieving") ||
    p.includes("employer") ||
    p.includes("notice-period") ||
    p.includes("gratuity") ||
    p.includes("termination") ||
    p.includes("pf-") ||
    p.includes("epf") ||
    p.includes("incentive") ||
    p.includes("bonus")
  ) {
    return CLUSTERS.employment;
  }
  if (
    p.includes("flipkart") ||
    p.includes("myntra") ||
    p.includes("blinkit") ||
    p.includes("swiggy") ||
    p.includes("consumer-helpline") ||
    p.includes("national-consumer") ||
    p.includes("zomato") ||
    p.includes("electricity") ||
    p.includes("telecom") ||
    p.includes("broadband") ||
    p.includes("retailer") ||
    p.includes("product") ||
    p.includes("car-dealer") ||
    p.includes("used-car") ||
    p.includes("bike") ||
    p.includes("scooter") ||
    p.includes("ev-service") ||
    p.includes("battery") ||
    p.includes("refuse-new-car") ||
    p.includes("manufacturing-defect") ||
    p.includes("lemon-law") ||
    p.includes("pdi-defects") ||
    p.includes("hospital") ||
    p.includes("overbilling") ||
    p.includes("solar") ||
    p.includes("interior") ||
    p.includes("event-planner") ||
    p.includes("study-abroad") ||
    p.includes("gym") ||
    p.includes("coaching") ||
    p.includes("ugc") ||
    p.includes("college") ||
        p.includes("courier") ||
    p.includes("parcel") ||
p.includes("school") ||
    p.includes("airline") ||
    p.includes("flight") ||
    p.includes("travel") ||
    p.includes("vendor-for-refund") ||
    p.includes("banquet") ||
    p.includes("marriage-hall") ||
    p.includes("wedding-venue") ||
    p.includes("consumer") ||
    p.includes("insurance")
  ) {
    return CLUSTERS.consumer;
  }
  if (
    p.includes("landlord") ||
    p.includes("pg-owner") ||
    p.includes("pg-lock-in") ||
    p.includes("security-deposit") ||
    p.includes("rental") ||
    p.includes("tenant") ||
    p.includes("builder") ||
    p.includes("carpet-area") ||
    p.includes("rera") ||
    p.includes("flat-booking") ||
    p.includes("housing-society") ||
    p.includes("nobroker") ||
    p.includes("property")
  ) {
    return CLUSTERS.property;
  }
  if (
    p.includes("atm") ||
    p.includes("insurance-premium-auto-debited") ||
    p.includes("cheque") ||
    p.includes("bank") ||
    p.includes("rbi") ||
    p.includes("unauthorised-transaction") ||
    p.includes("ecs") ||
    p.includes("nach") ||
    p.includes("fraud") ||
    p.includes("cyber") ||
    p.includes("scam") ||
    p.includes("loan") ||
    p.includes("sebi") ||
    p.includes("smart-odr") ||
    p.includes("gaming") ||
    p.includes("wallet") ||
    p.includes("broker") ||
    p.includes("upi") ||
    p.includes("autopay") ||
    p.includes("credit") ||
    p.includes("card") ||
    p.includes("ni-act") ||
    p.includes("nbfc") ||
    p.includes("section-25-nach") ||
    p.includes("fintech") ||
    p.includes("hfc") ||
    p.includes("mfi")
  ) {
    return CLUSTERS.banking;
  }
  if (
    p.includes("advertising-marketing-media-event") ||
    p.includes("digital-marketing") ||
    p.includes("low-roas") ||
    p.includes("media-buying-agency") ||
    p.includes("exhibition-stall-fabricator") ||
    p.includes("ad-film-ott-video-production") ||
    p.includes("outdoor-hoarding-ooh") ||
    p.includes("pr-public-relations-agency") ||
    p.includes("influencer-talent-management-agency") ||
    p.includes("creative-pitch-theft") ||
    p.includes("sponsorship-fee-default") ||
    p.includes("marketing-ad-agency-retainer-copyright")
  ) {
    return CLUSTERS.agencyMedia;
  }
  if (
    p.includes("fmcg") ||
    p.includes("super-stockist") ||
    p.includes("consumer-durables") ||
    p.includes("quick-commerce") ||
    p.includes("cnf-agent")
  ) {
    return CLUSTERS.fmcgConsumer;
  }
  if (
    p.includes("pharma") ||
    p.includes("surgical-consumables") ||
    p.includes("cold-chain") ||
    p.includes("vaccine") ||
    p.includes("biologics") ||
    p.includes("api-bulk-drug") ||
    p.includes("bulk-drug") ||
    p.includes("medical-devices") ||
    p.includes("medical-equipment") ||
    p.includes("distributor-dealer")
  ) {
    return CLUSTERS.commercialB2B;
  }
  if (
    p.includes("it-saas") ||
    p.includes("poached") ||
    p.includes("non-solicitation") ||
    p.includes("developer") ||
    p.includes("saas") ||
    p.includes("software") ||
    p.includes("uat-") ||
    p.includes("softex") ||
    p.includes("edpms") ||
    p.includes("shipping-bill") ||
    p.includes("cloud-reseller") ||
    p.includes("staff-augmentation") ||
    p.includes("erp-sap") ||
    p.includes("white-label") ||
    p.includes("source-code-escrow") ||
    p.includes("data-center-colocation")
  ) {
    return CLUSTERS.itSaas;
  }
  if (
    p.includes("equipment-rental") ||
    p.includes("rented-crane") ||
    p.includes("rented-scaffolding") ||
    p.includes("diesel-generator-dg-set") ||
    p.includes("forklift-mhe")
  ) {
    return CLUSTERS.construction || CLUSTERS.general;
  }
  if (p.includes("fpo-farmer-producer")) {
    return CLUSTERS.agroInputsB2B;
  }
  if (
    p.includes("agri-inputs") ||
    p.includes("rice-dal-flour") ||
    p.includes("agrochemical") ||
    p.includes("cold-storage") ||
    p.includes("poultry-feed")
  ) {
    return CLUSTERS.commercialB2B;
  }
  return CLUSTERS.general;
}

interface RelatedRecoveryGuidesProps {
  currentPath?: string;
  cluster?: string;
  currentSlug?: string;
  heading?: string;
  [key: string]: any;
}

export default function RelatedRecoveryGuides({
  currentPath,
  cluster: clusterProp,
}: RelatedRecoveryGuidesProps = {}) {
  const routerPathname = usePathname();
  const pathname = currentPath || routerPathname;

  if (
    !pathname ||
    pathname === "/" ||
    pathname === "/login" ||
    pathname === "/contact" ||
    pathname === "/about" ||
    pathname === "/privacy-policy" ||
    pathname === "/terms-and-conditions" ||
    pathname.startsWith("/user") ||
    pathname.startsWith("/authority") ||
    pathname.startsWith("/notice-dispatch") ||
    pathname.startsWith("/payment") ||
    pathname.startsWith("/resume") ||
    pathname.startsWith("/recover-my-money")
  ) {
    return null;
  }

  const cluster = (clusterProp && CLUSTERS[clusterProp]) ? CLUSTERS[clusterProp] : detectCluster(pathname);
  const filtered = cluster.items.filter((item) => item.href !== pathname).slice(0, 6);

  return (
    <section
      aria-label="Related Legal Recovery Guides"
      className="bg-[#F8F9FB] border-t border-slate-200/80 py-12 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block mb-1">
              Contextual Legal Library
            </span>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
              {cluster.heading}
            </h2>
          </div>
          <Link
            href="/send-a-legal-notice"
            className="text-xs font-extrabold text-[#DC2626] hover:underline shrink-0"
          >
            View All Legal Notice Categories →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-white border border-slate-200/90 hover:border-[#DC2626]/50 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left"
            >
              <div>
                <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2.5 py-0.5 rounded-full mb-2.5">
                  {item.tag}
                </span>
                <h3 className="text-sm font-black text-slate-900 group-hover:text-[#DC2626] transition-colors leading-snug mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <span className="text-[11px] font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-4 inline-flex items-center gap-1">
                Read Legal Guide <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
