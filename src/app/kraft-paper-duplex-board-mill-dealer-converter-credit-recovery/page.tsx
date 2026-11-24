import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import PaperMillTableOfContents from "./PaperMillTableOfContents";
import PaperMillScenarioTabs from "./PaperMillScenarioTabs";
import PaperMillCTA from "./PaperMillCTA";

export const revalidate = 86400;

const PAGE_URL = "/kraft-paper-duplex-board-mill-dealer-converter-credit-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

// Exact PDF/JSON H1 (129 chars) — kept verbatim in BOTH <h1> and ARTICLE_SCHEMA.headline
const EXACT_H1 =
  "Receivable Recovery for Kraft, Duplex & Writing-Paper Mills and Paper Merchants: Defeating Post-Slitting/Printing Reel Complaints";

// 55 chars — tightened from 61ch PDF draft to comply with Screaming Frog 30–60ch rule while preserving primary keyword
const META_TITLE = "Kraft Paper, Duplex Mill & Paper Merchant Debt Recovery";

// 153 chars — tightened from 169ch PDF draft to comply with Screaming Frog 120–155ch rule while keeping statutory facts
const META_DESCRIPTION =
  "Once a printer or corrugator slits or mounts a paper reel without pre-run GSM/Cobb objection, rejection is barred. Fast-track s.138, Order 37 & IBC dues.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "kraft paper duplex board mill and paper trader credit recovery",
    "corrugator printer defaulted on kraft duplex reel bills",
    "chawri bazar mumbai paper market merchant broker default",
    "gsm cobb shade reel complaint raised after slitting printing",
    "ibc section 8 and section 138 paper mill receivables",
    "wastepaper occ supplier unpaid paper mill bill",
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
      "The Sale of Goods Act, 1930 (Sections 26, 41, 42 & 55 — Ex-Mill Risk Transfer, Deemed Acceptance Upon Slitting/Printing & Action for Price)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Sections 138, 139, 141 & 143A — Dishonoured PDC/Security Cheques & 20% Interim Deposit)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "Insolvency and Bankruptcy Code (IBC), 2016 (Sections 4, 8 & 9 — ₹1 Crore Operational Creditor Form 3/4 Demand Notice & NCLT Admission)",
    url: "https://ibbi.gov.in/",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXVII Summary Suits & Order XXXVIII Rule 5 Attachment Before Judgment)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "MSMED Act, 2006 (Sections 15, 16, 18 & 24 — 15/45-Day Statutory Ceiling & 3x RBI Monthly Compound Interest) & Samadhaan Portal",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title:
      "Income Tax Act, 1961 — Section 43B(h) (Corporate Expense Disallowance for Delayed Micro & Small Supplier Payments)",
    url: "https://www.incometaxindia.gov.in/pages/acts/income-tax-act.aspx",
  },
  {
    title:
      "Bureau of Indian Standards (BIS) — IS 1060 Paper & Board Test Methods (GSM, Cobb60 Sizing, Moisture, Burst Factor Conditioning)",
    url: "https://www.bis.gov.in/",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 — Section 63 (Admissibility of SAP/Tally Ledgers, Weighbridge Logs, Reel Barcodes & WhatsApp Approvals)",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
];

const FAQS = [
  {
    q: "Can a corrugator or offset printer reject a kraft or duplex paper consignment after slitting, sheeting, or printing the reels?",
    a: "No. Both entrenched Indian paper trade custom—universally printed on mill invoices ('No quality claim entertained once reel is cut, slit, rewound, or mounted on machine')—and Section 42 of the Sale of Goods Act, 1930 legally bar post-consumption rejection. Once a buyer alters the physical state of a paper reel by mounting it on a corrugator, duplex sheeter, or offset press without raising a pre-run written objection, the buyer is deemed to have irrevocably accepted the consignment and remains liable for 100% of the invoice value.",
  },
  {
    q: "How do paper mills defeat sham GSM, Cobb60, or top-liner shade complaints raised only after receiving an IBC Section 8 demand notice?",
    a: "Under the Supreme Court's landmark ruling in Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd. (2017), a corporate debtor can resist NCLT Section 9 admission only by proving a genuine 'pre-existing dispute' documented prior to the Section 8 notice. A moonshine quality email alleging uneven GSM, high Cobb value, or shade drift—sent weeks after consuming the reels or in reply to Form 3—is rejected by NCLT benches, especially when contradicted by clean E-Way delivery receipts, GSTR-2B ITC availment, and Mill QC Lab certificates.",
  },
  {
    q: "Are undated security cheques taken from Chawri Bazar or Mumbai paper merchants enforceable under NI Act Section 138?",
    a: "Yes. In Sripati Singh v. State of Jharkhand (2021), the Supreme Court settled that a cheque initially issued as 'security' against a running credit account matures into a legally enforceable debt instrument under Section 138 of the Negotiable Instruments Act, 1881 the moment the underlying invoices fall due and remain unpaid. Mills can prosecute both the firm and its active partners/directors under Sections 138 and 141 and seek 20% interim compensation under Section 143A.",
  },
  {
    q: "A Chawri Bazar or Mumbai wholesale paper merchant claims its downstream printers haven't paid—can the mill still recover directly from the merchant?",
    a: "Yes. When tax invoices are raised on the merchant's GSTIN and the merchant avails GSTR-2B Input Tax Credit, the transaction is strictly principal-to-principal. Downstream printer default is legally irrelevant to the merchant's payment obligation. Where an indenting broker or commission agent executed a del credere guarantee or trade association chitti, Sections 126–128 of the Indian Contract Act, 1872 allow the mill to recover jointly from both the buyer and the guaranteeing broker.",
  },
  {
    q: "What if a defaulting kraft or duplex paper mill owes ₹30 lakh–₹1.5 Cr to a domestic or imported wastepaper (OCC / NDLKC) supplier?",
    a: "Wastepaper (OCC, DSOCC, NDLKC, SOP) and agro-pulp suppliers enjoy identical creditor protections. Once baled wastepaper passes the mill's weighbridge (dharamkanta), absorbs any gate-signed moisture/outthrow deduction, and enters the hydrapulper, Section 42 of the Sale of Goods Act bars arbitrary retroactive deductions. Udyam-registered wastepaper recyclers can enforce 45-day payment and 3x RBI compound interest via MSEFC and Section 43B(h), while exposures >= ₹1 Crore qualify for IBC Section 8 Form 3 insolvency notices.",
  },
  {
    q: "Should a paper mill file an Order XXXVII Summary Suit, an MSEFC Samadhaan claim, or an IBC Section 8 notice?",
    a: "Select by ticket size, buyer entity type, and Udyam status: (1) For corporate buyers owing >= ₹1 Crore with clean ledgers and zero pre-existing disputes, serve an IBC Section 8 Form 3 notice alongside NI s.138 prosecution. (2) For Udyam Micro/Small paper mills or wastepaper processors (any ticket size), trigger Section 43B(h) tax-disallowance notices and MSEFC Samadhaan for 3x RBI monthly compound interest. (3) For non-MSME mills or wholesale merchants facing ₹10 lakh–₹99 lakh defaults, pair NI Act s.138 with a Commercial Court Order XXXVII Summary Suit (plus Order XXXVIII Rule 5 attachment if godown stock is being siphoned).",
  },
  {
    q: "What documents must a paper mill CFO archive under BSA 2023 Section 63 to win fast-track recovery?",
    a: "Preserve six core records backed by a Section 63 Bharatiya Sakshya Adhiniyam (BSA) electronic certificate: (1) GST Tax Invoices printing the post-slitting no-claim clause and interest rate; (2) Reel-Wise Packing Lists with unique reel barcodes and core weights; (3) Automated Weighbridge (Dharamkanta) Slips & E-Way Bills / signed LRs; (4) Mill QCS/Lab Test Reports (GSM, BF, Cobb60, RCT, Moisture %, Shade Delta-E); (5) Confirmed running ledger & GSTR-1/2B ITC proof; and (6) Original bounced cheques with bank return memos.",
  },
];

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
  about: [
    "Kraft Paper Mill Receivable Recovery",
    "Duplex Board Mill Credit Recovery",
    "Chawri Bazar Paper Merchant Default",
    "Sale of Goods Act Section 42",
    "IBC Section 8 Form 3 Notice",
    "NI Act Section 138 Cheque Bounce",
  ],
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Kraft, Duplex & Writing-Paper Mills Recover Overdue Receivables & Defeat Post-Slitting Complaints",
  description:
    "5-stage legal recovery SOP for paper mills, Chawri Bazar/Mumbai paper merchants, and OCC wastepaper suppliers using Sale of Goods Act s.42, NI Act s.138, Order XXXVII CPC, and IBC Section 8.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Lock Reel-Barcode, Mill Lab MTC & Gate Weighbridge Evidence",
      text: "Compile GST tax invoices bearing the no-post-slitting claim clause, Reel-Wise Packing Lists, QCS lab readings (GSM, BF, Cobb60, moisture), dharamkanta slips, and signed E-Way/LR receipts.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Rebut Post-Slitting Quality Pretexts Within 48 Hours",
      text: "Issue a written rejection citing Indian paper trade custom and Sale of Goods Act s.42, restricting joint inspection strictly to unopened, unslit control reels bearing intact mill core stencils.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Present Running-Account PDCs / Security Cheques Under NI Act s.138",
      text: "Deposit crystallized PDCs or security cheques (enforceable under Sripati Singh v. State of Jharkhand) and dispatch a mandatory 15-day statutory demand notice within 30 days of bank dishonour.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Deploy Ticket-Tier Escalation: IBC s.8 (>= ₹1 Cr), MSEFC / s.43B(h), or Order XXXVII",
      text: "Serve IBC Form 3/4 Demand Notice for >= ₹1 Cr corporate exposures, trigger MSMED s.15–18 & s.43B(h) for Udyam units, or file Commercial Court Order XXXVII summary suits.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Freeze Siphoned Merchant Inventory via Order XXXVIII Rule 5 Attachment",
      text: "Where a wholesale merchant is liquidating Bhiwandi or Chawri Bazar godown stock to defeat creditors, seek urgent ex-parte attachment before judgment bypassing s.12A mediation.",
    },
  ],
};

const FAQ_SCHEMA = {
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
      name: "Kraft Paper & Duplex Mill Credit Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function KraftPaperDuplexMillRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data (Article + HowTo + FAQPage + BreadcrumbList) */}
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

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-22 Paper Mill &amp; Merchant Playbook</span>
            <span className="text-red-700">&bull;</span>
            <span>Sale of Goods s.42 &middot; NI s.138 &middot; IBC s.8</span>
          </div>

          {/* Single Verbatim H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Creditor Answer Box (with inline Parent Hub Link in first 250 words) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under Indian paper trade custom and <strong>Section 42 of the Sale of Goods Act, 1930</strong>, once a corrugator or printer slits, sheets, or mounts a kraft, duplex, or writing-paper reel without pre-run written objection, quality rejection is legally barred. As part of our{" "}
            <Link
              href="/industries/packaging-printing-paper-mill-recovery"
              className="text-red-300 underline decoration-red-400/70 underline-offset-2 hover:text-white font-semibold"
            >
              Packaging, Printing &amp; Paper Mill Recovery Hub
            </Link>
            , mills and wholesale merchants can immediately enforce dues via <strong>NI Act s.138</strong>, <strong>Order XXXVII CPC</strong>, and <strong>IBC Section 8</strong>.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <div className="text-lg sm:text-2xl font-black text-slate-100">0% Bar</div>
              <div className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                No Rejection Once Reel Is Slit or Printed (s.42)
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-lg sm:text-2xl font-black text-emerald-400">10 Days</div>
              <div className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                IBC s.8 Form 3 Ultimatum (&ge; &#8377;1 Cr Dues)
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-lg sm:text-2xl font-black text-amber-400">20% Deposit</div>
              <div className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                NI Act s.143A Interim Relief on Bounced PDCs
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-lg sm:text-2xl font-black text-red-400">3x RBI Rate</div>
              <div className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                Monthly Compound Interest + s.43B(h) Tax Hit
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Packaging, Printing & Paper Mill Recovery",
                href: "/industries/packaging-printing-paper-mill-recovery",
              },
              {
                label: "Kraft, Duplex Mill & Paper Merchant Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Editorial Split */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <PaperMillTableOfContents />

          {/* Right Main Playbook Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* SECTION 1: Post-Slitting Reel Bar */}
            <section
              id="heading-post-slitting-bar"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  The Post-Slitting Reel Bar: Why Trade Custom &amp; s.42 Block Rejections
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Across India&apos;s kraft paper, coated duplex board (LWC/HWC/grey-back/white-back), and writing-printing paper supply chain, mill CFOs and wholesale paper merchants confront a recurring liquidity weapon: a corrugator, mono-carton converter, or commercial printer accepts 15 to 40 metric tonnes of mill reels against clean E-Way bills and weighbridge slips, runs those reels across high-speed corrugation or offset presses, delivers finished packaging to FMCG clients—and then raises a <strong>post-slitting or post-printing quality complaint</strong> at Day 50 to stall a ₹25 lakh–₹2 crore running ledger.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In Indian commercial jurisprudence, this tactic is dead on arrival when properly pleaded. Built as an operational spoke under the{" "}
                <Link
                  href="/industries/packaging-printing-paper-mill-recovery"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  Packaging, Corrugated Box, Printing &amp; Paper Mill Recovery Hub
                </Link>
                , a mill&apos;s credit enforcement rests on three interlocking legal locks:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                  <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-50 text-[#DC2626] border border-red-200">
                    Sale of Goods Act s.42
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    Irrevocable Acceptance by Conversion
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under <strong>Section 42</strong>, a buyer is deemed to have accepted goods when it does any act in relation to them inconsistent with the seller&apos;s ownership. Mounting a 1,200 mm mill reel onto a corrugator mill-roll stand, slitting deckle edges, sheeting duplex into 23&times;36 sheets, or running ink on offset blankets physically destroys the mill&apos;s ability to re-market the reel.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                  <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-900 text-white">
                    Indian Paper Trade Custom
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    Express Mill Invoice Bar
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Standard mill invoice covenants—backed by <strong>Section 62 of the Sale of Goods Act</strong> (usage of trade)—expressly stipulate: <em>&ldquo;No quality, GSM, shade, or weight complaint will be entertained once the reel/ream is cut, slit, rewound, or printed.&rdquo;</em> Accepting delivery and availing GSTR-2B ITC binds the buyer to this covenant.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                  <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Sale of Goods Act s.26
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    Ex-Mill Weighbridge Risk Passing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Unless a mill contracts CIF-delivered insurance, title and transit risk pass to the converter or merchant upon weighbridge weighment and LR handover at the mill gate. Monsoon tarpaulin leaks, forklift core-crushing at buyer godowns, or damp-floor moisture pickup are strictly buyer risks.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-xs sm:text-sm text-amber-900 leading-relaxed">
                <strong>Critical CFO Rule:</strong> Never issue a voluntary GST Credit Note under <strong>Section 34 of the CGST Act</strong> merely to placate a defaulting converter demanding a 10% post-slitting rebate. Issuing a credit note without written settlement payment permanently shrinks your principal claim before NCLT, Commercial Courts, and MSEFC.
              </div>
            </section>

            {/* SECTION 2: 5-Track Escalation Flowchart (SVG + Mobile Cards) */}
            <section
              id="heading-escalation-flowchart"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Paper Mill &amp; Merchant 5-Track Escalation Flowchart
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Paper mills operate on razor-thin working capital margins squeezed between cash/LC wastepaper imports, coal/biomass boiler fuel, and electricity bills. Waiting 120 days for a defaulting corrugator or Chawri Bazar merchant destroys mill cash flow. Execute this exact five-stage credit decision tree starting at <strong>Day 30–45 of invoice maturity</strong>.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block w-full overflow-x-auto rounded-2xl border border-slate-200 bg-slate-900 p-4">
                <svg
                  width="960"
                  height="430"
                  viewBox="0 0 960 430"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="5-Stage Legal Recovery Flowchart for Kraft Paper, Duplex Board Mills and Paper Merchants"
                  className="w-full h-auto"
                >
                  <rect width="960" height="430" rx="14" fill="#0F172A" />
                  <text
                    x="480"
                    y="36"
                    textAnchor="middle"
                    fill="#F8FAFC"
                    fontSize="16"
                    fontWeight="800"
                    fontFamily="sans-serif"
                  >
                    KRAFT / DUPLEX MILL &amp; PAPER MERCHANT RECEIVABLE ESCALATION TREE
                  </text>

                  {/* Stage 1 */}
                  <rect x="30" y="64" width="165" height="122" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="112" y="88" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="800">STAGE 1 · DAY 30–45</text>
                  <text x="112" y="109" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Lock Reel &amp; QC File</text>
                  <text x="112" y="130" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">Reel Packing List, MTC,</text>
                  <text x="112" y="146" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">Weighbridge, GSTR-2B</text>
                  <text x="112" y="166" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="700">Rebut Slit Claims &lt;48h</text>

                  <path d="M195 125 L220 125" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="220,120 230,125 220,130" fill="#94A3B8" />

                  {/* Stage 2 */}
                  <rect x="230" y="64" width="175" height="122" rx="10" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
                  <text x="317" y="88" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="800">STAGE 2 · DAY 45–55</text>
                  <text x="317" y="109" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Composite Notice</text>
                  <text x="317" y="130" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">s.42 Acceptance Bar +</text>
                  <text x="317" y="146" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">s.43B(h) Tax Notice +</text>
                  <text x="317" y="166" textAnchor="middle" fill="#FBBF24" fontSize="10" fontWeight="700">Email + WhatsApp + RPAD</text>

                  <path d="M405 125 L430 125" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="430,120 440,125 430,130" fill="#94A3B8" />

                  {/* Stage 3 Decision */}
                  <rect x="440" y="64" width="190" height="122" rx="10" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
                  <text x="535" y="88" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="800">STAGE 3 · PARALLEL CHECK</text>
                  <text x="535" y="109" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">PDC / Security Cheque</text>
                  <text x="535" y="130" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">Present on Ledger Due</text>
                  <text x="535" y="146" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">30d Notice -&gt; 15d Pay</text>
                  <text x="535" y="166" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="700">NI s.138 + 20% s.143A</text>

                  <path d="M630 125 L655 125" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="655,120 665,125 655,130" fill="#94A3B8" />

                  {/* Stage 4 Bifurcation */}
                  <rect x="665" y="64" width="265" height="122" rx="10" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                  <text x="797" y="88" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="800">STAGE 4 · FORUM ROUTING</text>
                  <text x="797" y="109" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Route by Exposure &amp; Entity</text>
                  <text x="797" y="130" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">&ge; &#8377;1 Cr Corp: IBC Form 3/4 + NeSL</text>
                  <text x="797" y="146" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">Udyam Micro/Small: MSEFC (3x RBI)</text>
                  <text x="797" y="166" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">Merchant/Prop: Order XXXVII Suit</text>

                  {/* Connector downward to 3 tracks */}
                  <path d="M797 186 L797 224" stroke="#94A3B8" strokeWidth="2" />
                  <path d="M165 224 L797 224" stroke="#94A3B8" strokeWidth="2" />
                  <path d="M165 224 L165 250" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="160,250 165,260 170,250" fill="#94A3B8" />
                  <path d="M480 224 L480 250" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="475,250 480,260 485,250" fill="#94A3B8" />
                  <path d="M797 224 L797 250" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="792,250 797,260 802,250" fill="#94A3B8" />

                  {/* Track A */}
                  <rect x="30" y="260" width="275" height="140" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="1.8" />
                  <text x="167" y="286" textAnchor="middle" fill="#F87171" fontSize="11.5" fontWeight="800">TRACK A · &ge; &#8377;1 CR CORPORATE</text>
                  <text x="167" y="308" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">IBC s.8 Form 3 + s.9 NCLT</text>
                  <text x="167" y="330" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">10-day statutory ultimatum; Mobilox</text>
                  <text x="167" y="346" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">blocks post-slitting sham disputes.</text>
                  <text x="167" y="374" textAnchor="middle" fill="#34D399" fontSize="10.5" fontWeight="700">Target: Pre-Admission Settlement</text>

                  {/* Track B */}
                  <rect x="342" y="260" width="275" height="140" rx="10" fill="#1E293B" stroke="#10B981" strokeWidth="1.8" />
                  <text x="480" y="286" textAnchor="middle" fill="#34D399" fontSize="11.5" fontWeight="800">TRACK B · UDYAM MILL / OCC UNIT</text>
                  <text x="480" y="308" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">MSEFC Samadhaan + s.43B(h)</text>
                  <text x="480" y="330" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">Overrides 90d credit; buyer must</text>
                  <text x="480" y="346" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">deposit 75% (s.19) to challenge award.</text>
                  <text x="480" y="374" textAnchor="middle" fill="#34D399" fontSize="10.5" fontWeight="700">Target: Principal + 3x RBI Interest</text>

                  {/* Track C */}
                  <rect x="655" y="260" width="275" height="140" rx="10" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.8" />
                  <text x="792" y="286" textAnchor="middle" fill="#FBBF24" fontSize="11.5" fontWeight="800">TRACK C · MERCHANT / SIPHONING</text>
                  <text x="792" y="308" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Order XXXVII + Order XXXVIII r.5</text>
                  <text x="792" y="330" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">Urgent interim attachment of godown</text>
                  <text x="792" y="346" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">reels/bank A/cs bypassing s.12A.</text>
                  <text x="792" y="374" textAnchor="middle" fill="#FBBF24" fontSize="10.5" fontWeight="700">Target: Asset Freeze + Decree</text>
                </svg>
              </div>

              {/* Mobile Stacked Flowchart Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  {
                    stage: "Stage 1 (Day 30–45)",
                    title: "Lock Reel Barcode, Mill MTC & Weighbridge Pack",
                    desc: "Compile GST invoices, Reel-Wise Packing List, QCS GSM/Cobb lab reports, dharamkanta slips, and rebut any post-slitting complaint in writing within 48 hours.",
                  },
                  {
                    stage: "Stage 2 (Day 45–55)",
                    title: "Serve Composite Statutory Fact-Verified Notice",
                    desc: "Cite Indian paper trade custom, Sale of Goods Act s.42, contractual 18%–24% interest, and Section 43B(h) via Email + WhatsApp + Speed Post RPAD.",
                  },
                  {
                    stage: "Stage 3 (Parallel Trigger)",
                    title: "Enforce Running-Account PDCs / Security Cheques",
                    desc: "Present cheques on crystallized balance; issue mandatory 15-day NI Act s.138 demand notice within 30 days of bank dishonour and move for 20% s.143A deposit.",
                  },
                  {
                    stage: "Stage 4 (Ticket-Tier Routing)",
                    title: "IBC s.8 (>= ₹1 Cr) vs MSEFC vs Order XXXVII",
                    desc: "Route >= ₹1 Cr corporate accounts to IBC Form 3/4 + NeSL; Udyam units to MSEFC 3x RBI compound interest; wholesale merchants to Commercial Court summary suits.",
                  },
                  {
                    stage: "Stage 5 (Asset Protection)",
                    title: "Order XXXVIII Rule 5 Godown & Bank Freeze",
                    desc: "Where a paper trader is clearing Chawri Bazar or Bhiwandi godown inventory at distress prices, seek urgent pre-judgment attachment bypassing s.12A mediation.",
                  },
                ].map((item) => (
                  <div
                    key={item.stage}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1"
                  >
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                      {item.stage}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 3: Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Matrix: NI s.138, IBC s.8, Order 37 &amp; MSME Rules
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unlike consumer debt, paper mill receivables span ₹5 lakh regional merchant bills to ₹5 crore+ corporate converter exposures. Match every overdue ledger to the highest-leverage statutory forum below:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statutory Remedy / Act</th>
                      <th className="p-3.5 font-bold">Best Paper-Sector Trigger</th>
                      <th className="p-3.5 font-bold">Key Statutory Timeline</th>
                      <th className="p-3.5 font-bold">Creditor Leverage &amp; Shield</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Sale of Goods Act ss.26, 41, 42 &amp; 55 + Trade Custom
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Post-slitting / post-printing GSM, Cobb, shade, or splice debit notes
                      </td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">
                        Immediate (48-hr written rebuttal)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Extinguishes right of rejection once reel is cut/mounted; locks full invoice price under s.55.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        NI Act 1881 ss.138, 139, 141 &amp; 143A
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Dishonoured converter PDCs or merchant running-account security cheques
                      </td>
                      <td className="p-3.5 font-semibold text-slate-900">
                        30d notice &rarr; 15d grace &rarr; 30d filing
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Criminal summons on Directors/Partners; up to 20% interim compensation (s.143A); <em>Sripati Singh</em> validates security cheques.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        IBC 2016 ss.4, 8 &amp; 9 (Form 3 / Form 4)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Pvt Ltd / Public Ltd converter or mill owing &ge; &#8377;1 Crore undisputed principal + interest
                      </td>
                      <td className="p-3.5 font-semibold text-emerald-700">
                        10-day statutory reply ultimatum
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Threat of board suspension &amp; CIRP admission; <em>Mobilox</em> blocks belated post-slitting moonshine disputes.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        CPC Order XXXVII &amp; Order XXXVIII Rule 5
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Wholesale paper merchants (Chawri Bazar / Mumbai) or non-MSME mills (&lt; &#8377;1 Cr)
                      </td>
                      <td className="p-3.5 font-semibold text-slate-900">
                        10-day appearance window for defendant
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Summary decree without full trial unless triable defense shown; urgent godown/bank attachment bypasses s.12A (<em>Yamini Manohar</em>).
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        MSMED Act ss.15–19 &amp; Income Tax s.43B(h)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Udyam Micro/Small kraft mills, duplex converters, &amp; OCC wastepaper processors
                      </td>
                      <td className="p-3.5 font-semibold text-emerald-700">
                        15d objection / 45d max payment cap
                      </td>
                      <td className="p-3.5 text-slate-700">
                        3x RBI monthly compound interest, 75% pre-deposit to appeal award (s.19), &amp; buyer corporate tax disallowance.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Indian Contract Act ss.126–128 &amp; 230
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Indenting agents &amp; del credere brokers guaranteeing wholesale paper trades
                      </td>
                      <td className="p-3.5 font-semibold text-slate-900">
                        Co-extensive liability on buyer default
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Joins guarantor/broker alongside defaulting buyer in legal notice and commercial suit.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-playbooks"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4 Paper-Reel &amp; Wholesale Market Default Playbooks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select the commercial failure mode matching your overdue receivable to view the debtor&apos;s exact tactic, the governing Indian statute, and the 3-step advocate execution SOP:
              </p>

              <PaperMillScenarioTabs />
            </section>

            {/* SECTION 5: Technical Rebuttal of Post-Run GSM, Cobb, Shade & Splice Pretexts */}
            <section
              id="heading-technical-rebuttal"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Defeating Post-Run GSM, Cobb, Shade &amp; Splice Complaints
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When kraft, duplex, or writing-printing paper prices soften by ₹2–₹5/kg between dispatch and payment due date, unethical buyers routinely weaponize technical jargon to force retroactive rebates. Equip your credit team and advocate with these four BIS IS 1060 / mill-engineering rebuttals:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                      1. GSM &amp; Burst Factor (BF) Variance
                    </h3>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-white">
                      BIS Tolerance
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Indian paper mill standards permit standard grammage tolerance (typically &plusmn;4% to &plusmn;5% across reel width) and require sampling across multiple unslit plies conditioned at <strong>27&deg;C &plusmn; 1&deg;C and 65% &plusmn; 2% RH</strong> under IS 1060. A buyer weighing a single scrap off-cut from a finished box or unconditioned damp sheet cannot impeach a mill&apos;s QCS cross-machine profile and MTC.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                      2. Cobb60 Sizing &amp; Moisture Pickup
                    </h3>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-white">
                      Hygroscopic Proof
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Recycled kraft and grey-back duplex reels leave the mill pop-reel at <strong>6%–8% moisture</strong> and specified Cobb60 values (e.g., 30–50 g/m&sup2; for sized kraft). Once a buyer leaves unwrapped reels on a wet Bhiwandi or factory floor during monsoon, ambient moisture degrades Ring Crush Test (RCT) and gluing tack—a post-delivery storage risk solely on the buyer under <strong>Sale of Goods Act s.26</strong>.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                      3. Top-Liner Shade / Brightness Drift
                    </h3>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-white">
                      Pre-Print Duty
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Shade variation on coated duplex (LWC/HWC) or natural-shade kraft is visually patent the moment the outer wrapper is opened—before a single sheet is cut or printed. Under <strong>Section 41 of the Sale of Goods Act</strong>, the buyer had full opportunity for pre-run visual inspection. Printing 50,000 mono-cartons and complaining afterward is legally estopped.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                      4. Reel Splices, Core Collapse &amp; Runnability
                    </h3>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-white">
                      Mill Stencil Rule
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Up to 1–2 flagged splices per reel are industry-standard across kraft and newsprint/writing mills. If genuine core crushing or winding wrinkles occur, trade custom requires stopping the run on Reel #1, photographing the intact mill stencil/reel barcode on the machine stand, and notifying the mill immediately—never running 18 reels and demanding a credit note at Day 60.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: Paper Mill Clusters, Chawri Bazar / Mumbai Merchants & OCC Suppliers */}
            <section
              id="heading-clusters-occ"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Chawri Bazar, Mumbai Merchants &amp; Wastepaper OCC Credit Risks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                India&apos;s paper manufacturing and wholesale distribution map spans distinct regional corridors—each with specialized jurisdiction, trade-association, and credit-enforcement leverage:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 p-5 space-y-2.5 bg-white">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                    West &amp; North Kraft / Duplex Mill Belts
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    Morbi, Vapi, Muzaffarnagar, Kashipur &amp; Punjab
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Cluster mills in <strong>Morbi &amp; Vapi (Gujarat)</strong>, <strong>Muzaffarnagar (UP)</strong>, <strong>Kashipur (Uttarakhand)</strong>, and <strong>Ludhiana / Barnala (Punjab)</strong> supply high-volume 16–32 BF kraft and grey-back duplex nationwide. Include an explicit <em>exclusive jurisdiction clause</em> on tax invoices (e.g., Commercial Court at Valsad/Vapi, Morbi, or Muzaffarnagar) while remembering that <strong>NI Act s.142(2)</strong> automatically grants cheque-bounce jurisdiction at the <em>mill&apos;s own home bank branch</em> where the cheque is presented for collection.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-5 space-y-2.5 bg-white">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700">
                    South Paper &amp; Printing Corridors
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    Erode, Sivakasi (TN) &amp; Rajahmundry / Telangana
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Agro-based and virgin-pulp writing/printing and packaging board mills in <strong>Erode, Karur, Sivakasi (Tamil Nadu)</strong>, <strong>Rajahmundry (AP)</strong>, and <strong>Telangana</strong> frequently supply seasonal textbook, notebook, and fireworks/carton printers. For seasonal printing credit exceeding 45 days, lock post-dated cheques backed by signed annual balance confirmations before the March–June publishing cycle closes.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-5 space-y-2.5 bg-slate-50">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700">
                    Wholesale Paper Mandis
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    Chawri Bazar (Delhi) &amp; Mumbai Paper Merchants
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Wholesale distributors in <strong>Chawri Bazar / Patparganj</strong> and <strong>Mumbai (Abdul Rehman Street / Bhiwandi godowns)</strong> operate as credit intermediaries between mills and thousands of offset/box printers. When a merchant defaults—or when a printer defaults on a merchant—never rely solely on informal market mediation while the debtor quietly empties godown pallets. Pair Delhi/Mumbai Paper Merchants&apos; Association notice with swift <strong>Order XXXVII Summary Suits</strong> and <strong>Order XXXVIII Rule 5</strong> inventory attachment.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-5 space-y-2.5 bg-slate-50">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700">
                    Upstream Raw Material Creditors
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    Wastepaper (OCC / NDLKC) &amp; Agro-Pulp Suppliers
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Domestic OCC/NDLKC aggregators and port importers supplying raw material to paper mills suffer reverse payment traps: mills pulp baled wastepaper and later impose unilateral 15% moisture/outthrow cuts. Rely on the <strong>gate-signed dharamkanta moisture slip</strong> as final acceptance under Sale of Goods Act s.42, enforce Udyam 45-day limits via <strong>MSMED s.15–18 &amp; s.43B(h)</strong>, and escalate &ge; ₹1 Cr defaults via <strong>IBC Form 3</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Worked Financial & Interest Calculation Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked Ledger: &#8377;1.28 Cr Kraft/Duplex Reel &amp; IBC s.8 Recovery
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Below is an illustrative financial breakdown for a <strong>Vapi / Kashipur Kraft &amp; Duplex Board Mill</strong> owed principal across 14 overdue reel invoices (180 days past maturity) by a Private Limited packaging converter that raised a sham post-slitting Cobb60/shade debit note of ₹16.2 lakh and bounced two running-account PDCs totalling ₹55 lakh:
              </p>

              <div className="rounded-2xl bg-slate-900 text-white p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                    Illustrative Mill Receivable &amp; Statutory Leverage Ledger
                  </span>
                  <span className="text-xs font-mono text-slate-300">
                    180 Days Overdue &middot; Corporate Buyer
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                    <span className="text-slate-300">Undisputed Invoiced Reel Principal (14 Invoices)</span>
                    <span className="font-mono font-bold text-white">&#8377;1,14,00,000</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                    <span className="text-slate-300">Disallowed Post-Slitting Debit Note (Void s.42)</span>
                    <span className="font-mono font-bold text-emerald-400">Reversed (&#8377;0 Cut)</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                    <span className="text-slate-300">Contractual Invoice Interest (24% p.a. / 180d)</span>
                    <span className="font-mono font-bold text-amber-400">&#8377;13,49,260</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                    <span className="text-slate-300">Statutory Notice &amp; NeSL Filing Costs</span>
                    <span className="font-mono font-bold text-slate-200">&#8377;50,740</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                  <div className="rounded-xl bg-emerald-950/60 border border-emerald-700/60 p-4">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                      Total Crystallized IBC Form 3 Claim
                    </span>
                    <div className="text-xl sm:text-2xl font-black text-emerald-400 mt-1">
                      &#8377;1,28,00,000
                    </div>
                    <p className="text-[11px] text-slate-300 mt-1">
                      Exceeds &#8377;1 Cr IBC s.4 floor cleanly (even on principal alone).
                    </p>
                  </div>

                  <div className="rounded-xl bg-amber-950/60 border border-amber-700/60 p-4">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-300">
                      Parallel NI s.143A Interim Deposit
                    </span>
                    <div className="text-xl sm:text-2xl font-black text-amber-400 mt-1">
                      &#8377;11,00,000
                    </div>
                    <p className="text-[11px] text-slate-300 mt-1">
                      Up to 20% of &#8377;55L bounced PDCs ordered within 60 days of plea.
                    </p>
                  </div>

                  <div className="rounded-xl bg-red-950/60 border border-red-800/60 p-4">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-red-300">
                      If Udyam Small Mill: Buyer s.43B(h) Tax Hit
                    </span>
                    <div className="text-xl sm:text-2xl font-black text-red-400 mt-1">
                      &#8377;28.69 Lakh+
                    </div>
                    <p className="text-[11px] text-slate-300 mt-1">
                      25.17% corporate tax disallowance on &#8377;1.14 Cr unpaid on March 31.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Need exact statutory monthly compound interest on your Udyam paper mill or wastepaper ledger? Run your invoice dates through our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  MSME Delayed Payment Interest Calculator (3x RBI Rate)
                </Link>{" "}
                before issuing demand notices.
              </p>
            </section>

            {/* SECTION 8: Evidence & BSA 2023 s.63 Checklist */}
            <section
              id="heading-evidence-pack"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Reel-Label, Lab MTC &amp; BSA 2023 s.63 Evidence Pack
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Whether filing an IBC Section 9 petition at NCLT, an Order XXXVII Commercial Suit, or a Section 138 criminal complaint, paper mill creditors win at the first hearing when every physical dispatch slip and digital ERP export is structured across four evidentiary pillars and certified under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023</strong>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                  <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">
                    1. Commercial &amp; Invoice Covenants
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-4">
                    <li>GST Tax Invoices with IRN/QR printing the post-slitting no-claim covenant &amp; 18%–24% overdue interest clause.</li>
                    <li>Purchase Orders, broker confirmation memos (sauda chitti), or WhatsApp rate/deckle approvals.</li>
                    <li>Signed Credit Limit Application, KYC (GST/PAN/CIN), and Director/Partner Guarantee deeds.</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                  <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">
                    2. Mill QC Lab &amp; Reel-Traceability Proof
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-4">
                    <li>Reel-Wise Packing List specifying unique Reel IDs, deckle size (cm/inch), GSM, BF, and net/gross weight.</li>
                    <li>Mill QCS / Lab Test Certificate (MTC) recording GSM, Burst Factor, Cobb60, Moisture %, RCT, and brightness.</li>
                    <li>Sealed retention control strip from the jumbo mother-reel for NABL/CPPRI lab verification.</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                  <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">
                    3. Weighbridge, Transit &amp; GST ITC Admission
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-4">
                    <li>Computerized Dharamkanta (Weighbridge) tare/gross weight slips and transporter LR / Bilty signed at destination.</li>
                    <li>E-Way Bill Part-A &amp; Part-B tracking proving truck arrival without rejection remark.</li>
                    <li>GSTR-1 filings and debtor&apos;s GSTR-2B ITC availment confirming statutory acceptance of invoiced value.</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                  <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">
                    4. BSA 2023 s.63 Electronic &amp; Cheque File
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-4">
                    <li>Signed BSA s.63 Certificate (Part A by Account Head + Part B by IT/ERP Admin) authenticating Tally/SAP ledgers, emails, and WhatsApp exports.</li>
                    <li>Original dishonoured PDCs/security cheques + Bank Return Memos stamped with exact dishonour date.</li>
                    <li>NeSL Form-C Debt Record authentication (for IBC s.9 corporate insolvency filings).</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 9: Dual-Track B2B Conversion Funnel */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Initiate a Single Mill Notice or Cluster-Wide Ledger Drive
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Whether you need to break a single stubborn converter&apos;s post-slitting debit note today or sweep 150+ overdue merchant and corrugator accounts across India before quarter-end, choose your operational track below:
              </p>

              <PaperMillCTA />
            </section>

            {/* SECTION 10: Internal Tools, Templates & Packaging Guides */}
            <section
              id="heading-tools-guides"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Paper Mill Tools, Notice Formats &amp; Packaging Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    tag: "IND-22 Pillar Hub",
                    title: "Packaging, Printing & Paper Mill Recovery Hub",
                    href: "/industries/packaging-printing-paper-mill-recovery",
                    desc: "Master multi-track escalation matrix for kraft mills, box plants, flexible converters, and printers.",
                  },
                  {
                    tag: "Sibling Spoke",
                    title: "Corrugated Box BF, GSM & Moisture Dispute Recovery",
                    href: "/corrugated-box-carton-manufacturer-bursting-strength-gsm-dispute-recovery",
                    desc: "How corrugators defeat 15% post-dispatch BF/ECT/monsoon moisture debit notes under s.42 & s.43B(h).",
                  },
                  {
                    tag: "Sibling Spoke",
                    title: "Custom-Printed Pouches & Unlifted Stock Recovery",
                    href: "/custom-printed-flexible-packaging-pouches-cartons-unlifted-stock-recovery",
                    desc: "Recover 100% contract price, gravure cylinders, and s.44 storage rent on abandoned brand packaging.",
                  },
                  {
                    tag: "T1 Calculator",
                    title: "MSME Delayed Payment Interest Calculator",
                    href: "/tools/msme-delayed-payment-interest-calculator",
                    desc: "Compute exact monthly compounded 3x RBI interest on Udyam paper mill or wastepaper overdue bills.",
                  },
                  {
                    tag: "P1 Notice Format",
                    title: "MSME Delayed Payment Demand Notice Format",
                    href: "/templates/msme-delayed-payment-demand-notice",
                    desc: "Fact-verified notice invoking MSMED ss.15–18 and Income Tax Section 43B(h) disallowance.",
                  },
                  {
                    tag: "Statute Guide",
                    title: "Section 43B(h) MSME Rule & s.138 Timeline",
                    href: "/law/section-43bh-msme-payment-rule",
                    desc: "Deep-dive on corporate tax disallowance alongside NI Act s.138 cheque bounce deadlines.",
                  },
                ].map((card) => (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="group rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-[#DC2626] p-4 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200/80 text-slate-700 mb-2">
                        {card.tag}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors mb-1.5">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                    </div>
                    <span className="mt-3 text-xs font-bold text-[#DC2626]">
                      Open Resource &rarr;
                    </span>
                  </Link>
                ))}
              </div>

              <div className="pt-2 text-xs text-slate-600 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span>Also read:</span>
                <Link
                  href="/cheque-bounce-notice-timeline-section-138"
                  className="font-semibold text-slate-800 hover:text-[#DC2626] underline underline-offset-2"
                >
                  Section 138 Cheque Bounce Notice Timeline
                </Link>
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="font-semibold text-slate-800 hover:text-[#DC2626] underline underline-offset-2"
                >
                  Bulk Institutional CSV Recovery Desk
                </Link>
              </div>
            </section>

            {/* SECTION 11: FAQ Accordions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  FAQs: Kraft Mill, Duplex Board &amp; Paper Merchant Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group rounded-xl border border-slate-200 bg-slate-50/70 open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 sm:p-5 cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900">
                      <span>{faq.q}</span>
                      <span className="w-6 h-6 rounded-full bg-slate-200 group-open:bg-[#DC2626] group-open:text-white text-slate-700 flex items-center justify-center text-sm font-black shrink-0 transition-colors">
                        +
                      </span>
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 mt-1 pt-3">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* SECTION 12: Advocate Attribution & Primary Statutory Authorities */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-black flex items-center justify-center shrink-0">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Authorities, Paper Associations &amp; Official Portals
                </h2>
              </div>

              {/* Legal Review Attribution */}
              {/* TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
              <div className="rounded-xl bg-slate-900 text-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-red-400">
                    Legal Strategy &amp; Statutory Review
                  </span>
                  <p className="text-sm font-bold text-white mt-0.5">
                    Anuj Anand Malik &mdash; Advocate &amp; Founder, AMA Legal Solutions
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Updated: November 19, 2026 &middot; Commercial Recovery, Insolvency &amp; Paper-Mill Trade Practice
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-white/10 text-slate-200 border border-white/15 shrink-0">
                  Creditor-Side SOP
                </span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300 underline-offset-2 transition-colors"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="text-[11px] text-slate-500 leading-relaxed pt-2 border-t border-slate-100">
                Disclaimer: This playbook provides general B2B creditor-side statutory information for Indian kraft paper mills, duplex board manufacturers, wholesale paper merchants, and wastepaper suppliers. Exact forum strategy depends on invoice terms, Udyam registration date, limitation stops, and pre-notice correspondence; consult a practicing commercial advocate before initiating IBC or court proceedings.
              </p>
            </section>
          </article>
        </div>
      </main>

      {/* Footer Cluster Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
