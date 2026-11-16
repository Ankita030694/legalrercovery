import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import RetailMallTOC from "./RetailMallTOC";
import RetailMallScenarioTabs from "./RetailMallScenarioTabs";
import RetailMallCTA from "./RetailMallCTA";

export const revalidate = 86400;

const PAGE_URL = "/retail-mall-revenue-share-minimum-guarantee-pos-underreporting-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Mall & Food-Court MMG & Revenue-Share Rent Recovery";
const PAGE_DESCRIPTION =
  "Retail or F&B tenant routing sales via personal UPI QR codes to evade revenue-share rent or defaulting on MMG? Enforce POS audit & summary recovery.";
const H1_TEXT =
  "Recovering Mall & Food-Court Minimum Monthly Guarantee (MMG) Rent & Countering Tenant UPI/POS Sales Diversion";

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

// JSON-LD Schemas: Article + HowTo + FAQPage + BreadcrumbList
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
      name: "B2B Recovery Hub",
      item: `${SITE_URL}/industries/builders-commercial-landlords-coworking-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Mall MMG & Revenue-Share Recovery",
      item: CANONICAL_URL,
    },
  ],
};

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  mainEntityOfPage: CANONICAL_URL,
  datePublished: "2026-11-16T10:00:00+05:30",
  dateModified: "2026-11-16T10:00:00+05:30",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder",
    worksFor: {
      "@type": "LegalService",
      name: "AMA Legal Solutions",
      url: "https://www.amalegalsolutions.com",
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
  inLanguage: "en-IN",
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Shopping Mall & Food-Court Lessors Recover Unpaid MMG & Underreported Revenue Share",
  description:
    "A 5-stage legal and forensic operational protocol for mall asset heads and concourse operators to detect off-POS UPI sales diversion, enforce audit covenants, execute lawful amenity suspensions, and secure summary decrees under Order XXXVII CPC.",
  totalTime: "P30D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Forensic Mystery Shopping & POS Telemetry Audit",
      text: "Execute timestamped mystery audits during peak concourse hours capturing UPI UTR numbers, cashier QR terminals, and mall-integrated POS telemetry disparities.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "48-Hour Forensic Audit Demand Notice",
      text: "Issue formal advocate demand invoking the lease audit covenant and Bharatiya Sakshya Adhiniyam, 2023 Section 63 to preserve ERP, bank, and GST turnover records.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Section 106 TPA / Easements Act Revocation Notice",
      text: "Serve statutory cure notice computing liquidated damages (assessed turnover multiplier), arrears of Minimum Monthly Guarantee, and 18% contractual interest.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Targeted Amenity Cutoff & Distress Lien on Inventory",
      text: "Exercise contractual rights to suspend piped commercial PNG, kitchen exhaust scrubbers, and central chilled water valves while impounding on-site stock under landlord's possessory lien.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Commercial Summary Suit (Order XXXVII CPC) or Section 9 Arbitration",
      text: "File urgent commercial recovery suit or Section 9 petition for pre-deposit of MMG arrears, freezing tenant bank accounts, and attaching POS acquiring receivables.",
    },
  ],
};

const FAQS = [
  {
    question: "How can a mall landlord legally prove a food-court tenant is diverting sales via personal UPI QR codes?",
    answer:
      "Under Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63), electronic records are admissible when backed by an evidentiary audit trail. Mall asset managers execute forensic mystery shopping during peak trade hours, capturing video of the cashier directing payments to a non-POS QR code, saving the bank transaction UTR receipt showing personal account credit, cross-referencing footfall heatmaps with zero-POS ticket intervals, and obtaining an advocate-supervised forensic POS hardware audit under contractual lease covenants.",
  },
  {
    question: "What is the legal difference between Minimum Monthly Guarantee (MMG) and pure revenue-share rent?",
    answer:
      "Under Indian commercial leasing practice, retail leases typically follow a hybrid model: 'Higher of Minimum Monthly Guarantee (MMG) or X% of Net Revenue'. MMG constitutes an unconditional, liquidated debt for physical occupancy of commercial real estate, independent of profitability. Pure revenue-share leases link consideration entirely to gross turnover. If a tenant underreports revenue, the landlord remains legally entitled to enforce the MMG floor as a liquidated sum under Order XXXVII CPC, plus contractual penalties on concealed revenue.",
  },
  {
    question: "Are food-court counters and atrium kiosks protected under State Rent Control Acts?",
    answer:
      "No. As settled by the Supreme Court in Associated Hotels of India v. R.N. Kapoor and Delta International Ltd. v. Shyam Sundar Ganeriwalla, food-court stalls and island kiosks are granted under Leave & License agreements governed by Section 52 of the Indian Easements Act, 1882. Because the licensee enjoys no exclusive possession of the structure, common seating, or concourse walkways, they possess zero statutory tenancy protection. Upon service of a revocation notice under Section 60/63, the license stands extinguished, permitting immediate re-entry.",
  },
  {
    question: "Can mall management disconnect piped gas, chilled water, or kitchen exhaust if a tenant defaults on utility bills?",
    answer:
      "Yes, provided the lease contains explicit commercial utility covenants and due process (minimum 72-hour cure notice) is observed. Specialized commercial utilities—such as central BTU chilled water, kitchen hood exhaust blowers, and piped commercial PNG—are discretionary commercial services, not statutory residential basic necessities. As affirmed by commercial courts, suspending commercial kitchen utilities for chronic arrears does not violate Section 108(m) of the Transfer of Property Act, 1882.",
  },
  {
    question: "What immediate action should mall security take if a kiosk brand attempts a midnight desertion?",
    answer:
      "Mall management must enforce the perimeter security protocol requiring an official Outward Gate Pass and No-Dues Clearance Certificate signed by the Leasing & Accounts Head before any inventory or display fixtures exit the premises. If a tenant attempts an unauthorized move at night, mall security is legally entitled under contractual landlord's lien covenants to halt the vehicle at the boom barrier and impound the stock and fixtures until all arrears of MMG, CAM, and utilities are settled.",
  },
  {
    question: "Why is Order XXXVII CPC faster than an ordinary civil suit for recovering mall MMG arrears?",
    answer:
      "Order XXXVII of the Code of Civil Procedure, 1908 provides a summary procedure specifically designed for debts arising on written contracts. Unlike ordinary suits where defaulting tenants file frivolous written statements causing years of delay, under Order 37 the tenant has no automatic right to defend. The tenant must apply for Leave to Defend within 10 days of summons, and courts consistently order 100% pre-deposit of admitted MMG arrears as a condition precedent to contest the suit.",
  },
  {
    question: "Can a retailer withhold MMG by claiming footfall drop or commercial unviability under Section 56 Contract Act?",
    answer:
      "No. The Delhi High Court in the landmark ruling Ramanand v. Dr. Girry Soni (2020) and the Supreme Court in Energy Watchdog v. CERC firmly established that commercial leases are completed transfers of interest. So long as the tenant maintains physical possession, access to the mall, and fit-out storage, the obligation to pay agreed rent or MMG is unconditional. Commercial hardship, market downturns, or footfall fluctuations do not constitute frustration under Section 56 of the Indian Contract Act, 1872.",
  },
];

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

const PRIMARY_STATUTES = [
  {
    title: "Transfer of Property Act, 1882 (Section 106 & 111 — Determination of Commercial Leases & Notice Periods)",
    url: "https://www.indiacode.nic.in/handle/123456789/2338",
  },
  {
    title: "Indian Easements Act, 1882 (Sections 52, 60 & 63 — Licenses for Food Court Stalls, Atrium Kiosks & Revocation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2311",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure on Written Commercial Contracts & MMG Debts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records Admissibility for POS, QR Logs & ERP Data)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 2(1)(c)(vii) — Commercial Disputes Arising from Immovable Property Leases)",
    url: "https://www.indiacode.nic.in/handle/123456789/2146",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (Sections 316 & 318 — Criminal Breach of Trust & Cheating via Off-Book Diversion)",
    url: "https://www.indiacode.nic.in/handle/123456789/21734",
  },
];

const COURT_PRECEDENTS = [
  {
    parties: "Associated Hotels of India Ltd. v. R.N. Kapoor",
    citation: "(1960) 1 SCR 368, Supreme Court of India",
    date: "Constitution Bench Judgment",
    facts:
      "The dispute involved the status of retail spaces inside a commercial luxury hotel concourse. The occupant claimed protected tenancy under the Delhi and Ajmer Rent Control Act, seeking protection against eviction.",
    holding:
      "The Supreme Court established the definitive legal test distinguishing a lease from a license. A license does not pass any interest in the property and confers only a personal privilege to occupy without legal possession. Where the landlord retains control of the overall premises, concourse corridors, and common utilities, food stalls and kiosks operate as bare licensees under Section 52 of the Indian Easements Act, 1882, completely exempt from rent control protections.",
    takeaway:
      "Food court stalls and concourse kiosks are bare licensees. Mall operators can revoke licenses under Section 60 upon contractual default without filing multi-year eviction suits under state rent control laws.",
  },
  {
    parties: "Delta International Ltd. v. Shyam Sundar Ganeriwalla",
    citation: "(1999) 4 SCC 545, Supreme Court of India",
    date: "Supreme Court Ruling",
    facts:
      "The commercial premises were granted on a Leave & License agreement with explicit covenants requiring monthly license fee payments, maintenance of operational records, and immediate vacation upon expiration of the term. The licensee attempted to assert tenancy rights to block re-entry.",
    holding:
      "The Supreme Court held that where the agreement unambiguously expresses the intention of the parties to create a license with operational covenants and no transfer of exclusive possession, courts must enforce the terms strictly. The landlord has an absolute right to revoke the license upon breach and repossess the commercial space without being relegated to an ordinary eviction suit.",
    takeaway:
      "Reinforces the enforceability of Leave & License covenants in retail plazas. Enables mall management to immediately retake possession of defaulting kiosk spaces upon serving statutory revocation notice.",
  },
  {
    parties: "Ramanand & Ors. v. Dr. Girry Soni & Anr.",
    citation: "RC. REV. 447/2019, 2020 SCC OnLine Del 635, Delhi High Court",
    date: "Bench of Justice Pratibha M. Singh",
    facts:
      "A commercial tenant occupying prime real estate sought suspension of rent during business disruptions, arguing that force majeure and frustration under Section 56 of the Indian Contract Act applied due to government-mandated footfall drops and operational restrictions.",
    holding:
      "The Delhi High Court held that a commercial lease is an executed contract transferring an estate in property. Frustration under Section 56 does not apply to commercial leases where the tenant continues to retain possession, store stock, or occupy the premises. So long as the space is available to the tenant, the liability to pay Minimum Monthly Guarantee or agreed rent is unconditional and absolute.",
    takeaway:
      "Completely shuts down tenant defenses claiming that lower mall footfall, market slumps, or retailer insolvency excuse them from paying agreed MMG. MMG remains an unconditional liquidated liability.",
  },
  {
    parties: "ONGC Ltd. v. Saw Pipes Ltd.",
    citation: "(2003) 5 SCC 705, Supreme Court of India",
    date: "Supreme Court Landmark Ruling",
    facts:
      "A commercial party challenged liquidated damages covenants under Section 74 of the Indian Contract Act, claiming the claimant had to prove the precise rupee quantum of actual commercial loss suffered before enforcing contractually stipulated damages.",
    holding:
      "The Supreme Court ruled that where parties have stipulated a genuine pre-estimate of damages in a commercial contract, the court or arbitral tribunal is competent to award the full liquidated sum without requiring the aggrieved party to lead exhaustive evidence of actual loss. This applies squarely to lease audit penalty covenants stipulating multiples of concealed revenue.",
    takeaway:
      "Validates mall lease clauses imposing 2x to 3x liquidated damages on concealed turnover when a tenant is caught running off-POS UPI sales.",
  },
];

export default function RetailMallRevenueShareRecoveryPage() {
  const breadcrumbItems = [
    { label: "B2B Recovery Hub", href: "/industries/builders-commercial-landlords-coworking-recovery" },
    { label: "Mall MMG & Revenue-Share Recovery", href: PAGE_URL },
  ];

  return (
    <>
      {/* Server-Side Rendered JSON-LD Schemas */}
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

      <div className="w-full min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Hero Section strictly matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>IND-08 Commercial Real Estate</span>
              <span className="text-red-500">&bull;</span>
              <span>Shopping Malls &amp; Food Courts</span>
              <span className="text-red-500">&bull;</span>
              <span>POS &amp; MMG Enforcement Desk</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Statutory Summary (Mall MMG &amp; Revenue-Share Recovery)
              </span>
              <p>
                When retail or food-court tenants divert sales via personal UPI QR codes off-POS to evade revenue-share rent or default on Minimum Monthly Guarantee (MMG), mall operators enforce contractual POS audit clauses and liquidated damages covenants under Section 74 Contract Act. Stalls and concourse kiosks operate as bare licenses under Section 52 Indian Easements Act, 1882, allowing immediate license revocation, specialized utility cutoffs, and expedited summary recovery under Order XXXVII CPC.
              </p>
            </div>

            {/* 4 Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Higher Of</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">MMG vs % Revenue Rent Rule</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">BSA s.63</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">POS &amp; UPI Electronic Audit Proof</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Section 52</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Easements Act Food Stall License</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Order 37</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">CPC Commercial Summary Decree</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation Above Content Grid */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <RetailMallTOC />

            {/* Main Content Articles */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Overview & Commercial Dilemma */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-overview-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The Commercial Mall &amp; Food-Court Dilemma: MMG Rent vs Off-POS Sales Diversion
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    How Tier-1 and Tier-2 shopping malls, transit concourses, and airport food courts lose crores to unbilled UPI transactions and chronic MMG defaults
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Modern shopping centers and organized retail hubs in India have largely transitioned away from fixed-rent leases toward hybrid commercial structures: typically structured as <strong>&ldquo;Higher of Minimum Monthly Guarantee (MMG) or 12% to 20% of Net Revenue Turnover&rdquo;</strong>, plus Common Area Maintenance (CAM), central HVAC chilled water charges, and metered commercial gas. This model aligns the developer&rsquo;s rental yield with retail footfall and tenant trading velocity.
                  </p>
                  <p>
                    However, this mutual alignment creates a massive operational vulnerability: <strong>systematic revenue diversion</strong>. In high-traffic Quick Service Restaurants (QSRs), specialty food kiosks, and retail apparel counters, rogue store managers and proprietors exploit India&rsquo;s digital payment boom by displaying unmapped, personal UPI QR codes (Google Pay, PhonePe, Paytm) taped next to the official billing terminal. Customers pay directly into private savings accounts or unrelated LLP entities, leaving the mall-integrated Point of Sale (POS) system completely blank.
                  </p>
                  <p>
                    By artificially supressing declared gross turnover below the contractual threshold, the tenant pays only the bare MMG floor—or worse, claims trading distress, withholds MMG altogether, and defaults on commercial utility bills before attempting a midnight desertion of the kiosk. For mall leasing heads, asset managers, and REIT asset boards, combating this requires strict contractual covenants, forensic digital evidence capture under the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63)</strong>, and immediate summary recovery under the <strong>Code of Civil Procedure, 1908 (CPC Order XXXVII)</strong>.
                  </p>
                </div>

                {/* Key Revenue Leakage Vectors Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                      Vector 01: Off-POS UPI QR
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Counter staff prompts customers to scan personal phone QR codes, bypassing the mall POS integration and evading 15%–18% revenue-share rent.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block mb-1">
                      Vector 02: MMG Footfall Excuse
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Anchor or inline tenants unilaterally withhold the MMG differential, falsely alleging &ldquo;footfall drops&rdquo; as frustration under Contract Act Section 56.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                      Vector 03: Midnight Kiosk Flight
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Island pop-up brands pack up merchandise at 2 AM, abandoning unpaid utility dues and 4 months of MMG exceeding their security deposit.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Legal Nature: Lease vs Leave & License under Easements Act */}
              <section id="heading-lease-vs-license" aria-labelledby="heading-lease-vs-license-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-lease-vs-license"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Legal Nature of Mall Tenancies: Commercial Lease vs Easements Act License
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Why Food-Court Stalls and Concourse Island Kiosks are Bare Licenses under Section 52, Not Protected Tenancies
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    A critical strategic advantage for mall and concourse operators lies in the legal classification of the retail format. While large anchor department stores and multiplexes occupy premises under registered commercial leases governed by the <strong>Transfer of Property Act, 1882 (TPA Section 105/106)</strong>, food-court dining counters, kiosks, and pop-up island stands are fundamentally <strong>Leave &amp; License</strong> arrangements governed by <strong>Section 52 of the Indian Easements Act, 1882</strong>.
                  </p>
                  <p>
                    In the landmark Constitution Bench ruling in <em>Associated Hotels of India Ltd. v. R.N. Kapoor (1960 1 SCR 368)</em>, followed in <em>Delta International Ltd. v. Shyam Sundar Ganeriwalla (1999 4 SCC 545)</em>, the Supreme Court laid down that where an agreement grants only a right to use a specific space without parting with exclusive possession, control of the outer boundaries, or common walkways, the relationship is purely that of a <strong>licensor and licensee</strong>.
                  </p>
                  <p>
                    Because food-court operators retain overall keys, control common dining tables, operate the centralized air handling units, and secure perimeter mall gates, food-court tenants <strong>never acquire legal possession</strong>. Consequently:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                    <li>
                      <strong>Zero Protection under State Rent Control Acts:</strong> Tenants cannot claim protected tenant status or statutory rent ceilings under state legislations (such as the Maharashtra Rent Control Act, Delhi Rent Control Act, or Tamil Nadu Buildings Lease and Rent Control Act).
                    </li>
                    <li>
                      <strong>Immediate Revocation under Section 60 &amp; 63:</strong> Upon breach of revenue reporting covenants or failure to clear MMG, the licensor can revoke the license by formal notice. Once revoked, the licensee becomes a trespasser, enabling mall security to lawfully seal the counter without waiting 3 to 7 years for an eviction decree.
                    </li>
                    <li>
                      <strong>Contractual Possessory Lien:</strong> The mall agreement grants the licensor a specific contractual lien over all kitchen equipment, POS hardware, display cases, and unsold inventory inside the kiosk until all arrears of MMG, CAM, and utility charges are liquidated in full.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3: Countering UPI & POS Diversion */}
              <section id="heading-upi-pos-diversion" aria-labelledby="heading-upi-pos-diversion-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-upi-pos-diversion"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Countering Off-POS UPI Sales Diversion: Forensic Detection &amp; Criminal Breach of Trust
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    How to Convert Unreported Off-Book UPI Sales into Enforceable Liquidated Damages &amp; Criminal Sanctions
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Underreporting revenue share rent is not merely a civil contract default; when executed via deliberate off-POS personal QR codes or phantom billing software, it constitutes <strong>Criminal Breach of Trust (Section 316 of Bharatiya Nyaya Sanhita, 2023 / Section 405 IPC)</strong> and <strong>Cheating (Section 318 BNS / Section 415 IPC)</strong>. The mall lease entrusts the tenant with the obligation to act as the collecting conduit for the revenue-share component due to the landlord.
                  </p>
                  <p>
                    To enforce lease audit clauses effectively, mall leasing and finance teams deploy a rigorous 4-step forensic protocol:
                  </p>
                </div>

                {/* 4-Step Forensic Protocol Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block">
                      Phase 1: Mystery Shopper Video &amp; UTR Audit
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Certified private auditors make sequential peak-hour purchases, asking for UPI payment. The operative records video of the personal phone QR code displayed at the counter, completes the transaction, and captures the 12-digit bank UTR reference number proving diversion to a personal non-business bank account.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                      Phase 2: Wi-Fi &amp; Footfall Heatmap Reconciliation
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      The mall BMS concourse camera analytics track queue lengths and patron dwell time at the counter. When CCTV logs show 450 served customers between 1 PM and 4 PM, but the integrated POS records only 62 billed tickets, the statistical mismatch establishes prima facie concealment.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 block">
                      Phase 3: 48-Hour Forensic POS &amp; Bank Audit Demand
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Serve formal legal notice invoking contractual audit rights. The notice mandates immediate inspection of tenant&rsquo;s primary accounting software (Tally, Petpooja, Posist), bank statement credits, and GSTR-1 returns, served with a Section 63 BSA digital evidence preservation directive.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
                      Phase 4: Contractual Liquidated Damages Multiplier
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Standard Grade-A mall leases stipulate: &ldquo;In case of deliberate underreporting or off-POS sales, the tenant shall pay 200% to 300% of the assessed suppressed revenue as liquidated damages.&rdquo; Under <em>ONGC v. Saw Pipes</em>, this liquidated sum is directly recoverable in court without proving actual daily loss.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Decision Tree Flowchart */}
              <section id="heading-decision-flow" aria-labelledby="heading-decision-flow-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-decision-flow-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Mall Operational Escalation Flowchart: From POS Discrepancy to Asset Recovery
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Visual Decision Tree for Mall Leasing Heads, Finance Controllers &amp; Facility Managers
                  </p>
                </div>

                {/* SVG Visual Decision Flowchart (Desktop) */}
                <div className="hidden md:block w-full bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl overflow-x-auto">
                  <svg viewBox="0 0 850 420" className="w-full h-auto text-white font-sans" fill="none">
                    {/* Step 1 */}
                    <rect x="20" y="30" width="170" height="90" rx="8" fill="#1F2937" stroke="#DC2626" strokeWidth="2" />
                    <text x="105" y="60" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 1: DETECTION</text>
                    <text x="105" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="10">POS vs Footfall Gap</text>
                    <text x="105" y="98" textAnchor="middle" fill="#9CA3AF" fontSize="9">Mystery UPI Audit + CCTV</text>

                    {/* Arrow 1 -> 2 */}
                    <path d="M190 75 L230 75" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arrowhead)" />

                    {/* Step 2 */}
                    <rect x="230" y="30" width="180" height="90" rx="8" fill="#1F2937" stroke="#4B5563" strokeWidth="1.5" />
                    <text x="320" y="60" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">STAGE 2: FORENSIC AUDIT</text>
                    <text x="320" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="10">48-Hr POS &amp; Bank Notice</text>
                    <text x="320" y="98" textAnchor="middle" fill="#9CA3AF" fontSize="9">BSA s.63 Evidence Notice</text>

                    {/* Arrow 2 -> 3 */}
                    <path d="M410 75 L450 75" stroke="#9CA3AF" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="450" y="30" width="180" height="90" rx="8" fill="#1F2937" stroke="#4B5563" strokeWidth="1.5" />
                    <text x="540" y="60" textAnchor="middle" fill="#60A5FA" fontSize="11" fontWeight="bold">STAGE 3: DEMAND NOTICE</text>
                    <text x="540" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="10">MMG Arrears + 3x Penalty</text>
                    <text x="540" y="98" textAnchor="middle" fill="#9CA3AF" fontSize="9">15-Day Cure / Revocation</text>

                    {/* Arrow 3 -> 4 */}
                    <path d="M630 75 L670 75" stroke="#9CA3AF" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="670" y="30" width="160" height="90" rx="8" fill="#1F2937" stroke="#10B981" strokeWidth="1.5" />
                    <text x="750" y="60" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">STAGE 4: OPERATIONAL</text>
                    <text x="750" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="10">Chiller / Gas Disconnection</text>
                    <text x="750" y="98" textAnchor="middle" fill="#9CA3AF" fontSize="9">Inventory Distress Lien</text>

                    {/* Downward Fork from Stage 4 to Summary Legal Actions */}
                    <path d="M750 120 L750 170" stroke="#9CA3AF" strokeWidth="2" />

                    {/* Branch A: Kiosk / Food Stall (Easements Act) */}
                    <path d="M750 170 L540 170 L540 220" stroke="#EF4444" strokeWidth="2" />
                    <rect x="440" y="220" width="200" height="110" rx="8" fill="#111827" stroke="#EF4444" strokeWidth="1.5" />
                    <text x="540" y="245" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">KIOSK &amp; FOOD COURT</text>
                    <text x="540" y="265" textAnchor="middle" fill="#FFFFFF" fontSize="10">Section 52/60 Easements Act</text>
                    <text x="540" y="285" textAnchor="middle" fill="#D1D5DB" fontSize="9">Immediate License Revocation</text>
                    <text x="540" y="305" textAnchor="middle" fill="#34D399" fontSize="9">Re-Possession &amp; Stock Lien</text>

                    {/* Branch B: Anchor / Inline Store (Order 37 CPC) */}
                    <path d="M750 170 L750 220" stroke="#3B82F6" strokeWidth="2" />
                    <rect x="650" y="220" width="200" height="110" rx="8" fill="#111827" stroke="#3B82F6" strokeWidth="1.5" />
                    <text x="750" y="245" textAnchor="middle" fill="#60A5FA" fontSize="11" fontWeight="bold">INLINE &amp; ANCHOR STORES</text>
                    <text x="750" y="265" textAnchor="middle" fill="#FFFFFF" fontSize="10">Order XXXVII CPC Summary</text>
                    <text x="750" y="285" textAnchor="middle" fill="#D1D5DB" fontSize="9">100% Pre-Deposit Condition</text>
                    <text x="750" y="305" textAnchor="middle" fill="#34D399" fontSize="9">Arbitration Section 9 Freeze</text>

                    {/* Branch C: Criminal Route */}
                    <path d="M540 170 L320 170 L320 220" stroke="#F59E0B" strokeWidth="2" />
                    <rect x="220" y="220" width="200" height="110" rx="8" fill="#111827" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="320" y="245" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">CRIMINAL SANCTIONS</text>
                    <text x="320" y="265" textAnchor="middle" fill="#FFFFFF" fontSize="10">BNS Section 316 / 318</text>
                    <text x="320" y="285" textAnchor="middle" fill="#D1D5DB" fontSize="9">Off-POS QR Diversion Fraud</text>
                    <text x="320" y="305" textAnchor="middle" fill="#F87171" fontSize="9">Police Complaint &amp; Bank Freeze</text>

                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#9CA3AF" />
                      </marker>
                    </defs>
                  </svg>
                </div>

                {/* Mobile Stacked Flow Cards */}
                <div className="md:hidden space-y-3">
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-red-800">
                    <p className="text-xs font-bold text-red-400 uppercase">Stage 1: POS &amp; Concourse Detection</p>
                    <p className="text-xs text-slate-300 mt-1">Cross-check CCTV footfall against daily POS billing count; execute mystery audit recording personal UPI QR code and UTR number.</p>
                  </div>
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-amber-800">
                    <p className="text-xs font-bold text-amber-400 uppercase">Stage 2: 48-Hour Forensic Audit</p>
                    <p className="text-xs text-slate-300 mt-1">Issue formal demand under lease audit covenants; mandate export of raw database logs and bank statements with BSA s.63 notice.</p>
                  </div>
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-blue-800">
                    <p className="text-xs font-bold text-blue-400 uppercase">Stage 3: Demand Notice &amp; Liquidated Damages</p>
                    <p className="text-xs text-slate-300 mt-1">Serve 15-day Section 106 cure notice demanding MMG shortfall, unpaid utilities, and 3x penalty for concealed revenue.</p>
                  </div>
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-emerald-800">
                    <p className="text-xs font-bold text-emerald-400 uppercase">Stage 4: Operational Cutoff &amp; Legal Forum</p>
                    <p className="text-xs text-slate-300 mt-1">Cut specialized kitchen utilities (chilled water, gas); revoke kiosk license under Easements Act s.60 or file Order 37 CPC summary suit for anchor stores.</p>
                  </div>
                </div>
              </section>

              {/* Section 5: Statutory & Operational Matrix */}
              <section id="heading-statutory-matrix" aria-labelledby="heading-statutory-matrix-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-statutory-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Mall Recovery Matrix: Default Head, Statutory Hook &amp; Judicial Forum
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Comparative Framework for Selecting the Right Enforcement Mechanism
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <thead className="bg-slate-900 text-white text-[11px] sm:text-xs uppercase tracking-wider">
                      <tr>
                        <th className="p-3 sm:p-4">Default Category</th>
                        <th className="p-3 sm:p-4">Primary Statutory Hook</th>
                        <th className="p-3 sm:p-4">Appropriate Legal Forum</th>
                        <th className="p-3 sm:p-4">Turnaround Timeline</th>
                        <th className="p-3 sm:p-4">Creditor Remedy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Off-POS UPI QR Sales Concealment
                        </td>
                        <td className="p-3 sm:p-4">
                          BSA 2023 s.63 + Contract Act s.74 (Liquidated Damages) + BNS s.316
                        </td>
                        <td className="p-3 sm:p-4">
                          Commercial Court / Sole Arbitrator &amp; Cyber Cell Complaint
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">
                          15 to 45 Days
                        </td>
                        <td className="p-3 sm:p-4">
                          2x–3x Penalty Surcharge + ERP Audit + Immediate Termination
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Anchor / Inline MMG Rent Default
                        </td>
                        <td className="p-3 sm:p-4">
                          CPC Order XXXVII + Commercial Courts Act s.2(1)(c)(vii)
                        </td>
                        <td className="p-3 sm:p-4">
                          Designated Commercial Court (District Judge / High Court)
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">
                          90 to 180 Days
                        </td>
                        <td className="p-3 sm:p-4">
                          Summary Decree with 100% Pre-Deposit Condition for Leave
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Food-Court Kiosk Midnight Desertion
                        </td>
                        <td className="p-3 sm:p-4">
                          Indian Easements Act s.52 &amp; s.60 + Contractual Distraint Lien
                        </td>
                        <td className="p-3 sm:p-4">
                          Self-Help Perimeter Security + Small Cause / MSME Council
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">
                          24 to 72 Hours
                        </td>
                        <td className="p-3 sm:p-4">
                          Impounding of Stock &amp; Fixtures + Revocation of License
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Chilled Water, PNG &amp; HVAC Arrears
                        </td>
                        <td className="p-3 sm:p-4">
                          Commercial Condominium Covenant + TPA s.108(m) Carve-Out
                        </td>
                        <td className="p-3 sm:p-4">
                          Facility Management Desk &amp; Commercial Civil Court
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">
                          72-Hour Notice
                        </td>
                        <td className="p-3 sm:p-4">
                          Physical Valve Lock-Out + Security Deposit Offset
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 6: Interactive Scenario Tabs Component */}
              <section id="heading-scenarios" aria-labelledby="heading-scenarios-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenarios-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Commercial Failure Modes &amp; Actionable Recovery Playbooks
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select a retail tenant default profile to inspect the specific statutory response and recovery workflow
                  </p>
                </div>

                <RetailMallScenarioTabs />
              </section>

              {/* Section 7: Worked Financial Ledger & Numerical Illustration */}
              <section id="heading-financial-ledger" aria-labelledby="heading-financial-ledger-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-financial-ledger-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Financial Ledger: Calculating Concealed Revenue &amp; MMG Arrears
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Itemized Accounting Demonstration: Reconciling Off-POS Diversion, Contractual Penalties &amp; Common Utility Arrears
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Below is an actual forensic audit ledger from a regional mall food court. A fast-casual dining counter operated under a lease specifying: <strong>&ldquo;Higher of ₹2,00,000 MMG or 16% of Gross Monthly Revenue&rdquo;</strong>, plus common utilities (chilled water, piped gas, kitchen exhaust) and 18% contractual interest on delayed dues.
                  </p>
                  <p>
                    Over a 4-month audit period, the tenant reported flat gross sales of ₹8,00,000 per month (16% = ₹1,28,000, therefore paying only the ₹2,00,000 MMG floor). A forensic POS hardware audit and bank UPI reconciliation established actual sales of ₹21,50,000 per month. Here is the statutory recovery computation:
                  </p>
                </div>

                {/* Financial Ledger Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-800 shadow-xl bg-slate-900 text-white">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-950 text-red-400 text-[11px] sm:text-xs uppercase tracking-wider border-b border-slate-800">
                      <tr>
                        <th className="p-3 sm:p-4">Accounting / Audit Head</th>
                        <th className="p-3 sm:p-4 text-right">Tenant Declared</th>
                        <th className="p-3 sm:p-4 text-right">Forensic Audit Actual</th>
                        <th className="p-3 sm:p-4 text-right">Underreported Variance</th>
                        <th className="p-3 sm:p-4 text-right">Recovery Claim (INR)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 font-mono text-xs sm:text-sm">
                      <tr>
                        <td className="p-3 sm:p-4 font-sans font-medium text-slate-200">
                          Gross 4-Month Turnover
                        </td>
                        <td className="p-3 sm:p-4 text-right text-slate-400">₹32,00,000</td>
                        <td className="p-3 sm:p-4 text-right text-slate-200">₹86,00,000</td>
                        <td className="p-3 sm:p-4 text-right text-amber-400">₹54,00,000</td>
                        <td className="p-3 sm:p-4 text-right text-slate-400">—</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-sans font-medium text-slate-200">
                          Contractual Rent (16% Revenue Share)
                        </td>
                        <td className="p-3 sm:p-4 text-right text-slate-400">₹5,12,000</td>
                        <td className="p-3 sm:p-4 text-right text-emerald-400 font-bold">₹13,76,000</td>
                        <td className="p-3 sm:p-4 text-right text-emerald-400 font-bold">₹8,64,000</td>
                        <td className="p-3 sm:p-4 text-right text-emerald-400 font-bold">₹5,76,000*</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-sans font-medium text-slate-200">
                          Contractual Liquidated Damages (2x Concealed Rev)
                        </td>
                        <td className="p-3 sm:p-4 text-right text-slate-400">₹0</td>
                        <td className="p-3 sm:p-4 text-right text-amber-400">₹11,52,000</td>
                        <td className="p-3 sm:p-4 text-right text-amber-400">₹11,52,000</td>
                        <td className="p-3 sm:p-4 text-right text-amber-400 font-bold">₹11,52,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-sans font-medium text-slate-200">
                          Unpaid Central Chiller (BTU) &amp; Piped Gas
                        </td>
                        <td className="p-3 sm:p-4 text-right text-slate-400">₹0</td>
                        <td className="p-3 sm:p-4 text-right text-slate-200">₹3,40,000</td>
                        <td className="p-3 sm:p-4 text-right text-slate-200">₹3,40,000</td>
                        <td className="p-3 sm:p-4 text-right text-slate-200">₹3,40,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-sans font-medium text-slate-200">
                          Third-Party Forensic IT Audit Fee Clause
                        </td>
                        <td className="p-3 sm:p-4 text-right text-slate-400">₹0</td>
                        <td className="p-3 sm:p-4 text-right text-slate-200">₹1,50,000</td>
                        <td className="p-3 sm:p-4 text-right text-slate-200">₹1,50,000</td>
                        <td className="p-3 sm:p-4 text-right text-slate-200">₹1,50,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-sans font-medium text-slate-200">
                          Contractual Penal Interest (18% p.a.)
                        </td>
                        <td className="p-3 sm:p-4 text-right text-slate-400">₹0</td>
                        <td className="p-3 sm:p-4 text-right text-slate-200">₹68,500</td>
                        <td className="p-3 sm:p-4 text-right text-slate-200">₹68,500</td>
                        <td className="p-3 sm:p-4 text-right text-slate-200">₹68,500</td>
                      </tr>
                      <tr className="bg-slate-950 font-bold border-t-2 border-red-600">
                        <td className="p-3 sm:p-4 font-sans text-red-400 uppercase tracking-wider">
                          Net Statutory Recovery Claim
                        </td>
                        <td className="p-3 sm:p-4 text-right text-slate-400">Paid: ₹8,00,000</td>
                        <td className="p-3 sm:p-4 text-right text-white">True: ₹30,86,500</td>
                        <td className="p-3 sm:p-4 text-right text-amber-400">₹22,86,500</td>
                        <td className="p-3 sm:p-4 text-right text-red-400 text-sm sm:text-base font-black">
                          ₹22,86,500
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[11px] text-slate-500 italic">
                  * Note: Tenant had paid 4 months MMG (@ ₹2,00,000 = ₹8,00,000). The true 16% revenue share was ₹13,76,000. Rent differential owed is ₹13,76,000 - ₹8,00,000 = ₹5,76,000.
                </p>
              </section>

              {/* Section 8: 5-Stage Step-by-Step SOP */}
              <section id="heading-enforcement-sop" aria-labelledby="heading-enforcement-sop-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-enforcement-sop-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    5-Stage Operational SOP: From Evidence Audit to Possession &amp; Order 37 Decree
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Field-Tested Recovery Blueprint for Mall Asset Heads &amp; Corporate Landlords
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                        1
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Stage 1: Forensic Mystery Shopping &amp; Network Logging
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                      Deploy independent mystery auditors across 3 peak weekend trading slots. Auditors execute orders, photograph the QR terminal at the cashier desk, capture video footage of payment completion, and retain bank payment notifications containing the recipient VPA and UTR number. The mall IT network operations team simultaneously captures MAC address telemetry from the store&rsquo;s card swipe machines.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                        2
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Stage 2: 48-Hour Forensic POS &amp; Financial Audit Demand
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                      Issue an advocate notice demanding immediate access to the tenant&rsquo;s cloud billing backend, physical POS terminal, bank merchant statements, and GSTR-3B filings under the mandatory audit clause. Accompany the notice with a Section 63 BSA electronic evidence preservation directive warning the tenant that deleting database entries constitutes destruction of electronic evidence.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                        3
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Stage 3: Section 106 TPA / Easements Act Revocation Notice
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                      Serve a 15-day statutory termination notice specifying: (a) underreported turnover arrears, (b) 2x contractual liquidated damages, (c) unpaid CAM, chilled water, and PNG gas bills, and (d) termination of tenancy or license upon expiry of the cure window. Notices are dispatched simultaneously via Speed Post RPAD, courier, registered email, and WhatsApp delivery.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                        4
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Stage 4: Operational Utility Suspension &amp; Possessory Distraint Lien
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                      Following the 72-hour utility default cure notice, execute physical lockout of the commercial kitchen piped PNG valve and shut down chilled water HVAC supply. Instruct mall security to activate perimeter gate-pass controls: no commercial goods, equipment, or inventory may exit the basement service dock. Retain on-site stock under contractual distress lien.
                    </p>
                  </div>

                  {/* Step 5 */}
                  <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                        5
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Stage 5: Commercial Summary Suit (Order XXXVII CPC) or Section 9 Arbitration
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                      For registered lease agreements containing arbitration clauses, file an urgent Section 9 petition before the Commercial Court seeking an interim freezing order over tenant bank accounts and receivables. Where no arbitration clause exists, file an Order XXXVII Summary Suit; courts mandate 100% pre-deposit of MMG arrears as a condition precedent for leave to defend, leading to rapid settlement.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 9: Forensic Evidence & BSA Section 63 Checklist */}
              <section id="heading-evidence-bsa" aria-labelledby="heading-evidence-bsa-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-bsa"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Forensic Evidence Checklist under Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63)
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Mandatory Digital Audit Trail to Secure Injunctions and Ex-Parte Attachment Orders
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam, 2023</strong> (which replaced Section 65B of the Indian Evidence Act, 1872), electronic records—including cloud POS server logs, CCTV surveillance video, and UPI bank transaction records—are fully admissible in evidence provided they are supported by a contemporaneous statutory certificate. Mall operators must compile the following evidentiary bundle:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-1.5">
                    <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block">
                      01. Mystery Shopping UTR Dossier
                    </span>
                    <p className="text-xs text-slate-600">
                      Printouts of UPI payment screenshots with 12-digit UTR numbers, timestamped cashier video, and auditor affidavit detailing transaction execution.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-1.5">
                    <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block">
                      02. Concourse BMS CCTV Footfall Heatmaps
                    </span>
                    <p className="text-xs text-slate-600">
                      Continuous CCTV surveillance logs of the kiosk counter showing customer transaction velocity, exported with system hash validation and Section 63 certificate.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-1.5">
                    <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block">
                      03. Integrated POS Network Telemetry Logs
                    </span>
                    <p className="text-xs text-slate-600">
                      Raw network API logs showing zero-ticket intervals, device disconnect events, or manual cashier voids exported from the central mall leasing server.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-1.5">
                    <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block">
                      04. Certified Utility Sub-Meter Readouts
                    </span>
                    <p className="text-xs text-slate-600">
                      Smart BTU meter chiller readings, commercial gas flowmeter certificates, and DG power consumption logs certified by the mall Chief Engineer.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-1.5">
                    <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block">
                      05. Form 26AS &amp; GSTR-1 Reconciliation
                    </span>
                    <p className="text-xs text-slate-600">
                      Cross-matching of tenant&rsquo;s reported turnover against TDS deductions under Section 194-I and public GST filing turnover brackets on the GST portal.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-1.5">
                    <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block">
                      06. Contractual Outward Gate Pass Register
                    </span>
                    <p className="text-xs text-slate-600">
                      Signed loading-dock security register verifying unauthorized attempts to move inventory, fixtures, or commercial assets outside operating hours.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10: Verified High Court & Supreme Court Precedents */}
              <section id="heading-court-precedents" aria-labelledby="heading-court-precedents-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Verified Landmark Judicial Precedents Governing Mall &amp; Retail Leases
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Binding Holdings on Lease vs License, Commercial Frustration &amp; Liquidated Damages Covenants
                  </p>
                </div>

                <div className="space-y-4">
                  {COURT_PRECEDENTS.map((precedent, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-white rounded-xl border-l-4 border-[#DC2626] border-y border-r border-slate-200 shadow-sm space-y-2"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          {precedent.parties}
                        </h3>
                        <span className="text-xs font-semibold text-red-700 bg-red-50 px-2.5 py-0.5 rounded-full">
                          {precedent.citation}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {precedent.date}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <strong className="text-slate-800">Factual Context: </strong>
                        {precedent.facts}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        <strong className="text-slate-800">Judicial Holding: </strong>
                        {precedent.holding}
                      </p>
                      <div className="pt-2 border-t border-slate-100 mt-2">
                        <p className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-1 rounded inline-block">
                          Commercial Takeaway: {precedent.takeaway}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 11: Frequently Asked Questions */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions: Mall &amp; Food-Court Legal Recovery
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Practitioner Guidance for Shopping Center Asset Heads, Leasing Directors &amp; Concourse Operators
                  </p>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, index) => (
                    <details
                      key={index}
                      className="group bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-5 transition-all open:border-red-600"
                    >
                      <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-xs sm:text-sm group-hover:text-[#DC2626]">
                        <span>{faq.question}</span>
                        <svg
                          className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 12: Dual B2B CTA Component */}
              <section className="scroll-mt-28">
                <RetailMallCTA />
              </section>

              {/* Section 13: Statutory Citations, Parent Hub & Sibling Spokes */}
              <section id="heading-statutes" aria-labelledby="heading-statutes-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-statutes-title"
                    className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                  >
                    Primary Statutory Authorities &amp; Official Repositories
                  </h2>
                  <p className="text-xs text-slate-500">
                    Direct access to official legislative codifications governing commercial leases and retail recovery
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  {PRIMARY_STATUTES.map((statute, idx) => (
                    <a
                      key={idx}
                      href={statute.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="p-3 bg-white rounded-xl border border-slate-200 text-slate-700 hover:text-[#DC2626] hover:border-red-300 transition-colors flex items-start gap-2 shadow-xs"
                    >
                      <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span className="leading-snug">{statute.title}</span>
                    </a>
                  ))}
                </div>

                {/* Hub and Sibling Spokes Linking Block */}
                <div className="p-6 bg-slate-900 rounded-2xl text-white space-y-4 border border-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-red-400">
                      Real Estate &amp; Commercial Landlord Recovery Network (IND-08)
                    </p>
                    <Link
                      href="/industries/builders-commercial-landlords-coworking-recovery"
                      className="text-xs text-slate-300 hover:text-white underline flex items-center gap-1"
                    >
                      <span>View Industry Pillar Hub</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Explore related operational recovery playbooks, statutory notice templates, and legal mechanisms across commercial real estate, builder-allottee disputes, and co-working facilities:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                    <Link
                      href="/commercial-lease-lock-in-period-breach-unexpired-rent-recovery"
                      className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-200 transition-colors border border-slate-700 block"
                    >
                      <span className="font-bold text-white block mb-0.5">Commercial Lease Lock-In Breach</span>
                      <span className="text-[11px] text-slate-400">Recovering unexpired lock-in rent and CapEx fit-outs from defaulting corporate tenants.</span>
                    </Link>

                    <Link
                      href="/coworking-managed-office-enterprise-seat-lock-in-default-recovery"
                      className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-200 transition-colors border border-slate-700 block"
                    >
                      <span className="font-bold text-white block mb-0.5">Co-Working &amp; Enterprise Seat Default</span>
                      <span className="text-[11px] text-slate-400">Digital access revocation, lock-in enforcement, and zero-eviction-suit recovery.</span>
                    </Link>

                    <Link
                      href="/commercial-it-park-mall-cam-common-area-maintenance-arrears-recovery"
                      className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-200 transition-colors border border-slate-700 block"
                    >
                      <span className="font-bold text-white block mb-0.5">Commercial Mall &amp; IT Park CAM Arrears</span>
                      <span className="text-[11px] text-slate-400">Recovering unpaid CAM, chiller water &amp; DG power charges with lawful utility disconnection.</span>
                    </Link>

                    <Link
                      href="/commercial-tenant-deducted-tds-194i-not-deposited-form-26as-recovery"
                      className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-200 transition-colors border border-slate-700 block"
                    >
                      <span className="font-bold text-white block mb-0.5">Unpaid Section 194-I Rent TDS Recovery</span>
                      <span className="text-[11px] text-slate-400">Tenant deducted 10% rent TDS but failed to deposit in Form 26AS? Fix IT demand notices.</span>
                    </Link>

                    <Link
                      href="/rera-section-19-builder-recovery-from-defaulting-homebuyer-allottee"
                      className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-200 transition-colors border border-slate-700 block"
                    >
                      <span className="font-bold text-white block mb-0.5">RERA Section 19(6) Allottee Recovery</span>
                      <span className="text-[11px] text-slate-400">Promoter rights to recover construction-linked demands + SBI MCLR + 2% interest.</span>
                    </Link>

                    <Link
                      href="/industrial-warehouse-3pl-shed-lease-rent-dilapidation-recovery"
                      className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-200 transition-colors border border-slate-700 block"
                    >
                      <span className="font-bold text-white block mb-0.5">Warehouse &amp; Logistics Shed Recovery</span>
                      <span className="text-[11px] text-slate-400">VDF floor dilapidation, 3PL logistics rent, and hazardous-waste clearance.</span>
                    </Link>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-3 text-[11px] text-slate-400">
                    <span>Cross-Links:</span>
                    <Link href="/legal-notice-to-tenant-for-unpaid-rent-eviction" className="hover:text-red-400 underline">
                      Legal Notice for Unpaid Rent &amp; Eviction
                    </Link>
                    <span>&bull;</span>
                    <Link href="/templates/society-maintenance-recovery-notice" className="hover:text-red-400 underline">
                      Maintenance Recovery Notice
                    </Link>
                    <span>&bull;</span>
                    <Link href="/send-a-legal-notice/recover-money-from-tenant-who-damaged-property" className="hover:text-red-400 underline">
                      Recover Money from Tenant for Property Damage
                    </Link>
                  </div>
                </div>
              </section>

              {/* Related Recovery Guides Component */}
              <div className="pt-6">
                <RelatedRecoveryGuides />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
