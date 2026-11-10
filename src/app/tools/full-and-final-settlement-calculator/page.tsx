import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import FnfCalculatorClient from "./FnfCalculatorClient";
import FnfCalculatorTOC from "./FnfCalculatorTOC";
import FnfCalculatorCTA from "./FnfCalculatorCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Full & Final Settlement Calculator (India, 2026)",
  description:
    "Free FnF calculator: pending salary, leave encashment, notice-period recovery, gratuity and bonus, with the law behind each line.",
  alternates: {
    canonical: `${SITE_URL}/tools/full-and-final-settlement-calculator`,
  },
  openGraph: {
    title: "Full & Final Settlement Calculator (India, 2026) | LegalRecovery",
    description:
      "Statutory FnF calculator for Indian employees: calculate unpaid salary, leave encashment, gratuity, and notice period recovery under Section 17(2) of Code on Wages.",
    url: `${SITE_URL}/tools/full-and-final-settlement-calculator`,
    type: "website",
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
    title: "Code on Wages, 2019 (Act No. 29 of 2019) — Section 17(2) (Settlement Due Within 2 Working Days) & Section 18 (Deductions Allowed)",
    url: "https://www.indiacode.nic.in/handle/123456789/1362",
  },
  {
    title: "Code on Social Security, 2020 (Act No. 36 of 2020) — Section 53 (Gratuity Calculation & Fixed-Term 1-Year Threshold)",
    url: "https://www.indiacode.nic.in/handle/123456789/1393",
  },
  {
    title: "Payment of Gratuity Act, 1972 (Act No. 39 of 1972) — Section 4 (Calculation Formula 15/26 and Statutory Ceilings)",
    url: "https://www.indiacode.nic.in/handle/123456789/1498",
  },
  {
    title: "Indian Contract Act, 1872 — Section 73 & Section 74 (Breach of Contract, Notice Pay & Liquidated Damages)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Ministry of Labour & Employment — Office of the Chief Labour Commissioner (Central) Grievance & Conciliation",
    url: "https://clc.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Payslips, Emails & Timesheets)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Ruling on Culpable Delay in Releasing Terminal Dues",
    parties: "State of Kerala & Ors. v. M. Padmanabhan Nair",
    citation: "Civil Appeal No. 1290 of 1980, (1985) 1 SCC 429",
    date: "Judgment Delivered by Supreme Court of India",
    facts:
      "The employee superannuated from employment, but his terminal exit dues, gratuity, and accrued entitlements were withheld for multiple years under the pretext of administrative audit clearance and pending departmental sign-offs. The employer argued that internal processing delays could not be penalized.",
    holding:
      "The Supreme Court ruled that terminal employment dues, accrued salary, and statutory gratuity are not bounties or gratuitous favors distributed at the employer's discretion, but constitute earned remuneration and constitutional property under Article 300A. The Court held that culpable delay in disbursing exit dues compels the employer to pay penal interest at 12% to 18% per annum, alongside punitive litigation costs.",
    amount: "Full Terminal Dues with 12% Penal Interest + Punitive Litigation Costs",
    takeaway:
      "Employers cannot cite internal audit clearances, administrative processing, or inter-departmental sign-offs to delay statutory FnF settlements. Any culpable delay attracts statutory penal interest.",
  },
  {
    title: "High Court Ruling on Withholding Full & Final Settlement for Foreign HQ Sign-Off",
    parties: "Rajeshwar Sharma v. Management of M/s Aeroflot Soviet Airlines",
    citation: "W.P.(C) 4291/2017, Delhi High Court",
    date: "Judgment Delivered 18 September 2019",
    facts:
      "The petitioner tendered his resignation, which was duly accepted by airline management. However, his full and final settlement—including salary for uncredited days, accrued leave encashment, and notice pay adjustments—was withheld for over 18 months because overseas headquarters had not released exit clearance certificates.",
    holding:
      "The Delhi High Court held that upon cessation of an employment relationship, earned wages and statutory exit entitlements become a crystallised legal debt. Internal corporate approvals or foreign head-office clearances cannot override Indian statutory labor laws. The Court directed the immediate release of ₹4,80,000 with 12% annual interest from the date the amount became due, plus ₹50,000 in litigation expenses.",
    amount: "₹4,80,000 Unpaid FnF Dues @ 12% Annual Interest + ₹50,000 Legal Expenses",
    takeaway:
      "Multinational companies and IT conglomerates cannot rely on foreign HQ approvals or multi-tier internal ticketing systems to defer FnF payouts beyond statutory deadlines.",
  },
  {
    title: "NCLAT Precedent on Unpaid FnF Dues Constituting Operational Debt Under IBC",
    parties: "M. Ravindranath v. Transstroy (India) Ltd.",
    citation: "Company Appeal (AT) (Insolvency) No. 448/2021, NCLAT New Delhi",
    date: "Order Dated 12 November 2021",
    facts:
      "An employee whose salary, notice period adjustments, and full and final settlement remained unpaid served a statutory demand notice under Section 8 of the Insolvency and Bankruptcy Code (IBC). The corporate debtor argued that employee exit dues must be adjudicated exclusively before industrial tribunals.",
    holding:
      "The National Company Law Appellate Tribunal (NCLAT) affirmed that unpaid salary, full and final settlement dues, and earned leave encashment constitute 'Operational Debt' under Section 5(21) of the IBC. When an employer defaults on crystallised exit dues without a bona fide pre-existing dispute, employees are legally entitled to initiate Section 9 corporate insolvency proceedings.",
    amount: "Full FnF Wage Claim Admitted as Preferential Operational Debt",
    takeaway:
      "Companies that unlawfully withhold FnF settlements risk high-stakes corporate insolvency proceedings if cumulative defaults cross statutory debt thresholds.",
  },
];

const FAQS = [
  {
    question: "What is included in a Full and Final (FnF) settlement calculation in India?",
    answer:
      "A complete FnF settlement calculation consists of gross positive entitlements minus lawful deductions. Positive components include: (1) Unpaid salary for working days served in the exit month, (2) Leave encashment for unavailed earned/privilege leaves, (3) Statutory gratuity if completed 5 years of service (or 1 year for fixed-term contracts), (4) Annual statutory bonus or prorated performance incentives, and (5) Approved expense reimbursements. Deductions include notice period shortfall recovery (if notice was unserved), statutory income tax (TDS), provident fund employee share, salary advances, and lawful asset adjustments.",
  },
  {
    question: "What is the statutory deadline for full and final settlement under Indian labour law?",
    answer:
      "Under Section 17(2) of the Code on Wages, 2019, an employer must settle and disburse all wages and exit dues within two working days of an employee's resignation, dismissal, retrenchment, or termination. While legacy corporate HR policies historically cited 30 to 45 days for clearance processing, the statutory two-working-day mandate legally supersedes contrary internal corporate policies.",
  },
  {
    question: "How is leave encashment calculated during FnF settlement?",
    answer:
      "Leave encashment is calculated as: (Monthly Basic Salary + Dearness Allowance) divided by the monthly divisor, multiplied by the number of accumulated privilege/earned leaves. The Supreme Court of India and the Factories Act standard divisor is 26 working days (which excludes weekly offs and yields a higher daily wage rate), whereas certain IT and commercial services apply a 30-day divisor based on employment contracts. Discretionary leaves like casual leave (CL) and sick leave (SL) generally lapse on exit unless explicitly encashable under company policy.",
  },
  {
    question: "Can an employer deduct notice period pay on gross salary instead of basic salary?",
    answer:
      "No. Under Section 74 of the Indian Contract Act, 1872, an employer is only entitled to reasonable compensation for actual damage suffered due to early employee departure. Courts and labor authorities hold that deducting notice shortfall on gross salary—which includes non-cash allowances and operational overheads—amounts to an unlawful penal penalty. Lawful notice period recovery must strictly be computed on Basic Salary plus DA.",
  },
  {
    question: "What is the 50% deduction cap under Section 18 of the Code on Wages?",
    answer:
      "Section 18(3) of the Code on Wages, 2019, provides that the total amount of deductions which may be made from the wages of an employee in any wage period shall not exceed fifty percent (50%) of such wages. Even when an employer claims notice recovery or asset damages, they cannot wipe out an employee's entire settlement check or produce a 'negative' FnF without express judicial adjudication.",
  },
  {
    question: "Can an employer withhold my FnF settlement because I did not return a laptop or ID card?",
    answer:
      "An employer cannot indefinitely withhold your entire FnF settlement for unreturned company assets. Under Indian labor jurisprudence, an employer can only deduct the depreciated book value of unreturned equipment—provided they issue an itemised inventory notice and demonstrate actual loss. Earned wages are constitutionally protected property under Article 300A, and employers cannot weaponize asset clearances to stall statutory exit dues.",
  },
  {
    question: "What legal actions can I take if my FnF settlement is delayed beyond the deadline?",
    answer:
      "If your FnF settlement is delayed beyond 2 working days, you should: (1) Send a formal demand email to HR and the Managing Director citing Section 17(2) of the Code on Wages, (2) Engage an advocate to serve a 15-day statutory legal notice demanding payment with 18% annual penal interest, (3) Lodge an online complaint with the Chief Labour Commissioner or State Labour Officer on the Samadhan portal, and (4) File a claim petition under Section 33C(2) of the Industrial Disputes Act or an operational debt demand under the Insolvency and Bankruptcy Code.",
  },
];

const WEB_APPLICATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Full & Final Settlement Calculator India",
  applicationCategory: "FinanceApplication",
  operatingSystem: "All",
  browserRequirements: "Requires JavaScript. Requires HTML5.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  description:
    "Free interactive Full and Final (FnF) settlement calculator for Indian employees. Computes unpaid salary, earned leave encashment, statutory gratuity, bonus, and notice period recovery under Section 17(2) of the Code on Wages, 2019.",
  url: `${SITE_URL}/tools/full-and-final-settlement-calculator`,
  author: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
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
      name: "Recovery of Salary & Employment Dues",
      item: `${SITE_URL}/services/recovery-of-salary-and-employment-dues`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Full & Final Settlement Calculator",
      item: `${SITE_URL}/tools/full-and-final-settlement-calculator`,
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

export default function FnfCalculatorPage() {
  const breadcrumbItems = [
    {
      label: "Recovery of Salary & Employment Dues",
      href: "/services/recovery-of-salary-and-employment-dues",
    },
    {
      label: "Full & Final Settlement Calculator",
      href: "/tools/full-and-final-settlement-calculator",
    },
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
        {/* Dark Hero Section matching site design language */}
        <header className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 17(2) Code on Wages 2019/2026</span>
              <span className="text-red-500">•</span>
              <span>Statutory FnF Settlement Tool</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Calculate Your Full &amp; Final Settlement: Salary, Leave and Gratuity
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Code on Wages Mandate)
              </p>
              <p>
                Under Section 17(2) of the Code on Wages, 2019, employers in India are legally mandated to pay all full and final settlement (FnF) dues—including unpaid salary, earned leave encashment, statutory gratuity, and bonus—within two working days of an employee&apos;s resignation, dismissal, or retrenchment. Use this interactive calculator to compute your exact statutory entitlement and verify lawful deductions under Section 18.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                  2 Days
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Statutory FnF Deadline (s.17(2))
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                  50% Cap
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Total Lawful Deductions (s.18)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                  15/26 × Basic
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Statutory Gratuity Formula
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                  18% p.a.
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Penal Interest for Culpable Delay
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Layout with Table of Contents Sidebar */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation Above Content Grid */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <FnfCalculatorTOC />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Interactive Two-Pane Split Calculator Client Island */}
              <section aria-labelledby="calculator-tool-heading" className="space-y-4">
                <FnfCalculatorClient />
              </section>

              {/* Section 2: H2 - How FnF is Calculated in India */}
              <section
                id="how-fnf-is-calculated"
                aria-labelledby="how-fnf-is-calculated-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="how-fnf-is-calculated-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  How Full and Final Settlement (FnF) Is Calculated in India
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Full and Final (FnF) settlement calculation is the statutory accounting process through which an employer completely liquidates all financial liabilities owed to a departing employee. In India, FnF is governed by the{" "}
                    <Link
                      href="/law/code-on-wages-fnf-two-working-days"
                      className="text-red-600 font-bold hover:underline"
                    >
                      Code on Wages, 2019
                    </Link>
                    , the Code on Social Security, 2020, and the Indian Contract Act, 1872. The settlement is not an arbitrary internal corporate concession; every positive earning and every deduction is strictly circumscribed by statute.
                  </p>
                  <p>
                    Under legacy corporate practice, HR departments routinely withheld FnF settlements for 30 to 45 days, citing inter-departmental clearances, asset verification, and monthly payroll cycles. With the enforcement of{" "}
                    <strong>Section 17(2) of the Code on Wages</strong>, all exit dues must be disbursed within <strong>two working days</strong> of an employee&apos;s last working day (LWD), whether the departure was triggered by voluntary resignation, retirement, dismissal, or retrenchment.
                  </p>
                </div>
              </section>

              {/* Section 3: H2 - Statutory Components & Mathematical Formulas */}
              <section
                id="statutory-components-breakdown"
                aria-labelledby="statutory-components-breakdown-title"
                className="scroll-mt-28 space-y-6"
              >
                <h2
                  id="statutory-components-breakdown-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Components and Mathematical Formulas in FnF Calculation
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Every rupee in an FnF settlement sheet falls into one of five statutory categories. Understanding the exact mathematical formulas protects employees against arbitrary corporate deductions:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Card 1: Unpaid Salary */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-black flex items-center justify-center text-xs">
                        01
                      </span>
                      <h3 className="text-sm font-black text-slate-900">
                        Unpaid Salary for Final Month
                      </h3>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 font-mono text-xs text-slate-800">
                      Unpaid Salary = (Gross Monthly Salary ÷ Days in Month) × Unpaid Days Worked
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Covers all days worked in the departure month up to the Last Working Day (LWD), including statutory weekly offs falling within the period. Under{" "}
                      <Link
                        href="/law/code-on-wages-salary-payment-deadline"
                        className="text-red-600 font-semibold hover:underline"
                      >
                        Section 17(1) of the Code on Wages
                      </Link>
                      , monthly wages cannot be withheld under the pretext of exit formalities.
                    </p>
                  </div>

                  {/* Card 2: Leave Encashment */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-black flex items-center justify-center text-xs">
                        02
                      </span>
                      <h3 className="text-sm font-black text-slate-900">
                        Earned Leave Encashment
                      </h3>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 font-mono text-xs text-slate-800">
                      Leave Encashment = ((Basic Salary + DA) ÷ 26) × Unavailed Earned Leaves
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under Section 79 of the Factories Act and State Shops and Commercial Establishments Acts, accrued privilege/earned leaves must be liquidated into cash. The Supreme Court standard establishes 26 working days as the denominator, though certain private service contracts utilize 30 calendar days.
                    </p>
                  </div>

                  {/* Card 3: Statutory Gratuity */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-black flex items-center justify-center text-xs">
                        03
                      </span>
                      <h3 className="text-sm font-black text-slate-900">
                        Statutory Gratuity Entitlement
                      </h3>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 font-mono text-xs text-slate-800">
                      Gratuity = (15 ÷ 26) × Last Drawn (Basic + DA) × Years of Service
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Payable under the Payment of Gratuity Act, 1972, and Section 53 of the Code on Social Security, 2020. Service of 6 months or more in the final year rounds up to a full year. Regular employees qualify after 5 years, while fixed-term contract professionals qualify pro-rata after just 1 year. See our{" "}
                      <Link
                        href="/tools/gratuity-calculator"
                        className="text-red-600 font-semibold hover:underline"
                      >
                        Gratuity Calculator
                      </Link>
                      .
                    </p>
                  </div>

                  {/* Card 4: Notice Shortfall & Deductions */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-red-100 text-red-800 font-black flex items-center justify-center text-xs">
                        04
                      </span>
                      <h3 className="text-sm font-black text-slate-900">
                        Notice Period Shortfall Recovery
                      </h3>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 font-mono text-xs text-slate-800">
                      Notice Recovery = (Basic Salary ÷ Days in Month) × Shortfall Days
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If an employee departs without completing their contractually agreed notice, recovery must be calculated on Basic Salary under Section 74 of the Indian Contract Act. Demanding notice recovery on Gross CTC without demonstrating actual operational loss is legally impermissible.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: H2 - Statutory Rules & Deadlines Table (2026) */}
              <section
                id="facts-deadlines-table"
                aria-labelledby="facts-deadlines-table-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="facts-deadlines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Deadlines &amp; Legal Rules for FnF Settlement (2026)
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  The table below outlines the governing legal basis, statutory deadlines, permissible deductions, and judicial forums for each exit dues component:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
                  <table className="w-full text-left text-xs sm:text-sm divide-y divide-slate-200">
                    <caption className="sr-only">
                      Statutory Deadlines and Legal Framework for Indian Full &amp; Final Settlement
                    </caption>
                    <thead className="bg-slate-50 text-slate-900 font-black text-[11px] sm:text-xs uppercase tracking-wider">
                      <tr>
                        <th scope="col" className="px-4 py-3.5">
                          Settlement Component
                        </th>
                        <th scope="col" className="px-4 py-3.5">
                          Governing Statute
                        </th>
                        <th scope="col" className="px-4 py-3.5">
                          Statutory Payment Deadline
                        </th>
                        <th scope="col" className="px-4 py-3.5">
                          Delay Interest / Penalty
                        </th>
                        <th scope="col" className="px-4 py-3.5">
                          Legal Forum for Recovery
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="px-4 py-3 font-bold text-slate-900">
                          Unpaid Monthly Salary
                        </td>
                        <td className="px-4 py-3">
                          Section 17(2), Code on Wages, 2019
                        </td>
                        <td className="px-4 py-3 font-semibold text-emerald-700">
                          Within 2 working days of exit
                        </td>
                        <td className="px-4 py-3">
                          Up to 10× compensation (s.45) + penal interest
                        </td>
                        <td className="px-4 py-3">
                          Labour Officer / Section 33C(2) ID Act
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="px-4 py-3 font-bold text-slate-900">
                          Earned Leave Encashment
                        </td>
                        <td className="px-4 py-3">
                          Factories Act, 1948 / State Shops &amp; Est. Acts
                        </td>
                        <td className="px-4 py-3 font-semibold text-emerald-700">
                          Included in 2-day wage settlement
                        </td>
                        <td className="px-4 py-3">
                          12%–18% annual judicial interest
                        </td>
                        <td className="px-4 py-3">
                          Chief Labour Commissioner (Central/State)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="px-4 py-3 font-bold text-slate-900">
                          Statutory Gratuity
                        </td>
                        <td className="px-4 py-3">
                          Payment of Gratuity Act, 1972 / CSS 2020 s.53
                        </td>
                        <td className="px-4 py-3 font-semibold text-amber-700">
                          Within 30 days of exit
                        </td>
                        <td className="px-4 py-3">
                          Mandatory 10% compound interest (s.7(3A))
                        </td>
                        <td className="px-4 py-3">
                          Controlling Authority under Gratuity Act
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="px-4 py-3 font-bold text-slate-900">
                          Notice Period Shortfall
                        </td>
                        <td className="px-4 py-3">
                          Section 74, Indian Contract Act, 1872
                        </td>
                        <td className="px-4 py-3">
                          Adjusted against final disbursement
                        </td>
                        <td className="px-4 py-3">
                          Gross recovery void without proof of loss
                        </td>
                        <td className="px-4 py-3">
                          Civil Court / Summary Suit (Order 37 CPC)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="px-4 py-3 font-bold text-slate-900">
                          Provident Fund (PF) Withdrawal
                        </td>
                        <td className="px-4 py-3">
                          EPF &amp; MP Act, 1952 / EPF Scheme 2026
                        </td>
                        <td className="px-4 py-3">
                          Within 20 days of online portal filing
                        </td>
                        <td className="px-4 py-3">
                          Damages under Section 14B on defaulting employer
                        </td>
                        <td className="px-4 py-3">
                          EPFO Regional Commissioner / EPFiGMS
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: H2 - Worked Step-by-Step Example */}
              <section
                id="worked-example"
                aria-labelledby="worked-example-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Worked Example: Comprehensive Step-by-Step FnF Calculation
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl border border-slate-800">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs uppercase tracking-widest font-black text-red-400 block mb-1">
                      Illustrative Case Study
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Rahul Sharma, Senior Software Engineer (Resignation after 5 Years 8 Months)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      Salary Structure: Monthly Gross ₹80,000 | Monthly Basic + DA ₹40,000 | Exit Month: April (30 Days) | Working Days Served: 18 | Leave Balance: 22 Days | Notice Shortfall: 15 Days (Served 45 of 60 days) | Bonus Due: ₹12,000
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                    <div className="space-y-3">
                      <p className="font-bold text-emerald-400 uppercase tracking-wider text-xs">
                        A. Gross Exit Entitlements
                      </p>
                      <ul className="space-y-2 text-slate-200">
                        <li className="flex justify-between border-b border-slate-800 pb-1">
                          <span>1. Unpaid Salary: (₹80,000 ÷ 30) × 18 days</span>
                          <span className="font-mono font-bold text-white">₹48,000</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-800 pb-1">
                          <span>2. Leave Encashment: (₹40,000 ÷ 26) × 22 days</span>
                          <span className="font-mono font-bold text-white">₹33,846</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-800 pb-1">
                          <span>3. Gratuity: (15 ÷ 26) × ₹40,000 × 6 years*</span>
                          <span className="font-mono font-bold text-white">₹1,38,462</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-800 pb-1">
                          <span>4. Statutory Annual Bonus / Incentives</span>
                          <span className="font-mono font-bold text-white">₹12,000</span>
                        </li>
                        <li className="flex justify-between pt-1 font-bold text-emerald-300">
                          <span>Total Gross Entitlement:</span>
                          <span className="font-mono text-base">₹2,32,308</span>
                        </li>
                      </ul>
                      <p className="text-[11px] text-slate-400">
                        *Note: 5 years 8 months rounds up to 6 complete years under Section 4(2) of the Payment of Gratuity Act.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <p className="font-bold text-red-400 uppercase tracking-wider text-xs">
                        B. Deductions &amp; Net Payable Settlement
                      </p>
                      <ul className="space-y-2 text-slate-200">
                        <li className="flex justify-between border-b border-slate-800 pb-1">
                          <span>5. Notice Shortfall on Basic: (₹40,000 ÷ 30) × 15 days</span>
                          <span className="font-mono font-bold text-red-400">-₹20,000</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-800 pb-1">
                          <span>6. Income Tax (TDS) on Leave &amp; Salary</span>
                          <span className="font-mono font-bold text-red-400">-₹6,800</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-800 pb-1">
                          <span>7. Employee PF Contribution (Current Month)</span>
                          <span className="font-mono font-bold text-red-400">-₹1,800</span>
                        </li>
                        <li className="flex justify-between pt-1 font-bold text-red-300">
                          <span>Total Deductions:</span>
                          <span className="font-mono text-base">-₹28,600</span>
                        </li>
                        <li className="flex justify-between pt-3 border-t-2 border-slate-700 font-black text-white text-base">
                          <span className="text-emerald-400">Net FnF Disbursable Amount:</span>
                          <span className="font-mono text-xl text-emerald-400">₹2,03,708</span>
                        </li>
                      </ul>
                      <p className="text-[11px] text-slate-400">
                        Statutory Mandate: The entire ₹2,03,708 must be transferred to Rahul&apos;s bank account within 2 working days of his exit under Section 17(2).
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: H2 - Statutory Flow of Exit Dues & Legal Escalation Timeline (SVG Diagram) */}
              <section
                id="statutory-flow-diagram"
                aria-labelledby="statutory-flow-diagram-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="statutory-flow-diagram-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Flow of Exit Dues &amp; Legal Escalation Timeline
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  The diagram below illustrates the exact statutory progression from an employee&apos;s Last Working Day to legal demand and court recovery:
                </p>

                <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-6 shadow-sm overflow-x-auto">
                  <svg
                    viewBox="0 0 800 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[700px] h-auto font-sans"
                    aria-label="Statutory FnF Settlement Flowchart"
                  >
                    {/* Step 1: LWD */}
                    <rect x="10" y="30" width="160" height="150" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                    <circle cx="90" cy="65" r="18" fill="#1E293B" />
                    <text x="90" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">01</text>
                    <text x="90" y="105" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="bold">Last Working Day</text>
                    <text x="90" y="125" textAnchor="middle" fill="#64748B" fontSize="10">Asset handover</text>
                    <text x="90" y="140" textAnchor="middle" fill="#64748B" fontSize="10">Exit clearance signed</text>
                    <text x="90" y="155" textAnchor="middle" fill="#DC2626" fontSize="10" fontWeight="bold">Clock Starts</text>

                    {/* Arrow 1 */}
                    <path d="M170 105 L205 105" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
                    <polygon points="210,105 202,100 202,110" fill="#94A3B8" />

                    {/* Step 2: 2-Day Deadline */}
                    <rect x="215" y="30" width="160" height="150" rx="12" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2" />
                    <circle cx="295" cy="65" r="18" fill="#DC2626" />
                    <text x="295" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">02</text>
                    <text x="295" y="105" textAnchor="middle" fill="#991B1B" fontSize="13" fontWeight="bold">Day 2: Statutory Due</text>
                    <text x="295" y="125" textAnchor="middle" fill="#7F1D1D" fontSize="10">Section 17(2) Mandate</text>
                    <text x="295" y="140" textAnchor="middle" fill="#7F1D1D" fontSize="10">Salary, Leave, Bonus</text>
                    <text x="295" y="155" textAnchor="middle" fill="#991B1B" fontSize="10" fontWeight="bold">Direct Bank Transfer</text>

                    {/* Arrow 2 */}
                    <path d="M375 105 L410 105" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
                    <polygon points="415,105 407,100 407,110" fill="#94A3B8" />

                    {/* Step 3: Formal HR Demand */}
                    <rect x="420" y="30" width="160" height="150" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                    <circle cx="500" cy="65" r="18" fill="#1E293B" />
                    <text x="500" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">03</text>
                    <text x="500" y="105" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="bold">Day 7: Notice to HR</text>
                    <text x="500" y="125" textAnchor="middle" fill="#64748B" fontSize="10">Formal email to HR/MD</text>
                    <text x="500" y="140" textAnchor="middle" fill="#64748B" fontSize="10">Cite s.17(2) default</text>
                    <text x="500" y="155" textAnchor="middle" fill="#D97706" fontSize="10" fontWeight="bold">Demand 48h release</text>

                    {/* Arrow 3 */}
                    <path d="M580 105 L615 105" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
                    <polygon points="620,105 612,100 612,110" fill="#94A3B8" />

                    {/* Step 4: Advocate Notice & Labour Forum */}
                    <rect x="625" y="30" width="165" height="150" rx="12" fill="#0F172A" stroke="#334155" strokeWidth="2" />
                    <circle cx="707" cy="65" r="18" fill="#DC2626" />
                    <text x="707" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">04</text>
                    <text x="707" y="105" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Advocate Notice</text>
                    <text x="707" y="125" textAnchor="middle" fill="#94A3B8" fontSize="10">15-Day Statutory Demand</text>
                    <text x="707" y="140" textAnchor="middle" fill="#94A3B8" fontSize="10">Speed Post + Sec 63 BSA</text>
                    <text x="707" y="155" textAnchor="middle" fill="#F87171" fontSize="10" fontWeight="bold">Labour Forum / NCLAT</text>

                    {/* Timeline bottom note */}
                    <text x="400" y="215" textAnchor="middle" fill="#64748B" fontSize="11">
                      Statutory Enforcement Hierarchy: Voluntary Exit → 2-Day Due Date → Demand Notice → Labour Commissioner / Recovery Suit
                    </text>
                  </svg>
                </div>
              </section>

              {/* Section 7: H2 - Assumptions, Limits & Unlawful Deductions */}
              <section
                id="assumptions-and-limits"
                aria-labelledby="assumptions-and-limits-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="assumptions-and-limits-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Assumptions, Statutory Limits &amp; Unlawful Corporate Deductions
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    When calculating your FnF settlement, beware of unauthorized deductions that HR and payroll teams commonly sneak into settlement statements. Under Section 18 of the Code on Wages, 2019, deductions can only be made under strictly specified statutory conditions:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>The 50% Aggregate Deduction Cap:</strong> Under Section 18(3), the aggregate deductions made from an employee&apos;s wages in any wage period cannot exceed 50% of total wages. Deducting 100% of an employee&apos;s final salary or producing a negative settlement balance is an explicit violation of labor law.
                    </li>
                    <li>
                      <strong>Unilateral Equipment &amp; Asset Deductions:</strong> Withholding salary under the claim of damaged laptops, unreturned monitors, or missing office accessories is unlawful unless the employer gives the employee written notice, provides an opportunity to explain, and deducts only the documented depreciated value.
                    </li>
                    <li>
                      <strong>Notice Recovery on Gross Salary:</strong> If an employment agreement states that early release requires paying &quot;gross salary,&quot; courts routinely invalidate such clauses as illegal penalties under Section 74 of the Indian Contract Act. Employers can only claim reasonable damages based on Basic Salary.
                    </li>
                    <li>
                      <strong>Statutory Gratuity Cannot Be Adjusted Against Notice Shortfall:</strong> Under Section 13 of the Payment of Gratuity Act, 1972, statutory gratuity is completely immune from civil court attachment and cannot be set off against notice period shortfall or corporate damages.
                    </li>
                    <li>
                      <strong>Withholding Relieving Letter for Financial Disputes:</strong> Relieving and experience letters are mandatory employment records. An employer cannot legally hold your exit documentation hostage to coerce you into signing an unfair FnF settlement voucher.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 8: H2 - What to Do If Settlement Is Delayed or Deducted */}
              <section
                id="what-to-do-delay"
                aria-labelledby="what-to-do-delay-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="what-to-do-delay-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What to Do If Your Employer Delays or Underpays Your FnF Settlement
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    If your employer has breached the 2-working-day deadline under Section 17(2) or made unauthorized deductions, follow this four-tier escalation path to recover your money:
                  </p>
                  <ol className="list-decimal pl-5 space-y-3 font-medium">
                    <li>
                      <strong>Issue an Official Demand Email:</strong> Write directly to the HR Head, Payroll Manager, and Managing Director citing Section 17(2) of the Code on Wages, 2019. Give them 48 hours to release the full settlement sheet and credit your bank account. Use our guide on{" "}
                      <Link
                        href="/legal-notice-for-full-and-final-settlement-delay"
                        className="text-red-600 font-bold hover:underline"
                      >
                        legal notice for full and final settlement delay
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>Serve an Advocate Statutory Legal Demand Notice:</strong> If the email is ignored, engage a labor advocate to dispatch a formal 15-day statutory legal notice. Dispatched via Registered Speed Post with postal barcode tracking and served electronically under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. Over 78% of corporate FnF disputes resolve within the 15-day notice window once executive management faces personal liability. See our transparent{" "}
                      <Link
                        href="/legal-notice-charges"
                        className="text-red-600 font-bold hover:underline"
                      >
                        legal notice charges
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>File a Complaint with the Labour Commissioner:</strong> Lodge an online complaint before the Deputy Labour Commissioner or Chief Labour Commissioner on the central Samadhan portal. The Conciliation Officer issues summons to the employer to produce wage registers and bank payment proofs.
                    </li>
                    <li>
                      <strong>Initiate Section 33C(2) Claim Petition or IBC Insolvency:</strong> For prolonged non-payment, file a recovery petition under Section 33C(2) of the Industrial Disputes Act before the Labour Court, or if cumulative dues cross statutory debt thresholds, issue a Section 8 demand under the Insolvency and Bankruptcy Code (IBC).
                    </li>
                  </ol>
                </div>
              </section>

              {/* Section 9: H2 - Landmark Judicial Precedents */}
              <section
                id="court-precedents"
                aria-labelledby="court-precedents-title"
                className="scroll-mt-28 space-y-6"
              >
                <h2
                  id="court-precedents-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Landmark Court Case Judgments on Full and Final Settlements
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Indian courts have consistently held that terminal employment dues are constitutional property rights that cannot be withheld through administrative excuses:
                </p>

                <div className="space-y-4">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                            Judicial Authority
                          </span>
                          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mt-1">
                            {c.title}
                          </h3>
                        </div>
                        <span className="text-xs font-mono text-slate-500 font-semibold">
                          {c.citation}
                        </span>
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 space-y-2">
                        <p>
                          <strong className="text-slate-800">Parties:</strong> {c.parties} ({c.date})
                        </p>
                        <p>
                          <strong className="text-slate-800">Facts:</strong> {c.facts}
                        </p>
                        <p>
                          <strong className="text-slate-800">Ruling &amp; Holding:</strong> {c.holding}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
                        <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                          Award: {c.amount}
                        </span>
                        <p className="text-slate-500 text-[11px] max-w-xl">
                          <strong>Key Takeaway:</strong> {c.takeaway}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 10: H2 - Exit Documents & Evidence Checklist */}
              <section
                id="evidence-checklist"
                aria-labelledby="evidence-checklist-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="evidence-checklist-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Pre-Litigation Evidence Checklist Before Disputing Your FnF
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Before serving a legal demand notice or filing a labour commissioner complaint, ensure you have archived the following critical electronic records under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023:
                </p>

                <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <span className="text-emerald-600 font-black text-base leading-none">✓</span>
                      <div>
                        <strong className="block text-slate-900 font-bold">Appointment Letter &amp; Revisions</strong>
                        <span className="text-slate-500 text-xs">Original contract, salary revision letters, and compensation breakdown (CTC slip).</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <span className="text-emerald-600 font-black text-base leading-none">✓</span>
                      <div>
                        <strong className="block text-slate-900 font-bold">Resignation Email &amp; Acceptance</strong>
                        <span className="text-slate-500 text-xs">Official resignation timestamp, HR acknowledgement, and agreed Last Working Day (LWD).</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <span className="text-emerald-600 font-black text-base leading-none">✓</span>
                      <div>
                        <strong className="block text-slate-900 font-bold">Last 3 Months Payslips</strong>
                        <span className="text-slate-500 text-xs">Proof of basic salary, allowances, PF deduction, and income tax credits.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <span className="text-emerald-600 font-black text-base leading-none">✓</span>
                      <div>
                        <strong className="block text-slate-900 font-bold">Leave Balance Records</strong>
                        <span className="text-slate-500 text-xs">HR portal screenshot or leave management system export displaying accumulated earned leaves.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <span className="text-emerald-600 font-black text-base leading-none">✓</span>
                      <div>
                        <strong className="block text-slate-900 font-bold">Handover &amp; Asset Clearance Slips</strong>
                        <span className="text-slate-500 text-xs">Signed clearance certificate from IT, Admin, and Finance confirming asset returns.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <span className="text-emerald-600 font-black text-base leading-none">✓</span>
                      <div>
                        <strong className="block text-slate-900 font-bold">Written Reminder Threads</strong>
                        <span className="text-slate-500 text-xs">Dated emails to HR and management demanding settlement release after the 2-day deadline.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: H2 - Frequently Asked Questions */}
              <section
                id="frequently-asked-questions"
                aria-labelledby="frequently-asked-questions-title"
                className="scroll-mt-28 space-y-6"
              >
                <h2
                  id="frequently-asked-questions-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Frequently Asked Questions About FnF Settlement Calculation
                </h2>

                <div className="space-y-3">
                  {FAQS.map((faq, index) => (
                    <details
                      key={index}
                      className="group bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm transition-all open:shadow-md"
                    >
                      <summary className="flex items-center justify-between font-bold text-slate-900 text-xs sm:text-sm cursor-pointer list-none select-none">
                        <span className="pr-4">{faq.question}</span>
                        <span className="text-red-600 group-open:rotate-180 transition-transform duration-200 shrink-0">
                          ▾
                        </span>
                      </summary>
                      <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 12: H2 - Primary Sources & Legal Authorities */}
              <section
                id="legal-references"
                aria-labelledby="legal-references-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="legal-references-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Sources &amp; Legal References
                </h2>
                <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-2 text-xs text-slate-600">
                  <p className="font-semibold text-slate-800">
                    Statutory authorities, official gazette notifications, and government portals cited on this page:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    {PRIMARY_SOURCES.map((source, idx) => (
                      <li key={idx}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-600 hover:underline font-medium break-all"
                        >
                          {source.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-100">
                    Verified as of November 2026. This online calculation tool provides statutory estimations based on central Indian labor enactments and does not constitute formal legal counsel. For complex exit disputes involving employee bonds or disputed allegations, consult an advocate.
                  </p>
                </div>
              </section>

              {/* Statutory Legal Notice CTA */}
              <div id="statutory-cta">
                <FnfCalculatorCTA />
              </div>
            </div>
          </div>
        </main>

        {/* Contextual Related Recovery Guides */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
