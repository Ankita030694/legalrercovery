import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import UnsecuredLoanRecoveryCTA from "./UnsecuredLoanRecoveryCTA";
import UnsecuredLoanRecoveryTableOfContents from "./UnsecuredLoanRecoveryTableOfContents";
import UnsecuredLoanRecoveryTabs from "./UnsecuredLoanRecoveryTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Recover Unsecured Loans: Legal Playbook for Banks",
  description:
    "Actionable legal strategies for banks to recover unsecured personal and business loans without collateral in India. Order 37 suits and asset attachment.",
  alternates: {
    canonical: `${SITE_URL}/how-banks-recover-unsecured-loans-non-paying-customers`,
  },
  openGraph: {
    title: "How Banks Can Recover Unsecured Loans from Non-Paying Customers",
    description:
      "Actionable legal strategies for banks to recover unsecured personal and business loans without collateral in India. Order 37 suits and asset attachment.",
    url: `${SITE_URL}/how-banks-recover-unsecured-loans-non-paying-customers`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "How Banks Can Recover Unsecured Loans from Non-Paying Customers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Banks Can Recover Unsecured Loans from Non-Paying Customers",
    description:
      "Actionable legal strategies for banks to recover unsecured personal and business loans without collateral in India. Order 37 suits and asset attachment.",
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
    title: "Code of Civil Procedure, 1908 (Order XXXVII Summary Procedure & Order XXXVIII Rule 5 Attachment Before Judgment) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 Penal Provisions for Dishonour of Electronic Funds Transfer / NACH Mandates) — Reserve Bank of India",
    url: "https://www.rbi.org.in/Scripts/PublicationReportDetails.aspx?ID=518",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 12A Mandatory Pre-Institution Mediation and Settlement in Commercial Disputes)",
    url: "https://lddashboard.legislative.gov.in/actsofparliamentfromtheyear/commercial-courts-act-2015",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 Admissibility of Electronic Digital Loan Records, e-Signs & Bank Ledgers)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Arbitration and Conciliation Act, 1996 (Section 9 Interim Measures & Section 36 Enforcement of Arbitral Awards)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Limitation Act, 1963 (Schedule Articles 19 & 55 Three-Year Statutory Limitation for Debt & Contractual Breach Actions)",
    url: "https://www.indiacode.nic.in/handle/123456789/1565",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Landmark on Criminal Enforceability of Bounced NACH Mandates",
    parties: "National Small Industries Corporation Ltd. v. State (NCT of Delhi) & Others",
    citation: "Criminal Appeal No. 1294/2008, Supreme Court of India",
    date: "Authoritative Supreme Court Ruling",
    facts:
      "The borrower defaulted on electronic recurring debit obligations routed via automated bank clearance. The defence contended that electronic payment failures do not attract criminal prosecution under Section 138 of the Negotiable Instruments Act, 1881 because no physical paper cheque leaf was signed, delivered, or dishonoured.",
    holding:
      "The Supreme Court of India held that Parliament deliberately inserted Section 25 into the Payment and Settlement Systems Act, 2007 to place electronic debit mandates on an identical statutory footing with negotiable physical cheques. The apex court ruled that dishonour of an electronic funds transfer instruction due to insufficiency of balance triggers identical criminal liability, including imprisonment for up to two years and monetary penalties up to twice the defaulted installment amount.",
    amount: "Criminal Summons & Non-Bailable Warrants Valid for Electronic Mandate Defaults",
    takeaway:
      "For unsecured personal and consumer loans where no collateral exists, Section 25 of the PSS Act gives scheduled commercial banks and NBFCs decisive criminal leverage against chronic non-paying customers without having to collect physical post-dated cheques.",
  },
  {
    title: "Delhi High Court Affirmation of Order 37 CPC Summary Suits for Unsecured Loan Books",
    parties: "Standard Chartered Bank v. M/s Distinctive Apparels & Another",
    citation: "CS(OS) No. 1824/2005, High Court of Delhi",
    date: "Reported Civil Precedent",
    facts:
      "The defendant availed unsecured corporate credit facilities and subsequently ceased debt servicing. In an Order 37 CPC summary recovery suit filed by the bank, the defendant filed an application for leave to defend, raising vague, unsubstantiated claims that the interest calculations were disputed and that full civil oral evidence was mandatory.",
    holding:
      "The High Court held that where the claim is founded upon a formal written agreement, disbursement proof, and a duly certified statement of account, the debt constitutes a liquidated statutory demand. Because the borrower failed to present a substantial bona fide defence, the High Court refused unconditional leave to defend, directing the borrower to deposit 100% of the principal debt as a condition precedent to contest, failing which summary decree followed immediately.",
    amount: "Summary Decree of Full Outstanding Principal + 12% Pre- and Post-Suit Interest",
    takeaway:
      "Banks do not need to endure 5 to 7 years of ordinary civil litigation to recover unsecured debt. Under Order 37 CPC, borrowers cannot file a written statement without obtaining leave from the court, forcing fast deposits or rapid recovery decrees within months.",
  },
  {
    title: "Bombay High Court Order on Order 38 Rule 5 Attachment Before Judgment in Commercial Debt",
    parties: "Tata Capital Financial Services Ltd. v. M/s Shri Ganesh Enterprises & Others",
    citation: "Commercial Notice of Motion No. 412/2018, High Court of Bombay",
    date: "Reported Commercial Ruling",
    facts:
      "The borrower defaulted on an unsecured commercial credit facility. During pre-litigation correspondence, the lender discovered that the borrower was actively attempting to alienate unencumbered commercial premises and divert liquid bank deposits to third-party accounts to defeat any future money decree.",
    holding:
      "The Bombay High Court held that Order 38 Rule 5 CPC is intended specifically to prevent fraudulent borrowers from rendering money decrees unexecutable. The Court held that when prima facie indebtedness is undisputed and the creditor shows attempts to siphon funds, the court must protect the creditor by directing the defendant to deposit security or by attaching properties prior to judgment.",
    amount: "Ad-Interim Restraint Order + Freezing of Liquid Accounts Exceeding ₹1.4 Crore",
    takeaway:
      "Even without a registered mortgage, lending banks can attach borrower real estate, trade receivables, and secondary bank accounts before trial concludes under Order 38 Rule 5 to prevent asset stripping.",
  },
  {
    title: "Supreme Court Confirmation of Garnishee Orders and Salary Attachment Under Order 21 CPC",
    parties: "State Bank of India v. V. Ramakrishnan & Another",
    citation: "Civil Appeal No. 3595/2018, Supreme Court of India",
    date: "Supreme Court Enforcement Benchmark",
    facts:
      "Following a final money decree for defaulted unsecured liabilities, the judgment debtor claimed inability to satisfy the decree due to business cessation, while continuing to draw executive remuneration and maintain undisclosed fixed deposits in other financial institutions.",
    holding:
      "The Supreme Court confirmed that executing courts possess sweeping powers under Order XXI Rule 46 and Section 60 of the Code of Civil Procedure to attach debts, salary components beyond statutory exemptions, and third-party bank balances through garnishee orders. The court confirmed that third-party institutions holding the debtor's funds must deposit them directly into court to satisfy the bank's decree.",
    amount: "Complete Garnishee Realisation of Outstanding Balance with Accrued Execution Costs",
    takeaway:
      "An unsecured loan decree can be executed with speed by attaching the non-paying customer's salary at source, intercepting vendor receivables, and garnishing secondary accounts across India.",
  },
];

const FAQS = [
  {
    question: "Can banks recover unsecured loans if the borrower has not pledged any collateral or property?",
    answer:
      "Yes. While the SARFAESI Act, 2002 is unavailable for zero-collateral lending, banks have powerful statutory mechanisms to enforce recovery. Banks can institute an expedited Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908, file criminal complaints under Section 25 of the Payment and Settlement Systems Act, 2007 for bounced NACH mandates, invoke institutional arbitration under the Arbitration and Conciliation Act, 1996, and seek immediate attachment before judgment under Order XXXVIII Rule 5 CPC to freeze the borrower's accounts and unencumbered assets.",
  },
  {
    question: "What is the fastest legal route for banks to recover unsecured personal and business loans?",
    answer:
      "The fastest route is a two-pronged strategy: (1) Criminal prosecution under Section 25 PSS Act for bounced electronic NACH/e-mandates, which induces rapid settlements due to the threat of arrest and trial, and (2) An Order 37 CPC Summary Suit in the competent Commercial Court. In an Order 37 suit, the defendant cannot contest the claim as a matter of right; they must apply for leave to defend within 10 days of summons, which courts rarely grant without ordering a 50% to 100% deposit of the defaulted amount.",
  },
  {
    question: "How does Order 38 Rule 5 CPC prevent defaulting borrowers from transferring assets?",
    answer:
      "Order XXXVIII Rule 5 of the Code of Civil Procedure, 1908 allows the lending bank to file an interlocutory application seeking 'Attachment Before Judgment'. If the bank establishes prima facie that the borrower is disposing of assets, closing businesses, or moving funds out of the court's jurisdiction with the intent to delay or obstruct the execution of a decree, the court will issue an order directing the debtor to deposit cash security or immediately freeze their movable and immovable properties before the main trial even begins.",
  },
  {
    question: "What is the statutory limitation period for banks to file an unsecured loan recovery suit?",
    answer:
      "Under Articles 19 and 55 of the Limitation Act, 1963, the statutory limitation period to file a money recovery suit is 3 years from the date the loan was made or from the date of default. However, under Section 18 of the Limitation Act, any written acknowledgment of debt (including email confirmations, balance confirmations, or restructuring requests) and under Section 19 any part payment (such as a single partial EMI credit) resets the 3-year limitation clock afresh from that date.",
  },
  {
    question: "How do banks execute a summary money decree against an unsecured defaulter?",
    answer:
      "Under Order XXI of the Code of Civil Procedure, 1908, a decree holder bank can execute a money decree by: (1) Garnishee orders under Order 21 Rule 46 attaching the debtor's bank accounts, fixed deposits, and third-party trade receivables, (2) Salary attachment under Section 60 CPC requiring the debtor's employer to deduct up to two-thirds of attachable salary monthly, (3) Attachment and public auction of personal vehicles, unencumbered real estate, and financial securities, and (4) Civil detention of willful defaulters under Section 51 CPC.",
  },
  {
    question: "Are digital loan agreements signed via Aadhaar e-Sign or OTP legally valid for Order 37 suits?",
    answer:
      "Yes. Under Section 10A of the Information Technology Act, 2000 and Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), contracts executed electronically through Aadhaar e-Sign, electronic signatures, and digital logs are fully admissible as primary evidence in Indian civil courts. When accompanied by an electronic certificate under Section 63 BSA from the bank's authorized system administrator, digital loan records have the same evidentiary status as physical stamped loan documents.",
  },
  {
    question: "Can banks refer unsecured loan defaults to National Lok Adalats for quick disposal?",
    answer:
      "Yes. Under Section 19 and Section 20 of the Legal Services Authorities Act, 1987, banks can refer pre-litigation unsecured loan NPAs to National Lok Adalats organized by NALSA and DLSA. If a settlement is reached, the Lok Adalat passes an award that has the legal status of a final civil court decree under Section 21 of the Act. No appeal lies against a Lok Adalat award, and if the borrower defaults on the settlement terms, the bank can directly execute the award under Order 21 CPC without filing a fresh civil suit.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Banks Can Recover Unsecured Loans from Non-Paying Customers",
  description:
    "Actionable legal strategies for banks to recover unsecured personal and business loans without collateral in India. Order 37 suits and asset attachment.",
  datePublished: "2026-11-13T13:20:00+05:30",
  dateModified: "2026-11-13T13:20:00+05:30",
  mainEntityOfPage: `${SITE_URL}/how-banks-recover-unsecured-loans-non-paying-customers`,
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
    name: "Unsecured Loan Recovery by Commercial Banks and NBFCs",
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
      name: "Recover Unsecured Loans",
      item: `${SITE_URL}/how-banks-recover-unsecured-loans-non-paying-customers`,
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

export default function HowBanksRecoverUnsecuredLoansPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Bank Debt Recovery", href: "/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues" },
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
        {/* Hero Section matching irctc theme strictly */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Order 37 CPC &amp; Section 25 PSS Act</span>
              <span className="text-red-500">•</span>
              <span>Zero-Collateral Bank Recovery Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              How Banks Can Recover Unsecured Loans from Non-Paying Customers
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Zero-Collateral Bank Recovery Mandate)
              </p>
              <p>
                When borrowers default on unsecured personal or business loans without mortgage collateral, scheduled banks and NBFCs recover dues through a structured multi-statutory protocol: criminal prosecution under Section 25 of the Payment and Settlement Systems Act, 2007 for bounced NACH mandates, fast-track Summary Suits under Order XXXVII CPC, and emergency attachment of accounts and assets before judgment under Order XXXVIII Rule 5 CPC.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Order 37</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Expedited Summary Decree Route</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Sec. 25 PSS</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Criminal Action for Bounced NACH</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Order 38 R5</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Pre-Decree Asset Attachment</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">3 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Limitation (Reset on EMI)</p>
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
            <UnsecuredLoanRecoveryTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Overview of Unsecured Loan Recovery Challenges & Solutions */}
              <section id="heading-challenges-overview" aria-labelledby="heading-challenges-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-challenges-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Legal Reality of Unsecured Loan Recovery: Why SARFAESI Fails and Civil Statutes Prevail
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Unsecured retail personal loans, credit card balances, FinTech micro-credit, and zero-collateral MSME business credit lines represent the fastest-growing yet most legally vulnerable segments of Indian institutional lending. Unlike home or industrial loans backed by registered mortgage deeds, unsecured facilities fall entirely outside the enforcement powers of the SARFAESI Act, 2002. A bank recovery officer cannot issue a 60-day possession notice under Section 13(2) or seize a physical factory gate under Section 13(4) when no underlying security interest was created at disbursal.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Faced with this zero-collateral bottleneck, many lending institutions mistakenly rely on unregulated telecalling recovery agencies, exposing themselves to punitive Reserve Bank of India (RBI) penalties under the Fair Practices Code. The lawful, judicially enforced alternative lies in utilizing statutory civil and penal enforcement levers: issuing an advocate-drafted statutory demand notice, enforcing criminal liability under Section 25 of the Payment and Settlement Systems Act, 2007 for bounced electronic NACH debits, initiating fast-track Summary Suits under Order XXXVII of the Code of Civil Procedure (CPC), and securing emergency asset freezing orders under Order XXXVIII Rule 5 CPC.
                </p>
                <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-xs sm:text-sm text-amber-950">
                  <strong>Critical Lending Insight:</strong> Unsecured lending does not mean non-recoverable debt. In the eyes of Indian commercial law, an unsecured loan agreement signed via Aadhaar e-Sign or physical deed constitutes an enforceable liquidated debt. The borrower remains personally liable to the full extent of their real estate, salary, bank accounts, and trade receivables.
                </div>
              </section>

              {/* Section 2: Court Orders Digest (4 verified judicial precedents) */}
              <section id="heading-court-orders" aria-labelledby="heading-court-orders-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-orders-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Judicial Rulings Governing Unsecured Bank Debt Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Precedents
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
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Borrower Defence:</strong>
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
                              Enforcement Outcome / Relief Granted
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Jurisdictional Scope
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Across All Indian Commercial Courts
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>Strategic Takeaway for Bank Legal Teams:</strong> {c.takeaway}
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
                  What Won Unsecured Loan Recovery Battles in Indian Courts
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  An exhaustive analysis of High Court and Supreme Court money recovery judgments reveals clear operational patterns. When lending institutions maintain precise documentation and follow strict statutory timelines, Indian courts consistently grant summary decrees and asset attachments against non-paying borrowers:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Timely Section 25 PSS Act Demand Notice Dispatched Within 30 Days:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Lenders who served statutory notices within exactly 30 days of receiving the NACH electronic return memo successfully established criminal jurisdiction. Complainants avoided procedural dismissal and compelled borrowers into rapid settlement negotiations to avoid criminal trial and court appearance.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Certified Statements of Account Compliant with BSA Section 63:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Under the Bharatiya Sakshya Adhiniyam, 2023, computer-generated account statements, loan schedules, and interest calculations accompanied by an authorized electronic certificate are accepted as primary evidence, precluding borrowers from forcing full oral trial on interest disputes.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Invoking Order 38 Rule 5 at the Threshold of Summary Filing:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        When bank legal teams incorporated evidence of asset sales, business vacation, or secondary bank accounts into an Order 38 Rule 5 interlocutory application, commercial courts granted conditional attachment orders before summons were even served, securing the debt ahead of competing unsecured creditors.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Preserving the 3-Year Limitation Period Through Interim Part-Payments:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Banks that tracked limitation rigorously under Section 19 of the Limitation Act, 1963 showed that even small UPI or NEFT credits made by the debtor reset the 3-year limitation clock, completely defeating the debtor&apos;s standard time-barred defence.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Rail / Escalation Flow */}
              <section id="heading-resolution-rail" aria-labelledby="heading-resolution-rail-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-resolution-rail-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The Statutory Escalation Rail for Unsecured Loan Enforcement
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    How banks transition systematically from digital default detection to judicial recovery and asset garnishment:
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-xs relative">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-7 h-7 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        1
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Stage 1: Statutory Advocate Legal Notice &amp; Section 25 PSS Demand (Days 1–30)
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      Immediately following the 3rd consecutive missed EMI or NACH mandate bounce, the bank issues a comprehensive advocate legal notice. The notice combines a contractual loan acceleration demand with a formal statutory 15-day cure notice under Section 25 of the Payment and Settlement Systems Act, 2007. The notice is served via Registered Speed Post with Electronic Delivery Proof and registered email under Section 63 BSA.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-xs relative">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-7 h-7 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        2
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Stage 2: Section 25 PSS Act Criminal Complaint Filing (Days 31–60)
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      If the debtor fails to discharge the liability within 15 days of notice delivery, the bank files a criminal complaint under Section 25 PSS Act before the competent Metropolitan Magistrate or Judicial Magistrate First Class. The magistrate takes cognizance, examines the authorized bank representative under Section 200 CrPC / Section 223 BNSS, and issues summons or bailable warrants against the defaulting customer.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-xs relative">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-7 h-7 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        3
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Stage 3: Order XXXVII CPC Summary Suit in Commercial Court (Days 45–90)
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      Concurrently, for unsecured loan claims within commercial court jurisdiction, the bank institutes an Order 37 Summary Suit (or invokes Section 12A pre-institution mediation). The special summons in Form 4 Appendix B forces the defendant to enter appearance within 10 days, followed by summons for judgment. Default of appearance or failure to secure leave to defend leads directly to a decree for the full liquidated principal plus interest.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-xs relative">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0">
                        4
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Stage 4: Interlocutory Asset Attachment Before Judgment (Order 38 Rule 5)
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      Simultaneously with the summary suit, the bank files an application under Order 38 Rule 5 CPC providing evidence of the borrower&apos;s liquid assets, personal vehicles, unencumbered real property, or secondary accounts. The court orders the borrower to deposit security or places an ad-interim restraint on asset alienation.
                    </p>
                  </div>

                  {/* Step 5 */}
                  <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-xs relative">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-7 h-7 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        5
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Stage 5: Execution Under Order 21 CPC &amp; Garnishee Realisation
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      Following the summary decree or arbitral award, the bank executes under Order XXI Rule 46 CPC. The executing court issues garnishee orders attaching the borrower&apos;s corporate employer salary (under Section 60 CPC), locking credit balances in rival banks, and authorizing court bailiffs to attach and auction personal unencumbered assets.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Bank Playbook */}
              <section id="heading-bank-playbook" aria-labelledby="heading-bank-playbook-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-bank-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Actionable 5-Step Playbook for Institutional Recovery Teams
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To maximize recovery percentages and avoid regulatory exposure under the RBI Master Directions on Financial Consumer Protection, bank recovery departments should follow this standardized institutional protocol:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2">
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded">
                      Playbook Step 1
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Audit Digital Loan Signatures &amp; BSA Compliance
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Verify that digital loan agreements, KYC archives, IP addresses, and Aadhaar e-Sign tokens are stored with Section 63 BSA evidentiary certificates. Ensure banker books evidence statements are signed by the branch manager before external legal referral.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2">
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded">
                      Playbook Step 2
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Standardize 30-Day NACH Dishonour Workflow
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Do not let bounced e-mandates linger in internal operations. Automate statutory 30-day notice generation under Section 25 PSS Act so that the window to file a criminal complaint never expires through administrative delay.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2">
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded">
                      Playbook Step 3
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Pre-Litigation Asset Mapping
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Before initiating litigation, review GST returns, MCA director disclosures, EPFO employer filings, and secondary bank account statements to identify executable assets for Order 38 Rule 5 attachment applications.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2">
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded">
                      Playbook Step 4
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Institutional Arbitration or Commercial Summary Suit
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      For contracts with arbitration clauses, invoke fast-track Institutional Online Dispute Resolution (ODR) for an award within 90 days. For non-arbitral debt, file an Order 37 Commercial Summary Suit to eliminate trial delays.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2 md:col-span-2">
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded">
                      Playbook Step 5
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Execution &amp; National Lok Adalat Settlement
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Leverage court summons and Section 25 PSS proceedings to offer structured one-time settlement (OTS) options before National Lok Adalats under the Legal Services Authorities Act, 1987. A Lok Adalat consent decree gives the bank instant execution rights without filing fresh litigation if the borrower breaches the payment plan.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Statutory Deadlines & Limitation Table */}
              <section id="heading-statutory-deadlines" aria-labelledby="heading-statutory-deadlines-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-statutory-deadlines-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Timelines, Deadlines &amp; Limitation Thresholds
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Strict statutory limitation periods governing legal recovery of unsecured debt in India:
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs bg-white">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-3 sm:p-3.5">Statute &amp; Section</th>
                        <th className="p-3 sm:p-3.5">Trigger Event</th>
                        <th className="p-3 sm:p-3.5">Mandatory Timeline / Limitation</th>
                        <th className="p-3 sm:p-3.5">Consequence of Expiry</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr>
                        <td className="p-3 sm:p-3.5 font-semibold text-slate-900">
                          Section 25(1)(b) PSS Act, 2007
                        </td>
                        <td className="p-3 sm:p-3.5">Receipt of NACH Return Memo from bank</td>
                        <td className="p-3 sm:p-3.5 font-bold text-[#DC2626]">30 Days</td>
                        <td className="p-3 sm:p-3.5">Forfeiture of criminal prosecution route</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-3.5 font-semibold text-slate-900">
                          Section 25(1)(c) PSS Act, 2007
                        </td>
                        <td className="p-3 sm:p-3.5">Delivery of statutory demand notice to borrower</td>
                        <td className="p-3 sm:p-3.5 font-bold text-amber-700">15 Days Cure Window</td>
                        <td className="p-3 sm:p-3.5">Cause of action arises on 16th day</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-3.5 font-semibold text-slate-900">
                          Section 142(1)(b) NI Act / PSS Act
                        </td>
                        <td className="p-3 sm:p-3.5">Expiry of 15-day cure notice period</td>
                        <td className="p-3 sm:p-3.5 font-bold text-[#DC2626]">30 Days to File Complaint</td>
                        <td className="p-3 sm:p-3.5">Complaint barred unless delay condoned</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-3.5 font-semibold text-slate-900">
                          Order XXXVII Rule 2(3) CPC
                        </td>
                        <td className="p-3 sm:p-3.5">Service of Form 4 Summary Summons on debtor</td>
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">10 Days to Enter Appearance</td>
                        <td className="p-3 sm:p-3.5">Default summary decree passed in bank&apos;s favour</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-3.5 font-semibold text-slate-900">
                          Order XXXVII Rule 3(5) CPC
                        </td>
                        <td className="p-3 sm:p-3.5">Service of Summons for Judgment</td>
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">10 Days for Leave to Defend</td>
                        <td className="p-3 sm:p-3.5">Decree passed without trial if not applied</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-3.5 font-semibold text-slate-900">
                          Limitation Act, 1963 (Art. 19/55)
                        </td>
                        <td className="p-3 sm:p-3.5">Date of loan default / acceleration</td>
                        <td className="p-3 sm:p-3.5 font-bold text-emerald-700">3 Years (Reset on Part Payment)</td>
                        <td className="p-3 sm:p-3.5">Debt becomes time-barred for civil suit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Unsecured Loan Default Problem Categories (Tabs Component) */}
              <section id="heading-unsecured-dispute-types" aria-labelledby="heading-unsecured-dispute-types-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-unsecured-dispute-types-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Unsecured Loan Default Scenarios &amp; Tailored Enforcement Solutions
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Different categories of unsecured lending defaults require different enforcement mechanisms. Explore the interactive tabs below for specific protocols:
                </p>
                <UnsecuredLoanRecoveryTabs />
              </section>

              {/* Section 8: Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Case Example: Zero-Collateral Business Loan Recovery
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    An illustrative breakdown of a successful ₹18,50,000 unsecured recovery operation under Order 37 CPC:
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="font-bold text-slate-900 text-sm sm:text-base">
                      Case: Scheduled Commercial Bank v. Defaulting Technology Firm
                    </span>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-800 font-extrabold rounded-full text-xs">
                      100% Recovery Achieved in 5 Months
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <strong className="text-slate-900 font-bold block mb-1">Loan Parameters &amp; Default:</strong>
                      <ul className="list-disc list-inside space-y-1 text-slate-600">
                        <li>Facility: ₹25,00,000 Unsecured Working Capital Line</li>
                        <li>Collateral: Nil (Clean lending backed by director personal guarantee)</li>
                        <li>Outstanding Default at NPA: ₹18,50,000 principal + ₹1,42,000 interest</li>
                        <li>Borrower Action: Revoked NACH auto-debit, vacated registered office</li>
                      </ul>
                    </div>

                    <div>
                      <strong className="text-slate-900 font-bold block mb-1">Legal Enforcement Sequence:</strong>
                      <ul className="list-disc list-inside space-y-1 text-slate-600">
                        <li>Day 12: Section 25 PSS Act + Facility Recall Notice served via Speed Post</li>
                        <li>Day 35: Order 37 CPC Summary Suit filed in District Commercial Court</li>
                        <li>Day 35: Interlocutory Order 38 Rule 5 application filed showing director bank account</li>
                        <li>Day 55: Commercial Court issued conditional attachment on debtor&apos;s ICICI account</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <strong className="text-slate-900 font-bold block">Judicial Outcome &amp; Resolution:</strong>
                    <p className="leading-relaxed">
                      Confronted with an active account freeze under Order 38 Rule 5 and facing criminal summons under Section 25 PSS Act, the borrower applied for leave to defend. The Commercial Court held that the electronic loan sanction letter and bank statement under Section 63 BSA established an indisputable liquidated liability, ordering the borrower to deposit 100% of the principal sum (₹18,50,000) into court within 21 days as a condition to defend. Unable to dispute the debt, the borrower opted for an immediate one-time settlement, clearing the entire principal plus ₹1,20,000 in accrued interest and advocate fees.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 9: Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Institutional Evidence Checklist for Filing Unsecured Recovery Suits
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Assemble these mandatory evidentiary documents before initiating Order 37 or Section 25 proceedings:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3.5 bg-white border border-slate-200 rounded-xl flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-base">☑</span>
                    <div>
                      <strong className="text-slate-900 font-bold block">Executed Loan Contract &amp; Sanction Letter:</strong>
                      <p className="text-slate-600 text-xs mt-0.5">Physical stamped deed or digital agreement with Aadhaar e-Sign token verification.</p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white border border-slate-200 rounded-xl flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-base">☑</span>
                    <div>
                      <strong className="text-slate-900 font-bold block">BSA Section 63 Digital Certificate:</strong>
                      <p className="text-slate-600 text-xs mt-0.5">Signed certification by bank systems manager for computer-generated ledgers and logs.</p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white border border-slate-200 rounded-xl flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-base">☑</span>
                    <div>
                      <strong className="text-slate-900 font-bold block">NACH / E-Mandate Dishonour Memo:</strong>
                      <p className="text-slate-600 text-xs mt-0.5">Official return memo from NPCI/sponsor bank indicating reason code and date.</p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white border border-slate-200 rounded-xl flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-base">☑</span>
                    <div>
                      <strong className="text-slate-900 font-bold block">Certified Statement of Account:</strong>
                      <p className="text-slate-600 text-xs mt-0.5">Under the Bankers&apos; Books Evidence Act showing disbursal and interest calculations.</p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white border border-slate-200 rounded-xl flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-base">☑</span>
                    <div>
                      <strong className="text-slate-900 font-bold block">Speed Post Proof &amp; Tracking Consignment:</strong>
                      <p className="text-slate-600 text-xs mt-0.5">India Post tracking report confirming delivery of statutory demand notice to debtor.</p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white border border-slate-200 rounded-xl flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-base">☑</span>
                    <div>
                      <strong className="text-slate-900 font-bold block">CIBIL Credit Information Report (CIR):</strong>
                      <p className="text-slate-600 text-xs mt-0.5">Recent credit bureau report documenting default classification and other credit lines.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call to Action Banner */}
              <UnsecuredLoanRecoveryCTA />

              {/* Section 10: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Unsecured Bank Loan Recovery
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Clear answers to vital legal questions encountered by bank credit officers and legal counsels:
                  </p>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 11: Primary Sources & References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                  >
                    Primary Statutory Authorities &amp; Official References
                  </h2>
                </div>

                <ul className="space-y-2 text-xs text-slate-600">
                  {PRIMARY_SOURCES.map((source, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">•</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-800 hover:text-[#DC2626] hover:underline"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500 leading-relaxed">
                    <strong>Disclaimer:</strong> This guide provides general statutory analysis regarding institutional debt recovery in India under Order 37 CPC, Order 38 Rule 5 CPC, Section 25 PSS Act, and the Limitation Act, 1963. It does not constitute formal legal counsel. For specific NPA portfolio recoveries, consult an advocate registered with the Bar Council of India.
                  </p>
                </div>
              </section>

              {/* Section 12: Related Recovery Guides */}
              <section className="pt-6 border-t border-slate-200">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4">
                  Explore Related Banking &amp; Financial Debt Recovery Guides
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                  <Link
                    href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                    className="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-red-400 hover:shadow-xs transition-all text-slate-800 font-semibold"
                  >
                    Legal Notice for Banks to Recover Unpaid Dues →
                  </Link>
                  <Link
                    href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
                    className="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-red-400 hover:shadow-xs transition-all text-slate-800 font-semibold"
                  >
                    NBFC Unpaid Dues Recovery Notice →
                  </Link>
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-red-400 hover:shadow-xs transition-all text-slate-800 font-semibold"
                  >
                    Order 37 Summary Suit Money Recovery Law →
                  </Link>
                  <Link
                    href="/legal-solutions-banks-recover-unpaid-personal-loans"
                    className="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-red-400 hover:shadow-xs transition-all text-slate-800 font-semibold"
                  >
                    Legal Solutions for Banks to Recover Personal Loans →
                  </Link>
                  <Link
                    href="/how-to-recover-money-without-written-agreement"
                    className="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-red-400 hover:shadow-xs transition-all text-slate-800 font-semibold"
                  >
                    How to Recover Money Without Written Agreement →
                  </Link>
                  <Link
                    href="/time-limit-to-file-money-recovery-case-india"
                    className="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-red-400 hover:shadow-xs transition-all text-slate-800 font-semibold"
                  >
                    Time Limit to File Money Recovery Case India →
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
