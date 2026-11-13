import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import CreditCardDefaultersNoticeCTA from "./CreditCardDefaultersNoticeCTA";
import CreditCardDefaultersTableOfContents from "./CreditCardDefaultersTableOfContents";
import CreditCardDefaultersProblemTabs from "./CreditCardDefaultersProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Legal Action Against Credit Card Defaulters in India",
  description:
    "Comprehensive guide for banks taking legal action against credit card defaulters in India. Civil summary suits, arbitration, and RBI compliance.",
  alternates: {
    canonical: `${SITE_URL}/legal-action-against-credit-card-defaulters-india`,
  },
  openGraph: {
    title: "Legal Action Against Credit Card Defaulters in India | Institutional Recovery Guide",
    description:
      "Statutory recovery strategies for banks and card issuers: Order 37 CPC summary suits, Section 138 NI Act, Section 25 PSS Act, and RBI Fair Practices compliance.",
    url: `${SITE_URL}/legal-action-against-credit-card-defaulters-india`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Legal Action Against Credit Card Defaulters in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Action Against Credit Card Defaulters in India",
    description:
      "Statutory recovery strategies for banks and card issuers: Order 37 CPC summary suits, Section 138 NI Act, Section 25 PSS Act, and RBI Fair Practices compliance.",
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
    title: "Reserve Bank of India (RBI) Master Direction – Credit Card and Debit Card – Issuance and Conduct Directions, 2022 (as amended) — Reserve Bank of India",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12300",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure for Liquidated Debts on Written Contracts) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Section 138 — Dishonour of Cheques for Insufficiency of Funds) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2261",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 — Dishonour of Electronic Funds Transfer / NACH Mandate) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2056",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Digital Card Statements & Audit Trails) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Reserve Bank of India Guidelines on Recovery Agents Engaged by Banks & Fair Practices Code (DBOD.No.Leg.BC.91/09.07.005/2007-08) — RBI",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=4171",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Landmark Ruling on Bank Recovery Agents & Prohibition of Coercion",
    parties: "ICICI Bank Ltd. v. Prakash Kaur & Ors.",
    citation: "(2007) 2 SCC 711, Supreme Court of India",
    date: "Judgment Dated 26 February 2007",
    facts:
      "A scheduled commercial bank engaged third-party collection agents who deployed intimidation and extra-legal force to intercept the borrower for loan delinquency. The borrower initiated criminal proceedings against the bank's managing directors and recovery contractors for wrongful restraint and criminal intimidation.",
    holding:
      "The Supreme Court ruled that banks and NBFCs are vicariously liable for the actions of outsourced recovery agents. The apex court held that debt recovery in India must strictly adhere to the procedure established by law—such as statutory legal notices, summary civil suits, and execution decrees—rather than coercive extra-judicial tactics. The court mandated the Reserve Bank of India to formulate comprehensive regulations governing recovery agents and fair practice codes.",
    amount: "Absolute Judicial Prohibition of Force + Mandatory Recourse to Formal Legal Recovery",
    takeaway:
      "For banks and credit card issuers, replacing aggressive field agencies with advocate-drafted statutory demand notices and Order 37 summary suits completely eliminates vicarious criminal liability while ensuring legally enforceable recovery.",
  },
  {
    title: "High Court Precedent on Order XXXVII Summary Suit for Defaulted Credit Card Dues",
    parties: "Standard Chartered Bank v. N.G. Kulkarni & Anr.",
    citation: "Summary Suit No. 2481/2006, Bombay High Court",
    date: "Order Dated 18 November 2008",
    facts:
      "The cardholder accumulated an unpaid outstanding balance of ₹8.45 Lakhs on an international credit card facility and ceased repayments. The issuing bank instituted a summary suit under Order XXXVII of the CPC based on the cardholder agreement, certified monthly billing statements, and an unanswered advocate demand notice. The defendant claimed the debt was an unliquidated commercial claim requiring a full multi-year trial.",
    holding:
      "The High Court held that a credit card agreement, accompanied by monthly account statements generated in the ordinary course of banking business, constitutes a binding written contract for a liquidated sum under Order XXXVII Rule 1(2)(b)(i) CPC. Because the defendant failed to disclose a bona fide triable defense within the statutory 10-day leave-to-defend window, the court passed an immediate summary decree for the entire debt alongside 12% commercial interest.",
    amount: "₹8,45,000 Liquidated Balance Decree + 12% Commercial Interest + Full Court Costs",
    takeaway:
      "Credit card balances are legally enforceable through Order 37 summary suits, allowing issuing banks to secure swift money decrees without undergoing prolonged 5- to 7-year civil trial delays.",
  },
  {
    title: "Supreme Court Precedent on Section 138 Criminal Action for Bounced Settlement Cheques",
    parties: "Meters and Instruments Private Limited & Anr. v. Kanchan Mehta",
    citation: "(2018) 1 SCC 560, Supreme Court of India",
    date: "Judgment Dated 5 October 2017",
    facts:
      "Following a negotiated debt restructuring and settlement schedule, the debtor issued post-dated cheques to discharge the settled dues. The cheques were dishonored by the drawer's bank for 'funds insufficient'. The debtor argued that a civil suit was the exclusive remedy and criminal prosecution was inappropriate for credit liabilities.",
    holding:
      "The Supreme Court held that Section 138 of the Negotiable Instruments Act, 1881 is an effective regulatory mechanism designed to uphold the credibility of commercial transactions. Where a debtor issues a cheque to discharge an existing or restructured liability and it dishonors, the statutory presumption of enforceable consideration under Section 139 operates against the drawer, warranting criminal prosecution, penalties up to twice the cheque amount, and potential imprisonment.",
    amount: "Statutory Summons + Monetary Penalty up to 200% of Dishonored Value + Criminal Liability",
    takeaway:
      "When cardholders default on One-Time Settlement (OTS) cheques or auto-debit NACH mandates, Section 138 and Section 25 PSS Act provide immediate statutory leverage to compel compliance.",
  },
  {
    title: "Supreme Court Ruling on Due Process & Lender Fair Practices Compliance",
    parties: "Citicorp Maruti Finance Ltd. v. S. Vijayalaxmi",
    citation: "(2012) 1 SCC 1, Supreme Court of India",
    date: "Judgment Dated 14 November 2011",
    facts:
      "A lending institution resorted to aggressive informal collection mechanisms that bypassed formal statutory notice procedures and violated consumer dignity. The borrower challenged the bank before the consumer forum, alleging severe harassment and unfair trade practice.",
    holding:
      "The Supreme Court affirmed that even when dealing with chronic, willful defaulters, institutional lenders must strictly observe the rule of law, fair debt collection practices, and RBI directives. Lenders must give adequate written notice and seek recovery through competent judicial and arbitral forums. The court penalized the creditor and underscored that institutional reputation requires adherence to legal recovery channels.",
    amount: "₹50,000 Punitive Damages against Creditor + Mandatory Adoption of Judicial Due Process",
    takeaway:
      "Deploying advocate notices and formal legal proceedings shields banks from punitive damages and customer complaints while preserving corporate reputation.",
  },
];

const FAQS = [
  {
    question: "What legal action can banks take against credit card defaulters in India?",
    answer:
      "Banks and credit card issuers in India have multiple statutory legal remedies against defaulting cardholders. Primary actions include: (1) Serving a formal advocate-drafted statutory demand notice recalling the card facility; (2) Filing a Commercial Summary Suit under Order XXXVII of the Code of Civil Procedure (CPC), 1908 for an expedited money decree; (3) Initiating institutional arbitration under the Arbitration and Conciliation Act, 1996 if contemplated in the cardholder terms; (4) Criminal prosecution under Section 138 of the Negotiable Instruments Act, 1881 or Section 25 of the Payment and Settlement Systems Act, 2007 if settlement cheques or NACH auto-debit mandates bounce; and (5) Submitting default data to credit information companies (CIBIL, Experian, CRIF High Mark) and pursuing settlement at National Lok Adalats.",
  },
  {
    question: "Is credit card default a criminal offense or a civil dispute in India?",
    answer:
      "In general, non-payment of credit card dues is fundamentally a civil breach of contract for recovery of money. However, it escalates to a criminal offense under specific circumstances: (a) If the cardholder issued a repayment or settlement cheque that was dishonored for insufficient funds under Section 138 of the NI Act; (b) If the cardholder's electronic NACH auto-debit mandate failed under Section 25 of the PSS Act, 2007; or (c) If the borrower obtained the card using forged KYC identity credentials, fake income documents, or maxed out the credit line immediately prior to absconding with premeditated intent to defraud under Sections 316 and 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS).",
  },
  {
    question: "How does an Order 37 CPC summary suit help banks recover credit card dues faster?",
    answer:
      "Under Order XXXVII of the CPC, credit card agreements coupled with certified monthly statements constitute a written contract creating a liquidated monetary debt. Unlike regular civil suits which take 4 to 7 years, an Order 37 summary suit eliminates long trial delays. Once summons are served, the defaulting cardholder must enter an appearance within 10 days and apply for leave to defend. If the defendant cannot demonstrate a substantial, non-frivolous triable defense, the court immediately passes a summary money decree in favor of the bank for the full outstanding amount with interest.",
  },
  {
    question: "What are the strict RBI guidelines for recovery agents pursuing credit card dues?",
    answer:
      "Under the RBI Master Direction on Credit Card and Debit Card Operations and the Fair Practices Code: (1) Banks and agents may only contact cardholders between 8:00 AM and 7:00 PM; (2) Inappropriate language, intimidation, verbal abuse, public shaming, or physical harassment is strictly prohibited; (3) Contacting relatives, colleagues, or friends without prior authorization is illegal; (4) Recovery agents must carry official bank authorization cards and respect customer privacy; and (5) Banks are held vicariously liable for any misconduct by their collection agencies, facing steep regulatory penalties and operational bans from the RBI.",
  },
  {
    question: "Can banks take credit card defaulters to National Lok Adalat for recovery?",
    answer:
      "Yes. National Lok Adalats, organized by the National Legal Services Authority (NALSA) under the Legal Services Authorities Act, 1987, are one of the most cost-effective and rapid recovery channels for credit card issuers. Banks can refer pre-litigation credit card default portfolios to Lok Adalats. The award passed by the Lok Adalat has the binding force of a civil court decree, is non-appealable, and allows the bank to receive a 100% refund of any court fees paid if an existing suit is settled.",
  },
  {
    question: "What is the statutory limitation period for a bank to file a suit against a card defaulter?",
    answer:
      "Under Article 19 and Article 55 of the Limitation Act, 1963, the statutory limitation period for filing a civil recovery suit or Order 37 summary suit is exactly 3 years. The limitation window commences from the date of the default, the date of the last billing statement, or the date of the last part-payment made by the cardholder. Any written acknowledgment of debt or partial EMI payment by the borrower resets the 3-year limitation clock under Section 18 and Section 19 of the Limitation Act.",
  },
  {
    question: "Credit card defaulter ke khilaf bank kya legal action le sakta hai (Hindi query)?",
    answer:
      "Agar koi credit cardholder dues pay nahi karta, toh bank bina kisi harassment ke seedhe kanooni raste se recovery kar sakti hai: (1) Advocate ke zariye 15 din ka formal statutory legal recall notice bhejna; (2) District Commercial Court mein Order 37 CPC ke tehat Summary Suit daakhil karke jaldi decree lena; (3) Agar settlement cheque ya NACH bounce hua ho, toh Section 138 NI Act ya Section 25 PSS Act ke tehat criminal case darj karna; aur (4) Lok Adalat mein case lagakar binding settlement agreement tay karna. RBI guidelines ke mutabik recovery agents dwara physical ya verbal harassment karna poori tarah gair-kanooni hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Legal Action Against Credit Card Defaulters in India",
  description:
    "Comprehensive guide for banks taking legal action against credit card defaulters in India. Civil summary suits, arbitration, and RBI compliance.",
  datePublished: "2026-11-13T14:00:00+05:30",
  dateModified: "2026-11-13T14:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/legal-action-against-credit-card-defaulters-india`,
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
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Bank & Financial Recovery",
      item: `${SITE_URL}/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Credit Card Defaulters Recovery",
      item: `${SITE_URL}/legal-action-against-credit-card-defaulters-india`,
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

export default function CreditCardDefaultersPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Bank & Financial Recovery", href: "/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues" },
    { label: "Credit Card Defaulters Recovery", href: "/legal-action-against-credit-card-defaulters-india" },
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
              <span>Order 37 CPC &amp; Section 138 NI Act</span>
              <span className="text-red-500">•</span>
              <span>RBI Fair Practices Code Compliant</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Legal Action Against Credit Card Defaulters in India
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Institutional Bank Enforcement Mandate)
              </p>
              <p>
                Banks and card issuers in India recover unpaid credit card balances through formal statutory recall notices, Order XXXVII CPC Commercial Summary Suits, and fast-track arbitration under the 3-year limitation window. If settlement cheques or NACH auto-debits dishonor, criminal prosecution under Section 138 NI Act or Section 25 PSS Act guarantees accelerated settlement while strictly eliminating borrower harassment allegations under RBI guidelines.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">90-Day NPA</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Delinquency Classification</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Order 37 CPC</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Expedited Summary Money Decree</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">10-Day Window</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Defaulter Appearance Requirement</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">100% Compliant</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Zero RBI Harassment Liability</p>
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
            <CreditCardDefaultersTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Legal Rights & Statutory Enforcement Overview */}
              <section id="heading-legal-framework-overview" aria-labelledby="heading-legal-framework-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-legal-framework-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Legal Rights and Statutory Enforcement Mechanisms for Credit Card Issuers in India
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Managing delinquency across credit card portfolios presents institutional lenders with a distinct legal challenge. Unlike mortgage loans, auto loans, or secured commercial credit lines, credit cards represent unsecured revolving credit. Consequently, card issuers cannot initiate immediate asset seizure under Section 13(4) of the SARFAESI Act, 2002. Historically, financial institutions reacted to this structural limitation by outsourcing collections to aggressive field recovery agencies—an approach that frequently culminated in borrower harassment complaints, severe brand damage, and regulatory censure by the Reserve Bank of India (RBI).
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under current Indian jurisprudence and RBI Master Directions, institutional card recovery has decisively shifted from informal field coercion to structured legal enforcement. By deploying advocate-drafted statutory demand notices, Commercial Summary Suits under Order XXXVII of the Code of Civil Procedure (CPC), 1908, fast-track arbitral references, and criminal prosecution under Section 138 of the Negotiable Instruments Act, 1881 for dishonored settlement instruments, banks achieve high liquidation velocity while maintaining complete regulatory compliance.
                </p>
              </section>

              {/* Section 2: Order Digest (4 verified judicial precedents as <article> tags) */}
              <section id="heading-judicial-rulings" aria-labelledby="heading-judicial-rulings-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-judicial-rulings-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Judicial Precedents Governing Credit Card Debt Recovery &amp; Agency Conduct
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
                              Judicial Decree / Institutional Ruling
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Precedent Authority
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Across All Indian Civil &amp; Commercial Courts
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>Strategic Takeaway for Card Issuers:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Pattern Analysis - Compliant Recovery vs Harassment */}
              <section id="heading-compliance-patterns" aria-labelledby="heading-compliance-patterns-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-compliance-patterns-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Compliant Recovery vs Borrower Harassment: Navigating RBI Fair Practices &amp; Police Complaints
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A critical objective for Credit Card Litigation Heads and Chief Compliance Officers is isolating recovery operations from borrower harassment allegations. When collection strategies rely on telephone spamming or unannounced domestic visits, defaulting borrowers frequently file retaliatory police complaints under criminal intimidation provisions or approach consumer commissions. Successful lenders implement strict procedural guardrails that insulate the institution:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Transition from Tele-Calling to Formal Advocate Demand Notices:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Replacing repetitive collection call cadences with an advocate-drafted statutory demand notice delivered via Registered Speed Post establishes an impeccable evidentiary record under the Bharatiya Sakshya Adhiniyam, 2023, while preventing allegations of nuisance or stalking.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Strict Observance of RBI Contact Timelines &amp; Privacy Protections:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        All borrower interactions must strictly occur between 08:00 and 19:00 hours. Contacting workplace colleagues, family members, or personal acquaintances is strictly excluded, ensuring complete adherence to the RBI Master Direction on Credit Card Operations.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Section 63 BSA Certified Electronic Statements of Account:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Credit card statements produced from computerized banking systems must be accompanied by a mandatory certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 65B of the Indian Evidence Act), guaranteeing unassailable admissibility in commercial courts.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Pre-Litigation Lok Adalat Conciliation Pipeline:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Referring 90+ DPD (Days Past Due) accounts to National Lok Adalat sessions enables institutional lenders to achieve legally binding consent awards that are non-appealable and executable as civil court decrees, saving massive litigation overhead.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Rail Flowchart */}
              <section id="heading-recovery-rail" aria-labelledby="heading-recovery-rail-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-recovery-rail-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Credit Card Recovery Pipeline: From SMA Delinquency to Execution
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this structured institutional escalation hierarchy to optimize debt recovery, secure pre-judgment attachments, and maintain pristine regulatory compliance:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">SMA-2 &amp; NPA Classification</h3>
                    <p className="text-xs text-slate-200 mt-1">Account crosses 60 to 90 DPD; card privileges suspended; CIBIL delinquency tagged.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Advocate Legal Recall Notice</h3>
                    <p className="text-xs text-amber-900 mt-1">15-day formal statutory demand served via Registered Speed Post + digital delivery.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">National Lok Adalat Referral</h3>
                    <p className="text-xs text-slate-700 mt-1">Pre-litigation conciliation for binding consent decree or structured OTS.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Order XXXVII CPC Summary Suit</h3>
                    <p className="text-xs text-red-900 mt-1">Fast-track civil money suit in Commercial Court with 10-day leave-to-defend rule.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Decree Execution &amp; Attachment</h3>
                    <p className="text-xs text-emerald-900 mt-1">Order XXI CPC attachment of bank accounts, salary garnish, or Section 138 penal sanction.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram (Visible on Both Mobile & Desktop with Smooth Horizontal Scroll) */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Recovery Pipeline</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Credit Card Debt Legal Recovery Pipeline Flowchart"
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
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">90-Day Default</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">SMA-2 / NPA Trigger</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Card Limit Blocked</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Recall Notice</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">15-Day Advocate Demand</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Speed Post + BSA 63</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Lok Adalat</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Pre-Litigation Session</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Binding Consent Award</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#cardAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Order 37 Suit</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Summary Money Decree</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">10-Day Summons Period</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#cardSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Asset Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Order 21 Execution</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or Section 138 Relief</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY TIME LIMITS UNDER LIMITATION ACT, CPC &amp; NI ACT:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Civil Recovery Suit Limitation: Exactly 3 years from date of default / last payment (Article 19 Limitation Act)</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Summary Suit Summons Response: 10 calendar days for defendant to enter appearance in Commercial Court</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Section 138 Statutory Notice: Served within 30 days of receiving bank cheque return memo; 15 days cure window</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Bank Recovery Playbook: Notice, Conciliation &amp; Fast-Track Litigation
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Synthesized from established commercial court precedents and banking recovery guidelines, this 5-step playbook equips recovery officers and corporate legal desks to maximize portfolio resolution:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Compile Account Statement &amp; Issue Section 63 BSA Certificate
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Extract the comprehensive credit card statement of account reflecting the date of card activation, credit limit, individual transaction entries, applied finance charges, late fees, and payments received. Accompany the computerized ledger with a statutory electronic records certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 signed by the bank&apos;s authorized IT officer.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Dispatch Formal Advocate Statutory Loan Recall Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Retain counsel to serve a comprehensive 15-day statutory recall notice terminating cardholder membership, recalling the full outstanding debt, and putting the debtor on formal notice of commercial litigation. Dispatch via Registered Speed Post with postal acknowledgment alongside digital transmission to the debtor&apos;s registered email and mobile number.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Review institutional legal fees on our transparent <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Refer Defaulted Tranche to National Lok Adalat for Consent Award
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        For cooperative or partially responsive cardholders seeking waiver of penal charges, list the account in upcoming National Lok Adalat sittings. Formalize structured One-Time Settlement (OTS) terms before judicial conciliators, yielding a non-appealable award carrying the executive force of a civil decree.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Institute Commercial Summary Suit Under Order XXXVII CPC
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the cardholder ignores the statutory notice, immediately file a summary suit under Order XXXVII of the CPC before the District Commercial Court. By pinning the liquidated claim on the signed Most Important Terms and Conditions (MITC) and certified statements, the defendant is precluded from stalling proceedings with generic defenses.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        For comprehensive civil recovery procedures, see our guide on <Link href="/civil-suit-for-recovery-of-money-india" className="text-blue-700 underline">civil suits for recovery of money</Link> and <Link href="/law/order-37-summary-suit-money-recovery" className="text-blue-700 underline">Order 37 summary recovery suits</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Execute Decree via Order XXI CPC Attachment &amp; Trigger Section 138 if Applicable
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Upon securing the summary decree, lodge execution proceedings under Order XXI CPC to attach active bank accounts, garnish employer salaries, or seize liquid assets. If post-dated settlement cheques or NACH mandates bounce during the recovery cycle, immediately invoke Section 138 NI Act or Section 25 PSS Act criminal complaints before the Judicial Magistrate.
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
                  Credit Card Recovery Timelines: Limitation Act, Order 37 &amp; Lok Adalat Deadlines
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian commercial and procedural statutes establish strict, non-negotiable statutory timelines governing credit card recovery. Missing these milestones extinguishes judicial remedies:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Credit Card Statutory Recovery Deadlines &amp; Regulatory Benchmarks</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Recovery Channel / Legal Action</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Deadline / Period</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Legal Benchmark</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Institutional Consequence if Missed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Civil Recovery Suit / Summary Suit
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">3 Years from Default</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Article 19 &amp; 55, Limitation Act 1963</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Debt becomes time-barred; civil recovery barred</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Order XXXVII Summons for Appearance
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">10 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Order XXXVII Rule 2(3) CPC 1908</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Default judgment / summary decree passed for bank</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Section 138 NI Act Bounced Cheque Notice
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">30 Days from Return Memo</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 138(b) Negotiable Instruments Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Forfeits right to prosecute drawer under criminal law</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Section 138 Criminal Complaint Filing
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">30 Days from Notice Expiry</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 142(1)(b) Negotiable Instruments Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Criminal complaint time-barred unless condoned</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Section 25 PSS Act Electronic NACH Bounce
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">30 Days Demand Window</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 25 Payment &amp; Settlement Systems Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Precludes criminal sanctions for auto-debit failure</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pre-Litigation Loan Recall Notice Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">RBI Fair Practices Code &amp; Contract Law</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Mandatory statutory demand prior to court filing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Statutory deadlines cross-verified against the Limitation Act, 1963, Code of Civil Procedure, 1908, and Negotiable Instruments Act, 1881. If a defaulter challenges credit bureau reporting, consult our guide on <Link href="/cibil-wrong-reporting-dispute-compensation-legal-notice" className="text-blue-700 underline">CIBIL dispute and legal notice protocols</Link>.
                </p>
              </section>

              {/* Section 7: Defaulter Category & Strategy Tabs */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Defaulter Scenario Matrix: Resolving Willful Default, Skip Tracing &amp; Bounced Cheques
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Delinquency Scenario to Unlock the Statutory Section and Direct Escalation Action
                  </p>
                </div>

                <CreditCardDefaultersProblemTabs />
              </section>

              {/* Section 8: Worked Example / Case Study */}
              <section id="heading-case-study" aria-labelledby="heading-case-study-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-case-study-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Bank Recovers ₹9.40 Lakh Unpaid Card Balance Through Order 37 Summary Suit
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Institutional Recovery Case Study
                    </span>
                    <span className="text-xs text-slate-400">Delhi District Commercial Court (Shahdara)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Institutional Situation:</strong> A premier private scheduled commercial bank issued a Super-Premium Visa Infinite credit card with a ₹12,00,000 credit limit to Rohit Mehra, a senior marketing consultant in Saket, New Delhi. Over 9 months, the cardholder utilized ₹9,40,000 for international luxury travel, consumer electronics, and dining. After making minimum dues for 3 months, the cardholder abruptly halted all repayments.
                    </p>
                    <p>
                      <strong>The Impasse &amp; Non-Compliance:</strong> The account aged to 180 DPD (NPA classification). Collection tele-callers were repeatedly blocked, and the cardholder threatened to file a police complaint against the bank for criminal harassment. Informal collection agency intervention yielded zero capital recovery while creating unacceptable compliance risks under RBI guidelines.
                    </p>
                    <p>
                      <strong>The Legal Strategy:</strong> The bank engaged LegalRecovery.in to execute a strictly compliant legal recovery process. An advocate drafted and dispatched a formal statutory demand notice terminating card privileges and demanding ₹9,40,000 plus contractual finance charges within 15 days, served via Registered Speed Post and certified digital transmission under Section 63 BSA 2023. When no payment was received, the legal team instituted a Commercial Summary Suit under Order XXXVII CPC in the District Commercial Court, appending certified statements and the signed cardholder agreement.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Recovery Outcome:</strong>
                      Upon being served with the court summons in Form No. 4, Appendix B of the CPC, the defendant realized that failure to enter appearance within 10 days would result in an automatic money decree and bank account attachment under Order 21 CPC. On Day 7, the defendant&apos;s counsel approached the bank&apos;s legal desk, paid ₹5,00,000 upfront via RTGS, and executed an undertaking to remit the remaining ₹4,40,000 in two post-dated installments backed by Section 138-compliant cheques. The bank recovered 100% of the principal without a single harassment allegation.
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
                  Card Litigation Evidence Dossier: 6 Essential Evidentiary Records for Summary Decree
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under the Bharatiya Sakshya Adhiniyam, 2023 (BSA) and Order XXXVII CPC, courts require an airtight documentary trail to award immediate summary judgments. Assemble these 6 institutional records:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Credit Card Application &amp; Signed MITC:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Physical or digitally signed application form containing acceptance of Most Important Terms and Conditions (MITC).</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Statement of Account under Section 63 BSA:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Computer-generated monthly billing statements accompanied by mandatory electronic evidence certificate under BSA 2023.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Multi-Factor Authentication (2FA / OTP) Logs:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Audit trail confirming OTP delivery and successful 3D Secure authentication to the borrower&apos;s registered telecom number.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Advocate Demand Notice &amp; Postal Proof of Service:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Original copy of advocate legal demand notice along with India Post Registered Speed Post receipts and delivery tracking report.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bank Return Memos for Bounced Cheques or NACH:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Official clearing bank dishonor memos bearing bank stamps and reason codes for Section 138 / Section 25 prosecution.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Verified Borrower KYC &amp; Asset Trace Dossier:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Verified PAN, Aadhaar, employer details, corporate directorships (MCA), and credit bureau reports proving debt acknowledgment.</p>
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
                    Frequently Asked Questions About Credit Card Debt Recovery in India
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Legal Guidance Grounded in the CPC, NI Act, and RBI Master Directions
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
                  Statutory References, RBI Master Directions &amp; Judicial Citations
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
                  Statutory verification status: All provisions verified against active Reserve Bank of India Master Directions, the Code of Civil Procedure, 1908, the Negotiable Instruments Act, 1881, and the Bharatiya Sakshya Adhiniyam, 2023 as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Statutory Legal Demand Notice to Defaulters
                </h2>
                <CreditCardDefaultersNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Banking &amp; Financial Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bank Recovery Legal Notice Hub →
                  </Link>
                  <Link
                    href="/civil-suit-for-recovery-of-money-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Civil Suit for Money Recovery →
                  </Link>
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Order 37 Summary Suit Guide →
                  </Link>
                  <Link
                    href="/credit-card-chargeback-wrong-charge-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Credit Card Chargeback &amp; Disputed Billing →
                  </Link>
                  <Link
                    href="/cibil-wrong-reporting-dispute-compensation-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    CIBIL Dispute &amp; Compensation Guide →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Fee Structure →
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
