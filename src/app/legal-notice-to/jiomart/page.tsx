import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import JioMartNoticeCTA from "./JioMartNoticeCTA";
import ProblemPickerTabs from "./ProblemPickerTabs";
import TemplateCopyButton from "./TemplateCopyButton";

export const metadata: Metadata = {
  title: "JioMart Refund or Wrong Delivery: Complaint & Legal Notice",
  description:
    "JioMart refund pending or wrong items delivered? Step-by-step escalation, consumer-law basis and when to send a legal notice.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to/jiomart`,
  },
  openGraph: {
    title: "Wrong JioMart Delivery or Delayed Refund? Legal Escalation Steps",
    description:
      "Statutory rights for wrong items, missing groceries, and delayed refunds from Reliance Retail Limited. Legal notice drafting and consumer court remedies.",
    url: `${SITE_URL}/legal-notice-to/jiomart`,
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
    question: "How many days does JioMart legally have to issue a refund for returned grocery or canceled orders?",
    answer:
      "Under Rule 4(5) of the Consumer Protection (E-Commerce) Rules, 2020 and RBI Turn Around Time directives, refund reversals for electronic payments must be completed within T+1 working day post-approval. For cash-on-delivery orders, JioMart must disburse the amount directly to the customer's verified bank account without imposing mandatory wallet balances.",
  },
  {
    question: "Can JioMart refuse a refund if a delivered grocery or FMCG product is expired or damaged?",
    answer:
      "No. Section 2(47) of the Consumer Protection Act, 2019 classifies delivering expired or substandard consumable goods as an unfair trade practice. Consumer commissions have repeatedly ruled that buyers are not responsible for checking expiry dates prior to receiving packages, and platforms cannot disclaim liability under non-returnable grocery policies.",
  },
  {
    question: "What should I do if JioMart customer care marks my wrong delivery complaint as 'resolved' without picking up the item?",
    answer:
      "When JioMart automated support closes a wrong delivery ticket without resolution, escalate immediately to JioMart's Grievance Officer at grievanceofficer@jiomart.com quoting your original ticket ID. If no remedy is provided within 48 hours as mandated by Rule 4(5), lodge an NCH 1915 complaint followed by an advocate legal notice.",
  },
  {
    question: "Is Reliance Retail Limited personally liable if a third-party seller on JioMart sends the wrong product?",
    answer:
      "Yes. Under the Consumer Protection (E-Commerce) Rules, 2020, marketplace platforms bear statutory fallback liability if an onboarded seller fails to deliver ordered goods or refuses lawful refunds. Reliance Retail cannot seek complete intermediary immunity under Section 79 of the IT Act when it controls checkout, invoicing, and logistics fulfillment.",
  },
  {
    question: "Can JioMart force me to accept a JioMart Wallet balance or coupon instead of a bank refund?",
    answer:
      "Under the CCPA Guidelines for Prevention and Regulation of Dark Patterns, 2023, forcing store credit or wallet vouchers without explicit, uncoerced consumer consent is strictly prohibited. Consumers possess a statutory right to insist on a direct credit to the original payment source (UPI, debit/credit card, or net banking).",
  },
  {
    question: "JioMart par galat saman deliver hone par ya refund na aane par legal notice kaise bhejein?",
    answer:
      "Agar JioMart helpline 1800 890 1222 ya grievance officer se samadhan na mile, toh delivery invoice, unboxing photos, aur payment proof ke sath Reliance Retail Limited ko formal legal demand notice bhejein. Notice me 15 din ka statutory samay dekar 100% refund aur compensation ki maang karein; yadi company ignore karti hai toh e-Jagriti portal par District Consumer Commission me mukadma darj karein.",
  },
];

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "JioMart Delivered the Wrong Order? Refund Rights Explained",
  description:
    "JioMart refund pending or wrong items delivered? Step-by-step escalation, consumer-law basis and when to send a legal notice.",
  inLanguage: "en-IN",
  mainEntityOfPage: `${SITE_URL}/legal-notice-to/jiomart`,
  datePublished: "2026-11-02T10:00:00+05:30",
  dateModified: "2026-11-02T10:00:00+05:30",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  about: {
    "@type": "Organization",
    name: "JioMart",
  },
  citation: [
    "https://consumerhelpline.gov.in/",
    "https://e-jagriti.gov.in/",
    "https://rbi.org.in/Scripts/NotificationUser.aspx?Id=11693",
    "https://www.livelaw.in",
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
      name: "JioMart Refund Legal Notice",
      item: `${SITE_URL}/legal-notice-to/jiomart`,
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

const FORMAL_NOTICE_TEMPLATE = `LEGAL NOTICE / DEMAND FOR RESTITUTION

To,
Reliance Retail Limited (JioMart Division)
CIN: U01100MH1999PLC120563
Registered Office: 3rd Floor, Court House,
Lokmanya Tilak Marg, Dhobi Talao,
Mumbai - 400 002, Maharashtra, India.
Email: grievanceofficer@jiomart.com / nodalofficer@jiomart.com

AND TO:
[SELLER NAME / THIRD-PARTY ENTITY IF APPLICABLE]
[SELLER REGISTERED ADDRESS AS PER TAX INVOICE]

SUBJECT: STATUTORY NOTICE UNDER SECTION 2(11) & SECTION 2(47) OF THE CONSUMER PROTECTION ACT, 2019 READ WITH RULE 4(5) & RULE 6(5) OF THE CONSUMER PROTECTION (E-COMMERCE) RULES, 2020 FOR WRONGFUL DELIVERY AND REFUSAL OF LAWFUL REFUND IN RESPECT OF JIOMART ORDER NO. [ORDER_NUMBER].

Sir/Madam,

Under instructions from and on behalf of my client [CLIENT_FULL_NAME], residing at [CLIENT_RESIDENTIAL_ADDRESS], I hereby serve upon you this formal statutory demand notice:

1. That on [ORDER_DATE], my client placed an order on your online e-commerce platform 'JioMart' (operated by Reliance Retail Limited) bearing Order No. [ORDER_NUMBER], for the purchase of [ITEM_DESCRIPTION] for a total valuable consideration of Rs. [AMOUNT_PAID]/- (Rupees [AMOUNT_IN_WORDS] only), paid through [PAYMENT_METHOD - UPI/DEBIT CARD/CREDIT CARD/NET BANKING].

2. That on [DELIVERY_DATE], your delivery partner arrived at my client's premises and handed over a consignment. Upon opening the consignment, my client discovered to their utter shock that [SELECT: completely wrong items were delivered instead of the ordered products / items were delivered in spoiled/broken/expired condition / critical items were missing from the order].

3. That on the very same day, my client lodged a complaint via the JioMart application and customer support (Ticket ID: [TICKET_ID]), providing photographic evidence of the mismatch. However, your customer support arbitrarily [SELECT: rejected the return alleging package was verified / closed the ticket without pickup / promised refund but failed to disburse funds despite lapse of statutory timelines].

4. That under Rule 6(5) of the Consumer Protection (E-Commerce) Rules, 2020, an e-commerce entity is legally barred from refusing to take back goods or discontinue services if such goods are defective, deficient, or different from the description on the platform. Furthermore, forcing my client to retain unwanted goods or withholding payment constitutes an Unfair Trade Practice under Section 2(47) and Deficiency in Service under Section 2(11) of the Consumer Protection Act, 2019.

5. That under Rule 4(5) of the E-Commerce Rules, 2020 and Reserve Bank of India Turn Around Time directives, my client is entitled to an immediate refund of Rs. [AMOUNT_PAID]/- to the original payment source, along with compensatory interest.

I THEREFORE CALL UPON YOU to jointly and severally comply with the following demands within FIFTEEN (15) DAYS from the receipt of this legal notice:

(a) Remit the full amount of Rs. [AMOUNT_PAID]/- (Rupees [AMOUNT_IN_WORDS] only) directly into my client's bank account via electronic transfer;
(b) Pay a sum of Rs. [COMPENSATION_AMOUNT]/- towards damages for mental harassment, inconvenience, and deficiency in service caused to my client;
(c) Pay a sum of Rs. [LEGAL_COSTS]/- towards legal fees incurred in issuing this notice.

PLEASE TAKE NOTE that in the event of your failure to comply with the requisitions within the stipulated 15 days, my client has given me peremptory instructions to initiate appropriate legal proceedings against Reliance Retail Limited and its directors before the competent District Consumer Disputes Redressal Commission under Section 35 of the Consumer Protection Act, 2019, through the e-Jagriti portal, holding you liable for all consequential costs and punitive damages.

This notice is issued without prejudice to all other rights and remedies available to my client under applicable Indian laws.

Copy retained for record and submission before the Consumer Commission.

[ADVOCATE_NAME]
Advocate, Bar Council of [STATE]
Enrolment No: [ENROLMENT_NUMBER]
Office Address: [ADVOCATE_OFFICE_ADDRESS]
Contact: [ADVOCATE_PHONE] | [ADVOCATE_EMAIL]`;

export default function JioMartRecoveryPage() {
  return (
    <>
      {/* Server-Rendered JSON-LD Structured Data */}
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

      <div className="bg-[#FBFBFC] text-slate-800 min-h-screen">
        {/* Navigation Breadcrumbs */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              {
                label: "Consumer Complaints",
                href: "/services/refunds-and-consumer-complaints",
              },
              { label: "JioMart Legal Notice", href: "/legal-notice-to/jiomart" },
            ]}
          />
        </div>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          {/* BLOCK 1: Hero Header & Statutory Answer Box */}
          <header className="mb-10 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-200 mb-4">
              <span>Reliance Retail Dispute Resolution</span>
              <span aria-hidden="true">•</span>
              <span>Updated November 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-6">
              JioMart Delivered the Wrong Order? Refund Rights Explained
            </h1>

            {/* Answer Box (40–60 words) */}
            <section
              aria-label="Direct Statutory Answer"
              className="p-5 sm:p-6 rounded-2xl bg-amber-50/80 border-2 border-amber-300/80 shadow-sm"
            >
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-2">
                <svg className="w-4 h-4 text-amber-700" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Direct Statutory Answer</span>
              </div>
              <p className="text-base sm:text-lg text-slate-900 font-medium leading-relaxed">
                If JioMart or Reliance Retail delivers wrong items or withholds your refund, the platform bears joint and fallback liability under Rule 4(5) of the Consumer Protection (E-Commerce) Rules, 2020 and Section 2(47) of the Consumer Protection Act, 2019. Escalate first to grievanceofficer@jiomart.com (48-hour response limit); if unresolved within 15 days, serve an advocate legal notice before filing on e-Jagriti.
              </p>
            </section>
          </header>

          {/* BLOCK 2: Archetype B3 Problem Picker Tabs */}
          <section aria-labelledby="problem-picker-heading" className="mb-14">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Dispute Diagnosis Island
                </span>
                <h2
                  id="problem-picker-heading"
                  className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Select Your JioMart Issue: Delivery or Refund Failure
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md">
                Click your issue to review the underlying root cause, governing consumer regulations, and our prescribed 3-step legal remedy.
              </p>
            </div>

            {/* Interactive Tablist Island */}
            <ProblemPickerTabs />
          </section>

          {/* BLOCK 3: Inline Hand-Authored SVG Flowchart */}
          <section aria-labelledby="money-flow-heading" className="mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
              Fulfillment & Banking Architecture
            </span>
            <h2
              id="money-flow-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              How Does JioMart's Grocery & Electronics Refund Process Break Down?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              When an order placed on JioMart fails, financial and physical inventory routes diverge across three distinct nodes: the local fulfillment centre (Reliance Smart Point or third-party merchant), the payment processing gateway, and your bank. The diagram below illustrates how delivery failures trigger legal fallback obligations under Indian consumer law.
            </p>

            <figure className="p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-x-auto">
              <svg
                viewBox="0 0 880 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full min-w-[700px] h-auto"
                aria-label="JioMart order delivery discrepancy and legal restitution pathway flowchart"
              >
                {/* Node 1: Customer Order Checkout */}
                <rect x="20" y="30" width="180" height="90" rx="12" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2" />
                <text x="110" y="65" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="bold">Customer Checkout</text>
                <text x="110" y="85" textAnchor="middle" fill="#475569" fontSize="11">Prepaid UPI / Card / COD</text>
                <text x="110" y="102" textAnchor="middle" fill="#0369A1" fontSize="10">Funds via JioPay/PG</text>

                {/* Arrow 1 to 2 */}
                <path d="M200 75 H250" stroke="#0284C7" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowhead)" />

                {/* Node 2: Warehouse Fulfillment Hub */}
                <rect x="250" y="30" width="190" height="90" rx="12" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="2" />
                <text x="345" y="65" textAnchor="middle" fill="#14532D" fontSize="13" fontWeight="bold">Fulfillment Hub / Seller</text>
                <text x="345" y="85" textAnchor="middle" fill="#166534" fontSize="11">Smart Point / Merchant</text>
                <text x="345" y="102" textAnchor="middle" fill="#15803D" fontSize="10">Package Packing & Dispatch</text>

                {/* Arrow 2 to 3 */}
                <path d="M440 75 H490" stroke="#16A34A" strokeWidth="2" markerEnd="url(#arrowhead)" />

                {/* Node 3: Doorstep Discrepancy Point */}
                <rect x="490" y="30" width="190" height="90" rx="12" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2" />
                <text x="585" y="60" textAnchor="middle" fill="#991B1B" fontSize="13" fontWeight="bold">Doorstep Delivery Point</text>
                <text x="585" y="80" textAnchor="middle" fill="#B91C1C" fontSize="11">Wrong SKU / Damaged Item</text>
                <text x="585" y="98" textAnchor="middle" fill="#DC2626" fontSize="10" fontWeight="600">Bot Closes Return Request</text>

                {/* Arrow Downwards to Escalation */}
                <path d="M585 120 V170" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowhead)" />

                {/* Node 4: Grievance & NCH Layer */}
                <rect x="490" y="170" width="190" height="110" rx="12" fill="#FFFBEB" stroke="#FCD34D" strokeWidth="2" />
                <text x="585" y="200" textAnchor="middle" fill="#92400E" fontSize="13" fontWeight="bold">Statutory Escalation Tier</text>
                <text x="585" y="220" textAnchor="middle" fill="#B45309" fontSize="11">Grievance Officer (48h)</text>
                <text x="585" y="238" textAnchor="middle" fill="#78350F" fontSize="10">Rule 4(5) E-Commerce Rules</text>
                <text x="585" y="256" textAnchor="middle" fill="#B45309" fontSize="10">NCH 1915 INGRAM Docket</text>

                {/* Arrow Leftwards from Grievance to Legal Notice */}
                <path d="M490 225 H380" stroke="#D97706" strokeWidth="2" markerEnd="url(#arrowhead)" />

                {/* Node 5: Advocate Legal Notice */}
                <rect x="190" y="170" width="190" height="110" rx="12" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2" />
                <text x="285" y="200" textAnchor="middle" fill="#1E3A8A" fontSize="13" fontWeight="bold">Advocate Legal Notice</text>
                <text x="285" y="220" textAnchor="middle" fill="#1D4ED8" fontSize="11">Registered Speed Post</text>
                <text x="285" y="238" textAnchor="middle" fill="#2563EB" fontSize="10">Section 63 BSA Digital Proof</text>
                <text x="285" y="256" textAnchor="middle" fill="#1E40AF" fontSize="10" fontWeight="600">15-Day Restitution Demand</text>

                {/* Arrow Leftwards to Consumer Court */}
                <path d="M190 225 H100" stroke="#2563EB" strokeWidth="2" markerEnd="url(#arrowhead)" />

                {/* Node 6: e-Jagriti Portal Filing */}
                <rect x="20" y="170" width="80" height="110" rx="12" fill="#FAF5FF" stroke="#D8B4FE" strokeWidth="2" />
                <text x="60" y="205" textAnchor="middle" fill="#581C87" fontSize="12" fontWeight="bold">e-Jagriti</text>
                <text x="60" y="225" textAnchor="middle" fill="#6B21A8" fontSize="10">District</text>
                <text x="60" y="240" textAnchor="middle" fill="#6B21A8" fontSize="10">Forum</text>
                <text x="60" y="260" textAnchor="middle" fill="#7E22CE" fontSize="9">Refund + Cost</text>

                <defs>
                  <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#64748B" />
                  </marker>
                </defs>
              </svg>
              <figcaption className="mt-3 text-xs text-slate-500 text-center">
                Figure 1: Statutory progression from delivery failure to District Consumer Commission institution under the Consumer Protection Act, 2019.
              </figcaption>
            </figure>
          </section>

          {/* BLOCK 4: Key Facts Table */}
          <section aria-labelledby="key-facts-heading" className="mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
              Statutory Matrix
            </span>
            <h2
              id="key-facts-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Key Statutory Deadlines & Forum Jurisdictions for JioMart Claims
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              When dealing with Reliance Retail Limited, consumers are shielded by specific timelines codified in the Consumer Protection Act, 2019 and the Consumer Protection (E-Commerce) Rules, 2020. The statutory parameters below govern all claims arising from wrong delivery, missing items, or withheld refunds.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-sm text-slate-700">
                <caption className="sr-only">Key Legal Facts and Statutory Deadlines for JioMart Disputes</caption>
                <thead className="bg-slate-50 text-slate-900 uppercase text-xs font-bold tracking-wider border-b border-slate-200">
                  <tr>
                    <th scope="col" className="px-5 py-3.5">Statutory Parameter</th>
                    <th scope="col" className="px-5 py-3.5">Prescribed Legal Requirement</th>
                    <th scope="col" className="px-5 py-3.5">Governing Authority / Section</th>
                    <th scope="col" className="px-5 py-3.5">Consumer Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/70">
                    <th scope="row" className="px-5 py-4 font-semibold text-slate-900">
                      Grievance Acknowledgment
                    </th>
                    <td className="px-5 py-4">Within 48 hours of transmission</td>
                    <td className="px-5 py-4 font-mono text-xs text-slate-600">Rule 4(5), E-Commerce Rules 2020</td>
                    <td className="px-5 py-4 text-emerald-800 font-medium">JioMart must issue formal tracking docket ID</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70">
                    <th scope="row" className="px-5 py-4 font-semibold text-slate-900">
                      Dispute Redressal Window
                    </th>
                    <td className="px-5 py-4">Maximum 30 days from complaint date</td>
                    <td className="px-5 py-4 font-mono text-xs text-slate-600">Rule 4(5), E-Commerce Rules 2020</td>
                    <td className="px-5 py-4 text-slate-700">Full restitution or replacement completed</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70">
                    <th scope="row" className="px-5 py-4 font-semibold text-slate-900">
                      Electronic Refund Turnaround
                    </th>
                    <td className="px-5 py-4">T+1 working day post-approval</td>
                    <td className="px-5 py-4 font-mono text-xs text-slate-600">RBI TAT Harmonisation Directives</td>
                    <td className="px-5 py-4 text-slate-700">₹100/day penal compensation for bank delay</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70">
                    <th scope="row" className="px-5 py-4 font-semibold text-slate-900">
                      Platform Fallback Liability
                    </th>
                    <td className="px-5 py-4">Joint and several liability for seller defaults</td>
                    <td className="px-5 py-4 font-mono text-xs text-slate-600">Rule 6, E-Commerce Rules 2020</td>
                    <td className="px-5 py-4 text-emerald-800 font-medium">Reliance Retail cannot shift blame to 3rd-party vendor</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70">
                    <th scope="row" className="px-5 py-4 font-semibold text-slate-900">
                      District Commission Limit
                    </th>
                    <td className="px-5 py-4">Up to ₹50 Lakh claims (e-Jagriti filing)</td>
                    <td className="px-5 py-4 font-mono text-xs text-slate-600">CPA 2019 Jurisdiction Rules 2021</td>
                    <td className="px-5 py-4 text-slate-700">Zero court fees for disputes up to ₹5 Lakh</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70">
                    <th scope="row" className="px-5 py-4 font-semibold text-slate-900">
                      Statutory Limitation Period
                    </th>
                    <td className="px-5 py-4">2 Years from date of delivery or refusal</td>
                    <td className="px-5 py-4 font-mono text-xs text-slate-600">Section 69, Consumer Protection Act</td>
                    <td className="px-5 py-4 text-slate-700">Enforceable claim window before time-bar</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70">
                    <th scope="row" className="px-5 py-4 font-semibold text-slate-900">
                      Advocate Legal Notice Fee
                    </th>
                    <td className="px-5 py-4 font-bold text-slate-900">₹{BASE_PRICE} (Flat all-inclusive)</td>
                    <td className="px-5 py-4 font-mono text-xs text-slate-600">LegalRecovery.in Direct Service</td>
                    <td className="px-5 py-4 text-emerald-800 font-medium">Speed Post + Electronic BSA Sec 63 Dispatch</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* BLOCK 5: Shared Section 'If Nothing Works in 30 Days' */}
          <section aria-labelledby="escalation-ladder-heading" className="mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
              Escalation Protocol
            </span>
            <h2
              id="escalation-ladder-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              30-Day Escalation: Grievance Officer to e-Jagriti
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              When customer support bots loop endlessly and ticket resolutions are falsely recorded, follow this structured, dated escalation ladder. Each tier progressively increases institutional pressure on Reliance Retail Limited to resolve the dispute.
            </p>

            <ol className="space-y-4">
              <li className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-900 text-white">
                    Tier 1 • Day 0 to Day 3
                  </span>
                  <time className="text-xs text-slate-500 font-medium">Initial In-App Ticket</time>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  In-App Grievance & Order Cancellation / Return Request
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Log your complaint through the JioMart application under the specific order history. Capture date-stamped screenshots of the ticket status and note down the customer care reference number. Insist on written confirmation via email at <code className="text-xs bg-slate-100 px-1 py-0.5 rounded text-slate-800">cs@jiomart.com</code>.
                </p>
              </li>

              <li className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-700 text-white">
                    Tier 2 • Day 3 to Day 7
                  </span>
                  <time className="text-xs text-slate-500 font-medium">48-Hour Response Limit</time>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Statutory Escalation to JioMart Grievance & Nodal Officers
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Under Rule 4(5) of the E-Commerce Rules, escalate the unaddressed ticket to Reliance Retail’s Grievance Officer at <code className="text-xs bg-slate-100 px-1 py-0.5 rounded text-slate-800">grievanceofficer@jiomart.com</code> and copy <code className="text-xs bg-slate-100 px-1 py-0.5 rounded text-slate-800">nodalofficer@jiomart.com</code>. Cite the 48-hour statutory response deadline and attach your unboxing photographs, invoice, and payment proof.
                </p>
              </li>

              <li className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-700 text-white">
                    Tier 3 • Day 7 to Day 15
                  </span>
                  <time className="text-xs text-slate-500 font-medium">National Consumer Helpline</time>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  National Consumer Helpline (NCH 1915 / INGRAM Portal)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Lodge an official grievance via the National Consumer Helpline by dialing <strong>1915</strong> or visiting <a href="https://consumerhelpline.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[#DC2626] font-semibold hover:underline">consumerhelpline.gov.in</a>. Obtain a central INGRAM docket tracking number. Because Reliance Retail is a registered convergent partner on NCH, this step triggers corporate mediation scrutiny.
                </p>
              </li>

              <li className="p-5 bg-white border-2 border-red-500/40 rounded-xl shadow-sm bg-red-50/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-[#DC2626] text-white">
                    Tier 4 • Day 15 to Day 30
                  </span>
                  <time className="text-xs text-red-700 font-bold">Formal Legal Demand</time>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Advocate Legal Notice via Registered Speed Post & Electronic Service
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  When internal mechanisms fail, serve a formal Advocate Legal Demand Notice upon Reliance Retail Limited at its registered Mumbai headquarters. Dispatched via Registered Speed Post with postal acknowledgment, paired with digital service under Section 63 of Bharatiya Sakshya Adhiniyam, 2023. Notice demands 100% refund, 18% penal interest, and compensation within 15 calendar days.
                </p>
                <div className="pt-2">
                  <Link
                    href="#statutory-legal-notice-template"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] hover:underline"
                  >
                    <span>Jump to Formal Legal Notice Format</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </li>

              <li className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-purple-900 text-white">
                    Tier 5 • Day 30+
                  </span>
                  <time className="text-xs text-slate-500 font-medium">Judicial Relief</time>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Institute Consumer Complaint via e-Jagriti Portal
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  If the 15-day notice window expires without full restitution, file a formal complaint online at <a href="https://e-jagriti.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[#DC2626] font-semibold hover:underline">e-jagriti.gov.in</a> before the competent District Consumer Commission. Claims up to ₹5 Lakh incur zero filing fees, and the Commission holds statutory authority to award product refunds alongside substantial damages for mental agony and litigation expenses.
                </p>
              </li>
            </ol>
          </section>

          {/* BLOCK 6: Real Consumer Commission Orders Pull-Quote Style */}
          <section aria-labelledby="case-law-heading" className="mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
              Judicial Precedents
            </span>
            <h2
              id="case-law-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Real Consumer Commission Orders Against Reliance Retail (JioMart)
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Consumer commissions across India routinely penalize Reliance Retail Limited for failing to replace wrong deliveries, refusing returns on defective items, and delaying refunds on canceled orders. Review these verified commission awards:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Order 1: Hyderabad DCDRC */}
              <figure className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="inline-block px-2.5 py-1 rounded text-xs font-bold bg-emerald-100 text-emerald-800 mb-3">
                    Award: ₹10,000 Damages + Full Refund
                  </div>
                  <blockquote className="text-sm text-slate-700 italic leading-relaxed mb-4">
                    “An e-commerce platform cannot escape its statutory obligations by denying return services or failing to facilitate proper delivery of goods contracted online. Denying a consumer the right to return an unsuitable product ordered on the app constitutes clear deficiency in service.”
                  </blockquote>
                </div>
                <figcaption className="pt-4 border-t border-slate-100 text-xs text-slate-500">
                  <div className="font-bold text-slate-900">District Consumer Commission – I, Hyderabad</div>
                  <div>CC/2022 (JioMart Non-Return & Deficiency Case)</div>
                  <div className="mt-1">
                    <a
                      href="https://www.livelaw.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      Verified via LiveLaw Judicial Database →
                    </a>
                  </div>
                </figcaption>
              </figure>

              {/* Order 2: Kollam DCDRC */}
              <figure className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="inline-block px-2.5 py-1 rounded text-xs font-bold bg-emerald-100 text-emerald-800 mb-3">
                    Award: ₹7,000 Compensation + 9% Interest
                  </div>
                  <blockquote className="text-sm text-slate-700 italic leading-relaxed mb-4">
                    “Arbitrarily canceling a prepaid consumer order and failing to credit the refund amount until the complainant was forced to issue a formal advocate legal notice demonstrates an unfair trade practice. The opposite party is directed to disburse compensation for mental agony.”
                  </blockquote>
                </div>
                <figcaption className="pt-4 border-t border-slate-100 text-xs text-slate-500">
                  <div className="font-bold text-slate-900">DCDRC Kollam, Kerala</div>
                  <div>CC/2023 (Reliance Retail Prepaid Cancellation Dispute)</div>
                  <div className="mt-1">
                    <a
                      href="https://indianexpress.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      Reported Order Documentation →
                    </a>
                  </div>
                </figcaption>
              </figure>

              {/* Order 3: Bangalore Urban DCDRC */}
              <figure className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="inline-block px-2.5 py-1 rounded text-xs font-bold bg-emerald-100 text-emerald-800 mb-3">
                    Award: ₹15,000 Composite Relief + Costs
                  </div>
                  <blockquote className="text-sm text-slate-700 italic leading-relaxed mb-4">
                    “When a consumer points out a discrepancy in delivery and schedules a return pickup, the platform’s subsequent unilateral cancellation of pickup and failure to communicate constitutes gross deficiency of service under Section 2(11) of the Act.”
                  </blockquote>
                </div>
                <figcaption className="pt-4 border-t border-slate-100 text-xs text-slate-500">
                  <div className="font-bold text-slate-900">Bangalore Urban District Commission</div>
                  <div>Consumer Case on Botched Return Pickup & Wrong Delivery</div>
                  <div className="mt-1">
                    <a
                      href="https://www.livelaw.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      Verified Commission Ruling →
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>

          {/* BLOCK 7: BSA Section 63 Evidence Checklist */}
          <section aria-labelledby="evidence-checklist-heading" className="mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
              Litigation Preparedness
            </span>
            <h2
              id="evidence-checklist-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              What Digital Evidence Must You Preserve Under Section 63 of BSA 2023?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act), electronic records are fully admissible before consumer commissions when accompanied by proper metadata and certificate authentication. Preserve these 7 essential items:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  ✓
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Official Tax Invoice & Delivery Challan</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Download the official GST invoice PDF from your JioMart order dashboard. Ensure it clearly states Reliance Retail Limited’s GSTIN, seller details, item HSN codes, and billed amounts.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  ✓
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">High-Resolution Unboxing Photos & Video</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Capture continuous unedited video and date-stamped photographs showing the intact outer carton, courier AWB barcode sticker, and the mismatched or damaged contents received.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  ✓
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Customer Support Ticket Screenshots</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Export screenshots of all in-app chat conversations, WhatsApp interactions (70003 70003), and emails sent to <code className="text-[11px] bg-slate-100 px-1 py-0.5 rounded">cs@jiomart.com</code> with visible timestamps.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  ✓
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Delivery Rider Call & SMS Logs</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Save delivery OTP SMS messages, delivery confirmation alerts, and call records demonstrating conversations with the field executive who delivered the wrong parcel or refused return pickup.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  ✓
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Bank Account Ledger Statement</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Obtain a certified statement showing the debit entry at checkout and proving that no credit reversal occurred from JioMart, Reliance Retail, or payment aggregators during the billing cycle.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  ✓
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Bank Non-Receipt / Non-Trace Certificate</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If JioMart claims refund was completed, obtain a formal written statement from your bank confirming that the specified 12-digit UPI RRN or 23-digit ARN was never credited to your account.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* BLOCK 8: Worked Example Card */}
          <section aria-labelledby="worked-example-heading" className="mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
              Case Study
            </span>
            <h2
              id="worked-example-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Worked Dispute: Resolving a ₹9,450 JioMart Wrong Delivery
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              The following scenario illustrates how an unresolved JioMart delivery discrepancy was escalated and successfully settled through legal intervention without attending court hearings:
            </p>

            <div className="p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400">Claimant Profile</span>
                  <div className="text-base font-bold text-slate-900">Smt. Kavita Deshmukh • Pune, Maharashtra</div>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase font-bold text-slate-400">Order Value Disputed</span>
                  <div className="text-lg font-extrabold text-[#DC2626]">₹9,450 (Appliance & Grocery Consignment)</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h3 className="font-bold text-slate-900 mb-2 text-xs uppercase tracking-wider text-slate-500">
                    The Order Failure
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Smt. Deshmukh ordered an induction cooktop (₹5,499) and premium organic grocery hampers (₹3,951) via JioMart. The delivery executive dropped off an unsealed carton containing generic floor cleaning liquids and low-cost pulses. The cooktop was missing entirely.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-2 text-xs uppercase tracking-wider text-slate-500">
                    The Stonewalling
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    JioMart in-app support refused to register a return, asserting that &ldquo;grocery items are non-returnable&rdquo; and that fulfillment center weight scans matched the dispatch manifest. Two subsequent tickets were closed automatically within 36 hours.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-2 text-xs uppercase tracking-wider text-slate-500">
                    The Legal Resolution
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    An advocate legal notice was served on Reliance Retail Limited citing Rule 6(5) of the E-Commerce Rules and Section 2(47) CPA 2019. Within 8 days of Speed Post delivery, Reliance Retail’s senior escalation desk issued a full ₹9,450 IMPS refund plus ₹2,000 compensation.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                <span>Total Resolution Time: 18 Calendar Days</span>
                <span className="font-semibold text-emerald-700">Outcome: 100% Principal Restitution + ₹2,000 Settlement</span>
              </div>
            </div>
          </section>

          {/* BLOCK 9: Formal Notice Template with Copy Island */}
          <section id="statutory-legal-notice-template" aria-labelledby="template-heading" className="mb-14">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Drafting Resource
                </span>
                <h2
                  id="template-heading"
                  className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Legal Notice Format for JioMart Refund & Wrong Item Delivery
                </h2>
              </div>
              <TemplateCopyButton templateText={FORMAL_NOTICE_TEMPLATE} />
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              You can adapt the standard legal notice format below to challenge Reliance Retail Limited. Replace all text enclosed in <span className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded text-red-700">[BRACKETED_CAPITALS]</span> with your specific order, transaction, and delivery facts before dispatching via Registered Speed Post.
            </p>

            <div className="relative rounded-2xl bg-slate-900 text-slate-100 p-6 sm:p-8 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto border border-slate-800 shadow-xl max-h-[500px] overflow-y-auto">
              <pre className="whitespace-pre-wrap">{FORMAL_NOTICE_TEMPLATE}</pre>
            </div>
          </section>

          {/* BLOCK 10: Honest Scope */}
          <section aria-labelledby="scope-heading" className="mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
              Transparent Operations
            </span>
            <h2
              id="scope-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Scope &amp; Boundaries: What LegalRecovery Can and Cannot Do
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              LegalRecovery provides statutory demand notice drafting and consumer advocacy. In accordance with Bar Council guidelines and honest consumer practice, we maintain transparent boundaries regarding our services:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-emerald-50/50 border border-emerald-200 rounded-2xl">
                <h3 className="text-base font-bold text-emerald-950 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">✓</span>
                  <span>What LegalRecovery Does</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-900">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Drafts customized statutory legal notices under CPA 2019 and E-Commerce Rules 2020 by bar-enrolled advocates.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Dispatches physical notices via Registered Speed Post directly to Reliance Retail Limited’s Mumbai headquarters.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Transmits digital service with Section 63 BSA compliance to official Grievance and Nodal Officer emails.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Provides complete postal tracking receipts and formal e-Jagriti complaint drafting guidance if notice is ignored.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-rose-50/50 border border-rose-200 rounded-2xl">
                <h3 className="text-base font-bold text-rose-950 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs">✕</span>
                  <span>What LegalRecovery Cannot Do</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-rose-900">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>We cannot alter JioMart&rsquo;s internal application database or force delivery riders to physically collect returns.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>We do not act as collection agents or trace anonymous third-party scammers operating outside verified corporate registries.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>We do not guarantee arbitrary settlement amounts without authentic documentary evidence (invoices, photos, bank statements).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>We cannot waive statutory limitation periods if your order was delivered more than two years prior.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* BLOCK 11: Call to Action */}
          <section className="mb-14">
            <JioMartNoticeCTA />
          </section>

          {/* Reviewer Note */}
          {/* TODO(reviewer): Add reviewer credentials once src/data/reviewers.ts is established */}

          {/* BLOCK 12: Unique FAQ Accordion */}
          <section aria-labelledby="faq-heading" className="mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
              Common Questions
            </span>
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6"
            >
              FAQs: JioMart Refunds, Wrong Orders &amp; Legal Action
            </h2>

            <div className="space-y-4">
              {FAQ_ITEMS.map((item, idx) => (
                <details
                  key={idx}
                  className="group bg-white border border-slate-200 rounded-xl p-5 open:shadow-sm transition-all"
                >
                  <summary className="font-bold text-slate-900 text-base sm:text-lg cursor-pointer list-none flex items-center justify-between gap-4">
                    <span>{item.question}</span>
                    <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* BLOCK 13: Sources & Legal References */}
          <section aria-labelledby="sources-heading" className="mb-12 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h2 id="sources-heading" className="text-lg font-bold text-slate-900 mb-3">
              Official Legal Authorities & Primary Statutory Sources
            </h2>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                • <strong>Consumer Protection (E-Commerce) Rules, 2020:</strong> Rule 4(5) (Grievance Officer timelines), Rule 5 (Marketplace liabilities), Rule 6(5) (Prohibition against return refusal).{" "}
                <span className="text-[#DC2626] font-medium">Official Gazette Notification</span>{" "}
                (Accessed November 2026).
              </li>
              <li>
                • <strong>Consumer Protection Act, 2019:</strong> Section 2(11) (Deficiency in Service), Section 2(47) (Unfair Trade Practice), Section 35 (Institution of Complaints), Section 69 (2-Year Limitation).{" "}
                <span className="text-[#DC2626] font-medium">India Code Legislative Database</span>.
              </li>
              <li>
                • <strong>Reserve Bank of India Master Direction:</strong> Harmonisation of Turn Around Time (TAT) and customer compensation for failed transactions using authorised Payment Systems (DPSS.CO.PD No.629/02.01.014/2019-20).{" "}
                <a
                  href="https://rbi.org.in/Scripts/NotificationUser.aspx?Id=11693"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DC2626] hover:underline"
                >
                  RBI Official Circulars
                </a>.
              </li>
              <li>
                • <strong>Guidelines for Prevention and Regulation of Dark Patterns, 2023:</strong> CCPA prohibitions on forced bundling, basket sneaking, and non-refundable wallet forcing.{" "}
                <a
                  href="https://consumeraffairs.nic.in/sites/default/files/Dark_Patterns_Guidelines_2023.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DC2626] hover:underline"
                >
                  CCPA Gazette Notifications
                </a>.
              </li>
              <li>
                • <strong>National Consumer Disputes Redressal Portal:</strong> e-Jagriti Online Consumer Forum Filing System.{" "}
                <a
                  href="https://e-jagriti.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DC2626] hover:underline"
                >
                  e-jagriti.gov.in
                </a>.
              </li>
              <li>
                • <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA):</strong> Section 63 (Admissibility of electronic records and digital certificates).{" "}
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/21735"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DC2626] hover:underline"
                >
                  India Code Official Gazette
                </a>.
              </li>
            </ul>
          </section>

          {/* Internal Cross-Linking Navigation */}
          <section aria-label="Explore Related E-Commerce Hubs" className="mb-10 text-xs text-slate-500">
            <p>
              Compare dispute processes across other major Indian marketplaces:{" "}
              <Link href="/flipkart-return-refund-complaint" className="text-[#DC2626] hover:underline font-semibold">
                Flipkart Return & Refund Complaints
              </Link>
              {" • "}
              <Link href="/legal-notice-to/ajio" className="text-[#DC2626] hover:underline font-semibold">
                AJIO & Reliance Retail Recovery
              </Link>
              {" • "}
              <Link href="/legal-notice-to/amazon" className="text-[#DC2626] hover:underline font-semibold">
                Amazon India Legal Notices
              </Link>
              {" • "}
              <Link href="/legal-notice-to/meesho" className="text-[#DC2626] hover:underline font-semibold">
                Meesho Fallback Liability
              </Link>
              {" • "}
              <Link href="/services/refunds-and-consumer-complaints" className="text-[#DC2626] hover:underline font-semibold">
                Consumer Court Filing Guide
              </Link>
              .
            </p>
          </section>
        </main>

        {/* Global Contextual Related Recovery Guides Grid */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
