import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import Sub20LakhTableOfContents from "./Sub20LakhTableOfContents";
import Sub20LakhScenarioTabs from "./Sub20LakhScenarioTabs";
import Sub20LakhNoticeCTA from "./Sub20LakhNoticeCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Bank Loan Recovery Below ₹20 Lakh (Outside DRT): 5 Routes",
  description:
    "Cannot file a DRT OA for loans under ₹20 Lakh? Compare Order 37 Summary Suits, Commercial Court s.12A, PSS Act s.25, Arbitration & Lok Adalat for banks.",
  alternates: {
    canonical: `${SITE_URL}/bank-loan-recovery-below-20-lakhs-drt-threshold-options`,
  },
  openGraph: {
    title: "Bank Loan Recovery Below ₹20 Lakh (Outside DRT): 5 Routes",
    description:
      "Cannot file a DRT OA for loans under ₹20 Lakh? Compare Order 37 Summary Suits, Commercial Court s.12A, PSS Act s.25, Arbitration & Lok Adalat for banks.",
    url: `${SITE_URL}/bank-loan-recovery-below-20-lakhs-drt-threshold-options`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Bank Loan Recovery Below 20 Lakhs DRT Pecuniary Limit Forum Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bank Loan Recovery Below ₹20 Lakh (Outside DRT): 5 Routes",
    description:
      "Cannot file a DRT OA for loans under ₹20 Lakh? Compare Order 37 Summary Suits, Commercial Court s.12A, PSS Act s.25, Arbitration & Lok Adalat for banks.",
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
    title: "Recovery of Debts and Bankruptcy Act, 1993 (RDB Act Section 1(4) & Section 19) — Ministry of Law and Justice",
    url: "https://www.indiacode.nic.in/handle/123456789/1953",
  },
  {
    title: "Commercial Courts Act, 2015 (Sections 2(1)(c), 12A Pre-Institution Mediation & Order XIII-A CPC)",
    url: "https://www.indiacode.nic.in/handle/123456789/2146",
  },
  {
    title: "The Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure & Order XXI — Execution of Decrees)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 — Dishonour of Electronic Funds Transfer / e-NACH)",
    url: "https://www.indiacode.nic.in/handle/123456789/2088",
  },
  {
    title: "Legal Services Authorities Act, 1987 (Sections 19, 20 & 21 — Pre-Litigation Lok Adalat Decrees)",
    url: "https://www.indiacode.nic.in/handle/123456789/1944",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records & Core Banking Audit Certificate)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    question: "Why can banks not file an Original Application (OA) in DRT for loans under ₹20 Lakhs?",
    answer:
      "Under Section 1(4) of the Recovery of Debts and Bankruptcy Act, 1993 (RDB Act), as amended by Ministry of Finance Notification S.O. 4312(E), the minimum pecuniary jurisdiction of the Debts Recovery Tribunal (DRT) was raised from ₹10 Lakh to ₹20 Lakh. Any bank debt below ₹20,00,000 is statutorily excluded from DRT jurisdiction, barring banks from filing Original Applications under Section 19.",
  },
  {
    question: "Can banks invoke SARFAESI for unsecured retail or personal loans below ₹20 Lakhs?",
    answer:
      "No. Section 31(g) of the SARFAESI Act, 2002 explicitly bars the application of the Act to any property not charged or mortgaged to the secured creditor. Because retail personal loans, credit card debts, and consumer durable loans are entirely unsecured, SARFAESI Section 13(2) demand notices and Section 14 physical possession cannot be invoked, irrespective of the loan value.",
  },
  {
    question: "What is the fastest judicial recovery route for unsecured bank loans between ₹3 Lakh and ₹20 Lakh?",
    answer:
      "For amounts between ₹3,00,000 and ₹20,00,000, Commercial Court Summary Suits under Order XXXVII CPC or Institutional Fast-Track Arbitration under Section 29B of the Arbitration Act are the fastest adjudicatory routes. In Commercial Courts, loans qualify as 'Commercial Disputes' under Section 2(1)(c)(i), enabling summary judgment under Order XIII-A or pre-institution settlement under Section 12A within 3 to 5 months.",
  },
  {
    question: "How does Section 12A Pre-Institution Mediation under the Commercial Courts Act benefit banks?",
    answer:
      "Section 12A mandates that before filing a commercial suit (where no urgent interim relief is sought), the plaintiff must exhaust pre-institution mediation through the District Legal Services Authority (DLSA). This 3-month statutory window allows banks to summon defaulting borrowers before a trained mediator. If a settlement is reached, Section 12A(3) accords it the exact status and enforceability of a Civil Court decree under CPC Section 96 without payment of ad-valorem court fees.",
  },
  {
    question: "Can banks file a Section 25 PSS Act criminal complaint alongside civil recovery proceedings?",
    answer:
      "Yes. Section 25 of the Payment and Settlement Systems Act, 2007 (dishonour of electronic fund transfer / e-NACH mandate) is a quasi-criminal remedy that operates independently of civil suits or arbitration. The Supreme Court has repeatedly affirmed that criminal proceedings for dishonour of financial mandates and civil recovery proceedings can proceed simultaneously without violating the rule against double jeopardy.",
  },
  {
    question: "When should a bank choose Pre-Litigation Lok Adalat over a regular civil suit?",
    answer:
      "Pre-Litigation Lok Adalat under Section 20(2) of the Legal Services Authorities Act, 1987 is ideal for high-volume retail NPAs under ₹5 Lakhs, including Mudra loans, Kisan Credit Cards, and personal credit lines. It carries 0% court fees, requires zero formal pleading, and produces a final, non-appealable award under Section 21 that is directly executable in the Civil Court under Order XXI CPC.",
  },
  {
    question: "What happens if a loan default is below ₹3 Lakhs? Can the bank approach the Commercial Court?",
    answer:
      "No. Under Section 2(1)(i) of the Commercial Courts Act, 2015, the 'Specified Value' of a commercial dispute cannot be less than ₹3,00,000. For bank defaults under ₹3 Lakhs, banks must file summary suits in the regular Civil Court (Civil Judge Senior/Junior Division), utilize Pre-Litigation Lok Adalats, or initiate criminal proceedings under Section 25 PSS Act / Section 138 NI Act.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Recovering Unsecured & Retail Bank NPAs Below the ₹20 Lakh DRT Pecuniary Threshold",
  description:
    "Cannot file a DRT OA for loans under ₹20 Lakh? Compare Order 37 Summary Suits, Commercial Court s.12A, PSS Act s.25, Arbitration & Lok Adalat for banks.",
  datePublished: "2026-11-19T10:00:00+05:30",
  dateModified: "2026-11-19T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/bank-loan-recovery-below-20-lakhs-drt-threshold-options`,
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
    name: "Bank Loan Recovery Below 20 Lakhs DRT Pecuniary Limit",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const TABLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Table",
  about: "Comparative Analysis of Legal Recovery Remedies for Bank Loans Below ₹20 Lakhs",
  name: "Sub-₹20 Lakh Bank Loan Recovery Forum Selection Matrix",
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
      name: "Sub-₹20L Recovery Options",
      item: `${SITE_URL}/bank-loan-recovery-below-20-lakhs-drt-threshold-options`,
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

export default function Sub20LakhRecoveryOptionsPage() {
  const breadcrumbItems = [
    { label: "Industries", href: "/industries" },
    { label: "Banks & Financial Institutions", href: "/industries/banks-loan-recovery" },
    { label: "Sub-₹20L Recovery Options", href: "/bank-loan-recovery-below-20-lakhs-drt-threshold-options" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Server-Side Rendered JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TABLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Dark Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Hero Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>B2B Banking Recovery Blueprint</span>
            <span>&bull;</span>
            <span>IND-01 &bull; RDB Act §1(4) Analysis</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            Recovering Unsecured &amp; Retail Bank NPAs Below the ₹20 Lakh DRT Pecuniary Threshold
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary &bull; Creditor Escalation Mandate
            </span>
            Under Section 1(4) of the RDB Act, 1993, the Ministry of Finance barred Debts Recovery Tribunals (DRT) from entertaining claims below ₹20,00,000. For unsecured retail, personal, vehicle, credit card, and Mudra loans, where SARFAESI Act is statutorily inapplicable under Section 31(g), scheduled commercial banks and small finance banks must redirect recovery through five alternative statutory rails. Discover how our{" "}
            <Link
              href="/industries/banks-loan-recovery"
              className="text-red-400 hover:text-red-300 underline font-semibold"
            >
              Institutional Bank Recovery Desk
            </Link>{" "}
            deploys Order XXXVII Summary Suits, Commercial Court Section 12A Mediation, Section 25 PSS Act prosecution, and Pre-Litigation Lok Adalats to unlock frozen retail NPA recovery.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">DRT Minimum Floor</span>
              <span className="text-lg sm:text-2xl font-black text-red-400">₹20,00,000</span>
              <span className="text-[10px] text-slate-500 block">RDB Act s.1(4) Cutoff</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">Commercial Floor</span>
              <span className="text-lg sm:text-2xl font-black text-emerald-400">₹3,00,000</span>
              <span className="text-[10px] text-slate-500 block">Commercial Courts Act s.2(1)(i)</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">s.12A PIM Window</span>
              <span className="text-lg sm:text-2xl font-black text-amber-400">90–150 Days</span>
              <span className="text-[10px] text-slate-500 block">DLSA Pre-Institution Mediation</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">Lok Adalat Stamp Duty</span>
              <span className="text-lg sm:text-2xl font-black text-slate-100">0% Court Fee</span>
              <span className="text-[10px] text-slate-500 block">Enforceable Civil Decree s.21</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumb Navigation */}
        <div className="mb-6 sm:mb-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* 2-Column Split: Sidebar TOC + Main Content Column */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar Table of Contents */}
          <Sub20LakhTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The DRT Pecuniary Limit Blind Spot */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  1
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Litigation Bottleneck Analysis
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                The ₹20 Lakh DRT Barrier: Why Retail NPAs Face a Blind Spot
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                In September 2018, the Ministry of Finance, Government of India, issued Notification S.O. 4312(E) exercising powers under sub-section (4) of Section 1 of the Recovery of Debts Due to Banks and Financial Institutions Act, 1993 (now the Recovery of Debts and Bankruptcy Act, 1993, or <strong>RDB Act</strong>). The notification formally raised the minimum debt threshold for filing an Original Application (OA) before the Debt Recovery Tribunal from ₹10 Lakh to <strong>₹20 Lakh</strong>.
              </p>

              <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl">
                <h3 className="text-sm font-bold text-red-900 mb-1">
                  The Statutory Impasse for Retail Bank Creditors
                </h3>
                <p className="text-xs sm:text-sm text-red-800 leading-relaxed">
                  While this policy succeeded in unclogging DRT dockets burdened with massive corporate debts, it created an acute <strong>statutory enforcement vacuum</strong> across India&apos;s banking system. Over 80% of retail personal loans, credit card balances, education loans, doctor equipment financings, and Pradhan Mantri Mudra Yojana (PMMY) facilities fall strictly below ₹20,00,000.
                </p>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Compounding this dilemma, banks cannot rely on the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (<strong>SARFAESI Act</strong>). Under <Link href="/law/sarfaesi-section-13-2-demand-notice-bank-guide" className="text-red-600 hover:underline font-semibold">SARFAESI Section 13(2)</Link> and Section 31(g), SARFAESI enforcement applies solely to debts secured by a valid mortgage or hypothecation. Where a retail personal loan or credit card default carries zero collateral, SARFAESI is statutorily unavailable. Furthermore, Section 31(j) bars SARFAESI enforcement where the unpaid amount is less than ₹1 Lakh or represents less than 20% of the principal and interest.
              </p>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                As a result, millions of branch-level retail NPAs sit in what bank Chief Risk Officers (CROs) term a <em>&ldquo;litigation blind spot&rdquo;</em>. Branch managers, reluctant to incur high ad-valorem civil court fees and brace for 5-to-7-year trial court delays, leave defaulted accounts to third-party collection agencies until limitation periods expire under the Limitation Act, 1963.
              </p>
            </section>

            {/* Section 2: Statutory Framework */}
            <section
              id="heading-statutory-framework"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  2
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Legislative Jurisdictions
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Statutory Framework: RDB Act s.1(4) &amp; Commercial Courts s.2(1)(c)
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                To construct a legally sound recovery SOP below ₹20 Lakhs, institutional recovery teams must navigate the precise boundary lines defined across four primary statutes:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                  <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-600" />
                    RDB Act, 1993 — Section 1(4)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Specifies that the Act applies only where the debt due to any bank or financial institution is not less than ₹20 Lakhs (or such higher limit as notified). Section 18 completely bars the jurisdiction of civil courts for debts above ₹20 Lakhs, while leaving debts below ₹20 Lakhs entirely within civil court and arbitral jurisdiction.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                  <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    Commercial Courts Act, 2015 — Section 2(1)(c)(i)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Expressly classifies disputes arising out of <em>&ldquo;ordinary transactions of merchants, bankers, financiers and traders such as those relating to mercantile documents, including enforcement and interpretation of such documents&rdquo;</em> as Commercial Disputes.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                  <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-600" />
                    Commercial Courts Act — Specified Value Floor
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under Section 2(1)(i), the &ldquo;Specified Value&rdquo; of a commercial dispute was lowered to <strong>₹3,00,000</strong> vide the 2018 amendment. Therefore, bank debt recovery claims between ₹3,00,000 and ₹19,99,999 fall squarely within the exclusive jurisdiction of designated Commercial Courts.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                  <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    Commercial Courts Act — Section 12A Mandate
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Mandates Pre-Institution Mediation (PIM) before the District Legal Services Authority (DLSA) prior to instituting a commercial suit, unless urgent interim relief (such as asset freezing) is sought. Settlements recorded under Section 12A(3) possess the force of a final civil decree.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Understanding these thresholds creates a bifurcated recovery architecture: bank claims between <strong>₹0 and ₹3 Lakhs</strong> belong in regular Civil Courts, Lok Adalats, or Magistrate Courts (PSS Act Section 25), while claims between <strong>₹3 Lakhs and ₹20 Lakhs</strong> leverage the expedited machinery of Commercial Courts, summary judgments under Order XIII-A, and Section 12A PIM.
              </p>
            </section>

            {/* Section 3: 5 Legal Routes Outside DRT */}
            <section
              id="heading-five-routes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  3
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Remedy Evaluation
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                5 Legal Routes for Bank Loan Recovery Below ₹20 Lakhs
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Rather than treating sub-₹20 Lakh defaults as irrecoverable operational write-offs, scheduled commercial banks and NBFCs must institutionalize five distinct statutory avenues. Each route serves a specific debt corridor and evidentiary profile:
              </p>

              {/* Route 1 */}
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/60 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Route 1: Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Liquidated Debt &bull; Promissory Notes
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Order XXXVII CPC is specifically engineered for debts arising out of written loan contracts, promissory notes, and unconditional bank guarantees. In an Order XXXVII suit, the defendant-borrower does not have an automatic right to defend. Upon receipt of summons for judgment, the borrower must apply for <strong>Leave to Defend within 10 days</strong>.
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under the Supreme Court&apos;s authoritative principles in <em>IDBI Trusteeship Services Ltd. v. Hubtown Ltd. (2017)</em>, if the borrower presents a frivolous or illusory defense, the court must either pass immediate judgment in favor of the bank or mandate that the borrower deposit 50% to 100% of the loan amount into court as a condition for leave to defend. For debts between ₹3L and ₹20L, Order XXXVII operates inside the Commercial Court with summary judgment powers under Order XIII-A.
                </p>
              </div>

              {/* Route 2 */}
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/60 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Route 2: Commercial Court Suit with Section 12A Pre-Institution Mediation
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    Specified Value: ₹3L to ₹20L
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under the Commercial Courts Act, 2015, banking transactions are expressly classified as commercial disputes. Prior to filing a formal plaint, the bank initiates Pre-Institution Mediation (PIM) before the District Legal Services Authority (DLSA).
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  This statutory procedure carries three profound advantages: First, court fees are deferred. Second, the DLSA mediation process must conclude within 3 months (extendable by 2 months with consent). Third, an agreement executed under Section 12A(3) is granted the <strong>exact statutory status of a Civil Court decree</strong> under Section 96 CPC. If the debtor evades mediation, a Non-Starter Report (NSR) is issued, allowing the bank to immediately file the commercial suit with expedited Case Management Hearings under Order XV-A.
                </p>
              </div>

              {/* Route 3 */}
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/60 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Route 3: Institutional Fast-Track Arbitration (Arbitration Act, 1996)
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                    90–120 Day Binding Award &bull; CPC s.36
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Where retail credit agreements contain an arbitration clause, banks can invoke institutional fast-track arbitration under Section 29B of the Arbitration and Conciliation Act, 1996. By serving a Section 21 notice and appointing an independent sole arbitrator through a recognized institutional panel (strictly complying with the Supreme Court&apos;s anti-bias mandate in <em>Perkins Eastman</em>), banks obtain binding monetary awards in 90 to 180 days.
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 36(1) of the Act, an arbitral award is directly enforceable as a decree of the Civil Court. Banks can immediately initiate <Link href="/arbitration-personal-loan-defaults-bank-recovery-mechanism" className="text-red-600 hover:underline font-semibold">CPC Order XXI execution proceedings</Link> for attachment of the debtor&apos;s monthly salary (Order XXI Rule 48) and third-party bank accounts (Order XXI Rule 46).
                </p>
              </div>

              {/* Route 4 */}
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/60 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Route 4: Pre-Litigation Lok Adalat (Legal Services Authorities Act, 1987)
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                    0% Court Fee &bull; Final &amp; Unappealable Decree
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 20(2) of the Legal Services Authorities Act, 1987, banks can refer pre-litigation recovery claims to National Lok Adalats organized by DLSA and SLSA. There are zero court fees or stamp duty charges.
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 21 of the Act, every award of the Lok Adalat is deemed to be a decree of a Civil Court. Crucially, under Section 21(2), <strong>no appeal lies to any court</strong> against an award passed by a Lok Adalat. For high-volume Mudra, Kisan Credit Card, and personal loan portfolios, our <Link href="/law/lok-adalat-pre-litigation-money-recovery" className="text-red-600 hover:underline font-semibold">Lok Adalat pre-litigation process</Link> enables banks to secure structured OTS consent awards across hundreds of accounts in a single sitting.
                </p>
              </div>

              {/* Route 5 */}
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/60 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Route 5: Criminal Prosecution under PSS Act Section 25 &amp; NI Act Section 138
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                    Quasi-Criminal &bull; 2-Year Imprisonment &bull; 2x Penalty
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  In modern digital retail lending, over 95% of borrower EMIs are mandated via electronic National Automated Clearing House (e-NACH) or standing electronic clearing service (ECS) instructions. When an e-mandate returns unpaid due to insufficiency of funds, it triggers a criminal offence under <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSS Act)</strong>.
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Section 25 mirrors Section 138 of the Negotiable Instruments Act, 1881, providing for imprisonment up to two years or a fine up to twice the amount of the electronic funds transfer. By issuing a statutory 30-day demand notice using our <Link href="/templates/section-25-pss-act-nach-bounce-legal-notice-format" className="text-red-600 hover:underline font-semibold">Section 25 PSS Act Notice Format</Link> followed by an expedited criminal complaint, banks generate powerful psychological pressure that compels delinquent borrowers to prioritize bank repayment over other obligations.
                </p>
              </div>
            </section>

            {/* Section 4: Forum Selection Matrix Table */}
            <section
              id="heading-comparison-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  4
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Institutional Decision Matrix
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Forum Selection Matrix: Pecuniary Floor, Costs &amp; Timelines
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                The matrix below provides bank Legal Heads, Zonal Recovery Managers, and CROs with an objective statutory comparison across all five recovery forums available outside the Debt Recovery Tribunal:
              </p>

              {/* Responsive Comparison Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3.5 px-4 font-bold border-b border-slate-800">Recovery Forum</th>
                      <th className="py-3.5 px-3 font-bold border-b border-slate-800">Pecuniary Limit</th>
                      <th className="py-3.5 px-3 font-bold border-b border-slate-800">Resolution Time</th>
                      <th className="py-3.5 px-3 font-bold border-b border-slate-800">Court Fee / Cost</th>
                      <th className="py-3.5 px-3 font-bold border-b border-slate-800">Interim Asset Freeze</th>
                      <th className="py-3.5 px-3 font-bold border-b border-slate-800">Final Enforceability</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Order XXXVII CPC Summary Suit
                      </td>
                      <td className="py-3.5 px-3 text-slate-700">₹0 to ₹20 Lakhs</td>
                      <td className="py-3.5 px-3 text-slate-700">6 to 14 Months</td>
                      <td className="py-3.5 px-3 text-slate-700">State Court Fee (3%–7%)</td>
                      <td className="py-3.5 px-3 text-emerald-700 font-semibold">Yes (Order 38 Rule 5)</td>
                      <td className="py-3.5 px-3 text-slate-700">Final Civil Decree (Order 21)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/40">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Commercial Court (s.12A PIM + Suit)
                      </td>
                      <td className="py-3.5 px-3 text-slate-700">₹3 Lakhs to ₹20 Lakhs</td>
                      <td className="py-3.5 px-3 text-slate-700">3 to 8 Months</td>
                      <td className="py-3.5 px-3 text-slate-700">Modest PIM Fee; Standard Court Fee</td>
                      <td className="py-3.5 px-3 text-emerald-700 font-semibold">Yes (Urgent Relief Exception)</td>
                      <td className="py-3.5 px-3 text-slate-700">Commercial Decree / s.12A(3) Decree</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Institutional Fast-Track Arbitration
                      </td>
                      <td className="py-3.5 px-3 text-slate-700">Any Amount (Per Agreement)</td>
                      <td className="py-3.5 px-3 text-slate-700">3 to 6 Months</td>
                      <td className="py-3.5 px-3 text-slate-700">Fixed Institutional Arbitrator Fee</td>
                      <td className="py-3.5 px-3 text-emerald-700 font-semibold">Yes (Section 9 / Section 17)</td>
                      <td className="py-3.5 px-3 text-slate-700">Directly Executable Decree (s.36)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/40">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Pre-Litigation National Lok Adalat
                      </td>
                      <td className="py-3.5 px-3 text-slate-700">₹0 to ₹20 Lakhs (Ideal &lt; ₹5L)</td>
                      <td className="py-3.5 px-3 text-slate-700">1 to 2 Sittings (30–60 Days)</td>
                      <td className="py-3.5 px-3 text-emerald-700 font-bold">0% (Nil Court Fee)</td>
                      <td className="py-3.5 px-3 text-slate-400">No (Consensual Only)</td>
                      <td className="py-3.5 px-3 text-slate-700">Civil Decree (s.21, Non-Appealable)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        PSS Act s.25 / NI Act s.138
                      </td>
                      <td className="py-3.5 px-3 text-slate-700">Bounced e-NACH / Cheque Amount</td>
                      <td className="py-3.5 px-3 text-slate-700">6 to 18 Months</td>
                      <td className="py-3.5 px-3 text-slate-700">Nominal Criminal Complaint Stamp</td>
                      <td className="py-3.5 px-3 text-amber-700 font-semibold">NBW / Bail Conditions</td>
                      <td className="py-3.5 px-3 text-slate-700">Compounding / Fine / Imprisonment</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed space-y-1">
                <span className="font-bold text-slate-800">Operational Takeaway for Bank Legal Panels:</span>
                <p>
                  For loans between ₹3L and ₹20L with responsive borrowers, <strong>Section 12A Commercial Mediation</strong> delivers an enforceable decree at minimal legal expenditure. For unresponsive borrowers with arbitration covenants, <strong>Institutional Arbitration</strong> provides an ex-parte award in under 120 days. For sub-₹3L high-volume retail defaults, <strong>Pre-Litigation Lok Adalat</strong> combined with Section 25 PSS Act notice blitzes yields maximum recovery ROI.
                </p>
              </div>
            </section>

            {/* Section 5: Decision Architecture */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  5
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Workflow Architecture
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Decision Architecture: ₹0–₹3L vs ₹3L–₹20L Recovery Paths
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Bank recovery departments require an automated, programmatic decision tree to route delinquent accounts upon crossing 90 DPD (NPA classification). The statutory pathway diverges sharply based on the ₹3,00,000 Commercial Courts Specified Value threshold:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full bg-slate-900 rounded-2xl p-6 border border-slate-800 text-white">
                <div className="text-center mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-red-400">
                    Portfolio Escalation Architecture
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    B2B Sub-₹20 Lakh Forum Allocation Logic
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {/* Tier 1: Sub-3 Lakhs */}
                  <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                      <span className="text-xs font-extrabold uppercase text-amber-400">
                        Tier 1: ₹0 to ₹3,00,000
                      </span>
                      <span className="text-[10px] text-slate-400">Below Commercial Floor</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-700/80">
                        <span className="font-bold text-white block mb-0.5">Stage 1: Multi-Channel Demand Notice</span>
                        <span className="text-slate-400">30-day statutory notice under Section 25 PSS Act + Loan Recall via Speed Post RPAD &amp; WhatsApp.</span>
                      </div>
                      <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-700/80">
                        <span className="font-bold text-white block mb-0.5">Stage 2: Mass Lok Adalat Referral</span>
                        <span className="text-slate-400">Batch 50–200 accounts to DLSA for National Lok Adalat. Zero court fee, unappealable Consent Award.</span>
                      </div>
                      <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-700/80">
                        <span className="font-bold text-white block mb-0.5">Stage 3: Criminal Filing or Civil Summary</span>
                        <span className="text-slate-400">If debtor evades: File s.25 PSS Act complaint in Magistrate Court or Order XXXVII in Junior Civil Division.</span>
                      </div>
                    </div>
                  </div>

                  {/* Tier 2: 3 Lakhs to 20 Lakhs */}
                  <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                      <span className="text-xs font-extrabold uppercase text-emerald-400">
                        Tier 2: ₹3,00,000 to ₹20,00,000
                      </span>
                      <span className="text-[10px] text-slate-400">Commercial Courts Act Covered</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-700/80">
                        <span className="font-bold text-white block mb-0.5">Stage 1: Recall Notice &amp; s.21 Invocation</span>
                        <span className="text-slate-400">Formal demand notice with 15-day cure + Section 21 Arbitration Notice or Commercial PIM Notice.</span>
                      </div>
                      <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-700/80">
                        <span className="font-bold text-white block mb-0.5">Stage 2: Fast-Track Arbitral Reference</span>
                        <span className="text-slate-400">Sole arbitrator appointed through institutional roster. Ex-parte award under s.25(b) within 90–120 days.</span>
                      </div>
                      <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-700/80">
                        <span className="font-bold text-white block mb-0.5">Stage 3: Commercial Court Order XXXVII</span>
                        <span className="text-slate-400">Alternatively: File Commercial Summary Suit with s.12A NSR. Seek pre-judgment salary/account freeze.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-4">
                <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800 space-y-3">
                  <span className="text-xs font-bold text-amber-400 uppercase block">
                    Tier 1: ₹0 to ₹3 Lakh Defaults
                  </span>
                  <p className="text-xs text-slate-300">
                    1. Send Section 25 PSS Act Demand Notice within 30 days of e-mandate bounce.<br />
                    2. Refer to DLSA Pre-Litigation Lok Adalat for instant 0%-fee consent decree.<br />
                    3. If uncooperative, institute s.25 criminal complaint or Regular Civil Summary Suit.
                  </p>
                </div>
                <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800 space-y-3">
                  <span className="text-xs font-bold text-emerald-400 uppercase block">
                    Tier 2: ₹3 Lakh to ₹20 Lakh Defaults
                  </span>
                  <p className="text-xs text-slate-300">
                    1. Issue Loan Recall &amp; Section 21 Institutional Arbitration Notice.<br />
                    2. Secure ex-parte award in 90–120 days via neutral institutional panel.<br />
                    3. File Commercial Court Summary Suit (Order XXXVII) with pre-institution mediation.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 text-sm leading-relaxed">
                By standardizing this decision architecture, banks avoid the common trap of filing slow regular civil suits for small retail claims or letting larger unsecured loans languish without arbitration or commercial court filings.
              </p>
            </section>

            {/* Section 6: Scenario Playbooks Component */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  6
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Practical Scenarios
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Scenario Playbooks: 4 Retail &amp; Unsecured Default Scenarios
              </h2>

              <Sub20LakhScenarioTabs />
            </section>

            {/* Mid-Page Call-To-Action */}
            <div className="my-8">
              <Sub20LakhNoticeCTA variant="compact" />
            </div>

            {/* Section 7: Cost-to-Yield Financial Model */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  7
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Financial &amp; Recovery Economics
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Cost-to-Yield Financial Model: ₹8.5 Lakh Personal Loan NPA
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                To evaluate the economic viability of pursuing sub-₹20 Lakh bank defaults, consider a live case study of an unsecured personal loan defaulted by a senior corporate executive:
              </p>

              {/* Case Facts Ledger */}
              <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                    Default Profile Ledger
                  </span>
                  <span className="text-xs text-slate-400">Scheduled Commercial Bank NPA</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block">Principal Default:</span>
                    <span className="text-sm font-extrabold text-white">₹7,20,000</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Accumulated Interest:</span>
                    <span className="text-sm font-extrabold text-amber-400">₹1,30,000</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Total Crystallized Claim:</span>
                    <span className="text-sm font-extrabold text-white">₹8,50,000</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Aging / DPD:</span>
                    <span className="text-sm font-extrabold text-red-400">180 DPD (Loss Asset)</span>
                  </div>
                </div>
              </div>

              {/* Comparative Outcome Ledger Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="py-3 px-4 font-bold border-b border-slate-200">Enforcement Route</th>
                      <th className="py-3 px-3 font-bold border-b border-slate-200">Upfront Legal Cost</th>
                      <th className="py-3 px-3 font-bold border-b border-slate-200">Time to Decree</th>
                      <th className="py-3 px-3 font-bold border-b border-slate-200">Expected Recovery</th>
                      <th className="py-3 px-3 font-bold border-b border-slate-200">Net Recovery Yield</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Traditional Civil Suit (Regular Court)
                      </td>
                      <td className="py-3 px-3 text-red-600 font-medium">₹65,000 (Court Fee + Fees)</td>
                      <td className="py-3 px-3 text-slate-600">48–72 Months</td>
                      <td className="py-3 px-3 text-slate-700">₹3,50,000 (Distressed OTS)</td>
                      <td className="py-3 px-3 text-red-600 font-bold">33.5% Net Yield</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-slate-50/50">
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Commercial Court (s.12A + Order XXXVII)
                      </td>
                      <td className="py-3 px-3 text-slate-700 font-medium">₹38,000 (PIM + Court Fee)</td>
                      <td className="py-3 px-3 text-emerald-600 font-medium">6–10 Months</td>
                      <td className="py-3 px-3 text-slate-700">₹7,80,000 (Order 38 Freeze)</td>
                      <td className="py-3 px-3 text-emerald-600 font-bold">87.3% Net Yield</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Institutional Fast-Track Arbitration
                      </td>
                      <td className="py-3 px-3 text-slate-700 font-medium">₹25,000 (Fixed Panel Fee)</td>
                      <td className="py-3 px-3 text-emerald-600 font-medium">4–6 Months</td>
                      <td className="py-3 px-3 text-slate-700">₹8,10,000 (Order 21 Execution)</td>
                      <td className="py-3 px-3 text-emerald-600 font-bold">92.4% Net Yield</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-slate-50/50">
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Unenforced NPA (Third-Party Tele-Callers)
                      </td>
                      <td className="py-3 px-3 text-slate-500">₹12,000 (Agency Retainer)</td>
                      <td className="py-3 px-3 text-slate-500">Indefinite (Limitation Barred)</td>
                      <td className="py-3 px-3 text-slate-500">₹0 (100% Write-Off)</td>
                      <td className="py-3 px-3 text-slate-400 font-bold">-1.4% Loss</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs sm:text-sm text-emerald-900 space-y-1">
                <span className="font-bold block">Strategic Institutional Insight:</span>
                <p>
                  Deploying Institutional Arbitration or Commercial Court Section 12A proceedings converts a 100% provisioning loss into an <strong>87% to 92% net recovery yield</strong> within 180 days. Even after accounting for advocate drafting and institutional fees, the bank saves lakhs in provisioning capital and avoids write-offs.
                </p>
              </div>
            </section>

            {/* Section 8: Mandatory Evidence & BSA 2023 Section 63 */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  8
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Evidentiary Standards
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Mandatory Evidence &amp; BSA 2023 Section 63 Digital Audit Trail
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Whether filing an Order XXXVII Summary Suit in Commercial Court or submitting a Statement of Claim before a sole arbitrator, the bank&apos;s recovery claim succeeds or fails on the evidentiary compliance of its loan records under the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63)</strong> (replacing Section 65B of the Indian Evidence Act, 1872).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                    1. Digital Loan Sanction &amp; Agreement
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Signed physical loan agreement, or digital click-wrap agreement with Aadhaar e-Sign / OTP timestamp audit logs, device IP address, and Section 10A Information Technology Act certification.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                    2. Bankers&apos; Books Evidence Certification
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Certified statement of account under Section 2A of the Bankers&apos; Books Evidence Act, 1891, coupled with a BSA 2023 Section 63 certificate signed by the bank&apos;s Systems Administrator confirming database integrity.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                    3. NPCI / Bank e-NACH Return Memos
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Official return memos from the National Payments Corporation of India (NPCI) indicating the exact return code (e.g., &ldquo;Account Closed&rdquo;, &ldquo;Insufficient Funds&rdquo;) required for Section 25 PSS Act prosecution.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                    4. India Post Tracking &amp; WhatsApp Receipts
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Speed Post RPAD consignment barcodes with India Post delivery confirmation printouts, alongside verified WhatsApp blue-tick or delivery metadata proving service under Section 3 of the Arbitration Act.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 text-sm leading-relaxed">
                Our institutional desk automatically compiles these four mandatory evidentiary exhibits into an indexed statutory dossier, eliminating technical objections before commercial judges and sole arbitrators.
              </p>
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
                  Practitioner Knowledge Base
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Sub-₹20 Lakh Bank Loan Recovery
              </h2>

              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 open:bg-white open:shadow-sm transition-all duration-150"
                  >
                    <summary className="text-xs sm:text-sm font-bold text-slate-900 cursor-pointer flex items-center justify-between list-none">
                      <span className="pr-4">{faq.question}</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 shrink-0 text-base">
                        &darr;
                      </span>
                    </summary>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Bottom Primary Dual-Track CTA */}
            <div className="my-10">
              <Sub20LakhNoticeCTA variant="primary" />
            </div>

            {/* Section 10: Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  10
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Authoritative References
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                Statutory References &amp; Official Indian Legislative Enactments
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm">
                Every recovery remedy and procedural recommendation outlined on this page is governed by the following official gazettes and statutory enactments:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((source, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold shrink-0">&bull;</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-red-600 hover:underline leading-snug"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500">
                <p>
                  Editorial Notice: Authored by Anuj Anand Malik, Advocate &amp; Founder, AMA Legal Solutions. Content is engineered exclusively for scheduled commercial banks, small finance banks, cooperative lenders, and NBFC legal departments. This guide does not constitute borrower advice.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links Component */}
      <RelatedRecoveryGuides />
    </div>
  );
}
