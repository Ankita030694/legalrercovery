import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import EdpmsTableOfContents from "./EdpmsTableOfContents";
import EdpmsScenarioTabs from "./EdpmsScenarioTabs";
import EdpmsNoticeCTA from "./EdpmsNoticeCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/rbi-edpms-unrealized-shipping-bill-write-off-caution-list-legal-notice";

const EXACT_H1 =
  "Clearing Aged Shipping Bills in RBI EDPMS: How Formal Advocate Legal Notices Satisfy AD-Bank 'Futile Recovery / Disproportionate Cost' Write-Off Norms";

const META_TITLE = "RBI EDPMS Shipping Bill Write-Off & Caution-List Guide";

const META_DESCRIPTION =
  "Stuck with open Shipping Bills >9 months in RBI EDPMS? Use advocate legal notices & futile recovery opinions for AD-bank write-offs & FEMA defense.";

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
          "RBI EDPMS unrealized shipping bill write-off and caution-list legal notice guide"
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
      "RBI Master Direction No. 16/2015-16 — Export of Goods and Services (Para C.18, C.20, C.23, C.24 & C.25 Write-Off & Caution-Listing Norms)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10395",
  },
  {
    title:
      "Foreign Exchange Management Act, 1999 (FEMA Sections 7, 8 & 13 — Duty to Furnish Particulars & Realize Export Proceeds)",
    url: "https://www.indiacode.nic.in/handle/123456789/1988",
  },
  {
    title:
      "FEMA (Export of Goods and Services) Regulations, 2015 (Regulation 9 — 9-Month Realization Period & Regulation 15 — Extension)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=10256",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Electronic Dispatch & Email/Courier Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Directorate General of Foreign Trade (DGFT) — e-BRC & Foreign Trade Policy Remission / Surrender Rules",
    url: "https://www.dgft.gov.in/",
  },
  {
    title:
      "ECGC Ltd. — Export Credit Insurance Claim Default Intimation & Legal Recovery Prerequisites",
    url: "https://www.ecgc.in/",
  },
];

const COURT_PRECEDENTS = [
  {
    title:
      "Strict Statutory Duty Under Foreign Exchange Law & Absence of Mens Rea Requirement",
    parties:
      "Directorate of Enforcement v. MCTM Corporation Pvt. Ltd. & Ors.",
    citation: "(1996) 2 SCC 471, Supreme Court of India",
    date: "Judgment Dated 11 January 1996",
    facts:
      "The exporter failed to repatriate foreign exchange proceeds within the statutory realization window. The defence argued that non-realization was due to commercial buyer default without any dishonest or fraudulent intent (mens rea).",
    holding:
      "The Supreme Court held that breach of foreign exchange repatriation obligations attracts civil adjudication penalties under the statute irrespective of mens rea. Consequently, an exporter cannot rely on passive commercial excuses; it must affirmatively demonstrate statutory compliance—such as documented recovery steps, bank extensions, or formal write-off approvals—to avoid adjudication penalties.",
    impact: "FEMA Section 8 Requires Provable 'Reasonable Steps' Paper Trail",
    takeaway:
      "An exporter's internal emails to a foreign buyer do not satisfy FEMA Section 8 or AD-Bank audit scrutiny. Formal Advocate Legal Demand Notices and tracked international service create the verifiable statutory record needed to defeat penalty proceedings.",
  },
  {
    title:
      "Corporate Criminal & Adjudicatory Liability Extending to Directors & Officers in Charge",
    parties: "Standard Chartered Bank & Ors. v. Directorate of Enforcement",
    citation: "(2005) 4 SCC 530, 5-Judge Constitution Bench, Supreme Court of India",
    date: "Judgment Dated 05 May 2005",
    facts:
      "A financial institution challenged prosecution and adjudication proceedings under foreign exchange legislation, contending that corporate entities and their officers could not be subjected to mandatory statutory penalties.",
    holding:
      "A 5-Judge Constitution Bench of the Supreme Court affirmed that corporate bodies and their responsible officers are squarely answerable under foreign exchange statutes. Under Section 42 of FEMA, 1999, every person in charge of and responsible for the conduct of the company's business is deemed liable unless they prove the contravention occurred without their knowledge or that they exercised all due diligence.",
    impact: "FEMA Section 42 Personal Exposure for Export Directors & CFOs",
    takeaway:
      "Export Directors, CFOs, and Compliance Heads must build an institutional due-diligence file—comprising Form ETX extensions, Advocate Notices, and Legal Opinions—before aged Shipping Bills trigger Enforcement Directorate Show Cause Notices.",
  },
  {
    title:
      "Mandatory Pre-Litigation Statutory Compliance & Commercial Dispute Discipline",
    parties: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.",
    citation: "2022 SCC OnLine SC 1028, Supreme Court of India",
    date: "Judgment Dated 17 August 2022",
    facts:
      "Commercial plaintiffs bypassed mandatory pre-institution statutory protocols before approaching commercial courts, arguing that procedural steps were merely directory.",
    holding:
      "The Supreme Court ruled that statutory pre-institution procedures enacted by Parliament are mandatory, not optional formalities, and non-compliance renders commercial filings defective.",
    impact: "Mandatory Statutory Compliance Before Write-Off or Suit",
    takeaway:
      "Just as commercial courts enforce mandatory pre-suit steps, AD Category-I Banks enforce RBI Master Direction Para C.23 prerequisites strictly—requiring documented legal demand and cost-benefit proof before authorizing any EDPMS write-off.",
  },
  {
    title:
      "Limitation Clock & Preserving Recoverability Windows for Cross-Border Claims",
    parties:
      "B.K. Educational Services Pvt. Ltd. v. Parag Gupta & Associates",
    citation: "(2019) 11 SCC 633, Supreme Court of India",
    date: "Judgment Dated 11 October 2018",
    facts:
      "Creditors sought to enforce aged commercial claims beyond the three-year limitation period under Article 137 of the Limitation Act, 1963 without prior acknowledgment or timely legal invocation.",
    holding:
      "The Supreme Court reaffirmed that the Limitation Act applies strictly to commercial recovery proceedings, and stale claims not pursued within three years from the date of default become time-barred unless saved by a valid Section 18 written acknowledgment.",
    impact: "3-Year Limitation Window Aligns With EDPMS Regularization",
    takeaway:
      "Waiting past 24 months not only triggers automatic RBI EDPMS Caution-Listing, it also erodes cross-border enforceability. Serving a formal Advocate Notice at Month 9–12 preserves both FEMA compliance and limitation rights.",
  },
];

const FAQS = [
  {
    question:
      "Can my AD Bank write off an open Shipping Bill in RBI EDPMS without an Advocate Legal Notice?",
    answer:
      "In most cases, no. Under Para C.23 of the RBI Master Direction on Export of Goods and Services, AD Category-I Banks (such as SBI, HDFC, ICICI, or Axis Bank) require documentary evidence that the exporter made bonafide efforts to recover the export proceeds—or that foreign legal action is commercially unviable. Informal WhatsApp chats or internal accounting emails are routinely rejected by bank forex compliance cells, making a formal Advocate Legal Demand Notice and a Disproportionate Foreign Litigation Cost Legal Opinion indispensable.",
  },
  {
    question:
      "What are the exact RBI write-off limits: 5% vs 10% under Para C.23?",
    answer:
      "Under RBI Master Direction No. 16/2015-16 (Para C.23), an exporter may self-write-off up to 5% of the total export proceeds realized during the previous calendar year, while Status Holder exporters may self-write-off up to 10%. AD Category-I Banks can independently allow write-offs up to 10% of the total export proceeds realized during the previous calendar year. Write-offs exceeding the AD Bank's delegated ceiling require prior approval from the concerned RBI Regional Office.",
  },
  {
    question:
      "How does an exporter get removed from the RBI EDPMS Caution List?",
    answer:
      "An exporter is auto-caution-listed in EDPMS when Shipping Bills remain unrealized beyond 24 months from the shipment date without an active extension. Removal (de-cautioning) requires submitting a regularization dossier to the AD Category-I Bank for every aged Shipping Bill—either proof of realization (FIRC/e-BRC), an approved Form ETX extension, or a Para C.23 write-off supported by an Advocate Legal Notice, courier/email proof, and a Disproportionate Foreign Litigation Cost Opinion.",
  },
  {
    question:
      "What is a 'Disproportionate Foreign Litigation Cost Legal Opinion' for AD-Bank write-offs?",
    answer:
      "It is a reasoned written opinion issued by an Indian Advocate comparing the stuck export invoice value against the estimated legal, translation, court-fee, and local-counsel costs required to sue the buyer in the foreign jurisdiction (for example, USD 12,000–25,000 in US, EU, or UK commercial courts). When paired with an unanswered Advocate Legal Demand Notice, it satisfies the AD Bank's 'futile recovery / disproportionate cost' criterion under Para C.23.",
  },
  {
    question:
      "What happens to Duty Drawback, RoDTEP, and GST refunds when an open Shipping Bill is written off?",
    answer:
      "Under RBI Master Direction Para C.23 and DGFT/Customs rules, before an AD Category-I Bank finalizes a write-off in EDPMS, the exporter must surrender proportionate export incentives (such as Duty Drawback and RoDTEP) corresponding to the unrealized portion of the Shipping Bill and submit the surrender challan/certificate to the AD Bank.",
  },
  {
    question:
      "Does an ECGC claim settlement allow unconditional EDPMS write-off?",
    answer:
      "Yes. Under Para C.24 of the RBI Master Direction on Export of Goods and Services, where an export bill is covered by an ECGC policy and ECGC settles the claim, the AD Category-I Bank is permitted to write off the unrealized Shipping Bill in EDPMS without counting it toward the 5% or 10% annual write-off ceiling, provided the exporter submits the ECGC claim settlement letter and confirms that no further recovery is pending.",
  },
  {
    question:
      "How does an Advocate Legal Notice protect against an Enforcement Directorate (ED) FEMA Section 7/8 notice?",
    answer:
      "FEMA Section 8 obligates an exporter to 'take all reasonable steps' to realize and repatriate export proceeds within the prescribed 9-month period (or extended period). Under Section 13, penalties attach when an exporter fails to demonstrate due diligence. Serving a formal Advocate Legal Demand Notice via tracked international courier and email (with BSA 2023 s.63 electronic logs) proves active, bonafide compliance under Section 8.",
  },
];

export default function RbiEdpmsWriteOffCautionListPage() {
  const articleSchema = {
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
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
      // TODO(reviewer): src/data/reviewers.ts is absent in this repository
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
    datePublished: "2026-11-17",
    dateModified: "2026-11-17",
    image: `${SITE_URL}/blog_money_recovery.png`,
    inLanguage: "en-IN",
  };

  const faqSchema = {
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
        name: "Exporters & Cross-Border Trade",
        item: `${SITE_URL}/industries/exporters-cross-border-trade-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "RBI EDPMS Write-Off & Caution-List Legal Notice",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>FEMA 1999 &amp; RBI Master Direction Para C.20 / C.23 / C.24</span>
            <span>&bull;</span>
            <span>Exporter CFO &amp; Treasury Compliance</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Statutory Summary Box + Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor &amp; FEMA Compliance Answer
            </span>
            Under RBI Master Direction Para C.23 and FEMA Section 8, AD Category-I Banks cannot close aged open Shipping Bills in EDPMS on informal exporter emails. Serving a formal{" "}
            <strong className="text-white">Advocate Legal Demand Notice</strong> paired with a{" "}
            <strong className="text-white">Disproportionate Foreign Litigation Cost Opinion</strong> provides the mandatory &ldquo;futile recovery&rdquo; proof for 5%/10% write-offs and Caution-List removal. Explore our{" "}
            <Link
              href="/industries/exporters-cross-border-trade-recovery"
              className="text-red-400 underline hover:text-red-300 font-semibold"
            >
              Exporters &amp; Cross-Border Trade Recovery Hub
            </Link>{" "}
            or compute your exact 9-month cutoff using the{" "}
            <Link
              href="/tools/softex-fema-export-realization-deadline-calculator"
              className="text-red-400 underline hover:text-red-300 font-semibold"
            >
              RBI FEMA Export Realization Calculator
            </Link>
            .
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-slate-100">9 Months</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                FEMA Reg. 9 Export Realization Window
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-amber-400">24 Months</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Auto-Trigger for RBI EDPMS Caution List
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-emerald-400">5% / 10%</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Annual Write-Off Caps (Para C.23)
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-red-400">Up to 3x</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                FEMA s.13 Penalty on Unexplained Default
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Exporters & Cross-Border Trade",
                href: "/industries/exporters-cross-border-trade-recovery",
              },
              { label: "RBI EDPMS Write-Off & Caution-List Legal Notice" },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <EdpmsTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Statutory Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Why Aged EDPMS Shipping Bills Block Banking &amp; Trigger FEMA Exposure
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For Indian exporters, merchant exporters, and buying houses, an unpaid overseas shipment creates a double crisis: not only is working capital trapped with a defaulting foreign buyer, but the Customs-linked{" "}
                <strong>Export Data Processing and Monitoring System (EDPMS)</strong> keeps the Shipping Bill flagged as &ldquo;open&rdquo; past the statutory 9-month realization window under Regulation 9 of the{" "}
                <em>FEMA (Export of Goods and Services) Regulations, 2015</em>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When open Shipping Bills age past 9 months without an approved <strong>Form ETX</strong> extension, Authorized Dealer (AD) Category-I Banks (SBI, HDFC, ICICI, Axis, Bank of Baroda) freeze fresh <strong>e-BRC</strong> issuances, restrict Packing Credit in Foreign Currency (PCFC/EPC), and report chronic overdues. Once any Shipping Bill crosses <strong>24 months</strong> unrealized without extension, RBI EDPMS automatically places the exporter&rsquo;s IEC on the <strong>Caution List</strong>, barring banks from negotiating export documents except against 100% advance payment or an irrevocable Letter of Credit.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900 leading-relaxed">
                <strong className="font-bold text-amber-950">
                  Critical Compliance Reality:
                </strong>{" "}
                Thousands of Indian exporters are not even expecting cash back from an insolvent or absconding overseas buyer—they urgently need compliant legal documentation so their AD Category-I Bank can legally write off the open Shipping Bill in EDPMS and lift bank blocks.
              </div>
            </section>

            {/* Section 2: Bare-Act Timeline & SVG Escalation Rail */}
            <section
              id="heading-edpms-timeline"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Statutory Timeline: 9-Month FEMA Rule to 24-Month Caution List
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                FEMA Section 7 and Section 8 operate on strict statutory clocks. Tracking each milestone prevents an administrative buyer default from escalating into an Enforcement Directorate (ED) Show Cause Notice under Section 13.
              </p>

              {/* Desktop SVG Escalation Rail */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-5 overflow-x-auto">
                <svg
                  width="760"
                  height="190"
                  viewBox="0 0 760 190"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                  role="img"
                  aria-label="RBI EDPMS 9-month to 24-month statutory escalation timeline"
                >
                  <line
                    x1="60"
                    y1="56"
                    x2="700"
                    y2="56"
                    stroke="#475569"
                    strokeWidth="3"
                    strokeDasharray="6 4"
                  />
                  {/* Node 1 */}
                  <circle cx="80" cy="56" r="16" fill="#10B981" />
                  <text x="80" y="61" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    M0
                  </text>
                  <text x="80" y="96" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="bold">
                    Let Export Order
                  </text>
                  <text x="80" y="114" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Shipping Bill logged
                  </text>
                  <text x="80" y="128" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    in RBI EDPMS
                  </text>

                  {/* Node 2 */}
                  <circle cx="235" cy="56" r="16" fill="#F59E0B" />
                  <text x="235" y="61" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="bold">
                    M9
                  </text>
                  <text x="235" y="96" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="bold">
                    9-Month Cutoff
                  </text>
                  <text x="235" y="114" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Reg. 9 deadline; file
                  </text>
                  <text x="235" y="128" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Form ETX + Notice
                  </text>

                  {/* Node 3 */}
                  <circle cx="390" cy="56" r="16" fill="#DC2626" />
                  <text x="390" y="61" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    15d
                  </text>
                  <text x="390" y="96" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="bold">
                    Advocate Notice
                  </text>
                  <text x="390" y="114" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Courier + Email +
                  </text>
                  <text x="390" y="128" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    BSA s.63 Logs
                  </text>

                  {/* Node 4 */}
                  <circle cx="545" cy="56" r="16" fill="#DC2626" />
                  <text x="545" y="61" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
                    M24
                  </text>
                  <text x="545" y="96" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="bold">
                    Auto Caution-List
                  </text>
                  <text x="545" y="114" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Para C.25 freeze on
                  </text>
                  <text x="545" y="128" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    DA/DP &amp; PCFC limits
                  </text>

                  {/* Node 5 */}
                  <circle cx="690" cy="56" r="16" fill="#3B82F6" />
                  <text x="690" y="61" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
                    C.23
                  </text>
                  <text x="690" y="96" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="bold">
                    EDPMS Write-Off
                  </text>
                  <text x="690" y="114" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Futile Cost Opinion
                  </text>
                  <text x="690" y="128" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    + De-Cautioning
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
                {[
                  {
                    badge: "Month 0",
                    title: "Let Export Order (LEO)",
                    desc: "Shipping Bill auto-transmitted from ICEGATE to RBI EDPMS.",
                  },
                  {
                    badge: "Month 9",
                    title: "Reg. 9 Realization Cutoff",
                    desc: "File Form ETX with AD Bank & deploy Advocate Demand Notice.",
                  },
                  {
                    badge: "15-Day Cure",
                    title: "Cross-Border Legal Notice",
                    desc: "Tracked DHL/FedEx + Email dispatch with BSA 2023 s.63 certificate.",
                  },
                  {
                    badge: "Month 24",
                    title: "EDPMS Caution-Listing & Write-Off",
                    desc: "Submit Futile Recovery Opinion + CA Certificate under Para C.23.",
                  },
                ].map((node) => (
                  <div
                    key={node.badge}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <span className="inline-block px-2 py-0.5 rounded bg-[#DC2626] text-[10px] font-bold uppercase mb-1.5">
                      {node.badge}
                    </span>
                    <p className="text-sm font-bold">{node.title}</p>
                    <p className="text-xs text-slate-300 mt-1">{node.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Dark-Header Write-Off Matrix */}
            <section
              id="heading-writeoff-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  RBI Master Direction Para C.23 &amp; C.24 Write-Off Authority Matrix
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before approaching your AD Category-I Bank, identify which statutory write-off bucket applies to your Shipping Bill. For broader commercial collection strategies where the buyer is still solvent, review our{" "}
                <Link
                  href="/recovery/export-dues"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Export Dues Recovery Playbook
                </Link>{" "}
                and{" "}
                <Link
                  href="/legal-notice-to-international-client-unpaid-invoice-recovery"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  International Client Unpaid Invoice Notice Guide
                </Link>
                .
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Write-Off Category</th>
                      <th className="p-3.5 font-bold">RBI Annual Ceiling</th>
                      <th className="p-3.5 font-bold">Approving Authority</th>
                      <th className="p-3.5 font-bold">Mandatory Legal Proof</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Self Write-Off (Normal Exporter)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Up to <strong>5%</strong> of previous calendar year&rsquo;s realized export proceeds
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Exporter declaration routed via AD Category-I Bank
                      </td>
                      <td className="p-3.5 text-slate-700">
                        CA Certificate + recovery correspondence / Advocate Notice + incentive surrender
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Self Write-Off (Status Holder)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Up to <strong>10%</strong> of previous calendar year&rsquo;s realized export proceeds
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Status Holder declaration via AD Category-I Bank
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Valid Status Holder Certificate + CA Certificate + documented recovery steps
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        AD-Bank Write-Off (Para C.23)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Up to <strong>10%</strong> of previous calendar year&rsquo;s realized export proceeds
                      </td>
                      <td className="p-3.5 text-slate-700">
                        AD Category-I Bank (Forex Compliance Committee)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        <strong>Advocate Legal Notice</strong> + <strong>Futile Recovery / Disproportionate Cost Legal Opinion</strong> + insolvency/closure proof
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Excess Write-Off (&gt;10% Ceiling)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Above 10% annual FOB realization ceiling
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Reserve Bank of India (RBI Regional Office)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        AD-Bank recommendation + full legal dossier, Embassy/Consulate report &amp; Legal Opinion
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        ECGC Claim Settled (Para C.24)
                      </td>
                      <td className="p-3.5 text-emerald-700 font-bold">
                        Uncapped (Excluded from 5% / 10% limit)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        AD Category-I Bank (Unconditional)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        ECGC claim settlement letter + prior Advocate Notice / ECGC default filing proof
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Futile Recovery / Disproportionate Cost Legal Opinion */}
            <section
              id="heading-futile-opinion"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  How the &ldquo;Futile Recovery / Disproportionate Cost&rdquo; Legal Opinion Works
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Para C.23(iii) of the RBI Master Direction, an AD Category-I Bank may allow write-off where the exporter produces documentary evidence that legal action in the buyer&rsquo;s country would be futile or that the cost of foreign litigation would be disproportionate to the unrealized export bill.
              </p>

              {/* Cost-Benefit Comparison Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 space-y-4">
                <p className="text-xs font-extrabold uppercase tracking-widest text-red-400">
                  Worked Cost-Benefit Illustration (AD-Bank Compliance Standard)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                    <p className="font-bold text-slate-100">
                      Stuck Export Receivable (Shipping Bill Open &gt;12M)
                    </p>
                    <p className="text-2xl font-black text-amber-400">
                      USD 24,500 (~&#8377;20.6 Lakh)
                    </p>
                    <p className="text-slate-300">
                      Buyer in EU / US / UK dissolved or unresponsive after Advocate Legal Demand Notice + tracked courier delivery.
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                    <p className="font-bold text-slate-100">
                      Estimated Foreign Litigation &amp; Enforcement Cost
                    </p>
                    <p className="text-2xl font-black text-red-400">
                      USD 18,000 &ndash; 28,000
                    </p>
                    <p className="text-slate-300">
                      Local attorney retainer, apostilled translations, court filing fees, and zero-asset recovery risk ={" "}
                      <strong className="text-white">Commercially Disproportionate</strong>.
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed border-t border-white/10 pt-3">
                  When an Indian Advocate formalizes this comparison into a signed Legal Opinion backed by an unanswered 15-day Demand Notice and courier/email logs, the AD Bank&rsquo;s Forex Compliance Committee receives an audit-ready record satisfying RBI Para C.23.
                </p>
              </div>
            </section>

            {/* Section 5: Interactive 4-Scenario Explorer */}
            <section
              id="heading-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  4 EDPMS Default &amp; Caution-List Scenarios: Statutory Counter-Moves
                </h2>
              </div>
              <EdpmsScenarioTabs />
            </section>

            {/* Section 6: Precedent Cards */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Supreme Court Precedents Governing FEMA Export Compliance
                </h2>
              </div>

              <div className="space-y-5">
                {COURT_PRECEDENTS.map((item) => (
                  <div
                    key={item.parties}
                    className="relative bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 pl-6 sm:pl-7 overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                        {item.citation}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                      {item.parties}
                    </h3>
                    <p className="text-xs font-semibold text-slate-600 mb-3">
                      {item.title}
                    </p>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <p>
                        <strong className="text-slate-900">Facts:</strong> {item.facts}
                      </p>
                      <p>
                        <strong className="text-slate-900">Holding:</strong> {item.holding}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-red-50 border border-red-200 text-[#DC2626] text-[11px] font-bold">
                        {item.impact}
                      </span>
                      <p className="text-xs text-slate-700 font-medium">
                        {item.takeaway}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: ED & AD-Bank Defense Pre-emption Table + Dual CTA */}
            <section
              id="heading-defense-table"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Pre-Empting AD-Bank Rejections &amp; ED FEMA Section 7/8 Objections
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">AD-Bank / ED Objection</th>
                      <th className="p-3.5 font-bold">Statutory Risk</th>
                      <th className="p-3.5 font-bold">Pre-Emptive Legal Remedy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        &ldquo;Internal follow-up emails are insufficient proof of recovery.&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Write-off rejected under Para C.23; Shipping Bill stays open past 24M.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Serve formal Advocate Legal Demand Notice on Law Firm letterhead + international courier + BSA s.63 email logs.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        &ldquo;Exporter took no steps to sue the defaulting foreign buyer.&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-700">
                        FEMA s.8 &amp; s.13 adjudication exposure for directors.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Submit Advocate&rsquo;s Disproportionate Foreign Litigation Cost Opinion proving foreign suit cost exceeds invoice recovery.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        &ldquo;Export incentives (RoDTEP/Drawback) not reconciled.&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-700">
                        DGFT / Customs show-cause recovery with 15% interest.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Attach Customs/DGFT proportionate incentive surrender challan along with CA reconciliation certificate.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <EdpmsNoticeCTA />
            </section>

            {/* Section 8: AD-Bank Dossier Checklist */}
            <section
              id="heading-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  8-Point AD-Bank Write-Off &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Assemble these eight documents before submitting your EDPMS write-off or de-cautioning application. For IT/SaaS SOFTEX bills, also review our{" "}
                <Link
                  href="/us-uk-uae-client-unpaid-software-invoice-softex-fema-recovery"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Cross-Border SOFTEX &amp; FEMA Recovery Guide
                </Link>
                , our{" "}
                <Link
                  href="/recovery/international-client-payment"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  International Client Payment Recovery Desk
                </Link>
                , and our{" "}
                <Link
                  href="/templates/legal-notice-reply-format"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Commercial Notice &amp; Reply Template Workspace
                </Link>
                .
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  "1. Advocate Legal Demand Notice citing Shipping Bill No., Invoice No., and Bill of Lading / AWB",
                  "2. Tracked International Courier (DHL/FedEx) & Official Email Dispatch Proof",
                  "3. BSA 2023 Section 63 Certificate authenticating email headers & buyer correspondence",
                  "4. Advocate's Disproportionate Foreign Litigation Cost / Futile Recovery Legal Opinion",
                  "5. Chartered Accountant (CA) Certificate verifying 5% / 10% annual export realization ceiling",
                  "6. Form ETX / Prior AD-Bank Extension Letters (if >9 months from shipment date)",
                  "7. Proportionate Duty Drawback / RoDTEP Surrender Challan & Shipping Bill Copy",
                  "8. Buyer Insolvency / Registry Dissolution Extract or ECGC Claim Settlement Letter (Para C.24)",
                ].map((point) => (
                  <div
                    key={point}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs sm:text-sm font-medium text-slate-800 flex items-start gap-2.5"
                  >
                    <span className="text-emerald-600 font-bold shrink-0">&#10003;</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Frequently Asked Questions: RBI EDPMS Write-Off &amp; Caution-List
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-colors open:bg-white open:border-slate-300"
                  >
                    <summary className="cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Statutory Authorities, Bare Acts &amp; Official Portals
                </h2>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&rarr;</span>
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
              <p className="text-[11px] text-slate-500 pt-3 border-t border-slate-100">
                Reviewed for statutory accuracy by Anuj Anand Malik, Advocate &amp; Founder, AMA Legal Solutions.
              </p>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
