import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CicPreReportingTableOfContents from "./CicPreReportingTableOfContents";
import CicPreReportingScenarioTabs from "./CicPreReportingScenarioTabs";
import CicPreReportingCTA from "./CicPreReportingCTA";

export const revalidate = 86400;

const PAGE_URL = "/cibil-cic-pre-reporting-default-notice-compliance-lenders";
const EXACT_H1 =
  "Compliant Credit Bureau (CIBIL / Experian / CRIF / Equifax) Default Intimation: Turning RBI Mandatory Alerts into High-Cure Notices";
const META_TITLE = "RBI Credit Bureau (CIC/CIBIL) Pre-Reporting Notice Guide";
const META_DESCRIPTION =
  "RBI mandates prior alerts before CIC/CIBIL default reporting and ₹100/day dispute fines. Turn mandatory alerts & CMR impact into high-cure notices.";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const LEGAL_REVIEWER = {
  name: "Anuj Anand Malik",
  role: "Advocate & Founder, AMA Legal Solutions",
};

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
        alt: formatAltText("RBI Credit Bureau CIC CIBIL Pre-Reporting Default Notice Compliance"),
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

const STATUTORY_MATRIX_ROWS = [
  {
    instrument: "RBI Master Direction on Credit Information Reporting (Pre-Reporting Alert)",
    trigger: "Credit Institution (Bank / NBFC / HFC) prepares to report default / overdue status to any CIC",
    timeline: "Prior SMS / Email alert mandatory before uploading default data in reporting cycle",
    leverage: "Satisfies statutory pre-intimation while framing imminent score impact as a cure deadline",
    forum: "Credit Institution Nodal Desk / RBI Integrated Ombudsman",
    tone: "emerald",
  },
  {
    instrument: "RBI ₹100/Day Compensation Framework for Delayed Rectification",
    trigger: "Borrower submits written dispute on inaccurate DPD, settled status, or un-notified default",
    timeline: "30 calendar days total TAT (21 days Credit Institution + 9 days CIC); ₹100/day thereafter",
    leverage: "Automated dispute freeze + BSA s.63 pre-alert proof blocks frivolous Ombudsman claims",
    forum: "CI Nodal Officer -> CIC -> RBI Ombudsman",
    tone: "red",
  },
  {
    instrument: "Credit Information Companies (Regulation) Act, 2005 (s.15, s.17, s.21)",
    trigger: "Mandatory membership of all Banks/NBFCs/HFCs in all 4 CICs & accurate data submission",
    timeline: "Fortnightly / weekly reporting cadence per 2025–2026 consolidated RBI norms",
    leverage: "Establishes statutory duty to report true default history—eliminating borrower defamation pleas",
    forum: "CIBIL / Experian / CRIF High Mark / Equifax",
    tone: "slate",
  },
  {
    instrument: "Commercial Bureau Rank (CIBIL MSME Rank: CMR-1 to CMR-10)",
    trigger: "MSME / Proprietorship / Pvt Ltd entity hits 30+ or 60+ DPD on working capital or term loan",
    timeline: "Updated every reporting cycle; visible to all consortium & partner banks during CC/OD renewal",
    leverage: "Factual disclosure of CMR downgrade unlocks rapid SME cure without coercive language",
    forum: "Commercial Credit Bureaus & Partner Banks",
    tone: "emerald",
  },
  {
    instrument: "RBI Master Direction on Treatment of Wilful Defaulters (≥ ₹25 Lakh)",
    trigger: "Intentional non-payment despite capacity, diversion/siphoning of funds, or asset disposal",
    timeline: "Identification Committee -> Show-Cause Notice (21 days reply) -> Review Committee order",
    leverage: "Bars fresh institutional finance across India & triggers criminal / IBC / SARFAESI tracks",
    forum: "Lender Identification & Review Committees",
    tone: "amber",
  },
];

const EVIDENCE_CHECKLIST = [
  {
    title: "Timestamped Pre-Reporting SMS & Email Logs (BSA 2023 s.63)",
    detail:
      "Cryptographically hashed server logs, telecom DLT delivery receipts, and SMTP headers proving the borrower received prior default intimation before the Loan ID entered the CIBIL/Experian/CRIF/Equifax TUDF/XML upload.",
  },
  {
    title: "Loan Agreement Bureau-Reporting Consent & Privacy Clause",
    detail:
      "Executed digital or physical sanction letter containing explicit borrower and guarantor consent under CICRA 2005 and the DPDP Act 2023 to share repayment history and default events with all four RBI-licensed CICs.",
  },
  {
    title: "NPCI e-NACH / Cheque Return Memo & Uncompounded Ledger",
    detail:
      "Bank-authenticated R01/R02 return memos and an itemized statement of account separating principal, contracted interest, and non-compounded penal charges per RBI Fair Lending norms.",
  },
  {
    title: "21-Day CI / 9-Day CIC Dispute Resolution Audit Trail",
    detail:
      "CRM ticket timestamps showing exact date of dispute receipt, LMS suppression flag (halting automated overwrite), verification outcome, and acknowledgment receipt from all four CICs inside the 30-day window.",
  },
  {
    title: "Co-Lending / DLG Single-Reporting Mapping Sheet",
    detail:
      "For CLM-1/CLM-2 and 5% FLDG portfolios, written designation of the single reporting entity and reconciliation schedule ensuring the same overdue EMI is never double-reported.",
  },
  {
    title: "Wilful Defaulter Committee Minutes & 21-Day Show-Cause Proof",
    detail:
      "For ≥ ₹25 Lakh accounts, forensic cash-flow diversion evidence, Identification Committee speaking order, Speed Post RPAD tracking of the Show-Cause Notice, and personal hearing record.",
  },
];

const FAQS = [
  {
    question: "Is a lender legally required to send a prior alert before reporting a default to CIBIL or other CICs?",
    answer:
      "Yes. Under the RBI Master Direction on Credit Information Reporting (consolidated 2025–2026 norms), Credit Institutions (banks, NBFCs, HFCs) must send an SMS or email alert to the borrower before reporting a default or overdue status to Credit Information Companies (CIBIL, Experian, CRIF High Mark, Equifax). Embedding this statutory intimation inside a structured Day-30 Advocate Notice satisfies RBI compliance while maximizing voluntary cure.",
  },
  {
    question: "How does the ₹100/day RBI compensation penalty work for credit bureau reporting disputes?",
    answer:
      "Under the RBI Compensation Framework for Delayed Updation/Rectification of Credit Information, a complainant is entitled to ₹100 per calendar day if a dispute is not resolved within 30 calendar days from the date of complaint. This 30-day window is split into 21 calendar days for the Credit Institution (NBFC/Bank) to verify and transmit corrected data, and 9 calendar days for the CIC to update the bureau record.",
  },
  {
    question: "Can an NBFC mention CIBIL score or Commercial CMR deterioration inside a legal notice without violating RBI Fair Practices?",
    answer:
      "Yes—provided the statement is strictly factual, non-threatening, and tied to statutory reporting duties under CICRA 2005. A compliant notice never threatens 'blacklisting' or personal humiliation; instead, it states objectively that continued non-payment past the cure date will be reported to all four RBI-licensed CICs in the upcoming cycle, which may adversely impact the borrower's retail score or Commercial MSME Rank (CMR-1 to CMR-10).",
  },
  {
    question: "What is Commercial CIBIL Rank (CMR) and why is it effective leverage for SME loan recovery?",
    answer:
      "CIBIL MSME Rank (CMR) grades commercial borrowers on a scale from CMR-1 (lowest risk) to CMR-10 (highest risk). Unlike retail borrowers who may ignore personal score drops temporarily, SMEs, proprietors, and Pvt Ltd companies rely on clean CMR scores for bank Cash Credit (CC), Overdraft (OD) renewals, bank guarantees, and TReDS discounting. Explaining CMR-rank impact factually in a Day-30/45 Advocate Notice compels rapid promoter settlement.",
  },
  {
    question: "Can a lender report a disputed e-NACH bounce or contested foreclosure charge as a default to CICs?",
    answer:
      "Doing so without resolving the written dispute within 21 days exposes the lender to ₹100/day Ombudsman compensation orders and adverse regulatory observations. Best practice is to freeze automated bureau escalation on genuinely contested accounts (e.g., bank-end NACH gateway failures or double debits), adjudicate the ledger within 10–15 days, and maintain BSA 2023 s.63 proof for every rejected dispute.",
  },
  {
    question: "What is the RBI procedure for declaring a borrower a Wilful Defaulter?",
    answer:
      "Under the RBI Master Direction on Treatment of Wilful Defaulters (applicable to exposures of ₹25 Lakh and above), a lender must first examine evidence of intentional non-payment, fund diversion, or asset siphoning through an Identification Committee. If satisfied, the lender issues a Show-Cause Notice giving the borrower and guarantors at least 21 days to submit written representations, followed by a Review Committee order and personal hearing opportunity before reporting 'Wilful Defaulter' status to CICs.",
  },
  {
    question: "How can an NBFC test compliant CIC pre-reporting notices before rolling out across its portfolio?",
    answer:
      "Nodal Officers and Collections Heads can pilot a single overdue account for ₹999 (Advocate-drafted notice dispatched via Email, WhatsApp, and Speed Post RPAD with BSA 2023 s.63 delivery logs) through /user/new-recovery, or onboard 10 to 10,000+ accounts via CSV on our Bulk Institutional Desk.",
  },
];

const STATUTORY_SOURCES = [
  {
    title:
      "Reserve Bank of India (RBI) — Master Direction on Credit Information Reporting & Compensation Framework",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx",
  },
  {
    title:
      "Credit Information Companies (Regulation) Act, 2005 (CICRA) — India Code, Ministry of Law and Justice",
    url: "https://www.indiacode.nic.in/handle/123456789/2020",
  },
  {
    title:
      "Reserve Bank of India (RBI) — Master Direction on Treatment of Wilful Defaulters and Large Defaulters",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12714",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic Records & Server Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "TransUnion CIBIL — Commercial Credit Information & CIBIL MSME Rank (CMR) Reference",
    url: "https://www.cibil.com/commercial-credit-rank",
  },
  {
    title:
      "Reserve Bank of India (RBI) — Integrated Ombudsman Scheme & Consumer Grievance Redressal",
    url: "https://cms.rbi.org.in/",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PAGE_URL}`,
  },
  author: {
    "@type": "Person",
    name: LEGAL_REVIEWER.name,
    jobTitle: LEGAL_REVIEWER.role,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
  },
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "5-Step RBI-Compliant Credit Bureau (CIC/CIBIL) Pre-Reporting & Cure Notice Workflow",
  description:
    "Operational SOP for NBFCs, banks, and fintechs to dispatch mandatory pre-reporting default alerts, embed ethical CMR/CIBIL disclosures, and avoid ₹100/day RBI penalties.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Dispatch Mandatory Pre-Reporting SMS & Email Alert (Day 15–25 DPD)",
      text: "Send a factual SMS and email notifying the borrower of the overdue installment, cure cut-off date, and impending CIC reporting, archiving BSA 2023 s.63 logs.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Issue Tri-Channel Advocate Legal Notice with CIC & CMR Disclosure (Day 30–45 DPD)",
      text: "Serve an Advocate-drafted notice via Email, WhatsApp, and Speed Post RPAD pairing factual CIBIL/CMR impact with Section 25 PSS Act or Loan Recall demands.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Screen & Suppress Contested Accounts Under 21-Day CI Gate",
      text: "Tag any written borrower dispute on e-NACH errors or penal charges in the LMS to prevent automated bureau overwrites and resolve within 21 calendar days.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Upload Verified DPD Status Across All Four CICs",
      text: "Transmit accurate TUDF/XML default data to CIBIL, Experian, CRIF High Mark, and Equifax once the pre-alert grace window expires without cure.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Escalate ≥ ₹25L Intentional Defaults to Wilful Defaulter Show-Cause",
      text: "Where diversion or siphoning is detected on 90+ DPD exposures ≥ ₹25 Lakh, initiate Identification Committee review and 21-day Show-Cause Notice.",
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
      name: "NBFC & Fintech Recovery Hub",
      item: `${SITE_URL}/industries/nbfc-fintech-loan-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "CIC & CIBIL Pre-Reporting Notice Compliance",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

export default function CicPreReportingDefaultNoticePage() {
  return (
    <>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IND-02 &bull; Credit Bureau (CIC / CIBIL) Nodal Compliance Playbook</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* 40-60 Word Executive Creditor Answer Box + Parent Hub Link */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer
              </span>
              Within the{" "}
              <Link
                href="/industries/nbfc-fintech-loan-recovery"
                className="text-red-300 underline hover:text-white font-semibold"
              >
                NBFC &amp; Fintech Legal Recovery Framework
              </Link>
              , RBI&apos;s consolidated Credit Information Reporting norms mandate prior SMS/email
              intimation before reporting defaults and impose <strong>₹100/day penalties</strong> for
              dispute delays beyond 30 days. Embedding factual CIBIL and Commercial CMR-rank
              disclosures inside BSA s.63-logged Day-30 Advocate Notices converts compliance into
              high-cure leverage.
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-lg sm:text-2xl font-black text-red-400">₹100 / Day</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  RBI Penalty After 30-Day Dispute TAT
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-emerald-400">21 + 9 Days</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  CI Verification (21d) + CIC Update (9d)
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-slate-100">4 Bureaus</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  CIBIL, Experian, CRIF &amp; Equifax Sync
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-amber-400">CMR 1–10</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  Commercial SME Rank Leverage in Notices
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main 2-Column Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "NBFC & Fintech Recovery", href: "/industries/nbfc-fintech-loan-recovery" },
                { label: "CIC & CIBIL Pre-Reporting Compliance", href: PAGE_URL },
              ]}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            <CicPreReportingTableOfContents />

            <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: The ₹100/Day RBI Penalty Trap vs Ethical CIC Notice Leverage */}
              <section
                id="heading-penalty-trap"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    The ₹100/Day RBI Penalty Trap vs. Ethical CIC Notice Leverage
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For Credit Bureau Reporting Nodal Officers and Collections Heads across NBFCs,
                  fintechs, and scheduled banks, credit bureau reporting has shifted from a passive
                  back-office TUDF batch job to a high-stakes regulatory compliance gate. Under the{" "}
                  <strong>RBI Master Direction on Credit Information Reporting</strong> (consolidated
                  2025–2026 norms), Credit Institutions (CIs) are prohibited from silently uploading
                  default or overdue flags to CIBIL, Experian, CRIF High Mark, or Equifax without
                  first alerting the borrower via SMS or email.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Simultaneously, consumer-side awareness has surged—evidenced by borrowers
                  routinely invoking{" "}
                  <Link
                    href="/cibil-wrong-reporting-dispute-compensation-legal-notice"
                    className="text-[#DC2626] font-semibold underline hover:text-red-800"
                  >
                    ₹100/day CIBIL wrong-reporting compensation notices
                  </Link>{" "}
                  before the RBI Integrated Ombudsman whenever a lender misses the 30-day dispute
                  turnaround time (TAT) or reports a contested e-NACH bounce without prior
                  intimation. Yet, treating CIC reporting purely as a defensive compliance burden
                  misses its single highest commercial upside: <strong>a statutory pre-reporting
                  alert, when embedded inside an Advocate-backed Day-30/45 Legal Notice, is one of
                  the strongest non-coercive cure triggers in Indian lending</strong>.
                </p>

                <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-xs sm:text-sm text-amber-950 leading-relaxed">
                  <strong>Institutional Polarity Rule:</strong> Never let telecallers verbally
                  threaten borrowers with &ldquo;CIBIL blacklisting&rdquo;—such unlogged calls
                  violate{" "}
                  <Link
                    href="/rbi-recovery-agent-guidelines-compliant-legal-escalation-nbfc"
                    className="text-[#DC2626] font-bold underline"
                  >
                    RBI Recovery Agent Directions
                  </Link>
                  . Instead, let an enrolled Advocate deliver a factual, timestamped statutory
                  intimation under CICRA 2005 explaining the exact DPD status, upcoming reporting
                  cycle, and cure deadline.
                </div>
              </section>

              {/* Section 2: Decision Tree SVG + Mobile Cards */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    CIC Pre-Reporting Decision Tree: Day 15 Alert to Wilful Default
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To insulate your institution from ₹100/day Ombudsman awards while maximizing
                  pre-NPA recoveries, every overdue loan must pass through a four-gate nodal
                  workflow before and after bureau submission:
                </p>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block overflow-x-auto rounded-2xl border border-slate-200 bg-slate-900 p-4">
                  <svg
                    viewBox="0 0 840 280"
                    width={840}
                    height={280}
                    className="w-full h-auto"
                    role="img"
                    aria-label="CIC Pre-Reporting Default Notice Decision Tree for Lenders"
                  >
                    <defs>
                      <marker
                        id="cicArrow"
                        markerWidth="8"
                        markerHeight="8"
                        refX="6"
                        refY="4"
                        orient="auto"
                      >
                        <path d="M0,0 L8,4 L0,8 Z" fill="#94A3B8" />
                      </marker>
                    </defs>

                    {/* Gate 1 */}
                    <rect x="16" y="36" width="180" height="108" rx="12" fill="#1E293B" stroke="#334155" />
                    <text x="30" y="60" fill="#F87171" fontSize="11" fontWeight="800">
                      GATE 1: DAY 15–25 DPD
                    </text>
                    <text x="30" y="82" fill="#FFFFFF" fontSize="13" fontWeight="700">
                      Mandatory Pre-Alert
                    </text>
                    <text x="30" y="102" fill="#CBD5E1" fontSize="11">
                      SMS + Email with exact
                    </text>
                    <text x="30" y="118" fill="#CBD5E1" fontSize="11">
                      due &amp; BSA s.63 log
                    </text>

                    <line x1="196" y1="90" x2="226" y2="90" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#cicArrow)" />

                    {/* Gate 2 */}
                    <rect x="230" y="36" width="188" height="108" rx="12" fill="#DC2626" />
                    <text x="244" y="60" fill="#FEE2E2" fontSize="11" fontWeight="800">
                      GATE 2: DAY 30–45 DPD
                    </text>
                    <text x="244" y="82" fill="#FFFFFF" fontSize="13" fontWeight="700">
                      Advocate Cure Notice
                    </text>
                    <text x="244" y="102" fill="#FEF2F2" fontSize="11">
                      Factual CIBIL / CMR rank
                    </text>
                    <text x="244" y="118" fill="#FEF2F2" fontSize="11">
                      + s.25 PSS / Recall Notice
                    </text>

                    <line x1="418" y1="90" x2="448" y2="90" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#cicArrow)" />

                    {/* Gate 3 */}
                    <rect x="452" y="36" width="180" height="108" rx="12" fill="#1E293B" stroke="#F59E0B" />
                    <text x="466" y="60" fill="#FBBF24" fontSize="11" fontWeight="800">
                      GATE 3: DISPUTE CHECK
                    </text>
                    <text x="466" y="82" fill="#FFFFFF" fontSize="13" fontWeight="700">
                      21-Day CI Shield
                    </text>
                    <text x="466" y="102" fill="#CBD5E1" fontSize="11">
                      Freeze contested DPD;
                    </text>
                    <text x="466" y="118" fill="#CBD5E1" fontSize="11">
                      resolve &le;21d (+9d CIC)
                    </text>

                    <line x1="632" y1="90" x2="662" y2="90" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#cicArrow)" />

                    {/* Gate 4 */}
                    <rect x="666" y="36" width="158" height="108" rx="12" fill="#065F46" stroke="#10B981" />
                    <text x="680" y="60" fill="#6EE7B7" fontSize="11" fontWeight="800">
                      GATE 4: 45–90+ DPD
                    </text>
                    <text x="680" y="82" fill="#FFFFFF" fontSize="13" fontWeight="700">
                      4-CIC Sync / Wilful
                    </text>
                    <text x="680" y="102" fill="#ECFDF5" fontSize="11">
                      Upload TUDF; ≥₹25L
                    </text>
                    <text x="680" y="118" fill="#ECFDF5" fontSize="11">
                      Show-Cause if diversion
                    </text>

                    {/* Bottom Outcome Bar */}
                    <rect x="16" y="176" width="808" height="76" rx="12" fill="#0F172A" stroke="#334155" />
                    <text x="36" y="204" fill="#34D399" fontSize="12" fontWeight="800">
                      AUDIT-SAFE OUTCOME:
                    </text>
                    <text x="195" y="204" fill="#F8FAFC" fontSize="12" fontWeight="600">
                      High-Cure Voluntary Settlement at Day 30–45 + Zero ₹100/Day Ombudsman Liability
                    </text>
                    <text x="36" y="228" fill="#94A3B8" fontSize="11">
                      Every SMS, Email, WhatsApp &amp; Speed Post RPAD dispatch is hashed under BSA 2023 s.63 before CIBIL/Experian/CRIF/Equifax sync.
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="grid grid-cols-1 gap-3 md:hidden">
                  <div className="rounded-xl bg-slate-900 text-white p-4 border border-slate-800">
                    <p className="text-[11px] font-extrabold text-red-400 uppercase">
                      Gate 1: Day 15–25 DPD &bull; Mandatory Pre-Alert
                    </p>
                    <p className="text-xs text-slate-300 mt-1">
                      Send factual SMS &amp; Email alert with exact overdue amount and BSA s.63 log
                      prior to bureau upload.
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#DC2626] text-white p-4">
                    <p className="text-[11px] font-extrabold text-red-100 uppercase">
                      Gate 2: Day 30–45 DPD &bull; Advocate Cure Notice
                    </p>
                    <p className="text-xs text-red-50 mt-1">
                      Tri-channel Advocate Notice pairing factual CIBIL/CMR rank disclosure with
                      Section 25 PSS Act / Recall demand.
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-900 text-white p-4 border border-amber-500/60">
                    <p className="text-[11px] font-extrabold text-amber-400 uppercase">
                      Gate 3: Dispute Check &bull; 21-Day CI Shield
                    </p>
                    <p className="text-xs text-slate-300 mt-1">
                      Suppress automated DPD overwrites on contested accounts; resolve within 21
                      days (+9 days CIC = 30-day cap).
                    </p>
                  </div>
                  <div className="rounded-xl bg-emerald-950 text-white p-4 border border-emerald-700">
                    <p className="text-[11px] font-extrabold text-emerald-400 uppercase">
                      Gate 4: Day 45–90+ DPD &bull; 4-CIC Sync / Wilful Default
                    </p>
                    <p className="text-xs text-emerald-100 mt-1">
                      Upload verified TUDF across all 4 CICs; initiate 21-day Show-Cause for ≥₹25L
                      intentional diversion.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Statutory Matrix Table */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory Matrix: CICRA 2005, RBI 2025–26 Norms &amp; CMR Rules
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Nodal Officers must harmonize five distinct statutory instruments when designing
                  pre-reporting default notices and dispute-handling SOPs:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left border-collapse min-w-[680px]">
                    <thead>
                      <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                        <th className="p-3.5 font-bold">Statutory Instrument</th>
                        <th className="p-3.5 font-bold">Trigger Condition</th>
                        <th className="p-3.5 font-bold">Mandatory Timeline</th>
                        <th className="p-3.5 font-bold">Institutional Leverage / Shield</th>
                        <th className="p-3.5 font-bold">Forum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                      {STATUTORY_MATRIX_ROWS.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900 align-top">
                            {row.instrument}
                          </td>
                          <td className="p-3.5 text-slate-700 align-top">{row.trigger}</td>
                          <td className="p-3.5 text-slate-700 align-top">{row.timeline}</td>
                          <td className="p-3.5 text-slate-800 font-medium align-top">
                            {row.leverage}
                          </td>
                          <td className="p-3.5 text-slate-600 align-top">{row.forum}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Interactive Scenario Tabs */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    4 Bureau Reporting Failure Modes &amp; Nodal Officer Cures
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select a real-world credit reporting bottleneck below to inspect the failure
                  mechanism, governing RBI/CICRA hooks, and step-by-step execution playbook:
                </p>

                <CicPreReportingScenarioTabs />
              </section>

              {/* Section 5: Commercial CMR Rank Leverage */}
              <section
                id="heading-cmr-leverage"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Commercial CMR Rank (CMR-1 to CMR-10) Leverage in SME Notices
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  While retail personal loan borrowers often discount a 40-point drop in their
                  consumer score until they apply for a future home loan,{" "}
                  <strong>MSME and SME commercial borrowers face immediate operational pain</strong>{" "}
                  when their <strong>CIBIL MSME Rank (CMR)</strong> deteriorates. Ranked on a
                  1-to-10 scale (where CMR-1 to CMR-3 represents prime creditworthiness and CMR-7 to
                  CMR-10 signals high probability of default), commercial bureau feeds are monitored
                  continuously by consortium banks, TReDS platforms, and trade-credit insurers.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For{" "}
                  <Link
                    href="/unsecured-business-loan-sme-working-capital-default-nbfc"
                    className="text-[#DC2626] font-semibold underline hover:text-red-800"
                  >
                    unsecured SME working capital and EDI merchant cash advance defaults
                  </Link>
                  , embedding an accurate Commercial Bureau Intimation inside your Day-30 Advocate
                  Recall Notice changes promoter calculus overnight. Rather than generic threats,
                  your notice states three verifiable facts:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      1. Entity CMR Downgrade
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Fortnightly/monthly DPD reporting updates the borrowing entity&apos;s CMR rank,
                      directly impacting annual Cash Credit (CC) / Overdraft (OD) limit renewals
                      with partner banks.
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      2. Guarantor Linkage
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Personal Guarantors and Directors are notified under the executed Deed of
                      Guarantee that default status reflects on their individual PAN bureau files
                      alongside the company CIN/GSTIN.
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      3. Statutory Cure Window
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Pair the CMR disclosure with our{" "}
                      <Link
                        href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                        className="text-[#DC2626] font-bold underline"
                      >
                        Loan Recall &amp; Guarantee Template
                      </Link>{" "}
                      giving a strict 15-day cure window before bureau sync and Section 25 PSS Act
                      filing.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Wilful Defaulter Show-Cause Procedure & ₹100/Day TAT Shield */}
              <section
                id="heading-wilful-tat"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Wilful Defaulter Show-Cause Procedure &amp; ₹100/Day TAT Shield
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For exposures of <strong>₹25 Lakh and above</strong> where forensic bank-statement
                  or GST analysis reveals intentional non-payment despite liquidity, fund diversion,
                  or unauthorized disposal of hypothecated assets, lenders may escalate to{" "}
                  <strong>Wilful Defaulter</strong> classification under the RBI Master Direction on
                  Treatment of Wilful Defaulters. However, premature tagging in CIC files without
                  following due process guarantees High Court writ quashing and Ombudsman sanctions.
                </p>

                <div className="rounded-2xl bg-slate-900 text-white p-5 sm:p-6 space-y-3">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-red-400">
                    Mandatory 4-Step Wilful Defaulter &amp; 30-Day TAT Compliance Guardrails
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-200 list-disc list-inside">
                    <li>
                      <strong>Identification Committee Examination:</strong> Record objective
                      evidence of diversion, siphoning, or capacity to pay before issuing any
                      Show-Cause Notice.
                    </li>
                    <li>
                      <strong>21-Day Show-Cause Notice:</strong> Serve a formal Show-Cause Notice
                      via Speed Post RPAD and verified email granting at least 21 days for the
                      borrower and promoters/guarantors to submit written submissions.
                    </li>
                    <li>
                      <strong>Review Committee &amp; Personal Hearing:</strong> Confirm the
                      Identification Committee&apos;s order through a separate Review Committee
                      headed by the MD/CEO (or designated executive) after offering a personal
                      hearing before reporting &ldquo;Wilful Defaulter&rdquo; to CIBIL/CRIF.
                    </li>
                    <li>
                      <strong>21+9 Day Dispute Resolution Clock:</strong> For any retail or SME
                      bureau dispute, enforce an automated LMS Day-15 escalation alert so the Nodal
                      Officer transmits verified corrections to all 4 CICs well before Day 21—leaving
                      zero room for the ₹100/day penalty past Day 30.
                    </li>
                  </ul>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For small-ticket digital personal loans and BNPL cohorts under ₹1 Lakh where
                  Wilful Defaulter proceedings do not apply, pair compliant pre-reporting alerts
                  with{" "}
                  <Link
                    href="/small-ticket-digital-personal-loan-bnpl-recovery-economics"
                    className="text-[#DC2626] font-semibold underline hover:text-red-800"
                  >
                    wave-based ODR and bulk legal notice economics
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/online-dispute-resolution-india"
                    className="text-[#DC2626] font-semibold underline hover:text-red-800"
                  >
                    Online Dispute Resolution (ODR)
                  </Link>{" "}
                  to settle accounts at positive unit economics. You can also benchmark court-fee
                  exposure on larger defaults using our{" "}
                  <Link
                    href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                    className="text-[#DC2626] font-semibold underline hover:text-red-800"
                  >
                    SARFAESI &amp; DRT Forum Calculator
                  </Link>
                  .
                </p>
              </section>

              {/* Section 7: Worked Financial & Penalty Calculation Ledger */}
              <section
                id="heading-worked-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Worked Portfolio Math: ₹12.5L SME Cure vs. ₹100/Day Penalty Drain
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Consider a mid-market NBFC managing a ₹12.50 Lakh SME working-capital default at 45
                  DPD alongside a wider portfolio of 500 contested bureau records. Compare the
                  financial impact of an audit-safe pre-reporting Advocate Notice versus uncoordinated
                  batch reporting:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="rounded-2xl bg-slate-900 text-white p-5 space-y-3 border border-slate-800">
                    <span className="inline-block px-2.5 py-1 rounded text-[10px] font-extrabold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60">
                      Uncoordinated Bureau Upload (High Risk)
                    </span>
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="flex justify-between border-b border-slate-800 pb-1.5">
                        <span className="text-slate-300">SME Default Exposure (45 DPD)</span>
                        <span className="font-bold text-white">₹12,50,000</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800 pb-1.5">
                        <span className="text-slate-300">500 Disputed Accounts (45-Day Lag)</span>
                        <span className="font-bold text-red-400">15 Days Over TAT</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800 pb-1.5">
                        <span className="text-slate-300">₹100/Day Penalty (500 &times; 15d)</span>
                        <span className="font-bold text-red-400">-₹7,50,000</span>
                      </div>
                      <div className="flex justify-between pt-1 text-sm sm:text-base font-black text-amber-400">
                        <span>Ombudsman + Litigation Drag</span>
                        <span>High Penalty + 18–24 Mos</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-5 space-y-3">
                    <span className="inline-block px-2.5 py-1 rounded text-[10px] font-extrabold uppercase tracking-wider bg-white text-emerald-800 border border-emerald-300">
                      Pre-Reporting Advocate Notice + 21d Shield
                    </span>
                    <div className="space-y-2 text-xs sm:text-sm text-emerald-950">
                      <div className="flex justify-between border-b border-emerald-200 pb-1.5">
                        <span>Mandatory Pre-Alert + Advocate Notice</span>
                        <span className="font-bold">BSA s.63 Logged</span>
                      </div>
                      <div className="flex justify-between border-b border-emerald-200 pb-1.5">
                        <span>SME CMR Rank + Guarantor Disclosure</span>
                        <span className="font-bold">15-Day Cure Trigger</span>
                      </div>
                      <div className="flex justify-between border-b border-emerald-200 pb-1.5">
                        <span>₹100/Day Ombudsman Exposure</span>
                        <span className="font-bold text-emerald-700">₹0 (Resolved &le; 21d)</span>
                      </div>
                      <div className="flex justify-between pt-1 text-sm sm:text-base font-black text-emerald-800">
                        <span>Target Pre-NPA Settlement</span>
                        <span>15–30 Days &bull; Zero Fines</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: BSA 2023 s.63 & Nodal Officer Audit Dossier Checklist */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    BSA 2023 s.63 &amp; Nodal Officer Audit Dossier Checklist
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {EVIDENCE_CHECKLIST.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1.5"
                    >
                      <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                        {idx + 1}. {item.title}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 9: Dual-Track B2B CTA */}
              <section
                id="heading-deploy-cta"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Deploy CIC-Compliant Notices: Single ₹999 Test or Bulk CSV Desk
                  </h2>
                </div>
                <CicPreReportingCTA />
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    FAQs: RBI CIC Pre-Reporting Alerts, CMR Rank &amp; ₹100/Day Shield
                  </h2>
                </div>
                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group rounded-xl border border-slate-200 bg-slate-50/60 p-4 open:bg-white open:shadow-sm transition-all"
                    >
                      <summary className="cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] text-lg font-bold shrink-0 group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Statutory Portals */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    RBI Master Directions, CICRA 2005 &amp; Credit Bureau Portals
                  </h2>
                </div>
                <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-700">
                  {STATUTORY_SOURCES.map((source, idx) => (
                    <li key={idx} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <div className="pt-3 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span>
                    Reviewed by <strong className="text-slate-700">{LEGAL_REVIEWER.name}</strong> (
                    {LEGAL_REVIEWER.role})
                  </span>
                  <span>Updated 14 Nov 2026 &bull; RBI CIC Compliance Standard</span>
                </div>
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-2 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related NBFC, CIC Compliance &amp; Institutional Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/industries/nbfc-fintech-loan-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    NBFC &amp; Fintech Recovery Hub &rarr;
                  </Link>
                  <Link
                    href="/rbi-recovery-agent-guidelines-compliant-legal-escalation-nbfc"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    RBI Recovery Agent Guidelines &rarr;
                  </Link>
                  <Link
                    href="/small-ticket-digital-personal-loan-bnpl-recovery-economics"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Small-Ticket BNPL Recovery Economics &rarr;
                  </Link>
                  <Link
                    href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    NBFC Unpaid Dues Legal Notice &rarr;
                  </Link>
                  <Link
                    href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bulk Email, WhatsApp &amp; Speed Post &rarr;
                  </Link>
                  <Link
                    href="/online-dispute-resolution-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Online Dispute Resolution (ODR) &rarr;
                  </Link>
                  <Link
                    href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Loan Recall &amp; Guarantee Template &rarr;
                  </Link>
                  <Link
                    href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    SARFAESI &amp; DRT Forum Calculator &rarr;
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </main>

        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
