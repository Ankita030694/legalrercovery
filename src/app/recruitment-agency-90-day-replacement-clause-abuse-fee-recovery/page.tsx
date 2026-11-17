import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ReplacementClauseRecoveryTableOfContents from "./ReplacementClauseRecoveryTableOfContents";
import ReplacementClauseScenarioTabs from "./ReplacementClauseScenarioTabs";
import ReplacementClauseRecoveryCTA from "./ReplacementClauseRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/recruitment-agency-90-day-replacement-clause-abuse-fee-recovery";
const EXACT_H1 =
  "Stopping '90-Day Replacement Guarantee' Abuse: Why Clients Cannot Delay Day-30 Placement Invoices or Demand Refunds After Constructive Dismissal";
const META_TITLE = "Client Using 90-Day Replacement Clause to Delay Fee?";
const META_DESCRIPTION =
  "Client withholding Day-30 placement invoice citing 90-day replacement? Enforce Condition Precedent under Contract Act s.51-54. Stop free credit abuse now.";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const LEGAL_REVIEWER = {
  name: "Anuj Anand Malik",
  role: "Advocate & Founder, AMA Legal Solutions",
};

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_URL}`,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("Stopping 90-Day Replacement Guarantee Abuse Placement Fee Recovery"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const STATUTORY_MATRIX = [
  {
    remedy: "Condition Precedent Doctrine Enforcement",
    statute: "Indian Contract Act, 1872 (Sections 51–54)",
    timing: "Triggered immediately on Day 16 or Day 31 post-invoice maturity",
    mechanism:
      "Establish that the client's contractual right to demand a free candidate replacement search is legally contingent upon strictly timely payment of the recruitment fee within agreed invoice terms (typically 15 to 30 days of candidate onboarding).",
    relief:
      "Total forfeiture of the client's replacement warranty and immediate crystallisation of the overdue placement fee as an undisputed, matured operational debt.",
    suitability:
      "Enterprise clients, venture-backed startups, and GCCs withholding payment while claiming they will 'reconcile after the 90-day probation window'.",
    tone: "emerald",
  },
  {
    remedy: "Bar on Self-Induced Breach & Constructive Discharge",
    statute: "Indian Contract Act, 1872 (Section 53 & Section 67)",
    timing: "Immediate response upon client termination of hire or candidate resignation",
    mechanism:
      "Rebut client claims for candidate replacement or fee refunds where separation was caused by client corporate layoffs, restructuring, department closures, or unilateral alteration of job role, location, or compensation.",
    relief:
      "Discharges agency from all replacement or credit obligations; fee remains 100% earned and non-refundable under common law doctrine of prevention.",
    suitability:
      "Clients laying off executive or tech hires on Day 60–85 citing market conditions or restructuring, then demanding full placement fee refunds.",
    tone: "slate",
  },
  {
    remedy: "Contractual Remedy Restriction (Credit Note vs Cash Refund)",
    statute: "Indian Contract Act, 1872 (Sections 73–74) & Specific Relief Act, 1963",
    timing: "Upon client demanding cash wire transfer following candidate resignation",
    mechanism:
      "Enforce bilateral contractual remedies limiting client recourse strictly to 'one free replacement search within 60 days' or an internal credit note valid for 12 months, barring unauthorized cash withdrawals.",
    relief:
      "Precludes unilateral bank chargebacks, debit notes, or cash refund demands; protects agency liquidity and working capital.",
    suitability:
      "Clients refusing backfill candidates and unilaterally demanding immediate bank refunds of paid placement invoices.",
    tone: "emerald",
  },
  {
    remedy: "MSMED Act Mandatory 45-Day Payment & 3x RBI Compound Interest",
    statute: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18)",
    timing: "Day 46 post-invoice date where placement fee remains unpaid",
    mechanism:
      "For Udyam-registered permanent recruitment and staffing firms, lodge statutory dispute reference before State Micro and Small Enterprises Facilitation Council (MSEFC).",
    relief:
      "Statutory monthly compounding interest at 3 times the RBI Bank Rate; mandatory 75% pre-deposit requirement under Section 19 for debtor appeals; commercial settlement leverage.",
    suitability:
      "Boutique recruitment agencies, search consultancies, and executive headhunting firms registered as Micro or Small enterprises.",
    tone: "emerald",
  },
  {
    remedy: "Corporate Tax Expense Disallowance Leverage",
    statute: "Income Tax Act, 1961 (Section 43B(h))",
    timing: "End of financial year / 45 days post-invoice maturity",
    mechanism:
      "Formal statutory notification to debtor CFO and statutory auditors that unpaid recruitment placement fees payable to Udyam-registered MSME suppliers cannot be deducted as legitimate business expenses.",
    relief:
      "Creates immediate 25%–35% direct corporate tax liability penalty on debtor company unless overdue placement fees are cleared prior to financial year closing.",
    suitability:
      "Tier-1 IT companies, listed corporate conglomerates, and enterprise employers with audited balance sheets withholding recruitment invoices.",
    tone: "slate",
  },
  {
    remedy: "Commercial Summary Suit for Liquidated Recruitment Debt",
    statute: "Code of Civil Procedure, 1908 (Order XXXVII) & Commercial Courts Act, 2015",
    timing: "Post-statutory 15-day advocate demand notice and Section 12A mediation",
    mechanism:
      "Institution of fast-track commercial summary proceedings founded on signed Terms of Business (TOB), candidate offer letter, joining confirmation, and tax invoice.",
    relief:
      "Enforceable money decree without protracted civil trial; conditional leave to defend requiring pre-deposit of the recruitment fee into court registry.",
    suitability:
      "Deliberate corporate default on placement invoices exceeding ₹3 Lakh where corporate HR ignores amicable settlement notices.",
    tone: "emerald",
  },
];

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Stop 90-Day Replacement Clause Abuse and Recover Overdue Placement Fees",
  description:
    "A 5-stage legal and operational enforcement framework for recruitment agencies and executive search firms to defeat client delay tactics and recover unpaid placement fees.",
  totalTime: "P30D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit Terms of Business & Verify Joining Timestamp",
      text: "Examine executed recruitment agreement, fee schedule, candidate joining confirmation, and verify whether invoice was raised on candidate's Day 1 with 15–30 day credit terms.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Issue Formal Notice of Condition Precedent Default",
      text: "On Day 31, formally notify corporate HR and Accounts Payable that failure to pay the placement invoice within agreed terms breaches Section 51-54 of the Contract Act and voids replacement warranty.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Rebut Constructive Dismissal and Layoff Refund Demands",
      text: "If client terminated candidate due to restructuring, performance, or role alteration, issue a written statutory rebuttal establishing that client-induced separation does not trigger replacement obligations under Section 53.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Serve Senior Advocate Statutory Demand Notice",
      text: "Serve an advocate demand notice via Speed Post RPAD, email, and WhatsApp detailing principal debt, 3x RBI compound interest under MSMED Act Section 16, and Section 43B(h) tax disallowance notice.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Escalate to MSEFC Samadhaan or Order XXXVII Commercial Court",
      text: "File statutory claim before the State Micro and Small Enterprises Facilitation Council or initiate an Order XXXVII Summary Suit in Commercial Court for immediate debt recovery.",
    },
  ],
};

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  url: `${SITE_URL}${PAGE_URL}`,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PAGE_URL}`,
  },
  datePublished: "2026-11-17T12:00:00+05:30",
  dateModified: "2026-11-17T12:00:00+05:30",
  author: {
    "@type": "Person",
    name: LEGAL_REVIEWER.name,
    jobTitle: LEGAL_REVIEWER.role,
    url: `${SITE_URL}/about`,
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
  image: `${SITE_URL}/blog_money_recovery.png`,
  inLanguage: "en-IN",
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
      name: "Staffing & Manpower Recovery",
      item: `${SITE_URL}/industries/staffing-recruitment-manpower-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "90-Day Replacement Clause Recovery",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

const FAQ_ITEMS = [
  {
    question: "Can a client legally delay our Day-30 placement invoice until the 90-day candidate probation window ends?",
    answer:
      "No, absolutely not. Under the Indian Contract Act, 1872 (Sections 51–54), the recruitment agency's primary performance obligation—sourcing, screening, presenting, and facilitating the successful joining of the candidate—is fully completed on the candidate's first day of work. The replacement guarantee is a separate, conditional warranty. If the signed Terms of Business (TOB) stipulate a 15-day or 30-day payment term, the client must clear the invoice upon the agreed maturity date. Withholding payment to 'test candidate performance' or create an unauthorized 90-day interest-free credit line is a material contractual breach that forfeits the replacement guarantee.",
  },
  {
    question: "What is a 'Condition Precedent' in a recruitment agency placement agreement?",
    answer:
      "A Condition Precedent is a contractual stipulation that must be fulfilled before a specific right or warranty takes legal effect. In professional recruitment contracts, timely settlement of the placement fee invoice within the agreed credit window (e.g., 15 or 30 days from joining) is explicitly drafted as a condition precedent to the agency's obligation to provide a free replacement. If the client fails or refuses to pay the placement invoice on time, the condition precedent fails, and the recruitment agency is legally absolved of any obligation to provide a replacement candidate or credit note under Section 54 of the Contract Act.",
  },
  {
    question: "Are recruitment agencies required to refund fees if the client lays off the candidate on Day 75?",
    answer:
      "No. A recruitment agency provides talent search and introduction services; it is not an insurer of the client company's corporate solvency, project continuity, or workforce planning. Under standard commercial terms of business and Section 53 of the Indian Contract Act, replacement warranties exclusively apply to voluntary candidate resignations or termination for verified gross misconduct. They strictly exclude employer-induced separations, including corporate downsizing, workforce rationalisation, department shutdowns, budget cuts, or constructive dismissals.",
  },
  {
    question: "What constitutes 'Constructive Dismissal' in staffing fee dispute litigation?",
    answer:
      "Constructive dismissal occurs when an employer unilaterally alters the fundamental conditions of employment—such as reducing compensation, altering reporting structures, demoting designations, transferring the employee to an unagreed city, or creating a hostile work environment—forcing the candidate to resign. Under Indian employment and contract jurisprudence, such resignations are treated as employer-induced separations. Under Section 67 of the Contract Act, the client cannot exploit a self-induced resignation to demand a free replacement or placement fee refund.",
  },
  {
    question: "Can a client demand a cash bank refund instead of a free replacement or credit note?",
    answer:
      "No, provided your Terms of Business specify that the sole and exclusive remedy for an eligible early exit is a 'one-time free replacement search within 60 days' or an internal 'credit note valid for 12 months'. Under Indian contract law (Sections 73–74), courts enforce agreed remedial frameworks. A corporate client cannot unilaterally bypass the contractual remedial hierarchy to demand cash restitution or attempt an unauthorized debit note offset against other active search mandates.",
  },
  {
    question: "How does the MSMED Act protect recruitment agencies from delayed placement fees?",
    answer:
      "Most independent recruitment consultancies, executive search boutiques, and staffing agencies are registered as Micro or Small Enterprises under the Udyam portal. Under Section 15 of the MSMED Act, 2006, clients are legally obligated to clear invoices within the agreed term, which cannot exceed 45 days. If the client defaults beyond 45 days, Section 16 mandates payment of compound interest with monthly rests at 3 times the RBI Bank Rate. Furthermore, under Section 19, the client must deposit 75% of the awarded sum before any court can entertain an appeal.",
  },
  {
    question: "How does Section 43B(h) of the Income Tax Act help recover overdue recruitment invoices?",
    answer:
      "Under Section 43B(h) of the Income Tax Act, 1961, any payment due to an Udyam-registered Micro or Small enterprise that remains unpaid beyond 45 days cannot be claimed by the debtor client as an allowable business deduction in that financial year. Corporate clients face a direct 25% to 35% corporate tax penalty on the overdue recruitment fee. Serving a formal Section 43B(h) statutory non-compliance notice to the client's CFO and statutory auditors frequently triggers immediate invoice clearance before financial year-end.",
  },
  {
    question: "What electronic evidence is required under BSA 2023 Section 63 to prove placement debt?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023, digital records are fully admissible when supported by a statutory electronic certificate. Essential evidentiary records include: executed Terms of Business (TOB) or email exchange confirming fee terms, candidate CV submission timestamp, interview scheduling emails, candidate offer letter, written joining confirmation from the client HR, PDF tax invoice delivery confirmation, and WhatsApp or email correspondence showing the client acknowledged onboarding without disputing the service.",
  },
];

export default function RecruitmentAgencyReplacementAbusePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>B2B Creditor Recovery Guide</span>
            <span>&bull;</span>
            <span>Staffing &amp; Executive Search (IND-11)</span>
            <span>&bull;</span>
            <span>Contract Act s.51–54</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Statutory Answer &amp; Creditor Summary
            </span>
            Corporate HR teams cannot convert a limited 90-day free candidate replacement warranty into an unauthorized 90-day credit period. In accordance with the{" "}
            <Link
              href="/industries/staffing-recruitment-manpower-recovery"
              className="text-red-300 font-bold underline hover:text-white transition-colors"
            >
              Staffing, HR Recruitment &amp; Executive Search Recovery Hub
            </Link>
            , recruitment services crystallise upon candidate onboarding. Under Sections 51–54 of the Indian Contract Act, 1872, timely settlement of the Day-15 or Day-30 placement fee is a strict condition precedent; withholding payment forfeits warranty rights, while client-side layoffs, restructuring, or role alterations void replacement obligations entirely under Section 53.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="border-r border-white/10 pr-2">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Statutory Hook
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-slate-100 mt-1 block">
                ICA s.51–54
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 block">
                Condition Precedent Law
              </span>
            </div>
            <div className="border-r border-white/10 pr-2">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                MSME Interest Ceiling
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-emerald-400 mt-1 block">
                3x RBI Rate
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 block">
                Monthly Compounding
              </span>
            </div>
            <div className="border-r border-white/10 pr-2">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Payment Deadline
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-amber-400 mt-1 block">
                Day 15–30 Terms
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 block">
                Max 45 Days MSMED Act
              </span>
            </div>
            <div>
              <span className="block text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                CFO Tax Penalty
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-red-400 mt-1 block">
                s.43B(h) Audit
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 block">
                Expense Disallowance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "Staffing & Recruitment Recovery",
              href: "/industries/staffing-recruitment-manpower-recovery",
            },
            {
              label: "90-Day Replacement Clause Recovery",
              href: PAGE_URL,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
          {/* Sticky Left Sidebar TOC */}
          <ReplacementClauseRecoveryTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The Free Credit Trap */}
            <section
              id="heading-free-credit-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  1
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                  Contractual Reality &bull; Commercial Practice
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                The 90-Day Free Credit Trap &amp; Section 51-54 Law
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                In India&rsquo;s recruitment, executive search, and permanent staffing sector, recruitment consultancies deliver substantial upfront value. Agencies deploy dedicated researchers, leverage proprietary talent databases, conduct multi-stage technical screenings, and manage candidate offer negotiations. When a candidate signs an employment contract and physically or virtually onboards, the agency&rsquo;s primary recruitment service is complete.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                However, corporate HR departments and procurement desks routinely weaponize the standard &ldquo;90-day free one-time replacement guarantee&rdquo; into an unauthorized, 90-day interest-free supplier credit facility. While the executed Terms of Business (TOB) specify payment within 15 or 30 days of joining, corporate accounts payable teams stall the invoice with familiar excuses: <em>&ldquo;Our finance policy is to release payment only after candidate probation concludes,&rdquo;</em> or <em>&ldquo;What if the candidate resigns on Day 85? We cannot pay upfront.&rdquo;</em>
              </p>

              <div className="p-4 sm:p-5 rounded-xl bg-red-50/80 border-l-4 border-[#DC2626] mb-6">
                <p className="text-xs sm:text-sm font-bold text-red-950 mb-1">
                  The Fundamental Legal Fallacy of the &ldquo;90-Day Credit Period&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-red-900 leading-relaxed">
                  A replacement guarantee is a <strong>secondary conditional warranty</strong>, not an agreement to delay payment maturity. Under Indian Contract Act principles, service delivery takes place upon joining. Withholding the placement fee past 30 days breaches the primary payment covenant, immediately forfeiting the client&rsquo;s warranty protections while exposing the debtor company to mandatory statutory compound interest under the MSMED Act and Section 43B(h) income tax disallowance penalties.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-black text-slate-900 block mb-2 uppercase tracking-wider">
                    Debtor HR Misconception
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li>&bull; Assumes fee is contingent on 90-day candidate retention</li>
                    <li>&bull; Treats placement agency as an insurance underwriter</li>
                    <li>&bull; Demands cash refunds if internal budget cuts trigger layoffs</li>
                    <li>&bull; Attempts unilateral debit notes against other open mandates</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <span className="text-xs font-black text-emerald-950 block mb-2 uppercase tracking-wider">
                    Established Statutory Principle
                  </span>
                  <ul className="space-y-1.5 text-xs text-emerald-800">
                    <li>&bull; Placement fee matures on candidate joining date</li>
                    <li>&bull; Timely payment (15/30d) is a strict Condition Precedent</li>
                    <li>&bull; Client layoffs/role downgrades void replacement obligation</li>
                    <li>&bull; Remedy is strictly limited to candidate backfill search or credit note</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2: 5-Stage Decision Tree */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  2
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                  Operational SOP &bull; Fast-Track Escalation
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                5-Stage Placement Fee Escalation Protocol
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                When a corporate client refuses to release placement fees citing replacement clauses or probation windows, recruitment leaders must transition from polite HR follow-ups to structured statutory recovery. The following five-stage decision architecture establishes undisputed debt crystallization:
              </p>

              {/* SVG Decision Tree Diagram (Desktop / Tablet) */}
              <div className="hidden md:block mb-8 p-6 bg-slate-900 rounded-2xl border border-slate-800 text-white shadow-inner">
                <p className="text-xs font-bold text-red-400 uppercase tracking-widest text-center mb-5">
                  Statutory Placement Fee Recovery Workflow &bull; Operational SOP
                </p>
                <div className="grid grid-cols-5 gap-3 text-center">
                  <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-3 flex flex-col justify-between">
                    <div>
                      <span className="w-6 h-6 rounded-full bg-red-600 text-white font-bold text-[10px] mx-auto flex items-center justify-center mb-2">
                        1
                      </span>
                      <p className="text-xs font-black text-slate-100 mb-1">Day 1 Joining</p>
                      <p className="text-[11px] text-slate-400">
                        Invoice raised; 15/30d terms clock starts ticking
                      </p>
                    </div>
                    <span className="mt-3 text-[10px] text-emerald-400 font-semibold">
                      Candidate Onboarded
                    </span>
                  </div>

                  <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-3 flex flex-col justify-between">
                    <div>
                      <span className="w-6 h-6 rounded-full bg-red-600 text-white font-bold text-[10px] mx-auto flex items-center justify-center mb-2">
                        2
                      </span>
                      <p className="text-xs font-black text-slate-100 mb-1">Day 31 Maturity</p>
                      <p className="text-[11px] text-slate-400">
                        HR claims &ldquo;90-day probation hold&rdquo;
                      </p>
                    </div>
                    <span className="mt-3 text-[10px] text-amber-400 font-semibold">
                      Condition Precedent Notice
                    </span>
                  </div>

                  <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-3 flex flex-col justify-between">
                    <div>
                      <span className="w-6 h-6 rounded-full bg-red-600 text-white font-bold text-[10px] mx-auto flex items-center justify-center mb-2">
                        3
                      </span>
                      <p className="text-xs font-black text-slate-100 mb-1">Day 46 Default</p>
                      <p className="text-[11px] text-slate-400">
                        Warranty voided; MSMED 3x interest triggers
                      </p>
                    </div>
                    <span className="mt-3 text-[10px] text-red-400 font-semibold">
                      s.43B(h) CFO Alert
                    </span>
                  </div>

                  <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-3 flex flex-col justify-between">
                    <div>
                      <span className="w-6 h-6 rounded-full bg-red-600 text-white font-bold text-[10px] mx-auto flex items-center justify-center mb-2">
                        4
                      </span>
                      <p className="text-xs font-black text-slate-100 mb-1">Day 60 Legal</p>
                      <p className="text-[11px] text-slate-400">
                        Advocate demand notice via RPAD + WhatsApp
                      </p>
                    </div>
                    <span className="mt-3 text-[10px] text-red-400 font-semibold">
                      15-Day Final Demand
                    </span>
                  </div>

                  <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-3 flex flex-col justify-between">
                    <div>
                      <span className="w-6 h-6 rounded-full bg-red-600 text-white font-bold text-[10px] mx-auto flex items-center justify-center mb-2">
                        5
                      </span>
                      <p className="text-xs font-black text-slate-100 mb-1">Day 75 Judicial</p>
                      <p className="text-[11px] text-slate-400">
                        MSEFC Samadhaan or Order XXXVII CPC
                      </p>
                    </div>
                    <span className="mt-3 text-[10px] text-emerald-400 font-semibold">
                      Attachment / Decree
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Stacked Step Cards */}
              <div className="md:hidden space-y-3 mb-6">
                <div className="p-3.5 bg-slate-900 text-white rounded-xl border border-slate-800">
                  <span className="text-[10px] font-black uppercase text-red-400">Stage 1 &bull; Day 1</span>
                  <p className="text-xs font-bold mt-1 text-slate-100">Candidate Onboarding &amp; Invoice Dispatch</p>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Invoice issued with explicit 15/30-day maturity terms; condition precedent clause clearly highlighted.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-900 text-white rounded-xl border border-slate-800">
                  <span className="text-[10px] font-black uppercase text-amber-400">Stage 2 &bull; Day 31</span>
                  <p className="text-xs font-bold mt-1 text-slate-100">Condition Precedent Default Notice</p>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Formal notice served citing Contract Act s.51–54; client warned that non-payment voids replacement rights.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-900 text-white rounded-xl border border-slate-800">
                  <span className="text-[10px] font-black uppercase text-red-400">Stage 3 &bull; Day 46</span>
                  <p className="text-xs font-bold mt-1 text-slate-100">MSMED Act &amp; Section 43B(h) Invocation</p>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Statutory 3x RBI compound interest activated; CFO notified of corporate income tax disallowance risk.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-900 text-white rounded-xl border border-slate-800">
                  <span className="text-[10px] font-black uppercase text-red-400">Stage 4 &bull; Day 60</span>
                  <p className="text-xs font-bold mt-1 text-slate-100">Advocate Statutory Demand Notice</p>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Senior counsel demand notice served across Registered Post RPAD, email, and tracking-enabled WhatsApp.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-900 text-white rounded-xl border border-slate-800">
                  <span className="text-[10px] font-black uppercase text-emerald-400">Stage 5 &bull; Day 75</span>
                  <p className="text-xs font-bold mt-1 text-slate-100">MSEFC Reference or Commercial Summary Suit</p>
                  <p className="text-[11px] text-slate-300 mt-1">
                    File claim on MSME Samadhaan portal or initiate Order XXXVII CPC fast-track recovery proceedings.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  <strong>Key Takeaway for Staffing Leaders:</strong> Never allow corporate HR to combine candidate performance reviews with accounts payable schedules. When day 30 passes without remittance, immediate invocation of statutory default halts the client&rsquo;s ability to manufacture post-dated replacement claims. Explore our comprehensive{" "}
                  <Link
                    href="/services/vendor-and-invoice-recoveries"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    Vendor &amp; Invoice Recovery Services
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/recovery/business-dues"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    Business Dues Enforcement Solutions
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 3: Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  3
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                  Legal Architecture &bull; Dual-Weapon Arsenal
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Recovery Matrix: Contract Act &amp; MSMED Act
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Recruitment agencies frequently misunderstand their rights under Indian law, believing they must wait until the 90th day before taking legal action. Indian commercial jurisprudence provides immediate, high-leverage statutory mechanisms:
              </p>

              {/* Dark-Header Responsive Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-4 font-black uppercase tracking-wider text-[11px]">
                        Remedy / Legal Mechanism
                      </th>
                      <th className="p-3 sm:p-4 font-black uppercase tracking-wider text-[11px]">
                        Governing Statute
                      </th>
                      <th className="p-3 sm:p-4 font-black uppercase tracking-wider text-[11px]">
                        Trigger Timeline
                      </th>
                      <th className="p-3 sm:p-4 font-black uppercase tracking-wider text-[11px]">
                        Statutory Relief &amp; Enforcement
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {STATUTORY_MATRIX.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 align-top">
                          <span className="block">{row.remedy}</span>
                          <span
                            className={`inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                              row.tone === "emerald"
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-slate-100 text-slate-700"
                            }`}
                          >
                            {row.suitability.split(",")[0]}
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 font-semibold align-top">
                          {row.statute}
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 align-top">
                          {row.timing}
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 leading-relaxed align-top">
                          <p className="mb-1">{row.mechanism}</p>
                          <p className="text-[11px] text-slate-500 font-medium">{row.relief}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs sm:text-sm text-emerald-900 font-medium">
                <strong>Statutory Precedent Note:</strong> Under the Indian Contract Act, reciprocal promises where one party cannot perform until the other has fulfilled their part (Sections 51–54) govern commercial service guarantees. The debtor client cannot demand performance of a conditional warranty (free replacement search) while in willful default of their condition precedent (paying the placement invoice).
              </div>
            </section>

            {/* Section 4: 4 Replacement Clause Abuse Scenarios */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  4
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                  Interactive Scenario Explorer &bull; Failure Modes
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                4 Replacement Clause Abuse Scenarios &amp; Practical Countermeasures
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Explore the four most common commercial failure modes encountered by recruitment consultancies, complete with debtor client pretext, legal realities, statutory citations, and step-by-step creditor recovery action plans:
              </p>

              <ReplacementClauseScenarioTabs />
            </section>

            {/* Section 5: Condition Precedent Doctrine */}
            <section
              id="heading-condition-precedent"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  5
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                  Substantive Law &bull; Indian Contract Act
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Section 51-54 Contract Act: The Condition Precedent Doctrine
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                The legal engine powering recruitment fee recovery is the doctrine of <em>Conditional Precedent in Reciprocal Promises</em> under Chapter IV of the Indian Contract Act, 1872. Understanding the interplay of Sections 51, 52, 53, and 54 dismantles corporate HR&rsquo;s most sophisticated defenses:
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-black text-slate-900 mb-1">
                    Section 52: Order of Performance of Reciprocal Promises
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Where the order in which reciprocal promises are to be performed is expressly fixed by the contract, they must be performed in that order. In recruitment agreements, the contractual sequence is: (1) Agency introduces candidate &rarr; (2) Candidate joins on Day 1 &rarr; (3) Agency raises invoice &rarr; (4) Client pays invoice within 15–30 days &rarr; (5) If candidate leaves voluntarily within 90 days, agency conducts one replacement search. A client cannot reverse steps 4 and 5 by withholding payment until Day 90.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-black text-slate-900 mb-1">
                    Section 54: Defaulting Party Cannot Claim Performance from Counterparty
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When a contract consists of reciprocal promises, such that one of them cannot be performed, or that its performance cannot be claimed till the other has been performed, and the promisor of the promise last mentioned fails to perform it, such promisor cannot claim the performance of the reciprocal promise, and must make compensation to the other party for any loss sustained. Therefore, when a client defaults on paying the placement invoice on Day 30, they forfeit any legal right to demand a candidate replacement or credit note.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-black text-slate-900 mb-1">
                    Section 53: Liability of Party Preventing Event on Which Contract Is to Take Effect
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When a contract contains reciprocal promises and one party to the contract prevents the other from performing his promise, the contract becomes voidable at the option of the party so prevented. If a corporate employer terminates a candidate due to corporate reorganization, layoff, or project cancellation, the employer directly prevents the candidate from serving out the 90 days, excusing the agency from all warranty claims.
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When drafting responses to recalcitrant client HR leaders, citing Sections 51–54 establishes that your agency is operating from a position of ironclad statutory authority rather than commercial supplication. For wider B2B contractual enforcement insights, review our guide on{" "}
                <Link
                  href="/law/section-43bh-msme-payment-rule"
                  className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                >
                  Section 43B(h) MSME Payment Rules &amp; Debtor Penalties
                </Link>
                .
              </p>
            </section>

            {/* Section 6: Layoffs & Constructive Dismissal */}
            <section
              id="heading-layoff-constructive-dismissal"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  6
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                  Employer Misconduct &bull; Defense Invalidation
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Client Layoffs &amp; Role Alteration Void Replacement Obligations
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                A recurrent practice among venture-backed scaleups, IT consultancies, and retail conglomerates is hiring aggressively, then conducting sudden workforce rationalizations within 60 to 90 days. Procurement teams then attempt to recover cash or demand free replacement executive searches, arguing that the candidate is no longer with the company.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl border border-red-200 bg-red-50/50">
                  <span className="text-xs font-black text-[#DC2626] block uppercase tracking-wider mb-2">
                    Circumstances Where Warranty Is Fully Discharged
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-600 font-bold">&#x2717;</span>
                      <span><strong>Corporate Restructuring / Downsizing:</strong> Candidate let go due to redundancy or department closure.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-600 font-bold">&#x2717;</span>
                      <span><strong>Constructive Discharge:</strong> Client changed work location, slashed variable pay, or altered reporting lines.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-600 font-bold">&#x2717;</span>
                      <span><strong>Company Solvency Events:</strong> Client lost funding or shut down operations during the probation period.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-600 font-bold">&#x2717;</span>
                      <span><strong>Unilateral Contract Repudiation:</strong> Client failed to provide agreed workstation, laptop, or project access.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50">
                  <span className="text-xs font-black text-emerald-800 block uppercase tracking-wider mb-2">
                    Circumstances Permitting Legitimate Replacement Search
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">&#x2713;</span>
                      <span><strong>Voluntary Resignation:</strong> Candidate leaves voluntarily for personal reasons without employer breach.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">&#x2713;</span>
                      <span><strong>Documented Gross Misconduct:</strong> Candidate terminated for proven fraud, theft, or severe ethics breach.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">&#x2713;</span>
                      <span><strong>Invoice Was Timely Paid:</strong> Client cleared the placement fee within the stipulated 15/30-day window.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">&#x2713;</span>
                      <span><strong>Written Notice Given in 7 Days:</strong> Client formally notified agency within 7 days of candidate departure.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If your agency is also facing issues where a client secretly retained a candidate after claiming they rejected them, review our specialized playbook on{" "}
                <Link
                  href="/backdoor-hiring-candidate-circumvention-placement-fee-recovery-india"
                  className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                >
                  Backdoor Hiring &amp; Candidate Circumvention Fee Recovery
                </Link>
                , as well as contract staffing defaults under{" "}
                <Link
                  href="/contract-staffing-temp-payroll-pf-esic-invoice-default-recovery"
                  className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                >
                  Contract Staffing &amp; Temp Payroll Invoice Recovery
                </Link>
                .
              </p>
            </section>

            {/* Section 7: Credit Note vs Cash Refund */}
            <section
              id="heading-credit-note-vs-cash"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  7
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                  Remedial Hierarchy &bull; Working Capital Defense
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Credit Note Replacement vs Illegal Cash Refund Demands
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                When a candidate legitimately resigns within 90 days and the invoice was paid on time, corporate procurement departments frequently insist on an immediate bank wire refund of the fee rather than accepting a replacement search or credit note.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Under Indian contract jurisprudence (Specific Relief Act, 1963 and Contract Act Sections 73–74), remedies for contractual events are governed strictly by the four corners of the executed contract. In institutional staffing agreements, cash refunds are excluded by default because the agency has already incurred non-recoverable operational costs in headhunting, CV curation, and technical evaluation.
              </p>

              <div className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white mb-6">
                <p className="text-xs font-black uppercase tracking-wider text-red-400 mb-2">
                  The Contractual Remedial Ladder (Non-Negotiable Escalation)
                </p>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <span className="font-bold text-slate-100">Step 1: Exclusive 60-Day Replacement Window</span>
                      <p className="text-slate-300 text-xs mt-0.5">
                        Agency has the sole and exclusive right for 60 business days from written notification to present qualified replacement profiles matching the original job description.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <span className="font-bold text-slate-100">Step 2: 12-Month Rolling Credit Note</span>
                      <p className="text-slate-300 text-xs mt-0.5">
                        If the client eliminates the position, freezes hiring, or rejects at least 3 qualified profiles, the agency issues a Credit Note valid for 12 months against any subsequent mandate across any department.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <span className="font-bold text-slate-100">Step 3: Complete Bar on Unilateral Debit Notes</span>
                      <p className="text-slate-300 text-xs mt-0.5">
                        The contract must expressly forbid the client from issuing unauthorized debit notes or withholding dues against concurrent recruitment or staffing invoices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Model Contract Clause */}
            <section
              id="heading-model-contract-clause"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  8
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                  Contractual Hygiene &bull; Preventative Drafting
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Model Contract Clause: Ironclad Payment-First Warranty
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Protect your agency from day one by inserting the following advocate-vetted &ldquo;Payment-First Conditional Replacement Guarantee&rdquo; clause into your Terms of Business, Master Services Agreements (MSA), and Client Fee Schedules:
              </p>

              <div className="p-4 sm:p-6 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed border border-slate-800 shadow-md mb-4 select-all">
                <p className="text-emerald-400 font-bold mb-2 uppercase tracking-widest text-[10px]">
                  // MODEL CLAUSE: PAYMENT-FIRST CONDITIONAL REPLACEMENT WARRANTY
                </p>
                <p className="text-slate-300 mb-2">
                  &ldquo;12.1 <strong className="text-white">Condition Precedent to Replacement Warranty:</strong> In the event that a candidate successfully placed by the Agency voluntarily resigns or is terminated for substantiated gross ethical misconduct within ninety (90) calendar days from their official joining date, the Agency shall, as the Client&rsquo;s sole and exclusive remedy, provide one (1) replacement search without additional professional fee.&rdquo;
                </p>
                <p className="text-slate-300 mb-2">
                  &ldquo;12.2 <strong className="text-white">Strict Payment Condition:</strong> The replacement warranty set forth in Clause 12.1 is strictly subject to the <strong>Condition Precedent</strong> that the Client has fully paid and settled the Agency&rsquo;s original placement invoice within thirty (30) calendar days of the candidate&rsquo;s joining date. In the event of any payment delay or withholding beyond the agreed credit period, the replacement warranty shall stand permanently null, void, and forfeited, without prejudicing the Agency&rsquo;s right to recover the full fee plus statutory interest.&rdquo;
                </p>
                <p className="text-slate-300 mb-2">
                  &ldquo;12.3 <strong className="text-white">Exclusions from Replacement:</strong> This warranty shall NOT apply, and the placement fee shall remain 100% earned and non-refundable, if the candidate&rsquo;s separation occurs as a result of: (a) corporate restructuring, redundancy, layoffs, or downsizing; (b) material alteration of job description, compensation, reporting hierarchy, or work location; or (c) employer insolvency, merger, or closure.&rdquo;
                </p>
                <p className="text-slate-300">
                  &ldquo;12.4 <strong className="text-white">No Cash Refunds:</strong> Under no circumstances shall the Agency be obligated to issue cash refunds. If a replacement candidate cannot be identified within sixty (60) days, the Agency shall issue a Credit Note with twelve (12) months validity for future mandates.&rdquo;
                </p>
              </div>

              <p className="text-xs text-slate-500">
                Tip: Copy and integrate this clause directly into your digital contracts, SOW addenda, and fee proposals before onboarding enterprise accounts.
              </p>
            </section>

            {/* Section 9: Worked Financial Example */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  9
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                  Financial Ledger &bull; Worked Recovery Simulation
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Worked ₹12 Lakh Placement Default Financial Ledger
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                The following worked calculation illustrates a typical executive search fee default on two senior hires placed at a mid-market enterprise, showing how delay tactics compound the debtor company&rsquo;s liabilities under MSMED Act Section 16 and Income Tax Section 43B(h):
              </p>

              {/* Financial Simulation Ledger */}
              <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 border border-slate-800 shadow-md mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
                  <span className="text-xs font-black uppercase tracking-wider text-red-400">
                    Case Study Ledger: Executive Tech Placement Default
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Candidate Joined: 01-Jan-2026 &bull; Status: Overdue Day 120
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs sm:text-sm">
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">Principal Placement Invoices (2 Executive Hires @ 8.33% of ₹72L CTC)</span>
                    <span className="font-bold text-slate-100">₹12,00,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">Applicable GST @ 18% (Invoice Total)</span>
                    <span className="font-bold text-slate-100">₹2,16,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">Agreed Payment Due Date (30-Day Credit Maturity)</span>
                    <span className="font-bold text-amber-400">31-Jan-2026</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">Debtor Action: Withheld payment citing 90-day probation review</span>
                    <span className="font-bold text-red-400">Unlawful Credit Default</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">MSMED Act Default Days (Calculated past Day 45 statutory ceiling)</span>
                    <span className="font-bold text-amber-400">75 Days Overdue</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">MSME Statutory Compound Interest (3x RBI Bank Rate = ~19.5% p.a. monthly rests)</span>
                    <span className="font-bold text-emerald-400">₹72,480</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">Section 43B(h) Corporate Income Tax Disallowance Exposure (30% Corporate Tax + Surcharge)</span>
                    <span className="font-bold text-red-400">₹4,24,800 Added Tax</span>
                  </div>
                  <div className="flex justify-between pt-2 text-sm sm:text-base font-black border-t-2 border-red-600">
                    <span className="text-white">Total Immediate Debtor Liability &amp; Disallowance Exposure</span>
                    <span className="text-emerald-400">₹19,13,280</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Calculate your exact statutory overdue interest across all your unpaid recruitment invoices using our free{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>
                , and review our advocate-drafted{" "}
                <Link
                  href="/templates/legal-notice-reply-format"
                  className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                >
                  Commercial Legal Notice Formats
                </Link>
                .
              </div>
            </section>

            {/* Section 10: BSA Section 63 Evidence Checklist */}
            <section
              id="heading-bsa-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  10
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                  Electronic Evidence &bull; Judicial Proof
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                BSA Section 63 Electronic Evidence Audit Checklist
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023 (replacing Section 65B of the Indian Evidence Act), electronic records are admissible provided they are supported by a verified electronic evidence certificate. Assemble this seven-point dossier before initiating formal legal notice or MSEFC proceedings:
              </p>

              <div className="space-y-3 mb-6">
                {[
                  {
                    num: "1",
                    title: "Executed Terms of Business (TOB) / Email Engagement Confirmation",
                    desc: "Signed master agreement, fee proposal, or formal email exchange confirming percentage fee and payment terms.",
                  },
                  {
                    num: "2",
                    title: "Candidate Introduction Timestamp & CV Delivery Headers",
                    desc: "Original email transmitting the candidate resume to corporate HR, establishing priority and proof of introduction.",
                  },
                  {
                    num: "3",
                    title: "Interview Scheduling & Candidate Offer Letter",
                    desc: "Client-issued interview invitations, feedback emails, and formal written offer letter with compensation breakdown.",
                  },
                  {
                    num: "4",
                    title: "Candidate Joining Confirmation & Client Onboarding Email",
                    desc: "Written confirmation from HR acknowledging the candidate joined, along with official corporate email/ID allocation.",
                  },
                  {
                    num: "5",
                    title: "Tax Invoice Delivery & Accounts Payable Read Receipts",
                    desc: "GST-compliant commercial invoice dispatched on Day 1 with email delivery confirmation and ERP submission screenshots.",
                  },
                  {
                    num: "6",
                    title: "Post-Joining HR Correspondence & Silence / Acceptance Audit",
                    desc: "Email exchanges where HR requested services without raising disputes regarding candidate qualifications or performance within 15 days.",
                  },
                  {
                    num: "7",
                    title: "BSA 2023 Section 63 Statutory Electronic Certificate",
                    desc: "Affidavit certifying system integrity, uninterrupted server logs, and authenticity of digital message printouts.",
                  },
                ].map((item) => (
                  <div key={item.num} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-extrabold flex items-center justify-center text-xs shrink-0 mt-0.5">
                      {item.num}
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">{item.title}</p>
                      <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                For facility management, housekeeping, and security manpower agencies facing similar client excuses, see our guide on{" "}
                <Link
                  href="/security-guard-housekeeping-facility-management-unpaid-bill-recovery"
                  className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                >
                  Security Guard &amp; Facility Management Unpaid Bill Recovery
                </Link>
                .
              </p>
            </section>

            {/* Section 11: Institutional B2B Conversion Funnel */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-transparent"
            >
              <ReplacementClauseRecoveryCTA />
            </section>

            {/* Section 12: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  12
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                  Judicial &amp; Operational Clarity &bull; FAQ
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-6">
                Frequently Asked Questions for Recruitment Founders
              </h2>

              <div className="space-y-4">
                {FAQ_ITEMS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 transition-colors open:bg-white open:border-slate-300"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-bold text-sm sm:text-base text-slate-900 group-open:text-[#DC2626]">
                      <span>{faq.question}</span>
                      <span className="ml-2 text-slate-400 group-open:rotate-180 transition-transform shrink-0">
                        &#x25BE;
                      </span>
                    </summary>
                    <div className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal pt-2 border-t border-slate-200/60">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 13: Statutory Precedents & Legal Authorities */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-slate-900 text-white rounded-2xl p-5 sm:p-6 md:p-8 border border-slate-800 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                  13
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-red-400">
                  Legal Authorities &bull; Statutory Citations
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight mb-4">
                Statutory Precedents &amp; Legal Authorities
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                The legal frameworks, statutory mechanisms, and judicial holdings outlined in this operational guide are anchored in verified Indian statutes and commercial jurisprudence:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono mb-6">
                <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700">
                  <span className="text-red-400 font-bold block mb-1">
                    The Indian Contract Act, 1872
                  </span>
                  <p className="text-slate-300">
                    Sections 51–54 (Performance of Reciprocal Promises &amp; Conditions Precedent); Section 53 (Liability of party preventing performance); Sections 73–74 (Breach and Liquidated Remedies).
                  </p>
                </div>
                <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700">
                  <span className="text-red-400 font-bold block mb-1">
                    MSMED Act, 2006 (Act 27 of 2006)
                  </span>
                  <p className="text-slate-300">
                    Section 15 (45-day payment ceiling for services); Section 16 (Compound interest at 3x RBI Bank Rate); Section 18 (MSEFC conciliation &amp; arbitration); Section 19 (75% mandatory pre-deposit).
                  </p>
                </div>
                <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700">
                  <span className="text-red-400 font-bold block mb-1">
                    The Income Tax Act, 1961
                  </span>
                  <p className="text-slate-300">
                    Section 43B(h) (Disallowance of trade debts payable to Micro &amp; Small Enterprises beyond 45 days, applicable to enterprise recruitment spend).
                  </p>
                </div>
                <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700">
                  <span className="text-red-400 font-bold block mb-1">
                    Bharatiya Sakshya Adhiniyam, 2023 (BSA 2023)
                  </span>
                  <p className="text-slate-300">
                    Section 63 (Admissibility of electronic records, email headers, ATS audit trails, and digital contracts with statutory certificate).
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-800/90 rounded-xl border border-slate-700 text-xs text-slate-300 leading-relaxed font-sans">
                <span className="font-bold text-white block mb-1">Institutional Review &amp; Compliance Notice:</span>
                This guide is published for corporate credit managers, recruitment consultancy owners, and search partners. Reviewed by {LEGAL_REVIEWER.name} ({LEGAL_REVIEWER.role}). All external statutory portal and legal links adhere strictly to official government portals (
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-red-400 underline"
                >
                  IndiaCode
                </a>
                ,{" "}
                <a
                  href="https://samadhaan.msme.gov.in"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-red-400 underline"
                >
                  MSME Samadhaan
                </a>
                ).
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links Component */}
      <RelatedRecoveryGuides />
    </div>
  );
}
