import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import { getNbfcBenchmarksData } from "@/data/reports/nbfcBenchmarksLoader";
import NbfcBenchmarksTableOfContents from "./NbfcBenchmarksTableOfContents";
import NbfcBenchmarksScenarioTabs from "./NbfcBenchmarksScenarioTabs";
import NbfcBenchmarksDataDownload from "./NbfcBenchmarksDataDownload";
import NbfcBenchmarksCTA from "./NbfcBenchmarksCTA";

export const revalidate = 86400;

const PAGE_URL = "/reports/nbfc-digital-lending-legal-recovery-benchmarks-india";
const META_TITLE = "India NBFC & Digital Lending Recovery Benchmarks (2026)";
const META_DESCRIPTION =
  "Empirical study analyzing resolution timelines, channel cure rates (WhatsApp, Email, RPAD), and DPD-bucket ROI across Indian NBFC & SME loan recovery.";

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
      "Why do Indian NBFCs and fintechs lack granular pre-litigation legal-notice cure benchmarks?",
    answer:
      "Public RBI Financial Stability Reports and Trend & Progress disclosures aggregate macro Gross NPA (GNPA) and Net NPA ratios at the sector level. They do not break down how many SMA-0, SMA-1, or SMA-2 accounts cure within 15 days of an advocate-signed notice across Email, WhatsApp, and Speed Post RPAD. LegalRecovery's post-May 2026 telemetry schema is structured to close this visibility gap for CROs and VP Collections.",
  },
  {
    question:
      "How does a Section 25 PSS Act e-NACH bounce notice differ from a standard soft-collection reminder?",
    answer:
      "Soft-collection calls and SMS reminders carry no criminal or statutory limitation consequence. Under Section 25(1) of the Payment and Settlement Systems Act, 2007, an electronic funds transfer dishonour triggers a strict 30-day window from return memo receipt to issue a formal demand notice, granting the borrower a 15-day statutory cure window before Magistrate prosecution.",
  },
  {
    question:
      "Is India Post Speed Post (RPAD) still mandatory when Email and WhatsApp are admissible under BSA 2023 s.63?",
    answer:
      "Yes, for litigation-ready portfolios. While Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 validates timestamped Email and WhatsApp Business API delivery metadata, Section 27 of the General Clauses Act, 1897 confers an irrebuttable statutory presumption of service on Registered Speed Post. Combining instant digital service with optional ₹450 RPAD prevents borrowers from raising non-receipt technical defenses before JMFC Magistrates or ODR arbitrators.",
  },
  {
    question:
      "What is the cost-per-rupee advantage of pre-litigation tri-channel waves over traditional court litigation?",
    answer:
      "A single advocate-drafted notice on LegalRecovery.in costs ₹999 flat for Email + WhatsApp (or ₹1,449 with Speed Post RPAD), compared to ₹25,000–₹75,000+ in initial court retainers, court fees, and counsel appearances. For small-ticket digital personal loans and BNPL (₹10,000–₹1,00,000), pre-litigation tri-channel waves are the only economically viable legal escalation tier.",
  },
  {
    question:
      "When should an NBFC trigger a Section 21 Arbitration or ODR notice in the DPD cycle?",
    answer:
      "For unsecured personal loans and SME working capital lines above ₹1,00,000 that remain uncured past SMA-1 (31–60 DPD), issuing a Section 21 Arbitration Invocation notice during SMA-2 (61–90 DPD) stops the 3-year limitation clock and transitions the account into a post-CORE compliant neutral ODR proceeding before it hits 90-DPD NPA provisioning.",
  },
  {
    question:
      "How do RBI Fair Practices Code and Digital Lending Directions restrict recovery escalation?",
    answer:
      "RBI guidelines prohibit coercive recovery calls, third-party shaming, and unauthorized contact with borrower phonebook references. Routing delinquent accounts from in-house tele-calling into formal advocate-drafted statutory notices (Email, WhatsApp, and RPAD) shifts the communication onto a strictly documented, RBI-compliant legal rail while preserving CIBIL/CIC pre-reporting notice timelines.",
  },
  {
    question:
      "Which NBFCs qualify to issue 60-day SARFAESI Section 13(2) demand notices?",
    answer:
      "Under Ministry of Finance notifications pursuant to Section 2(1)(m)(iv) of the SARFAESI Act, 2002, notified NBFCs with an asset size of ₹100 crore or more may enforce security interests via a 60-day Section 13(2) demand notice for defaulted secured loans of ₹20 lakh and above. Smaller NBFCs or sub-₹20L secured loans rely on Section 25 PSS Act, Section 138 NI Act, and neutral ODR.",
  },
  {
    question:
      "Can financial journalists and institutional risk teams cite and download this benchmark dataset?",
    answer:
      "Yes. The open Schema.org/Dataset specification, DPD bucket taxonomy, and tri-channel evidentiary matrix are published under CC BY-NC 4.0 for banking media, fintech researchers, and NBFC risk committees, with one-click JSON schema export and APA/BibTeX citations provided below.",
  },
];

export default function NbfcBenchmarksReportPage() {
  const studyData = getNbfcBenchmarksData();
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
    datePublished: "2026-11-14T10:00:00+05:30",
    dateModified: "2026-11-14T10:00:00+05:30",
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
      name: "NBFC and Digital Lending Pre-Litigation Recovery Benchmarks in India",
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
      "nbfc digital lending recovery rate benchmarks india",
      "whatsapp vs email vs speed post legal notice cure rate",
      "bucket wise collection efficiency 30 60 90 dpd india",
      "cost per rupee recovered digital lending india",
      "pre litigation settlement rate nbfc loans",
      "e nach bounce resolution statistics india",
    ],
    creator: {
      "@type": "Organization",
      name: "LegalRecovery Research Bureau",
      url: SITE_URL,
    },
    temporalCoverage: "2026-05-25/2026-11-14",
    spatialCoverage: {
      "@type": "Place",
      name: "India",
    },
    variableMeasured: [
      "DPD bucket escalation window (SMA-0, SMA-1, SMA-2, NPA 90+)",
      "Channel evidentiary validity (BSA 2023 s.63 vs General Clauses Act s.27)",
      "Pre-litigation notice unit cost (INR 999 digital vs INR 1,449 tri-channel)",
      "Statutory cure period (15-day PSS s.25 / NI s.138 vs 60-day SARFAESI s.13(2))",
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
    datePublished: "2026-11-14T10:00:00+05:30",
    dateModified: "2026-11-14T10:00:00+05:30",
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
        name: "NBFC & Fintech Loan Recovery",
        item: `${SITE_URL}/industries/nbfc-fintech-loan-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "NBFC Recovery Benchmarks",
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
    { label: "NBFC & Fintech Recovery", href: "/industries/nbfc-fintech-loan-recovery" },
    { label: "NBFC Recovery Benchmarks", href: PAGE_URL },
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
              <span>Empirical B2B Benchmark</span>
              <span>•</span>
              <span>IND-02 NBFC &amp; Fintech</span>
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
                Executive Creditor Answer &bull; B2B-036
              </span>
              <p>
                Indian NBFCs and digital lenders bridge the gap between soft tele-calling and ₹25,000+ court litigation using structured pre-litigation legal notice waves. Built as an empirical companion to our{" "}
                <Link
                  href="/industries/nbfc-fintech-loan-recovery"
                  className="text-red-300 underline decoration-red-400/60 hover:text-white font-bold"
                >
                  NBFC &amp; Fintech Loan Recovery Hub
                </Link>
                , this study maps DPD-bucket cure windows, tri-channel service validity (BSA s.63 + RPAD s.27), and flat ₹999–₹1,449 unit economics.
              </p>
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                  15 Days
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  PSS s.25 / NI s.138 Cure Window
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                  ₹999
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Advocate Email + WhatsApp Notice
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                  +₹450
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Optional Speed Post RPAD (s.27)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                  4 Waves
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  SMA-0 to NPA Escalation Rail
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            <NbfcBenchmarksTableOfContents />

            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Executive Benchmark Gap */}
              <section
                id="executive-benchmark-gap"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Why CROs Lack Pre-Litigation Legal-Notice Cure Benchmarks
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Chief Risk Officers (CROs), VPs of Collections, and banking journalists in India routinely rely on aggregate Reserve Bank of India (RBI) Financial Stability Reports that publish macro Gross NPA (GNPA) and Net NPA ratios. While macro GNPA figures describe balance-sheet health after an account crosses 90 Days Past Due (DPD), they reveal nothing about what happens inside the critical <strong className="text-slate-900">1–90 DPD pre-litigation window</strong> when a borrower stops honouring e-NACH or UPI AutoPay mandates.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In high-velocity retail, BNPL, and unsecured SME lending, collections teams face a sharp economic cliff: in-house tele-calling loses marginal effectiveness after 30 DPD, yet filing a civil recovery suit, Section 25 Payment and Settlement Systems (PSS) Act complaint, or arbitration claim costs ₹25,000 to ₹75,000+ in upfront legal retainers and court fees. Without granular visibility into <strong className="text-slate-900">channel-level service validity (Email vs. WhatsApp vs. Speed Post RPAD)</strong> and <strong className="text-slate-900">DPD-bucket statutory deadlines</strong>, NBFCs either over-spend on premature litigation or allow limitation windows—such as the strict 30-day notice window under Section 25(1)(b) PSS Act—to expire silently.
                </p>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 leading-relaxed">
                  <strong className="font-bold">Transparency &amp; Telemetry Status (Post-May 25, 2026 Cohort):</strong> Live anonymized platform cure-rate percentages across NBFC batch portfolios are currently in active ingestion. Rather than publishing fabricated or pre-launch survey estimates, this 2026–2027 benchmark report documents the exact statutory cure windows, verifiable ₹999/₹1,449 unit-cost equations, and the open telemetry schema used by institutional collections desks.
                </div>
              </section>

              {/* Section 2: DPD Bucket Matrix */}
              <section
                id="dpd-bucket-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Bucket-Wise Statutory Escalation Matrix (SMA-0 to NPA 90+)
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Effective pre-litigation recovery aligns each RBI Special Mention Account (SMA) aging bucket with the exact statutory notice that creates maximum legal leverage at the lowest unit cost. Dispatching a generic recovery letter at 75 DPD wastes the criminal deterrence of Section 25 PSS Act, which expires 30 days after the e-NACH return memo.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 font-bold">DPD Bucket</th>
                        <th className="p-3.5 font-bold">Primary Statute</th>
                        <th className="p-3.5 font-bold">Recommended Wave</th>
                        <th className="p-3.5 font-bold">Cure Window</th>
                        <th className="p-3.5 font-bold">Escalation Forum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {studyData.dpdBuckets.map((row) => (
                        <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-extrabold text-slate-900 whitespace-nowrap">
                            {row.bucket}
                          </td>
                          <td className="p-3.5 text-slate-700">{row.primaryStatute}</td>
                          <td className="p-3.5 text-slate-700">{row.recommendedWave}</td>
                          <td className="p-3.5 font-semibold text-emerald-700">
                            {row.statutoryCureWindow}
                          </td>
                          <td className="p-3.5 text-slate-700">{row.escalationPath}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: 4-Wave Architecture SVG + Mobile Cards */}
              <section
                id="wave-architecture-svg"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    4-Step Pre-Litigation Wave Architecture Across Channels
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  High-performing fintech and NBFC legal desks replace ad-hoc calling with a deterministic four-wave escalation pipeline. Every wave builds an admissible evidentiary record under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023 and Section 27 of the General Clauses Act, 1897, ensuring zero rework if an account proceeds to Magistrate court or{" "}
                  <Link
                    href="/online-dispute-resolution-india"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Online Dispute Resolution (ODR)
                  </Link>
                  .
                </p>

                {/* Desktop SVG Flow */}
                <div className="hidden md:block w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-900 p-4">
                  <svg
                    viewBox="0 0 800 220"
                    width={800}
                    height={220}
                    className="w-full h-auto"
                    role="img"
                    aria-label="4-Step NBFC Pre-Litigation Wave Architecture from e-NACH Bounce to ODR and Magistrate Filing"
                  >
                    <rect x="15" y="30" width="170" height="160" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="30" y="60" fill="#F87171" fontSize="11" fontWeight="bold">WAVE 1 • DAY 1–7</text>
                    <text x="30" y="85" fill="#FFFFFF" fontSize="14" fontWeight="bold">Instant BSA s.63</text>
                    <text x="30" y="105" fill="#FFFFFF" fontSize="14" fontWeight="bold">Email + WhatsApp</text>
                    <text x="30" y="135" fill="#94A3B8" fontSize="11">DKIM Email + API Read</text>
                    <text x="30" y="152" fill="#94A3B8" fontSize="11">Receipt on KYC Mobile</text>
                    <text x="30" y="174" fill="#34D399" fontSize="11" fontWeight="bold">Included in ₹999</text>

                    <path d="M185 110 L215 110" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="215,105 225,110 215,115" fill="#DC2626" />

                    <rect x="225" y="30" width="170" height="160" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="240" y="60" fill="#F87171" fontSize="11" fontWeight="bold">WAVE 2 • &lt;30 DAYS</text>
                    <text x="240" y="85" fill="#FFFFFF" fontSize="14" fontWeight="bold">PSS Act s.25(1)</text>
                    <text x="240" y="105" fill="#FFFFFF" fontSize="14" fontWeight="bold">Statutory Demand</text>
                    <text x="240" y="135" fill="#94A3B8" fontSize="11">UMRN + Exact Bounced</text>
                    <text x="240" y="152" fill="#94A3B8" fontSize="11">EMI (Suman Sethi Rule)</text>
                    <text x="240" y="174" fill="#FBBF24" fontSize="11" fontWeight="bold">15-Day Cure Clock</text>

                    <path d="M395 110 L425 110" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="425,105 435,110 425,115" fill="#DC2626" />

                    <rect x="435" y="30" width="170" height="160" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="450" y="60" fill="#F87171" fontSize="11" fontWeight="bold">WAVE 3 • DAY 31–60</text>
                    <text x="450" y="85" fill="#FFFFFF" fontSize="14" fontWeight="bold">Speed Post RPAD</text>
                    <text x="450" y="105" fill="#FFFFFF" fontSize="14" fontWeight="bold">+ CIC Alert Shield</text>
                    <text x="450" y="135" fill="#94A3B8" fontSize="11">s.27 General Clauses</text>
                    <text x="450" y="152" fill="#94A3B8" fontSize="11">Deemed Service Proof</text>
                    <text x="450" y="174" fill="#34D399" fontSize="11" fontWeight="bold">+₹450 Optional RPAD</text>

                    <path d="M605 110 L635 110" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="635,105 645,110 635,115" fill="#DC2626" />

                    <rect x="645" y="30" width="140" height="160" rx="12" fill="#7F1D1D" stroke="#DC2626" strokeWidth="1.5" />
                    <text x="658" y="60" fill="#FCA5A5" fontSize="11" fontWeight="bold">WAVE 4 • 61–90+ DPD</text>
                    <text x="658" y="85" fill="#FFFFFF" fontSize="14" fontWeight="bold">s.21 ODR / Recall</text>
                    <text x="658" y="105" fill="#FFFFFF" fontSize="14" fontWeight="bold">/ JMFC Filing</text>
                    <text x="658" y="135" fill="#FECACA" fontSize="11">Stops Limitation +</text>
                    <text x="658" y="152" fill="#FECACA" fontSize="11">Post-CORE Neutral</text>
                    <text x="658" y="174" fill="#FFFFFF" fontSize="11" fontWeight="bold">Court-Ready Dossier</text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
                  {[
                    { step: "Wave 1 (Day 1–7)", title: "Instant BSA s.63 Email + WhatsApp", detail: "DKIM-verified email + WhatsApp Business API delivery metadata (₹999 base)." },
                    { step: "Wave 2 (<30 Days)", title: "PSS Act s.25(1) Statutory Demand", detail: "Cites UMRN & exact bounced EMI to start the 15-day criminal cure clock." },
                    { step: "Wave 3 (Day 31–60)", title: "Speed Post RPAD + CIC Pre-Alert", detail: "Section 27 General Clauses Act deemed service (+₹450) + RBI 21-day bureau shield." },
                    { step: "Wave 4 (61–90+ DPD)", title: "s.21 ODR Invocation / JMFC / Recall", detail: "Stops limitation and transitions uncured accounts to neutral ODR or Magistrate court." },
                  ].map((item) => (
                    <div key={item.step} className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">{item.step}</span>
                      <p className="text-sm font-extrabold">{item.title}</p>
                      <p className="text-xs text-slate-300">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: Channel Cure Economics */}
              <section
                id="channel-cure-economics"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Email vs. WhatsApp vs. Speed Post RPAD: Channel Benchmarks
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A common operational mistake in digital lending is treating Email, WhatsApp, and Speed Post RPAD as mutually exclusive alternatives. Each channel solves a different legal and behavioural bottleneck: digital channels eliminate transit delay and capture immediate borrower engagement, whereas India Post RPAD locks in statutory presumption of service even when a borrower abandons a rented address. See our{" "}
                  <Link
                    href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Tri-Channel Bulk Notice Architecture
                  </Link>{" "}
                  for API and CSV dispatch specifications.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 font-bold">Dispatch Channel</th>
                        <th className="p-3.5 font-bold">Statutory Basis</th>
                        <th className="p-3.5 font-bold">Speed</th>
                        <th className="p-3.5 font-bold">Cost Structure</th>
                        <th className="p-3.5 font-bold">Evidentiary Role</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {studyData.channelBenchmarks.map((ch) => (
                        <tr key={ch.channel} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-extrabold text-slate-900">{ch.channel}</td>
                          <td className="p-3.5 text-slate-700">{ch.legalBasis}</td>
                          <td className="p-3.5 font-semibold text-emerald-700 whitespace-nowrap">
                            {ch.deliverySpeed}
                          </td>
                          <td className="p-3.5 font-semibold text-slate-900">{ch.costStructure}</td>
                          <td className="p-3.5 text-slate-700">{ch.evidentiaryRole}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: Interactive DPD Playbook */}
              <section
                id="interactive-dpd-playbook"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Interactive DPD &amp; Wave Playbook Explorer
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select an aging cohort below to inspect the governing statute, recommended dispatch wave, statutory cure period, and next judicial forum. For exact 30-day and 15-day filing cut-offs on bounced mandates, use our{" "}
                  <Link
                    href="/tools/section-25-nach-bounce-limitation-calculator"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Section 25 e-NACH Bounce Limitation Calculator
                  </Link>
                  .
                </p>

                <NbfcBenchmarksScenarioTabs buckets={studyData.dpdBuckets} />
              </section>

              {/* Section 6: Cost-Per-Rupee Recovered & Unit-Economics ROI */}
              <section
                id="unit-economics-roi"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Cost-Per-Rupee Recovered: Pre-Litigation vs. Court Economics
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For CFOs and VP Collections, the decisive metric is not gross recovery alone—it is <strong className="text-slate-900">Net Cost Per Rupee Recovered</strong>. Traditional law firm retainers (₹25,000–₹75,000+ per contested matter) destroy unit economics on sub-₹1,00,000 digital personal loans and BNPL accounts, as detailed in our{" "}
                  <Link
                    href="/small-ticket-digital-personal-loan-bnpl-recovery-economics"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Small-Ticket Digital Loan &amp; BNPL Recovery Economics Guide
                  </Link>
                  . Flat-rate advocate notice waves invert this cost curve across all three major NBFC ticket tiers:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                      Tier 1 &bull; Digital PL / BNPL
                    </span>
                    <p className="text-lg font-black">₹35,000 Ticket</p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Tri-channel advocate notice (₹1,449) equals <strong className="text-emerald-400">4.14%</strong> of principal. Traditional ₹25,000 litigation retainer equals <strong className="text-red-400">71.4%</strong> (economically unviable).
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                      Tier 2 &bull; Unsecured SME / EDI
                    </span>
                    <p className="text-lg font-black">₹5,00,000 Ticket</p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Tri-channel s.25 PSS + s.21 ODR notice (₹1,449) equals <strong className="text-emerald-400">0.29%</strong> of principal, preserving margin before{" "}
                      <Link href="/unsecured-business-loan-sme-working-capital-default-nbfc" className="underline text-amber-300">
                        Order 37/38 attachment
                      </Link>
                      .
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                      Tier 3 &bull; Secured LAP / CV
                    </span>
                    <p className="text-lg font-black">₹25,00,000 Ticket</p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Pre-SARFAESI s.13(2) / loan recall notice (₹1,449) equals <strong className="text-emerald-400">0.058%</strong> of principal, creating a clean 60-day statutory record for notified NBFCs.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: BSA s.63, RBI & Post-CORE Compliance */}
              <section
                id="bsa-evidence-compliance"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    BSA 2023 s.63, RBI Guidelines &amp; Post-CORE ODR Compliance
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Regulatory scrutiny on digital lending recovery has intensified under the RBI Digital Lending Directions and Fair Practices Code. Replacing aggressive field or tele-calling scripts with advocate-vetted statutory notices protects the lender from RBI Ombudsman penalties while strengthening enforceability:
                </p>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900">1. RBI Recovery Agent &amp; Fair Practices Shield:</strong>{" "}
                    Follow our{" "}
                    <Link
                      href="/rbi-recovery-agent-guidelines-compliant-legal-escalation-nbfc"
                      className="text-[#DC2626] font-bold hover:underline"
                    >
                      RBI-Compliant Legal Escalation Playbook
                    </Link>{" "}
                    to transition delinquent accounts out of coercive tele-calling into documented advocate notices.
                  </li>
                  <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900">2. CIBIL / CIC Pre-Reporting Alert Compliance:</strong>{" "}
                    Embed mandatory pre-reporting bureau alerts inside Day-30/60 notices per our{" "}
                    <Link
                      href="/cibil-cic-pre-reporting-default-notice-compliance-lenders"
                      className="text-[#DC2626] font-bold hover:underline"
                    >
                      RBI CIC Pre-Reporting Compliance Guide
                    </Link>{" "}
                    to prevent ₹100/day Ombudsman penalties.
                  </li>
                  <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900">3. Suman Sethi Dual-Demand &amp; Post-CORE Neutral ODR:</strong>{" "}
                    Use our{" "}
                    <Link
                      href="/templates/section-25-pss-act-nach-bounce-legal-notice-format"
                      className="text-[#DC2626] font-bold hover:underline"
                    >
                      Section 25 PSS Act Notice Format
                    </Link>{" "}
                    to separate bounced EMI from total loan recall, and ensure arbitration clauses follow{" "}
                    <Link
                      href="/neutral-odr-online-arbitration-clause-drafting-fintech-nbfc"
                      className="text-[#DC2626] font-bold hover:underline"
                    >
                      Post-CORE Neutral ODR Clause Drafting
                    </Link>
                    .
                  </li>
                  <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900">4. Dedicated NBFC Notice Portal:</strong>{" "}
                    Explore institutional workflows on our{" "}
                    <Link
                      href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
                      className="text-[#DC2626] font-bold hover:underline"
                    >
                      NBFC Legal Notice Service Portal
                    </Link>
                    .
                  </li>
                </ul>
              </section>

              {/* Section 8: Methodology & Scope */}
              <section
                id="study-methodology-scope"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Methodology, Sample Scope &amp; Data Integrity Guardrails
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {studyData.methodology.sampleFrame}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                    <p className="font-extrabold text-emerald-900 uppercase text-[11px] tracking-wider">
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

              {/* Section 9: Dataset Download & Citation */}
              <section id="dataset-download-citation" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Download Open Benchmark Schema &amp; Press Citation
                  </h2>
                </div>
                <NbfcBenchmarksDataDownload
                  dpdBuckets={studyData.dpdBuckets}
                  channelBenchmarks={studyData.channelBenchmarks}
                  lastUpdated={studyData.lastUpdated}
                />
              </section>

              {/* Section 10: Dual-Track B2B CTAs */}
              <section id="institutional-cta" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Deploy Pre-Litigation Waves: Single ₹999 Test or Bulk CSV
                  </h2>
                </div>
                <NbfcBenchmarksCTA />
              </section>

              {/* Section 11: FAQs */}
              <section
                id="faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    FAQs: NBFC &amp; Fintech Pre-Litigation Recovery Benchmarks
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

              {/* Section 12: Primary Sources & Attribution */}
              <section
                id="primary-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    12
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
                  <span>Updated: {studyData.lastUpdated} &bull; Report ID: {studyData.reportId}</span>
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
