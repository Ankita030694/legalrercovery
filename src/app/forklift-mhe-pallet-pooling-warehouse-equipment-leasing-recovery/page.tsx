import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import MheTableOfContents from "./MheTableOfContents";
import MheScenarioTabs from "./MheScenarioTabs";
import MheRecoveryCTA from "./MheRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/forklift-mhe-pallet-pooling-warehouse-equipment-leasing-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

// Exact PDF/JSON H1 (141 chars) — kept verbatim in <h1> and ARTICLE_SCHEMA.headline
const HERO_HEADLINE =
  "Debt & Asset Recovery for Forklift / Reach-Truck Lessors & Pallet-Pooling Networks: Battery Abuse, Pallet Shrinkage & Multi-Site Repossession";

const META_TITLE = "Forklift, MHE Leasing & Pallet-Pooling Asset Recovery";
const META_DESCRIPTION =
  "3PL & FMCG warehouses abuse leased Li-ion reach trucks & lose pooled pallets. Enforce Contract Act s.152 negligence, shrinkage bills & s.9 repossession.";

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
      "The Indian Contract Act, 1872 (Sections 73, 74, 148–161 Bailment & Bailee Negligence) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Arbitration and Conciliation Act, 1996 (Section 9 Interim Receiver & Asset Preservation) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title:
      "The Bharatiya Nyaya Sanhita (BNS), 2023 (Section 316 Criminal Breach of Trust & Section 318 Cheating) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title:
      "The Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 Electronic Telematics & BMS Admissibility) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "The Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–19) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "The Commercial Courts Act, 2015 (Section 12A Pre-Institution Mediation & Urgent Relief Exception) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
];

const STATUTORY_PRECEDENTS = [
  {
    title:
      "Urgent Interim Asset Repossession Exception to Section 12A Mediation in Commercial Courts",
    parties: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.",
    citation: "(2022) 10 SCC 1, Supreme Court of India",
    date: "Judgment Dated 17 August 2022",
    facts:
      "Commercial creditors filing suits valued at ₹3 Lakh and above faced Order VII Rule 11 CPC rejections when they bypassed Section 12A Pre-Institution Mediation without pleading genuine urgency.",
    holding:
      "The Supreme Court held that Section 12A mediation is mandatory for standard commercial suits, EXCEPT where the plaintiff genuinely seeks urgent interim relief—such as immediate appointment of a Receiver or injunction to prevent asset stripping, cannibalisation, or clandestine shifting of leased machinery.",
    amount: "Urgent Receiver Petitions Exempt From 3-Month s.12A Delay",
    takeaway:
      "When a defaulting 3PL warehouse threatens to strip Li-ion battery packs or relocate leased reach trucks across state lines, MHE lessors can file urgent Section 9 Arbitration or Order XL Rule 1 CPC Receiver applications without waiting out s.12A mediation.",
  },
  {
    title:
      "Mandatory 75% Pre-Deposit Shield When Lessees Challenge MSEFC Fleet & Pallet Awards",
    parties: "Tirupati Steels v. Shubh Industrial Component & Anr.",
    citation: "(2022) 7 SCC 429, Supreme Court of India",
    date: "Judgment Dated 19 April 2022",
    facts:
      "Defaulting corporate buyers attempted to stall execution of MSEFC arbitral awards by filing Section 34 challenges in District/Commercial Courts without depositing the statutory 75% pre-deposit.",
    holding:
      "The Supreme Court ruled that the 75% pre-deposit under Section 19 of the MSMED Act, 2006 is strictly mandatory; courts lack discretion to waive it or entertain an appeal without upfront deposit.",
    amount: "75% Upfront Cash Lock Eliminates Frivolous Lessee Appeals",
    takeaway:
      "Udyam-registered MHE rental operators and wooden/plastic pallet manufacturers who secure an MSEFC award for unpaid rental and shrinkage invoices force the defaulting FMCG or 3PL lessee to lock 75% cash in court before challenging.",
  },
  {
    title:
      "MSMED Statutory Jurisdiction Overrides Standard-Form 3PL Lease Arbitration Clauses",
    parties: "Silpi Industries v. Kerala State Road Transport Corporation & Anr.",
    citation: "(2021) 18 SCC 790, Supreme Court of India",
    date: "Judgment Dated 29 June 2021",
    facts:
      "Large institutional lessees inserted one-sided sole-jurisdiction arbitration clauses in Master Service Agreements (MSAs) to block MSME equipment and service vendors from approaching the Facilitation Council.",
    holding:
      "The Supreme Court confirmed that Sections 15 to 24 of the MSMED Act, 2006 constitute special legislation that overrides general arbitration agreements under the 1996 Act, provided the vendor held Udyam/EM-II registration prior to the contract.",
    amount: "MSME Samadhaan + 3x RBI Interest Overrides Lessee MSA Boilerplate",
    takeaway:
      "Even if a multinational 3PL or e-commerce giant's MSA specifies seat-of-arbitration hurdles, an Udyam-registered MHE or pallet-pooling supplier can route rental arrears through MSEFC for statutory conciliation and 3x RBI compound interest.",
  },
];

const FAQS = [
  {
    q: "Can a 3PL or FMCG warehouse lessee refuse to pay for a damaged Li-ion forklift battery by calling it 'normal wear and tear'?",
    a: "No. Under Sections 151 and 152 of the Indian Contract Act, 1872, a bailee/lessee is only excused for ordinary wear and tear arising from prudent, authorized operation. Multi-shift deep-discharge below OEM cut-off voltage, unauthorized third-party charger use, water ingress, or mast-collision damage recorded in the Battery Management System (BMS) and telematics shock logs constitutes actionable bailee negligence—making the lessee liable for the full OEM repair or replacement invoice.",
  },
  {
    q: "How do pallet-pooling networks legally enforce 'Lost Pallet Buyout Fees' when 1,000+ pooled pallets vanish at contract exit?",
    a: "Under Sections 160 and 161 of the Indian Contract Act, 1872, the lessee (bailee) has an absolute duty to return every hired pallet upon termination or reconciliation. Where signed Delivery Challans, e-Way Bills, and RFID/barcode ledger confirmations establish custody, any unreturned shortfall triggers the contractual 'Lost Pallet Buyout Fee' alongside continuing daily pool charges until full settlement.",
  },
  {
    q: "What if a defaulting warehouse lessee refuses to pay wet-lease operator + MHE monthly bills citing operator absenteeism?",
    a: "Wet-lease disputes almost always collapse when the lessor produces contemporaneous biometric attendance logs, shift handover sheets, and telematics run-hour reports showing 95–98%+ fleet availability. Under Section 42 and Section 55 principles, a lessee who utilized the forklifts across three shifts without raising contemporaneous written SLA default notices cannot withhold entire monthly invoices at the end of the quarter.",
  },
  {
    q: "Can a warehouse landlord detain our leased forklifts or stackers over unpaid facility rent owed by the 3PL tenant?",
    a: "No. A warehouse landlord's right of lien or distress applies only to property owned by the defaulting tenant—not third-party equipment leased under a Master Lease Agreement. By serving the landlord with OEM tax invoices, chassis/serial number schedules, and e-Way Bills, and simultaneously moving for a Section 9 Arbitration Receiver (or Order XL Rule 1 CPC Receiver), the MHE lessor can compel immediate gate-pass release.",
  },
  {
    q: "Are 24-month or 36-month lock-in termination penalties enforceable in Indian MHE fleet leasing?",
    a: "Yes, provided the lock-in exit fee represents a genuine pre-estimate of amortized capital expenditure (such as custom mast heights, cold-storage retrofits, or dedicated Li-ion packs) under Section 74 of the Indian Contract Act, 1872. Courts enforce lock-in damages when the lessor substantiates OEM procurement cost, unamortized lease tenure, and redeployment downtime.",
  },
  {
    q: "When should an MHE lessor or pallet pool file a police complaint under BNS 2023 Section 316?",
    a: "Simple rental payment delay is a civil dispute (as clarified in BNS s.318 vs civil breach jurisprudence). However, when a lessee clandestinely shifts GPS-tracked forklifts to an undisclosed site, disables telematics SIMs, sells pooled HDPE/wooden pallets to scrap dealers, or refuses entry to repossess terminated equipment, dishonest misappropriation under Section 316 BNS 2023 (Criminal Breach of Trust) is squarely attracted.",
  },
  {
    q: "Should we choose MSME Samadhaan (MSEFC) or a Commercial Court Section 9 Receiver petition?",
    a: "Use a dual-track strategy. If the equipment is still trapped inside defaulting warehouses and faces cannibalisation or landlord lockouts, file an urgent Section 9 Arbitration (or Order XL CPC) petition immediately for physical repossession via Court Receiver. Simultaneously, if you hold Micro/Small Udyam registration, refer the monetary arrears, OEM repair bills, and pallet buyout ledger to MSEFC for 3x RBI compound interest.",
  },
];

export default function ForkliftMhePalletPoolingRecoveryPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: HERO_HEADLINE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
    image: `${SITE_URL}/blog_money_recovery.png`,
    datePublished: "2026-11-19",
    dateModified: "2026-11-19",
    // TODO(reviewer): src/data/reviewers.ts is absent in this repository
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
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
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Forklift Lessors & Pallet-Pooling Networks Recover Arrears, Repair Bills & Assets",
    description:
      "5-step creditor playbook invoking Contract Act s.152 bailee negligence, pallet shrinkage buyout clauses, BNS s.316 criminal breach of trust, and Section 9 multi-site Receiver repossession.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Freeze Telematics, BMS & RFID Pallet Ledgers",
        text: "Export Li-ion BMS fault codes, shock-sensor collision logs, and signed pallet delivery/return challans with BSA 2023 s.63 electronic certificates before terminating access.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Conduct Joint Exit Inspection & OEM Valuation",
        text: "Serve a 48-hour Joint Inspection Notice; if the 3PL lessee boycotts, record an OEM-certified damage assessment separating normal wear-and-tear from operator abuse.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Serve Dual Statutory Notice (s.152 + s.160 + BNS s.316)",
        text: "Dispatch a fact-verified demand notice via Email, WhatsApp, and Speed Post RPAD claiming overdue rent, OEM repair bills, lost pallet buyout fees, and lock-in damages.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Move Urgent Section 9 Receiver for Multi-Site Repossession",
        text: "File a Section 9 Arbitration (or Order XL CPC) petition for a Court Receiver to seize forklifts and stackers across locked pan-India 3PL hubs without s.12A delay.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Enforce Monetary Arrears via MSEFC or Order XXXVII",
        text: "Recover unpaid rental, shrinkage buyouts, and 3x RBI compound interest through MSME Samadhaan or Commercial Court Summary Suit.",
      },
    ],
  };

  const faqSchema = {
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
        name: "Equipment Rental & Machinery Leasing Recovery",
        item: `${SITE_URL}/industries/equipment-rental-machinery-leasing-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Forklift, MHE & Pallet-Pooling Recovery",
        item: CANONICAL_URL,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
            <span>IND-20 MHE &amp; Warehouse Asset Playbook</span>
            <span className="text-red-600">&bull;</span>
            <span>Contract Act s.152 &amp; s.9 Receiver</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {HERO_HEADLINE}
          </h1>

          {/* 40-60 Word Executive Creditor Answer Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under our{" "}
            <Link
              href="/industries/equipment-rental-machinery-leasing-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Equipment Rental &amp; Machinery Leasing Recovery Hub
            </Link>
            , forklift and pallet-pooling lessors enforce Li-ion battery abuse and
            mast-collision invoices via <strong>Contract Act s.152</strong> bailee
            negligence liability, recover lost pallet buyouts under{" "}
            <strong>s.160–161</strong>, and repossess fleets across multi-site 3PL
            warehouses through urgent <strong>Section 9 Court Receivers</strong>.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-slate-100">
                s.152 &amp; s.160
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Bailee Negligence &amp; Pallet Return Duty
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-emerald-400">
                3x RBI Rate
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                MSMED s.16 Monthly Compound Interest
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-amber-400">
                7–14 Days
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Section 9 Urgent Receiver Window
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-red-400">
                BNS s.316
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Criminal Breach for Diverted Fleets
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
              label: "Equipment Rental & Machinery Leasing Recovery",
              href: "/industries/equipment-rental-machinery-leasing-recovery",
            },
            {
              label: "Forklift, MHE & Pallet-Pooling Recovery",
              href: PAGE_URL,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4">
          {/* Left Sticky Sidebar TOC */}
          <MheTableOfContents />

          {/* Main Editorial Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Why MHE Lessors &amp; Pallet Pools Lose Millions at Contract Exit
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  India&apos;s warehousing boom across Bhiwandi, Chakan, Sriperumbudur,
                  Manesar, and Hosur runs on leased Material Handling Equipment (MHE)—electric
                  reach trucks, counterbalanced forklifts, Very Narrow Aisle (VNA) turret
                  trucks, and battery-operated pallet trucks—alongside pooled HDPE and Euro
                  wooden pallets. Yet when a 3PL operator, e-commerce dark-store aggregator, or
                  FMCG manufacturer hits cash-flow stress, the equipment lessor faces a
                  three-front financial ambush that standard commercial invoices fail to stop.
                </p>
                <p>
                  First, monthly dry-lease or wet-lease (operator + machine) rentals go
                  overdue while the lessee continues running the fleet across three 8-hour
                  shifts. Second, at demobilization, lessors discover severe operator-induced
                  damage: cracked reach-truck masts from rack collisions, bent forks, and
                  ruined Lithium-ion (Li-ion) battery packs caused by deep-discharge abuse or
                  unauthorized third-party chargers—repair bills that lessees dismiss as
                  &ldquo;normal wear and tear.&rdquo; Third, in pallet-pooling networks, 10%
                  to 25% of issued pallets vanish into downstream distributor chains, and the
                  lessee flatly refuses to pay the contracted &ldquo;Lost Pallet Buyout
                  Fee.&rdquo;
                </p>
                <p>
                  As part of the broader{" "}
                  <Link
                    href="/industries/equipment-rental-machinery-leasing-recovery"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Equipment Rental &amp; Machinery Leasing Recovery
                  </Link>{" "}
                  framework, you do not have to accept arbitrary 40% write-offs or beg
                  warehouse security for gate passes. By pairing <strong>Section 152
                  Contract Act bailee negligence</strong> with{" "}
                  <strong>Battery Management System (BMS) telematics</strong>,{" "}
                  <strong>Section 160 pallet return liability</strong>, and urgent{" "}
                  <strong>Section 9 Arbitration Receiver</strong> petitions, MHE lessors can
                  recover both trapped hardware and 100% of verified repair and shrinkage
                  claims.
                </p>
              </div>
            </section>

            {/* Section 2: Statutory Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Supreme Court Precedents Governing MHE &amp; Bailment Recovery
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                Defaulting 3PLs and FMCG companies routinely deploy procedural delays—citing
                mandatory mediation or challenging MSEFC awards—to wear down equipment
                lessors. These three binding Supreme Court rulings dismantle those
                stalling tactics:
              </p>

              <div className="space-y-5">
                {STATUTORY_PRECEDENTS.map((item) => (
                  <div
                    key={item.parties}
                    className="relative bg-slate-50 border border-slate-200 rounded-xl p-5 pl-6 overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <span className="inline-block self-start shrink-0 px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900 text-white">
                        {item.citation}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#DC2626] mb-3">
                      {item.parties} &bull; {item.date}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 mb-3">
                      <div className="bg-white p-3 rounded-lg border border-slate-200">
                        <span className="font-bold text-slate-900 block mb-1">
                          Commercial Context:
                        </span>
                        {item.facts}
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-slate-200">
                        <span className="font-bold text-slate-900 block mb-1">
                          Binding Holding:
                        </span>
                        {item.holding}
                      </div>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-xs sm:text-sm text-emerald-900">
                      <span className="font-bold uppercase tracking-wider text-[10px] text-emerald-700 block mb-0.5">
                        {item.amount}
                      </span>
                      {item.takeaway}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Operational Decision Tree: Repossession vs Monetary Recovery
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                MHE and pallet-pooling defaults split into two distinct urgency tracks:
                saving physical assets trapped inside multi-location warehouses versus
                enforcing rental arrears, battery damage bills, and shrinkage buyouts.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 border border-slate-800 overflow-x-auto">
                <svg
                  width="820"
                  height="310"
                  viewBox="0 0 820 310"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Forklift MHE and Pallet-Pooling Recovery Decision Tree"
                >
                  {/* Root Node */}
                  <rect x="260" y="12" width="300" height="48" rx="10" fill="#DC2626" />
                  <text
                    x="410"
                    y="33"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    3PL / FMCG Lessee Defaults on MHE or Pallets
                  </text>
                  <text x="410" y="49" textAnchor="middle" fill="#FEE2E2" fontSize="10">
                    Freeze BMS, Telematics &amp; RFID Pallet Logs (BSA s.63)
                  </text>

                  {/* Connector Lines */}
                  <path d="M410 60 V85 H135 V110" stroke="#64748B" strokeWidth="2" />
                  <path d="M410 60 V110" stroke="#64748B" strokeWidth="2" />
                  <path d="M410 60 V85 H685 V110" stroke="#64748B" strokeWidth="2" />

                  {/* Branch 1: Trapped Hardware */}
                  <rect
                    x="15"
                    y="110"
                    width="240"
                    height="72"
                    rx="10"
                    fill="#1E293B"
                    stroke="#334155"
                    strokeWidth="1.5"
                  />
                  <text
                    x="135"
                    y="133"
                    textAnchor="middle"
                    fill="#F87171"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    TRACK A: Assets Trapped / Locked
                  </text>
                  <text x="135" y="150" textAnchor="middle" fill="#E2E8F0" fontSize="10">
                    Gate-pass blocked, landlord lockout,
                  </text>
                  <text x="135" y="165" textAnchor="middle" fill="#E2E8F0" fontSize="10">
                    or GPS/SIM disabled across sites
                  </text>

                  {/* Branch 2: Battery / Collision */}
                  <rect
                    x="290"
                    y="110"
                    width="240"
                    height="72"
                    rx="10"
                    fill="#1E293B"
                    stroke="#334155"
                    strokeWidth="1.5"
                  />
                  <text
                    x="410"
                    y="133"
                    textAnchor="middle"
                    fill="#FBBF24"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    TRACK B: Battery / Collision Damage
                  </text>
                  <text x="410" y="150" textAnchor="middle" fill="#E2E8F0" fontSize="10">
                    Li-ion dry-run, mast impact, or
                  </text>
                  <text x="410" y="165" textAnchor="middle" fill="#E2E8F0" fontSize="10">
                    refused OEM exit repair invoice
                  </text>

                  {/* Branch 3: Pallet Shrinkage & Arrears */}
                  <rect
                    x="565"
                    y="110"
                    width="240"
                    height="72"
                    rx="10"
                    fill="#1E293B"
                    stroke="#334155"
                    strokeWidth="1.5"
                  />
                  <text
                    x="685"
                    y="133"
                    textAnchor="middle"
                    fill="#34D399"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    TRACK C: Pallet Shrinkage &amp; Rent
                  </text>
                  <text x="685" y="150" textAnchor="middle" fill="#E2E8F0" fontSize="10">
                    Unreturned pooled pallets, wet-lease
                  </text>
                  <text x="685" y="165" textAnchor="middle" fill="#E2E8F0" fontSize="10">
                    arrears, or lock-in early exit
                  </text>

                  {/* Vertical Connectors to Action */}
                  <path d="M135 182 V212" stroke="#DC2626" strokeWidth="2" />
                  <path d="M410 182 V212" stroke="#F59E0B" strokeWidth="2" />
                  <path d="M685 182 V212" stroke="#10B981" strokeWidth="2" />

                  {/* Action 1 */}
                  <rect
                    x="15"
                    y="212"
                    width="240"
                    height="82"
                    rx="10"
                    fill="#450A0A"
                    stroke="#DC2626"
                    strokeWidth="1.5"
                  />
                  <text
                    x="135"
                    y="234"
                    textAnchor="middle"
                    fill="#FCA5A5"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    Section 9 Receiver + BNS s.316
                  </text>
                  <text x="135" y="252" textAnchor="middle" fill="#FFFFFF" fontSize="10">
                    Urgent Commercial Court Receiver
                  </text>
                  <text x="135" y="267" textAnchor="middle" fill="#FFFFFF" fontSize="10">
                    with police aid + landlord ownership
                  </text>
                  <text x="135" y="282" textAnchor="middle" fill="#FFFFFF" fontSize="10">
                    notice (bypasses s.12A delay)
                  </text>

                  {/* Action 2 */}
                  <rect
                    x="290"
                    y="212"
                    width="240"
                    height="82"
                    rx="10"
                    fill="#451A03"
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                  />
                  <text
                    x="410"
                    y="234"
                    textAnchor="middle"
                    fill="#FCD34D"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    Contract Act s.152 Demand
                  </text>
                  <text x="410" y="252" textAnchor="middle" fill="#FFFFFF" fontSize="10">
                    Serve OEM Joint Inspection report +
                  </text>
                  <text x="410" y="267" textAnchor="middle" fill="#FFFFFF" fontSize="10">
                    BMS fault codes; escalate to MSEFC
                  </text>
                  <text x="410" y="282" textAnchor="middle" fill="#FFFFFF" fontSize="10">
                    or Order XXXVII / Arbitration
                  </text>

                  {/* Action 3 */}
                  <rect
                    x="565"
                    y="212"
                    width="240"
                    height="82"
                    rx="10"
                    fill="#064E3B"
                    stroke="#10B981"
                    strokeWidth="1.5"
                  />
                  <text
                    x="685"
                    y="234"
                    textAnchor="middle"
                    fill="#6EE7B7"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    s.160 Buyout + MSMED 3x RBI
                  </text>
                  <text x="685" y="252" textAnchor="middle" fill="#FFFFFF" fontSize="10">
                    Enforce Lost Pallet Buyout + s.74
                  </text>
                  <text x="685" y="267" textAnchor="middle" fill="#FFFFFF" fontSize="10">
                    lock-in fee via MSME Samadhaan or
                  </text>
                  <text x="685" y="282" textAnchor="middle" fill="#FFFFFF" fontSize="10">
                    Commercial Court s.12A / Summary Suit
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Decision Cards */}
              <div className="md:hidden space-y-3">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase text-[#DC2626] mb-1">
                    Track A &bull; Trapped / Locked Fleets
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Gate-pass blocked or warehouse padlocked? File an urgent{" "}
                    <strong>Section 9 Arbitration Receiver</strong> petition with
                    ownership invoices and intimate local police under{" "}
                    <strong>BNS s.316</strong>.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase text-amber-800 mb-1">
                    Track B &bull; Li-Ion Battery &amp; Mast Damage
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Export BMS deep-discharge and shock-sensor logs, issue a 48-hour Joint
                    Inspection Notice, and enforce full OEM repair costs under{" "}
                    <strong>Contract Act s.152</strong>.
                  </p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase text-emerald-800 mb-1">
                    Track C &bull; Pallet Shrinkage &amp; Lock-In Arrears
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Lock RFID/Challan net balances to enforce{" "}
                    <strong>s.160–161 Lost Pallet Buyouts</strong> and{" "}
                    <strong>s.74 lock-in damages</strong> via MSEFC (3x RBI interest) or
                    Summary Suit.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Dark-Header Enforcement Matrix */}
            <section
              id="heading-enforcement-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Enforcement Matrix: MHE &amp; Pallet-Pooling Claims
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse min-w-[680px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <th className="py-3.5 px-4 font-bold">Default / Dispute Type</th>
                      <th className="py-3.5 px-4 font-bold">Primary Statutory Hook</th>
                      <th className="py-3.5 px-4 font-bold">Key Proof Required</th>
                      <th className="py-3.5 px-4 font-bold">Fastest Legal Forum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Li-Ion Battery Dry-Run &amp; Mast Collision
                      </td>
                      <td className="py-3.5 px-4">
                        Contract Act s.151 &amp; s.152 (Bailee Negligence)
                      </td>
                      <td className="py-3.5 px-4">
                        BMS fault log, shock-sensor alert, OEM repair quote
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-[#DC2626]">
                        MSEFC / Commercial Court
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Lost / Unreturned Pooled Pallets
                      </td>
                      <td className="py-3.5 px-4">
                        Contract Act s.160–161 + BNS s.316 (if diverted)
                      </td>
                      <td className="py-3.5 px-4">
                        Signed Challans, e-Way Bills, RFID net balance sheet
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-[#DC2626]">
                        Order XXXVII / MSEFC + Police CC
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Wet-Lease Operator + MHE Arrears
                      </td>
                      <td className="py-3.5 px-4">
                        Contract Act s.73 + MSMED Act s.15–16
                      </td>
                      <td className="py-3.5 px-4">
                        Biometric attendance, shift logs, GST tax invoices
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-[#DC2626]">
                        MSME Samadhaan / Summary Suit
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Lock-In Early Fleet Termination
                      </td>
                      <td className="py-3.5 px-4">
                        Contract Act s.74 (Liquidated Damages)
                      </td>
                      <td className="py-3.5 px-4">
                        MLA lock-in clause, OEM capex &amp; retrofit invoices
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-[#DC2626]">
                        Arbitration / Commercial Suit
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Multi-Site Gate-Pass &amp; Landlord Lockout
                      </td>
                      <td className="py-3.5 px-4">
                        Arbitration Act s.9 / CPC Order XL Rule 1
                      </td>
                      <td className="py-3.5 px-4">
                        Ownership invoices, serial schedule, GPS coordinates
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-[#DC2626]">
                        Urgent Section 9 Receiver Petition
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Contract Act s.152 & Lock-In */}
            <section
              id="heading-bailee-negligence"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Defeating &ldquo;Wear &amp; Tear&rdquo; Excuses Under Contract Act s.152
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Every MHE Master Lease Agreement contains a standard &ldquo;normal wear and
                  tear excepted&rdquo; clause. Defaulting 3PLs exploit this phrase at
                  contract exit to reject ₹4 Lakh–₹18 Lakh repair bills for crushed battery
                  housings, burnt traction motors, and twisted reach-truck masts. To defeat
                  this defence cleanly, your legal notice must draw a sharp evidentiary line
                  between <strong>gradual depreciation</strong> and{" "}
                  <strong>culpable bailee negligence</strong> under Sections 151 and 152 of
                  the Indian Contract Act, 1872.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                      Normal Wear &amp; Tear (Lessor Absorbs)
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-950 list-disc pl-4">
                      <li>Gradual polyurethane tyre tread wear within rated hours</li>
                      <li>Routine hydraulic seal &amp; filter replacement</li>
                      <li>Cosmetic paint scuffs on counterweight edges</li>
                      <li>Expected Li-ion cycle degradation within OEM warranty</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-2">
                      s.152 Bailee Negligence (100% Lessee Liability)
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-red-950 list-disc pl-4">
                      <li>Deep-discharge Li-ion cell failure from bypassing BMS alarms</li>
                      <li>Using unapproved lead-acid chargers on lithium battery packs</li>
                      <li>Bent masts, cracked overhead guards, or sheared fork tips</li>
                      <li>Operating indoor electric reach trucks in rain / flooded yards</li>
                    </ul>
                  </div>
                </div>

                <p>
                  Similarly, when a lessee abandons a 36-month dedicated fleet contract at
                  Month 10, never bill the exit fee as an unexplained &ldquo;penalty.&rdquo;
                  Frame it under <strong>Section 74 of the Contract Act</strong> as
                  amortized capital recovery for custom mast heights, cold-storage cabin
                  heaters, and OEM lithium battery financing procured exclusively for that
                  lessee&apos;s racking layout.
                </p>
              </div>
            </section>

            {/* Section 6: Interactive 4-Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4 Real-World MHE &amp; Pallet-Pooling Failure Playbooks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                Select your exact commercial bottleneck below to view the statutory basis
                and 3-step execution protocol:
              </p>

              <MheScenarioTabs />
            </section>

            {/* Section 7: Worked Financial & Shrinkage Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked Recovery Ledger: 3PL Hub Default (₹46.20L Claim)
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 mb-5 leading-relaxed">
                Consider a realistic B2B default at a Bhiwandi FMCG distribution hub
                involving <strong>8 leased Li-ion Reach Trucks</strong> and{" "}
                <strong>3,500 pooled HDPE pallets</strong> over a 120-day payment freeze
                (assuming Udyam Micro/Small lessor status under MSMED s.16 at illustrative
                6.50% RBI Bank Rate &rarr; 19.50% p.a. compounded monthly):
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-700 pb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                    Consolidated Creditor Claim Schedule
                  </span>
                  <span className="text-xs text-slate-400">
                    Contract Act s.152 / s.160 + MSMED s.16
                  </span>
                </div>

                <div className="divide-y divide-slate-800 text-xs sm:text-sm">
                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-300">
                      1. Overdue Monthly Fleet Rental (8 Reach Trucks &times; 4 Months)
                    </span>
                    <span className="font-bold text-white shrink-0">₹17,60,000</span>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-300">
                      2. Li-Ion BMS Deep-Discharge &amp; Mast Collision OEM Bill (s.152)
                    </span>
                    <span className="font-bold text-white shrink-0">₹6,85,000</span>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-300">
                      3. Lost Pooled Pallets Buyout (540 Unreturned Pallets &times; ₹3,200)
                    </span>
                    <span className="font-bold text-white shrink-0">₹17,28,000</span>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-300">
                      4. Accrued MSMED s.16 Compound Interest (3x RBI Rate, ~120 Days)
                    </span>
                    <span className="font-bold text-emerald-400 shrink-0">₹2,71,000</span>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-300">
                      5. Multi-Site Demobilization &amp; Standby Downtime Loss
                    </span>
                    <span className="font-bold text-white shrink-0">₹1,76,000</span>
                  </div>
                  <div className="pt-3 flex justify-between gap-4 text-sm sm:text-base font-black">
                    <span className="text-red-400">Total Enforceable Recovery Claim</span>
                    <span className="text-emerald-400 shrink-0">₹46,20,000</span>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-xs text-slate-300 leading-relaxed">
                  Use our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-red-400 underline hover:text-white font-semibold"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>{" "}
                  to compute exact invoice-by-invoice 3x RBI compound interest before
                  attaching the ledger to your statutory demand notice.
                </div>
              </div>
            </section>

            {/* Section 8: BSA 2023 s.63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  6-Point MHE &amp; Pallet Evidence Dossier (BSA 2023 s.63)
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 mb-5 leading-relaxed">
                Telematics, BMS error logs, and RFID pallet scans are electronic records
                requiring a{" "}
                <strong>Section 63 Bharatiya Sakshya Adhiniyam (BSA), 2023</strong>{" "}
                certificate for court admissibility. Assemble these six items before
                serving your notice:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Executed Master Lease Agreement & Serial Schedule",
                    desc: "Signed MLA with chassis/engine serial numbers, lock-in period, and Lost Pallet Buyout rate schedule.",
                  },
                  {
                    title: "2. Handover Challans & GST e-Way Bills",
                    desc: "Delivery Challans and e-Way Bills proving physical dispatch of forklifts and pooled pallets to each warehouse GSTIN.",
                  },
                  {
                    title: "3. Li-Ion BMS & Telematics Impact Exports",
                    desc: "CSV/PDF exports of over-discharge alerts, shock-sensor collisions, and GPS geo-fence logs certified under BSA s.63.",
                  },
                  {
                    title: "4. OEM Joint Exit Inspection & Repair Quotes",
                    desc: "Timestamped photos, videographed exit inspection, and authorized OEM spare-part replacement estimates.",
                  },
                  {
                    title: "5. Monthly Pallet Balance Confirmations",
                    desc: "Email/portal reconciliation statements showing opening pallet stock, returns, and net unreturned shrinkage.",
                  },
                  {
                    title: "6. Biometric Operator Attendance (Wet-Lease)",
                    desc: "Shift muster rolls and daily hour-meter logs demolishing fabricated operator-absenteeism counterclaims.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Dual-Track CTA */}
            <section
              id="heading-cta-desk"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Serve an MHE / Pallet Recovery Notice or Upload Bulk Fleets
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                Whether you need to test one overdue 3PL account immediately or dispatch
                statutory notices across 50+ regional warehouse defaulters simultaneously,
                choose your execution desk below:
              </p>

              <MheRecoveryCTA />
            </section>

            {/* Section 10: Equipment Leasing Tools, Templates & Sibling Guides */}
            <section
              id="heading-related-guides"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Equipment Leasing Templates, Calculators &amp; Sibling Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <Link
                  href="/industries/equipment-rental-machinery-leasing-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors group"
                >
                  <p className="text-[11px] font-bold uppercase text-[#DC2626] mb-1">
                    Parent Industry Hub
                  </p>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626]">
                    Equipment Rental &amp; Machinery Leasing Recovery Hub &rarr;
                  </p>
                </Link>

                <Link
                  href="/unreturned-rented-scaffolding-shuttering-formwork-bns-316-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors group"
                >
                  <p className="text-[11px] font-bold uppercase text-slate-500 mb-1">
                    Sibling Spoke &bull; IND-20
                  </p>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626]">
                    Unreturned Rented Scaffolding &amp; Shuttering BNS s.316 Recovery &rarr;
                  </p>
                </Link>

                <Link
                  href="/builder-employer-blocking-gate-pass-demobilization-rented-crane-machinery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors group"
                >
                  <p className="text-[11px] font-bold uppercase text-slate-500 mb-1">
                    Sibling Spoke &bull; IND-20
                  </p>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626]">
                    Blocked Gate-Pass &amp; Crane Demobilization Receiver Guide &rarr;
                  </p>
                </Link>

                <Link
                  href="/law/bns-318-cheating-vs-civil-dispute"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors group"
                >
                  <p className="text-[11px] font-bold uppercase text-slate-500 mb-1">
                    Criminal vs Civil Law
                  </p>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626]">
                    BNS Section 318 Cheating vs Civil Commercial Dispute &rarr;
                  </p>
                </Link>

                <Link
                  href="/recovery/contractor-payment"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors group"
                >
                  <p className="text-[11px] font-bold uppercase text-slate-500 mb-1">
                    B2B Arrears Guide
                  </p>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626]">
                    Contractor &amp; Vendor Payment Recovery Playbook &rarr;
                  </p>
                </Link>

                <Link
                  href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors group"
                >
                  <p className="text-[11px] font-bold uppercase text-slate-500 mb-1">
                    Omnichannel Dispatch
                  </p>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626]">
                    Bulk Notice Dispatch: Email + WhatsApp + Speed Post RPAD &rarr;
                  </p>
                </Link>

                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors group"
                >
                  <p className="text-[11px] font-bold uppercase text-emerald-700 mb-1">
                    Interactive Calculator (T1)
                  </p>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626]">
                    MSME 3x RBI Compound Interest Calculator &rarr;
                  </p>
                </Link>

                <Link
                  href="/templates/legal-notice-reply-format"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors group"
                >
                  <p className="text-[11px] font-bold uppercase text-amber-700 mb-1">
                    Notice Workspace (P1)
                  </p>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626]">
                    Commercial Legal Notice &amp; Reply Format Workspace &rarr;
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 11: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions: Forklift, MHE &amp; Pallet Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] text-lg font-bold transition-transform group-open:rotate-45 shrink-0">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Primary Statutory Authorities &amp; Official Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline font-medium inline-flex items-center gap-1.5"
                    >
                      <span>{source.title}</span>
                      <span aria-hidden="true">&nearr;</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
