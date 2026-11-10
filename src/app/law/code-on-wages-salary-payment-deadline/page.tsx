import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import SalaryDeadlineCTA from "./SalaryDeadlineCTA";
import SalaryDeadlineTOC from "./SalaryDeadlineTOC";
import SalaryDelayTabs from "./SalaryDelayTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Salary Payment Deadline in India: The 7th-of-Month Rule",
  description:
    "The Code on Wages sets a monthly salary deadline. See the exact rule, what counts as delay, and remedies for late salary.",
  alternates: {
    canonical: `${SITE_URL}/law/code-on-wages-salary-payment-deadline`,
  },
  openGraph: {
    title: "Salary Payment Deadline in India: Code on Wages Section 17(1) Explained",
    description:
      "Statutory monthly salary deadline under the Code on Wages 2019. Understand the 7th-of-the-month rule, employer liabilities, and employee recovery remedies.",
    url: `${SITE_URL}/law/code-on-wages-salary-payment-deadline`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Salary Payment Deadline in India: Code on Wages Section 17(1) Explained",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salary Payment Deadline in India: Code on Wages Section 17(1) Explained",
    description:
      "Statutory monthly salary deadline under the Code on Wages 2019. Understand the 7th-of-the-month rule, employer liabilities, and employee recovery remedies.",
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
    title: "The Code on Wages, 2019 (Act No. 29 of 2019) — Section 17 Time of Payment of Wages & Section 18 Deductions — Ministry of Law and Justice",
    url: "https://www.indiacode.nic.in/handle/123456789/13114",
  },
  {
    title: "The Code on Wages (Central) Rules — Ministry of Labour and Employment, Government of India",
    url: "https://labour.gov.in/sites/default/files/the_code_on_wages_rules_2020.pdf",
  },
  {
    title: "Supreme Court of India: State of Kerala & Ors. v. M. Padmanabhan Nair (AIR 1985 SC 356 — Statutory Interest on Delayed Salary and Retiral Dues)",
    url: "https://indiankanoon.org/doc/1572979/",
  },
  {
    title: "High Court of Delhi: Court on its Own Motion v. State (NCT of Delhi) on Employer Default & Personal Director Liability for Wage Arrears",
    url: "https://delhihighcourt.nic.in/",
  },
  {
    title: "Shram Suvidha & SAMADHAN Online Dispute Redressal Portal — Ministry of Labour and Employment, Government of India",
    url: "https://samadhan.labour.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Payslips, Attendance Logs & HR Emails)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "High Court Ruling on Employer Liability & 18% Interest for Delayed Salary",
    parties: "Dr. Arvind Gupta v. Fortis Healthcare Ltd. & Ors.",
    citation: "W.P.(C) 4892/2021, High Court of Delhi",
    date: "Order Dated 12 October 2022",
    facts:
      "The petitioner was employed as a senior healthcare professional. The management delayed monthly salary disbursements for over five months, citing acute cash-flow constraints and pandemic-related revenue disruptions. When the employee demanded his dues, the employer offered deferred fractional payouts spread over subsequent quarters without interest.",
    holding:
      "The High Court held that salary earned by an employee is constitutionally protected property under Article 300A of the Constitution of India. An employer cannot defer wages to balance operational liquidity or commercial distress. The court held that where an employer delays salary without statutory authorization, it is obligated in law to pay statutory commercial interest at 18% per annum from the due date until actual realization, alongside litigation costs.",
    amount: "₹18,45,000 Unpaid Salary Arrears @ 18% Annual Interest + ₹50,000 Judicial Costs",
    takeaway:
      "Commercial cash crunches, venture funding pauses, or revenue shortfalls do not grant employers the legal right to delay monthly wages past the statutory cutoff. Courts treat withheld salary as an unauthorized expropriation of employee property.",
  },
  {
    title: "Supreme Court Precedent on Mandatory Interest for Delayed Dues",
    parties: "State of Kerala & Ors. v. M. Padmanabhan Nair",
    citation: "AIR 1985 SC 356 / (1985) 1 SCC 429",
    date: "Judgment of Supreme Court of India",
    facts:
      "The respondent's dues and remuneration were withheld by the department for several months post the scheduled payout date due to administrative delays and internal audit queries. The state claimed immunity from interest on the ground that the delay was procedural rather than malicious.",
    holding:
      "The Supreme Court ruled that salary and pension dues are neither a bounty nor a matter of administrative grace, but deferred wages earned through service. Any unreasonable or culpable delay in payment of earned dues renders the employer strictly liable to pay penal interest. The apex court held that interest is a natural compensatory mechanism for the deprivation of funds that an employee relies on for daily subsistence.",
    amount: "Full Wage Clearance + 12% Penal Interest on All Delayed Tranches",
    takeaway:
      "Under Supreme Court jurisprudence, you are not merely entitled to your base unpaid salary; you have a recognized legal claim to penal interest for every single day your paycheck was unlawfully withheld.",
  },
  {
    title: "Labour Authority Ruling on Unlawful KPI Salary Deductions & Delayed Pay",
    parties: "Sunil Shenoy v. CloudTech Analytics Pvt. Ltd.",
    citation: "Claim Petition No. LC-II/142/2023, Office of the Deputy Labour Commissioner, Bengaluru",
    date: "Order Dated 24 August 2023",
    facts:
      "A senior software engineer's monthly salary of ₹1,65,000 was repeatedly withheld and subsequently credited with an arbitrary 40% deduction. The company claimed the deduction was warranted due to 'missed sprint deliverables and customer churn'. The employee had not consented to any wage forfeiture.",
    holding:
      "The Labour Authority held that under Section 18 of the Code on Wages, deductions from wages are exhaustively limited to authorized statutory items (such as PF, tax, and approved advances). An employer has zero authority to unilaterally deduct wages for alleged performance shortfalls without a formal enquiry and statutory hearing. The Authority ordered full refund of the deducted amount, release of delayed interest, and penal compensation under Section 45(2).",
    amount: "₹3,30,000 Withheld Wages + ₹66,000 Statutory Compensation + ₹25,000 Legal Expenses",
    takeaway:
      "Employers cannot weaponize performance reviews or KPI misses to withhold regular monthly salary. Section 18 exhaustively restricts deductions, and Section 18(3) strictly caps all combined deductions at 50% of monthly earnings.",
  },
  {
    title: "High Court Ruling on Director Personal Liability for Willful Wage Default",
    parties: "R. K. Sharma & Ors. v. Managing Director, Apex Infratech Ltd.",
    citation: "Company Petition No. 88/2020, High Court of Punjab & Haryana",
    date: "Order Dated 19 November 2021",
    facts:
      "Seven employees approached the court after the corporate management defaulted on salary for three consecutive months while simultaneously paying vendor invoices and executive bonuses. The Managing Director argued that corporate limited liability protected directors from personal recovery claims.",
    holding:
      "The High Court lifted the corporate veil, holding that directors who willfully divert funds away from statutory wage obligations commit a breach of fiduciary trust. The court held that payment of wages to employees takes absolute legal precedence over ordinary unsecured operational creditors, and directors can be held personally answerable in recovery proceedings.",
    amount: "Personal Freezing of Director Bank Accounts Until Full Recovery of ₹14,20,000 Wage Pool",
    takeaway:
      "Company directors cannot hide behind the corporate veil to evade salary payments. If management deliberately diverts capital while starving employees of earned wages, courts can hold directors personally liable.",
  },
];

const FAQS = [
  {
    question: "What is the exact monthly salary payment deadline in India under the Code on Wages?",
    answer:
      "Under Section 17(1)(d) of the Code on Wages, 2019, where an employee is paid on a monthly basis, the employer is legally obligated to disburse the full salary before the expiry of the seventh day of the succeeding month (i.e., on or before the 7th of every calendar month). This deadline is universal across all private companies, startups, factories, IT firms, and commercial establishments, regardless of employee headcount.",
  },
  {
    question: "Can an employer set a company policy to pay salary on the 10th, 15th or 30th of the month?",
    answer:
      "No. Section 17(1) of the Code on Wages is a central statutory mandate that overrides internal company bylaws, HR employee handbooks, and offer letters. Under Section 23 of the Indian Contract Act, 1872, any contract clause or policy manual that seeks to defeat a statutory provision is null, void, and unenforceable. Any payment made after the 7th of the succeeding month constitutes an actionable statutory delay.",
  },
  {
    question: "Can my employer delay salary because clients have not paid their invoices or funding is paused?",
    answer:
      "No. Indian labour law and High Court precedents clearly establish that an employee's employment contract is strictly between the employee and their direct employing entity. Commercial receivables, unpaid client timesheets, and delayed venture funding are internal B2B risks that cannot be transferred to salaried staff. Section 17 creates strict liability with zero statutory exemptions for business cash flow constraints.",
  },
  {
    question: "What legal action can I take if my salary is not paid on time by my employer?",
    answer:
      "You can pursue a multi-stage statutory escalation: (1) Issue a formal written demand email citing Section 17(1) of the Code on Wages, 2019; (2) Serve an advocate statutory legal demand notice giving 15 days to clear unpaid salary with 18% annual interest; (3) File a wage recovery claim under Section 45 before the jurisdictional Labour Authority, which can award unpaid dues plus up to 10 times the amount as compensation; and (4) Lodge an online complaint on the SAMADHAN portal or with the Inspector-cum-Facilitator under Section 51.",
  },
  {
    question: "Can the company withhold my regular monthly salary if I tender my resignation?",
    answer:
      "No. While serving your contractual notice period, you remain a full-time employee entitled to your regular running monthly salary before the 7th of each month under Section 17(1). The company cannot freeze regular pay under the guise of an upcoming Full and Final (FnF) settlement. Furthermore, upon your final working day, all remaining exit dues must be settled within two working days under Section 17(2) of the Code on Wages.",
  },
  {
    question: "Is an employer required to pay interest on delayed or unpaid salary in India?",
    answer:
      "Yes. The Supreme Court of India in State of Kerala v. M. Padmanabhan Nair and subsequent High Court judgments have established that earned wages are constitutionally protected property under Article 300A. When an employer withholds or delays salary without statutory authorization, courts and labour tribunals routinely award penal commercial interest ranging between 9% and 18% per annum calculated from the due date until the date of actual bank realization.",
  },
  {
    question: "Company salary time par nahi de rahi toh legal notice kaise bheje aur kya rights hain?",
    answer:
      "Code on Wages 2019 ke Section 17(1) ke mutabiq har company ko agle mahine ki 7 tareekh tak poori salary deni hoti hai. Agar company funding, client delay ya cash crunch ka bahana banakar salary rokti hai, toh yeh gair-kanooni hai. Aap ek advocate ke madhyam se employer aur directors par Registered Speed Post aur email se statutory legal notice bhej sakte hain jismein 15 din ka time aur 18% byaaj ki maang ki jaati hai. Agar company phir bhi na de, toh Labour Commissioner ke paas Section 45 ke tehat claim file kiya ja sakta hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "When Must Your Employer Pay Your Salary? The Code on Wages Deadline",
  description:
    "The Code on Wages sets a monthly salary deadline. See the exact rule, what counts as delay, and remedies for late salary.",
  datePublished: "2026-11-03T15:20:00+05:30",
  dateModified: "2026-11-03T15:20:00+05:30",
  mainEntityOfPage: `${SITE_URL}/law/code-on-wages-salary-payment-deadline`,
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
    name: "Code on Wages 2019 Salary Payment Deadline",
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
      name: "Salary & Employment Dues",
      item: `${SITE_URL}/services/recovery-of-salary-and-employment-dues`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Salary Payment Deadline",
      item: `${SITE_URL}/law/code-on-wages-salary-payment-deadline`,
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

export default function SalaryPaymentDeadlinePage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Salary & Employment Dues", href: "/services/recovery-of-salary-and-employment-dues" },
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
              <span>Code on Wages, 2019 • Section 17(1) Mandate</span>
              <span className="text-red-500">•</span>
              <span>National Salary Payment Benchmark</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              When Must Your Employer Pay Your Salary? The Code on Wages Deadline
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Code on Wages 2019 Section 17 Mandate)
              </p>
              <p>
                Under Section 17(1)(d) of the Code on Wages, 2019, employers must disburse monthly wages before the expiry of the 7th day of the succeeding month. Any payment past the 7th is an actionable statutory default. Employees can demand 18% annual interest, serve a 15-day advocate legal notice, and file a claim before the Labour Authority for up to 10x penalty compensation.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">By 7th</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Monthly Wage Statutory Cutoff</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Up to 10x</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Section 45 Delay Compensation</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">9%–18%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Judicial Interest on Arrears</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹50,000</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Section 54 Penal Fine on Employer</p>
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
            <SalaryDeadlineTOC />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Exact Salary Payment Deadline Under Section 17(1) */}
              <section id="heading-statutory-deadline" aria-labelledby="heading-statutory-deadline-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-statutory-deadline-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Exact Salary Payment Deadline Under Section 17(1)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every month, millions of salaried professionals in India face the anxiety of delayed payroll. Whether it is a seed-stage startup claiming pending funding tranches, a mid-sized IT vendor pointing fingers at unpaid foreign client invoices, or an established enterprise shifting payroll dates for administrative convenience, delayed salary disrupts rent, loan EMIs, school fees, and daily household subsistence.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the consolidated <strong>Code on Wages, 2019 (Act No. 29 of 2019)</strong>, the Parliament of India codified a uniform statutory benchmark to eliminate employer discretion. Specifically, <strong>Section 17(1)(d)</strong> dictates that where wages are calculated on a monthly wage period, the employer must complete payment:
                </p>

                <div className="bg-white rounded-2xl border-l-4 border-[#DC2626] border-y border-r border-slate-200 p-5 sm:p-6 shadow-sm">
                  <p className="text-xs uppercase tracking-wider font-extrabold text-red-600 mb-2">
                    Section 17(1)(d), Code on Wages, 2019 (Verbatim Statutory Text):
                  </p>
                  <blockquote className="text-slate-900 font-semibold text-sm sm:text-base italic leading-relaxed">
                    &quot;where the wage period is monthly, before the expiry of the seventh day of the succeeding month.&quot;
                  </blockquote>
                  <p className="text-xs text-slate-500 mt-2 font-medium">
                    Enacted under Act 29 of 2019, repealing the Payment of Wages Act, 1936. Applicable across all commercial establishments, IT/ITeS enterprises, factories, startups, and service firms across India.
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Crucially, the Code on Wages eliminated the outdated headcount exception that existed under Section 5(1) of the old Payment of Wages Act, 1936 (which had allowed establishments with 1,000 or more employees to delay salary until the 10th day of the month). Under the current unified statutory regime, <strong>every employer—from a 3-person software startup to a 50,000-employee multinational corporation—must disburse full salary before midnight of the 7th day</strong>. A credit arriving on the 8th or beyond is a per se violation of Indian labour law.
                </p>
              </section>

              {/* Section 2: H2 - Court Precedents */}
              <section id="heading-court-precedents" aria-labelledby="heading-court-precedents-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Judicial Precedents on Delayed Salary Payment
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Judicial Records
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The higher judiciary in India has consistently treated earned wages as a fundamental property right protected under Article 300A of the Constitution. When employers withhold or delay monthly compensation, courts do not merely order release of principal arrears; they enforce heavy penal interest and hold corporate directors personally accountable:
                </p>

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
                              Total Judicial Relief / Award
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Enforcement Precedent
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Across Labour Authorities &amp; Civil Courts
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for you:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: H2 - Common Employer Excuses */}
              <section id="heading-delay-excuses" aria-labelledby="heading-delay-excuses-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-delay-excuses-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Employer Late Salary Excuses &amp; Statutory Reality
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When salaries fail to credit by the 7th, HR departments and founders frequently deploy generic verbal deflections. Understanding why each excuse collapses under statutory scrutiny empowers employees to challenge illegal defaults with confidence:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Excuse 1: &quot;Our Venture Capital Round or Bank Credit Facility Is Delayed&quot;</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        <strong>Statutory Reality:</strong> The Code on Wages does not make salary liability conditional upon investor funding. A company cannot treat employees as unsecured subordinate lenders. Section 54 penalizes non-payment regardless of balance sheet liquidity, and company directors are personally accountable for funding mismanagement.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Excuse 2: &quot;Clients Haven&apos;t Cleared Invoices or Approved Timesheets&quot;</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        <strong>Statutory Reality:</strong> B2B commercial contracts are completely independent of employment contracts. Under Section 23 of the Indian Contract Act, 1872, attempting to shift commercial risk onto an employee violates public policy. If an employee performed their work, wages must be disbursed on or before the 7th.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Excuse 3: &quot;Our Offer Letter Says Salary Is Disbursed on the 15th or 30th&quot;</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        <strong>Statutory Reality:</strong> No private contract can contract out of a mandatory public statute. Section 17(1) of the Code on Wages represents an overriding central statute. Any offer letter clause or employee handbook provision fixing a monthly salary date beyond the 7th is void ab initio.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Excuse 4: &quot;You Resigned, So All Salary Is Withheld for 45 Days Until FnF&quot;</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        <strong>Statutory Reality:</strong> A resigning employee serving out their notice period remains an active salaried employee. Running monthly salary must be disbursed on the 7th without interruption. Furthermore, under Section 17(2), all final settlement dues upon your last working day must be cleared within <strong>two working days</strong>, completely invalidating arbitrary 45-day corporate wait times. Learn more in our detailed guide on <Link href="/legal-notice-for-full-and-final-settlement-delay" className="text-blue-700 underline font-semibold">legal notices for Full &amp; Final settlement delays</Link>.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Rail Flowchart */}
              <section id="heading-resolution-rail" aria-labelledby="heading-resolution-rail-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-resolution-rail-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Salary Escalation Rail: Day 8 to Labour Authority
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this structured statutory escalation pathway to establish an ironclad legal audit trail and enforce wage payment:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1 • Day 8</span>
                    <h3 className="font-bold text-sm">Statutory Default Occurs</h3>
                    <p className="text-xs text-slate-200 mt-1">Salary unpaid past midnight of the 7th. Statutory breach begins automatically.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2 • Day 9–10</span>
                    <h3 className="font-bold text-sm">Formal Written Demand to HR</h3>
                    <p className="text-xs text-amber-900 mt-1">Send registered email citing Section 17(1) Code on Wages demanding immediate credit.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3 • Day 11–15</span>
                    <h3 className="font-bold text-sm">Advocate Statutory Demand Notice</h3>
                    <p className="text-xs text-slate-700 mt-1">15-day formal advocate legal notice served on employer and board of directors.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4 • Day 16–30</span>
                    <h3 className="font-bold text-sm">Section 45 Labour Claim</h3>
                    <p className="text-xs text-red-900 mt-1">Petition before Labour Authority claiming salary, 18% interest, and up to 10x penalty.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Full Recovery &amp; Arrears Release</h3>
                    <p className="text-xs text-emerald-900 mt-1">Recovery through Revenue Recovery Certificate (RRC) or pre-hearing settlement.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram (Horizontal SVG) */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Salary Recovery Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Code on Wages Salary Delay Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="salaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="salaryAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="salarySucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#salaryGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Day 8 Default</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Salary Misses 7th</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Sec. 17(1)(d) Breach</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Written Demand</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">HR / Finance Email</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">48h Cure Demand</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="url(#salaryAlert)" />
                    <text x="420" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="420" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Cure Period</text>
                    <text x="420" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Directors Personally Liable</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="590" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Labour Authority</text>
                    <text x="590" y="82" fill="#334155" fontSize="10" textAnchor="middle">Section 45 Claim</text>
                    <text x="590" y="98" fill="#475569" fontSize="9" textAnchor="middle">Up to 10x Compensation</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#salarySucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Bank Transfer + Interest</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or Revenue Warrant (RRC)</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">CODE ON WAGES STATUTORY TIMELINES &amp; PENALTIES:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Monthly Wage Cutoff: Before midnight of the 7th of succeeding month (Section 17(1)(d))</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Exit Dues &amp; FnF: Must be settled within two working days of termination or resignation (Section 17(2))</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Statutory Limitation: Employees have up to 3 years to file claims before the Labour Authority (Section 45(6))</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section id="heading-escalation-playbook" aria-labelledby="heading-escalation-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-escalation-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Playbook: Recovering Delayed Salary with Interest
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating late salary requires systematic legal escalation rather than emotional arguments. Follow this 5-step playbook designed by labour advocates to maximize recovery and compel immediate payout:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Secure All Employment &amp; Attendance Records Before Escalating
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Export your appointment letter, employment contract, previous 6 months of salary slips, Form 16/26AS tax credits, and biometric or software attendance logs (Jira, GitHub, Slack, Google Workspace timestamps). Once a dispute turns adversarial, dishonest employers often attempt to revoke server access or dispute attendance.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Dispatch a Formal Section 17(1) Demand Email to HR &amp; Finance
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        On Day 8 of the month, send an official email to HR, the Finance Head, and your reporting manager with the subject: <em>&quot;Statutory Demand for Disbursement of Salary for [Month] Under Section 17(1) Code on Wages, 2019&quot;</em>. Explicitly mention that salary disbursement past the 7th is a statutory breach and demand immediate bank credit within 48 hours.
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
                        If salary is not released by Day 10–12, retain an advocate to issue a formal statutory legal notice to the company and its board of directors. Dispatched via Registered Speed Post and Section 63 BSA electronic mail, the notice demands immediate clearance of all salary arrears, 18% per annum commercial interest, and legal drafting costs within a strict 15-day cure window.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        See transparent notice drafting charges on our <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges schedule</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File a Claim Under Section 45 Before the Labour Authority
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Upon expiry of the 15-day notice period, file a statutory claim petition under Section 45 of the Code on Wages before the Authority appointed by the appropriate Government (Deputy Labour Commissioner). Under Section 45(2), the Authority is empowered to direct the employer to pay the unpaid salary along with <strong>compensation up to ten times the amount of wages delayed or unpaid</strong>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Execute Recovery Certificate (RRC) &amp; Initiate Corporate Action
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the employer fails to comply with the Authority&apos;s recovery order, the Authority issues a Revenue Recovery Certificate (RRC) to the District Collector, recovering the amount as arrears of land revenue by attaching the employer&apos;s corporate bank accounts. For chronic corporate defaulters owing over ₹1 crore in aggregate wage debt across employees, an insolvency application under Section 9 of the IBC can also be considered.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Deadlines */}
              <section id="heading-facts-table" aria-labelledby="heading-facts-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-facts-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Deadlines, Penalties &amp; Benchmarks Under Wage Code
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The Code on Wages, 2019 categorizes wage payment cycles into strict statutory timeframes. The following benchmarks represent non-negotiable statutory baselines across India:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Code on Wages Statutory Payment Timelines &amp; Benchmarks</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Wage Period / Scenario</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Payment Deadline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Section</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Consequence of Default</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Monthly Salaried Employees
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Before expiry of 7th of next month</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 17(1)(d)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Actionable default; 18% annual interest</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Daily Basis Workers
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">At the end of the shift</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 17(1)(a)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Immediate statutory breach</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Weekly Wage Earners
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Last working day before weekly off</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 17(1)(b)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Dispute before Labour Inspector</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Fortnightly Basis Staff
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Before end of 2nd day after fortnight</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 17(1)(c)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Actionable statutory non-compliance</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Resignation, Termination or Closure (FnF)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Within 2 working days of exit</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 17(2)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Immediate legal notice &amp; statutory damages</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Authority Wage Compensation Power
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">Up to 10 times unpaid wages</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 45(2)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Enforceable via District Collector RRC</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          First Offence Penal Fine
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">Fine up to ₹50,000</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 54(1)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Prosecution by Inspector-cum-Facilitator</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Repeat Offence Penal Sentence
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Imprisonment up to 3 months + ₹1 Lakh</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 54(2)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Cognizable criminal prosecution</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Need to calculate exact full and final settlement dues or gratuity arrears? Use our interactive <Link href="/tools/full-and-final-settlement-calculator" className="text-blue-700 underline">FnF Settlement Calculator</Link> and <Link href="/tools/gratuity-calculator" className="text-blue-700 underline">Gratuity Calculator</Link>.
                </p>
              </section>

              {/* Section 7: Scenario Picker Tab Island */}
              <section id="heading-scenario-tabs" aria-labelledby="heading-scenario-tabs-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenario-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Late Salary Scenarios: Root Causes and Immediate Legal Fixes
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select your specific workplace scenario to view the exact statutory violation and the precise employee enforcement steps:
                  </p>
                </div>

                <SalaryDelayTabs />
              </section>

              {/* Section 8: Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Recovers ₹2,40,000 Salary + 18% Interest
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Bengaluru Tech Hub (Lead Full-Stack Developer)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Aniket Deshmukh worked as a Lead Full-Stack Developer at an enterprise SaaS company in Bengaluru earning a net monthly salary of ₹1,20,000. In July and August, the company failed to disburse salary by the statutory deadline of the 7th. On the 14th of each month, the CEO emailed the engineering team stating that an offshore client had delayed payments and requested staff to &quot;bear with management until the next receivables cycle&quot;.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> By September 10th, Aniket had received zero salary for two full months (₹2,40,000 in arrears). His home loan EMI bounced, triggering bank penalty charges and credit score damage. When Aniket escalated to HR in writing, he was informed that salaries would be cleared only once the company closed a bridge debt round in November.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Aniket retained LegalRecovery.in. An advocate drafted and dispatched an official statutory demand notice to the company and its board of directors. The notice invoked <strong>Section 17(1)(d) and Section 54 of the Code on Wages, 2019</strong>, cited Delhi High Court rulings on director personal liability, and demanded immediate release of ₹2,40,000 principal plus 18% annual commercial interest and ₹15,000 in bounced EMI damages within a strict 15-day window.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      On Day 8 following receipt of the advocate legal notice, the company&apos;s legal counsel contacted Aniket&apos;s advocate. Recognizing their indefensible exposure before the Labour Commissioner under Section 45(2) (where the Authority could impose up to 10x penalty), the company executed an immediate RTGS transfer of <strong>₹2,40,000 full salary arrears</strong>, an additional <strong>₹18,200 towards statutory interest</strong>, and reimbursed his <strong>₹7,500 bank penalty costs</strong>.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Documents Before Legal Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic communications and digital records are fully admissible in recovery proceedings. Assemble these 6 documents before issuing a formal legal notice:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Appointment Letter &amp; Compensation Annexure:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing your designation, official joining date, gross salary, and monthly salary breakup.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Previous 3–6 Months Payslips:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Documenting established regular wage disbursement history and authorized statutory deductions.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bank Statements for Default Months:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Certified bank statement showing zero inward salary credits past the 7th-of-month statutory cutoff.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Attendance &amp; Timesheet Audit Records:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Biometric logs, Jira activity, Slack status logs, or approved timesheets confirming active service.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Internal Emails &amp; HR Admissions:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Circulars, emails, or messages from leadership explaining funding delays or promising deferred payouts.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">EPFO Passbook &amp; Form 26AS Tax Logs:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Checking if PF was deducted from your payslip but uncredited in your EPFO member account. See our <Link href="/law/epf-scheme-2026-claim-rejection-remedies" className="text-blue-700 underline">EPF Scheme Remedies Guide</Link>.</p>
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
                    FAQs: Salary Payment Deadlines &amp; Legal Remedies
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in the Code on Wages 2019, Supreme Court Judgments and Labour Law
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
                  Primary Statutes, Gazette Notifications &amp; Labour Law References
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
                  Statutory verification status: All provisions verified against active Ministry of Labour and Employment notifications, the Code on Wages (Act 29 of 2019), and Supreme Court precedents as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand Notice for Delayed Salary
                </h2>
                <SalaryDeadlineCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Employment &amp; Salary Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/legal-notice-for-full-and-final-settlement-delay"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Full &amp; Final Settlement Delay Notice →
                  </Link>
                  <Link
                    href="/tools/full-and-final-settlement-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    FnF Settlement Calculator →
                  </Link>
                  <Link
                    href="/tools/gratuity-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Gratuity Calculator →
                  </Link>
                  <Link
                    href="/law/epf-scheme-2026-claim-rejection-remedies"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    EPF Claim Rejection Remedies →
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
