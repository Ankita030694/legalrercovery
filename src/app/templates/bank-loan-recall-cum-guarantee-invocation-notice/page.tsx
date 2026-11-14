import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import LoanRecallNoticeTOC from "./LoanRecallNoticeTOC";
import LoanRecallNoticeWorkspace from "./LoanRecallNoticeWorkspace";
import LoanRecallNoticeCTA from "./LoanRecallNoticeCTA";

export const revalidate = 86400;

const PAGE_URL = "/templates/bank-loan-recall-cum-guarantee-invocation-notice";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
// TRIM_FOR_SF_SEO: Tightened from 62ch PDF title (55ch) while preserving primary keyword
const PAGE_TITLE = "Bank Loan Recall cum Guarantee Invocation Notice Format";
// TRIM_FOR_SF_SEO: Tightened from 166ch PDF description (150ch) preserving all statutory facts
const PAGE_DESCRIPTION =
  "Downloadable bank loan recall & explicit guarantee invocation template compliant with RBI Penal Charges Directions (no compounding of penal interest).";
// PDF Exact H1 (116ch) — kept strictly identical to ARTICLE_SCHEMA.headline
const H1_TEXT =
  "Advocate-Vetted Loan Recall cum Personal/Corporate Guarantee Invocation Notice Template (RBI Penal-Charge Compliant)";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository — wire named Bar Council-enrolled banking panel advocate reviewer once created.

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

const PENAL_COMPARISON_ROWS = [
  {
    dimension: "Regulatory Classification",
    legacy: "Adds extra 2% to 4% p.a. 'penal interest' onto the lending rate spread.",
    compliant: "Assessed separately as non-interest Penal Charges per RBI Circular dated 18 August 2023.",
  },
  {
    dimension: "Compounding & Capitalization",
    legacy: "Monthly/quarterly rests capitalize penal interest onto principal, compounding interest-on-penalty.",
    compliant: "Zero capitalization. Normal interest accrues solely on principal; penal charges stay uncompounded.",
  },
  {
    dimension: "DRT Section 19 & Tribunal Scrutiny",
    legacy: "Triggers borrower accounting objections, re-casting orders, and delayed OA admission.",
    compliant: "Clean Schedule A bifurcation (Principal + Normal Interest + Penal Charges) withstands DRT scrutiny.",
  },
  {
    dimension: "Personal & Corporate Guarantors",
    legacy: "Guarantor marked merely as 'CC / Copy To' at bottom of borrower recall letter.",
    compliant: "Guarantors named as Primary Addressees with explicit Section 126/128 on-demand invocation.",
  },
  {
    dimension: "Limitation & IBC s.95 Form B",
    legacy: "Risk of time-barred plea because continuing on-demand guarantee was never expressly invoked.",
    compliant: "Crystallizes cause of action per Syndicate Bank v. Beleri and satisfies NCLT/DRT pre-filing proof.",
  },
  {
    dimension: "GST & CBS Ledger Reconciliation",
    legacy: "Lump-sum claim hides penal interest inside interest head, creating audit mismatches.",
    compliant: "Maps directly to Core Banking (CBS) uncapitalized Penal Charges sub-head with separate 18% GST.",
  },
];

const MANDATORY_CLAUSES = [
  {
    clause: "1. Sanction Recital & Security Matrix",
    statute: "Indian Contract Act s.10 & RDB Act s.19",
    detail:
      "Specifies sanction letter date, sanctioned limit, contractual interest benchmark (EBLR/MCLR), hypothecation/mortgage deeds, and Demand Promissory Note.",
  },
  {
    clause: "2. Event of Default & IRACP NPA Date",
    statute: "RBI Master Circular on IRACP Norms",
    detail:
      "Records exact continuous default date and 90-day Non-Performing Asset classification date so SARFAESI and DRT pleadings align identically.",
  },
  {
    clause: "3. Facility Recall & Acceleration",
    statute: "Contractual Default Acceleration Clause",
    detail:
      "Revokes working capital / CC/OD limits immediately and accelerates all future term-loan installments into one crystallized demand.",
  },
  {
    clause: "4. Explicit s.126/128 Guarantee Invocation",
    statute: "Indian Contract Act ss.126, 128 & 129",
    detail:
      "Directly demands repayment from Personal and Corporate Guarantors jointly and severally, expressly invoking the continuing guarantee without requiring prior execution against the borrower.",
  },
  {
    clause: "5. Schedule A (Uncapitalized Penal Charges)",
    statute: "RBI Circular DoR.MCS.REC.28/01.01.001/2023-24",
    detail:
      "Separates (A) Principal, (B) Normal Contractual Interest, (C) Uncapitalized Penal Charges, and (D) GST, declaring zero compounding of penal charges.",
  },
  {
    clause: "6. Negative Lien & Multi-Forum Reservation",
    statute: "RDB s.19(12)-(13), O.38 R.5 CPC & SARFAESI",
    detail:
      "Restrains asset alienation, alerts CIBIL/NeSL reporting, and reserves e-DRT OA, NCLT s.95/s.7, Order XXXVII Civil Suit, s.138 NI Act, and s.25 PSS Act.",
  },
];

const WORKFLOW_STAGES = [
  {
    step: "Stage 1",
    title: "CBS Ledger Bifurcation",
    desc: "Separate Principal, Normal Interest, and Uncapitalized Penal Charges as of recall date.",
  },
  {
    step: "Stage 2",
    title: "Joint Recall + s.128 Draft",
    desc: "Address Borrower & Guarantors equally (never CC) with RBI Penal-Charge declaration.",
  },
  {
    step: "Stage 3",
    title: "Tri-Channel Dispatch",
    desc: "Serve simultaneously via Email, Business WhatsApp, and Speed Post RPAD with s.63 BSA logs.",
  },
  {
    step: "Stage 4",
    title: "7-15 Day Cure / OTS Desk",
    desc: "Log settlements, OTS requests, or formal refusals to crystallize guarantee cause of action.",
  },
  {
    step: "Stage 5",
    title: "e-DRT / IBC / Civil Filing",
    desc: "Trigger s.19 RDB OA, s.95 Form B / s.7 IBC, Order 37 Suit, or Pre-Litigation Lok Adalat.",
  },
];

const EVIDENCE_CHECKLIST = [
  {
    item: "1. Sanction Letter, Loan Agreement & DPN",
    purpose: "Establishes facility limit, acceleration covenant, and base contractual interest spread.",
  },
  {
    item: "2. Continuing Guarantee Deeds & Board Resolutions",
    purpose: "Proves Personal Guarantor consent and Corporate Guarantor authorization under Companies Act.",
  },
  {
    item: "3. CBS Statement (Bankers' Books Act s.2A/4)",
    purpose: "Certified printout demonstrating Principal, Normal Interest, and uncompounded Penal Charges.",
  },
  {
    item: "4. Balance Confirmation / Revival Letters (s.18)",
    purpose: "Extends limitation on older CC/OD limits before recall issuance.",
  },
  {
    item: "5. CERSAI & ROC CHG-1 Charge Certificates",
    purpose: "Confirms perfected priority before parallel SARFAESI s.13(2) or DRT attachment relief.",
  },
  {
    item: "6. Tri-Channel RPAD + s.63 BSA Delivery Proof",
    purpose: "Proves postal receipts, tracking POD, email headers, and WhatsApp read receipts in DRT.",
  },
];

const SUPREME_COURT_PRECEDENTS = [
  {
    citation: "(2006) 11 SCC 509",
    title: "On-Demand Continuing Guarantee Limitation Starts Only Upon Invocation",
    parties: "Syndicate Bank v. Channaveerappa Beleri & Ors. — Supreme Court of India",
    holding:
      "The Supreme Court held that where a guarantee agreement renders the guarantor liable 'on demand', a cause of action against the guarantor arises only when the creditor makes a formal written demand invoking the guarantee and the guarantor fails to pay — not automatically on the borrower's first EMI default.",
    impact:
      "Never mark Personal or Corporate Guarantors as mere 'CC' recipients on borrower recall notices. Name them directly as Noticees and demand payment under Section 128 to crystallize limitation cleanly.",
  },
  {
    citation: "(2009) 9 SCC 478",
    title: "Guarantor Liability Is Co-Extensive; Bank Need Not Exhaust Borrower First",
    parties: "Industrial Investment Bank of India Ltd. v. Biswanath Jhunjhunwala — Supreme Court",
    holding:
      "Reaffirming Bank of Bihar v. Damodar Prasad, the Court held that under Section 128 of the Indian Contract Act, 1872, the surety's liability is co-extensive with the principal debtor, and the creditor bank has complete discretion to enforce recovery directly against the guarantor alongside or prior to exhausting borrower remedies.",
    impact:
      "Empowers bank panel advocates to demand 100% of Schedule A dues directly from solvent guarantors in the very first recall notice and join them in DRT Section 19 OAs.",
  },
  {
    citation: "(2021) 9 SCC 321",
    title: "Corporate Insolvency Resolution Does Not Automatically Discharge Personal Guarantors",
    parties: "Lalit Kumar Jain v. Union of India & Ors. — Supreme Court of India",
    holding:
      "Upholding IBC Part III personal guarantor notifications, the Court ruled that sanctioning a corporate borrower's resolution plan or involuntary haircut under IBC does not ipso facto absolve personal guarantors of their co-extensive contractual liability under Section 128 Contract Act.",
    impact:
      "Serves as an essential warning clause inside bank recall notices: directors cannot shield personal assets behind corporate restructuring once their personal guarantee has been validly invoked.",
  },
  {
    citation: "(2002) 1 SCC 367 + RBI Circular 2023",
    title: "Prohibition on Penal Interest Capitalization Reinforced by RBI Fair Lending Norms",
    parties: "Central Bank of India v. Ravindra & Ors. (Constitution Bench) & RBI DoR.MCS.REC.28",
    holding:
      "A five-judge Constitution Bench barred capitalization of penal interest onto principal. Building on that doctrine, RBI's Circular dated 18 August 2023 abolished 'penal interest' altogether in favour of fixed, transparent Penal Charges that cannot be compounded or added to the interest rate.",
    impact:
      "Replaces obsolete 2% compounded penal-interest recall formats with an itemized, non-compounded Schedule A that defeats borrower counter-objections at DRT admission.",
  },
];

const FAQS = [
  {
    question: "Why do outdated loan recall templates from Scribd or LawRato fail in DRT?",
    answer:
      "Most public templates still demand 'compounded penal interest' added monthly onto principal, which directly violates the RBI Fair Lending Practice Directions on Penal Charges in Loan Accounts (Circular dated 18 August 2023) and the Constitution Bench ruling in Central Bank of India v. Ravindra. Borrowers exploit this defect in DRT Section 19 proceedings to challenge account statements and stall recovery.",
  },
  {
    question: "Why is marking Personal or Corporate Guarantors as 'CC / Copy To' legally defective?",
    answer:
      "Under Syndicate Bank v. Channaveerappa Beleri (2006) 11 SCC 509, an on-demand continuing guarantee under Sections 126–129 of the Indian Contract Act is triggered only by an explicit written demand upon the guarantor. Sending a mere courtesy copy ('CC') addressed only to the borrower risks arguments that no statutory invocation was made for DRT or IBC Section 95 Form B proceedings.",
  },
  {
    question: "How must Schedule A bifurcate overdue amounts under RBI Penal Charges rules?",
    answer:
      "Schedule A in a bank recall notice should display four distinct rows as of the ledger cut-off date: (A) Outstanding Principal Balance, (B) Normal Contractual Interest Accrued at the sanctioned rate, (C) Uncapitalized Penal Charges computed separately without compounding, and (D) Applicable 18% GST on Penal Charges or lawful out-of-pocket costs.",
  },
  {
    question: "What cure period should banks grant in a pre-DRT loan recall cum guarantee invocation notice?",
    answer:
      "Scheduled commercial banks, Small Finance Banks, and Cooperative Banks typically grant 7 to 15 days from receipt depending on the facility agreement and asset-siphoning risk. A 15-day demand window establishes undisputed commercial reasonableness before filing an e-DRT Section 19 OA or Commercial Summary Suit.",
  },
  {
    question: "Can this notice be used for loans below the ₹20 Lakh DRT pecuniary limit?",
    answer:
      "Yes. While RDB Act Section 1(4) reserves DRT jurisdiction for debts of ₹20 Lakh and above, the same recall cum Section 128 guarantee invocation structure serves as the foundational pre-litigation demand before Commercial Summary Suits (Order XXXVII CPC), Pre-Institution Mediation (s.12A), Pre-Litigation Lok Adalat, or neutral Arbitration.",
  },
  {
    question: "How should banks dispatch recall notices to prevent borrower denial of service?",
    answer:
      "Banks should execute synchronized Tri-Channel dispatch: Speed Post with Acknowledgement Due (Speed Post RPAD) to registered, factory, and residential addresses under Section 27 of the General Clauses Act, combined with verified Email and Business WhatsApp bearing a Section 63 Bharatiya Sakshya Adhiniyam (BSA), 2023 certificate.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "RBI Master Direction — Fair Lending Practice: Penal Charges in Loan Accounts (DoR.MCS.REC.28/01.01.001/2023-24)",
    url: "https://www.rbi.org.in/",
  },
  {
    title: "The Indian Contract Act, 1872 — Sections 126, 127, 128 & 129 (Continuing & Co-Extensive Guarantees — India Code)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Recovery of Debts and Bankruptcy (RDB) Act, 1993 — Section 19 & Official e-DRT Filing Portal",
    url: "https://drt.gov.in/",
  },
  {
    title: "Insolvency and Bankruptcy Code, 2016 — Personal Guarantors Rule 7(1) Form B & s.7 CIRP (IBBI)",
    url: "https://ibbi.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam (BSA), 2023 — Section 63 Electronic Evidence & Bankers' Books Proof (India Code)",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  url: CANONICAL_URL,
  mainEntityOfPage: CANONICAL_URL,
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  inLanguage: "en-IN",
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository — wire reviewer schema once created.
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
    url: `${SITE_URL}/about`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/lrlogo.png`,
      width: 512,
      height: 512,
    },
  },
};

const CREATIVE_WORK_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["DigitalDocument", "CreativeWork"],
  name: H1_TEXT,
  description: PAGE_DESCRIPTION,
  url: CANONICAL_URL,
  learningResourceType: "Legal Notice Template",
  inLanguage: "en-IN",
  isAccessibleForFree: true,
  encodingFormat: ["application/msword", "text/plain", "application/pdf"],
  audience: {
    "@type": "Audience",
    audienceType: "Bank Panel Advocates, Branch Credit & Legal Managers, SARB & SAMB Officers",
  },
  about: [
    "Loan Recall Notice",
    "Personal and Corporate Guarantee Invocation",
    "Indian Contract Act Section 128",
    "RBI Penal Charges Circular",
    "RDB Act Section 19 e-DRT",
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
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Templates", item: `${SITE_URL}/templates` },
    { "@type": "ListItem", position: 3, name: PAGE_TITLE, item: CANONICAL_URL },
  ],
};

export default function BankLoanRecallGuaranteeTemplatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CREATIVE_WORK_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Hero Header */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IND-01 Bank Notice Template</span>
              <span className="text-red-500">&bull;</span>
              <span>RBI Penal-Charge Compliant</span>
              <span className="text-red-500">&bull;</span>
              <span>Contract Act s.126/128 &amp; RDB s.19</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            {/* 40-60 Word Statutory Summary Linking Parent Hub */}
            <div
              aria-label="Statutory Template Summary"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Bank Counsel Brief (IND-01 Spoke)
              </span>
              <p>
                Built for Scheduled Commercial, Small Finance, and Cooperative Banks within our{" "}
                <Link href="/industries/banks-loan-recovery" className="text-red-300 underline font-bold hover:text-white">
                  Banks Loan &amp; NPA Legal Recovery Hub
                </Link>
                , this advocate-vetted recall template pairs an uncompounded RBI Penal-Charges Schedule A with explicit Section 126/128 invocation of Personal and Corporate Guarantees—eliminating borrower DRT accounting objections.
              </p>
            </div>

            {/* 4-Card Statutory Metrics Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 sm:p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1">RBI Circular Compliant</p>
                <p className="text-base sm:text-lg font-black text-white">Zero Compounding</p>
                <p className="text-[11px] text-slate-300 mt-0.5">Penal charges separate from principal</p>
              </div>
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 sm:p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1">Contract Act Invocation</p>
                <p className="text-base sm:text-lg font-black text-white">ss. 126, 128 &amp; 129</p>
                <p className="text-[11px] text-slate-300 mt-0.5">No defective &ldquo;CC&rdquo; guarantor copy</p>
              </div>
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 sm:p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1">Pre-OA Prerequisite</p>
                <p className="text-base sm:text-lg font-black text-white">&ge; &rupee;20L e-DRT Ready</p>
                <p className="text-[11px] text-slate-300 mt-0.5">Also fits O.37 Civil &amp; Lok Adalat</p>
              </div>
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 sm:p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1">Admissible Dispatch</p>
                <p className="text-base sm:text-lg font-black text-white">Email + WA + RPAD</p>
                <p className="text-[11px] text-slate-300 mt-0.5">BSA 2023 s.63 &amp; BBE Act s.2A/4</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content + Sticky TOC Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Templates", href: "/templates" },
                { label: "Loan Recall & Guarantee Notice", href: PAGE_URL },
              ]}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:items-stretch">
            <LoanRecallNoticeTOC />

            <main className="flex-1 min-w-0 space-y-10">
              {/* Section 1: Gap to Fill — Compounded Penal Interest & Defective CC */}
              <section
                id="heading-penal-interest-gap"
                aria-labelledby="heading-penal-interest-gap-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block">
                  Regulatory Gap Analysis for Bank Legal Teams
                </span>
                <h2
                  id="heading-penal-interest-gap-title"
                  className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why Compounded Penal Interest Invalidates Bank Recall Notices
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Across Indian Debts Recovery Tribunals (DRTs) and Commercial Courts, defaulting borrowers routinely stall admission of Section 19 Original Applications by attacking outdated bank loan recall templates downloaded from legacy legal portals such as Scribd or LawRato. Those legacy drafts carry two fatal flaws: they demand <strong>&ldquo;compounded penal interest&rdquo;</strong> folded into principal rests, and they treat Personal or Corporate Guarantors as passive <em>&ldquo;CC / Copy To&rdquo;</em> recipients rather than primary statutory addressees.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the Reserve Bank of India&apos;s Fair Lending Practice Directions on <strong>Penal Charges in Loan Accounts</strong> (Circular No. <code>RBI/2023-24/53 DoR.MCS.REC.28/01.01.001/2023-24</code> dated August 18, 2023), banks and NBFCs are strictly prohibited from charging penalty in the form of &ldquo;penal interest&rdquo; added to the rate of interest, and strictly barred from <strong>capitalizing or compounding penal charges</strong>. Any recall notice demanding compounded penal interest hands borrower counsel an immediate preliminary objection on excess computation, delaying interim asset attachment and <Link href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues" className="text-[#DC2626] underline font-semibold">bank unpaid-dues recovery</Link>.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Equally dangerous is careless treatment of sureties. Under Sections 126, 128, and 129 of the Indian Contract Act, 1872, a Personal or Corporate Guarantor&apos;s liability under an &ldquo;on-demand&rdquo; continuing guarantee crystallizes only upon clear, unequivocal invocation and payment demand directly upon the guarantor. Our interactive draft workspace below fixes both defects cleanly in Word (<code>.doc</code>) and PDF formats.
                </p>
              </section>

              {/* Section 2: Interactive Workspace */}
              <section
                id="heading-notice-workspace"
                aria-labelledby="heading-notice-workspace-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block mb-1">
                    Live Draft &amp; Schedule A Calculator
                  </span>
                  <h2
                    id="heading-notice-workspace-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2"
                  >
                    Interactive Loan Recall &amp; Guarantee Invocation Draft Workspace
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Populate your bank branch, borrower, guarantor, and Core Banking ledger inputs below to generate an RBI-compliant Schedule A (zero penal compounding) with explicit Section 128 guarantee invocation. Export as formatted Word (<code>.doc</code>) or dispatch through empanelled counsel.
                  </p>
                </div>

                <LoanRecallNoticeWorkspace />
              </section>

              {/* Section 3: High-Contrast Comparison Matrix */}
              <section
                id="heading-rbi-penal-matrix"
                aria-labelledby="heading-rbi-penal-matrix-title"
                className="scroll-mt-28 bg-slate-900 text-white rounded-2xl border border-slate-800 p-5 sm:p-6 md:p-8 shadow-lg space-y-5"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-red-400 block mb-1">
                    Audit Comparison Matrix
                  </span>
                  <h2
                    id="heading-rbi-penal-matrix-title"
                    className="text-xl sm:text-2xl font-extrabold text-white tracking-tight"
                  >
                    RBI Penal Charges Schedule vs Legacy Compounded Interest
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Side-by-side audit contrasting defective Scribd/LawRato recall drafts against an RBI-compliant Schedule A bank demand.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-700">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-slate-100 border-b border-slate-700">
                        <th className="py-3 px-4 font-extrabold">Legal Audit Dimension</th>
                        <th className="py-3 px-4 font-extrabold text-red-300">Legacy Recall Draft (Defective)</th>
                        <th className="py-3 px-4 font-extrabold text-emerald-300">RBI-Compliant Schedule A (Safe)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {PENAL_COMPARISON_ROWS.map((row) => (
                        <tr key={row.dimension} className="hover:bg-slate-800/50 transition-colors">
                          <td className="py-3 px-4 font-bold text-white align-top">{row.dimension}</td>
                          <td className="py-3 px-4 text-slate-300 align-top">{row.legacy}</td>
                          <td className="py-3 px-4 text-emerald-100 align-top font-medium">{row.compliant}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Clause-by-Clause Legal Architecture */}
              <section
                id="heading-clause-architecture"
                aria-labelledby="heading-clause-architecture-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block mb-1">
                    Pleadings &amp; Enforceability Breakdown
                  </span>
                  <h2
                    id="heading-clause-architecture-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Clause-by-Clause Legal Architecture: Recall, s.128 &amp; DRT
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Every demand notice recalling a credit facility before DRT or Civil Court must synchronize these six operative paragraphs with your underlying security documentation and <Link href="/legal-notice-for-loan-default-bank-recovery-solutions" className="text-[#DC2626] underline font-semibold">bank loan default strategy</Link>.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {MANDATORY_CLAUSES.map((item) => (
                    <div
                      key={item.clause}
                      className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-1.5"
                    >
                      <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                        {item.statute}
                      </span>
                      <h3 className="text-sm font-extrabold text-slate-900">{item.clause}</h3>
                      <p className="text-xs text-slate-700 leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  For clean-loan or working-capital accounts supported by an underlying <Link href="/templates/promissory-note-format-india" className="text-[#DC2626] underline font-semibold">Demand Promissory Note</Link> or <Link href="/law/lok-adalat-pre-litigation-money-recovery" className="text-[#DC2626] underline font-semibold">Pre-Litigation Lok Adalat settlement pipeline</Link>, compute statutory DRT Rule 7 court fees with our <Link href="/tools/sarfaesi-drt-bank-recovery-forum-calculator" className="text-[#DC2626] underline font-semibold">SARFAESI &amp; DRT Bank Recovery Forum Calculator</Link> and check timelines using our <Link href="/tools/limitation-period-calculator" className="text-[#DC2626] underline font-semibold">Limitation Period Calculator</Link> and <Link href="/tools/cheque-bounce-deadline-calculator" className="text-[#DC2626] underline font-semibold">Cheque Bounce Deadline Calculator</Link> prior to notice issuance.
                </p>
              </section>

              {/* Section 5: Workflow SVG Diagram + Mobile Fallback */}
              <section
                id="heading-workflow-svg"
                aria-labelledby="heading-workflow-svg-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block mb-1">
                    End-to-End Branch &amp; Panel Execution
                  </span>
                  <h2
                    id="heading-workflow-svg-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Recall-to-DRT &amp; Guarantee Invocation Workflow for Banks
                  </h2>
                </div>

                {/* Desktop Responsive SVG Diagram with explicit integer width & height */}
                <div className="hidden md:block overflow-x-auto bg-slate-50 rounded-xl border border-slate-200 p-4">
                  <svg
                    width={920}
                    height={210}
                    viewBox="0 0 920 210"
                    role="img"
                    aria-label="Five-stage bank loan recall and guarantee invocation workflow from CBS ledger bifurcation to e-DRT execution"
                    className="w-full h-auto"
                  >
                    <defs>
                      <marker id="arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#DC2626" />
                      </marker>
                    </defs>

                    {/* Connectors */}
                    <line x1="168" y1="105" x2="188" y2="105" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow-red)" />
                    <line x1="354" y1="105" x2="374" y2="105" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow-red)" />
                    <line x1="540" y1="105" x2="560" y2="105" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow-red)" />
                    <line x1="726" y1="105" x2="746" y2="105" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow-red)" />

                    {/* Box 1 */}
                    <rect x="6" y="25" width="162" height="160" rx="12" fill="#0F172A" stroke="#1E293B" strokeWidth="1.5" />
                    <text x="20" y="52" fill="#F87171" fontSize="11" fontWeight="800">STAGE 1</text>
                    <text x="20" y="74" fill="#FFFFFF" fontSize="13" fontWeight="700">CBS Bifurcation</text>
                    <text x="20" y="98" fill="#CBD5E1" fontSize="11">Split Principal,</text>
                    <text x="20" y="114" fill="#CBD5E1" fontSize="11">Normal Interest &amp;</text>
                    <text x="20" y="130" fill="#CBD5E1" fontSize="11">Non-Compounded</text>
                    <text x="20" y="146" fill="#CBD5E1" fontSize="11">Penal Charges.</text>

                    {/* Box 2 */}
                    <rect x="192" y="25" width="162" height="160" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                    <text x="206" y="52" fill="#DC2626" fontSize="11" fontWeight="800">STAGE 2</text>
                    <text x="206" y="74" fill="#0F172A" fontSize="13" fontWeight="700">s.128 Invocation</text>
                    <text x="206" y="98" fill="#334155" fontSize="11">Name Borrower &amp;</text>
                    <text x="206" y="114" fill="#334155" fontSize="11">all Guarantors as</text>
                    <text x="206" y="130" fill="#334155" fontSize="11">Primary Noticees</text>
                    <text x="206" y="146" fill="#334155" fontSize="11">(Never &ldquo;CC&rdquo;).</text>

                    {/* Box 3 */}
                    <rect x="378" y="25" width="162" height="160" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                    <text x="392" y="52" fill="#DC2626" fontSize="11" fontWeight="800">STAGE 3</text>
                    <text x="392" y="74" fill="#0F172A" fontSize="13" fontWeight="700">Tri-Channel Serve</text>
                    <text x="392" y="98" fill="#334155" fontSize="11">Dispatch Email,</text>
                    <text x="392" y="114" fill="#334155" fontSize="11">WhatsApp &amp; Speed</text>
                    <text x="392" y="130" fill="#334155" fontSize="11">Post RPAD + s.63</text>
                    <text x="392" y="146" fill="#334155" fontSize="11">BSA certificate.</text>

                    {/* Box 4 */}
                    <rect x="564" y="25" width="162" height="160" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                    <text x="578" y="52" fill="#DC2626" fontSize="11" fontWeight="800">STAGE 4</text>
                    <text x="578" y="74" fill="#0F172A" fontSize="13" fontWeight="700">Cure / OTS Window</text>
                    <text x="578" y="98" fill="#334155" fontSize="11">7-15 day demand</text>
                    <text x="578" y="114" fill="#334155" fontSize="11">window; triage OTS</text>
                    <text x="578" y="130" fill="#334155" fontSize="11">proposals or log</text>
                    <text x="578" y="146" fill="#334155" fontSize="11">guarantor refusal.</text>

                    {/* Box 5 */}
                    <rect x="750" y="25" width="162" height="160" rx="12" fill="#DC2626" stroke="#B91C1C" strokeWidth="1.5" />
                    <text x="764" y="52" fill="#FEE2E2" fontSize="11" fontWeight="800">STAGE 5</text>
                    <text x="764" y="74" fill="#FFFFFF" fontSize="13" fontWeight="700">e-DRT / IBC / Suit</text>
                    <text x="764" y="98" fill="#FFF1F2" fontSize="11">File s.19 DRT OA,</text>
                    <text x="764" y="114" fill="#FFF1F2" fontSize="11">s.95 Form B IBC,</text>
                    <text x="764" y="130" fill="#FFF1F2" fontSize="11">Order 37 Suit or</text>
                    <text x="764" y="146" fill="#FFF1F2" fontSize="11">Lok Adalat decree.</text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards Fallback */}
                <div className="md:hidden grid grid-cols-1 gap-3">
                  {WORKFLOW_STAGES.map((stage) => (
                    <div key={stage.step} className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#DC2626]">{stage.step}</span>
                      <p className="text-sm font-bold text-slate-900 mt-0.5">{stage.title}</p>
                      <p className="text-xs text-slate-600 mt-1">{stage.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 6: Tri-Channel Dispatch & Evidence Checklist */}
              <section
                id="heading-dispatch-evidence"
                aria-labelledby="heading-dispatch-evidence-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block mb-1">
                    Admissibility &amp; Pre-Dispatch File Audit
                  </span>
                  <h2
                    id="heading-dispatch-evidence-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Tri-Channel Dispatch &amp; Bankers&apos; Books Evidence Checklist
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Complete pre-dispatch evidence indexing ensures unassailable proof of service and computation whether sending a single notice or managing <Link href="/bulk-legal-notice-services-banks-defaulted-loans" className="text-[#DC2626] underline font-semibold">bulk bank loan recall dispatches</Link>.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {EVIDENCE_CHECKLIST.map((ev) => (
                    <div key={ev.item} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1">
                      <p className="text-xs font-extrabold text-slate-900">{ev.item}</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{ev.purpose}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 7: Supreme Court Precedents */}
              <section
                id="heading-sc-precedents"
                aria-labelledby="heading-sc-precedents-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block mb-1">
                    Binding Judicial Authority
                  </span>
                  <h2
                    id="heading-sc-precedents-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Supreme Court Precedents on Loan Recall &amp; Guarantee Demands
                  </h2>
                </div>

                <div className="space-y-4">
                  {SUPREME_COURT_PRECEDENTS.map((item) => (
                    <article
                      key={item.parties}
                      className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                          {item.citation}
                        </span>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Bank Creditor Mandate
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">{item.title}</h3>
                      <p className="text-xs font-semibold text-slate-600">{item.parties}</p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item.holding}</p>
                      <p className="text-xs font-bold text-slate-900 pt-1">
                        Drafting Impact: <span className="font-medium text-slate-700">{item.impact}</span>
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 8: Worked Ledger Example */}
              <section
                id="heading-worked-ledger"
                aria-labelledby="heading-worked-ledger-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block mb-1">
                    Illustrative Schedule A Computation
                  </span>
                  <h2
                    id="heading-worked-ledger-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Ledger: &rupee;42.50 Lakh SME Cash-Credit Recall Schedule
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Suppose an SME borrower&apos;s &#8377;45.00 Lakh Cash Credit &amp; Term Loan slips to NPA after 90 DPD. Under legacy templates, charging 2% compounded penal interest turns the ledger into a single disputed lump sum. Below is the clean RBI-compliant bifurcation ready for DRT Section 19 filing against the <Link href="/bank-recovery-overdue-loans-willful-defaulters" className="text-[#DC2626] underline font-semibold">defaulting borrower and guarantors</Link>:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                        <th className="py-2.5 px-4 font-extrabold">Schedule A Head</th>
                        <th className="py-2.5 px-4 font-extrabold">Statutory / RBI Rule</th>
                        <th className="py-2.5 px-4 font-extrabold text-right">Amount (INR)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="py-2.5 px-4 font-semibold">(A) Principal Outstanding</td>
                        <td className="py-2.5 px-4 text-slate-600">Net sanctioned drawdown less recoveries</td>
                        <td className="py-2.5 px-4 text-right font-bold">&rupee;36,50,000</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold">(B) Normal Contractual Interest</td>
                        <td className="py-2.5 px-4 text-slate-600">10.65% p.a. simple/contractual accrual on (A)</td>
                        <td className="py-2.5 px-4 text-right font-bold">&rupee;4,64,300</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold">(C) Uncapitalized Penal Charges</td>
                        <td className="py-2.5 px-4 text-slate-600">RBI DoR.MCS.REC.28 — Zero compounding</td>
                        <td className="py-2.5 px-4 text-right font-bold">&rupee;1,15,000</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold">(D) GST @18% on Penal Charges</td>
                        <td className="py-2.5 px-4 text-slate-600">Separated indirect tax row</td>
                        <td className="py-2.5 px-4 text-right font-bold">&rupee;20,700</td>
                      </tr>
                      <tr className="bg-red-50/70">
                        <td className="py-3 px-4 font-black text-slate-900">Total Recalled Demand</td>
                        <td className="py-3 px-4 font-semibold text-[#DC2626]">Joint &amp; Several u/s 128 Contract Act</td>
                        <td className="py-3 px-4 text-right font-black text-[#DC2626]">&rupee;42,50,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 9: Dual B2B Conversion CTA */}
              <section
                id="heading-institutional-cta"
                aria-labelledby="heading-institutional-cta-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block mb-1">
                    Empanelled Advocate Dispatch &amp; CSV Batch Engine
                  </span>
                  <h2
                    id="heading-institutional-cta-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Institutional Dispatch: Test 1 Notice or Upload NPA CSV
                  </h2>
                </div>

                <LoanRecallNoticeCTA />
              </section>

              {/* Section 10: Institutional FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block mb-1">
                    Bank Counsel &amp; Branch Compliance Q&amp;A
                  </span>
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs: Bank Loan Recall &amp; Guarantee Invocation Notice Format
                  </h2>
                </div>

                <div className="divide-y divide-slate-200">
                  {FAQS.map((faq) => (
                    <div key={faq.question} className="py-4 first:pt-1 last:pb-1 space-y-1.5">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">{faq.question}</h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 11: Authoritative Statutory & RBI Links */}
              <section
                id="heading-statutory-sources"
                aria-labelledby="heading-statutory-sources-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block mb-1">
                    Official Regulatory Citations
                  </span>
                  <h2
                    id="heading-statutory-sources-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Primary Banking Statutes, RBI Circulars &amp; DRT Portals
                  </h2>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm">
                  {PRIMARY_SOURCES.map((src) => (
                    <li key={src.title} className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-black mt-0.5">&rarr;</span>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-800 hover:text-[#DC2626] underline font-medium"
                      >
                        {src.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-3 text-xs font-bold">
                  <Link href="/industries/banks-loan-recovery" className="text-[#DC2626] hover:underline">
                    Banks Loan Recovery Hub &rarr;
                  </Link>
                  <Link href="/templates" className="text-slate-700 hover:text-[#DC2626] underline">
                    All Legal Notice Templates &rarr;
                  </Link>
                  <Link href="/templates/msme-delayed-payment-demand-notice" className="text-slate-700 hover:text-[#DC2626] underline">
                    MSME Delayed Payment Notice Format &rarr;
                  </Link>
                </div>
              </section>
            </main>
          </div>
        </div>

        <RelatedRecoveryGuides currentPath={PAGE_URL} cluster="banking" />
      </div>
    </>
  );
}
