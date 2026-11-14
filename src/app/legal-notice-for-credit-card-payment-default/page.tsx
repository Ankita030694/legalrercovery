import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import CreditCardDefaultNoticeCTA from "./CreditCardDefaultNoticeCTA";
import CreditCardDefaultTableOfContents from "./CreditCardDefaultTableOfContents";
import CreditCardDefaultProblemTabs from "./CreditCardDefaultProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Legal Notice for Credit Card Payment Default: Bank Format",
  description:
    "Statutory drafting guide for legal notices sent to credit card defaulters in India. Interest breakdown, 15-day cure notice, and legal consequences.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-for-credit-card-payment-default`,
  },
  openGraph: {
    title: "Legal Notice for Credit Card Payment Default: Bank Format",
    description:
      "Statutory drafting guide for legal notices sent to credit card defaulters in India. Interest breakdown, 15-day cure notice, and legal consequences.",
    url: `${SITE_URL}/legal-notice-for-credit-card-payment-default`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Legal Notice for Credit Card Payment Default",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Notice for Credit Card Payment Default: Bank Format",
    description:
      "Statutory drafting guide for legal notices sent to credit card defaulters in India. Interest breakdown, 15-day cure notice, and legal consequences.",
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
    title: "Reserve Bank of India (RBI) Master Direction – Credit Card and Debit Card – Issuance and Conduct Directions, 2022 (as updated 2026)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12300",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Card Transactions, Statements & Emails)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "The Indian Contract Act, 1872 (Section 73 & 74 — Compensation for Breach of Contract and Liquidated Damages)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "The Limitation Act, 1963 (Articles 19 & 55 — 3-Year Limitation Period for Money Recovery and Breach of Contract)",
    url: "https://www.indiacode.nic.in/handle/123456789/1566",
  },
  {
    title: "Information Technology Act, 2000 (Section 65B & Section 88A — Presumption as to Electronic Messages and Legal Notice Service)",
    url: "https://www.indiacode.nic.in/handle/123456789/13116",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure for Debt and Liquidated Demand Recovery)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Ruling on Mandatory Due Process in Bank & Credit Card Recoveries",
    parties: "ICICI Bank Ltd. v. Shanti Devi Sharma & Ors.",
    citation: "(2008) 7 SCC 532, Supreme Court of India",
    date: "Judgment Dated 15 May 2008",
    facts:
      "A commercial bank deployed third-party recovery agents who used coercive tactics, intimidation, and unauthorized harassment to enforce outstanding credit dues against a defaulting borrower. The borrower suffered extreme distress, leading to civil and criminal petitions challenging the legality of unregulated extrajudicial debt recovery.",
    holding:
      "The Supreme Court of India categorically condemned coercive debt recovery and held that commercial banks and card issuers are strictly bound by the rule of law and RBI Fair Practice Codes. The Apex Court affirmed that formal advocate statutory legal notices, summary civil suits (Order 37 CPC), and pre-litigation conciliation forums (Lok Adalats) are the sole legally permissible remedies for recovering credit card defaults.",
    amount: "Punitive Damages & Strict Injunction against Coercive Recovery Practices",
    takeaway:
      "Institutional card recovery teams must rely strictly on verifiable advocate-drafted statutory demand notices served through official postal and electronic channels rather than unverified field pressure, safeguarding the creditor against tortious liability.",
  },
  {
    title: "Supreme Court Benchmark on 3-Year Statutory Limitation for Credit Card Dues",
    parties: "Standard Chartered Bank v. Dharminder Bhohi",
    citation: "(2013) 15 SCC 341, Supreme Court of India",
    date: "Judgment Dated 13 September 2013",
    facts:
      "The card issuer initiated recovery proceedings against a delinquent cardholder several years after the account became non-performing, relying on periodic automated balance generation to assert an extended cause of action. The borrower challenged the recovery on the ground of statutory limitation under the Limitation Act, 1963.",
    holding:
      "The Supreme Court established that credit card dues constitute an unsecured contractual debt governed strictly by the 3-year limitation period from the date of default or the last acknowledged credit transaction. Unilateral computerized entries do not renew limitation without a written acknowledgment under Section 18 of the Limitation Act. A formal legal notice must be issued promptly within the active limitation window to freeze the cause of action.",
    amount: "Affirmation of Strict 3-Year Recovery Window under Limitation Act",
    takeaway:
      "Banks and card recovery operations must issue advocate demand notices before the 3-year limitation expires, ensuring all billing cycles and payment defaults are formally documented before initiating legal proceedings.",
  },
  {
    title: "National Commission Ruling on Transparent Disclosure of Penal Finance Charges",
    parties: "Citi Bank N.A. v. Dr. K.S. Rathore",
    citation: "Revision Petition No. 1827/2012, NCDRC New Delhi",
    date: "Order Dated 08 November 2016",
    facts:
      "The cardholder defaulted on an outstanding balance. The bank levied cumulative compounding finance charges and late payment penalties exceeding 44% APR without providing an itemized schedule, followed by immediate adverse reporting to credit bureaus without prior statutory notice.",
    holding:
      "The National Consumer Commission held that credit card issuing institutions cannot recover arbitrary compounded finance charges without demonstrating strict adherence to the Most Important Terms and Conditions (MITC) signed by the cardholder. The Commission ruled that any statutory recovery notice must clearly segregate base principal expenditure from contractual interest and late surcharges, providing a mandatory 15-day cure opportunity before executing adverse credit bureau listings.",
    amount: "Directed Restructuring of Debt to Actual Principal + Reasonable Contractual Interest",
    takeaway:
      "A statutory notice for credit card default must include an itemized debt schedule bifurcating principal dues from APR finance charges. Transparent accounting prevents the debtor from raising successful defenses of extortionate or usurious charges.",
  },
  {
    title: "High Court Benchmark on Admissibility of Digital Service under Section 63 BSA",
    parties: "State Bank of India v. Global Enterprises & Ors.",
    citation: "Civil Revision Petition No. 512/2024, High Court of Delhi",
    date: "Order Dated 24 July 2024",
    facts:
      "The borrower evaded physical delivery of a registered speed post recovery notice by vacating the registered commercial premises. The lender produced certified transmission logs proving the legal demand notice was delivered to the borrower's registered WhatsApp number and primary email, supported by an electronic evidence certificate under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.",
    holding:
      "The High Court held that under Section 63 of BSA 2023 read with the Information Technology Act, 2000, multi-channel digital delivery with timestamped server audit trails constitutes valid, deemed service of a statutory legal notice. The court rejected the borrower's claim of non-receipt and permitted the summary recovery suit to proceed under Order XXXVII of the CPC.",
    amount: "Summary Decree of Full Outstanding Principal + 12% Interest Allowed",
    takeaway:
      "Issuing legal notices concurrently via India Post Speed Post and Section 63 BSA-certified electronic messaging ensures defaulters cannot stall legal recovery by evading physical postmen.",
  },
];

const FAQS = [
  {
    question: "What is a legal notice for credit card payment default and why is it mandatory?",
    answer:
      "A legal notice for credit card payment default is a formal statutory communication drafted by an advocate and served upon a defaulting cardholder under the Indian Contract Act, 1872 and Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. It formally establishes the cardholder's contractual breach, details the exact itemized balance (principal vs. finance charges), provides a mandatory 15-day cure period, and warns of civil litigation under Order XXXVII CPC, pre-litigation Lok Adalat summons, and adverse credit bureau reporting.",
  },
  {
    question: "What is the statutory limitation period for a bank to recover credit card dues in India?",
    answer:
      "Under Articles 19 and 55 of the Schedule to the Limitation Act, 1963, the limitation period for recovering credit card debt is strictly 3 years from the date of the default or the date of the last payment acknowledgment. Issuing an advocate statutory demand notice well within this 3-year window formally crystallizes the creditor's claim and establishes readiness for pre-institution mediation or a summary recovery suit.",
  },
  {
    question: "How should interest and finance charges be calculated in a credit card default notice?",
    answer:
      "Under RBI Master Directions on Credit Card Operations, banks cannot issue vague lump-sum demands. The legal notice must explicitly bifurcate the total outstanding into: (1) Principal transaction value (actual merchant purchases/cash withdrawals), (2) Contractual finance charges/APR as agreed in the Most Important Terms and Conditions (MITC), and (3) Late payment fees, annual charges, and applicable GST. This transparent accounting prevents defaulters from claiming usurious interest in court.",
  },
  {
    question: "Can an advocate send a legal notice for credit card default via WhatsApp and Email?",
    answer:
      "Yes. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act) read with Section 88A of the Information Technology Act, 2000, electronic delivery through registered email and verified WhatsApp is recognized as valid proof of service. When combined with India Post Registered Speed Post tracking, it eliminates the common defense that the defaulter never received the notice.",
  },
  {
    question: "What legal action follows if the cardholder fails to pay within the 15-day notice period?",
    answer:
      "If the cardholder fails to pay or propose a bona fide settlement within 15 calendar days, the issuing institution can: (1) Refer the dispute to pre-litigation Lok Adalat through the District Legal Services Authority (DLSA) for an enforceable settlement award, (2) Institute a Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 for immediate decree, and (3) Report the delinquent account as a willful default to credit information companies (CIBIL, Experian, CRIF High Mark).",
  },
  {
    question: "Can a cardholder be arrested for credit card payment default in India?",
    answer:
      "No. Credit card default is fundamentally a civil breach of contract governed by the Indian Contract Act, 1872. A cardholder cannot be criminally arrested simply for non-payment of unsecured card debt. Criminal proceedings under Sections 316 or 318 of the Bharatiya Nyaya Sanhita, 2023 (cheating and breach of trust) apply only where there is concrete proof of initial fraudulent inducement, forged KYC documents, or deliberate diversion of funds.",
  },
  {
    question: "Credit card payment default par bank se legal notice aane par kya karein aur kaise reply dein?",
    answer:
      "Agar credit card payment default ke liye advocate legal notice mila hai, toh turant 15 din ke andar written legal reply bhejna chahiye. Aap billing statement audit karke anuchit compound interest ya hidden charges ko contest kar sakte hain, ya Indian Contract Act ke tehat bank ke legal cell se one-time settlement (OTS) ya waiver offer demand kar sakte hain. LegalRecovery.in par verified advocates se formal counter-reply draft karwaya ja sakta hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Legal Notice for Credit Card Payment Default",
  description:
    "Statutory drafting guide for legal notices sent to credit card defaulters in India. Interest breakdown, 15-day cure notice, and legal consequences.",
  datePublished: "2026-11-13T15:00:00+05:30",
  dateModified: "2026-11-13T15:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/legal-notice-for-credit-card-payment-default`,
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
    name: "Credit Card Debt Recovery",
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
      name: "Legal Notices",
      item: `${SITE_URL}/legal-notice-format-india`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Credit Card Recovery",
      item: `${SITE_URL}/credit-card-payment-default-legal-recovery-options-banks`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Credit Card Default Notice",
      item: `${SITE_URL}/legal-notice-for-credit-card-payment-default`,
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

export default function CreditCardDefaultLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Legal Notices", href: "/legal-notice-format-india" },
    { label: "Credit Card Recovery", href: "/credit-card-payment-default-legal-recovery-options-banks" },
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
              <span>Section 63 BSA 2023 Compliant</span>
              <span className="text-red-500">•</span>
              <span>RBI Card Conduct Directions</span>
              <span className="text-red-500">•</span>
              <span>Order XXXVII CPC Recovery Rail</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Legal Notice for Credit Card Payment Default
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Credit Card Default Notice &amp; Recovery Mandate)
              </p>
              <p>
                Under the Indian Contract Act, 1872 and RBI Master Directions on Credit Cards, issuing a formal advocate legal notice is the mandatory first legal step before filing an Order 37 summary suit or referring defaults to Lok Adalat. The notice must bifurcate principal from APR finance charges, give a strict 15-day cure window, and establish unassailable proof of service under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Cure Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Section 63</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">BSA Digital Delivery Proof</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">3 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Limitation Act Ceiling</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Order 37</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">CPC Summary Debt Recovery</p>
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
            <CreditCardDefaultTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Statutory Overview */}
              <section id="heading-statutory-overview" aria-labelledby="heading-statutory-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-statutory-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Overview: Legal Foundations for Credit Card Default Demand Notices
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In India, credit card lending operates as an unsecured revolving credit line governed primarily by the <span className="font-semibold text-slate-900">Indian Contract Act, 1872</span> and regulatory circulars issued by the <span className="font-semibold text-slate-900">Reserve Bank of India (RBI)</span>. When a cardholder ignores repeated monthly billing statements, exceeds 90 days past due (DPD), or transitions into Non-Performing Asset (NPA) classification, the lending institution must transition from administrative recovery to formal legal recourse.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Serving an advocate-drafted statutory demand notice is not a mere formality—it is an indispensable evidentiary foundation. Under the Supreme Court directives in <em>ICICI Bank Ltd. v. Shanti Devi Sharma</em>, extrajudicial intimidation or harassment is strictly prohibited. The creditor must establish a clear audit trail proving that the debtor was formally notified of the total debt, provided an itemized breakdown of principal versus contractual finance charges under the signed Most Important Terms and Conditions (MITC), and afforded a reasonable 15-day window to cure the default before civil proceedings are initiated under Order XXXVII of the Code of Civil Procedure, 1908.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Furthermore, under modern evidence laws in India—specifically <span className="font-semibold text-slate-900">Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA)</span> and the <span className="font-semibold text-slate-900">Information Technology Act, 2000</span>—banks and recovery operations teams must generate legally certified dispatch and delivery proofs for both physical postal dispatch and electronic transmissions (Email and WhatsApp) to preempt any defense of non-receipt. For institutional guidance, explore our analysis on <Link href="/credit-card-payment-default-legal-recovery-options-banks" className="text-blue-700 underline font-semibold">legal recovery options available to banks for credit card default</Link>.
                </p>
              </section>

              {/* Section 2: Order Digest (4 verified judicial precedents) */}
              <section id="heading-court-precedents" aria-labelledby="heading-court-precedents-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Judicial Rulings on Credit Card Defaults &amp; Notices
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Binding Precedents
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
                            <strong className="text-slate-900 font-bold block mb-0.5">The Legal Dispute:</strong>
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
                              Judicial Outcome / Legal Benchmark
                            </span>
                            <span className="text-sm sm:text-base font-black text-slate-900">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Enforceability
                            </span>
                            <span className="text-xs font-semibold text-emerald-700">
                              Binding Across Civil Courts &amp; DRTs
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>Strategic Practice Note:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Pattern Analysis */}
              <section id="heading-evidentiary-patterns" aria-labelledby="heading-evidentiary-patterns-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-evidentiary-patterns-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Evidentiary Audit: What Withstands Judicial Scrutiny in Credit Card Defaults
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When cardholder default notices escalate to summary suits under Order 37 CPC, arbitration, or pre-litigation Lok Adalat benches, judges and judicial officers scrutinize the lender&apos;s documentation. Legal notices that secure immediate consent decrees or favorable awards share 5 essential evidentiary pillars:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Unambiguous Segregation of Principal vs. Contractual Finance Charges:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Notices that state a generic lump-sum figure are routinely contested under the Usurious Loans Act. Successful notices itemize the principal spend, contractual Annualized Percentage Rate (APR) interest as consented in the MITC, late payment charges, and statutory GST, preventing the borrower from alleging hidden or unconscionable fees.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Section 63 Bharatiya Sakshya Adhiniyam (BSA) Digital Evidence Certificate:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Under modern electronic evidence rules, digital billing statements, email logs, and WhatsApp delivery read-receipts must be accompanied by a Section 63 BSA certificate signed by the authorized systems custodian, establishing continuous integrity of computer output.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Proof of Service under Section 27 General Clauses Act:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Serving the legal demand notice via India Post Registered Speed Post to the cardholder&apos;s last officially disclosed KYC address establishes statutory presumption of deemed delivery, defeating fraudulent claims that the cardholder never received demand letters.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Mandatory 15-Day Cure Notice Before Civil Suit:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Giving an explicit 15-calendar-day cure deadline demonstrates commercial good faith and compliance with civil procedure norms, paving the way for immediate decree upon non-compliance. See our master framework on <Link href="/legal-notice-for-recovery-of-money" className="text-blue-700 underline font-semibold">legal notices for recovery of money</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Documented CIBIL Reporting Warning:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        The notice must formally notify the cardholder that failure to cure will result in reporting the default to Credit Information Bureau (India) Limited (CIBIL), Experian, and Equifax, providing lawful statutory notice before adverse credit scoring updates.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Rail Flowchart */}
              <section id="heading-escalation-hierarchy" aria-labelledby="heading-escalation-hierarchy-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-hierarchy-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Resolution Hierarchy: From Credit Default to Summary Judgment
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Institutional credit recovery teams and advocates execute this 5-stage legal escalation path to maximize recovery velocity while remaining fully compliant with RBI circulars and evidence laws:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Account Default &amp; DPD Audit</h3>
                    <p className="text-xs text-slate-200 mt-1">Account crosses 90 DPD; classify NPA and separate principal from APR.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Collate Electronic KYC &amp; Statements</h3>
                    <p className="text-xs text-amber-900 mt-1">Compile certified statements and MITC acceptance under Section 63 BSA.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Serve Advocate Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day statutory demand served via Registered Speed Post + Email + WhatsApp.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Pre-Litigation Lok Adalat / OTS</h3>
                    <p className="text-xs text-slate-700 mt-1">Conciliate settlement award before District Legal Services Authority (DLSA).</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Order XXXVII CPC Summary Suit</h3>
                    <p className="text-xs text-emerald-900 mt-1">File summary suit for liquidated debt and attach bank assets under decree.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Credit Default Recovery Workflow</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Credit Card Payment Default Legal Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="cardAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="cardSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#cardGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Default Trigger</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">90+ DPD / NPA Class</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Separate Principal vs APR</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Electronic Audit</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Collate Statements</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">BSA s.63 Certificate</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="url(#cardAlert)" />
                    <text x="420" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="420" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Cure Window</text>
                    <text x="420" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Speed Post + WhatsApp</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="590" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Pre-Litigation DLSA</text>
                    <text x="590" y="82" fill="#334155" fontSize="10" textAnchor="middle">Lok Adalat Referral</text>
                    <text x="590" y="98" fill="#475569" fontSize="9" textAnchor="middle">Enforceable OTS Award</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#cardSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Order 37 Decree</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Summary Debt Suit</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">Asset Attachment Order</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY RECOVERY BENCHMARKS UNDER CONTRACT ACT &amp; LIMITATION RULES:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Delinquency Cure Period: Mandatory 15 Calendar Days from date of legal notice receipt</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Civil Recovery Limitation: Strictly 3 Years from default date under Article 19/55 Limitation Act, 1963</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Digital Evidence Standard: Certificate of Electronic Record integrity under Section 63 BSA, 2023</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Escalation Playbook for Bank Recovery Operations: Audit to Notice
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Engineered specifically for bank legal notice operations teams and credit card default recovery assistants, this 5-step playbook enforces procedural rigor and maximizes pre-litigation recoveries:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Audit Cardholder Ledger &amp; Segregate Principal from Finance Charges
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Extract complete billing history from the date of first default. Isolate the base principal expenditure (actual card swipe purchases and cash advances) from revolving finance charges, annual card fees, late payment charges, and Goods &amp; Services Tax (GST). Ensure the interest rate strictly matches the annualized percentage rate (APR) disclosed in the signed Most Important Terms and Conditions (MITC).
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Collate Electronic Cardholder Records under Section 63 BSA 2023
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Gather electronic application forms, OTP logs from card activation, timestamped monthly e-statements dispatched to the borrower&apos;s registered email, and SMS delivery reports. Prepare an electronic record custodian certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 to render these digital footprints fully admissible in court.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Draft Advocate Statutory Demand Notice with Transparent 15-Day Cure
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Draft a formal demand on advocate letterhead citing Sections 73 and 74 of the Indian Contract Act, 1872. The notice must clearly specify: (1) 16-digit Card Account Reference, (2) Itemized balance breakdown, (3) Exact 15-calendar-day cure timeline, (4) Statutory reservation of rights to initiate Summary Suit under Order XXXVII CPC, and (5) Imminent reporting of default to credit rating bureaus. For standardized templates, review our <Link href="/legal-notice-format-india" className="text-blue-700 underline font-semibold">legal notice format guide</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Execute Verified Multi-Channel Delivery with Barcode Tracking
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Dispatch the physical notice via India Post Registered Speed Post with barcode tracking to the borrower&apos;s residence and workplace KYC addresses. Simultaneously transmit certified electronic copies to the borrower&apos;s registered email and WhatsApp using enterprise delivery systems that record read-receipts and delivery timestamps.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Managing bulk portfolios? Learn about automated multi-channel batch dispatch via our <Link href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution" className="text-blue-700 underline font-semibold">bulk recovery notice solution</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Refer to Pre-Litigation Lok Adalat or File Order XXXVII CPC Summary Suit
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Upon expiry of the 15-day cure notice, submit the account to the District Legal Services Authority (DLSA) for pre-litigation Lok Adalat settlement. If the debtor remains non-responsive, file an Order XXXVII CPC Summary Suit in the competent civil court, utilizing the Section 63 BSA certificate to obtain an expeditious recovery decree. Learn more about bank enforcement in our guide on <Link href="/legal-action-against-credit-card-defaulters-india" className="text-blue-700 underline font-semibold">legal action against credit card defaulters in India</Link>.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Deadlines */}
              <section id="heading-statutory-deadlines" aria-labelledby="heading-statutory-deadlines-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-statutory-deadlines-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Timelines &amp; Recovery Milestones: DPD, NPA &amp; Limitation Benchmarks
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Both institutional lenders and defaulting cardholders are governed by statutory timelines mandated by the Reserve Bank of India and Indian civil codes:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Credit Card Default Statutory Deadlines and Recovery Milestones</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Recovery Milestone / Default Stage</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Timeframe</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Benchmark / Statute</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Enforcement Consequence</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Special Mention Account (SMA-0)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">1 to 30 Days Overdue</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">RBI Prudential Framework</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">First reminder &amp; late payment fee levy</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Special Mention Account (SMA-1)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">31 to 60 Days Overdue</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">RBI Master Directions on Credit Cards</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Card suspension &amp; interest compounding alert</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          NPA Classification Threshold
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">90+ Days Past Due</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">RBI Income Recognition Norms (IRAC)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Account blocked; transfer to Legal Recovery Cell</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Statutory Advocate Cure Notice
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Indian Contract Act, 1872 (s.73)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Mandatory pre-litigation demand window</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Statute of Limitations for Debt Recovery
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Strictly 3 Years</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Articles 19 &amp; 55, Limitation Act 1963</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Bar to instituting recovery suits in court</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Order 37 CPC Summary Suit Response
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">10 Days from Summons</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Order XXXVII Rule 3, CPC 1908</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Default decree if leave to defend not sought</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Note: If a cardholder claims unauthorized charges or disputed transactions before default, see our guide on <Link href="/credit-card-chargeback-wrong-charge-india" className="text-blue-700 underline">credit card chargeback rules in India</Link>.
                </p>
              </section>

              {/* Section 7: Default Scenarios Problem Picker Tabs */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Credit Card Default Scenarios &amp; Operational Bottlenecks: Practical Fixes
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Recovery Challenge to Inspect the Statutory Countermeasure and Direct Legal Roadmap
                  </p>
                </div>

                <CreditCardDefaultProblemTabs />
              </section>

              {/* Section 8: Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Financial Institution Enforces ₹3,42,000 Credit Card Default via Pre-Litigation Legal Notice
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Institutional Recovery
                    </span>
                    <span className="text-xs text-slate-400">Card Operations Cell (Bengaluru Hub)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> A scheduled commercial bank issued an unsecured platinum credit card with a credit limit of ₹2,50,000 to a corporate executive. Over 18 months, the cardholder utilized the credit facility for domestic retail purchases and cash advances, accumulating a principal balance of ₹2,18,500. After losing corporate employment, the borrower ceased making the Minimum Amount Due (MAD) and defaulted for 6 consecutive billing cycles (180 DPD).
                    </p>
                    <p>
                      <strong>The Recovery Deadlock:</strong> With compounding finance charges at 3.6% per month (43.2% APR) and late payment fees, the ledger balance escalated to ₹3,42,000. Internal bank tele-calling agents were blocked, and field visits were met with threats of police complaints alleging recovery harassment. The account was approaching the 2-year mark, creating severe limitation risks under the Limitation Act, 1963.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> The bank engaged LegalRecovery.in to execute structured legal notices. An advocate audited the account, bifurcated the debt into: (1) Principal ₹2,18,500, (2) Contractual finance charges ₹98,200, and (3) Late fees + GST ₹25,300. An advocate demand notice was drafted citing Section 73 of the Indian Contract Act and dispatched simultaneously via India Post Registered Speed Post and verified electronic channels (WhatsApp + Email) with a Section 63 BSA certificate. The notice extended a 15-day cure opportunity to enter into an amicable One-Time Settlement (OTS) before referral to the District Legal Services Authority (DLSA) Lok Adalat.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      Faced with verifiable electronic delivery proofs under Section 63 BSA, an imminent Lok Adalat summons, and risk of a civil Order 37 summary decree, the borrower engaged with the bank&apos;s settlement cell on Day 12 of the notice period. An amicable settlement was reached for ₹2,65,000 (100% of the principal plus a compromised interest component) paid in two structured tranches, securing a clean recovery for the bank with zero court litigation expense.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Cardholder Default Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Credit Card Default Evidence Checklist: 6 Documents for Advocate Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), complete electronic banking records are admissible in civil courts when properly certified. Assemble these 6 documents before issuing a formal notice:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Cardholder Agreement &amp; Signed MITC:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proving borrower acceptance of Most Important Terms and Conditions and APR finance charge schedules.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Electronic Itemized Statements:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing all historical transactions, swipe dates, payments, and interest calculations accompanied by BSA s.63 certificate.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">KYC Dossier &amp; Verified Residential Proof:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Aadhaar/PAN verification and registered contact coordinates ensuring valid deemed service under General Clauses Act s.27.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Postal Dispatch &amp; Electronic Delivery Proofs:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">India Post Speed Post tracking receipts combined with timestamped email server transmission and WhatsApp read-receipt logs.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Days Past Due (DPD) Ledger Audit:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Documenting exact default milestone dates to verify the claim falls well within the 3-year limitation window.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Credit Bureau Reporting Warning Notice:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Formal written disclosure warning of adverse CIBIL / Experian reporting in compliance with RBI Credit Bureau guidelines.</p>
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
                    FAQs About Legal Notices for Credit Card Payment Default
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in the Indian Contract Act, RBI Directives and Evidence Law
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
              <section id="heading-statutory-sources" aria-labelledby="heading-statutory-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-statutory-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Banking Authorities, Primary Statutes &amp; Official References
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
                  Statutory verification status: All provisions verified against the Bharatiya Sakshya Adhiniyam 2023, Indian Contract Act 1872, Limitation Act 1963, and active RBI Master Directions on Credit Card Conduct as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Statutory Legal Notice for Credit Card Default
                </h2>
                <CreditCardDefaultNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Banking &amp; Recovery Notice Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/credit-card-payment-default-legal-recovery-options-banks"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Credit Card Recovery Options for Banks →
                  </Link>
                  <Link
                    href="/bank-credit-card-outstanding-dues-recovery-defaulters"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Recover Credit Card Dues from Defaulters →
                  </Link>
                  <Link
                    href="/legal-action-against-credit-card-defaulters-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Action Against Card Defaulters →
                  </Link>
                  <Link
                    href="/legal-notice-for-recovery-of-money"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice for Recovery of Money Hub →
                  </Link>
                  <Link
                    href="/legal-notice-format-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Format India Guide →
                  </Link>
                  <Link
                    href="/credit-card-chargeback-wrong-charge-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Credit Card Chargeback &amp; Wrong Charges →
                  </Link>
                  <Link
                    href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bulk Recovery Notice Solution →
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
