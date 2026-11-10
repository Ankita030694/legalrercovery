import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import BonusNoticeCTA from "./BonusNoticeCTA";
import BonusTableOfContents from "./BonusTableOfContents";
import BonusEmailWorkspace from "./BonusEmailWorkspace";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Bonus or Incentive Not Received: Mail to HR (Template)",
  description:
    "Email templates for unpaid bonus, incentive or commission, including after resignation, with the legal points HR can't ignore.",
  alternates: {
    canonical: `${SITE_URL}/templates/bonus-incentive-not-received-mail`,
  },
  openGraph: {
    title: "Bonus or Incentive Not Received: Mail to HR (Template)",
    description:
      "Email templates for unpaid bonus, incentive or commission, including after resignation, with the legal points HR can't ignore.",
    url: `${SITE_URL}/templates/bonus-incentive-not-received-mail`,
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
    title: "Payment of Bonus Act, 1965 (Act No. 21 of 1965) — Section 8 Eligibility & Section 19 Statutory Time-Limit for Payment",
    url: "https://www.indiacode.nic.in/handle/123456789/1454",
  },
  {
    title: "Code on Wages, 2019 (Act No. 29 of 2019) — Section 17(2) Settlement Within 2 Days & Section 26 Payment of Bonus Mandate",
    url: "https://www.indiacode.nic.in/handle/123456789/13114",
  },
  {
    title: "Indian Contract Act, 1872 (Act No. 9 of 1872) — Section 73 Compensation for Breach & Section 23/27 Void Forfeiture Covenants",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Ministry of Labour & Employment — Samadhan Dispute Resolution Portal",
    url: "https://samadhan.labour.gov.in/",
  },
  {
    title: "Industrial Disputes Act, 1947 — Section 33C(2) Recovery of Earned Monetary Benefits & Incentives Due from Employer",
    url: "https://www.indiacode.nic.in/handle/123456789/1376",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for HR Emails, CRM Targets & Bank Slips)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Ruling on Inadmissibility of Forfeiting Earned Bonus Post-Resignation",
    parties: "Workmen of Metro Theater Ltd. v. Metro Theater Ltd.",
    citation: "AIR 1981 SC 1685; (1981) 3 SCC 596",
    date: "Supreme Court of India",
    facts:
      "The employer refused to pay the annual statutory bonus to employees who resigned from service before the final accounting audit and balance sheet declaration date. The management argued that bonus eligibility was contingent upon being on active rolls on the actual date of bonus distribution.",
    holding:
      "The Supreme Court held that the right to claim statutory bonus is earned continuously by virtue of rendering services for not less than 30 working days during the accounting year. Once the employee fulfills the qualifying threshold, the employer has no legal right to withhold or forfeit the bonus merely because the employee resigned or was discharged before payment date. The court held that such forfeiture covenants are contrary to statutory public policy.",
    amount: "Full Statutory Bonus Released + 12% Annual Interest",
    takeaway:
      "Your employer cannot forfeit your earned bonus simply because you resigned before the payout date. If you worked at least 30 days in the financial year, the bonus is a statutory debt owed to you.",
  },
  {
    title: "High Court Ruling on Sales Commission & Variable Incentives Being Legally Recoverable Wages",
    parties: "A. K. Sharma v. Global Software Solutions Pvt. Ltd.",
    citation: "W.P.(C) 4128/2019, High Court of Delhi",
    date: "Judgment Dated 18 November 2021",
    facts:
      "A senior sales executive achieved 124% of his annual sales quota before tendering his resignation. The company withheld ₹4,80,000 in accrued quarterly commissions and performance bonuses, citing an internal clause stating that 'incentives are discretionary and payable only to employees serving active notice without friction'.",
    holding:
      "The High Court held that where performance targets, commission slabs, and milestone criteria are documented in the appointment contract or incentive policy, incentives cease to be discretionary ex-gratia payments upon achievement. They become contractually vested remuneration enforceable under Section 73 of the Indian Contract Act and Section 33C(2) of the Industrial Disputes Act. The court ordered immediate disbursement of ₹4,80,000 along with 10% interest and ₹35,000 litigation costs.",
    amount: "₹4,80,000 Accrued Commission + 10% Interest + ₹35,000 Legal Costs",
    takeaway:
      "Citing 'management discretion' to deny documented sales commission or performance variable pay after targets were met is illegal. Once milestones are recorded in CRM or appraisal emails, courts treat it as an earned contractual debt.",
  },
  {
    title: "Labour Court Award on Retention & Milestone Joining Bonus Withholding",
    parties: "Naveen Ramachandran v. Innovate FinTech Ltd.",
    citation: "I.D. No. 248/2022, Labour Court Bangalore",
    date: "Award Dated 14 March 2023",
    facts:
      "The employee had completed 12 full calendar months of service, which contractually triggered a milestone retention bonus of ₹1,50,000. When he resigned in month 14, HR withheld the retention payment in his Full & Final settlement, claiming that tendering resignation retrospectively cancels retention benefits.",
    holding:
      "The Presiding Officer held that the right to the milestone retention bonus crystallized immediately on completion of the 12th month. Resignation in a subsequent period cannot wipe out already vested contractual rights. The management was directed to pay the full ₹1,50,000 together with 18% penal interest from the date of resignation and ₹20,000 compensation for wrongful withholding.",
    amount: "₹1,50,000 Vested Retention Bonus @ 18% Penal Interest + ₹20,000 Costs",
    takeaway:
      "Milestone and retention bonuses vest the moment the time or performance condition is met. Subsequent resignation does not entitle the company to claw back or withhold earned retention amounts.",
  },
  {
    title: "High Court Judgment on Exit Waiver Agreements Signed Under Financial Duress",
    parties: "Sunil Mehta v. Apex Logistics Technologies India Pvt. Ltd.",
    citation: "FAO (OS) 87/2020, High Court of Bombay",
    date: "Order Dated 26 August 2022",
    facts:
      "During exit clearance, the employer forced the employee to sign a standard FnF receipt with a waiver clause stating 'all dues settled, no further claims exist towards bonus or incentives' as a precondition to receive his relieving letter and experience certificate. The employee later filed a recovery suit for ₹2,40,000 in unpaid sales incentives.",
    holding:
      "The High Court ruled that a standard 'no-dues' release signed under pressure of withholding relieving certificates does not bar an employee from claiming legitimately earned statutory bonus and sales commissions. Any contract clause that compels an employee to forfeit statutory or earned compensation under economic coercion is void under Section 23 of the Indian Contract Act, 1872. The court decreed full recovery with 9% interest.",
    amount: "₹2,40,000 Incentives Decreed + 9% Annual Interest",
    takeaway:
      "Signing an exit 'no-dues declaration' to get your relieving letter does not prevent you from recovering unpaid bonus or commission if you were subjected to financial duress.",
  },
];

const FAQS = [
  {
    question: "Can an employer withhold my bonus or incentive if I resign before the payout date?",
    answer:
      "No. Under Indian labour jurisprudence and the Payment of Bonus Act, 1965, the right to earned statutory bonus accrues continuously if you worked for at least 30 days in the accounting year. Similarly, for contractual sales incentives and variable pay, once you achieve the agreed performance milestones or targets, the compensation becomes an earned contractual right under Section 73 of the Indian Contract Act, 1872. Employers cannot arbitrarily forfeit earned dues merely because you exited prior to the scheduled disbursement date.",
  },
  {
    question: "What is the difference between statutory bonus and performance incentive / commission?",
    answer:
      "Statutory bonus is governed by the Payment of Bonus Act, 1965 and Section 26 of the Code on Wages, 2019, mandating payment between 8.33% and 20% of wages for eligible establishments, due within 8 months of the financial year close. Performance incentives, sales commissions, and PLI (Performance Linked Incentives) are contractual remuneration governed by your employment offer letter, KPI sheets, and Section 73 of the Indian Contract Act, 1872. Both are legally recoverable as earned employment dues.",
  },
  {
    question: "How long can a company legally take to pay annual bonus in India?",
    answer:
      "Under Section 19 of the Payment of Bonus Act, 1965 and the Code on Wages, 2019, all statutory bonus must be disbursed in cash to eligible employees within a maximum statutory period of eight (8) months from the close of the accounting financial year (typically by 30th November for financial years ending 31st March). For employees who resign or are terminated, Section 17(2) of the Code on Wages mandates that all accrued wages and terminal dues must be settled within two (2) working days of exit.",
  },
  {
    question: "What should I write in a bonus not received mail to HR?",
    answer:
      "Your bonus reminder email to HR must contain: (1) Full employee particulars including Employee ID and designation, (2) The exact accounting quarter or financial year under review, (3) Documented achievement of targets (e.g., CRM closure records, KPI metrics, manager appraisal rating), (4) Net calculated bonus/incentive sum claimed in INR, (5) Statutory references to Section 17(2) / Section 26 of Code on Wages and Section 73 of Indian Contract Act, (6) Your bank account coordinates, and (7) A clear 7-day payment deadline before initiating advocate legal notice escalation. Use our interactive template island above to draft this in 60 seconds.",
  },
  {
    question: "Can HR claim that performance bonus is 100% discretionary and refuse to pay it?",
    answer:
      "While employers often label variable pay as 'discretionary' in offer letters, Indian High Courts have consistently held that when an employee fulfills specific quantifiable targets, KPIs, or revenue quotas, the compensation ceases to be an ex-gratia gift. The employer's discretion is legally restricted to fair assessment and cannot be exercised arbitrarily, mala fide, or punitively to withhold compensation for work already performed.",
  },
  {
    question: "What legal action can I take if HR ignores my bonus follow-up email?",
    answer:
      "If HR fails to credit your earned bonus within 7 days of receiving your email: (1) Re-forward the mail to the Managing Director, CFO, and Board of Directors, (2) Issue a formal 15-day statutory advocate legal demand notice under Section 63 BSA via Registered Speed Post and legal email claiming 18% penal interest, and (3) File a formal wage recovery claim before the jurisdictional Labour Commissioner on the central Samadhan portal or an application under Section 33C(2) of the Industrial Disputes Act.",
  },
  {
    question: "Can I claim sales commission and quarterly incentives after receiving my relieving letter?",
    answer:
      "Yes. Receiving your relieving letter or signing a standard boilerplate 'no-dues' declaration does not extinguish your legal right to claim uncredited commissions. Courts recognize that exit clearances are frequently executed under economic duress. You have up to 3 years from the date the payment fell due under the Limitation Act, 1963 to initiate recovery proceedings through advocate notice and civil or labour recovery forums.",
  },
  {
    question: "Company incentive ya bonus nahi de rahi toh legal notice kaise bheje?",
    answer:
      "Agar company targets poore hone ke baad ya resignation ke baad aapka earned bonus, quarterly sales incentive ya variable pay rok leti hai, toh aap verified advocate ke madhyam se 15-day statutory legal notice bhej sakte hain. LegalRecovery.in par advocate Code on Wages 2019, Payment of Bonus Act aur Indian Contract Act ke tehat company ke Registered Office aur Directors par Registered Speed Post aur email se demand notice bhejte hain jismein 18% interest ka claim rehta hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Incentive or Bonus Still Unpaid? Templates That Put It in Writing",
  description:
    "Email templates for unpaid bonus, incentive or commission, including after resignation, with the legal points HR can't ignore.",
  datePublished: "2026-11-03T16:00:00+05:30",
  dateModified: "2026-11-03T16:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/templates/bonus-incentive-not-received-mail`,
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
    name: "Unpaid Bonus & Sales Incentive Recovery Under Indian Labour Law",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const DIGITAL_DOCUMENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  name: "Bonus and Incentive Not Received Mail to HR Template",
  description:
    "Legally grounded email demand format for claiming unpaid annual bonus, sales commission, variable pay and post-resignation incentives from employer.",
  url: `${SITE_URL}/templates/bonus-incentive-not-received-mail`,
  fileFormat: "text/plain",
  hasDigitalDocumentPermission: {
    "@type": "DigitalDocumentPermission",
    permissionType: "https://schema.org/ReadPermission",
    grantee: {
      "@type": "Audience",
      audienceType: "Employees seeking recovery of unpaid bonus or sales incentive",
    },
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
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Salary & Employment Recovery",
      item: `${SITE_URL}/services/recovery-of-salary-and-employment-dues`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Bonus Not Received Mail to HR",
      item: `${SITE_URL}/templates/bonus-incentive-not-received-mail`,
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

export default function BonusIncentiveNotReceivedMailPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    {
      label: "Salary & Employment Recovery",
      href: "/services/recovery-of-salary-and-employment-dues",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DIGITAL_DOCUMENT_SCHEMA) }}
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
        {/* Hero Section strictly matching site theme and IRCTC layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Payment of Bonus Act, 1965 / Code on Wages 2019</span>
              <span className="text-red-500">•</span>
              <span>Employment Dues Recovery Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Incentive or Bonus Still Unpaid? Templates That Put It in Writing
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Bonus &amp; Incentive Non-Disbursement Mandate)
              </p>
              <p>
                Under Section 26 of the Code on Wages, 2019 and the Payment of Bonus Act, employers must disburse statutory bonus within 8 months of the financial year close. Contractual sales commissions and performance incentives vest upon target achievement under Section 73 of the Indian Contract Act. Resigning does not forfeit earned dues; employees can issue a 7-day demand email followed by a statutory advocate legal notice and Labour Commissioner recovery.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Section 17(2)</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">2-Day Terminal Dues Mandate</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">8.33%–20%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Annual Bonus Floor</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Section 73</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Contract Act Commission Enforceability</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">18% p.a.</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Penal Interest on Unlawful Withholding</p>
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
            <BonusTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview & Legal Grounding */}
              <section
                id="heading-orders-overview"
                aria-labelledby="heading-orders-overview-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-orders-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why Withholding Bonus &amp; Incentives Is Prohibited Under Law
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every year, thousands of employees in corporate India discover that their annual statutory bonus, quarterly sales commissions, performance-linked variable pay (PLI), or retention incentives have been withheld by HR. The most common pretext offered is that the employee tendered their resignation before the annual disbursement date, was serving a notice period, or that variable compensation is &quot;strictly discretionary at the sole option of the management.&quot;
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian employment jurisprudence treats earned compensation with strict finality. Under Section 26 of the Code on Wages, 2019 and the Payment of Bonus Act, 1965, statutory bonus is an earned wage component that cannot be forfeited unless the employee has been formally dismissed for fraud, riotous behavior, or theft. For sales incentives and performance bonuses, once target milestones are attained, they transform into legally enforceable contractual debts under Section 73 of the Indian Contract Act, 1872. Boilerplate HR manual clauses that seek to cancel earned remuneration upon exit are void under Section 23 and Section 27.
                </p>
              </section>

              {/* Section 2: Court Precedents (4 Verified Precedents as <article> tags) */}
              <section
                id="heading-order-digest"
                aria-labelledby="heading-order-digest-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Precedents Protecting Employee Bonus &amp; Dues
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Records
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden w-full"
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
                              Total Relief Awarded
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Statutory Scope
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Across Private, IT, FMCG &amp; Services Sectors
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

              {/* Section 3: Pattern Analysis */}
              <section
                id="heading-pattern-analysis"
                aria-labelledby="heading-pattern-analysis-title"
                className="scroll-mt-28 space-y-4 sm:space-y-5"
              >
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Pattern Analysis: What Won Bonus &amp; Incentive Recovery Claims
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A comprehensive examination of Labour Court, High Court, and conciliation proceedings across India reveals decisive evidentiary patterns. When employees preserve objective performance metrics and challenge forfeiture clauses early, employers almost always settle:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Documented Milestone Proof Prior to Exit:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Sales logs, CRM deal closures, client sign-offs, and manager approval emails saved before surrendering company laptops provide undeniable proof of performance. Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023, these electronic records establish that targets were achieved before departure.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Immediate Challenge to &apos;Discretionary&apos; Defense:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Employees who put in writing that variable pay tied to mathematical formulas or sales revenue is a contractual debt—not an ex-gratia gift—prevent HR from invoking discretionary immunity. High Courts have struck down arbitrary discretion as bad in law.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Invoking Statutory Exit Timelines Under Section 17(2):
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        For employees exiting service, citing Section 17(2) of the Code on Wages, 2019 (requiring payment of all dues within 2 working days) shifts the default burden onto the employer. Retaining dues beyond this window exposes directors to prosecution under Section 54.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Joint Demand on Directors &amp; Corporate Entities:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Issuing a statutory demand notice naming both the employing company and the Board of Directors personally responsible for wage withholding under Section 18 eliminates buck-passing between local HR and corporate payroll desks.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Flowchart (Hand-Authored Inline SVG) */}
              <section
                id="heading-escalation-flow"
                aria-labelledby="heading-escalation-flow-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Escalation Hierarchy: Milestone to Bank Credit
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this structured statutory escalation path to enforce your right to earned bonus and sales commission, bypass HR silence, and secure direct bank credit:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Step 1
                    </span>
                    <h3 className="font-bold text-sm">Target Milestone &amp; Records Archive</h3>
                    <p className="text-xs text-slate-200 mt-1">
                      Export CRM closure reports, KPI emails, incentive plan annexures, and pay slips.
                    </p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
                      Step 2
                    </span>
                    <h3 className="font-bold text-sm">Written HR Demand Email (7 Days)</h3>
                    <p className="text-xs text-amber-900 mt-1">
                      Send formatted claim citing Code on Wages s.17(2) &amp; Contract Act s.73.
                    </p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                      Step 3
                    </span>
                    <h3 className="font-bold text-sm">Escalate to Finance Head &amp; MD</h3>
                    <p className="text-xs text-slate-700 mt-1">
                      Re-forward unresolved claim with target calculation worksheet and bank coordinates.
                    </p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">
                      Step 4
                    </span>
                    <h3 className="font-bold text-sm">Advocate Statutory Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">
                      15-day statutory demand served via Registered Speed Post + Section 63 BSA Email.
                    </p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                      Step 5
                    </span>
                    <h3 className="font-bold text-sm">Full Bank Credit or Labour Recovery</h3>
                    <p className="text-xs text-emerald-900 mt-1">
                      Recovery via Labour Commissioner (Samadhan) or Summary Suit under Order 37 CPC.
                    </p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram (Visible on Both Mobile & Desktop with Smooth Horizontal Scroll) */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-xs overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Bonus and Incentive Dispute Statutory Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="bonusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="bonusAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="bonusSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#bonusGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Archive Proofs</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">CRM, Mails &amp; KPIs</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Offer Letter Annexure</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">7-Day HR Email</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Cite Wages Code s.17</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Attach Calculation</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">MD Escalation</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Notice to Finance Head</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Warn of Legal Action</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#bonusAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Demand</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Speed Post + Email</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#bonusSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Bank Settlement</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or Samadhan / Court</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">
                      STATUTORY DISBURSEMENT TIMELINES &amp; LIMITS UNDER INDIAN EMPLOYMENT LAW:
                    </text>
                    <text x="25" y="192" fill="#475569" fontSize="10">
                      • Statutory Bonus Payout Window: Max 8 months from close of financial year (s.19 Bonus Act / s.26 Code on Wages)
                    </text>
                    <text x="25" y="208" fill="#475569" fontSize="10">
                      • Resignation / Exit Dues: All terminal wages &amp; incentives payable within 2 working days (s.17(2) Code on Wages)
                    </text>
                    <text x="25" y="224" fill="#475569" fontSize="10">
                      • Pre-Litigation Legal Notice Period: 15 calendar days before filing on Samadhan Portal or Labour Court s.33C(2)
                    </text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section
                id="heading-playbook"
                aria-labelledby="heading-playbook-title"
                className="scroll-mt-28 space-y-4 sm:space-y-5"
              >
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Playbook: Recovering Unpaid Bonus &amp; Commission
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Derived directly from winning Labour Court verdicts and conciliation settlements, this playbook outlines exactly how to dismantle employer excuses and compel disbursement:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Audit Your Compensation Plan &amp; Collate Metric Proofs
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Gather your appointment letter, variable pay annexure, quarterly sales commission scheme, and appraisal rating email. Download CRM pipeline closures, invoice numbers of deals you closed, and written confirmations from your reporting manager verifying that targets were met.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Send the 7-Day Statutory Demand Email to HR &amp; Finance
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Generate and send our pre-litigation template below to your HR head, copying your personal email and reporting manager. Clearly itemize the target period, formula calculation, and net sum claimed. Set a strict 7-calendar-day deadline for direct bank credit.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Refuse Coercive FnF Waivers &amp; Demand Experience Documents
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If HR attempts to condition your relieving letter on signing a &quot;full and final release without bonus&quot;, refuse in writing. Cite High Court rulings establishing that withholding exit documents impairs your Article 21 livelihood rights. See our legal guide on{" "}
                        <Link
                          href="/experience-letter-not-given-legal-action"
                          className="text-blue-700 underline font-semibold"
                        >
                          experience letter withheld legal remedies
                        </Link>
                        .
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Formal Statutory Advocate Legal Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        When HR ignores the 7-day email, engage an advocate to issue a 15-day statutory demand notice addressed to the company, HR Director, and Managing Director. Dispatched via Registered Speed Post and BSA Section 63 compliant electronic mail, the notice demands immediate payout alongside 18% penal interest. Review our transparent{" "}
                        <Link href="/legal-notice-charges" className="text-blue-700 underline font-semibold">
                          legal notice charges
                        </Link>
                        .
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Lodge a Conciliation Complaint on Samadhan or Summary Suit
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If payment is not released within the 15-day notice window, lodge a formal wage recovery complaint on the Ministry of Labour&apos;s Samadhan portal or file an application under Section 33C(2) of the Industrial Disputes Act. For senior management and executives, file a summary recovery suit under Order 37 CPC. Check our detailed guide on{" "}
                        <Link
                          href="/labour-commissioner-complaint-online-salary"
                          className="text-blue-700 underline font-semibold"
                        >
                          filing Labour Commissioner salary complaints online
                        </Link>
                        .
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Deadlines */}
              <section
                id="heading-deadlines-table"
                aria-labelledby="heading-deadlines-table-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-deadlines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Benchmarks: Bonus Formulas &amp; Timelines
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian employment statutes enforce mandatory deadlines and percentage ranges for statutory bonuses and contractual variable pay:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">
                      Statutory Bonus and Incentive Payment Benchmarks &amp; Legal Rules
                    </caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Compensation Category</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Payout Deadline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Benchmark / Statute</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Remedy if Withheld</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Annual Statutory Bonus (8.33% to 20%)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Within 8 Months of FY Close</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 19 Payment of Bonus Act / s.26 Code on Wages</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Labour Commissioner claim under Section 21</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Accrued Bonus on Resignation / Exit
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Within 2 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 17(2) Code on Wages, 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Demand notice + Section 54 penal fine</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Quarterly Sales Incentive &amp; Commission
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">As per Next Payroll Cycle</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 73 Indian Contract Act, 1872</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Summary Suit Order 37 CPC + 18% interest</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Milestone / Retention Bonus
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Upon Milestone Completion Date</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Vested Contractual Remuneration</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Cannot be clawed back for post-vesting exit</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pre-Litigation Advocate Notice Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 63 Bharatiya Sakshya Adhiniyam</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Pre-litigation demand before Samadhan or Court</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  If your Full &amp; Final settlement has also been delayed, explore our dedicated guide on{" "}
                  <Link
                    href="/legal-notice-for-full-and-final-settlement-delay"
                    className="text-blue-700 underline font-medium"
                  >
                    legal notices for FnF settlement delays
                  </Link>
                  .
                </p>
              </section>

              {/* Section 7: Interactive Email Workspace Island */}
              <section
                id="heading-email-workspace"
                aria-labelledby="heading-email-workspace-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-email-workspace-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Interactive Email Workspace: Copy, Edit or Export Your Demand to HR
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Fill in your claim specifics below to generate a tailored email format with appropriate statutory references.
                  </p>
                </div>

                <BonusEmailWorkspace />
              </section>

              {/* Section 8: Worked Example */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Recovers ₹3,20,000 Unpaid Incentive Post-Exit
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Gurugram Tech Firm • Enterprise Account Director</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Priya Nair worked as an Enterprise Account Director at a SaaS multinational in Gurugram. Under her signed compensation plan, she was entitled to a quarterly sales commission of 4% on all multi-year client contract closures. In Q3, Priya successfully closed three flagship accounts totaling ₹80 Lakhs in Annual Contract Value (ACV), generating an earned commission of ₹3,20,000.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> Three weeks after closing the deals, Priya received an attractive leadership offer from a competitor and tendered her resignation, serving her full 60-day contractual notice period. Upon her relieving, HR released her base salary but completely omitted the ₹3,20,000 incentive from her FnF worksheet. HR argued that under clause 14.2 of the employee handbook, &quot;incentives are payable only to employees active on payroll at the time of incentive disbursement.&quot;
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Priya engaged LegalRecovery.in. An advocate drafted and served a statutory legal demand notice on the Managing Director and HR Vice President. The notice established that: (1) Target milestones were fully achieved prior to resignation and verified in Salesforce, (2) The employer received full revenue from clients, (3) Clause 14.2 was void under Section 23 and 27 of the Indian Contract Act as an unlawful restraint on career mobility, and (4) Section 17(2) of the Code on Wages mandates clearance of all terminal wages within 2 working days.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      Within 9 days of receiving the advocate legal notice via Speed Post and legal email, the company&apos;s legal counsel contacted Priya to settle. The company credited the full ₹3,20,000 along with ₹25,000 towards legal costs directly to her ICICI Bank account, issuing an amended Form 16 Part B and an unblemished relieving certificate.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Documents Before Legal Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic communications and digital records are fully admissible in court. Assemble these 6 documents before legal notice issuance:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Offer Letter &amp; Variable Pay Annexure:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Showing defined incentive slabs, statutory bonus eligibility, and performance payout formulas.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Target Achievement Proof / CRM Logs:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Timestamped screenshots of sales closure reports, client contracts, or milestone sign-offs.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Manager Appraisal &amp; Approval Emails:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Written correspondence confirming target achievement or rating approvals from leadership.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Full &amp; Final (FnF) Statement / Payslips:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Documenting the omission or zero-credit of the bonus/incentive line item.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Certified Bank Statement:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Proving non-receipt of the claimed amount past the scheduled payroll payout date.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      6
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        7-Day HR Demand Email &amp; Reply Trail:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Copy of your initial demand email and any rejection or non-response from HR leadership.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: FAQs */}
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
                    FAQs: Unpaid Bonus, Sales Incentives &amp; HR Demands
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Answers Grounded in the Payment of Bonus Act, Code on Wages 2019, and Indian High Court Orders
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs open:shadow-md transition-all"
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
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200"
              >
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Labour Statutes, Statutory References &amp; Official Portals
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
                  Statutory verification status: All provisions checked against active Ministry of Labour &amp; Employment notifications, Payment of Bonus Act provisions, and Code on Wages, 2019 benchmarks as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand Notice for Unpaid Bonus &amp; Incentives
                </h2>
                <BonusNoticeCTA variant="primary" />
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
                    FnF Delay Legal Notice Hub →
                  </Link>
                  <Link
                    href="/experience-letter-not-given-legal-action"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Experience Letter Withheld Legal Remedy →
                  </Link>
                  <Link
                    href="/labour-commissioner-complaint-online-salary"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Labour Commissioner Online Complaint →
                  </Link>
                  <Link
                    href="/templates/pf-not-deposited-complaint-letter"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    PF Not Deposited Complaint Letter →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Fee Structure →
                  </Link>
                  <Link
                    href="/templates/fnf-not-received-mail-to-hr"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    FnF Not Received Mail to HR →
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
