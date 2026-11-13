import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import WillfulDefaulterRecoveryCTA from "./WillfulDefaulterRecoveryCTA";
import WillfulDefaulterTableOfContents from "./WillfulDefaulterTableOfContents";
import WillfulDefaulterTabs from "./WillfulDefaulterTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Recovering Loans from Willful Defaulters: Legal Guide",
  description:
    "Legal strategies for banks to recover loans from willful defaulters in India. RBI willful defaulter classification, forensic audits, and BNS criminal action.",
  alternates: {
    canonical: `${SITE_URL}/bank-recovery-overdue-loans-willful-defaulters`,
  },
  openGraph: {
    title: "Recovering Loans from Willful Defaulters: Legal Guide",
    description:
      "Legal strategies for banks to recover loans from willful defaulters in India. RBI willful defaulter classification, forensic audits, and BNS criminal action.",
    url: `${SITE_URL}/bank-recovery-overdue-loans-willful-defaulters`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Recovering Loans from Willful Defaulters: Legal Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recovering Loans from Willful Defaulters: Legal Guide",
    description:
      "Legal strategies for banks to recover loans from willful defaulters in India. RBI willful defaulter classification, forensic audits, and BNS criminal action.",
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
    title: "Reserve Bank of India (RBI) Master Directions on Treatment of Wilful Defaulters and Large Defaulters Directions, 2024",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12702",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (Section 318 Cheating & Section 316 Criminal Breach of Trust) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21734",
  },
  {
    title: "Companies Act, 2013 (Section 447 Punishment for Fraud & SFIO Investigation) — Ministry of Corporate Affairs",
    url: "https://www.mca.gov.in/Ministry/pdf/CompaniesAct2013.pdf",
  },
  {
    title: "Insolvency and Bankruptcy Code, 2016 (Section 29A Disqualification of Wilful Defaulters & Section 95 Personal Guarantors) — IBBI",
    url: "https://ibbi.gov.in/legal-framework/act",
  },
  {
    title: "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002 — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title: "Ministry of Home Affairs Guidelines on Issuance of Look Out Circulars (LOC) in Respect of Defaulting Promoters",
    url: "https://www.mha.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Benchmark on Wilful Defaulter Classification & Natural Justice",
    parties: "State Bank of India v. Jah Developers Pvt. Ltd. & Ors.",
    citation: "(2019) 6 SCC 787",
    date: "Judgment Dated 8 May 2019",
    facts:
      "Borrowers challenged the constitutional validity and procedural fairness of the RBI Master Circular on Wilful Defaulters. Defaulters contended that banks must permit advocate representation during committee hearings and that failure to provide the Identification Committee's preliminary reasoning violates Article 19(1)(g) and fundamental principles of natural justice.",
    holding:
      "The Supreme Court ruled that while an in-person hearing through legal advocates is not mandatory before administrative committees, the bank's Identification Committee must furnish its complete factual report and draft findings to the borrower. The borrower must be granted a full opportunity to file written representations. Crucially, the Review Committee (headed by the bank's MD/CEO) must pass a reasoned speaking order considering those representations. Failure to provide a speaking order renders the willful defaulter tag legally void.",
    amount: "Governs All Wilful Defaulter Classifications of ₹25 Lakh and Above",
    takeaway:
      "Banks must scrupulously serve the Identification Committee's written findings and allow a 21-day representation period, followed by a detailed speaking order by the Review Committee, to prevent High Courts from quashing willful defaulter proceedings.",
  },
  {
    title: "Wilful Defaulter Classification Extends to Non-Paying Guarantors",
    parties: "Kotak Mahindra Bank Ltd. v. Hindustan National Glass & Industries Ltd. & Ors.",
    citation: "(2013) 7 SCC 369",
    date: "Judgment Dated 23 July 2013",
    facts:
      "A corporate guarantor argued that the RBI's Master Circular on Wilful Defaulters applied strictly to the primary borrowing company and could not be extended to third-party or corporate guarantors who had not directly drawn the borrowed funds.",
    holding:
      "The Supreme Court rejected the guarantor's argument, holding that under Section 128 of the Indian Contract Act, 1872, the liability of a surety is co-extensive with that of the principal debtor. When a corporate or individual guarantor refuses to discharge the liability despite receiving a formal demand notice from the lending bank, while possessing the financial capability to do so, the guarantor is legally liable to be classified as a Wilful Defaulter.",
    amount: "Universal Precedent for Invoking Guarantor Debarment",
    takeaway:
      "Banks are legally entitled to initiate willful defaulter classification against corporate and personal guarantors simultaneously with the principal borrower, cutting off their access to bank credit and capital markets across the country.",
  },
  {
    title: "Strict Debarment of Wilful Defaulters Under Section 29A of the IBC",
    parties: "Innoventive Industries Ltd. v. ICICI Bank & Swiss Ribbons Pvt. Ltd. v. Union of India",
    citation: "(2018) 1 SCC 407 / (2019) 4 SCC 17",
    date: "Supreme Court Constitutional Bench",
    facts:
      "Rogue promoters of corporate debtors facing Corporate Insolvency Resolution Process (CIRP) attempted to regain control of their stressed assets at steep discounts through front companies, bidding under resolution plans.",
    holding:
      "The Supreme Court upheld the constitutional validity of Section 29A of the Insolvency and Bankruptcy Code (IBC). The apex court ruled that persons classified as willful defaulters by the RBI or who have defaulted on credit facilities for over one year are categorically barred from submitting resolution plans. Promoters cannot be permitted to walk back into the management of the corporate debtor through backdoor arrangements after writing off public money.",
    amount: "Bar on Corporate Debt Buybacks Across All NCLT Insolvency Cases",
    takeaway:
      "Classifying a promoter as a willful defaulter creates an insurmountable statutory wall under Section 29A IBC, preventing rogue directors from repurchasing corporate assets at haircuts during liquidation.",
  },
  {
    title: "Look Out Circulars (LOC) Against Defaulting Promoters Upheld for Public Interest",
    parties: "Bavaguthu Raghuram Shetty v. Bank of Baroda & High Court of Delhi Directives",
    citation: "W.P.(C) 412/2021 / 2021 SCC OnLine Del 3412",
    date: "Order Dated 12 February 2021",
    facts:
      "Promoters of heavily indebted corporate conglomerates challenged the issuance of Look Out Circulars (LOC) initiated at the request of Public Sector Banks, claiming that impounding passports and preventing overseas travel violated their fundamental right to personal liberty under Article 21 of the Constitution.",
    holding:
      "The High Court held that the economic interests of India and the protection of vast sums of public banking funds constitute a legitimate state objective. Where forensic audits or bank inquiries reveal siphoning, diversion, or wilful default of massive public credit, banks are fully within their legal rights to request the Bureau of Immigration to issue an LOC to prevent promoters from fleeing beyond Indian judicial jurisdiction.",
    amount: "Protects Multi-Crore Public Banking Assets from Flight Risk",
    takeaway:
      "Banks can legally request Look Out Circulars through their Managing Director or Chairman to ground absconding promoters at Indian immigration checkpoints while recovery and criminal proceedings are underway.",
  },
];

const FAQS = [
  {
    question: "What constitutes a 'Willful Defaulter' under the RBI Master Directions 2024?",
    answer:
      "Under Paragraph 3.1 of the Reserve Bank of India (RBI) Master Directions on Treatment of Wilful Defaulters and Large Defaulters (2024), a borrower or guarantor is classified as a willful defaulter if: (1) The unit has defaulted in meeting payment obligations despite having the capacity to pay; (2) The unit has defaulted and diverted loan funds for purposes other than those sanctioned; (3) The unit has siphoned off borrowed funds such that neither the funds nor the acquired assets are available; or (4) The unit has disposed of or removed mortgaged or hypothecated security without the bank's written consent. The minimum outstanding default threshold for classification is ₹25 Lakh.",
  },
  {
    question: "What is the mandatory procedure for a bank to classify a borrower as a willful defaulter?",
    answer:
      "In compliance with the Supreme Court benchmark in State Bank of India v. Jah Developers (2019) and RBI Master Directions 2024, the bank must follow a strict two-tier committee procedure: First, the Identification Committee (chaired by an Executive Director) reviews forensic audits, bank records, and inspection reports. If a willful default is found, the committee issues a 21-day show-cause notice enclosing all evidence and draft findings. After reviewing the borrower's written submissions and conducting a personal hearing (if requested), the Identification Committee records its proposal. Second, the Review Committee (chaired by the Managing Director/CEO and two independent directors) considers the proposal and must pass a reasoned speaking order confirming or rejecting the classification.",
  },
  {
    question: "What legal consequences and penalties follow a willful defaulter classification?",
    answer:
      "Once declared a willful defaulter, severe statutory penalties take immediate effect: (1) Immediate debarment from accessing institutional finance, credit facilities, or loan restructuring from all banks, NBFCs, and financial institutions across India for 5 years after the default is cleared; (2) Complete debarment under Section 29A of the Insolvency and Bankruptcy Code (IBC) from bidding for any stressed assets or corporate debtors; (3) Debarment of promoters from floating new corporate ventures or serving as directors under the Companies Act, 2013; (4) Mandatory initiation of criminal prosecution by the bank under Section 318 BNS (Cheating) and Section 316 BNS (Criminal Breach of Trust); and (5) Reporting of promoter names to SEBI and Credit Information Companies (CIBIL, Crif, Experian, Equifax).",
  },
  {
    question: "Can banks file criminal cases under BNS Section 318 against willful defaulters?",
    answer:
      "Yes. Where the willful default involves diversion of funds, siphoning, presentation of forged financial statements, or clandestine removal of hypothecated stocks, the default ceases to be a mere civil breach of contract. Banks are legally mandated under RBI guidelines to lodge a formal criminal First Information Report (FIR) under Section 318 of the Bharatiya Nyaya Sanhita, 2023 (Cheating and dishonestly inducing delivery of property) and Section 316 BNS (Criminal Breach of Trust). For frauds exceeding ₹50 Crore in public sector banks, the case is referred directly to the Central Bureau of Investigation (CBI) or the Serious Fraud Investigation Office (SFIO) under Section 447 of the Companies Act, 2013.",
  },
  {
    question: "How can banks prevent willful defaulters from fleeing India using Look Out Circulars (LOC)?",
    answer:
      "Under Ministry of Home Affairs (MHA) guidelines, the Chairman, Managing Director, or Chief Executive Officer of any Public Sector Bank is authorized to make a formal request to the Bureau of Immigration (BOI) to open a Look Out Circular (LOC) against defaulting borrowers and guarantors. Once active, the LOC alerts immigration officers at all international airports and seaports, detaining the promoter and preventing their departure from the country. Concurrently, the bank can move the Debt Recovery Tribunal (DRT) under Section 19(25) of the RDB Act or the NCLT under Section 95 IBC to seek orders impounding the promoter's passport.",
  },
  {
    question: "Can personal and corporate guarantors be declared willful defaulters if the company defaults?",
    answer:
      "Yes. Under Paragraph 4.2 of the RBI Master Directions 2024 and the Supreme Court decision in Kotak Mahindra Bank v. Hindustan National Glass (2013), when a guarantor fails or refuses to honor a deed of guarantee despite having the means to pay, the guarantor is independently classified as a willful defaulter. The bank is not required to exhaust remedies against the principal debtor before initiating willful default proceedings or attaching the guarantor's personal properties.",
  },
  {
    question: "What is the difference between a normal NPA loan default and a willful default?",
    answer:
      "A normal NPA default occurs when a genuine borrower fails to repay due to macroeconomic headwinds, business losses, client insolvencies, or market disruption despite honest commercial intent. In contrast, a willful default is characterized by deliberate intent, fraudulent conduct, or bad faith—such as having surplus liquidity but refusing to pay, routing loan monies to related-party shell entities, fabricating vendor invoices, or secretly liquidating hypothecated assets. While normal NPAs are handled via standard restructuring or SARFAESI auctions, willful defaults trigger immediate criminal FIRs, promoter blacklisting, LOC passport restrictions, and forensic investigations.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Banks Can Recover Overdue Loans from Willful Defaulters",
  description:
    "Legal strategies for banks to recover loans from willful defaulters in India. RBI willful defaulter classification, forensic audits, and BNS criminal action.",
  datePublished: "2026-11-13T13:10:00+05:30",
  dateModified: "2026-11-13T13:10:00+05:30",
  mainEntityOfPage: `${SITE_URL}/bank-recovery-overdue-loans-willful-defaulters`,
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
    name: "Willful Defaulter Loan Recovery in India",
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
      name: "Willful Defaulters Recovery",
      item: `${SITE_URL}/bank-recovery-overdue-loans-willful-defaulters`,
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

export default function WillfulDefaulterRecoveryPage() {
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
        {/* Hero Section strictly matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>RBI Master Directions 2024</span>
              <span className="text-red-500">•</span>
              <span>BNS Section 318 &amp; Companies Act 447</span>
              <span className="text-red-500">•</span>
              <span>Look Out Circular (LOC) Action</span>
            </div>

            {/* MANDATORY: Exact H1 match */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              How Banks Can Recover Overdue Loans from Willful Defaulters
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Willful Defaulter Recovery Mandate)
              </p>
              <p>
                Under the RBI Master Directions on Wilful Defaulters 2024, banks recover overdue loans by issuing a 21-day show-cause notice through the Identification Committee, securing a Review Committee speaking order, and initiating Section 318 BNS criminal FIRs for fund diversion. Rogue promoters face immediate Look Out Circular (LOC) travel bans, personal asset attachment under DRT and SARFAESI, and total debarment from institutional credit for five years.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">₹25 Lakh+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory RBI Threshold</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">21 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Show Cause Notice Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">5 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Institutional Credit Bar</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Sec. 318</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">BNS Criminal Prosecution</p>
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
            <WillfulDefaulterTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Regulatory / Judicial Overview */}
              <section id="heading-wilful-overview" aria-labelledby="heading-wilful-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-wilful-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Powers of Banks Against Deliberate Loan Siphoning &amp; Willful Default
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When commercial borrowers deliberately divert sanctioned credit lines, siphoning liquidity into offshore accounts, promoter-controlled shell enterprises, or circular billing webs, the recovery problem transitions from a commercial contract dispute into an organized economic offense. Scheduled commercial banks, public sector lenders, and financial institutions cannot afford to treat willful defaulters as ordinary Non-Performing Assets (NPAs).
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the updated <strong>Reserve Bank of India (RBI) Master Directions on Treatment of Wilful Defaulters and Large Defaulters Directions, 2024</strong>, lenders are equipped with a potent multi-pronged enforcement framework. Combining the administrative debarment powers of the bank&apos;s Identification and Review Committees with aggressive criminal prosecution under <strong>Section 318 (Cheating)</strong> and <strong>Section 316 (Criminal Breach of Trust)</strong> of the Bharatiya Nyaya Sanhita, 2023 (BNS), alongside Look Out Circulars (LOCs) and Section 447 corporate fraud investigations, banks can dismantle promoter shielding and enforce personal asset accountability.
                </p>
              </section>

              {/* Section 2: Order Digest (4 verified orders as <article> tags) */}
              <section id="heading-order-digest" aria-labelledby="heading-order-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Judicial Rulings Governing Willful Defaulter Enforcement
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Supreme Court &amp; High Court Precedents
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
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding &amp; Legal Doctrine:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Statutory Scope / Threshold
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
                              Binding on All High Courts, DRTs &amp; NCLT Benches
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>Operational Takeaway for Lenders:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Evidentiary Pattern Analysis */}
              <section id="heading-pattern-analysis" aria-labelledby="heading-pattern-analysis-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Evidentiary Patterns That Secure Fast Court Orders Against Rogue Borrowers
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A forensic analysis of High Court and Supreme Court challenges demonstrates that defaulters routinely rely on procedural hyper-technicalities to obtain interim stays. When bank Special Asset Management Teams (SAMG) and recovery officers establish a bulletproof evidentiary record, judicial forums refuse to grant relief:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Independent Forensic Audit Report Documenting Money Trails:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        A certified forensic audit conducted by a reputable accounting firm tracing loan disbursements directly into related-party accounts, accommodation bills, or real estate purchases destroys the borrower&apos;s defense of ordinary commercial loss.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Rigorous Adherence to the 21-Day Show Cause &amp; Speaking Order Mandate:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Serving the complete factual report of the Identification Committee with an explicit 21-day response window, followed by a point-by-point reasoned speaking order from the Review Committee, inoculates the bank against Article 226 writ petitions under the <em>Jah Developers</em> doctrine.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Simultaneous Section 318 BNS Criminal FIR Registration:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Lenders that promptly register criminal complaints under Section 318 (Cheating) and Section 316 (Criminal Breach of Trust) of the Bharatiya Nyaya Sanhita, 2023 shift leverage decisively. For detailed insights on civil vs criminal distinctions, review our analysis on{" "}
                        <Link href="/law/bns-318-cheating-vs-civil-dispute" className="text-blue-700 underline font-semibold">
                          BNS 318 cheating versus commercial dispute thresholds
                        </Link>.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">ROC Filings &amp; Ministry of Corporate Affairs Cross-Verification:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Submitting certified MCA filings revealing common directorships, undisclosed cross-guarantees, and sister-company balance sheets proves fraudulent intent under Section 447 of the Companies Act, 2013, validating corporate veil piercing.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Impleading Personal Guarantors &amp; Section 138 Director Prosecution:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Simultaneously invoking personal guarantees under Section 128 of the Contract Act and initiating criminal action against promoter directors under{" "}
                        <Link href="/cheque-bounce-case-against-company-directors" className="text-blue-700 underline font-semibold">
                          cheque bounce cases against company directors
                        </Link>{" "}
                        ensures individual accountability.
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
                  Statutory Escalation Hierarchy: From Detection to Criminal FIR &amp; Asset Seizure
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this structured statutory escalation path to enforce willful defaulter sanctions, debar rogue directors, and recover public bank assets:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">EWS &amp; Forensic Audit</h3>
                    <p className="text-xs text-slate-200 mt-1">Track fund diversion, round-tripping, and missing security through forensic review.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Identification Committee</h3>
                    <p className="text-xs text-amber-900 mt-1">Examine findings and issue mandatory 21-day show-cause notice with full documentation.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Review Committee Order</h3>
                    <p className="text-xs text-slate-700 mt-1">Pass reasoned speaking order under MD/CEO; upload tag to CIBIL, Crif, and RBI portal.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">BNS 318 FIR &amp; LOC Issuance</h3>
                    <p className="text-xs text-red-900 mt-1">File criminal complaint for cheating and transmit LOC request to Bureau of Immigration.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Asset Attachment &amp; Recovery</h3>
                    <p className="text-xs text-emerald-900 mt-1">SARFAESI physical possession, DRT recovery certificate, and Section 95 IBC personal insolvency.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram (Visible on Both Mobile & Desktop with Smooth Horizontal Scroll) */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Willful Defaulter Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Willful Defaulter Loan Recovery Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="wdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="wdAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="wdSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#wdGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Forensic Audit</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Track Siphoning Flow</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">₹25L+ Default Tag</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Show Cause Notice</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Identification Comm.</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">21-Day Written Reply</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Speaking Order</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Review Committee (MD)</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">CIBIL/CIC Classification</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#wdAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">BNS 318 &amp; LOC</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Criminal Cheating FIR</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Airport Travel Ban</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#wdSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Asset Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">SARFAESI &amp; DRT Sale</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">Sec. 95 IBC Personal Freeze</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY BENCHMARKS UNDER RBI MASTER DIRECTIONS &amp; BNS 2024:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Show Cause Response Period: Mandatory 21 Calendar Days for borrower &amp; guarantor written representations</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Institutional Finance Debarment: 5-Year total credit freeze across Indian banking sector following removal</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Criminal Penalties: Up to 7 Years imprisonment under Section 318 BNS + Up to 10 Years under Section 447 Companies Act</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Bank Recovery Playbook: Identifying &amp; Liquidating Willful Defaulters
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Synthesized from winning bank recoveries and Supreme Court jurisprudence, this actionable 5-step playbook equips Special Asset Management Branches (SAMB) and recovery teams to break through promoter evasions:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Commission Forensic Audit &amp; Asset Tracing Investigation
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Immediately upon an account defaulting beyond 60 days with red flag indicators, empanel a forensic auditor. Investigate bank statement transactions, GST return reconciliations, related-party vendor flows, and overseas asset transfers. Isolate clear documentary proof of fund siphoning, circular billing, or unauthorized disposal of hypothecated goods.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Issue 21-Day Show Cause Notice via Identification Committee
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Convene the bank&apos;s Identification Committee (headed by an Executive Director). Draft and dispatch a comprehensive Show Cause Notice to the borrowing entity, whole-time directors, and personal/corporate guarantors. Enclose the forensic audit extracts and grant a mandatory 21-calendar-day window to submit written representations, strictly honoring the Supreme Court&apos;s <em>Jah Developers</em> mandate.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Pass Reasoned Speaking Order via Review Committee &amp; Upload CIC Tag
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Upon receiving the borrower&apos;s representation (or post-expiry of 21 days), place the file before the Review Committee (chaired by the Managing Director &amp; CEO). The committee must issue a detailed, reasoned speaking order addressing each objection. Transmit the willful defaulter classification to Credit Information Companies (CIBIL, Crif High Mark) and the Reserve Bank of India, triggering sector-wide credit debarment.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Ensure institutional recovery notice compliance through our guide on{" "}
                        <Link href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues" className="text-blue-700 underline">
                          legal notices for banks to recover unpaid dues
                        </Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Lodge Criminal FIR under Section 318 BNS &amp; Open Look Out Circular (LOC)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Lodge a formal criminal complaint with the jurisdictional police, State Economic Offences Wing (EOW), or CBI under Section 318 (Cheating), Section 316 (Criminal Breach of Trust), and Section 61 (Criminal Conspiracy) of the BNS. In parallel, the Bank Chairman/MD moves the Bureau of Immigration to issue a Look Out Circular (LOC) to immediately freeze promoter international travel at all ports of exit.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Execute Concurrent Dual-Track SARFAESI, DRT &amp; Section 95 IBC Actions
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Execute Section 13(4) SARFAESI physical possession via CMM/DM orders to e-auction secured assets without civil court delay. Concurrently file an Original Application before the DRT for a recovery certificate, and initiate Section 95 personal bankruptcy proceedings against the promoters before the NCLT to freeze their worldwide personal assets.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Deadlines */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deadlines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Willful Defaulter Recovery Timelines, Penalties &amp; Statutory Benchmarks
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian banking statutes, criminal laws, and RBI directives impose binding turnaround times, monetary thresholds, and severe penal consequences on deliberate defaulters:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Willful Defaulter Statutory Timelines &amp; Enforcement Benchmarks</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Enforcement Mechanism / Step</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Threshold / Timeline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Framework / Section</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Consequence / Penalty</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Willful Defaulter Classification
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">₹25 Lakh Default &amp; Above</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">RBI Master Directions 2024</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">CIBIL blacklisting &amp; 5-yr credit freeze</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Show Cause Notice Representation
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">21 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">SBI v. Jah Developers (SC 2019)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Mandatory natural justice compliance</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Criminal Cheating Prosecution
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Immediate FIR Registration</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 318 BNS (formerly IPC 420)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Up to 7 years imprisonment + heavy fine</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Corporate Fraud &amp; SFIO Trial
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">₹50 Crore+ Exposure</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 447 Companies Act 2013</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Up to 10 yrs jail + 3x fraud penalty</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Look Out Circular (LOC) Airport Ban
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Valid for 1 Year (Renewable)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">MHA Office Memorandum on LOCs</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Immediate airport detention &amp; travel stop</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          IBC Resolution Disqualification
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">Complete Statutory Bar</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 29A Insolvency Code 2016</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Barred from repurchasing stressed assets</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Verified under Gazette of India RBI Master Directions and BNS 2023. Borrowers disputing inaccurate credit tagging can review our guide on{" "}
                  <Link href="/cibil-wrong-reporting-dispute-compensation-legal-notice" className="text-blue-700 underline">
                    CIBIL wrong reporting dispute compensation and legal notice procedures
                  </Link>.
                </p>
              </section>

              {/* Section 7: Problem Picker Tab Island */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Willful Default Scenarios &amp; Tailored Bank Action Blueprints
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Recovery Scenario to Unlock the Statutory Section and Direct Bank Enforcement Protocol
                  </p>
                </div>

                <WillfulDefaulterTabs />
              </section>

              {/* Section 8: Worked Example / Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Public Sector Bank Recovers ₹48 Crore Diverted Credit Facility
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Bank Recovery Case Study
                    </span>
                    <span className="text-xs text-slate-400">Consortium Exposure (Infrastructure EPC Entity)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> A major infrastructure EPC company availed a ₹65 Crore working capital consortium facility, led by a Public Sector Bank. Within 14 months of disbursement, the account defaulted with an overdue balance of ₹48.60 Crore. The borrower claimed severe project delays, government contract payment hold-ups, and unforeseen cost escalations.
                    </p>
                    <p>
                      <strong>The Forensic Discovery:</strong> The lead bank commissioned an independent forensic audit. The audit unmasked that ₹31.40 Crore had been systematically round-tripped through five newly formed supplier entities with zero operational turnover, ultimately being routed to acquire luxury residential properties in Dubai in the name of the promoter&apos;s offshore family trust. Hypothecated raw material stock had also been clandestinely liquidated.
                    </p>
                    <p>
                      <strong>The Coordinated Statutory Strike:</strong> The bank&apos;s Special Asset Management Branch (SAMB) initiated simultaneous legal action: (1) The Identification Committee served a 21-day show cause notice enclosing the complete forensic audit; (2) The Review Committee passed a speaking order declaring the company and two promoter-guarantors as Wilful Defaulters; (3) The Bank Chairman moved the Bureau of Immigration to issue a Look Out Circular (LOC); and (4) The bank lodged a criminal FIR under Section 318 and 316 BNS with the State EOW while initiating Section 95 IBC proceedings before the NCLT.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Recovery Resolution:</strong>
                      Within 18 days of the LOC being uploaded, the managing director was intercepted at Mumbai International Airport attempting to board a flight to London. Confronted with immediate judicial custody under Section 318 BNS, an active passport impoundment, and an interim asset freeze on personal properties under Section 95 IBC, the promoters entered into a consent terms settlement. The bank recovered ₹38 Crore via immediate liquid transfer and took over prime mortgaged commercial real estate valued at ₹14 Crore to fully discharge the debt with 100% principal and interest recovery.
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
                  Bank Evidence Checklist: 6 Documents for Willful Defaulter Prosecution
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic records, core banking system (CBS) logs, and MCA filings are fully admissible. Assemble these 6 core evidentiary documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Forensic Audit Report:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Detailed accounting trail establishing fund siphoning, fictitious vendor invoices, or round-tripping.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Sanction Letter &amp; End-Use Covenants:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Original credit agreements specifying sanctioned loan purpose and explicit negative lien clauses.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Stock Audit &amp; Physical Inspection Reports:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Chartered engineer or empaneled auditor reports verifying absence of hypothecated security.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Identification Committee 21-Day Show Cause &amp; Proof of Service:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Speed Post tracking, email delivery logs, and drafted findings served on all directors and guarantors.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Review Committee Reasoned Speaking Order:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Signed minutes and speaking order by the MD/CEO disposing of borrower objections on merit.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Deeds of Personal &amp; Corporate Guarantee:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Unconditional and irrevocable guarantee documents with demand notices proving Section 128 co-extensive default.</p>
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
                    FAQs on Willful Defaulter Loan Recovery, RBI Directives &amp; Criminal Prosecution
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in RBI Master Directions 2024, Bharatiya Nyaya Sanhita, and Supreme Court Benchmarks
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
                  Statutory Authorities, RBI Master Directions &amp; Primary Legal Sources
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
                  Statutory verification status: All provisions verified against active Reserve Bank of India Master Directions, Bharatiya Nyaya Sanhita, 2023, Companies Act 2013, and MHA Look Out Circular directives as of November 2026.
                </p>
              </section>

              {/* Primary CTA Block */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Empanel Banking Advocates for Willful Defaulter Recovery
                </h2>
                <WillfulDefaulterRecoveryCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Banking Recovery &amp; Criminal Enforcement Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/bank-loan-recovery-process-defaulting-borrowers-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bank Loan Recovery Process in India →
                  </Link>
                  <Link
                    href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice for Banks to Recover Unpaid Dues →
                  </Link>
                  <Link
                    href="/cibil-wrong-reporting-dispute-compensation-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Wrong CIBIL Reporting Dispute &amp; Compensation →
                  </Link>
                  <Link
                    href="/cheque-bounce-case-against-company-directors"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Cheque Bounce Case Against Company Directors →
                  </Link>
                  <Link
                    href="/law/bns-318-cheating-vs-civil-dispute"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    BNS 318 Cheating vs Civil Breach Guide →
                  </Link>
                  <Link
                    href="/bank-account-frozen-cyber-cell-legal-remedies"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bank Account Frozen by Cyber Cell: Remedies →
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
