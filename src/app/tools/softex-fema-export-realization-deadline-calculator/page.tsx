import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import SoftexFemaCalculatorClient from "./SoftexFemaCalculatorClient";
import SoftexFemaCalculatorTOC from "./SoftexFemaCalculatorTOC";
import SoftexFemaCalculatorCTA from "./SoftexFemaCalculatorCTA";

export const revalidate = 86400;

const PAGE_URL = "/tools/softex-fema-export-realization-deadline-calculator";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "RBI FEMA 9-Month Export & SOFTEX Realization Calculator";
const PAGE_DESCRIPTION =
  "Calculate your exact 9-month RBI EDPMS realization deadline, AD-Bank self-write-off eligibility (5% vs 10% cap) & legal notice rules under FEMA Master Directions.";
const H1_TEXT =
  "Interactive RBI FEMA 9-Month Export / SOFTEX Realization Deadline & Write-Off Eligibility Calculator";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL_URL,
    type: "website",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(PAGE_TITLE),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
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
    question: "What is the statutory realization deadline for software and goods exports under FEMA?",
    answer:
      "Under Regulation 9 of the Foreign Exchange Management (Export of Goods and Services) Regulations, 2016 and RBI Master Direction No. 16/2015-16, the full export value of goods or software must be realized and repatriated to India within 9 months from the date of export (or invoice date for software exports covered by SOFTEX forms). For exports made to an overseas warehouse or SEZ unit approved by RBI, the statutory realization period is extended to 15 months.",
  },
  {
    question: "What is the difference between the 5% Normal and 10% Status Holder self-write-off limit?",
    answer:
      "Under Para C.22 of the RBI Master Direction on Export of Goods and Services, Authorized Dealer (AD) Category-I Banks may permit exporters to self-write off unrealized export bills up to 5% of their total export proceeds realized during the preceding calendar year for normal exporters. For Status Holders (One Star to Five Star Export Houses recognized under the Foreign Trade Policy), this delegated self-write-off limit is doubled to 10% of preceding calendar year realized proceeds.",
  },
  {
    question: "Why do AD Banks insist on an Advocate Legal Demand Notice before approving a write-off?",
    answer:
      "Para C.22 and Para C.23 of the RBI Master Direction strictly require that an exporter must satisfy the AD Bank that all reasonable recovery efforts have been exhausted without success. AD Banks are audited by RBI and cannot accept self-declarations alone. Serving a Fact-verified cross-border legal demand notice—corroborated by Section 63 BSA electronic evidence certificates or international courier tracking dossiers—proves bona fide recovery attempts and provides the mandatory paper trail for EDPMS closure.",
  },
  {
    question: "What happens when an unrealized export bill remains open in EDPMS past 9 months?",
    answer:
      "When 9 months lapse without e-BRC / Inward Remittance Message (IRM) reconciliation, the bill is flagged as overdue in RBI's Export Data Processing and Monitoring System (EDPMS). If overdue export bills remain unresolved for over 2 years, RBI or the AD Bank may place the exporter on the EDPMS Caution List. Caution-listed exporters lose clean credit facilities and can only export against 100% advance remittance or confirmed irrevocable Letters of Credit.",
  },
  {
    question: "How can an exporter obtain a 6-month extension using RBI Form ETX?",
    answer:
      "Under Para C.20 of the RBI Master Direction, AD Category-I Banks are empowered to extend the 9-month realization deadline by up to 6 months at a time upon receipt of Form ETX from the exporter. The exporter must demonstrate genuine non-realization reasons beyond their control, prove active legal recovery or commercial renegotiation, and confirm that the company is not under investigation by the Enforcement Directorate (ED), CBI, or DRI.",
  },
  {
    question: "Do exporters have to surrender Duty Drawback or RoDTEP if an export bill is written off?",
    answer:
      "Yes. Under Customs and Foreign Trade Policy regulations, all export incentives claimed—including Duty Drawback, RoDTEP, RoSCTL, or unfulfilled export obligations under Advance Authorization—must be proportionally surrendered with applicable interest to the Customs authorities or DGFT. The Chartered Accountant's compliance certificate submitted to the AD Bank must verify this surrender before EDPMS knock-off is granted.",
  },
  {
    question: "What is the deadline to notify ECGC if an insured overseas buyer defaults on an invoice?",
    answer:
      "If the exporter holds an ECGC Export Credit Insurance Policy, default must be formally intimated to ECGC within 30 days of the agreed payment due date (or at most within 4 months from the due date). A formal claim must subsequently be lodged within 12 months. Failure to notify ECGC within these strict statutory windows will result in repudiation of the credit insurance claim.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Reserve Bank of India — Master Direction No. 16/2015-16 on Export of Goods and Services",
    url: "https://www.rbi.org.in/",
  },
  {
    title: "Foreign Exchange Management Act, 1999 (FEMA) — Section 7 & 8 (India Code)",
    url: "https://www.indiacode.nic.in/handle/123456789/1988",
  },
  {
    title: "FEMA (Export of Goods and Services) Regulations, 2016 (Regulation 9 9-Month Rule)",
    url: "https://www.rbi.org.in/",
  },
  {
    title: "Software Technology Parks of India (STPI) — SOFTEX Filing Guidelines & EDPMS Flow",
    url: "https://www.stpi.in/",
  },
  {
    title: "Directorate General of Foreign Trade (DGFT) — Foreign Trade Policy 2023 Status Holder Rules",
    url: "https://www.dgft.gov.in/",
  },
  {
    title: "Export Credit Guarantee Corporation of India (ECGC) — Default Intimation & Claim Rules",
    url: "https://www.ecgc.in/",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Advocate attribution (Anuj Anand Malik, Advocate & Founder, AMA Legal Solutions) emitted inline.

const WEB_APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: H1_TEXT,
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  url: CANONICAL_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  provider: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
  },
};

const SOFTWARE_APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: H1_TEXT,
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  url: CANONICAL_URL,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
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
      name: "IT & SaaS Software Recovery",
      item: `${SITE_URL}/industries/it-saas-software-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "SOFTEX FEMA Calculator",
      item: CANONICAL_URL,
    },
  ],
};

export default function SoftexFemaExportRealizationDeadlineCalculatorPage() {
  const breadcrumbItems = [
    { label: "IT & SaaS Software Recovery", href: "/industries/it-saas-software-recovery" },
    { label: "SOFTEX FEMA Calculator", href: PAGE_URL },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEB_APP_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_APP_SCHEMA) }}
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
          <div className="max-w-7xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IND-05 &amp; IND-15 Interactive Tool</span>
              <span className="text-red-500">&bull;</span>
              <span>RBI Master Direction No. 16/2015-16 &bull; FEMA Reg. 9</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            {/* 40-60 Word Executive Statutory Summary Box + First-250-Word Parent Hub Links */}
            <div
              aria-label="Executive Statutory Summary"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Summary (IT Exporters, Goods Exporters &amp; CAs)
              </span>
              <p>
                Bridging our{" "}
                <Link
                  href="/industries/it-saas-software-recovery"
                  className="text-red-300 underline hover:text-white font-bold"
                >
                  IND-05 IT &amp; SaaS Recovery Hub
                </Link>{" "}
                and{" "}
                <Link
                  href="/industries/exporters-cross-border-trade-recovery"
                  className="text-red-300 underline hover:text-white font-bold"
                >
                  IND-15 Export-Import Trade Credit Recovery Hub
                </Link>
                , this calculator computes your exact 9-month RBI repatriation deadline under FEMA Regulation 9, evaluates AD-Bank 5% Normal vs 10% Status Holder self write-off caps, and determines when an Advocate Legal Notice becomes mandatory to prevent EDPMS caution-listing.
              </p>
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                  9 Months
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  FEMA Reg. 9 Repatriation Clock
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                  5% vs 10%
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Normal vs Star House Write-Off Cap
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                  +6 Months
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  AD Bank Form ETX Extension
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                  Mandatory
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Advocate Demand for EDPMS Closure
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Layout Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <Breadcrumbs items={breadcrumbItems} />

          {/* 2-Column Split: Sticky TOC Aside + Content Column */}
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
            {/* Left Sticky Sidebar TOC */}
            <SoftexFemaCalculatorTOC />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* SECTION 1: Interactive React Calculator Tool Island */}
              <SoftexFemaCalculatorClient />

              {/* SECTION 2: Statutory 9-Month Clock & EDPMS Mechanism */}
              <section
                id="statutory-9-month-clock"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 mb-3">
                  <span>FEMA Regulation 9</span>
                  <span className="text-slate-400">&bull;</span>
                  <span>Section 7 FEMA 1999</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  How Does the Statutory 9-Month FEMA Repatriation Clock Operate?
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Under Section 7 of the Foreign Exchange Management Act, 1999 (FEMA) read with Regulation 9 of the Foreign Exchange Management (Export of Goods and Services) Regulations, 2016, Indian exporters are under an express statutory obligation to realize and repatriate the full foreign exchange value of exported goods and software into India within <strong>9 months from the date of export</strong>.
                  </p>
                  <p>
                    For custom software, SaaS products, and offshore engineering services, the export date is anchored to the <strong>SOFTEX invoice generation date</strong> submitted to Software Technology Parks of India (STPI) or Special Economic Zone (SEZ) development commissioners. Once STPI/SEZ certifies the SOFTEX form, the export record transmits automatically to the Reserve Bank of India&apos;s <strong>Export Data Processing and Monitoring System (EDPMS)</strong>.
                  </p>
                </div>

                {/* Dark Matrix Table: EDPMS Aging Stages */}
                <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white text-[11px] sm:text-xs uppercase tracking-wider">
                      <tr>
                        <th className="p-3.5 sm:p-4">Aging Bracket</th>
                        <th className="p-3.5 sm:p-4">EDPMS Status</th>
                        <th className="p-3.5 sm:p-4">AD-Bank Banking Consequence</th>
                        <th className="p-3.5 sm:p-4">Statutory Action Required</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white font-medium text-slate-800">
                      <tr>
                        <td className="p-3.5 sm:p-4 font-bold text-emerald-700">0 to 6 Months</td>
                        <td className="p-3.5 sm:p-4">Current / Open</td>
                        <td className="p-3.5 sm:p-4">Normal trade credit window; clean LC &amp; advance lines active</td>
                        <td className="p-3.5 sm:p-4">Routine commercial milestone follow-up; reconcile e-BRC / IRM</td>
                      </tr>
                      <tr className="bg-amber-50/50">
                        <td className="p-3.5 sm:p-4 font-bold text-amber-700">6 to 9 Months</td>
                        <td className="p-3.5 sm:p-4">Critical Window</td>
                        <td className="p-3.5 sm:p-4">AD Bank triggers automated automated realization inquiries</td>
                        <td className="p-3.5 sm:p-4 font-bold text-[#DC2626]">
                          Serve Advocate Cross-Border Legal Demand to resolve default before 9M cut-off
                        </td>
                      </tr>
                      <tr className="bg-red-50/60">
                        <td className="p-3.5 sm:p-4 font-bold text-red-700">9 to 15 Months</td>
                        <td className="p-3.5 sm:p-4">Overdue in EDPMS</td>
                        <td className="p-3.5 sm:p-4">Open bill flagged on RBI dashboard; pending e-BRC blocked</td>
                        <td className="p-3.5 sm:p-4 font-semibold">
                          Apply for Form ETX 6-month extension citing pending legal recovery
                        </td>
                      </tr>
                      <tr className="bg-slate-900 text-white">
                        <td className="p-3.5 sm:p-4 font-bold text-red-400">&gt; 24 Months</td>
                        <td className="p-3.5 sm:p-4 font-bold text-red-300">Caution-Listed</td>
                        <td className="p-3.5 sm:p-4 text-slate-300">
                          Complete freeze of credit facilities; export only against 100% advance or confirmed LC
                        </td>
                        <td className="p-3.5 sm:p-4 text-slate-200">
                          Formal AD-Bank write-off filing (Para C.22) or RBI Regional Office dispensation
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION 3: 5% vs 10% Write-Off Cap & RBI Master Direction */}
              <section
                id="ad-bank-write-off-limits"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 mb-3">
                  <span>RBI Master Direction No. 16/2015-16</span>
                  <span className="text-slate-400">&bull;</span>
                  <span>Para C.22 &amp; C.23</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  How Does the 5% Normal vs 10% Status Holder Write-Off Cap Work?
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    When an overseas client refuses to pay, becomes insolvent, or untraceable, an Indian exporter cannot simply write off the invoice in their private ledger. Because foreign exchange is a strictly monitored sovereign resource, EDPMS bills can only be closed through authorized statutory write-off procedures under <strong>Para C.22 and Para C.23 of RBI Master Direction No. 16/2015-16</strong>.
                  </p>
                  <p>
                    The Reserve Bank delegates specific write-off powers to Authorized Dealer Category-I Banks, indexed strictly against the exporter&apos;s <strong>total export proceeds realized during the preceding calendar year (January 1 to December 31)</strong>:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 font-medium">
                    <li>
                      <strong>Normal Exporters (5% Cap):</strong> An exporter without Star Export House status may write off up to 5% of their total realized export proceeds from the preceding calendar year.
                    </li>
                    <li>
                      <strong>Status Holder Exporters (10% Cap):</strong> Exporters certified as One Star, Two Star, Three Star, Four Star, or Five Star Export Houses under Chapter 1 of the Foreign Trade Policy (FTP 2023) enjoy a 10% write-off ceiling.
                    </li>
                    <li>
                      <strong>Exceeding the Cap:</strong> If an unrealized enterprise tech or shipment contract exceeds the 5% or 10% limit, the AD Bank has zero legal power to write it off independently. The exporter must file a formal petition through their bank to the <strong>RBI Regional Office (Forex Department)</strong> for extraordinary write-off approval.
                    </li>
                  </ul>
                </div>

                {/* Callout Box: What Doesn't Qualify */}
                <div className="mt-6 bg-red-50 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl">
                  <p className="text-xs sm:text-sm font-bold text-[#DC2626] mb-1">
                    Statutory Bars to Self-Write-Off (Para C.22 Disqualifications)
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    AD Banks are prohibited from writing off export bills where: (1) The overseas buyer is an overseas subsidiary, joint venture, or associate entity of the Indian exporter; (2) The transaction is under adjudication or investigation by the Directorate of Enforcement (ED), Directorate of Revenue Intelligence (DRI), or CBI; or (3) The exporter fails to surrender proportionate export incentives.
                  </p>
                </div>
              </section>

              {/* SECTION 4: Mandatory Advocate Legal Demand Proof */}
              <section
                id="legal-notice-mandatory-proof"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 mb-3">
                  <span>Mandatory Legal Condition</span>
                  <span className="text-slate-400">&bull;</span>
                  <span>Para C.22(a)(ii)</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Why Is an Advocate Legal Demand Mandatory for AD-Bank EDPMS Closure?
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Corporate CFOs and tech founders often assume that an email chain stating &ldquo;the client is not replying&rdquo; is sufficient for a bank to write off a SOFTEX bill. This is a severe compliance misconception.
                  </p>
                  <p>
                    Under <strong>Para C.22(a)(ii) of the RBI Master Direction</strong>, the Authorized Dealer Bank must satisfy itself that the exporter has <em>&ldquo;made all reasonable efforts to realize the export proceeds and has exhausted all avenues of recovery&rdquo;</em>. In statutory audit practice, AD Bank internal compliance checklists demand documentary evidence of:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs mb-3">
                      1
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                      Advocate Legal Notice
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      A formal legal demand prepared by our team citing SOW milestones, accepted deliverables, and Section 19 Copyright Act IP retention, dispatched to the foreign buyer&apos;s registered address.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs mb-3">
                      2
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                      BSA 2023 Electronic Proof
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Section 63 certificate under Bharatiya Sakshya Adhiniyam, 2023 certifying electronic transmission to corporate email servers, plus international courier tracking showing delivery or refusal.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs mb-3">
                      3
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                      Overseas Legal Dossier
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If the debtor is in the UK, UAE, or Singapore, citing Section 44A CPC reciprocating enforcement, or for US Delaware LLCs, initiating formal collection pre-litigation.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-xs sm:text-sm font-bold">
                      Need a formal cross-border legal demand notice for your overseas debtor?
                    </p>
                    <p className="text-xs text-slate-300">
                      Our team team drafts multi-jurisdictional legal notices locking the statutory recovery proof required by AD Banks.
                    </p>
                  </div>
                  <Link
                    href="/us-uk-uae-client-unpaid-software-invoice-softex-fema-recovery"
                    className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shrink-0"
                  >
                    View Cross-Border Recovery Guide &rarr;
                  </Link>
                </div>
              </section>

              {/* SECTION 5: Form ETX 6-Month Extension Rules */}
              <section
                id="form-etx-extension-rules"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 mb-3">
                  <span>AD-Bank Form ETX Delegation</span>
                  <span className="text-slate-400">&bull;</span>
                  <span>Para C.20</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  How to Secure a 6-Month Realization Extension via Form ETX
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    If an overseas debtor has not paid by Month 7 or 8, but recovery negotiations, commercial mediation, or international arbitration are actively ongoing, the exporter should not wait for EDPMS overdue flagging. Under <strong>Para C.20 of the RBI Master Direction</strong>, Authorized Dealer Banks are empowered to extend the 9-month realization deadline by <strong>up to 6 months at a time</strong>.
                  </p>
                  <p>
                    To secure Form ETX extension approval from your bank&apos;s Trade Finance &amp; Forex branch, the following three conditions must be satisfied:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 font-medium">
                    <li>
                      <strong>Genuine Non-Realization Grounds:</strong> The delay is due to commercial disputes, buyer liquidity distress, or milestone testing delays, and not a sham transaction or capital flight.
                    </li>
                    <li>
                      <strong>Documented Recovery Pursuit:</strong> The exporter presents documentary evidence of active recovery efforts—specifically including an Advocate Legal Demand Notice, arbitral invocation, or revised payment restructuring agreement.
                    </li>
                    <li>
                      <strong>Non-Investigation Undertaking:</strong> An official undertaking on company letterhead confirming that the export unit is not on the RBI caution list and is not subject to proceedings by the Directorate of Enforcement (ED).
                    </li>
                  </ol>
                </div>
              </section>

              {/* SECTION 6: Worked B2B Export Realization Scenarios */}
              <section
                id="worked-export-scenarios"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 mb-3">
                  <span>Worked Calculations</span>
                  <span className="text-slate-400">&bull;</span>
                  <span>Practical Case Studies</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Worked Case Studies: Normal Exporter vs Star Export House
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  {/* Case 1: SaaS Agency (Normal Exporter) */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-200 text-slate-800 mb-2">
                        Case 1 &bull; Normal Tech Exporter (5% Cap)
                      </span>
                      <p className="text-base font-bold text-slate-900 mb-2">
                        Bengaluru SaaS Agency with $65,000 Delaware Default
                      </p>
                      <ul className="text-xs text-slate-600 space-y-1.5 font-medium">
                        <li>&bull; Preceding Year Realized Exports: <strong>&rupee;4.00 Crore</strong> ($465,000)</li>
                        <li>&bull; Overdue Invoice: <strong>$65,000</strong> (&asymp; &rupee;56.22 Lakh @ &rupee;86.5)</li>
                        <li>&bull; Exporter Status: Normal (5% Write-Off Cap)</li>
                        <li>&bull; 5% Permissible Cap: &rupee;4.00 Cr &times; 5% = <strong>&rupee;20.00 Lakh</strong></li>
                        <li>&bull; Bill Share of Turnover: <strong>14.05%</strong> (Exceeds 5% cap by &rupee;36.22L)</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-200">
                      <p className="text-xs font-bold text-[#DC2626]">
                        Statutory Verdict: Cannot be written off by AD Bank alone!
                      </p>
                      <p className="text-[11px] text-slate-600 mt-1">
                        AD Bank can write off &rupee;20 Lakh under delegated powers; the remaining &rupee;36.22 Lakh requires a Form ETX extension plus special dispensation from the RBI Regional Office. Formal legal notice must be served immediately.
                      </p>
                    </div>
                  </div>

                  {/* Case 2: 2-Star Export House */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-2">
                        Case 2 &bull; Status Holder (10% Cap)
                      </span>
                      <p className="text-base font-bold text-slate-900 mb-2">
                        IT Staffing House with &pound;40,000 London Default
                      </p>
                      <ul className="text-xs text-slate-600 space-y-1.5 font-medium">
                        <li>&bull; Preceding Year Realized Exports: <strong>&rupee;12.00 Crore</strong> (&pound;1.09M)</li>
                        <li>&bull; Overdue Invoice: <strong>&pound;40,000</strong> (&asymp; &rupee;43.80 Lakh @ &rupee;109.5)</li>
                        <li>&bull; Exporter Status: 2-Star Export House (10% Cap)</li>
                        <li>&bull; 10% Permissible Cap: &rupee;12.00 Cr &times; 10% = <strong>&rupee;1.20 Crore</strong></li>
                        <li>&bull; Bill Share of Turnover: <strong>3.65%</strong> (Well within 10% cap)</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-200">
                      <p className="text-xs font-bold text-emerald-700">
                        Statutory Verdict: 100% Eligible for AD-Bank Self Write-Off!
                      </p>
                      <p className="text-[11px] text-slate-600 mt-1">
                        Because &rupee;43.80 Lakh is under the &rupee;1.20 Crore cap, the AD Bank can write off the entire bill and close EDPMS upon submission of fact-verified legal notice proof and CA compliance certificate.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 7: ECGC Claims & Duty Drawback Surrender */}
              <section
                id="ecgc-claims-and-drawback"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 mb-3">
                  <span>Incentives &amp; Insurance</span>
                  <span className="text-slate-400">&bull;</span>
                  <span>ECGC &amp; RoDTEP</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  ECGC Default Notification Timelines &amp; Export Incentive Surrender
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Two critical statutory obligations often catch exporter finance teams unprepared during an unrealized invoice write-off:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                        1. Strict ECGC Default Notification Windows
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Under standard ECGC comprehensive policies, default by an overseas buyer must be intimated within <strong>30 days of the agreed due date</strong> (or a maximum of 4 months from due date). If you delay notifying ECGC while attempting informal follow-ups, ECGC can legally reject your claim, forcing your company to bear 100% of the loss.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                        2. Proportionate Surrender of Export Incentives
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Under Customs Section 75 and DGFT rules, if an export bill is written off, the exporter must surrender all claimed export incentives (Duty Drawback, RoDTEP, RoSCTL) proportionate to the unrealized amount, along with statutory interest. Your Statutory Auditor&apos;s Certificate must explicitly certify that these benefits have been deposited back before the AD Bank executes the EDPMS knock-off.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 8: Dual-Track B2B Conversion Funnel */}
              <section id="institutional-recovery-cta" className="scroll-mt-28">
                <SoftexFemaCalculatorCTA />
              </section>

              {/* SECTION 9: Cross-Border & IT Services Recovery Ecosystem */}
              <section
                id="export-legal-resources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 mb-3">
                  <span>IND-05 &amp; IND-15 Playbooks</span>
                  <span className="text-slate-400">&bull;</span>
                  <span>Cross-Border Framework</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Related Tech, SaaS &amp; Cross-Border Debt Recovery Resources
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Explore our authoritative B2B playbooks for Indian IT founders, SaaS CFOs, and export houses navigating international defaults and statutory recoveries:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/us-uk-uae-client-unpaid-software-invoice-softex-fema-recovery"
                    className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all group bg-slate-50/50"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                      P0 Spoke Playbook
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors mb-1">
                      US, UK &amp; UAE Client Software Invoice Recovery &amp; SOFTEX Write-Off
                    </p>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Cross-border legal demands on Delaware LLCs, UK Ltds &amp; Dubai firms plus clearing unrealized SOFTEX in RBI EDPMS.
                    </p>
                  </Link>

                  <Link
                    href="/industries/it-saas-software-recovery"
                    className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all group bg-slate-50/50"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                      Parent Vertical Hub
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors mb-1">
                      IND-05: IT Services, SaaS Platforms &amp; Software Recovery
                    </p>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Comprehensive sector guide covering IP liens, milestone dispute escalation, and MSME 3x compound interest.
                    </p>
                  </Link>

                  <Link
                    href="/software-uat-sign-off-delay-scope-creep-milestone-payment-recovery"
                    className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all group bg-slate-50/50"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                      Milestone Recovery
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors mb-1">
                      Software UAT Sign-Off Delay &amp; Scope-Creep Recovery
                    </p>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Enforce deemed acceptance under live deployment and assert Section 19 Copyright Act IP retention liens.
                    </p>
                  </Link>

                  <Link
                    href="/it-staff-augmentation-dedicated-developer-monthly-invoice-recovery"
                    className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all group bg-slate-50/50"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                      Staff Augmentation
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors mb-1">
                      Staff Augmentation &amp; Dedicated Developer Invoice Recovery
                    </p>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Recover unpaid T&amp;M invoices using approved Jira timesheets, dismantling Tier-1 back-to-back payment traps.
                    </p>
                  </Link>

                  <Link
                    href="/legal-notice-to-international-client-unpaid-invoice-recovery"
                    className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all group bg-slate-50/50"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                      International Notice
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors mb-1">
                      Legal Notice to International Client for Unpaid Invoices
                    </p>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Fact-verified international legal notices citing cross-border contract law, arbitration clauses, and reciprocal enforcement.
                    </p>
                  </Link>

                  <Link
                    href="/copyright-not-transferred-until-paid-freelancer"
                    className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all group bg-slate-50/50"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                      IP &amp; Copyright Lien
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors mb-1">
                      Copyright Not Transferred Until Paid Freelancer &amp; Dev Notice
                    </p>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Assert Section 19 Copyright Act ownership to prevent client commercial use of unpaid code, designs, or architectures.
                    </p>
                  </Link>
                </div>
              </section>

              {/* SECTION 10: Frequently Asked Questions (FAQ Accordions) */}
              <section
                id="fema-softex-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 mb-3">
                  <span>Forex &amp; EDPMS FAQs</span>
                  <span className="text-slate-400">&bull;</span>
                  <span>7 Statutory Queries</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-6">
                  Frequently Asked Questions on SOFTEX, FEMA &amp; RBI Write-Off
                </h2>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl p-4 sm:p-5 transition-all duration-200 open:border-slate-400 open:bg-slate-50/50"
                    >
                      <summary className="flex items-center justify-between font-bold text-xs sm:text-sm text-slate-900 cursor-pointer list-none select-none">
                        <span className="flex items-center gap-3">
                          <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] flex items-center justify-center font-bold text-[10px] shrink-0">
                            {idx + 1}
                          </span>
                          <span>{faq.question}</span>
                        </span>
                        <svg
                          width={16}
                          height={16}
                          className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 shrink-0 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="mt-3.5 pt-3.5 border-t border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium pl-8">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* SECTION 11: Statutory Sources & Government Portals */}
              <section
                id="statutory-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-100 border border-slate-200 mb-3">
                  <span>Authoritative References</span>
                  <span className="text-slate-400">&bull;</span>
                  <span>Government &amp; Regulatory Authorities</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                  Primary Statutory Statutes, Regulations &amp; Regulatory Portals
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                  All calculation logic, write-off thresholds, and documentation checklists in this calculator are derived strictly from published Reserve Bank of India Master Directions and Ministry of Commerce Foreign Trade Regulations:
                </p>

                <ul className="space-y-2.5">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-800 hover:text-[#DC2626] font-semibold underline transition-colors"
                      >
                        {source.title} &rarr;
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] text-slate-500">
                  <p>
                    <strong>Fact Verification &amp; Attribution:</strong> Vetted by Anuj Anand Malik, Advocate &amp; Founder, AMA Legal Solutions. Platform calculations are updated in accordance with RBI Master Directions on Export of Goods and Services and DGFT Foreign Trade Policy 2023.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cluster Cross-Links */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
