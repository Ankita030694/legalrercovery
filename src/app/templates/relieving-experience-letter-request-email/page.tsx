import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import RelievingLetterNoticeCTA from "./RelievingLetterNoticeCTA";
import RelievingLetterTableOfContents from "./RelievingLetterTableOfContents";
import RelievingLetterWorkspace from "./RelievingLetterWorkspace";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Relieving / Experience Letter Request Email: Templates",
  description:
    "Polite, firm and final-reminder email templates to request a relieving or experience letter, and the next step if HR ignores you.",
  alternates: {
    canonical: `${SITE_URL}/templates/relieving-experience-letter-request-email`,
  },
  openGraph: {
    title: "Email Templates to Get Your Relieving and Experience Letters",
    description:
      "Polite, firm and final-reminder email templates to request a relieving or experience letter, and the next step if HR ignores you.",
    url: `${SITE_URL}/templates/relieving-experience-letter-request-email`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Email Templates to Get Your Relieving and Experience Letters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Templates to Get Your Relieving and Experience Letters",
    description:
      "Polite, firm and final-reminder email templates to request a relieving or experience letter, and the next step if HR ignores you.",
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
    title: "Constitution of India — Article 21 (Protection of Life, Personal Liberty & Right to Livelihood)",
    url: "https://www.indiacode.nic.in/handle/123456789/15240",
  },
  {
    title: "Industrial Employment (Standing Orders) Central Rules, 1946 — Schedule I, Model Standing Orders Rule 16 (Service Certificate Mandate)",
    url: "https://clc.gov.in/clc/acts-rules/industrial-employment-standing-orders-act-1946",
  },
  {
    title: "Indian Contract Act, 1872 (Act No. 9 of 1872) — Section 27 (Agreement in Restraint of Trade Void)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Code on Wages, 2019 (Act No. 29 of 2019) — Section 17(2) Settlement of Dues & Section 18 Permissible Deductions",
    url: "https://www.indiacode.nic.in/handle/123456789/13114",
  },
  {
    title: "Ministry of Labour & Employment — Samadhan Central Industrial Relations Dispute Redressal Portal",
    url: "https://samadhan.labour.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for HR Emails, Exit Slips & WhatsApp Approvals)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    question: "When should I send a relieving letter request email to HR?",
    answer:
      "Under labour rules, employers should issue your service certificate on your Last Working Day or within 2 to 7 days of asset handover. If you have not received your documents by Day 7, send a polite reminder email. If HR ignores you for 14 days, send a firm demand email citing Article 21 and the Contract Act.",
  },
  {
    question: "Can an employer legally withhold my relieving letter if there is a dispute over FnF or notice pay?",
    answer:
      "No. High Courts have ruled that an experience certificate is an objective factual record of your employment dates. Employers cannot withhold exit letters due to salary disputes or notice pay claims. Holding exit documents hostage is an unlawful restraint of trade under Section 27 of the Contract Act.",
  },
  {
    question: "What is the difference between an experience letter and a relieving letter?",
    answer:
      "A Relieving Letter confirms your resignation was accepted, duties ended, and assets returned. An Experience Certificate verifies your employment dates, job title, and performance. Background verification teams and future employers usually require both documents for onboarding.",
  },
  {
    question: "What legal action can I take if relieving letter is not given after resignation?",
    answer:
      "If HR ignores your reminder emails, take three steps: (1) Send a 15-day advocate legal notice to the Managing Director and HR Head; (2) File an online complaint on the Ministry of Labour's Samadhan portal; and (3) File a civil claim for compensation due to blocked job opportunities.",
  },
  {
    question: "Can an employer refuse to give an experience certificate for an employee who resigned during probation?",
    answer:
      "No. Even if you resign during probation, the employer cannot deny an experience certificate showing the exact period worked. Under Model Standing Orders and state shop rules, every employee is entitled to a formal service record, even for short tenures.",
  },
  {
    question: "How do I format an experience letter request mail after leaving the company?",
    answer:
      "Include: (1) Your full name and employee ID; (2) Job designation and employment dates; (3) Confirmation that company assets and project handovers were completed; (4) Citations to Model Standing Orders Rule 16 and Article 21; and (5) A clear 5 to 7-day deadline to issue the documents.",
  },
  {
    question: "Agar company relieving letter ya experience certificate na de toh legal notice kaise bheje?",
    answer:
      "Agar company resignation ke baad relieving letter na de, toh advocate legal notice bhejein. LegalRecovery.in par advocates Article 21 aur Section 27 ke tahat company ke Registered Office aur Directors ko Speed Post aur email se 15 din ka notice bhejte hain.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Email Templates to Get Your Relieving and Experience Letters",
  description:
    "Polite, firm and final-reminder email templates to request a relieving or experience letter, and the next step if HR ignores you.",
  datePublished: "2026-11-03T16:00:00+05:30",
  dateModified: "2026-11-03T16:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/templates/relieving-experience-letter-request-email`,
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
    name: "Employment Law & Exit Documentation",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const DIGITAL_DOCUMENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  name: "Relieving and Experience Letter Request Email Templates",
  description:
    "Standardized, legally vetted email templates and letter formats to demand issuance of pending relieving letters and experience certificates from former employers.",
  encodingFormat: ["text/plain", "application/msword"],
  url: `${SITE_URL}/templates/relieving-experience-letter-request-email`,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
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
      name: "Recovery",
      item: `${SITE_URL}/recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Employment Dues",
      item: `${SITE_URL}/services/recovery-of-salary-and-employment-dues`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Relieving Letter Email",
      item: `${SITE_URL}/templates/relieving-experience-letter-request-email`,
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

export default function RelievingLetterTemplatePage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Employment Dues", href: "/services/recovery-of-salary-and-employment-dues" },
    { label: "Relieving Letter Email", href: "/templates/relieving-experience-letter-request-email" },
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
        {/* Hero Section strictly matching site theme and layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Constitution of India Art. 21</span>
              <span className="text-red-500">•</span>
              <span>Model Standing Orders Rule 16</span>
              <span className="text-red-500">•</span>
              <span>Exit Letter Workspace</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Email Templates to Get Your Relieving and Experience Letters
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Relieving &amp; Experience Certificate Right)
              </p>
              <p>
                Under Model Standing Orders and Article 21 of the Constitution, employers cannot withhold an employee's relieving letter or experience certificate after handover. Withholding exit documents is an unlawful restraint of trade under Section 27 of the Contract Act. If HR delays beyond 7 days, send a demand email followed by a 15-day advocate legal notice.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Art. 21</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Right to Livelihood &amp; Career</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% Right</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Service History Factual Record</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">2–7 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Reasonable Delivery Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹50,000+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Damages in Precedent Orders</p>
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
            <RelievingLetterTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview: Why Employers Withhold Letters and What the Law Says */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why Employers Withhold Relieving Letters &amp; What Law Says
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In Indian corporate and industrial sectors, few administrative practices cause more immediate career distress than an employer refusing to issue a Relieving Letter and Experience Certificate. Departing professionals routinely find their exit credentials withheld as a coercive lever: HR teams cite pending Full and Final (FnF) financial reconciliations, unilateral notice period shortfall calculations, disputed non-compete covenants, or unapproved project knowledge transfer handovers.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  However, Indian employment jurisprudence drawn from the Supreme Court and various High Courts establishes that <strong>an Experience Certificate is an objective statement of fact, not a discretionary favour or discretionary bounty</strong>. Once an employee has physically served at an organization, that historical tenure cannot be erased or denied. Furthermore, conditioning the release of service records on the settlement of disputed financial claims constitutes an unlawful restraint of trade under Section 27 of the Indian Contract Act, 1872, and violates the employee&apos;s fundamental right to pursue their profession under Article 21 of the Constitution of India.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If your previous company is delaying your credentials, you must establish an unimpeachable written audit trail. Below is the interactive letter workspace featuring three calibrated tones: a polite follow-up, a firm statutory demand, and a final pre-litigation notice before serving a formal advocate legal notice.
                </p>
              </section>

              {/* Section 2: Interactive Letter Workspace (Archetype P1) */}
              <section id="heading-email-workspace" aria-labelledby="heading-email-workspace-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-email-workspace-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Interactive Email Workspace: Live Fill, Preview &amp; Export
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Fill in your details to instantly generate a tailored, legally backed email to HR. Copy to clipboard, export as a formatted Word (.doc) document, or print directly.
                  </p>
                </div>

                <RelievingLetterWorkspace />
              </section>

              {/* Section 3: Clause-by-Clause Notes (as <dl>) */}
              <section id="heading-clause-breakdown" aria-labelledby="heading-clause-breakdown-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-clause-breakdown-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Clause-by-Clause Legal Notes on the Demand Email
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Strategic legal drafting ensures your email doubles as documentary evidence under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA).
                  </p>
                </div>

                <dl className="grid grid-cols-1 gap-4 text-xs sm:text-sm text-slate-700">
                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1">
                    <dt className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      1. Explicit Asset &amp; Knowledge Transfer Sign-off Record
                    </dt>
                    <dd className="leading-relaxed text-slate-600 pl-4">
                      Employers commonly justify letter withholding by claiming that company laptops, security fobs, ID badges, or project files were never returned. By stating the exact date of handover and naming the accepting manager or IT desk in paragraph one, you neutralize this standard defense before HR can manufacture it.
                    </dd>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1">
                    <dt className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      2. Severability of Exit Papers from Financial Settlement Dues
                    </dt>
                    <dd className="leading-relaxed text-slate-600 pl-4">
                      Under Indian labour law, an employer&apos;s financial accounting dispute (such as an alleged notice buyout shortfall or travel expense reconciliation) must be addressed through separate statutory payroll accounts. Citing Model Standing Orders Rule 16 establishes that service records cannot be withheld as leverage to force acceptance of an unfair <Link href="/legal-notice-for-full-and-final-settlement-delay" className="text-blue-700 underline font-semibold">full and final settlement</Link>.
                    </dd>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1">
                    <dt className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      3. Constitutional &amp; Statutory Invalidation (Article 21 &amp; Section 27)
                    </dt>
                    <dd className="leading-relaxed text-slate-600 pl-4">
                      Article 21 protects the fundamental right to earn a livelihood without administrative subjugation. Furthermore, Section 27 of the Indian Contract Act voids any agreement or practice that acts as a restraint on trade or profession. Explicitly citing these provisions alerts corporate legal counsel that personal liability and High Court writ proceedings are viable next steps.
                    </dd>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1">
                    <dt className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      4. Quantifiable Career Jeopardy &amp; Offer Rescission Notice
                    </dt>
                    <dd className="leading-relaxed text-slate-600 pl-4">
                      Stipulating your new employer&apos;s onboarding deadline is critical for civil damages. If the former employer&apos;s deliberate delay causes your job offer to be revoked, having this written warning on record allows you to claim substantial financial damages in court for total lost income and reputational harm.
                    </dd>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1">
                    <dt className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      5. Definitive 48-Hour to 7-Day Statutory Window
                    </dt>
                    <dd className="leading-relaxed text-slate-600 pl-4">
                      Open-ended follow-ups invite perpetual corporate delay. Setting an explicit compliance timeline creates a clean point of accrual for litigation. If the deadline expires without document release, the pre-litigation phase is complete and an advocate legal notice can be issued immediately.
                    </dd>
                  </div>
                </dl>
              </section>

              {/* Section 4: Resolution Rail Flowchart (Hand-authored SVG diagram matching IRCTC layout) */}
              <section id="heading-resolution-flow" aria-labelledby="heading-resolution-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-resolution-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Resolution Hierarchy: Resignation to Document Recovery
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this calibrated statutory progression to break through HR silence, enforce your employment rights, and compel release of your service certificates:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Resignation &amp; Handover Sign-off</h3>
                    <p className="text-xs text-slate-200 mt-1">Serve contractual notice, return assets, and obtain written clearance slip.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Polite Reminder Email (Day 7)</h3>
                    <p className="text-xs text-amber-900 mt-1">Send polite follow-up attaching asset clearance and requesting PDF letters.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Firm Statutory Demand (Day 15)</h3>
                    <p className="text-xs text-slate-700 mt-1">Cite Article 21, Model Standing Orders, and upcoming joining deadline.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Advocate Statutory Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day statutory demand via Speed Post + BSA Section 63 legal email.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Labour Commissioner or Injunction</h3>
                    <p className="text-xs text-emerald-900 mt-1">File on Samadhan portal or petition Civil Court for urgent mandatory injunction.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram matching IRCTC layout */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Relieving and Experience Letter Recovery Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="exitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="exitAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="exitSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#exitGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Exit Handover</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Assets Returned</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">KT Sign-off Secured</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Polite Reminder</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Day 7 Post-Exit</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Attach Clearance Slip</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Statutory Demand</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Day 15 Formal Notice</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Cite Art. 21 / Sec 27</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#exitAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Demand</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Speed Post + BSA Email</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#exitSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Release</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Letters Issued</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or Samadhan / Court</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY EXIT TIMELINES UNDER LABOUR LAWS &amp; HIGH COURT RULINGS:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Handover &amp; Asset Clearance: Immediate on Last Working Day (LWD)</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Relieving &amp; Service Certificate Issuance: 2 to 7 working days following exit sign-off</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Advocate Legal Notice Response Window: 15 Calendar Days before Labour Commissioner / Injunction filing</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Ladder */}
              <section id="heading-escalation-ladder" aria-labelledby="heading-escalation-ladder-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-escalation-ladder-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Playbook When Employers Withhold Exit Letters
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If HR remains uncooperative, do not engage in chaotic telephone arguments. Follow this rigorous 5-step playbook designed to create an unassailable evidentiary record:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Consolidate All Exit Receipts, Handover Emails &amp; Clearances
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Gather your original resignation email, management&apos;s written resignation acceptance, knowledge transfer completion confirmation, laptop return courier receipt or IT sign-off slip, and the final attendance confirmation for your Last Working Day. Store electronic copies securely outside company email servers.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Dispatch the Structured Polite or Firm Demand Email
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Use our email workspace above. Ensure the email is sent from your personal email address, directly addressed to the HR Manager and HR Head, and copied (Cc) to your former reporting manager and skip-level director. Set a definitive 5 to 7-business-day response window.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Escalate to Managing Director, Chief Executive Officer &amp; Board
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the local HR team does not respond within the stipulated window or conditions document issuance on signing a disputed waiver, forward the entire email thread directly to the Managing Director (MD), Chief Executive Officer (CEO), and Board of Directors. In large enterprises, rogue HR stalling is frequently overruled once executive leadership is confronted with potential statutory exposure.
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
                        When administrative escalation fails, retain a labour advocate to draft and serve a formal 15-day statutory demand notice. Served on advocate legal letterhead via Registered Speed Post with Acknowledgement Due (AD) and Section 63 BSA electronic mail to the employer&apos;s corporate registered office, the notice invokes Model Standing Orders Rule 16, Article 21, and Section 27 of the Contract Act. For detailed transparent pricing, see our guide to <Link href="/legal-notice-charges" className="text-blue-700 underline font-semibold">legal notice charges</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Lodge a Complaint with the Labour Commissioner or Approach Court
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the 15-day legal notice period expires without resolution, lodge a formal dispute before the jurisdictional Labour Commissioner via the central <Link href="/labour-commissioner-complaint-online-salary" className="text-blue-700 underline font-semibold">Samadhan portal</Link>. Alternatively, if you are a manager or non-workman, file an urgent civil suit for mandatory injunction under Section 39 of the Specific Relief Act, 1963, compelling the company to produce the certificate alongside damages for career harm. Check our guide on <Link href="/experience-letter-not-given-legal-action" className="text-blue-700 underline font-semibold">legal action when experience letter is not given</Link>.
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
                  Statutory Deadlines for Exit Documents Under Labour Laws
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Employers frequently plead internal bureaucratic policies to justify weeks of delay. Indian statutory frameworks and judicial precedents mandate clear benchmark turnaround times:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Exit Documentation Deadlines &amp; Statutory Benchmarks</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Document / Exit Phase</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Benchmark</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Statute / Authority</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Remedy if Delayed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          IT Asset Return &amp; Handover Sign-off
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Last Working Day (LWD)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Internal Clearance Procedure</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Obtain written receipt &amp; IT desk email acknowledgment</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Relieving Letter Issuance
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">2 to 7 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Model Standing Orders Rule 16</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Dispatch structured demand email with handover receipt</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Experience / Service Certificate
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Concurrent with Relieving</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">State Shops &amp; Establishments Acts</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Cannot be conditioned on financial settlements or waivers</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Full &amp; Final (FnF) Wage Settlement
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Within 2 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 17(2), Code on Wages, 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Refer to our <Link href="/templates/salary-delay-complaint-letter-to-hr" className="text-blue-700 underline font-semibold">salary delay complaint letter</Link></td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pre-Litigation Advocate Notice Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Civil Procedure Code &amp; Labour Norms</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Serve formal statutory demand notice via Registered Speed Post</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Recovers Relieving Letter After Advocate Notice
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Bengaluru IT Services Firm &bull; Senior Full-Stack Developer</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Rohan Deshmukh served 3 years as a Senior Full-Stack Developer at a mid-sized IT company in Bengaluru. He tendered a 60-day resignation email and obtained written confirmation from his Director of Engineering agreeing to an early release of 45 days with an asset handover sign-off.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> Following his Last Working Day on 15 September, corporate HR reversed course. HR demanded a cash recovery of ₹1,45,000 for the 15-day notice shortfall and refused to release Rohan&apos;s Relieving Letter and Experience Certificate until he deposited the funds. Rohan had a confirmed offer from a tier-1 multinational firm with an onboarding cutoff of 15 October; without the service certificate, his new offer faced cancellation. Rohan sent three polite emails, but HR insisted on cash payment.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Rohan consulted an advocate via LegalRecovery.in. The advocate served a statutory legal demand notice on the employer&apos;s Registered Office and Board of Directors. The notice established that: (1) The notice period waiver had been approved in writing by authorized management, (2) Withholding service records violated Article 21 and Section 27 of the Contract Act, and (3) Should the MNC offer be revoked, the employer would face a civil suit claiming ₹18,00,000 for lost annual compensation.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      On Day 6 after receiving the advocate legal notice via Registered Speed Post and BSA Section 63 legal email, the company&apos;s Vice President of Human Resources intervened. The notice pay deduction was formally cancelled, and digitally signed PDF copies of Rohan&apos;s Relieving Letter and 3-Year Experience Certificate were delivered to his personal inbox with zero deductions. Rohan successfully completed his background verification and joined his new employer on schedule.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Exit Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Documents for Legal Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA), digital records and email communications are fully admissible before the Labour Commissioner and civil courts. Secure these 6 items:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Resignation Email &amp; Acceptance:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Formal resignation notice and written acceptance from HR or manager confirming your Last Working Day.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">IT &amp; Asset Clearance Receipt:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Courier delivery slip or written IT sign-off confirming laptop, monitor, security token, and ID return.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Knowledge Transfer (KT) Sign-off:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Email thread or handover document signed by your reporting manager confirming projects transitioned.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Original Appointment &amp; Increment Letters:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Establishing initial joining date, designation history, salary increments, and notice period terms.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">New Employer Offer Letter / Cutoff:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Documenting mandatory onboarding document submission deadlines to prove quantifiable career jeopardy.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Audit Trail of Follow-up Emails:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Exported .eml or PDF copies of your sent reminder emails showing HR silence or arbitrary refusal.</p>
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
                    FAQs: Relieving Letters, Experience Letters &amp; Remedies
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in Model Standing Orders, Article 21 and Indian High Court Precedents
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
                  Labour Authorities, Primary Statutes &amp; Official References
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
                  Statutory verification status: All provisions verified against the Constitution of India, Model Standing Orders Rules, Section 27 of the Indian Contract Act, and Ministry of Labour &amp; Employment Samadhan portals as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Statutory Advocate Demand Notice to Employer
                </h2>
                <RelievingLetterNoticeCTA variant="primary" />
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
                    href="/experience-letter-not-given-legal-action"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Experience Letter Withholding Legal Action →
                  </Link>
                  <Link
                    href="/labour-commissioner-complaint-online-salary"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Labour Commissioner Samadhan Complaint →
                  </Link>
                  <Link
                    href="/templates/salary-delay-complaint-letter-to-hr"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Salary Delay Complaint Letter to HR →
                  </Link>
                  <Link
                    href="/templates/fnf-not-received-mail-to-hr"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    FnF Not Received Email to HR →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Advocate Fees →
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
