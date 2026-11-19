import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CustomPackagingTableOfContents from "./CustomPackagingTableOfContents";
import CustomPackagingScenarioTabs from "./CustomPackagingScenarioTabs";
import CustomPackagingCTA from "./CustomPackagingCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/custom-printed-flexible-packaging-pouches-cartons-unlifted-stock-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

// PDF Exact H1 (147ch); kept verbatim in <h1> and ARTICLE_SCHEMA.headline
const EXACT_H1 =
  "Printed 5 Tons of Brand-Logo Laminate Pouches & Mono-Cartons—and the Buyer Changed Artwork or Stopped Lifting Stock? Recover 100% Price + Cylinders";

// Tightened from 71ch PDF draft to 56ch for Screaming Frog 30-60ch compliance
const META_TITLE = "Buyer Not Lifting Custom-Printed Pouches? Price Recovery";

// Tightened from 165ch PDF draft to 151ch for Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "You cannot resell FSSAI/trademark-printed pouches in the open market (only ₹8/kg scrap)! Sale of Goods Act s.55/44 & s.73 award 100% price + cylinders.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "buyer not lifting custom printed packaging pouches cartons recovery",
    "fssai rule change artwork revision buyer abandoned printed pouches",
    "rotogravure cylinder plate development cost unpaid",
    "zero resale value trademark printed laminate rolls",
    "storage holding charge unlifted packaging inventory",
    "sale of goods act section 55 price suit custom packaging",
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
      "The Sale of Goods Act, 1930 (Sections 23, 41–42, 44, 47, 55 & 56 — Appropriation of Custom Goods, Buyer Storage Liability, Unpaid Seller Lien & Suit for Price)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 73, 170 & 171 — Full Contract Damages Where Open-Market Resale Is Impossible & Bailee / General Lien Over Tooling)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 & 24 — 15-Day Objection Window, 45-Day Credit Ceiling & 3x RBI Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "The Income-tax Act, 1961 (Section 43B(h) — Statutory Tax Disallowance of Unpaid Micro & Small Packaging Converter Invoices Beyond 15/45 Days)",
    url: "https://www.incometax.gov.in/iec/foportal/",
  },
  {
    title:
      "The Trade Marks Act, 1999 (Section 29 — Legal Prohibition Against Selling Another Brand's Trademarked Packaging in the Open Market)",
    url: "https://www.indiacode.nic.in/handle/123456789/1993",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Electronic Admissibility of Artwork Approval Emails, WhatsApp Shade Cards & ERP Stock Ledgers)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    question:
      "Can a flexible packaging converter recover 100% of the contract price if the buyer never lifted the printed laminate rolls?",
    answer:
      "Yes. Unlike generic commodities that can be resold at market price, flexible laminate rolls, stand-up zipper pouches, pharma foil blisters, and mono-cartons printed with a buyer's registered trademark, barcode, and FSSAI/CDSCO license number have zero lawful resale market under Section 29 of the Trade Marks Act, 1999. Under Sections 55 and 56 of the Sale of Goods Act, 1930 read with Section 73 of the Indian Contract Act, 1872, courts award the full contracted price plus Section 44 storage charges, deducting only verified plastic/paper scrap realization (typically ₹8–₹14/kg).",
  },
  {
    question:
      "Is an FSSAI packaging rule change or brand artwork revision a valid 'Force Majeure' excuse for a buyer to abandon printed stock?",
    answer:
      "No. Commercial relaunches, MRP updates, distributor logo swaps, or regulatory label modifications announced after a buyer signed off on the Digital Artwork PDF / Shade Card do not frustrate a completed manufacturing contract under Section 56 of the Contract Act. The risk of label obsolescence after PO execution and artwork approval rests solely on the brand owner—not on the converter who procured virgin PET/BOPP/LDPE resin, inks, and cylinders to manufacture the contracted MOQ.",
  },
  {
    question:
      "Can a rotogravure converter charge monthly godown rent for unlifted pouches and cartons occupying warehouse racks?",
    answer:
      "Yes. Section 44 of the Sale of Goods Act, 1930 expressly makes a defaulting buyer liable for any loss occasioned by their neglect or refusal to take delivery, as well as a 'reasonable charge for the care and custody of the goods.' Once you issue a written Ready-for-Dispatch intimation with a 15-day final lifting window, you can lawfully bill palletized godown storage rent, fire-insurance allocation, and handling charges per ton per month.",
  },
  {
    question:
      "Can we legally hold the buyer's copper rotogravure cylinders, flexo plates, or cutting dies until overdue pouch bills are cleared?",
    answer:
      "Yes, in two strong ways. First, if your invoice billed a subsidized 'Cylinder Development / Engraving Contribution' rather than an outright capital sale, full ownership never transferred unconditionally. Second, even where the buyer claims title over cylinders, an unpaid converter holding a Contractual General Lien clause—or exercising an artisan/unpaid-seller lien under Sections 170–171 of the Contract Act and Section 47 of the Sale of Goods Act—can retain physical possession of engraved cylinders and dies until linked invoice, unlifted stock, and storage arrears are settled.",
  },
  {
    question:
      "Should I scrap or shred abandoned brand-printed pouches immediately to free godown space?",
    answer:
      "Never scrap unlifted printed stock without creating a court-admissible audit trail first. Destroying goods prematurely lets the buyer allege in court that you never manufactured the balance 3.5 tons. Always serve a formal 15-day Final Lifting & Pre-Scrap Notice via Advocate Speed Post RPAD + Email + WhatsApp, record weighbridge slips, rack photographs, and two independent recycler scrap quotes (₹8–₹14/kg), and execute witnessed shredding/baling only after the notice window expires.",
  },
  {
    question:
      "Does Section 43B(h) of the Income Tax Act apply to flexible packaging, label, and mono-carton converters?",
    answer:
      "Yes. Over 92% of Indian flexible laminate converters, corrugated plants, label printers, and offset mono-carton manufacturers qualify as Micro or Small Enterprises under Udyam Registration. Any undisputed invoice for lifted packaging stock remaining unpaid past 15 days (no written agreement) or 45 days (maximum written cap) becomes non-deductible taxable income for the FMCG/pharma buyer under Section 43B(h) and attracts monthly compounded interest at 3x RBI Bank Rate under Section 16 of the MSMED Act, 2006.",
  },
  {
    question:
      "What if the FMCG buyer claims 'ink shade variation' or 'GSM mismatch' 45 days after receiving the first 1.5 tons to avoid lifting the balance 3.5 tons?",
    answer:
      "Under Sections 41 and 42 of the Sale of Goods Act and Section 15 of the MSMED Act, a buyer who accepts deliveries, signs GRNs, and runs pouches on their Form-Fill-Seal (FFS) packing line without raising a written rejection within 15 days is deemed to have accepted the quality. Presenting your buyer-signed Chromalin/PDF artwork sign-off, approved press-pass shade card, and in-house COA (GSM, dart impact, seal strength, COF) destroys belated discount tactics in Commercial Courts and MSEFC proceedings.",
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
  image: [`${SITE_URL}/blog_money_recovery.png`],
  datePublished: "2026-11-19T10:30:00+05:30",
  dateModified: "2026-11-19T10:30:00+05:30",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  inLanguage: "en-IN",
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "5-Stage Recovery Playbook for Unlifted Custom-Printed Packaging, Pouches & Gravure Cylinders",
  description:
    "Step-by-step operational and statutory SOP for flexible laminate converters, mono-carton makers, and label printers to recover 100% invoice value, cylinder costs, and Section 44 storage charges.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Lock Artwork Sign-Off, Production Batch Sheet & FG Godown Audit",
      text: "Compile the original 5-ton MOQ PO, buyer-approved Digital Artwork PDF/Shade Card, in-house COA/GSM lab reports, roll-wise weighment sheets, and time-stamped godown photos of unlifted stock.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Serve Ready-for-Dispatch & 15-Day Final Lifting Notice (Sale of Goods s.44)",
      text: "Dispatch a formal Advocate Legal Notice via Email, WhatsApp, and Speed Post RPAD fixing a 15-day deadline to lift remaining printed rolls/cartons and triggering monthly Section 44 godown storage rent.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Enforce Rotogravure Cylinder / Die Lien & Section 43B(h) Tax Warning",
      text: "Assert contractual and statutory lien over copper gravure cylinders, flexo plates, and punching dies until all lifted bills and unlifted FG balances clear, while notifying the buyer's CFO of Section 43B(h) tax disallowance.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Document Zero-Resale Scrap Valuation (₹8–₹14/kg) Before Mitigation",
      text: "Obtain two written polymer/paper recycler quotes establishing that trademarked, FSSAI-printed packaging cannot lawfully be resold except as shredded scrap, locking in full Contract Act s.73 damages minus scrap value.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Escalate Lifted Bills to MSEFC / NI s.138 & Unlifted Stock to Commercial Court (s.55)",
      text: "File lifted Udyam invoice arrears on MSME Samadhaan (3x RBI compound interest) or NI s.138 for bounced PDCs, while suing for unlifted custom stock, cylinder dues, and godown rent under Sale of Goods Act s.55/56 and Commercial Courts Act.",
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
      name: "Packaging, Printing & Paper Mill Recovery",
      item: `${SITE_URL}/industries/packaging-printing-paper-mill-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Custom-Printed Pouches & Cartons Unlifted Stock Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function CustomPrintedPackagingUnliftedStockRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data (JSON-LD) */}
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

      {/* DARK GRADIENT HERO */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-22 &middot; Flexible Packaging &amp; Mono-Carton Creditors</span>
            <span aria-hidden="true">&bull;</span>
            <span>Sale of Goods s.55/44 &middot; s.73 &middot; Cylinder Lien</span>
          </div>

          {/* Single Page H1 (Verbatim match with ARTICLE_SCHEMA.headline) */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Statutory Answer Box + Parent Hub Link in First 250 Words */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Because FSSAI-coded, trademark-printed pouches and mono-cartons cannot lawfully be
            resold in the open market (yielding only &#8377;8&ndash;&#8377;14/kg as shredded scrap),{" "}
            <strong>Sale of Goods Act ss.55/56 &amp; 44</strong> and{" "}
            <strong>Contract Act s.73</strong> entitle converters to recover{" "}
            <strong>100% contract price + cylinder dues + godown rent</strong> minus nominal scrap
            credit. Part of our{" "}
            <Link
              href="/industries/packaging-printing-paper-mill-recovery"
              className="text-red-300 underline decoration-red-400/70 underline-offset-2 hover:text-white transition-colors"
            >
              Packaging, Printing &amp; Paper Mill Recovery Hub
            </Link>
            .
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">100% Price</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Recoverable under Sale of Goods s.55 &amp; s.73 (less &#8377;8/kg scrap)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">s.44 Rent</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Monthly godown storage &amp; care charges after Ready-for-Dispatch
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                MSMED s.16 compound interest + s.43B(h) tax disallowance
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">Cylinder Lien</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Hold engraved copper cylinders &amp; dies until ledger clears
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "Packaging & Printing Recovery",
              href: "/industries/packaging-printing-paper-mill-recovery",
            },
            {
              label: "Unlifted Custom-Printed Pouches & Cartons",
              href: PAGE_URL,
            },
          ]}
        />

        {/* 2-COLUMN SPLIT: STICKY LEFT TOC + MAIN EDITORIAL BODY */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4">
          <CustomPackagingTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* SECTION 1: ZERO-SALVAGE PACKAGING TRAP */}
            <section
              id="zero-salvage-packaging-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Brand-Printed Laminates Trap Converters in Zero-Salvage Losses
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Every flexible laminate converter, rotogravure printer, label press, and pharma
                  mono-carton manufacturer in India&apos;s packaging hubs&mdash;from Ahmedabad,
                  Vapi, Daman, and Silvassa to Baddi, Noida, Bhiwandi, and Sivakasi&mdash;faces one
                  asymmetric working-capital wound that no generic commercial recovery guide
                  addresses. An FMCG, spices, namkeen, edible-oil, D2C cosmetic, or pharmaceutical
                  brand negotiates aggressive per-kilogram or per-pouch conversion pricing by
                  committing to a <strong>5-ton Minimum Order Quantity (MOQ)</strong>. To hit that
                  rate, your plant procures virgin PET, BOPP, metallized polyester, LDPE/CPP sealant
                  film, food-grade inks, adhesives, or duplex board upfront, engraves an{" "}
                  <strong>8-colour copper rotogravure cylinder set</strong>, and completes the print
                  and lamination run.
                </p>
                <p>
                  Then the trap springs. The brand lifts 1.5 tons across two call-offs, faces a slow
                  retail launch, tweaks its front-of-pack promotional artwork, updates an FSSAI
                  nutritional table, or discontinues the SKU&mdash;and simply stops issuing dispatch
                  schedules. Suddenly, <strong>3.5 tons of brand-logo laminate rolls or die-cut
                  mono-cartons</strong> sit immobilized in your warehouse. Unlike plain kraft paper
                  or unprinted film, you are legally barred from reselling those pouches to any
                  other manufacturer because they carry the defaulting buyer&apos;s registered
                  trademark, FSSAI/CDSCO license number, customer-care address, and barcode.
                </p>
                <p>
                  Unscrupulous procurement teams know this asymmetry intimately. Relying on your
                  inability to liquidate branded packaging, they stall for 90&ndash;180 days, refuse
                  to pay cylinder development balances, or coerce converters into 20%&ndash;30%
                  distress haircuts. Yet Indian commercial law flips this leverage entirely in the
                  converter&apos;s favour: precisely <em>because</em> bespoke trademarked packaging
                  has zero open-market resale value (fetching only &#8377;8&ndash;&#8377;14/kg as
                  shredded multi-layer plastic scrap), the law does <strong>not</strong> limit you
                  to a nominal &ldquo;market-price difference.&rdquo; Instead,{" "}
                  <strong>Sections 55, 56, and 44 of the Sale of Goods Act, 1930</strong> read with{" "}
                  <strong>Section 73 of the Indian Contract Act, 1872</strong> award{" "}
                  <strong>100% of the contracted invoice value plus godown storage charges</strong>,
                  offset only by documented scrap realization.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                    Why Open-Market Resale Fails
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Reselling pouches bearing a buyer&apos;s brand logo, FSSAI license, or drug
                    label triggers trademark infringement under Trade Marks Act s.29 and regulatory
                    penalties.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-1">
                    Hidden Margin Bleed
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Multi-layer PET/MET-PET/PE laminates carry 70%+ raw resin &amp; ink cost paid on
                    short supplier credit&mdash;one abandoned 3.5-ton batch wipes out an entire
                    quarter&apos;s EBITDA.
                  </p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-1">
                    Over 92% Converters Are Udyam MSMEs
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Pairing Sale of Goods s.55/44 with{" "}
                    <Link
                      href="/law/section-43bh-msme-payment-rule"
                      className="font-bold text-emerald-900 underline"
                    >
                      Income Tax Section 43B(h)
                    </Link>{" "}
                    and MSMED s.16 3x RBI interest puts immediate CFO-level pressure on FMCG buyers.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 2: 5-STAGE DECISION TREE SVG + MOBILE STACKED CARDS */}
            <section
              id="unlifted-stock-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  5-Stage Unlifted Pouches &amp; Cylinder Recovery Decision Tree
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Converters lose strong suits when they either sit quietly hoping the buyer&apos;s
                sales revive or prematurely shred printed rolls out of frustration. Follow this
                five-stage evidentiary and statutory rail to convert dead godown stock into a
                court-enforceable money decree:
              </p>

              {/* Desktop SVG Decision Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-950 rounded-2xl p-5 border border-slate-800">
                <svg
                  viewBox="0 0 920 240"
                  width={920}
                  height={240}
                  role="img"
                  aria-label="5-stage custom-printed packaging unlifted stock and cylinder recovery decision tree"
                  className="w-full h-auto"
                >
                  <defs>
                    <marker
                      id="pkgArrow"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#EF4444" />
                    </marker>
                  </defs>

                  {/* Stage 1 */}
                  <rect
                    x="10"
                    y="24"
                    width="160"
                    height="190"
                    rx="12"
                    fill="#1E293B"
                    stroke="#334155"
                    strokeWidth="1.5"
                  />
                  <rect x="22" y="36" width="58" height="22" rx="11" fill="#DC2626" />
                  <text
                    x="51"
                    y="51"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="10"
                    fontWeight="bold"
                  >
                    STAGE 1
                  </text>
                  <text x="22" y="82" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    FG Stock Audit
                  </text>
                  <text x="22" y="102" fill="#CBD5E1" fontSize="10">
                    &bull; PO &amp; Artwork PDF
                  </text>
                  <text x="22" y="118" fill="#CBD5E1" fontSize="10">
                    &bull; Shade Card + COA
                  </text>
                  <text x="22" y="134" fill="#CBD5E1" fontSize="10">
                    &bull; Roll Weight Sheet
                  </text>
                  <text x="22" y="150" fill="#CBD5E1" fontSize="10">
                    &bull; Dated Rack Photos
                  </text>
                  <text x="22" y="196" fill="#34D399" fontSize="9.5" fontWeight="bold">
                    Proves Appropriation
                  </text>

                  <line
                    x1="170"
                    y1="119"
                    x2="196"
                    y2="119"
                    stroke="#EF4444"
                    strokeWidth="2"
                    markerEnd="url(#pkgArrow)"
                  />

                  {/* Stage 2 */}
                  <rect
                    x="198"
                    y="24"
                    width="160"
                    height="190"
                    rx="12"
                    fill="#1E293B"
                    stroke="#334155"
                    strokeWidth="1.5"
                  />
                  <rect x="210" y="36" width="58" height="22" rx="11" fill="#DC2626" />
                  <text
                    x="239"
                    y="51"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="10"
                    fontWeight="bold"
                  >
                    STAGE 2
                  </text>
                  <text x="210" y="82" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    15-Day Lift Notice
                  </text>
                  <text x="210" y="102" fill="#CBD5E1" fontSize="10">
                    &bull; Ready-for-Dispatch
                  </text>
                  <text x="210" y="118" fill="#CBD5E1" fontSize="10">
                    &bull; Trigger s.44 Rent
                  </text>
                  <text x="210" y="134" fill="#CBD5E1" fontSize="10">
                    &bull; Email + WhatsApp
                  </text>
                  <text x="210" y="150" fill="#CBD5E1" fontSize="10">
                    &bull; Speed Post RPAD
                  </text>
                  <text x="210" y="196" fill="#FBBF24" fontSize="9.5" fontWeight="bold">
                    Sale of Goods s.44
                  </text>

                  <line
                    x1="358"
                    y1="119"
                    x2="384"
                    y2="119"
                    stroke="#EF4444"
                    strokeWidth="2"
                    markerEnd="url(#pkgArrow)"
                  />

                  {/* Stage 3 */}
                  <rect
                    x="386"
                    y="24"
                    width="160"
                    height="190"
                    rx="12"
                    fill="#1E293B"
                    stroke="#DC2626"
                    strokeWidth="1.8"
                  />
                  <rect x="398" y="36" width="58" height="22" rx="11" fill="#DC2626" />
                  <text
                    x="427"
                    y="51"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="10"
                    fontWeight="bold"
                  >
                    STAGE 3
                  </text>
                  <text x="398" y="82" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    Lien &amp; 43B(h) Lock
                  </text>
                  <text x="398" y="102" fill="#CBD5E1" fontSize="10">
                    &bull; Hold 8 Cylinders
                  </text>
                  <text x="398" y="118" fill="#CBD5E1" fontSize="10">
                    &bull; Retain Cutting Dies
                  </text>
                  <text x="398" y="134" fill="#CBD5E1" fontSize="10">
                    &bull; Cite IT Act 43B(h)
                  </text>
                  <text x="398" y="150" fill="#CBD5E1" fontSize="10">
                    &bull; Block Vendor Shift
                  </text>
                  <text x="398" y="196" fill="#F87171" fontSize="9.5" fontWeight="bold">
                    Contract Act s.170/171
                  </text>

                  <line
                    x1="546"
                    y1="119"
                    x2="572"
                    y2="119"
                    stroke="#EF4444"
                    strokeWidth="2"
                    markerEnd="url(#pkgArrow)"
                  />

                  {/* Stage 4 */}
                  <rect
                    x="574"
                    y="24"
                    width="160"
                    height="190"
                    rx="12"
                    fill="#1E293B"
                    stroke="#334155"
                    strokeWidth="1.5"
                  />
                  <rect x="586" y="36" width="58" height="22" rx="11" fill="#DC2626" />
                  <text
                    x="615"
                    y="51"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="10"
                    fontWeight="bold"
                  >
                    STAGE 4
                  </text>
                  <text x="586" y="82" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    Scrap Valuation
                  </text>
                  <text x="586" y="102" fill="#CBD5E1" fontSize="10">
                    &bull; 2 Recycler Quotes
                  </text>
                  <text x="586" y="118" fill="#CBD5E1" fontSize="10">
                    &bull; ₹8–₹14/kg Scrap
                  </text>
                  <text x="586" y="134" fill="#CBD5E1" fontSize="10">
                    &bull; Pre-Scrap Notice
                  </text>
                  <text x="586" y="150" fill="#CBD5E1" fontSize="10">
                    &bull; Prove Zero Resale
                  </text>
                  <text x="586" y="196" fill="#34D399" fontSize="9.5" fontWeight="bold">
                    Locks s.73 Mitigation
                  </text>

                  <line
                    x1="734"
                    y1="119"
                    x2="760"
                    y2="119"
                    stroke="#EF4444"
                    strokeWidth="2"
                    markerEnd="url(#pkgArrow)"
                  />

                  {/* Stage 5 */}
                  <rect
                    x="762"
                    y="24"
                    width="148"
                    height="190"
                    rx="12"
                    fill="#0F172A"
                    stroke="#10B981"
                    strokeWidth="1.8"
                  />
                  <rect x="774" y="36" width="58" height="22" rx="11" fill="#10B981" />
                  <text
                    x="803"
                    y="51"
                    textAnchor="middle"
                    fill="#0F172A"
                    fontSize="10"
                    fontWeight="bold"
                  >
                    STAGE 5
                  </text>
                  <text x="774" y="82" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    Dual Forum Suit
                  </text>
                  <text x="774" y="102" fill="#CBD5E1" fontSize="10">
                    &bull; MSEFC (Lifted)
                  </text>
                  <text x="774" y="118" fill="#CBD5E1" fontSize="10">
                    &bull; s.55/73 Suit (FG)
                  </text>
                  <text x="774" y="134" fill="#CBD5E1" fontSize="10">
                    &bull; NI s.138 PDCs
                  </text>
                  <text x="774" y="150" fill="#CBD5E1" fontSize="10">
                    &bull; 3x RBI Interest
                  </text>
                  <text x="774" y="196" fill="#34D399" fontSize="9.5" fontWeight="bold">
                    100% Price Decree
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Stage Cards */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    stage: "Stage 1 · FG Stock & Artwork Audit",
                    text: "Compile the 5-ton MOQ PO, buyer-approved artwork PDF, press-pass shade card, COA/GSM lab report, and roll-wise godown photos to prove unconditional appropriation.",
                  },
                  {
                    stage: "Stage 2 · 15-Day Lifting & s.44 Rent Notice",
                    text: "Serve a formal Ready-for-Dispatch Advocate Notice via Email, WhatsApp, and Speed Post RPAD setting a 15-day final lifting window and activating monthly godown storage charges.",
                  },
                  {
                    stage: "Stage 3 · Cylinder Lien & s.43B(h) Pressure",
                    text: "Assert physical retention over engraved copper cylinders, flexo plates, and punching dies while putting the buyer's CFO on Section 43B(h) tax-disallowance notice.",
                  },
                  {
                    stage: "Stage 4 · Documented Scrap Valuation (₹8–₹14/kg)",
                    text: "Obtain two local polymer/paper recycler quotes to document that trademarked pouches have zero resale market, satisfying Contract Act s.73 mitigation duty.",
                  },
                  {
                    stage: "Stage 5 · Dual-Track Filing (MSEFC + s.55 Suit)",
                    text: "Escalate lifted overdue bills to MSME Samadhaan / NI s.138 and claim unlifted custom stock, cylinder dues, and godown rent under Sale of Goods Act s.55/56 & Commercial Court.",
                  },
                ].map((item) => (
                  <div
                    key={item.stage}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <p className="text-xs font-extrabold text-red-400 uppercase tracking-wider mb-1">
                      {item.stage}
                    </p>
                    <p className="text-xs text-slate-200 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 3: STATUTORY MATRIX TABLE */}
            <section
              id="packaging-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Matrix: Sale of Goods ss.44/55/56, s.73 &amp; MSMED Act
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Each failure mode in flexible packaging and commercial printing maps to a distinct
                statutory weapon. Use this matrix to structure your Advocate Demand Notice so that
                lifted invoices, unlifted bespoke rolls, copper cylinders, and warehouse space are
                all priced accurately:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse min-w-[680px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <th className="py-3.5 px-4 font-bold">Statute &amp; Provision</th>
                      <th className="py-3.5 px-4 font-bold">Converter Failure Mode</th>
                      <th className="py-3.5 px-4 font-bold">Legal Remedy &amp; Quantum</th>
                      <th className="py-3.5 px-4 font-bold">Key Evidentiary Trigger</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Sale of Goods Act, 1930
                        <span className="block text-xs font-semibold text-[#DC2626]">
                          Sections 23, 55 &amp; 56
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        Buyer stops lifting 3.5 tons of printed pouches/cartons after artwork change
                        or SKU shutdown.
                      </td>
                      <td className="py-3.5 px-4">
                        Suit for <strong>100% Contract Price</strong> (s.55) where property passed
                        via appropriation, or full damages for non-acceptance (s.56).
                      </td>
                      <td className="py-3.5 px-4">
                        Firm MOQ PO + signed artwork proof + FG batch appropriation notice.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Indian Contract Act, 1872
                        <span className="block text-xs font-semibold text-[#DC2626]">
                          Section 73 + Trade Marks s.29
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        Buyer argues converter must &ldquo;mitigate loss&rdquo; by selling pouches
                        to another customer.
                      </td>
                      <td className="py-3.5 px-4">
                        Where trademark &amp; FSSAI printing bars open-market resale, damages ={" "}
                        <strong>Full Contract Price minus &#8377;8&ndash;&#8377;14/kg scrap</strong>.
                      </td>
                      <td className="py-3.5 px-4">
                        2 written recycler quotes + photos showing buyer&apos;s logo &amp; FSSAI
                        code printed on film.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Sale of Goods Act, 1930
                        <span className="block text-xs font-semibold text-[#DC2626]">
                          Section 44
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        Unlifted laminate pallets block godown racks &amp; fire-insurance capacity
                        for months.
                      </td>
                      <td className="py-3.5 px-4">
                        Recoverable <strong>monthly storage rent, care, custody &amp; insurance</strong>{" "}
                        charges on top of principal.
                      </td>
                      <td className="py-3.5 px-4">
                        Written Ready-for-Dispatch email + 15-day final lifting notice + warehouse
                        tariff sheet.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Contract Act ss.170&ndash;171
                        <span className="block text-xs font-semibold text-[#DC2626]">
                          &amp; Sale of Goods s.47
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        Defaulting brand demands handover of 8-colour copper cylinders to move to a
                        rival plant.
                      </td>
                      <td className="py-3.5 px-4">
                        Lawful <strong>physical retention (lien)</strong> over rotogravure
                        cylinders, flexo plates &amp; cutting dies until full payment clears.
                      </td>
                      <td className="py-3.5 px-4">
                        Cylinder amortization invoice wording + PO General Lien clause + unpaid
                        ledger.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        MSMED Act ss.15&ndash;18
                        <span className="block text-xs font-semibold text-[#DC2626]">
                          &amp; Income Tax s.43B(h)
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        FMCG/pharma buyer delays lifted carton bills past 45 days or invents late
                        GSM/shade debits.
                      </td>
                      <td className="py-3.5 px-4">
                        <strong>3x RBI Bank Rate</strong> monthly compound interest + 15-day
                        objection bar + FY tax disallowance for buyer.
                      </td>
                      <td className="py-3.5 px-4">
                        Active Micro/Small Udyam Certificate + e-Way bill + GRN with zero 15-day
                        written protest.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        NI Act ss.138/141
                        <span className="block text-xs font-semibold text-[#DC2626]">
                          &amp; CPC Order XXXVII
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        Buyer issues stop-payment on security PDCs or ignores reconciled invoice
                        balance.
                      </td>
                      <td className="py-3.5 px-4">
                        Criminal prosecution of Directors (20% interim relief u/s 143A) + fast
                        Summary Suit on signed invoices.
                      </td>
                      <td className="py-3.5 px-4">
                        Cheque Return Memo + 15-day notice within 30 days + GST GSTR-1 / ledger
                        confirmation.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: INTERACTIVE 4-TAB FAILURE MODE EXPLORER */}
            <section
              id="packaging-abandonment-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 Custom Packaging Abandonment &amp; Artwork Revision Playbooks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select the exact commercial dispute stalling your converting plant or mono-carton
                unit to see the buyer&apos;s tactic, your statutory counter-strike, and the exact
                3-step execution playbook:
              </p>

              <CustomPackagingScenarioTabs />
            </section>

            {/* SECTION 5: WORKED CLAIM LEDGER */}
            <section
              id="worked-packaging-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Claim Ledger: 3.5 Tons Unlifted Rolls + 8 Cylinders
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider a typical Udyam-registered flexible packaging converter in Vapi or Noida
                executing a <strong>5,000 kg (5-ton) MOQ</strong> for 3-layer PET/MET-PET/LDPE spice
                pouches at <strong>&#8377;285/kg + 18% GST</strong>. The buyer lifted 1,500 kg
                (paid only partially), then changed FSSAI/promotional artwork and left{" "}
                <strong>3,500 kg</strong> of printed rolls rotting in the godown for 4 months while
                withholding the balance on <strong>8 copper rotogravure cylinders</strong>:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-700 mb-4">
                  <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-red-400">
                    Illustrative Converter Recovery Computation (Sale of Goods s.55/44 + s.73 +
                    MSMED s.16)
                  </p>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Zero-Salvage Branded Film
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between gap-4 border-b border-slate-800 pb-2.5">
                    <span className="text-slate-300">
                      1. Unpaid Balance on Lifted 1,500 kg Rolls (Inv. Overdue 95 Days)
                    </span>
                    <span className="font-bold text-white shrink-0">&#8377;2,45,000</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-800 pb-2.5">
                    <span className="text-slate-300">
                      2. Unlifted Custom-Printed FG Stock (3,500 kg &times; &#8377;285/kg + 18% GST)
                    </span>
                    <span className="font-bold text-white shrink-0">&#8377;11,77,050</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-800 pb-2.5">
                    <span className="text-slate-300">
                      3. Unpaid 8-Colour Rotogravure Cylinder Balance (8 &times; &#8377;16,500 + GST)
                    </span>
                    <span className="font-bold text-white shrink-0">&#8377;1,55,760</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-800 pb-2.5">
                    <span className="text-slate-300">
                      4. Section 44 Godown Rent &amp; Insurance (3.5 MT &times; &#8377;4,500/MT/mo
                      &times; 4 mos)
                    </span>
                    <span className="font-bold text-amber-300 shrink-0">&#8377;63,000</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-800 pb-2.5">
                    <span className="text-slate-300">
                      5. MSMED s.16 Compound Interest on Overdue Lifted Bill (3x RBI Rate ~18.75%
                      p.a., illustrative)
                    </span>
                    <span className="font-bold text-amber-300 shrink-0">&#8377;12,180</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-700 pb-3">
                    <span className="text-red-300">
                      Less: Verified Multi-Layer Scrap Credit (3,500 kg &times; &#8377;8/kg
                      mitigation quote)
                    </span>
                    <span className="font-bold text-red-400 shrink-0">&minus; &#8377;28,000</span>
                  </div>
                  <div className="flex justify-between items-center gap-4 pt-2">
                    <span className="text-sm sm:text-base font-black text-emerald-400">
                      Net Recoverable Statutory Claim (97.6% of Full Value Protected)
                    </span>
                    <span className="text-lg sm:text-2xl font-black text-emerald-400 shrink-0">
                      &#8377;16,24,990
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
                  Note: Interest shown is illustrative based on RBI Bank Rate benchmarks; compute
                  your exact statutory MSME compound interest month-by-month using our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-red-300 underline hover:text-white"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* SECTION 6: CYLINDER LIEN & GODOWN STORAGE RENT */}
            <section
              id="cylinder-lien-godown-rent"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Enforcing Rotogravure Cylinder Lien &amp; Godown Storage Rent (s.44)
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  When a defaulting FMCG or pharma buyer abandons 3.5 tons of printed pouches, they
                  almost always attempt a parallel manoeuvre: silently onboarding a second converter
                  and emailing you an abrupt demand to &ldquo;return our 8 copper cylinders / flexo
                  plates / rotary cutting dies within 48 hours.&rdquo; Never surrender tooling while
                  your ledger is unpaid. Tooling custody is your single strongest commercial lever
                  because re-engraving 8 cylinders and re-approving shade cards delays the
                  buyer&apos;s retail supply chain by 3&ndash;5 weeks.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="border-l-4 border-[#DC2626] bg-slate-50 rounded-r-xl p-4">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                      1. Development Contribution vs. Outright Asset Sale
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      In Indian flexible packaging practice, buyers typically pay a subsidized
                      &ldquo;Cylinder Development / Engraving Contribution&rdquo; (covering copper
                      plating, electronic engraving, and chrome finishing) while the converter
                      maintains the steel base shells and storage rack. Unless your tax invoice
                      explicitly transferred capital title of the physical steel base unconditionally,
                      the buyer has no unilateral right to demand physical removal while conversion
                      dues remain open.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#DC2626] bg-slate-50 rounded-r-xl p-4">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                      2. Exercising Lien Under Contract Act ss.170&ndash;171 &amp; Sale of Goods s.47
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Even where a buyer paid full cylinder cost, an express{" "}
                      <strong>General Lien Clause</strong> in your quotation/PO acknowledgement
                      entitles you to retain all cylinders, plates, and mono-carton dies against the
                      general balance of account (lifted invoices + unlifted FG stock + s.44 godown
                      rent). Always respond in writing through counsel confirming you hold the
                      tooling lawfully under lien&mdash;neutralizing false police complaints of
                      criminal misappropriation.
                    </p>
                  </div>
                </div>

                <p>
                  Simultaneously, activate <strong>Section 44 of the Sale of Goods Act, 1930</strong>{" "}
                  for the physical warehouse footprint consumed by unlifted rolls and cartons. Under
                  Section 44, once the converter is ready and willing to deliver and requests the
                  buyer to take delivery, if the buyer does not lift the stock within a reasonable
                  time, the buyer becomes statutorily liable for (a) every direct loss caused by
                  their refusal (including laminate adhesive shelf-life degradation or moisture
                  damage), and (b) a reasonable monthly charge for care, pallet storage, and fire
                  insurance. For deeper tooling ownership law, review our upcoming deep-dive on{" "}
                  <Link
                    href="/printing-cylinders-dies-plates-ownership-and-lien-law-packaging"
                    className="font-bold text-[#DC2626] underline"
                  >
                    Rotogravure Cylinders, Flexo Plates &amp; Cutting Dies Ownership vs. Lien Law
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* SECTION 7: ARTWORK SIGN-OFF & BSA 2023 s.63 EVIDENCE CHECKLIST */}
            <section
              id="packaging-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Artwork Sign-Off, GSM Logs &amp; BSA 2023 s.63 Evidence Dossier
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Commercial Courts and MSEFC Facilitation Councils decide custom-packaging claims on
                documentary precision. Assemble these six proofs before dispatching your Advocate
                Legal Notice:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    num: "01",
                    title: "Firm MOQ Purchase Order & Quotation Terms",
                    desc: "Original PO specifying total tonnage/pouch quantity (e.g., 5 MT), rate/kg, cylinder terms, credit period, and General Lien / storage clauses.",
                  },
                  {
                    num: "02",
                    title: "Buyer-Approved Artwork PDF & Shade Card",
                    desc: "Email or signed Chromalin/digital proof approving the exact brand logo, FSSAI license, MRP block, and Pantone/Delta-E colour standard prior to engraving.",
                  },
                  {
                    num: "03",
                    title: "In-House QC COA & Partial Lifting GRNs",
                    desc: "Certificate of Analysis (GSM, micron thickness, dart impact, seal strength, COF) plus signed GRNs/e-Way bills proving the initial 1.5 tons ran smoothly on buyer's FFS machines.",
                  },
                  {
                    num: "04",
                    title: "Roll-Wise FG Stock Sheet & Dated Rack Photos",
                    desc: "Batch production log, reel-by-reel net weight slip, GST job-work/FG register, and time-stamped photographs showing the buyer's branded pouches stacked ready for dispatch.",
                  },
                  {
                    num: "05",
                    title: "Two Independent Scrap Recycler Quotes",
                    desc: "Written letterhead quotations from local plastic/paper recyclers confirming multi-layer printed laminates fetch only ₹8–₹14/kg as shredded scrap.",
                  },
                  {
                    num: "06",
                    title: "BSA 2023 Section 63 Electronic Certificate",
                    desc: "Mandatory signed Section 63 certificate authenticating WhatsApp chats with buyer's procurement manager, artwork approval emails, ERP ledger, and GSTR-1 uploads.",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="flex gap-3.5 bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <span className="w-8 h-8 rounded-lg bg-slate-900 text-white text-xs font-black flex items-center justify-center shrink-0">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 8: DUAL-TRACK B2B CTA */}
            <section
              id="packaging-dual-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Dispatch a &#8377;999 Packaging Notice or Onboard Bulk Converter Ledger
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Whether you are recovering one stuck 3.5-ton spice/pharma laminate order or clearing
                40+ aged brand accounts ahead of March 31 audit closure, start immediately on the
                track that matches your plant&apos;s receivables:
              </p>

              <CustomPackagingCTA />
            </section>

            {/* SECTION 9: INTERNAL LINKING CLUSTER (HUB, CALCULATOR, TEMPLATES & SIBLING SPOKES) */}
            <section
              id="packaging-related-resources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Packaging Industry Guides, MSME Calculator &amp; Notice Templates
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    tag: "Parent Industry Hub",
                    title: "Packaging, Corrugated Box, Flexible Printing & Paper Mill Recovery",
                    href: "/industries/packaging-printing-paper-mill-recovery",
                    desc: "Master recovery hub for corrugated box factories, laminate converters, rigid plastic/glass makers, and kraft paper mills.",
                  },
                  {
                    tag: "Live Interactive Tool",
                    title: "MSME Delayed Payment Interest Calculator (3x RBI Rate)",
                    href: "/tools/msme-delayed-payment-interest-calculator",
                    desc: "Compute exact monthly compounded MSMED Act Section 16 interest on overdue Udyam packaging invoices.",
                  },
                  {
                    tag: "Live Notice Template",
                    title: "MSME Delayed Payment Demand Notice Format (s.15–18 & 43B(h))",
                    href: "/templates/msme-delayed-payment-demand-notice",
                    desc: "Advocate-vetted MSME statutory demand notice template with 15/45-day credit cap and tax disallowance warning.",
                  },
                  {
                    tag: "Live Statutory Guide",
                    title: "Income Tax Section 43B(h) MSME Payment Rule Explained",
                    href: "/law/section-43bh-msme-payment-rule",
                    desc: "How Udyam Micro & Small packaging manufacturers use Section 43B(h) corporate tax disallowance to unlock stuck bills.",
                  },
                  {
                    tag: "Packaging Notice Pack",
                    title: "Packaging Invoice & 15-Day Unlifted Stock Legal Notice Format",
                    href: "/templates/packaging-unlifted-custom-stock-and-invoice-legal-notice",
                    desc: "Specialized converter notice combining E-Way/invoice schedule, unlifted branded FG table, s.44 godown rent & cylinder lien.",
                  },
                  {
                    tag: "Sibling Packaging Guides",
                    title: "Corrugated Box GSM/BS Disputes, Paper Mills & Rigid Mould Recovery",
                    href: "/corrugated-box-carton-manufacturer-bursting-strength-gsm-dispute-recovery",
                    desc: "Explore recovery playbooks for corrugated bursting-strength disputes, kraft/duplex mills, and PET/HDPE mould defaults.",
                  },
                ].map((card) => (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="group block bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626]/50 rounded-xl p-4 transition-all shadow-xs hover:shadow-md"
                  >
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2.5 py-0.5 rounded-full mb-2">
                      {card.tag}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors mb-1">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                  </Link>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
                <span className="font-bold text-slate-500 mr-1">More IND-22 Spokes:</span>
                <Link
                  href="/kraft-paper-duplex-board-mill-dealer-converter-credit-recovery"
                  className="text-slate-700 hover:text-[#DC2626] underline"
                >
                  Kraft Paper &amp; Duplex Board Mill Credit Recovery
                </Link>
                <span aria-hidden="true" className="text-slate-300">
                  &bull;
                </span>
                <Link
                  href="/rigid-plastic-pet-preform-hdpe-drum-glass-bottle-mould-recovery"
                  className="text-slate-700 hover:text-[#DC2626] underline"
                >
                  PET Preform, HDPE Drum &amp; Glass Bottle Mould Recovery
                </Link>
                <span aria-hidden="true" className="text-slate-300">
                  &bull;
                </span>
                <Link
                  href="/printing-cylinders-dies-plates-ownership-and-lien-law-packaging"
                  className="text-slate-700 hover:text-[#DC2626] underline"
                >
                  Gravure Cylinder &amp; Die Lien Law
                </Link>
              </div>
            </section>

            {/* SECTION 10: FAQS */}
            <section
              id="packaging-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  FAQs: Unlifted Custom Pouches, Artwork Changes &amp; Cylinder Costs
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-3 cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900">
                      <span>{faq.question}</span>
                      <span
                        aria-hidden="true"
                        className="w-6 h-6 rounded-full bg-slate-200 group-open:bg-[#DC2626] group-open:text-white text-slate-700 flex items-center justify-center text-xs font-black shrink-0 transition-colors"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed pt-3 border-t border-slate-100">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* SECTION 11: PRIMARY STATUTORY SOURCES & AUTHOR ATTRIBUTION */}
            <section
              id="packaging-primary-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-black flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Primary Statutory Authorities &amp; Packaging Regulatory Sources
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 mb-6">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&rsaquo;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-[#DC2626] underline decoration-slate-300 underline-offset-2 transition-colors"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 leading-relaxed">
                <p className="font-bold text-slate-900 mb-1">
                  Authored &amp; Legal Strategy Reviewed by Anuj Anand Malik, Advocate &amp; Founder,
                  AMA Legal Solutions
                </p>
                <p>
                  Editorial Disclaimer: This playbook provides statutory and operational guidance
                  for Indian B2B flexible packaging, label, and mono-carton manufacturers. Exact
                  remedies depend on your PO wording, artwork sign-offs, Udyam classification, and
                  jurisdiction clauses.
                </p>
              </div>
            </section>
          </article>
        </div>
      </main>

      {/* FOOTER CLUSTER CROSS-LINKS */}
      <RelatedRecoveryGuides />
    </div>
  );
}
