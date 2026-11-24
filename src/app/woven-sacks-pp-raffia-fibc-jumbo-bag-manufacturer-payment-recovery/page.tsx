import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import WovenSacksTableOfContents from "./WovenSacksTableOfContents";
import WovenSacksScenarioTabs from "./WovenSacksScenarioTabs";
import WovenSacksRecoveryCTA from "./WovenSacksRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/woven-sacks-pp-raffia-fibc-jumbo-bag-manufacturer-payment-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

// Exact PDF/JSON H1 (94 chars) — kept verbatim in BOTH <h1> and ARTICLE_SCHEMA.headline
const EXACT_H1 =
  "Receivable Recovery for PP Woven-Sack, BOPP Rice/Fertilizer Bag & FIBC Jumbo-Bag Manufacturers";

// Exact PDF/JSON Meta Title (60 chars — compliant with 30–60ch Screaming Frog limit)
const META_TITLE =
  "PP Woven Sack, BOPP Bag & FIBC Jumbo-Bag Maker Debt Recovery";

// Exact PDF/JSON Meta Description (154 chars — compliant with 120–155ch Screaming Frog limit)
const META_DESCRIPTION =
  "Raffia & FIBC converters buy polymer granules on strict cash/BG terms from RIL/IOCL while rice, sugar, cement & mineral buyers stretch bag bills 90+ days!";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "pp woven sack bopp bag fibc jumbo bag manufacturer payment recovery",
    "cement fertilizer rice sugar mill unpaid pp woven bag bill",
    "fibc jumbo bag export chemical mineral buyer default",
    "weight per bag denier tolerance dispute raffia",
    "custom printed bopp rice fertilizer bag unlifted",
    "polymer price fluctuation contract breach woven sacks",
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
      "The Sale of Goods Act, 1930 (Sections 26, 42, 44 & 55 — Deemed Acceptance Upon Filling/Dispatch, Godown Storage Demurrage & Full Price Suit for Unlifted Custom BOPP Bags)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 2(b), 15–19 & 24 — 15-Day Objection Cutoff, 45-Day Cap, 3x RBI Compound Interest & 75% Appeal Deposit)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Income Tax Act, 1961 — Section 43B(h) (Corporate Expense Disallowance When Cement, Rice, Sugar or Chemical Buyers Delay Payments to Micro & Small Raffia Converters)",
    url: "https://www.incometaxindia.gov.in/pages/acts/income-tax-act.aspx",
  },
  {
    title:
      "Bureau of Indian Standards (BIS) — IS 11652 (Cement PP Sacks), IS 9755 (Fertilizer Sacks), IS 14887 & IS 14968 (Foodgrain/Sugar Woven Sacks Mass & Denier Tolerance Specifications)",
    url: "https://www.bis.gov.in/",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Sections 138, 141 & 143A — Criminal Prosecution for Bounced Mill/Exporter Cheques & 20% Interim Compensation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 56, 73 & 170 — Polymer Price Fluctuation Non-Frustration, Breach Damages & Particular Lien on Rotogravure Cylinders)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "MSME Samadhaan Portal — Online Delayed Payment Reference & MSEFC Conciliation/Arbitration Desk (Ministry of MSME, Government of India)",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Electronic Proof Certificate for Weighbridge Slips, QC Denier Logs, RIL/IOCL Circulars & WhatsApp Artwork Approvals)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    q: "A cement, sugar, or fertilizer mill filled our PP woven sacks, shipped product nationwide, and sent a 12% debit note 60 days later citing bag weight or denier variation. Is this legal?",
    a: "No. Under Section 42 of the Sale of Goods Act, 1930, filling PP woven sacks on automated packing lines and dispatching finished consignments constitutes irrevocable commercial acceptance. Moreover, under MSMED Act Section 2(b) Explanation, any written objection regarding goods must be raised within 15 days of delivery—silence locks deemed acceptance on Day 16. BIS standards (IS 11652 for cement, IS 9755 for fertilizers, IS 14887 for foodgrains) also specify express permissible ±mass-per-bag tolerances that defeat arbitrary post-consumption debit notes.",
  },
  {
    q: "A basmati rice mill or seed brand approved artwork for 1,50,000 custom-printed BOPP laminated bags but stopped lifting stock after paddy prices fell. Can we recover 100% of the bill?",
    a: "Yes. Custom rotogravure-printed BOPP bags bearing a buyer's trademark, FSSAI license, or FCO fertilizer registration cannot lawfully be sold to any third party and carry zero open-market salvage value. Under Sale of Goods Act Section 55(1)–(2) and Indian Contract Act Section 73, once manufactured to approved artwork and offered for inspection, you can legally recover 100% of the contract price, unrecovered rotogravure cylinder costs, and Section 44 godown storage rent.",
  },
  {
    q: "Our buyer is refusing to lift booked PP woven bags or pay PVC escalation invoices because RIL/IOCL PP granule prices fluctuated mid-quarter. Can they cancel the PO?",
    a: "No. Under settled Supreme Court precedent interpreting Section 56 of the Indian Contract Act, 1872 (including Alopi Parshad & Energy Watchdog), commercial raw-material price fluctuation never frustrates or voids a concluded purchase contract. If a buyer breaches a fixed PO after you procured resin on cash/BG terms, Section 73 entitles you to full damages; if the PO contains an RIL/IOCL Monthly Polymer Index Price-Variation Clause (PVC), unpaid escalation bills are legally enforceable debt.",
  },
  {
    q: "We manufacture 1 MT FIBC jumbo bags for chemical and mineral exporters who stretch payment 120+ days citing foreign buyer remittance delays. What is the fastest recovery track?",
    a: "Domestic supplier payment liability is completely independent of an exporter's foreign buyer remittance. If your FIBC stitching/extrusion unit holds Udyam Micro or Small registration, serve a Fact-Verified Demand Notice enforcing MSMED Act s.15 (45-day ceiling), 3x RBI compound interest (s.16), and Income Tax Section 43B(h) corporate tax disallowance—which disrupts the exporter's statutory audit and bank packing credit. For Medium/Large FIBC plants owed ₹1 Crore or more, an IBC Section 8 Form 3/4 Demand Notice or Commercial Court Order XXXVII Summary Suit delivers rapid Board-level settlement.",
  },
  {
    q: "Are circular-loom PP raffia plants, leno bag makers, tarpaulin units, and FIBC converters covered by Income Tax Section 43B(h)?",
    a: "Yes, provided the manufacturer is registered on Udyam under Manufacturing (NIC 22203 / woven sacks, plastics packaging) as a Micro or Small enterprise on the date of supply. If a cement company, fertilizer packer, rice mill, or chemical exporter fails to clear your invoices within 15 days (no written credit term) or max 45 days (written PO), the entire overdue expenditure is disallowed from their taxable income under Section 43B(h), creating an immediate 25.17%–34.94% corporate tax + interest penalty.",
  },
  {
    q: "We hold an undated or post-dated security cheque from a defaulting rice mill or mineral trader. Can we file an NI Act Section 138 criminal complaint?",
    a: "Yes. Following the Supreme Court's landmark ruling in Sripati Singh v. State of Jharkhand, a security cheque presented after the underlying bag invoices fall due and remain unpaid attracts full criminal liability under Section 138 of the Negotiable Instruments Act, 1881. Ensure you present the cheque within its 3-month validity, issue a statutory 15-day demand notice within 30 days of the bank return memo, arraign the Managing Director and authorized signatories under Section 141, and move immediately for 20% interim compensation under Section 143A.",
  },
  {
    q: "Can we withhold a defaulting buyer's custom rotogravure printing cylinders until they clear overdue BOPP bag invoices?",
    a: "Yes. Under Section 170 of the Indian Contract Act, 1872 (Particular Lien) and standard printing/conversion PO clauses creating a Contractual General Lien, a BOPP raffia converter can lawfully retain unpaid rotogravure cylinders or plates while custom bag bills or cylinder balances remain outstanding—preventing the defaulting mill from shifting printing to a competing plant during harvest season.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  url: CANONICAL_URL,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  image: [`${SITE_URL}/blog_money_recovery.png`],
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
    url: `${SITE_URL}/about-us`,
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
    name: "PP Woven Sack, BOPP Rice/Fertilizer Bag & FIBC Jumbo-Bag Manufacturer Debt Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "5-Stage Receivable Recovery SOP for PP Woven-Sack, BOPP Bag & FIBC Jumbo-Bag Manufacturers",
  description:
    "Creditor playbook for PP raffia extrusion, BOPP laminated bag, leno bag, tarpaulin, and FIBC jumbo-bag plants to overcome cash-polymer working capital crunches and enforce BIS tolerance, Sale of Goods s.55, MSMED s.15-18, Section 43B(h), and NI Act s.138.",
  totalTime: "P45D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Compile Weighbridge, BIS/ISO 21898 QC & Polymer Procurement Dossier",
      text: "Assemble computerized bale weighbridge slips, factory denier/mesh/GSM QC reports, BIS IS 11652/9755/14887 or ISO 21898 Top-Lift test certificates, RIL/IOCL polymer purchase bills, WhatsApp artwork proofs, E-Way bills, and Store GRNs under a BSA 2023 s.63 certificate.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Rebut Post-Consumption Denier/Weight Debit Notes & Lock Credit Notes",
      text: "Reject retrospective weight-per-bag or drop-test deductions in writing within 48 hours, refuse to issue any CGST Section 34 Credit Note, and invoke Sale of Goods Act s.42 consumption and MSMED s.2(b) 15-day deemed acceptance.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Dispatch CFO-Targeted Fact-Verified Notice (s.55 Price + s.43B(h) + Cylinder Lien)",
      text: "Serve a 15-day Fact-Verified Statutory Notice via Email, WhatsApp, and Speed Post RPAD addressed to the mill/exporter CFO and Statutory Auditor combining Section 43B(h) tax disallowance, Section 55 custom BOPP price + Section 44 storage rent, and Contract Act s.170 cylinder lien.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Trigger MSEFC MSME Samadhaan (3x RBI Interest) or IBC s.8 Form 3/4",
      text: "For Udyam Micro/Small raffia units, file an online MSME Samadhaan reference claiming principal + 3x RBI monthly compound interest backed by Section 19's 75% appeal pre-deposit; for ≥₹1 Cr Medium/Large FIBC arrears, serve an IBC Section 8 Form 3/4 Demand Notice.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Execute Parallel NI Act s.138/143A Cheque Action or Order XXXVII Suit",
      text: "Present overdue buyer PDCs/security cheques to launch NI Act ss.138/141 criminal prosecution seeking 20% s.143A interim relief, or file an Order XXXVII CPC Summary Suit with Order XXXVIII Rule 5 asset attachment where urgency exists.",
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
      name: "PP Woven Sack, BOPP Bag & FIBC Jumbo-Bag Recovery",
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

export default function WovenSacksFibcRecoveryPage() {
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
            <span>IND-22 Raffia &amp; FIBC Converters</span>
            <span className="text-red-600">&bull;</span>
            <span>BIS Tolerance &amp; Sale of Goods s.55</span>
            <span className="text-red-600">&bull;</span>
            <span>s.43B(h) + NI Act s.138</span>
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
            PP woven-sack, BOPP bag, and FIBC jumbo-bag manufacturers can legally recover 100% overdue invoices, unlifted branded bag value (<strong>Sale of Goods Act s.55</strong>), and <strong>3x RBI compound interest</strong> (<strong>MSMED Act ss.15&ndash;18</strong>) while defeating late denier/weight debit notes under <strong>BIS tolerances</strong>. Part of our{" "}
            <Link
              href="/industries/packaging-printing-paper-mill-recovery"
              className="text-red-400 underline underline-offset-4 hover:text-red-300 font-bold"
            >
              Packaging, Printing &amp; Paper Mill Recovery Hub
            </Link>
            , this playbook deploys Section 43B(h) tax pressure and NI Act s.138 prosecution.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <div className="text-lg sm:text-2xl font-black text-slate-100">45 Days Max</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                MSMED s.15 Statutory Cap vs Cash RIL/IOCL Polymer Buying
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-emerald-400">3x RBI Rate</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Monthly Compound Interest on Overdue Bag Ledgers (s.16)
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-amber-400">100% Price</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Sale of Goods s.55 Suit for Unlifted Custom BOPP Rice/Seed Bags
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-red-400">s.43B(h) + s.138</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Buyer Corporate Tax Hit &amp; 20% Interim Cheque Relief (s.143A)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT CONTAINER */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Packaging, Printing & Paper Mill Recovery",
                href: "/industries/packaging-printing-paper-mill-recovery",
              },
              {
                label: "PP Woven Sack, BOPP & FIBC Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* LEFT STICKY SIDEBAR TOC */}
          <WovenSacksTableOfContents />

          {/* MAIN CONTENT COLUMN */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* SECTION 1 */}
            <section
              id="polymer-cashflow-squeeze"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  Why Cash Polymer Buying Collides With 90-Day Bag Receivables
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  India is the global manufacturing powerhouse for PP/HDPE raffia woven sacks, leno mesh bags, HDPE tarpaulins, multi-colour BOPP laminated bags, and export-grade FIBC (Flexible Intermediate Bulk Container) jumbo bags—anchored by dense industrial corridors in{" "}
                  <strong>Ahmedabad, Silvassa, Daman, Kanpur, Indore, Nagpur, Coimbatore, Haldia, and Visakhapatnam</strong>. Yet almost every tape-extrusion and circular-loom plant operates inside a brutal working-capital vise.
                </p>
                <p>
                  Virgin polypropylene and HDPE raffia granules (such as RIL Repol, IOCL Propel, HMEL, GAIL, or OPaL grades) account for{" "}
                  <strong>65% to 72% of finished bag cost</strong> and must be lifted on strict{" "}
                  <strong>100% cash-in-advance RTGS, Letter of Credit, or Bank Guarantee (BG) / Channel Finance</strong> terms—with zero tolerance for delay from petrochemical majors. Meanwhile, your downstream industrial buyers—cement plants, fertilizer packers, basmati/non-basmati rice mills, cooperative sugar mills, and chemical or quartz/barite mineral exporters—routinely stretch bag invoices{" "}
                  <strong>90 to 150+ days</strong>, using raffia converters as interest-free working capital financiers.
                </p>
                <p>
                  Compounding this cash-flow mismatch is <strong>polymer price volatility</strong>. When petrochemical rates dip ₹10–₹15/kg mid-quarter after you have already locked resin on cash terms against confirmed Purchase Orders, buyers abruptly stall dispatch schedules or demand retroactive rate reductions. Under{" "}
                  <strong>Section 56 of the Indian Contract Act, 1872</strong> (as settled by the Supreme Court in{" "}
                  <em>Alopi Parshad &amp; Sons Ltd. v. Union of India</em> and{" "}
                  <em>Energy Watchdog</em>), commercial price fluctuation never frustrates a concluded commercial supply contract. Where your rate contract embeds an{" "}
                  <strong>RIL/IOCL Monthly Polymer Price-Variation Clause (PVC)</strong>, unpaid escalation invoices are legally enforceable debt carrying statutory compound interest.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-xl bg-red-50 border border-red-200 p-4">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1.5">
                    Upstream Cash Wall
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    PP/HDPE granules, calcium carbonate filler, BOPP film rolls, ink/adhesives, and high-tension industrial power bills demand Day-0 to Day-15 cash settlement.
                  </p>
                </div>
                <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
                    Downstream 90–150d Drag
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Cement, sugar, rice, seed, and mineral exporters stall ledgers past 90 days—then fabricate late weight-per-bag or denier debit notes to force 10–15% haircuts.
                  </p>
                </div>
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-1.5">
                    Statutory Cash-Flow Flip
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Combining <strong>MSMED s.15&ndash;18</strong>,{" "}
                    <Link
                      href="/law/section-43bh-msme-payment-rule"
                      className="font-bold text-emerald-900 underline underline-offset-2 hover:text-[#DC2626]"
                    >
                      Income Tax Section 43B(h)
                    </Link>
                    , and <strong>Sale of Goods s.42/55</strong> shifts financial pain directly onto the buyer&rsquo;s CFO and Statutory Auditor.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 2 */}
            <section
              id="bis-denier-tolerance-defense"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  Defeating Weight-Per-Bag, Denier &amp; BIS Tolerance Debit Notes
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  The single most common excuse used by cement, fertilizer, sugar, and rice mill procurement desks to freeze a ₹15 lakh to ₹80 lakh raffia ledger is the{" "}
                  <strong>retrospective technical debit note</strong>. Weeks after trucks unload your compressed bales and automatic packing lines fill and dispatch the product, accounts payable emails a debit note alleging &ldquo;average bag weight 2 grams short,&rdquo; &ldquo;warp/weft tape denier variation,&rdquo; &ldquo;mesh count deviation,&rdquo; or &ldquo;drop-test seam split.&rdquo;
                </p>
                <p>
                  Four overlapping statutory shields neutralize these post-consumption deductions completely:
                </p>
              </div>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                    1. Permissible BIS &amp; ISO 21898 Tolerance Bands
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Indian Standards governing PP/HDPE woven sacks—<strong>BIS IS 11652</strong> (50 kg cement),{" "}
                    <strong>BIS IS 9755</strong> (50 kg fertilizers), and <strong>BIS IS 14887 / IS 14968</strong> (foodgrains &amp; sugar)—explicitly recognize extrusion variance by prescribing permissible mass-per-bag tolerance bands (typically <strong>&plusmn;3% to &plusmn;6%</strong> on individual/bale averages) alongside defined mesh, width, and breaking-load norms. Similarly, export FIBCs are governed by{" "}
                    <strong>ISO 21898</strong> (5:1 Single-Trip / 6:1 Multi-Trip Safety Factor cyclic top-lift testing). A buyer cannot penalize variation sitting squarely inside statutory BIS/ISO limits.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                    2. Sale of Goods Act s.42: Filling Bags = Irrevocable Acceptance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Under <strong>Section 42 of the Sale of Goods Act, 1930</strong>, once a buyer performs any act inconsistent with the seller&rsquo;s ownership—such as feeding your sacks into a rotary cement packer, stitching basmati rice or urea into them, or stuffing FIBC jumbo bags into export containers—acceptance is conclusively complete. Unilateral retrospective deductions after commercial consumption are legally void.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                    3. MSMED Act s.2(b): Strict 15-Day Written Objection Cutoff
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    For Udyam-registered Micro and Small raffia plants, the Explanation to{" "}
                    <strong>MSMED Act Section 2(b)</strong> dictates that any quality or weight complaint must be communicated in writing within <strong>15 days of actual delivery</strong>. If the mill stayed silent for 15 days and booked GSTR-2B Input Tax Credit on your full invoice, Day 16 locks <em>deemed acceptance</em> for MSEFC recovery.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                    4. Refuse CGST Section 34 Credit Notes Immediately
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    A buyer&rsquo;s unilateral &ldquo;quality debit note&rdquo; does not reduce your GST tax liability unless you voluntarily issue a{" "}
                    <strong>CGST Act Section 34 Credit Note</strong>. Never issue a Credit Note under pressure; instead, formally reject the debit note in writing within 48 hours and highlight the buyer&rsquo;s{" "}
                    <strong>CGST Section 16(2) 180-day ITC reversal exposure</strong> on unpaid bills.
                  </p>
                </div>
              </div>

              {/* Landmark Verified Precedents with Crimson Left-Accent Bars */}
              <div className="mt-6 space-y-3">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-600">
                  Verified Binding Precedents Enforcing Raffia &amp; FIBC Receivables
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative pl-4 py-3 pr-4 rounded-r-xl bg-slate-50 border border-slate-200">
                    <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626] rounded-l-xl" />
                    <p className="text-xs font-extrabold text-slate-900">
                      Mobilox Innovations Pvt. Ltd. v. Kirusa Software (SC)
                    </p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      A &ldquo;moonshine&rdquo; or spurious dispute—such as a denier/weight debit note fabricated only after receiving an IBC Section 8 or legal notice—cannot block insolvency admission where zero contemporaneous rejection existed within 15 days.
                    </p>
                  </div>

                  <div className="relative pl-4 py-3 pr-4 rounded-r-xl bg-slate-50 border border-slate-200">
                    <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626] rounded-l-xl" />
                    <p className="text-xs font-extrabold text-slate-900">
                      Sripati Singh v. State of Jharkhand (SC)
                    </p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      A security cheque handed over by a rice/sugar mill or mineral trader matures into an enforceable criminal instrument under NI Act Section 138 the moment the underlying woven-bag invoices fall overdue and remain unpaid.
                    </p>
                  </div>

                  <div className="relative pl-4 py-3 pr-4 rounded-r-xl bg-slate-50 border border-slate-200">
                    <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626] rounded-l-xl" />
                    <p className="text-xs font-extrabold text-slate-900">
                      Alopi Parshad &amp; Energy Watchdog Doctrine (SC)
                    </p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Raw-material or polymer granule price swings merely make a bargain more onerous or less profitable—they do not trigger frustration under Contract Act Section 56 or permit unilateral PO cancellation.
                    </p>
                  </div>

                  <div className="relative pl-4 py-3 pr-4 rounded-r-xl bg-slate-50 border border-slate-200">
                    <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626] rounded-l-xl" />
                    <p className="text-xs font-extrabold text-slate-900">
                      Yamini Manohar v. T.K.D. Keerthi (SC)
                    </p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Where a defaulting FIBC exporter or mill is dissipating stock or bank balances, a Commercial Court suit seeking urgent interim attachment (Order XXXVIII Rule 5 CPC) bypasses mandatory Section 12A pre-institution mediation delay.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section
              id="unlifted-bopp-section-55"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  Sale of Goods s.55 for Unlifted BOPP Rice &amp; Fertilizer Bags
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Unlike plain unprinted white PP sacks, <strong>custom-printed BOPP laminated woven bags</strong>—produced for 5 kg, 10 kg, and 25 kg Basmati Rice, Atta, Hybrid Seeds, Cattle Feed, and FCO-licensed NPK/Organic Fertilizers—carry the buyer&rsquo;s registered trademark, multi-colour rotogravure artwork, FSSAI license number, barcode, and batch declarations. Once extruded, laminated, and stitched,{" "}
                  <strong>statutory packaging laws and trademark restrictions completely prohibit you from reselling those bags to any other buyer</strong>.
                </p>
                <p>
                  When a rice mill pauses exports due to Minimum Export Price (MEP) changes or a seed distributor redesigns its brand pouch, buyers often walk away from 10 to 40 metric tons of finished BOPP bags stacked in your factory godown. Because the stock has{" "}
                  <strong>zero lawful market value</strong> (only negligible regrind scrap recovery), Indian commercial law grants converters three powerful cumulative remedies—mirroring the principles detailed in our{" "}
                  <Link
                    href="/custom-printed-flexible-packaging-pouches-cartons-unlifted-stock-recovery"
                    className="text-[#DC2626] font-bold underline underline-offset-2 hover:text-red-800"
                  >
                    Custom-Printed Flexible Packaging Unlifted Stock Playbook
                  </Link>
                  :
                </p>
              </div>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-xl bg-slate-900 text-white p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1">
                    Sale of Goods Act s.55(1)&ndash;(2)
                  </p>
                  <h3 className="text-sm font-extrabold text-white mb-1.5">
                    100% Contract Price Recovery
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Once bespoke BOPP bags are manufactured per approved shade cards and appropriated to the buyer via a formal Ready-for-Dispatch Tender Notice, you sue for the full invoice price—not merely &ldquo;difference damages.&rdquo;
                  </p>
                </div>

                <div className="rounded-xl bg-slate-900 text-white p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                    Sale of Goods Act s.44
                  </p>
                  <h3 className="text-sm font-extrabold text-white mb-1.5">
                    Godown Storage &amp; Demurrage
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    When a buyer neglects or refuses to lift finished bales within a reasonable time after dispatch intimation, Section 44 makes the buyer liable for reasonable warehouse storage rent, insurance, and UV/handling preservation charges.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-900 text-white p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                    Contract Act s.170 Cylinder Lien
                  </p>
                  <h3 className="text-sm font-extrabold text-white mb-1.5">
                    Rotogravure Cylinder Holdback
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Retain the buyer&rsquo;s engraved 6-to-8-colour copper rotogravure cylinders under Particular Lien (and PO General Lien) until both unlifted bag stock and cylinder development balances are cleared in full.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4 — 5-STAGE DECISION TREE SVG + MOBILE CARDS */}
            <section
              id="raffia-recovery-flowchart"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  5-Stage Recovery Flowchart for Raffia &amp; FIBC Manufacturers
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Follow this exact operational decision tree the moment an overdue cement, rice, sugar, fertilizer, or mineral export buyer breaches Day 45 or abandons custom-printed BOPP stock.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-4">
                <svg
                  width="960"
                  height="390"
                  viewBox="0 0 960 390"
                  className="w-full h-auto max-w-[960px] mx-auto"
                  role="img"
                  aria-label="5-stage debt recovery decision tree for PP woven sack, BOPP bag and FIBC jumbo bag manufacturers"
                >
                  <defs>
                    <marker
                      id="arrowRed"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#DC2626" />
                    </marker>
                    <marker
                      id="arrowSlate"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#475569" />
                    </marker>
                  </defs>

                  {/* Top Row: Stages 1 -> 2 -> 3 */}
                  <rect x="20" y="24" width="270" height="122" rx="14" fill="#0F172A" />
                  <text x="38" y="50" fill="#F87171" fontSize="11" fontWeight="800" letterSpacing="1">
                    STAGE 1 &middot; DAY 1&ndash;3 AUDIT
                  </text>
                  <text x="38" y="73" fill="#FFFFFF" fontSize="14" fontWeight="800">
                    Lock QC &amp; Weighbridge Dossier
                  </text>
                  <text x="38" y="96" fill="#CBD5E1" fontSize="11.5">
                    Weighbridge slips, BIS/ISO 21898 QC logs,
                  </text>
                  <text x="38" y="113" fill="#CBD5E1" fontSize="11.5">
                    E-Way bills, GSTR-2B ITC, artwork proofs
                  </text>
                  <text x="38" y="130" fill="#CBD5E1" fontSize="11.5">
                    &amp; BSA 2023 s.63 electronic certificate.
                  </text>

                  <line x1="290" y1="85" x2="340" y2="85" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowRed)" />

                  <rect x="345" y="24" width="270" height="122" rx="14" fill="#0F172A" />
                  <text x="363" y="50" fill="#FBBF24" fontSize="11" fontWeight="800" letterSpacing="1">
                    STAGE 2 &middot; 48-HR REBUTTAL
                  </text>
                  <text x="363" y="73" fill="#FFFFFF" fontSize="14" fontWeight="800">
                    Kill Fake Weight/Denier Debits
                  </text>
                  <text x="363" y="96" fill="#CBD5E1" fontSize="11.5">
                    Reject late debit notes in writing; refuse
                  </text>
                  <text x="363" y="113" fill="#CBD5E1" fontSize="11.5">
                    CGST s.34 Credit Note; cite BIS tolerance,
                  </text>
                  <text x="363" y="130" fill="#CBD5E1" fontSize="11.5">
                    Sale of Goods s.42 &amp; MSMED s.2(b) 15d cap.
                  </text>

                  <line x1="615" y1="85" x2="665" y2="85" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowRed)" />

                  <rect x="670" y="24" width="270" height="122" rx="14" fill="#DC2626" />
                  <text x="688" y="50" fill="#FEE2E2" fontSize="11" fontWeight="800" letterSpacing="1">
                    STAGE 3 &middot; 15-DAY DEMAND
                  </text>
                  <text x="688" y="73" fill="#FFFFFF" fontSize="14" fontWeight="800">
                    CFO Advocate Statutory Notice
                  </text>
                  <text x="688" y="96" fill="#FFFFFF" fontSize="11.5">
                    Serve CFO &amp; Statutory Auditor via Email,
                  </text>
                  <text x="688" y="113" fill="#FFFFFF" fontSize="11.5">
                    WhatsApp &amp; RPAD: s.43B(h) tax hit, s.55
                  </text>
                  <text x="688" y="130" fill="#FFFFFF" fontSize="11.5">
                    unlifted BOPP price + s.170 cylinder lien.
                  </text>

                  {/* Connector Down to Decision Split */}
                  <line x1="805" y1="146" x2="805" y2="188" stroke="#475569" strokeWidth="2.2" />
                  <line x1="165" y1="188" x2="805" y2="188" stroke="#475569" strokeWidth="2.2" />
                  <line x1="165" y1="188" x2="165" y2="218" stroke="#475569" strokeWidth="2.2" markerEnd="url(#arrowSlate)" />
                  <line x1="480" y1="188" x2="480" y2="218" stroke="#475569" strokeWidth="2.2" markerEnd="url(#arrowSlate)" />
                  <line x1="795" y1="188" x2="795" y2="218" stroke="#475569" strokeWidth="2.2" markerEnd="url(#arrowSlate)" />

                  {/* Bottom Row: 3 Parallel Statutory Enforcement Tracks */}
                  <rect x="20" y="224" width="290" height="140" rx="14" fill="#ECFDF5" stroke="#10B981" strokeWidth="2" />
                  <text x="38" y="250" fill="#047857" fontSize="11" fontWeight="800" letterSpacing="0.8">
                    STAGE 4A &middot; MICRO / SMALL UDYAM
                  </text>
                  <text x="38" y="273" fill="#0F172A" fontSize="14" fontWeight="800">
                    MSEFC Samadhaan Filing
                  </text>
                  <text x="38" y="296" fill="#334155" fontSize="11.5">
                    Principal + 3x RBI monthly compound
                  </text>
                  <text x="38" y="313" fill="#334155" fontSize="11.5">
                    interest (s.16). Section 19 forces buyer to
                  </text>
                  <text x="38" y="330" fill="#334155" fontSize="11.5">
                    deposit 75% cash upfront before appeal.
                  </text>
                  <text x="38" y="350" fill="#047857" fontSize="11" fontWeight="700">
                    Best for ₹1L–₹2 Cr Cement/Rice/Sugar Bills
                  </text>

                  <rect x="335" y="224" width="290" height="140" rx="14" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2" />
                  <text x="353" y="250" fill="#B91C1C" fontSize="11" fontWeight="800" letterSpacing="0.8">
                    STAGE 4B &middot; BOUNCED PDC / SECURITY
                  </text>
                  <text x="353" y="273" fill="#0F172A" fontSize="14" fontWeight="800">
                    NI Act s.138/141 + s.143A
                  </text>
                  <text x="353" y="296" fill="#334155" fontSize="11.5">
                    Present overdue mill/trader cheque; serve
                  </text>
                  <text x="353" y="313" fill="#334155" fontSize="11.5">
                    15-day notice within 30 days of bounce;
                  </text>
                  <text x="353" y="330" fill="#334155" fontSize="11.5">
                    summon Directors + seek 20% interim pay.
                  </text>
                  <text x="353" y="350" fill="#B91C1C" fontSize="11" fontWeight="700">
                    Runs in Parallel With Civil / MSEFC Track
                  </text>

                  <rect x="650" y="224" width="290" height="140" rx="14" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="2" />
                  <text x="668" y="250" fill="#B45309" fontSize="11" fontWeight="800" letterSpacing="0.8">
                    STAGE 5 &middot; ≥₹1 CR / NON-MSME FIBC
                  </text>
                  <text x="668" y="273" fill="#0F172A" fontSize="14" fontWeight="800">
                    IBC s.8 Form 3 or Order 37 CPC
                  </text>
                  <text x="668" y="296" fill="#334155" fontSize="11.5">
                    Trigger 10-day NCLT insolvency notice for
                  </text>
                  <text x="668" y="313" fill="#334155" fontSize="11.5">
                    undisputed ≥₹1 Cr export/plant arrears, or
                  </text>
                  <text x="668" y="330" fill="#334155" fontSize="11.5">
                    file Order 37 Summary Suit + O.38 r.5 freeze.
                  </text>
                  <text x="668" y="350" fill="#B45309" fontSize="11" fontWeight="700">
                    High-Value FIBC &amp; Corporate Mill Defaults
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Flowchart Cards */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    step: "Stage 1 (Day 1–3)",
                    title: "Lock QC & Weighbridge Dossier",
                    body: "Compile bale weighbridge slips, BIS/ISO 21898 QC lab logs, E-Way bills, Store GRNs, GSTR-2B ITC trail, and BSA 2023 s.63 certificate.",
                    accent: "border-l-slate-900 bg-slate-50",
                  },
                  {
                    step: "Stage 2 (Within 48 Hours)",
                    title: "Rebut Weight/Denier Debit Notes",
                    body: "Reject late quality deductions in writing, refuse CGST s.34 Credit Notes, and cite Sale of Goods s.42 consumption + MSMED s.2(b) 15-day bar.",
                    accent: "border-l-amber-500 bg-amber-50/70",
                  },
                  {
                    step: "Stage 3 (15-Day Demand Window)",
                    title: "CFO Advocate Statutory Notice",
                    body: "Serve buyer's CFO & Statutory Auditor via Email, WhatsApp & RPAD asserting s.43B(h) tax disallowance, s.55 unlifted BOPP price, and s.170 cylinder lien.",
                    accent: "border-l-[#DC2626] bg-red-50/70",
                  },
                  {
                    step: "Stage 4 (Parallel Statutory Strike)",
                    title: "MSEFC Samadhaan + NI Act s.138",
                    body: "File MSME Samadhaan for 3x RBI monthly compound interest (75% appeal deposit) while prosecuting bounced mill/trader PDCs under NI Act ss.138/143A.",
                    accent: "border-l-emerald-600 bg-emerald-50/70",
                  },
                  {
                    step: "Stage 5 (≥₹1 Cr / Non-MSME)",
                    title: "IBC s.8 Form 3/4 or Order XXXVII Suit",
                    body: "Escalate large FIBC export or non-MSME plant arrears via NCLT IBC Section 8 Demand Notice or Commercial Court Summary Suit with Order 38 Rule 5 attachment.",
                    accent: "border-l-slate-700 bg-slate-100/80",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className={`border border-slate-200 border-l-4 ${card.accent} rounded-r-xl p-4`}
                  >
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                      {card.step}
                    </p>
                    <h3 className="text-sm font-extrabold text-slate-900 mt-0.5">{card.title}</h3>
                    <p className="text-xs text-slate-700 mt-1 leading-relaxed">{card.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 5 — DARK-HEADER STATUTORY REMEDY MATRIX */}
            <section
              id="statutory-remedy-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  Statutory Remedy Matrix: Woven Sacks, BOPP, Leno &amp; FIBC Bags
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Match your exact product line and buyer default pattern against the primary statutory weapons, pre-litigation notice triggers, and enforcement forums below:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Product &amp; Buyer Segment</th>
                      <th className="p-3.5 font-bold">Typical Default / Deduction Trap</th>
                      <th className="p-3.5 font-bold">Primary Statutory Weapons</th>
                      <th className="p-3.5 font-bold">Optimal Forum &amp; Lever</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Cement &amp; Fertilizer PP Woven Sacks (50 kg Valve/Open)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        90–120d ledger stretch + retrospective 10% weight-per-bag or drop-test debit note
                      </td>
                      <td className="p-3.5 text-slate-700">
                        BIS IS 11652 / IS 9755 tolerance + Sale of Goods s.42 + MSMED ss.2(b), 15–18 + IT Act s.43B(h)
                      </td>
                      <td className="p-3.5 font-semibold text-emerald-700">
                        CFO s.43B(h) Notice &rarr; MSEFC Samadhaan (3x RBI Interest)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Custom-Printed BOPP Laminated Rice, Atta &amp; Seed Bags
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Buyer stops lifting branded stock after paddy/MEP dip or changes artwork mid-run
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Sale of Goods s.55 (100% price) + s.44 (godown rent) + Contract Act s.170 (cylinder lien)
                      </td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">
                        15-Day Lifting Notice + Cylinder Lien &rarr; MSEFC / Order 37
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        FIBC Jumbo Bags (1 MT–2 MT Chemical / Mineral Export)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Export containers sailed; buyer stalls ₹30L–₹1.5 Cr citing overseas LC delay
                      </td>
                      <td className="p-3.5 text-slate-700">
                        ISO 21898 cert + Sale of Goods s.42 + MSMED s.15 (Micro/Small) or IBC s.8 Form 3 (≥₹1 Cr)
                      </td>
                      <td className="p-3.5 font-semibold text-amber-800">
                        s.43B(h) Audit Notice or IBC Form 3 + NI Act s.138/143A
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Sugar Mill &amp; Foodgrain PP Woven Sacks
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Crushing-season supply held unpaid until next season; bounced PDCs/security cheques
                      </td>
                      <td className="p-3.5 text-slate-700">
                        BIS IS 14887/14968 + NI Act ss.138, 141, 143A (Sripati Singh) + MSMED s.16
                      </td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">
                        Parallel NI s.138 Criminal Summons + MSEFC Claim
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Leno Mesh Bags (Onion/Potato) &amp; HDPE Tarpaulins
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Mandi commission agents &amp; agri-traders default on seasonal running ledger
                      </td>
                      <td className="p-3.5 text-slate-700">
                        NI Act s.138 + Limitation Act s.19 (part-payment reset) + Order XXXVII CPC
                      </td>
                      <td className="p-3.5 font-semibold text-slate-900">
                        Advocate Demand Notice + Fast-Track Summary Suit / s.138
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Polymer Price Fluctuation &amp; PVC Escalation Arrears
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Buyer cancels PO on PP rate dip or withholds RIL/IOCL PVC escalation debit notes
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Indian Contract Act s.56 (non-frustration) &amp; s.73 (resin procurement damages)
                      </td>
                      <td className="p-3.5 font-semibold text-emerald-700">
                        Contract Breach Notice &rarr; Commercial Court / MSEFC
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 6 — INTERACTIVE 4-SCENARIO PLAYBOOK */}
            <section
              id="raffia-default-playbooks"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  4 Raffia &amp; Jumbo-Bag Default Traps: Interactive Playbooks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select your exact commercial dispute below to inspect the buyer&rsquo;s playbook, the controlling statutory counter-strike, required BSA 2023 s.63 evidence, and high-leverage escalation step:
              </p>

              <WovenSacksScenarioTabs />
            </section>

            {/* SECTION 7 — WORKED FINANCIAL LEDGER */}
            <section
              id="worked-raffia-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  Worked ₹38.4L Ledger: BOPP Rice Bags + FIBC Export Arrears
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider a Silvassa / Ahmedabad Udyam Small raffia converter supplying custom-printed 25 kg BOPP Basmati Rice bags and 1 MT FIBC jumbo bags to an agri-export house under a 30-day written PO. The buyer stops lifting 45,000 branded BOPP bags after export paddy rates dip and stalls ₹24.50 lakh of already-shipped FIBC invoices for 7 months (210 days past the 45-day statutory ceiling). Here is the exact statutory recovery stack quantified in the Fact-Verified Notice:
              </p>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <div className="bg-slate-900 text-white px-5 py-4 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 block">
                      Creditor Statutory Claim Computation
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-white">
                      Illustrative Raffia &amp; FIBC Recovery Ledger (MSMED s.16 + Sale of Goods s.55 &amp; s.44)
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Illustrative 3x RBI Benchmark @ 18.75% p.a. Monthly Rests
                  </span>
                </div>

                <div className="divide-y divide-slate-200 bg-white text-xs sm:text-sm">
                  <div className="flex justify-between items-center p-4">
                    <div>
                      <p className="font-bold text-slate-900">
                        1. Delivered &amp; Exported 1 MT FIBC Jumbo-Bag Invoices (GSTR-2B Availed)
                      </p>
                      <p className="text-xs text-slate-500">
                        Overdue 210 days beyond statutory appointed day; late denier debit note rejected
                      </p>
                    </div>
                    <span className="font-mono font-bold text-slate-900 shrink-0 ml-4">
                      &#8377;24,50,000
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4">
                    <div>
                      <p className="font-bold text-slate-900">
                        2. Unlifted Custom-Printed BOPP Basmati Bags (Sale of Goods s.55)
                      </p>
                      <p className="text-xs text-slate-500">
                        45,000 trademarked bags @ ₹21.50/bag (incl. GST); zero open-market salvage value
                      </p>
                    </div>
                    <span className="font-mono font-bold text-slate-900 shrink-0 ml-4">
                      &#8377;9,67,500
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4">
                    <div>
                      <p className="font-bold text-slate-900">
                        3. Unrecovered 7-Colour Rotogravure Cylinders + s.44 Godown Demurrage
                      </p>
                      <p className="text-xs text-slate-500">
                        Cylinder balance (₹84,000) + 4 months warehouse storage rent &amp; insurance (₹60,000)
                      </p>
                    </div>
                    <span className="font-mono font-bold text-slate-900 shrink-0 ml-4">
                      &#8377;1,44,000
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-emerald-50/70">
                    <div>
                      <p className="font-bold text-emerald-900">
                        4. MSMED Act s.16 Statutory Interest (3x RBI Bank Rate, Monthly Compounded)
                      </p>
                      <p className="text-xs text-emerald-800">
                        7 months compounded on ₹24.50L principal (illustrative 6.25% RBI rate &times; 3 = 18.75% p.a.)
                      </p>
                    </div>
                    <span className="font-mono font-extrabold text-emerald-800 shrink-0 ml-4">
                      + &#8377;2,81,200
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-slate-900 text-white">
                    <span className="font-extrabold text-sm sm:text-base">
                      Total Enforceable Statutory Demand (MSEFC / Commercial Court)
                    </span>
                    <span className="font-mono font-black text-base sm:text-lg text-emerald-400 shrink-0 ml-4">
                      &#8377;38,42,700
                    </span>
                  </div>
                </div>

                <div className="bg-red-50 border-t border-red-200 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs sm:text-sm text-slate-800">
                    <strong className="text-[#DC2626]">Buyer&rsquo;s Section 43B(h) Tax Shock:</strong>{" "}
                    If ₹24.50L of delivered Micro/Small bag invoices remain unpaid past March 31, the buyer faces{" "}
                    <strong>~₹6.17 Lakh to ₹8.56 Lakh</strong> in immediate corporate tax disallowance (25.17%–34.94% slab), plus non-deductible s.16 interest under MSMED s.23.
                  </div>
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold shrink-0 transition-colors"
                  >
                    Run Exact 3x RBI Calculator &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* SECTION 8 — BSA 2023 s.63 EVIDENCE CHECKLIST */}
            <section
              id="weighbridge-bsa63-evidence"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  Weighbridge, Denier Lab &amp; BSA s.63 Evidence Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Before serving your statutory notice or uploading an MSEFC / Commercial Court claim, assemble all four evidentiary quadrants—with every digital PDF, ERP ledger, weighbridge slip, and WhatsApp chat certified under{" "}
                <strong>Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023</strong> (replacing Evidence Act s.65B):
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-2">
                    Quadrant 1 &middot; Weighbridge &amp; Dispatch Proof
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-4">
                    <li>Computerized Dharamkanta weighbridge slips (Gross, Tare &amp; Net Bale Weight)</li>
                    <li>Bale-count packing lists, Lorry Receipts (LR/Bilty), and active E-Way bills</li>
                    <li>Signed buyer factory security Gate-In pass &amp; clean Store GRN stamps</li>
                    <li>Container stuffing / port gate-in confirmations for export FIBC consignments</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">
                    Quadrant 2 &middot; BIS &amp; ISO 21898 Quality Lab Logs
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-4">
                    <li>In-house QC sheets: GSM, tape denier, mesh (10&times;10 / 12&times;12), tensile &amp; elongation</li>
                    <li>BIS IS 11652 / IS 9755 / IS 14887 batch test logs proving compliance within tolerance</li>
                    <li>Third-party FIBC Top-Lift (5:1 / 6:1 SF), UV &amp; Type-C grounding test certificates</li>
                    <li>Written rebuttal emails rejecting post-15-day quality/weight debit notes</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-2">
                    Quadrant 3 &middot; BOPP Artwork &amp; Polymer PVC Trail
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-4">
                    <li>Email/WhatsApp PDF artwork sign-offs, shade cards &amp; rotogravure cylinder POs</li>
                    <li>Timestamped godown photographs of finished unlifted branded BOPP bales</li>
                    <li>RIL/IOCL/HMEL polymer purchase tax invoices &amp; monthly price circulars (PVC)</li>
                    <li>Formal Ready-for-Inspection (RFI) &amp; 15-day Tender of Delivery emails</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-2">
                    Quadrant 4 &middot; Statutory Tax &amp; BSA 2023 s.63 File
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-4">
                    <li>Udyam Registration Certificate (verifying Micro/Small status prior to supply date)</li>
                    <li>GSTR-1 invoice filings &amp; buyer GSTR-2B ITC acceptance proof + reconciled ledger</li>
                    <li>Dishonoured buyer PDCs, original bank cheque-return memos &amp; Director DINs</li>
                    <li>Signed BSA 2023 s.63 Part A &amp; Part B Certificate authenticating electronic records</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 9 — DUAL-TRACK CTA */}
            <section
              id="launch-raffia-notice"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  Start a ₹999 Fact-Verified Notice or Bulk Raffia Plant CSV Desk
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Stop funding cement plants, rice mills, sugar mills, and mineral exporters with cash-bought polymer granules. Test a single live overdue account today or onboard your entire factory receivable book:
              </p>

              <WovenSacksRecoveryCTA />
            </section>

            {/* SECTION 10 — HUB, TOOLS & SIBLING SPOKES */}
            <section
              id="related-packaging-spokes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  Packaging Hub, MSME Calculators &amp; Related Converter Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    tag: "Parent Industry Hub",
                    title: "Packaging, Corrugated Box, Printing & Paper Mill Recovery Hub",
                    href: "/industries/packaging-printing-paper-mill-recovery",
                    desc: "Master recovery directory for Indian flexible converters, corrugated plants, paper mills, rigid plastics, and raffia/FIBC manufacturers.",
                  },
                  {
                    tag: "Interactive Calculator",
                    title: "MSME Delayed Payment Interest Calculator (3x RBI Rate)",
                    href: "/tools/msme-delayed-payment-interest-calculator",
                    desc: "Compute exact monthly compounded MSMED Section 16 interest on overdue PP woven-sack, BOPP bag, and FIBC invoices.",
                  },
                  {
                    tag: "Statutory Notice Template",
                    title: "MSME Delayed Payment Legal Demand Notice Format",
                    href: "/templates/msme-delayed-payment-demand-notice",
                    desc: "Advocate-structured Section 15–18 & Section 43B(h) demand notice blueprint ready for rice, sugar, cement, and export buyers.",
                  },
                  {
                    tag: "Tax Disallowance Law",
                    title: "Section 43B(h) MSME 45-Day Payment Rule Explained",
                    href: "/law/section-43bh-msme-payment-rule",
                    desc: "How Udyam Micro & Small raffia converters trigger corporate income tax disallowance on defaulting mills and exporters.",
                  },
                  {
                    tag: "Sibling Playbook",
                    title: "Unlifted Custom-Printed Pouches & Mono-Cartons Recovery",
                    href: "/custom-printed-flexible-packaging-pouches-cartons-unlifted-stock-recovery",
                    desc: "Enforce Sale of Goods s.55, godown storage rent, and rotogravure cylinder lien when buyers abandon custom-branded packaging.",
                  },
                  {
                    tag: "Sibling Playbook",
                    title: "Corrugated Box Maker Recovery: GSM & Bursting Factor Disputes",
                    href: "/corrugated-box-carton-manufacturer-bursting-strength-gsm-dispute-recovery",
                    desc: "Defeat retrospective 10–15% BF/GSM/moisture debit notes after buyers pack and ship finished goods in your cartons.",
                  },
                  {
                    tag: "Sibling Playbook",
                    title: "Kraft Paper, Duplex Board Mill & Paper Merchant Credit Recovery",
                    href: "/kraft-paper-duplex-board-mill-dealer-converter-credit-recovery",
                    desc: "Overcome post-slitting reel complaints and recover ₹25L–₹2 Cr mill arrears via Sale of Goods s.42, NI s.138 & IBC s.8.",
                  },
                  {
                    tag: "Sibling Playbook",
                    title: "Rigid Plastic (PET/HDPE), Closures & Glass Bottle Mould Lien",
                    href: "/rigid-plastic-pet-preform-hdpe-drum-glass-bottle-mould-recovery",
                    desc: "Leverage Contract Act s.170 mould lien alongside MSMED ss.15–18 for polymer blow-moulding and industrial drum plants.",
                  },
                ].map((linkItem) => (
                  <Link
                    key={linkItem.href}
                    href={linkItem.href}
                    className="group block rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-[#DC2626] p-4 transition-all"
                  >
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-700 group-hover:bg-red-100 group-hover:text-[#DC2626] mb-2">
                      {linkItem.tag}
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                      {linkItem.title} &rarr;
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {linkItem.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            {/* SECTION 11 — FAQs */}
            <section
              id="woven-sacks-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  FAQs: PP Woven Sack, BOPP Bag &amp; FIBC Payment Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group rounded-xl border border-slate-200 bg-slate-50/70 open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-bold text-xs sm:text-sm text-slate-900">
                      <span>{faq.q}</span>
                      <span className="w-6 h-6 rounded-full bg-slate-200 group-open:bg-[#DC2626] group-open:text-white text-slate-700 flex items-center justify-center text-xs font-black shrink-0 transition-colors">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* SECTION 12 — STATUTORY AUTHORITIES & EDITORIAL REVIEW */}
            <section
              id="statutory-portals"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  Authoritative Statutes, BIS Standards &amp; MSME Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 mb-6">
                {PRIMARY_SOURCES.map((source, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#DC2626] font-extrabold shrink-0">
                      [{idx + 1}]
                    </span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] underline underline-offset-2 leading-relaxed"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Editorial Legal Attribution */}
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                    Legal Practice Review &amp; Authorship
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                    Reviewed by Anuj Anand Malik &middot; Advocate &amp; Founder, AMA Legal Solutions
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Statutory framework verified for Indian B2B commercial recovery (Updated Nov 2026). Informational creditor guide; consult an enrolled advocate for specific litigation filings.
                  </p>
                </div>
                <Link
                  href="/about-us"
                  className="text-xs font-bold text-[#DC2626] hover:underline shrink-0"
                >
                  Editorial Standards &rarr;
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>

      {/* FOOTER CROSS-LINKS */}
      <RelatedRecoveryGuides />
    </div>
  );
}
