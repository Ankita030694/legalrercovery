import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ArbitralAwardExecutionTableOfContents from "./ArbitralAwardExecutionTableOfContents";
import ArbitralAwardExecutionScenarioTabs from "./ArbitralAwardExecutionScenarioTabs";
import ArbitralAwardExecutionCTA from "./ArbitralAwardExecutionCTA";

export const revalidate = 86400;

const CANONICAL_URL = `${SITE_URL}/executing-arbitral-award-section-36-against-developer-psu-india`;
const PAGE_TITLE = "Enforce Arbitral Award (s.36): 100% Deposit & IBC Leverage";
const PAGE_DESCRIPTION =
  "Section 34 filing gives no automatic stay. Enforce Section 36 execution, compel 100% court deposit, invoke NITI Aayog 75% PSU payout rules, or trigger IBC.";
const PAGE_H1 =
  "Won the Arbitration Award, Still Waiting for Money? Enforcing Section 36 Execution, 100% Court-Deposit Mandates, PSU 75% Payout Rules & IBC";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("Executing Arbitral Award Section 36 CPC Against Developer and PSU India"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: PAGE_H1,
  description: PAGE_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder",
    worksFor: {
      "@type": "Organization",
      name: "AMA Legal Solutions",
      url: "https://www.amalegalsolutions.com",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  datePublished: "2026-11-16T10:00:00+05:30",
  dateModified: "2026-11-16T10:00:00+05:30",
  inLanguage: "en-IN",
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Infrastructure & EPC Recovery",
      item: `${SITE_URL}/industries/construction-epc-contractor-recovery`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Arbitral Award Execution Section 36",
      item: CANONICAL_URL,
    },
  ],
};

const TABLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Table",
  about: "Comparative Legal Rails for Enforcing Unpaid Arbitral Awards Against Developers and PSUs",
};

const FAQS = [
  {
    question: "Does the filing of a Section 34 petition automatically stay execution of an arbitral award in India?",
    answer:
      "No. Following the 2015 amendment to Section 36 of the Arbitration and Conciliation Act, 1996, the filing of an application under Section 34 to set aside an arbitral award does not operate as an automatic stay of the award. The judgment debtor must file a separate application under Section 36(2) seeking a stay. Under Section 36(3), the court, while considering a grant of stay for a money award, is statutorily mandated to follow the principles governing stay of money decrees under Order XLI Rule 5 of the Code of Civil Procedure (CPC), 1908. As affirmed by the Supreme Court in Manish v. Godawari Marathwada Irrigation Development Corp. (2019), courts routinely impose a condition of 100% deposit of the awarded amount (in cash or bank guarantee) before granting any interim stay.",
  },
  {
    question: "What is the NITI Aayog / Vivad se Vishwas 75% payout circular for PSU arbitral awards?",
    answer:
      "Under directives issued by the Cabinet Committee on Economic Affairs (CCEA), NITI Aayog Office Memorandums, and the Ministry of Finance Vivad se Vishwas II scheme, Central Public Sector Undertakings (CPSUs), Government Departments, and autonomous authorities (such as NHAI, NTPC, BHEL, and Indian Railways) are mandated to pay 75% of the arbitral award amount to the contractor against an unconditional Bank Guarantee (BG), even if the PSU has challenged the award under Section 34. This policy prevents prolonged litigation from choking working capital in the infrastructure sector. The funds must be deposited into a designated escrow account to service project lenders and subcontractors.",
  },
  {
    question: "Can an arbitral award holder initiate Corporate Insolvency (IBC CIRP) against a defaulting corporate developer?",
    answer:
      "Yes. The Supreme Court in a landmark 3-Judge Bench ruling in Kotak Mahindra Bank Ltd. v. A. Balakrishnan (2022) 9 SCC 186 established that an arbitral award or money decree constitutes a crystallized 'debt'. Non-payment of such an award creates a default under the Insolvency and Bankruptcy Code, 2016 (IBC). If the awarded default amount exceeds the statutory threshold of ₹1 Crore, the contractor can serve a 10-day statutory demand notice under Section 8 of the IBC. If unpaid, the contractor can file a Section 9 CIRP petition before the NCLT. Because the underlying dispute has merged into the arbitral award, the corporate debtor cannot raise bogus 'pre-existing dispute' defenses.",
  },
  {
    question: "How do Garnishee Proceedings under CPC Order XXI Rule 46 operate against a developer's bank accounts?",
    answer:
      "Under Order XXI Rule 46 and Rules 46A to 46I of the Code of Civil Procedure, 1908, the executing court issues a Garnishee Order (Notice to Garnishee) attaching funds held by third parties on behalf of the judgment debtor. In construction recovery, the contractor can attach: (1) Developer project bank accounts, (2) Dedicated RERA Escrow accounts, (3) Receivables due from commercial tenants or flat buyers paying construction-linked installments, and (4) Letters of Credit or milestone disbursements from project financing institutions. The garnishee bank is prohibited from releasing funds to the debtor and must deposit them directly into the court registry.",
  },
  {
    question: "Can the Government or a PSU claim exemption from depositing 100% of the arbitral award under Order XXVII Rule 8A of CPC?",
    answer:
      "No. The Supreme Court in Pam Developments Pvt. Ltd. v. State of West Bengal (2019) 8 SCC 112 explicitly rejected this argument. The Court held that Order XXVII Rule 8A of the CPC does not grant the Government or PSUs any automatic exemption or special privilege from furnishing security or cash deposits. The provisions of Section 36(3) of the Arbitration Act prevail, and government entities must deposit 100% of the money award or provide sufficient bank guarantees exactly like any private commercial litigant.",
  },
  {
    question: "What is the statutory limitation period for filing an execution petition under Section 36?",
    answer:
      "An arbitral award is enforced under Section 36 in the same manner as if it were a decree of a Civil Court. Under Article 136 of the Limitation Act, 1963, the limitation period for enforcing a decree or order of any civil court is twelve (12) years from the date when the decree or order becomes enforceable. However, under Section 36(1), execution can be filed immediately upon the expiry of the 90-day Section 34 challenge period, or even earlier if the court does not grant a stay upon an application under Section 36(2). Contractors should file execution within 90 to 120 days of the award to preempt asset siphoning.",
  },
  {
    question: "What post-award interest rate is applicable if the arbitral tribunal did not specify an interest rate in the award?",
    answer:
      "Under Section 31(7)(b) of the Arbitration and Conciliation Act, 1996, unless the arbitral tribunal otherwise directs, a sum directed to be paid by an arbitral award carries statutory interest at the rate of two percent (2%) higher than the current rate of interest determined by the Reserve Bank of India, or 18% per annum (under the pre-2015 regime), from the date of the award to the date of actual payment. This steep post-award interest accumulates continuously during Section 34 delay tactics, increasing the financial liability of the defaulting developer or PSU.",
  },
];

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

const PRIMARY_SOURCES = [
  {
    title: "Arbitration and Conciliation Act, 1996 (Sections 31, 34, 36 & 37) — Legislative Department, Ministry of Law and Justice",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXI Execution Rules 41, 46, 46A–I & Order XLI Rule 5)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Insolvency and Bankruptcy Code, 2016 (Sections 7, 8 & 9) — Insolvency and Bankruptcy Board of India (IBBI)",
    url: "https://ibbi.gov.in/legal-framework/act",
  },
  {
    title: "Cabinet Committee on Economic Affairs (CCEA) & NITI Aayog OM on Release of 75% Arbitral Award Against Bank Guarantee",
    url: "https://www.niti.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records & Award Execution Evidence)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "The Limitation Act, 1963 (Article 136 — 12-Year Decree Execution Limitation)",
    url: "https://www.indiacode.nic.in/handle/123456789/1586",
  },
];

const COURT_PRECEDENTS = [
  {
    parties: "Manish v. Godawari Marathwada Irrigation Development Corporation",
    citation: "Special Leave to Appeal (C) Nos. 11760-11761/2019, Supreme Court of India",
    date: "Order Dated 26 September 2019",
    facts:
      "The Bombay High Court had granted an unconditional stay on execution of an arbitral money award pending Section 34 challenge without requiring a 100% pre-deposit. The contractor appealed to the Supreme Court.",
    holding:
      "The Supreme Court set aside the High Court order, holding that under Section 36(3) of the Arbitration Act read with Order XLI Rule 5 CPC, stay of an arbitral award for payment of money cannot be granted unconditionally. The standard judicial condition is 100% deposit (either fully in cash or part cash and part solvent bank guarantee). The Court directed 100% deposit as a condition precedent for maintaining the stay.",
    takeaway:
      "Contractors can strictly oppose any Section 34 stay petition and compel developers and PSUs to deposit 100% of the awarded sum directly into court registry.",
  },
  {
    parties: "Hindustan Construction Company Ltd. (HCC) & Anr. v. Union of India",
    citation: "(2019) SCC OnLine SC 1520 / (2020) 17 SCC 324, Supreme Court of India",
    date: "Judgment Dated 27 November 2019",
    facts:
      "HCC and other major infrastructure contractors challenged Section 87 of the Arbitration Act (introduced via the 2019 Amendment), which attempted to restore the pre-2015 automatic stay regime for pre-2015 arbitrations.",
    holding:
      "A 3-Judge Bench struck down Section 87 as unconstitutional, arbitrary, and violative of Article 14. The Supreme Court reaffirmed the BCCI v. Kochi Cricket ruling: Section 36(2) applies to all Section 34 filings, meaning mere filing of Section 34 never creates an automatic stay. Creditors can execute money awards immediately unless an express stay is obtained upon depositing money.",
    takeaway:
      "Public entities and private developers can no longer freeze contractor execution dockets simply by lodging a Section 34 appeal.",
  },
  {
    parties: "Pam Developments Pvt. Ltd. v. State of West Bengal",
    citation: "(2019) 8 SCC 112, Supreme Court of India",
    date: "Judgment Dated 12 July 2019",
    facts:
      "The State Government argued that under Order XXVII Rule 8A of the CPC, the Government is exempt from the requirement of furnishing security or pre-deposits while seeking a stay of decree execution.",
    holding:
      "The Supreme Court ruled that the Arbitration Act is a specialized code that overrides the general provisions of the CPC. Order XXVII Rule 8A does not confer any special privilege on the Government or PSUs to evade depositing arbitral award sums. The 100% security requirement under Section 36(3) applies identically to state instrumentalities.",
    takeaway:
      "PSUs like NHAI, NTPC, state PWDs, and municipal bodies must furnish 100% cash/bank guarantee security to stay execution; sovereign immunity claims are statutorily invalid.",
  },
  {
    parties: "Kotak Mahindra Bank Ltd. v. A. Balakrishnan & Anr.",
    citation: "(2022) 9 SCC 186, 3-Judge Bench, Supreme Court of India",
    date: "Judgment Dated 30 May 2022",
    facts:
      "The corporate debtor argued that an arbitral award or recovery certificate is only an enforcement instrument and does not give rise to a fresh debt or cause of action for initiating CIRP under Section 7 or Section 9 of the IBC.",
    holding:
      "A 3-Judge Bench held that a decree-holder or arbitral award-holder is a financial or operational creditor. The crystallization of an arbitral award gives rise to a fresh liability and a new period of limitation. If unpaid, the award holder can maintain an insolvency petition before the NCLT, because the underlying commercial dispute stands resolved and merged into the award.",
    takeaway:
      "Arbitral awards exceeding ₹1 Crore against private developers can be directly leveraged into NCLT insolvency proceedings to enforce instant settlement.",
  },
];

export default function ExecutingArbitralAwardSection36Page() {
  const breadcrumbItems = [
    { label: "Infrastructure & EPC Recovery", href: "/industries/construction-epc-contractor-recovery" },
    { label: "Section 36 Arbitral Award Execution", href: "/executing-arbitral-award-section-36-against-developer-psu-india" },
  ];

  return (
    <>
      {/* Structured Data Schemas */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TABLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            {/* Hero Eyebrow Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>Arbitration Act s.36(2)–(3)</span>
              <span className="text-red-500">&bull;</span>
              <span>IND-07 Infrastructure &amp; EPC</span>
              <span className="text-red-500">&bull;</span>
              <span>100% Pre-Deposit Mandate</span>
            </div>

            {/* Single Page H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {PAGE_H1}
            </h1>

            {/* Executive Statutory Summary Box (40-60 words below H1) */}
            <div
              aria-label="Statutory Summary"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &bull; Statutory Summary
              </span>
              Under Section 36(2)–(3) of the Arbitration Act, filing a Section 34 challenge provides zero automatic stay. Contractors holding unpaid arbitral awards against private developers or PSUs can execute immediately as a Civil Court decree under CPC Order XXI, compel 100% cash/bank guarantee court deposit under the{" "}
              <em>Manish</em> doctrine, enforce NITI Aayog&apos;s 75% immediate PSU payout circular, or trigger NCLT insolvency via{" "}
              <Link
                href="/industries/construction-epc-contractor-recovery"
                className="text-red-400 hover:text-red-300 underline font-semibold"
              >
                EPC contractor debt recovery mechanisms
              </Link>{" "}
              under the <em>Kotak Mahindra Bank</em> ruling.
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">0 Stay</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  s.34 Filing Does Not Stall Execution
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% Cash/BG</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Mandatory Stay Deposit (s.36(3))
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">75% Payout</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  NITI Aayog Release Against BG
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">&gt;&rupee;1 Cr IBC</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Kotak Doctrine Insolvency Trigger
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Layout Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumbs Navigation */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          {/* 2-Column Split: Left Sticky TOC + Right Content */}
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Sticky Table of Contents Component */}
            <ArbitralAwardExecutionTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Executive Summary */}
              <section
                id="heading-overview"
                aria-labelledby="heading-overview-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-4"
              >
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block mb-1">
                    Section 36 Enforcement Architecture
                  </span>
                  <h2
                    id="heading-overview-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    Executive Summary: Enforcing Arbitral Awards Against Developers &amp; PSUs
                  </h2>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    In India&apos;s infrastructure, civil engineering, and EPC contracting ecosystem, securing an arbitral award is often only half the commercial battle. For decades, defaulting project developers, highway authorities, state public works departments, and central public sector undertakings (PSUs) relied on a notorious delay strategy: filing routine, unmerited setting-aside applications under Section 34 of the Arbitration and Conciliation Act, 1996 to force contractors into multi-year judicial limbo while retaining awarded working capital.
                  </p>
                  <p>
                    The legal landscape changed definitively with the Arbitration Amendment Act, 2015 and successive landmark rulings by the Supreme Court of India. Today,{" "}
                    <strong>Section 36(2) eliminates the archaic doctrine of &apos;automatic stay&apos;</strong>. The mere lodging of a Section 34 challenge does not prevent the award holder from executing the award. Under Section 36(3), if a judgment debtor seeks an interim stay of a money award, the executing court must apply the rigorous standards of Order XLI Rule 5 of the Code of Civil Procedure (CPC), 1908. As established in{" "}
                    <em>Manish v. Godawari Marathwada Irrigation Development Corp.</em>, courts routinely demand 100% court deposit of the awarded amount (principal plus statutory interest) before any stay is granted.
                  </p>
                  <p>
                    Furthermore, contractors executing against government agencies and PSUs (such as NHAI, CPWD, NTPC, or state metro corporations) possess an executive remedy: the{" "}
                    <strong>NITI Aayog &amp; CCEA Office Memorandum on Construction Sector Liquidity</strong>, bolstered by the Vivad se Vishwas II framework. Under these government directives, PSUs are mandated to release 75% of the arbitral award amount to the contractor against a Bank Guarantee (BG), even while their Section 34 challenge remains pending. When combined with the Supreme Court&apos;s 3-Judge Bench ruling in{" "}
                    <em>Kotak Mahindra Bank Ltd. v. A. Balakrishnan</em>—which held that an arbitral award constitutes an independent &apos;debt&apos; allowing CIRP initiation under the Insolvency and Bankruptcy Code (IBC), 2016—contractors hold multi-rail enforcement leverage to achieve complete liquidity realization.
                  </p>
                </div>
              </section>

              {/* Section 2: 4-Rail Comparison Matrix */}
              <section
                id="heading-remedy-matrix"
                aria-labelledby="heading-remedy-matrix-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-6"
              >
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block mb-1">
                    Multi-Remedy CFO Evaluation Matrix
                  </span>
                  <h2
                    id="heading-remedy-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    4-Rail Enforcement Matrix: Section 36 vs Deposit vs PSU 75% vs IBC
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Side-by-side comparative analysis of the four primary legal avenues available to award holders for extracting liquid payments from private builders and public entities.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 sm:p-4 rounded-tl-xl font-bold">Enforcement Rail</th>
                        <th className="p-3 sm:p-4 font-bold">Governing Statute / Hook</th>
                        <th className="p-3 sm:p-4 font-bold">Pecuniary / Debt Floor</th>
                        <th className="p-3 sm:p-4 font-bold">Statutory Timeline</th>
                        <th className="p-3 sm:p-4 font-bold">Pre-Deposit Requirement</th>
                        <th className="p-3 sm:p-4 rounded-tr-xl font-bold">Enforceability &amp; Asset Freeze</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-4 font-extrabold text-slate-900">
                          Rail 1: CPC Order XXI Execution
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          Arbitration Act s.36(1) read with CPC Order XXI Rules 11, 41, 46, 54
                        </td>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">
                          Commercial Court / High Court pecuniary limit (&ge;&rupee;3 Lakhs / &ge;&rupee;2 Crores)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          6 to 12 Months to asset attachment
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          Execution court fee varies by State (nominal or slab-capped)
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">
                          Direct Garnishee freeze of RERA escrow, current accounts &amp; land seizure
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50 transition-colors bg-red-50/30">
                        <td className="p-3 sm:p-4 font-extrabold text-slate-900">
                          Rail 2: Section 36(3) 100% Pre-Deposit
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          Arbitration Act s.36(3) read with CPC Order XLI Rule 5 (<em>Manish</em> doctrine)
                        </td>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">
                          All money awards challenged under s.34
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          30 to 60 Days from s.34 stay hearing
                        </td>
                        <td className="p-3 sm:p-4 text-slate-900 font-bold">
                          100% cash or bank guarantee required from debtor for stay
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">
                          100% liquid cash deposited into court registry; contractor can apply for withdrawal
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-4 font-extrabold text-slate-900">
                          Rail 3: NITI Aayog / Vivad se Vishwas 75% PSU Release
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          CCEA Directive / NITI Aayog OM / MoF Vivad se Vishwas II Circular
                        </td>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">
                          Central PSUs, Autonomous Bodies &amp; Ministries (NHAI, NTPC, BHEL)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          30 to 45 Days administrative disbursal
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          Contractor furnishes Bank Guarantee for 75% amount
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">
                          Immediate 75% cash liquidity deposited into project escrow to pay lenders
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50 transition-colors bg-amber-50/30">
                        <td className="p-3 sm:p-4 font-extrabold text-slate-900">
                          Rail 4: IBC Corporate Insolvency (CIRP)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          IBC 2016 s.8 &amp; s.9 (or s.7) read with <em>Kotak Mahindra Bank</em> (2022) 9 SCC 186
                        </td>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">
                          &ge;&rupee;1 Crore default threshold (Private Corporate Entities only)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          10-Day Demand Notice &rarr; 60 to 90 Days NCLT admission
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          NCLT filing fee (&rupee;2,000 for s.9; &rupee;25,000 for s.7)
                        </td>
                        <td className="p-3 sm:p-4 text-red-700 font-bold">
                          Existential corporate leverage; board suspension; forces promoter settlement
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 block mb-1">Strategic Selection Guidance:</strong>
                  For private corporate builders, simultaneous invocation of Rail 1 (Section 36 Execution with Order XXI Rule 46 Garnishee freeze) and Rail 4 (IBC Section 8 Demand Notice above ₹1 Crore) creates unendurable commercial pressure. For Government and PSU contracts, serving a formal demand under Rail 3 (NITI Aayog 75% Release) combined with immediate filing of Rail 1 execution (citing <em>Pam Developments</em> to defeat sovereign immunity defenses) reliably secures working capital release within 60 days.
                </div>
              </section>

              {/* Section 3: Statutory Framework */}
              <section
                id="heading-statutory-hooks"
                aria-labelledby="heading-statutory-hooks-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-4"
              >
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block mb-1">
                    Statutory Framework
                  </span>
                  <h2
                    id="heading-statutory-hooks-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    Statutory Hook: No Automatic Stay, 100% Pre-Deposit &amp; Order XXI Powers
                  </h2>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    The enforcement of domestic arbitral awards is anchored in a tightly integrated statutory framework spanning the Arbitration and Conciliation Act, 1996, the Code of Civil Procedure, 1908, and the Commercial Courts Act, 2015:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                      <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                          1
                        </span>
                        Section 36(1) — Direct Decree Status
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Where the time for making an application to set aside the arbitral award under Section 34 has expired, the award shall be enforced in accordance with the provisions of the CPC in the same manner as if it were a decree of the court. Under Commercial Courts Act Section 2(1)(c)(vi), construction disputes fall squarely under commercial jurisdiction.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                      <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                          2
                        </span>
                        Section 36(2) — No Automatic Stay
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        The mere filing of a Section 34 petition does not render the award unexecutable. The judgment debtor must file a separate application under Section 36(2) praying for a stay, and obtain an express judicial order granting such relief. In the absence of an order, execution proceeds unimpeded.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                      <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                          3
                        </span>
                        Section 36(3) &amp; Order XLI Rule 5
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        While considering an application for stay of an arbitral money award, the court shall have due regard to the provisions for grant of stay of a money decree under Order XLI Rule 5 of the CPC. Order XLI Rule 5(5) states that no stay shall be granted unless the applicant furnishes security or deposits the decretal amount.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                      <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                          4
                        </span>
                        Section 31(7)(b) — Penal Post-Award Interest
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        A sum directed to be paid by an arbitral award carries statutory interest at the rate of 2% higher than the prevailing RBI base rate from the date of the award to realization (defaulting to 18% per annum in older contracts), penalizing frivolous Section 34 filings by compounding the judgment debtor&apos;s ultimate liability.
                      </p>
                    </div>
                  </div>

                  <p>
                    Contractors must also note that under Article 136 of the Limitation Act, 1963, the limitation period for filing an execution petition is twelve (12) years from the date the award becomes enforceable. However, waiting years allows the judgment debtor to strip assets and empty bank accounts. Leading commercial counsel advise filing the Section 36 execution petition immediately upon the expiry of the mandatory 90-day window or as soon as notice of a Section 34 petition is received.
                  </p>
                </div>
              </section>

              {/* Section 4: Supreme Court Precedents */}
              <section
                id="heading-court-precedents"
                aria-labelledby="heading-court-precedents-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-6"
              >
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block mb-1">
                    Judicial Authorities
                  </span>
                  <h2
                    id="heading-court-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    Binding Judicial Rulings: Manish, HCC, Pam Developments &amp; Kotak
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Four landmark Supreme Court decisions establishing 100% pre-deposit mandates, eliminating automatic stays, removing PSU immunity, and sanctioning IBC insolvency on arbitral awards.
                  </p>
                </div>

                <div className="space-y-4">
                  {COURT_PRECEDENTS.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-5 border-l-4 border-l-[#DC2626] space-y-2"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <strong className="text-sm sm:text-base text-slate-900 font-extrabold">
                          {item.parties}
                        </strong>
                        <span className="text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                          {item.citation}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-semibold">{item.date}</p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                        <strong>Facts &amp; Dispute:</strong> {item.facts}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong>Supreme Court Holding:</strong> {item.holding}
                      </p>
                      <div className="pt-2 flex items-start gap-2 text-xs sm:text-sm text-red-700 font-semibold">
                        <span className="text-red-600 font-black">&bull;</span>
                        <span>Key Contractor Takeaway: {item.takeaway}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 5: Decision Flow SVG Diagram */}
              <section
                id="heading-decision-flow"
                aria-labelledby="heading-decision-flow-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-6"
              >
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block mb-1">
                    Operational Escalation Workflow
                  </span>
                  <h2
                    id="heading-decision-flow-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    Operational Escalation Workflow: From Award to Liquid Cash Realization
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    The 5-stage legal escalation blueprint utilized by institutional contractors to execute awards against recalcitrant builders and public authorities.
                  </p>
                </div>

                {/* Hand-Authored Responsive SVG Flowchart for Desktop */}
                <div className="hidden md:block w-full overflow-hidden bg-slate-900 rounded-2xl p-6 border border-slate-800">
                  <svg
                    viewBox="0 0 880 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    width={880}
                    height={240}
                  >
                    {/* Stage 1 */}
                    <rect x="20" y="30" width="140" height="85" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="90" y="55" fill="#EF4444" fontSize="10" fontWeight="bold" textAnchor="middle">STAGE 1 &bull; DAY 0-90</text>
                    <text x="90" y="75" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">Award Stamping</text>
                    <text x="90" y="93" fill="#94A3B8" fontSize="10" textAnchor="middle">&amp; s.31(5) Service</text>

                    {/* Arrow 1 -> 2 */}
                    <path d="M160 72.5 L190 72.5" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Stage 2 */}
                    <rect x="195" y="30" width="145" height="85" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                    <text x="267" y="55" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">STAGE 2 &bull; DAY 90</text>
                    <text x="267" y="75" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">s.36 Execution</text>
                    <text x="267" y="93" fill="#94A3B8" fontSize="10" textAnchor="middle">Commercial Court</text>

                    {/* Arrow 2 -> 3 */}
                    <path d="M340 72.5 L370 72.5" stroke="#94A3B8" strokeWidth="2" />

                    {/* Stage 3 */}
                    <rect x="375" y="30" width="150" height="85" rx="10" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
                    <text x="450" y="55" fill="#FBBF24" fontSize="10" fontWeight="bold" textAnchor="middle">STAGE 3 &bull; OPPOSITION</text>
                    <text x="450" y="75" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">100% Cash Deposit</text>
                    <text x="450" y="93" fill="#94A3B8" fontSize="10" textAnchor="middle">Manish Doctrine</text>

                    {/* Split Arrow 3 -> 4A and 3 -> 4B */}
                    <path d="M525 72.5 L555 72.5" stroke="#94A3B8" strokeWidth="2" />

                    {/* Stage 4: Order 21 Garnishee */}
                    <rect x="560" y="20" width="145" height="90" rx="10" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                    <text x="632" y="45" fill="#34D399" fontSize="10" fontWeight="bold" textAnchor="middle">STAGE 4A &bull; PRIVATE</text>
                    <text x="632" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">Order XXI Garnishee</text>
                    <text x="632" y="82" fill="#94A3B8" fontSize="10" textAnchor="middle">RERA/Bank Freeze</text>
                    <text x="632" y="97" fill="#CBD5E1" fontSize="9" textAnchor="middle">&amp; IBC s.8 Notice</text>

                    {/* Stage 4B: PSU 75% Release */}
                    <rect x="560" y="125" width="145" height="90" rx="10" fill="#1E293B" stroke="#6366F1" strokeWidth="2" />
                    <text x="632" y="150" fill="#818CF8" fontSize="10" fontWeight="bold" textAnchor="middle">STAGE 4B &bull; PSU / GOVT</text>
                    <text x="632" y="170" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">75% Payout vs BG</text>
                    <text x="632" y="187" fill="#94A3B8" fontSize="10" textAnchor="middle">NITI Aayog Circular</text>
                    <text x="632" y="202" fill="#CBD5E1" fontSize="9" textAnchor="middle">Escrow Release</text>

                    {/* Arrow 4 -> 5 */}
                    <path d="M705 65 L735 95" stroke="#94A3B8" strokeWidth="2" />
                    <path d="M705 170 L735 140" stroke="#94A3B8" strokeWidth="2" />

                    {/* Stage 5: Final Realization */}
                    <rect x="740" y="70" width="125" height="95" rx="10" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
                    <text x="802" y="95" fill="#A7F3D0" fontSize="10" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                    <text x="802" y="117" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">Complete</text>
                    <text x="802" y="133" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">Liquidity</text>
                    <text x="802" y="150" fill="#6EE7B7" fontSize="10" textAnchor="middle">100% Realized</text>
                  </svg>
                </div>

                {/* Mobile Fallback Stacked Cards */}
                <div className="grid grid-cols-1 gap-3 md:hidden">
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold text-red-400 uppercase">Stage 1 &bull; Days 0–90</span>
                    <p className="text-sm font-bold text-white">Award Stamping &amp; Delivery</p>
                    <p className="text-xs text-slate-300">Ensure stamped certified copy under Stamp Act and Section 31(5) signed delivery proof.</p>
                  </div>

                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold text-blue-400 uppercase">Stage 2 &bull; Day 90</span>
                    <p className="text-sm font-bold text-white">Section 36 Execution Petition</p>
                    <p className="text-xs text-slate-300">File in Commercial Court / High Court under CPC Order XXI Rule 11 with asset discovery applications.</p>
                  </div>

                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold text-amber-400 uppercase">Stage 3 &bull; Opposition</span>
                    <p className="text-sm font-bold text-white">100% Pre-Deposit Mandate</p>
                    <p className="text-xs text-slate-300">Oppose Section 34 stay unconditionally; enforce Manish doctrine for 100% cash/bank guarantee deposit.</p>
                  </div>

                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase">Stage 4 &bull; Dual Track Execution</span>
                    <p className="text-sm font-bold text-white">Garnishee Freeze &amp; PSU 75% Release</p>
                    <p className="text-xs text-slate-300">Attach RERA escrow/project bank accounts under Rule 46 or demand 75% PSU payout against Bank Guarantee.</p>
                  </div>

                  <div className="p-4 bg-emerald-950 text-white rounded-xl border border-emerald-800 space-y-1">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase">Stage 5 &bull; Realization</span>
                    <p className="text-sm font-bold text-white">Full Liquidity Recovery</p>
                    <p className="text-xs text-emerald-200">Release of funds from court registry or immediate settlement by promoter to avoid IBC CIRP admission.</p>
                  </div>
                </div>
              </section>

              {/* Section 6: Interactive Scenario Matrix */}
              <section
                id="heading-scenario-tabs"
                aria-labelledby="heading-scenario-tabs-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block mb-1">
                    Tactical Playbook
                  </span>
                  <h2
                    id="heading-scenario-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    4 Enforcement Scenarios: Defeating Section 34 Stalls &amp; Asset Siphoning
                  </h2>
                </div>

                <ArbitralAwardExecutionScenarioTabs />
              </section>

              {/* Section 7: Worked Financial & Interest Ledger */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-6"
              >
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block mb-1">
                    Numerical Financial Simulation
                  </span>
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    Worked Recovery Ledger: &rupee;12.5 Cr Arbitral Award with 18% Interest
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Detailed mathematical illustration of total executable debt accumulation, Section 31(7)(b) post-award interest compounding, and working capital release under court deposit vs. PSU 75% payout.
                  </p>
                </div>

                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 space-y-4 font-mono text-xs sm:text-sm">
                  <div className="border-b border-slate-800 pb-3">
                    <p className="text-slate-400 text-xs">PROJECT SPECIFICATION:</p>
                    <p className="text-sm sm:text-base font-bold text-white">
                      Four-Lane Highway Concession Package &bull; EPC Contractor vs. Concessionaire / Authority
                    </p>
                  </div>

                  <div className="space-y-2.5 divide-y divide-slate-800">
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-slate-300">1. Principal Awarded Sum (Unpaid RA Bills + DLP Retention):</span>
                      <span className="font-bold text-white">&rupee;12,50,00,000</span>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <span className="text-slate-300">2. Pre-Award Interest Awarded (12% p.a. for 30 months):</span>
                      <span className="font-bold text-emerald-400">+ &rupee;3,75,00,000</span>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <span className="text-slate-300">3. Arbitral Tribunal Legal &amp; Administrative Costs:</span>
                      <span className="font-bold text-slate-200">+ &rupee;35,00,000</span>
                    </div>

                    <div className="flex justify-between items-center pt-2 bg-slate-800/60 p-2 rounded">
                      <span className="font-bold text-white">TOTAL AWARD SUM AS OF AWARD DATE:</span>
                      <span className="font-black text-white text-sm sm:text-base">&rupee;16,60,00,000</span>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <span className="text-slate-300">4. Post-Award Statutory Interest (s.31(7)(b) @ 18% p.a. for 14 mos delay):</span>
                      <span className="font-bold text-amber-400">+ &rupee;3,48,60,000</span>
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t-2 border-red-500">
                      <span className="font-black text-red-400 text-sm sm:text-base">TOTAL EXECUTABLE DECREE VALUE (DAY 420):</span>
                      <span className="font-black text-emerald-400 text-base sm:text-lg">&rupee;20,08,60,000</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2 text-xs sm:text-sm text-emerald-900">
                    <strong className="text-emerald-950 font-bold block text-sm">
                      Option A: 100% Court Deposit Mandate (Manish Doctrine)
                    </strong>
                    <p className="leading-relaxed">
                      Executing court orders the debtor to deposit 100% decretal value (&rupee;20,08,60,000) into court registry within 45 days. The contractor applies for release of 50% cash unconditionally and 50% against solvent indemnity/BG, unfreezing &rupee;20.08 Crores of capital while Section 34 arguments proceed.
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl space-y-2 text-xs sm:text-sm text-blue-900">
                    <strong className="text-blue-950 font-bold block text-sm">
                      Option B: NITI Aayog 75% Immediate PSU Release against BG
                    </strong>
                    <p className="leading-relaxed">
                      Contractor furnishes a Bank Guarantee for 75% of the award value (&rupee;12,45,00,000). The PSU releases &rupee;12.45 Crores directly into the contractor&apos;s project designated escrow account within 30 days. Contractor uses these funds to retire expensive bank overdrafts running at 11.5% interest.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: Order XXI Garnishee Attachments */}
              <section
                id="heading-garnishee-order21"
                aria-labelledby="heading-garnishee-order21-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-4"
              >
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block mb-1">
                    Garnishee Enforcement Mechanics
                  </span>
                  <h2
                    id="heading-garnishee-order21-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    Order XXI Garnishee Attachment: Freezing Bank Accounts &amp; Receivables
                  </h2>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    When private developers or concessionaires attempt to evade satisfaction of an arbitral award, the executing court possesses comprehensive coercive powers under Order XXI of the Code of Civil Procedure, 1908:
                  </p>

                  <div className="space-y-3">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <strong className="text-slate-900 font-bold text-sm block">
                        1. Order XXI Rule 41: Oral Examination &amp; Asset Disclosure Affidavit
                      </strong>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        The court compels the Managing Director, Chief Financial Officer, and whole-time directors of the judgment debtor company to appear in person and make a full disclosure under oath of all corporate bank accounts, RERA escrow numbers, fixed deposits, demat holdings, movable plant and machinery, and unsold real estate inventory. False affidavits or omissions attract prosecution for perjury and contempt of court.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <strong className="text-slate-900 font-bold text-sm block">
                        2. Order XXI Rules 46 &amp; 46A–46I: Garnishee Orders Against Escrow &amp; Bank Accounts
                      </strong>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        The executing court issues a direct garnishee order to banks holding the debtor&apos;s accounts (including State Bank of India, HDFC Bank, ICICI Bank, and Axis Bank). The order restrains the bank from honoring any debit instructions from the developer and mandates direct transmission of deposited funds into the executing court registry. This order extends to RERA 70% separate escrow accounts where construction claims are directly attributable to the registered project.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <strong className="text-slate-900 font-bold text-sm block">
                        3. Attachment of Third-Party Receivables &amp; Flat Buyer Installments
                      </strong>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Under Order XXI Rule 46, garnishee notices can be served on institutional flat buyers, commercial anchor tenants paying monthly lease rentals, or government project owners withholding milestone payments to the debtor concessionaire, ordering them to pay the contractor directly rather than remitting funds to the defaulting developer.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <strong className="text-slate-900 font-bold text-sm block">
                        4. Order XXI Rule 54: Attachment &amp; Court Auction of Immovable Properties
                      </strong>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Where liquid cash in bank accounts is insufficient, the contractor applies for attachment of unsold commercial units, penthouses, or agricultural land parcels owned by the debtor. Once attached under Rule 54, any alienation, sale, or mortgage of the property by the developer is void ab initio under Section 64 CPC, leading to court-monitored public auction.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Evidence & Documentation Checklist */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-6"
              >
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block mb-1">
                    Statutory Compliance Checklist
                  </span>
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    BSA Section 63 Execution Docket &amp; Garnishee Evidence Checklist
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    The 6 indispensable statutory exhibits required by the Commercial Court registry to admit a Section 36 execution petition and grant ex-parte garnishee attachment.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Original Arbitral Award &amp; Stamp Duty Certificate:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Duly stamped original award or certified copy bearing state stamp duty compliance under the relevant State Stamp Act.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Section 31(5) Signed Delivery Receipt:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Proof of delivery of the signed copy of the arbitral award to the judgment debtor with postal RPAD tracking or email acknowledgment.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Section 34 Limitation Non-Filing Affidavit / Stay Status:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Affidavit certifying that the 90-day Section 34 period has expired or that no stay order has been granted under Section 36(2).
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Debtor Corporate Intelligence &amp; Bank Account List:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        MCA Master Data, DIN details of active directors, RERA project registration bank account details, and GSTIN branch disclosures.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Section 31(7)(b) Interest Calculation Docket:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Day-by-day interest calculation sheet computing post-award statutory interest from the date of the award to the date of execution filing.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      6
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        BSA 2023 Section 63 Electronic Evidence Certificate:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Mandatory statutory certificate validating electronic communications, emails, tribunal PDF award transmission, and online court docket logs.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Frequently Asked Questions */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 space-y-4 sm:space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block mb-1">
                    Direct Practitioner Answers
                  </span>
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Section 36 Arbitral Award Execution
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Authoritative statutory answers grounded in the Arbitration Act 1996, CPC Order XXI execution rules, and Supreme Court rulings.
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

              {/* Section 11: Primary Statutory Sources */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200"
              >
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Framework, Primary Sources &amp; Official Government Circulars
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-slate-500 italic mt-2">
                  Statutory verification status: All provisions verified against the Arbitration and Conciliation Act 1996 (as amended up to 2026), CPC Order XXI execution jurisprudence, NITI Aayog OMs, and Supreme Court rulings in Manish v. Godawari, Pam Developments, and Kotak Mahindra Bank v. Balakrishnan.
                </p>
              </section>

              {/* Primary Dual-Track B2B CTA Block */}
              <section
                id="heading-cta-block"
                aria-labelledby="heading-cta-block-title"
                className="w-full pt-4"
              >
                <h2 id="heading-cta-block-title" className="sr-only">
                  Initiate Fast-Track Arbitral Award Execution Notice &amp; Institutional Docket
                </h2>
                <ArbitralAwardExecutionCTA />
              </section>

              {/* Sibling Spokes & Related Sectoral Links */}
              <div className="pt-6 w-full">
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Infrastructure, EPC &amp; Contractor Recovery Network
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/industries/construction-epc-contractor-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Parent Hub: Construction &amp; EPC Recovery &rarr;
                  </Link>
                  <Link
                    href="/unpaid-ra-bills-uncertified-measurement-book-contractor-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Uncertified RA Bill Recovery &rarr;
                  </Link>
                  <Link
                    href="/retention-money-recovery-after-defect-liability-period-dlp-expiry"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Post-DLP Retention Recovery &rarr;
                  </Link>
                  <Link
                    href="/works-contract-excluded-from-msme-samadhaan-contractor-alternatives"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Works Contract MSME Alternatives &rarr;
                  </Link>
                  <Link
                    href="/nhai-cpwd-pwd-railways-municipal-tender-payment-recovery-contractors"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Government Tender &amp; PSU Recovery &rarr;
                  </Link>
                  <Link
                    href="/subcontractor-payment-recovery-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Subcontractor Payment Recovery &rarr;
                  </Link>
                  <Link
                    href="/law/section-80-cpc-notice-to-government"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Section 80 CPC Notice Guide &rarr;
                  </Link>
                  <Link
                    href="/recovery/contractor-payment"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Contractor Payment Claims Desk &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
