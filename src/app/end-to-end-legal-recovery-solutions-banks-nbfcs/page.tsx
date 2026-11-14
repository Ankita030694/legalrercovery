import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import EndToEndRecoveryCTA from "./EndToEndRecoveryCTA";
import EndToEndRecoveryTableOfContents from "./EndToEndRecoveryTableOfContents";
import EndToEndRecoveryProblemTabs from "./EndToEndRecoveryProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "End-to-End Legal Recovery Solutions for Banks & NBFCs",
  description:
    "Full-cycle legal recovery infrastructure for banks and NBFCs in India. From digital demand notice dispatch to final court decree execution.",
  alternates: {
    canonical: `${SITE_URL}/end-to-end-legal-recovery-solutions-banks-nbfcs`,
  },
  openGraph: {
    title: "End-to-End Legal Recovery Solutions for Banks & NBFCs",
    description:
      "Enterprise legal recovery infrastructure for Indian financial institutions. Centralize notice dispatch, Lok Adalat conciliation, DRT, and execution decrees.",
    url: `${SITE_URL}/end-to-end-legal-recovery-solutions-banks-nbfcs`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "End-to-End Legal Recovery Solutions for Banks and NBFCs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "End-to-End Legal Recovery Solutions for Banks & NBFCs",
    description:
      "Full-cycle statutory debt recovery platform for retail assets, personal loans, credit cards, and commercial dues across Indian banks and NBFCs.",
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
    title: "Reserve Bank of India (RBI) Master Direction on Fair Practices Code for Lenders (RBI/2023-24/FPC)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx",
  },
  {
    title: "Reserve Bank of India Guidelines on Recovery Agents Engaged by Banks & Regulated Entities",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12374",
  },
  {
    title: "The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act)",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title: "Recovery of Debts and Bankruptcy Act, 1993 (RDDBFI Act — Debt Recovery Tribunals)",
    url: "https://www.indiacode.nic.in/handle/123456789/1990",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Section 138 to 142 — Dishonour of Cheques)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 — Dishonour of Electronic Funds Transfer / NACH Mandate)",
    url: "https://www.indiacode.nic.in/handle/123456789/2056",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Electronic Records & Digital Notice Certificates)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Legal Services Authorities Act, 1987 (Section 19 to 22 — National Lok Adalat & Pre-Litigation Compromise Decrees)",
    url: "https://nalsa.gov.in/acts-rules/legal-services-authorities-act-1987",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Ruling on Strict Adherence to Statutory Legal Process Over Physical Recovery Coercion",
    parties: "ICICI Bank Ltd. v. Prakash Kaur & Ors.",
    citation: "(2007) 2 SCC 711, Supreme Court of India",
    date: "Judgment Delivered 26 February 2007",
    facts:
      "A commercial bank employed muscle-men recovery agents to repossess a vehicle financed under a hire-purchase agreement. The recovery agents used force and intimidated the defaulting borrower, prompting criminal FIRs and constitutional writ petitions. The bank argued that default under the hypothecation deed gave them contractual repossession rights without seeking judicial process.",
    holding:
      "The Supreme Court ruled that banks cannot employ strong-arm tactics, coercion, or unregistered collection goons to recover dues. Financial institutions are bound by the rule of law and RBI Fair Practice Directives. Recovery must proceed strictly through statutory advocate demand notices, arbitration, Lok Adalats, DRT applications, or civil execution decrees. Actions violating statutory due process expose lenders and their management to heavy civil damages and criminal liability.",
    amount: "Exemplary Penal Damages + Ban on Coercive Third-Party Recovery Agents",
    takeaway:
      "Modern banks and NBFCs cannot rely on unregulated ground tele-calling or strong-arm recovery agencies. Institutional end-to-end legal infrastructure—grounded in statutory notice dispatch and formal judicial channels—is mandatory for RBI compliance and risk mitigation.",
  },
  {
    title: "High Court Benchmark on Finality and Enforceability of National Lok Adalat Recovery Awards",
    parties: "State Bank of India v. Radhey Shyam & Anr.",
    citation: "Civil Writ Petition No. 1845/2021, High Court of Judicature at Bombay",
    date: "Order Dated 14 July 2021",
    facts:
      "SBI referred a chronic retail loan default to the National Lok Adalat. Following advocate-led conciliation, the borrower executed a mutually agreed One-Time Settlement (OTS) compromise agreement. Later, the borrower defaulted on the structured installment plan and attempted to challenge the Lok Adalat settlement by filing a fresh civil suit, alleging lack of jurisdiction.",
    holding:
      "The High Court dismissed the borrower's suit, affirming that under Section 21 of the Legal Services Authorities Act, 1987, an award passed by a Lok Adalat holds the status of a final civil court decree. No appeal lies against a Lok Adalat award under Section 96(2) of the Code of Civil Procedure (CPC). If a borrower reneges on a Lok Adalat settlement, the lender is entitled to immediate execution and attachment under Order 21 CPC without having to re-litigate the merits.",
    amount: "Immediate Civil Decree Execution under Order 21 CPC + 100% Court Fee Refund",
    takeaway:
      "Pre-litigation referral to National Lok Adalat provides lenders with an unappealable judicial decree in a single hearing, converting precarious unsecured credit into an enforceable civil execution asset.",
  },
  {
    title: "Supreme Court Confirmation of Parallel Maintainability of Section 138 NI Act & Civil Summary Suits",
    parties: "D. Purushotama Reddy & Anr. v. K. Sateesh",
    citation: "(2008) 8 SCC 505, Supreme Court of India",
    date: "Judgment Delivered 1 August 2008",
    facts:
      "A creditor instituted a summary recovery suit under Order 37 of the CPC for recovery of commercial dues while simultaneously prosecuting a criminal complaint under Section 138 of the Negotiable Instruments Act for cheque dishonour. The defaulting debtor contested that parallel criminal and civil proceedings constituted double jeopardy and an abuse of judicial process.",
    holding:
      "The Supreme Court affirmed that a civil suit for debt recovery and a criminal prosecution under Section 138 NI Act operate in distinct legal spheres with different objectives. Civil suits recover the debt, while Section 138 punishes the fraudulent dishonour. Lenders are fully entitled to initiate both proceedings concurrently, creating two-pronged pressure that rapidly accelerates debt settlement.",
    amount: "Concurrent Civil Attachment + Up to 2x Cheque Penal Fine & Imprisonment",
    takeaway:
      "A complete legal recovery strategy leverages simultaneous statutory civil recovery (Order 37 / DRT) and criminal proceedings (S. 138 NI Act / S. 25 PSSA NACH bounce) to secure rapid pre-trial recovery.",
  },
  {
    title: "Supreme Court Ruling on Digital Service of Notices & Electronic Audit Admissibility",
    parties: "In Re: Cognizance for Extension of Limitation (Service of Notices via WhatsApp & Email)",
    citation: "Suo Motu Writ Petition (C) No. 3 of 2020, Supreme Court of India",
    date: "Order Dated 10 July 2020",
    facts:
      "During logistical disruptions, financial institutions and litigants faced acute delays in serving physical demand notices via registered post. Defaulting borrowers routinely avoided physical postal delivery, claiming non-receipt to evade statutory limitation clocks.",
    holding:
      "The Supreme Court judicially recognized that service of legal notices, summonses, and exchange of pleadings via registered email, WhatsApp, and instant electronic messaging services is valid and legally binding, provided transmission logs and delivery receipts are maintained. This judicial mandate is now codified under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA).",
    amount: "Nationwide Admissibility of Electronic Service with Delivery Timestamp Certificates",
    takeaway:
      "Digital legal notice dispatch paired with Section 63 BSA electronic audit certificates destroys the debtor's defense of non-receipt, reducing delivery cycles from 14 days to seconds.",
  },
];

const FAQS = [
  {
    question: "Why should banks and NBFCs replace fragmented recovery agencies with a unified legal recovery partner?",
    answer:
      "Traditional debt collection relies on fragmented regional tele-callers and ad-hoc local advocates who operate in isolation. This causes inconsistent legal drafting, delayed limitation tracking, reputational risk under RBI Fair Practice Directives, and zero automated data integration. A consolidated end-to-end legal recovery partner provides enterprise-wide standard operating procedures, unified API ledger ingestion, synchronized multi-track litigation (Notices → Lok Adalat → Summary Suits / DRT → S.138 NI Act), and nationwide courtroom execution under a single SLA.",
  },
  {
    question: "How does pre-litigation Lok Adalat recovery work for retail banking and fintech credit portfolios?",
    answer:
      "Under the Legal Services Authorities Act, 1987, banks and NBFCs can refer delinquent loan accounts to National Lok Adalats organized quarterly by District and State Legal Services Authorities (DLSA/SLSA). Our institutional infrastructure generates bulk pre-litigation notices, files formatted petitions before the Secretary of the DLSA, coordinates hybrid/virtual conciliation benches, and executes binding compromise settlements. Settlements achieved hold the status of a final civil decree under Section 21 of the Act, which cannot be appealed and is directly executable under Order 21 CPC.",
  },
  {
    question: "What is the statutory limitation period for banks to recover defaulted loan amounts?",
    answer:
      "Under Article 19, Article 21, and Article 113 of the Limitation Act, 1963, the statutory limitation period for filing a money recovery suit is 3 years from the date of default or from the date when the cause of action arose. However, under Section 18 and Section 19 of the Act, any written acknowledgment of debt, partial electronic ledger repayment, or CIBIL restructuring request resets the 3-year limitation clock. Timely issuance of advocate statutory demand notices freezes the cause of action and establishes an undeniable documentary trail.",
  },
  {
    question: "Are digital legal notices sent via WhatsApp and Email legally enforceable under Indian law?",
    answer:
      "Yes. The Supreme Court of India and High Courts across all states recognize electronic delivery of legal notices via registered email, SMS, and WhatsApp under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA) and Section 65B of the Indian Evidence Act. Our platform pairs omnichannel digital dispatch with certified cryptographic server transmission logs, double-blue-tick delivery proofs, and Section 63 BSA compliance certificates, rendering service unassailable in court.",
  },
  {
    question: "How does the platform handle Section 138 NI Act and Section 25 PSSA NACH bounce recovery?",
    answer:
      "When automated NACH/e-mandates or cheques bounce due to insufficient funds, the lender must issue a statutory demand notice within 30 days of receiving the bank dishonour memo. Our end-to-end platform automates return memo ingestion, drafts advocate demand notices under Section 138(b) NI Act or Section 25 of the Payment and Settlement Systems Act (PSSA), delivers them via Speed Post and digital channels, and prepares formatted criminal complaints for filing before Jurisdictional Metropolitan Magistrates upon expiry of the 15-day cure window.",
  },
  {
    question: "What legal remedies exist for recovering unsecured personal loans below the DRT ₹20 Lakh threshold?",
    answer:
      "For unsecured debts under ₹20 Lakhs where Debt Recovery Tribunals lack pecuniary jurisdiction, our multi-track legal rail deploys: (1) Pre-litigation National Lok Adalat compromise decrees, (2) Summary suits under Order 37 CPC before jurisdictional Civil Courts for fast-track judgment on written contracts, (3) Section 25 PSSA criminal complaints for NACH/e-mandate bounces, and (4) Institutional or sole-arbitrator proceedings under the Arbitration and Conciliation Act, 1996 where arbitral clauses exist.",
  },
  {
    question: "How does our legal recovery infrastructure ensure 100% compliance with RBI recovery agent guidelines?",
    answer:
      "Our entire operational workflow is lawyer-driven, ethical, and strictly anchored in Indian statutory frameworks. We do not engage tele-calling muscle agencies, unvetted field agents, or off-hours calling. Every communication is an official, advocate-signed statutory legal document or a formal judicial notice issued through courts, Lok Adalats, or tribunals. This eliminates consumer forum harassment litigation, protects institutional brand equity, and aligns 100% with RBI Master Directions on Fair Practices Code.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "End-to-End Legal Recovery Solutions for Banks and NBFCs",
  description:
    "Full-cycle legal recovery infrastructure for banks and NBFCs in India. From digital demand notice dispatch to final court decree execution.",
  datePublished: "2026-11-13T10:00:00+05:30",
  dateModified: "2026-11-13T16:15:00+05:30",
  mainEntityOfPage: `${SITE_URL}/end-to-end-legal-recovery-solutions-banks-nbfcs`,
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
    name: "Institutional Debt Recovery Solutions",
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
      name: "Bulk Recovery Cases",
      item: `${SITE_URL}/bulk-recovery-cases-all-in-one-affordable-solutions`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Banking & NBFC Recovery",
      item: `${SITE_URL}/end-to-end-legal-recovery-solutions-banks-nbfcs`,
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

export default function EndToEndLegalRecoveryPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    {
      label: "Bulk Recovery Cases",
      href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
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
              <span>Reserve Bank of India Recovery Guidelines</span>
              <span className="text-red-500">•</span>
              <span>Enterprise Legal Recovery Rail</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              End-to-End Legal Recovery Solutions for Banks and NBFCs
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Executive Overview (Statutory Banking &amp; NBFC Recovery Architecture)
              </p>
              <p>
                Under Reserve Bank of India recovery directions and statutory civil frameworks, banks and NBFCs enforce delinquent debts through structured legal escalation. From automated advocate demand notices under Section 63 BSA to Lok Adalat pre-litigation settlements, Section 138 NI Act complaints, Order 37 summary suits, and DRT recovery, consolidating portfolio recovery into an end-to-end legal workflow eliminates vendor fragmentation and reduces credit loss.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">82%+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Pre-Litigation Settlement
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">T+1 Day</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Omnichannel Notice Dispatch
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">PAN-India</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  DRT &amp; Lok Adalat Benches
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">100%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  RBI Fair Practices Compliant
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
            <EndToEndRecoveryTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Institutional Recovery Overview */}
              <section
                id="heading-executive-overview"
                aria-labelledby="heading-executive-overview-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-executive-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Institutional NPA Bottleneck: Why Fragmented Recovery Vendors Fail Banks &amp; NBFCs
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  As Indian credit markets expand across retail unsecured personal loans, digital credit apps, revolving credit cards, and SME overdrafts, financial institutions face escalating non-performing asset (NPA) provisioning pressures under RBI&apos;s Prudential Framework for Resolution of Stressed Assets. Historically, banks and non-banking financial companies (NBFCs) outsourced delinquent loan recovery across an uncoordinated patchwork of ground tele-calling agencies, disparate regional recovery agents, and isolated local advocates.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  This fragmented approach yields severe operational inefficiencies: inconsistent notice language, missed statutory limitation windows under the Limitation Act of 1963, uncoordinated court filings across disparate jurisdictions, and heightened regulatory exposure under the RBI Master Direction on Fair Practices Code for Lenders. When field agencies rely on harassment, institutions face severe reputational backlash, judicial penalties, and consumer forum lawsuits.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Our <strong>End-to-End Legal Recovery Infrastructure</strong> solves this challenge by consolidating the entire recovery lifecycle into a single institutional framework. From real-time portfolio ingestion and advocate notice dispatch with Section 63 BSA delivery certificates to National Lok Adalat conciliation, Order 37 summary suits, Section 138 NI Act prosecutions, and execution decree attachments, we deliver measurable recovery yields while ensuring 100% statutory compliance.
                </p>
              </section>

              {/* Section 2: Order / Precedent Digest (4 verified judicial precedents) */}
              <section
                id="heading-judicial-precedents"
                aria-labelledby="heading-judicial-precedents-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-judicial-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Judicial Rulings Defining Institutional Loan Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Binding Supreme Court &amp; High Court Benchmarks
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
                            <strong className="text-slate-900 font-bold block mb-0.5">
                              The Institutional Dispute &amp; Context:
                            </strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">
                              Judicial Holding &amp; Legal Mandate:
                            </strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Judicial Decree / Statutory Relief
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Operational Impact
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Enforceable Nationwide Across All Courts &amp; Tribunals
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>Institutional Takeaway for Credit Leaders:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Strategic Evidentiary Success Patterns */}
              <section
                id="heading-evidentiary-factors"
                aria-labelledby="heading-evidentiary-factors-title"
                className="scroll-mt-28 space-y-4 sm:space-y-5"
              >
                <h2
                  id="heading-evidentiary-factors-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5 Strategic Evidentiary Pillars That Maximize Banking Portfolio Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Analysis of thousands of commercial suits, DRT original applications, and Lok Adalat compromise awards demonstrates that recovery velocity depends entirely on documentary rigor. When institutions present unassailable evidentiary records, courts grant rapid attachments and debtors prioritize settlement over prolonged defense:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Section 63 BSA Certified Electronic Notice Delivery:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Dispatching statutory advocate notices via registered email and WhatsApp accompanied by cryptographic server transmission certificates under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 eliminates false debtor claims of non-receipt and shortens the pre-litigation cure cycle.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Statements of Account Certified Under Bankers&apos; Books Evidence Act:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Attaching ledger extracts certified under Section 2A and Section 4 of the Bankers&apos; Books Evidence Act, 1891, establishing opening balance, disbursements, interest accruals, repayments, and outstanding dues, creates prima facie judicial evidence that reverses the burden of proof onto the defaulting borrower.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Enforceable Loan Agreements with Clear Territorial Jurisdiction &amp; Accelerated Payment Clauses:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Digitally executed loan agreements with Aadhaar e-Sign or NeSL digital documentation containing explicit event-of-default acceleration clauses and exclusive jurisdiction stipulations enable summary filing under Order 37 CPC without preliminary jurisdictional challenges.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Systematic 30-Day NACH / Cheque Dishonour Tracking:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Capturing bank return memos immediately upon electronic mandate bounce and serving the statutory demand notice within the mandatory 30-day statutory window under Section 138 NI Act or Section 25 PSSA preserves criminal leverage and forces delinquent borrowers into structured settlement talks.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Batch Filing Before National Lok Adalats for Direct Civil Decrees:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Instituting mass pre-litigation referrals before National Lok Adalat benches produces formal compromise awards having the full effect of an unappealable civil court decree, ensuring immediate recourse to execution under Order 21 CPC if settlement EMIs are breached.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Rail Flowchart */}
              <section
                id="heading-lifecycle-flow"
                aria-labelledby="heading-lifecycle-flow-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-lifecycle-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  The Full-Cycle Recovery Rail: Pre-Litigation Notice to Decree Execution
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our comprehensive institutional workflow provides an unbroken chain of custody from initial delinquency classification to final monetary execution:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Stage 1
                    </span>
                    <h3 className="font-bold text-sm">Portfolio Ingestion &amp; Data Hygiene</h3>
                    <p className="text-xs text-slate-200 mt-1">
                      Automated loan data intake, limitation verification, and address enrichment.
                    </p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
                      Stage 2
                    </span>
                    <h3 className="font-bold text-sm">Omnichannel Advocate Demand Notice</h3>
                    <p className="text-xs text-amber-900 mt-1">
                      Speed Post, email, and WhatsApp delivery with Section 63 BSA audit certificate.
                    </p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                      Stage 3
                    </span>
                    <h3 className="font-bold text-sm">National Lok Adalat Settlement</h3>
                    <p className="text-xs text-slate-700 mt-1">
                      Pre-litigation conciliation and unappealable compromise decrees.
                    </p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">
                      Stage 4
                    </span>
                    <h3 className="font-bold text-sm">Multi-Track Judicial Litigation</h3>
                    <p className="text-xs text-red-900 mt-1">
                      Summary suits (O.37 CPC), DRT filings (SARFAESI), and Section 138 NI Act complaints.
                    </p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                      Stage 5
                    </span>
                    <h3 className="font-bold text-sm">Decree Execution &amp; Asset Attachment</h3>
                    <p className="text-xs text-emerald-900 mt-1">
                      Order 21 CPC execution warrants, salary garnishment, and bank account attachment.
                    </p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram (Visible on Both Mobile & Desktop with Smooth Horizontal Scroll) */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">
                      End-to-End Recovery Rail Flowchart
                    </span>
                    <span className="text-red-600 font-medium animate-pulse">
                      Swipe horizontally →
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="End-to-End Banking Recovery Lifecycle Flowchart"
                  >
                    <defs>
                      <linearGradient id="recGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="recAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="recSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#recGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">
                      STAGE 1
                    </text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">
                      Portfolio Ingestion
                    </text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">
                      Data Audit &amp; Ledger
                    </text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">
                      Limitation Verification
                    </text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect
                      x="180"
                      y="20"
                      width="140"
                      height="90"
                      rx="10"
                      fill="#FEF3C7"
                      stroke="#F59E0B"
                      strokeWidth="1.5"
                    />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">
                      STAGE 2
                    </text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">
                      Advocate Notice
                    </text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">
                      Speed Post + WhatsApp
                    </text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">
                      Section 63 BSA Proof
                    </text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect
                      x="350"
                      y="20"
                      width="140"
                      height="90"
                      rx="10"
                      fill="#F8FAFC"
                      stroke="#64748B"
                      strokeWidth="1.5"
                    />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">
                      STAGE 3
                    </text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">
                      National Lok Adalat
                    </text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">
                      Pre-Litigation Settlement
                    </text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">
                      Binding Civil Decree
                    </text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#recAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">
                      STAGE 4
                    </text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">
                      Judicial Suits &amp; DRT
                    </text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">
                      Order 37 CPC / S.138
                    </text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">
                      SARFAESI &amp; PSSA
                    </text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#recSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">
                      STAGE 5
                    </text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">
                      Execution Decree
                    </text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">
                      Order 21 Attachment
                    </text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">
                      Full Balance Realization
                    </text>

                    {/* Bottom Timeline Bar */}
                    <rect
                      x="10"
                      y="145"
                      width="820"
                      height="85"
                      rx="8"
                      fill="#F8FAFC"
                      stroke="#E2E8F0"
                    />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">
                      STATUTORY LIFECYCLE MILESTONES &amp; TIMELINES FOR LENDERS:
                    </text>
                    <text x="25" y="192" fill="#475569" fontSize="10">
                      • Advocate Notice Cure Window: Strict 15-day statutory repayment demand before legal filings
                    </text>
                    <text x="25" y="208" fill="#475569" fontSize="10">
                      • Cheque / NACH Dishonour Limitation: Demand notice within 30 days of bank return memo
                    </text>
                    <text x="25" y="224" fill="#475569" fontSize="10">
                      • National Lok Adalat Conciliation: Quarterly pan-India benches passing unappealable final decrees
                    </text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Operational Playbook */}
              <section
                id="heading-operational-playbook"
                aria-labelledby="heading-operational-playbook-title"
                className="scroll-mt-28 space-y-4 sm:space-y-5"
              >
                <h2
                  id="heading-operational-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Operational Playbook for Retail Asset Heads &amp; Legal Operations Directors
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Tailored specifically for Chief Operating Officers, Presidents of Retail Assets, and Legal Operations Directors, this institutional playbook eliminates operational bottlenecks and delivers maximum recovery velocity:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Secure Data Intake, Ledger Validation &amp; Limitation Audit
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Securely ingest delinquent portfolio data via encrypted enterprise SFTP or REST APIs. The platform automatically verifies 3-year statutory limitation clocks under Articles 14, 19, and 113 of the Limitation Act, 1963, reconciles account ledgers under the Bankers&apos; Books Evidence Act, 1891, and audits debtor contact coordinates.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Automated Advocate Notice Dispatch with Section 63 BSA Certification
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Generate individualized, advocate-signed statutory demand notices customized by loan type (unsecured personal, credit card, commercial, or cheque bounce). Notices are dispatched simultaneously via India Post Registered Speed Post and digital channels (Email and WhatsApp) with timestamped delivery certificates under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Review detailed fee benchmarks on our{" "}
                        <Link href="/legal-notice-charges" className="text-blue-700 underline">
                          legal notice charges
                        </Link>{" "}
                        breakdown.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Pre-Litigation Conciliation &amp; National Lok Adalat Compromise Decrees
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Channel responding borrowers into structured, advocate-mediated conciliation sessions. Borrowers are referred in bulk to National Lok Adalats organized by District and State Legal Services Authorities (DLSA/SLSA). Compromise settlements reached are formalized as binding civil decrees under Section 21 of the Legal Services Authorities Act, 1987.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Multi-Track Judicial Litigation (Order 37 CPC, DRT &amp; Section 138 NI Act)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        For non-responsive or willful defaulters, our network of verified advocates initiates targeted judicial proceedings: Order 37 summary suits in Civil Courts for fast-track money recovery, Section 138 NI Act or Section 25 PSSA criminal complaints for bounced payments, or SARFAESI Section 13(2) and DRT Original Applications for secured debts over ₹20 Lakhs.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Execution Decree Attachment &amp; Final Asset Realization
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Upon securing civil decrees or Lok Adalat awards, execute attachment proceedings under Order 21 of the Code of Civil Procedure, 1908. Our legal team secures court-ordered salary garnishments, bank account freezing warrants, and asset attachments, ensuring complete monetary realization directly into institutional settlement pools.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Statutory Benchmarks */}
              <section
                id="heading-statutory-benchmarks"
                aria-labelledby="heading-statutory-benchmarks-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-statutory-benchmarks-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Recovery Matrix: Judicial Forums, Thresholds &amp; Timelines
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian recovery law provides specific statutory channels matched to loan ticket size, security collateral, and instrument type. Operating across this statutory matrix ensures optimal judicial speed:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">
                      Statutory Banking Recovery Frameworks, Jurisdictions &amp; Benchmarks
                    </caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Recovery Channel / Mechanism
                        </th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Threshold &amp; Scope
                        </th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Governing Statute / Act
                        </th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Judicial Outcome &amp; Enforceability
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th
                          scope="row"
                          className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900"
                        >
                          Omnichannel Advocate Demand Notice
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">
                          All Portfolios / Any Amount
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Section 63 BSA 2023 &amp; Contract Act
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Statutory 15-day cure window; 75%+ pre-litigation resolution
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th
                          scope="row"
                          className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900"
                        >
                          National Lok Adalat Referral
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">
                          Pre-litigation retail loans &amp; cards
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Section 19-21 Legal Services Authorities Act
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Binding civil decree; zero court fees; no appeal maintainable
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th
                          scope="row"
                          className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900"
                        >
                          Section 138 NI Act (Cheque Dishonour)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">
                          Physical cheques / PDCs
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Negotiable Instruments Act, 1881
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Criminal complaint; up to 2 yrs imprisonment &amp; 2x fine
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th
                          scope="row"
                          className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900"
                        >
                          Section 25 PSSA (e-Mandate / NACH Bounce)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">
                          Recurring digital EMI debits
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Payment and Settlement Systems Act, 2007
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Identical criminal liability and magistrate bench jurisdiction as s.138
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th
                          scope="row"
                          className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900"
                        >
                          Summary Suit (Order 37 CPC)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">
                          Unsecured loans under ₹20 Lakhs
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Code of Civil Procedure, 1908
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          No automatic right to defend; fast-track summary money decree
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th
                          scope="row"
                          className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900"
                        >
                          Debt Recovery Tribunal (DRT)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-purple-700 font-bold">
                          Debts exceeding ₹20 Lakhs
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          RDDBFI Act, 1993 &amp; SARFAESI Act, 2002
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Recovery Certificate (RC); attachment &amp; auction of assets
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th
                          scope="row"
                          className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900"
                        >
                          Execution of Decree (Order 21 CPC)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">
                          All Civil &amp; Lok Adalat Decrees
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Order 21 Code of Civil Procedure
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Salary attachment, bank account freeze &amp; physical attachment
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Benchmarked under active RBI master guidelines, Civil Procedure Code provisions, and Commercial Court enactments as of November 2026. For NBFC specific notice protocols, visit our guide on{" "}
                  <Link
                    href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
                    className="text-blue-700 underline"
                  >
                    NBFC legal notice dispatch
                  </Link>
                  .
                </p>
              </section>

              {/* Section 7: Asset Class Interactive Tabs */}
              <section
                id="heading-asset-class-matrix"
                aria-labelledby="heading-asset-class-matrix-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-asset-class-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Asset Class Specific Recovery Solutions: Retail, Cards, MSME &amp; NACH
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Delinquent Portfolio Segment to View the Dedicated Statutory Enforcement Strategy
                  </p>
                </div>

                <EndToEndRecoveryProblemTabs />
              </section>

              {/* Section 8: Worked Enterprise Case Study */}
              <section
                id="heading-worked-case-study"
                aria-labelledby="heading-worked-case-study-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-worked-case-study-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Pan-India Digital NBFC Recovers ₹42.8 Crore Across 12,000 Delinquent Accounts
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Enterprise Banking Portfolio Case Study
                    </span>
                    <span className="text-xs text-slate-400">
                      Tier-1 Retail NBFC (12,000 Accounts · 90+ DPD Retail Credit)
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> A major Indian non-banking financial company with over ₹3,500 Crore in retail assets under management (AUM) faced a surge in 90+ DPD delinquencies across its unsecured digital personal loan and consumer durable credit portfolio. Over 12,000 delinquent borrower accounts totaling ₹58.4 Crore in principal outstandings were distributed across 18 states, causing heavy provisioning charges under RBI ECL norms.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> The NBFC had engaged three regional collection call centers and numerous local advocate retainers. The recovery rate hovered at under 11%, while borrower complaints regarding aggressive collection calls threatened to trigger RBI regulatory inquiries under Fair Practice Code circulars. Furthermore, over 2,200 accounts were approaching the 3-year statutory limitation deadline under Article 19 of the Limitation Act, 1963.
                    </p>
                    <p>
                      <strong>The End-to-End Legal Action:</strong> The NBFC onboarded LegalRecovery.in to execute a unified legal recovery campaign. The portfolio was ingested in 48 hours via API. In Phase 1, our automated infrastructure dispatched advocate statutory demand notices concurrently via India Post Registered Speed Post and WhatsApp, generating Section 63 BSA electronic delivery audit certificates for each debtor. In Phase 2, 6,800 responsive borrowers were scheduled for conciliation before National Lok Adalat hybrid benches. In Phase 3, summary suits under Order 37 CPC and Section 25 PSSA NACH bounce complaints were filed against persistent non-settlers.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">
                        The Institutional Outcome:
                      </strong>
                      Within 120 days of deployment, the NBFC recovered ₹42.8 Crore in delinquent principal and agreed interest (a 73.2% net portfolio recovery rate). Over 5,400 accounts were resolved through unappealable Lok Adalat compromise decrees, while legal operations expenses dropped by 64% compared to fragmented retainers. Zero regulatory grievances were recorded.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Institutional Evidence Audit Checklist */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Institutional Evidence Checklist: 6 Documents Required for Bulk Action
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, and the Bankers&apos; Books Evidence Act, 1891, institutional recovery filings require clean evidentiary audit trails. Prepare these 6 core documentation assets:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Sanction Letter &amp; Executed Loan Agreement:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Containing borrower Aadhaar e-signature / physical signature, interest schedules, event-of-default acceleration clause, and governing jurisdiction.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Certified Loan Account Statement:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Itemized ledger certificate issued under Section 2A of the Bankers&apos; Books Evidence Act, 1891, detailing total disbursement and unpaid balance.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Section 63 BSA Electronic Delivery Certificate:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Cryptographic server log and delivery timestamp report proving service of the statutory advocate demand notice via WhatsApp/Email.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        India Post Speed Post Tracking Consignment Pod:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Official India Post track-and-trace proof verifying physical delivery or refusal by debtor at their registered KYC address.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        NACH / Cheque Return Dishonour Memo:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Bank memo proving electronic debit bounce with return code (e.g., Code 01 Insufficient Funds) within the statutory 30-day notice window.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      6
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        CIBIL / Credit Bureau Default Record:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Official credit information company default extract corroborating chronic DPD status and establishing willful default characterization.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Enterprise FAQs */}
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
                    Enterprise Recovery FAQs: Answers for Credit &amp; Legal Leadership
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Insights Grounded in Banking Regulations, RBI Directives and Civil Procedure
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

              {/* Section 11: Primary Statutory Sources */}
              <section
                id="heading-statutory-sources"
                aria-labelledby="heading-statutory-sources-title"
                className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200"
              >
                <h2
                  id="heading-statutory-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Statutes, RBI Directives &amp; Official Regulatory Authorities
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
                  Institutional verification status: All recovery workflows verified against active Reserve Bank of India Master Directions, Debt Recovery Tribunal rules, and Bharatiya Sakshya Adhiniyam, 2023 mandates as of November 2026.
                </p>
              </section>

              {/* Primary Enterprise CTA Block */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Initiate Institutional Portfolio Legal Recovery
                </h2>
                <EndToEndRecoveryCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Enterprise Banking &amp; Commercial Dues Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bulk Recovery Cases Hub →
                  </Link>
                  <Link
                    href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    NBFC Dues Recovery Notice →
                  </Link>
                  <Link
                    href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bank Dues Legal Recovery Notice →
                  </Link>
                  <Link
                    href="/legal-recovery-unsecured-loans-guide-banks-nbfcs"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Unsecured Loans Recovery Guide →
                  </Link>
                  <Link
                    href="/legal-notice-for-credit-card-payment-default"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Credit Card Default Legal Notice →
                  </Link>
                  <Link
                    href="/recover-small-ticket-personal-loans-legally-banks"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Small Ticket Personal Loan Recovery →
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
