import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CorrugatedRecoveryTableOfContents from "./CorrugatedRecoveryTableOfContents";
import CorrugatedRecoveryScenarioTabs from "./CorrugatedRecoveryScenarioTabs";
import CorrugatedRecoveryCTA from "./CorrugatedRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/corrugated-box-carton-manufacturer-bursting-strength-gsm-dispute-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

// Exact PDF/JSON H1 (136 chars) — kept verbatim in BOTH <h1> and ARTICLE_SCHEMA.headline
const EXACT_H1 =
  "Buyer Packed & Shipped Its Products in Your Corrugated Cartons—Then Deducted 15% Alleging 'Low Bursting Factor (BF) / Monsoon Moisture'?";

// 55 chars — tightened from 64ch PDF draft for Screaming Frog 30–60ch limit while preserving primary keyword
const META_TITLE = "Corrugated Box Manufacturer Recovery: GSM & BF Disputes";

// 154 chars — tightened from 172ch PDF draft for Screaming Frog 120–155ch limit while keeping every statutory hook
const META_DESCRIPTION =
  "Under Sale of Goods Act s.42, shipping goods in your cartons is final acceptance. Stop unilateral BF/moisture deductions & enforce 45-day MSME 43B(h) pay.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "corrugated box manufacturer unpaid invoice bursting strength moisture excuse",
    "buyer packed exported goods in cartons then claimed low bf gsm",
    "monsoon humidity moisture drop compression strength excuse",
    "kraft paper price hike rate revision corrugated box",
    "ecommerce garment pharma buyer 120 day corrugated credit",
    "section 43bh recovery for corrugated box factories",
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
      "The Sale of Goods Act, 1930 (Sections 26, 41, 42 & 55 — Passing of Risk, Deemed Acceptance by Commercial Consumption & Suit for Price)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15, 16, 17, 18 & 24 — 45-Day Ceiling, 15-Day Objection Window & 3x RBI Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Income Tax Act, 1961 — Section 43B(h) (Mandatory Tax Disallowance for Buyer Payments Delayed Beyond 45 Days to Micro & Small Enterprises)",
    url: "https://www.incometaxindia.gov.in/pages/acts/income-tax-act.aspx",
  },
  {
    title:
      "MSME Samadhaan Portal — Delayed Payment Monitoring System & MSEFC Reference Filing (Ministry of MSME, Government of India)",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title:
      "Bureau of Indian Standards (BIS) — IS 2771 (Part 1) Corrugated Fibreboard Boxes & IS 1060 Paper/Board Conditioning & Testing Methods",
    url: "https://www.bis.gov.in/",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Sections 138, 139 & 143A — Dishonoured Buyer Cheques & 20% Interim Compensation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility of WhatsApp Rate Approvals, SAP Vendor Portal Logs & Dispatch Photographs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    q: "Can a buyer deduct 10%–15% for 'low Bursting Factor (BF) or GSM' after packing and shipping its own goods in our corrugated cartons?",
    a: "No. Under Section 42 of the Sale of Goods Act, 1930, once a buyer consumes your corrugated boxes to pack, tape, strap, and dispatch its finished merchandise to distributors or overseas ports, the buyer has performed an act inconsistent with the seller's ownership. That constitutes irrevocable statutory acceptance. Without a written quality objection raised within 15 days of delivery (MSMED Act s.2(b) Explanation) and a joint pre-use test at an NABL or Indian Institute of Packaging (IIP) lab, any retrospective debit note is legally unenforceable.",
  },
  {
    q: "During monsoon, cartons stored in the buyer's damp warehouse absorb humidity and lose Box Compression Test (BCT) strength. Who bears that loss?",
    a: "The buyer bears post-delivery storage deterioration under Section 26 of the Sale of Goods Act, 1930. Kraft paper and fluting media are naturally hygroscopic; when ambient relative humidity crosses 80% RH in an unventilated godown, board moisture jumps from 7%–9% to 15%+, cutting BCT and Edge Crush Test (ECT) values by 35%–50%. Under BIS IS 1060 and IS 2771 (Part 1), valid BF/ECT/BCT testing requires prior conditioning at 27°C ± 1°C and 65% ± 2% RH. Dispatch-day moisture logs and clean GRNs completely defeat monsoon excuses.",
  },
  {
    q: "Our automatic corrugated unit is Udyam-registered as a Small Enterprise, but the FMCG/e-commerce buyer's vendor portal enforces 90-to-120-day credit. Does the 45-day rule still apply?",
    a: "Yes. Section 24 of the MSMED Act, 2006 overrides every private contract, purchase order, and SAP/Ariba vendor portal term. Even if your sales team accepted a 90-day or 120-day payment clause, the statutory ceiling remains strictly 45 days from the date of delivery or deemed acceptance. Beyond Day 45, the buyer owes monthly-compounded interest at three times the RBI bank rate (Section 16) and suffers full expense disallowance under Section 43B(h) of the Income Tax Act if unpaid past March 31.",
  },
  {
    q: "Should a corrugated box manufacturer issue a GST Credit Note if the buyer sends an arbitrary BF/GSM debit note?",
    a: "Never issue a GST Credit Note under Section 34 of the CGST Act unless you expressly agree to a verified defect after joint inspection. Issuing a credit note acts as a binding accounting admission of the deduction, wipes out your legal claim to that 15% amount, and weakens your MSEFC or Order XXXVII case. Instead, formally reject the buyer's debit note in writing within 72 hours and demand full invoice settlement.",
  },
  {
    q: "Mill kraft paper prices rose ₹5–₹8/kg mid-quarter and the buyer verbally approved revised rates on WhatsApp, but later paid only at the old PO rate. Can we recover the differential?",
    a: "Yes. Under Section 70 of the Indian Contract Act, 1872 and Section 9 of the Sale of Goods Act, 1930, when a buyer receives your written kraft rate-revision circular, requests urgent dispatch via email or WhatsApp (authenticated under BSA 2023 s.63), accepts the revised-rate GST Tax Invoices, and claims full GSTR-2B Input Tax Credit on that invoice value, the buyer is estopped from paying the obsolete PO rate. You can demand immediate release of undisputed base dues alongside the accepted rate differential.",
  },
  {
    q: "How does Section 43B(h) of the Income Tax Act force corporate buyers to settle corrugated box arrears quickly?",
    a: "Under Section 43B(h) of the Income Tax Act, 1961, any corporate or audited buyer that fails to pay an Udyam-registered Micro or Small corrugated box manufacturer within 45 days (or 15 days without written credit terms) loses the right to claim the entire packaging purchase as a deductible business expense in that financial year. On a ₹18.5 lakh unpaid packaging ledger, a company paying 25.17% corporate tax faces an immediate ₹4.65 lakh extra income tax outflow plus statutory audit qualification in Form 3CD Clause 22.",
  },
  {
    q: "What if the buyer threatens to stop future carton orders or hold our printing stereos/cutting dies if we send an Advocate Legal Notice?",
    a: "Corrugated factories often fear losing a buyer whose margins are already destroyed by 120-day credit and 15% fake debit notes. In practice, a calibrated, statute-backed Advocate Demand Notice addressed to the buyer's CFO and Finance Controller—highlighting Section 43B(h) tax disallowance, Form 3CD audit disclosure, and MSEFC 3x RBI compound interest—resolves 60%–70% of corporate packaging disputes at the pre-litigation stage because procurement cannot justify an illegal debit note to internal statutory auditors.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-19T10:30:00+05:30",
  dateModified: "2026-11-19T10:30:00+05:30",
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
    name: "Corrugated Box Manufacturer Bursting Strength & GSM Dispute Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "5-Stage Recovery Playbook for Corrugated Box Manufacturers Facing Unilateral BF/GSM/Moisture Deductions",
  description:
    "Step-by-step statutory escalation protocol for FCBM corrugated box factories to defeat post-dispatch quality debit notes under Sale of Goods Act s.42 and enforce 45-day MSME / Section 43B(h) payment.",
  totalTime: "P45D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Reject the Unilateral Debit Note Within 72 Hours & Freeze GST Credit Notes",
      text: "Refuse to issue a GST Credit Note under CGST s.34 and reply in writing enclosing clean signed GRN, Kraft Mill Test Certificates (MTC), in-house Bursting Strength Tester logs, and dispatch-day moisture readings.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Invoke Sale of Goods Act s.42 Deemed Acceptance & Demand Joint Pre-Use Lab Proof",
      text: "Document that the buyer packed and dispatched finished merchandise inside your cartons without raising a written objection within 15 days under MSMED s.2(b) or conducting a joint conditioned NABL/IIP test under IS 1060.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Serve an Advocate Statutory Notice Triggering Section 43B(h) & Form 3CD Audit Alert",
      text: "Dispatch a formal 15-day Advocate Demand Notice via Email, WhatsApp, and Speed Post RPAD copying the buyer's CFO and Statutory Auditor on Income Tax s.43B(h) disallowance and CGST s.16(2) 180-day ITC reversal risk.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "File MSEFC Samadhaan Reference for Principal + 3x RBI Compound Interest",
      text: "For Udyam-registered Micro and Small corrugated plants, lodge an online reference on MSME Samadhaan under Sections 15–18 demanding principal plus monthly-compounded interest at three times the RBI bank rate from Day 46.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Execute Parallel NI Act s.138 Cheque Prosecution or Order XXXVII Commercial Suit",
      text: "Where post-dated cheques dishonour or non-MSME / Medium enterprise claims exceed ₹3–₹10 lakh, initiate Section 138 criminal prosecution (with 20% s.143A interim deposit) or an Order XXXVII Summary Suit.",
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
      name: "Corrugated Box BF & GSM Dispute Recovery",
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

export default function CorrugatedBoxBurstingStrengthRecoveryPage() {
  const breadcrumbItems = [
    {
      label: "Packaging, Printing & Paper Mill Recovery",
      href: "/industries/packaging-printing-paper-mill-recovery",
    },
    {
      label: "Corrugated Box BF / GSM Dispute Recovery",
      href: PAGE_URL,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Server-Side Rendered JSON-LD Schemas */}
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

      {/* Dark Gradient Editorial Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-22 &middot; Packaging &amp; Corrugated Box Plants</span>
            <span className="text-red-500">&bull;</span>
            <span>Sale of Goods Act s.42 &amp; MSMED s.15&ndash;18</span>
            <span className="text-red-500">&bull;</span>
            <span>FCBM Creditor Playbook</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40–60 Word AI-Citation Executive Statutory Summary */}
          <div
            aria-label="Executive Creditor Answer"
            className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
          >
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &mdash; Sale of Goods Act s.42 &amp; Section 43B(h)
            </span>
            <p>
              Under Section 42 of the Sale of Goods Act, 1930, once a buyer packs and dispatches finished goods in your corrugated cartons, acceptance is legally irreversible—destroying any right to impose 10%&ndash;15% Bursting Factor (BF), GSM, or monsoon moisture debit notes without a pre-use joint NABL/IIP test. Paired with{" "}
              <Link
                href="/law/section-43bh-msme-payment-rule"
                className="text-red-300 underline decoration-red-400/60 hover:text-white font-semibold"
              >
                Section 43B(h)
              </Link>{" "}
              and MSMED ss.15&ndash;18, Udyam box factories can enforce 45-day payout plus 3x RBI compound interest.
            </p>
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                Section 42
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Consumption = Irrevocable Acceptance
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                45 Days Max
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                MSMED s.15 Credit Cap (Overrides 120d PO)
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                3x RBI Rate
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Monthly Compounded Statutory Interest
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                25.17% Tax Hit
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Buyer s.43B(h) Disallowance Leverage
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
          <CorrugatedRecoveryTableOfContents />

          {/* Main Editorial Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The FCBM Margin Crisis & Section 42 Acceptance Law */}
            <section
              id="heading-s42-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Why Post-Dispatch BF &amp; Moisture Debit Notes Are Illegal
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Across India&apos;s ~15,000 automatic and semi-automatic corrugated box factories—including members of the <strong>Federation of Corrugated Box Manufacturers (FCBM)</strong> and regional associations across Vapi, Silvassa, Bhiwandi, Pune, Baddi, Noida, Sivakasi, and Bengaluru—net EBITDA margins typically sit between <strong>6% and 9%</strong>. Paper mills supply kraft reels on strict 15-to-21-day credit (or cash against delivery), while starch, stitching wire, power, and labour require immediate weekly outflows.
                </p>
                <p>
                  Yet corporate FMCG, pharmaceutical, garment-export, and e-commerce buyers routinely run a two-pronged squeeze: forcing 90-to-120-day payment cycles on vendor portals and then slapping a unilateral <strong>10% to 15% quality debit note</strong> 45 to 75 days after delivery, alleging &ldquo;low Bursting Factor (BF)&rdquo;, &ldquo;sub-spec GSM&rdquo;, &ldquo;Edge Crush Test (ECT) failure&rdquo;, or &ldquo;monsoon moisture collapse&rdquo;. Because a 15% arbitrary deduction wipes out double the box maker&apos;s entire net profit on the batch, silent acceptance turns profitable corrugated plants into working-capital casualties.
                </p>
                <p>
                  Indian commercial law gives box manufacturers an overwhelming statutory weapon against this practice, anchored in our{" "}
                  <Link
                    href="/industries/packaging-printing-paper-mill-recovery"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Packaging, Corrugated Box, Printing &amp; Paper Mill Recovery Hub
                  </Link>
                  . Under <strong>Section 41 and Section 42 of the Sale of Goods Act, 1930</strong>, a buyer has a reasonable pre-use window to inspect incoming cartons and reject non-conforming lots. The instant the buyer feeds your 3-ply, 5-ply, or 7-ply Regular Slotted Containers (RSC) onto its packing conveyor, fills them with soaps, pharma bottles, or export garments, seals them with BOPP tape, and dispatches trucks out of its factory gate, the buyer has committed an <strong>act inconsistent with the seller&apos;s ownership</strong>.
                </p>
              </div>

              {/* 3-Card Statutory Shield Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Sale of Goods Act s.42
                  </span>
                  <strong className="text-sm font-bold text-slate-900 block mb-1">
                    Outward Dispatch = Final Acceptance
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Once cartons leave the buyer&apos;s warehouse containing finished merchandise, the buyer forfeits the statutory right to reject the batch or slash the invoiced price unilaterally.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 block mb-1">
                    MSMED Act s.2(b) Explanation
                  </span>
                  <strong className="text-sm font-bold text-slate-900 block mb-1">
                    15-Day Deemed Acceptance Lock
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the buyer fails to record a specific written QC objection within 15 days from actual delivery, &ldquo;day of deemed acceptance&rdquo; freezes the full invoice as legally admitted debt.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 block mb-1">
                    CGST Act s.16(2) Proviso
                  </span>
                  <strong className="text-sm font-bold text-slate-900 block mb-1">
                    ITC Claim Proves Full Value
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When a buyer claims 100% GST Input Tax Credit in GSTR-2B on your tax invoice without your signed Credit Note, it cannot lawfully dispute the underlying taxable value 60 days later.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: 5-Stage Corrugated Recovery Decision Tree (SVG + Mobile Cards) */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  5-Stage Recovery Decision Tree for Corrugated Box Plants
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Follow this sequential creditor protocol from the hour a buyer portal posts an arbitrary BF/GSM debit note or crosses Day 45 on an Udyam packaging ledger.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto rounded-xl border border-slate-200 bg-slate-900 p-4">
                <svg
                  width="860"
                  height="250"
                  viewBox="0 0 860 250"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="5-stage legal recovery decision tree for corrugated box manufacturers defeating BF and moisture debit notes"
                  className="w-full h-auto"
                >
                  <rect width="860" height="250" rx="12" fill="#0F172A" />

                  {/* Connector Arrows */}
                  <line x1="162" y1="115" x2="188" y2="115" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="188,110 198,115 188,120" fill="#DC2626" />

                  <line x1="332" y1="115" x2="358" y2="115" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="358,110 368,115 358,120" fill="#DC2626" />

                  <line x1="502" y1="115" x2="528" y2="115" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="528,110 538,115 528,120" fill="#DC2626" />

                  <line x1="672" y1="115" x2="698" y2="115" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="698,110 708,115 698,120" fill="#DC2626" />

                  {/* Stage 1 */}
                  <rect x="20" y="38" width="142" height="154" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="32" y="50" width="64" height="20" rx="10" fill="#DC2626" />
                  <text x="64" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">STAGE 01</text>
                  <text x="32" y="92" fill="#F8FAFC" fontSize="12" fontWeight="700">72-Hr Rebuttal</text>
                  <text x="32" y="112" fill="#CBD5E1" fontSize="10">Reject Debit Note.</text>
                  <text x="32" y="128" fill="#CBD5E1" fontSize="10">Block GST Credit</text>
                  <text x="32" y="144" fill="#CBD5E1" fontSize="10">Note. Send MTC +</text>
                  <text x="32" y="160" fill="#CBD5E1" fontSize="10">BST &amp; Moisture Log.</text>

                  {/* Stage 2 */}
                  <rect x="198" y="38" width="134" height="154" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="210" y="50" width="64" height="20" rx="10" fill="#DC2626" />
                  <text x="242" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">STAGE 02</text>
                  <text x="210" y="92" fill="#F8FAFC" fontSize="12" fontWeight="700">Lock s.42 Proof</text>
                  <text x="210" y="112" fill="#CBD5E1" fontSize="10">Cite clean GRN &amp;</text>
                  <text x="210" y="128" fill="#CBD5E1" fontSize="10">outward packing.</text>
                  <text x="210" y="144" fill="#CBD5E1" fontSize="10">Bar post-15-day</text>
                  <text x="210" y="160" fill="#CBD5E1" fontSize="10">ex-parte QC tests.</text>

                  {/* Stage 3 */}
                  <rect x="368" y="38" width="134" height="154" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <rect x="380" y="50" width="64" height="20" rx="10" fill="#DC2626" />
                  <text x="412" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">STAGE 03</text>
                  <text x="380" y="92" fill="#F8FAFC" fontSize="12" fontWeight="700">CFO Legal Notice</text>
                  <text x="380" y="112" fill="#CBD5E1" fontSize="10">Serve 15-day notice</text>
                  <text x="380" y="128" fill="#CBD5E1" fontSize="10">via Email+WA+RPAD.</text>
                  <text x="380" y="144" fill="#FCA5A5" fontSize="10" fontWeight="700">Copy CFO &amp; Auditor</text>
                  <text x="380" y="160" fill="#FCA5A5" fontSize="10" fontWeight="700">on s.43B(h) Tax Hit.</text>

                  {/* Stage 4 */}
                  <rect x="538" y="38" width="134" height="154" rx="10" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
                  <rect x="550" y="50" width="64" height="20" rx="10" fill="#059669" />
                  <text x="582" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">STAGE 04</text>
                  <text x="550" y="92" fill="#F8FAFC" fontSize="12" fontWeight="700">MSEFC Filing</text>
                  <text x="550" y="112" fill="#CBD5E1" fontSize="10">Lodge Samadhaan</text>
                  <text x="550" y="128" fill="#CBD5E1" fontSize="10">claim from Day 46.</text>
                  <text x="550" y="144" fill="#6EE7B7" fontSize="10" fontWeight="700">3x RBI Compound</text>
                  <text x="550" y="160" fill="#6EE7B7" fontSize="10" fontWeight="700">Interest + Award.</text>

                  {/* Stage 5 */}
                  <rect x="708" y="38" width="132" height="154" rx="10" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
                  <rect x="720" y="50" width="64" height="20" rx="10" fill="#D97706" />
                  <text x="752" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">STAGE 05</text>
                  <text x="720" y="92" fill="#F8FAFC" fontSize="12" fontWeight="700">Parallel Decree</text>
                  <text x="720" y="112" fill="#CBD5E1" fontSize="10">NI s.138 bounce</text>
                  <text x="720" y="128" fill="#CBD5E1" fontSize="10">or Order XXXVII</text>
                  <text x="720" y="144" fill="#FDE68A" fontSize="10" fontWeight="700">Summary Suit &amp;</text>
                  <text x="720" y="160" fill="#FDE68A" fontSize="10" fontWeight="700">Bank Attachment.</text>

                  {/* Footer Caption */}
                  <text x="430" y="224" textAnchor="middle" fill="#94A3B8" fontSize="11">
                    Tip: Over 60% of FMCG, Pharma &amp; Exporter debit notes reverse at Stage 03 once Section 43B(h) &amp; Form 3CD audit risk reaches the CFO.
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  {
                    stage: "Stage 01 — 72-Hr Debit Note Rebuttal",
                    desc: "Refuse to issue a CGST s.34 Credit Note. Reply in writing enclosing clean signed GRN, Kraft Mill Test Certificates (MTC), in-house Bursting Strength Tester logs, and dispatch-day moisture readings.",
                  },
                  {
                    stage: "Stage 02 — Lock Sale of Goods Act s.42 Proof",
                    desc: "Put on record that the buyer packed and dispatched finished merchandise in your boxes with zero written objection inside the 15-day MSMED s.2(b) window and no joint IS 1060 conditioned lab test.",
                  },
                  {
                    stage: "Stage 03 — CFO & Auditor Statutory Notice",
                    desc: "Serve a 15-day Advocate Demand Notice via Email, WhatsApp, and Speed Post RPAD copying the buyer's CFO and Statutory Auditor on Income Tax s.43B(h) disallowance and CGST s.16(2) 180-day ITC reversal.",
                  },
                  {
                    stage: "Stage 04 — MSEFC Samadhaan Filing",
                    desc: "For Udyam-registered Micro/Small plants, file on MSME Samadhaan from Day 46 for principal plus 3x RBI monthly-compounded interest (overriding 90–120 day vendor portal credit terms).",
                  },
                  {
                    stage: "Stage 05 — Parallel NI s.138 / Order XXXVII",
                    desc: "For dishonoured buyer cheques or Medium/non-MSME enterprise arrears above ₹3–₹10 lakh, trigger Section 138 criminal prosecution (with 20% s.143A deposit) or Commercial Order XXXVII Summary Suit.",
                  },
                ].map((item) => (
                  <div
                    key={item.stage}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                      {item.stage}
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Remedy Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Statutory Remedy Matrix for Corrugated Box Creditors
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Select the exact legal mechanism based on your plant&apos;s Udyam tier, the buyer&apos;s excuse (BF/moisture debit note vs. kraft rate freeze vs. 120-day portal delay), and invoice ticket size.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3.5 px-4 font-bold">Statute &amp; Provision</th>
                      <th className="py-3.5 px-4 font-bold">Corrugated Factory Trigger</th>
                      <th className="py-3.5 px-4 font-bold">Creditor Advantage</th>
                      <th className="py-3.5 px-4 font-bold">Mandatory Deadline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Sale of Goods Act, 1930 (ss.26, 41, 42 &amp; 55)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Buyer packed &amp; shipped products in cartons, then raised 10%&ndash;15% BF/ECT/moisture debit note.
                      </td>
                      <td className="py-3.5 px-4 text-emerald-700 font-semibold">
                        Commercial consumption equals irrevocable acceptance; risk of damp godown storage shifts to buyer at delivery.
                      </td>
                      <td className="py-3.5 px-4 font-mono text-xs text-slate-700">
                        3 years from invoice due date (Suit for Price)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        MSMED Act, 2006 (ss.15&ndash;18 &amp; s.24)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Micro/Small Udyam box plant unpaid past 45 days (or 15 days without written credit contract).
                      </td>
                      <td className="py-3.5 px-4 text-emerald-700 font-semibold">
                        Overrides 90&ndash;120 day buyer portal terms; 3x RBI monthly-compounded interest; 75% pre-deposit for buyer appeal (s.19).
                      </td>
                      <td className="py-3.5 px-4 font-mono text-xs text-slate-700">
                        15-day buyer QC objection cap; MSEFC award target 90 days
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Income Tax Act, 1961 (Section 43B(h))
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Corporate FMCG, pharma, or garment buyer delays Micro/Small packaging bills past March 31.
                      </td>
                      <td className="py-3.5 px-4 text-red-700 font-semibold">
                        100% expense disallowance in buyer&apos;s P&amp;L + Form 3CD Clause 22 statutory audit disclosure; instant CFO pressure.
                      </td>
                      <td className="py-3.5 px-4 font-mono text-xs text-slate-700">
                        45-day cap crossing March 31 FY close
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        CGST Act, 2017 (s.16(2) 2nd Proviso &amp; s.34)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Buyer claimed GSTR-2B ITC on full invoice value, then withheld payment &gt;180 days or sent fake debit note.
                      </td>
                      <td className="py-3.5 px-4 text-emerald-700 font-semibold">
                        Buyer must reverse ITC with 18% GST interest if unpaid beyond 180 days; unilateral buyer debit note cannot cut seller&apos;s invoice without Credit Note.
                      </td>
                      <td className="py-3.5 px-4 font-mono text-xs text-slate-700">
                        180 days from Tax Invoice date
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        NI Act, 1881 (ss.138, 141 &amp; 143A)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Buyer&apos;s security PDC or running-account cheque bounces (&ldquo;Funds Insufficient&rdquo; or &ldquo;Payment Stopped&rdquo;).
                      </td>
                      <td className="py-3.5 px-4 text-red-700 font-semibold">
                        Criminal liability against Directors/Partners + up to 20% interim compensation under s.143A even during trial.
                      </td>
                      <td className="py-3.5 px-4 font-mono text-xs text-slate-700">
                        Notice within 30 days of Return Memo; 15-day pay window
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        CPC Order XXXVII &amp; Commercial Courts s.12A
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Medium/Large automatic corrugated plants (outside MSEFC) with signed POs, GST invoices &amp; GRNs &ge; &#8377;3 lakh.
                      </td>
                      <td className="py-3.5 px-4 text-emerald-700 font-semibold">
                        Summary money decree—buyer gets no right to defend unless it shows a genuine, pre-existing triable defence.
                      </td>
                      <td className="py-3.5 px-4 font-mono text-xs text-slate-700">
                        Mandatory s.12A Pre-Institution Mediation (unless urgent interim relief)
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
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  4 Real Corrugated Box Factory Disputes &amp; Counter-Playbooks
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Select your exact dispute below to inspect the buyer&apos;s deduction playbook, the statutory counter-strike, and the 3-step factory execution protocol.
              </p>

              <CorrugatedRecoveryScenarioTabs />
            </section>

            {/* Section 5: Technical-Legal Deep Dive — Defeating BF, GSM, ECT & Monsoon Moisture Pretexts */}
            <section
              id="heading-monsoon-science"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Defeating BF, GSM, ECT &amp; Monsoon Moisture Excuses Technically
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  In MSEFC conciliations and Commercial Court pleadings, corporate procurement managers attempt to hide behind technical jargon—&ldquo;Bursting Strength fell below 14 kg/cm&sup2;&rdquo;, &ldquo;180 GSM kraft tested at 172 GSM&rdquo;, or &ldquo;stack collapsed during coastal transit&rdquo;. An effective legal notice for a corrugated box manufacturer must combine statutory acceptance law with <strong>BIS IS 2771 (Part 1) and IS 1060 paperboard testing tolerances</strong> so the buyer&apos;s excuse collapses on the very first page:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 space-y-2">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                    1. Standard BIS GSM &amp; BF Manufacturing Tolerances
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Under Indian kraft paper mill trade custom and BIS standards, kraft reels carry a permissible <strong>&plusmn;5% GSM variance</strong> and <strong>&plusmn;1 BF tolerance</strong> across reel width, while corrugated sheets show moisture-dependent strength swings. A buyer cannot confiscate 15% of the entire invoice value over a 3%&ndash;4% GSM variation that still falls inside standard mill tolerance and never caused a line stoppage.
                  </p>
                </div>

                <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 space-y-2">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                    2. Hygroscopic Moisture Drop (Monsoon Effect)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Every <strong>1% increase in corrugated board moisture above 8%</strong> reduces Box Compression Test (BCT) strength by roughly <strong>8% to 10%</strong>. When a buyer stores bundles near an open dock in Mumbai, Chennai, Kochi, or Baddi during July&ndash;September at 85% RH, moisture climbs to 14%&ndash;16% inside 48 hours. Testing an unconditioned, damp carton violates IS 1060 (which mandates 24-hour pre-conditioning at 27&deg;C &plusmn; 1&deg;C and 65% &plusmn; 2% RH).
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                    3. Over-Stacking, Pallet Overhang &amp; Mis-Packed Cargo
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Even a 100% spec-compliant 5-ply 22 BF shipper will buckle if the buyer&apos;s warehouse stacks 9 tiers high instead of the approved 5 tiers, uses misaligned interlocking pallet patterns (which cut vertical corner load capacity by up to 40%), or leaves internal head-space voids inside non-self-supporting pouches. Post-transit crushing without pre-dispatch joint inspection proves logistics mishandling, not manufacturing defect.
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 space-y-2">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                    4. Zero Rejection Without Joint Sealed Control Sample
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Under settled Indian commercial jurisprudence, an ex-parte &ldquo;internal QC sheet&rdquo; prepared by the buyer&apos;s own warehouse executive weeks after delivery carries zero legal weight against clean signed GRNs and Mill Test Certificates. Demand proof of a <strong>jointly signed sealed sample</strong> drawn prior to line consumption and tested at an NABL-accredited lab or the Indian Institute of Packaging (IIP).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Worked Financial & Interest Calculation Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Worked Ledger: &#8377;18.5L Corrugated Invoice + 15% BF Debit Note
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Consider an Udyam Small automatic corrugated box plant in Vapi supplying 5-ply printed master cartons worth <strong>&#8377;18,50,000</strong> (inclusive of 12%/18% GST as applicable) to an FMCG/pharma buyer. The buyer ships finished goods in all cartons, withholds payment for <strong>165 days</strong> (120 days past the 45-day MSMED cap), and issues an arbitrary <strong>15% BF/moisture debit note (&#8377;2,77,500)</strong>. Here is the exact statutory recovery math you can verify on our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  MSME Delayed Payment 3x RBI Interest Calculator
                </Link>
                :
              </p>

              <div className="rounded-2xl bg-slate-900 text-white p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                    Statutory Creditor Claim &amp; Buyer Tax-Penalty Computation
                  </span>
                  <span className="text-[11px] font-mono bg-slate-800 text-emerald-400 px-2.5 py-1 rounded-md border border-slate-700">
                    Illustrative RBI Bank Rate: 6.50% &rarr; 3x = 19.50% p.a. (Monthly Rests)
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-2.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                      A. Box Manufacturer&apos;s Recoverable Claim (MSMED s.16)
                    </p>
                    <div className="flex justify-between border-b border-slate-700/70 pb-1.5">
                      <span className="text-slate-300">Undisputed Invoice Principal</span>
                      <span className="font-mono font-bold text-white">&#8377;15,72,500</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-700/70 pb-1.5">
                      <span className="text-slate-300">Disallowed 15% BF Debit Note (s.42 Bar)</span>
                      <span className="font-mono font-bold text-emerald-400">+ &#8377;2,77,500</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-700/70 pb-1.5">
                      <span className="text-slate-300">Total Admitted Principal</span>
                      <span className="font-mono font-bold text-white">&#8377;18,50,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-700/70 pb-1.5">
                      <span className="text-slate-300">120-Day Compound Interest (@19.5% p.a.)</span>
                      <span className="font-mono font-bold text-amber-400">+ &#8377;1,23,234</span>
                    </div>
                    <div className="flex justify-between pt-1 text-sm sm:text-base">
                      <span className="font-bold text-white">Total Legal Demand Amount</span>
                      <span className="font-mono font-black text-emerald-400">&#8377;19,73,234</span>
                    </div>
                  </div>

                  <div className="bg-red-950/40 border border-red-800/60 rounded-xl p-4 space-y-2.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                      B. Buyer&apos;s Pain If Unpaid Past FY Close (s.43B(h) + GST)
                    </p>
                    <div className="flex justify-between border-b border-red-900/50 pb-1.5">
                      <span className="text-slate-300">Disallowed Packaging Expense (Pre-GST Base)</span>
                      <span className="font-mono font-bold text-white">~&#8377;16,51,785</span>
                    </div>
                    <div className="flex justify-between border-b border-red-900/50 pb-1.5">
                      <span className="text-slate-300">Immediate Corporate Tax Hit (25.17% s.115BAA)</span>
                      <span className="font-mono font-bold text-red-400">&#8377;4,15,754</span>
                    </div>
                    <div className="flex justify-between border-b border-red-900/50 pb-1.5">
                      <span className="text-slate-300">Non-Deductible MSMED s.23 Interest Liability</span>
                      <span className="font-mono font-bold text-amber-400">&#8377;1,23,234</span>
                    </div>
                    <div className="flex justify-between border-b border-red-900/50 pb-1.5">
                      <span className="text-slate-300">CGST s.16(2) ITC Reversal Risk (Day 181+)</span>
                      <span className="font-mono font-bold text-red-300">~&#8377;1,98,215 + 18%</span>
                    </div>
                    <div className="flex justify-between pt-1 text-sm sm:text-base">
                      <span className="font-bold text-white">Buyer&apos;s Combined Compliance Hit</span>
                      <span className="font-mono font-black text-red-400">&gt;&#8377;7.37 Lakh</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                  <strong>CFO Reality Check:</strong> Trying to save &#8377;2.77 lakh through an unlawful 15% BF debit note exposes the buyer to over <strong>&#8377;7.37 lakh</strong> in combined Section 43B(h) tax, non-deductible 3x RBI compound interest (Section 23 MSMED Act), and GST ITC reversal—plus mandatory statutory audit disclosure in Form 3CD Clause 22.
                </p>
              </div>
            </section>

            {/* Section 7: Corrugated Plant Evidence & BSA 2023 s.63 Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Corrugated Plant QC &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Before serving your statutory demand notice or filing an MSEFC Samadhaan claim, assemble these four documentary pillars so every BF, GSM, moisture, and rate-revision defense is killed upfront.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Mill Test Certificates & In-House QC Logs",
                    items: [
                      "Kraft Paper Mill Test Certificates (MTC) showing reel GSM, BF (16–28 BF), and Cobb values",
                      "In-house Bursting Strength Tester (BST), ECT/BCT & pin moisture readings (7%–9%) per lot",
                      "Approved Box Specification Sheet / Artwork Die-Line signed by buyer QC",
                    ],
                  },
                  {
                    title: "2. Clean Dispatch, E-Way Bill & GRN Trail",
                    items: [
                      "GST Tax Invoices mentioning PO number, ply spec, dimensions & Udyam Registration No.",
                      "GST E-Way Bills & Lorry Receipts (LR/Bilty) with covered-truck loading photos",
                      "Gate Entry Stamp & signed Goods Receipt Note (GRN) with zero moisture/damage remark",
                    ],
                  },
                  {
                    title: "3. Outward Consumption Proof (Defeating s.42)",
                    items: [
                      "Buyer's 15-day silence post-delivery (proving MSMED s.2(b) deemed acceptance)",
                      "Emails/WhatsApp showing buyer packed & shipped domestic/export cargo in those cartons",
                      "Written 72-hour rejection of unilateral debit note + proof no GST Credit Note was issued",
                    ],
                  },
                  {
                    title: "4. BSA 2023 s.63 Electronic & Udyam Records",
                    items: [
                      "Udyam Registration Certificate (Micro/Small date predating invoice supply date)",
                      "Exported WhatsApp chats & emails for kraft rate-hike approvals with s.63 certificate",
                      "GSTR-1 filing & buyer's GSTR-2B ITC reflection, plus SAP/vendor portal ledger screenshots",
                    ],
                  },
                ].map((quad) => (
                  <div
                    key={quad.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <h3 className="text-sm font-bold text-slate-900 mb-2">{quad.title}</h3>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                      {quad.items.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <span className="text-[#DC2626] font-bold mt-0.5">&#10003;</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Dual-Track B2B Conversion CTA */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Stop Unilateral Debit Notes &amp; Recover Your Carton Ledger
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                Whether you need one immediate Sale of Goods Act s.42 + Section 43B(h) Advocate Notice against a defaulting buyer or a synchronized CSV recovery drive across 50+ overdue accounts, select your track below:
              </p>

              <CorrugatedRecoveryCTA />
            </section>

            {/* Section 9: Calculators, Templates & Related Vertical Guides */}
            <section
              id="heading-related"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  MSME Calculators, Notice Templates &amp; Buyer-Sector Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {[
                  {
                    label: "Section 43B(h) MSME 45-Day Payment Rule & Tax Disallowance Guide",
                    href: "/law/section-43bh-msme-payment-rule",
                    tag: "Statutory Guide",
                  },
                  {
                    label: "MSME Delayed Payment Legal Notice Format (MSMED ss.15–18)",
                    href: "/templates/msme-delayed-payment-demand-notice",
                    tag: "Notice Template",
                  },
                  {
                    label: "MSME Delayed Payment 3x RBI Compound Interest Calculator",
                    href: "/tools/msme-delayed-payment-interest-calculator",
                    tag: "Interactive Tool",
                  },
                  {
                    label: "Packaging, Corrugated Box, Printing & Paper Mill Recovery Hub",
                    href: "/industries/packaging-printing-paper-mill-recovery",
                    tag: "IND-22 Parent Hub",
                  },
                  {
                    label: "Custom-Printed Laminate Pouches & Cartons Unlifted Stock Recovery",
                    href: "/custom-printed-flexible-packaging-pouches-cartons-unlifted-stock-recovery",
                    tag: "IND-22 Sibling",
                  },
                  {
                    label: "Manufacturing, Machinery & OEM B2B Supplier Recovery Hub",
                    href: "/industries/manufacturing-machinery-oem-recovery",
                    tag: "B2B Hub",
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between gap-2 p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                  >
                    <span className="font-semibold text-slate-900">{item.label}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600 shrink-0">
                      {item.tag}
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  FAQs: Corrugated Box BF, GSM &amp; Moisture Dispute Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group border border-slate-200 rounded-xl p-4 open:bg-slate-50 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-3 cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] text-lg font-black shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Primary Statutory Authorities &amp; Official Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&rsaquo;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs text-slate-500">
                <span>
                  Authored &amp; Vetted by{" "}
                  <strong className="text-slate-800">Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions
                </span>
                <span>Updated: 19 November 2026 &middot; IND-22 / B2B-253</span>
              </div>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides currentPath={PAGE_URL} />
    </div>
  );
}
