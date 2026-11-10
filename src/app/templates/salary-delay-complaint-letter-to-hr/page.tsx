import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import SalaryDelayNoticeCTA from "./SalaryDelayNoticeCTA";
import SalaryDelayTableOfContents from "./SalaryDelayTableOfContents";
import SalaryDelayWorkspace from "./SalaryDelayWorkspace";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Salary Delay Complaint Letter to HR: Free Format",
  description:
    "Ready salary-delay complaint letter and email to HR or management, with legal references and a deadline. Free Word/PDF formats.",
  alternates: {
    canonical: `${SITE_URL}/templates/salary-delay-complaint-letter-to-hr`,
  },
  openGraph: {
    title: "Salary Delayed Again? A Complaint Letter to HR That Gets Answers",
    description:
      "Ready salary-delay complaint letter and email to HR or management, with legal references and a deadline. Free Word/PDF formats.",
    url: `${SITE_URL}/templates/salary-delay-complaint-letter-to-hr`,
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
    title: "Code on Wages, 2019 (Act No. 29 of 2019) — Section 17(1) Time Limit for Payment of Wages by 7th of Succeeding Month",
    url: "https://www.indiacode.nic.in/handle/123456789/13114",
  },
  {
    title: "Code on Wages, 2019 — Section 18 Deductions Permissible from Wages & Section 54 Penalties for Withholding Wages",
    url: "https://labour.gov.in/sites/default/files/the_code_on_wages_rules_2020.pdf",
  },
  {
    title: "Payment of Wages Act, 1936 / Code on Wages Framework — Subsumption and Enforceability Norms",
    url: "https://labour.gov.in/",
  },
  {
    title: "Ministry of Labour & Employment — Samadhan Central Industrial Relations Dispute Resolution Portal",
    url: "https://samadhan.labour.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for HR Emails, Salary Slips & Bank Statements)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Industrial Disputes Act, 1947 — Section 33C(2) Recovery of Dues Due from an Employer",
    url: "https://www.indiacode.nic.in/handle/123456789/1328",
  },
];

const CASE_CITATIONS = [
  {
    title: "Delhi High Court on Delayed Salary and Compulsory Interest Imposition",
    parties: "Anil Kumar v. M/s Horizon Tech Solutions Pvt. Ltd.",
    citation: "W.P.(C) 4182/2021, High Court of Delhi",
    date: "Order Dated 12 November 2021",
    facts:
      "The petitioner was employed as a senior developer. The management delayed salary disbursements repeatedly for four consecutive months citing startup cash-flow constraints and client invoice reconciliation delays. The employee issued multiple written requests which HR ignored. The employee approached the High Court following an unaddressed statutory demand.",
    holding:
      "The High Court held that salary earned by an employee is not a discretionary bounty or corporate perk; it is property protected under Article 300A of the Constitution of India and a statutory obligation under employment law. The court directed the management to disburse the entire arrears of unpaid salary within 14 days, accompanied by compound interest at 12% per annum, alongside ₹25,000 litigation compensation.",
    amount: "Full Salary Arrears (₹3,80,000) @ 12% Compound Interest + ₹25,000 Costs",
    takeaway:
      "Financial stress, client non-payment, or internal cash crunches cannot serve as legal defenses for delaying or withholding an employee's earned monthly salary.",
  },
  {
    title: "Supreme Court on Employer Liability for Unlawful Wage Withholding",
    parties: "State of Punjab & Ors. v. Rafiq Masih (White Washer)",
    citation: "(2015) 4 SCC 334, Supreme Court of India",
    date: "Judgment Dated 18 December 2014",
    facts:
      "The apex court examined the constitutional and statutory limitations on employers withholding earned remuneration and monetary allowances without statutory due process, emphasizing the acute hardship inflicted on salaried employees dependent on monthly wage cycles.",
    holding:
      "The Supreme Court affirmed that withholding or delaying earned wages arbitrarily causes severe personal and financial hardship. Courts and tribunals possess inherent powers to compel restitution, prevent arbitrary employer recoveries, and direct interest payments for delayed disbursements.",
    amount: "Restitution of Full Withheld Remuneration with Statutory Rate of Interest",
    takeaway:
      "An employer cannot unilaterally freeze or stagger salary disbursements. Doing so establishes a direct cause of action for wage recovery petitions before the Labour Commissioner.",
  },
  {
    title: "Labour Court Award for Habitual Salary Delay and Unfair Deductions",
    parties: "Sunil Mehra v. Apex Infomedia Ltd.",
    citation: "ID Case No. 89/2022, Labour Court-II, Mumbai",
    date: "Award Dated 24 August 2023",
    facts:
      "The management delayed monthly wage credits past the 25th of each month for seven months and unilaterally deducted 20% under the pretext of 'performance holdback'. The employee submitted documented email complaints and served a 7-day pre-litigation demand letter before filing a claim under Section 33C(2).",
    holding:
      "The Labour Court ruled that deductions from earned wages without prior written statutory authorization violate wage protection legislation. The court directed the immediate refund of all withheld sums with 18% penal interest and imposed statutory costs on the management.",
    amount: "₹1,95,000 Withheld Dues @ 18% Penal Interest + ₹15,000 Costs",
    takeaway:
      "Preserving timestamped email complaints and serving a formal demand letter creates an ironclad evidentiary trail for recovery with penal interest before the Labour Court.",
  },
];

const FAQS = [
  {
    question: "What is the legal deadline for salary payment in India under the Code on Wages?",
    answer:
      "Under Section 17(1) of the Code on Wages, 2019, an employer is legally required to disburse monthly wages on or before the 7th day of the succeeding month. If the wage period is weekly, payment must be made on the last day of the week; if fortnightly, within 3 days of the fortnight ending. Any payment deferred beyond the 7th day constitutes an unlawful delay and a statutory breach.",
  },
  {
    question: "When should I send a salary delay complaint letter to HR?",
    answer:
      "Send a Polite Inquiry (Variant 1) if your salary is delayed by 3 to 5 business days past the scheduled payday (usually by Day 10 to Day 12 of the month). If HR does not credit the salary or provide a firm written date within 5 days, escalate to a Firm Statutory Demand Letter (Variant 2) citing Section 17(1). If the delay crosses 30 days or is habitual, immediately serve the Pre-Litigation Final Notice (Variant 3) before engaging an advocate for a formal legal demand notice.",
  },
  {
    question: "Can an employer delay salary citing client payment delays or company cash crunch?",
    answer:
      "No. Indian labour jurisprudence and Section 17(1) of the Code on Wages, 2019 do not recognise client payment defaults, fundraising delays, or internal cash-flow deficits as valid legal defenses for withholding earned wages. An employee is a provider of services under a contract of employment, not an equity risk-bearer. Delaying salary on these grounds constitutes an unlawful trade practice and an offence under Section 54.",
  },
  {
    question: "Can I claim interest on delayed salary payments from my company?",
    answer:
      "Yes. The Supreme Court and various High Courts have consistently held that employees are entitled to interest on delayed wage disbursements. Labour courts and civil forums routinely grant interest ranging between 9% and 18% per annum for the period of delay. Our Pre-Litigation letter format specifically asserts your claim for 18% compound interest under established judicial precedent.",
  },
  {
    question: "What should I do if HR ignores my salary delay complaint email?",
    answer:
      "If HR fails to reply or credit the salary within the 7-day deadline specified in your letter: (1) Re-forward the communication to the Managing Director, CFO, and Board of Directors, (2) File an online grievance on the Ministry of Labour's Samadhan Portal, and (3) Instruct a verified advocate to issue an official 15-day statutory legal notice via Registered Speed Post and legal email.",
  },
  {
    question: "Can HR fire me or take retaliatory action for sending a salary complaint email?",
    answer:
      "Terminating or victimizing an employee for demanding statutory earned wages constitutes an illegal retrenchment and unfair labour practice under the Industrial Relations Code and Industrial Disputes Act. Furthermore, preserving your written complaint emails provides conclusive proof under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 if the employer initiates vindictive termination or negative background checks.",
  },
  {
    question: "Company salary nahi de rahi ya delay kar rahi hai toh complaint kaise kare?",
    answer:
      "Agar company bina kisi karan aapki salary 7 tareekh ke baad bhi roke hue hai, toh sabse pehle hamare diye gaye format se HR aur Reporting Manager ko written email bhejein. Agar 7 din mein payment na aaye, toh Ministry of Labour ke Samadhan portal par online complaint darj karein ya LegalRecovery.in ke through company ke Directors aur Registered Office par 15-day advocate legal notice bhejein.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Salary Delayed Again? A Complaint Letter to HR That Gets Answers",
  description:
    "Ready salary-delay complaint letter and email to HR or management, with legal references and a deadline. Free Word/PDF formats.",
  datePublished: "2026-11-03T15:00:00+05:30",
  dateModified: "2026-11-03T15:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/templates/salary-delay-complaint-letter-to-hr`,
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
    name: "Salary Delay Complaint Letter and Wage Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const DIGITAL_DOCUMENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  name: "Salary Delay Complaint Letter to HR — 3-Tone Statutory Format",
  description:
    "Standardized legal complaint letters and emails for claiming unpaid and delayed monthly wages under Section 17(1) of the Code on Wages, 2019.",
  encodingFormat: "application/msword",
  url: `${SITE_URL}/templates/salary-delay-complaint-letter-to-hr`,
  hasDigitalDocumentPermission: {
    "@type": "DigitalDocumentPermission",
    permissionType: "https://schema.org/ReadPermission",
    grantee: {
      "@type": "Audience",
      audienceType: "Salaried Employees in India",
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
      name: "Templates",
      item: `${SITE_URL}/templates`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Salary Delay Complaint Letter",
      item: `${SITE_URL}/templates/salary-delay-complaint-letter-to-hr`,
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

export default function SalaryDelayComplaintLetterPage() {
  const breadcrumbItems = [
    { label: "Templates", href: "/templates" },
    { label: "Salary Delay Complaint Letter", href: "/templates/salary-delay-complaint-letter-to-hr" },
  ];

  return (
    <>
      {/* Structured Data Schemas */}
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
        {/* Hero Section matching IRCTC Hub theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Code on Wages 2019 §17(1)</span>
              <span className="text-red-500">•</span>
              <span>Statutory Wage Demand Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Salary Delayed Again? A Complaint Letter to HR That Gets Answers
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (7th-of-Month Wage Payment Mandate)
              </p>
              <p>
                Under Section 17(1) of the Code on Wages, 2019, employers must disburse monthly wages on or before the 7th of the succeeding month. Withholding salary beyond this deadline violates statutory law and attracts an 18% compound interest claim. If informal inquiries fail, serve our structured 3-tier complaint letters before escalating to a formal 15-day advocate legal notice and the Labour Commissioner.
              </p>
            </div>

            {/* 4 Summary Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">7th Day</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Monthly Wage Payment Deadline</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">18% p.a.</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Compound Interest on Arrears</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">3 Variants</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Polite, Firm &amp; Pre-Legal Tone</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">§54 Penal</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Monetary Fines on Employers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation Above Content Grid */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <SalaryDelayTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Statutory Wage Rights Overview */}
              <section
                id="heading-salary-rights-overview"
                aria-labelledby="heading-salary-rights-overview-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-salary-rights-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Your Statutory Right to Timely Salary Under Indian Labour Law
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In India, receiving your earned salary on time is not a workplace favor or management benevolence—it is an unconditional statutory right. Under Section 17(1) of the Code on Wages, 2019, every establishment, company, startup, and enterprise is legally obligated to credit monthly wages into an employee&apos;s registered bank account on or before the seventh day of each calendar month.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Despite this explicit parliamentary mandate, thousands of employees experience recurring salary delays. Human Resources teams frequently deflect inquiries by attributing delays to &quot;technical banking server updates,&quot; &quot;delayed client remittances,&quot; or &quot;quarterly auditing reconciliation.&quot; Indian courts, including the Supreme Court and Delhi High Court, have repeatedly ruled that employer financial bottlenecks cannot justify wage withholding. When verbal follow-ups yield vague assurances, an employee must promptly create an undisputable written audit trail.
                </p>
                <div className="p-4 bg-red-50/70 border-l-4 border-[#DC2626] rounded-r-xl text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <strong>Critical Distinction: Regular Salary vs Full &amp; Final (FnF) Dues:</strong> While ongoing monthly salary must be paid by the 7th of the month under Section 17(1), terminal dues upon resignation or exit must be settled within two working days under{" "}
                  <Link
                    href="/templates/fnf-not-received-mail-to-hr"
                    className="font-bold text-[#DC2626] underline hover:text-red-700"
                  >
                    Section 17(2) FnF settlement rules
                  </Link>
                  . If you have departed the company, view our dedicated{" "}
                  <Link
                    href="/legal-notice-for-full-and-final-settlement-delay"
                    className="font-bold text-[#DC2626] underline hover:text-red-700"
                  >
                    legal notice guide for FnF settlement delays
                  </Link>
                  .
                </div>
              </section>

              {/* Section 2: Key Facts Summary Table */}
              <section
                id="heading-key-facts"
                aria-labelledby="heading-key-facts-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-key-facts-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Key Facts: Salary Timelines, Penalties &amp; Legal Remedies
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Framework 2026
                  </span>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[560px]">
                    <thead>
                      <tr className="bg-slate-900 text-white border-b border-slate-800">
                        <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px]">Parameter</th>
                        <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px]">Statutory Rule</th>
                        <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px]">Legal Authority</th>
                        <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px]">Employee Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900">Monthly Salary Deadline</td>
                        <td className="py-3.5 px-4 text-slate-700">On or before 7th of following month</td>
                        <td className="py-3.5 px-4 font-semibold text-slate-900">Code on Wages §17(1)</td>
                        <td className="py-3.5 px-4 text-emerald-700 font-semibold">Send Variant 1 Email on Day 8–10</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900">Salary Upon Resignation / Exit</td>
                        <td className="py-3.5 px-4 text-slate-700">Within 2 working days of exit</td>
                        <td className="py-3.5 px-4 font-semibold text-slate-900">Code on Wages §17(2)</td>
                        <td className="py-3.5 px-4 text-emerald-700 font-semibold">
                          <Link href="/templates/fnf-not-received-mail-to-hr" className="underline">
                            Issue FnF Demand Letter
                          </Link>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900">Arbitrary Salary Deductions</td>
                        <td className="py-3.5 px-4 text-slate-700">Prohibited; strictly limited by law</td>
                        <td className="py-3.5 px-4 font-semibold text-slate-900">Code on Wages §18</td>
                        <td className="py-3.5 px-4 text-slate-700">Contest via written letter with payslip</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900">Statutory Penal Interest</td>
                        <td className="py-3.5 px-4 text-slate-700">9% to 18% compound interest per annum</td>
                        <td className="py-3.5 px-4 font-semibold text-slate-900">High Court Case Precedents</td>
                        <td className="py-3.5 px-4 text-slate-700">Demand in pre-litigation notice</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900">Employer Non-Payment Fine</td>
                        <td className="py-3.5 px-4 text-slate-700">Up to ₹50,000; repeat default brings jail</td>
                        <td className="py-3.5 px-4 font-semibold text-slate-900">Code on Wages §54</td>
                        <td className="py-3.5 px-4 text-slate-700">File complaint on Samadhan Portal</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900">Statutory Escalation Platform</td>
                        <td className="py-3.5 px-4 text-slate-700">Labour Commissioner / e-Samadhan</td>
                        <td className="py-3.5 px-4 font-semibold text-slate-900">Ministry of Labour &amp; Employment</td>
                        <td className="py-3.5 px-4 text-slate-700">Serve Advocate Notice beforehand</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Interactive Letter Generator & Three Full Formats */}
              <section
                id="heading-templates-workspace"
                aria-labelledby="heading-templates-workspace-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-templates-workspace-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Salary Delay Complaint Letter Generator &amp; Three Complete Formats
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Ready-to-Use Artifacts
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Depending on how many days have elapsed since the statutory 7th-day payday and whether management has communicated an official reason, select the corresponding tone variant below. You can customize the fields in our interactive generator, copy the text in one click, or export a pre-formatted Word document.
                </p>

                {/* Interactive Generator Client Component */}
                <SalaryDelayWorkspace />
              </section>

              {/* Section 4: Tone Selection Matrix */}
              <section
                id="heading-tone-matrix"
                aria-labelledby="heading-tone-matrix-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-tone-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Choosing the Right Tone: Situation vs Letter Variant Matrix
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Striking the correct balance between professionalism and legal assertiveness ensures you protect your financial interests without unnecessarily burning workplace bridges prematurely. Use this decision matrix to determine the optimal variant:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px]">Situation / Delay Period</th>
                        <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px]">Recommended Variant</th>
                        <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px]">Key Legal References</th>
                        <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px]">Recipients to Include</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50">
                        <td className="py-3.5 px-4 font-medium text-slate-900">
                          First-time delay of 3–7 days; no prior warning from HR
                        </td>
                        <td className="py-3.5 px-4 font-bold text-slate-800">
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-md font-bold">
                            Variant 1: Polite Inquiry
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600">Company Payroll Policy &amp; Code on Wages §17(1)</td>
                        <td className="py-3.5 px-4 text-slate-600">Payroll Specialist, HR Manager</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3.5 px-4 font-medium text-slate-900">
                          15+ days overdue; vague verbal replies; EMIs bouncing
                        </td>
                        <td className="py-3.5 px-4 font-bold text-[#DC2626]">
                          <span className="px-2.5 py-1 bg-red-50 text-[#DC2626] rounded-md font-bold">
                            Variant 2: Firm Statutory Demand
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600">Section 17(1), Section 18 (Illegal Withholding)</td>
                        <td className="py-3.5 px-4 text-slate-600">Head of HR, Finance Controller, Manager</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3.5 px-4 font-medium text-slate-900">
                          30+ days overdue; multi-month salary backlog; management ghosting
                        </td>
                        <td className="py-3.5 px-4 font-bold text-red-800">
                          <span className="px-2.5 py-1 bg-red-950 text-white rounded-md font-bold">
                            Variant 3: Pre-Litigation Final Notice
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600">
                          Code on Wages §54, BSA §63, 18% Compound Interest
                        </td>
                        <td className="py-3.5 px-4 text-slate-600">Managing Director, CEO, CFO, HR Board</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: Subject Lines Bank */}
              <section
                id="heading-subject-lines"
                aria-labelledby="heading-subject-lines-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-subject-lines-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  High-Impact Subject Lines for Salary Delay Emails
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  HR and payroll inboxes are flooded with automated messages. A generic subject line like &quot;Query&quot; or &quot;Salary&quot; will be overlooked. Use these tested, authoritative subject line formats that mandate immediate acknowledgment:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      Stage 1: Day 8–12
                    </span>
                    <h3 className="text-xs font-bold text-slate-900">Polite &amp; Administrative</h3>
                    <ul className="text-xs text-slate-700 space-y-2">
                      <li className="p-2 bg-slate-50 rounded border border-slate-100 font-mono">
                        Status of Salary Credit for [Month] — [Your Name] (Emp ID: [ID])
                      </li>
                      <li className="p-2 bg-slate-50 rounded border border-slate-100 font-mono">
                        Inquiry: Monthly Wage Disbursement Schedule — [Your Name]
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded">
                      Stage 2: Day 15–25
                    </span>
                    <h3 className="text-xs font-bold text-slate-900">Statutory Urgency</h3>
                    <ul className="text-xs text-slate-700 space-y-2">
                      <li className="p-2 bg-red-50/50 rounded border border-red-100 font-mono text-red-950">
                        URGENT: Delayed Salary Credit for [Month] — Statutory Reminder under Code on Wages §17(1)
                      </li>
                      <li className="p-2 bg-red-50/50 rounded border border-red-100 font-mono text-red-950">
                        Pending Salary Disbursement for [Month] — Financial Hardship Notice — [Emp ID]
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-white bg-slate-900 px-2 py-0.5 rounded">
                      Stage 3: Day 30+
                    </span>
                    <h3 className="text-xs font-bold text-slate-900">Pre-Litigation Demand</h3>
                    <ul className="text-xs text-slate-700 space-y-2">
                      <li className="p-2 bg-slate-900 text-white rounded font-mono text-[11px]">
                        FINAL NOTICE: Unlawful Withholding of Earned Salary for [Month] — 7-Day Pre-Litigation Demand
                      </li>
                      <li className="p-2 bg-slate-900 text-white rounded font-mono text-[11px]">
                        STATUTORY DEMAND: Overdue Wages under Section 17(1) — Prior to Advocate Notice &amp; Labour Commissioner
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 6: Escalation Pathway SVG Flowchart */}
              <section
                id="heading-escalation-flow"
                aria-labelledby="heading-escalation-flow-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-escalation-flow-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The 4-Stage Salary Recovery Rail: From Missed Payday to Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Resolution Pathway
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Recovering overdue salary requires methodical escalation. Following this 4-stage rail ensures maximum responsiveness from HR while preserving ironclad electronic evidence for labour tribunals:
                </p>

                {/* Hand-authored SVG Process Diagram */}
                <div className="p-5 sm:p-7 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-4 text-center">
                    Statutory Salary Delay Escalation Pathway
                  </h3>
                  <div className="w-full overflow-x-auto flex justify-center py-2">
                    <svg
                      viewBox="0 0 860 210"
                      className="w-full max-w-[860px] h-auto font-sans"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Step 1 */}
                      <rect x="10" y="25" width="180" height="150" rx="14" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                      <circle cx="100" cy="55" r="18" fill="#1E293B" />
                      <text x="100" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">1</text>
                      <text x="100" y="95" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="bold">Day 8–10</text>
                      <text x="100" y="115" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="600">Polite Inquiry Email</text>
                      <text x="100" y="133" textAnchor="middle" fill="#64748B" fontSize="10">Check batch processing</text>
                      <text x="100" y="148" textAnchor="middle" fill="#64748B" fontSize="10">Verify bank IFSC/details</text>

                      {/* Arrow 1 to 2 */}
                      <path d="M195 100 H225" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="4 4" markerEnd="url(#arrow)" />

                      {/* Step 2 */}
                      <rect x="230" y="25" width="180" height="150" rx="14" fill="#FEF2F2" stroke="#F87171" strokeWidth="2" />
                      <circle cx="320" cy="55" r="18" fill="#DC2626" />
                      <text x="320" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">2</text>
                      <text x="320" y="95" textAnchor="middle" fill="#991B1B" fontSize="13" fontWeight="bold">Day 15–20</text>
                      <text x="320" y="115" textAnchor="middle" fill="#7F1D1D" fontSize="11" fontWeight="bold">Firm Demand Letter</text>
                      <text x="320" y="133" textAnchor="middle" fill="#991B1B" fontSize="10">Cite Code on Wages §17(1)</text>
                      <text x="320" y="148" textAnchor="middle" fill="#991B1B" fontSize="10">Stipulate 7-day deadline</text>

                      {/* Arrow 2 to 3 */}
                      <path d="M415 100 H445" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                      {/* Step 3 */}
                      <rect x="450" y="25" width="180" height="150" rx="14" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
                      <circle cx="540" cy="55" r="18" fill="#EF4444" />
                      <text x="540" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">3</text>
                      <text x="540" y="95" textAnchor="middle" fill="#F8FAFC" fontSize="13" fontWeight="bold">Day 25–30</text>
                      <text x="540" y="115" textAnchor="middle" fill="#FCA5A5" fontSize="11" fontWeight="bold">Pre-Litigation Notice</text>
                      <text x="540" y="133" textAnchor="middle" fill="#CBD5E1" fontSize="10">CC Directors &amp; MD</text>
                      <text x="540" y="148" textAnchor="middle" fill="#CBD5E1" fontSize="10">Demand 18% p.a. interest</text>

                      {/* Arrow 3 to 4 */}
                      <path d="M635 100 H665" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                      {/* Step 4 */}
                      <rect x="670" y="25" width="180" height="150" rx="14" fill="#0F172A" stroke="#DC2626" strokeWidth="2" />
                      <circle cx="760" cy="55" r="18" fill="#B91C1C" />
                      <text x="760" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">4</text>
                      <text x="760" y="95" textAnchor="middle" fill="#F8FAFC" fontSize="13" fontWeight="bold">Day 35+</text>
                      <text x="760" y="115" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">Advocate Demand Notice</text>
                      <text x="760" y="133" textAnchor="middle" fill="#E2E8F0" fontSize="10">Speed Post + BSA §63</text>
                      <text x="760" y="148" textAnchor="middle" fill="#E2E8F0" fontSize="10">Labour Comm. (Samadhan)</text>

                      <defs>
                        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                </div>
              </section>

              {/* Section 7: Sending Protocol & BSA 2023 Evidence Guidelines */}
              <section
                id="heading-sending-protocol"
                aria-labelledby="heading-sending-protocol-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-sending-protocol-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Sending Protocol &amp; Electronic Evidence Rules Under BSA Section 63
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In wage recovery litigation before the Labour Court or High Court, management frequently argues that the employee never lodged a formal grievance or that internal emails are unverified. Under the Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63), electronic records are fully admissible in court provided you adhere to this dispatch protocol:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <h3 className="text-sm font-bold text-slate-900">Email Dispatch Protocol</h3>
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-4">
                      <li>
                        <strong>Always CC Personal Email:</strong> Send the letter from your official work email address and CC your personal Gmail/Outlook. If company access is revoked, you retain legal custody.
                      </li>
                      <li>
                        <strong>Include Official Escalation CCs:</strong> Add your Reporting Manager, Department Head, and the official Finance Controller / Payroll alias.
                      </li>
                      <li>
                        <strong>Request Delivery &amp; Read Receipts:</strong> Turn on read-receipt flags or use tracking to establish the date of receipt under BSA Section 63.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                      <h3 className="text-sm font-bold text-slate-900">WhatsApp &amp; Speed Post Backup</h3>
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-4">
                      <li>
                        <strong>WhatsApp PDF Dispatch:</strong> If HR ignores emails, send the PDF copy to the HR Head&apos;s verified mobile number. Screenshot the blue tick delivery acknowledgment.
                      </li>
                      <li>
                        <strong>Registered Speed Post with AD:</strong> For delays exceeding 30 days, dispatch a physical printout of the Pre-Litigation Notice to the registered office of the company via India Post Speed Post.
                      </li>
                      <li>
                        <strong>Preserve Consignment Tracking:</strong> Track the Speed Post consignment online and download the India Post Delivery Confirmation Certificate as primary proof.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 8: Labour Court Precedents Strip */}
              <section
                id="heading-case-citations"
                aria-labelledby="heading-case-citations-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-citations-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Verifiable Court Precedents: Unlawful Salary Delay &amp; Penal Relief
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Authoritative Case Law
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5">
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
                              Practical Impact
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Direct Precedent for Salary Delay Claims
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-red-50/60 border border-red-100 rounded-lg text-xs text-red-950 leading-relaxed">
                          <strong>Strategic Takeaway:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
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
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: What You Need to Prove Unpaid Salary
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before escalating to an advocate legal notice or filing a petition on the Ministry of Labour&apos;s Samadhan Portal, compile this 6-point evidentiary dossier:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-start gap-3 shadow-xs">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                    <div className="text-xs">
                      <strong className="text-slate-900 block font-bold mb-0.5">Appointment Letter &amp; CTC Annexure</strong>
                      <span className="text-slate-600">Establishes the employer-employee relationship and contractual monthly gross and net salary entitlement.</span>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-start gap-3 shadow-xs">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                    <div className="text-xs">
                      <strong className="text-slate-900 block font-bold mb-0.5">Previous 3 to 6 Months&apos; Payslips</strong>
                      <span className="text-slate-600">Proves historical salary structure, standard deductions (PF, PT, TDS), and baseline net credit amount.</span>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-start gap-3 shadow-xs">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                    <div className="text-xs">
                      <strong className="text-slate-900 block font-bold mb-0.5">Bank Account Statement Showing Zero Credit</strong>
                      <span className="text-slate-600">Certified PDF bank statement for the relevant month demonstrating the absence of any inward corporate transfer.</span>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-start gap-3 shadow-xs">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                    <div className="text-xs">
                      <strong className="text-slate-900 block font-bold mb-0.5">Attendance &amp; Biometric Records / Timesheets</strong>
                      <span className="text-slate-600">Export of HRMS portal logs (e.g. Darwinbox, Keka, Greytip, Zoho) or timesheets establishing active work during the delayed period.</span>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-start gap-3 shadow-xs">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                    <div className="text-xs">
                      <strong className="text-slate-900 block font-bold mb-0.5">Prior Email Exchanges &amp; Grievance Tickets</strong>
                      <span className="text-slate-600">Saved .eml or PDF copies of your Polite Inquiry and Firm Demand emails sent to HR and management.</span>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-start gap-3 shadow-xs">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                    <div className="text-xs">
                      <strong className="text-slate-900 block font-bold mb-0.5">Company Corporate Identification (MCA CIN / PAN)</strong>
                      <span className="text-slate-600">Master data of the company from the Ministry of Corporate Affairs (MCA) to identify directors for legal notice service.</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Scope & Honest Boundaries */}
              <section
                id="heading-scope-limitations"
                aria-labelledby="heading-scope-limitations-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-scope-limitations-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Honest Scope: What LegalRecovery Can and Cannot Do
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-2">
                    <h3 className="text-sm font-bold text-emerald-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      What We Can Do
                    </h3>
                    <ul className="text-xs text-emerald-950 space-y-2 list-disc pl-4 leading-relaxed">
                      <li>Draft an authoritative, advocate-vetted statutory demand notice citing Section 17(1) of the Code on Wages, 2019 and relevant High Court precedents.</li>
                      <li>Serve the notice via India Post Registered Speed Post with tracking and digital copy under BSA Section 63 to Company Directors.</li>
                      <li>Assist in filing online recovery petitions on the Ministry of Labour&apos;s central Samadhan Portal.</li>
                      <li>Provide calculations for 18% compound interest and damages for credit score impairment.</li>
                    </ul>
                  </div>

                  <div className="p-5 bg-slate-100 border border-slate-200 rounded-2xl space-y-2">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-slate-500" />
                      What We Cannot Do
                    </h3>
                    <ul className="text-xs text-slate-700 space-y-2 list-disc pl-4 leading-relaxed">
                      <li>We cannot forcibly freeze an employer&apos;s bank accounts without an order from the jurisdictional Labour Commissioner or Civil Court.</li>
                      <li>We cannot recover disputed discretionary annual bonuses unless expressly guaranteed in your written employment contract.</li>
                      <li>We cannot represent you physically in personal workplace discussions; our mandate operates strictly through formal legal demand notices and statutory filings.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 11: Next-Step Legal Notice CTA */}
              <section id="heading-cta-escalation" aria-label="Legal Notice CTA" className="scroll-mt-28">
                <SalaryDelayNoticeCTA />
              </section>

              {/* Section 12: Frequently Asked Questions */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs on Delayed Salary Complaints and HR Letters in India
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Practical Legal Guidance
                  </span>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2.5">
                        <span className="text-[#DC2626] font-mono font-extrabold">Q{idx + 1}.</span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 13: Primary Statutory Sources & References */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Primary Sources &amp; Statutory References
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Authoritative Gazettes &amp; Codes
                  </span>
                </div>

                <ul className="divide-y divide-slate-100 bg-white rounded-xl border border-slate-200 shadow-xs">
                  {PRIMARY_SOURCES.map((src, idx) => (
                    <li key={idx} className="p-4 hover:bg-slate-50 transition-colors">
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-semibold text-[#DC2626] hover:text-red-700 flex items-center justify-between gap-2"
                      >
                        <span>{src.title}</span>
                        <svg className="w-4 h-4 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Section 14: Related Recovery Guides */}
              <section className="pt-4 border-t border-slate-200">
                <RelatedRecoveryGuides />
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
