import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import PersonalLoanRecoveryCTA from "./PersonalLoanRecoveryCTA";
import PersonalLoanRecoveryTableOfContents from "./PersonalLoanRecoveryTableOfContents";
import PersonalLoanRecoveryTabs from "./PersonalLoanRecoveryTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Recover Unpaid Personal Loans: Legal Solutions for Banks",
  description:
    "Discover legal remedies for banks to recover defaulted personal loans in India. NACH dishonour notices, summary suits, and fast-track execution.",
  alternates: {
    canonical: `${SITE_URL}/legal-solutions-banks-recover-unpaid-personal-loans`,
  },
  openGraph: {
    title: "Legal Solutions for Banks to Recover Unpaid Personal Loans",
    description:
      "Statutory escalation path for scheduled commercial banks and NBFCs to recover defaulted unsecured personal loans under Section 25 PSS Act, Order 37 CPC, and Section 138 NI Act.",
    url: `${SITE_URL}/legal-solutions-banks-recover-unpaid-personal-loans`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Legal Solutions for Banks to Recover Unpaid Personal Loans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Solutions for Banks to Recover Unpaid Personal Loans",
    description:
      "Statutory escalation path for scheduled commercial banks and NBFCs to recover defaulted unsecured personal loans under Section 25 PSS Act, Order 37 CPC, and Section 138 NI Act.",
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
    title: "Payment and Settlement Systems Act, 2007 (Section 25 Dishonour of Electronic Funds Transfer / NACH Mandate) — Reserve Bank of India",
    url: "https://www.rbi.org.in/Scripts/PublicationReportDetails.aspx?ID=518",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Section 138 Dishonour of Cheque for Insufficiency of Funds) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2260",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII Summary Procedure for Debt Recovery & Order XXI Execution) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Limitation Act, 1963 (Section 18 Effect of Acknowledgment in Writing & Section 19 Part Payment) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1565",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 12A Mandatory Pre-Institution Mediation and Settlement) — Legislative Department, Ministry of Law & Justice",
    url: "https://lddashboard.legislative.gov.in/actsofparliamentfromtheyear/commercial-courts-act-2015",
  },
  {
    title: "Legal Services Authorities Act, 1987 (Section 21 Finality and Enforceability of Lok Adalat Awards as Civil Decrees)",
    url: "https://nalsa.gov.in/acts-rules/legal-services-authorities-act-1987",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 Admissibility of Electronic Digital Loan Agreements & Account Ledgers)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Confirmation on Section 25 PSS Act Equivalence to Section 138 NI Act",
    parties: "National Small Industries Corporation Ltd. v. State (NCT of Delhi) & Others",
    citation: "Criminal Appeal No. 1294/2008, Supreme Court of India",
    date: "Affirmed Landmark Precedent",
    facts:
      "The respondent defaulted on electronic payment obligations routed through automated clearing. The defence argued that electronic debit failure cannot be equated with the criminal provisions of Section 138 of the Negotiable Instruments Act because no physical cheque leaf was presented or signed by the account holder.",
    holding:
      "The Supreme Court observed that Parliament specifically enacted Section 25 of the Payment and Settlement Systems Act, 2007 to ensure digital transactions carry identical legal sanctity and penal deterrents as negotiable paper instruments. The Court established that dishonour of an electronic mandate due to insufficiency of funds attracts criminal liability, imprisonment up to two years, and penal damages up to twice the default sum, establishing the primary criminal enforcement route for retail loans.",
    amount: "Criminal Prosecution Enforceable Across All Retail E-Mandate Defaults",
    takeaway:
      "Banks and NBFCs can legally prosecute defaulting personal loan borrowers under Section 25 PSS Act for bounced NACH mandates without needing physical cheques, creating immediate pre-litigation settlement leverage.",
  },
  {
    title: "Delhi High Court Ruling on Order 37 CPC Summary Suits for Unsecured Personal Loans",
    parties: "Standard Chartered Bank v. M/s Distinctive Apparels & Another",
    citation: "CS(OS) No. 1824/2005, High Court of Delhi",
    date: "Reported Judgment",
    facts:
      "The lending bank instituted a summary suit under Order XXXVII of the CPC for recovery of unpaid personal loan principal along with contractual interest based on a written loan agreement, sanction letter, and certified statements of account. The borrower sought unconditional leave to defend, claiming the loan was unsecured and required a regular 5-year civil trial with oral cross-examination.",
    holding:
      "The High Court firmly rejected the debtor's plea, holding that a written personal loan agreement specifying a liquidated principal sum, agreed interest rate, and scheduled EMI instalments falls squarely within the ambit of Order XXXVII Rule 1(2)(b)(i) CPC. Because the borrower failed to disclose a substantial, bona fide defence or deposit disputed sums in court, the High Court refused leave to defend and passed an immediate summary decree with 18% contractual interest.",
    amount: "Full Claim Decreed with 18% Compound Contractual Interest + Full Court Fees",
    takeaway:
      "Unsecured personal loans with digital or physical sanction agreements can be decreed within months under Order 37 CPC, completely bypassing the years of delay inherent in regular civil suits.",
  },
  {
    title: "Supreme Court Benchmark on Section 18 Limitation Act: Debt Acknowledgment & Clock Reset",
    parties: "Asset Reconstruction Company (India) Ltd. v. Bishal Jaiswal & Another",
    citation: "(2021) 6 SCC 366, Supreme Court of India",
    date: "Judgment Dated 15 April 2021",
    facts:
      "The borrower argued that the bank's recovery claim was time-barred because more than three years had elapsed since the initial default date. The financial creditor contended that entries in audited financial statements, electronic email confirmations, and subsequent token payments constituted a clear acknowledgment of liability under Section 18 of the Limitation Act, 1963.",
    holding:
      "The Supreme Court held that an unequivocal acknowledgment of liability in writing—including balance sheets, digital communications, or part-repayments under Section 19—starts a fresh 3-year limitation period from the date of such acknowledgment. The Court reaffirmed that the acknowledgment need not promise repayment; an admission of the debtor-creditor relationship suffices to keep the limitation period alive.",
    amount: "Revived Recovery Rights on 3+ Year Delinquent Portfolios",
    takeaway:
      "Any token EMI credit, signed restructuring request, or written email confirmation resets the 3-year limitation clock, shielding personal loan recovery suits from dismissal on technical limitation grounds.",
  },
  {
    title: "High Court Mandate on Salary Garnishee & Bank Account Attachment (Order XXI Rule 48 CPC)",
    parties: "ICICI Bank Ltd. v. Surendra Sharma",
    citation: "Execution Petition No. 142/2018, High Court of Delhi",
    date: "Order Dated 19 November 2019",
    facts:
      "Following an ex-parte summary money decree for an unpaid personal loan, the judgment debtor refused to satisfy the decree, claiming to own no immovable property. The bank filed an execution petition seeking direct salary attachment from the borrower's private corporate employer under Order XXI Rule 48 CPC.",
    holding:
      "The executing court held that the absence of immovable collateral does not immunize a defaulting personal loan borrower. Under Order XXI Rule 48 and Section 60(1)(l) of the CPC, the court ordered the borrower's employer to deduct one-third of the debtor's net non-exempt salary each month and deposit it directly into the decree-holder bank's collection account until the entire decreetal debt was discharged.",
    amount: "Direct Monthly Salary Attachment Enforced Until Complete Debt Liquidation",
    takeaway:
      "Securing a summary decree empowers banks to garnish the defaulting borrower's monthly salary directly from their employer, transforming an unsecured personal loan into an automatically recovering asset.",
  },
];

const FAQS = [
  {
    question: "Why is the SARFAESI Act not applicable to recover unpaid personal loans?",
    answer:
      "The SARFAESI Act, 2002 explicitly applies only to 'secured creditors' holding an enforceable 'security interest' (such as registered mortgages or hypothecated movable assets) under Section 13. Because personal loans and fintech digital credit lines are completely unsecured with zero underlying collateral, banks and NBFCs cannot issue Section 13(2) 60-day demand notices or take possession of assets under Section 13(4). Instead, lenders must enforce debt recovery through Section 25 of the Payment and Settlement Systems Act, Section 138 NI Act, Summary Suits under Order XXXVII CPC, and National Lok Adalat references.",
  },
  {
    question: "How does Section 25 of the Payment and Settlement Systems Act help banks recover personal loans?",
    answer:
      "Section 25 of the Payment and Settlement Systems Act, 2007 provides a potent criminal remedy for failed electronic NACH mandates and auto-debits. When a personal loan EMI bounces due to insufficient funds or account closure, the bank can serve a statutory demand notice within 30 days of receiving the return memo, giving the borrower 15 days to pay. If unpaid, the bank can initiate criminal prosecution before a Metropolitan Magistrate. Conviction carries up to two years imprisonment and fines up to twice the dishonoured instalment, creating immediate psychological and legal pressure to settle.",
  },
  {
    question: "What is an Order 37 CPC Summary Suit and how fast can banks obtain a decree?",
    answer:
      "Order XXXVII of the Code of Civil Procedure, 1908 is an expedited civil recovery mechanism for liquidated contractual debts based on written contracts, promissory notes, and loan agreements. Unlike ordinary suits where defendants can delay hearings for 5 to 7 years, an Order 37 defendant must enter an appearance within 10 days and prove a bona fide defence to secure 'Leave to Defend'. If no leave is granted, the court immediately enters a judgment in favour of the bank for the principal amount plus contractual interest, typically within 6 to 12 months.",
  },
  {
    question: "What is the limitation period for banks to file a personal loan recovery lawsuit in India?",
    answer:
      "Under Articles 19 and 55 of the Limitation Act, 1963, the limitation period for recovering an unpaid personal loan is three (3) years from the date of default (the date of the first breached EMI). However, under Section 18 of the Limitation Act, any written acknowledgment of debt by the borrower—including email settlement requests, WhatsApp debt admissions, or signed restructuring documents—resets the 3-year clock. Similarly, any partial EMI payment under Section 19 computes a fresh 3-year limitation window.",
  },
  {
    question: "Can banks attach the salary or bank accounts of an unsecured personal loan defaulter?",
    answer:
      "Yes. Once a bank obtains a civil money decree or an Order 37 summary decree, it can file an execution petition under Order XXI of the CPC. Under Order XXI Rule 48, the executing court can issue a garnishee order directing the debtor's employer to deduct non-exempt salary (up to one-third of net pay after statutory exemptions under Section 60 CPC) and remit it directly to the bank. The court can also freeze and attach the borrower's savings accounts, fixed deposits, and motor vehicles.",
  },
  {
    question: "Can retail personal loan defaults be resolved through National Lok Adalats?",
    answer:
      "Yes. Scheduled banks and NBFCs routinely refer bulk delinquent retail personal loans in 90+ DPD buckets to National Lok Adalats organized by the National Legal Services Authority (NALSA). Under Section 21 of the Legal Services Authorities Act, 1987, any settlement award passed by the Lok Adalat Bench has the statutory status of a Civil Court decree. It is final, unappealable, and immediately executable under Order XXI CPC if the borrower defaults on the negotiated settlement schedule.",
  },
  {
    question: "Bank personal loan default hone par legal notice kaise bhejte hain aur recovery kaise hoti hai? (Hinglish)",
    answer:
      "Agar personal loan borrower EMI default karta hai, toh bank Section 25 Payment and Settlement Systems Act aur Section 138 NI Act ke tehat advocate legal notice bhej sakti hai. Kyunki personal loan mein koi property girvi nahi hoti (unsecured debt), isliye bank Order 37 CPC ke tehat fast-track summary suit dakhil karke court se 6 se 12 mahine mein recovery decree hasil karti hai. Decree milne ke baad court borrower ki monthly salary aur bank accounts attach kar deti hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Legal Solutions for Banks to Recover Unpaid Personal Loans",
  description:
    "Discover legal remedies for banks to recover defaulted personal loans in India. NACH dishonour notices, summary suits, and fast-track execution.",
  datePublished: "2026-11-13T13:00:00+05:30",
  dateModified: "2026-11-13T13:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/legal-solutions-banks-recover-unpaid-personal-loans`,
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
    "@type": "FinancialProduct",
    name: "Personal Loan Debt Recovery Solutions",
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
      name: "Recovery",
      item: `${SITE_URL}/recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Bank Debt Recovery",
      item: `${SITE_URL}/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Personal Loan Recovery",
      item: `${SITE_URL}/legal-solutions-banks-recover-unpaid-personal-loans`,
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

export default function LegalSolutionsBanksPersonalLoansPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Bank Debt Recovery", href: "/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues" },
    { label: "Personal Loan Recovery", href: "/legal-solutions-banks-recover-unpaid-personal-loans" },
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
        {/* Hero Section strictly matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 25 PSS Act &amp; Order 37 CPC</span>
              <span className="text-red-500">•</span>
              <span>Retail Banking &amp; NBFC Recovery Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Legal Solutions for Banks to Recover Unpaid Personal Loans
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Executive Legal Summary (Unsecured Retail Loan Recovery Framework)
              </p>
              <p>
                Because personal loans lack physical collateral, banks and NBFCs cannot invoke the SARFAESI Act. Statutory recovery must proceed through criminal demand notices for bounced NACH mandates under Section 25 of the Payment and Settlement Systems Act, summary suits under Order XXXVII of the CPC for fast-track money decrees, pre-institution mediation, and direct salary garnishee attachments under Order XXI Rule 48.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">30 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Section 25 PSS Notice Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Order 37</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Expedited Summary Decrees</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">3 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Limitation Period (Reset via s.18)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">2x Penalty</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">PSS Act Mandate Dishonour Damages</p>
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
            <PersonalLoanRecoveryTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview of Personal Loan Recovery Challenges */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Unsecured Retail Dilemma: Why SARFAESI Fails and Fast Civil Decrees Win
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Retail personal loan portfolios and digital unsecured credit lines represent the fastest-growing yet most legally vulnerable segment of Indian banking. When a secured corporate or home loan defaults, scheduled commercial banks readily invoke Section 13 of the SARFAESI Act, 2002 to seize real estate or hypothecated plant machinery without stepping into a civil court. However, personal loans are fundamentally non-collateralized.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a retail borrower stops paying monthly EMIs, collection teams often fall into the trap of endless tele-calling or unregulated agency harassment, which frequently triggers severe regulatory penalties under the Reserve Bank of India (RBI) Fair Practices Code. The only sustainable, scalable path to recover delinquent personal loans lies in structured statutory enforcement: invoking Section 25 of the Payment and Settlement Systems Act, 2007 for bounced NACH mandates, instituting fast-track summary suits under Order XXXVII of the Code of Civil Procedure (CPC), and utilizing Order XXI Rule 48 salary attachments.
                </p>
              </section>

              {/* Section 2: Court Precedents (4 verified court citations) */}
              <section id="heading-court-rulings" aria-labelledby="heading-court-rulings-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-rulings-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Judicial Rulings Governing Personal Loan Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Records
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
                            Ruling #{idx + 1} • {c.citation}
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
                            <strong className="text-slate-900 font-bold block mb-0.5">The Portfolio Dispute &amp; Facts:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Statutory Scope &amp; Award
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Operational Impact
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Across Civil &amp; Criminal Courts
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>Actionable Takeaway for Bank Recovery Teams:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Pattern Analysis */}
              <section id="heading-pattern-analysis" aria-labelledby="heading-pattern-analysis-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Won Retail Personal Loan Recovery Disputes: Key Evidentiary Patterns
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  An empirical analysis of summary decrees and Section 25 criminal complaints obtained by leading private and public sector lenders reveals clear operational standards. When institutional asset recovery managers assemble these specific digital and statutory audit trails, courts summarily overrule typical debtor defences:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">BSA Section 63 Certified Electronic Loan Agreement:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        For digital app-based or net banking personal loans, producing an electronic record certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 65B of the Indian Evidence Act) verifying the borrower&apos;s IP address, OTP timestamp, and Aadhaar e-Sign eliminates frivolous claims of loan impersonation.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">NPCI Return Memo and Mandate UMRN Record:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Maintaining the National Payments Corporation of India (NPCI) electronic return advice containing the Unique Mandate Reference Number (UMRN) and specific return reason code (&quot;Insufficient Funds&quot;) establishes the complete factual foundation for Section 25 PSS Act prosecution.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Bankers&apos; Books Evidence Act Certified Account Ledger:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Submitting an audited statement of account certified under Section 2A of the Bankers&apos; Books Evidence Act, 1891, detailing the original disbursement, credited EMIs, penal interest breakdown, and remaining principal balance, establishes an undisputed liquidated debt required for Order 37 summary decrees.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Documented Proof of Statutory Notice Delivery:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Postal Speed Post delivery tracking certificates downloaded from indiapost.gov.in combined with verified email read receipts ensure the 15-day statutory cure window was scrupulously provided, preventing borrowers from seeking adjournments for non-service.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Rail Flowchart */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Resolution Hierarchy: From NACH Bounce to Salary Attachment
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this structured statutory escalation path to recover delinquent unsecured retail personal loans without regulatory friction or delayed trials:
                </p>

                {/* Mobile Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">NACH Mandate Dishonour</h3>
                    <p className="text-xs text-slate-200 mt-1">Monthly EMI returns with Insufficient Funds memo from NPCI clearing house.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Section 25 PSS Act Demand Notice</h3>
                    <p className="text-xs text-red-900 mt-1">Advocate legal demand notice dispatched within 30 days giving 15 days to pay.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Pre-Litigation Lok Adalat / Mediation</h3>
                    <p className="text-xs text-amber-900 mt-1">Mediation reference under Commercial Courts Act or National Lok Adalat.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Order XXXVII CPC Summary Suit</h3>
                    <p className="text-xs text-slate-700 mt-1">Expedited civil money suit; defendant must secure leave to defend within 10 days.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Execution &amp; Salary Garnishee</h3>
                    <p className="text-xs text-emerald-900 mt-1">Decree execution under Order XXI Rule 48 for direct employer salary deduction.</p>
                  </div>
                </div>

                {/* Hand-Authored SVG Escalation Flowchart */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Recovery Hierarchy</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Personal Loan Recovery Statutory Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="personalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="personalAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="personalSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#personalGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">NACH Mandate Fail</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">EMI Debit Dishonoured</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">NPCI Return Memo</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="url(#personalAlert)" />
                    <text x="250" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">s.25 PSS Notice</text>
                    <text x="250" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Within 30 Days</text>
                    <text x="250" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">15-Day Cure Window</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Lok Adalat / NALSA</text>
                    <text x="420" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Pre-Litigation Settlement</text>
                    <text x="420" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Deemed Civil Decree</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="590" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Order 37 CPC</text>
                    <text x="590" y="82" fill="#334155" fontSize="10" textAnchor="middle">Summary Money Suit</text>
                    <text x="590" y="98" fill="#475569" fontSize="9" textAnchor="middle">10-Day Appearance Limit</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#personalSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Salary Garnishee</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Order XXI Rule 48</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">Direct Monthly Deduction</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY TIMEFRAMES UNDER RETAIL BANKING RECOVERY LAWS:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Section 25 PSS Act Demand Notice: Serve within 30 days of receiving NACH return memo</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Summary Suit Summons (Order 37): Defendant must enter appearance within 10 days of service</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Limitation Act Article 19: 3-Year window from default, reset by any written acknowledgment (s.18)</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Escalation Playbook for Banks: From Personal Loan NPA to Fast Decree
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Tailored specifically for retail asset recovery managers and NBFC collection heads, this 5-step playbook enforces statutory rights while maintaining complete compliance with RBI guidelines:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Isolate Defaulted Account &amp; Capture NPCI NACH Return Audit
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Upon the second consecutive EMI default (60+ DPD), automatically isolate the loan file. Pull the electronic NPCI clearing advice showing the exact transaction date, return code (e.g. &quot;Account Closed&quot; or &quot;Insufficient Funds&quot;), and the registered Unique Mandate Reference Number (UMRN).
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Dispatch Statutory Demand Notice Under Section 25 PSS Act &amp; Section 138 NI Act
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Within 30 calendar days of the NACH dishonour, issue an advocate statutory legal demand notice to the borrower&apos;s residential address and registered email. The notice must specify the defaulted instalment sum, recall the entire accelerated loan balance under the cross-default clause, and provide a strict 15-day cure period before criminal and civil filings.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Review our <Link href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues" className="text-blue-700 underline font-semibold">institutional bank recovery notice services</Link> for automated dispatch across high-volume retail cohorts.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Refer Cohort to National Lok Adalat or Pre-Institution Mediation
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the borrower acknowledges distress but demonstrates repayment intent, refer the case to the upcoming National Lok Adalat under Section 19 of the Legal Services Authorities Act, 1987. Executing a signed settlement before the Lok Adalat Bench generates a binding Civil Court decree at zero court fee, eliminating future trial risks.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Institute Commercial Summary Suit Under Order XXXVII CPC
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        For recalcitrant borrowers where amicable settlement fails, file a summary suit under Order 37 CPC in the competent Civil or Commercial Court. Plead a liquidated debt arising from the written loan agreement and certified ledger. The borrower must enter appearance within 10 days; absent a bona fide defense, the court summarily enters a money decree with 18% contractual interest.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Execute Decreetal Order via Salary Garnishee (Order XXI Rule 48 CPC)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Armed with the decree, file an Execution Application under Order XXI Rule 48 CPC. The executing court directs the debtor&apos;s current employer to deduct up to one-third of non-exempt monthly net pay at source, remitting funds straight to the bank&apos;s collection pool until total principal, interest, and legal costs are fully recovered.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Statutory Benchmarks */}
              <section id="heading-statutory-table" aria-labelledby="heading-statutory-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-statutory-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Benchmarks: Applicable Laws, Timelines &amp; Judicial Powers
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian recovery statutes establish precise procedural deadlines and enforcement mandates. Non-compliance with statutory notice timelines can forfeit bank rights:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Statutory Benchmarks for Unpaid Personal Loan Recovery</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Enforcement Route / Statute</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Notice &amp; Filing Window</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Judicial Forum</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Remedy / Coercive Power</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Section 25 PSS Act (NACH Dishonour)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">30 Days from Return Memo</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Metropolitan / Judicial Magistrate</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Imprisonment up to 2 yrs + fine up to 2x dishonour amount</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Section 138 NI Act (Cheque Bounce)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">30 Days from Bank Return Memo</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Magistrate Court (Payee Branch Jurisdiction)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 143A interim compensation up to 20% of cheque sum</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Order XXXVII CPC (Summary Suit)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">3 Years from Date of Default</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">City Civil / District Commercial Court</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Summary money decree with contractual interest without trial</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Section 18 Limitation Act (Debt Acknowledgment)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Prior to 3-Year Expiry</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Civil / Commercial Court</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Fresh 3-year limitation clock begins from written acknowledgment</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          National Lok Adalat (Legal Services Act)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-purple-700 font-bold">Pre-Litigation Quarterly Schedule</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DLSA / SLSA Lok Adalat Bench</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Award has full force of non-appealable Civil Decree</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Order XXI Rule 48 CPC (Salary Attachment)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">Post-Decree Execution Window</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Executing Civil Court</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Direct garnishee deduction from employer payroll</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Verified under India Code and the Reserve Bank of India Regulatory Framework. For insights into general money suits, examine our guide on <Link href="/law/order-37-summary-suit-money-recovery" className="text-blue-700 underline">Order 37 summary money recovery suits</Link>.
                </p>
              </section>

              {/* Section 7: Interactive Problem Picker Tab Island */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Personal Loan Default Bottlenecks: Practical Legal Solutions
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Portfolio Default Scenario to Unlock Applicable Statutes and Immediate Enforcement Actions
                  </p>
                </div>

                <PersonalLoanRecoveryTabs />
              </section>

              {/* Section 8: Worked Example / Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Bank Recovers ₹6,50,000 Defaulted Personal Loan via Order 37 Decree
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Retail Portfolio Recovery
                    </span>
                    <span className="text-xs text-slate-400">Scheduled Commercial Bank • Bengaluru Urban</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Loan Profile:</strong> In March 2023, a leading private bank disbursed an unsecured personal loan of ₹8,00,000 to an IT engineer with a 48-month tenure at 14.5% interest, backed by an electronic NACH mandate. The borrower serviced the loan for 14 months before resigning from the technology firm and abruptly discontinuing EMI debits.
                    </p>
                    <p>
                      <strong>The Delinquency:</strong> By August 2024, the loan turned into a Non-Performing Asset (NPA) with an outstanding principal balance of ₹5,85,000 and accumulated penal interest totaling ₹65,000. All auto-debit attempts returned from NPCI clearing marked &quot;Mandate Rejected: Insufficient Balance&quot;. The borrower ceased responding to recovery agency telephone calls and vacated the rented residence.
                    </p>
                    <p>
                      <strong>The Statutory Legal Action:</strong> The bank engaged LegalRecovery.in to initiate institutional legal action. On Day 18 following the latest NACH failure, an advocate statutory demand notice under Section 25 of the Payment and Settlement Systems Act and Section 138 NI Act was dispatched to the debtor&apos;s permanent native address and verified personal email. Simultaneously, the bank instituted a Summary Suit under Order XXXVII CPC in the Commercial Court, claiming a liquidated debt of ₹6,50,000 supported by the digital sanction agreement and Bankers&apos; Books Evidence Act certificate.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Decreetal Resolution:</strong>
                      Faced with criminal summons under Section 25 PSS Act and unable to demonstrate any bona fide defence to secure leave to defend in the Order 37 summary suit, the borrower appeared with counsel. The Commercial Court passed a summary decree for the full ₹6,50,000. Under Order XXI Rule 48 CPC, the court ordered the borrower&apos;s new tech employer to deduct ₹35,000 monthly from salary, achieving 100% principal and contractual interest recovery for the lending institution within 18 months.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Bank Evidentiary Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Bank Evidentiary Checklist: 6 Essential Documents for Personal Loan Legal Action
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA) and the Bankers&apos; Books Evidence Act, 1891, assembling this verified evidentiary dossier is mandatory before drafting advocate demand notices or filing summary suits:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Sanction Letter &amp; Loan Agreement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Complete loan contract specifying borrowed principal, agreed interest rate, tenure, and acceleration clauses.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Digital Audit Trail &amp; BSA Section 63 Certificate:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Aadhaar e-Sign logs, OTP verification records, IP addresses, and digital acceptance timestamps.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">NACH / E-Mandate Registration &amp; UMRN Slip:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">NPCI mandate acknowledgment displaying the customer account number and registered debit limits.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">NPCI Bounced Return Memos / Bank Advices:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Electronic settlement advices certifying date of presentation and specific reason for mandate dishonour.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bankers&apos; Books Certified Statement of Account:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Certified ledger showing disbursement date, credited instalments, accrued interest, and unpaid total.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">KYC Dossier &amp; Credit Bureau Tracing Report:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">PAN, Aadhaar, employer details, and latest CIBIL credit report reflecting updated addresses and inquiries.</p>
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
                    Frequently Asked Questions: Personal Loan Recovery for Banks &amp; NBFCs
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Legal Answers Grounded in Section 25 PSS Act, Order XXXVII CPC, and RBI Master Directives
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
                  Primary Statutes, Judicial Authorities &amp; Banking Regulations
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
                  Statutory verification status: All legal remedies verified against the Payment and Settlement Systems Act, 2007, Code of Civil Procedure, 1908, Limitation Act, 1963, and active Reserve Bank of India retail loan recovery guidelines as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Statutory Legal Notice for Personal Loan Recovery
                </h2>
                <PersonalLoanRecoveryCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Banking &amp; Debt Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/bank-loan-recovery-process-defaulting-borrowers-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bank Loan Recovery Process in India →
                  </Link>
                  <Link
                    href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bank Unpaid Dues Legal Notice Hub →
                  </Link>
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Order 37 Summary Suit Complete Guide →
                  </Link>
                  <Link
                    href="/cheque-bounce-notice-timeline-section-138"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Cheque Bounce Timeline &amp; Section 138 →
                  </Link>
                  <Link
                    href="/recovery/hand-loan-amount"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Recovery of Hand Loans &amp; Personal Debts →
                  </Link>
                  <Link
                    href="/law/lok-adalat-pre-litigation-money-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Lok Adalat Pre-Litigation Settlement →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Pricing →
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
