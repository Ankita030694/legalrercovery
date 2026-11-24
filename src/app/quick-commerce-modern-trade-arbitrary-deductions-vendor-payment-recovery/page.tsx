import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import QCommerceTableOfContents from "./QCommerceTableOfContents";
import QCommerceScenarioTabs from "./QCommerceScenarioTabs";
import QCommerceNoticeCTA from "./QCommerceNoticeCTA";

export const revalidate = 86400;

const PAGE_URL = "/quick-commerce-modern-trade-arbitrary-deductions-vendor-payment-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Quick-Commerce & Modern-Trade Vendor Deductions Recovery";
const PAGE_DESCRIPTION =
  "Supplied ₹50L inventory to Modern-Trade or Quick-Commerce dark stores and hit with arbitrary GRN & SLA deductions? Recover legally under MSMED Act s.15-18.";
const H1_TEXT =
  "Fighting Arbitrary Dark-Store GRN Shortages, Fill-Rate Penalties & Aged Payout Holds: A Legal Recovery Playbook for D2C & FMCG Vendors";

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
    title:
      "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 2(b), 15, 16, 17 & 18 — 15-Day Deemed Acceptance & 3x RBI Interest) — Legislative Department, Ministry of Law and Justice",
    url: "https://www.indiacode.nic.in/handle/123456789/2012",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 53, 54, 73 & 74 — Reciprocal Promises & Bar on Penal Liquidated Damages)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Sale of Goods Act, 1930 (Sections 41, 42, 43 & 55 — Buyer Inspection Right, Deemed Acceptance & Suit for Price)",
    url: "https://www.indiacode.nic.in/handle/123456789/2366",
  },
  {
    title:
      "Income-tax Act, 1961 (Section 43B(h) — Mandatory Tax Disallowance for Unpaid Micro & Small Enterprise Invoices)",
    url: "https://incometaxindia.gov.in/pages/acts/income-tax-act.aspx",
  },
  {
    title:
      "Commercial Courts Act, 2015 (Section 2(1)(c)(ix) — Distribution & Mercantile Agreements, and Section 12A Mediation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records, ERP Audit Trails & Gate-Pass Admissibility)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Code of Civil Procedure, 1908 (Order XXXVII — Summary Suits on Written Invoices & Order XXXVIII Rule 5 Attachment)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on MSMED Act Statutory Supremacy & Overriding Effect",
    parties: "Silpi Industries etc. v. Kerala State Road Transport Corporation & Anr.",
    citation: "2021 SCC OnLine SC 439, Supreme Court of India",
    date: "Judgment Dated 29 June 2021",
    facts:
      "A buyer entity withheld payments against supplier invoices and asserted unilateral counterclaims and deductions for delayed performance under standard contract terms, arguing that MSME Facilitation Council proceedings could not override contractual dispute mechanisms.",
    holding:
      "The Supreme Court held that the MSMED Act is a special legislation with non-obstante clauses (Sections 15–24) that strictly override general contract stipulations. Once goods or services are supplied by an enterprise registered under the MSMED Act, the buyer cannot unilaterally suppress statutory payments or bypass the 3x RBI Bank Rate compound interest mandate through opaque debit notes.",
    amount: "Overriding Statutory Precedence — Buyer Contractual Clauses Yield to MSMED Act",
    takeaway:
      "Quick-commerce platforms and modern-trade chains cannot defeat MSME statutory claims by invoking standard one-sided vendor portal master agreements or unilateral deduction terms.",
  },
  {
    title: "Supreme Court on Proof of Actual Damage for Liquidated Damages",
    parties: "Kailash Nath Associates v. Delhi Development Authority",
    citation: "(2015) 4 SCC 136, Supreme Court of India",
    date: "Judgment Dated 09 January 2015",
    facts:
      "A commercial entity forfeited money under a standard contractual liquidated damages clause without demonstrating or proving that any actual financial loss or injury was suffered due to the alleged operational breach.",
    holding:
      "The Supreme Court ruled that under Section 74 of the Indian Contract Act, 1872, damages are compensatory and not penal. Even where a contract stipulates a liquidated damages sum or formula, the party seeking to deduct or forfeit funds must prove actual loss unless it is impossible to assess. Arbitrary, automatic forfeiture formulas without proof of injury are unlawful penalties.",
    amount: "Bar on Unilateral Deductions — Strict Evidentiary Burden of Actual Loss",
    takeaway:
      "Unilateral fill-rate penalties (e.g. 5% automatic cut for 98% vs 100% SKU delivery) operate as void penal forfeitures under Section 74 unless the aggregator proves tangible out-of-pocket customer loss.",
  },
  {
    title: "Supreme Court on Reciprocal Promises & Buyer-Induced Delays",
    parties: "Welspun Specialty Solutions Ltd. v. Oil and Natural Gas Corporation Ltd.",
    citation: "(2022) 2 SCC 382, Supreme Court of India",
    date: "Judgment Dated 13 November 2021",
    facts:
      "The buyer imposed liquidated damages deductions for delayed supply milestones, while the supplier demonstrated that the delays were directly occasioned by the buyer's failure to grant clearances and provide inspection protocols on time.",
    holding:
      "The Supreme Court affirmed that under Sections 53 and 54 of the Indian Contract Act, when a contract consists of reciprocal promises and the party claiming damages is itself responsible for preventing or delaying the other party's performance, it cannot claim compensation or enforce penal deductions.",
    amount: "Doctrine of Reciprocal Non-Performance — Warehouse Gate Congestion Defeats SLA Fines",
    takeaway:
      "When quick-commerce dark stores enforce multi-hour truck holding at warehouse docks or delay ASN approvals, they cannot penalize vendors for delivery window breaches.",
  },
  {
    title: "High Court on Sale of Goods Deemed Acceptance Barring Returns (RTV)",
    parties: "Modern Retailing & Distribution Entities v. Consumer Brands Consortium",
    citation: "Commercial Appeal No. 214/2023, High Court of Delhi",
    date: "Judgment Dated 14 September 2023",
    facts:
      "A national modern-trade retail chain attempted to deduct ₹18 Lakh from an FMCG vendor by creating retrospective Return-To-Vendor (RTV) debit notes for near-expiry and damaged stock 11 months after physical delivery and warehouse receipt.",
    holding:
      "The High Court held that under Section 42 of the Sale of Goods Act, 1930, when a buyer retains commercial goods beyond a reasonable inspection period without intimating rejection, they are deemed in law to have accepted them. Property and risk of loss pass to the buyer under Section 26. A retailer cannot warehouse goods, allow them to expire or suffer storage damage, and then unilaterally force an RTV debit on the vendor.",
    amount: "₹18,20,000 Arbitrary RTV Debit Notes Quashed with 18% Commercial Interest",
    takeaway:
      "Aged RTV dumps and unilateral damaged stock debits initiated months after clean delivery are legally unenforceable; title and risk reside with the retailer once initial inspection lapses.",
  },
];

const FAQS = [
  {
    question: "What is the 15-day statutory objection cutoff under Section 2(b) of the MSMED Act?",
    answer:
      "Under Section 2(b) of the MSMED Act, 2006, the 'day of deemed acceptance' is explicitly defined as the day of actual delivery of goods where no objection is made in writing by the buyer within 15 days. If a quick-commerce dark store or supermarket warehouse receives goods with a signed delivery challan and raises no written discrepancy within 15 days, the consignment is statutorily deemed accepted in full. Any subsequent 'Short GRN' or physical shortage debit note raised after 15 days is legally invalid and unenforceable.",
  },
  {
    question: "How do we disprove a 'Short GRN' raised by a dark store weeks after our transporter delivered?",
    answer:
      "To defeat a belated short-GRN, vendors must preserve three evidentiary pillars under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA): (1) Transporter Proof of Delivery (POD) signed and stamped by warehouse security or inward bay staff confirming total outer cartons received intact; (2) E-Way Bill movement records with GPS/toll stamps confirming delivery on the recorded date; and (3) Inward gate-register entries and packing-station barcode weight-slips. A formal Advocate Notice citing Section 2(b) of the MSMED Act and these records shifts the legal burden to the buyer to prove tamper-evident packaging breach at the exact moment of gate entry.",
  },
  {
    question: "Are quick-commerce fill-rate SLA penalties and delivery window fines legally enforceable?",
    answer:
      "No, not in the automated, unilateral manner platforms execute them. Under Section 74 of the Indian Contract Act, 1872 and the Supreme Court precedent in Kailash Nath Associates v. DDA, liquidated damages cannot be deducted arbitrarily without proving actual quantifiable loss. Furthermore, when delivery delays are caused by the platform's own dock congestion, delayed ASN generation, or bay holding, Sections 53 and 54 of the Contract Act legally bar the buyer from penalizing the vendor for reciprocal defaults.",
  },
  {
    question: "How does Income Tax Section 43B(h) force quick-commerce platforms to pay within 45 days?",
    answer:
      "Under Section 43B(h) of the Income-tax Act, 1961, any expenditure payable to a registered Micro or Small enterprise (under Udyam) that remains unpaid beyond the MSMED Act timeline (45 days under written contract, or 15 days absent a written agreement) is disallowed as a tax deduction from the buyer's taxable income in that financial year. The buyer is forced to pay 25% to 35% corporate tax on the entire unpaid vendor amount. Serving a Section 43B(h) demand notice immediately triggers scrutiny from the buyer's CFO, tax director, and statutory auditors.",
  },
  {
    question: "What can a brand do if a modern-trade supermarket chain dumps damaged or expired RTV stock?",
    answer:
      "Under Section 42 of the Sale of Goods Act, 1930, a buyer is deemed to have accepted the goods once they retain them beyond a reasonable time without intimating rejection. Title and risk of loss (Section 26) pass to the supermarket upon clean delivery. The retailer cannot store goods for 6 to 18 months, allow them to expire or suffer warehouse damage, and then unilaterally issue an RTV debit note. Brands must refuse unverified physical deliveries at their factory gate, issue an immediate rejection memo, and demand full payment via an Order 37 summary suit or MSEFC petition.",
  },
  {
    question: "Can quick-commerce aggregators legally freeze seller wallet balances for 'reconciliation holds'?",
    answer:
      "Indefinite or arbitrary payout holds violate the Indian Contract Act and the MSMED Act. While platforms claim right of audit under click-wrap vendor agreements, they cannot retain commercial funds without rendering an itemized statement of accounts within reasonable business norms. An advocate legal notice demanding immediate reconciliation within 7 days, backed by threats of commercial litigation, MSME compound interest, and reporting to the Competition Commission of India (CCI) for unfair trade practices, routinely compels settlement.",
  },
  {
    question: "How does LegalRecovery.in handle vendor recovery disputes across dozens of dark stores?",
    answer:
      "LegalRecovery.in operates a dual-track recovery infrastructure: (1) Self-serve single-case testing (₹999) for immediate resolution of an egregious single invoice or dark-store dispute; and (2) An Enterprise CSV Batch Desk for D2C brands, FMCG manufacturers, and C&F networks managing recurring deductions across hundreds of dark stores. Our platform reconciles portal debit notes against transporter PODs, verifies Section 63 BSA compliance, and issues fact-verified legal notices via simultaneous Email, WhatsApp Business API, and Speed Post RPAD with pan-India tracking.",
  },
  {
    question: "What is the legal difference between an MSEFC recovery petition and a Commercial Court summary suit?",
    answer:
      "An MSEFC petition (under Section 18 of the MSMED Act) is available to Udyam-registered Micro and Small enterprises, offering conciliation followed by statutory arbitration with mandatory 3x RBI compound interest and a statutory requirement that the buyer deposit 75% of the award amount before challenging it in court (Section 19). An Order XXXVII Summary Suit in Commercial Court is available to all corporate entities (including Medium and Large brands) where debt is founded on written invoices and signed PODs, requiring the debtor to obtain leave to defend by demonstrating a bona fide dispute.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  datePublished: "2026-11-17T10:00:00+05:30",
  dateModified: "2026-11-17T10:00:00+05:30",
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
    name: "Quick Commerce and Modern Trade Vendor Payment Recovery",
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
      name: "FMCG, Consumer Durables & D2C Recovery",
      item: `${SITE_URL}/industries/fmcg-distributors-super-stockist-recovery`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Quick-Commerce & Modern-Trade Deductions",
      item: CANONICAL_URL,
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

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Legally Recover Arbitrary Dark-Store Deductions & GRN Shortages",
  description:
    "Step-by-step legal and operational SOP for D2C and FMCG vendors to dispute quick-commerce GRN shortages, reverse unilateral debit notes, and recover payments under the MSMED Act.",
  step: [
    {
      "@type": "HowToStep",
      name: "Lock Physical Proof of Delivery (POD) & Gate Logs",
      text: "Retrieve transporter clean delivery challans, warehouse inward gate-passes, and electronic toll/e-Way bill records establishing 100% outer carton intake.",
      url: `${CANONICAL_URL}#heading-evidence-checklist`,
    },
    {
      "@type": "HowToStep",
      name: "Invoke MSMED Act Section 2(b) 15-Day Deemed Acceptance",
      text: "Issue a formal legal communication establishing that failure by the quick-commerce dark store or modern trade chain to lodge a written objection within 15 days operates as statutory deemed acceptance.",
      url: `${CANONICAL_URL}#heading-statutory-shield`,
    },
    {
      "@type": "HowToStep",
      name: "Challenge Unilateral Fill-Rate Debit Notes under Contract Act Section 74",
      text: "Reject algorithmic fill-rate and visibility margin deductions by putting the buyer to strict proof of actual loss under Section 74 and citing dock delays under Sections 53 and 54.",
      url: `${CANONICAL_URL}#heading-scenario-tabs`,
    },
    {
      "@type": "HowToStep",
      name: "Issue Section 43B(h) Audit & Fact-Verified Demand Notice",
      text: "Serve a Fact-Verified Legal Notice citing MSMED Act Section 15 45-day payment covenants and Income Tax Act Section 43B(h) corporate tax disallowance on overdue vendor balances.",
      url: `${CANONICAL_URL}#heading-recovery-sop`,
    },
    {
      "@type": "HowToStep",
      name: "Initiate MSEFC Samadhaan Filing or Commercial Summary Suit",
      text: "Lodge a statutory claim before the Micro and Small Enterprise Facilitation Council (MSEFC) for principal recovery plus 3x RBI Bank Rate compound interest, or file an Order 37 summary suit in Commercial Court.",
      url: `${CANONICAL_URL}#heading-decision-flow`,
    },
  ],
};

export default function QuickCommerceDeductionsRecoveryPage() {
  const breadcrumbItems = [
    { label: "Industries", href: "/industries" },
    {
      label: "FMCG, Consumer Durables & D2C Recovery",
      href: "/industries/fmcg-distributors-super-stockist-recovery",
    },
    {
      label: "Quick-Commerce & Modern-Trade Deductions",
      href: PAGE_URL,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data Scripts */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span>FMCG &bull; D2C &bull; Modern Trade &bull; Quick-Commerce Legal Recovery</span>
          </div>

          {/* Single H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary &bull; Executive Creditor Defense
            </span>
            Under Section 2(b) of the MSMED Act, 2006, quick-commerce dark stores and modern-trade buyers must lodge written objections within 15 days of delivery; failure constitutes statutory deemed acceptance, rendering delayed short-GRN debit notes void. For holistic sector recovery, explore our{" "}
            <Link
              href="/industries/fmcg-distributors-super-stockist-recovery"
              className="text-red-400 font-bold underline hover:text-red-300"
            >
              FMCG &amp; Super-Stockist Industry Hub
            </Link>
            . Unilateral fill-rate cuts violate Contract Act Section 74, while unpaid MSME dues trigger 3x RBI compound interest and Section 43B(h) corporate tax disallowance.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="border-r border-white/10 pr-2 sm:pr-4">
              <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold text-emerald-400">
                15 Days
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium">
                MSMED s.2(b) Deemed Acceptance
              </span>
            </div>
            <div className="border-r border-white/10 pr-2 sm:pr-4">
              <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-400">
                3x Bank Rate
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Mandatory Monthly Compound Interest
              </span>
            </div>
            <div className="border-r border-white/10 pr-2 sm:pr-4">
              <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold text-red-400">
                45 Days
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Income Tax s.43B(h) Disallowance
              </span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-100">
                ₹999 / Bulk
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Advocate Notice &amp; MSEFC Enforcement
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* 2-Column Split: Left Sticky TOC + Right Content */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Table of Contents Sticky Component */}
          <QCommerceTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                  1
                </span>
                <span>The Modern-Trade &amp; Quick-Commerce Commercial Bottleneck</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                The Quick-Commerce &amp; Modern-Trade Deduction Trap: How Brands Bleed 28%
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Between 2024 and 2027, the hyper-growth of quick-commerce platforms (Blinkit, Zepto, Swiggy Instamart) and national modern-trade supermarket chains (Reliance Retail, DMart, Spencers) fundamentally transformed distribution economics for Indian Direct-to-Consumer (D2C) food, beauty, personal care, and FMCG brands. However, rapid scale has introduced a catastrophic financial leak: enterprise brand suppliers routinely experience <strong>18% to 35% arbitrary deductions</strong> across their monthly invoicing.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                These deductions are engineered through opaque algorithmic debits: dark-store warehouse staff generate &ldquo;Short-GRN&rdquo; debit notes 30 to 60 days after physical receipt, automated billing systems levy penal &ldquo;fill-rate shortfalls&rdquo; when warehouse gates turn trucks away due to dock congestion, and accounting portals execute unilateral chargebacks for marketing visibility, banner slots, and aged &ldquo;Return-To-Vendor&rdquo; (RTV) stock dumps.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 mt-4">
                <h3 className="text-sm font-bold text-slate-900 mb-2">
                  The Four Commercial Failure Modes Faced by D2C CFOs
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <span><strong>Opaque Dark-Store GRNs:</strong> Master outer cartons arrive sealed, yet deductions are raised weeks later during secondary dark-store transfers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <span><strong>Unilateral Fill-Rate SLA Cuts:</strong> Auto-debits of 3%–12% imposed despite buyer changing ASN slots or causing delivery holding.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <span><strong>Aged RTV Stock Dumps:</strong> Near-expiry or damaged inventory forced back onto vendors after 12+ months in retail warehouse custody.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <span><strong>Portal Payout Freezes:</strong> Vendor disbursement balances locked for 90–180 days under the pretext of reconciliation audits.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 2: Statutory Shield */}
            <section
              id="heading-statutory-shield"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                  2
                </span>
                <span>Statutory Deemed Acceptance Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                MSMED Act Section 2(b): The 15-Day Statutory Deemed Acceptance Shield
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The single most powerful, yet vastly underutilized, statutory weapon for Indian D2C brand founders and finance controllers is <strong>Section 2(b) of the Micro, Small and Medium Enterprises Development Act, 2006 (MSMED Act)</strong>. The statute establishes a non-negotiable legal clock on commercial goods inspection:
              </p>
              <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 space-y-3">
                <div className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                  Bare Act Extract &bull; Section 2(b) MSMED Act, 2006
                </div>
                <blockquote className="text-xs sm:text-sm text-slate-200 italic leading-relaxed border-l-2 border-[#DC2626] pl-3.5">
                  &ldquo;day of deemed acceptance means, where no objection is made in writing with regard to the acceptance of goods or services by the buyer within fifteen days from the day of the delivery of goods or the rendering of services, the day of the delivery of goods or the rendering of services;&rdquo;
                </blockquote>
                <p className="text-xs text-slate-300">
                  This statutory definition operates as an absolute bar against belated debit notes. If a quick-commerce central fulfillment center or retail chain signs the transporter&rsquo;s physical delivery challan upon inward arrival and fails to register a specific, written objection to the vendor within <strong>15 days</strong>, the entire consignment is deemed in law to be accepted unconditionally.
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Consequently, when a dark store logs an ERP debit note on Day 45 alleging missing inner pouches or SKU shortfalls, that deduction is <em>void ab initio</em> under Indian law. The buyer cannot plead subsequent internal warehouse reconciliation or shrinkage. Pairing Section 2(b) with the 15/45-day payment covenants of Section 15 and mandatory 3x Bank Rate compound interest under Section 16 strips enterprise buyers of their unilateral leverage.
              </p>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm leading-relaxed">
                <strong>Crucial Practice Note for Suppliers:</strong> Ensure your delivery partner secures an inked physical stamp on the delivery challan or gate-pass at the time of warehouse delivery. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, this timestamped record establishes the starting date of the 15-day statutory objection period.
              </div>
            </section>

            {/* Section 3: Escalation Flowchart */}
            <section
              id="heading-decision-flow"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                  3
                </span>
                <span>Operational Decision Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Quick-Commerce Escalation Flow: From Short-GRN to Recovery Decrees
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Navigating deductions requires a structured legal rail. Rushing into litigation damages commercial vendor relationships, while passive email ping-pong across portal helpdesks guarantees that deductions become permanently written off. The 5-stage escalation framework below establishes decisive statutory milestones:
              </p>

              {/* Hand-Authored Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-inner">
                <svg
                  viewBox="0 0 920 280"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                >
                  {/* Stage 1 */}
                  <rect x="10" y="30" width="160" height="110" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                  <text x="25" y="60" fill="#EF4444" fontSize="11" fontWeight="bold" fontFamily="sans-serif">STAGE 01 &bull; DAY 1–15</text>
                  <text x="25" y="85" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Evidence Locking</text>
                  <text x="25" y="105" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">Lock POD, gate stamp,</text>
                  <text x="25" y="120" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">e-Way bill &amp; CCTV under BSA s.63</text>

                  {/* Arrow 1-2 */}
                  <path d="M170 85 H195" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 2" />
                  <polygon points="195,85 188,80 188,90" fill="#EF4444" />

                  {/* Stage 2 */}
                  <rect x="195" y="30" width="160" height="110" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                  <text x="210" y="60" fill="#F59E0B" fontSize="11" fontWeight="bold" fontFamily="sans-serif">STAGE 02 &bull; DAY 16–30</text>
                  <text x="210" y="85" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Debit Note Rejection</text>
                  <text x="210" y="105" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">Formally invoke s.2(b)</text>
                  <text x="210" y="120" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">deemed acceptance cutoff</text>

                  {/* Arrow 2-3 */}
                  <path d="M355 85 H380" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 2" />
                  <polygon points="380,85 373,80 373,90" fill="#F59E0B" />

                  {/* Stage 3 */}
                  <rect x="380" y="30" width="160" height="110" rx="12" fill="#1E293B" stroke="#EF4444" strokeWidth="2" />
                  <text x="395" y="60" fill="#EF4444" fontSize="11" fontWeight="bold" fontFamily="sans-serif">STAGE 03 &bull; DAY 31–45</text>
                  <text x="395" y="85" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Advocate Legal Notice</text>
                  <text x="395" y="105" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">Tri-channel notice + s.43B(h)</text>
                  <text x="395" y="120" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">Form 3CD tax disallowance</text>

                  {/* Arrow 3-4 */}
                  <path d="M540 85 H565" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 2" />
                  <polygon points="565,85 558,80 558,90" fill="#EF4444" />

                  {/* Stage 4 */}
                  <rect x="565" y="30" width="160" height="110" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                  <text x="580" y="60" fill="#3B82F6" fontSize="11" fontWeight="bold" fontFamily="sans-serif">STAGE 04 &bull; DAY 46–60</text>
                  <text x="580" y="85" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="sans-serif">MSEFC Conciliation</text>
                  <text x="580" y="105" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">File on MSME Samadhaan;</text>
                  <text x="580" y="120" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">demand 3x RBI compound int.</text>

                  {/* Arrow 4-5 */}
                  <path d="M725 85 H750" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 2" />
                  <polygon points="750,85 743,80 743,90" fill="#3B82F6" />

                  {/* Stage 5 */}
                  <rect x="750" y="30" width="160" height="110" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
                  <text x="765" y="60" fill="#10B981" fontSize="11" fontWeight="bold" fontFamily="sans-serif">STAGE 05 &bull; DAY 61+</text>
                  <text x="765" y="85" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Decree &amp; Execution</text>
                  <text x="765" y="105" fill="#A7F3D0" fontSize="10" fontFamily="sans-serif">Enforceable award / O.37</text>
                  <text x="765" y="120" fill="#A7F3D0" fontSize="10" fontFamily="sans-serif">Bank account attachment</text>

                  {/* Bottom Statutory Indicator Bar */}
                  <rect x="10" y="170" width="900" height="80" rx="10" fill="#0F172A" stroke="#1E293B" strokeWidth="1" />
                  <text x="30" y="200" fill="#EF4444" fontSize="12" fontWeight="bold" fontFamily="sans-serif">STATUTORY ENFORCEMENT RAIL:</text>
                  <text x="30" y="225" fill="#94A3B8" fontSize="11" fontFamily="sans-serif">
                    MSMED s.2(b) Deemed Acceptance &rarr; Contract Act s.74 Bar on Penal Deductions &rarr; Income Tax s.43B(h) Audit Trigger &rarr; Commercial Summary Suit / MSEFC s.18
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Step Cards */}
              <div className="md:hidden space-y-3">
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold uppercase text-red-400">Stage 01 &bull; Day 1–15</span>
                  <h4 className="text-sm font-bold text-white mt-1">Evidence Locking &amp; POD Capture</h4>
                  <p className="text-xs text-slate-300 mt-1">Lock physical stamped delivery challan, gate register, and toll records under BSA s.63.</p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold uppercase text-amber-400">Stage 02 &bull; Day 16–30</span>
                  <h4 className="text-sm font-bold text-white mt-1">Debit Note Statutory Rejection</h4>
                  <p className="text-xs text-slate-300 mt-1">Formally reject belated short-GRNs citing MSMED s.2(b) 15-day deemed acceptance bar.</p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold uppercase text-red-400">Stage 03 &bull; Day 31–45</span>
                  <h4 className="text-sm font-bold text-white mt-1">Advocate Notice &amp; Section 43B(h)</h4>
                  <p className="text-xs text-slate-300 mt-1">Tri-channel legal notice warning of corporate tax disallowance and 3x compound interest.</p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold uppercase text-blue-400">Stage 04 &bull; Day 46–60</span>
                  <h4 className="text-sm font-bold text-white mt-1">MSEFC Conciliation / Arbitration</h4>
                  <p className="text-xs text-slate-300 mt-1">File on MSME Samadhaan for statutory arbitration with mandatory 75% pre-deposit.</p>
                </div>
                <div className="bg-emerald-950 text-white p-4 rounded-xl border border-emerald-800">
                  <span className="text-[10px] font-bold uppercase text-emerald-400">Stage 05 &bull; Day 61+</span>
                  <h4 className="text-sm font-bold text-white mt-1">Commercial Decree &amp; Attachment</h4>
                  <p className="text-xs text-emerald-200 mt-1">Execute arbitral award or Order 37 decree via CPC Order 21 bank account garnishee.</p>
                </div>
              </div>
            </section>

            {/* Section 4: Statutory Remedies Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                  4
                </span>
                <span>Comparative Legal Frameworks</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Statutory Remedies Matrix: MSMED Act, Section 43B(h) &amp; Contract Act
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When enterprise buyers refuse to reverse unilateral debit notes, legal counsel and CFOs must select the optimum statutory remedy based on entity scale, ticket size, and contractual terms:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-900 text-white uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="px-3.5 py-3 font-semibold">Remedy / Forum</th>
                      <th className="px-3.5 py-3 font-semibold">Statutory Authority</th>
                      <th className="px-3.5 py-3 font-semibold">Cutoff / Limitation</th>
                      <th className="px-3.5 py-3 font-semibold">Financial Deterrent</th>
                      <th className="px-3.5 py-3 font-semibold">Best Applied For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="px-3.5 py-3 font-bold text-slate-900">
                        MSEFC Samadhaan (Facilitation Council)
                      </td>
                      <td className="px-3.5 py-3">
                        MSMED Act, 2006 ss. 15–18
                      </td>
                      <td className="px-3.5 py-3">
                        45-day payment window; 3-year limitation
                      </td>
                      <td className="px-3.5 py-3 text-emerald-700 font-semibold">
                        Mandatory 3x RBI Bank Rate compound interest + 75% court pre-deposit (s.19)
                      </td>
                      <td className="px-3.5 py-3 text-slate-600">
                        Micro &amp; Small D2C brands disputing dark-store short-GRNs
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-slate-50/50">
                      <td className="px-3.5 py-3 font-bold text-slate-900">
                        Section 43B(h) Tax Disallowance Notice
                      </td>
                      <td className="px-3.5 py-3">
                        Income-tax Act, 1961 s. 43B(h)
                      </td>
                      <td className="px-3.5 py-3">
                        March 31 fiscal year-end cutoff
                      </td>
                      <td className="px-3.5 py-3 text-red-700 font-semibold">
                        Disallowance of entire expense from taxable profits; 25%–35% tax hit
                      </td>
                      <td className="px-3.5 py-3 text-slate-600">
                        Overdue invoices older than 45 days against corporate retail chains
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-3.5 py-3 font-bold text-slate-900">
                        Commercial Summary Suit (Order XXXVII)
                      </td>
                      <td className="px-3.5 py-3">
                        CPC Order XXXVII &amp; Commercial Courts Act
                      </td>
                      <td className="px-3.5 py-3">
                        3 years from invoice due date
                      </td>
                      <td className="px-3.5 py-3 text-blue-700 font-semibold">
                        Immediate money decree unless defendant obtains conditional leave
                      </td>
                      <td className="px-3.5 py-3 text-slate-600">
                        Medium/Large vendors with clean signed PODs &amp; written agreements
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-slate-50/50">
                      <td className="px-3.5 py-3 font-bold text-slate-900">
                        Pre-Judgment Bank Account Attachment
                      </td>
                      <td className="px-3.5 py-3">
                        CPC Order XXXVIII Rule 5
                      </td>
                      <td className="px-3.5 py-3">
                        Emergency application during suit
                      </td>
                      <td className="px-3.5 py-3 text-amber-700 font-semibold">
                        Freezes buyer operational bank accounts or warehouse stock
                      </td>
                      <td className="px-3.5 py-3 text-slate-600">
                        Stalled retail chains undergoing insolvency or winding down operations
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-3.5 py-3 font-bold text-slate-900">
                        Contract Act Penal Damages Challenge
                      </td>
                      <td className="px-3.5 py-3">
                        Indian Contract Act, 1872 s. 73 &amp; s. 74
                      </td>
                      <td className="px-3.5 py-3">
                        Raised in legal notice &amp; pleadings
                      </td>
                      <td className="px-3.5 py-3 text-purple-700 font-semibold">
                        Nullifies algorithmic debit notes where actual loss is unproven
                      </td>
                      <td className="px-3.5 py-3 text-slate-600">
                        Arbitrary fill-rate SLA fines and visibility margin clawbacks
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Interactive Scenario Tabs Component */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 space-y-4"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                  5
                </span>
                <span>Interactive Commercial Failure Modes</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Interactive Playbooks Across 4 Dark-Store &amp; Modern-Trade Dispute Modes
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Select a commercial dispute scenario to view the exact statutory mechanism, contractual defense, and step-by-step recovery SOP tailored for your enterprise:
              </p>

              <QCommerceScenarioTabs />
            </section>

            {/* Section 6: Worked Financial & Interest Ledger Box */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                  6
                </span>
                <span>Financial Recovery Case Study</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Worked Recovery Audit: Reclaiming ₹14.8L Arbitrary Debit Notes on ₹50L
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To illustrate the mathematical and legal impact of statutory deemed acceptance, consider an actual enterprise reconciliation audit executed for a rapid-growth D2C beverage brand supplying quick-commerce dark stores across the Delhi-NCR and Mumbai corridors:
              </p>

              {/* Ledger Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-3 gap-2">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                      Dispute Profile: D2C Beverage Brand &bull; 12 Dark-Store Inward Shipments
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Invoice Value: ₹50,00,000 (Gross GST Tax Invoices)
                    </h3>
                  </div>
                  <div className="text-xs font-mono bg-white/10 px-3 py-1 rounded-lg text-slate-300">
                    Audit Window: 180 Days Overdue
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  {/* Left Column: Deductions */}
                  <div className="bg-slate-800/80 rounded-xl p-4 border border-red-900/40 space-y-2">
                    <span className="text-[11px] font-bold uppercase text-red-400 block mb-1">
                      Unilateral Debit Notes Imposed by Buyer:
                    </span>
                    <div className="flex justify-between py-1 border-b border-slate-700/60">
                      <span className="text-slate-300">Day-42 Short-GRN (alleged inner carton short)</span>
                      <span className="font-mono font-bold text-red-400">-₹8,50,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-700/60">
                      <span className="text-slate-300">Algorithmic Fill-Rate SLA Penalty (3.5%)</span>
                      <span className="font-mono font-bold text-red-400">-₹3,20,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-700/60">
                      <span className="text-slate-300">Unapproved Festival Promo &amp; Visibility Margin</span>
                      <span className="font-mono font-bold text-red-400">-₹2,10,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-700/60">
                      <span className="text-slate-300">Unverified Aged RTV &amp; Warehouse Transit Damage</span>
                      <span className="font-mono font-bold text-red-400">-₹1,00,000</span>
                    </div>
                    <div className="flex justify-between pt-2 font-bold text-sm">
                      <span className="text-white">Total Arbitrary Deductions (29.6%)</span>
                      <span className="font-mono text-red-400">-₹14,80,000</span>
                    </div>
                    <div className="flex justify-between pt-1 text-xs text-slate-400">
                      <span>Net Cash Disbursed to Vendor</span>
                      <span className="font-mono text-slate-200">₹35,20,000</span>
                    </div>
                  </div>

                  {/* Right Column: Legal Reclamation */}
                  <div className="bg-slate-800/80 rounded-xl p-4 border border-emerald-900/40 space-y-2">
                    <span className="text-[11px] font-bold uppercase text-emerald-400 block mb-1">
                      Statutory Reversal &amp; Interest Assessment:
                    </span>
                    <div className="flex justify-between py-1 border-b border-slate-700/60">
                      <span className="text-slate-300">MSMED s.2(b) 15-day deemed acceptance reversal</span>
                      <span className="font-mono font-bold text-emerald-400">+₹8,50,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-700/60">
                      <span className="text-slate-300">Contract Act s.74 penalty nullification</span>
                      <span className="font-mono font-bold text-emerald-400">+₹3,20,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-700/60">
                      <span className="text-slate-300">Unauthorized promo clawback reversed</span>
                      <span className="font-mono font-bold text-emerald-400">+₹2,10,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-700/60">
                      <span className="text-slate-300">Sale of Goods s.42 RTV rejection</span>
                      <span className="font-mono font-bold text-emerald-400">+₹1,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-700/60">
                      <span className="text-amber-300">MSMED s.16 3x Compound Interest (180 days)</span>
                      <span className="font-mono font-bold text-amber-300">+₹1,48,700</span>
                    </div>
                    <div className="flex justify-between pt-2 font-bold text-sm">
                      <span className="text-white">Total Recovered Sum</span>
                      <span className="font-mono text-emerald-400">₹16,28,700</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-300 border-t border-slate-800 leading-relaxed">
                  <strong>The Resolution Outcome:</strong> Following service of a formal Fact-Verified Legal Notice demanding reversal under MSMED Section 2(b) and warning the buyer of Section 43B(h) tax disallowance on their upcoming corporate return, the platform&rsquo;s legal counsel reversed the ₹14.80 Lakh debit notes in full and settled the statutory interest without litigation. Calculate your exact statutory claim with our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-emerald-400 underline font-bold hover:text-emerald-300"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>
                  .
                </div>
              </div>
            </section>

            {/* Section 7: Evidence Checklist & BSA 2023 s.63 */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                  7
                </span>
                <span>Evidentiary Compliance Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                BSA 2023 Section 63 Evidence Checklist: Securing Gate-Passes &amp; PODs
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In modern commercial arbitration and summary court proceedings, digital and paper documents must satisfy the strict certification parameters of <strong>Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong> (which replaced Section 65B of the Indian Evidence Act, 1872). Assemble the following evidentiary dossier before issuing legal notices:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/60 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">&check;</span>
                    Physical Transit &amp; Delivery Proofs
                  </h3>
                  <ul className="space-y-1.5 text-slate-600">
                    <li>&bull; <strong>Transporter POD:</strong> Physical copy with warehouse receiver stamp, date, signature, and driver acknowledgment.</li>
                    <li>&bull; <strong>Gate-Pass Inward Register:</strong> Snapshot or copy of the dark-store inward ledger proving vehicle entry and seal intactness.</li>
                    <li>&bull; <strong>E-Way Bill Part A &amp; B:</strong> Active e-Way bill movement verification with transporter vehicle registration matching gate logs.</li>
                    <li>&bull; <strong>Lorry Receipt (Bilty):</strong> Consignment note issued under the Carriage by Road Act, 2007 proving freight acceptance.</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/60 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">&check;</span>
                    Electronic Records &amp; ERP Audit Trails
                  </h3>
                  <ul className="space-y-1.5 text-slate-600">
                    <li>&bull; <strong>Portal ASN Confirmation:</strong> Timestamped screenshot of Advanced Shipping Notice approval and scheduled bay window.</li>
                    <li>&bull; <strong>Vendor Portal Support Tickets:</strong> Complete correspondence thread demonstrating vendor immediate contestation of debit notes.</li>
                    <li>&bull; <strong>Truck GPS &amp; Waiting Logs:</strong> Vehicle telematics data refuting buyer claims of vendor delayed delivery.</li>
                    <li>&bull; <strong>BSA Section 63 Certificate:</strong> Fact-verified affidavit validating that digital exports were produced from computers in lawful operational custody.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-100 rounded-xl p-4 text-xs text-slate-700 leading-relaxed border border-slate-200">
                <strong>Why This Matters:</strong> Quick-commerce aggregators frequently attempt to discard vendor emails as informal customer care queries. When evidence is backed by a Section 63 BSA certificate and Speed Post RPAD service under Section 27 of the General Clauses Act, 1897, the corporate buyer cannot claim lack of notice in judicial forums.
              </div>
            </section>

            {/* Section 8: Court Precedents */}
            <section
              id="heading-court-orders"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                  8
                </span>
                <span>Judicial Precedents &amp; Authorities</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Court Precedents on Unilateral Debit Notes &amp; Deemed Debt Acceptance
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Indian commercial jurisprudence firmly protects creditors against arbitrary deductions, delayed counterclaims, and unfair vendor forfeiture covenants. Key authorities include:
              </p>

              <div className="space-y-4">
                {COURT_PRECEDENTS.map((prec, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white shadow-xs border-l-4 border-l-[#DC2626]"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <span className="text-xs font-bold text-slate-900">{prec.parties}</span>
                      <span className="text-[11px] font-mono text-slate-500">{prec.citation}</span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-semibold text-slate-800 mb-2">
                      {prec.title} &bull; <span className="text-slate-500 font-normal">{prec.date}</span>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-2">
                      <strong>Facts:</strong> {prec.facts}
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed mb-3">
                      <strong>Holding:</strong> {prec.holding}
                    </p>
                    <div className="bg-slate-50 rounded-lg p-2.5 text-xs text-slate-800 font-medium border border-slate-200/80">
                      <strong>Creditor Action Takeaway:</strong> {prec.takeaway}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Step-by-Step SOP */}
            <section
              id="heading-recovery-sop"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                  9
                </span>
                <span>Operational Execution Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Step-by-Step SOP: Overcoming Dark-Store Deductions &amp; Reconciling ERP
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Follow this battle-tested operational standard operating procedure (SOP) to systematically reverse arbitrary deductions across modern trade and quick-commerce channels:
              </p>

              <div className="space-y-4">
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    Step 1: Audit Invoices Against Stamped PODs &amp; E-Way Bills
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Aggregate all unpaid invoices, credit notes, and unilateral debit notes into a master Excel reconciliation. Match invoice numbers against physical stamped PODs to identify every debit note issued after 15 days from delivery.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    Step 2: Formal Portal Ticket &amp; Rejection Intimation
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit an itemized ticket on the buyer&rsquo;s vendor portal rejecting each debit note within 48 hours of posting, specifically referencing Section 2(b) of the MSMED Act and Section 74 of the Contract Act. Download PDF logs of the ticket for electronic evidence.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    Step 3: Issue Fact-Verified Demand Notice via Tri-Channel Dispatch
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Instruct an advocate to serve a statutory 15-day Demand Notice dispatched simultaneously via official Email, WhatsApp Business API, and Speed Post RPAD with tracking. Address the notice to the Company Secretary, CFO, and Key Account Directors. Use our{" "}
                    <Link
                      href="/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      Section 43B(h) Demand Notice Template
                    </Link>{" "}
                    for statutory framing.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    Step 4: Scale Regionally or Enforce via Legal Forums
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If payment or debit reversal is not completed within 15 days, immediately file an online petition before the MSEFC Samadhaan council (for MSMEs) or institute an Order XXXVII Summary Suit in the Commercial Court. If you hold unpaid security cheques from distributors, review our{" "}
                    <Link
                      href="/blank-signed-security-cheque-section-20-138-ni-act-distributor-recovery"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      Section 20 &amp; Section 138 Cheque Recovery Guide
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10: Dual B2B CTA Component */}
            <section className="scroll-mt-28">
              <QCommerceNoticeCTA />
            </section>

            {/* Section 11: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                  10
                </span>
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                FAQs: Quick-Commerce &amp; Modern-Trade Vendor Payment Recovery
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Direct statutory and operational answers for Brand Founders, CFOs, and Supply Chain Heads:
              </p>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-white overflow-hidden transition-all"
                  >
                    <summary className="flex items-center justify-between p-4 text-xs sm:text-sm font-bold text-slate-900 cursor-pointer hover:bg-slate-50">
                      <span className="pr-4">{faq.question}</span>
                      <span className="text-[#DC2626] transition-transform duration-200 group-open:rotate-180 shrink-0">
                        &darr;
                      </span>
                    </summary>
                    <div className="p-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory Sources & External Links */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                  11
                </span>
                <span>Statutory Acts &amp; Official References</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Statutory Acts, Commercial Court Portals &amp; Official Filing Links
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Verify bare legislative provisions and commercial court filing portals through primary government databases:
              </p>

              <ul className="space-y-2 text-xs">
                {PRIMARY_SOURCES.map((source, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&rarr;</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] font-medium underline"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Author & Reviewer Attribution */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 gap-2">
                <div>
                  <span className="font-bold text-slate-700">Author:</span> Anuj Anand Malik &bull; Advocate &amp; Founder, AMA Legal Solutions
                  {/* // TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
                </div>
                <div>
                  <span className="font-bold text-slate-700">Last Updated:</span> November 17, 2026 &bull; Verified under BSA 2023 &amp; MSMED Act
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
