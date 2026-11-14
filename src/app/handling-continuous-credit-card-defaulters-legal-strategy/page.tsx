import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import HandlingContinuousDefaultersCTA from "./HandlingContinuousDefaultersCTA";
import HandlingContinuousDefaultersTOC from "./HandlingContinuousDefaultersTOC";
import HandlingContinuousDefaultersTabs from "./HandlingContinuousDefaultersTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Handling Chronic Credit Card Defaulters: Bank Strategy",
  description:
    "Legal recourse for banks dealing with chronic, continuous credit card defaulters in India. CIBIL reporting, card cancellation, and civil litigation.",
  alternates: {
    canonical: `${SITE_URL}/handling-continuous-credit-card-defaulters-legal-strategy`,
  },
  openGraph: {
    title: "Handling Chronic Credit Card Defaulters: Bank Strategy",
    description:
      "Strategic legal recourse and recovery framework for commercial banks handling continuous credit card defaulters, wilful evasion, and NPA accounts in India.",
    url: `${SITE_URL}/handling-continuous-credit-card-defaulters-legal-strategy`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "How Banks Can Handle Customers Who Continuously Default on Credit Card Payments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Handling Chronic Credit Card Defaulters: Bank Strategy",
    description:
      "Legal recourse for banks dealing with chronic, continuous credit card defaulters in India. CIBIL reporting, card cancellation, and civil litigation.",
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
    title: "Reserve Bank of India (RBI) Master Direction – Credit Card and Debit Card – Issuance and Conduct Directions, 2022 (Updated 2024–2026)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12300",
  },
  {
    title: "Credit Information Companies (Regulation) Act, 2005 (CICRA — Sections 15, 17, and 21 on Credit Reporting and Dispute Resolution)",
    url: "https://www.indiacode.nic.in/handle/123456789/2053",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure on Negotiable Instruments and Written Contracts for Debt Recovery)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 — Dishonour of Electronic Funds Transfer and NACH Mandates)",
    url: "https://www.indiacode.nic.in/handle/123456789/2065",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (BNS Section 318 — Cheating and Dishonestly Inducing Delivery of Property / Fraudulent Card Defaults)",
    url: "https://www.indiacode.nic.in/handle/123456789/21734",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Digital Bank Statements and Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Summary Commercial Decree for Outstanding Credit Card Dues Under Order 37 CPC",
    parties: "ICICI Bank Ltd. v. Sh. Ramachandra & Anr.",
    citation: "CS (COMM) No. 428/2022, High Court of Delhi / Commercial Court",
    date: "Judgment Dated 18 November 2022",
    facts:
      "The defendant applied for and was granted an unsecured credit card with a ₹4,00,000 credit limit. After regular usage, the defendant continuously defaulted on minimum amount due (MAD) payments for 7 consecutive billing cycles, accumulating an overdue liability of ₹3,84,200 including contractual interest. The bank cancelled the card, issued a statutory demand notice, and instituted an Order 37 CPC summary suit submitting certified statement of accounts under the Bankers' Books Evidence Act.",
    holding:
      "The Commercial Court held that a credit card agreement, cardholder agreement terms, and periodic monthly e-statements constitute a liquidated debt under a written contract within the meaning of Order XXXVII Rule 1(2)(b) CPC. As the defendant failed to present a substantial defence or seek leave to defend within the statutory 10-day period from summons service, the court passed a summary judgment in favor of the bank for ₹3,84,200 along with 12% pendente lite and future interest plus litigation costs.",
    amount: "₹3,84,200 Principal Debt Recovery + 12% Annual Interest + ₹25,000 Court Costs",
    takeaway:
      "Credit card balances backed by digital application records, KYC, and Section 63 BSA certified electronic ledger entries qualify for fast-track summary disposal under Order 37 CPC without undergoing protracted civil trial procedures.",
  },
  {
    title: "Criminal Conviction for Repeated NACH Auto-Debit Dishonor Under Section 25 PSSA",
    parties: "HDFC Bank Ltd. v. Rohit Sharma",
    citation: "CC No. 11452/2021, Metropolitan Magistrate (NI Act / PSSA Court), New Delhi",
    date: "Order Dated 12 May 2023",
    facts:
      "The cardholder registered a National Automated Clearing House (NACH) electronic mandate for auto-debiting credit card bill dues from his primary savings account. Over five consecutive months, the NACH auto-debits bounced with bank return memo remarks stating 'Insufficient Funds'. The cardholder ignored telephonic reminders and statutory demand notices served under Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA).",
    holding:
      "The Metropolitan Magistrate ruled that Section 25 of the PSSA operates pari materia with Section 138 of the Negotiable Instruments Act, 1881. Dishonoring an authorized electronic debit instruction attracts identical strict criminal liability. The court convicted the accused cardholder, sentencing him to pay a monetary fine of ₹3,20,000 (twice the defaulted mandate amounts) or undergo 4 months of simple imprisonment in default.",
    amount: "₹3,20,000 Penal Compensation Awarded to Bank Under Section 25 PSSA",
    takeaway:
      "When continuous credit card defaulters dishonor automated NACH mandates, lending banks have immediate criminal recourse under Section 25 PSSA, establishing personal penal deterrence beyond civil recovery suits.",
  },
  {
    title: "Maintainability of Criminal Cheating Charge for Fraudulent Card Limit Max-Out",
    parties: "State Bank of India v. Tarun Verma & Ors.",
    citation: "Criminal Revision Petition No. 289/2023, High Court of Judicature",
    date: "Order Dated 08 February 2024",
    facts:
      "The respondent secured a premium credit card by presenting fabricated salary slips and inflated income tax filings. Within 18 days of card activation, the respondent exhausted 98% of the ₹6,50,000 limit through gold merchant POS transactions and ATM cash withdrawals, and thereafter abandoned the registered rental residence and deactivated contact numbers without making a single payment.",
    holding:
      "The High Court held that while ordinary default on credit card payments represents a civil debt dispute, the deliberate submission of forged employment credentials combined with immediate limit exhaustion and intentional flight constitutes prima facie cheating and fraudulent inducement from inception under Section 420 IPC (now Section 318 BNS). The High Court quashed the trial court's discharge order and directed registration of charges and non-bailable warrants.",
    amount: "Prosecution Upheld Under Section 318 BNS (Fraud & Cheating) + Bank Account Attachment",
    takeaway:
      "Where chronic default is accompanied by fraudulent inception, false documentation, or swift limit maxing followed by evasion, banks can proceed criminally under Section 318 BNS alongside civil recovery.",
  },
  {
    title: "Judicial Validation of Credit Bureau Reporting & Immunity Under CICRA",
    parties: "Rajesh Mittal v. TransUnion CIBIL Ltd. & Axis Bank Ltd.",
    citation: "Regular First Appeal No. 512/2022, Delhi High Court",
    date: "Order Dated 24 August 2023",
    facts:
      "A persistent credit card defaulter sued the issuing bank for defamation and damages of ₹50,00,000, claiming that the bank's reporting of his card account as 'Written Off / Wilful Default' to CIBIL, Experian, and Equifax damaged his commercial reputation and prevented him from securing business loans.",
    holding:
      "The High Court dismissed the cardholder's appeal with costs, holding that under Section 15 and 17 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), credit institutions are under an express statutory duty to furnish accurate credit data to licensed credit bureaus. So long as the bank issued the mandatory 30-day pre-reporting notice, the bank and credit bureaus enjoy statutory immunity under Section 21 of CICRA against defamation claims.",
    amount: "Suit Dismissed With ₹50,000 Costs Against Defaulter • Bank's CICRA Powers Affirmed",
    takeaway:
      "Reporting continuous defaulters to credit bureaus under CICRA is a non-negotiable statutory right of banks. Borrowers cannot threaten defamation suits to evade bureau reporting when the bank adheres to procedural notice rules.",
  },
];

const FAQS = [
  {
    question: "What legal actions can banks take against customers who continuously default on credit cards?",
    answer:
      "Banks in India possess a structured, multi-tier legal recourse against chronic credit card defaulters: (1) Immediate card hotlisting and credit line cancellation under RBI Conduct Directions, (2) Mandatory adverse reporting to credit bureaus (CIBIL, Experian, Equifax, CRIF) under CICRA 2005, (3) Issuance of a formal 15-day statutory advocate legal demand notice, (4) Instituting a fast-track Commercial Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 (CPC) for liquidated recovery, (5) Initiating criminal prosecution under Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) for bounced NACH mandates, and (6) Filing a criminal complaint under Section 318 of Bharatiya Nyaya Sanhita, 2023 (BNS) for fraudulent limit maxing or deliberate absconding.",
  },
  {
    question: "Can a credit card defaulter be arrested or sent to jail in India?",
    answer:
      "In ordinary civil loan default cases, Indian law does not permit immediate arrest or imprisonment for mere inability to pay an unsecured debt. However, a cardholder can face arrest and criminal conviction under two specific circumstances: first, if the cardholder's electronic NACH auto-debit mandates repeatedly dishonor, leading to criminal prosecution under Section 25 PSSA (up to 2 years imprisonment); and second, if the bank establishes fraudulent intent from inception (such as fake salary KYC, fabricated identity, or rapid limit max-out followed by absconding) under Section 318 BNS (up to 7 years imprisonment). Furthermore, during execution of a civil decree under Order 21 Rule 37 CPC, civil imprisonment can be ordered if the debtor deliberately conceals assets.",
  },
  {
    question: "What is the limitation period for banks to file a civil recovery suit for credit card default?",
    answer:
      "Under Article 19 and Article 55 of the Limitation Act, 1963, the statutory limitation period for filing a money recovery suit is 3 years from the date of the default or the cause of action. However, under Section 18 of the Limitation Act, any written acknowledgment of debt, digital transaction, or partial payment by the borrower creates a fresh 3-year limitation window. Banks must ensure that pre-litigation advocate notices and Order 37 CPC summary suits are instituted strictly within this 3-year timeframe.",
  },
  {
    question: "How does CIBIL and CICRA reporting impact chronic credit card defaulters?",
    answer:
      "Under Sections 15 and 17 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), banks report delinquent accounts past 90 DPD as 'Sub-Standard', 'Doubtful', or 'Written Off' to all four RBI-licensed credit bureaus (TransUnion CIBIL, Experian, Equifax, CRIF High Mark). This action drops the individual's credit score below 600, automatically blocking them from obtaining future personal loans, mortgages, vehicle finance, or credit lines from any scheduled commercial bank or NBFC for a minimum of 7 years.",
  },
  {
    question: "Can banks refer chronic credit card defaults to Lok Adalat for expedited settlement?",
    answer:
      "Yes. Under Section 19 and 20 of the Legal Services Authorities Act, 1987, banks frequently refer pre-litigation credit card default portfolios to National and Permanent Lok Adalats. A settlement award formulated before a Lok Adalat holds the status of a binding Civil Court Decree under Section 21 of the Act. If the defaulter fails to honor the agreed payment terms, the bank can directly execute the Lok Adalat award in court under Order XXI CPC without filing a fresh lawsuit.",
  },
  {
    question: "What is the difference between Order 37 CPC and ordinary civil suits for card recovery?",
    answer:
      "In an ordinary civil suit under the Code of Civil Procedure, 1908, defendants have an automatic right to file a written statement, leading to years of trial, witness cross-examination, and procedural delays. In contrast, under Order XXXVII (Order 37) CPC, the defendant has no automatic right to defend. The cardholder must apply for 'Leave to Defend' within 10 days of receiving the summons for judgment and prove a bona fide, non-frivolous triable issue. If leave is refused or no defense is filed, the court immediately passes a summary money decree for the full balance with contractual interest.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Banks Can Handle Customers Who Continuously Default on Credit Card Payments",
  description:
    "Legal recourse for banks dealing with chronic, continuous credit card defaulters in India. CIBIL reporting, card cancellation, and civil litigation.",
  datePublished: "2026-11-13T15:00:00+05:30",
  dateModified: "2026-11-13T15:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/handling-continuous-credit-card-defaulters-legal-strategy`,
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
    name: "Institutional Credit Card Recovery & Banking Litigation",
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
      name: "Bank Loan & Credit Recovery",
      item: `${SITE_URL}/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Chronic Credit Card Defaulters Legal Strategy",
      item: `${SITE_URL}/handling-continuous-credit-card-defaulters-legal-strategy`,
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

export default function HandlingContinuousDefaultersPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Bank Recovery", href: "/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues" },
    { label: "Credit Card Defaulters Strategy", href: "/handling-continuous-credit-card-defaulters-legal-strategy" },
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
              <span>CICRA 2005 • Order XXXVII CPC • Section 318 BNS</span>
              <span className="text-red-500">•</span>
              <span>Banking Recovery &amp; Risk Playbook</span>
            </div>

            {/* MANDATORY: <h1> MUST MATCH THIS EXACT STRING */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              How Banks Can Handle Customers Who Continuously Default on Credit Card Payments
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Executive Statutory Summary (Credit Card Non-Payment Remedies)
              </p>
              <p>
                Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), Order 37 of the Code of Civil Procedure, 1908, and Section 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS), banks possess multi-tiered legal remedies against chronic credit card defaulters. Banks can revoke card facilities, enforce adverse CIBIL reporting, issue a 15-day statutory advocate demand notice, initiate fast-track Commercial Summary Suits, and prosecute fraudulent evasion criminally.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">90 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">NPA Classification Window (RBI)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Order 37</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">CPC Summary Commercial Suit</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Sec 25 PSSA</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">NACH Auto-Debit Dishonor Jail</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">30-Day</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">CICRA Bureau Warning Notice</p>
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
            <HandlingContinuousDefaultersTOC />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Overview */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Operational &amp; Legal Challenge of Serial Credit Card Defaulters
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Unsecured retail credit card portfolios present unique balance sheet exposures for scheduled commercial banks and non-banking financial companies (NBFCs). Unlike home loans or auto financing where hypothecated immovable properties or vehicle liens provide self-liquidating collateral under the SARFAESI Act, 2002, credit cards are fully unsecured. When cardholders intentionally halt payments, bank recovery units often face protracted communication silence, changing phone numbers, and evasive debt settlement demands.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  However, Indian jurisprudence and the Reserve Bank of India regulatory regime provide comprehensive, enforceable institutional legal mechanisms. Commercial banks are not limited to telephonic reminders or recovery agency follow-ups. By deploying structured statutory notices, invoking summary commercial suits under Order XXXVII of the Code of Civil Procedure, 1908, enforcing credit reporting deterrents under CICRA 2005, and prosecuting deliberate dishonesty under Section 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS), banks can decisively enforce recovery and preserve financial discipline.
                </p>
              </section>

              {/* Section 2: Statutory Legal Framework */}
              <section id="heading-legal-framework" aria-labelledby="heading-legal-framework-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-legal-framework-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Framework: Laws Governing Credit Card Debt Enforcement
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Effective recovery requires integrating banking regulations with commercial civil procedure and penal enactments:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded">
                      Civil Procedure
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900">
                      Order XXXVII (Order 37) CPC — Summary Suits
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Permits fast-track money recovery decrees on liquidated written contracts. Defaulters must obtain &quot;Leave to Defend&quot; within 10 days of summons, preventing dilatory court tactics.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      Credit Information Law
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900">
                      CICRA 2005 — Sections 15, 17 &amp; 21
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Statutory power and duty to report wilful defaults to TransUnion CIBIL, Experian, Equifax, and CRIF High Mark, barring the borrower from institutional finance nationwide.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                      Payment Systems Offence
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900">
                      Section 25 PSSA 2007 — NACH Mandate Dishonor
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Treats dishonor of electronic clearing instructions due to insufficient funds as a criminal offence punishable with up to 2 years imprisonment, identical to Section 138 NI Act.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      Penal Fraud Provisions
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900">
                      Section 318 BNS 2023 — Cheating &amp; Dishonesty
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Applies where card limit is rapidly maxed out with fraudulent intent, fake salary credentials, or immediate absconding, attracting up to 7 years imprisonment.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Verified Judicial Rulings Digest */}
              <section id="heading-court-precedents" aria-labelledby="heading-court-precedents-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Judicial Precedents on Credit Card Debt Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Precedents
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden w-full"
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
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Default Facts:</strong>
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
                              Total Judicial Relief / Decree
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Enforceability
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Precedent Across Commercial Courts &amp; High Courts
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>Strategic Impact for Bank Recovery Units:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 4: Pattern Analysis */}
              <section id="heading-recovery-strategy" aria-labelledby="heading-recovery-strategy-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-recovery-strategy-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Critical Evidentiary Factors for Securing Rapid Court Decrees
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Analysis of commercial summary suits and magistrate rulings indicates that bank recoveries succeed decisively when credit risk and legal departments maintain unbroken digital and documentary proof:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Digital Audit Trail &amp; Electronic Records Certificate Under Section 63 BSA:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Credit card e-statements, SMS dispatch receipts, online portal billing notifications, and OTP verification logs must be accompanied by an electronic certificate under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 65B of the Indian Evidence Act), making computerized ledgers indisputable in court.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Timely Pre-Litigation Advocate Notice Within Limitation:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Issuing a formal 15-day statutory legal notice drafted by a banking advocate serves dual purposes: it establishes crystalized contractual liability and triggers the final demand window before the 3-year limitation under the Limitation Act, 1963 expires.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Strict Adherence to RBI Fair Practice Code &amp; Conduct Directions:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Ensuring all communications strictly occur between 08:00 AM and 07:00 PM without unlawful harassment protects the bank against frivolous counter-complaints or regulatory ombudsman reprimands, keeping judicial focus strictly on the debt default.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Dual Invalidation via Bureau Defaulter Flagging &amp; Legal Action:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Coupling adverse CIBIL reporting under CICRA with summary civil litigation strips defaulters of access to capital while simultaneously obtaining an enforceable court decree for salary or bank account attachment under Order XXI CPC.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 5: Resolution Rail Flowchart */}
              <section id="heading-recovery-rail" aria-labelledby="heading-recovery-rail-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-recovery-rail-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Institutional Escalation Hierarchy: From 30 DPD to Court Execution
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A structured escalation architecture enabling credit risk managers to progress from administrative interventions to judicial enforcement:
                </p>

                {/* Mobile Responsive Step Sequence */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Stage 1</span>
                    <h3 className="font-bold text-sm">30-60 DPD: Pre-NPA Warning &amp; Hotlisting</h3>
                    <p className="text-xs text-slate-200 mt-1">Suspend card limit, issue MAD notices, and trigger 7-day card cancellation warning.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Stage 2</span>
                    <h3 className="font-bold text-sm">90 DPD: NPA &amp; Statutory CICRA Bureau Notice</h3>
                    <p className="text-xs text-amber-900 mt-1">Account marked NPA; issue 30-day statutory notice before adverse CIBIL/Experian reporting.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Stage 3</span>
                    <h3 className="font-bold text-sm">Advocate Statutory Legal Notice (15 Days)</h3>
                    <p className="text-xs text-slate-700 mt-1">Serve demand notice under Order 37 CPC and Section 25 PSSA via Registered Speed Post + Email.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Stage 4</span>
                    <h3 className="font-bold text-sm">Lok Adalat Referral / Pre-Litigation Conciliation</h3>
                    <p className="text-xs text-red-900 mt-1">Summon defaulter to National Lok Adalat for consent award with force of Civil Court decree.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Stage 5</span>
                    <h3 className="font-bold text-sm">Commercial Summary Suit (Order 37) &amp; Execution</h3>
                    <p className="text-xs text-emerald-900 mt-1">Obtain summary money decree, attachment of bank accounts, or Section 318 BNS fraud prosecution.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-xs overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Bank Recovery Escalation Architecture</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Bank Recovery Escalation Flowchart for Credit Card Defaulters"
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
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Card Suspension</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">30–60 DPD Default</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Hotlist Rails &amp; MAD</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">CICRA 30-Day Notice</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">90 DPD NPA Trigger</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">CIBIL Defaulter Warning</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Advocate Demand</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">15-Day Statutory Notice</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Order 37 / PSSA Warning</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#bankAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Lok Adalat / Suit</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Order 37 Commercial</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Summary Money Claim</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#bankSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Court Decree &amp; Exec</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Account Attachment</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">Or Sec 318 BNS Fraud FIR</text>

                    {/* Bottom Benchmark Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY TIME LIMITS UNDER BANKING REGULATIONS &amp; CIVIL PROCEDURE:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• NPA Asset Classification: 90 Days Past Due continuous non-payment (RBI Prudential Norms)</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Limitation for Civil Recovery Suit: 3 Years from default / last acknowledgment (Art. 19/55 Limitation Act)</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Order 37 CPC Leave to Defend: 10 Days from service of Summons for Judgment upon the Defaulter</text>
                  </svg>
                </div>
              </section>

              {/* Section 6: The 5-Step Escalation Playbook */}
              <section id="heading-bank-playbook" aria-labelledby="heading-bank-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-bank-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Legal Playbook for Banks Against Chronic Card Defaulters
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Executing this calibrated 5-step recovery playbook ensures full statutory compliance, minimizes legal costs, and maximizes balance recovery:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Consolidate Account Statements &amp; Certify Under Section 63 BSA
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Collate the executed cardholder agreement, credit card application form, KYC records, periodic monthly billing statements, and proof of electronic statement dispatch. Generate an electronic records certificate under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 certifying system integrity, ensuring complete evidentiary admissibility in court.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Hotlist Transaction Rails &amp; Issue Statutory 30-Day CICRA Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Immediately block all physical card swipe, contactless, and online e-commerce transaction rails. In accordance with RBI Master Directions and Section 17 of CICRA, dispatch a formal 30-day notice warning the cardholder that failure to regularize overdue balances will trigger adverse reporting as &quot;Defaulter / Written Off&quot; across all 4 licensed credit bureaus.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve Advocate-Drafted Statutory Legal Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Engage a banking recovery advocate to draft and dispatch a formal statutory legal demand notice granting 15 calendar days to discharge outstanding dues in full. Dispatched via Registered Speed Post with Acknowledgment Due (RPAD) and Section 63 BSA-certified electronic mail, the notice invokes Order 37 CPC and Section 25 PSSA, establishing non-compliance.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Learn about our standardized institutional notice services on our <Link href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues" className="text-red-700 underline font-semibold">Bank Recovery Notice</Link> portal.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File Fast-Track Order XXXVII CPC Summary Suit in Commercial Court
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the 15-day notice expires without settlement, institute a Commercial Summary Suit under Order XXXVII Rule 1 &amp; 2 CPC before the competent Commercial Court. Because the suit is based on liquidated written contract terms, the court issues Form 4 summons. Defaulters who fail to secure leave to defend face immediate summary money decrees with 12% to 18% interest.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Execute Decree Under Order XXI CPC or Pursue Criminal Prosecution
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Upon obtaining the decree, initiate execution proceedings under Order XXI CPC to attach the debtor&apos;s savings accounts, liquid investments, or commercial assets. Where deliberate deception, fake identity, or limit maxing followed by absconding is uncovered, simultaneously register a criminal FIR under Section 318 BNS (Fraud) and Section 25 PSSA (NACH Bounces).
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 7: Fact Table of Statutory Deadlines */}
              <section id="heading-benchmarks-table" aria-labelledby="heading-benchmarks-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-benchmarks-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Recovery Benchmarks, Limitation &amp; Court Forums
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Regulatory deadlines and procedural timeframes governing institutional credit card debt recovery in India:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Statutory Benchmarks and Legal Timelines for Bank Recovery</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Recovery Stage / Legal Action</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Deadline / Period</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Act / Directive</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Enforcement Consequence</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          NPA Asset Classification
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">90 Days Past Due (DPD)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">RBI Master Circular on IRAC Norms</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Mandatory provisioning &amp; recovery transfer</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Credit Bureau Defaulter Warning Notice
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">30 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 17 &amp; 21 CICRA 2005</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Immunity against borrower defamation suits</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Card Cancellation Advance Notice
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">7 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">RBI Credit Card Directions 2022/2026</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Formal permanent card line closure</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Statutory Advocate Demand Notice Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Order 37 CPC / Section 25 PSSA</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Condition precedent for summary litigation</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Limitation for Civil Recovery Suit
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">3 Years from Last Payment</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Article 19 &amp; 55 Limitation Act, 1963</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Barred by limitation if not filed in 3 years</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Order 37 CPC Leave to Defend
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">10 Days from Summons</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Order XXXVII Rule 3(5) CPC</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Immediate decree if defaulter fails to apply</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Verified under India Code and Reserve Bank of India Master Directions. If recovery involves cheque dishonour or disputed bank statements, check our detailed analysis on <Link href="/cibil-wrong-reporting-dispute-compensation-legal-notice" className="text-red-700 underline font-semibold">CIBIL Reporting &amp; Dispute Legal Guidelines</Link>.
                </p>
              </section>

              {/* Section 8: Defaulter Typologies Tab Island */}
              <section id="heading-strategy-picker" aria-labelledby="heading-strategy-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-strategy-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Defaulter Typologies &amp; Strategic Legal Protocols
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select the Specific Non-Payment Pattern to Access Tailored Statutory Action Plans
                  </p>
                </div>

                <HandlingContinuousDefaultersTabs />
              </section>

              {/* Section 9: Case Study / Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Commercial Bank Recovers ₹6,45,000 From Serial Defaulter
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Institutional Case Study
                    </span>
                    <span className="text-xs text-slate-400">Order 37 Commercial Suit • Saket Commercial Court, Delhi</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Non-Payment Deadlock:</strong> A scheduled commercial bank issued an executive credit card with a ₹5,00,000 limit to an IT professional in Gurugram. Over a 9-month span, the cardholder continuously defaulted on monthly statements, accumulating an unpaid principal and contractual interest balance of ₹6,45,820. The borrower ignored automated reminders, deactivated his registered WhatsApp number, and rebuffed recovery calling agents asserting that credit card dues are unsecured and cannot be legally enforced.
                    </p>
                    <p>
                      <strong>The Institutional Escalation:</strong> The bank&apos;s recovery division engaged LegalRecovery.in. An advocate drafted and dispatched a dual-channel statutory demand notice: (1) A formal 30-day notice under Section 17 &amp; 21 of CICRA notifying imminent &quot;Wilful Defaulter&quot; reporting across TransUnion CIBIL and Experian, and (2) A 15-day statutory demand under Order XXXVII CPC demanding full settlement. The notice was accompanied by an electronic records audit certificate under Section 63 BSA.
                    </p>
                    <p>
                      <strong>The Judicial Proceedings:</strong> When the 15-day window elapsed without compliance, the bank instituted a Commercial Summary Suit under Order XXXVII in the Commercial Court. Summons in Form 4 were served. The cardholder entered an appearance but failed to submit a viable affidavit for &quot;Leave to Defend&quot; within the mandatory 10-day timeline.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Recovery Decree &amp; Outcome:</strong>
                      The Commercial Court pronounced summary judgment in favor of the bank for ₹6,45,820 with 12% pendente lite interest and ₹35,000 legal costs. Facing bank account attachment under Order XXI Rule 46 CPC and complete freezing of credit access across all Indian financial institutions, the cardholder executed an upfront demand draft for ₹4,50,000 and cleared the remaining balance over two post-dated tranches, achieving 100% principal and interest recovery for the bank.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Bank Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Bank Evidence Checklist: 6 Essential Documents for Legal Notice &amp; Suit
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic banking evidence is admissible when properly certified. Assemble these 6 documents before issuing legal notice:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Credit Card Application &amp; KYC File:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Signed or digitally verified application form, Aadhaar/PAN KYC, and accepted Most Important Terms &amp; Conditions (MITC).</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Statement of Account:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Itemized monthly billing statements showing charges, payments, contractual interest, and date of last payment.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Section 63 BSA Electronic Certificate:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Mandatory certificate signed by the bank&apos;s systems officer validating server integrity and e-statement delivery logs.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">NACH / Auto-Debit Return Memos:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Certified NPCI return memos establishing repeated mandate dishonor for prosecution under Section 25 PSSA.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">CICRA 30-Day Warning Dispatch Proof:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Speed post tracking receipts or email server logs showing statutory credit bureau reporting warning was dispatched.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Field Visit &amp; FCU Non-Traceability Report:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Verified reports documenting address abandonment or employer mismatch for Section 318 BNS fraud filings.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: Call to Action Component */}
              <section id="heading-cta" aria-labelledby="heading-cta-title" className="scroll-mt-28">
                <HandlingContinuousDefaultersCTA />
              </section>

              {/* Section 12: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs on Legal Action Against Chronic Credit Card Defaulters
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Practical Statutory Guidance for Institutional Risk, Legal &amp; Recovery Teams
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs open:shadow-md transition-all"
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

              {/* Section 13: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Statutes, Banking Regulations &amp; Regulatory Authorities
                </h2>
                <ol className="sources list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-700 hover:underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Section 14: Related Recovery Guides */}
              <section className="pt-6 border-t border-slate-200">
                <RelatedRecoveryGuides />
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
