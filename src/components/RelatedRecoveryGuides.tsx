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
        title: "How to Recover Money Without Going to Court in India",
        href: "/how-to-recover-money-without-going-to-court-india",
        tag: "Out-of-Court",
        desc: "Pre-litigation recovery via Advocate Legal Notice, Statutory Ombudsmen & ODR.",
      },
    ],
  },
};

function detectCluster(pathname: string): { heading: string; items: GuideItem[] } {
  const p = pathname.toLowerCase();
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
    p.includes("ni-act")
  ) {
    return CLUSTERS.banking;
  }
  return CLUSTERS.general;
}

interface RelatedRecoveryGuidesProps {
  currentPath?: string;
  cluster?: string;
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
