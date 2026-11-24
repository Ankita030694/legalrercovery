import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import PackagingNoticeCTA from "./PackagingNoticeCTA";
import PackagingNoticeTOC from "./PackagingNoticeTOC";
import PackagingNoticeWorkspace from "./PackagingNoticeWorkspace";

export const revalidate = 86400;

const PAGE_PATH =
  "/templates/packaging-unlifted-custom-stock-and-invoice-legal-notice";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;

const EXACT_H1 =
  "Packaging & Printing Legal Notice Template: Overdue Invoice Demand + 15-Day Notice to Lift Custom-Printed Inventory (With Godown Rent & Cylinder Lien)";

const EXACT_TITLE = "Packaging Invoice & Unlifted Stock Legal Notice Format";

const EXACT_DESCRIPTION =
  "Advocate notice for corrugated, flexible & rigid packaging units: Invoice + E-Way schedule, WIP/FG table, s.44 godown rent, cylinder lien & s.43B(h).";

export const metadata: Metadata = {
  title: EXACT_TITLE,
  description: EXACT_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: EXACT_TITLE,
    description: EXACT_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(EXACT_TITLE),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: EXACT_TITLE,
    description: EXACT_DESCRIPTION,
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
      "Sale of Goods Act, 1930 — Sections 23, 42, 44, 47, 55 & 56 (Buyer Storage/Care Liability on Refusal to Lift, Deemed Acceptance & Full Price Action)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "Indian Contract Act, 1872 — Sections 73, 170 & 171 (Zero-Salvage Damages, Particular Lien & Contractual General Lien on Cylinders/Moulds)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "MSMED Act, 2006 — Sections 15, 16, 17 & 18 (45-Day Statutory Cap, 3x RBI Compound Interest & MSME Samadhaan MSEFC Filing)",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title:
      "Income-tax Act, 1961 — Section 43B(h) (Mandatory Year-End Expense Disallowance on Unpaid Micro & Small Packaging Enterprise Dues)",
    url: "https://www.incometaxindia.gov.in/",
  },
  {
    title:
      "Trade Marks Act, 1999 — Section 29 (Statutory Bar on Third-Party Resale of Branded/Logo-Printed Pouches, Cartons & Embossed Bottles)",
    url: "https://www.indiacode.nic.in/handle/123456789/1993",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 — Section 63 (Electronic Evidence Certificate for Artwork Emails, E-Way Bills & Dispatch Intimations)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    q: "How does Section 44 of the Sale of Goods Act allow packaging units to charge monthly godown rent?",
    a: "Section 44 of the Sale of Goods Act, 1930 expressly states that when a seller is ready and willing to deliver goods and requests the buyer to take delivery, and the buyer neglects or refuses to lift them within a reasonable time, the buyer is liable for any loss occasioned by such refusal and for a reasonable charge for the care and custody of the goods. Serving a formal Ready-for-Dispatch intimation followed by a Section 44 legal notice converts wasted warehouse racking space into a quantified, court-recoverable monthly storage rent claim.",
  },
  {
    q: "Can a corrugated box or flexible pouch manufacturer claim 100% value for unlifted custom-printed stock?",
    a: "Yes. Because custom-printed laminate rolls, stand-up pouches, mono-cartons, and embossed PET bottles carry the buyer's trademark, FSSAI license, and SKU barcode, they cannot legally be resold in the open market without infringing Section 29 of the Trade Marks Act, 1999. Under Sections 23 and 55 of the Sale of Goods Act read with Section 73 of the Indian Contract Act, the buyer is liable for 100% of the contract price plus Section 44 storage rent, less only the nominal scrap/pulping realization.",
  },
  {
    q: "Why must the notice give a 15-day lift deadline before shredding or scrapping abandoned branded stock?",
    a: "Destroying unlifted branded inventory without prior written notice exposes a converter to counter-allegations of unauthorized disposal or failure to prove readiness to deliver. A formal 15-day notice to lift—stating clearly that failing payment and dispatch clearance, the stock will be videographed and shredded through an authorized recycler strictly to prevent trademark diversion and mitigate godown rent—establishes clean legal mitigation before Commercial Courts and MSEFC tribunals.",
  },
  {
    q: "Can we exercise a lien over rotogravure cylinders, flexo plates, cutting dies, or blow-moulds for unpaid invoices?",
    a: "Yes, where your quotation, Purchase Order terms, or cylinder development invoice includes a contractual general-lien clause or retains tooling custody until full ledger settlement. Invoking Contract Act Sections 170–171 and unpaid seller rights under Sale of Goods Act Section 47 inside the legal notice prevents the brand from shifting production to a rival converter while leaving your invoice ledger unpaid.",
  },
  {
    q: "How does Income Tax Section 43B(h) accelerate settlement from FMCG, pharma, and retail buyers?",
    a: "If your packaging, printing, or paper-conversion unit holds a valid Micro or Small Udyam Registration, Section 43B(h) of the Income-tax Act disallows the buyer from deducting your unpaid invoices as business expenditure in their tax audit (Form 3CD Clause 22) if overdue past 15/45 days across financial year-end. Citing Section 43B(h) alongside MSMED Section 16 (3x RBI compound interest) puts immediate pressure on the buyer's CFO and statutory auditor.",
  },
  {
    q: "Can kraft paper and duplex board mills use this template for overdue reel ledgers and post-slitting disputes?",
    a: "Yes. Select the 'Paper Mill / Reels' preset in the interactive workspace above. It pairs your overdue reel GST invoices and E-Way Bills with Mill Test Certificate (MTC) specs, cites Section 42 of the Sale of Goods Act and paper trade custom barring quality claims once reels are slit or printed, and enforces Section 44/47 rights over unlifted custom-deckle reels.",
  },
];

export default function PackagingUnliftedStockNoticePage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: EXACT_DESCRIPTION,
    url: CANONICAL_URL,
    datePublished: "2026-11-19",
    dateModified: "2026-11-19",
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

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: EXACT_TITLE,
    headline: EXACT_H1,
    description: EXACT_DESCRIPTION,
    url: CANONICAL_URL,
    inLanguage: "en-IN",
    learningResourceType: "Commercial Legal Notice Template",
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
    },
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
        name: "Packaging, Printing & Paper Mill Recovery",
        item: `${SITE_URL}/industries/packaging-printing-paper-mill-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Packaging Unlifted Stock & Invoice Legal Notice Template",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
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
            <span>IND-22 P1 Template Workspace</span>
            <span>&bull;</span>
            <span>Sale of Goods s.44 &amp; s.55 + Cylinder Lien + Section 43B(h)</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40-60 words + Parent Hub link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Summary
            </span>
            Part of our{" "}
            <Link
              href="/industries/packaging-printing-paper-mill-recovery"
              className="text-red-300 underline underline-offset-2 hover:text-white font-semibold"
            >
              Packaging, Corrugated Box, Printing &amp; Paper Mill Recovery Hub
            </Link>
            , this ready-to-use notice workspace combines{" "}
            <strong className="text-white">overdue GST invoice &amp; E-Way demands</strong> with a{" "}
            <strong className="text-white">15-day notice to lift custom-printed WIP/FG stock</strong>, invoking{" "}
            <strong className="text-white">Sale of Goods Act s.44 godown rent</strong>,{" "}
            <strong className="text-white">cylinder/mould lien</strong>, and{" "}
            <strong className="text-white">MSMED s.16 / s.43B(h)</strong>.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <span className="block text-lg sm:text-xl font-black text-red-400">Section 44</span>
              <span className="block text-[10px] sm:text-xs text-slate-400">
                Sale of Goods Monthly Godown Storage Rent
              </span>
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-black text-amber-400">15-Day</span>
              <span className="block text-[10px] sm:text-xs text-slate-400">
                Final Window to Lift or Witnessed Shredding
              </span>
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-black text-emerald-400">s.170–171</span>
              <span className="block text-[10px] sm:text-xs text-slate-400">
                Cylinder, Flexo Plate, Die &amp; Blow-Mould Lien
              </span>
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-black text-slate-100">3x RBI + 43B(h)</span>
              <span className="block text-[10px] sm:text-xs text-slate-400">
                MSMED s.16 Compound Interest &amp; Tax Trigger
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "Packaging, Printing & Paper Mill Recovery",
              href: "/industries/packaging-printing-paper-mill-recovery",
            },
            {
              label: "Packaging Unlifted Stock & Invoice Notice",
              href: PAGE_PATH,
            },
          ]}
        />

        <div className="mt-6 flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <PackagingNoticeTOC />

          <main className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-notice-overview"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28"
            >
              <div className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-3">
                Zero-Salvage Packaging &amp; Godown Demurrage Notice
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                Why Standard Payment Letters Fail on Unlifted Branded Packaging
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Corrugated box factories, flexible laminate converters, rigid PET/HDPE moulders, commercial offset printers, and paper mills face a unique balance-sheet trap that generic trade creditors never encounter. When an FMCG, pharma, or D2C brand alters FSSAI mandatory declarations, pivots SKU artwork, or slows seasonal dispatches, it leaves <strong className="text-slate-900">already-dispatched invoices unpaid</strong> while simultaneously abandoning <strong className="text-slate-900">tons of custom-printed WIP/FG stock</strong> on your warehouse floor.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                A standard invoice reminder fails because it ignores three high-leverage statutory remedies built specifically for bespoke manufacturing: (1) <strong className="text-slate-900">Section 44 of the Sale of Goods Act, 1930</strong>—which imposes statutory monthly godown holding rent and care charges once you issue Ready-for-Dispatch intimation; (2) a <strong className="text-slate-900">15-day Lift-or-Scrap ultimatum</strong> protecting you under Trade Marks Act s.29 while locking in full Section 55 contract price recovery; and (3) a formal <strong className="text-slate-900">Rotogravure Cylinder, Flexo Plate, Die &amp; Blow-Mould Lien</strong> stopping the buyer from moving production to a cheaper rival.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pair this workspace with our detailed playbooks on{" "}
                <Link
                  href="/custom-printed-flexible-packaging-pouches-cartons-unlifted-stock-recovery"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  custom-printed flexible pouches &amp; unlifted stock recovery
                </Link>
                ,{" "}
                <Link
                  href="/corrugated-box-carton-manufacturer-bursting-strength-gsm-dispute-recovery"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  corrugated box BF/GSM debit note defence
                </Link>
                , and{" "}
                <Link
                  href="/kraft-paper-duplex-board-mill-dealer-converter-credit-recovery"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  kraft &amp; duplex paper mill overdue reel recovery
                </Link>
                .
              </p>
            </section>

            {/* Section 2: Interactive Workspace */}
            <section id="heading-notice-workspace" className="scroll-mt-28">
              <PackagingNoticeWorkspace />
            </section>

            {/* Section 3: Ready-to-Attach Schedules */}
            <section
              id="heading-ready-schedules"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28 space-y-8"
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                  Ready-to-Attach Invoice, E-Way, WIP/FG &amp; Cylinder Schedules
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Commercial Courts, MSEFC Facilitation Councils, and NCLT benches reject vague lump-sum claims. Attach these three itemized schedules (<strong className="text-slate-900">Annexures A, B &amp; C</strong>) directly to your advocate notice to eliminate &ldquo;pre-existing dispute&rdquo; excuses and substantiate exact Section 44 storage rent math.
                </p>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3">
                  Annexure A: Overdue Dispatched GST Invoice &amp; E-Way Bill Ledger
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 font-bold">Invoice No. &amp; Date</th>
                        <th className="p-3 font-bold">E-Way Bill / LR Ref</th>
                        <th className="p-3 font-bold">Product Spec (BF/GSM/Ply)</th>
                        <th className="p-3 font-bold">Due Date</th>
                        <th className="p-3 font-bold">Principal Overdue</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3 font-semibold text-slate-900">AFP/26-27/0284 (04 Jun)</td>
                        <td className="p-3 text-slate-700">EWB 241890441209 / LR-7741</td>
                        <td className="p-3 text-slate-700">3-Layer PET/Met-PET/Poly Rolls</td>
                        <td className="p-3 text-slate-700">04 Jul 2026</td>
                        <td className="p-3 font-bold text-slate-900">&#8377;7,40,000</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3 font-semibold text-slate-900">SBC/26-27/1104 (19 Jul)</td>
                        <td className="p-3 text-slate-700">EWB 161099442110 / Gate Entry</td>
                        <td className="p-3 text-slate-700">5-Ply 22BF 150GSM Master Cartons</td>
                        <td className="p-3 text-slate-700">02 Sep 2026</td>
                        <td className="p-3 font-bold text-slate-900">&#8377;6,80,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-900">GKM/26-27/1901 (22 Aug)</td>
                        <td className="p-3 text-slate-700">EWB 391882011245 / MTC-882</td>
                        <td className="p-3 text-slate-700">180GSM 20BF Kraft Paper Reels</td>
                        <td className="p-3 text-slate-700">21 Sep 2026</td>
                        <td className="p-3 font-bold text-slate-900">&#8377;11,40,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3">
                  Annexure B &amp; C: Custom-Branded Unlifted WIP/FG Stock, s.44 Rent &amp; Tooling Lien
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 font-bold">Stock / Tooling Category</th>
                        <th className="p-3 font-bold">PO / Artwork Approval Ref</th>
                        <th className="p-3 font-bold">Ready-to-Dispatch Date</th>
                        <th className="p-3 font-bold">s.44 Monthly Godown Rent</th>
                        <th className="p-3 font-bold">Claim / Lien Exposure</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3 font-semibold text-slate-900">3,400 kg Branded Pouches (FG)</td>
                        <td className="p-3 text-slate-700">PO/NCF/419 + Shade Card</td>
                        <td className="p-3 text-slate-700">28 Jun 2026 (4 Mos Held)</td>
                        <td className="p-3 text-amber-700 font-semibold">&#8377;45,000 / mo</td>
                        <td className="p-3 font-bold text-[#DC2626]">&#8377;9,52,000 + &#8377;1.80L Rent</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3 font-semibold text-slate-900">18,500 Printed 5-Ply Cartons</td>
                        <td className="p-3 text-slate-700">PO/VHA/1088 + Flexo Proof</td>
                        <td className="p-3 text-slate-700">18 Aug 2026 (3 Mos Held)</td>
                        <td className="p-3 text-amber-700 font-semibold">&#8377;38,000 / mo</td>
                        <td className="p-3 font-bold text-[#DC2626]">&#8377;6,47,500 + &#8377;1.14L Rent</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-900">8 Copper Cylinders / 4-Cav Mould</td>
                        <td className="p-3 text-slate-700">Cylinder Vault / FAI Log</td>
                        <td className="p-3 text-slate-700">Held Under General Lien</td>
                        <td className="p-3 text-slate-700">Vault Custody Fee</td>
                        <td className="p-3 font-bold text-emerald-700">Lien Freeze Until 100% Paid</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 4: 5 Mandatory Statutory Clauses */}
            <section
              id="heading-statutory-clauses"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                5 Core Clauses: Sale of Goods s.44, s.55, Lien &amp; Section 43B(h)
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-5">
                Every clause embedded in the live builder above directly neutralizes a classic FMCG or corporate-procurement delaying tactic. Before locking your interest claim, verify exact 3x RBI Bank Rate monthly compounding using our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>{" "}
                and review the statutory deduction mechanics in our{" "}
                <Link
                  href="/law/section-43bh-msme-payment-rule"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  Section 43B(h) MSME Payment Rule Guide
                </Link>
                .
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    badge: "GAP-FILLING HOOK",
                    title: "1. Sale of Goods Act s.44 — Godown Storage Rent & Care Charges",
                    desc: "Explicitly invokes Section 44 after Ready-for-Dispatch intimation: when a buyer neglects or refuses to lift bespoke pouches, cartons, or reels within a reasonable window, the seller is statutorily entitled to recover reasonable monthly warehouse rent, insurance, and care costs alongside principal loss.",
                  },
                  {
                    badge: "ZERO-SALVAGE PRICE",
                    title: "2. Sale of Goods s.23 & s.55 + Contract Act s.73 Full Price",
                    desc: "Establishes unconditional appropriation of brand-printed stock manufactured strictly per signed artwork proofs. Because Trade Marks Act s.29 prohibits reselling branded packaging to third parties, buyer liability equals 100% contract price minus nominal scrap realization.",
                  },
                  {
                    badge: "TOOLING LEVERAGE",
                    title: "3. Rotogravure Cylinder, Flexo Plate, Die & Blow-Mould Lien",
                    desc: "Invokes Contract Act ss.170–171 contractual general lien and unpaid seller lien (s.47) to lawfully withhold buyer-specific engraved cylinders, rotary dies, or CNC blow-moulds until both overdue invoices and unlifted stock balances are settled in full.",
                  },
                  {
                    badge: "DEEMED ACCEPTANCE",
                    title: "4. Sale of Goods Act s.42 — Barring Late BF, GSM & Shade Cuts",
                    desc: "Defeats post-facto 10%–15% debit notes alleging low Bursting Factor (BF), monsoon moisture, or post-slitting reel variations raised weeks after the buyer already packed, slit, printed, or dispatched goods without a contemporaneous joint lab test.",
                  },
                ].map((clause) => (
                  <div
                    key={clause.title}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 border-l-4 border-l-[#DC2626]"
                  >
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                      {clause.badge}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">{clause.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{clause.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 sm:p-5 rounded-xl bg-red-50 border border-red-200">
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  5. MSMED Act s.15–18 (3x RBI Compound Interest) &amp; Income Tax Section 43B(h) Disallowance
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Places the buyer&apos;s CFO and statutory auditor on direct notice that unpaid Micro/Small packaging dues trigger mandatory monthly compound interest at 3x the RBI Bank Rate (overriding lower PO credit terms under MSMED s.24) plus full corporate tax expense disallowance under Section 43B(h) if unpaid across March 31. For standalone MSME ledger demands without unlifted stock, see our{" "}
                  <Link
                    href="/templates/msme-delayed-payment-demand-notice"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    MSME Delayed Payment Demand Notice Template
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 5: 15-Day Lift-or-Scrap Protocol */}
            <section
              id="heading-lift-or-scrap"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                15-Day Lift-or-Scrap Protocol &amp; Trademark-Safe Shredding Notice
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-5">
                Never abruptly pulp or sell rejected/unlifted brand-printed pouches or cartons to local kabadiwalas—if even one branded pouch enters the grey market, the defaulting buyer will weaponize a counter-notice under Section 29 of the Trade Marks Act, 1999 to stall your recovery suit. Follow this court-tested 4-step mitigation SOP embedded in our notice:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6">
                {[
                  {
                    step: "STEP 01",
                    title: "Ready-for-Dispatch Log",
                    text: "Send timestamped email + WhatsApp photos of palletized FG/WIP stock in marked bays, starting the s.44 storage rent clock.",
                  },
                  {
                    step: "STEP 02",
                    title: "Serve 15-Day Fact-Verified Notice",
                    text: "Serve composite notice demanding invoice clearance, s.44 rent, and physical lifting within 15 non-extendable days.",
                  },
                  {
                    step: "STEP 03",
                    title: "Videographed Shredding",
                    text: "Post Day 15, shred/pulp branded stock under continuous video + weighbridge slip via an authorized recycler (zero resale).",
                  },
                  {
                    step: "STEP 04",
                    title: "Credit Scrap & File Claim",
                    text: "Credit net scrap weight value (e.g., ₹8–₹18/kg) to buyer ledger and file MSEFC / Commercial Suit for the net shortfall.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 flex flex-col justify-between"
                  >
                    <div>
                      <span className="inline-block text-[10px] font-black tracking-widest text-red-400 mb-1">
                        {item.step}
                      </span>
                      <h3 className="text-sm font-bold text-white mb-1.5">{item.title}</h3>
                      <p className="text-xs text-slate-300 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed">
                <strong className="text-amber-900">Drafting Safeguard:</strong> Keep raw-material supplier invoices (BOPP/PET film, kraft reels, ink, adhesive) and machine production run logs attached to your internal file. Even if a buyer cancels mid-production (WIP stage), Section 73 Contract Act + Sale of Goods s.56 entitles you to recover full raw-material procurement, cylinder engraving, and conversion costs incurred before written cancellation.
              </div>
            </section>

            {/* Section 6: Packaging Evidence Dossier */}
            <section
              id="heading-evidence-dossier"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                Packaging Evidence Dossier &amp; BSA 2023 s.63 Electronic Proof
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-5">
                Before instructing your advocate to serve the final demand, assemble these six high-admissibility exhibits. Because commercial procurement relies heavily on email PDFs, WhatsApp shade approvals, and GST portal logs, preserve digital records with a <strong className="text-slate-900">Bharatiya Sakshya Adhiniyam (BSA) 2023 Section 63</strong> certificate:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "1. Signed PO & Artwork / Shade-Card Approval",
                    detail:
                      "PDF Purchase Order, Pantone/chromalin proof sign-off, or WhatsApp/email confirmation ('Artwork approved for cylinder engraving / printing').",
                  },
                  {
                    title: "2. GST Tax Invoices, E-Way Bills & GSTR-1/2B Trail",
                    detail:
                      "Dispatched tax invoices with Part-B vehicle E-Way Bills, transporter LRs, gate-entry stamps, and buyer's GSTR-2B ITC claim trail (estoppel).",
                  },
                  {
                    title: "3. Ready-for-Dispatch Intimation & Bay Photos",
                    detail:
                      "Dated email/WhatsApp notifying production completion + geo-tagged photos of stacked pouches, cartons, or custom-deckle reels occupying racks.",
                  },
                  {
                    title: "4. Lab COA / MTC & Pre-Dispatch QC Reports",
                    detail:
                      "Bursting Factor (BF), GSM, ECT, Cobb60, drop-test, or neck-finish tolerance logs proving specification compliance prior to dispatch.",
                  },
                  {
                    title: "5. Cylinder, Die & Blow-Mould Custody Ledger",
                    detail:
                      "Engraver/mould-maker invoices, development contribution billing, vault serial tags, and quotation terms carrying the contractual general-lien clause.",
                  },
                  {
                    title: "6. Active Udyam Certificate & Ledger Reconciliation",
                    detail:
                      "Micro/Small Manufacturing Udyam certificate dated prior to contract execution (essential for MSMED s.16 & s.43B(h)) plus running account ledger.",
                  },
                ].map((doc) => (
                  <div
                    key={doc.title}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      &#10003;
                    </span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">{doc.title}</h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{doc.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Multi-Channel Dispatch Matrix */}
            <section
              id="heading-dispatch-matrix"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                Multi-Channel Dispatch Matrix: Email, WhatsApp &amp; Speed Post RPAD
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                To trigger deemed service under <strong className="text-slate-900">Section 27 of the General Clauses Act, 1897</strong> and ensure the buyer&apos;s Finance &amp; Legal heads cannot claim &ldquo;procurement never forwarded the letter,&rdquo; serve the signed advocate notice simultaneously across all three channels:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 font-bold">Dispatch Channel</th>
                      <th className="p-3 font-bold">Target Recipients</th>
                      <th className="p-3 font-bold">Evidentiary Proof Preserved</th>
                      <th className="p-3 font-bold">Strategic Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">India Post Speed Post / RPAD</td>
                      <td className="p-3 text-slate-700">MCA Registered Office + Factory/Plant Unit</td>
                      <td className="p-3 text-slate-700">Original Postal Receipt + India Post Tracking PDF</td>
                      <td className="p-3 text-slate-700">Mandatory court proof under General Clauses s.27</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900">Official Corporate Email</td>
                      <td className="p-3 text-slate-700">Directors, CFO, AP Desk &amp; Procurement Head</td>
                      <td className="p-3 text-slate-700">EML Headers + PDF Attachment + BSA s.63 Cert</td>
                      <td className="p-3 text-slate-700">Immediate audit/s.43B(h) escalation to Finance</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Verified WhatsApp PDF</td>
                      <td className="p-3 text-slate-700">Buyer MD / Purchase Manager (PO Signatory)</td>
                      <td className="p-3 text-slate-700">Double-Tick Delivery Screenshot + Timestamp</td>
                      <td className="p-3 text-slate-700">Same-day response &amp; dispatch-schedule negotiation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 8: Dual-Track B2B Conversion CTA */}
            <section id="heading-dual-cta" className="scroll-mt-28">
              <div className="mb-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Send a Fact-Verified Packaging Notice or Batch 43B(h) Drive
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Test LegalRecovery.in on a single stuck packaging account for &#8377;999, or onboard your entire corrugated, flexible, rigid, or paper-mill debtor ledger via CSV.
                </p>
              </div>
              <PackagingNoticeCTA />
            </section>

            {/* Section 9: Related Packaging Guides, Calculator & Templates */}
            <section
              id="heading-related-links"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                Packaging Recovery Hub, MSME Calculator &amp; Sibling Playbooks
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    tag: "IND-22 PILLAR HUB",
                    title: "Packaging, Corrugated Box, Printing & Paper Mill Recovery",
                    href: "/industries/packaging-printing-paper-mill-recovery",
                    desc: "Complete multi-track creditor hub covering cartons, flexible laminates, cylinders, blow-moulds, offset POSM & mills.",
                  },
                  {
                    tag: "SIBLING PLAYBOOK",
                    title: "Unlifted Custom-Printed Pouches & Cartons Recovery Guide",
                    href: "/custom-printed-flexible-packaging-pouches-cartons-unlifted-stock-recovery",
                    desc: "Deep-dive SOP for recovering 100% price + cylinders when brands alter FSSAI/SKU artwork mid-order.",
                  },
                  {
                    tag: "SIBLING PLAYBOOK",
                    title: "Corrugated Box BF, GSM & Monsoon Moisture Dispute Defence",
                    href: "/corrugated-box-carton-manufacturer-bursting-strength-gsm-dispute-recovery",
                    desc: "How carton plants defeat unilateral 15% quality debit notes under Sale of Goods Act s.42 & MSMED s.15–18.",
                  },
                  {
                    tag: "SIBLING PLAYBOOK",
                    title: "Kraft Paper & Duplex Board Mill Overdue Reel Recovery",
                    href: "/kraft-paper-duplex-board-mill-dealer-converter-credit-recovery",
                    desc: "Enforce the post-slitting reel bar, NI Act s.138, and IBC s.8 Form 3/4 against defaulting converters & dealers.",
                  },
                  {
                    tag: "INTERACTIVE TOOL",
                    title: "MSME Delayed Payment Interest Calculator (3x RBI Rate)",
                    href: "/tools/msme-delayed-payment-interest-calculator",
                    desc: "Compute exact monthly compounded MSMED Section 16 interest to attach to your packaging demand notice.",
                  },
                  {
                    tag: "STATUTE & TEMPLATE",
                    title: "Section 43B(h) MSME Payment Rule & Demand Notice Format",
                    href: "/law/section-43bh-msme-payment-rule",
                    desc: "Use Income Tax year-end disallowance rules alongside rigid-plastic mould lien and commercial offset print guides.",
                  },
                ].map((card) => (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="group block p-4 rounded-xl bg-slate-50 hover:bg-red-50/40 border border-slate-200 hover:border-red-200 transition-all"
                  >
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                      {card.tag}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{card.desc}</p>
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-600">
                Also explore:{" "}
                <Link
                  href="/rigid-plastic-pet-preform-hdpe-drum-glass-bottle-mould-recovery"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  PET/HDPE Rigid Plastic &amp; Blow-Mould Lien Recovery
                </Link>
                ,{" "}
                <Link
                  href="/commercial-offset-printer-posm-retail-branding-corporate-gifting-recovery"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  Commercial Offset Printer &amp; POSM Recovery
                </Link>
                , and{" "}
                <Link
                  href="/wooden-pallet-industrial-crating-export-lashing-vendor-recovery"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  ISPM-15 Wooden Pallet &amp; Export Crating Recovery
                </Link>
                .
              </p>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-5">
                FAQs: Packaging Unlifted Stock, Godown Rent &amp; Cylinder Lien Notices
              </h2>
              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group rounded-xl border border-slate-200 bg-slate-50/70 open:bg-white open:border-red-200 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-bold text-xs sm:text-sm text-slate-900">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] text-lg font-bold shrink-0 group-open:rotate-45 transition-transform">
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

            {/* Section 11: Authoritative Primary Sources */}
            <section
              id="heading-sources"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                Primary Statutory Authorities &amp; Packaging Trade References
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] underline underline-offset-2 transition-colors"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-5 pt-4 border-t border-slate-200 text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                <strong>Editorial &amp; Legal Attribution:</strong> Prepared and reviewed for B2B commercial creditors by{" "}
                <strong className="text-slate-700">Anuj Anand Malik</strong> (Advocate &amp; Founder, AMA Legal Solutions) for LegalRecovery.in. Statutory templates are provided for commercial workflow drafting and should be vetted against your exact Purchase Order, artwork sign-offs, and arbitration/jurisdiction clauses prior to formal court filing.
              </p>
            </section>
          </main>
        </div>
      </div>

      <RelatedRecoveryGuides />
    </div>
  );
}
