import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CommodityNoticeCTA from "./CommodityNoticeCTA";
import CommodityNoticeTOC from "./CommodityNoticeTOC";
import CommodityNoticeWorkspace from "./CommodityNoticeWorkspace";

export const revalidate = 86400;

const PAGE_URL = "/templates/coal-scrap-commodity-supply-and-gas-cylinder-recovery-notice";
const EXACT_H1 =
  "Industrial Commodity Legal Notice Pack: (1) Coal/Scrap/Mineral Invoice & Sampling-Cut Rebuttal Notice + (2) PESO Gas-Cylinder Return (BNS s.316) Notice";
const META_TITLE = "Coal, Metal Scrap & Gas-Cylinder Legal Notice [Word]";
const META_DESCRIPTION =
  "Ready-to-use notice formats featuring SGS/NABL COA finality, Dharamkanta/E-Way logs, PESO cylinder serial tables & Pre-IBC / Order 38 warnings.";

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
        alt: formatAltText("Coal, Metal Scrap, Fuel and PESO Gas-Cylinder Legal Notice Format"),
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
    title: "The Sale of Goods Act, 1930 — Sections 26, 39, 41 & 42 (Deemed Acceptance & Risk Transfer)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "The Bharatiya Nyaya Sanhita, 2023 (BNS) — Section 316 (Criminal Breach of Trust for Retained Cylinders)",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title: "PESO — Gas Cylinders Rules, 2016 (Ownership Embossing & Prohibition on Third-Party Refilling)",
    url: "https://peso.gov.in/web/gas-cylinder-rules-2016",
  },
  {
    title: "The Insolvency and Bankruptcy Code, 2016 — Sections 8 & 9 (Operational Creditor Demand Notice)",
    url: "https://www.indiacode.nic.in/handle/123456789/15479",
  },
  {
    title: "The Code of Civil Procedure, 1908 — Order XXXVII & Order XXXVIII Rule 5 (Summary Suit & Attachment)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "The Bharatiya Sakshya Adhiniyam, 2023 (BSA) — Section 63 (Electronic Weighbridge & E-Way Admissibility)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CLAUSE_ANNEXURE_MATRIX = [
  {
    supplyType: "Imported Coal, Petcoke & Biomass",
    statutoryHook: "Sale of Goods Act s.42 + Contract Act s.73 + IBC s.8",
    mandatoryAnnexure: "Load-Port SGS/Intertek/NABL COA, E-Way Bill, Dharamkanta Slip & Vessel/Rake BL",
    remedyTriggered: "Voids post-burning GCV/moisture debit notes; clears Mobilox pre-existing dispute bar",
  },
  {
    supplyType: "Ferrous (HMS) & Non-Ferrous Metal Scrap",
    statutoryHook: "Sale of Goods Act s.42 + Order 38 Rule 5 CPC + NI Act s.138",
    mandatoryAnnexure: "GSTR-1 / E-Way Part-B log, Automated Weighbridge Slip & Signed Gate Entry",
    remedyTriggered: "Defeats post-melting slag excuses; enables urgent billet/inventory attachment",
  },
  {
    supplyType: "Bulk Diesel, Furnace Oil (FO) & Lubricants",
    statutoryHook: "Contract Act s.237 + Order 37 CPC + BSA 2023 s.63",
    mandatoryAnnexure: "Signed Fuel Indents, RFID Flow-Meter Receipts & Fleet GPS Decanting Logs",
    remedyTriggered: "Binds buyer via site-engineer ostensible authority for summary recovery",
  },
  {
    supplyType: "Industrial Minerals (Quartz, Clay, Lime)",
    statutoryHook: "MSMED Act ss.15–18 + Income Tax s.43B(h) + SOGA s.42",
    mandatoryAnnexure: "Udyam Certificate, Sieve/Whiteness Dispatch COA & Unloading Challans",
    remedyTriggered: "Triggers 3x RBI compound interest & disallows buyer tax deduction on March 31",
  },
  {
    supplyType: "PESO Gas Cylinders (O2, N2, Argon, CO2, DA)",
    statutoryHook: "Gas Cylinders Rules 2016 + BNS s.316 + Contract Act s.148",
    mandatoryAnnexure: "PESO Cylinder Serial Schedule, Water Capacity, Hydrotest Date & Daily Rent Ledger",
    remedyTriggered: "Stops grey-market refilling; enables criminal FIR + full replacement cost recovery",
  },
];

const SERVICE_PROTOCOL_ROWS = [
  {
    channel: "Speed Post with A.D. (RPAD)",
    legalBasis: "General Clauses Act, 1897 — Section 27",
    operationalChecklist:
      "Dispatch to both the buyer's MCA Registered Office and active factory/kiln gate address; preserve India Post tracking & returned AD card.",
  },
  {
    channel: "Registered Corporate Email",
    legalBasis: "BSA 2023 — Section 63 + IT Act, 2000",
    operationalChecklist:
      "Send PDF notice + Excel invoice/PESO serial annexures to the buyer's GST/PO email and director email with read-receipt headers archived.",
  },
  {
    channel: "Verified Business WhatsApp",
    legalBasis: "BSA 2023 — Section 63 Electronic Record",
    operationalChecklist:
      "Serve PDF notice on the Managing Director's and Plant Purchase Head's verified WhatsApp numbers; screenshot double-tick delivery timestamps.",
  },
];

const FAQS = [
  {
    question: "Can a coal or scrap buyer deduct money for GCV or slag after consuming the material?",
    answer:
      "No. Under Section 42 of the Sale of Goods Act, 1930, once a buyer unloads, stacks, burns coal in a boiler, or melts scrap in an induction furnace without calling for joint referee sampling upon arrival, the buyer is deemed to have accepted the goods. Pack 1A and Pack 1B in our workspace formally repudiate belated internal lab debit notes as non-est.",
  },
  {
    question: "What makes a PESO gas-cylinder return notice enforceable under BNS Section 316?",
    answer:
      "Industrial gas cylinders are entrusted on returnable bailment under Section 148 of the Indian Contract Act, 1872, and carry permanently embossed PESO serial numbers. Retaining them beyond the agreed free period, refusing return, or refilling them at unauthorized third-party plants violates the Gas Cylinders Rules, 2016 and constitutes Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023.",
  },
  {
    question: "Should I attach Dharamkanta slips and E-Way Bills to the initial legal notice?",
    answer:
      "Yes. Attaching the GST E-Way Bill Part-B vehicle log, automated Dharamkanta weighbridge slip, and Load-Port SGS/NABL COA directly as Annexures A and B prevents the debtor from fabricating a sham 'short-weight' or 'quality dispute' defense to block a Pre-IBC Section 8 Demand Notice or an Order XXXVII CPC summary suit.",
  },
  {
    question: "When should a commodity creditor warn of Order XXXVIII Rule 5 attachment before judgment?",
    answer:
      "Whenever intelligence indicates that a distressed rolling mill, foundry, or brick kiln is liquidating finished billets, ingots, or plant scrap ahead of bank NPA seizure, your notice must explicitly reserve urgent Order XXXVIII Rule 5 CPC attachment before judgment alongside Order XXXVII summary recovery.",
  },
  {
    question: "Can I download these coal, scrap, and PESO cylinder notice formats in Word (.doc)?",
    answer:
      "Yes. Use the interactive Customizer above to select Pack 1A (Coal/Petcoke/Minerals), Pack 1B (Metal Scrap/Fuel), or Pack 2 (PESO Gas Cylinders), enter your entity, GSTIN, invoice/weighbridge/serial references, and click 'Download .doc (Word)' for an editable Microsoft Word file.",
  },
  {
    question: "How does this notice help if the buyer is an MSME or owes under Section 43B(h)?",
    answer:
      "If you hold a Micro or Small Enterprise Udyam registration (common for mineral grinders, biomass pelletizers, and industrial gas fillers), invoking MSMED Act Sections 15–16 notifies the corporate buyer that unpaid dues beyond 45 days attract 3x RBI compound interest and risk Income Tax Section 43B(h) expense disallowance.",
  },
  {
    question: "Can LegalRecovery.in dispatch notices for 20+ defaulting mills or cylinder customers at once?",
    answer:
      "Yes. You can test a single fact-verified notice for ₹999 via Email, WhatsApp, and optional Speed Post RPAD, or upload a CSV of 10 to 10,000+ defaulting plants and cylinder accounts through our Bulk Institutional Recovery Desk.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-20T10:00:00+05:30",
  dateModified: "2026-11-20T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
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
    name: "Industrial Commodity & PESO Gas-Cylinder Legal Recovery Notice",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const CREATIVE_WORK_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["CreativeWork", "DigitalDocument"],
  name: "Industrial Commodity & PESO Gas-Cylinder Legal Notice Pack (Word .doc)",
  description: META_DESCRIPTION,
  url: `${SITE_URL}${PAGE_URL}`,
  encodingFormat: "application/msword",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
  },
  hasDigitalDocumentPermission: {
    "@type": "DigitalDocumentPermission",
    permissionType: "https://schema.org/ReadPermission",
    grantee: {
      "@type": "Audience",
      audienceType: "B2B Commodity & Industrial Gas Creditors",
    },
  },
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
      name: "Templates",
      item: `${SITE_URL}/templates`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Coal, Scrap & Gas-Cylinder Notice",
      item: `${SITE_URL}${PAGE_URL}`,
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

export default function CoalScrapAndGasCylinderNoticePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CREATIVE_WORK_SCHEMA) }}
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
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-25 Template Workspace</span>
            <span>&bull;</span>
            <span>Coal, Scrap, Fuel &amp; PESO Cylinders</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Statutory Summary Box with inline Parent Hub link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Summary
            </span>
            Built under our{" "}
            <Link
              href="/industries/mining-minerals-fuel-scrap-commodity-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Mining, Minerals, Fuel, Scrap &amp; Commodity Recovery Hub
            </Link>
            , this dual-pack Word workspace equips bulk suppliers to void post-consumption GCV/slag
            debit notes under Sale of Goods Act s.42, enforce SGS/NABL COA finality, and recover
            retained PESO gas cylinders under Gas Cylinders Rules 2016 and BNS s.316.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-xl font-black text-slate-100">SOGA s.42</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Deemed Acceptance After Burning / Melting
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-black text-emerald-400">BNS s.316</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Criminal Breach of Trust for PESO Cylinders
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-black text-amber-400">O.37 / O.38 R.5</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Summary Suit &amp; Billet / Stock Attachment
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-black text-red-400">Pre-IBC s.8</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Neutralizes Sham Pre-Existing Disputes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Templates", href: "/templates" },
              {
                label: "Coal, Scrap & Gas-Cylinder Notice",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <CommodityNoticeTOC />

          {/* Right Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-notice-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Generic Demand Notices Fail Bulk Commodity &amp; Gas Creditors
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Bulk commodity traders, port coal importers, metal scrap yards, lubricant
                distributors, and industrial gas fillers operate on razor-thin working-capital
                margins of 1.5% to 4%. When a rolling mill, brick kiln, textile plant, or foundry
                withholds payment, it rarely admits a simple cash crunch. Instead, buyers issue
                belated internal lab debit notes alleging low Gross Calorific Value (GCV), excess
                moisture, or induction-furnace slag loss weeks after the material has already been
                burned or melted. Worse, industrial gas buyers routinely retain PESO-embossed O2,
                N2, Argon, or CO2 cylinders worth ₹7,000–₹14,000 each while refilling them at
                unlicensed local depots.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A generic &ldquo;pay my invoice&rdquo; letter invites a fabricated{" "}
                <em>pre-existing dispute</em> defense that blocks an{" "}
                <Link
                  href="/law/order-37-summary-suit-money-recovery"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  Order XXXVII CPC Summary Suit
                </Link>{" "}
                and stalls NCLT proceedings under Section 8 of the IBC. By contrast, an
                fact-verified notice structured around{" "}
                <strong>Section 42 of the Sale of Goods Act, 1930</strong>,{" "}
                <strong>Load-Port SGS/NABL COA finality</strong>,{" "}
                <strong>BSA 2023 Section 63</strong> Dharamkanta/E-Way logs, and{" "}
                <strong>BNS Section 316</strong> criminal breach of trust closes every escape route
                before litigation begins. If your claim also qualifies under MSMED Act timelines,
                compute your 3x RBI compound interest first using our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>
                .
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <p className="text-xs font-black uppercase tracking-wider text-emerald-800 mb-1">
                    Pack 1: Coal, Scrap, Mineral &amp; Fuel Recovery
                  </p>
                  <p className="text-xs text-emerald-900 leading-relaxed">
                    Repudiates post-burning GCV cuts and post-melting slag debits, locks in E-Way
                    Part-B &amp; Dharamkanta proof, and warns of Order 38 Rule 5 attachment and
                    Pre-IBC Section 8 escalation.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-black uppercase tracking-wider text-amber-800 mb-1">
                    Pack 2: PESO Gas Cylinder Return &amp; BNS s.316
                  </p>
                  <p className="text-xs text-amber-900 leading-relaxed">
                    Enforces bailment ownership under Contract Act s.148, bars grey-market refilling
                    under Gas Cylinders Rules 2016, quantifies daily holding rent, and triggers
                    BNS s.316 criminal liability.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Interactive Workspace */}
            <section
              id="heading-notice-workspace"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Interactive Commodity &amp; PESO Cylinder Notice Workspace [Word]
                </h2>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Switch between the three specialized commodity formats below, customize your live
                dispatch and invoice details, inspect the numbered statutory annotations, and export
                the clean draft directly to Microsoft Word (`.doc`) or Print/PDF.
              </p>

              <CommodityNoticeWorkspace />
            </section>

            {/* Section 3: Clause & Annexure Matrix */}
            <section
              id="heading-clause-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Mandatory Statutory Clauses &amp; Evidence Annexures by Supply Vertical
                </h2>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Courts and NCLT benches evaluate bulk commodity notices on documentary completeness.
                Ensure your notice attaches the exact statutory annexures mapped below before
                dispatch.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Commodity / Gas Vertical</th>
                      <th className="p-3.5 font-bold">Governing Statutory Hook</th>
                      <th className="p-3.5 font-bold">Mandatory Annexures (A &amp; B)</th>
                      <th className="p-3.5 font-bold">Litigation Advantage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {CLAUSE_ANNEXURE_MATRIX.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">{row.supplyType}</td>
                        <td className="p-3.5 text-slate-700 font-medium">{row.statutoryHook}</td>
                        <td className="p-3.5 text-slate-600">{row.mandatoryAnnexure}</td>
                        <td className="p-3.5 text-slate-700">{row.remedyTriggered}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Service Protocol */}
            <section
              id="heading-service-protocol"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Multi-Channel Dispatch Protocol Under BSA 2023 s.63 &amp; General Clauses s.27
                </h2>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Industrial plant operators frequently refuse Speed Post envelopes at remote GIDC or
                highway kiln gates to delay limitation clocks. Serving simultaneously across all
                three channels creates an unbreakable evidentiary record under Section 63 of the
                Bharatiya Sakshya Adhiniyam, 2023.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Service Channel</th>
                      <th className="p-3.5 font-bold">Statutory Presumption</th>
                      <th className="p-3.5 font-bold">Creditor Execution Checklist</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {SERVICE_PROTOCOL_ROWS.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">{row.channel}</td>
                        <td className="p-3.5 text-[#DC2626] font-semibold">{row.legalBasis}</td>
                        <td className="p-3.5 text-slate-600">{row.operationalChecklist}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Dual-Track CTA */}
            <section
              id="heading-escalation-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Fact Verification &amp; Bulk Commodity Defaulter Dispatch Desk
                </h2>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Have your SGS/NABL COA clauses verified, Order 38 Rule 5 attachment
                warnings, or PESO cylinder serial schedules before service—or onboard your entire
                receivables aging sheet for automated multi-plant recovery.
              </p>

              <CommodityNoticeCTA />
            </section>

            {/* Section 6: Linked IND-25 Spokes & Guides */}
            <section
              id="heading-ind25-links"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  IND-25 Vertical Playbooks &amp; Core Commercial Recovery Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/industries/mining-minerals-fuel-scrap-commodity-recovery"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50/70"
                >
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#DC2626]">
                    IND-25 Pillar Hub
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Mining, Minerals, Fuel, Scrap &amp; Bulk Commodity Recovery
                  </p>
                </Link>
                <Link
                  href="/imported-coal-petcoke-biomass-supplier-gcv-moisture-deduction-recovery"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50/70"
                >
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#DC2626]">
                    Coal &amp; Petcoke Playbook
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Imported Coal, Petcoke &amp; Biomass GCV Deduction Recovery
                  </p>
                </Link>
                <Link
                  href="/ferrous-non-ferrous-metal-scrap-ingot-rolling-mill-default-recovery"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50/70"
                >
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#DC2626]">
                    Metal Scrap Playbook
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Ferrous &amp; Non-Ferrous Scrap, Ingot &amp; Rolling Mill Recovery
                  </p>
                </Link>
                <Link
                  href="/industrial-gas-oxygen-nitrogen-argon-co2-cylinder-retention-recovery"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50/70"
                >
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#DC2626]">
                    PESO Gas Cylinder Playbook
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Industrial Gas Cylinder Retention (PESO) &amp; Rent Recovery
                  </p>
                </Link>
                <Link
                  href="/cheque-bounce-case-against-company-directors"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50/70"
                >
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-600">
                    NI Act s.138 / s.141
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Cheque Bounce Case Against Company Directors
                  </p>
                </Link>
                <Link
                  href="/recovery/unpaid-invoices"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50/70"
                >
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-600">
                    B2B Invoice Recovery
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Unpaid B2B Invoices &amp; Commercial Ledger Recovery
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 7: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  FAQs: Coal, Metal Scrap &amp; PESO Gas-Cylinder Legal Notices
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl p-4 bg-slate-50/60 open:bg-white open:shadow-xs transition-all"
                  >
                    <summary className="font-bold text-xs sm:text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-base shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 8: Official Statutory Portals */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Official Statutory Portals &amp; Bare Act Authorities
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&rarr;</span>
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
            </section>
          </div>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
