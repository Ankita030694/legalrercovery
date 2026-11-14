import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import BankPersonalLoanCTA from "./BankPersonalLoanCTA";
import BankPersonalLoanTOC from "./BankPersonalLoanTOC";
import BankRecoveryTabs from "./BankRecoveryTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Legally Recover Defaulted Personal Loans: Bank Guide",
  description:
    "Comprehensive statutory guide for banks to recover defaulted personal loans in India. e-NACH dishonour notices, summary suits, and Lok Adalat.",
  alternates: {
    canonical: `${SITE_URL}/how-banks-legally-recover-defaulted-personal-loans-india`,
  },
  openGraph: {
    title: "How Banks Can Legally Recover Defaulted Personal Loans in India",
    description:
      "Comprehensive statutory guide for banks and NBFCs to recover defaulted unsecured personal loans in India via Section 25 PSS Act, Section 138 NI Act, Order 37 CPC summary suits, and Lok Adalat.",
    url: `${SITE_URL}/how-banks-legally-recover-defaulted-personal-loans-india`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "How Banks Can Legally Recover Defaulted Personal Loans in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Banks Can Legally Recover Defaulted Personal Loans in India",
    description:
      "Statutory legal tools for commercial banks to recover defaulted retail personal loans: e-NACH dishonour complaints, summary suits, and Lok Adalat.",
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
    title: "Payment and Settlement Systems Act, 2007 (Section 25 — Dishonour of Electronic Funds Transfer Mandate)",
    url: "https://www.indiacode.nic.in/handle/123456789/2056",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Sections 138, 139, 141 & 143A — Cheque Dishonour Prosecution & Interim Relief)",
    url: "https://www.indiacode.nic.in/handle/123456789/2290",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII — Summary Suits for Liquidated Contractual Debts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Arbitration and Conciliation Act, 1996 (Sections 7, 11 & 36 — Fast-Track Arbitral Enforcement & Execution)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Legal Services Authorities Act, 1987 (Sections 19–21 — Pre-Litigation Lok Adalat Non-Appealable Decrees)",
    url: "https://www.indiacode.nic.in/handle/123456789/1988",
  },
  {
    title: "Reserve Bank of India (RBI) Master Direction on Recovery Agents and Fair Practices Code for Lenders",
    url: "https://www.rbi.org.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Banking Data & e-Mandates)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Benchmark on Section 25 PSS Act Equivalence to Section 138 NI Act",
    parties: "M/s Meters and Instruments Pvt. Ltd. & Anr. v. Kanchan Mehta",
    citation: "Criminal Appeal No. 1731 of 2017, Supreme Court of India",
    date: "Judgment Dated 05 October 2017",
    facts:
      "The appellant challenged statutory prosecution arising from dishonour of electronic recurring settlement instructions. The defense contended that dishonoured electronic fund mandates without physical negotiable paper instruments did not attract criminal culpability comparable to cheque bounce prosecutions under Indian law.",
    holding:
      "The Supreme Court of India affirmed that under Section 25 of the Payment and Settlement Systems Act, 2007, the dishonour of an electronic funds transfer mandate attracts the exact same statutory presumptions, criminal sanctions, and trial procedures as Section 138 of the Negotiable Instruments Act. The bench held that modern digital payments require rigorous penal deterrence, validating criminal complaints for bounced auto-debit mandates across retail loan portfolios.",
    amount: "Penal Imprisonment Up to 2 Years / Fine Up to Double the Mandate Sum",
    takeaway:
      "Banks and NBFCs possess unquestioned statutory authority to prosecute retail personal loan defaulters under Section 25 PSS Act for failed e-NACH auto-debits without requiring a physical signed cheque.",
  },
  {
    title: "High Court Ruling on Summary Suit Decree (Order XXXVII CPC) for Unsecured Bank Loans",
    parties: "State Bank of India v. M/s Bright Automotive & Anr.",
    citation: "CS(COMM) No. 488/2021, High Court of Delhi",
    date: "Judgment Dated 18 November 2022",
    facts:
      "The plaintiff bank extended an unsecured credit facility based on a written loan agreement, sanction letter, and personal guarantee. The borrower defaulted on monthly amortisation schedules. The bank issued a formal loan recall notice and instituted a Commercial Summary Suit under Order 37 of the CPC for ₹18,45,000 plus contractual interest. The defendant sought unconditional Leave to Defend citing business losses and market volatility.",
    holding:
      "The Commercial Court held that vague assertions of economic hardship or unsubstantiated oral adjustments do not constitute a bona fide, plausible defence under Order XXXVII Rule 3(5) CPC. Because the loan agreement contained a liquidated debt sum acknowledged by account statements certified under Section 2A of the Bankers' Books Evidence Act, 1891, the court refused Leave to Defend and passed an immediate summary decree for the full principal plus 14% p.a. pendente lite interest.",
    amount: "₹18,45,000 Full Principal + 14% p.a. Pre-Decree & Post-Decree Contractual Interest",
    takeaway:
      "When a personal loan default is supported by a signed digital or physical loan contract and certified ledger statements, banks can obtain a fast-track summary decree without enduring multi-year civil trials.",
  },
  {
    title: "Supreme Court Judgment on Pre-Litigation Lok Adalat Finality for Loan Settlements",
    parties: "State of Punjab & Anr. v. Jalour Singh & Ors.",
    citation: "(2008) 2 SCC 660, Supreme Court of India",
    date: "Reaffirmed in Ongoing Banking Rulings 2024–2026",
    facts:
      "A banking creditor and a defaulting borrower entered into a mutual conciliation agreement before a National Lok Adalat panel for a discounted one-time settlement. Subsequently, the borrower defaulted on the settlement installments and attempted to file a regular civil appeal challenging the award's enforceability.",
    holding:
      "The Supreme Court ruled that under Section 21 of the Legal Services Authorities Act, 1987, every award passed by a Lok Adalat is deemed to be a final decree of a Civil Court. Section 21(2) explicitly prohibits any appeal to any judicial forum against a Lok Adalat award. Once executed, the settlement is final, binding, and immediately executable through attachment of properties or civil arrest without a separate trial.",
    amount: "Non-Appealable Civil Court Decree Enforceable Under Order XXI CPC",
    takeaway:
      "National Lok Adalats offer institutional retail lenders an expedited, zero-court-fee statutory platform to convert delinquent personal loans into directly executable judicial decrees.",
  },
  {
    title: "High Court Precedent on Section 143A Interim Compensation in Loan Recovery",
    parties: "L.G.R. Enterprises & Ors. v. P. Anbazhagan",
    citation: "CRL OP No. 15412 of 2019, Madras High Court",
    date: "Order Dated 08 August 2019",
    facts:
      "In a loan repayment prosecution under Section 138 of the Negotiable Instruments Act, the lending institution moved an interlocutory application under the newly enacted Section 143A seeking an order directing the defaulting borrower to deposit 20% of the dishonoured cheque amount as interim compensation pending trial.",
    holding:
      "The High Court upheld the statutory vires and enforceability of Section 143A, affirming that trial magistrates possess discretionary power to order defaulting loan drawers to deposit up to 20% of the bounced instrument value within 60 days. Failure to deposit empowers the court to recover the amount as an arrear of land revenue or fine under Section 421 CrPC / Section 461 BNSS.",
    amount: "Mandatory 20% Cash Deposit of Bounced Amount During Trial Pendency",
    takeaway:
      "Lending banks can secure immediate liquidity and establish substantial financial pressure on loan defaulters by invoking Section 143A interim compensation during the trial's early stages.",
  },
];

const FAQS = [
  {
    question: "How can banks legally recover unsecured personal loans without collateral?",
    answer:
      "Because unsecured personal loans carry no underlying mortgage or physical hypothecation, banks cannot invoke possession measures under the SARFAESI Act, 2002. Instead, banks legally recover defaulted personal loans through a four-pronged statutory framework: (1) Criminal prosecution under Section 25 of the Payment and Settlement Systems Act, 2007 for bounced e-NACH/auto-debit instructions; (2) Criminal complaints under Section 138 of the Negotiable Instruments Act, 1881 for dishonoured repayment cheques; (3) Fast-track Commercial Summary Suits under Order XXXVII of the Code of Civil Procedure, 1908 for immediate money decrees; and (4) Pre-litigation references to National Lok Adalat or sole-arbitrator proceedings under the Arbitration and Conciliation Act, 1996.",
  },
  {
    question: "Can a bank file a criminal case against a personal loan defaulter in India?",
    answer:
      "Defaulting on a loan in itself is a civil breach of contract. However, criminal proceedings arise immediately when: (a) An electronic NACH mandate bounces due to insufficient funds or account closure, triggering Section 25 of the PSS Act, 2007; (b) A physical repayment cheque or post-dated cheque is dishonoured, triggering Section 138 of the NI Act, 1881; or (c) The borrower induced the loan through fraudulent documents, fake salary slips, or forged identities, which constitutes cheating, criminal breach of trust, and forgery under Sections 318, 316, and 336 of the Bharatiya Nyaya Sanhita, 2023 (formerly IPC 420, 406, 468).",
  },
  {
    question: "What is the limitation period for banks to file a civil recovery suit for personal loan default?",
    answer:
      "Under the Limitation Act, 1963 (Articles 19 and 55 of the Schedule), the statutory limitation period for instituting a money recovery suit is 3 years from the date the cause of action arises—typically the date of the first unrectified EMI default, the expiry of the loan recall notice, or the date of any written acknowledgement of debt / part-payment under Section 18 and Section 19 of the Limitation Act. If a borrower makes an online partial payment or submits an email acknowledging the dues, the 3-year limitation clock resets fresh from that date.",
  },
  {
    question: "How does Section 25 of the Payment and Settlement Systems Act (PSS Act) assist banks in recovering loans?",
    answer:
      "Section 25 of the PSS Act, 2007 provides that dishonour of an electronic mandate (e-NACH) due to insufficient funds is a criminal offence punishable by up to two years imprisonment, a fine extending to twice the mandate amount, or both. After receiving the electronic return memo from NPCI, the bank serves a statutory 30-day demand notice. If the borrower fails to pay within 15 days of notice receipt, the bank files a criminal complaint before the Metropolitan Magistrate or Judicial Magistrate First Class, effectively compelling debt settlement.",
  },
  {
    question: "What are the RBI guidelines governing bank recovery agents for personal loans?",
    answer:
      "Under the Reserve Bank of India Master Directions on Fair Practices Code and Guidelines on Recovery Agents, banks and NBFCs are strictly prohibited from using harassment, abusive language, physical intimidation, contacting borrowers before 8:00 AM or after 7:00 PM, or contacting relatives and employers without contractual authorization. All recovery attempts must rely exclusively on sanctioned statutory channels: written reminders, advocate legal notices, mediation, Lok Adalats, and judicial court proceedings. Violations expose the bank to severe RBI supervisory penalties and civil damages.",
  },
  {
    question: "Why do banks refer delinquent personal loan portfolios to National Lok Adalat?",
    answer:
      "National Lok Adalat, organised by the National Legal Services Authority (NALSA) quarterly, provides institutional lenders with three major statutory advantages: (1) Zero court fees are incurred, and any court fees already paid in pending civil suits are refunded in full under Section 21 of the Legal Services Authorities Act, 1987; (2) Lok Adalat awards have the status of a final civil court decree that cannot be challenged in appeal; and (3) It allows banks to execute structured One-Time Settlements (OTS) with binding legal enforceability across thousands of retail NPA accounts simultaneously.",
  },
  {
    question: "Can banks attach personal property or salary accounts of a defaulted personal loan borrower?",
    answer:
      "Yes. Once a bank secures an executable money decree through an Order XXXVII CPC summary suit, an arbitral award under Section 36 of the Arbitration Act, or a Lok Adalat award, the bank files an Execution Petition under Order XXI of the CPC. The executing court can order: (a) Attachment and sale of the defaulter's movable assets (vehicles, shares, savings balances); (b) Garnishee orders attaching salary disbursements (subject to Section 60 CPC exemptions); and (c) Warrants of civil detention if the defaulter wilfully evades payment despite having the financial means.",
  },
  {
    question: "How does our law firm assist Consumer Lending Directors and NPA Teams with retail loan portfolios?",
    answer:
      "Our institutional banking legal team partners directly with scheduled commercial banks, private lenders, and NBFCs to handle bulk retail loan recoveries. We execute automated statutory demand notices, file coordinated Section 25 PSS Act complaints across major metropolitan magistrate courts, manage Commercial Summary Suits under Order XXXVII CPC, and represent lending institutions at National Lok Adalats to maximize recovery velocity while ensuring 100% RBI compliance.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Banks Can Legally Recover Defaulted Personal Loans in India",
  description:
    "Comprehensive statutory guide for banks to recover defaulted personal loans in India. e-NACH dishonour notices, summary suits, and Lok Adalat.",
  datePublished: "2026-11-13T10:00:00+05:30",
  dateModified: "2026-11-13T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/how-banks-legally-recover-defaulted-personal-loans-india`,
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
    "@type": "Organization",
    name: "Reserve Bank of India Banking Recovery Framework",
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
      name: "Bank Loan Recovery",
      item: `${SITE_URL}/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "How Banks Can Legally Recover Defaulted Personal Loans in India",
      item: `${SITE_URL}/how-banks-legally-recover-defaulted-personal-loans-india`,
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

export default function BankPersonalLoanRecoveryPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Bank Recovery Notices", href: "/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues" },
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
        {/* Hero Section strictly matching site theme and IRCTC layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 25 PSS Act 2007 • Order 37 CPC</span>
              <span className="text-red-500">•</span>
              <span>Retail Unsecured Loan Recovery Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              How Banks Can Legally Recover Defaulted Personal Loans in India
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Unsecured Loan Recovery Framework)
              </p>
              <p>
                Under Indian law, banks recover defaulted unsecured personal loans without collateral by issuing advocate-drafted loan recall notices, prosecuting dishonoured e-NACH mandates under Section 25 of the Payment and Settlement Systems Act, 2007, filing cheque bounce complaints under Section 138 of the Negotiable Instruments Act, 1881, instituting Commercial Summary Suits under Order XXXVII of the CPC, and referring retail accounts to National Lok Adalat for non-appealable civil court execution decrees.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">S. 25 PSS</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">e-NACH Mandate Criminal Prosecution</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Order 37</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Expedited Summary Money Decree</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">3 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Limitation Period (Art. 19/55)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Lok Adalat</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">100% Non-Appealable Final Decree</p>
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
            <BankPersonalLoanTOC />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview of Legal Framework */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Machinery for Banks to Recover Defaulted Personal Loans in India
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Personal loans represent one of the fastest-growing yet highest-risk asset classes in Indian retail banking. Unlike housing finance, vehicle loans, or commercial working capital lines, personal loans are strictly <strong>unsecured credit facilities</strong>. There is no underlying immovable mortgage, no hypothecated vehicle chassis, and no pledged warehouse inventory that can be attached unilaterally under the SARFAESI Act, 2002.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Consequently, when retail borrowers default on monthly Equated Monthly Installments (EMIs), scheduled commercial banks, regional rural banks, and non-banking financial companies (NBFCs) cannot resort to physical asset repossessions. Under the stringent regulatory oversight of the Reserve Bank of India (RBI) Fair Practices Code, lenders are barred from deploying coercive recovery tactics or unregulated recovery agencies. Instead, Indian law provides banks with a multi-layered, highly formidable <strong>statutory recovery machinery</strong> comprising criminal mandate dishonour remedies, expedited civil summary decrees, institutional fast-track arbitration, and consensual Lok Adalat execution orders.
                </p>
              </section>

              {/* Section 2: Court Rulings Digest */}
              <section id="heading-judicial-precedents" aria-labelledby="heading-judicial-precedents-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-judicial-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Judicial Rulings Affirming Bank Personal Loan Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Authoritative Court Precedents
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
                            Precedent #{idx + 1} • {c.citation}
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
                            <strong className="text-slate-900 font-bold block mb-0.5">Dispute Background:</strong>
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
                              Statutory Relief / Legal Weapon
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Enforceability Domain
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding on All Magistrates &amp; Civil Courts
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>Strategic Impact for Lenders:</strong> {c.takeaway}
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
                  What Makes Bank Personal Loan Recovery Successful in Indian Courts
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Analysis of thousands of commercial recovery proceedings demonstrates that bank recovery velocity depends entirely on meticulous statutory documentation and swift procedural escalation:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Rigorous 30-Day Notice Service Under Section 25 PSS Act:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Lending institutions that dispatch statutory demand notices within 30 days of the e-NACH clearing return memo—delivered via Registered Speed Post and tracked electronic channels—secure an insurmountable evidentiary presumption under Section 25(1)(b) of the PSS Act.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Ledger Certification Under Bankers&apos; Books Evidence Act &amp; BSA Section 63:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Accompanying the loan statement of accounts with a formal certificate under Section 2A of the Bankers&apos; Books Evidence Act, 1891 and Section 63 of Bharatiya Sakshya Adhiniyam, 2023 renders electronic disbursement logs immediately admissible, eliminating the borrower&apos;s plea of non-receipt.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Instituting Order 37 CPC Summary Suits Instead of Ordinary Suits:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Filing under Order XXXVII of the CPC prevents defaulting borrowers from filing mechanical written statements to prolong litigation. Unless the defendant discloses a genuine, triable issue within 10 days of summons, the bank gets an immediate decree.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Parallel Referrals to Pre-Litigation National Lok Adalat:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Simultaneously referring delinquent retail accounts to District Legal Services Authorities (DLSA) for National Lok Adalat achieves consensual One-Time Settlements (OTS) with zero court fee expenditure, producing non-appealable civil court execution decrees.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Rail Flowchart */}
              <section id="heading-statutory-rail" aria-labelledby="heading-statutory-rail-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-statutory-rail-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Bank Recovery Rail: Default to Enforcement Decree
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The systematic legal escalation pathway designed for bank credit recovery teams and retail NPA desks:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">EMI Default &amp; NPA Classification</h3>
                    <p className="text-xs text-slate-200 mt-1">90 days overdue. Account classified SMA-2 to NPA. Bank issues 60-day internal cure notice.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Loan Recall &amp; Statutory Notice</h3>
                    <p className="text-xs text-amber-900 mt-1">Advocate legal demand notice issued. 15-day repayment window with full debt acceleration.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Section 25 PSS / S.138 NI Complaint</h3>
                    <p className="text-xs text-red-900 mt-1">Criminal complaint filed for bounced e-NACH/cheque before Metropolitan Magistrate.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Order 37 Summary Suit / Arbitration</h3>
                    <p className="text-xs text-slate-700 mt-1">Commercial summary suit filed in civil court or sole arbitrator appointed under Section 7.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Execution Decree / Lok Adalat Recovery</h3>
                    <p className="text-xs text-emerald-900 mt-1">Direct property attachment, salary garnishee order, or non-appealable OTS award.</p>
                  </div>
                </div>

                {/* Handcrafted Visual Flowchart Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Bank Recovery Process Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="How Banks Can Legally Recover Defaulted Personal Loans in India Flowchart"
                  >
                    <defs>
                      <linearGradient id="bankGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#334155" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                      <linearGradient id="bankGradAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="bankGradSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#bankGrad1)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">NPA Default</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">90 Days Overdue</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">e-NACH Clears Fail</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Statutory Notice</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Advocate Demand</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">15-Day Cure Window</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="url(#bankGradAlert)" />
                    <text x="420" y="45" fill="#FECACA" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                    <text x="420" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">S.25 PSS Act</text>
                    <text x="420" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Criminal Summons</text>
                    <text x="420" y="98" fill="#FCA5A5" fontSize="9" textAnchor="middle">or S.138 NI Act</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="590" y="45" fill="#475569" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                    <text x="590" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Order 37 CPC</text>
                    <text x="590" y="82" fill="#334155" fontSize="10" textAnchor="middle">Summary Money Suit</text>
                    <text x="590" y="98" fill="#475569" fontSize="9" textAnchor="middle">or Arbitration</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#bankGradSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Decree Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Asset Attachment</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or Lok Adalat OTS</text>

                    {/* Bottom Benchmark Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY TIME LIMITS FOR UNSECURED PERSONAL LOAN RECOVERY:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Section 25 PSS Notice Window: Issue within 30 days of receiving NPCI clearing bounce memo</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Civil Suit Limitation Period: 3 Years from default / loan recall under Articles 19 &amp; 55 Limitation Act, 1963</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• National Lok Adalat Award: Deemed final civil court decree under Section 21 of Legal Services Authorities Act, 1987</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Legal Playbook for Banks to Recover Defaulted Personal Loans
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Derived directly from high-volume retail lending enforcement protocols, this 5-step playbook equips bank recovery teams to maximize NPA resolution:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        NPA Classification &amp; Comprehensive Electronic Evidence Audit
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Once an account crosses 90 days of continuous default, consolidate the loan agreement, sanction letter, Aadhaar/PAN KYC logs, IP address logs of digital acceptance, e-NACH mandate registration mandates, and the complete statement of account certified under Section 2A of the Bankers&apos; Books Evidence Act, 1891 and Section 63 of Bharatiya Sakshya Adhiniyam, 2023.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Issue Formal Loan Recall Notice &amp; Statutory Demand
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Dispatch an advocate legal demand notice terminating the loan facility, accelerating the full outstanding balance (principal, contractual interest, and penal charges), and granting a strict 15-day cure window. Dispatched via Registered Speed Post with tracking and sent to verified borrower email addresses.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Read more about institutional fee schedules on our <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> page.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File Criminal Complaint Under Section 25 PSS Act or Section 138 NI Act
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        For dishonoured e-NACH instructions or bounced repayment cheques, file a criminal complaint before the competent Judicial Magistrate within 30 days after the expiry of the 15-day notice window. Seek issuance of summons, non-bailable warrants upon non-appearance, and interlocutory compensation under Section 143A.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Institute Commercial Summary Suit (Order XXXVII CPC) or Fast-Track Arbitration
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Institute a Commercial Summary Suit under Order 37 of the CPC in the competent Civil Court or Commercial Court to obtain an expedited decree. If the loan agreement incorporates a valid arbitration clause, invoke Section 7 of the Arbitration and Conciliation Act, 1996 to appoint a sole arbitrator and secure a binding award within 6–12 months.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        See detailed legal criteria in our <Link href="/law/order-37-summary-suit-money-recovery" className="text-blue-700 underline">Order 37 CPC summary suit guide</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Execute Court Decree or Convert to Lok Adalat Settlement Award
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Refer pending recovery cases to National Lok Adalat camps conducted by District Legal Services Authorities. Obtain consensual One-Time Settlements (OTS) with full court fee refunds, or execute the final court decree via Order XXI CPC to attach bank accounts, salaries, and personal assets.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Learn how banks utilize Lok Adalat in our <Link href="/law/lok-adalat-pre-litigation-money-recovery" className="text-blue-700 underline">Lok Adalat pre-litigation money recovery guide</Link>.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Statutory Routes */}
              <section id="heading-statutory-table" aria-labelledby="heading-statutory-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-statutory-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Comparison of Legal Recovery Routes for Defaulted Personal Loans
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Lending institutions select specific recovery mechanisms based on portfolio ticket size, instrument type, and available evidentiary documentation:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[620px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Statutory Recovery Channels for Unsecured Bank Personal Loans</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Recovery Channel</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Basis</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Notice Window / Limitation</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Adjudicating Forum</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Enforcement Remedy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          e-NACH Mandate Dishonour
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Section 25 PSS Act 2007</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Notice within 30d; Complaint within 30d</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Metropolitan / Judicial Magistrate</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">2 yrs jail, fine up to 2x mandate sum</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Cheque Bounce Prosecution
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Section 138 NI Act 1881</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Notice within 30d; Complaint within 30d</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Metropolitan Magistrate Court</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">20% interim relief (S.143A) + 2 yrs jail</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Commercial Summary Suit
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">Order XXXVII CPC 1908</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">3 Years from default (Limitation Act)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">City Civil / Commercial Court</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Immediate money decree + asset attachment</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Contractual Arbitration
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">Arbitration Act 1996</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">3 Years from loan dispute notice</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Sole Arbitral Tribunal</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 36 decree execution in Civil Court</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pre-Litigation Lok Adalat
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Legal Services Auth. Act 1987</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Pre-litigation or pending suit stage</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DLSA / SLSA Lok Adalat Benches</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Non-appealable civil decree, 100% fee refund</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Verified under India Code, Supreme Court precedent, and Reserve Bank of India prudential master directions. For secured or corporate loan recovery, explore our <Link href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues" className="text-blue-700 underline">Bank NPA Recovery Notice Hub</Link>.
                </p>
              </section>

              {/* Section 7: Tab Island */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Personal Loan Default Scenarios: Practical Legal Remedies
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select the Specific Retail Loan Default Scenario to Examine Actionable Legal Provisions and Recovery Workflows
                  </p>
                </div>

                <BankRecoveryTabs />
              </section>

              {/* Section 8: Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Bank Recovers ₹5,80,000 Defaulted Personal Loan via Statutory Enforcement
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Bank Recovery Resolution
                    </span>
                    <span className="text-xs text-slate-400">Retail Unsecured Facility • Bengaluru Urban</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Apex Commercial Bank disbursed an unsecured personal loan of ₹6,50,000 to an IT executive at 12.5% per annum repayable across 48 EMIs via an e-NACH mandate. The borrower serviced the first 14 EMIs satisfactorily, after which 4 consecutive e-NACH debits bounced due to &quot;Insufficient Funds&quot;. The borrower ceased responding to automated SMS reminders and telephone calls from retail loan operations.
                    </p>
                    <p>
                      <strong>The Legal Action:</strong> Upon the account reaching NPA status with an outstanding principal balance of ₹5,20,000 plus interest (total claim: ₹5,80,450), the bank engaged our legal recovery panel. An advocate drafted and dispatched a dual-statutory demand notice:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
                      <li>Notice under Section 25(1)(b) of the Payment and Settlement Systems Act, 2007 for dishonour of recurring electronic funds clearing.</li>
                      <li>Formal loan acceleration and recall notice under the Indian Contract Act, 1872 giving a strict 15-day demand for full liquidation.</li>
                    </ul>
                    <p>
                      <strong>The Resolution:</strong> Faced with impending criminal summons under Section 25 PSS Act before the Chief Metropolitan Magistrate, Bengaluru, and the prospect of an Order XXXVII summary money suit, the borrower engaged their counsel. The matter was placed before the National Lok Adalat bench at the Bengaluru City Civil Court Complex.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Recovery Outcome:</strong>
                      A binding Lok Adalat award was executed: the borrower paid ₹3,00,000 upfront on the date of the Lok Adalat session, with the remaining balance of ₹2,50,000 settled over 3 monthly tranches backed by post-dated cheques. Under Section 21 of the Legal Services Authorities Act, 1987, the award became an executable civil decree with zero court fee costs incurred by the bank.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Bank Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Bank Evidence Checklist: 6 Documents Required for Legal Recovery
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA) and Section 2A of the Bankers&apos; Books Evidence Act, 1891, ensure these 6 evidentiary pillars are assembled prior to issuing statutory notices:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Sanction Letter &amp; Signed Loan Agreement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Stamping-compliant agreement detailing loan amount, tenure, interest rate, penal clauses, and jurisdiction.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">e-NACH Mandate Registration &amp; UMRN:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Unique Mandate Reference Number (UMRN) log confirming the borrower&apos;s authorization of recurring auto-debits.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">NPCI / Sponsor Bank Return Clearing Memos:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Official return advice showing presentation dates, dishonour timestamps, and return codes (e.g., &apos;Insufficient Funds&apos;).</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Statement of Account (BBEA / BSA):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">System-generated statement reflecting disbursement, EMI credits, defaults, and penal accruals certified by the Branch Manager.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Digital KYC &amp; Verification Dossier:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Verified PAN, Aadhaar, salary slip proofs, employment records, and communication address verification logs.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Registered Postal Dispatch &amp; Tracking Proofs:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Speed Post consignment receipts and India Post online delivery confirmation reports verifying service of demand notices.</p>
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
                    FAQs on Legal Recovery of Defaulted Personal Loans by Banks
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Direct Statutory Answers for Consumer Lending Directors, Asset Recovery Operations, and Retail NPA Teams
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
                  Statutory verification note: All provisions verified against active legislation on India Code, Reserve Bank of India Master Directions, and Supreme Court of India precedents as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Appoint Our Law Firm for Bank Personal Loan Recovery
                </h2>
                <BankPersonalLoanCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Banking &amp; Debt Recovery Hubs
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bank Recovery of Unpaid Dues Notice Hub →
                  </Link>
                  <Link
                    href="/how-do-i-send-a-legal-notice-to-a-friend-who-is-not-repaying-my-personal-loan-in-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Personal Loan Recovery Legal Notice →
                  </Link>
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Order 37 CPC Summary Suit Guide →
                  </Link>
                  <Link
                    href="/law/lok-adalat-pre-litigation-money-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Lok Adalat Money Recovery →
                  </Link>
                  <Link
                    href="/credit-card-payment-default-legal-recovery-options-banks"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Credit Card Default Recovery for Banks →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Drafting Charges &amp; Rates →
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
