import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CoachingFranchiseTableOfContents from "./CoachingFranchiseTableOfContents";
import CoachingFranchiseScenarioTabs from "./CoachingFranchiseScenarioTabs";
import CoachingFranchiseCTA from "./CoachingFranchiseCTA";

export const revalidate = 86400;

const PAGE_PATH = "/coaching-institute-franchise-royalty-and-installment-bounce-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;
const EXACT_H1 =
  "Coaching Franchisee Collected Full Student Fees, Defaulted on Brand Royalty & Changed Its Signboard Overnight? Franchisor Legal Playbook";
const META_TITLE = "Coaching Franchisee Royalty Default & Poaching Recovery";
const META_DESC =
  "Navigate coaching-chain franchise royalty defaults, test-series IP theft, faculty mass-poaching & MoE 2024 pro-rata compliant installment recovery.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESC,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESC,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("Coaching Institute Franchise Royalty and Fee Recovery Playbook"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESC,
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
    q: "What is the fastest legal remedy when a coaching franchisee paints over our signboard overnight?",
    a: "File an urgent Section 9 petition under the Arbitration and Conciliation Act, 1996 before the designated Commercial Court (invoking Section 2(1)(c)(ix) & (xvii) of the Commercial Courts Act, 2015). Courts routinely grant ex-parte ad-interim injunctions restraining trademark passing off, directing removal of deceptively similar branding, and appointing a Local Commissioner to inventory proprietary study kits and student fee ledgers.",
  },
  {
    q: "Can a franchisor stop a defaulting coaching centre from poaching faculty and using our test series?",
    a: "Yes, provided you frame the relief around intellectual property and active-term exclusivity rather than post-termination non-competes. While post-employment restraints face scrutiny under Section 27 of the Indian Contract Act, 1872, Section 55 and Section 63 of the Copyright Act, 1957 and Section 43/66 of the IT Act, 2000 empower franchisors to obtain immediate search-and-seizure injunctions against pirated test series, DPPs, LMS question banks, and stolen student CRM databases.",
  },
  {
    q: "How do the Ministry of Education (MoE) 2024 Coaching Guidelines affect student installment bounce recovery?",
    a: "The January 2024 MoE Guidelines require coaching centres to refund unearned fees on a pro-rata basis within 10 days if a student withdraws mid-course. However, they do NOT extinguish liability for tuition already delivered or study material already handed over. By reconciling biometric/LMS attendance and restricting NI Act s.138 or PSS Act s.25 notices strictly to earned pro-rata arrears, coaching chains recover unpaid installments without triggering consumer or regulatory backlash.",
  },
  {
    q: "Can we prosecute a franchisee under Section 138 NI Act if their security royalty PDC bounces?",
    a: "Yes. Under settled Supreme Court jurisprudence (including Sripati Singh v. State of Jharkhand), a post-dated or security cheque issued against a crystallized contractual liability—such as minimum guaranteed royalty or invoiced study-material supply—triggers Section 138 of the NI Act, 1881 upon dishonour. You must serve a statutory demand notice within 30 days of the bank return memo and can seek 20% interim compensation under Section 143A.",
  },
  {
    q: "Should a national coaching chain sue in a regular Civil Court or a Commercial Court?",
    a: "Always file in the Commercial Court where the specified value of the franchise royalty, IP damages, and study-kit arrears meets the statutory threshold (₹3 Lakh in most states) under Section 2(1)(c)(ix) (franchising/licensing) and Section 2(1)(c)(xvii) (intellectual property) of the Commercial Courts Act, 2015. Where urgent interim relief is sought—such as restraining an overnight rebrand—Section 12A pre-institution mediation is bypassed.",
  },
  {
    q: "What if a defaulting franchisee is a registered society or runs a government-affiliated skill batch?",
    a: "Verify the exact legal entity on the Franchise Agreement before issuing notices. If the partner operates as a Registered Society or Public Trust, sue through its President/Secretary under Section 6 of the Societies Registration Act, 1860. If the centre also holds state skill-development or scholarship receivables that are stalled, a mandatory two-month notice under Section 80 CPC is required before impleading government departments.",
  },
  {
    q: "How does LegalRecovery.in handle both a ₹60 Lakh franchisee default and 400 bounced student NACH mandates?",
    a: "You can test a single high-value franchise termination, Section 21 arbitration, and NI s.138 notice via our ₹999 self-serve advocate desk, or upload a CSV of 10 to 10,000+ bounced student e-NACH/PDC installments and defaulting centres through our Institutional Representee Portal for automated Email, WhatsApp, and Speed Post RPAD dispatch.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "The Commercial Courts Act, 2015 (Section 2(1)(c)(ix) Franchise & (xvii) IP Disputes, Section 12A Urgent Relief) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "The Arbitration and Conciliation Act, 1996 (Section 9 Interim Injunction & Section 21 Invocation) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "The Copyright Act, 1957 (Sections 51, 55 & 63 — Study Material & Test-Series Piracy Remedies) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1367",
  },
  {
    title: "Ministry of Education (MoE) — Guidelines for Registration and Regulation of Coaching Center, January 2024",
    url: "https://www.education.gov.in/sites/upload_files/mhrd/files/Guideliens_Coaching_Centres_en.pdf",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Sections 138, 141 & 143A) & Payment and Settlement Systems Act, 2007 (Section 25) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic ERP, LMS & WhatsApp Records) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESC,
  datePublished: "2026-11-18T10:00:00+05:30",
  dateModified: "2026-11-18T10:00:00+05:30",
  mainEntityOfPage: CANONICAL_URL,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
  },
  image: `${SITE_URL}/blog_money_recovery.png`,
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "5-Stage Legal Playbook to Recover Coaching Franchise Royalty & Stop Overnight Rebranding",
  description:
    "Step-by-step Commercial Court, Section 9 Arbitration, Copyright IP seizure, and MoE 2024 compliant installment recovery workflow for Indian coaching chains.",
  totalTime: "P45D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Forensic Royalty Audit & BSA 2023 s.63 Evidence Capture (Day 0–2)",
      text: "Reconcile ERP student admissions against bank escrow credits, capture geo-tagged signboard photographs, and preserve LMS download logs under Section 63 BSA 2023.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Composite Termination, IP Cease-and-Desist & Section 21/138 Notice (Day 3–7)",
      text: "Serve a formal Franchise Termination, Royalty Demand, Copyright Cease-and-Desist, and Section 21 Arbitration Invocation Notice alongside NI Act s.138 demands for dishonoured PDCs.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Urgent Section 9 Arbitration / Commercial Court Injunction (Day 8–15)",
      text: "Move the Commercial Court u/s 9 Arbitration Act and s.2(1)(c)(ix)/(xvii) Commercial Courts Act for ex-parte restraint on branding misuse, Local Commissioner inventory, and escrow freeze.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "NI Act s.138 / PSS s.25 Prosecution & 20% Interim Compensation (Day 16–45)",
      text: "File criminal complaints on dishonoured franchisee royalty cheques seeking 20% interim deposit u/s 143A, and dispatch MoE 2024 pro-rata compliant notices for earned student NACH bounces.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Arbitral Award / Order XXXVII Summary Decree & Execution (Day 45+)",
      text: "Convert crystallized royalty arrears, study-kit invoices, and liquidated IP damages into an enforceable Section 36 arbitral award or Order XXXVII CPC decree.",
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
      name: "Schools, Universities & EdTech B2B",
      item: `${SITE_URL}/industries/schools-universities-edtech-b2b-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Coaching Franchise Royalty & Fee Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function CoachingFranchiseRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Structured Data */}
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

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <span className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-17 &bull; Coaching Chain &amp; EdTech Franchise Playbook</span>
            <span className="text-red-500/70">|</span>
            <span>Commercial Courts + Arb s.9 + MoE 2024</span>
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40–60 words + inline Hub link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Part of our{" "}
            <Link
              href="/industries/schools-universities-edtech-b2b-recovery"
              className="text-red-300 underline decoration-red-400/70 underline-offset-2 hover:text-white font-semibold"
            >
              Schools, Universities &amp; EdTech B2B Recovery Hub
            </Link>
            : when a coaching franchisee diverts April batch fees, withholds 20% royalty, and rebrands overnight, franchisors must move Commercial Courts under Section 2(1)(c)(ix)/(xvii) and Arbitration Act Section 9 for immediate branding injunctions, Copyright s.55 study-material seizure, and NI s.138 / MoE 2024 pro-rata installment recovery.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2">
              <p className="text-xl sm:text-2xl font-black text-red-400">₹3 Cr+</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Typical April Admission Fee Diversion per Tier-2 Centre
              </p>
            </div>
            <div className="p-2">
              <p className="text-xl sm:text-2xl font-black text-amber-400">7–15 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Section 9 Arbitration / Commercial Court Injunction Window
              </p>
            </div>
            <div className="p-2">
              <p className="text-xl sm:text-2xl font-black text-emerald-400">20% Deposit</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Interim Compensation u/s 143A NI Act on Royalty PDCs
              </p>
            </div>
            <div className="p-2">
              <p className="text-xl sm:text-2xl font-black text-slate-100">10-Day Rule</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                MoE 2024 Pro-Rata Refund vs Earned Arrears Boundary
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "Schools, Universities & EdTech B2B",
              href: "/industries/schools-universities-edtech-b2b-recovery",
            },
            {
              label: "Coaching Franchise Royalty & Fee Recovery",
              href: PAGE_PATH,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
          {/* Left Sticky Sidebar TOC */}
          <CoachingFranchiseTableOfContents />

          {/* Main Content Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Why Rogue Coaching Franchisees Rebrand Overnight After April Admissions
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Across India&apos;s high-density test-prep hubs—Kota, Sikar, Patna, Hyderabad, Kanpur, and Delhi-NCR—national IIT-JEE, NEET, UPSC, and IELTS coaching chains face an annual, predictable cash-flow ambush. Between March and May, local franchise partners leverage the national franchisor&apos;s brand equity, ranker results, and printed study kits to enroll 300 to 600 students, collecting ₹2.5 Cr to ₹3 Cr+ in upfront tuition and installment cheques into local centre accounts.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By July or August—once the primary admission cycle closes and students are locked into the academic calendar—the defaulting franchisee stops remitting the contractual 18%–25% royalty share, withholds study-material kit invoices, and executes a coordinated overnight exit. The local operator paints over the national brand&apos;s signboard, registers a lookalike local academy, poaches star batch faculty, and continues teaching the exact same enrolled students in the exact same classrooms using pirated test-series PDFs.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Compounding this B2B franchise default is a second front: student-level installment defaults. When coaching chains offer 3-tranche Post-Dated Cheques (PDCs) or e-NACH mandates, hundreds of students stop payments mid-year citing the <strong>Ministry of Education (MoE) January 2024 Coaching Guidelines</strong>. Treating both crises with generic debt-collection letters fails. Franchisors need a dual-track legal architecture—combining Commercial Court injunctions for franchisee piracy with automated, MoE-compliant{" "}
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-[#B91C1C]"
                >
                  bulk legal recovery notice batches
                </Link>{" "}
                for earned installment arrears.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-xs sm:text-sm text-red-950">
                <strong className="font-bold text-[#DC2626]">Franchisor Cash-Trap Warning: </strong>
                Waiting until October or November for &ldquo;reconciliation meetings&rdquo; lets the rogue franchisee exhaust the academic year&apos;s cash collections and transfer lease deeds to a shell LLP. Injunctive relief under Section 9 of the Arbitration Act must be triggered within 15 days of signboard tampering or royalty default.
              </div>
            </section>

            {/* Section 2: Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Franchise Royalty, IP Piracy &amp; NACH Bounce Statutory Matrix
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A coaching chain&apos;s recovery strategy spans four distinct statutory regimes depending on whether you are pursuing the franchisee&apos;s promoter, seizing pirated test series, or enforcing student fee mandates.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Dispute Layer</th>
                      <th className="p-3.5 font-bold">Governing Statute</th>
                      <th className="p-3.5 font-bold">Core Creditor Remedy</th>
                      <th className="p-3.5 font-bold">Target Window</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Overnight Rebrand &amp; Fee Diversion
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Commercial Courts Act s.2(1)(c)(ix) &amp; Arbitration Act s.9
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Ex-parte ad-interim injunction, Local Commissioner inventory &amp; escrow/bank account attachment (bypasses s.12A mediation for urgent relief).
                      </td>
                      <td className="p-3.5 font-semibold text-emerald-700">7–15 Days</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Test-Series &amp; DPP Piracy
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Commercial Courts Act s.2(1)(c)(xvii) &amp; Copyright Act s.51, s.55, s.63
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Anton Piller search-and-seizure order for printed modules, LMS takedown, and criminal piracy FIR for commercial distribution.
                      </td>
                      <td className="p-3.5 font-semibold text-emerald-700">5–10 Days</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Faculty Poaching &amp; CRM Theft
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Contract Act s.27 (in-term) &amp; IT Act s.43 / s.66
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Injunction against inducing active-term faculty breach + criminal/civil action for unauthorized extraction of student CRM databases.
                      </td>
                      <td className="p-3.5 font-semibold text-amber-700">10–21 Days</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Royalty PDC &amp; Kit Invoice Default
                      </td>
                      <td className="p-3.5 text-slate-700">
                        NI Act s.138 / s.143A &amp; Order XXXVII CPC
                      </td>
                      <td className="p-3.5 text-slate-700">
                        30-day statutory demand, 20% interim compensation deposit u/s 143A, and Summary Suit on signed franchisee ledgers.
                      </td>
                      <td className="p-3.5 font-semibold text-emerald-700">30–45 Days</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Student Installment / e-NACH Bounce
                      </td>
                      <td className="p-3.5 text-slate-700">
                        PSS Act s.25, NI Act s.138 &amp; MoE 2024 Guidelines
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Pro-rata reconciliation separating earned tuition from unearned future quarters, followed by bulk Advocate Notices.
                      </td>
                      <td className="p-3.5 font-semibold text-emerald-700">15–30 Days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: 5-Stage Escalation Flowchart */}
            <section
              id="heading-escalation-flow"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  5-Stage Emergency Injunction &amp; Royalty Recovery Workflow
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Follow this strict 45-day operational sequence the moment a franchisee misses a royalty sweep, blocks ERP access, or alters centre signage:
              </p>

              {/* Desktop SVG Decision Flow */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-50 border border-slate-200 rounded-xl p-4">
                <svg
                  viewBox="0 0 860 230"
                  width={860}
                  height={230}
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-Stage Coaching Franchise Emergency Injunction and Royalty Recovery Workflow"
                >
                  <defs>
                    <marker
                      id="arrow-crimson"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#DC2626" />
                    </marker>
                  </defs>

                  {/* Stage 1 */}
                  <rect x="10" y="35" width="148" height="150" rx="12" fill="#0F172A" />
                  <text x="24" y="62" fill="#F87171" fontSize="11" fontWeight="700">STAGE 1 · DAY 0–2</text>
                  <text x="24" y="84" fill="#FFFFFF" fontSize="13" fontWeight="700">Forensic Capture</text>
                  <text x="24" y="106" fill="#CBD5E1" fontSize="10.5">ERP batch audit,</text>
                  <text x="24" y="122" fill="#CBD5E1" fontSize="10.5">geo-tagged signage,</text>
                  <text x="24" y="138" fill="#CBD5E1" fontSize="10.5">LMS logs &amp; BSA</text>
                  <text x="24" y="154" fill="#CBD5E1" fontSize="10.5">2023 s.63 cert.</text>
                  <line x1="158" y1="110" x2="180" y2="110" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow-crimson)" />

                  {/* Stage 2 */}
                  <rect x="184" y="35" width="148" height="150" rx="12" fill="#1E293B" />
                  <text x="198" y="62" fill="#F87171" fontSize="11" fontWeight="700">STAGE 2 · DAY 3–7</text>
                  <text x="198" y="84" fill="#FFFFFF" fontSize="13" fontWeight="700">Composite Notice</text>
                  <text x="198" y="106" fill="#CBD5E1" fontSize="10.5">Termination + IP</text>
                  <text x="198" y="122" fill="#CBD5E1" fontSize="10.5">Cease &amp; Desist +</text>
                  <text x="198" y="138" fill="#CBD5E1" fontSize="10.5">Arb s.21 &amp; NI s.138</text>
                  <text x="198" y="154" fill="#CBD5E1" fontSize="10.5">30-day demand.</text>
                  <line x1="332" y1="110" x2="354" y2="110" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow-crimson)" />

                  {/* Stage 3 */}
                  <rect x="358" y="35" width="148" height="150" rx="12" fill="#DC2626" />
                  <text x="372" y="62" fill="#FEE2E2" fontSize="11" fontWeight="700">STAGE 3 · DAY 8–15</text>
                  <text x="372" y="84" fill="#FFFFFF" fontSize="13" fontWeight="700">Sec. 9 Injunction</text>
                  <text x="372" y="106" fill="#FEF2F2" fontSize="10.5">Commercial Court</text>
                  <text x="372" y="122" fill="#FEF2F2" fontSize="10.5">urgent restraint,</text>
                  <text x="372" y="138" fill="#FEF2F2" fontSize="10.5">Local Commissioner</text>
                  <text x="372" y="154" fill="#FEF2F2" fontSize="10.5">&amp; escrow freeze.</text>
                  <line x1="506" y1="110" x2="528" y2="110" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow-crimson)" />

                  {/* Stage 4 */}
                  <rect x="532" y="35" width="148" height="150" rx="12" fill="#1E293B" />
                  <text x="546" y="62" fill="#F87171" fontSize="11" fontWeight="700">STAGE 4 · DAY 16–45</text>
                  <text x="546" y="84" fill="#FFFFFF" fontSize="13" fontWeight="700">s.138 &amp; NACH Batch</text>
                  <text x="546" y="106" fill="#CBD5E1" fontSize="10.5">20% s.143A deposit</text>
                  <text x="546" y="122" fill="#CBD5E1" fontSize="10.5">on royalty PDCs +</text>
                  <text x="546" y="138" fill="#CBD5E1" fontSize="10.5">MoE-safe student</text>
                  <text x="546" y="154" fill="#CBD5E1" fontSize="10.5">pro-rata notices.</text>
                  <line x1="680" y1="110" x2="702" y2="110" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow-crimson)" />

                  {/* Stage 5 */}
                  <rect x="706" y="35" width="144" height="150" rx="12" fill="#065F46" />
                  <text x="720" y="62" fill="#A7F3D0" fontSize="11" fontWeight="700">STAGE 5 · DAY 45+</text>
                  <text x="720" y="84" fill="#FFFFFF" fontSize="13" fontWeight="700">Award &amp; Decree</text>
                  <text x="720" y="106" fill="#D1FAE5" fontSize="10.5">Arbitral award u/s</text>
                  <text x="720" y="122" fill="#D1FAE5" fontSize="10.5">36 or Order 37</text>
                  <text x="720" y="138" fill="#D1FAE5" fontSize="10.5">execution against</text>
                  <text x="720" y="154" fill="#D1FAE5" fontSize="10.5">promoter assets.</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  { stage: "Stage 1 · Day 0–2", title: "Forensic Capture & BSA s.63", desc: "Reconcile ERP admissions, capture geo-tagged signboard photos, and lock LMS download logs." },
                  { stage: "Stage 2 · Day 3–7", title: "Composite Termination & s.21/138 Notice", desc: "Serve Franchise Termination, Copyright Cease-and-Desist, Arbitration s.21 & NI s.138 demand." },
                  { stage: "Stage 3 · Day 8–15", title: "Commercial Court s.9 Injunction", desc: "Seek ex-parte restraint on rebranding/IP piracy, Local Commissioner raid & fee escrow freeze." },
                  { stage: "Stage 4 · Day 16–45", title: "s.143A Deposit & NACH Batch", desc: "File s.138 complaints for 20% interim deposit and run MoE-compliant student arrears notices." },
                  { stage: "Stage 5 · Day 45+", title: "Section 36 Award / Order 37 Execution", desc: "Enforce final royalty, kit-supply & IP damages against franchisee corporate and promoter assets." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">{item.stage}</span>
                    <h3 className="text-sm font-extrabold text-slate-900 mt-0.5">{item.title}</h3>
                    <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4 Coaching Franchise &amp; Student Installment Failure Modes
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select the exact commercial breakdown occurring at your centre to inspect the applicable statutory weapons, action sequence, and compliance guardrails:
              </p>

              <CoachingFranchiseScenarioTabs />
            </section>

            {/* Section 5: MoE 2024 Guidelines & NACH Bounce */}
            <section
              id="heading-moe-2024"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  MoE 2024 Coaching Guidelines: Pro-Rata Refunds vs Earned Arrears
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many coaching CFOs hesitate to enforce bounced student installment PDCs or e-NACH mandates because parents threaten complaints citing the <strong>Ministry of Education (MoE) Guidelines for Registration and Regulation of Coaching Center (January 2024)</strong>. Understanding the exact legal boundary between <em>unearned future fees</em> and <em>earned past tuition</em> eliminates this paralysis.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 space-y-2">
                  <h3 className="text-sm font-extrabold text-emerald-900">
                    Lawfully Recoverable (Earned Arrears)
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-900/90">
                    <li>&bull; Tuition for months/weeks the student attended physical or live online classes (backed by biometric/LMS logs).</li>
                    <li>&bull; Actual cost of printed study-material kits, test-series booklets, and tablets already delivered and signed for.</li>
                    <li>&bull; Bounced e-NACH (PSS Act s.25) or PDCs (NI Act s.138) strictly capped to the earned pro-rata balance.</li>
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2">
                  <h3 className="text-sm font-extrabold text-amber-900">
                    Prohibited Under MoE 2024 (Do Not Claim)
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-amber-900/90">
                    <li>&bull; Full-year lump-sum tuition after a student submits a written mid-course withdrawal notice.</li>
                    <li>&bull; Unilateral forfeiture clauses that refuse pro-rata refund of unused future quarters within 10 days of exit.</li>
                    <li>&bull; Presenting an entire balance PDC exceeding the pro-rata earned debt after written withdrawal.</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a parent&apos;s cheque bounces with &ldquo;Account Closed&rdquo; or &ldquo;Signature Mismatch&rdquo; for tuition already consumed, follow our{" "}
                <Link
                  href="/cheque-bounce-account-closed-signature-mismatch"
                  className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-[#B91C1C]"
                >
                  Account Closed &amp; Signature Mismatch s.138 Guide
                </Link>{" "}
                to serve a 30-day statutory demand—just as private K-12 institutions separate earned tuition from regulatory restrictions in our{" "}
                <Link
                  href="/how-private-schools-recover-unpaid-fees-without-withholding-tc"
                  className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-[#B91C1C]"
                >
                  RTE-Compliant Fee Recovery Playbook
                </Link>
                .
              </p>
            </section>

            {/* Dual-Track CTA Mid-Page */}
            <CoachingFranchiseCTA />

            {/* Section 6: Worked ₹3 Cr Financial & Royalty Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked ₹3 Cr Coaching Franchise Default &amp; Royalty Ledger
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Below is a crystal-clear Commercial Court &amp; Arbitral Claim computation for a Tier-2 JEE/NEET franchise centre that collected ₹3,00,00,000 in April admissions, defaulted on its 20% royalty share, and rebranded in August:
              </p>

              <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                    Illustrative Franchisor Claim Schedule (400 Enrolled Students)
                  </span>
                  <span className="text-xs font-semibold text-emerald-400">
                    Commercial Court Pecuniary Floor Met (&gt; ₹3 Lakh)
                  </span>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-300">Gross Student Admissions Collected (400 &times; ₹75,000)</span>
                    <span className="font-mono font-bold text-white">₹3,00,00,000</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-300">Contractual 20% Brand Royalty Share Due to Franchisor</span>
                    <span className="font-mono font-bold text-emerald-400">₹60,00,000</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-300">Unpaid Printed Study-Material Kits &amp; LMS Licenses (400 &times; ₹4,500)</span>
                    <span className="font-mono font-bold text-emerald-400">₹18,00,000</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-300">Contractual Default Interest (18% p.a. for 6 months on ₹78L)</span>
                    <span className="font-mono font-bold text-amber-400">₹7,02,000</span>
                  </div>
                  <div className="flex justify-between gap-4 border-t border-slate-700 pt-2.5">
                    <span className="font-bold text-white">Total Crystallized Principal + Interest Claim</span>
                    <span className="font-mono font-black text-lg text-red-400">₹85,02,000</span>
                  </div>
                  <div className="flex justify-between gap-4 text-xs text-slate-400 pt-1">
                    <span>NI Act s.143A 20% Interim Deposit Leverage (on ₹40L Bounced Royalty PDC)</span>
                    <span className="font-mono font-semibold text-emerald-300">₹8,00,000 (within 60 days)</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If your curriculum printing or EdTech LMS arm holds valid Udyam MSME registration for the ₹18,00,000 study-kit supply component, you can compute statutory monthly compound interest at <strong>3&times; RBI Bank Rate</strong> under Section 16 of the MSMED Act using our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-[#B91C1C]"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>
                , and review entity-mapping tactics in our{" "}
                <Link
                  href="/edtech-b2b-smart-class-school-erp-robotics-lab-unpaid-dues-from-schools"
                  className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-[#B91C1C]"
                >
                  EdTech B2B Vendor Recovery Guide
                </Link>
                .
              </p>
            </section>

            {/* Section 7: BSA 2023 s.63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  BSA 2023 s.63 Evidence &amp; Injunction Readiness Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Commercial Courts grant ex-parte Section 9 injunctions only when the franchisor&apos;s evidentiary paper trail is watertight. Assemble these six records with a signed <strong>Section 63 Bharatiya Sakshya Adhiniyam (BSA), 2023</strong> electronic evidence certificate before filing:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "1. Executed Franchise & Escrow Deed",
                    detail: "Duly stamped Franchise Agreement showing the 20% royalty split, arbitration seat, and post-termination trademark handover covenant.",
                  },
                  {
                    title: "2. Geo-Tagged Rebrand Evidence",
                    detail: "Timestamped photos/videos of the old brand signboard, overnight paint-over, and new academy hoardings at the exact centre address.",
                  },
                  {
                    title: "3. ERP Admission & Fee Ledger",
                    detail: "Student enrollment roster, GST tax invoices, and bank reconciliation showing April–May fee collections retained by the franchisee.",
                  },
                  {
                    title: "4. Watermarked Test-Series & LMS Logs",
                    detail: "PDF serial numbers, IP download logs, and WhatsApp/Telegram batch forwards proving unauthorized circulation of proprietary material.",
                  },
                  {
                    title: "5. Bank Return Memos & NACH Logs",
                    detail: "Original dishonoured royalty PDCs with bank return memos (within 30 days for s.138) plus NPCI e-NACH bounce reports for student installments.",
                  },
                  {
                    title: "6. Entity & Skill-Grant Verification",
                    detail: "MCA/Society registration check of the franchisee; if state skill-grant dues are entangled, pair with a Section 80 CPC notice where applicable.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <h3 className="text-xs sm:text-sm font-extrabold text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Need a structured pre-litigation notice format or a rebuttal to a franchisee&apos;s fabricated counter-notice? See our{" "}
                <Link
                  href="/templates/legal-notice-reply-format"
                  className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-[#B91C1C]"
                >
                  Legal Notice &amp; Reply Format Workspace
                </Link>
                ,{" "}
                <Link
                  href="/school-textbook-publisher-uniform-stationery-distributor-recovery"
                  className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-[#B91C1C]"
                >
                  Textbook &amp; Study-Kit Publisher Recovery Guide
                </Link>
                , and{" "}
                <Link
                  href="/law/section-80-cpc-notice-to-government"
                  className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-[#B91C1C]"
                >
                  Section 80 CPC Government Notice Guide
                </Link>
                .
              </p>
            </section>

            {/* Section 8: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions on Coaching Franchise Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQ_ITEMS.map((item, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="flex items-center justify-between gap-3 cursor-pointer list-none text-sm sm:text-base font-bold text-slate-900">
                      <span>{item.q}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 9: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Primary Statutory Sources &amp; Official Citations
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {PRIMARY_SOURCES.map((src, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#DC2626] font-bold mt-0.5">&rarr;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] underline underline-offset-2 font-medium"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
