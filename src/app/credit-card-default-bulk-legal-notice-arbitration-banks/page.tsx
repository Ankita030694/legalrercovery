import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CreditCardTableOfContents from "./CreditCardTableOfContents";
import CreditCardScenarioTabs from "./CreditCardScenarioTabs";
import CreditCardRecoveryCTA from "./CreditCardRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/credit-card-default-bulk-legal-notice-arbitration-banks";
const PAGE_H1 =
  "Compliant Credit Card Delinquency Recovery for Issuers: Bulk Legal Notices & Institutional ODR";
const META_TITLE =
  "Credit Card NPA Recovery for Banks: Legal Notice & ODR Guide";
const META_DESCRIPTION =
  "Recover 90–180+ DPD credit card NPAs without RBI penalties. Post-Perkins & CORE neutral ODR arbitration, Contract Act s.73 & bulk omnichannel notices.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
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
        alt: formatAltText(
          "Credit Card Default Bulk Legal Notice and Neutral ODR Arbitration Guide for Indian Banks"
        ),
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

const PRIMARY_SOURCES = [
  {
    title:
      "Arbitration and Conciliation Act, 1996 (Sections 11, 12(5), 18, 21, 29B, 34, 36 & Seventh Schedule) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title:
      "Indian Contract Act, 1872 (Sections 73 & 74 — Breach of Cardholder Agreement & Liquidated Damages) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "RBI Master Direction – Credit Card and Debit Card – Issuance and Conduct Directions, 2022 (Updated 2024)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12300",
  },
  {
    title:
      "RBI Fair Lending Practice – Penal Charges in Loan Accounts (Non-Capitalization Mandate)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12527",
  },
  {
    title:
      "Credit Information Companies (Regulation) Act, 2005 (CICRA) & RBI Pre-Reporting Intimation Framework",
    url: "https://www.indiacode.nic.in/handle/123456789/2066",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records Admissibility for CMS & MITC Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Legal Services Authorities Act, 1987 (Sections 19, 20 & 21 — Pre-Litigation National Lok Adalat Awards)",
    url: "https://www.indiacode.nic.in/handle/123456789/1944",
  },
];

const FAQS = [
  {
    question:
      "Why are Indian courts setting aside thousands of bank credit card arbitral awards?",
    answer:
      "High Courts and Commercial Courts routinely set aside ex-parte credit card awards under Section 34 (or refuse enforcement under Section 36) because card issuers unilaterally appointed sole arbitrators from an internal bank-curated panel. Following Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2019) and the 5-Judge Supreme Court Constitution Bench ruling in Central Organisation for Railway Electrification (CORE) (2024), any unilateral or asymmetric arbitrator appointment by an interested party violates Section 12(5) and Section 18 equality, rendering the award void ab initio.",
  },
  {
    question:
      "How does a bank transition legacy credit card agreements to neutral institutional ODR arbitration?",
    answer:
      "Issuers should first update their Most Important Terms and Conditions (MITC) and Cardholder Agreement prospectively to designate a genuinely independent institutional ODR centre with a broad, randomized arbitrator panel. For existing 90–180+ DPD accounts governed by older unilateral clauses, legal teams should serve a compliant Section 21 notice proposing neutral ODR appointment and seeking post-dispute written waiver under the Section 12(5) proviso, or route sub-₹3 Lakh balances to Pre-Litigation National Lok Adalat.",
  },
  {
    question:
      "What are the mandatory RBI Credit Card Directions that govern default recovery notices?",
    answer:
      "Under the RBI Master Direction on Credit Card Issuance and Conduct and Fair Lending Penal Charges Directions, issuers must not capitalize late payment fees or penal charges into revolving interest, must issue prior intimation (minimum 7 days) before reporting a cardholder as default to Credit Information Companies (CIBIL, Experian, Equifax, CRIF), and must ensure recovery communications strictly respect 8:00 AM–7:00 PM timing without contacting relatives, employers, or references.",
  },
  {
    question:
      "How does explaining 'Settled' versus 'Written Off' CICRA status improve credit card notice conversion?",
    answer:
      "Salaried and self-employed cardholders often underestimate the multi-year credit lock created by a 'Written Off' or 'Settled' remark reported to CICs under CICRA 2005. When a fact-verified notice objectively sets out the difference between 'Closed' (full repayment), 'Settled' (partial OTS compromise), and 'Written Off' (post-180 DPD prudential write-off that impairs home loans, auto finance, and corporate credit for years), responsive cardholders prioritize full cure or structured closure before charge-off.",
  },
  {
    question:
      "Can banks invoke SARFAESI or DRT for defaulted unsecured credit card portfolios?",
    answer:
      "No. Credit cards are unsecured revolving credit lines with zero underlying mortgage or hypothecation, so Section 31(g) of the SARFAESI Act, 2002 bars enforcement regardless of balance size. Similarly, Section 1(4) of the RDB Act, 1993 sets a ₹20 Lakh minimum pecuniary threshold for DRT Original Applications. Consequently, credit card issuers must rely on multi-wave pre-litigation legal notices, neutral ODR fast-track arbitration (Section 29B), Pre-Litigation Lok Adalat, Order XXXVII CPC summary suits, or PSS Act Section 25 (where auto-debit e-NACH mandates bounced).",
  },
  {
    question:
      "What electronic records are required under BSA 2023 Section 63 to prove a credit card default?",
    answer:
      "To survive Section 34 challenges and prove Contract Act Section 73 damages, issuers must compile a BSA 2023 Section 63 Part-A/Part-B certificate paired with a Bankers' Books Evidence Act Section 2A certificate covering: digital MITC clickwrap/OTP acceptance logs with IP timestamp, monthly Card Management System (CMS) billing statements, itemized principal vs finance charge vs non-capitalized penal charge breakups, 7-day CICRA pre-reporting alert logs, and tri-channel notice delivery proofs (Email SMTP, WhatsApp webhook, India Post Speed Post RPAD tracking).",
  },
  {
    question:
      "When should an unsecured risk head choose Pre-Litigation Lok Adalat instead of ODR Arbitration?",
    answer:
      "For high-volume sub-₹1 Lakh credit card balances crossing 120–179 DPD where cardholders show willingness to pay a structured One-Time Settlement (OTS), Pre-Litigation National Lok Adalat under Section 20(2) of the Legal Services Authorities Act, 1987 carries zero court fees and yields a final, non-appealable Civil Court decree under Section 21. For unresponsive prime cardholders above ₹1.5 Lakh–₹15 Lakh, neutral institutional ODR arbitration under Section 29B delivers an enforceable Section 36 award for Order XXI salary or bank-account attachment.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: PAGE_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-19T15:25:00+05:30",
  dateModified: "2026-11-19T15:25:00+05:30",
  mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: `${SITE_URL}/#organization`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  inLanguage: "en-IN",
  about: {
    "@type": "Thing",
    name: "Credit Card Default Legal Notice & Neutral ODR Arbitration for Indian Banks",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Banks Execute Compliant Credit Card Delinquency Recovery via Bulk Legal Notices & Neutral ODR",
  description:
    "Four-stage statutory workflow for Indian credit card issuers managing 60–180+ DPD delinquencies in compliance with RBI Directions, Perkins Eastman, and the CORE 5-Judge Constitution Bench ruling.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "60–90 DPD Pre-NPA Ledger Scrub & 7-Day CICRA Intimation",
      text: "Reconcile CMS statements to strip any capitalized penal charges under RBI Fair Lending Directions and issue compliant 7-day pre-reporting CICRA intimation alongside soft cure notices.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "90–120 DPD Multi-Wave Omnichannel Advocate Legal Notice",
      text: "Serve fact-verified recall and Contract Act s.73 demand notices via Email, WATI WhatsApp, and India Post Speed Post RPAD strictly within 8 AM–7 PM RBI safe-harbor norms with BSA s.63 delivery logs.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "120–179 DPD Neutral Institutional ODR (s.21/s.29B) or Lok Adalat Split",
      text: "Route balances above ₹1.5L to neutral institutional ODR arbitration via compliant Section 21 invocation (zero unilateral bank-panel appointments) and batch sub-₹1L responsive accounts to Pre-Litigation National Lok Adalat.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Section 36 Decree Execution & Post-180 DPD Write-Off Recovery",
      text: "Execute neutral ODR awards and Lok Adalat decrees under CPC Order XXI (salary and bank-account attachment) while maintaining limitation via Section 18–19 acknowledgments on charge-off portfolios.",
    },
  ],
};

const BREADCRUMB_SCHEMA = {
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
      name: "Industries",
      item: `${SITE_URL}/industries`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Banks & Financial Institutions",
      item: `${SITE_URL}/industries/banks-loan-recovery`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Credit Card NPA & ODR Recovery",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function CreditCardDefaultRecoveryBanksPage() {
  const breadcrumbItems = [
    { label: "Industries", href: "/industries" },
    {
      label: "Banks & Financial Institutions",
      href: "/industries/banks-loan-recovery",
    },
    {
      label: "Credit Card NPA & ODR Recovery",
      href: PAGE_URL,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-01 &bull; Bank Credit Card Playbook</span>
            <span>&bull;</span>
            <span>Arbitration s.11/s.21 &bull; Post-CORE Neutral ODR</span>
          </div>

          {/* Single Page H1 (verbatim == ARTICLE_SCHEMA.headline) */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {PAGE_H1}
          </h1>

          {/* Executive Statutory Summary Box (40–60 words + Parent Hub Link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &bull; Unsecured Card Portfolio Risk
            </span>
            After <em>Perkins Eastman</em> and the 5-Judge <em>CORE</em>{" "}
            Constitution Bench ruling, bank-appointed unilateral credit card
            arbitral awards are void under Section 12(5). Through our{" "}
            <Link
              href="/industries/banks-loan-recovery"
              className="text-red-400 hover:text-red-300 underline font-semibold"
            >
              Bank Loan &amp; NPA Legal Recovery Platform
            </Link>
            , issuers recover 90–180+ DPD card portfolios using RBI-safe
            omnichannel advocate notices, CICRA reporting clarity, neutral ODR
            arbitration, and National Lok Adalat batching.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">
                Critical Action Corridor
              </span>
              <span className="text-lg sm:text-2xl font-black text-red-400">
                90–180+ DPD
              </span>
              <span className="text-[10px] text-slate-400 block">
                NPA to Charge-Off Cliff
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">
                Arbitrator Mandate
              </span>
              <span className="text-lg sm:text-2xl font-black text-emerald-400">
                Neutral ODR
              </span>
              <span className="text-[10px] text-slate-400 block">
                Perkins &amp; CORE Compliant
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">
                RBI Safe-Harbor Rail
              </span>
              <span className="text-lg sm:text-2xl font-black text-amber-400">
                8 AM–7 PM
              </span>
              <span className="text-[10px] text-slate-400 block">
                Zero Penal Compounding
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">
                Fast-Track Award
              </span>
              <span className="text-lg sm:text-2xl font-black text-slate-100">
                s.29B (&le;6 Mo)
              </span>
              <span className="text-[10px] text-slate-400 block">
                Executable s.36 Decree
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs (Breadcrumbs component auto-prepends Home) */}
        <div className="mb-6 sm:mb-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* 2-Column Editorial Layout */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <CreditCardTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Post-Perkins & CORE Invalidation Crisis */}
            <section
              id="heading-perkins-crisis"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  1
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Institutional Arbitral Exposure
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Why Unilateral Credit Card Arbitral Awards Fail After Perkins
                &amp; CORE
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                For over a decade, scheduled commercial banks and card-issuing
                subsidiaries scaled unsecured credit card litigation by placing
                standardized unilateral appointment clauses inside Cardholder
                Agreements—empowering the bank&apos;s legal head or authorized
                signatory to nominate a sole arbitrator from a bank-retained
                roster. Because credit cards carry zero collateral (barring{" "}
                <Link
                  href="/law/sarfaesi-section-13-2-demand-notice-bank-guide"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  SARFAESI Section 13(2)
                </Link>{" "}
                and{" "}
                <Link
                  href="/sarfaesi-section-14-dm-cmm-physical-possession-workflow"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  Section 14 physical possession
                </Link>
                ) and typically sit far below the ₹20 Lakh DRT floor detailed in
                our{" "}
                <Link
                  href="/bank-loan-recovery-below-20-lakhs-drt-threshold-options"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  sub-₹20 Lakh bank recovery matrix
                </Link>
                , bulk arbitration became the default institutional recovery
                engine.
              </p>

              <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl space-y-1.5">
                <h3 className="text-sm font-bold text-red-950">
                  The Void-Ab-Initio Collapse Across Card Execution Dockets
                </h3>
                <p className="text-xs sm:text-sm text-red-900 leading-relaxed">
                  Thousands of bank credit card arbitral awards have been
                  invalidated by High Courts and Commercial Courts under Section
                  34—or dismissed outright at the Section 36 execution stage—as{" "}
                  <strong>non-est and void ab initio</strong>. Where a bank
                  directly nominates a sole arbitrator, or restricts a
                  cardholder to choose from an asymmetric bank-curated panel,
                  Section 12(5) read with the Seventh Schedule strips the
                  tribunal of jurisdiction from day one.
                </p>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                For a VP of Credit Card Collections or Unsecured Portfolio Risk
                Head, persisting with legacy unilateral arbitration creates a
                triple write-off trap: (1) sunk institutional and advocate fees
                on unenforceable ex-parte awards, (2) silent expiry of the
                3-year civil limitation window under the Limitation Act, 1963
                while invalid execution petitions stall, and (3) heightened
                supervisory scrutiny when aggressive recovery agency calling
                fills the enforcement vacuum. Replacing legacy panels with{" "}
                <strong>
                  multi-wave advocate legal notices paired with neutral
                  institutional ODR arbitration
                </strong>{" "}
                resolves both legal validity and RBI audit exposure in one
                operational pipeline.
              </p>
            </section>

            {/* Section 2: 4-Stage Operational Decision Tree (60–180+ DPD) */}
            <section
              id="heading-recovery-workflow"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  2
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Operational Decision Tree
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                4-Stage Compliant Credit Card Recovery Workflow (60 to 180+ DPD)
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Unsecured credit card recovery deteriorates sharply after Day
                180 when prudential write-off provisioning hits bank balance
                sheets. Leading card issuers structure escalation across four
                strictly timed statutory gates rather than relying on repetitive
                telecalling loops:
              </p>

              {/* Desktop SVG Decision Tree Flowchart (explicit integer width & height) */}
              <div className="hidden md:block w-full bg-slate-900 rounded-2xl p-5 border border-slate-800 overflow-x-auto">
                <svg
                  width={840}
                  height={290}
                  viewBox="0 0 840 290"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Four-stage credit card delinquency escalation decision tree from 60 DPD pre-NPA to neutral ODR and Section 36 execution"
                  className="w-full h-auto max-w-[840px] mx-auto"
                >
                  <rect width="840" height="290" rx="14" fill="#0F172A" />
                  <text
                    x="420"
                    y="28"
                    textAnchor="middle"
                    fill="#F87171"
                    fontSize="11"
                    fontWeight="700"
                    letterSpacing="1.6"
                  >
                    CREDIT CARD ISSUER ESCALATION DECISION TREE (60 DPD TO 180+ DPD)
                  </text>

                  {/* Stage 1 */}
                  <rect
                    x="22"
                    y="52"
                    width="178"
                    height="122"
                    rx="10"
                    fill="#1E293B"
                    stroke="#334155"
                    strokeWidth="1.5"
                  />
                  <rect x="22" y="52" width="178" height="26" rx="10" fill="#334155" />
                  <text x="111" y="69" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="700">
                    STAGE 1: 60–90 DPD
                  </text>
                  <text x="111" y="96" textAnchor="middle" fill="#E2E8F0" fontSize="11" fontWeight="600">
                    Pre-NPA &amp; CICRA Alert
                  </text>
                  <text x="111" y="116" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    &bull; 7-Day CIC Pre-Notice
                  </text>
                  <text x="111" y="132" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    &bull; Strip Penal Compounding
                  </text>
                  <text x="111" y="148" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    &bull; EMI / Restructure Offer
                  </text>

                  {/* Arrow 1 -> 2 */}
                  <path d="M200 113 H226" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="224,107 234,113 224,119" fill="#DC2626" />

                  {/* Stage 2 */}
                  <rect
                    x="234"
                    y="52"
                    width="180"
                    height="122"
                    rx="10"
                    fill="#1E293B"
                    stroke="#DC2626"
                    strokeWidth="1.5"
                  />
                  <rect x="234" y="52" width="180" height="26" rx="10" fill="#DC2626" />
                  <text x="324" y="69" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">
                    STAGE 2: 90–120 DPD
                  </text>
                  <text x="324" y="96" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="600">
                    Omnichannel Legal Notice
                  </text>
                  <text x="324" y="116" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    &bull; Contract Act s.73 Recall
                  </text>
                  <text x="324" y="132" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    &bull; Email + WATI + RPAD
                  </text>
                  <text x="324" y="148" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    &bull; BSA s.63 Delivery Pack
                  </text>

                  {/* Arrow 2 -> 3 */}
                  <path d="M414 113 H440" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="438,107 448,113 438,119" fill="#DC2626" />

                  {/* Stage 3 */}
                  <rect
                    x="448"
                    y="52"
                    width="180"
                    height="122"
                    rx="10"
                    fill="#1E293B"
                    stroke="#10B981"
                    strokeWidth="1.5"
                  />
                  <rect x="448" y="52" width="180" height="26" rx="10" fill="#065F46" />
                  <text x="538" y="69" textAnchor="middle" fill="#ECFDF5" fontSize="11" fontWeight="700">
                    STAGE 3: 120–179 DPD
                  </text>
                  <text x="538" y="96" textAnchor="middle" fill="#D1FAE5" fontSize="11" fontWeight="600">
                    Ticket-Tier Forum Split
                  </text>
                  <text x="538" y="116" textAnchor="middle" fill="#A7F3D0" fontSize="10">
                    &bull; &ge;₹1.5L: Neutral ODR s.21
                  </text>
                  <text x="538" y="132" textAnchor="middle" fill="#A7F3D0" fontSize="10">
                    &bull; &lt;₹1.5L: Lok Adalat s.20(2)
                  </text>
                  <text x="538" y="148" textAnchor="middle" fill="#A7F3D0" fontSize="10">
                    &bull; Bounced NACH: PSS s.25
                  </text>

                  {/* Arrow 3 -> 4 */}
                  <path d="M628 113 H654" stroke="#10B981" strokeWidth="2.5" />
                  <polygon points="652,107 662,113 652,119" fill="#10B981" />

                  {/* Stage 4 */}
                  <rect
                    x="662"
                    y="52"
                    width="156"
                    height="122"
                    rx="10"
                    fill="#1E293B"
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                  />
                  <rect x="662" y="52" width="156" height="26" rx="10" fill="#92400E" />
                  <text x="740" y="69" textAnchor="middle" fill="#FEF3C7" fontSize="11" fontWeight="700">
                    STAGE 4: 180+ DPD
                  </text>
                  <text x="740" y="96" textAnchor="middle" fill="#FDE68A" fontSize="11" fontWeight="600">
                    Decree &amp; Execution
                  </text>
                  <text x="740" y="116" textAnchor="middle" fill="#FDE68A" fontSize="10">
                    &bull; s.36 / Order XXI Attach
                  </text>
                  <text x="740" y="132" textAnchor="middle" fill="#FDE68A" fontSize="10">
                    &bull; Salary / Bank Garnishee
                  </text>
                  <text x="740" y="148" textAnchor="middle" fill="#FDE68A" fontSize="10">
                    &bull; s.18/19 Limitation Reset
                  </text>

                  {/* Bottom Compliance Bar */}
                  <rect
                    x="22"
                    y="198"
                    width="796"
                    height="70"
                    rx="10"
                    fill="#172033"
                    stroke="#334155"
                    strokeWidth="1"
                  />
                  <text x="42" y="222" fill="#F87171" fontSize="11" fontWeight="700">
                    NON-NEGOTIABLE GUARDRAILS ACROSS ALL 4 STAGES:
                  </text>
                  <text x="42" y="242" fill="#CBD5E1" fontSize="10.5">
                    1. Zero Unilateral Arbitrators (Perkins / CORE s.12(5)) &nbsp;&nbsp;|&nbsp;&nbsp; 2. Strict 8 AM–7 PM RBI Contact Rule &nbsp;&nbsp;|&nbsp;&nbsp; 3. Non-Capitalized Penal Charges (RBI 2024)
                  </text>
                  <text x="42" y="258" fill="#94A3B8" fontSize="10.5">
                    4. Mandatory 7-Day CICRA Pre-Reporting Intimation &nbsp;&nbsp;|&nbsp;&nbsp; 5. BSA 2023 s.63 + Bankers&apos; Books s.2A Digital Audit Trail
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Workflow Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
                {[
                  {
                    stage: "Stage 1 · 60–90 DPD",
                    title: "Pre-NPA Ledger Scrub & 7-Day CICRA Alert",
                    detail:
                      "Strip capitalized penal charges per RBI Directions, serve 7-day pre-reporting CIC intimation, and offer structured cure.",
                  },
                  {
                    stage: "Stage 2 · 90–120 DPD",
                    title: "Multi-Wave Omnichannel Advocate Notice",
                    detail:
                      "Dispatch Contract Act s.73 recall notices via Email + WATI WhatsApp + Speed Post RPAD with BSA s.63 tracking certificates.",
                  },
                  {
                    stage: "Stage 3 · 120–179 DPD",
                    title: "Neutral ODR (s.21/s.29B) vs Lok Adalat Split",
                    detail:
                      "Route ≥₹1.5L accounts to neutral institutional ODR arbitration; batch <₹1.5L accounts to 0%-fee National Lok Adalat.",
                  },
                  {
                    stage: "Stage 4 · 180+ DPD",
                    title: "Section 36 Execution & Post-Write-Off Recovery",
                    detail:
                      "Enforce awards via CPC Order XXI salary/bank garnishee orders and lock written OTS acknowledgments (Limitation s.18–19).",
                  },
                ].map((card) => (
                  <div
                    key={card.stage}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800 space-y-1.5"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                      {card.stage}
                    </span>
                    <h3 className="text-sm font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {card.detail}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Where a cardholder previously activated an auto-debit standing
                instruction for Minimum Amount Due (MAD) or Total Amount Due
                (TAD) via e-NACH that returned unpaid for insufficient funds,
                issuers can layer a parallel statutory demand using our{" "}
                <Link
                  href="/templates/section-25-pss-act-nach-bounce-legal-notice-format"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  Section 25 PSS Act e-NACH bounce notice format
                </Link>{" "}
                and verify statutory 30-day dispatch cutoffs via the{" "}
                <Link
                  href="/tools/section-25-nach-bounce-limitation-calculator"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  Section 25 NACH Bounce Limitation Calculator
                </Link>
                .
              </p>
            </section>

            {/* Section 3: Dark-Header Statutory Comparison Matrix */}
            <section
              id="heading-forum-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  3
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Forum &amp; Compliance Matrix
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Neutral ODR vs Legacy Panels, Lok Adalat &amp; Order 37
                Comparison
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Unsecured credit card portfolios span balances from ₹25,000 to
                ₹15 Lakh+. Selecting the right adjudicatory track after a
                multi-wave pre-litigation legal notice protects both enforceability
                and net recovery yield:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[680px]">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3.5 px-4 font-bold border-b border-slate-800">
                        Enforcement Track
                      </th>
                      <th className="py-3.5 px-3 font-bold border-b border-slate-800">
                        Perkins / CORE Validity
                      </th>
                      <th className="py-3.5 px-3 font-bold border-b border-slate-800">
                        Optimal Ticket Band
                      </th>
                      <th className="py-3.5 px-3 font-bold border-b border-slate-800">
                        Resolution Timeline
                      </th>
                      <th className="py-3.5 px-3 font-bold border-b border-slate-800">
                        Enforceability &amp; Cost Profile
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="bg-red-50/40 hover:bg-red-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-red-900">
                        Legacy Unilateral Bank Panel Arbitration
                      </td>
                      <td className="py-3.5 px-3 font-bold text-[#DC2626]">
                        INVALID (Void ab initio u/s 12(5))
                      </td>
                      <td className="py-3.5 px-3 text-slate-700">
                        Do Not Deploy
                      </td>
                      <td className="py-3.5 px-3 text-slate-700">
                        Quashed in s.34 / s.36
                      </td>
                      <td className="py-3.5 px-3 text-red-800">
                        High sunk fee loss; courts dismiss execution petitions
                        suo motu
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Neutral Institutional ODR Arbitration (s.21 &amp; s.29B)
                      </td>
                      <td className="py-3.5 px-3 font-bold text-emerald-700">
                        Compliant (Independent Panel)
                      </td>
                      <td className="py-3.5 px-3 text-slate-700">
                        ₹1.5 Lakh – ₹20 Lakh
                      </td>
                      <td className="py-3.5 px-3 text-slate-700">
                        3 – 6 Months (Written Pleadings)
                      </td>
                      <td className="py-3.5 px-3 text-slate-700">
                        Directly executable civil decree u/s 36; predictable
                        fixed institutional fee
                      </td>
                    </tr>
                    <tr className="bg-slate-50/50 hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Pre-Litigation National Lok Adalat (s.20(2) LSA Act)
                      </td>
                      <td className="py-3.5 px-3 font-bold text-emerald-700">
                        N/A (Statutory DLSA Forum)
                      </td>
                      <td className="py-3.5 px-3 text-slate-700">
                        ₹25,000 – ₹3 Lakh
                      </td>
                      <td className="py-3.5 px-3 text-slate-700">
                        30 – 90 Days (Quarterly Sitting)
                      </td>
                      <td className="py-3.5 px-3 text-emerald-800 font-medium">
                        0% Court Fee; final, non-appealable Civil Court decree
                        u/s 21
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Order XXXVII CPC / Commercial Court (s.12A PIM)
                      </td>
                      <td className="py-3.5 px-3 font-bold text-emerald-700">
                        Judicial Forum (Zero Bias Risk)
                      </td>
                      <td className="py-3.5 px-3 text-slate-700">
                        ₹3 Lakh – ₹20 Lakh (High-Value Super-Prime)
                      </td>
                      <td className="py-3.5 px-3 text-slate-700">
                        6 – 14 Months (3–5 Mo via s.12A)
                      </td>
                      <td className="py-3.5 px-3 text-slate-700">
                        State ad-valorem court fee; strong Order XXXVIII Rule 5
                        attachment power
                      </td>
                    </tr>
                    <tr className="bg-slate-50/50 hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Multi-Wave Bulk Advocate Legal Notice (Pre-Litigation)
                      </td>
                      <td className="py-3.5 px-3 font-bold text-emerald-700">
                        Mandatory Pre-Step for All Tracks
                      </td>
                      <td className="py-3.5 px-3 text-slate-700">
                        All Balances (₹25K – ₹25L+)
                      </td>
                      <td className="py-3.5 px-3 text-slate-700">
                        7 – 21 Days Cure Window
                      </td>
                      <td className="py-3.5 px-3 text-slate-700">
                        Lowest unit cost; triggers immediate voluntary OTS &amp;
                        stops s.21 limitation
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                For deeper execution procedures on how institutional awards
                convert into salary and bank garnishee orders, review our{" "}
                <Link
                  href="/arbitration-personal-loan-defaults-bank-recovery-mechanism"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  bank arbitration execution mechanism guide
                </Link>{" "}
                and our{" "}
                <Link
                  href="/online-dispute-resolution-india"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  Online Dispute Resolution (ODR) India overview
                </Link>
                . To model forum eligibility across mixed secured/unsecured bank
                portfolios, run the{" "}
                <Link
                  href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  SARFAESI &amp; DRT Bank Recovery Forum Calculator
                </Link>
                .
              </p>
            </section>

            {/* Section 4: Landmark Supreme Court Precedents */}
            <section
              id="heading-sc-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  4
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Binding Judicial Authorities
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Supreme Court Precedents Governing Bank Arbitrator Appointments
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Every credit card legal head auditing arbitration clauses and
                Section 21 invocation notices must benchmark compliance against
                four binding Supreme Court decisions:
              </p>

              <div className="space-y-4">
                {[
                  {
                    cite: "Perkins Eastman Architects DPC v. HSCC (India) Ltd. — (2020) 20 SCC 760",
                    tag: "Unilateral Sole Arbitrator Bar",
                    holding:
                      "Held that a party having an exclusive interest in the outcome of the dispute is statutorily ineligible under Section 12(5) read with the Seventh Schedule to unilaterally appoint a sole arbitrator. Directly invalidated standard bank credit-card clauses authorizing an officer of the issuer to nominate a sole arbitrator.",
                  },
                  {
                    cite: "Central Organisation for Railway Electrification (CORE) v. ECI SPIC SMO MCML (JV) — 2024 (5-Judge Constitution Bench, SC)",
                    tag: "Equality u/s 18 & Curated Panel Strike-Down",
                    holding:
                      "A 5-Judge Constitution Bench definitively settled the law: clauses forcing one party to select an arbitrator solely from a restricted, unilateral panel curated by the other party violate the principle of equal treatment under Section 18 and create justifiable doubts as to independence. Neutral, broad-based institutional ODR panels with transparent rotation are now the safe institutional standard.",
                  },
                  {
                    cite: "TRF Ltd. v. Energo Engineering Projects Ltd. — (2017) 8 SCC 377",
                    tag: "No Indirect Nomination",
                    holding:
                      "Established that once a person (such as a bank's MD or Head of Legal) becomes statutorily ineligible to act as arbitrator under Section 12(5), they cannot nominate anyone else as arbitrator—affirming that what cannot be done directly cannot be achieved indirectly.",
                  },
                  {
                    cite: "Bharat Broadband Network Ltd. v. United Telecoms Ltd. — (2019) 5 SCC 755",
                    tag: "Strict Post-Dispute Express Waiver",
                    holding:
                      "Clarified that Section 12(5) ineligibility goes to the root of jurisdiction and renders proceedings void ab initio. Mere participation by a party does not waive ineligibility; only an express written agreement executed AFTER disputes have arisen can operate as a valid waiver under the statutory proviso.",
                  },
                ].map((item) => (
                  <div
                    key={item.cite}
                    className="relative pl-5 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl overflow-hidden"
                  >
                    <span
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]"
                      aria-hidden="true"
                    />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {item.cite}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-50 text-[#DC2626] border border-red-200">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {item.holding}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: RBI Credit Card Directions & CICRA Impact */}
            <section
              id="heading-rbi-cicra"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  5
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Regulatory &amp; Credit Bureau Compliance
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                RBI Credit Card Directions, Penal Charges &amp; CICRA Notice
                Impact
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Unsecured credit cards attract the highest volume of customer
                grievances before the RBI Integrated Ombudsman. Shifting
                collection pressure from third-party telecallers to formal,
                fact-verified legal notices protects the issuer&apos;s license
                and brand while sharply raising voluntary cure rates—provided
                every notice respects three regulatory pillars:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/70 space-y-2">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                    RBI Penal Charges Mandate
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Zero Penal Interest Compounding
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI&apos;s Fair Lending Practice Directions on Penal
                    Charges, late payment fees and over-limit charges cannot be
                    capitalized into principal to levy further revolving
                    interest. Legal demand schedules must itemize Principal,
                    Contractual Finance Charges, and Non-Capitalized Penal
                    Charges separately to prevent Section 34 award reductions
                    under Contract Act Section 73/74.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/70 space-y-2">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red-50 text-[#DC2626] border border-red-200">
                    RBI Recovery Agent Rules
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    8 AM–7 PM &amp; Privacy Safe Harbor
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI strictly bars intimidating language, third-party shaming
                    of family or employers, and calls outside 8:00 AM–7:00 PM.
                    Replacing high-risk field agency visits with formal{" "}
                    <Link
                      href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      bank legal recovery notices
                    </Link>{" "}
                    served strictly to the cardholder&apos;s KYC email,
                    WhatsApp, and Speed Post RPAD address creates an objective,
                    harassment-free legal record.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/70 space-y-2">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                    CICRA 2005 Disclosure
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    &ldquo;Settled&rdquo; vs &ldquo;Written Off&rdquo; Clarity
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI Credit Card Directions require at least 7 days&apos;
                    prior notice before reporting a cardholder as default to
                    CICs (CIBIL, Experian, Equifax, CRIF). Clearly distinguishing
                    <strong> Closed</strong> (full dues paid),{" "}
                    <strong>Settled</strong> (partial OTS waiver), and{" "}
                    <strong>Written Off</strong> (post-180 DPD charge-off) in
                    the notice lawfully educates prime cardholders on long-term
                    borrowing consequences.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-950 leading-relaxed">
                <strong>Compliance Guardrail on Bureau Language:</strong> Never
                frame CIC reporting as a punitive threat. Draft the clause as a
                statutory regulatory disclosure under CICRA 2005 and RBI Master
                Directions stating that factual repayment status (including
                overdue, settled, or written-off classifications) is reported to
                all four licensed Credit Information Companies on the prescribed
                reporting cycle unless cured within the notice window.
              </div>
            </section>

            {/* Section 6: Interactive 4-Scenario Failure Playbooks */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  6
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Interactive Operational Playbooks
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                4 Credit Card Portfolio Failure Modes &amp; Institutional
                Playbooks
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Select an unsecured portfolio bottleneck below to inspect the
                exact statutory trigger, regulatory exposure, and creditor-side
                remediation steps:
              </p>

              <CreditCardScenarioTabs />
            </section>

            {/* Section 7: Worked Financial & Portfolio Yield Model */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  7
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Unit Economics &amp; Ledger Math
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Worked Portfolio Yield: 500-Account Credit Card NPA Batch Model
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Below is an illustrative pre-charge-off financial model for a
                private commercial bank processing{" "}
                <strong>500 delinquent credit card accounts</strong> at 95–150
                DPD (average total due ₹1,45,000; aggregate NPA book{" "}
                <strong>₹7.25 Crore</strong>), contrasting a single itemized
                cardholder ledger and batch-level routing economics:
              </p>

              {/* Dark Ledger Card */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 block">
                      Illustrative Single-Card Itemized Claim Schedule (RBI
                      2024 Compliant)
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                      Account Snapshot: ₹1,45,000 Unsecured Card Default (115
                      DPD)
                    </h3>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-950/70 text-emerald-400 border border-emerald-800/60">
                    Contract Act s.73 Compliant
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between text-slate-300">
                      <span>Unpaid Principal Spend + EMI Balance</span>
                      <span className="font-bold text-white">₹1,18,500</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Contractual Finance Charges (Pre-NPA)</span>
                      <span className="font-bold text-white">₹21,300</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Non-Capitalized Late / Over-Limit Charges</span>
                      <span className="font-bold text-amber-400">₹5,200</span>
                    </div>
                    <div className="flex justify-between text-slate-300 border-t border-white/10 pt-2">
                      <span className="font-bold text-emerald-400">
                        Total Validated Claim (Zero Compounded Penalty)
                      </span>
                      <span className="font-black text-emerald-400">
                        ₹1,45,000
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2 text-xs sm:text-sm">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block">
                      500-Account Batch Routing Allocation (₹7.25 Cr Book)
                    </span>
                    <div className="flex justify-between text-slate-300">
                      <span>Wave 1–2 Omnichannel Legal Notices (500 accts)</span>
                      <span className="font-semibold text-white">
                        100% Coverage
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Sub-₹1.5L Uncured &rarr; National Lok Adalat</span>
                      <span className="font-semibold text-emerald-400">
                        0% Court Fee
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>&ge;₹1.5L Uncured &rarr; Neutral ODR s.29B</span>
                      <span className="font-semibold text-amber-400">
                        s.36 Decree Ready
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-300 border-t border-white/10 pt-2">
                      <span className="font-semibold text-slate-200">
                        Limitation Expiry Protection
                      </span>
                      <span className="font-bold text-emerald-400">
                        Stopped via s.21
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed">
                  <em>Illustrative Operational Note:</em> Exact recovery yield
                  varies by card vintage, bureau score cohort, and metro vs
                  Tier-2 KYC accuracy. By eliminating invalid unilateral panel
                  awards and separating non-capitalized penal charges upfront,
                  issuers eliminate Section 34 set-aside write-offs and RBI
                  Ombudsman reversals. Use our{" "}
                  <Link
                    href="/tools/limitation-period-calculator"
                    className="text-red-400 hover:underline font-semibold"
                  >
                    Limitation Period Calculator
                  </Link>{" "}
                  to verify 3-year civil cutoffs across aged charge-off batches.
                </p>
              </div>
            </section>

            {/* Section 8: CMS Evidence & BSA 2023 s.63 Checklist */}
            <section
              id="heading-bsa-evidence"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  8
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Evidentiary Audit Readiness
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                CMS Evidence &amp; BSA 2023 Section 63 Admissibility Checklist
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Credit card accounts are digitally originated via OTP/e-KYC
                onboarding and billed electronically through the Card Management
                System (CMS). Without a compliant{" "}
                <strong>
                  Bharatiya Sakshya Adhiniyam (BSA) 2023 Section 63 certificate
                </strong>{" "}
                (replacing IEA s.65B) alongside a{" "}
                <strong>Bankers&apos; Books Evidence Act Section 2A</strong>{" "}
                certification, digital statements face evidentiary rejection in
                both neutral ODR and Commercial Courts:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "1. Digital MITC & Arbitration Clause Acceptance Log",
                    desc: "Preserve OTP verification timestamp, IP address, device fingerprint, and the exact version of the Cardholder Agreement / MITC containing the neutral ODR clause.",
                  },
                  {
                    title: "2. Itemized CMS Billing Statements (Last 12–24 Cycles)",
                    desc: "Certified statement separating principal retail spends, cash advances, contractual finance charges, GST, and non-capitalized penal charges per RBI Fair Lending norms.",
                  },
                  {
                    title: "3. BSA s.63 Part-A & Part-B Schedule Certificate",
                    desc: "Dual-signed statutory electronic evidence certificate executed by the custodian/authorized bank officer and CMS IT/hash expert verifying record integrity.",
                  },
                  {
                    title: "4. Bankers' Books Evidence Act s.2A Ledger Certificate",
                    desc: "Statutory confirmation from the Principal Accountant or Branch/Operations Manager certifying CBS/CMS computer system integrity and routine banking custody.",
                  },
                  {
                    title: "5. 7-Day CICRA Pre-Reporting & Recall Dispatch Proof",
                    desc: "Timestamped email SMTP headers, WATI WhatsApp blue-tick/delivery webhooks, and India Post Speed Post RPAD tracking barcodes matching KYC address.",
                  },
                  {
                    title: "6. Section 21 Notice & Neutral ODR Consent Audit Trail",
                    desc: "Complete record of the Section 21 invocation notice, institutional ODR appointment confirmation, and arbitrator Section 12(1) Fifth/Sixth Schedule independence disclosure.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border border-slate-200 rounded-xl p-4 bg-slate-50/70 space-y-1.5"
                  >
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>Ready-to-Adapt Notice Clauses:</strong> Legal teams
                drafting facility recall notices across multi-product retail
                relationships can also inspect our{" "}
                <Link
                  href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  Bank Loan Recall &amp; Guarantee Invocation Notice Template
                </Link>{" "}
                and our{" "}
                <Link
                  href="/bank-pre-litigation-lok-adalat-bulk-npa-settlement-guide"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  Bank Pre-Litigation Lok Adalat Bulk NPA Playbook
                </Link>
                .
              </div>
            </section>

            {/* Primary Dual-Track Institutional CTA */}
            <CreditCardRecoveryCTA variant="primary" />

            {/* Related IND-01 Banking Ecosystem Cross-Links */}
            <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block">
                IND-01 Bank Recovery Playbook Network
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  {
                    label: "Parent Hub · IND-01",
                    title: "Bank Loan & NPA Legal Recovery Platform",
                    href: "/industries/banks-loan-recovery",
                  },
                  {
                    label: "Bulk Solutions",
                    title: "Bulk Legal Recovery Desk (10–10,000+ Cases)",
                    href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
                  },
                  {
                    label: "Pre-Litigation",
                    title: "Lok Adalat Pre-Litigation Money Recovery",
                    href: "/law/lok-adalat-pre-litigation-money-recovery",
                  },
                  {
                    label: "Sibling Spoke · G2",
                    title: "Sub-₹20 Lakh Bank Recovery (Outside DRT)",
                    href: "/bank-loan-recovery-below-20-lakhs-drt-threshold-options",
                  },
                  {
                    label: "Sibling Spoke · L1",
                    title: "SARFAESI s.13(2) & s.13(3A) Bank Guide",
                    href: "/law/sarfaesi-section-13-2-demand-notice-bank-guide",
                  },
                  {
                    label: "Sibling Spoke · G1",
                    title: "SARFAESI s.14 DM/CMM Physical Possession",
                    href: "/sarfaesi-section-14-dm-cmm-physical-possession-workflow",
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group block p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-[#DC2626]/40 hover:shadow-sm transition-all"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#DC2626] block mb-1">
                      {link.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                      {link.title} &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 9: Frequently Asked Questions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  9
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Card Legal &amp; Collections Q&amp;A
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Credit Card Legal Notices &amp; ODR
              </h2>

              <div className="space-y-3">
                {FAQS.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-xl bg-slate-50/60 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 sm:p-5 cursor-pointer list-none font-bold text-xs sm:text-sm md:text-base text-slate-900">
                      <span>{faq.question}</span>
                      <span className="w-6 h-6 rounded-full bg-slate-200/80 group-open:bg-[#DC2626] group-open:text-white text-slate-600 flex items-center justify-center shrink-0 text-sm font-bold transition-colors">
                        +
                      </span>
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 mt-1 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  10
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Authoritative Citations
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Primary Statutory Authorities, RBI Directions &amp; Supreme
                Court Rulings
              </h2>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {PRIMARY_SOURCES.map((source) => (
                  <li key={source.url} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] underline decoration-slate-300 hover:decoration-[#DC2626] transition-colors"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                <span>
                  Authored &amp; Legal-Desk Reviewed by{" "}
                  <Link
                    href="/authors/anuj-anand-malik"
                    className="font-semibold text-slate-800 hover:text-[#DC2626] underline"
                  >
                    Anuj Anand Malik
                  </Link>{" "}
                  (Advocate &amp; Founder, AMA Legal Solutions)
                </span>
                <span>Updated: November 19, 2026</span>
              </div>
            </section>

            {/* Bottom Compact Dual-Track CTA */}
            <CreditCardRecoveryCTA variant="compact" />
          </div>
        </div>
      </main>

      {/* Footer Cross-Links Outside <main> */}
      <RelatedRecoveryGuides />
    </div>
  );
}
