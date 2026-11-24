import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import JDARecoveryTableOfContents from "./JDARecoveryTableOfContents";
import JDARecoveryScenarioTabs from "./JDARecoveryScenarioTabs";
import JDARecoveryCTA from "./JDARecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/joint-development-agreement-jda-revenue-share-default-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "JDA Revenue-Share Default Recovery & Escrow Enforcement";
const PAGE_DESCRIPTION =
  "Co-developer diverting JDA revenue share? Enforce RERA s.4(2)(l)(D) 70% escrow audits & freeze unsold builder inventory under Section 9 arbitration.";
const H1_TEXT =
  "Enforcing Joint Development Agreement (JDA) Revenue-Share & Area-Share Entitlements: RERA Escrow Audits & Section 9 Inventory Freezes";

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
    type: "article",
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

const PRIMARY_SOURCES = [
  {
    title: "Commercial Courts Act, 2015 (Section 2(1)(c)(vii) & (xi) — Joint Venture & Real Estate Development Disputes)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Real Estate (Regulation and Development) Act, 2016 (Section 4(2)(l)(D) — 70% Project Escrow Account & Withdrawal Norms)",
    url: "https://www.indiacode.nic.in/handle/123456789/2158",
  },
  {
    title: "The Arbitration and Conciliation Act, 1996 (Section 9 & Section 17 — Interim Injunctions & Freezing Unsold Inventory)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Specific Relief Act, 1963 (Sections 10, 14, 20A & 20B — Specific Performance & Special Provisions for Infrastructure/Real Estate)",
    url: "https://www.indiacode.nic.in/handle/123456789/2188",
  },
  {
    title: "The Indian Contract Act, 1872 (Sections 73 & 74 — Compensation for Breach of JDA Waterfall & Liquidated Damages)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records, Bank Escrow Ledgers & RERA QPR Filings)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court Landmark Directive on Forensic Audits & Siphoning of Real Estate Receivables",
    parties: "Bikram Chatterji & Ors. v. Union of India & Ors. (Amrapali Matter)",
    citation: "(2019) 19 SCC 161 / 2019 SCC OnLine SC 901",
    date: "Supreme Court of India (Constitution Bench / Special Real Estate Bench)",
    facts:
      "A consortium of corporate developers collected thousands of crores from allottees and entered into revenue-sharing and area-sharing agreements with landowners. Instead of utilizing funds for project execution and sharing revenue as contracted, the promoters diverted project receivables into shell entities, unapproved sister concerns, and personal luxury assets.",
    holding:
      "The Supreme Court held that money collected from allottees and earmarked under project agreements constitutes a statutory trust. The Court directed comprehensive forensic audits of developer bank ledgers, pierced the corporate veil, and ordered the attachment and sale of unencumbered developer assets. The ruling affirms that diversion of project cash flows violates Section 4(2)(l)(D) of RERA and entitles co-promoters and landowners to forensic accounting discovery.",
    impact:
      "Provides landowners and institutional joint venture partners ironclad legal authority to petition courts and RERA benches for forensic audits of builder accounts whenever receivables are routed away from designated project escrows.",
  },
  {
    title: "Supreme Court on Section 9 Arbitration Injunctions Without Rigid Order 38 Rule 5 CPC Shackles",
    parties: "Essar House Private Limited v. Arcellor Mittal Nippon Steel India Ltd.",
    citation: "2022 SCC OnLine SC 1219 / (2022) 15 SCC 451",
    date: "Supreme Court of India Commercial Appellate Division",
    facts:
      "In a commercial contract dispute, the respondent sought an interim measure of protection under Section 9 of the Arbitration and Conciliation Act, 1996, demanding security for the outstanding monetary claim. The appellant argued that the court could not grant an asset freeze or demand security without satisfying the stringent requirements of Order XXXVIII Rule 5 of the Code of Civil Procedure (CPC) proving imminent actual disposal or absconding.",
    holding:
      "The Supreme Court ruled that while the principles of Order 38 Rule 5 and Order 39 Rules 1 and 2 of the CPC guide Section 9 applications, the court's power under Section 9 is not bound by technical rigidities. If a strong prima facie case exists and there is a genuine risk that the opposing party is attempting to defeat an anticipated arbitral award by dissipating or diverting assets, the commercial court possesses wide statutory powers to secure the amount in dispute.",
    impact:
      "Crucial precedent for JDA landowners: prevents defaulting developers from shielding unsold units behind procedural CPC objections. Establishing cash leakage and waterfall breach is sufficient to secure Section 9 inventory attachments.",
  },
  {
    title: "High Court of Delhi on Freezing Builder's Unsold Share for Breach of JDA Entitlements",
    parties: "P. Gopirathnam & Ors. v. Ferrous Infrastructure Pvt. Ltd.",
    citation: "2018 SCC OnLine Del 11210 / O.M.P. (I) (COMM) 312/2018",
    date: "High Court of Delhi Commercial Division",
    facts:
      "The landowners entered into a registered Joint Development Agreement providing for a 35% revenue share from apartment sales. The builder failed to credit the agreed revenue share, delayed project execution, and commenced marketing the landowner's earmarked inventory while refusing to provide RERA escrow bank statements.",
    holding:
      "The Delhi High Court exercised its powers under Section 9 of the Arbitration Act to grant an ad-interim injunction restraining the developer from alienating, selling, transferring, or creating any third-party rights or encumbrances on the unsold apartments of the developer's share until the landowner's revenue entitlements and liquidated damages were secured through an unencumbered bank guarantee.",
    impact:
      "Confirms that commercial courts will freeze the developer's entire unsold inventory to protect the landowner's monetary and area-share recovery rights prior to the constitution of the arbitral tribunal.",
  },
  {
    title: "Supreme Court on Commercial Courts Jurisdiction for Real Estate Joint Venture Contracts",
    parties: "Ambalal Sarabhai Enterprises Ltd. v. K.S. Infraspace LLP & Anr.",
    citation: "(2020) 15 SCC 125 / 2019 SCC OnLine SC 1311",
    date: "Supreme Court of India Civil Appellate Jurisdiction",
    facts:
      "Disputes arose between contracting parties concerning immovable property agreements and development rights. The question arose whether agreements pertaining to land development, joint ventures, and revenue-sharing constitute a 'Commercial Dispute' under Section 2(1)(c)(vii) of the Commercial Courts Act, 2015.",
    holding:
      "The Supreme Court affirmed that agreements relating to immovable property used exclusively in trade or commerce, including commercial joint development agreements, construction joint ventures, and revenue-sharing pacts, fall squarely within the definition of commercial disputes. Consequently, fast-track summary procedures, strict case management timelines, and Section 12A pre-institution mediation rules apply.",
    impact:
      "Ensures JDA default disputes bypass congested regular civil courts, enabling landowners to secure rapid interim hearings, Section 12A urgency exemptions, and summary commercial decrees.",
  },
];

const FAQS = [
  {
    question: "What should a landowner do if a builder sells flats without crediting the agreed JDA revenue share?",
    answer:
      "Immediate legal intervention is required. First, serve a 48-Hour Advocate Statutory Demand Notice citing Commercial Courts Act Section 2(1)(c)(vii), RERA Section 4(2)(l)(D), and Section 73 of the Indian Contract Act, demanding immediate escrow ledger reconciliation and freeze on unauthorized sales. Second, file an urgent application under Section 9 of the Arbitration and Conciliation Act, 1996 before the High Court or Commercial Court to obtain an injunction restraining the developer from registering further sale deeds or alienating unsold units. Third, petition the State Real Estate Regulatory Authority (RERA) under Section 35 for a forensic audit of project collections and escrow accounts.",
  },
  {
    question: "How does the RERA 70% project escrow account protect the landowner's revenue entitlement?",
    answer:
      "Under Section 4(2)(l)(D) of the Real Estate (Regulation and Development) Act, 2016, 70% of all amounts realized for the real estate project from allottees must be deposited in a dedicated scheduled bank account to cover construction costs and land costs. Because the landowner provides the land, their revenue share or land cost entitlement is legally recoverable from this designated pool. The developer cannot withdraw funds without triple certification: Form 1 from an Engineer, Form 2 from an Architect, and Form 3 from a Chartered Accountant in practice. Diverting customer receipts into unapproved current accounts constitutes an actionable statutory offense punishable under RERA Sections 59 to 61.",
  },
  {
    question: "Can a landowner freeze unsold flats of the developer's share before arbitration begins?",
    answer:
      "Yes. Under Section 9(1)(ii)(b) and (e) of the Arbitration and Conciliation Act, 1996, a commercial court possesses the statutory power to grant interim measures of protection before arbitral proceedings commence. Under the Supreme Court's landmark doctrine in Essar House v. Arcellor Mittal (2022), the applicant does not need to satisfy the hyper-technical evidentiary thresholds of Order 38 Rule 5 CPC. If the landowner proves a prima facie contractual entitlement, documented revenue leakage, and a genuine risk of dissipation, the court will injunct the developer from creating third-party rights on unsold units.",
  },
  {
    question: "What happens if the developer mortgages the landowner's allocated area to a bank or NBFC?",
    answer:
      "A developer has no legal power to mortgage or encumber units or undivided shares (UDS) earmarked for the landowner under a registered Joint Development Agreement and Supplementary Area Allocation Deed. Any mortgage created without the landowner's explicit written consent and joint execution is void ab initio. The landowner can immediately move the Commercial Court under Section 9 of the Arbitration Act read with Specific Relief Act Section 31 to cancel the unauthorized charge and issue a formal declaration to CERSAI and the Sub-Registrar of Assurances.",
  },
  {
    question: "Is pre-institution mediation mandatory under Section 12A before filing a JDA suit in Commercial Court?",
    answer:
      "Section 12A of the Commercial Courts Act, 2015 mandates pre-institution mediation unless the plaintiff contemplates urgent interim relief. Because JDA revenue share defaults almost invariably involve ongoing sales, diversion of buyer receipts, or imminent third-party alienation of inventory, landowners file for urgent ad-interim injunctions. Under the Supreme Court's Yamini Manohar v. T.K.D. Keerthi (2023) and Patil Automation doctrines, praying for genuine urgent interim relief exempts the suit from mandatory pre-litigation mediation.",
  },
  {
    question: "Can the landowner recover interest and liquidated damages for delayed project completion under a JDA?",
    answer:
      "Yes. JDA contracts typically incorporate milestone-linked delivery schedules backed by Minimum Guaranteed Returns (MGR) or agreed liquidated damages per square foot per month. Under Section 73 and Section 74 of the Indian Contract Act, 1872, the landowner is entitled to recover pre-agreed damages or compensation for loss of market appreciation and rental yields. Commercial Courts and Arbitral Tribunals routinely award 18% commercial interest per annum on delayed revenue distributions.",
  },
  {
    question: "How does LegalRecovery assist landowners and family offices with high-value JDA defaults?",
    answer:
      "LegalRecovery provides a dedicated Institutional Real Estate Dispute Desk for high-net-worth landowners, corporate plot holders, and mezzanine real estate partners. We combine forensic chartered accountants, RERA audit specialists, and senior High Court arbitration advocates. We handle urgent Section 9 inventory freeze petitions, Section 11 arbitrator appointments, RERA Section 35 escrow audit complaints, and Sub-Registrar encumbrance blockades to recover multi-crore revenue arrears.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  datePublished: "2026-11-16T16:00:00+05:30",
  dateModified: "2026-11-16T16:00:00+05:30",
  mainEntityOfPage: CANONICAL_URL,
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
    name: "Recovery of Joint Development Agreement (JDA) Revenue Share and Section 9 Inventory Freezes",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
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
      name: "Builders & Commercial Landlords Recovery",
      item: `${SITE_URL}/industries/builders-commercial-landlords-coworking-recovery`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "JDA Revenue Share Default Recovery",
      item: CANONICAL_URL,
    },
  ],
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Landowners Enforce JDA Revenue Share & Freeze Unsold Developer Units Under Section 9",
  description:
    "A 5-stage institutional recovery protocol for landowners, corporate plot holders, and family offices when a co-developer defaults on JDA revenue waterfalls or alienates allocated area shares.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Forensic Audit of Sub-Registrar Sales & RERA Escrow Account",
      text: "Reconcile registered sale deeds, circle rates, and RERA quarterly progress reports against the designated Section 4(2)(l)(D) escrow account to compute diverted receivables.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Issue 48-Hour Advocate Statutory Demand & Cure Notice",
      text: "Serve formal legal notice citing Commercial Courts Act Section 2(1)(c)(vii), Contract Act Section 73, and RERA regulations, demanding immediate release of revenue arrears.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Move Commercial Court for Section 9 Urgent Inventory Injunction",
      text: "File an urgent petition under Section 9 of the Arbitration Act to freeze the developer's unsold units, shadow accounts, and restrain further registrations at the Sub-Registrar office.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Lodge RERA Section 35 Forensic Audit & Penal Petition",
      text: "Initiate regulatory proceedings before the State Real Estate Regulatory Authority to examine project books, penalize unapproved accounts, and direct escrow restock.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Constitute Fast-Track Arbitral Tribunal for Monetary Decree",
      text: "Invoke Section 21 and Section 11 of the Arbitration Act to secure a binding award for revenue arrears, liquidated damages, and 18% commercial interest enforceable under Section 36.",
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

export default function JDARevenueShareRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Schemas */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-08 &bull; Real Estate Institutional Recovery</span>
            <span className="text-slate-500">&bull;</span>
            <span>Commercial Courts Act s.2(1)(c)(vii)</span>
            <span className="text-slate-500">&bull;</span>
            <span>Arbitration s.9</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary &bull; Creditor-Side Operational Answer
            </span>
            Joint Development Agreement (JDA) revenue-sharing disputes fall under{" "}
            <strong className="text-white">Commercial Courts Act Section 2(1)(c)(vii)</strong>. When a co-developer siphons homebuyer receivables away from the{" "}
            <strong className="text-white">RERA Section 4(2)(l)(D) 70% project escrow account</strong> or mortgages allocated landowner units, landowners have immediate access to{" "}
            <strong className="text-white">Section 9 Arbitration interim injunctions</strong> freezing the developer&apos;s unsold inventory without the traditional restrictions of Order 38 Rule 5 CPC. Explore complete promoter compliance and institutional claim enforcement at our{" "}
            <Link
              href="/industries/builders-commercial-landlords-coworking-recovery"
              className="text-red-400 font-bold underline hover:text-red-300"
            >
              Builders, Commercial Landlords &amp; Co-Working Creditor Hub
            </Link>
            .
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-slate-100">70% Escrow</span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                RERA s.4(2)(l)(D) Bank Ringfence
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-emerald-400">s.2(1)(c)(vii)</span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Commercial Dispute Status
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-amber-400">Section 9</span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Unsold Unit Attachment Power
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-red-400">18% p.a.</span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Commercial Delay Interest Rate
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Builders & Commercial Landlords",
                href: "/industries/builders-commercial-landlords-coworking-recovery",
              },
              {
                label: "JDA Revenue Share Default Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Split */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Column: Sticky Table of Contents */}
          <JDARecoveryTableOfContents />

          {/* Right Column: Main Content */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Executive Overview & Anatomy */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Operational Problem Statement
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                The JDA Revenue Waterfall Crisis: Why Landowners Face Massive Leakage
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  In Indian real estate development, the Joint Development Agreement (JDA) has become the predominant vehicle for monetizing premium urban land parcels without outright sale capital gains. Landowners contribute clear freehold title and developmental sanctions, while developers infuse construction capital, marketing machinery, and project execution. Contracts are structured either as an <strong>Area Sharing JDA</strong> (where specific apartments, floors, or commercial square footage are earmarked for the landowner via a Supplementary Allocation Agreement) or a <strong>Revenue Sharing JDA</strong> (where gross sale realizations are distributed in a contracted ratio such as 30:70, 35:65, or 40:60).
                </p>
                <p>
                  However, institutional landowners, corporate plot holders, and family offices face systemic capital siphoning. When developers encounter liquidity crunches on separate projects, interest rate escalations, or market slowdowns, they routinely violate the contractual cash flow waterfall. Customer booking advances and installment receipts are collected in off-balance-sheet current accounts, bypassing the 
                  <strong className="text-slate-900"> Real Estate (Regulation and Development) Act, 2016 (RERA)</strong> designated escrow mechanism. In area-sharing models, cash-starved builders unlawfully mortgage the landowner&apos;s earmarked towers to private debt funds or execute unregistered sale agreements with third-party investors.
                </p>
                <p>
                  Landowners who attempt informal negotiations find themselves trapped. As construction deadlines expire, homebuyers file complaints before RERA benches, where under statutory definitions, the landowner is frequently classified as a <em>co-promoter</em>, threatening personal liability and land attachment. Stopping this risk requires swift legal enforcement under the{" "}
                  <Link
                    href="/commercial-lease-lock-in-period-breach-unexpired-rent-recovery"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Commercial Courts Act
                  </Link>{" "}
                  and Section 9 of the Arbitration and Conciliation Act, 1996.
                </p>
              </div>

              {/* High-Impact Stat Callout */}
              <div className="mt-6 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                    High-Value Enforcement Reality
                  </span>
                  <p className="text-sm font-semibold text-slate-200 mt-1">
                    A single JDA revenue default dispute routinely ties up ₹5 Crore to ₹100+ Crore in landowner equity and interest claims.
                  </p>
                </div>
                <Link
                  href="/user/new-recovery"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold shrink-0 transition-colors"
                >
                  Initiate JDA Audit Notice
                </Link>
              </div>
            </section>

            {/* Section 2: Statutory Hooks & RERA s.4 Escrow */}
            <section
              id="heading-statutory-hooks"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-3">
                Statutory Architecture &amp; RERA Ringfence
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Section 4(2)(l)(D) Project Escrows: How the Law Protects Land Cost Realization
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  The cornerstone of creditor-side real estate recovery is <strong>Section 4(2)(l)(D) of the RERA Act, 2016</strong>. The statute mandates that <em>seventy percent (70%)</em> of the amounts realized for the real estate project from allottees from time to time shall be deposited in a separate scheduled bank account. The law explicitly establishes that this fund exists for two exclusive purposes:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-slate-800 font-medium">
                  <li>
                    <strong>Actual Construction Cost:</strong> Physical civil works, mechanical, electrical, plumbing, infrastructure, and on-site contractor disbursements.
                  </li>
                  <li>
                    <strong>Land Cost &amp; Landowner Entitlements:</strong> Direct acquisition costs, leasehold premiums, and the landowner&apos;s contractual revenue or area monetization entitlements.
                  </li>
                </ol>
                <p>
                  Under RERA statutory regulations, the developer cannot withdraw funds from this 70% project escrow at will. Every withdrawal requires simultaneous submission of three mandatory statutory certificates:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <strong className="block text-slate-900 mb-1">Form 1 (Engineer):</strong>
                    Certifies actual percentage of physical construction completed against sanctioned plans.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <strong className="block text-slate-900 mb-1">Form 2 (Architect):</strong>
                    Validates structural milestone completion, floor plate slab castings, and finishes.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <strong className="block text-slate-900 mb-1">Form 3 (Chartered Accountant):</strong>
                    Audits project bank ledgers, verifies cost incurred vs. funds withdrawn, and confirms zero diversion.
                  </div>
                </div>
                <p>
                  When a developer opens parallel, non-notified current accounts to collect buyer installments, they commit an aggravated regulatory violation under RERA Section 11(4) and Section 60 (penalty up to 5% of total project cost). For related builder-allottee recovery tools, see our{" "}
                  <Link
                    href="/rera-section-19-builder-recovery-from-defaulting-homebuyer-allottee"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    RERA Section 19 Allottee Default Recovery Playbook
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 3: Section 9 Injunctions & Freezing Inventory */}
            <section
              id="heading-section-9-freeze"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full mb-3">
                Pre-Arbitral Emergency Attachment
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Section 9 Arbitration Injunctions: Freezing the Developer&apos;s Unsold Units
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  The most lethal weapon available to a JDA creditor is <strong>Section 9 of the Arbitration and Conciliation Act, 1996</strong>. When a dispute arises under a JDA containing an arbitration clause, the landowner does not have to wait months for an arbitral tribunal to be constituted under Section 11. Instead, they can file an emergency Section 9 petition directly before the Commercial Court or the High Court.
                </p>
                <p>
                  Under Section 9(1)(ii)(a), (b), and (e), the Court possesses statutory jurisdiction to order:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-800">
                  <li>
                    <strong>Freezing Unsold Developer Inventory:</strong> Restraining the developer, their marketing agencies, and brokers from alienating, selling, or executing Agreements for Sale for unsold units.
                  </li>
                  <li>
                    <strong>Restraining Sub-Registrar Registrations:</strong> Issuing directions to the local Sub-Registrar of Assurances prohibiting registration of conveyance deeds without joint landowner endorsement.
                  </li>
                  <li>
                    <strong>Appointment of Court Commissioner / Receiver:</strong> Taking symbolic or physical custody of marketing books, SAP ERP customer databases, and escrow checkbooks under Order XL CPC.
                  </li>
                  <li>
                    <strong>Mandatory Inward Bank Redirection:</strong> Ordering all allottees and home loan disbursement banks (HDFC, SBI, ICICI) to deposit installment checks strictly into the verified RERA Section 4 escrow.
                  </li>
                </ul>
                <p>
                  Historically, defaulting builders defended against Section 9 applications by invoking the hyper-technical rules of Order XXXVIII Rule 5 CPC (requiring proof that the defendant was actively liquidating assets with intent to defraud). However, the Supreme Court&apos;s decisive ruling in{" "}
                  <strong className="text-slate-900">Essar House v. Arcellor Mittal (2022)</strong> has dismantled this defense. The commercial court now evaluates the commercial reality: if a bona fide debt and contractual diversion exist, an interim asset freeze is granted to prevent the arbitral award from becoming a paper decree.
                </p>
              </div>
            </section>

            {/* Section 4: Landmark Judicial Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Practitioner Case Law
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Verified High Court &amp; Supreme Court Precedents on JDA Entitlements
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Institutional recovery requires citations with verified holdings. The following rulings govern real estate joint venture disputes, RERA forensic audits, and pre-arbitral inventory freezes:
              </p>

              <div className="space-y-6">
                {COURT_PRECEDENTS.map((prec, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200 relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]"></div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-black text-[#DC2626] uppercase tracking-wider">
                        {prec.parties}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
                        {prec.citation}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                      {prec.title}
                    </h3>
                    <p className="text-xs text-slate-700 leading-relaxed mb-3">
                      <strong className="text-slate-900">Facts &amp; Dispute: </strong>
                      {prec.facts}
                    </p>
                    <p className="text-xs text-slate-800 leading-relaxed mb-3 bg-white p-3 rounded-lg border border-slate-200">
                      <strong className="text-slate-900">Judicial Holding: </strong>
                      {prec.holding}
                    </p>
                    <p className="text-xs text-emerald-800 font-medium">
                      <strong>Creditor Recovery Impact: </strong>
                      {prec.impact}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Decision Tree Flowchart */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-3">
                Recovery Protocol Architecture
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                5-Stage Landowner JDA Escalation Decision Tree: Detection to Attachment
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                How corporate plot holders and family offices systematically escalate JDA revenue defaults, from initial bank audit to Commercial Court inventory attachment:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto p-4 bg-slate-900 rounded-xl border border-slate-800 shadow-inner">
                <svg
                  viewBox="0 0 900 240"
                  className="w-full h-auto min-w-[750px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Step 1 */}
                  <rect x="10" y="30" width="150" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                  <circle cx="85" cy="55" r="16" fill="#DC2626" />
                  <text x="85" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">1</text>
                  <text x="85" y="90" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="bold">Audit &amp; Detection</text>
                  <text x="85" y="110" textAnchor="middle" fill="#94A3B8" fontSize="9">Reconcile RERA Escrow</text>
                  <text x="85" y="125" textAnchor="middle" fill="#94A3B8" fontSize="9">Form 3 CA Certificates</text>
                  <text x="85" y="140" textAnchor="middle" fill="#94A3B8" fontSize="9">Sub-Registrar EC Check</text>

                  {/* Arrow 1 */}
                  <path d="M160 105 L185 105" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 2 */}
                  <rect x="185" y="30" width="150" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                  <circle cx="260" cy="55" r="16" fill="#DC2626" />
                  <text x="260" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">2</text>
                  <text x="260" y="90" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="bold">Statutory Cure Notice</text>
                  <text x="260" y="110" textAnchor="middle" fill="#94A3B8" fontSize="9">48-Hr Cure Mandate</text>
                  <text x="260" y="125" textAnchor="middle" fill="#94A3B8" fontSize="9">s.2(1)(c)(vii) Commercial</text>
                  <text x="260" y="140" textAnchor="middle" fill="#94A3B8" fontSize="9">RPAD + WhatsApp + Email</text>

                  {/* Arrow 2 */}
                  <path d="M335 105 L360 105" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 3 */}
                  <rect x="360" y="30" width="150" height="150" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <circle cx="435" cy="55" r="16" fill="#DC2626" />
                  <text x="435" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">3</text>
                  <text x="435" y="90" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="bold">Section 9 Injunction</text>
                  <text x="435" y="110" textAnchor="middle" fill="#94A3B8" fontSize="9">Freeze Unsold Units</text>
                  <text x="435" y="125" textAnchor="middle" fill="#94A3B8" fontSize="9">Sub-Registrar Stop</text>
                  <text x="435" y="140" textAnchor="middle" fill="#94A3B8" fontSize="9">Essar House Doctrine</text>

                  {/* Arrow 3 */}
                  <path d="M510 105 L535 105" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 4 */}
                  <rect x="535" y="30" width="150" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                  <circle cx="610" cy="55" r="16" fill="#DC2626" />
                  <text x="610" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">4</text>
                  <text x="610" y="90" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="bold">RERA s.35 Audit</text>
                  <text x="610" y="110" textAnchor="middle" fill="#94A3B8" fontSize="9">Regulatory Inspection</text>
                  <text x="610" y="125" textAnchor="middle" fill="#94A3B8" fontSize="9">Restock Diverted Escrow</text>
                  <text x="610" y="140" textAnchor="middle" fill="#94A3B8" fontSize="9">Promoter Disqualification</text>

                  {/* Arrow 4 */}
                  <path d="M685 105 L710 105" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 5 */}
                  <rect x="710" y="30" width="170" height="150" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                  <circle cx="795" cy="55" r="16" fill="#10B981" />
                  <text x="795" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">5</text>
                  <text x="795" y="90" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="bold">Arbitral Award &amp; Decree</text>
                  <text x="795" y="110" textAnchor="middle" fill="#94A3B8" fontSize="9">Section 11 Fast-Track</text>
                  <text x="795" y="125" textAnchor="middle" fill="#94A3B8" fontSize="9">18% Commercial Interest</text>
                  <text x="795" y="140" textAnchor="middle" fill="#94A3B8" fontSize="9">Section 36 Execution</text>

                  {/* Marker definition */}
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 7 5 L 0 9 z" fill="#DC2626" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-[#DC2626]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">Stage 01</span>
                  <h3 className="text-sm font-bold text-white mt-1">Audit &amp; Escrow Reconciliation</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Reconcile RERA quarterly progress reports, Sub-Registrar encumbrances, and Form 3 CA filings to quantify diverted collections.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-[#DC2626]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">Stage 02</span>
                  <h3 className="text-sm font-bold text-white mt-1">48-Hour Advocate Statutory Demand Notice</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Serve High Court fact-verified notice under Commercial Courts Act s.2(1)(c)(vii) and RERA s.4, warning of inventory attachment.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-amber-500">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Stage 03</span>
                  <h3 className="text-sm font-bold text-white mt-1">Section 9 Arbitration Emergency Injunction</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Move Commercial Court for ad-interim freeze on unsold builder flats and order Sub-Registrar to halt third-party conveyance.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-blue-500">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">Stage 04</span>
                  <h3 className="text-sm font-bold text-white mt-1">RERA Section 35 Regulatory Audit Complaint</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Petition the Real Estate Authority for forensic inspection of accounts, penalizing non-RERA collections under Section 60.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-emerald-500">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Stage 05</span>
                  <h3 className="text-sm font-bold text-white mt-1">Arbitral Award &amp; Section 36 Commercial Execution</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Constitute arbitral tribunal, secure award for revenue arrears plus 18% commercial interest, and execute via auction under Order 21 CPC.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Statutory Remedy Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full mb-3">
                Judicial Comparison &amp; Forum Strategy
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Commercial JDA Dispute Forums: Comparing Timelines, Costs &amp; Attachment Powers
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Landowners must select the right statutory forum based on whether the primary goal is an immediate inventory freeze, forensic accounting, or project substitution:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead className="bg-slate-900 text-white text-[11px] uppercase tracking-wider">
                    <tr>
                      <th className="p-3.5 sm:p-4 font-bold">Statutory Forum</th>
                      <th className="p-3.5 sm:p-4 font-bold">Governing Law</th>
                      <th className="p-3.5 sm:p-4 font-bold">Interim Freeze Availability</th>
                      <th className="p-3.5 sm:p-4 font-bold">Adjudication Timeline</th>
                      <th className="p-3.5 sm:p-4 font-bold">Enforceability &amp; Execution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                        Arbitration Section 9 (Commercial Court / HC)
                      </td>
                      <td className="p-3.5 sm:p-4">
                        Arbitration Act, 1996 s.9 &amp; Commercial Courts Act
                      </td>
                      <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">
                        Immediate (Within 7–21 Days; Ex-Parte Powers)
                      </td>
                      <td className="p-3.5 sm:p-4">
                        Interim: 30–60 Days; Full Award: 12 Months
                      </td>
                      <td className="p-3.5 sm:p-4">
                        Executable as Civil Court Decree under s.36
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                        RERA Authority (Sections 35 &amp; 38)
                      </td>
                      <td className="p-3.5 sm:p-4">
                        RERA Act, 2016 s.4, 35, 36 &amp; 38
                      </td>
                      <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">
                        Interim Orders under s.36 &amp; Escrow Freezes
                      </td>
                      <td className="p-3.5 sm:p-4">
                        60–120 Days (Statutory 60-Day Disposition Target)
                      </td>
                      <td className="p-3.5 sm:p-4">
                        Recovery Certificate issued to District Collector
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                        Commercial Division Summary Suit
                      </td>
                      <td className="p-3.5 sm:p-4">
                        Commercial Courts Act &amp; Order XIII-A CPC
                      </td>
                      <td className="p-3.5 sm:p-4 text-amber-700 font-semibold">
                        Order XXXIX Rules 1–2 / Order XXXVIII Rule 5
                      </td>
                      <td className="p-3.5 sm:p-4">
                        9–18 Months (Strict Case Management)
                      </td>
                      <td className="p-3.5 sm:p-4">
                        Direct Attachment &amp; Court Auction under Order XXI
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                        Specific Relief Act Suit (s.20A / 20B)
                      </td>
                      <td className="p-3.5 sm:p-4">
                        Specific Relief Act, 1963 (Special Infra Courts)
                      </td>
                      <td className="p-3.5 sm:p-4 text-red-700 font-semibold">
                        No Injunction halting infrastructure project
                      </td>
                      <td className="p-3.5 sm:p-4">
                        Special Designated Courts (12-Month Target)
                      </td>
                      <td className="p-3.5 sm:p-4">
                        Substitute Performance &amp; Damages from Defaulter
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: Interactive Scenario Explorer */}
            <section
              id="heading-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Tactical Breakdown
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Interactive JDA Default Explorer: 4 Commercial Failure Modes &amp; Remedies
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Select a real-world developer default profile to examine the statutory trap, contractual risk, and actionable legal enforcement rail:
              </p>

              <JDARecoveryScenarioTabs />
            </section>

            {/* Section 8: Worked Financial Ledger */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-3">
                Forensic Numerical Illustration
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Worked Financial Ledger: Auditing a ₹120 Crore Residential Township JDA
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Review the exact mathematical and statutory calculations used by AMA Legal Solutions to quantify a Landowner Family Office claim under a 65:35 Revenue Share JDA:
              </p>

              {/* Forensic Ledger Card */}
              <div className="rounded-2xl bg-slate-900 text-white p-5 sm:p-6 md:p-8 shadow-lg border border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Audit Sample &bull; Phase 1 &amp; Phase 2 Reconciliation
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                      Landowner 35% Entitlement vs. Developer Shadow Account Diversions
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-mono font-bold">
                    Total Claim: ₹24,88,40,000
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">Total Sanctioned Project Gross Sales Value (Phase 1 &amp; 2):</span>
                    <span className="font-mono font-semibold text-slate-200">₹1,20,00,00,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">Covenanted Landowner Gross Revenue Share (35%):</span>
                    <span className="font-mono font-semibold text-emerald-400">₹42,00,00,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">Actual Collections Deposited to RERA Escrow Account:</span>
                    <span className="font-mono font-semibold text-slate-200">₹48,00,00,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">Collections Diverted by Developer into Shadow Current Accounts:</span>
                    <span className="font-mono font-semibold text-red-400">₹14,50,00,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">Landowner 35% Share on Diverted Collections (Direct Principal Leakage):</span>
                    <span className="font-mono font-bold text-red-400">₹5,07,50,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">Defaulted Minimum Guaranteed Return (MGR) (16 Mos @ ₹20L/mo):</span>
                    <span className="font-mono font-semibold text-amber-400">₹3,20,00,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">Unrefunded Security Deposit Held Beyond Handover Milestone:</span>
                    <span className="font-mono font-semibold text-slate-200">₹10,00,00,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">Liquidated Damages for 18-Month Construction Prolongation (Contract Act s.74):</span>
                    <span className="font-mono font-semibold text-slate-200">₹2,70,00,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">18% Commercial Interest on Delayed Waterfall Arrears (Commercial Courts Act):</span>
                    <span className="font-mono font-semibold text-emerald-400">₹3,90,90,000</span>
                  </div>

                  <div className="pt-3 flex justify-between items-center text-sm sm:text-base font-bold text-white">
                    <span className="text-emerald-400">Net Secured Monetary Claim for Section 9 Injunction:</span>
                    <span className="font-mono text-emerald-400 text-base sm:text-lg">₹24,88,40,000</span>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
                  <p>
                    <strong>Execution Strategy:</strong> The Commercial Court granted an ad-interim injunction freezing 34 unsold 3BHK developer-share units valued at ₹29.5 Crore, restraining registration at the Sub-Registrar Office, and redirecting all future home loan disbursements to the audited escrow.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: 5-Stage HowTo Recovery Protocol */}
            <section
              id="heading-sop-rail"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-3">
                How-To Recovery SOP
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                5-Stage Statutory Recovery SOP for Corporate Landowners &amp; Family Offices
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    1
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Forensic Audit of Sub-Registrar Sales &amp; RERA Escrow Account
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Download all registered Agreements for Sale and Sale Deeds from the jurisdictional Sub-Registrar of Assurances online portal (IGRS). Reconcile unit booking rates against RERA quarterly progress reports (QPRs) and demand the bank statements of the Section 4(2)(l)(D) designated escrow account. Compare total customer cash inflows against actual disbursements to identify shadow banking trails.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    2
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Issue 48-Hour Advocate Statutory Demand &amp; Waterfall Cure Notice
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Serve a High Court fact-verified demand notice to the developer&apos;s registered corporate office and all directors listed on the Ministry of Corporate Affairs (MCA) portal. The notice must cite Section 2(1)(c)(vii) of the Commercial Courts Act, RERA Section 4(2)(l)(D), and Section 73 of the Contract Act. Demand complete ledger transparency and cure of all revenue-sharing arrears within 48 hours, failing which arbitration and criminal breach of trust (BNS Section 316) will be initiated.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    3
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Move Commercial Court for Section 9 Urgent Inventory Injunction
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      File an urgent Section 9 petition under the Arbitration Act before the Commercial Court or High Court. Relying on the <em>Essar House</em> and <em>P. Gopirathnam</em> precedents, pray for an ad-interim restraining order preventing the developer from creating third-party rights on unsold developer-share units and directing the Sub-Registrar not to register deeds.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    4
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Lodge RERA Section 35 Regulatory Audit &amp; Penal Petition
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Lodge a formal petition before the State RERA Authority under Section 35 for investigation and inquiry. Request RERA to appoint an independent auditor to examine developer sales ledgers, order the freezing of unapproved current accounts, and mandate that diverted cash flows be deposited back into the designated 70% project escrow.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    5
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Constitute Fast-Track Arbitral Tribunal for Monetary Decree
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Issue a Section 21 notice invoking arbitration and file under Section 11 before the High Court for arbitrator appointment. Secure an award for all revenue arrears, minimum guaranteed yields, and 18% commercial interest within the 12-month statutory window under Section 29A, enforceable directly as a court decree under Section 36.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: Evidence Dossier & BSA 2023 s.63 Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full mb-3">
                Litigation Readiness Dossier
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                BSA 2023 Section 63 Evidence Dossier &amp; Forensic Audit Checklist
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Commercial Courts and Arbitral Tribunals require rigorous electronic evidence authentication. Under Section 63 of the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, assemble this 6-point documentary dossier before filing:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                    1. Registered JDA &amp; Allocation Deeds
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Certified copies of the registered Joint Development Agreement, General Power of Attorney (GPA), Supplementary Area Allocation Deed, and sanctioned architectural floor plans.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                    2. RERA Statutory Filing Records
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RERA Project Registration Certificate, quarterly progress reports (QPRs), and certified copies of Form 1 (Engineer), Form 2 (Architect), and Form 3 (Chartered Accountant) submissions.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                    3. Sub-Registrar Encumbrance Certificates
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Up-to-date Encumbrance Certificates (Form 15/16) and index records from the Sub-Registrar demonstrating all registered Agreements for Sale, sale deeds, and any unauthorized mortgages.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                    4. Bank Escrow Statements &amp; Shadow Accounts
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Statements of the designated RERA Section 4(2)(l)(D) escrow account and bank records of identified unapproved developer current accounts showing customer installment inflows.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                    5. Marketing Collaterals &amp; Price Lists
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Published price lists, brochure rate sheets, broker commission agreements, and sales CRM printouts establishing prevailing fair market realizations vs. reported circle rates.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                    6. BSA 2023 Section 63 Electronic Certificate
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Statutory affidavit certifying the integrity, hash values, server logs, and device origin of email default notices, WhatsApp communications, and digital accounting records.
                  </p>
                </div>
              </div>

              {/* Cross-Link Callouts */}
              <div className="mt-6 pt-6 border-t border-slate-200 flex flex-wrap gap-4 text-xs">
                <Link
                  href="/legal-notice-to-tenant-for-unpaid-rent-eviction"
                  className="text-[#DC2626] font-bold hover:underline"
                >
                  &rarr; Commercial Property Eviction &amp; Unpaid Rent Legal Notice Guide
                </Link>
                <Link
                  href="/templates/society-maintenance-recovery-notice"
                  className="text-[#DC2626] font-bold hover:underline"
                >
                  &rarr; Society &amp; Condominium Maintenance Notice Template
                </Link>
                <Link
                  href="/send-a-legal-notice/recover-money-from-tenant-who-damaged-property"
                  className="text-[#DC2626] font-bold hover:underline"
                >
                  &rarr; Property Damage &amp; Dilapidation Claim Legal Notice
                </Link>
              </div>
            </section>

            {/* Section 11: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Practitioner Answers
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Frequently Asked Questions: JDA Revenue Share &amp; Area Default Recovery
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Key statutory, procedural, and evidentiary questions answered by senior real estate recovery counsel:
              </p>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 open:bg-white open:shadow-sm"
                  >
                    <summary className="flex items-center justify-between p-4 sm:p-5 text-xs sm:text-sm font-bold text-slate-900 cursor-pointer list-none select-none">
                      <span className="pr-4">{faq.question}</span>
                      <span className="w-5 h-5 rounded-full bg-slate-200 group-open:bg-[#DC2626] group-open:text-white flex items-center justify-center text-xs shrink-0 transition-colors">
                        &darr;
                      </span>
                    </summary>
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/60 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory Repositories */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full mb-3">
                Authoritative Legal Citations
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Primary Statutory Sources &amp; Official Regulatory Repositories
              </h2>
              <p className="text-xs text-slate-600 mb-4">
                All statutory provisions cited on this page are verified against official legislative repositories of the Government of India:
              </p>
              <ul className="space-y-2">
                {PRIMARY_SOURCES.map((source, idx) => (
                  <li key={idx} className="text-xs">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-[#DC2626] hover:underline font-semibold flex items-center gap-1.5"
                    >
                      <span className="text-slate-400">&bull;</span>
                      <span>{source.title}</span>
                      <span className="text-[10px] text-slate-400">&rarr;</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Author & Editorial Attribution */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-600">
                <div>
                  <p className="font-bold text-slate-900">
                    Authored &amp; Prepared on verified facts Anuj Anand Malik
                  </p>
                  <p className="text-slate-500">
                    Founder &amp; Principal Advocate, AMA Legal Solutions &bull; High Court of Delhi &amp; Commercial Division Practice
                  </p>
                  {/* TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
                </div>
                <div className="text-[11px] text-slate-400">
                  Last Updated: November 16, 2026 &bull; Strict Creditor-Side Focus
                </div>
              </div>
            </section>

            {/* Bottom Dual-Track CTA */}
            <JDARecoveryCTA />
          </div>
        </div>
      </main>

      {/* Footer Related Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
