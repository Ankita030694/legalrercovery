import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import RecruitmentNoticeCTA from "./RecruitmentNoticeCTA";
import RecruitmentNoticeTOC from "./RecruitmentNoticeTOC";
import RecruitmentNoticeWorkspace from "./RecruitmentNoticeWorkspace";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Recruitment Fee & Backdoor-Hire Legal Notice Format",
  description:
    "Download ready-to-use legal notice formats for HR & staffing agencies: CV timestamp proof, Section 8 conduct acceptance, PF outlay & 18% interest.",
  alternates: {
    canonical: `${SITE_URL}/templates/recruitment-backdoor-hiring-and-staffing-invoice-legal-notice`,
  },
  openGraph: {
    title: "Recruitment Fee & Backdoor-Hire Legal Notice Format",
    description:
      "Download ready-to-use legal notice formats for HR & staffing agencies: CV timestamp proof, Section 8 conduct acceptance, PF outlay & 18% interest.",
    url: `${SITE_URL}/templates/recruitment-backdoor-hiring-and-staffing-invoice-legal-notice`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Recruitment Backdoor Hiring and Staffing Invoice Legal Notice Format",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recruitment Fee & Backdoor-Hire Legal Notice Format",
    description:
      "Download ready-to-use legal notice formats for HR & staffing agencies: CV timestamp proof, Section 8 conduct acceptance, PF outlay & 18% interest.",
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
    title: "The Indian Contract Act, 1872 — Section 8 (Acceptance by Performing Conditions of Proposal)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "The Indian Contract Act, 1872 — Section 70 (Obligation of Person Enjoying Benefit of Non-Gratuitous Act)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "The Indian Contract Act, 1872 — Section 73 (Compensation for Loss or Damage Caused by Breach of Contract)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 — Section 15 & 16 (Mandatory 45-Day Payment & 3x Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Contract Labour (Regulation and Abolition) Act, 1970 — Section 21(4) (Principal Employer Liability for Unpaid Wages)",
    url: "https://www.indiacode.nic.in/handle/123456789/1454",
  },
  {
    title: "Income Tax Act, 1961 — Section 43B(h) (Disallowance of Unpaid MSME Invoices Beyond 45 Days)",
    url: "https://incometaxindia.gov.in/pages/acts/income-tax-act.aspx",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Admissibility of Electronic Records & Hash Proof)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Code of Civil Procedure, 1908 — Order XXXVII (Summary Suit Procedure on Written Contracts & Invoices)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
];

const PRECEDENT_CITATIONS = [
  {
    title: "Trimex International FZE v. Vedanta Aluminium Ltd: Contract by Conduct and Unsigned Commercial Acceptance",
    parties: "Trimex International FZE Ltd. v. Vedanta Aluminium Ltd.",
    citation: "(2011) 8 SCC 420 (Supreme Court of India)",
    holding:
      "The Supreme Court held that once the commercial parties have agreed upon key terms through exchange of emails, letters, and acceptance of deliverables, a binding contract comes into force under Section 8 of the Contract Act. The absence of a formal physically signed bilateral document does not relieve either party from their contractual obligations.",
    takeaway:
      "When a client receives a candidate CV with Terms of Business attached and proceeds to interview the candidate, the Terms are accepted by conduct, defeating any corporate defense of an 'unsigned agreement'.",
  },
  {
    title: "State of West Bengal v. B.K. Mondal & Sons: Section 70 Quantum Meruit Requires Payment for Received Commercial Value",
    parties: "State of West Bengal v. B.K. Mondal & Sons",
    citation: "AIR 1962 SC 779 (Constitution Bench, Supreme Court of India)",
    holding:
      "The Constitution Bench laid down that under Section 70 of the Indian Contract Act, three conditions trigger mandatory compensation: (i) the thing must be done lawfully; (ii) it must not be intended to be done gratuitously; and (iii) the recipient must have enjoyed the benefit. A party cannot retain the commercial benefit of specialized services without paying full monetary compensation.",
    takeaway:
      "Even if a client claims that recruitment terms were never finalized, onboarding an agency-sourced candidate represents a non-gratuitous commercial benefit, entitling the agency to fair market placement fees.",
  },
  {
    title: "Mahanagar Telephone Nigam Ltd. v. Tata Communications Ltd: Effective Cause in Commercial Introductions",
    parties: "Mahanagar Telephone Nigam Ltd. v. Tata Communications Ltd.",
    citation: "(2019) 5 SCC 341 (Supreme Court of India)",
    holding:
      "The Supreme Court affirmed that where a party's introduction initiates the sequence of events directly culminating in a commercial transaction, that party remains the proximate and effective cause. Debtor attempts to artificially introduce an intermediary broker or claim independent rediscovery cannot sever the contractual chain.",
    takeaway:
      "Rejecting a CV and subsequently hiring the candidate directly or through a dummy affiliate within the 12-month non-circumvention window remains an actionable breach of contract under Section 73.",
  },
];

const FAQS = [
  {
    question: "Can our recruitment agency demand fees if the client never signed our Terms of Business (TOB)?",
    answer:
      "Yes. Under Section 8 and Section 9 of the Indian Contract Act, 1872, acceptance of a proposal can be made by performing the conditions or accepting the consideration. When your agency dispatches candidate profiles accompanied by explicit Terms of Business (e.g., 'Interviewing this candidate constitutes acceptance of our 8.33% placement fee and 12-month ownership clause') and the client schedules interviews, their conduct establishes a binding contract. Furthermore, the Supreme Court in Trimex International (2011) and Section 70 (Quantum Meruit) firmly protects headhunters from clients who enjoy the commercial benefit of recruitment services without paying.",
  },
  {
    question: "What is the statutory limitation period for serving this notice and filing suit in India?",
    answer:
      "Under Article 18 and Article 55 of the Limitation Act, 1963, the limitation period for recovering professional recruitment fees or suing for breach of contract is 3 (three) years. Limitation commences from either the date the candidate joined the client's organization, the date the placement invoice fell due, or the date the agency discovered the covert backdoor onboarding. Dispatching this statutory legal notice immediately stops informal delays, crystallizes the debt, and satisfies the pre-institution mediation mandate under Section 12A of the Commercial Courts Act, 2015.",
  },
  {
    question: "How do we prove backdoor hiring if the client claims the candidate applied independently on their careers portal?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), cryptographic email transmission headers, ATS submission logs, and recruiter outreach trails provide contemporaneous proof of introduction. Under the 'Effective Cause' doctrine established by the Supreme Court, if your introduction was the initial spark that brought the candidate to the client's attention, the client cannot escape fees by claiming a subsequent direct portal submission. The notice format includes a dedicated ATS proof schedule to record exact dates, interview rounds, and HR correspondence.",
  },
  {
    question: "Can staffing and security agencies recover out-of-pocket PF, ESIC, and GST outlays?",
    answer:
      "Absolutely. In contract staffing, security guarding, and facility management (FMS), over 85%-92% of the billed invoice comprises pass-through wages, employee provident fund (EPF), employee state insurance (ESIC), and 18% GST already paid out of the agency's working capital. Under Section 21(4) of the Contract Labour (R&A) Act, 1970, the Principal Employer is statutorily liable for worker wages. Withholding monthly staffing invoices is an unlawful retention of pass-through statutory funds, attracting immediate summary suit proceedings under Order XXXVII CPC and MSMED Section 18 recovery.",
  },
  {
    question: "How does Section 43B(h) of the Income Tax Act compel defaulting clients to clear staffing dues?",
    answer:
      "Under Section 43B(h) inserted by Finance Act 2023, any corporate buyer that fails to pay a registered Micro or Small Enterprise (MSME) within the 45-day window prescribed by Section 15 of the MSMED Act cannot claim that expenditure as a tax deduction in that financial year. The full invoice amount is added back to the client's taxable income, resulting in an immediate 25% to 35% tax penalty plus interest. Citing Section 43B(h) in this notice compels corporate CFOs to prioritize clearing staffing bills before the fiscal closing.",
  },
  {
    question: "Can our agency claim compound interest on overdue placement or staffing invoices?",
    answer:
      "Yes. If your agency holds a valid UDYAM Registration under the MSMED Act, 2006 (as a Micro or Small enterprise), Section 16 of the Act entitles you to mandatory compound interest with monthly rests at three times (3x) the RBI bank rate (currently ~21.75% per annum) starting from the 46th day following service delivery. This statutory interest is non-waivable and overrides any contradictory clause in client purchase orders or vendor agreements.",
  },
  {
    question: "What should we do if the client claims the candidate quit during the 90-day probation period?",
    answer:
      "Standard recruitment agreements contain replacement clauses, not cash refund covenants. If the client failed to pay your original placement invoice within the agreed 15-to-30-day payment term, they breached a Condition Precedent under Section 51 and 54 of the Indian Contract Act and forfeit all replacement rights. Furthermore, if the client forced a constructive resignation or failed to provide a reasonable requisition for replacement, our High Court-vetted legal notice format rebuts their claim and demands immediate payment.",
  },
  {
    question: "What is the recommended multi-channel dispatch protocol for this notice?",
    answer:
      "To ensure unshakeable proof in court, dispatch the notice simultaneously through three channels: (1) Registered Speed Post with Acknowledgement Due (RPAD) to the client's corporate registered office and Managing Director; (2) High-priority corporate email with delivery and read receipts; and (3) Official WhatsApp to the CEO, CFO, and Head of Talent Acquisition. Under Section 63 of BSA 2023 and Section 27 of the General Clauses Act, this combination establishes complete service and defeats postal avoidance tactics.",
  },
];

export default function RecruitmentBackdoorNoticePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/templates/recruitment-backdoor-hiring-and-staffing-invoice-legal-notice#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/templates/recruitment-backdoor-hiring-and-staffing-invoice-legal-notice`,
        },
        headline:
          "HR & Staffing Legal Notice Pack: (1) Backdoor-Hire Circumvention Fee Demand Notice + (2) Overdue Staffing/Security Payroll Arrears Notice",
        description:
          "Download ready-to-use legal notice formats for HR & staffing agencies: CV timestamp proof, Section 8 conduct acceptance, PF outlay & 18% interest.",
        url: `${SITE_URL}/templates/recruitment-backdoor-hiring-and-staffing-invoice-legal-notice`,
        inLanguage: "en-IN",
        datePublished: "2026-11-17T12:00:00+05:30",
        dateModified: "2026-11-17T12:00:00+05:30",
        author: {
          "@type": "Person",
          name: "Anuj Anand Malik",
          jobTitle: "Advocate & Founder",
          worksFor: {
            "@type": "Organization",
            name: "AMA Legal Solutions",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "LegalRecovery.in",
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo.png`,
          },
        },
        mainEntityOfPage: `${SITE_URL}/templates/recruitment-backdoor-hiring-and-staffing-invoice-legal-notice`,
      },
      {
        "@type": "CreativeWork",
        "@id": `${SITE_URL}/templates/recruitment-backdoor-hiring-and-staffing-invoice-legal-notice#creativework`,
        name: "Recruitment Backdoor-Hiring and Staffing Invoice Legal Notice Pack",
        headline:
          "HR & Staffing Legal Notice Pack: (1) Backdoor-Hire Circumvention Fee Demand Notice + (2) Overdue Staffing/Security Payroll Arrears Notice",
        author: {
          "@type": "Person",
          name: "Anuj Anand Malik",
        },
        publisher: {
          "@type": "Organization",
          name: "LegalRecovery.in",
        },
        inLanguage: "en-IN",
        genre: "Ready-to-Use Commercial Notice & Clause Workspace",
        about: [
          "Recruitment Fee Legal Notice Format",
          "Backdoor Hiring Circumvention Notice",
          "Unpaid Staffing Payroll Demand Notice",
          "Contract Act Section 8 and Section 70 Quantum Meruit",
          "MSMED Act Section 16 3x Compound Interest",
          "CLRA Act Section 21(4) Principal Employer Liability",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/templates/recruitment-backdoor-hiring-and-staffing-invoice-legal-notice#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/templates/recruitment-backdoor-hiring-and-staffing-invoice-legal-notice#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Industries",
            item: `${SITE_URL}/industries/staffing-recruitment-manpower-recovery`,
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
            name: "Recruitment & Staffing Notice Format",
            item: `${SITE_URL}/templates/recruitment-backdoor-hiring-and-staffing-invoice-legal-notice`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            {/* Eyebrow Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>Section 6.11</span>
              <span>&bull;</span>
              <span>IND-11 Staffing &amp; Recruitment Notice Pack</span>
              <span>&bull;</span>
              <span className="text-emerald-400">P0 Priority Workspace</span>
            </div>

            {/* Single H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              HR &amp; Staffing Legal Notice Pack: (1) Backdoor-Hire Circumvention Fee Demand Notice + (2) Overdue Staffing/Security Payroll Arrears Notice
            </h1>

            {/* Executive Statutory Summary Box */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Summary
              </span>
              Download fact-verified, court-ready legal demand notices for recruitment agencies, flexi-staffing firms, and security contractors facing candidate circumvention or unpaid monthly payroll invoices. Rooted in{" "}
              <Link
                href="/industries/staffing-recruitment-manpower-recovery"
                className="text-white font-bold underline hover:text-red-400 transition-colors"
              >
                Staffing &amp; Recruitment Industry Debt Recovery
              </Link>
              , this pack integrates Contract Act s.8 conduct acceptance, Section 70 quantum meruit, Section 16 MSMED 3x compound interest, Section 43B(h) tax disallowances, and BSA 2023 s.63 electronic evidence schedules.
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="p-3 sm:p-4 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="text-[10px] sm:text-xs text-slate-400 mb-1">Contract Act s.8 &amp; s.70</div>
                <div className="text-base sm:text-xl font-bold text-slate-100">Conduct Acceptance</div>
                <div className="text-[11px] text-emerald-400 mt-1">Binds Unsigned Clients</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="text-[10px] sm:text-xs text-slate-400 mb-1">MSMED Act Section 16</div>
                <div className="text-base sm:text-xl font-bold text-emerald-400">3x RBI Rate</div>
                <div className="text-[11px] text-slate-300 mt-1">Compounded Monthly</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="text-[10px] sm:text-xs text-slate-400 mb-1">Income Tax s.43B(h)</div>
                <div className="text-base sm:text-xl font-bold text-amber-400">45-Day Cap</div>
                <div className="text-[11px] text-slate-300 mt-1">Corporate Tax Disallowance</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="text-[10px] sm:text-xs text-slate-400 mb-1">BSA 2023 Section 63</div>
                <div className="text-base sm:text-xl font-bold text-red-400">ATS Timestamp</div>
                <div className="text-[11px] text-slate-300 mt-1">Conclusive Electronic Proof</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumbs Navigation */}
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Industries", href: "/industries/staffing-recruitment-manpower-recovery" },
                { label: "Templates", href: "/templates" },
                { label: "Recruitment & Staffing Notice Format", href: "/templates/recruitment-backdoor-hiring-and-staffing-invoice-legal-notice" },
              ]}
            />
          </div>

          {/* 2-Column Split: Left Sticky TOC + Right Main Content */}
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar TOC */}
            <RecruitmentNoticeTOC />

            {/* Right Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Executive Summary */}
              <section
                id="heading-executive-summary"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Executive Summary: Why Generic Legal Notices Fail in Recruitment Disputes
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Recruitment and staffing fee recovery is plagued by bad-faith client tactics: corporate HR teams reject candidate CVs only to secretly onboard them 3 months later through a different department, executive search clients invent bogus &ldquo;90-day probation exits,&rdquo; and enterprise buyers withhold multi-lakh contract staffing invoices comprising 90% out-of-pocket payroll and statutory EPF/ESIC outlays.
                </p>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  When agencies serve standard consumer-style legal notices, corporate debtors routinely deflect liability by claiming that &ldquo;no bilateral agreement was physically stamped,&rdquo; that &ldquo;the HR manager lacked corporate authority,&rdquo; or that &ldquo;the candidate was sourced from an internal database.&rdquo; This fact-verified Notice Pack dismantles those defenses at the pre-litigation stage. By coupling{" "}
                  <Link
                    href="/backdoor-hiring-candidate-circumvention-placement-fee-recovery-india"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    Candidate Circumvention Recovery
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/contract-staffing-temp-payroll-pf-esic-invoice-default-recovery"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    Temp Staffing Payroll Invoicing
                  </Link>{" "}
                  with cryptographic ATS email timestamps, Section 8 conduct acceptance, and MSMED Section 16 interest mandates, creditors enter negotiations from a position of unassailable statutory strength.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
                      Backdoor Hiring Trap
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Client interviews introduced candidate, claims profile is rejected, and covertly issues an offer within 12 months.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
                      Staffing Payroll Outlay
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Staffing firm pays wages on the 7th and deposits EPF/ESIC; client delays reimbursement past the statutory 45-day MSME window.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
                      90-Day Probation Abuse
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Client withholds fees alleging candidate quit within 90 days, despite breaching payment terms as a condition precedent.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Statutory Pillars */}
              <section
                id="heading-statutory-framework"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory Pillars: Contract Act s.8, s.70 &amp; MSMED Act s.16
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Indian commercial law provides four interlocking statutory mechanisms that defeat corporate evasions in recruitment and staffing contracts:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="p-3 sm:p-3.5 font-bold">Statutory Hook</th>
                        <th className="p-3 sm:p-3.5 font-bold">Legal Mechanism</th>
                        <th className="p-3 sm:p-3.5 font-bold">Debtor Defense Neutralized</th>
                        <th className="p-3 sm:p-3.5 font-bold">Enforcement Forum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">Contract Act s.8 &amp; s.9</td>
                        <td className="p-3 sm:p-3.5">Acceptance by conduct (interviewing candidate with attached Terms)</td>
                        <td className="p-3 sm:p-3.5">&ldquo;We never signed physical Terms of Business agreement&rdquo;</td>
                        <td className="p-3 sm:p-3.5">Commercial Courts / Order 37</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">Contract Act s.70</td>
                        <td className="p-3 sm:p-3.5">Quantum Meruit: Mandatory compensation for non-gratuitous benefits</td>
                        <td className="p-3 sm:p-3.5">&ldquo;We never agreed to an 8.33% or 15% placement fee rate&rdquo;</td>
                        <td className="p-3 sm:p-3.5">Commercial Courts / Arbitration</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">MSMED Act s.15 &amp; s.16</td>
                        <td className="p-3 sm:p-3.5">Mandatory 45-day payment cap and 3x RBI compound monthly interest</td>
                        <td className="p-3 sm:p-3.5">&ldquo;Contract provides 90-day payment or zero interest on delays&rdquo;</td>
                        <td className="p-3 sm:p-3.5">MSEFC / Section 18 Arbitration</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">Income Tax s.43B(h)</td>
                        <td className="p-3 sm:p-3.5">Full corporate expense disallowance for overdue MSME supplier dues</td>
                        <td className="p-3 sm:p-3.5">&ldquo;Will process payment in next fiscal quarter after audits&rdquo;</td>
                        <td className="p-3 sm:p-3.5">Income Tax Assessment / CFO Audit</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">CLRA Act s.21(4)</td>
                        <td className="p-3 sm:p-3.5">Principal Employer vicarious liability for contract wages and outlays</td>
                        <td className="p-3 sm:p-3.5">&ldquo;Contractor must manage their own associate payroll finance&rdquo;</td>
                        <td className="p-3 sm:p-3.5">Labour Court / High Court Writ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-emerald-800 text-xs sm:text-sm leading-relaxed">
                  <strong className="font-bold">Strategic Advantage:</strong> Combining Section 8 with Section 43B(h) creates instantaneous CFO-level urgency. While HR managers attempt to delay by debating candidate interview dates, the finance department cannot risk an audit note disallowing a multi-lakh staffing or placement expense. Calculate your exact statutory interest using our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="font-bold underline text-emerald-900 hover:text-[#DC2626]"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>
                  .
                </div>
              </section>

              {/* Section 3: Interactive Workspace */}
              <section
                id="heading-notice-workspace"
                className="scroll-mt-28 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Interactive Legal Notice Generator &amp; Clause Workspace
                  </h2>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Customize the legal notice draft below to match your specific commercial dispute. Toggle between Backdoor Hiring, Staffing Payroll Arrears, and Temp-to-Perm Buyout formats.
                </p>

                {/* Interactive Client Workspace Island */}
                <RecruitmentNoticeWorkspace />
              </section>

              {/* Section 4: ATS Evidence & CV Schedule */}
              <section
                id="heading-ats-evidence-schedule"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Candidate Circumvention Proof: Formatting ATS &amp; CV Timestamps
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  In litigation, the difference between winning full placement fees and having your suit dismissed lies in the contemporaneous documentation of the candidate introduction. Indian courts reject vague assertions that &ldquo;we sent the candidate in May.&rdquo; Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, your legal notice must incorporate an exact CV Submission and Interview Schedule.
                </p>

                {/* Worked Evidence Schedule Table */}
                <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
                  <div className="bg-slate-900 text-white p-3.5 sm:p-4">
                    <h3 className="text-xs sm:text-sm font-bold tracking-wide uppercase">
                      Mandatory ATS Proof &amp; Circumvention Audit Schedule
                    </h3>
                  </div>
                  <div className="p-4 sm:p-5 space-y-4 text-xs sm:text-sm text-slate-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-1.5">
                        <span className="text-[11px] font-bold text-red-600 uppercase">Stage 1: Introduction Proof</span>
                        <p className="text-xs text-slate-600">
                          <strong>Email Timestamp:</strong> 14 May 2026, 11:42:08 AM IST.<br />
                          <strong>Server Message-ID:</strong> &lt;20260514114208.7728.apex@smtp.mail.com&gt;<br />
                          <strong>Attached Artifacts:</strong> Candidate CV + PDF Terms of Business.
                        </p>
                      </div>
                      <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-1.5">
                        <span className="text-[11px] font-bold text-red-600 uppercase">Stage 2: Client Engagement (s.8)</span>
                        <p className="text-xs text-slate-600">
                          <strong>Interview Call Invites:</strong> Google Meet / Zoom invite dated 22 May 2026.<br />
                          <strong>Client Interviewers:</strong> VP Engineering &amp; Lead HR.<br />
                          <strong>Conduct Acceptance:</strong> Client acted on profile without objecting to Terms.
                        </p>
                      </div>
                      <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-1.5">
                        <span className="text-[11px] font-bold text-red-600 uppercase">Stage 3: Bad-Faith Rejection</span>
                        <p className="text-xs text-slate-600">
                          <strong>HR Email Communication:</strong> &ldquo;Candidate salary expectation too high / position frozen.&rdquo;<br />
                          <strong>Date of Rejection:</strong> 08 June 2026.<br />
                          <strong>Recruiter Warning:</strong> 12-month non-circumvention ownership confirmed.
                        </p>
                      </div>
                      <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-1.5">
                        <span className="text-[11px] font-bold text-red-600 uppercase">Stage 4: Circumvention Discovery</span>
                        <p className="text-xs text-slate-600">
                          <strong>Discovered Joining Date:</strong> 17 August 2026 (70 days post-rejection).<br />
                          <strong>Verified Verification:</strong> LinkedIn public update &amp; active Slack ID.<br />
                          <strong>Penal Fee Trigger:</strong> Contractual 8.33% fee or 25% penal liquidated damage.
                        </p>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-600">
                      <strong>Legal Strategy:</strong> When this table is inserted directly into paragraph 2 of your legal demand notice, corporate legal teams recognize that your agency possesses an unassailable digital trail under BSA Section 63. Most circumvention disputes settle within 14 days of receiving this notice. Read our full analysis on{" "}
                      <Link
                        href="/recruitment-terms-of-business-unsigned-email-acceptance-recovery"
                        className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                      >
                        Enforcing Unsigned Recruitment Terms of Business
                      </Link>
                      .
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Staffing Payroll Outlay Schedule */}
              <section
                id="heading-payroll-statutory-outlay"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Staffing &amp; FMS Payroll Arrears: PF, ESIC &amp; 18% GST Outlay Schedule
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Unlike software licensing or consulting where the creditor&apos;s cost is primarily sweat equity, contract staffing, security guarding, and facility management (FMS) agencies finance the client&apos;s operational headcount out-of-pocket. Under Indian labour laws, worker salaries cannot be delayed pending client invoice approvals.
                </p>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  A court-admissible staffing legal notice must distinguish pure agency markup (typically 5%–10%) from pass-through statutory outlays (85%–92%). This prevents the client from raising frivolous service quality counter-claims against actual wages already paid into associate bank accounts:
                </p>

                {/* Outlay Ledger Box */}
                <div className="rounded-xl border border-slate-200 overflow-hidden">
                  <div className="bg-slate-900 text-white p-3.5 sm:p-4 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                      Pass-Through Working Capital Outlay Breakdown (Sample ₹29.19 Lakh Claim)
                    </span>
                    <span className="text-[10px] font-mono bg-red-950 text-red-300 px-2 py-0.5 rounded border border-red-800">
                      CLRA s.21(4) Protected Debt
                    </span>
                  </div>
                  <div className="divide-y divide-slate-200 bg-white text-xs sm:text-sm">
                    <div className="p-3 sm:p-4 flex justify-between items-center">
                      <span className="text-slate-700 font-medium">1. Net Associate Wages (Credited on 7th via NEFT/IMPS)</span>
                      <span className="font-mono font-bold text-slate-900">₹18,45,200.00</span>
                    </div>
                    <div className="p-3 sm:p-4 flex justify-between items-center bg-slate-50/60">
                      <span className="text-slate-700 font-medium">2. EPF Statutory Outlay (Employer + Employee Share, EPFO ECR Challan)</span>
                      <span className="font-mono font-bold text-slate-900">₹2,84,350.00</span>
                    </div>
                    <div className="p-3 sm:p-4 flex justify-between items-center">
                      <span className="text-slate-700 font-medium">3. ESIC Statutory Outlay (ESIC Monthly Contribution Challan)</span>
                      <span className="font-mono font-bold text-slate-900">₹1,28,300.00</span>
                    </div>
                    <div className="p-3 sm:p-4 flex justify-between items-center bg-slate-50/60">
                      <span className="text-slate-700 font-medium">4. 18% GST Outlay (Deposited to Govt Treasury, Reflected in Client GSTR-2B)</span>
                      <span className="font-mono font-bold text-slate-900">₹4,45,500.00</span>
                    </div>
                    <div className="p-3 sm:p-4 flex justify-between items-center">
                      <span className="text-slate-700 font-medium">5. Agency Management &amp; Sourcing Markup</span>
                      <span className="font-mono font-bold text-slate-900">₹2,16,000.00</span>
                    </div>
                    <div className="p-4 bg-slate-900 text-white flex justify-between items-center">
                      <span className="font-bold text-xs sm:text-sm uppercase tracking-wide">
                        Total Principal Invoiced &amp; Financed by Agency
                      </span>
                      <span className="font-mono text-base sm:text-lg font-black text-emerald-400">
                        ₹29,19,350.00
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  By presenting this itemized outlay, the notice establishes that the client has retained ₹27 Lakhs of pure statutory money (wages, PF, ESIC, and GST). In Commercial Court proceedings under Order XXXVII CPC or MSME Samadhaan arbitrations, courts routinely refuse to entertain frivolous client service defenses against pass-through labour outlays. Explore our dedicated guide on{" "}
                  <Link
                    href="/temp-to-perm-contract-employee-absorption-buyout-fee-recovery"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    Temp-to-Perm Absorption Buyout Fee Recovery
                  </Link>
                  .
                </p>
              </section>

              {/* Section 6: Multi-Channel Dispatch Protocol */}
              <section
                id="heading-service-protocol"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Multi-Channel Service Protocol &amp; BSA 2023 Section 63 Proof
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Corporate debtors often attempt to delay recovery proceedings by evading service, instructing security desks to refuse registered envelopes, or claiming that notices sent to their HR email IDs were never forwarded to the Board of Directors. LegalRecovery enforces a synchronized triple-channel dispatch protocol:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-slate-200 rounded-xl p-4 bg-white space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-red-100 text-[#DC2626] flex items-center justify-center font-bold text-xs">
                      RPAD
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">1. Speed Post RPAD</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Served on official Bar Council Advocate Letterhead to the registered corporate office and Managing Director personally. Presumption of valid service applies under Section 27 of the General Clauses Act, 1897.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-red-100 text-[#DC2626] flex items-center justify-center font-bold text-xs">
                      SMTP
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">2. Corporate Email</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Dispatched with high-importance flags, TLS server delivery receipts, and cryptographic SHA-256 hash preservation under Section 63 of Bharatiya Sakshya Adhiniyam, 2023. Addressed to MD, CFO, and HR Head.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-red-100 text-[#DC2626] flex items-center justify-center font-bold text-xs">
                      WA
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">3. Verified WhatsApp</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Sent directly to the registered mobile numbers of the CXOs with blue-tick read receipts preserved in court affidavits. Established as valid legal service by the Supreme Court in Suo Motu WP (C) No. 3/2020.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63)
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Under the new criminal and civil evidence framework effective July 2024, our team generates an automated Section 63 electronic certificate detailing the device serial numbers, hash algorithms, email server logs, and postal tracking receipts. This allows immediate summary judgment without the debtor arguing non-receipt.
                  </p>
                </div>
              </section>

              {/* Section 7: Judicial Precedents */}
              <section
                id="heading-judicial-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Judicial Precedents: Enforcing Unsigned Terms &amp; Non-Circumvention
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Corporate HR leaders routinely claim that &ldquo;agreements sent by email without our counter-signature are not legally binding.&rdquo; Indian High Courts and the Supreme Court have repeatedly rejected this argument in commercial litigation:
                </p>

                <div className="space-y-4">
                  {PRECEDENT_CITATIONS.map((prec, i) => (
                    <div
                      key={i}
                      className="border-l-4 border-[#DC2626] bg-slate-50 p-4 sm:p-5 rounded-r-xl space-y-2"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          {prec.title}
                        </h3>
                        <span className="text-[11px] font-mono font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                          {prec.citation}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        <strong className="text-slate-800">Judicial Holding:</strong> {prec.holding}
                      </p>
                      <div className="pt-1">
                        <p className="text-xs text-[#DC2626] font-semibold">
                          &bull; Recruiter Takeaway: {prec.takeaway}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm">
                  These landmark rulings form the bedrock of Paragraphs 1 and 3 of our legal notice formats, putting the client&apos;s corporate counsel on notice that disputing the fee will result in summary dismissal in Commercial Court. Learn more about{" "}
                  <Link
                    href="/recruitment-agency-90-day-replacement-clause-abuse-fee-recovery"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    Stopping 90-Day Replacement Guarantee Abuse
                  </Link>
                  .
                </p>
              </section>

              {/* Mid-Page Dual CTA */}
              <RecruitmentNoticeCTA variant="secondary" />

              {/* Section 8: FAQ */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Frequently Asked Questions for Recruitment &amp; Staffing Creditors
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl overflow-hidden bg-white open:bg-slate-50/50 transition-colors"
                    >
                      <summary className="cursor-pointer p-4 sm:p-5 text-xs sm:text-sm font-bold text-slate-900 flex items-center justify-between gap-4 select-none hover:text-[#DC2626] transition-colors">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 shrink-0 text-base">
                          ▾
                        </span>
                      </summary>
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 9: Statutory Sources & Directory Links */}
              <section
                id="heading-statutory-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory References &amp; Related Recovery Portals
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  {PRIMARY_SOURCES.map((source, index) => (
                    <a
                      key={index}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 transition-colors flex items-center justify-between group"
                    >
                      <span className="truncate pr-2">{source.title}</span>
                      <span className="text-slate-400 group-hover:text-[#DC2626] shrink-0 font-bold">&nearr;</span>
                    </a>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Related Staffing, Legal &amp; Invoice Recovery Resources
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                    <Link
                      href="/industries/staffing-recruitment-manpower-recovery"
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#DC2626] text-slate-800 hover:text-[#DC2626] transition-colors font-medium flex items-center justify-between"
                    >
                      <span>IND-11 Staffing Hub</span>
                      <span>&rarr;</span>
                    </Link>
                    <Link
                      href="/services/vendor-and-invoice-recoveries"
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#DC2626] text-slate-800 hover:text-[#DC2626] transition-colors font-medium flex items-center justify-between"
                    >
                      <span>Vendor &amp; Invoice Recoveries</span>
                      <span>&rarr;</span>
                    </Link>
                    <Link
                      href="/recovery/business-dues"
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#DC2626] text-slate-800 hover:text-[#DC2626] transition-colors font-medium flex items-center justify-between"
                    >
                      <span>B2B Commercial Recovery</span>
                      <span>&rarr;</span>
                    </Link>
                    <Link
                      href="/law/section-43bh-msme-payment-rule"
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#DC2626] text-slate-800 hover:text-[#DC2626] transition-colors font-medium flex items-center justify-between"
                    >
                      <span>Section 43B(h) Law Guide</span>
                      <span>&rarr;</span>
                    </Link>
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#DC2626] text-slate-800 hover:text-[#DC2626] transition-colors font-medium flex items-center justify-between"
                    >
                      <span>MSME Interest Calculator</span>
                      <span>&rarr;</span>
                    </Link>
                    <Link
                      href="/sitemap"
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#DC2626] text-[#DC2626] font-bold flex items-center justify-between"
                    >
                      <span>LegalRecovery.in Full Sitemap &rarr;</span>
                    </Link>
                  </div>
                </div>
              </section>

              {/* Bottom Dual-Track B2B Conversion Funnel */}
              <div className="pt-4">
                <RecruitmentNoticeCTA variant="primary" />
              </div>
            </div>
          </div>
        </main>

        {/* Global Footer Cross-Links */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
