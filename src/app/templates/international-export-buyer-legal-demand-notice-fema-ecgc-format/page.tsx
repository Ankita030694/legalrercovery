import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ExportDemandNoticeCTA from "./ExportDemandNoticeCTA";
import ExportDemandNoticeTOC from "./ExportDemandNoticeTOC";
import ExportDemandNoticeWorkspace from "./ExportDemandNoticeWorkspace";

export const revalidate = 86400;

const PAGE_PATH = "/templates/international-export-buyer-legal-demand-notice-fema-ecgc-format";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository; attributed to Anuj Anand Malik (Advocate & Founder, AMA Legal Solutions).
const EXACT_H1 =
  "Ready-to-Use International Legal Demand Notice Format for Indian Exporters (Compliant with AD-Bank EDPMS Write-Off & ECGC Audit)";

const EXACT_TITLE = "Export Buyer Default Legal Notice Format (FEMA & ECGC)";

const EXACT_DESCRIPTION =
  "Downloadable cross-border export demand notice citing Bill of Lading, Shipping Bill No., Incoterms, UN CISG, ECGC credit reporting & RBI EDPMS FEMA audit.";

export const metadata: Metadata = {
  title: EXACT_TITLE,
  description: EXACT_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: EXACT_TITLE,
    description: EXACT_DESCRIPTION,
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("International Export Buyer Legal Demand Notice Format"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: EXACT_TITLE,
    description: EXACT_DESCRIPTION,
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
    title: "Foreign Exchange Management Act (FEMA), 1999 — Sections 7, 8 & 13 (Export Realization & Repatriation Duty)",
    url: "https://www.indiacode.nic.in/handle/123456789/1988",
  },
  {
    title: "RBI Master Direction — Export of Goods and Services (EDPMS Monitoring, Para C.20 & Clause C.24 Write-Off)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10395",
  },
  {
    title: "UN Convention on Contracts for the International Sale of Goods (UN CISG, 1980) — Articles 38, 39, 53, 74 & 78",
    url: "https://uncitral.un.org/en/texts/salegoods/conventions/sale_of_goods/cisg",
  },
  {
    title: "Code of Civil Procedure, 1908 — Section 44A (Execution of Decrees in Reciprocating Territories: UK, UAE, Singapore)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Electronic Admissibility of SWIFT Advice, Email & WhatsApp Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    question: "Why do domestic Section 138 or Order 37 Delhi legal notices fail against foreign buyers?",
    answer:
      "A foreign importer in the US, Germany, UK, or UAE is not governed by India's Negotiable Instruments Act Section 138 (unless an Indian rupee cheque was dishonoured in India) or local Delhi/Mumbai Order XXXVII summary summons. Sending a domestic template signals that the exporter lacks cross-border legal capability, while omitting the Shipping Bill No., IEC, AD Code, and Bill of Lading numbers—which your Indian AD Category-I Bank requires to log bonafide recovery efforts in RBI EDPMS.",
  },
  {
    question: "How does this legal notice help clear aged Shipping Bills in RBI EDPMS?",
    answer:
      "Under the RBI Master Direction on Export of Goods and Services (Para C.20 and Para C.23), an AD Category-I Bank cannot process an EDPMS write-off or Caution-List removal unless the exporter demonstrates documentary proof of bonafide recovery efforts or disproportionate foreign litigation cost. Serving a fact-verified notice citing the exact Shipping Bill number, AD Code, IEC, and port of loading creates the exact audit trail your bank's FEMA desk requires.",
  },
  {
    question: "Is a formal legal demand notice mandatory before filing an ECGC default claim?",
    answer:
      "Yes. Under ECGC Standard Policies (SCR / Specific Buyer Policies), the insured exporter must report overdue payments (Form 203 / Form 205) within the prescribed timeline and take all reasonable legal steps to minimize loss, including serving a formal legal demand notice on the defaulting foreign buyer. Upon ECGC claim settlement, RBI Master Direction Clause C.24 permits unconditional EDPMS write-off without the 5%/10% self-write-off ceiling.",
  },
  {
    question: "What clauses should be included if the foreign buyer refuses to retire CAD / D/P documents?",
    answer:
      "When a buyer refuses Cash Against Documents (CAD) or Documents Against Payment (D/P) through the presenting bank, container demurrage and port detention charges accrue daily at the destination port. Toggle our CAD/DP Demurrage & Resale Mitigation clause to put the buyer on formal 7-day notice under UN CISG Articles 53, 64, and 88 that the exporter will divert or resell the cargo and hold the buyer liable for the net shortfall plus port charges.",
  },
  {
    question: "Can Indian exporters cite the UN CISG if India is not a signatory?",
    answer:
      "Yes, in two common scenarios: (1) where the export contract or Incoterms purchase order selects the law of a CISG Contracting State (such as the USA, Germany, France, China, Singapore, or UAE) or international trade usage; or (2) where the tribunal applies CISG Articles 38–39 (timely inspection bar) and Article 78 (interest on overdue price) as lex mercatoria alongside the Indian Contract Act, 1872 and Sale of Goods Act, 1930.",
  },
  {
    question: "How should an Indian exporter serve a legal notice on an overseas buyer to satisfy BSA 2023 s.63?",
    answer:
      "Serve the notice simultaneously via (1) Official Corporate Email to the buyer's accounts payable, procurement, and managing director addresses; (2) International Tracked Courier (DHL/FedEx) or Registered Air Mail (Speed Post International) to the registered foreign office; and (3) WhatsApp PDF to the buyer's commercial signatory. Preserve the MIME email headers, courier airway bill delivery receipt, and a Section 63 BSA 2023 Electronic Evidence Certificate.",
  },
];

export default function ExportBuyerLegalNoticePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}${PAGE_PATH}#article`,
        headline: EXACT_H1,
        description: EXACT_DESCRIPTION,
        mainEntityOfPage: `${SITE_URL}${PAGE_PATH}`,
        datePublished: "2026-11-17T09:00:00+05:30",
        dateModified: "2026-11-17T09:00:00+05:30",
        inLanguage: "en-IN",
        author: {
          "@type": "Person",
          name: "Anuj Anand Malik",
          jobTitle: "Advocate & Founder",
          worksFor: {
            "@type": "LegalService",
            name: "AMA Legal Solutions",
          },
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
        image: `${SITE_URL}/blog_money_recovery.png`,
      },
      {
        "@type": ["DigitalDocument", "CreativeWork"],
        "@id": `${SITE_URL}${PAGE_PATH}#document`,
        name: EXACT_TITLE,
        headline: EXACT_H1,
        description: EXACT_DESCRIPTION,
        url: `${SITE_URL}${PAGE_PATH}`,
        inLanguage: "en-IN",
        encodingFormat: "text/plain",
        isAccessibleForFree: true,
        about: {
          "@type": "Thing",
          name: "Cross-Border Export Debt Recovery, RBI EDPMS Write-Off & ECGC Default Notice",
        },
        creator: {
          "@type": "Organization",
          name: "LegalRecovery.in",
          url: SITE_URL,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}${PAGE_PATH}#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}${PAGE_PATH}#breadcrumb`,
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
            name: EXACT_TITLE,
            item: `${SITE_URL}${PAGE_PATH}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-15 · Cross-Border Export Trade Template</span>
            <span>·</span>
            <span>FEMA EDPMS &amp; ECGC Audit-Ready</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Summary · FEMA, UN CISG &amp; ECGC
            </span>
            Under{" "}
            <Link
              href="/industries/exporters-cross-border-trade-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Indian exporter cross-border recovery rules
            </Link>{" "}
            and FEMA 1999, overdue foreign bills beyond 9 months trigger RBI EDPMS Caution-Listing and Customs Drawback clawbacks. This fact-verified notice pairs UN CISG / Incoterms commercial pressure with Shipping Bill, IEC, AD-Code, and ECGC Form 203/205 identifiers required by your AD Category-I Bank.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-slate-100">9 Months</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                RBI FEMA Export Realization Limit
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-emerald-400">Para C.20 / C.24</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                AD-Bank EDPMS Write-Off &amp; ECGC Closure
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-amber-400">UN CISG / UCP 600</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Cross-Border Governing Law &amp; LC Rules
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-red-400">Form 203 / 205</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                ECGC Default &amp; Credit-Registry Trigger
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
              { label: "Exporters & Cross-Border Trade", href: "/industries/exporters-cross-border-trade-recovery" },
              { label: "International Export Legal Notice Format", href: PAGE_PATH },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <ExportDemandNoticeTOC />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Interactive Workspace */}
            <section
              id="interactive-workspace"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Interactive Export Demand Notice &amp; Clause Workspace
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select your export default scenario below—Open Account / D/A overdue invoice, CAD / D/P port document refusal, or ECGC-insured buyer default—and customize your <strong>IEC, AD Bank Code, Shipping Bill No., Bill of Lading, and Incoterms 2020</strong>. Every field updates the live fact-verified notice in real time.
              </p>

              <ExportDemandNoticeWorkspace />
            </section>

            {/* Section 2: Why Domestic Drafts Fail */}
            <section
              id="why-domestic-drafts-fail"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Why Domestic Section 138 Drafts Fail Foreign Buyers &amp; AD-Banks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many Indian exporters copy generic domestic templates citing <em>&ldquo;Section 138 NI Act / Order 37 CPC Tis Hazari Delhi&rdquo;</em> when chasing an overdue invoice in Chicago, Hamburg, London, or Dubai. That single mistake destroys credibility with the overseas buyer&apos;s general counsel and fails the documentary audit of your Indian Authorized Dealer (AD) Category-I Bank.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-5 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                    What Fails in Domestic Notices
                  </span>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-4">
                    <li>Citing Indian NI Act s.138 where no Indian cheque was issued.</li>
                    <li>Omitting Shipping Bill No., Port Code, IEC, and AD-Bank Code.</li>
                    <li>No mention of Incoterms 2020 risk-transfer or UN CISG Art. 38/39 inspection bar.</li>
                    <li>Zero reference to ECGC buyer default registries or international arbitration seats.</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 sm:p-5 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    What This Cross-Border Template Achieves
                  </span>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-4">
                    <li>Puts foreign directors on formal notice under UN CISG, ICC URC 522 / UCP 600, and arbitration clauses.</li>
                    <li>Creates AD-Bank audit-ready proof of bonafide recovery efforts for RBI EDPMS Para C.20/C.23 closure.</li>
                    <li>Satisfies ECGC policy pre-claim legal action requirements (Form 203 / Form 205).</li>
                    <li>Preserves BSA 2023 s.63 electronic service admissibility for Indian &amp; foreign proceedings.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: RBI EDPMS & ECGC Audit-Trail Architecture */}
            <section
              id="edpms-ecgc-audit-trail"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  RBI EDPMS Para C.20 &amp; ECGC Clause C.24 Audit-Trail Architecture
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 7 and Section 8 of FEMA, 1999 read with the RBI Master Direction on Export of Goods and Services, export proceeds must be realized within <strong>9 months</strong> from the date of shipment (check exact deadlines using our{" "}
                <Link
                  href="/tools/softex-fema-export-realization-deadline-calculator"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  RBI FEMA 9-Month Export Realization Calculator
                </Link>
                ). When a foreign buyer defaults, your legal demand notice must simultaneously serve two regulatory desks in India:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Regulatory Track</th>
                      <th className="p-3.5 font-bold">Governing Provision</th>
                      <th className="p-3.5 font-bold">Mandatory Notice Identifiers</th>
                      <th className="p-3.5 font-bold">Compliance Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">AD-Bank EDPMS Write-Off</td>
                      <td className="p-3.5 text-slate-700">RBI Master Direction Para C.20 &amp; C.23</td>
                      <td className="p-3.5 text-slate-700">Shipping Bill No., Port Code, IEC, AD Code, Invoice No.</td>
                      <td className="p-3.5 text-slate-700">Proves bonafide recovery effort &amp; disproportionate foreign legal cost for write-off / Caution-List removal.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">ECGC Claim &amp; Closure</td>
                      <td className="p-3.5 text-slate-700">ECGC Policy + RBI Clause C.24</td>
                      <td className="p-3.5 text-slate-700">Buyer-wise limit ref, Form 203/205 default notice, B/L No.</td>
                      <td className="p-3.5 text-slate-700">Unlocks ECGC claim settlement &amp; unconditional EDPMS write-off bypassing 5%/10% self-write-off caps.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Customs Drawback / RoDTEP</td>
                      <td className="p-3.5 text-slate-700">Customs Act s.75 &amp; Drawback Rule 18</td>
                      <td className="p-3.5 text-slate-700">Shipping Bill date, AD-Bank ETX / write-off advice</td>
                      <td className="p-3.5 text-slate-700">Defends against Customs Show Cause Notices demanding clawback of Duty Drawback &amp; RoDTEP scripts.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Cross-Border Enforcement</td>
                      <td className="p-3.5 text-slate-700">UN CISG / SIAC / CPC s.44A</td>
                      <td className="p-3.5 text-slate-700">Incoterms 2020, cure period, SWIFT MT103 remittance clause</td>
                      <td className="p-3.5 text-slate-700">Supports arbitration or foreign decree execution in reciprocating territories (UK, UAE, Singapore).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Shipping Bill, BL & Incoterms Schedule */}
            <section
              id="shipping-annexure-schedule"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Shipping Bill, Bill of Lading &amp; Incoterms Annexure Schedule
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before dispatching your notice—or uploading a batch to your AD Bank for EDPMS regularization—attach a clean 6-document evidentiary bundle. Foreign buyers rarely dispute a claim when confronted with customs-validated shipment records showing clean handover under the contracted Incoterm:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: "1. Customs Shipping Bill & LEO",
                    desc: "ICEGATE Shipping Bill number, date, port code (e.g., INNSA1 / INMAA1), and Let Export Order (LEO) confirming physical export.",
                  },
                  {
                    title: "2. Clean Bill of Lading / AWB",
                    desc: "Master/House B/L or Air Waybill evidencing carrier receipt in apparent good order and transfer of risk under FOB/CIF/CFR.",
                  },
                  {
                    title: "3. Commercial Invoice & Packing List",
                    desc: "HSN codes, unit pricing, currency, net/gross weight, and Incoterms 2020 delivery terms matching the buyer's Purchase Order.",
                  },
                  {
                    title: "4. SWIFT / Bank Presentation Memo",
                    desc: "For D/A or CAD/DP shipments, include the Indian AD Bank's covering schedule and foreign presenting bank's non-payment/refusal advice.",
                  },
                  {
                    title: "5. Pre-Shipment Inspection / COA",
                    desc: "SGS, Intertek, or third-party Certificate of Analysis / Quality Certificate defeating afterthought quality or weight-shortage claims.",
                  },
                  {
                    title: "6. ECGC Overdue Filing (Form 203/205)",
                    desc: "Acknowledgment of overdue declaration with ECGC Limited if the shipment is covered under a Standard or Specific Buyer Policy.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1.5"
                  >
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900">{item.title}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Cross-Border Service Protocol */}
            <section
              id="cross-border-service-protocol"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Cross-Border Service Protocol &amp; BSA 2023 s.63 Evidence Log
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Physical service across borders can take 5–10 days via international courier, whereas electronic service is instantaneous. To ensure your notice is enforceable in both foreign tribunals and Indian RBI/ECGC audits, serve simultaneously across three logged channels:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Dispatch Channel</th>
                      <th className="p-3.5 font-bold">Target Recipients</th>
                      <th className="p-3.5 font-bold">Audit &amp; Evidentiary Proof</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">1. Official Corporate Email</td>
                      <td className="p-3.5 text-slate-700">Accounts Payable, Procurement Head, CFO &amp; Legal Counsel</td>
                      <td className="p-3.5 text-slate-700">Full MIME headers, SMTP delivery log &amp; BSA 2023 s.63 Certificate.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">2. International Courier / RPAD</td>
                      <td className="p-3.5 text-slate-700">Registered Office &amp; Principal Place of Business</td>
                      <td className="p-3.5 text-slate-700">DHL / FedEx Airway Bill or India Post International EMS signed POD.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">3. WhatsApp Business PDF</td>
                      <td className="p-3.5 text-slate-700">Authorized Commercial Buyer / Managing Director</td>
                      <td className="p-3.5 text-slate-700">Timestamped PDF export + double-tick read receipt under BSA s.63.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6: Related Export Recovery Guides */}
            <section
              id="related-export-guides"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Related Export Recovery Guides &amp; Calculators
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Exporters & Cross-Border Trade Recovery Hub",
                    href: "/industries/exporters-cross-border-trade-recovery",
                    tag: "Parent Industry Hub",
                    desc: "Complete IND-15 playbook covering FEMA, RBI EDPMS, ECGC claims, Customs Drawback & CPC s.44A execution.",
                  },
                  {
                    title: "RBI EDPMS Write-Off & Caution-List Legal Notice Guide",
                    href: "/rbi-edpms-unrealized-shipping-bill-write-off-caution-list-legal-notice",
                    tag: "FEMA & EDPMS",
                    desc: "How to satisfy AD-Bank Para C.20/C.23 'futile recovery' norms and remove EDPMS Caution-Listing.",
                  },
                  {
                    title: "ECGC Export Default Claim & Clause C.24 Closure",
                    href: "/ecgc-export-credit-insurance-claim-legal-notice-default-procedure",
                    tag: "ECGC Procedure",
                    desc: "Form 203/205 timelines, mandatory legal notice prerequisites & unconditional Clause C.24 EDPMS closure.",
                  },
                  {
                    title: "Foreign Buyer Not Retiring CAD / D/P Documents",
                    href: "/foreign-buyer-not-retiring-cad-dp-documents-abandoned-container-port",
                    tag: "Port Demurrage",
                    desc: "Stop container detention & demurrage bleeding at foreign ports through urgent CISG Art. 88 resale notices.",
                  },
                  {
                    title: "Export Dues Recovery Service",
                    href: "/recovery/export-dues",
                    tag: "Dedicated Service",
                    desc: "End-to-end fact-verified international export receivable recovery and AD-Bank compliance support.",
                  },
                  {
                    title: "Legal Notice to International Client for Unpaid Invoice",
                    href: "/legal-notice-to-international-client-unpaid-invoice-recovery",
                    tag: "Cross-Border Notice",
                    desc: "Practical cross-border invoice recovery workflow for Indian exporters and B2B service firms.",
                  },
                  {
                    title: "International Client Payment Recovery",
                    href: "/recovery/international-client-payment",
                    tag: "Global Recovery",
                    desc: "Recover overdue USD, EUR, and GBP receivables across USA, UK, EU, UAE, and Singapore.",
                  },
                  {
                    title: "RBI FEMA 9-Month Export Realization Calculator",
                    href: "/tools/softex-fema-export-realization-deadline-calculator",
                    tag: "Interactive Tool",
                    desc: "Calculate your 9-month realization deadline, Form ETX extension dates, and AD-Bank write-off caps.",
                  },
                ].map((card) => (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="group block bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626] rounded-xl p-4 transition-all shadow-sm"
                  >
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red-50 text-[#DC2626] mb-1.5">
                      {card.tag}
                    </span>
                    <p className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                      {card.title}
                    </p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{card.desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 7: FAQs */}
            <section
              id="faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Frequently Asked Questions: Export Buyer Legal Notices
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:border-slate-300 transition-all"
                  >
                    <summary className="cursor-pointer font-bold text-sm sm:text-base text-slate-900 list-none flex items-center justify-between gap-3">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
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

            {/* Primary Statutory Sources */}
            <section className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-red-400">
                Primary Statutory &amp; Regulatory Authorities
              </p>
              <ul className="space-y-2 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url}>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-200 hover:text-red-300 underline"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* Dual-Track B2B CTA */}
            <ExportDemandNoticeCTA />
          </div>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
