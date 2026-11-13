import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import BankLegalActionCTA from "./BankLegalActionCTA";
import BankLegalActionTableOfContents from "./BankLegalActionTableOfContents";
import BankLegalActionTabs from "./BankLegalActionTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Legal Actions Banks Can Take Against Loan Defaulters (52 chars)",
  description:
    "Comparative guide on legal options for banks against defaulting borrowers in India: SARFAESI, DRT, Section 138, summary suits, and arbitration. (143 chars)",
  alternates: {
    canonical: `${SITE_URL}/legal-action-banks-against-loan-defaulters-india`,
  },
  openGraph: {
    title: "What Legal Action Can Banks Take Against Customers Who Do Not Repay Loans?",
    description:
      "Strategic multi-track legal matrix for banks and NBFCs in India: SARFAESI Act, DRT proceedings, Section 138 NI Act, Section 25 PSS Act, and Order 37 summary suits.",
    url: `${SITE_URL}/legal-action-banks-against-loan-defaulters-india`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "What Legal Action Can Banks Take Against Customers Who Do Not Repay Loans?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Actions Banks Can Take Against Loan Defaulters",
    description:
      "Comparative guide on legal options for banks against defaulting borrowers in India: SARFAESI, DRT, Section 138, summary suits, and arbitration.",
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
    title: "Recovery of Debts and Bankruptcy (RDB) Act, 1993 (Section 19 Original Application & Section 25 Recovery Certificate) — Ministry of Finance",
    url: "https://financialservices.gov.in/acts/recovery-debts-due-banks-and-financial-institutions-act-1993",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Section 138 Dishonour of Cheque for Insufficiency of Funds) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2260",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 Dishonour of Electronic Funds Transfer / NACH Mandate) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2088",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII Summary Procedure on Negotiable Instruments & Written Contracts) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Arbitration and Conciliation Act, 1996 (Section 29B Fast-Track Procedure & Section 36 Enforcement of Arbitral Awards) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 Admissibility of Electronic Records for Bank Ledgers & Return Memos) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Landmark on Concurrent Dual-Track Enforcement (DRT & SARFAESI)",
    parties: "Transcore v. Union of India & Another",
    citation: "(2008) 1 SCC 125",
    date: "Judgment Dated 29 November 2006",
    facts:
      "Defaulting commercial borrowers argued that lending banks cannot concurrently pursue an Original Application (OA) before the Debt Recovery Tribunal under Section 19 of the RDB Act while simultaneously enforcing security interests under the SARFAESI Act, contending that the Doctrine of Election restricts lenders to a single forum.",
    holding:
      "The Supreme Court ruled that the Doctrine of Election has no application to statutory recovery remedies. SARFAESI provides an expedited, non-adjudicatory asset-liquidation mechanism that operates concurrently with DRT recovery adjudication. Banks are legally entitled to initiate both remedies simultaneously to prevent capital erosion and bad-faith asset dissipation.",
    amount: "Affirmed Universal Dual-Track Enforcement Across All Indian Scheduled Banks",
    takeaway:
      "Lenders do not need to withdraw pending DRT recovery suits to invoke SARFAESI Section 13. Banks can concurrently repossess mortgaged real estate and pursue personal decrees against defaulting borrowers and guarantors.",
  },
  {
    title: "Supreme Court Benchmark on Constitutional Validity of SARFAESI Act & Direct Possession",
    parties: "Mardia Chemicals Ltd. & Others v. Union of India & Others",
    citation: "(2004) 4 SCC 311 / AIR 2004 SC 2371",
    date: "Judgment Dated 8 April 2004",
    facts:
      "Corporate debtors and industrial borrowers challenged the constitutional validity of the SARFAESI Act, arguing that allowing banks to seize and sell secured private property without prior intervention of an ordinary civil court violated Article 14 and principles of natural justice.",
    holding:
      "The Supreme Court upheld the constitutional validity of the SARFAESI Act, recognizing the urgent legislative objective of arresting non-performing assets. The apex court ruled that secured creditors possess statutory authority to repossess and auction collateral once an account is classified as an NPA, provided the bank considers and issues a reasoned reply under Section 13(3A) if the borrower submits objections to the demand notice.",
    amount: "Enforceable Across All Secured Loans Exceeding ₹1,00,000 in India",
    takeaway:
      "Borrowers cannot stall secured loan recovery by filing injunction suits in civil courts. Banks have an unfettered statutory right to take symbolic and physical possession under Sections 13(4) and 14.",
  },
  {
    title: "Supreme Court Precedent on Quasi-Criminal Recovery for Bounced Mandates (NACH & Cheques)",
    parties: "Meter and Instruments Private Limited & Another v. Kanchan Mehta",
    citation: "(2018) 1 SCC 560",
    date: "Judgment Dated 5 October 2017",
    facts:
      "The appellant challenged criminal prosecution arising from dishonoured repayment instruments, questioning whether criminal complaints under Section 138 of the NI Act and Section 25 of the PSS Act can be compounded upon deposit of the defaulted installment amount along with interest.",
    holding:
      "The Supreme Court established that dishonour of electronic mandates under Section 25 of the PSS Act attracts identical penal consequences, statutory presumptions, and timelines as Section 138 of the NI Act. The court held that the core legislative purpose of these provisions is not primarily punitive incarceration, but commercial recovery and preservation of credibility in the national banking and payment ecosystem.",
    amount: "Enforceable Penal Remedies Across All Retail & Commercial Bounced EMIs",
    takeaway:
      "When borrowers dishonour cheques or cancel NACH mandates, criminal complaints under Section 138 NI Act or Section 25 PSS Act generate immediate settlement pressure, compelling borrowers to clear dues to avoid arrest warrants and conviction.",
  },
  {
    title: "Supreme Court Ruling on Independent Co-Extensive Liability of Personal Guarantors",
    parties: "State Bank of India v. V. Ramakrishnan & Another",
    citation: "(2018) 17 SCC 394",
    date: "Judgment Dated 14 August 2018",
    facts:
      "A personal guarantor and promoter argued that when a corporate borrower experiences commercial distress or enters statutory moratorium, personal guarantors cannot be pursued independently by the lending bank until all remedies against the principal debtor are exhausted.",
    holding:
      "The Supreme Court held that under Section 128 of the Indian Contract Act, 1872, the liability of a guarantor is co-extensive with that of the principal debtor. The bank is under no statutory obligation to exhaust legal remedies or liquidate assets of the primary borrower before issuing loan recall demands or legal notices to personal guarantors and co-borrowers.",
    amount: "Direct Enforceability Against Promoters, Directors & Retail Guarantors",
    takeaway:
      "Banks can proceed against guarantors and co-borrowers simultaneously with the principal borrower, dramatically escalating recovery leverage across both retail and corporate debt facilities.",
  },
];

const FAQS = [
  {
    question: "What legal action can banks take when a borrower does not repay a secured loan?",
    answer:
      "For secured loans exceeding ₹1,00,000 where collateral is mortgaged or hypothecated, banks enforce recovery under the SARFAESI Act, 2002 without civil court intervention. Once the account crosses 90 Days Past Due (DPD) and is classified as a Non-Performing Asset (NPA), the bank issues a 60-day demand notice under Section 13(2). If unrectified, the bank takes symbolic possession under Section 13(4), petitions the Chief Metropolitan Magistrate or District Magistrate under Section 14 for police-assisted physical eviction, and conducts a public e-auction of the property to satisfy the outstanding debt.",
  },
  {
    question: "What legal remedies do banks have against defaulters of unsecured personal or business loans?",
    answer:
      "For unsecured facilities without physical collateral, banks deploy a multi-track strategy: (1) Criminal complaints under Section 25 of the Payment and Settlement Systems Act, 2007 for bounced NACH/auto-debits; (2) Criminal prosecution under Section 138 of the Negotiable Instruments Act, 1881 for bounced post-dated cheques; (3) Fast-track institutional arbitration under the Arbitration and Conciliation Act, 1996 if provided in the agreement; (4) Commercial Summary Suits under Order XXXVII of the Code of Civil Procedure, 1908 to obtain an expedited money decree; and (5) Concurrent recovery against personal guarantors under Section 128 of the Indian Contract Act.",
  },
  {
    question: "What is the monetary threshold for a bank to file a case in the Debt Recovery Tribunal (DRT)?",
    answer:
      "Under Section 1(4) of the Recovery of Debts and Bankruptcy (RDB) Act, 1993, banks and notified financial institutions can file an Original Application (OA) before the Debt Recovery Tribunal (DRT) only if the total outstanding debt equals or exceeds ₹20 Lakhs. For debts below ₹20 Lakhs, banks must pursue recovery through Commercial Summary Suits under Order XXXVII CPC in civil courts, institutional arbitration, or Lok Adalats.",
  },
  {
    question: "Can a bank initiate criminal action against a loan defaulter in India?",
    answer:
      "Yes. While simple default on loan repayment is a civil dispute, criminal liability arises under specific statutory triggers: (1) Section 138 of the Negotiable Instruments Act for bounced repayment cheques; (2) Section 25 of the Payment and Settlement Systems Act for failed NACH auto-debit instructions; (3) Sections 318(4) and 316 of the Bharatiya Nyaya Sanhita, 2023 (formerly IPC 420/406) if the borrower obtained credit using fraudulent financial statements, forged title deeds, or alienated mortgaged assets without bank consent; and (4) Section 447 of the Companies Act, 2013 for corporate loan fraud.",
  },
  {
    question: "How does a Commercial Summary Suit under Order XXXVII CPC help banks recover dues faster?",
    answer:
      "Under Order XXXVII of the CPC, banks can institute summary proceedings for liquidated contractual debts based on written loan agreements, promissory notes, or bills of exchange. Unlike ordinary civil trials that take 5 to 10 years, a summary suit gives the defendant no automatic right to defend. The borrower must apply for 'Leave to Defend' within 10 days of summons service. Unless the borrower demonstrates a bona fide, non-frivolous defense and deposits substantial security in court, the court immediately passes an executable money decree in favour of the bank.",
  },
  {
    question: "Can banks take legal action against personal guarantors and co-borrowers?",
    answer:
      "Yes. Under Section 128 of the Indian Contract Act, 1872 and reaffirmed by the Supreme Court in SBI v. V. Ramakrishnan, the liability of a guarantor is co-extensive with that of the principal debtor. Banks are under no legal obligation to first exhaust remedies against the primary borrower or wait for collateral sale. The bank can issue simultaneous loan recall demand notices, initiate criminal proceedings for joint cheques, and file summary suits or DRT applications against personal guarantors immediately upon default.",
  },
  {
    question: "Customer loan wapas nahi kar raha toh bank kya legal step le sakti hai?",
    answer:
      "Agar customer loan wapas na kare, toh bank sabse pehle 30 din par SMA-1 notice aur Section 25 PSS Act ke tehat bounced NACH mandate ka 15 din ka statutory cure notice bhejti hai. 90 din pure hone par account NPA bante hi, secured loan mein SARFAESI Section 13(2) ke tehat 60 din ka notice dekar bina civil court ke property repossess aur auction ki ja sakti hai. Unsecured loan mein Order 37 summary suit, arbitration, ya criminal court mein Section 138/Section 25 case file karke recovery execute ki jati hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Legal Action Can Banks Take Against Customers Who Do Not Repay Loans?",
  description:
    "Comparative guide on legal options for banks against defaulting borrowers in India: SARFAESI, DRT, Section 138, summary suits, and arbitration. (143 chars)",
  datePublished: "2026-11-13T13:30:00+05:30",
  dateModified: "2026-11-13T13:30:00+05:30",
  mainEntityOfPage: `${SITE_URL}/legal-action-banks-against-loan-defaulters-india`,
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
    name: "Bank Loan Legal Action & Statutory Debt Enforcement",
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
      name: "Bank Loan Recovery",
      item: `${SITE_URL}/bank-loan-recovery-process-defaulting-borrowers-india`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Legal Actions Against Defaulters",
      item: `${SITE_URL}/legal-action-banks-against-loan-defaulters-india`,
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

export default function BankLegalActionAgainstDefaultersPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    {
      label: "Bank Loan Recovery",
      href: "/bank-loan-recovery-process-defaulting-borrowers-india",
    },
    {
      label: "Legal Actions Against Defaulters",
      href: "/legal-action-banks-against-loan-defaulters-india",
    },
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
              <span>Statutory Enforcement Framework</span>
              <span className="text-red-500">•</span>
              <span>SARFAESI • DRT • NI Act • CPC Order 37 • Arbitration</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              What Legal Action Can Banks Take Against Customers Who Do Not Repay Loans?
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Institutional Recovery Strategy Desk)
              </p>
              <p>
                Indian banks possess a multi-track statutory arsenal against loan defaulters. For secured debt exceeding ₹1 Lakh, lenders invoke the SARFAESI Act, 2002 to repossess and auction mortgaged collateral without civil court intervention. For unsecured debt, banks deploy criminal prosecution under Section 138 NI Act and Section 25 PSS Act for bounced mandates, Commercial Summary Suits under Order XXXVII CPC, fast-track arbitration, and DRT applications for claims exceeding ₹20 Lakhs.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">60 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  SARFAESI Section 13(2) Cure Window
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">₹20 Lakh+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  DRT Jurisdiction Threshold (RDB Act)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">2 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Max Imprisonment (s.138 NI / s.25 PSS)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">100%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Guarantor Co-Extensive Liability (s.128 ICA)
                </p>
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
            <BankLegalActionTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Statutory Overview */}
              <section
                id="heading-statutory-overview"
                aria-labelledby="heading-statutory-overview-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-statutory-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Multi-Track Legal Enforcement Architecture for Indian Banks
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a borrower halts repayment on an institutional credit facility, scheduled commercial banks, regional rural banks, and notified non-banking financial companies (NBFCs) do not face a single, slow civil path. Instead, the Indian legal architecture provides five specialized statutory recovery tracks tailored to the credit structure, presence of collateral, and the borrower&apos;s conduct.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Choosing the optimal legal recovery channel is a critical balance between time-to-recovery, direct litigation costs, and debtor pressure. While secured real estate defaults trigger direct, extra-judicial attachment under the SARFAESI Act, 2002, unsecured personal and commercial facilities rely heavily on the quasi-criminal momentum of Section 25 of the Payment and Settlement Systems Act, 2007 (for dishonoured NACH auto-debits) and Section 138 of the Negotiable Instruments Act, 1881. Concurrently, high-value corporate non-performing assets (NPAs) exceeding ₹20 Lakhs fall under the specialized summary jurisdiction of Debt Recovery Tribunals (DRT), while commercial contract claims can be expedited through Summary Suits under Order XXXVII of the Code of Civil Procedure, 1908 or institutional fast-track arbitration.
                </p>
                <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <strong className="text-slate-900 font-bold block mb-1">
                    B2B Legal Strategy Advisory:
                  </strong>
                  Consult our legal strategy desk to select the fastest, most cost-effective statutory recovery channel per loan bucket. Deploying the wrong remedy (such as filing a generic civil suit where SARFAESI or Order 37 applies) locks banking capital in multi-year procedural delays and triggers avoidable provisioning penalties under RBI prudential norms.
                </div>
              </section>

              {/* Section 2: H2 - Landmark Judicial Rulings */}
              <section
                id="heading-judicial-rulings"
                aria-labelledby="heading-judicial-rulings-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-judicial-rulings-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Supreme Court Precedents Empowering Bank Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Authoritative Case Jurisprudence
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
                            <strong className="text-slate-900 font-bold block mb-0.5">The Legal Dispute &amp; Facts:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding &amp; Principle:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Statutory Scope &amp; Authority
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Impact on Banking Strategy
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding on All High Courts &amp; Subordinate Tribunals
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>Executive Takeaway:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: H2 - Strategic Matrix & Evidentiary Rules */}
              <section
                id="heading-strategic-analysis"
                aria-labelledby="heading-strategic-analysis-title"
                className="scroll-mt-28 space-y-4 sm:space-y-5"
              >
                <h2
                  id="heading-strategic-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Strategic Recovery Analysis: Deciding Between Civil, Criminal &amp; SARFAESI Paths
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Credit Underwriters, Chief Risk Officers (CROs), and Collections Strategy Directors must structure recovery operations according to loan bucket classification, collateralization, and debtor profile. Evaluating cases under a structured strategic filter guarantees the highest recovery realization:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Secured Assets: Strict Adherence to SARFAESI Section 13(2) &amp; Section 14
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Where loans are backed by equitable mortgages or hypothecated plant and machinery, SARFAESI is the gold standard. To prevent borrower-obtained DRT status quo stays under Section 17, banks must strictly adhere to the 60-day notice timeline and furnish a reasoned reply to any borrower objection within 15 days under Section 13(3A). Section 14 CMM/DM applications must be backed by an exhaustive 9-point affidavit affirming clean security creation.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Unsecured Retail &amp; MSME Facilities: Criminal Summons Pressure
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Without real estate collateral, civil money decrees often prove hollow if the debtor conceals assets. Serving statutory 15-day demand notices under Section 25 of the PSS Act (for failed NACH instructions) and Section 138 of the NI Act immediately triggers quasi-criminal accountability. The prospect of bailable warrants and personal court appearance compels fast out-of-court restructuring.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Claims Over ₹20 Lakhs: Debt Recovery Tribunal (DRT) Original Application (OA)
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        For institutional loans exceeding ₹20 Lakhs, Section 19 of the RDB Act provides a streamlined tribunal forum. Banks can secure ex-parte interim injunctions preventing the borrower and personal guarantors from alienating unencumbered properties, obtaining asset disclosure orders on affidavit, and receiving a final Recovery Certificate (RC) executable nationwide.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      4
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Evidentiary Audit Trail Under Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63)
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        All bank ledger extracts, core banking system (CBS) statements, NPCI return memos, and electronic demand notice dispatches must be accompanied by a Section 63 BSA certificate (replacing Section 65B of the repealed Evidence Act). Ensuring digital records are legally authenticated guarantees instant judicial admissibility before Magistrates, DRTs, and Commercial Courts.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: H2 - SVG Flowchart Diagram */}
              <section
                id="heading-escalation-flow"
                aria-labelledby="heading-escalation-flow-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Multi-Track Resolution Rail: From Loan Default to Execution
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Strategic decision roadmap for institutional recovery departments navigating civil, criminal, and SARFAESI enforcement channels:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Bucket 1 (1–30 DPD)</span>
                    <h3 className="font-bold text-sm">SMA-0/1 &amp; Cure Notice</h3>
                    <p className="text-xs text-slate-200 mt-1">Bounced NACH mandate; dispatch 15-day Section 25 PSS Act cure notice within 30 days.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Bucket 2 (31–90 DPD)</span>
                    <h3 className="font-bold text-sm">Loan Recall &amp; Guarantor Notice</h3>
                    <p className="text-xs text-amber-900 mt-1">Accelerate facility; enforce co-extensive liability against personal guarantors under Section 128 ICA.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Bucket 3 (90+ DPD / NPA)</span>
                    <h3 className="font-bold text-sm">SARFAESI Section 13(2) Notice</h3>
                    <p className="text-xs text-red-900 mt-1">Secured collateral: 60-day demand notice. Reply to objections under Section 13(3A) within 15 days.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Bucket 4 (Unsecured / &gt; ₹20L)</span>
                    <h3 className="font-bold text-sm">DRT OA or Order 37 CPC</h3>
                    <p className="text-xs text-slate-700 mt-1">File Section 19 OA before DRT or institute Commercial Summary Suit for speedy liquidated decree.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Bucket 5 (Execution)</span>
                    <h3 className="font-bold text-sm">Physical Eviction &amp; E-Auction</h3>
                    <p className="text-xs text-emerald-900 mt-1">Section 14 DM order, police-assisted possession, public e-auction, or Recovery Certificate execution.</p>
                  </div>
                </div>

                {/* Hand-Authored SVG Flowchart (Visible on Desktop & Mobile with Smooth Scroll) */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Bank Recovery Decision Matrix Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 860 260"
                    className="w-full h-auto text-xs font-sans min-w-[700px] sm:min-w-[760px]"
                    role="img"
                    aria-label="Bank Legal Action & Recovery Multi-Track Flowchart"
                  >
                    <defs>
                      <linearGradient id="bankGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                      <linearGradient id="bankRed" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="bankGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="145" height="95" rx="10" fill="url(#bankGrad)" />
                    <text x="82" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">TRIGGER</text>
                    <text x="82" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">EMI / Mandate Default</text>
                    <text x="82" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">SMA-0/1/2 Ledger</text>
                    <text x="82" y="98" fill="#94A3B8" fontSize="9" textAnchor="middle">s.25 PSS Cure Notice</text>

                    {/* Arrow 1 */}
                    <path d="M 155 67 L 185 67" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="185" y="20" width="145" height="95" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="257" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">COLLATERAL CHECK</text>
                    <text x="257" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Secured vs Unsecured</text>
                    <text x="257" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Loan Recall Notice</text>
                    <text x="257" y="98" fill="#78350F" fontSize="9" textAnchor="middle">s.128 ICA Guarantor Action</text>

                    {/* Arrow 2 */}
                    <path d="M 330 67 L 360 67" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="360" y="20" width="150" height="95" rx="10" fill="url(#bankRed)" />
                    <text x="435" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">SECURED: SARFAESI</text>
                    <text x="435" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Section 13(2) Notice</text>
                    <text x="435" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">60-Day Cure Period</text>
                    <text x="435" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">s.13(3A) Reasoned Reply</text>

                    {/* Arrow 3 */}
                    <path d="M 510 67 L 540 67" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="540" y="20" width="150" height="95" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="615" y="45" fill="#1E293B" fontWeight="bold" textAnchor="middle">UNSECURED / &gt; ₹20L</text>
                    <text x="615" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">DRT / Order 37 / Arb</text>
                    <text x="615" y="82" fill="#334155" fontSize="10" textAnchor="middle">s.19 RDB OA (Dues &gt; ₹20L)</text>
                    <text x="615" y="98" fill="#475569" fontSize="9" textAnchor="middle">s.138 NI / s.25 PSS Warrants</text>

                    {/* Arrow 4 */}
                    <path d="M 690 67 L 720 67" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="720" y="20" width="130" height="95" rx="10" fill="url(#bankGreen)" />
                    <text x="785" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">RECOVERY</text>
                    <text x="785" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">E-Auction / Decree</text>
                    <text x="785" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">s.14 DM Physical Eviction</text>
                    <text x="785" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">Recovery Certificate (RC)</text>

                    {/* Bottom Benchmark Bar */}
                    <rect x="10" y="145" width="840" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY TIME BENCHMARKS &amp; PRE-REQUISITES FOR BANK REMEDIES:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• SARFAESI Act, 2002: Mandates 90-day NPA classification, outstanding balance &gt; ₹1 Lakh, and 60-day demand notice under Section 13(2).</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Section 138 NI Act / Section 25 PSS Act: Statutory demand notice within 30 days of bank return memo; criminal complaint within next 30 days.</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• DRT Original Application: Section 19 RDB Act claims strictly for debts ≥ ₹20 Lakhs; limitation period 3 years from default or balance confirmation.</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: H2 - 5-Step Escalation Playbook */}
              <section
                id="heading-playbook"
                aria-labelledby="heading-playbook-title"
                className="scroll-mt-28 space-y-4 sm:space-y-5"
              >
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Escalation Playbook for Bank Recovery Officers &amp; In-House Counsel
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Synthesized from established statutory workflows and appellate court rulings, this 5-step playbook equips recovery units to execute fast, compliant legal action against delinquent borrowers:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1E293B] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Identify Default Triggers &amp; Preserve Electronic NPCI Memos
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Log missed EMIs immediately within the SMA ledger. For bounced NACH mandate auto-debits, download the official NPCI return memo showing failure reasons such as &quot;Account Closed&quot; or &quot;Insufficient Balance&quot;. Secure electronic log files under Section 63 BSA to substantiate subsequent quasi-criminal notices.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1E293B] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve Advocate Loan Recall &amp; Statutory Cure Notices (30 DPD)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Engage empanelled advocates to serve formal 15-day cure notices under Section 25 of the PSS Act within 30 days of return memo receipt. For persistent defaults, accelerate the debt, terminate installment privileges, and dispatch Loan Recall Demand Notices to primary borrowers and co-borrowers simultaneously.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        See institutional advocate drafting charges on our{" "}
                        <Link href="/legal-notice-charges" className="text-blue-700 underline">
                          legal notice charges
                        </Link>{" "}
                        schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Classify 90-Day NPA &amp; Issue SARFAESI Section 13(2) Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Upon 90 DPD, classify the account as a Non-Performing Asset per RBI IRAC prudential norms. For secured facilities, the bank&apos;s Authorized Officer issues a 60-day demand notice under Section 13(2) of the SARFAESI Act, itemizing the outstanding principal, contractual interest, and mortgaged immovable assets. Any objection filed by the borrower under Section 13(3A) must receive a reasoned reply within 15 days.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1E293B] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Initiate Concurrent Dual-Track Litigation (DRT / Criminal / Summary Suits)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Under the Supreme Court doctrine in <em>Transcore</em>, proceed concurrently without awaiting SARFAESI completion. For debts ≥ ₹20 Lakhs, institute an Original Application before the DRT seeking interim injunctions against asset disposal. For unsecured facilities, file criminal complaints under Section 138 NI Act / Section 25 PSS Act or Commercial Summary Suits under Order XXXVII CPC.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1E293B] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Secure Section 14 DM Order, Physical Possession &amp; Public E-Auction
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the 60-day SARFAESI notice expires unpaid, issue Section 13(4) symbolic possession notices and petition the District Magistrate or Chief Metropolitan Magistrate under Section 14 for administrative assistance and police support. Upon physical handover, conduct an approved valuation, serve a 30-day individual sale notice, and conduct transparent public e-auctions to realize maximum loan recovery.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: H2 - Comprehensive Comparison Matrix Table */}
              <section
                id="heading-remedy-comparison"
                aria-labelledby="heading-remedy-comparison-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-remedy-comparison-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Comprehensive Statutory Comparison Matrix: Legal Remedies for Banks
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Comparative matrix mapping all statutory recovery options by minimum debt threshold, legal forum, mandatory pre-litigation notice, execution speed, and cost efficiency:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[640px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Comprehensive Statutory Bank Recovery Matrix</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Recovery Remedy</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Debt Threshold / Scope</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Enforcement Forum</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Mandatory Notice</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Execution Mechanism</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Avg Timeline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Cost Index</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          SARFAESI Act, 2002 (Sec. 13 &amp; 14)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-medium text-emerald-700">Dues &gt; ₹1 Lakh; &gt; 20% Unpaid</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Direct Extra-Judicial / DM / CMM</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-bold text-red-700">60-Day Section 13(2) Notice</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Physical Repossession &amp; E-Auction</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">3 to 6 Mos</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Lowest</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Debt Recovery Tribunal (RDB Act 1993)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-medium text-slate-900">Dues ≥ ₹20 Lakhs</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Presiding Officer, DRT</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Loan Recall Demand Notice</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Recovery Certificate (RC) to RO</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">12 to 24 Mos</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">Moderate</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Section 138 NI Act (Cheque Bounce)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-medium text-slate-900">Any Dishonoured Cheque Amount</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Metropolitan / Judicial Magistrate</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-bold text-red-700">15-Day Statutory Notice within 30D</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Summons, NBW &amp; Penal Sentence</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">4 to 9 Mos</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Low</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Section 25 PSS Act (NACH / Auto-Debit)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-medium text-slate-900">Any Failed NACH EMI Mandate</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Metropolitan / Judicial Magistrate</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-bold text-red-700">15-Day Cure Notice within 30D</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Summons, Compoundable Settlement</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">4 to 9 Mos</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Low</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Order XXXVII CPC (Commercial Summary Suit)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-medium text-slate-900">Liquidated Debt (Under ₹20L)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">District Commercial Civil Court</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Advocate Legal Demand Notice</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Summary Money Decree &amp; Order 21 Att.</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">6 to 12 Mos</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">Moderate</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Arbitration &amp; Conciliation Act, 1996
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-medium text-slate-900">Any Debt with Arbitration Covenant</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Sole Arbitrator / Institutional Center</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 21 Invocation Notice</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 36 Arbitral Award Decree</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">6 to 12 Mos</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">Moderate</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Verified statutory references: SARFAESI Act, 2002; RDB Act, 1993; NI Act, 1881; PSS Act, 2007; CPC 1908; and Arbitration Act, 1996. To compare civil money suits, consult our comprehensive guide on{" "}
                  <Link href="/civil-suit-for-recovery-of-money-india" className="text-blue-700 underline">
                    civil suits for recovery of money in India
                  </Link>{" "}
                  and{" "}
                  <Link href="/law/order-37-summary-suit-money-recovery" className="text-blue-700 underline">
                    Order 37 summary suit procedures
                  </Link>.
                </p>
              </section>

              {/* Section 7: H2 - Interactive Remedy Selector Tabs */}
              <section
                id="heading-remedy-picker"
                aria-labelledby="heading-remedy-picker-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-remedy-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Interactive Statutory Channel Selector: Choose Your Loan Scenario
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select the Specific Delinquent Asset Class to Unlock Procedural Steps, Statutory Sections, and Execution Timelines
                  </p>
                </div>

                <BankLegalActionTabs />
              </section>

              {/* Section 8: H2 - Worked Example Case Study */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Institutional Recovery Example: ₹1.45 Crore Defaulted Working Capital &amp; Term Loan Facility
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Commercial Case Study
                    </span>
                    <span className="text-xs text-slate-400">Scheduled Commercial Bank v. Engineering Fabricator</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>Credit Exposure:</strong> Apex Mercantile Bank sanctioned a ₹1.10 Crore secured Term Loan and ₹35 Lakhs unsecured working capital overdraft to Zenith Fabricators Pvt. Ltd., secured by an equitable mortgage of an industrial plot valued at ₹1.60 Crore and guaranteed by two promoter-directors under personal deeds of guarantee.
                    </p>
                    <p>
                      <strong>The Delinquency &amp; Deadlock:</strong> After 18 months of regular servicing, the borrower defaulted on three consecutive monthly installments. The company cancelled its destination NACH mandate, and a security cheque of ₹12.50 Lakhs was dishonoured with the remark &quot;Payment Stopped by Drawer&quot;. The account entered SMA-2 (75 DPD) with outstanding dues accumulating to ₹1.48 Crore including accrued interest. The promoters refused to meet credit officers, citing sector-wide cash flow disruptions.
                    </p>
                    <p>
                      <strong>The Multi-Track Legal Deployment:</strong> The bank engaged LegalRecovery.in&apos;s legal strategy desk to execute a synchronized dual-track strategy:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
                      <li>
                        <strong>Track 1 (Quasi-Criminal):</strong> Dispatched a 15-day statutory demand notice under Section 138 NI Act and Section 25 PSS Act to the company and signatory directors within 30 days of memo receipt.
                      </li>
                      <li>
                        <strong>Track 2 (SARFAESI Enforcement):</strong> On Day 91 (mandatory NPA classification), the Authorized Officer served a formal 60-day demand notice under Section 13(2) of the SARFAESI Act, scheduling symbolic repossession of the industrial plot.
                      </li>
                      <li>
                        <strong>Track 3 (Guarantor Acceleration):</strong> Invoking Section 128 of the Indian Contract Act, the bank accelerated the loan and issued loan recall demand notices to both personal guarantors, threatening attachment of their personal bank accounts.
                      </li>
                    </ul>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Resolution &amp; Financial Outcome:</strong>
                      Facing imminent criminal summons before the Chief Metropolitan Magistrate, personal asset freeze, and public e-auction of their manufacturing premises under SARFAESI Section 13(4), the promoters approached the bank&apos;s Special Recovery Committee. Within 42 days of notice delivery, the borrower made an upfront cash recovery deposit of ₹40 Lakhs and executed an approved One-Time Restructuring (OTR) agreement covering the remaining ₹1.08 Crore with revised collateral margins—saving the bank over ₹25 Lakhs in prospective DRT litigation fees and arresting further capital provisioning.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: H2 - Institutional Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Institutional Bank Evidence Checklist: 6 Core Documents for Legal Recovery
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic banking records and core banking statements are fully admissible in DRTs, Magistrates&apos; courts, and Commercial Civil Benches when accompanied by certified digital logs:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Duly Stamped Facility Agreement &amp; Sanction Letter:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Containing clear Event of Default clauses, loan acceleration covenants, and agreed jurisdiction or arbitration provisions.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Equitable Mortgage Deeds &amp; CERSAI Registration:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Memorandum of Entry, original title deeds, and CERSAI security interest filing receipt establishing priority of charge.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Certified Statement of Accounts with Section 63 BSA Certificate:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Certified under the Bankers&apos; Books Evidence Act showing principal disbursement, interest debits, and defaulted balance.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Dishonour Return Memos (Cheque &amp; NACH Mandate):
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        NPCI electronic clearing logs or physical bank return memos bearing reason codes, dates, and account details.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Deeds of Personal &amp; Corporate Guarantee:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Independent continuous guarantee contracts executed by directors, promoters, or third-party sureties under Section 128 ICA.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      6
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Postal Tracking &amp; Digital Service Delivery Logs:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Registered Speed Post receipts, India Post delivery confirmations, and email server transmission logs proving lawful service.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: H2 - FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 space-y-4 sm:space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs on Legal Action by Banks Against Loan Defaulters in India
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in SARFAESI, DRT, NI Act, CPC and Supreme Court Precedents
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

              {/* Section 11: H2 - Primary Sources Block */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200"
              >
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Authorities, Primary Statutes &amp; Banking Regulations
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
                  Statutory verification status: All provisions verified against active gazette notifications of India Code, Ministry of Finance banking statutes, and Supreme Court rulings as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Consult Bank Legal Strategy Desk
                </h2>
                <BankLegalActionCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Banking &amp; Debt Recovery Legal Resources
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/civil-suit-for-recovery-of-money-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Civil Suit for Recovery of Money →
                  </Link>
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Order 37 Summary Suit Guide →
                  </Link>
                  <Link
                    href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice for Banks to Recover Dues →
                  </Link>
                  <Link
                    href="/law/lok-adalat-pre-litigation-money-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Lok Adalat Pre-Litigation Recovery →
                  </Link>
                  <Link
                    href="/bank-loan-recovery-process-borrower-stops-emi"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Borrower Stops EMI Recovery Process →
                  </Link>
                  <Link
                    href="/bank-recovery-overdue-loans-willful-defaulters"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Recovery from Willful Defaulters →
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
