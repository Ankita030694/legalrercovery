import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import PssActNoticeTOC from "./PssActNoticeTOC";
import PssActNoticeWorkspace from "./PssActNoticeWorkspace";
import PssActNoticeCTA from "./PssActNoticeCTA";

export const revalidate = 86400;

const PAGE_URL = "/templates/section-25-pss-act-nach-bounce-legal-notice-format";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
// TRIM_FOR_SF_SEO: Tightened from 61ch PDF title to 54ch while preserving primary keyword
const PAGE_TITLE = "Section 25 PSS Act (e-NACH / ECS Bounce) Notice Format";
// TRIM_FOR_SF_SEO: Tightened from 167ch PDF description to 147ch preserving all statutory facts
const PAGE_DESCRIPTION =
  "Court-tested Section 25 PSS Act notice format for NBFCs & Banks: UMRN fields, NPCI return memo, exact bounced EMI vs loan-balance trap warning.";
// PDF Exact H1 (128ch) — kept strictly identical to ARTICLE_SCHEMA.headline
const H1_TEXT =
  "Statutory Demand Notice Format Under Section 25 of the Payment & Settlement Systems Act, 2007 (e-NACH / ECS / AutoPay Dishonour)";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository — wire named Bar Council-enrolled NBFC panel advocate reviewer once created.

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

const COMPARISON_ROWS = [
  {
    dimension: "Suman Sethi Demand Rule",
    defective: "Demands entire recalled loan principal + foreclosure charges as one omnibus sum.",
    courtTested: "Bifurcates Part I (exact bounced e-NACH EMI) from Part II (informational loan balance).",
  },
  {
    dimension: "Mandate & UMRN Identification",
    defective: "Generic 'standing instruction failed' wording with no 20-character UMRN or bank code.",
    courtTested: "Captures exact UMRN, mandate channel (e-NACH/ECS/UPI AutoPay), and destination bank.",
  },
  {
    dimension: "NPCI Return Memo & Reason Code",
    defective: "Omits NPCI return memo date and exact reason code (01 Insufficient Funds, 04 Stopped).",
    courtTested: "Logs presentation date, NPCI return memo receipt date, and verbatim reason code.",
  },
  {
    dimension: "Territorial Jurisdiction (s.142(2))",
    defective: "Fails to plead Sponsor/Collecting Bank branch where the NBFC maintains its account.",
    courtTested: "Pleads exact Sponsor Bank branch IFSC/city to anchor JMFC/MM jurisdiction cleanly.",
  },
  {
    dimension: "15-Day Statutory Cure Window",
    defective: "Uses vague '7 days' or 'forthwith' payment language, violating s.25(1)(c) PSS Act.",
    courtTested: "Grants unequivocal 15-day statutory cure period from receipt of notice for Part I.",
  },
  {
    dimension: "Electronic Service Proof (BSA s.63)",
    defective: "Relies on uncertified WhatsApp screenshots or unregistered ordinary post.",
    courtTested: "Synchronizes Speed Post RPAD + Email + Business WhatsApp with BSA 2023 s.63 metadata.",
  },
];

const MANDATORY_CLAUSES = [
  {
    clause: "1. Underlying Debt & Mandate Execution",
    statute: "PSS Act s.25(1) Explanation",
    detail:
      "Establishes the sanctioned loan account, legally enforceable EMI debt, and voluntary registration of the e-NACH, physical NACH, ECS, or UPI AutoPay mandate.",
  },
  {
    clause: "2. UMRN & Sponsor Bank Anchor",
    statute: "NI Act s.142(2) & PSS Act s.25(5)",
    detail:
      "Specifies the 20-character Unique Mandate Registration Number (UMRN) and the NBFC's Sponsor/Collecting Bank branch to establish territorial Magistrate jurisdiction.",
  },
  {
    clause: "3. Presentation & NPCI Return Memo",
    statute: "PSS Act s.25(1)(a)-(b)",
    detail:
      "Records the exact presentation date, NPCI return memo date, and dishonour reason code (such as 01 Insufficient Funds or 04 Mandate Revoked) within the 30-day notice window.",
  },
  {
    clause: "4. Suman Sethi Bifurcated Schedule",
    statute: "Suman Sethi v. Ajay K. Churiwal",
    detail:
      "Separates Part I (exact bounced installment payable in 15 days) from Part II (optional informational total loan recall balance) so Magistrates never quash for vagueness.",
  },
  {
    clause: "5. 15-Day Cure & Penal Warning",
    statute: "PSS Act s.25(1)(c) & s.25(1)",
    detail:
      "Demands payment within 15 days of receipt and warns of criminal prosecution carrying up to 2 years imprisonment or fine up to twice the bounced EFT amount.",
  },
  {
    clause: "6. BSA s.63 Electronic Preservation",
    statute: "BSA 2023 s.63 & General Clauses s.27",
    detail:
      "Preserves NPCI return XML/CSV logs, Speed Post RPAD tracking, email headers, and WhatsApp delivery receipts for Magistrate cognizance and ODR settlement.",
  },
];

const TIMELINE_STAGES = [
  {
    step: "Stage 1 (Day 0)",
    title: "NPCI Return Memo",
    desc: "Log exact UMRN, presentation date, return memo receipt date, and reason code (01/02/04/11).",
  },
  {
    step: "Stage 2 (<= 30 Days)",
    title: "s.25(1)(b) Notice",
    desc: "Serve bifurcated notice via RPAD + Email + WhatsApp demanding exact bounced EMI.",
  },
  {
    step: "Stage 3 (15 Days)",
    title: "Statutory Cure Window",
    desc: "Borrower gets 15 days from receipt (s.25(1)(c)) to remit Part I bounced EMI.",
  },
  {
    step: "Stage 4 (Day 16)",
    title: "Offence Crystallized",
    desc: "Non-payment of exact Part I amount triggers cause of action under s.25(1) PSS Act.",
  },
  {
    step: "Stage 5 (<= 30 Days)",
    title: "JMFC / MM Complaint",
    desc: "File criminal complaint at Sponsor Bank branch jurisdiction within 30 days (s.25(5)).",
  },
];

const EVIDENCE_CHECKLIST = [
  {
    item: "1. Sanction Letter & Loan Agreement",
    purpose: "Proves legally enforceable debt and borrower consent to automated EMI debit.",
  },
  {
    item: "2. Registered e-NACH / Mandate Copy (UMRN)",
    purpose: "Establishes the 20-character UMRN, debit cap, frequency, and borrower bank mandate.",
  },
  {
    item: "3. NPCI / Sponsor Bank Return Memo",
    purpose: "Proves presentation, dishonour date, and exact reason code (01, 02, 04, or 11).",
  },
  {
    item: "4. Certified Statement of Account (BBE Act)",
    purpose: "Confirms the exact bounced EMI installment matched the scheduled repayment ledger.",
  },
  {
    item: "5. Tri-Channel RPAD + BSA s.63 Certificate",
    purpose: "Proves 30-day dispatch and borrower receipt under General Clauses Act s.27.",
  },
  {
    item: "6. Board Resolution / Authorization & POA",
    purpose: "Establishes NBFC officer or empanelled advocate locus standi before the Magistrate.",
  },
];

const PRECEDENT_CASES = [
  {
    citation: "(2000) 2 SCC 380",
    title: "Omnibus Loan Recall Without Specifying Exact Bounced Instrument Invalidates Notice",
    parties: "Suman Sethi v. Ajay K. Churiwal — Supreme Court of India",
    holding:
      "The Supreme Court held that a statutory demand notice must make an unmistakable, severable demand for the exact dishonoured instrument amount. If a creditor lumps other charges or the entire loan balance into one indivisible demand without clearly specifying the bounced amount, the notice is bad in law; however, if the bounced amount is demanded distinctly alongside a separate statement of other dues, the notice remains valid.",
    impact:
      "Every NBFC Section 25 PSS Act notice must isolate Part I (exact bounced e-NACH/ECS amount) from Part II (informational total loan recall balance) to survive Magistrate quashing.",
  },
  {
    citation: "(2014) 9 SCC 129 & s.142(2) NI Act",
    title: "Territorial Jurisdiction Anchored to Payee's Sponsor / Collecting Bank Branch",
    parties: "Dashrath Rupsingh Rathod v. State of Maharashtra & 2015 Statutory Amendment",
    holding:
      "Following the Supreme Court's ruling in Dashrath Rupsingh Rathod and Parliament's subsequent insertion of Section 142(2) of the NI Act (applicable mutatis mutandis to Section 25(5) PSS Act), criminal complaints for electronic funds transfer dishonour lie where the payee/NBFC maintains its collection bank account.",
    impact:
      "Explicitly pleading the NBFC's Sponsor Bank branch and IFSC in the Section 25 notice prevents jurisdiction objections and enables centralized Magistrate filings.",
  },
  {
    citation: "PSS Act s.25(5) Parity",
    title: "Section 25 Electronic Funds Transfer Dishonour Carries Full Section 138 NI Act Parity",
    parties: "Payment and Settlement Systems Act, 2007 — Section 25(1) to (5)",
    holding:
      "Section 25(5) expressly applies Chapter XVII of the Negotiable Instruments Act, 1881 (Sections 138 to 147) to electronic funds transfer dishonour—meaning the 30-day notice window, 15-day cure period, 30-day complaint limitation, and 2-year imprisonment / 2x fine penalty apply identically to e-NACH, ECS, and UPI AutoPay bounces.",
    impact:
      "Empowers NBFCs and digital lenders to prosecute digital mandate defaults criminally without needing physical post-dated cheques.",
  },
];

const FAQS = [
  {
    question: "Why do Magistrates quash Section 25 PSS Act notices that demand the entire loan balance?",
    answer:
      "Under Section 25(5) of the PSS Act read with the Supreme Court ruling in Suman Sethi v. Ajay K. Churiwal (2000) 2 SCC 380, a statutory demand notice must unmistakably demand the exact dishonoured electronic funds transfer amount. If an NBFC demands only the total recalled loan principal or foreclosure balance without separately specifying the exact bounced e-NACH/ECS installment, the notice is held vague and the complaint is liable to be quashed.",
  },
  {
    question: "Can an NBFC mention the total recalled loan balance in a Section 25 notice?",
    answer:
      "Yes, provided it is strictly bifurcated and severable. Our template places the exact bounced e-NACH/ECS installment in Part I as the statutory 15-day demand under Section 25(1)(c), and lists the total accelerated loan balance in Part II as a separate informational statement without prejudice to civil or arbitral remedies.",
  },
  {
    question: "What is the exact timeline for sending a Section 25 PSS Act legal notice?",
    answer:
      "The lender must dispatch the statutory written demand notice within 30 days of receiving the NPCI / Sponsor Bank return memo (Section 25(1)(b)). The borrower then has 15 days from receipt to pay the exact bounced amount (Section 25(1)(c)). If unpaid, the criminal complaint must be filed within 30 days after expiry of the 15-day window.",
  },
  {
    question: "Does Section 25 of the PSS Act apply to UPI AutoPay and e-NACH mandate bounces?",
    answer:
      "Yes. Section 25 covers any 'electronic funds transfer' initiated by a person instructing a bank or system participant to debit an account—which includes e-NACH, physical NACH, ECS, and NPCI UPI AutoPay mandates—when dishonoured for insufficient funds, exceeding arrangement, or mandate revocation/stop-payment.",
  },
  {
    question: "Which court has jurisdiction to try a Section 25 PSS Act e-NACH bounce complaint?",
    answer:
      "Applying Section 142(2) of the Negotiable Instruments Act, 1881 via Section 25(5) of the PSS Act, the Judicial Magistrate First Class (JMFC) or Metropolitan Magistrate (MM) having territorial jurisdiction over the NBFC's Sponsor/Collecting Bank branch where the EMI proceeds are credited has jurisdiction.",
  },
  {
    question: "What NPCI details are mandatory inside a court-tested Section 25 demand notice?",
    answer:
      "Your notice must state the 20-character UMRN (Unique Mandate Registration Number), mandate channel (e-NACH/ECS/UPI AutoPay), presentation date, NPCI return memo date, exact dishonour reason code (e.g., 01 Insufficient Funds, 04 Mandate Revoked), Sponsor Bank branch, and exact bounced EMI amount.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "The Payment and Settlement Systems Act, 2007 — Section 25 (India Code)",
    url: "https://www.indiacode.nic.in/handle/123456789/2067",
  },
  {
    title: "The Negotiable Instruments Act, 1881 — Sections 138, 141 & 142(2) (India Code)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "National Payments Corporation of India (NPCI) — NACH / e-NACH & UPI AutoPay Procedural Guidelines",
    url: "https://www.npci.org.in/",
  },
  {
    title: "RBI Master Direction — Digital Lending & Fair Practices Code for NBFCs",
    url: "https://www.rbi.org.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam (BSA), 2023 — Section 63 Electronic Record Certification (India Code)",
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
    audienceType: "NBFC In-House Counsel, Digital Lending Legal Teams, Recovery Panel Advocates",
  },
  about: [
    "Section 25 Payment and Settlement Systems Act 2007",
    "e-NACH and ECS Mandate Dishonour",
    "UPI AutoPay Failure Legal Notice",
    "Suman Sethi Dual-Demand Rule",
    "UMRN and NPCI Return Memo Particulars",
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

export default function Section25PssActNoticeTemplatePage() {
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
              <span>IND-02 NBFC &amp; Fintech Template</span>
              <span className="text-red-500">&bull;</span>
              <span>PSS Act s.25(1) &amp; s.25(5)</span>
              <span className="text-red-500">&bull;</span>
              <span>Suman Sethi Dual-Demand Safe</span>
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
                Executive NBFC Counsel Brief (IND-02 Spoke)
              </span>
              <p>
                Built for NBFCs, digital lenders, and HFCs inside our{" "}
                <Link href="/industries/nbfc-fintech-loan-recovery" className="text-red-300 underline font-bold hover:text-white">
                  NBFC &amp; Fintech Loan Recovery Hub
                </Link>
                , this Section 25 PSS Act notice captures UMRN, NPCI return memo particulars, and the mandatory{" "}
                <em>Suman Sethi</em> bifurcation—demanding the exact bounced e-NACH/ECS/AutoPay EMI separately from total loan recall so Magistrates never quash your complaint.
              </p>
            </div>

            {/* 4-Card Statutory Metrics Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 sm:p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1">Notice Dispatch Limit</p>
                <p className="text-base sm:text-lg font-black text-white">30 Days</p>
                <p className="text-[11px] text-slate-300 mt-0.5">From NPCI return memo receipt</p>
              </div>
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 sm:p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1">Borrower Cure Period</p>
                <p className="text-base sm:text-lg font-black text-emerald-400">15 Days</p>
                <p className="text-[11px] text-slate-300 mt-0.5">For exact bounced Part I EMI</p>
              </div>
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 sm:p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1">Criminal Penalty</p>
                <p className="text-base sm:text-lg font-black text-amber-400">2 Yrs / 2x Fine</p>
                <p className="text-[11px] text-slate-300 mt-0.5">Full s.138 NI Act parity (s.25(5))</p>
              </div>
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 sm:p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1">Admissible Service</p>
                <p className="text-base sm:text-lg font-black text-white">Email + WA + RPAD</p>
                <p className="text-[11px] text-slate-300 mt-0.5">BSA 2023 s.63 &amp; UMRN logs</p>
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
                { label: "Section 25 PSS Act Notice Format", href: PAGE_URL },
              ]}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:items-stretch">
            <PssActNoticeTOC />

            <main className="flex-1 min-w-0 space-y-10">
              {/* Section 1: Critical Legal Trap Filled */}
              <section
                id="heading-suman-sethi-trap"
                aria-labelledby="heading-suman-sethi-trap-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block">
                  Critical Legal Trap for NBFCs &amp; Fintechs
                </span>
                <h2
                  id="heading-suman-sethi-trap-title"
                  className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why Demanding Total Loan Balance Quashes Section 25 Notices
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In high-volume digital lending, NBFCs and fintechs routinely download generic Section 25 notices from public template portals and merge them with a loan recall letter—demanding the <strong>entire recalled loan principal, future EMIs, and penal charges</strong> as a single lump sum. Under Section 25(5) of the Payment and Settlement Systems Act, 2007, Chapter XVII of the Negotiable Instruments Act, 1881 applies mutatis mutandis, including the Supreme Court&apos;s strict rule in <em>Suman Sethi v. Ajay K. Churiwal</em> ((2000) 2 SCC 380).
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under <em>Suman Sethi</em>, if a statutory demand notice fails to make an unmistakable, severable demand for the <strong>exact dishonoured e-NACH, ECS, or UPI AutoPay installment amount</strong>, defence counsel immediately moves to quash the complaint before the Judicial Magistrate First Class (JMFC) or Metropolitan Magistrate (MM). Whether you are pursuing{" "}
                  <Link href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues" className="text-[#DC2626] underline font-semibold">
                    NBFC unpaid dues recovery
                  </Link>{" "}
                  or calibrating{" "}
                  <Link href="/small-ticket-digital-personal-loan-bnpl-recovery-economics" className="text-[#DC2626] underline font-semibold">
                    small-ticket digital loan &amp; BNPL recovery economics
                  </Link>
                  , your notice must isolate the bounced mandate amount in Part I while keeping any accelerated loan balance strictly separate in Part II.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Our interactive workspace below builds this dual-demand structure automatically—capturing the 20-character UMRN, NPCI return memo date, exact return reason code, and Sponsor Bank branch required under <em>Dashrath Rupsingh Rathod</em> and Section 142(2) NI Act jurisdiction rules.
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
                    Live Draft &amp; Suman Sethi Bifurcation Engine
                  </span>
                  <h2
                    id="heading-notice-workspace-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2"
                  >
                    Interactive Section 25 PSS Act Notice Workspace
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Populate your NBFC particulars, 20-character UMRN, NPCI return memo date, and exact bounced EMI below to generate a court-tested Section 25(1)(b) statutory notice in Word (<code>.doc</code>) or PDF.
                  </p>
                </div>

                <PssActNoticeWorkspace />
              </section>

              {/* Section 3: High-Contrast Comparison Matrix */}
              <section
                id="heading-umrn-comparison-matrix"
                aria-labelledby="heading-umrn-comparison-matrix-title"
                className="scroll-mt-28 bg-slate-900 text-white rounded-2xl border border-slate-800 p-5 sm:p-6 md:p-8 shadow-lg space-y-5"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-red-400 block mb-1">
                    Magistrate Quash-Proof Audit
                  </span>
                  <h2
                    id="heading-umrn-comparison-matrix-title"
                    className="text-xl sm:text-2xl font-extrabold text-white tracking-tight"
                  >
                    Defective Generic Drafts vs Court-Tested Section 25 Notice
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Six technical defects that cause Magistrate dismissal in e-NACH and UPI AutoPay prosecutions—and how our template eliminates each one.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-700">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-slate-100 border-b border-slate-700">
                        <th className="py-3 px-4 font-extrabold">Statutory Audit Dimension</th>
                        <th className="py-3 px-4 font-extrabold text-red-300">Generic Portal Draft (Risk)</th>
                        <th className="py-3 px-4 font-extrabold text-emerald-300">Court-Tested Section 25 Draft</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {COMPARISON_ROWS.map((row) => (
                        <tr key={row.dimension} className="hover:bg-slate-800/50 transition-colors">
                          <td className="py-3 px-4 font-bold text-white align-top">{row.dimension}</td>
                          <td className="py-3 px-4 text-slate-300 align-top">{row.defective}</td>
                          <td className="py-3 px-4 text-emerald-100 align-top font-medium">{row.courtTested}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: 30-15-30 Day Statutory Timeline SVG */}
              <section
                id="heading-statutory-timeline-svg"
                aria-labelledby="heading-statutory-timeline-svg-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block mb-1">
                    Strict Limitation &amp; Cognizance Calendar
                  </span>
                  <h2
                    id="heading-statutory-timeline-svg-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The 30-15-30 Day Section 25 PSS Act Prosecution Rail
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Calculate exact statutory cutoff dates before dispatching via our{" "}
                    <Link href="/tools/cheque-bounce-deadline-calculator" className="text-[#DC2626] underline font-semibold">
                      Cheque &amp; NACH Bounce Deadline Calculator
                    </Link>{" "}
                    and{" "}
                    <Link href="/tools/limitation-period-calculator" className="text-[#DC2626] underline font-semibold">
                      Limitation Period Calculator
                    </Link>
                    .
                  </p>
                </div>

                <div className="hidden md:block overflow-x-auto bg-slate-50 rounded-xl border border-slate-200 p-4">
                  <svg
                    width={920}
                    height={200}
                    viewBox="0 0 920 200"
                    role="img"
                    aria-label="Five-stage 30-15-30 day Section 25 PSS Act e-NACH bounce prosecution timeline"
                    className="w-full h-auto"
                  >
                    <defs>
                      <marker id="pss-arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#DC2626" />
                      </marker>
                    </defs>

                    <line x1="168" y1="100" x2="188" y2="100" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#pss-arrow-red)" />
                    <line x1="354" y1="100" x2="374" y2="100" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#pss-arrow-red)" />
                    <line x1="540" y1="100" x2="560" y2="100" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#pss-arrow-red)" />
                    <line x1="726" y1="100" x2="746" y2="100" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#pss-arrow-red)" />

                    <rect x="6" y="20" width="162" height="160" rx="12" fill="#0F172A" stroke="#1E293B" strokeWidth="1.5" />
                    <text x="20" y="48" fill="#F87171" fontSize="11" fontWeight="800">STAGE 1 (DAY 0)</text>
                    <text x="20" y="70" fill="#FFFFFF" fontSize="13" fontWeight="700">NPCI Return</text>
                    <text x="20" y="94" fill="#CBD5E1" fontSize="11">Log UMRN, memo</text>
                    <text x="20" y="110" fill="#CBD5E1" fontSize="11">receipt date &amp;</text>
                    <text x="20" y="126" fill="#CBD5E1" fontSize="11">reason code (01/04).</text>

                    <rect x="192" y="20" width="162" height="160" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                    <text x="206" y="48" fill="#DC2626" fontSize="11" fontWeight="800">STAGE 2 (&le;30 DAYS)</text>
                    <text x="206" y="70" fill="#0F172A" fontSize="13" fontWeight="700">s.25(1)(b) Notice</text>
                    <text x="206" y="94" fill="#334155" fontSize="11">Dispatch bifurcated</text>
                    <text x="206" y="110" fill="#334155" fontSize="11">Suman Sethi draft</text>
                    <text x="206" y="126" fill="#334155" fontSize="11">via RPAD+Email+WA.</text>

                    <rect x="378" y="20" width="162" height="160" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                    <text x="392" y="48" fill="#DC2626" fontSize="11" fontWeight="800">STAGE 3 (15 DAYS)</text>
                    <text x="392" y="70" fill="#0F172A" fontSize="13" fontWeight="700">Cure Window</text>
                    <text x="392" y="94" fill="#334155" fontSize="11">15 days from</text>
                    <text x="392" y="110" fill="#334155" fontSize="11">service to pay</text>
                    <text x="392" y="126" fill="#334155" fontSize="11">exact Part I EMI.</text>

                    <rect x="564" y="20" width="162" height="160" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                    <text x="578" y="48" fill="#DC2626" fontSize="11" fontWeight="800">STAGE 4 (DAY 16)</text>
                    <text x="578" y="70" fill="#0F172A" fontSize="13" fontWeight="700">Cause of Action</text>
                    <text x="578" y="94" fill="#334155" fontSize="11">Non-payment of</text>
                    <text x="578" y="110" fill="#334155" fontSize="11">Part I crystallizes</text>
                    <text x="578" y="126" fill="#334155" fontSize="11">s.25(1) offence.</text>

                    <rect x="750" y="20" width="162" height="160" rx="12" fill="#DC2626" stroke="#B91C1C" strokeWidth="1.5" />
                    <text x="764" y="48" fill="#FEE2E2" fontSize="11" fontWeight="800">STAGE 5 (&le;30 DAYS)</text>
                    <text x="764" y="70" fill="#FFFFFF" fontSize="13" fontWeight="700">JMFC / MM Filing</text>
                    <text x="764" y="94" fill="#FFF1F2" fontSize="11">File complaint at</text>
                    <text x="764" y="110" fill="#FFF1F2" fontSize="11">Sponsor Bank</text>
                    <text x="764" y="126" fill="#FFF1F2" fontSize="11">branch court.</text>
                  </svg>
                </div>

                <div className="md:hidden grid grid-cols-1 gap-3">
                  {TIMELINE_STAGES.map((stage) => (
                    <div key={stage.step} className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#DC2626]">{stage.step}</span>
                      <p className="text-sm font-bold text-slate-900 mt-0.5">{stage.title}</p>
                      <p className="text-xs text-slate-600 mt-1">{stage.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 5: Clause-by-Clause Legal Architecture */}
              <section
                id="heading-clause-architecture"
                aria-labelledby="heading-clause-architecture-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block mb-1">
                    Pleadings &amp; Jurisdiction Breakdown
                  </span>
                  <h2
                    id="heading-clause-architecture-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Mandatory UMRN &amp; NPCI Clauses in a Section 25 Notice
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Every NBFC notice for e-NACH, ECS, or UPI AutoPay failure must align with{" "}
                    <Link href="/rbi-recovery-agent-guidelines-compliant-legal-escalation-nbfc" className="text-[#DC2626] underline font-semibold">
                      RBI Fair Practices Code &amp; Digital Lending Directions
                    </Link>{" "}
                    and{" "}
                    <Link href="/co-lending-fldg-dlg-default-recovery-workflow-bank-nbfc" className="text-[#DC2626] underline font-semibold">
                      co-lending payee locus standi rules
                    </Link>
                    .
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {MANDATORY_CLAUSES.map((item) => (
                    <div key={item.clause} className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-1.5">
                      <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                        {item.statute}
                      </span>
                      <h3 className="text-sm font-extrabold text-slate-900">{item.clause}</h3>
                      <p className="text-xs text-slate-700 leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 6: Tri-Channel Dispatch & Evidence */}
              <section
                id="heading-evidence-dispatch"
                aria-labelledby="heading-evidence-dispatch-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block mb-1">
                    Admissibility &amp; Magistrate Filing File
                  </span>
                  <h2
                    id="heading-evidence-dispatch-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Tri-Channel Dispatch &amp; BSA s.63 Evidence Checklist
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Synchronize{" "}
                    <Link href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution" className="text-[#DC2626] underline font-semibold">
                      Email, WhatsApp &amp; Speed Post RPAD dispatch
                    </Link>{" "}
                    and offer digital{" "}
                    <Link href="/online-dispute-resolution-india" className="text-[#DC2626] underline font-semibold">
                      Online Dispute Resolution (ODR)
                    </Link>{" "}
                    settlement links for rapid cure before Magistrate cognizance.
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
                    Supreme Court Precedents Governing Section 25 Notices
                  </h2>
                </div>

                <div className="space-y-4">
                  {PRECEDENT_CASES.map((item) => (
                    <article
                      key={item.parties}
                      className="p-4 sm:p-5 rounded-xl border border-slate-200 border-l-4 border-l-[#DC2626] bg-slate-50/60 space-y-2"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                          {item.citation}
                        </span>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Creditor Prosecution Rule
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

              {/* Section 8: Worked Bifurcation Example */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block mb-1">
                    Illustrative Dual-Demand Schedule
                  </span>
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Example: &rupee;18,450 Bounced EMI vs &rupee;4.20L Recall
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Suppose an unsecured borrower defaults on a &rupee;18,450 e-NACH installment (UMRN{" "}
                  <code>HDFC7021000004918273</code>) while the total accelerated loan balance stands at &rupee;4,20,000. For{" "}
                  <Link href="/unsecured-business-loan-sme-working-capital-default-nbfc" className="text-[#DC2626] underline font-semibold">
                    SME working capital or personal loan defaults
                  </Link>
                  , your Section 25 notice must separate the two demands as shown below (or pair with a separate{" "}
                  <Link href="/templates/bank-loan-recall-cum-guarantee-invocation-notice" className="text-[#DC2626] underline font-semibold">
                    Loan Recall Notice
                  </Link>
                  ):
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                        <th className="py-2.5 px-4 font-extrabold">Demand Schedule Head</th>
                        <th className="py-2.5 px-4 font-extrabold">Statutory Treatment</th>
                        <th className="py-2.5 px-4 font-extrabold text-right">Amount (INR)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="bg-emerald-50/40">
                        <td className="py-2.5 px-4 font-bold text-slate-900">Part I: Exact Bounced e-NACH EMI</td>
                        <td className="py-2.5 px-4 text-emerald-800 font-medium">
                          Statutory 15-day demand u/s 25(1)(c) PSS Act
                        </td>
                        <td className="py-2.5 px-4 text-right font-black text-emerald-800">&rupee;18,450</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-slate-900">Part II: Total Recalled Loan Balance</td>
                        <td className="py-2.5 px-4 text-slate-600">
                          Strictly severable informational notice for civil/arbitral track
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold">&rupee;4,20,000</td>
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
                    Institutional Dispatch: Test 1 Notice or Upload Bounce CSV
                  </h2>
                </div>

                <PssActNoticeCTA />
              </section>

              {/* Section 10: Institutional FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block mb-1">
                    NBFC &amp; Panel Advocate Q&amp;A
                  </span>
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs: Section 25 PSS Act e-NACH &amp; ECS Bounce Notices
                  </h2>
                </div>

                <div className="divide-y divide-slate-200">
                  {FAQS.map((faq) => (
                    <details key={faq.question} className="group py-4 first:pt-1 last:pb-1">
                      <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-sm sm:text-base font-bold text-slate-900">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] font-black shrink-0 group-open:rotate-45 transition-transform">+</span>
                      </summary>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-2">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Authoritative Statutory & NPCI Links */}
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
                    Primary Statutes, NPCI Circulars &amp; RBI Portals
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
                  <Link href="/industries/nbfc-fintech-loan-recovery" className="text-[#DC2626] hover:underline">
                    NBFC &amp; Fintech Recovery Hub &rarr;
                  </Link>
                  <Link href="/templates" className="text-slate-700 hover:text-[#DC2626] underline">
                    All Legal Notice Templates &rarr;
                  </Link>
                  <Link href="/templates/bank-loan-recall-cum-guarantee-invocation-notice" className="text-slate-700 hover:text-[#DC2626] underline">
                    Bank Loan Recall Notice Format &rarr;
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
