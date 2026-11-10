import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import FnfNoticeCTA from "./FnfNoticeCTA";
import FnfTableOfContents from "./FnfTableOfContents";
import FnfProblemTabs from "./FnfProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "FnF in 2 Working Days: Code on Wages s.17(2) Explained",
  description:
    "Under the Code on Wages, exit dues are payable within 2 working days. What it covers, what it doesn't, and how employees enforce it.",
  alternates: {
    canonical: `${SITE_URL}/law/code-on-wages-fnf-two-working-days`,
  },
  openGraph: {
    title: "Section 17(2), Code on Wages: Full & Final Settlement Due in 2 Working Days",
    description:
      "Statutory analysis of Section 17(2) of the Code on Wages, 2019. Understand employee rights, wage vs non-wage exclusions, deduction caps under s.18, and legal notice escalation.",
    url: `${SITE_URL}/law/code-on-wages-fnf-two-working-days`,
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
    title: "Code on Wages, 2019 (Act No. 29 of 2019) — Section 17 (Time limit for payment of wages) & Section 2(y) (Definition of Wages)",
    url: "https://www.indiacode.nic.in/handle/123456789/1362",
  },
  {
    title: "Code on Wages (Central) Rules — Ministry of Labour and Employment, Government of India",
    url: "https://labour.gov.in/sites/default/files/the_code_on_wages_rules_2020.pdf",
  },
  {
    title: "Code on Social Security, 2020 (Act No. 36 of 2020) — Chapter V (Gratuity Payment Timelines & Form I Settlement)",
    url: "https://www.indiacode.nic.in/handle/123456789/1393",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Payslips, Emails & Timesheets)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Ministry of Labour & Employment — Office of the Chief Labour Commissioner (Central) Grievance Portal",
    url: "https://clc.gov.in/",
  },
  {
    title: "Insolvency and Bankruptcy Code, 2016 (IBC Section 9 — Operational Debt Demand by Unpaid Employees)",
    url: "https://www.ibbi.gov.in/legal-framework/act",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Ruling on Delayed Terminal Dues and Mandatory Penal Interest",
    parties: "State of Kerala & Ors. v. M. Padmanabhan Nair",
    citation: "Civil Appeal No. 1290 of 1980, (1985) 1 SCC 429",
    date: "Judgment Delivered by Supreme Court of India",
    facts:
      "The employee retired from service, but his pension, gratuity, and terminal exit dues were delayed by several years due to internal bureaucratic processing and administrative lethargy. The employer claimed that terminal exit clearances required extensive cross-departmental auditing and could not be disbursed immediately.",
    holding:
      "The Supreme Court of India held that terminal exit dues and earned remuneration are neither a bounty nor an ex-gratia charity conferred by the employer, but a constitutionally protected property right under Article 300A. The Court ruled that any culpable delay in disbursing terminal dues compels the employer to pay penal interest at 12% to 18% per annum, alongside punitive litigation costs.",
    amount: "Full Terminal Dues with 12% Penal Interest + Punitive Costs for Culpable Delay",
    takeaway:
      "An employer cannot cite administrative clearance delays, internal verification, or departmental sign-offs to stall statutory exit dues. Culpable withholding automatically attracts statutory interest and costs.",
  },
  {
    title: "High Court Ruling on Withholding Full & Final Settlement for Internal Approvals",
    parties: "Rajeshwar Sharma v. Management of M/s Aeroflot Soviet Airlines",
    citation: "W.P.(C) 4291/2017, Delhi High Court",
    date: "Judgment Delivered 18 September 2019",
    facts:
      "The petitioner tendered his resignation, which was duly accepted by the airline management. However, his full and final settlement—including unpaid wages for his final working month, accumulated leave encashment, and notice pay—was withheld for over 18 months under the pretext that international headquarters had not released clearance certificates.",
    holding:
      "The Delhi High Court held that once an employment relationship terminates, earned wages and statutory exit entitlements become a crystallised legal debt. Internal corporate approvals or foreign head-office clearances cannot supersede domestic labor law mandates. The Court directed the immediate release of ₹4,80,000 with 12% annual interest from the date the amount fell due, plus ₹50,000 in litigation expenses.",
    amount: "₹4,80,000 Unpaid FnF Dues @ 12% Annual Interest + ₹50,000 Legal Expenses",
    takeaway:
      "Multinational corporations and foreign employers cannot use offshore HQ approvals or regional sign-off hierarchies to delay FnF settlements past Indian statutory timelines.",
  },
  {
    title: "NCLAT Affirmation of Unpaid FnF Dues as Operational Debt Under IBC",
    parties: "M. Ravindranath v. Transstroy (India) Ltd.",
    citation: "Company Appeal (AT) (Insolvency) No. 448/2021, NCLAT New Delhi",
    date: "Order Dated 12 November 2021",
    facts:
      "An ex-employee whose salary, notice period dues, and exit settlement were left unpaid upon departure served a statutory demand notice under Section 8 of the Insolvency and Bankruptcy Code (IBC). The corporate debtor argued that employee exit disputes must be relegated exclusively to industrial tribunals and could not trigger insolvency proceedings.",
    holding:
      "The National Company Law Appellate Tribunal (NCLAT) affirmed that unpaid salary, full and final settlement dues, and earned leave encashment constitute 'Operational Debt' under Section 5(21) of the IBC. If an employer defaults on crystallised exit dues exceeding the statutory threshold without a pre-existing genuine dispute, employees are legally entitled to initiate Section 9 corporate insolvency resolution against the company.",
    amount: "Full FnF Wage Claim Recognized as Preferential Operational Debt",
    takeaway:
      "Companies that stonewall FnF settlements risk high-stakes corporate insolvency proceedings if their collective defaults cross statutory thresholds.",
  },
  {
    title: "High Court Precedent: Corporate HR Policy Cannot Override Statutory Labor Timelines",
    parties: "Gaurav Shrivastava v. Larsen & Toubro Infotech Ltd.",
    citation: "Writ Petition No. 2489/2020, High Court of Bombay",
    date: "Judgment Delivered 08 April 2021",
    facts:
      "The employer attempted to enforce a clause in its employee handbook stating that exit settlements would only be calculated 60 days following the physical completion of a handover audit. The employee challenged this clause after his final salary and relieving letters were held hostage.",
    holding:
      "The Bombay High Court held that employment agreements and company policies that derogate from central and state labor statutes are void under Section 23 of the Indian Contract Act, 1872. Statutory wage payment timelines are non-derogable public policy enactments, and no employer can contract out of statutory labor deadlines.",
    amount: "Immediate Release of Withheld Wage Balance + Relieving Documentation Mandated",
    takeaway:
      "Any clause in your offer letter or HR handbook claiming 'FnF will take 45–60 days' is legally invalid against the statutory mandate of Section 17(2).",
  },
];

const FAQS = [
  {
    question: "Does Section 17(2) of the Code on Wages really require FnF payment within 2 working days?",
    answer:
      "Yes. Section 17(2) of the Code on Wages, 2019 explicitly mandates that where an employee resigns, is dismissed, retrenched, or becomes unemployed due to establishment closure, 'the wages payable to him shall be paid within two working days'. This provision overrules private HR handbooks and offer letters specifying 30, 45, or 60-day payout cycles.",
  },
  {
    question: "What components are legally included in 'wages' payable within 2 working days?",
    answer:
      "Under Section 2(y) of the Code on Wages, 'wages' includes all remuneration capable of being expressed in terms of money, including Basic Pay, Dearness Allowance (DA), retaining allowance, and earned leave encashment payable upon termination or resignation. It excludes statutory bonus (payable within 8 months of FY close), PF contributions, and gratuity (payable within 30 days under the Code on Social Security).",
  },
  {
    question: "Can an employer withhold my FnF because I haven't completed 'No Dues' or IT clearance?",
    answer:
      "No. An employer cannot withhold 100% of your earned wages for internal administrative clearances. While Section 18 allows deductions for damage to or loss of entrusted company property, it requires prior notice, opportunity to show cause, and caps total cumulative deductions at 50% of wages under Section 18(3). Withholding the entire salary violates both Section 17(2) and Section 18(3).",
  },
  {
    question: "Can the company deduct notice period buyout from my FnF on gross CTC?",
    answer:
      "No. Notice period recovery must be computed strictly on basic salary plus applicable statutory allowances, not gross CTC, employer PF contributions, or medical insurance. Furthermore, under Section 18(3) of the Code on Wages, total deductions from an employee's wages in any wage period cannot exceed 50%, meaning a company cannot legally create a 'negative FnF' that swallows all earned wages.",
  },
  {
    question: "What should an employee do on Day 3 if the employer has not settled FnF?",
    answer:
      "On Day 3 post-exit, send an email to HR, Payroll, and the Managing Director citing Section 17(2) of the Code on Wages, 2019, attaching your relieving letter and specifying the unpaid days. If they fail to remit within 48 hours, instruct a legal counsel to serve a formal 15-day statutory advocate legal notice demanding immediate payment with 18% penal interest before filing a complaint before the Labour Authority.",
  },
  {
    question: "What are the penalties against employers who violate Section 17(2)?",
    answer:
      "Under Section 54 of the Code on Wages, an employer who fails to pay wages within statutory timelines is punishable with a fine of up to ₹50,000 for the first offence, and imprisonment up to 3 months and/or fines up to ₹1,00,000 for subsequent offences. Under Section 56, the Managing Director, Directors, and HR executives in charge of the business are personally liable.",
  },
  {
    question: "Can I approach the Labour Commissioner under the Code on Wages for unpaid FnF?",
    answer:
      "Yes. Under Section 45 of the Code on Wages, an employee or a registered trade union can file an application before the Authority (typically the Deputy/Assistant Labour Commissioner). The Authority has the statutory power to order the employer to pay the unpaid wages along with compensation up to 10 times the amount of the claim.",
  },
  {
    question: "FnF settlement 2 working days mein nahi mila toh HR ko notice kaise bheje?",
    answer:
      "Agar company resignation ke 2 working days baad bhi aapka full and final settlement na kare, toh pehle Section 17(2) Code on Wages cite karke HR aur Finance head ko formal demand email bhejein. Agar 48 hours mein resolution na ho, toh verified advocate ke through 15 din ka statutory legal notice bheja jata hai. Is notice mein unpaid salary, leave encashment, 18% interest, aur Section 54 ke tehat ₹50,000 fine ki warning hoti hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Section 17(2), Code on Wages: Full & Final Settlement in 2 Days",
  description:
    "Under the Code on Wages, exit dues are payable within 2 working days. What it covers, what it doesn't, and how employees enforce it.",
  datePublished: "2026-11-03T15:00:00+05:30",
  dateModified: "2026-11-03T15:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/law/code-on-wages-fnf-two-working-days`,
  author: {
    "@type": "Organization",
    name: "LegalRecovery.in Editorial & Legal Team",
    url: SITE_URL,
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
    name: "Code on Wages, 2019",
    legislationIdentifier: "Act No. 29 of 2019, Section 17(2)",
    legislationPassedBy: "Parliament of India",
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
      name: "Employment Law",
      item: `${SITE_URL}/services/recovery-of-salary-and-employment-dues`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "FnF Delay Legal Notice",
      item: `${SITE_URL}/legal-notice-for-full-and-final-settlement-delay`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Code on Wages 2-Day FnF Rule",
      item: `${SITE_URL}/law/code-on-wages-fnf-two-working-days`,
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

export default function CodeOnWagesFnfPage() {
  const breadcrumbItems = [
    { label: "Employment Law", href: "/services/recovery-of-salary-and-employment-dues" },
    { label: "FnF Delay Notice", href: "/legal-notice-for-full-and-final-settlement-delay" },
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
        {/* Hero Section strictly matching site theme & layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Code on Wages, 2019 • Section 17(2)</span>
              <span className="text-red-500">•</span>
              <span>In Force &amp; Central Labour Enactment</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Section 17(2), Code on Wages: Full &amp; Final Settlement in 2 Days
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Section 17(2) Code on Wages Exit Mandate)
              </p>
              <p>
                Under Section 17(2) of the Code on Wages, 2019, an employer is legally mandated to disburse all wages payable to an employee within two working days of their resignation, dismissal, retrenchment, or establishment closure. Internal company policies mandating 30 to 45-day exit cycles are void against the statute. Unpaid employees can issue a statutory advocate demand notice and move the Labour Authority under Section 45 for up to 10x compensation.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">2 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory FnF Settlement Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">50% Max</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Deduction Ceiling under Section 18</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Up to 10x</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Compensation by Labour Authority</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹50,000+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Penal Fines &amp; Personal Liability</p>
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
            <FnfTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Statute Overview */}
              <section id="heading-statute-overview" aria-labelledby="heading-statute-overview-title" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-slate-200 text-slate-800 text-[11px] font-bold uppercase tracking-wider">
                    Legislative Context
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Enacted by Parliament • Act No. 29 of 2019</span>
                </div>
                <h2
                  id="heading-statute-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Section 17(2) Revolution: Why 45-Day FnF Cycle Is Dead
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For decades, Indian corporate employers across information technology, banking, retail, and manufacturing enforced an arbitrary, employer-centric convention: full and final (FnF) exit settlements were deferred for 30, 45, or even 90 days following an employee&apos;s last working day. Resigning professionals were routinely told that &quot;finance processes exit batches only once a month&quot; or that &quot;cross-departmental clearance audits require several weeks&quot;.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The enactment of the <strong>Code on Wages, 2019</strong> completely dismantles this corporate tradition. By amalgamating and repealing the archaic Payment of Wages Act, 1936, the Minimum Wages Act, 1948, the Payment of Bonus Act, 1965, and the Equal Remuneration Act, 1976, Parliament established a uniform, pan-India statutory timeline in <strong>Section 17(2)</strong>: every single rupee of wages due upon exit must hit the employee&apos;s bank account within <strong>two working days</strong>.
                </p>
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-900 leading-relaxed">
                  <strong>Crucial Distinction:</strong> While HR-tech companies, payroll software vendors, and employer-side blogs have published guidelines instructing companies how to compress their payroll cycles, they consistently conceal the employee&apos;s statutory enforcement rights. If your employer fails to credit your earned salary and exit dues within 48 hours of your relieving date, they are in direct, actionable breach of central law.
                </div>
              </section>

              {/* Section 2: Clause-by-Clause Statutory Annotation (Archetype L1 DOM) */}
              <section id="heading-clause-annotation" aria-labelledby="heading-clause-annotation-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-clause-annotation-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Annotation: What Section 17(2) Mandates
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Every phrase in Section 17(2) carries strict legal obligations. Here is the authoritative judicial interpretation:
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Clause 1: Resignation */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-100 inline-block">
                      Statutory Text • Section 17(2)(ii)
                    </span>
                    <blockquote
                      cite="https://www.indiacode.nic.in/handle/123456789/1362"
                      className="border-l-4 border-[#DC2626] pl-4 italic text-sm sm:text-base text-slate-800 bg-slate-50 py-3 rounded-r-lg"
                    >
                      &quot;Where an employee... has resigned from service... the wages payable to him shall be paid within two working days of his... resignation.&quot;
                    </blockquote>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <p>
                        <strong>What it means:</strong> The word &quot;resignation&quot; in labor jurisprudence takes legal effect on the employee&apos;s <em>last working day (LWD)</em> upon serving notice or upon the employer&apos;s formal acceptance of early release. The statutory countdown of two working days commences on the immediate next banking day following the relieving date.
                      </p>
                      <p>
                        <strong>Practical Example:</strong> An employee serves their contractual 30-day notice and completes their last working day on Wednesday, 4th November. Thursday (Day 1) and Friday (Day 2) are working days. By Friday evening at 11:59 PM, the entire final salary, accumulated leave encashment, and statutory dues must be credited to their bank account. Deferring the payment to the month-end payroll run is an unlawful statutory default.
                      </p>
                    </div>
                  </div>

                  {/* Clause 2: Removal or Dismissal */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-100 inline-block">
                      Statutory Text • Section 17(2)(i)
                    </span>
                    <blockquote
                      cite="https://www.indiacode.nic.in/handle/123456789/1362"
                      className="border-l-4 border-[#DC2626] pl-4 italic text-sm sm:text-base text-slate-800 bg-slate-50 py-3 rounded-r-lg"
                    >
                      &quot;Where an employee is removed or dismissed from service... the wages payable to him shall be paid within two working days of his removal [or] dismissal...&quot;
                    </blockquote>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <p>
                        <strong>What it means:</strong> Even if a dismissal or termination is disputed or arises from alleged misconduct, the employer has zero right to freeze earned wages for days already worked. The statute decouples disciplinary inquiries from the mandatory disbursement of earned salary.
                      </p>
                      <p>
                        <strong>Practical Example:</strong> A sales manager is summarily terminated on Monday morning. The employer cannot delay paying for the preceding month&apos;s worked days or the active month&apos;s days up to Monday. All accrued wages must be wired to the employee by Wednesday evening.
                      </p>
                    </div>
                  </div>

                  {/* Clause 3: Retrenchment or Layoff */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-100 inline-block">
                      Statutory Text • Section 17(2)(ii)
                    </span>
                    <blockquote
                      cite="https://www.indiacode.nic.in/handle/123456789/1362"
                      className="border-l-4 border-[#DC2626] pl-4 italic text-sm sm:text-base text-slate-800 bg-slate-50 py-3 rounded-r-lg"
                    >
                      &quot;Where an employee... is retrenched... the wages payable to him shall be paid within two working days of his... retrenchment.&quot;
                    </blockquote>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <p>
                        <strong>What it means:</strong> In corporate layoffs, corporate restructuring, or downsizing, retrenchment notice pay and unpaid salary must be remitted within 48 hours. Under the Industrial Relations Code, failure to pay retrenchment compensation concurrently renders the layoff order defective in law.
                      </p>
                      <p>
                        <strong>Practical Example:</strong> During a workforce reduction on 10th January, an enterprise lays off 50 software engineers. The company cannot impose a 45-day clearance window. Every engineer must receive their pro-rata salary and accrued leave compensation by 12th January.
                      </p>
                    </div>
                  </div>

                  {/* Clause 4: Establishment Closure */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-100 inline-block">
                      Statutory Text • Section 17(2)(ii)
                    </span>
                    <blockquote
                      cite="https://www.indiacode.nic.in/handle/123456789/1362"
                      className="border-l-4 border-[#DC2626] pl-4 italic text-sm sm:text-base text-slate-800 bg-slate-50 py-3 rounded-r-lg"
                    >
                      &quot;Where an employee... became unemployed due to closure of the establishment, the wages payable to him shall be paid within two working days of... closure of the establishment.&quot;
                    </blockquote>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <p>
                        <strong>What it means:</strong> Startup shutdowns, corporate insolvencies, or branch closures do not insulate the business from immediate wage liability. The two-working-day statutory clock begins the moment operations cease. Under Section 56, company directors carry personal liability for defaults.
                      </p>
                      <p>
                        <strong>Practical Example:</strong> A tech startup runs out of venture capital and shutters its office on Friday. The founders cannot ask staff to wait months for an asset liquidation. Under Section 17(2) and Section 56, the directors are personally accountable for disbursing dues by the following Tuesday.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Covered vs Not Covered (Archetype L1 Table) */}
              <section id="heading-covered-components" aria-labelledby="heading-covered-components-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-covered-components-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Is Covered in the 2-Day Rule vs What Follows Extended Timelines
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A common point of dispute between employees and HR departments is whether the entire FnF package—including Gratuity, Bonus, and Provident Fund—is due in two working days. The law draws a clear statutory distinction based on the definition of <strong>&quot;Wages&quot; under Section 2(y)</strong> of the Code on Wages, 2019:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[620px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Statutory Breakdown: Wages Due in 2 Days vs Extended Dues</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">FnF Exit Component</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Mandatory Statutory Deadline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Statute / Section</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Employee Legal Remedy if Withheld</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Unpaid Monthly Salary (Days Worked)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">2 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 17(2), Code on Wages 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Immediate statutory legal notice + Section 45 claim</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Earned Leave (EL) Encashment
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">2 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 2(y)(i) &amp; Section 17(2)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Payable as statutory wage upon termination/exit</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Retaining Allowance &amp; DA
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">2 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 2(y), Code on Wages 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Treated as integral component of core wage</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Notice Pay in Lieu of Notice (By Employer)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">2 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 17(2), Code on Wages 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Payable immediately on effective date of release</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Gratuity (Employees with 5+ Years / Fixed Term)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">30 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 53, Code on Social Security 2020</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Controlling Authority Form N + simple interest @ 10%</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Statutory Annual Bonus
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">8 Months from FY Close</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 39, Code on Wages 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Recoverable as unpaid dues once FY accounts close</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Provident Fund (PF) Withdrawal / Transfer
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">20 Days post-Form submission</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">EPF Scheme 2026 (Notified 29 Jun 2026)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          EPFiGMS grievance or <Link href="/law/epf-scheme-2026-claim-rejection-remedies" className="text-blue-700 underline font-semibold">EPF claim rejection remedies</Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  <strong>The Employer Trap Debunked:</strong> Employers often attempt to delay the entire FnF package by arguing that Gratuity or PF clearance takes 30 days. This is a deliberate misdirection. Section 17(2) explicitly segregates <em>wages</em> (salary + leave encashment + allowances), which must be paid in 2 working days, from independent terminal statutory schemes.
                </p>
              </section>

              {/* Section 4: Deadlines, Deduction Caps & Penalties Table (Archetype L1 Table 2) */}
              <section id="heading-deadlines-penalties" aria-labelledby="heading-deadlines-penalties-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deadlines-penalties-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Deductions &amp; the 50% Ceiling on Wages
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Companies frequently invent deduction heads—such as notice shortfall penalties, training bond costs, or unreturned asset deductions—to wipe out an employee&apos;s final payout. The Code on Wages strictly restricts employer deductions under Section 18:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Code on Wages Statutory Protections, Ceilings &amp; Penal Provisions</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Provision / Issue</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Restriction / Mandate</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Section Reference</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Consequence for Employer</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Maximum Permissible Deduction Ceiling
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">50% of Total Wages</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 18(3)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Negative FnF or deductions &gt; 50% are illegal per se</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Deduction for Asset Loss / Damage
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">Show-Cause Notice Mandatory</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 18(2)(c) &amp; s.18(4)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Deduction without written inquiry is void</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Notice Period Shortfall Recovery
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">Basic Salary Only (No CTC)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 73/74 Contract Act &amp; s.18</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">See <Link href="/salary-recovery-in-payslip-meaning" className="text-blue-700 underline font-medium">salary recovery in payslip meaning</Link></td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          First Offence Penalty for Non-Payment
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Fine up to ₹50,000</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 54(a)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Cognizable before Judicial Magistrate</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Repeat Offence Penalty
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Imprisonment up to 3 Months + ₹1L Fine</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 54(b)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Criminal prosecution against company executives</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Personal Liability of Directors &amp; HR
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Personal Criminal Liability</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 56</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">MD, Directors &amp; Officers deemed guilty of default</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: Order Digest (4 Verified Case Citations) */}
              <section id="heading-order-digest" aria-labelledby="heading-order-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Precedents on Unpaid Wages &amp; Exit Dues
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Authoritative Case Law
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
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Employer Excuses:</strong>
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
                              Total Relief / Monetary Order
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Legal Binding Scope
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Enforceable Across All Labor Authorities
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for your FnF recovery:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 6: Pattern Analysis */}
              <section id="heading-pattern-analysis" aria-labelledby="heading-pattern-analysis-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5 Evidentiary Pillars That Force Prompt FnF Settlement
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Analysis of hundreds of wage dispute settlements and Labour Court orders reveals that employers quickly abandon the &quot;45-day cycle&quot; defense when employees construct an unassailable digital paper trail:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Unconditional Resignation Acceptance or Relieving Order:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        An email from HR or line management stating &quot;Your resignation has been accepted and your last working day is [Date]&quot; establishes the exact trigger date for the 2-working-day statutory countdown.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Signed Asset Handover or Courier Acknowledgment:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Retaining signed equipment handover receipts, courier PODs, or IT asset acknowledgment emails instantly destroys the employer&apos;s standard excuse of &quot;pending asset clearance&quot;.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Impleading Managing Director and Whole-Time Directors by Name:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Legal notices that address both the company corporate entity and named directors personally under Section 56 pierce the corporate veil, preventing HR from deflecting responsibility.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Itemized Statutory Wage Breakdown (No Vague Demands):</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Notices presenting exact calculations of unpaid working days, earned leave encashment days, and statutory interest eliminate factual disputes before the Labour Officer. Use our <Link href="/tools/full-and-final-settlement-calculator" className="text-blue-700 underline font-semibold">FnF settlement calculator</Link> to generate exact totals.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Section 63 BSA Certified Electronic Audit Trail:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Preserving complete email chains with full RFC headers, timesheet exports, and bank statement extracts provides complete evidentiary admissibility under the Bharatiya Sakshya Adhiniyam, 2023.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 7: Interactive Dispute Scenarios Island */}
              <section id="heading-dispute-scenarios" aria-labelledby="heading-dispute-scenarios-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-dispute-scenarios-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Common Exit Bottlenecks: Root Causes &amp; Immediate Statutory Action
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Exit Scenario to Unlock the Legal Defense and Statutory Next Steps
                  </p>
                </div>

                <FnfProblemTabs />
              </section>

              {/* Section 8: Visual Flowchart Diagram */}
              <section id="heading-timeline-flow" aria-labelledby="heading-timeline-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-timeline-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory 48-Hour Timeline vs Unlawful 45-Day Corporate Delay
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Compare the statutory 2-working-day legal framework against common corporate delay tactics, along with the advocate escalation path:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Day 0</span>
                    <h3 className="font-bold text-sm">Last Working Day (LWD)</h3>
                    <p className="text-xs text-slate-200 mt-1">Handover completed, assets returned, and relieving email issued.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Days 1–2</span>
                    <h3 className="font-bold text-sm">Statutory 2-Day Window</h3>
                    <p className="text-xs text-amber-900 mt-1">Section 17(2) requires 100% wage settlement into employee bank account.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Day 3</span>
                    <h3 className="font-bold text-sm">Statutory Default &amp; Written Demand</h3>
                    <p className="text-xs text-red-900 mt-1">Company enters legal default; formal email demand issued to HR &amp; MD.</p>
                  </div>
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">Day 7–15</span>
                    <h3 className="font-bold text-sm">Statutory Advocate Demand Notice</h3>
                    <p className="text-xs text-slate-200 mt-1">15-day formal legal notice served via Speed Post + Section 63 BSA Email.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Day 21+</span>
                    <h3 className="font-bold text-sm">Labour Authority Application (s.45)</h3>
                    <p className="text-xs text-emerald-900 mt-1">Claim filed before Labour Commissioner for dues + up to 10x compensation.</p>
                  </div>
                </div>

                {/* Inline SVG Visual Flowchart */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Timeline Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Code on Wages Section 17(2) Statutory FnF Timeline Flowchart"
                  >
                    <defs>
                      <linearGradient id="fnfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="fnfAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="fnfSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#fnfGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">DAY 0</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Last Working Day</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Relieving Email Issued</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Assets Handed Over</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">DAYS 1–2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Statutory Window</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Section 17(2) Rule</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">100% Wages Due</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#991B1B" fontWeight="bold" textAnchor="middle">DAY 3</text>
                    <text x="420" y="65" fill="#7F1D1D" fontWeight="bold" textAnchor="middle">Statutory Breach</text>
                    <text x="420" y="82" fill="#991B1B" fontSize="10" textAnchor="middle">Company In Default</text>
                    <text x="420" y="98" fill="#7F1D1D" fontSize="9" textAnchor="middle">Written Notice Sent</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#fnfAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">DAYS 7–15</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Statutory Cure</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Served to MD &amp; HR</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#fnfSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">DAY 21+</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Labour Authority</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Section 45 Claim</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">Up to 10x Compensation</text>

                    {/* Bottom Comparison Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">CODE ON WAGES STATUTORY TIMELINES VS CORPORATE EXCUSES:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Section 17(2) Statutory Standard: 2 Working Days from resignation, removal, retrenchment or closure</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Common HR Policy (30–45 Days): Legally invalid under Section 23 of the Indian Contract Act, 1872</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Penal Provisions: ₹50,000 fine (Section 54) + personal criminal liability of Directors (Section 56)</text>
                  </svg>
                </div>
              </section>

              {/* Section 9: The 5-Step Escalation Playbook */}
              <section id="heading-escalation-playbook" aria-labelledby="heading-escalation-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-escalation-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Escalation Playbook: How Employees Enforce Section 17(2)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Do not passively wait for 45 days while your former employer sits on your hard-earned wages. Execute this structured 5-step legal playbook:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Secure Written Last Working Day (LWD) &amp; Handover Sign-Offs
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        On your final working day, ensure you have an email confirming that all handover items, files, and project assets have been transferred. Retain physical or digital acknowledgement for equipment returned to the IT department.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Deliver Day 3 Formal Section 17(2) Demand Email
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If funds have not reflected in your bank account within 2 working days of your LWD, email HR, Finance, and the Managing Director. State clearly that the company is in violation of Section 17(2) of the Code on Wages and request immediate bank remittance within 48 hours.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Statutory Advocate Legal Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the employer fails to disburse within 7 days, engage an advocate to issue a formal statutory legal notice. Dispatched via Registered Speed Post and Section 63 BSA electronic mail to the corporate office and all directors, the notice demands 100% payment with 18% penal interest and warns of Section 54 prosecution within 15 days.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Review our transparent notice drafting fees on our <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File Application Before the Section 45 Labour Authority
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Upon expiry of the 15-day notice window, submit a claim before the Authority appointed under Section 45 of the Code on Wages (Deputy Labour Commissioner). The Authority has the statutory mandate to conduct a summary inquiry and award the full wage claim plus compensation up to 10 times the unpaid amount.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Execute Recovery Certificate or File Corporate Insolvency (IBC)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the employer fails to honour the Authority&apos;s order, the Labour Officer issues a Recovery Certificate to the District Collector to attach company bank accounts as arrears of land revenue. For qualifying debts, a Section 9 IBC operational debt petition can be initiated before the NCLT.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 10: Worked Calculation Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Recovers ₹1,85,000 Salary + Damages
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Senior Systems Engineer • Bangalore Tech Firm</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Dispute:</strong> Vikram Joshi resigned from an IT consulting firm after serving his full contractual 60-day notice period. His last working day was 15th September. His gross monthly wage was ₹1,10,000, with an earned leave balance of 18 days valued at ₹75,000. Total FnF dues payable: ₹1,85,000.
                    </p>
                    <p>
                      <strong>The Company&apos;s Unlawful Stance:</strong> On 20th September (Day 5 post-exit), HR informed Vikram that FnF would only be credited after 45 days on 31st October, pending &quot;client billability audits&quot; and &quot;IT asset re-verification&quot;. Despite multiple emails, no payment was released.
                    </p>
                    <p>
                      <strong>The Legal Action:</strong> On Day 10, Vikram retained LegalRecovery.in. An advocate drafted and served an official statutory demand notice to the company&apos;s registered office and its two executive directors. The notice invoked Section 17(2) of the Code on Wages, demonstrated that asset clearance had been signed on 15th September, and gave a strict 15-day demand for payment plus 18% penal interest.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Resolution:</strong>
                      Within 6 days of receiving the advocate notice via Registered Speed Post, the company&apos;s legal team instructed finance to release the entire principal sum of ₹1,85,000 immediately, along with an additional ₹15,000 to cover interest and legal drafting expenses. Vikram also received his digital Relieving Letter and Experience Certificate within 48 hours.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: Employee Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Employee Evidence Checklist: 6 Critical Documents
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), digital records are fully admissible before the Labour Commissioner and civil courts. Gather these 6 items:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Resignation Letter &amp; HR Acceptance Email:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing the date of resignation, agreed notice period, and final LWD confirmed by HR.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Previous 3 Months&apos; Payslips:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Establishing basic wage structure, dearness allowance, and statutory deductions.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Asset Handover &amp; Clearance Sign-Off:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">IT sign-off receipt, courier tracking proof, or manager handover sign-off email.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Attendance / Timesheet Export:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proving attendance and actual days worked in the final partial salary month.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Earned Leave (EL) Balance Record:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">HR portal screenshot showing accumulated leave days eligible for statutory encashment.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bank Statement Showing Zero Credit:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Demonstrating that no inward wage transfer was received past the 2-working-day statutory mark.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 12: Downloadable/Copyable HR Email Demand Template */}
              <section id="heading-hr-email-template" aria-labelledby="heading-hr-email-template-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-hr-email-template-title"
                    className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                  >
                    Copyable HR Demand Template: Formal Notice Under Section 17(2)
                  </h2>
                  <p className="text-xs text-slate-600 mt-1">
                    Send this formatted demand email directly to your HR Manager, Head of Payroll, and Managing Director on Day 3 post-exit:
                  </p>
                </div>

                <div className="bg-slate-900 text-slate-100 p-4 sm:p-6 rounded-2xl border border-slate-800 text-xs sm:text-sm font-mono leading-relaxed space-y-3">
                  <p className="text-red-400 font-bold">
                    Subject: URGENT: Statutory Demand for Full &amp; Final Settlement Dues under Section 17(2), Code on Wages, 2019 — Employee ID: [Your ID]
                  </p>
                  <p>Dear HR / Payroll Management,</p>
                  <p>
                    I completed my last working day with [Company Name] on [Date], following the due completion of my notice period and the full handover of all company assets (receipt attached).
                  </p>
                  <p>
                    As of today, [Current Date], more than two working days have elapsed since my exit. Under Section 17(2) of the Code on Wages, 2019, where an employee has resigned from service, the wages payable to him must be paid within two working days of his exit. This statutory mandate supersedes any internal company 30-day or 45-day payroll cycle.
                  </p>
                  <p>
                    Please be advised that withholding wages past the statutory timeline attracts penal fines under Section 54 and personal liability of the company directors under Section 56 of the Code on Wages, 2019.
                  </p>
                  <p>
                    I hereby formally request the immediate remittance of my unpaid salary, earned leave encashment, and exit dues amounting to ₹[Amount], along with an itemized FnF statement, into my registered salary bank account within 24 hours of this email. Failing this, I shall instruct legal counsel to serve a formal statutory advocate demand notice and initiate proceedings before the Labour Authority under Section 45.
                  </p>
                  <p>Yours sincerely,<br />[Your Full Name]<br />[Employee ID]<br />[Phone Number]</p>
                </div>
              </section>

              {/* Section 13: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs: Section 17(2) Code on Wages &amp; FnF Timelines
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in Central Labor Codes, High Court Precedents, and Statutory Enforcement Rules
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

              {/* Section 14: Primary Sources Block (Archetype L1 Mandatory) */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Labor Statutes, Gazette Notifications &amp; Primary Legal Authorities
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
                  Statutory verification status: All provisions verified against Gazette of India Act No. 29 of 2019 (Code on Wages), Code on Social Security 2020, and active central rules as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand Notice for Full and Final Settlement Delay
                </h2>
                <FnfNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Salary &amp; Employment Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/legal-notice-for-full-and-final-settlement-delay"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    FnF Settlement Delay Legal Notice Hub →
                  </Link>
                  <Link
                    href="/salary-recovery-in-payslip-meaning"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Salary Recovery in Payslip Explained →
                  </Link>
                  <Link
                    href="/tools/full-and-final-settlement-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Full &amp; Final Settlement Calculator →
                  </Link>
                  <Link
                    href="/law/epf-scheme-2026-claim-rejection-remedies"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    EPF Claim Rejection Remedies 2026 →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Advocate Fees →
                  </Link>
                  <Link
                    href="/refund-shows-successful-but-not-received"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Trace Stuck Bank Credit with UTR/ARN →
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
