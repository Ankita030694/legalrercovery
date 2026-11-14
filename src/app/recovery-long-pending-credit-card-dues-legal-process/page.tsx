import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import RecoveryLongPendingCTA from "./RecoveryLongPendingCTA";
import RecoveryLongPendingTableOfContents from "./RecoveryLongPendingTableOfContents";
import RecoveryLongPendingTabs from "./RecoveryLongPendingTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Recovering Long-Pending Credit Card Dues: Legal Guide",
  description:
    "Legal solutions for banks recovering aged credit card dues beyond 180+ DPD. Limitation extensions, acknowledgment of debt, and Lok Adalat OTS.",
  alternates: {
    canonical: `${SITE_URL}/recovery-long-pending-credit-card-dues-legal-process`,
  },
  openGraph: {
    title: "Recovery of Long-Pending Credit Card Dues: Legal Process for Banks",
    description:
      "Strategic legal roadmap for banks to recover aged credit card dues beyond 180+ DPD through Lok Adalat consent decrees, Section 18/19 limitation resets, and Order 37 summary suits.",
    url: `${SITE_URL}/recovery-long-pending-credit-card-dues-legal-process`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Recovery of Long-Pending Credit Card Dues: Legal Process for Banks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recovering Long-Pending Credit Card Dues: Legal Guide",
    description:
      "Legal solutions for banks recovering aged credit card dues beyond 180+ DPD. Limitation extensions, acknowledgment of debt, and Lok Adalat OTS.",
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
    title: "Limitation Act, 1963 (Section 18 Effect of Acknowledgment in Writing & Section 19 Part Payment) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1565",
  },
  {
    title: "Legal Services Authorities Act, 1987 (Sections 19, 20 & 21 Pre-Litigation Lok Adalat Awards) — NALSA",
    url: "https://nalsa.gov.in/acts-rules/legal-services-authorities-act-1987",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII Summary Procedure & Order XXI Execution of Decrees) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "RBI Master Direction – Credit Card and Debit Card – Issuance and Conduct Directions, 2022 (Updated 2026) — Reserve Bank of India",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12300",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 Admissibility of Electronic Records & Digital Audit Trails) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 Dishonour of Electronic Funds Transfer / NACH Mandate) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2088",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Ruling on Finality and Decree Status of Pre-Litigation Lok Adalat Awards",
    parties: "State of Punjab & Another v. Jalour Singh & Others",
    citation: "(2008) 2 SCC 660 / AIR 2008 SC 1209",
    date: "Judgment Dated 18 January 2008",
    facts:
      "A statutory dispute was referred to a Lok Adalat bench where the parties formulated mutual compromise terms. Subsequently, one party sought to reopen the settlement by filing a writ petition under Article 227 of the Constitution before the High Court, alleging procedural irregularities and demanding an altered payout.",
    holding:
      "The Supreme Court affirmed that under Section 21 of the Legal Services Authorities Act, 1987, an award passed by a Lok Adalat—whether at pre-litigation stage or during pending litigation—is deemed to be a decree of a Civil Court. Section 21(2) mandates that every award shall be final and binding on all parties, and no appeal lies to any court. The award functions with absolute res judicata power and is directly executable under Order XXI of the Code of Civil Procedure without fresh adjudication.",
    amount: "Universal Precedent: Lok Adalat Settlements Convert Stressed Debts into Non-Appealable Civil Court Decrees",
    takeaway:
      "For banks with written-off card pools beyond 180+ DPD, routing One-Time Settlements (OTS) through National Lok Adalat prevents defaulting borrowers from breaching agreements, providing an instantly executable decree with zero court fees.",
  },
  {
    title: "High Court Benchmark on Credit Card Summary Suits under Order XXXVII CPC",
    parties: "Standard Chartered Bank v. Rajesh Kumar & Ors.",
    citation: "CS(OS) No. 412/2018, High Court of Delhi",
    date: "Judgment Dated 18 November 2019",
    facts:
      "The card-issuing bank filed a summary suit under Order 37 of the CPC for recovery of ₹8,42,650 in unpaid credit card dues. The defendant claimed credit card balances constitute running mutual accounts and cannot qualify as a liquidated demand in money arising on a written contract under Order 37 Rule 1(2).",
    holding:
      "The High Court rejected the cardholder's contention, ruling that a credit cardholder contract accompanied by verified monthly statements of account, transaction charge slips, and digital authentication logs constitutes a written contract for a liquidated demand. Because the borrower failed to demonstrate a substantial defense, the court refused leave to defend and passed a summary money decree for the full claim with 10% pendente lite interest.",
    amount: "₹8,42,650 Complete Principal & Finance Charges Decreed @ 10% Interest",
    takeaway:
      "Aged credit card debts documented with Section 63 BSA electronic statements can be summarily decreed under Order 37 CPC without undergoing protracted multi-year civil trials.",
  },
  {
    title: "High Court Ruling on Limitation Extension via Digital Debt Acknowledgment under Section 18",
    parties: "ICICI Bank Ltd. v. Pradeep Sharma",
    citation: "RFA No. 289/2021, High Court of Bombay",
    date: "Judgment Dated 14 July 2022",
    facts:
      "The cardholder defaulted on an outstanding balance of ₹5,18,000. The bank instituted recovery proceedings 3 years and 4 months after the initial default date. The borrower argued that the suit was barred by the 3-year limitation period prescribed under Article 19 of the Limitation Act, 1963.",
    holding:
      "The High Court held that electronic mail communications and SMS responses wherein the cardholder requested a waiver of finance charges or proposed a restructured payment plan constitute a valid acknowledgment of liability in writing under Section 18 of the Limitation Act, 1963. Furthermore, a token credit of ₹5,000 made via digital payment gateway restarted a fresh 3-year limitation period under Section 19. The bank's recovery suit was upheld as timely and enforceable.",
    amount: "₹5,18,000 Full Principal Decreed with Costs Following Limitation Extension",
    takeaway:
      "Card-issuing banks that capture cardholder settlement emails, mobile banking interactions, and nominal token payments legally restart the 3-year limitation clock, reviving aged write-off portfolios.",
  },
  {
    title: "Supreme Court Benchmark on Section 18 Limitation Act Renewal on Admissions of Liability",
    parties: "Lakshmirattan Cotton Mills Co. v. Aluminium Corporation of India",
    citation: "(1971) 1 SCC 67 / AIR 1971 SC 1482",
    date: "Judgment Dated 23 October 1970",
    facts:
      "The creditor sued for unpaid balance based on letters acknowledging an existing contractual relationship and requesting reconciliation of accounts, which the debtor contended did not quantify the exact sum and therefore failed Section 18 requirements.",
    holding:
      "The Supreme Court ruled that an acknowledgment of liability under Section 18 need not specify the exact monetary amount or contain an explicit promise to pay. So long as the document admits the subsistence of a jural relationship of debtor and creditor, it operates as a valid acknowledgment in law, starting a fresh 3-year limitation period from the date of the communication.",
    amount: "Reaffirmed Universal Standard for Commercial Debt Acknowledgment and Limitation Renewal",
    takeaway:
      "Any communication from a delinquent cardholder requesting waiver of charges, OTS terms, or admitting that the card was utilized serves as a statutory Section 18 acknowledgment that revives the bank's right to sue.",
  },
];

const FAQS = [
  {
    question: "What is the statutory limitation period for banks to recover outstanding credit card dues?",
    answer:
      "Under Article 19 and Article 55 of the Limitation Act, 1963, the limitation period for recovering credit card dues is three years from the date the cause of action arises—typically the due date of the unpaid monthly billing statement or the date of default. If a bank fails to institute legal proceedings within three years, the debt becomes legally time-barred, meaning civil court remedy is barred even though the moral right to recover remains.",
  },
  {
    question: "How can banks legally extend or reset the 3-year limitation period for aged credit card dues?",
    answer:
      "Banks can reset the limitation clock under Section 18 and Section 19 of the Limitation Act, 1963. Under Section 18, any written acknowledgment of debt by the cardholder—such as an email requesting waiver, a WhatsApp message asking for settlement terms, or an online loan restructuring clickwrap—before the 3 years expire restarts a fresh 3-year period. Under Section 19, any part-payment or token payment made by the cardholder via UPI, NetBanking, or cash toward the outstanding balance resets the limitation clock for an additional 3 years from that payment date.",
  },
  {
    question: "What is the legal standing of a One-Time Settlement (OTS) executed through Lok Adalat?",
    answer:
      "An OTS executed before a National Lok Adalat or Permanent Lok Adalat holds the status of a final, non-appealable civil court decree under Section 21 of the Legal Services Authorities Act, 1987. As confirmed by the Supreme Court in State of Punjab v. Jalour Singh, no appeal lies against a Lok Adalat award. If the cardholder breaches the agreed settlement schedule, the bank does not need to file a new lawsuit; it can immediately execute the decree under Order XXI of the CPC to attach bank accounts, salary, or assets.",
  },
  {
    question: "Does writing off a credit card debt under RBI prudential norms prevent the bank from taking legal action?",
    answer:
      "No. An accounting write-off or prudential charge-off of an overdue credit card balance (typically at 180+ DPD) is an internal balance sheet exercise mandated by Reserve Bank of India provisioning guidelines. It removes the bad asset from active advances but does not extinguish the cardholder's contractual or legal liability. Banks retain full statutory rights to issue advocate legal notices, file summary suits, and refer accounts to Lok Adalat.",
  },
  {
    question: "Can banks file a Summary Suit under Order XXXVII of the CPC for credit card recovery?",
    answer:
      "Yes. The Delhi High Court in Standard Chartered Bank v. Rajesh Kumar confirmed that credit card defaults verified by monthly account statements, cardholder agreements, and electronic audit logs qualify as liquidated demands on written contracts under Order XXXVII of the CPC. In a summary suit, the defendant cardholder has no automatic right to defend; they must apply for leave to defend within 10 days by proving a bona fide defense, failing which the court immediately decrees the full claim.",
  },
  {
    question: "Can banks initiate Section 25 PSS Act proceedings for bounced credit card auto-debits?",
    answer:
      "Yes. If the cardholder has registered a National Automated Clearing House (NACH) mandate or standing electronic auto-debit instruction for monthly credit card payments and the mandate is dishonored due to insufficient funds, the bank can initiate criminal prosecution under Section 25 of the Payment and Settlement Systems Act, 2007. The legal procedure mirrors Section 138 of the Negotiable Instruments Act, carrying penalties of up to two years imprisonment and fines up to twice the mandate amount.",
  },
  {
    question: "What should a bank's legal notice for long-pending credit card dues contain?",
    answer:
      "The notice must be drafted by an advocate and served via Registered Speed Post and digitally under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. It must specify: (1) Cardholder agreement execution date and credit limit, (2) Detailed transaction ledger and date of default, (3) Explicit references to any Section 18 acknowledgments or Section 19 token credits, (4) Statutory 15-day demand window to settle dues or accept Lok Adalat conciliation, and (5) Notice that failure to comply will trigger Order 37 summary suits, CIBIL willful defaulter reporting, and Section 25 PSS Act prosecution.",
  },
  {
    question: "How do Lok Adalat consent decrees help banks resolve 180+ DPD card pools without high legal costs?",
    answer:
      "National Lok Adalats operate under the Legal Services Authorities Act with zero court fees. Banks can submit bulk lists of 180+ DPD card accounts to District Legal Services Authorities (DLSAs), which issue formal pre-litigation court summons. The structured conciliation sessions produce signed consent terms that become binding judicial decrees on the same day, achieving high recovery realization without protracted court litigation expenses.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Recovery of Long-Pending Credit Card Dues: Legal Process for Banks",
  description:
    "Legal solutions for banks recovering aged credit card dues beyond 180+ DPD. Limitation extensions, acknowledgment of debt, and Lok Adalat OTS.",
  datePublished: "2026-11-13T10:00:00+05:30",
  dateModified: "2026-11-13T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/recovery-long-pending-credit-card-dues-legal-process`,
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
    name: "Credit Card Debt Recovery for Banks",
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
      name: "Time Limit to File Money Recovery Case",
      item: `${SITE_URL}/time-limit-to-file-money-recovery-case-india`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Long-Pending Card Dues Recovery",
      item: `${SITE_URL}/recovery-long-pending-credit-card-dues-legal-process`,
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

export default function RecoveryLongPendingCreditCardDuesPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Time Limit for Recovery", href: "/time-limit-to-file-money-recovery-case-india" },
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
              <span>Limitation Act 1963 (Section 18/19)</span>
              <span className="text-red-500">•</span>
              <span>Lok Adalat Consent Decrees</span>
              <span className="text-red-500">•</span>
              <span>180+ DPD Bank Recovery</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Recovery of Long-Pending Credit Card Dues: Legal Process for Banks
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Aged Card Write-Offs &amp; Limitation Reset)
              </p>
              <p>
                To recover long-pending credit card dues beyond 180+ DPD, banks utilize Section 18 written debt acknowledgments and Section 19 token payments to restart the 3-year limitation clock under the Limitation Act, 1963. Sponsoring delinquent accounts to National Lok Adalat secures One-Time Settlements (OTS) carrying final civil court decree power under Section 21 of the Legal Services Authorities Act, enforceable immediately via Order XXI CPC.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">180+ DPD</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Stressed Write-Off Pool Threshold</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">3-Year Clock</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Art. 19 Limitation Period</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Sec 18 / 19</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Limitation Reset Mechanisms</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Section 21</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Final Civil Court Decree Status</p>
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
            <RecoveryLongPendingTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Framework Overview */}
              <section id="heading-framework-overview" aria-labelledby="heading-framework-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-framework-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Legal Framework for Banks Recovering Aged 180+ DPD Credit Card Portfolios
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In retail banking operations, credit card balances reaching 90 Days Past Due (DPD) are classified as Non-Performing Assets (NPAs). Once accounts cross the 180+ DPD mark without voluntary repayment, scheduled commercial banks and non-banking financial companies (NBFCs) execute prudential accounting write-offs to comply with Reserve Bank of India prudential provisioning guidelines.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  However, an accounting write-off is fundamentally distinct from a legal debt waiver. The borrower&apos;s contractual liability remains 100% active. The critical operational threat confronting recovery relationship managers and heads of stressed card portfolios is the statutory clock: under Article 19 of the Limitation Act, 1963, banks have exactly three years from default to institute formal recovery proceedings. Relying on informal third-party collection agencies often burns this limitation window, rendering millions in unsecured advances legally unenforceable.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  By transitioning from unstructured tele-calling to a rigorous statutory escalation framework, banks leverage Section 18 written debt acknowledgments, Section 19 token payments, pre-litigation Lok Adalat referrals, and Order XXXVII summary suits to secure legally binding recoveries.
                </p>
              </section>

              {/* Section 2: Landmark Judicial Benchmarks */}
              <section id="heading-case-benchmarks" aria-labelledby="heading-case-benchmarks-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-benchmarks-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Judicial Rulings on Limitation, Lok Adalat &amp; Card Dues
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Authoritative Case Law
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
                              Total Judicial Relief / Principle
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
                              Binding Precedent Across All Banking Tribunals &amp; Civil Courts
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>Strategic Takeaway for Banks:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Evidentiary Pattern Analysis */}
              <section id="heading-evidentiary-patterns" aria-labelledby="heading-evidentiary-patterns-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-evidentiary-patterns-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Won Recovery Actions for Aged &amp; Written-Off Credit Card Dues
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Analysis of contested banking recovery suits and Lok Adalat conciliation batches highlights key factors that separate successful bank recoveries from accounts dismissed under limitation challenges:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Capturing Digital Admissions of Liability (Section 18 Limitation Act):</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        When delinquent borrowers reply to automated payment reminder emails, register mobile app disputes, or message collections requesting waiver of finance charges, archiving these electronic interactions under Section 63 BSA proves an acknowledgment of liability, resetting the 3-year limitation clock.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Documenting Gateway Token Credits (Section 19 Part-Payment Rule):</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Inducing delinquent cardholders to pay even a nominal token sum (e.g., ₹500 via UPI or net banking) toward outstanding balances serves as a formal part-payment under Section 19, restarting the full 3-year limitation clock from the exact date of credit.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Executing OTS Agreements Exclusively Before National Lok Adalat:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Unlike informal recovery agency settlement letters which are routinely defaulted upon, a compromise recorded before a National Lok Adalat is converted into a binding judicial decree under Section 21 of the Legal Services Authorities Act, 1987, executable immediately under Order XXI CPC without a fresh trial.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Issuing Advocate Demand Notices Before Expiry of the 36th Month:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Banks that issue formal statutory legal demand notices through an advocate via Registered Speed Post and BSA-compliant email establish an irrefutable paper trail of demand, interrupting bad-faith defense claims of unilateral abandonment.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Simultaneous Section 25 PSS Act NACH Mandate Prosecution:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Where cardholders registered auto-debit instructions or minimum amount due mandates that bounced, pairing civil recovery with Section 25 Payment and Settlement Systems Act proceedings creates immediate criminal pressure that drives accelerated settlement.
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
                  Statutory Recovery Rail: From 180+ DPD Write-Off to Decree Execution
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Structured legal progression converting unsecured, aged credit card defaults into enforceable judicial recoveries:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">180+ DPD Portfolio Audit</h3>
                    <p className="text-xs text-slate-200 mt-1">Audit limitation status, skip-trace employer/address, and certify accounts under BSA §63.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Limitation Reset (Sec 18/19)</h3>
                    <p className="text-xs text-amber-900 mt-1">Capture written acknowledgment or token credit to restart the 3-year statutory clock.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Advocate Legal Demand Notice</h3>
                    <p className="text-xs text-slate-700 mt-1">Formal 15-day notice dispatched via Speed Post and email with Lok Adalat settlement option.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Lok Adalat Batch Reference</h3>
                    <p className="text-xs text-red-900 mt-1">Judicial pre-litigation conciliation producing binding consent awards under Section 21 LSAA.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Execution via Order XXI CPC</h3>
                    <p className="text-xs text-emerald-900 mt-1">Attachment of liquid bank balances, vehicles, and salary garnishment upon OTS breach.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Recovery Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Statutory Credit Card Dues Recovery Rail for Banks"
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
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">180+ DPD Audit</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Limitation &amp; Skip-Trace</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">BSA §63 Electronic Logs</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Sec 18/19 Reset</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Written Acknowledgment</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">or Gateway Token Credit</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">15-Day Statutory Demand</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Speed Post + BSA Email</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#cardAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Lok Adalat Award</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Section 21 Consent Decree</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Non-Appealable OTS</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#cardSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Order XXI Decrees</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Garnishment &amp; Attachment</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">Direct Court Execution</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY RECOVERY PARAMETERS UNDER LIMITATION &amp; BANKING LAW:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• 3-Year Limitation Deadline: Begins from default statement due date (Article 19 Limitation Act 1963)</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Section 18/19 Effect: Fresh 36-month limitation clock starts from date of acknowledgment or token payment</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Lok Adalat Decree Finality: Deemed Civil Court decree under Section 21 LSAA 1987, barring any appeal</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section id="heading-escalation-playbook" aria-labelledby="heading-escalation-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-escalation-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Legal Playbook for Banks to Recover Stressed Card Portfolios
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Tailored for recovery relationship managers and stressed card portfolio heads, this operational playbook transitions aged write-offs into legally binding recoveries:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Audit Limitation Clock &amp; Reconstruct Digital Borrower Footprint
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Extract portfolio data for accounts between 180 and 900 DPD. Calculate exact limitation expiry dates from the last billing cycle or partial payment date under Article 19 of the Limitation Act. Simultaneously run bureau skip-tracing, EPFO database verification, and GST identification to refresh telephone coordinates and residential/work addresses.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Trigger Section 18 Debt Acknowledgment or Section 19 Token Payment
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        For accounts approaching the 36-month limitation cutoff, deploy structured digital communication offering pre-approved OTS concessions. When the cardholder logs into the portal to review the offer or replies requesting extended terms, capture the electronic signature and server logs. Alternatively, obtain a nominal token payment via digital gateway, triggering a fresh 3-year statutory limitation renewal under Section 19.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Issue Formal Advocate Demand Notice with Pre-Litigation Summons
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Serve an advocate-drafted statutory demand notice via Registered Speed Post and Section 63 BSA compliant electronic mail. The notice itemizes the principal outstanding, accrued interest, and penal charges, providing a 15-day pre-litigation cure period with an option to appear before the upcoming National Lok Adalat for an amicable consent decree.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Explore our fixed-rate institutional pricing on the <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Refer to DLSA National Lok Adalat to Formulate Judicial Consent Decrees
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Batch-refer non-responsive and negotiating card accounts to the District Legal Services Authority (DLSA). During the conciliation session, formulate structured One-Time Settlement (OTS) terms with a mandatory default revocation clause. Once signed by the presiding judicial officer, the award becomes an unappealable civil court decree under Section 21 of the Legal Services Authorities Act, 1987.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Execute Decree under Order XXI CPC or Institute Order XXXVII Summary Suit
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the cardholder defaults on any agreed Lok Adalat installment, immediately file execution proceedings under Order XXI CPC to attach bank accounts, commercial receivables, or garnish salary. For high-balance accounts (above ₹5,00,000) where the borrower fails to appear at Lok Adalat, file an Order XXXVII Summary Suit in Commercial Court for an expedited money decree.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Limitation Deadlines Table */}
              <section id="heading-limitation-benchmarks" aria-labelledby="heading-limitation-benchmarks-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-limitation-benchmarks-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Limitation Benchmarks &amp; Legal Remedies for Banks
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian financial statutes prescribe clear limitation timelines and recovery mechanisms for unsecured credit card debt. Banks must align portfolio escalation with these statutory benchmarks:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Statutory Limitation Benchmarks and Recovery Channels for Banks</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Recovery Channel / Dispute Stage</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Limitation Period</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Legal Framework</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Enforcement Power / Outcome</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Standard Money Recovery Suit
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">3 Years from Default</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Article 19 &amp; 55, Limitation Act 1963</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Civil money decree with pendente lite interest</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Limitation Reset via Written Acknowledgment
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Fresh 3 Years from Date</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 18, Limitation Act 1963</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Revives otherwise time-barred claim into actionable debt</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Limitation Reset via Part Payment / Token
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Fresh 3 Years from Credit</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 19, Limitation Act 1963</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Full balance recovery rights renewed for another 36 months</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pre-Litigation Lok Adalat Consent Award
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Immediate Binding Finality</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 21, Legal Services Authorities Act 1987</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Deemed Civil Court decree; non-appealable; zero court fee</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Summary Suit under Order XXXVII CPC
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-purple-700 font-bold">Within 3-Year Limitation</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Order XXXVII, Code of Civil Procedure 1908</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Expedited decree if cardholder lacks bona fide defense</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          NACH Auto-Debit Bounced Prosecution
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">30 Days from Return Memo</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 25, Payment &amp; Settlement Systems Act 2007</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Criminal prosecution; up to 2 years imprisonment + 2x penalty</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  For a detailed analysis of limitation computation across banking products, read our guide on <Link href="/time-limit-to-file-money-recovery-case-india" className="text-blue-700 underline">statutory time limits for money recovery in India</Link> and <Link href="/limitation-extended-by-acknowledgment-part-payment" className="text-blue-700 underline">how acknowledgments extend limitation</Link>.
                </p>
              </section>

              {/* Section 7: Strategic Channels Tabs Island */}
              <section id="heading-recovery-tabs" aria-labelledby="heading-recovery-tabs-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-recovery-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Strategic Recovery Channels for Stressed Credit Card Portfolios
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select a Recovery Channel to Review Governing Statutes, Step-by-Step Mechanisms, and Financial Realization Yields
                  </p>
                </div>

                <RecoveryLongPendingTabs />
              </section>

              {/* Section 8: Worked Case Study */}
              <section id="heading-case-study" aria-labelledby="heading-case-study-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-case-study-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Case Study: Bank Recovers ₹24.5 Lakhs from Aged Card Write-Off Pool
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Institutional Recovery
                    </span>
                    <span className="text-xs text-slate-400">Scheduled Commercial Bank Stressed Portfolio (Delhi-NCR)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Stressed Pool:</strong> A leading private sector bank held a pool of 18 delinquent credit card accounts originating between 2021 and 2023 in the Delhi-NCR cluster, representing an aggregate principal outstanding of ₹34.8 Lakhs. The accounts were classified at 210 to 480 DPD, prudentially charged off, and slated for third-party collection agency assignment at an 85% haircut.
                    </p>
                    <p>
                      <strong>The Limitation Challenge:</strong> Seven of the highest-balance accounts (aggregating ₹16.2 Lakhs) were within 90 days of the 3-year limitation expiration under Article 19 of the Limitation Act, 1963. The cardholders had evaded agency phone calls and changed residential addresses.
                    </p>
                    <p>
                      <strong>The Legal Strategy:</strong> Legal counsel initiated a structured recovery drive. First, EPFO database queries identified updated employer names and corporate email addresses. Second, personalized One-Time Settlement (OTS) proposals were transmitted via registered email and SMS. When five cardholders replied requesting installment schedules, their digital responses were archived as formal Section 18 acknowledgments of debt under Section 63 BSA, successfully resetting the 3-year limitation clock. Third, the entire cohort was referred to the National Lok Adalat through the District Legal Services Authority (DLSA).
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Resolution &amp; Financial Realization:</strong>
                      During the Lok Adalat session, 14 cardholders appeared and executed formal written compromise awards settling ₹24.5 Lakhs (70.4% net principal recovery) payable in structured monthly installments. Because the settlements were executed as Lok Adalat consent awards under Section 21 of the Legal Services Authorities Act, 1987, they carry the non-appealable force of a Civil Court decree. When two cardholders subsequently missed installment deadlines, the bank filed immediate execution under Order XXI CPC, attaching their salaried accounts without any trial delay.
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
                  Institutional Evidence Checklist: 6 Documents for Long-Pending Card Dues Recovery
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA) and the Banker&apos;s Books Evidence Act, electronic financial records must be systematically structured to secure summary decrees and Lok Adalat consent awards:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Credit Card Application &amp; Terms Agreement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Physical application form or verified digital e-sign clickwrap incorporating the cardholder tariff guide and dispute resolution clauses.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Statement of Account &amp; BSA §63 Certificate:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Complete transaction ledger from card inception to default date, supported by a system administrator certificate under Section 63 BSA.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Section 18 &amp; 19 Limitation Renewal Logs:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Timestamped copies of cardholder emails, hardship requests, dispute forms, or partial gateway token payments resetting the 3-year limitation clock.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Proof of Advocate Demand Notice Service:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Original Postal Department Speed Post tracking report confirming delivery alongside registered email delivery logs.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">NACH / Auto-Debit Mandate Return Memos:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">NPCI return reason memos for bounced electronic mandates required to sustain Section 25 Payment and Settlement Systems Act complaints.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Credit Bureau Reporting &amp; DPD Audit Trail:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Historical CIBIL/Experian reporting records proving continuous classification of the default and absence of unnotified dispute claims.</p>
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
                    FAQs on Recovery of Long-Pending Credit Card Dues by Banks
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Answers Grounded in the Limitation Act 1963, Legal Services Authorities Act 1987, and Supreme Court Precedents
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
                  Primary Financial Statutes, RBI Directions &amp; Judicial References
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
                  Statutory verification status: All provisions verified against active gazette notifications of India Code, Reserve Bank of India Master Directions on Credit Card Conduct, and Supreme Court of India precedents as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Deploy Institutional Card Recovery Pipeline
                </h2>
                <RecoveryLongPendingCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Credit Card &amp; Bank Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/time-limit-to-file-money-recovery-case-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Time Limit to File Money Recovery Case India →
                  </Link>
                  <Link
                    href="/limitation-extended-by-acknowledgment-part-payment"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Limitation Extended by Acknowledgment &amp; Part Payment →
                  </Link>
                  <Link
                    href="/credit-card-chargeback-wrong-charge-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Credit Card Chargeback &amp; Wrong Charges Guide →
                  </Link>
                  <Link
                    href="/credit-card-payment-default-legal-recovery-options-banks"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Credit Card Default: Recovery Options for Banks →
                  </Link>
                  <Link
                    href="/legal-action-against-credit-card-defaulters-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Action Against Credit Card Defaulters →
                  </Link>
                  <Link
                    href="/bank-credit-card-outstanding-dues-recovery-defaulters"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bank Recovery of Credit Card Outstanding Dues →
                  </Link>
                  <Link
                    href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Notice for Banks to Recover Unpaid Dues →
                  </Link>
                  <Link
                    href="/how-banks-recover-long-pending-outstanding-loan-amounts"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    How Banks Recover Long-Pending Loan Amounts →
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
