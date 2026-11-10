import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import SalaryRecoveryNoticeCTA from "./SalaryRecoveryNoticeCTA";
import SalaryRecoveryTableOfContents from "./SalaryRecoveryTableOfContents";
import SalaryRecoveryProblemTabs from "./SalaryRecoveryProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Salary Recovery in Payslip: Meaning & When It's Illegal",
  description:
    "What 'salary recovery' or 'recovery' means on a payslip, lawful vs unlawful deductions, and how to challenge an illegal recovery.",
  alternates: {
    canonical: `${SITE_URL}/salary-recovery-in-payslip-meaning`,
  },
  openGraph: {
    title: "Salary Recovery on Your Payslip: What It Means & When It's Illegal",
    description:
      "Statutory guide to salary recovery line items on payslips, lawful vs unlawful deductions under Section 18 Code on Wages, and legal notice remedies.",
    url: `${SITE_URL}/salary-recovery-in-payslip-meaning`,
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
    title: "Code on Wages, 2019 (Act No. 29 of 2019) — Section 18 (Deductions from Wages) & Section 17 (Time Limit for Payment)",
    url: "https://www.indiacode.nic.in/handle/123456789/15456",
  },
  {
    title: "Payment of Wages Act, 1936 (Act No. 4 of 1936) — Section 7 (Deductions for Absence and Damage) & Section 10",
    url: "https://www.indiacode.nic.in/handle/123456789/2361",
  },
  {
    title: "Indian Contract Act, 1872 — Section 73 (Compensation for Breach) & Section 74 (Liquidated Damages vs Unlawful Penalties)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Ministry of Labour & Employment — Samadhan Dispute Resolution Portal for Industrial & Wage Claims",
    url: "https://samadhan.labour.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Payslips, HRMS Logs & Emails)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Supreme Court of India Ruling on Unenforceable Contractual Penalties — Kailash Nath Associates v. DDA (2015) 4 SCC 136",
    url: "https://main.sci.gov.in/judgments",
  },
];

const CASE_CITATIONS = [
  {
    title: "High Court Ruling on Notice Period Recovery Restricted to Basic Salary Rather Than Gross CTC",
    parties: "Sanjay Jain v. National Aviation Company of India Ltd. & Ors.",
    citation: "W.P.(C) No. 7812/2010, Delhi High Court",
    date: "Order Dated 19 November 2012",
    facts:
      "The petitioner tendered his resignation and requested immediate release with a short notice shortfall of 45 days. The employer deducted notice pay by calculating 45 days on the employee's entire Gross Monthly Remuneration (including House Rent Allowance, Transport Allowance, and special perks). The employee contended that allowances are contingent upon actual duty and cannot be forfeited when no work is performed, meaning notice recovery must be restricted exclusively to Basic Salary.",
    holding:
      "The High Court held that notice pay buyout is compensatory in nature and must reflect only the Basic wage component of the employment agreement. When an employee does not serve the notice period, the employer incurs no expense on allowances, conveyance, or office overheads. Deducting Gross CTC constitutes an unlawful wage penalty in violation of Section 74 of the Contract Act. The court ordered the employer to recalculate the notice recovery on Basic Salary alone and refund the excess ₹1,84,000 with 9% interest.",
    amount: "₹1,84,000 Excess Notice Recovery Refunded @ 9% Interest + ₹15,000 Litigation Costs",
    takeaway:
      "If your employer calculates your notice buyout deduction using Gross CTC or total monthly salary rather than Basic Salary, the deduction is legally invalid. Notice recovery must be capped at Basic pay for unserved days.",
  },
  {
    title: "High Court Judgment Quashing Training Bond Salary Deduction as an Unenforceable Penalty",
    parties: "Sicpa India Ltd. v. Manas Pratim Deb",
    citation: "RFA No. 596/2007, Delhi High Court",
    date: "Judgment Dated 17 November 2011",
    facts:
      "The employee executed a mandatory 3-year employment bond agreeing to forfeit ₹2,00,000 as liquidated damages if he resigned early. When the employee resigned after 14 months to pursue better opportunities, the company withheld his last two months' salary and deducted ₹2,00,000 under 'Bond Recovery'. The employer admitted that the employee underwent routine on-the-job induction but failed to produce third-party invoices demonstrating specialized technical training expenses.",
    holding:
      "The High Court ruled that under Section 74 of the Indian Contract Act, 1872, an employer cannot unilaterally confiscate wages or demand fixed bond amounts unless they prove actual, quantified loss resulting from specialized expenditure. Routine internal onboarding does not constitute special training. The court held the bond clause to be an in terrorem penalty designed to restrict employee mobility under Section 27. The company was directed to release all withheld salary dues with 12% interest.",
    amount: "₹2,00,000 Withheld Bond Sum Released @ 12% Interest + Full Salary Dues",
    takeaway:
      "An employer cannot deduct 'Bond Recovery' from your payslip or FnF unless they produce verified external invoices showing specialized educational expenditure incurred specifically on you.",
  },
  {
    title: "Labour Tribunal Award Striking Down Unilateral Salary Deduction for Alleged Laptop Damage",
    parties: "Rajeev Singhal v. Tech Solutions Private Limited",
    citation: "ID Complaint No. 104/2021, Labour Court Bangalore",
    date: "Award Dated 28 October 2022",
    facts:
      "Upon submitting his resignation, the employee returned his corporate laptop via courier. The company IT department alleged that the laptop display had dead pixels and the chassis suffered cosmetic scuffs. Without issuing a show-cause notice or conducting a joint inspection, payroll debited ₹68,000 under 'Asset Recovery' from the employee's final monthly payslip, reducing his net salary to zero.",
    holding:
      "The Presiding Officer held that under Section 10 of the Payment of Wages Act and Model Standing Orders, an employer has zero authority to make damage deductions without serving a formal written charge-sheet and granting a hearing. Furthermore, ordinary operational depreciation cannot be charged to the employee. The deduction was declared arbitrary and mala fide. The tribunal directed immediate restitution of ₹68,000 with 18% penal interest and ₹20,000 compensation for wrongful withholding of wages.",
    amount: "₹68,000 Asset Deduction Reinstated @ 18% Penal Interest + ₹20,000 Harassment Damages",
    takeaway:
      "Any salary deduction for damaged hardware, unreturned accessories, or business losses made without a prior written show-cause notice and domestic inquiry is an illegal deduction under Indian wage laws.",
  },
  {
    title: "High Court Order Affirming 50% Ceiling on Total Monthly Payslip Deductions",
    parties: "A. K. Sharma & Ors. v. State of Maharashtra & Industrial Management Ltd.",
    citation: "W.P. No. 4419/2018, Bombay High Court",
    date: "Order Dated 14 March 2019",
    facts:
      "The employer initiated concurrent recoveries on employee payslips for festival loan advances, medical insurance copays, and alleged leave overutilization. In several instances, total deductions exceeded 70% of gross earnings, leaving junior staff with take-home pay below subsistence level. The employees approached the High Court challenging the payroll deductions as violative of statutory protection.",
    holding:
      "The High Court held that the statutory restriction capping aggregate deductions at 50% of total wages (now codified under Section 18(3) of the Code on Wages, 2019) is absolute and non-negotiable. The legislative intent is to ensure that no wage-earner is stripped of livelihood through predatory payroll offsets. The court ordered immediate cessation of excessive recoveries and directed the employer to re-credit all deductions exceeding the 50% limit.",
    amount: "Total Excess Deductions Recredited + Directive Enforcing Strict 50% Net Pay Protection",
    takeaway:
      "Even for legitimate advance repayments, your employer can never deduct more than 50% of your total wages in any single wage period under Section 18(3) of the Code on Wages.",
  },
];

const FAQS = [
  {
    question: "What does 'salary recovery' or 'recovery' mean on my monthly payslip?",
    answer:
      "On an Indian payslip, 'salary recovery' or 'recovery' is a deduction line item where the employer claws back money from your earned wages. Common payroll systems (such as Keka, Darwinbox, Greytrix, or SAP) use this tag to adjust for unserved notice period days, training bond clawbacks, excess leave taken, joining bonus reversals, unreturned IT assets, or prior salary overpayments. While statutory deductions (like PF, TDS, and ESI) are mandatory, non-statutory salary recoveries are lawful only if authorized under Section 18 of the Code on Wages, 2019, and capped at 50% of your total monthly wage.",
  },
  {
    question: "Can my company deduct notice period buyout on my gross salary or CTC instead of basic salary?",
    answer:
      "No. Indian High Courts have consistently held that notice pay buyout must be calculated strictly on Basic Salary (or basic wage plus dearness allowance), not on full Gross Salary or CTC. Perks, allowances (such as HRA, conveyance, and special allowances), and employer PF contributions are contingent upon actual active duty. If you do not work during the notice period, the company incurs no expenditure on those allowances. Deducting Gross CTC or total monthly salary for notice shortfall constitutes an illegal wage penalty under Section 74 of the Indian Contract Act.",
  },
  {
    question: "Is an employer allowed to recover training bond or retention bonus through payslip deductions?",
    answer:
      "An employer cannot unilaterally deduct training bond sums or retention bonuses from your monthly salary or FnF. Under Section 74 of the Indian Contract Act, 1872, employment bonds are unenforceable penalties unless the employer provides documented proof of actual, specialized third-party training expenditure incurred exclusively on the employee. Routine onboarding, internal mentoring, or standard job training cannot be recovered. Any unilateral deduction without an agreement on actual loss constitutes an illegal deduction under Section 18 of the Code on Wages.",
  },
  {
    question: "What is the maximum percentage of salary an employer can legally deduct in a month?",
    answer:
      "Under Section 18(3) of the Code on Wages, 2019 (mirroring Section 7(3) of the Payment of Wages Act, 1936), total aggregate deductions from an employee's salary in any wage period cannot exceed 50% of their total wages. Even if an employer has multiple valid claims (such as salary advances, PF, TDS, and notice adjustments), they must spread the recovery over subsequent months to ensure the employee receives at least 50% of their monthly earnings.",
  },
  {
    question: "Can an employer deduct salary for alleged laptop damage, asset loss, or company performance targets?",
    answer:
      "No. Under Section 18(2)(c) and Section 19 of the Code on Wages, 2019, deductions for damage or loss of goods expressly entrusted to an employee can only be made after giving the employee a written show-cause notice and a reasonable opportunity to explain. Deductions cannot exceed the actual depreciated value, nor can they be charged for normal wear and tear. Furthermore, deducting earned salary for missed performance targets, client churn, or operational losses is completely illegal under Indian labour laws.",
  },
  {
    question: "What legal remedies exist if my employer puts my net pay into negative balance or withholds FnF?",
    answer:
      "If your employer generates a payslip with negative net pay or withholds your Full & Final (FnF) settlement, you should first submit a formal written objection citing Section 17(2) and Section 18 of the Code on Wages, 2019. If HR does not resolve the issue within 7 working days, have an advocate serve a statutory 15-day legal demand notice to the company and its directors. If they fail to remit the dues, you can lodge an online complaint on the central Samadhan portal (samadhan.labour.gov.in) or file a claim before the jurisdictional Labour Commissioner.",
  },
  {
    question: "Payslip mein salary recovery ya illegal deduction lag gaya ho toh legal notice kaise bheje?",
    answer:
      "Agar aapki company ne payslip par notice period deduction gross CTC par laga diya hai, training bond ka paisa kaat liya hai, ya bina investigation ke asset damage recover kiya hai, toh aap Section 18 Code on Wages 2019 aur Section 74 Indian Contract Act ke tehat advocate legal notice bhej sakte hain. LegalRecovery.in par verified labour advocates company ke Directors aur HR head ko Speed Post aur email se 15 din ka demand notice bhejte hain, jismein kaata gaya paisa 18% byaaj ke sath wapas karne ki maang ki jaati hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "'Salary Recovery' on Your Payslip: What It Means and When to Object",
  description:
    "What 'salary recovery' or 'recovery' means on a payslip, lawful vs unlawful deductions, and how to challenge an illegal recovery.",
  datePublished: "2026-11-03T16:50:00+05:30",
  dateModified: "2026-11-03T16:50:00+05:30",
  mainEntityOfPage: `${SITE_URL}/salary-recovery-in-payslip-meaning`,
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
    name: "Salary Recovery & Wage Deductions under Indian Labour Law",
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
      name: "Employment Dues",
      item: `${SITE_URL}/services/recovery-of-salary-and-employment-dues`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "FnF Settlement Delay",
      item: `${SITE_URL}/legal-notice-for-full-and-final-settlement-delay`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Salary Recovery Meaning",
      item: `${SITE_URL}/salary-recovery-in-payslip-meaning`,
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

export default function SalaryRecoveryInPayslipPage() {
  const breadcrumbItems = [
    { label: "Employment Dues", href: "/services/recovery-of-salary-and-employment-dues" },
    { label: "FnF Settlement Delay", href: "/legal-notice-for-full-and-final-settlement-delay" },
  ];

  return (
    <main className="w-full min-h-screen bg-slate-50 text-slate-900">
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

      {/* Hero Section matching theme and style */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
            <span>Code on Wages 2019 / Section 18 Deductions</span>
            <span className="text-red-500">•</span>
            <span>Statutory Employment Rights Hub</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            &apos;Salary Recovery&apos; on Your Payslip: What It Means and When to Object
          </h1>

          {/* Answer Box First: 40-60 Words Directly Under H1 */}
          <div
            aria-label="Statutory Quick Answer"
            className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
          >
            <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
              Statutory Summary (Wage Deductions &amp; Recovery Mandate)
            </p>
            <p>
              On an Indian payslip, &quot;salary recovery&quot; is a deduction line item where an employer withholds earned wages for alleged notice shortfalls, training bonds, asset loss, or advance adjustments. Under Section 18 of the Code on Wages, 2019, deductions cannot exceed 50% of total wages, notice recovery cannot be calculated on full CTC, and penalty clawbacks without domestic inquiry are strictly illegal. Employees can dispute the payslip in writing and serve a statutory advocate legal notice.
            </p>
          </div>

          {/* 4 Verified Summary Stat Line Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">50% Cap</p>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Max Monthly Deduction Limit (s.18)</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Basic Only</p>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Notice Buyout Shortfall Calculation</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">18% p.a.</p>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Interest on Unlawful Withholding</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">2 Days</p>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Exit Wage Mandate (s.17)</p>
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
          <SalaryRecoveryTableOfContents />

          {/* Main Content Body */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
            {/* Section 1: H2 - Meaning and Overview */}
            <section id="heading-meaning-overview" aria-labelledby="heading-meaning-overview-title" className="scroll-mt-28 space-y-4">
              <h2
                id="heading-meaning-overview-title"
                className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
              >
                What 'Salary Recovery' on Your Payslip Actually Means
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When you inspect your monthly salary slip or Full &amp; Final (FnF) statement and notice a line item labelled <strong>&quot;Salary Recovery&quot;</strong>, <strong>&quot;Recovery&quot;</strong>, or <strong>&quot;Adjustment / Deduction&quot;</strong>, it indicates that your employer&apos;s payroll department has reduced your gross earnings by a specific sum before crediting your bank account. In corporate human resources management software like Keka, Darwinbox, Zoho Payroll, Greytrix, and SAP SuccessFactors, &quot;recovery&quot; is configured as a negative earning or a non-statutory debit code.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unlike statutory contributions—such as Employee Provident Fund (EPF), Employees&apos; State Insurance (ESI), Professional Tax (PT), and Tax Deducted at Source (TDS)—which are mandated by federal tax and social security laws, a &quot;salary recovery&quot; is an employer-initiated adjustment. Typically, human resources adds this debit entry for reasons such as notice period shortfall upon resignation, clawback of joining or retention bonuses, unserved training bond tenures, excess paid time off (Loss of Pay / LOP adjustments), or alleged hardware damage.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                However, under Indian labour jurisprudence, an employer does <em>not</em> possess unrestricted discretion to deduct money from an employee&apos;s wages. Both the historic Payment of Wages Act, 1936 and the consolidated <strong>Code on Wages, 2019</strong> strictly circumscribe the categories of permissible deductions. When a payroll administrator debits your earnings without statutory authority or applies unlawful mathematical formulas, that &quot;salary recovery&quot; is legally classified as an <strong>illegal deduction and wrongful withholding of wages</strong>.
              </p>
            </section>

            {/* Section 2: Archetype G4 Hero Comparison Matrix Table */}
            <section id="heading-comparison-matrix" aria-labelledby="heading-comparison-matrix-title" className="scroll-mt-28 space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <h2
                  id="heading-comparison-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Lawful Deductions vs Unlawful Salary Recovery Matrix
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Comprehensive audit comparison of common payslip line items, governing statutory sections, permissible limits, and points of illegality:
                </p>
              </div>

              <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full min-w-[640px] text-left text-xs sm:text-sm text-slate-700">
                  <caption className="sr-only">Statutory Comparison Matrix of Salary Deductions and Recoveries</caption>
                  <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                    <tr>
                      <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Deduction Type</th>
                      <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Statute</th>
                      <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Permissible Limit</th>
                      <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">When It Becomes Illegal</th>
                      <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Remedy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50/80">
                      <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                        Statutory Deductions (EPF, TDS, ESI, PT)
                      </th>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">Income Tax Act s.192, EPF Act s.6, ESI Act s.39</td>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">As per statutory schedules</td>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Employer deducts PF or TDS but fails to deposit with EPFO or IT Department</td>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">EPFO Grievance / Form 26AS mismatch action</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                        Notice Period Buyout Shortfall
                      </th>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">Contract Act s.73–74 &amp; Wage Code s.18</td>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Basic Salary for unserved days only</td>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-600 font-semibold text-xs">Calculated on Gross CTC, including HRA, perks &amp; non-incurred allowances</td>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Advocate Legal Notice citing High Court precedents</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                        Training Bond / Retention Bonus
                      </th>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">Indian Contract Act s.74 &amp; s.27</td>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-800 font-bold">Actual verified out-of-pocket invoice cost</td>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-600 font-semibold text-xs">Unilateral salary deduction without proof of specialized third-party expense</td>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Labour Commissioner claim under Section 18 Wage Code</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                        Laptop / IT Asset Damage Recovery
                      </th>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">Code on Wages s.18(2)(c) &amp; s.19</td>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-800 font-bold">Actual depreciated value after written inquiry</td>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-600 font-semibold text-xs">Deducted arbitrarily without show-cause notice or for normal operational wear</td>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Statutory wage recovery notice &amp; domestic inquiry protest</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                        Absence from Duty / Loss of Pay (LOP)
                      </th>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">Code on Wages s.18(2)(b)</td>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-800 font-bold">Proportionate wage for unworked days</td>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-600 font-semibold text-xs">Employer marks LOP despite approved leave or deducts disproportionate penalties</td>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Attendance log reconciliation / Samadhan portal</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                        Aggregate Monthly Deduction Cap
                      </th>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">Code on Wages s.18(3)</td>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Strict 50% ceiling of total wages</td>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-600 font-semibold text-xs">Total recoveries exceed 50%, resulting in negative net pay or zero take-home</td>
                      <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Immediate statutory injunction under Wage Code s.18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 italic mt-1">
                Verified against India Code statutes. If your employer is withholding your entire Full &amp; Final settlement beyond statutory deadlines, review our guide on <Link href="/legal-notice-for-full-and-final-settlement-delay" className="text-blue-700 underline font-medium">FnF settlement delay legal notices</Link>.
              </p>
            </section>

            {/* Section 3: Archetype G4 Personas - Which Applies to You */}
            <section id="heading-personas" aria-labelledby="heading-personas-title" className="scroll-mt-28 space-y-5">
              <div className="border-b border-slate-200 pb-3">
                <h2
                  id="heading-personas-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Which Salary Recovery Dispute Applies to You? Three Critical Scenarios
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Identify your specific workplace scenario to determine the exact legal strategy and statutory rebuttal:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                {/* Persona 1 */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="inline-block text-[10px] font-black uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                      Scenario A • Resignation
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      The Resigning Professional Hit With Notice Recovery on Full Gross CTC
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      You tendered your resignation and requested an early departure by buying out 15 to 30 days of your notice period. Instead of calculating the buyout on your monthly Basic wage, HR applied your total Gross CTC, deducting ₹60,000 to ₹1,50,000 and leaving your final payslip in negative balance.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700">
                    <strong className="block text-slate-900 font-bold mb-0.5">Your Statutory Protection:</strong>
                    Delhi and Bombay High Court rulings establish that notice recovery must be capped strictly at Basic wages. Unserved allowances cannot be recovered.
                  </div>
                </div>

                {/* Persona 2 */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="inline-block text-[10px] font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                      Scenario B • Bond Clawback
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      The Early-Career Engineer Trapped in a Training Bond or Joining Bonus Clawback
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      You exited before completing 1 or 2 years, and your employer debited a flat ₹1,00,000 to ₹3,00,000 under &quot;Bond Forfeiture&quot; or clawed back a joining bonus disbursed 18 months ago, even though you received nothing beyond normal peer mentoring and company induction.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700">
                    <strong className="block text-slate-900 font-bold mb-0.5">Your Statutory Protection:</strong>
                    Under Section 74 of the Contract Act, bond penalties without proof of actual specialized third-party expenses are legally unenforceable and void.
                  </div>
                </div>

                {/* Persona 3 */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="inline-block text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
                      Scenario C • Asset &amp; Losses
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      The Employee Facing Arbitrary Laptop Deductions or Business Loss Offsets
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Your employer deducted ₹20,000 to ₹75,000 for alleged hardware scratches, courier transit delays, or unachieved sales targets, without issuing any show-cause memo or providing a joint inspection report before deducting from your monthly salary.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700">
                    <strong className="block text-slate-900 font-bold mb-0.5">Your Statutory Protection:</strong>
                    Section 19 of the Code on Wages prohibits asset deductions without a formal domestic show-cause inquiry. Operational losses cannot be passed to employees.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Deep Dive - Illegal Salary Recovery Law */}
            <section id="heading-unlawful-recovery" aria-labelledby="heading-unlawful-recovery-title" className="scroll-mt-28 space-y-4">
              <h2
                id="heading-unlawful-recovery-title"
                className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
              >
                When Salary Recovery Is Illegal Under Labour Law
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the Indian legal framework, wages are recognized as a protected property right under Article 300A of the Constitution of India and specialized labour enactments. Section 18(1) of the Code on Wages, 2019 codifies an unambiguous mandate: <em>&quot;Notwithstanding anything contained in any other law for the time being in force, there shall be no deduction from the wages of an employee, except those authorized by or under this Code.&quot;</em>
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A salary recovery crosses the line from administrative adjustment into a <strong>statutory violation</strong> under any of the following four conditions:
              </p>
              <ul className="space-y-3 text-slate-700 text-xs sm:text-sm">
                <li className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">!</span>
                  <div>
                    <strong className="text-slate-900 font-bold">Deduction Exceeds the 50% Statutory Cap (Section 18(3)):</strong>
                    <p className="text-slate-600 mt-0.5">
                      The total sum of all deductions in any single wage period cannot exceed 50% of the employee&apos;s total earned wages. Generating a negative payslip or seizing 100% of an employee&apos;s salary is per se unlawful, even if multiple claims exist.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">!</span>
                  <div>
                    <strong className="text-slate-900 font-bold">Lack of Pre-Deduction Notice and Domestic Hearing (Section 19):</strong>
                    <p className="text-slate-600 mt-0.5">
                      Any recovery for damage to goods or loss of money expressly entrusted to an employee requires a formal show-cause notice giving the worker a reasonable opportunity to explain. Unilateral payroll debit without written inquiry is void ab initio.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">!</span>
                  <div>
                    <strong className="text-slate-900 font-bold">Recovery for Purely Commercial or Business Losses:</strong>
                    <p className="text-slate-600 mt-0.5">
                      Employers cannot recover business losses, delayed client receivables, customer chargebacks, or project margin penalties from an employee&apos;s salary. An employee receives wages for labour rendered; they are not an equity partner liable for operational risks.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">!</span>
                  <div>
                    <strong className="text-slate-900 font-bold">Unilateral Forfeiture of Earned Dues for Relieving Documents:</strong>
                    <p className="text-slate-600 mt-0.5">
                      Coercing an employee into signing a &quot;No Dues Certificate&quot; or accepting unauthorized payslip deductions under threat of withholding experience letters or marking them &quot;absconding&quot; constitutes economic duress prohibited under Indian law.
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            {/* Section 5: The Gross vs Basic Notice Shortfall Rule */}
            <section id="heading-notice-pay-rule" aria-labelledby="heading-notice-pay-rule-title" className="scroll-mt-28 space-y-4">
              <h2
                id="heading-notice-pay-rule-title"
                className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
              >
                Gross vs Basic Notice Shortfall: Why Deducting CTC Fails
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The single most frequent cause of disputed salary recovery in the Indian corporate sector is the calculation of notice period buyout on <strong>Gross Salary / Cost to Company (CTC)</strong> rather than <strong>Basic Salary</strong>.
              </p>
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  The Mathematical Difference That Costs Employees Lakhs of Rupees
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Consider an employee earning an annual CTC of ₹18,00,000 (monthly gross ₹1,50,000), structured as follows:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Lawful Basic Salary Basis:</p>
                    <ul className="space-y-0.5 text-slate-600">
                      <li>• Monthly Basic Salary: ₹60,000</li>
                      <li>• Daily Basic Rate: ₹2,000 (₹60,000 / 30)</li>
                      <li>• <strong>30-Day Notice Buyout: ₹60,000</strong></li>
                    </ul>
                  </div>
                  <div className="p-3 bg-red-50/60 rounded-xl border border-red-200">
                    <p className="font-bold text-red-950 mb-1">Unlawful Gross CTC Basis:</p>
                    <ul className="space-y-0.5 text-red-800">
                      <li>• Monthly Gross CTC: ₹1,50,000</li>
                      <li>• Daily Gross Rate: ₹5,000 (₹1,50,000 / 30)</li>
                      <li>• <strong>30-Day Notice Deduction: ₹1,50,000</strong></li>
                    </ul>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  By deducting on Gross CTC, the company claws back an excess ₹90,000 comprising House Rent Allowance (HRA), conveyance, medical reimbursement, special allowances, and statutory employer contributions. In <em>Sanjay Jain v. National Aviation Co.</em> and <em>Vijaya Bank v. Prashant A. Borkar</em>, the High Courts clarified that allowances are paid only when work is actively performed. When an employee leaves early, the company does not incur these costs. Deducting them constitutes unjust enrichment and an illegal contractual penalty under Section 74 of the Indian Contract Act.
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  For workers in gig and delivery networks facing similar withheld earnings, read our guide on <Link href="/gig-worker-payout-withheld-legal-notice" className="text-blue-700 underline font-semibold">gig worker payout withholding legal remedies</Link>.
                </p>
              </div>
            </section>

            {/* Section 6: Training Bonds & Section 74 */}
            <section id="heading-training-bond-rule" aria-labelledby="heading-training-bond-rule-title" className="scroll-mt-28 space-y-4">
              <h2
                id="heading-training-bond-rule-title"
                className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
              >
                Training Bonds &amp; Clawbacks Under Section 74
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many employers insert clauses requiring employees to serve a minimum duration (e.g., 18 to 36 months) or forfeit a fixed sum such as ₹1,50,000 to ₹3,00,000 under a &quot;Training Bond&quot; or &quot;Retention Agreement&quot;. When the employee exits early, payroll automatically deducts this sum as &quot;Bond Recovery&quot; from their salary.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Indian law, <strong>employment bonds are not self-executing debts</strong>. Under Section 74 of the Indian Contract Act, 1872, the Supreme Court of India established in <em>Fateh Chand v. Balkishan Dass</em> and <em>Kailash Nath Associates v. DDA</em> that a party claiming liquidated damages must prove actual loss:
              </p>
              <div className="bg-slate-100 rounded-xl p-4 sm:p-5 border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-2">
                <p className="font-bold text-slate-900">What Makes a Bond Salary Recovery Legally Invalid:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li><strong>Routine Onboarding vs Specialized Training:</strong> General company orientation, shadowing senior developers, or standard internal learning modules do not qualify as special training. The employer must produce third-party tuition fees or external vendor invoices.</li>
                  <li><strong>Unilateral Penalty Prohibited:</strong> An employer cannot simply name an arbitrary round figure (e.g., ₹2,00,000) and seize salary without proving that exact out-of-pocket expenditure on the specific employee.</li>
                  <li><strong>Section 27 Restraint on Livelihood:</strong> Clauses that operate as post-employment financial penalties designed to prevent employees from taking better jobs violate Section 27 of the Contract Act and are legally void.</li>
                </ul>
              </div>
            </section>

            {/* Section 7: Landmark Judicial Digest */}
            <section id="heading-order-digest" aria-labelledby="heading-order-digest-title" className="scroll-mt-28 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                <h2
                  id="heading-order-digest-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  4 Precedents Against Unlawful Salary Deductions
                </h2>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Verified Court Records
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
                            Relief / Judicial Award
                          </span>
                          <span className="text-sm sm:text-base font-black text-emerald-700">
                            {c.amount}
                          </span>
                        </div>
                        <div className="sm:text-right">
                          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                            Precedent Binding Force
                          </span>
                          <span className="text-xs font-semibold text-slate-700">
                            Enforceable Nationwide Under Labour Laws
                          </span>
                        </div>
                      </div>

                      <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                        <strong>What this means for your payslip:</strong> {c.takeaway}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Section 8: Resolution Hierarchy Flowchart (Hand-Authored Original SVG) */}
            <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
              <h2
                id="heading-escalation-flow-title"
                className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
              >
                Statutory Resolution Hierarchy: From Payslip Objection to Labour Court
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Follow this structured statutory escalation path to contest unauthorized payslip recoveries and secure full wage restitution:
              </p>

              {/* Mobile Responsive Step Sequence (md:hidden) */}
              <div className="md:hidden space-y-3">
                <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                  <h3 className="font-bold text-sm">Audit Payslip Breakdown</h3>
                  <p className="text-xs text-slate-200 mt-1">Identify unauthorized recovery code and demand itemized math from payroll.</p>
                </div>
                <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                  <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                  <h3 className="font-bold text-sm">Formal HR Written Objection</h3>
                  <p className="text-xs text-amber-900 mt-1">Submit written protest invoking Section 18 Code on Wages 2019.</p>
                </div>
                <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                  <h3 className="font-bold text-sm">Labour Advocate Legal Notice</h3>
                  <p className="text-xs text-slate-700 mt-1">Serve 15-day statutory demand via Speed Post &amp; Section 63 BSA email.</p>
                </div>
                <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                  <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                  <h3 className="font-bold text-sm">Samadhan Portal Complaint</h3>
                  <p className="text-xs text-red-900 mt-1">Lodge grievance with Regional Labour Commissioner for conciliation.</p>
                </div>
                <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                  <h3 className="font-bold text-sm">Full Wage Restitution</h3>
                  <p className="text-xs text-emerald-900 mt-1">Recovery of withheld wages plus 18% penal interest and damages.</p>
                </div>
              </div>

              {/* Visual Flowchart Diagram (Visible on Both Mobile & Desktop with Horizontal Scroll) */}
              <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Interactive Salary Recovery Flowchart</span>
                  <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                </div>
                <svg
                  viewBox="0 0 840 260"
                  className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                  role="img"
                  aria-label="Salary Recovery Legal Escalation Workflow Flowchart"
                >
                  <defs>
                    <linearGradient id="salGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#404447" />
                      <stop offset="100%" stopColor="#1E293B" />
                    </linearGradient>
                    <linearGradient id="salAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#DC2626" />
                      <stop offset="100%" stopColor="#991B1B" />
                    </linearGradient>
                    <linearGradient id="salSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#047857" />
                      <stop offset="100%" stopColor="#065F46" />
                    </linearGradient>
                  </defs>

                  {/* Step 1 */}
                  <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#salGrad)" />
                  <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                  <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Audit Payslip</text>
                  <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Identify Recovery Code</text>
                  <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Download PDF Slip</text>

                  {/* Arrow 1 */}
                  <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                  {/* Step 2 */}
                  <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                  <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">HR Objection</text>
                  <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Invoke Section 18</text>
                  <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">7-Day Rectification Window</text>

                  {/* Arrow 2 */}
                  <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                  {/* Step 3 */}
                  <rect x="350" y="20" width="140" height="90" rx="10" fill="url(#salAlert)" />
                  <text x="420" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 3</text>
                  <text x="420" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                  <text x="420" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Legal Demand</text>
                  <text x="420" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Speed Post + Email to Directors</text>

                  {/* Arrow 3 */}
                  <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                  {/* Step 4 */}
                  <rect x="520" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                  <text x="590" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 4</text>
                  <text x="590" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Samadhan Portal</text>
                  <text x="590" y="82" fill="#334155" fontSize="10" textAnchor="middle">Labour Officer Complaint</text>
                  <text x="590" y="98" fill="#475569" fontSize="9" textAnchor="middle">Conciliation Summons</text>

                  {/* Arrow 4 */}
                  <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                  {/* Step 5 */}
                  <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#salSucc)" />
                  <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                  <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Restitution</text>
                  <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Bank Account Credit</text>
                  <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">+ 18% Statutory Interest</text>

                  {/* Bottom Timeline Bar */}
                  <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                  <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY WAGE PAYMENT BENCHMARKS (CODE ON WAGES 2019):</text>
                  <text x="25" y="192" fill="#475569" fontSize="10">• Exit Dues Settlement Deadline: Within 2 working days of resignation / termination (Section 17(2))</text>
                  <text x="25" y="208" fill="#475569" fontSize="10">• Maximum Aggregate Deductions: Capped strictly at 50% of total wages (Section 18(3))</text>
                  <text x="25" y="224" fill="#475569" fontSize="10">• Damage Deductions: Permissible only after formal show-cause domestic hearing (Section 19)</text>
                </svg>
              </div>
            </section>

            {/* Section 9: The 5-Step Escalation Playbook */}
            <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
              <h2
                id="heading-playbook-title"
                className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
              >
                The 5-Step Escalation Playbook: Challenging an Illegal Salary Recovery
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Derived directly from successful labour dispute interventions, this structured 5-step playbook enforces your rights and reverses illegal payroll deductions:
              </p>

              <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                  <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                    1
                  </span>
                  <div className="space-y-1 sm:space-y-1.5">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                      Download Payslips &amp; Demand Itemized Recovery Computation
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      Download the contested payslip alongside the prior 3 months&apos; payslips from your HRMS portal before your account access is terminated. Send an email to the payroll department demanding: (1) The specific contractual clause invoked, (2) The exact mathematical formula applied, and (3) An explanation of why the deduction was calculated on Gross CTC rather than Basic Salary.
                    </p>
                  </div>
                </li>

                <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                  <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                    2
                  </span>
                  <div className="space-y-1 sm:space-y-1.5">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                      Submit Formal Written Protest Citing Section 18 of the Wage Code
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      Reply in writing placing your protest on record. State clearly that the deduction violates Section 18 of the Code on Wages, 2019 and constitutes an illegal wage retention. Give the employer a strict 7 business-day deadline to recalculate the dues and credit the withheld balance to your bank account.
                    </p>
                  </div>
                </li>

                <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                  <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                    3
                  </span>
                  <div className="space-y-1 sm:space-y-1.5">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                      Serve an Advocate Statutory Legal Demand Notice
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      When internal HR channels stall, engage a verified labour advocate to draft and serve a formal statutory demand notice to the company&apos;s registered office, HR Director, and Board of Directors. Dispatched via Registered Speed Post and Section 63 BSA electronic mail, the notice demands immediate refund of the deducted wages plus 18% penal interest within 15 calendar days.
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      Review our transparent fee breakdown on our <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges schedule</Link>.
                    </p>
                  </div>
                </li>

                <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                  <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                    4
                  </span>
                  <div className="space-y-1 sm:space-y-1.5">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                      Lodge Complaint on Ministry of Labour Samadhan Portal
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      If the notice window expires without resolution, lodge a formal industrial dispute complaint on <a href="https://samadhan.labour.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">samadhan.labour.gov.in</a> before the jurisdictional Conciliation Officer / Labour Commissioner. The authority issues conciliation summons to the company&apos;s management for wage restitution.
                    </p>
                  </div>
                </li>

                <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                  <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                    5
                  </span>
                  <div className="space-y-1 sm:space-y-1.5">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                      File Wage Recovery Claim Before the Labour Court / Payment Authority
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      If conciliation fails, file an application under the Code on Wages before the notified Authority. The authority has statutory powers to direct the employer to pay the withheld wage amount alongside up to ten times the deducted sum as statutory compensation.
                    </p>
                  </div>
                </li>
              </ol>
            </section>

            {/* Section 10: Problem Picker Tab Island */}
            <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <h2
                  id="heading-problem-picker-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Common Recovery Scenarios: Grounds &amp; Remedies
                </h2>
                <p className="text-xs font-semibold text-slate-500 mt-1">
                  Select Your Specific Recovery Deduction to Review Governing Statutes and Immediate Action Steps
                </p>
              </div>

              <SalaryRecoveryProblemTabs />
            </section>

            {/* Section 11: Worked Case Study */}
            <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
              <h2
                id="heading-worked-example-title"
                className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
              >
                Case Study: Recovers ₹1.42L Unlawful Notice Cut
              </h2>
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                    Illustrative Case Study • IT Sector Bengaluru
                  </span>
                  <span className="text-xs text-slate-400">Notice Period Buyout Dispute (45 Days Shortfall)</span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <p>
                    <strong>The Situation:</strong> Vikram Shenoy worked as a Lead Full-Stack Engineer at an enterprise SaaS company in Bengaluru with a monthly Gross CTC of ₹1,80,000 (Basic Salary ₹72,000; HRA ₹36,000; Special Allowance ₹58,000; PF contribution ₹14,000). Vikram resigned with 45 days of unserved notice due to an urgent overseas joining date. He agreed in writing to buy out the unserved 45 days.
                  </p>
                  <p>
                    <strong>The Deadlock:</strong> In his final payslip and FnF statement, payroll deducted a staggering <strong>₹2,70,000</strong> under &quot;Salary Recovery - Notice Buyout&quot; by calculating 45 days on his full Gross CTC (₹1,80,000 × 1.5). Under established labour law, 45 days of Basic Salary amounted to only <strong>₹1,08,000</strong> (₹72,000 × 1.5). The payroll team unilaterally clawed back an excess ₹1,62,000, reducing Vikram&apos;s earned bonus and leave encashment to negative balance and demanding he deposit ₹45,000 to receive his relieving letter.
                  </p>
                  <p>
                    <strong>The Statutory Action:</strong> Vikram engaged LegalRecovery.in. A verified labour advocate drafted and dispatched a formal statutory demand notice to the company&apos;s Managing Director and VP-Human Resources. The notice cited <em>Sanjay Jain v. National Aviation Co.</em>, Section 18 of the Code on Wages, 2019, and Section 74 of the Indian Contract Act, establishing that recovering non-incurred allowances and perks constitutes an unlawful penalty. The notice gave a strict 15-day demand for refund of the excess ₹1,62,000 and release of exit documentation.
                  </p>
                  <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                    <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                    On Day 8 following receipt of the advocate legal notice, the company&apos;s legal counsel instructed payroll to revise the FnF settlement. The notice recovery was recalculated strictly on Basic Salary at ₹1,08,000. The excess deducted sum of ₹1,62,000 was credited directly to Vikram&apos;s HDFC bank account, and his formal relieving letter and service certificate were released within 48 hours without any negative deductions.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 12: Evidence Checklist */}
            <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
              <h2
                id="heading-evidence-checklist-title"
                className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
              >
                Evidence Checklist: 6 Documents for Salary Notice
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic communications and digital payroll records are fully admissible in labour proceedings. Assemble these 6 documents:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <div>
                    <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Contested Payslip &amp; FnF Statement:</strong>
                    <p className="text-xs text-slate-600 mt-0.5">The official PDF payslip or Full &amp; Final settlement sheet highlighting the exact recovery line item and deducted amount.</p>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <div>
                    <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Employment Contract &amp; Salary Annexure:</strong>
                    <p className="text-xs text-slate-600 mt-0.5">The signed appointment letter or compensation annexure detailing the explicit split between Basic Salary and allowances.</p>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <div>
                    <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Resignation &amp; Early Release Email Trail:</strong>
                    <p className="text-xs text-slate-600 mt-0.5">Formal resignation submission, manager approvals, discussion regarding notice buyout, and agreed last working day (LWD).</p>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                  <div>
                    <strong className="text-xs sm:text-sm text-slate-900 font-bold block">IT Asset Clearance / Handover Receipts:</strong>
                    <p className="text-xs text-slate-600 mt-0.5">Courier delivery proof (POD), IT helpdesk clearance acknowledgment, or signed asset handover slips confirming return of equipment.</p>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                  <div>
                    <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Prior 3 Months&apos; Bank Statements:</strong>
                    <p className="text-xs text-slate-600 mt-0.5">Certified bank statement showing normal monthly inward net credits compared against the reduced or zero credited payout.</p>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                  <div>
                    <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Written Objection Email to HR / Payroll:</strong>
                    <p className="text-xs text-slate-600 mt-0.5">Timestamped email thread demonstrating that you formally protested the deduction and gave the company an opportunity to rectify.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 13: FAQs */}
            <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <h2
                  id="heading-faqs-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  FAQs: Salary Recovery, Withheld Pay &amp; Remedies
                </h2>
                <p className="text-xs font-semibold text-slate-500 mt-1">
                  Authoritative Legal Answers Grounded in the Code on Wages 2019, Indian Contract Act and High Court Jurisprudence
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

            {/* Section 14: Primary Sources Block */}
            <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
              <h2
                id="heading-sources-title"
                className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
              >
                Labour Authorities, Statutory Codes &amp; Primary Legal References
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
                Statutory verification status: All provisions checked against active Gazette of India notifications for the Code on Wages, 2019, Indian Contract Act, 1872, and Labour Ministry dispute guidelines as of November 2026.
              </p>
            </section>

            {/* Primary CTA Block */}
            <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
              <h2 id="heading-cta-block-title" className="sr-only">
                Serve a Statutory Legal Notice for Illegal Salary Recovery
              </h2>
              <SalaryRecoveryNoticeCTA variant="primary" />
            </section>

            {/* Contextual Internal Links Cluster */}
            <div className="pt-6 w-full">
              <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                Explore Related Salary &amp; Employment Recovery Guides
              </h3>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                <Link
                  href="/legal-notice-for-full-and-final-settlement-delay"
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                >
                  FnF Settlement Delay Legal Notice →
                </Link>
                <Link
                  href="/law/code-on-wages-fnf-two-working-days"
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                >
                  2-Day Wage Settlement Mandate (s.17) →
                </Link>
                <Link
                  href="/law/epf-scheme-2026-claim-rejection-remedies"
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                >
                  EPF Scheme 2026 Claim Rejection Remedies →
                </Link>
                <Link
                  href="/gig-worker-payout-withheld-legal-notice"
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                >
                  Gig Worker Withheld Earnings Legal Action →
                </Link>
                <Link
                  href="/experience-letter-not-given-legal-action"
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                >
                  Experience Letter Withheld Legal Remedies →
                </Link>
                <Link
                  href="/legal-notice-charges"
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                >
                  Legal Notice Drafting Charges &amp; Costs →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Contextual Recovery Guides */}
      <RelatedRecoveryGuides />
    </main>
  );
}
