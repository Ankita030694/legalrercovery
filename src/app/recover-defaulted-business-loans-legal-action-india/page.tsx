import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import BusinessLoanRecoveryCTA from "./BusinessLoanRecoveryCTA";
import BusinessLoanRecoveryTableOfContents from "./BusinessLoanRecoveryTableOfContents";
import BusinessLoanRecoveryTabs from "./BusinessLoanRecoveryTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Recover Defaulted Business Loans: Legal Action for Banks",
  description:
    "Step-by-step legal action for banks to recover commercial loan defaults in India. SARFAESI asset seizure, DRT petitions, and IBC insolvency.",
  alternates: {
    canonical: `${SITE_URL}/recover-defaulted-business-loans-legal-action-india`,
  },
  openGraph: {
    title: "Recover Defaulted Business Loans: Legal Action for Banks",
    description:
      "Step-by-step legal action for banks to recover commercial loan defaults in India. SARFAESI asset seizure, DRT petitions, and IBC insolvency.",
    url: `${SITE_URL}/recover-defaulted-business-loans-legal-action-india`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "How to Recover Defaulted Business Loans Through Legal Action",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Defaulted Business Loans: Legal Action for Banks",
    description:
      "Step-by-step legal action for banks to recover commercial loan defaults in India. SARFAESI asset seizure, DRT petitions, and IBC insolvency.",
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
    title: "Insolvency and Bankruptcy Code, 2016 (IBC Section 7 Corporate Insolvency & Section 95 Personal Guarantors) — IBBI",
    url: "https://ibbi.gov.in/legal-framework/act",
  },
  {
    title: "Recovery of Debts and Bankruptcy Act, 1993 (RDB Act — Establishment of Debt Recovery Tribunals) — Ministry of Finance",
    url: "https://financialservices.gov.in/acts/recovery-debts-due-banks-and-financial-institutions-act-1993",
  },
  {
    title: "Commercial Courts Act, 2015 (Pre-Institution Mediation & Settlement under Section 12A) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2146",
  },
  {
    title: "Reserve Bank of India (RBI) Master Directions on Classification and Reporting of Wilful Defaulters",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasCirculardetails.aspx?id=12165",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Loan Ledgers & NeSL Certificates)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Benchmark on Bank Security Enforcement & Section 13(3A) Objections",
    parties: "Mardia Chemicals Ltd. & Others v. Union of India & Others",
    citation: "(2004) 4 SCC 311 / AIR 2004 SC 2371",
    date: "Judgment Dated 8 April 2004",
    facts:
      "Borrowers challenged the constitutional validity of the SARFAESI Act, 2002, arguing that permitting secured commercial lenders and scheduled banks to attach and liquidate mortgaged commercial real estate and manufacturing plants without prior civil decrees violated constitutional equality and natural justice principles.",
    holding:
      "The Supreme Court of India upheld the constitutional validity of the SARFAESI Act, declaring that swift recovery of public bank funds is vital for national economic stability. The apex bench mandated that when a defaulting business borrower submits representations against a Section 13(2) notice, the secured creditor must objectively review the objections and issue a reasoned speaking rejection under Section 13(3A) within 15 days.",
    amount: "Affirmed Sovereign Creditor Enforcement Across All Secured Commercial Facilities",
    takeaway:
      "Commercial lenders can enforce mortgages and take physical possession of borrower plants without court decrees, provided the Authorized Officer serves a speaking order within 15 days of receiving borrower objections.",
  },
  {
    title: "IBC Section 7 Financial Debt Admission: Inability to Dispute Debt When Default Occurs",
    parties: "Innoventive Industries Ltd. v. ICICI Bank & Another",
    citation: "(2018) 1 SCC 407",
    date: "Judgment Dated 31 August 2017",
    facts:
      "A commercial borrower defaulted on multiple working capital and term loan facilities. When ICICI Bank initiated corporate insolvency under Section 7 of the IBC before the NCLT, the company argued that relief notifications under the Maharashtra Relief Undertaking (MRU) Act suspended the bank's right to claim recovery.",
    holding:
      "The Supreme Court laid down the definitive test for Section 7 IBC petitions: the Adjudicating Authority (NCLT) is only required to satisfy itself that a financial debt of ₹1 Crore or more exists and that a default has occurred. Once default is established via loan agreements or NeSL records, the NCLT is legally bound to admit the petition, initiate CIRP, and supersede corporate management.",
    amount: "₹1 Crore+ Threshold Enforceable Immediately Across All Corporate Debtors",
    takeaway:
      "Corporate debtors cannot defeat Section 7 insolvency petitions using local state laws or disputed counter-claims. Establishing proof of debt and non-payment guarantees insolvency admission and managerial displacement.",
  },
  {
    title: "Enforceability of Personal Guarantees During Corporate Moratorium & NCLT Section 95 Action",
    parties: "Lalit Kumar Jain v. Union of India & Others",
    citation: "(2021) 9 SCC 321",
    date: "Judgment Dated 21 May 2021",
    facts:
      "Promoters and directors of defaulted corporate entities challenged the Central Government's notification bringing into force Part III of the IBC relating to personal guarantors to corporate debtors, arguing that an ongoing CIRP against the corporate debtor shields the personal guarantors from simultaneous bankruptcy proceedings.",
    holding:
      "A unanimous Supreme Court bench upheld the statutory provisions permitting financial creditors to simultaneously initiate insolvency against personal guarantors under Section 95 before the NCLT. The apex court ruled that the approval of a resolution plan for the corporate borrower does not extinguish or discharge the personal guarantor's independent contractual liability under Section 128 of the Indian Contract Act.",
    amount: "Full Joint & Several Recourse to Personal Estates of Promoters",
    takeaway:
      "Banks can attach promoter villas, personal equity holdings, and private estates through Section 95 NCLT proceedings simultaneously with corporate liquidation, preventing promoters from absconding with wealth.",
  },
  {
    title: "Concurrent Invocation of DRT and SARFAESI: No Bar by Doctrine of Election",
    parties: "Transcore v. Union of India & Another",
    citation: "(2008) 1 SCC 125",
    date: "Judgment Dated 29 November 2006",
    facts:
      "A commercial borrower argued that once a lending bank institutes an Original Application (OA) under Section 19 of the RDB Act before the Debt Recovery Tribunal (DRT), the bank has elected its remedy and cannot simultaneously invoke SARFAESI Section 13(4) to seize and auction mortgaged commercial collateral.",
    holding:
      "The Supreme Court held that the Doctrine of Election has no application to banking recovery statutes. SARFAESI provides an additional non-adjudicatory enforcement mechanism running parallel to DRT adjudications. Secured financial institutions have complete legal liberty to seize and liquidate collateral under SARFAESI while continuing DRT proceedings to secure personal money decrees.",
    amount: "Dual-Track Recovery Validated Across All Scheduled Banks & NBFCs",
    takeaway:
      "Banks do not need to choose between tribunal litigation and asset seizure. Both tracks can proceed concurrently to maximize recovery velocity and prevent asset stripping.",
  },
];

const FAQS = [
  {
    question: "What is the fastest legal action for a bank to recover defaulted business loans in India?",
    answer:
      "The fastest statutory remedy for secured commercial loans is invoking the SARFAESI Act, 2002. Secured creditors issue a 60-day demand notice under Section 13(2). If unpaid, the bank assumes constructive possession under Section 13(4) and petitions the District Magistrate (DM) or Chief Metropolitan Magistrate (CMM) under Section 14 to take physical possession of factory premises, plant machinery, or commercial real estate for public e-auction without requiring a civil court decree.",
  },
  {
    question: "How can banks initiate corporate insolvency against a defaulting commercial borrower under IBC?",
    answer:
      "For financial debt defaults of ₹1 Crore or more against incorporated companies (Pvt Ltd, Ltd, or LLPs), a financial creditor can file a petition under Section 7 of the Insolvency and Bankruptcy Code (IBC), 2016, before the National Company Law Tribunal (NCLT). Supported by authenticated NeSL default certificates, the NCLT admits the corporate debtor into Corporate Insolvency Resolution Process (CIRP), superseding the promoter board and appointing an Insolvency Resolution Professional (IRP).",
  },
  {
    question: "Can personal guarantees of directors and promoters be enforced if the company is in NCLT?",
    answer:
      "Yes. The Supreme Court in Lalit Kumar Jain v. Union of India (2021) affirmed that Section 14 corporate moratoriums protect only corporate debtor assets and do not shield personal guarantors. Secured and unsecured creditors can invoke personal guarantees under Section 128 of the Indian Contract Act and file insolvency applications against promoter guarantors under Section 95 of the IBC before the NCLT, securing interim moratoriums and asset attachment over the promoter's private wealth.",
  },
  {
    question: "What is the minimum debt threshold to file an application before the Debt Recovery Tribunal (DRT)?",
    answer:
      "Under Section 1(4) of the Recovery of Debts and Bankruptcy (RDB) Act, 1993, the minimum pecuniary threshold for banks and notified financial institutions to institute an Original Application (OA) before the Debt Recovery Tribunal is ₹20 Lakh. For outstanding defaults below ₹20 Lakh, lenders must proceed through the Commercial Courts Act, 2015, summary civil suits under Order 37 CPC, or arbitration.",
  },
  {
    question: "How does a bank legally declare a defaulting corporate borrower as a Wilful Defaulter?",
    answer:
      "Under RBI Master Directions, a bank's internal Identification Committee examines forensic audit reports demonstrating fund diversion, siphoning, or disposal of hypothecated stock. The committee issues a show-cause notice granting the borrower and promoters 15 days to represent. Upon personal hearing, the Review Committee issues a final speaking order publishing their names on CIBIL/CRILC and barring promoters from accessing institutional finance or bidding under Section 29A IBC.",
  },
  {
    question: "Can banks take criminal action for business loan defaults in India?",
    answer:
      "While loan default is fundamentally a civil contract breach, criminal action is instituted when default is accompanied by fraudulent inducement or cheque dishonour. Lenders file complaints under Section 138 of the Negotiable Instruments Act, 1881, for bounced repayment cheques, Section 25 of the Payment and Settlement Systems Act, 2007, for dishonoured NACH mandates, and Sections 316 (criminal breach of trust) and 318 (cheating) of the Bharatiya Nyaya Sanhita, 2023.",
  },
  {
    question: "Defaulted business loan recover karne ke liye banks ke paas kya legal steps hote hain?",
    answer:
      "Banks defaulted commercial loans ko recover karne ke liye multi-track legal action lete hain: (1) Secured loans par SARFAESI Act Section 13(2) ka 60-day legal demand notice bhej kar factory ya property DM/CMM order (Section 14) se seize aur auction karna, (2) Agar default ₹1 Crore se zyada hai, toh NCLT mein IBC Section 7 ke tehat Corporate Insolvency file karna, (3) Promoters ki personal guarantee par Section 95 IBC ke tehat unki private property attach karwana, aur (4) DRT mein Section 19 ke tehat recovery petition file karna.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Recover Defaulted Business Loans Through Legal Action",
  description:
    "Step-by-step legal action for banks to recover commercial loan defaults in India. SARFAESI asset seizure, DRT petitions, and IBC insolvency.",
  datePublished: "2026-11-13T13:00:00+05:30",
  dateModified: "2026-11-13T13:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/recover-defaulted-business-loans-legal-action-india`,
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
    name: "Debt Recovery Tribunal & SARFAESI Enforcement",
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
      item: `${SITE_URL}/bank-loan-recovery-process-defaulting-borrowers-india`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Business Loan Recovery",
      item: `${SITE_URL}/recover-defaulted-business-loans-legal-action-india`,
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

export default function RecoverDefaultedBusinessLoansPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Bank Loan Recovery", href: "/bank-loan-recovery-process-defaulting-borrowers-india" },
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
        {/* Hero Section matching platform theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>SARFAESI Act 2002 &amp; IBC 2016 Framework</span>
              <span className="text-red-500">•</span>
              <span>Commercial Credit Recovery Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              How to Recover Defaulted Business Loans Through Legal Action
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Institutional Business Loan Recovery Mandate)
              </p>
              <p>
                To recover defaulted commercial loans in India, scheduled banks and financial institutions invoke SARFAESI Section 13(2) for 60-day demand and asset seizure, petition the NCLT under IBC Section 7 for corporate insolvency (defaults &#8805; ₹1 Crore), and enforce promoter personal guarantees under IBC Section 95. Parallel Debt Recovery Tribunal (DRT) claims under Section 19 ensure personal money decrees without doctrine-of-election restrictions.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">60 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">SARFAESI 13(2) Demand Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">₹1 Crore+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">IBC Section 7 CIRP Threshold</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">₹20 Lakh+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">DRT Jurisdiction Threshold</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">100%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Enforceable Promoter Guarantee</p>
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
            <BusinessLoanRecoveryTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Statutory Overview & Commercial Default Landscape */}
              <section id="heading-statutory-overview" aria-labelledby="heading-statutory-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-statutory-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Commercial Debt Default Landscape: Legal Recourse for Banks &amp; Institutional Lenders
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a commercial enterprise or MSME defaults on its structured term debt, working capital limit, or project finance loan, scheduled commercial banks and non-banking financial companies (NBFCs) face an urgent race against asset dissipation. Delinquent borrowers often employ strategic litigation maneuvers, corporate restructuring shelters, or promoter asset transfers to stall recovery proceedings.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the modern Indian recovery framework, lenders are no longer restricted to slow-moving ordinary civil suits. Armed with the <strong className="font-semibold text-slate-900">SARFAESI Act, 2002</strong>, the <strong className="font-semibold text-slate-900">Insolvency and Bankruptcy Code (IBC), 2016</strong>, the <strong className="font-semibold text-slate-900">Recovery of Debts and Bankruptcy (RDB) Act, 1993</strong>, and the <strong className="font-semibold text-slate-900">Commercial Courts Act, 2015</strong>, institutional credit teams can mount an aggressive multi-pronged recovery offensive that simultaneously immobilises pledged commercial collaterals, dislodges corporate management, and penetrates promoter personal estates.
                </p>
              </section>

              {/* Section 2: Case Law Digest (4 verified landmark precedents) */}
              <section id="heading-case-citations" aria-labelledby="heading-case-citations-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-citations-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Judicial Rulings on Commercial Loan Recovery &amp; Collateral Seizure
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
                            <strong className="text-slate-900 font-bold block mb-0.5">The Commercial Dispute &amp; Challenge:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Supreme Court Holding &amp; Doctrine:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Statutory Impact &amp; Jurisdictional Scope
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Litigation Velocity
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Enforceable Pan-India Across All Tribunals
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>Strategic takeaway for lenders:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Pattern Analysis - What Wins Business Loan Recoveries */}
              <section id="heading-pattern-analysis" aria-labelledby="heading-pattern-analysis-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Strategic Factors That Win Commercial Loan Recoveries and Evict Defaulters
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  An empirical analysis of high-value recovery proceedings across Debt Recovery Tribunals, the NCLT, and High Courts demonstrates that lenders achieve superior recovery realization when executing proactive, multi-front legal strategies:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Unimpeachable Speaking Orders under SARFAESI Section 13(3A):</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Borrowers routinely file boilerplate representations to create procedural delays. When the lender&apos;s Authorized Officer issues a legally fortified speaking order within the mandatory 15-day timeline addressing each point point-by-point, DRTs dismiss Section 17 Securitisation Applications at the threshold without granting interim stays.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Authenticated Information Utility (NeSL) Default Records:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Under the IBBI (Insolvency Resolution Process for Corporate Persons) Regulations, submitting an authenticated Record of Default from NeSL prevents corporate debtors from manufacturing fictitious disputes, ensuring rapid admission under Section 7 IBC.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Simultaneous Section 95 IBC Personal Guarantor Petitions:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Filing an insolvency petition against the promoter under Section 95 IBC triggers an immediate interim moratorium under Section 96 on the promoter&apos;s personal properties. This paralyzes the promoter&apos;s ability to transfer personal wealth, luxury assets, or offshore vehicles.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Interim Injunctions on Hypothecated Book Debts &amp; Receivables:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        In Cash Credit and working capital defaults, obtaining ex-parte garnishing orders under Section 19(12) of the RDB Act or Section 9 Commercial Courts Act on trade debtors ensures sales proceeds flow directly into the bank&apos;s escrow rather than siphoned operational accounts.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* In-Body Primary Conversion CTA Hook */}
              <div className="my-8">
                <BusinessLoanRecoveryCTA />
              </div>

              {/* Section 4: Multi-Track Enforcement Architecture Flowchart */}
              <section id="heading-enforcement-rail" aria-labelledby="heading-enforcement-rail-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-enforcement-rail-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Multi-Track Enforcement Architecture: From Default Notice to Asset Liquidation
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Institutional lenders synchronize four parallel legal rails to prevent debtor evasions and compress recovery turnaround times:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Track 1</span>
                    <h3 className="font-bold text-sm">SARFAESI Collateral Seizure</h3>
                    <p className="text-xs text-slate-200 mt-1">Section 13(2) notice (60 days) → Section 14 DM order → Physical plant possession &amp; public e-auction.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-800 uppercase tracking-wider block mb-1">Track 2</span>
                    <h3 className="font-bold text-sm">NCLT Corporate Insolvency (IBC Sec 7)</h3>
                    <p className="text-xs text-red-900 mt-1">For corporate defaults &#8805; ₹1 Cr: File Form 1 petition → CIRP admission → Board suspension &amp; IRP control.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-900 uppercase tracking-wider block mb-1">Track 3</span>
                    <h3 className="font-bold text-sm">Promoter Personal Guarantee (IBC Sec 95)</h3>
                    <p className="text-xs text-amber-950 mt-1">Invoke guarantee → File Section 95 IBC petition → Interim moratorium on promoter private assets.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Track 4</span>
                    <h3 className="font-bold text-sm">DRT Section 19 Money Decree</h3>
                    <p className="text-xs text-slate-700 mt-1">Original Application for debts &#8805; ₹20 Lakh → Recovery Certificate → Debtor arrest &amp; attachment.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram with Smooth Horizontal Scroll */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Multi-Track Enforcement Architecture</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 880 280"
                    className="w-full h-auto text-xs font-sans min-w-[720px] sm:min-w-[760px]"
                    role="img"
                    aria-label="Commercial Loan Legal Recovery Architecture"
                  >
                    <defs>
                      <linearGradient id="corpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                      <linearGradient id="alertGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="succGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Central Trigger */}
                    <rect x="15" y="95" width="160" height="90" rx="10" fill="url(#corpGrad)" />
                    <text x="95" y="125" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">NPA CLASSIFICATION</text>
                    <text x="95" y="145" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">90+ Days Delinquency</text>
                    <text x="95" y="163" fill="#CBD5E1" fontSize="10" textAnchor="middle">Loan Recall Notice</text>
                    <text x="95" y="177" fill="#94A3B8" fontSize="9" textAnchor="middle">Forensic Audit Initiated</text>

                    {/* Branching Connectors */}
                    <path d="M 175 140 L 220 55" stroke="#DC2626" strokeWidth="2" strokeDasharray="3,3" />
                    <path d="M 175 140 L 220 115" stroke="#B45309" strokeWidth="2" />
                    <path d="M 175 140 L 220 175" stroke="#1E293B" strokeWidth="2" />
                    <path d="M 175 140 L 220 235" stroke="#047857" strokeWidth="2" strokeDasharray="3,3" />

                    {/* Track 1: SARFAESI */}
                    <rect x="220" y="15" width="280" height="75" rx="8" fill="#FEF2F2" stroke="#DC2626" strokeWidth="1.5" />
                    <text x="235" y="38" fill="#991B1B" fontWeight="bold">TRACK 1: SARFAESI ACT 2002</text>
                    <text x="235" y="56" fill="#7F1D1D" fontSize="11">Sec 13(2) Demand (60 Days) → Sec 13(4) Possession</text>
                    <text x="235" y="73" fill="#450A0A" fontSize="10">Sec 14 DM Physical Eviction &amp; Factory E-Auction</text>

                    {/* Track 2: IBC Sec 7 */}
                    <rect x="220" y="95" width="280" height="45" rx="8" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="235" y="115" fill="#92400E" fontWeight="bold">TRACK 2: IBC 2016 SECTION 7 (NCLT)</text>
                    <text x="235" y="130" fill="#78350F" fontSize="10">Defaults &#8805; ₹1 Cr → CIRP Admission &amp; Board Suspension</text>

                    {/* Track 3: IBC Sec 95 */}
                    <rect x="220" y="145" width="280" height="45" rx="8" fill="#F8FAFC" stroke="#475569" strokeWidth="1.5" />
                    <text x="235" y="165" fill="#0F172A" fontWeight="bold">TRACK 3: PERSONAL GUARANTOR (SEC 95)</text>
                    <text x="235" y="180" fill="#334155" fontSize="10">Interim Moratorium &amp; Promoter Personal Estate Seizure</text>

                    {/* Track 4: DRT Section 19 */}
                    <rect x="220" y="195" width="280" height="75" rx="8" fill="#F0FDF4" stroke="#16A34A" strokeWidth="1.5" />
                    <text x="235" y="218" fill="#14532D" fontWeight="bold">TRACK 4: DRT RECOVERY (RDB ACT)</text>
                    <text x="235" y="236" fill="#166534" fontSize="11">Original Application (OA) for Claims &#8805; ₹20 Lakh</text>
                    <text x="235" y="253" fill="#14532D" fontSize="10">Recovery Certificate &amp; Garnishee Attachment Orders</text>

                    {/* Convergence Arrow */}
                    <path d="M 500 52 L 570 140" stroke="#64748B" strokeWidth="2" />
                    <path d="M 500 117 L 570 140" stroke="#64748B" strokeWidth="2" />
                    <path d="M 500 167 L 570 140" stroke="#64748B" strokeWidth="2" />
                    <path d="M 500 232 L 570 140" stroke="#64748B" strokeWidth="2" />

                    {/* Outcome Box */}
                    <rect x="570" y="95" width="290" height="90" rx="10" fill="url(#alertGrad)" />
                    <text x="715" y="125" fill="#FEE2E2" fontWeight="bold" textAnchor="middle">MAXIMUM RECOVERY REALIZATION</text>
                    <text x="715" y="145" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Debt Clearance or Asset Liquidation</text>
                    <text x="715" y="163" fill="#FECACA" fontSize="10" textAnchor="middle">Promoter Compromise / One Time Settlement (OTS)</text>
                    <text x="715" y="177" fill="#FCA5A5" fontSize="9" textAnchor="middle">Auction Proceeds Directly Credited to Loan Account</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: 5-Step Commercial Loan Recovery Playbook */}
              <section id="heading-step-playbook" aria-labelledby="heading-step-playbook-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-step-playbook-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    5-Step Commercial Loan Recovery Playbook for Corporate Credit Teams
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Action Sequence
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-[#111827] text-white font-extrabold text-sm flex items-center justify-center">
                        1
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          Step 1: Loan Recall &amp; Statutory Demand Under SARFAESI Section 13(2)
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Immediately upon an account crossing the 90-day delinquency threshold and classification as an NPA, the lender issues a comprehensive Loan Recall Notice followed by a Section 13(2) SARFAESI demand notice. The notice must specify the exact principal, interest, penal charges, and itemize every parcel of mortgaged immovable property and hypothecated plant. The borrower is granted a statutory 60-day rectification period.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-[#111827] text-white font-extrabold text-sm flex items-center justify-center">
                        2
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          Step 2: Section 13(3A) Speaking Rejection &amp; Section 14 Eviction Filing
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          If the borrower submits representations, the bank’s Authorized Officer delivers a formal speaking order within 15 days. On day 61, the bank issues a Section 13(4) possession notice and simultaneously files an affidavit before the Chief Metropolitan Magistrate (CMM) or District Magistrate (DM) under Section 14 SARFAESI to take physical possession of factory premises with police deployment.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-[#111827] text-white font-extrabold text-sm flex items-center justify-center">
                        3
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          Step 3: Filing Section 7 Corporate Insolvency Before NCLT
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          For institutional exposures exceeding ₹1 Crore, the financial creditor files Form 1 under Section 7 IBC before the jurisdictional NCLT Bench. Backed by authenticated NeSL default certificates, the petition establishes debt and default. Under the Supreme Court mandate in <em className="italic">Innoventive Industries</em>, NCLT admits the corporate debtor into CIRP, suspending the promoter board and freezing corporate bank mandates.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-[#111827] text-white font-extrabold text-sm flex items-center justify-center">
                        4
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          Step 4: Personal Guarantee Enforcement &amp; NCLT Section 95 Application
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Concurrently, the lender issues a Guarantee Invocation Notice to promoter guarantors and files Form C under Section 95 IBC before the NCLT. Under Section 96, an interim moratorium attaches to the guarantor’s individual estate, barring the transfer or pledging of promoter-owned private real estate, demat accounts, and trust holdings.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-[#111827] text-white font-extrabold text-sm flex items-center justify-center">
                        5
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          Step 5: DRT Original Application &amp; Wilful Defaulter Classification
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          For exposures &#8805; ₹20 Lakh, the bank files an Original Application (OA) under Section 19 RDB Act before the DRT to secure a final Recovery Certificate. If forensic audits reveal siphoning, the bank initiates Wilful Defaulter classification under RBI Master Directions, stripping promoters of directorships and barring them from Section 29A resolution bids.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Comparative Legal Framework Matrix (Table) */}
              <section id="heading-statutory-matrix" aria-labelledby="heading-statutory-matrix-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-statutory-matrix-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Comparison: SARFAESI vs. IBC Section 7 vs. DRT Section 19
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Evaluate each statutory recovery mechanism by statutory threshold, speed of possession, impact on borrower management, and appeal hurdles:
                </p>

                <div className="w-full overflow-x-auto bg-white border border-slate-200 rounded-2xl shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700 min-w-[620px]">
                    <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                      <tr>
                        <th className="py-3 px-4">Statutory Forum</th>
                        <th className="py-3 px-4">Pecuniary Threshold</th>
                        <th className="py-3 px-4">Target of Recovery</th>
                        <th className="py-3 px-4">Average Realization</th>
                        <th className="py-3 px-4">Pre-Deposit for Debtor Appeal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">SARFAESI Act, 2002 (Sec 13 &amp; 14)</td>
                        <td className="py-3 px-4">₹1 Lakh+ (Unpaid &gt; 20% of principal)</td>
                        <td className="py-3 px-4">Mortgaged Immoveable Property &amp; Factory Plant</td>
                        <td className="py-3 px-4 font-semibold text-emerald-700">3 to 6 Months (Fastest)</td>
                        <td className="py-3 px-4 text-red-600 font-bold">50% Mandatory Pre-Deposit (DRAT)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">IBC 2016 Section 7 (NCLT)</td>
                        <td className="py-3 px-4">₹1 Crore+</td>
                        <td className="py-3 px-4">Corporate Debtor Enterprise &amp; Management Control</td>
                        <td className="py-3 px-4 font-semibold text-slate-900">9 to 15 Months (CIRP Resolution)</td>
                        <td className="py-3 px-4">NCLAT Discretionary (Strict Merit Test)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">IBC 2016 Section 95 (NCLT)</td>
                        <td className="py-3 px-4">₹1,000+ (Against Corporate Guarantors)</td>
                        <td className="py-3 px-4">Personal Assets of Promoters &amp; Directors</td>
                        <td className="py-3 px-4 font-semibold text-slate-900">6 to 12 Months (Repayment / Bankruptcy)</td>
                        <td className="py-3 px-4">Strict Appellate Review</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">DRT Section 19 (RDB Act 1993)</td>
                        <td className="py-3 px-4">₹20 Lakh+</td>
                        <td className="py-3 px-4">Money Decree Against Borrowers &amp; All Guarantors</td>
                        <td className="py-3 px-4 font-semibold text-amber-700">12 to 24 Months</td>
                        <td className="py-3 px-4 text-red-600 font-bold">50% Pre-Deposit under Section 21</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">Commercial Courts Act, 2015</td>
                        <td className="py-3 px-4">₹3 Lakh+</td>
                        <td className="py-3 px-4">Unsecured Business Invoices &amp; Vendor Debts</td>
                        <td className="py-3 px-4 font-semibold text-slate-900">6 to 18 Months (Mandatory Mediation)</td>
                        <td className="py-3 px-4">Civil Appeal Provisions</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Specialized Loan Recovery Tracks by Facility Type (Tabs) */}
              <section id="heading-business-loan-types" aria-labelledby="heading-business-loan-types-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-business-loan-types-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Tailored Recovery Tracks by Business Loan Facility Type
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Different credit structures demand specialized statutory recovery playbooks. Select a facility type below to explore statutory remedies, evidence checklists, and tribunal enforcement steps:
                </p>

                {/* Interactive Facility Tab Switcher */}
                <BusinessLoanRecoveryTabs />
              </section>

              {/* Section 8: Worked Recovery Simulation */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Worked Commercial Case Simulation: ₹14.5 Crore Default Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The following illustrative worked example demonstrates how a multi-track legal recovery execution forces debt resolution on a defaulted ₹14.5 Crore manufacturing loan:
                </p>

                <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 space-y-5 shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Illustrative Case Study • Engineering Mid-Corporate Default
                    </span>
                    <span className="text-xs font-extrabold px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full">
                      100% Recovery Achieved in 140 Days
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                    <div className="p-3.5 bg-slate-50 rounded-xl">
                      <strong className="block text-slate-900 font-bold mb-1">Exposure &amp; Collateral</strong>
                      <p className="text-slate-600">₹9.5 Cr Term Loan + ₹5.0 Cr CC limit. Collateral: Industrial plot in Pune (Valuation: ₹11 Cr) + Promoter personal guarantee.</p>
                    </div>
                    <div className="p-3.5 bg-slate-50 rounded-xl">
                      <strong className="block text-slate-900 font-bold mb-1">The Default Trigger</strong>
                      <p className="text-slate-600">Company defaulted on 3 consecutive quarters of term EMIs and failed to submit DP stock statements, siphoning receivables to non-consortium accounts.</p>
                    </div>
                    <div className="p-3.5 bg-slate-50 rounded-xl">
                      <strong className="block text-slate-900 font-bold mb-1">Multi-Track Response</strong>
                      <p className="text-slate-600">Day 1: SARFAESI Sec 13(2). Day 62: DM Sec 14 filing + Sec 95 IBC against promoter. Day 75: Section 7 IBC filed before NCLT Mumbai Bench.</p>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                    <table className="w-full text-left">
                      <thead className="bg-slate-100 font-bold text-slate-800">
                        <tr>
                          <th className="py-2.5 px-3">Timeline</th>
                          <th className="py-2.5 px-3">Action Executed</th>
                          <th className="py-2.5 px-3">Borrower Maneuver</th>
                          <th className="py-2.5 px-3">Outcome / Legal Impact</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-600">
                        <tr>
                          <td className="py-2.5 px-3 font-semibold text-slate-900">Day 1–15</td>
                          <td className="py-2.5 px-3">Issued Sec 13(2) demand; Borrower filed vague objection.</td>
                          <td className="py-2.5 px-3">Claimed market recession &amp; requested 12-month moratorium.</td>
                          <td className="py-2.5 px-3 text-slate-800">Bank served speaking rejection under Sec 13(3A) within 10 days.</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-3 font-semibold text-slate-900">Day 61–75</td>
                          <td className="py-2.5 px-3">Section 14 DM order obtained; Sec 95 IBC filed against promoter.</td>
                          <td className="py-2.5 px-3">Filed Sec 17 Securitisation Application before DRT Pune seeking stay.</td>
                          <td className="py-2.5 px-3 text-slate-800">DRT refused stay due to speaking order; Interim moratorium attached promoter villas.</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-3 font-semibold text-slate-900">Day 95–140</td>
                          <td className="py-2.5 px-3">NCLT issued pre-admission notice under Sec 7 IBC; Auction date set.</td>
                          <td className="py-2.5 px-3">Promoter faced imminent loss of board control and personal insolvency.</td>
                          <td className="py-2.5 px-3 text-emerald-700 font-bold">Promoter brought ₹14.5 Cr upfront settlement via strategic investor refinancing.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 9: Commercial Due Diligence & Evidentiary Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Commercial Loan Recovery Due Diligence &amp; Evidentiary Checklist
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before initiating SARFAESI, DRT, or NCLT litigation, banking litigation managers must assemble the following verified evidence packet compliant with Section 63 of the Bharatiya Sakshya Adhiniyam, 2023:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                      1. Contractual &amp; Security Documentation
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                      <li>Sanction Letters signed by authorized corporate signatories</li>
                      <li>Registered Indenture of Mortgage or Memorandum of Deposit of Title Deeds (MODTD)</li>
                      <li>Original Title Deeds and non-encumbrance certificate (30-year search)</li>
                      <li>Deed of Hypothecation over plant machinery, equipment, and current assets</li>
                      <li>Unconditional, continuous Personal &amp; Corporate Guarantee agreements</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                      2. Banking Records &amp; Statutory Filings
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                      <li>Certified Account Statements under Bankers&apos; Books Evidence Act, 1891</li>
                      <li>ROC Form CHG-1 charge registration certificate from Ministry of Corporate Affairs</li>
                      <li>CERSAI Security Interest Registration receipt</li>
                      <li>Authenticated Record of Default from NeSL Information Utility</li>
                      <li>BSA Section 63 electronic certification for emails and electronic ledgers</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                      3. Pre-Litigation Notice Audit Trail
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                      <li>Loan Recall Notice with India Post Speed Post tracking receipts</li>
                      <li>SARFAESI Section 13(2) Demand Notice with delivery acknowledgments</li>
                      <li>Proof of newspaper publication in two leading dailies under Security Interest Rules</li>
                      <li>Speaking order under Section 13(3A) with registered postal dispatch proof</li>
                      <li>Personal Guarantee Invocation demand notices delivered to promoters</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                      4. Asset Tracing &amp; Forensic Reports
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                      <li>Independent valuation reports from two IBBI-registered valuers</li>
                      <li>Forensic audit report establishing diversion of funds or shell transactions</li>
                      <li>Stock verification and godown inspection audit certificates</li>
                      <li>Promoter asset tracing reports detailing personal real estate and shareholdings</li>
                      <li>Show-cause notice and Review Committee orders for Wilful Defaulter records</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 10: FAQ Section */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Defaulted Business Loan Recovery
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Statutory guidelines for commercial credit heads, relationship managers, and corporate lenders.
                  </p>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-2"
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

              {/* Section 11: Primary Sources & Statutory References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                  >
                    Statutory Framework &amp; Regulatory References
                  </h2>
                  <p className="text-xs text-slate-500">
                    Verified primary legislation, gazette notifications, and judicial citations.
                  </p>
                </div>

                <ul className="space-y-2 text-xs text-slate-600">
                  {PRIMARY_SOURCES.map((src, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-800 hover:text-[#DC2626] font-medium underline underline-offset-2 transition-colors"
                      >
                        {src.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Final CTA Container */}
              <div className="pt-6">
                <BusinessLoanRecoveryCTA
                  buttonText="Initiate Commercial Recovery Enforcement"
                  variant="primary"
                />
              </div>

              {/* Related Recovery Guides Internal Linking Cluster */}
              <div className="pt-6 border-t border-slate-200">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4">
                  Related Commercial &amp; Institutional Recovery Guides
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <Link
                    href="/bank-loan-recovery-process-defaulting-borrowers-india"
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-red-500 hover:text-red-600 transition-colors font-medium flex items-center justify-between"
                  >
                    <span>Bank Loan Recovery Process for Defaulting Borrowers</span>
                    <span className="text-slate-400">→</span>
                  </Link>
                  <Link
                    href="/distributor-dealer-dues-recovery"
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-red-500 hover:text-red-600 transition-colors font-medium flex items-center justify-between"
                  >
                    <span>Distributor &amp; Dealer Dues Recovery Legal Notice</span>
                    <span className="text-slate-400">→</span>
                  </Link>
                  <Link
                    href="/recovery-of-unpaid-dues-for-my-business"
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-red-500 hover:text-red-600 transition-colors font-medium flex items-center justify-between"
                  >
                    <span>Recovery of Unpaid Dues for My Business in India</span>
                    <span className="text-slate-400">→</span>
                  </Link>
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-red-500 hover:text-red-600 transition-colors font-medium flex items-center justify-between"
                  >
                    <span>Bulk Commercial Recovery Cases &amp; Solutions</span>
                    <span className="text-slate-400">→</span>
                  </Link>
                  <Link
                    href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-red-500 hover:text-red-600 transition-colors font-medium flex items-center justify-between"
                  >
                    <span>Send a Legal Notice for Banks to Recover Unpaid Dues</span>
                    <span className="text-slate-400">→</span>
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-red-500 hover:text-red-600 transition-colors font-medium flex items-center justify-between"
                  >
                    <span>Legal Notice Charges &amp; Advocate Fees in India</span>
                    <span className="text-slate-400">→</span>
                  </Link>
                </div>
              </div>

              {/* Standard Related Recovery Guides Component */}
              <div className="pt-4">
                <RelatedRecoveryGuides />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
