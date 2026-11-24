import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import PharmaStockistNoticeCTA from "./PharmaStockistNoticeCTA";
import PharmaStockistNoticeTOC from "./PharmaStockistNoticeTOC";
import PharmaStockistNoticeWorkspace from "./PharmaStockistNoticeWorkspace";

export const revalidate = 86400;

const EXACT_H1 =
  "Editable Legal Demand Notice Format for Pharma Companies, Stockists & Surgical Distributors (With Security-Cheque Presentation Clause)";

const EXACT_DESCRIPTION =
  "Ready-to-use legal notice draft for unpaid pharma & surgical invoices: batch/DL/GSTIN schedule, expiry-deduction bar & NI Act s.20 security cheque notice.";

export const metadata: Metadata = {
  title: "Pharma & Surgical Stockist Unpaid Ledger Legal Notice Format",
  description: EXACT_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/templates/pharma-surgical-stockist-ledger-demand-legal-notice`,
  },
  openGraph: {
    title: "Pharma & Surgical Stockist Unpaid Ledger Legal Notice Format",
    description: EXACT_DESCRIPTION,
    url: `${SITE_URL}/templates/pharma-surgical-stockist-ledger-demand-legal-notice`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Pharma & Surgical Stockist Unpaid Ledger Legal Notice Format",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharma & Surgical Stockist Unpaid Ledger Legal Notice Format",
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
    title: "Negotiable Instruments Act, 1881 — Section 20 (Inchoate Stamped Instruments & Statutory Authority to Complete Blank Cheques)",
    url: "https://www.indiacode.nic.in/handle/123456789/2290",
  },
  {
    title: "Code of Civil Procedure, 1908 (CPC) — Order XXXVII (Summary Procedure on Invoices, Bilties & Liquidated Debts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Drugs and Cosmetics Rules, 1945 — Rules 61–66 & Forms 20B/21B (Conditions of Wholesale Drug Licenses & Sale Registers)",
    url: "https://cdsco.gov.in/opencms/opencms/en/Drugs/Acts-and-Rules/",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 — Sections 15–18 (Mandatory 45-Day Payment & 3x RBI Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Central Goods and Services Tax Act, 2017 — Section 34 & CBIC Circular No. 72/46/2018-GST (Treatment of Expired Drug Return)",
    url: "https://cbic-gst.gov.in/circulars.html",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Admissibility of Electronic Records: WhatsApp, Speed Post & ERP Ledgers)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Supreme Court of India — Bir Singh v. Mukesh Kumar (2019) 4 SCC 197 (Authority to Fill Blank Signed Cheque for Existing Debt)",
    url: "https://main.sci.gov.in/judgment/judis/46124.pdf",
  },
];

const CASE_CITATIONS = [
  {
    title: "Bir Singh v. Mukesh Kumar: Presumption & Right to Complete Blank Signed Cheque",
    parties: "Bir Singh v. Mukesh Kumar",
    citation: "(2019) 4 SCC 197 (Supreme Court of India)",
    date: "Judgment Dated 06 February 2019",
    facts:
      "A commercial debtor issued a blank signed cheque as security for financial advances and goods supplied. Upon default, the payee filled in the date and crystallized outstanding balance and deposited it. The cheque bounced, and the trial court acquitted the accused on the pretext that the handwriting on the cheque did not match the drawer's handwriting.",
    holding:
      "The Supreme Court reversed the acquittal, holding that under Section 20, 138, and 139 of the NI Act, if a signed blank cheque is voluntarily handed over to a payee towards an existing or anticipated debt, the holder in due course has prima facie statutory authority to fill in the date and amount. Even if the body of the cheque is filled by a third party, it remains a valid negotiable instrument and raises a statutory presumption of debt under Section 139.",
    amount: "Blank Signed Cheque Validly Completed for Crystallized Dues; Acquittal Set Aside",
    takeaway:
      "Pharma creditors holding signed blank security cheques can lawfully fill in crystallized ledger amounts under Section 20 NI Act, provided a prior notice crystallizing the debt is served before deposit.",
  },
  {
    title: "Dashrathbhai Trikambhai Patel: Cheque Amount Must Reflect Crystallized Debt",
    parties: "Dashrathbhai Trikambhai Patel v. Hitesh Mahendrabhai Patel & Anr.",
    citation: "(2023) 1 SCC 578 (Supreme Court of India)",
    date: "Judgment Dated 11 October 2022",
    facts:
      "A commercial creditor presented a security cheque for the entire original transaction amount of ₹20 Lakhs, even though the debtor had already made partial on-account payments of ₹4 Lakhs during rolling ledger operations. The cheque was dishonoured, and the creditor initiated Section 138 proceedings without endorsing the part-payment.",
    holding:
      "The Supreme Court held that Section 138 is attracted only when the cheque is presented for an amount that represents the actual subsisting legally enforceable debt on the date of presentation. If part-payments are received, the creditor must either endorse the part-payment on the instrument under Section 56 of the NI Act or present the cheque only for the net reconciled balance. Presenting a cheque for a sum higher than the actual ledger balance invalidates the Section 138 complaint.",
    amount: "Mandatory Reconciliation of Partial Payments Before Presenting Security Cheque",
    takeaway:
      "Always reconcile the stockist's ledger and deduct all on-account NEFT/RTGS payments before issuing the Section 20 intimation notice or presenting the security cheque.",
  },
  {
    title: "Order XXXVII CPC: Summary Decree on Tax Invoices with Delivery Receipts",
    parties: "Lohmann Rausher Gmbh v. Medisphere Marketing Pvt. Ltd.",
    citation: "2005 (80) DRJ 9, ILR (2004) II Delhi 704 (Delhi High Court)",
    date: "Judgment Dated 13 January 2004",
    facts:
      "A medical device and surgical products manufacturer filed a Summary Suit under Order XXXVII CPC for recovery of unpaid invoices against an Indian medical distributor. The distributor contended that invoices without a standalone bilateral signed agreement could not sustain an Order XXXVII suit.",
    holding:
      "The High Court held that unpaid tax invoices accompanied by delivery challans or transport bilties constitute a valid written contract within the meaning of Order XXXVII Rule 1(2) CPC. In the absence of contemporaneous written protest regarding quality or quantity within a reasonable time, the buyer has no bona fide defense, and the creditor is entitled to an immediate summary decree.",
    amount: "Summary Decree Awarded with 18% Commercial Interest on Unpaid Invoices",
    takeaway:
      "In pharma recoveries, attaching a serialized schedule of tax invoices, batch numbers, transport bilties, and GST e-Way bills creates an open-and-shut Order XXXVII summary suit.",
  },
  {
    title: "Sale of Goods Act: Retention of Stock Beyond Inspection Window Deemed Acceptance",
    parties: "M/s K.G. Khosla & Co. v. M/s Automotive Rubber",
    citation: "AIR 1982 Delhi 299 (Delhi High Court)",
    date: "Judgment Dated 14 May 1982",
    facts:
      "A distributor received commercial consignments and retained them in its warehouse for several months without issuing any formal rejection notice. When sued for the price of goods, the distributor pleaded that the products were defective and offered to return the unsold stock.",
    holding:
      "The Court held that under Section 41 and 42 of the Sale of Goods Act, 1930, the buyer has a duty to inspect goods within a reasonable time. Retaining goods beyond the contractual inspection window without rejecting them constitutes deemed unconditional acceptance. A defaulting distributor cannot retrospectively return unsold goods when sued for payment.",
    amount: "Defense of Defective Stock Rejected; Claim for Full Price Allowed",
    takeaway:
      "Chemist and stockist attempts to manufacture 'expired or near-expiry stock' debit notes months after delivery are legally barred by Section 42 of the Sale of Goods Act.",
  },
];

const FAQS = [
  {
    question: "Can a pharma company or C&F legally fill and deposit a stockist's blank security cheque?",
    answer:
      "Yes. Under Section 20 of the Negotiable Instruments Act, 1881, delivery of a signed inchoate (blank or undated) cheque confers prima facie authority on the holder to complete the instrument for the crystallized, legally enforceable debt due as on that date. As affirmed by the Supreme Court in Bir Singh v. Mukesh Kumar (2019), even if the date and amount are filled by the creditor, the instrument remains valid. However, to eliminate allegations of cheating, extortion, or misuse under BNS Sections 316/318, the creditor must first serve a formal legal notice stating the reconciled ledger balance and giving the stockist 7 days to pay before presenting the cheque.",
  },
  {
    question: "How do Drug License numbers (Form 20B/21B) strengthen a pharma debt recovery notice?",
    answer:
      "Under the Drugs and Cosmetics Rules, 1945, wholesale distribution of allopathic medicines is permissible only to entities possessing valid wholesale drug licenses in Form 20B (non-biological) and Form 21B (biological). Incorporating the debtor's exact Drug License numbers, registered shop address, and qualified pharmacist credentials into the legal demand notice establishes statutory privity of contract, proves that consignments were supplied to an authorized commercial licensee, and creates immediate leverage: default in commercial drug trade can be reported to the State Licensing Authority for regulatory non-compliance.",
  },
  {
    question: "Can a defaulting chemist or stockist deduct money for 'expired medicines' or 'breakage'?",
    answer:
      "No, not unilaterally. Under Section 42 of the Sale of Goods Act, 1930, retaining pharmaceutical goods past the contractual inspection period (typically 48–72 hours) constitutes deemed unconditional acceptance. Furthermore, under Section 34(2) of the Central Goods and Services Tax (CGST) Act, 2017, credit notes for sales returns cannot be issued after the 30th of November following the financial year. CBIC Circular No. 72/46/2018-GST clarifies that return of time-expired medicines is treated as a fresh commercial supply requiring mutual consent, not an automatic deduction from overdue invoices.",
  },
  {
    question: "What is the difference between an ordinary legal notice and an Order XXXVII CPC notice?",
    answer:
      "A generic legal notice makes an open-ended monetary demand, which frequently leads to lengthy, contested civil suits lasting 4–7 years. In contrast, an Order XXXVII CPC compliant legal notice formats the debt as a liquidated sum based on written instruments: tax invoices, signed delivery challans, transport bilties (LRs), and GST e-Way bills. This establishes a strict summary remedy where the debtor has no automatic right to defend and must obtain 'leave to defend' from the court by demonstrating a substantial defense or depositing the disputed sum.",
  },
  {
    question: "Does Section 43B(h) of the Income Tax Act apply to pharma stockists and chemists?",
    answer:
      "Yes. If the pharmaceutical manufacturer, C&F agent, or surgical distributor is registered as a Micro or Small enterprise on the Udyam portal, Section 43B(h) of the Income Tax Act strictly disallows buyer tax deductions for unpaid purchases not cleared within 45 days (with written agreement) or 15 days (without agreement). If a stockist or chemist fails to pay, the unpaid amount is added back to their taxable income, resulting in a 30%+ corporate/proprietorship tax penalty plus interest.",
  },
  {
    question: "What evidence is needed to prove pharmaceutical delivery under BSA 2023 Section 63?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Evidence Act), electronic records are admissible without oral evidence if accompanied by a statutory certificate. In pharma debt recovery, this includes: ERP/Marg/Busy generated tax invoices, GST e-Way bill portal generation and verification logs, transporter consignment notes (LRs) bearing destination rubber-stamps, and WhatsApp/Email communication logs with certified hash data.",
  },
  {
    question: "What are the legal notice charges for recovering unpaid pharma stockist ledgers?",
    answer:
      "On LegalRecovery.in, our team verifies the invoice, transport bilty, Drug License, and security cheque details you submit, prepares an Order XXXVII CPC and Section 20 NI Act compliant legal notice, and dispatches it via Email and WhatsApp under BSA Section 63 for a transparent flat fee of ₹999. Speed Post RPAD dispatch with real-time postal tracking manifests is available at ₹450 per recipient. Enterprise C&Fs and super-stockists managing 10 to 10,000+ accounts can access volume-tiered batch recovery via CSV upload.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: EXACT_DESCRIPTION,
  datePublished: "2026-11-16T10:00:00+05:30",
  dateModified: "2026-11-16T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/templates/pharma-surgical-stockist-ledger-demand-legal-notice`,
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
    name: "Pharmaceutical Debt Recovery Legal Notice Format",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const DIGITAL_DOCUMENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["CreativeWork", "DigitalDocument"],
  name: "Pharma & Surgical Stockist Unpaid Ledger Legal Demand Notice Template",
  headline: EXACT_H1,
  description:
    "Fact-verified statutory legal demand notice draft for pharmaceutical manufacturers, C&Fs, super-stockists, and surgical implant distributors under Order XXXVII CPC, Drugs and Cosmetics Rules 1945, and Section 20 NI Act.",
  encodingFormat: "text/html",
  hasDigitalDocumentPermission: {
    "@type": "DigitalDocumentPermission",
    permissionType: "https://schema.org/ReadPermission",
    grantee: {
      "@type": "Audience",
      audienceType: "Public",
    },
  },
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
      name: "Templates",
      item: `${SITE_URL}/templates`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Pharma & Surgical Stockist Legal Notice",
      item: `${SITE_URL}/templates/pharma-surgical-stockist-ledger-demand-legal-notice`,
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

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Omitted reviewer box per Section 7 guidelines.

export default function PharmaSurgicalStockistNoticePage() {
  const breadcrumbItems = [
    { label: "Templates", href: "/templates" },
    {
      label: "Pharma & Surgical Stockist Legal Notice",
      href: "/templates/pharma-surgical-stockist-ledger-demand-legal-notice",
    },
  ];

  return (
    <>
      {/* Server-Side Rendered JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DIGITAL_DOCUMENT_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="w-full min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero clearing fixed Navbar */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            {/* Hero Eyebrow Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>Order XXXVII CPC Invoice Schedule</span>
              <span className="text-red-500">•</span>
              <span>NI Act §20 Security Cheque Notice</span>
              <span className="text-red-500">•</span>
              <span>Form 20B/21B DL Lock</span>
            </div>

            {/* Single Page H1 matching PDF & Schema headline */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box (40–60 words) under H1 with inline parent Hub link */}
            <div
              aria-label="Statutory Summary"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Statutory Summary &bull; Creditor Legal Workspace
              </span>
              <p>
                Pharma manufacturers, super-stockists, and surgical implant distributors facing defaulted ledgers can deploy this fact-verified demand notice. It incorporates Drug License numbers (Form 20B/21B), an Order XXXVII CPC batch invoice schedule, bars unilateral expired drug returns, and delivers mandatory Section 20 NI Act crystallization intimation before depositing blank security cheques. For institutional multi-account recovery, consult our specialized{" "}
                <Link
                  href="/industries/pharma-medical-devices-recovery"
                  className="text-red-300 font-bold underline hover:text-white transition-colors"
                >
                  Pharma, Medical Devices & Surgical Distributor Recovery Hub
                </Link>
                .
              </p>
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="border-l-2 border-red-500 pl-3">
                <div className="text-base sm:text-xl font-black text-slate-100">7 Days</div>
                <div className="text-[10px] sm:text-xs text-slate-400">s.20 NI Act Cheque Notice Window</div>
              </div>
              <div className="border-l-2 border-emerald-500 pl-3">
                <div className="text-base sm:text-xl font-black text-emerald-400">Order 37 CPC</div>
                <div className="text-[10px] sm:text-xs text-slate-400">Liquidated Tax Invoice Schedule</div>
              </div>
              <div className="border-l-2 border-amber-500 pl-3">
                <div className="text-base sm:text-xl font-black text-amber-400">3x RBI Rate</div>
                <div className="text-[10px] sm:text-xs text-slate-400">MSMED Act s.16 Compound Interest</div>
              </div>
              <div className="border-l-2 border-red-500 pl-3">
                <div className="text-base sm:text-xl font-black text-red-400">Form 20B/21B</div>
                <div className="text-[10px] sm:text-xs text-slate-400">Wholesale License Privity Lock</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumbs Component */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          {/* 2-Column Split: Left Sticky TOC + Main Content */}
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar TOC */}
            <PharmaStockistNoticeTOC />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: The Pharma Credit Trap */}
              <section
                id="heading-pharma-credit-trap"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 mb-4">
                  <span>§1 Commercial Reality</span>
                  <span>•</span>
                  <span>Distributor Credit Paradox</span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  The Pharma Stockist Credit Trap: Ledgers, Returns & Security Cheques
                </h2>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    In the Indian pharmaceutical and surgical distribution supply chain, credit controllers, Carrying & Forwarding (C&F) agents, and super-stockists operate in an environment fraught with asymmetric cash flow risk. Manufacturers deliver life-saving formulations, parenteral infusions, orthopaedic implants, and cardiac stents on rolling credit terms of 21 to 45 days. However, when wholesale stockists or retail chemists face working-capital stress, the standard response is not an open discussion, but a protracted sequence of evasive accounting tactics.
                  </p>
                  <p>
                    Debtor stockists routinely exploit three systemic loopholes: they manufacture spurious claims of &ldquo;unreceived consignments&rdquo; despite signed transport bilties, unilaterally issue unapproved debit notes for &ldquo;slow-moving or expired medicines&rdquo; months after delivery, and threaten criminal allegations of &ldquo;cheque misuse and extortion&rdquo; the moment a creditor hints at depositing an undated security cheque.
                  </p>
                  <p>
                    Standard unpaid-invoice legal notice templates fail miserably in pharmaceutical litigation. Generic templates omit statutory wholesale Drug License numbers (Form 20B/21B) issued under the Drugs and Cosmetics Rules 1945, fail to structure invoices into an Order XXXVII CPC liquidated schedule, and ignore the critical jurisprudence of Section 20 of the Negotiable Instruments Act, 1881.
                  </p>
                  <p>
                    To enforce recovery without falling into debtor-orchestrated legal traps, pharmaceutical creditors must utilize a specialized statutory demand framework. This template bridges the gap by converting unreconciled Marg or Busy ledgers into legally binding commercial instruments, pre-empting frivolous expiry deductions, and lawfully crystallizing signed security cheques. If your recovery involves broader wholesale networks or pharmacy defaults, review our guides on{" "}
                    <Link
                      href="/send-a-legal-notice/pharmacy-invoice-not-cleared"
                      className="text-[#DC2626] font-bold hover:underline"
                    >
                      unpaid pharmacy invoice legal notices
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/distributor-dealer-dues-recovery"
                      className="text-[#DC2626] font-bold hover:underline"
                    >
                      distributor & dealer dues recovery
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 2: Interactive Notice & Clause Workspace */}
              <section
                id="heading-notice-workspace"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 mb-4">
                  <span>§2 Fact-Verified Generator</span>
                  <span>•</span>
                  <span>Interactive Workspace</span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">
                  Interactive Notice & Clause Workspace for Pharma Creditors
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Select your commercial scenario below, customize the financial variables and license numbers, and generate a court-ready legal demand notice with embedded statutory footnotes ①–⑥.
                </p>

                {/* Embedded Client Workspace Island */}
                <PharmaStockistNoticeWorkspace />
              </section>

              {/* Section 3: Section 20 NI Act Protocol */}
              <section
                id="heading-ni-act-s20-protocol"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 mb-4">
                  <span>§3 Banking Law</span>
                  <span>•</span>
                  <span>Inchoate Instruments</span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Section 20 NI Act Protocol for Depositing Stockist Security Cheques
                </h2>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Almost every pharmaceutical manufacturer, C&F agent, and super-stockist insists on collecting one or two blank signed cheques from distributors upon granting rolling credit lines. In commercial parlance, these are termed &ldquo;security cheques&rdquo;. However, when invoices remain unpaid and the creditor unilaterally writes the outstanding ledger sum on the cheque and deposits it, defaulting debtors invariably file police complaints alleging that the cheque was &ldquo;misused&rdquo;, &ldquo;stolen&rdquo;, or &ldquo;filled without authority&rdquo;.
                  </p>
                  <p>
                    To eliminate this criminal defense, creditors must strictly follow the statutory framework of <strong>Section 20 of the Negotiable Instruments Act, 1881</strong> (Inchoate Stamped Instruments), read with the landmark Supreme Court ruling in <em>Bir Singh v. Mukesh Kumar (2019) 4 SCC 197</em>.
                  </p>

                  <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 border border-slate-800 my-6">
                    <h3 className="text-sm sm:text-base font-bold text-red-400 mb-2">
                      The 4-Step Statutory Crystallization Protocol Before Cheque Presentation
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 font-bold">Step 1:</span>
                        <span>
                          <strong>Ledger Reconciliation:</strong> Reconcile the ledger to ensure that all on-account RTGS/NEFT payments are fully credited. As held in <em>Dashrathbhai Trikambhai Patel (2023)</em>, presenting a cheque for even ₹1 more than the actual debt invalidates Section 138 prosecution.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 font-bold">Step 2:</span>
                        <span>
                          <strong>Formal Written Intimation:</strong> Dispatch this formal Section 20 notice explicitly notifying the stockist of the exact crystallized balance and specifying the cheque number held as security.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 font-bold">Step 3:</span>
                        <span>
                          <strong>7-Day Cure Window:</strong> Grant the debtor a clear 7-day cure window to liquidate the crystallized sum via bank transfer or inspect the ledger at your registered office.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 font-bold">Step 4:</span>
                        <span>
                          <strong>Lawful Presentation & Deposit:</strong> Upon expiry of the 7 days without payment, write the exact crystallized debt and current date on the cheque and present it. If dishonoured, issue the 15-day statutory notice under Section 138(b) NI Act.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p>
                    By establishing written proof of prior crystallization, the creditor legally proves implied authority under Section 20. The Magistrate cannot entertain the debtor&apos;s plea of &ldquo;cheque tampering&rdquo;, and the creditor becomes entitled to apply for <strong>20% mandatory interim compensation</strong> under Section 143A of the NI Act at the time of framing charges.
                  </p>
                </div>
              </section>

              {/* Section 4: Order XXXVII CPC Schedule */}
              <section
                id="heading-order-37-schedule"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 mb-4">
                  <span>§4 Procedural Law</span>
                  <span>•</span>
                  <span>Summary Suit Architecture</span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Order XXXVII CPC Schedule: Form 20B/21B Licenses & Delivery Bilties
                </h2>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Under <strong>Order XXXVII Rule 1(2) of the Code of Civil Procedure, 1908</strong>, summary suits can be instituted on the basis of written contracts where the plaintiff seeks only to recover a liquidated debt. In pharmaceutical commercial litigation, each Tax Invoice, accompanied by a delivery challan or transport consignment note (LR), constitutes a binding written contract in law.
                  </p>
                  <p>
                    To ensure that your legal demand notice qualifies as a foundation for an Order XXXVII Summary Suit in the Commercial Court, your notice must incorporate a serialized invoice schedule containing these six mandatory columns:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
                    <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                      <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                        <tr>
                          <th className="p-3">Field</th>
                          <th className="p-3">Statutory Requirement</th>
                          <th className="p-3">Evidentiary Value in Commercial Court</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        <tr>
                          <td className="p-3 font-bold text-slate-900">Drug License No.</td>
                          <td className="p-3">Form 20B / Form 21B</td>
                          <td className="p-3">Proves lawful wholesale sale to authorized licensee under Drugs Rules 1945.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-slate-900">Invoice No. & Date</td>
                          <td className="p-3">GST Tax Invoice Number</td>
                          <td className="p-3">Liquidated debt document under Order XXXVII Rule 1(2)(a) CPC.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-slate-900">Batch & Expiry</td>
                          <td className="p-3">Manufacturer Batch ID & Exp. Date</td>
                          <td className="p-3">Prevents debtor from disputing goods identity or raising fake batch mix-ups.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-slate-900">Transport Bilty (LR)</td>
                          <td className="p-3">Consignment Note & Transporter Name</td>
                          <td className="p-3">Conclusive proof of bailment and physical transit under Carriage by Road Act 2007.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-slate-900">GST e-Way Bill No.</td>
                          <td className="p-3">12-Digit Government Portal Ref.</td>
                          <td className="p-3">Self-authenticating electronic tax record; eliminates denial of physical delivery.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-slate-900">Delivery Receipt</td>
                          <td className="p-3">Signed Challan / Warehouse Stamp</td>
                          <td className="p-3">Proves deemed acceptance under Section 42 of the Sale of Goods Act, 1930.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    When this level of granular statutory documentation is annexed to the notice, the debtor stockist cannot obtain unconditional leave to defend. The Commercial Judge will order the debtor to deposit 50% to 100% of the claimed sum into court as a condition precedent to contesting the suit.
                  </p>
                </div>
              </section>

              {/* Section 5: Barring Unilateral Expiry & Breakage Debits */}
              <section
                id="heading-expiry-breakage-bar"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 mb-4">
                  <span>§5 GST & Commercial Law</span>
                  <span>•</span>
                  <span>Expiry Deductions Bar</span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Barring Unilateral Expired Drug Debits under CGST Act Section 34
                </h2>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    The most common defense raised by defaulting stockists and PCD franchisees is that a substantial portion of the invoiced medicines became &ldquo;expired&rdquo;, &ldquo;near-expiry&rdquo;, or &ldquo;damaged in transit&rdquo;, for which they unilaterally issued debit notes. They claim the right to offset these unilateral debits against your outstanding ledger.
                  </p>
                  <p>
                    Under Indian commercial and tax jurisprudence, this defense is completely untenable for three distinct legal reasons:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                    <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
                      <h3 className="text-xs sm:text-sm font-bold text-amber-900 mb-1.5">
                        1. Deemed Acceptance Rule
                      </h3>
                      <p className="text-xs text-amber-800 leading-relaxed">
                        Under <strong>Section 42 of the Sale of Goods Act, 1930</strong>, the buyer is deemed to have accepted goods when they perform any act inconsistent with the seller&apos;s ownership or retain the goods without intimating rejection within a reasonable time. Keeping stock for 6 to 12 months bars subsequent rejection.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
                      <h3 className="text-xs sm:text-sm font-bold text-amber-900 mb-1.5">
                        2. CGST Section 34(2) Cut-Off
                      </h3>
                      <p className="text-xs text-amber-800 leading-relaxed">
                        Under <strong>Section 34(2) of the CGST Act, 2017</strong>, financial credit notes reducing tax liability cannot be declared after the 30th day of November following the end of the financial year. Retrospective or back-dated debit notes are void and non-cognizable under GST law.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
                      <h3 className="text-xs sm:text-sm font-bold text-amber-900 mb-1.5">
                        3. CBIC Circular No. 72/46/2018
                      </h3>
                      <p className="text-xs text-amber-800 leading-relaxed">
                        The Central Board of Indirect Taxes & Customs clarified that return of time-expired medicines can only be handled as an independent <em>fresh supply</em> under regular tax invoice or destruction under input tax reversal. It cannot be deducted from overdue sale ledgers without bilateral agreement.
                      </p>
                    </div>
                  </div>

                  <p>
                    By explicitly citing these statutory barriers in your legal demand notice, you foreclose the debtor&apos;s ability to manufacture a &ldquo;pre-existing dispute&rdquo; under Section 8 of the Insolvency and Bankruptcy Code (IBC) or before the MSME Facilitation Council. For a deeper analysis on combating expired stock deductions, read our operational guide on{" "}
                    <Link
                      href="/pharma-expired-goods-breakage-credit-note-dispute-stockist-recovery"
                      className="text-[#DC2626] font-bold hover:underline"
                    >
                      pharma expiry & breakage credit-note dispute recovery
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 6: Multi-Channel Service & BSA 2023 s.63 Evidence Dossier */}
              <section
                id="heading-service-and-bsa63"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 mb-4">
                  <span>§6 Evidentiary Proof</span>
                  <span>•</span>
                  <span>BSA 2023 Compliance</span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Multi-Channel Legal Service & BSA 2023 Section 63 Evidence Dossier
                </h2>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Under Indian civil and criminal procedure, proving that a legal notice was validly served on the debtor is the cornerstone of successful litigation. Defaulting stockists routinely evade registered postal envelopes by refusing delivery or colluding with local postmen to return envelopes marked &ldquo;Not Met&rdquo; or &ldquo;Firm Closed&rdquo;.
                  </p>
                  <p>
                    To defeat service evasion, LegalRecovery executes a triple-redundancy delivery protocol, creating a legally unshakeable service docket under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong> (formerly Section 65B of the Indian Evidence Act):
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="w-8 h-8 rounded-full bg-red-100 text-[#DC2626] font-black text-xs flex items-center justify-center mb-2">
                        1
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                        Speed Post RPAD Service
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Dispatched via Department of Posts Speed Post to the registered Drug License address. Under Section 27 of the General Clauses Act, 1897 and Supreme Court ruling in <em>C.C. Alavi Haji v. Palapetty Muhammed (2007)</em>, service is statutorily presumed delivered even if returned unclaimed.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="w-8 h-8 rounded-full bg-red-100 text-[#DC2626] font-black text-xs flex items-center justify-center mb-2">
                        2
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                        Registered WhatsApp Delivery
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Transmitted to the registered proprietor/partner mobile number. Certified delivery reports with dual blue ticks and metadata are captured under Supreme Court directives in <em>Cognizance for Extension of Limitation (2020)</em>.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="w-8 h-8 rounded-full bg-red-100 text-[#DC2626] font-black text-xs flex items-center justify-center mb-2">
                        3
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                        BSA 2023 Section 63 Certificate
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Every electronic dispatch (Email SMTP logs, WhatsApp webhook transmission, and India Post tracking API) is accompanied by a fact-verified Section 63 BSA certificate for direct admissibility in court without secondary witness proof.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Worked Case Study */}
              <section
                id="heading-worked-case-study"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 mb-4">
                  <span>§7 Financial Illustration</span>
                  <span>•</span>
                  <span>Worked Ledger Model</span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Worked Financial Case Study: Overcoming an ₹18.45 Lakh Stockist Default
                </h2>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Consider an actual recovery scenario managed by an empanelled pharmaceutical litigation counsel on behalf of a CDMO manufacturer and super-stockist located in Panchkula, Haryana against a defaulting wholesale surgical distributor in Lucknow, Uttar Pradesh:
                  </p>

                  <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 border border-slate-800 my-6 space-y-4">
                    <div className="border-b border-slate-800 pb-3 flex flex-wrap justify-between items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                        Matter: Biocure Lifesciences vs M/s Apex Medico & Surgical Distributors
                      </span>
                      <span className="text-xs font-semibold bg-emerald-950 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-800">
                        100% Principal + Interest Recovered
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                      <div className="bg-slate-800/80 p-3 rounded-lg">
                        <div className="text-slate-400">Principal Ledger Dues</div>
                        <div className="text-base font-bold text-white">₹18,45,600</div>
                      </div>
                      <div className="bg-slate-800/80 p-3 rounded-lg">
                        <div className="text-slate-400">Aging & Invoices</div>
                        <div className="text-base font-bold text-white">14 Invoices (180+ Days)</div>
                      </div>
                      <div className="bg-slate-800/80 p-3 rounded-lg">
                        <div className="text-slate-400">Debtor Defense</div>
                        <div className="text-base font-bold text-red-300">₹6.2L Expired Stock Debit</div>
                      </div>
                      <div className="bg-slate-800/80 p-3 rounded-lg">
                        <div className="text-slate-400">Statutory Lever Deployed</div>
                        <div className="text-base font-bold text-emerald-400">s.20 NI Act + MSMED s.16</div>
                      </div>
                    </div>

                    <div className="text-xs text-slate-300 space-y-2 pt-2 border-t border-slate-800">
                      <p>
                        <strong>Escalation Execution:</strong> The creditor held a blank signed security cheque (No. 004921, HDFC Bank) from the inception of the agency. Instead of immediately banking the cheque, counsel served this structured demand notice incorporating the debtor&apos;s Form 20B/21B wholesale license, detailed transport bilty numbers, and invoked Section 20 NI Act, giving 7 days to clear the reconciled sum of ₹18,45,600 plus MSMED compound interest. The notice categorically struck down the ₹6.2 Lakh expired stock debit under CGST Act Section 34(2) and Sale of Goods Act Section 42.
                      </p>
                      <p>
                        <strong>Outcome:</strong> Upon realizing that the Section 20 notice legally authorized the presentation of Cheque No. 004921 and would lead to immediate Section 138 criminal summons, personal liability of the proprietor, and an Income Tax Section 43B(h) disallowance, the debtor abandoned the fake expiry claims. On the 6th day post-notice, the debtor remitted ₹10,00,000 via RTGS and executed a post-dated RTGS schedule for the remaining ₹8,45,600 plus agreed interest, avoiding litigation entirely.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Judicial Precedents & High Court Authorities */}
              <section
                id="heading-judicial-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 mb-4">
                  <span>§8 Case Law</span>
                  <span>•</span>
                  <span>Judicial Precedents</span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Judicial Precedents & High Court Authorities on Stockist Dues
                </h2>

                <div className="space-y-4">
                  {CASE_CITATIONS.map((cit, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs border-l-4 border-l-[#DC2626]"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                          {cit.title}
                        </h3>
                        <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                          {cit.citation}
                        </span>
                      </div>
                      <div className="text-xs text-slate-600 mb-2">
                        <span className="font-semibold text-slate-700">{cit.parties}</span> &bull; {cit.date}
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed mb-3">
                        <strong>Facts & Dispute:</strong> {cit.facts}
                      </p>
                      <p className="text-xs text-slate-700 leading-relaxed mb-3">
                        <strong>Judicial Holding:</strong> {cit.holding}
                      </p>
                      <div className="p-2.5 rounded-lg bg-red-50 text-xs font-medium text-red-900">
                        <strong>Practical Creditor Takeaway:</strong> {cit.takeaway}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 9: Deploy Legal Notice CTA */}
              <section
                id="heading-institutional-cta"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 mb-4">
                  <span>§9 Multi-Track Funnel</span>
                  <span>•</span>
                  <span>Instant Escalation</span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">
                  Deploy Legal Notice: Self-Serve ₹999 Test or Bulk Stockist CSV
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Choose between testing a single delinquent stockist account or activating an automated institutional batch recovery desk across your wholesale network.
                </p>

                {/* Dual Track CTA Component */}
                <PharmaStockistNoticeCTA />
              </section>

              {/* Section 10: Frequently Asked Questions */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 border border-slate-200 mb-4">
                  <span>§10 Practitioner FAQs</span>
                  <span>•</span>
                  <span>Credit Cell Clarifications</span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Frequently Asked Questions for Pharma Credit Controllers & Stockists
                </h2>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex items-center justify-between cursor-pointer font-bold text-xs sm:text-sm md:text-base text-slate-900 group-hover:text-[#DC2626]">
                        <span>{faq.question}</span>
                        <span className="ml-2 text-slate-400 group-open:rotate-180 transition-transform">
                          ▼
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Statutory Authorities & Primary Legal Sources */}
              <section
                id="heading-primary-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 border border-slate-200 mb-4">
                  <span>§11 Bare Acts & Regulations</span>
                  <span>•</span>
                  <span>Primary Authorities</span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Statutory Authorities, Governing Rules & Primary Legal Sources
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  All clauses in this template have been verified against bare act provisions and gazette notifications. Access the original statutory authorities below:
                </p>

                <ul className="space-y-2.5">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-800 hover:text-[#DC2626] underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-slate-200 text-[11px] text-slate-500 leading-relaxed">
                  <p>
                    <strong>Editorial & Regulatory Disclaimer:</strong> This legal notice format and clause workspace is published for informational and pre-litigation structuring purposes for pharmaceutical companies, C&Fs, super-stockists, and surgical distributors. Issuance of statutory legal notices, crystallization of negotiable instruments under Section 20 NI Act, and filing of Summary Suits under Order XXXVII CPC must be executed under the professional counsel of an advocate enrolled with the State Bar Council.
                  </p>
                </div>
              </section>

              {/* Cross Links to Sibling Spokes & Related Topics */}
              <div className="p-5 rounded-2xl bg-slate-100 border border-slate-200 space-y-3">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Related Pharmaceutical & Healthcare Recovery Playbooks:
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/industries/pharma-medical-devices-recovery"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-semibold hover:border-red-300 hover:text-red-600 transition-colors"
                  >
                    Parent Hub: Pharma & Medical Devices Recovery
                  </Link>
                  <Link
                    href="/cardiac-stent-orthopedic-implant-hospital-consignment-dues-recovery"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-semibold hover:border-red-300 hover:text-red-600 transition-colors"
                  >
                    Cardiac Stent & Ortho Implant Consignment Dues
                  </Link>
                  <Link
                    href="/medical-equipment-hospital-supply-amc-cmc-payment-default-recovery"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-semibold hover:border-red-300 hover:text-red-600 transition-colors"
                  >
                    Medical Equipment & Hospital AMC/CMC Defaults
                  </Link>
                  <Link
                    href="/pharma-third-party-contract-manufacturing-cdmo-batch-payment-recovery"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-semibold hover:border-red-300 hover:text-red-600 transition-colors"
                  >
                    CDMO Third-Party Batch Payment Recovery
                  </Link>
                  <Link
                    href="/law/section-43bh-msme-payment-rule"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-semibold hover:border-red-300 hover:text-red-600 transition-colors"
                  >
                    Section 43B(h) MSME 45-Day Payment Rule
                  </Link>
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-semibold hover:border-red-300 hover:text-red-600 transition-colors"
                  >
                    MSME Delayed Payment Interest Calculator (3x RBI)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links Component */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
