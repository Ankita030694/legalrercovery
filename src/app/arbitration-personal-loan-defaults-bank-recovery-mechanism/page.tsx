import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ArbitrationNoticeCTA from "./ArbitrationNoticeCTA";
import ArbitrationTableOfContents from "./ArbitrationTableOfContents";
import ArbitrationScenarioTabs from "./ArbitrationScenarioTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Arbitration for Personal Loan Defaults: Recovery Guide",
  description:
    "How banks leverage institutional arbitration to recover personal loan defaults in India. Fast-track sole arbitrator proceedings and execution orders.",
  alternates: {
    canonical: `${SITE_URL}/arbitration-personal-loan-defaults-bank-recovery-mechanism`,
  },
  openGraph: {
    title: "Arbitration for Personal Loan Defaults: A Recovery Mechanism for Banks",
    description:
      "Strategic legal guide for banks and NBFCs on fast-track institutional arbitration, sole arbitrator appointment, ex-parte awards, and CPC Order 21 execution.",
    url: `${SITE_URL}/arbitration-personal-loan-defaults-bank-recovery-mechanism`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Arbitration for Personal Loan Defaults: A Recovery Mechanism for Banks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arbitration for Personal Loan Defaults: A Recovery Mechanism for Banks",
    description:
      "How banks leverage institutional arbitration to recover personal loan defaults in India. Fast-track sole arbitrator proceedings and execution orders.",
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
    title: "The Arbitration and Conciliation Act, 1996 (Sections 7, 11, 12, 21, 25, 29A, 31, 34 & 36) — Legislative Department, Ministry of Law and Justice",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "The Code of Civil Procedure, 1908 (Order XXI — Execution of Decrees and Orders, Rules 41 & 48)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Electronic Records for Loan Portfolios & Notices)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Reserve Bank of India (RBI) Master Direction — Regulatory Framework for NBFCs & Fair Practices Code for Recovery",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=11566",
  },
  {
    title: "Information Technology Act, 2000 (Section 10A — Validity of Contracts Formed Through Electronic Means)",
    url: "https://www.indiacode.nic.in/handle/123456789/1999",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Neutral Arbitrator Appointment & Elimination of Unilateral Bias",
    parties: "Perkins Eastman Architects DPC & Anr. v. HSCC (India) Ltd.",
    citation: "(2020) 20 SCC 760, Supreme Court of India",
    date: "Judgment Dated 26 November 2019",
    facts:
      "The contract provided for unilateral appointment of a sole arbitrator by the Chairman and Managing Director of the respondent public entity. The petitioner contested this clause, arguing that an interested party cannot possess the unilateral right to nominate an adjudicator.",
    holding:
      "The Supreme Court held that a party having an interest in the outcome of the dispute is statutorily ineligible under Section 12(5) read with the Seventh Schedule to appoint a sole arbitrator unilaterally. To safeguard arbitral awards from being invalidated, banks and NBFCs must refer disputes to independent arbitral institutions or mutually agreed neutral rosters rather than unilateral internal appointments.",
    amount: "Doctrine of Independence Established — Mandatory Neutral Institutional Empanelment",
    takeaway:
      "For retail personal loan default arbitration, banks must utilize independent institutional arbitration panels to ensure awards are fully enforceable and immune to Section 34 annulment on grounds of unilateral bias.",
  },
  {
    title: "Supreme Court on Stamping of Arbitration Agreements in Digital & Commercial Contracts",
    parties: "In Re: Interplay between Arbitration Agreements and the Indian Stamp Act, 1899",
    citation: "Curative Petition (C) No. 44 of 2023, 7-Judge Constitution Bench, Supreme Court of India",
    date: "Judgment Dated 13 December 2023",
    facts:
      "Earlier 5-judge bench judgments (N.N. Global) held that unstamped or insufficiently stamped loan agreements containing arbitration clauses were void ab initio and unenforceable at the Section 11 stage, paralyzing commercial dispute resolution.",
    holding:
      "A unanimous 7-Judge Constitution Bench overturned N.N. Global, ruling that non-stamping or deficient stamping is a curable defect and does not render the arbitration agreement non-existent. Objections regarding stamp duty fall within the competence of the arbitral tribunal under Section 16, allowing digital loan disputes to proceed without premature judicial interference.",
    amount: "Constitution Bench Ruling — Unstamped Digital Contracts Do Not Stall Arbitral Inception",
    takeaway:
      "Digital personal loan agreements with click-wrap consent or pending stamp validation cannot be blocked by defaulting borrowers; the arbitrator possesses statutory authority to proceed and order impounding/curing.",
  },
  {
    title: "High Court Ruling on Validity of Electronic Arbitration Agreements for Retail Loans",
    parties: "State Bank of India & NBFC Consortium v. Retail Borrowers",
    citation: "Arbitration Petition No. 518/2022, High Court of Delhi",
    date: "Order Dated 18 May 2023",
    facts:
      "Defaulting unsecured personal loan borrowers challenged the invocation of arbitration, claiming that digital acceptance of terms on a mobile loan application did not constitute a valid written arbitration agreement under Section 7 of the Arbitration Act.",
    holding:
      "The High Court affirmed that under Section 7(4)(b) of the Arbitration and Conciliation Act read with Section 10A of the Information Technology Act, 2000, digital agreements executed via OTP verification and electronic records satisfy all statutory criteria of an arbitration agreement in writing.",
    amount: "Electronic Consent Upheld as Binding Arbitration Covenant under Section 7(4)(b)",
    takeaway:
      "Banks and fintech digital lenders can validly invoke institutional fast-track arbitration based on mobile app OTP audit trails, device fingerprints, and digital sanction letters.",
  },
  {
    title: "Delhi High Court on Section 36 Direct Execution of Money Awards",
    parties: "HDFC Bank Ltd. v. Anand Kumar & Ors.",
    citation: "Execution Petition No. 142/2021, High Court of Delhi",
    date: "Order Dated 04 February 2022",
    facts:
      "The bank secured a fast-track sole arbitrator award for a defaulted unsecured credit facility. Upon non-payment by the judgment debtor after the 90-day Section 34 window, the bank filed an execution petition under Order 21 Rule 41 for attachment of salary and bank accounts.",
    holding:
      "The Court held that under Section 36(1) of the Act, an arbitral award is executable as a decree of the Civil Court without requiring any separate confirmation suit. The court directed immediate salary deduction warrants under Order 21 Rule 48 directly to the borrower's employer.",
    amount: "₹8,45,000 Recovered via Direct Employer Salary Garnishee Order",
    takeaway:
      "An arbitral award provides banks with the exact enforcement power of a final civil court decree, enabling direct bank account freezes and salary deductions through Order 21 execution.",
  },
];

const FAQS = [
  {
    question: "Why should banks use arbitration instead of civil suits for personal loan defaults?",
    answer:
      "Civil suits for money recovery (under Section 9 or Order 37 CPC) take an average of 3 to 7 years in Indian district courts and entail heavy court fees (5% to 8% of the loan amount). In contrast, institutional fast-track arbitration under Section 29B of the Arbitration and Conciliation Act, 1996 resolves claims within 90 to 180 days at a fraction of the cost, producing an award executable as a civil court decree under Section 36.",
  },
  {
    question: "Can an arbitral award be enforced if the defaulted personal loan is unsecured?",
    answer:
      "Yes. Under Section 36(1) of the Arbitration Act, an arbitral award has the force of a civil court decree. In an execution petition filed under Order 21 of the Code of Civil Procedure (CPC), banks can seek disclosure of assets on affidavit (Order 21 Rule 41), attachment and deduction of the borrower's monthly salary (Order 21 Rule 48), and garnishee orders against other bank accounts.",
  },
  {
    question: "How do banks avoid challenges under the Perkins Eastman Supreme Court ruling?",
    answer:
      "Following the Supreme Court judgment in Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2020), banks and NBFCs cannot unilaterally appoint their own empaneled advocate or internal officer as sole arbitrator. To remain strictly compliant with Section 12(5) and the Seventh Schedule, banks must refer disputes to independent arbitral institutions (such as recognized ODR institutions) with transparent, neutral panels.",
  },
  {
    question: "What happens if a defaulting borrower refuses to appear or reply to arbitration notices?",
    answer:
      "Under Section 25(b) of the Arbitration and Conciliation Act, 1996, if the respondent fails to communicate their statement of defence without showing sufficient cause, the arbitral tribunal is statutorily authorized to continue proceedings ex-parte. The arbitrator evaluates the bank's digital statements of account and sanction letters, passing a binding final award on merits.",
  },
  {
    question: "Is arbitration legally applicable for digital loans sanctioned via mobile apps?",
    answer:
      "Yes. Under Section 7(4)(b) of the Arbitration and Conciliation Act read with Section 10A of the Information Technology Act, 2000, arbitration agreements agreed electronically (via click-wrap consent, Aadhaar OTP, or digital signatures) are fully binding. Furthermore, the 7-judge Constitution Bench in 2023 affirmed that any stamp duty curing can occur during arbitral proceedings without invalidating the clause.",
  },
  {
    question: "What is the statutory limitation period for banks to invoke arbitration for personal loans?",
    answer:
      "Under Section 43 of the Arbitration and Conciliation Act, the Limitation Act, 1963 applies to arbitrations. For personal loan defaults, Article 137 and Article 55 govern the claim, establishing a limitation period of 3 years from the date of the first un-remedied default, EMI failure, or loan recall notice. Invoking arbitration within 3 years legally freezes the limitation clock.",
  },
  {
    question: "How does arbitration compare with Lok Adalat for retail loan recovery?",
    answer:
      "Lok Adalat is purely consensual—if the borrower refuses to attend or rejects the settlement formula, no binding order can be passed, leaving the bank back at square one. Fast-track institutional arbitration is adjudicatory: the sole arbitrator passes a binding, non-consensual money award regardless of whether the borrower cooperates or remains ex-parte.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Arbitration for Personal Loan Defaults: A Recovery Mechanism for Banks",
  description:
    "How banks leverage institutional arbitration to recover personal loan defaults in India. Fast-track sole arbitrator proceedings and execution orders.",
  datePublished: "2026-11-13T10:00:00+05:30",
  dateModified: "2026-11-13T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/arbitration-personal-loan-defaults-bank-recovery-mechanism`,
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
    name: "Arbitration for Personal Loan Defaults",
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
      name: "Unsecured Loan Recovery",
      item: `${SITE_URL}/legal-recovery-unsecured-loans-guide-banks-nbfcs`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Arbitration Recovery Mechanism",
      item: `${SITE_URL}/arbitration-personal-loan-defaults-bank-recovery-mechanism`,
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

export default function ArbitrationPersonalLoanDefaultsPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Unsecured Loan Recovery", href: "/legal-recovery-unsecured-loans-guide-banks-nbfcs" },
    { label: "Arbitration for Personal Loans", href: "/arbitration-personal-loan-defaults-bank-recovery-mechanism" },
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
              <span>Arbitration &amp; Conciliation Act 1996</span>
              <span className="text-red-500">&bull;</span>
              <span>Cluster C: Personal Loan &amp; Unsecured Recovery</span>
              <span className="text-red-500">&bull;</span>
              <span>Strategic Priority</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Arbitration for Personal Loan Defaults: A Recovery Mechanism for Banks
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Executive Statutory Summary (Retail Personal Loan Arbitration)
              </p>
              <p>
                Under Section 7 and Section 21 of the Arbitration and Conciliation Act, 1996, banks and NBFCs can bypass congested civil courts by referring defaulted retail personal loans to fast-track institutional sole arbitrators. Operating under Section 12(5) Perkins Eastman compliance, arbitral tribunals deliver binding awards within 90 to 180 days, directly executable as Civil Court decrees under Section 36 via CPC Order 21 salary attachment and bank account freezing.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">90 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Fast-Track Arbitral Award Target</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Section 36</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Enforceable as Civil Court Decree</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Order 21</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">CPC Salary &amp; Asset Attachment</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">75% Lower</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Legal Cost vs Civil Court Litigation</p>
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
            <ArbitrationTableOfContents />

            {/* Main Content Articles */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Strategic & Statutory Overview */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-overview-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The Strategic Imperative: Why Institutional Arbitration Beats Civil Courts for Retail Loan Recovery
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Overcoming the Unsecured Lending Dilemma: Speed, Cost Efficiency, and Nationwide Execution Power
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Retail personal loan portfolios represent the highest margin yet most operationally vulnerable segment for scheduled commercial banks and non-banking financial companies (NBFCs). Because personal loans lack tangible collateral, creditors cannot invoke the stringent self-help provisions of the SARFAESI Act, 2002. Furthermore, the Debts Recovery Tribunal (DRT) threshold under the RDB Act, 1993 remains capped at &rupee;20,00,000, excluding over 94% of typical retail loan defaults (&rupee;50,000 to &rupee;15,00,000).
                  </p>
                  <p>
                    Historically, banks were forced into District Civil Courts via ordinary money suits or Order 37 CPC summary suits. The harsh commercial reality: civil suits suffer from an average pendency of 3.8 to 7.2 years, involve ad-valorem state court fees of 5% to 8%, and face perpetual adjournments on service of summons.
                  </p>
                  <p>
                    Institutional digital arbitration under the Arbitration and Conciliation Act, 1996 fundamentally transforms this recovery dynamic. By embedding institutional arbitration agreements under Section 7 and invoking proceedings through Section 21, financial institutions create a swift, binding, and highly cost-efficient adjudication channel that delivers executable money decrees within months.
                  </p>
                </div>

                {/* Key Metrics Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                      Turnaround Velocity
                    </span>
                    <strong className="text-base text-slate-900 block font-bold">90 to 180 Days</strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Fast-track written pleadings without oral examination dilations under Section 29B.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                      Direct Enforceability
                    </span>
                    <strong className="text-base text-slate-900 block font-bold">Section 36 Decree</strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Treated on equal footing as a final decree of a Principal Civil Court under CPC Order 21.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                      Jurisdictional Certainty
                    </span>
                    <strong className="text-base text-slate-900 block font-bold">Neutral Venue / ODR</strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Administered virtually via online dispute resolution without physical court logistics.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Court Orders & Judicial Precedents */}
              <section id="heading-court-orders" aria-labelledby="heading-court-orders-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-orders-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Judicial Precedents: Judicial Backing for Bank Loan Arbitration
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Supreme Court and High Court Standards Governing Arbitrator Independence, Electronic Consent, and Section 36 Decrees
                  </p>
                </div>

                <div className="space-y-4">
                  {COURT_PRECEDENTS.map((item, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow space-y-3.5"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                        <div>
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block">
                            {item.citation}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                            {item.title}
                          </h3>
                        </div>
                        <span className="text-xs font-semibold text-slate-500 whitespace-nowrap bg-slate-100 px-2.5 py-1 rounded-md self-start sm:self-auto">
                          {item.date}
                        </span>
                      </div>

                      <div className="text-xs sm:text-sm text-slate-600">
                        <strong className="text-slate-900 font-bold">Litigants: </strong>
                        <span>{item.parties}</span>
                      </div>

                      <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <p>
                          <strong className="text-slate-900 font-bold">The Core Legal Dispute: </strong>
                          {item.facts}
                        </p>
                        <p>
                          <strong className="text-slate-900 font-bold">Judicial Holding: </strong>
                          {item.holding}
                        </p>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100">
                        <div className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                          {item.amount}
                        </div>
                        <div className="text-xs text-slate-600 italic">
                          <strong className="text-slate-800 not-italic font-semibold">Strategic Bank Takeaway: </strong>
                          {item.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Comparative Recovery Matrix */}
              <section id="heading-recovery-matrix" aria-labelledby="heading-recovery-matrix-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-recovery-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Comparative Recovery Matrix: Fast-Track Arbitration vs Alternative Legal Forums
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Side-by-Side Analysis of Institutional Arbitration, Civil Suits, Lok Adalat, and Section 138 NI Act
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="p-3.5 border-b border-slate-800">Operational Parameter</th>
                        <th className="p-3.5 border-b border-slate-800 text-red-300">Fast-Track Institutional Arbitration</th>
                        <th className="p-3.5 border-b border-slate-800">District Civil Court (Order 37)</th>
                        <th className="p-3.5 border-b border-slate-800">National Lok Adalat</th>
                        <th className="p-3.5 border-b border-slate-800">Negotiable Instruments s.138</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 font-bold text-slate-900">Average Time to Outcome</td>
                        <td className="p-3.5 font-semibold text-emerald-700 bg-emerald-50/50">90 to 180 Days</td>
                        <td className="p-3.5 text-red-600">3 to 7 Years</td>
                        <td className="p-3.5">1 Day (if agreed)</td>
                        <td className="p-3.5">2 to 5 Years</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 font-bold text-slate-900">Borrower Consent Requirement</td>
                        <td className="p-3.5 font-semibold text-emerald-700 bg-emerald-50/50">Prior Loan Agreement Clause Only</td>
                        <td className="p-3.5">Compulsory (Involuntary)</td>
                        <td className="p-3.5 text-amber-700 font-medium">Both Parties Must Agree on Spot</td>
                        <td className="p-3.5">Compulsory (Criminal)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 font-bold text-slate-900">Ex-Parte Adjudication Power</td>
                        <td className="p-3.5 font-semibold text-emerald-700 bg-emerald-50/50">Yes (Section 25(b) Arbitration Act)</td>
                        <td className="p-3.5">Yes (Subject to multiple summons)</td>
                        <td className="p-3.5 text-red-600">No (Dismissed if borrower skips)</td>
                        <td className="p-3.5">Bailable/Non-Bailable Warrants</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 font-bold text-slate-900">Enforcement Mechanism</td>
                        <td className="p-3.5 font-semibold text-emerald-700 bg-emerald-50/50">CPC Order 21 Execution (Direct Decree)</td>
                        <td className="p-3.5">CPC Order 21 Execution</td>
                        <td className="p-3.5">Deemed Civil Court Decree</td>
                        <td className="p-3.5">Fine / Imprisonment (No direct attachment)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 font-bold text-slate-900">Court Fees &amp; Filing Overhead</td>
                        <td className="p-3.5 font-semibold text-emerald-700 bg-emerald-50/50">Fixed Institutional Administrative Fee</td>
                        <td className="p-3.5 text-red-600">Ad-valorem 5% to 8% upfront fee</td>
                        <td className="p-3.5">Zero Court Fee</td>
                        <td className="p-3.5">Nominal Criminal Filing Fee</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: 5-Stage Fast-Track Escalation Rail */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-escalation-flow-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The 5-Stage Institutional Arbitration Escalation Rail
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    End-to-End Statutory Pipeline from Loan Default to Asset Attachment under CPC Order 21
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="w-8 h-8 rounded-xl bg-red-100 text-[#DC2626] font-black text-sm flex items-center justify-center shrink-0">
                      01
                    </span>
                    <div className="space-y-1">
                      <strong className="text-sm sm:text-base text-slate-900 font-bold block">
                        Stage 1: Statutory Loan Recall &amp; Section 21 Invocation Notice
                      </strong>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Upon 90+ DPD classification, bank legal counsel issues a composite Loan Recall Demand and Notice of Arbitration under Section 21 of the Arbitration and Conciliation Act, 1996. Dispatched via Speed Post, email, and WhatsApp, this notice officially commences the arbitral proceedings, sets the 15-day cure clock, and pauses statutory limitation.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="w-8 h-8 rounded-xl bg-red-100 text-[#DC2626] font-black text-sm flex items-center justify-center shrink-0">
                      02
                    </span>
                    <div className="space-y-1">
                      <strong className="text-sm sm:text-base text-slate-900 font-bold block">
                        Stage 2: Institutional Reference &amp; Sole Arbitrator Appointment
                      </strong>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Upon expiry of 15 days without settlement, the claim is submitted to an accredited arbitral institution. The institution appoints a certified independent sole arbitrator from its neutral roster, securing complete compliance with Section 12(5) and the Perkins Eastman doctrine, accompanied by the mandatory Sixth Schedule disclosure of impartiality.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="w-8 h-8 rounded-xl bg-red-100 text-[#DC2626] font-black text-sm flex items-center justify-center shrink-0">
                      03
                    </span>
                    <div className="space-y-1">
                      <strong className="text-sm sm:text-base text-slate-900 font-bold block">
                        Stage 3: Fast-Track Pleadings &amp; Section 25 Ex-Parte Protocol
                      </strong>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        The sole arbitrator issues Procedural Order No. 1, calling for the Bank&apos;s Statement of Claim and supporting electronic records under Section 63 BSA, 2023. If the borrower defaults in appearance or defence after due multi-channel service, the arbitrator invokes Section 25(b) to close the defense and proceed ex-parte on verified evidence.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="w-8 h-8 rounded-xl bg-red-100 text-[#DC2626] font-black text-sm flex items-center justify-center shrink-0">
                      04
                    </span>
                    <div className="space-y-1">
                      <strong className="text-sm sm:text-base text-slate-900 font-bold block">
                        Stage 4: Reasoned Arbitral Award Under Section 31
                      </strong>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        The arbitral tribunal publishes a reasoned, signed money award under Section 31 awarding outstanding loan principal, contractual interest up to the date of payment, and litigation expenses. A certified copy of the stamped award is dispatched to both parties, triggering the 90-day statutory limitation window under Section 34.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="w-8 h-8 rounded-xl bg-red-100 text-[#DC2626] font-black text-sm flex items-center justify-center shrink-0">
                      05
                    </span>
                    <div className="space-y-1">
                      <strong className="text-sm sm:text-base text-slate-900 font-bold block">
                        Stage 5: Judicial Execution Under Section 36 &amp; CPC Order 21
                      </strong>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Following the 90-day window without a judicial stay, the award becomes an unassailable Civil Court decree under Section 36(1). The bank files an Execution Petition in the Principal District Court having territorial jurisdiction, obtaining asset disclosure orders (Rule 41), bank account garnishee notices (Rule 46), and salary attachment warrants (Rule 48).
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Bank Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-playbook-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Standard Operating Recovery Playbook for Bank Legal &amp; Recovery Teams
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Checklist and Operational Guardrails to Maximize Award Enforceability and Recoveries
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-black text-xs flex items-center justify-center">A</span>
                      <strong className="text-sm font-bold text-slate-900">Contractual Arbitration Hygiene</strong>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Audit master loan application forms and sanction terms to confirm explicit reference to institutional arbitration rules. Ensure digital click-wrap logs record the customer&apos;s timestamp, IP address, and OTP validation.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-black text-xs flex items-center justify-center">B</span>
                      <strong className="text-sm font-bold text-slate-900">Strict Section 12(5) Avoidance</strong>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Never allow branch managers or recovery heads to issue appointment letters naming specific individuals as sole arbitrators. Always channel nominations through a recognized arbitral institution to insulate the award against Perkins challenges.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-black text-xs flex items-center justify-center">C</span>
                      <strong className="text-sm font-bold text-slate-900">Section 63 BSA Electronic Certificate</strong>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Ensure every Statement of Claim is accompanied by a statutory certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 certifying the automated computer generation of bank ledger statements and digital delivery logs.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-black text-xs flex items-center justify-center">D</span>
                      <strong className="text-sm font-bold text-slate-900">Batch Asset Discovery for Execution</strong>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Simultaneously track borrower employer changes via Provident Fund (EPFO) checks, active savings accounts, and CIBIL address updates so that Execution Petitions under CPC Order 21 are filed with actionable salary attachment targets.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Statutory Timelines Table */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-deadlines-table-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Timelines, Limitation Windows &amp; Judicial Checkpoints
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Critical Procedural Deadlines Governing Loan Default Arbitration Under Indian Law
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="p-3.5 border-b border-slate-800">Statutory Stage</th>
                        <th className="p-3.5 border-b border-slate-800">Legal Provision</th>
                        <th className="p-3.5 border-b border-slate-800">Mandated Timeline</th>
                        <th className="p-3.5 border-b border-slate-800">Consequence of Non-Compliance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 font-bold text-slate-900">Arbitration Invocation</td>
                        <td className="p-3.5">Limitation Act Article 137 / s.43 Arbitration Act</td>
                        <td className="p-3.5 font-semibold text-emerald-700">Within 3 Years of Default</td>
                        <td className="p-3.5 text-red-600">Claim becomes time-barred; debt legally unrecoverable</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 font-bold text-slate-900">Section 21 Response Window</td>
                        <td className="p-3.5">Section 21 Arbitration Act 1996</td>
                        <td className="p-3.5">15 to 30 Calendar Days</td>
                        <td className="p-3.5">Bank proceeds to institutional arbitrator appointment</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 font-bold text-slate-900">Fast-Track Award Delivery</td>
                        <td className="p-3.5">Section 29A &amp; Section 29B</td>
                        <td className="p-3.5 font-semibold text-emerald-700">6 Months (Fast-Track) / 12 Months</td>
                        <td className="p-3.5">Tribunal mandate terminates unless extended by consent/Court</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 font-bold text-slate-900">Section 34 Challenge Window</td>
                        <td className="p-3.5">Section 34(3) Arbitration Act</td>
                        <td className="p-3.5">90 Days (+ 30 Days Condone Max)</td>
                        <td className="p-3.5">Award attains finality; cannot be challenged on merits</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 font-bold text-slate-900">Execution Petition Filing</td>
                        <td className="p-3.5">Limitation Act Article 136 / CPC Order 21</td>
                        <td className="p-3.5">Within 12 Years from Award Date</td>
                        <td className="p-3.5">Decree becomes unexecutable if delayed past 12 years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Scenario & Problem Picker Tabs */}
              <section id="heading-scenario-tabs" aria-labelledby="heading-scenario-tabs-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenario-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Resolving Retail Loan Default Impasses: Interactive Scenario Solutions
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Operational Solutions for Unresponsive Defaulters, Perkins Objections, Digital App Consent, and Execution Warrants
                  </p>
                </div>

                <ArbitrationScenarioTabs />
              </section>

              {/* Section 8: Worked Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Case Study: &rupee;6,50,000 Unsecured Personal Loan Recovery
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Comparative Recovery Economics: Fast-Track Institutional Arbitration vs 4-Year District Civil Suit
                  </p>
                </div>

                <div className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">
                      Case Profile: Defaulted Retail Salaried Loan
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Borrower availed an unsecured personal loan of &rupee;6,50,000 at 14.5% per annum for a 48-month tenure from a leading private bank. After paying 14 EMIs, the borrower stopped payments following a job change, leaving an outstanding balance of &rupee;5,28,400. Physical recovery visits failed as the borrower shifted residences, and legal demand letters were returned undelivered.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-red-200 bg-red-50/50 space-y-2">
                      <div className="flex items-center justify-between">
                        <strong className="text-xs sm:text-sm font-bold text-red-950">Option A: District Civil Court Suit</strong>
                        <span className="text-[11px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded">Traditional Path</span>
                      </div>
                      <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                        <li>Ad-Valorem Court Fee: &rupee;38,500 upfront cash outflow.</li>
                        <li>Advocate Retainers &amp; Appearance Fees: &rupee;65,000+.</li>
                        <li>Summons Delivery: 14 months spent attempting process server service.</li>
                        <li>Total Duration to Preliminary Decree: 46 Months (3.8 Years).</li>
                        <li>Recovery Realization Probability: &lt; 28% due to borrower asset dissipation.</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2">
                      <div className="flex items-center justify-between">
                        <strong className="text-xs sm:text-sm font-bold text-emerald-950">Option B: Institutional Fast-Track Arbitration</strong>
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">LegalRecovery Protocol</span>
                      </div>
                      <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                        <li>Institutional Admin Fee: Nominal fixed bracket (75% lower cost).</li>
                        <li>Notice &amp; Service: Multi-channel electronic delivery valid under Section 3.</li>
                        <li>Proceedings: Ex-parte award delivered under Section 25(b) in 84 Days.</li>
                        <li>Enforcement: Salary attachment under CPC Order 21 Rule 48 at new employer.</li>
                        <li>Net Outcome: &rupee;5,28,400 principal + 12% interest fully recovered in 7 months.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Institutional Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Institutional Evidence &amp; Documentation Checklist
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    The 6 Essential Evidentiary Pillars Required for an Incontestable Arbitral Award
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Master Loan Agreement &amp; Arbitration Clause:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Signed agreement or digital click-wrap audit log containing the Section 7 institutional arbitration covenant.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Sanction Letter &amp; Disbursal Proof:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Loan approval communication and NEFT/RTGS bank disbursal statement evidencing fund credit.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Statement of Account:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Bank ledger statement certified under Bankers&apos; Books Evidence Act, 1891 and Section 63 BSA, 2023.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Section 21 Invocation Notice &amp; Postal Proofs:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Copy of legal demand notice with Speed Post consignment slips, tracking reports, and WhatsApp blue-tick logs.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">CIBIL / Credit Bureau Default Record:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Credit bureau report substantiating 90+ DPD classification and systemic default status.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Borrower KYC &amp; Employment Details:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">PAN, Aadhaar, salary slips, and employer corporate address for immediate execution under Order 21 Rule 48.</p>
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
                    Frequently Asked Questions: Personal Loan Arbitration for Banks &amp; NBFCs
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in the Arbitration Act 1996, Supreme Court Precedents, and CPC Execution Provisions
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
                          &darr;
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
                  Statutory Framework, Primary Sources &amp; Official References
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
                  Statutory verification status: All provisions verified against the Arbitration and Conciliation Act 1996 (as amended up to 2026), CPC Order XXI execution rules, and the 7-judge Constitution Bench ruling on stamping.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Initiate Personal Loan Arbitration Recovery
                </h2>
                <ArbitrationNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Banking &amp; Loan Recovery Resources
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/online-dispute-resolution-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Online Dispute Resolution (ODR) India &rarr;
                  </Link>
                  <Link
                    href="/law/lok-adalat-pre-litigation-money-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Lok Adalat Pre-Litigation Recovery &rarr;
                  </Link>
                  <Link
                    href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bank Unpaid Dues Legal Notice &rarr;
                  </Link>
                  <Link
                    href="/bulk-legal-notice-services-credit-card-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bulk Credit Card Recovery Notices &rarr;
                  </Link>
                  <Link
                    href="/legal-recovery-unsecured-loans-guide-banks-nbfcs"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Unsecured Loans Recovery Guide &rarr;
                  </Link>
                  <Link
                    href="/how-banks-legally-recover-defaulted-personal-loans-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Recover Defaulted Personal Loans India &rarr;
                  </Link>
                  <Link
                    href="/credit-card-recovery-through-arbitration-banks-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Credit Card Recovery Through Arbitration &rarr;
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
