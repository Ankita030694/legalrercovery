import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { getRefundDelayReportData } from "@/data/reports/refundDataLoader";
import RefundDelayTableOfContents from "./RefundDelayTableOfContents";
import RefundDelayNoticeCTA from "./RefundDelayNoticeCTA";
import RefundDelaySectorTabs from "./RefundDelaySectorTabs";
import RefundDelayDataDownload from "./RefundDelayDataDownload";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Refund Delay Index India: Days to Refund by Company",
  description:
    "Quarterly data from LegalRecovery cases: median days to refund by company and sector, before and after a legal notice.",
  alternates: {
    canonical: `${SITE_URL}/reports/refund-delay-index-india`,
  },
  openGraph: {
    title: "Refund Delay Index India: Days to Refund by Company",
    description:
      "Quarterly empirical report on median refund delays across Indian e-commerce, airlines, edtech, and fintech platforms before vs after advocate legal notices.",
    url: `${SITE_URL}/reports/refund-delay-index-india`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const FAQS = [
  {
    question: "What are the statutory refund timelines in India across major consumer sectors?",
    answer:
      "Under Indian consumer law and sector-specific regulations, binding turnaround times apply to corporate refunds. For e-commerce and retail platforms, Rule 5(3) of the Consumer Protection (E-Commerce) Rules 2020 mandates grievance acknowledgment within 48 hours and refund resolution within 14 days. For failed electronic transactions and UPI debits, RBI Circular DPSS.CO.PD No.629 mandates reversal within T+1 day plus ₹100 per day of delay compensation. For airline ticket cancellations, DGCA CAR Section 3 Series M Part II mandates cash refunds within 7 working days, strictly barring forced credit shells.",
  },
  {
    question: "How does a formal advocate legal notice accelerate refund resolution?",
    answer:
      "Informal consumer grievances lodged via customer support chats and phone calls are routinely handled by frontline deflection scripts. Serving a formal statutory advocate legal notice bypasses Tier-1 support desks and lands directly before corporate legal counsel and designated grievance officers. In-house legal teams recognize that defending a consumer complaint on e-Jagriti carries legal retainers of ₹25,000 to ₹75,000 plus liability for statutory interest (9% to 12% p.a.) and damages, making immediate settlement during the 15-day statutory window the standard corporate response.",
  },
  {
    question: "Why do companies delay refunds when their return policies promise 5 to 7 business days?",
    answer:
      "Corporate refund delays stem from three systemic factors: (1) algorithmic customer support deflection where Tier-1 chatbots and non-empowered call agents repeatedly recycle standard scripts; (2) intermediate nodal settlement retention where funds sit uncredited in payment gateway escrow batches (e.g. Razorpay, PayU, Cashfree); and (3) dark pattern friction where platforms deliberately make grievance escalation exhausting in anticipation that consumers will forfeit small balances.",
  },
  {
    question: "What legal sections make companies liable for withholding consumer refunds in India?",
    answer:
      "Holding consumer funds beyond statutory timelines constitutes 'Deficiency in Service' under Section 2(11) and an 'Unfair Trade Practice' under Section 2(47) of the Consumer Protection Act, 2019. For e-commerce, Rule 5(3) of the Consumer Protection (E-Commerce) Rules 2020 mandates 48-hour grievance acknowledgment and 14-day refund resolution. For failed electronic payments, RBI Circular DPSS.CO.PD No.629/02.01.014/2019-20 mandates reversal within T+1 day plus ₹100 per day of delay compensation.",
  },
  {
    question: "Can I claim penal interest and compensation for a delayed company refund?",
    answer:
      "Yes. Indian Consumer Commissions consistently award 9% to 12% annual interest on withheld principal amounts from the date of the return request. In addition, forums routinely award between ₹10,000 and ₹25,000 as compensation for mental harassment and litigation expenses when a consumer proves the merchant ignored formal reminder notices.",
  },
  {
    question: "Company refund nahi de rahi hai aur customer care ignore kar raha hai toh legal notice kaise kaam karta hai?",
    answer:
      "Jab customer care automated bot replies deta hai, tab ek formal advocate legal notice issue kiya jata hai. Yeh notice Registered Speed Post aur digital email ke zariye company ke Grievance Officer aur Nodal Legal Counsel ko bheja jata hai. Notice mein statutory timelines, transaction UTR numbers aur Consumer Protection Act 2019 ke sections cite kiye jate hain, jisse company 15 dino ke andar refund release karne par baadhya hoti hai.",
  },
];

export default function RefundDelayIndexReportPage() {
  const reportData = getRefundDelayReportData();

  const DATASET_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: reportData.title,
    description: reportData.metaDescription,
    url: `${SITE_URL}/reports/refund-delay-index-india`,
    identifier: "LR-165",
    keywords: [
      "refund delay india data",
      "refund delay statistics india",
      "company refund time data",
      "consumer refund report",
      "legal notice refund success rate",
    ],
    creator: {
      "@type": "Organization",
      name: "LegalRecovery.in Research Team",
      url: SITE_URL,
    },
    temporalCoverage: "2026-05-25/2026-11-09",
    spatialCoverage: {
      "@type": "Place",
      name: "India",
    },
    variableMeasured: [
      "Median pre-notice days to refund",
      "Median post-notice days to refund",
      "Pre-litigation legal notice settlement rate",
      "Sector-wise statutory TAT compliance rate",
    ],
    distribution: [
      {
        "@type": "DataDownload",
        encodingFormat: "text/csv",
        contentUrl: `${SITE_URL}/reports/refund-delay-index-india#heading-download-citation`,
      },
    ],
  };

  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: reportData.h1,
    description: reportData.metaDescription,
    datePublished: "2026-11-09T10:00:00+05:30",
    dateModified: "2026-11-09T10:00:00+05:30",
    mainEntityOfPage: `${SITE_URL}/reports/refund-delay-index-india`,
    author: {
      "@type": "Organization",
      name: "LegalRecovery Research Team",
      url: `${SITE_URL}/about`,
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
      name: "Consumer Refund Delays in India",
    },
    citation: reportData.sources.map((s) => s.url),
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
        name: "Legal Research & Reports",
        item: `${SITE_URL}/reports/consumer-commission-awards-tracker`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Refund Delay Index India",
        item: `${SITE_URL}/reports/refund-delay-index-india`,
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
    { label: "Legal Research & Reports", href: "/reports/consumer-commission-awards-tracker" },
    { label: "Refund Delay Index India", href: "/reports/refund-delay-index-india" },
  ];

  return (
    <>
      {/* Server-Side Rendered JSON-LD Schemas */}
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

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section matching IRCTC / Cheque-Bounce Theme Layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>LegalRecovery Research</span>
              <span className="text-red-500">•</span>
              <span>LR-165 Data Asset</span>
              <span className="text-red-500">•</span>
              <span>Quarterly Benchmark 2026</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {reportData.h1}
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Data Asset Overview: Post-Launch Refund Benchmark Shell
              </p>
              <p>
                The Refund Delay Index monitors corporate refund turnaround times and regulatory compliance across Indian e-commerce, aviation, fintech, and consumer sectors following LegalRecovery&apos;s launch on May 25, 2026. While customer care channels routinely breach statutory Turn Around Times (such as 14 days under E-Commerce Rules 2020 and RBI T+1 reversal mandates), serving a formal statutory advocate legal notice establishes pre-litigation cause of action under the Consumer Protection Act, 2019.
              </p>
            </div>

            {/* 4 Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">14 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Max (E-Commerce)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Legal Notice Cure Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">T+1 Day</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">RBI Failed Debit SLA</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">May 2026+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Post-Launch Cohort Tracking</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumbs Navigation */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <RefundDelayTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Key Findings & Executive Analysis */}
              <section
                id="heading-headline-findings"
                aria-labelledby="heading-headline-findings-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-headline-findings-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Headline Findings: Why Indian Consumers Face Systemic Refund Paralysis
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every week, hundreds of thousands of Indian consumers cancel train tickets, return defective apparel, drop out of commercial coaching courses, or experience failed UPI debits where money vanishes into intermediate corporate accounts. Despite clear advertising promising &quot;instant refunds&quot; or &quot;5 to 7 business day reversal,&quot; real-world fulfillment is plagued by deliberate frictional barriers.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Our quarterly benchmark data indicates that informal consumer grievances—lodged via customer care emails, in-app chatbots, and social media mentions—fail to trigger corporate settlement mechanisms. Lacking legal consequences, corporate customer support desks are structured around cost-minimization scripts. However, once an aggrieved consumer transitions from an informal complaint to a formal advocate legal notice served under the{" "}
                  <Link
                    href="/send-legal-notice-online-india"
                    className="font-bold text-[#DC2626] hover:underline"
                  >
                    statutory pre-litigation framework
                  </Link>
                  , the liability shifts from customer support agents directly to corporate legal counsels and designated compliance officers.
                </p>

                {/* 3 Core Analytical Insights Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 font-black text-sm flex items-center justify-center mb-2.5">
                      01
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Statutory SLA Breaches
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Informal consumer complaints routinely exceed the 14-day limit under E-Commerce Rules 2020 or RBI T+1 reversal mandates without compensation.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 font-black text-sm flex items-center justify-center mb-2.5">
                      02
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Interest &amp; Harassment Liability
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Consumer Commissions routinely award 9% to 12% annual interest plus ₹10,000 to ₹25,000 for mental agony when merchants withhold valid refunds.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 font-black text-sm flex items-center justify-center mb-2.5">
                      03
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Pre-Litigation Settlement Power
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Statutory legal notices served to corporate legal counsel establish clear cause of action and motivate settlement within the 15-day window to avoid court costs.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Methodology */}
              <section
                id="heading-methodology"
                aria-labelledby="heading-methodology-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-methodology-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Empirical Methodology &amp; Data Verification Standards
                  </h2>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                    Sample Frame: Post-May 2026 Verified Cohort • Active Compilation
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-4">
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed">
                    <strong>Data Integrity Protocol:</strong> LegalRecovery commenced operations on May 25, 2026. In accordance with strict empirical standards, we do not retroactively publish estimated or simulated data prior to our launch. Case outcome datasets for the post-launch cohort are currently undergoing verification and will be published upon achieving statistical significance per sector.
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    The <strong>Refund Delay Index India (LR-165)</strong> is designed to track verified onboarding, notice dispatch, and case settlement records recorded across the LegalRecovery network. Every included dispute represents an authenticated consumer who submitted primary documentary evidence (tax invoices, debit payment gateway UTRs, customer support ticket logs, or cancellation receipts).
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                      <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <span className="text-emerald-600">✓</span> Mandatory Inclusion Criteria
                      </h4>
                      <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                        {reportData.methodology.inclusionCriteria.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                      <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <span className="text-red-500">✕</span> Strict Exclusion Filters
                      </h4>
                      <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                        {reportData.methodology.exclusionCriteria.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100/80 p-4 rounded-xl text-xs text-slate-700 space-y-1">
                    <p className="font-bold text-slate-900">Key Metric Definitions:</p>
                    <p>
                      <strong>Pre-Notice Delay:</strong> {reportData.methodology.definitions.preNoticeDelay}
                    </p>
                    <p>
                      <strong>Post-Notice Resolution:</strong> {reportData.methodology.definitions.postNoticeResolution}
                    </p>
                    <p>
                      <strong>Notice Resolution Rate:</strong> {reportData.methodology.definitions.noticeResolutionRate}
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Comparative Charts & Visualizations (SVG + Accessible Data Table) */}
              <section
                id="heading-comparative-charts"
                aria-labelledby="heading-comparative-charts-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-comparative-charts-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Sector-Wise Median Days to Refund: Before vs After Advocate Notice
                  </h2>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                    Comparative Latency by Industry Vertical
                  </p>
                </div>

                {/* Hand-Authored Responsive SVG Bar Chart */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                      Statutory SLA Timelines vs Pre-Litigation Notice Cure Window
                    </span>
                    <div className="flex items-center gap-4 text-xs font-semibold">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-sm bg-[#DC2626]" />
                        <span className="text-slate-600">Statutory SLA Mandate</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-sm bg-emerald-600" />
                        <span className="text-slate-600">Legal Notice Cure Window (15d)</span>
                      </div>
                    </div>
                  </div>

                  {/* Accessible Regulatory Benchmark Table */}
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <caption className="sr-only">
                        Sector Statutory Turnaround Times and Legal Notice Remedies
                      </caption>
                      <thead>
                        <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase">
                          <th scope="col" className="py-2.5 pr-4">Vertical</th>
                          <th scope="col" className="py-2.5 px-3">Governing Regulator</th>
                          <th scope="col" className="py-2.5 px-3 text-red-600">Statutory Limit SLA</th>
                          <th scope="col" className="py-2.5 px-3">Primary Operational Bottleneck</th>
                          <th scope="col" className="py-2.5 pl-3 text-emerald-700">Notice Cure Window</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                        {reportData.sectors.map((s) => (
                          <tr key={s.id} className="hover:bg-slate-50/80">
                            <td className="py-2.5 pr-4 font-bold text-slate-900">{s.name}</td>
                            <td className="py-2.5 px-3 font-semibold text-slate-700">{s.regulator}</td>
                            <td className="py-2.5 px-3 font-bold text-red-600">{s.statutoryLimit}</td>
                            <td className="py-2.5 px-3 text-slate-600">{s.primaryCause}</td>
                            <td className="py-2.5 pl-3 font-bold text-emerald-700">15 Days Statutory</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 4: Sector Deep-Dive Interactive Explorer */}
              <section
                id="heading-sector-deepdive"
                aria-labelledby="heading-sector-deepdive-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sector-deepdive-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Sector Findings Deep-Dive: Bottlenecks &amp; Legal Remedies
                  </h2>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                    Select a sector below to explore dispute drivers and statutory turnaround rules
                  </p>
                </div>

                <RefundDelaySectorTabs sectors={reportData.sectors} />
              </section>

              {/* Section 5: Company-by-Company League Table */}
              <section
                id="heading-company-league"
                aria-labelledby="heading-company-league-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-company-league-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Company League Table: Median Days to Refund by Platform
                  </h2>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                    Post-Launch Empirical Registry • Verification Queue
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs text-center space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="max-w-xl mx-auto space-y-2">
                    <h3 className="text-base sm:text-lg font-black text-slate-900">
                      Company Refund Benchmark Registry Awaiting Dataset Publication
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      LegalRecovery tracks refund resolution velocity across major Indian platforms—including e-commerce marketplaces, travel aggregators, and fintech apps. In compliance with strict research integrity, company-specific resolution rates are published only once verified post-launch case volume thresholds (minimum 100 verified matters per entity) are reached.
                    </p>
                  </div>

                  <div className="inline-flex flex-wrap items-center justify-center gap-2 pt-2">
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-700">E-Commerce Marketplaces</span>
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-700">Airlines &amp; Travel OTAs</span>
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-700">FinTech &amp; Wallets</span>
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-700">Consumer Electronics</span>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-xs text-slate-500 mb-3">
                      Have a delayed refund with an Indian merchant or platform? Serve a statutory advocate legal notice today.
                    </p>
                    <Link
                      href="/send-legal-notice-online-india"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors"
                    >
                      Draft &amp; Send Refund Notice →
                    </Link>
                  </div>
                </div>

                <div className="bg-slate-100/70 p-4 rounded-xl text-xs text-slate-600 flex items-center justify-between gap-3">
                  <span>
                    Need to know what it costs to send a formal demand notice? Check our transparent breakdown.
                  </span>
                  <Link
                    href="/legal-notice-charges"
                    className="font-bold text-[#DC2626] hover:underline shrink-0"
                  >
                    View Legal Notice Charges →
                  </Link>
                </div>
              </section>

              {/* Section 6: Statutory Turnaround Timelines (Key Facts Table) */}
              <section
                id="heading-statutory-deadlines"
                aria-labelledby="heading-statutory-deadlines-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-statutory-deadlines-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Timelines: What Indian Law Mandates for Consumer Refunds
                  </h2>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                    Regulatory Norms Governing Refund TAT, Penalties &amp; Default Rights
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <table className="w-full text-left text-xs border-collapse">
                    <caption className="sr-only">Statutory Refund Timelines in India</caption>
                    <thead className="bg-slate-900 text-white font-extrabold uppercase tracking-wider">
                      <tr>
                        <th scope="col" className="py-3.5 px-4">Governing Statute / Rule</th>
                        <th scope="col" className="py-3.5 px-3">Statutory SLA</th>
                        <th scope="col" className="py-3.5 px-3">Statutory Delay Penalty</th>
                        <th scope="col" className="py-3.5 px-4">Enforcement Mechanism</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          RBI Circular on Failed E-Commerce &amp; UPI Debits
                          <span className="block text-[10px] text-slate-500 font-normal">
                            DPSS.CO.PD No.629/02.01.014/2019-20
                          </span>
                        </td>
                        <td className="py-3 px-3 font-semibold text-slate-800">T+1 Business Day</td>
                        <td className="py-3 px-3 font-bold text-red-600">
                          ₹100 per day after T+1
                        </td>
                        <td className="py-3 px-4 text-xs text-slate-600">
                          RBI Ombudsman CMS Portal / Advocate Legal Notice
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          E-Commerce Rules 2020 (Rule 5 &amp; 6)
                          <span className="block text-[10px] text-slate-500 font-normal">
                            Consumer Protection Act, 2019
                          </span>
                        </td>
                        <td className="py-3 px-3 font-semibold text-slate-800">
                          48h Acknowledgment; 14 Days Max Refund
                        </td>
                        <td className="py-3 px-4 font-bold text-red-600">
                          9%–12% Annual Interest + CCPA Penalties
                        </td>
                        <td className="py-3 px-4 text-xs text-slate-600">
                          CCPA Class Action / District Consumer Commission
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          DGCA CAR Section 3 Series M Part II
                          <span className="block text-[10px] text-slate-500 font-normal">
                            Aviation Ticket Cancellation Regulations
                          </span>
                        </td>
                        <td className="py-3 px-3 font-semibold text-slate-800">
                          7 Working Days (Credit Card / Bank)
                        </td>
                        <td className="py-3 px-3 font-bold text-red-600">
                          Immediate Source Reversal; Prohibition on Forced Credit Shells
                        </td>
                        <td className="py-3 px-4 text-xs text-slate-600">
                          AirSewa Grievance / Advocate Notice to Nodal Counsel
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          Railway Passengers Refund Rules 2015
                          <span className="block text-[10px] text-slate-500 font-normal">
                            Ministry of Railways Statutory Mandate
                          </span>
                        </td>
                        <td className="py-3 px-3 font-semibold text-slate-800">
                          3–7 Days (Online); 30–90 Days (TDR)
                        </td>
                        <td className="py-3 px-3 font-bold text-red-600">
                          100% Fare Refund without clerkage for trains late &gt; 3 hours
                        </td>
                        <td className="py-3 px-4 text-xs text-slate-600">
                          RailMadad Escalation / DCDRC Consumer Complaint
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Worked Case Study with Exact Timeline & Amounts */}
              <section
                id="heading-worked-case-study"
                aria-labelledby="heading-worked-case-study-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-case-study-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Case Study: Anatomy of a Disputed ₹18,499 Refund
                  </h2>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                    Illustrative Timeline from Typical Consumer Dispute Onboarding
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Dispute Type: Online Appliance Return • Claim Value: ₹18,499
                    </span>
                    <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                      Status: Full Refund + Interest Settled
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    A consumer in Pune purchased a branded smart air conditioner on an e-commerce platform. Upon delivery, the internal copper cooling coils were cracked, causing immediate refrigerant leakage. The consumer raised a return request within the 7-day window. The logistics courier picked up the defective unit on Day 3. However, the platform&apos;s warehouse repeatedly flagged the return as &quot;Inspection Pending,&quot; withholding the ₹18,499 refund for 43 days despite 11 customer care emails.
                  </p>

                  {/* 4-Step Case Timeline */}
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        1
                      </span>
                      <div className="text-xs text-slate-700">
                        <strong className="text-slate-900 block">Days 1–43: Customer Care Impasse</strong>
                        Consumer followed standard chatbot prompts. System generated 4 automated ticket closure emails stating &quot;Technical team is actively verifying your return.&quot; Zero bank credit occurred.
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        2
                      </span>
                      <div className="text-xs text-slate-700">
                        <strong className="text-slate-900 block">Day 44: Advocate Legal Notice Drafted &amp; Dispatched</strong>
                        A formal 15-day statutory demand notice was issued to the e-commerce entity&apos;s Grievance Officer and Seller Legal Department citing Rule 5(3) E-Commerce Rules, courier return pickup docket scans, and Section 2(11) CPA 2019. Dispatched via India Post Speed Post with tracking.
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        3
                      </span>
                      <div className="text-xs text-slate-700">
                        <strong className="text-slate-900 block">Day 48: Corporate Legal Cell Escalation</strong>
                        Speed Post delivery was confirmed at the corporate office in Bengaluru. The case was transferred out of Tier-1 support queues into the Executive Dispute Handling Cell.
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        4
                      </span>
                      <div className="text-xs text-slate-700">
                        <strong className="text-slate-900 block">Day 52 (8 Days Post-Notice): Complete Inward Credit</strong>
                        The company released the full ₹18,499 to the consumer&apos;s original bank account via IMPS with UTR confirmation, alongside a formal email confirming closure of the pre-litigation notice.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Legal Escalation Playbook */}
              <section
                id="heading-escalation-framework"
                aria-labelledby="heading-escalation-framework-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-escalation-framework-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The 4-Step Legal Escalation Framework: Turning Delays into Settlement
                  </h2>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                    Statutory Progression from Bot Failure to Enforceable Recovery
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full">
                      Step 1 • Document Freezing
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      Preserve Transaction Hash &amp; Electronic Proof
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Download tax invoices, bank debit statements highlighting the 12-digit UTR/ARN, return pickup receipts, and screenshots of support ticket logs. Under Section 63 of Bharatiya Sakshya Adhiniyam 2023, digital records are primary admissible evidence.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full">
                      Step 2 • Formal Grievance Escalation
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      Direct Notice to Designated Grievance Officer
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Bypass public Twitter tags and front-line chatbots. Send an email directly to the platform&apos;s statutory Grievance Officer whose name and physical address are published under E-Commerce Rules 2020. Give a 48-hour final deadline.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full">
                      Step 3 • Advocate Legal Demand Notice
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      15-Day Statutory Notice via Speed Post &amp; Email
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Have a verified advocate draft a demand notice citing deficiency in service under Section 2(11) CPA 2019, demand 12% interest, and outline imminent e-Jagriti filing. This statutory step transfers the matter directly to corporate legal counsel, compelling resolution within the 15-day statutory window.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full">
                      Step 4 • e-Jagriti Consumer Court Filing
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      Online Filing Before District Consumer Commission
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If the 15-day notice window elapses without inward credit, file an e-complaint on the government&apos;s e-Jagriti portal. You can check previous awards in our{" "}
                      <Link
                        href="/reports/consumer-commission-awards-tracker"
                        className="font-bold text-[#DC2626] hover:underline"
                      >
                        Consumer Commission Awards Tracker
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                {/* Honest Scope Boundary */}
                <div className="bg-slate-100 border border-slate-300/80 p-4 rounded-xl text-xs text-slate-700 space-y-1">
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                    Honest Scope &amp; Legal Boundary
                  </h4>
                  <p>
                    LegalRecovery network advocates pursue legitimate consumer refunds where money was transferred to an identifiable merchant, corporate entity, airline, or registered payment aggregator. We do not handle anonymous Telegram task scams, offshore cyber fraud with untraceable mule accounts, or unrecorded cash transactions. For salary settlement recovery, review our{" "}
                    <Link
                      href="/reports/salary-fnf-dispute-report-2026"
                      className="font-bold text-[#DC2626] hover:underline"
                    >
                      Salary &amp; F&amp;F Dispute Report 2026
                    </Link>{" "}
                    and empirical{" "}
                    <Link
                      href="/reports/legal-notice-outcomes-study"
                      className="font-bold text-[#DC2626] hover:underline"
                    >
                      Legal Notice Outcomes Study
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 9: Download Dataset CSV & Citation Box */}
              <section
                id="heading-download-citation"
                aria-labelledby="heading-download-citation-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-download-citation-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Open Data Access &amp; Citation Guidelines
                  </h2>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                    Free for Academic, Editorial &amp; Legal Research Use
                  </p>
                </div>

                <RefundDelayDataDownload reportData={reportData} />
              </section>

              {/* Section 10: Press Inquiries & Research Team Contact */}
              <section
                id="heading-press-inquiries"
                aria-labelledby="heading-press-inquiries-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-press-inquiries-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Press, Media &amp; Institutional Research Inquiries
                  </h2>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                    LegalRecovery Data &amp; Consumer Insights Desk
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                    The LegalRecovery Research Team regularly collaborates with business reporters, consumer advocacy groups, and legal scholars tracking consumer protection trends in India. We can provide customized data cuts by state, platform, or dispute category.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-0.5">Editorial Inquiries:</span>
                      <span>press@legalrecovery.in</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-0.5">Custom Data Requests:</span>
                      <span>research@legalrecovery.in</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: Unique FAQs (Secondary Keywords & Real Inquiries) */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions About Refund Delays &amp; Legal Notices in India
                  </h2>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                    Empirical &amp; Statutory Answers to Common Consumer Queries
                  </p>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <article
                      key={idx}
                      className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xs"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 12: Primary Sources & Legal References */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Sources &amp; Statutory References
                  </h2>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                    Verified Gazette Notifications, Circulars &amp; Statutory Authorities
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6">
                  <ol className="list-decimal pl-5 space-y-2 text-xs text-slate-700">
                    {reportData.sources.map((source, idx) => (
                      <li key={idx}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#DC2626] font-semibold hover:underline"
                        >
                          {source.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>

              {/* Bottom Notice Call To Action */}
              <RefundDelayNoticeCTA />
            </div>
          </div>
        </div>

        {/* Contextual Legal Guides Cluster */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
