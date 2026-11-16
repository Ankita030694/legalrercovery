import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import WhiteLabelRecoveryTableOfContents from "./WhiteLabelRecoveryTableOfContents";
import WhiteLabelScenarioTabs from "./WhiteLabelScenarioTabs";
import WhiteLabelRecoveryCTA from "./WhiteLabelRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/white-label-subcontracted-agency-unpaid-software-invoice-recovery";
const EXACT_H1 =
  "When a White-Label Agency Bills the End-Client and Ghosts Your Dev Shop: NDA Traps, IP Retention & Payment Recovery";
const META_TITLE = "White-Label Agency Not Paying Your Dev Shop? Legal Fix";
const META_DESCRIPTION =
  "Built the platform under a white-label NDA, prime agency got paid by end-client & ghosted you? Enforce IP non-transfer & Copyright Act s.19 breach notices.";

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
        alt: formatAltText("White-Label Subcontracted Agency Unpaid Software Invoice Recovery"),
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

const FAQ_ITEMS = [
  {
    q: "Can our dev shop contact the end-client directly if our white-label NDA strictly forbids it?",
    a: "Directly cold-emailing or soliciting the end-client without formal legal framing can expose your agency to counterclaims of breach of contract or tortious interference. However, an NDA cannot be used as an instrument of fraud to shelter non-payment. Under Section 19 of the Copyright Act, 1957, if the prime agency has not paid you, copyright title in the software code never transferred to them—meaning they have transferred an unencumbered IP title they do not possess. An advocate demand notice can formally place the prime agency on 10 days notice that continued deployment constitutes copyright infringement under Section 51, and that failure to clear the invoice will compel naming the end-client as a co-respondent and necessary party in an infringement suit.",
  },
  {
    q: "Does our dev shop own the software copyright if we signed a white-label 'Work for Hire' contract?",
    a: "Under Indian copyright law, the 'Work Made for Hire' doctrine under Section 17(c) of the Copyright Act, 1957 applies strictly to bona fide employer-employee contracts of service. Between independent corporate entities (a dev shop and a prime agency), the relationship is a 'contract for services.' In such arrangements, the dev shop remains the initial copyright author. Any assignment of copyright to the prime agency is governed by Section 19, which requires a signed writing and is legally conditional on payment of agreed consideration. If the prime agency defaults, the assignment fails for failure of consideration, and copyright ownership remains vested in the dev shop.",
  },
  {
    q: "Is a 'Paid-When-Paid' or 'Back-to-Back' payment clause legally enforceable in India?",
    a: "Under Indian contract law, courts interpret 'paid-when-paid' clauses as timing mechanisms (providing a reasonable duration for billing processing), not absolute conditions precedent ('paid-if-paid') that forfeit compensation. A prime agency cannot shift its ordinary entrepreneurial or client-insolvency risk onto a subcontractor unless explicitly conditioned with incontrovertible risk-assumption language. Crucially, if your dev shop is registered under the MSMED Act, 2006, Section 15 and Section 24 override all contrary contractual terms, making payment mandatory within 45 days of deliverable acceptance regardless of when the prime agency receives client funds.",
  },
  {
    q: "What can we do if a US or European agency hired our Indian dev shop and completely vanished?",
    a: "Cross-border recovery involves a dual-track strategy. First, we establish an immutable electronic audit trail under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA), linking the US agency's officers, domain registrations, Git commits, and end-client deployment. Second, because software copyright is protected internationally under the Berne Convention and US Copyright Act Title 17, using unpaid Indian code in US production exposes the US end-client to statutory copyright infringement damages ($750 to $30,000+ per work infringed). Serving a cross-border legal notice highlighting this defect in the prime agency's master contract almost invariably induces immediate settlement.",
  },
  {
    q: "Can we shut down AWS servers or revoke GitHub access to force the prime agency to pay?",
    a: "Caution is essential. If your dev shop hosts the staging environment or owns the GitHub organization, you are legally entitled to withhold final production deployment, source code releases, or administrative keys until payment is made. However, if you access client-owned production AWS or GCP infrastructure without explicit contractual authorization and intentionally disable live services, the prime agency may attempt to allege unauthorized data tampering under Section 43/66 of the Information Technology Act, 2000. The lawful remedy is an intellectual property lien and Section 51 copyright infringement notice, not unannounced server sabotage.",
  },
  {
    q: "How does Section 43B(h) of the Income Tax Act help recover dues from Indian prime agencies?",
    a: "If your dev shop holds an active Udyam MSME registration (Micro or Small Enterprise) and the prime agency is an Indian corporate entity, Section 43B(h) disallows the prime agency from claiming tax deductions for your software development invoice if unpaid past 45 days. This creates severe immediate corporate tax liabilities for the prime agency at the close of the financial year, alongside statutory compounding monthly interest at 3x the RBI Bank Rate under Section 16 of the MSMED Act.",
  },
  {
    q: "Can we test LegalRecovery.in on a single ₹5 Lakh–₹25 Lakh white-label dispute before onboarding larger ledgers?",
    a: "Yes. Our Self-Serve Track allows any dev shop founder or CTO to serve an advocate-vetted, high-impact statutory demand notice for ₹999 on a single delinquent prime agency. For dev shops with ongoing portfolios of subcontracted invoices across multiple agencies, our Institutional Bulk Desk provides end-to-end ledger reconciliation, multi-jurisdiction notices, and Commercial Court mediation escalation.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  image: [`${SITE_URL}/blog_money_recovery.png`],
  datePublished: "2026-11-16T10:00:00+05:30",
  dateModified: "2026-11-16T12:30:00+05:30",
  author: {
    "@type": "Person",
    name: LEGAL_REVIEWER.name,
    jobTitle: LEGAL_REVIEWER.role,
    worksFor: {
      "@type": "Organization",
      name: "AMA Legal Solutions",
      url: "https://www.amalegalsolutions.com",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PAGE_URL}`,
  },
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Recover Unpaid Software Invoices from White-Label Prime Agencies",
  description:
    "A 5-stage legal escalation protocol for subcontracted dev shops to pierce the NDA shield, enforce copyright liens under Section 19 of the Copyright Act, and recover outstanding software milestone payments.",
  step: [
    {
      "@type": "HowToStep",
      name: "Stage 1: Repository & Subcontract Telemetry Audit",
      text: "Preserve immutable electronic evidence under Section 63 BSA 2023, including Git commit logs, PGP signatures, Jira sprint sign-offs, and live DNS/app store deployments.",
    },
    {
      "@type": "HowToStep",
      name: "Stage 2: Conditional Assignment Failure Assessment",
      text: "Audit the white-label subcontract agreement to establish that copyright assignment was conditional on full payment under Section 19 of the Copyright Act, 1957.",
    },
    {
      "@type": "HowToStep",
      name: "Stage 3: Advocate Notice of IP Defect & Statutory Demand",
      text: "Serve a formal 10-day demand notice putting the prime agency on notice of copyright infringement liability and breach of their end-client IP warranty.",
    },
    {
      "@type": "HowToStep",
      name: "Stage 4: MSMED Section 18 Filing & Third-Party Notice",
      text: "Initiate MSEFC conciliation or pre-institution mediation under Section 12A of the Commercial Courts Act, naming the commercial reality of end-client usage.",
    },
    {
      "@type": "HowToStep",
      name: "Stage 5: Commercial Court Order 38 Injunction & Receivership",
      text: "File an interim attachment application before judgment under Order XXXVIII Rule 5 of the CPC to freeze the prime agency's client receivables.",
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
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
      name: "Industries",
      item: `${SITE_URL}/industries`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "IT & SaaS Recovery",
      item: `${SITE_URL}/industries/it-saas-software-recovery`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "White-Label Subcontractor Recovery",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

export default function WhiteLabelSubcontractorRecoveryPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>&sect;6.5 &bull; IND-05 &bull; IT Services &amp; Subcontractor Recovery</span>
            <span className="text-slate-500">&bull;</span>
            <span>Archetype G1 Operational Playbook</span>
          </div>

          {/* Exact H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Statutory Ruling
            </span>
            Under Section 19 of the Copyright Act, 1957, software copyright assignment is legally conditional upon the payment of agreed consideration. When a prime agency collects from the enterprise client and withholds subcontractor dues, the prime agency cannot convey valid intellectual property title. The prime agency stands in material breach of its own IP warranties to the end-client. Explore our foundational{" "}
            <Link
              href="/industries/it-saas-software-recovery"
              className="text-red-400 hover:text-red-300 underline font-semibold transition-colors"
            >
              IT &amp; SaaS Recovery Hub
            </Link>{" "}
            to dismantle invalid NDA gags, assert statutory liens, and enforce recovery under the MSMED Act, 2006.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-3 bg-slate-900/60 rounded-xl border border-white/5">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">Statutory Hook</p>
              <p className="text-sm sm:text-base md:text-lg font-black text-slate-100 mt-1">Copyright Act s.19</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Conditional IP Assignment</p>
            </div>
            <div className="p-3 bg-slate-900/60 rounded-xl border border-white/5">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">Payment Override</p>
              <p className="text-sm sm:text-base md:text-lg font-black text-emerald-400 mt-1">MSMED Act s.15 &amp; 24</p>
              <p className="text-[11px] text-slate-400 mt-0.5">45-Day Statutory Cap</p>
            </div>
            <div className="p-3 bg-slate-900/60 rounded-xl border border-white/5">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">Compounding Interest</p>
              <p className="text-sm sm:text-base md:text-lg font-black text-amber-400 mt-1">3x RBI Bank Rate</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Mandatory Monthly Rest</p>
            </div>
            <div className="p-3 bg-slate-900/60 rounded-xl border border-white/5">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">Legal Leverage</p>
              <p className="text-sm sm:text-base md:text-lg font-black text-red-400 mt-1">End-Client IP Defect</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Section 51 Contributory Infringement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs Component */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Industries", href: "/industries" },
              { label: "IT & SaaS Recovery", href: "/industries/it-saas-software-recovery" },
              { label: "White-Label Subcontractor Recovery", href: PAGE_URL },
            ]}
          />
        </div>

        {/* 2-Column Split */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Column: Sticky Sidebar TOC */}
          <WhiteLabelRecoveryTableOfContents />

          {/* Right Column: Main Content Stream */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The White-Label Margin Squeeze */}
            <section
              id="heading-white-label-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  The White-Label Margin Squeeze: Why Prime Agencies Ghost Indian Dev Shops
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                <p>
                  In the global technology supply chain, thousands of tier-2 Indian software development boutiques, mobile app studios, and specialized AI/cloud agencies located in cities such as Pune, Ahmedabad, Indore, Jaipur, Kochi, and Bengaluru operate as the invisible engineering engine for prime agencies in the United States, the United Kingdom, Singapore, and Tier-1 Indian metros (Mumbai, Bengaluru, Gurugram). Under typical white-label arrangements, the prime agency pitches, prices, and bills the Fortune 500 or venture-backed enterprise end-client at premium billing rates ($100–$180/hour or fixed ₹75 Lakh–₹2 Crore milestones), while subcontracting the entire technical architecture, source code development, and quality assurance to an Indian dev shop at back-office margins.
                </p>
                <p>
                  This commercial model operates smoothly until the final deliverables are handed over. Once Release Candidate 1.0 is deployed, user acceptance testing (UAT) is concluded, and the prime agency secures full payment from the end-client, an alarming commercial failure mode frequently occurs: <strong>the prime agency defaults, delays, or completely ghosts the subcontracted dev shop</strong>.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 my-4">
                  <p className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                    The 3 Pretexts Exploited by Delinquent Prime Agencies
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-600">
                    <li className="bg-white p-3 rounded-lg border border-slate-200">
                      <strong className="text-red-600 block mb-1">1. The NDA Gag Threat</strong>
                      Brandishing reciprocal Non-Disclosure Agreements and non-solicitation clauses to intimidate the dev shop into silence under threat of multi-crore damages.
                    </li>
                    <li className="bg-white p-3 rounded-lg border border-slate-200">
                      <strong className="text-amber-600 block mb-1">2. Phantom Back-to-Back</strong>
                      Falsely claiming the end-client withheld milestone funds due to budgetary delays, while refusing to provide bank proof or dispute documentation.
                    </li>
                    <li className="bg-white p-3 rounded-lg border border-slate-200">
                      <strong className="text-slate-900 block mb-1">3. Artificial Defect Loops</strong>
                      Passing off unbudgeted client scope revisions and feature expansions as &quot;subcontractor bugs&quot; to justify withholding the final 30%–40% milestone.
                    </li>
                  </ul>
                </div>

                <p>
                  Dev shop founders mistakenly assume they are powerless because of the signed white-label NDA. The judicial reality is the exact opposite. By withholding payment, the prime agency has fundamentally breached the subcontract, triggering failure of copyright assignment under Section 19 of the Copyright Act, 1957. This leaves the prime agency legally exposed to fraud, breach of its own master services agreement (MSA) with the end-client, and statutory copyright infringement.
                </p>
              </div>
            </section>

            {/* Section 2: 5-Stage Escalation Protocol (SVG Workflow + Mobile Cards) */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  5-Stage White-Label Escalation Protocol: From Default to Debt &amp; IP Recovery
                </h2>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                When a prime agency stops responding to billing inquiries or asserts a bad-faith NDA defense, informal messaging must immediately cease. Subcontractors must transition to an evidence-backed statutory escalation protocol designed to dismantle the prime agency&apos;s leverage without violating trade secret covenants.
              </p>

              {/* Desktop SVG Workflow Flowchart */}
              <div className="hidden md:block w-full bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-xl mb-6">
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4 text-center">
                  Statutory Escalation Architecture for White-Label Subcontracted Debt
                </p>
                <svg
                  viewBox="0 0 900 240"
                  className="w-full h-auto"
                  width="900"
                  height="240"
                  aria-label="5-Stage Subcontractor Legal Recovery Flowchart"
                >
                  <defs>
                    <linearGradient id="stepGradRed" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#DC2626" />
                      <stop offset="100%" stopColor="#991B1B" />
                    </linearGradient>
                    <linearGradient id="stepGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E293B" />
                      <stop offset="100%" stopColor="#0F172A" />
                    </linearGradient>
                  </defs>

                  {/* Stage 1 */}
                  <g transform="translate(10, 20)">
                    <rect width="160" height="180" rx="12" fill="url(#stepGradDark)" stroke="#334155" strokeWidth="2" />
                    <circle cx="28" cy="28" r="14" fill="#DC2626" />
                    <text x="28" y="32" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">1</text>
                    <text x="20" y="65" fill="#F8FAFC" fontSize="13" fontWeight="bold">BSA s.63 Audit</text>
                    <text x="20" y="88" fill="#94A3B8" fontSize="10">Git commits &amp; PGP logs</text>
                    <text x="20" y="106" fill="#94A3B8" fontSize="10">Jira sign-offs &amp; SOW</text>
                    <text x="20" y="124" fill="#94A3B8" fontSize="10">Staging deployment logs</text>
                    <rect x="15" y="145" width="130" height="24" rx="6" fill="#1E293B" stroke="#475569" />
                    <text x="80" y="161" fill="#38BDF8" fontSize="9" fontWeight="bold" textAnchor="middle">Immutable Telemetry</text>
                  </g>

                  {/* Arrow 1 */}
                  <path d="M 175 110 L 185 110" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Stage 2 */}
                  <g transform="translate(190, 20)">
                    <rect width="160" height="180" rx="12" fill="url(#stepGradDark)" stroke="#334155" strokeWidth="2" />
                    <circle cx="28" cy="28" r="14" fill="#DC2626" />
                    <text x="28" y="32" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">2</text>
                    <text x="20" y="65" fill="#F8FAFC" fontSize="13" fontWeight="bold">Copyright s.19</text>
                    <text x="20" y="88" fill="#94A3B8" fontSize="10">Conditional assignment</text>
                    <text x="20" y="106" fill="#94A3B8" fontSize="10">Payment failure proof</text>
                    <text x="20" y="124" fill="#94A3B8" fontSize="10">IP retention notice</text>
                    <rect x="15" y="145" width="130" height="24" rx="6" fill="#1E293B" stroke="#475569" />
                    <text x="80" y="161" fill="#F87171" fontSize="9" fontWeight="bold" textAnchor="middle">IP Title Voided</text>
                  </g>

                  {/* Arrow 2 */}
                  <path d="M 355 110 L 365 110" stroke="#DC2626" strokeWidth="2" />

                  {/* Stage 3 */}
                  <g transform="translate(370, 20)">
                    <rect width="160" height="180" rx="12" fill="url(#stepGradDark)" stroke="#DC2626" strokeWidth="2" />
                    <circle cx="28" cy="28" r="14" fill="#DC2626" />
                    <text x="28" y="32" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">3</text>
                    <text x="20" y="65" fill="#F8FAFC" fontSize="13" fontWeight="bold">Advocate Notice</text>
                    <text x="20" y="88" fill="#94A3B8" fontSize="10">10-Day statutory demand</text>
                    <text x="20" y="106" fill="#94A3B8" fontSize="10">Breach of IP warranty</text>
                    <text x="20" y="124" fill="#94A3B8" fontSize="10">Third-party joinder warning</text>
                    <rect x="15" y="145" width="130" height="24" rx="6" fill="#450A0A" stroke="#DC2626" />
                    <text x="80" y="161" fill="#FCA5A5" fontSize="9" fontWeight="bold" textAnchor="middle">Maximum Leverage</text>
                  </g>

                  {/* Arrow 3 */}
                  <path d="M 535 110 L 545 110" stroke="#DC2626" strokeWidth="2" />

                  {/* Stage 4 */}
                  <g transform="translate(550, 20)">
                    <rect width="160" height="180" rx="12" fill="url(#stepGradDark)" stroke="#334155" strokeWidth="2" />
                    <circle cx="28" cy="28" r="14" fill="#DC2626" />
                    <text x="28" y="32" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">4</text>
                    <text x="20" y="65" fill="#F8FAFC" fontSize="13" fontWeight="bold">MSMED s.18 Filing</text>
                    <text x="20" y="88" fill="#94A3B8" fontSize="10">Samadhaan conciliation</text>
                    <text x="20" y="106" fill="#94A3B8" fontSize="10">3x RBI compound rest</text>
                    <text x="20" y="124" fill="#94A3B8" fontSize="10">IT Act s.43B(h) freeze</text>
                    <rect x="15" y="145" width="130" height="24" rx="6" fill="#1E293B" stroke="#475569" />
                    <text x="80" y="161" fill="#4ADE80" fontSize="9" fontWeight="bold" textAnchor="middle">Statutory Mandate</text>
                  </g>

                  {/* Arrow 4 */}
                  <path d="M 715 110 L 725 110" stroke="#DC2626" strokeWidth="2" />

                  {/* Stage 5 */}
                  <g transform="translate(730, 20)">
                    <rect width="160" height="180" rx="12" fill="url(#stepGradRed)" stroke="#EF4444" strokeWidth="2" />
                    <circle cx="28" cy="28" r="14" fill="#111827" />
                    <text x="28" y="32" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">5</text>
                    <text x="20" y="65" fill="#FFFFFF" fontSize="13" fontWeight="bold">Commercial Court</text>
                    <text x="20" y="88" fill="#FEE2E2" fontSize="10">Order 38 Rule 5 attach</text>
                    <text x="20" y="106" fill="#FEE2E2" fontSize="10">Order 37 Summary Suit</text>
                    <text x="20" y="124" fill="#FEE2E2" fontSize="10">Receivership of client funds</text>
                    <rect x="15" y="145" width="130" height="24" rx="6" fill="#7F1D1D" stroke="#F87171" />
                    <text x="80" y="161" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">Asset Attachment</text>
                  </g>
                </svg>
              </div>

              {/* Mobile Stacked Cards for Escalation Protocol */}
              <div className="md:hidden space-y-3 mb-6">
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">1</span>
                    <p className="font-bold text-sm text-slate-100">BSA 2023 s.63 Electronic Telemetry Audit</p>
                  </div>
                  <p className="text-xs text-slate-300">
                    Export immutable Git commit logs with developer PGP signatures, Jira task sprint sign-offs, staging server deployment records, and wire transfer ledgers.
                  </p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">2</span>
                    <p className="font-bold text-sm text-slate-100">Copyright Act s.19 Conditional IP Revocation</p>
                  </div>
                  <p className="text-xs text-slate-300">
                    Audit the subcontract to establish that copyright assignment was conditional upon payment. When payment fails, the prime agency possesses zero transferable title to the end-client.
                  </p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">3</span>
                    <p className="font-bold text-sm text-slate-100">Advocate Notice of IP Defect &amp; Statutory Demand</p>
                  </div>
                  <p className="text-xs text-slate-300">
                    Issue a 10-day advocate demand notice warning that continuing to license or deploy unpaid code constitutes contributory copyright infringement under Section 51, compelling third-party joinder.
                  </p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">4</span>
                    <p className="font-bold text-sm text-slate-100">MSMED Act s.18 Statutory Conciliation &amp; s.43B(h)</p>
                  </div>
                  <p className="text-xs text-slate-300">
                    Lodge statutory reference before the MSEFC for compounding 3x RBI interest and trigger Section 43B(h) income tax disallowance against the Indian prime agency.
                  </p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">5</span>
                    <p className="font-bold text-sm text-slate-100">Commercial Court Order XXXVIII Rule 5 Asset Freeze</p>
                  </div>
                  <p className="text-xs text-slate-300">
                    File pre-institution mediation under Section 12A of the Commercial Courts Act, 2015, coupled with urgent applications to attach prime agency client bank receivables before judgment.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Statutory Recovery Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Enforcement Matrix: Subcontractor Protections Under Indian Law
                </h2>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                Subcontracted tech vendors are protected by a layered statutory mesh. The table below delineates the primary statutory instruments, procedural triggers, limitation windows, and recovery remedies available against defaulting prime agencies.
              </p>

              {/* Responsive Dark Header Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-800 shadow-sm">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3 px-3 sm:px-4 font-bold border-b border-slate-800">Statutory Enactment</th>
                      <th className="py-3 px-3 sm:px-4 font-bold border-b border-slate-800">Applicable Section</th>
                      <th className="py-3 px-3 sm:px-4 font-bold border-b border-slate-800">Subcontractor Remedy</th>
                      <th className="py-3 px-3 sm:px-4 font-bold border-b border-slate-800">Limitation / Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-3 sm:px-4 font-semibold text-slate-900">
                        Copyright Act, 1957
                      </td>
                      <td className="py-3 px-3 sm:px-4 font-mono text-[#DC2626] font-bold">
                        Section 19(1) &amp; (2)
                      </td>
                      <td className="py-3 px-3 sm:px-4">
                        Assignment of copyright fails due to non-payment of consideration; prime agency has no valid IP title to convey to end-client.
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-600">
                        Immediate upon payment default; 3-year limitation for civil suits.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-3 sm:px-4 font-semibold text-slate-900">
                        Copyright Act, 1957
                      </td>
                      <td className="py-3 px-3 sm:px-4 font-mono text-[#DC2626] font-bold">
                        Section 51 &amp; Section 55
                      </td>
                      <td className="py-3 px-3 sm:px-4">
                        Continued commercial deployment or distribution of unpaid code constitutes copyright infringement; civil injunction &amp; statutory damages.
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-600">
                        3 years from date of continuing infringing deployment.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-3 sm:px-4 font-semibold text-slate-900">
                        MSMED Act, 2006
                      </td>
                      <td className="py-3 px-3 sm:px-4 font-mono text-[#DC2626] font-bold">
                        Section 15, 16 &amp; 24
                      </td>
                      <td className="py-3 px-3 sm:px-4">
                        Overrides contrary contract terms; mandates payment within 45 days; imposes 3x RBI Bank Rate compounding monthly interest.
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-600">
                        Day 46 from deliverable acceptance; conciliation via MSEFC.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-3 sm:px-4 font-semibold text-slate-900">
                        Indian Contract Act, 1872
                      </td>
                      <td className="py-3 px-3 sm:px-4 font-mono text-[#DC2626] font-bold">
                        Section 39 &amp; Section 73
                      </td>
                      <td className="py-3 px-3 sm:px-4">
                        Anticipatory breach of contract upon prime agency refusing payment; dev shop entitled to terminate services and claim full damages.
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-600">
                        3 years from breach under Article 55 of Limitation Act, 1963.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-3 sm:px-4 font-semibold text-slate-900">
                        Indian Contract Act, 1872
                      </td>
                      <td className="py-3 px-3 sm:px-4 font-mono text-[#DC2626] font-bold">
                        Section 70 (Quantum Meruit)
                      </td>
                      <td className="py-3 px-3 sm:px-4">
                        Compensation for unbudgeted client revisions and engineering change requests rendered non-gratuitously.
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-600">
                        3 years from date work was performed.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-3 sm:px-4 font-semibold text-slate-900">
                        Commercial Courts Act, 2015
                      </td>
                      <td className="py-3 px-3 sm:px-4 font-mono text-[#DC2626] font-bold">
                        s.2(1)(c)(xviii) &amp; s.12A
                      </td>
                      <td className="py-3 px-3 sm:px-4">
                        Software &amp; IT development classified as Commercial Dispute; mandatory pre-institution mediation with urgent interim relief exceptions.
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-600">
                        Pecuniary floor &ge; &rupee;3 Lakh; 3-month mediation window.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-3 sm:px-4 font-semibold text-slate-900">
                        Code of Civil Procedure, 1908
                      </td>
                      <td className="py-3 px-3 sm:px-4 font-mono text-[#DC2626] font-bold">
                        Order XXXVIII Rule 5
                      </td>
                      <td className="py-3 px-3 sm:px-4">
                        Attachment before judgment: Court freezes prime agency&apos;s client bank receivables to prevent asset siphoning.
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-600">
                        Urgent ex-parte or inter-partes application upon showing disposal risk.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 Subcontractor Failure Scenarios: Deconstruct Agency Defenses
                </h2>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                Explore the four most common commercial failure modes encountered by Indian software subcontractors, and discover the exact statutory counter-arguments to dissolve them.
              </p>

              {/* Interactive Scenario Tabs Component */}
              <WhiteLabelScenarioTabs />
            </section>

            {/* Section 5: The Copyright Act s.19 IP Warranty Void */}
            <section
              id="heading-copyright-ip-warranty"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Copyright Act s.17/19: Why Unpaid Code Voids Prime Agency IP Warranties
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                <p>
                  The cornerstone of software subcontractor recovery in India lies in intellectual property jurisprudence. In standard white-label contracts, prime agencies include sweeping assignment language: <em>&quot;The Subcontractor hereby assigns all right, title, and interest, including all copyright and patent rights, in all deliverables to the Prime Agency.&quot;</em> Prime agencies assume this clause grants them immediate and absolute ownership of the source code.
                </p>

                <div className="bg-red-50/80 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl">
                  <p className="text-xs sm:text-sm font-bold text-red-900 uppercase tracking-wider mb-1.5">
                    The Statutory Fallacy of Premature IP Assignment
                  </p>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    Under Indian copyright jurisprudence, an independent dev shop is not an employee under Section 17(c) of the Copyright Act, 1957. The engagement is a &quot;contract for services,&quot; establishing the subcontracted dev shop as the initial author and first owner of the copyright. Under Section 19(1) and Section 19(2), no assignment of copyright is valid unless it is in writing and signed by the assignor, explicitly specifying the rights assigned and the consideration payable.
                  </p>
                </div>

                <p>
                  In contract law, consideration is an essential condition precedent. An agreement to assign intellectual property in exchange for financial compensation is legally conditional. <strong>If the prime agency fails or refuses to pay the agreed consideration, the assignment fails for total failure of consideration.</strong> As affirmed by Indian High Courts, ownership of the copyright does not pass to the assignee until consideration has been fully discharged.
                </p>
                <p>
                  This statutory reality creates devastating commercial consequences for the prime agency:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      Material Breach of Prime MSA Warranty
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      In virtually every enterprise master services agreement, the prime agency warrants that all software code delivered to the end-client is &quot;original, unencumbered, free of third-party liens, and fully owned.&quot; Because the prime agency has not paid the dev shop, that warranty is legally false, exposing the prime agency to catastrophic indemnity claims from its own enterprise client.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      Section 51 Contributory Infringement
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Deploying, licensing, or commercializing software without a valid copyright assignment constitutes copyright infringement under Section 51 of the Copyright Act. Both the prime agency and any party commercially exploiting the unpaid code can be restrained by an injunction under Section 55.
                    </p>
                  </div>
                </div>

                <p>
                  When an advocate demand notice clearly highlights that the prime agency has transferred a defective, unassigned IP title to their enterprise client, the prime agency realizes that stalling payment jeopardizes their most lucrative client relationship. In over 80% of cases, this leverage prompts immediate settlement negotiations. Also consult our analysis on{" "}
                  <Link
                    href="/copyright-not-transferred-until-paid-freelancer"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    copyright retention until full payment
                  </Link>{" "}
                  for deeper case law precedent.
                </p>
              </div>
            </section>

            {/* Section 6: Piercing the NDA Shield Lawfully */}
            <section
              id="heading-piercing-nda-shield"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Piercing the NDA Shield Lawfully: Legal Strategy Without Tortious Liability
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                <p>
                  When dev shop founders realize the prime agency has pocketed client funds, their immediate instinct is often to email the enterprise end-client directly or post on LinkedIn. <strong>This is a dangerous misstep.</strong> Sending informal, uncoordinated messages directly to the client allows the prime agency to file an emergency suit for breach of NDA, trade secret misappropriation, and tortious interference with contractual relations.
                </p>
                <p>
                  To legally dismantle the NDA shield, dev shops must execute a structured, advocate-led strategy that relies on statutory rights rather than informal communications:
                </p>

                <div className="space-y-3 my-4">
                  <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                      A
                    </span>
                    <div>
                      <p className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                        Section 28 of the Indian Contract Act: Restraints on Legal Proceedings Are Void
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        An NDA cannot legally extinguish your constitutional right to enforce debts or protect intellectual property. Section 28 renders any contract clause void to the extent it restricts a party from enforcing their rights in an ordinary tribunal or court. A confidentiality clause cannot be cited to prevent you from filing a lawsuit or naming relevant parties.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                      B
                    </span>
                    <div>
                      <p className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                        The Doctrine of &quot;Clean Hands&quot; &amp; Specific Relief Act s.41(h)
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        A party in fundamental breach of contract cannot seek equitable relief. The prime agency cannot obtain an injunction against your dev shop to enforce an NDA when the prime agency itself is in willful default of its payment covenants. Under Section 41(h) of the Specific Relief Act, 1963, an injunction cannot be granted when an equally efficacious relief is available through payment of contractual dues.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                      C
                    </span>
                    <div>
                      <p className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                        Joining the End-Client as a Necessary Party in Section 51 Copyright Proceedings
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Instead of sending an informal complaint, your legal counsel serves a formal 10-day notice on the prime agency. The notice states that unless the invoice is resolved within 10 days, your agency will initiate an intellectual property infringement suit under Section 51 and Section 55 of the Copyright Act, naming the end-client as a co-defendant and necessary party who is actively utilizing unassigned software code. This places the onus on the prime agency to pay immediately to prevent their client from receiving a formal court summons.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  For cross-border relationships involving overseas prime agencies, review our specialized guide on{" "}
                  <Link
                    href="/legal-notice-to-international-client-unpaid-invoice-recovery"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    serving legal notices to international clients
                  </Link>{" "}
                  to comply with cross-border service conventions.
                </p>
              </div>
            </section>

            {/* Section 7: Defeating the "Paid-When-Paid" Defense */}
            <section
              id="heading-back-to-back-defense"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Defeating the &quot;Paid-When-Paid&quot; &amp; Back-to-Back Payment Defense
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                <p>
                  Prime agencies frequently attempt to stall payment by invoking &quot;back-to-back&quot; clauses: <em>&quot;Our client has not cleared milestone 4, and under clause 8.2 of our agreement, we only pay you when the client pays us.&quot;</em> In contract law, this defense is legally fragile for three distinct reasons:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-3">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      1. Timing vs Forfeiture
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Indian courts recognize the doctrine that &quot;pay-when-paid&quot; clauses merely define a reasonable time frame for processing payment, not an absolute risk-shifting forfeiture (&quot;pay-if-paid&quot;). After a commercially reasonable period (typically 30 to 45 days), the prime agency&apos;s obligation to pay matures unconditionally under Section 46 of the Indian Contract Act.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      2. MSMED Act Statutory Overrule
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under Section 24 of the MSMED Act, 2006, the provisions of Sections 15 to 23 have overriding effect over any contrary agreement. Under Section 15, the buyer must make payment within 45 days. Private &quot;back-to-back&quot; contract clauses cannot contract out of a mandatory Parliamentary enactment.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      3. Failure of Audit Disclosure
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      A party relying on a conditional defense must produce strict proof that the condition failed without fault on their part. If the prime agency refuses to provide certified bank statements or client correspondence proving non-payment, the court draws an adverse inference of bad faith.
                    </p>
                  </div>
                </div>

                <p>
                  When recovering ongoing engineering contractor invoices, refer to our companion playbook on{" "}
                  <Link
                    href="/it-staff-augmentation-dedicated-developer-monthly-invoice-recovery"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    IT staff augmentation monthly invoice recovery
                  </Link>{" "}
                  and our guide on{" "}
                  <Link
                    href="/software-uat-sign-off-delay-scope-creep-milestone-payment-recovery"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    software UAT sign-off delay recovery
                  </Link>{" "}
                  for milestone dispute precedents.
                </p>
              </div>
            </section>

            {/* Section 8: Worked Financial Recovery Ledger */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Recovery Ledger: Resolving a &rupee;28.50 Lakh White-Label Platform Default
                </h2>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                Consider an illustrative commercial recovery conducted for a Pune-based fintech development studio subcontracted by a Bengaluru prime agency to build a micro-lending API engine for an international bank. Below is the financial breakdown demonstrating how statutory interest and IP defect leverage achieved a 100% principal and interest settlement.
              </p>

              {/* Detailed Financial Ledger Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-800 shadow-sm mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3 px-3 sm:px-4 font-bold border-b border-slate-800">Invoice / Claim Component</th>
                      <th className="py-3 px-3 sm:px-4 font-bold border-b border-slate-800">Original Due Date</th>
                      <th className="py-3 px-3 sm:px-4 font-bold border-b border-slate-800">Default Aging</th>
                      <th className="py-3 px-3 sm:px-4 font-bold border-b border-slate-800">Principal Amount</th>
                      <th className="py-3 px-3 sm:px-4 font-bold border-b border-slate-800">MSMED 3x RBI Interest</th>
                      <th className="py-3 px-3 sm:px-4 font-bold border-b border-slate-800">Total Enforceable Claim</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700 bg-white font-mono text-xs">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-3 sm:px-4 font-semibold text-slate-900 font-sans">
                        Milestone 3: Core API Engine &amp; DB Schema
                      </td>
                      <td className="py-3 px-3 sm:px-4">15 Jan 2026</td>
                      <td className="py-3 px-3 sm:px-4">305 Days</td>
                      <td className="py-3 px-3 sm:px-4">&rupee;12,50,000</td>
                      <td className="py-3 px-3 sm:px-4 text-emerald-600 font-bold">&rupee;2,26,450</td>
                      <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">&rupee;14,76,450</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-3 sm:px-4 font-semibold text-slate-900 font-sans">
                        Milestone 4: Cloud Deploy &amp; Security Audit
                      </td>
                      <td className="py-3 px-3 sm:px-4">28 Feb 2026</td>
                      <td className="py-3 px-3 sm:px-4">261 Days</td>
                      <td className="py-3 px-3 sm:px-4">&rupee;10,00,000</td>
                      <td className="py-3 px-3 sm:px-4 text-emerald-600 font-bold">&rupee;1,54,800</td>
                      <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">&rupee;11,54,800</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-3 sm:px-4 font-semibold text-slate-900 font-sans">
                        Change Order 1: Webhook Integration (Quantum Meruit)
                      </td>
                      <td className="py-3 px-3 sm:px-4">30 Mar 2026</td>
                      <td className="py-3 px-3 sm:px-4">231 Days</td>
                      <td className="py-3 px-3 sm:px-4">&rupee;6,00,000</td>
                      <td className="py-3 px-3 sm:px-4 text-emerald-600 font-bold">&rupee;82,200</td>
                      <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">&rupee;6,82,200</td>
                    </tr>
                    <tr className="bg-slate-900 text-white font-bold">
                      <td className="py-3 px-3 sm:px-4 font-sans uppercase tracking-wider">
                        Consolidated Subcontractor Claim
                      </td>
                      <td className="py-3 px-3 sm:px-4 font-sans text-slate-400">Total Ledgers</td>
                      <td className="py-3 px-3 sm:px-4 font-sans text-slate-400">Aging Average</td>
                      <td className="py-3 px-3 sm:px-4 text-amber-400">&rupee;28,50,000</td>
                      <td className="py-3 px-3 sm:px-4 text-emerald-400">&rupee;4,63,450</td>
                      <td className="py-3 px-3 sm:px-4 text-white text-sm">&rupee;33,13,450</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Settlement Anatomy Box */}
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 sm:p-5">
                <p className="text-xs sm:text-sm font-bold text-emerald-950 uppercase tracking-wider mb-2">
                  Resolution Protocol &amp; Settlement Outcome
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p>
                    <strong>1. Action Initiated:</strong> Issued an Advocate Demand Notice asserting Section 19 copyright retention, warning of third-party IP defect notices to the international bank end-client within 10 days, and calculating compounding interest under MSMED Act Section 16.
                  </p>
                  <p>
                    <strong>2. Response from Prime Agency:</strong> Within 48 hours of service, the prime agency&apos;s managing director requested emergency conciliation, confirming that the end-client had in fact approved all deliverables months earlier.
                  </p>
                  <p>
                    <strong>3. Final Settlement:</strong> The parties executed a formal Tripartite Settlement Deed. The prime agency paid &rupee;31,00,000 (100% of principal plus &rupee;2.5 Lakh towards statutory interest and legal costs) via RTGS within 5 banking days, in exchange for a clean, irrevocable Copyright Assignment Deed.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span>Calculate your exact statutory compound penal interest under MSMED Section 16:</span>
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-bold hover:underline"
                >
                  MSME Interest Calculator &rarr;
                </Link>
              </div>
            </section>

            {/* Section 9: BSA 2023 s.63 Evidence Dossier */}
            <section
              id="heading-bsa-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  BSA 2023 Section 63 Evidence Dossier for Subcontracted Tech Creditors
                </h2>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (which supersedes Section 65B of the Indian Evidence Act, 1872), electronic records are admissible only when supported by a valid Certificate verifying the integrity of the computer system and data trail. Subcontractors must compile the following 7-pillar electronic audit dossier:
              </p>

              {/* 7-Pillar Evidence Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      Git Commit Logs &amp; PGP Signatures
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Cryptographically verified Git commit histories, branch merges, pull request code reviews, and developer identity hashes establishing authorship of the disputed codebase.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      Jira, Slack &amp; Sprint Audit Exports
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Full exports of Jira task boards, sprint completions, Slack channels, and Google Meet transcripts showing deliverable sign-offs and prime agency approvals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      Staging &amp; CI/CD Pipeline Artifacts
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Server logs from GitHub Actions, GitLab CI, AWS CodePipeline, or staging test environments proving continuous deployment and absence of unaddressed defect notices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      White-Label MSA &amp; Signed SOWs
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The executed Master Subcontract Agreement, specific Statements of Work, change order approvals, and electronic signature logs (DocuSign/Adobe Sign).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    5
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      GST Invoices &amp; GSTR-1/GSTR-3B Filings
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Tax invoices generated and reported on the GST portal where the prime agency availed Input Tax Credit (ITC), constituting judicial admission of receipt of services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    6
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      Production CNAME &amp; WHOIS Records
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      DNS CNAME records, WHOIS data, and app store release versions establishing that the prime agency or end-client deployed your software to production without modification.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-slate-900 text-white p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-bold text-red-400">Pillar 7: The Mandatory BSA Section 63 Certificate</p>
                  <p className="text-xs text-slate-300">
                    Affidavit executed by your Chief Technology Officer or lead engineer certifying the cryptographic hash and system custody of all submitted digital records.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10: Institutional Agency Desk CTA */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Deploy Subcontractor Legal Recovery: Single Case Test or Bulk PMO Desk
                </h2>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                Choose between our agile self-serve single case notice test or activate our institutional bulk PMO recovery desk for multi-invoice subcontractor agency ledgers.
              </p>

              {/* Dual-Track B2B Action Portal Component */}
              <WhiteLabelRecoveryCTA />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions on White-Label Subcontractor Debt Recovery
                </h2>
              </div>

              <div className="space-y-4">
                {FAQ_ITEMS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-5 transition-all open:bg-white open:border-slate-300 open:shadow-xs"
                  >
                    <summary className="font-bold text-xs sm:text-sm md:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                      <span>{faq.q}</span>
                      <span className="shrink-0 w-6 h-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs group-open:rotate-180 transition-transform">
                        &darr;
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory References & Authorities */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Enactments, Government Portals &amp; Judicial References
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="font-bold text-slate-900 mb-1">Copyright Act, 1957</p>
                  <p className="mb-2">Sections 17, 19, 51 &amp; 55 governing initial authorship, conditional assignments, and infringement.</p>
                  <a
                    href="https://www.indiacode.nic.in/handle/123456789/1367"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    IndiaCode Copyright Act &rarr;
                  </a>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="font-bold text-slate-900 mb-1">MSMED Act, 2006 &amp; Samadhaan</p>
                  <p className="mb-2">Sections 15–24 establishing the 45-day payment cap and statutory compounding interest.</p>
                  <a
                    href="https://samadhaan.msme.gov.in"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    MSME Samadhaan Portal &rarr;
                  </a>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="font-bold text-slate-900 mb-1">Commercial Courts Act, 2015</p>
                  <p className="mb-2">Section 2(1)(c)(xviii) and Section 12A pre-institution commercial mediation procedures.</p>
                  <a
                    href="https://www.indiacode.nic.in/handle/123456789/2146"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    IndiaCode Commercial Courts Act &rarr;
                  </a>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="font-bold text-slate-900 mb-1">Bharatiya Sakshya Adhiniyam, 2023</p>
                  <p className="mb-2">Section 63 technical admissibility standards for electronic source code and cloud telemetry.</p>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    IndiaCode BSA 2023 &rarr;
                  </a>
                </div>
              </div>

              {/* Related Internal Spoke Cards */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Related IT &amp; Software Recovery Spoke Guides
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Link
                    href="/b2b-saas-annual-subscription-early-cancellation-unpaid-invoice-recovery"
                    className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors text-xs"
                  >
                    <p className="font-bold text-slate-900 mb-1">B2B SaaS Annual Early Termination</p>
                    <p className="text-slate-600">Contractual acceleration &amp; ACV recovery.</p>
                  </Link>
                  <Link
                    href="/software-uat-sign-off-delay-scope-creep-milestone-payment-recovery"
                    className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors text-xs"
                  >
                    <p className="font-bold text-slate-900 mb-1">Software UAT Sign-Off Delays</p>
                    <p className="text-slate-600">Scope creep segregation &amp; deemed acceptance.</p>
                  </Link>
                  <Link
                    href="/it-staff-augmentation-dedicated-developer-monthly-invoice-recovery"
                    className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors text-xs"
                  >
                    <p className="font-bold text-slate-900 mb-1">IT Staff Augmentation Dues</p>
                    <p className="text-slate-600">Timesheet disputes &amp; C2C vendor recovery.</p>
                  </Link>
                </div>
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
