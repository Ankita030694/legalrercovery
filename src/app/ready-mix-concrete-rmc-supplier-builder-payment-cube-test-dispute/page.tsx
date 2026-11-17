import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import RmcTableOfContents from "./RmcTableOfContents";
import RmcScenarioTabs from "./RmcScenarioTabs";
import RmcNoticeCTA from "./RmcNoticeCTA";

export const revalidate = 86400;

const PAGE_URL = "/ready-mix-concrete-rmc-supplier-builder-payment-cube-test-dispute";
const EXACT_H1 =
  "Builder Poured 2,000 Cu.M of Ready-Mix Concrete (RMC) and Now Claims '28-Day Cube Strength Failure' to Dodge ₹1.2 Crore? Legal Playbook";
const META_TITLE = "RMC Supplier Payment Recovery: Beat Bogus Cube Failures";
const META_DESCRIPTION =
  "Expose un-witnessed site cube tests violating IS 456/IS 516 curing norms, prove plant retention-cube strength & recover unpaid RMC bills fast.";

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
    title: "Bureau of Indian Standards — IS 456:2000 (Plain and Reinforced Concrete — Code of Practice, Clauses 15, 16 & 17)",
    url: "https://www.bis.gov.in/",
  },
  {
    title: "The Sale of Goods Act, 1930 (Section 42 — Intimation of Acceptance & Loss of Right of Rejection) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "The Insolvency and Bankruptcy Code, 2016 (Sections 8 & 9 — Operational Creditor Demand Notice & Mobilox Standard)",
    url: "https://www.indiacode.nic.in/handle/123456789/15479",
  },
  {
    title: "The Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure for Written Commercial Contracts & Invoices)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 — 45-Day Cap & 3x RBI Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Automated SCADA Batching Printouts & Electronic Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Sections 138 & 143A — Cheque Dishonour & 20% Interim Compensation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Sham 'Pre-Existing Disputes' Under IBC Section 8 & 9",
    parties: "Mobilox Innovations Private Limited v. Kirusa Software Private Limited",
    citation: "(2018) 1 SCC 353, Supreme Court of India",
    facts:
      "An operational creditor served a Section 8 demand notice for unpaid invoices. The corporate debtor attempted to defeat NCLT admission by raising a belated, unsubstantiated quality/breach defense.",
    holding:
      "The Supreme Court held that a 'dispute' under Section 8(2)(a) of the IBC must be a genuine, pre-existing dispute raised prior to the demand notice—not a 'patently feeble legal argument or an assertion of fact unsupported by evidence' or a 'moonshine defense' manufactured solely to evade payment.",
    amount: "Moonshine Dispute Test — Defeats Post-Demand Backdated Cube Failure Emails",
    takeaway:
      "When a builder pours 2,000 Cu.M of RMC, casts upper slabs, sells RERA flats, and raises a '28-day cube failure' only after receiving a demand notice, NCLT treats it as a sham moonshine defense.",
  },
  {
    title: "Supreme Court on MSMED Act 3x Compound Interest Overriding Contract Bars",
    parties: "Silpi Industries v. Kerala State Road Transport Corporation & Anr.",
    citation: "2021 SCC OnLine SC 439, Supreme Court of India",
    facts:
      "Buyers inserted standard purchase-order clauses excluding interest on delayed payments and argued that contractual terms barred statutory interest claims under the MSMED Act, 2006.",
    holding:
      "The Supreme Court affirmed that the MSMED Act, 2006 is a special welfare statute with overriding effect under Section 24. Once an MSE supplier holds valid Udyam registration on the date of supply, Section 16 mandates 3x RBI Bank Rate compound monthly interest regardless of contrary PO clauses.",
    amount: "Mandatory 3x RBI Compound Interest — Overrides Builder PO 'Zero Interest' Clauses",
    takeaway:
      "Registered Micro and Small RMC plants can claim compounded monthly statutory interest on overdue concrete bills even if the builder's work order disclaims late-payment interest.",
  },
  {
    title: "Supreme Court on Security Cheques Crystallizing Into Section 138 Liability",
    parties: "Sripati Singh (Since Deceased) Through His Son Gaurav Singh v. State of Jharkhand",
    citation: "2021 SCC OnLine SC 1002, Supreme Court of India",
    facts:
      "A debtor argued that post-dated cheques handed over 'as security' at the start of a commercial transaction could not be prosecuted under Section 138 of the NI Act when presented after default.",
    holding:
      "The Supreme Court ruled that a cheque issued as security is not a worthless piece of paper; once the underlying supply debt becomes due and payable on the date of presentation, dishonour triggers full criminal liability under Section 138 NI Act.",
    amount: "Full Section 138 & 143A (20% Interim Deposit) Liability on Builder Security Cheques",
    takeaway:
      "RMC suppliers holding builder PDCs or security cheques can deposit them upon 45-day default and prosecute directors criminally alongside civil recovery.",
  },
  {
    title: "Supreme Court on Mandatory Pre-Institution Mediation Under Commercial Courts Act s.12A",
    parties: "Patil Automation Private Limited v. Rakheja Engineers Private Limited",
    citation: "(2022) 10 SCC 1, Supreme Court of India",
    facts:
      "Commercial suppliers filed recovery suits directly in Commercial Courts without exhausting pre-institution mediation under Section 12A of the Commercial Courts Act, 2015 where no urgent interim relief was sought.",
    holding:
      "The Supreme Court held that Section 12A is mandatory for commercial suits of ₹3 Lakh and above unless the plaint genuinely contemplates urgent interim relief (such as Order XXXVIII Rule 5 attachment before judgment).",
    amount: "Mandatory Section 12A Protocol — Avoids Plaint Rejection Under Order VII Rule 11",
    takeaway:
      "RMC plants filing Commercial Suits or Order XXXVII suits above ₹3 Lakh must either complete 12A mediation or plead urgent asset-dissipation interim attachment.",
  },
];

const FAQS = [
  {
    question: "Can a builder withhold ₹1.2 Crore for RMC after pouring the slab and continuing construction?",
    answer:
      "No. Under Section 42 of the Sale of Goods Act, 1930, once a builder pours Ready-Mix Concrete into formwork, allows it to harden into a permanent structural slab, and proceeds to construct upper floors or sell units under RERA without demolishing the slab, the builder is legally deemed to have accepted the concrete. They lose the statutory right to reject the goods or withhold the full invoice value.",
  },
  {
    question: "What makes a builder's '28-day cube strength failure' report legally invalid?",
    answer:
      "Under IS 456:2000 (Clauses 15–16) and IS 516, concrete acceptance testing requires joint sampling from the transit mixer chute, standardized compaction, 24-hour covered storage, continuous water-tank curing at 27±2°C, and witnessed testing at a NABL-accredited lab. Unilateral site cubes cured improperly in open sun or crushed without the RMC plant QA engineer's signature have zero evidentiary weight against the plant's automated SCADA batching printouts and NABL-tested retention cubes.",
  },
  {
    question: "Can an RMC supplier file an IBC Section 8 notice if the builder sends a fake cube failure email?",
    answer:
      "Yes, provided the overdue operational debt is ₹1 Crore or more against a corporate developer. Under the Supreme Court's Mobilox Innovations doctrine, only a genuine, contemporaneous pre-existing dispute blocks IBC Section 9 admission. If the builder sent the cube failure email only after your payment reminder—while keeping the slab intact and marketing RERA flats—NCLT treats it as a sham 'moonshine dispute'.",
  },
  {
    question: "Are automated batching-plant SCADA printouts and transit mixer pour slips admissible in court?",
    answer:
      "Yes. Under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023 (which replaced Section 65B of the Indian Evidence Act), automated SCADA batching-plant printouts, GPS transit mixer logs, weighbridge slips, and digital pour slips are fully admissible as primary electronic evidence when accompanied by a Section 63 BSA certificate signed by the plant's authorized systems officer.",
  },
  {
    question: "What if the builder demands core-cutting deductions or a 30% debit note?",
    answer:
      "Under Section 74 of the Indian Contract Act and the Supreme Court's Raman Iron Foundry principle, a buyer cannot unilaterally impose unliquidated damage deductions or arbitrary debit notes on admitted invoices. Moreover, under IS 456:2000 Clause 17.4.3, even a valid joint NABL core test passes if the average equivalent cube strength is at least 85% of the specified grade (with no individual core below 75%).",
  },
  {
    question: "How fast can an RMC plant recover dues using Order XXXVII CPC vs. MSME Samadhaan?",
    answer:
      "For Micro and Small RMC plants registered on Udyam, MSME Samadhaan (MSEFC) under Sections 15–18 of the MSMED Act awards principal plus 3x RBI Bank Rate compound monthly interest, while Section 43B(h) of the Income Tax Act forces the builder to lose tax deductions if unpaid beyond 45 days. For larger plants or non-MSME claims, an Order XXXVII CPC summary suit backed by signed pour slips and GST E-Way Bills denies the builder automatic leave to defend unless they deposit admitted sums or prove a triable defense.",
  },
  {
    question: "Can we prosecute the builder's directors for stopped security cheques while suing for recovery?",
    answer:
      "Yes. Under Sripati Singh v. State of Jharkhand (2021), dishonour of a security cheque or PDC presented after invoice default attracts criminal prosecution under Section 138 of the NI Act, including up to 20% interim compensation under Section 143A. Criminal cheque-bounce proceedings run parallel to civil Order XXXVII recovery or IBC Section 8 notices.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-17T10:00:00+05:30",
  dateModified: "2026-11-17T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
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
    name: "Ready-Mix Concrete (RMC) Supplier Payment Recovery and Cube Strength Dispute Resolution",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How RMC Suppliers Defeat Bogus 28-Day Cube Strength Failure Claims and Recover Unpaid Builder Bills",
  description:
    "Step-by-step legal and forensic playbook for Ready-Mix Concrete plants to neutralize un-witnessed IS 456/IS 516 cube test excuses and recover overdue payments.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Lock Automated Batching Printouts & Pour Slips Under BSA s.63",
      text: "Export SCADA batching-plant printouts, signed transit mixer pour slips, GST E-Way Bills, and NABL-tested plant retention cube logs with a Section 63 BSA certificate.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Document Structural Continuation & RERA Sales Under Sale of Goods Act s.42",
      text: "Capture site photographs and RERA quarterly filings proving the builder never demolished the poured slab, cast upper floors, and sold units—establishing conclusive legal acceptance.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Serve Forensic Rebuttal-Cum-Demand Notice (IS 456 + Section 43B(h))",
      text: "Issue an advocate-drafted notice exposing IS 516 curing violations, rejecting unilateral debit notes under Contract Act s.74, and notifying Section 43B(h) tax disallowance.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Present Dishonoured PDCs Under NI Act s.138 & Trigger Escalation",
      text: "Deposit overdue security cheques and serve a 30-day Section 138 notice alongside MSME Samadhaan (3x RBI interest), Order XXXVII CPC summary suit, or IBC Section 8 Form 3/4.",
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
      name: "Building Materials & RMC Recovery",
      item: `${SITE_URL}/industries/chemicals-steel-rmc-building-materials-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "RMC Cube Test Payment Dispute Playbook",
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

export default function RmcSupplierCubeDisputePage() {
  const breadcrumbItems = [
    {
      label: "Building Materials & RMC Recovery",
      href: "/industries/chemicals-steel-rmc-building-materials-recovery",
    },
    {
      label: "RMC Cube Test Dispute Playbook",
      href: PAGE_URL,
    },
  ];

  return (
    <>
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

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IS 456:2000 &amp; IS 516</span>
              <span className="text-red-500">&bull;</span>
              <span>IND-14: Building Materials &amp; RMC</span>
              <span className="text-red-500">&bull;</span>
              <span>P0 Creditor Playbook</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box (40-60 words + Parent Hub Link) */}
            <div
              aria-label="Executive Creditor Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer
              </span>
              <p>
                Under Section 42 of the Sale of Goods Act, 1930, once a builder pours RMC into structural slabs and sells flats under RERA without demolishing the pour, acceptance is legally conclusive. Expose un-witnessed IS 456/IS 516 cube tests using automated batching printouts under our{" "}
                <Link
                  href="/industries/chemicals-steel-rmc-building-materials-recovery"
                  className="text-red-400 underline hover:text-red-300 font-bold"
                >
                  Building Materials &amp; RMC Recovery Hub
                </Link>{" "}
                to recover dues via Order XXXVII CPC or IBC Section 8.
              </p>
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                  Section 42
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Slab Poured &amp; Sold = Conclusive Acceptance
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                  3x RBI Rate
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  MSMED s.16 Monthly Compound Interest
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                  IS 456 / 516
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Joint Sampling &amp; 27&plusmn;2&deg;C Curing Mandate
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                  10-Day Clock
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  IBC s.8 Form 3/4 (&ge; &rupee;1 Cr Default)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar TOC */}
            <RmcTableOfContents />

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
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Why Builders Fabricate &lsquo;28-Day Cube Failure&rsquo; Emails
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Across Indian real-estate and infrastructure corridors, Ready-Mix Concrete (RMC) plant owners and commercial concrete CFOs face a predictable liquidity trap. A developer orders 2,000 Cu.M of M30 or M40 grade concrete on 30-to-45-day credit, signs every transit mixer delivery challan and slump test slip at the site gate, and pours multiple podium and residential floor slabs. Yet the moment your accounts team serves a formal demand or{" "}
                  <Link
                    href="/recovery/vendor-payments"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    vendor payment recovery notice
                  </Link>
                  , the builder suddenly emails a backdated private-lab sheet claiming the &ldquo;28-day compressive strength cube failed.&rdquo;
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The builder&apos;s sole legal objective is to manufacture a colourable &ldquo;pre-existing dispute&rdquo; under Section 8(2)(a) of the Insolvency and Bankruptcy Code (IBC), 2016 or obtain unconditional leave to defend in an{" "}
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Order XXXVII CPC summary suit
                  </Link>
                  . However, their own construction conduct destroys this defense: <strong>they never demolished the allegedly defective slab, cast 10 additional floors directly above it, and marketed those exact flats to homebuyers under RERA.</strong>
                </p>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 sm:p-5">
                  <p className="text-xs font-black uppercase tracking-wider text-emerald-800 mb-1.5">
                    The Surgical Legal Knockout: Structural Continuation = Acceptance
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                    Under <strong>Section 42 of the Sale of Goods Act, 1930</strong>, a buyer is deemed to have accepted goods when they perform any act inconsistent with the seller&apos;s ownership. Pouring perishable liquid concrete into steel reinforcement, allowing permanent structural setting, continuing vertical construction, and selling RERA-registered units conclusively extinguishes the right to reject the concrete.
                  </p>
                </div>
              </section>

              {/* Section 2: Operational Decision Tree (Desktop SVG + Mobile Cards) */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    5-Stage RMC Cube-Dispute Neutralization &amp; Recovery Flow
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Do not negotiate blind discounts or accept unilateral core-cutting threats. Follow this 5-stage creditor decision tree to lock forensic evidence first and force full principal plus statutory interest recovery.
                </p>

                {/* Desktop SVG Decision Tree */}
                <div className="hidden md:block overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800">
                  <svg
                    viewBox="0 0 920 230"
                    width={920}
                    height={230}
                    className="w-full h-auto"
                    role="img"
                    aria-label="5-stage RMC supplier recovery decision tree from batching evidence to IBC and Order 37"
                  >
                    <defs>
                      <marker
                        id="arrow-rmc"
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#DC2626" />
                      </marker>
                    </defs>

                    {/* Stage 1 */}
                    <rect x="10" y="30" width="160" height="155" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="24" y="55" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 1 (DAY 1)</text>
                    <text x="24" y="78" fill="#FFFFFF" fontSize="13" fontWeight="bold">Lock Plant Data</text>
                    <text x="24" y="100" fill="#CBD5E1" fontSize="10.5">SCADA Batching Logs</text>
                    <text x="24" y="118" fill="#CBD5E1" fontSize="10.5">Signed Pour Slips</text>
                    <text x="24" y="136" fill="#CBD5E1" fontSize="10.5">NABL Retention Cubes</text>
                    <text x="24" y="154" fill="#34D399" fontSize="10.5">BSA s.63 Certificate</text>

                    <line x1="170" y1="107" x2="195" y2="107" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow-rmc)" />

                    {/* Stage 2 */}
                    <rect x="198" y="30" width="160" height="155" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="212" y="55" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 2 (DAY 2–3)</text>
                    <text x="212" y="78" fill="#FFFFFF" fontSize="13" fontWeight="bold">Prove Acceptance</text>
                    <text x="212" y="100" fill="#CBD5E1" fontSize="10.5">Slab Intact (No Demo)</text>
                    <text x="212" y="118" fill="#CBD5E1" fontSize="10.5">Upper Floors Cast</text>
                    <text x="212" y="136" fill="#CBD5E1" fontSize="10.5">RERA Flat Sales Live</text>
                    <text x="212" y="154" fill="#34D399" fontSize="10.5">Sale of Goods s.42</text>

                    <line x1="358" y1="107" x2="383" y2="107" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow-rmc)" />

                    {/* Stage 3 */}
                    <rect x="386" y="30" width="160" height="155" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="400" y="55" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 3 (DAY 5)</text>
                    <text x="400" y="78" fill="#FFFFFF" fontSize="13" fontWeight="bold">Forensic Notice</text>
                    <text x="400" y="100" fill="#CBD5E1" fontSize="10.5">Expose IS 516 Breach</text>
                    <text x="400" y="118" fill="#CBD5E1" fontSize="10.5">Reject Debit Notes s.74</text>
                    <text x="400" y="136" fill="#CBD5E1" fontSize="10.5">43B(h) Tax Warning</text>
                    <text x="400" y="154" fill="#FBBF24" fontSize="10.5">Email+WA+RPAD</text>

                    <line x1="546" y1="107" x2="571" y2="107" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow-rmc)" />

                    {/* Stage 4 */}
                    <rect x="574" y="30" width="160" height="155" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="588" y="55" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 4 (DAY 15)</text>
                    <text x="588" y="78" fill="#FFFFFF" fontSize="13" fontWeight="bold">Dual Leverage</text>
                    <text x="588" y="100" fill="#CBD5E1" fontSize="10.5">Deposit Security PDCs</text>
                    <text x="588" y="118" fill="#CBD5E1" fontSize="10.5">NI Act s.138 Notice</text>
                    <text x="588" y="136" fill="#CBD5E1" fontSize="10.5">MSME Samadhaan</text>
                    <text x="588" y="154" fill="#34D399" fontSize="10.5">3x RBI Compounding</text>

                    <line x1="734" y1="107" x2="759" y2="107" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow-rmc)" />

                    {/* Stage 5 */}
                    <rect x="762" y="30" width="148" height="155" rx="12" fill="#DC2626" />
                    <text x="774" y="55" fill="#FEE2E2" fontSize="11" fontWeight="bold">STAGE 5 (DAY 30+)</text>
                    <text x="774" y="78" fill="#FFFFFF" fontSize="13" fontWeight="bold">Forum Strike</text>
                    <text x="774" y="100" fill="#FFFFFF" fontSize="10.5">&ge;₹1 Cr: IBC s.8/9</text>
                    <text x="774" y="118" fill="#FFFFFF" fontSize="10.5">&lt;₹1 Cr: Order 37</text>
                    <text x="774" y="136" fill="#FFFFFF" fontSize="10.5">s.143A 20% Deposit</text>
                    <text x="774" y="154" fill="#FEF08A" fontSize="10.5">Full Recovery</text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="grid grid-cols-1 gap-3 md:hidden">
                  {[
                    {
                      stage: "Stage 1 (Day 1): Lock Plant Data",
                      desc: "Export SCADA batching printouts, signed pour slips, GST E-Way Bills & NABL retention cube logs with BSA s.63 certificate.",
                    },
                    {
                      stage: "Stage 2 (Day 2–3): Prove Acceptance",
                      desc: "Document intact slab, upper-floor casting, and RERA flat sales to establish conclusive acceptance under Sale of Goods Act s.42.",
                    },
                    {
                      stage: "Stage 3 (Day 5): Forensic Demand Notice",
                      desc: "Serve notice exposing IS 456/516 curing violations, rejecting s.74 debit notes, and invoking Income Tax s.43B(h).",
                    },
                    {
                      stage: "Stage 4 (Day 15): Dual Leverage",
                      desc: "Present security cheques for NI Act s.138 prosecution and file MSME Samadhaan for 3x RBI compound monthly interest.",
                    },
                    {
                      stage: "Stage 5 (Day 30+): Forum Strike",
                      desc: "File IBC Section 8/9 (>= ₹1 Crore) or Order XXXVII CPC summary suit + Section 143A 20% interim deposit.",
                    },
                  ].map((item) => (
                    <div
                      key={item.stage}
                      className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                    >
                      <p className="text-xs font-black text-red-400 mb-1">{item.stage}</p>
                      <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: Statutory Matrix Table */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory Matrix for Defeating RMC Quality Disputes
                  </h2>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 font-bold">Statute / Standard</th>
                        <th className="p-3.5 font-bold">Key Provision</th>
                        <th className="p-3.5 font-bold">How It Destroys Builder&apos;s Defense</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">IS 456:2000 &amp; IS 516</td>
                        <td className="p-3.5 text-slate-700">Clauses 15, 16 &amp; 17.4.3</td>
                        <td className="p-3.5 text-slate-700">
                          Invalidates un-witnessed site cube crushing and improper open-air curing; validates NABL retention cubes &amp; 85%/75% core pass thresholds.
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">Sale of Goods Act, 1930</td>
                        <td className="p-3.5 text-slate-700">Section 42</td>
                        <td className="p-3.5 text-slate-700">
                          Pouring concrete into structural slabs and continuing upper-floor construction / RERA flat sales constitutes irreversible legal acceptance.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">IBC, 2016</td>
                        <td className="p-3.5 text-slate-700">Sections 8 &amp; 9 (Form 3/4)</td>
                        <td className="p-3.5 text-slate-700">
                          For defaults &ge; &rupee;1 Crore, post-demand cube emails fail the <em>Mobilox</em> genuine pre-existing dispute test and trigger insolvency pressure.
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">CPC, 1908</td>
                        <td className="p-3.5 text-slate-700">Order XXXVII Summary Suit</td>
                        <td className="p-3.5 text-slate-700">
                          Signed pour slips, POs, and GST invoices qualify as written contracts; builder cannot defend without court leave &amp; cash security.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">MSMED Act, 2006</td>
                        <td className="p-3.5 text-slate-700">Sections 15–18 &amp; 24</td>
                        <td className="p-3.5 text-slate-700">
                          Caps credit at 45 days and awards 3x RBI Bank Rate compound monthly interest, overriding zero-interest builder PO clauses.
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">BSA, 2023</td>
                        <td className="p-3.5 text-slate-700">Section 63</td>
                        <td className="p-3.5 text-slate-700">
                          Renders automated SCADA batching-plant printouts, GPS transit-mixer logs, and WhatsApp site confirmations admissible in court.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">NI Act, 1881</td>
                        <td className="p-3.5 text-slate-700">Sections 138 &amp; 143A</td>
                        <td className="p-3.5 text-slate-700">
                          Criminalizes stopped/bounced builder security cheques and empowers courts to order 20% interim deposit within 60 days.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Interactive Scenario Explorer */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Interactive Builder Excuse &amp; Counter-Strategy Explorer
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select the exact tactic your defaulting developer is using to stall payment and inspect the statutory counter-strike.
                </p>
                <RmcScenarioTabs />
              </section>

              {/* Section 5: Worked Financial & Interest Calculation Box */}
              <section
                id="heading-worked-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Worked Claim Ledger: 2,000 Cu.M RMC (&rupee;1.20 Crore Principal)
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Consider a typical commercial supply of 2,000 Cu.M of M30/M40 grade concrete at &rupee;6,000/Cu.M (inclusive of GST and pumping charges) where payment is withheld for 180 days past the 45-day statutory credit limit. Use our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>{" "}
                  to compute exact daily compounding for your ledger.
                </p>

                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
                    <span className="text-xs font-black uppercase tracking-widest text-red-400">
                      Illustrative Recovery Ledger (MSMED Act s.16 + Order XXXVII)
                    </span>
                    <span className="text-xs text-slate-400">
                      Assumed RBI Bank Rate: 6.75% &rarr; 3x = 20.25% p.a. Monthly Compounded
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-xs text-slate-400">Admitted Principal (2,000 Cu.M)</p>
                      <p className="text-xl sm:text-2xl font-black text-white mt-1">
                        &rupee;1,20,00,000
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Backed by E-Way Bills &amp; Pour Slips
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-xs text-slate-400">6-Month Compound Interest (20.25%)</p>
                      <p className="text-xl sm:text-2xl font-black text-emerald-400 mt-1">
                        ~&rupee;12,67,000
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Compounded monthly under s.16
                      </p>
                    </div>
                    <div className="bg-emerald-950/60 rounded-xl p-4 border border-emerald-700/50">
                      <p className="text-xs text-emerald-300">Total Recoverable Claim</p>
                      <p className="text-xl sm:text-2xl font-black text-emerald-400 mt-1">
                        &rupee;1,32,67,000
                      </p>
                      <p className="text-[11px] text-emerald-200 mt-1">
                        + Builder 43B(h) Tax Disallowance (~&rupee;30L+ tax hit)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-black uppercase tracking-wider text-amber-800 mb-1">
                    Section 43B(h) Tax Leverage Against Builders
                  </p>
                  <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    If your RMC plant is a registered Micro or Small enterprise under Udyam, any &rupee;1.20 Crore invoice unpaid beyond 45 days on 31 March is disallowed as a business expense for the builder under Section 43B(h) of the Income Tax Act, adding ~&rupee;30 Lakh+ in immediate corporate tax liability until they pay you.
                  </p>
                </div>
              </section>

              {/* Section 6: Evidence & BSA 2023 s.63 Checklist */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    RMC Plant Evidence &amp; BSA 2023 Section 63 Checklist
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before serving your statutory notice or{" "}
                  <Link
                    href="/templates/legal-notice-reply-format"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    rebuttal notice format
                  </Link>
                  , assemble this 6-point evidentiary dossier so the builder cannot contest batch quality or delivery:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "1. Automated SCADA Batching-Plant Printouts",
                      detail:
                        "Time-stamped digital logs proving exact cement grade, fly-ash/GGBS ratio, aggregates, water-cement ratio, and admixture dosing for every mixer load.",
                    },
                    {
                      title: "2. Signed Transit Mixer Pour Slips & GPS Logs",
                      detail:
                        "Delivery challans signed by the builder's site engineer with arrival/discharge timestamps, slump test readings, and zero contemporaneous quality objections.",
                    },
                    {
                      title: "3. NABL-Tested Plant Retention Cube Reports",
                      detail:
                        "7-day and 28-day compressive strength certificates of retention cubes cured in your plant's temperature-controlled 27±2°C IS 516 curing tanks.",
                    },
                    {
                      title: "4. GST Tax Invoices, E-Way Bills & GSTR-1",
                      detail:
                        "Irrefutable tax trail proving the builder claimed Input Tax Credit (ITC) on the very concrete invoices they now attempt to dispute.",
                    },
                    {
                      title: "5. RERA Filings & Structural Continuation Proof",
                      detail:
                        "State RERA quarterly progress reports, site photos, and flat-booking brochures proving the slab was never demolished and units are being sold.",
                    },
                    {
                      title: "6. BSA 2023 Section 63 Electronic Certificate",
                      detail:
                        "Statutory affidavit signed by your plant's IT/SCADA custodian certifying the integrity of batching printouts, emails, and WhatsApp site confirmations.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                    >
                      <p className="text-xs sm:text-sm font-black text-slate-900 mb-1">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 7: Court Precedents */}
              <section
                id="heading-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Landmark Supreme Court Precedents Protecting Suppliers
                  </h2>
                </div>

                <div className="space-y-4">
                  {COURT_PRECEDENTS.map((prec) => (
                    <div
                      key={prec.parties}
                      className="border border-slate-200 rounded-2xl p-5 bg-slate-50 relative overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                      <div className="pl-3 space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-sm sm:text-base font-black text-slate-900">
                            {prec.parties}
                          </h3>
                          <span className="text-[11px] font-bold text-[#DC2626] bg-red-50 px-2.5 py-0.5 rounded-full border border-red-200">
                            {prec.citation}
                          </span>
                        </div>
                        <p className="text-xs font-bold text-slate-700">{prec.amount}</p>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          <strong>Holding:</strong> {prec.holding}
                        </p>
                        <p className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2 font-medium">
                          <strong>RMC Creditor Takeaway:</strong> {prec.takeaway}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Dual-Track CTA */}
              <section aria-label="Initiate RMC Payment Recovery">
                <RmcNoticeCTA />
              </section>

              {/* Sibling Spokes & Related Material Guides */}
              <section className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 md:p-8 border border-slate-800 space-y-4">
                <p className="text-xs font-black uppercase tracking-widest text-red-400">
                  IND-14 Building Materials &amp; Industrial Credit Cluster
                </p>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  Explore Related Material Supplier Recovery Playbooks
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link
                    href="/tmt-steel-structural-iron-trader-credit-default-recovery-india"
                    className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                  >
                    <p className="text-xs font-bold text-white">
                      TMT Steel &amp; Structural Iron Trader Recovery &rarr;
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Weighbridge slips, MTC &amp; Order XXXVII suits against builders.
                    </p>
                  </Link>
                  <Link
                    href="/industrial-chemicals-solvents-dyes-pigments-invoice-recovery"
                    className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                  >
                    <p className="text-xs font-bold text-white">
                      Industrial Chemicals, Solvents &amp; Dyes Recovery &rarr;
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      COA batch-testing &amp; purity variance dispute rebuttal.
                    </p>
                  </Link>
                  <Link
                    href="/polymer-granules-plastic-raw-material-pp-hdpe-pvc-trader-recovery"
                    className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                  >
                    <p className="text-xs font-bold text-white">
                      Polymer Granules (PP/HDPE/PVC) Trader Recovery &rarr;
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Defeating rate-fall excuses &amp; enforcing credit limits.
                    </p>
                  </Link>
                  <Link
                    href="/cheque-bounce-and-civil-suit-together"
                    className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                  >
                    <p className="text-xs font-bold text-white">
                      Cheque Bounce &amp; Civil Suit Together &rarr;
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Parallel NI Act s.138 &amp; Order XXXVII CPC strategy.
                    </p>
                  </Link>
                </div>
              </section>

              {/* Section 8: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Frequently Asked Questions (RMC Payment Disputes)
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq) => (
                    <details
                      key={faq.question}
                      className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white open:shadow-sm transition-all"
                    >
                      <summary className="cursor-pointer list-none p-4 font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-3">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] font-black text-base shrink-0 group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 9: Statutory Sources */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory &amp; Technical Sources
                  </h2>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {PRIMARY_SOURCES.map((source) => (
                    <li key={source.url} className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&bull;</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="hover:text-[#DC2626] underline decoration-slate-300"
                      >
                        {source.title}
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
    </>
  );
}
