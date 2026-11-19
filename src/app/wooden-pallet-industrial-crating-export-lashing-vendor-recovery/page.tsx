import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import WoodenPalletTableOfContents from "./WoodenPalletTableOfContents";
import WoodenPalletScenarioTabs from "./WoodenPalletScenarioTabs";
import WoodenPalletRecoveryCTA from "./WoodenPalletRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/wooden-pallet-industrial-crating-export-lashing-vendor-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

// Exact PDF/JSON H1 (103 chars) — kept verbatim in BOTH <h1> and ARTICLE_SCHEMA.headline
const EXACT_H1 =
  "ISPM-15 Wooden Pallet & Seaworthy Export Crating Vendors: Recovering Overdue Factory & Exporter Ledgers";

// 56 chars — tightened from 63ch PDF draft for Screaming Frog 30–60ch limit while preserving primary keyword
const META_TITLE = "Wooden Pallet, ISPM-15 Export Crating & Lashing Recovery";

// 150 chars — tightened from 169ch PDF draft for Screaming Frog 120–155ch limit while keeping statutory hooks
const META_DESCRIPTION =
  "Timber pallet & seaworthy crating MSMEs pay cash for pinewood while exporters stretch bills 120 days. Enforce ISPM-15 proof, MSMED s.15-18 & s.43B(h).";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "wooden pallet seaworthy export crating vendor unpaid bill recovery",
    "ispm 15 fumigation certificate issued exporter unpaid crating bill",
    "heavy machinery export wooden box custom size unpaid",
    "pinewood timber pallet manufacturer msme recovery",
    "container lashing choking port service vendor dues",
    "factory pallet supply ledger legal notice",
  ],
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

const PRIMARY_SOURCES = [
  {
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15, 16, 17, 18 & 24 — 45-Day Statutory Ceiling, 15-Day Objection Window & 3x RBI Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Income Tax Act, 1961 — Section 43B(h) (Corporate Expense Disallowance for Delayed Payments Beyond 45 Days to Micro & Small Timber/Packaging Vendors)",
    url: "https://www.incometaxindia.gov.in/pages/acts/income-tax-act.aspx",
  },
  {
    title:
      "Directorate of Plant Protection, Quarantine & Storage (DPPQS) — ISPM-15 Accreditation & Forced Hot-Air Heat Treatment (HT) / Methyl Bromide Standards for Wood Packaging Material",
    url: "https://ppqs.gov.in/",
  },
  {
    title:
      "The Sale of Goods Act, 1930 (Sections 26, 42, 44 & 55 — Passing of Risk, Deemed Acceptance Upon Export Shipment, Yard Storage Charges & Suit for Price)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "MSME Samadhaan Portal — Online Delayed Payment Reference & MSEFC Conciliation/Arbitration Desk (Ministry of MSME, Government of India)",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 70 & 73 — Compensation for Non-Gratuitous Port Lashing/Packing Services & Custom Crating Breach Damages)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Electronic Proof Certificate for Kiln HT Sensor Logs, Port Gate Emails & WhatsApp CAD Approvals)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Sections 138, 141 & 143A — Dishonoured Buyer/CHA Cheques & 20% Interim Compensation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
];

const FAQS = [
  {
    q: "An exporter shipped heavy machinery using our ISPM-15 heat-treated wooden crates and certificate, but refuses to pay after 120 days citing foreign LC delay. Can we recover legally?",
    a: "Yes. Once an exporter packs capital machinery inside your IPPC-stamped crates, attaches your DPPQS-accredited ISPM-15 Heat-Treatment Certificate to its Customs Shipping Bill, and loads the vessel at Nhava Sheva, Mundra, or Chennai Port, Section 42 of the Sale of Goods Act, 1930 locks in irrevocable acceptance. Under MSMED Act Sections 15 and 24, a buyer's foreign Letter of Credit delay or internal 90-to-120-day ERP policy cannot override the mandatory 45-day payment cap for Udyam Micro and Small crating enterprises.",
  },
  {
    q: "Are sawmills, pinewood pallet makers, VCI export packers, and container lashing vendors eligible for Income Tax Section 43B(h) protection?",
    a: "Yes—provided you hold a valid Udyam Registration Certificate classified as a Micro or Small Enterprise (under Manufacturing for wooden pallets/crates, or Services for on-site VCI packing and container lashing/choking). Under Section 43B(h) of the Income Tax Act, 1961, any audited corporate exporter, engineering OEM, or CHA that fails to clear your invoice within 45 days (or 15 days where no written credit period exists) loses the entire expense deduction for that financial year and triggers a Form 3CD Clause 22 audit disclosure.",
  },
  {
    q: "We built oversized seaworthy boxes to a buyer's CAD drawings, but their export order got cancelled and they refuse to lift the boxes. Can we claim 100% of the bill?",
    a: "Yes. Under Section 55 of the Sale of Goods Act, 1930 and Section 73 of the Indian Contract Act, 1872, custom-engineered heavy machinery skids, saddle blocks, and seaworthy pinewood crates cut to bespoke center-of-gravity blueprints have zero open-market resale value (breaking them down yields negligible firewood scrap). After serving a formal Ready-for-Inspection (RFI) and Tender of Delivery notice, you can recover 100% of the agreed contract price plus Section 44 yard storage rent.",
  },
  {
    q: "A CHA or freight forwarder hired our container lashing and choking crew at Mundra/JNPA, collected funds from the exporter, and now blocks our bill. Who should receive the legal notice?",
    a: "Serve the primary Advocate Demand Notice on the contracting CHA or Freight Forwarder as the principal debtor (enclosing CFS gate passes, container/seal numbers, geotagged lashing photos, and the Marine Surveyor Lashing Certificate), and mark a formal statutory copy to the end-Exporter's Logistics and Finance Head. Under Section 70 of the Contract Act and CGST Section 16(2) (180-day ITC reversal on unpaid supplier bills), copying the exporter breaks CHA stonewalling rapidly.",
  },
  {
    q: "A factory took Euro pinewood pallets on a running ledger for months, then sent a retrospective debit note alleging fungus or high moisture after storing them outdoors in rain. Is that valid?",
    a: "No. Under Section 26 of the Sale of Goods Act, 1930, risk passes to the buyer upon delivery against a clean factory Gate-In Challan and Store GRN. Kiln-dried or ISPM-15 heat-treated timber pallets left uncovered in an open industrial yard during monsoon naturally absorb ambient moisture and develop surface stain at the buyer's sole risk. Moreover, under MSMED Act Section 2(b) Explanation, any written objection raised after 15 days of delivery is statutorily time-barred.",
  },
  {
    q: "What if we did not have a formal signed agreement—only WhatsApp dimension approvals, PO emails, E-Way bills, and ISPM-15 treatment certificates?",
    a: "You still have a rock-solid statutory case. In fact, without a written credit agreement specifying up to 45 days, Section 15 of the MSMED Act shortens the buyer's legal payment deadline to just 15 days from delivery. WhatsApp dimension approvals, email POs, kiln heat-treatment time-temperature graphs, and port stuffing photographs become fully admissible before MSEFC and Commercial Courts when supported by a Section 63 electronic evidence certificate under the Bharatiya Sakshya Adhiniyam (BSA), 2023.",
  },
  {
    q: "Can we recover our wooden pallet or export crating dues without going straight to years of civil litigation?",
    a: "Yes. Overwhelmingly, heavy-engineering OEMs, automotive plants, and export houses settle overdue pallet and crating ledgers at the pre-litigation stage once an Advocate Statutory Notice lands on the CFO's desk—because defending a documented ISPM-15 shipment before MSEFC costs them 3x RBI monthly compounded interest (roughly 18%–20.25% p.a. compounded monthly), Section 43B(h) income tax disallowance, and a 75% mandatory pre-deposit under Section 19 if they ever attempt to challenge an MSEFC award.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-19T10:50:00+05:30",
  dateModified: "2026-11-19T10:50:00+05:30",
  mainEntityOfPage: CANONICAL_URL,
  image: `${SITE_URL}/blog_money_recovery.png`,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
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
    name: "ISPM-15 Wooden Pallet, Seaworthy Export Crating & Container Lashing Vendor Debt Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "5-Stage Recovery Playbook for ISPM-15 Wooden Pallet, Seaworthy Crating & Container Lashing Vendors",
  description:
    "Operational legal SOP for timber pallet manufacturers, heavy machinery export crating plants, and port lashing contractors to enforce ISPM-15 proof, MSMED s.15-18 compound interest, and Section 43B(h) tax pressure.",
  totalTime: "P45D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Lock ISPM-15 Certificate, Shipping Reference & Gate-In Dossier",
      text: "Compile DPPQS ISPM-15 Heat-Treatment Certificates (IN-XXX code & 56°C/30-min kiln logs), E-Way bills, factory Store GRNs, container/seal numbers, and Marine Surveyor Lashing Certificates with a BSA 2023 s.63 certificate.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Reject Late Moisture or Timber Debit Notes & Freeze Credit Notes",
      text: "Refuse to issue any CGST Section 34 Credit Note and formally rebut post-15-day quality deductions citing Sale of Goods Act ss.26 & 42 and MSMED s.2(b) deemed acceptance.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Serve CFO-Targeted Advocate Statutory Notice (MSMED + s.43B(h))",
      text: "Dispatch a 15-day Advocate Demand Notice via Email, WhatsApp, and Speed Post RPAD copying the exporter's CFO/Statutory Auditor (and end-exporter for CHA lashing dues) detailing 3x RBI interest and s.43B(h) tax disallowance.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Lodge MSEFC MSME Samadhaan Reference for Principal + 3x RBI Interest",
      text: "File an online delayed-payment claim on MSME Samadhaan under Sections 15–18 to compel statutory conciliation and binding arbitration backed by Section 19's 75% appeal pre-deposit wall.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Trigger Parallel NI Act s.138 Cheque Prosecution or Order XXXVII Suit",
      text: "For dishonoured buyer/CHA cheques, launch Section 138/141 prosecution seeking 20% s.143A interim relief; for non-MSME or high-value custom crating defaults, file an Order XXXVII Commercial Summary Suit.",
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
      name: "Packaging, Corrugated & Paper Mill Recovery",
      item: `${SITE_URL}/industries/packaging-printing-paper-mill-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Wooden Pallet & Export Crating Vendor Recovery",
      item: CANONICAL_URL,
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function WoodenPalletExportCratingRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data: Article + HowTo + BreadcrumbList + FAQPage */}
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

      {/* DARK GRADIENT HERO */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-22 Industrial Packaging</span>
            <span className="text-red-600">&bull;</span>
            <span>ISPM-15 &amp; Port Lashing Playbook</span>
            <span className="text-red-600">&bull;</span>
            <span>MSMED s.15&ndash;18 + s.43B(h)</span>
          </div>

          {/* Single Page H1 (Verbatim PDF/JSON H1 == ARTICLE_SCHEMA.headline) */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40–60 words + Parent Hub Link in first 250 words) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under <strong>Sale of Goods Act s.42</strong> and <strong>MSMED Act ss.15&ndash;18</strong>, once an exporter ships capital goods using your DPPQS-accredited <strong>ISPM-15 heat-treated crates</strong> or port lashing certificate, acceptance is irrevocable and payment is capped at <strong>45 days</strong>. Part of our{" "}
            <Link
              href="/industries/packaging-printing-paper-mill-recovery"
              className="text-red-400 underline underline-offset-4 hover:text-red-300 font-bold"
            >
              Packaging, Printing &amp; Paper Mill Recovery Hub
            </Link>
            , this playbook enforces Section 43B(h) tax disallowance and 3x RBI compound interest.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">45 Days Max</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                MSMED s.15 Ceiling (Overrides 120-Day Exporter POs)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Monthly Compounded s.16 Interest From Day 46
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">ISPM-15 Lock</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                IPPC Stamp &amp; Shipping Bill Prove s.42 Acceptance
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">s.43B(h) Hit</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Full Exporter Tax Disallowance Past March 31
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SHELL */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Packaging & Paper Mill Recovery",
                href: "/industries/packaging-printing-paper-mill-recovery",
              },
              {
                label: "Wooden Pallet & Export Crating Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC (Mobile Sticky Dropdown + Desktop Sticky Sidebar) */}
          <WoodenPalletTableOfContents />

          {/* Right Main Editorial Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* SECTION 1 */}
            <section
              id="timber-cashflow-gap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Why Imported Pinewood Cash-Flow Clashes With 120-Day Exporter Credit
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                India&apos;s industrial wooden pallet, seaworthy export crating, VCI barrier-packaging, and container lashing vendors operate under one of the sharpest working-capital mismatches in manufacturing. Sawmills and crating plants clustered across <strong>Chakan and Pimpri-Chinchwad (Pune)</strong>, <strong>Peenya and Bommasandra (Bengaluru)</strong>, <strong>Ambattur and Sriperumbudur (Chennai)</strong>, <strong>Faridabad and IMT Manesar (NCR)</strong>, <strong>Vadodara and Makarpura (Gujarat)</strong>, and port corridors serving <strong>Mundra, Kandla, and Nhava Sheva (JNPA)</strong> buy imported New Zealand radiata pinewood, European spruce, seasoned junglewood, marine plywood, galvanized nails, and VCI foil on <strong>100% cash or 7-day timber-yard credit</strong>—plus daily cash wages for on-site carpenters and port lashing crews.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Yet the buyers of these heavy boxes—capital-goods OEMs, transformer and turbine exporters, auto-component Tier-1 plants, and freight forwarders/CHAs—routinely push vendor invoices to <strong>90, 120, or 180 days</strong>. Because timber packaging represents 1%–3% of an exported CNC machine&apos;s value, corporate procurement treats wooden pallet and crating MSMEs as an interest-free overdraft while prioritizing large raw-metal vendors.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h3 className="text-sm font-bold text-[#DC2626] mb-1.5">
                    Upfront Timber &amp; Kiln Cost
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Timber importers at Kandla and Gandhidham demand RTGS against delivery. Add ISPM-15 forced hot-air kiln electricity, VCI aluminum barrier film, desiccant bags, and crane-assisted site packing before the invoice is even raised.
                  </p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <h3 className="text-sm font-bold text-amber-800 mb-1.5">
                    Zero Salvage on Custom Sizes
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Unlike standard consumer goods, a 4.5-meter seaworthy machinery box engineered with custom load-bearing runners and bolt-hole cleats cannot be resold to another factory if an export shipment is postponed.
                  </p>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <h3 className="text-sm font-bold text-emerald-800 mb-1.5">
                    90%+ Udyam Statutory Shield
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Almost every Indian wooden pallet maker, crating unit, and container lashing contractor qualifies as a <strong>Micro or Small Enterprise</strong>—unlocking the 45-day cap, 3x RBI compound interest, and Section 43B(h) tax disallowance.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 2 */}
            <section
              id="ispm15-acceptance-law"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  ISPM-15 Heat-Treatment &amp; Shipping Bill Proof: Irrefutable Acceptance
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                When an exporter defaults on a seaworthy crating bill, they rarely admit cash-flow stress. Instead, accounts teams invent belated excuses—claiming &ldquo;crates were not seaworthy,&rdquo; &ldquo;moisture was high,&rdquo; or &ldquo;dimensions needed rework.&rdquo; Unlike ordinary industrial supplies, however, export wood packaging leaves a <strong>government-regulated international compliance trail</strong> that destroys fabricated quality disputes in a single stroke.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-[#DC2626] bg-slate-50 rounded-r-xl p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    1. DPPQS-Accredited ISPM-15 Certificate + IPPC Mark Links Directly to Export Customs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Under the Plant Quarantine (Regulation of Import into India) Order, 2003 and IPPC <strong>ISPM-15</strong> norms enforced by the Directorate of Plant Protection, Quarantine &amp; Storage (DPPQS), solid wood export crates and pallets must undergo forced hot-air Heat Treatment (minimum core temperature <strong>56&deg;C for 30 continuous minutes</strong>) or approved fumigation, stamped with the facility&apos;s unique <code>IN-XXX</code> accreditation mark. Without your certificate, the exporter&apos;s consignment cannot clear European, US, Australian, or Middle Eastern customs.
                  </p>
                </div>

                <div className="border-l-4 border-slate-800 bg-slate-50 rounded-r-xl p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    2. Sale of Goods Act Section 42: Export Stuffing = Irrevocable Acceptance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Under <strong>Section 42 of the Sale of Goods Act, 1930</strong>, a buyer is deemed to have accepted goods when they do any act in relation to them inconsistent with the seller&apos;s ownership. Bolting a 12-ton pump or transformer onto your wooden skid, vacuum-sealing it in VCI foil, stuffing it into a 40ft Flat-Rack container, and sailing it out of JNPA or Mundra makes any subsequent rejection legally void.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-600 bg-slate-50 rounded-r-xl p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    3. MSMED Act s.2(b) 15-Day Objection Window &amp; Section 24 Non-Obstante Override
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Even for domestic factory pallet supply ledgers, the Explanation to <strong>Section 2(b) of the MSMED Act, 2006</strong> mandates that any written quality objection must be lodged within <strong>15 days of delivery</strong>. Silence creates statutory &ldquo;deemed acceptance.&rdquo; Moreover, <strong>Section 24</strong> gives MSMED overriding force over every SAP/Ariba vendor portal clause attempting to impose 90-day or 120-day credit terms.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3 — SVG DECISION TREE + MOBILE CARDS */}
            <section
              id="escalation-roadmap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Escalation Roadmap for Pallet, Crating &amp; Lashing Dues
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Follow this five-stage operational decision tree the moment an exporter, factory procurement desk, or CHA breaches Day 45 (or Day 15 without written credit terms). Do not wait until the fiscal year closes—deploying statutory pressure early protects your timber liquidity.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800">
                <svg
                  width="920"
                  height="380"
                  viewBox="0 0 920 380"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-stage recovery decision tree for ISPM-15 wooden pallet, export crating, and container lashing vendors"
                >
                  <rect width="920" height="380" rx="14" fill="#0F172A" />

                  {/* Stage 1 */}
                  <rect x="20" y="34" width="160" height="128" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="34" y="58" fill="#F87171" fontSize="11" fontWeight="700">STAGE 01 · DAY 16–45</text>
                  <text x="34" y="80" fill="#FFFFFF" fontSize="13" fontWeight="700">Lock ISPM-15 &amp; GRN</text>
                  <text x="34" y="100" fill="#CBD5E1" fontSize="10.5">HT Cert (IN-XXX), kiln</text>
                  <text x="34" y="116" fill="#CBD5E1" fontSize="10.5">log, E-Way, Shipping</text>
                  <text x="34" y="132" fill="#CBD5E1" fontSize="10.5">Bill &amp; lashing photos</text>
                  <text x="34" y="148" fill="#94A3B8" fontSize="10">BSA 2023 s.63 Cert</text>

                  {/* Arrow 1->2 */}
                  <path d="M180 98 L206 98" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="206,93 216,98 206,103" fill="#DC2626" />

                  {/* Stage 2 */}
                  <rect x="216" y="34" width="160" height="128" rx="12" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
                  <text x="230" y="58" fill="#FBBF24" fontSize="11" fontWeight="700">STAGE 02 · WITHIN 72H</text>
                  <text x="230" y="80" fill="#FFFFFF" fontSize="13" fontWeight="700">Rebut Fake Debits</text>
                  <text x="230" y="100" fill="#CBD5E1" fontSize="10.5">Block CGST s.34 Credit</text>
                  <text x="230" y="116" fill="#CBD5E1" fontSize="10.5">Note; invoke s.42 &amp;</text>
                  <text x="230" y="132" fill="#CBD5E1" fontSize="10.5">s.26 outdoor storage</text>
                  <text x="230" y="148" fill="#94A3B8" fontSize="10">MSMED 15-Day Bar</text>

                  {/* Arrow 2->3 */}
                  <path d="M376 98 L402 98" stroke="#F59E0B" strokeWidth="2.5" />
                  <polygon points="402,93 412,98 402,103" fill="#F59E0B" />

                  {/* Stage 3 */}
                  <rect x="412" y="34" width="160" height="128" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="426" y="58" fill="#F87171" fontSize="11" fontWeight="700">STAGE 03 · DAY 46+</text>
                  <text x="426" y="80" fill="#FFFFFF" fontSize="13" fontWeight="700">Advocate Notice</text>
                  <text x="426" y="100" fill="#CBD5E1" fontSize="10.5">Serve CFO &amp; Auditor:</text>
                  <text x="426" y="116" fill="#CBD5E1" fontSize="10.5">s.43B(h) Tax Hit +</text>
                  <text x="426" y="132" fill="#CBD5E1" fontSize="10.5">3x RBI Interest</text>
                  <text x="426" y="148" fill="#94A3B8" fontSize="10">Email + WA + RPAD</text>

                  {/* Arrow 3->4 */}
                  <path d="M572 98 L598 98" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="598,93 608,98 598,103" fill="#DC2626" />

                  {/* Stage 4 */}
                  <rect x="608" y="34" width="142" height="128" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                  <text x="622" y="58" fill="#34D399" fontSize="11" fontWeight="700">STAGE 04 · DAY 61</text>
                  <text x="622" y="80" fill="#FFFFFF" fontSize="13" fontWeight="700">MSEFC Filing</text>
                  <text x="622" y="100" fill="#CBD5E1" fontSize="10.5">MSME Samadhaan</text>
                  <text x="622" y="116" fill="#CBD5E1" fontSize="10.5">Conciliation &amp; s.18</text>
                  <text x="622" y="132" fill="#CBD5E1" fontSize="10.5">Arbitration Award</text>
                  <text x="622" y="148" fill="#94A3B8" fontSize="10">75% Appeal Deposit</text>

                  {/* Arrow 4->5 */}
                  <path d="M750 98 L770 98" stroke="#10B981" strokeWidth="2.5" />
                  <polygon points="770,93 780,98 770,103" fill="#10B981" />

                  {/* Stage 5 */}
                  <rect x="780" y="34" width="122" height="128" rx="12" fill="#1E293B" stroke="#60A5FA" strokeWidth="2" />
                  <text x="792" y="58" fill="#93C5FD" fontSize="11" fontWeight="700">STAGE 05</text>
                  <text x="792" y="80" fill="#FFFFFF" fontSize="13" fontWeight="700">Dual Strike</text>
                  <text x="792" y="100" fill="#CBD5E1" fontSize="10.5">NI Act s.138</text>
                  <text x="792" y="116" fill="#CBD5E1" fontSize="10.5">Order 37 Suit</text>
                  <text x="792" y="132" fill="#CBD5E1" fontSize="10.5">Order 38 r.5</text>
                  <text x="792" y="148" fill="#94A3B8" fontSize="10">Attachment</text>

                  {/* Decision Branch Panel Bottom */}
                  <path d="M492 162 L492 204" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" />
                  <rect x="20" y="204" width="280" height="146" rx="12" fill="#172554" stroke="#3B82F6" strokeWidth="1.5" />
                  <text x="36" y="230" fill="#93C5FD" fontSize="11" fontWeight="700">BRANCH A · UDYAM MICRO / SMALL</text>
                  <text x="36" y="252" fill="#FFFFFF" fontSize="13" fontWeight="700">MSME Samadhaan + s.43B(h)</text>
                  <text x="36" y="274" fill="#CBD5E1" fontSize="11">&bull; Mandatory 45-day ceiling (s.15)</text>
                  <text x="36" y="294" fill="#CBD5E1" fontSize="11">&bull; 3x RBI monthly compound interest</text>
                  <text x="36" y="314" fill="#CBD5E1" fontSize="11">&bull; Form 3CD Clause 22 auditor alert</text>
                  <text x="36" y="334" fill="#34D399" fontSize="11" fontWeight="700">Fastest pre-litigation CFO settlement</text>

                  <rect x="320" y="204" width="280" height="146" rx="12" fill="#271725" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="336" y="230" fill="#F87171" fontSize="11" fontWeight="700">BRANCH B · UNLIFTED CUSTOM BOXES</text>
                  <text x="336" y="252" fill="#FFFFFF" fontSize="13" fontWeight="700">Sale of Goods s.55 + s.44 Rent</text>
                  <text x="336" y="274" fill="#CBD5E1" fontSize="11">&bull; Issue 7-Day RFI &amp; Lifting Notice</text>
                  <text x="336" y="294" fill="#CBD5E1" fontSize="11">&bull; Prove zero-salvage CAD build</text>
                  <text x="336" y="314" fill="#CBD5E1" fontSize="11">&bull; Bill daily yard/shed demurrage</text>
                  <text x="336" y="334" fill="#FBBF24" fontSize="11" fontWeight="700">100% price + storage recovery</text>

                  <rect x="620" y="204" width="280" height="146" rx="12" fill="#132A23" stroke="#10B981" strokeWidth="1.5" />
                  <text x="636" y="230" fill="#34D399" fontSize="11" fontWeight="700">BRANCH C · CHA / PORT LASHING</text>
                  <text x="636" y="252" fill="#FFFFFF" fontSize="13" fontWeight="700">Joint CHA + Exporter Notice</text>
                  <text x="636" y="274" fill="#CBD5E1" fontSize="11">&bull; Attach Marine Lashing Cert + CFS pass</text>
                  <text x="636" y="294" fill="#CBD5E1" fontSize="11">&bull; Invoke Contract Act s.70 benefit</text>
                  <text x="636" y="314" fill="#CBD5E1" fontSize="11">&bull; Flag CGST s.16(2) 180-day ITC loss</text>
                  <text x="636" y="334" fill="#34D399" fontSize="11" fontWeight="700">Breaks CHA pay-when-paid stalling</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  {
                    step: "Stage 01 · Day 16–45",
                    title: "Lock ISPM-15 Certificate, Kiln Log & Gate-In Dossier",
                    desc: "Collate your DPPQS IN-XXX treatment certificate, E-Way bills, Store GRNs, Shipping Bill/Container IDs, and Marine Lashing Certificates with a BSA 2023 s.63 certificate.",
                  },
                  {
                    step: "Stage 02 · Within 72 Hours",
                    title: "Rebut Post-15-Day Moisture or Timber Debit Notes",
                    desc: "Refuse to issue any CGST s.34 Credit Note; cite Sale of Goods Act ss.26 & 42 plus MSMED s.2(b) deemed acceptance.",
                  },
                  {
                    step: "Stage 03 · Day 46+",
                    title: "Serve CFO & Auditor Advocate Statutory Notice",
                    desc: "Dispatch via Email, WhatsApp, and Speed Post RPAD triggering Income Tax s.43B(h) disallowance, Form 3CD Clause 22 warning, and 3x RBI compound interest.",
                  },
                  {
                    step: "Stage 04 · Day 61",
                    title: "File MSEFC MSME Samadhaan Reference",
                    desc: "Escalate online under MSMED s.18 for principal + monthly compounded interest; debtor must deposit 75% under s.19 to appeal.",
                  },
                  {
                    step: "Stage 05 · Parallel Strike",
                    title: "NI Act s.138 Prosecution or Order XXXVII Suit",
                    desc: "Prosecute bounced cheques (seeking 20% s.143A interim deposit) or file a Commercial Summary Suit for high-value non-MSME crating arrears.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1">
                      {item.step}
                    </p>
                    <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 4 — DARK HEADER STATUTORY MATRIX TABLE */}
            <section
              id="statutory-enforcement-grid"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Enforcement Grid: Pallets, Seaworthy Crates &amp; Port Lashing
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Different timber packaging verticals—standard Euro pallet factories, heavy-machinery export craters, and port/ICD lashing contractors—trigger distinct statutory remedies. Match your overdue invoice profile against the exact forum and legal hook below.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse min-w-[680px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <th className="py-3.5 px-4 font-bold">Vendor Segment &amp; Claim</th>
                      <th className="py-3.5 px-4 font-bold">Primary Statute &amp; Hook</th>
                      <th className="py-3.5 px-4 font-bold">Killer Documentary Proof</th>
                      <th className="py-3.5 px-4 font-bold">Optimal Recovery Forum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        ISPM-15 Export Crating (Shipped, Unpaid 60–180d)
                      </td>
                      <td className="py-3.5 px-4">
                        Sale of Goods Act s.42 + MSMED ss.15&ndash;18 &amp; s.24 + Income Tax s.43B(h)
                      </td>
                      <td className="py-3.5 px-4">
                        DPPQS ISPM-15 HT Certificate (<code>IN-XXX</code>), kiln chart, Shipping Bill / Container No.
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-700">
                        CFO Advocate Notice &rarr; MSEFC Samadhaan
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Custom Heavy-Machinery Wooden Boxes (Unlifted)
                      </td>
                      <td className="py-3.5 px-4">
                        Sale of Goods Act ss.44 &amp; 55 + Contract Act s.73 (Zero-Salvage Goods)
                      </td>
                      <td className="py-3.5 px-4">
                        CAD dimension approval, imported pinewood purchase bills, RFI &amp; 7-day lifting notice
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-700">
                        MSEFC / Order XXXVII Commercial Suit
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Port / ICD Container Lashing, Choking &amp; VCI Crew
                      </td>
                      <td className="py-3.5 px-4">
                        MSMED ss.15&ndash;18 (Services) + Contract Act s.70 + CGST s.16(2) 180-Day ITC Bar
                      </td>
                      <td className="py-3.5 px-4">
                        CFS gate pass, geotagged lashing photos, Marine Surveyor Lashing Certificate
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-700">
                        Joint CHA + Exporter Notice &rarr; MSEFC
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Factory Pinewood / Euro Pallet Running Ledger
                      </td>
                      <td className="py-3.5 px-4">
                        MSMED s.2(b) 15-Day Bar + Sale of Goods s.26 + Limitation Act s.19 (Part-Pay Reset)
                      </td>
                      <td className="py-3.5 px-4">
                        Signed Store GRNs, E-Way bills, dispatch moisture logs (&lt;20% MC), GSTR-2B credit
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-700">
                        Statutory Notice &rarr; MSEFC / Commercial Court
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Bounced Exporter / CHA Post-Dated Cheques
                      </td>
                      <td className="py-3.5 px-4">
                        NI Act 1881 ss.138, 141 &amp; 143A (Strict 30-Day Notice Window from Bank Memo)
                      </td>
                      <td className="py-3.5 px-4">
                        Original cheque, bank return memo, ledger reconciliation, RPAD notice proof
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-[#DC2626]">
                        Magistrate Court s.138 (20% Interim Deposit)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5 — INTERACTIVE SCENARIO TABS */}
            <section
              id="crating-default-playbooks"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Interactive Playbook: 4 Industrial Crating &amp; Lashing Default Traps
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select the exact commercial bottleneck freezing your factory or port receivables to view the debtor&apos;s delay tactic, the statutory counter-strike, required documents, and immediate execution SOP.
              </p>

              <WoodenPalletScenarioTabs />
            </section>

            {/* SECTION 6 — WORKED FINANCIAL LEDGER */}
            <section
              id="worked-crating-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked Recovery Ledger: &#8377;24.6L Export Crating &amp; Lashing Arrears
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider a typical Udyam-registered Small Enterprise crating and lashing vendor in <strong>Chakan (Pune)</strong> that supplied 14 custom ISPM-15 seaworthy pinewood machinery boxes, VCI vacuum packing, and Flat-Rack container lashing at JNPA for a heavy-engineering exporter. Even though the vessel sailed in August, the exporter stretched the <strong>&#8377;24,60,000</strong> invoice for 195 days past delivery (150 days past the 45-day statutory ceiling).
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Creditor Statutory Claim Box */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-3">
                    Creditor Statutory Claim (MSMED s.16 Compounded Monthly)
                  </p>
                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">Principal Overdue Invoices (ISPM-15 Crating + Lashing)</span>
                      <span className="font-mono font-bold text-white">&#8377;24,60,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">Statutory Credit Window (Written PO Cap)</span>
                      <span className="font-mono font-semibold text-slate-200">45 Days</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">Default Duration Past Appointed Day</span>
                      <span className="font-mono font-semibold text-amber-400">150 Days (~5 Months)</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">Illustrative s.16 Interest (3x RBI Rate @ ~19.5% p.a. Monthly)</span>
                      <span className="font-mono font-bold text-emerald-400">+ &#8377;2,06,480</span>
                    </div>
                    <div className="flex justify-between pt-1 text-sm sm:text-base">
                      <span className="font-extrabold text-white">Total Recoverable Statutory Demand</span>
                      <span className="font-mono font-black text-emerald-400">&#8377;26,66,480</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
                    Note: Exact Section 16 interest tracks the RBI Bank Rate notified on the appointed day (compounded monthly). Verify your live invoice dates using our{" "}
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="text-emerald-400 underline hover:text-emerald-300 font-semibold"
                    >
                      MSME Delayed Payment Interest Calculator
                    </Link>
                    .
                  </p>
                </div>

                {/* Exporter Section 43B(h) Tax Shock Box */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-3">
                      Why the Exporter&apos;s CFO Settles Fast: Section 43B(h) Tax Shock
                    </p>
                    <div className="space-y-2.5 text-xs sm:text-sm text-slate-800">
                      <div className="flex justify-between border-b border-emerald-200 pb-2">
                        <span>Disallowed Packing Expense (If Unpaid on March 31)</span>
                        <span className="font-mono font-bold">&#8377;24,60,000</span>
                      </div>
                      <div className="flex justify-between border-b border-emerald-200 pb-2">
                        <span>Immediate Corporate Income Tax Outflow (@ 25.17%)</span>
                        <span className="font-mono font-bold text-[#DC2626]">&#8377;6,19,182</span>
                      </div>
                      <div className="flex justify-between border-b border-emerald-200 pb-2">
                        <span>Non-Deductible MSMED s.16 Interest (MSMED s.23)</span>
                        <span className="font-mono font-bold text-[#DC2626]">&#8377;2,06,480</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="font-extrabold text-slate-900">Combined Exporter Cash &amp; Audit Penalty</span>
                        <span className="font-mono font-black text-[#DC2626]">&#8377;8,25,662+</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-emerald-900 bg-white/80 border border-emerald-200 rounded-xl p-3 mt-4 leading-relaxed">
                    <strong>Commercial Reality:</strong> Delaying your &#8377;24.6L timber crating ledger costs the exporter over &#8377;8.25L in immediate tax and non-deductible penal interest—plus a mandatory Form 3CD Clause 22 statutory audit disclosure and 180-day GST ITC reversal risk under CGST s.16(2).
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7 — EVIDENCE CHECKLIST */}
            <section
              id="ispm15-evidence-kit"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  ISPM-15 HT Logs, Port Gate Passes &amp; BSA 2023 s.63 Evidence Kit
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Before serving your Advocate Statutory Notice or uploading a claim on MSME Samadhaan, assemble these four evidential pillars so the buyer cannot raise a &ldquo;pre-existing dispute&rdquo; or challenge electronic records.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm font-extrabold text-slate-900 mb-2">
                    1. Export &amp; ISPM-15 Compliance Dossier
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-5">
                    <li>DPPQS-accredited ISPM-15 Heat-Treatment Certificate (<code>IN-XXX</code> number, crate count, cubic meter volume)</li>
                    <li>Automated kiln time-temperature printout proving 56&deg;C core heat for 30+ continuous minutes</li>
                    <li>Exporter Shipping Bill number, Container / Flat-Rack ID, or Bill of Lading reference shared on email/WhatsApp</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm font-extrabold text-slate-900 mb-2">
                    2. Dispatch, Yard &amp; Factory Acceptance Proof
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-5">
                    <li>GST Tax Invoices (HSN 4415 for pallets/crates; SAC 998540 for packing/lashing) &amp; matching E-Way bills</li>
                    <li>Signed Factory Security Gate-In challans, Store GRNs, and weighbridge/timber volume slips</li>
                    <li>Dispatch-day pin moisture-meter log (&lt;18%–20% MC) neutralizing post-monsoon fungus excuses</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm font-extrabold text-slate-900 mb-2">
                    3. Port Lashing &amp; Custom-Build Proof
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-5">
                    <li>CFS / Port terminal entry passes (Mundra, JNPA, Chennai, ICDs) and signed site job completion sheets</li>
                    <li>Third-Party Marine Surveyor Lashing &amp; Choking Certificate (SGS, Intertek, or port-panel surveyor)</li>
                    <li>CAD machinery dimension drawings, center-of-gravity specs, and Ready-for-Inspection (RFI) emails</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm font-extrabold text-slate-900 mb-2">
                    4. BSA 2023 s.63 Electronic &amp; MSME Identity Proof
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-5">
                    <li>Active Udyam Registration Certificate dated prior to invoice supply (Micro/Small classification)</li>
                    <li>GSTR-1 filing record confirming the buyer availed Input Tax Credit on your unpaid bills</li>
                    <li>Signed <strong>BSA 2023 Section 63</strong> certificate authenticating WhatsApp chats, geotagged stuffing photos, and email trails</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 8 — DUAL TRACK CTA */}
            <section
              id="launch-recovery-desk"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Initiate a &#8377;999 Advocate Demand Notice or Bulk Factory CSV Desk
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Whether you need to enforce a single stuck heavy-machinery export crating bill immediately or clear 50+ overdue factory pallet and CHA lashing ledgers before March 31, choose your execution track below.
              </p>

              <WoodenPalletRecoveryCTA />
            </section>

            {/* SECTION 9 — INTERNAL LINKING HUB, TOOLS & SIBLINGS */}
            <section
              id="related-packaging-tools"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Packaging Hub, MSME Calculators &amp; Related Industrial Playbooks
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/industries/packaging-printing-paper-mill-recovery"
                  className="group block bg-slate-900 text-white rounded-xl p-4 sm:p-5 border border-slate-800 hover:border-[#DC2626] transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                    Parent Industry Hub &middot; IND-22
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-red-300 mt-1">
                    Packaging, Corrugated Box, Printing &amp; Paper Mill Recovery Hub &rarr;
                  </h3>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    Explore multi-track recovery matrices across cartons, laminates, wooden pallets, rigid moulds, and paper mills.
                  </p>
                </Link>

                <Link
                  href="/law/section-43bh-msme-payment-rule"
                  className="group block bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 hover:border-[#DC2626] transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                    Statutory Deep-Dive
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#DC2626] mt-1">
                    Income Tax Section 43B(h) 45-Day MSME Payment Rule &rarr;
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    How corporate exporters and factory buyers face full tax disallowance and Form 3CD Clause 22 audit exposure.
                  </p>
                </Link>

                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="group block bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 hover:border-[#DC2626] transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    Interactive T1 Calculator
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#DC2626] mt-1">
                    MSME Delayed Payment Interest Calculator (3x RBI Rate) &rarr;
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Calculate exact monthly compounded Section 16 interest on overdue timber pallet and export crating bills.
                  </p>
                </Link>

                <Link
                  href="/templates/msme-delayed-payment-demand-notice"
                  className="group block bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 hover:border-[#DC2626] transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                    Advocate P1 Template
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#DC2626] mt-1">
                    MSME Delayed Payment Legal Demand Notice Format &rarr;
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Ready-to-customize statutory notice incorporating Udyam particulars, 45-day deadline, and s.43B(h) warning.
                  </p>
                </Link>

                <Link
                  href="/corrugated-box-carton-manufacturer-bursting-strength-gsm-dispute-recovery"
                  className="group block bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 hover:border-[#DC2626] transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    IND-22 Sibling Guide
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#DC2626] mt-1">
                    Corrugated Box Manufacturer Recovery: BF &amp; GSM Disputes &rarr;
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Defeat unilateral 10%–15% bursting strength and monsoon moisture debit notes after outward shipment.
                  </p>
                </Link>

                <Link
                  href="/custom-printed-flexible-packaging-pouches-cartons-unlifted-stock-recovery"
                  className="group block bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 hover:border-[#DC2626] transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    IND-22 Sibling Guide
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#DC2626] mt-1">
                    Unlifted Custom-Printed Pouches &amp; Cylinder Cost Recovery &rarr;
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Recover 100% contract price and Section 44 storage rent on zero-salvage custom packaging stock.
                  </p>
                </Link>
              </div>
            </section>

            {/* SECTION 10 — FAQS */}
            <section
              id="pallet-crating-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions: Wooden Pallet &amp; Export Crating Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-mono text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 pt-3 border-t border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* SECTION 11 — STATUTORY AUTHORITIES */}
            <section
              id="statutory-authorities"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Authoritative Bare Acts, DPPQS ISPM-15 &amp; MSME Statutory Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <span className="text-[11px] font-mono font-bold text-[#DC2626] mt-0.5 shrink-0">
                      [{idx + 1}]
                    </span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] underline underline-offset-2 font-medium leading-snug"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                <strong>Editorial &amp; Statutory Review Note:</strong> Authored by Anuj Anand Malik (Advocate &amp; Founder, AMA Legal Solutions) for industrial wooden pallet manufacturers, ISPM-15 seaworthy crating units, and port container lashing contractors across India. Statutory interest calculations and MSEFC jurisdictional eligibility depend on your active Udyam classification and invoice documentation.
              </p>
            </section>
          </article>
        </div>
      </main>

      {/* Footer Cluster Cross-Links */}
      <RelatedRecoveryGuides currentPath={PAGE_URL} />
    </div>
  );
}
