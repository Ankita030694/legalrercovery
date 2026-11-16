import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import PharmaExpiredStockTableOfContents from "./PharmaExpiredStockTableOfContents";
import PharmaExpiredStockScenarioTabs from "./PharmaExpiredStockScenarioTabs";
import PharmaExpiredStockRecoveryCTA from "./PharmaExpiredStockRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/pharma-expired-goods-breakage-credit-note-dispute-stockist-recovery";
const EXACT_H1 =
  "Defeating Arbitrary 'Expired & Breakage Return' Deductions in Pharma Stockist Recovery: GST Section 34 & Cap Enforcement";
const META_TITLE = "Pharma Expiry & Breakage Credit-Note Dispute Recovery";
const META_DESCRIPTION =
  "Defaulting pharma stockists dump expired stock or claim 12% breakage to evade dues. Enforce 1.5–2% contract caps and CBIC GST Circular 72 rules.";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const LEGAL_REVIEWER = {
  name: "Anuj Anand Malik",
  role: "Advocate & Founder, AMA Legal Solutions",
};

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
        alt: formatAltText("Pharma Expired Goods and Breakage Credit Note Dispute Recovery"),
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

const STATUTORY_MATRIX = [
  {
    remedy: "Time-Barred GST Credit Note Prohibition & Fresh Supply Rule",
    statute: "CGST Act, 2017 (Section 34(2)) & CBIC Circular No. 72/46/2018-GST",
    timing: "Cut-off: 30th November following financial year end or Annual Return date",
    mechanism: "Rejection of retrospective GST credit notes; mandatory treatment of time-barred expired returns as fresh taxable supply by the stockist under Option B",
    relief: "Protects manufacturer from illegal GST output adjustments and defeats stockist attempts to evade payment via unilateral credit notes",
    suitability: "Drug batches returned past statutory deadlines where stockist demands tax-adjusted credit notes without raising commercial invoices",
    tone: "emerald",
  },
  {
    remedy: "Contractual Expiry & Breakage Cap Enforcement",
    statute: "Indian Contract Act, 1872 (Section 73 & Section 74)",
    timing: "Immediate upon receipt of unauthorized debit notes or physical carton dumps",
    mechanism: "Enforce express 1.5%–2% contractual return caps and 90-day pre-expiry advance notification clauses, rendering unilateral debit notes void ab initio",
    relief: "Full restoration of principal ledger receivables; judicial nullification of unverified customary deductions or association trade norms",
    suitability: "Distributors dumping cartons of slow-moving formulations or claiming 8%–15% unverified transit breakage at dealership termination",
    tone: "emerald",
  },
  {
    remedy: "Statutory MSME 45-Day Rule & 3x RBI Penal Interest",
    statute: "MSMED Act, 2006 (Sections 15, 16 & 18) & Income Tax Act s.43B(h)",
    timing: "Upon expiry of 45 days from original supply date or agreed credit period",
    mechanism: "Statutory Advocate Legal Demand Notice followed by petition before State Micro and Small Enterprises Facilitation Council (MSEFC)",
    relief: "Mandatory monthly compound interest at 3 times RBI Bank Rate; triggers tax disallowance against defaulting corporate stockist under s.43B(h)",
    suitability: "Udyam-registered pharmaceutical manufacturers, formulations units, and CDMOs supplying wholesale druggists and super-stockists",
    tone: "slate",
  },
  {
    remedy: "Drugs & Cosmetics Storage & Destruction Audit Challenge",
    statute: "Drugs and Cosmetics Rules, 1945 (Rule 65(17) & Form 20B/21B)",
    timing: "Inspection stage upon stockist tendering historic date-expired formulations",
    mechanism: "Demand state drug inspector audit logs, segregated storage proof ('Date Expired Drugs - Not for Sale'), and batch destruction register",
    relief: "Exposes stockist to drug regulatory licensing suspension for illegal holding of obsolete medicines, compelling commercial ledger settlement",
    suitability: "Stockists attempting to return hoarded medicines dating back 2 to 4 years across multiple non-traceable batches",
    tone: "slate",
  },
  {
    remedy: "Commercial Summary Suit & Pre-Judgment Bank Attachment",
    statute: "Code of Civil Procedure, 1908 (Order XXXVII & Order XXXVIII Rule 5)",
    timing: "Upon expiry of 15-day notice period where signed invoices and ledgers confirm debt",
    mechanism: "Commercial recovery plaint filed in Commercial Court under Commercial Courts Act, 2015 s.2(1)(c)(xviii)",
    relief: "Summary decree without protracted trial unless stockist deposits disputed amount in court; interim freezing of stockist bank accounts",
    suitability: "Aged ledger balances where stockist raised spurious debit notes only after manufacturer initiated formal payment recovery demands",
    tone: "slate",
  },
  {
    remedy: "Competition Commission Challenge to AIOCD Cartel Practices",
    statute: "Competition Act, 2002 (Section 3(1) & Section 3(3)(b))",
    timing: "When local druggist associations threaten product boycotts or mandatory NOCs",
    mechanism: "Information filed before the Competition Commission of India (CCI) for anti-competitive collective boycott and market restriction",
    relief: "Direct penal fines on trade association office-bearers; restraining orders preventing collective boycotts against manufacturer products",
    suitability: "Regional wholesaler associations coercing pharma CFOs to accept 100% expired stock returns under threat of trade ban",
    tone: "emerald",
  },
];

const FAQS = [
  {
    question: "Can a pharma stockist unilaterally deduct expired goods from their pending payment ledger?",
    answer:
      "No. Under Section 73 of the Indian Contract Act, 1872, a buyer cannot unilaterally adjust or reduce an admitted contract price without the express written consent of the seller. If your distributorship agreement contains an expiry return cap (typically 1.5% to 2% of annual turnover) and specifies a protocol (such as 90 days pre-expiry intimation and physical inspection by the CFA), any unilateral debit note issued by the stockist is void ab initio. The pharmaceutical manufacturer is legally entitled to demand the full principal invoice value with commercial interest.",
  },
  {
    question: "What is the statutory GST deadline under Section 34 for issuing credit notes on expired medicines?",
    answer:
      "Under Section 34(2) of the CGST Act, 2017 (amended via Finance Act, 2022), a supplier can only issue a GST credit note to adjust output tax liability up to 30th November following the end of the financial year in which the supply was made, or the date of furnishing the relevant annual return (GSTR-9), whichever is earlier. If a stockist returns expired drugs after this cut-off date, the manufacturer cannot reduce its GST output tax liability. Under CBIC Circular No. 72/46/2018-GST, such time-barred returns must be treated as a fresh taxable supply by the stockist.",
  },
  {
    question: "How does CBIC Circular No. 72/46/2018-GST protect pharmaceutical manufacturers?",
    answer:
      "CBIC Circular No. 72/46/2018-GST clarifies the tax treatment of time-expired drugs. It establishes two distinct mechanisms: Option A allows credit notes within the Section 34(2) timeframe, requiring ITC reversal by the stockist. Option B governs time-barred returns, requiring the stockist to treat the return as a fresh outward supply, issuing a regular commercial tax invoice. Furthermore, under Section 17(5)(h) of the CGST Act, when expired drugs are destroyed, ITC must be reversed. If a stockist dumps stock without proper GST tax invoicing, the manufacturer is denied credit, creating actionable financial damages.",
  },
  {
    question: "Do unwritten AIOCD or regional chemist association trade norms override a written distributor contract?",
    answer:
      "No. The Supreme Court of India and the Competition Commission of India (CCI) have repeatedly affirmed that bilateral written contracts supersede unwritten trade association practices. In multiple pharmaceutical rulings (such as Suo Moto Case No. 05/2013 and subsequent cartelization orders), the CCI held that associations like AIOCD cannot dictate commercial terms, impose mandatory NOCs, or force manufacturers to take back expired stock beyond contractual agreements. Coercive boycotts by chemist bodies violate Section 3 of the Competition Act, 2002.",
  },
  {
    question: "What evidence is required under Section 63 of Bharatiya Sakshya Adhiniyam (BSA 2023) to defeat breakage claims?",
    answer:
      "To defeat post-facto breakage claims, the manufacturer must assemble an electronic evidence dossier certified under Section 63 of BSA 2023 (replacing legacy Section 65B of the Evidence Act). This includes: clean Transporter Lorry Receipts (LRs) and Proof of Delivery (POD) showing receipt without damage endorsements, ERP warehouse dispatch logs, time-stamped CFA gate-inward CCTV footage, and email rejection memos rebutting debit notes within 48 hours of receipt. Under Section 42 of the Sale of Goods Act, retaining goods without prompt written damage intimation constitutes deemed acceptance.",
  },
  {
    question: "Can an MSME pharmaceutical manufacturer claim 3x compound interest on withheld stockist payments?",
    answer:
      "Yes. If the pharmaceutical manufacturer or CDMO is registered under the MSMED Act, 2006 (Udyam Registration), Section 15 mandates payment within the contractually agreed period (maximum 45 days). Under Section 16, any delayed payment attracts mandatory compound interest with monthly rests at three times the RBI Bank Rate from the appointed day until full realization. This statutory interest is non-waivable and overrides conflicting contract clauses.",
  },
  {
    question: "How does Section 43B(h) of the Income Tax Act provide recovery leverage against defaulting stockists?",
    answer:
      "Under Section 43B(h) of the Income Tax Act, 1961, any sum payable by a corporate or partnership stockist to a Micro or Small Enterprise beyond the 45-day statutory window is disallowed as a business expenditure in that financial year, adding directly to their taxable corporate profit. When a stockist withholds payment by raising spurious debit notes, serving an advocate notice highlighting Section 43B(h) disallowance and Form 3CD tax audit reporting creates immediate compliance pressure on their CFO to settle ledger dues.",
  },
  {
    question: "What legal action can be taken if a terminated stockist refuses to settle an aged ledger balance?",
    answer:
      "The recommended protocol is a three-tiered escalation: First, dispatch a 15-day Statutory Advocate Demand Notice itemizing admitted invoice ledgers, rebutting unauthorized debit notes, and invoking MSMED Act s.16 and Contract Act s.73. Second, if payment is not tendered within 15 days, lodge an online reference before the MSME Samadhaan Facilitation Council for recovery of principal plus 3x compound interest. Third, for non-MSME claims or urgent asset protection, file a Commercial Summary Suit under Order XXXVII CPC alongside Order XXXVIII Rule 5 for attachment of the stockist's bank accounts before judgment.",
  },
];

const BREADCRUMB_ITEMS = [
  { label: "B2B Recovery", href: "/industries/pharma-medical-devices-recovery" },
  {
    label: "Pharma Expiry & Breakage Dispute Recovery",
    href: PAGE_URL,
  },
];

export default function PharmaExpiredGoodsBreakageRecoveryPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    datePublished: "2026-11-14T12:00:00+05:30",
    dateModified: "2026-11-14T12:00:00+05:30",
    author: {
      "@type": "Person",
      name: LEGAL_REVIEWER.name,
      jobTitle: LEGAL_REVIEWER.role,
      url: `${SITE_URL}/about`,
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PAGE_URL}`,
    },
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Operational Protocol for Defeating Spurious Pharma Expiry & Breakage Deductions",
    description:
      "A systematic legal and accounting protocol for pharmaceutical manufacturers, CFAs, and super-stockists to reject arbitrary debit notes, enforce contractual caps, and recover overdue ledger balances.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "CFA Gate-Inward Audit & Physical Protest Receipt",
        text: "Inspect incoming cartons immediately upon physical arrival at the warehouse. Refuse unannounced or non-compliant returns or issue a formal conditional receipt stating 'Received for Batch Verification Only — No Commercial Credit Admitted'.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Statutory GST Section 34 & Contractual Cap Reconciliation",
        text: "Audit returned batch numbers against original tax invoices. Segregate batches exceeding the contractual 1.5% expiry cap and identify stock past the Section 34(2) CGST cut-off (30th November).",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Issuance of Formal Debit Note Rebuttal & Legal Notice",
        text: "Serve an Advocate Demand Notice itemizing contractual cap breaches, CBIC Circular 72/46/2018-GST violations, and Sale of Goods Act deemed acceptance, demanding payment within 15 days.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Statutory MSME Samadhaan or Commercial Court Filing",
        text: "Initiate recovery proceedings under Section 18 of the MSMED Act for principal plus 3x RBI compound interest, or file a Commercial Summary Suit under Order XXXVII CPC in Commercial Court.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Judicial Execution & Corporate Asset Attachment",
        text: "Execute the recovery award or decree through attachment of the defaulting stockist's commercial bank accounts, pharmaceutical inventory, and distributor receivables.",
      },
    ],
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
        name: "Pharma & Medical Device Recovery",
        item: `${SITE_URL}/industries/pharma-medical-devices-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Pharma Expiry & Breakage Dispute Recovery",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Dark Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>B2B Pharma Recovery Rail</span>
            <span>&bull;</span>
            <span>CGST s.34 &bull; CBIC Circular 72 &bull; Contract Caps</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary &bull; Creditor Institutional Answer
            </span>
            Defaulting pharmaceutical stockists routinely dump aged, 2-to-3-year-old expired batches or claim 8%–15% unverified breakage to offset legitimate overdue sales ledgers. Under{" "}
            <Link
              href="/industries/pharma-medical-devices-recovery"
              className="text-red-300 font-bold hover:underline"
            >
              pharmaceutical B2B creditor recovery jurisprudence
            </Link>
            , Section 34(2) of the CGST Act sets a strict cut-off (30th November) extinguishing GST credit notes, while CBIC Circular No. 72/46/2018-GST requires expired returns to be treated as fresh taxable supplies. Express 1.5%–2% contractual caps under Section 73 of the Indian Contract Act legally nullify arbitrary trade deductions and defeat informal AIOCD trade guidelines.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                GST s.34 Cut-off
              </p>
              <p className="text-lg sm:text-2xl font-black text-slate-100 mt-1">
                30th Nov
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">Strict subsequent FY limit</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Standard Expiry Cap
              </p>
              <p className="text-lg sm:text-2xl font-black text-emerald-400 mt-1">
                1.5% &ndash; 2.0%
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">Enforceable contract limit</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                MSME Penal Rate
              </p>
              <p className="text-lg sm:text-2xl font-black text-amber-400 mt-1">
                3x Bank Rate
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">Compounded monthly rests</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Recovery Notice
              </p>
              <p className="text-lg sm:text-2xl font-black text-red-400 mt-1">
                15 Days
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">High-impact advocate draft</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 2-Column Split: Left Sticky TOC + Right Content */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6 sm:mt-8">
          {/* Left Sticky Sidebar */}
          <PharmaExpiredStockTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview & The Deduction Trap */}
            <section
              id="heading-expiry-breakage-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Commercial Operational Bottleneck
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                The Pharma Expiry &amp; Breakage Trap: How Stockists Evade Ledger Dues
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Across the Indian pharmaceutical supply chain—spanning ethical formulations, generic distribution corridors, and veterinary medicines—wholesalers and stockists have systematized a devastating financial maneuver: the <strong>arbitrary expiry dump and unilateral breakage debit</strong>. Whenever a pharmaceutical manufacturing enterprise, C&amp;F agent (CFA), or super-stockist demands settlement of an overdue ₹15 Lakh to ₹50 Lakh ledger balance, the defaulting stockist abruptly halts payment, gathers cartons of unsellable, obsolete formulations accumulated over several years, and unloads them at the manufacturer&apos;s warehouse with a unilateral debit note.
                </p>
                <p>
                  In typical trade corridors across Maharashtra, Gujarat, Uttar Pradesh, and West Bengal, stockists routinely claim that unwritten &ldquo;customary trade guidelines&rdquo; from bodies such as the All India Organization of Chemists and Druggists (AIOCD) obligate manufacturers to accept 100% of expired goods at Price to Retailer (PTR) or Maximum Retail Price (MRP). Furthermore, accounts desks routinely slice an arbitrary 8% to 15% off pending invoice ledgers under the guise of &ldquo;transit leakage, crushed cartons, and ampoule breakage&rdquo; without furnishing carrier damage certificates or joint survey reports.
                </p>
                <p>
                  This practice creates an acute working capital crisis for manufacturers. Not only is legitimate liquidity withheld, but under Indian tax law, receiving expired goods outside statutory windows triggers grave tax liabilities. When pharmaceutical companies understand how to integrate <strong>CBIC Circular No. 72/46/2018-GST</strong>, <strong>Section 34 of the CGST Act</strong>, and <strong>contractual expiry-cap clauses</strong> under Section 73 of the Indian Contract Act, 1872, they transform an informal trade dispute into an open-and-shut recovery claim.
                </p>
              </div>

              {/* Red-Alert Callout Box */}
              <div className="mt-6 p-4 sm:p-5 rounded-xl bg-red-50 border border-red-200 text-red-900">
                <div className="flex items-center gap-2 mb-2 font-bold text-xs sm:text-sm text-[#DC2626]">
                  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>The Double Tax Penalty Triggered by Unverified Returns</span>
                </div>
                <p className="text-xs sm:text-sm text-red-800 leading-relaxed">
                  When a stockist unilaterally deducts expired goods and dumps them at your CFA, your enterprise faces a double loss: you are deprived of cash receivables, and under <strong>Section 17(5)(h) of the CGST Act</strong>, upon subsequent physical destruction of those expired goods, you are legally compelled to reverse Input Tax Credit (ITC). Without a proper commercial tax invoice or valid Section 34 credit note, your firm pays the stockist&apos;s tax burden out of pocket.
                </p>
              </div>
            </section>

            {/* Section 2: 5-Stage Operational Recovery Rail SVG Flowchart */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Step-by-Step Institutional SOP
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                5-Stage Operational Protocol for Disputed Expiry Returns &amp; Deductions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Follow this sequential escalation path to dismantle arbitrary debit notes, preserve GST compliance, and compel settlement through statutory creditor remedies.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto py-2">
                <svg
                  viewBox="0 0 880 200"
                  className="w-full h-auto min-w-[760px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={880}
                  height={200}
                >
                  {/* Connectors */}
                  <line x1="160" y1="95" x2="190" y2="95" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="4 4" />
                  <line x1="330" y1="95" x2="360" y2="95" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="4 4" />
                  <line x1="500" y1="95" x2="530" y2="95" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="4 4" />
                  <line x1="670" y1="95" x2="700" y2="95" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="4 4" />

                  {/* Stage 1 */}
                  <rect x="10" y="30" width="150" height="130" rx="14" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="35" cy="55" r="13" fill="#DC2626" />
                  <text x="35" y="60" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">1</text>
                  <text x="56" y="59" fill="#F8FAFC" fontSize="11" fontWeight="bold">CFA Inward Audit</text>
                  <text x="22" y="85" fill="#94A3B8" fontSize="10">Protest Receipt Memo</text>
                  <text x="22" y="102" fill="#94A3B8" fontSize="10">Segregate batch codes</text>
                  <text x="22" y="119" fill="#94A3B8" fontSize="10">Refuse unnotified loads</text>
                  <text x="22" y="142" fill="#38BDF8" fontSize="9" fontWeight="bold">Within 24 Hours</text>

                  {/* Stage 2 */}
                  <rect x="190" y="30" width="140" height="130" rx="14" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="215" cy="55" r="13" fill="#DC2626" />
                  <text x="215" y="60" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">2</text>
                  <text x="236" y="59" fill="#F8FAFC" fontSize="11" fontWeight="bold">Statutory Audit</text>
                  <text x="202" y="85" fill="#94A3B8" fontSize="10">CGST s.34 cut-off check</text>
                  <text x="202" y="102" fill="#94A3B8" fontSize="10">Enforce 1.5% cap formula</text>
                  <text x="202" y="119" fill="#94A3B8" fontSize="10">Disallow false breakage</text>
                  <text x="202" y="142" fill="#38BDF8" fontSize="9" fontWeight="bold">Day 2 &ndash; Day 5</text>

                  {/* Stage 3 */}
                  <rect x="360" y="30" width="140" height="130" rx="14" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="385" cy="55" r="13" fill="#DC2626" />
                  <text x="385" y="60" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">3</text>
                  <text x="406" y="59" fill="#F8FAFC" fontSize="11" fontWeight="bold">Advocate Notice</text>
                  <text x="372" y="85" fill="#94A3B8" fontSize="10">Rebut unilateral debit</text>
                  <text x="372" y="102" fill="#94A3B8" fontSize="10">Invoke CBIC Circ. 72</text>
                  <text x="372" y="119" fill="#94A3B8" fontSize="10">Demand 15-day clearance</text>
                  <text x="372" y="142" fill="#38BDF8" fontSize="9" fontWeight="bold">Day 6 &ndash; Day 10</text>

                  {/* Stage 4 */}
                  <rect x="530" y="30" width="140" height="130" rx="14" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="555" cy="55" r="13" fill="#DC2626" />
                  <text x="555" y="60" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">4</text>
                  <text x="576" y="59" fill="#F8FAFC" fontSize="11" fontWeight="bold">MSEFC / Order 37</text>
                  <text x="542" y="85" fill="#94A3B8" fontSize="10">MSMED 3x penal interest</text>
                  <text x="542" y="102" fill="#94A3B8" fontSize="10">Order 37 Summary Suit</text>
                  <text x="542" y="119" fill="#94A3B8" fontSize="10">Income Tax 43B(h) lever</text>
                  <text x="542" y="142" fill="#38BDF8" fontSize="9" fontWeight="bold">Day 16 &ndash; Day 30</text>

                  {/* Stage 5 */}
                  <rect x="700" y="30" width="150" height="130" rx="14" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="725" cy="55" r="13" fill="#DC2626" />
                  <text x="725" y="60" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">5</text>
                  <text x="746" y="59" fill="#F8FAFC" fontSize="11" fontWeight="bold">Judicial Freeze</text>
                  <text x="712" y="85" fill="#94A3B8" fontSize="10">Attach stockist bank a/c</text>
                  <text x="712" y="102" fill="#94A3B8" fontSize="10">Execution of arbitral award</text>
                  <text x="712" y="119" fill="#94A3B8" fontSize="10">Commercial decree recovery</text>
                  <text x="712" y="142" fill="#38BDF8" fontSize="9" fontWeight="bold">Post-Decree / Award</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    stage: "Stage 1: CFA Gate-Inward Audit & Protest Receipt",
                    timing: "Within 24 Hours",
                    desc: "CFA warehouse issues a conditional receipt ('Received for Inspection Only — No Credit Admitted') and refuses unnotified cartons.",
                  },
                  {
                    stage: "Stage 2: Statutory GST & Cap Audit",
                    timing: "Days 2–5",
                    desc: "Segregate batches against Section 34(2) CGST cut-off (30th Nov) and enforce express 1.5%–2% contractual return caps.",
                  },
                  {
                    stage: "Stage 3: 15-Day Advocate Statutory Demand Notice",
                    timing: "Days 6–10",
                    desc: "Dispatch high-impact legal notice via Speed Post, email, and WhatsApp rebutting unilateral debit notes and demanding ledger payment.",
                  },
                  {
                    stage: "Stage 4: MSME Samadhaan or Order XXXVII CPC Filing",
                    timing: "Days 16–30",
                    desc: "Lodge MSEFC reference for 3x RBI compound interest or file summary commercial suit in Commercial Court.",
                  },
                  {
                    stage: "Stage 5: Bank Account Attachment & Judicial Execution",
                    timing: "Post-Award / Decree",
                    desc: "Execute decree under Order XXI CPC or Section 19 MSMED Act, attaching stockist bank balances and commercial inventory.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-bold text-red-400">{item.stage}</span>
                      <span className="text-[10px] font-mono text-cyan-300 font-bold">{item.timing}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Legal Matrix &bull; 6 Statutory Rails
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Defense Matrix: CGST s.34, CBIC Circular 72 &amp; Contract Caps
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Pharma creditors possess powerful statutory remedies across GST regulations, contract law, MSME protections, and drug licensing mandates to defeat unauthorized stockist debits.
              </p>

              <div className="overflow-x-auto -mx-5 sm:-mx-6 md:-mx-8">
                <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[720px]">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3 px-4 font-bold rounded-tl-lg">Legal Remedy</th>
                      <th className="py-3 px-4 font-bold">Governing Statute</th>
                      <th className="py-3 px-4 font-bold">Statutory Timeline</th>
                      <th className="py-3 px-4 font-bold">Creditor Relief &amp; Impact</th>
                      <th className="py-3 px-4 font-bold rounded-tr-lg">Best Suited For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {STATUTORY_MATRIX.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900 align-top">
                          <span
                            className={`inline-block w-2 h-2 rounded-full mr-2 ${
                              row.tone === "emerald" ? "bg-emerald-500" : "bg-[#DC2626]"
                            }`}
                          />
                          {row.remedy}
                        </td>
                        <td className="py-3.5 px-4 font-medium text-slate-700 align-top">
                          {row.statute}
                        </td>
                        <td className="py-3.5 px-4 font-mono text-xs text-slate-600 align-top">
                          {row.timing}
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 leading-relaxed align-top">
                          {row.relief}
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 leading-relaxed align-top text-xs">
                          {row.suitability}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: 4 Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Interactive Failure Mode Diagnostic
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                4 Stockist Commercial Default Scenarios: Expiry Dumps &amp; Debit Notes
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Click through the 4 most common deduction failure modes encountered by pharmaceutical manufacturers and CFAs to view specific statutory rebuttals and immediate operational recovery SOPs.
              </p>

              <PharmaExpiredStockScenarioTabs />
            </section>

            {/* Section 5: CBIC Circular 72 & CGST s.34 Deep-Dive */}
            <section
              id="heading-cbic-circular-72"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Tax Architecture Deep-Dive
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                CBIC Circular 72/46/2018-GST: Destroyed Drugs &amp; Time-Expired Goods
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  To eliminate rampant ambiguity regarding the return of expired medicines, the Central Board of Indirect Taxes and Customs (CBIC) issued <strong>Circular No. 72/46/2018-GST on 26th October 2018</strong>. This circular provides two distinct legal pathways for pharmaceutical returns:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="font-bold text-xs sm:text-sm text-slate-900 mb-2">
                      Option A &bull; Return Under Credit Note (Section 34)
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Permitted <strong>only within the statutory cut-off</strong> of Section 34(2) of the CGST Act (up to 30th November following the end of the financial year in which the supply occurred). The manufacturer issues a GST credit note, reduces output tax liability, and the stockist reverses equivalent Input Tax Credit (ITC).
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="font-bold text-xs sm:text-sm text-slate-900 mb-2">
                      Option B &bull; Return as Fresh Supply (Beyond Section 34)
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Mandatory for all <strong>time-barred returns</strong> where Section 34(2) timelines have expired. The stockist MUST treat the return as a fresh outward supply, issue a regular commercial Tax Invoice with applicable GST, and pay output tax. The manufacturer takes ITC on this invoice.
                    </p>
                  </div>
                </div>
                <p>
                  <strong>The Section 17(5)(h) ITC Reversal Trap:</strong> When time-expired medicines returned to the manufacturer or CFA are ultimately destroyed (as required under environmental and drug safety norms), Section 17(5)(h) of the CGST Act mandates that ITC attributable to destroyed goods must be reversed. If a stockist returns goods under Option A within Section 34 limits, the manufacturer adjusts output tax and reverses ITC, achieving neutrality. However, if the stockist dumps time-expired stock without issuing a commercial tax invoice under Option B, the manufacturer receives zero tax credit yet must reverse ITC on destruction, sustaining an illegal tax penalty.
                </p>
                <p>
                  Consequently, pharmaceutical CFOs must reject all unilateral credit note deductions for batches past the Section 34 cut-off. In your advocate demand notice, demand that the stockist either tender full payment of the overdue invoice or furnish an Option B commercial tax invoice alongside physical stock verified within contractual caps.
                </p>
              </div>
            </section>

            {/* Section 6: Contract Cap Enforcement vs AIOCD Norms */}
            <section
              id="heading-contract-cap-enforcement"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Contractual Supremacy
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Enforcing Contractual 1.5%–2% Caps Against AIOCD Trade Practice Norms
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  A recurrent defense raised by pharmaceutical stockists in Maharashtra, Delhi, Tamil Nadu, and across India is the reliance on unwritten trade conventions formulated by chemist and druggist associations (e.g., AIOCD, MSCDA, BCDA). Wholesalers routinely argue that &ldquo;trade practice permits 100% expiry return&rdquo; and that contractual caps signed in distributor agreements are unenforceable &ldquo;paper terms&rdquo;.
                </p>
                <p>
                  This defense is judicially hollow. Under Section 73 and Section 74 of the <strong>Indian Contract Act, 1872</strong>, a bilateral contract executed between two commercial entities represents the sovereign law governing their transaction. Unincorporated trade association resolutions cannot vary, alter, or dilute express contractual covenants unless explicitly incorporated into the contract text.
                </p>
                <p>
                  Furthermore, the <strong>Competition Commission of India (CCI)</strong> has established a formidable line of precedents (including <em>In Re: Collective Boycott by Chemists and Druggists Association of Goa</em>, <em>Suo Moto Case No. 05/2013</em>, and orders against regional pharmaceutical trade bodies) holding that trade associations that mandate standard commercial terms, restrict stock return policies, or organize collective boycotts violate Section 3(3)(b) of the Competition Act, 2002.
                </p>
                <p>
                  When drafting distributor agreements and serving statutory notices, pharmaceutical manufacturers must enforce the standard three-tier contractual safeguard:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                  <li>
                    <strong>The 1.5%–2% Annual Expiry Cap:</strong> Total credit notes for date-expired formulations shall not exceed 1.5% to 2% of the stockist&apos;s total annual net invoiced turnover. All returns in excess of this cap are subject to immediate commercial disallowance.
                  </li>
                  <li>
                    <strong>90-Day Pre-Expiry Notification Rule:</strong> The stockist must issue written or electronic notification to the CFA at least 90 days prior to product expiry to enable brand redeployment or institutional liquidation. Failure to notify forfeits return eligibility.
                  </li>
                  <li>
                    <strong>Batch Traceability Requirement:</strong> Only formulations bearing batch numbers directly invoiced to the respective stockist within the preceding 12 months qualify for return, barring the dumping of third-party or secondary-market stock.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 7: Drugs & Cosmetics Act Rule 65 Compliance */}
            <section
              id="heading-drugs-cosmetics-rule65"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Regulatory Compliance Hook
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Drugs &amp; Cosmetics Rule 65 &amp; Form 20B/21B Compliance in Stock Returns
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Beyond tax and contract law, pharmaceutical manufacturers hold a potent regulatory lever under the <strong>Drugs and Cosmetics Act, 1940</strong> and the <strong>Drugs and Cosmetics Rules, 1945</strong>. Wholesale drug distribution is conducted under strict licensing conditions prescribed under Form 20B (allopathic non-biological drugs) and Form 21B (biological drugs).
                </p>
                <p>
                  Under <strong>Rule 65(17) of the Drugs and Cosmetics Rules, 1945</strong>:
                </p>
                <blockquote className="bg-slate-50 border-l-4 border-slate-400 p-4 italic text-slate-600 my-3 text-xs sm:text-sm">
                  &ldquo;No drug shall be sold or offered for sale after the date of expiration of potency specified on the label. Date-expired drugs shall be stored separately in a designated enclosure marked &lsquo;Date Expired Drugs — Not for Sale&rsquo; and records of their disposal maintained.&rdquo;
                </blockquote>
                <p>
                  When a defaulting stockist hoards date-expired drugs for two to three years and suddenly attempts to dump them at a manufacturer&apos;s warehouse upon receiving a payment demand, the stockist almost invariably commits multiple regulatory infractions:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                  <div className="border border-slate-200 rounded-xl p-4 bg-white">
                    <p className="font-bold text-xs sm:text-sm text-slate-900 mb-1">
                      Improper Storage &amp; Co-Mingling
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Failure to segregate date-expired stock in designated locked enclosures violates Form 20B/21B wholesale drug license conditions, exposing the stockist to immediate license suspension by the State Food &amp; Drug Administration (FDA).
                    </p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-4 bg-white">
                    <p className="font-bold text-xs sm:text-sm text-slate-900 mb-1">
                      Unlawful Transit Without Passbooks
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Moving expired medicines without proper drug disposal challans, E-Way bills, and batch destruction authorization constitutes illegal movement of misbranded or adulterated pharmaceuticals under Section 18 of the Drugs Act.
                    </p>
                  </div>
                </div>
                <p>
                  In your advocate statutory demand notice, highlighting that the stockist&apos;s hoarded inventory will be reported to the State Drug Licensing Authority for inspection under Rule 65 creates immense regulatory jeopardy, swiftly dismantling their pretext for withholding commercial payments.
                </p>
              </div>
            </section>

            {/* Section 8: Worked Financial Ledger */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Forensic Financial Reconciliation
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Worked Recovery Ledger: Rebutting an Arbitrary ₹18,40,000 Stockist Debit
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Review this real-world financial audit model illustrating how a formulations manufacturer dismantled an arbitrary ₹10,92,400 deduction claimed by a regional wholesale stockist, fully recovering the principal balance alongside statutory MSME compound penal interest.
              </p>

              {/* Financial Breakdown Card */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl mb-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 pb-4 mb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Pharma Commercial Dispute Forensic Audit
                    </span>
                    <p className="text-base sm:text-lg font-bold text-white mt-0.5">
                      Antibiotics &amp; Pediatric Suspensions Supply Dispute
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400">Total Billed Invoices</span>
                    <p className="text-xl sm:text-2xl font-black text-white">&rupee;18,40,000</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                    <span className="text-slate-300">Total Invoiced Sales (3 Invoices, Net of Taxes)</span>
                    <span className="font-mono font-bold text-white">&rupee;18,40,000</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-slate-800/80 text-red-400">
                    <div>
                      <span>Stockist Claimed Expiry Debit (Dump of 2-year old batches)</span>
                      <span className="block text-[11px] text-red-400/80">Deduction rejected: past CGST s.34 &amp; exceeds 1.5% cap</span>
                    </div>
                    <span className="font-mono font-bold">(-) &rupee;8,90,000</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-slate-800/80 text-red-400">
                    <div>
                      <span>Stockist Claimed 11% Transit Breakage &amp; Leakage</span>
                      <span className="block text-[11px] text-red-400/80">Deduction rejected: clean LR Proof of Delivery without remarks</span>
                    </div>
                    <span className="font-mono font-bold">(-) &rupee;2,02,400</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-slate-800/80 text-emerald-400">
                    <div>
                      <span>Permissible Contractual Expiry Cap (1.5% of annual turnover)</span>
                      <span className="block text-[11px] text-emerald-400/80">Lawfully credited under Section 34 within window</span>
                    </div>
                    <span className="font-mono font-bold">(+) &rupee;27,600</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-slate-800/80 text-emerald-400">
                    <div>
                      <span>Permissible Verified Breakage (0.5% standard contract tolerance)</span>
                      <span className="block text-[11px] text-emerald-400/80">Allowed upon physical bottle neck verification</span>
                    </div>
                    <span className="font-mono font-bold">(+) &rupee;9,200</span>
                  </div>

                  <div className="flex justify-between items-center py-2.5 border-b border-slate-700 bg-white/5 px-3 rounded-lg">
                    <span className="font-bold text-slate-200">Restored Net Principal Debt</span>
                    <span className="font-mono font-extrabold text-lg text-emerald-300">&rupee;18,03,200</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-slate-800/80 text-amber-300">
                    <div>
                      <span>MSMED Act Section 16 Interest (3x RBI Bank Rate ~ 19.5% p.a. for 180 days)</span>
                      <span className="block text-[11px] text-amber-300/80">Compounded monthly rests from 46th day past delivery</span>
                    </div>
                    <span className="font-mono font-bold">&rupee;1,82,450</span>
                  </div>

                  <div className="flex justify-between items-center pt-3 text-base sm:text-lg font-black bg-red-950/60 p-4 rounded-xl border border-red-800/80">
                    <span className="text-white">Total Recoverable Demand (Principal + Interest)</span>
                    <span className="font-mono text-xl sm:text-2xl text-emerald-400">&rupee;19,85,650</span>
                  </div>
                </div>
              </div>

              {/* Explanatory Note */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
                <p className="font-bold text-slate-900">
                  Key Takeaway for Pharmaceutical CFOs &amp; Credit Controllers:
                </p>
                <p>
                  By performing a rigorous batch reconciliation and enforcing contractual clauses under the Indian Contract Act, the manufacturer transformed an apparent ₹7,47,600 disputed settlement into an enforceable <strong>₹19,85,650 statutory recovery claim</strong>. The defaulting stockist, facing MSME Samadhaan proceedings and Section 43B(h) tax audit disallowance, settled the full ₹18,03,200 principal within 12 days of statutory advocate notice service.
                </p>
              </div>
            </section>

            {/* Section 9: BSA 2023 Section 63 Evidence Checklist */}
            <section
              id="heading-bsa-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Forensic Admissibility Protocol
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                BSA 2023 Section 63 Electronic Evidence Dossier for Pharma Audits
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Under Section 63 of the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA 2023)</strong>—which replaced Section 65B of the Indian Evidence Act, 1872 on 1st July 2024—electronic records, ERP logs, and digital correspondence are fully admissible in court provided they are certified by the person in lawful charge of the computer device. Assemble this 6-point evidentiary dossier before dispatching your demand notice:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Signed Dealership Agreement & Expiry Policy",
                    desc: "Countersigned distributor agreement containing express 1.5%–2% annual expiry caps, 90-day pre-expiry notification clauses, and batch verification covenants.",
                  },
                  {
                    title: "GST Invoices & e-Way Bill Ledger",
                    desc: "Digitally signed GST tax invoices (Form GSTR-1 filings) matching corresponding electronic waybills (E-Way bills) establishing actual delivery dates.",
                  },
                  {
                    title: "Clean Transporter Lorry Receipts (LRs)",
                    desc: "Transporter delivery acknowledgments and Proof of Delivery (POD) signed by the stockist warehouse without shortage, leak, or breakage remarks.",
                  },
                  {
                    title: "ERP Batch Inward & Outward Track-and-Trace Logs",
                    desc: "System-generated SAP / ERP audit trail detailing individual formulation batch numbers, manufacturing dates, carton serials, and expiry schedules.",
                  },
                  {
                    title: "CFA Gate-Inward Protest Receipts & Inspection Memos",
                    desc: "Warehouse gatekeeper receipt stamped 'Received for Inspection Only' and formal written rejection memos dispatched within 48 hours of unauthorized stock arrival.",
                  },
                  {
                    title: "BSA Section 63 Certificate of Digital Records",
                    desc: "Statutory affidavit and certificate signed by the IT Systems Administrator or Finance Controller verifying electronic integrity of emails, ERP ledgers, and logs.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">{item.title}</p>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-8">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 10: Dual-Track B2B CTAs */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-slate-100 rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Creditor Action Plan
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                Deploy Dedicated Pharma Legal Recovery: Single Case or Bulk CSV Desk
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Whether you need to recover a single ₹10 Lakh disputed debit note from an erring wholesaler or resolve a ₹12 Crore aged ledger across 250 regional stockists, choose your recovery track below:
              </p>

              <PharmaExpiredStockRecoveryCTA />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Executive Queries &bull; AI-Search Optimized
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-6">
                Frequently Asked Questions on Pharma Expiry &amp; Breakage Recovery
              </h2>

              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 transition-all open:bg-white open:shadow-xs"
                  >
                    <summary className="flex items-center justify-between gap-3 font-bold text-xs sm:text-sm text-slate-900 cursor-pointer list-none">
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-slate-200 group-open:bg-[#DC2626] group-open:text-white text-slate-700 text-[11px] font-bold flex items-center justify-center shrink-0 transition-colors">
                          Q
                        </span>
                        {faq.question}
                      </span>
                      <svg
                        className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pl-7 border-t border-slate-100 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory Sources & Regulatory Precedents */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Authoritative References
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Authorities, CBIC Circulars &amp; Precedential Framework
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <p className="font-bold text-slate-800">CBIC Circular No. 72/46/2018-GST</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Clarification on Return of Time-Expired Drugs or Medicines under GST (Options A &amp; B)
                  </p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <p className="font-bold text-slate-800">Central Goods and Services Tax Act, 2017</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Section 34(1), 34(2) Credit Notes &amp; Section 17(5)(h) ITC Reversal on Destroyed Goods
                  </p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <p className="font-bold text-slate-800">Indian Contract Act, 1872</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Section 73 (Breach of Contract) &amp; Section 74 (Liquidated Damages vs Unilateral Offsets)
                  </p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <p className="font-bold text-slate-800">Drugs and Cosmetics Rules, 1945</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Rule 65(17) (Storage and Segregation of Date-Expired Drugs) &amp; Wholesale Licensing Forms 20B/21B
                  </p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <p className="font-bold text-slate-800">MSMED Act, 2006 &amp; Income Tax Act</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Sections 15–18 (45-day payment &amp; 3x RBI compound interest) &amp; Section 43B(h) disallowance
                  </p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <p className="font-bold text-slate-800">Competition Act, 2002 &amp; CCI Precedents</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Section 3(3)(b) (Prohibition of Association Cartels, Boycotts &amp; Mandatory Return Directives)
                  </p>
                </div>
              </div>

              {/* Advocate Reviewer Footnote */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
                <div>
                  <p className="font-semibold text-slate-700">
                    Reviewed &amp; Vetted by {LEGAL_REVIEWER.name}
                  </p>
                  <p className="text-[11px] text-slate-400">{LEGAL_REVIEWER.role}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    MSME Interest Calculator &rarr;
                  </Link>
                  <Link
                    href="/industries/pharma-medical-devices-recovery"
                    className="text-slate-600 hover:text-slate-900"
                  >
                    Pharma Industry Hub
                  </Link>
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
