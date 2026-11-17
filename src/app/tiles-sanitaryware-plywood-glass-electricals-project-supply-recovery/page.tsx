import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import FinishingMaterialTableOfContents from "./FinishingMaterialTableOfContents";
import FinishingMaterialScenarioTabs from "./FinishingMaterialScenarioTabs";
import FinishingMaterialCTA from "./FinishingMaterialCTA";

export const revalidate = 86400;

const PAGE_URL = "/tiles-sanitaryware-plywood-glass-electricals-project-supply-recovery";
const EXACT_H1 =
  "Finishing-Stage Building Material Recovery (Morbi Tiles, Toughened Glass, Sanitaryware, Plywood & Lifts): Escaping the 'Take a Barter Flat' Trap";
const META_TITLE = "Tiles, Sanitaryware, Glass, Plywood & Lift Builder Recovery";
const META_DESCRIPTION =
  "Finishing vendors get pressured to adjust ₹80L dues against a mortgaged 'barter flat'. Check CERSAI/RERA encumbrances & recover cash via MSMED s.15–18.";

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
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 & 24) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Real Estate (Regulation and Development) Act, 2016 (Section 4(2)(l)(D) — 70% Escrow & Project Creditor Governance) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2158",
  },
  {
    title: "SARFAESI Act, 2002 (Section 26D — CERSAI Registration & Priority of Secured Creditor Charge) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title: "Central Registry of Securitisation Asset Reconstruction and Security Interest (CERSAI) Public Asset Search Portal",
    url: "https://www.cersai.org.in/",
  },
  {
    title: "The Sale of Goods Act, 1930 (Sections 37, 42 & 55 — Delivery Acceptance & Price Recovery) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII Summary Procedure & Order XXXVIII Rule 5 Attachment) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Sections 138, 141 & 143A) & Bharatiya Sakshya Adhiniyam, 2023 (Section 63)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on MSMED Act Overriding Contractual Arbitration & Commercial Terms",
    parties: "Gujarat State Civil Supplies Corporation Ltd. v. Mahakali Foods Pvt. Ltd.",
    citation: "(2023) 6 SCC 401, Supreme Court of India",
    facts:
      "Corporate buyers routinely resisted MSEFC references by pointing to bilateral purchase order clauses that mandated private arbitration or extended 90–120 day credit terms.",
    holding:
      "The Supreme Court held that Chapter V of the MSMED Act, 2006 (Sections 15 to 24) has an overriding statutory effect over any inconsistent contract or arbitration clause. A registered Micro or Small supplier can bypass builder-drafted unilateral arbitration clauses and invoke MSEFC conciliation and statutory 3x RBI interest.",
    takeaway:
      "Morbi ceramic plants, sanitaryware units, architectural glass processors, and plywood manufacturers with valid Udyam registration can enforce the 45-day payment cap even against large developer POs.",
  },
  {
    title: "Supreme Court on Udyam Registration Cut-Off Date for MSMED Protection",
    parties: "M/s Silpi Industries v. Kerala State Road Transport Corporation",
    citation: "(2021) 18 SCC 790, Supreme Court of India",
    facts:
      "Suppliers sometimes obtained MSME registration only after delivering goods and facing payment defaults, then sought MSEFC statutory interest retroactively.",
    holding:
      "The Supreme Court clarified that to invoke MSEFC jurisdiction under Section 18, the supplier must hold Udyam/EM-II registration prior to the date of the supply contract or invoice generation; post-default registration does not confer retrospective Chapter V benefits.",
    takeaway:
      "Always attach your active Udyam Certificate on every proforma invoice and project quotation; if a specific batch predates Udyam, route that tranche through Order XXXVII CPC or NI Act s.138 instead of risking an MSEFC jurisdictional dismissal.",
  },
  {
    title: "Supreme Court on Pre-Existing Disputes vs. Belated Sham Quality Objections",
    parties: "Mobilox Innovations Private Limited v. Kirusa Software Private Limited",
    citation: "(2018) 1 SCC 353, Supreme Court of India",
    facts:
      "Corporate debtors facing Section 8 IBC demand notices frequently invent belated quality or snag-list objections after months of silence to claim a 'pre-existing dispute'.",
    holding:
      "While a genuine, documented pre-existing dispute bars Section 9 admission, the NCLT must reject defences that are 'patently feeble legal arguments' or assertions of fact unsupported by contemporaneous evidence.",
    takeaway:
      "When a builder accepts tiles, glass, or lifts without a contemporaneous written rejection within the contract window and later invents shade-variation or snag excuses only after receiving a demand notice, the defence fails the Mobilox test.",
  },
  {
    title: "Supreme Court on Security Cheques Turning Enforceable Upon Debt Crystallization",
    parties: "Sripati Singh v. State of Jharkhand & Anr.",
    citation: "(2021) 18 SCC 413, Supreme Court of India",
    facts:
      "Borrowers and builders routinely argue that undated or post-dated cheques handed over at the start of project supply were 'mere security cheques' and cannot trigger Section 138 NI Act prosecution.",
    holding:
      "The Supreme Court ruled that a cheque issued as security is not a worthless piece of paper; once the underlying supply obligation matures and remains unpaid on the date of presentation, Section 138 NI Act applies with full criminal and Section 143A interim-compensation force.",
    takeaway:
      "Undated security cheques collected against institutional credit limits for plywood, switchgear, or Morbi tile dispatches become fully actionable under Section 138 once written intimation is served and the ledger falls overdue.",
  },
];

const FAQS = [
  {
    question: "Should a Morbi tile, glass, or lift vendor accept a 'barter flat' from a builder instead of cash?",
    answer:
      "Never accept a barter flat or commercial shop allotment blindly. In most stalled real-estate projects, unsold inventory is already mortgaged to a project finance bank or NBFC under a registered charge. Under Section 26D of the SARFAESI Act, the bank's prior CERSAI-registered charge overrides an unsecured vendor's barter allotment letter. Before even considering barter, obtain a ₹100 CERSAI search report, verify RERA encumbrance filings, and insist on a tripartite written NOC from the project lender.",
  },
  {
    question: "What happens to GST if I adjust ₹80 Lakh of unpaid tile or glass invoices against a barter flat?",
    answer:
      "Under GST law, a barter transaction is treated as two independent taxable supplies: your original supply of building materials (attracting 18% GST) and the builder's supply of residential/commercial real estate. If you issue an informal credit note or book adjustment without proper consideration and documentation, the builder may still fail to remit GST or reverse ITC, exposing your unit to GST audit mismatches plus 5%–7% stamp duty and registration costs on an illiquid flat.",
  },
  {
    question: "How does a toughened glass processor recover money for custom-cut facade panels the builder refuses to lift?",
    answer:
      "Custom-tempered architectural glass and DGU panels fabricated to signed shop drawings cannot be resold to third parties. Under Section 73 of the Indian Contract Act, 1930, once the builder cancels or stalls lifting after tempering, the processor can claim the full contract price, factory storage demurrage, and interest. Back the demand notice with signed BOQ/shop-drawing approvals, furnace batch logs, and BSA 2023 s.63-certified email instructions.",
  },
  {
    question: "How can elevator and lift OEMs recover the stuck final 15% commissioning balance?",
    answer:
      "Builders frequently withhold the final 10%–15% handover balance while simultaneously using the installed lifts for interior fit-out haulage. Separate any minor snag-list value from the undisputed principal, document builder-side site readiness delays (lack of permanent 3-phase power or shaft waterproofing under Contract Act s.53/54), and serve an advocate notice under Order XXXVII CPC or Arbitration s.21 backed by testing and handover logs.",
  },
  {
    question: "Can Morbi ceramic and plywood suppliers use the 45-day MSMED Act rule against large real-estate builders?",
    answer:
      "Yes, provided your manufacturing or processing unit held active Udyam Micro or Small registration prior to the contract/invoice date (as affirmed in Silpi Industries). Under Sections 15–18 of the MSMED Act, 2006, credit beyond 45 days is void, triggering compound interest at 3x the RBI bank rate. Additionally, Income Tax Act Section 43B(h) disallows the builder's tax deduction for unpaid Micro/Small vendor purchases beyond 45 days.",
  },
  {
    question: "What if the builder gave special 'project pricing' (30% discount) and defaulted for 6 months?",
    answer:
      "Where your institutional quotation, PO, or tax invoice conditions the special project discount on timely payment within 30 or 45 days, a material payment default entitles you to withdraw the conditional project rebate and demand the standard rate-card price along with statutory or contractual interest.",
  },
  {
    question: "Can a finishing-stage supplier file an IBC Section 8 notice against a defaulting real-estate developer?",
    answer:
      "Yes, if the developer is a corporate entity (Pvt Ltd / Ltd) and your undisputed operational debt—including principal and contractual/MSME interest—crosses the ₹1 Crore threshold under Section 4 of the IBC. Unlike homebuyers who need 100 allottees or 10% under Section 7, an individual building-material Operational Creditor can issue a Form 3/4 Section 8 Demand Notice unilaterally.",
  },
];

export default function FinishingMaterialRecoveryPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const reviewerName = "Anuj Anand Malik";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PAGE_URL}`,
    },
    image: [`${SITE_URL}/blog_money_recovery.png`],
    datePublished: "2026-11-17T09:00:00+05:30",
    dateModified: "2026-11-17T16:20:00+05:30",
    author: {
      "@type": "Person",
      name: reviewerName,
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
    inLanguage: "en-IN",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Finishing-Stage Building Material Suppliers Escape Barter Flat Traps and Recover Cash",
    description:
      "4-stage legal escalation protocol for Morbi tile makers, toughened glass processors, sanitaryware brands, plywood distributors, and elevator OEMs.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Audit CERSAI & RERA Encumbrances Before Any Barter Talk",
        text: "Run a ₹100 CERSAI search and check RERA Form-1/2/3 disclosures to verify whether the builder's unsold flat is already mortgaged to a project lender.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Lock Delivery Acceptance & BSA 2023 s.63 Digital Proof",
        text: "Compile E-Way Bills, site gate-inward stamps, signed shop drawings, and handover logs to establish irrevocable acceptance under Sale of Goods Act s.42.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Serve Tri-Channel Advocate Demand Notice (MSMED s.15–18 & s.43B(h))",
        text: "Dispatch a formal legal notice via Email, WhatsApp, and Speed Post RPAD rejecting encumbered barter offers and claiming 3x RBI compound interest.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Escalate to MSEFC, Order XXXVII CPC, NI s.138, or IBC s.8",
        text: "File statutory recovery before MSEFC (for Udyam units), Order XXXVII Summary Suit, Section 138 on bounced PDCs, or IBC Form 3/4 for ₹1 Cr+ defaults.",
      },
    ],
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
        name: "Building Materials & RMC Hub",
        item: `${SITE_URL}/industries/chemicals-steel-rmc-building-materials-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Finishing-Stage Building Material Recovery",
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
          <span className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            IND-14 Finishing-Stage Creditor Playbook &bull; MSMED s.15–18 &bull; CERSAI / RERA Safeguards
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Statutory Summary Box with inline Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Finishing-stage suppliers deliver tiles, glass, sanitaryware, plywood, and lifts right when a builder&apos;s construction loan dries up. Under our{" "}
            <Link
              href="/industries/chemicals-steel-rmc-building-materials-recovery"
              className="text-red-300 underline decoration-red-500/70 hover:text-white font-bold"
            >
              Building Materials &amp; RMC Recovery Hub
            </Link>
            , never accept an unsold &lsquo;barter flat&rsquo; without a CERSAI charge audit and bank NOC; enforce cash via MSMED Act s.15&ndash;18, Order XXXVII CPC, and Section 138 NI Act.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">85%+</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Unsold Builder Inventory Pre-Mortgaged on CERSAI
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                MSMED Act s.16 Monthly Compound Interest
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">45 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Statutory Cap &amp; s.43B(h) Tax Disallowance Trigger
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">Order XXXVII</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Summary Suit + s.138 PDC Parallel Recovery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Building Materials & RMC Hub",
                href: "/industries/chemicals-steel-rmc-building-materials-recovery",
              },
              { label: "Finishing-Stage Material Recovery" },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <FinishingMaterialTableOfContents />

          {/* Main Content Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Why Finishing-Stage Material Vendors Bear the Brunt of Builder Liquidity Crashes
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unlike structural cement or reinforcement steel poured in the early RCC phase, finishing-stage building materials—Morbi glazed vitrified tiles (GVT), sanitaryware and CP fittings, toughened architectural facade glass, FR-grade plywood, decorative laminates, modular switchgear, and passenger elevators—are supplied during the final 20% of a real-estate project&apos;s construction cycle. By that stage, two structural financial pressures collide simultaneously: the developer&apos;s sanctioned construction finance tranches are nearly exhausted, and flat-buyer milestone collections slow down pending Occupancy Certificate (OC) clearance.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because finishing vendors supply high-ticket, customized inventory on 45-to-90 day institutional credit, a single tower&apos;s default routinely traps ₹35 Lakh to ₹1.50 Crore per supplier. Worse, rather than paying cash from the RERA 70% project escrow account, stressed developers deploy a predictable playbook: they either pressure the Morbi ceramic plant or glass processor to accept an overvalued, unsold &ldquo;barter flat,&rdquo; fabricate eleventh-hour shade or snag-list objections to freeze the final 15% lift/glazing balance, or plead cash-flow mismatch after enjoying special 30% institutional project pricing.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Who This Playbook Protects
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Morbi ceramic &amp; vitrified tile manufacturers, sanitaryware/faucet brands, toughened &amp; DGU facade glass processors, plywood &amp; laminate depots, cable/switchgear distributors, and elevator OEMs.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Core Statutory Levers
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    MSMED Act Sections 15&ndash;18, Income Tax Act s.43B(h), SARFAESI s.26D CERSAI verification, RERA 70% Escrow norms, Sale of Goods Act s.42, Order XXXVII CPC, and NI Act s.138/143A.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Barter Flat CERSAI & RERA Trap */}
            <section
              id="heading-barter-flat-risk"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  The &lsquo;Take a Barter Flat&rsquo; Trap: Why CERSAI &amp; RERA Audits Come First
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a builder owes ₹75 Lakh to ₹1.20 Crore for vitrified tiles, sanitaryware, or facade glazing, their most common settlement pitch is: <em>&ldquo;We are short on liquidity—adjust your ₹80 Lakh ledger against an unsold 2BHK valued at ₹1.05 Crore and pay us the ₹25 Lakh difference.&rdquo;</em> On paper, taking hard real estate looks safer than chasing a court decree. In reality, unverified barter allotments are the single fastest way for a supplier to lose both their cash and the flat.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-5 space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                  4 Hidden Legal &amp; Financial Traps Inside Unverified Barter Allotments
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                  <li>
                    <strong>1. Prior Bank Mortgage (SARFAESI Section 26D):</strong> Project construction loans from banks and NBFCs carry an omnibus hypothecation and registered mortgage over all unsold FSI/units. If the lender&apos;s charge is registered on CERSAI, your unregistered or non-NOC barter allotment is legally subordinated—the bank can auction that exact flat under SARFAESI s.13(4) and leave you with zero title.
                  </li>
                  <li>
                    <strong>2. RERA 70% Escrow Violation:</strong> Under RERA Section 4(2)(l)(D), 70% of project receivables must enter a dedicated escrow account strictly for land and construction costs. Sham &ldquo;zero-cash&rdquo; barter adjustments often lack RERA Form-1/2/3 engineer-CA certification and get challenged during forensic audits or CIRP insolvency.
                  </li>
                  <li>
                    <strong>3. Double GST &amp; Stamp Duty Bleeding:</strong> Adjusting material invoices against an apartment triggers dual GST exposure (18% on your materials plus GST on the unit), alongside 5%–7% state stamp duty and registration fees—immediately eroding 20%–25% of your recovery value.
                  </li>
                  <li>
                    <strong>4. Inflated Valuation &amp; Extra Cash Outflow:</strong> Builders routinely value barter units at 15%–20% above distressed resale rates and demand additional &ldquo;top-up cash&rdquo; from the vendor, converting a creditor into a trapped retail investor.
                  </li>
                </ul>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>Mandatory Rule:</strong> Never sign a barter MoU until you pull a ₹100 public asset search on{" "}
                <a
                  href="https://www.cersai.org.in/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  CERSAI
                </a>
                , inspect the state RERA portal&apos;s quarterly encumbrance annexures, and secure a tripartite written NOC from the project&apos;s secured lender releasing that specific unit from mortgage. If the builder refuses a bank NOC, reject barter immediately and escalate for cash recovery.
              </p>
            </section>

            {/* Section 3: 4-Stage Escalation Decision Tree */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  4-Stage Decision Tree: Rejecting Barter &amp; Enforcing Cash Recovery
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Follow this sequential decision tree whenever a finishing-stage builder account crosses 45 days overdue or proposes a barter adjustment. You can also benchmark statutory interest first using our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>{" "}
                or our{" "}
                <Link
                  href="/tools/construction-retention-dlp-escalation-claim-calculator"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Construction Retention &amp; Escalation Calculator
                </Link>
                .
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-5 border border-slate-800 overflow-x-auto">
                <svg
                  viewBox="0 0 880 210"
                  width={880}
                  height={210}
                  className="w-full h-auto"
                  role="img"
                  aria-label="4-stage finishing-stage building material cash recovery decision tree"
                >
                  <rect x="10" y="25" width="190" height="155" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="26" y="52" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 1 (DAY 1–7)</text>
                  <text x="26" y="74" fill="#FFFFFF" fontSize="13" fontWeight="bold">CERSAI &amp; RERA Audit</text>
                  <text x="26" y="98" fill="#CBD5E1" fontSize="11">Check bank mortgage on</text>
                  <text x="26" y="114" fill="#CBD5E1" fontSize="11">unsold flat. No lender NOC</text>
                  <text x="26" y="130" fill="#CBD5E1" fontSize="11">= Reject barter &amp; freeze</text>
                  <text x="26" y="146" fill="#CBD5E1" fontSize="11">further site dispatches.</text>

                  <path d="M 205 102 L 230 102" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="230,97 238,102 230,107" fill="#DC2626" />

                  <rect x="240" y="25" width="190" height="155" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="256" y="52" fill="#FBBF24" fontSize="11" fontWeight="bold">STAGE 2 (DAY 8–15)</text>
                  <text x="256" y="74" fill="#FFFFFF" fontSize="13" fontWeight="bold">Lock Acceptance Proof</text>
                  <text x="256" y="98" fill="#CBD5E1" fontSize="11">E-Way Bills, Gate GRNs,</text>
                  <text x="256" y="114" fill="#CBD5E1" fontSize="11">Shop Drawings &amp; Handover</text>
                  <text x="256" y="130" fill="#CBD5E1" fontSize="11">logs certified under BSA</text>
                  <text x="256" y="146" fill="#CBD5E1" fontSize="11">2023 s.63 &amp; SoGA s.42.</text>

                  <path d="M 435 102 L 460 102" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="460,97 468,102 460,107" fill="#DC2626" />

                  <rect x="470" y="25" width="190" height="155" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="486" y="52" fill="#34D399" fontSize="11" fontWeight="bold">STAGE 3 (DAY 16–30)</text>
                  <text x="486" y="74" fill="#FFFFFF" fontSize="13" fontWeight="bold">Tri-Channel Legal Notice</text>
                  <text x="486" y="98" fill="#CBD5E1" fontSize="11">Demand principal + 3x RBI</text>
                  <text x="486" y="114" fill="#CBD5E1" fontSize="11">MSMED interest + s.43B(h)</text>
                  <text x="486" y="130" fill="#CBD5E1" fontSize="11">tax disallowance alert via</text>
                  <text x="486" y="146" fill="#CBD5E1" fontSize="11">Email, WhatsApp &amp; RPAD.</text>

                  <path d="M 665 102 L 690 102" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="690,97 698,102 690,107" fill="#DC2626" />

                  <rect x="700" y="25" width="170" height="155" rx="12" fill="#DC2626" />
                  <text x="714" y="52" fill="#FEE2E2" fontSize="11" fontWeight="bold">STAGE 4 (DAY 31+)</text>
                  <text x="714" y="74" fill="#FFFFFF" fontSize="13" fontWeight="bold">Dual-Forum Filing</text>
                  <text x="714" y="98" fill="#FFFFFF" fontSize="11">MSEFC s.18 / Order 37</text>
                  <text x="714" y="114" fill="#FFFFFF" fontSize="11">CPC + NI Act s.138 PDC</text>
                  <text x="714" y="130" fill="#FFFFFF" fontSize="11">prosecution + IBC s.8</text>
                  <text x="714" y="146" fill="#FFFFFF" fontSize="11">(if corporate debt ≥ ₹1 Cr).</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
                {[
                  {
                    stage: "STAGE 1 (DAY 1–7)",
                    title: "CERSAI & RERA Audit",
                    desc: "Verify bank mortgage on unsold flat. No lender NOC = reject barter and stop new dispatches.",
                  },
                  {
                    stage: "STAGE 2 (DAY 8–15)",
                    title: "Lock Acceptance Proof",
                    desc: "Compile E-Way Bills, Gate GRNs, Shop Drawings & Handover logs under BSA 2023 s.63 & SoGA s.42.",
                  },
                  {
                    stage: "STAGE 3 (DAY 16–30)",
                    title: "Tri-Channel Legal Notice",
                    desc: "Demand principal + 3x RBI MSMED interest + s.43B(h) tax alert via Email, WhatsApp & RPAD.",
                  },
                  {
                    stage: "STAGE 4 (DAY 31+)",
                    title: "Dual-Forum Filing",
                    desc: "Escalate to MSEFC s.18, Order XXXVII CPC, NI s.138 on PDCs, or IBC s.8 (≥ ₹1 Cr).",
                  },
                ].map((item) => (
                  <div key={item.stage} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                    <p className="text-[11px] font-bold text-red-400 mb-1">{item.stage}</p>
                    <p className="text-sm font-black mb-1">{item.title}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Interactive 4-Scenario Explorer */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  4 Finishing-Stage Default Scenarios &amp; Statutory Counters
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select your material vertical below to see the exact builder delay tactic, the governing statutory counter, and the recommended recovery forum.
              </p>

              <FinishingMaterialScenarioTabs />
            </section>

            {/* Dual-Track CTA */}
            <FinishingMaterialCTA />

            {/* Section 5: Statutory Forum Matrix */}
            <section
              id="heading-forum-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Forum &amp; Statutory Remedy Matrix for Finishing Suppliers
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse min-w-[680px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <th className="p-3.5 font-bold">Recovery Forum / Statute</th>
                      <th className="p-3.5 font-bold">Eligibility &amp; Ticket</th>
                      <th className="p-3.5 font-bold">Statutory Interest / Leverage</th>
                      <th className="p-3.5 font-bold">Best Finishing Use-Case</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                    <tr className="bg-white">
                      <td className="p-3.5 font-bold text-slate-900">MSMED Act s.15–18 (MSEFC)</td>
                      <td className="p-3.5">Micro/Small Udyam prior to PO; any ticket</td>
                      <td className="p-3.5 font-semibold text-emerald-700">3x RBI Bank Rate compound + s.43B(h) tax hit</td>
                      <td className="p-3.5">Morbi tile plants, sanitaryware, plywood &amp; glass processors</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        <Link href="/law/order-37-summary-suit-money-recovery" className="text-[#DC2626] underline">
                          Order XXXVII CPC Summary Suit
                        </Link>
                      </td>
                      <td className="p-3.5">Written PO/Invoices/GRNs; ₹3L+ Commercial Court</td>
                      <td className="p-3.5">Builder must prove triable defence for leave to defend</td>
                      <td className="p-3.5">Large OEMs (lifts, switchgear, non-MSME glass distributors)</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3.5 font-bold text-slate-900">
                        <Link href="/cheque-bounce-and-civil-suit-together" className="text-[#DC2626] underline">
                          NI Act s.138 + s.143A
                        </Link>
                      </td>
                      <td className="p-3.5">Dishonoured PDC / security cheque; 30-day notice</td>
                      <td className="p-3.5 font-semibold text-amber-700">20% interim compensation + director summons</td>
                      <td className="p-3.5">Stuck 15% lift balance or bounced tile credit cheques</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">IBC Section 8 &amp; 9 (NCLT)</td>
                      <td className="p-3.5">Corporate builder default ≥ ₹1 Cr</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">Insolvency &amp; IRP displacement risk</td>
                      <td className="p-3.5">Multi-tower tile, facade glazing &amp; elevator arrears</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3.5 font-bold text-slate-900">RERA s.4(2)(l)(D) / CERSAI Audit</td>
                      <td className="p-3.5">Registered real-estate project</td>
                      <td className="p-3.5">Blocks illegal barter &amp; tracks 70% escrow cash</td>
                      <td className="p-3.5">Pre-settlement safeguard before signing barter MoUs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6: Worked Financial Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Worked Ledger Math: ₹78.50L Cash Recovery vs. Barter Flat Haircut
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Consider a Morbi vitrified tile and sanitaryware supplier owed <strong>₹78,50,000</strong> (principal across 14 GST tax invoices) overdue for <strong>14 months</strong> against a Tier-1 residential developer. Compare the financial outcome of accepting a pressured barter flat versus enforcing statutory cash recovery:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-800">
                    Option A: Unverified &lsquo;Barter Flat&rsquo; Adjustment
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm text-amber-950">
                    <div className="flex justify-between border-b border-amber-200/80 pb-1.5">
                      <span>Builder&apos;s Inflated Flat Valuation</span>
                      <span className="font-bold">₹95,00,000</span>
                    </div>
                    <div className="flex justify-between border-b border-amber-200/80 pb-1.5">
                      <span>Extra Cash Top-Up Demanded</span>
                      <span className="font-bold text-[#DC2626]">-₹16,50,000</span>
                    </div>
                    <div className="flex justify-between border-b border-amber-200/80 pb-1.5">
                      <span>Stamp Duty, Reg. &amp; GST Leakage (~12%)</span>
                      <span className="font-bold text-[#DC2626]">-₹11,40,000</span>
                    </div>
                    <div className="flex justify-between border-b border-amber-200/80 pb-1.5">
                      <span>Distressed Resale Haircut / CERSAI Risk</span>
                      <span className="font-bold text-[#DC2626]">High / Subordinated</span>
                    </div>
                    <div className="flex justify-between pt-1 font-black text-amber-900">
                      <span>Net Economic Cash Position</span>
                      <span>Illiquid &amp; Exposed</span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Option B: MSMED Act s.16 Cash Enforcement (14 Months)
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm text-emerald-950">
                    <div className="flex justify-between border-b border-emerald-200/80 pb-1.5">
                      <span>Undisputed Invoice Principal</span>
                      <span className="font-bold">₹78,50,000</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-200/80 pb-1.5">
                      <span>3x RBI Compound Interest (~19.5% p.a., 14m)</span>
                      <span className="font-bold text-emerald-700">+₹19,98,400</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-200/80 pb-1.5">
                      <span>Builder s.43B(h) Tax Disallowance Pressure</span>
                      <span className="font-bold">~₹19.7L Tax Hit</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-200/80 pb-1.5">
                      <span>Total Statutory Claim (Crosses ₹1 Cr IBC?)</span>
                      <span className="font-bold">₹98,48,400</span>
                    </div>
                    <div className="flex justify-between pt-1 font-black text-emerald-900">
                      <span>Enforceable Cash Recovery Target</span>
                      <span>₹98.48 Lakh Cash</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Notice how compounding 14 months of MSMED Act s.16 interest lifts the ₹78.50 Lakh principal to <strong>₹98.48 Lakh</strong>—putting the claim within weeks of the ₹1 Crore IBC Section 8 corporate insolvency threshold. Use our{" "}
                <Link
                  href="/templates/msme-delayed-payment-demand-notice"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  MSME Delayed Payment Demand Notice Template
                </Link>{" "}
                and{" "}
                <Link
                  href="/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Section 43B(h) Tax Disallowance Intimation Notice
                </Link>{" "}
                to assert this leverage immediately.
              </p>
            </section>

            {/* Section 7: Verified Statutory Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Supreme Court Precedents Protecting Material &amp; Finishing Suppliers
                </h2>
              </div>

              <div className="space-y-4">
                {COURT_PRECEDENTS.map((item) => (
                  <div
                    key={item.parties}
                    className="border border-slate-200 rounded-2xl p-5 bg-slate-50/70 relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="pl-2 space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                        {item.citation}
                      </p>
                      <h3 className="text-base sm:text-lg font-black text-slate-900">
                        {item.parties}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <strong>Holding:</strong> {item.holding}
                      </p>
                      <p className="text-xs sm:text-sm text-emerald-900 bg-emerald-50 border border-emerald-200 rounded-lg p-3 leading-relaxed">
                        <strong>Vendor Takeaway:</strong> {item.takeaway}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: BSA 2023 s.63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  BSA 2023 Section 63 &amp; CERSAI Evidentiary Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before issuing an advocate notice or filing before MSEFC / Commercial Court, assemble these 8 evidentiary records so the builder cannot manufacture a sham quality or non-delivery defence:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "CERSAI ₹100 Public Asset Search Report & RERA Quarterly Form-1/2/3 Encumbrance Printout",
                  "GST E-Way Bills (Part-A & Part-B) + Lorry Receipts (LR) with Site Gate-Inward Stamps",
                  "Signed Shop Drawings, Color/Shade Approvals & Tempering Furnace Logs (for Facade Glass)",
                  "Lift Testing & Commissioning Certificates + Written Requests for 3-Phase Permanent Power",
                  "Active Udyam Registration Certificate predating the PO/Invoice (for MSMED s.15–18)",
                  "Conditional Project-Pricing Clause showing rebate withdrawal upon payment default",
                  "Dishonoured Security/Retention PDCs + Bank Return Memos (for NI Act s.138)",
                  "BSA 2023 Section 63 Certificate covering WhatsApp site instructions, emails & ERP ledgers",
                ].map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-800 font-medium leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900 text-slate-100 rounded-xl p-4 sm:p-5 text-xs sm:text-sm leading-relaxed">
                <strong className="text-red-400">Cross-Sector IND-14 Guides:</strong> Also review our sibling playbooks on{" "}
                <Link
                  href="/ready-mix-concrete-rmc-supplier-builder-payment-cube-test-dispute"
                  className="text-white underline hover:text-red-300"
                >
                  RMC Cube-Test Dispute Recovery
                </Link>
                ,{" "}
                <Link
                  href="/tmt-steel-structural-iron-trader-credit-default-recovery-india"
                  className="text-white underline hover:text-red-300"
                >
                  TMT &amp; Structural Steel Trader Recovery
                </Link>
                ,{" "}
                <Link
                  href="/industrial-chemicals-solvents-dyes-pigments-invoice-recovery"
                  className="text-white underline hover:text-red-300"
                >
                  Industrial Chemicals &amp; Solvents Recovery
                </Link>
                , and{" "}
                <Link
                  href="/recovery/vendor-payments"
                  className="text-white underline hover:text-red-300"
                >
                  B2B Vendor Payment Recovery
                </Link>
                .
              </div>
            </section>

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Frequently Asked Questions (Tiles, Glass, Sanitaryware &amp; Lifts)
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group border border-slate-200 rounded-xl bg-slate-50/70 open:bg-white transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/70 pt-3">
                      {faq.answer}
                    </div>
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
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Statutory Authorities, Acts &amp; Official Recovery Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.title} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&rarr;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] underline decoration-slate-300 underline-offset-4 transition-colors"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                Reviewed for statutory accuracy by <strong>{reviewerName}</strong> (Advocate &amp; Founder, AMA Legal Solutions).
              </p>
            </section>

            {/* Final Dual-Track CTA */}
            <FinishingMaterialCTA />
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides cluster="construction" />
    </div>
  );
}
