import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import MyntraNoticeCTA from "./MyntraNoticeCTA";
import ProblemPickerTabs from "./ProblemPickerTabs";
import TemplateCopyButton from "./TemplateCopyButton";

export const metadata: Metadata = {
  title: "Myntra Refund Processed but Not Received? What to Do",
  description:
    "Myntra refund marked processed but not credited? Trace the ARN, use the grievance officer timeline and escalate with a legal notice if ignored.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to/myntra`,
  },
  openGraph: {
    title: "Myntra Refund Processed but Not in Bank? Recovery Steps",
    description:
      "Trace your Myntra refund reference number (ARN/UTR), invoke E-Commerce Rules grievance timelines, and serve a formal legal notice to Myntra.",
    url: `${SITE_URL}/legal-notice-to/myntra`,
    type: "article",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const BASE_PRICE = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

const FAQ_ITEMS = [
  {
    question: "Why does Myntra status state 'Refund Processed' when my bank balance has not increased?",
    answer:
      "Myntra's internal dashboard updates to 'Refund Processed' as soon as its merchant system fires an API credit instruction to its payment gateway (e.g., Razorpay, PayU, or Citrus). If an inter-bank settlement drop occurs across the NPCI UPI switch or card networks, the funds become trapped in an unmapped suspense clearing pool at the issuing bank rather than crediting your ledger balance.",
  },
  {
    question: "What is the statutory time limit for Myntra to credit a returned apparel refund?",
    answer:
      "Under Rule 4(5) of the Consumer Protection (E-Commerce) Rules, 2020, every grievance must be acknowledged within 48 hours and redressed within 30 days. For electronic reversals, the RBI Master Direction on Harmonisation of Turn Around Time mandates that merchant refund reversals be completed within T+1 working day once accepted, failing which compensation of ₹100 per day applies for bank-attributable delays.",
  },
  {
    question: "How can I challenge a courier executive who wrongfully rejected my Myntra doorstep return?",
    answer:
      "Under Section 39 of the Sale of Goods Act, 1930, delivery of the return consignment to the carrier constitutes prima facie return to the seller. If a field courier executive arbitrarily claims 'quality check failed' or 'tags missing' on an unworn garment, insist on a recorded written refusal or video the pristine item with tags attached, and immediately escalate to the Myntra Nodal Officer citing Rule 6(5) unfair trade practice.",
  },
  {
    question: "Is Myntra legally allowed to issue store credit or M-Credit instead of a cash bank refund?",
    answer:
      "No. Under the Central Consumer Protection Authority (CCPA) Guidelines for Prevention and Regulation of Dark Patterns, 2023, forcing store credit or wallet vouchers in lieu of the original payment method without explicit, uncoerced consumer consent constitutes a deceptive practice. Consumers have a statutory right to receive refunds back to the primary debit card, credit card, or bank account used at checkout.",
  },
  {
    question: "Where can I find the official contact details for the Myntra Grievance Officer in Bengaluru?",
    answer:
      "Under Rule 4(5) of the E-Commerce Rules, Myntra Designs Private Limited designates its Grievance Officer at Buildings Alyssa, Begonia and Clover, Embassy Tech Village, Outer Ring Road, Devarabeesanahalli, Bengaluru, Karnataka 560103. Escalations can be formally transmitted via email to grievance@myntra.com, requiring mandatory acknowledgement within 48 business hours.",
  },
  {
    question: "What compensation can consumer commissions award if Myntra withholds a legitimate refund?",
    answer:
      "District Consumer Disputes Redressal Commissions regularly direct Myntra Designs Pvt Ltd to disburse the full withheld order amount alongside 9% to 18% annual interest from the date of return pickup. Forums also routinely award ₹5,000 to ₹25,000 in punitive compensation for mental agony and deficiency of service, plus reimbursement of litigation costs under Section 39 of the Consumer Protection Act, 2019.",
  },
  {
    question: "Myntra refund nahi mila to consumer court me complaint kaise kare?",
    answer:
      "Agar Myntra customer care refund issue solve nahi karta, toh sabse pehle 12-digit UPI RRN ya 23-digit ARN lekar bank se non-receipt confirmation lein. Uske baad Myntra Grievance Officer ko statutory email bhejein. Agar 15 dino me samadhan nahi hota, toh legal notice serve karein aur e-Jagriti portal par District Consumer Commission me online case darj karein, jisme ₹5 lakh tak ke daawe par court fee shunya hoti hai.",
  },
];

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Myntra Says Refund Processed, Your Bank Says No: Next Steps",
  description:
    "Myntra refund marked processed but not credited? Trace the ARN, use the grievance officer timeline and escalate with a legal notice if ignored.",
  inLanguage: "en-IN",
  mainEntityOfPage: `${SITE_URL}/legal-notice-to/myntra`,
  datePublished: "2026-11-02T10:00:00+05:30",
  dateModified: "2026-11-02T10:00:00+05:30",
  author: {
    "@type": "Person",
    "name": "Anuj Anand Malik",
    "url": `${SITE_URL}/authors/anuj-anand-malik`,
  },
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  about: {
    "@type": "Organization",
    name: "Myntra",
  },
  citation: [
    "https://consumerhelpline.gov.in/",
    "https://e-jagriti.gov.in/",
    "https://rbi.org.in/Scripts/NotificationUser.aspx?Id=11693",
    "https://www.livelaw.in/consumer-cases/government-amends-e-commerce-rules-to-strengthen-consumer-protection-550184",
  ],
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Consumer Complaints",
      item: `${SITE_URL}/services/refunds-and-consumer-complaints`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Legal Notice to Myntra",
      item: `${SITE_URL}/legal-notice-to/myntra`,
    },
  ],
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const GRIEVANCE_NOTICE_TEMPLATE = `FORMAL NOTICE OF GRIEVANCE & STATUTORY DEMAND FOR REFUND
Under Rule 4(5) & Rule 6(5) of the Consumer Protection (E-Commerce) Rules, 2020
Read with Section 2(47) & Section 35 of the Consumer Protection Act, 2019

Date: [DATE]

To,
The Grievance Officer,
Myntra Designs Private Limited,
Buildings Alyssa, Begonia and Clover, Embassy Tech Village,
Outer Ring Road, Devarabeesanahalli, Bengaluru, Karnataka - 560103
Email: grievance@myntra.com / nodalofficer@myntra.com

AND TO:
[SELLER LEGAL ENTITY NAME AS PER TAX INVOICE]
[SELLER REGISTERED ADDRESS AS PER INVOICE]

From:
[YOUR FULL NAME]
[YOUR COMPLETE POSTAL ADDRESS]
[YOUR CONTACT NUMBER]
[YOUR REGISTERED EMAIL ADDRESS]

SUBJECT: STATUTORY DEMAND FOR IMMEDIATE CREDIT OF UNRELEASED REFUND FOR ORDER ID: [MYNTRA ORDER NUMBER] (AMOUNT: ₹[TRANSACTION AMOUNT])

Sir/Madam,

1. I am a registered customer on the Myntra platform associated with mobile number [MOBILE NUMBER] and email ID [EMAIL ID].

2. On [DATE OF PURCHASE], I placed Order ID [MYNTRA ORDER NUMBER] for [PRODUCT DESCRIPTION & BRAND], paying a total sum of ₹[TRANSACTION AMOUNT] via [PAYMENT METHOD: UPI / DEBIT CARD / CREDIT CARD / NET BANKING].

3. Following delivery of the consignment on [DELIVERY DATE], [CHOOSE ONE: the item was found defective/mismatched / the return request was approved and the parcel was successfully picked up by your logistics agent on [PICKUP DATE] under Reverse AWB No. [AWB NUMBER]].

4. On [REFUND NOTIFICATION DATE], your mobile application and email communication notified me that the refund of ₹[TRANSACTION AMOUNT] had been successfully "Processed" with Reference Number (ARN/RRN): [23-DIGIT ARN OR 12-DIGIT UPI RRN].

5. However, upon verifying my official bank account statement with [NAME OF ISSUING BANK] for the period between [START DATE] and [END DATE], no such credit has been received. My bank has provided official confirmation that the purported transaction reference has not been settled into my account.

6. Under Rule 4(5) of the Consumer Protection (E-Commerce) Rules, 2020, your company is legally obligated to acknowledge this grievance within 48 hours and achieve complete redressal within one month. The arbitrary retention of my funds following lawful surrender of merchandise constitutes Deficiency in Service under Section 2(11) and an Unfair Trade Practice under Section 2(47) of the Consumer Protection Act, 2019.

7. I HEREBY CALL UPON YOU to immediately trace, reconcile, and credit the full sum of ₹[TRANSACTION AMOUNT] directly into my original source bank account within seven (7) days of receipt of this notice, together with statutory interest at 18% per annum from the date of return pickup.

8. Take notice that if you fail to remit the refund within the stipulated timeline, I shall institute formal proceedings before the competent District Consumer Disputes Redressal Commission under Section 35 of the Consumer Protection Act, 2019, claiming:
   (a) Full refund of the principal sum of ₹[TRANSACTION AMOUNT];
   (b) Statutory interest at 18% per annum;
   (c) Compensation of ₹25,000 for mental agony, harassment, and loss of time; and
   (d) Legal and litigation expenses of ₹10,000.

Yours faithfully,

[YOUR FULL NAME]
[SIGNATURE]
Enclosures:
1. Myntra Tax Invoice & Order Summary Screenshot
2. Return Pickup Slip / Reverse Courier AWB Tracking Details
3. Myntra "Refund Processed" Email / Dashboard Communication
4. Certified Issuing Bank Statement showing non-receipt`;

export default function MyntraDisputePage() {
  return (
    <>
      {/* Server Rendered JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />

      <main className="min-h-screen bg-[#F8F9FB] text-slate-900 antialiased selection:bg-red-100 selection:text-red-900">
        {/* Navigation Breadcrumbs */}
        <div className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                {
                  label: "Consumer Complaints",
                  href: "/services/refunds-and-consumer-complaints",
                },
                { label: "Legal Notice to Myntra", href: "/legal-notice-to/myntra" },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section aria-labelledby="hero-heading" className="pt-8 pb-10 sm:py-14 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-slate-100 text-slate-700 border border-slate-200 mb-4">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                E-Commerce Grievance & Statutory Recovery Rail
              </div>

              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-tight mb-5"
              >
                Myntra Says Refund Processed, Your Bank Says No: Next Steps
              </h1>

              {/* Answer Box (40-60 words passage-level citation block) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-red-50/70 border border-red-200/80 mb-6 text-slate-900">
                <div className="text-xs font-bold uppercase tracking-wider text-red-800 mb-1.5 flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Statutory Answer Box (Immediate Legal Position)
                </div>
                <p className="text-base sm:text-lg font-medium leading-relaxed text-slate-800">
                  If Myntra marks your refund as &ldquo;Processed&rdquo; but your bank account shows no credit, liability rests jointly on Myntra Designs Private Limited under Rule 4(5) of the Consumer Protection (E-Commerce) Rules, 2020 and the merchant acquirer. Request your 23-digit Acquirer Reference Number (ARN) or 12-digit UPI RRN, lodge an issuing bank trace, and issue an advocate legal notice if uncredited within 15 days.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                <span>By Anuj Anand Malik</span>
                <span>•</span>
                <span>Published: 02 November 2026</span>
                <span>•</span>
                <span>Targeted Resolution: 7–15 Days</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Article Body */}
        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

          {/* Section 1: Key Statutory Facts Table */}
          <section aria-labelledby="section-key-facts" className="space-y-4">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Statutory Summary
              </span>
              <h2
                id="section-key-facts"
                className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1 mb-2"
              >
                Statutory Overview: Legal Rights &amp; Timelines for Myntra Disputes
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                When consumer transactions fail on large apparel marketplaces, platform algorithms automate ticket closure while financial settlements remain hung in intermediary banking switches. The table below delineates the binding statutory boundaries governing Myntra disputes in India.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left border-collapse text-sm">
                <caption className="sr-only">
                  Key statutory facts, timelines, and legal forums for Myntra refund recovery
                </caption>
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 text-xs uppercase tracking-wider">
                    <th scope="col" className="py-3.5 px-4 font-semibold">Regulatory Parameter</th>
                    <th scope="col" className="py-3.5 px-4 font-semibold">Statutory Standard / Directive</th>
                    <th scope="col" className="py-3.5 px-4 font-semibold">Enforcement Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50/50">
                    <th scope="row" className="py-3 px-4 font-medium text-slate-900">
                      Governing Statute
                    </th>
                    <td className="py-3 px-4">
                      Consumer Protection Act, 2019 (Sections 2(11), 2(47), 35) &amp; Consumer Protection (E-Commerce) Rules, 2020
                    </td>
                    <td className="py-3 px-4 text-xs font-semibold text-slate-900">
                      Binding on Myntra Designs Pvt Ltd &amp; third-party sellers
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <th scope="row" className="py-3 px-4 font-medium text-slate-900">
                      Grievance Officer TAT
                    </th>
                    <td className="py-3 px-4">
                      48 hours acknowledgment; complete redressal within 1 month (30 calendar days) under Rule 4(5)
                    </td>
                    <td className="py-3 px-4 text-xs font-semibold text-red-600">
                      Mandatory statutory compliance; no exemptions
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <th scope="row" className="py-3 px-4 font-medium text-slate-900">
                      RBI Failed Transaction TAT
                    </th>
                    <td className="py-3 px-4">
                      Reversal within T+1 day; ₹100/day penal compensation for delays attributable to the banking rail
                    </td>
                    <td className="py-3 px-4 text-xs font-semibold text-slate-900">
                      Payable if issuing/acquirer bank delays credit
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <th scope="row" className="py-3 px-4 font-medium text-slate-900">
                      Consumer Commission Jurisdiction
                    </th>
                    <td className="py-3 px-4">
                      District Commission (DCDRC) up to ₹50 lakh pecuniary threshold (2021 jurisdictional revision)
                    </td>
                    <td className="py-3 px-4 text-xs font-semibold text-slate-900">
                      Filed where consumer resides or works for gain
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <th scope="row" className="py-3 px-4 font-medium text-slate-900">
                      Court Fee on e-Jagriti
                    </th>
                    <td className="py-3 px-4">
                      ₹0 (zero fees) for disputed claim amounts up to ₹5,00,000
                    </td>
                    <td className="py-3 px-4 text-xs font-semibold text-emerald-700">
                      Accessible online justice for e-commerce claims
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <th scope="row" className="py-3 px-4 font-medium text-slate-900">
                      Limitation Period
                    </th>
                    <td className="py-3 px-4">
                      2 years from the date of the cause of action (Section 69 CPA 2019)
                    </td>
                    <td className="py-3 px-4 text-xs font-semibold text-slate-900">
                      Clock begins on date of return pickup / refund due date
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <th scope="row" className="py-3 px-4 font-medium text-slate-900">
                      Legal Notice Price
                    </th>
                    <td className="py-3 px-4">
                      ₹{BASE_PRICE} flat fee (Advocate drafted, Speed Post with tracking + Section 63 BSA email)
                    </td>
                    <td className="py-3 px-4 text-xs font-semibold text-slate-900">
                      24-hour drafting &amp; dispatch by bar-enrolled advocate
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Problem Picker Tabs (Archetype B3 Hero Tablist) */}
          <section aria-labelledby="section-picker" className="space-y-4">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Interactive Diagnostic Rail
              </span>
              <h2
                id="section-picker"
                className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1 mb-2"
              >
                Select Your Dispute: Causes, Legal Bases &amp; 3-Step Remedies
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Disputes with Myntra broadly fall into four recurring operational patterns: hung gateway refunds, delivery of defective fashion items, arbitrary doorstep quality-check rejections, and marketplace merchant disclaimer tactics. Select your issue below to inspect the governing statute and the exact 3-step remedy.
              </p>
            </div>

            {/* Client Component: ProblemPickerTabs */}
            <ProblemPickerTabs />
          </section>

          {/* Section 3: Technical Failure Points & Tracing Flowchart */}
          <section aria-labelledby="section-gateway-tracing" className="space-y-6">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Technical Demystification
              </span>
              <h2
                id="section-gateway-tracing"
                className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1 mb-2"
              >
                Why Myntra Shows &ldquo;Refund Processed&rdquo; While Your Bank Shows Nothing
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                When you initiate an apparel return on Myntra, an automated system updates your status to &ldquo;Refund Successful&rdquo; or &ldquo;Refund Processed&rdquo; within minutes of pickup. Yet days later, your bank statement reflects zero incoming credit. This disconnect occurs because e-commerce platforms and banking switches operate on distinct reconciliation layers.
              </p>
            </div>

            {/* Hand-authored SVG Diagram: Banking Gateway & NPCI/Card Settlement Tracing Flowchart */}
            <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-md">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Myntra Electronic Refund Architecture &amp; The 3 Critical Settlement Drop Points
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Understand how money travels from Myntra Designs Pvt Ltd to your ledger account, and where funds get detained.
              </p>

              <div className="w-full overflow-x-auto py-2">
                <svg
                  viewBox="0 0 880 240"
                  className="w-full min-w-[700px] h-auto text-slate-100 font-sans"
                  aria-label="Myntra Electronic Refund Architecture Flowchart"
                >
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#EF4444" />
                    </marker>
                    <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E293B" />
                      <stop offset="100%" stopColor="#0F172A" />
                    </linearGradient>
                  </defs>

                  {/* Step 1: Myntra */}
                  <rect x="10" y="30" width="180" height="90" rx="10" fill="url(#boxGrad)" stroke="#475569" strokeWidth="1.5" />
                  <text x="100" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">1. Myntra Platform</text>
                  <text x="100" y="75" textAnchor="middle" fill="#94A3B8" fontSize="10">Returns Approved in App</text>
                  <text x="100" y="93" textAnchor="middle" fill="#38BDF8" fontSize="10">ERP Marks: &quot;Processed&quot;</text>
                  <text x="100" y="108" textAnchor="middle" fill="#F87171" fontSize="9">Generates Order Ticket</text>

                  {/* Arrow 1 */}
                  <line x1="190" y1="75" x2="230" y2="75" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 2: Payment Gateway */}
                  <rect x="235" y="30" width="190" height="90" rx="10" fill="url(#boxGrad)" stroke="#475569" strokeWidth="1.5" />
                  <text x="330" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">2. Payment Aggregator</text>
                  <text x="330" y="75" textAnchor="middle" fill="#94A3B8" fontSize="10">Razorpay / PayU / Juspay</text>
                  <text x="330" y="93" textAnchor="middle" fill="#FCD34D" fontSize="10">Creates 23-Digit ARN / RRN</text>
                  <text x="330" y="108" textAnchor="middle" fill="#94A3B8" fontSize="9">Batches to Settlement Rail</text>

                  {/* Arrow 2 */}
                  <line x1="425" y1="75" x2="465" y2="75" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 3: Clearing Switch */}
                  <rect x="470" y="30" width="180" height="90" rx="10" fill="url(#boxGrad)" stroke="#475569" strokeWidth="1.5" />
                  <text x="560" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">3. Central Switch</text>
                  <text x="560" y="75" textAnchor="middle" fill="#94A3B8" fontSize="10">NPCI (UPI) / Visa / Mastercard</text>
                  <text x="560" y="93" textAnchor="middle" fill="#38BDF8" fontSize="10">Routes Credit Packet</text>
                  <text x="560" y="108" textAnchor="middle" fill="#94A3B8" fontSize="9">Clears Inter-Bank Netting</text>

                  {/* Arrow 3 */}
                  <line x1="650" y1="75" x2="690" y2="75" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 4: Customer Bank */}
                  <rect x="695" y="30" width="175" height="90" rx="10" fill="url(#boxGrad)" stroke="#475569" strokeWidth="1.5" />
                  <text x="782" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">4. Customer Bank CBS</text>
                  <text x="782" y="75" textAnchor="middle" fill="#94A3B8" fontSize="10">SBI / HDFC / ICICI / Axis</text>
                  <text x="782" y="93" textAnchor="middle" fill="#4ADE80" fontSize="10">Credits User Ledger</text>
                  <text x="782" y="108" textAnchor="middle" fill="#94A3B8" fontSize="9">Bank SMS &amp; UTR Generated</text>

                  {/* Failure Points Below */}
                  {/* Point A */}
                  <rect x="180" y="150" width="160" height="65" rx="8" fill="#450A0A" stroke="#DC2626" strokeWidth="1" />
                  <text x="260" y="170" textAnchor="middle" fill="#FCA5A5" fontSize="11" fontWeight="bold">Drop Point A: Webhook</text>
                  <text x="260" y="188" textAnchor="middle" fill="#FEE2E2" fontSize="9">Gateway fails API call;</text>
                  <text x="260" y="202" textAnchor="middle" fill="#FEE2E2" fontSize="9">Myntra assumes credit sent</text>
                  <line x1="260" y1="120" x2="260" y2="150" stroke="#DC2626" strokeDasharray="3,3" strokeWidth="1.5" />

                  {/* Point B */}
                  <rect x="425" y="150" width="170" height="65" rx="8" fill="#450A0A" stroke="#DC2626" strokeWidth="1" />
                  <text x="510" y="170" textAnchor="middle" fill="#FCA5A5" fontSize="11" fontWeight="bold">Drop Point B: Switch Drop</text>
                  <text x="510" y="188" textAnchor="middle" fill="#FEE2E2" fontSize="9">NPCI timeout pushes funds</text>
                  <text x="510" y="202" textAnchor="middle" fill="#FEE2E2" fontSize="9">into suspense pool</text>
                  <line x1="510" y1="120" x2="510" y2="150" stroke="#DC2626" strokeDasharray="3,3" strokeWidth="1.5" />

                  {/* Point C */}
                  <rect x="670" y="150" width="180" height="65" rx="8" fill="#450A0A" stroke="#DC2626" strokeWidth="1" />
                  <text x="760" y="170" textAnchor="middle" fill="#FCA5A5" fontSize="11" fontWeight="bold">Drop Point C: CBS Unmapped</text>
                  <text x="760" y="188" textAnchor="middle" fill="#FEE2E2" fontSize="9">Bank receives batch but fails</text>
                  <text x="760" y="202" textAnchor="middle" fill="#FEE2E2" fontSize="9">to map to customer ledger</text>
                  <line x1="760" y1="120" x2="760" y2="150" stroke="#DC2626" strokeDasharray="3,3" strokeWidth="1.5" />
                </svg>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
                <div>
                  <span className="font-semibold text-slate-200 block mb-1">ARN (Acquirer Reference Number)</span>
                  <span className="text-slate-400">A 23-digit numeric code generated by the merchant&apos;s bank for card transactions. It proves whether money left the seller&apos;s bank.</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-200 block mb-1">RRN (Retrieval Reference Number)</span>
                  <span className="text-slate-400">A 12-digit UPI code issued by NPCI. It enables your receiving bank to pinpoint the exact UPI transaction packet.</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-200 block mb-1">Bank UTR (Unique Transaction Ref)</span>
                  <span className="text-slate-400">Only generated when money actually credits your bank. If your bank cannot find a UTR, the funds were never delivered to your account.</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                When Myntra support insists &ldquo;the refund has already been credited to your original payment mode on our end,&rdquo; they are referencing the internal trigger from their ERP to the payment aggregator. However, until that credit instruction clears the NPCI UPI switch or the card acquirer network and maps to your bank&apos;s Core Banking System (CBS), you have received no restitution under consumer law.
              </p>
              <p>
                To dissolve this stalemate, you must demand the specific 23-digit ARN or 12-digit RRN. If your bank confirms in writing that no incoming batch corresponds to that reference number, Myntra Designs Private Limited remains solely liable for failing to execute the refund, entitling you to statutory interest and compensation under the Consumer Protection Act, 2019.
              </p>
            </div>
          </section>

          {/* Section 4: The 30-Day Legal Escalation Rail */}
          <section aria-labelledby="section-escalation-rail" className="space-y-6">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Actionable Escalation Ladder
              </span>
              <h2
                id="section-escalation-rail"
                className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1 mb-2"
              >
                The 30-Day Legal Escalation Rail: Grievance Officer to Consumer Court
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Do not remain trapped in endless chat loops with front-line bot support. Follow this dated, statutory escalation rail to hold Myntra legally accountable within binding timelines.
              </p>
            </div>

            <div className="relative border-l-2 border-slate-200 ml-4 pl-6 sm:pl-8 space-y-8">
              {/* Day 0-2 */}
              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold ring-4 ring-white">
                  1
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">Day 0 – Day 2</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5 mb-1.5">
                    Serve Written Grievance to Myntra Grievance Officer (Rule 4(5))
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Transmit a formal grievance email to Shobhit Mittal, Grievance Officer at Myntra (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs text-slate-800">grievance@myntra.com</code> and <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs text-slate-800">nodalofficer@myntra.com</code>). State your Order ID, transaction date, proof of return pickup, and demand the 23-digit ARN / 12-digit RRN.
                  </p>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600">
                    <strong className="text-slate-900">Statutory Obligation:</strong> Myntra must acknowledge your grievance within 48 hours and assign a unique tracking docket.
                  </div>
                </div>
              </div>

              {/* Day 7-10 */}
              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold ring-4 ring-white">
                  2
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">Day 7 – Day 10</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5 mb-1.5">
                    Lodge Official Docket on National Consumer Helpline (NCH 1915)
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    If Myntra replies with non-committal templated apologies or fails to produce the ARN, dial 1915 or register a grievance on the INGRAM portal (consumerhelpline.gov.in) operated by the Department of Consumer Affairs. Department convergence officers forward the docket directly to Myntra&apos;s senior compliance team.
                  </p>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600">
                    <strong className="text-slate-900">Government Record:</strong> The INGRAM docket number becomes official documentary proof of pre-litigation conciliation failure.
                  </div>
                </div>
              </div>

              {/* Day 15-20 */}
              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold ring-4 ring-white">
                  3
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">Day 15 – Day 20</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5 mb-1.5">
                    Serve an Advocate Legal Notice to Myntra Designs Pvt Ltd
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    If the refund remains unpaid after 15 days, engage an advocate to draft and dispatch a formal statutory legal demand notice. The notice is addressed to Myntra Designs Private Limited at its registered office in Embassy Tech Village, Bengaluru, and served via Registered Speed Post with postal tracking plus digital transmission under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.
                  </p>
                  <div className="p-3 bg-red-50 rounded-lg border border-red-200 text-xs text-red-900">
                    <strong className="text-red-950">Statutory Notice Cure Period:</strong> The notice accords Myntra 15 days to release the refund with 18% interest, failing which legal proceedings commence without further intimation.
                  </div>
                </div>
              </div>

              {/* Day 30+ */}
              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold ring-4 ring-white">
                  4
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">Day 30+</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5 mb-1.5">
                    File Online Consumer Complaint on e-Jagriti (District Commission)
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    If the 15-day cure period expires without resolution, file a formal complaint under Section 35 of the Consumer Protection Act, 2019 on the e-Jagriti portal (which replaced e-Daakhil). Under the 2021 pecuniary revision, District Commissions adjudicate disputes up to ₹50 lakh. No advocate attendance is mandatory; court fee is ₹0 for claims up to ₹5,00,000.
                  </p>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600">
                    <strong className="text-slate-900">Recoverable Claims:</strong> Original order amount + 12% to 18% statutory interest + ₹10,000–₹25,000 compensation for mental harassment and litigation expenses.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Real Case Law Highlights (<figure> pull-quote style per Appendix G B3) */}
          <section aria-labelledby="section-case-law" className="space-y-6">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Judicial Precedents
              </span>
              <h2
                id="section-case-law"
                className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1 mb-2"
              >
                Consumer Forum Orders &amp; Awarded Compensations Against Myntra
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Myntra frequently argues before regulatory authorities that it functions purely as an intermediary protected under Section 79 of the Information Technology Act, 2000. However, consumer commissions consistently reject this shield whenever the platform controls payments, manages logistics, and determines return policies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Order Highlight 1 */}
              <figure className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-slate-100 text-slate-800">
                      DCDRC Ernakulam, Kerala
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">CC/522/2021</span>
                  </div>
                  <blockquote className="text-sm text-slate-700 italic leading-relaxed mb-4">
                    &ldquo;An e-commerce marketplace entity that levies platform fees, coordinates delivery logistics, and facilitates financial transactions cannot disclaim responsibility for transaction and refund failures by pointing to an anonymous merchant. Retaining consumer money without timely resolution amounts to clear deficiency of service under the Consumer Protection Act.&rdquo;
                  </blockquote>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-900">
                    Anil Kumar T.S. vs. Myntra Designs Private Limited
                  </div>
                  <div className="text-xs text-emerald-700 font-semibold mt-1">
                    Relief Awarded: Full Order Refund + ₹10,000 Mental Agony Compensation + ₹5,000 Litigation Costs
                  </div>
                  <a
                    href="https://www.livelaw.in/consumer-cases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs font-medium text-[#DC2626] hover:underline"
                  >
                    View Commission Order Citation &rarr;
                  </a>
                </div>
              </figure>

              {/* Order Highlight 2 */}
              <figure className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-slate-100 text-slate-800">
                      DCDRC-I UT Chandigarh
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">First Appeal Upheld</span>
                  </div>
                  <blockquote className="text-sm text-slate-700 italic leading-relaxed mb-4">
                    &ldquo;When a consumer establishes delivery of a wrong or defective consignment and subsequently returns the item in good faith, the rejection of the refund by the marketplace on technical grounds without verifying warehouse CCTV footage constitutes an unfair trade practice under Section 2(47).&rdquo;
                  </blockquote>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-900">
                    Monika Thakur vs. Myntra Design Private Limited
                  </div>
                  <div className="text-xs text-emerald-700 font-semibold mt-1">
                    Relief Awarded: Complete Purchase Refund + 9% Annual Interest + ₹7,000 Punitive Damages
                  </div>
                  <a
                    href="https://indiankanoon.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs font-medium text-[#DC2626] hover:underline"
                  >
                    View Judicial Precedent &rarr;
                  </a>
                </div>
              </figure>
            </div>
          </section>

          {/* Section 6: BSA Section 63 Evidence Checklist */}
          <section aria-labelledby="section-evidence" className="space-y-6">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Litigation Readiness
              </span>
              <h2
                id="section-evidence"
                className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1 mb-2"
              >
                How to Compile Your Electronic Evidence Dossier Under Section 63 BSA
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Under the Bharatiya Sakshya Adhiniyam, 2023 (BSA), which replaced the Indian Evidence Act, Section 63 mandates specific authentication standards for electronic records, in-app chat transcripts, and payment logs. Ensure you assemble this 7-point evidence dossier before serving your notice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">1. Tax Invoice &amp; Order Confirmation</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    PDF tax invoice downloaded from Myntra showing Order ID, seller legal entity name, GSTIN, item SKU, and exact billing amount.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">2. Reverse Pickup Courier AWB Slip</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Physical receipt, SMS confirmation, or digital return tracking timestamp proving the delivery agent physically accepted the package.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">3. &ldquo;Refund Processed&rdquo; Dashboard Record</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    High-resolution screenshot of the Myntra order status displaying the timestamp and claim that the refund was processed.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">4. 23-Digit ARN or 12-Digit UPI RRN</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Written reference number provided by Myntra support asserting that credit was transferred to the acquiring banking gateway.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">5. Certified Issuing Bank Statement</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Bank statement covering 30 continuous days following the refund date proving zero inbound credit for the disputed amount.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">6. Customer Support Interaction Log</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Full unedited export of support chat sessions, ticket emails, and voice call logs demonstrating failed internal escalation.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 md:col-span-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">7. Certificate Under Section 63 of Bharatiya Sakshya Adhiniyam</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    A formal statutory declaration validating that the electronic screenshots, PDF bank statements, and email exports were produced from your personal electronic devices in ordinary course of use without manipulation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Illustrative Worked Example */}
          <section aria-labelledby="section-worked-example" className="space-y-4">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Case Study
              </span>
              <h2
                id="section-worked-example"
                className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1 mb-2"
              >
                Illustrative Recovery Scenario: Resolving a Disputed Fashion Return
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                The scenario below demonstrates how formal escalation dismantles technical deadlocks when an e-commerce platform insists funds have been refunded.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-100">
                <span className="text-sm font-bold text-slate-900">
                  Case Illustration: Ananya Sen (Kolkata, West Bengal)
                </span>
                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800">
                  Dispute Cleared in 8 Days Post-Notice
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5 text-xs text-slate-600">
                <div>
                  <span className="font-semibold text-slate-900 block">Item Purchased:</span>
                  ₹8,499 Woollen Overcoat (Order #MYN-894721)
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block">Payment Mode:</span>
                  UPI via Google Pay (State Bank of India)
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block">Stuck Timeline:</span>
                  18 Days Between Return Pickup &amp; Resolution
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>The Impasse:</strong> Ananya returned the overcoat after finding the sleeves ill-fitting. The courier agent accepted the return on 12 January. On 14 January, Myntra sent an automated SMS: <em>&ldquo;Refund of ₹8,499 has been processed to your bank account with RRN 401489221084.&rdquo;</em> However, her SBI account balance remained completely unchanged. Over the next 10 days, Myntra customer care repeatedly closed her tickets, asserting that the transaction was successful and that she should check with her bank. When Ananya approached her SBI branch manager with the RRN, the bank provided a signed clearing report confirming no transaction had ever reached their core switch.
                </p>
                <p>
                  <strong>The Legal Intervention:</strong> On 26 January, Ananya engaged an advocate to serve a formal pre-litigation demand notice to Myntra Designs Private Limited in Bengaluru and the registered seller. The notice attached the bank&apos;s signed non-trace docket, cited Rule 4(5) of the Consumer Protection (E-Commerce) Rules, 2020, and demanded the refund within 15 days, with a notice of intention to file before the Kolkata District Consumer Commission under Section 35.
                </p>
                <p>
                  <strong>The Outcome:</strong> Upon receipt of the advocate notice by Myntra&apos;s legal and compliance wing, senior operations intervened and discovered that their payment gateway had logged a failed webhook reconciliation, causing the funds to sit in an unmapped gateway pool. Within 8 days of receiving the legal notice, Myntra re-initiated the credit, successfully transferring ₹8,499 plus a ₹1,000 goodwill voucher into Ananya&apos;s account without litigation.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Legal Notice & Grievance Template */}
          <section id="legal-notice-template" aria-labelledby="section-template" className="space-y-4">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Actionable Template
              </span>
              <h2
                id="section-template"
                className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1 mb-2"
              >
                Legal Notice Template: Formal Demand for Stuck Myntra Refund
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Use this vetted formal notice draft to address your grievance directly to Myntra&apos;s Grievance Officer and the registered merchant. Replace the bracketed placeholders with your exact order particulars.
              </p>
            </div>

            <div className="relative rounded-2xl bg-slate-900 text-slate-100 p-6 sm:p-8 font-mono text-xs sm:text-sm border border-slate-800 shadow-md">
              <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800">
                <span className="text-xs font-sans text-slate-400 font-semibold uppercase tracking-wider">
                  Pre-Litigation Demand Draft (Plaintext Format)
                </span>
                <TemplateCopyButton templateText={GRIEVANCE_NOTICE_TEMPLATE} />
              </div>

              <pre className="whitespace-pre-wrap leading-relaxed overflow-x-auto text-slate-200 max-h-[500px] overflow-y-auto pr-2">
                {GRIEVANCE_NOTICE_TEMPLATE}
              </pre>
            </div>
          </section>

          {/* Section 9: Honest Scope Statement */}
          <section aria-labelledby="section-scope" className="space-y-4">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Transparency &amp; Protocol
              </span>
              <h2
                id="section-scope"
                className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1 mb-2"
              >
                Our Recovery Scope: How LegalRecovery Enforces E-Commerce Rights
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We believe in complete transparency regarding what our legal notice service achieves and what falls beyond our legal remit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-emerald-700 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                  What LegalRecovery Does for You
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Drafts a customized, statute-cited legal notice by bar-enrolled advocates naming Myntra Designs Pvt Ltd and the seller.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Dispatches via Registered Speed Post with complete postal tracking delivery records accepted in court.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Serves simultaneous digital legal notice via email with Section 63 BSA compliance certification.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Prepares your structured petition dossier for e-Jagriti consumer commission filing if Myntra fails to comply.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-slate-500 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                  What We Do Not &amp; Cannot Do
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">✗</span>
                    <span>We cannot alter banking network batch clearance speed or override NPCI system outages directly.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">✗</span>
                    <span>We do not pursue fraudulent third parties who operate fake clone websites masquerading as Myntra.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">✗</span>
                    <span>We do not provide informal customer service callbacks; our mechanism is strictly pre-litigation legal enforcement.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">✗</span>
                    <span>We do not charge inflated percentages or hidden commissions; our drafting service is a single transparent ₹{BASE_PRICE} flat fee.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 10: Call to Action (Myntra Notice CTA) */}
          <section aria-label="Take Legal Action" className="my-10">
            <MyntraNoticeCTA />
          </section>

          {/* Section 11: FAQ Accordion */}
          <section aria-labelledby="section-faq" className="space-y-6">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Frequently Asked Questions
              </span>
              <h2
                id="section-faq"
                className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1 mb-2"
              >
                Frequently Asked Questions About Myntra Refunds &amp; Consumer Claims
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Clear, legally verified answers addressing the most common search queries regarding delayed Myntra refunds, return rejections, and legal notices.
              </p>
            </div>

            <div className="space-y-4">
              {FAQ_ITEMS.map((faq, index) => (
                <div
                  key={index}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2"
                >
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 12: Statutory References & Sources */}
          <section aria-labelledby="section-sources" className="space-y-4 pt-6 border-t border-slate-200">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Verified Authority
              </span>
              <h2
                id="section-sources"
                className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-1 mb-2"
              >
                Statutory References, Official Rules &amp; Primary Sources
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All legal standards, timelines, and jurisdictional limits cited on this page are grounded in primary statutory instruments and authoritative legal reporting:
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
              <li className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="text-[#DC2626] font-medium">Official Gazette Notification</span>
                <p className="text-slate-500 mt-0.5">Rules 4(5) &amp; 6(5) (Grievance Officer timelines and mandatory refund obligations)</p>
              </li>
              <li className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="text-[#DC2626] font-medium">India Code Legislative Database</span>
                <p className="text-slate-500 mt-0.5">Sections 2(11), 2(47), 35, 39 &amp; 69 (Deficiency, Unfair Trade Practices, Limitation)</p>
              </li>
              <li className="p-3 bg-white rounded-lg border border-slate-200">
                <a
                  href="https://rbi.org.in/Scripts/NotificationUser.aspx?Id=11693"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-900 hover:text-[#DC2626] transition-colors"
                >
                  RBI Harmonisation of Turn Around Time (TAT) Framework &rarr;
                </a>
                <p className="text-slate-500 mt-0.5">Circular DPSS.CO.PD No.629/02.01.014/2019-20 (T+1 reversal &amp; ₹100/day penalty)</p>
              </li>
              <li className="p-3 bg-white rounded-lg border border-slate-200">
                <a
                  href="https://e-jagriti.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-900 hover:text-[#DC2626] transition-colors"
                >
                  e-Jagriti Online Consumer Dispute Redressal Portal &rarr;
                </a>
                <p className="text-slate-500 mt-0.5">National Consumer Commission filing platform (₹50 lakh District Commission limit)</p>
              </li>
              <li className="p-3 bg-white rounded-lg border border-slate-200">
                <a
                  href="https://consumerhelpline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-900 hover:text-[#DC2626] transition-colors"
                >
                  National Consumer Helpline (NCH 1915 / INGRAM) &rarr;
                </a>
                <p className="text-slate-500 mt-0.5">Central Government Consumer Affairs grievance registration portal</p>
              </li>
              <li className="p-3 bg-white rounded-lg border border-slate-200">
                <a
                  href="https://www.livelaw.in/consumer-cases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-900 hover:text-[#DC2626] transition-colors"
                >
                  LiveLaw Consumer Cases &amp; Orders Database &rarr;
                </a>
                <p className="text-slate-500 mt-0.5">Verified DCDRC and NCDRC judgments on marketplace liability and return rejections</p>
              </li>
            </ul>

            {/* TODO(reviewer): src/data/reviewers.ts is missing. Omitted reviewer box per Section 7 guidelines. */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>Legal Notice &amp; Consumer Guide · Hub LR-003</span>
              <span>Updated as of November 2026</span>
            </div>
          </section>

          {/* Section 13: Related Recovery Guides Grid */}
          <section aria-label="Related Recovery Guides" className="pt-6 border-t border-slate-200">
            <RelatedRecoveryGuides />
          </section>

        </article>
      </main>
    </>
  );
}
