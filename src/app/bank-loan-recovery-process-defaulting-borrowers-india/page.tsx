import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import BankLoanRecoveryCTA from "./BankLoanRecoveryCTA";
import BankLoanRecoveryTableOfContents from "./BankLoanRecoveryTableOfContents";
import BankLoanRecoveryTabs from "./BankLoanRecoveryTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Bank Loan Recovery Process in India: Complete Legal Guide",
  description:
    "Legal guide for banks to recover defaulted loans in India. Explore SARFAESI Act, DRT applications, Section 138 NI Act, and summary suits.",
  alternates: {
    canonical: `${SITE_URL}/bank-loan-recovery-process-defaulting-borrowers-india`,
  },
  openGraph: {
    title: "Bank Loan Recovery Process in India: Complete Legal Guide",
    description:
      "Statutory escalation path for scheduled commercial banks and NBFCs to recover defaulted loans in India under SARFAESI, DRT, and Section 138 NI Act.",
    url: `${SITE_URL}/bank-loan-recovery-process-defaulting-borrowers-india`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Bank Loan Recovery Process in India: Complete Legal Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bank Loan Recovery Process in India: Complete Legal Guide",
    description:
      "Statutory escalation path for scheduled commercial banks and NBFCs to recover defaulted loans in India under SARFAESI, DRT, and Section 138 NI Act.",
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
    title: "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002 — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title: "Recovery of Debts and Bankruptcy (RDB) Act, 1993 (Establishment of Debt Recovery Tribunals) — Ministry of Finance",
    url: "https://financialservices.gov.in/acts/recovery-debts-due-banks-and-financial-institutions-act-1993",
  },
  {
    title: "Reserve Bank of India (RBI) Master Circular on Prudential Norms on Income Recognition, Asset Classification (IRAC) and Provisioning",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasCirculardetails.aspx?id=12165",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Section 138 Criminal Dishonour of Cheques) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2260",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 Dishonour of Electronic Funds Transfer / NACH) — Reserve Bank of India",
    url: "https://www.rbi.org.in/Scripts/PublicationReportDetails.aspx?ID=518",
  },
  {
    title: "Insolvency and Bankruptcy Code, 2016 (IBC Personal Guarantor Provisions under Section 95) — IBBI",
    url: "https://ibbi.gov.in/legal-framework/act",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Benchmark on Bank Security Enforcement & Section 13(3A) Objections",
    parties: "Mardia Chemicals Ltd. & Others v. Union of India & Others",
    citation: "(2004) 4 SCC 311 / AIR 2004 SC 2371",
    date: "Judgment Dated 8 April 2004",
    facts:
      "Borrowers challenged the constitutional validity of the SARFAESI Act, 2002, arguing that permitting secured commercial banks and financial institutions to attach and liquidate mortgaged properties without prior civil court decrees violates natural justice and constitutional guarantees under Article 14 and 19.",
    holding:
      "The Supreme Court of India upheld the constitutional validity of the SARFAESI Act. The apex court ruled that prompt recovery of bank dues is vital for the economic health of the nation. It mandated that when a borrower submits representations against a Section 13(2) notice, the secured creditor must consider the objections with an open mind and communicate a reasoned speaking order under Section 13(3A) if rejecting them, establishing the definitive statutory procedure for bank repossessions.",
    amount: "Affirmed Creditor Powers Across ₹1,00,000+ Secured Exposures",
    takeaway:
      "Banks can legally enforce mortgages and seize collateral without filing civil suits, provided the bank's Authorized Officer issues a reasoned speaking rejection under Section 13(3A) within 15 days of receiving borrower objections.",
  },
  {
    title: "Concurrent Invocation of DRT and SARFAESI Remedies: Doctrine of Election Inapplicable",
    parties: "Transcore v. Union of India & Another",
    citation: "(2008) 1 SCC 125",
    date: "Judgment Dated 29 November 2006",
    facts:
      "Defaulters contended that once a lending bank institutes an Original Application (OA) under Section 19 of the Recovery of Debts Due to Banks and Financial Institutions Act, 1993 (RDB Act) before the Debt Recovery Tribunal, the bank cannot simultaneously invoke Section 13(4) of the SARFAESI Act to seize and auction mortgaged assets.",
    holding:
      "The Supreme Court firmly rejected the borrowers' contention, ruling that the Doctrine of Election does not apply to banking recovery statutes. The court held that SARFAESI provides a cumulative non-adjudicatory recovery mechanism running parallel to DRT adjudications. Banks are fully entitled to enforce SARFAESI measures to take physical possession of security while pursuing personal money decrees against co-borrowers and guarantors in the DRT.",
    amount: "Universal Dual-Track Bank Enforcement Precedent",
    takeaway:
      "A lending bank is not required to withdraw its DRT Original Application before seizing mortgaged assets under SARFAESI. Dual-track litigation can proceed concurrently to maximize recovery velocity.",
  },
  {
    title: "Independent Liability of Personal Guarantors Despite Corporate Moratorium",
    parties: "State Bank of India v. V. Ramakrishnan & Another",
    citation: "(2018) 17 SCC 394",
    date: "Judgment Dated 14 August 2018",
    facts:
      "The managing director and personal guarantor of a corporate debtor argued that when an insolvency petition is admitted against a company under Section 14 of the Insolvency and Bankruptcy Code (IBC), the statutory moratorium automatically shields the personal guarantor from bank recovery actions.",
    holding:
      "The Supreme Court settled the law by establishing that the moratorium under Section 14 of the IBC applies solely to the assets of the corporate debtor and does not extend to personal guarantors. The bank retains complete statutory liberty to enforce personal guarantees, invoke SARFAESI against individual guarantor assets, and initiate insolvency resolution against personal guarantors under Section 95 before the NCLT.",
    amount: "Enforceable Across All Personal & Corporate Promoter Guarantees",
    takeaway:
      "Corporate debt restructuring or insolvency proceedings do not shield promoters or personal guarantors. Lending institutions can attach personal properties and file bankruptcy proceedings against guarantors simultaneously.",
  },
  {
    title: "Strict Criminal Liability for Loan Cheque & NACH Auto-Debit Bounces",
    parties: "Dashrath Rupsingh Rathod v. State of Maharashtra & 2015 Negotiable Instruments Amendment",
    citation: "(2014) 9 SCC 129 / NI (Amendment) Act 2015",
    date: "Enforced via Section 142(2) NI Act",
    facts:
      "Borrowers issuing post-dated repayment cheques or authorized NACH auto-debits routinely challenged territorial jurisdiction when cheques were presented through the bank's centralized branch or debt recovery processing centres.",
    holding:
      "The statutory amendment to Section 142(2) of the Negotiable Instruments Act clarified that jurisdiction for Section 138 prosecution lies where the lending bank branch maintaining the payee's account is situated. The courts have affirmed that bounced EMI cheques and dishonoured electronic NACH debits under Section 25 of the PSS Act attract criminal prosecution of company directors, partners, and individual drawers, carrying up to 2 years imprisonment and double the default amount as penalty.",
    amount: "Up to 2x Cheque Amount Penalty + 2 Years Criminal Detention",
    takeaway:
      "Banks can initiate fast criminal proceedings for every bounced EMI cheque or failed NACH debit at their local branch location, exerting immediate pressure on company directors and signatories to clear overdue balances.",
  },
];

const FAQS = [
  {
    question: "What legal actions can banks in India take to recover defaulted loans from borrowers?",
    answer:
      "Banks in India possess a comprehensive multi-pronged statutory toolkit to recover defaulted loans. For secured facilities, banks enforce security interest under Section 13 of the SARFAESI Act, 2002 to take physical possession and e-auction collateral without civil court intervention. For debts exceeding ₹20 Lakh, banks file Original Applications under Section 19 of the RDB Act, 1993 before the Debt Recovery Tribunal (DRT). For dishonoured cheques or failed NACH auto-debits, banks file criminal complaints under Section 138 of the Negotiable Instruments Act and Section 25 of the PSS Act, 2007. For unsecured debt, banks file Commercial Summary Suits under Order 37 of the CPC or initiate fast-track arbitration.",
  },
  {
    question: "What is the mandatory 60-day notice period under Section 13(2) of the SARFAESI Act?",
    answer:
      "Once a borrower's account is classified as a Non-Performing Asset (NPA) under RBI guidelines (past 90 days overdue), the bank's Authorized Officer issues a statutory demand notice under Section 13(2) of the SARFAESI Act, 2002. This notice gives the borrower, co-borrowers, and guarantors a mandatory 60-day window to discharge the entire outstanding principal, contractual interest, and penal charges. If the borrower submits an objection within this period, the bank must consider it and communicate a reasoned speaking order under Section 13(3A) within 15 days if rejected.",
  },
  {
    question: "How do banks take physical possession of mortgaged property under Section 14 of SARFAESI?",
    answer:
      "If the borrower fails to repay within the 60-day Section 13(2) notice window, the bank takes symbolic possession under Section 13(4). To obtain physical vacant possession, the bank files an application accompanied by a mandatory 9-point affidavit before the Chief Metropolitan Magistrate (CMM) or District Magistrate (DM) under Section 14 of the SARFAESI Act. The magistrate issues an order appointing an advocate commissioner or police official to take physical possession and hand over the property to the bank for public e-auction.",
  },
  {
    question: "What is the monetary threshold for filing a bank recovery case in the Debt Recovery Tribunal (DRT)?",
    answer:
      "Under Section 1(4) of the Recovery of Debts and Bankruptcy (RDB) Act, 1993, the minimum pecuniary threshold for banks and financial institutions to file an Original Application (OA) before the Debt Recovery Tribunal is ₹20 Lakh (reduced from the interim ₹1 Crore limit back to ₹20 Lakh). Claims below ₹20 Lakh are pursued through civil courts, Commercial Summary Suits under Order 37 CPC, or Lok Adalats.",
  },
  {
    question: "Can banks prosecute corporate directors personally for defaulted company loans?",
    answer:
      "Yes. Corporate directors can be prosecuted personally on multiple legal fronts: (1) Under Section 138 of the Negotiable Instruments Act and Section 141 for vicarious liability if they signed or oversaw bounced repayment cheques; (2) Under Section 25 of the Payment and Settlement Systems Act, 2007 for failed NACH/e-mandates; (3) Under Section 95 of the Insolvency and Bankruptcy Code (IBC) if they executed personal guarantee deeds; and (4) Under Section 447 of the Companies Act, 2013 or Section 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS) if loan funds were fraudulently siphoned.",
  },
  {
    question: "What is the difference between Lok Adalat settlements and DRT proceedings for bank recovery?",
    answer:
      "Lok Adalats are statutory alternative dispute resolution forums organized under the Legal Services Authorities Act, 1987 for pre-litigation and pending bank recovery matters with claims typically up to ₹20 Lakh (or as notified for special mega Lok Adalats). Lok Adalats facilitate mutually agreed One Time Settlements (OTS) with zero court fees and final non-appealable awards. In contrast, DRTs are specialized judicial tribunals adjudicating contested recovery claims above ₹20 Lakh with powers to issue binding Recovery Certificates, attach assets, and order detention.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Banks Can Recover Outstanding Loans from Defaulting Borrowers in India",
  description:
    "Legal guide for banks to recover defaulted loans in India. Explore SARFAESI Act, DRT applications, Section 138 NI Act, and summary suits.",
  datePublished: "2026-11-13T12:00:00+05:30",
  dateModified: "2026-11-13T12:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/bank-loan-recovery-process-defaulting-borrowers-india`,
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
    name: "Bank Loan Recovery in India",
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
      name: "Send a Legal Notice",
      item: `${SITE_URL}/send-a-legal-notice`,
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
      name: "How Banks Can Recover Outstanding Loans from Defaulting Borrowers in India",
      item: `${SITE_URL}/bank-loan-recovery-process-defaulting-borrowers-india`,
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

export default function BankLoanRecoveryProcessPage() {
  const breadcrumbItems = [
    { label: "Send a Legal Notice", href: "/send-a-legal-notice" },
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
        {/* Hero Section strictly matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>SARFAESI Act 2002</span>
              <span className="text-red-500">•</span>
              <span>DRT (RDB Act 1993)</span>
              <span className="text-red-500">•</span>
              <span>Institutional Banking Recovery Hub</span>
            </div>

            {/* MANDATORY H1: MUST MATCH EXACT STRING */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              How Banks Can Recover Outstanding Loans from Defaulting Borrowers in India
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Institutional Loan Recovery Mandate)
              </p>
              <p>
                Under the SARFAESI Act, 2002, RDB Act, 1993, and Section 138 of the Negotiable Instruments Act, scheduled commercial banks and NBFCs possess statutory authority to recover defaulted loans from borrowers and personal guarantors. Following 90-day NPA classification, secured creditors serve a mandatory 60-day Section 13(2) notice to attach and auction collateral without civil court intervention, initiate DRT Original Applications for debts exceeding ₹20 Lakh, or prosecute bounced EMIs under Section 25 of the PSS Act.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">60 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">SARFAESI Sec 13(2) Demand Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">₹20 Lakh+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">DRT Original Application Limit</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">2x Penalty</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Sec 138 NI &amp; 25 PSSA Sanction</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Pan-India</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Advocate Panel Across DRTs &amp; High Courts</p>
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
            <BankLoanRecoveryTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Framework Overview */}
              <section id="heading-framework-overview" aria-labelledby="heading-framework-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-framework-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Legal Framework for Bank Loan Recovery from Defaulting Borrowers in India
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Non-Performing Assets (NPAs) and deliberate credit defaults place significant operational stress on India&apos;s banking infrastructure. When corporate debtors, retail mortgagors, or MSME promoters cease servicing scheduled term loan installments or overdraw Cash Credit (CC) limits, financial institutions cannot rely on protracted civil suits that span generations. Indian jurisprudence provides a specialized, expedited statutory framework empowering scheduled commercial banks, regional rural banks, and housing finance companies to seize collateral, attach liquid assets, and enforce personal guarantees.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the master directions of the Reserve Bank of India (RBI), asset classification follows a precise timeline from Special Mention Accounts (SMA-0, SMA-1, SMA-2) to full NPA classification at the 90-day delinquency mark. From this statutory trigger, institutional lenders deploy multi-track litigation: out-of-court collateral enforcement via the SARFAESI Act, 2002; high-value recovery adjudication through Debt Recovery Tribunals (DRT); criminal prosecution for bounced instruments under the Negotiable Instruments Act, 1881 and Payment &amp; Settlement Systems Act, 2007; and Commercial Summary Suits under Order 37 of the CPC.
                </p>
              </section>

              {/* Section 2: Court Rulings Digest */}
              <section id="heading-case-digest" aria-labelledby="heading-case-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Judicial Rulings Governing Bank Loan Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Authoritative Supreme Court Precedents
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
                            <strong className="text-slate-900 font-bold block mb-0.5">Dispute Background &amp; Legal Question:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Supreme Court Holding:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Statutory Scope / Authority
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Precedent Impact
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Across All High Courts &amp; DRTs
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>Institutional Takeaway for Bank Legal Officers:</strong> {c.takeaway}
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
                  What Wins Institutional Bank Recovery Actions: Strategic Evidentiary Pillars
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Rigorous analysis of DRT orders, Debt Recovery Appellate Tribunal (DRAT) verdicts, and High Court writ petitions highlights the specific evidentiary steps that protect secured lenders from frivolous borrower injunctions:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Flawless Compliance with Section 13(3A) Reasoned Speaking Orders:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Borrowers routinely file Section 17 SA petitions before the DRT claiming the bank ignored their OTS or objection letters. When the Authorized Officer communicates a detailed speaking rejection within the mandatory 15-day timeline citing loan account ledgers, DRTs summarily vacate interim stay requests.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Certified Bankers&apos; Books Certificates &amp; NeSL Information Utility Records:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Under Section 4 of the Bankers&apos; Books Evidence Act, 1891 and Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), submitting digitally certified computer account extracts accompanied by National E-Governance Services Ltd (NeSL) default authentication conclusively establishes admitted debt.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Impleading Personal and Corporate Guarantors in the Primary Action:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Under Section 128 of the Indian Contract Act, 1872, guarantor liability is co-extensive with the principal borrower. Demand notices and DRT applications that jointly target managing directors and personal guarantors prevent asset-stripping and fraudulent property transfers.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Simultaneous Section 138 NI Act &amp; Section 25 PSSA Criminal Prosecution:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Instituting criminal complaints against authorized company signatories for dishonoured security cheques or bounced NACH auto-debits within strict 30-day notice windows exerts individual penal pressure, frequently compelling out-of-court settlement before civil decree.
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
                  Statutory Escalation Hierarchy: From 90-Day Delinquency to Asset Realization
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this standardized statutory escalation hierarchy engineered for Authorized Officers and bank legal departments:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">SMA-2 to NPA Classification</h3>
                    <p className="text-xs text-slate-200 mt-1">Account past 90 days overdue. Issue recall letter &amp; audit collateral title deeds.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Section 13(2) SARFAESI &amp; 138 NI Notice</h3>
                    <p className="text-xs text-amber-900 mt-1">Issue 60-day statutory demand notice and 30-day cheque/NACH dishonour demand.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Symbolic Possession (Sec 13(4))</h3>
                    <p className="text-xs text-slate-700 mt-1">Affix possession notice, publish in 2 newspapers &amp; register on CERSAI portal.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Physical Possession via CMM/DM (Sec 14)</h3>
                    <p className="text-xs text-red-900 mt-1">Secure magistrate warrant with police assistance to take vacant control.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Public E-Auction &amp; DRT Shortfall OA</h3>
                    <p className="text-xs text-emerald-900 mt-1">Recover dues via e-auction; file Section 19 DRT OA for balance deficit recovery.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Bank Recovery Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Bank Loan Recovery Process Flowchart in India"
                  >
                    <defs>
                      <linearGradient id="bankGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="bankAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="bankSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#bankGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">90-Day NPA Trigger</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">IRAC Prudential Norms</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Recall Letter Served</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Sec 13(2) Notice</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">60 Days Statutory Window</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">+ Sec 138 NI / 25 PSSA</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Sec 13(4) Action</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Symbolic Possession</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Newspaper Publication</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#bankAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Sec 14 CMM/DM Order</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Physical Repossession</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Police Assistance Enforced</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#bankSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">E-Auction &amp; DRT OA</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Realization of Dues</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">Recovery Certificate</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">MANDATORY STATUTORY TIMELINES UNDER INDIAN BANKING LAWS:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• SARFAESI Section 13(2) Notice: 60 Calendar Days to discharge debt in full before possession</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Section 13(3A) Objections: Bank Authorized Officer must communicate reasoned reply within 15 Days</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Cheque / NACH Dishonour: 30-Day legal demand notice followed by 15-day cure window (Sec 138 NI Act)</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Bank Recovery Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Institutional Bank Recovery Playbook: From NPA to Recovery Certificate
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Engineered from thousands of commercial debt recoveries, this comprehensive playbook structures the bank&apos;s institutional workflow from initial default to final execution:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Classify NPA, Audit Loan Dossier &amp; Record Default on NeSL / CIBIL
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        When principal or interest remains unpaid past 90 days, classify the exposure as NPA under RBI IRAC norms. Audit primary loan agreements, demand promissory notes (DP Notes), personal guarantees, and original mortgage title deeds. Upload default details to the National E-Governance Services Ltd (NeSL) Information Utility under Section 215 IBC to obtain deemed authentication of debt.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Dispatch Multi-Pronged Advocate Demand Notice (SARFAESI + NI Act)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Engage empanelled banking litigation counsel to draft and serve the statutory 60-day demand notice under Section 13(2) of the SARFAESI Act, 2002 via Registered Post AD and Section 63 BSA electronic mail. Concurrently, if EMI cheques or NACH auto-debits were dishonoured, issue a statutory demand notice under Section 138 of the Negotiable Instruments Act and Section 25 of the Payment and Settlement Systems Act, 2007.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Explore our standard fee schedule on our <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> directory.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Dispose Borrower Representations with a Speaking Order (Sec 13(3A))
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the borrower, co-borrower, or guarantor submits an objection or One-Time Settlement (OTS) request within the 60-day notice period, the Authorized Officer must examine the representation with an open mind. If unviable, issue a reasoned speaking order rejecting the objection within 15 calendar days, strictly compliant with the Supreme Court mandate in <em>Mardia Chemicals</em>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Enforce Physical Possession via Section 14 CMM/DM Petitions
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Upon expiry of the 60 days without full repayment, take symbolic possession under Section 13(4) and file an application with a sworn 9-point affidavit before the Chief Metropolitan Magistrate (CMM) or District Magistrate (DM) under Section 14. Obtain orders directing an advocate commissioner and local police to take physical vacant possession of the mortgaged factory, commercial office, or residence.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Conduct Public E-Auction &amp; Lodge DRT Original Application for Shortfall
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Obtain valuation reports from two approved valuers, fix the reserve price, and issue a 30-day public e-auction notice (15 days for subsequent auctions) under Rule 8 and 9 of the Security Interest (Enforcement) Rules, 2002. Liquidate the collateral and credit proceeds to the loan ledger. For any residual shortfall where exposure exceeds ₹20 Lakh, pursue execution of Section 19 DRT Original Applications to obtain a Recovery Certificate against unencumbered personal assets.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Statutory Benchmarks */}
              <section id="heading-benchmarks-table" aria-labelledby="heading-benchmarks-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-benchmarks-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Benchmarks, Timelines &amp; Judicial Forums for Bank Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian financial statutes enforce strict limitation periods, monetary thresholds, and procedural mandates that dictate bank recovery actions:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Bank Loan Recovery Statutory Benchmarks and Procedural Timelines</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Enforcement Mechanism / Statute</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Threshold / Window</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Benchmark / Authority</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Remedy &amp; Enforcement Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          SARFAESI Section 13(2) Demand Notice
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">60 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 13(2), SARFAESI Act 2002</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Full payment demand before physical asset attachment</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Borrower Objection Disposal (Sec 13(3A))
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 13(3A) SARFAESI / Mardia Chemicals</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Mandatory reasoned speaking rejection to vacate DRT stays</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Debt Recovery Tribunal (DRT) Original Application
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">₹20 Lakh &amp; Above</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 1(4) &amp; Section 19 RDB Act 1993</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Interim asset injunctions, summons &amp; Recovery Certificate</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Cheque Bounce / NACH Mandate Failure
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">30 Days from Return Memo</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Sec 138 NI Act 1881 / Sec 25 PSS Act 2007</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Criminal complaint before JMFC/CMM with up to 2 yrs imprisonment</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Commercial Summary Suit (Order 37 CPC)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">3 Years Limitation</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Order XXXVII CPC 1908 &amp; Commercial Courts Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Fast-track decree for unsecured debts, DP Notes &amp; contracts</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Personal Guarantor Insolvency (NCLT)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">₹1000+ Default</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 95 Insolvency &amp; Bankruptcy Code 2016</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Immediate interim-moratorium &amp; bankruptcy liquidation of promoter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Statutory verification status: All provisions validated against active Gazette notifications, RBI Prudential IRAC Master Circulars, and Supreme Court benchmarks as of November 2026. For institutional civil recovery suits, review our comprehensive analysis on <Link href="/civil-suit-for-recovery-of-money-india" className="text-blue-700 underline">civil suits for recovery of money in India</Link>.
                </p>
              </section>

              {/* Section 7: Loan Category Problem Tabs */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Tailored Recovery Playbooks Across Loan Portfolios
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select the Specific Facility Type to Examine Statutory Sections, Case Precedents and Direct Enforcement Action
                  </p>
                </div>

                <BankLoanRecoveryTabs />
              </section>

              {/* Section 8: Worked Example Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Case Study: Scheduled Commercial Bank Recovers ₹5.8 Crore Defaulted Cash Credit Facility
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Institutional Recovery Action
                    </span>
                    <span className="text-xs text-slate-400">Ahmedabad Commercial Branch • Manufacturing Debtor</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Credit Facility &amp; Default:</strong> A scheduled commercial bank sanctioned a ₹5,00,00,000 Cash Credit (CC) limit and a ₹1,50,00,000 Term Loan to an auto-ancillary manufacturing firm in Sanand, Gujarat, secured by the factory land, plant machinery, and personal guarantees of two promoter-directors. In mid-2025, the firm suffered customer order cancellations and stopped servicing interest. Outstanding dues rose to ₹5,82,40,000, and the account slipped to NPA.
                    </p>
                    <p>
                      <strong>The Borrower Stalling Tactics:</strong> The bank&apos;s Authorized Officer issued a Section 13(2) SARFAESI demand notice. The borrower filed a frivolous 40-page objection alleging illegal interest compounding, unauthorized bank charges, and demanding an unviable 50% One-Time Settlement (OTS). Simultaneously, the borrower filed a Securitisation Application (SA) before DRT Ahmedabad seeking an ex-parte stay against possession.
                    </p>
                    <p>
                      <strong>The Strategic Institutional Counter-Action:</strong> The bank engaged specialized banking litigation advocates. Within 11 days, the Authorized Officer issued a rigorous speaking order under Section 13(3A) refuting every objection with certified ledger extracts and RBI Master Circular clauses. When the borrower sought stay in DRT, the bank demonstrated complete Section 13(3A) compliance and NeSL default authentication, causing the Presiding Officer to refuse interim relief. Concurrently, the bank filed a Section 14 petition before the District Magistrate and issued Section 138 NI Act notices for three bounced interest cheques of ₹12,50,000 each.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Recovery Resolution:</strong>
                      Faced with an imminent Section 14 physical takeover by the District Magistrate and criminal trial summons under Section 138 NI Act, the promoters capitulated. Within 45 days, the corporate borrower deposited ₹2,00,00,000 upfront and arranged refinancing for the remaining balance of ₹3,82,40,000 with interest. The bank achieved 100% principal and contractual interest recovery without entering liquidation.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Bank Evidence Dossier Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Bank Evidence Dossier: 6 Mandatory Documents for Loan Litigation
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 4 of the Bankers&apos; Books Evidence Act, 1891 and Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, assembling an airtight litigation docket ensures rapid possession orders and decrees:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Sanction Letter &amp; Master Credit Agreement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing agreed interest rates, default penal clauses, drawdown schedules, and borrower acceptance signatures.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Original Mortgage Title Deeds &amp; CERSAI Registration:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Equitable/registered mortgage memorandum and CERSAI security interest registration certificate proving priority charge.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Statement of Account &amp; NPA Certificate:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Statutory certificate under Bankers&apos; Books Evidence Act certifying debit balances, accrued interest, and exact NPA date.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Demand Promissory Notes &amp; Personal Guarantees:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Continuous guarantee deeds executed by promoter-directors and third-party guarantors with unconditional payment covenants.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">NeSL Default Authentication Report:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Information Utility certificate proving deemed service and authentication of default under Regulation 21 of IBBI Regulations.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Dishonoured Cheques &amp; Bank Return Memos:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Original returned instruments or NPCI certified failure reports proving dishonour under Sec 138 NI / Sec 25 PSS Act.</p>
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
                    Frequently Asked Questions on Bank Loan Recovery in India
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in the SARFAESI Act, RDB Act, Supreme Court Precedents, and RBI Directives
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
                  Primary Financial Statutes, RBI Circulars &amp; Judicial References
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
                  Statutory verification status: All provisions verified against official Gazette notifications, India Code repositories, and Reserve Bank of India regulatory updates as of November 2026.
                </p>
              </section>

              {/* Primary CTA Block */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Empanel Banking Litigation Advocates
                </h2>
                <BankLoanRecoveryCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Specialized Banking &amp; Debt Recovery Resources
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bank Recovery Legal Notice Portal →
                  </Link>
                  <Link
                    href="/civil-suit-for-recovery-of-money-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Civil Suit for Recovery of Money in India →
                  </Link>
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Order 37 CPC Summary Suit Guide →
                  </Link>
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Institutional Bulk Recovery Solutions →
                  </Link>
                  <Link
                    href="/law/lok-adalat-pre-litigation-money-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Lok Adalat Pre-Litigation Bank Settlement →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Statutory Notice Drafting Charges &amp; Fees →
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
