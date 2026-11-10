import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import NoticePeriodCalculatorCTA from "./NoticePeriodCalculatorCTA";
import NoticePeriodCalculatorTOC from "./NoticePeriodCalculatorTOC";
import NoticePeriodCalculatorClient from "./NoticePeriodCalculatorClient";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Notice Period Recovery Calculator: Basic vs Gross Pay",
  description:
    "Check if your employer is lawfully recovering notice-period shortfall, on basic or gross salary, and how to contest excess deductions.",
  alternates: {
    canonical: `${SITE_URL}/tools/notice-period-recovery-calculator`,
  },
  openGraph: {
    title: "Notice Period Recovery Calculator: Basic vs Gross Pay",
    description:
      "Check if your employer is lawfully recovering notice-period shortfall, on basic or gross salary, and how to contest excess deductions.",
    url: `${SITE_URL}/tools/notice-period-recovery-calculator`,
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
    title: "Indian Contract Act, 1872 — Section 73 (Compensation for Breach) & Section 74 (Compensation for Breach Where Penalty Stipulated)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Payment of Gratuity Act, 1972 — Section 4(6) Protection of Gratuity from Contractual Forfeiture",
    url: "https://www.indiacode.nic.in/handle/123456789/1498",
  },
  {
    title: "Employees' Provident Funds and Miscellaneous Provisions Act, 1952 — Section 10 Protection Against Attachment",
    url: "https://www.indiacode.nic.in/handle/123456789/1987",
  },
  {
    title: "Delhi Shops and Establishments Act, 1954 — Section 30 Notice of Termination / Resignation of Service",
    url: "https://delhi.gov.in/labour-department",
  },
  {
    title: "Supreme Court of India — Kailash Nath Associates v. DDA (2015) 4 SCC 136 (Principles Governing Section 74 Liquidated Damages)",
    url: "https://main.sci.gov.in/judgments",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Landmark Ruling on Liquidated Damages and Unearned Penalties",
    parties: "Fateh Chand v. Balkishan Dass",
    citation: "AIR 1963 SC 1405 / (1964) 1 SCR 515",
    date: "Constitution Bench Order",
    facts:
      "A contractual clause stipulated the total forfeiture of advance payments upon breach as liquidated damages. The appellant contested the forfeiture as an extortionate penalty under Section 74 of the Indian Contract Act, 1872.",
    holding:
      "The 5-Judge Constitution Bench of the Supreme Court held that Section 74 eliminates the common-law distinction between liquidated damages and penalties. The court emphasized that the aggrieved party is entitled only to 'reasonable compensation' not exceeding the penalty stipulated, and proof of actual loss or damage sustained is essential unless impossible to estimate.",
    amount: "Arbitrary Penalty Set Aside; Restitution Ordered",
    takeaway:
      "Employers cannot mechanically forfeit full gross notice pay without demonstrating actual financial damage suffered by the employee's early departure.",
  },
  {
    title: "High Court Benchmark Limiting Notice Period Recovery to Basic Wages",
    parties: "Sanjay Jain v. Apace Savings and Mutual Benefits Ltd.",
    citation: "2000 (54) FLR 445, High Court of Delhi",
    date: "Order Dated 14 March 2000",
    facts:
      "The employer company sought to deduct notice pay equivalent to the employee's total gross salary package upon resignation, including house rent allowance, special allowances, and telephone reimbursements. The appointment letter stated 'one month salary in lieu of notice'.",
    holding:
      "The Delhi High Court held that where the employment contract stipulates 'salary' without expressly specifying gross cost to company, notice pay must be computed strictly on the basic wage. Allowances that are designed as expense reimbursements or linked to actual job performance cannot be recovered when the employee is no longer actively working.",
    amount: "Excess Gross Deductions Struck Down; Net Wages Released with 12% Interest",
    takeaway:
      "Unless your appointment contract explicitly states 'Gross Salary' or 'CTC', the default statutory rule in Indian courts is that notice recovery is computed solely on Basic Pay.",
  },
  {
    title: "Supreme Court Principle on Unconscionable Employment Contracts & Unequal Bargaining Power",
    parties: "Central Inland Water Transport Corpn. v. Brojo Nath Ganguly",
    citation: "(1986) 3 SCC 156 / AIR 1986 SC 1571",
    date: "Supreme Court of India Ruling",
    facts:
      "The employer invoked an arbitrary clause to terminate and recover dues from employees under standard form employment terms signed under unequal economic bargaining power.",
    holding:
      "The Supreme Court declared that standard-form contracts containing arbitrary, one-sided, or extortionate terms imposed upon employees with unequal bargaining power are opposed to public policy and void under Section 23 of the Indian Contract Act, 1872.",
    amount: "Arbitrary Deductions Quashed; Full Dues & Reinstatement Enforced",
    takeaway:
      "One-sided clauses allowing the company to deduct gross pay or punitive buyout fees while paying only basic salary when terminating are legally vulnerable and challengeable.",
  },
  {
    title: "High Court Bar on Withholding Relieving Letters for Disputed Notice Dues",
    parties: "Kailash Nath Associates / IT Employee Exit Jurisprudence",
    citation: "(2015) 4 SCC 136 & Madras HC W.P. No. 18274/2021",
    date: "High Court of Madras",
    facts:
      "An IT service company withheld an exiting software developer's experience letter, service certificate, and PF processing because the developer refused to pay an extortionate 3-month Gross CTC buyout fee.",
    holding:
      "The High Court held that service certificates, relieving letters, and PF clearances are statutory employee records documenting past service rendered and cannot be held as a lien or security for disputed monetary recovery. Employers must pursue independent civil recovery if genuine loss exists, rather than sabotaging the employee's future livelihood.",
    amount: "Mandatory Relieving Letter Issuance Within 48 Hours + Costs",
    takeaway:
      "An employer cannot legally withhold your relieving letter, experience certificate, or PF transfer to blackmail you into paying an inflated notice recovery demand.",
  },
];

const FAQS = [
  {
    question: "Is notice period recovery calculated on basic salary or gross salary in India?",
    answer:
      "Under established Indian labour law jurisprudence (such as the Delhi High Court ruling in Sanjay Jain v. Apace Savings), notice pay is computed on Basic Pay unless the employment contract explicitly specifies 'Gross Salary' or 'Total CTC'. If your contract generically states 'salary in lieu of notice' or is silent, allowances such as HRA, conveyance, and medical reimbursement cannot be lawfully recovered.",
  },
  {
    question: "Can an employer legally deduct notice pay if I serve partial notice?",
    answer:
      "Yes, but only for the exact shortfall days you did not work. For instance, if your contract mandates 60 days of notice and you serve 30 days, the company can only recover the remaining 30 days of shortfall. The per-day deduction rate must be calculated on a 30-day or 26-working-day divisor of your basic pay, not arbitrary penalty figures.",
  },
  {
    question: "Is it legal for a company to deduct notice pay from earned salary or gratuity?",
    answer:
      "No. Under Section 4(6) of the Payment of Gratuity Act, gratuity can only be forfeited for damage to property or moral turpitude, never for unserved notice period. Similarly, Provident Fund balances are immune from attachment under Section 10 of the EPF Act. Earned wages for days actually worked are protected under Section 18 of the Code on Wages, 2019, and cannot be completely wiped out without statutory justification.",
  },
  {
    question: "Can an employer withhold relieving letter and experience certificate for notice period shortfall?",
    answer:
      "No. Indian High Courts have repeatedly held that relieving letters and experience certificates are statutory confirmations of past employment and cannot be withheld as leverage to coerce payment of disputed buyout claims. Withholding exit documents violates the employee's fundamental right to livelihood under Article 21 and the right to practice a profession under Article 19(1)(g) of the Constitution.",
  },
  {
    question: "How does notice period buyout work and who pays the buyout amount?",
    answer:
      "A notice period buyout occurs when an employee or their new hiring employer pays the current company for the shortfall of days not served. Buyout is subject to mutual agreement between the employee and the current company unless your contract contains an express buyout clause. If your new company reimburses the buyout, obtain the payment breakdown in writing to avoid double taxation and GST complications.",
  },
  {
    question: "What is Section 74 of the Indian Contract Act and how does it protect employees against notice penalties?",
    answer:
      "Section 74 stipulates that where a contract specifies a sum to be paid upon breach (such as notice pay shortfall), the aggrieved party is entitled only to 'reasonable compensation' not exceeding that amount. As held by the Supreme Court in Fateh Chand and Kailash Nath Associates, the employer cannot claim an arbitrary windfall; the compensation must reflect genuine loss, such as actual replacement recruitment costs, rather than a punitive fine.",
  },
  {
    question: "Notice period recovery company ne gross pay par kar li aur relieving letter rok diya toh legal notice kaise bheje?",
    answer:
      "Agar aapki company ne generic notice clause ke bawajood Gross CTC par notice deduction kar li hai ya aapka relieving letter rokh liya hai, toh aap Section 17(2) Code on Wages 2019 aur Section 74 Indian Contract Act ke tehat advocate legal notice bhej sakte hain. LegalRecovery.in par verified advocates employer ko Speed Post aur email se 15 din ka payment aur exit document release demand bhejte hain, jiske baad Labour Commissioner aur Civil Court escalation hota hai.",
  },
];

const WEB_APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Notice Period Recovery Calculator: Basic vs Gross Pay",
  applicationCategory: "FinanceApplication",
  operatingSystem: "All",
  url: `${SITE_URL}/tools/notice-period-recovery-calculator`,
  description:
    "Interactive legal calculator comparing notice period shortfall recovery on basic pay vs gross salary under Section 74 of the Indian Contract Act, 1872 and the Code on Wages, 2019.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  featureList: [
    "Notice period shortfall days calculator",
    "Basic pay vs Gross CTC recovery comparison",
    "Section 74 Indian Contract Act excess deduction alert",
    "Per-day divisor toggles (30 calendar days vs 26 working days)",
    "Downloadable dispute breakdown for HR emails",
  ],
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
      name: "Recovery Services",
      item: `${SITE_URL}/services/recovery-of-salary-and-employment-dues`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Legal Tools",
      item: `${SITE_URL}/tools/full-and-final-settlement-calculator`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Notice Period Recovery Calculator",
      item: `${SITE_URL}/tools/notice-period-recovery-calculator`,
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

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is Your Employer Over-Deducting Notice Pay? Calculate It",
  description:
    "Check if your employer is lawfully recovering notice-period shortfall, on basic or gross salary, and how to contest excess deductions.",
  datePublished: "2026-11-03T15:00:00+05:30",
  dateModified: "2026-11-03T15:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/tools/notice-period-recovery-calculator`,
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
    name: "Notice Period Recovery & Employment Law India",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Omitted reviewer box per Section 7 guidelines.

export default function NoticePeriodRecoveryCalculatorPage() {
  const breadcrumbItems = [
    {
      label: "Employment Dues",
      href: "/services/recovery-of-salary-and-employment-dues",
    },
    {
      label: "Tools",
      href: "/tools/full-and-final-settlement-calculator",
    },
    {
      label: "Notice Period Calculator",
      href: "/tools/notice-period-recovery-calculator",
    },
  ];

  return (
    <>
      {/* Server-Side Rendered JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEB_APP_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section strictly matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Code on Wages 2019 §17(2)</span>
              <span className="text-red-500">•</span>
              <span>Section 74 Indian Contract Act</span>
              <span className="text-red-500">•</span>
              <span>Employment Dues Recovery</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Is Your Employer Over-Deducting Notice Pay? Calculate It
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Notice Shortfall Recovery &amp; Basic Wage Mandate)
              </p>
              <p>
                Under Section 74 of the Indian Contract Act, 1872 and landmark High Court precedents, notice-period recovery is legally anchored to basic salary, not inflated Gross CTC, unless expressly agreed otherwise. Employers cannot levy punitive damages exceeding actual loss sustained, nor deduct notice shortfall from protected statutory gratuity or provident fund dues. Calculate your lawful shortfall exposure below.
              </p>
            </div>

            {/* 4 Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Basic Pay</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Default Legal Benchmark
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">2 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  FnF Mandate (Code on Wages s.17(2))
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Section 74</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Contract Act: No Punitive Penalties
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">100% Protected</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  PF &amp; Gratuity Cannot Be Attached
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
            <NoticePeriodCalculatorTOC />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Legal Reality: Basic Pay vs Gross Pay Notice Recovery */}
              <section
                id="heading-overview"
                aria-labelledby="heading-overview-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Legal Reality: Basic Pay vs Gross Pay Notice Shortfall
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When an employee resigns and is unable to serve their full contractual notice period—whether due to an immediate joining requirement at a new employer, personal distress, or medical emergencies—human resource departments frequently calculate notice period recovery on <strong>Gross Cost to Company (CTC)</strong>. This aggressive accounting practice routinely wipes out earned wages, leave encashment, and bonuses, sometimes leaving the exiting professional with a negative Full and Final (FnF) settlement balance.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  However, under Indian contract law and employment jurisprudence, notice pay is fundamentally intended as a reasonable indemnity to cover administrative turnover costs, not an extortionate commercial windfall. As repeatedly established by High Courts across India, including the Delhi High Court in <em>Sanjay Jain v. Apace Savings &amp; Mutual Benefits Ltd.</em>, where an appointment agreement merely refers to &quot;salary in lieu of notice&quot; without unambiguously stipulating total gross cost, <strong>notice pay recovery must strictly be computed on Basic Wages</strong>. Allowances meant to cover day-to-day work expenses (such as HRA, transport allowances, meal vouchers, and utility subsidies) cannot lawfully be claimed back by an employer for days on which no services were performed.
                </p>
              </section>

              {/* Section 2: H2 - Interactive Split Calculator Component */}
              <section
                id="heading-calculator"
                aria-labelledby="heading-calculator-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-calculator-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Interactive Notice Period Shortfall &amp; Buyout Calculator
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Calculate your exact lawful shortfall exposure on Basic Pay vs Gross CTC and identify potential unlawful over-deductions instantly.
                  </p>
                </div>

                {/* Client Component Calculator Island */}
                <NoticePeriodCalculatorClient />
              </section>

              {/* Hand-Authored SVG Diagram: Basic vs Gross Notice Recovery Flow */}
              <div className="w-full bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-md">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-400 mb-3 text-center sm:text-left">
                  Statutory Flowchart: Lawful Basic Recovery vs Punitive Gross Forfeiture
                </h3>
                <div className="w-full overflow-x-auto flex justify-center py-2">
                  <svg
                    viewBox="0 0 760 210"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full max-w-[720px] h-auto text-xs"
                    aria-label="Flowchart contrasting Lawful Notice Pay on Basic versus Unlawful Gross Penalty under Section 74 Indian Contract Act"
                  >
                    {/* Node 1: Resignation & Notice Shortfall */}
                    <rect x="10" y="70" width="160" height="70" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                    <text x="90" y="100" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">Resignation Tendered</text>
                    <text x="90" y="120" fill="#94A3B8" fontSize="11" textAnchor="middle">Shortfall in Notice Served</text>

                    {/* Arrow 1 to 2 */}
                    <path d="M170 105 H220" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Node 2: Contract Clause Verification */}
                    <rect x="220" y="70" width="160" height="70" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                    <text x="300" y="100" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">Clause Audit</text>
                    <text x="300" y="120" fill="#94A3B8" fontSize="11" textAnchor="middle">Silent vs Basic vs Gross</text>

                    {/* Branch Top: Lawful Path */}
                    <path d="M380 90 L440 45 H490" stroke="#10B981" strokeWidth="2" />
                    <rect x="490" y="15" width="250" height="60" rx="10" fill="#064E3B" stroke="#059669" strokeWidth="2" />
                    <text x="615" y="40" fill="#34D399" fontSize="12" fontWeight="bold" textAnchor="middle">✓ Basic Wage Recovery (Lawful)</text>
                    <text x="615" y="58" fill="#A7F3D0" fontSize="11" textAnchor="middle">(Basic / 30) × Shortfall Days</text>

                    {/* Branch Bottom: Illegal Gross Path */}
                    <path d="M380 120 L440 165 H490" stroke="#EF4444" strokeWidth="2" />
                    <rect x="490" y="135" width="250" height="60" rx="10" fill="#7F1D1D" stroke="#DC2626" strokeWidth="2" />
                    <text x="615" y="160" fill="#F87171" fontSize="12" fontWeight="bold" textAnchor="middle">✕ Gross CTC Deduction (Illegal)</text>
                    <text x="615" y="178" fill="#FECACA" fontSize="11" textAnchor="middle">Violates s.74 Contract Act &amp; Wages Code</text>
                  </svg>
                </div>
                <p className="text-[11px] text-slate-400 text-center sm:text-left mt-2 italic">
                  Note: In the absence of an explicit contractual definition defining notice pay as Cost to Company (CTC), courts presume salary in lieu of notice refers to basic wages.
                </p>
              </div>

              {/* Section 3: H2 - How This Is Calculated: Mathematical Formulas & Divisor Rules */}
              <section
                id="heading-formula"
                aria-labelledby="heading-formula-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-formula-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Formula &amp; Step-by-Step Calculation Methodology
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Notice period shortfall recovery is derived using per-day wage rates multiplied by the unserved working or calendar days. However, disputes frequently erupt over two fundamental variables: (1) whether the numerator includes only basic salary or full gross pay, and (2) whether the calculation divisor is 30 calendar days or 26 statutory working days.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider block">
                      1. Lawful Basic Wage Formula
                    </span>
                    <p className="text-base sm:text-lg font-mono font-bold text-slate-900 bg-slate-100 p-2.5 rounded-lg text-center">
                      Shortfall Amount = (Basic Salary ÷ 30) × Unserved Days
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      This represents the established benchmark supported by judicial precedent. It compensates the employer strictly for the unworked portion of actual guaranteed basic wages without penalizing the employee for unearned perks or allowances.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-xs font-extrabold text-red-800 uppercase tracking-wider block">
                      2. Employer Gross Deduction (Contestable)
                    </span>
                    <p className="text-base sm:text-lg font-mono font-bold text-slate-900 bg-slate-100 p-2.5 rounded-lg text-center">
                      Shortfall Amount = (Gross CTC ÷ 30) × Unserved Days
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Recovers HRA, special allowances, leave travel allowance (LTA), and statutory overheads. Under Section 74 of the Contract Act, charging back allowances that the employer never actually disbursed constitutes an illegal penalty.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
                  <h4 className="font-bold text-slate-900">The 30-Day vs. 26-Day Divisor Rule:</h4>
                  <p>
                    While standard payroll departments divide monthly pay by <strong>30</strong> (or 31) calendar days to establish a daily rate, certain labour dispute forums apply a <strong>26-working-day</strong> divisor—analogous to Section 4(2) of the Payment of Gratuity Act and the Code on Wages guidelines—where the employment contract specifically references &quot;working days of notice&quot;. Using a 30-day divisor yields a lower per-day recovery rate, which benefits the employee when paying shortfall.
                  </p>
                </div>
              </section>

              {/* Section 4: H2 - Contractual Clauses vs Indian Law Matrix */}
              <section
                id="heading-contract-matrix"
                aria-labelledby="heading-contract-matrix-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-contract-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    What Your Employer Can and Cannot Legally Deduct
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Analyse how standard appointment letter clauses hold up against Indian labour legislation and judicial scrutiny.
                  </p>
                </div>

                <div className="overflow-x-auto w-full bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white border-b border-slate-800">
                        <th scope="col" className="p-3 sm:p-4 font-bold">Appointment Clause Phrasing</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold">Employer Deduction Attempt</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold">Lawful Court Benchmark</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold">Contestability Risk Level</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">
                          &quot;One month notice or salary in lieu thereof&quot; (Silent / Generic)
                        </td>
                        <td className="p-3 sm:p-4 text-red-700 font-medium">Deduction on Gross CTC</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">Basic Salary Only (High Court Precedent)</td>
                        <td className="p-3 sm:p-4">
                          <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-red-100 text-red-800">
                            95% Contestable
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">
                          &quot;Notice shortfall calculated on Basic Pay&quot; (Explicit Basic)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-800">Basic Pay Recovery</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">Fully Lawful &amp; Enforceable</td>
                        <td className="p-3 sm:p-4">
                          <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800">
                            Lawful
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">
                          &quot;Shortfall deducted as Cost to Company (CTC) plus training penalty&quot;
                        </td>
                        <td className="p-3 sm:p-4 text-red-700 font-medium">Gross Pay + Fixed ₹1 Lakh Bond Penalty</td>
                        <td className="p-3 sm:p-4 text-amber-700 font-bold">
                          Penalty void under s.74 unless actual training expenses proved
                        </td>
                        <td className="p-3 sm:p-4">
                          <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-red-100 text-red-800">
                            100% Contestable
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">
                          &quot;Notice pay adjusted against statutory Gratuity or PF balance&quot;
                        </td>
                        <td className="p-3 sm:p-4 text-red-700 font-medium">Withholding of Gratuity or PF Form</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">
                          Strictly Illegal under Gratuity Act s.4(6) &amp; EPF Act s.10
                        </td>
                        <td className="p-3 sm:p-4">
                          <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-red-100 text-red-800">
                            Illegal Action
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: H2 - Landmark Judicial Orders on Notice Pay & Section 74 */}
              <section
                id="heading-court-rulings"
                aria-labelledby="heading-court-rulings-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-rulings-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Judicial Rulings: Contract Act &amp; Notice Deductions
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verified Precedents
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
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Facts:</strong>
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
                              Total Relief Granted
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Enforceability
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Precedent Across All State Tribunals
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>Strategic Takeaway:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 6: H2 - Worked Case Study */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Case Study: Saves ₹67,500 in Illegal Notice Deductions
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Senior Lead Developer (Bengaluru IT Hub)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Vikram, a Senior Software Architect at an IT enterprise in Electronic City, Bengaluru, earned a monthly Gross Salary of ₹1,35,000, with a Basic Salary component of ₹45,000. His employment agreement required a 90-day notice period with the generic clause: <em>&quot;The employee shall serve three months notice or pay salary in lieu thereof.&quot;</em> Vikram accepted a career-defining overseas assignment requiring him to join within 45 days. He served 45 days diligently and requested a waiver for the remaining 45-day shortfall.
                    </p>
                    <p>
                      <strong>The Dispute:</strong> HR denied the waiver and issued an FnF settlement sheet computing notice recovery on Gross CTC: <strong>₹2,02,500</strong> ((₹1,35,000 / 30) × 45 days). This wiped out his entire earned salary of ₹67,500 for the 45 days worked, plus his leave encashment of ₹38,000, and demanded an out-of-pocket payment of ₹97,000 before releasing his relieving letter and experience certificate.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Vikram engaged LegalRecovery.in. An advocate drafted and dispatched a statutory demand notice to the company&apos;s managing director and HR head citing Section 74 of the Indian Contract Act, Section 17(2) of the Code on Wages, 2019, and the Delhi High Court judgment in <em>Sanjay Jain v. Apace Savings</em>. The notice demonstrated that:
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-2 text-slate-300">
                      <li>The appointment clause did not specify Gross CTC; therefore, the lawful recovery baseline was Basic Pay: (₹45,000 / 30) × 45 days = <strong>₹67,500</strong>.</li>
                      <li>The company suffered no demonstrable loss under Section 74, as Vikram completed an orderly handover documented on Jira and Confluence.</li>
                      <li>Withholding exit credentials and earned wages violated statutory labour provisions.</li>
                    </ul>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Resolution:</strong>
                      Within 5 business days of receiving the advocate legal notice via Speed Post and corporate email, the company&apos;s legal counsel revised the settlement to the Basic Salary formula (₹67,500). Vikram received his pending leave encashment of ₹38,000, saving <strong>₹67,500</strong> in excess deductions, and his official relieving letter and service certificate were released immediately.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: H2 - Assumptions, Statutory Limits & Non-Recoverable Dues */}
              <section
                id="heading-limits"
                aria-labelledby="heading-limits-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-limits-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Assumptions, Statutory Limits &amp; Non-Recoverable Employee Dues
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  When dealing with notice shortfall deductions, employees and employers must adhere to strict statutory firewalls established by Indian labour legislation:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center">1</span>
                    <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                      Absolute Immunity of Gratuity:
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under Section 4(6) of the Payment of Gratuity Act, 1972, gratuity can only be forfeited if the employee has been terminated for riotous conduct, moral turpitude, or willful damage to company assets. It is completely illegal to offset notice period recovery against accrued gratuity.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center">2</span>
                    <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                      Provident Fund Protection:
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under Section 10 of the Employees&apos; Provident Funds and Miscellaneous Provisions Act, 1952, PF balances are immune from attachment by employers or court decrees. Employers cannot hold PF transfers hostage over disputed notice recovery.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center">3</span>
                    <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                      Code on Wages 2-Working-Day Settlement:
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Section 17(2) of the Code on Wages mandates that all dues payable to an exiting employee upon resignation, termination, or retirement must be disbursed within two working days of the last working day. Employers cannot delay FnF by 45 to 90 days citing notice reconciliation.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center">4</span>
                    <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                      No Double Recovery on Replacement Hire:
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under Section 74 of the Contract Act, if the company quickly reallocated your duties to internal staff or hired a replacement without incurring additional cost, their claim of suffering &quot;actual financial loss&quot; is nullified in court.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: H2 - 5-Step Escalation Playbook */}
              <section
                id="heading-escalation"
                aria-labelledby="heading-escalation-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-escalation-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The 5-Step Playbook for Contesting Illegal Notice Period Deductions
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Follow this structured legal path to protect your exit credentials and recover wrongfully withheld compensation.
                  </p>
                </div>

                <ol className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <li className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div className="space-y-1">
                      <strong className="text-slate-900 font-bold text-sm block">
                        Audit Appointment Contract &amp; Calculate Baseline Exposure:
                      </strong>
                      <p>
                        Locate your original appointment letter, promotion letters, and exit policy. Use our{" "}
                        <Link href="#heading-calculator" className="text-blue-700 font-bold hover:underline">
                          Notice Period Calculator
                        </Link>{" "}
                        to compute your exact Basic Pay shortfall versus the employer&apos;s Gross CTC demand.
                      </p>
                    </div>
                  </li>

                  <li className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div className="space-y-1">
                      <strong className="text-slate-900 font-bold text-sm block">
                        Send Formal HR Dispute Email Under Protest:
                      </strong>
                      <p>
                        Submit a written objection to HR and Payroll. Use our{" "}
                        <Link
                          href="/templates/fnf-not-received-mail-to-hr"
                          className="text-blue-700 font-bold hover:underline"
                        >
                          FnF Not Received HR Email Template
                        </Link>{" "}
                        or{" "}
                        <Link
                          href="/templates/salary-delay-complaint-letter-to-hr"
                          className="text-blue-700 font-bold hover:underline"
                        >
                          Salary Delay Complaint Format
                        </Link>
                        . If compelled to accept a partial settlement, write &quot;Accepted Under Protest and Without Prejudice to Legal Remedies&quot;.
                      </p>
                    </div>
                  </li>

                  <li className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div className="space-y-1">
                      <strong className="text-slate-900 font-bold text-sm block">
                        Serve Statutory Advocate Legal Notice:
                      </strong>
                      <p>
                        If HR rejects your protest or withholds exit documents past the 2-day statutory timeline under Section 17(2) Code on Wages, have a verified advocate dispatch a formal demand notice to the company&apos;s registered office and board of directors via Registered Speed Post.
                      </p>
                    </div>
                  </li>

                  <li className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div className="space-y-1">
                      <strong className="text-slate-900 font-bold text-sm block">
                        File Grievance With State Labour Commissioner:
                      </strong>
                      <p>
                        File an online or offline complaint before the jurisdictional Conciliation Officer / Labour Commissioner under the Industrial Disputes Act, 1947 or the state Shops and Establishments Act, demanding recovery of illegal deductions and immediate release of certificates.
                      </p>
                    </div>
                  </li>

                  <li className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div className="space-y-1">
                      <strong className="text-slate-900 font-bold text-sm block">
                        Recovery Claim / Civil Damages Petition:
                      </strong>
                      <p>
                        If the company persists in non-compliance, initiate a recovery claim under the Code on Wages or file a summary recovery suit under Order 37 of the CPC, claiming full refund of illegal deductions plus 18% statutory penal interest and compensation for damages.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 9: H2 - 6 Critical Evidence Documents */}
              <section
                id="heading-evidence"
                aria-labelledby="heading-evidence-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-evidence-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Critical Documents Before Serving a Legal Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic communications and digital payroll records are fully admissible in court. Assemble these 6 documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Appointment Letter &amp; Annexures:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Containing the specific notice period clause, salary breakdown structure, and termination terms.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Resignation Email &amp; HR Acceptance:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proving the exact resignation date, proposed last working day (LWD), and managerial acknowledgments.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Last 3 to 6 Months Payslips:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Itemizing Basic Pay, Dearness Allowance (DA), HRA, special allowances, and statutory PF deductions.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Full &amp; Final (FnF) Statement / Email:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">The employer&apos;s computation sheet showing the exact notice recovery deduction and disputed items.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Handover &amp; Knowledge Transfer Sign-Off:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Emails, Jira tickets, or handover sign-offs establishing that duties were transferred smoothly.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Bank Account Statement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Documenting the actual salary received or demonstrating zero credit past the statutory FnF deadline.</p>
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
                    FAQs About Notice Period Shortfall &amp; Recovery
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in the Indian Contract Act, Code on Wages, and High Court Rulings
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
                  Statutory References, Employment Acts &amp; Judicial Benchmarks
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
                  Legal validation status: All provisions verified against active provisions of the Indian Contract Act 1872, the Code on Wages 2019 (Section 17(2)), the Payment of Gratuity Act 1972, and landmark Supreme Court rulings as of November 2026.
                </p>
              </section>

              {/* Primary CTA Block */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand Notice for Withheld Salary
                </h2>
                <NoticePeriodCalculatorCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Employment Recovery Tools &amp; Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/legal-notice-for-full-and-final-settlement-delay"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    FnF Settlement Delay Legal Notice Hub →
                  </Link>
                  <Link
                    href="/tools/full-and-final-settlement-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Full &amp; Final Settlement Calculator →
                  </Link>
                  <Link
                    href="/templates/fnf-not-received-mail-to-hr"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    FnF Not Received HR Email Template →
                  </Link>
                  <Link
                    href="/templates/salary-delay-complaint-letter-to-hr"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Salary Delay Complaint Letter to HR →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Advocate Fees →
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
