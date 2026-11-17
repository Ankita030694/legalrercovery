import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import { getExporterDefaultsReportData } from "@/data/reports/exporterDefaultsReportLoader";
import ExporterReportTableOfContents from "./ExporterReportTableOfContents";
import ExporterReportScenarioTabs from "./ExporterReportScenarioTabs";
import ExporterReportDataDownload from "./ExporterReportDataDownload";
import ExporterReportCTA from "./ExporterReportCTA";

export const revalidate = 86400;

const PAGE_URL = "/reports/indian-exporter-payment-defaults-edpms-trends-report";
const META_TITLE = "India Export Payment Defaults & EDPMS Report (2026–27)";
const META_DESCRIPTION =
  "Study for FIEO, EEPC, APEDA & AEPC exporters mapping buyer default corridors, BEC wire-fraud, CAD/DA risk & RBI EDPMS write-off recovery benchmarks.";

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
        alt: formatAltText(META_TITLE),
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
    question:
      "Why does an unpaid export invoice trigger RBI EDPMS Caution-Listing even when the Indian exporter is the victim?",
    answer:
      "Under the Foreign Exchange Management Act (FEMA), 1999 and the RBI Master Direction on Export of Goods and Services, every ICEGATE Shipping Bill must be matched against an Inward Remittance Message (IRM) in the Export Data Processing and Monitoring System (EDPMS) within 9 months of shipment. If an overseas buyer defaults and the AD Category-I Bank receives neither foreign exchange nor a formal extension/write-off dossier, the exporter's IEC is flagged on the RBI Caution List—blocking packing credit, e-BRC issuance, and RoDTEP/Drawback incentives.",
  },
  {
    question:
      "How does an Advocate Legal Demand Notice unlock RBI EDPMS Para C.20 / C.24 write-off?",
    answer:
      "RBI Master Direction Para C.20 and C.24 permit AD Category-I Banks to write off unrealized export bills (within the 5% normal / 10% Status Holder self-write-off limits, or above limits with bank approval) only when the exporter proves that genuine recovery steps were taken and foreign litigation is commercially disproportionate. A formal Advocate Legal Demand Notice backed by BSA 2023 s.63 delivery logs and a Disproportionate Foreign Litigation Cost Opinion satisfies the bank's FEMA audit checklist.",
  },
  {
    question:
      "Which payment term carries the highest recovery risk for Indian MSME exporters: Open Account, CAD/DP, or DA?",
    answer:
      "Unsecured Open Account (30–120 days) carries the highest structural risk because title and physical possession pass to the foreign buyer before payment, enabling opportunistic quality deductions or insolvency walkaways. However, CAD/DP (Documents Against Payment) poses acute port-demurrage exposure when buyers refuse to retire documents at destination ports like Jebel Ali, Lagos, or Rotterdam, causing container charges to exceed cargo value within weeks.",
  },
  {
    question:
      "Can an Indian court decree be enforced directly in the UAE, UK, Singapore, or the USA?",
    answer:
      "Yes in reciprocating territories notified under Section 44A of the Code of Civil Procedure, 1908—specifically the UAE (notified in 2020), the UK, and Singapore—where certified Indian Civil/Commercial Court decrees are directly executable without re-litigating the merits. The USA is NOT a Section 44A reciprocating territory, so exporters trading with US buyers should incorporate India-seated arbitration clauses enforceable under the 1958 New York Convention.",
  },
  {
    question:
      "What happens when a foreign buyer pays a hacker due to Business Email Compromise (BEC) invoice hijacking?",
    answer:
      "Under settled common-law and international commercial principles, a debtor's payment to an unauthorized fraudster does not discharge the underlying contractual debt unless the exporter's own negligence directly caused the misdirection. Exporters must immediately initiate a 72-hour SWIFT GPI recall through their AD Bank, file a Cyber Crime FIR/CERT-In report, and serve a formal Advocate Liability Notice on the buyer while preserving DKIM/SPF email headers under BSA 2023 s.63.",
  },
  {
    question:
      "How does ECGC insurance interact with pre-litigation legal notices and Customs Drawback Rule 18(2)?",
    answer:
      "Under ECGC standard policies, exporters must report overdue bills via Form 203/205 within prescribed timelines and demonstrate active recovery demand before filing a 4-month protracted default claim. Crucially, under Rule 18(2) of the Customs Drawback Rules, 2017 and Section 75 of the Customs Act, an ECGC claim settlement or an AD-Bank RBI write-off acts as a statutory safe harbor protecting the exporter against Duty Drawback and RoDTEP clawback demands.",
  },
  {
    question:
      "What is the cost difference between a LegalRecovery.in international demand notice and foreign commercial litigation?",
    answer:
      "An advocate-drafted international demand notice on LegalRecovery.in costs ₹999 flat via verified Email + WhatsApp under BSA 2023 s.63 (or ₹1,449 with Speed Post RPAD), with bulk CSV pricing for export houses managing 10 to 10,000+ open Shipping Bills. By contrast, retaining local counsel in the US, EU, or GCC for a single commercial suit typically requires ₹4,00,000 to ₹15,00,000+ upfront—making pre-litigation demand notices essential for both settlement leverage and RBI Para C.24 write-off compliance.",
  },
  {
    question:
      "Can FIEO, EEPC, APEDA, and other Export Promotion Councils cite and download this dataset?",
    answer:
      "Yes. This report and its Schema.org/Dataset specification (B2B-189) are published under CC BY-NC 4.0 for India's 14 Export Promotion Councils, trade journalists, export CFOs, and banking compliance desks, complete with one-click JSON schema export and APA/BibTeX citations.",
  },
];

export default function ExporterDefaultsEdpmsReportPage() {
  const studyData = getExporterDefaultsReportData();
  const canonicalUrl = `${SITE_URL}${PAGE_URL}`;

  // TODO(reviewer): src/data/reviewers.ts is absent in this repository; retain inline advocate attribution.
  const REPORT_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Report",
    name: studyData.h1,
    headline: studyData.h1,
    description: META_DESCRIPTION,
    url: canonicalUrl,
    reportNumber: studyData.reportId,
    datePublished: "2026-11-17T10:00:00+05:30",
    dateModified: "2026-11-17T10:00:00+05:30",
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
    },
    inLanguage: "en-IN",
    about: {
      "@type": "Thing",
      name: "Indian Export Payment Defaults, Trade Corridor Risk & RBI EDPMS Closure Benchmarks",
    },
  };

  const DATASET_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: studyData.title,
    description: META_DESCRIPTION,
    url: canonicalUrl,
    identifier: studyData.reportId,
    keywords: [
      "indian export payment default and edpms caution list statistics",
      "high risk export payment default corridors india",
      "open account vs da dp vs lc default rates indian exporters",
      "average recovery rate cross border legal demand india",
      "sme exporter edpms write off bottlenecks study",
      "bec swift fraud losses indian msme exporters",
    ],
    creator: {
      "@type": "Organization",
      name: "LegalRecovery Research Bureau",
      url: SITE_URL,
    },
    temporalCoverage: "2026-05-25/2026-11-17",
    spatialCoverage: {
      "@type": "Place",
      name: "India",
    },
    variableMeasured: [
      "Payment Term Vulnerability (Open Account, CAD/DP, Usance DA, Letter of Credit, BEC)",
      "Trade Corridor Enforcement Path (CPC s.44A Reciprocating vs New York Convention)",
      "RBI FEMA 9-Month Repatriation Clock & Para C.20/C.24 Write-Off Eligibility",
      "Pre-Litigation Notice Unit Economics (INR 999 Digital vs Foreign Litigation Retainer)",
    ],
    distribution: [
      {
        "@type": "DataDownload",
        encodingFormat: "application/json",
        contentUrl: `${canonicalUrl}#dataset-download-citation`,
      },
    ],
  };

  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: studyData.h1,
    description: META_DESCRIPTION,
    datePublished: "2026-11-17T10:00:00+05:30",
    dateModified: "2026-11-17T10:00:00+05:30",
    mainEntityOfPage: canonicalUrl,
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
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
    citation: studyData.sources.map((s) => s.url),
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
        name: "Exporters & Cross-Border Trade Recovery",
        item: `${SITE_URL}/industries/exporters-cross-border-trade-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Export Payment Defaults & EDPMS Report",
        item: canonicalUrl,
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

  const breadcrumbItems = [
    {
      label: "Exporters & Trade Recovery",
      href: "/industries/exporters-cross-border-trade-recovery",
    },
    { label: "Export Defaults & EDPMS Report", href: PAGE_URL },
  ];

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>Empirical EPC Benchmark</span>
              <span>•</span>
              <span>IND-15 Cross-Border Trade</span>
              <span>•</span>
              <span>2026–2027 Edition</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {studyData.h1}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div
              aria-label="Executive Creditor Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Exporter Answer &bull; B2B-189
              </span>
              <p>
                Indian exporters face a three-front crisis when an overseas buyer defaults: lost foreign exchange, RBI EDPMS Caution-Listing past the 9-month FEMA clock, and Customs Duty Drawback/RoDTEP clawbacks. Built as the empirical companion to our{" "}
                <Link
                  href="/industries/exporters-cross-border-trade-recovery"
                  className="text-red-300 underline decoration-red-400/60 hover:text-white font-bold"
                >
                  Exporters &amp; Cross-Border Trade Recovery Hub
                </Link>
                , this study benchmarks payment-term risk (Open Account vs. CAD/DP vs. DA vs. LC), corridor enforcement under CPC s.44A, BEC wire-fraud response, and Para C.24 EDPMS write-off compliance for FIEO, EEPC, APEDA, CHEMEXCIL, and AEPC members.
              </p>
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                  9 Months
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  FEMA Export Realization Window
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                  5% / 10%
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  RBI Para C.24 Write-Off Caps
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                  ₹999
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Flat Advocate Demand Notice
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                  72 Hours
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  BEC SWIFT GPI Recall Window
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar TOC */}
            <ExporterReportTableOfContents />

            {/* Right Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Executive Summary */}
              <section
                id="executive-summary"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Executive Summary: India&apos;s Export Receivables &amp; EDPMS Crisis
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For Indian merchant exporters, manufacturing export houses, and buying agencies across India&apos;s 14 Export Promotion Councils (EPCs)—including FIEO, EEPC India, APEDA, TEXPROCIL, AEPC, CHEMEXCIL, PHARMEXCIL, and GJEPC—an overseas buyer default is never merely a commercial bad debt. The moment an ICEGATE Shipping Bill crosses the <strong>9-month statutory realization deadline</strong> under the Foreign Exchange Management (Export of Goods &amp; Services) Regulations, the exporter&apos;s AD Category-I Bank flags the unmatched bill inside the Reserve Bank of India&apos;s <strong>Export Data Processing and Monitoring System (EDPMS)</strong>.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Unlike domestic B2B defaults where a supplier can passively write off a bad debt in its P&amp;L account, an Indian exporter cannot unilaterally close an open Shipping Bill. Without an Inward Remittance Message (IRM), an approved AD-Bank extension, or a legally compliant write-off dossier under <strong>RBI Master Direction Para C.20, C.23, and C.24</strong>, the exporter faces automatic <strong>EDPMS Caution-Listing</strong>, suspension of Export Packing Credit (EPC/PCFC), refusal of e-BRC issuance by DGFT, and Customs Show Cause Notices under <strong>Section 75 of the Customs Act, 1962</strong> demanding repayment of Duty Drawback and RoDTEP scrips with interest.
                </p>

                <div className="p-4 sm:p-5 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed">
                  <strong className="font-bold block mb-1 text-amber-900">
                    Transparency &amp; Live Cohort Notice (May 25, 2026 – Present):
                  </strong>
                  This 2026–2027 benchmark report pairs verified RBI FEMA, ECGC, ICC UCP 600, and Customs Drawback statutory timelines with LegalRecovery.in&apos;s flat-rate pre-litigation unit economics. Live post-May 2026 cross-border cohort telemetry is currently in active ingestion (`status: &quot;compiling&quot;`); zero unverified survey percentages are fabricated. Use our{" "}
                  <Link
                    href="/tools/softex-fema-export-realization-deadline-calculator"
                    className="font-bold text-[#DC2626] underline hover:text-[#B91C1C]"
                  >
                    RBI FEMA 9-Month Export Realization &amp; Write-Off Calculator
                  </Link>{" "}
                  to audit aging Shipping Bills immediately.
                </div>
              </section>

              {/* Section 2: Payment Term Risk Matrix */}
              <section
                id="payment-term-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Payment Term Risk Matrix: Open Account vs. CAD vs. DA vs. LC
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Export receivables risk in India is heavily concentrated by payment instrument. As global buyers in the US, EU, and GCC push Indian suppliers away from Confirmed Letters of Credit toward 60–120 day Open Account and Documents Against Acceptance (DA) terms, the legal leverage shifts sharply depending on who holds the original Bill of Lading and whether a negotiable instrument exists.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 font-bold">Payment Term</th>
                        <th className="p-3.5 font-bold">Risk Tier</th>
                        <th className="p-3.5 font-bold">Primary Default Mechanism</th>
                        <th className="p-3.5 font-bold">Statutory &amp; Trade Lever</th>
                        <th className="p-3.5 font-bold">EDPMS &amp; Cost Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {studyData.paymentTerms.map((row) => (
                        <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900 whitespace-nowrap">
                            {row.term}
                          </td>
                          <td className="p-3.5">
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-50 text-[#DC2626] border border-red-200">
                              {row.riskTier}
                            </span>
                          </td>
                          <td className="p-3.5 text-slate-700">{row.primaryVulnerability}</td>
                          <td className="p-3.5 text-slate-700">{row.statutoryLever}</td>
                          <td className="p-3.5 font-semibold text-slate-900">
                            {row.edpmsImpact}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For cargo stranded at destination ports under CAD/DP terms, review our dedicated operational SOP on{" "}
                  <Link
                    href="/foreign-buyer-not-retiring-cad-dp-documents-abandoned-container-port"
                    className="font-bold text-[#DC2626] underline"
                  >
                    Foreign Buyer Not Retiring CAD/DP Documents &amp; Abandoned Container Port Mitigation
                  </Link>
                  . For wrongful bank refusals on compliant presentations, see{" "}
                  <Link
                    href="/letter-of-credit-lc-wrongful-discrepancy-dishonour-ucp-600-recovery"
                    className="font-bold text-[#DC2626] underline"
                  >
                    ICC UCP 600 Letter of Credit Discrepancy &amp; Dishonour Recovery
                  </Link>
                  .
                </p>
              </section>

              {/* Section 3: Trade Corridor Risk */}
              <section
                id="trade-corridor-risk"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Trade Corridor Risk Profiling: US, EU, GCC, Africa &amp; LatAm
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Cross-border recovery strategy cannot be uniform across jurisdictions. Whether an Indian exporter can convert a domestic Commercial Court decree into an asset freeze abroad depends directly on whether the destination country is a notified <strong>Reciprocating Territory under Section 44A of the Code of Civil Procedure, 1908</strong>, or requires a New York Convention arbitral award.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {studyData.tradeCorridors.map((c, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-base font-extrabold text-slate-900">
                          {c.corridor}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-900 text-white">
                          Corridor {idx + 1}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600">
                        <strong className="text-slate-900">Key EPC Sectors:</strong>{" "}
                        {c.keySectors}
                      </p>
                      <p className="text-xs text-slate-700">
                        <strong className="text-slate-900">Failure Mode:</strong>{" "}
                        {c.dominantFailureMode}
                      </p>
                      <p className="text-xs text-emerald-900 bg-emerald-50 border border-emerald-200 p-2.5 rounded-lg">
                        <strong>Enforcement Path:</strong> {c.enforcementPath}
                      </p>
                      <p className="text-xs text-amber-900 bg-amber-50 border border-amber-200 p-2.5 rounded-lg">
                        <strong>EDPMS Risk:</strong> {c.edpmsRisk}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Deep-dive jurisdiction rules are mapped in our{" "}
                  <Link
                    href="/enforcing-indian-court-decree-arbitral-award-uae-uk-usa-singapore"
                    className="font-bold text-[#DC2626] underline"
                  >
                    Cross-Border Enforcement Matrix: Enforcing Indian Decrees &amp; Arbitral Awards in UAE, UK, USA &amp; Singapore
                  </Link>
                  .
                </p>
              </section>

              {/* Section 4: Visual Workflow SVG */}
              <section
                id="edpms-closure-architecture"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Export Risk-to-EDPMS Closure Architecture (Visual Workflow)
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A structured pre-litigation demand workflow serves two simultaneous institutional objectives: it pressures the overseas buyer into immediate wire settlement (or container clearance), and if the buyer is insolvent or unresponsive, it generates the exact documentary audit trail demanded by AD Category-I Banks and ECGC.
                </p>

                {/* Desktop SVG Diagram */}
                <div className="hidden md:block overflow-x-auto bg-slate-900 rounded-2xl p-6 border border-slate-800">
                  <svg
                    width="880"
                    height="220"
                    viewBox="0 0 880 220"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="4-stage export default recovery and RBI EDPMS closure architecture"
                    className="w-full h-auto"
                  >
                    <rect x="10" y="25" width="190" height="165" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="26" y="54" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 1 (DAY 1–30)</text>
                    <text x="26" y="78" fill="#FFFFFF" fontSize="14" fontWeight="bold">Shipping Bill &amp; BSA</text>
                    <text x="26" y="96" fill="#FFFFFF" fontSize="14" fontWeight="bold">Dossier Lock</text>
                    <text x="26" y="124" fill="#CBD5E1" fontSize="11">• BL / AWB + ICEGATE SB</text>
                    <text x="26" y="142" fill="#CBD5E1" fontSize="11">• SWIFT / BEC Header Audit</text>
                    <text x="26" y="160" fill="#CBD5E1" fontSize="11">• ECGC Form 203/205 Alert</text>

                    <path d="M205 107 L232 107" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
                    <polygon points="232,102 242,107 232,112" fill="#DC2626" />

                    <rect x="242" y="25" width="190" height="165" rx="14" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                    <text x="258" y="54" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 2 (₹999 DEMAND)</text>
                    <text x="258" y="78" fill="#FFFFFF" fontSize="14" fontWeight="bold">Advocate Cross-Border</text>
                    <text x="258" y="96" fill="#FFFFFF" fontSize="14" fontWeight="bold">Legal Notice</text>
                    <text x="258" y="124" fill="#CBD5E1" fontSize="11">• UN CISG / UCP 600 Citation</text>
                    <text x="258" y="142" fill="#CBD5E1" fontSize="11">• Email + WhatsApp BSA s.63</text>
                    <text x="258" y="160" fill="#CBD5E1" fontSize="11">• 15-Day Cure Deadline</text>

                    <path d="M437 107 L464 107" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
                    <polygon points="464,102 474,107 464,112" fill="#DC2626" />

                    <rect x="474" y="25" width="190" height="165" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="490" y="54" fill="#34D399" fontSize="11" fontWeight="bold">STAGE 3 (OUTCOME A)</text>
                    <text x="490" y="78" fill="#FFFFFF" fontSize="14" fontWeight="bold">Wire Settlement or</text>
                    <text x="490" y="96" fill="#FFFFFF" fontSize="14" fontWeight="bold">Port Resale / ECGC</text>
                    <text x="490" y="124" fill="#CBD5E1" fontSize="11">• Nostro IRM Matches SB</text>
                    <text x="490" y="142" fill="#CBD5E1" fontSize="11">• e-BRC Auto-Generated</text>
                    <text x="490" y="160" fill="#CBD5E1" fontSize="11">• ECGC 4-Mo Claim Filed</text>

                    <path d="M669 107 L696 107" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                    <polygon points="696,102 706,107 696,112" fill="#FBBF24" />

                    <rect x="706" y="25" width="164" height="165" rx="14" fill="#1E293B" stroke="#FBBF24" strokeWidth="1.5" />
                    <text x="720" y="54" fill="#FBBF24" fontSize="11" fontWeight="bold">STAGE 4 (OUTCOME B)</text>
                    <text x="720" y="78" fill="#FFFFFF" fontSize="14" fontWeight="bold">EDPMS Para C.24</text>
                    <text x="720" y="96" fill="#FFFFFF" fontSize="14" fontWeight="bold">Write-Off &amp; Shield</text>
                    <text x="720" y="124" fill="#CBD5E1" fontSize="11">• Futile Recovery Opinion</text>
                    <text x="720" y="142" fill="#CBD5E1" fontSize="11">• AD-Bank SB Closure</text>
                    <text x="720" y="160" fill="#CBD5E1" fontSize="11">• Drawback Rule 18(2) Safe</text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="grid grid-cols-1 gap-3 md:hidden">
                  {[
                    {
                      step: "Stage 1 (Day 1–30)",
                      title: "Shipping Bill & BSA Dossier Lock",
                      desc: "Compile BL/AWB, ICEGATE Shipping Bill, SWIFT headers, and ECGC Form 203/205 overdue alert.",
                    },
                    {
                      step: "Stage 2 (₹999 Demand)",
                      title: "Advocate Cross-Border Legal Notice",
                      desc: "Serve formal UN CISG / UCP 600 demand via verified Email + WhatsApp (BSA s.63) with a 15-day cure window.",
                    },
                    {
                      step: "Stage 3 (Outcome A)",
                      title: "Wire Settlement, Port Resale or ECGC Claim",
                      desc: "Match inward remittance IRM to close EDPMS, generate e-BRC, or perfect 4-month ECGC protracted default claim.",
                    },
                    {
                      step: "Stage 4 (Outcome B)",
                      title: "EDPMS Para C.24 Write-Off & Drawback Shield",
                      desc: "Submit Advocate Notice + Disproportionate Cost Opinion to AD Bank to close Shipping Bill & invoke Rule 18(2) immunity.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-900 text-white space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                        {item.step}
                      </span>
                      <p className="text-sm font-bold">{item.title}</p>
                      <p className="text-xs text-slate-300">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 5: RBI EDPMS Caution-Listing & Para C.24 */}
              <section
                id="edpms-caution-list-bottlenecks"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    RBI EDPMS Caution-Listing &amp; Para C.24 Write-Off Bottlenecks
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Thousands of compliant Indian exporters are not even expecting cash recovery from a bankrupt overseas buyer—they urgently need to clear aged Shipping Bills in RBI EDPMS so their working capital lines and DGFT incentives remain unblocked. Under <strong>RBI Master Direction on Export of Goods and Services (Para C.20, C.23, and C.24)</strong>, an exporter may self-write off up to <strong>5%</strong> of total export proceeds realized during the previous calendar year (<strong>10%</strong> for Status Holders), while AD Category-I Banks may approve write-offs up to 10% (or higher with documentary justification) subject to strict conditions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2">
                    <p className="font-extrabold text-[#DC2626]">
                      Why AD Banks Reject Informal Exporter Write-Off Requests
                    </p>
                    <ul className="list-disc pl-4 space-y-1.5 text-slate-800">
                      <li>Exporter submits only internal sales-team emails chasing payment, which fail RBI FEMA audit scrutiny.</li>
                      <li>Missing proof that legal recovery in the buyer&apos;s jurisdiction (e.g., Delaware, London, Dubai) costs more than the unrealized invoice.</li>
                      <li>Failure to show ECGC claim rejection/settlement or formal insolvency filing of the overseas counterparty.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                    <p className="font-extrabold text-emerald-800">
                      The Compliant Para C.24 Closure Dossier
                    </p>
                    <ul className="list-disc pl-4 space-y-1.5 text-emerald-950">
                      <li>Formal Advocate Legal Demand Notice citing Shipping Bill No., IEC, AD Code, and 15-day statutory cure period.</li>
                      <li>Timestamped BSA 2023 s.63 electronic service logs + Speed Post / international courier tracking proof.</li>
                      <li>Advocate Legal Opinion quantifying disproportionate foreign litigation cost (&gt;₹4L–₹15L retainer vs. invoice balance).</li>
                    </ul>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Read the complete statutory breakdown in{" "}
                  <Link
                    href="/rbi-edpms-unrealized-shipping-bill-write-off-caution-list-legal-notice"
                    className="font-bold text-[#DC2626] underline"
                  >
                    Clearing Aged Shipping Bills in RBI EDPMS: Advocate Legal Notices &amp; Write-Off Norms
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/recovery/export-dues"
                    className="font-bold text-[#DC2626] underline"
                  >
                    Export Dues Recovery Services
                  </Link>
                  .
                </p>
              </section>

              {/* Section 6: Interactive Corridor & Term Playbook */}
              <section
                id="interactive-corridor-playbook"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Interactive Corridor &amp; Payment Term Playbook (B2B-189)
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select an export payment instrument or fraud scenario below to inspect its primary legal vulnerability, governing trade statute, RBI EDPMS impact, and recommended pre-litigation escalation path.
                </p>

                <ExporterReportScenarioTabs terms={studyData.paymentTerms} />
              </section>

              {/* Section 7: BEC & SWIFT Wire-Fraud */}
              <section
                id="bec-swift-fraud-vectors"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    BEC &amp; SWIFT Invoice Hijack Vectors Facing MSME Exporters
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Business Email Compromise (BEC) and SWIFT beneficiary-account hijacking represent the fastest-growing non-credit default vector across Indian engineering, apparel, and agro-commodity exporters. Attackers compromise either the exporter&apos;s or buyer&apos;s email thread just before remittance, substituting a lookalike domain (e.g., changing one character in the exporter&apos;s URL) and instructing the buyer to wire funds to a third-party mule bank account in Hong Kong, the UK, or the US.
                </p>

                <div className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white space-y-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-400">
                    72-Hour Legal &amp; Banking Containment Protocol
                  </p>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    Under settled international commercial law, a buyer who pays an imposter without out-of-band voice verification does <strong>not</strong> discharge its debt to the Indian exporter—unless the exporter&apos;s own compromised server directly caused the fraud. Exporters must trigger an immediate <strong>SWIFT GPI Stop/Recall</strong> via their AD Bank, preserve raw DKIM/SPF headers under <strong>BSA 2023 s.63</strong>, and serve a formal Advocate Liability Notice on the buyer. See our{" "}
                    <Link
                      href="/business-email-compromise-bec-wire-fraud-swift-invoice-hijack-exporter"
                      className="text-red-300 underline font-bold"
                    >
                      BEC &amp; SWIFT Invoice Hijack Legal Liability &amp; Recovery Guide
                    </Link>{" "}
                    (and for Indian importers defrauded on advance payments, see{" "}
                    <Link
                      href="/indian-importer-advance-paid-foreign-supplier-non-shipment-scrap-fraud"
                      className="text-red-300 underline font-bold"
                    >
                      Advance-Paid Foreign Supplier Non-Shipment &amp; IDPMS Defense
                    </Link>
                    ).
                  </p>
                </div>
              </section>

              {/* Section 8: ECGC & Drawback Rule 18(2) */}
              <section
                id="ecgc-drawback-shield"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    ECGC Claim Prerequisites &amp; Customs Drawback Rule 18(2) Shield
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Exporters holding ECGC Standard Policies frequently lose valid claims on technicalities: missing the <strong>Form 203/205 overdue declaration</strong> window, failing to issue a formal legal demand notice before the 4-month protracted default waiting period matures, or accepting unauthorized buyer extensions. Simultaneously, Customs Commissionerates issue automated Show Cause Notices under <strong>Section 75 of the Customs Act, 1962</strong> and <strong>Rule 18 of the Customs &amp; Central Excise Duties Drawback Rules, 2017</strong> whenever EDPMS shows unrealized proceeds past the FEMA window.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Crucially, <strong>Rule 18(2)</strong> provides an explicit statutory safe harbor: Customs cannot recover Duty Drawback if the exporter produces either an <strong>ECGC claim settlement certificate</strong> or a formal <strong>RBI / AD-Bank EDPMS write-off approval</strong>. Explore both defenses in our{" "}
                  <Link
                    href="/ecgc-export-credit-insurance-claim-legal-notice-default-procedure"
                    className="font-bold text-[#DC2626] underline"
                  >
                    ECGC Default Claim &amp; Mandatory Legal Notice Procedure
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/duty-drawback-rodtep-recovery-show-cause-notice-unrealized-export-defense"
                    className="font-bold text-[#DC2626] underline"
                  >
                    Customs Duty Drawback &amp; RoDTEP Show Cause Notice Defense Guide
                  </Link>
                  .
                </p>
              </section>

              {/* Section 9: Unit Economics */}
              <section
                id="pre-litigation-economics"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Pre-Litigation Unit Economics: ₹999 Demand vs. Foreign Suits
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For cross-border invoices between USD 2,500 and USD 50,000, retaining foreign commercial litigators in New York, London, Frankfurt, or Dubai costs ₹4,00,000 to ₹15,00,000+ in upfront retainers—often exceeding 50%–100% of the disputed principal. Pre-litigation advocate demand notices reverse this asymmetry at a flat ₹999 entry cost, while creating the exact disproportionate-cost evidence required for RBI Para C.24 EDPMS write-offs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-2 border border-slate-800">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                      LegalRecovery.in International Demand
                    </span>
                    <p className="text-2xl font-black">₹999 Flat / Case</p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Advocate-drafted cross-border notice citing Shipping Bill No., IEC, UN CISG / Governing Law, and ECGC/EDPMS audit trails via verified Email + WhatsApp (BSA s.63). Optional RPAD (+₹450) or bulk CSV institutional desk.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 text-slate-900 space-y-2 border border-slate-200">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#DC2626]">
                      Foreign Local Counsel Litigation
                    </span>
                    <p className="text-2xl font-black">₹4,00,000 – ₹15,00,000+</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Initial foreign attorney retainer, local court filing fees, apostille/translation costs, and 12–24 months of procedural discovery before judgment.
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Compare service workflows on our{" "}
                  <Link
                    href="/legal-notice-to-international-client-unpaid-invoice-recovery"
                    className="font-bold text-[#DC2626] underline"
                  >
                    Legal Notice to International Client for Unpaid Invoice
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/recovery/international-client-payment"
                    className="font-bold text-[#DC2626] underline"
                  >
                    International Client Payment Recovery
                  </Link>{" "}
                  pages.
                </p>
              </section>

              {/* Section 10: Methodology & EPC Scope */}
              <section
                id="methodology-epc-scope"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Methodology, Inclusion Scope &amp; EPC Data Integrity Standards
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {studyData.methodology.sampleFrame}
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 font-bold">Export Promotion Council (EPC)</th>
                        <th className="p-3.5 font-bold">Covered Exporter Segment</th>
                        <th className="p-3.5 font-bold">Primary Receivables &amp; EDPMS Pain Point</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {studyData.epcMatrix.map((epc, i) => (
                        <tr key={i} className="hover:bg-slate-50">
                          <td className="p-3.5 font-bold text-slate-900">{epc.council}</td>
                          <td className="p-3.5 text-slate-700">{epc.segment}</td>
                          <td className="p-3.5 text-slate-700">{epc.primaryPainPoint}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                    <p className="font-extrabold text-emerald-800 uppercase text-[11px] tracking-wider">
                      Inclusion Criteria
                    </p>
                    <ul className="list-disc pl-4 space-y-1.5 text-emerald-950">
                      {studyData.methodology.inclusionCriteria.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-red-50/70 border border-red-200 space-y-2">
                    <p className="font-extrabold text-[#DC2626] uppercase text-[11px] tracking-wider">
                      Exclusion Criteria
                    </p>
                    <ul className="list-disc pl-4 space-y-1.5 text-slate-800">
                      {studyData.methodology.exclusionCriteria.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">Data Integrity Note:</strong>{" "}
                  {studyData.methodology.dataIntegrity}
                </div>
              </section>

              {/* Section 11: Dataset Download & Citation */}
              <section id="dataset-download-citation" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Download Open Export Risk Dataset &amp; EPC Press Citation
                  </h2>
                </div>
                <ExporterReportDataDownload
                  paymentTerms={studyData.paymentTerms}
                  tradeCorridors={studyData.tradeCorridors}
                  epcMatrix={studyData.epcMatrix}
                  lastUpdated={studyData.lastUpdated}
                />
              </section>

              {/* Section 12: Dual-Track B2B CTAs */}
              <section id="institutional-cta" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    12
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Deploy Export Recovery: Single ₹999 Notice or Bulk CSV Desk
                  </h2>
                </div>
                <ExporterReportCTA />
              </section>

              {/* Section 13: FAQs */}
              <section
                id="faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    13
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    FAQs: Indian Export Defaults, EDPMS &amp; EPC Benchmarks
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group rounded-xl border border-slate-200 bg-slate-50/60 p-4 open:bg-white open:shadow-xs transition-all"
                    >
                      <summary className="cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900 flex items-start justify-between gap-3">
                        <span>
                          <span className="text-[#DC2626] mr-2">Q{idx + 1}.</span>
                          {faq.question}
                        </span>
                        <span className="text-slate-400 group-open:rotate-45 transition-transform text-lg leading-none">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 14: Primary Sources & Attribution */}
              <section
                id="primary-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    14
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Primary Regulatory Portals &amp; Statutory Authorities
                  </h2>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {studyData.sources.map((src, idx) => (
                    <li key={idx}>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 hover:border-[#DC2626] flex items-center justify-between group transition-all text-xs font-semibold text-slate-800"
                      >
                        <span className="truncate pr-2 group-hover:text-[#DC2626] transition-colors">
                          {src.title}
                        </span>
                        <span className="text-[#DC2626] shrink-0 font-bold">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
                  <span>
                    Legal Review &amp; Attribution:{" "}
                    <strong className="text-slate-800">Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions
                  </span>
                  <span>
                    Updated: {studyData.lastUpdated} &bull; Report ID: {studyData.reportId}
                  </span>
                </div>
              </section>
            </div>
          </div>
        </main>

        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
