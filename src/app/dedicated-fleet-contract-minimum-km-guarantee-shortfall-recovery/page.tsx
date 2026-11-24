import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import DedicatedFleetNoticeCTA from "./DedicatedFleetNoticeCTA";
import DedicatedFleetTableOfContents from "./DedicatedFleetTableOfContents";
import DedicatedFleetScenarioTabs from "./DedicatedFleetScenarioTabs";

export const revalidate = 86400;

const CANONICAL_URL = `${SITE_URL}/dedicated-fleet-contract-minimum-km-guarantee-shortfall-recovery`;
const PAGE_H1 =
  "Bought 20 Custom Trucks Against a 3-Year Dedicated Fleet Contract and the Shipper Cut Volumes? Enforcing Minimum-Km Guarantees & Lock-Ins";

export const metadata: Metadata = {
  title: "Dedicated Fleet Minimum-Km Guarantee Shortfall Recovery",
  description:
    "Recover fixed monthly standing charges, minimum-km shortfall, and unamortized vehicle loan CapEx when shippers cut dedicated truck fleet volumes.",
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "Dedicated Fleet Minimum-Km Guarantee Shortfall Recovery",
    description:
      "Recover fixed monthly standing charges, minimum-km shortfall, and unamortized vehicle loan CapEx when shippers cut dedicated truck fleet volumes.",
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Dedicated Fleet Minimum Km Guarantee Shortfall Recovery Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dedicated Fleet Minimum-Km Guarantee Shortfall Recovery",
    description:
      "Recover fixed monthly standing charges, minimum-km shortfall, and unamortized vehicle loan CapEx when shippers cut dedicated truck fleet volumes.",
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
    title: "The Indian Contract Act, 1872 (Section 73 — Compensation for Loss from Breach & Section 74 — Liquidated Damages)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "The Indian Contract Act, 1872 (Section 53 & Section 54 — Reciprocal Promises & Prevention of Performance)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "The Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure on Written Contracts & Debt Claims)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 2(1)(c)(xviii) — Commercial Disputes Pertaining to Carriage of Goods & Fleet Operations)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18 — Mandatory 45-Day Payment & 3x RBI Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records Admissibility for GPS Telematics & FASTag Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Liquidated Damages & Pre-Estimated Minimum Volume Commitments",
    parties: "Kailash Nath Associates v. Delhi Development Authority",
    citation: "(2015) 4 SCC 136, Supreme Court of India",
    date: "Judgment Dated 09 January 2015",
    facts:
      "A commercial contractor faced forfeiture of earnest money and claim of pre-estimated damages under Section 74 of the Indian Contract Act. The employer sought to forfeit sums without establishing whether any actual damage had been suffered.",
    holding:
      "The Supreme Court held that where a contract stipulates a genuine pre-estimate of loss agreed between commercial parties, and the loss is difficult or impossible to mathematically quantify at the time of breach, the liquidated sum specified in the agreement is fully recoverable without requiring minute proof of each constituent item of damage, provided it does not operate as an unconscionable penalty.",
    amount: "Liquidated Standing Commitments Enforceable Under Section 74",
    takeaway:
      "Agreed minimum-km guarantees and standing vehicle hire fees in dedicated Master Fleet Agreements represent enforceable pre-estimates of fixed capital deployment, not unlawful penalties.",
  },
  {
    title: "Supreme Court on Dedicated Capital Deployment & Liquidated Damages for Commercial Breach",
    parties: "Oil & Natural Gas Corporation Ltd. (ONGC) v. Saw Pipes Ltd.",
    citation: "(2003) 5 SCC 705, Supreme Court of India",
    date: "Judgment Dated 17 April 2003",
    facts:
      "A specialized supplier delayed delivery of high-grade casing pipes for offshore drilling operations. ONGC deducted liquidated damages stipulated in the contract. The supplier contended that ONGC suffered no actual financial loss because drilling operations were reorganized.",
    holding:
      "The Supreme Court affirmed that when commercial enterprises enter into contracts requiring dedicated asset mobilization and deployment, the agreed liquidated damage clause must be given full legal effect. If the terms are clear and unambiguous, the party committing the breach cannot evade liability by asserting that the other party mitigated or could have deployed its assets elsewhere.",
    amount: "Dedicated Asset Mobilization Damages Upheld",
    takeaway:
      "Shippers who induce fleet operators to purchase dedicated chassis and specialized custom containers cannot evade fixed standing commitments by directing the transporter to seek spot market loads.",
  },
  {
    title: "Supreme Court on Prohibition of Unilateral Debit Notes on Unadjudicated Claims",
    parties: "Union of India v. Raman Iron Foundry",
    citation: "(1974) 2 SCC 231, Supreme Court of India",
    date: "Judgment Dated 12 March 1974",
    facts:
      "The government purchaser unilaterally withheld and adjusted pending payments due to a supplier under one contract against an unadjudicated claim for damages arising under another purchase order.",
    holding:
      "The Supreme Court ruled that a claim for damages for breach of contract does not become a debt until it is formally adjudicated by a competent court or arbitral tribunal. A party has no right to unilaterally deduct or set off an unadjudicated claim against admitted dues or undisputed invoices payable for services rendered.",
    amount: "Unilateral Freight Deductions & Debit Notes Held Illegal",
    takeaway:
      "Shippers cannot unilaterally strike off minimum-km shortfall line items or deduct arbitrary service penalties from undisputed fixed standing invoices without prior judicial determination.",
  },
  {
    title: "Supreme Court on Frustration of Contract & Commercial Hardship",
    parties: "Energy Watchdog v. Central Electricity Regulatory Commission (CERC)",
    citation: "(2017) 14 SCC 80, Supreme Court of India",
    date: "Judgment Dated 11 April 2017",
    facts:
      "Power producers sought to terminate long-term Power Purchase Agreements (PPAs) or seek tariff revisions on grounds that unexpected changes in Indonesian coal export regulations escalated fuel costs, rendering contractual performance commercially unviable under Section 56 of the Contract Act.",
    holding:
      "The Supreme Court settled that commercial hardship, market demand downturns, route restructuring, or diminished business profitability do not constitute 'frustration of contract' under Section 56. A contract is not frustrated merely because the performance has become more onerous or financially burdensome for one party.",
    amount: "Commercial Downsizing Barred as Section 56 Defense",
    takeaway:
      "Corporate shippers cannot invoke force majeure or contract frustration to terminate dedicated fleet agreements merely because consumer demand, quick-commerce orders, or factory dispatches declined.",
  },
];

const FAQS = [
  {
    question: "Can a shipper terminate a dedicated fleet contract early without paying unamortized truck loan EMIs?",
    answer:
      "No. Under Sections 73 and 74 of the Indian Contract Act, 1872, where a fleet operator purchases specialized commercial vehicles (custom body containers, electric vans, or insulated reefers) specifically pursuant to a dedicated long-term contract with an agreed lock-in period, premature termination constitutes an actionable breach of contract. The fleet operator is entitled to recover all fixed standing charges for the unexpired lock-in period, including the unamortized body fabrication CapEx and unavoidable finance EMIs, less variable operational expenses (such as fuel and lubricants) that were not incurred due to vehicle idle standing.",
  },
  {
    question: "How is a minimum-kilometer guarantee shortfall legally calculated and billed?",
    answer:
      "A minimum-km guarantee shortfall is calculated monthly per vehicle or fleet cluster as: Shortfall Amount = (Contractual Minimum Guaranteed Kilometers - Actual GPS-Logged Driven Kilometers) x Shortfall Rate. Under standard industry contracts, the shortfall rate is either the full base per-kilometer rate (where the contract is composite) or the specific 'dry standing rate' (base rate minus the variable diesel cost component). Because the fleet owner maintained the vehicle, driver, and insurance in a state of continuous readiness, the shortfall is billed as a liquidated contractual charge under Section 70 and Section 74 of the Contract Act.",
  },
  {
    question: "What if the shipper claims contract frustration under Section 56 due to low market demand?",
    answer:
      "The Supreme Court in Energy Watchdog v. CERC (2017) firmly held that commercial unprofitability, demand slumps, corporate reorganization, or dark store network consolidations do not constitute frustration of contract under Section 56 of the Indian Contract Act. Dedicated fleet contracts represent bilateral risk allocation: the fleet operator assumes vehicle maintenance and financing risk, while the shipper assumes volume and route commitment risk. A unilateral reduction in shipper volume is a contractual default, not a frustrated agreement.",
  },
  {
    question: "Can a fleet operator recover standing charges if the trucks were idle and never left the hub?",
    answer:
      "Yes. Under Section 53 and Section 54 of the Indian Contract Act, when a contract consists of reciprocal promises and one party prevents the other from performing (for example, the shipper fails to provide daily route manifests or gate passes while the transporter maintains dedicated vehicles on standby), the defaulting party must compensate the aggrieved party for any loss sustained. By delivering formal daily email intimations of vehicle readiness backed by telematics GPS logs, the fleet operator establishes full readiness and is entitled to full fixed standing charges.",
  },
  {
    question: "Does the fleet operator have a duty to mitigate losses by taking spot market loads?",
    answer:
      "Under the Explanation to Section 73 of the Contract Act, an aggrieved party must take reasonable steps to mitigate losses. However, the Supreme Court has clarified that mitigation is assessed through commercial reasonableness. Dedicated trucks frequently feature custom cargo dimensions, non-standard cubic capacity, or corporate-branded vinyl wraps that cannot be deployed in the general spot market without substantial modification or de-branding costs. Furthermore, where vehicles are held on standby under contract terms, taking outside loads would breach exclusivity covenants. The fleet operator is only required to account for net earnings if outside work was actually obtained.",
  },
  {
    question: "How does MSME Samadhaan help logistics fleet operators recover minimum guarantee arrears?",
    answer:
      "If the fleet operator is registered under the MSMED Act, 2006 (Udyam Registration) as a Micro or Small enterprise for transport or logistics services, Section 15 mandates that shippers must pay all valid invoices within 45 days. Unilateral non-payment of minimum-km shortfall bills attracts compulsory penal interest under Section 16 at three times the RBI Bank Rate, compounded monthly. Filing a reference before the Micro and Small Enterprise Facilitation Council (MSEFC) under Section 18 bypasses standard court fees and triggers statutory conciliation and arbitration.",
  },
  {
    question: "Can corporate employee transport cab operators recover unserved lock-in notice periods?",
    answer:
      "Yes. Corporate employee transport agreements typically include an express lock-in clause or a mandatory 60-to-90 day advance written termination notice requirement. If an IT or corporate enterprise terminates the transport vendor with immediate effect or refuses to allocate rosters during the notice window, the vendor is legally entitled to recover the agreed fixed monthly vehicle hire charges for the entire notice period as liquidated debt under Section 74 of the Contract Act and Order XXXVII CPC.",
  },
];

const RECOVERABLE_HEADS = [
  {
    category: "Minimum-Km Shortfall Charges (Monthly Deficit)",
    statutoryBasis: "Indian Contract Act, 1872 — Section 74 (Agreed Liquidated Guarantee)",
    evidentiaryProof: "Master Fleet Agreement, monthly odometer logs, GPS distance audit, and GST shortfall tax invoices",
    shipperPretext: "'Only actual running kilometers are billable under transport law'",
    enforceability: "Liquidated debt enforceable in Commercial Court Order XXXVII summary suits.",
  },
  {
    category: "Fixed Monthly Vehicle Standing Charges",
    statutoryBasis: "Indian Contract Act, 1872 — Section 70 (Quantum Meruit) & Section 73 (Unavoidable Fixed Standing Loss)",
    evidentiaryProof: "NBFC commercial vehicle loan EMI receipts, commercial road tax, fitness, and insurance policies",
    shipperPretext: "'Trucks remained parked inside fleet yard and incurred zero wear-and-tear'",
    enforceability: "Recoverable as direct compensatory loss naturally arising in the usual course of business.",
  },
  {
    category: "Unamortized Custom Body / Reefer / EV CapEx",
    statutoryBasis: "Indian Contract Act, 1872 — Section 73 (Capital Expenditure Incurred in Reliance on Contract)",
    evidentiaryProof: "Chassis purchase invoices, body fabricator bills, refrigerated unit installation receipts, lease schedules",
    shipperPretext: "'Vehicle remains the private capital asset of the fleet operator'",
    enforceability: "Recoverable upon premature termination where specialized body dimensions destroy secondary market value.",
  },
  {
    category: "Driver & Crew Retainer Standby Wages",
    statutoryBasis: "Indian Contract Act, 1872 — Section 158 & Minimum Wages Act, 1948",
    evidentiaryProof: "Driver payroll bank transfer statements, biometric hub attendance logs, PF/ESI challans",
    shipperPretext: "'Driver costs are included in the per-km freight rate and vanish when routes stop'",
    enforceability: "Mandatory statutory wage disbursements incurred to preserve fleet readiness under shipper lock-in.",
  },
  {
    category: "Diesel Escalation & Formula Deficit Arrears",
    statutoryBasis: "Contractual Price Adjustment Clause & Contract Act Section 73",
    evidentiaryProof: "Official IOCL/BPCL bulk fuel rate circulars, fuel station smart card statements, contractual baseline formula",
    shipperPretext: "'Fuel adjustment was discretionary or subject to mutual annual reviews'",
    enforceability: "Actionable contractual debt enforceable under Commercial Courts Act Section 2(1)(c)(xviii).",
  },
  {
    category: "Unexpired Lock-In Early Termination Damages",
    statutoryBasis: "Indian Contract Act, 1872 — Section 74 & Specific Relief Act, 1963",
    evidentiaryProof: "Executed Master Fleet Agreement with lock-in covenant, formal termination letter, NBFC amortization schedules",
    shipperPretext: "'Early termination clauses are unenforceable penalties under Indian law'",
    enforceability: "Enforceable as pre-estimated liquidated damages under SC Kailash Nath and ONGC v. Saw Pipes rulings.",
  },
];

export default function DedicatedFleetShortfallRecoveryPage() {
  const breadcrumbItems = [
    { label: "Logistics & Freight Recovery", href: "/industries/logistics-freight-3pl-recovery" },
    {
      label: "Dedicated Fleet Minimum-Km Shortfall Recovery",
      href: "/dedicated-fleet-contract-minimum-km-guarantee-shortfall-recovery",
    },
  ];

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: PAGE_H1,
    description:
      "Recover fixed monthly standing charges, minimum-km shortfall, and unamortized vehicle loan CapEx when shippers cut dedicated truck fleet volumes.",
    image: [`${SITE_URL}/blog_money_recovery.png`],
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder",
      affiliation: {
        "@type": "Organization",
        name: "AMA Legal Solutions",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished: "2026-11-16T10:00:00+05:30",
    dateModified: "2026-11-16T10:00:00+05:30",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
  };

  const jsonLdFaq = {
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

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Legally Enforce Minimum-Km Guarantees and Recover Standing Charges from Defaulting Shippers",
    description:
      "A 6-stage statutory recovery protocol under the Indian Contract Act, Commercial Courts Act, and MSMED Act for dedicated truck fleet operators facing route cancellations.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Audit Vehicle Readiness & Telematics Data",
        text: "Extract and freeze IoT telematics, GPS geofence timestamps, and FASTag logs establishing 100% vehicle availability at designated hubs.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Reconcile Minimum-Km Shortfall & Fixed Standing Dues",
        text: "Generate separate monthly tax invoices for un-run minimum guaranteed kilometers and unavoidable standing loan EMIs pursuant to contractual formulas.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Serve 15-Day Fact-Verified Statutory Demand Notice",
        text: "Issue a formal demand notice under Sections 73 & 74 of the Indian Contract Act via Speed Post RPAD, WhatsApp, and Email with BSA 2023 s.63 certification.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Trigger MSME Samadhaan Reference or Pre-Institution Mediation",
        text: "Lodge an online reference before the MSEFC for 3x RBI compound interest or file under Section 12A of the Commercial Courts Act.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "File Order XXXVII CPC Summary Suit or Commercial Arbitration",
        text: "Institute summary proceedings in the Commercial Court for liquidated contract debt, seeking immediate bank attachment under Order 38 Rule 5.",
      },
    ],
  };

  const jsonLdBreadcrumbs = {
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
        name: "Logistics & Freight Recovery",
        item: `${SITE_URL}/industries/logistics-freight-3pl-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dedicated Fleet Minimum-Km Shortfall Recovery",
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span>Dedicated Fleet Recovery SOP</span>
            <span className="text-slate-400">&bull;</span>
            <span>Contract Act &sect;&sect; 73/74</span>
            <span className="text-slate-400">&bull;</span>
            <span>Commercial Courts Act</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {PAGE_H1}
          </h1>

          {/* Executive Statutory Summary Box below H1 */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Statutory Answer for Commercial Fleet Operators
            </span>
            When an e-commerce, FMCG, quick-commerce, or industrial enterprise breaches a 3-year dedicated fleet contract by slashing route kilometers or terminating early, the fleet owner is not left helpless under Indian law. Under Sections 73 and 74 of the Indian Contract Act, 1872, agreed minimum-kilometer guarantees and fixed monthly standing charges constitute enforceable liquidated commitments. Transporters and logistics vendors operating under our{" "}
            <Link
              href="/industries/logistics-freight-3pl-recovery"
              className="text-red-300 font-bold underline hover:text-white transition-colors"
            >
              Logistics &amp; 3PL Debt Recovery Hub
            </Link>{" "}
            are entitled to recover unamortized vehicle loan EMIs, driver standby wages, and minimum-km shortfalls through Commercial Court Order XXXVII summary suits and Section 18 MSMED Act references with 3x compound monthly interest.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">
                Contract Act &sect; 73/74
              </span>
              <span className="text-lg sm:text-2xl font-black text-slate-100 block">
                100% Liquidated
              </span>
              <span className="text-[11px] text-slate-300 block mt-1">
                Standing charges &amp; pre-estimated loss
              </span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">
                MSMED Act &sect; 16
              </span>
              <span className="text-lg sm:text-2xl font-black text-emerald-400 block">
                3x RBI Interest
              </span>
              <span className="text-[11px] text-slate-300 block mt-1">
                Compounded monthly on shortfall bills
              </span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">
                Unamortized CapEx
              </span>
              <span className="text-lg sm:text-2xl font-black text-amber-400 block">
                Zero Re-Sale Loss
              </span>
              <span className="text-[11px] text-slate-300 block mt-1">
                Custom body &amp; EV loan damages
              </span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">
                Commercial Court
              </span>
              <span className="text-lg sm:text-2xl font-black text-red-400 block">
                Order XXXVII
              </span>
              <span className="text-[11px] text-slate-300 block mt-1">
                Summary suit on written contracts
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* 2-Column Split: Sticky TOC + Main Column */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <DedicatedFleetTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* SECTION 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                  The Operational Asymmetry
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                The Dedicated Fleet Trap: 36-Month Lock-Ins vs. Route Slashing
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Across the Indian logistics landscape, a predatory commercial pattern has become systemic: hyper-growth e-commerce marketplaces, quick-commerce dark store chains, national FMCG conglomerates, and multinational BPOs persuade transport vendors to make massive capital investments. Fleet operators are induced to purchase 10 to 50 brand-new commercial vehicle chassis, fabricate bespoke 24-foot or 32-foot high-cube containers, equip refrigerated thermo-king units, or lease specialized electric commercial vehicle (EV) delivery vans.
                </p>
                <p>
                  These investments are signed on the strength of 36-month or 48-month Master Fleet Services Agreements containing explicit <strong>&ldquo;Minimum Monthly Guaranteed Kilometers&rdquo;</strong> (e.g., 3,500 km/month per vehicle) or a two-part tariff comprising a <strong>&ldquo;Fixed Monthly Vehicle Hire Fee&rdquo;</strong> (to cover loan EMIs, insurance, driver salaries, and fitness taxes) plus a <strong>&ldquo;Variable Running Per-Km Rate&rdquo;</strong> (to cover diesel, AdBlue, and tyre wear).
                </p>
                <p>
                  However, the moment consumer demand softens, venture capital funding tightens, or internal network planners restructure distribution corridors, corporate shippers execute unilateral cutbacks. Shippers arbitrarily slash route allocations by 60% to 80%, leave dedicated trucks parked idle inside transit yards, or terminate the contract with a casual 30-day email. When the fleet owner bills for the contractual minimum guarantee, the shipper issues a robotic rebuttal: <em>&ldquo;Our corporate policy pays solely for actual driven kilometers; paying for un-run trips is against internal audit guidelines.&rdquo;</em>
                </p>
                <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl">
                  <p className="font-bold text-slate-900 text-xs sm:text-sm">
                    The Financial Stranglehold on Transporters:
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 mt-1">
                    The fleet operator cannot simply &ldquo;deploy the trucks elsewhere.&rdquo; Specialized container bodies with proprietary dimensions, company vinyl branding, or EV vans mapped to proprietary charging infrastructure cannot be absorbed into spot market freight. The transporter remains trapped with compounding NBFC loan EMIs (averaging ₹45,000–₹65,000 per chassis per month), driver standby retainers, and imminent asset seizure by financiers. Under Indian jurisprudence, this unilateral shifting of business risk constitutes an actionable breach of contract.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 2: Contract Act Provisions */}
            <section
              id="heading-contract-act-damages"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Statutory Construction
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Contract Act ss. 73 &amp; 74: Standing Charges vs Unliquidated Loss
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  The legal defense against shipper volume cuts hinges on dissecting the true economic anatomy of a transport contract under the{" "}
                  <strong>Indian Contract Act, 1872</strong>. Shippers deliberately attempt to categorize minimum-km shortfall bills as &ldquo;unliquidated damages requiring strict proof of actual loss&rdquo; under Section 73, or label lock-in termination clauses as &ldquo;unenforceable penalties&rdquo; under Section 74. Both arguments collapse upon rigorous statutory examination.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <span className="inline-block px-2 py-0.5 rounded bg-slate-200 text-slate-800 text-[10px] font-black uppercase tracking-wider mb-2">
                      Section 73 &bull; Naturally Arising Losses
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      Fixed Standing Charges as Direct Compensatory Damages
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Section 73 entitles the aggrieved party to compensation for loss or damage that naturally arose in the usual course of things from the breach. When a fleet owner finances commercial vehicles specifically to service a dedicated shipper contract, monthly loan EMIs, national road permits, commercial fitness renewals, and driver standby wages are unavoidable fixed costs. These are not consequential or remote losses; they are direct standing expenses incurred exclusively to fulfill the shipper&rsquo;s continuous availability requirement.
                    </p>
                  </div>

                  <div className="bg-red-50/50 p-5 rounded-xl border border-red-200">
                    <span className="inline-block px-2 py-0.5 rounded bg-red-100 text-red-800 text-[10px] font-black uppercase tracking-wider mb-2">
                      Section 74 &bull; Genuine Pre-Estimate of Loss
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      Minimum-Km Commitments Are Not Penalties
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Section 74 permits recovery of a reasonable sum where a contract stipulates an amount to be paid in case of breach. In a dedicated fleet contract, the agreed minimum monthly guaranteed kilometers or fixed hire charge represents a negotiated, bilateral pre-estimate of the capital recovery necessary to amortize the fleet over the contract lifecycle. Because commercial parties negotiated the clause at arm&rsquo;s length, it constitutes an enforceable liquidated debt, not a penal forfeiture.
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
                  Sections 53 &amp; 54: Prevention of Performance &amp; Reciprocal Promises
                </h3>
                <p>
                  A dedicated fleet agreement embodies reciprocal promises: the fleet operator promises to keep 20 roadworthy trucks and drivers available at designated warehouse docks; the shipper promises to tender route indents and load manifests to meet the agreed monthly kilometer threshold. Under <strong>Section 53 of the Indian Contract Act</strong>, when one party prevents the other from performing its promise (by withholding route rosters or refusing gate entry), the contract becomes voidable at the option of the party prevented, and that party is entitled to compensation for any loss sustained.
                </p>
                <p>
                  Furthermore, under <strong>Section 70 of the Act (Quantum Meruit)</strong>, where a transporter provides vehicle standby readiness non-gratuitously and the shipper enjoys the commercial advantage of having dedicated reserve capacity on call, the shipper is bound in law to pay reasonable compensation for such availability. For broader commercial invoice dispute mechanisms, review our comprehensive{" "}
                  <Link
                    href="/recovery/unpaid-invoices"
                    className="text-[#DC2626] font-semibold underline hover:text-red-700"
                  >
                    Unpaid Business Invoices Legal Recovery Guide
                  </Link>.
                </p>
              </div>
            </section>

            {/* SECTION 3: Court Precedents */}
            <section
              id="heading-court-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Judicial Authorities
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Supreme Court Jurisprudence on Lock-In Damages &amp; Minimum Guarantees
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Indian commercial courts and arbitral tribunals consistently uphold minimum volume guarantees, lock-in compensation, and the illegality of unilateral freight deductions. The following binding rulings form the bedrock of creditor enforcement for dedicated fleet operators:
              </p>

              <div className="space-y-5">
                {COURT_PRECEDENTS.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-slate-50 border border-slate-200 border-l-4 border-l-[#DC2626] shadow-sm"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wide">
                        {item.citation}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">{item.date}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-700 italic mb-3">
                      {item.parties}
                    </p>
                    <div className="text-xs sm:text-sm text-slate-600 space-y-2 mb-3">
                      <p>
                        <strong className="text-slate-800">The Facts:</strong> {item.facts}
                      </p>
                      <p>
                        <strong className="text-slate-800">The Ruling:</strong> {item.holding}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="font-bold text-slate-800 bg-white px-2.5 py-1 rounded border border-slate-200">
                        {item.amount}
                      </span>
                      <span className="text-[#DC2626] font-bold">
                        Fleet Takeaway: {item.takeaway}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 4: Decision Tree Flowchart */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Operational SOP
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Dedicated Fleet Default &amp; Shortfall Escalation Decision Tree
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                When a shipper cuts route volumes or intimates premature contract cancellation, fleet operators must execute a calibrated 5-stage statutory escalation protocol to protect financial claims and prevent statutory limitation expiry.
              </p>

              {/* Desktop SVG Decision Tree (960x480) */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-950 p-6 rounded-2xl border border-slate-800 my-6 shadow-xl">
                <svg
                  viewBox="0 0 960 480"
                  className="w-full h-auto text-white select-none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={960}
                  height={480}
                >
                  <rect width="960" height="480" fill="#0B1120" rx="16" />

                  {/* Flow Steps */}
                  {/* Step 1 */}
                  <g transform="translate(40, 50)">
                    <rect width="240" height="150" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="20" y="35" fill="#EF4444" fontSize="12" fontWeight="bold">STAGE 01 &bull; DAY 1–7</text>
                    <text x="20" y="65" fill="#F8FAFC" fontSize="14" fontWeight="bold">Shortfall / Volume Breach</text>
                    <text x="20" y="90" fill="#94A3B8" fontSize="11">Shipper cuts routes by &gt;25%</text>
                    <text x="20" y="110" fill="#94A3B8" fontSize="11">Freeze IoT GPS &amp; Telematics data</text>
                    <text x="20" y="130" fill="#94A3B8" fontSize="11">Issue Daily Hub Standby Notices</text>
                  </g>

                  {/* Arrow 1 -> 2 */}
                  <path d="M 280 125 L 340 125" stroke="#DC2626" strokeWidth="3" markerEnd="url(#red-arrow)" />

                  {/* Step 2 */}
                  <g transform="translate(360, 50)">
                    <rect width="240" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                    <text x="20" y="35" fill="#38BDF8" fontSize="12" fontWeight="bold">STAGE 02 &bull; DAY 8–15</text>
                    <text x="20" y="65" fill="#F8FAFC" fontSize="14" fontWeight="bold">Reconcile Financial Claim</text>
                    <text x="20" y="90" fill="#94A3B8" fontSize="11">Separate Fixed Hire vs Shortfall</text>
                    <text x="20" y="110" fill="#94A3B8" fontSize="11">Deduct unspent diesel savings</text>
                    <text x="20" y="130" fill="#94A3B8" fontSize="11">Add unamortized CapEx &amp; EMIs</text>
                  </g>

                  {/* Arrow 2 -> 3 */}
                  <path d="M 600 125 L 660 125" stroke="#475569" strokeWidth="3" markerEnd="url(#slate-arrow)" />

                  {/* Step 3 */}
                  <g transform="translate(680, 50)">
                    <rect width="240" height="150" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="20" y="35" fill="#EF4444" fontSize="12" fontWeight="bold">STAGE 03 &bull; DAY 16–30</text>
                    <text x="20" y="65" fill="#F8FAFC" fontSize="14" fontWeight="bold">15-Day Advocate Notice</text>
                    <text x="20" y="90" fill="#94A3B8" fontSize="11">Contract Act s.73/74 Demand</text>
                    <text x="20" y="110" fill="#94A3B8" fontSize="11">Speed Post RPAD + WATI WhatsApp</text>
                    <text x="20" y="130" fill="#94A3B8" fontSize="11">Attach BSA s.63 Certificate</text>
                  </g>

                  {/* Branching Arrows Downwards */}
                  <path d="M 800 200 L 800 270" stroke="#DC2626" strokeWidth="3" />
                  <path d="M 800 270 L 520 270" stroke="#DC2626" strokeWidth="3" />
                  <path d="M 520 270 L 520 310" stroke="#DC2626" strokeWidth="3" markerEnd="url(#red-arrow)" />
                  <path d="M 800 270 L 800 310" stroke="#DC2626" strokeWidth="3" markerEnd="url(#red-arrow)" />

                  {/* Step 4A: MSME Fast Track */}
                  <g transform="translate(380, 310)">
                    <rect width="280" height="135" rx="12" fill="#14532D" stroke="#22C55E" strokeWidth="2" />
                    <text x="20" y="30" fill="#86EFAC" fontSize="12" fontWeight="bold">STAGE 04A &bull; MSME TRACK</text>
                    <text x="20" y="55" fill="#F8FAFC" fontSize="14" fontWeight="bold">MSEFC Samadhaan Filing</text>
                    <text x="20" y="80" fill="#DCFCE7" fontSize="11">MSMED Act s.18 Statutory Conciliation</text>
                    <text x="20" y="100" fill="#DCFCE7" fontSize="11">3x RBI Compound Monthly Interest</text>
                    <text x="20" y="120" fill="#DCFCE7" fontSize="11">Section 43B(h) Corporate Tax Audit Alert</text>
                  </g>

                  {/* Step 4B: Commercial Court / Summary Suit */}
                  <g transform="translate(680, 310)">
                    <rect width="240" height="135" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="20" y="30" fill="#EF4444" fontSize="12" fontWeight="bold">STAGE 04B &bull; JUDICIAL SUIT</text>
                    <text x="20" y="55" fill="#F8FAFC" fontSize="14" fontWeight="bold">Order XXXVII CPC Suit</text>
                    <text x="20" y="80" fill="#94A3B8" fontSize="11">Commercial Court Summary Recovery</text>
                    <text x="20" y="100" fill="#94A3B8" fontSize="11">Order 38 Rule 5 Account Freeze</text>
                    <text x="20" y="120" fill="#94A3B8" fontSize="11">Enforce Arbitration Clause if present</text>
                  </g>

                  {/* Markers */}
                  <defs>
                    <marker id="red-arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
                      <path d="M 0 0 L 6 3 L 0 6 z" fill="#DC2626" />
                    </marker>
                    <marker id="slate-arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
                      <path d="M 0 0 L 6 3 L 0 6 z" fill="#475569" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Mobile Stacked Cards for Decision Tree */}
              <div className="md:hidden space-y-3 my-4">
                <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-red-500">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                    Stage 01 &bull; Day 1–7
                  </span>
                  <p className="text-sm font-bold">Volume Slashing Intimation &amp; Telematics Freeze</p>
                  <p className="text-xs text-slate-300 mt-1">
                    Shipper cuts scheduled routes. Extract and notarize IoT GPS telematics, driver duty rosters, and FASTag logs establishing full vehicle readiness at loading hubs.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-slate-500">
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block mb-1">
                    Stage 02 &bull; Day 8–15
                  </span>
                  <p className="text-sm font-bold">Financial Reconciliation &amp; Mitigation Audit</p>
                  <p className="text-xs text-slate-300 mt-1">
                    Calculate monthly minimum-km shortfall bills. Deduct unspent diesel and variable running expenses to arrive at enforceable fixed standing loss and unamortized CapEx.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-red-500">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                    Stage 03 &bull; Day 16–30
                  </span>
                  <p className="text-sm font-bold">15-Day Advocate Statutory Demand Notice</p>
                  <p className="text-xs text-slate-300 mt-1">
                    Serve formal legal notice via Speed Post RPAD, WhatsApp, and Email under Contract Act s.73/74 with BSA 2023 Section 63 electronic delivery certification.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-emerald-500">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                    Stage 04 &bull; Judicial Enforcement
                  </span>
                  <p className="text-sm font-bold">MSEFC Samadhaan / Commercial Court Summary Suit</p>
                  <p className="text-xs text-slate-300 mt-1">
                    File under MSMED Act Section 18 for 3x RBI compound interest or institute an Order XXXVII CPC Summary Suit in the Commercial Court with Order 38 Rule 5 asset attachment.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 5: Statutory Recovery Matrix */}
            <section
              id="heading-recovery-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Heads of Claim
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Statutory Recovery Matrix: Fixed Hire, Shortfall &amp; Unamortized CapEx
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Shipper legal teams routinely advance formulaic excuses to justify volume cuts. The table below matches each recoverable commercial head against its statutory basis, evidentiary proof, and judicial counter-defense:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm my-4">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white text-[11px] uppercase tracking-wider">
                    <tr>
                      <th className="p-3.5 font-bold">Recoverable Head</th>
                      <th className="p-3.5 font-bold">Statutory Authority</th>
                      <th className="p-3.5 font-bold">Shipper Pretext &amp; Defense</th>
                      <th className="p-3.5 font-bold">Enforceability &amp; Forum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {RECOVERABLE_HEADS.map((head, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900 align-top">
                          {head.category}
                          <span className="block text-[11px] text-slate-500 font-normal mt-1">
                            Proof: {head.evidentiaryProof}
                          </span>
                        </td>
                        <td className="p-3.5 text-slate-700 align-top font-medium">
                          {head.statutoryBasis}
                        </td>
                        <td className="p-3.5 text-amber-900 bg-amber-50/50 align-top italic">
                          {head.shipperPretext}
                        </td>
                        <td className="p-3.5 text-emerald-800 bg-emerald-50/40 align-top font-semibold">
                          {head.enforceability}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 6: 4 Commercial Failure Mode Scenarios */}
            <section
              id="heading-failure-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Case Archetypes
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                4 Fleet Breach Scenarios: Quick-Commerce, EV Vans, Milk-Run &amp; Cabs
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Examine how legal recovery strategies adapt across specific commercial fleet sectors, including dark store delivery fleets, long-haul line-hauls, dairy milk-runs, and corporate employee transport vendors:
              </p>

              {/* Interactive Scenario Tabs Island */}
              <DedicatedFleetScenarioTabs />
            </section>

            {/* SECTION 7: Worked Financial Ledger */}
            <section
              id="heading-worked-calculation"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Financial Quantification
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Worked Financial Ledger: 20 Custom Trucks 36-Month Contract Breach
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  To illustrate how commercial damages are quantified for trial before a Commercial Division judge or arbitral panel, consider an actual institutional dispute: A fleet operator deployed 20 custom 24-foot containerized trucks on a 36-month dedicated distribution contract for an e-commerce grocery anchor.
                </p>

                {/* Contract Parameters */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div>
                    <span className="block font-bold text-slate-500 uppercase tracking-wider text-[10px]">
                      Fleet Scale &amp; Term
                    </span>
                    <span className="text-sm font-bold text-slate-900">20 Trucks &bull; 36 Months Lock-in</span>
                  </div>
                  <div>
                    <span className="block font-bold text-slate-500 uppercase tracking-wider text-[10px]">
                      Agreed Minimum Guarantee
                    </span>
                    <span className="text-sm font-bold text-slate-900">3,500 km/mo @ ₹46/km (₹1.61L/truck)</span>
                  </div>
                  <div>
                    <span className="block font-bold text-slate-500 uppercase tracking-wider text-[10px]">
                      Breach Event
                    </span>
                    <span className="text-sm font-bold text-[#DC2626]">Terminated at Month 14 (22 Mo. Left)</span>
                  </div>
                </div>

                {/* Ledger Breakdown Card */}
                <div className="rounded-xl bg-slate-900 text-white p-5 sm:p-6 border border-slate-800 shadow-xl my-6">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                      Liquidated Statement of Commercial Claim (Commercial Courts Act Schedule I)
                    </span>
                    <span className="text-xs text-emerald-400 font-mono font-bold">
                      Certified Audit Ledger
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm font-mono">
                    <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                      <span className="text-slate-300">
                        1. Unpaid Monthly Shortfall Invoices (Months 10–14, 5 months x 20 trucks)
                      </span>
                      <span className="text-white font-bold">₹28,40,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                      <span className="text-slate-300">
                        2. Unexpired Lock-In Standing Charges (22 months x 20 trucks @ Fixed Base ₹85,000)
                      </span>
                      <span className="text-white font-bold">₹3,74,00,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800/60 text-emerald-400">
                      <span>
                        3. Less: Mitigated Operational Savings (Fuel, Toll, Tyre Wear Not Incurred)
                      </span>
                      <span className="font-bold">(-) ₹2,61,80,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800/60 bg-white/5 px-2 rounded">
                      <span className="text-slate-200 font-bold">
                        Net Unavoidable Standing Vehicle Financing &amp; Maintenance Loss
                      </span>
                      <span className="text-amber-400 font-bold">₹1,12,20,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                      <span className="text-slate-300">
                        4. Unamortized Custom Body Fabrication CapEx (20 trucks @ ₹2.10L unamortized balance)
                      </span>
                      <span className="text-white font-bold">₹42,00,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                      <span className="text-slate-300">
                        5. Statutory Compound Interest (MSMED Act s.16 @ 3x RBI Bank Rate ~ 19.5% p.a.)
                      </span>
                      <span className="text-white font-bold">₹19,25,000</span>
                    </div>
                    <div className="flex justify-between pt-3 text-sm sm:text-base font-bold text-emerald-400 border-t-2 border-emerald-500">
                      <span>TOTAL RECOVERABLE COMMERCIAL CLAIM:</span>
                      <span className="text-emerald-300 font-black">₹2,01,85,000</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-500 italic">
                  *Note: Calculation demonstrates compliant mitigation accounting pursuant to the Explanation to Section 73 of the Indian Contract Act. By deducting variable running expenses not incurred while keeping fixed standing EMIs and unamortized body fabrication intact, the claim withstands any judicial challenge alleging penal damages.
                </p>
              </div>
            </section>

            {/* SECTION 8: BSA 2023 Evidence Dossier */}
            <section
              id="heading-bsa-evidence"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Evidentiary Architecture
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                BSA 2023 Section 63 Evidence Dossier: Telematics, GPS &amp; Gate Passes
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Under the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, which superseded the Indian Evidence Act, 1872 on 1 July 2024, Section 63 governs the admissibility of electronic records. In dedicated fleet litigation, electronic telemetry represents the ultimate objective proof of vehicle availability and shipper default.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 text-xs">
                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-800 block mb-1">
                      1. AIS-140 GPS &amp; Telematics Geofencing Logs
                    </span>
                    <p className="text-slate-600">
                      Cryptographically hashed server logs proving that vehicles were parked inside designated shipper hub geofences and remained ready for dispatch at 06:00 AM daily.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-800 block mb-1">
                      2. NETC FASTag Electronic Toll Statements
                    </span>
                    <p className="text-slate-600">
                      Bank FASTag transaction logs proving actual corridor runs, verifying exact highway toll plazas crossed, and corroborating odometer readings against shipper route indents.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-800 block mb-1">
                      3. Shipper ERP / TMS Run-Sheets &amp; Indents
                    </span>
                    <p className="text-slate-600">
                      Exported TMS dispatch orders and delivery run-sheets demonstrating the date and time when the shipper slashed daily trips from standard 2 runs/day to zero runs.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-800 block mb-1">
                      4. NBFC Chassis Loan Sanction &amp; EMI Receipts
                    </span>
                    <p className="text-slate-600">
                      Loan sanction letters, hypothecation records, and monthly bank repayment debits proving unamortized capital financing tied directly to contract execution dates.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-800 block mb-1">
                      5. Body Fabricator &amp; Reefer Invoices
                    </span>
                    <p className="text-slate-600">
                      Itemized fabrication tax invoices, engineering drawings, and GST payment receipts proving customized dimensions demanded by the shipper&rsquo;s pallet specifications.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-800 block mb-1">
                      6. Section 63 BSA Electronic Certificate
                    </span>
                    <p className="text-slate-600">
                      Mandatory statutory affidavit executed by the fleet management systems administrator certifying hash integrity, server uptime, and chain-of-custody of digital logs.
                    </p>
                  </div>
                </div>

                <p>
                  When physical detention or halting occurs during loading/unloading operations at shipper hubs, review our specialized guide on{" "}
                  <Link
                    href="/truck-detention-halting-charges-container-demurrage-recovery"
                    className="text-[#DC2626] font-semibold underline hover:text-red-700"
                  >
                    Truck Detention &amp; Halting Charges Legal Recovery
                  </Link>.
                </p>
              </div>
            </section>

            {/* SECTION 9: Judicial Remedies */}
            <section
              id="heading-judicial-remedies"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Litigation Channels
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Expedited Judicial Remedies: MSMED Act, Summary Suit &amp; Asset Freeze
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Fleet operators cannot afford 5-year traditional civil suits while NBFC loan interest compounds monthly. Our legal recovery protocol deploys three accelerated judicial mechanisms to freeze debtor assets and force commercial settlement within 60 to 120 days:
                </p>

                <div className="space-y-4 my-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      1. Order XXXVII CPC Summary Suit in Commercial Court
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Where the Master Fleet Agreement contains agreed minimum kilometer rates or liquidated standing charges, the claim qualifies as a &ldquo;liquidated demand in money arising on a written contract.&rdquo; Under{" "}
                      <Link
                        href="/law/order-37-summary-suit-money-recovery"
                        className="text-[#DC2626] font-semibold underline hover:text-red-700"
                      >
                        Order XXXVII of the Code of Civil Procedure, 1908
                      </Link>
                      , the defendant shipper has no automatic right to defend. The shipper must apply for &ldquo;leave to defend&rdquo; within 10 days of summons, which the Commercial Court will refuse or condition upon depositing 50% to 100% of the disputed sum into court if the defense is illusory.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      2. MSMED Act Section 18 Statutory Arbitration &amp; Section 43B(h) Sanction
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Micro and Small fleet operators registered on Udyam can initiate proceedings before the Micro and Small Enterprise Facilitation Council (MSEFC). Shippers must pay within 45 days under Section 15; unpaid sums attract compulsory compound monthly interest at 3x the RBI Bank Rate under Section 16. Furthermore, under Section 43B(h) of the Income Tax Act, corporate buyers who default on MSME transport invoices cannot claim tax deductions for these expenses, triggering immediate corporate tax liabilities. Calculate your exact statutory interest using our{" "}
                      <Link
                        href="/tools/msme-delayed-payment-interest-calculator"
                        className="text-[#DC2626] font-semibold underline hover:text-red-700"
                      >
                        MSME Delayed Payment Interest Calculator
                      </Link>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      3. Order XXXVIII Rule 5 CPC: Attachment Before Judgment
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      If the shipper is an asset-light e-commerce aggregator or quick-commerce venture burning capital, the fleet operator can petition the Commercial Court under Order XXXVIII Rule 5 CPC for an interim attachment of the debtor&rsquo;s bank accounts, receivables, or hub inventory before final judgment. For carriers holding unpaid freight bills across ongoing shipments, see our analysis on{" "}
                      <Link
                        href="/transporter-carrier-lien-holding-cargo-unpaid-freight-carriage-act"
                        className="text-[#DC2626] font-semibold underline hover:text-red-700"
                      >
                        Transporter Right of Lien &amp; Cargo Retention Under Carriage Act
                      </Link>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Legal Clarifications
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Frequently Asked Questions: Dedicated Fleet Minimum-Km Shortfall
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Direct statutory answers to common commercial dilemmas faced by dedicated fleet owners, corporate cab vendors, and electric vehicle logistics operators:
              </p>

              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 sm:p-5 transition-colors open:bg-white open:shadow-sm"
                  >
                    <summary className="flex items-center justify-between gap-3 font-bold text-xs sm:text-sm md:text-base text-slate-900 cursor-pointer list-none select-none">
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />
                        <span>{faq.question}</span>
                      </span>
                      <svg
                        className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-200/80 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* SECTION 11: Statutory Citations */}
            <section
              id="heading-statutory-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Primary Sources
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Statutory Authorities, Legal Precedents &amp; Transport Regulations
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                Review the primary bare acts and official legislative enactments governing commercial vehicle fleet contracts, minimum guarantees, and summary debt recovery in India:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {PRIMARY_SOURCES.map((source, index) => (
                  <a
                    key={index}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100/70 transition-all flex items-start gap-2.5 group"
                  >
                    <span className="text-[#DC2626] font-bold text-sm shrink-0">&sect;</span>
                    <span className="text-slate-700 font-medium group-hover:text-slate-900 group-hover:underline">
                      {source.title}
                    </span>
                  </a>
                ))}
              </div>

              {/* Attribution */}
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-2">
                <span>
                  Author: <strong>Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions
                </span>
                <span>// TODO(reviewer): src/data/reviewers.ts is absent in this repository</span>
              </div>
            </section>

            {/* Bottom Dual-Track CTA */}
            <DedicatedFleetNoticeCTA />
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
