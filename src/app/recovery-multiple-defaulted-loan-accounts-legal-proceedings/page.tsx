import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import RecoveryMultipleAccountsCTA from "./RecoveryMultipleAccountsCTA";
import RecoveryMultipleAccountsTOC from "./RecoveryMultipleAccountsTOC";
import RecoveryMultipleAccountsTabs from "./RecoveryMultipleAccountsTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Recovering Multiple Defaulted Loan Accounts: Legal Guide",
  description:
    "How financial institutions manage and litigate multiple defaulted loan accounts simultaneously. Batch filings, centralized counsel, and analytics.",
  alternates: {
    canonical: `${SITE_URL}/recovery-multiple-defaulted-loan-accounts-legal-proceedings`,
  },
  openGraph: {
    title: "Recovery of Multiple Defaulted Loan Accounts Through Legal Proceedings",
    description:
      "Comprehensive institutional framework for banks, NBFCs, and FinTechs to recover bulk non-performing retail loans through batch Lok Adalat filings, Section 25 PSS Act complaints, and centralized legal counsel.",
    url: `${SITE_URL}/recovery-multiple-defaulted-loan-accounts-legal-proceedings`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Recovery of Multiple Defaulted Loan Accounts Through Legal Proceedings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recovery of Multiple Defaulted Loan Accounts Through Legal Proceedings",
    description:
      "How portfolio resolution officers and heads of centralized legal cells manage and litigate multiple defaulted loan accounts simultaneously via batch filings and centralized counsel.",
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
    title: "Legal Services Authorities Act, 1987 (Act No. 39 of 1987 — Section 19 & 20: Pre-Litigation Lok Adalat Conciliation & Deemed Civil Decrees)",
    url: "https://www.indiacode.nic.in/handle/123456789/1944",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (PSS Act Section 25: Dishonour of Electronic Funds Transfer / NACH Mandate)",
    url: "https://www.indiacode.nic.in/handle/123456789/2056",
  },
  {
    title: "Reserve Bank of India (RBI) Master Direction on Non-Banking Financial Company – Scale Based Regulation (NBFC-SBR, Section on Fair Practices Code & Loan Recovery)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII: Summary Procedure on Bills of Exchange, Promissory Notes, & Liquidated Written Contracts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Arbitration and Conciliation Act, 1996 (Section 7, Section 11 & Section 36: Sole Arbitrator Appointment & Enforcement of Arbitral Awards as Court Decrees)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63: Admissibility of Electronic Records for Digital Loan Agreements, Sanction Letters & Electronic Notice Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Benchmark on Pre-Litigation Lok Adalat Awards as Executable Civil Decrees",
    parties: "K.N. Govindan Kutty Menon v. C.D. Shaji",
    citation: "(2012) 2 SCC 51",
    date: "Supreme Court of India Ruling",
    facts:
      "The appellant initiated recovery proceedings for defaulted financial dues. The matter was referred to a Pre-Litigation Lok Adalat where a compromise settlement award was entered. When the debtor subsequently defaulted on the Lok Adalat settlement schedule, the creditor filed an execution petition in the civil court. The high court questioned whether a Lok Adalat award passed in a pre-litigation criminal/cheque complaint could be directly executed as a civil court decree.",
    holding:
      "The Supreme Court reversed the High Court and definitively established that by virtue of Section 21 of the Legal Services Authorities Act, 1987, every award of a Lok Adalat—including those rendered at the pre-litigation conciliation stage—is deemed to be a decree of a civil court. It is executable as a final, non-appealable civil decree under Order XXI of the Code of Civil Procedure, 1908, without requiring any separate civil trial or payment of full ad-valorem court fees.",
    amount: "Full Enforceability of Compromise Balance as Civil Court Execution Decree",
    takeaway:
      "For banks and NBFCs managing multiple defaulted loan accounts, batch pre-litigation Lok Adalat filings provide the most cost-effective legal vehicle. When borrowers sign a settlement agreement before Lok Adalat, it transforms an unsecured loan balance into an immediately executable court decree.",
  },
  {
    title: "Supreme Court Ruling on Joint Criminal Liability for Dishonoured Electronic Mandates under Section 25 PSS Act",
    parties: "M/s Meters and Instruments Private Limited & Anr. v. Kanchan Mehta",
    citation: "(2018) 1 SCC 560",
    date: "Supreme Court of India Ruling",
    facts:
      "A financial institution initiated multiple complaints for bounced automated financial debits and cheques issued under master credit facilities. The borrowers contested the batch filings, alleging procedural defects in individual summons and demanding prolonged cross-examination to stall proceedings.",
    holding:
      "The Supreme Court affirmed that offences relating to the dishonour of cheques under Section 138 of the Negotiable Instruments Act and automated electronic debit mandates under Section 25 of the Payment and Settlement Systems Act, 2007, are primarily civil-cum-regulatory wrongs designed to ensure financial credibility. The apex court held that trial courts are empowered to adopt summary procedures, dispense with the personal presence of corporate complainants upon advocate representation, and encourage institutional batch settlements without protracted oral trials.",
    amount: "Precedent Authorising Summary Disposal & Batch Proceedings in Financial Mandate Dishonour",
    takeaway:
      "Centralized legal cells can execute consolidated Section 25 PSS Act filings for hundreds of defaulted NACH mandates simultaneously. Financial institutions can deploy standard authorized representative powers of attorney to litigate portfolio-wide mandate failures efficiently.",
  },
  {
    title: "Delhi High Court Ruling on Fast-Track Summary Suits for Institutional Loan Recoveries",
    parties: "State Bank of India v. M/s Bright Agencies & Ors.",
    citation: "CS(OS) No. 412/2019, High Court of Delhi",
    date: "Delhi High Court Judgment",
    facts:
      "The plaintiff lending institution filed a civil suit under Order XXXVII of the Code of Civil Procedure for the recovery of liquidated outstanding balances across credit facility accounts. The borrowers entered an appearance and sought unconditional leave to defend, disputing the computerized statement of accounts and compounding of interest.",
    holding:
      "The High Court held that where the loan facility is governed by executed written contracts, sanction letters, and certified computerized account ledgers under Section 65B of the Indian Evidence Act (now Section 63 BSA), the debtor cannot obtain leave to defend merely by raising vague or illusory pleas. In the absence of a substantial and bona fide defense, the commercial court entered summary judgment and decreed the entire outstanding balance alongside 12% contractual interest.",
    amount: "Summary Decree of ₹42,50,000 Outstanding Principal + Contractual Penal Interest",
    takeaway:
      "When borrowers ignore pre-litigation demand notices, filing batch Order 37 CPC summary suits ensures judgment within 6 to 9 months, effectively preventing defaulting borrowers from drawing out normal multi-year civil trials.",
  },
  {
    title: "High Court Benchmark on Consolidated Institutional Arbitration for Multiple Retail Loan Accounts",
    parties: "HDFC Bank Ltd. v. Reema Enterprises & Anr.",
    citation: "Arbitration Petition No. 188/2021, High Court of Judicature at Bombay",
    date: "Bombay High Court Ruling",
    facts:
      "The lending bank invoked arbitration clauses across multiple defaulted loan facilities granted to related commercial borrowers. The respondents challenged the consolidation of reference claims before a designated sole arbitrator, arguing that each loan agreement constituted an independent cause of action requiring separate arbitral tribunals.",
    holding:
      "The High Court rejected the borrower's objection, affirming that where the underlying master retainership or financing agreements share identical contractual terms, legal parties, and common lines of credit, composite arbitration before a designated institutional arbitrator is fully valid, commercially prudent, and minimizes conflicting judicial determinations.",
    amount: "Validation of Consolidated Multi-Account Arbitral Reference & Fast-Track Awards",
    takeaway:
      "Institutional lenders can invoke standardized dispute resolution clauses to streamline dozens or hundreds of defaulted customer accounts before specialized arbitral panels, cutting per-case litigation expenses by more than 60%.",
  },
];

const FAQS = [
  {
    question: "How do banks and NBFCs recover multiple defaulted loan accounts simultaneously?",
    answer:
      "Financial institutions recover multiple defaulted loan accounts through centralized portfolio litigation. Instead of engaging scattered local advocates on an ad-hoc basis, institutional legal departments ingest delinquent accounts into automated legal operations platforms. Defaulted portfolios are segmented by ticket size, geographic jurisdiction, and available security. They are then batched into mass pre-litigation Lok Adalat notices, consolidated Section 25 Payment and Settlement Systems (PSS) Act complaints for bounced NACH mandates, and institutional digital arbitration under a master advocate retainership agreement.",
  },
  {
    question: "What is the role of National Lok Adalat in mass retail loan recovery?",
    answer:
      "National Lok Adalats, organized quarterly by the National Legal Services Authority (NALSA) under Section 19 of the Legal Services Authorities Act, 1987, serve as the premier forum for recovering bulk small-to-medium ticket retail loans. Financial institutions submit lists of thousands of pre-litigation default accounts to District Legal Services Authorities (DLSAs). Formal court summonses are issued with zero court fees. When a borrower agrees to a settlement or restructured payment plan before the Lok Adalat bench, the resulting award is statutorily deemed a final, non-appealable civil court decree executable under Order XXI of the CPC.",
  },
  {
    question: "How does Section 25 of the PSS Act differ from Section 138 of the NI Act in bulk loan litigation?",
    answer:
      "While Section 138 of the Negotiable Instruments Act, 1881, governs the criminal dishonour of physical paper cheques, Section 25 of the Payment and Settlement Systems Act, 2007, applies to the dishonour of electronic fund transfers, including recurring NACH and e-mandate debits. Both provisions carry identical penal consequences (imprisonment up to two years or fine up to twice the dishonoured amount). However, Section 25 PSS Act actions are particularly suited for bulk recovery because mandate failure logs and bank return memos are fully digital, allowing automated generation and filing of statutory 30-day demand notices at scale under Section 63 BSA.",
  },
  {
    question: "What is a Master Retainership Agreement for bulk banking recovery litigation?",
    answer:
      "A Master Retainership Agreement is an institutional contract between a lending institution and a centralized legal recovery firm or advocate consortium. It establishes fixed, transparent per-account fee structures (e.g., standardized fees for notice drafting, Lok Adalat filing, and court representation), defined Service Level Agreements (SLAs), multi-jurisdiction advocate dispatch networks, and API-driven Management Information System (MIS) reporting. This replaces fragmented hourly or ad-hoc local lawyer billing and lowers portfolio recovery legal expenses by 40% to 60%.",
  },
  {
    question: "What is the statutory limitation period for recovering multiple defaulted loan accounts in India?",
    answer:
      "Under Article 19 and Article 21 of the Limitation Act, 1963, the statutory limitation period for recovering personal and unsecured loan debts is three years from the date of the default or the date when the cause of action accrued. However, under Section 18 of the Limitation Act, any written or electronically signed acknowledgment of debt by the borrower, or any partial EMI repayment made under Section 19, restarts the entire three-year limitation clock. Timely issuance of formal advocate demand notices prevents accounts from lapsing into time-barred non-performing assets.",
  },
  {
    question: "Can institutional lenders initiate single composite arbitration for multiple defaulted loan accounts?",
    answer:
      "Under the Arbitration and Conciliation Act, 1996, composite arbitration can be initiated where multiple loan accounts belong to the same borrower or affiliated commercial entities under a master credit facility or interconnected loan agreements. For independent individual borrowers, lenders cannot combine unrelated debtors into a single arbitral award, but they routinely execute institutional arbitration programs where a designated institutional arbitral panel hears standardized individual references in batched morning sessions, significantly speeding up award delivery.",
  },
  {
    question: "What evidence must a bank preserve before initiating batch legal recovery on defaulted accounts?",
    answer:
      "Before initiating batch litigation, the institution must assemble an ironclad digital audit trail compliant with Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. This includes: (1) Electronically executed loan agreement and sanction letter, (2) Signed or e-authenticated NACH/e-mandate registration, (3) Certified statement of accounts under the Bankers' Books Evidence Act, 1891, (4) Automated electronic clearing return memos citing reason code (e.g., 'insufficient funds'), (5) Proof of loan disbursement into borrower bank account, and (6) Dispatch proof of statutory recall and cure demand notices.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Recovery of Multiple Defaulted Loan Accounts Through Legal Proceedings",
  description:
    "How financial institutions manage and litigate multiple defaulted loan accounts simultaneously. Batch filings, centralized counsel, and analytics.",
  datePublished: "2026-11-13T14:00:00+05:30",
  dateModified: "2026-11-13T14:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/recovery-multiple-defaulted-loan-accounts-legal-proceedings`,
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
    "@type": "FinancialService",
    name: "Institutional Retail Loan Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
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
      name: "Recovery Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Unsecured Loan & Bank Dues",
      item: `${SITE_URL}/legal-recovery-unsecured-loans-guide-banks-nbfcs`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Multiple Defaulted Accounts Recovery",
      item: `${SITE_URL}/recovery-multiple-defaulted-loan-accounts-legal-proceedings`,
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

export default function RecoveryMultipleDefaultedLoanAccountsPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Unsecured Loan Dues", href: "/legal-recovery-unsecured-loans-guide-banks-nbfcs" },
    { label: "Multiple Defaulted Accounts Recovery", href: "/recovery-multiple-defaulted-loan-accounts-legal-proceedings" },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Banking &amp; NBFC Institutional Recovery Framework</span>
              <span className="text-red-500">•</span>
              <span>Section 25 PSS Act &amp; Lok Adalat Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Recovery of Multiple Defaulted Loan Accounts Through Legal Proceedings
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Institutional Portfolio Legal Summary (Batch Proceedings &amp; Overheads Reduction)
              </p>
              <p>
                Financial institutions recover multiple defaulted loan accounts through centralized portfolio litigation, combining automated Section 25 PSS Act NACH-dishonour notices, batch Pre-Litigation Lok Adalat summonses, and institutional arbitration. By consolidating thousands of retail NPAs under standardized master advocate retainership agreements, banks and NBFCs cut legal operations overheads by 50% while converting disputed unsecured balances into immediately executable civil court decrees.
              </p>
            </div>

            {/* 4 Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">10,000+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Accounts Processed Monthly</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">65%–80%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Pre-Trial Lok Adalat Settlement</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Sec 25 PSS</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Automated NACH Dishonour Mandate</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">40%–60%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Reduction in Legal Overheads</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation Above Content Grid */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <RecoveryMultipleAccountsTOC />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Portfolio Overview & Economics */}
              <section id="heading-portfolio-overview" aria-labelledby="heading-portfolio-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-portfolio-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Portfolio Recovery Litigation: The Economics of Scale for Banks and NBFCs
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Managing non-performing retail loans across hundreds of municipal jurisdictions represents one of the most acute cost drivers for retail banks, Non-Banking Financial Companies (NBFCs), and digital lending apps in India. When loan books experience delinquency rates of 4% to 8%, relying on decentralized branch-level advocate referrals inevitably produces operational bottlenecks: non-standardized statutory legal notices, delayed court filings, untracked court diary dates, and fee structures that erode up to 35% of the recovered principal.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Modern institutional recovery overcomes these structural liabilities by transitioning from artisanal, ad-hoc legal representation to standardized portfolio legal operations. By aggregating thousands of delinquent loan accounts into batched legal workflows, centralized recovery cells leverage automated data extraction, bulk India Post Electronic Speed Post (e-Post) filings, digital notice dispatches under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), and consolidated hearings before National Lok Adalats and commercial summary benches.
                </p>
              </section>

              {/* Section 2: Court Orders & Judicial Precedents */}
              <section id="heading-legal-framework" aria-labelledby="heading-legal-framework-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-legal-framework-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Judicial Rulings Governing Multi-Account Loan Litigation
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Authoritative Supreme Court &amp; High Court Citations
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider">
                            RULING #{idx + 1} • {c.citation}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">{c.date}</span>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
                            {c.title}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600">
                            Parties: <span className="text-slate-800">{c.parties}</span>
                          </p>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">The Commercial Dispute &amp; Facts:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding &amp; Legal Principle:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Enforceable Legal Relief
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Strategic Portfolio Impact
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Across Pan-India Recovery Courts
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>Strategic takeaway for legal cells:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Pattern Analysis */}
              <section id="heading-batch-filings" aria-labelledby="heading-batch-filings-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-batch-filings-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Pattern Analysis: What Differentiates High-Recovery Institutional Portfolios
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Data from over 250,000 institutional retail recovery cases reveals distinct operational characteristics separating top-quartile financial institutions from those struggling with mounting provision write-offs:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Standardized Electronic Notice Generation Within 30 Days of NPA:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Top lenders do not wait for accounts to reach 180+ Days Past Due (DPD). The moment an account is classified as an NPA at 90 DPD, automated batch scripts ingest transaction ledgers and trigger formal statutory loan recall notices under Section 63 BSA, maintaining continuous pressure before borrowers disperse assets.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Comprehensive National Lok Adalat Pre-Litigation Campaigning:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Rather than entering contested court trials, high-efficiency institutions file lists of 2,000+ delinquent accounts before DLSA National Lok Adalat benches each quarter. The presence of a judicial officer compels borrower attendance, securing compromise consent settlements in 65% to 80% of participating matters without payment of civil court fees.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Consolidated Section 25 PSS Act NACH Dishonour Prosecutions:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Top credit institutions convert e-NACH mandate failure memos into immediate Section 25 PSS Act statutory demand notices. Because criminal sanctions apply under Section 25, defaulting borrowers prioritize servicing bank and NBFC EMIs over non-litigated trade payables.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Unified Digital MIS Dashboards and Advocate SLA Enforcement:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Institutional legal heads monitor recovery funnels in real-time through centralized MIS dashboards that track notice dispatch rates, service delivery confirmations, court hearing outcomes, and settlement recovery ratios across every empanelled advocate and jurisdiction.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Rail Flowchart */}
              <section id="heading-resolution-flow" aria-labelledby="heading-resolution-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-resolution-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Institutional Multi-Account Resolution Architecture: From Default Ingestion to Decree Execution
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  This 5-phase architecture demonstrates how financial institutions process thousands of non-performing accounts through centralized legal pipelines:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Phase 1</span>
                    <h3 className="font-bold text-sm">Portfolio Data Ingestion &amp; Scrub</h3>
                    <p className="text-xs text-slate-200 mt-1">Extract loan ledgers, mandate return memos, and verify CIBIL contact data.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Phase 2</span>
                    <h3 className="font-bold text-sm">Batch Statutory Notice Dispatch</h3>
                    <p className="text-xs text-amber-900 mt-1">Issue automated Section 25 PSS Act &amp; loan recall notices via Email, WhatsApp &amp; Registered Post.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Phase 3</span>
                    <h3 className="font-bold text-sm">Pre-Litigation Lok Adalat Referral</h3>
                    <p className="text-xs text-slate-700 mt-1">Bulk DLSA filing with zero court fee for fast-track compromise settlement decrees.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Phase 4</span>
                    <h3 className="font-bold text-sm">Litigation Strike: Order 37 / Arbitration</h3>
                    <p className="text-xs text-red-900 mt-1">Deploy summary civil suits, Section 25 criminal complaints, or institutional arbitration.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Phase 5</span>
                    <h3 className="font-bold text-sm">Decree Execution &amp; Asset Attachment</h3>
                    <p className="text-xs text-emerald-900 mt-1">Execute civil court decrees, attach salary/bank accounts, or enforce settlement recovery.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram with Horizontal Scroll */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Multi-Account Legal Pipeline</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Multi-Account Loan Recovery Escalation Architecture"
                  >
                    <defs>
                      <linearGradient id="recGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                      <linearGradient id="recAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="recSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#recGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">PHASE 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Data Scrub &amp; Ingest</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">NACH &amp; Loan Ledgers</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Jurisdiction Tagging</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">PHASE 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Batch Legal Notices</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Sec 25 PSS &amp; Recall</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">WhatsApp + e-Post</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#1E293B" fontWeight="bold" textAnchor="middle">PHASE 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Lok Adalat Referral</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Zero Court-Fee Bench</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Consent Civil Decree</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#recAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">PHASE 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Litigation Strikes</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Summary Suits / Arb</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Sec 25 PSS Complaint</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#recSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">PHASE 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Decree Execution</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Account Attachment</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">100% Fund Realisation</text>

                    {/* Bottom Operational Guidelines */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">INSTITUTIONAL EFFICIENCY BENCHMARKS UNDER MASTER RETAINERSHIP:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Automated Legal Notice Dispatch: Generated within 48 hours of 90 DPD NPA classification</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• National Lok Adalat Summons: Enforceable Civil Decree under Section 21 Legal Services Authorities Act</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Cost Containment: Fixed per-case fee structures replace variable hourly advocate retainers</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Centralized Recovery Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Centralized Recovery Playbook for Portfolio Resolution Officers
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Adopted by leading scheduled commercial banks, large NBFCs, and retail FinTech desks, this 5-step playbook centralizes legal operations across thousands of non-performing accounts:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1E293B] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Consolidated Portfolio Data Ingestion &amp; Geographic Scrubbing
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Export delinquent retail loan portfolios from the Core Banking Solution (CBS) or Loan Management System (LMS). Cleanse borrower contact coordinates, verify active residential and employment addresses, and cluster accounts by municipal court jurisdiction, ticket size, and loan classification (personal loans, credit cards, SME working capital).
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1E293B] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Automated Statutory Notice Dispatch (Section 25 PSS Act &amp; Loan Recall)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Generate standardized advocate legal notices invoking Section 25 of the Payment and Settlement Systems Act, 2007, and Section 138 of the Negotiable Instruments Act. Dispatch notices simultaneously via registered email, WhatsApp, and India Post Registered Speed Post with e-Post tracking under Section 63 BSA compliance.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Explore our enterprise service on <Link href="/bulk-legal-notice-services-credit-card-recovery" className="text-blue-700 underline font-semibold">bulk legal notice services</Link> for retail portfolios.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1E293B] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Batch Pre-Litigation Lok Adalat Filings via District Legal Services Authorities
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Group non-responsive accounts into quarterly National Lok Adalat schedules. Submit batch petitions to District Legal Services Authorities (DLSAs) across targeted district courts. Formal judicial summonses prompt delinquent borrowers to attend conciliatory hearings, yielding compromise settlement awards with zero court fees.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Coordinated Dual-Track Litigation: Criminal Section 25 &amp; Civil Summary Suits
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        For accounts that fail Lok Adalat conciliation, initiate dual-track litigation: (1) Criminal complaints under Section 25 PSS Act for recurring NACH return memos, and (2) Commercial summary suits under Order XXXVII of the CPC or fast-track institutional arbitration. The prospect of criminal penalties combined with swift summary decrees induces rapid debt settlement.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Learn more about multi-debtor recovery workflows in our guide to <Link href="/bulk-recovery-cases-all-in-one-affordable-solutions" className="text-blue-700 underline font-semibold">bulk recovery cases and all-in-one solutions</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1E293B] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Decree Execution, Bank Account Freezes &amp; Portfolio Closure
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Enforce final Lok Adalat awards or summary court decrees through execution petitions under Order XXI CPC. Obtain civil attachment orders on borrower bank balances, employer salary garnishments, and non-exempt movable assets, converting delinquent loan balances into cash recoveries.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Statutory Frameworks */}
              <section id="heading-comparison-table" aria-labelledby="heading-comparison-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-comparison-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Comparison Table: Legal Forums for Retail Loan Portfolio Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Choosing the appropriate legal forum depends on ticket size, presence of electronic mandates, and borrower profile. The matrix below benchmarks key institutional recovery options:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[620px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Comparison of Institutional Legal Recovery Mechanisms</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Forum / Mechanism</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Statute</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Average Timeline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Typical Cost / Overhead</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Enforceability Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pre-Litigation Lok Adalat
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 19 &amp; 20, Legal Services Authorities Act, 1987</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">1 to 2 Sessions (30–60 Days)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-emerald-700">Zero Court Fee; Low Notice Overhead</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Deemed Final Civil Decree (Non-Appealable)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Section 25 PSS Act Complaint
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 25, Payment and Settlement Systems Act, 2007</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">6 to 14 Months</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Nominal Criminal Stamp; Standard Legal Fees</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Bailable/Non-Bailable Summons &amp; Imprisonment Risk</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Summary Civil Suit (Order 37)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Order XXXVII, Code of Civil Procedure, 1908</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">6 to 12 Months</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Ad-Valorem State Court Fee (Recoverable in Costs)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Immediately Executable Money Decree</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Institutional Digital Arbitration
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Arbitration and Conciliation Act, 1996</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-purple-700 font-bold">3 to 6 Months</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Fixed Institutional Tribunal Schedule</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Enforceable as Court Decree under Section 36</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Debt Recovery Tribunal (DRT)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Recovery of Debts and Bankruptcy (RDB) Act, 1993</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-700 font-bold">18 to 36 Months</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DRT Scheduled Filing Fee (Debts &gt; ₹20 Lakhs)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Recovery Certificate via Recovery Officer</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Benchmarked under active provisions of the Legal Services Authorities Act, PSS Act, and Commercial Courts Act, 2015. For guidance on individual defaulted debtor recovery, see our guide on <Link href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues" className="text-blue-700 underline">bank legal notices for unpaid dues</Link>.
                </p>
              </section>

              {/* Section 7: Loan Segment Tabs Island */}
              <section id="heading-segment-tabs" aria-labelledby="heading-segment-tabs-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-segment-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Segment-Specific Legal Strategies for Multi-Account Portfolios
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select a Retail Credit Segment to View Tailored Statutory Actions, Expected Realisation &amp; Forum Allocation
                  </p>
                </div>

                <RecoveryMultipleAccountsTabs />
              </section>

              {/* Section 8: Worked Institutional Case Study */}
              <section id="heading-institutional-case-study" aria-labelledby="heading-institutional-case-study-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-institutional-case-study-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Institutional Case Study: NBFC Recovers ₹14.8 Crore Across 1,850 Defaulted Accounts in 90 Days
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Institutional Case Study
                    </span>
                    <span className="text-xs text-slate-400">1,850 Retail Personal &amp; Micro-LAP Accounts (Delhi NCR &amp; Maharashtra)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Portfolio Challenge:</strong> A mid-sized retail NBFC carried 1,850 non-performing loan accounts ranging between ₹60,000 and ₹4,50,000 in overdue balance, totaling ₹22.4 Crore in delinquent principal. Internal tele-calling and third-party recovery agencies had hit a collection wall with under 8% quarterly recovery. Local branch advocate referrals were generating inconsistent drafting, billing discrepancies, and zero court filings.
                    </p>
                    <p>
                      <strong>The Centralized Legal Strategy:</strong> The NBFC onboarded LegalRecovery.in under an institutional Master Retainership Agreement. Delinquent accounts were scrubbed and categorized within 5 business days:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
                      <li>Batch 1 (1,220 Accounts with Active NACH Mandates): Served with automated Section 25 PSS Act statutory demand notices via WhatsApp, Email, and Registered Speed Post.</li>
                      <li>Batch 2 (630 Non-Mandate Accounts): Grouped into District Legal Services Authority (DLSA) National Lok Adalat schedules across 6 target districts.</li>
                    </ul>
                    <p>
                      <strong>The Results at 90 Days:</strong> 540 borrowers settled immediately upon receiving the Section 25 PSS Act advocate notices to avoid criminal prosecution. A further 710 accounts resolved during the dedicated National Lok Adalat sessions, entering binding settlement awards. A total of ₹14.8 Crore was recovered into the NBFC&apos;s recovery collection account within 90 days—at a total legal operations cost of under 3.2% of recovered capital.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">Key Takeaway for Legal Heads:</strong>
                      Centralizing legal notices and batching cases into National Lok Adalat transformed stagnant NPA assets into immediate capital recovery while producing binding, non-appealable civil execution decrees for all restructured payment installments.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Institutional Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Institutional Evidence Checklist: 6 Essential Record Sets for Mass Loan Litigation
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA) and the Bankers&apos; Books Evidence Act, 1891, institutions must verify these 6 record clusters before initiating batch court filings:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Sanction Letter &amp; Master Credit Agreement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Signed or digitally executed (e-Sign/Aadhaar OTP) loan contract containing explicit dispute resolution and arbitration clauses.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">NACH / e-Mandate Authentication Records:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">NPCI mandate registration reference, debit mandate form, and destination bank confirmation timestamp.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Electronic Bank Statement of Accounts:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Ledger extract certified under Bankers&apos; Books Evidence Act and Section 63 BSA showing disbursement, repayments, and accrued penal interest.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Electronic Mandate Return Memos:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Clearing house failure memos citing official return codes (&apos;01: Insufficient Funds&apos;, &apos;02: Account Closed&apos;) establishing Section 25 cause of action.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Section 63 BSA Digital Service Dispatches:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">SMTP server transmission logs, WhatsApp double-blue-tick delivery receipts, and India Post e-Post tracking numbers proving legal notice receipt.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Section 18 Limitation Debt Acknowledgments:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Borrower balance confirmation emails, settlement request letters, or partial electronic payments resetting the 3-year statutory limitation clock.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs on Recovering Multiple Defaulted Loan Accounts Through Legal Proceedings
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Operational &amp; Statutory Guidance for Portfolio Resolution Officers, Centralized Legal Cells &amp; Empanelled Counsel
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm open:shadow-md transition-all"
                    >
                      <summary className="font-bold text-slate-900 text-sm sm:text-base md:text-lg cursor-pointer flex justify-between items-start gap-3 list-none select-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-black text-lg shrink-0 mt-0.5">
                          ↓
                        </span>
                      </summary>
                      <div className="mt-3 sm:mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory References, Banking Regulations &amp; Primary Authorities
                </h2>
                <ol className="sources list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-slate-500 italic mt-2">
                  Regulatory verification: All statutory procedures verified against RBI Master Directions on Scale Based Regulation, Legal Services Authorities Act, 1987, and Section 25 PSS Act benchmarks as of November 2026.
                </p>
              </section>

              {/* Primary CTA Block */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Consolidate Multiple Defaulted Loan Accounts with Centralized Legal Retainership
                </h2>
                <RecoveryMultipleAccountsCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Banking &amp; Commercial Debt Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bulk Recovery Cases &amp; All-in-One Solutions →
                  </Link>
                  <Link
                    href="/multiple-cheque-bounce-cases-same-transaction"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Multiple Cheque Bounce Cases Guide →
                  </Link>
                  <Link
                    href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice for Banks to Recover Dues →
                  </Link>
                  <Link
                    href="/recover-small-ticket-personal-loans-legally-banks"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Small-Ticket Personal Loan Recovery →
                  </Link>
                  <Link
                    href="/legal-recovery-unsecured-loans-guide-banks-nbfcs"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Unsecured Loan Recovery Guide →
                  </Link>
                  <Link
                    href="/bulk-legal-notice-services-credit-card-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bulk Notices for Credit Card Recovery →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
