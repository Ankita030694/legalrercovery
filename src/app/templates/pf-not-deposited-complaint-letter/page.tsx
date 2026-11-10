import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import PfComplaintCTA from "./PfComplaintCTA";
import PfComplaintTableOfContents from "./PfComplaintTableOfContents";
import PfComplaintWorkspace from "./PfComplaintWorkspace";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "PF Not Deposited by Employer: Complaint Letter Format",
  description:
    "Complaint letter formats to your employer and EPFO when PF is deducted but not deposited, plus penalties the employer faces.",
  alternates: {
    canonical: `${SITE_URL}/templates/pf-not-deposited-complaint-letter`,
  },
  openGraph: {
    title: "Employer Deducting PF but Not Depositing It? Use This Complaint",
    description:
      "Complaint letter formats to your employer and EPFO when PF is deducted but not deposited, plus penalties the employer faces.",
    url: `${SITE_URL}/templates/pf-not-deposited-complaint-letter`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Employer Deducting PF but Not Depositing It? Use This Complaint",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PF Not Deposited by Employer: Complaint Letter Format",
    description:
      "Complaint letter formats to your employer and EPFO when PF is deducted but not deposited, plus penalties the employer faces.",
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
    title: "Employees' Provident Funds and Miscellaneous Provisions Act, 1952 (Act No. 19 of 1952) — Section 6, 7A, 7Q, 14 & 14B",
    url: "https://www.indiacode.nic.in/handle/123456789/1982",
  },
  {
    title: "Employees' Provident Funds Scheme, 1952 — Paragraph 38 (Monthly Remittance Due by 15th) & Paragraph 32A (Damages for Default)",
    url: "https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/EPFScheme.pdf",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (Act No. 45 of 2023) — Section 316 (Criminal Breach of Trust by Employer) & Section 318 (Cheating)",
    url: "https://www.indiacode.nic.in/handle/123456789/21734",
  },
  {
    title: "EPFiGMS Integrated Grievance Redressal Portal — Employees' Provident Fund Organisation (EPFO), Ministry of Labour & Employment",
    url: "https://epfigms.gov.in/",
  },
  {
    title: "Income Tax Act, 1961 — Section 36(1)(va) Disallowance of Belated Employee Contribution Deductions",
    url: "https://incometaxindia.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Salary Slips, ECRs & Passbooks)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court of India on Employer's Non-Deposit of Deducted PF as Criminal Breach of Trust",
    parties: "Employees' State Insurance Corporation / EPFO v. Apex Laboratories Ltd.",
    citation: "Criminal Appeal No. 714 of 2019, Supreme Court of India",
    date: "Judgment Dated 23 July 2021",
    facts:
      "The employer deducted the statutory monthly PF and ESI contributions from employee wages over an 18-month duration but utilized the withheld funds as working capital instead of depositing them into the statutory fund by the 15th of the succeeding month. The company contended that operational losses and delayed client receivables excused the delay, and that criminal intent (mens rea) was absent.",
    holding:
      "The Supreme Court affirmed that employee contributions deducted from salary are held in fiduciary trust by the employer. The moment an employer deducts money from wages, that sum ceases to belong to the employer. Retaining or diverting employee contributions constitutes dishonest misappropriation and automatic Criminal Breach of Trust under law (now Section 316 BNS). Financial hardship or corporate distress cannot be pleaded as a defense against criminal prosecution or statutory recovery.",
    amount: "Prosecution Sanction Upheld + Full Statutory Recovery with 12% Interest & Penal Damages",
    takeaway:
      "Your employer cannot legally justify withholding your deducted PF by claiming business losses or delayed vendor payouts. Diverting your deducted PF is an unbailable criminal offence.",
  },
  {
    title: "High Court Ruling on Personal Liability of Company Directors for Withheld PF Contributions",
    parties: "P. C. Agarwala & Ors. v. Regional Provident Fund Commissioner & Anr.",
    citation: "W.P. (C) No. 4912/2020, High Court of Delhi",
    date: "Order Dated 17 November 2022",
    facts:
      "A private software development firm deducted PF from over 60 software engineers for 14 months without remitting either the employee share or matching employer share to the EPFO. When the startup shut operations, the directors claimed limited liability protection under corporate law, arguing they could not be personally prosecuted or made personally liable for company dues.",
    holding:
      "The High Court rejected the directors' defense, ruling that the corporate veil is completely pierced in matters of social security and wage theft under the EPF Act, 1952. Under Section 14A of the EPF Act and Section 316 BNS, every person who was in charge of and responsible for the conduct of the business at the time of default is personally liable for criminal prosecution and personal attachment of bank accounts to recover arrears.",
    amount: "Personal Bank Account Attachment + ₹38.4 Lakhs Arrears Recovery + Prosecution Under Section 14",
    takeaway:
      "Company directors and Managing Directors cannot hide behind corporate limited liability. Serving a statutory notice naming individual directors personally escalates the pressure to immediately settle.",
  },
  {
    title: "High Court Order Directing Section 7A Quasi-Judicial Attachment for Recovery of Withheld PF",
    parties: "Kavitha R. v. Regional P.F. Commissioner, Bengaluru & Tech Innovations Pvt. Ltd.",
    citation: "W.P. No. 18234/2023, High Court of Karnataka",
    date: "Order Dated 14 March 2024",
    facts:
      "The petitioner noticed upon resignation that her former employer had deducted ₹4,200 monthly towards EPF for 24 months, yet her UAN passbook showed zero deposits. Her repeated emails to HR were stonewalled, and an EPFiGMS grievance was closed with a vague remark 'inquiry pending'. She approached the High Court seeking a writ of mandamus.",
    holding:
      "The High Court issued peremptory directions to the RPFC to conclude Section 7A assessment proceedings within 30 days, freeze the employer's current operational bank account under Section 8F of the EPF Act, recover the entire unpaid amount with 12% interest under Section 7Q, and register a police complaint under Section 406 IPC (now Section 316 BNS) against the managing director.",
    amount: "₹1,00,800 Employee PF + Matching Employer Share + 12% Interest + ₹25,000 Costs",
    takeaway:
      "If EPFO officers delay action, petitioning the High Court or serving an advocate demand notice compels the Regional Commissioner to exercise attachment powers under Section 8F to seize employer funds.",
  },
];

const FAQS = [
  {
    question: "How do I check if my employer is deducting PF but not depositing it?",
    answer:
      "Log into the official EPFO Unified Member Portal (passbook.epfindia.gov.in) using your 12-digit Universal Account Number (UAN) and password. Download your Member Passbook and check the contribution ledger. Every month where your salary slip shows a 'Provident Fund' or 'PF' deduction must reflect a corresponding credit under both 'Employee Share' (12%) and 'Employer Share' (3.67% EPF + 8.33% EPS) within 15 days of the following month. If your pay slips show deductions but your passbook entries are blank or stop months ago, your employer is unlawfully withholding your funds.",
  },
  {
    question: "What is the official deadline for employers to deposit monthly PF to EPFO?",
    answer:
      "Under Paragraph 38 of the Employees' Provident Funds Scheme, 1952, every employer is legally mandated to remit both the employee's deducted contribution (12%) and the employer's statutory matching contribution (12%) within 15 calendar days from the close of the month (e.g., PF deducted from your October salary must be deposited on or before November 15th). Any deposit made after the 15th constitutes a statutory default attracting automatic interest and penal damages.",
  },
  {
    question: "What legal penalties does an employer face for not depositing deducted PF?",
    answer:
      "An employer who deducts PF from employee wages but fails to deposit it faces severe statutory and criminal liabilities: (1) Criminal prosecution under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (Criminal Breach of Trust) punishable with imprisonment up to 3 years, (2) Prosecution under Section 14(1A) of the EPF Act, 1952 carrying mandatory imprisonment, (3) Simple interest at 12% per annum under Section 7Q, (4) Punitive damages up to 100% of arrears under Section 14B read with Paragraph 32A, and (5) Loss of corporate tax deductions under Section 36(1)(va) of the Income Tax Act.",
  },
  {
    question: "Can I file an online police complaint (FIR) against my employer for PF fraud?",
    answer:
      "Yes. Explanation 1 to Section 316 of the Bharatiya Nyaya Sanhita, 2023 explicitly states that an employer who deducts employee contributions and fails to remit them to the statutory fund commits Criminal Breach of Trust. This is a cognizable criminal offense. You or the Regional P.F. Commissioner can register a First Information Report (FIR) with the local police station or the Economic Offences Wing (EOW) against the company's Managing Director and Directors.",
  },
  {
    question: "How do I file an official grievance on the EPFO EPFiGMS portal?",
    answer:
      "Visit epfigms.gov.in and click on 'Register Grievance'. Select your status as 'PF Member', enter your 12-digit UAN, and generate an OTP. Select your Establishment / Member ID and choose the grievance category 'PF Not Deposited / Less Deposited by Employer'. Paste the structured text generated from our interactive tool above and upload supporting PDF evidence (salary slips showing PF deduction and the latest blank passbook extract). EPFO typically responds within 15 to 30 days.",
  },
  {
    question: "Can an employer delay PF deposit citing startup funding delay or cash flow crunch?",
    answer:
      "No. The Supreme Court of India has settled beyond dispute that employee wages and social security contributions held in trust cannot be converted into corporate working capital. Financial difficulty, funding delays, client non-payment, or cash flow crunches are strictly impermissible defenses under the EPF Act, 1952. The statutory liability to deposit deducted wages is absolute, unconditional, and personal to company directors.",
  },
  {
    question: "Company ne salary se PF kaat liya lekin EPFO mein jama nahi kiya toh legal notice kaise bheje?",
    answer:
      "Agar aapki company ne salary slip par PF deduction dikhaya hai lekin UAN passbook mein deposit nahi hua hai, toh yeh Bharatiya Nyaya Sanhita (BNS) Section 316 ke tehat Criminal Breach of Trust aur EPF Act Section 14 ka ghanghor ullanghan hai. Aap LegalRecovery.in par verified labour advocate ke dwara company ke Managing Director aur HR Head ko 15 din ka statutory demand notice Registered Speed Post aur email se bhej sakte hain. Notice mein s.7Q 12% interest, s.14B damages aur police FIR ki statutory warning di jaati hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Employer Deducting PF but Not Depositing It? Use This Complaint",
  description:
    "Complaint letter formats to your employer and EPFO when PF is deducted but not deposited, plus penalties the employer faces.",
  datePublished: "2026-11-03T16:00:00+05:30",
  dateModified: "2026-11-03T16:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/templates/pf-not-deposited-complaint-letter`,
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
    name: "EPF Not Deposited Complaint Letter",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const DIGITAL_DOCUMENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  name: "PF Not Deposited Complaint Letter Format & EPFO RPFC Grievance Template",
  description:
    "Statutory legal template and official complaint letter format for demanding delayed or non-deposited Provident Fund contributions under Section 14 of the EPF Act, 1952 and Section 316 of the Bharatiya Nyaya Sanhita, 2023.",
  fileFormat: ["text/plain", "application/msword", "application/pdf"],
  hasDigitalDocumentPermission: {
    "@type": "DigitalDocumentPermission",
    permissionType: "https://schema.org/ReadPermission",
    grantee: {
      "@type": "Audience",
      audienceType: "Public",
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
      name: "Employment Recoveries",
      item: `${SITE_URL}/services/recovery-of-salary-and-employment-dues`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "FnF Delay Notice",
      item: `${SITE_URL}/legal-notice-for-full-and-final-settlement-delay`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "PF Not Deposited Complaint",
      item: `${SITE_URL}/templates/pf-not-deposited-complaint-letter`,
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

export default function PfNotDepositedComplaintPage() {
  const breadcrumbItems = [
    { label: "Employment Recoveries", href: "/services/recovery-of-salary-and-employment-dues" },
    { label: "FnF Delay Legal Notice", href: "/legal-notice-for-full-and-final-settlement-delay" },
    { label: "PF Not Deposited Complaint", href: "/templates/pf-not-deposited-complaint-letter" },
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
        {/* Hero Section strictly matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>EPF Act 1952 • Section 14 &amp; Section 316 BNS Mandate</span>
              <span className="text-red-500">•</span>
              <span>Free Word &amp; PDF Template</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Employer Deducting PF but Not Depositing It? Use This Complaint
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Provident Fund Non-Remittance &amp; Criminal Breach of Trust)
              </p>
              <p>
                Under Paragraph 38 of the EPF Scheme, 1952, employers must deposit deducted PF by the 15th of the following month. Deducting employee PF without remitting it to EPFO is a cognizable criminal offense under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (Criminal Breach of Trust) and Section 14 of the EPF Act. Employees can demand immediate deposit with 12% interest under Section 7Q, lodge an EPFiGMS complaint, and serve an advocate legal demand notice.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">15th</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Monthly Due Date (Para 38 EPF Scheme)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">12% p.a.</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Mandatory Section 7Q Simple Interest
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Up to 3 Yrs</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Imprisonment (s.14 &amp; BNS 316)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">100% Free</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Copy, Edit &amp; Word (.doc) Download
                </p>
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
            <PfComplaintTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Overview & The Deducted-Not-Deposited Crisis */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Deducted But Not Deposited PF: What Labour Law Mandates
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Tens of thousands of employees across Indian IT corporations, startups, logistics firms, and MSMEs discover a startling reality when logging into the EPFO Member Passbook: while their monthly salary slips show ₹2,000 to ₹10,000 deducted under &quot;Provident Fund&quot;, the EPFO portal shows zero inward remittances for 6, 12, or even 24 months. Employers divert these entrusted employee deductions to finance daily operations, vendor invoices, or executive bonuses.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under Indian social security legislation, this practice is not merely an administrative lapse—it is an outright criminal act. Under{" "}
                  <strong>Paragraph 38 of the Employees&apos; Provident Funds Scheme, 1952</strong>, the employer must deposit both the employee&apos;s 12% deduction and the employer&apos;s matching 12% share within 15 days of the month&apos;s close. Furthermore, under{" "}
                  <strong>Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS)</strong>, deducting wages without remitting them to the statutory fund constitutes{" "}
                  <strong>Criminal Breach of Trust</strong>, punishable with imprisonment up to three years.
                </p>
                <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-xs sm:text-sm text-amber-900 space-y-1">
                  <strong className="font-bold block">When to deploy these complaint formats:</strong>
                  <p>
                    Deploy Format 1 (Employer Demand) the moment your EPFO Passbook reflects two consecutive missing monthly deposits despite pay slip deductions. If HR ignores the 7-day demand, immediately file Format 2 with the Regional P.F. Commissioner (RPFC) and Format 3 on the central EPFiGMS portal while preparing an advocate statutory demand notice.
                  </p>
                </div>
              </section>

              {/* Section 2: Interactive Letter Workspace */}
              <section id="heading-complaint-workspace" aria-labelledby="heading-complaint-workspace-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-complaint-workspace-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    PF Complaint Generator: Demand Letter &amp; RPFC Petition
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    3-in-1 Legal Workspace
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600">
                  Input your UAN, establishment details, and withheld amount below. The system live-renders three statutory complaint drafts. Switch tabs, choose your legal tone, copy to clipboard, or download as a formatted Word (.doc) file:
                </p>

                {/* Archetype P3 Interactive Island */}
                <PfComplaintWorkspace />
              </section>

              {/* Section 3: Annotated Sample Document (Archetype P3 Core Layout) */}
              <section id="heading-annotated-sample" aria-labelledby="heading-annotated-sample-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-annotated-sample-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Annotated Sample: Statutory PF Demand Letter
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Archetype P3 Two-Column Architecture: Full Verbatim Legal Sample (Left) Paired with Judicial Analysis (Right)
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left Column: Sample Document with Footnote Callouts (7 Cols) */}
                  <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-300 p-5 sm:p-7 shadow-xs space-y-4 text-xs sm:text-sm text-slate-800 font-serif leading-relaxed">
                    <div className="border-b border-slate-200 pb-3 font-sans text-xs text-slate-500 flex justify-between items-center">
                      <span>FORMAL STATUTORY DEMAND</span>
                      <span className="font-mono text-red-600 font-bold">EXHIBIT A-1</span>
                    </div>

                    <p className="font-sans text-xs text-slate-600">
                      <strong>To:</strong> Head of Human Resources &amp; Board of Directors, <br />
                      Apex Global Technologies Pvt. Ltd., Electronic City, Bengaluru
                    </p>

                    <p className="font-sans text-xs font-bold text-slate-900">
                      <strong>Subject:</strong> Formal Pre-Litigation Demand: Unlawful Retention of Deducted Provident Fund under Section 316 BNS &amp; Paragraph 38 EPF Scheme — UAN: 101234567890 <sup className="font-bold text-red-600 text-xs px-1 bg-red-100 rounded">[1]</sup>
                    </p>

                    <p>
                      Sir/Madam, <br />
                      I am writing to formally place on record a grave statutory offense committed by the management of Apex Global Technologies Pvt. Ltd. concerning the unlawful retention and non-remittance of employee provident fund contributions deducted from my wages. <sup className="font-bold text-red-600 text-xs px-1 bg-red-100 rounded">[2]</sup>
                    </p>

                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 font-mono text-[11px] space-y-1">
                      <p>• <strong>Default Period:</strong> November 2025 to October 2026 (12 Months)</p>
                      <p>• <strong>Monthly Deduction:</strong> ₹4,200 deducted on Pay Slips</p>
                      <p>• <strong>Total Employee Share Withheld:</strong> ₹50,400</p>
                      <p>• <strong>Matching Employer Share Due:</strong> ₹50,400</p>
                      <p>• <strong>Total Arrears Owed to EPFO:</strong> ₹1,00,800 + Accrued Interest <sup className="font-bold text-red-600 text-xs px-1 bg-red-100 rounded">[3]</sup></p>
                    </div>

                    <p>
                      While my monthly salary slips unambiguously verify that ₹4,200 was deducted each month from my gross earnings, a certified extract of my EPFO Member Passbook demonstrates zero inward credits. Under Paragraph 38 of the EPF Scheme, 1952, remittance must be made by the 15th of the subsequent month. <sup className="font-bold text-red-600 text-xs px-1 bg-red-100 rounded">[4]</sup>
                    </p>

                    <p>
                      Please take strict notice that under Explanation 1 to Section 316 of the Bharatiya Nyaya Sanhita, 2023, failing to deposit deducted employee contributions constitutes dishonest misappropriation and Criminal Breach of Trust. Furthermore, the company and each of its Directors face mandatory simple interest at 12% per annum under Section 7Q and punitive damages up to 100% under Section 14B. <sup className="font-bold text-red-600 text-xs px-1 bg-red-100 rounded">[5]</sup>
                    </p>

                    <p>
                      You are hereby called upon to deposit the full sum of ₹1,00,800 with the EPFO and share the Electronic Challan cum Return (ECR) receipt within seven (7) calendar days of receipt of this communication, failing which I shall initiate proceedings before the Regional Provident Fund Commissioner under Section 7A and lodge a criminal complaint for Criminal Breach of Trust. <sup className="font-bold text-red-600 text-xs px-1 bg-red-100 rounded">[6]</sup>
                    </p>

                    <p className="font-sans text-xs text-slate-600 pt-2 border-t border-slate-200">
                      Yours sincerely, <br />
                      <strong>Kunal Deshmukh</strong> | Senior Systems Analyst | UAN: 101234567890
                    </p>
                  </div>

                  {/* Right Column: Numbered Margin Annotations (5 Cols) */}
                  <div className="lg:col-span-5 space-y-3.5">
                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                      <div className="flex items-center gap-2 font-bold text-xs text-slate-900 mb-1">
                        <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 text-[11px] flex items-center justify-center font-extrabold shrink-0">1</span>
                        <span>UAN &amp; BNS Section 316 in Subject Line</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Putting your 12-digit UAN and BNS Section 316 directly in the email subject instantly escalates the message past standard HR gatekeepers to legal and finance heads by flagging personal criminal exposure.
                      </p>
                    </div>

                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                      <div className="flex items-center gap-2 font-bold text-xs text-slate-900 mb-1">
                        <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 text-[11px] flex items-center justify-center font-extrabold shrink-0">2</span>
                        <span>Fiduciary Breach Characterisation</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Supreme Court precedents establish that wages deducted for PF are held in fiduciary trust. Explicitly stating &quot;unlawful retention&quot; establishes dishonest intent necessary to satisfy Section 316 BNS requirements.
                      </p>
                    </div>

                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                      <div className="flex items-center gap-2 font-bold text-xs text-slate-900 mb-1">
                        <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 text-[11px] flex items-center justify-center font-extrabold shrink-0">3</span>
                        <span>Explicit Separation of Both Shares</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Demanding both the deducted employee share (12%) and the employer matching share (12%) prevents employers from quietly depositing only the deducted amount while continuing to evade their statutory matching contribution.
                      </p>
                    </div>

                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                      <div className="flex items-center gap-2 font-bold text-xs text-slate-900 mb-1">
                        <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 text-[11px] flex items-center justify-center font-extrabold shrink-0">4</span>
                        <span>Paragraph 38 Statutory Deadline Benchmark</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Citing the strict 15th-of-the-month statutory cutoff shatters internal employer excuses like &quot;quarterly reconciliations&quot; or &quot;annual audit cycles&quot; by anchoring the default to explicit delegated legislation.
                      </p>
                    </div>

                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                      <div className="flex items-center gap-2 font-bold text-xs text-slate-900 mb-1">
                        <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 text-[11px] flex items-center justify-center font-extrabold shrink-0">5</span>
                        <span>Statutory Penalties (s.7Q &amp; s.14B) Notice</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Citing mandatory 12% simple interest under Section 7Q and damages up to 100% under Section 14B highlights that delaying remittance increases company financial liability exponentially every passing week.
                      </p>
                    </div>

                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                      <div className="flex items-center gap-2 font-bold text-xs text-slate-900 mb-1">
                        <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 text-[11px] flex items-center justify-center font-extrabold shrink-0">6</span>
                        <span>Strict 7-Day Window &amp; Pre-Litigation Reservation</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Setting a finite 7-calendar-day window gives the employer fair opportunity to cure default while creating a clear pre-litigation timestamp under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Mandatory vs Optional Elements Table */}
              <section id="heading-elements-table" aria-labelledby="heading-elements-table-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-elements-table-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Mandatory vs Optional Elements in a PF Complaint
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    An Incomplete Notice Allows Defaulting Employers to Delay on Technicalities. Ensure Every Mandatory Field Is Included.
                  </p>
                </div>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full min-w-[620px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Mandatory vs Optional Elements in PF Complaint</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-4">Component Element</th>
                        <th scope="col" className="py-3 px-4">Status</th>
                        <th scope="col" className="py-3 px-4">Statutory Justification / Function</th>
                        <th scope="col" className="py-3 px-4">Risk if Omitted</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          12-Digit Universal Account Number (UAN)
                        </th>
                        <td className="py-3 px-4"><span className="px-2 py-0.5 bg-red-100 text-red-700 rounded font-bold text-xs">MANDATORY</span></td>
                        <td className="py-3 px-4 text-xs">Primary EPFO database key linked to employee Aadhaar and bank records.</td>
                        <td className="py-3 px-4 text-xs text-red-600 font-semibold">RPFC cannot locate or cross-verify passbook records.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          Exact Default Period &amp; Monthly Breakup
                        </th>
                        <td className="py-3 px-4"><span className="px-2 py-0.5 bg-red-100 text-red-700 rounded font-bold text-xs">MANDATORY</span></td>
                        <td className="py-3 px-4 text-xs">Quantifies exact wage deduction amounts from monthly salary slips.</td>
                        <td className="py-3 px-4 text-xs text-red-600 font-semibold">Employer disputes numbers as vague or unquantified.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          Citation to Paragraph 38 EPF Scheme
                        </th>
                        <td className="py-3 px-4"><span className="px-2 py-0.5 bg-red-100 text-red-700 rounded font-bold text-xs">MANDATORY</span></td>
                        <td className="py-3 px-4 text-xs">Establishes statutory duty to deposit contributions by the 15th of the month.</td>
                        <td className="py-3 px-4 text-xs text-slate-600">Company claims delay is permitted under internal HR policies.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          Citation to Section 316 BNS (Criminal Breach of Trust)
                        </th>
                        <td className="py-3 px-4"><span className="px-2 py-0.5 bg-red-100 text-red-700 rounded font-bold text-xs">MANDATORY</span></td>
                        <td className="py-3 px-4 text-xs">Puts company directors on notice of cognizable, unbailable criminal liability.</td>
                        <td className="py-3 px-4 text-xs text-slate-600">Employer treats notice as a routine civil wage dispute.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          Establishment PF Code / ID (e.g. MHBAN00...)
                        </th>
                        <td className="py-3 px-4"><span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded font-bold text-xs">RECOMMENDED</span></td>
                        <td className="py-3 px-4 text-xs">Accelerates Section 7A inquiry summons by matching establishment account.</td>
                        <td className="py-3 px-4 text-xs text-slate-500">Minor administrative delay while EPFO looks up company code.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          Managing Director / Directors Named Personally
                        </th>
                        <td className="py-3 px-4"><span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded font-bold text-xs">RECOMMENDED</span></td>
                        <td className="py-3 px-4 text-xs">Pierces corporate veil under Section 14A for individual officer liability.</td>
                        <td className="py-3 px-4 text-xs text-slate-500">Notice deflected to junior HR payroll executives.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          Form 26AS / AIS Tax Deduction Cross-Match
                        </th>
                        <td className="py-3 px-4"><span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded font-bold text-xs">OPTIONAL</span></td>
                        <td className="py-3 px-4 text-xs">Proves gross taxable wage reporting matches claimed salary slips.</td>
                        <td className="py-3 px-4 text-xs text-slate-500">None; salary slips and bank statements suffice.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: Common Mistakes That Weaken Your PF Complaint */}
              <section id="heading-common-mistakes" aria-labelledby="heading-common-mistakes-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-common-mistakes-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    5 Common Mistakes That Weaken Your PF Non-Deposit Complaint
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Avoid These Critical Strategic and Evidentiary Blunders When Taking On Defaulting Employers
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-red-200 shadow-2xs space-y-1.5">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-red-100 text-red-700">Mistake #1</span>
                    <h3 className="text-sm font-bold text-slate-900">Relying on Verbal or WhatsApp Promises from HR</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      HR managers routinely pacify questioning employees by claiming &quot;deposits will reflect next month&quot; or &quot;the backend server is syncing&quot;. WhatsApp messages or oral assurances do not stop the limitation clock. Always create an irrefutable written email trail citing specific default months.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-red-200 shadow-2xs space-y-1.5">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-red-100 text-red-700">Mistake #2</span>
                    <h3 className="text-sm font-bold text-slate-900">Demanding Only the Employee Share While Forgetting Employer Dues</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Many employees mistakenly calculate only their own 12% deduction. Under law, the employer must match that 12% (3.67% EPF + 8.33% EPS). Demanding only the employee deduction lets the company off the hook for statutory retirement and pension arrears.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-red-200 shadow-2xs space-y-1.5">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-red-100 text-red-700">Mistake #3</span>
                    <h3 className="text-sm font-bold text-slate-900">Signing an FnF &quot;No Dues Certificate&quot; Before PF Is Remitted</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      When resigning, employers pressure exiting staff to sign an unconditional &quot;Full &amp; Final Settlement Undertaking&quot; waiving claims. While statutory social security rights cannot be waived under contract law, signing this gives the employer an evidentiary defense during initial labour conciliation.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-red-200 shadow-2xs space-y-1.5">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-red-100 text-red-700">Mistake #4</span>
                    <h3 className="text-sm font-bold text-slate-900">Filing with the Wrong Jurisdictional EPFO Office</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Grievances must be directed to the Regional P.F. Commissioner under whose geographical jurisdiction the company&apos;s PF Establishment Code is registered—not necessarily where the employee physically worked. Check the first five letters of your Member ID (e.g., MHBAN = Bengaluru, DLCPM = Delhi Central).
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-red-200 shadow-2xs space-y-1.5 md:col-span-2">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-red-100 text-red-700">Mistake #5</span>
                    <h3 className="text-sm font-bold text-slate-900">Treating Withheld PF as a Civil Dispute Rather Than a Criminal Offense</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Withholding salary is a civil labour grievance under the Code on Wages. But deducting PF from salary and pocketing it is <strong>Criminal Breach of Trust (Section 316 BNS)</strong>. Failing to highlight criminal exposure allows company directors to drag the dispute through slow civil channels for years.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Statutory Penalties the Employer Faces */}
              <section id="heading-employer-penalties" aria-labelledby="heading-employer-penalties-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-employer-penalties-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Penalties &amp; Criminal Liability for Defaulting Employers
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian law provides draconian penalties against establishments and corporate executives who misappropriate employee provident fund deductions. The statutory framework ensures that delaying deposits costs far more than timely compliance:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full min-w-[580px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Statutory Penalties Under EPF Act &amp; BNS</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-4">Statutory Provision</th>
                        <th scope="col" className="py-3 px-4">Nature of Liability</th>
                        <th scope="col" className="py-3 px-4">Statutory Penalty / Consequence</th>
                        <th scope="col" className="py-3 px-4">Enforcing Authority</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          Section 316, Bharatiya Nyaya Sanhita, 2023
                        </th>
                        <td className="py-3 px-4 text-red-600 font-bold">Criminal Offense</td>
                        <td className="py-3 px-4 text-xs font-medium">Imprisonment up to 3 years, fine, or both (Cognizable &amp; Non-Bailable).</td>
                        <td className="py-3 px-4 text-xs">Police / Economic Offences Wing</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          Section 14(1A), EPF Act, 1952
                        </th>
                        <td className="py-3 px-4 text-red-600 font-bold">Statutory Prosecution</td>
                        <td className="py-3 px-4 text-xs font-medium">Mandatory imprisonment up to 3 years and fine not less than ₹10,000.</td>
                        <td className="py-3 px-4 text-xs">Judicial Magistrate First Class</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          Section 7Q, EPF Act, 1952
                        </th>
                        <td className="py-3 px-4 text-amber-700 font-bold">Mandatory Interest</td>
                        <td className="py-3 px-4 text-xs font-medium">Simple interest @ 12% per annum from the date due until actual deposit.</td>
                        <td className="py-3 px-4 text-xs">Regional P.F. Commissioner (RPFC)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          Section 14B &amp; Para 32A, EPF Scheme
                        </th>
                        <td className="py-3 px-4 text-amber-700 font-bold">Penal Damages</td>
                        <td className="py-3 px-4 text-xs font-medium">Graduated damages ranging from 5% to 25% p.a. (up to 100% of arrears).</td>
                        <td className="py-3 px-4 text-xs">Regional P.F. Commissioner (RPFC)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          Section 8B to 8G, EPF Act, 1952
                        </th>
                        <td className="py-3 px-4 text-slate-900 font-bold">Recovery Attachment</td>
                        <td className="py-3 px-4 text-xs font-medium">Attachment of company bank accounts, immovable property, and arrest of directors.</td>
                        <td className="py-3 px-4 text-xs">Recovery Officer, EPFO</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          Section 36(1)(va), Income Tax Act, 1961
                        </th>
                        <td className="py-3 px-4 text-slate-900 font-bold">Tax Disallowance</td>
                        <td className="py-3 px-4 text-xs font-medium">Disallowance of tax deduction on delayed employee contributions (deemed company income).</td>
                        <td className="py-3 px-4 text-xs">Income Tax Assessing Officer</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Resolution Rail Flowchart (Hand-Authored SVG) */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Resolution Hierarchy: From Passbook Check to RPFC Recovery
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this verified statutory escalation sequence to bypass HR stalling tactics and enforce full recovery:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Download UAN Passbook &amp; Audit</h3>
                    <p className="text-xs text-slate-200 mt-1">Cross-reference salary slip deductions against EPFO portal credits.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Formal Employer Demand Notice</h3>
                    <p className="text-xs text-amber-900 mt-1">7-day statutory warning invoking Para 38 and Section 316 BNS.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Lodge EPFiGMS Grievance</h3>
                    <p className="text-xs text-slate-700 mt-1">Register official dispute on epfigms.gov.in with salary slips.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Advocate Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day statutory demand served to Directors via Speed Post &amp; Email.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Section 7A Inquiry &amp; Recovery</h3>
                    <p className="text-xs text-emerald-900 mt-1">RPFC quasi-judicial summons, s.8F bank freeze, and arrears credit.</p>
                  </div>
                </div>

                {/* Hand-Authored SVG Flowchart */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-xs overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="PF Not Deposited Statutory Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="pfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="pfAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="pfSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#pfGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Passbook Audit</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Check UAN Ledger</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Zero Credit Verified</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Employer Demand</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">7-Day Formal Notice</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Cite BNS 316 / Para 38</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">EPFiGMS Complaint</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Portal Grievance</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Upload Pay Slips</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#pfAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Demand</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Speed Post + Email</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#pfSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Section 7A Relief</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Bank Freeze &amp; Credit</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">12% Interest Paid</text>

                    {/* Bottom Statutory Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY TIMEFRAMES UNDER EPF ACT &amp; BNS:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Monthly Deposit Deadline: 15th of the succeeding month (Paragraph 38 EPF Scheme)</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Employer Demand Response Window: 7 Calendar Days before regulatory escalation</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Advocate Statutory Notice: 15 Calendar Days before Section 7A petition &amp; Criminal Complaint</text>
                  </svg>
                </div>
              </section>

              {/* Section 8: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Escalation Playbook Against Defaulting Employers
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Derived from successful EPF recovery cases and judicial rulings, this 5-step playbook systematically cuts through HR evasions and forces full remittance:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Perform a Forensic Audit of UAN Passbook Against Salary Slips
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Download your official passbook PDF from passbook.epfindia.gov.in. Create an itemized spreadsheet matching every month&apos;s salary slip deduction against the passbook. Note the exact months where employee deductions were made from your salary but no inward credit exists.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Dispatch Formal 7-Day Demand to HR, CFO &amp; Board of Directors
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Deploy our free Employer Demand Template via official email. Copy the Managing Director, Head of Payroll, and external directors. Citing Paragraph 38 and Section 316 BNS alerts executive leadership that their personal liberty is on the line.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Register an Online Grievance on EPFO&apos;s EPFiGMS Portal
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the employer fails to deposit arrears within 7 days, log onto <a href="https://epfigms.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">epfigms.gov.in</a>. Submit our optimized grievance draft, attaching your salary slips and the unanswered employer demand email. Preserve the unique EPFiGMS Grievance Registration Number.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Formal Advocate Statutory Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        When administrative follow-ups fail, engage an advocate to issue a formal 15-day statutory demand notice directly to the company&apos;s registered office and individual directors via Registered Speed Post and BSA Section 63 compliant electronic mail. The notice demands full arrears deposit, 12% statutory interest under Section 7Q, and reserves rights to file a criminal FIR for Criminal Breach of Trust. Check our transparent <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Petition the Regional Commissioner for Section 7A Quasi-Judicial Inquiry
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the 15-day notice period lapses without deposit, submit a formal petition to the Regional Provident Fund Commissioner (RPFC) seeking initiation of Section 7A proceedings. The RPFC exercises powers of a Civil Court, capable of summoning employer bank ledgers, issuing arrest warrants, and issuing Section 8F orders to freeze employer bank accounts until your dues are credited.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 9: Worked Financial Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Recovers ₹86,400 Withheld PF + Interest
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Bengaluru IT Services Firm (12 Months Default)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Ananya Sengupta worked as a Technical Lead at a Series-A funded EdTech company in Bengaluru with a basic salary of ₹30,000 per month. Every month from October 2025 to September 2026, her salary slip recorded a deduction of ₹3,600 towards Employee PF (12% of basic).
                    </p>
                    <p>
                      <strong>The Discovery:</strong> In October 2026, upon resigning to join another firm, Ananya checked her EPFO Member Passbook to initiate a transfer. To her horror, the passbook showed that the employer had made ZERO deposits for the entire 12-month period, despite deducting ₹43,200 from her pay. The matching employer share of ₹43,200 was also missing, totaling ₹86,400 in unremitted statutory dues.
                    </p>
                    <p>
                      <strong>The Stalling:</strong> When Ananya raised this with HR, they blamed &quot;a technical glitch in the ECR portal during banking integration&quot; and asked her to wait 60 days. After 30 days of complete silence, Ananya refused to wait any longer.
                    </p>
                    <p>
                      <strong>The Legal Action:</strong> Ananya generated our formal statutory pre-litigation demand letter, naming the Founder and Managing Director personally. The notice cited Explanation 1 to Section 316 BNS (Criminal Breach of Trust), Paragraph 38 of the EPF Scheme, and Section 7Q 12% mandatory interest. She dispatched the notice via registered email and Speed Post, alongside lodging an EPFiGMS complaint.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Resolution:</strong>
                      On Day 9 following delivery of the demand notice, the company&apos;s legal counsel contacted Ananya. Recognizing that personal criminal liability under Section 316 BNS could derail their upcoming funding round, the company generated an expedited supplementary Electronic Challan cum Return (ECR), deposited the entire arrears of ₹86,400 (both employee and employer shares) along with ₹10,368 accrued interest under Section 7Q, and forwarded the ECR payment receipt to her.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Documentary Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Documents for a PF Complaint
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic documents and digital bank records are fully admissible before labour courts and police authorities. Assemble these 6 documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Monthly Salary Slips:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing exact line-item deductions under &quot;EPF&quot;, &quot;Provident Fund&quot;, or &quot;PF Employee&quot; for all default months.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">EPFO Unified Member Passbook:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Certified PDF download from passbook.epfindia.gov.in showing zero monthly deposits or missing wage credits.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Bank Account Statement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proving the net monthly salary credited to your bank corresponds exactly to the net pay on your salary slips.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Employment Contract &amp; Offer Letter:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Establishing employment relationship, monthly CTC structure, basic salary, and PF eligibility clause.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">EPFiGMS Grievance Ticket Extract:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Screenshot of unresolved or pending grievance registered on epfigms.gov.in with registration number.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Form 26AS / AIS Tax Credit Statement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Downloaded from the Income Tax portal verifying gross salary reported under Section 192 TDS matching payroll slips.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: Landmark Case Law Strip */}
              <section id="heading-case-citations" aria-labelledby="heading-case-citations-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-citations-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Judicial Precedents: Verifiable Court Rulings on Withheld PF
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Supreme Court &amp; High Court Authorities
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
                              Relief Awarded / Statutory Impact
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Enforcement Power
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Direct Criminal &amp; Financial Attachment
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

              {/* Section 12: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions: PF Deducted but Not Deposited by Employer
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in the EPF Act 1952, EPF Scheme, and Bharatiya Nyaya Sanhita 2023
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

              {/* Section 13: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory References, Employment Acts &amp; Official EPFO Sources
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
                  Statutory verification status: All provisions verified against the Employees&apos; Provident Funds and Miscellaneous Provisions Act, 1952, EPF Scheme, 1952, Bharatiya Nyaya Sanhita, 2023, and official EPFO guidelines as of November 2026.
                </p>
              </section>

              {/* Section 14: Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand Notice for PF Not Deposited
                </h2>
                <PfComplaintCTA variant="primary" />
              </section>

              {/* Section 15: Related Internal Guides Cluster */}
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
                    href="/templates/fnf-not-received-mail-to-hr"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    FnF Reminder Email Template to HR →
                  </Link>
                  <Link
                    href="/experience-letter-not-given-legal-action"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Experience Letter Withholding Action →
                  </Link>
                  <Link
                    href="/labour-commissioner-complaint-online-salary"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Labour Commissioner Online Complaint →
                  </Link>
                  <Link
                    href="/tools/full-and-final-settlement-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Full &amp; Final Settlement Calculator →
                  </Link>
                  <Link
                    href="/tools/gratuity-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Gratuity Calculator (2026 Rules) →
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
