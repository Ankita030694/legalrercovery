import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CorporateLndTableOfContents from "./CorporateLndTableOfContents";
import CorporateLndScenarioTabs from "./CorporateLndScenarioTabs";
import CorporateLndNoticeCTA from "./CorporateLndNoticeCTA";

export const revalidate = 86400;

const PAGE_URL = "/corporate-training-l-and-d-executive-education-vendor-invoice-recovery";
const META_TITLE = "Corporate L&D, Upskilling & Assessment Invoice Recovery";
const META_DESCRIPTION =
  "Enterprise L&D, LMS & campus-assessment vendors face 120-day freezes—unless you trigger MSMED s.15-18, Income Tax s.43B(h) & formal legal demands.";
const EXACT_H1 =
  "Delivered 20 Leadership Workshops or 5,000 LMS Seats—and Corporate HR Froze Your Invoice Over 'Q3 Budget Cuts'? B2B L&D Recovery";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "corporate training l and d vendor unpaid enterprise invoice recovery",
    "hr l and d budget freeze after training workshop delivered",
    "lms enterprise seat license annual invoice unpaid",
    "online assessment campus hiring proctoring vendor dues",
    "msme 45 day rule corporate training companies",
    "attendance feedback sheet proof training completion",
  ],
  alternates: {
    canonical: `${SITE_URL}${PAGE_URL}`,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("Corporate L&D, LMS and Assessment Vendor Invoice Recovery Guide"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const FAQS = [
  {
    q: "Can a corporate client legally freeze our L&D or leadership workshop invoice after delivery citing 'Q3 budget cuts'?",
    a: "No. Once workshops, executive coaching cohorts, or POSH training sessions are delivered against a Purchase Order (PO), SOW, or email authorization, an internal CFO budget freeze or HR restructuring does not extinguish a concluded commercial debt under Section 37 of the Indian Contract Act, 1872. Signed participant attendance sheets and feedback forms create binding estoppel under Section 121 of the Bharatiya Sakshya Adhiniyam (BSA), 2023.",
  },
  {
    q: "How does Income Tax Section 43B(h) force enterprises to clear overdue L&D and assessment vendor bills?",
    a: "Under Section 43B(h) of the Income Tax Act, 1961 (effective FY 2023–24 onwards), any sum payable by a corporate buyer to an Udyam-registered Micro or Small enterprise beyond the 15-day/45-day MSMED Act Section 15 limit is disallowed as a deductible business expense in that financial year. Serving a formal Section 43B(h) + MSMED Section 16 demand notice directly on the buyer's CFO and Statutory Auditor turns an ignored HR vendor bill into an immediate 25%–30% corporate tax liability.",
  },
  {
    q: "Our enterprise client provisioned 5,000 LMS seats and now wants a 60% pro-rata refund/discount after layoffs. Must we agree?",
    a: "Unless your Master Services Agreement (MSA) explicitly contains a mid-term seat true-down or termination-for-convenience refund clause, annual enterprise LMS seat subscriptions are fixed-capacity commitments. Under Order XXXVII Rule 1(2) CPC and Section 73 of the Contract Act, you can enforce the full liquidated SOW fee using SSO tenant provisioning logs and active learner telemetry certified under Section 63 BSA, 2023.",
  },
  {
    q: "How do campus-hiring assessment and AI-proctoring platforms overcome 120–180 day procurement portal ('GRN pending') lags?",
    a: "Internal buyer portals like SAP Ariba or Coupa cannot override Section 15 of the MSMED Act, 2006. Under Section 2(b) of the MSMED Act, if the buyer does not raise a written defect objection within 15 days of receiving candidate scorecards and proctoring integrity reports, 'deemed acceptance' sets in automatically, starting the 45-day statutory payment clock and triggering 3x RBI bank rate compound interest from Day 46.",
  },
  {
    q: "What if the defaulting buyer is a PSU or State Skill Development Mission (SSDM) holding back our final training tranche?",
    a: "If the counterparty is a Central/State Government department or statutory body, Section 80 of the Code of Civil Procedure, 1908 mandates a formal 60-day written notice before filing a civil suit. However, PSUs incorporated as companies and government buyers are still bound by MSMED Act Sections 15–18, allowing Micro and Small training vendors to file MSEFC Samadhaan references alongside statutory pre-litigation demands.",
  },
  {
    q: "Can an L&D firm or EdTech SaaS recover bounced post-dated cheques or NACH mandates from mid-market corporate buyers?",
    a: "Yes. If an enterprise issued a cheque or NACH/ECS mandate for a leadership batch or annual LMS renewal that bounced, you have a strict 30-day statutory window from the bank return memo to issue a criminal demand notice under Section 138 of the Negotiable Instruments Act, 1881 (or Section 25 of the PSS Act, 2007 for NACH/ECS), naming both the company and its authorized signatory directors.",
  },
  {
    q: "How can an enterprise upskilling or proctoring vendor chase 30 to 300+ overdue corporate POs without hiring an army of lawyers?",
    a: "Instead of fragmented manual follow-ups, upload your entire overdue receivable ledger via CSV to LegalRecovery's Representee portal. Our institutional desk verifies each corporate CIN/GSTIN, maps Udyam s.43B(h) and Order XXXVII CPC hooks, and dispatches fact-verified notices across Email, WhatsApp, and Speed Post RPAD at flat institutional slabs.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 2(b), 15, 16, 17 & 18) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Income Tax Act, 1961 (Section 43B(h) — Disallowance of Delayed Payments to Micro & Small Enterprises) — Income Tax Dept.",
    url: "https://www.incometaxindia.gov.in/",
  },
  {
    title: "MSME Samadhaan Delayed Payment Monitoring Portal — Ministry of MSME, Government of India",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Sections 63 & 121 — Electronic Record Admissibility & Estoppel) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII Summary Suits & Section 80 Government Notice) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 2(1)(c) & Section 12A Pre-Institution Mediation) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
];

export default function CorporateLndInvoiceRecoveryPage() {
  const canonicalUrl = `${SITE_URL}${PAGE_URL}`;

  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    image: [`${SITE_URL}/blog_money_recovery.png`],
    datePublished: "2026-11-18T11:25:00+05:30",
    dateModified: "2026-11-18T11:25:00+05:30",
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Corporate L&D, LMS & Assessment Vendors Recover Frozen Enterprise Invoices",
    description:
      "5-stage legal escalation playbook to break corporate HR budget freezes and 180-day procurement portal delays using MSMED s.15–18, Income Tax s.43B(h), and attendance estoppel.",
    step: [
      {
        "@type": "HowToStep",
        name: "Lock Delivery & Estoppel Evidence (Day 1–15)",
        text: "Export signed workshop attendance registers, LMS SSO seat provisioning logs, or candidate assessment scorecards with a Section 63 BSA certificate to establish deemed acceptance under MSMED s.2(b).",
      },
      {
        "@type": "HowToStep",
        name: "Bypass Junior HR & Map CFO / Statutory Auditor",
        text: "Identify the buyer's CIN, Registered Office, CFO, and Company Secretary from MCA filings so legal notices land on balance-sheet decision-makers rather than stalled Ariba/Coupa queues.",
      },
      {
        "@type": "HowToStep",
        name: "Serve Advocate Demand Citing MSMED s.15–18 & s.43B(h)",
        text: "Dispatch a formal legal notice via Email, WhatsApp, and Speed Post RPAD demanding principal plus 3x RBI compound interest and warning of Income Tax s.43B(h) expense disallowance.",
      },
      {
        "@type": "HowToStep",
        name: "Trigger Section 138 NI Act / Section 80 CPC Where Applicable",
        text: "If a corporate cheque bounced, issue a strict 30-day Section 138 demand; if the buyer is a State Skill Mission or Govt body, serve a mandatory 60-day Section 80 CPC notice.",
      },
      {
        "@type": "HowToStep",
        name: "Escalate to MSEFC Samadhaan or Order XXXVII / Commercial Court",
        text: "File on MSME Samadhaan for statutory conciliation/arbitration or institute an Order XXXVII CPC Summary Suit / Section 12A Commercial Court mediation for ₹3 Lakh+ claims.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        name: "Schools, Universities & EdTech B2B Recovery",
        item: `${SITE_URL}/industries/schools-universities-edtech-b2b-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Corporate L&D & Assessment Vendor Invoice Recovery",
        item: canonicalUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, howToSchema, faqSchema, breadcrumbSchema]),
        }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-17 B2B CREDITOR PLAYBOOK</span>
            <span className="text-red-600">&bull;</span>
            <span>MSMED s.15&ndash;18 &amp; s.43B(h)</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word AI-Citation Executive Statutory Summary + Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Internal HR &ldquo;Q3 budget cuts&rdquo; or 180-day procurement portal lags do not extinguish a concluded L&amp;D, LMS, or campus-assessment debt. Under our{" "}
            <Link
              href="/industries/schools-universities-edtech-b2b-recovery"
              className="text-red-300 underline hover:text-white font-bold"
            >
              Education &amp; EdTech B2B Recovery Hub
            </Link>
            , vendors trigger <strong>MSMED Act s.15&ndash;18</strong> (3x RBI compound interest),{" "}
            <strong>Income Tax s.43B(h)</strong> tax disallowance, and{" "}
            <strong>signed attendance estoppel (BSA s.121)</strong> to compel immediate CFO release.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-slate-100">45 Days Max</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                MSMED s.15 statutory credit cap (overrides portal lags)
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-emerald-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Monthly compound interest under MSMED s.16
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-amber-400">30% Tax Hit</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Section 43B(h) buyer expense disallowance
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-red-400">15-Day Window</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Deemed acceptance under MSMED s.2(b)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Schools, Universities & EdTech B2B",
                href: "/industries/schools-universities-edtech-b2b-recovery",
              },
              {
                label: "Corporate L&D & LMS Invoice Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <CorporateLndTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="heading-budget-freeze"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Why Enterprise HR Freezes L&amp;D &amp; Assessment Invoices Over Budget Cuts
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Corporate Learning &amp; Development (L&amp;D) consultancies, executive education providers, POSH compliance trainers, enterprise LMS SaaS platforms, and campus-hiring proctoring vendors share a unique commercial vulnerability: <strong>their services are consumed intangibly before the invoice clears procurement</strong>. Unlike manufacturing vendors who can halt physical dispatches, an L&amp;D firm that has already flown facilitators across five cities for 20 leadership workshops—or provisioned 5,000 annual LMS seats—has zero physical inventory left to withhold.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                When an enterprise CFO announces mid-year &ldquo;Q3 Opex Cuts&rdquo; or a hiring freeze, discretionary HR and L&amp;D budgets are the very first cost centers paused. Procurement teams routinely park delivered invoices in SAP Ariba or Coupa under vague statuses like <em>&ldquo;PO Amendment Pending&rdquo;</em>, <em>&ldquo;CHRO Re-Approval Required&rdquo;</em>, or <em>&ldquo;GRN Under Review&rdquo;</em> for 120 to 180 days. Vendors hesitate to escalate because they fear losing next year&rsquo;s renewal—allowing the buyer to use vendor working capital as an interest-free credit line.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-amber-900">
                <p className="font-bold text-amber-950 mb-1">
                  Critical Legal Reality for L&amp;D &amp; Assessment Founders:
                </p>
                <p className="leading-relaxed">
                  An internal corporate budget freeze is strictly res inter alios acta (an internal matter of the buyer). Under Indian contract law, once a Purchase Order, Statement of Work (SOW), or written email instruction is executed and the training/assessment is delivered, the buyer&rsquo;s internal cost-cutting memo has <strong>zero legal effect</strong> on your right to full payment plus statutory interest.
                </p>
              </div>
            </section>

            {/* Section 2: Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  MSMED s.15&ndash;18, Section 43B(h) &amp; Estoppel Statutory Matrix
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Rather than sending polite email reminders to a powerless HR coordinator, B2B training and assessment creditors should deploy a synchronized statutory matrix that creates immediate balance-sheet and compliance pressure on the buyer&rsquo;s Finance Director and Company Secretary.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statute / Provision</th>
                      <th className="p-3.5 font-bold">Trigger &amp; Credit Cap</th>
                      <th className="p-3.5 font-bold">Commercial Leverage on Enterprise Buyer</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        MSMED Act, 2006 (s.15 &amp; s.16)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        15 days (no written agreement) or max 45 days (with written agreement) from deemed acceptance.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Mandates <strong>3x RBI Bank Rate monthly compound interest</strong> regardless of buyer PO terms or procurement portal delays.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Income Tax Act, 1961 (s.43B(h))
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Applies to overdue invoices owed to Udyam-registered Micro &amp; Small L&amp;D/SaaS suppliers beyond s.15 limits.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Disallows the entire unpaid training/LMS expense in the buyer&rsquo;s tax return—creating an instant <strong>25%&ndash;30% corporate tax hit</strong>.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        BSA 2023 s.121 (Promissory Estoppel) &amp; s.63
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Triggered by signed workshop attendance sheets, NPS feedback, or LMS SSO login telemetry.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Estopped from claiming &ldquo;training not delivered&rdquo; or &ldquo;unapproved PO&rdquo; once staff attended and feedback was logged.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Order XXXVII CPC &amp; Commercial Courts s.12A
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Written SOW/MSA + Tax Invoice + GSTR-1/2B trail; mandatory pre-suit mediation for ₹3 Lakh+ claims.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Summary Suit strips buyer of automatic right to defend unless they prove a genuine, pre-existing triable dispute.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        NI Act s.138 &amp; PSS Act s.25
                      </td>
                      <td className="p-3.5 text-slate-700">
                        30-day statutory notice from bank return memo on bounced corporate cheques or NACH mandates.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Personal criminal summons risk for Authorized Signatory Directors—forcing rapid out-of-court settlement.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: 5-Stage Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  5-Stage Corporate L&amp;D &amp; LMS Invoice Escalation Decision Tree
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Follow this sequential escalation architecture whenever an enterprise HR, Learning, or Talent Acquisition client stalls payment beyond Day 45.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800 mb-6">
                <svg
                  width="860"
                  height="250"
                  viewBox="0 0 860 250"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-Stage Corporate L&D and LMS Invoice Escalation Decision Tree"
                >
                  {/* Stage 1 */}
                  <rect x="10" y="30" width="150" height="110" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="85" y="55" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 1 (DAY 1–15)</text>
                  <text x="85" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Lock Estoppel</text>
                  <text x="85" y="98" textAnchor="middle" fill="#CBD5E1" fontSize="10">Attendance, Feedback</text>
                  <text x="85" y="114" textAnchor="middle" fill="#CBD5E1" fontSize="10">&amp; LMS SSO Logs</text>

                  <path d="M160 85 L185 85" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                  {/* Stage 2 */}
                  <rect x="185" y="30" width="150" height="110" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="260" y="55" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 2 (DAY 16–45)</text>
                  <text x="260" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Deemed Acceptance</text>
                  <text x="260" y="98" textAnchor="middle" fill="#CBD5E1" fontSize="10">MSMED s.2(b) &amp;</text>
                  <text x="260" y="114" textAnchor="middle" fill="#CBD5E1" fontSize="10">GSTR-1 Filing Proof</text>

                  <path d="M335 85 L360 85" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 3 */}
                  <rect x="360" y="30" width="150" height="110" rx="12" fill="#7F1D1D" stroke="#DC2626" strokeWidth="2" />
                  <text x="435" y="55" textAnchor="middle" fill="#FECACA" fontSize="11" fontWeight="bold">STAGE 3 (DAY 46)</text>
                  <text x="435" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">s.43B(h) Demand</text>
                  <text x="435" y="98" textAnchor="middle" fill="#FEE2E2" fontSize="10">Notice to CFO, CS &amp;</text>
                  <text x="435" y="114" textAnchor="middle" fill="#FEE2E2" fontSize="10">Statutory Auditor</text>

                  <path d="M510 85 L535 85" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 4 */}
                  <rect x="535" y="30" width="150" height="110" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="610" y="55" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 4 (PARALLEL)</text>
                  <text x="610" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Special Tracks</text>
                  <text x="610" y="98" textAnchor="middle" fill="#CBD5E1" fontSize="10">NI s.138 (30d) or</text>
                  <text x="610" y="114" textAnchor="middle" fill="#CBD5E1" fontSize="10">CPC s.80 (60d Govt)</text>

                  <path d="M685 85 L710 85" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 5 */}
                  <rect x="710" y="30" width="140" height="110" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
                  <text x="780" y="55" textAnchor="middle" fill="#6EE7B7" fontSize="11" fontWeight="bold">STAGE 5 (ENFORCE)</text>
                  <text x="780" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">MSEFC / Court</text>
                  <text x="780" y="98" textAnchor="middle" fill="#D1FAE5" fontSize="10">Samadhaan 3x RBI or</text>
                  <text x="780" y="114" textAnchor="middle" fill="#D1FAE5" fontSize="10">Order XXXVII Suit</text>

                  {/* Bottom summary bar */}
                  <rect x="10" y="170" width="840" height="52" rx="10" fill="#0F172A" stroke="#334155" strokeWidth="1" />
                  <text x="430" y="200" textAnchor="middle" fill="#E2E8F0" fontSize="12" fontWeight="bold">
                    Key Principle: Never argue with Ariba/Coupa portal admins after Day 45 — escalate statutory tax &amp; interest liability directly to the CFO.
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden mb-4">
                {[
                  { stage: "Stage 1 (Day 1–15)", title: "Lock Estoppel Evidence", desc: "Export signed attendance sheets, feedback scores, and LMS SSO logs with BSA s.63 certificate." },
                  { stage: "Stage 2 (Day 16–45)", title: "Deemed Acceptance", desc: "Document 15-day objection-free window under MSMED s.2(b) and GSTR-1 invoice upload." },
                  { stage: "Stage 3 (Day 46)", title: "Serve s.43B(h) Demand", desc: "Send Fact-Verified Notice to CFO, Company Secretary & Auditor citing 30% tax disallowance." },
                  { stage: "Stage 4 (Parallel)", title: "Trigger NI s.138 / CPC s.80", desc: "Enforce 30-day bounced cheque notices or 60-day Govt/SSDM Section 80 CPC notices." },
                  { stage: "Stage 5 (Enforce)", title: "MSEFC or Order XXXVII Suit", desc: "File on MSME Samadhaan for 3x RBI compound interest or Commercial Court s.12A." },
                ].map((item, idx) => (
                  <div key={item.stage} className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase text-[#DC2626]">{item.stage}</p>
                      <p className="text-sm font-extrabold text-slate-900">{item.title}</p>
                      <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4 Enterprise Training, LMS &amp; Proctoring Default Scenarios
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select your exact commercial bottleneck below to inspect the statutory rebuttal and step-by-step recovery protocol.
              </p>

              <CorporateLndScenarioTabs />
            </section>

            {/* Section 5: Worked Recovery Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked Ledger: ₹24 Lakh Leadership Program &amp; s.43B(h) Impact
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider an Udyam-registered executive leadership firm that delivered 20 mid-management workshops to a listed IT/BFSI enterprise for a ₹24,00,000 fee (₹28,32,000 incl. 18% GST), frozen for 180 days over &ldquo;Q3 budget cuts.&rdquo; Here is how statutory compounding and Section 43B(h) change the negotiation math. Use our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>{" "}
                to compute your exact invoice figure.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800">
                  <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3">
                    Creditor Statutory Claim Ledger (180 Days Overdue)
                  </p>
                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">Delivered Principal (20 Workshops)</span>
                      <span className="font-bold">₹24,00,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">GST @ 18% (GSTR-1 Reported)</span>
                      <span className="font-bold">₹4,32,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">Total Unpaid Invoice Value</span>
                      <span className="font-bold text-white">₹28,32,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">MSMED s.16 Interest (19.50% p.a. / 3x RBI 6.50%, ~135 Delay Days)</span>
                      <span className="font-bold text-emerald-400">+ ₹2,11,400</span>
                    </div>
                    <div className="flex justify-between pt-1 text-sm sm:text-base">
                      <span className="font-extrabold text-white">Total Recoverable Demand</span>
                      <span className="font-black text-emerald-400">₹30,43,400</span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                      Buyer CFO Tax Pain Under Section 43B(h)
                    </p>
                    <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed mb-4">
                      If the enterprise leaves ₹24,00,000 unpaid past March 31 (beyond the 45-day MSMED s.15 window), the ₹24,00,000 L&amp;D expense is disallowed from FY taxable deductions. At a ~25.17% corporate tax rate, the buyer faces an immediate <strong>₹6,04,080 extra cash tax outflow</strong>—on top of accruing ₹2.11+ Lakh in non-deductible MSMED interest (Section 23 MSMED Act).
                    </p>
                  </div>
                  <Link
                    href="/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice"
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold transition-colors"
                  >
                    View Section 43B(h) Intimation Notice Format &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Dual-Track CTA Mid-Page */}
            <CorporateLndNoticeCTA />

            {/* Section 6: BSA s.63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Attendance, Feedback &amp; LMS Telemetry: BSA s.63 Proof Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Enterprise defense counsel often try to defeat Summary Suits or MSEFC claims by alleging &ldquo;incomplete delivery&rdquo; or &ldquo;unverified participant counts.&rdquo; Assemble these six records with a Section 63 Bharatiya Sakshya Adhiniyam (BSA), 2023 electronic certificate before serving your demand:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Executed PO / SOW / Email Scope",
                    desc: "Signed MSA, PO number, or corporate domain email confirming batch dates, per-seat pricing, and city locations.",
                  },
                  {
                    title: "2. Signed Workshop Attendance & Feedback",
                    desc: "Physical sign-in sheets, Zoom/MS Teams participant CSVs, and post-session NPS/feedback summaries.",
                  },
                  {
                    title: "3. LMS Provisioning & Proctoring Logs",
                    desc: "Tenant creation timestamps, SSO user activation logs, and candidate assessment/proctoring completion reports.",
                  },
                  {
                    title: "4. GSTR-1 / E-Invoice & GSTR-2B Trail",
                    desc: "IRN-validated e-invoice proving the buyer's GSTIN claimed or received Input Tax Credit on the billed training.",
                  },
                  {
                    title: "5. 15-Day Objection-Free Email Audit",
                    desc: "Chronological email thread proving zero written quality disputes were raised within 15 days of delivery.",
                  },
                  {
                    title: "6. Udyam Registration & BSA s.63 Certificate",
                    desc: "Active Udyam Certificate (Micro/Small) plus Section 63 BSA hash/device certificate authenticating all digital logs.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-sm font-extrabold text-slate-900 mb-1">{item.title}</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Procurement Lags & Related IND-17 Links */}
            <section
              id="heading-procurement-lags"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Neutralizing 180-Day Procurement Portal &amp; PSU s.80 Delays
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                If your enterprise buyer is a Central or State Government ministry, public university, or State Skill Development Mission (SSDM) holding back CSR/PMKVY training tranches, do not file a civil suit blindly—serve a mandatory 60-day notice under{" "}
                <Link
                  href="/law/section-80-cpc-notice-to-government"
                  className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                >
                  Section 80 CPC Notice to Government
                </Link>{" "}
                first. For private corporate LMS renewals where a security cheque or NACH mandate bounced, immediately follow the{" "}
                <Link
                  href="/cheque-bounce-account-closed-signature-mismatch"
                  className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                >
                  Cheque Bounce &amp; Signature Mismatch Recovery
                </Link>{" "}
                30-day statutory timeline, and pair your notice with our{" "}
                <Link
                  href="/templates/it-software-saas-msa-payment-default-legal-notice"
                  className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                >
                  SaaS MSA Payment Default Legal Notice Template
                </Link>
                .
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Related IND-17 Education &amp; EdTech B2B Playbooks
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                  <li>
                    <Link
                      href="/edtech-b2b-smart-class-school-erp-robotics-lab-unpaid-dues-from-schools"
                      className="text-[#DC2626] font-semibold hover:underline"
                    >
                      &rarr; B2B EdTech, Smart-Class &amp; School ERP Debt Recovery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/how-private-schools-recover-unpaid-fees-without-withholding-tc"
                      className="text-[#DC2626] font-semibold hover:underline"
                    >
                      &rarr; Private School Fee Recovery Without Withholding TC
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/school-textbook-publisher-uniform-stationery-distributor-recovery"
                      className="text-[#DC2626] font-semibold hover:underline"
                    >
                      &rarr; Textbook Publisher &amp; Educational Distributor Recovery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                      className="text-[#DC2626] font-semibold hover:underline"
                    >
                      &rarr; Bulk CSV Recovery Desk (10 to 10,000+ Defaulters)
                    </Link>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 8: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions: Corporate L&amp;D &amp; LMS Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] text-lg font-bold group-open:rotate-45 transition-transform shrink-0">
                        +
                      </span>
                    </summary>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 9: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Bare Acts &amp; Official Government Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline font-medium"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
