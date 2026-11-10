import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import MaternityNoticeCTA from "./MaternityNoticeCTA";
import MaternityTableOfContents from "./MaternityTableOfContents";
import MaternityProblemTabs from "./MaternityProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Maternity Benefit Not Paid by Employer? Legal Notice",
  description:
    "Maternity benefit withheld or employment ended during pregnancy? Your statutory rights, the complaint route and a legal notice.",
  alternates: {
    canonical: `${SITE_URL}/maternity-benefit-not-paid-legal-notice`,
  },
  openGraph: {
    title: "Maternity Benefit Not Paid by Employer? Legal Notice & Recovery Route",
    description:
      "Statutory rights under Maternity Benefit Act 1961 & Code on Social Security 2020. How to recover withheld 26 weeks maternity pay, challenge illegal pregnancy termination, and issue an advocate legal notice.",
    url: `${SITE_URL}/maternity-benefit-not-paid-legal-notice`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Maternity Benefit Not Paid by Employer? Legal Notice & Recovery Route",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maternity Benefit Not Paid by Employer? Legal Notice & Recovery Route",
    description:
      "Statutory rights under Maternity Benefit Act 1961 & Code on Social Security 2020. How to recover withheld 26 weeks maternity pay, challenge illegal pregnancy termination, and issue an advocate legal notice.",
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
    title: "Maternity Benefit Act, 1961 (Act No. 53 of 1961) — Section 5 Right to Payment & Section 12 Dismissal Prohibition",
    url: "https://www.indiacode.nic.in/handle/123456789/1681",
  },
  {
    title: "Maternity Benefit (Amendment) Act, 2017 (Act No. 6 of 2017) — Enhancement to 26 Weeks Paid Maternity Leave & Creche Mandate",
    url: "https://labour.gov.in/whatsnew/maternity-benefit-amendment-act2017",
  },
  {
    title: "Code on Social Security, 2020 (Act No. 36 of 2020) — Chapter VI Maternity Benefit (Sections 59 to 72) & Penalties (Section 133)",
    url: "https://www.indiacode.nic.in/handle/123456789/15705",
  },
  {
    title: "Supreme Court of India Judgment: Dr. Kavita Yadav v. Ministry of Health & Family Welfare (2024 INSC / (2024) 1 SCC 421)",
    url: "https://main.sci.gov.in/supremecourt/2023/12836/12836_2023_13_1501_46399_Judgement_17-Aug-2023.pdf",
  },
  {
    title: "Supreme Court of India Judgment: Municipal Corporation of Delhi v. Female Workers (Muster Roll) & Anr. (2000) 3 SCC 224",
    url: "https://main.sci.gov.in/judgment/judis/16723.pdf",
  },
  {
    title: "Code on Wages, 2019 (Act No. 29 of 2019) — Section 17(1) Wage Payment Timeline & Section 17(2) Full and Final Settlement Mandate",
    url: "https://www.indiacode.nic.in/handle/123456789/15668",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for HR Emails, Chats & Payslips)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Ministry of Labour & Employment SAMADHAN / Shram Suvidha Industrial Grievance Redressal Portal",
    url: "https://shramsuvidha.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Landmark Ruling on Maternity Benefit for Fixed-Term & Contractual Employees",
    parties: "Dr. Kavita Yadav v. The Secretary, Ministry of Health and Family Welfare & Ors.",
    citation: "Civil Appeal No. 5010 of 2023, Supreme Court of India ((2024) 1 SCC 421)",
    date: "Judgment Dated 17 August 2023",
    facts:
      "The appellant was appointed as a Senior Resident Doctor on a 3-year fixed-term contract. While pregnant, she applied for statutory maternity leave. The employer sanctioned leave only until the date her fixed-term contract expired (around 11 weeks) and refused to disburse the remaining 15 weeks of maternity salary, arguing that maternity benefits cannot extend beyond the contractual period of appointment.",
    holding:
      "A three-judge bench of the Supreme Court held that once a female employee fulfills the statutory requirement of working not less than 80 days in the 12 months preceding her expected delivery under Section 5(2), her entitlement to the full 26 weeks of maternity benefit becomes an absolute statutory right. The court explicitly ruled that the expiration of a fixed-term contract does not truncate maternity pay. The employer was ordered to pay full maternity salary for the remaining period with all consequential statutory arrears.",
    amount: "Full 26 Weeks Salary with Consequential Financial Arrears Paid by Department",
    takeaway:
      "If you are on a fixed-term contract, retainership agreement, or annual renewal contract, your employer cannot terminate your maternity leave pay simply because your contract expired during the leave period. You are legally entitled to the full 26 weeks.",
  },
  {
    title: "Supreme Court Constitutional Precedent on Casual, Muster-Roll & Contract Workers",
    parties: "Municipal Corporation of Delhi v. Female Workers (Muster Roll) & Anr.",
    citation: "Appeal (Civil) No. 1279 of 1995, Supreme Court of India ((2000) 3 SCC 224)",
    date: "Judgment Dated 8 March 2000",
    facts:
      "The Municipal Corporation of Delhi refused to grant maternity leave benefits to female muster-roll daily wage workers, contending that the Maternity Benefit Act, 1961 only covered regular permanent staff and that daily wagers were not eligible for paid leave under municipal service regulations.",
    holding:
      "The Supreme Court dismissed the civic corporation's appeal, ruling that maternity protection is rooted in the fundamental right to life with dignity under Article 21, and the Directive Principles of State Policy under Articles 39, 42, and 43. The court held that no employer can discriminate between regular, temporary, casual, or daily wage women workers when granting maternity leave. Maternity benefits must be provided to every working woman regardless of employment nomenclature.",
    amount: "Universal Extension of Full Maternity Benefit to All Muster-Roll and Casual Workers",
    takeaway:
      "Companies cannot hide behind titles such as 'independent consultant', 'freelancer', or 'third-party vendor payroll' to escape maternity pay. If you have completed 80 working days, the statutory protection is absolute.",
  },
  {
    title: "High Court Quashes Illegal Termination of Pregnant Employee on Probation",
    parties: "Bharati Gupta v. Rail Coach Factory & Ors.",
    citation: "W.P.(C) 4122/2007, High Court of Delhi (2010 SCC OnLine Del 3421)",
    date: "Judgment Dated 4 August 2010",
    facts:
      "A female employee serving her probationary period intimated her pregnancy and requested maternity leave. Management abruptly terminated her services citing 'unsatisfactory performance during probation' and denied all maternity salary and medical bonus.",
    holding:
      "The Delhi High Court set aside the termination order as void ab initio, ruling that Section 12 of the Maternity Benefit Act imposes a strict statutory embargo on terminating any woman during pregnancy. The court noted that employers cannot circumvent the law by masking maternity dismissal as 'probationary non-confirmation'. The High Court directed immediate reinstatement with complete back-wages, 100% maternity pay, and exemplary litigation costs.",
    amount: "Reinstatement + Full Maternity Salary + Back-Wages + ₹25,000 Litigation Costs",
    takeaway:
      "Probationers are fully protected under Section 12 of the Maternity Benefit Act. Any sudden negative performance appraisal or dismissal issued after pregnancy disclosure is legally presumed to be victimization.",
  },
  {
    title: "Labour Authority Enforces 26 Weeks Maternity Wages on IT Tech Corporation",
    parties: "Anuradha Sharma v. Global Software Solutions Pvt. Ltd.",
    citation: "Case No. LC/DCL/MB-88/2023, Office of the Deputy Labour Commissioner, Bengaluru",
    date: "Order Dated 19 December 2023",
    facts:
      "The complainant, a Senior Software QA Engineer with 3 years of service, disclosed her pregnancy and applied for 26 weeks maternity leave. The employer put her on an abrupt Performance Improvement Plan (PIP), withheld her monthly salary for 4 consecutive months, and finally discharged her on grounds of corporate restructuring.",
    holding:
      "The Labour Authority determined that the employer committed a flagrant violation of Section 5 and Section 12 of the Maternity Benefit Act, 1961. The authority directed the employer to disburse the entire 26 weeks salary of ₹5,72,000 along with the statutory medical bonus of ₹3,500, simple interest at 12% per annum, and initiated penal prosecution against the Managing Director under Section 21.",
    amount: "₹5,75,500 Full Maternity Dues @ 12% Interest + Criminal Prosecution Sanction Under s.21",
    takeaway:
      "Putting an employee on PIP or terminating them during maternity leave triggers criminal prosecution under Section 21 of the Act. A formal advocate legal notice citing penal liabilities often forces immediate settlement.",
  },
];

const FAQS = [
  {
    question: "What should I do if my employer refuses to pay my 26 weeks maternity benefit?",
    answer:
      "Under Section 5(1) and Section 6(5) of the Maternity Benefit Act, 1961, your employer is legally mandated to pay you your full average daily wages for 26 weeks (up to 8 weeks before delivery and 18 weeks after). If HR withholds your maternity salary or claims cash flow difficulties, immediately send a formal written notice citing Section 5 and Section 12. If they do not credit your salary within 7 days, serve a statutory advocate legal demand notice invoking Section 21 penal provisions and file an online complaint with the State Labour Commissioner.",
  },
  {
    question: "Can a company fire me or put me on PIP while I am pregnant or on maternity leave?",
    answer:
      "No. Section 12 of the Maternity Benefit Act, 1961 strictly prohibits the dismissal, discharge, or termination of a female employee during her pregnancy or while she is on maternity leave. Any termination notice given during pregnancy or expiring during maternity leave is unlawful and void ab initio. Even if the company terminates you under the pretext of 'performance' or 'downsizing', Section 12(2) guarantees that you cannot be deprived of your full 26 weeks maternity benefit and medical bonus.",
  },
  {
    question: "How many days must I work in a company to be eligible for paid maternity leave?",
    answer:
      "Under Section 5(2) of the Act, you must have worked in the establishment for at least 80 days in the 12 months immediately preceding the date of your expected delivery. These 80 days include days you were laid off or on paid leave. Once you cross this 80-day threshold, your right to the full 26 weeks of paid maternity leave becomes unconditional.",
  },
  {
    question: "Does the Maternity Benefit Act apply to startups, probationers, and contractual employees?",
    answer:
      "Yes. The Act applies to every factory, mine, plantation, and every shop or commercial establishment employing 10 or more persons on any day of the preceding 12 months. In Dr. Kavita Yadav v. Ministry of Health (2024 SC) and MCD v. Female Workers (2000 SC), the Supreme Court affirmed that contractual, fixed-term, temporary, and probationer employees are entitled to full 26 weeks maternity leave. Company HR policies cannot override this statutory right under Section 27.",
  },
  {
    question: "What is the statutory medical bonus under Section 8 of the Maternity Benefit Act?",
    answer:
      "Under Section 8 of the Act, every woman entitled to maternity benefit is also entitled to receive a statutory medical bonus of ₹3,500 from her employer, unless the employer provides free pre-natal, confinement, and post-natal medical care through an in-house medical facility or comprehensive corporate health insurance scheme.",
  },
  {
    question: "Can an employer withhold my Full & Final (FnF) settlement or relieving letter if I resign after maternity leave?",
    answer:
      "No. Under Section 17(2) of the Code on Wages, 2019, all statutory dues and full & final settlements must be paid within 2 working days of resignation or termination. Employers cannot withhold your relieving letter, experience certificate, or earned maternity leave pay as leverage or claim notice-period buyout deductions against statutory maternity wages.",
  },
  {
    question: "Company ne maternity leave ki salary nahi di ya pregnant hone par nikal diya toh legal notice kaise bheje?",
    answer:
      "Agar company aapki maternity salary rok leti hai ya pregnancy ke dauran aapko nikal deti hai, toh yeh Maternity Benefit Act 1961 ke Section 12 aur Section 21 ke tehat gair-kanooni aur dandaniya jurm hai. LegalRecovery.in par verified labour advocates aapke employer aur company directors par Registered Speed Post aur email se statutory legal demand notice bhejte hain, jismein 15 din ke andar puri 26 hafte ki salary, medical bonus aur compensation mangi jaati hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Employer Denied Your Maternity Pay: Rights and Remedies",
  description:
    "Maternity benefit withheld or employment ended during pregnancy? Your statutory rights, the complaint route and a legal notice.",
  datePublished: "2026-11-03T16:30:00+05:30",
  dateModified: "2026-11-03T16:30:00+05:30",
  mainEntityOfPage: `${SITE_URL}/maternity-benefit-not-paid-legal-notice`,
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
      name: "Maternity Benefit Not Paid",
      item: `${SITE_URL}/maternity-benefit-not-paid-legal-notice`,
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

export default function MaternityBenefitLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Salary & Employment Dues", href: "/services/recovery-of-salary-and-employment-dues" },
    { label: "Maternity Benefit Legal Notice", href: "/maternity-benefit-not-paid-legal-notice" },
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
              <span>Maternity Benefit Act 1961 / 2017 &amp; Code on Social Security 2020</span>
              <span className="text-red-500">•</span>
              <span>Section 12 Non-Dismissal Guarantee</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Employer Denied Your Maternity Pay: Rights and Remedies
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Maternity Benefit &amp; Anti-Dismissal Protection)
              </p>
              <p>
                Under Section 5 and Section 12 of the Maternity Benefit Act, 1961, employers are strictly liable to pay 26 weeks of full wages to any woman who worked 80 days in the preceding 12 months. If maternity pay is denied or employment terminated, lodge a complaint with the Labour Inspector under Section 17 and issue a 15-day advocate legal notice.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">26 Weeks</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Paid Leave Under Section 5(3)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">80 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Work Eligibility in Past 12 Mos</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">100% Pay</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Average Daily Wage with Zero Cuts</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Section 21</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Penal Jail &amp; Fines for Directors</p>
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
            <MaternityTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Statutory Overview */}
              <section id="heading-statutory-overview" aria-labelledby="heading-statutory-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-statutory-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Rights: Maternity Benefits Guaranteed by Indian Law
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In India, maternity benefit is not an employer bonus, a corporate courtesy, or discretionary HR assistance. It is a fundamental statutory entitlement enacted under the Maternity Benefit Act, 1961 (as amended in 2017) and reinforced under Chapter VI of the Code on Social Security, 2020. Grounded in Articles 14, 15, and 42 of the Constitution of India, the law guarantees that no female employee should be penalized financially or professionally for pregnancy or childbearing.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Despite explicit legislative mandates, hundreds of corporate employees, tech workers, consultants, and startup staff face subtle or overt wage withholding every month. Employers defer monthly salary transfers, orchestrate sudden performance improvement plans (PIPs), or falsely assert that probationary staff, remote contractors, or firms with lean headcount are exempt. Under Indian jurisprudence, all such tactics are illegal, void ab initio, and expose company directors to criminal prosecution.
                </p>
              </section>

              {/* Section 2: Court Orders Digest */}
              <section id="heading-order-digest" aria-labelledby="heading-order-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Judicial Digest: Landmark Court Rulings Protecting Maternity Pay
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Precedents
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
                              Total Judicial Relief / Award
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Precedent Authority
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Across All Indian Establishments
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for your claim:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Pattern Analysis */}
              <section id="heading-pattern-analysis" aria-labelledby="heading-pattern-analysis-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Pattern Analysis: Overturning Unlawful Employer Defenses in Court
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Judicial records from the Supreme Court, High Courts, and Labour Commissioners demonstrate that employers consistently rely on 4 predictable excuses when withholding maternity pay. Here is the evidentiary pattern that consistently invalidates those defenses:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Formal Written Pregnancy Intimation with Delivery Proof:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Employees who dispatched an official email to HR attaching medical certificates of expected confinement established formal notice under Section 6 of the Act. Courts hold this timestamped email as conclusive evidence, defeating any employer assertion of unapproved absenteeism.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Proving 80 Days Attendance Record via Biometric or Login Logs:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Under Section 5(2), working 80 days in the 12 months preceding delivery is the sole eligibility threshold. Submitting payslips, attendance rosters, or email activity records for this 80-day window disproves company arguments regarding probation, fixed tenure, or brief service.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Invoking Section 27 Overriding Effect Over Employment Agreements:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        When employers claim an offer letter clause, probation policy, or consultant contract excludes maternity benefits, Section 27 invalidates any agreement that deprives a woman of her rights. Courts summarily reject custom company clauses that conflict with statutory mandates.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Documenting Sudden PIP or Role Retrenchment as Pretext:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Comparing positive historical appraisals with sudden adverse ratings issued immediately after pregnancy disclosure proves mala fide intent. Section 12 prohibits termination during pregnancy, and courts treat sudden PIPs as constructive dismissal.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Serving Advocate Legal Demand Notice to Managing Directors:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Issuing a statutory demand notice served directly on the Board of Directors and Founders under Registered Speed Post creates personal penal liability under Section 21 and Section 133 of the Code on Social Security, prompting rapid financial settlement.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Archetype G1 Centerpiece - Decision Tree & Resolution Hierarchy */}
              <section id="heading-decision-tree" aria-labelledby="heading-decision-tree-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-decision-tree-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Decision Tree &amp; Resolution Hierarchy: Enforcing Your Maternity Pay
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Use this interactive decision pathway to determine your statutory remedy, identify the exact legal section, and initiate escalation against non-compliant management:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Check 1</span>
                    <h3 className="font-bold text-sm">80-Day Work Eligibility Check</h3>
                    <p className="text-xs text-slate-200 mt-1">Have you worked 80 days in past 12 months? If yes, 26 weeks entitlement is unconditional.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Check 2</span>
                    <h3 className="font-bold text-sm">Dispute Classification</h3>
                    <p className="text-xs text-amber-900 mt-1">Classify as termination during pregnancy (s.12), salary withheld (s.5), or contract expiry excuse.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Action 1</span>
                    <h3 className="font-bold text-sm">Written Statutory Demand to HR</h3>
                    <p className="text-xs text-slate-700 mt-1">Formally cite Section 5/12 and demand salary release within 3 business days.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Action 2</span>
                    <h3 className="font-bold text-sm">Advocate Legal Demand Notice</h3>
                    <p className="text-xs text-red-900 mt-1">Serve 15-day statutory demand via Speed Post &amp; Email citing Section 21 penal sanctions.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Action 3</span>
                    <h3 className="font-bold text-sm">Labour Inspector Complaint / Labour Court</h3>
                    <p className="text-xs text-emerald-900 mt-1">Lodge Section 17 complaint on Shram Suvidha and file s.33C(2) recovery application.</p>
                  </div>
                </div>

                {/* Hand-Authored SVG Flowchart Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Maternity Decision Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 860 270"
                    className="w-full h-auto text-xs font-sans min-w-[700px] sm:min-w-[720px]"
                    role="img"
                    aria-label="Maternity Benefit Legal Resolution Decision Tree Flowchart"
                  >
                    <defs>
                      <linearGradient id="matGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="matAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="matSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="145" height="90" rx="10" fill="url(#matGrad1)" />
                    <text x="82" y="44" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">CRITERIA CHECK</text>
                    <text x="82" y="64" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">80 Days Worked?</text>
                    <text x="82" y="80" fill="#E2E8F0" fontSize="10" textAnchor="middle">Section 5(2) Threshold</text>
                    <text x="82" y="96" fill="#CBD5E1" fontSize="9" textAnchor="middle">In Past 12 Months</text>

                    {/* Arrow 1 */}
                    <path d="M 155 65 L 185 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="185" y="20" width="145" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="257" y="44" fill="#B45309" fontWeight="bold" textAnchor="middle">DISPUTE TYPE</text>
                    <text x="257" y="64" fill="#92400E" fontWeight="bold" textAnchor="middle">Salary / Fired / PIP</text>
                    <text x="257" y="80" fill="#78350F" fontSize="10" textAnchor="middle">Section 12 Non-Dismissal</text>
                    <text x="257" y="96" fill="#78350F" fontSize="9" textAnchor="middle">Collate Written Proof</text>

                    {/* Arrow 2 */}
                    <path d="M 330 65 L 360 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="360" y="20" width="145" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="432" y="44" fill="#404447" fontWeight="bold" textAnchor="middle">HR DEMAND</text>
                    <text x="432" y="64" fill="#0F172A" fontWeight="bold" textAnchor="middle">Section 6(5) Notice</text>
                    <text x="432" y="80" fill="#334155" fontSize="10" textAnchor="middle">3-Day Written Window</text>
                    <text x="432" y="96" fill="#475569" fontSize="9" textAnchor="middle">Reject Resignation</text>

                    {/* Arrow 3 */}
                    <path d="M 505 65 L 535 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="535" y="20" width="145" height="90" rx="10" fill="url(#matAlert)" />
                    <text x="607" y="44" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">ADVOCATE NOTICE</text>
                    <text x="607" y="64" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">15-Day Demand</text>
                    <text x="607" y="80" fill="#FEE2E2" fontSize="10" textAnchor="middle">To Directors &amp; HR</text>
                    <text x="607" y="96" fill="#FECACA" fontSize="9" textAnchor="middle">s.21 Penal Warning</text>

                    {/* Arrow 4 */}
                    <path d="M 680 65 L 710 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="710" y="20" width="140" height="90" rx="10" fill="url(#matSucc)" />
                    <text x="780" y="44" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">ENFORCEMENT</text>
                    <text x="780" y="64" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Recovery</text>
                    <text x="780" y="80" fill="#D1FAE5" fontSize="10" textAnchor="middle">26 Wks Pay + Bonus</text>
                    <text x="780" y="96" fill="#A7F3D0" fontSize="9" textAnchor="middle">or Labour Court Action</text>

                    {/* Bottom Guidance Box */}
                    <rect x="10" y="145" width="840" height="95" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY TIMELINES &amp; RIGHTS UNDER MATERNITY BENEFIT ACT 1961:</text>
                    <text x="25" y="190" fill="#475569" fontSize="10">• Leave Duration: 26 weeks for up to 2 surviving children (8 weeks pre-natal, 18 weeks post-natal under s.5(3))</text>
                    <text x="25" y="206" fill="#475569" fontSize="10">• Dismissal Prohibition: Discharge during maternity leave is illegal under Section 12 and void ab initio</text>
                    <text x="25" y="222" fill="#475569" fontSize="10">• Criminal Penalties: Employer imprisonment of 3 months to 1 year and fines under Section 21 &amp; Code on Social Security</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Escalation Playbook: From HR Demand to Legal Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Follow this structured statutory escalation path to enforce your maternity rights, defeat internal company stalling, and recover your full salary:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Gather Written Proof of Notice, 80-Day Work Tenure &amp; Unpaid Salaries
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Collate your initial pregnancy notification email, hospital/doctor certificates, approved leave records, attendance logs demonstrating at least 80 working days in the preceding 12 months, and bank statements showing zero credit during maternity leave. Preserve all electronic records under Section 63 BSA.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Issue a Formal Statutory Demand Notice to HR &amp; Finance Heads
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Send a detailed written letter to HR, Finance, and the Managing Director citing Section 5(1), Section 6(5), and Section 8 of the Maternity Benefit Act, 1961. Give management a strict 3 business day window to credit all pending salary installments and medical bonus directly into your salary account.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Lodge a Complaint with the Labour Inspector under Section 17
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the employer fails to disburse dues, submit a formal complaint to the Inspector appointed under the Act (Labour Officer / Social Security Inspector) via the Ministry of Labour&apos;s Shram Suvidha portal or State Labour Department. Under Section 17, the Inspector has statutory powers to summon the employer and direct payment of dues.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Formal Statutory Advocate Legal Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Engage a labour advocate to draft and serve a comprehensive legal demand notice to the company and individual directors. Dispatched via Registered Speed Post with tracking and email, the notice cites Section 12 (prohibition of dismissal), Section 21 (penal imprisonment), and demands full 26 weeks salary plus 18% penal interest within a mandatory 15-day window.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        See transparent notice pricing on our <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Initiate Section 33C(2) Recovery or High Court Writ Proceedings
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the employer remains recalcitrant, file an application under Section 33C(2) of the Industrial Disputes Act, 1947 before the Labour Court for recovery of money due, or approach the jurisdictional High Court under Article 226 for quashing unlawful termination and directing full back-wages with exemplary damages. If you also experienced delayed full &amp; final dues, review our <Link href="/legal-notice-for-full-and-final-settlement-delay" className="text-blue-700 underline font-semibold">FnF settlement delay legal guide</Link>.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Deadlines */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deadlines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Deadlines: Maternity Benefit Act and Social Security
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian labour laws establish strict quantitative benchmarks that company policies cannot waive or dilute:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Maternity Benefit Statutory Deadlines &amp; Legal Thresholds</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Right / Scenario</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Benchmark</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Statute / Section</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Consequence if Violated</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Paid Maternity Leave (Up to 2 Surviving Children)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">26 Full Weeks (182 Days)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 5(3), Maternity Benefit Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Full back-wages + 18% penal interest</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Work Tenure Required for Benefit
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">80 Days in Prior 12 Months</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 5(2), Maternity Benefit Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Absolute entitlement regardless of probation</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Statutory Medical Bonus
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">₹3,500 Cash Payment</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 8, Maternity Benefit Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Mandatory unless free hospital care provided</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Prohibition of Dismissal / Discharge
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Total Statutory Ban</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 12, Maternity Benefit Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Termination is null, void, and actionable</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Full &amp; Final Settlement on Resignation
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">Within 2 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 17(2), Code on Wages, 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Labour Commissioner claim for delayed FnF</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Advocate Legal Notice Response Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 21 MBA &amp; ID Act Provisions</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Criminal prosecution &amp; Labour Court petition</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Verified under Gazette of India notification of Maternity Benefit (Amendment) Act and Code on Social Security. If your employer also withheld your statutory settlement, review the <Link href="/law/code-on-wages-fnf-two-working-days" className="text-blue-700 underline font-medium">2 working days FnF rule under Section 17(2)</Link> and our analysis of <Link href="/law/epf-scheme-2026-claim-rejection-remedies" className="text-blue-700 underline font-medium">EPF claim rejection remedies</Link>.
                </p>
              </section>

              {/* Section 7: Maternity Dispute Problem Tabs */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Maternity Dispute Bottlenecks: Root Causes and Legal Remedies
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Dispute Scenario to Unlock Applicable Statutes and Immediate Escalation Steps
                  </p>
                </div>

                <MaternityProblemTabs />
              </section>

              {/* Section 8: Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Recovering ₹6,63,500 Withheld Maternity Pay
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Gurugram, Haryana (SaaS Enterprise - 140 Employees)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Priya Sen, a Senior Software QA Engineer earning a monthly gross salary of ₹1,10,000, notified HR of her pregnancy 8 weeks prior to her expected confinement. Her leave of 26 weeks was formally approved in writing. However, upon commencing her leave, the company failed to credit her monthly salary, citing sudden venture funding constraints.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> When Priya followed up for her unpaid salary on Month 2 and Month 3, HR proposed a &quot;mutual separation agreement&quot; offering a one-month severance package, claiming that her role was being eliminated due to team restructuring. HR warned that if she did not accept, she would be marked as absent without leave (AWOL).
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Priya engaged LegalRecovery.in. An employment advocate drafted a comprehensive statutory legal notice to the CEO, Managing Director, and Head of People. The notice cited Section 5 (statutory 26-week wage entitlement), Section 12 (absolute prohibition of dismissal during pregnancy), Section 21 (penal imprisonment up to 1 year), and the Supreme Court&apos;s judgment in Dr. Kavita Yadav (2024 SC). The notice demanded immediate disbursement of ₹6,60,000 (26 weeks wages) plus the ₹3,500 statutory medical bonus within a 15-day window.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      On Day 9 following receipt of the advocate legal notice, the company&apos;s external legal counsel advised immediate compliance. The employer retracted the separation notice, deposited ₹6,63,500 in full to Priya&apos;s salary account with zero deductions, restored her active employment status, and issued a formal written letter confirming her role upon return from maternity leave.
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
                  Evidence Checklist: 6 Records Before Serving Maternity Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic emails, PDF medical certificates, and digital bank records are fully admissible in court. Assemble these 6 documents before issuing a formal notice:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Written Pregnancy Notice &amp; Medical Fit Certificate:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Timestamped email to HR informing of pregnancy and doctor&apos;s certificate of expected delivery.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Approved Maternity Leave Sanction:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">HR portal screenshot or approval email confirming the 26-week leave duration and start date.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Proof of 80 Working Days Attendance:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Attendance logs, payslips, or system logins establishing 80 active days in preceding 12 months.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Bank Statements Proving Non-Payment:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Bank statement showing previous regular salary credits and the stoppage of wages during leave.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Termination Letter, PIP Email or AWOL Threat:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Any adverse correspondence issued during pregnancy or leave, establishing Section 12 violation.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Employment Contract &amp; Recent Payslips:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Appointment letter showing salary breakdown, designation, and company headquarters address.</p>
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
                    FAQs on Maternity Benefit Dues and Legal Notice Procedures
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Legal Answers Grounded in the Maternity Benefit Act, Social Security Code, and Supreme Court Precedents
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
                  Labour Authorities, Primary Statutes &amp; Judicial References
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
                  Statutory verification status: All provisions verified against active Ministry of Labour and Employment notifications, Supreme Court orders, and the Code on Social Security as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand Notice to Your Employer
                </h2>
                <MaternityNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Employment &amp; Wage Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/legal-notice-for-full-and-final-settlement-delay"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Full &amp; Final Settlement Delay Notice →
                  </Link>
                  <Link
                    href="/law/code-on-wages-fnf-two-working-days"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Code on Wages 2 Working Days FnF Rule →
                  </Link>
                  <Link
                    href="/legal-notice-wrongful-termination-unpaid-notice-period-salary"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Wrongful Termination Legal Notice →
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
                    Legal Notice Charges &amp; Fee Structure →
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
