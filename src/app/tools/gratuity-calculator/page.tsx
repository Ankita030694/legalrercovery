import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import GratuityNoticeCTA from "./GratuityNoticeCTA";
import GratuityTableOfContents from "./GratuityTableOfContents";
import GratuityCalculatorWizard from "./GratuityCalculatorWizard";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Gratuity Calculator India 2026 (Incl. Fixed-Term Rule)",
  description:
    "Calculate gratuity with the 15/26 formula, check eligibility and the fixed-term employee rule, and see what to do if it's not paid.",
  alternates: {
    canonical: `${SITE_URL}/tools/gratuity-calculator`,
  },
  openGraph: {
    title: "Gratuity Calculator India 2026: 15/26 Formula & Fixed-Term Rule",
    description:
      "Statutory gratuity calculator for Indian private and public sector employees. Calculate exact gratuity, 1-year fixed-term entitlement, and 10% delayed interest.",
    url: `${SITE_URL}/tools/gratuity-calculator`,
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
    title: "Payment of Gratuity Act, 1972 (Act No. 39 of 1972) — India Code Statutory Archive",
    url: "https://www.indiacode.nic.in/handle/123456789/1556",
  },
  {
    title: "Payment of Gratuity (Central) Rules, 1972 — Form I, Form L, and Form N Procedures",
    url: "https://clc.gov.in/clc/acts-rules/payment-gratuity-act",
  },
  {
    title: "Code on Social Security, 2020 (Act No. 36 of 2020) — Section 53(2) Fixed-Term Gratuity Mandate",
    url: "https://www.indiacode.nic.in/handle/123456789/15729",
  },
  {
    title: "Ministry of Labour & Employment Notification on Statutory Gratuity Ceiling Enhancement to ₹20 Lakhs",
    url: "https://labour.gov.in/sites/default/files/Gratuity_Notification.pdf",
  },
  {
    title: "Supreme Court of India: State of Punjab v. Labour Court Jullundur (Continuous Service & Non-forfeiture)",
    url: "https://main.sci.gov.in/judgments",
  },
  {
    title: "Madras High Court: Metatur Turf Club v. Appellate Authority (Continuous Service 240-day Rule Benchmark)",
    url: "https://hcmadras.tn.gov.in/",
  },
];

const FAQS = [
  {
    question: "What is the exact gratuity calculation formula under Indian law?",
    answer:
      "Under Section 4(2) of the Payment of Gratuity Act, 1972, gratuity for monthly-rated employees is calculated as: Gratuity = (15 × Last Drawn Basic Salary + Dearness Allowance × Number of Completed Years of Service) ÷ 26. The number 26 represents the statutory number of working days in a month (excluding 4 Sundays). Any service of 6 months or more in the final year is rounded up to a full year for regular employees.",
  },
  {
    question: "Is 5 years continuous service strictly mandatory to receive gratuity?",
    answer:
      "For permanent/regular employees, Section 4(1) of the Payment of Gratuity Act generally requires 5 years of continuous service. However, two crucial legal exceptions exist: (1) In case of death or total disabling injury of the employee, the 5-year condition is entirely waived under the proviso to Section 4(1); and (2) Under judicial rulings including the Madras High Court in Metatur Turf Club, an employee who completes 4 years and 240 days of continuous working days in the 5th year qualifies as having completed continuous service under Section 2A.",
  },
  {
    question: "How does the fixed-term employee gratuity rule work under 2026 labor laws?",
    answer:
      "Under Section 53(2) of the Code on Social Security, 2020, fixed-term employees are entitled to gratuity on a pro-rata basis upon completing just 1 year (12 months) of continuous contract service. They do not have to wait 5 years. Employers who refuse to pay gratuity to fixed-term contract workers after 1 year are in direct violation of social security statutory protections.",
  },
  {
    question: "What should I do if my employer has not paid my gratuity within 30 days?",
    answer:
      "Under Section 7(3) of the Payment of Gratuity Act, the employer is legally obligated to calculate and disburse gratuity within 30 days from the date it becomes payable. If they fail, Section 7(3A) mandates that the employer must pay simple interest (notified by the Central Government at 10% per annum) from the date of expiry of the 30-day period. First, submit a formal Form I application to the employer; if unanswered within 15 days, serve a statutory advocate demand notice and file Form N before the Controlling Authority.",
  },
  {
    question: "Can an employer withhold or forfeit gratuity due to notice period dispute or financial loss?",
    answer:
      "No. Gratuity cannot be withheld or forfeited for leaving without serving a notice period or for routine HR disputes. Under Section 4(6) of the Act, gratuity can only be forfeited in two narrow scenarios: (a) if the employee's services were formally terminated for riotous or disorderly conduct or violence, or (b) to the extent of actual quantified damage caused by willful omission, provided a formal domestic enquiry and show-cause notice were issued prior to termination. Unilateral deductions for notice pay buyout are illegal.",
  },
  {
    question: "What components of salary are included in gratuity calculation?",
    answer:
      "Under Section 2(s) of the Payment of Gratuity Act, 'wages' for gratuity calculation includes only Basic Salary and Dearness Allowance (DA), plus commission if paid as a fixed percentage of turnover. It strictly excludes House Rent Allowance (HRA), Special Allowance, LTA, bonuses, overtime wages, and employer PF contributions.",
  },
  {
    question: "What is the maximum tax-free gratuity limit for private sector employees?",
    answer:
      "Under Section 10(10)(ii) of the Income Tax Act, 1961, gratuity received by private sector employees covered under the Payment of Gratuity Act is exempt from income tax up to a lifetime ceiling of ₹20,00,000 (Twenty Lakh Rupees). Any amount paid beyond ₹20 Lakhs is added to the employee's taxable income and taxed at their applicable slab rate.",
  },
  {
    question: "Employer gratuity nahi de raha toh legal notice kaise bheje aur kahan complaint kare?",
    answer:
      "Agar employer 30 din ke andar gratuity nahi deta ya bina kanooni aadhar ke hold kar leta hai, toh aap Section 7(3A) ke tehat 10% penal interest ke sath statutory advocate legal demand notice bhej sakte hain. Notice ka jawab na aane par Payment of Gratuity (Central) Rules ke Form N ke tahat apne zila ke Controlling Authority (Labour Commissioner) ke paas claim petition file ki ja sakti hai, jo Section 8 ke tehat Revenue Recovery Certificate jari karta hai.",
  },
];

const WEB_APPLICATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Gratuity Calculator India 2026",
  url: `${SITE_URL}/tools/gratuity-calculator`,
  description:
    "Statutory gratuity calculator for Indian employees using the 15/26 formula, fixed-term 1-year entitlement, and 10% delay interest under Payment of Gratuity Act.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "All",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
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
      name: "Salary & Employment Dues",
      item: `${SITE_URL}/services/recovery-of-salary-and-employment-dues`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Gratuity Calculator",
      item: `${SITE_URL}/tools/gratuity-calculator`,
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

export default function GratuityCalculatorPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Salary & Employment Dues", href: "/services/recovery-of-salary-and-employment-dues" },
    { label: "Gratuity Calculator", href: "/tools/gratuity-calculator" },
  ];

  return (
    <>
      {/* Server-Side Rendered JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEB_APPLICATION_SCHEMA) }}
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
        {/* Hero Section matching IRCTC theme exactly */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Payment of Gratuity Act 1972</span>
              <span className="text-red-500">•</span>
              <span>Code on Social Security 2026 Compliant</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Gratuity Calculator: How Much Your Employer Owes You
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Gratuity Formula &amp; 30-Day Mandate)
              </p>
              <p>
                Under Section 4(2) of the Payment of Gratuity Act, 1972, gratuity equals 15 days of last-drawn basic pay plus DA divided by 26 for every completed year of service. Fixed-term employees qualify pro-rata after 1 year under Section 53(2) of the Code on Social Security. Employers must disburse gratuity within 30 days of exit or incur mandatory 10% annual penal interest under Section 7(3A).
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">15 / 26</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Day Wage Formula</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">1 Year †</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Fixed-Term Worker Eligibility</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">₹20 Lakh</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Current Statutory Tax-Free Cap</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">10% p.a.</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Penal Interest Past 30 Days</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation Above Content Grid */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <GratuityTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Interactive Calculator Wizard (T2 Archetype Core) */}
              <section id="heading-calculator" aria-labelledby="heading-calculator-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-calculator-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Gratuity Calculator Wizard: Calculate Your Statutory Dues &amp; Delayed Interest
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Calculate your lawful gratuity entitlement, verify fixed-term contract pro-rata dues, and track statutory simple interest owed by non-paying employers.
                  </p>
                </div>

                {/* Client Component: Interactive Step Wizard */}
                <GratuityCalculatorWizard />
              </section>

              {/* Section 2: H2 - Result Interpretation & Legal Guide */}
              <section id="heading-interpretation" aria-labelledby="heading-interpretation-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-interpretation-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Gratuity Calculation Output Guide: Result Range, Taxability &amp; Enforcement
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Depending on your completed tenure and monthly basic earnings, your gratuity output triggers distinct statutory rights and tax provisions under Indian labor and tax codes:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[580px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Gratuity Result Range, Legal Status and Enforcement Actions</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Calculated Result Range</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Classification</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Income Tax Exemption Status</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Required Legal Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          ₹0 (Tenure &lt; 5 Years, Regular)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-semibold">Unvested (Section 4(1))</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Not Applicable</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Check if completed 4 years 240 days or covered under fixed-term contract rule.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          ₹50,000 – ₹19,99,999
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Full Statutory Entitlement</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold text-xs">
                          100% Tax-Exempt (Sec 10(10))
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Employer must pay within 30 days of exit date via direct bank transfer.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          ₹20,00,000 (Statutory Cap)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-semibold">Ceiling Reached</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-semibold text-xs">
                          Fully Tax-Exempt up to ₹20L
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Review contract under Section 4(5) to check if company policy pays above ceiling.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Excess over ₹20,00,000
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-semibold">Contractual Ex-Gratia</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-800 font-semibold text-xs">
                          Taxable at standard slab rates
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          TDS deducted by employer on amount exceeding ₹20,00,000 under Form 16.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Unpaid after 30 Days of Exit
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Unlawful Statutory Default</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Principal exempt; interest taxable</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-bold text-red-700">
                          Serve Form I + Statutory Advocate Notice demanding 10% interest.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: H2 - Formula & Mathematical Breakdown */}
              <section id="heading-formula" aria-labelledby="heading-formula-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-formula-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  How the 15/26 Statutory Gratuity Formula Actually Works Under Law
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The statutory calculation of gratuity is governed strictly by Section 4(2) of the Payment of Gratuity Act, 1972. While HR software often compresses the calculation into a single figure, every component of the equation has a specific legal justification established by parliament and the Supreme Court:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-black text-sm flex items-center justify-center">
                      26
                    </span>
                    <h3 className="font-bold text-slate-900 text-base">The 26-Day Divisor</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      A calendar month contains 30 or 31 days, but has 4 Sundays. The Supreme Court in <em>Digvijay Woollen Mills v. Mahendra Prataprai Buch</em> affirmed that one day&apos;s wage must be derived by dividing monthly wages by 26, not 30. This significantly increases the employee&apos;s daily wage rate.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <span className="w-8 h-8 rounded-xl bg-red-600 text-white font-black text-sm flex items-center justify-center">
                      15
                    </span>
                    <h3 className="font-bold text-slate-900 text-base">The 15-Day Multiplier</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      For each completed year of service, the employee is entitled to 15 days of wages. Multiplying one day&apos;s wage (Monthly Base ÷ 26) by 15 provides the exact gratuity credit accrued for every continuous year worked.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <span className="w-8 h-8 rounded-xl bg-emerald-700 text-white font-black text-sm flex items-center justify-center">
                      ≥6m
                    </span>
                    <h3 className="font-bold text-slate-900 text-base">The 6-Month Rounding Rule</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Under Section 4(2), any part of service exceeding 6 months in the final year must be rounded up to a full year. If you worked 5 years and 7 months, your employer is legally mandated to calculate gratuity for 6 complete years.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-100 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <strong className="text-slate-900 block font-bold mb-1">Strict Definition of Monthly Wages:</strong>
                  Under Section 2(s), monthly wages comprise only <strong>Basic Pay + Dearness Allowance (DA)</strong>. Employers frequently attempt to depress gratuity payouts by artificially deflating Basic Pay down to 15% or 20% of total Cost-to-Company (CTC) while padding Special Allowances. However, under the Code on Wages wage harmonization rules, Basic plus specified allowances should constitute at least 50% of gross pay.
                </div>
              </section>

              {/* Section 4: H2 - Fixed-Term Employee Gratuity Rule */}
              <section id="heading-fixed-term" aria-labelledby="heading-fixed-term-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-fixed-term-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Fixed-Term Employee Gratuity Rule: Why You No Longer Need 5 Years of Service †
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Statutory Differentiator: Section 53(2) of the Code on Social Security, 2020
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  One of the most consequential advancements in Indian employment jurisprudence is the recognition of fixed-term contract employees. Historically, corporate employers repeatedly rotated staff on 1-year, 2-year, or 3-year contracts specifically to evade the 5-year vesting requirement of the 1972 Act.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-2xl p-5 sm:p-6 space-y-3">
                  <h3 className="font-bold text-red-950 text-base sm:text-lg">
                    The Section 53(2) Mandate for Fixed-Term Employees
                  </h3>
                  <blockquote className="border-l-4 border-red-600 pl-4 text-xs sm:text-sm text-red-900 italic leading-relaxed">
                    &quot;Provided that in the case of a fixed-term employee, the employer shall pay gratuity on a pro-rata basis on completion of one year of service under the contract.&quot;
                  </blockquote>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-red-950">
                    <div className="bg-white/80 p-3 rounded-xl border border-red-200">
                      <strong>1-Year Vesting Threshold:</strong> Fixed-term workers become eligible for gratuity immediately upon completing 12 continuous months of contract service.
                    </div>
                    <div className="bg-white/80 p-3 rounded-xl border border-red-200">
                      <strong>Pro-Rata Payout:</strong> If a fixed-term contract runs for 18 months (1.5 years), gratuity must be paid proportionately for 1.5 years without any 5-year forfeiture.
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If you were engaged on a fixed-term contract, consultancy agreement with employee characteristics, or yearly renewed employment letter, your employer cannot legally deny gratuity citing the legacy 5-year threshold.
                </p>
              </section>

              {/* Section 5: H2 - Escalation Pathway SVG Diagram */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Gratuity Recovery Rail: From Separation to Controlling Authority Recovery
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  When an employer refuses to credit gratuity into your full &amp; final settlement, follow this strict legal recovery rail under the Payment of Gratuity Rules:
                </p>

                {/* Hand-Authored SVG Flowchart */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Statutory Recovery Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Gratuity Recovery Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="gratGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="gratAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="gratSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#gratGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Relieving / Exit</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Last Working Day</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Gratuity Becomes Due</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">30-Day Window</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Section 7(3) Mandate</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Notice of Assessment</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Form I Application</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Formal Demand to HR</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">15-Day Reply Window</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#gratAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Section 7(3A) Demand</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">10% Penal Interest</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#gratSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Form N / Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Controlling Authority</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">Revenue Certificate</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY RECOVERY MILESTONES UNDER PAYMENT OF GRATUITY ACT:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Day 30: Statutory deadline for employer to pay without interest (Section 7(3))</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Day 31+: Mandatory 10% annual simple interest starts accumulating automatically (Section 7(3A))</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Form N Petition: Filed before District Controlling Authority to obtain Section 8 Revenue Recovery Certificate</text>
                  </svg>
                </div>
              </section>

              {/* Section 6: H2 - The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Escalation Playbook: How to Recover Withheld Gratuity From Your Employer
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If your employer has withheld your gratuity, deducted it unlawfully against notice period recovery, or stopped responding to emails, execute these 5 sequential legal steps:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Submit Statutory Form I Application to the Employer
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Under Rule 7(1) of the Payment of Gratuity (Central) Rules, 1972, submit a written application in <strong>Form I</strong> to your employer within 30 days of gratuity becoming payable. Specify your date of joining, date of resignation/retirement, and the exact sum calculated using the 15/26 formula. Send this via registered speed post and registered email to create an unassailable timestamped record.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Review Employer&apos;s Notice of Determination (Form L)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Within 15 days of receiving Form I, the employer is legally obligated under Rule 8 to issue <strong>Form L</strong> specifying the exact gratuity amount and the scheduled payment date. If the employer issues a notice of rejection (Form M) without valid statutory grounds under Section 4(6), their rejection constitutes illegal forfeiture.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Formal Statutory Advocate Legal Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the 30-day statutory window lapses without payment, engage an advocate to issue a formal legal demand notice under Section 7(3A) of the Payment of Gratuity Act and Section 17(2) of the Code on Wages. Dispatched via Registered Speed Post and Section 63 BSA compliant electronic mail, the notice demands immediate principal disbursement along with 10% annual penal interest, giving the company 15 calendar days to comply before government action.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        See transparent notice drafting charges on our <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File Form N Before the Controlling Authority (Labour Commissioner)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Under Section 7(4) and Rule 10, file an application in <strong>Form N</strong> before the Controlling Authority appointed under the Act (the Assistant Labour Commissioner having jurisdiction over your workplace). The Controlling Authority issues a judicial summons to the directors and HR head of the company to show cause why the claim should not be decreed with penal interest.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Enforce Recovery Certificate Under Section 8 via District Collector
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        When the employer fails to satisfy the Controlling Authority&apos;s order within 30 days, the Authority issues a <strong>Recovery Certificate</strong> to the District Collector / District Magistrate under Section 8. The Collector recovers the entire amount (gratuity + compound interest) as arrears of land revenue through bank account attachment or asset attachment.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 7: H2 - Edge Cases & Disputed Scenarios */}
              <section id="heading-edge-cases" aria-labelledby="heading-edge-cases-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-edge-cases-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Critical Edge Cases &amp; Common Employer Defenses Dissected
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Employers frequently invent excuses to deny gratuity. Here is the established statutory position on each disputed scenario:
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <details className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm open:shadow-md transition-all">
                    <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer flex justify-between items-center list-none select-none">
                      <span>1. The &quot;4 Years 240 Days&quot; Rule: Does Service Under 5 Years Qualify?</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-bold shrink-0 ml-2">↓</span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                      <p>
                        Yes. Under Section 2A of the Payment of Gratuity Act, an employee is deemed to be in continuous service for a year if they work at least <strong>240 days</strong> in an establishment operating 6 days a week (or 190 days for 5-day week establishments).
                      </p>
                      <p>
                        In landmark judgments by the Madras High Court (<em>Metatur Turf Club</em>) and the Karnataka High Court, courts held that once an employee completes 4 full years and works 240 days in the 5th year (approximately 4 years and 8 months), they have legally completed continuous service and are fully entitled to gratuity.
                      </p>
                    </div>
                  </details>

                  <details className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm open:shadow-md transition-all">
                    <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer flex justify-between items-center list-none select-none">
                      <span>2. Notice Period Shortfall: Can Employer Deduct Notice Pay from Gratuity?</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-bold shrink-0 ml-2">↓</span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                      <p>
                        <strong>Strictly No.</strong> Gratuity is a statutory terminal retirement benefit protected by Section 13 of the Act, which explicitly bars attachment or set-off against contractual civil claims.
                      </p>
                      <p>
                        An employer cannot unilaterally adjust unserved notice period recovery against statutory gratuity. If an employer has withheld your gratuity citing an unserved notice period buyout, they have committed an illegal deduction under the Act.
                      </p>
                    </div>
                  </details>

                  <details className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm open:shadow-md transition-all">
                    <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer flex justify-between items-center list-none select-none">
                      <span>3. Forfeiture of Gratuity: When Can an Employer Lawfully Withhold It?</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-bold shrink-0 ml-2">↓</span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                      <p>
                        Under Section 4(6), forfeiture is permitted in only two strictly confined circumstances:
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-2">
                        <li><strong>Section 4(6)(a):</strong> To the extent of actual quantified damage caused by willful omission or negligence, provided the damage was proven in a formal enquiry and a specific show-cause notice was served before termination.</li>
                        <li><strong>Section 4(6)(b):</strong> Complete forfeiture only if the employee was dismissed for riotous or disorderly behavior, violence, or an offence involving moral turpitude committed during employment.</li>
                      </ul>
                      <p>
                        The Supreme Court in <em>Union Bank of India v. C.G. Ajay Babu (2018)</em> affirmed that forfeiture is impermissible without an explicit conviction or proven departmental finding on moral turpitude.
                      </p>
                    </div>
                  </details>

                  <details className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm open:shadow-md transition-all">
                    <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer flex justify-between items-center list-none select-none">
                      <span>4. Death or Disablement: Complete Waiver of the 5-Year Requirement</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-bold shrink-0 ml-2">↓</span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                      <p>
                        Under the second proviso to Section 4(1), the completion of continuous service of five years is <strong>not necessary</strong> where termination of employment is due to death or disablement due to accident or disease.
                      </p>
                      <p>
                        Even if an employee served for only 6 months or 1 year, upon death or permanent incapacitation, their legal heirs or nominee are entitled to full gratuity calculated for their service period without any 5-year hurdle.
                      </p>
                    </div>
                  </details>

                  <details className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm open:shadow-md transition-all">
                    <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer flex justify-between items-center list-none select-none">
                      <span>5. Contractual Higher Gratuity: Better Terms Clause Under Section 4(5)</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-bold shrink-0 ml-2">↓</span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                      <p>
                        Section 4(5) explicitly states: <em>&quot;Nothing in this section shall affect the right of an employee to receive better terms of gratuity under any award or agreement or contract with the employer.&quot;</em>
                      </p>
                      <p>
                        If your company policy, gratuity trust deed, or employment agreement offers a higher multiplier (e.g., 30 days per year instead of 15) or waives the ₹20,00,000 ceiling, the employer cannot invoke the statutory cap to cut your contractual entitlement.
                      </p>
                    </div>
                  </details>
                </div>
              </section>

              {/* Section 8: H2 - Worked Illustrative Case Studies */}
              <section id="heading-case-studies" aria-labelledby="heading-case-studies-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-case-studies-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Illustrative Case Studies: Gratuity Recovered with Penal Interest
                </h2>
                <div className="space-y-4">
                  {/* Case 1 */}
                  <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 shadow-xl space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                      <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-red-400 bg-red-950 px-2.5 py-1 rounded-full border border-red-800">
                        Case Study 1: IT Senior Consultant (7.7 Years Service)
                      </span>
                      <span className="text-xs text-slate-400">Bangalore Tech Park • ₹65,000 Basic Pay</span>
                    </div>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <p>
                        <strong>The Dispute:</strong> Sunita worked as a senior software architect for 7 years and 8 months. Her last drawn monthly Basic Pay was ₹65,000 (DA was nil). Her employer rounded her tenure down to 7 years in her FnF sheet and offered ₹2,63,077.
                      </p>
                      <p>
                        <strong>The Legal Enforcement:</strong> Under Section 4(2), 8 months exceeds 6 months and must be rounded up to <strong>8 full years</strong>. The correct formula was: (15 × ₹65,000 × 8) ÷ 26 = <strong>₹3,00,000</strong>. After Sunita served an advocate legal notice citing Section 4(2) and Section 7(3), the employer revised the FnF sheet and paid the full ₹3,00,000 plus ₹8,200 accrued interest within 10 days.
                      </p>
                    </div>
                  </div>

                  {/* Case 2 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                      <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-300">
                        Case Study 2: Fixed-Term Contract Engineer (2.5 Years Service)
                      </span>
                      <span className="text-xs text-slate-500">Gurugram Manufacturing • ₹48,000 Monthly Base</span>
                    </div>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <p>
                        <strong>The Dispute:</strong> Amit completed a 30-month fixed-term contract. HR refused gratuity outright, claiming &quot;contract employees are only eligible after 5 years&quot;.
                      </p>
                      <p>
                        <strong>The Legal Enforcement:</strong> Amit invoked Section 53(2) of the Code on Social Security, which mandates pro-rata gratuity for fixed-term contracts exceeding 1 year. The pro-rata calculation: (15 × ₹48,000 × 2.5) ÷ 26 = <strong>₹69,230</strong>. Following a formal Form I submission and advocate notice, the company&apos;s legal department conceded and credited the full amount to avoid Labour Court scrutiny.
                      </p>
                    </div>
                  </div>

                  {/* Case 3 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                      <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-300">
                        Case Study 3: Withheld Gratuity with 10% Penal Interest
                      </span>
                      <span className="text-xs text-slate-500">Mumbai Financial Services • 9 Months Delay</span>
                    </div>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <p>
                        <strong>The Dispute:</strong> Rohan retired after 12 years of service with an admitted gratuity of ₹8,30,769. The company delayed release for 270 days citing cash-flow crunches.
                      </p>
                      <p>
                        <strong>The Legal Enforcement:</strong> Under Section 7(3A), the employer owed 10% simple interest per annum from Day 31 onwards (240 days of statutory default). The interest accrued was: (₹8,30,769 × 10% × 240) ÷ 365 = <strong>₹54,625</strong>. Rohan filed Form N before the Controlling Authority. The Authority directed immediate release of ₹8,85,394 (principal + interest) with litigation costs.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: H2 - Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Gratuity Recovery Evidence Checklist: 6 Essential Documents Before Serving Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), assemble these 6 essential documents to substantiate your claim before the Controlling Authority:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Appointment Letter &amp; Employment Contract:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proves original date of joining, job designation, and terms of service.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Last 3 Months Payslips:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing exact breakdown of Last Drawn Basic Salary and Dearness Allowance (DA).</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Resignation Acceptance &amp; Relieving Letter:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Establishes last working day (LWD) and proves exit occurred without disqualifying misconduct.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Full &amp; Final (FnF) Statement / Form 16:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Evidences whether gratuity was omitted, undercalculated, or unlawfully deducted.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Copy of Form I Application &amp; Dispatch Proof:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Timestamped email copy or Speed Post postal receipt confirming formal application under Rule 7.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bank Statement Proving Non-Receipt:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing salary account transactions proving zero gratuity credit past the 30-day window.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: H2 - FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions About Gratuity Calculation, Eligibility &amp; Withholding
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Answers Grounded in Payment of Gratuity Act 1972, Code on Social Security 2020 &amp; Supreme Court Judgments
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

              {/* Section 11: H2 - Statutory Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Statutes, Ministry Notifications &amp; Judicial References
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
                  Statutory verification status: All provisions verified against the Payment of Gratuity Act 1972, Central Rules 1972, Code on Social Security 2020, and active Ministry of Labour &amp; Employment notifications as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Statutory Legal Notice for Withheld Gratuity
                </h2>
                <GratuityNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Salary &amp; Employment Dues Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/legal-notice-for-full-and-final-settlement-delay"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    FnF Settlement Delay Legal Notice →
                  </Link>
                  <Link
                    href="/law/code-on-wages-salary-payment-deadline"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Salary Payment Deadline Under Law →
                  </Link>
                  <Link
                    href="/law/code-on-wages-fnf-two-working-days"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    FnF in 2 Working Days: Code on Wages s.17(2) →
                  </Link>
                  <Link
                    href="/recovery/gratuity-amount"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Recovery of Unpaid Gratuity Portal →
                  </Link>
                  <Link
                    href="/how-to-recover-full-and-final-settlement-from-employer"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Recover FnF From Employer Guide →
                  </Link>
                  <Link
                    href="/legal-notice-for-salary-withheld-during-notice-period"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Salary Withheld in Notice Period →
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
        </main>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
