import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import FnfNoticeCTA from "./FnfNoticeCTA";
import FnfTableOfContents from "./FnfTableOfContents";
import FnfEmailWorkspace from "./FnfEmailWorkspace";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "FnF Not Received Mail to HR: Free Template (Word/PDF)",
  description:
    "A firm, legally worded email to HR for delayed FnF, with a 7-day deadline and the Code on Wages reference. Copy or download free.",
  alternates: {
    canonical: `${SITE_URL}/templates/fnf-not-received-mail-to-hr`,
  },
  openGraph: {
    title: "Full & Final Settlement Not Received? Copy This Email to HR",
    description:
      "A firm, legally worded email to HR for delayed FnF, with a 7-day deadline and the Code on Wages reference. Copy or download free.",
    url: `${SITE_URL}/templates/fnf-not-received-mail-to-hr`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Full & Final Settlement Not Received? Copy This Email to HR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full & Final Settlement Not Received? Copy This Email to HR",
    description:
      "A firm, legally worded email to HR for delayed FnF, with a 7-day deadline and the Code on Wages reference. Copy or download free.",
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
    title: "Code on Wages, 2019 (Act No. 29 of 2019) — Section 17(2) Statutory Wage Settlement Within 2 Working Days",
    url: "https://www.indiacode.nic.in/handle/123456789/13114",
  },
  {
    title: "Code on Wages, 2019 — Section 18 Restrictions on Deductions & Section 54 Penalties for Unlawful Withholding",
    url: "https://labour.gov.in/sites/default/files/the_code_on_wages_rules_2020.pdf",
  },
  {
    title: "Payment of Gratuity Act, 1972 — Section 7(3) & 7(3A) Mandatory 30-Day Disbursement & 10% Compound Interest",
    url: "https://www.indiacode.nic.in/handle/123456789/1498",
  },
  {
    title: "Ministry of Labour & Employment — Samadhan Dispute Resolution Portal",
    url: "https://samadhan.labour.gov.in/",
  },
  {
    title: "Employees' Provident Funds and Miscellaneous Provisions Act, 1952 — Exit Marking & Form 19/10C Settlement",
    url: "https://www.epfindia.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Digital Admissibility for HR Emails, Exit Slips & Bank Statements)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    question: "When should I send a full and final settlement reminder email to HR?",
    answer:
      "Under Section 17(2) of the Code on Wages, 2019, an employer is legally required to pay all wages and dues within 2 working days of resignation or removal. While Indian corporate practice informally observes a 30 to 45-day clearance window, you should send a gentle follow-up email on Day 15 post-relieving. If 30 days elapse without a settlement worksheet or bank credit, immediately send this firm 7-day statutory demand email referencing Section 17(2) and Section 18.",
  },
  {
    question: "Can an employer delay my FnF settlement citing internal company policy of 45 or 90 days?",
    answer:
      "No. It is a settled principle of Indian labour jurisprudence that internal corporate HR handbooks or employment contracts cannot override parliamentary statutes. Section 17(2) of the Code on Wages, 2019 mandates wage and terminal dues settlement within 2 working days. Even under legacy state Shops and Establishments Acts, payment cannot be deferred beyond 30 days without attracting statutory interest and regulatory penalties.",
  },
  {
    question: "How do I format a delay in full and final settlement mail format in Word?",
    answer:
      "A legally binding FnF delay mail in Word should feature: (1) Precise employment particulars including Staff ID, designation, and Last Working Day, (2) Confirmation that all company assets, laptops, and handovers were accepted, (3) An itemized financial table listing unpaid salary, leave encashment, gratuity, and expense claims, (4) Statutory citations to Section 17(2) of the Code on Wages and Section 7(3A) of the Gratuity Act, (5) Bank NEFT/RTGS account coordinates, and (6) A definitive 7-day deadline before escalating to an advocate legal notice. Use our free Word export button above to generate a pre-formatted .doc file.",
  },
  {
    question: "Can my employer deduct notice period buyout money from my FnF settlement?",
    answer:
      "An employer can only recover notice pay if you departed without serving the contractual notice period agreed in your appointment letter. If you served the full notice period or obtained written approval from management for an early exit or waiver, any subsequent deduction from earned salary or leave encashment violates Section 18 of the Code on Wages. To calculate exact allowable recoveries, use our free notice period recovery calculator.",
  },
  {
    question: "Can HR withhold my relieving letter and experience certificate until FnF is settled?",
    answer:
      "No. Withholding service certificates and relieving documentation after an employee has handed over company assets is unlawful. High Courts across India have repeatedly held that withholding exit documents impairs an individual's constitutional right to livelihood under Article 21. If HR conditions the release of your relieving letter on signing a disputed FnF waiver, refuse to sign and serve an immediate advocate legal demand notice.",
  },
  {
    question: "What is the penalty if an employer fails to pay gratuity within 30 days?",
    answer:
      "Under Section 7(3A) of the Payment of Gratuity Act, 1972, if an employer fails to disburse gratuity within 30 calendar days of the employee leaving service, the employer is legally obligated to pay simple compound interest at the rate notified by the Central Government (currently 10% per annum) for every day of delay. Check your exact eligibility using our free gratuity calculator.",
  },
  {
    question: "What if HR ignores my FnF follow up mail after the 7-day deadline expires?",
    answer:
      "If HR fails to reply or credit your dues within 7 calendar days of this email, execute a formal 3-step escalation: (1) Re-forward the mail to the Managing Director, CFO, and Board of Directors, (2) Engage an advocate to issue a 15-day statutory demand notice via Registered Speed Post and legal email, and (3) File a formal recovery claim before the jurisdictional Labour Commissioner on the central Samadhan portal or under Section 33C(2) of the Industrial Disputes Act.",
  },
  {
    question: "Company FnF settlement nahi de rahi toh legal notice kaise bheje?",
    answer:
      "Agar company 30–45 din beet jane par bhi aapka full and final settlement roke hue hai ya notice period ke naam par galat deduction kar rahi hai, toh aap verified advocate ke madhyam se statutory legal notice bhej sakte hain. LegalRecovery.in par advocate Section 17(2) Code on Wages, Section 7(3A) Gratuity Act aur 18% penal interest ke sath company ke Registered Office aur Directors ko 15-day demand notice bhejte hain.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Full & Final Settlement Not Received? Copy This Email to HR",
  description:
    "A firm, legally worded email to HR for delayed FnF, with a 7-day deadline and the Code on Wages reference. Copy or download free.",
  datePublished: "2026-11-03T15:30:00+05:30",
  dateModified: "2026-11-03T15:30:00+05:30",
  mainEntityOfPage: `${SITE_URL}/templates/fnf-not-received-mail-to-hr`,
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
    name: "Full and Final Settlement Email Template",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const DIGITAL_DOCUMENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  name: "Full and Final Settlement Delayed Demand Email Template to HR",
  description:
    "Statutory legal template for demanding delayed FnF settlement dues, earned salary, gratuity, and leave encashment under Section 17(2) of the Code on Wages, 2019.",
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
      name: "FnF Email to HR Template",
      item: `${SITE_URL}/templates/fnf-not-received-mail-to-hr`,
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

export default function FnfEmailTemplatePage() {
  const breadcrumbItems = [
    { label: "Employment Recoveries", href: "/services/recovery-of-salary-and-employment-dues" },
    { label: "FnF Delay Legal Notice", href: "/legal-notice-for-full-and-final-settlement-delay" },
    { label: "FnF Email Template", href: "/templates/fnf-not-received-mail-to-hr" },
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
              <span>Code on Wages 2019 • Section 17(2) Mandate</span>
              <span className="text-red-500">•</span>
              <span>Free Word &amp; PDF Template</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Full &amp; Final Settlement Not Received? Copy This Email to HR
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Full &amp; Final Settlement Recovery Mandate)
              </p>
              <p>
                Under Section 17(2) of the Code on Wages, 2019, an employer is legally obligated to settle and pay all pending wages and dues within 2 working days of an employee&apos;s resignation, dismissal, or retrenchment. When HR delays FnF beyond 30 to 45 days citing internal audit delays, send this formal 7-day demand email referencing Section 17(2), claiming 18% statutory interest, and reserving rights to serve an advocate legal notice and file on the Ministry of Labour&apos;s Samadhan portal.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">2 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Statutory FnF Limit (s.17(2) Code on Wages)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">7 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Firm Demand Deadline in Template
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">18% p.a.</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Interest Claim on Withheld Terminal Dues
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
            <FnfTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Overview & When to Use This Email */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  When to Send FnF Demand Email: 30-Day Delay vs Law
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Across Indian corporations, IT services companies, startups, and manufacturing enterprises, Human Resources departments routinely tell exiting employees that Full and Final (FnF) settlements take &quot;45 to 60 business days&quot; or &quot;two payroll cycles&quot; due to multi-tier departmental approvals. Months pass, yet employees receive neither their earned pay, accrued leave encashment, statutory gratuity, nor formal relieving letters.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  However, under Indian labour legislation, this arbitrary timeline has zero legal backing. Under{" "}
                  <strong>Section 17(2) of the Code on Wages, 2019</strong>, the statutory timeline for clearing all terminal dues upon resignation or termination is strictly{" "}
                  <strong>two working days</strong>. Even under legacy state Shops and Commercial Establishments legislation, an employer cannot hold employee dues indefinitely.
                </p>
                <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-xs sm:text-sm text-amber-900 space-y-1">
                  <strong className="font-bold block">When to deploy this template:</strong>
                  <p>
                    Use this email template when <strong>15 to 30 days</strong> have passed since your Last Working Day (LWD), all company assets have been handed over, and HR has stopped responding or provided evasive updates. It creates an indispensable written evidentiary record under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong> before serving an advocate legal notice.
                  </p>
                </div>
              </section>

              {/* Section 2: Interactive Letter Workspace (Archetype P1 Client Island) */}
              <section id="heading-email-workspace" aria-labelledby="heading-email-workspace-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-email-workspace-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Interactive Email Workspace: Copy or Download in Word (.doc)
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Customizable Letter Generator
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600">
                  Fill in your specific employment credentials below. The formal legal email will live-update on the right. Select your preferred tone, copy to clipboard, or download as an editable Word document:
                </p>

                {/* Archetype P1 Live Fill Island */}
                <FnfEmailWorkspace />
              </section>

              {/* Section 3: Clause-by-Clause Notes */}
              <section id="heading-clause-breakdown" aria-labelledby="heading-clause-breakdown-title" className="scroll-mt-28 space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-clause-breakdown-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Clause-by-Clause Legal Notes: Why Each Paragraph Is Drafted This Way
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Understanding the Statutory Architecture Behind Every Sentence in Your Demand Email
                  </p>
                </div>

                <dl className="space-y-4 text-xs sm:text-sm">
                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs">
                    <dt className="font-extrabold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] font-bold text-xs flex items-center justify-center">1</span>
                      Citation to Section 17(2) of the Code on Wages, 2019
                    </dt>
                    <dd className="mt-2 text-slate-700 leading-relaxed pl-7">
                      <strong>Why it&apos;s there:</strong> Employers often assume employees are unaware of the law and will meekly wait for 60 to 90 days. Invoking Section 17(2) immediately shatters the company&apos;s &quot;45-day payroll policy&quot; defense by demonstrating that withholding pay beyond two working days is a statutory default punishable under Section 54.
                    </dd>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs">
                    <dt className="font-extrabold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] font-bold text-xs flex items-center justify-center">2</span>
                      Explicit Confirmation of Asset Clearance &amp; Knowledge Handover
                    </dt>
                    <dd className="mt-2 text-slate-700 leading-relaxed pl-7">
                      <strong>Why it&apos;s there:</strong> The most common tactic HR uses to justify FnF delay is claiming that IT asset verification, laptop return, or departmental sign-off is pending. Stating upfront that all handovers are 100% complete and signed off pre-empts this defense in writing.
                    </dd>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs">
                    <dt className="font-extrabold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] font-bold text-xs flex items-center justify-center">3</span>
                      Itemized Breakdown of Financial Components
                    </dt>
                    <dd className="mt-2 text-slate-700 leading-relaxed pl-7">
                      <strong>Why it&apos;s there:</strong> Lump-sum demands allow employers to obscure illegal deductions. By itemizing earned salary, gratuity, leave encashment, and unreimbursed business expenses, you force the employer to either pay or provide specific item-by-item justifications.
                    </dd>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs">
                    <dt className="font-extrabold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] font-bold text-xs flex items-center justify-center">4</span>
                      Section 7(3A) Gratuity Act 10% Compound Interest Mandate
                    </dt>
                    <dd className="mt-2 text-slate-700 leading-relaxed pl-7">
                      <strong>Why it&apos;s there:</strong> For employees with 5 or more continuous years of service, gratuity is a statutory entitlement. Under Section 7(3A), an employer who fails to pay within 30 days is liable for compound interest at 10% per annum. Highlighting this financial liability incentivizes HR to process the claim urgently. Use our <Link href="/tools/gratuity-calculator" className="text-blue-700 underline font-semibold">gratuity calculator</Link> to compute your exact entitlement.
                    </dd>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs">
                    <dt className="font-extrabold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] font-bold text-xs flex items-center justify-center">5</span>
                      7-Day Demand Window &amp; Pre-Litigation Reservation
                    </dt>
                    <dd className="mt-2 text-slate-700 leading-relaxed pl-7">
                      <strong>Why it&apos;s there:</strong> Courts and Labour Commissioners examine whether the employee gave the employer fair opportunity to cure the default. A specific 7-day calendar window establishes unreasonable employer recalcitrance if ignored, making subsequent awards for legal costs and interest far easier to secure.
                    </dd>
                  </div>
                </dl>
              </section>

              {/* Section 4: Resolution Flowchart (Hand-Authored SVG) */}
              <section id="heading-resolution-flow" aria-labelledby="heading-resolution-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-resolution-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Resolution Hierarchy: From Resignation to Terminal Recovery
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this chronological recovery hierarchy to enforce your statutory wage rights and prevent prolonged payroll delays:
                </p>

                {/* Mobile Responsive Step Sequence */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Last Working Day (LWD)</h3>
                    <p className="text-xs text-slate-200 mt-1">Asset clearance, laptop return &amp; departmental handover sign-off completed.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">2-Day Statutory Rule Lapses</h3>
                    <p className="text-xs text-amber-900 mt-1">Section 17(2) Code on Wages settlement deadline passes without payment.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Send 7-Day Demand Email</h3>
                    <p className="text-xs text-slate-700 mt-1">Deploy this legally worded template to HR Head and Director with itemized dues.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Advocate Legal Demand Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day statutory demand served via Registered Speed Post + BSA Section 63 email.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">100% Recovery / Samadhan Portal</h3>
                    <p className="text-xs text-emerald-900 mt-1">Direct settlement inward credit or recovery order with 18% statutory interest.</p>
                  </div>
                </div>

                {/* Hand-Authored Inline SVG Flowchart */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Full and Final Settlement Recovery Flowchart"
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
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Relieving / LWD</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Asset Handover Done</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Clearance Confirmed</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Day 2 Limit Lapses</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">s.17(2) Breach Begins</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">HR Delays Settlement</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">7-Day HR Email</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Deploy This Template</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Itemized Claim + UTR</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#fnfAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Statutory Term</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Speed Post + Section 63</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#fnfSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Bank Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">100% FnF + Relieving</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or Samadhan / Order 37</text>

                    {/* Bottom Benchmark Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY RECOVERY BENCHMARKS UNDER INDIAN LABOUR LAW:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Earned Wages &amp; FnF Settlement: Mandated within 2 working days of exit (Section 17(2), Code on Wages 2019)</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Gratuity Disbursement: 30 calendar days mandatory; 10% compound interest thereafter (Section 7(3A) Gratuity Act)</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Relieving Letter Withholding: Unconstitutional restriction on trade under Section 27 Contract Act &amp; Article 21</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: If HR Ignores It - 5-Step Escalation Playbook */}
              <section id="heading-escalation-ladder" aria-labelledby="heading-escalation-ladder-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-escalation-ladder-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  &quot;If HR Ignores It&quot;: The 5-Step Escalation Ladder After Day 7
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If HR fails to credit your bank account or send an itemized worksheet within the 7-day deadline specified in your email, do not engage in endless circular WhatsApp or telephone discussions. Follow this authoritative statutory escalation ladder:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Re-Forward with Director &amp; Board of Directors in Copy
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Re-forward the unanswered email marking the Chief Executive Officer (CEO), Chief Financial Officer (CFO), and Managing Director. Note that operational HR defaults create corporate liability for directors under Section 54 of the Code on Wages.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Formal Statutory Advocate Legal Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Instruct a verified labour recovery advocate to issue a 15-day statutory demand notice. Dispatched via Registered Speed Post with postal acknowledgment and served electronically under Section 63 BSA, the notice demands 100% of the dues plus 18% penal interest and immediate release of your relieving letter. Read our detailed guide on <Link href="/legal-notice-for-full-and-final-settlement-delay" className="text-blue-700 underline font-semibold">legal notice for FnF settlement delay</Link> and view transparent <Link href="/legal-notice-charges" className="text-blue-700 underline font-semibold">legal notice charges</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Lodge an Online Grievance on the Ministry of Labour Samadhan Portal
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        File an electronic industrial dispute on the central government&apos;s <a href="https://samadhan.labour.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">Samadhan Portal</a> or before the State Labour Commissioner. The Labour Officer summons the company&apos;s HR representation for mandatory conciliation proceedings.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File Form N Before the Controlling Authority (Gratuity Withholding)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the employer withholds statutory gratuity, submit Form N under the Payment of Gratuity Act before the Controlling Authority. The authority has summary powers to issue recovery certificates to the District Collector to recover dues as arrears of land revenue.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Initiate Section 33C(2) Claim or Summary Suit Under Order 37 CPC
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        For workmen, file an application under Section 33C(2) of the Industrial Disputes Act before the Labour Court. For managerial or supervisory professionals, file a summary recovery suit under Order 37 of the Code of Civil Procedure (CPC) for undisputed debts, where the employer cannot defend without proving bona fide payment.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Deadlines & Allowable Deductions */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deadlines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  FnF Breakdown: Statutory Timelines &amp; Deductions
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every rupee in your settlement statement is governed by statutory standards. Employers are strictly barred under Section 18 of the Code on Wages from making unilateral, arbitrary deductions:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">FnF Settlement Components, Deadlines and Legal Benchmark Table</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Settlement Component</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Deadline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Statute</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legality of Deductions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Earned Monthly Wages / Basic Pay
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">2 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 17(2), Code on Wages 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Zero arbitrary deductions; only statutory PF/TDS</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Encashment of Earned / Privilege Leave
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">2 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">State Shops &amp; Est. Act / Factories Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Must be calculated on Basic + DA; cannot lapse on exit</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Statutory Gratuity (5+ Years of Service)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">30 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 7(3), Gratuity Act 1972</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Cannot be forfeited except for proven moral turpitude</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Unserved Notice Period Buyout
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">Adjustable in FnF</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Contractual Agreement / Sec 74 Contract Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Recoverable only on Basic pay if shortfall unapproved</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Relieving &amp; Experience Certificate
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Immediate upon LWD</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Article 21 &amp; High Court Precedents</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Cannot be withheld as collateral for financial disputes</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Provident Fund (PF) Exit Date Marking
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">EPFO Unified Member Portal Guidelines</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Mandatory employer digital exit filing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Facing delayed monthly wages prior to your resignation? See our companion template for <Link href="/templates/salary-delay-complaint-letter-to-hr" className="text-blue-700 underline font-semibold">salary delay complaint letter to HR</Link>.
                </p>
              </section>

              {/* Section 7: Worked Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Recovers ₹2,45,000 Withheld FnF in 9 Days
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Bengaluru IT Corridor (Senior QA Lead - 6 Yrs Service)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Priya Sundaram served a 90-day notice period at an enterprise software firm in Electronic City, Bengaluru, finishing her Last Working Day on 31 August 2026. Her pending terminal dues comprised ₹1,10,000 in August salary, ₹98,000 in statutory gratuity (6 years service), and ₹37,000 in accrued leave encashment (totaling ₹2,45,000).
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> By 5 October 2026 (35 days post-relieving), HR had not released her FnF statement. When Priya followed up, HR emailed back claiming that &quot;finance audit is ongoing&quot; and that ₹65,000 would be deducted for an alleged laptop scratch that was never documented on her handover certificate.
                    </p>
                    <p>
                      <strong>The Tactical Action:</strong> Priya deployed our <strong>Firm Statutory FnF Demand Email</strong>. She explicitly cited Section 17(2) and Section 18 of the Code on Wages, attached her signed asset clearance receipt proving zero damages at handover, and cited Section 7(3A) of the Gratuity Act giving HR a strict 7-day calendar deadline. She marked the India Managing Director and Head of Finance in copy.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      On Day 4 following the email, the Head of Finance intervened. The arbitrary ₹65,000 deduction was struck down, the FnF worksheet was approved, and the full ₹2,45,000 was credited directly to Priya&apos;s bank account with an updated UTR, along with her signed digital Relieving Letter.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Critical Documents to Preserve Before Escalating
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), digital work communications and electronic banking trails are fully admissible evidence in labour courts. Download and secure these 6 records on your personal drive:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Appointment Letter &amp; Compensation Annexure:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing exact CTC components, Basic pay, monthly allowances, and notice period clauses.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Resignation Email &amp; Acceptance Letter:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Documenting your resignation date, approved Last Working Day (LWD), and notice service confirmation.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">No Objection / Asset Handover Clearance Form:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Signed receipts from IT, Finance, Administration, and Department Head confirming all assets returned.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Last 3 to 6 Months Salary Payslips:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proving your historical monthly earnings, statutory deductions, and PF account credentials.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Bank Account Statement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proving zero inward salary credit from the employer past the statutory 2-day timeline.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">HR Follow-Up Email Chain &amp; WhatsApp Logs:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Exported thread showing unfulfilled payment promises, evasive replies, or arbitrary deduction notices.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions About Delayed FnF &amp; HR Reminder Emails
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in the Code on Wages, Gratuity Act, and High Court Labor Orders
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

              {/* Section 10: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Sources, Labour Authorities &amp; Official References
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
                  Statutory verification status: All provisions checked against active Ministry of Labour and Employment Gazette notifications, Code on Wages 2019 provisions, and Payment of Gratuity Act benchmarks as of November 2026.
                </p>
              </section>

              {/* Section 11: Primary CTA Block */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Statutory Advocate Legal Notice for Delayed FnF
                </h2>
                <FnfNoticeCTA variant="primary" />
              </section>

              {/* Section 12: Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Salary &amp; Employment Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/legal-notice-for-full-and-final-settlement-delay"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice for Full &amp; Final Settlement Delay →
                  </Link>
                  <Link
                    href="/tools/gratuity-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Statutory Gratuity Calculator →
                  </Link>
                  <Link
                    href="/tools/notice-period-recovery-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Notice Period Recovery Calculator →
                  </Link>
                  <Link
                    href="/templates/salary-delay-complaint-letter-to-hr"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Salary Delay Complaint Letter to HR →
                  </Link>
                  <Link
                    href="/law/code-on-wages-fnf-two-working-days"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    FnF in 2 Working Days: Code on Wages s.17(2) →
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
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
