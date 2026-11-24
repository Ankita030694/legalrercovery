import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import PolymerTableOfContents from "./PolymerTableOfContents";
import PolymerScenarioTabs from "./PolymerScenarioTabs";
import PolymerNoticeCTA from "./PolymerNoticeCTA";

export const revalidate = 86400;

const PAGE_URL = "/polymer-granules-plastic-raw-material-pp-hdpe-pvc-trader-recovery";
const EXACT_H1 =
  "Credit Recovery for Polymer Granule Traders, Petrochemical DCAs & Masterbatch Makers: Enforcing Cash-Discounts, PDCs & DCA Guarantees";
const META_TITLE = "Polymer Granules (PP/HDPE/PVC) & DCA Debt Recovery";
const META_DESCRIPTION =
  "Petrochemical DCAs guarantee buyer credit to RIL/IOCL/GAIL. Recover moulding & extrusion defaults fast via Contract Act s.140, NI s.138 & Order 37.";

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
    title:
      "The Indian Contract Act, 1872 (Sections 126, 128, 140 & 141 — Surety & Del Credere Agent Subrogation Rights) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Sale of Goods Act, 1930 (Sections 23, 37, 41 & 42 — Appropriation, Inspection & Loss of Rejection Right) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXVII — Summary Suit on Written Contracts, Invoices & Cheques) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Negotiable Instruments Act, 1881 (Sections 138, 139, 141 & 143A — Cheque Dishonour & 20% Interim Deposit) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 & 24 — 3x RBI Compound Interest) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "The Insolvency and Bankruptcy Code, 2016 (Sections 8 & 9 — Operational Creditor Demand & Mobilox Test) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/15479",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic ERP, E-Way Bill & COA Records) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Surety & Del Credere Subrogation Upon Payment",
    parties: "Amrit Lal Goverdhan Lalan v. State Bank of Travancore",
    citation: "AIR 1968 SC 1432, Supreme Court of India",
    facts:
      "A surety discharged the principal debtor's liability to the creditor and sought to enforce the creditor's underlying securities and recovery rights against the defaulting borrower.",
    holding:
      "The Supreme Court affirmed that under Sections 140 and 141 of the Indian Contract Act, 1872, the moment a surety or guarantor pays the guaranteed debt, they are invested by operation of law with all the rights, remedies, and securities the principal creditor held against the debtor—without needing a separate assignment deed.",
    amount: "Automatic Section 140 Subrogation — DCA Steps Into RIL/IOCL/GAIL Shoes",
    takeaway:
      "Once a petrochemical DCA's Bank Guarantee or cash-credit limit is debited for a defaulting plastic processor, the DCA immediately inherits the right to sue for full invoice recovery.",
  },
  {
    title: "Supreme Court on Security Cheques Triggering Section 138 NI Act Liability",
    parties: "Sripati Singh (Since Deceased) Through His Son Gaurav Singh v. State of Jharkhand",
    citation: "2021 SCC OnLine SC 1002, Supreme Court of India",
    facts:
      "A commercial buyer contended that post-dated cheques delivered as 'security' at the commencement of a supply arrangement could not sustain criminal prosecution under Section 138 of the NI Act.",
    holding:
      "The Supreme Court held that a security cheque is a legally enforceable instrument; once the underlying supply obligation matures and remains unpaid on the date of presentation, dishonour attracts full Section 138 NI Act prosecution and Section 143A interim compensation.",
    amount: "Full s.138 Criminal Liability + 20% Interim Deposit Under s.143A",
    takeaway:
      "PDCs collected by polymer DCAs and masterbatch suppliers at buyer onboarding become lethal recovery weapons the day credit limits are breached.",
  },
  {
    title: "Supreme Court on Sham 'Pre-Existing Disputes' Under IBC Sections 8 & 9",
    parties: "Mobilox Innovations Private Limited v. Kirusa Software Private Limited",
    citation: "(2018) 1 SCC 353, Supreme Court of India",
    facts:
      "A corporate debtor attempted to stall an operational creditor's NCLT insolvency petition by raising an unsubstantiated, belated quality dispute only after receiving a formal demand notice.",
    holding:
      "The Supreme Court ruled that a dispute under IBC Section 8(2)(a) must be a genuine, pre-existing dispute supported by contemporaneous evidence—not a 'patently feeble legal argument' or 'moonshine defense' fabricated to dodge admitted dues.",
    amount: "Moonshine Test — Defeats Post-Hopper MFI & Shade-Mismatch Emails",
    takeaway:
      "When a moulding factory slits 25-kg virgin resin bags, runs extruders for 45 days, and alleges MFI variance only after receiving a demand notice, NCLT rejects the defense as moonshine.",
  },
  {
    title: "Supreme Court on MSMED 3x RBI Compound Interest Overriding PO Terms",
    parties: "Silpi Industries v. Kerala State Road Transport Corporation & Anr.",
    citation: "2021 SCC OnLine SC 439, Supreme Court of India",
    facts:
      "Buyers relied on standard purchase-order clauses waiving delayed-payment interest to resist statutory compounding claims under Section 16 of the MSMED Act, 2006.",
    holding:
      "The Supreme Court confirmed that the MSMED Act, 2006 has overriding statutory force under Section 24. Registered Micro and Small manufacturers holding Udyam registration on the supply date are entitled to 3x RBI Bank Rate monthly compounded interest regardless of PO disclaimers.",
    amount: "Mandatory 3x RBI Compound Interest + Income Tax s.43B(h) Leverage",
    takeaway:
      "Udyam-registered masterbatch makers and polymer compounders can claim compounded statutory interest and trigger s.43B(h) tax disallowance against corporate defaulters.",
  },
];

const FAQ_ITEMS = [
  {
    q: "How does a petrochemical Del Credere Agent (DCA) recover money after RIL, IOCL, or GAIL encashes its Bank Guarantee?",
    a: "Under Sections 140 and 141 of the Indian Contract Act, 1872, the moment a DCA pays the petrochemical Principal (or suffers a Bank Guarantee / cash-credit debit) for a downstream buyer's default, the DCA is legally subrogated to all rights and remedies of the Principal. By pairing the PSU debit advice with the Tripartite DCA Agreement, GST E-Way Bills, and Lorry Receipts (Bilty), the DCA can sue directly via Order XXXVII CPC Summary Suit or serve an IBC Section 8 demand notice (>= ₹1 Crore).",
  },
  {
    q: "Can a moulding or extrusion factory withhold polymer payment by claiming 'MFI variance' or 'reprocessed mix' 45 days after delivery?",
    a: "No. Under Section 42 of the Sale of Goods Act, 1930, once a processor breaks open sealed 25-kg producer bags, feeds PP/HDPE/PVC granules into extruders or injection-moulding hoppers, and dispatches finished pipes, sacks, or films without a written rejection within 48–72 hours, the buyer is deemed to have conclusively accepted the goods. Producing the petrochemical plant's batch-wise Certificate of Analysis (COA) exposes late MFI complaints as a 'moonshine defense' under the Supreme Court's Mobilox standard.",
  },
  {
    q: "What if a buyer misses our 7-day or 15-day Cash Discount (CD) deadline, pays 60 days late, and still deducts 2% CD?",
    a: "Cash Discount is strictly a conditional rebate earned only upon payment within the stipulated 7-day or 15-day credit window. Unauthorized CD deductions and unpaid delayed-payment interest constitute an admitted liquidated debt. A reconciled ledger reversing the unearned CD, backed by invoice terms and delivery proofs, is fully recoverable through an Order XXXVII CPC summary suit or MSEFC claim.",
  },
  {
    q: "Can a polymer trader or DCA file Section 138 NI Act cheque bounce cases on 'security PDCs'?",
    a: "Yes. Following the Supreme Court's ruling in Sripati Singh v. State of Jharkhand, post-dated cheques taken as security at buyer onboarding carry full criminal liability under Section 138 NI Act once the invoice credit period expires and the debt crystallizes. You can also apply for up to 20% interim compensation under Section 143A NI Act while running a parallel Order XXXVII civil recovery suit.",
  },
  {
    q: "How can custom color masterbatch and engineering-plastic compounders defeat 'shade variation' excuses?",
    a: "Maintain a strict pre-dispatch paper trail: signed Pantone/RAL lab shade-card approval, spectrophotometer Delta-E pass logs, and trial-lot acceptance emails. Under Section 23 of the Sale of Goods Act, custom-compounded masterbatch is unconditionally appropriated to the buyer's contract, and Udyam-registered compounders can also invoke MSMED Act s.16 (3x RBI compound interest) and Income Tax Act s.43B(h).",
  },
  {
    q: "Which courts have jurisdiction for polymer defaults across Delhi (Narela/Bawana), Daman, Vapi, Ahmedabad, and Haldia?",
    a: "For Section 138 NI Act cheque bounce complaints, Section 142(2) vests jurisdiction in the Magistrate Court where your (the payee's) home bank branch is situated—eliminating the need to chase buyers across industrial estates. For civil summary suits under Order XXXVII CPC or Commercial Courts Act, jurisdiction follows the registered office of the defendant or the exclusive jurisdiction clause printed on your accepted tax invoices and DCA agreement.",
  },
  {
    q: "What documents must a polymer trader preserve under BSA 2023 Section 63 for fast-track recovery?",
    a: "Compile five core records: (1) Tripartite DCA Credit Application or accepted PO; (2) Tax Invoices & GST E-Way Bill Part-A/B; (3) Lorry Receipt (Bilty), Weighbridge Slip & Factory Gate-Inward stamp; (4) Producer's batch Certificate of Analysis (COA); and (5) A Section 63 BSA certificate authenticating SAP/Tally ledgers, PSU BG-debit memos, and email/WhatsApp dispatch confirmations.",
  },
];

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "5-Stage Polymer Granules & Petrochemical DCA Subrogation Recovery Protocol",
  description:
    "Step-by-step legal recovery workflow for polymer granule traders, RIL/IOCL/GAIL Del Credere Agents (DCAs), and masterbatch makers to enforce Contract Act s.140 subrogation, Sale of Goods Act s.42 acceptance, NI Act s.138, and Order XXXVII CPC.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Lock PSU Payment Proof & Section 140 Subrogation",
      text: "Archive the petrochemical PSU's Bank Guarantee encashment memo, SAP debit advice, and Tripartite DCA Agreement to establish automatic subrogation under Indian Contract Act ss.140–141.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Freeze Hopper-Consumption & COA Acceptance Proof",
      text: "Compile GST E-Way Bill Part-A/B, Bilty, Weighbridge Slips, and batch-wise Certificate of Analysis (COA) to lock Sale of Goods Act s.42 acceptance and defeat late MFI excuses.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Present Security PDCs & Reconcile Cash-Discount Clawbacks",
      text: "Reverse unauthorized Cash Discounts on delayed RTGS payments, present security PDCs within validity, and issue Section 138(b) notice within 30 days of dishonour.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Serve Composite Advocate Demand & BSA s.63 Dossier",
      text: "Dispatch a fact-verified notice via Email, WhatsApp, and Speed Post RPAD invoking s.140 subrogation, s.42 acceptance, MSMED s.16 / s.43B(h), and IBC s.8 Form 3 (for >= ₹1 Cr).",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "File Parallel NI s.138 Criminal + Order XXXVII Civil / NCLT Action",
      text: "Escalate unresolved defaults simultaneously to home-bank Magistrate Court (s.138 + s.143A 20% interim deposit) and Commercial Court (Order XXXVII Summary Suit) or NCLT.",
    },
  ],
};

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PAGE_URL}`,
  },
  image: `${SITE_URL}/blog_money_recovery.png`,
  datePublished: "2026-11-17T00:00:00+05:30",
  dateModified: "2026-11-17T00:00:00+05:30",
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
    url: `${SITE_URL}/about`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
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
      name: "Chemicals, Steel, RMC & Building Materials Hub",
      item: `${SITE_URL}/industries/chemicals-steel-rmc-building-materials-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Polymer Granules & DCA Recovery",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

export default function PolymerGranulesRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-14 B2B Creditor Playbook</span>
            <span>&bull;</span>
            <span>Contract Act s.140 Subrogation &bull; PP / HDPE / PVC / Masterbatch</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (within first 250 words + parent Hub link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &bull; Del Credere &amp; Resin Trader Mandate
            </span>
            Under <strong>Sections 140 and 141 of the Indian Contract Act, 1872</strong>, the moment a petrochemical Del Credere Agent (DCA) for RIL, IOCL, GAIL, HMEL, or OPAL pays the Principal PSU or suffers a Bank Guarantee debit for a buyer&apos;s default, the DCA steps into the Principal&apos;s legal shoes by automatic subrogation. Combined with <strong>Sale of Goods Act s.42</strong> (which bars MFI excuses after hopper consumption), <strong>NI Act s.138</strong>, and <strong>Order XXXVII CPC</strong>, polymer traders and masterbatch makers can enforce full recovery—see our{" "}
            <Link
              href="/industries/chemicals-steel-rmc-building-materials-recovery"
              className="text-red-300 underline hover:text-white font-bold"
            >
              IND-14 Chemicals, Steel, RMC &amp; Polymer Recovery Hub
            </Link>{" "}
            for vertical escalation tracks.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">s.140–141</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Automatic DCA Subrogation Rights
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">30 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                NI Act s.138 Notice Window on PDCs
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">3x RBI</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                MSMED s.16 Monthly Compound Rate
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">20% Deposit</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Interim Relief Under NI s.143A
              </p>
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
                label: "Chemicals, Steel & Polymer Hub",
                href: "/industries/chemicals-steel-rmc-building-materials-recovery",
              },
              {
                label: "Polymer Granules & DCA Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <PolymerTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Polymer Granule &amp; DCA Credit Defaults Escalate Rapidly
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  India&apos;s polymer distribution architecture runs on razor-thin agent commissions—typically ₹350 to ₹800 per metric tonne—paired with massive credit exposure. Petrochemical majors such as <strong>Reliance Industries (RIL), Indian Oil Corporation (IOCL), GAIL, HMEL, OPAL, and Haldia Petrochemicals</strong> route PP, HDPE, LDPE, LLDPE, PVC, and PET granules to downstream extrusion and injection-moulding units through <strong>Del Credere Agents (DCAs)</strong> and Consignment Stockists (CS). Under standard PSU agency agreements, the DCA guarantees 100% of the buyer&apos;s payment. The moment a pipe extruder in Vapi, a woven-sack unit in Ahmedabad, or a blow-moulder in Narela/Bawana misses the 15-day or 30-day credit window, the petrochemical producer automatically debits the DCA&apos;s cash-credit limit or encashes its Bank Guarantee.
                </p>
                <p>
                  Meanwhile, independent polymer wholesalers, engineering-plastic importers, and custom color <strong>masterbatch manufacturers</strong> face three chronic default tactics: (1) buyers feeding 25-kg virgin resin bags into hoppers and raising fabricated <strong>Melt Flow Index (MFI)</strong> or &ldquo;reprocessed mixing&rdquo; excuses 45 days later; (2) chronic late payers deducting 1.5%–2% <strong>Cash Discounts (CD)</strong> despite missing the 7-day CD cutoff; and (3) processors issuing stop-payment instructions on onboarding post-dated security cheques (PDCs). Unlike consumer disputes, a polymer supplier&apos;s recovery turns on moving before the processor diverts finished inventory or pleads a sham quality dispute—a risk also shared across{" "}
                  <Link
                    href="/ready-mix-concrete-rmc-supplier-builder-payment-cube-test-dispute"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    RMC &amp; building-material site supply disputes
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 2: 5-Stage Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  5-Stage DCA Subrogation &amp; Granule Recovery Playbook
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 mb-6">
                Execute this sequential statutory rail from Day 1 of Bank Guarantee debit or invoice maturity across Delhi, Daman, Vapi, Ahmedabad, Mumbai, and Haldia polymer corridors:
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block overflow-x-auto pb-2">
                <svg
                  width="860"
                  height="210"
                  viewBox="0 0 860 210"
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-Stage DCA Subrogation and Polymer Granule Recovery Flowchart"
                >
                  <rect width="860" height="210" rx="16" fill="#0F172A" />
                  {/* Stage 1 */}
                  <rect x="20" y="30" width="148" height="150" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="34" y="56" fill="#F87171" fontSize="11" fontWeight="700">STAGE 1 • DAY 1</text>
                  <text x="34" y="78" fill="#FFFFFF" fontSize="13" fontWeight="800">Lock s.140</text>
                  <text x="34" y="96" fill="#FFFFFF" fontSize="13" fontWeight="800">Subrogation</text>
                  <text x="34" y="122" fill="#CBD5E1" fontSize="10.5">PSU BG Debit Memo</text>
                  <text x="34" y="138" fill="#CBD5E1" fontSize="10.5">+ Tripartite DCA</text>
                  <text x="34" y="154" fill="#CBD5E1" fontSize="10.5">Credit Agreement</text>

                  <line x1="168" y1="105" x2="188" y2="105" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="188,100 196,105 188,110" fill="#94A3B8" />

                  {/* Stage 2 */}
                  <rect x="196" y="30" width="148" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="210" y="56" fill="#34D399" fontSize="11" fontWeight="700">STAGE 2 • DAY 3</text>
                  <text x="210" y="78" fill="#FFFFFF" fontSize="13" fontWeight="800">Freeze s.42</text>
                  <text x="210" y="96" fill="#FFFFFF" fontSize="13" fontWeight="800">Acceptance</text>
                  <text x="210" y="122" fill="#CBD5E1" fontSize="10.5">E-Way Bill Part-A/B</text>
                  <text x="210" y="138" fill="#CBD5E1" fontSize="10.5">+ Bilty + Batch COA</text>
                  <text x="210" y="154" fill="#CBD5E1" fontSize="10.5">Defeats MFI Excuse</text>

                  <line x1="344" y1="105" x2="364" y2="105" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="364,100 372,105 364,110" fill="#94A3B8" />

                  {/* Stage 3 */}
                  <rect x="372" y="30" width="148" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="386" y="56" fill="#FBBF24" fontSize="11" fontWeight="700">STAGE 3 • DAY 7</text>
                  <text x="386" y="78" fill="#FFFFFF" fontSize="13" fontWeight="800">CD Reversal</text>
                  <text x="386" y="96" fill="#FFFFFF" fontSize="13" fontWeight="800">&amp; PDC Deposit</text>
                  <text x="386" y="122" fill="#CBD5E1" fontSize="10.5">Reverse Unearned CD</text>
                  <text x="386" y="138" fill="#CBD5E1" fontSize="10.5">+ Deposit Security</text>
                  <text x="386" y="154" fill="#CBD5E1" fontSize="10.5">Cheques (s.138)</text>

                  <line x1="520" y1="105" x2="540" y2="105" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="540,100 548,105 540,110" fill="#94A3B8" />

                  {/* Stage 4 */}
                  <rect x="548" y="30" width="148" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="562" y="56" fill="#F87171" fontSize="11" fontWeight="700">STAGE 4 • DAY 15</text>
                  <text x="562" y="78" fill="#FFFFFF" fontSize="13" fontWeight="800">Statutory</text>
                  <text x="562" y="96" fill="#FFFFFF" fontSize="13" fontWeight="800">Notice Blitz</text>
                  <text x="562" y="122" fill="#CBD5E1" fontSize="10.5">s.138 (15d) + IBC</text>
                  <text x="562" y="138" fill="#CBD5E1" fontSize="10.5">Form 3 (10d) +</text>
                  <text x="562" y="154" fill="#CBD5E1" fontSize="10.5">MSMED s.43B(h)</text>

                  <line x1="696" y1="105" x2="716" y2="105" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="716,100 724,105 716,110" fill="#94A3B8" />

                  {/* Stage 5 */}
                  <rect x="724" y="30" width="116" height="150" rx="12" fill="#DC2626" />
                  <text x="736" y="56" fill="#FEE2E2" fontSize="11" fontWeight="700">STAGE 5</text>
                  <text x="736" y="78" fill="#FFFFFF" fontSize="13" fontWeight="800">Dual Forum</text>
                  <text x="736" y="96" fill="#FFFFFF" fontSize="13" fontWeight="800">Filing</text>
                  <text x="736" y="122" fill="#FEF2F2" fontSize="10.5">Order 37 Suit</text>
                  <text x="736" y="138" fill="#FEF2F2" fontSize="10.5">+ s.143A (20%)</text>
                  <text x="736" y="154" fill="#FEF2F2" fontSize="10.5">+ NCLT / MSEFC</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    stage: "Stage 1 (Day 1): Lock s.140 Subrogation",
                    detail:
                      "Download RIL/IOCL/GAIL BG encashment memo or SAP debit advice + Tripartite DCA Agreement.",
                  },
                  {
                    stage: "Stage 2 (Day 3): Freeze s.42 Acceptance",
                    detail:
                      "Bind E-Way Bill Part-A/B, Bilty, Weighbridge Slip, and batch Certificate of Analysis (COA) to bar MFI excuses.",
                  },
                  {
                    stage: "Stage 3 (Day 7): CD Clawback & PDC Deposit",
                    detail:
                      "Reverse unearned Cash Discounts on delayed RTGS and bank security PDCs for s.138 dishonour.",
                  },
                  {
                    stage: "Stage 4 (Day 15): Composite Statutory Notice",
                    detail:
                      "Serve s.138(b) + IBC Form 3 / MSMED s.43B(h) demand via Email, WhatsApp & Speed Post RPAD.",
                  },
                  {
                    stage: "Stage 5: Parallel Dual-Forum Filing",
                    detail:
                      "File s.138 NI Act (with 20% s.143A deposit) + Order XXXVII Summary Suit or NCLT / MSEFC.",
                  },
                ].map((item) => (
                  <div
                    key={item.stage}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <p className="text-xs font-extrabold text-red-400 mb-1">
                      {item.stage}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Matrix for Polymer Traders, DCAs &amp; Masterbatch
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statute &amp; Section</th>
                      <th className="p-3.5 font-bold">Polymer / DCA Trigger</th>
                      <th className="p-3.5 font-bold">Creditor Remedy &amp; Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="bg-white">
                      <td className="p-3.5 font-bold text-slate-900">
                        Contract Act, 1872 ss.140–141
                      </td>
                      <td className="p-3.5 text-slate-700">
                        PSU encashes DCA&apos;s Bank Guarantee or debits DCA limit on buyer default
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Automatic subrogation into RIL/IOCL/GAIL&apos;s creditor shoes; zero fresh assignment needed
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Sale of Goods Act, 1930 ss.23, 42
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Processor slits 25-kg bags, feeds extruder, or approves custom masterbatch shade
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Conclusive deemed acceptance; extinguishes late MFI or shade-variation rejection rights
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3.5 font-bold text-slate-900">
                        Order XXXVII CPC, 1908
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Unpaid written tax invoices, DCA agreements, CD clawbacks, or bounced cheques
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Summary Suit; defendant gets no right to defend unless court grants leave (often on deposit)
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        NI Act, 1881 ss.138 &amp; 143A
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Onboarding security PDCs or RTGS-replacement cheques bounce / stopped
                      </td>
                      <td className="p-3.5 text-slate-700">
                        30-day demand notice; home-bank criminal trial + up to 20% interim compensation
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3.5 font-bold text-slate-900">
                        MSMED Act ss.15–18 &amp; IT Act s.43B(h)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Udyam-registered masterbatch / compounder unpaid past 45 days
                      </td>
                      <td className="p-3.5 text-slate-700">
                        3x RBI Bank Rate monthly compounded interest + buyer tax disallowance at March 31
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        IBC, 2016 ss.8 &amp; 9
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Corporate moulding/packaging debtor owes &ge; ₹1 Crore (principal + agreed interest)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        10-day Form 3 statutory demand; NCLT admission unless genuine pre-existing dispute exists
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-xs sm:text-sm">
                <Link
                  href="/law/order-37-summary-suit-money-recovery"
                  className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                >
                  Deep-Dive: Order XXXVII Summary Suit Guide &rarr;
                </Link>
                <Link
                  href="/cheque-bounce-and-civil-suit-together"
                  className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                >
                  Running s.138 Cheque Bounce + Civil Suit Together &rarr;
                </Link>
                <Link
                  href="/recovery/vendor-payments"
                  className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                >
                  B2B Vendor Payment Recovery Desk &rarr;
                </Link>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Interactive Polymer Default &amp; MFI Dispute Explorer
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 mb-5">
                Select your exact commercial bottleneck below to inspect the statutory counter-strike and 3-step execution protocol:
              </p>
              <PolymerScenarioTabs />
            </section>

            {/* Dual-Track CTA */}
            <PolymerNoticeCTA />

            {/* Section 5: Worked Ledger Calculation */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked DCA Subrogation Ledger: ₹85 Lakh PP/HDPE Default
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 mb-5 leading-relaxed">
                Consider a typical RIL/IOCL DCA credit default where a downstream HDPE pipe &amp; PP raffia processor lifts 75 MT of resin (₹85,00,000 invoice value including 18% GST) on a 15-day Cash Discount / 30-day credit structure, deducts an unearned 1.5% CD on a token ₹10 Lakh part-payment, and defaults on the remaining ₹75,00,000—triggering a PSU Bank Guarantee debit against the DCA:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-300">Gross Tax Invoice Value (75 MT PP/HDPE + 18% GST)</span>
                  <span className="font-bold">₹85,00,000</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-300">Less: Delayed Part-Payment (Day 52 RTGS)</span>
                  <span className="font-bold text-amber-400">− ₹10,00,000</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-300">Add: Disallowed Unearned Cash Discount (1.5% on ₹85L)</span>
                  <span className="font-bold text-emerald-400">+ ₹1,27,500</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-300">Add: PSU Delayed-Payment Penal Debit Reimbursed by DCA (18% p.a., 120d)</span>
                  <span className="font-bold text-emerald-400">+ ₹4,51,233</span>
                </div>
                <div className="flex justify-between pt-2 text-sm sm:text-base font-black">
                  <span className="text-red-400">Total Subrogated Claim Under Contract Act s.140 &amp; Order 37</span>
                  <span className="text-white">₹80,78,733</span>
                </div>
              </div>

              <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs sm:text-sm text-emerald-900">
                <strong>For Udyam-Registered Masterbatch &amp; Compound Manufacturers:</strong> Compute exact 3x RBI Bank Rate monthly compounded interest and buyer tax exposure using our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="font-bold underline text-emerald-800 hover:text-emerald-950"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>
                , or draft a formal rebuttal using our{" "}
                <Link
                  href="/templates/legal-notice-reply-format"
                  className="font-bold underline text-emerald-800 hover:text-emerald-950"
                >
                  Ready-to-Use Commercial Notice Workspace
                </Link>
                .
              </div>
            </section>

            {/* Section 6: Evidence & BSA 2023 s.63 Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Polymer Dispatch, COA &amp; BSA 2023 Section 63 Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 mb-5">
                To secure an Order XXXVII CPC decree or defeat a buyer&apos;s sham MFI dispute in NCLT, assemble these six evidentiary pillars under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Tripartite DCA & Credit Limit Agreement",
                    desc: "Signed buyer onboarding form, personal/corporate guarantee, and CD/interest terms establishing liquidated liability.",
                  },
                  {
                    title: "2. PSU BG Encashment / SAP Debit Advice",
                    desc: "Proof that the DCA discharged the buyer's overdue balance to RIL/IOCL/GAIL/HMEL/OPAL, triggering s.140 subrogation.",
                  },
                  {
                    title: "3. GST E-Way Bill Part-A & Part-B",
                    desc: "Government-portal vehicle movement trail matching truck number, resin HSN (3901/3902/3904), and buyer GSTIN.",
                  },
                  {
                    title: "4. Lorry Receipt (Bilty) & Weighbridge Slip",
                    desc: "Signed transporter receipt, Dharamkanta weight ticket, and buyer factory gate-inward stamp proving intact 25-kg bag delivery.",
                  },
                  {
                    title: "5. Producer Batch Certificate of Analysis (COA)",
                    desc: "Lot-specific MFI, density, and ash-content test report from the petrochemical plant or masterbatch QC spectrophotometer.",
                  },
                  {
                    title: "6. BSA 2023 s.63 Electronic Certificate",
                    desc: "Statutory hash/device certificate authenticating ERP/Tally ledgers, WhatsApp dispatch confirmations, and email reminders.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <p className="text-sm font-bold text-slate-900 mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Supreme Court Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Supreme Court Precedents on Subrogation, PDCs &amp; Disputes
                </h2>
              </div>

              <div className="space-y-4">
                {COURT_PRECEDENTS.map((item) => (
                  <div
                    key={item.parties}
                    className="relative bg-slate-50 border border-slate-200 rounded-2xl p-5 pl-6 overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                        {item.title}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500">
                        {item.citation}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                      {item.parties}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2 leading-relaxed">
                      <strong>Holding:</strong> {item.holding}
                    </p>
                    <div className="bg-white border border-slate-200 rounded-xl p-3 text-xs text-slate-700">
                      <span className="font-bold text-emerald-700 block mb-0.5">
                        {item.amount}
                      </span>
                      {item.takeaway}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions (Polymer &amp; DCA Recovery)
                </h2>
              </div>

              <div className="space-y-3">
                {FAQ_ITEMS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
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

            {/* Section 9: Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Authorities &amp; Official Legal Sources
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] underline"
                    >
                      {src.title}
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
  );
}
