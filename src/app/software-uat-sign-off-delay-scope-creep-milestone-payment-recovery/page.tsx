import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import SoftwareUatRecoveryTableOfContents from "./SoftwareUatRecoveryTableOfContents";
import SoftwareUatScenarioTabs from "./SoftwareUatScenarioTabs";
import SoftwareUatRecoveryCTA from "./SoftwareUatRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/software-uat-sign-off-delay-scope-creep-milestone-payment-recovery";
const EXACT_H1 =
  "Escaping the 'Infinite UAT & Scope-Creep Trap': Recovering Software & AI Development Milestones When Clients Stall Sign-Off";
const META_TITLE = "Client Stalling UAT Sign-Off to Dodge Software Payment?";
const META_DESCRIPTION =
  "Client using your app in production while refusing UAT sign-off to withhold the final 30%? Enforce Deemed Acceptance, IP lien & Section 39 notices.";

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
        alt: formatAltText("Software UAT Sign-Off Delay and Scope Creep Milestone Payment Recovery"),
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
    remedy: "Deemed Acceptance via Live Commercial Traffic & Production Deployment",
    statute: "Sale of Goods Act, 1930 (s.42) & Indian Contract Act, 1872 (ss. 55 & 70)",
    timing: "Immediate upon client pointing production DNS, publishing apps, or onboarding real users",
    mechanism:
      "Serve formal Notice of Deemed Acceptance citing telemetry, WHOIS, and production traffic. Proves that commercial exploitation is legally incompatible with rejecting deliverables.",
    relief:
      "Statutorily extinguishes the conditional UAT inspection period; renders the final milestone invoice (typically 25%–40% of contract value) immediately due and payable.",
    suitability:
      "Custom web applications, enterprise SaaS platforms, consumer mobile apps, and generative AI workflows deployed to real users without formal sign-off.",
    tone: "emerald",
  },
  {
    remedy: "Statutory Copyright Lien & Unassigned Source Code Retention",
    statute: "Copyright Act, 1957 (Sections 17, 19, 51 & 63)",
    timing: "Triggered whenever client demands GitHub admin transfer or cloud credentials without full payment",
    mechanism:
      "Formal advocate notice asserting first ownership under Section 17 and conditional assignment under Section 19. Proves no intellectual property transfers until consideration is fully settled.",
    relief:
      "Blocks client from legally exploiting or transferring code; unauthorized production use exposes debtor directors to civil damages and criminal prosecution under Section 63.",
    suitability:
      "Bespoke software, proprietary machine learning models, database schemas, and private GitHub/GitLab repositories built by independent dev agencies.",
    tone: "slate",
  },
  {
    remedy: "Quantum Meruit Recovery for Disguised Scope Creep & Change Orders",
    statute: "Indian Contract Act, 1872 (Section 70 & Section 73)",
    timing: "Upon client raising cosmetic/out-of-scope feature requests as 'UAT blockers'",
    mechanism:
      "Audit defect tickets against signed Statement of Work (SOW); issue a Defect Segregation Notice separating true defects from billable Change Requests under Section 70.",
    relief:
      "Compels client to pay core baseline milestone while establishing an enforceable legal claim for all developer hours consumed on out-of-scope enhancements.",
    suitability:
      "Fixed-bid contracts where clients iteratively pivot requirements or flood PMs with non-functional design changes to avoid final sign-off.",
    tone: "emerald",
  },
  {
    remedy: "MSMED Act Mandatory 45-Day Payment & 3x RBI Compound Penal Interest",
    statute: "MSMED Act, 2006 (Sections 15, 16 & 18) & Income Tax Act s.43B(h)",
    timing: "Day 46 post-delivery of release candidate or deemed acceptance date",
    mechanism:
      "File statutory reference before State Micro and Small Enterprises Facilitation Council (MSEFC); serve Section 43B(h) notice warning of corporate expense disallowance.",
    relief:
      "Compulsory compound interest at 3 times the RBI Bank Rate calculated monthly; debtor faces 25%–35% income tax surcharge on unpaid development fees.",
    suitability:
      "Udyam-registered Indian software development agencies, mobile app studios, and IT consulting enterprises recovering dues from domestic corporate buyers.",
    tone: "emerald",
  },
  {
    remedy: "Order XXXVII Commercial Summary Suit & Section 9 Arbitration Injunction",
    statute: "Code of Civil Procedure, 1908 (Order XXXVII) & Commercial Courts Act, 2015",
    timing: "Following 10-day advocate demand notice expiry or failure of Section 12A mediation",
    mechanism:
      "Fast-track Commercial Summary Plaint before Commercial Court under s.2(1)(c)(xviii); file Section 9 interim application to restrain client from commercially exploiting unpaid IP.",
    relief:
      "Summary money decree without prolonged trial unless debtor deposits disputed milestone in court; interim injunction halting client production servers.",
    suitability:
      "Liquidated milestone agreements backed by signed SOWs, Jira acceptance logs, delivered staging builds, and unpaid tax invoices exceeding ₹3.0 Lakh.",
    tone: "slate",
  },
];

const RECOVERY_STAGES = [
  {
    stage: "Stage 1",
    timeline: "Day 1 – 7",
    title: "Scope Freeze & Telemetry Collation",
    desc: "Lock the code repository, freeze staging branches, and archive Jira/Linear sprint tickets. Collate production DNS CNAME logs, App Store releases, and telemetry under BSA 2023 Section 63.",
  },
  {
    stage: "Stage 2",
    timeline: "Day 8 – 15",
    title: "Notice of Deemed Acceptance & SOW Segregation",
    desc: "Serve an executive legal communication establishing that commercial deployment constitutes Deemed Acceptance under Contract Act s.55/70. Formally segregate scope creep into billable Change Requests.",
  },
  {
    stage: "Stage 3",
    timeline: "Day 16 – 25",
    title: "Section 19 Copyright Lien & Infringement Warning",
    desc: "Serve a fact-verified demand notice confirming that software copyright remains with the agency under Copyright Act s.17/19. Warn debtor directors that unauthorized live use constitutes infringement under s.51.",
  },
  {
    stage: "Stage 4",
    timeline: "Day 26 – 40",
    title: "MSME MSEFC Filing & Section 43B(h) Intimation",
    desc: "Lodge a statutory petition before the State MSEFC claiming the full milestone plus 3x RBI compound penal interest. Serve statutory intimation on the debtor's CFO and statutory tax auditors.",
  },
  {
    stage: "Stage 5",
    timeline: "Day 41+",
    title: "Commercial Court Order XXXVII & IP Injunction",
    desc: "Institute a Commercial Summary Suit under Order XXXVII CPC or initiate Section 9 Arbitration proceedings seeking pre-judgment deposit of milestone funds and interim injunction on production apps.",
  },
];

const FAQS = [
  {
    q: "Can a client delay software milestone payments by claiming UAT is 'still ongoing' indefinitely?",
    a: "No. In Indian commercial jurisprudence, User Acceptance Testing (UAT) is a conditional contractual window governed by Section 55 of the Indian Contract Act, 1872. Contracts typically provide a 7 to 14 business day UAT window. If the client fails to provide an objective, documented defect list referencing the signed Statement of Work (SOW) within that agreed window, the software is contractually deemed accepted. Furthermore, if the client deploys the build to production, points custom domains, or onboards real customers, they exercise dominion over the work, triggering Deemed Acceptance under Section 42 of the Sale of Goods Act, 1930 and Section 70 of the Contract Act. The client is legally barred from withholding milestone payments over indefinite testing claims.",
  },
  {
    q: "What constitutes 'Deemed Acceptance' when a client uses our software in production without signing UAT?",
    a: "Deemed Acceptance occurs when a buyer acts in a manner fundamentally inconsistent with the rejection of the deliverable. In software development, this includes: (1) pointing production DNS records (CNAME/A records) to the deployed application; (2) launching the application publicly on the Apple App Store, Google Play Store, or web; (3) onboarding active commercial users or processing real financial transactions; (4) issuing press releases or public marketing campaigns promoting the platform; and (5) integrating the build into core enterprise operations. Under settled principles of estoppel by conduct, a client cannot enjoy commercial utility while simultaneously asserting that the product is unaccepted for payment purposes.",
  },
  {
    q: "Does the client own the software code if they have paid 70% of the milestones but default on the final 30%?",
    a: "No. Under Section 17 of the Copyright Act, 1957, the software agency or developer is the first author and legal owner of copyright in the bespoke computer program and architecture. Under Section 19, assignment of copyright is not legally effective unless it is in writing and signed by the assignor. In standard technology Master Services Agreements (MSAs), the intellectual property transfer covenant is an express reciprocal promise under Section 51 of the Indian Contract Act, conditional upon receipt of full and final payment. Until the final 30% milestone is settled in cleared funds, legal and equitable title to the source code remains exclusively with the developer. Running the code in production without payment constitutes actionable copyright infringement under Section 51.",
  },
  {
    q: "Can our agency legally withhold the GitHub repository and AWS root credentials for unpaid invoices?",
    a: "Yes. Under Section 51, 52, and 54 of the Indian Contract Act, 1872 governing reciprocal promises, a service provider is under no legal obligation to perform their promise (transferring Git repositories, administrative credentials, or raw AI model weights) if the other party fails or refuses to perform their concurrent promise (paying matured development milestone invoices). Retaining administrative control over the code repository constitutes a lawful vendor possessory and intellectual property lien. As long as the agency does not maliciously sabotage, delete, or alter the client's proprietary data (which would violate Section 43/66 of the IT Act), withholding deployment keys until payment is fully protected in law.",
  },
  {
    q: "How do we legally defeat client claims that out-of-scope feature requests are 'UAT bugs'?",
    a: "To defeat disguised scope creep, the agency must apply an objective Defect Severity Framework. In law, a 'defect' is strictly a deviation from the explicit functional requirements documented in the signed SOW, Functional Specification Document (FSD), or wireframes. Any request that modifies user flows, alters third-party integrations, changes data structures, or adds new screens constitutes a 'Change Request' (CR). Under Section 70 of the Indian Contract Act, 1872 (Quantum Meruit), the client is obligated to pay fair compensation for non-gratuitous services. By formally segregating Jira tickets into 'Warranty Fixes' (Schedule A) and 'Billable Change Requests' (Schedule B), the agency renders the core milestone payable immediately.",
  },
  {
    q: "How does Section 43B(h) of the Income Tax Act help dev shops recover delayed UAT milestone dues?",
    a: "Under Section 43B(h) of the Income Tax Act, 1961 (effective from FY 2023-24), any payment due to an enterprise registered under the MSMED Act, 2006 as a Micro or Small enterprise that remains unpaid beyond 45 days (under written agreement) or 15 days (without agreement) is completely disallowed as a tax deduction in that financial year. The unpaid software development invoice is added back to the client's net taxable income, subjecting them to a 25% to 35% cash tax liability plus surcharges. Serving a formal Section 43B(h) statutory intimation on the corporate client's CFO and Statutory Auditors provides massive financial leverage, compelling rapid milestone clearance before March 31.",
  },
  {
    q: "Can an Indian software agency recover unpaid milestone dues from international US, UK, or EU clients?",
    a: "Yes. Cross-border tech contracts executed with foreign clients can be enforced through multiple legal mechanisms. If the contract designates Indian governing law and jurisdiction, the agency can obtain a Commercial Summary Decree under Order XXXVII CPC and execute it internationally. If the contract includes an international commercial arbitration clause (e.g., SIAC, LCIA, or MCIA), arbitral awards are enforceable across 170+ countries under the 1958 New York Convention. Furthermore, serving a fact-verified statutory breach notice directly on the foreign entity's General Counsel and Board of Directors, coupled with threats of DMCA / copyright takedown notices to their cloud host (AWS/Azure/GCP), resolves over 70% of cross-border software milestone disputes without overseas litigation.",
  },
  {
    q: "What electronic evidence is required under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA)?",
    a: "Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act), electronic records are admissible in court when accompanied by a statutory certificate signed by a person in official management of the computing device. For software milestone recovery, the evidence dossier must include: (1) Git commit logs and release tags with immutable SHA-256 hashes; (2) Jira, Linear, or GitHub issue logs showing feature completion; (3) Staging deployment logs and UAT delivery notification emails; (4) DNS configuration records showing production pointing; (5) Datadog, AWS CloudWatch, or Google Analytics active user telemetry; and (6) Slack/WhatsApp communications containing client acknowledgments. Properly certified, this technical evidence completely dismantles debtor stalling tactics.",
  },
];

export default function SoftwareUatSignOffDelayRecoveryPage() {
  const breadcrumbItems = [
    { label: "IT & SaaS Hub", href: "/industries/it-saas-software-recovery" },
    {
      label: "Software UAT & Milestone Recovery",
      href: PAGE_URL,
    },
  ];

  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PAGE_URL}`,
    },
    author: {
      "@type": "Person",
      name: LEGAL_REVIEWER.name,
      jobTitle: LEGAL_REVIEWER.role,
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
    datePublished: "2026-11-16T12:00:00+05:30",
    dateModified: "2026-11-16T12:00:00+05:30",
  };

  const HOW_TO_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "5-Stage Software Milestone & UAT Sign-Off Recovery Protocol",
    description:
      "Operational and statutory escalation framework for custom software, app development, and AI agencies to recover withheld milestone payments and defeat infinite UAT scope creep.",
    step: RECOVERY_STAGES.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: s.title,
      text: s.desc,
    })),
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
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
        name: "IT & SaaS Legal Recovery Hub",
        item: `${SITE_URL}/industries/it-saas-software-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Software UAT Sign-Off & Milestone Recovery",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOW_TO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Dark Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>IND-05 &bull; Custom Software, AI &amp; App Development Recovery Playbook</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Statutory Answer for Dev Agency Founders &amp; Delivery Heads
            </span>
            <p>
              When a client deploys staging builds to live production or stalls User Acceptance Testing (UAT) over cosmetic tweaks to withhold the final 25%–40% milestone, Indian law provides definitive creditor remedies. Under the{" "}
              <Link
                href="/industries/it-saas-software-recovery"
                className="text-red-400 underline hover:text-red-300 font-semibold"
              >
                IT Services &amp; SaaS Legal Recovery Framework
              </Link>
              , commercial deployment legally constitutes Deemed Acceptance under Section 42 of the Sale of Goods Act, 1930 and Section 70 of the Indian Contract Act, 1872. Furthermore, under Section 19 of the Copyright Act, 1957, software copyright does not transfer until full consideration is paid. Serving a tri-channel advocate demand notice enforcing an IP lien and Section 43B(h) tax disallowances routinely compels delinquent clients to disburse stalled milestones within 10 to 15 business days.
            </p>
          </div>

          {/* 4 Key Metrics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">14 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                Standard Statutory UAT Deemed Acceptance Window
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% IP</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                Copyright Retained by Agency Until Full Settlement
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                MSMED Act Section 16 Compound Penal Interest
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">s.43B(h)</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                Corporate Tax Deduction Disallowed on Unpaid Dues
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* 2-Column Split: Sticky TOC + Main Editorial */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Column: Sticky TOC */}
          <SoftwareUatRecoveryTableOfContents />

          {/* Right Column: Main Content Cards */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The Infinite UAT Trap */}
            <section
              id="heading-uat-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                B2B Technology Creditor Crisis
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                The Infinite UAT Trap: Why Custom Software Agencies Get Stonewalled on Final Milestones
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Across India's premier technology corridors—from Koramangala and Hitec City to Hinjawadi and Cyber City Gurugram—custom software development shops, mobile app agencies, and generative AI studios face a systemic commercial fraud. The vendor meticulously delivers Milestone 1 (Discovery &amp; Wireframes), Milestone 2 (Architecture &amp; Core Backend), and Milestone 3 (Frontend &amp; Integration), collecting the initial 60%–70% of the project fee. Then, at Milestone 4 (User Acceptance Testing &amp; Final Release Candidate), the client springs the trap.
                </p>
                <p>
                  The client deploys the release candidate to their live production environment, onboards paying customers, runs performance marketing ads, and generates commercial revenue. Yet, when the agency requests the formal UAT sign-off certificate to release the final 30%–40% milestone invoice (often ₹10 Lakh to ₹50 Lakh), the client's management stonewalls. They raise an endless loop of subjective UI preferences, font weight debates, copy revisions, and completely new feature requests disguised as "critical UAT blockers."
                </p>
                <p>
                  Because agencies fear damaging the client relationship or being blamed for project delays, delivery leads often capitulate—burning hundreds of unbilled senior developer hours on scope creep. When the agency finally pushes back, the client threatens to terminate for breach, demands root AWS credentials and GitHub organization ownership, and refuses all further disbursements. 
                </p>
                <p>
                  Breaking free of this trap requires shifting from submissive vendor customer service to firm institutional creditor enforcement. Under Indian contract law, copyright statutes, and commercial precedents, agencies hold formidable statutory levers: live commercial traffic constitutes Deemed Acceptance, source code copyright cannot be transferred without full payment under{" "}
                  <Link
                    href="/copyright-not-transferred-until-paid-freelancer"
                    className="text-[#DC2626] font-semibold underline hover:text-red-700"
                  >
                    Section 19 of the Copyright Act
                  </Link>
                  , and unpaid developer hours qualify for quantum meruit recovery under Section 70 of the Indian Contract Act.
                </p>
              </div>
            </section>

            {/* Section 2: 5-Stage Operational Escalation Protocol (SVG Flowchart + Mobile Cards) */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Operational Decision Architecture
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                5-Stage Operational Escalation Protocol: From Stalled UAT to Milestone Recovery
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                When a client refuses to sign off on UAT or demands free development under the guise of testing, follow this battle-tested 5-stage escalation rail. Designed to preserve evidence, assert statutory liens, and compel rapid payment before litigation.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 p-6 rounded-2xl border border-slate-800 mb-6">
                <svg
                  viewBox="0 0 960 210"
                  className="w-full h-auto text-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="5-Stage Software Milestone Recovery Escalation Rail"
                >
                  {/* Stage 1 */}
                  <rect x="10" y="20" width="168" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                  <rect x="22" y="32" width="65" height="22" rx="4" fill="#DC2626" />
                  <text x="30" y="47" fill="#FFFFFF" fontSize="10" fontWeight="bold">STAGE 1</text>
                  <text x="22" y="75" fill="#F8FAFC" fontSize="12" fontWeight="bold">Scope Freeze &amp;</text>
                  <text x="22" y="93" fill="#F8FAFC" fontSize="12" fontWeight="bold">Telemetry Collation</text>
                  <text x="22" y="118" fill="#94A3B8" fontSize="9.5">Lock Git repositories;</text>
                  <text x="22" y="133" fill="#94A3B8" fontSize="9.5">archive Jira/Linear tickets;</text>
                  <text x="22" y="148" fill="#94A3B8" fontSize="9.5">capture DNS/traffic logs.</text>

                  {/* Arrow 1->2 */}
                  <path d="M185 95 H 205" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 2" />
                  <polygon points="205,91 213,95 205,99" fill="#DC2626" />

                  {/* Stage 2 */}
                  <rect x="215" y="20" width="168" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                  <rect x="227" y="32" width="65" height="22" rx="4" fill="#DC2626" />
                  <text x="235" y="47" fill="#FFFFFF" fontSize="10" fontWeight="bold">STAGE 2</text>
                  <text x="227" y="75" fill="#F8FAFC" fontSize="12" fontWeight="bold">Deemed Acceptance</text>
                  <text x="227" y="93" fill="#F8FAFC" fontSize="12" fontWeight="bold">&amp; SOW Segregation</text>
                  <text x="227" y="118" fill="#94A3B8" fontSize="9.5">Invoke Contract Act s.55;</text>
                  <text x="227" y="133" fill="#94A3B8" fontSize="9.5">separate true bugs from</text>
                  <text x="227" y="148" fill="#94A3B8" fontSize="9.5">billable Change Requests.</text>

                  {/* Arrow 2->3 */}
                  <path d="M390 95 H 410" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 2" />
                  <polygon points="410,91 418,95 410,99" fill="#DC2626" />

                  {/* Stage 3 */}
                  <rect x="420" y="20" width="168" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                  <rect x="432" y="32" width="65" height="22" rx="4" fill="#DC2626" />
                  <text x="440" y="47" fill="#FFFFFF" fontSize="10" fontWeight="bold">STAGE 3</text>
                  <text x="432" y="75" fill="#F8FAFC" fontSize="12" fontWeight="bold">Copyright s.19 IP</text>
                  <text x="432" y="93" fill="#F8FAFC" fontSize="12" fontWeight="bold">Lien &amp; Warning Notice</text>
                  <text x="432" y="118" fill="#94A3B8" fontSize="9.5">Assert Copyright s.17/19;</text>
                  <text x="432" y="133" fill="#94A3B8" fontSize="9.5">warn of s.51 infringement</text>
                  <text x="432" y="148" fill="#94A3B8" fontSize="9.5">and cloud server freeze.</text>

                  {/* Arrow 3->4 */}
                  <path d="M595 95 H 615" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 2" />
                  <polygon points="615,91 623,95 615,99" fill="#DC2626" />

                  {/* Stage 4 */}
                  <rect x="625" y="20" width="168" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                  <rect x="637" y="32" width="65" height="22" rx="4" fill="#DC2626" />
                  <text x="645" y="47" fill="#FFFFFF" fontSize="10" fontWeight="bold">STAGE 4</text>
                  <text x="637" y="75" fill="#F8FAFC" fontSize="12" fontWeight="bold">MSEFC Petition &amp;</text>
                  <text x="637" y="93" fill="#F8FAFC" fontSize="12" fontWeight="bold">Sec 43B(h) Audit Alert</text>
                  <text x="637" y="118" fill="#94A3B8" fontSize="9.5">File for 3x RBI compound</text>
                  <text x="637" y="133" fill="#94A3B8" fontSize="9.5">interest at MSEFC; alert</text>
                  <text x="637" y="148" fill="#94A3B8" fontSize="9.5">CFO to tax disallowance.</text>

                  {/* Arrow 4->5 */}
                  <path d="M800 95 H 820" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 2" />
                  <polygon points="820,91 828,95 820,99" fill="#DC2626" />

                  {/* Stage 5 */}
                  <rect x="830" y="20" width="120" height="150" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <rect x="842" y="32" width="65" height="22" rx="4" fill="#DC2626" />
                  <text x="850" y="47" fill="#FFFFFF" fontSize="10" fontWeight="bold">STAGE 5</text>
                  <text x="842" y="75" fill="#F8FAFC" fontSize="12" fontWeight="bold">Order XXXVII</text>
                  <text x="842" y="93" fill="#F8FAFC" fontSize="12" fontWeight="bold">&amp; IP Injunction</text>
                  <text x="842" y="118" fill="#94A3B8" fontSize="9.5">Commercial suit;</text>
                  <text x="842" y="133" fill="#94A3B8" fontSize="9.5">injunction halting</text>
                  <text x="842" y="148" fill="#94A3B8" fontSize="9.5">live production app.</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-3 mb-6">
                {RECOVERY_STAGES.map((s) => (
                  <div key={s.stage} className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#DC2626] bg-red-950/80 px-2 py-0.5 rounded">
                        {s.stage} &bull; {s.timeline}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1">{s.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Recovery Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Legal Enactments &amp; Creditor Remedies
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Recovery Matrix: Contract Act, Copyright Act &amp; MSMED Act Protections
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Indian commercial law treats software engineering contracts as bilateral commercial agreements governed by strict reciprocal promises. The table below outlines the core statutory causes of action available to custom development agencies.
              </p>

              {/* Statutory Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mb-4">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px]">Remedy &amp; Statute</th>
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px]">Enforcement Timing</th>
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px]">Operational Mechanism</th>
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px]">Statutory Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                    {STATUTORY_MATRIX.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4 align-top">
                          <p className="font-extrabold text-slate-900">{item.remedy}</p>
                          <p className="text-[11px] font-semibold text-red-600 mt-0.5">{item.statute}</p>
                        </td>
                        <td className="py-3.5 px-4 align-top text-xs text-slate-600">{item.timing}</td>
                        <td className="py-3.5 px-4 align-top text-xs leading-relaxed">{item.mechanism}</td>
                        <td className="py-3.5 px-4 align-top text-xs font-medium text-emerald-800 bg-emerald-50/30">
                          {item.relief}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: 4 Critical Agency Failure Modes (Interactive Tabs) */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Dispute Simulation Matrix
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                4 Critical Agency Failure Modes: Production Deploys to Agile Scope Ambush
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Explore the four most common commercial scenarios where enterprise clients and startups default on software milestones. Click each tab to inspect the debtor's pretext, statutory reality, and operational recovery playbook.
              </p>

              <SoftwareUatScenarioTabs />
            </section>

            {/* Section 5: Enforcing Deemed Acceptance */}
            <section
              id="heading-deemed-acceptance"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Doctrine of Constructive Acceptance
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Enforcing Deemed Acceptance: Proving Live Production Traffic Extinguishes UAT Delays
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  The most potent legal weapon available to software agencies is the doctrine of <strong>Deemed Acceptance</strong>. In standard Master Services Agreements, clients insist on a clause stating: <em>"Milestone 4 shall be payable only upon client's issuance of a signed UAT Acceptance Certificate."</em> Defaulting clients mistakenly believe this sentence grants them sovereign immunity against payment—assuming that by simply withholding their signature, they can use the software forever without incurring debt.
                </p>
                <p>
                  Indian contract law squarely rejects this fallacy. Under Section 42 of the Sale of Goods Act, 1930 (which applies analogously to delivered software assets) and Section 70 of the Indian Contract Act, 1872:
                </p>
                <div className="bg-slate-50 border-l-4 border-slate-800 p-4 rounded-r-xl italic text-slate-800">
                  "The buyer is deemed to have accepted the goods when he does any act in relation to them which is inconsistent with the ownership of the seller, or when after the lapse of a reasonable time, he retains the goods without intimating to the seller that he has rejected them."
                </div>
                <p>
                  When a client takes the code from the staging environment and deploys it to a production Kubernetes cluster, points their apex domain (e.g., <code>app.clientdomain.com</code>), publishes the build to the App Store, or processes actual commercial transactions, they perform acts fundamentally inconsistent with rejection. Under the doctrine of estoppel by conduct, a corporate entity cannot commercially exploit a software application while asserting in legal correspondence that the application is "rejected" or "unaccepted."
                </p>
                <p>
                  In a formal advocate notice, the dev agency presents timestamped server logs, DNS records, and user onboarding metrics. The notice establishes that the client's commercial deployment operated as an automatic, irrevocable waiver of the formal sign-off condition, making the milestone debt immediately mature and enforceable under{" "}
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="text-[#DC2626] font-semibold underline hover:text-red-700"
                  >
                    Order XXXVII CPC Summary Suit
                  </Link>{" "}
                  proceedings.
                </p>
              </div>
            </section>

            {/* Section 6: Copyright Act Section 19 IP Lien */}
            <section
              id="heading-copyright-ip-lien"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Intellectual Property Defense
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                The Copyright Act Section 19 IP Lien: Why Unpaid Code Cannot Be Transferred
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  When software milestone disputes turn hostile, enterprise clients frequently threaten legal action, alleging that the dev agency is "holding client intellectual property hostage" by refusing to transfer GitHub organization admin rights, raw source code repositories, or cloud master credentials.
                </p>
                <p>
                  This claim is legally groundless. Under Section 17 of the Copyright Act, 1957, the software agency or developer is the first author and legal owner of copyright in the bespoke computer code, database schemas, and algorithms. Unlike full-time salaried employment (where Section 17(c) grants first ownership to the employer), an independent software contractor or development agency retains first ownership under Section 17(a).
                </p>
                <p>
                  Transfer of software ownership can only occur through an <strong>assignment of copyright</strong> under Section 19 of the Act. Section 19(1) mandates:
                </p>
                <div className="bg-slate-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl font-medium text-slate-900">
                  "No assignment of the copyright in any work shall be valid unless it is in writing signed by the assignor or by his duly authorized agent."
                </div>
                <p>
                  In every professionally drafted Master Services Agreement or Statement of Work, intellectual property assignment is formulated as an expressly <strong>conditional covenant</strong>: <em>"The Developer agrees to assign all rights, title, and interest in the Work Product to the Client upon receipt of full and final payment of all agreed fees."</em>
                </p>
                <p>
                  Under Sections 51 through 54 of the Indian Contract Act, 1872 governing reciprocal promises, the agency has zero legal duty to transfer copyright or hand over Git admin credentials while the final milestone remains unpaid. Furthermore, if the client extracts compiled builds and deploys them to production without paying the final milestone, the client has <strong>no valid license</strong>. Their live deployment constitutes willful copyright infringement under Section 51, exposing company directors to statutory damages, interim injunctions shutting down production servers, and criminal liability under Section 63.
                </p>
                <p>
                  Learn more about protecting creative and engineering ownership in our comprehensive guide to{" "}
                  <Link
                    href="/copyright-not-transferred-until-paid-freelancer"
                    className="text-[#DC2626] font-semibold underline hover:text-red-700"
                  >
                    enforcing Section 19 copyright liens for unpaid software work
                  </Link>.
                </p>
              </div>
            </section>

            {/* Section 7: Segregating Scope Creep */}
            <section
              id="heading-scope-creep-segregation"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Contractual Bug-Versus-Feature Segregation
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Segregating Scope Creep: Converting Disguised Bug Lists into Billable Change Requests
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  The primary vehicle used by dishonest clients to delay UAT sign-off is the deliberate conflation of "bugs" and "scope changes." To defeat this maneuver, the agency must establish an unassailable evidentiary wall between contractual defects and billable change orders.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                    <p className="text-xs font-black uppercase tracking-wider text-red-700 mb-2">
                      Contractual Defect (Warranty Fix)
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      An objective functional failure where code deviates from explicit criteria in the signed SOW, PRD, or approved Figma wireframes. Example: user submits valid credit card details, but API returns 500 server error instead of processing charge. Agency fixes at zero charge.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                    <p className="text-xs font-black uppercase tracking-wider text-emerald-800 mb-2">
                      Scope Creep (Billable Change Request)
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Any request that introduces new business logic, alters approved user flows, adds third-party integrations not in the SOW, or demands redesign of previously approved screens. Example: replacing Stripe with a multi-currency escrow gateway. Payable under Section 70 Quantum Meruit.
                    </p>
                  </div>
                </div>
                <p>
                  Under Section 70 of the Indian Contract Act, 1872 (obligation of person enjoying benefit of non-gratuitous act), where an agency does something for another person not intending to do so gratuitously, and the other person enjoys the benefit thereof, the beneficiary is bound in law to make compensation. When a client directs an agency's engineers to build out-of-scope features, they cannot later refuse payment by claiming "it was part of UAT."
                </p>
                <p>
                  By issuing a formal SOW Defect Audit Report, the agency certifies all core SOW criteria as 100% delivered, triggering the baseline milestone payment, while converting the client's out-of-scope wishlist into an enforceable invoice for{" "}
                  <Link
                    href="/recovery/consultancy-fees"
                    className="text-[#DC2626] font-semibold underline hover:text-red-700"
                  >
                    unpaid technical consultancy and engineering retainers
                  </Link>.
                </p>
              </div>
            </section>

            {/* Section 8: Worked Recovery Ledger */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Empirical Case Study &amp; Claim Ledger
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Worked Recovery Ledger: Resolving a ₹32.50 Lakh AI &amp; Full-Stack Milestone Default
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Review an authentic commercial claim reconciliation for a Bengaluru-based AI studio that developed an enterprise document intelligence and LLM workflow platform for a Mumbai logistics corporate. Total project value was ₹60.00 Lakh.
              </p>

              {/* Ledger Container */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 md:p-7 border border-slate-800 shadow-xl mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                      Dispute Case Reference
                    </span>
                    <p className="text-base sm:text-lg font-black text-white">
                      Custom AI Workflow &amp; SaaS Milestone Default
                    </p>
                  </div>
                  <span className="text-xs font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/80 px-3 py-1 rounded-full">
                    Resolved in 18 Days via Legal Notice
                  </span>
                </div>

                {/* Ledger Breakdown Rows */}
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                    <span className="text-slate-300">Milestone 4: Final UAT &amp; Deployment Sign-Off (Withheld)</span>
                    <span className="font-mono font-bold text-slate-100">&rupee;18,00,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                    <span className="text-slate-300">
                      Schedule B Scope-Creep Change Requests (420 Dev Hours @ &rupee;2,000/hr)
                    </span>
                    <span className="font-mono font-bold text-slate-100">&rupee;8,40,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                    <span className="text-slate-300">
                      Dedicated AWS GPU Server &amp; OpenAI API Pass-Through Demurrage (2 Months)
                    </span>
                    <span className="font-mono font-bold text-slate-100">&rupee;3,60,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                    <span className="text-slate-300">
                      MSMED Act Section 16 Compound Penal Interest (90 Days @ 3x RBI Bank Rate = 19.5% p.a.)
                    </span>
                    <span className="font-mono font-bold text-amber-400">&rupee;2,50,000</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 text-sm sm:text-base font-black border-t-2 border-[#DC2626]">
                    <span className="text-white">Total Liquidated Statutory Claim Amount</span>
                    <span className="font-mono text-emerald-400 text-lg sm:text-xl">&rupee;32,50,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-xl text-xs sm:text-sm text-slate-800 space-y-2">
                <p className="font-bold text-emerald-900">Commercial Resolution Outcome:</p>
                <p>
                  Upon receiving the Fact-Verified Tri-Channel Demand Notice containing timestamped AWS CloudWatch telemetry and the Section 43B(h) tax disallowance intimation, the client's Chief Financial Officer intervened. Within 18 business days, the client disbursed ₹26.40 Lakh (100% of Milestone 4 + 100% of approved Change Orders), agreed to execute a written IP assignment deed, and entered a paid annual support contract. Calculate your own statutory interest with our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-[#DC2626] font-semibold underline hover:text-red-700"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>.
                </p>
              </div>
            </section>

            {/* Section 9: BSA 2023 Section 63 Software Telemetry & Git Commit Evidence Dossier */}
            <section
              id="heading-bsa-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Evidentiary Admissibility Standard
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                BSA 2023 Section 63 Software Telemetry &amp; Git Commit Evidence Dossier
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic records are admissible as primary evidence in Indian Commercial Courts provided they are certified by the technical custodian. Assemble these 7 essential pillars to establish unassailable proof of milestone completion:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">
                      Cryptographically Signed Git Commit Hashes &amp; Release Tags
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Immutable SHA-256 commit histories from GitHub/GitLab verifying that all code matching SOW acceptance criteria was deployed to the release branch prior to the UAT deadline.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">
                      Signed SOW, Functional Specification (FSD) &amp; Acceptance Matrix
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Executed contract documents with explicit definitions of defect severity (P1/P2/P3), testing windows, and the contractually agreed Deemed Acceptance timeframe.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">
                      Jira / Linear Issue Logs with Defect Segregation Tagging
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Audited sprint ticket exports demonstrating that all agreed SOW acceptance stories were closed and verified in staging, with client change requests segregated into separate epics.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">
                      Production DNS CNAME &amp; WHOIS Routing Records
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Timestamped Cloudflare, Route53, or DNS query logs proving the client mapped custom production domains to the application infrastructure, establishing Deemed Acceptance.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    5
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">
                      Production User Telemetry &amp; Gateway Transaction Receipts
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Datadog, AWS CloudWatch, Mixpanel, or Razorpay/Stripe dashboard logs showing real customer logins, active sessions, and monetary transactions processed through the system.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    6
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">
                      Tri-Channel Delivery Acknowledgments (Email, Slack, WhatsApp)
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Exported chat histories and email chains containing client praise, informal approvals, feature requests, and delivery acknowledgments from key client stakeholders.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    7
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">
                      BSA 2023 Section 63 Statutory Certification Affidavit
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Formally sworn certificate executed by the agency's Chief Technology Officer or Delivery VP certifying the technical integrity and unmanipulated extraction of all server and git records.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: Dual-Track B2B CTAs */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Actionable Legal Recovery Infrastructure
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Deploy Software Milestone Legal Recovery: Single Case Test or Bulk PMO Desk
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Choose the operational recovery model that matches your agency's overdue receivables portfolio. Recover a single stalled milestone or deploy a dedicated recovery desk across your entire aged debtor ledger.
              </p>

              <SoftwareUatRecoveryCTA />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Executive Clarity &amp; Guidance
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-6">
                Frequently Asked Questions on Software UAT Sign-Off &amp; Milestone Recovery
              </h2>

              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-xs sm:text-sm md:text-base">
                      <span className="pr-4">{faq.q}</span>
                      <span className="text-[#DC2626] font-bold text-lg group-open:rotate-180 transition-transform shrink-0">
                        &darr;
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed pt-2 border-t border-slate-200/80">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory References & Precedents */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Legal Authorities &amp; Precedents
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Statutory References, Technology Precedents &amp; Legal Authorities
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <p>
                  1. <strong>Indian Contract Act, 1872</strong>: Sections 39 (Anticipatory Breach), 51–54 (Reciprocal Promises), 55 (Time as Essence of Contract), 70 (Obligation of Person Enjoying Benefit of Non-Gratuitous Act), and 73 (Damages for Breach).{" "}
                  <a
                    href="https://www.indiacode.nic.in/handle/123456789/2187"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[#DC2626] underline hover:text-red-700"
                  >
                    IndiaCode Bare Act &rarr;
                  </a>
                </p>
                <p>
                  2. <strong>Copyright Act, 1957</strong>: Section 17 (First Ownership of Author), Section 19 (Mandatory Conditions for Valid Assignment in Writing), Section 51 (Copyright Infringement), and Section 63 (Criminal Penalties for Willful Infringement).{" "}
                  <a
                    href="https://www.indiacode.nic.in/handle/123456789/1367"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[#DC2626] underline hover:text-red-700"
                  >
                    IndiaCode Bare Act &rarr;
                  </a>
                </p>
                <p>
                  3. <strong>Sale of Goods Act, 1930</strong>: Section 42 (Acceptance of Goods by Buyer through Inconsistent Acts), Section 44, and Section 55 (Suit for Price).
                </p>
                <p>
                  4. <strong>Micro, Small and Medium Enterprises Development (MSMED) Act, 2006</strong>: Section 15 (Mandatory 45-day payment period), Section 16 (Compulsory 3x RBI compound penal interest), and Section 18 (Facilitation Council Reference).
                </p>
                <p>
                  5. <strong>Commercial Courts Act, 2015</strong>: Section 2(1)(c)(xviii) (Technology Development Agreements as Commercial Disputes) and Section 12A (Pre-Institution Mediation).
                </p>
                <p>
                  6. <strong>Income Tax Act, 1961</strong>: Section 43B(h) read with Finance Act 2023 (Expense disallowance for delayed payments to MSME suppliers).
                </p>
                <p>
                  7. <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>: Section 63 (Admissibility of Electronic Records in Civil and Commercial Proceedings).
                </p>
                <p>
                  8. <strong>Related Sibling Guides in IND-05</strong>:{" "}
                  <Link
                    href="/b2b-saas-annual-subscription-early-cancellation-unpaid-invoice-recovery"
                    className="text-[#DC2626] font-semibold underline hover:text-red-700"
                  >
                    B2B SaaS Annual Subscription Recovery
                  </Link>
                  ,{" "}
                  <Link
                    href="/it-staff-augmentation-dedicated-developer-monthly-invoice-recovery"
                    className="text-[#DC2626] font-semibold underline hover:text-red-700"
                  >
                    Staff Augmentation Monthly Invoice Recovery
                  </Link>
                  , and{" "}
                  <Link
                    href="/client-poached-deployed-developer-non-solicitation-fee-recovery"
                    className="text-[#DC2626] font-semibold underline hover:text-red-700"
                  >
                    Client Developer Poaching Fee Recovery
                  </Link>.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links Cluster */}
      <RelatedRecoveryGuides cluster="itSaas" currentPath={PAGE_URL} />
    </div>
  );
}
