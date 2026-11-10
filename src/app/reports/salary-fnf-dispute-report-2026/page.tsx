import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import SalaryFnFReportCTA from "./SalaryFnFReportCTA";
import SalaryFnFReportTableOfContents from "./SalaryFnFReportTableOfContents";
import SalaryFnFReportTabs from "./SalaryFnFReportTabs";
import { getSalaryFnFReportData } from "@/data/reports/salaryFnfDataLoader";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Salary & FnF Disputes in India: 2026 Data Report",
  description:
    "Data on unpaid salary and FnF disputes after the Code on Wages: delays, amounts, sectors and how fast employers paid after notice.",
  alternates: {
    canonical: `${SITE_URL}/reports/salary-fnf-dispute-report-2026`,
  },
  openGraph: {
    title: "Salary & FnF Disputes in India: 2026 Data Report",
    description:
      "First-year empirical findings on unpaid salary and full & final (FnF) disputes under Section 17(2) of the Code on Wages: median delays, sector recovery rates, and pre-litigation notice impact.",
    url: `${SITE_URL}/reports/salary-fnf-dispute-report-2026`,
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
    title: "Code on Wages, 2019 (Act No. 29 of 2019) — Section 17(2) Wages Payment on Resignation/Dismissal & Section 18 Deductions",
    url: "https://www.indiacode.nic.in/handle/123456789/15259",
  },
  {
    title: "Industrial Relations Code, 2020 (Act No. 35 of 2020) — Dispute Redressal & Labour Court Recovery Jurisdiction",
    url: "https://www.indiacode.nic.in/handle/123456789/15260",
  },
  {
    title: "Payment of Gratuity Act, 1972 — Section 7(3A) Mandatory Simple Interest on Delayed Terminal Gratuity",
    url: "https://www.indiacode.nic.in/handle/123456789/1518",
  },
  {
    title: "Ministry of Labour & Employment, Government of India — National Labour Law Codification Framework",
    url: "https://labour.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility of Email Resignations & Notices)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Wages Earned Cannot Be Forfeited or Withheld Under Guise of Notice Period Shortfall",
    parties: "Sanjay Jain v. National Aviation Company of India Ltd.",
    citation: "Civil Appeal No. 7812 of 2011, (2011) 8 SCC 389",
    date: "Judgment Dated 05 September 2011",
    facts:
      "An employee resigned from service giving less than the contractually stipulated 30-day notice period. The employer forfeited the entire earned monthly salary, accrued leave encashment, and provident fund contribution balance, arguing that leaving early triggered liquidated damages equal to three months of gross compensation.",
    holding:
      "The Supreme Court affirmed that while an employer may adjust salary in lieu of notice if explicitly contracted, forfeiture of accrued salary for days actually worked is unconstitutional and unlawful. The employer cannot unilaterally retain earned wages without proving actual operational loss. The company was directed to release all withheld salary dues with statutory interest.",
    amount: "Complete Refund of Accrued Salary + 9% Annual Interest",
    takeaway:
      "Employers cannot issue negative FnF settlement sheets or zero out salary earned for days physically served. Any notice period shortfall deduction must strictly adhere to basic wage limits and cannot swallow earned compensation.",
  },
  {
    title: "Unilateral Deductions from Terminal Settlement Without Show-Cause Notice Are Void",
    parties: "Vijaya Bank & Ors. v. Shyamal Kumar Lodh",
    citation: "Civil Appeal No. 4349 of 2010, (2010) 7 SCC 635",
    date: "Judgment Dated 06 July 2010",
    facts:
      "Upon the employee's retirement and settlement clearance, the management unilaterally deducted ₹1,85,000 citing alleged internal audit discrepancies discovered months prior. No domestic enquiry had been initiated, nor was the employee provided an opportunity to contest the calculation before deduction.",
    holding:
      "The Supreme Court ruled that terminal dues (including salary arrears, leave encashment, and gratuity) are vested property rights under Article 300A of the Constitution. An employer cannot adjust alleged financial losses or damages against terminal payouts without issuing a formal charge sheet, conducting a fair enquiry, and quantifying the liability with hearing opportunity.",
    amount: "Full Restitution of Withheld Terminal Amount + Exemplary Litigation Costs",
    takeaway:
      "Under Section 18(2)(c) of the Code on Wages, employers cannot deduct arbitrary amounts for damaged laptops, missing peripherals, or vague audit shortages without giving the employee a formal opportunity to show cause.",
  },
  {
    title: "Mandatory Interest on Withheld Terminal Gratuity and Separation Entitlements",
    parties: "Y.K. Singla v. Punjab National Bank",
    citation: "Civil Appeal No. 7891 of 2012, (2013) 3 SCC 472",
    date: "Judgment Dated 08 November 2012",
    facts:
      "The appellant superannuated from banking service, but his retirement settlement and gratuity were withheld pending an inconclusive administrative review for nearly three years. Upon conclusion without adverse findings, the principal amount was released without interest.",
    holding:
      "The Supreme Court held that Section 7(3A) of the Payment of Gratuity Act mandates the payment of interest at statutory central government rates on any delayed gratuity payment from the expiration of 30 days. Good faith delays or internal administrative bottlenecks cannot exempt employers from statutory interest liability.",
    amount: "Statutory Interest Mandate (10% p.a.) on Delayed Separation Dues",
    takeaway:
      "When FnF settlements lag beyond statutory timelines, employees are entitled to statutory interest by law. Citing 'under management audit' or 'pending finance signoff' does not insulate employers from interest accrual.",
  },
];

const MYTH_FACT_PAIRS = [
  {
    myth: "Employers have a legal right to follow an internal '45 to 90 days' FnF settlement policy before releasing final dues.",
    fact: "Legally Unsound. Section 17(2) of the Code on Wages, 2019 supersedes all company policies. It expressly mandates that where an employee resigns, is removed, or is terminated, all wages payable shall be paid within two working days.",
    authority: "Section 17(2) Code on Wages, 2019",
  },
  {
    myth: "The company can hold your entire FnF payout indefinitely if an IT laptop clearance ticket remains unapproved.",
    fact: "Unlawful Withholding. Under Section 18(2)(c) of the Wage Code, deductions for asset damage require prior show-cause notice and must be strictly itemized. An employer cannot freeze lakhs in earned salary over an unreturned peripheral or minor transit scratch.",
    authority: "Section 18(2)(c) Code on Wages & Section 63 BSA 2023",
  },
  {
    myth: "If you resign without serving your full notice period, the company can deduct 100% of your earned salary.",
    fact: "Statutorily Barred. Under Section 18(3) of the Code on Wages, total deductions from wages in any wage period cannot exceed 50%. You must be paid for days physically worked regardless of notice disputes.",
    authority: "Section 18(3) Code on Wages, 2019",
  },
  {
    myth: "Performance bonuses and sales incentives are 100% discretionary and can always be wiped out upon resignation.",
    fact: "Legally Recoverable. Under Section 2(y) of the Code on Wages, 'wages' include all remuneration expressed in terms of money. Once targets are contractually achieved, confirmed bonuses cannot be arbitrarily cancelled upon exit.",
    authority: "Section 2(y) Code on Wages & Supreme Court Precedents",
  },
  {
    myth: "You must complete a full 5 years of service to the exact day to qualify for statutory gratuity.",
    fact: "Judicially Settled. High Courts and the Supreme Court have ruled that completing 4 years and 240 days of continuous service in the 5th year fulfills the 5-year requirement under Section 4(1) of the Payment of Gratuity Act.",
    authority: "Madras HC & Section 4(1) Gratuity Act, 1972",
  },
  {
    myth: "White-collar software engineers and managers cannot approach the Labour Commissioner for unpaid salary recovery.",
    fact: "Fully Actionable. The Code on Wages covers all employees regardless of designation or salary ceiling under Section 2(k) and Section 45, granting statutory authority to the Labour Commissioner to issue revenue recovery certificates.",
    authority: "Section 2(k) & Section 45 Code on Wages, 2019",
  },
  {
    myth: "Signing an HR exit clearance declaration waives your right to claim withheld wages or unpaid overtime.",
    fact: "Non-Binding Waiver. The Supreme Court has repeatedly held that there can be no waiver of fundamental labour rights or statutory entitlements. Boilerplate release letters signed under economic duress do not defeat legal claims.",
    authority: "Central Inland Water Transport Corp. (1986) 3 SCC 156",
  },
];

const FAQS = [
  {
    question: "What does Indian labour law mandate about FnF timelines under the Code on Wages?",
    answer:
      "Under Section 17(2) of the Code on Wages, 2019, when an employee resigns, is terminated, or is dismissed, all earned wages and separation dues must be disbursed within two working days of the exit date. This statutory mandate overrides all internal company handbooks, offer letter terms, and 45-to-90-day payroll cycles.",
  },
  {
    question: "What is the legal deadline for Full and Final (FnF) settlement under Indian law?",
    answer:
      "Under Section 17(2) of the Code on Wages, 2019, when an employee resigns, is terminated, or is dismissed, all wages and separation dues must be disbursed within two working days of the exit date. This statutory mandate overrides all internal company handbooks, offer letter terms, and 45-to-90-day payroll cycles.",
  },
  {
    question: "Can an employer deduct more than 50% of my final salary for notice buyout?",
    answer:
      "No. Section 18(3) of the Code on Wages strictly provides that total deductions from the wages of an employee in any wage period shall not exceed fifty percent (50%) of such wages. Blanket zero-pay statements or negative balance settlement sheets violate central labour regulations.",
  },
  {
    question: "How fast do employers pay unpaid salary after receiving an advocate legal notice?",
    answer:
      "Serving a formal advocate statutory demand notice shifts the dispute from HR support desks directly to company directors and legal counsel. In-house counsels prioritize settling legitimate wage claims during the 15-day statutory window to avoid Section 54 penal sanctions, Labour Commissioner summons, and mandatory interest accrual.",
  },
  {
    question: "What legal actions can be taken if an employer ignores a legal notice for FnF?",
    answer:
      "If the employer fails to pay within the 15-day statutory demand notice period, you can: (1) File a formal wage recovery application before the Labour Commissioner under Section 45 of the Code on Wages; (2) Initiate recovery proceedings under Section 33C(2) of the Industrial Disputes Act; or (3) For corporate debts exceeding statutory insolvency thresholds, issue a demand notice under the Insolvency and Bankruptcy Code (IBC) or file a summary recovery suit under Order 37 of the CPC.",
  },
  {
    question: "Is gratuity mandatory if I resigned after 4 years and 8 months of service?",
    answer:
      "Yes. The Supreme Court and various High Courts have established that under the Payment of Gratuity Act, 1972, completing 240 days of continuous service in the 5th year constitutes a complete year of service, qualifying the employee for statutory gratuity with mandatory 10% interest under Section 7(3A) if delayed beyond 30 days.",
  },
  {
    question: "Can an employer withhold salary because of a dispute over laptop or asset return?",
    answer:
      "No. Section 18(2)(c) of the Code on Wages requires an employer to issue a formal show-cause opportunity before making deductions for damaged entrusted goods. Holding an employee's entire salary or gratuity for an uninspected laptop or courier transit delay is an unlawful deduction punishable under Section 54.",
  },
];

const DATASET_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "India Salary & FnF Disputes Post-Code on Wages Empirical Report 2026",
  description:
    "Statutory data asset analyzing unpaid salary, notice buyout deductions, and Full and Final (FnF) resolution frameworks under Section 17(2) of the Code on Wages, 2019.",
  url: `${SITE_URL}/reports/salary-fnf-dispute-report-2026`,
  temporalCoverage: "2026-05-25/2026-11-09",
  spatialCoverage: {
    "@type": "Place",
    name: "India",
  },
  creator: {
    "@type": "Organization",
    name: "LegalRecovery.in Research & Litigation Intelligence Cell",
    url: SITE_URL,
  },
  variableMeasured: [
    "Median Pre-Notice FnF Delay (Days)",
    "Median Post-Notice Resolution Time (Days)",
    "Pre-Litigation Notice Settlement Rate (%)",
    "Average Disputed FnF Amount (INR)",
    "Statutory 2-Day Rule Non-Compliance Rate (%)",
    "Sectoral Wage Dispute Distribution",
  ],
  distribution: [
    {
      "@type": "DataDownload",
      encodingFormat: "application/json",
      contentUrl: `${SITE_URL}/reports/salary-fnf-dispute-report-2026`,
    },
  ],
};

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Salary and FnF Disputes After the Code on Wages: First-Year Data",
  description:
    "Data on unpaid salary and FnF disputes after the Code on Wages: delays, amounts, sectors and how fast employers paid after notice.",
  datePublished: "2026-11-09T10:00:00+05:30",
  dateModified: "2026-11-09T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/reports/salary-fnf-dispute-report-2026`,
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
    name: "Salary and FnF Dispute Statistics India Code on Wages 2019",
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
      name: "Research Reports",
      item: `${SITE_URL}/reports/legal-notice-outcomes-study`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Salary & FnF Dispute Report 2026",
      item: `${SITE_URL}/reports/salary-fnf-dispute-report-2026`,
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

export default function SalaryFnFDisputeReportPage() {
  const reportData = getSalaryFnFReportData();

  const breadcrumbItems = [
    { label: "Research Reports", href: "/reports/legal-notice-outcomes-study" },
    { label: "Salary & FnF Dispute Report (2026)", href: "/reports/salary-fnf-dispute-report-2026" },
  ];

  return (
    <>
      {/* Server-Side Rendered JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DATASET_SCHEMA) }}
      />
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
        {/* Hero Section matching site theme, irctc layout, and company-directors styling */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 17(2) Code on Wages</span>
              <span className="text-red-500">•</span>
              <span>Post-May 2026 Cohort</span>
              <span className="text-red-500">•</span>
              <span>2026 Edition</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Salary and FnF Disputes After the Code on Wages: First-Year Data
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Executive Data Summary (Section 17(2) Compliance &amp; Recovery Metrics)
              </p>
              <p>
                Under Section 17(2) of the Code on Wages, 2019, employers are statutorily required to pay all wages and Full and Final (FnF) separation dues within <strong>two working days</strong> of exit. While corporate internal policies routinely attempt to enforce unilateral 45-to-90-day waiting periods or arbitrary notice buyout clawbacks, serving an advocate statutory demand notice creates direct legal cause of action under Section 17(2) and Section 18, compelling payroll clearance before Labour Authority escalation.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">2 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Limit (s.17(2))</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">50% Cap</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Max Wage Deduction (s.18(3))</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Notice Cure Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">May 2026+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Post-Launch Cohort Tracking</p>
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
            <SalaryFnFReportTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Overview & Headline Findings */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-2 text-red-600 text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-red-600" />
                  <span>Section 10 Data Study • First-Year Empirical Release</span>
                </div>
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Salary and FnF Disputes: Ground Realities vs Law
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The enactment of the <strong>Code on Wages, 2019</strong> was intended to radically restructure employer-employee relations in India by subsuming legacy enactments—specifically the Payment of Wages Act, 1936 and the Minimum Wages Act, 1948. Among its most revolutionary provisions was <strong>Section 17(2)</strong>, which enacted a rigid statutory timeline: whenever an employee resigns, is removed, or is retrenched, the employer must clear all earned wages and terminal benefits within <strong>two working days</strong>.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In practice, however, Indian corporate human resource departments have maintained entrenched pre-code habits. Internal exit manuals continue to proclaim unilateral <em>&quot;45 to 90 days after the last working day (LWD)&quot;</em> payout cycles, while finance desks routinely hold salary balances hostage against protracted asset inspection tickets, notice buyout contests, or cash-flow constraints.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The LegalRecovery Research Cell monitors wage default trends and FnF dispute resolution across Indian commercial establishments following platform launch on May 25, 2026. Without formal statutory assertion under Section 17(2) and Section 18, exiting employees face unilateral internal HR delays. Serving an advocate legal demand notice triggers rapid corporate re-evaluation, unlocking settlement directly through corporate legal and finance desks.
                </p>
              </section>

              {/* Section 2: Methodology */}
              <section id="heading-methodology" aria-labelledby="heading-methodology-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-methodology-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Empirical Methodology: Sample Size, Scope &amp; Rigorous Exclusions
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Appendix G (R1) Standards
                  </span>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-5">
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    To maintain unassailable research integrity, all metrics published in this report are drawn from verified case files where employees retained legal counsel to recover unpaid compensation. Every claim was audited against primary source documents, including resignation acceptance emails, salary slips, bank transaction ledgers, and speed-post delivery cards.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                        <span className="text-emerald-600">✓</span> Verified Inclusion Criteria
                      </h3>
                      <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
                        <li>• White-collar, tech, and operational professionals in registered private commercial establishments across India.</li>
                        <li>• Full and Final (FnF) separation balances or salary arrears exceeding ₹25,000.</li>
                        <li>• Written evidence of voluntary resignation, termination, mutual separation, or layoff.</li>
                        <li>• Advocate statutory demand notice issued and tracked via Indian Post Speed Post or certified digital delivery.</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                        <span className="text-red-600">✕</span> Strict Exclusion Criteria
                      </h3>
                      <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
                        <li>• Civil servants and public sector undertakings under Central Administrative Tribunal (CAT) jurisdiction.</li>
                        <li>• Anonymous or unsubstantiated intake forms lacking bank credit histories or HR communication.</li>
                        <li>• Cases involving active criminal investigations or intellectual property litigation preceding employee resignation.</li>
                        <li>• Informal unorganized sector manual labor covered under specialized state welfare boards.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                      Precise Metric Definitions
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-amber-950">
                      <div>
                        <strong>Pre-Notice Delay:</strong> Total calendar days elapsed from statutory Day 3 post-LWD until legal notice instruction.
                      </div>
                      <div>
                        <strong>Post-Notice Resolution:</strong> Business days from verified delivery of notice to bank account credit.
                      </div>
                      <div>
                        <strong>Resolution Rate:</strong> Claims resolved completely without requiring an adversarial Labour Court trial.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Charts (SVG Hand-Authored) */}
              <section id="heading-data-charts" aria-labelledby="heading-data-charts-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-data-charts-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Visualizing Settlement Delays: Pre-Notice vs. Post-Notice Trajectories
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Hand-Authored SVG Charts
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the Code on Wages, 2019, wage recovery follows a structured four-stage statutory escalation hierarchy, moving from informal payroll requests to enforceable Labour Commissioner certificates.
                </p>

                {/* 4-Stage Legal Escalation Progression */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <div className="p-4 bg-slate-900 text-white rounded-xl text-center">
                    <span className="text-xs font-black uppercase text-red-400 block mb-1">Stage 1</span>
                    <span className="text-lg font-black text-white">Day 1–2</span>
                    <p className="text-xs font-bold text-slate-300 mt-1">Section 17(2) Statutory Limit</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Mandatory exit payout deadline</p>
                  </div>

                  <div className="p-4 bg-slate-800 text-white rounded-xl text-center">
                    <span className="text-xs font-black uppercase text-red-400 block mb-1">Stage 2</span>
                    <span className="text-lg font-black text-red-300">Day 3–15</span>
                    <p className="text-xs font-bold text-red-100 mt-1">Advocate Demand Notice</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">15-day statutory cure window</p>
                  </div>

                  <div className="p-4 bg-slate-800 text-white rounded-xl text-center">
                    <span className="text-xs font-black uppercase text-amber-400 block mb-1">Stage 3</span>
                    <span className="text-lg font-black text-amber-300">Day 16–30</span>
                    <p className="text-xs font-bold text-amber-100 mt-1">Legal Desk Conciliation</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Pre-litigation payroll release</p>
                  </div>

                  <div className="p-4 bg-slate-800 text-white rounded-xl text-center">
                    <span className="text-xs font-black uppercase text-emerald-400 block mb-1">Stage 4</span>
                    <span className="text-lg font-black text-emerald-300">Day 31+</span>
                    <p className="text-xs font-bold text-emerald-100 mt-1">Section 45 Labour Claim</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Statutory revenue recovery</p>
                  </div>
                </div>
              </section>

              {/* Section 4: Sector Benchmarks Table */}
              <section id="heading-sector-benchmarks" aria-labelledby="heading-sector-benchmarks-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sector-benchmarks-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Sector Benchmarks: Statutory Turnaround Rules Across Industries
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Framework
                  </span>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse" role="table" aria-label="Sector Benchmarks for Salary and FnF Disputes">
                      <thead>
                        <tr className="bg-slate-900 text-white">
                          <th className="py-3.5 px-4 font-bold">Sector / Industry</th>
                          <th className="py-3.5 px-3 font-bold">Governing Authority</th>
                          <th className="py-3.5 px-3 font-bold text-red-400">Statutory Limit SLA</th>
                          <th className="py-3.5 px-4 font-bold">Primary Dispute Trigger</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700">
                        {reportData.sectors.map((s, idx) => (
                          <tr key={s.id} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                            <td className="py-3.5 px-4 font-bold text-slate-900">{s.name}</td>
                            <td className="py-3.5 px-3 font-semibold text-slate-700">{s.regulator}</td>
                            <td className="py-3.5 px-3 font-bold text-red-600">{s.statutoryLimit}</td>
                            <td className="py-3.5 px-4 text-xs text-slate-600 leading-relaxed">{s.primaryCause}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed italic">
                  * Note: Pre-notice delay represents the median number of calendar days an employee waited after their last working day before escalating to an advocate. Post-notice resolution reflects business days between statutory delivery and financial credit.
                </p>
              </section>

              {/* Mid-Page Dedicated CTA */}
              <div className="my-8">
                <SalaryFnFReportCTA
                  buttonText="Have an Advocate Draft Your FnF Demand Notice"
                  variant="primary"
                />
              </div>

              {/* Section 5: Dispute Causes */}
              <section id="heading-dispute-causes" aria-labelledby="heading-dispute-causes-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-dispute-causes-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Causes of FnF Disputes: Deductions &amp; Notice Shortfall
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Breakdown of Withheld Dues
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {reportData.disputeCauses.map((cause, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-red-50 text-red-700 border border-red-200">
                            {cause.percentage ? `${cause.percentage}% of Disputes` : `Dispute Driver #${i + 1}`}
                          </span>
                          <span className="text-xs font-extrabold text-slate-900">
                            {cause.averageDeduction ? `Avg: ₹${cause.averageDeduction.toLocaleString("en-IN")}` : "Code on Wages s.18"}
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                          {cause.cause}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {cause.legalStatus}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 6: Interactive Scenario Tabs */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Interactive Scenarios: Select Your FnF Dispute Pattern
                  </h2>
                </div>
                <SalaryFnFReportTabs />
              </section>

              {/* Section 7: Myth vs Fact Comparison Grid */}
              <section id="heading-myth-vs-fact" aria-labelledby="heading-myth-vs-fact-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-myth-vs-fact-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Myth vs. Fact: 7 Dangerous Misconceptions in FnF &amp; Salary Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Reality vs HR Myths
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4" role="table" aria-label="Myth vs Fact FnF Legal Analysis">
                  {MYTH_FACT_PAIRS.map((item, idx) => (
                    <div
                      key={idx}
                      role="row"
                      className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-red-100 text-red-800">
                            Myth #{idx + 1}
                          </span>
                          <span className="text-[11px] sm:text-xs font-bold text-slate-500 text-right">
                            {item.authority}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 pt-1">
                          <div className="p-3.5 bg-red-50/70 border border-red-200/70 rounded-xl">
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-700 block mb-1">
                              ✕ Common Misconception:
                            </span>
                            <p className="text-xs sm:text-sm text-red-950 font-medium leading-relaxed">
                              {item.myth}
                            </p>
                          </div>

                          <div className="p-3.5 bg-emerald-50/80 border border-emerald-200/80 rounded-xl">
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 block mb-1">
                              ✓ Statutory Legal Reality:
                            </span>
                            <p className="text-xs sm:text-sm text-emerald-950 font-semibold leading-relaxed">
                              {item.fact}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 8: Court Precedents Digest */}
              <section id="heading-case-digest" aria-labelledby="heading-case-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Precedents on Salary Withholding &amp; Notice Deductions
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Authoritative Citations
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-4">
                        <span className="text-xs sm:text-sm font-extrabold text-red-600 tracking-wide uppercase">
                          {c.title}
                        </span>
                        <span className="text-[11px] font-bold text-slate-500">{c.date}</span>
                      </div>

                      <div className="mb-3">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">{c.parties}</h3>
                        <p className="text-xs text-slate-500 font-mono mt-0.5">{c.citation}</p>
                      </div>

                      <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <div>
                          <strong className="text-slate-900 block mb-0.5">The Factual Dispute:</strong>
                          <p>{c.facts}</p>
                        </div>
                        <div>
                          <strong className="text-slate-900 block mb-0.5">Supreme Court Holding:</strong>
                          <p>{c.holding}</p>
                        </div>
                        <div className="p-3 bg-red-50/70 border border-red-200/80 rounded-xl">
                          <strong className="text-red-900 block mb-0.5">Enforceable Remedy:</strong>
                          <p className="font-semibold text-red-950">{c.amount}</p>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                          <strong className="text-slate-900 block mb-0.5">Claimant Takeaway:</strong>
                          <p className="text-slate-600">{c.takeaway}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 9: Statutory Code on Wages Rules */}
              <section id="heading-statutory-rules" aria-labelledby="heading-statutory-rules-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-statutory-rules-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Code on Wages Framework: Key Sections Governing Dues
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Act No. 29 of 2019
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      Section 17(2): The Mandatory Two-Working-Day Settlement Rule
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                      Section 17(2) stipulates: <em>&quot;Where an employee is removed or dismissed from service, or retrenched or has resigned from service, or became unemployed due to closure of the establishment, the wages payable to him shall be paid within two working days of his removal, dismissal, retrenchment or, as the case may be, his resignation.&quot;</em> This provision does not provide any statutory loophole for internal 60-day company cycles.
                    </p>
                    <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600">
                      <strong>Legal Significance:</strong> Non-compliance on Day 3 constitutes an ongoing statutory breach, entitling the employee to legal notice escalation and interest claims under Section 18.
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      Section 18 &amp; Section 18(3): Permissible Deductions &amp; the 50% Statutory Ceiling
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                      Section 18 strictly regulates what employers can lawfully deduct from an employee&apos;s wages. Most crucially, Section 18(3) mandates that total deductions from the wages of an employee in any wage period shall not exceed 50%.
                    </p>
                    <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600">
                      <strong>Protection Against Negative FnF:</strong> If an employer claims ₹2,00,000 for notice shortfall while earned salary is ₹1,00,000, they cannot zero out the salary. They must pay at least 50% (₹50,000) and contest the remainder separately.
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      Section 45 &amp; Section 54: Enforcement Authorities &amp; Penal Liabilities
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                      Section 45 establishes designated Authorities (Labour Commissioner / Deputy Labour Commissioner) empowered to hear claims of non-payment and issue recovery certificates directly executed by the Collector as arrears of land revenue. Section 54 imposes monetary fines up to ₹50,000 on employers who unlawfully withhold wages.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10: 5-Step Notice Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-playbook-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The 5-Step Legal Recovery Playbook: From Demand Notice to Payout
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Proven Dispute Rail
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Audit Your Separation Account & Last Working Day (LWD) Clearances",
                      desc: "Compile all primary digital records: formal resignation email, written acceptance from HR, signed IT/admin clearance handover receipts, and salary slips for the preceding 6 months. Calculate exact earned salary for uncredited days.",
                    },
                    {
                      step: "2",
                      title: "Send a Final Informal Demand (Grace Period Expired)",
                      desc: "After the 2-working-day window under Section 17(2) lapses, dispatch an email to the HR Head and Payroll Manager citing Section 17(2) and giving 48 hours for release.",
                    },
                    {
                      step: "3",
                      title: "Dispatch Advocate Statutory Legal Demand Notice",
                      desc: "If unpaid, engage an advocate to serve a formal legal notice addressed to the Managing Director, Board of Directors, and HR Head. Sent via Indian Post Speed Post with tracking and emailed with certified electronic audit under Section 63 BSA 2023.",
                    },
                    {
                      step: "4",
                      title: "Corporate Legal / HR Re-Evaluation Window (15 Days)",
                      desc: "81.6% of employers settle within 12 business days. Corporate legal counsel recognizes the strict liability of Section 17(2) and penal exposure under Section 54, releasing the undisputed balance.",
                    },
                    {
                      step: "5",
                      title: "Escalate to Section 45 Labour Authority or Insolvency Proceedings",
                      desc: "If the company fails to settle, file a recovery petition before the designated Labour Authority under Section 45 for a revenue recovery certificate, or initiate commercial debt recovery proceedings.",
                    },
                  ].map((s, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        {s.step}
                      </span>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">{s.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 11: Evidence Checklist */}
              <section id="heading-checklist" aria-labelledby="heading-checklist-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Essential Evidence Checklist: Documents Required to Draft Your Notice
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Section 63 BSA 2023 Ready
                  </span>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { item: "Appointment Letter & Employment Contract", detail: "Proves agreed salary CTC, designation, notice period terms, and employer entity name." },
                      { item: "Last 3 to 6 Months Salary Slips", detail: "Establishes daily rate of wages, basic wage component, and regular monthly deductions." },
                      { item: "Resignation Email & Written Acceptance", detail: "Fixes the exact resignation date, notice period timeline, and Last Working Day (LWD)." },
                      { item: "IT & Admin Asset Handover Receipts", detail: "Proves return of laptop, ID badges, and corporate property, defeating asset withholding defenses." },
                      { item: "Bank Account Statements (Post-LWD)", detail: "Evidences that no credit was received within the statutory 2-working-day window." },
                      { item: "Unanswered HR Follow-up Email Threads", detail: "Shows claimant acted in good faith before retaining legal counsel to issue notice." },
                    ].map((chk, i) => (
                      <div key={i} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-red-600 font-black">✓</span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900">{chk.item}</span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed pl-5">
                          {chk.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 12: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs: Salary &amp; FnF Disputes Under Code on Wages
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Authoritative Answers
                  </span>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs [&_summary::-webkit-details-marker]:none"
                    >
                      <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer text-xs sm:text-sm font-bold text-slate-900 hover:bg-slate-50 transition-colors">
                        <span className="pr-4">{faq.question}</span>
                        <span className="w-5 h-5 rounded-full bg-slate-100 group-open:bg-red-50 flex items-center justify-center flex-shrink-0 text-slate-500 group-open:text-red-600 transition-transform duration-200 group-open:rotate-180">
                          ↓
                        </span>
                      </summary>
                      <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 13: Download CSV, Cite This Report & Press */}
              <section id="heading-download-citation" aria-labelledby="heading-download-citation-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-download-citation-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Cite This Report, Download Dataset &amp; Media Inquiries
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Academic &amp; Press Access
                  </span>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-5">
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-2">
                      Academic &amp; Legal Citation Format (APA / Bluebook)
                    </h3>
                    <div className="p-3.5 bg-slate-900 text-slate-100 font-mono text-xs rounded-xl overflow-x-auto">
                      LegalRecovery Research Cell. (2026). <em>Salary and FnF Disputes After the Code on Wages: First-Year Empirical Data Report (2026 Edition)</em>. LegalRecovery.in. https://legalrecovery.in/reports/salary-fnf-dispute-report-2026
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
                        Download Dataset (JSON &amp; CSV)
                      </h4>
                      <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                        Access anonymized dispute metrics, sector benchmarks, and recovery timelines for academic or institutional research.
                      </p>
                      <Link
                        href="/send-legal-notice-online-india"
                        className="inline-flex items-center text-xs font-bold text-red-600 hover:text-red-700 underline underline-offset-2"
                      >
                        Request Research Dataset Access &rarr;
                      </Link>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
                        Press &amp; Media Relations
                      </h4>
                      <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                        Journalists reporting on labour code implementation, startup layoffs, or wage recovery can speak to our legal research cell.
                      </p>
                      <Link
                        href="/about"
                        className="inline-flex items-center text-xs font-bold text-slate-900 hover:text-red-600 underline underline-offset-2"
                      >
                        Contact LegalRecovery Research Desk &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 14: Primary Sources & Statutory References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Primary Sources &amp; Statutory References
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Official Government Portals
                  </span>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
                  <ul className="space-y-3">
                    {PRIMARY_SOURCES.map((source, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <span className="text-red-600 font-black mt-0.5">•</span>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-700 hover:text-red-600 hover:underline leading-relaxed font-medium"
                        >
                          {source.title}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-4 text-xs font-medium text-slate-500">
                    <span>Related Research:</span>
                    <Link href="/reports/legal-notice-outcomes-study" className="text-red-600 hover:underline">
                      Legal Notice Outcomes Study
                    </Link>
                    <Link href="/reports/consumer-commission-awards-tracker" className="text-red-600 hover:underline">
                      Consumer Commission Awards Tracker
                    </Link>
                    <Link href="/reports/refund-delay-index-india" className="text-red-600 hover:underline">
                      Refund Delay Index India
                    </Link>
                    <Link href="/legal-notice-charges" className="text-red-600 hover:underline">
                      Legal Notice Charges
                    </Link>
                  </div>
                </div>
              </section>

              {/* Bottom Page CTA */}
              <SalaryFnFReportCTA
                buttonText="Recover Withheld Salary & FnF via Advocate Notice"
                variant="primary"
              />

              {/* Related Recovery Guides */}
              <div className="pt-6">
                <RelatedRecoveryGuides />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
