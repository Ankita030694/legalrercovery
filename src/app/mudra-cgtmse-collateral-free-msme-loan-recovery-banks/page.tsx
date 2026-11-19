import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import MudraCgtmseTableOfContents from "./MudraCgtmseTableOfContents";
import MudraCgtmseScenarioTabs from "./MudraCgtmseScenarioTabs";
import MudraCgtmseNoticeCTA from "./MudraCgtmseNoticeCTA";

export const revalidate = 86400;

const PAGE_PATH = "/mudra-cgtmse-collateral-free-msme-loan-recovery-banks";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;
const EXACT_H1 =
  "Recovering Mudra (Shishu/Kishore/Tarun) & CGTMSE-Covered NPAs: Legal Notice Prerequisites for Guarantee Claims";
const META_TITLE = "Mudra & CGTMSE Unsecured Bank Loan Recovery & Claims";
const META_DESCRIPTION =
  "How banks satisfy CGTMSE / NCGTC legal-initiation prerequisites and recover unsecured Mudra & MSME loans economically through bulk pre-litigation notices.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(
          "Mudra and CGTMSE Collateral-Free MSME Loan Recovery and Guarantee Claim Playbook for Banks"
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
      "CGTMSE Credit Guarantee Scheme (CGS-I) Guidelines & Legal Action Waiver Circulars — Credit Guarantee Fund Trust for Micro and Small Enterprises",
    url: "https://www.cgtmse.in/",
  },
  {
    title:
      "Credit Guarantee Fund for Micro Units (CGFMU) Scheme Guidelines (PMMY Mudra & PM SVANidhi) — National Credit Guarantee Trustee Company Ltd. (NCGTC)",
    url: "https://www.ncgtc.in/",
  },
  {
    title:
      "Payment and Settlement Systems Act, 2007 (Section 25 — Dishonour of Electronic Funds Transfer / e-NACH Mandate)",
    url: "https://www.indiacode.nic.in/handle/123456789/2088",
  },
  {
    title:
      "Legal Services Authorities Act, 1987 (Sections 19, 20 & 21 — Pre-Litigation National Lok Adalat Consent Awards)",
    url: "https://www.indiacode.nic.in/handle/123456789/1944",
  },
  {
    title:
      "SARFAESI Act, 2002 (Section 31(g) — Exclusion of Unsecured / Non-Charged Credit Facilities) & RDB Act, 1993 (Section 1(4) ₹20 Lakh DRT Floor)",
    url: "https://www.indiacode.nic.in/handle/123456789/1953",
  },
  {
    title:
      "RBI Fair Lending Practice — Penal Charges in Loan Accounts (Master Directions) & Prudential Norms on IRAC Classification",
    url: "https://www.rbi.org.in/",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records Admissibility) & Bankers' Books Evidence Act, 1891 (Section 2A)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    question:
      "Is initiating a civil suit mandatory before lodging a CGTMSE guarantee claim for an NPA under ₹10 Lakh?",
    answer:
      "Under revised CGTMSE Trust Scheme guidelines, initiation of formal legal proceedings (civil suit/DRT) is waived as a pre-condition for lodging first-installment claims on eligible collateral-free MSE NPAs with outstanding up to ₹10 Lakh, provided the bank's board-approved recovery policy supports alternative recovery. However, Member Lending Institutions (MLIs) must still issue a formal Loan Recall / Demand Notice, mark NPA accurately on the CGTMSE portal, and document active pre-litigation recovery steps (such as Pre-Litigation Lok Adalat or PSS Act s.25 notices) to protect claim auditability and unlock the remaining 25% second installment.",
  },
  {
    question:
      "Can banks invoke SARFAESI Section 13(2) to recover Mudra Shishu, Kishore, or pure collateral-free CGTMSE loans?",
    answer:
      "No. Section 31(g) of the SARFAESI Act, 2002 bars enforcement where no security interest has been created in immovable or movable property. Pure collateral-free Mudra (Shishu, Kishore, Tarun) and non-hybrid CGTMSE accounts lack real-estate mortgages. Only where a CGTMSE Hybrid Security facility holds a registered collateral charge on partial immovable property or hypothecated machinery can SARFAESI be invoked against that specific charged security—never against the uncovered unsecured portion.",
  },
  {
    question:
      "Why do Mudra borrowers refuse to pay claiming the loan is a 'government grant'—and how do banks counter it?",
    answer:
      "Because PMMY Mudra, PMEGP, and PM SVANidhi are government-promoted collateral-free schemes, many micro-borrowers mistakenly believe they are non-repayable subsidies or subject to political loan waivers. Branch telecalling rarely corrects this misconception. Serving an advocate-signed multi-channel Loan Recall Notice via Speed Post RPAD, WhatsApp, and Email—explicitly stating contractual bank debt liability, CIBIL/CIC adverse reporting, PSS Act s.25 criminal exposure on bounced e-NACH mandates, and Lok Adalat summons—immediately dispels the grant myth and drives pre-litigation settlements.",
  },
  {
    question:
      "How does the CGTMSE 75% first installment and 25% second installment payout structure work?",
    answer:
      "CGTMSE settles approved claims in two tranches: 75% of the guaranteed amount is released as the first installment upon meeting lock-in period norms (typically 18 months), NPA marking, loan recall, and legal-initiation compliance (above the ₹10 Lakh waiver threshold). The balance 25% second installment is released only upon conclusion of recovery proceedings OR expiry of 3 years from the date of obtaining a recovery decree/award, whichever is earlier—provided the bank demonstrates continuous recovery diligence rather than abandoning the account.",
  },
  {
    question:
      "What is the CGTMSE post-claim recovery sharing norm if a borrower pays after the bank receives the 75% claim?",
    answer:
      "Under CGTMSE Scheme guidelines, guarantee payout does not extinguish the borrower's debt or relieve the MLI of its recovery duty. Any recovery realized from the borrower, guarantor, Lok Adalat OTS, or asset sale after receiving the CGTMSE claim must be accounted for separately and remitted back to the Trust (after netting only permissible documented legal expenses) strictly according to CGTMSE's recovery-sharing waterfall until the Trust's claim disbursement is reimbursed.",
  },
  {
    question:
      "How should banks handle PMEGP margin-money subsidy TDR and PM SVANidhi defaults economically?",
    answer:
      "For PMEGP accounts turning NPA inside the 3-year KVIC/DIC physical verification lock-in period, banks must serve a formal advocate notice documenting unit status and subsidy forfeiture exposure, coordinate margin-money TDR adjustment/refund strictly per KVIC guidelines, and initiate State Revenue Recovery Certificate (RRC) filings where state Public Moneys Recovery Acts apply. For high-volume PM SVANidhi micro-tickets (₹10,000–₹50,000), bulk digital + RPAD advocate notices paired with 0% court-fee Pre-Litigation National Lok Adalat batches keep recovery cost far below ticket value.",
  },
  {
    question:
      "What electronic and postal proofs are essential to clear CGTMSE / NCGTC claim audits without queries?",
    answer:
      "Nodal claim auditors scrutinize whether the Loan Recall Notice was properly itemized (separating principal, contractual interest, and non-capitalized RBI penal charges) and validly served before limitation expired. Banks should archive a single case dossier containing: (1) certified CBS Statement of Account with Bankers' Books Evidence Act s.2A certificate, (2) advocate-signed Recall Notice PDF, (3) India Post Speed Post RPAD receipt and online delivery/refusal tracking report, (4) timestamped Email + WhatsApp dispatch logs certified under Bharatiya Sakshya Adhiniyam (BSA) 2023 Section 63, and (5) CNR/DLSA Lok Adalat or PSS Act s.25 filing receipt.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-19T15:30:00+05:30",
  dateModified: "2026-11-19T15:30:00+05:30",
  mainEntityOfPage: CANONICAL_URL,
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
    name: "Mudra Loan and CGTMSE NPA Legal Recovery Process for Banks",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "5-Stage Bank SOP to Recover Mudra & CGTMSE NPAs and Satisfy Guarantee Claim Prerequisites",
  description:
    "Operational decision tree for scheduled commercial banks, small finance banks, and cooperative lenders to recover collateral-free MSME loans and secure 75%+25% CGTMSE/CGFMU claim payouts.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "NPA Classification, Lock-In Audit & CGTMSE/CGFMU Portal Marking",
      text: "Verify RBI IRAC 90+ DPD classification, confirm CGTMSE 18-month lock-in completion and annual guarantee fee (AGF) payment status, and mark NPA on the CGTMSE or NCGTC CGFMU portal within prescribed timelines.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Dispatch Advocate-Signed Multi-Channel Loan Recall Notice",
      text: "Serve an RBI penal-charge-compliant Loan Recall Notice via India Post Speed Post RPAD, verified Email, and WhatsApp (certified under BSA 2023 s.63) to dismantle the government-grant myth and establish formal recall.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Trigger Ticket-Matched Legal Rail (PSS s.25, Lok Adalat, Commercial Suit, or DRT)",
      text: "Route sub-₹10L Mudra/CGTMSE accounts to PSS Act s.25 (on e-NACH bounce), Pre-Litigation National Lok Adalat (0% fee), or State RRC; route >₹10L CGTMSE NPAs to Commercial Court s.12A / Order 37 CPC (₹10L–₹19.99L) or e-DRT s.19 OA (≥₹20L).",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Lodge First-Installment (75%) CGTMSE / CGFMU Claim with Audit Dossier",
      text: "Upload certified CBS ledger, advocate recall notice, RPAD tracking, BSA s.63 certificate, and legal-initiation CNR/DLSA docket proof on the guarantee portal to unlock the 75% first tranche cleanly.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Sustain Post-Claim Recovery, Remit Trust Share & Unlock 25% Second Installment",
      text: "Continue decree execution or OTS follow-up post-first-claim, remit pro-rata recoveries per CGTMSE sharing norms, and file closure/3-year decree completion dossier to collect the balance 25% tranche.",
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
      name: "Banks Loan Recovery",
      item: `${SITE_URL}/industries/banks-loan-recovery`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Mudra & CGTMSE NPA Recovery",
      item: CANONICAL_URL,
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

export default function MudraCgtmseRecoveryBanksPage() {
  const breadcrumbItems = [
    { label: "Industries", href: "/industries" },
    { label: "Banks Loan Recovery", href: "/industries/banks-loan-recovery" },
    { label: "Mudra & CGTMSE NPA Recovery", href: PAGE_PATH },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data (JSON-LD) */}
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

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-01 Banking Playbook</span>
            <span>&bull;</span>
            <span>CGTMSE / NCGTC CGFMU Claim Compliance</span>
            <span>&bull;</span>
            <span>MSME Retail Assets SOP</span>
          </div>

          {/* Single Page H1 (Verbatim match to ARTICLE_SCHEMA.headline) */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40–60 Word Executive Creditor Answer Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &bull; CGTMSE &amp; Mudra Compliance
            </span>
            Because collateral-free Mudra and CGTMSE loans cannot invoke SARFAESI (s.31(g)) or DRT under ₹20 Lakh, banks must pair advocate-signed multi-channel Recall Notices with PSS Act s.25 and 0%-fee Pre-Litigation Lok Adalats. Built on our{" "}
            <Link
              href="/industries/banks-loan-recovery"
              className="text-red-400 hover:text-red-300 underline font-semibold"
            >
              institutional bank loan recovery infrastructure
            </Link>
            , this workflow satisfies CGTMSE/NCGTC legal prerequisites while dismantling borrower &ldquo;government grant&rdquo; myths economically.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-slate-100">
                Up to ₹10L
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                CGTMSE legal-suit waiver cap (recall &amp; recovery trail still mandatory)
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-emerald-400">
                75% + 25%
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                CGTMSE two-tranche payout split tied to active recovery closure
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-amber-400">
                30d / 15d
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                PSS Act s.25 e-NACH bounce notice &amp; statutory cure window
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-red-400">
                ₹0 Fee
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                Pre-Litigation National Lok Adalat court fee for bulk Mudra batches
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* 2-Column Sticky TOC + Editorial Column */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <MudraCgtmseTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Grant Myth vs NPA Reality */}
            <section
              id="heading-grant-myth"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Why Mudra &amp; CGTMSE Borrowers Misread Collateral-Free Credit
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For MSME Retail Assets Heads and Zonal NPA Chiefs across scheduled commercial banks, small finance banks, and regional rural banks, collateral-free government-promoted lending creates a unique behavioral default trap. Across Pradhan Mantri Mudra Yojana (PMMY) tiers—<strong>Shishu</strong> (up to ₹50,000), <strong>Kishore</strong> (₹50,001 to ₹5 Lakh), <strong>Tarun</strong> (₹5 Lakh to ₹10 Lakh), and <strong>Tarun Plus</strong> (₹10 Lakh to ₹20 Lakh)—as well as <strong>CGTMSE-covered MSE loans</strong>, <strong>PMEGP</strong>, and <strong>PM SVANidhi</strong> portfolios, defaulting borrowers routinely treat unsecured bank credit as a &ldquo;government grant&rdquo; or assume an eventual state waiver will erase the ledger.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This misconception is compounded by two hard statutory exclusions that tie the hands of traditional bank recovery branches:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl bg-red-50 border border-red-200 p-4 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                    Exclusion 1 &bull; SARFAESI Act s.31(g) Bar
                  </p>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    Collateral-free Mudra and pure CGTMSE facilities have zero mortgaged immovable property. Under <strong>Section 31(g) of the SARFAESI Act, 2002</strong>, banks cannot issue Section 13(2) demand notices or approach District Magistrates under Section 14 for physical asset takeover.
                  </p>
                </div>
                <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-800">
                    Exclusion 2 &bull; RDB Act s.1(4) ₹20 Lakh DRT Floor
                  </p>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    Under <strong>Section 1(4) of the RDB Act, 1993</strong>, Debts Recovery Tribunals cannot entertain Original Applications below ₹20,00,000—excluding 100% of Shishu, Kishore, Tarun, and PM SVANidhi NPAs and a vast volume of micro CGTMSE credit lines.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Meanwhile, internal collection callers and generic SMS reminders carry zero statutory weight, while filing ad-valorem civil suits on ₹1.5 Lakh–₹6 Lakh accounts destroys branch recovery economics. The exact operational bridge is <strong>bulk, advocate-signed pre-litigation legal notices</strong> backed by Speed Post RPAD tracking, Email + WhatsApp audit certificates under <strong>Bharatiya Sakshya Adhiniyam (BSA) 2023 s.63</strong>, and automated routing into <strong>PSS Act s.25</strong> and <strong>Pre-Litigation National Lok Adalats</strong>. To calibrate your statutory jurisdiction across sub-₹20L and above-₹20L MSME accounts, see our{" "}
                <Link
                  href="/bank-loan-recovery-below-20-lakhs-drt-threshold-options"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  sub-₹20 Lakh bank loan recovery forum playbook
                </Link>
                .
              </p>
            </section>

            {/* Section 2: CGTMSE & CGFMU Claim Prerequisites */}
            <section
              id="heading-cgtmse-legal-rules"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  CGTMSE &amp; CGFMU Legal-Action Prerequisites for Claim Payout
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A CGTMSE Claim Nodal Officer&rsquo;s biggest operational risk is not merely borrower delinquency—it is <strong>guarantee claim rejection or disallowance</strong> caused by incomplete NPA recall records, missed portal marking windows, or failure to prove recovery initiation. While both <strong>CGTMSE</strong> (individual MSE loan guarantee) and <strong>NCGTC&rsquo;s CGFMU</strong> (portfolio guarantee for PMMY Mudra and PM SVANidhi) absorb credit risk, neither trust pays claims automatically upon 90 DPD.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    1. Lock-In &amp; Fee Continuity
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Under CGTMSE CGS-I norms, the account must complete its prescribed <strong>lock-in period</strong> (standard 18 months from last disbursement or guarantee start date, subject to scheme tenor rules) with uninterrupted Annual Guarantee Fee (AGF) remittance and timely portal NPA marking.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                    2. ₹10 Lakh Legal-Suit Threshold
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    CGTMSE waives mandatory civil-suit / DRT initiation for eligible claims with outstanding <strong>up to ₹10 Lakh</strong> where litigation is uneconomical under board policy. Above <strong>₹10 Lakh</strong>, documented legal initiation (Suit, DRT OA, Arbitration, Lok Adalat, or RRC) is strictly mandatory before lodging the 75% first claim.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    3. Mandatory Recall on ALL Tickets
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Even below the ₹10 Lakh legal-suit waiver threshold—and across CGFMU Mudra portfolios—banks must prove a valid, itemized <strong>Loan Recall / Demand Notice</strong> was served to the borrower and co-obligors, proving prudent institutional recovery before invoking trust funds.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-slate-900 text-white p-4 sm:p-5 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-red-400">
                  Critical Nodal Officer Compliance Alert &bull; RBI Penal Charges Direction
                </p>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Under RBI&rsquo;s <em>Fair Lending Practice – Penal Charges in Loan Accounts</em> framework, penal charges cannot be capitalized into principal or charged as compound penal interest. Every Mudra or CGTMSE Loan Recall Notice must itemize <strong>(a) Principal Outstanding</strong>, <strong>(b) Contractual Accrued Interest</strong>, and <strong>(c) Uncapitalized Penal Charges</strong> separately. Lump-sum demand figures trigger both CGTMSE claim deductions (as guarantee covers principal / eligible crystallised default, not excess penal add-ons) and debtor challenges in Commercial Court or Lok Adalat.
                </p>
              </div>
            </section>

            {/* Section 3: 5-Stage Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  5-Stage Mudra &amp; CGTMSE Recovery-to-Claim Decision Tree
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This operational decision architecture routes every unsecured MSME and Mudra NPA from Day 91 classification to clean guarantee realization—ensuring zero wasted court fees on sub-₹5 Lakh tickets and zero CGTMSE claim rejections on above-₹10 Lakh files.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-4">
                <svg
                  width={840}
                  height={350}
                  viewBox="0 0 840 350"
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-Stage Mudra and CGTMSE Recovery to Guarantee Claim Decision Tree"
                >
                  <defs>
                    <marker
                      id="mudraArrow"
                      markerWidth="8"
                      markerHeight="8"
                      refX="6"
                      refY="3"
                      orient="auto"
                    >
                      <path d="M0,0 L0,6 L7,3 z" fill="#475569" />
                    </marker>
                    <marker
                      id="mudraArrowRed"
                      markerWidth="8"
                      markerHeight="8"
                      refX="6"
                      refY="3"
                      orient="auto"
                    >
                      <path d="M0,0 L0,6 L7,3 z" fill="#DC2626" />
                    </marker>
                  </defs>

                  {/* Stage 1 */}
                  <rect x="14" y="20" width="175" height="90" rx="12" fill="#0F172A" />
                  <text x="28" y="42" fill="#F87171" fontSize="10" fontWeight="700">STAGE 1 · DAY 91 NPA</text>
                  <text x="28" y="62" fill="#FFFFFF" fontSize="12" fontWeight="700">IRAC NPA &amp; Portal</text>
                  <text x="28" y="80" fill="#CBD5E1" fontSize="10">Check 18m lock-in &amp; AGF</text>
                  <text x="28" y="95" fill="#CBD5E1" fontSize="10">Mark CGTMSE / CGFMU</text>

                  <line x1="189" y1="65" x2="225" y2="65" stroke="#475569" strokeWidth="2" markerEnd="url(#mudraArrow)" />

                  {/* Stage 2 */}
                  <rect x="230" y="20" width="195" height="90" rx="12" fill="#DC2626" />
                  <text x="244" y="42" fill="#FEE2E2" fontSize="10" fontWeight="700">STAGE 2 · DAY 95–105</text>
                  <text x="244" y="62" fill="#FFFFFF" fontSize="12" fontWeight="700">Advocate Recall Notice</text>
                  <text x="244" y="80" fill="#FEF2F2" fontSize="10">Email + WhatsApp + RPAD</text>
                  <text x="244" y="95" fill="#FEF2F2" fontSize="10">BSA s.63 + PSS s.25 Embed</text>

                  <line x1="425" y1="65" x2="462" y2="65" stroke="#DC2626" strokeWidth="2" markerEnd="url(#mudraArrowRed)" />

                  {/* Decision Node */}
                  <rect x="468" y="20" width="170" height="90" rx="12" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
                  <text x="482" y="42" fill="#DC2626" fontSize="10" fontWeight="700">STAGE 3 · TRIAGE</text>
                  <text x="482" y="62" fill="#0F172A" fontSize="12" fontWeight="700">Outstanding Tier?</text>
                  <text x="482" y="80" fill="#475569" fontSize="10">≤ ₹10L Waiver Eligible</text>
                  <text x="482" y="95" fill="#475569" fontSize="10">&gt; ₹10L Legal Mandatory</text>

                  {/* Paid Early Branch */}
                  <line x1="638" y1="65" x2="674" y2="65" stroke="#059669" strokeWidth="2" markerEnd="url(#mudraArrow)" />
                  <rect x="680" y="20" width="146" height="90" rx="12" fill="#ECFDF5" stroke="#059669" strokeWidth="1.5" />
                  <text x="692" y="42" fill="#047857" fontSize="10" fontWeight="700">PRE-LIT CURE</text>
                  <text x="692" y="62" fill="#064E3B" fontSize="12" fontWeight="700">Direct OTS / Pay</text>
                  <text x="692" y="80" fill="#065F46" fontSize="10">Myth shattered early</text>
                  <text x="692" y="95" fill="#065F46" fontSize="10">Zero court cost spent</text>

                  {/* Downward Branches from Stage 3 */}
                  <line x1="510" y1="110" x2="510" y2="145" stroke="#475569" strokeWidth="2" />
                  <line x1="150" y1="145" x2="720" y2="145" stroke="#475569" strokeWidth="2" />
                  <line x1="150" y1="145" x2="150" y2="168" stroke="#475569" strokeWidth="2" markerEnd="url(#mudraArrow)" />
                  <line x1="435" y1="145" x2="435" y2="168" stroke="#475569" strokeWidth="2" markerEnd="url(#mudraArrow)" />
                  <line x1="720" y1="145" x2="720" y2="168" stroke="#475569" strokeWidth="2" markerEnd="url(#mudraArrow)" />

                  {/* Track A */}
                  <rect x="20" y="174" width="260" height="72" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                  <text x="34" y="194" fill="#047857" fontSize="10" fontWeight="700">TRACK A · ≤ ₹10L (MUDRA / CGTMSE)</text>
                  <text x="34" y="212" fill="#0F172A" fontSize="11" fontWeight="700">Pre-Lit Lok Adalat (₹0 Fee) + PSS s.25</text>
                  <text x="34" y="229" fill="#475569" fontSize="10">Or State RRC (PMEGP) · Legal Suit Waived</text>

                  {/* Track B */}
                  <rect x="305" y="174" width="260" height="72" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                  <text x="319" y="194" fill="#B45309" fontSize="10" fontWeight="700">TRACK B · ₹10L–₹19.99L (CGTMSE)</text>
                  <text x="319" y="212" fill="#0F172A" fontSize="11" fontWeight="700">Commercial Court s.12A / Order 37 CPC</text>
                  <text x="319" y="229" fill="#475569" fontSize="10">Or Sec 21 Arbitration · Mandatory Initiation</text>

                  {/* Track C */}
                  <rect x="590" y="174" width="236" height="72" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                  <text x="604" y="194" fill="#DC2626" fontSize="10" fontWeight="700">TRACK C · ≥ ₹20L (CGTMSE MSE)</text>
                  <text x="604" y="212" fill="#0F172A" fontSize="11" fontWeight="700">e-DRT Section 19 OA + Hybrid SARFAESI</text>
                  <text x="604" y="229" fill="#475569" fontSize="10">Mandatory Legal Filing Before 75% Claim</text>

                  {/* Converge to Stage 4 & 5 */}
                  <line x1="150" y1="246" x2="150" y2="270" stroke="#475569" strokeWidth="2" />
                  <line x1="435" y1="246" x2="435" y2="270" stroke="#475569" strokeWidth="2" />
                  <line x1="720" y1="246" x2="720" y2="270" stroke="#475569" strokeWidth="2" />
                  <line x1="150" y1="270" x2="720" y2="270" stroke="#475569" strokeWidth="2" />
                  <line x1="250" y1="270" x2="250" y2="286" stroke="#DC2626" strokeWidth="2" markerEnd="url(#mudraArrowRed)" />

                  {/* Stage 4 */}
                  <rect x="40" y="292" width="365" height="48" rx="10" fill="#1E293B" />
                  <text x="56" y="312" fill="#F87171" fontSize="10" fontWeight="700">STAGE 4 · 75% FIRST INSTALLMENT CLAIM</text>
                  <text x="56" y="328" fill="#FFFFFF" fontSize="11" fontWeight="600">Upload Recall + RPAD + BSA s.63 + CNR on Portal</text>

                  <line x1="405" y1="316" x2="444" y2="316" stroke="#059669" strokeWidth="2" markerEnd="url(#mudraArrow)" />

                  {/* Stage 5 */}
                  <rect x="450" y="292" width="356" height="48" rx="10" fill="#064E3B" />
                  <text x="466" y="312" fill="#6EE7B7" fontSize="10" fontWeight="700">STAGE 5 · 25% BALANCE &amp; SHARING NORM</text>
                  <text x="466" y="328" fill="#FFFFFF" fontSize="11" fontWeight="600">Execute Decree / Remit Share -&gt; Unlock Final 25%</text>
                </svg>
              </div>

              {/* Mobile Stacked Decision Cards */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    stage: "Stage 1 · Day 91 NPA Marking",
                    desc: "Confirm RBI 90+ DPD classification, 18-month lock-in & AGF remittance; mark NPA on CGTMSE / CGFMU portal.",
                  },
                  {
                    stage: "Stage 2 · Advocate Recall Notice (Day 95–105)",
                    desc: "Dispatch itemized Recall Notice (+ PSS Act s.25 if e-NACH bounced) via Email + WhatsApp + Speed Post RPAD with BSA s.63 proof.",
                  },
                  {
                    stage: "Stage 3 · Ticket-Matched Legal Routing",
                    desc: "≤ ₹10L: Lok Adalat (₹0 fee), PSS s.25, or State RRC. ₹10L–₹19.99L: Commercial Court s.12A / Order 37 CPC. ≥ ₹20L: e-DRT s.19 OA.",
                  },
                  {
                    stage: "Stage 4 · Lodge 75% First Installment Claim",
                    desc: "Upload certified CBS ledger, RPAD tracking, BSA s.63 certificate, and filing CNR/DLSA receipt on the guarantee portal.",
                  },
                  {
                    stage: "Stage 5 · Unlock 25% Balance & Remit Recoveries",
                    desc: "Continue execution/OTS follow-up, share post-claim recoveries pro-rata with Trust, and close after decree/3-year milestone.",
                  },
                ].map((item) => (
                  <div
                    key={item.stage}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1"
                  >
                    <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                      {item.stage}
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Dark-Header Statutory Recovery Matrix */}
            <section
              id="heading-scheme-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Recovery Matrix: Shishu, Kishore, Tarun &amp; CGTMSE
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Branch managers frequently misallocate litigation budgets by sending low-value Mudra accounts to slow civil courts while leaving high-value CGTMSE accounts without mandatory legal initiation. Use the matrix below to match every scheme tier to its optimal legal rail.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="min-w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3.5 px-4 font-bold">Scheme &amp; Ticket Band</th>
                      <th className="py-3.5 px-4 font-bold">Guarantee Cover</th>
                      <th className="py-3.5 px-4 font-bold">SARFAESI / DRT?</th>
                      <th className="py-3.5 px-4 font-bold">Legal Initiation Rule</th>
                      <th className="py-3.5 px-4 font-bold">Optimal Bank Recovery Rail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Mudra Shishu &amp; PM SVANidhi<br />
                        <span className="font-normal text-xs text-slate-500">₹10,000 – ₹50,000</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">NCGTC CGFMU Portfolio</td>
                      <td className="py-3.5 px-4 text-[#DC2626] font-semibold">Neither (Unsecured &lt; ₹20L)</td>
                      <td className="py-3.5 px-4 text-slate-700">Recall notice + pre-litigation recovery proof</td>
                      <td className="py-3.5 px-4 text-emerald-800 font-medium">Bulk Advocate Notice + Pre-Lit National Lok Adalat (₹0 fee)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Mudra Kishore &amp; Tarun<br />
                        <span className="font-normal text-xs text-slate-500">₹50,001 – ₹10,00,000</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">CGFMU or CGTMSE</td>
                      <td className="py-3.5 px-4 text-[#DC2626] font-semibold">Neither (Pure Unsecured)</td>
                      <td className="py-3.5 px-4 text-slate-700">Formal Recall mandatory; CGTMSE suit waived ≤ ₹10L</td>
                      <td className="py-3.5 px-4 text-emerald-800 font-medium">Advocate Recall + PSS Act s.25 (e-NACH) / NI s.138 + Lok Adalat</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Mudra Tarun Plus &amp; CGTMSE Mid-Tier<br />
                        <span className="font-normal text-xs text-slate-500">₹10,00,001 – ₹19,99,999</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">CGTMSE / CGFMU</td>
                      <td className="py-3.5 px-4 text-amber-700 font-semibold">No DRT (&lt;₹20L); Hybrid SARFAESI only if security exists</td>
                      <td className="py-3.5 px-4 text-[#DC2626] font-semibold">Mandatory legal action before 75% claim</td>
                      <td className="py-3.5 px-4 text-slate-900 font-medium">Commercial Court s.12A Mediation / Order XXXVII CPC / Sec 21 Arbitration</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        CGTMSE Large MSE Facility<br />
                        <span className="font-normal text-xs text-slate-500">₹20,00,000 – ₹5 Cr+</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">CGTMSE (75%–85% slabs)</td>
                      <td className="py-3.5 px-4 text-emerald-700 font-semibold">e-DRT OA Eligible; Hybrid SARFAESI if mortgaged</td>
                      <td className="py-3.5 px-4 text-[#DC2626] font-semibold">Mandatory DRT OA / Civil Suit initiation</td>
                      <td className="py-3.5 px-4 text-slate-900 font-medium">Advocate Recall + e-DRT Section 19 OA + s.19(12)-(15) Asset Attachment</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        PMEGP (KVIC / DIC Assisted)<br />
                        <span className="font-normal text-xs text-slate-500">₹2,00,000 – ₹50,00,000</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">CGTMSE + 15%–35% Margin TDR</td>
                      <td className="py-3.5 px-4 text-amber-700 font-semibold">DRT if ≥ ₹20L; State RRC Eligible</td>
                      <td className="py-3.5 px-4 text-slate-700">Recall + 3-yr subsidy TDR verification compliance</td>
                      <td className="py-3.5 px-4 text-slate-900 font-medium">Subsidy-Risk Recall Notice + District Collector State RRC + Lok Adalat / DRT</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                Need to verify exact forum selection, DRT filing fees, or e-NACH limitation stops for a specific MSME account? Run our{" "}
                <Link
                  href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  Bank Recovery Forum &amp; DRT Fee Calculator
                </Link>{" "}
                or the{" "}
                <Link
                  href="/tools/section-25-nach-bounce-limitation-calculator"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  Section 25 PSS Act e-NACH Bounce Limitation Calculator
                </Link>
                .
              </p>
            </section>

            {/* Mid-Page Compact Dual-Track CTA */}
            <MudraCgtmseNoticeCTA variant="compact" />

            {/* Section 5: Interactive 4 Scenarios */}
            <section
              id="heading-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4 Unsecured MSME Default Scenarios &amp; Bank Action Playbooks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select any institutional failure mode below to view the exact statutory posture, 3-step branch escalation workflow, and CGTMSE / NCGTC audit impact.
              </p>

              <MudraCgtmseScenarioTabs />
            </section>

            {/* Section 6: Worked Financial & Claim Payout Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked Claim Ledger: ₹8.5 Lakh CGTMSE &amp; ₹4.2 Lakh Kishore NPA
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To demonstrate why low-cost bulk advocate notices and Pre-Litigation Lok Adalats protect both bank Net NPA ratios and CGTMSE claim proceeds, compare two illustrative collateral-free MSME defaults handled through structured pre-litigation rails versus delayed conventional civil litigation.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Ledger Card 1: CGTMSE MSE Term Loan */}
                <div className="rounded-2xl bg-slate-900 text-white p-5 sm:p-6 space-y-4 border border-slate-800">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                        Illustrative CGTMSE Account
                      </span>
                      <h3 className="text-base font-extrabold text-white">
                        ₹8,50,000 Micro Manufacturing Term Loan
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-bold">
                      75% Cover Slab
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">Crystallized Principal in Default</span>
                      <span className="font-bold text-white">₹8,50,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">Uncapitalized Contractual Interest / Charges</span>
                      <span className="font-semibold text-amber-300">₹74,200 (Separate)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">Eligible CGTMSE Guaranteed Extent (75%)</span>
                      <span className="font-bold text-emerald-400">₹6,37,500</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">1st Installment Payout (75% of ₹6,37,500)</span>
                      <span className="font-bold text-emerald-300">₹4,78,125</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">2nd Installment Held (25% Pending Closure)</span>
                      <span className="font-bold text-amber-300">₹1,59,375</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">Advocate Recall + RPAD + BSA s.63 Cost</span>
                      <span className="font-bold text-emerald-400">₹999 (Single) / Bulk Tier</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-xs text-slate-300 leading-relaxed">
                    <strong className="text-white">Audit Outcome:</strong> Outstanding is ≤ ₹10L (civil suit waived), so advocate recall notice + PSS s.25 / Lok Adalat docket cleanly unlocks ₹4,78,125 first tranche and preserves the ₹1,59,375 second tranche without burning ₹45,000+ in civil court ad-valorem fees.
                  </div>
                </div>

                {/* Ledger Card 2: Mudra Kishore Portfolio Economics */}
                <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-emerald-200 pb-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                        Illustrative PMMY Mudra Account
                      </span>
                      <h3 className="text-base font-extrabold text-slate-900">
                        ₹4,20,000 Mudra Kishore Retail Shop NPA
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-white text-emerald-800 border border-emerald-300 text-xs font-bold">
                      CGFMU / Lok Adalat
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between py-1 border-b border-emerald-200/80">
                      <span className="text-slate-600">Principal + Accrued Interest (95 DPD)</span>
                      <span className="font-bold text-slate-900">₹4,20,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-emerald-200/80">
                      <span className="text-slate-600">Traditional Civil Suit Cost (Fees + Counsel)</span>
                      <span className="font-bold text-[#DC2626]">₹38,000 – ₹65,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-emerald-200/80">
                      <span className="text-slate-600">Pre-Litigation National Lok Adalat Court Fee</span>
                      <span className="font-bold text-emerald-700">₹0 (100% Exempt)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-emerald-200/80">
                      <span className="text-slate-600">Advocate Recall + PSS Act s.25 Notice</span>
                      <span className="font-bold text-emerald-700">₹999 / Bulk CSV Rate</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-emerald-200/80">
                      <span className="text-slate-600">Typical Lok Adalat OTS Settlement (70%–85%)</span>
                      <span className="font-bold text-slate-900">₹2,94,000 – ₹3,57,000</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-600">Decree Enforceability (LSA Act s.21)</span>
                      <span className="font-bold text-emerald-800">Final &amp; Non-Appealable</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white border border-emerald-200 p-3 text-xs text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">Unit-Economics Win:</strong> By converting &ldquo;grant-myth&rdquo; defaulters through advocate-signed recall notices and ₹0-fee DLSA Lok Adalat batches, branches recover cash within 45–90 days—preserving CGFMU portfolio first-loss deductibles.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: 75/25 Split, Second Installment & Recovery Sharing Norm */}
            <section
              id="heading-second-installment"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  CGTMSE 75/25 Split, Second Installment &amp; Recovery Sharing
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                One of the costliest operational leaks across Indian bank MSME portfolios happens <em>after</em> the bank receives its 75% first installment from CGTMSE. Many branch officers mistakenly view the remaining 25% as automatic and halt all borrower follow-up. Under CGTMSE Trust Scheme guidelines, neglecting post-claim recovery triggers two severe financial penalties: <strong>forfeiture of the balance 25% second installment</strong> and <strong>audit clawback on unreported recoveries</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-2.5">
                  <h3 className="text-sm font-extrabold text-slate-900">
                    Unlocking the Balance 25% Second Installment
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc pl-4">
                    <li>
                      <strong>Statutory Trigger:</strong> Payable on <em>conclusion of recovery proceedings</em> OR expiry of <em>3 years from obtaining a decree / recovery award</em>, whichever is earlier (subject to applicable CGTMSE waiver circulars for small tickets).
                    </li>
                    <li>
                      <strong>Continuous Diligence Proof:</strong> Branches must show active execution steps—such as Lok Adalat compliance follow-ups, Order XXI CPC garnishee/attachment filings, or annual recall/OTS offers—proving the debt was not abandoned.
                    </li>
                    <li>
                      <strong>CIBIL &amp; OTS Discipline:</strong> Never issue an unconditional No-Dues Certificate or write off the residual balance below board-approved OTS thresholds without reconciling CGTMSE settlement reporting.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 space-y-2.5">
                  <h3 className="text-sm font-extrabold text-amber-900">
                    CGTMSE Post-Claim Recovery Sharing Norm
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-amber-950 list-disc pl-4">
                    <li>
                      <strong>Trust Priority &amp; Remittance:</strong> Once CGTMSE pays the first installment, the MLI acts in a fiduciary recovery role. All subsequent borrower payments, OTS credits, or hypothecated stock realizations must be remitted to the Trust per CGTMSE&rsquo;s recovery-sharing norm until the claim payout is recouped.
                    </li>
                    <li>
                      <strong>Netting Legal Expenses:</strong> Only genuine, documented legal recovery costs (advocate notice charges, court/execution expenses within Trust caps) may be deducted prior to remitting net recoveries.
                    </li>
                    <li>
                      <strong>Penalty for Delayed Remittance:</strong> Holding back post-claim borrower recoveries in branch suspense accounts attracts penal interest from CGTMSE and severe statutory audit red flags.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 8: Portal Audit Trail & BSA 2023 s.63 Checklist */}
            <section
              id="heading-evidence-audit"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  CGTMSE Portal Audit Trail &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Whether preparing a CGTMSE 75% claim upload, an NCGTC CGFMU portfolio audit file, or a Section 25 PSS Act / Order XXXVII CPC court dossier, every collateral-free MSME account should carry a standardized 8-point evidentiary packet:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    num: "01",
                    title: "Sanction Letter, DPN & Hypothecation Deed",
                    detail:
                      "Executed Loan Agreement, Demand Promissory Note (DPN), Letter of Continuity, and Udyam Registration copy confirming MSE status.",
                  },
                  {
                    num: "02",
                    title: "CGTMSE CGPAN / CGFMU Enrollment & AGF Proof",
                    detail:
                      "Valid Credit Guarantee Portal Account Number (CGPAN), active lock-in completion date, and uninterrupted Annual Guarantee Fee receipts.",
                  },
                  {
                    num: "03",
                    title: "CBS Ledger + Bankers' Books s.2A Certificate",
                    detail:
                      "Core Banking Statement of Account separating principal, contractual interest, and non-capitalized RBI penal charges with Section 2A certification.",
                  },
                  {
                    num: "04",
                    title: "Advocate-Signed Itemized Loan Recall Notice",
                    detail:
                      "Formal demand recalling the entire facility, refuting any grant/waiver myth, and granting 15 days cure before legal and CIC escalation.",
                  },
                  {
                    num: "05",
                    title: "India Post Speed Post RPAD Barcode & Track",
                    detail:
                      "Original postal booking receipt plus signed Acknowledgement Due / India Post online delivery or 'Refused / Left' endorsement PDF.",
                  },
                  {
                    num: "06",
                    title: "BSA 2023 Section 63 Electronic Service Certificate",
                    detail:
                      "Mandatory Section 63 certificate authenticating Email server headers, WhatsApp delivery ticks, and e-NACH return memos from NPCI/CBS.",
                  },
                  {
                    num: "07",
                    title: "PSS Act s.25 / NI Act s.138 Return Memo (If Any)",
                    detail:
                      "Bank-stamped e-NACH electronic debit return memo or cheque return memo proving notice dispatch strictly within the 30-day statutory window.",
                  },
                  {
                    num: "08",
                    title: "Forum Initiation Proof (Lok Adalat / Court / RRC)",
                    detail:
                      "DLSA Pre-Litigation Lok Adalat filing receipt, Commercial Court s.12A / Suit CNR number, e-DRT diary number (≥₹20L), or Collector RRC memo.",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/80 p-4"
                  >
                    <span className="w-7 h-7 rounded-lg bg-slate-900 text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                      {item.num}
                    </span>
                    <div className="space-y-1">
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Dual-Track B2B Conversion Desk */}
            <section
              id="heading-dual-cta"
              className="scroll-mt-28 space-y-5"
            >
              <div className="flex items-center gap-3 px-1">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Test 1 Mudra/CGTMSE Recall Notice or Upload Branch NPA CSV
                </h2>
              </div>

              <MudraCgtmseNoticeCTA variant="primary" />
            </section>

            {/* Section 10: Banking Recovery Internal Linking Network */}
            <section
              id="heading-internal-network"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Banking MSME Recovery Tools, Templates &amp; Sibling Playbooks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Explore LegalRecovery.in&rsquo;s connected IND-01 Banking NPA infrastructure—spanning interactive calculators, RBI-compliant notice templates, pre-litigation Lok Adalat dockets, and SARFAESI/DRT enforcement playbooks.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  {
                    tag: "Parent Industry Hub",
                    title: "Banks Loan Recovery Infrastructure (IND-01)",
                    href: "/industries/banks-loan-recovery",
                    desc: "Complete multi-track NPA recovery hub for scheduled commercial, small finance, and cooperative banks.",
                  },
                  {
                    tag: "Bank Notice Portal",
                    title: "Send a Legal Notice for Banks to Recover Unpaid Dues",
                    href: "/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues",
                    desc: "Dedicated bank creditor dispatch workflow with Speed Post RPAD, WhatsApp, and Email audit logs.",
                  },
                  {
                    tag: "Institutional Bulk",
                    title: "Bulk Recovery Cases All-in-One Solutions (10–10,000+)",
                    href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
                    desc: "Upload branch CBS CSV manifests for automated Mudra, CGTMSE, and retail NPA notice campaigns.",
                  },
                  {
                    tag: "Lok Adalat Law",
                    title: "Pre-Litigation Lok Adalat Money Recovery Law & Process",
                    href: "/law/lok-adalat-pre-litigation-money-recovery",
                    desc: "Section 19–21 Legal Services Authorities Act framework for 0%-fee executable settlement decrees.",
                  },
                  {
                    tag: "T1 Calculator",
                    title: "SARFAESI & DRT Bank Recovery Forum Calculator",
                    href: "/tools/sarfaesi-drt-bank-recovery-forum-calculator",
                    desc: "Match any MSME or retail NPA to DRT, Commercial Court, Civil Court, or Lok Adalat with exact fee slabs.",
                  },
                  {
                    tag: "P1 Notice Template",
                    title: "Loan Recall cum Guarantee Invocation Notice Template",
                    href: "/templates/bank-loan-recall-cum-guarantee-invocation-notice",
                    desc: "Advocate-vetted, RBI penal-charge-compliant recall notice ready for CGTMSE and MSME files.",
                  },
                  {
                    tag: "P1 NACH Template",
                    title: "Section 25 PSS Act e-NACH Bounce Legal Notice Format",
                    href: "/templates/section-25-pss-act-nach-bounce-legal-notice-format",
                    desc: "30-day statutory criminal demand notice for dishonoured Mudra and MSME EMI auto-debit mandates.",
                  },
                  {
                    tag: "Sibling Playbook",
                    title: "Bank Pre-Litigation Lok Adalat Bulk NPA Settlement Guide",
                    href: "/bank-pre-litigation-lok-adalat-bulk-npa-settlement-guide",
                    desc: "How zonal recovery teams batch 500–5,000 retail & Mudra NPAs for National Lok Adalat calendars.",
                  },
                  {
                    tag: "Sibling Playbook",
                    title: "SARFAESI Section 13(2) & 13(3A) Bank Compliance Guide",
                    href: "/law/sarfaesi-section-13-2-demand-notice-bank-guide",
                    desc: "For CGTMSE Hybrid Security loans carrying partial immovable collateral alongside guarantee cover.",
                  },
                  {
                    tag: "Sibling Playbook",
                    title: "SARFAESI Section 14 DM/CMM Physical Possession Workflow",
                    href: "/sarfaesi-section-14-dm-cmm-physical-possession-workflow",
                    desc: "9-point Authorized Officer affidavit and 30/60-day possession execution SOP for secured assets.",
                  },
                ].map((linkItem) => (
                  <Link
                    key={linkItem.href}
                    href={linkItem.href}
                    className="group block rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-[#DC2626]/50 p-4 transition-all shadow-2xs hover:shadow-md"
                  >
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                      {linkItem.tag}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors mb-1">
                      {linkItem.title} &rarr;
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {linkItem.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 11: Practitioner FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Practitioner FAQs: Mudra, CGTMSE &amp; CGFMU Claim Compliance
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl border border-slate-200 bg-slate-50/60 open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-bold text-xs sm:text-sm text-slate-900">
                      <span>{faq.question}</span>
                      <span className="w-6 h-6 rounded-full bg-slate-200 group-open:bg-[#DC2626] group-open:text-white flex items-center justify-center text-xs font-bold shrink-0 transition-colors">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Primary Statutory Authorities, CGTMSE &amp; NCGTC References
                </h2>
              </div>

              <ul className="space-y-2.5">
                {PRIMARY_SOURCES.map((source) => (
                  <li
                    key={source.title}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                  >
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] underline decoration-slate-300 hover:decoration-[#DC2626] underline-offset-2 transition-colors"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
                <p>
                  <strong className="text-slate-700">Legal Editorial Review:</strong>{" "}
                  Anuj Anand Malik, Advocate &amp; Founder, AMA Legal Solutions (Banking &amp; Institutional Recovery Practice).
                </p>
                <p className="shrink-0">Last Updated: 19 Nov 2026</p>
              </div>
            </section>
          </article>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
