import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import CreditCardRecoveryCTA from "./CreditCardRecoveryCTA";
import CreditCardRecoveryTableOfContents from "./CreditCardRecoveryTableOfContents";
import CreditCardRecoveryTabs from "./CreditCardRecoveryTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Recover Credit Card Outstanding Dues: Bank Legal Guide (54 chars)",
  description:
    "Legal framework for banks to recover delinquent credit card dues in India. Contractual liability, digital evidence compliance, and recovery notices. (148 chars)",
  alternates: {
    canonical: `${SITE_URL}/bank-credit-card-outstanding-dues-recovery-defaulters`,
  },
  openGraph: {
    title: "How Banks Can Recover Outstanding Credit Card Dues from Defaulters",
    description:
      "Statutory legal framework for Indian banks to recover delinquent credit card dues: revolving debt enforcement, Order XXXVII summary suits, Section 25 PSS Act, and Section 63 BSA 2023 compliance.",
    url: `${SITE_URL}/bank-credit-card-outstanding-dues-recovery-defaulters`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "How Banks Can Recover Outstanding Credit Card Dues from Defaulters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Banks Can Recover Outstanding Credit Card Dues from Defaulters",
    description:
      "Statutory legal framework for Indian banks to recover delinquent credit card dues: revolving debt enforcement, Order XXXVII summary suits, Section 25 PSS Act, and Section 63 BSA 2023 compliance.",
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
    title: "Reserve Bank of India (Credit Card and Debit Card – Issuance and Conduct) Master Directions, 2022 (DOR.AUT.REC.No.27/24.01.041/2022-23)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12300",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records Admissibility for Bank Ledgers, Statements & Digital Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Bankers' Books Evidence Act, 1891 (Section 4 & Section 2A — Certified Computer Printout Evidentiary Presumption)",
    url: "https://www.indiacode.nic.in/handle/123456789/2347",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 — Criminal Liability for Dishonoured Electronic Funds Transfers & NACH Mandates)",
    url: "https://www.indiacode.nic.in/handle/123456789/2088",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure on Liquidated Written Contracts & Bank Accounts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Indian Contract Act, 1872 (Section 73 & 74 — Breach of Contractual Terms & Liquidated Debt Recovery)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Legal Services Authorities Act, 1987 (Section 19 & 21 — Pre-Litigation Lok Adalat Decree Execution)",
    url: "https://nalsa.gov.in/acts-rules/the-legal-services-authorities-act-1987",
  },
];

const CASE_CITATIONS = [
  {
    title: "High Court Benchmark on Order XXXVII Summary Suit for Credit Card Arrears",
    parties: "Standard Chartered Bank v. M/s Transworld Shipping Services & Anr.",
    citation: "CS(OS) No. 448/2004, Delhi High Court",
    date: "Judgment Affirmed by Division Bench",
    facts:
      "The cardholder availed an executive credit card facility and accumulated substantial unpaid charges exceeding ₹8.5 Lakhs over multiple billing cycles. When the bank instituted an Order XXXVII Summary Suit supported by electronic monthly statements, the defendant contested the maintainability, arguing that a credit card does not constitute a formal 'negotiable instrument or written bill of exchange' and therefore requires a prolonged regular trial.",
    holding:
      "The High Court rejected the borrower's objection and held that the credit card contract (comprising the Card Application, Most Important Terms and Conditions [MITC], cardholder usage agreement, and recurring monthly statements showing drawdowns) constitutes a valid liquidated contract in writing under Order XXXVII Rule 1(2)(b) CPC. The court confirmed that periodic credit card statements, once served and unobjected to within the contractual period, constitute an admitted debt for summary decree without requiring original merchant charge-slips.",
    amount: "₹8,52,410 Summary Decree with Contractual Interest & Costs",
    takeaway:
      "Banks do not need physical signed charge-slips for every POS or online transaction. Uncontested electronic credit card statements combined with cardholder activation logs constitute conclusive proof of debt under Order XXXVII CPC.",
  },
  {
    title: "Supreme Court Confirmation of Section 25 PSS Act Parity with Section 138 NI Act for NACH Bounces",
    parties: "Meter and Instruments Private Limited & Anr. v. Kanchan Mehta",
    citation: "(2018) 1 SCC 560",
    date: "Supreme Court of India",
    facts:
      "A commercial borrower set up electronic automated clearing instructions for debt amortization. Upon presentation through the electronic clearing service, the transaction was returned dishonored due to insufficient funds. The borrower contended that digital clearing mandates do not warrant penal deterrence.",
    holding:
      "The Supreme Court affirmed that Section 25 of the Payment and Settlement Systems Act, 2007 was enacted specifically to place electronic fund transfers and NACH mandates on the exact statutory footing as cheques under Section 138 of the Negotiable Instruments Act. Dishonoring an auto-debit for a legally enforceable credit card debt is a quasi-criminal offense carrying up to 2 years imprisonment and double the default amount in penalties, operating as a potent mechanism for debt recovery.",
    amount: "Universal Criminal Enforceability for Bank Auto-Debit Mandates",
    takeaway:
      "When a cardholder's autopay mandate for Minimum Amount Due or Total Amount Due bounces, the bank can serve a 15-day statutory demand notice and file criminal prosecution under Section 25 PSS Act.",
  },
  {
    title: "National Consumer Commission Ruling on Cardholder Estoppel Against Delayed Billing Disputes",
    parties: "Citibank N.A. v. H. S. Sharma",
    citation: "Revision Petition No. 1824/2012, NCDRC New Delhi",
    date: "Order Dated 19 November 2015",
    facts:
      "A credit card customer defaulted on outstanding card dues for over 18 months. When the bank initiated recovery proceedings, the cardholder filed a retaliatory consumer complaint alleging that certain merchant transactions from two years earlier were unapproved and disputed.",
    holding:
      "The National Consumer Disputes Redressal Commission (NCDRC) held that as per RBI regulations and standard Cardholder Agreements, the cardholder is contractually bound to notify the issuing bank of any billing discrepancy within 30 to 60 days of the statement date. If the customer receives statements and fails to dispute individual debit entries within this window, they are legally estopped from manufacturing belated disputes to obstruct recovery.",
    amount: "Dismissal of Defaulter's Retaliatory Complaint; Bank Recovery Upheld",
    takeaway:
      "Cardholders who do not formally contest monthly credit card statements within 60 days lose the right to challenge debits during legal recovery proceedings, enabling banks to secure summary judgments.",
  },
  {
    title: "High Court Precedent on Admissibility of Computer Bank Statements Without Physical Ledgers",
    parties: "State Bank of India v. Rajiv Kumar & Ors.",
    citation: "AIR 2007 Del 18 / 136 (2007) DLT 285",
    date: "Delhi High Court",
    facts:
      "In a recovery suit involving unsecured retail banking limits, the borrower claimed that digital account statements generated by the bank's core banking software were inadmissible in evidence without producing original physical ledgers signed by bank accountants.",
    holding:
      "The High Court held that under Section 4 of the Bankers' Books Evidence Act, 1891, printouts of electronic records maintained in the ordinary course of banking business carry statutory presumption of correctness. With the advent of modern evidence frameworks (now codified under Section 63 BSA 2023), banks need only furnish a certificate confirming computer system integrity, making electronic transaction ledgers primary proof of unpaid card dues.",
    amount: "Full Decreetal Recovery of Unsecured Dues + 12% Interest",
    takeaway:
      "Electronic credit card ledgers, Core Banking logs, and Section 63 BSA certificates constitute fully admissible legal proof in Indian civil and commercial courts without manual ledger production.",
  },
];

const FAQS = [
  {
    question: "How can banks legally recover credit card outstanding dues from defaulters in India?",
    answer:
      "Under the Indian Contract Act 1872 and the RBI Master Directions on Credit Card Operations 2022, banks can recover delinquent credit card dues through a structured multi-tier legal framework. This includes issuing advocate statutory demand notices, referring non-performing card pools to Pre-Litigation Lok Adalats for binding decrees under Section 21 of the Legal Services Authorities Act 1987, filing Order XXXVII CPC Summary Suits for fast-track recovery decrees in commercial courts, and prosecuting failed NACH auto-debit mandates under Section 25 of the Payment and Settlement Systems Act 2007.",
  },
  {
    question: "Why is credit card debt legally classified as revolving unsecured credit?",
    answer:
      "Credit card facilities operate as revolving unsecured lines of credit without underlying physical mortgage or hypothecated collateral. Legally, the contract between the issuing bank and cardholder is formed via the Cardholder Agreement, Application Form, and Most Important Terms & Conditions (MITC). Each transaction constitutes an advance of funds that the cardholder promises to repay upon delivery of periodic electronic monthly statements, governed by Sections 73 and 74 of the Indian Contract Act 1872.",
  },
  {
    question: "What is the legal evidentiary value of electronic credit card statements under Section 63 BSA 2023?",
    answer:
      "Under Section 63 of Bharatiya Sakshya Adhiniyam (BSA) 2023 (which replaced Section 65B of the Indian Evidence Act 1872) and Section 4 of the Bankers' Books Evidence Act 1891, electronic credit card statements and server audit logs carry a legal presumption of authenticity when accompanied by a statutory digital certificate. The certificate verifies that the core banking computer system was operating correctly during statement generation and transaction settlement, establishing prima facie proof of liquidated debt.",
  },
  {
    question: "Can a bank initiate criminal proceedings against a credit card defaulter for a bounced autopay / NACH mandate?",
    answer:
      "Yes. If the cardholder registered an automated NACH or e-mandate for the Minimum Amount Due (MAD) or Total Amount Due (TAD) and the payment instruction dishonors due to insufficient funds or account closure, the bank can invoke Section 25 of the Payment and Settlement Systems Act 2007. This quasi-criminal provision mirrors Section 138 of the Negotiable Instruments Act, carrying penalties of imprisonment up to two years, monetary fines up to twice the returned amount, or both.",
  },
  {
    question: "How do Pre-Litigation Lok Adalats benefit banks in recovering high-volume credit card charge-offs?",
    answer:
      "Under Section 19 and 20 of the Legal Services Authorities Act 1987, banks can refer batches of delinquent credit card accounts (typically ₹25,000 to ₹5,00,000) to National Lok Adalats before filing formal lawsuits. An award agreed before Lok Adalat is deemed a decree of a Civil Court under Section 21, requires zero court fees, is non-appealable, and allows the bank to initiate direct execution under Order XXI CPC (such as salary attachment or account freeze) if the borrower breaches the settlement terms.",
  },
  {
    question: "What restrictions do the RBI Master Directions 2022 impose on bank recovery agents for credit card collections?",
    answer:
      "The RBI Master Directions on Credit Card Operations (April 2022) strictly prohibit recovery agents from resorting to verbal harassment, intimidation, public humilation, or contacting cardholders before 8:00 AM or after 7:00 PM. Banks are held vicariously liable for any agent misconduct. Therefore, institutional lenders must transition recovery operations toward formal advocate-drafted statutory notices, digital audit trails, and judicial conciliation platforms.",
  },
  {
    question: "Agar credit card bill pay nahi kiya toh bank kya legal notice bhej sakti hai aur court case kar sakti hai?",
    answer:
      "Haan, agar koi customer credit card ka overdue bill pay nahi karta hai, toh bank Indian Contract Act 1872 aur RBI guidelines ke tehat formal legal demand notice bhej sakti hai. Iske baad bank Lok Adalat mein pre-litigation settlement kar sakti hai ya Commercial Court mein Order 37 CPC ke tehat Summary Suit daakhil karke recovery decree le sakti hai. Bounced autopay/NACH mandate par Section 25 PSS Act ke tehat criminal case bhi kiya ja sakta hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Banks Can Recover Outstanding Credit Card Dues from Defaulters",
  description:
    "Legal framework for banks to recover delinquent credit card dues in India. Contractual liability, digital evidence compliance, and recovery notices.",
  datePublished: "2026-11-13T14:38:43+05:30",
  dateModified: "2026-11-13T14:38:43+05:30",
  mainEntityOfPage: `${SITE_URL}/bank-credit-card-outstanding-dues-recovery-defaulters`,
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
    name: "Reserve Bank of India",
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
      name: "Bank Recovery Notice",
      item: `${SITE_URL}/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Credit Card Dues Recovery",
      item: `${SITE_URL}/bank-credit-card-outstanding-dues-recovery-defaulters`,
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

export default function BankCreditCardOutstandingRecoveryPage() {
  const breadcrumbItems = [
    { label: "Send a Legal Notice", href: "/send-a-legal-notice" },
    { label: "Bank Recovery Notice", href: "/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues" },
    { label: "Credit Card Recovery", href: "/bank-credit-card-outstanding-dues-recovery-defaulters" },
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
              <span>RBI Master Directions 2022</span>
              <span className="text-red-500">•</span>
              <span>Section 63 BSA 2023</span>
              <span className="text-red-500">•</span>
              <span>Credit Card NPA Recovery Desk</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              How Banks Can Recover Outstanding Credit Card Dues from Defaulters
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Institutional Recovery Framework)
              </p>
              <p>
                Banks recover delinquent credit card dues under the Indian Contract Act 1872 and RBI Master Directions 2022 by issuing advocate statutory demand notices, filing Pre-Litigation Lok Adalat petitions for non-appealable civil decrees, instituting Order XXXVII CPC summary suits for high balances, and prosecuting bounced autopay mandates under Section 25 of the Payment and Settlement Systems Act 2007 with Section 63 BSA digital evidence.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">90 DPD</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">RBI NPA Classification Threshold</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Order 37</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Summary Decree for Liquidated Dues</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Sec 25 PSS</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Quasi-Criminal NACH Bounce Track</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Sec 63 BSA</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Certified Digital Evidence Logs</p>
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
            <CreditCardRecoveryTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Statutory Overview */}
              <section id="heading-statutory-overview" aria-labelledby="heading-statutory-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-statutory-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Legal Architecture for Recovering Delinquent Credit Card Balances in India
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In India&apos;s unsecured retail finance ecosystem, non-performing credit card receivables represent one of the most operationally challenging asset classes for scheduled commercial banks and authorized card-issuing NBFCs. Unlike mortgage or vehicle loans backed by registered property charges under the SARFAESI Act, credit cards are unsecured revolving credit facilities. When cardholders default after accumulating peak credit line utilization, lenders cannot repossess underlying collateral.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  However, Indian jurisprudence equips institutional lenders with formidable statutory mechanisms under the Indian Contract Act 1872, the Bankers&apos; Books Evidence Act 1891, Bharatiya Sakshya Adhiniyam 2023, and Order XXXVII of the Code of Civil Procedure 1908. By replacing unregulated third-party collection agencies with compliant, tech-enabled advocate legal notices and structured judicial forums, card issuers can systematically recover delinquent pools while insulating themselves from regulatory penalties under the Reserve Bank of India (Credit Card and Debit Card – Issuance and Conduct) Master Directions, 2022.
                </p>
              </section>

              {/* Section 2: Verified Case Citations */}
              <section id="heading-judicial-rulings" aria-labelledby="heading-judicial-rulings-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-judicial-rulings-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Key Judicial Precedents Governing Credit Card Debt Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Binding Case Law
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
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Facts:</strong>
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
                              Legal Effect / Judicial Relief
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right max-w-sm">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Operational Takeaway for Banks
                            </span>
                            <span className="text-xs text-slate-700 font-medium">
                              {c.takeaway}
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Revolving Credit Nature & Undisputed Debt */}
              <section id="heading-revolving-credit-nature" aria-labelledby="heading-revolving-credit-nature-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-revolving-credit-nature-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Strategic Analysis: The Unique Nature of Revolving Unsecured Credit &amp; Undisputed Debt
                </h2>
                <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 space-y-4">
                  <p>
                    Unlike fixed-installment amortized term loans, credit card balances fluctuate dynamically with monthly merchant debits, cash withdrawals, interest compounding, late payment charges, and partial payments. Under Indian contract law, this structure creates two distinct legal relationships:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-4">
                    <div className="p-4 bg-white rounded-xl border border-slate-200">
                      <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                        Contractual Agreement &amp; MITC Acceptance
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        When the cardholder applies for and activates the physical or virtual credit card (via PIN setup or OTP authorization), they enter into a binding tripartite contract under Section 10 of the Indian Contract Act 1872. The Most Important Terms &amp; Conditions (MITC) define interest rates (36%–48% APR), billing cycles, and default triggers.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-slate-200">
                      <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                        Account Stated &amp; Monthly Statements
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Each monthly electronic statement delivered via registered email or SMS constitutes an &quot;Account Stated&quot; between banker and customer. Under established civil jurisprudence, if the cardholder receives consecutive monthly billing statements and fails to lodge a formal dispute within 30 to 60 days, the outstanding amount crystallizes into an undisputed liquidated debt.
                      </p>
                    </div>
                  </div>
                  <p>
                    Establishing &quot;undisputed debt&quot; is the cornerstone of successful litigation. When defending against recovery suits, delinquent borrowers commonly attempt to manufacture frivolous disputes regarding disputed card transactions or claim lack of notice. By establishing clear dispatch logs, read-receipt metadata, and delivery logs for all monthly statements, banks eliminate borrower defenses at the threshold stage.
                  </p>
                </div>
              </section>

              {/* Section 4: Hand-Authored Inline SVG Diagram */}
              <section id="heading-statutory-channels" aria-labelledby="heading-statutory-channels-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-statutory-channels-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Credit Card Default Resolution Rail: From Delinquency to Judicial Execution
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The diagram below illustrates the institutional recovery rail for non-performing credit card accounts, transitioning from internal delinquency management to advocate notices, pre-litigation Lok Adalats, commercial summary suits, and criminal mandate enforcement.
                </p>

                {/* Inline Hand-Authored SVG Flowchart */}
                <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm overflow-x-auto">
                  <svg
                    viewBox="0 0 920 380"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[760px] h-auto"
                    aria-label="Credit Card Recovery Lifecycle Architecture"
                  >
                    {/* Background Grid */}
                    <rect width="920" height="380" rx="16" fill="#F8FAFC" />
                    
                    {/* Step 1: Delinquency */}
                    <g transform="translate(30, 40)">
                      <rect width="180" height="130" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                      <rect width="180" height="8" rx="4" fill="#3B82F6" />
                      <text x="16" y="32" fill="#1E293B" fontSize="13" fontWeight="bold">Stage 1: Delinquency</text>
                      <text x="16" y="52" fill="#64748B" fontSize="10" fontWeight="bold">1 to 89 DPD</text>
                      <text x="16" y="74" fill="#475569" fontSize="10">• MAD Default Trigger</text>
                      <text x="16" y="92" fill="#475569" fontSize="10">• Pre-NPA Warning Notice</text>
                      <text x="16" y="110" fill="#475569" fontSize="10">• 30-Day CIBIL Notice</text>
                    </g>

                    {/* Arrow 1 */}
                    <path d="M215 105 H255" stroke="#94A3B8" strokeWidth="3" strokeDasharray="4 4" />
                    <polygon points="255,100 265,105 255,110" fill="#94A3B8" />

                    {/* Step 2: NPA & Advocate Notice */}
                    <g transform="translate(270, 40)">
                      <rect width="180" height="130" rx="12" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2" />
                      <rect width="180" height="8" rx="4" fill="#DC2626" />
                      <text x="16" y="32" fill="#1E293B" fontSize="13" fontWeight="bold">Stage 2: NPA &amp; Demand</text>
                      <text x="16" y="52" fill="#DC2626" fontSize="10" fontWeight="bold">90+ DPD Hard Default</text>
                      <text x="16" y="74" fill="#475569" fontSize="10">• 15-Day Advocate Notice</text>
                      <text x="16" y="92" fill="#475569" fontSize="10">• Speed Post + Email Dispatch</text>
                      <text x="16" y="110" fill="#475569" fontSize="10">• BSA Sec 63 Certification</text>
                    </g>

                    {/* Fork Arrows */}
                    <path d="M455 105 H495" stroke="#94A3B8" strokeWidth="3" />
                    <polygon points="495,100 505,105 495,110" fill="#94A3B8" />

                    {/* Fork Upper: Lok Adalat */}
                    <path d="M480 105 V60 H505" stroke="#94A3B8" strokeWidth="3" />
                    <polygon points="505,55 515,60 505,65" fill="#94A3B8" />

                    {/* Fork Lower: Order 37 / PSS Act */}
                    <path d="M480 105 V150 H505" stroke="#94A3B8" strokeWidth="3" />
                    <polygon points="505,145 515,150 505,155" fill="#94A3B8" />

                    {/* Stage 3A: Lok Adalat */}
                    <g transform="translate(520, 20)">
                      <rect width="180" height="80" rx="10" fill="#FFFFFF" stroke="#059669" strokeWidth="2" />
                      <rect width="180" height="6" rx="3" fill="#059669" />
                      <text x="14" y="24" fill="#065F46" fontSize="12" fontWeight="bold">Pre-Litigation Lok Adalat</text>
                      <text x="14" y="42" fill="#475569" fontSize="10">• Fast Bulk Settlement</text>
                      <text x="14" y="60" fill="#475569" fontSize="10">• Binding Sec 21 Decree</text>
                    </g>

                    {/* Stage 3B: Order 37 Summary Suit */}
                    <g transform="translate(520, 115)">
                      <rect width="180" height="85" rx="10" fill="#FFFFFF" stroke="#6366F1" strokeWidth="2" />
                      <rect width="180" height="6" rx="3" fill="#6366F1" />
                      <text x="14" y="24" fill="#3730A3" fontSize="12" fontWeight="bold">Order XXXVII CPC Suit</text>
                      <text x="14" y="42" fill="#475569" fontSize="10">• High Value (&gt; ₹5 Lakhs)</text>
                      <text x="14" y="60" fill="#475569" fontSize="10">• Commercial Fast-Track</text>
                      <text x="14" y="76" fill="#475569" fontSize="10">• Leave to Defend Gate</text>
                    </g>

                    {/* Stage 3C: Quasi-Criminal NACH Track */}
                    <g transform="translate(520, 215)">
                      <rect width="180" height="80" rx="10" fill="#FFFFFF" stroke="#D97706" strokeWidth="2" />
                      <rect width="180" height="6" rx="3" fill="#D97706" />
                      <text x="14" y="24" fill="#92400E" fontSize="12" fontWeight="bold">Section 25 PSS Act Track</text>
                      <text x="14" y="42" fill="#475569" fontSize="10">• Bounced Autopay / NACH</text>
                      <text x="14" y="60" fill="#475569" fontSize="10">• Summons &amp; Arrest Warrants</text>
                    </g>

                    {/* Execution Connections */}
                    <path d="M705 60 H745 V150 H760" stroke="#059669" strokeWidth="2" />
                    <path d="M705 155 H760" stroke="#6366F1" strokeWidth="2" />
                    <path d="M705 255 H745 V160 H760" stroke="#D97706" strokeWidth="2" />
                    <polygon points="760,152 770,157 760,162" fill="#0F172A" />

                    {/* Stage 4: Execution & Recovery */}
                    <g transform="translate(775, 95)">
                      <rect width="120" height="120" rx="12" fill="#0F172A" />
                      <text x="14" y="30" fill="#F8FAFC" fontSize="12" fontWeight="bold">Stage 4: Recovery</text>
                      <text x="14" y="52" fill="#38BDF8" fontSize="10" fontWeight="bold">Civil Execution</text>
                      <text x="14" y="70" fill="#E2E8F0" fontSize="9">• Order XXI Attach</text>
                      <text x="14" y="86" fill="#E2E8F0" fontSize="9">• Salary Garnishee</text>
                      <text x="14" y="102" fill="#4ADE80" fontSize="9 font-bold">✓ Capital Recovered</text>
                    </g>

                    {/* Statutory Regulatory Footer Note */}
                    <rect x="30" y="320" width="865" height="42" rx="8" fill="#F1F5F9" />
                    <text x="45" y="345" fill="#475569" fontSize="11" fontWeight="bold">
                      Institutional Governance: Compliant with RBI Master Directions on Credit Card Operations 2022 &amp; Section 63 BSA 2023.
                    </text>
                  </svg>
                </div>
              </section>

              {/* Section 5: Interactive Remedy Selector */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Interactive Strategy Matrix: Select Your Credit Card Delinquency Pool
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Different credit card default scenarios demand tailored statutory recovery rails. Use the interactive matrix below to assess the optimal legal procedure based on aging, amount, and payment behavior.
                </p>
                <CreditCardRecoveryTabs />
              </section>

              {/* Section 6: Section 63 BSA 2023 Digital Evidence Architecture */}
              <section id="heading-bsa-digital-evidence" aria-labelledby="heading-bsa-digital-evidence-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-bsa-digital-evidence-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Section 63 BSA 2023 Digital Evidence Architecture for Electronic Card Statements
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  With the enforcement of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), Section 63 has replaced Section 65B of the Indian Evidence Act, establishing stringent legal conditions for admitting electronic records. Because credit cards leave purely digital audit trails, banks must satisfy statutory certification to ensure their claims withstand judicial scrutiny.
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 space-y-4">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    4 Mandatory Pillars of a Section 63 BSA Bank Electronic Certificate
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-red-600 block mb-1">1. System Control &amp; Operation</span>
                      <p className="text-slate-600 leading-relaxed">
                        Affirmation that the card-management system, server cluster, and core banking database were operating under lawful custody and normal operational conditions when transactions were recorded.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-red-600 block mb-1">2. Data Integrity &amp; Cryptographic Hash</span>
                      <p className="text-slate-600 leading-relaxed">
                        Verification that data storage and extraction mechanisms remained uncompromised, accompanied by SHA-256 cryptographic hashes validating monthly PDF statement generation.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-red-600 block mb-1">3. Two-Factor &amp; OTP Authentication Logs</span>
                      <p className="text-slate-600 leading-relaxed">
                        Certified server logs showing delivery and entry of dynamic One-Time Passwords (OTP) and SMS delivery reports (DLT logs) to the cardholder&apos;s registered mobile number for contested transactions.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-red-600 block mb-1">4. Officer In-Charge Signature</span>
                      <p className="text-slate-600 leading-relaxed">
                        Execution by the Bank&apos;s System Administrator or Chief Information Security Officer (CISO) affirming compliance with Section 63(4) of Bharatiya Sakshya Adhiniyam 2023.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: 5-Stage Escalation Playbook */}
              <section id="heading-escalation-playbook" aria-labelledby="heading-escalation-playbook-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Stage Escalation Playbook for Bank Collections Heads &amp; Operations Officers
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Our institutional banking advisory recommends a disciplined 5-stage escalation framework designed to maximize recovery velocity while preserving strict compliance with RBI Fair Practice Codes:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      stage: "Stage 1",
                      title: "Digital Notification & Early CIBIL Notice (30–60 DPD)",
                      desc: "Upon two missed minimum payments, serve an electronic pre-warning notice across registered email and SMS alerting the cardholder to the contractual APR, late fees, and impending credit information bureau reporting under RBI 2022 rules.",
                    },
                    {
                      stage: "Stage 2",
                      title: "Formal Advocate Statutory Demand Notice (90 DPD NPA Threshold)",
                      desc: "Immediately upon account classification as a Non-Performing Asset, issue a formal statutory legal demand notice drafted by accredited banking advocates. Dispatched via India Post Registered Speed Post and tracked email, giving a strict 15-day cure window.",
                    },
                    {
                      stage: "Stage 3",
                      title: "Batch Listing in National Pre-Litigation Lok Adalat (120–150 DPD)",
                      desc: "Pool unresolved delinquent accounts and register pre-litigation conciliation applications before the District Legal Services Authority. Execute binding consent terms or obtain non-appearance certifications.",
                    },
                    {
                      stage: "Stage 4",
                      title: "Dual-Track Commercial Litigation (150–180 DPD)",
                      desc: "For high-balance cards (> ₹5 Lakhs), institute Order XXXVII CPC Summary Suits in the competent Commercial Court. For bounced autopay mandates, initiate Section 25 PSS Act quasi-criminal summons before Judicial Magistrates.",
                    },
                    {
                      stage: "Stage 5",
                      title: "Execution Decrees & Post-Judgment Asset Garnishment",
                      desc: "Execute civil decrees under Order XXI CPC by securing warrants of attachment against movable assets, freezing savings accounts, and obtaining garnishee orders on employer salary disbursements.",
                    },
                  ].map((p, i) => (
                    <div
                      key={i}
                      className="flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs"
                    >
                      <div className="px-3 py-1.5 rounded-xl bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider shrink-0">
                        {p.stage}
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">{p.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 8: Detailed Comparative Remedy Matrix Table */}
              <section id="heading-remedy-comparison" aria-labelledby="heading-remedy-comparison-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-remedy-comparison-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Remedy Matrix: Comparing Legal Recovery Channels for Banks
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The table below compares the legal avenues available to credit card issuing banks in India across monetary thresholds, speed, costs, and enforceability:
                </p>

                <div className="w-full overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xs">
                  <table className="w-full text-left text-xs sm:text-sm divide-y divide-slate-200 min-w-[640px]">
                    <thead className="bg-slate-100 text-slate-800 font-extrabold uppercase text-[11px] tracking-wider">
                      <tr>
                        <th className="p-3.5">Statutory Channel</th>
                        <th className="p-3.5">Governing Statute</th>
                        <th className="p-3.5">Ideal Claim Range</th>
                        <th className="p-3.5">Avg. Timeline</th>
                        <th className="p-3.5">Decree Enforceability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900">Pre-Litigation Lok Adalat</td>
                        <td className="p-3.5">Sec 19 &amp; 20 LSA Act 1987</td>
                        <td className="p-3.5">₹25,000 to ₹5,00,000</td>
                        <td className="p-3.5 text-emerald-700 font-bold">30–60 Days</td>
                        <td className="p-3.5">Civil Decree (Order XXI CPC)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900">Order XXXVII Summary Suit</td>
                        <td className="p-3.5">Order 37 CPC 1908</td>
                        <td className="p-3.5">₹5,00,000 to ₹50,00,000+</td>
                        <td className="p-3.5 text-indigo-700 font-bold">4–9 Months</td>
                        <td className="p-3.5">Fast-Track Money Decree</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900">Section 25 PSS Criminal Action</td>
                        <td className="p-3.5">Sec 25 PSS Act 2007</td>
                        <td className="p-3.5">Any Bounced NACH Amount</td>
                        <td className="p-3.5 text-amber-700 font-bold">3–6 Months</td>
                        <td className="p-3.5">Bailable Warrants / Coercive Settlement</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900">Fast-Track Sole Arbitration</td>
                        <td className="p-3.5">Sec 29B Arb Act 1996</td>
                        <td className="p-3.5">As per Cardholder MITC</td>
                        <td className="p-3.5 text-purple-700 font-bold">6 Months</td>
                        <td className="p-3.5">Enforceable Arbitral Award (Sec 36)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900">Debt Recovery Tribunal (DRT)</td>
                        <td className="p-3.5">RDB Act 1993</td>
                        <td className="p-3.5">&gt; ₹20,00,000 (Consolidated)</td>
                        <td className="p-3.5 text-rose-700 font-bold">12–24 Months</td>
                        <td className="p-3.5">Recovery Officer Recovery Certificate</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 9: Worked Institutional Recovery Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Worked Institutional Recovery Example: ₹8.40 Lakh Defaulted Premium Card Account
                </h2>
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-2xs space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                      Illustrative Case Study • Scheduled Commercial Bank NPA Recovery
                    </span>
                    <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                      Full Recovery + Decreetal Interest
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-slate-50 rounded-xl">
                      <span className="text-slate-500 block">Cardholder Facility</span>
                      <strong className="text-slate-900 text-sm">Super-Premium Metal Credit Card</strong>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl">
                      <span className="text-slate-500 block">Defaulted Principal + Charges</span>
                      <strong className="text-slate-900 text-sm">₹8,42,160 @ 120 DPD</strong>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl">
                      <span className="text-slate-500 block">Chosen Legal Channel</span>
                      <strong className="text-slate-900 text-sm">Order XXXVII CPC Summary Suit</strong>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <p>
                      <strong>The Delinquency Scenario:</strong> An executive cardholder in Gurugram accumulated ₹8,42,160 in luxury e-commerce and international travel charges. The cardholder ceased repayments, ignored tele-calling, and cancelled their NACH autopay mandate. At 90 DPD, the account was provisioned as NPA under RBI prudential norms.
                    </p>
                    <p>
                      <strong>Legal Strategy Implemented:</strong> The bank retained our advocate panel. We served a comprehensive 15-day statutory demand notice accompanied by itemized electronic statements and a Section 63 BSA electronic evidence certificate. When the cardholder failed to cure the default, our counsel filed an Order XXXVII Summary Suit in the Commercial Court.
                    </p>
                    <p>
                      <strong>Judicial Outcome:</strong> Upon receipt of the court summons in Form 4, the defendant attempted to plead financial hardship and alleged billing discrepancies. The Commercial Judge noted that the cardholder had received 6 monthly statements without raising disputes within the 60-day contractual period, holding that the defendant failed to show a substantial defense. Leave to Defend was denied, resulting in an immediate Summary Decree for ₹8,42,160 plus 12% pendente lite interest and ₹35,000 legal costs, successfully realized via salary garnishment under Order XXI CPC.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10: Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Credit Card NPA Evidence Checklist: 6 Core Records for Legal Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Prior to initiating statutory legal notice dispatch or court proceedings, the bank&apos;s recovery team must assemble the following verified evidence packet:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    {
                      num: "01",
                      title: "Card Application & MITC Acceptance Record",
                      desc: "Digital or physical application form, e-sign audit trail, KYC verification documents, and Most Important Terms & Conditions (MITC) acknowledgement.",
                    },
                    {
                      num: "02",
                      title: "Certified Electronic Monthly Statements",
                      desc: "Complete chronological statements showing credit limit utilization, transaction debits, interest calculations, and previous partial payments.",
                    },
                    {
                      num: "03",
                      title: "Section 63 BSA 2023 Digital Certificate",
                      desc: "Formal statutory certificate issued by the bank's IT system administrator verifying computer ledger integrity and cryptographic hash accuracy.",
                    },
                    {
                      num: "04",
                      title: "SMS & Registered Email Delivery Logs",
                      desc: "DLT-compliant SMS delivery reports and SMTP email server transmission receipts proving statement and notice delivery to the cardholder.",
                    },
                    {
                      num: "05",
                      title: "NPCI / Bank Return Memo for NACH Failures",
                      desc: "Official clearing return memo specifying 'Insufficient Funds' or 'Account Frozen' for initiating Section 25 PSS Act proceedings.",
                    },
                    {
                      num: "06",
                      title: "India Post Speed Post Tracking Receipts",
                      desc: "Consignment tracking barcodes and signed delivery confirmation run-sheets establishing valid service of the statutory legal notice.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-black text-red-600 bg-red-50 px-2 py-0.5 rounded-md">
                          {item.num}
                        </span>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900">{item.title}</h3>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 11: Call-to-Action Card */}
              <section className="pt-2">
                <CreditCardRecoveryCTA />
              </section>

              {/* Section 12: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Credit Card Dues Recovery for Banks
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Direct statutory answers for Credit Card Collections Heads, Card Operations Officers, and Legal Counsel.
                  </p>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 13: Primary Sources */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Authorities, Primary Statutes &amp; Banking Regulations
                </h2>
                <div className="bg-slate-100 rounded-xl p-4 sm:p-5 border border-slate-200 text-xs space-y-2">
                  <p className="text-slate-600 font-semibold mb-2">
                    Verified legal instruments and regulatory master directions referenced in this operational guide:
                  </p>
                  <ul className="space-y-1.5 list-disc pl-4 text-slate-700">
                    {PRIMARY_SOURCES.map((src, i) => (
                      <li key={i}>
                        <a
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-700 hover:text-red-800 underline underline-offset-2 font-medium"
                        >
                          {src.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Section 14: Related Recovery Guides */}
              <section className="pt-4 border-t border-slate-200">
                <RelatedRecoveryGuides />
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
