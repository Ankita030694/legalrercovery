import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import { getB2BDelayedPaymentsReportData } from "@/data/reports/b2bDelayedPaymentsLoader";
import B2BReportTableOfContents from "./B2BReportTableOfContents";
import B2BIndustryBenchmarkExplorer from "./B2BIndustryBenchmarkExplorer";
import B2BReportDataDownload from "./B2BReportDataDownload";
import B2BReportCTA from "./B2BReportCTA";

export const revalidate = 86400;

const PAGE_PATH = "/reports/state-of-b2b-delayed-payments-commercial-recovery-india-2026";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;
const META_TITLE = "State of B2B Delayed Payments & Recovery India 2026–27";
const META_DESCRIPTION =
  "2026–27 India benchmark report comparing industry DSO, Section 43B(h) impact, and pre-litigation legal notice recovery across 25 B2B sectors.";
const EXACT_H1 =
  "Flagship Research Study: The 2026–2027 State of B2B Receivables, DSO & Pre-Litigation Legal Recovery Across 25 Indian Industries";

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
        alt: formatAltText("2026-27 State of B2B Delayed Payments and Commercial Recovery India Report"),
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
    question: "How does Section 43B(h) of the Income Tax Act change B2B payment cycles in India?",
    answer:
      "Under Section 43B(h), any sum payable by a buyer to a Micro or Small Enterprise (MSE) beyond the 15-day (no written agreement) or 45-day (written agreement) cap under Section 15 of the MSMED Act, 2006 is disallowed as a business expense in that financial year and added back to the buyer's taxable income until actually paid. For a corporate buyer in the 25.17%–30% tax bracket, delaying an MSE invoice past March 31 creates an immediate cash tax outflow.",
  },
  {
    question: "What is the statutory compound interest rate for delayed B2B payments to MSMEs in 2026–27?",
    answer:
      "Section 16 of the MSMED Act, 2006 mandates compound interest with monthly rests at three times the Bank Rate notified by the Reserve Bank of India (RBI). At an RBI Bank Rate of 6.75% per annum, the statutory compound rate stands at 20.25% per annum, compounded monthly from the appointed day regardless of any lower interest clause in the buyer's Purchase Order.",
  },
  {
    question: "When should an enterprise choose Commercial Court Section 12A mediation over IBC Section 8?",
    answer:
      "IBC Section 8 (Form 3/4) requires a minimum default threshold of ₹1 Crore under Section 4 and carries a strict 'pre-existing dispute' bar under Mobilox Innovations v. Kirusa Software. For undisputed claims between ₹3 Lakh and ₹99.99 Lakh—or where a buyer raises technical quality pretexts—Commercial Courts Act Section 12A pre-institution mediation followed by an Order XXXVII Summary Suit or Order 38 Rule 5 attachment is faster and avoids NCLT dismissal risk.",
  },
  {
    question: "Does a pre-litigation advocate legal notice sent via Email and WhatsApp hold evidentiary value?",
    answer:
      "Yes. While Speed Post RPAD establishes statutory presumption of delivery under Section 27 of the General Clauses Act, 1897, simultaneous dispatch via Email and WhatsApp paired with a Section 63(4) certificate under the Bharatiya Sakshya Adhiniyam (BSA), 2023 (Part A + Part B hash verification) prevents corporate debtors from feigning non-service in Commercial Courts and NCLT.",
  },
  {
    question: "Which Indian B2B industries face the longest statutory Days Sales Outstanding (DSO) cycles?",
    answer:
      "Cross-industry statutory mapping shows Infrastructure & EPC (RA bills and retention money), Textiles & Spinning Mills (informal mandi credits), Exporters (FEMA 9-month realization windows), and Solar/Power DISCOM contractors experience the highest working-capital lockup, often stretching 60 to 120+ days unless gated by milestone-based pre-litigation notices.",
  },
  {
    question: "Can an online mediated settlement under the Mediation Act, 2023 be executed like a court decree?",
    answer:
      "Yes. Under Sections 27 and 30 of the Mediation Act, 2023, a signed Mediated Settlement Agreement—including one concluded through Online Dispute Resolution (ODR) within the 120-day statutory cap (Section 18)—is final, binding, and directly enforceable as a decree of a civil court without filing a fresh recovery suit.",
  },
  {
    question: "How can CFOs and credit controllers test LegalRecovery.in before migrating an entire aging ledger?",
    answer:
      "Finance teams can either launch a single ₹999 advocate-drafted notice test on one overdue invoice via /user/new-recovery to benchmark debtor response times, or upload 10 to 10,000+ overdue accounts via CSV through our institutional bulk recovery desk at /bulk-recovery-cases-all-in-one-affordable-solutions.",
  },
];

export default function StateOfB2BDelayedPaymentsReportPage() {
  const reportData = getB2BDelayedPaymentsReportData();

  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const reviewerAttribution = {
    name: "Anuj Anand Malik",
    role: "Advocate & Founder, AMA Legal Solutions",
  };

  const REPORT_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Report",
    name: reportData.title,
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    datePublished: "2026-11-20T10:00:00+05:30",
    dateModified: "2026-11-20T10:00:00+05:30",
    reportNumber: reportData.id,
    author: {
      "@type": "Organization",
      name: "LegalRecovery Research Bureau",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: `${SITE_URL}/#organization`,
    },
    inLanguage: "en-IN",
    about: "B2B Delayed Payments, DSO Benchmarks, Section 43B(h), and Pre-Litigation Commercial Recovery across 25 Indian Industries",
  };

  const DATASET_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: `${reportData.title} — 25-Industry Statutory Benchmark Dataset`,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    identifier: reportData.id,
    keywords: [
      "b2b delayed payments and dso benchmarks by industry india report",
      "average b2b payment delay days india msme corporate",
      "impact of section 43bh on msme receivable days study",
      "legal notice settlement rate b2b invoices india",
      "industry wise bad debt and dso index india 2026 2027",
      "commercial court vs msme odr resolution time data",
    ],
    creator: {
      "@type": "Organization",
      name: "LegalRecovery Research Bureau",
      url: SITE_URL,
    },
    temporalCoverage: reportData.temporalCoverage,
    spatialCoverage: {
      "@type": "Place",
      name: "India",
    },
    license: "https://creativecommons.org/licenses/by-nc/4.0/",
    variableMeasured: [
      "Statutory Credit & Aging Window by Industry",
      "DSO Risk Tier",
      "Primary Recovery Statute (43B(h), MSMED s.16, IBC s.8, Commercial Courts s.12A, SARFAESI, NI s.138)",
      "Mandatory Electronic Evidence Pack (BSA 2023 s.63)",
      "Pre-Litigation Notice Cure Trigger",
    ],
  };

  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    datePublished: "2026-11-20T10:00:00+05:30",
    dateModified: "2026-11-20T10:00:00+05:30",
    mainEntityOfPage: CANONICAL_URL,
    author: {
      "@type": "Person",
      name: reviewerAttribution.name,
      jobTitle: reviewerAttribution.role,
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
    citation: reportData.sources.map((s) => s.url),
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
        name: "B2B Debt Recovery India",
        item: `${SITE_URL}/b2b-debt-recovery-india`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "2026–27 B2B Delayed Payments Report",
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(REPORT_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DATASET_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
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
              <span>CORE-26 Flagship Benchmark Report</span>
              <span>&bull;</span>
              <span>25 Indian B2B Industries</span>
              <span>&bull;</span>
              <span>2026–27 Edition</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &bull; Parent Hub:{" "}
                <Link href="/b2b-debt-recovery-india" className="underline text-white hover:text-red-300">
                  B2B Debt Recovery India
                </Link>
              </span>
              Across 25 Indian commercial sectors, Days Sales Outstanding (DSO) lockup is governed by four statutory inflection points: the 45-day{" "}
              <strong>Section 43B(h)</strong> tax-disallowance cap, <strong>20.25% p.a.</strong> monthly compound interest under MSMED Act Section 16, the{" "}
              <strong>₹3 Lakh</strong> Commercial Courts Section 12A mediation floor, and the <strong>₹1 Crore</strong> IBC Section 8 insolvency threshold.
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-100">25 Sectors</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  IND-01 to IND-25 Statutory &amp; DSO Mapping
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-emerald-400">20.25% p.a.</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  MSMED s.16 Monthly Compound Rate (3x RBI 6.75%)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-amber-400">15 / 45 Days</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  Sec 43B(h) Tax Disallowance Trigger Cap
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-red-400">10 / 15 Days</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  IBC Form 3/4 &amp; NI s.138 Statutory Cure Window
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] sm:text-xs text-slate-400">
              <span>
                Reviewed by: <strong className="text-slate-200">{reviewerAttribution.name}</strong> ({reviewerAttribution.role})
              </span>
              <span>&bull;</span>
              <span>Published: November 20, 2026</span>
              <span>&bull;</span>
              <span>Citation ID: B2B-300</span>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "B2B Debt Recovery India", href: "/b2b-debt-recovery-india" },
                { label: "Reports", href: "/reports/legal-notice-outcomes-study" },
                { label: "2026–27 B2B Delayed Payments Report", href: PAGE_PATH },
              ]}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            <B2BReportTableOfContents />

            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Executive Findings */}
              <section
                id="heading-executive-findings"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Executive Findings: Why Indian B2B Receivables Stall in 2026–27
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For Indian Chief Financial Officers (CFOs), credit controllers, and institutional lenders, commercial credit risk in 2026–2027 is no longer solely a liquidity problem—it is a structural documentation and forum-selection problem. Across the 25 commercial verticals tracked in{" "}
                  <Link href="/b2b-debt-recovery-india" className="text-[#DC2626] font-semibold hover:underline">
                    LegalRecovery.in&apos;s B2B Debt Recovery Hub
                  </Link>
                  , corporate buyers routinely exploit informal purchase orders, unverified WhatsApp delivery confirmations, and multi-year civil court backlogs to treat supplier working capital as an interest-free credit line.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  However, three converging statutory shifts have fundamentally altered creditor leverage for the 2026–2027 fiscal cycle. First, the enforcement of <strong>Section 43B(h) of the Income Tax Act, 1961</strong> turns delayed Micro and Small Enterprise (MSE) payables into an immediate corporate tax disallowance after March 31. Second, the operationalization of the <strong>Bharatiya Sakshya Adhiniyam (BSA), 2023 Section 63</strong> makes Tally/SAP ledgers, GST e-Invoices, E-Way Bills, and WhatsApp approvals directly admissible when paired with hash-verified Part A and Part B certificates. Third, the <strong>Mediation Act, 2023 (Sections 27 &amp; 30)</strong> elevates signed online mediated settlements to directly executable court decrees.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                    <p className="text-xs font-black uppercase tracking-wider text-emerald-800 mb-1">
                      Statutory Interest Arbitrage
                    </p>
                    <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                      MSE suppliers earn <strong>20.25% p.a.</strong> monthly compound interest (3x RBI Bank Rate of 6.75%) under Section 16 of the MSMED Act—far exceeding typical corporate working capital borrowing costs of 9%–12%.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                    <p className="text-xs font-black uppercase tracking-wider text-amber-800 mb-1">
                      The ₹3L &amp; ₹1Cr Cliff Effects
                    </p>
                    <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                      Claims below ₹3 Lakh bypass mandatory Section 12A Commercial Court mediation, while operational defaults crossing <strong>₹1 Crore</strong> unlock 10-day IBC Section 8 Form 3/4 insolvency pressure.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <p className="text-xs font-black uppercase tracking-wider text-[#DC2626] mb-1">
                      Pre-Litigation Cure Velocity
                    </p>
                    <p className="text-xs sm:text-sm text-slate-900 leading-relaxed">
                      As documented in our{" "}
                      <Link href="/reports/legal-notice-outcomes-study" className="text-[#DC2626] font-bold hover:underline">
                        Legal Notice Outcomes Study
                      </Link>
                      , shifting an overdue account from internal AR follow-up to an advocate-signed notice triggers boardroom legal review within 15 days.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Methodology & Scope */}
              <section
                id="heading-methodology-scope"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Research Methodology, Scope &amp; Empirical Data Boundary
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {reportData.methodology.scope}
                </p>

                <div className="bg-slate-900 text-slate-100 rounded-xl p-5 border border-slate-800 space-y-2">
                  <p className="text-xs font-black uppercase tracking-widest text-red-400">
                    Transparency &amp; Citation Boundary (Journalists &amp; Economists)
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {reportData.methodology.dataBoundary} Every statutory rate, pecuniary threshold, limitation period, and court-fee rule cited in this report is verifiable against bare acts hosted on India Code, RBI Master Directions, IBBI Regulations, and Supreme Court judgments.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="font-bold text-slate-900">1. Statutory Architecture Layer</p>
                    <p className="text-slate-600">
                      Maps each of the 25 industries (`IND-01` through `IND-25`) to its governing recovery statutes, mandatory pre-suit notice periods, and statutory interest multipliers.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="font-bold text-slate-900">2. Operational Cure &amp; Evidence Layer</p>
                    <p className="text-slate-600">
                      Standardizes industry-specific commercial proof (e.g., Weighbridge slips, Joint Meter Readings, Cashless TPA pre-auths, e-NACH return memos) under BSA 2023 Section 63.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: 25-Industry Benchmark Explorer */}
              <section
                id="heading-25-industry-index"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    The 2026–27 25-Industry B2B DSO &amp; Legal Recovery Index
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Use the interactive benchmark explorer below to filter all 25 Indian commercial sectors by industry cluster or search by statute (`43B(h)`, `IBC`, `SARFAESI`, `s.12A`, `s.138`). Selecting any row surfaces its complete evidentiary checklist and pre-litigation cure trigger.
                </p>

                <B2BIndustryBenchmarkExplorer industries={reportData.industries} />
              </section>

              {/* Section 4: Section 43B(h) Impact */}
              <section
                id="heading-section-43bh-impact"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Section 43B(h) &amp; MSMED Act s.16: The Tax-Disallowance Leverage
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The single sharpest statutory lever for manufacturing (`IND-06`), packaging (`IND-22`), textiles (`IND-13`), pharmaceuticals (`IND-04`), and staffing (`IND-11`) creditors is the combined operation of <strong>Section 15 of the MSMED Act, 2006</strong> and <strong>Section 43B(h) of the Income Tax Act, 1961</strong>. Unlike civil recovery suits that take years to reach execution, Section 43B(h) penalizes the corporate buyer&apos;s balance sheet immediately upon statutory audit (Form 3CD Clause 22).
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="py-3 px-4 font-bold">Contractual Scenario</th>
                        <th className="py-3 px-4 font-bold">Appointed Day Cap</th>
                        <th className="py-3 px-4 font-bold">Sec 43B(h) Tax Impact</th>
                        <th className="py-3 px-4 font-bold">Sec 16 Compound Interest</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="py-3 px-4 font-semibold text-slate-900">
                          No Written Credit Agreement (PO silent on days)
                        </td>
                        <td className="py-3 px-4 text-slate-700">15 Days from Acceptance</td>
                        <td className="py-3 px-4 text-red-700 font-semibold">
                          Disallowed if unpaid past 15d at FY-end
                        </td>
                        <td className="py-3 px-4 text-emerald-700 font-bold">
                          20.25% p.a. (Monthly Rests)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-slate-900">
                          Written Agreement &le; 45 Days
                        </td>
                        <td className="py-3 px-4 text-slate-700">Agreed Date (Max 45 Days)</td>
                        <td className="py-3 px-4 text-red-700 font-semibold">
                          Disallowed if unpaid past agreed date
                        </td>
                        <td className="py-3 px-4 text-emerald-700 font-bold">
                          20.25% p.a. (Monthly Rests)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-slate-900">
                          Written Agreement &gt; 45 Days (e.g., 90-Day Vendor Terms)
                        </td>
                        <td className="py-3 px-4 text-slate-700">
                          Statutory Override: Capped at 45 Days
                        </td>
                        <td className="py-3 px-4 text-red-700 font-semibold">
                          45-day cap overrides contract; disallowed
                        </td>
                        <td className="py-3 px-4 text-emerald-700 font-bold">
                          20.25% p.a. from Day 46
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-slate-900">
                          Medium Enterprise (Not Micro/Small) or Pure Trading
                        </td>
                        <td className="py-3 px-4 text-slate-700">Contractual Credit Period</td>
                        <td className="py-3 px-4 text-slate-600">
                          43B(h) Not Applicable (Use s.12A / IBC)
                        </td>
                        <td className="py-3 px-4 text-slate-700">
                          Contractual Rate / 18% Commercial Custom
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-xs sm:text-sm text-slate-600">
                  Compute exact statutory interest schedules for your overdue invoices using our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    MSME Delayed Payment Interest Calculator (3x Bank Rate)
                  </Link>
                  .
                </p>
              </section>

              {/* Section 5: Forum Resolution Data & SVG */}
              <section
                id="heading-forum-resolution-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Commercial Court vs MSME ODR vs IBC: Statutory Resolution Data
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Selecting the wrong recovery forum is the leading cause of sunken legal fees and limitation expiry. For instance, filing a Commercial Suit of ₹3 Lakh+ without first exhausting mandatory pre-institution mediation under{" "}
                  <Link
                    href="/law/section-12a-commercial-courts-act-pre-institution-mediation-guide"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Section 12A of the Commercial Courts Act, 2015
                  </Link>{" "}
                  invites <em>suo motu</em> rejection of the plaint under <em>Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.</em> (2022) unless urgent interim relief (such as Order 38 Rule 5 attachment) is genuinely pleaded under <em>Yamini Manohar</em>. Conversely, serving an{" "}
                  <Link
                    href="/law/ibc-section-8-demand-notice-form-3-form-4-operational-creditor"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    IBC Section 8 Demand Notice
                  </Link>{" "}
                  on an invoice with an existing quality email dispute risks dismissal under <em>Mobilox Innovations</em>.
                </p>

                {/* Desktop SVG Statutory Timeline Chart */}
                <div className="hidden md:block bg-slate-900 rounded-2xl p-6 border border-slate-800">
                  <p className="text-xs font-black uppercase tracking-widest text-red-400 mb-4">
                    Statutory Action &amp; Resolution Windows (Days)
                  </p>
                  <svg
                    width="760"
                    height="260"
                    viewBox="0 0 760 260"
                    className="w-full h-auto"
                    role="img"
                    aria-label="Comparison of statutory cure and resolution timelines across Indian B2B legal forums"
                  >
                    <rect x="0" y="0" width="760" height="260" fill="#0F172A" rx="12" />
                    {/* Row 1 */}
                    <text x="16" y="38" fill="#E2E8F0" fontSize="12" fontWeight="700">
                      IBC Sec 8 Demand Notice (₹1 Cr+)
                    </text>
                    <rect x="270" y="24" width="60" height="20" fill="#DC2626" rx="4" />
                    <text x="340" y="38" fill="#FCA5A5" fontSize="11" fontWeight="700">
                      10 Days Cure / Dispute Window
                    </text>

                    {/* Row 2 */}
                    <text x="16" y="78" fill="#E2E8F0" fontSize="12" fontWeight="700">
                      NI Act s.138 / PSS s.25 Notice
                    </text>
                    <rect x="270" y="64" width="90" height="20" fill="#EA580C" rx="4" />
                    <text x="370" y="78" fill="#FDBA74" fontSize="11" fontWeight="700">
                      15 Days Statutory Notice Cure
                    </text>

                    {/* Row 3 */}
                    <text x="16" y="118" fill="#E2E8F0" fontSize="12" fontWeight="700">
                      MSMED s.15 / s.43B(h) Cap
                    </text>
                    <rect x="270" y="104" width="160" height="20" fill="#D97706" rx="4" />
                    <text x="440" y="118" fill="#FDE68A" fontSize="11" fontWeight="700">
                      15–45 Days Maximum Credit Cap
                    </text>

                    {/* Row 4 */}
                    <text x="16" y="158" fill="#E2E8F0" fontSize="12" fontWeight="700">
                      MSME MSEFC Reference (s.18)
                    </text>
                    <rect x="270" y="144" width="260" height="20" fill="#059669" rx="4" />
                    <text x="540" y="158" fill="#6EE7B7" fontSize="11" fontWeight="700">
                      90 Days Statutory Disposal Target
                    </text>

                    {/* Row 5 */}
                    <text x="16" y="198" fill="#E2E8F0" fontSize="12" fontWeight="700">
                      Mediation Act 2023 Online ODR
                    </text>
                    <rect x="270" y="184" width="320" height="20" fill="#0284C7" rx="4" />
                    <text x="600" y="198" fill="#7DD3FC" fontSize="11" fontWeight="700">
                      120 Days Max (s.18)
                    </text>

                    {/* Row 6 */}
                    <text x="16" y="238" fill="#E2E8F0" fontSize="12" fontWeight="700">
                      Commercial Court s.12A (₹3L+)
                    </text>
                    <rect x="270" y="224" width="380" height="20" fill="#475569" rx="4" />
                    <text x="660" y="238" fill="#CBD5E1" fontSize="11" fontWeight="700">
                      3+2 Mos
                    </text>
                  </svg>
                </div>

                {/* Forum Comparison Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="py-3 px-3 font-bold">Recovery Forum / Mechanism</th>
                        <th className="py-3 px-3 font-bold">Pecuniary Floor</th>
                        <th className="py-3 px-3 font-bold">Statutory Window</th>
                        <th className="py-3 px-3 font-bold">Cost / Fee Profile</th>
                        <th className="py-3 px-3 font-bold">Primary Creditor Advantage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {reportData.forumBenchmarks.map((f, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="py-3 px-3 font-bold text-slate-900">{f.forum}</td>
                          <td className="py-3 px-3 text-slate-700">{f.pecuniaryFloor}</td>
                          <td className="py-3 px-3 font-semibold text-[#DC2626]">{f.statutoryWindow}</td>
                          <td className="py-3 px-3 text-slate-700">{f.costProfile}</td>
                          <td className="py-3 px-3 text-slate-700">{f.primaryAdvantage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex flex-wrap gap-3 pt-1 text-xs">
                  <Link
                    href="/tools/b2b-debt-recovery-legal-forum-selector"
                    className="px-4 py-2 rounded-lg font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                  >
                    Run B2B Forum Selector Tool &rarr;
                  </Link>
                  <Link
                    href="/tools/commercial-court-specified-value-fee-interest-calculator"
                    className="px-4 py-2 rounded-lg font-bold border border-slate-300 text-slate-800 hover:bg-slate-100 transition-colors"
                  >
                    Calculate State Court Fees &rarr;
                  </Link>
                </div>
              </section>

              {/* Section 6: Pre-Litigation Legal Notice Cure Mechanics */}
              <section
                id="heading-pre-litigation-mechanics"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Pre-Litigation Legal Notice Cure Mechanics &amp; Multi-Channel Service
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Across all 25 industries, internal accounts-receivable (AR) reminders fail because corporate debtors route vendor emails to junior procurement desks. A formal advocate-signed notice bypasses procurement and lands directly on the Company Secretary, General Counsel, and Managing Director—creating statutory audit and personal liability exposure.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#DC2626]">
                      Stage 1 &bull; Days 1–15
                    </span>
                    <p className="text-sm font-bold text-slate-900">Statutory Service &amp; Audit Trigger</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Simultaneous dispatch via{" "}
                      <Link
                        href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                        className="text-[#DC2626] font-semibold hover:underline"
                      >
                        Email, WhatsApp &amp; Speed Post RPAD
                      </Link>{" "}
                      locks Section 27 General Clauses presumption and triggers 10-day (IBC) or 15-day (NI s.138) cure clocks.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-amber-700">
                      Stage 2 &bull; Days 16–30
                    </span>
                    <p className="text-sm font-bold text-slate-900">Counsel-to-Counsel Negotiation</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Debtors facing Section 43B(h) disallowance or Section 138 director summons initiate structured installment plans or online Mediation Act s.27 settlements.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-700">
                      Stage 3 &bull; Days 31–60
                    </span>
                    <p className="text-sm font-bold text-slate-900">Decisive Statutory Escalation</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Unresolved defaults escalate seamlessly to MSEFC (s.18), Commercial Court Form-1 (s.12A), or NCLT (s.9) using the same{" "}
                      <Link
                        href="/templates/ibc-section-8-form-3-form-4-demand-notice-editable-pack"
                        className="text-[#DC2626] font-semibold hover:underline"
                      >
                        advocate-vetted notice pack
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: BSA 2023 s.63 Evidence Audit */}
              <section
                id="heading-evidence-bsa-s63"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    BSA 2023 Section 63 Electronic Evidence Audit Across ERP &amp; GST
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the Bharatiya Sakshya Adhiniyam (BSA), 2023, Section 63 replaced Section 65B of the Indian Evidence Act and introduced a mandatory two-part Schedule: <strong>Part A</strong> (signed by the person in lawful control of the Tally/SAP server, email client, or WhatsApp device) and <strong>Part B</strong> (signed by an expert certifying the SHA-256 or MD5 cryptographic hash value of the electronic record).
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Creditors pursuing{" "}
                  <Link
                    href="/recovery-of-unpaid-dues-for-my-business"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    commercial business recovery
                  </Link>{" "}
                  must preserve five core digital records before serving a demand notice: (1) GST e-Invoice &amp; IRN JSON, (2) E-Way Bill &amp; GPS/FASTag transit logs, (3) ERP Ledger Statement with opening/closing balances, (4) WhatsApp/Email UAT or quality sign-offs, and (5) a{" "}
                  <Link
                    href="/law/bsa-section-63-electronic-evidence-certificate-tally-erp-whatsapp-b2b"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    BSA Section 63 Hash-Verified Certificate
                  </Link>
                  .
                </p>
              </section>

              {/* Section 8: Worked CFO DSO & Cost Model */}
              <section
                id="heading-worked-dso-economics"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Worked CFO Model: Cost of 120-Day DSO vs Pre-Litigation Recovery
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-3">
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-400">
                      Illustration A &bull; ₹50 Lakh MSE Manufacturing Invoice (IND-06)
                    </span>
                    <ul className="text-xs sm:text-sm space-y-2 text-slate-200">
                      <li>&bull; <strong>Principal Due:</strong> ₹50,00,000 (90 days past 45-day cap)</li>
                      <li>&bull; <strong>Statutory Interest (s.16 @ 20.25%):</strong> ~₹2,53,000 accrued in 90 days</li>
                      <li>&bull; <strong>Buyer Tax Hit (s.43B(h) @ 25.17%):</strong> ₹12,58,500 immediate FY cash tax</li>
                      <li>&bull; <strong>Pre-Litigation Notice Cost:</strong> ₹999 (Single) vs ₹1.5L+ Litigation</li>
                    </ul>
                  </div>

                  <div className="bg-emerald-50 text-slate-900 rounded-2xl p-5 border border-emerald-200 space-y-3">
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800">
                      Illustration B &bull; 500-Account NBFC / Distributor Portfolio
                    </span>
                    <ul className="text-xs sm:text-sm space-y-2 text-slate-800">
                      <li>&bull; <strong>Traditional Retainer Litigation:</strong> ₹15,000–₹25,000 per case</li>
                      <li>&bull; <strong>Bulk Multi-Channel Notice Desk:</strong> Standardized CSV ingestion</li>
                      <li>&bull; <strong>Service Proof:</strong> Automated BSA s.63 + RPAD tracking logs</li>
                      <li>&bull; <strong>Escalation:</strong> Only non-curing accounts proceed to ODR / s.138</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 9: Dataset & Citation */}
              <section id="heading-dataset-citation" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Download Open-Access Dataset &amp; Press Citations
                  </h2>
                </div>
                <B2BReportDataDownload
                  industries={reportData.industries}
                  forums={reportData.forumBenchmarks}
                  lastUpdated={reportData.lastUpdated}
                />
              </section>

              {/* Dual-Track B2B Conversion CTA */}
              <section className="pt-2">
                <B2BReportCTA />
              </section>

              {/* Section 10: FAQs */}
              <section id="heading-faqs" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Frequently Asked Questions: 2026–27 B2B Recovery Benchmarks
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-5 shadow-xs open:border-[#DC2626]/40"
                    >
                      <summary className="list-none cursor-pointer flex items-start justify-between gap-3 font-bold text-sm sm:text-base text-slate-900">
                        <span className="flex items-start gap-2.5">
                          <span className="text-[#DC2626] font-black shrink-0">Q{idx + 1}.</span>
                          <span>{faq.question}</span>
                        </span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform shrink-0">
                          ▾
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed pl-7">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Statutory Sources */}
              <section id="heading-sources" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Primary Statutory Authorities &amp; Government Portals
                  </h2>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {reportData.sources.map((src, idx) => (
                    <li key={idx}>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-[#DC2626] flex items-center justify-between group transition-all text-xs font-semibold text-slate-800 shadow-xs"
                      >
                        <span className="truncate pr-2 group-hover:text-[#DC2626] transition-colors">
                          {src.title}
                        </span>
                        <span className="text-[#DC2626] shrink-0 font-bold">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </main>

        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
