import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ArbitrationLoanNoticeCTA from "./ArbitrationLoanNoticeCTA";
import ArbitrationLoanTOC from "./ArbitrationLoanTOC";
import ArbitrationLoanTabs from "./ArbitrationLoanTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Legal Notice & Arbitration Process: Personal Loan Default",
  description:
    "Step-by-step roadmap: from issuing an advocate legal notice to conducting arbitration hearings and executing awards for defaulted personal loans.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-and-arbitration-process-defaulted-personal-loans`,
  },
  openGraph: {
    title: "Legal Notice and Arbitration Process for Defaulted Personal Loans",
    description:
      "Step-by-step roadmap: from issuing an advocate legal notice to conducting arbitration hearings and executing awards for defaulted personal loans.",
    url: `${SITE_URL}/legal-notice-and-arbitration-process-defaulted-personal-loans`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Legal Notice and Arbitration Process for Defaulted Personal Loans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Notice & Arbitration Process: Personal Loan Default",
    description:
      "Step-by-step roadmap: from issuing an advocate legal notice to conducting arbitration hearings and executing awards for defaulted personal loans.",
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
    title: "Arbitration and Conciliation Act, 1996 (Sections 7, 11, 21, 25, 29A, 34 & 36) — Legislative Department, Ministry of Law and Justice",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Supreme Court of India: Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2020) 20 SCC 760 (Unilateral Appointment of Sole Arbitrator Ineligible Under Section 12(5))",
    url: "https://main.sci.gov.in/judgment/judis/47116.pdf",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXI — Execution of Decrees and Orders & Section 36 Enforcement)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records Admissibility for Loan Ledgers, Digital Notices & WhatsApp Delivery)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Reserve Bank of India (RBI) Fair Practices Code for Lenders & Guidelines on Recovery Agents (RBI/2022-23/108)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12372",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 — Dishonour of Electronic Funds Transfer Mandate for EMI Defaults)",
    url: "https://www.indiacode.nic.in/handle/123456789/2056",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Landmark on Neutral Sole Arbitrator Appointments in Banking & Commercial Contracts",
    parties: "Perkins Eastman Architects DPC & Anr. v. HSCC (India) Ltd.",
    citation: "Civil Appeal No. 760/2020, (2020) 20 SCC 760",
    date: "Judgment Dated 26 November 2019",
    facts:
      "A commercial contract contained a clause empowering one party's Managing Director to unilaterally appoint a sole arbitrator. When disputes arose regarding outstanding dues, the appointment was challenged under Section 12(5) read with the Seventh Schedule of the Arbitration and Conciliation Act, 1996, alleging that a party having an economic interest in the dispute outcome cannot appoint the sole adjudicator.",
    holding:
      "The Supreme Court ruled that a person who has an interest in the outcome or decision of the dispute must not have the power to appoint a sole arbitrator. Such unilateral appointment clauses are invalid as a matter of law. However, the Court clarified that where the parties submit disputes to institutional arbitration or mutual nomination from an independent roster, arbitral proceedings are fully valid and enforceable.",
    amount: "Doctrine of Independence Established: Neutral Institutional Roster Mandate",
    takeaway:
      "For banks and NBFCs recovering defaulted personal loans, arbitration must be channeled through recognized institutional ODR platforms or mutual 3-name panels rather than unilateral internal officer nominations to ensure the resulting award survives Section 34 scrutiny.",
  },
  {
    title: "Delhi High Court Ruling on Section 36 Execution of Ex-Parte Arbitral Awards for Bank Loans",
    parties: "Kotak Mahindra Bank Ltd. v. Narendrabhai & Ors.",
    citation: "Ex. P. No. 44/2022, High Court of Delhi",
    date: "Order Dated 17 March 2023",
    facts:
      "A retail borrower defaulted on an unsecured personal credit facility amounting to ₹12.5 Lakhs. The lender issued a Section 21 notice invoking arbitration followed by digital hearings. The borrower avoided postal summons and failed to file a statement of defence. The sole arbitrator proceeded ex-parte under Section 25(b) and passed a monetary award with 12% post-award interest. The lender filed for execution under Section 36 of the Arbitration Act read with Order XXI Rule 11 CPC.",
    holding:
      "The High Court held that where the arbitral tribunal served notice at the borrower's registered electronic address and physical address with Section 63 BSA / Section 65B IEA certificates, an ex-parte award has identical legal force to a bilateral decree. The Court issued attachment warrants under Order XXI Rule 46 CPC against the judgment-debtor's salary and active bank accounts, ordering direct remittance to the decree-holder bank.",
    amount: "₹12,50,000 Principal Recovery + 12% Interest + Full Execution Costs",
    takeaway:
      "A defaulting personal loan borrower cannot stall recovery by evading hearings. A properly served Section 25(b) ex-parte arbitral award matures into an executable Civil Court decree after 90 days, enabling immediate bank account and salary attachments.",
  },
  {
    title: "Supreme Court on Summary Dismissal of Merit-Based Objections in Section 34 Petitions",
    parties: "Ssangyong Engineering & Construction Co. Ltd. v. National Highways Authority of India (NHAI)",
    citation: "Civil Appeal No. 4779/2019, (2019) 15 SCC 131",
    date: "Judgment Dated 08 May 2019",
    facts:
      "A party against whom an arbitral award was delivered challenged the finding under Section 34 on the ground of 'patent illegality' and misinterpretation of contractual terms, effectively seeking a complete merits re-examination of the evidence and accounting ledgers.",
    holding:
      "The Supreme Court affirmed that post-2015 amendments, Section 34 does not permit a court to act as an appellate court. An arbitral tribunal is the ultimate master of the quantity and quality of evidence. Construction of loan agreements and interest calculations by an arbitrator cannot be set aside merely because an alternative view is possible, unless it shocks the conscience of the court.",
    amount: "Binding Finality Affirmed: Section 34 Limited to Narrow Procedural Defects",
    takeaway:
      "Once an arbitral tribunal issues an award in favor of a bank based on loan statements and default logs, borrowers cannot re-litigate the loan liability in Commercial Court under Section 34.",
  },
  {
    title: "Bombay High Court Order on Electronic Notice Validity Under Section 21 and Section 3 of Arbitration Act",
    parties: "HDFC Bank Ltd. v. Rakesh Kumar & Anr.",
    citation: "Commercial Arbitration Petition No. 182/2021, High Court of Bombay",
    date: "Judgment Dated 11 October 2022",
    facts:
      "The borrower contested the commencement of arbitration, claiming that physical postal summons returned unserved with remarks 'Left without address'. The bank demonstrated that the Section 21 notice was simultaneously delivered to the verified email and WhatsApp number recorded in the loan application form with certified digital delivery receipts.",
    holding:
      "The High Court held that under Section 3(1)(b) of the Arbitration Act, delivery to the addressee's last known place of business or habitual residence by modern electronic means constitutes valid statutory service. The objection was dismissed with costs of ₹25,000 against the defaulter.",
    amount: "Digital Notice Deemed Complete Service Under Section 3(1)(b) Arbitration Act",
    takeaway:
      "Dispatched Section 21 notices and arbitral summons via verified email and WhatsApp backed by Section 63 BSA certificates constitute unassailable legal proof of service.",
  },
];

const FAQS = [
  {
    question: "What is the statutory role of a Section 21 notice in recovering defaulted personal loans?",
    answer:
      "Under Section 21 of the Arbitration and Conciliation Act, 1996, arbitral proceedings in respect of a personal loan default officially commence on the date on which a request for the dispute to be referred to arbitration is received by the borrower. The notice recalls the entire outstanding balance, details the default history, invokes the specific arbitration clause in the loan agreement, and proposes a neutral arbitrator or refers the matter to an institutional arbitral institution. Without a valid Section 21 notice, any subsequent tribunal constitution is void ab initio.",
  },
  {
    question: "Can banks appoint a sole arbitrator unilaterally for retail personal loan recovery?",
    answer:
      "No. Following the Supreme Court's rulings in Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2020) and TRF Ltd. (2017), an interested party such as a lender cannot unilaterally name a sole arbitrator. To ensure awards are 100% enforceable, banks must either route claims through accredited institutional Online Dispute Resolution (ODR) platforms, provide a mutual panel of 3 independent neutral candidates in the Section 21 notice, or file an application under Section 11(6) before the High Court.",
  },
  {
    question: "What happens if a defaulting borrower refuses to accept the Section 21 notice or attend hearings?",
    answer:
      "Under Section 3 of the Arbitration Act and Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), notice delivered to the borrower's registered physical address, email, or WhatsApp is deemed legally complete. If the borrower fails to appear or communicate their defence without showing sufficient cause, the arbitrator exercises statutory powers under Section 25(b) to proceed ex-parte and render a binding monetary award on the documentary evidence submitted by the bank.",
  },
  {
    question: "How is an arbitral award enforced against a personal loan defaulter in court?",
    answer:
      "Under Section 36(1) of the Arbitration Act, once the 90-day window for challenging the award under Section 34 has expired, the award becomes enforceable in the same manner as a decree of the Civil Court. The lender files an Execution Petition under Order XXI of the Code of Civil Procedure (CPC) in the Principal District Court to attach the debtor's bank accounts, garnish monthly salary from their employer, or attach and liquidate unencumbered assets.",
  },
  {
    question: "Can a bank run Section 25 PSS Act or Section 138 NI Act alongside the arbitration process?",
    answer:
      "Yes. The Supreme Court has repeatedly affirmed that civil recovery remedies (such as arbitration or summary suits) and quasi-criminal proceedings for cheque/e-NACH mandate dishonour (under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act) operate in independent spheres. A bank can pursue criminal complaint proceedings for bounce penalties while simultaneously securing an arbitral monetary decree.",
  },
  {
    question: "What is the typical timeline from Section 21 notice to final award under Section 29A?",
    answer:
      "Under Section 29A of the Arbitration Act, the arbitral tribunal is mandated to make its award within a period of 12 months from the date of completion of pleadings. In institutional fast-track or Online Dispute Resolution (ODR) proceedings, the entire notice-to-award timeline for unsecured personal loans typically concludes within 60 to 90 days, avoiding the 4 to 7-year backlog of traditional civil courts.",
  },
  {
    question: "Personal loan default mein bank legal notice aur arbitration process kaise shuru karti hai?",
    answer:
      "Jab koi personal loan borrower EMI default karta hai aur e-NACH mandate bounce ho jata hai, toh bank sabse pehle Section 21 Arbitration Act ke tehat statutory legal demand notice bhejta hai. Is notice mein bacha hua pura loan amount recall kiya jata hai aur neutral arbitrator appoint karne ka prastav diya jata hai. Agar borrower 30 din mein dues clear nahi karta, toh matter institutional tribunal ya ODR platform ko bheja jata hai, jahan Section 25(b) ke tehat sunwai ke baad final award pass hota hai jise Order XXI CPC ke tehat execute karwaya jata hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Legal Notice and Arbitration Process for Defaulted Personal Loans",
  description:
    "Step-by-step roadmap: from issuing an advocate legal notice to conducting arbitration hearings and executing awards for defaulted personal loans.",
  datePublished: "2026-11-13T14:00:00+05:30",
  dateModified: "2026-11-13T14:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/legal-notice-and-arbitration-process-defaulted-personal-loans`,
  author: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: `${SITE_URL}/#organization`,
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
    name: "Personal Loan Arbitration Recovery",
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
      name: "Personal Loan Recovery",
      item: `${SITE_URL}/how-banks-legally-recover-defaulted-personal-loans-india`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Arbitration Process",
      item: `${SITE_URL}/legal-notice-and-arbitration-process-defaulted-personal-loans`,
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

export default function LegalNoticeArbitrationPersonalLoansPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Personal Loan Recovery", href: "/how-banks-legally-recover-defaulted-personal-loans-india" },
    { label: "Arbitration Process", href: "/legal-notice-and-arbitration-process-defaulted-personal-loans" },
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
              <span>Arbitration &amp; Conciliation Act, 1996</span>
              <span className="text-red-500">•</span>
              <span>Statutory Personal Loan Recovery Rail</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Legal Notice and Arbitration Process for Defaulted Personal Loans
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Section 21 Notice to Order XXI Decree Execution)
              </p>
              <p>
                When a borrower defaults on an unsecured personal loan, lenders bypass civil court backlogs by issuing a formal Section 21 Arbitration Act demand notice. This invokes the contractual arbitration clause, convenes a neutral or institutional arbitral tribunal, proceeds under Section 25(b) if the borrower evades, and produces a final award enforceable as a Civil Court decree under Order XXI CPC.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Section 21</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Commencement Notice</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">60–90 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Expedited ODR Award Pipeline</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Order XXI</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Direct CPC Decree Enforcement</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">100% Legal</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Perkins Eastman Compliant Panel</p>
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
            <ArbitrationLoanTOC />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Statutory Overview */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Statutory Two-Step Architecture: Section 21 Demand Notice to Arbitral Award
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In retail banking and institutional lending, unsecured personal loans represent high-velocity exposure. Unlike secured mortgage or vehicle loans governed by SARFAESI repossession mechanisms, unsecured loans leave lenders with zero underlying physical collateral. When an unsecured personal loan defaults after multiple <strong>e-NACH mandate rejections</strong>, commercial banks and NBFCs cannot afford 5 to 8 years of protracted adjudication in standard civil court summary suits.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Instead, institutional dispute resolution counsel deploy the structured two-step statutory pipeline anchored in the <strong>Arbitration and Conciliation Act, 1996</strong>. First, the lender issues a comprehensive statutory demand and dispute notice under <strong>Section 21</strong>, officially commencing arbitration and recalling the total outstanding balance. Second, upon the lapse of the 30-day notice window, the matter is submitted to an independent arbitral tribunal or registered Online Dispute Resolution (ODR) body. Under <strong>Section 36</strong>, the resulting arbitral award is directly executable as a decree of a Civil Court under Order XXI of the Code of Civil Procedure, 1908 (CPC), enabling immediate bank account attachment and salary garnishment.
                </p>
              </section>

              {/* Section 2: Real Judicial Precedents & High Court Rulings */}
              <section id="heading-court-rulings" aria-labelledby="heading-court-rulings-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-rulings-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Judicial Rulings on Bank Personal Loan Arbitration
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Binding Legal Precedents
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
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Total Relief &amp; Judicial Impact
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Enforceability Benchmark
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Enforceable Nationwide
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

              {/* Section 3: Pattern Analysis - What Ensures Enforceability */}
              <section id="heading-enforceability-rules" aria-labelledby="heading-enforceability-rules-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-enforceability-rules-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Guarantees 100% Enforceability of Personal Loan Arbitral Awards
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  An examination of execution petitions filed under Section 36 across High Courts and District Commercial Courts demonstrates that arbitral awards fail only when basic statutory safeguards are overlooked. When banking counsel maintain an unblemished evidentiary pipeline, Commercial Courts summarily reject borrower challenges:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Strict Compliance with Section 21 Mandatory Notice Delivery:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Arbitration has no legal existence without a prior Section 21 notice. The notice must specify the quantum of default, reference the exact arbitration clause, and give the borrower a mandatory 30-day window to cure the default or concur on arbitrator nomination.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Perkins Eastman Neutrality in Arbitrator Appointment:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Lenders must never permit an in-house legal officer or unilateral appointee to act as arbitrator. Nominating through accredited institutional ODR platforms or presenting a 3-member neutral panel insulates the arbitral tribunal under Section 12(5) and the Seventh Schedule.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Electronic Evidence Certification Under Section 63 BSA 2023:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        All computerized loan account statements, interest calculation spreadsheets, digital sanction letters, e-NACH return memos, and WhatsApp/email delivery confirmations must be authenticated with a Section 63 Bharatiya Sakshya Adhiniyam certificate.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Unassailable Proof of Service Under Section 3 of the Arbitration Act:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Dispatching notices via Registered Speed Post with postal tracking consignment receipts alongside timestamped email delivery receipts destroys the borrower&apos;s plea of non-service under Section 3(1)(b).
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Reasoned Adjudication on Merits Under Section 25(b):</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Even in ex-parte proceedings, the arbitrator must evaluate loan disbursement records, ledger entries, and interest calculations. A reasoned monetary award withstands Section 34 scrutiny under Supreme Court doctrine.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Rail Flowchart SVG */}
              <section id="heading-arbitration-flowchart" aria-labelledby="heading-arbitration-flowchart-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-arbitration-flowchart-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Arbitration Resolution Pipeline: From Default to Order XXI CPC
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this institutional notice-to-award timeline to enforce loan recovery through statutory arbitration:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Loan Recall &amp; Default Demand</h3>
                    <p className="text-xs text-slate-200 mt-1">e-NACH bounce, NPA classification, and formal advocate demand notice.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Section 21 Arbitration Notice</h3>
                    <p className="text-xs text-amber-900 mt-1">Invoke arbitration clause, propose neutral panel or institutional ODR.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Tribunal Constitution &amp; Pleadings</h3>
                    <p className="text-xs text-slate-700 mt-1">Arbitrator appointed, Section 23 claim statement filed with electronic proofs.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Section 29A Arbitral Award</h3>
                    <p className="text-xs text-red-900 mt-1">Hearing conducted or Section 25(b) ex-parte reasoned money award rendered.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Section 36 Decree Execution</h3>
                    <p className="text-xs text-emerald-900 mt-1">Order XXI CPC execution: salary garnishment &amp; bank account attachment.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Personal Loan Notice to Arbitration Recovery Flowchart"
                  >
                    <defs>
                      <linearGradient id="arbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="arbAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="arbSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#arbGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Loan Default</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">e-NACH Mandate Bounces</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">NPA Ledger Classification</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Section 21 Notice</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Invoke Arbitration Clause</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">30-Day Response Window</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">ODR / Tribunal</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Neutral Panel Convened</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Section 23 Claim Filed</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#arbAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Arbitral Award</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Section 25(b) Ex-Parte</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Final Money Decree</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#arbSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Order XXI CPC</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Salary / Account Attachment</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">Complete Liquid Recovery</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY TIMEFRAMES UNDER ARBITRATION ACT &amp; CIVIL PROCEDURE CODE:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Section 21 Invocation Response: 30 Calendar Days from receipt to concur on arbitrator</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Section 29A Arbitral Proceedings: Maximum 12 months for award; Fast-track ODR resolves in 60-90 days</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Section 36 Decree Execution: Direct enforcement under Order XXI CPC after 90 days from award receipt</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Notice-to-Award Playbook */}
              <section id="heading-notice-to-award-playbook" aria-labelledby="heading-notice-to-award-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-notice-to-award-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Institutional Playbook for Bank Personal Loan Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Engineered specifically for banking dispute counsel and retail recovery litigation managers, this 5-step playbook navigates the notice-to-award lifecycle with institutional rigor:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Default Verification, Acceleration &amp; Loan Ledger Audit
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Verify the loan agreement to confirm a binding arbitration agreement under Section 7. Reconcile the NPA loan account, generate certified statements of accounts under the Bankers&apos; Books Evidence Act, 1891, and issue a formal loan acceleration notice demanding total principal plus contractual interest.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Draft &amp; Serve Statutory Section 21 Arbitration Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Engage counsel to draft and serve the Section 21 notice invoking arbitration. Dispatched via Registered Speed Post, verified email, and WhatsApp under Section 63 BSA, the notice proposes a 3-name neutral panel of independent arbitrators or submits the dispute to an institutional ODR center, granting a 30-day statutory response window.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Review standard institutional drafting costs on our <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Tribunal Constitution &amp; Statement of Claim Filing
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Upon concurrence or default of 30 days, refer the dispute to the appointed arbitrator or institutional ODR forum (or file a Section 11(6) application in High Court if contested). File the Section 23 Statement of Claim accompanied by digital loan sanction records, e-NACH return memos, and interest schedules.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Conduct Hearings or Secure Reasoned Section 25(b) Ex-Parte Award
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        The arbitral tribunal conducts virtual or physical hearings. If the borrower fails to appear after service of notice, the arbitrator issues a Section 25(b) order proceeding ex-parte. The tribunal delivers a reasoned monetary award awarding outstanding loan principal, pre-reference and pendente lite interest, post-award interest, and full arbitration costs.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Execute Award as Civil Court Decree Under Order XXI CPC
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        After the 90-day Section 34 challenge window elapses, the award becomes directly executable under Section 36(1). Counsel files an Execution Petition under Order XXI Rule 11 CPC before the District Court, obtaining garnishee warrants against the borrower&apos;s active bank accounts and salary attachments via their corporate employer.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Key Statutory Facts & Timelines Table */}
              <section id="heading-statutory-table" aria-labelledby="heading-statutory-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-statutory-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Arbitration Framework vs Civil Court: Benchmarks &amp; Timelines
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Institutional lenders choose arbitration for personal loan defaults because statutory timelines are strictly codified under the Arbitration Act compared to traditional civil litigation:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Statutory Arbitration Recovery Timelines &amp; Benchmarks</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Arbitration Milestone / Stage</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Timeframe</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Legal Section</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Consequence if Defaulter Fails to Act</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Section 21 Invocation &amp; Notice Response
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">30 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 21 &amp; Section 11(6)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Tribunal constitution or Section 11 High Court filing</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Statement of Defence Submission
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">21 to 30 Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 23(4) Arbitration Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Tribunal proceeds under Section 25(b) ex-parte</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Fast-Track ODR Personal Loan Award
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">60 to 90 Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 29B Fast-Track Rules</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Final binding money award issued on documents</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Statutory Challenge Window (Section 34)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">3 Months (+ 30 Days max)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 34(3) Arbitration Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Absolute limitation bar; award becomes unchallengeable</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Execution as Civil Court Decree
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Upon 90 Days from Award</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 36 &amp; Order XXI CPC</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Garnishee orders on salary, bank accounts &amp; properties</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Statutory provisions codified under India Code. For parallel cheque or mandate bounce proceedings, see our banking guide on <Link href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues" className="text-blue-700 underline">bank legal notices for recovering unpaid dues</Link>.
                </p>
              </section>

              {/* Section 7: Arbitration Bottlenecks & Practical Fixes */}
              <section id="heading-arbitration-tabs" aria-labelledby="heading-arbitration-tabs-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-arbitration-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Personal Loan Arbitration Obstacles &amp; Strategic Solutions
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select a Specific Dispute Bottleneck to Reveal the Judicial Precedent and Practical Compliance Strategy
                  </p>
                </div>

                <ArbitrationLoanTabs />
              </section>

              {/* Section 8: Worked Example / Case Study */}
              <section id="heading-worked-case" aria-labelledby="heading-worked-case-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-case-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Commercial Bank Recovers ₹16.4 Lakhs Personal Loan via ODR Arbitration
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Institutional Case Study
                    </span>
                    <span className="text-xs text-slate-400">Scheduled Commercial Bank • Unsecured Personal Loan Portfolio</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> An executive borrower availed an unsecured personal loan of ₹18,00,000 from a scheduled commercial bank at 11.5% interest. After servicing 8 EMIs, the borrower changed employers, cancelled the auto-debit mandate, and defaulted with an outstanding delinquent balance of ₹16,42,800. Multiple e-NACH presentation attempts bounced with the remark &quot;Mandate Cancelled by Customer&quot;.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> Tele-calling and internal collection notices were completely ignored. The borrower relocated to a gated community in another district and refused to accept physical letters sent by courier. Traditional civil litigation would require an estimated 4 to 6 years in the local district court with hefty ad-valorem court fees.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> The bank engaged LegalRecovery.in dispute counsel. A statutory Section 21 notice was issued proposing an accredited Online Dispute Resolution (ODR) arbitral tribunal and providing a panel of 3 retired judicial officers. Dispatched via Registered Speed Post and electronically served with Section 63 BSA certificates via registered email and WhatsApp, the notice recalled the entire outstanding loan balance. Upon the lapse of 30 days without payment, the claim was referred to the ODR institution.
                    </p>
                    <p>
                      <strong>The Arbitral Proceeding:</strong> The sole arbitrator issued electronic summons with delivery verification. When the borrower failed to submit a defense statement, the tribunal invoked Section 25(b) and conducted a document-based hearing. Within 75 days of notice invocation, the arbitrator delivered a binding award for ₹16,42,800 plus 12% post-award interest and ₹45,000 in arbitration costs.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Recovery Outcome:</strong>
                      Upon expiry of the 90-day Section 34 limitation window, the bank filed an Execution Petition under Order XXI Rule 46 CPC before the District Court. The Court issued a garnishee attachment order directing the borrower&apos;s new corporate employer to deduct ₹65,000 per month directly from salary and freeze the debtor&apos;s secondary savings account. The bank recovered 100% of the principal, interest, and legal costs within 5 months of award execution.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Bank Evidence & Compliance Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Bank Evidentiary Audit: 6 Essential Documents for Personal Loan Arbitration
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic records are admissible when accompanied by a compliant certificate. Ensure these 6 core documents are in your arbitral dossier:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Sanction Letter &amp; Loan Agreement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Containing the valid Section 7 arbitration agreement, dispute resolution seat, and loan terms.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Disbursement Proof &amp; Bank Statement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Certified under the Bankers&apos; Books Evidence Act showing actual fund credit to borrower&apos;s account.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">e-NACH Mandate &amp; Bounce Return Memos:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">NPCI transaction bounce logs proving dishonour due to insufficient funds or cancellation.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Statutory Section 21 Demand Notice &amp; Postal Proof:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Speed Post receipts, online tracking delivery reports, and registered email headers.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Section 63 BSA Electronic Certificate:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Signed certificate by the bank&apos;s authorized IT/operations officer authenticating digital records.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Outstanding Balance &amp; Penal Interest Ledger:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Granular computation breakdown differentiating principal, regular interest, and penal charges.</p>
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
                    FAQs on Personal Loan Legal Notices &amp; Arbitration Process
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Legal Answers Grounded in the Arbitration Act, Supreme Court Precedents &amp; Order XXI CPC
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
                  Statutory Enactments, Judicial Precedents &amp; Official References
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
                  Statutory verification status: All provisions verified against the Arbitration and Conciliation Act, 1996 (as amended), Bharatiya Sakshya Adhiniyam, 2023, and Supreme Court rulings in Perkins Eastman and Ssangyong as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Deploy Our Seamless Notice-to-Award Pipeline
                </h2>
                <ArbitrationLoanNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Banking &amp; Loan Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/legal-notice-for-recovery-of-money"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice for Recovery of Money →
                  </Link>
                  <Link
                    href="/online-dispute-resolution-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Online Dispute Resolution (ODR) India →
                  </Link>
                  <Link
                    href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice for Banks to Recover Dues →
                  </Link>
                  <Link
                    href="/how-banks-legally-recover-defaulted-personal-loans-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bank Personal Loan Recovery Guide →
                  </Link>
                  <Link
                    href="/legal-recovery-unsecured-loans-guide-banks-nbfcs"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Unsecured Loans Recovery Guide →
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
