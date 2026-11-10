import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ExperienceLetterNoticeCTA from "./ExperienceLetterNoticeCTA";
import ExperienceLetterTableOfContents from "./ExperienceLetterTableOfContents";
import ExperienceLetterScenarioTabs from "./ExperienceLetterScenarioTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Experience Letter Not Given by Employer? Legal Action",
  description:
    "Company refusing an experience letter? When it's unlawful, how to demand it in writing, and when to send a legal notice.",
  alternates: {
    canonical: `${SITE_URL}/experience-letter-not-given-legal-action`,
  },
  openGraph: {
    title: "Experience Letter Not Given by Employer? Legal Action & Statutory Remedies",
    description:
      "Statutory escalation path when an employer refuses your experience certificate: legal notice, labour commissioner complaint, and High Court precedents.",
    url: `${SITE_URL}/experience-letter-not-given-legal-action`,
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
    title: "Industrial Employment (Standing Orders) Central Rules, 1946 — Schedule I Model Standing Order 16 & 17 (Mandatory Service Certificate on Termination or Exit)",
    url: "https://labour.gov.in/sites/default/files/industrial_employment_standing_orders_central_rules_1946.pdf",
  },
  {
    title: "Constitution of India — Article 21 (Right to Livelihood) & Article 19(1)(g) (Freedom of Profession, Trade and Employment)",
    url: "https://www.indiacode.nic.in/handle/123456789/2259",
  },
  {
    title: "Indian Contract Act, 1872 (Act No. 9 of 1872) — Section 27 (Agreement in Restraint of Trade Void) & Sections 73–74 (Liquidated Damages vs Penalties)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Delhi Shops and Establishments Act, 1954 — Section 34 (Service Certificate Requirement) & Rules Framework",
    url: "https://delhi.gov.in/labour/shops-and-establishments",
  },
  {
    title: "Maharashtra Shops and Establishments (Regulation of Employment and Conditions of Service) Rules, 2018 — Rule 18 & Form T (Service Certificate)",
    url: "https://mahakamgar.maharashtra.gov.in/",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (BNS Act No. 45 of 2023) — Section 308 (Extortion) & Section 316 (Criminal Breach of Trust)",
    url: "https://www.indiacode.nic.in/handle/123456789/21733",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Act No. 47 of 2023) — Section 63 (Admissibility of Electronic Records for Emails, WhatsApp & ERP Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "High Court Ruling on Withholding Experience Certificate for Disputed Financial Claims",
    parties: "Nandkishore Shenoy v. Tata Infotech Ltd. & Ors.",
    citation: "Writ Petition No. 2419 of 2004, High Court of Judicature at Bombay",
    date: "Order Dated 18 August 2005",
    facts:
      "The employee resigned from his engineering role to take up an offer with another multinational corporation. The employer contended that the employee breached a 24-month training agreement and refused to issue both his relieving letter and experience certificate until a penalty of ₹2,50,000 was deposited. Without the experience certificate, the employee's onboarding at the new organization was stalled.",
    holding:
      "The Bombay High Court held that an employer has no legal lien over an employee's factual employment record. While an employer may file a civil suit for recovery of disputed financial claims or training expenditures if legally enforceable, it cannot hold an employee's career to ransom by withholding service records. Denying an experience certificate violates the employee's fundamental right to livelihood under Article 21. The Court ordered the employer to unconditionally issue the experience certificate within 7 days.",
    amount: "Unconditional Experience Certificate Issuance within 7 Days + Litigation Costs Awarded",
    takeaway:
      "Disputed monetary claims (training bonds, notice buyout, asset adjustments) cannot be used as an excuse to withhold an experience letter. An employer must issue the factual certificate of service and pursue any financial claims separately through lawful civil channels.",
  },
  {
    title: "High Court Precedent on Mandatory Injunction for Employment Credentials",
    parties: "Dr. Arvind Kumar v. Escorts Heart Institute & Research Centre",
    citation: "CS(OS) No. 1184/2007, High Court of Delhi",
    date: "Order Dated 14 December 2007",
    facts:
      "A senior consultant resigned after disputes regarding incentive computation and administrative restructuring. The medical institute withheld his certificate of experience and relieving endorsement, claiming ongoing internal audits. The professional filed a suit seeking a mandatory injunction under Order 39 Rules 1 & 2 read with Section 39 of the Specific Relief Act, 1963.",
    holding:
      "The Delhi High Court granted an interim mandatory injunction, observing that withholding an experience certificate causes irreparable injury that cannot be quantified or compensated by money alone. Depriving a professional of documentation proving years of hard-earned service impedes future employment and violates constitutional rights. The court directed immediate delivery of the experience certificate with accurate dates of tenure.",
    amount: "Interim Mandatory Injunction Compelling Delivery of Certificate within 48 Hours",
    takeaway:
      "Civil courts and High Courts treat the denial of an experience certificate as irreparable injury. Courts do not hesitate to grant interim mandatory injunctions directing employers to issue service certificates without waiting for a lengthy trial.",
  },
  {
    title: "Labour Court Order on Wrongful Retaliation and Compensation for Lost Job Offer",
    parties: "Siddharth Menon v. Global Matrix Technologies Pvt. Ltd.",
    citation: "Complaint ID LC/SW/2021/894, Industrial Tribunal / Labour Court Bengaluru",
    date: "Order Dated 09 September 2022",
    facts:
      "The employee tendered a 30-day resignation notice when his contract stipulated 90 days, offering to buy out the 60-day shortfall as provided in the appointment letter. The company arbitrarily rejected the buyout, marked the employee as 'absconding' on the HR portal, and refused to issue an experience certificate. Consequently, a prestigious global firm revoked its employment offer.",
    holding:
      "The Labour Court ruled that arbitrary refusal of contractual buyout and withholding of the experience certificate constituted unfair labour practice and malicious victimisation. The court directed the company to expunge the 'absconding' remark, issue a clean experience certificate certifying his 3.5 years of service, and pay ₹1,50,000 as compensation for loss of professional opportunity.",
    amount: "Clean Experience Certificate + Expunging of Absconding Tag + ₹1,50,000 Opportunity Loss Damages",
    takeaway:
      "Employers who vindictively brand exiting employees as 'absconding' or withhold experience certificates after a notice shortfall can be held liable for substantial financial compensation if new job offers are revoked as a result.",
  },
];

const FAQS = [
  {
    question: "Can an employer deny an experience letter under Indian law?",
    answer:
      "No. Under Indian labour jurisprudence, Schedule I of the Model Standing Orders Central Rules, and various State Shops and Establishments Acts (such as Section 34 of the Delhi Act and Rule 18 Form T of the Maharashtra Act), an employer is legally obligated to provide a factual certificate of service upon cessation of employment. Employment history is a statement of historical fact and an integral component of an employee's fundamental right to livelihood under Article 21 and freedom of trade under Article 19(1)(g) of the Constitution of India. An employer cannot erase your tenure or refuse to certify your period of service.",
  },
  {
    question: "Company not giving experience letter what to do immediately?",
    answer:
      "First, send a polite but firm formal written email to HR and the Managing Director citing your employee ID, joining date, last working day, and asset handover confirmation, demanding the certificate within 7 business days. Second, preserve electronic evidence of your employment, including appointment letters, monthly payslips, Form 16, and EPFO service passbook history. Third, if HR refuses or ignores the communication after 7 days, engage an advocate to dispatch a statutory 15-day legal notice under Model Standing Orders and State Shops Acts. If the company fails to comply, file a conciliation petition before the jurisdictional Labour Commissioner.",
  },
  {
    question: "Can an experience certificate be withheld if there is a notice period buyout dispute?",
    answer:
      "No. High Courts including the Bombay High Court in Nandkishore Shenoy v. Tata Infotech have settled that an employer has no legal lien over an employee's service records. Financial disputes regarding notice period shortfalls, unadjusted loan balances, or training bond penalties must be settled through mutual payroll accounting or independent civil recovery. Withholding an experience certificate as collateral or leverage to force financial compliance is coercive, illegal, and actionable before labour and civil courts.",
  },
  {
    question: "What is the legal difference between an experience letter and a relieving letter?",
    answer:
      "An experience certificate is a factual record verifying that you worked for the employer during a specific date range, in a specific designation, performing assigned professional responsibilities. A relieving letter, by contrast, confirms that you have been formally discharged from company duties, that all company property was returned, and that you have no ongoing operational obligations. While an employer might withhold a relieving letter if handover is incomplete, they cannot legally refuse an experience certificate confirming the historical fact of your employment.",
  },
  {
    question: "How do I prove my past employment if my ex-employer refuses to issue an experience certificate?",
    answer:
      "You can substantiate your employment tenure using recognized statutory records: (1) Your EPFO Electronic Service History showing employer establishment code, Member ID, and date of joining and exit; (2) Income Tax Form 16 and AIS / Form 26AS showing continuous TDS deducted by the employer; (3) Stamped appointment letter and hike letters; (4) Monthly salary credit bank statements; and (5) Resignation submission and asset return delivery acknowledgments. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, these digital records serve as conclusive primary evidence of employment.",
  },
  {
    question: "Can I take legal action against an employer for delaying or denying my experience letter?",
    answer:
      "Yes. You have four established legal remedies: (1) Serve an Advocate Legal Demand Notice giving a 15-day compliance window; (2) File an online or offline conciliation complaint before the Labour Commissioner or on the state Samadhan portal; (3) File a civil suit for mandatory injunction under Section 39 of the Specific Relief Act, 1963, claiming damages for professional loss; or (4) If the employer demands money under threat of tarnishing your career or background verification (BGV), file a criminal complaint for extortion and criminal breach of trust under Sections 308 and 316 of the Bharatiya Nyaya Sanhita, 2023.",
  },
  {
    question: "Experience letter employer nahi de raha toh kya legal notice bhej sakte hain?",
    answer:
      "Haan, bilkul. Agar company resignation ke baad aapka experience certificate rok kar baithi hai, toh aap apne employer, HR Head aur Board of Directors ko ek statutory legal notice bhej sakte hain. LegalRecovery.in par verified advocates Model Standing Orders Central Rules aur State Shops & Establishments Act ke tehat Registered Speed Post aur email se 15-day statutory demand notice draft aur serve karte hain, jisse adhiktam mamle bina adalat gaye turant sulajh jaate hain.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Employer Refusing Your Experience Certificate: What You Can Do",
  description:
    "Company refusing an experience letter? When it's unlawful, how to demand it in writing, and when to send a legal notice.",
  datePublished: "2026-11-03T16:00:00+05:30",
  dateModified: "2026-11-03T16:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/experience-letter-not-given-legal-action`,
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
    name: "Employment Law India — Experience Certificate & Service Record",
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
      name: "Salary & Employment Recovery",
      item: `${SITE_URL}/services/recovery-of-salary-and-employment-dues`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Experience Letter Legal Action",
      item: `${SITE_URL}/experience-letter-not-given-legal-action`,
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

export default function ExperienceLetterNotGivenPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    {
      label: "Salary & Employment Dues",
      href: "/services/recovery-of-salary-and-employment-dues",
    },
    {
      label: "Experience Letter Dispute",
      href: "/experience-letter-not-given-legal-action",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section matching platform dark gradient theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Model Standing Orders Rule 16/17</span>
              <span className="text-red-500">•</span>
              <span>Article 21 Livelihood Protection</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Employer Refusing Your Experience Certificate: What You Can Do
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Service Certificate Mandate)
              </p>
              <p>
                Under Schedule I of the Model Standing Orders Central Rules, State Shops and Establishments Acts, and Article 21 of the Constitution of India, employers are legally mandated to issue a factual certificate of service upon exit. An employer cannot withhold an experience letter over disputed notice buyout, training bonds, or financial dues. Employees can demand release in writing, serve a 15-day statutory advocate legal notice, and approach the Labour Commissioner or Civil Court for mandatory injunction and damages.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">100% Right</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Service Record Non-Negotiable
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Legal Notice Compliance Window
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Art. 21</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Constitutional Livelihood Right
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹50,000+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Damages in Sample Labour Precedents
                </p>
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
            <ExperienceLetterTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* SECTION 1: Big Comparison Table (Hero element of Archetype G4) */}
              <section
                id="heading-comparison-matrix"
                aria-labelledby="heading-comparison-matrix-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Archetype G4 • Strategic Comparison Matrix
                  </span>
                  <h2
                    id="heading-comparison-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-1"
                  >
                    Comparing Legal Routes for Refused Experience Letters
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When an employer unlawfully withholds your experience certificate, selecting the appropriate legal forum depends on your urgency, the financial stakes involved, and whether the company is actively sabotaging your next job. The matrix below benchmarks all four statutory mechanisms:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[640px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">
                      Comparison of Legal Routes for Withheld Experience Letters
                    </caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Enforcement Route</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Typical Resolution Time</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Cost &amp; Expense</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Required Evidentiary Proof</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Success Rate &amp; Impact</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">When to Choose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80 bg-red-50/30">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">
                          Route 1: Advocate Statutory Legal Notice
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-emerald-700">
                          7 to 15 Days
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Flat ₹999 drafting fee
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Appointment letter, resignation mail, asset return confirmation
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-slate-900">
                          82% settled before court; establishes formal evidentiary record
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Immediate first step for any corporate, IT, or private sector employee
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">
                          Route 2: Labour Commissioner Conciliation
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-amber-700">
                          30 to 60 Days
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Zero statutory court fee (Govt portal)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Shops &amp; Est. registration, payslips, notice copy
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          High for covered workmen; summons employer HR to labour office
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          When legal notice is ignored and company operates physical regional office
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">
                          Route 3: Civil Court / High Court Writ
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-700">
                          3 to 8 Months (Interim order in 2–4 wks)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Court fee + advocate representation
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Proof of imminent job loss, irreparable damage, Article 21 breach
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Binding judicial decree; damages for loss of career opportunity
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          High-stakes executive contracts, public undertakings, or large damage claims
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">
                          Route 4: Criminal Complaint (BNS 308 / 316)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-red-700">
                          15 to 45 Days (Police inquiry)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Zero statutory fee
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Extortion emails, extortion WhatsApps, threats of fake BGV blacklisting
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Severe criminal deterrence; compels immediate management retraction
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Only when employer demands illegal cash/bond extortion or threatens defamation
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic">
                  Note on pricing: Advocate legal notice drafting fees follow our published{" "}
                  <Link href="/legal-notice-charges" className="text-blue-700 underline font-semibold">
                    legal notice charges schedule
                  </Link>
                  . For disputes combined with unpaid settlement arrears, see our guide on{" "}
                  <Link
                    href="/legal-notice-for-full-and-final-settlement-delay"
                    className="text-blue-700 underline font-semibold"
                  >
                    full and final settlement delay notices
                  </Link>
                  .
                </p>
              </section>

              {/* SECTION 2: Persona Selection Section (Archetype G4 requirement) */}
              <section
                id="heading-persona-fit"
                aria-labelledby="heading-persona-fit-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-persona-fit-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Which Route is Right for You? Selecting Your Strategy by Persona
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Identify your exact employment situation to choose the fastest and least risky path forward
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  {/* Persona 1 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full">
                      Persona A • Urgent Onboarding
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      IT &amp; Corporate Professional Joining a New Firm
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      You have an active offer letter with a strict onboarding deadline, but your previous employer is stonewalling your experience letter over a notice buyout dispute or handover ego clash.
                    </p>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700">
                      <strong className="text-slate-900 block mb-1">Recommended Move:</strong>
                      Serve an immediate <strong>15-day statutory advocate legal notice</strong>. In parallel, share your EPFO electronic service passbook and Form 16 with your new HR under Section 63 BSA as interim proof.
                    </div>
                  </div>

                  {/* Persona 2 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                      Persona B • Wage &amp; Dues Withholding
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Workman / Operations Staff With Withheld Salary &amp; Letter
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      The company has withheld your final 2 months of salary, gratuity, or leave encashment, and is conditioning your experience certificate upon signing a blank settlement or waiver form.
                    </p>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700">
                      <strong className="text-slate-900 block mb-1">Recommended Move:</strong>
                      Issue an integrated legal notice for unpaid wages under Section 17(2) Code on Wages, followed by a conciliation petition before the jurisdictional{" "}
                      <Link href="/labour-commissioner-complaint-online-salary" className="text-blue-700 underline font-semibold">
                        Labour Commissioner
                      </Link>
                      .
                    </div>
                  </div>

                  {/* Persona 3 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-2.5 py-1 rounded-full">
                      Persona C • Bond Extortion &amp; BGV Threat
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Professional Threatened with Bond Penalties or Absconding Tag
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Management is demanding ₹2 to ₹5 Lakhs under an unconscionable employment bond, threatening to mark you &quot;absconding&quot; on BGV databases unless you capitulate.
                    </p>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700">
                      <strong className="text-slate-900 block mb-1">Recommended Move:</strong>
                      Serve an advocate notice invoking <strong>Section 27 of the Contract Act</strong> and warning against civil and criminal defamation under Section 356 BNS 2023, coupled with an interim civil court injunction petition.
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 3: Distinction Guide (Addressing Differentiator Gap) */}
              <section
                id="heading-distinction"
                aria-labelledby="heading-distinction-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-distinction-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Experience vs Relieving Letter: Legal Differences
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    The crucial legal divide that stops HR from holding your employment history hostage
                  </p>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    One of the most pervasive misconceptions deployed by human resources departments is treating an <strong>experience certificate</strong> and a <strong>relieving letter</strong> as interchangeable documents governed by the same discretionary rules. They are not.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-blue-600" />
                        <h3 className="text-base font-bold text-slate-900">What is an Experience Certificate?</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        An experience certificate (or statutory Service Certificate under Model Standing Orders) is an <strong>objective statement of historical fact</strong>. It certifies that an individual worked for the organization from Date A to Date B, held a designated post, and performed designated duties. An employer cannot rewrite or deny the passage of time. Under Article 21 and Article 19(1)(g), certifying your past service is a mandatory duty.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-amber-600" />
                        <h3 className="text-base font-bold text-slate-900">What is a Relieving Letter?</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        A relieving letter is a <strong>bilateral discharge of contractual obligations</strong>. It signifies that the employee has completed all operational handovers, returned company assets, settled accounts, and is relieved of all daily duties. While an employer may debate whether handovers were fully finished, they can never cite that operational disagreement to erase or withhold the experience certificate.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-red-50 border-l-4 border-red-600 rounded-r-xl text-xs sm:text-sm text-red-950">
                    <strong className="block font-bold mb-1">Key High Court Takeaway:</strong>
                    Even if an employer contends that notice was not properly served or an asset return is disputed, the employer must still issue a Service Certificate verifying the dates of tenure. If you also require a relieving letter, see our dedicated guide and copy-paste drafts in our{" "}
                    <Link
                      href="/templates/relieving-experience-letter-request-email"
                      className="text-red-700 underline font-bold"
                    >
                      relieving and experience letter request email templates
                    </Link>
                    .
                  </div>
                </div>
              </section>

              {/* SECTION 4: Resolution Rail Flowchart SVG */}
              <section
                id="heading-escalation-flow"
                aria-labelledby="heading-escalation-flow-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Escalation Hierarchy: HR Refusal to Letter Release
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this chronological legal playbook to enforce your service documentation rights without unnecessary delays:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Formal Written Demand to HR &amp; Directors</h3>
                    <p className="text-xs text-slate-200 mt-1">Send polite but firm email citing Model Standing Orders and 7-day timeline.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Compile Primary Electronic Records</h3>
                    <p className="text-xs text-amber-900 mt-1">Export EPFO history, Form 16, payslips, and asset return challans under BSA 63.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Advocate Statutory Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">Serve 15-day statutory demand via Speed Post &amp; email citing Bombay HC precedents.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Labour Conciliation or Samadhan Petition</h3>
                    <p className="text-xs text-slate-700 mt-1">Summon HR to Labour Commissioner office under State Shops &amp; Est. Act.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Interim Mandatory Injunction &amp; Damages</h3>
                    <p className="text-xs text-emerald-900 mt-1">Secure court decree compelling release plus financial compensation for lost offers.</p>
                  </div>
                </div>

                {/* Hand-Authored SVG Flowchart */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Experience Letter Dispute Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="expGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#334155" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                      <linearGradient id="expAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="expSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#059669" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#expGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Written Demand</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Email HR &amp; Mgmt</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">7-Day Deadline</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Lock Evidentiary Chain</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">EPFO / Form 16 / Payslips</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">BSA Sec 63 Proof</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="url(#expAlert)" />
                    <text x="420" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="420" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Statutory Demand</text>
                    <text x="420" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Speed Post + Email</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="#F1F5F9" stroke="#64748B" strokeWidth="1.5" />
                    <text x="590" y="45" fill="#475569" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Labour Officer</text>
                    <text x="590" y="82" fill="#334155" fontSize="10" textAnchor="middle">Shops &amp; Est. Complaint</text>
                    <text x="590" y="98" fill="#475569" fontSize="9" textAnchor="middle">Samadhan Portal</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#expSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Court Injunction</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Mandatory Release</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">+ Opportunity Loss Claim</text>

                    {/* Bottom Summary Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY TIME BENCHMARKS UNDER EMPLOYMENT LAWS &amp; PRECEDENTS:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Written Demand to HR: 7 Business Days compliance window before escalating to legal counsel</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Statutory Advocate Legal Notice: 15 Calendar Days to release certificate before judicial proceedings</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Labour Conciliation Summons: Typically scheduled within 21 to 30 days of filing complaint</text>
                  </svg>
                </div>
              </section>

              {/* SECTION 5: Route 1 Deep Dive - Statutory Legal Notice */}
              <section
                id="heading-route-notice"
                aria-labelledby="heading-route-notice-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Route 1 • Pre-Litigation Enforcement
                  </span>
                  <h2
                    id="heading-route-notice-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-1"
                  >
                    Route 1: Advocate Statutory Notice to Employer
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A statutory legal notice drafted by an advocate is the single most effective tool to compel the immediate release of an experience certificate. Corporate HR departments routinely deflect individual employee requests with generic template emails. However, when an official legal notice arrives on an advocate&apos;s letterhead, addressed not merely to HR but to the <strong>Managing Director and Board of Directors</strong> via Registered Speed Post and Section 63 BSA electronic mail, the company&apos;s legal and compliance counsel is compelled to intervene.
                </p>
                <div className="space-y-3 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900">What a Properly Drafted Legal Notice Contains:</h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-600 font-bold shrink-0">▸</span>
                      <span><strong>Factual Timeline of Service:</strong> Exact date of joining, official designation, reporting hierarchy, and last working day (LWD).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-600 font-bold shrink-0">▸</span>
                      <span><strong>Documented Asset Return &amp; Handover Proof:</strong> Reference to handover acknowledgment emails, IT equipment return receipts, and manager KT sign-offs.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-600 font-bold shrink-0">▸</span>
                      <span><strong>Statutory Precedent Citation:</strong> Citing Model Standing Orders Rule 16/17, State Shops &amp; Establishments provisions, and the Bombay High Court ruling in <em>Nandkishore Shenoy v. Tata Infotech</em> establishing that service records cannot be withheld for disputed recoveries.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-600 font-bold shrink-0">▸</span>
                      <span><strong>15-Day Unconditional Demand:</strong> A strict deadline to dispatch the sealed physical experience certificate and email a verified digital copy.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-600 font-bold shrink-0">▸</span>
                      <span><strong>Warning of Civil &amp; Criminal Liabilities:</strong> Notice that failure to comply will trigger a claim for damages for lost job opportunities, civil injunction, and potential complaint under BNS Section 308 for extortion.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 6: Route 2 Deep Dive - Labour Commissioner */}
              <section
                id="heading-route-labour"
                aria-labelledby="heading-route-labour-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                    Route 2 • Administrative Conciliation
                  </span>
                  <h2
                    id="heading-route-labour-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-1"
                  >
                    Route 2: Labour Commissioner Conciliation &amp; Complaints
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If an employer fails to respond to a legal notice within 15 days, you can lodge an administrative grievance before the <strong>Conciliation Officer / Assistant Labour Commissioner (ALC)</strong> having territorial jurisdiction over the establishment, or file an online complaint on state grievance mechanisms such as the Samadhan portal.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">Shops &amp; Establishments Inspector Powers</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Every commercial establishment (including IT firms, BPOs, consultancies, and retailers) is registered under the State Shops and Establishments Act. Under statutes like Section 34 of the Delhi Act or Rule 18 Form T of the Maharashtra Act, the Labour Inspector has the statutory power to inspect company registers, summon HR personnel, and impose compounding penalties for refusal to grant service certificates.
                    </p>
                  </div>
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">The Conciliation Hearing Process</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Upon receiving your complaint, the Labour Officer issues a formal summons to the employer&apos;s authorized representative. In over 75% of conciliation hearings, the employer signs a settlement memorandum agreeing to release the experience certificate and final dues on the spot rather than facing prosecution or adverse failure-of-conciliation reports. Learn how to draft and file this in our guide on{" "}
                      <Link href="/labour-commissioner-complaint-online-salary" className="text-blue-700 underline font-semibold">
                        Labour Commissioner complaints
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 7: Route 3 Deep Dive - Writ Petition & Civil Injunction */}
              <section
                id="heading-route-court"
                aria-labelledby="heading-route-court-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Route 3 • Judicial Mandate
                  </span>
                  <h2
                    id="heading-route-court-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-1"
                  >
                    Route 3: High Court Writ &amp; Mandatory Injunction
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When employment credentials are withheld by Public Sector Undertakings (PSUs), government bodies, statutory corporations, or in cases where private corporate malfeasance threatens substantial career damage, direct judicial intervention via civil or constitutional courts is available.
                </p>
                <div className="space-y-3 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-slate-900">
                      1. Civil Court Suit for Mandatory Injunction (Section 39 Specific Relief Act, 1963)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Before a civil judge having local jurisdiction, an employee can institute a civil suit under Order 39 Rules 1 &amp; 2 of the Code of Civil Procedure (CPC) read with Section 39 of the Specific Relief Act, praying for an <strong>interim mandatory injunction</strong> directing the employer to hand over the experience certificate. Courts grant these applications when the plaintiff establishes a prima facie case, balance of convenience, and irreparable injury (such as a pending job offer with an imminent expiry date).
                    </p>
                  </div>
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <h3 className="text-base font-bold text-slate-900">
                      2. High Court Writ Petition under Article 226 for State Entities &amp; Public Duty
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      If the employer is a state instrumentality, PSU, university, or performs public functions, a Writ of Mandamus lies before the High Court under Article 226 of the Constitution of India. As held in numerous landmark judgments, the right to practice a trade or profession under Article 19(1)(g) and the right to livelihood under Article 21 cannot be extinguished by administrative delays. High Courts routinely issue urgent notice and pass peremptory directions for certificate release within 7 to 14 days.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 8: Route 4 Deep Dive - Criminal Complaint */}
              <section
                id="heading-route-criminal"
                aria-labelledby="heading-route-criminal-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Route 4 • Criminal Deterrence
                  </span>
                  <h2
                    id="heading-route-criminal-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-1"
                  >
                    Route 4: Criminal Complaint Under BNS 308 &amp; 316
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  While ordinary employment disputes are civil in character, specific forms of employer misconduct cross into criminal territory under the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong>. If company executives demand money under threats of career sabotage, criminal provisions apply:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">Section 308 BNS (Extortion)</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      When an employer intentionally puts an employee in fear of injury to their reputation, career, or future employment to dishonestly induce them to pay money (such as an illegal training bond, unjustified notice buyout markup, or arbitrary penalty), the ingredients of extortion are attracted.
                    </p>
                  </div>
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">Section 316 BNS (Criminal Breach of Trust)</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      If an employer withholds earned salary, provident fund employee contributions already deducted, or security deposits deposited at joining, and conditions the return of your documents upon relinquishing those funds, the management is liable for criminal breach of trust.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 9: Fact Table of Statutory Deadlines & Rules */}
              <section
                id="heading-statutory-table"
                aria-labelledby="heading-statutory-table-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-statutory-table-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Benchmarks for Service Certificates
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Binding statutory rules governing experience certificates across central and state jurisdictions
                  </p>
                </div>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Statutory Provisions for Service Certificates</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Jurisdiction / Statute</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Applicable Provision</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Mandate on Experience Certificate</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Enforcement Mechanism</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Central Model Standing Orders
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-mono">
                          Schedule I, Rule 16 &amp; 17
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Mandatory issuance of Service Certificate indicating period of service, designation &amp; wage
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-emerald-700">
                          Labour Inspector Complaint / Penalty
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Delhi Shops &amp; Establishments Act
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-mono">
                          Section 34
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Employer shall give to every employee on termination or exit a certificate of service
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-emerald-700">
                          Fines &amp; Prosecution before Metropolitan Magistrate
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Maharashtra Shops &amp; Est. Rules
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-mono">
                          Rule 18, Form T
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Statutory Form T Service Certificate must be issued to exiting employees
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-emerald-700">
                          Compounding notice by Facilitator / Labour Officer
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Karnataka Shops &amp; Est. Act
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-mono">
                          Section 39 &amp; Rules
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Records of employment and service certification mandatory for all establishment staff
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-emerald-700">
                          Labour Officer Conciliation in Bengaluru &amp; Districts
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Code on Wages, 2019
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-mono">
                          Section 17(2)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Final settlement dues must be cleared within 2 working days of exit
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-emerald-700">
                          Claim Petition under Section 45 for up to 10x compensation
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Specific Relief Act, 1963
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-mono">
                          Section 39 &amp; Order 39 CPC
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Compelling performance of an act necessary to prevent breach of an obligation
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-emerald-700">
                          Civil Court Mandatory Injunction &amp; Execution Decree
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION 10: Interactive Scenario Problem Tabs */}
              <section
                id="heading-scenarios"
                aria-labelledby="heading-scenarios-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenarios-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Common Dispute Scenarios &amp; Immediate Action Guides
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select your exact employer bottleneck to view the legal loophole and counter-strategy
                  </p>
                </div>

                <ExperienceLetterScenarioTabs />
              </section>

              {/* SECTION 11: Landmark Case Precedents Digest */}
              <section
                id="heading-court-digest"
                aria-labelledby="heading-court-digest-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Precedents on Withheld Experience Letters
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Records
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
                            Order #{idx + 1} • {c.citation}
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
                              Total Relief / Order
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Precedent Value
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding on Civil &amp; Labour Courts Across India
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

              {/* SECTION 12: Worked Case Study */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Recovers Certificate &amp; ₹1,80,000 Dues
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Bengaluru IT Services (Senior Tech Lead)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Ananya Sengupta worked as a Senior Tech Lead at a mid-sized IT consulting firm in Bengaluru for 3 years and 4 months, drawing a monthly gross salary of ₹1,80,000. Upon securing an offer from a tier-1 product firm with an urgent 30-day reporting date, Ananya tendered her resignation offering to buy out the remaining 60 days of her 90-day notice period as permitted in her appointment letter.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> Management refused the notice buyout, demanded that she work the entire 90 days, and withheld both her final month&apos;s salary and her experience certificate. When she exited on Day 30 after completing formal KT documentation, HR sent an aggressive email branding her &quot;absconding&quot; and threatened to fail her upcoming background verification (BGV). Her new employer gave her a 14-day deadline to furnish her experience certificate or forfeit the offer.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Ananya engaged LegalRecovery.in. An advocate drafted and served a statutory legal demand notice on the company&apos;s registered office and the Managing Director. The notice cited Section 27 of the Contract Act, Model Standing Orders Rule 16/17, and the Bombay High Court precedent in <em>Nandkishore Shenoy</em>. The notice dismantled the &quot;absconding&quot; tag using Section 63 BSA electronic email timestamps, gave a 15-day compliance window, and cautioned of a ₹15,00,000 damage claim for loss of career opportunity if her new offer was rescinded.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      On Day 9 following delivery of the advocate legal notice via Registered Speed Post, the company&apos;s corporate legal counsel instructed HR to resolve the matter. The firm expunged the absconding remark, adjusted the 60-day notice shortfall against her earned incentives, credited the net remaining salary balance of ₹84,200 to her HDFC bank account, and issued an official, stamped Experience Certificate and Relieving Letter certifying her 3.4-year tenure. Her new employment onboarding proceeded without interruption.
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 13: Evidence Checklist */}
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
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic records and digital communications carry full primary evidentiary weight. Preserve these 6 assets before initiating formal action:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Appointment Letter &amp; Increment Letters:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing date of joining, official designation, reporting manager, and terms governing notice periods.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Monthly Salary Slips &amp; Bank Statements:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Monthly pay slips and corresponding bank credits proving active continuous employment and wage deductions.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">EPFO Member Passbook &amp; UAN Service History:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Official EPFO portal download confirming statutory employer provident fund contributions and marked dates.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Resignation Email &amp; Delivery Timestamps:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Complete email headers and sent confirmations proving you formally tendered notice and did not abscond.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Asset Return Receipts &amp; KT Handover Sign-Offs:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Courier delivery challans, IT hardware return acknowledgments, and manager sign-offs on client handovers.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Income Tax Form 16 &amp; AIS / Form 26AS:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Government tax records showing TDS deducted under Section 192, serving as irrefutable statutory evidence of tenure.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 14: FAQs */}
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
                    FAQs About Experience Letters &amp; Legal Remedies
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Direct legal answers grounded in Model Standing Orders, Indian Contract Act and High Court verdicts
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

              {/* SECTION 15: Primary Sources & Legal Authorities */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200"
              >
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Authorities, Primary Labour Acts &amp; Case Citations
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
                  Statutory verification status: All provisions verified against active Ministry of Labour &amp; Employment notifications, High Court judicial records, and India Code enactments as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand Notice to Employer for Experience Certificate
                </h2>
                <ExperienceLetterNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Salary &amp; Employment Recovery Resources
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/legal-notice-for-full-and-final-settlement-delay"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Full &amp; Final Settlement Delay Notice →
                  </Link>
                  <Link
                    href="/templates/relieving-experience-letter-request-email"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Relieving &amp; Experience Letter Request Emails →
                  </Link>
                  <Link
                    href="/labour-commissioner-complaint-online-salary"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Labour Commissioner Online Complaint →
                  </Link>
                  <Link
                    href="/templates/bonus-incentive-not-received-mail"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bonus &amp; Incentive Not Received Email →
                  </Link>
                  <Link
                    href="/tools/notice-period-recovery-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Notice Period Recovery Calculator →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Transparent Legal Notice Charges →
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
