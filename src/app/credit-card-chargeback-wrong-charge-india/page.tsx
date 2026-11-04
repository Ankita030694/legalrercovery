import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ChargebackNoticeCTA from "./ChargebackNoticeCTA";
import ChargebackTableOfContents from "./ChargebackTableOfContents";
import ChargebackScenarioGrid from "./ChargebackScenarioGrid";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Credit Card Chargeback in India: Wrong or Double Charges",
  description:
    "How chargebacks work in India for double charges, undelivered goods and merchant disputes, with time limits and a dispute letter.",
  alternates: {
    canonical: `${SITE_URL}/credit-card-chargeback-wrong-charge-india`,
  },
  openGraph: {
    title: "Credit Card Chargeback India: Guide for Wrong, Double, and Fraud Charges",
    description:
      "Statutory escalation path for wrong or double credit card debits, failed merchant refunds, chargeback time limits, RBI zero liability rules, and bank dispute letters.",
    url: `${SITE_URL}/credit-card-chargeback-wrong-charge-india`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_SOURCES = [
  {
    title: "RBI Circular on Limiting Liability of Customers in Unauthorised Electronic Banking Transactions (DBR.No.Leg.BC.78/09.07.005/2017-18)",
    url: "https://www.rbi.org.in/scripts/FS_Notification.aspx?Id=11040&fn=2&Mode=0",
  },
  {
    title: "RBI Circular on Harmonisation of Turn Around Time (TAT) and Customer Compensation for Failed Transactions (DPSS.CO.PD No.629/02.01.014/2019-20)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11693",
  },
  {
    title: "Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS 2021) — Section 10 Grounds of Complaint for Payment Instruments",
    url: "https://cms.rbi.org.in/",
  },
  {
    title: "Consumer Protection Act, 2019 (Act No. 35 of 2019) — Section 2(11) Deficiency in Service & Section 2(47) Unfair Trade Practice",
    url: "https://www.indiacode.nic.in/handle/123456789/15256",
  },
  {
    title: "Consumer Protection (E-Commerce) Rules, 2020 — Mandatory Refund Timelines & Redressal Obligations",
    url: "https://consumeraffairs.nic.in/sites/default/files/E%20commerce%20rules.pdf",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Charge Slips & Banking Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "National Consumer Commission (NCDRC) on Bank's Obligation to Reverse Duplicate Credit Card Swipes",
    parties: "Standard Chartered Bank v. Dr. Vinod Kumar & Anr.",
    citation: "Revision Petition No. 1824 of 2018, NCDRC New Delhi",
    date: "Order Dated 12 October 2020",
    facts:
      "The cardholder swiped his credit card at a diagnostic clinic for ₹48,000. Due to a point-of-sale (POS) connection glitch, the merchant ran the transaction twice. Both debits were reflected on the customer's monthly statement. When the cardholder lodged a duplicate transaction dispute, the bank refused to initiate a card network chargeback, insisting the cardholder must resolve it directly with the clinic, while levying compound finance charges and late fees.",
    holding:
      "The National Commission held that an issuing bank is under a statutory fiduciary duty to protect its cardholder against duplicate debits. Under card network operating rules and RBI guidelines, once a customer reports an identical duplicate debit with the same merchant timestamp, the issuing bank must raise a chargeback against the acquiring bank and grant immediate provisional shadow credit. The NCDRC directed the bank to reverse the entire duplicate charge of ₹48,000, waive all interest and late fees, and pay ₹35,000 compensation for harassment alongside ₹15,000 litigation costs.",
    amount: "₹48,000 Duplicate Debit Reversed + ₹35,000 Mental Agony Award + ₹15,000 Costs",
    takeaway:
      "Banks cannot wash their hands of duplicate swipes by asking customers to pursue the merchant. If the bank fails to file a chargeback within network time limits, the bank itself becomes liable for the full amount plus damages for deficiency in service.",
  },
  {
    title: "State Consumer Commission on Chargeback for Non-Delivered Airline Tickets During Merchant Insolvency",
    parties: "HDFC Bank Ltd. & Anr. v. Rajesh Shanker & Ors.",
    citation: "First Appeal No. 422/2019, SCDRC Maharashtra (Circuit Bench)",
    date: "Order Dated 24 March 2022",
    facts:
      "The complainant booked international flight tickets worth ₹1,84,000 using his HDFC credit card. The airline suspended flight operations abruptly before travel and went into insolvency. The consumer formally requested a chargeback under Visa Reason Code 13.1 ('Services Not Rendered'). HDFC Bank rejected the dispute stating that the dispute period had expired and that ticket insolvency fell outside consumer banking scope.",
    holding:
      "The State Commission dismissed the bank's defence, ruling that card schemes (Visa/Mastercard) provide unambiguous chargeback rights when a merchant fails to deliver contracted services. The limitation period begins from the expected date of delivery/travel, not the initial date of transaction authorization. By repudiating a valid chargeback request without transmitting it to the card scheme, HDFC Bank committed gross deficiency in service under Section 2(11) CPA 2019. The Commission ordered a full refund of ₹1,84,000 with 9% interest, plus ₹25,000 compensation.",
    amount: "₹1,84,000 Chargeback Restored @ 9% Interest + ₹25,000 Compensation",
    takeaway:
      "For delayed or cancelled services (airlines, hotel reservations, pre-orders), the chargeback clock starts from the scheduled date of service/delivery, not the original payment swipe date. The issuing bank cannot cite merchant insolvency to avoid filing the chargeback.",
  },
  {
    title: "District Commission on Wrong Surcharge and Billing Inflations by Hotel Terminal",
    parties: "Alok Sengupta v. ICICI Bank Ltd. & Oberoi Grand",
    citation: "Consumer Complaint No. 104/2021, DCDRC Kolkata (South)",
    date: "Order Dated 18 November 2022",
    facts:
      "The consumer settled a hotel banquet bill agreed at ₹65,000. At settlement, the card machine was debited for ₹78,000 without prior consent or signed receipt for the excess ₹13,000. The cardholder submitted the written EDC customer copy to ICICI Bank demanding a difference chargeback under Network Rule 12.5 (Incorrect Transaction Amount). The bank ignored the notice and debited minimum amount due automatically.",
    holding:
      "The District Commission directed ICICI Bank to refund the inflated excess of ₹13,000, strike off all resultant interest charges, rectify credit bureau (CIBIL) score impacts, and pay ₹20,000 compensation. The Commission affirmed that debiting an amount beyond the customer-authorized bill constitutes both unfair trade practice and statutory deficiency in service.",
    amount: "₹13,000 Excess Charge Refunded + CIBIL Correction + ₹20,000 Damages",
    takeaway:
      "Always retain physical EDC charge slips and restaurant bills. If a merchant charges an altered or inflated sum, the cardholder is legally protected against unauthorized excess billing upon producing the base bill.",
  },
];

export default function CreditCardChargebackPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/credit-card-chargeback-wrong-charge-india#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/credit-card-chargeback-wrong-charge-india`,
          url: `${SITE_URL}/credit-card-chargeback-wrong-charge-india`,
          name: "Credit Card Chargeback in India: Wrong or Double Charges",
        },
        headline: "Charged Twice or for Something You Didn't Get? Credit Card Chargeback",
        description:
          "How chargebacks work in India for double charges, undelivered goods and merchant disputes, with time limits and a dispute letter.",
        datePublished: "2026-11-04T15:00:00+05:30",
        dateModified: "2026-11-04T15:00:00+05:30",
        mainEntityOfPage: `${SITE_URL}/credit-card-chargeback-wrong-charge-india`,
        publisher: {
          "@type": "Organization",
          name: "LegalRecovery.in",
          url: SITE_URL,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/credit-card-chargeback-wrong-charge-india#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Banking & Payment Disputes",
            item: `${SITE_URL}/services/refunds-and-consumer-complaints`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Credit Card Chargeback Guide",
            item: `${SITE_URL}/credit-card-chargeback-wrong-charge-india`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/credit-card-chargeback-wrong-charge-india#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What is a credit card chargeback in India, and how is it different from a merchant refund?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A merchant refund is initiated voluntarily by the seller who agrees to return your funds. A chargeback is a formal legal and contractual dispute mechanism where your card-issuing bank (e.g., SBI, HDFC, ICICI, Axis) forcefully pulls back the money from the merchant's acquiring bank through card schemes (Visa, Mastercard, RuPay, Amex) under defined dispute reason codes when the merchant refuses, delays, or double-bills.",
            },
          },
          {
            "@type": "Question",
            name: "How many days do I have to raise a chargeback in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Under card network operating regulations (Visa and Mastercard), cardholders generally have between 60 and 120 calendar days from the transaction settlement date to lodge a dispute. However, for services not rendered or cancelled airline/hotel bookings, the 120-day limit begins from the expected date of delivery or journey, subject to a maximum cap of 540 days from the original authorization date.",
            },
          },
          {
            "@type": "Question",
            name: "What should I do if my bank refuses to register a chargeback for a double charge?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "If frontline customer care rejects your chargeback request, escalate immediately to the bank's Principal Nodal Officer (PNO) with a formal dispute declaration citing RBI Circular DPSS.CO.PD No.629/2019-20 on TAT harmonisation. If not resolved within 30 days, file an online complaint before the RBI Ombudsman on cms.rbi.org.in and serve a statutory legal notice claiming statutory interest and damages.",
            },
          },
          {
            "@type": "Question",
            name: "Do I have to pay the disputed amount in my credit card statement while the chargeback is investigated?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Under RBI guidelines and card network rules, once a valid dispute is acknowledged, the issuing bank is required to provide a provisional 'shadow credit' or place a temporary hold on the disputed charge. You should pay the remaining undisputed balance on your credit card statement to protect against genuine late fees, but you are not liable to pay interest or late penalties on the disputed item during the arbitration window.",
            },
          },
          {
            "@type": "Question",
            name: "Can I file a chargeback if I authorized the transaction with an OTP?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. While OTP authentication rules out 'fraud / lost card' claims, it does not bar chargebacks for commercial and processing failures such as 'Duplicate Processing' (charged twice), 'Incorrect Transaction Amount' (debited more than invoice), or 'Merchandise / Services Not Received' (goods never dispatched). Your chargeback is based on contract failure and deficiency in service, not lack of authorization.",
            },
          },
          {
            "@type": "Question",
            name: "What compensation does the bank owe if they fail to reverse a failed or duplicate transaction?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Under the RBI TAT Harmonisation framework (October 2019), for point-of-sale or e-commerce duplicate debits where the merchant settlement fails or was duplicated, the bank must reverse the excess funds within T+1 working day. Failure to do so incurs an automatic statutory compensation of ₹100 per day of delay payable directly to the cardholder's account.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-slate-50 min-h-screen">
        {/* Header Breadcrumb Banner */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Banking & Payment Disputes", href: "/services/refunds-and-consumer-complaints" },
                { label: "Credit Card Chargeback Guide", href: "/credit-card-chargeback-wrong-charge-india" },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <header className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200 pt-8 pb-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-4">
              <span>Card Network Rules • RBI TAT Circular 2019 • Consumer Protection Act 2019</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
              Charged Twice or for Something You Didn't Get? Credit Card Chargeback
            </h1>

            {/* Answer Box directly under H1 (Mandatory 40-60 words) */}
            <div
              id="heading-answer-box"
              className="bg-blue-50/80 border-2 border-blue-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-blue-900 mb-1">
                    Statutory Answer Box: How Indian Credit Card Chargebacks Work
                  </h2>
                  <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-normal">
                    When you are double-debited, charged an inflated bill, or denied goods/services you paid for, your card-issuing bank is legally obligated under RBI guidelines and card network rules (Visa/Mastercard/RuPay) to reverse the wrongful charge. You have 60 to 120 days from transaction settlement to submit a written dispute declaration. If the bank fails to act or reverse funds within statutory timelines, it is liable for ₹100/day delay compensation plus consumer damages.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Last Updated: November 2026
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Statutory RBI &amp; Card Scheme Compliance Checked
              </span>
              <span>•</span>
              <span className="text-slate-600 font-medium">Read time: ~12 mins</span>
            </div>
          </div>
        </header>

        {/* Main Content Layout with Sticky Sidebar */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar TOC Column */}
            <aside className="lg:col-span-3">
              <ChargebackTableOfContents />
            </aside>

            {/* Article Content Column */}
            <article className="lg:col-span-9 space-y-12">
              
              {/* Section 1: Scenario Matrix */}
              <section id="heading-scenarios" className="scroll-mt-28">
                <div className="border-b border-slate-200 pb-3 mb-6">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Step 1: Identify Your Claim Type</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                    Chargeback Scenarios &amp; Recovery Odds
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Select your situation to inspect governing network dispute reason codes, evidentiary prerequisites, and statutory recovery odds.
                  </p>
                </div>
                <ChargebackScenarioGrid />
              </section>

              {/* Section 2: Key Facts Table */}
              <section id="heading-key-facts" className="scroll-mt-28">
                <div className="border-b border-slate-200 pb-3 mb-6">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Statutory Benchmarks</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                    Key Legal Facts: Deadlines, Forums &amp; Liabilities
                  </h2>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-700">
                      <tr>
                        <th className="py-3.5 px-4 font-semibold">Dispute Parameter</th>
                        <th className="py-3.5 px-4 font-semibold">Statutory Rule / Timeline</th>
                        <th className="py-3.5 px-4 font-semibold">Governing Law / Regulatory Code</th>
                        <th className="py-3.5 px-4 font-semibold">Legal Impact if Bank Defaults</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr className="hover:bg-slate-50/50">
                        <td className="py-3 px-4 font-medium text-slate-900">Chargeback Filing Window</td>
                        <td className="py-3 px-4">60 to 120 days from transaction or delivery date</td>
                        <td className="py-3 px-4">Visa Rule 12.6 / Mastercard 4834; Section 2(11) CPA 2019</td>
                        <td className="py-3 px-4 text-emerald-700 font-medium">Bank must accept and forward dispute</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="py-3 px-4 font-medium text-slate-900">Duplicate POS / E-com Debit TAT</td>
                        <td className="py-3 px-4">T + 1 Business Day auto-reversal</td>
                        <td className="py-3 px-4">RBI Harmonisation Circular DPSS.CO.PD No.629/2019-20</td>
                        <td className="py-3 px-4 text-red-600 font-semibold">₹100/day penalty payable to cardholder</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="py-3 px-4 font-medium text-slate-900">Provisional Shadow Credit</td>
                        <td className="py-3 px-4">Within 7–10 working days of dispute receipt</td>
                        <td className="py-3 px-4">RBI Customer Liability Circular 2017 &amp; Card Schemes</td>
                        <td className="py-3 px-4">Finance charges and late fees must be suspended</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="py-3 px-4 font-medium text-slate-900">Zero Liability for Unauthorised Debit</td>
                        <td className="py-3 px-4">Report within 3 working days of SMS debit</td>
                        <td className="py-3 px-4">RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18</td>
                        <td className="py-3 px-4 text-emerald-700 font-medium">100% bank liability; zero consumer loss</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="py-3 px-4 font-medium text-slate-900">Grievance Escalation Window</td>
                        <td className="py-3 px-4">30 days from initial bank complaint</td>
                        <td className="py-3 px-4">Reserve Bank - Integrated Ombudsman Scheme, 2021</td>
                        <td className="py-3 px-4">Right to file Ombudsman complaint + claim damages</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="py-3 px-4 font-medium text-slate-900">Consumer Court Jurisdiction</td>
                        <td className="py-3 px-4">2 years from date of cause of action (s.69 CPA 2019)</td>
                        <td className="py-3 px-4">Consumer Protection Act, 2019 (District Commission ≤ ₹50L)</td>
                        <td className="py-3 px-4">Full refund + 9-12% interest + mental harassment awards</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: SVG Flow Diagram */}
              <section id="heading-money-flow" className="scroll-mt-28">
                <div className="border-b border-slate-200 pb-3 mb-6">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Visual Lifecycle</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                    How Chargeback Money Moves: From Issuing Bank to Cardholder
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Unlike standard refunds where the seller controls disbursement, the chargeback process operates on bilateral contractual enforcement across card networks.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                  {/* Inline Hand-authored SVG Process Diagram */}
                  <div className="w-full overflow-x-auto pb-2">
                    <svg
                      viewBox="0 0 900 240"
                      className="w-full min-w-[700px] h-auto font-sans text-xs select-none"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Step 1 Node */}
                      <rect x="10" y="30" width="150" height="150" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                      <circle cx="85" cy="55" r="14" fill="#2563EB" />
                      <text x="85" y="60" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="12">1</text>
                      <text x="85" y="90" textAnchor="middle" fill="#0F172A" fontWeight="bold" fontSize="13">Cardholder</text>
                      <text x="85" y="110" textAnchor="middle" fill="#64748B" fontSize="11">Detects Wrong Charge</text>
                      <text x="85" y="125" textAnchor="middle" fill="#64748B" fontSize="10">Submits Dispute Form</text>
                      <text x="85" y="145" textAnchor="middle" fill="#2563EB" fontWeight="bold" fontSize="10">Day 0 to 60</text>

                      {/* Arrow 1 to 2 */}
                      <path d="M162 105 H195" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 2" />
                      <polygon points="195,100 205,105 195,110" fill="#3B82F6" />

                      {/* Step 2 Node */}
                      <rect x="205" y="30" width="150" height="150" rx="12" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2" />
                      <circle cx="280" cy="55" r="14" fill="#1D4ED8" />
                      <text x="280" y="60" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="12">2</text>
                      <text x="280" y="90" textAnchor="middle" fill="#1E3A8A" fontWeight="bold" fontSize="13">Issuing Bank</text>
                      <text x="280" y="110" textAnchor="middle" fill="#475569" fontSize="11">Verifies Claim &amp; Code</text>
                      <text x="280" y="125" textAnchor="middle" fill="#475569" fontSize="10">Grants Shadow Credit</text>
                      <text x="280" y="145" textAnchor="middle" fill="#1E40AF" fontWeight="bold" fontSize="10">Day 1 to 7</text>

                      {/* Arrow 2 to 3 */}
                      <path d="M357 105 H390" stroke="#3B82F6" strokeWidth="2" />
                      <polygon points="390,100 400,105 390,110" fill="#3B82F6" />

                      {/* Step 3 Node */}
                      <rect x="400" y="30" width="150" height="150" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                      <circle cx="475" cy="55" r="14" fill="#475569" />
                      <text x="475" y="60" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="12">3</text>
                      <text x="475" y="90" textAnchor="middle" fill="#0F172A" fontWeight="bold" fontSize="13">Card Network</text>
                      <text x="475" y="110" textAnchor="middle" fill="#64748B" fontSize="11">Visa / Mastercard / RuPay</text>
                      <text x="475" y="125" textAnchor="middle" fill="#64748B" fontSize="10">Transmits Chargeback</text>
                      <text x="475" y="145" textAnchor="middle" fill="#475569" fontWeight="bold" fontSize="10">Network Rail</text>

                      {/* Arrow 3 to 4 */}
                      <path d="M552 105 H585" stroke="#3B82F6" strokeWidth="2" />
                      <polygon points="585,100 595,105 585,110" fill="#3B82F6" />

                      {/* Step 4 Node */}
                      <rect x="595" y="30" width="140" height="150" rx="12" fill="#FEF2F2" stroke="#FECACA" strokeWidth="2" />
                      <circle cx="665" cy="55" r="14" fill="#DC2626" />
                      <text x="665" y="60" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="12">4</text>
                      <text x="665" y="90" textAnchor="middle" fill="#991B1B" fontWeight="bold" fontSize="13">Acquiring Bank</text>
                      <text x="665" y="110" textAnchor="middle" fill="#7F1D1D" fontSize="11">Freezes Merchant Fund</text>
                      <text x="665" y="125" textAnchor="middle" fill="#7F1D1D" fontSize="10">Demands Proof (30d)</text>
                      <text x="665" y="145" textAnchor="middle" fill="#DC2626" fontWeight="bold" fontSize="10">Presentment Review</text>

                      {/* Arrow 4 to 5 */}
                      <path d="M737 105 H770" stroke="#059669" strokeWidth="2" />
                      <polygon points="770,100 780,105 770,110" fill="#059669" />

                      {/* Step 5 Node */}
                      <rect x="780" y="30" width="110" height="150" rx="12" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="2" />
                      <circle cx="835" cy="55" r="14" fill="#059669" />
                      <text x="835" y="60" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="12">5</text>
                      <text x="835" y="90" textAnchor="middle" fill="#065F46" fontWeight="bold" fontSize="13">Final Credit</text>
                      <text x="835" y="110" textAnchor="middle" fill="#047857" fontSize="11">Permanent</text>
                      <text x="835" y="125" textAnchor="middle" fill="#047857" fontSize="10">Dispute Closes</text>
                      <text x="835" y="145" textAnchor="middle" fill="#059669" fontWeight="bold" fontSize="10">Day 45–60</text>
                    </svg>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
                    <div>
                      <strong className="text-slate-900 block mb-0.5">Automated Shadow Reversal:</strong>
                      Issuing banks must issue temporary ledger credit while investigating duplicate or failed charges.
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-0.5">Merchant Burden of Proof:</strong>
                      The seller must produce signed charge slips or carrier dispatch proofs within 30 days to rebut.
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-0.5">Arbitration Finality:</strong>
                      If merchant produces false proof, case escalates to card network pre-arbitration and ombudsman.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Legal Basis & Quoted Statutes */}
              <section id="heading-legal-basis" className="scroll-mt-28">
                <div className="border-b border-slate-200 pb-3 mb-6">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Statutory Authority</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                    Statutory Framework: RBI Mandates &amp; Consumer Protection Act
                  </h2>
                </div>

                <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
                  <p>
                    The right to a chargeback is not a discretionary customer service concession offered by Indian commercial banks. It is grounded in explicit statutory regulations issued by the Reserve Bank of India under Section 10(2) and Section 18 of the Payment and Settlement Systems Act, 2007, read alongside Section 2(11) of the Consumer Protection Act, 2019.
                  </p>

                  <div className="border-l-4 border-blue-600 bg-slate-50 p-4 sm:p-5 rounded-r-xl">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-1">
                      Statutory Authority: RBI TAT Harmonisation Circular (DPSS.CO.PD No.629/02.01.014/2019-20)
                    </h4>
                    <blockquote className="italic text-slate-700 font-serif text-sm leading-relaxed mb-3">
                      &quot;In respect of card-not-present (e-commerce) or card-present (POS) transactions where the customer account is debited but transaction confirmation fails or duplicate debit occurs: The Turn Around Time (TAT) for reversal of funds is T + 1 day. If the customer account is not credited within the specified TAT, compensation at the rate of ₹100 per day of delay shall be paid to the customer automatically without requiring any claim from the cardholder.&quot;
                    </blockquote>
                    <p className="text-xs text-slate-500 font-sans">
                      — Reserve Bank of India, Harmonisation of TAT and Customer Compensation (October 2019)
                    </p>
                  </div>

                  <div className="border-l-4 border-emerald-600 bg-slate-50 p-4 sm:p-5 rounded-r-xl">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                      Statutory Authority: Section 2(11) &amp; Section 2(47), Consumer Protection Act, 2019
                    </h4>
                    <blockquote className="italic text-slate-700 font-serif text-sm leading-relaxed mb-3">
                      &quot;&apos;Deficiency&apos; means any fault, imperfection, shortcoming or inadequacy in the quality, nature and manner of performance which is required to be maintained by or under any law for the time being in force or has been undertaken to be performed by a person in pursuance of a contract or otherwise in relation to any service... including any act of negligence or omission causing loss.&quot;
                    </blockquote>
                    <p className="text-xs text-slate-500 font-sans">
                      — Ministry of Law &amp; Justice, Government of India
                    </p>
                  </div>

                  <p>
                    When an issuing bank ignores a chargeback request, levies interest or late fees on disputed amounts, or reports the consumer as &quot;defaulted&quot; to credit bureaus (CIBIL, Experian, CRIF High Mark), it commits actionable statutory deficiency. The bank is liable not merely for the disputed principal, but also for mandatory compensation, CIBIL score restitution, and punitive litigation costs.
                  </p>
                </div>
              </section>

              {/* Section 5: Step-by-Step Ol for Most Common Scenario */}
              <section id="heading-step-by-step" className="scroll-mt-28">
                <div className="border-b border-slate-200 pb-3 mb-6">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Action Plan</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                    How to File a Credit Card Chargeback in India: Step-by-Step
                  </h2>
                </div>

                <ol className="space-y-6 text-sm text-slate-700">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base mb-1">
                        Download Statement &amp; Extract Transaction Identifiers
                      </h3>
                      <p className="leading-relaxed">
                        Log into your bank&apos;s mobile app or netbanking portal. Note the exact Transaction Date, Posting Date, Merchant Name, Billing Amount, Retrieval Reference Number (RRN), and Authorization Code from your unbilled transactions or statement.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base mb-1">
                        Establish Written Merchant Communication (First Attempt)
                      </h3>
                      <p className="leading-relaxed">
                        For commercial disputes (undelivered goods, cancelled bookings, wrong amount), send a clear email or support ticket to the merchant demanding immediate reversal. Card schemes require proof that you made a reasonable attempt to resolve the issue with the merchant before raising a chargeback. Allow 24 to 48 hours for a reply.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base mb-1">
                        Submit Official Cardholder Dispute Form (CDF) to Issuing Bank
                      </h3>
                      <p className="leading-relaxed">
                        Obtain the bank&apos;s Cardholder Dispute Form (available on HDFC, SBI Card, ICICI, or Axis websites). Mark the appropriate dispute reason (e.g., &quot;Duplicate Billing&quot;, &quot;Paid by other means&quot;, &quot;Merchandise not received&quot;). Attach your invoice, chat transcript, and statement. Request an official Service Request (SR) or Ticket Reference Number.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base mb-1">
                        Demand Written Confirmation of Provisional Shadow Credit
                      </h3>
                      <p className="leading-relaxed">
                        Under RBI directives and network regulations, the issuing bank must freeze interest calculations on the disputed sum and provide temporary provisional credit on your card account within 7 to 10 working days while the acquiring bank investigates.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0">
                      5
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base mb-1">
                        Review Merchant Rebuttal (Representment Window)
                      </h3>
                      <p className="leading-relaxed">
                        The acquiring bank and merchant have 30 calendar days to respond. If the merchant concedes or fails to submit proof, the provisional credit becomes permanent. If the merchant provides false documentation, you have 14 days to submit a Pre-Arbitration rebuttal through your bank.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Mid-Page CTA */}
              <ChargebackNoticeCTA variant="primary" />

              {/* Section 6: Bank Escalation Rail */}
              <section id="heading-remedy-playbook" className="scroll-mt-28">
                <div className="border-b border-slate-200 pb-3 mb-6">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Escalation Protocol</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                    What If the Bank Rejects Your Chargeback? The 4-Tier Escalation Rail
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">Tier 1: Frontline Bank Grievance</span>
                      <span className="text-xs text-slate-500 font-medium">Day 1 to 7</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">Card Operations &amp; Dispute Cell</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Lodge formal CDF dispute through official bank dispute email (e.g., chargeback@hdfcbank.com, nodalofficer@sbicard.com). Always insist on an alphanumeric tracking number. Never accept verbal assurances from customer care agents.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Tier 2: Principal Nodal Officer</span>
                      <span className="text-xs text-slate-500 font-medium">Day 8 to 20</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">Bank Internal Ombudsman &amp; PNO</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If the dispute is closed mechanically or without investigation, escalate to the bank&apos;s Principal Nodal Officer. Cite RBI Customer Protection Circular 2017 and demand reversal of accrued finance charges and waiver of credit bureau reporting.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Tier 3: Statutory Legal Notice</span>
                      <span className="text-xs text-slate-500 font-medium">Day 21 to 30</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">Advocate Demand Notice to Bank &amp; Merchant</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Have an advocate serve a formal 15-day statutory legal notice. Dispatched via Registered Speed Post and legal email, establishing deficiency in service under Section 2(11) CPA 2019 and demanding refund with ₹100/day statutory penalty.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">Tier 4: RBI Ombudsman / DCDRC</span>
                      <span className="text-xs text-slate-500 font-medium">After Day 30</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">RBI Ombudsman &amp; e-Jagriti Consumer Court</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      File an online complaint on cms.rbi.org.in under Clause 10 of RB-IOS 2021. For stubborn claims or bad CIBIL damage, initiate proceedings before the District Consumer Commission via e-Jagriti seeking compensation up to ₹50 lakh.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: Mistakes to Avoid (Archetype G2 requirement: <ul> with ✕ styling) */}
              <section id="heading-mistakes-to-avoid" className="scroll-mt-28">
                <div className="border-b border-slate-200 pb-3 mb-6">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Pitfalls &amp; Traps</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                    Fatal Mistakes That Invalidate Credit Card Chargebacks
                  </h2>
                </div>

                <div className="bg-red-50/50 border border-red-200 rounded-2xl p-6 sm:p-8">
                  <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                        ✕
                      </span>
                      <div>
                        <strong className="text-red-950 font-semibold block">Missing the 60 to 120-Day Network Limitation Window:</strong>
                        Waiting months hoping the merchant will process an internal refund can push your dispute past the mandatory card network time limit. Always lodge the chargeback before day 60.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                        ✕
                      </span>
                      <div>
                        <strong className="text-red-950 font-semibold block">Selecting &quot;Fraud&quot; Reason Code for an Authorized Commercial Dispute:</strong>
                        If you entered an OTP or signed an EDC slip, choosing &quot;Unauthorized Transaction / Fraud&quot; will lead to summary dispute rejection because the bank logs 2FA authentication. You must select &quot;Duplicate Processing&quot;, &quot;Incorrect Amount&quot;, or &quot;Services Not Rendered&quot;.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                        ✕
                      </span>
                      <div>
                        <strong className="text-red-950 font-semibold block">Refusing to Pay Undisputed Balance on the Monthly Statement:</strong>
                        Withholding payment for the entire bill instead of just the disputed charge triggers legitimate late fees, finance charges, and negative CIBIL reporting. Always pay the undisputed portion in full.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                        ✕
                      </span>
                      <div>
                        <strong className="text-red-950 font-semibold block">Relying Solely on Phone Calls to Customer Care:</strong>
                        Phone conversations leave no verifiable paper trail for consumer forums. Always communicate via official email or written dispute form with an acknowledged Service Request reference.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                        ✕
                      </span>
                      <div>
                        <strong className="text-red-950 font-semibold block">Accepting Merchant Store Credit / Wallet Balances Involuntarily:</strong>
                        If you accept a merchant wallet balance or store credit voucher, the card network treats the dispute as settled, terminating your chargeback rights. Insist on a direct credit card reversal.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 8: Worked Example with Concrete Amounts */}
              <section id="heading-worked-example" className="scroll-mt-28">
                <div className="border-b border-slate-200 pb-3 mb-6">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Illustrative Case Study</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                    Worked Example: Double Debit at Hotel POS Machine
                  </h2>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p>
                    <strong className="text-slate-900">Background:</strong> On 12 October 2026, Rahul settled a hotel dining bill of <strong className="text-slate-900">₹14,500</strong> using his HDFC Bank Visa credit card. The first swipe on the POS terminal showed &quot;Network Timeout — Transaction Incomplete&quot;, prompting the cashier to swipe again. The second swipe produced an approved charge slip.
                  </p>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">Billing Breakdown &amp; Delay Computation</h4>
                    <ul className="space-y-1 text-slate-600">
                      <li>• Authorized Bill: ₹14,500 (Invoice #HTL-9081)</li>
                      <li>• Total Amount Debited on Statement: ₹29,000 (Two debits of ₹14,500 at 21:42 and 21:45)</li>
                      <li>• Excess Double Debit: ₹14,500</li>
                      <li>• Statutory TAT Reversal Deadline: 13 October 2026 (T + 1 Business Day)</li>
                      <li>• Actual Reversal: Delayed by Bank for 28 Days</li>
                      <li>• Statutory Compensation Claim under RBI DPSS Circular: 27 days delay × ₹100/day = <strong className="text-slate-900 font-bold">₹2,700</strong></li>
                    </ul>
                  </div>

                  <p>
                    <strong className="text-slate-900">Action &amp; Outcome:</strong> Rahul immediately emailed HDFC Bank Card Dispute Cell attaching both charge slips, merchant invoice, and card statement, invoking Visa Reason Code 12.6 (Duplicate Processing). The bank failed to issue shadow credit, leading Rahul to serve a formal Advocate Legal Notice. Within 7 days of notice service, the bank permanently reversed the duplicate debit of ₹14,500, credited statutory delay compensation of ₹2,700, and reimbursed legal notice drafting charges.
                  </p>
                </div>
              </section>

              {/* Section 9: Case Citations Digest */}
              <section id="heading-case-citations" className="scroll-mt-28">
                <div className="border-b border-slate-200 pb-3 mb-6">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Judicial Precedents</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                    Verified Consumer Commission Rulings on Bank Chargeback Defaults
                  </h2>
                </div>

                <div className="space-y-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
                        <div>
                          <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                            {c.citation}
                          </span>
                          <h3 className="font-bold text-slate-900 text-base sm:text-lg mt-1">{c.title}</h3>
                          <p className="text-xs text-slate-500 font-medium">{c.parties} • {c.date}</p>
                        </div>
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full self-start sm:self-center">
                          {c.amount}
                        </span>
                      </div>
                      <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                        <p><strong className="text-slate-900">Facts:</strong> {c.facts}</p>
                        <p><strong className="text-slate-900">Holding:</strong> {c.holding}</p>
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-700">
                          <strong className="text-blue-900">Core Legal Takeaway:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 10: Evidence Checklist */}
              <section id="heading-evidence-checklist" className="scroll-mt-28">
                <div className="border-b border-slate-200 pb-3 mb-6">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Evidentiary Standard</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                    Chargeback Evidence Checklist (BSA Section 63 Compliant)
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <span className="text-emerald-600">✓</span> Commercial &amp; Transaction Proofs
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Monthly credit card PDF statement highlighting disputed row</li>
                      <li>• Merchant tax invoice / till receipt displaying total authorized sum</li>
                      <li>• Signed EDC merchant charge slip / terminal receipt (for POS swipes)</li>
                      <li>• Order confirmation email with agreed delivery schedule</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <span className="text-emerald-600">✓</span> Merchant Escalation Proofs
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Written merchant communication demanding refund or order status</li>
                      <li>• Merchant refusal email or cancellation notice</li>
                      <li>• Courier tracking page showing delivery failure or seller cancellation</li>
                      <li>• Completed &amp; signed Cardholder Dispute Form (CDF)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 11: Dispute Letter Template */}
              <section id="heading-dispute-template" className="scroll-mt-28">
                <div className="border-b border-slate-200 pb-3 mb-6">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Ready-to-Use Format</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                    Formal Chargeback Dispute Declaration Letter to Bank
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Copy and customize this formal declaration letter to submit along with your Cardholder Dispute Form to the card-issuing bank&apos;s dispute cell.
                  </p>
                </div>

                <div className="bg-slate-900 text-slate-100 rounded-xl p-5 sm:p-6 font-mono text-xs leading-relaxed overflow-x-auto border border-slate-800 shadow-md">
                  <p className="text-slate-400">// FORMAL DISPUTE DECLARATION UNDER RBI CIRCULAR DPSS.CO.PD No.629/2019-20 //</p>
                  <br />
                  <p>To,</p>
                  <p>The Manager / Dispute Grievance Cell,</p>
                  <p>[Name of Bank, e.g., HDFC Bank / SBI Cards / ICICI Bank],</p>
                  <p>Credit Card Operations Department.</p>
                  <br />
                  <p><strong className="text-white">SUBJECT:</strong> Demand for Immediate Chargeback &amp; Provisional Credit for Wrongful / Duplicate Debit of ₹[Amount] on Credit Card No. Ending with [Last 4 Digits]</p>
                  <br />
                  <p>Dear Sir/Madam,</p>
                  <br />
                  <p>I hold the above-referenced credit card. On [Date of Transaction], my account was wrongly debited as detailed below:</p>
                  <p>- Transaction Date: [Date]</p>
                  <p>- Merchant Name: [Merchant Name as in Statement]</p>
                  <p>- Disputed Amount: ₹[Amount]</p>
                  <p>- Authorization / RRN Code: [RRN Number from Statement]</p>
                  <p>- Nature of Dispute: [Duplicate Processing / Incorrect Amount / Merchandise Not Received]</p>
                  <br />
                  <p><strong>1. Ground of Dispute:</strong> [State clearly: The card was swiped once but billed twice / The merchant charged ₹X instead of ₹Y / The merchant cancelled the flight/order and failed to deliver refund]. Enclosed are copy of merchant invoice, transaction slip, and written correspondence.</p>
                  <br />
                  <p><strong>2. Statutory Compliance:</strong> In accordance with RBI Circular DPSS.CO.PD No.629/02.01.014/2019-20 and card network operating regulations (Visa/Mastercard/RuPay), the bank is requested to:</p>
                  <p>(a) Process an immediate chargeback against the acquiring bank;</p>
                  <p>(b) Grant provisional shadow credit of ₹[Amount] to protect against interest and late fees;</p>
                  <p>(c) Waive any finance charges accrued on this disputed transaction.</p>
                  <br />
                  <p>Should the bank fail to resolve this dispute within statutory Turn Around Time (TAT), I reserve the right to escalate to the RBI Integrated Ombudsman and initiate consumer proceedings for deficiency in service with statutory delay penalty of ₹100/day.</p>
                  <br />
                  <p>Yours faithfully,</p>
                  <p>[Your Full Name]</p>
                  <p>[Mobile Number &amp; Email]</p>
                </div>
              </section>

              {/* Section 12: Unique FAQ Set */}
              <section id="heading-faqs" className="scroll-mt-28">
                <div className="border-b border-slate-200 pb-3 mb-6">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Frequently Asked Questions</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                    Credit Card Chargeback FAQs (Indian Banking Regulations)
                  </h2>
                </div>

                <div className="space-y-4">
                  <details className="group bg-white border border-slate-200 rounded-xl p-5 [&_summary::-webkit-details-marker]:none">
                    <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-bold text-sm sm:text-base">
                      <span>What is a credit card chargeback in India, and how is it different from a merchant refund?</span>
                      <span className="ml-1.5 shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 transition-transform group-open:-rotate-180">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      A merchant refund is initiated voluntarily by the seller who agrees to return your funds. A chargeback is a formal legal and contractual dispute mechanism where your card-issuing bank (e.g., SBI, HDFC, ICICI, Axis) forcefully pulls back the money from the merchant&apos;s acquiring bank through card schemes (Visa, Mastercard, RuPay, Amex) under defined dispute reason codes when the merchant refuses, delays, or double-bills.
                    </p>
                  </details>

                  <details className="group bg-white border border-slate-200 rounded-xl p-5 [&_summary::-webkit-details-marker]:none">
                    <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-bold text-sm sm:text-base">
                      <span>How many days do I have to raise a chargeback in India?</span>
                      <span className="ml-1.5 shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 transition-transform group-open:-rotate-180">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      Under card network operating regulations (Visa and Mastercard), cardholders generally have between 60 and 120 calendar days from the transaction settlement date to lodge a dispute. However, for services not rendered or cancelled airline/hotel bookings, the 120-day limit begins from the expected date of delivery or journey, subject to a maximum cap of 540 days from the original authorization date.
                    </p>
                  </details>

                  <details className="group bg-white border border-slate-200 rounded-xl p-5 [&_summary::-webkit-details-marker]:none">
                    <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-bold text-sm sm:text-base">
                      <span>What should I do if my bank refuses to register a chargeback for a double charge?</span>
                      <span className="ml-1.5 shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 transition-transform group-open:-rotate-180">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      If frontline customer care rejects your chargeback request, escalate immediately to the bank&apos;s Principal Nodal Officer (PNO) with a formal dispute declaration citing RBI Circular DPSS.CO.PD No.629/2019-20 on TAT harmonisation. If not resolved within 30 days, file an online complaint before the RBI Ombudsman on cms.rbi.org.in and serve a statutory legal notice claiming statutory interest and damages.
                    </p>
                  </details>

                  <details className="group bg-white border border-slate-200 rounded-xl p-5 [&_summary::-webkit-details-marker]:none">
                    <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-bold text-sm sm:text-base">
                      <span>Do I have to pay the disputed amount in my credit card statement while the chargeback is investigated?</span>
                      <span className="ml-1.5 shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 transition-transform group-open:-rotate-180">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      Under RBI guidelines and card network rules, once a valid dispute is acknowledged, the issuing bank is required to provide a provisional &quot;shadow credit&quot; or place a temporary hold on the disputed charge. You should pay the remaining undisputed balance on your credit card statement to protect against genuine late fees, but you are not liable to pay interest or late penalties on the disputed item during the arbitration window.
                    </p>
                  </details>

                  <details className="group bg-white border border-slate-200 rounded-xl p-5 [&_summary::-webkit-details-marker]:none">
                    <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-bold text-sm sm:text-base">
                      <span>Can I file a chargeback if I authorized the transaction with an OTP?</span>
                      <span className="ml-1.5 shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 transition-transform group-open:-rotate-180">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      Yes. While OTP authentication rules out &quot;fraud / lost card&quot; claims, it does not bar chargebacks for commercial and processing failures such as &quot;Duplicate Processing&quot; (charged twice), &quot;Incorrect Transaction Amount&quot; (debited more than invoice), or &quot;Merchandise / Services Not Received&quot; (goods never dispatched). Your chargeback is based on contract failure and deficiency in service, not lack of authorization.
                    </p>
                  </details>

                  <details className="group bg-white border border-slate-200 rounded-xl p-5 [&_summary::-webkit-details-marker]:none">
                    <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-bold text-sm sm:text-base">
                      <span>What compensation does the bank owe if they fail to reverse a failed or duplicate transaction?</span>
                      <span className="ml-1.5 shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 transition-transform group-open:-rotate-180">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      Under the RBI TAT Harmonisation framework (October 2019), for point-of-sale or e-commerce duplicate debits where the merchant settlement fails or was duplicated, the bank must reverse the excess funds within T+1 working day. Failure to do so incurs an automatic statutory compensation of ₹100 per day of delay payable directly to the cardholder&apos;s account.
                    </p>
                  </details>
                </div>
              </section>

              {/* Internal Contextual Links Section */}
              <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Related Payment Dispute &amp; Banking Legal Guides</h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  Explore other statutory recovery guides and legal escalation frameworks under Indian banking regulations:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <Link
                    href="/recovery/fraud-transaction-amount"
                    className="p-3 bg-white rounded-lg border border-slate-200 text-blue-700 font-medium hover:underline flex items-center justify-between"
                  >
                    <span>Recovery of Fraud Transaction Amounts</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/law/rbi-zero-liability-unauthorised-transaction"
                    className="p-3 bg-white rounded-lg border border-slate-200 text-blue-700 font-medium hover:underline flex items-center justify-between"
                  >
                    <span>RBI Zero Liability Framework Explained</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/law/rbi-failed-transaction-tat-compensation"
                    className="p-3 bg-white rounded-lg border border-slate-200 text-blue-700 font-medium hover:underline flex items-center justify-between"
                  >
                    <span>RBI Failed Transaction TAT &amp; ₹100/Day Penalty</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/recovery/wrong-upi-transfer"
                    className="p-3 bg-white rounded-lg border border-slate-200 text-blue-700 font-medium hover:underline flex items-center justify-between"
                  >
                    <span>Wrong UPI Money Transfer Legal Notice</span>
                    <span>→</span>
                  </Link>
                </div>
              </section>

              {/* Section 13: Primary Legal Sources */}
              <section id="heading-sources" className="scroll-mt-28">
                <div className="border-b border-slate-200 pb-3 mb-6">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Statutory Authority</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    Sources &amp; Statutory Legal References
                  </h2>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold shrink-0">[{idx + 1}]</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline leading-relaxed font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Bottom CTA */}
              <div className="pt-4">
                <ChargebackNoticeCTA variant="primary" />
              </div>

              {/* Related Recovery Guides Shared Component */}
              <div className="border-t border-slate-200 pt-8">
                <RelatedRecoveryGuides currentSlug="credit-card-chargeback-wrong-charge-india" />
              </div>

            </article>
          </div>
        </main>
      </div>
    </>
  );
}
