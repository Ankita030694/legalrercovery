import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ChequeBounceNoticeCTA from "./ChequeBounceNoticeCTA";
import ChequeBounceTableOfContents from "./ChequeBounceTableOfContents";
import ChequeBounceScenariosTabs from "./ChequeBounceScenariosTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "New Cheque Bounce Rules: Supreme Court 2025 Guidelines",
  description:
    "The Supreme Court's 2025 guidelines changed summons, settlement and compounding in cheque bounce cases. Here's what it means for you.",
  alternates: {
    canonical: `${SITE_URL}/law/cheque-bounce-supreme-court-guidelines-2025`,
  },
  openGraph: {
    title: "New Cheque Bounce Rules: Supreme Court 2025 Guidelines",
    description:
      "Comprehensive legal breakdown of Supreme Court 2025 directions in Sanjabij Tari: e-summons, blank cheque presumptions, cash loans over ₹20,000, and compounding costs.",
    url: `${SITE_URL}/law/cheque-bounce-supreme-court-guidelines-2025`,
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
    title: "Negotiable Instruments Act, 1881 (Act No. 26 of 1881) — Sections 138 to 148 (Dishonour, Notice, Compounding & Interim Compensation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Supreme Court of India — Sanjabij Tari v. Kishore S. Borcar & Anr. (Criminal Appeal No. 1755 of 2010, Delivered 25 September 2025)",
    url: "https://main.sci.gov.in/judgments",
  },
  {
    title: "Supreme Court of India — Damodar S. Prabhu v. Sayed Babalal H. (2010) 5 SCC 663 (Compounding Guidelines Under Section 147 NI Act)",
    url: "https://main.sci.gov.in/judgments",
  },
  {
    title: "Supreme Court of India — In Re: Expeditious Trial of Cases under Section 138 of N.I. Act (Suo Motu Writ Petition (Crl.) No. 2 of 2020)",
    url: "https://main.sci.gov.in/judgments",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for WhatsApp, Email & SMS Service)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS Section 64 — Electronic Summons & Service of Process)",
    url: "https://www.indiacode.nic.in/handle/123456789/21733",
  },
  {
    title: "Income Tax Act, 1961 — Section 269SS & Section 271D (Cash Acceptance Limits vs Civil/Criminal Debt Enforceability)",
    url: "https://www.indiacode.nic.in/handle/123456789/1566",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Overturns High Court Revision; Disallows Blank Cheque & Cash Loan Defense",
    parties: "Sanjabij Tari v. Kishore S. Borcar & Anr.",
    citation: "Criminal Appeal No. 1755 of 2010, Supreme Court of India",
    date: "Delivered 25 September 2025 (Bench: Justice Manmohan & Justice N.V. Anjaria)",
    facts:
      "The appellant advanced a friendly loan of ₹6,00,000 in cash to the respondent, who issued a cheque towards repayment. Upon presentation, the cheque bounced due to 'funds insufficient'. The Trial Court and Sessions Court convicted the accused. However, the High Court set aside the conviction in revision, accepting the defense that the cheque was handed over as a signed blank security cheque and questioning whether a cash loan exceeding ₹20,000 could be deemed a legally enforceable debt under Section 269SS of the Income Tax Act.",
    holding:
      "The Supreme Court allowed the appeal and restored the conviction. The bench held: (1) Once execution and signature are admitted, mandatory statutory presumptions under Sections 118 and 139 arise, which cannot be displaced by speculative claims of handing over a blank cheque; (2) High Courts cannot overturn concurrent trial findings without demonstrating patent illegality or perversity; and (3) A cash loan in breach of Section 269SS of the Income Tax Act attracts revenue penalties under Section 271D, but does NOT invalidate the underlying debt or defeat prosecution under Section 138 NI Act.",
    amount: "₹6,00,000 Cheque Amount Restored + Criminal Conviction & Statutory Costs",
    takeaway:
      "Drawers can no longer stall or evade Section 138 conviction by arguing that they signed a blank cheque or that the loan was disbursed in cash exceeding tax ceilings. The statutory presumption heavily protects the holder.",
  },
  {
    title: "Supreme Court Guidelines on Speedy Trial & Summary Procedure in Section 138 Proceedings",
    parties: "In Re: Expeditious Trial of Cases under Section 138 of N.I. Act 1881",
    citation: "Suo Motu Writ Petition (Crl.) No. 2 of 2020, Supreme Court of India (5-Judge Constitution Bench)",
    date: "Order Dated 16 April 2021",
    facts:
      "Addressing nationwide congestion of over 35 lakh cheque bounce cases choking Magistrate courts, the Supreme Court examined procedural logjams, mechanical conversion of summary trials into summons trials, and evasion of summons service across state boundaries.",
    holding:
      "The Constitution Bench directed: (1) Magistrates cannot mechanically convert summary trials into summons trials unless an order recording explicit reasons is passed; (2) Pre-summoning evidence must be tendered on affidavit under Section 145 NI Act without requiring complainant physical examination; (3) Trial courts possess powers to convert multiple complaints arising from transactions within one year into a single consolidated trial; and (4) Electronic service and postal speed post tracking must be adopted as primary service mechanisms.",
    amount: "Nationwide Procedural Mandate Across All State Subordinate Courts",
    takeaway:
      "Magistrates must treat Section 138 complaints as fast-track summary inquiries. Accused persons cannot demand prolonged oral examination stages prior to summons issuance.",
  },
  {
    title: "Landmark Framework on Compounding of Offenses & Graded Penalty Costs",
    parties: "Damodar S. Prabhu v. Sayed Babalal H.",
    citation: "(2010) 5 SCC 663, Supreme Court of India (3-Judge Bench)",
    date: "Judgment Dated 3 May 2010 (Re-affirmed and streamlined in 2025)",
    facts:
      "The Supreme Court examined how to encourage early settlement in cheque bounce proceedings under Section 147 of the NI Act, preventing accused persons from litigating endlessly up to the Supreme Court before offering settlement of the face value.",
    holding:
      "The Court established a graded penalty cost schedule for compounding: (a) If application for compounding is made at the first or second hearing before the Magistrate, no cost is imposed; (b) If made after charge/notice framing, 10% of cheque amount is deposited with State Legal Services Authority; (c) If compounded at Sessions or High Court, 15% cost; (d) If compounded at Supreme Court, 20% cost. The 2025 directions strictly reiterate this schedule to disincentivize appellate delay.",
    amount: "Graded Cost Scale: 0% → 10% → 15% → 20% Deposited with Legal Services Authority",
    takeaway:
      "Settling immediately after statutory legal notice or at the initial hearing saves the accused from substantial financial surcharges, while complainants secure full principal recovery without trial fatigue.",
  },
  {
    title: "Magistrate Power to Close Cheque Bounce Proceedings Upon Deposit of Full Amount",
    parties: "Meters and Instruments Private Limited & Anr. v. Kanchan Mehta",
    citation: "(2018) 1 SCC 560, Supreme Court of India",
    date: "Judgment Dated 5 October 2017",
    facts:
      "The accused company deposited the full cheque amount along with reasonable interest and litigation costs assessed by the court at the earliest trial stage, requesting closure of Section 138 proceedings despite the complainant refusing consent.",
    holding:
      "The Supreme Court held that Section 138 of the NI Act is primarily a civil wrong clothed with criminal sanction to enforce financial discipline. Where the accused tenders the full cheque face value, statutory interest, and court-assessed costs at the initial appearance, the Magistrate possesses inherent jurisdiction to compound the offense under Section 147 and discharge the accused even without the complainant's express consent.",
    amount: "Full Cheque Face Value + Court-Assessed Interest & Costs",
    takeaway:
      "If a drawer genuinely tenders the bounced amount plus interest at the pre-trial stage, courts will discharge criminal liability to prevent the judicial forum from being used solely for vendetta.",
  },
];

const FAQS = [
  {
    question: "What is the new rule of cheque bounce introduced by the Supreme Court in 2025?",
    answer:
      "In the landmark ruling Sanjabij Tari v. Kishore S. Borcar (September 2025) and subsequent high-court implementation circulars, the Supreme Court established four major reforms: (1) Mandatory nationwide issuance of electronic summons (e-summons via email and WhatsApp under Section 63 BSA / BNSS) to prevent accused evasion; (2) Decisive rejection of the 'blank signed cheque' and 'cash loan exceeding ₹20,000' defenses; (3) Re-enforcement of graded compounding costs under Section 147 to penalize late appellate settlements; and (4) Directing trial courts to resolve Section 138 cases via summary trial within 6 months.",
  },
  {
    question: "Can an accused still delay a cheque bounce case by claiming the cheque was signed blank?",
    answer:
      "No. Under Sections 20, 118, and 139 of the Negotiable Instruments Act, reinforced by Sanjabij Tari (2025) and Bir Singh (2019), once the drawer admits their signature on the cheque, there is a mandatory statutory presumption of legally enforceable debt. Delivering a signed blank cheque gives the payee prima facie authority under Section 20 to complete the instrument. Mere assertions that the cheque was a 'blank security cheque' without contemporaneous documentary evidence will not rebut the presumption.",
  },
  {
    question: "Does a cash loan exceeding ₹20,000 make a cheque bounce complaint invalid under Section 269SS of the Income Tax Act?",
    answer:
      "No. In Sanjabij Tari v. Kishore S. Borcar (2025), the Supreme Court explicitly held that a violation of Section 269SS of the Income Tax Act (which restricts cash loans above ₹20,000) may attract tax penalties from the Revenue Department under Section 271D, but it does NOT render the debt illegal or unenforceable under Section 138 of the NI Act. Payees can validly prosecute cheque dishonour complaints regardless of tax inquiries.",
  },
  {
    question: "How has the Supreme Court changed summons delivery in cheque bounce cases (e-summons)?",
    answer:
      "Under the 2025 guidelines read with Section 64 of the Bharatiya Nagarik Suraksha Sanhita (BNSS) and Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), trial courts now issue summons electronically via verified email addresses, SMS, and WhatsApp alongside registered speed post. Server transmission receipts, read delivery reports, and blue ticks supported by a Section 63 BSA certificate constitute valid statutory service, enabling magistrates to issue bailable warrants if the accused fails to appear.",
  },
  {
    question: "What is the revised compounding cost scale for settling a cheque bounce case under Section 147?",
    answer:
      "Under the revised compounding guidelines, the earlier an accused settles, the less penalty they pay: (a) 0% surcharge if settled during the 15-day legal notice period or at the first hearing before the Magistrate; (b) 10% of the cheque amount if compounded after notice/charge framing; (c) 15% if compounded before the Sessions Court; and (d) 20% if compounded before the High Court or Supreme Court. All penalty costs are deposited with the State Legal Services Authority.",
  },
  {
    question: "What is the time limit to send a legal notice after a cheque bounces?",
    answer:
      "Under Section 138(b) of the NI Act, you must serve a written advocate legal demand notice within exactly 30 calendar days from the date of receiving the bank dishonour memo. The notice must give the drawer 15 days to pay the full cheque amount. If payment is not made within those 15 days, you have exactly 30 days from the 16th day to file a criminal complaint before the Metropolitan Magistrate or Judicial Magistrate First Class.",
  },
  {
    question: "Can I file a cheque bounce case if the bank memo says 'account closed' or 'stop payment'?",
    answer:
      "Yes. The Supreme Court in Modi Cements Ltd. and NEPC Micon Ltd. established that Section 138 applies to any cheque returned unpaid by the bank due to insufficiency of funds, account closure, stop payment instructions, or signature mismatch. The bank return memo serves as prima facie proof of dishonour under Section 146 of the NI Act.",
  },
  {
    question: "Cheque bounce hone ke kitne din baad notice dena chahiye aur naya niyam kya hai?",
    answer:
      "Bank se cheque bounce (dishonour memo) milne ke theek 30 dino ke andar Section 138(b) ke tehat statutory legal notice bhejna anivarya hai. Notice mein accused ko 15 din ka payment time diya jata hai. Supreme Court ke 2025 guidelines (Sanjabij Tari case) ke anusaar, ab summons WhatsApp aur email se bhi bheje ja sakte hain, aur agar accused pehli sunwai mein settlement kar leta hai toh koi compounding penalty nahi lagti, lekin appellate court mein settle karne par 15% se 20% jurmana Dalsa mein jama karna hota hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Changed in Cheque Bounce Cases After Sanjabij Tari (2025)",
  description:
    "The Supreme Court's 2025 guidelines changed summons, settlement and compounding in cheque bounce cases. Here's what it means for you.",
  datePublished: "2026-11-03T17:45:00+05:30",
  dateModified: "2026-11-03T17:45:00+05:30",
  mainEntityOfPage: `${SITE_URL}/law/cheque-bounce-supreme-court-guidelines-2025`,
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
    name: "Negotiable Instruments Act, 1881 — Section 138",
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
      name: "Cheque Bounce Notice Timeline",
      item: `${SITE_URL}/cheque-bounce-notice-timeline-section-138`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Supreme Court Guidelines 2025",
      item: `${SITE_URL}/law/cheque-bounce-supreme-court-guidelines-2025`,
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

export default function ChequeBounceSupremeCourtGuidelinesPage() {
  const breadcrumbItems = [
    { label: "Cheque Bounce Timeline", href: "/cheque-bounce-notice-timeline-section-138" },
    { label: "Supreme Court 2025 Guidelines", href: "/law/cheque-bounce-supreme-court-guidelines-2025" },
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
              <span>Section 138 NI Act • Sanjabij Tari Precedent</span>
              <span className="text-red-500">•</span>
              <span>Supreme Court 2025 Guidelines</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              What Changed in Cheque Bounce Cases After Sanjabij Tari (2025)
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (2025 Supreme Court Mandate)
              </p>
              <p>
                In <em>Sanjabij Tari v. Kishore S. Borcar</em> (September 2025), the Supreme Court ruled that cash loans exceeding ₹20,000 remain legally enforceable under Section 138 NI Act and confirmed that blank signed cheques carry mandatory statutory presumptions of liability. With nationwide electronic summons (WhatsApp/Email) under Section 63 BSA and graded 0%–20% compounding costs, evasion has ended. Payees must dispatch a formal 15-day statutory notice within 30 days of dishonour.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">30 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Notice From Bank Memo Date</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">E-Summons</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">WhatsApp &amp; Email Valid</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">0%–20%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Graded Compounding Costs</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹20,000+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Cash Debt Fully Enforceable</p>
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
            <ChequeBounceTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Summary & Why the 2025 Guidelines Matter */}
              <section id="heading-summary" aria-labelledby="heading-summary-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-summary-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why the 2025 Supreme Court Guidelines Mark a Turning Point in Cheque Bounce Litigation
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For over three decades, Section 138 of the Negotiable Instruments Act, 1881 has stood as the primary criminal-cum-civil mechanism to penalize dishonoured cheques and enforce commercial integrity in India. However, trial reality diverged drastically from statutory intent. Over 35 lakh cheque bounce cases clog Magistrate dockets across the country, representing more than 10% of India&apos;s total pending criminal litigation. Cases meant to conclude within six months as summary inquiries regularly dragged on for five to eight years.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  On 25 September 2025, the Supreme Court of India delivered a defining judgment in <em>Sanjabij Tari v. Kishore S. Borcar &amp; Anr.</em> (Criminal Appeal No. 1755 of 2010), accompanied by systemic directions on expeditious trials and revised compounding penalties under Section 147. The apex court clamped down on long-standing dilatory tactics: debtors can no longer delay proceedings by claiming they signed a blank security cheque, nor can they evade liability by citing Section 269SS cash loan tax limits. With courts ordered to adopt electronic summons and progressive compounding costs, Section 138 has reclaimed its deterrent potency.
                </p>
              </section>

              {/* Section 2: Before vs After Comparison Table (Archetype L2) */}
              <section id="heading-comparison-table" aria-labelledby="heading-comparison-table-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-comparison-table-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Before vs After: What Changed in Cheque Bounce Law Under 2025 Supreme Court Directives
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Rule Shift
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Compare the operational realities under the older procedural regime against the definitive legal benchmarks established by the Supreme Court in 2025:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[620px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Cheque Bounce Old Rules vs 2025 Supreme Court Guidelines</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3.5 px-4">Legal Issue / Stage</th>
                        <th scope="col" className="py-3.5 px-4 text-slate-600">Old Position (Pre-2025)</th>
                        <th scope="col" className="py-3.5 px-4 text-red-700">New 2025 Supreme Court Rule</th>
                        <th scope="col" className="py-3.5 px-4 text-slate-900">What It Means For You</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Cash Loans Exceeding ₹20,000 (S. 269SS IT Act)
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          Accused routinely argued cash loan was illegal contract; High Courts differed, causing acquittal appeals.
                        </td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold text-xs">
                          Sanjabij Tari (2025): Tax penalty under S. 271D operates separately; debt remains 100% enforceable under S. 138.
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          Payee can prosecute cheque bounce even if the loan was given in cash, eliminating a major debtor escape route.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Signed Blank &quot;Security Cheque&quot; Defense
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          Drawers sought handwriting forensic tests to prove ink difference, stalling trials for 2–4 years.
                        </td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold text-xs">
                          Once signature is admitted, S. 118 &amp; 139 presumptions hold. S. 20 confers implied authority to fill details.
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          Courts dismiss blank-cheque delay petitions; drawer must show concrete proof of debt discharge.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Summons Delivery &amp; Evasion Tactics
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          Restricted to physical Registered Speed Post. Accused returned envelopes marked &quot;door locked&quot; or &quot;left without address&quot;.
                        </td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold text-xs">
                          Mandatory electronic summons via WhatsApp, Email &amp; SMS under S. 64 BNSS and S. 63 BSA 2023.
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          Summons served to verified email or WhatsApp with read status enables immediate issuance of bailable warrants.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Compounding Costs Scale (Section 147 NI Act)
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          Damodar Prabhu guidelines were loosely enforced; accused offered settlement after years without extra cost.
                        </td>
                        <td className="py-3.5 px-4 text-red-700 font-bold text-xs">
                          Strict progressive scale: 0% at pre-summons / notice stage, 10% Magistrate, 15% Sessions, 20% HC/SC.
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          Accused faces heavy financial penalty for dragging case to appeal; strong incentive to settle in first 15 days.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Trial Conversion (Summary vs Summons Trial)
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          Magistrates routinely converted summary trials to lengthy summons trials on routine oral applications.
                        </td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold text-xs">
                          Magistrate must record specific formal reasons; complainant evidence strictly on S. 145 affidavit.
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          Drastically reduces witness box delays, allowing cases to reach judgment within 6 to 9 months.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic">
                  Note: Statutory provisions verified against Gazette of India NI Act amendments, BSA Section 63 electronic certification, and Supreme Court orders in Sanjabij Tari. For deadline computations, consult our <Link href="/tools/cheque-bounce-deadline-calculator" className="text-blue-700 underline font-semibold">cheque bounce deadline calculator</Link>.
                </p>
              </section>

              {/* Section 3: Landmark Judicial Digest */}
              <section id="heading-landmark-orders" aria-labelledby="heading-landmark-orders-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-landmark-orders-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Order Digest: 4 Supreme Court Rulings Governing Cheque Bounce Today
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Precedents
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
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Lower Court History:</strong>
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
                              Total Relief / Precedent Benchmark
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Judicial Jurisdiction
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Across All High Courts &amp; Magistrates
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for your recovery:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 4: Timeline of the Change (<ol> with <time>) */}
              <section id="heading-timeline-change" aria-labelledby="heading-timeline-change-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-timeline-change-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Timeline of Cheque Bounce Reforms: From 35-Lakh Case Crisis to 2025 Mandate
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The transformation of Section 138 proceedings represents years of judicial intervention designed to rescue commercial credibility:
                </p>

                <ol className="relative border-l-2 border-slate-200 ml-4 space-y-6 sm:space-y-8 list-none my-4">
                  <li className="relative pl-6">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-800 border-2 border-white ring-4 ring-slate-100" />
                    <time dateTime="2010-05-03" className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
                      3 May 2010
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      Damodar S. Prabhu Formulates Compounding Surcharges
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      The Supreme Court recognized that compounding under Section 147 should be encouraged early. It introduced graded financial costs (0% at trial court, 10% after charge, 15% at Sessions, 20% at High Court/SC) payable to Legal Services Authorities to curb vexatious appeals.
                    </p>
                  </li>

                  <li className="relative pl-6">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-800 border-2 border-white ring-4 ring-slate-100" />
                    <time dateTime="2018-09-01" className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
                      1 September 2018
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      Parliament Enacts Sections 143A &amp; 148 (Interim Compensation)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      The Negotiable Instruments (Amendment) Act, 2018 introduced Section 143A, enabling trial courts to order up to 20% interim compensation from the drawer during trial, and Section 148, mandating a minimum 20% deposit in appellate courts before staying conviction.
                    </p>
                  </li>

                  <li className="relative pl-6">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-800 border-2 border-white ring-4 ring-slate-100" />
                    <time dateTime="2021-04-16" className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
                      16 April 2021
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      Constitution Bench Mandate on Expeditious Trials
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      In <em>Re: Expeditious Trial</em>, a 5-judge bench directed that trial courts cannot casually bypass summary procedure, prohibited unnecessary pre-summoning oral evidence, and recommended statutory amendments to establish special fast-track NI Act courts.
                    </p>
                  </li>

                  <li className="relative pl-6">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-red-600 border-2 border-white ring-4 ring-red-100" />
                    <time dateTime="2025-09-25" className="text-xs font-extrabold uppercase tracking-wider text-red-600 block">
                      25 September 2025
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      Supreme Court Ruling in Sanjabij Tari v. Kishore S. Borcar
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      The Supreme Court authoritatively settled that cash loans over ₹20,000 remain fully enforceable under Section 138 regardless of tax penalties under Section 269SS, struck down casual blank-cheque defenses, and directed High Courts to enforce electronic summons tracking nationwide.
                    </p>
                  </li>

                  <li className="relative pl-6">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white ring-4 ring-emerald-100" />
                    <time dateTime="2025-11-01" className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 block">
                      1 November 2025 (Nationwide Implementation Deadline)
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      High Court Rules &amp; Electronic Summons Implementation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      High Courts across Indian states issued practice directions integrating WhatsApp/email e-summons systems with CIS (Case Information System), establishing fast-track disposal cells for pre-2022 complaints.
                    </p>
                  </li>
                </ol>
              </section>

              {/* Section 5: Open Questions & Grey Areas (Archetype L2) */}
              <section id="heading-grey-areas" aria-labelledby="heading-grey-areas-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-grey-areas-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Open Questions &amp; Practical Grey Areas Under the 2025 Guidelines
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  While the 2025 directives close major loopholes, litigating under Section 138 still involves complex evidentiary hurdles that require careful legal strategy:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        Grey Area 1 †
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900">
                        Electronic Summons Proof Under Section 63 BSA
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Serving summons via WhatsApp requires proving that the phone number is tied to the accused. While a &quot;blue tick&quot; indicates receipt, defense lawyers often challenge device ownership. Litigants must produce a Section 63 BSA electronic certificate and corroborate mobile numbers through KYC bank statements or prior business emails.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        Grey Area 2 †
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900">
                        Income Tax Scrutiny on Cash Lenders
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Although <em>Sanjabij Tari</em> protects the enforceability of cash loans exceeding ₹20,000 under Section 138, trial records are public. The Income Tax Department can initiate separate penalty proceedings under Section 271D against lenders for cash violations, equal to 100% of the loan amount, unless &quot;reasonable cause&quot; is shown under Section 273B.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        Grey Area 3 †
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900">
                        Section 141 Vicarious Liability for Directors
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      When a company cheque bounces, complainant notices frequently name all directors. In <em>Sunita Palita (2022)</em> and <em>Siby Thomas (2020)</em>, the Supreme Court held that independent or non-executive directors cannot be dragged into Section 138 unless specific averments show they were in charge of day-to-day business at the time of dishonour.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        Grey Area 4 †
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900">
                        Compounding After Conviction Without Complainant
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      While <em>Kanchan Mehta</em> allows trial discharge upon deposit of the cheque amount plus interest, once conviction is recorded by the trial court, appellate compounding typically requires either complainant consent or payment of full compensation with 15%–20% compounding surcharge.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Resolution Rail Flowchart (Hand-Authored SVG) */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Escalation Rail: Cheque Dishonour to Trial Compounding
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this mandatory statutory sequence under Section 138 to 142 of the Negotiable Instruments Act to safeguard limitation and maximize recovery:
                </p>

                {/* Mobile Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Dishonour Memo Issued</h3>
                    <p className="text-xs text-slate-200 mt-1">Bank returns cheque with return code (funds insufficient, stop payment, account closed).</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Serve 30-Day Statutory Notice</h3>
                    <p className="text-xs text-amber-900 mt-1">Dispatch advocate demand notice within 30 days giving drawer 15 days to pay.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">15-Day Cure Window Expires</h3>
                    <p className="text-xs text-slate-700 mt-1">Cause of action arises on Day 16. Payee has exactly 30 days to file complaint.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Magistrate Filing &amp; E-Summons</h3>
                    <p className="text-xs text-red-900 mt-1">File S. 138 complaint with S. 145 affidavit and issue WhatsApp/Email summons.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Pre-Trial Settlement / Conviction</h3>
                    <p className="text-xs text-emerald-900 mt-1">0% compounding at first hearing or up to 2 years imprisonment + 2x cheque penalty.</p>
                  </div>
                </div>

                {/* Hand-Authored SVG Flowchart */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Cheque Bounce Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Section 138 Cheque Bounce Statutory Process Flowchart"
                  >
                    <defs>
                      <linearGradient id="cbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="cbAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="cbSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#cbGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Cheque Bounces</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Bank Return Memo</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Day 0: Memo Received</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">30-Day Notice</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Speed Post + Email</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">15 Days to Pay</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Cause of Action</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Day 16: Default</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">File within 30 Days</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#cbAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">E-Summons Issued</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">WhatsApp / Email</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">BSA S.63 Certified</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#cbSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Compounding / Pay</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">0% Penalty Early</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or 2 Yrs Jail + 2x Fine</text>

                    {/* Bottom Benchmark Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY TIMELINES UNDER SECTION 138 &amp; 142 NI ACT:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Legal Notice Dispatch Window: Strict 30 calendar days from receipt of Bank Dishonour Memo</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Statutory Cure Period: 15 full days from notice delivery before complaint can be drafted</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Court Complaint Limitation: 30 days from expiry of the 15-day cure period before JMFC / MM</text>
                  </svg>
                </div>
              </section>

              {/* Section 7: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Action Guide: How to Apply the 2025 Rules to Recover Your Money
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To benefit from the 2025 Supreme Court precedents and ensure your cheque bounce complaint is airtight from day one, follow these five steps:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Collect Bank Dishonour Memo &amp; Calculate the 30-Day Window
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Immediately retrieve the original cheque return memo from your bank. Check the date stamp. Under Section 138(b), you have exactly 30 calendar days from the date you receive this memo to dispatch the statutory demand notice. Missing this deadline forfeits your criminal remedy under Section 138.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Read our detailed timeline analysis on <Link href="/cheque-bounce-notice-timeline-section-138" className="text-blue-700 underline font-semibold">cheque bounce notice timelines under Section 138</Link> or consult the Hindi guide on <Link href="/hi/cheque-bounce-notice-kitne-din-mein" className="text-blue-700 underline font-semibold">cheque bounce notice kitne din mein bheje</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Statutory Advocate Legal Notice via Speed Post &amp; Electronic Channels
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Have an advocate draft an official demand notice specifically invoking Section 138 of the Negotiable Instruments Act. Dispatch via Registered Speed Post with tracking and simultaneously transmit via Section 63 BSA compliant email and WhatsApp. Demand full payment within 15 days of receipt.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        View our transparent drafting fees on the <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Monitor 15-Day Cure Window &amp; Establish Cause of Action
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        The drawer is granted 15 days from delivery to tender payment. If payment is not completed within 15 days, the statutory criminal cause of action arises on Day 16. You have exactly 30 days from Day 16 to file the criminal complaint under Section 142(1)(b) in the court having jurisdiction over your bank branch where you maintain your account.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File Complaint With Section 145 Affidavit &amp; Digital Contact Data
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        File the Section 138 complaint before the Judicial Magistrate First Class (JMFC) or Metropolitan Magistrate (MM). Under the Supreme Court&apos;s expeditious trial directives, submit the complainant&apos;s examination-in-chief on affidavit under Section 145 NI Act to bypass initial witness-box delays. Furnish verified WhatsApp numbers and email IDs to secure immediate e-summons issuance.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Leverage 20% Interim Compensation (S. 143A) &amp; Compounding Penalties
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        At the first hearing or upon plea framing, file an application under Section 143A demanding up to 20% interim compensation from the drawer. Inform the accused that while settling now costs 0% penalty, dragging the trial will trigger up to 20% compounding surcharge under Damodar Prabhu and Sanjabij Tari guidelines, alongside risk of up to 2 years imprisonment.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 8: Interactive Scenario / Defense Tabs */}
              <section id="heading-scenarios-tabs" aria-labelledby="heading-scenarios-tabs-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenarios-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Common Cheque Bounce Defenses &amp; How the 2025 Rules Dismantle Them
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select a Specific Debtor Defense to Review the Exact Supreme Court Ruling and Immediate Counter-Strategy
                  </p>
                </div>

                <ChequeBounceScenariosTabs />
              </section>

              {/* Section 9: Worked Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Case Study: Supplier Recovers ₹6,50,000 Without Trial Fatigue Using 2025 Notice Strategy
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Commercial Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Pune to Surat (Industrial Machinery Components)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Dispute:</strong> SunTech Engineering (Pune) delivered CNC precision tooling components valued at ₹6,50,000 to an auto-ancillary manufacturer in Surat. Against invoice clearance, the Surat buyer issued an HDFC Bank cheque for ₹6,50,000. When presented at SunTech&apos;s bank branch in Pune, the cheque was returned unpaid on 12 August with the bank memo stating <em>&quot;01: Funds Insufficient&quot;</em>.
                    </p>
                    <p>
                      <strong>The Debtor&apos;s Initial Stand:</strong> The buyer avoided calls for two weeks, before sending an email asserting that the cheque had been given only as a &quot;blank security deposit&quot; before dispatch and threatening to claim the tooling was substandard. The buyer assumed that an interstate Section 138 trial in Pune would take years to summon them.
                    </p>
                    <p>
                      <strong>The 2025 Statutory Notice:</strong> On Day 18 following dishonour, SunTech engaged LegalRecovery.in. An advocate drafted and dispatched an official statutory demand notice under Section 138 of the NI Act. The notice explicitly cited <em>Sanjabij Tari v. Kishore S. Borcar (2025)</em> and <em>Bir Singh (2019)</em>, explaining that: (1) Presumptions under Sections 118 &amp; 139 completely bar the blank-cheque evasion; (2) The Surat directors would be served via electronic summons under Section 63 BSA; and (3) Settling during the 15-day notice window incurred 0% compounding penalty, whereas trial conviction would trigger a 20% interim deposit under Section 143A and potential imprisonment up to 2 years.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Resolution:</strong>
                      On Day 9 following delivery of the statutory notice via Speed Post and WhatsApp, the buyer&apos;s legal counsel contacted SunTech. Recognizing that the 2025 guidelines eliminated procedural evasion and that Section 143A would enforce an immediate 20% court deposit, the debtor remitted the entire ₹6,50,000 principal plus ₹25,000 in advocate expenses via RTGS, achieving full recovery within 28 days of initial dishonour.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Evidence Checklist Under Section 63 BSA */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Cheque Bounce Evidence Checklist: 6 Essential Documents for Section 138 Filing
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under the Negotiable Instruments Act and Section 63 of Bharatiya Sakshya Adhiniyam, 2023, maintain these six items to secure immediate cognizance and bailable summons:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Original Bounced Cheque:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Physical negotiable instrument showing drawer signature, date, and payee name.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Original Bank Return Memo:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Bank memo with date stamp and return reason (prima facie proof of dishonour under S. 146).</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Statutory Legal Demand Notice:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Copy of notice dispatched within 30 days demanding full payment within 15 days.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Postal Speed Post Receipt &amp; Delivery Tracking:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">India Post consignment receipt and signed delivery confirmation / tracking manifest.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">BSA Section 63 Electronic Certificate:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Certificate supporting electronic notice transmission via email, SMS, or WhatsApp.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Underlying Proof of Legally Enforceable Debt:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Tax invoices, delivery challans, ledger statements, loan agreement, or bank statement.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions: New Cheque Bounce Rules &amp; Supreme Court Guidelines
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in the Negotiable Instruments Act, Sanjabij Tari (2025), and Criminal Procedure Rules
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
                  Statutory References, Supreme Court Orders &amp; Primary Authorities
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
                  Statutory verification status: All provisions verified against India Code legislative gazettes, Supreme Court criminal appeal records in Sanjabij Tari v. Kishore S. Borcar, and Bharatiya Sakshya Adhiniyam 2023 as of November 2026.
                </p>
              </section>

              {/* Primary CTA Block */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Statutory Cheque Bounce Legal Notice
                </h2>
                <ChequeBounceNoticeCTA variant="primary" />
              </section>

              {/* Contextual Internal Links Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Cheque Dishonour &amp; Debt Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/cheque-bounce-notice-timeline-section-138"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Section 138 Notice Timelines Hub →
                  </Link>
                  <Link
                    href="/hi/cheque-bounce-notice-kitne-din-mein"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Hindi: Cheque Bounce Notice Kitne Din Mein →
                  </Link>
                  <Link
                    href="/tools/cheque-bounce-deadline-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Cheque Bounce Deadline Calculator →
                  </Link>
                  <Link
                    href="/security-cheque-misuse-section-138"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Security Cheque Misuse Defense Guide →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Advocate Fees →
                  </Link>
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Order 37 Summary Suit Civil Recovery →
                  </Link>
                  <Link
                    href="/upi-transfer-as-proof-of-loan"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    UPI Transfer as Proof of Debt →
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
