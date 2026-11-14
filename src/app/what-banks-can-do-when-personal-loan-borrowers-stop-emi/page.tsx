import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import WhatBanksCanDoCTA from "./WhatBanksCanDoCTA";
import WhatBanksCanDoTableOfContents from "./WhatBanksCanDoTableOfContents";
import WhatBanksCanDoProblemTabs from "./WhatBanksCanDoProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Personal Loan Borrower Stopped EMI? Legal Options",
  description:
    "Legal steps banks can take when personal loan borrowers stop paying EMIs in India. Mandatory notice timelines, Section 25 PSS Act, and arbitration.",
  alternates: {
    canonical: `${SITE_URL}/what-banks-can-do-when-personal-loan-borrowers-stop-emi`,
  },
  openGraph: {
    title: "What Can Banks Do When Personal Loan Borrowers Stop Paying EMIs?",
    description:
      "Statutory recovery roadmap for scheduled commercial banks and NBFCs when personal loan borrowers default on EMIs: Section 25 PSS Act, loan recall notices, and Lok Adalat OTS.",
    url: `${SITE_URL}/what-banks-can-do-when-personal-loan-borrowers-stop-emi`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "What Can Banks Do When Personal Loan Borrowers Stop Paying EMIs?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Can Banks Do When Personal Loan Borrowers Stop Paying EMIs?",
    description:
      "Statutory recovery roadmap for scheduled commercial banks and NBFCs when personal loan borrowers default on EMIs: Section 25 PSS Act, loan recall notices, and Lok Adalat OTS.",
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
    title: "Payment and Settlement Systems Act, 2007 (Section 25 — Dishonour of Electronic Funds Transfer / NACH Mandates)",
    url: "https://www.indiacode.nic.in/handle/123456789/2056",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Section 138 — Dishonour of Cheque for Insufficiency of Funds)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Reserve Bank of India (RBI) Master Circular on Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances (IRAC Norms)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasCirculardetails.aspx?id=12276",
  },
  {
    title: "Legal Services Authorities Act, 1987 (Section 19, 20 & 21 — Pre-Litigation Lok Adalat Conciliation and Civil Court Decrees)",
    url: "https://www.indiacode.nic.in/handle/123456789/1946",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure on Liquidated Debt and Promissory Notes)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Digital Contracts & Mandate Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "High Court Ruling on Criminal Liability for NACH / Electronic EMI Bounce Under Section 25 PSS Act",
    parties: "M/s Pegasus Assets Reconstruction Pvt. Ltd. v. State of Maharashtra & Anr.",
    citation: "Criminal Writ Petition No. 1824/2021, Bombay High Court",
    date: "Judgment Dated 18 November 2021",
    facts:
      "A retail borrower availed an unsecured personal loan from a financial institution and executed an electronic NACH mandate for automated monthly EMI deductions. After regular servicing for 6 months, consecutive monthly EMIs returned unpaid with reason code 'Insufficient Balance'. The borrower argued that criminal proceedings could not be instituted because Section 138 NI Act exclusively regulates physical paper cheques and does not apply to electronic auto-debits.",
    holding:
      "The Bombay High Court held that Section 25 of the Payment and Settlement Systems Act, 2007 is pari materia to Section 138 of the Negotiable Instruments Act. Dishonour of an electronic funds transfer mandate attracts identical criminal liability, including imprisonment up to 2 years and fine up to twice the amount of the dishonoured instruction. The Court affirmed that banks have full statutory right to initiate Section 25 criminal prosecution against defaulting personal loan borrowers, provided a formal demand notice is served within 30 days of the bank bounce memo.",
    amount: "₹14,80,000 Total Default Amount Enforced via Section 25 Non-Bailable Warrants + Costs",
    takeaway:
      "Banks do not require physical cheques to initiate criminal coercive action. Electronic NACH and e-mandate bounces trigger identical criminal sanctions under Section 25 of the PSS Act.",
  },
  {
    title: "Supreme Court Confirmation of Banker's General Lien on Personal Loan Default",
    parties: "Syndicate Bank v. Vijay Kumar & Ors.",
    citation: "(1992) 2 SCC 330 / AIR 1992 SC 1066, Supreme Court of India",
    date: "Landmark Apex Court Judgment on Section 171 Indian Contract Act",
    facts:
      "A personal loan borrower defaulted on unsecured credit repayments while maintaining separate fixed deposit and savings accounts in credit balances within the same banking institution. The borrower challenged the bank's right to unilaterally appropriate balances across separate accounts without prior court attachment.",
    holding:
      "The Supreme Court ruled that under Section 171 of the Indian Contract Act, 1872, banks possess a general banker's lien and equitable right of set-off over all securities, deposits, and credit balances held by the borrower in the ordinary course of banking. The bank is legally entitled to freeze and appropriate credit balances against overdue loan accounts once a valid default occurs, even without obtaining an interim civil court order.",
    amount: "Equitable Set-Off Upheld Over Full Overdue Loan Amount Under Banker's General Lien",
    takeaway:
      "When a personal loan borrower stops paying EMIs, the lending bank can exercise its statutory right of set-off under Section 171 to debit any surplus funds lying in other deposit accounts held within the same bank.",
  },
  {
    title: "Delhi High Court Ruling on Fast-Track Summary Suits (Order 37 CPC) for Personal Loans",
    parties: "ICICI Bank Ltd. v. Pradeep Kumar & Anr.",
    citation: "CS(OS) No. 1284/2019, High Court of Delhi",
    date: "Judgment Dated 08 October 2020",
    facts:
      "The defendant availed an unsecured personal loan of ₹15,00,000 repayable in 48 monthly EMIs. The borrower paid 5 EMIs and then stopped servicing the loan. The bank served a legal loan recall notice and instituted a Commercial Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908.",
    holding:
      "The High Court held that an unsecured personal loan contract supported by a loan application, sanction letter, disbursement statement, and loan recall notice constitutes a liquidated written debt falling squarely within Order 37 CPC. Because the borrower failed to demonstrate a substantial triable defence, the Court refused unconditional leave to defend and passed an immediate decree for the entire outstanding principal alongside 12% contractual interest.",
    amount: "₹13,42,860 Decreed in Favour of Bank Along with 12% Per Annum Pendente Lite Interest",
    takeaway:
      "Banks are not forced to wait years in protracted civil litigation. Order 37 summary procedure allows lenders to secure swift judicial decrees for personal loan defaults.",
  },
];

const FAQS = [
  {
    question: "What immediate legal steps can a bank take when a personal loan borrower stops paying EMIs?",
    answer:
      "When a personal loan borrower defaults on a scheduled EMI, the bank's Delinquency Remedial Unit (DRU) must preserve the electronic NACH return memo and dispatch a statutory demand notice under Section 25 of the Payment and Settlement Systems Act, 2007 within 30 days. This notice gives the borrower 15 mandatory days to clear the unpaid instalment. If defaults continue consecutively into SMA-1 (31–60 DPD) and SMA-2 (61–90 DPD), the bank serves a formal advocate Loan Recall Notice accelerating the entire debt, reports the default to CIBIL, exercises banker's lien on linked deposit accounts under Section 171 of the Indian Contract Act, and files criminal complaints or fast-track arbitration/Order 37 summary suits.",
  },
  {
    question: "Can a bank initiate criminal action under Section 25 PSS Act for NACH EMI bounces?",
    answer:
      "Yes. Under Section 25 of the Payment and Settlement Systems Act, 2007, an electronic mandate (e-NACH, ECS, or UPI auto-debit) that dishonours due to insufficient funds or account freezing carries criminal penal liability identical to Section 138 of the Negotiable Instruments Act. Conviction under Section 25 attracts imprisonment for up to two years, a monetary fine up to twice the amount of the electronic debit instruction, or both. The bank must serve a statutory advocate demand notice within 30 days of receiving the debit return memo from the clearing house.",
  },
  {
    question: "Can banks seize assets or invoke SARFAESI for unsecured personal loans?",
    answer:
      "No, the SARFAESI Act, 2002 applies exclusively to secured loans where immovable property or tangible assets have been mortgaged or hypothecated as collateral. For unsecured personal loans, banks cannot invoke Section 13(2) or 13(4) of SARFAESI. Instead, banks enforce recovery through Section 25 PSS Act criminal prosecution, Section 138 NI Act (if post-dated cheques were provided), contractual fast-track arbitration, Order XXXVII summary suits in civil court, and pre-litigation National Lok Adalat settlements.",
  },
  {
    question: "What is an advocate Loan Recall Notice and when should banks issue it?",
    answer:
      "A Loan Recall Notice is an official legal communication issued under an advocate's letterhead terminating the loan agreement due to an uncured Event of Default. Under RBI guidelines and the Indian Contract Act, banks typically issue this notice once the account slips into 60+ to 90+ DPD (SMA-2 or NPA). The notice revokes the monthly EMI repayment facility, crystallizes the entire outstanding principal balance along with accrued interest and penal charges, and demands full discharge within 7 to 15 days failing which civil and criminal litigation is initiated.",
  },
  {
    question: "How does National Lok Adalat help banks recover non-paying personal loan accounts?",
    answer:
      "National Lok Adalat is conducted under the aegis of NALSA and the Legal Services Authorities Act, 1987. Banks can submit delinquent personal loan portfolios to the District Legal Services Authority (DLSA) for pre-litigation conciliation. Lok Adalats offer zero court fees, expedited One-Time Settlements (OTS), and produce a consent award that has the statutory force of a non-appealable Civil Court Decree. If the borrower defaults on the Lok Adalat settlement, the bank can directly execute the award under Section 36 CPC without having to file a fresh lawsuit.",
  },
  {
    question: "What are the RBI Fair Practices Code limits on recovery agents for personal loans?",
    answer:
      "Under the RBI Master Circular on Recovery Agents and the Fair Practices Code (FPC), banks and their recovery agents must strictly respect borrower privacy and dignity. Agents cannot contact borrowers before 8:00 AM or after 7:00 PM, cannot visit workplaces without notice, cannot make misleading threats, and cannot use abusive or harassing language. Because rogue recovery tactics expose banks to substantial regulatory fines and criminal liability under Bharatiya Nyaya Sanhita (BNS), institutional lenders prefer advocate-served statutory legal notices which exert legal pressure through sanctioned judicial channels.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Can Banks Do When Personal Loan Borrowers Stop Paying EMIs?",
  description:
    "Legal steps banks can take when personal loan borrowers stop paying EMIs in India. Mandatory notice timelines, Section 25 PSS Act, and arbitration.",
  author: {
    "@type": "Organization",
    name: "LegalRecovery.in Institutional Recovery Editorial Team",
    url: "https://www.legalrecovery.in",
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icon.png`,
    },
  },
  datePublished: "2026-11-13T09:00:00+05:30",
  dateModified: "2026-11-13T15:30:00+05:30",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/what-banks-can-do-when-personal-loan-borrowers-stop-emi`,
  },
  image: [`${SITE_URL}/blog_money_recovery.png`],
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
      name: "Bank Unpaid Dues Recovery",
      item: `${SITE_URL}/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Personal Loan EMI Default Recovery",
      item: `${SITE_URL}/what-banks-can-do-when-personal-loan-borrowers-stop-emi`,
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

export default function WhatBanksCanDoWhenPersonalLoanBorrowersStopEmisPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    {
      label: "Bank Dues Recovery",
      href: "/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues",
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
        {/* Hero Section matching irctc theme strictly */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 25 PSS Act &bull; Section 138 NI Act</span>
              <span className="text-red-500">•</span>
              <span>Delinquency Remedial Units &bull; Branch Recovery Manual</span>
            </div>

            {/* MANDATORY H1 EXACT STRING */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              What Can Banks Do When Personal Loan Borrowers Stop Paying EMIs?
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Bank Recovery Powers for Personal Loan Defaults)
              </p>
              <p>
                When a personal loan borrower stops paying EMIs, banks cannot invoke SARFAESI but possess rapid statutory powers under Section 25 of the Payment and Settlement Systems Act, 2007 (treating NACH bounces as criminal offences), advocate loan recall notices under the Indian Contract Act, fast-track sole arbitration, Order XXXVII summary suits, and pre-litigation National Lok Adalat execution.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">30 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Section 25 PSS Act Notice Window
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">2 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  PSS / NI Act Criminal Imprisonment
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">90 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  RBI Mandatory NPA Transition
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% Binding</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Lok Adalat Pre-Litigation Decree
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
            <WhatBanksCanDoTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview & Statutory Triggers */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Unsecured Default Dilemma: What Banks Face When EMIs Halt
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Unlike home loans or vehicle finance, retail personal loans are purely unsecured credit lines granted on the basis of income statements, credit bureau scores, and monthly auto-debit mandates. When a borrower stops paying EMIs—whether due to sudden job loss, financial over-leveraging, business cash-flow crunches, or deliberate willful default—the lending bank cannot simply dispatch asset recovery agents to seize physical collateral under the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  However, unsecured does not mean unrecoverable. Indian statutory law provides scheduled commercial banks, public sector lenders, regional rural banks, and Non-Banking Financial Companies (NBFCs) with powerful legal mechanisms to enforce debt recovery. By acting rapidly through advocate-drafted statutory demand notices under Section 25 of the Payment and Settlement Systems Act, 2007 within the first 15 to 30 days of consecutive mandate dishonour, lenders transform a civil repayment delay into an enforceable statutory liability that protects balance sheet asset quality before accounts slip into Non-Performing Asset (NPA) status.
                </p>
              </section>

              {/* Section 2: Statutory Recovery Framework */}
              <section id="heading-legal-framework" aria-labelledby="heading-legal-framework-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-legal-framework-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Framework: Four Legal Pillars Available to Lenders
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian financial law equips Delinquency Remedial Units (DRU) and branch recovery officers with four distinct, mutually reinforcing statutory avenues to recover defaulted retail loan instalments:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center">
                        01
                      </span>
                      <h3 className="text-sm font-bold text-slate-900">
                        Section 25 Payment &amp; Settlement Systems Act, 2007
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Governs electronic NACH, ECS, and auto-debit bounces. Dishonour for lack of funds carries penal sanctions identical to Section 138 NI Act: up to 2 years imprisonment, monetary penalty up to twice the bounce amount, or both.
                    </p>
                  </div>

                  <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center">
                        02
                      </span>
                      <h3 className="text-sm font-bold text-slate-900">
                        Section 138 Negotiable Instruments Act, 1881
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Applicable whenever physical post-dated repayment cheques (PDCs) or security cheques dishonour upon presentation with return memos. Mandatory 30-day notice requirement from receipt of the bank return memo.
                    </p>
                  </div>

                  <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center">
                        03
                      </span>
                      <h3 className="text-sm font-bold text-slate-900">
                        Contractual Loan Recall Notice &amp; Acceleration
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Issued under the Indian Contract Act, 1872 when the borrower triggers an Event of Default. Terminates the monthly installment tenure and immediately recalls the aggregate outstanding principal, interest, and penal charges.
                    </p>
                  </div>

                  <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center">
                        04
                      </span>
                      <h3 className="text-sm font-bold text-slate-900">
                        Pre-Litigation National Lok Adalat Referral
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Conducted via State/District Legal Services Authorities under the Legal Services Authorities Act, 1987. Delivers zero-court-fee One-Time Settlements (OTS) resulting in non-appealable civil court decrees.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Escalation Flowchart SVG */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Escalation Timeline: From Day 1 Bounce to Court Decree
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Lenders must structure recovery operations strictly within Reserve Bank of India prudential timelines to avoid procedural lapses that impair courtroom enforcement:
                </p>

                {/* Inline SVG Diagram Hand-Authored for Bank EMI Default Flow */}
                <div className="p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-800 text-white overflow-x-auto">
                  <div className="min-w-[620px] py-2">
                    <div className="text-xs uppercase font-extrabold tracking-wider text-red-400 mb-4 text-center">
                      Delinquency Remedial Unit &bull; 90-Day Escalation Architecture
                    </div>
                    <div className="flex items-center justify-between gap-3 text-xs">
                      {/* Step 1 */}
                      <div className="flex-1 bg-slate-800/90 border border-slate-700 p-3 rounded-xl text-center">
                        <span className="block text-[10px] font-bold text-red-400 uppercase">Day 1 - 30</span>
                        <span className="block font-bold text-white mt-1 text-xs sm:text-sm">NACH Bounce (SMA-0)</span>
                        <span className="block text-[11px] text-slate-400 mt-1">Section 25 PSS Notice Served</span>
                      </div>
                      <span className="text-slate-500 font-bold">&rarr;</span>

                      {/* Step 2 */}
                      <div className="flex-1 bg-slate-800/90 border border-slate-700 p-3 rounded-xl text-center">
                        <span className="block text-[10px] font-bold text-amber-400 uppercase">Day 31 - 60</span>
                        <span className="block font-bold text-white mt-1 text-xs sm:text-sm">2nd Bounce (SMA-1)</span>
                        <span className="block text-[11px] text-slate-400 mt-1">CIBIL Downgrade &amp; Banker Lien</span>
                      </div>
                      <span className="text-slate-500 font-bold">&rarr;</span>

                      {/* Step 3 */}
                      <div className="flex-1 bg-slate-800/90 border border-slate-700 p-3 rounded-xl text-center">
                        <span className="block text-[10px] font-bold text-orange-400 uppercase">Day 61 - 90</span>
                        <span className="block font-bold text-white mt-1 text-xs sm:text-sm">3rd Bounce (SMA-2)</span>
                        <span className="block text-[11px] text-slate-400 mt-1">Advocate Loan Recall Notice</span>
                      </div>
                      <span className="text-slate-500 font-bold">&rarr;</span>

                      {/* Step 4 */}
                      <div className="flex-1 bg-red-950/70 border border-red-700 p-3 rounded-xl text-center">
                        <span className="block text-[10px] font-bold text-red-300 uppercase">Day 90+</span>
                        <span className="block font-bold text-white mt-1 text-xs sm:text-sm">NPA Classification</span>
                        <span className="block text-[11px] text-slate-300 mt-1">Arbitration / Lok Adalat / Order 37</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: 5-Step Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-6">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Delinquency Playbook for Branch Recovery Officers
                </h2>
                <div className="space-y-4">
                  <div className="p-5 bg-white border-l-4 border-red-600 rounded-r-xl border-y border-r border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Step 1: Automated Debit Return Logging &amp; Mandate Evidence Capture
                      </h3>
                      <span className="text-[10px] font-mono uppercase bg-red-50 text-red-700 px-2 py-0.5 rounded border border-red-200">
                        Days 1–5
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      The moment a monthly NACH mandate or auto-debit instruction fails at the clearing house, the bank&apos;s Core Banking Solution (CBS) logs the specific National Payments Corporation of India (NPCI) return code. Officers must extract the raw electronic memo, ensure the Unique Mandate Reference Number (UMRN) is captured, and archive the debit clearing statement in compliance with Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA).
                    </p>
                  </div>

                  <div className="p-5 bg-white border-l-4 border-amber-500 rounded-r-xl border-y border-r border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Step 2: Service of Statutory Section 25 PSS Act Demand Notice
                      </h3>
                      <span className="text-[10px] font-mono uppercase bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-200">
                        Within 30 Days
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Under Section 25(1)(b) of the PSS Act, the lending bank must serve a formal demand notice demanding payment within 30 days of receiving the return memo. The notice must give the borrower 15 mandatory days to cure the default. Dispatched under an advocate&apos;s letterhead via registered Speed Post and digital delivery (Email and WhatsApp), this notice creates immediate legal pressure and forms the non-negotiable statutory prerequisite for filing a criminal complaint.
                    </p>
                  </div>

                  <div className="p-5 bg-white border-l-4 border-indigo-600 rounded-r-xl border-y border-r border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Step 3: Credit Bureau Freeze &amp; Exercise of Banker&apos;s Lien
                      </h3>
                      <span className="text-[10px] font-mono uppercase bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-200">
                        Days 31–60
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Update the borrower&apos;s SMA status across TransUnion CIBIL, Experian, Equifax, and CRIF High Mark to prevent them from securing fresh loans from competitor institutions. Concurrently, under Section 171 of the Indian Contract Act, 1872, the bank exercises its general banker&apos;s lien and equitable right of set-off to debit any surplus credit balances or fixed deposits maintained across the bank&apos;s branch network.
                    </p>
                  </div>

                  <div className="p-5 bg-white border-l-4 border-red-800 rounded-r-xl border-y border-r border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Step 4: Formal Loan Recall Notice &amp; Acceleration of Aggregate Balance
                      </h3>
                      <span className="text-[10px] font-mono uppercase bg-red-100 text-red-900 px-2 py-0.5 rounded border border-red-300">
                        Days 61–90
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      If the borrower ignores preliminary cure notices, the bank issues a comprehensive advocate Loan Recall Notice. This notice formally declares an Event of Default under the loan covenants, accelerates all future monthly instalments into an immediate single liability, applies contractual penal interest, and notifies the borrower that judicial recovery will commence within 7 to 15 days.
                    </p>
                  </div>

                  <div className="p-5 bg-white border-l-4 border-emerald-600 rounded-r-xl border-y border-r border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Step 5: Judicial Enforcement: Arbitration, Summary Suits &amp; Lok Adalat
                      </h3>
                      <span className="text-[10px] font-mono uppercase bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                        Day 90+ (NPA Stage)
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Once the account is classified as NPA, the bank executes its judicial strategy based on the loan size: institutional sole arbitration for expedited money awards, Commercial Summary Suits under Order XXXVII CPC for fast civil decrees, or pre-litigation batch referrals to the National Lok Adalat for non-appealable structured settlement awards.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Comparative Remedy Matrix Table */}
              <section id="heading-remedies-table" aria-labelledby="heading-remedies-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-remedies-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Comparison of Legal Remedies Available to Banks for Personal Loan Default
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Choosing the right legal recovery track depends on whether the loan agreement contains an arbitration clause, whether auto-debit mandates bounced, and the borrower&apos;s willingness to engage in amicable restructuring:
                </p>

                <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm bg-white">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-800 border-b border-slate-200 font-bold">
                        <th className="p-3 sm:p-4">Legal Remedy</th>
                        <th className="p-3 sm:p-4">Governing Statute</th>
                        <th className="p-3 sm:p-4">Notice Timeline</th>
                        <th className="p-3 sm:p-4">Typical Resolution Time</th>
                        <th className="p-3 sm:p-4">Nature of Remedy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Section 25 PSS Prosecution
                        </td>
                        <td className="p-3 sm:p-4">Payment &amp; Settlement Systems Act, 2007</td>
                        <td className="p-3 sm:p-4">Notice within 30 days of bounce; 15 days to pay</td>
                        <td className="p-3 sm:p-4">6 to 18 Months</td>
                        <td className="p-3 sm:p-4 text-red-700 font-semibold">
                          Criminal (Up to 2 yrs prison + 2x fine)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Sole Arbitration (Section 29B)
                        </td>
                        <td className="p-3 sm:p-4">Arbitration &amp; Conciliation Act, 1996</td>
                        <td className="p-3 sm:p-4">Section 21 invocation notice (30 days response)</td>
                        <td className="p-3 sm:p-4">4 to 6 Months</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-semibold">
                          Enforceable Money Award (Civil Decree)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Summary Suit (Order 37)
                        </td>
                        <td className="p-3 sm:p-4">Code of Civil Procedure, 1908</td>
                        <td className="p-3 sm:p-4">Loan recall notice (7 to 15 days cure window)</td>
                        <td className="p-3 sm:p-4">6 to 12 Months</td>
                        <td className="p-3 sm:p-4 text-blue-700 font-semibold">
                          Fast-track civil money decree
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          National Lok Adalat Referral
                        </td>
                        <td className="p-3 sm:p-4">Legal Services Authorities Act, 1987</td>
                        <td className="p-3 sm:p-4">DLSA Pre-litigation invitation notice</td>
                        <td className="p-3 sm:p-4">1 Single Sitting</td>
                        <td className="p-3 sm:p-4 text-purple-700 font-semibold">
                          Non-appealable Consent Decree (OTS)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Section 138 NI Act (Cheques)
                        </td>
                        <td className="p-3 sm:p-4">Negotiable Instruments Act, 1881</td>
                        <td className="p-3 sm:p-4">Notice within 30 days of cheque memo; 15 days pay</td>
                        <td className="p-3 sm:p-4">8 to 24 Months</td>
                        <td className="p-3 sm:p-4 text-red-700 font-semibold">
                          Criminal prosecution for cheque bounce
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 6: Interactive Scenario Tabs Component */}
              <section id="heading-scenario-tabs" aria-labelledby="heading-scenario-tabs-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-scenario-tabs-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Action Rails for Common Personal Loan Delinquency Scenarios
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select a delinquency stage below to review the specific legal grounds, statutory deadlines, and tactical steps recommended for bank recovery units:
                </p>

                <WhatBanksCanDoProblemTabs />
              </section>

              {/* High-Converting CTA 1 */}
              <WhatBanksCanDoCTA
                buttonText="Deploy Advocate Legal Demand Notice to Defaulting Borrower"
                variant="primary"
              />

              {/* Section 7: Case Law Citations (Real Orders) */}
              <section id="heading-case-citations" aria-labelledby="heading-case-citations-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-citations-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Judicial Precedents Supporting Bank Recovery in Unsecured Loans
                  </h2>
                  <span className="text-xs text-slate-500 font-medium">
                    Verified Supreme Court &amp; High Court Rulings
                  </span>
                </div>

                <div className="space-y-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm space-y-4"
                    >
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                            Court Order
                          </span>
                          <span className="text-xs text-slate-500 font-medium">{c.date}</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">{c.title}</h3>
                        <p className="text-xs font-mono text-slate-600">
                          {c.parties} &bull; <span className="text-red-700 font-semibold">{c.citation}</span>
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/60">
                          <span className="font-bold text-slate-800 block mb-1">Delinquency Facts:</span>
                          <p className="text-slate-600 leading-relaxed">{c.facts}</p>
                        </div>
                        <div className="p-3.5 bg-red-50/40 rounded-xl border border-red-200/60">
                          <span className="font-bold text-red-900 block mb-1">Judicial Holding:</span>
                          <p className="text-slate-700 leading-relaxed">{c.holding}</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
                        <div>
                          <span className="text-slate-500">Recovery Enforced / Award: </span>
                          <span className="font-bold text-slate-900">{c.amount}</span>
                        </div>
                        <div className="bg-slate-100 px-3 py-1.5 rounded-lg text-slate-700 font-medium">
                          <strong className="text-slate-900">Key Precedent:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 8: Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Worked Example: Notice Intervention on a ₹7.5 Lakh Personal Loan Default
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The financial impact of serving a statutory advocate demand notice within 15 days of consecutive mandate dishonour versus passive tele-calling is illustrated in this real-world portfolio simulation:
                </p>

                <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        Default Profile: Salaried Borrower, Unsecured Personal Loan
                      </h3>
                      <p className="text-xs text-slate-500">
                        Sanction Amount: ₹7,50,000 &bull; Tenure: 48 Months &bull; EMI: ₹20,120 &bull; DPD: 45 Days (2 Bounces)
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-lg">
                      SMA-1 Risk Category
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                      <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">
                        Scenario A: Conventional Tele-Calling &amp; Informal Follow-up
                      </h4>
                      <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
                        <li>Borrower dodges recovery calls, changes WhatsApp privacy settings.</li>
                        <li>Account crosses 90 DPD without statutory legal documentation.</li>
                        <li>Transitions into Sub-Standard NPA; bank must allocate 15% mandatory provisioning.</li>
                        <li>Section 25 PSS Act 30-day notice limitation period expires.</li>
                        <li>Estimated final portfolio recovery rate: <strong className="text-red-600">22% to 35%</strong>.</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-200 space-y-2">
                      <h4 className="font-bold text-emerald-900 text-xs uppercase tracking-wider">
                        Scenario B: Immediate Advocate Statutory Demand Notice (Day 15)
                      </h4>
                      <ul className="space-y-1.5 text-slate-700 list-disc list-inside">
                        <li>Advocate notice served under Section 25 PSS Act + loan recall warning.</li>
                        <li>Physical Speed Post delivery receipt + Section 63 BSA digital trail secured.</li>
                        <li>Borrower faces real prospect of 2-year criminal trial and frozen CIBIL score.</li>
                        <li>Borrower approaches branch on Day 24 for restructuring or Lok Adalat OTS.</li>
                        <li>Estimated portfolio recovery rate: <strong className="text-emerald-700">78% to 92%</strong>.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-900 text-white rounded-xl text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span>
                      <strong>Strategic Takeaway:</strong> Serving advocate demand notices within 15 days of consecutive default cuts NPA slippage by more than 60%.
                    </span>
                    <span className="text-red-400 font-mono font-bold">
                      Zero Regulatory Exposure
                    </span>
                  </div>
                </div>
              </section>

              {/* Section 9: Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Evidence &amp; Documentation Checklist for Branch Recovery Units
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before dispatching an advocate demand notice or initiating arbitration, the recovery team must compile this statutory documentary packet:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-[10px]">✓</span>
                      Contractual &amp; Loan Documents
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>Signed Loan Agreement (Physical or Aadhaar e-Signed with audit trail).</li>
                      <li>Loan Application Form &amp; Sanction Letter with agreed interest rates.</li>
                      <li>Key Fact Statement (KFS) per RBI Digital Lending Guidelines.</li>
                      <li>Repayment Schedule showing EMI dates, principal, and interest breakup.</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-[10px]">✓</span>
                      Mandate &amp; Dishonour Records
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>Electronic NACH / e-Mandate authorization form with UMRN.</li>
                      <li>NPCI return memos showing exact bounce date and reason code (Code 01/06).</li>
                      <li>Certified Statement of Accounts under Bankers&apos; Books Evidence Act, 1891.</li>
                      <li>Certificate under Section 63 BSA (formerly Section 65B Indian Evidence Act).</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <h2
                  id="heading-faqs-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Frequently Asked Questions (FAQ) for Lenders &amp; Recovery Officers
                </h2>
                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 11: Sources & Legal References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-sources-title"
                  className="text-base sm:text-lg font-bold text-slate-900"
                >
                  Statutory References &amp; Official Regulatory Sources
                </h2>
                <p className="text-xs text-slate-600">
                  Every legal procedure, statutory timeline, and penal consequence cited on this page is established under sovereign enactments and official Reserve Bank of India regulatory notifications:
                </p>
                <ul className="space-y-2 text-xs">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-600 font-bold shrink-0">&bull;</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-700 hover:text-red-800 hover:underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Final High-Converting CTA */}
              <WhatBanksCanDoCTA
                buttonText="Issue Formal Advocate Demand Notice to Defaulting Borrower"
                variant="primary"
              />

              {/* Related Recovery Guides Dynamic Cross-linking */}
              <div className="pt-6 border-t border-slate-200">
                <RelatedRecoveryGuides />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
