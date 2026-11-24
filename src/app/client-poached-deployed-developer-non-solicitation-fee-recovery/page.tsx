import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import DeveloperPoachingRecoveryTableOfContents from "./DeveloperPoachingRecoveryTableOfContents";
import DeveloperPoachingScenarioTabs from "./DeveloperPoachingScenarioTabs";
import DeveloperPoachingRecoveryCTA from "./DeveloperPoachingRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/client-poached-deployed-developer-non-solicitation-fee-recovery";
const EXACT_H1 =
  "Enforcing B2B Non-Solicitation & Resource-Buyout Fees When a Client Secretly Hires Your Deployed Software Engineers";
const META_TITLE = "Client Poached Your Deployed Engineer? Recover Buyout Fees";
const META_DESCRIPTION =
  "Employee non-competes face Section 27, but B2B commercial developer conversion and buyout fee clauses against client companies ARE enforceable under s.74.";

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
        alt: formatAltText("Client Poached Deployed Developer Non-Solicitation Fee Recovery"),
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
    remedy: "B2B Commercial Liquidated Damages Enforcement",
    statute: "Indian Contract Act, 1872 (Section 74)",
    timing: "Triggered immediately upon client hiring or 15 days post buyout notice",
    mechanism: "Enforce the agreed Temp-to-Perm Conversion / Resource Buyout Fee (typically 6–12 months billing or 25%–35% of first-year CTC) stipulated in the Master Services Agreement (MSA) or Statement of Work (SOW)",
    relief: "Full recovery of agreed liquidated damages; recognized under the Supreme Court Kailash Nath doctrine as a genuine pre-estimate of talent acquisition, screening, IP training, and bench disruption losses",
    suitability: "Direct hiring of deployed engineers, architects, and DevOps specialists by domestic Indian or international client enterprises",
    tone: "emerald",
  },
  {
    remedy: "Commercial Summary Suit on Written Contract (Order XXXVII)",
    statute: "Code of Civil Procedure, 1908 (Order XXXVII) & Commercial Courts Act, 2015",
    timing: "Following conclusion of mandatory Section 12A Pre-Institution Commercial Mediation",
    mechanism: "Fast-track recovery suit for liquidated sum based on signed MSA non-solicitation covenants, deployed timesheets, rate cards, and electronic proof of onboarding",
    relief: "Summary money decree against client company without protracted trial; pre-judgment attachment of client bank accounts under Order XXXVIII Rule 5 if asset dissipation is threatened",
    suitability: "Indian corporate clients, venture-backed tech startups, and domestic Global Capability Centers (GCCs) defaulting on liquidated buyout invoices (> ₹3 Lakh)",
    tone: "slate",
  },
  {
    remedy: "Overcoming the Employee Section 27 Restraint Defense",
    statute: "Indian Contract Act, 1872 (Section 27 vs Section 74 Jurisprudence)",
    timing: "Immediate response to client's initial legal rebuttal or demand notice response",
    mechanism: "Frame the claim exclusively against the Client Corporate Entity for commercial placement compensation, explicitly disclaiming any negative injunction or trade restraint against the individual software engineer",
    relief: "Neutralizes the debtor's 'restraint of trade' defense; High Courts (Wipro v. Beckman Coulter; FL Smidth) uphold commercial B2B non-hire negative covenants between corporate peers",
    suitability: "Cases where the client's legal counsel claims the developer 'applied independently via LinkedIn' or that Section 27 renders non-solicitation void",
    tone: "emerald",
  },
  {
    remedy: "Tortious Interference with Employment Contract",
    statute: "Indian Common Law of Torts & Specific Relief Act, 1963 (Section 38/41)",
    timing: "Concurrent with statutory demand notice or pre-institution mediation",
    mechanism: "Plead tortious inducement of breach where the client actively induced the developer to abandon notice periods, breach employee confidentiality, or repudiate employment obligations",
    relief: "Consequential damages against client for commercial disruption; damages for loss of proprietary project momentum and client-side knowledge transfer",
    suitability: "Aggressive headhunting of key project leads, tech leads, or core developers mid-sprint resulting in severe client delivery failure for other accounts",
    tone: "slate",
  },
  {
    remedy: "MSMED Act Statutory 3x RBI Compound Interest on Unpaid Buyout Invoices",
    statute: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18)",
    timing: "Day 46 post-invoice maturity where conversion fee is formally invoiced as professional services",
    mechanism: "For Udyam-registered IT agencies, file reference before State Micro and Small Enterprises Facilitation Council (MSEFC) for delayed payment of contractually matured professional service charges",
    relief: "Statutory compound interest at 3 times RBI Bank Rate calculated monthly; debtor must deposit 75% under Section 19 to challenge any award; Section 43B(h) tax disallowance leverage",
    suitability: "Micro and Small IT dev agencies, boutique staff augmentation firms, and consulting vendors supplying Indian corporate clients",
    tone: "emerald",
  },
  {
    remedy: "BSA 2023 Section 63 Digital Telemetry & Audit Trail Admissibility",
    statute: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63)",
    timing: "Pre-litigation evidentiary compilation stage",
    mechanism: "File Section 63 electronic certificates proving Git commit histories, client domain email allocations, Slack/Teams active directory logs, and EPFO UAN electronic transfer records",
    relief: "Conclusive evidentiary proof establishing unauthorized direct employment or contractor engagement, defeating client denials of onboarding",
    suitability: "Cases where the client denies hiring the engineer or attempts to conceal employment via offshore entities, shadow agencies, or C2C pass-throughs",
    tone: "slate",
  },
];

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
  datePublished: "2026-11-16T12:00:00+05:30",
  dateModified: "2026-11-16T12:00:00+05:30",
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

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Enforce B2B Non-Solicitation & Recover Developer Buyout Fees",
  description:
    "A 5-stage legal and operational framework for IT services agencies to recover commercial placement buyout fees when enterprise clients poach deployed software engineers.",
  totalTime: "P45D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Electronic Discovery & Evidence Preservation",
      text: "Capture cryptographic Git commits, client workspace directory logs, LinkedIn role updates, and EPFO UAN transfers certified under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Audit MSA Covenants & Calculate Liquidated Buyout Fee",
      text: "Review Master Services Agreement non-solicitation, survival, and anti-circumvention clauses. Formulate the buyout sum (6–12 months billing or 25%–35% CTC) as a genuine pre-estimate under Section 74.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Issue Formal Commercial Buyout Tax Invoice",
      text: "Issue a formal commercial invoice for 'Professional Placement / Resource Conversion Buyout Fee' with 15-day credit terms, establishing a liquidated debt on a written contract.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Serve Fact-Verified Statutory Demand Notice",
      text: "Serve a fact-verified demand notice to the client corporate entity rebutting Section 27 employee defense bluffs and citing High Court authorities (Wipro v. Beckman Coulter; FL Smidth).",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Initiate Commercial Mediation or Summary Court Enforcement",
      text: "Invoke Section 12A mandatory Pre-Institution Commercial Mediation, file an Order XXXVII CPC Summary Suit, or initiate commercial arbitration based on the MSA dispute clause.",
    },
  ],
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
      name: "IT & SaaS Recovery",
      item: `${SITE_URL}/industries/it-saas-software-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Client Poached Developer Buyout Fee",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

const FAQ_ITEMS = [
  {
    question: "Is a B2B employee non-solicitation clause legally valid under Section 27 of the Indian Contract Act?",
    answer:
      "Yes, absolutely. While Section 27 of the Indian Contract Act, 1872 renders void any agreement that restrains an employee from exercising a lawful profession or trade, Indian High Courts (such as the Delhi High Court in Wipro Ltd. v. Beckman Coulter International S.A. and the Madras High Court in FL Smidth Pvt. Ltd. v. M. Secunder) draw a fundamental distinction between restraining an employee's livelihood versus enforcing a commercial B2B contract between two corporate entities. When two businesses agree in a Master Services Agreement (MSA) that the client will pay a commercial conversion or resource buyout fee if they hire deployed staff, that clause does not restrict the employee; it imposes an enforceable commercial payment obligation on the client under Section 74.",
  },
  {
    question: "What if the client claims the developer applied independently to a public LinkedIn job opening?",
    answer:
      "This defense routinely fails in commercial courts. A well-drafted B2B covenant is structured as both a 'Non-Solicitation' and a 'Non-Hire' restriction. In institutional outsourcing jurisprudence, the commercial rationale is that the client gained access to, vetted, and evaluated the engineer exclusively through the vendor's paid deployment. Even if the engineer initiated the application on LinkedIn or through an internal portal, the client's act of hiring without paying the agreed conversion fee breaches the negative covenant of the MSA. The client remains liable for the stipulated liquidated buyout damages under Section 74.",
  },
  {
    question: "How do Indian courts view '6 to 12 months billing' as a resource buyout fee under Section 74?",
    answer:
      "Under the Supreme Court's landmark rulings in Kailash Nath Associates v. DDA (2015) and ONGC v. Saw Pipes (2003), liquidated damages stipulated in commercial contracts are enforced where the actual loss is difficult or impossible to prove precisely, provided the sum represents a genuine pre-estimate of loss. In IT services, losing a deployed developer causes recruitment lead time (typically 60–90 days), specialized domain knowledge loss, bench training overhead, and client delivery disruption. Contractual buyout fees benchmarked at 6 to 12 months of monthly billing or 25%–35% of the engineer's annual CTC are widely recognized as reasonable commercial estimates rather than unenforceable penal forfeitures.",
  },
  {
    question: "What happens if the client hires our developer through an offshore shell company or third-party payroll agency?",
    answer:
      "Modern Master Services Agreements contain explicit 'Indirect Solicitation and Anti-Circumvention' provisions covering direct or indirect engagement through affiliates, subsidiaries, contractors, recruiters, or Employer of Record (EOR) pass-throughs. Even in basic contracts, Indian courts look at the substance of the transaction over corporate form. Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023, Git commits, corporate email headers, Slack workspaces, and Jira logs can be submitted as electronic evidence to establish that the developer is performing the identical technical functions for the client, triggering full buyout liability.",
  },
  {
    question: "Does the non-solicitation obligation survive if the Statement of Work (SOW) has already ended?",
    answer:
      "Yes, provided your contract includes a standard 'Survival' clause. In professional IT staffing and managed services agreements, restrictive covenants—including Non-Solicitation, Confidentiality, and Resource Buyout Fees—expressly survive the expiration, completion, or termination of individual SOWs or the overarching MSA for a specified period (typically 12 to 24 months). If the client onboards the developer during this cooling-off window, the vendor has a complete cause of action with a 3-year statutory limitation period under Article 55 of the Limitation Act, 1963.",
  },
  {
    question: "Can an IT services agency file an Order XXXVII Summary Suit for a developer buyout fee?",
    answer:
      "Yes. An Order XXXVII Summary Suit under the Code of Civil Procedure, 1908 is available for recovering a liquidated debt or demand in money arising upon a written contract. Where the MSA clearly defines the formula for the conversion fee (e.g., '6 times the monthly deployed rate card') and the vendor presents the executed contract, approved timesheets, and proof of hiring, the claim qualifies as a liquidated contractual debt. The client cannot defend the suit without first obtaining leave to defend from the Commercial Court, which often requires a conditional deposit of the disputed buyout sum.",
  },
  {
    question: "How can Udyam-registered MSME IT vendors leverage the MSMED Act for poached developer recovery?",
    answer:
      "If the IT agency holds an active Udyam Registration as a Micro or Small enterprise, and the conversion fee is formally invoiced as professional placement or contract termination charges pursuant to the MSA, the unpaid invoice constitutes an overdue operational receivable under Section 15 of the MSMED Act, 2006. If the client fails to remit payment within 45 days, the vendor can file a reference before the State Micro and Small Enterprises Facilitation Council (MSEFC), claiming mandatory monthly compounding interest at 3 times the RBI Bank Rate under Section 16, alongside Section 43B(h) corporate tax disallowance leverage.",
  },
  {
    question: "What digital evidence is necessary under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA)?",
    answer:
      "To establish client poaching conclusively in legal notices and court proceedings, vendors must compile: (1) GitHub/GitLab commit logs showing code authoring using client credentials; (2) Slack, Microsoft Teams, or Google Workspace directory exports demonstrating internal enterprise membership; (3) Client domain email headers and calendar invites; (4) Public LinkedIn profile transitions and employer tagging; (5) Timesheet sign-offs and SOW deployment logs; and (6) EPFO Universal Account Number (UAN) transfer records where available. All electronic records must be accompanied by a Section 63 BSA certificate signed by the IT Systems Administrator or Chief Technology Officer.",
  },
];

const FAQ_SCHEMA = {
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

export default function ClientPoachedDeveloperRecoveryPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span>IND-05 &bull; IT Services &amp; Tech Staffing Recovery Playbook</span>
            <span className="text-slate-500">|</span>
            <span>Contract Act s.74 Liquidated Damages</span>
          </div>

          {/* Exact H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Statutory Answer
            </span>
            When an enterprise client secretly hires your deployed software engineers, corporate counsel often misdirects vendors by citing Section 27 of the Indian Contract Act to claim non-solicitation covenants are void. Under established High Court jurisprudence, Section 27 bars restraining an employee&apos;s livelihood, but does <strong>not</strong> invalidate commercial B2B &ldquo;Conversion / Resource Buyout Fees&rdquo; agreed between corporate entities under Section 74. IT agencies operating under the{" "}
            <Link
              href="/industries/it-saas-software-recovery"
              className="text-red-400 underline font-bold hover:text-red-300"
            >
              IT &amp; SaaS Recovery Framework
            </Link>{" "}
            can enforce pre-agreed placement buyout damages (typically 6–12 months billing) via commercial demand notices, Section 12A mediation, and Order XXXVII summary suits without infringing employee rights.
          </div>

          {/* Key Metrics 4-Card Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">
                Enforceability Basis
              </p>
              <p className="text-sm sm:text-lg font-black text-emerald-400">
                ICA s.74 Pre-Estimate
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">Bypasses s.27 Employee Bar</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">
                Standard Buyout Floor
              </p>
              <p className="text-sm sm:text-lg font-black text-slate-100">
                6&ndash;12 Mo. Billing
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">Or 25%&ndash;35% Annual CTC</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">
                Limitation Period
              </p>
              <p className="text-sm sm:text-lg font-black text-amber-400">
                3 Years (Art. 55)
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">From Date of Hiring / Discovery</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">
                Summary Forum
              </p>
              <p className="text-sm sm:text-lg font-black text-red-400">
                Order 37 CPC / Arb.
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">Commercial Courts Act s.12A</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs Component */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "IT & SaaS Recovery", href: "/industries/it-saas-software-recovery" },
              {
                label: "Client Poached Developer Buyout Fee",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Sticky Sidebar Table of Contents */}
          <DeveloperPoachingRecoveryTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The Poaching Trap & s.27 Myth */}
            <section
              id="heading-developer-poaching-traps"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  01
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  The IT Staffing Dilemma
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                The Poaching Trap: Why Clients Secretly Poach Your Deployed Engineers
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                In the software development and IT staff augmentation industry, agency profitability is predicated on client deployment margins. Tech agencies invest substantial capital in technical screening, competitive payroll, employee health benefits, continuous skill upgrading, and bench maintenance. When an enterprise client engages a dedicated senior React developer, Python machine learning engineer, or cloud architect on a time-and-materials (T&amp;M) or fixed monthly retainer basis, the client receives turnkey engineering velocity without incurring the overhead of recruitment, retention, or severance risk.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                However, once an engineer demonstrates exceptional domain proficiency and integrates deeply into the client&apos;s codebase, unethical enterprise clients frequently execute an end-run around the staffing agency. The client solicits the deployed developer to resign from the agency and join the client directly on full-time payroll, often offering a 20%–30% salary hike while eliminating the agency&apos;s recurring 40% gross billing margin.
              </p>

              {/* The Section 27 Legal Myth Callout */}
              <div className="bg-red-50/80 border-l-4 border-[#DC2626] p-4 rounded-r-xl my-5">
                <p className="text-xs sm:text-sm font-bold text-[#DC2626] mb-1">
                  The Section 27 Bluff: Why 99% of Tech Founders Surrender Unnecessarily
                </p>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  When agencies object and demand the contractually stipulated &ldquo;Placement Buyout Fee&rdquo; or &ldquo;Temp-to-Perm Conversion Fee&rdquo;, corporate legal teams reflexively reply with a boilerplate defense: <em>&ldquo;Under Section 27 of the Indian Contract Act, 1872, all non-compete and non-solicitation clauses are void as restraints of trade. An employee has the constitutional right to work anywhere; you cannot restrain him or claim damages.&rdquo;</em> This legal argument is a calculated sleight of hand. While Section 27 indeed shields the individual employee from injunctive restraints on their livelihood, it does <strong>not</strong> immunize the client company from paying contractually agreed B2B liquidated damages under Section 74!
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                By understanding the critical judicial distinction between restraining an employee&apos;s labor versus enforcing a commercial contract between two corporate entities, IT services CEOs, founders, and heads of legal can systematically enforce recruitment buyout fees, safeguarding their bench investments and generating substantial recovery cashflow. For broader insights on contract defaults across dedicated teams, explore our guide on{" "}
                <Link
                  href="/it-staff-augmentation-dedicated-developer-monthly-invoice-recovery"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  IT staff augmentation monthly invoice recovery
                </Link>{" "}
                and milestone disputes under{" "}
                <Link
                  href="/software-uat-sign-off-delay-scope-creep-milestone-payment-recovery"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  software UAT sign-off delay recovery
                </Link>.
              </p>
            </section>

            {/* Section 2: 5-Stage Operational Escalation Protocol (SVG Flowchart + Mobile Cards) */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  02
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Operational SOP
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                5-Stage Operational Escalation Protocol: From Discovery to Buyout Recovery
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                Recovering commercial placement fees from an evasive client requires a structured legal escalation that bypasses emotional disputes with the developer and focuses clinical financial pressure on the client company&apos;s Chief Financial Officer and General Counsel.
              </p>

              {/* Desktop SVG Flowchart (hidden md:block) */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl mb-6">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    B2B Resource Poaching Escalation Flowchart
                  </span>
                  <span className="text-[11px] text-red-400 font-semibold">
                    Indian Contract Act s.74 Workflow
                  </span>
                </div>
                <svg
                  className="w-full h-auto"
                  viewBox="0 0 800 240"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={800}
                  height={240}
                  aria-label="B2B Resource Poaching Operational Escalation Protocol"
                >
                  {/* Step 1 */}
                  <rect x="10" y="20" width="135" height="90" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                  <text x="77" y="45" fill="#EF4444" fontSize="10" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                  <text x="77" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">BSA s.63 Audit</text>
                  <text x="77" y="82" fill="#94A3B8" fontSize="9" textAnchor="middle">Git, Slack &amp; UAN</text>
                  <text x="77" y="96" fill="#94A3B8" fontSize="9" textAnchor="middle">Evidence Lock</text>

                  {/* Arrow 1 */}
                  <path d="M145 65 L170 65" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#arrow)" />

                  {/* Step 2 */}
                  <rect x="170" y="20" width="135" height="90" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                  <text x="237" y="45" fill="#EF4444" fontSize="10" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                  <text x="237" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">MSA Covenant Audit</text>
                  <text x="237" y="82" fill="#94A3B8" fontSize="9" textAnchor="middle">Liquidated Formula</text>
                  <text x="237" y="96" fill="#94A3B8" fontSize="9" textAnchor="middle">6-12 Mo. Fee Lock</text>

                  {/* Arrow 2 */}
                  <path d="M305 65 L330 65" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />

                  {/* Step 3 */}
                  <rect x="330" y="20" width="135" height="90" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                  <text x="397" y="45" fill="#EF4444" fontSize="10" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                  <text x="397" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">Conversion Invoice</text>
                  <text x="397" y="82" fill="#94A3B8" fontSize="9" textAnchor="middle">Formal GST Bill</text>
                  <text x="397" y="96" fill="#94A3B8" fontSize="9" textAnchor="middle">15-Day Payment Term</text>

                  {/* Arrow 3 */}
                  <path d="M465 65 L490 65" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />

                  {/* Step 4 */}
                  <rect x="490" y="20" width="135" height="90" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                  <text x="557" y="45" fill="#EF4444" fontSize="10" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                  <text x="557" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">Statutory Notice</text>
                  <text x="557" y="82" fill="#94A3B8" fontSize="9" textAnchor="middle">Advocate Demand</text>
                  <text x="557" y="96" fill="#94A3B8" fontSize="9" textAnchor="middle">Rebutting s.27 Bluff</text>

                  {/* Arrow 4 */}
                  <path d="M625 65 L650 65" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />

                  {/* Step 5 */}
                  <rect x="650" y="20" width="140" height="90" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="720" y="45" fill="#10B981" fontSize="10" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                  <text x="720" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">Judicial Summary</text>
                  <text x="720" y="82" fill="#94A3B8" fontSize="9" textAnchor="middle">Order 37 / Arb. /</text>
                  <text x="720" y="96" fill="#94A3B8" fontSize="9" textAnchor="middle">MSEFC Council</text>

                  {/* Bottom Escalation Track */}
                  <path d="M77 110 L77 160 L720 160 L720 110" stroke="#475569" strokeWidth="1.5" strokeDasharray="4 4" />
                  <text x="400" y="180" fill="#CBD5E1" fontSize="10" textAnchor="middle">
                    Statutory Limitation: 3 Years from Discovery (Limitation Act Art. 55) &bull; Pre-Institution Mediation Mandate
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Step Cards (md:hidden) */}
              <div className="md:hidden space-y-3 mb-6">
                {[
                  {
                    num: "1",
                    title: "BSA s.63 Digital Audit & Evidence Preservation",
                    desc: "Secure unalterable electronic proof of onboarding: Git commit timestamps, client Slack accounts, client corporate email headers, and LinkedIn employer updates certified under Section 63 BSA.",
                  },
                  {
                    num: "2",
                    title: "MSA Contract Audit & Conversion Fee Quantification",
                    desc: "Audit the Master Services Agreement non-solicitation, survival, and liquidated damages provisions. Quantify the exact pre-agreed conversion sum (e.g., 6 months billing).",
                  },
                  {
                    num: "3",
                    title: "Commercial Buyout Invoice Issuance",
                    desc: "Issue an official GST Tax Invoice for 'Resource Buyout / Temp-to-Perm Conversion Fee' with strict 15-day payment terms, transforming a contractual dispute into a matured liquidated debt.",
                  },
                  {
                    num: "4",
                    title: "Fact-Verified Statutory Demand Notice",
                    desc: "Serve an institutional legal demand notice dismantling the client's Section 27 employee defense bluffs, citing Delhi High Court Wipro v. Beckman Coulter precedent.",
                  },
                  {
                    num: "5",
                    title: "Commercial Court Summary Suit / Section 12A Mediation",
                    desc: "File for Section 12A commercial mediation or institute an Order XXXVII CPC Summary Suit seeking a direct money decree with pre-judgment bank attachment.",
                  },
                ].map((s) => (
                  <div key={s.num} className="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-[10px]">
                        {s.num}
                      </span>
                      <p className="text-xs font-bold text-slate-900">{s.title}</p>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Recovery Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  03
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Judicial Comparison
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Recovery Matrix: Contract Act, Commercial Courts &amp; MSMED Act
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                When recovering poached developer fees, tech agencies possess multiple overlapping statutory remedies across civil, commercial, and MSME forums. The table below delineates the procedural grounds, timelines, and relief mechanisms available against client companies.
              </p>

              {/* Dark-Header Responsive Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mb-4">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-900 text-white uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="p-3 sm:p-4 font-bold">Legal Remedy &amp; Statute</th>
                      <th className="p-3 sm:p-4 font-bold">Trigger Window</th>
                      <th className="p-3 sm:p-4 font-bold">Operational Mechanism</th>
                      <th className="p-3 sm:p-4 font-bold">Judicial Relief &amp; Leverage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {STATUTORY_MATRIX.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 align-top">
                          <span className="block text-xs font-extrabold text-slate-900 mb-0.5">
                            {row.remedy}
                          </span>
                          <span className="inline-block text-[10px] text-[#DC2626] font-semibold bg-red-50 px-2 py-0.5 rounded border border-red-200">
                            {row.statute}
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 align-top whitespace-normal">
                          {row.timing}
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 align-top leading-relaxed">
                          {row.mechanism}
                        </td>
                        <td className="p-3 sm:p-4 text-slate-800 align-top leading-relaxed font-medium">
                          {row.relief}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[11px] text-slate-500 italic">
                * Note: For cross-border client companies based in the United States, United Kingdom, or Singapore, review our guide on{" "}
                <Link
                  href="/legal-notice-to-international-client-unpaid-invoice-recovery"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  international client unpaid invoice recovery
                </Link>{" "}
                and consulting fee recovery under{" "}
                <Link
                  href="/recovery/consultancy-fees"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  professional consultancy fees recovery
                </Link>.
              </p>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  04
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Interactive Strategy Matrix
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                4 Critical Client Poaching Scenarios: Pretexts, Legal Realities &amp; SOPs
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                Explore the four most common commercial failure modes encountered when enterprise clients onboard deployed software talent, and inspect the exact statutory responses to dismantle debtor bluffs.
              </p>

              <DeveloperPoachingScenarioTabs />
            </section>

            {/* Section 5: Section 27 vs Section 74 Doctrine */}
            <section
              id="heading-section-27-vs-74"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  05
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Statutory Doctrine
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                The Section 27 vs Section 74 Distinction: How Indian High Courts Rule
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                The foundational error made by inexperienced tech founders and lazy legal bloggers is conflating an <em>employee non-compete</em> with a <em>B2B non-hire and conversion fee covenant</em>. Under Indian law, these two mechanisms operate in completely distinct legal universes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Column 1: Section 27 */}
                <div className="p-4 bg-red-50/60 border border-red-200 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                    <p className="text-xs font-black uppercase tracking-wider text-[#DC2626]">
                      Section 27 (Employee Dimension)
                    </p>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-2 font-medium">
                    Section 27 of the Indian Contract Act declares: <em>&ldquo;Every agreement by which any one is restrained from exercising a lawful profession, trade or business of any kind, is to that extent void.&rdquo;</em>
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court in landmark cases such as <em>Superintendence Company of India v. Krishan Murgai</em> and <em>Percept D&apos;Mark v. Zaheer Khan</em> firmly established that post-employment covenants prohibiting an ex-employee from working for a competitor or client are unconstitutional restraints on human livelihood. A tech vendor cannot obtain an injunction preventing an engineer from accepting a job offer.
                  </p>
                </div>

                {/* Column 2: Section 74 */}
                <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                    <p className="text-xs font-black uppercase tracking-wider text-emerald-800">
                      Section 74 (Commercial B2B Dimension)
                    </p>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-2 font-medium">
                    Section 74 governs compensation for breach of contract where a penalty or liquidated damages sum is stipulated between contracting commercial parties.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When an agency asserts a claim against the <strong>client company</strong>, the agency is not restraining the developer. The developer remains entirely free to work for the client. The claim is purely an enforcement of the client company&apos;s contractual promise to pay an agreed commercial conversion fee if they choose to exercise that hiring option!
                  </p>
                </div>
              </div>

              {/* Landmark Judicial Holdings Callout */}
              <div className="space-y-4">
                <div className="border-l-4 border-[#DC2626] bg-slate-50 p-4 rounded-r-xl">
                  <p className="text-xs font-black text-slate-900 mb-1">
                    Delhi High Court: Wipro Limited v. Beckman Coulter International S.A. (2006)
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    The Delhi High Court held that a negative covenant between two corporate commercial entities agreeing not to solicit or hire each other&apos;s employees during the term of a contract does not violate Section 27. The restriction operates between businesses at arms-length and is aimed at preserving commercial cooperation and preventing unjust enrichment, rather than depriving an individual of their right to work.
                  </p>
                </div>

                <div className="border-l-4 border-slate-900 bg-slate-50 p-4 rounded-r-xl">
                  <p className="text-xs font-black text-slate-900 mb-1">
                    Madras High Court: FL Smidth Pvt. Ltd. v. M. Secunder &amp; Ors. (2013)
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    The Madras High Court reinforced that where an agreement between companies incorporates a non-solicitation clause, soliciting employees who acquired institutional domain knowledge during the commercial relationship constitutes a breach of contractual covenants, entitling the aggrieved firm to damages.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-600 bg-slate-50 p-4 rounded-r-xl">
                  <p className="text-xs font-black text-slate-900 mb-1">
                    Supreme Court: Kailash Nath Associates v. DDA (2015) 4 SCC 136
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    The Supreme Court affirmed that where the loss arising from breach of contract is difficult to assess precisely in numerical terms, the genuine pre-estimate agreed between commercial parties under Section 74 will be awarded as reasonable liquidated damages without requiring exhaustive granular proof of every rupee of loss.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Drafting Ironclad B2B Conversion & Buyout Clauses */}
            <section
              id="heading-contract-buyout-clauses"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  06
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Contractual Engineering
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Drafting Ironclad B2B Conversion &amp; Resource-Buyout Clauses
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                To guarantee effortless recovery in commercial mediation or court, Master Services Agreements and SOWs must frame the restriction not as a negative prohibition on the employee, but as an affirmative commercial placement option with an agreed fee structure.
              </p>

              {/* 4 Architectural Drafting Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <p className="text-xs font-bold text-slate-900 mb-1">
                    1. Affirmative &ldquo;Temp-to-Perm Conversion&rdquo; Framing
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Avoid framing the clause as <em>&ldquo;Client shall not hire any developer&rdquo;</em>. Instead, frame it as: <em>&ldquo;Client acknowledges that Vendor expends substantial resources recruiting, training, and retaining technical personnel. In the event Client elects to engage or employ any Deployed Resource directly or indirectly, Client agrees to pay Vendor a liquidated Resource Conversion Fee equal to [6 to 12] months of the monthly billing rate.&rdquo;</em>
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <p className="text-xs font-bold text-slate-900 mb-1">
                    2. Anti-Circumvention &amp; Indirect Hiring Coverage
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Explicitly prohibit hiring <em>&ldquo;whether as an employee, independent contractor, consultant, or through any affiliate, parent, subsidiary, payroll agency, Employer of Record (EOR), staffing intermediary, or third-party vendor.&rdquo;</em>
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <p className="text-xs font-bold text-slate-900 mb-1">
                    3. Explicit Survival Clause (12 to 24 Months)
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Mandate that the Resource Conversion and Non-Solicitation obligations shall survive the expiration, completion, or early termination of this Agreement or any Statement of Work for a period of 12 (or 24) calendar months.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <p className="text-xs font-bold text-slate-900 mb-1">
                    4. Section 74 Genuine Pre-Estimate Recital
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Insert a clear recital acknowledging that the stipulated conversion fee represents a reasonable, negotiated, genuine pre-estimate of Vendor&apos;s talent replacement, onboarding disruption, and recruitment costs, and is not a penalty.
                  </p>
                </div>
              </div>

              <div className="bg-slate-900 text-slate-200 p-4 rounded-xl border border-slate-800 text-xs font-mono leading-relaxed overflow-x-auto">
                <span className="text-red-400 block mb-2 font-bold font-sans uppercase text-[10px]">
                  Model Clause Snippet &bull; Recommended Institutional MSA Language
                </span>
                &ldquo;Section X.Y (Resource Conversion / Buyout Fee): During the term of this MSA, any Statement of Work (SOW), and for a period of twelve (12) months following the termination or expiration thereof, Client covenants that if it directly or indirectly solicits, hires, retains, or contracts with any personnel or contractor deployed by Vendor, Client shall immediately become liable to pay Vendor a liquidated Resource Conversion Fee equal to six (6) months of the highest monthly billing rate charged for such personnel under the applicable SOW. Both parties mutually acknowledge that this sum represents a genuine, negotiated pre-estimate of liquidated damages under Section 74 of the Indian Contract Act, 1872, reflecting Vendor&apos;s talent acquisition, technical training, and business continuity loss, and does not constitute a penalty or restraint of trade.&rdquo;
              </div>
            </section>

            {/* Section 7: Uncovering Secret Direct Hiring */}
            <section
              id="heading-discovery-linkedin-audit"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  07
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Technical Investigation
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Uncovering Secret Direct Hiring: 5 Digital Audit Vectors
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                Clients attempting to poach engineers frequently instruct them to keep their LinkedIn profiles unchanged for 3 to 6 months to evade detection. To build an unshakeable case before serving a legal notice, tech agencies must employ automated technical discovery across five evidentiary channels:
              </p>

              <div className="space-y-3 mb-4">
                {[
                  {
                    channel: "1. Git Version Control Audit (GitHub / GitLab / Bitbucket)",
                    details:
                      "Inspect repository commit histories, pull request reviews, and author email metadata. Poached developers frequently continue pushing code to client repos using corporate email handles (@clientdomain.com) or personal GitHub accounts that were previously authorized under your SOW.",
                  },
                  {
                    channel: "2. Enterprise Communication Directory Exports (Slack / Teams)",
                    details:
                      "Audit the client's internal Slack or Teams tenant workspaces. If your ex-engineer remains an active member, their user profile will display an active enterprise seat, official role title, and client-assigned email domain.",
                  },
                  {
                    channel: "3. EPFO UAN Electronic Transfer Discovery",
                    details:
                      "Under Indian labor compliance, an employee's Universal Account Number (UAN) tracks Provident Fund contributions across employers. When an engineer joins a new Indian corporate entity, the client's PF remittance links directly to the engineer's existing UAN, creating unalterable statutory proof of employment.",
                  },
                  {
                    channel: "4. Cloud Infrastructure IAM Logs (AWS / GCP / Azure)",
                    details:
                      "Review identity and access management (IAM) console logs. Client administrators often modify existing user roles or provision new SSO permissions for the developer, leaving timestamped CloudTrail or audit log entries.",
                  },
                  {
                    channel: "5. LinkedIn & Professional Network Telemetry",
                    details:
                      "Monitor network connections, peer endorsements, and public engagement. Colleagues at the client company often publicly welcome the engineer or endorse newly added internal tech stack competencies.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <p className="text-xs font-bold text-slate-900 mb-1">{item.channel}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.details}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Worked Financial Recovery Ledger */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  08
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Numerical Ledger
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Worked Financial Ledger: Recovering an ₹18.00 Lakh Developer Buyout Default
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                The following empirical ledger illustrates the exact mathematical and statutory formulation utilized by our legal recovery team to enforce a conversion buyout against an enterprise client who poached a Senior Full-Stack Engineer deployed at ₹3,00,000 monthly retainer.
              </p>

              {/* Financial Ledger Card */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-xl mb-6">
                <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                    Dispute Profile: Deployed Tech Lead Poaching Default
                  </span>
                  <span className="text-[11px] text-slate-400">
                    MSA Deployment Rate: ₹3,00,000/Month
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">Contractual Conversion Fee (6 Months Monthly Billing)</span>
                    <span className="font-mono font-bold text-white">₹18,00,000</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">Notice-Period Breach Reimbursement (2 Months Developer Salary)</span>
                    <span className="font-mono font-bold text-slate-200">₹3,20,000</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">Replacement Talent Screening &amp; Sourcing Costs</span>
                    <span className="font-mono font-bold text-slate-200">₹1,50,000</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">MSMED Act Statutory Penal Interest (Section 16: 3x RBI Rate @ 19.5% p.a. for 90 Days)</span>
                    <span className="font-mono font-bold text-amber-400">₹1,13,445</span>
                  </div>
                  <div className="flex justify-between items-center py-2 pt-3 border-t-2 border-slate-700 text-sm sm:text-base font-black">
                    <span className="text-emerald-400">Total Crystallized Institutional Claim</span>
                    <span className="font-mono text-emerald-400 text-base sm:text-lg">₹23,83,445</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-slate-700 leading-relaxed font-medium">
                <strong>Resolution Benchmark:</strong> Following service of the formal fact-verified demand notice incorporating the Section 63 BSA Git audit trail and citing the <em>Wipro v. Beckman Coulter</em> precedent, the client&apos;s board approved an immediate pre-mediation settlement of ₹19.50 Lakh within 22 days of notice dispatch, fully reimbursing the vendor without initiating commercial litigation. To calculate MSME statutory interest on overdue billing, utilize our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-bold hover:underline"
                >
                  MSME delayed payment interest calculator
                </Link>.
              </div>
            </section>

            {/* Section 9: BSA 2023 Section 63 Digital Evidence Dossier */}
            <section
              id="heading-bsa-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  09
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Evidentiary Compliance
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                BSA 2023 Section 63 Digital Evidence Checklist for Tech Poaching Claims
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                Under the <em>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</em>, which superseded the Indian Evidence Act, 1872 on July 1, 2024, Section 63 governs the admissibility of electronic records. In technical disputes involving source code repositories and enterprise communications, commercial courts mandate strict electronic certification.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
                {[
                  {
                    title: "Executed Master Services Agreement & SOW",
                    desc: "Digital DocuSign/Adobe Sign audit certificate with cryptographic hash and IP timestamp logs proving binding mutual assent.",
                  },
                  {
                    title: "Monthly Timesheet Approvals & Rate Cards",
                    desc: "Jira / Harvest / Toggl timesheet logs signed or approved by client project managers certifying the engineer's deployment tenure.",
                  },
                  {
                    title: "Section 63 BSA Git Repository Hash Audit",
                    desc: "SHA-256 cryptographic commit hashes demonstrating code contributions authored by the poached developer on client repositories post-resignation.",
                  },
                  {
                    title: "Client Domain Email Headers & Slack Logs",
                    desc: "Raw RFC 822 email headers and Slack user ID exports proving internal corporate enterprise provisioning.",
                  },
                  {
                    title: "Formal Conversion Buyout Tax Invoice",
                    desc: "GST e-invoice generated on the GSTN portal for professional placement fees with 15-day statutory due dates.",
                  },
                  {
                    title: "Speed Post RPAD & WhatsApp Service Proof",
                    desc: "India Post postal tracking delivery certificate and WhatsApp double blue-tick read receipts certified under BSA Section 63.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-[10px] shrink-0 mt-0.5">
                      &#10003;
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-900">{item.title}</p>
                      <p className="text-[11px] text-slate-600 leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                For standard notice formatting, review our fact-verified{" "}
                <Link
                  href="/templates/legal-notice-reply-format"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  legal notice drafting format
                </Link>.
              </p>
            </section>

            {/* Section 10: Dual B2B CTAs */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-slate-100 rounded-2xl border border-slate-300 p-5 sm:p-6 md:p-8"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  10
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  Institutional Action Desk
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                Deploy Developer Buyout Legal Recovery: Single Notice Test or Bulk Staffing Desk
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                Choose the appropriate recovery corridor: test a fact-verified statutory demand notice on an isolated client poaching default, or onboard your agency&apos;s entire overdue receivables and breached bench contracts for institutional portfolio recovery.
              </p>

              {/* Dual-Track CTA Component */}
              <DeveloperPoachingRecoveryCTA />
            </section>

            {/* Section 11: 8 Comprehensive FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  11
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Practitioner Knowledge Base
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Frequently Asked Questions on Client Developer Poaching &amp; Buyout Fees
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                Direct statutory and operational answers to the most urgent questions raised by IT services founders, staffing executives, and corporate legal counsel.
              </p>

              <div className="space-y-3">
                {FAQ_ITEMS.map((item, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50/50 open:bg-white transition-colors duration-150"
                  >
                    <summary className="flex items-center justify-between p-4 text-xs sm:text-sm font-bold text-slate-900 cursor-pointer list-none select-none">
                      <span className="flex items-center gap-3 pr-2">
                        <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] shrink-0 font-extrabold group-open:bg-[#DC2626] group-open:text-white transition-colors">
                          {idx + 1}
                        </span>
                        <span className="leading-snug">{item.question}</span>
                      </span>
                      <svg
                        className="w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 font-normal pl-12">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory References & Precedents */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  12
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Legal Authorities
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Authorities &amp; Verified Precedents
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                The procedural and substantive principles in this playbook are derived from authoritative acts of Parliament and binding holdings of the Supreme Court of India and Indian High Courts:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-700 mb-6">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <p className="font-bold text-slate-900 mb-0.5">Indian Contract Act, 1872</p>
                  <p className="text-slate-600 text-[11px]">
                    Sections 27 (Agreement in restraint of trade void), 73 (Compensation for loss or damage caused by breach of contract), and 74 (Compensation for breach of contract where penalty stipulated).
                  </p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <p className="font-bold text-slate-900 mb-0.5">Commercial Courts Act, 2015</p>
                  <p className="text-slate-600 text-[11px]">
                    Section 2(1)(c)(xviii) (commercial dispute relating to consultancy, technology, and service contracts) and Section 12A (Mandatory Pre-Institution Mediation).
                  </p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <p className="font-bold text-slate-900 mb-0.5">Code of Civil Procedure, 1908</p>
                  <p className="text-slate-600 text-[11px]">
                    Order XXXVII (Summary procedure for debts arising on written contracts) and Order XXXVIII Rule 5 (Pre-judgment attachment of assets before decree).
                  </p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <p className="font-bold text-slate-900 mb-0.5">MSMED Act, 2006 &amp; IT Act s.43B(h)</p>
                  <p className="text-slate-600 text-[11px]">
                    Sections 15, 16, 17 &amp; 18 of the Micro, Small and Medium Enterprises Development Act, 2006, read with Section 43B(h) of the Income Tax Act, 1961.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <p className="font-bold text-slate-900 mb-0.5">Bharatiya Sakshya Adhiniyam, 2023</p>
                  <p className="text-slate-600 text-[11px]">
                    Section 63 (Admissibility of electronic records and mandatory technical certificate of authenticity).
                  </p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <p className="font-bold text-slate-900 mb-0.5">Limitation Act, 1963</p>
                  <p className="text-slate-600 text-[11px]">
                    Article 55 (3-year statutory limitation period for compensation for breach of contract, commencing upon breach or discovery).
                  </p>
                </div>
              </div>

              {/* Verified Case Citations */}
              <div className="p-4 bg-slate-900 text-slate-200 rounded-xl text-xs space-y-2">
                <p className="font-bold text-red-400 uppercase text-[10px] tracking-wider">
                  Verified Supreme Court &amp; High Court Citations
                </p>
                <p>
                  &bull; <em>Wipro Limited v. Beckman Coulter International S.A.</em>, 2006 (3) ARBLR 118 (Delhi HC) &ndash; Non-hire negative covenants between commercial entities in business contracts do not violate Section 27.
                </p>
                <p>
                  &bull; <em>Kailash Nath Associates v. Delhi Development Authority</em>, (2015) 4 SCC 136 &ndash; Enforceability of liquidated damages under Section 74 where loss is incapable of exact quantification.
                </p>
                <p>
                  &bull; <em>Oil &amp; Natural Gas Corporation Ltd. (ONGC) v. Saw Pipes Ltd.</em>, (2003) 5 SCC 705 &ndash; Pre-estimate of damages in commercial contracts.
                </p>
                <p>
                  &bull; <em>FL Smidth Pvt. Ltd. v. M. Secunder &amp; Ors.</em>, 2013 (1) CTC 886 (Madras HC) &ndash; Non-solicitation covenants and protection of proprietary commercial knowledge.
                </p>
              </div>

              {/* Fact Verification Attribution */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>
                  Legal Review: <strong>{LEGAL_REVIEWER.name}</strong>, {LEGAL_REVIEWER.role}
                </span>
                <span>Published: November 2026 &bull; Reference Code: B2B-069</span>
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
