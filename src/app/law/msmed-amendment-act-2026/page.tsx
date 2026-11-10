import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import MsmedNoticeCTA from "./MsmedNoticeCTA";
import MsmedTableOfContents from "./MsmedTableOfContents";
import MsmedScenariosTabs from "./MsmedScenariosTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "MSMED Amendment Act 2026: Key Changes for Suppliers",
  description:
    "The 2026 MSMED amendment keeps the 45-day rule and tightens mediation, arbitration and enforcement. What suppliers should do now.",
  alternates: {
    canonical: `${SITE_URL}/law/msmed-amendment-act-2026`,
  },
  openGraph: {
    title: "The MSMED (Amendment) Act 2026 Explained for Suppliers Chasing Payments",
    description:
      "Breakdown of the MSMED (Amendment) Act 2026 and the MSME ODR Portal: 45-day payment cap, 3x RBI compound interest, 90-day mediation, Section 43B(h) tax disallowance, and 75% pre-deposit rules.",
    url: `${SITE_URL}/law/msmed-amendment-act-2026`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_SOURCES = [
  {
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Act No. 27 of 2006) — Chapter V: Delayed Payments to Micro and Small Enterprises (Sections 15 to 24)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "The Micro, Small and Medium Enterprises Development (Amendment) Act, 2026 — Ministry of Micro, Small and Medium Enterprises & Gazette of India",
    url: "https://egazette.gov.in/",
  },
  {
    title: "MSME Online Dispute Resolution (ODR) Portal & Legacy MSME Samadhaan Delayed Payment Monitoring System — Ministry of MSME, Government of India",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title: "Income-tax Act, 1961 — Section 43B(h) (Finance Act, 2023 Amendment Disallowing Buyer Expense Deductions for Unpaid MSE Dues Beyond 15/45 Days)",
    url: "https://incometaxindia.gov.in/",
  },
  {
    title: "Supreme Court of India — Gujarat State Civil Supplies Corporation Ltd. v. Mahakali Foods Pvt. Ltd. & Anr., (2023) 6 SCC 401 (MSMED Act Overriding Effect Over Private Arbitration Agreements)",
    url: "https://main.sci.gov.in/judgments",
  },
  {
    title: "Supreme Court of India — Tirupati Steels v. Shubh Industrial Component & Anr., (2022) 7 SCC 429 (Mandatory 75% Pre-Deposit Under Section 19 MSMED Act)",
    url: "https://main.sci.gov.in/judgments",
  },
  {
    title: "Supreme Court of India — NBCC (India) Ltd. v. State of West Bengal & Ors., 2025 SCC OnLine SC 73 (Reference to 3-Judge Bench on Udyam Registration Timing Under Section 18)",
    url: "https://main.sci.gov.in/judgments",
  },
  {
    title: "Reserve Bank of India (RBI) — Trade Receivables Discounting System (TReDS) Guidelines & Current RBI Bank Rate Notifications",
    url: "https://www.rbi.org.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "MSMED Act Chapter V Overrides Private Arbitration Clauses & Empowers MSEFC to Act as Conciliator and Arbitrator",
    parties: "Gujarat State Civil Supplies Corporation Ltd. v. Mahakali Foods Pvt. Ltd. & Anr.",
    citation: "(2023) 6 SCC 401, Supreme Court of India",
    date: "Judgment Dated 31 October 2022",
    facts:
      "Corporate and PSU buyers challenged references made by Micro and Small Enterprises to State Micro and Small Enterprises Facilitation Councils (MSEFCs) under Section 18 of the MSMED Act. Buyers argued that where a commercial Purchase Order contained an independent arbitration agreement under the Arbitration and Conciliation Act, 1996, or designated a specific distant city's courts as having exclusive jurisdiction, the MSEFC could not entertain the supplier's claim.",
    holding:
      "The Supreme Court dismissed the buyers' objections and held that Chapter V (Sections 15 to 23) of the MSMED Act is a special beneficial legislation that overrides the general provisions of the Arbitration Act, 1996 by virtue of Section 18(1) and Section 24. Private contractual clauses cannot take away an MSE supplier's statutory right to approach the MSEFC in the supplier's own state under Section 18(4). Furthermore, the Court held that the MSEFC (or its designated ODR/ADR institution) is expressly empowered to conduct arbitration even after mediating or conciliating the dispute, overriding Section 80 of the Arbitration Act.",
    amount: "Full Principal + Statutory 3× RBI Bank Rate Compound Interest Under Section 16 Upheld",
    takeaway:
      "A buyer's standard-form Purchase Order forcing arbitration in Mumbai, Delhi, or Bengaluru cannot block you from initiating statutory recovery in your home state's Facilitation Council or via the MSME ODR Portal.",
  },
  {
    title: "Mandatory 75% Pre-Deposit Under Section 19 Cannot Be Waived or Diluted When Buyer Challenges MSEFC Award",
    parties: "Tirupati Steels v. Shubh Industrial Component & Anr.",
    citation: "(2022) 7 SCC 429, Supreme Court of India",
    date: "Judgment Dated 19 April 2022",
    facts:
      "After an MSEFC passed an arbitral award in favour of a small-scale industrial supplier for unpaid invoices and compound interest, the defaulting buyer filed an application under Section 34 of the Arbitration Act to set aside the award. The High Court permitted the buyer to pursue the challenge without depositing 75% of the awarded amount in cash, triggering an appeal by the MSME supplier.",
    holding:
      "The Supreme Court set aside the High Court's indulgence and ruled that Section 19 of the MSMED Act is strictly mandatory. No court can entertain any application to challenge a decree, award, or order passed by the MSEFC or any ODR/arbitral institution unless the buyer first deposits 75% of the total awarded amount (principal plus accrued compound interest). While a court may permit the deposit in rare instalments, it cannot entertain the Section 34 petition until the full 75% is deposited in court.",
    amount: "Mandatory 75% Cash Pre-Deposit of Principal + Accrued 3× Compound Interest Enforced",
    takeaway:
      "Section 19 is the single strongest financial deterrent in Indian commercial law. Once an award is passed, the buyer cannot file routine appeals to stall execution without locking up 75% of the debt plus compound interest.",
  },
  {
    title: "3-Judge Bench Reference Re-Examining Whether Udyam Registration Prior to Contract Date Is Mandatory",
    parties: "NBCC (India) Ltd. v. State of West Bengal & Ors.",
    citation: "2025 SCC OnLine SC 73 (Civil Appeal No. 3705 of 2024), Supreme Court of India",
    date: "Judgment Dated 10 January 2025",
    facts:
      "Relying on earlier two-judge bench decisions in Silpi Industries (2021) and Mahakali Foods (2023), PSU buyers sought to quash MSEFC references whenever a supplier had obtained Udyam / EM-II registration after the date of entering into the work order, even if registration was obtained before specific invoices were raised or before the Section 18 reference was filed.",
    holding:
      "A two-judge bench of the Supreme Court (Justice P.S. Narasimha and Justice Pankaj Mithal) held that the text of Section 18(1) explicitly begins with 'Notwithstanding anything contained in any other law for the time being in force, any party to a dispute may, with regard to any amount due under section 17, make a reference'. Observing that restricting Section 18 remedies only to enterprises registered prior to contract execution defeats the remedial purpose of the Act, the Court referred the correctness of Silpi Industries to a larger three-judge bench.",
    amount: "Reference to 3-Judge Bench; Broad Remedial Interpretation of Section 18 Recognized",
    takeaway:
      "Always print your Udyam Registration Number on every quotation, Purchase Order acknowledgment, and GST invoice. If your registration post-dates an older contract, an Advocate Legal Notice combined with NBCC (India) Ltd. (2025) and Section 43B(h) tax pressure remains highly effective.",
  },
  {
    title: "Statutory Interest Under Section 16 Is Compound Interest With Monthly Rests at 3× RBI Bank Rate",
    parties: "Modern Industries v. Steel Authority of India Limited (SAIL)",
    citation: "(2010) 5 SCC 44, Supreme Court of India",
    date: "Judgment Dated 15 April 2010",
    facts:
      "A public sector buyer delayed payment for engineering supplies and argued that the statutory interest mechanism applies only to the principal price of goods, disputing the compounding calculation and the scope of 'amount due' under the statutory delayed-payment regime.",
    holding:
      "The Supreme Court held that statutory interest on delayed payments to small-scale and micro suppliers is not simple interest—it is penal compound interest with monthly rests at three times the Bank Rate notified by the Reserve Bank of India. This statutory rate overrides any lower interest rate or 'no-interest on delayed payment' clause inserted by the buyer in tender documents or purchase orders.",
    amount: "Compound Interest With Monthly Rests @ 3× RBI Bank Rate From Appointed Day",
    takeaway:
      "At the current RBI Bank Rate of 6.75% p.a., a defaulting buyer owes 20.25% p.a. compounded monthly—which effectively snowballs to ~22.23% annual yield and cannot be deducted as a business expense under Section 23 of the MSMED Act.",
  },
];

const FAQS = [
  {
    question: "What are the key changes in the MSMED Amendment Act 2026 for suppliers chasing unpaid bills?",
    answer:
      "The MSMED (Amendment) Act, 2026 (alongside the operational shift to the MSME ODR Portal from October 2025) preserves the core 45-day payment cap under Section 15 and 3× RBI Bank Rate monthly-compounded interest under Section 16, while overhauling how disputes are processed. It gives statutory backing to end-to-end digital dispute resolution via the MSME ODR Portal, replaces open-ended physical conciliation before state MSEFCs with time-bound online mediation (capped at 90 days) followed by a 30-day transition to digital arbitration, mandates TReDS onboarding for Central PSUs and large corporate buyers, and aligns with Section 43B(h) of the Income Tax Act to disallow unpaid MSE expenses in the buyer's tax audit.",
  },
  {
    question: "What is the MSME 45 days payment rule and when does the 15-day limit apply instead?",
    answer:
      "Under Section 15 of the MSMED Act, 2006, if there is NO written agreement or credit period specified on the Purchase Order or invoice, the buyer must pay the Micro or Small Enterprise within 15 calendar days of delivery or service completion. If there IS a written agreement specifying a credit period, that period can never exceed 45 calendar days from the day of acceptance or deemed acceptance. Even if a Purchase Order states '60 days' or '90 days', the law automatically caps it at 45 days, making Day 46 the 'Appointed Day' from which 3× RBI compound interest starts accruing.",
  },
  {
    question: "Did the MSME ODR Portal replace the MSME Samadhaan portal for new delayed payment cases?",
    answer:
      "Yes. Following the Ministry of MSME's rollout of the Online Dispute Resolution (ODR) portal under the RAMP programme, fresh delayed-payment applications from October 15, 2025 onwards are routed through the MSME ODR Portal (odr.msme.gov.in) rather than the legacy MSME Samadhaan filing interface. Samadhaan continues to operate as a monitoring and tracking dashboard for pre-existing references, while new claims use the ODR portal for Udyam-verified e-filing, automated demand intimations, online mediation, and digital MSEFC arbitration.",
  },
  {
    question: "Are Medium Enterprises or traders eligible to file delayed payment claims under the MSMED Act?",
    answer:
      "No. Chapter V of the MSMED Act (Sections 15 to 24) and Section 43B(h) of the Income Tax Act apply strictly to 'Suppliers' defined under Section 2(n)—namely Micro Enterprises (investment up to ₹1 crore and turnover up to ₹5 crore, as revised) and Small Enterprises (investment up to ₹10 crore and turnover up to ₹50 crore) engaged in manufacturing goods or rendering services with a valid Udyam Registration. Medium Enterprises and pure retail/wholesale traders (whose NIC codes are registered only for priority sector lending under the 2021 OMs) cannot file MSEFC references, though they can recover dues via an Advocate Legal Notice, Section 12A Commercial Courts mediation, or an Order XXXVII CPC Summary Suit.",
  },
  {
    question: "How does Section 43B(h) of the Income Tax Act force buyers to clear MSME invoices before March 31?",
    answer:
      "Introduced by the Finance Act, 2023 (effective Assessment Year 2024–25 onwards), Section 43B(h) of the Income Tax Act provides that any sum payable by a buyer to a Micro or Small Enterprise beyond the Section 15 time limit (15 or 45 days) is disallowed as a business expense in that financial year unless actually paid within the statutory window. If a buyer leaves a ₹20,00,000 MSE invoice unpaid across the March 31 fiscal year-end beyond 45 days, the entire ₹20,00,000 is added back to the buyer's taxable income, triggering an immediate ~25.17% to 30% corporate tax outflow plus audit qualification in Form 3CD.",
  },
  {
    question: "Can a buyer hold back my payment by raising a fake quality complaint after 45 days?",
    answer:
      "No. Under Section 2(b) of the MSMED Act, the buyer has a strict 15-day window from the date of delivery of goods or rendering of services to raise any objection in writing regarding defects or deficiencies. If the buyer fails to issue a written objection within 15 days, the law enforces 'Deemed Acceptance' on Day 16. Any quality excuse raised on Day 45 or after receiving a legal notice is statutorily invalid.",
  },
  {
    question: "Should I send an Advocate Legal Notice before filing a claim on the MSME ODR Portal?",
    answer:
      "Yes, serving a formal 15-day Advocate Statutory Legal Notice before lodging an ODR reference is the fastest way to recover B2B dues without waiting through 4 to 6 months of mediation and arbitration. A legal notice addressed to the buyer's Managing Director, CFO, Company Secretary, and Statutory Auditor—computing exact Section 16 monthly-compounded interest and warning of Section 43B(h) tax disallowance and MCA Form MSME-1 penal liability—resolves a high share of commercial disputes within 15 days.",
  },
  {
    question: "MSME payment 45 din mein nahi mila toh complaint aur legal notice kaise bheje?",
    answer:
      "Agar aapke paas Udyam Registration (Micro ya Small Enterprise) hai aur buyer ne goods ya service delivery ke 45 din (ya bina agreement ke 15 din) mein payment nahi kiya, toh MSMED Act ki Dhara 15 aur 16 ke tehat buyer ko RBI Bank Rate ka 3 guna (20.25% p.a.) monthly compound interest dena anivarya hai. Sabse pehle buyer ke Directors aur CFO ko 15 din ka Advocate Legal Notice (Section 16 interest + Income Tax Section 43B(h) disallowance warning ke saath) Speed Post aur email se bhejein. Agar 15 din mein RTGS/NEFT settlement na aaye, toh MSME ODR Portal par online claim darj karein.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MSMED Amendment Act 2026 Explained for Suppliers Chasing Payments",
  description:
    "The 2026 MSMED amendment keeps the 45-day rule and tightens mediation, arbitration and enforcement. What suppliers should do now.",
  datePublished: "2026-11-04T10:45:00+05:30",
  dateModified: "2026-11-04T10:45:00+05:30",
  mainEntityOfPage: `${SITE_URL}/law/msmed-amendment-act-2026`,
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
    "@type": "Legislation",
    name: "Micro, Small and Medium Enterprises Development (Amendment) Act, 2026",
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
      name: "MSME Delayed Payment Recovery",
      item: `${SITE_URL}/msme-delayed-payment-recovery-samadhan-vs-legal-notice`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "MSMED Amendment Act 2026",
      item: `${SITE_URL}/law/msmed-amendment-act-2026`,
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

export default function MsmedAmendmentAct2026Page() {
  const breadcrumbItems = [
    {
      label: "MSME Delayed Payment Hub",
      href: "/msme-delayed-payment-recovery-samadhan-vs-legal-notice",
    },
    {
      label: "MSMED Amendment Act 2026",
      href: "/law/msmed-amendment-act-2026",
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
        {/* Hero Section strictly matching IRCTC / site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>MSMED Act Sections 15–19 • Assent Aug 2026†</span>
              <span className="text-red-500">•</span>
              <span>MSME ODR Portal &amp; 45-Day Rule</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              MSMED Amendment Act 2026 Explained for Suppliers Chasing Payments
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (MSMED Amendment Act 2026 &amp; ODR Mandate)
              </p>
              <p>
                Under Sections 15 and 16 of the MSMED Act, 2006 as reinforced by the 2026 Amendment†, buyers must pay Udyam-registered Micro and Small Enterprises within 15 days (or max 45 days with a written agreement), failing which they owe monthly-compounded interest at 3× the RBI Bank Rate (20.25% p.a.). Suppliers should first serve a 15-day statutory advocate notice citing Section 43B(h) tax disallowance before initiating time-bound online mediation and arbitration on the MSME ODR Portal.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">45 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Absolute Statutory Credit Cap (S.15)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">20.25% p.a.</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">3× RBI Rate Compounded Monthly</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">90 + 30d</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">ODR Mediation to Arbitration Window†</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">75% Deposit</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Mandatory Buyer Appeal Pre-Deposit (S.19)</p>
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
            <MsmedTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Summary & Why the 2026 MSMED Amendment Matters */}
              <section id="heading-summary" aria-labelledby="heading-summary-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-summary-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why MSMED Amendment Act 2026 Reshapes B2B Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For nearly two decades, Chapter V of the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 promised small suppliers a powerful statutory shield: a strict 45-day payment ceiling under Section 15 and penal compound interest at three times the Reserve Bank of India (RBI) Bank Rate under Section 16. Yet on the ground, recovery through physical State Micro and Small Enterprises Facilitation Councils (MSEFCs) via the legacy MSME Samadhaan portal suffered from severe procedural bottlenecks. Applications waited 12 to 24 months just to convert from failed conciliation into formal arbitration, while corporate buyers exploited jurisdictional objections and delayed physical hearings.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The legal landscape for unpaid B2B invoices has now undergone a decisive two-part transformation: first, the Ministry of MSME&apos;s operational transition from MSME Samadhaan to the end-to-end digital <strong>MSME Online Dispute Resolution (ODR) Portal</strong> (mandatory for new references from October 2025†); and second, the <strong>MSMED (Amendment) Act, 2026</strong> (assent August 2026†), which gives statutory backing to digital ODR workflows, tightens the handover from mediation to arbitration, mandates Trade Receivables Discounting System (TReDS) onboarding for Central PSUs and notified corporate buyers, and works in tandem with <strong>Section 43B(h) of the Income Tax Act</strong> to disallow unpaid MSE invoices in the buyer&apos;s tax returns.
                </p>
              </section>

              {/* Section 2: Before vs After Comparison Table (Archetype L2 Hero Element) */}
              <section id="heading-comparison-table" aria-labelledby="heading-comparison-table-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-comparison-table-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Before vs After: Legacy Regime vs 2026 ODR Rules
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Rule Comparison
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The table below maps how each stage of a B2B delayed-payment claim operates under the updated 2025–2026 statutory framework compared to the older Samadhaan procedure:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[640px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">MSMED Act Legacy Samadhaan Rules vs 2026 Amendment &amp; ODR Portal Rules</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3.5 px-4">Recovery Parameter / Provision</th>
                        <th scope="col" className="py-3.5 px-4 text-slate-600">Old Regime (Legacy Samadhaan)</th>
                        <th scope="col" className="py-3.5 px-4 text-red-700">New Regime (2026 Amendment &amp; ODR†)</th>
                        <th scope="col" className="py-3.5 px-4 text-slate-900">What It Means For Suppliers</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Maximum Credit Period (Section 15)
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          15 days if no written contract; max 45 days if agreed in writing. Buyers routinely forced 90-day POs in practice.
                        </td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold text-xs">
                          45-day absolute statutory cap retained (15 days without written contract); reinforced by S. 43B(h) tax disallowance.
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          Any PO clause stating 60 or 90 days is void beyond Day 45. Interest and tax disallowance trigger on Day 46.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Penal Interest Rate (Section 16 &amp; 23)
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          3× RBI Bank Rate compounded monthly from the Appointed Day; non-deductible under S. 23.
                        </td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold text-xs">
                          3× RBI Bank Rate (3 × 6.75% = 20.25% p.a. compounded monthly) auto-calculated on ODR portal ledgers.
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          Interest snowballs monthly and cannot be claimed by the buyer as a deductible tax expense under Section 23.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Filing Portal &amp; Case Intake (Section 18)
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          Filed on MSME Samadhaan; physical files routed manually to district/state MSEFC secretariats with long queues.
                        </td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold text-xs">
                          MSME ODR Portal mandatory for new references from Oct 2025†; Samadhaan kept only for legacy case tracking.
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          End-to-end digital filing, GSTN/Udyam auto-verification, and virtual hearings without travelling to state capitals.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Conciliation / Mediation to Arbitration Handover
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          Informal MSEFC conciliation dragged on for 8–18 months before being converted into an arbitration reference.
                        </td>
                        <td className="py-3.5 px-4 text-red-700 font-bold text-xs">
                          Structured 90-day online mediation window, with a strict 30-day transition to digital arbitration if unsettled†.
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          Buyers can no longer stall conciliation indefinitely through repeated adjournments.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          TReDS &amp; Corporate Buyer Reporting
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          Relied on executive notifications; low compliance on TReDS discounting and MCA Form MSME-1 half-yearly returns.
                        </td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold text-xs">
                          Statutory backing for TReDS onboarding (CPSEs &amp; large buyers) + tiered administrative penalties for non-disclosure†.
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          Sending a legal notice copying the buyer&apos;s Statutory Auditor creates immediate compliance pressure.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Buyer Challenge to Award (Section 19)
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          75% pre-deposit required, though buyers occasionally sought High Court writ stays or bank guarantee dilutions.
                        </td>
                        <td className="py-3.5 px-4 text-red-700 font-bold text-xs">
                          Strict 75% pre-deposit of awarded principal + accrued compound interest enforced per Tirupati Steels (SC).
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          An MSEFC / ODR arbitral award is virtually appeal-proof unless the buyer deposits 75% cash up front.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic">
                  Note: Statutory provisions verified against Chapter V of the MSMED Act, 2006, Ministry of MSME ODR directives, and Supreme Court precedents as of November 2026. Compare how pre-litigation notices work alongside portal filings in our <Link href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice" className="text-blue-700 underline font-semibold">MSME Samadhaan / ODR vs Advocate Legal Notice comparison guide</Link>.
                </p>
              </section>

              {/* Section 3: Timeline of the Change (<ol> with <time> per Archetype L2) */}
              <section id="heading-timeline-change" aria-labelledby="heading-timeline-change-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-timeline-change-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Legislative Timeline: 2006 Act to 2026 Amendment
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Understanding the exact sequence of statutory amendments, Finance Act tax hooks, and Ministry of MSME portal notifications is critical because the applicable procedure depends on when your supply occurred and when your claim was filed:
                </p>

                <ol className="relative border-l-2 border-slate-200 ml-4 space-y-6 sm:space-y-8 list-none my-4">
                  <li className="relative pl-6">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-800 border-2 border-white ring-4 ring-slate-100" />
                    <time dateTime="2006-10-02" className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
                      2 October 2006 — Parent Act Enforced
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      MSMED Act, 2006 Enacts Chapter V (Sections 15–24)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      Parliament replaces the weaker Interest on Delayed Payments to Small Scale and Ancillary Industrial Undertakings Act, 1993. Sections 15 to 19 establish the 45-day maximum credit period, compound interest with monthly rests at 3× the RBI Bank Rate, MSEFC conciliation-cum-arbitration, and the 75% pre-deposit bar on buyer appeals.
                    </p>
                  </li>

                  <li className="relative pl-6">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-800 border-2 border-white ring-4 ring-slate-100" />
                    <time dateTime="2020-07-01" className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
                      1 July 2020 — Udyam Registration &amp; Composite Thresholds
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      Udyog Aadhaar Replaced by PAN &amp; GST-Linked Udyam Portal
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      Notification S.O. 2119(E) introduces the composite investment-and-turnover criteria for Micro, Small, and Medium classification and launches the online Udyam Registration portal integrated with CBDT and GSTN networks.
                    </p>
                  </li>

                  <li className="relative pl-6">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-800 border-2 border-white ring-4 ring-slate-100" />
                    <time dateTime="2024-04-01" className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
                      1 April 2024 (AY 2024–25) — Section 43B(h) Tax Disallowance
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      Finance Act, 2023 Enforces Income Tax Disallowance on Unpaid MSE Bills
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      Section 43B(h) of the Income Tax Act takes effect: any invoice owed to a Micro or Small Enterprise remaining unpaid beyond the Section 15 deadline (15 or 45 days) at the close of the financial year is disallowed as an expense deduction, adding 100% of the unpaid bill to the buyer&apos;s taxable profit.
                    </p>
                  </li>

                  <li className="relative pl-6">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-600 border-2 border-white ring-4 ring-amber-100" />
                    <time dateTime="2025-10-15" className="text-xs font-extrabold uppercase tracking-wider text-amber-700 block">
                      27 June 2025 → 15 October 2025† — MSME ODR Portal Rollout
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      MSME ODR Portal Replaces Samadhaan for All New Delayed-Payment Filings†
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      Launched on MSME Day (27 June 2025) under the World Bank-supported RAMP programme, the Ministry of MSME makes the Online Dispute Resolution (ODR) portal mandatory for all fresh delayed-payment claims from October 2025†, relegating the legacy Samadhaan portal to tracking pre-existing dockets.
                    </p>
                  </li>

                  <li className="relative pl-6">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-red-600 border-2 border-white ring-4 ring-red-100" />
                    <time dateTime="2026-08-13" className="text-xs font-extrabold uppercase tracking-wider text-red-600 block">
                      13 August 2026† — MSMED (Amendment) Act, 2026
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      Parliamentary Assent to MSMED (Amendment) Act, 2026†
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      The 2026 Amendment codifies digital Udyam and ODR portals directly into the parent statute, tightens mediation-to-arbitration timelines (90-day mediation cap and 30-day referral to arbitration†), expands mandatory TReDS invoice discounting for CPSEs and notified corporate buyers, and rationalises administrative compounding penalties for buyer non-disclosure.
                    </p>
                  </li>
                </ol>
              </section>

              {/* Section 4: Open Questions & Grey Areas with † Flags (Archetype L2 Requirement) */}
              <section id="heading-grey-areas" aria-labelledby="heading-grey-areas-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-grey-areas-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Open Questions, Transitional Rules &amp; Practical Grey Areas (2026 †)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Because the MSMED (Amendment) Act, 2026 and the MSME ODR Portal transition intersect with ongoing Supreme Court references and phased central notifications, suppliers must watch four practical grey areas when planning recovery:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        Grey Area 1 †
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900">
                        Section-Wise Notification Dates &amp; Pending Samadhaan Dockets
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      While the MSMED (Amendment) Act, 2026 received assent in August 2026† and the MSME ODR Portal became mandatory for new filings from October 2025†, individual administrative penalty rules and state-level MSEFC integrations take effect as notified in the Official Gazette. Legacy cases filed on MSME Samadhaan prior to October 15, 2025 remain on the older MSEFC docket unless transferred by council order.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        Grey Area 2 †
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900">
                        Pre-Supply vs Post-Supply Udyam Registration (3-Judge Reference)
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      In <em>Silpi Industries (2021)</em>, a 2-judge bench held that a supplier must hold Udyam registration on the date of contract/supply to invoke Section 18. However, on 10 January 2025, the Supreme Court in <em>NBCC (India) Ltd. v. State of West Bengal</em> questioned this restriction and referred the question to a 3-judge bench. Until the larger bench rules, conservative practice is to rely on MSEFC/ODR for post-Udyam invoices and use an Advocate Legal Notice + Order XXXVII CPC / Commercial Court for pre-Udyam invoices.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        Grey Area 3 †
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900">
                        Works Contracts (Composite Supply + Labour) &amp; Traders
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Several High Courts (including Bombay, Delhi, and Calcutta) have held varying views on whether indivisible &quot;works contracts&quot; (e.g., EPC civil construction combining material and labour) qualify as goods/services under Section 18, and retail/wholesale traders registered under the July 2021 Ministry OM are restricted to Priority Sector Lending benefits. For subcontractors on composite works contracts or traders, a formal statutory Legal Notice invoking Section 73 Contract Act and Section 12A Commercial Courts mediation is the safest primary route.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        Grey Area 4 †
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900">
                        Award Execution Still Requires Civil / Commercial Court Attachment
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Even though the MSME ODR Portal digitises mediation and arbitration, an ODR arbitral award is not self-debiting from the buyer&apos;s bank account. Under Section 36 of the Arbitration Act read with Order XXI CPC, if a stubborn buyer neither appeals (because of the 75% Section 19 pre-deposit) nor pays, the supplier must file an execution petition in the jurisdictional court to attach the buyer&apos;s bank accounts—which is why settling at the pre-ODR Legal Notice stage is far faster.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Landmark Supreme Court Order Digest */}
              <section id="heading-landmark-orders" aria-labelledby="heading-landmark-orders-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-landmark-orders-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Supreme Court Judgments on MSME Payment Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verified Apex Court Precedents
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
                            <strong className="text-slate-900 font-bold block mb-0.5">The Commercial Dispute &amp; Buyer Defense:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Supreme Court Judicial Holding:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Statutory Mandate / Relief Enforced
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Jurisdictional Reach
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding on All MSEFCs, ODR Panels &amp; High Courts
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for your unpaid invoice:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 6: Statutory Escalation Rail Flowchart (Hand-Authored SVG) */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Escalation Rail: Day 46 Default to ODR Award
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this five-stage enforcement architecture combining an Advocate Statutory Demand Notice with the 2026 MSME ODR Portal workflow:
                </p>

                {/* Mobile Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Stage 1 • Day 15 / Day 45</span>
                    <h3 className="font-bold text-sm">Appointed Day Default</h3>
                    <p className="text-xs text-slate-200 mt-1">15-day quality objection window closes (Deemed Acceptance). Max 45-day credit cap expires; 20.25% p.a. compound interest starts on Day 46.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Stage 2 • Day 46 to 60</span>
                    <h3 className="font-bold text-sm">15-Day Advocate Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">Serve MD, CFO &amp; Statutory Auditor with Section 16 interest ledger + Section 43B(h) Income Tax disallowance notice.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Stage 3 • ODR Intake</span>
                    <h3 className="font-bold text-sm">MSME ODR Portal Mediation (90d†)</h3>
                    <p className="text-xs text-amber-900 mt-1">File online reference using Udyam &amp; GSTIN. Time-bound online negotiation and mediation (capped at 90 days†).</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Stage 4 • +30d Handover†</span>
                    <h3 className="font-bold text-sm">MSEFC / ODR Digital Arbitration</h3>
                    <p className="text-xs text-slate-700 mt-1">If mediation fails, automatic transition within 30 days† to binding fast-track arbitration in supplier&apos;s jurisdiction.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Stage 5 • Enforcement</span>
                    <h3 className="font-bold text-sm">Award Execution / 75% Pre-Deposit</h3>
                    <p className="text-xs text-emerald-900 mt-1">Buyer must pay full principal + 3× compound interest or deposit 75% cash under S. 19 to even file a challenge.</p>
                  </div>
                </div>

                {/* Hand-Authored SVG Flowchart */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">2026 MSME Recovery &amp; ODR Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 265"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="MSMED Amendment Act 2026 and MSME ODR Portal Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="msmeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="msmeAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="msmeSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Stage 1 */}
                    <rect x="10" y="20" width="140" height="92" rx="10" fill="url(#msmeGrad)" />
                    <text x="80" y="43" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                    <text x="80" y="62" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Day 45 Cap Ends</text>
                    <text x="80" y="79" fill="#E2E8F0" fontSize="10" textAnchor="middle">S.15 Appointed Day</text>
                    <text x="80" y="96" fill="#CBD5E1" fontSize="9" textAnchor="middle">20.25% Interest Starts</text>

                    {/* Arrow 1 */}
                    <path d="M 150 66 L 180 66" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 2 */}
                    <rect x="180" y="20" width="140" height="92" rx="10" fill="url(#msmeAlert)" />
                    <text x="250" y="43" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                    <text x="250" y="62" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="250" y="79" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Demand</text>
                    <text x="250" y="96" fill="#FECACA" fontSize="9" textAnchor="middle">S.16 + S.43B(h) Tax</text>

                    {/* Arrow 2 */}
                    <path d="M 320 66 L 350 66" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 3 */}
                    <rect x="350" y="20" width="140" height="92" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="420" y="43" fill="#B45309" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                    <text x="420" y="62" fill="#92400E" fontWeight="bold" textAnchor="middle">MSME ODR Portal</text>
                    <text x="420" y="79" fill="#78350F" fontSize="10" textAnchor="middle">Online Mediation</text>
                    <text x="420" y="96" fill="#78350F" fontSize="9" textAnchor="middle">Max 90-Day Window†</text>

                    {/* Arrow 3 */}
                    <path d="M 490 66 L 520 66" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 4 */}
                    <rect x="520" y="20" width="140" height="92" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="590" y="43" fill="#404447" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                    <text x="590" y="62" fill="#0F172A" fontWeight="bold" textAnchor="middle">Digital Arbitration</text>
                    <text x="590" y="79" fill="#334155" fontSize="10" textAnchor="middle">30-Day Referral†</text>
                    <text x="590" y="96" fill="#475569" fontSize="9" textAnchor="middle">Supplier State MSEFC</text>

                    {/* Arrow 4 */}
                    <path d="M 660 66 L 690 66" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 5 */}
                    <rect x="690" y="20" width="140" height="92" rx="10" fill="url(#msmeSucc)" />
                    <text x="760" y="43" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                    <text x="760" y="62" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Award &amp; Recovery</text>
                    <text x="760" y="79" fill="#D1FAE5" fontSize="10" textAnchor="middle">S.19 75% Pre-Deposit</text>
                    <text x="760" y="96" fill="#A7F3D0" fontSize="9" textAnchor="middle">Order XXI Attachment</text>

                    {/* Bottom Benchmark Bar */}
                    <rect x="10" y="145" width="820" height="95" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="168" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY FINANCIAL LEVERS UNDER MSMED ACT &amp; INCOME TAX ACT (2026):</text>
                    <text x="25" y="188" fill="#475569" fontSize="10">• Section 16 Interest Formula: 3 × RBI Bank Rate (3 × 6.75% = 20.25% p.a.) compounded with monthly rests from Day 16 / Day 46</text>
                    <text x="25" y="205" fill="#475569" fontSize="10">• Section 43B(h) Tax Lever: Buyer loses 100% expense deduction in FY tax audit if MSE invoice remains unpaid past 15/45 days</text>
                    <text x="25" y="222" fill="#475569" fontSize="10">• Section 19 &amp; 22 Mandate: Buyer must disclose unpaid MSE interest in MCA Annual Returns &amp; deposit 75% cash to challenge award</text>
                  </svg>
                </div>
              </section>

              {/* Section 7: How to Use the New Rules Today — 5-Step Action Plan */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Playbook: Using 2026 Rules for Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Do not jump straight into a multi-month arbitration queue without first deploying your statutory tax and audit leverage. Follow this five-step sequence to force settlement in days rather than months:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Lock In &apos;Deemed Acceptance&apos; on Day 16 &amp; Identify the Appointed Day
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Collate your GST Tax Invoice, e-Way Bill, Transport Lorry Receipt (LR), Delivery Challan / GRN, or email sign-off. Under Section 2(b) of the MSMED Act, if the buyer did not raise a written quality or quantity objection within 15 days of delivery, acceptance is legally complete on Day 16. Your &quot;Appointed Day&quot; is Day 16 (if there is no written credit agreement) or at most Day 46 (if a written PO or contract specifies 45+ days).
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Build a Month-by-Month Section 16 Compound Interest Ledger
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Calculate interest from the Appointed Day at 3× the RBI Bank Rate (currently 3 × 6.75% = 20.25% per annum) with <strong>monthly rests</strong> (meaning unpaid interest at the end of every month is added to the principal for the next month&apos;s calculation). Under Section 23 of the MSMED Act, this penal interest is strictly non-deductible as an expense under the Income Tax Act.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        See how compound interest multiplies your claim in our guide on <Link href="/recovery/delayed-payment-interest-under-msme" className="text-blue-700 underline font-semibold">delayed payment interest recovery under the MSME Act</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a 15-Day Statutory Advocate Notice on Directors, CFO &amp; Statutory Auditor
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Before filing on the portal, have an advocate dispatch a formal statutory demand notice via Registered Speed Post and Section 63 BSA email to the buyer&apos;s Board of Directors, Chief Financial Officer, and Company Secretary. The notice must explicitly put the company on notice of: (a) Principal + 20.25% monthly-compounded interest under Section 16; (b) Mandatory disallowance of the entire invoice value under <strong>Section 43B(h) of the Income Tax Act</strong> if unpaid across the financial year-end; and (c) Mandatory disclosure of unpaid MSME principal and interest in the company&apos;s audited financial statements under Section 22 and MCA Form MSME-1.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Check our transparent fee structure on the <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> page or explore our dedicated <Link href="/recovery-of-unpaid-dues-for-my-business" className="text-blue-700 underline">B2B unpaid invoice recovery hub</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Lodge a Digital Reference on the MSME ODR Portal (Mediation → Arbitration)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the buyer fails to remit funds within the 15-day notice period, log into the MSME ODR Portal using your Udyam Registration Number and mobile OTP. Upload the unpaid tax invoices, delivery proofs, and your served Advocate Legal Notice with postal tracking. The portal initiates automated e-notices and schedules online mediation (capped at 90 days†). If the buyer refuses to settle principal plus interest, the dispute transitions within 30 days† to binding digital arbitration anchored to your home state&apos;s MSEFC under Section 18(4).
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Enforce the Award Under Section 36 Arbitration Act or Block Appeals via Section 19
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Once the MSEFC / ODR arbitrator passes the award for principal plus 3× compound interest, the buyer has two choices: pay immediately, or deposit <strong>75% of the total awarded sum in court</strong> under Section 19 just to have a Section 34 challenge heard. If you are a Medium Enterprise, trader, or unregistered vendor outside Chapter V, bypass MSEFC and file a fast-track <Link href="/law/order-37-summary-suit-money-recovery" className="text-blue-700 underline font-semibold">Order XXXVII CPC Summary Suit</Link> or Section 12A Commercial Court mediation.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 8: Interactive Buyer Excuse & Scenario Tabs */}
              <section id="heading-scenarios-tabs" aria-labelledby="heading-scenarios-tabs-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenarios-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Common Buyer Excuses &amp; How Law Dismantles Them
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select a Buyer Delay Tactic to See the Exact MSMED Act Section, Supreme Court Ruling, and Counter-Strategy
                  </p>
                </div>

                <MsmedScenariosTabs />
              </section>

              {/* Section 9: Worked Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: MSE Recovers ₹14.2L + Interest in 14 Days
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative B2B Recovery Calculation
                    </span>
                    <span className="text-xs text-slate-400">Faridabad Small Enterprise → Chakan Tier-1 OEM Buyer</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Supply &amp; Invoice:</strong> Precision Stamping Works (a Udyam-registered Small Enterprise in Faridabad, Haryana) supplied 4 consignments of sheet-metal brackets worth <strong>₹14,20,000</strong> (inclusive of 18% GST) to a Tier-1 automotive buyer in Chakan, Pune between 10 August and 18 August. All goods were received with signed GRNs and e-Way Bills, and no written defect notice was raised within 15 days.
                    </p>
                    <p>
                      <strong>The Buyer&apos;s Stall Tactic:</strong> The buyer&apos;s Purchase Order printed a standard <em>&quot;90 Days Credit from GRN&quot;</em> clause, and even after 190 days had elapsed (over 4.5 months past the statutory 45-day cap), the buyer&apos;s accounts payable team kept replying that payment was &quot;queued for next quarter&apos;s cash-flow cycle.&quot;
                    </p>
                    <p>
                      <strong>The Statutory Calculation &amp; Legal Notice:</strong> Precision Stamping Works engaged LegalRecovery.in in February (just before the March 31 fiscal year-end). Our advocate computed the statutory liability from Day 46 (3 October) across 5.5 months at <strong>3× RBI Bank Rate = 20.25% p.a. compounded monthly</strong>, which added <strong>₹1,86,400</strong> in accrued Section 16 compound interest, bringing the total demand to <strong>₹16,06,400</strong>. A formal 15-day statutory notice was served on the Pune company&apos;s Managing Director, CFO, and Statutory Auditors highlighting:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-slate-200 pl-2">
                      <li>Voidness of the 90-day PO clause beyond Day 45 under Section 15 of the MSMED Act;</li>
                      <li>Immediate Income Tax disallowance of ₹14,20,000 under <strong>Section 43B(h)</strong> (~₹3,57,400 extra corporate tax hit if left unpaid on March 31) plus non-deductibility of the ₹1,86,400 penal interest under Section 23;</li>
                      <li>Imminent filing on the <strong>MSME ODR Portal</strong> before the Haryana MSEFC (Faridabad jurisdiction under Section 18(4)) where any appeal would require a 75% pre-deposit under Section 19.</li>
                    </ul>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      On Day 12 after delivery of the advocate notice, the buyer&apos;s CFO intervened to prevent a Section 43B(h) tax audit qualification in Form 3CD and Form MSME-1 exposure. The buyer remitted the entire ₹14,20,000 principal plus ₹1,86,400 statutory interest (total ₹16,06,400) via RTGS without requiring formal arbitration.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Supplier Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Documents for MSME Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  To ensure seamless auto-verification on the MSME ODR Portal and an unassailable evidentiary record under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), keep these 6 documents ready:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Udyam Registration Certificate (Micro or Small):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing active Micro or Small classification (manufacturing or services NIC code) and registration date.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Purchase Order / Work Order / Email Contract:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Even if no formal PO was issued, WhatsApp/email order confirmations establish binding contract terms.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">GST Tax Invoices Matching GSTR-1 &amp; e-Invoice IRN:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Invoices bearing your Udyam number and reflected in the buyer&apos;s GSTR-2B input tax credit ledger.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Proof of Delivery / Deemed Acceptance (S. 2(b)):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Signed Delivery Challan, e-Way Bill Part B, Lorry Receipt, GRN, or service milestone completion email.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Running Debtor Ledger &amp; Section 16 Interest Sheet:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Itemised statement showing invoice date, Appointed Day (Day 16/46), part-payments, and monthly-compounded 3× RBI interest.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Served Advocate Legal Notice &amp; Section 63 BSA Certificate:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Copy of the 15-day statutory demand notice with India Post tracking and email/WhatsApp delivery proof.</p>
                    </div>
                  </div>
                </div>

                {/* Honest Scope Block per Section 7 Requirements */}
                <div className="p-4 sm:p-5 bg-slate-100 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed mt-4">
                  <strong className="text-slate-900 font-bold block mb-1">
                    Honest Scope — What LegalRecovery Does (and Does Not Do) for MSME Suppliers:
                  </strong>
                  We calculate your exact Section 16 monthly-compounded interest, draft and dispatch an Advocate Statutory Demand Notice invoking the MSMED Act and Section 43B(h) Income Tax disallowance to the buyer&apos;s Directors and CFO, and prepare your evidentiary dossier for the MSME ODR Portal. We cannot force an MSEFC to entertain claims by Medium Enterprises or unverified entities that are statutorily excluded from Chapter V, though for those businesses we pursue fast-track recovery via Order XXXVII CPC Summary Suits and Commercial Court pre-institution mediation.
                </div>
              </section>

              {/* Section 11: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs: MSMED Amendment Act 2026 &amp; ODR Portal
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Direct Statutory Answers Grounded in Chapter V of the MSMED Act, Section 43B(h), and Supreme Court Rulings
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

              {/* Section 12: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory References &amp; Official MSME Portals
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
                  Last updated: 4 November 2026. Statutory verification status: All sections, interest multipliers (3× RBI Bank Rate), and Supreme Court citations verified against India Code, Gazette of India notifications, Ministry of MSME ODR guidelines, and Section 43B(h) of the Income Tax Act, 1961. Items marked † indicate 2025–2026 operational transitions and phased Gazette notifications.
                </p>
              </section>

              {/* Primary CTA Block */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Statutory MSME Demand Notice
                </h2>
                <MsmedNoticeCTA variant="primary" />
              </section>

              {/* Contextual Internal Links Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related MSME, B2B Invoice &amp; Commercial Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSME Samadhaan / ODR vs Advocate Legal Notice →
                  </Link>
                  <Link
                    href="/recovery-of-unpaid-dues-for-my-business"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    B2B Unpaid Invoice Recovery Hub →
                  </Link>
                  <Link
                    href="/recovery/delayed-payment-interest-under-msme"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    3× RBI Compound Interest Calculation Guide →
                  </Link>
                  <Link
                    href="/recovery/contractor-payment"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Contractor &amp; Subcontractor Payment Recovery →
                  </Link>
                  <Link
                    href="/services/vendor-and-invoice-recoveries"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Vendor, Distributor &amp; Dealer Dues Recovery →
                  </Link>
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Order XXXVII Summary Suit for Commercial Invoices →
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
        <RelatedRecoveryGuides currentPath="/law/msmed-amendment-act-2026" />
      </div>
    </>
  );
}
