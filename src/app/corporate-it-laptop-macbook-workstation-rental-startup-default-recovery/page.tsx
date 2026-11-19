import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import DaasTableOfContents from "./DaasTableOfContents";
import DaasScenarioTabs from "./DaasScenarioTabs";
import DaasCTA from "./DaasCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/corporate-it-laptop-macbook-workstation-rental-startup-default-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Funded Startup Laid Off 150 Remote Staff, Defaulted on Rental Invoices, and Can't Account for 80 Leased MacBooks? DaaS Recovery Playbook";

// Tightened from 67ch PDF draft to 57ch for Screaming Frog 30-60ch compliance
const META_TITLE =
  "Corporate Laptop & MacBook Rental Default: Asset Recovery";

// Tightened from 174ch PDF draft to 141ch for Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "IT rental & DaaS firms hit by startup collapse & scattered WFH MacBooks? Combine ABM/Autopilot MDM locks, BNS s.316 & residual buyout notices.";

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
      "Bharatiya Nyaya Sanhita (BNS), 2023 (Section 316(2) — Criminal Breach of Trust by Bailee; Section 317 — Dishonestly Receiving Stolen Property)",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 148–161 — Bailment, Duty of Bailee to Return Hired Assets & Liability for Unauthorized Conversion)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Information Technology Act, 2000 (Section 43 & Section 66 — Lawful Authorization Boundaries for Remote MDM Device Locking)",
    url: "https://www.indiacode.nic.in/handle/123456789/1999",
  },
  {
    title:
      "The Specific Relief Act, 1963 (Sections 7 & 8 — Recovery of Specific Movable Hardware from Third Parties in Wrongful Possession)",
    url: "https://www.indiacode.nic.in/handle/123456789/1583",
  },
  {
    title:
      "Insolvency and Bankruptcy Code (IBC), 2016 (Section 18(1)(f) Explanation — Exclusion of Third-Party Leased/Bailed Assets from CIRP Estate)",
    url: "https://www.indiacode.nic.in/handle/123456789/2154",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 & 24 — 3x RBI Compound Interest for Udyam DaaS Lessors)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Electronic Record Certification for ABM Telemetry, Autopilot Logs & Challans)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    q: "Can a laid-off remote employee legally keep a leased MacBook until the startup pays their pending salary?",
    a: "No. Under Sections 148 to 161 of the Indian Contract Act, 1872, a DaaS or IT rental company retains absolute legal ownership of leased laptops; the startup is merely a bailee. An employee's claim for unpaid wages lies solely against their employer, and no worker's lien attaches to third-party leased hardware. Once you serve a direct Asset-Owner Return Notice enclosing your OEM purchase invoice and serial-number schedule, the employee is legally bound to surrender the device under Specific Relief Act Sections 7 and 8.",
  },
  {
    q: "Is it legal to remotely lock unpaid leased MacBooks or ThinkPads using Apple Business Manager (ABM) or Windows Autopilot?",
    a: "Yes, provided two strict legal conditions are met: first, your Master Rental Agreement (MRA) contains an express clause authorizing remote MDM lock/lost-mode activation upon payment default or lease termination; and second, you serve a prior written Cure and Termination Notice giving the startup a clear deadline before triggering the lock. Executing a contractual lock after written notice prevents counter-allegations of unauthorized computer access under Section 43 of the Information Technology Act, 2000.",
  },
  {
    q: "When does non-return of rented corporate laptops become a BNS Section 316 criminal offence instead of a civil dispute?",
    a: "Mere delay in paying monthly rental invoices while the hardware remains accounted for at the startup's disclosed premises is generally treated as a civil breach. However, the moment the startup refuses to disclose employee custody details, vacates its office without returning hardware, or fails to surrender serial-numbered devices after formal bailment termination, dishonest retention or conversion under BNS 2023 Section 316(2) (Criminal Breach of Trust by Bailee) is triggered.",
  },
  {
    q: "Can DaaS founders hold startup directors personally liable for unreturned laptops and workstations?",
    a: "Directors are not automatically liable for a private limited company's ordinary civil debt. However, under BNS Section 316(2), individual Managing Directors, CFOs, or IT Heads who personally executed the Master Rental Agreement, signed delivery challans, and actively directed or concealed the non-return or liquidation of bailed hardware face personal criminal liability. Additionally, any personal guarantee or post-dated security cheque signed by a founder under NI Act Section 138 creates direct personal exposure.",
  },
  {
    q: "What happens if the defaulting startup enters NCLT CIRP insolvency with 80 leased laptops still unreturned?",
    a: "Under the Explanation to Section 18(1)(f) of the Insolvency and Bankruptcy Code (IBC), 2016, assets owned by a third party in the corporate debtor's possession under bailment or lease arrangements are expressly excluded from the Interim Resolution Professional's (IRP) asset pool. You must immediately serve a Third-Party Asset Segregation Notice on the IRP with serial numbers and OEM invoices, while filing Form B as an Operational Creditor for pre-CIRP rental arrears.",
  },
  {
    q: "How should an IT rental company calculate Residual Buyout Value alongside overdue monthly rent?",
    a: "Your demand notice should separate two distinct heads: (1) Accrued Monthly Rental Arrears up to the termination date plus post-termination holding rent under Contract Act Section 160–161; and (2) Liquidated Residual Buyout Value (fair replacement value or contractual buyout slab per device) for every serial number not physically returned within the 7-day or 15-day cure window. Udyam-registered DaaS firms can also add 3x RBI compound interest on unpaid rental invoices under MSMED Act Section 16.",
  },
  {
    q: "Should we send legal notices only to the startup's registered office, or also to individual WFH employees?",
    a: "When a startup has collapsed or laid off remote staff, sending notices solely to the startup's empty co-working address rarely recovers scattered devices. The fastest operational results come from a dual-track dispatch: a formal BNS s.316 + Residual Buyout Notice to the Startup & Directors (with jurisdictional Police Station email in CC), paired with bulk serial-number Asset-Owner Return Notices sent directly to each employee's WhatsApp and personal email offering prepaid insured reverse pickup.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
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
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  inLanguage: "en-IN",
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How DaaS & IT Rental Companies Recover Unreturned Leased Laptops from Defaulting Startups",
  description:
    "5-step statutory and operational playbook combining serial-number audits, bailment termination notices, ABM/Autopilot MDM locks, direct WFH employee return notices, and BNS s.316 police/residual buyout enforcement.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Lock Serial-Number & ABM/Autopilot Telemetry Ledger",
      text: "Reconcile OEM purchase invoices, outward delivery challans, E-Way Bills, and Apple Business Manager / Windows Autopilot serial numbers with last-known employee emails and IP check-ins.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Serve Master Bailment Termination & Cure Notice on Startup & Directors",
      text: "Issue a 7-day Bailment Termination Notice under Contract Act s.148–161 demanding overdue rental invoices, full employee custody disclosure, and warning of MDM lock and BNS s.316 action.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Dispatch Direct Serial-Wise Asset-Owner Return Notices to WFH Staff",
      text: "Send individual Email + WhatsApp + Speed Post notices to laid-off remote employees proving third-party lessor ownership and providing a 7-day prepaid insured reverse-pickup window.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Execute Contractual MDM Remote Lock / Lost Mode",
      text: "After notice expiry, activate contractual ABM/Autopilot lock displaying lessor ownership and return instructions while preserving IT Act s.43 compliance.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Trigger BNS s.316 Police CC & Residual Buyout Recovery",
      text: "File BNS s.316(2) Criminal Breach of Trust intimation with the jurisdictional SHO for unreturned serials and pursue liquidated Residual Buyout Value + MSMED 3x RBI interest.",
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
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
      name: "Equipment & Asset Leasing Recovery",
      item: `${SITE_URL}/industries/equipment-rental-machinery-leasing-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Corporate IT & DaaS Startup Default Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function CorporateItLaptopRentalRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Structured Data */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-20 · DaaS &amp; IT Hardware Leasing</span>
            <span aria-hidden="true">·</span>
            <span>ABM / Autopilot MDM + BNS s.316 Playbook</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Creditor Answer Box + Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under the{" "}
            <Link
              href="/industries/equipment-rental-machinery-leasing-recovery"
              className="text-red-300 underline underline-offset-2 hover:text-white font-semibold"
            >
              equipment and IT asset leasing recovery framework
            </Link>
            , laid-off employees hold zero salary lien over third-party leased MacBooks. Serve a Bailment Termination Notice under Contract Act ss.148–161 on startup directors, dispatch serial-wise return notices to remote staff, trigger contractual ABM/Autopilot locks, and enforce BNS s.316 plus Residual Buyout claims.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">
                5,00,000+
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Leased Laptops in Startup/GCC Fleets
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">
                7–15 Days
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Reverse-Pickup Window Before MDM Lock
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">
                3x RBI Rate
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                MSMED s.16 Interest on Hire Arrears
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">
                BNS s.316(2)
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Bailee Breach of Trust &amp; SHO CC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "Equipment & Asset Leasing",
              href: "/industries/equipment-rental-machinery-leasing-recovery",
            },
            {
              label: "Corporate IT & DaaS Startup Default Recovery",
              href: PAGE_URL,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4">
          {/* Left Sticky Sidebar TOC */}
          <DaasTableOfContents />

          {/* Main Editorial Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="heading-startup-layoff-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Why Startup Layoffs Scatter Leased MacBooks Across India
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                India&apos;s Device-as-a-Service (DaaS) and B2B IT hardware rental sector supplies more than 5,00,000 MacBook Pros, ThinkPads, monitors, and rack servers to venture-backed startups and Global Capability Centres (GCCs). During growth phases, startups onboard remote engineers across 40+ cities and instruct IT lessors to drop-ship laptops directly to employees&apos; residential addresses.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When funding dries up and the startup executes a sudden 150-person layoff, three cascading failures hit the IT lessor simultaneously: monthly rental invoices go unpaid, the startup&apos;s HR/IT team is itself laid off leaving nobody to coordinate asset retrieval, and ex-employees withhold leased MacBooks as informal leverage for unpaid full-and-final (F&amp;F) salaries. Without a coordinated legal notice to both the startup&apos;s directors and the individual remote holders, serial-numbered assets worth ₹1–2 Crore quietly vanish into Tier-2 towns or grey-market resale channels.
              </p>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs sm:text-sm text-emerald-900">
                <strong className="font-bold text-emerald-800 block mb-1">
                  Core Creditor Principle (Bailment vs. Salary Lien):
                </strong>
                Under Sections 148–161 of the Indian Contract Act, 1872, title to rented IT hardware never passes to the startup. An employee&apos;s statutory claim for unpaid wages lies strictly against their corporate employer—never against a third-party DaaS lessor&apos;s bailed MacBook.
              </div>
            </section>

            {/* Section 2: Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  5-Step DaaS Asset Lock, BNS s.316 &amp; Buyout Pipeline
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Recovering scattered WFH hardware requires strict sequencing. Locking devices prematurely without written notice invites IT Act Section 43 disputes, while waiting months for polite HR follow-ups guarantees asset liquidation. Follow this 5-step operational pipeline:
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800">
                <svg
                  width={860}
                  height={230}
                  viewBox="0 0 860 230"
                  role="img"
                  aria-label="5-Step DaaS Startup Default Asset and Arrears Recovery Flowchart"
                  className="w-full h-auto"
                >
                  <defs>
                    <marker
                      id="arrowRed"
                      markerWidth="8"
                      markerHeight="8"
                      refX="6"
                      refY="4"
                      orient="auto"
                    >
                      <path d="M0,0 L8,4 L0,8 Z" fill="#DC2626" />
                    </marker>
                  </defs>

                  {/* Step 1 */}
                  <rect x="10" y="30" width="148" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="24" y="56" fill="#F87171" fontSize="11" fontWeight="700">STEP 1 · DAY 1</text>
                  <text x="24" y="80" fill="#FFFFFF" fontSize="13" fontWeight="700">Serial &amp; ABM</text>
                  <text x="24" y="98" fill="#FFFFFF" fontSize="13" fontWeight="700">Telemetry Audit</text>
                  <text x="24" y="124" fill="#CBD5E1" fontSize="11">Map OEM bills,</text>
                  <text x="24" y="140" fill="#CBD5E1" fontSize="11">challans &amp; WFH</text>
                  <text x="24" y="156" fill="#CBD5E1" fontSize="11">custodian emails</text>

                  <line x1="158" y1="105" x2="180" y2="105" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Step 2 */}
                  <rect x="184" y="30" width="148" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="198" y="56" fill="#F87171" fontSize="11" fontWeight="700">STEP 2 · DAY 2</text>
                  <text x="198" y="80" fill="#FFFFFF" fontSize="13" fontWeight="700">Bailment Cure</text>
                  <text x="198" y="98" fill="#FFFFFF" fontSize="13" fontWeight="700">Notice to Board</text>
                  <text x="198" y="124" fill="#CBD5E1" fontSize="11">Terminate MRA,</text>
                  <text x="198" y="140" fill="#CBD5E1" fontSize="11">cite Contract Act</text>
                  <text x="198" y="156" fill="#CBD5E1" fontSize="11">s.160 + Directors</text>

                  <line x1="332" y1="105" x2="354" y2="105" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Step 3 */}
                  <rect x="358" y="30" width="148" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="372" y="56" fill="#F87171" fontSize="11" fontWeight="700">STEP 3 · DAY 3</text>
                  <text x="372" y="80" fill="#FFFFFF" fontSize="13" fontWeight="700">Direct WFH</text>
                  <text x="372" y="98" fill="#FFFFFF" fontSize="13" fontWeight="700">Return Notices</text>
                  <text x="372" y="124" fill="#CBD5E1" fontSize="11">Bulk WhatsApp +</text>
                  <text x="372" y="140" fill="#CBD5E1" fontSize="11">Email + RPAD with</text>
                  <text x="372" y="156" fill="#CBD5E1" fontSize="11">7-day pickup link</text>

                  <line x1="506" y1="105" x2="528" y2="105" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Step 4 */}
                  <rect x="532" y="30" width="148" height="150" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="546" y="56" fill="#F87171" fontSize="11" fontWeight="700">STEP 4 · DAY 10</text>
                  <text x="546" y="80" fill="#FFFFFF" fontSize="13" fontWeight="700">ABM / Autopilot</text>
                  <text x="546" y="98" fill="#FFFFFF" fontSize="13" fontWeight="700">MDM Lock</text>
                  <text x="546" y="124" fill="#CBD5E1" fontSize="11">Trigger Lost Mode</text>
                  <text x="546" y="140" fill="#CBD5E1" fontSize="11">banner on unpaid</text>
                  <text x="546" y="156" fill="#CBD5E1" fontSize="11">unreturned units</text>

                  <line x1="680" y1="105" x2="702" y2="105" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Step 5 */}
                  <rect x="706" y="30" width="144" height="150" rx="12" fill="#DC2626" />
                  <text x="720" y="56" fill="#FEE2E2" fontSize="11" fontWeight="700">STEP 5 · DAY 15+</text>
                  <text x="720" y="80" fill="#FFFFFF" fontSize="13" fontWeight="700">BNS s.316 SHO</text>
                  <text x="720" y="98" fill="#FFFFFF" fontSize="13" fontWeight="700">&amp; Buyout Suit</text>
                  <text x="720" y="124" fill="#FEE2E2" fontSize="11">Police CC +</text>
                  <text x="720" y="140" fill="#FEE2E2" fontSize="11">Residual Buyout +</text>
                  <text x="720" y="156" fill="#FEE2E2" fontSize="11">MSMED 3x RBI</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
                {[
                  {
                    step: "Step 1 · Day 1",
                    title: "Serial & ABM Telemetry Audit",
                    desc: "Reconcile OEM invoices, delivery challans, and ABM/Autopilot serial numbers with custodian contacts.",
                  },
                  {
                    step: "Step 2 · Day 2",
                    title: "Bailment Cure Notice to Board",
                    desc: "Terminate Master Rental Agreement under Contract Act s.160 and name authorized signatories.",
                  },
                  {
                    step: "Step 3 · Day 3",
                    title: "Direct WFH Return Notices",
                    desc: "Dispatch serial-wise Email + WhatsApp + RPAD notices to laid-off staff with insured pickup.",
                  },
                  {
                    step: "Step 4 · Day 10",
                    title: "ABM / Autopilot MDM Lock",
                    desc: "Activate contractual Lost Mode displaying lessor ownership and return toll-free contact.",
                  },
                  {
                    step: "Step 5 · Day 15+",
                    title: "BNS s.316 SHO & Buyout Suit",
                    desc: "CC jurisdictional Police Station and claim Residual Buyout Value + MSMED 3x RBI interest.",
                  },
                ].map((c, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                      {c.step}
                    </span>
                    <p className="text-sm font-bold mt-1">{c.title}</p>
                    <p className="text-xs text-slate-300 mt-1">{c.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Dark-Header Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Legal Matrix: MDM Locks, Bailment, BNS s.316 &amp; Directors
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Corporate IT lessors must combine civil bailment remedies, contractual device-management controls, and criminal breach-of-trust deterrence. Relying on a single forum leaves either the hardware stranded or the rental arrears unrecovered.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="p-3.5 font-bold">Statutory Provision / Tool</th>
                      <th className="p-3.5 font-bold">Target Party</th>
                      <th className="p-3.5 font-bold">Operational Remedy</th>
                      <th className="p-3.5 font-bold">Key Limitation / Guardrail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        Contract Act ss.148–161 (Bailment)
                      </td>
                      <td className="p-3.5 text-slate-700">Startup Company</td>
                      <td className="p-3.5 text-slate-700">
                        Terminates right to hold laptops; triggers running post-termination holding rent until return.
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Requires clear written termination notice specifying serial numbers.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">
                        Specific Relief Act ss.7 &amp; 8
                      </td>
                      <td className="p-3.5 text-slate-700">Laid-Off WFH Staff</td>
                      <td className="p-3.5 text-slate-700">
                        Direct recovery of specific movable property from any third party without privity of contract.
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Must prove lessor title via OEM invoice &amp; serial-number mapping.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        BNS 2023 s.316(2) &amp; s.317
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Directors &amp; Grey-Market Buyers
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Criminal Breach of Trust by Bailee + receiving stolen/converted property; SHO CC leverage.
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Must show dishonest retention/disposal post-demand, not mere invoice delay.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">
                        ABM / Windows Autopilot Lock
                      </td>
                      <td className="p-3.5 text-slate-700">Device Level</td>
                      <td className="p-3.5 text-slate-700">
                        Remote Lost Mode screen &amp; Activation Lock preventing OS wipe or OLX resale.
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Must be backed by MRA clause + prior cure notice (IT Act s.43 safety).
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        MSMED Act ss.15–18 &amp; IBC s.18(1)(f)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Solvent Startup / NCLT IRP
                      </td>
                      <td className="p-3.5 text-slate-700">
                        3x RBI compound interest on rent arrears; excludes leased hardware from CIRP asset pool.
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Udyam registration must pre-date the Master Rental Agreement.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  4 Startup IT Leasing Default Scenarios &amp; Action Plans
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select the operational failure mode matching your overdue portfolio to view the exact statutory counter-strategy and compliance guardrails:
              </p>

              <DaasScenarioTabs />
            </section>

            {/* Section 5: Worked Financial & Buyout Calculation Ledger */}
            <section
              id="heading-buyout-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Worked Ledger: 80 MacBooks Arrears &amp; Residual Buyout
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A common drafting error by general civil lawyers is claiming only unpaid monthly rent—leaving the lessor uncompensated for ₹1.2 Cr+ of missing hardware. Your notice and claim schedule must crystallize both **Rental Arrears** and **Liquidated Residual Buyout Value** as shown in this illustrative 80-MacBook startup default:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-red-400 font-bold">
                      Illustrative Claim Computation (80 × MacBook Pro M3)
                    </p>
                    <p className="text-sm text-slate-300">
                      Contractual Rent: ₹6,500/unit/month · 4 Months Overdue · 35 Units Unreturned
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-bold">
                    Dual Recovery Head
                  </span>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between gap-4 py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">
                      1. Unpaid Monthly Rental Arrears (80 units × ₹6,500 × 4 months)
                    </span>
                    <span className="font-bold text-white shrink-0">₹20,80,000</span>
                  </div>
                  <div className="flex justify-between gap-4 py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">
                      2. Post-Termination Holding Rent (35 unreturned units × 2 months @ ₹6,500)
                    </span>
                    <span className="font-bold text-white shrink-0">₹4,55,000</span>
                  </div>
                  <div className="flex justify-between gap-4 py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">
                      3. Residual Buyout Value for 35 Unreturned Units (@ ₹1,15,000/unit)
                    </span>
                    <span className="font-bold text-amber-400 shrink-0">₹40,25,000</span>
                  </div>
                  <div className="flex justify-between gap-4 py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">
                      4. MSMED s.16 Compound Interest (3x RBI Bank Rate on Overdue Rent)
                    </span>
                    <span className="font-bold text-emerald-400 shrink-0">~₹1,68,400</span>
                  </div>
                  <div className="flex justify-between gap-4 pt-2 text-sm sm:text-base font-black">
                    <span className="text-red-400">
                      Total Crystallized Demand (Arrears + Buyout + Statutory Interest)
                    </span>
                    <span className="text-white shrink-0">₹67,28,400</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 pt-1">
                  Want to compute exact compounding interest on overdue DaaS rental invoices? Use our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-red-300 underline hover:text-white font-semibold"
                  >
                    MSME Delayed Payment Interest Calculator (3x RBI Rate)
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 6: Evidence & BSA 2023 s.63 Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Serial-Tag, ABM Telemetry &amp; BSA 2023 s.63 Proof Pack
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Whether filing a police complaint under BNS s.316, a Commercial Court summary suit, or an IBC s.18(1)(f) exclusion request before an IRP, electronic records require certification under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023. Assemble these six proof items before dispatch:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Executed Master Rental Agreement (MRA)",
                    detail:
                      "Highlighting the title-retention clause, no-lien covenant, MDM lock authorization, and Residual Buyout valuation formula.",
                  },
                  {
                    title: "OEM Tax Invoices & Serial Mapping",
                    detail:
                      "Original Apple/Lenovo/Dell GST invoices proving your company purchased and owns each exact serial number.",
                  },
                  {
                    title: "Delivery Challans, E-Way Bills & Pod",
                    detail:
                      "Signed outward challans, courier airway bills, and employee OTP/email confirmations showing physical delivery.",
                  },
                  {
                    title: "ABM / Windows Autopilot Telemetry Logs",
                    detail:
                      "Timestamped MDM screenshots showing enrollment status, last check-in IP/city, and assigned corporate email.",
                  },
                  {
                    title: "GST-Reconciled Ledger & Bounced Cheques",
                    detail:
                      "Unpaid rental invoices, GSTR-1 reconciliation, and dishonoured cheque/NACH return memos (if any).",
                  },
                  {
                    title: "BSA 2023 Section 63 Certificate",
                    detail:
                      "Signed electronic evidence certificate from your IT/Finance head authenticating all emails, WhatsApp chats, and MDM exports.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <p className="text-sm font-bold text-slate-900 mb-1">
                      {i + 1}. {item.title}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Lawful MDM Locks & IT Act s.43 */}
            <section
              id="heading-mdm-it-act"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Lawful MDM Locks Without IT Act Section 43 Backfire
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Desperate startup founders sometimes threaten IT lessors with cyber-crime complaints under Section 43 or Section 66 of the Information Technology Act, 2000, alleging &ldquo;unauthorized denial of access&rdquo; or &ldquo;data destruction&rdquo; when laptops are locked remotely. You neutralize this defence completely by following two operational rules:
              </p>

              <ul className="space-y-2.5 text-sm sm:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                  <span>
                    <strong>Never Trigger Remote Wipe Without Data-Backup Window:</strong> Use MDM <em>Activation Lock / Lost Mode</em> (screen lock with return message) rather than destructive remote wipe during the initial 7-day notice window, so the startup cannot allege loss of proprietary source code.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                  <span>
                    <strong>Anchor Lock to MRA Clause + Prior Written Notice:</strong> Section 43 applies only to access <em>&ldquo;without permission of the owner or any other person who is in charge of a computer&rdquo;</em>. An explicit MRA default-lock clause plus a served 7-day written termination notice establishes lawful contractual authority.
                  </span>
                </li>
              </ul>

              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-xs sm:text-sm text-red-900">
                <strong className="font-bold text-[#DC2626] block mb-1">
                  Drafting Shortcut:
                </strong>
                Need a ready-to-customize notice covering BNS s.316, bailment termination, and serial-number asset schedules? Start from our{" "}
                <Link
                  href="/templates/equipment-rental-arrears-gate-pass-repossession-bns-316-notice"
                  className="text-[#DC2626] underline font-bold hover:text-red-800"
                >
                  Equipment Rental Arrears &amp; BNS s.316 Repossession Notice Template
                </Link>
                .
              </div>
            </section>

            {/* Section 8: Dual-Track B2B CTA */}
            <section
              id="heading-dual-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Launch Your Serial-Wise DaaS Notice or Batch CSV
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Test our advocate-drafted notice workflow on a single defaulting startup today, or upload a CSV of 50–500 scattered remote employees for simultaneous Email, WhatsApp, and Speed Post RPAD dispatch.
              </p>

              <DaasCTA />
            </section>

            {/* Section 9: Related Spokes & B2B Seed Links */}
            <section
              id="heading-related-spokes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  IT Hardware Leasing, Equipment &amp; B2B Recovery Links
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                <Link
                  href="/industries/equipment-rental-machinery-leasing-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <span className="block font-bold text-slate-900">
                    Equipment &amp; IT Asset Leasing Hub (IND-20) &rarr;
                  </span>
                  <span className="text-slate-600 mt-1 block">
                    Complete sector playbook for cranes, scaffolding, DG sets, and DaaS fleets.
                  </span>
                </Link>
                <Link
                  href="/unreturned-rented-scaffolding-shuttering-formwork-bns-316-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <span className="block font-bold text-slate-900">
                    Unreturned Rented Scaffolding &amp; BNS s.316 &rarr;
                  </span>
                  <span className="text-slate-600 mt-1 block">
                    Bailee breach of trust, SHO CC, and replacement-value recovery.
                  </span>
                </Link>
                <Link
                  href="/builder-employer-blocking-gate-pass-demobilization-rented-crane-machinery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <span className="block font-bold text-slate-900">
                    Crane &amp; Heavy Machinery Gate-Pass Lockout &rarr;
                  </span>
                  <span className="text-slate-600 mt-1 block">
                    Breaking third-party asset detention via Order XL Court Receiver.
                  </span>
                </Link>
                <Link
                  href="/law/bns-318-cheating-vs-civil-dispute"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <span className="block font-bold text-slate-900">
                    BNS s.318 Cheating vs. Civil Commercial Dispute &rarr;
                  </span>
                  <span className="text-slate-600 mt-1 block">
                    How to plead criminal intent so police complaints are not closed as civil.
                  </span>
                </Link>
                <Link
                  href="/recovery/contractor-payment"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <span className="block font-bold text-slate-900">
                    B2B Vendor &amp; Contractor Payment Recovery &rarr;
                  </span>
                  <span className="text-slate-600 mt-1 block">
                    Core institutional recovery workflow for unpaid B2B service invoices.
                  </span>
                </Link>
                <Link
                  href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <span className="block font-bold text-slate-900">
                    Multi-Channel Bulk Email, WhatsApp &amp; RPAD &rarr;
                  </span>
                  <span className="text-slate-600 mt-1 block">
                    Dispatch serial-wise employee &amp; director notices simultaneously.
                  </span>
                </Link>
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Frequently Asked Questions: Startup IT Asset Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50/60 open:bg-white transition-colors"
                  >
                    <summary className="cursor-pointer list-none p-4 font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-3">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-black text-base shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Primary Statutory Authorities */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Primary Statutory Authorities &amp; Official Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold shrink-0">
                      [{idx + 1}]
                    </span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline underline-offset-2"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                Legal Review Attribution: Anuj Anand Malik, Advocate &amp; Founder, AMA Legal Solutions. Institutional creditor guide for informational and operational recovery use; consult counsel on specific NCLT or criminal complaints.
              </p>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
